# 🤖 Autobot ESP32 Hardware Diagnostics & Control Hub

This project is a complete firmware and dashboard system designed to test and control an ESP32-based robot ("Autobot"). 

It supports:
* **ESP32 Controller** (NodeMCU or similar ESP32 Development Board).
* **L293D Motor Driver Module** (driving left and right DC motors).
* **HC-SR04 Ultrasonic Sensor** (checking front clearance / distance).
* **2x Infrared (IR) Sensors** (detecting obstacles, tracking lines).
* **Built-in Status LED** (GPIO 2, for basic health signaling).

---

## 📂 Project Structure

```text
esp32/
├── firmware/
│   ├── firmware.ino          # Arduino Sketch
│   └── platformio.ini        # PlatformIO Project configuration
└── control-panel/
    ├── index.html            # Dashboard HTML structure
    ├── style.css             # Glassmorphic UI styling
    ├── app.js                # Web Serial & WebSockets controller
    ├── server.js             # Static web server running on standard Node.js
    └── package.json          # Node script commands configuration
```

---

## 🔌 Hardware Connections & Pins

Connect your components to the ESP32 pins as shown in the table below. You can modify these pins in `firmware/firmware.ino` if you choose a different layout.

| Component | ESP32 Pin | Pin Function | Wiring Notes |
| :--- | :--- | :--- | :--- |
| **L293D Motor Driver** | GPIO 12 | IN1 | Motor A Left Forward |
| | GPIO 13 | IN2 | Motor A Left Backward |
| | GPIO 14 | IN3 | Motor B Right Forward |
| | GPIO 27 | IN4 | Motor B Right Backward |
| | GPIO 32 | ENA | Optional Speed PWM (jumper ENA to 5V if unused) |
| | GPIO 33 | ENB | Optional Speed PWM (jumper ENB to 5V if unused) |
| **HC-SR04 Ultrasonic** | GPIO 26 | TRIG | Output Trigger pulse |
| | GPIO 25 | ECHO | Input Echo duration |
| **IR Sensors** | GPIO 34 | Left IR Signal | Digital Input (detects obstacle / line) |
| | GPIO 35 | Right IR Signal | Digital Input (detects obstacle / line) |
| **Onboard Status LED** | GPIO 2 | Built-in LED | Troubleshooting blinker |
| **Power Supply** | Vin & GND | Power | Connect ESP32 Vin to 5V output of L293D, GND to common ground. |

---

## 🚀 Setting Up the Project

### 1. Upload ESP32 Firmware
You can upload the code using either **Arduino IDE** or **VS Code + PlatformIO**:

#### Option A: Arduino IDE (Recommended for beginners)
1. Open the Arduino IDE.
2. Select **File -> Open** and choose `firmware/firmware.ino`.
3. Go to **Tools -> Board** and select your ESP32 model (e.g., *ESP32 Dev Module*).
4. Go to **Tools -> Port** and select the COM port of your connected ESP32.
5. Click the **Upload** arrow button in the toolbar.
6. Open the **Serial Monitor** and set the baud rate to **115200** to see telemetry logs.

#### Option B: VS Code + PlatformIO
1. Open the `firmware/` directory in VS Code (with the PlatformIO extension installed).
2. PlatformIO will automatically read `platformio.ini`.
3. Press `Ctrl + Alt + U` (Windows) or click the **PlatformIO: Upload** arrow icon in the status bar.
4. Open the Serial Monitor using the plug icon.

---

### 2. Start the Control Panel
You can launch the dashboard in two ways:

#### Option A: Run via Node.js local server (Recommended)
1. Open your terminal/command prompt.
2. Navigate to the `control-panel` directory:
   ```bash
   cd control-panel
   ```
3. Run the server script:
   ```bash
   npm start
   ```
4. Open your browser and navigate to: **`http://localhost:3000`**

#### Option B: Static Open
Simply go to `control-panel/` in your Windows file browser, and **double-click `index.html`** to open it directly in Google Chrome, Microsoft Edge, or Opera.

---

## 🕹️ Using the Control Panel Dashboard

### 1. Establish Connection
* **USB Serial**: Ensure the robot is connected to your PC. Select **USB Serial**, click **Connect via Serial**, and pick your ESP32's COM port in the browser popup.
* **WiFi WebSocket** (Optional): If you have adapted the firmware to connect to your WiFi and start a WebSocket server, switch to the **WiFi WebSocket** tab, type the robot's IP address, and click **Connect**.

### 2. Test Components
* **LED Status**: In the diagnostics panel, click "Start Test". You will be asked to toggle the LED to verify physical wiring.
* **L293D Motor Drive**: Use your keyboard keys (**W** / **Arrow Up** to go Front, **S** / **Arrow Down** to go Back) or click the buttons on the dashboard pad. The motors run digitally at full speed when active.
* **Obstacle Safety System**: If the HC-SR04 ultrasonic sensor detects an obstacle closer than **10 cm**, the robot will instantly halt and trigger a red warning badge. If the obstacle is removed or moves **10 cm** or further away, the robot will automatically resume running in its target direction.
* **HC-SR04 Ultrasonic Sonar**: Observe the radar scanner sweep. Bring your hand closer to the ultrasonic sensor; you should see the sweep record red obstacle dots close to the center and the green radar lines flash. The diagnostics wizard will automatically pass this stage if you show it a distance change of $\ge 10\text{cm}$.
* **IR Sensors**: Move your hand in front of the IR sensors. The indicators in the panel will toggle between **Green (Clear)** and **Red (Obstacle Detected)**, and the wizard will automatically pass the step upon detecting a state transition.
