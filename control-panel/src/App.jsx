import React, { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';

// Hardware modules configuration for diagnostics
const hardwareModules = {
    l293d: {
        name: "L293D Motor Driver",
        pins: [
            { label: "IN1 (M1 Forward)", default: 12, key: "in1" },
            { label: "IN2 (M1 Reverse)", default: 13, key: "in2" },
            { label: "IN3 (M2 Forward)", default: 14, key: "in3" },
            { label: "IN4 (M2 Reverse)", default: 27, key: "in4" },
            { label: "ENA (M1 Enable)", default: 32, key: "ena" },
            { label: "ENB (M2 Enable)", default: 33, key: "enb" }
        ],
        description: "Bipolar motor driver used to run 2 DC motors. Connected to GPIO outputs."
    },
    hcsr04: {
        name: "HC-SR04 Ultrasonic Sonar",
        pins: [
            { label: "TRIG (Trigger)", default: 26, key: "trig" },
            { label: "ECHO (Echo)", default: 25, key: "echo" }
        ],
        description: "Distance measurement sensor. Requires 5V VCC, GND, trigger output and echo input."
    },
    ir_left: {
        name: "Left IR Obstacle Sensor",
        pins: [
            { label: "OUT (Signal Pin)", default: 34, key: "out" }
        ],
        description: "Infrared digital line/obstacle sensor. GPIO 34 (input-only, analog noise verification)."
    },
    ir_right: {
        name: "Right IR Obstacle Sensor",
        pins: [
            { label: "OUT (Signal Pin)", default: 35, key: "out" }
        ],
        description: "Infrared digital line/obstacle sensor. GPIO 35 (input-only, analog noise verification)."
    },
    servo: {
        name: "SG90 Servo Motor",
        pins: [
            { label: "PWM (Control Signal)", default: 18, key: "pwm" }
        ],
        description: "Standard positional servo motor. Driven by hardware PWM."
    },
    dht11: {
        name: "DHT11 Temp & Humidity",
        pins: [
            { label: "DATA (Signal Pin)", default: 4, key: "data" }
        ],
        description: "Digital single-bus temperature and humidity sensor."
    }
};

const commonGPIOPins = [2, 4, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 25, 26, 27, 32, 33, 34, 35];

const getPinConfigKey = (moduleKey, pinKey) => {
    if (moduleKey === 'ir_left') return 'ir_l';
    if (moduleKey === 'ir_right') return 'ir_r';
    if (moduleKey === 'servo') return 'servo';
    if (moduleKey === 'dht11') return 'dht11';
    return pinKey; // in1, in2, in3, in4, ena, enb, trig, echo
};

function App() {
    // --- STATE MANAGEMENT ---
    const [isConnected, setIsConnected] = useState(false);
    const [connType, setConnType] = useState('serial'); // 'serial' or 'wifi'
    const [connStatusText, setConnStatusText] = useState('Disconnected');
    const [connStatusClass, setConnStatusClass] = useState('status-indicator state-disconnected');
    
    const [wsIp, setWsIp] = useState('192.168.1.100');
    const [cliInputVal, setCliInputVal] = useState('');
    
    // Telemetry display states
    const [telemetry, setTelemetry] = useState({
        dist: -1,
        us_ok: false,
        irL: 1,
        irR: 1,
        dir: 'STOP',
        act_dir: 'STOP',
        halt: false,
        p_tot: 0,
        p_esp: 0,
        p_us: 0,
        p_irl: 0,
        p_irr: 0,
        p_l293d: 0,
        p_ml: 0,
        p_mr: 0,
        ir_l_ok: false,
        ir_r_ok: false,
        mode: 'MANUAL'
    });

    const [energyAccumulated, setEnergyAccumulated] = useState(0);
    const [pinDiags, setPinDiags] = useState(null);

    // Diagnostics / Module Testing states
    const [selectedModule, setSelectedModule] = useState('none');
    const [allPinConfigs, setAllPinConfigs] = useState({
        led: 2,
        in1: 12,
        in2: 13,
        in3: 14,
        in4: 27,
        ena: 32,
        enb: 33,
        trig: 26,
        echo: 25,
        ir_l: 34,
        ir_r: 35,
        servo: 18,
        dht11: 4
    });
    const [isTestingModule, setIsTestingModule] = useState(false);
    const [activeTestResults, setActiveTestResults] = useState({});
    const [logs, setLogs] = useState([{ id: 1, time: new Date().toLocaleTimeString(), text: "Console initialized. Awaiting connection...", type: "system-log" }]);

    // Refs for streams and serial instances
    const serialPortRef = useRef(null);
    const socketRef = useRef(null);
    const keepReadingRef = useRef(true);
    
    const obstaclePointsRef = useRef([]);
    const radarAngleRef = useRef(0);
    const radarDirectionRef = useRef(1);
    const radarCanvasRef = useRef(null);
    const logsEndRef = useRef(null);
    
    const lastEnergyCalcTimeRef = useRef(Date.now());
    
    // Test execution state queue
    const activeTestIndexRef = useRef(0);
    const activeTestPinsRef = useRef([]);
    const diagActiveRef = useRef(false);
    const activeKeysRef = useRef({});
    const testTimeoutRef = useRef(null);
    const activeTestResultsRef = useRef({});
    
    // Refs for test response handlers (so handleTelemetry avoids stale closures)
    const pinTestHandlerRef = useRef(null);
    const sonarTestHandlerRef = useRef(null);

    // --- LOGGER ---
    const logToConsole = useCallback((text, type = "system-log") => {
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        setLogs(prev => [...prev, {
            id: Date.now() + Math.random(),
            time,
            text,
            type
        }]);
    }, []);

    // --- COMMAND EMITTER ---
    const sendCommand = useCallback(async (cmdString) => {
        if (!serialPortRef.current && !socketRef.current) return;
        
        logToConsole(`TX command: ${cmdString}`, "tx-log");
        const encoder = new TextEncoder();
        const data = encoder.encode(cmdString + '\n');

        if (connType === 'serial' && serialPortRef.current) {
            try {
                const writer = serialPortRef.current.writable.getWriter();
                await writer.write(data);
                writer.releaseLock();
            } catch (err) {
                logToConsole(`Error writing command: ${err.message}`, "error-log");
            }
        } else if (connType === 'wifi' && socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
            try {
                socketRef.current.send(cmdString + '\n');
            } catch (err) {
                logToConsole(`Error sending via socket: ${err.message}`, "error-log");
            }
        }
    }, [connType, logToConsole]);

    // --- DISCONNECT HANDLER ---
    const disconnectAll = useCallback(() => {
        setIsConnected(false);
        setConnStatusText("Disconnected");
        setConnStatusClass("status-indicator state-disconnected");
        keepReadingRef.current = false;
        
        if (serialPortRef.current) {
            try {
                serialPortRef.current.close().catch(() => {});
            } catch (e) {}
            serialPortRef.current = null;
        }

        if (socketRef.current) {
            try {
                socketRef.current.close();
            } catch (e) {}
            socketRef.current = null;
        }

        // Reset Telemetry
        setTelemetry({
            dist: -1,
            us_ok: false,
            irL: 1,
            irR: 1,
            dir: 'STOP',
            act_dir: 'STOP',
            halt: false,
            p_tot: 0,
            p_esp: 0,
            p_us: 0,
            p_irl: 0,
            p_irr: 0,
            p_l293d: 0,
            p_ml: 0,
            p_mr: 0,
            ir_l_ok: false,
            ir_r_ok: false,
            mode: 'MANUAL'
        });
        
        setEnergyAccumulated(0);
        setPinDiags(null);
        setIsTestingModule(false);
        setSelectedModule('none');
        setActiveTestResults({});
        diagActiveRef.current = false;
        
        logToConsole("All connections closed. GUI put into standby.", "system-log");
    }, [logToConsole]);

    // --- TELEMETRY PARSER ---
    const handleTelemetry = useCallback((jsonStr) => {
        try {
            const data = JSON.parse(jsonStr);
            // Intercept Pin Test diagnostics response via refs (avoids stale closure)
            if (data.pin_test) {
                if (pinTestHandlerRef.current) pinTestHandlerRef.current(data.pin_test);
                return;
            }
            if (data.sonar_test) {
                if (sonarTestHandlerRef.current) sonarTestHandlerRef.current(data.sonar_test);
                return;
            }
            if (data.info) {
                logToConsole(`Robot Info: ${data.info}`, "system-log");
                return;
            }
            if (data.echo) return;
            if (data.error) {
                logToConsole(`Robot Error: ${data.error}`, "error-log");
                return;
            }
            // Normal telemetry updates
            setTelemetry(prev => ({
                ...prev,
                dist: data.d !== undefined ? data.d : prev.dist,
                us_ok: data.us_ok !== undefined ? data.us_ok : prev.us_ok,
                irL: data.ir_l !== undefined ? data.ir_l : prev.irL,
                irR: data.ir_r !== undefined ? data.ir_r : prev.irR,
                dir: data.dir !== undefined ? data.dir : prev.dir,
                act_dir: data.act_dir !== undefined ? data.act_dir : prev.act_dir,
                halt: data.halt !== undefined ? data.halt : prev.halt,
                p_tot: data.p_tot !== undefined ? data.p_tot : prev.p_tot,
                p_esp: data.p_esp !== undefined ? data.p_esp : prev.p_esp,
                p_us: data.p_us !== undefined ? data.p_us : prev.p_us,
                p_irl: data.p_irl !== undefined ? data.p_irl : prev.p_irl,
                p_irr: data.p_irr !== undefined ? data.p_irr : prev.p_irr,
                p_l293d: data.p_l293d !== undefined ? data.p_l293d : prev.p_l293d,
                p_ml: data.p_ml !== undefined ? data.p_ml : prev.p_ml,
                p_mr: data.p_mr !== undefined ? data.p_mr : prev.p_mr,
                ir_l_ok: data.ir_l_ok !== undefined ? data.ir_l_ok : prev.ir_l_ok,
                ir_r_ok: data.ir_r_ok !== undefined ? data.ir_r_ok : prev.ir_r_ok,
                mode: data.mode !== undefined ? data.mode : prev.mode
            }));
            if (data.pin_diag) {
                logToConsole("=== RECEIVED PIN DIAGNOSTICS REPORT ===", "system-log");
                Object.keys(data.pin_diag).forEach(key => {
                    const pin = data.pin_diag[key];
                    const text = `Pin ${key.toUpperCase()}: Functioning=[${pin.f ? 'OK' : 'FAIL'}] Connected=[${pin.c ? 'IN' : 'OUT'}]`;
                    logToConsole(text, pin.f ? "rx-log" : "error-log");
                });
                setPinDiags(data.pin_diag);
                return;
            }
            // Save obstacle point for radar canvas
            if (data.us_ok && data.d >= 0) {
                obstaclePointsRef.current.push({
                    angle: (radarAngleRef.current * Math.PI) / 180,
                    distance: data.d,
                    ts: Date.now()
                });
                if (obstaclePointsRef.current.length > 80) {
                    obstaclePointsRef.current.shift();
                }
            }
        } catch (e) {
            logToConsole(`RX (raw): ${jsonStr}`, "rx-log");
        }
    }, [logToConsole]);


    // --- SERIAL READING LOOP ---
    const readSerialData = useCallback(async (port) => {
        let buffer = '';
        const decoder = new TextDecoder();
        
        while (keepReadingRef.current && port && port.readable) {
            let reader = null;
            try {
                reader = port.readable.getReader();
                while (keepReadingRef.current) {
                    const { value, done } = await reader.read();
                    if (done) break;
                    
                    buffer += decoder.decode(value, { stream: true });
                    let lines = buffer.split('\n');
                    buffer = lines.pop(); 
                    
                    for (let line of lines) {
                        line = line.trim();
                        if (line) {
                            handleTelemetry(line);
                        }
                    }
                }
            } catch (err) {
                logToConsole(`Error reading Serial stream: ${err.message}`, "error-log");
                break;
            } finally {
                if (reader) {
                    try {
                        reader.releaseLock();
                    } catch (e) {}
                }
            }
        }
        
        disconnectAll();
    }, [handleTelemetry, disconnectAll, logToConsole]);

    // --- ENERGY ACCUMULATOR ---
    useEffect(() => {
        if (!isConnected || telemetry.p_tot === undefined) return;
        const now = Date.now();
        const elapsed = (now - lastEnergyCalcTimeRef.current) / 1000.0;
        lastEnergyCalcTimeRef.current = now;
        
        if (elapsed > 0 && elapsed < 5) {
            const powerWatts = (telemetry.p_tot || 0) / 1000.0;
            setEnergyAccumulated(prev => prev + (powerWatts * elapsed));
        }
    }, [isConnected, telemetry.p_tot]);

    // --- SERIAL CONNECTION MANAGER ---
    const handleSerialConnect = async () => {
        if (isConnected) {
            disconnectAll();
            return;
        }

        try {
            setConnStatusText("Connecting...");
            setConnStatusClass("status-indicator state-connecting");
            logToConsole("Requesting Serial Port access...", "system-log");

            const port = await navigator.serial.requestPort();
            await port.open({ baudRate: 115200 });
            
            serialPortRef.current = port;
            keepReadingRef.current = true;

            // Hardware reset sequence for ESP32 (DTR/RTS lines toggle)
            try {
                await port.setSignals({ dataTerminalReady: false, requestToSend: true });
                await new Promise(resolve => setTimeout(resolve, 150));
                await port.setSignals({ dataTerminalReady: false, requestToSend: false });
            } catch (e) {
                console.warn("DTR/RTS signals unsupported on this port:", e);
            }

            setIsConnected(true);
            setConnStatusText("Connected (USB)");
            setConnStatusClass("status-indicator state-connected");
            
            logToConsole("Serial Port opened successfully. Listening for data...", "system-log");
            
            setTimeout(() => {
                logToConsole("Querying initial pin diagnostics...", "system-log");
                sendCommand("DIAG");
            }, 1000);

            readSerialData(port);
        } catch (err) {
            logToConsole(`Connection error: ${err.message}`, "error-log");
            disconnectAll();
        }
    };

    // --- WIFI WEB-SOCKET CONNECTION MANAGER ---
    const handleWifiConnect = () => {
        if (isConnected) {
            disconnectAll();
            return;
        }
        
        try {
            setConnStatusText("Connecting...");
            setConnStatusClass("status-indicator state-connecting");
            logToConsole(`Connecting to WebSocket ws://${wsIp}:81...`, "system-log");
            
            const ws = new WebSocket(`ws://${wsIp}:81`);
            socketRef.current = ws;
            
            ws.onopen = () => {
                setIsConnected(true);
                setConnType('wifi');
                setConnStatusText("Connected (WiFi)");
                setConnStatusClass("status-indicator state-connected");
                logToConsole("WebSocket Connected successfully.", "system-log");
                setTimeout(() => sendCommand("DIAG"), 500);
            };
            
            ws.onmessage = (event) => {
                handleTelemetry(event.data);
            };
            
            ws.onerror = (err) => {
                logToConsole(`WebSocket error: ${err.message}`, "error-log");
            };
            
            ws.onclose = () => {
                logToConsole("WebSocket connection closed.", "error-log");
                disconnectAll();
            };
        } catch (e) {
            logToConsole(`WiFi Connection failed: ${e.message}`, "error-log");
            disconnectAll();
        }
    };

    // --- KEYBOARD ROBOT DRIVER ---
    useEffect(() => {
        const updateDriveState = () => {
            const isW = activeKeysRef.current['w'] || activeKeysRef.current['arrowup'];
            const isS = activeKeysRef.current['s'] || activeKeysRef.current['arrowdown'];
            
            if (isW && !isS) {
                sendCommand('F');
            } else if (isS && !isW) {
                sendCommand('B');
            } else {
                sendCommand('S');
            }
        };

        const handleKeyDown = (e) => {
            if (!isConnected || diagActiveRef.current) return;
            const key = e.key.toLowerCase();
            if (['w', 's', 'arrowup', 'arrowdown', ' ', 'escape'].includes(key)) {
                e.preventDefault();
            }
            if (activeKeysRef.current[key]) return;
            activeKeysRef.current[key] = true;
            updateDriveState();
        };

        const handleKeyUp = (e) => {
            if (!isConnected || diagActiveRef.current) return;
            const key = e.key.toLowerCase();
            delete activeKeysRef.current[key];
            updateDriveState();
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [isConnected, sendCommand]);

    // --- CANVAS RADAR SWEEP ANIMATOR ---
    useEffect(() => {
        const canvas = radarCanvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animId;

        const renderRadar = () => {
            const w = canvas.width;
            const h = canvas.height;
            const cx = w / 2;
            const cy = h - 5;
            const radius = w / 2 - 10;

            // Clear with trace fade
            ctx.fillStyle = 'rgba(9, 13, 22, 0.15)';
            ctx.fillRect(0, 0, w, h);

            // Draw grid arches
            ctx.strokeStyle = 'rgba(6, 182, 212, 0.12)';
            ctx.lineWidth = 1;
            for (let r = 1; r <= 3; r++) {
                ctx.beginPath();
                ctx.arc(cx, cy, (radius / 3) * r, Math.PI, 2 * Math.PI);
                ctx.stroke();

                ctx.fillStyle = 'rgba(6, 182, 212, 0.35)';
                ctx.font = '7px Fira Code';
                ctx.fillText(`${50 * r}cm`, cx - (radius / 3) * r + 2, cy - 3);
            }

            // Draw radial lines
            const angles = [30, 60, 90, 120, 150];
            angles.forEach(deg => {
                const rad = (deg * Math.PI) / 180;
                const rx = cx + radius * Math.cos(Math.PI + rad);
                const ry = cy + radius * Math.sin(Math.PI + rad);
                
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.lineTo(rx, ry);
                ctx.stroke();
            });

            // Draw obstacle points
            const now = Date.now();
            obstaclePointsRef.current.forEach((pt) => {
                const age = now - pt.ts;
                if (age > 2000) return;
                
                const alpha = 1 - (age / 2000);
                const displayDist = Math.min(pt.distance, 150);
                const scaledR = (displayDist / 150) * radius;
                
                const ox = cx + scaledR * Math.cos(Math.PI + pt.angle);
                const oy = cy + scaledR * Math.sin(Math.PI + pt.angle);

                let ptColor = `rgba(16, 185, 129, ${alpha})`;
                if (pt.distance < 10) {
                    ptColor = `rgba(239, 68, 68, ${alpha})`;
                } else if (pt.distance < 30) {
                    ptColor = `rgba(245, 158, 11, ${alpha})`;
                }

                ctx.beginPath();
                ctx.arc(ox, oy, pt.distance < 10 ? 5 : 3, 0, 2 * Math.PI);
                ctx.fillStyle = ptColor;
                ctx.fill();
            });

            // Update angle sweep
            radarAngleRef.current += 1.5 * radarDirectionRef.current;
            if (radarAngleRef.current >= 180) {
                radarAngleRef.current = 180;
                radarDirectionRef.current = -1;
            } else if (radarAngleRef.current <= 0) {
                radarAngleRef.current = 0;
                radarDirectionRef.current = 1;
            }

            const sweepRad = (radarAngleRef.current * Math.PI) / 180;
            const sx = cx + radius * Math.cos(Math.PI + sweepRad);
            const sy = cy + radius * Math.sin(Math.PI + sweepRad);

            // Draw Sweep Line
            ctx.strokeStyle = 'rgba(6, 182, 212, 0.6)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(sx, sy);
            ctx.stroke();

            // Sweep shade slice
            ctx.fillStyle = 'rgba(6, 182, 212, 0.04)';
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            const trailingRad = sweepRad + (radarDirectionRef.current * 0.15);
            ctx.arc(cx, cy, radius, Math.PI + trailingRad, Math.PI + sweepRad, radarDirectionRef.current < 0);
            ctx.closePath();
            ctx.fill();

            animId = requestAnimationFrame(renderRadar);
        };

        renderRadar();
        return () => cancelAnimationFrame(animId);
    }, []);

    // --- TERMINAL SCROLL TO BOTTOM ---
    useEffect(() => {
        logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [logs]);

    // --- MODULE CONFIG SELECT HANDLER ---
    const handleModuleChange = (e) => {
        const val = e.target.value;
        setSelectedModule(val);
        setIsTestingModule(false);
        setActiveTestResults({});
    };

    const handlePinSelectChange = (key, value) => {
        const pinConfigKey = getPinConfigKey(selectedModule, key);
        setAllPinConfigs(prev => ({
            ...prev,
            [pinConfigKey]: parseInt(value)
        }));
    };

    // --- ACTIVE MODULE DIAGNOSTIC RUNNER ---
    const runModuleTest = async () => {
        if (!isConnected || isTestingModule) return;
        const modConfig = hardwareModules[selectedModule];
        if (!modConfig) return;

        setIsTestingModule(true);
        diagActiveRef.current = true;
        setActiveTestResults({});
        activeTestResultsRef.current = {};

        logToConsole(`=== Starting Live Test for ${modConfig.name} ===`, "system-log");
        
        // Stop robot motion before testing pins
        sendCommand('S');

        // Extract list of pin numbers in sequence
        const pinsToTest = modConfig.pins.map(pin => allPinConfigs[getPinConfigKey(selectedModule, pin.key)]);
        activeTestPinsRef.current = pinsToTest;
        activeTestIndexRef.current = 0;

        setTimeout(() => {
            sendNextPinTest();
        }, 400);
    };

    const sendNextPinTest = () => {
        const index = activeTestIndexRef.current;
        const pins = activeTestPinsRef.current;
        
        if (index < pins.length) {
            const pinNum = pins[index];
            
            // Safety timeout: if ESP32 doesn't respond within 10s, auto-finish
            if (testTimeoutRef.current) clearTimeout(testTimeoutRef.current);
            testTimeoutRef.current = setTimeout(() => {
                logToConsole(`Test timeout: No response for GPIO ${pinNum}. Auto-finishing test.`, "error-log");
                finishModuleTest();
            }, 10000);
            
            // Special test command for HC-SR04 sonar module (real pulse-back echo test)
            if (selectedModule === 'hcsr04') {
                const trigPin = allPinConfigs.trig;
                const echoPin = allPinConfigs.echo;
                logToConsole(`Testing HC-SR04 pulse feedback on TRIG=${trigPin} ECHO=${echoPin}...`, "system-log");
                sendCommand(`TEST_SONAR ${trigPin} ${echoPin}`);
            } else {
                logToConsole(`Testing GPIO ${pinNum}...`, "system-log");
                sendCommand(`TEST_PIN ${pinNum}`);
            }
        } else {
            finishModuleTest();
        }
    };

    const handlePinTestResponse = (data) => {
        if (!diagActiveRef.current) return;
        
        // Clear safety timeout since we got a response
        if (testTimeoutRef.current) {
            clearTimeout(testTimeoutRef.current);
            testTimeoutRef.current = null;
        }
        
        const pinNum = data.pin;
        const result = {
            connected: data.connected === 1,
            functional: data.functional === 1
        };
        activeTestResultsRef.current = { ...activeTestResultsRef.current, [pinNum]: result };
        setActiveTestResults(prev => ({ ...prev, [pinNum]: result }));

        logToConsole(`GPIO ${pinNum} Test Result: Connected=[${data.connected ? 'YES' : 'NO'}] Functional=[${data.functional ? 'YES' : 'NO'}]`, data.connected ? "rx-log" : "error-log");
        
        activeTestIndexRef.current++;
        setTimeout(() => {
            sendNextPinTest();
        }, 200);
    };

    const handleSonarTestResponse = (data) => {
        if (!diagActiveRef.current) return;
        
        // Clear safety timeout since we got a response
        if (testTimeoutRef.current) {
            clearTimeout(testTimeoutRef.current);
            testTimeoutRef.current = null;
        }
        
        const trigPin = allPinConfigs.trig;
        const echoPin = allPinConfigs.echo;

        // Firmware sends: {"sonar_test":{"trig":26,"echo":25,"connected":1,"distance":12.50}}
        // No "functional" field — derive it from "connected" (if it got a valid echo, it's functional)
        const isConnected = data.connected === 1;
        const isFunctional = isConnected; // working echo = functional
        const measuredDist = data.distance !== undefined ? data.distance : (data.dist !== undefined ? data.dist : -1);

        const result = { connected: isConnected, functional: isFunctional };
        activeTestResultsRef.current = { [trigPin]: result, [echoPin]: result };
        setActiveTestResults({ [trigPin]: result, [echoPin]: result });

        logToConsole(`HC-SR04 Sonar Test Result: Connected=[${isConnected ? 'YES' : 'NO'}] Functional=[${isFunctional ? 'YES' : 'NO'}] Distance=[${measuredDist}cm]`, isConnected ? "rx-log" : "error-log");

        // HC-SR04 tests both pins at once, so we complete the test queue
        activeTestIndexRef.current = activeTestPinsRef.current.length;
        setTimeout(() => {
            sendNextPinTest();
        }, 200);
    };

    const finishModuleTest = () => {
        // Clear any pending safety timeout
        if (testTimeoutRef.current) {
            clearTimeout(testTimeoutRef.current);
            testTimeoutRef.current = null;
        }
        
        setIsTestingModule(false);
        diagActiveRef.current = false;
        const modConfig = hardwareModules[selectedModule];

        logToConsole(`=== Finished Test for ${modConfig.name} ===`, "system-log");
        
        // Read from ref (not state) to avoid stale React batching
        const results = activeTestResultsRef.current;
        let allPassed = true;
        modConfig.pins.forEach(pin => {
            const pinNum = allPinConfigs[getPinConfigKey(selectedModule, pin.key)];
            const res = results[pinNum] || { connected: false, functional: false };
            if (!res.connected || !res.functional) allPassed = false;
        });

        if (allPassed) {
            logToConsole(`Diagnostic Result: SUCCESS! All pins of ${modConfig.name} are correctly wired.`, "system-log");
        } else {
            logToConsole(`Diagnostic Result: WARNING! Connection or hardware faults found in ${modConfig.name}. Please check the wiring.`, "error-log");
        }
    };

    // Keep handler refs in sync so handleTelemetry (useCallback) always calls latest versions
    useEffect(() => {
        pinTestHandlerRef.current = handlePinTestResponse;
        sonarTestHandlerRef.current = handleSonarTestResponse;
    });

    // --- MANUAL CLI INPUT Emitter ---
    const handleCliSubmit = (e) => {
        e.preventDefault();
        const cmd = cliInputVal.trim();
        if (!cmd) return;
        sendCommand(cmd);
        setCliInputVal('');
    };

    // --- DYNAMIC WIRE DIAGRAM GRAPHICS ---
    const renderSvgWires = () => {
        if (selectedModule === 'none') return null;
        const modConfig = hardwareModules[selectedModule];
        if (!modConfig) return null;
        
        const x1 = 70;  // Offset from left side (right boundary of module box)
        const x2 = 210; // Offset from left side (left boundary of board box)
        const yCenter = 60;
        const count = modConfig.pins.length;
        
        return (
            <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
                {modConfig.pins.map((pin, idx) => {
                    const pinNum = allPinConfigs[getPinConfigKey(selectedModule, pin.key)];
                    const res = activeTestResults[pinNum] || { connected: false, functional: false };
                    
                    const offset = (idx - (count - 1) / 2) * 14;
                    const py1 = yCenter + offset;
                    const py2 = yCenter + offset;
                    
                    const controlOffset = (x2 - x1) * 0.45;
                    const d = `M ${x1} ${py1} C ${x1 + controlOffset} ${py1}, ${x2 - controlOffset} ${py2}, ${x2} ${py2}`;
                    
                    const isOk = res.connected && res.functional;
                    const isTested = activeTestResults[pinNum] !== undefined;
                    
                    let wireColor = 'rgba(255,255,255,0.15)'; // Un-tested default
                    let dropShadow = 'none';
                    if (isTested) {
                        wireColor = isOk ? 'var(--clr-success)' : 'var(--clr-danger)';
                        dropShadow = isOk ? 'drop-shadow(0px 0px 3px var(--clr-success))' : 'drop-shadow(0px 0px 2px var(--clr-danger))';
                    }
                    
                    return (
                        <path
                            key={pin.key}
                            d={d}
                            fill="none"
                            stroke={wireColor}
                            strokeWidth="2.5"
                            strokeDasharray={isTested && !isOk ? "4 3" : undefined}
                            style={{ filter: dropShadow, transition: 'stroke 0.3s, filter 0.3s' }}
                        />
                    );
                })}
            </svg>
        );
    };

    // --- MAIN RENDER ---
    return (
        <div className="app-container">
            {/* APP HEADER */}
            <header className="app-header">
                <div className="logo-area">
                    <div className="robot-icon">
                        <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2.5" fill="none">
                            <rect x="3" y="11" width="18" height="10" rx="2" />
                            <circle cx="12" cy="5" r="2" />
                            <path d="M12 7v4M8 8h8" />
                        </svg>
                    </div>
                    <div>
                        <h1>AUTOBOT ADVANCED CONTROL PANEL</h1>
                        <span className="subtitle">Real-Time ESP32 Diagnostics & Driving Dashboard</span>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div className={connStatusClass}>{connStatusText}</div>
                    {connType === 'serial' ? (
                        <button className="btn btn-primary" onClick={handleSerialConnect}>
                            {isConnected ? "Disconnect" : "Connect via Serial"}
                        </button>
                    ) : (
                        <button className="btn btn-danger" onClick={disconnectAll}>
                            Disconnect WiFi
                        </button>
                    )}
                </div>
            </header>

            {/* DASHBOARD GRID */}
            <div className="dashboard-grid">
                
                {/* COLUMN 1: DRIVE CONTROLS */}
                <section className="grid-col layout-controls">
                    
                    {/* CONNECTION MANAGER */}
                    <div className="card glass-card">
                        <div className="card-header">
                            <div className="card-icon">
                                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none">
                                    <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.59 16.11a5 5 0 0 1 6.82 0M12 20h.01" />
                                </svg>
                            </div>
                            <h2>Connection Bridge</h2>
                        </div>
                        <div className="card-body">
                            <div className="tabs">
                                <button className={`tab-btn ${connType === 'serial' ? 'active' : ''}`} onClick={() => !isConnected && setConnType('serial')}>
                                    USB Serial (COM)
                                </button>
                                <button className={`tab-btn ${connType === 'wifi' ? 'active' : ''}`} onClick={() => !isConnected && setConnType('wifi')}>
                                    WiFi Websocket
                                </button>
                            </div>
                            
                            {connType === 'serial' ? (
                                <div className="tab-panel active">
                                    <p className="info-text">Connect the ESP32 to your PC via USB and click Connect. (Chrome, Edge, or Opera required)</p>
                                    <button className="btn btn-primary w-full" onClick={handleSerialConnect}>
                                        {isConnected ? "Disconnect Port" : "Connect via Serial"}
                                    </button>
                                </div>
                            ) : (
                                <div className="tab-panel active">
                                    <p className="info-text">Enter the IP address of your ESP32 if running as a WebSocket Server.</p>
                                    <div className="form-row inputs-group">
                                        <input type="text" placeholder="e.g. 192.168.4.1" value={wsIp} onChange={(e) => setWsIp(e.target.value)} disabled={isConnected} />
                                        <button className="btn btn-secondary" onClick={handleWifiConnect}>
                                            {isConnected ? "Disconnect" : "Connect"}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* SYSTEM OPERATION MODE */}
                    <div className="card glass-card">
                        <div className="card-header">
                            <div className="card-icon">
                                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none">
                                    <circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/>
                                </svg>
                            </div>
                            <h2>System Mode Selector</h2>
                        </div>
                        <div className="card-body">
                            <p className="info-text">Switch operational modes. Line Follower follows a black tape line autonomously using IR sensors.</p>
                            <div className="mode-segmented-control" style={{ display: 'flex', background: 'rgba(0,0,0,0.2)', padding: '0.25rem', borderRadius: '8px', border: '1px solid var(--border-card)' }}>
                                <button 
                                    className={`mode-segment-btn ${telemetry.mode === 'MANUAL' ? 'active' : ''}`} 
                                    style={{ flex: 1, border: 'none', background: telemetry.mode === 'MANUAL' ? 'var(--clr-primary)' : 'transparent', color: 'white', padding: '0.5rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 600, transition: 'background 0.2s' }}
                                    onClick={() => isConnected && sendCommand('MODE MANUAL')}
                                >
                                    Manual Driver
                                </button>
                                <button 
                                    className={`mode-segment-btn ${telemetry.mode === 'LINE' ? 'active' : ''}`} 
                                    style={{ flex: 1, border: 'none', background: telemetry.mode === 'LINE' ? 'var(--clr-primary)' : 'transparent', color: 'white', padding: '0.5rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 600, transition: 'background 0.2s' }}
                                    onClick={() => isConnected && sendCommand('MODE LINE')}
                                >
                                    Line Follower
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* MANUAL MOTOR DRIVER TESTER */}
                    <div className="card glass-card">
                        <div className="card-header">
                            <div className="card-icon">
                                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none">
                                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                </svg>
                            </div>
                            <h2>L293D Motor Drive Tester</h2>
                        </div>
                        <div className="card-body motor-test-body">
                            <p className="info-text">Test your L293D outputs (Front/Back only). Press keys <span>W</span> (Front) or <span>S</span> (Back) or use the pad.</p>
                            
                            <div className="control-pad-wrapper">
                                <div className="control-pad vertical-pad">
                                    <button 
                                        className={`pad-btn pad-up-vert ${telemetry.dir === 'FORWARD' ? 'active' : ''}`} 
                                        title="Front (W)"
                                        onMouseDown={() => isConnected && sendCommand('F')}
                                        onMouseUp={() => isConnected && sendCommand('S')}
                                        onTouchStart={() => isConnected && sendCommand('F')}
                                        onTouchEnd={() => isConnected && sendCommand('S')}
                                    >
                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none"><path d="M18 15l-6-6-6 6"/></svg>
                                    </button>
                                    <button 
                                        className={`pad-btn pad-stop-vert ${telemetry.dir === 'STOP' ? 'active' : ''}`} 
                                        title="Stop"
                                        onClick={() => isConnected && sendCommand('S')}
                                    >
                                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>
                                    </button>
                                    <button 
                                        className={`pad-btn pad-down-vert ${telemetry.dir === 'BACKWARD' ? 'active' : ''}`} 
                                        title="Back (S)"
                                        onMouseDown={() => isConnected && sendCommand('B')}
                                        onMouseUp={() => isConnected && sendCommand('S')}
                                        onTouchStart={() => isConnected && sendCommand('B')}
                                        onTouchEnd={() => isConnected && sendCommand('S')}
                                    >
                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none"><path d="M6 9l6 6 6-6"/></svg>
                                    </button>
                                </div>
                            </div>

                            <div className="motor-state-display">
                                <div className="state-item">
                                    <span className="label">Target Dir:</span>
                                    <span className="value text-warning">{telemetry.dir}</span>
                                </div>
                                <div className="state-item">
                                    <span className="label">Actual/Feedback Dir:</span>
                                    <span className="value text-warning">{telemetry.act_dir}</span>
                                </div>
                                <div className="state-item">
                                    <span className="label">Motor Power:</span>
                                    <span className={`value ${telemetry.act_dir === 'STOP' ? 'text-muted' : 'text-warning'}`}>
                                        {telemetry.halt ? 'HALTED' : (telemetry.act_dir === 'STOP' ? 'OFF' : telemetry.act_dir)}
                                    </span>
                                </div>
                                
                                {telemetry.halt && (
                                    <div className="state-item" style={{ gridColumn: 'span 2', borderColor: 'var(--clr-danger)', background: 'rgba(239, 68, 68, 0.08)' }}>
                                        <span className="label" style={{ color: 'var(--clr-danger)', fontSize: '0.65rem' }}>SAFETY SYSTEM:</span>
                                        <span className="value" style={{ color: 'var(--clr-danger)', fontWeight: 'bold', fontSize: '0.75rem' }}>⛔ OBSTACLE HALT (&lt;10cm)</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* COLUMN 2: REAL-TIME TELEMETRY */}
                <section className="grid-col layout-sensors">
                    
                    {/* ULTRASONIC RADAR */}
                    <div className="card glass-card">
                        <div className="card-header">
                            <div className="card-icon">
                                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
                                    <circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/>
                                </svg>
                            </div>
                            <h2>HC-SR04 Ultrasonic Sonar</h2>
                            <div className={`sensor-badge ${telemetry.us_ok ? 'badge-ok' : 'badge-error'}`}>
                                {telemetry.us_ok ? 'Connected' : 'Disconnected'}
                            </div>
                        </div>
                        <div className="card-body radar-card-body">
                            <div className="radar-container">
                                <canvas ref={radarCanvasRef} width="260" height="150" id="radar-canvas"></canvas>
                                <div className="radar-center-text">
                                    <span>{telemetry.us_ok && telemetry.dist !== -1 ? Math.round(telemetry.dist) : '--'}</span>
                                    <span className="unit">cm</span>
                                </div>
                            </div>
                            <div className="radar-footer">
                                <p className="radar-tip">Green indicates path is clear. Yellow/Red alerts you of close obstacles.</p>
                            </div>
                        </div>
                    </div>

                    {/* IR OBSTACLE SENSORS */}
                    <div className="card glass-card">
                        <div className="card-header">
                            <div className="card-icon">
                                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none">
                                    <path d="M2 22h20M5 12h14M12 2v10" />
                                </svg>
                            </div>
                            <h2>Infrared Line/Obstacle Sensors</h2>
                            <div className="sensor-header-badges" style={{ display: 'flex', gap: '0.5rem', marginLeft: 'auto' }}>
                                <div className={`sensor-badge ${telemetry.ir_l_ok ? 'badge-ok' : 'badge-error'}`}>
                                    Left: {telemetry.ir_l_ok ? 'IN' : 'OUT'}
                                </div>
                                <div className={`sensor-badge ${telemetry.ir_r_ok ? 'badge-ok' : 'badge-error'}`}>
                                    Right: {telemetry.ir_r_ok ? 'IN' : 'OUT'}
                                </div>
                            </div>
                        </div>
                        <div className="card-body ir-card-body">
                            <div className="ir-sensors-flex">
                                <div className={`ir-node ${telemetry.irL === 0 ? 'node-state-low' : 'node-state-high'}`}>
                                    <div className="node-indicator"></div>
                                    <div className="node-details">
                                        <h3>Left IR Sensor</h3>
                                        <p className="pin-info">GPIO {allPinConfigs.ir_l}</p>
                                        <div className="node-state">
                                            {telemetry.irL === 0 ? "OBJECT / BLACK LINE (LOW)" : "CLEAR / WHITE (HIGH)"}
                                        </div>
                                    </div>
                                </div>
                                <div className={`ir-node ${telemetry.irR === 0 ? 'node-state-low' : 'node-state-high'}`}>
                                    <div className="node-indicator"></div>
                                    <div className="node-details">
                                        <h3>Right IR Sensor</h3>
                                        <p className="pin-info">GPIO {allPinConfigs.ir_r}</p>
                                        <div className="node-state">
                                            {telemetry.irR === 0 ? "OBJECT / BLACK LINE (LOW)" : "CLEAR / WHITE (HIGH)"}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ENERGY & POWER MONITOR */}
                    <div className="card glass-card power-card">
                        <div className="card-header">
                            <div className="card-icon">
                                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none">
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                </svg>
                            </div>
                            <h2>Energy & Power Monitor</h2>
                            <div className="power-total-badge" style={{ marginLeft: 'auto' }}>
                                <span>{(telemetry.p_tot / 1000.0).toFixed(2)}</span> W
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="power-summary-grid">
                                <div className="power-main-meter">
                                    <svg className="progress-ring" width="80" height="80">
                                        <circle className="progress-ring-bg" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="5" fill="transparent" r="34" cx="40" cy="40"/>
                                        <circle 
                                            className="progress-ring-fill" 
                                            stroke={telemetry.p_tot < 1000 ? "var(--clr-secondary)" : (telemetry.p_tot < 3000 ? "var(--clr-accent)" : "var(--clr-danger)")}
                                            strokeWidth="5" 
                                            fill="transparent" 
                                            r="34" 
                                            cx="40" 
                                            cy="40" 
                                            strokeDasharray="213.63" 
                                            strokeDashoffset={213.63 - (213.63 * Math.min(telemetry.p_tot / 5000.0, 1.0))} 
                                            style={{ transition: 'stroke-dashoffset 0.2s, stroke 0.3s', transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
                                        />
                                    </svg>
                                    <div className="power-meter-text">
                                        <span>{(telemetry.p_tot / 1000.0).toFixed(1)}</span>
                                        <span className="unit" style={{ fontSize: '0.55rem', color: 'var(--text-muted)' }}>Watts</span>
                                    </div>
                                </div>
                                <div className="power-stats-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', justifyContent: 'center' }}>
                                    <div className="power-stat-row" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.2rem' }}>
                                        <span className="label" style={{ color: 'var(--text-secondary)' }}>Voltage:</span>
                                        <span className="value" style={{ fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{isConnected ? '9.0V / 5.0V / 3.3V' : '-- V'}</span>
                                    </div>
                                    <div className="power-stat-row" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.2rem' }}>
                                        <span className="label" style={{ color: 'var(--text-secondary)' }}>Current:</span>
                                        <span className="value" style={{ fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                                            {isConnected ? Math.round(
                                                (telemetry.p_esp / 3.3) + 
                                                (telemetry.p_us / 5.0) + 
                                                (telemetry.p_irl / 5.0) + 
                                                (telemetry.p_irr / 5.0) + 
                                                (telemetry.p_l293d / 5.0) + 
                                                (telemetry.p_ml / 9.0) + 
                                                (telemetry.p_mr / 9.0)
                                            ) : 0} mA
                                        </span>
                                    </div>
                                    <div className="power-stat-row" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                                        <span className="label" style={{ color: 'var(--text-secondary)' }}>Energy Draw:</span>
                                        <span className="value" style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--clr-secondary)' }}>
                                            {energyAccumulated.toFixed(2)} J
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="power-bar-breakdown" style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                <h3 style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.25rem', margin: 0 }}>Component Allocations</h3>
                                
                                {/* ESP32 Core */}
                                <div className="component-power-row">
                                    <div className="comp-info" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', marginBottom: '0.2rem' }}>
                                        <span className="comp-name" style={{ color: 'var(--text-secondary)' }}>ESP32 Core</span>
                                        <span className="comp-power" style={{ fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                                            {isConnected ? `${Math.round(telemetry.p_esp)} mW` : '-- mW'}
                                        </span>
                                    </div>
                                    <div className="progress-bar-container" style={{ background: 'rgba(255,255,255,0.05)', height: '6px', borderRadius: '3px', overflow: 'hidden' }}>
                                        <div className="progress-bar-fill" style={{ width: isConnected ? `${Math.min((telemetry.p_esp / 600) * 100, 100)}%` : '0%', background: 'var(--clr-primary)', height: '100%', transition: 'width 0.3s' }}></div>
                                    </div>
                                </div>

                                {/* HC-SR04 */}
                                <div className="component-power-row">
                                    <div className="comp-info" style={{ display: 'flex', justifycontent: 'space-between', fontSize: '0.7rem', marginBottom: '0.2rem' }}>
                                        <span className="comp-name" style={{ color: 'var(--text-secondary)' }}>HC-SR04 Sonar</span>
                                        <span className="comp-power" style={{ fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{isConnected ? `${Math.round(telemetry.p_us)} mW` : '-- mW'}</span>
                                    </div>
                                    <div className="progress-bar-container" style={{ background: 'rgba(255,255,255,0.05)', height: '6px', borderRadius: '3px', overflow: 'hidden' }}>
                                        <div className="progress-bar-fill" style={{ width: isConnected ? `${Math.min((telemetry.p_us / 200) * 100, 100)}%` : '0%', background: 'var(--clr-secondary)', height: '100%', transition: 'width 0.3s' }}></div>
                                    </div>
                                </div>

                                {/* IR Sensors */}
                                <div className="component-power-row">
                                    <div className="comp-info" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', marginBottom: '0.2rem' }}>
                                        <span className="comp-name" style={{ color: 'var(--text-secondary)' }}>Infrared Sensors</span>
                                        <span className="comp-power" style={{ fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{isConnected ? `${Math.round(telemetry.p_irl + telemetry.p_irr)} mW` : '-- mW'}</span>
                                    </div>
                                    <div className="progress-bar-container" style={{ background: 'rgba(255,255,255,0.05)', height: '6px', borderRadius: '3px', overflow: 'hidden' }}>
                                        <div className="progress-bar-fill" style={{ width: isConnected ? `${Math.min(((telemetry.p_irl + telemetry.p_irr) / 200) * 100, 100)}%` : '0%', background: 'var(--clr-accent)', height: '100%', transition: 'width 0.3s' }}></div>
                                    </div>
                                </div>

                                {/* L293D logic */}
                                <div className="component-power-row">
                                    <div className="comp-info" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', marginBottom: '0.2rem' }}>
                                        <span className="comp-name" style={{ color: 'var(--text-secondary)' }}>L293D Logic Gate</span>
                                        <span className="comp-power" style={{ fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                                            {isConnected ? `${Math.round(telemetry.p_l293d)} mW` : '-- mW'}
                                        </span>
                                    </div>
                                    <div className="progress-bar-container" style={{ background: 'rgba(255,255,255,0.05)', height: '6px', borderRadius: '3px', overflow: 'hidden' }}>
                                        <div className="progress-bar-fill" style={{ width: isConnected ? `${Math.min((telemetry.p_l293d / 200) * 100, 100)}%` : '0%', background: '#a855f7', height: '100%', transition: 'width 0.3s' }}></div>
                                    </div>
                                </div>

                                {/* DC Motors */}
                                <div className="component-power-row">
                                    <div className="comp-info" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', marginBottom: '0.2rem' }}>
                                        <span className="comp-name" style={{ color: 'var(--text-secondary)' }}>DC Motors (L/R)</span>
                                        <span className="comp-power" style={{ fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{isConnected ? `${Math.round(telemetry.p_ml + telemetry.p_mr)} mW` : '-- mW'}</span>
                                    </div>
                                    <div className="progress-bar-container" style={{ background: 'rgba(255,255,255,0.05)', height: '6px', borderRadius: '3px', overflow: 'hidden' }}>
                                        <div className="progress-bar-fill" style={{ width: isConnected ? `${Math.min(((telemetry.p_ml + telemetry.p_mr) / 3600) * 100, 100)}%` : '0%', background: 'var(--clr-success)', height: '100%', transition: 'width 0.3s' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* COLUMN 3: DIAGNOSTICS & SYSTEM TERMINAL */}
                <section className="grid-col layout-diagnostics">
                    
                    {/* DYNAMIC MODULE DIAGNOSTICS */}
                    <div className="card glass-card diag-card">
                        <div className="card-header">
                            <div className="card-icon">
                                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                                </svg>
                            </div>
                            <h2>Interactive Module Diagnostics</h2>
                        </div>
                        <div className="card-body diag-body">
                            <p className="info-text">Select a hardware module to run live pin connectivity and health tests.</p>
                            
                            <div className="form-row inputs-group" style={{ marginBottom: '0.5rem' }}>
                                <select 
                                    id="select-module" 
                                    className="w-full" 
                                    style={{ background: 'rgba(0, 0, 0, 0.25)', border: '1px solid var(--border-card)', borderRadius: '8px', color: 'white', padding: '0.6rem 0.8rem', fontFamily: 'var(--font-sans)', fontSize: '0.85rem', outline: 'none', cursor: 'pointer' }}
                                    value={selectedModule}
                                    onChange={handleModuleChange}
                                >
                                    <option value="none">-- Select Module to Test --</option>
                                    <option value="l293d">L293D Motor Driver</option>
                                    <option value="hcsr04">HC-SR04 Ultrasonic Sonar</option>
                                    <option value="ir_left">Left IR Sensor</option>
                                    <option value="ir_right">Right IR Sensor</option>
                                    <option value="servo">SG90 Servo Motor</option>
                                    <option value="dht11">DHT11 Temp/Humidity Sensor</option>
                                </select>
                            </div>

                            {/* Dynamic pin mapping editor */}
                            {selectedModule !== 'none' && (
                                <div id="module-pin-configurator" style={{ background: 'rgba(0, 0, 0, 0.15)', border: '1px solid var(--border-card)', padding: '0.75rem', borderRadius: '10px', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    <h3 style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--clr-secondary)', letterSpacing: '0.05em', margin: 0 }}>Pin Configuration</h3>
                                    <div id="module-pins-inputs" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0.5 }}>
                                        {hardwareModules[selectedModule].pins.map(pin => (
                                            <div key={pin.key} style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', fontSize: '0.75rem' }}>
                                                <label style={{ color: 'var(--text-secondary)' }}>{pin.label}</label>
                                                <select
                                                    style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-card)', borderRadius: '6px', color: 'white', padding: '0.35rem', outline: 'none', fontFamily: 'var(--font-mono)' }}
                                                    value={allPinConfigs[getPinConfigKey(selectedModule, pin.key)]}
                                                    disabled={isTestingModule}
                                                    onChange={(e) => handlePinSelectChange(pin.key, e.target.value)}
                                                >
                                                    {commonGPIOPins.map(g => (
                                                        <option key={g} value={g}>GPIO {String(g).padStart(2, '0')}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <button 
                                className="btn btn-accent w-full" 
                                disabled={!isConnected || selectedModule === 'none' || isTestingModule}
                                onClick={runModuleTest}
                            >
                                {!isConnected ? "Connect to Run Test" : (isTestingModule ? "Testing..." : `Test ${hardwareModules[selectedModule]?.name || 'Module'}`)}
                            </button>

                            {/* Live test results graphic & checklist */}
                            {selectedModule !== 'none' && (isTestingModule || Object.keys(activeTestResults).length > 0) && (
                                <div id="module-test-results" style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    <h3 style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-secondary)', letterSpacing: '0.05em', borderBottom: '1px solid var(--border-card)', paddingBottom: '0.25rem', margin: 0 }}>Live Test Report</h3>
                                    
                                    {isTestingModule && Object.keys(activeTestResults).length === 0 ? (
                                        <div style={{ background: 'rgba(0, 0, 0, 0.25)', border: '1px solid var(--border-card)', height: '120px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--clr-primary)', animation: 'pulse 1.5s infinite' }}>
                                            Scanning connection channels...
                                        </div>
                                    ) : (
                                        <div className="results-visual" id="results-wire-diagram" style={{ background: 'rgba(0, 0, 0, 0.25)', border: '1px solid var(--border-card)', height: '120px', borderRadius: '10px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', overflow: 'hidden' }}>
                                            <div className="glass-card" style={{ padding: '0.4rem 0.6rem', borderRadius: '8px', border: '1px solid var(--clr-primary)', boxShadow: '0 0 10px rgba(99, 102, 241, 0.2)', zIndex: 2, background: 'rgba(9, 13, 22, 0.8)', minWidth: '70px', textAlign: 'center' }}>
                                                <div style={{ fontSize: '0.55rem', fontWeight: 'bold', color: 'var(--clr-primary)', textTransform: 'uppercase' }}>Module</div>
                                                <div style={{ fontSize: '0.7rem', fontWeight: 800 }}>{hardwareModules[selectedModule]?.name.split(' ')[0]}</div>
                                            </div>
                                            {renderSvgWires()}
                                            <div className="glass-card" style={{ padding: '0.4rem 0.6rem', borderRadius: '8px', border: '1px solid var(--clr-secondary)', boxShadow: '0 0 10px rgba(6, 182, 212, 0.2)', zIndex: 2, background: 'rgba(9, 13, 22, 0.8)', minWidth: '70px', textAlign: 'center' }}>
                                                <div style={{ fontSize: '0.55rem', fontWeight: 'bold', color: 'var(--clr-secondary)', textTransform: 'uppercase' }}>Board</div>
                                                <div style={{ fontSize: '0.7rem', fontWeight: 800 }}>ESP32</div>
                                            </div>
                                        </div>
                                    )}

                                    <ul className="results-list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.75rem', padding: 0 }}>
                                        {hardwareModules[selectedModule].pins.map(pin => {
                                            const pinNum = allPinConfigs[getPinConfigKey(selectedModule, pin.key)];
                                            const res = activeTestResults[pinNum];
                                            if (!res) return null;
                                            const isOk = res.connected && res.functional;
                                            
                                            return (
                                                <li key={pin.key} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.2rem 0' }}>
                                                    <span style={{ padding: '0.1rem 0.4rem', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 'bold', color: 'white', background: isOk ? 'var(--clr-success)' : 'var(--clr-danger)' }}>
                                                        {isOk ? 'PASS' : 'FAIL'}
                                                    </span>
                                                    <span>
                                                        <strong>{pin.label}</strong> on GPIO {pinNum}:{' '}
                                                        {isOk ? (
                                                            <span style={{ color: 'var(--clr-success)' }}>Connected & Healthy</span>
                                                        ) : (!res.connected ? (
                                                            <span style={{ color: 'var(--clr-danger)' }}>Disconnected (Floating)</span>
                                                        ) : (
                                                            <span style={{ color: 'var(--clr-accent)' }}>IO Drive Failed</span>
                                                        ))}
                                                    </span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* ESP32 WIRING PIN MAP TABLE */}
                    <div className="card glass-card pin-map-card">
                        <div className="card-header">
                            <div className="card-icon">
                                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/>
                                </svg>
                            </div>
                            <h2>ESP32 Pinout & Wiring Map</h2>
                            <button 
                                className="btn btn-secondary" 
                                style={{ padding: '0.25rem 0.5rem', fontSize: '0.65rem', borderRadius: '4px', minWidth: 'auto', height: 'auto', marginLeft: 'auto' }}
                                disabled={!isConnected}
                                onClick={() => sendCommand("DIAG")}
                            >
                                Query Pins
                            </button>
                        </div>
                        <div className="card-body pin-map-body">
                            <p className="info-text">Real-time status of connections, wire routing, and power draw per microcontroller pin.</p>
                            
                            <div className="pin-grid">
                                <div className="pin-grid-header">
                                    <span>ESP32 Pin</span>
                                    <span>Wire</span>
                                    <span>Target Pin</span>
                                    <span>Status</span>
                                    <span>Power</span>
                                </div>
                                
                                {/* Map Pin rows */}
                                {[
                                    { key: 'led', wire: 'Internal', color: 'wire-internal', target: 'LED Status (Anode)', type: 'digital' },
                                    { key: 'in1', wire: 'Yellow', color: 'wire-yellow', target: 'L293D IN1 (M1 Fwd)', type: 'digital' },
                                    { key: 'in2', wire: 'Green', color: 'wire-green', target: 'L293D IN2 (M1 Rev)', type: 'digital' },
                                    { key: 'in3', wire: 'Blue', color: 'wire-blue', target: 'L293D IN3 (M2 Fwd)', type: 'digital' },
                                    { key: 'in4', wire: 'Violet', color: 'wire-violet', target: 'L293D IN4 (M2 Rev)', type: 'digital' },
                                    { key: 'ena', wire: 'White', color: 'wire-white', target: 'L293D ENA (M1 En)', type: 'pwm' },
                                    { key: 'enb', wire: 'Grey', color: 'wire-grey', target: 'L293D ENB (M2 En)', type: 'pwm' },
                                    { key: 'trig', wire: 'Orange', color: 'wire-orange', target: 'HC-SR04 TRIG', type: 'digital' },
                                    { key: 'echo', wire: 'Yellow', color: 'wire-yellow', target: 'HC-SR04 ECHO', type: 'digital' },
                                    { key: 'ir_l', wire: 'Brown', color: 'wire-brown', target: 'Left IR OUT', type: 'analog' },
                                    { key: 'ir_r', wire: 'Red', color: 'wire-red', target: 'Right IR OUT', type: 'analog' }
                                ].map(p => {
                                    const pinNum = allPinConfigs[p.key];
                                    const pinLabel = `GPIO ${String(pinNum).padStart(2, '0')}`;
                                    
                                    // Derive pin status from telemetry, active module tests & pinDiags report
                                    let statusText = "No Data";
                                    let statusClass = "pin-status status-unknown";
                                    let powerVal = 0;

                                    if (isConnected) {
                                        // 1. Prioritize live sensor telemetry connection states
                                        let liveOk = null;
                                        if (p.key === 'trig' || p.key === 'echo') liveOk = telemetry.us_ok;
                                        else if (p.key === 'ir_l') liveOk = telemetry.ir_l_ok;
                                        else if (p.key === 'ir_r') liveOk = telemetry.ir_r_ok;

                                        if (liveOk !== null) {
                                            if (liveOk) {
                                                statusText = "OK (IN)";
                                                statusClass = "pin-status status-ok";
                                            } else {
                                                statusText = "OUT (DISCONN)";
                                                statusClass = "pin-status status-disconnected";
                                            }
                                        }
                                        // 2. Fall back to active module testing results
                                        else {
                                            const activeRes = activeTestResults[pinNum];
                                            if (activeRes) {
                                                if (!activeRes.connected) {
                                                    statusText = "OUT (DISCONN)";
                                                    statusClass = "pin-status status-disconnected";
                                                } else if (!activeRes.functional) {
                                                    statusText = "FAIL";
                                                    statusClass = "pin-status status-fail";
                                                } else {
                                                    statusText = "OK (IN)";
                                                    statusClass = "pin-status status-ok";
                                                }
                                            }
                                            // 3. Fall back to initial/queried pin diagnostics report
                                            else if (pinDiags && pinDiags[p.key]) {
                                                const dInfo = pinDiags[p.key];
                                                const isOutputPin = ['led', 'in1', 'in2', 'in3', 'in4', 'ena', 'enb', 'trig'].includes(p.key);
                                                const isConnectedPin = isOutputPin ? dInfo.f : dInfo.c;
                                                
                                                if (!isConnectedPin) {
                                                    statusText = "OUT (DISCONN)";
                                                    statusClass = "pin-status status-disconnected";
                                                } else if (!dInfo.f) {
                                                    statusText = "FAIL";
                                                    statusClass = "pin-status status-fail";
                                                } else {
                                                    statusText = "OK (IN)";
                                                    statusClass = "pin-status status-ok";
                                                }
                                            }
                                            // 4. Default fallback: assume connected/healthy if communicating
                                            else {
                                                statusText = "OK (IN)";
                                                statusClass = "pin-status status-ok";
                                            }
                                        }

                                        // Power mapping logic
                                        if (p.key === 'led') powerVal = telemetry.led === 1 ? 33 : 0;
                                        else if (p.key === 'in1') powerVal = (telemetry.act_dir === 'FORWARD' || telemetry.act_dir === 'RIGHT') ? Math.round(telemetry.p_ml) : 0;
                                        else if (p.key === 'in2') powerVal = (telemetry.act_dir === 'BACKWARD' || telemetry.act_dir === 'LEFT') ? Math.round(telemetry.p_ml) : 0;
                                        else if (p.key === 'in3') powerVal = (telemetry.act_dir === 'FORWARD' || telemetry.act_dir === 'LEFT') ? Math.round(telemetry.p_mr) : 0;
                                        else if (p.key === 'in4') powerVal = (telemetry.act_dir === 'BACKWARD' || telemetry.act_dir === 'RIGHT') ? Math.round(telemetry.p_mr) : 0;
                                        else if (p.key === 'ena') powerVal = telemetry.act_dir !== 'STOP' ? Math.round(telemetry.p_l293d / 2) : 0;
                                        else if (p.key === 'enb') powerVal = telemetry.act_dir !== 'STOP' ? Math.round(telemetry.p_l293d / 2) : 0;
                                        else if (p.key === 'trig' || p.key === 'echo') powerVal = telemetry.us_ok ? Math.round(telemetry.p_us / 2) : 0;
                                        else if (p.key === 'ir_l') powerVal = telemetry.ir_l_ok ? Math.round(telemetry.p_irl) : 0;
                                        else if (p.key === 'ir_r') powerVal = telemetry.ir_r_ok ? Math.round(telemetry.p_irr) : 0;
                                    }

                                    return (
                                        <div key={p.key} className="pin-row" id={`pin-row-${p.key}`}>
                                            <span className={`pin-badge pin-${p.type}`}>{pinLabel}</span>
                                            <span className={`wire-badge ${p.color}`}><span className="wire-dot"></span>{p.wire}</span>
                                            <span className="target-name">{p.target}</span>
                                            <span className={statusClass}>{statusText}</span>
                                            <span className="pin-power">{isConnected ? `${powerVal} mW` : '-- mW'}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* LIVE CONSOLE TERMINAL */}
                    <div className="card glass-card terminal-card">
                        <div className="card-header">
                            <div className="card-icon">
                                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
                                    <polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>
                                </svg>
                            </div>
                            <h2>Serial Data Stream</h2>
                            <button className="icon-btn" title="Clear console" onClick={() => setLogs([])} style={{ marginLeft: 'auto', background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>
                                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none">
                                    <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                                </svg>
                            </button>
                        </div>
                        <div className="card-body console-body">
                            <div id="console-logs" className="console-logs-content">
                                {logs.map(log => (
                                    <div key={log.id} className={log.type}>
                                        [{log.time}] {log.text}
                                    </div>
                                ))}
                                <div ref={logsEndRef} />
                            </div>
                        </div>
                        <form onSubmit={handleCliSubmit} className="console-input-area" style={{ display: 'flex', borderTop: '1px solid var(--border-card)', background: '#020408', padding: '0.5rem 0.75rem', gap: '0.5rem', alignItems: 'center' }}>
                            <span className="cli-prompt" style={{ color: 'var(--clr-secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 'bold', userSelect: 'none' }}>&gt;</span>
                            <input 
                                type="text" 
                                placeholder="Type serial CLI commands (e.g. help, status, diag, power)..." 
                                style={{ flexGrow: 1, background: 'transparent', border: 'none', outline: 'none', color: '#fff', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }} 
                                value={cliInputVal}
                                onChange={(e) => setCliInputVal(e.target.value)}
                                autoComplete="off" 
                            />
                            <button type="submit" className="btn btn-secondary" style={{ padding: '0.35rem 0.75rem', fontSize: '0.7rem', borderRadius: '6px', minWidth: 'auto', height: 'auto' }}>Run</button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;
