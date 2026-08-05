/*
 * Autobot ESP32 Control and Test Firmware
 * 
 * Configured for an Autobot that:
 * 1. Moves Front (Forward), Back (Backward), Left, Right, and stops.
 * 2. Automatically STOPS moving if an obstacle is closer than 10cm (in both Manual and Line Follower modes).
 * 3. Automatically RESUMES once the obstacle moves 10cm or further away.
 * 4. Supports Autonomous Line Following using 2 IR sensors (detecting black tape line).
 * 5. Provides a text-based Serial CLI for pin integrity diagnostics and system control.
 * 6. Calculates simulated real-time power consumption breakdown.
 * 
 * Hardware Connections (Default Pins):
 * - L293D Motor Driver:
 *     IN1 -> GPIO 12 (Motor A Left Forward)
 *     IN2 -> GPIO 13 (Motor A Left Backward)
 *     IN3 -> GPIO 14 (Motor B Right Forward)
 *     IN4 -> GPIO 27 (Motor B Right Backward)
 *     ENA -> GPIO 32 (Enable A - Digital HIGH/LOW)
 *     ENB -> GPIO 33 (Enable B - Digital HIGH/LOW)
 * - HC-SR04 Ultrasonic Sensor:
 *     TRIG -> GPIO 26
 *     ECHO -> GPIO 25
 * - IR Line/Obstacle Sensors:
 *     Left IR  -> GPIO 34 (Input only)
 *     Right IR -> GPIO 35 (Input only)
 * - Built-in Status LED:
 *     LED -> GPIO 2
 */

#include <Arduino.h>

// --- PIN DEFINITIONS ---
#define PIN_MOTOR_IN1 12
#define PIN_MOTOR_IN2 13
#define PIN_MOTOR_IN3 14
#define PIN_MOTOR_IN4 27
#define PIN_MOTOR_ENA 32
#define PIN_MOTOR_ENB 33

#define PIN_US_TRIG   26
#define PIN_US_ECHO   25

#define PIN_IR_LEFT   34
#define PIN_IR_RIGHT  35

#define PIN_LED       2

// --- CONFIGURATION ---
const unsigned long SEND_INTERVAL = 100; // Send telemetry every 100ms
unsigned long lastSendTime = 0;

const unsigned long CONN_CHECK_INTERVAL = 2000; // Check IR sensor connectivity every 2s
unsigned long lastConnCheckTime = 0;

// Sensor State Variables
float distanceCm = 0.0;
float filteredDistanceCm = 0.0;  // Moving average filtered distance
int irLeftVal = 0;
int irRightVal = 0;
bool usSensorConnected = false;
bool irLeftConnected = true;
bool irRightConnected = true;
int consecutiveUsFailures = 0;
unsigned long lastUsReadTime = 0;  // Track last ultrasonic read for minimum interval
const unsigned long US_READ_INTERVAL = 100; // 100ms between HC-SR04 readings to prevent echo overlap

// Median filter for ultrasonic distance (rejects outliers better than averaging)
const int DIST_FILTER_WINDOW = 5;  // Number of readings for median
float distBuffer[DIST_FILTER_WINDOW] = {0};  // Circular buffer
float sortBuffer[DIST_FILTER_WINDOW] = {0};  // Temp buffer for sorting
int distBufferIndex = 0;
int distBufferCount = 0;  // How many readings we've taken so far

// Compute median value from the circular buffer
float computeMedian() {
  int count = (distBufferCount < DIST_FILTER_WINDOW) ? distBufferCount : DIST_FILTER_WINDOW;
  // Copy to sort buffer
  for (int i = 0; i < count; i++) {
    sortBuffer[i] = distBuffer[i];
  }
  // Bubble sort (small N, simple)
  for (int i = 0; i < count - 1; i++) {
    for (int j = 0; j < count - 1 - i; j++) {
      if (sortBuffer[j] > sortBuffer[j + 1]) {
        float tmp = sortBuffer[j];
        sortBuffer[j] = sortBuffer[j + 1];
        sortBuffer[j + 1] = tmp;
      }
    }
  }
  // Return the middle value
  return sortBuffer[count / 2];
}

// System States
String opMode = "MANUAL";          // MANUAL or LINE
String targetDirection = "STOP";   // The direction the user WANTS (FORWARD, BACKWARD, STOP)
String currentDirection = "STOP";  // The ACTUAL motor output state (FORWARD, BACKWARD, LEFT, RIGHT, STOP)
bool obstacleHalted = false;       // Set to true when blocked by < 10cm obstacle

// Function Declarations
void readSensors();
void checkIncomingCommands();
void processObstacleSafety();
void sendTelemetry();
void applyMotorOutputs(String dir);
void runPinDiagnostics();
void printHelp();
void printStatus();
void printPowerReport();
void calculatePower(float &pEsp, float &pUs, float &pIrL, float &pIrR, float &pL293d, float &pMl, float &pMr, float &pTot);
bool checkIRConnectedFast(int pin);

void setup() {
  // Initialize Serial
  Serial.begin(115200);
  while (!Serial) {
    ; // Wait for serial port to connect
  }

  // Initialize LED
  pinMode(PIN_LED, OUTPUT);
  digitalWrite(PIN_LED, HIGH); // Turn LED on during boot

  // Initialize Motor Pins
  pinMode(PIN_MOTOR_IN1, OUTPUT);
  pinMode(PIN_MOTOR_IN2, OUTPUT);
  pinMode(PIN_MOTOR_IN3, OUTPUT);
  pinMode(PIN_MOTOR_IN4, OUTPUT);
  pinMode(PIN_MOTOR_ENA, OUTPUT);
  pinMode(PIN_MOTOR_ENB, OUTPUT);

  // Initialize Ultrasonic Pins
  pinMode(PIN_US_TRIG, OUTPUT);
  pinMode(PIN_US_ECHO, INPUT);

  // Initialize IR Pins
  pinMode(PIN_IR_LEFT, INPUT);
  pinMode(PIN_IR_RIGHT, INPUT);

  // Stop motors initially
  applyMotorOutputs("STOP");

  // Pulse LED to indicate ready
  delay(200);
  digitalWrite(PIN_LED, LOW);
  delay(200);
  digitalWrite(PIN_LED, HIGH);
  delay(200);
  digitalWrite(PIN_LED, LOW);

  // Initial diagnostics check for IR sensors
  irLeftConnected = checkIRConnectedFast(PIN_IR_LEFT);
  irRightConnected = checkIRConnectedFast(PIN_IR_RIGHT);

  // Initial boot info
  Serial.println("{\"info\":\"Autobot Advanced Firmware Started\",\"version\":\"2.0\"}");
  printHelp();
}

void loop() {
  // 1. Read Sensors
  readSensors();

  // 2. Handle Incoming Serial/CLI Commands
  checkIncomingCommands();

  // 3. Obstacle Avoidance & Motor Safety Logic (handles modes automatically)
  processObstacleSafety();

  // 4. Send Periodic Status Updates (JSON)
  unsigned long currentMillis = millis();
  if (currentMillis - lastSendTime >= SEND_INTERVAL) {
    lastSendTime = currentMillis;
    sendTelemetry();
  }
}

// Read all sensor values and evaluate connectivity
void readSensors() {
  unsigned long currentMillis = millis();
  
  // Read HC-SR04 Ultrasonic Sensor (minimum 60ms between readings per datasheet)
  if (currentMillis - lastUsReadTime >= US_READ_INTERVAL) {
    lastUsReadTime = currentMillis;
    
    digitalWrite(PIN_US_TRIG, LOW);
    delayMicroseconds(2);
    digitalWrite(PIN_US_TRIG, HIGH);
    delayMicroseconds(20);  // 20μs pulse (some HC-SR04 modules need longer than 10μs)
    digitalWrite(PIN_US_TRIG, LOW);

    // Measure echo pulse (timeout of 40000 microseconds = ~6.8 meters)
    long duration = pulseIn(PIN_US_ECHO, HIGH, 40000);
    
    if (duration == 0) {
      consecutiveUsFailures++;
      distanceCm = -1.0; // Invalidate distance immediately on timeout
      filteredDistanceCm = -1.0;
      if (consecutiveUsFailures > 5) {
        usSensorConnected = false;
      }
    } else {
      consecutiveUsFailures = 0;
      usSensorConnected = true;
      distanceCm = (duration * 0.0343) / 2.0;
      
      // Update median filter buffer
      distBuffer[distBufferIndex] = distanceCm;
      distBufferIndex = (distBufferIndex + 1) % DIST_FILTER_WINDOW;
      if (distBufferCount < DIST_FILTER_WINDOW) distBufferCount++;
      
      // Compute median (rejects outliers)
      filteredDistanceCm = computeMedian();
    }
  }

  // Read Digital IR Sensors
  irLeftVal = digitalRead(PIN_IR_LEFT);
  irRightVal = digitalRead(PIN_IR_RIGHT);

  // Periodically check IR sensor physical connectivity (floating inputs detection)
  if (currentMillis - lastConnCheckTime >= CONN_CHECK_INTERVAL) {
    lastConnCheckTime = currentMillis;
    irLeftConnected = checkIRConnectedFast(PIN_IR_LEFT);
    irRightConnected = checkIRConnectedFast(PIN_IR_RIGHT);
  }
}

// Check IR sensor connection using ADC variance analysis (floating pins have high range/noise)
bool checkIRConnectedFast(int pin) {
  int sum = 0;
  int minVal = 4095;
  int maxVal = 0;
  
  for (int i = 0; i < 10; i++) {
    int val = analogRead(pin);
    sum += val;
    if (val < minVal) minVal = val;
    if (val > maxVal) maxVal = val;
    delayMicroseconds(500);
  }
  
  int avg = sum / 10;
  int range = maxVal - minVal;
  
  // Floating inputs drift randomly and pick up 50Hz noise.
  // Actively driven inputs (from the IR receiver LM393 module) sit firmly at HIGH (~4095) or LOW (~0).
  if (range > 200 && avg > 800 && avg < 3200) {
    return false; // Floating (disconnected / OUT)
  }
  return true; // Connected (solid logic level / IN)
}

// Check obstacle safety constraints and automatically stop/resume
void processObstacleSafety() {
  float obstacleDist = (filteredDistanceCm >= 0.0) ? filteredDistanceCm : distanceCm;
  bool obstaclePresent = (usSensorConnected && obstacleDist > 0.0 && obstacleDist < 10.0);

  if (obstaclePresent) {
    // Obstacle detected within 10cm. Halt motor immediately!
    if (currentDirection != "STOP") {
      applyMotorOutputs("STOP");
    }
    obstacleHalted = true;
  } else {
    obstacleHalted = false;
    
    if (opMode == "LINE") {
      // Line Follower Mode: automatic steering based on IR sensors
      // 0 = Black Line (detecting route), 1 = White background (clear)
      if (irLeftVal == 1 && irRightVal == 1) {
        // Both see white -> centered on line -> Go straight
        applyMotorOutputs("FORWARD");
      } 
      else if (irLeftVal == 0 && irRightVal == 1) {
        // Left sees black -> drifted right -> correct by turning left
        applyMotorOutputs("LEFT");
      } 
      else if (irLeftVal == 1 && irRightVal == 0) {
        // Right sees black -> drifted left -> correct by turning right
        applyMotorOutputs("RIGHT");
      } 
      else {
        // Both see black -> cross section or T-junction -> Go straight
        applyMotorOutputs("FORWARD");
      }
    } 
    else {
      // Manual Control Mode
      if (targetDirection == "FORWARD") {
        applyMotorOutputs("FORWARD");
      } 
      else if (targetDirection == "BACKWARD") {
        applyMotorOutputs("BACKWARD");
      } 
      else {
        applyMotorOutputs("STOP");
      }
    }
  }
}

// Calculate the estimated electrical power drawn by the components
void calculatePower(float &pEsp, float &pUs, float &pIrL, float &pIrR, float &pL293d, float &pMl, float &pMr, float &pTot) {
  // ESP32 Power: V = 3.3V, I = 120mA (active serial processing)
  pEsp = 3.3 * 120.0; // mW

  // HC-SR04 Power: V = 5V, I = 15mA when connected, else 0
  pUs = usSensorConnected ? (5.0 * 15.0) : 0.0; // mW

  // IR Sensors Power: V = 5V, I = 12mA each when connected
  pIrL = irLeftConnected ? (5.0 * 12.0) : 0.0; // mW
  pIrR = irRightConnected ? (5.0 * 12.0) : 0.0; // mW

  // L293D Logic: V = 5V, I = 22mA (gate current)
  pL293d = 5.0 * 22.0; // mW

  // DC Motors (9V, 180mA per running motor)
  float motorV = 9.0;
  float motorI = 180.0; // mA under nominal load

  float currentMl = 0.0;
  float currentMr = 0.0;

  if (currentDirection == "FORWARD") {
    currentMl = motorI;
    currentMr = motorI;
  } else if (currentDirection == "BACKWARD") {
    currentMl = motorI;
    currentMr = motorI;
  } else if (currentDirection == "LEFT") {
    currentMl = motorI; // Left motor reverses
    currentMr = motorI; // Right motor forward
  } else if (currentDirection == "RIGHT") {
    currentMl = motorI; // Left motor forward
    currentMr = motorI; // Right motor reverses
  } else {
    currentMl = 0.0;
    currentMr = 0.0;
  }

  pMl = motorV * currentMl;
  pMr = motorV * currentMr;

  pTot = pEsp + pUs + pIrL + pIrR + pL293d + pMl + pMr;
}

// Send structured telemetry to dashboard
void sendTelemetry() {
  float pEsp, pUs, pIrL, pIrR, pL293d, pMl, pMr, pTot;
  calculatePower(pEsp, pUs, pIrL, pIrR, pL293d, pMl, pMr, pTot);

  Serial.print("{\"d\":");
  float displayDist = (filteredDistanceCm >= 0.0) ? filteredDistanceCm : distanceCm;
  Serial.print(displayDist, 1);
  Serial.print(",\"d_raw\":");
  Serial.print(distanceCm, 1);
  Serial.print(",\"us_ok\":");
  Serial.print(usSensorConnected ? "true" : "false");
  Serial.print(",\"us_filt\":");
  Serial.print(filteredDistanceCm, 1);
  Serial.print(",\"ir_l\":");
  Serial.print(irLeftVal);
  Serial.print(",\"ir_l_ok\":");
  Serial.print(irLeftConnected ? "true" : "false");
  Serial.print(",\"ir_r\":");
  Serial.print(irRightVal);
  Serial.print(",\"ir_r_ok\":");
  Serial.print(irRightConnected ? "true" : "false");
  Serial.print(",\"dir\":\"");
  Serial.print(targetDirection);
  Serial.print("\",\"act_dir\":\"");
  Serial.print(currentDirection);
  Serial.print("\",\"halt\":");
  Serial.print(obstacleHalted ? "true" : "false");
  Serial.print(",\"led\":");
  Serial.print(digitalRead(PIN_LED));
  Serial.print(",\"mode\":\"");
  Serial.print(opMode);
  Serial.print("\",\"p_esp\":");
  Serial.print(pEsp, 1);
  Serial.print(",\"p_us\":");
  Serial.print(pUs, 1);
  Serial.print(",\"p_irl\":");
  Serial.print(pIrL, 1);
  Serial.print(",\"p_irr\":");
  Serial.print(pIrR, 1);
  Serial.print(",\"p_l293d\":");
  Serial.print(pL293d, 1);
  Serial.print(",\"p_ml\":");
  Serial.print(pMl, 1);
  Serial.print(",\"p_mr\":");
  Serial.print(pMr, 1);
  Serial.print(",\"p_tot\":");
  Serial.print(pTot, 1);
  Serial.print(",\"t\":");
  Serial.print(millis());
  Serial.println("}");
}

// Process commands received from Serial
void checkIncomingCommands() {
  if (Serial.available() > 0) {
    String cmd = Serial.readStringUntil('\n');
    cmd.trim();

    if (cmd.length() == 0) return;

    // Send command echo back for Web UI logs
    Serial.print("{\"echo\":\"");
    Serial.print(cmd);
    Serial.println("\"}");

    String upperCmd = cmd;
    upperCmd.toUpperCase();
    
    if (upperCmd == "HELP" || upperCmd == "?") {
      printHelp();
    } 
    else if (upperCmd == "STATUS") {
      printStatus();
    } 
    else if (upperCmd == "DIAG" || upperCmd == "TEST_PINS") {
      runPinDiagnostics();
    } 
    else if (upperCmd.startsWith("TEST_PIN ")) {
      int pinNum = upperCmd.substring(9).toInt();
      int prev_state = 0;
      if (pinNum != 34 && pinNum != 35 && pinNum != 36 && pinNum != 39) {
        prev_state = digitalRead(pinNum);
      }
      
      auto localTestOutput = [](int pin) -> bool {
        if (pin == 34 || pin == 35 || pin == 36 || pin == 39) return true;
        pinMode(pin, OUTPUT);
        digitalWrite(pin, HIGH);
        delay(2);
        if (digitalRead(pin) != HIGH) return false;
        digitalWrite(pin, LOW);
        delay(2);
        if (digitalRead(pin) != LOW) return false;
        return true;
      };

      auto localCheckInputConnected = [](int pin) -> bool {
        if (pin == 34 || pin == 35 || pin == 36 || pin == 39) {
          int sum = 0;
          int minVal = 4095;
          int maxVal = 0;
          for (int i = 0; i < 15; i++) {
            int val = analogRead(pin);
            sum += val;
            if (val < minVal) minVal = val;
            if (val > maxVal) maxVal = val;
            delayMicroseconds(500);
          }
          int avg = sum / 15;
          int range = maxVal - minVal;
          if (range > 200 && avg > 800 && avg < 3200) {
            return false;
          }
          return true;
        }
        
        pinMode(pin, INPUT_PULLUP);
        delay(2);
        int valPullUp = digitalRead(pin);
        pinMode(pin, INPUT_PULLDOWN);
        delay(2);
        int valPullDown = digitalRead(pin);
        return (valPullUp == valPullDown);
      };

      bool isConnected = localCheckInputConnected(pinNum);
      bool isFunctional = localTestOutput(pinNum);

      // Restore previous pin state
      if (pinNum == PIN_US_ECHO || pinNum == PIN_IR_LEFT || pinNum == PIN_IR_RIGHT) {
        pinMode(pinNum, INPUT);
      } else if (pinNum != 34 && pinNum != 35 && pinNum != 36 && pinNum != 39) {
        pinMode(pinNum, OUTPUT);
        digitalWrite(pinNum, prev_state);
      } else {
        pinMode(pinNum, INPUT);
      }

      // Send JSON response for dashboard
      Serial.printf("{\"pin_test\":{\"pin\":%d,\"connected\":%d,\"functional\":%d}}\n", pinNum, isConnected ? 1 : 0, isFunctional ? 1 : 0);

    }
    else if (upperCmd.startsWith("TEST_SONAR ")) {
      int spaceIdx = upperCmd.indexOf(' ', 11);
      if (spaceIdx > 0) {
        int trigPin = upperCmd.substring(11, spaceIdx).toInt();
        int echoPin = upperCmd.substring(spaceIdx + 1).toInt();
        
        pinMode(trigPin, OUTPUT);
        pinMode(echoPin, INPUT);
        
        digitalWrite(trigPin, LOW);
        delayMicroseconds(2);
        digitalWrite(trigPin, HIGH);
        delayMicroseconds(20);  // 20μs pulse for consistent triggering
        digitalWrite(trigPin, LOW);
        
        long duration = pulseIn(echoPin, HIGH, 40000);  // 40ms timeout for test
        bool success = (duration > 0);
        float dist = success ? (duration * 0.0343) / 2.0 : -1.0;
        
        if (trigPin == PIN_US_TRIG) {
          pinMode(PIN_US_TRIG, OUTPUT);
          digitalWrite(PIN_US_TRIG, LOW);
        }
        if (echoPin == PIN_US_ECHO) {
          pinMode(PIN_US_ECHO, INPUT);
        }
        
        Serial.printf("{\"sonar_test\":{\"trig\":%d,\"echo\":%d,\"connected\":%d,\"distance\":%.2f}}\n", trigPin, echoPin, success ? 1 : 0, dist);
      } else {
        Serial.println("{\"error\":\"Invalid TEST_SONAR arguments\"}");
      }
    }
    else if (upperCmd == "POWER") {
      printPowerReport();
    } 
    else if (upperCmd.startsWith("MODE ")) {
      String modeArg = upperCmd.substring(5);
      modeArg.trim();
      if (modeArg == "LINE") {
        opMode = "LINE";
        Serial.println("{\"info\":\"Switched mode to Autonomous Line Follower\"}");
      } else if (modeArg == "MANUAL") {
        opMode = "MANUAL";
        targetDirection = "STOP";
        applyMotorOutputs("STOP");
        Serial.println("{\"info\":\"Switched mode to Manual Driver Control\"}");
      } else {
        Serial.println("{\"error\":\"Invalid Mode. Use 'LINE' or 'MANUAL'\"}");
      }
    } 
    else if (upperCmd == "F") {
      if (opMode == "MANUAL") {
        targetDirection = "FORWARD";
      } else {
        Serial.println("{\"error\":\"Cannot override direction in Autonomous Line Follower mode.\"}");
      }
    } 
    else if (upperCmd == "B") {
      if (opMode == "MANUAL") {
        targetDirection = "BACKWARD";
      } else {
        Serial.println("{\"error\":\"Cannot override direction in Autonomous Line Follower mode.\"}");
      }
    } 
    else if (upperCmd == "S") {
      if (opMode == "MANUAL") {
        targetDirection = "STOP";
      } else {
        Serial.println("{\"error\":\"Cannot override direction in Autonomous Line Follower mode.\"}");
      }
    } 
    else if (upperCmd.startsWith("LED ")) {
      int state = upperCmd.substring(4).toInt();
      digitalWrite(PIN_LED, state == 1 ? HIGH : LOW);
    } 
    else {
      // Support legacy character triggers directly
      char singleChar = upperCmd.charAt(0);
      if (singleChar == 'F' && opMode == "MANUAL") {
        targetDirection = "FORWARD";
      } else if (singleChar == 'B' && opMode == "MANUAL") {
        targetDirection = "BACKWARD";
      } else if (singleChar == 'S' && opMode == "MANUAL") {
        targetDirection = "STOP";
      } else {
        Serial.println("{\"error\":\"Invalid Command. Type 'help' for command list.\"}");
      }
    }
  }
}

// Print CLI command list
void printHelp() {
  Serial.println("\n--- Autobot ESP32 CLI Command List ---");
  Serial.println("  HELP or ?         - Display this command list");
  Serial.println("  STATUS            - Display current telemetry status");
  Serial.println("  DIAG or TEST_PINS - Run automated pin hardware test suite");
  Serial.println("  POWER             - Print full system power consumption breakdown");
  Serial.println("  MODE <MANUAL/LINE>- Change operational mode");
  Serial.println("  F                 - Move Forward (Manual Mode only)");
  Serial.println("  B                 - Move Backward (Manual Mode only)");
  Serial.println("  S                 - Stop Motors (Manual Mode only)");
  Serial.println("  LED <0/1>         - Toggle status LED (0 = off, 1 = on)");
  Serial.println("--------------------------------------");
}

// Print status summary in plain text
void printStatus() {
  float pEsp, pUs, pIrL, pIrR, pL293d, pMl, pMr, pTot;
  calculatePower(pEsp, pUs, pIrL, pIrR, pL293d, pMl, pMr, pTot);

  Serial.println("\n=== Autobot System Status ===");
  Serial.print("  Operation Mode:   "); Serial.println(opMode);
  Serial.print("  Target Direction: "); Serial.println(targetDirection);
  Serial.print("  Actual Direction: "); Serial.println(currentDirection);
  Serial.print("  Obstacle Halted:  "); Serial.println(obstacleHalted ? "YES" : "NO");
  Serial.print("  Ultrasonic Dist:  "); Serial.print(distanceCm, 1); Serial.print(" cm ("); Serial.print(usSensorConnected ? "CONNECTED" : "DISCONNECTED"); Serial.println(")");
  Serial.print("  Left IR Sensor:   "); Serial.print(irLeftVal == 0 ? "LOW (BLACK LINE/OBJECT)" : "HIGH (CLEAR)"); Serial.print(" ("); Serial.print(irLeftConnected ? "CONNECTED" : "DISCONNECTED"); Serial.println(")");
  Serial.print("  Right IR Sensor:  "); Serial.print(irRightVal == 0 ? "LOW (BLACK LINE/OBJECT)" : "HIGH (CLEAR)"); Serial.print(" ("); Serial.print(irRightConnected ? "CONNECTED" : "DISCONNECTED"); Serial.println(")");
  Serial.print("  Total Power:      "); Serial.print(pTot, 1); Serial.print(" mW ("); Serial.print(pTot / 1000.0, 3); Serial.println(" W)");
  Serial.println("=============================");
}

// Print detailed power report
void printPowerReport() {
  float pEsp, pUs, pIrL, pIrR, pL293d, pMl, pMr, pTot;
  calculatePower(pEsp, pUs, pIrL, pIrR, pL293d, pMl, pMr, pTot);

  Serial.println("\n=== Power Consumption Breakdown ===");
  Serial.println("Component          Voltage    Current    Power");
  Serial.println("----------------------------------------------");
  Serial.printf("ESP32 Controller   3.3 V      120.0 mA   %.1f mW\n", pEsp);
  Serial.printf("HC-SR04 Sonar      5.0 V      %.1f mA    %.1f mW\n", usSensorConnected ? 15.0 : 0.0, pUs);
  Serial.printf("Left IR Sensor     5.0 V      %.1f mA    %.1f mW\n", irLeftConnected ? 12.0 : 0.0, pIrL);
  Serial.printf("Right IR Sensor    5.0 V      %.1f mA    %.1f mW\n", irRightConnected ? 12.0 : 0.0, pIrR);
  Serial.printf("L293D Logic        5.0 V      22.0 mA    %.1f mW\n", pL293d);
  Serial.printf("Motor Left (A)     9.0 V      %.1f mA    %.1f mW\n", (currentDirection == "STOP") ? 0.0 : 180.0, pMl);
  Serial.printf("Motor Right (B)    9.0 V      %.1f mA    %.1f mW\n", (currentDirection == "STOP") ? 0.0 : 180.0, pMr);
  Serial.println("----------------------------------------------");
  Serial.printf("Total Power Consumption: %.1f mW (%.3f W)\n", pTot, pTot / 1000.0);
  Serial.println("==============================================");
}

// Execute diagnostic hardware pin testing suite
void runPinDiagnostics() {
  // Save current motor pins state & direction to restore later
  int prev_in1 = digitalRead(PIN_MOTOR_IN1);
  int prev_in2 = digitalRead(PIN_MOTOR_IN2);
  int prev_in3 = digitalRead(PIN_MOTOR_IN3);
  int prev_in4 = digitalRead(PIN_MOTOR_IN4);
  int prev_ena = digitalRead(PIN_MOTOR_ENA);
  int prev_enb = digitalRead(PIN_MOTOR_ENB);
  int prev_led = digitalRead(PIN_LED);

  bool led_f = true, led_c = true;
  bool in1_f = true, in1_c = true;
  bool in2_f = true, in2_c = true;
  bool in3_f = true, in3_c = true;
  bool in4_f = true, in4_c = true;
  bool ena_f = true, ena_c = true;
  bool enb_f = true, enb_c = true;
  bool trig_f = true, trig_c = true;
  bool echo_f = true, echo_c = true;
  bool ir_l_f = true, ir_l_c = true;
  bool ir_r_f = true, ir_r_c = true;

  // Helper lambda to test if output pin can drive HIGH and LOW and read it back
  auto testOutput = [](int pin) -> bool {
    pinMode(pin, OUTPUT);
    digitalWrite(pin, HIGH);
    delay(2);
    if (digitalRead(pin) != HIGH) return false;
    digitalWrite(pin, LOW);
    delay(2);
    if (digitalRead(pin) != LOW) return false;
    return true;
  };

  // Helper lambda to check input pin connection using pullup/pulldown
  // If connected to a low impedance source (like HC-SR04 echo or trig pulldown),
  // pullup and pulldown will read the same driven value.
  // If disconnected (floating), pullup will read HIGH and pulldown will read LOW.
  auto checkInputConnected = [](int pin) -> bool {
    pinMode(pin, INPUT_PULLUP);
    delay(2);
    int valPullUp = digitalRead(pin);
    pinMode(pin, INPUT_PULLDOWN);
    delay(2);
    int valPullDown = digitalRead(pin);
    
    return (valPullUp == valPullDown);
  };

  // Test LED
  led_f = testOutput(PIN_LED);
  led_c = true; // Built-in LED is always physically connected

  // Test Motors (outputs)
  in1_f = testOutput(PIN_MOTOR_IN1);
  in2_f = testOutput(PIN_MOTOR_IN2);
  in3_f = testOutput(PIN_MOTOR_IN3);
  in4_f = testOutput(PIN_MOTOR_IN4);
  ena_f = testOutput(PIN_MOTOR_ENA);
  enb_f = testOutput(PIN_MOTOR_ENB);

  // Check physical connection using pullup/pulldown check
  in1_c = checkInputConnected(PIN_MOTOR_IN1);
  in2_c = checkInputConnected(PIN_MOTOR_IN2);
  in3_c = checkInputConnected(PIN_MOTOR_IN3);
  in4_c = checkInputConnected(PIN_MOTOR_IN4);
  ena_c = checkInputConnected(PIN_MOTOR_ENA);
  enb_c = checkInputConnected(PIN_MOTOR_ENB);

  // Test Ultrasonic pins
  trig_f = testOutput(PIN_US_TRIG);
  trig_c = checkInputConnected(PIN_US_TRIG);

  // Echo is input
  echo_f = true; 
  echo_c = checkInputConnected(PIN_US_ECHO);

  // IR sensors (GPIO 34 and 35) are input-only, no pullup/pulldown.
  // We check analog levels to see if they are floating.
  ir_l_f = true;
  ir_l_c = checkIRConnectedFast(PIN_IR_LEFT);
  ir_r_f = true;
  ir_r_c = checkIRConnectedFast(PIN_IR_RIGHT);

  // Restore pins
  pinMode(PIN_LED, OUTPUT);
  digitalWrite(PIN_LED, prev_led);
  
  pinMode(PIN_MOTOR_IN1, OUTPUT);
  digitalWrite(PIN_MOTOR_IN1, prev_in1);
  pinMode(PIN_MOTOR_IN2, OUTPUT);
  digitalWrite(PIN_MOTOR_IN2, prev_in2);
  pinMode(PIN_MOTOR_IN3, OUTPUT);
  digitalWrite(PIN_MOTOR_IN3, prev_in3);
  pinMode(PIN_MOTOR_IN4, OUTPUT);
  digitalWrite(PIN_MOTOR_IN4, prev_in4);
  pinMode(PIN_MOTOR_ENA, OUTPUT);
  digitalWrite(PIN_MOTOR_ENA, prev_ena);
  pinMode(PIN_MOTOR_ENB, OUTPUT);
  digitalWrite(PIN_MOTOR_ENB, prev_enb);

  pinMode(PIN_US_TRIG, OUTPUT);
  digitalWrite(PIN_US_TRIG, LOW);
  pinMode(PIN_US_ECHO, INPUT);

  pinMode(PIN_IR_LEFT, INPUT);
  pinMode(PIN_IR_RIGHT, INPUT);

  // Print CLI text report
  Serial.println("\n=============================================");
  Serial.println("           ESP32 PIN DIAGNOSTIC REPORT        ");
  Serial.println("=============================================");
  Serial.println("Pin      Function      Functioning  Connected");
  Serial.println("---------------------------------------------");
  Serial.printf("GPIO 2   LED Status    %s          %s\n", led_f ? "OK " : "FAIL", led_c ? "IN " : "OUT");
  Serial.printf("GPIO 12  Motor IN1     %s          %s\n", in1_f ? "OK " : "FAIL", in1_c ? "IN " : "OUT");
  Serial.printf("GPIO 13  Motor IN2     %s          %s\n", in2_f ? "OK " : "FAIL", in2_c ? "IN " : "OUT");
  Serial.printf("GPIO 14  Motor IN3     %s          %s\n", in3_f ? "OK " : "FAIL", in3_c ? "IN " : "OUT");
  Serial.printf("GPIO 27  Motor IN4     %s          %s\n", in4_f ? "OK " : "FAIL", in4_c ? "IN " : "OUT");
  Serial.printf("GPIO 32  Motor ENA     %s          %s\n", ena_f ? "OK " : "FAIL", ena_c ? "IN " : "OUT");
  Serial.printf("GPIO 33  Motor ENB     %s          %s\n", enb_f ? "OK " : "FAIL", enb_c ? "IN " : "OUT");
  Serial.printf("GPIO 26  US TRIG       %s          %s\n", trig_f ? "OK " : "FAIL", trig_c ? "IN " : "OUT");
  Serial.printf("GPIO 25  US ECHO       %s          %s\n", echo_f ? "OK " : "FAIL", echo_c ? "IN " : "OUT");
  Serial.printf("GPIO 34  Left IR       %s          %s\n", ir_l_f ? "OK " : "FAIL", ir_l_c ? "IN " : "OUT");
  Serial.printf("GPIO 35  Right IR      %s          %s\n", ir_r_f ? "OK " : "FAIL", ir_r_c ? "IN " : "OUT");
  Serial.println("=============================================");

  // Send JSON telemetry output for Dashboard
  Serial.print("{\"pin_diag\":{");
  Serial.printf("\"led\":{\"f\":%d,\"c\":%d},", led_f, led_c);
  Serial.printf("\"in1\":{\"f\":%d,\"c\":%d},", in1_f, in1_c);
  Serial.printf("\"in2\":{\"f\":%d,\"c\":%d},", in2_f, in2_c);
  Serial.printf("\"in3\":{\"f\":%d,\"c\":%d},", in3_f, in3_c);
  Serial.printf("\"in4\":{\"f\":%d,\"c\":%d},", in4_f, in4_c);
  Serial.printf("\"ena\":{\"f\":%d,\"c\":%d},", ena_f, ena_c);
  Serial.printf("\"enb\":{\"f\":%d,\"c\":%d},", enb_f, enb_c);
  Serial.printf("\"trig\":{\"f\":%d,\"c\":%d},", trig_f, trig_c);
  Serial.printf("\"echo\":{\"f\":%d,\"c\":%d},", echo_f, echo_c);
  Serial.printf("\"ir_l\":{\"f\":%d,\"c\":%d},", ir_l_f, ir_l_c);
  Serial.printf("\"ir_r\":{\"f\":%d,\"c\":%d}", ir_r_f, ir_r_c);
  Serial.println("}}");
}

// --- DIGITAL MOTOR CONTROL ---
void applyMotorOutputs(String dir) {
  currentDirection = dir;

  if (dir == "FORWARD") {
    // Set direction pins to move forward
    digitalWrite(PIN_MOTOR_IN1, HIGH);
    digitalWrite(PIN_MOTOR_IN2, LOW);
    digitalWrite(PIN_MOTOR_IN3, HIGH);
    digitalWrite(PIN_MOTOR_IN4, LOW);

    // Fully enable both channels (Full Speed)
    digitalWrite(PIN_MOTOR_ENA, HIGH);
    digitalWrite(PIN_MOTOR_ENB, HIGH);
  } 
  else if (dir == "BACKWARD") {
    // Set direction pins to move backward
    digitalWrite(PIN_MOTOR_IN1, LOW);
    digitalWrite(PIN_MOTOR_IN2, HIGH);
    digitalWrite(PIN_MOTOR_IN3, LOW);
    digitalWrite(PIN_MOTOR_IN4, HIGH);

    // Fully enable both channels (Full Speed)
    digitalWrite(PIN_MOTOR_ENA, HIGH);
    digitalWrite(PIN_MOTOR_ENB, HIGH);
  } 
  else if (dir == "LEFT") {
    // Left motor (Motor A) Backward (IN1=LOW, IN2=HIGH)
    digitalWrite(PIN_MOTOR_IN1, LOW);
    digitalWrite(PIN_MOTOR_IN2, HIGH);
    // Right motor (Motor B) Forward (IN3=HIGH, IN4=LOW)
    digitalWrite(PIN_MOTOR_IN3, HIGH);
    digitalWrite(PIN_MOTOR_IN4, LOW);

    // Enable both
    digitalWrite(PIN_MOTOR_ENA, HIGH);
    digitalWrite(PIN_MOTOR_ENB, HIGH);
  }
  else if (dir == "RIGHT") {
    // Left motor (Motor A) Forward (IN1=HIGH, IN2=LOW)
    digitalWrite(PIN_MOTOR_IN1, HIGH);
    digitalWrite(PIN_MOTOR_IN2, LOW);
    // Right motor (Motor B) Backward (IN3=LOW, IN4=HIGH)
    digitalWrite(PIN_MOTOR_IN3, LOW);
    digitalWrite(PIN_MOTOR_IN4, HIGH);

    // Enable both
    digitalWrite(PIN_MOTOR_ENA, HIGH);
    digitalWrite(PIN_MOTOR_ENB, HIGH);
  }
  else { // STOP
    // Set IN pins LOW to stop motor spin
    digitalWrite(PIN_MOTOR_IN1, LOW);
    digitalWrite(PIN_MOTOR_IN2, LOW);
    digitalWrite(PIN_MOTOR_IN3, LOW);
    digitalWrite(PIN_MOTOR_IN4, LOW);

    // Turn off ENA/ENB enable channels
    digitalWrite(PIN_MOTOR_ENA, LOW);
    digitalWrite(PIN_MOTOR_ENB, LOW);
  }
}
