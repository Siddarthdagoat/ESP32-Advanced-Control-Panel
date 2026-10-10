import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { 
  COUNTRIES, 
  GEOPOLITICAL_EVENTS, 
  STRATEGIC_LOCATIONS, 
  STRATEGIC_RELATIONS, 
  MARITIME_ROUTES,
  SEMANTIC_COLORS 
} from '../../data/geointelData';
import { COUNTRY_DOSSIERS, getCountryDossier } from '../../data/geointelCountryDossiers';
import { CAPITAL_COORDINATES, EXTENDED_COUNTRY_NEIGHBORS } from '../../data/geointelExtendedDossiers';
import { 
  findMaritimeEntityAtCoordinates, 
  getAllMaritimeMarkers, 
  getOceanAndSeaLabels 
} from '../../data/geointelMaritime';
import { intelligenceFeed } from '../../services/intelligenceFeed.js';
import { AIS_VESSELS, ADSB_MILITARY_FLIGHTS, FIRMS_THERMAL_HOTSPOTS } from '../../data/geointelSensors';
import { getHistoricalEraData } from '../../data/history/historicalBoundaries';
import { SUBSEA_CABLES, DEEP_OCEAN_TRENCHES } from '../../data/geointelBathymetryCables';
import { STRATEGIC_FLASHPOINTS } from '../../data/geointelFlashpoints';

const GLOBE_RADIUS = 100;

// Helper to generate crisp billboard canvas sprites for ocean and sea geographic labels
function createOceanTextSprite(name, isOcean = true) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 512, 128);

  ctx.font = isOcean ? 'bold 30px "Courier New", monospace' : 'bold 22px "Courier New", monospace';
  ctx.fillStyle = isOcean ? 'rgba(230, 230, 230, 0.48)' : 'rgba(180, 180, 180, 0.38)';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.letterSpacing = isOcean ? '4px' : '2px';
  ctx.fillText(name, 256, 64);

  const texture = new THREE.CanvasTexture(canvas);
  const spriteMat = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    opacity: 0.88,
    depthWrite: false
  });
  const sprite = new THREE.Sprite(spriteMat);
  const scaleX = isOcean ? 34 : 22;
  const scaleY = isOcean ? 8.5 : 5.5;
  sprite.scale.set(scaleX, scaleY, 1);
  return sprite;
}

// Helper to create crisp billboard sprite for selected country's capital
function createCapitalBillboardSprite(countryName, capitalName) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 140;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 512, 140);

  // Background rounded box
  ctx.fillStyle = 'rgba(8, 8, 8, 0.94)';
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.90)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  if (ctx.roundRect) {
    ctx.roundRect(14, 10, 484, 120, 14);
  } else {
    ctx.rect(14, 10, 484, 120);
  }
  ctx.fill();
  ctx.stroke();

  // Top: Country name
  ctx.font = 'bold 20px "Courier New", monospace';
  ctx.fillStyle = 'rgba(190, 190, 190, 0.95)';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.letterSpacing = '3px';
  ctx.fillText(String(countryName || '').toUpperCase(), 256, 42);

  // Bottom: Capital name with bullet
  ctx.font = 'bold 34px "Segoe UI", Roboto, sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText(`● ${String(capitalName || '').toUpperCase()}`, 256, 92);

  const texture = new THREE.CanvasTexture(canvas);
  const spriteMat = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    opacity: 0.98,
    depthWrite: false
  });
  const sprite = new THREE.Sprite(spriteMat);
  sprite.scale.set(16, 4.4, 1);
  return sprite;
}

// Helper to create crisp billboard sprite for regional intelligence clusters
function createClusterBillboardSprite(regionName, count, hasCritical = false) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 140;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 512, 140);

  // Background rounded box with holographic monochrome border
  ctx.fillStyle = 'rgba(8, 8, 8, 0.94)';
  ctx.strokeStyle = hasCritical ? '#ffffff' : 'rgba(200, 200, 200, 0.85)';
  ctx.lineWidth = hasCritical ? 4 : 3;
  ctx.beginPath();
  if (ctx.roundRect) {
    ctx.roundRect(14, 10, 484, 120, 18);
  } else {
    ctx.rect(14, 10, 484, 120);
  }
  ctx.fill();
  ctx.stroke();

  // Top sub-header: LIVE CLUSTER
  ctx.font = 'bold 20px "Courier New", monospace';
  ctx.fillStyle = hasCritical ? '#ffffff' : 'rgba(180, 180, 180, 0.95)';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.letterSpacing = '3px';
  ctx.fillText(hasCritical ? '◈ CRITICAL CLUSTER' : 'LIVE CLUSTER', 256, 42);

  // Bottom main text: REGION (COUNT)
  ctx.font = 'bold 32px "Courier New", monospace';
  ctx.fillStyle = '#ffffff';
  ctx.fillText(`${String(regionName || '').toUpperCase()} (${count})`, 256, 92);

  const texture = new THREE.CanvasTexture(canvas);
  const spriteMat = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    opacity: 0.98,
    depthWrite: false
  });
  const sprite = new THREE.Sprite(spriteMat);
  sprite.scale.set(18, 4.8, 1);
  return sprite;
}

// Helper to create crisp billboard sprite for historical empires (1914, 1939, 1962, 1991)
function createEmpireBillboardSprite(empireName, year) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 130;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 512, 130);

  ctx.fillStyle = 'rgba(8, 8, 8, 0.94)';
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.92)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  if (ctx.roundRect) ctx.roundRect(14, 10, 484, 110, 14);
  else ctx.rect(14, 10, 484, 110);
  ctx.fill();
  ctx.stroke();

  ctx.font = 'bold 18px "Courier New", monospace';
  ctx.fillStyle = '#CCCCCC';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.letterSpacing = '3px';
  ctx.fillText(`◈ HISTORICAL EMPIRE (${year})`, 256, 38);

  ctx.font = 'bold 28px "Courier New", monospace';
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText(String(empireName || '').toUpperCase(), 256, 82);

  const texture = new THREE.CanvasTexture(canvas);
  const spriteMat = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    opacity: 0.98,
    depthWrite: false
  });
  const sprite = new THREE.Sprite(spriteMat);
  sprite.scale.set(18, 4.6, 1);
  return sprite;
}

// Helper to create crisp billboard sprite for OSINT sensor markers
function createSensorSprite(label, subtext, type = 'ais') {
  const canvas = document.createElement('canvas');
  canvas.width = 384;
  canvas.height = 100;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 384, 100);

  ctx.fillStyle = 'rgba(5, 5, 5, 0.92)';
  ctx.strokeStyle = type === 'firms' ? '#ffffff' : 'rgba(220, 220, 220, 0.85)';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  if (ctx.roundRect) ctx.roundRect(10, 8, 364, 84, 10);
  else ctx.rect(10, 8, 364, 84);
  ctx.fill();
  ctx.stroke();

  ctx.font = 'bold 16px "Courier New", monospace';
  ctx.fillStyle = type === 'firms' ? '#ffffff' : '#e0e0e0';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.letterSpacing = '2px';
  ctx.fillText(String(label || '').toUpperCase(), 192, 35);

  ctx.font = 'bold 13px "Courier New", monospace';
  ctx.fillStyle = '#999999';
  ctx.fillText(String(subtext || '').toUpperCase(), 192, 65);

  const texture = new THREE.CanvasTexture(canvas);
  const spriteMat = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    opacity: 0.95,
    depthWrite: false
  });
  const sprite = new THREE.Sprite(spriteMat);
  sprite.scale.set(12, 3.2, 1);
  return sprite;
}

// Coordinate converter: (lat, lng) to Three.js 3D Vector3
const latLngToVector3 = (lat, lng, radius = GLOBE_RADIUS) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
};

// Inverse coordinate converter: Three.js local Vector3 to (lat, lng)
const vector3ToLatLng = (v) => {
  const len = Math.hypot(v.x, v.y, v.z);
  if (len === 0) return { lat: 0, lng: 0 };
  const nx = v.x / len;
  const ny = Math.max(-1, Math.min(1, v.y / len));
  const nz = v.z / len;

  const phi = Math.acos(ny);
  const lat = 90 - phi * (180 / Math.PI);

  const theta = Math.atan2(nz, -nx);
  let lng = theta * (180 / Math.PI) - 180;
  while (lng < -180) lng += 360;
  while (lng > 180) lng -= 360;

  return { lat, lng };
};

// Point-in-polygon raycasting test for geographic rings
function pointInRing(lng, lat, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const xi = ring[i][0], yi = ring[i][1];
    const xj = ring[j][0], yj = ring[j][1];
    const intersect = ((yi > lat) !== (yj > lat)) &&
        (lng < (xj - xi) * (lat - yi) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}

// Strategic neighboring country associations for geographic context highlighting
const COUNTRY_NEIGHBORS = {
  TWN: ['CHN', 'JPN', 'PHL'],
  IND: ['PAK', 'CHN', 'BGD', 'NPL', 'MMR', 'LKA'],
  USA: ['CAN', 'MEX', 'RUS'],
  CHN: ['TWN', 'IND', 'RUS', 'JPN', 'VNM', 'KOR', 'PRK', 'MNG', 'PHL'],
  RUS: ['UKR', 'BLR', 'FIN', 'CHN', 'KAZ', 'GEO', 'JPN'],
  ISR: ['PSE', 'LBN', 'SYR', 'JOR', 'EGY'],
  SAU: ['YEM', 'OMN', 'UAE', 'QAT', 'KWT', 'IRQ', 'JOR', 'IRN'],
  IRN: ['IRQ', 'SAU', 'AFG', 'PAK', 'TUR', 'AZE'],
  JPN: ['TWN', 'KOR', 'CHN', 'RUS', 'USA'],
  UKR: ['RUS', 'BLR', 'POL', 'ROU', 'MDA']
};

export default function GeointelGlobe({
  selectedCountry,
  selectedEvent,
  selectedLocation,
  selectedRegion,
  selectedMaritimeEntity,
  selectedRelationship,
  tacticalFlashpoint,
  activeScenario,
  activeLayers = {},
  mapMode = 'monochrome', // 'monochrome' | 'bathymetry' | 'thermal' | 'satellite'
  currentYear = 'PRESENT',
  hoverDelay = 1200,
  onCountrySelect,
  onEventSelect,
  onLocationSelect,
  onSelectMaritimeEntity,
  onCapitalSelect,
  onSensorSelect,
  onHoverChange,
  isRotating = true,
  onUserInteraction,
  resetGlobeTrigger
}) {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const globeGroupRef = useRef(null);
  const earthMeshRef = useRef(null);
  const earthCanvasRef = useRef(null);
  const earthTextureRef = useRef(null);
  const markersGroupRef = useRef(null);
  const clusterPinsGroupRef = useRef(null);
  const eventPinsGroupRef = useRef(null);
  const capitalMarkerGroupRef = useRef(null);
  const arcsGroupRef = useRef(null);
  const routesGroupRef = useRef(null);
  const countryBordersGroupRef = useRef(null);
  const oceanLabelsGroupRef = useRef(null);
  const subseaCablesGroupRef = useRef(null);
  const historicalBordersGroupRef = useRef(null);
  const sensorsGroupRef = useRef(null);
  const wargameGroupRef = useRef(null);
  const tacticalFlashpointGroupRef = useRef(null);
  const interactiveMarkersRef = useRef([]); // Events, strategic locations, chokepoints, ports, capital, sensors
  const animFrameRef = useRef(null);
  const photonPacketsRef = useRef([]);

  // Dynamic Highlight Meshes
  const bordersMeshRef = useRef(null);
  const oceanConnectedBordersMeshRef = useRef(null);
  const hoverBordersMeshRef = useRef(null);
  const selectedBordersMeshRef = useRef(null);
  const neighborBordersMeshRef = useRef(null);

  // Active selected country reference for hover suppression
  const selectedCountryRef = useRef(selectedCountry);
  useEffect(() => {
    selectedCountryRef.current = selectedCountry;
  }, [selectedCountry]);

  // GeoJSON Indexed Database
  const geoDatabaseRef = useRef({
    indexedFeatures: [],
    countryLineMap: new Map(), // iso3 / name -> Float32Array of 3D lines
    featuresByIso: new Map(),
    featuresByName: new Map()
  });

  const currentHoveredCountryRef = useRef(null);
  const isRotatingRef = useRef(isRotating);
  const onUserInteractionRef = useRef(onUserInteraction);

  // Subscribe to live intelligence feed updates so 3D pins and clusters re-render automatically
  const [liveEventsVersion, setLiveEventsVersion] = useState(0);
  useEffect(() => {
    const unsubscribe = intelligenceFeed.subscribe(() => {
      setLiveEventsVersion(v => v + 1);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    isRotatingRef.current = isRotating;
  }, [isRotating]);


  useEffect(() => {
    onUserInteractionRef.current = onUserInteraction;
  }, [onUserInteraction]);

  // Transition animation state
  const transitionRef = useRef({
    active: false,
    startTime: 0,
    duration: 900,
    startPos: new THREE.Vector3(),
    targetPos: new THREE.Vector3(),
    startTarget: new THREE.Vector3(),
    endTarget: new THREE.Vector3()
  });

  const hasInteractedRef = useRef(false);

  // Generate procedural canvas texture for Earth surface (deep pitch-black ocean & subtle dark land backing)
  const createEarthTexture = useCallback(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    // Deep pitch-black / charcoal ocean base
    const oceanGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    oceanGrad.addColorStop(0, '#000000');
    oceanGrad.addColorStop(0.5, '#020406');
    oceanGrad.addColorStop(1, '#000000');
    ctx.fillStyle = oceanGrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 10-degree Lat-Long graticule grid lines on canvas
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
    ctx.lineWidth = 1;
    for (let x = 0; x <= canvas.width; x += canvas.width / 36) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y <= canvas.height; y += canvas.height / 18) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Equator and Prime Meridian subtle highlights
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();

    earthCanvasRef.current = canvas;
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    earthTextureRef.current = texture;
    return texture;
  }, []);

  // Helper to query country at geographic coordinates
  const findCountryAt = useCallback((lat, lng) => {
    const { indexedFeatures } = geoDatabaseRef.current;
    if (!indexedFeatures || indexedFeatures.length === 0) return null;

    // 1. Exact Point in Polygon Test
    for (const item of indexedFeatures) {
      const [minLng, minLat, maxLng, maxLat] = item.bbox;
      if (lng < minLng || lng > maxLng || lat < minLat || lat > maxLat) continue;

      for (const poly of item.polyData) {
        const outer = poly[0];
        if (lng < outer.bbox[0] || lng > outer.bbox[2] || lat < outer.bbox[1] || lat > outer.bbox[3]) continue;
        if (pointInRing(lng, lat, outer.ring)) {
          // Check interior polygon holes if any
          let inHole = false;
          for (let h = 1; h < poly.length; h++) {
            const hole = poly[h];
            if (lng >= hole.bbox[0] && lng <= hole.bbox[2] && lat >= hole.bbox[1] && lat <= hole.bbox[3]) {
              if (pointInRing(lng, lat, hole.ring)) {
                inHole = true;
                break;
              }
            }
          }
          if (!inHole) return item;
        }
      }
    }

    // 2. Proximity Fallback for small islands or tight coastlines (e.g. Taiwan, Singapore, Bahrain)
    // Only applied within a tight angular radius (2.0 degrees)
    let closestItem = null;
    let minDistance = 2.0;
    for (const item of indexedFeatures) {
      const dLat = Math.abs(item.center.lat - lat);
      const dLng = Math.abs(item.center.lng - lng);
      if (dLat < 2.2 && dLng < 2.2) {
        const dist = Math.hypot(dLat, dLng);
        if (dist < minDistance) {
          minDistance = dist;
          closestItem = item;
        }
      }
    }

    return closestItem;
  }, []);

  // Initialize Three.js Scene
  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.0012);
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 2000);
    camera.position.set(0, 30, 290);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.rotateSpeed = 0.65;
    controls.zoomSpeed = 0.8;
    controls.minDistance = 125;
    controls.maxDistance = 460;
    controls.enablePan = false;
    controlsRef.current = controls;

    const notifyInteraction = () => {
      if (!hasInteractedRef.current) {
        hasInteractedRef.current = true;
        if (onUserInteractionRef.current) onUserInteractionRef.current();
      }
    };
    controls.addEventListener('start', notifyInteraction);

    // Deep Space Starfield (Monochrome white/silver sparse points)
    const starCount = 1800;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const radius = 600 + Math.random() * 500;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      starPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      starPositions[i * 3 + 2] = radius * Math.cos(phi);
      
      const shade = 0.35 + Math.random() * 0.55;
      starColors[i * 3] = shade;
      starColors[i * 3 + 1] = shade;
      starColors[i * 3 + 2] = shade;
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));
    const starMaterial = new THREE.PointsMaterial({
      size: 1.3,
      vertexColors: true,
      transparent: true,
      opacity: 0.60
    });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Globe Group
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);
    globeGroupRef.current = globeGroup;

    // Subgroups
    const countryBordersGroup = new THREE.Group();
    globeGroup.add(countryBordersGroup);
    countryBordersGroupRef.current = countryBordersGroup;

    const routesGroup = new THREE.Group();
    globeGroup.add(routesGroup);
    routesGroupRef.current = routesGroup;

    const arcsGroup = new THREE.Group();
    globeGroup.add(arcsGroup);
    arcsGroupRef.current = arcsGroup;

    const markersGroup = new THREE.Group();
    globeGroup.add(markersGroup);
    markersGroupRef.current = markersGroup;

    const oceanLabelsGroup = new THREE.Group();
    globeGroup.add(oceanLabelsGroup);
    oceanLabelsGroupRef.current = oceanLabelsGroup;

    const capitalMarkerGroup = new THREE.Group();
    globeGroup.add(capitalMarkerGroup);
    capitalMarkerGroupRef.current = capitalMarkerGroup;

    const subseaCablesGroup = new THREE.Group();
    globeGroup.add(subseaCablesGroup);
    subseaCablesGroupRef.current = subseaCablesGroup;

    const historicalBordersGroup = new THREE.Group();
    globeGroup.add(historicalBordersGroup);
    historicalBordersGroupRef.current = historicalBordersGroup;

    const sensorsGroup = new THREE.Group();
    globeGroup.add(sensorsGroup);
    sensorsGroupRef.current = sensorsGroup;

    const wargameGroup = new THREE.Group();
    globeGroup.add(wargameGroup);
    wargameGroupRef.current = wargameGroup;

    const tacticalFlashpointGroup = new THREE.Group();
    globeGroup.add(tacticalFlashpointGroup);
    tacticalFlashpointGroupRef.current = tacticalFlashpointGroup;

    // Populate subtle floating ocean & marginal sea geographic labels
    const oceanLabels = getOceanAndSeaLabels();
    oceanLabels.forEach(lbl => {
      const sprite = createOceanTextSprite(lbl.name, lbl.type === 'OCEAN');
      const pos = latLngToVector3(lbl.lat, lbl.lng, GLOBE_RADIUS * 1.004);
      sprite.position.copy(pos);
      oceanLabelsGroup.add(sprite);
    });

    // Base Earth Sphere (Deep Charcoal / Black Ocean Surface)
    const earthTexture = createEarthTexture();
    const earthGeometry = new THREE.SphereGeometry(GLOBE_RADIUS, 72, 72);
    const earthMaterial = new THREE.MeshStandardMaterial({
      map: earthTexture,
      roughness: 0.96,
      metalness: 0.04,
      color: 0x010204
    });
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    earthMesh.name = 'earth_sphere';
    globeGroup.add(earthMesh);
    earthMeshRef.current = earthMesh;

    // 3D Graticule Grid Sphere (Subtle Monochrome Lines)
    const graticuleGeom = new THREE.BufferGeometry();
    const graticuleLines = [];
    for (let lat = -75; lat <= 75; lat += 15) {
      for (let lng = -180; lng < 180; lng += 4) {
        const p1 = latLngToVector3(lat, lng, GLOBE_RADIUS * 1.001);
        const p2 = latLngToVector3(lat, lng + 4, GLOBE_RADIUS * 1.001);
        graticuleLines.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
      }
    }
    for (let lng = -180; lng < 180; lng += 15) {
      for (let lat = -80; lat < 80; lat += 4) {
        const p1 = latLngToVector3(lat, lng, GLOBE_RADIUS * 1.001);
        const p2 = latLngToVector3(lat + 4, lng, GLOBE_RADIUS * 1.001);
        graticuleLines.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
      }
    }
    graticuleGeom.setAttribute('position', new THREE.Float32BufferAttribute(graticuleLines, 3));
    const graticuleMat = new THREE.LineBasicMaterial({
      color: 0x22262e,
      transparent: true,
      opacity: 0.28
    });
    const graticuleMesh = new THREE.LineSegments(graticuleGeom, graticuleMat);
    globeGroup.add(graticuleMesh);

    // Dynamic Hover Line Segments Mesh (Brilliant Pure White)
    const hoverBordersGeom = new THREE.BufferGeometry();
    const hoverBordersMat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 1.0,
      linewidth: 2.0
    });
    const hoverBordersMesh = new THREE.LineSegments(hoverBordersGeom, hoverBordersMat);
    hoverBordersMesh.name = 'hover_borders';
    countryBordersGroup.add(hoverBordersMesh);
    hoverBordersMeshRef.current = hoverBordersMesh;

    // Dynamic Neighbor Line Segments Mesh (Refined Silver Context)
    const neighborBordersGeom = new THREE.BufferGeometry();
    const neighborBordersMat = new THREE.LineBasicMaterial({
      color: 0x888888,
      transparent: true,
      opacity: 0.75,
      linewidth: 1.5
    });
    const neighborBordersMesh = new THREE.LineSegments(neighborBordersGeom, neighborBordersMat);
    neighborBordersMesh.name = 'neighbor_borders';
    countryBordersGroup.add(neighborBordersMesh);
    neighborBordersMeshRef.current = neighborBordersMesh;

    // Dynamic Selected Country Line Segments Mesh (Luminous Pure White)
    const selectedBordersGeom = new THREE.BufferGeometry();
    const selectedBordersMat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 1.0,
      linewidth: 2.5
    });
    const selectedBordersMesh = new THREE.LineSegments(selectedBordersGeom, selectedBordersMat);
    selectedBordersMesh.name = 'selected_borders';
    countryBordersGroup.add(selectedBordersMesh);
    selectedBordersMeshRef.current = selectedBordersMesh;

    // Dynamic Ocean Connected Littoral Country Border Mesh (Secondary High-Contrast Silver-White)
    const oceanConnectedBordersGeom = new THREE.BufferGeometry();
    const oceanConnectedBordersMat = new THREE.LineBasicMaterial({
      color: 0xd4d4d4,
      transparent: true,
      opacity: 0.95,
      linewidth: 2.0
    });
    const oceanConnectedBordersMesh = new THREE.LineSegments(oceanConnectedBordersGeom, oceanConnectedBordersMat);
    oceanConnectedBordersMesh.name = 'ocean_connected_borders';
    countryBordersGroup.add(oceanConnectedBordersMesh);
    oceanConnectedBordersMeshRef.current = oceanConnectedBordersMesh;

    // Outer Atmosphere Glow Shader (Pure White / Silver Fresnel Halo)
    const atmosphereGeom = new THREE.SphereGeometry(GLOBE_RADIUS * 1.026, 64, 64);
    const atmosphereMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vec3 viewDir = normalize(-vPosition);
          float fresnel = dot(vNormal, viewDir);
          float intensity = pow(1.0 - max(fresnel, 0.0), 3.4);
          vec3 glowColor = vec3(0.88, 0.90, 0.96);
          gl_FragColor = vec4(glowColor, intensity * 0.45);
        }
      `,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeom, atmosphereMat);
    scene.add(atmosphereMesh);

    // Inner subtle glow (Subtle White/Silver Rim)
    const innerGlowGeom = new THREE.SphereGeometry(GLOBE_RADIUS * 1.008, 64, 64);
    const innerGlowMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vec3 viewDir = normalize(-vPosition);
          float rim = 1.0 - max(dot(vNormal, viewDir), 0.0);
          float alpha = pow(rim, 2.8) * 0.32;
          gl_FragColor = vec4(0.92, 0.94, 0.98, alpha);
        }
      `,
      side: THREE.FrontSide,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false
    });
    const innerGlowMesh = new THREE.Mesh(innerGlowGeom, innerGlowMat);
    globeGroup.add(innerGlowMesh);

    // Grayscale Lighting (Soft High-Contrast Studio Lighting)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.4);
    dirLight1.position.set(300, 200, 300);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x888888, 0.5);
    dirLight2.position.set(-300, -100, -200);
    scene.add(dirLight2);

    // Fetch and index GeoJSON country borders, polygons and build Continental Particle System
    fetch('/data/countries.geojson')
      .then(res => res.json())
      .then(geoJson => {
        if (!countryBordersGroupRef.current || !globeGroupRef.current) return;
        const allLinePositions = [];
        const countryLineMap = new Map();
        const featuresByIso = new Map();
        const featuresByName = new Map();

        // 1. Offscreen Land Mask Canvas for Geographically Accurate Land Particle Sampling
        const maskCanvas = document.createElement('canvas');
        maskCanvas.width = 2048;
        maskCanvas.height = 1024;
        const maskCtx = maskCanvas.getContext('2d');
        maskCtx.fillStyle = '#000000';
        maskCtx.fillRect(0, 0, maskCanvas.width, maskCanvas.height);
        maskCtx.fillStyle = '#ffffff';

        const indexedFeatures = geoJson.features.map(f => {
          const geom = f.geometry;
          if (!geom) return null;

          const iso3 = f.properties.ISO_A3 || f.properties.ADM0_A3 || f.properties.SOV_A3 || f.properties.NAME;
          const name = f.properties.NAME;

          let minLng = 180, maxLng = -180, minLat = 90, maxLat = -90;
          const polygons = geom.type === 'Polygon' ? [geom.coordinates] : geom.coordinates;
          const countryLines = [];

          const polyData = polygons.map(poly => {
            return poly.map((ring, ringIdx) => {
              let rMinLng = 180, rMaxLng = -180, rMinLat = 90, rMaxLat = -90;
              
              // Rasterize outer rings onto mask canvas
              if (ringIdx === 0 && ring.length > 0) {
                maskCtx.beginPath();
                for (let i = 0; i < ring.length; i++) {
                  const px = ((ring[i][0] + 180) / 360) * maskCanvas.width;
                  const py = ((90 - ring[i][1]) / 180) * maskCanvas.height;
                  if (i === 0) maskCtx.moveTo(px, py);
                  else maskCtx.lineTo(px, py);
                }
                maskCtx.closePath();
                maskCtx.fill();
              }

              for (let i = 0; i < ring.length; i++) {
                const pt = ring[i];
                if (pt[0] < rMinLng) rMinLng = pt[0];
                if (pt[0] > rMaxLng) rMaxLng = pt[0];
                if (pt[1] < rMinLat) rMinLat = pt[1];
                if (pt[1] > rMaxLat) rMaxLat = pt[1];

                // Generate 3D line segments for borders
                if (i < ring.length - 1) {
                  const ptNext = ring[i + 1];
                  const p1 = latLngToVector3(pt[1], pt[0], GLOBE_RADIUS * 1.002);
                  const p2 = latLngToVector3(ptNext[1], ptNext[0], GLOBE_RADIUS * 1.002);
                  allLinePositions.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
                  
                  // Also store country-specific elevated lines for hover/selection
                  const hp1 = latLngToVector3(pt[1], pt[0], GLOBE_RADIUS * 1.006);
                  const hp2 = latLngToVector3(ptNext[1], ptNext[0], GLOBE_RADIUS * 1.006);
                  countryLines.push(hp1.x, hp1.y, hp1.z, hp2.x, hp2.y, hp2.z);
                }
              }
              if (rMinLng < minLng) minLng = rMinLng;
              if (rMaxLng > maxLng) maxLng = rMaxLng;
              if (rMinLat < minLat) minLat = rMinLat;
              if (rMaxLat > maxLat) maxLat = rMaxLat;
              return { ring, bbox: [rMinLng, rMinLat, rMaxLng, rMaxLat] };
            });
          });

          const centerLat = f.properties.LABEL_Y || (minLat + maxLat) / 2;
          const centerLng = f.properties.LABEL_X || (minLng + maxLng) / 2;

          const item = {
            feature: f,
            iso3,
            name,
            bbox: [minLng, minLat, maxLng, maxLat],
            center: { lat: centerLat, lng: centerLng },
            polyData
          };

          const lineFloat32 = new Float32Array(countryLines);
          countryLineMap.set(iso3, lineFloat32);
          countryLineMap.set(name, lineFloat32);
          featuresByIso.set(iso3, item);
          featuresByName.set(name.toLowerCase(), item);

          return item;
        }).filter(Boolean);

        geoDatabaseRef.current = {
          indexedFeatures,
          countryLineMap,
          featuresByIso,
          featuresByName
        };

        // 2. Render Continental Land Polygons onto Earth Surface Canvas
        const canvas = earthCanvasRef.current;
        if (canvas) {
          const ctx = canvas.getContext('2d');
          ctx.fillStyle = '#07090d'; // Deep charcoal landmass backing
          ctx.strokeStyle = '#181b22'; // Subtle boundary stroke
          ctx.lineWidth = 0.8;

          geoJson.features.forEach(f => {
            const geom = f.geometry;
            if (!geom) return;
            const polys = geom.type === 'Polygon' ? [geom.coordinates] : geom.coordinates;
            polys.forEach(poly => {
              const outer = poly[0];
              if (!outer || outer.length === 0) return;
              ctx.beginPath();
              for (let i = 0; i < outer.length; i++) {
                const px = ((outer[i][0] + 180) / 360) * canvas.width;
                const py = ((90 - outer[i][1]) / 180) * canvas.height;
                if (i === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
              }
              ctx.closePath();
              ctx.fill();
              ctx.stroke();
            });
          });

          if (earthTextureRef.current) {
            earthTextureRef.current.needsUpdate = true;
          }
        }

        // 3. GENERATE THE CONTINENTAL PARTICLE EARTH (Luminous white/silver points)
        const maskData = maskCtx.getImageData(0, 0, maskCanvas.width, maskCanvas.height).data;
        const isLand = (lat, lng) => {
          const px = Math.min(2047, Math.max(0, Math.floor(((lng + 180) / 360) * 2048)));
          const py = Math.min(1023, Math.max(0, Math.floor(((90 - lat) / 180) * 1024)));
          return maskData[(py * 2048 + px) * 4] > 128;
        };

        const particlePositions = [];
        const particleColors = [];

        // A. Fibonacci Sphere Uniform Land Sampling (~75,000 candidate sphere points)
        const totalSphereCandidates = 78000;
        const goldenRatio = (1 + Math.sqrt(5)) / 2;
        for (let i = 0; i < totalSphereCandidates; i++) {
          const theta = 2 * Math.PI * i / goldenRatio;
          const phi = Math.acos(1 - 2 * (i + 0.5) / totalSphereCandidates);
          const lat = 90 - (phi * 180 / Math.PI);
          let lng = (theta * 180 / Math.PI) % 360;
          if (lng > 180) lng -= 360;
          if (lng < -180) lng += 360;

          if (isLand(lat, lng)) {
            const pos = latLngToVector3(lat, lng, GLOBE_RADIUS * 1.002);
            particlePositions.push(pos.x, pos.y, pos.z);

            // Shading: mix of pure white cores and refined silver
            const rand = Math.random();
            if (rand > 0.45) {
              particleColors.push(1.0, 1.0, 1.0); // Pure luminous white
            } else if (rand > 0.15) {
              particleColors.push(0.85, 0.86, 0.90); // High-contrast bright silver
            } else {
              particleColors.push(0.70, 0.72, 0.78); // Medium silver depth
            }
          }
        }

        // B. Interpolate High-Density Particles along Geographic Coastlines & Borders
        geoJson.features.forEach(f => {
          const geom = f.geometry;
          if (!geom) return;
          const polys = geom.type === 'Polygon' ? [geom.coordinates] : geom.coordinates;
          polys.forEach(poly => {
            const ring = poly[0];
            if (!ring) return;
            for (let i = 0; i < ring.length - 1; i++) {
              const pA = ring[i];
              const pB = ring[i + 1];
              const dLng = pB[0] - pA[0];
              const dLat = pB[1] - pA[1];
              const dist = Math.hypot(dLng, dLat);
              const steps = Math.max(1, Math.floor(dist / 0.4));
              for (let s = 0; s < steps; s++) {
                const frac = s / steps;
                const cLat = pA[1] + dLat * frac;
                const cLng = pA[0] + dLng * frac;
                const cPos = latLngToVector3(cLat, cLng, GLOBE_RADIUS * 1.003);
                particlePositions.push(cPos.x, cPos.y, cPos.z);
                particleColors.push(1.0, 1.0, 1.0); // Pure luminous white coastline edges
              }
            }
          });
        });

        // C. Dense Luminous Clusters around National Capitals & Strategic Hubs
        Object.entries(CAPITAL_COORDINATES).forEach(([, coords]) => {
          if (!coords || coords.lat === undefined) return;
          for (let k = 0; k < 18; k++) {
            const jLat = coords.lat + (Math.random() - 0.5) * 1.1;
            const jLng = coords.lng + (Math.random() - 0.5) * 1.1;
            const jPos = latLngToVector3(jLat, jLng, GLOBE_RADIUS * 1.003);
            particlePositions.push(jPos.x, jPos.y, jPos.z);
            particleColors.push(1.0, 1.0, 1.0);
          }
        });

        // Create Soft Radial Glow Particle Sprite Texture
        const spriteCanvas = document.createElement('canvas');
        spriteCanvas.width = 64;
        spriteCanvas.height = 64;
        const sCtx = spriteCanvas.getContext('2d');
        const sGrad = sCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
        sGrad.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
        sGrad.addColorStop(0.35, 'rgba(240, 240, 248, 0.85)');
        sGrad.addColorStop(0.7, 'rgba(180, 185, 200, 0.25)');
        sGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        sCtx.fillStyle = sGrad;
        sCtx.fillRect(0, 0, 64, 64);
        const particleTexture = new THREE.CanvasTexture(spriteCanvas);

        const particleGeom = new THREE.BufferGeometry();
        particleGeom.setAttribute('position', new THREE.Float32BufferAttribute(particlePositions, 3));
        particleGeom.setAttribute('color', new THREE.Float32BufferAttribute(particleColors, 3));

        const particleMat = new THREE.PointsMaterial({
          size: 1.85,
          map: particleTexture,
          vertexColors: true,
          transparent: true,
          opacity: 0.95,
          blending: THREE.AdditiveBlending,
          depthWrite: false
        });
        const particlePoints = new THREE.Points(particleGeom, particleMat);
        particlePoints.name = 'continental_particles';
        globeGroupRef.current.add(particlePoints);

        // 4. Render Base Country Borders with Subtle Silver Line Segments
        const bordersGeom = new THREE.BufferGeometry();
        bordersGeom.setAttribute('position', new THREE.Float32BufferAttribute(allLinePositions, 3));
        const bordersMat = new THREE.LineBasicMaterial({
          color: 0x2e333d,
          transparent: true,
          opacity: 0.65
        });
        const bordersMesh = new THREE.LineSegments(bordersGeom, bordersMat);
        bordersMesh.name = 'all_borders';
        countryBordersGroupRef.current.add(bordersMesh);
        bordersMeshRef.current = bordersMesh;
      })
      .catch(err => {
        console.warn('GeoJSON country border load error:', err);
      });

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let lastTime = performance.now();
    const startTime = performance.now();
    const animate = () => {
      animFrameRef.current = requestAnimationFrame(animate);
      const now = performance.now();
      const delta = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      const time = (now - startTime) / 1000;

      // Camera transition interpolation
      if (transitionRef.current.active) {
        const trans = transitionRef.current;
        const elapsed = performance.now() - trans.startTime;
        const progress = Math.min(elapsed / trans.duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);

        camera.position.lerpVectors(trans.startPos, trans.targetPos, ease);
        controls.target.lerpVectors(trans.startTarget, trans.endTarget, ease);

        if (progress >= 1) {
          trans.active = false;
        }
      }

      // Gentle auto-rotation if enabled and not currently focused
      if (isRotatingRef.current && !transitionRef.current.active && !controls.state) {
        globeGroup.rotation.y += 0.00075;
      }

      // Animate photon packets along relationship arcs
      if (photonPacketsRef.current.length > 0) {
        photonPacketsRef.current.forEach(packet => {
          packet.t = (packet.t + packet.speed) % 1;
          const pos = packet.curve.getPoint(packet.t);
          packet.mesh.position.copy(pos);
        });
      }

      // Animate pulsing event markers, clusters and radar sweeps
      if (markersGroupRef.current) {
        markersGroupRef.current.traverse(child => {
          if (child.userData?.type === 'pulse_ring') {
            const cycle = (time * child.userData.speed + child.userData.phase) % 1;
            const scale = 1 + cycle * 1.8;
            child.scale.set(scale, scale, scale);
            if (child.material) child.material.opacity = (1 - cycle) * 0.85;
          }
          if (child.userData?.type === 'radar_sweep') {
            child.rotation.z -= delta * 2.2;
          }
        });
      }

      // Dynamic distance-based cluster vs individual event visibility
      if (controlsRef.current && cameraRef.current) {
        const camDist = camera.position.distanceTo(controls.target);
        if (clusterPinsGroupRef.current && eventPinsGroupRef.current) {
          const isFar = camDist > 225 && !selectedEvent;
          clusterPinsGroupRef.current.visible = isFar;
          eventPinsGroupRef.current.visible = !isFar;
        }
      }

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [createEarthTexture]);

  // Smooth Camera Relocation Animation Helper
  const animateCameraTo = useCallback((lat, lng, targetDistance = 190, duration = 850) => {
    if (!cameraRef.current || !controlsRef.current || !globeGroupRef.current) return;

    // Convert lat/lng to target direction in globe space
    const targetVector = latLngToVector3(lat, lng, 1.0);
    // Apply current globe rotation to target vector to match camera world space
    targetVector.applyEuler(globeGroupRef.current.rotation);

    const camera = cameraRef.current;
    const controls = controlsRef.current;

    const startPos = camera.position.clone();
    const endPos = targetVector.clone().multiplyScalar(targetDistance);

    const startTarget = controls.target.clone();
    const endTarget = new THREE.Vector3(0, 0, 0);

    transitionRef.current = {
      active: true,
      startTime: performance.now(),
      duration,
      startPos,
      targetPos: endPos,
      startTarget,
      endTarget
    };
  }, []);

  // Update Selected Country, Neighbor Visual Highlighting & Capital Marker on Globe
  useEffect(() => {
    if (!selectedBordersMeshRef.current || !neighborBordersMeshRef.current) return;

    const selectedMesh = selectedBordersMeshRef.current;
    const neighborMesh = neighborBordersMeshRef.current;
    const { countryLineMap } = geoDatabaseRef.current;

    // Clear previous capital marker
    if (capitalMarkerGroupRef.current) {
      while (capitalMarkerGroupRef.current.children.length > 0) {
        const child = capitalMarkerGroupRef.current.children[0];
        capitalMarkerGroupRef.current.remove(child);
        if (child.geometry) child.geometry.dispose();
        if (child.material) {
          if (child.material.map) child.material.map.dispose();
          child.material.dispose();
        }
      }
    }
    // Remove previous capital hit mesh from interactiveMarkersRef
    interactiveMarkersRef.current = interactiveMarkersRef.current.filter(m => m.userData?.type !== 'capital');

    if (!selectedCountry) {
      // Clear selections
      selectedMesh.geometry.dispose();
      selectedMesh.geometry = new THREE.BufferGeometry();
      neighborMesh.geometry.dispose();
      neighborMesh.geometry = new THREE.BufferGeometry();
      return;
    }

    const iso3 = selectedCountry.id || selectedCountry.ISO_A3;
    const name = selectedCountry.name;

    // Highlight selected country
    const selectedLines = countryLineMap.get(iso3) || countryLineMap.get(name);
    if (selectedLines && selectedLines.length > 0) {
      selectedMesh.geometry.dispose();
      const geom = new THREE.BufferGeometry();
      geom.setAttribute('position', new THREE.BufferAttribute(selectedLines, 3));
      selectedMesh.geometry = geom;
    }

    // Highlight immediate neighbors with extended lookup and land borders
    const predefinedNeighbors = EXTENDED_COUNTRY_NEIGHBORS[iso3] || COUNTRY_NEIGHBORS[iso3] || [];
    const dossierNeighbors = (selectedCountry.geographyBorders?.landBorders || [])
      .map(b => b.code || b.id || b.country)
      .filter(Boolean);
    const combinedNeighbors = Array.from(new Set([...predefinedNeighbors, ...dossierNeighbors]));

    const neighborPositions = [];
    combinedNeighbors.forEach(nIso => {
      const nLines = countryLineMap.get(nIso) || countryLineMap.get(nIso.toUpperCase());
      if (nLines) {
        for (let i = 0; i < nLines.length; i++) {
          neighborPositions.push(nLines[i]);
        }
      }
    });

    if (neighborPositions.length > 0) {
      neighborMesh.geometry.dispose();
      const nGeom = new THREE.BufferGeometry();
      nGeom.setAttribute('position', new THREE.Float32BufferAttribute(neighborPositions, 3));
      neighborMesh.geometry = nGeom;
    } else {
      neighborMesh.geometry.dispose();
      neighborMesh.geometry = new THREE.BufferGeometry();
    }

    // Spawn Capital Marker on the Globe (● CAPITAL)
    const capitalName = selectedCountry.capital;
    const capitalCoords = selectedCountry.capitalCoords || CAPITAL_COORDINATES[iso3] || (selectedCountry.lat ? { lat: selectedCountry.lat, lng: selectedCountry.lng } : null);

    if (capitalName && capitalCoords && capitalCoords.lat !== undefined && capitalCoords.lng !== undefined && capitalMarkerGroupRef.current) {
      const capGroup = capitalMarkerGroupRef.current;
      const capPos = latLngToVector3(capitalCoords.lat, capitalCoords.lng, GLOBE_RADIUS * 1.012);
      const normal = capPos.clone().normalize();

      // Outer glowing ring
      const ringGeom = new THREE.RingGeometry(0.7, 1.6, 24);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.90
      });
      const ringMesh = new THREE.Mesh(ringGeom, ringMat);
      ringMesh.position.copy(capPos.clone().add(normal.clone().multiplyScalar(0.12)));
      ringMesh.lookAt(capPos.clone().add(normal));
      ringMesh.userData = { type: 'pulse_ring', speed: 1.1, phase: 0 };
      capGroup.add(ringMesh);

      // Center glowing beacon sphere
      const beaconGeom = new THREE.SphereGeometry(0.7, 16, 16);
      const beaconMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const beaconMesh = new THREE.Mesh(beaconGeom, beaconMat);
      beaconMesh.position.copy(capPos);
      capGroup.add(beaconMesh);

      // Billboard Text Sprite (COUNTRY \n ● CAPITAL)
      const billboardSprite = createCapitalBillboardSprite(selectedCountry.name, capitalName);
      billboardSprite.position.copy(capPos.clone().add(normal.clone().multiplyScalar(4.2)));
      capGroup.add(billboardSprite);

      // Invisible Raycasting Hit Sphere
      const hitGeom = new THREE.SphereGeometry(5.0, 12, 12);
      const hitMat = new THREE.MeshBasicMaterial({ visible: false });
      const hitMesh = new THREE.Mesh(hitGeom, hitMat);
      hitMesh.position.copy(capPos);
      hitMesh.userData = {
        type: 'capital',
        data: {
          capital: capitalName,
          country: selectedCountry.name,
          officialName: selectedCountry.officialName || selectedCountry.name,
          iso3: iso3,
          flag: selectedCountry.flag,
          coords: capitalCoords,
          role: selectedCountry.capitalAdmin?.role || `National Capital & Apex Administrative Seat of Government of ${selectedCountry.name}`,
          politicalSignificance: selectedCountry.capitalAdmin?.political || `Seat of executive ministries, legislative assembly, and supreme court of ${selectedCountry.name}.`,
          geographicLocation: selectedCountry.capitalAdmin?.geographic || `${capitalCoords.lat.toFixed(2)}°N, ${capitalCoords.lng.toFixed(2)}°E situated in ${selectedCountry.region || 'the nation'}.`,
          strategicSignificance: selectedCountry.capitalAdmin?.strategic || `Apex military command nexus, national civil defense center, and sovereign communications hub.`
        }
      };
      capGroup.add(hitMesh);
      interactiveMarkersRef.current.push(hitMesh);
    }

    // Smoothly focus camera onto selected country
    animateCameraTo(selectedCountry.lat, selectedCountry.lng, 185, 900);
  }, [selectedCountry, animateCameraTo]);

  // Handle Event & Strategic Location Markers
  useEffect(() => {
    if (!markersGroupRef.current) return;
    const group = markersGroupRef.current;
    interactiveMarkersRef.current = [];

    // Clear existing
    while (group.children.length > 0) {
      group.remove(group.children[0]);
    }

    // Geopolitical Events & Regional Clusters
    if (activeLayers.events !== false) {
      const clusterGroup = new THREE.Group();
      clusterPinsGroupRef.current = clusterGroup;
      group.add(clusterGroup);

      const eventGroup = new THREE.Group();
      eventPinsGroupRef.current = eventGroup;
      group.add(eventGroup);

      // 1. Render Regional Clusters for Zoomed-Out Overview
      const regionalClusters = intelligenceFeed.getRegionalClusters();
      regionalClusters.forEach(cluster => {
        if (cluster.count === 0) return;
        const pos = latLngToVector3(cluster.lat, cluster.lng, GLOBE_RADIUS * 1.015);
        const normal = pos.clone().normalize();

        // Hit sphere for raycasting cluster clicks
        const hitGeom = new THREE.SphereGeometry(6.5, 12, 12);
        const hitMat = new THREE.MeshBasicMaterial({ visible: false });
        const hitMesh = new THREE.Mesh(hitGeom, hitMat);
        hitMesh.position.copy(pos);
        hitMesh.userData = { cluster, type: 'cluster' };
        clusterGroup.add(hitMesh);
        interactiveMarkersRef.current.push(hitMesh);

        // Billboard Sprite with name and count
        const sprite = createClusterBillboardSprite(cluster.name, cluster.count, cluster.criticalCount > 0);
        sprite.position.copy(pos.clone().add(normal.clone().multiplyScalar(3.2)));
        clusterGroup.add(sprite);

        // Pulsing Halo Ring (0xFF3030 for clusters with critical alerts, white for standard)
        const isCriticalCluster = cluster.criticalCount > 0;
        const haloGeom = new THREE.RingGeometry(2.5, 3.8, 24);
        const haloMat = new THREE.MeshBasicMaterial({
          color: isCriticalCluster ? 0xFF3030 : 0xffffff,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: isCriticalCluster ? 0.90 : 0.85
        });
        const haloMesh = new THREE.Mesh(haloGeom, haloMat);
        haloMesh.position.copy(pos.clone().add(normal.clone().multiplyScalar(0.2)));
        haloMesh.lookAt(pos.clone().add(normal));
        haloMesh.userData = { type: 'pulse_ring', speed: isCriticalCluster ? 1.0 : 0.7, phase: 0 };
        clusterGroup.add(haloMesh);
      });

      // 2. Render Individual Event Pins from Live Intelligence Feed
      const allFeedEvents = intelligenceFeed.getState().events;
      const activeEvents = allFeedEvents.filter(event => {
        if (!event || event.lat === undefined || event.lng === undefined) return false;
        if (currentYear === 'PRESENT') return true;
        const yearInt = parseInt(currentYear, 10);
        return event.timeline ? event.timeline.some(t => {
          const tYear = parseInt(t.year, 10);
          return !isNaN(tYear) && tYear <= yearInt;
        }) : true;
      });

      activeEvents.forEach(event => {
        const pos = latLngToVector3(event.lat, event.lng, GLOBE_RADIUS * 1.01);
        const normal = pos.clone().normalize();

        // Hit sphere
        const hitGeom = new THREE.SphereGeometry(3.6, 12, 12);
        const hitMat = new THREE.MeshBasicMaterial({ visible: false });
        const hitMesh = new THREE.Mesh(hitGeom, hitMat);
        hitMesh.position.copy(pos);
        hitMesh.userData = { event, type: 'event' };
        eventGroup.add(hitMesh);
        interactiveMarkersRef.current.push(hitMesh);

        // Geometric shape based on category and priority
        const isCritical = event.priority === 'CRITICAL';
        const isConflict = event.category === 'conflict';
        const isMilitary = event.category === 'military';

        // Core marker (Luminous white or restrained #FF3030 if critical)
        const coreGeom = new THREE.SphereGeometry(1.2, 16, 16);
        const coreMat = new THREE.MeshBasicMaterial({ color: isCritical ? 0xFF3030 : 0xffffff });
        const coreMesh = new THREE.Mesh(coreGeom, coreMat);
        coreMesh.position.copy(pos);
        eventGroup.add(coreMesh);

        if (isCritical) {
          // Diamond Geometry (◆ Conflict / Critical in vivid #FF3030)
          const shapeGeom = new THREE.RingGeometry(1.1, 1.8, 4);
          const shapeMat = new THREE.MeshBasicMaterial({
            color: 0xFF3030,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.95
          });
          const shapeMesh = new THREE.Mesh(shapeGeom, shapeMat);
          shapeMesh.position.copy(pos.clone().add(normal.clone().multiplyScalar(0.12)));
          shapeMesh.lookAt(pos.clone().add(normal));
          shapeMesh.rotation.z = Math.PI / 4;
          eventGroup.add(shapeMesh);

          // Restrained Red Glow Halo
          const glowGeom = new THREE.RingGeometry(0.8, 2.5, 24);
          const glowMat = new THREE.MeshBasicMaterial({
            color: 0xFF3030,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.35
          });
          const glowMesh = new THREE.Mesh(glowGeom, glowMat);
          glowMesh.position.copy(pos.clone().add(normal.clone().multiplyScalar(0.08)));
          glowMesh.lookAt(pos.clone().add(normal));
          eventGroup.add(glowMesh);

          // Red Blinking Pulsing Rings (#FF3030)
          for (let r = 0; r < 2; r++) {
            const ringGeom = new THREE.RingGeometry(1.4, 2.2, 24);
            const ringMat = new THREE.MeshBasicMaterial({
              color: 0xFF3030,
              side: THREE.DoubleSide,
              transparent: true,
              opacity: 0.90
            });
            const ringMesh = new THREE.Mesh(ringGeom, ringMat);
            ringMesh.position.copy(pos.clone().add(normal.clone().multiplyScalar(0.1)));
            ringMesh.lookAt(pos.clone().add(normal));
            ringMesh.userData = { type: 'pulse_ring', speed: 1.0, phase: r * 0.5 };
            eventGroup.add(ringMesh);
          }
        } else if (isConflict) {
          // Monochrome White Diamond
          const shapeGeom = new THREE.RingGeometry(1.1, 1.8, 4);
          const shapeMat = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.95
          });
          const shapeMesh = new THREE.Mesh(shapeGeom, shapeMat);
          shapeMesh.position.copy(pos.clone().add(normal.clone().multiplyScalar(0.12)));
          shapeMesh.lookAt(pos.clone().add(normal));
          shapeMesh.rotation.z = Math.PI / 4;
          eventGroup.add(shapeMesh);
        } else if (isMilitary) {
          // Square Geometry (■ Military)
          const shapeGeom = new THREE.RingGeometry(1.0, 1.6, 4);
          const shapeMat = new THREE.MeshBasicMaterial({
            color: 0xe0e0e0,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.85
          });
          const shapeMesh = new THREE.Mesh(shapeGeom, shapeMat);
          shapeMesh.position.copy(pos.clone().add(normal.clone().multiplyScalar(0.12)));
          shapeMesh.lookAt(pos.clone().add(normal));
          eventGroup.add(shapeMesh);
        }

        // Animated pulsing rings for other active/high conflict events (Pure White)
        if (!isCritical && (event.category === 'conflict' || event.category === 'military' || event.priority === 'HIGH')) {
          for (let r = 0; r < 2; r++) {
            const ringGeom = new THREE.RingGeometry(1.4, 2.0, 24);
            const ringMat = new THREE.MeshBasicMaterial({
              color: 0xffffff,
              side: THREE.DoubleSide,
              transparent: true,
              opacity: 0.85
            });
            const ringMesh = new THREE.Mesh(ringGeom, ringMat);
            ringMesh.position.copy(pos.clone().add(normal.clone().multiplyScalar(0.1)));
            ringMesh.lookAt(pos.clone().add(normal));
            ringMesh.userData = { type: 'pulse_ring', speed: 0.9, phase: r * 0.5 };
            eventGroup.add(ringMesh);
          }
        }
      });
    }


    // Strategic Locations (Monochrome White Diamonds)
    if (activeLayers.strategic !== false) {
      STRATEGIC_LOCATIONS.forEach(loc => {
        const pos = latLngToVector3(loc.lat, loc.lng, GLOBE_RADIUS * 1.012);
        const normal = pos.clone().normalize();

        // Hit sphere
        const hitGeom = new THREE.SphereGeometry(3.5, 12, 12);
        const hitMat = new THREE.MeshBasicMaterial({ visible: false });
        const hitMesh = new THREE.Mesh(hitGeom, hitMat);
        hitMesh.position.copy(pos);
        hitMesh.userData = { location: loc, type: 'location' };
        group.add(hitMesh);
        interactiveMarkersRef.current.push(hitMesh);

        // Luminous White Diamond Geometry
        const diamondGeom = new THREE.RingGeometry(0.8, 1.3, 4);
        const diamondMat = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.95
        });
        const diamondMesh = new THREE.Mesh(diamondGeom, diamondMat);
        diamondMesh.position.copy(pos.clone().add(normal.clone().multiplyScalar(0.15)));
        diamondMesh.lookAt(pos.clone().add(normal));
        diamondMesh.rotation.z = Math.PI / 4;
        group.add(diamondMesh);
      });
    }

    // Strategic Maritime Chokepoints and Strategic Ports Markers
    if (activeLayers.maritime !== false || activeLayers.strategic !== false) {
      const maritimeMarkers = getAllMaritimeMarkers();
      maritimeMarkers.forEach(mm => {
        const pos = latLngToVector3(mm.lat, mm.lng, GLOBE_RADIUS * 1.014);
        const normal = pos.clone().normalize();

        // Hit sphere for raycasting
        const hitGeom = new THREE.SphereGeometry(3.6, 12, 12);
        const hitMat = new THREE.MeshBasicMaterial({ visible: false });
        const hitMesh = new THREE.Mesh(hitGeom, hitMat);
        hitMesh.position.copy(pos);
        hitMesh.userData = { maritimeEntity: mm.data, marker: mm, type: 'maritime_marker' };
        group.add(hitMesh);
        interactiveMarkersRef.current.push(hitMesh);

        if (mm.markerCategory === 'chokepoint') {
          // Luminous White Diamond Geometry (▲ Chokepoint)
          const diamondGeom = new THREE.RingGeometry(0.7, 1.4, 4);
          const diamondMat = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.95
          });
          const diamondMesh = new THREE.Mesh(diamondGeom, diamondMat);
          diamondMesh.position.copy(pos.clone().add(normal.clone().multiplyScalar(0.18)));
          diamondMesh.lookAt(pos.clone().add(normal));
          diamondMesh.rotation.z = Math.PI / 4;
          group.add(diamondMesh);

          // Subtle pulse on critical chokepoints
          if (['STRAIT_OF_HORMUZ', 'MALACCA_STRAIT', 'BAB_EL_MANDEB', 'TAIWAN_STRAIT'].includes(mm.id)) {
            const pulseGeom = new THREE.RingGeometry(1.4, 2.0, 16);
            const pulseMat = new THREE.MeshBasicMaterial({
              color: 0xffffff,
              side: THREE.DoubleSide,
              transparent: true,
              opacity: 0.75
            });
            const pulseMesh = new THREE.Mesh(pulseGeom, pulseMat);
            pulseMesh.position.copy(pos.clone().add(normal.clone().multiplyScalar(0.2)));
            pulseMesh.lookAt(pos.clone().add(normal));
            pulseMesh.userData = { type: 'pulse_ring', speed: 0.8, phase: 0.3 };
            group.add(pulseMesh);
          }
        } else {
          // Luminous Port Disc & Silver Outer Ring
          const portGeom = new THREE.CircleGeometry(0.85, 16);
          const portMat = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.95
          });
          const portMesh = new THREE.Mesh(portGeom, portMat);
          portMesh.position.copy(pos.clone().add(normal.clone().multiplyScalar(0.18)));
          portMesh.lookAt(pos.clone().add(normal));
          group.add(portMesh);

          const portRingGeom = new THREE.RingGeometry(1.1, 1.35, 16);
          const portRingMat = new THREE.MeshBasicMaterial({
            color: 0x888888,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.80
          });
          const portRingMesh = new THREE.Mesh(portRingGeom, portRingMat);
          portRingMesh.position.copy(pos.clone().add(normal.clone().multiplyScalar(0.19)));
          portRingMesh.lookAt(pos.clone().add(normal));
          group.add(portRingMesh);
        }
      });
    }
  }, [activeLayers, currentYear, liveEventsVersion]);


  // Update Bilateral Strategic Arcs (Monochrome fine white lines with traveling luminous photons)
  useEffect(() => {
    if (!arcsGroupRef.current) return;
    const group = arcsGroupRef.current;
    
    while (group.children.length > 0) {
      group.remove(group.children[0]);
    }
    photonPacketsRef.current = [];

    // ONLY render arcs if an explicit relationship is selected OR if activeLayers.relations is enabled without a selected country
    if (!selectedRelationship && !activeLayers.relations) return;

    let relevantRelations = [];
    if (selectedRelationship) {
      const match = STRATEGIC_RELATIONS.find(rel => 
        rel.id === selectedRelationship || 
        (selectedRelationship.from && (
          (rel.from === selectedRelationship.from && rel.to === selectedRelationship.to) ||
          (rel.from === selectedRelationship.to && rel.to === selectedRelationship.from)
        ))
      ) || (typeof selectedRelationship === 'object' ? selectedRelationship : null);
      if (match) relevantRelations = [match];
    } else if (activeLayers.relations && !selectedCountry) {
      // Global ambient overview: only top 4 major corridors to avoid clutter
      relevantRelations = STRATEGIC_RELATIONS.slice(0, 4);
    }

    relevantRelations.forEach(rel => {
      const countryA = COUNTRIES.find(c => c.id === rel.from);
      const countryB = COUNTRIES.find(c => c.id === rel.to);
      if (!countryA || !countryB) return;

      const pA = latLngToVector3(countryA.lat, countryA.lng, GLOBE_RADIUS * 1.002);
      const pB = latLngToVector3(countryB.lat, countryB.lng, GLOBE_RADIUS * 1.002);

      const distance = pA.distanceTo(pB);
      const mid = pA.clone().add(pB).multiplyScalar(0.5);
      const midNormal = mid.clone().normalize();
      const altitude = GLOBE_RADIUS + Math.max(distance * 0.22, 10);
      const controlPoint = midNormal.multiplyScalar(altitude);

      const curve = new THREE.QuadraticBezierCurve3(pA, controlPoint, pB);
      const points = curve.getPoints(45);
      const curveGeom = new THREE.BufferGeometry().setFromPoints(points);

      const curveMat = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: selectedRelationship ? 0.95 : 0.40,
        linewidth: 1.5
      });
      const arcLine = new THREE.Line(curveGeom, curveMat);
      group.add(arcLine);

      // Endpoint luminous nodes
      const nodeGeom = new THREE.SphereGeometry(0.7, 8, 8);
      const nodeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const nodeA = new THREE.Mesh(nodeGeom, nodeMat);
      nodeA.position.copy(pA);
      group.add(nodeA);
      const nodeB = new THREE.Mesh(nodeGeom, nodeMat);
      nodeB.position.copy(pB);
      group.add(nodeB);

      // Traveling photon packet
      const packetGeom = new THREE.SphereGeometry(0.9, 8, 8);
      const packetMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.98
      });
      const packetMesh = new THREE.Mesh(packetGeom, packetMat);
      group.add(packetMesh);

      photonPacketsRef.current.push({
        mesh: packetMesh,
        curve,
        t: Math.random(),
        speed: 0.004 + Math.random() * 0.003
      });
    });
  }, [activeLayers.relations, selectedRelationship, selectedCountry]);

  // Update Maritime Trade Routes (Dashed Silver Lines with Luminous Waypoint Vertex Dots)
  useEffect(() => {
    if (!routesGroupRef.current) return;
    const group = routesGroupRef.current;
    
    while (group.children.length > 0) {
      group.remove(group.children[0]);
    }

    if (!activeLayers.maritime && !activeLayers.trade) return;

    MARITIME_ROUTES.forEach(route => {
      const vecPoints = route.points.map(pt => latLngToVector3(pt.lat, pt.lng, GLOBE_RADIUS * 1.003));
      const spline = new THREE.CatmullRomCurve3(vecPoints);
      const samplePoints = spline.getPoints(120);
      const geom = new THREE.BufferGeometry().setFromPoints(samplePoints);

      const mat = new THREE.LineDashedMaterial({
        color: 0xb0b0b0,
        dashSize: 2.2,
        gapSize: 1.6,
        transparent: true,
        opacity: 0.70
      });
      const line = new THREE.Line(geom, mat);
      line.computeLineDistances();
      group.add(line);

      // Waypoint Luminous Vertex Dots (Fine network nodes inspired by reference image)
      const waypointPositions = [];
      vecPoints.forEach(pt => {
        waypointPositions.push(pt.x, pt.y, pt.z);
      });
      const wpGeom = new THREE.BufferGeometry();
      wpGeom.setAttribute('position', new THREE.Float32BufferAttribute(waypointPositions, 3));
      const wpMat = new THREE.PointsMaterial({
        size: 2.2,
        color: 0xffffff,
        transparent: true,
        opacity: 0.90
      });
      const wpPoints = new THREE.Points(wpGeom, wpMat);
      group.add(wpPoints);
    });
  }, [activeLayers.maritime, activeLayers.trade]);

  // Trigger refocus for selected event
  useEffect(() => {
    if (selectedEvent) {
      animateCameraTo(selectedEvent.lat, selectedEvent.lng, 175, 800);
    }
  }, [selectedEvent, animateCameraTo]);

  // Trigger refocus for selected location
  useEffect(() => {
    if (selectedLocation) {
      animateCameraTo(selectedLocation.lat, selectedLocation.lng, 170, 800);
    }
  }, [selectedLocation, animateCameraTo]);

  // Trigger refocus and visual highlighting for selected maritime entity (Ocean, Sea, Chokepoint, Port)
  useEffect(() => {
    if (selectedMaritimeEntity) {
      const coords = selectedMaritimeEntity.center || { 
        lat: selectedMaritimeEntity.lat, 
        lng: selectedMaritimeEntity.lng 
      };
      if (coords && coords.lat !== undefined && coords.lng !== undefined) {
        const zoom = selectedMaritimeEntity.type === 'OCEAN' ? 245 : 
                     selectedMaritimeEntity.type === 'SEA' ? 200 : 170;
        animateCameraTo(coords.lat, coords.lng, zoom, 850);
      }
    }

    if (!oceanConnectedBordersMeshRef.current) return;
    const mesh = oceanConnectedBordersMeshRef.current;
    const { countryLineMap } = geoDatabaseRef.current;

    if (selectedMaritimeEntity && selectedMaritimeEntity.connectedCountries && selectedMaritimeEntity.connectedCountries.length > 0) {
      const connectedPositions = [];
      selectedMaritimeEntity.connectedCountries.forEach(iso3 => {
        const cLines = countryLineMap.get(iso3) || countryLineMap.get(iso3.toUpperCase());
        if (cLines) {
          for (let i = 0; i < cLines.length; i++) {
            connectedPositions.push(cLines[i]);
          }
        }
      });

      if (connectedPositions.length > 0) {
        mesh.geometry.dispose();
        const geom = new THREE.BufferGeometry();
        geom.setAttribute('position', new THREE.Float32BufferAttribute(connectedPositions, 3));
        mesh.geometry = geom;
      } else {
        mesh.geometry.dispose();
        mesh.geometry = new THREE.BufferGeometry();
      }

      // Visually subdue non-connected country borders
      if (bordersMeshRef.current && bordersMeshRef.current.material) {
        bordersMeshRef.current.material.opacity = 0.2;
        bordersMeshRef.current.material.needsUpdate = true;
      }
    } else {
      // Clear secondary ocean highlights and restore normal borders opacity
      mesh.geometry.dispose();
      mesh.geometry = new THREE.BufferGeometry();
      if (bordersMeshRef.current && bordersMeshRef.current.material) {
        bordersMeshRef.current.material.opacity = 0.85;
        bordersMeshRef.current.material.needsUpdate = true;
      }
    }
  }, [selectedMaritimeEntity, animateCameraTo]);
  // Update Globe Visual Display Mode (Bathymetry & Subsea Cables / Conflict Thermals / Topo)
  useEffect(() => {
    if (!subseaCablesGroupRef.current) return;
    const group = subseaCablesGroupRef.current;
    while (group.children.length > 0) {
      const child = group.children[0];
      group.remove(child);
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        if (child.material.map) child.material.map.dispose();
        child.material.dispose();
      }
    }

    if (mapMode === 'bathymetry') {
      // 1. Render Subsea Fiber-Optic Cables as luminous pathways on ocean floor
      SUBSEA_CABLES.forEach(cable => {
        const points = cable.routeCoords.map(([lat, lng]) => latLngToVector3(lat, lng, GLOBE_RADIUS * 1.0025));
        const spline = new THREE.CatmullRomCurve3(points);
        const samplePoints = spline.getPoints(90);
        const geom = new THREE.BufferGeometry().setFromPoints(samplePoints);
        const mat = new THREE.LineDashedMaterial({
          color: 0xffffff,
          dashSize: 2.5,
          gapSize: 1.5,
          transparent: true,
          opacity: 0.90,
          linewidth: 2.0
        });
        const line = new THREE.Line(geom, mat);
        line.computeLineDistances();
        group.add(line);

        // Cable landing point nodes
        cable.routeCoords.forEach(([lat, lng]) => {
          const lp = latLngToVector3(lat, lng, GLOBE_RADIUS * 1.004);
          const nodeGeom = new THREE.SphereGeometry(0.7, 8, 8);
          const nodeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
          const nodeMesh = new THREE.Mesh(nodeGeom, nodeMat);
          nodeMesh.position.copy(lp);
          group.add(nodeMesh);
        });
      });

      // 2. Render Deep Ocean Trenches
      DEEP_OCEAN_TRENCHES.forEach(trench => {
        const tPos = latLngToVector3(trench.lat, trench.lng, GLOBE_RADIUS * 1.003);
        const ringGeom = new THREE.RingGeometry(1.6, 3.4, 16);
        const ringMat = new THREE.MeshBasicMaterial({
          color: 0x888888,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.70
        });
        const ringMesh = new THREE.Mesh(ringGeom, ringMat);
        ringMesh.position.copy(tPos);
        ringMesh.lookAt(tPos.clone().multiplyScalar(1.1));
        group.add(ringMesh);
      });
    } else if (mapMode === 'thermal') {
      // Render NASA FIRMS Satellite Thermal Anomaly Heatmap
      FIRMS_THERMAL_HOTSPOTS.forEach(spot => {
        const sPos = latLngToVector3(spot.lat, spot.lng, GLOBE_RADIUS * 1.008);
        const normal = sPos.clone().normalize();
        
        const coreGeom = new THREE.SphereGeometry(1.2, 12, 12);
        const coreMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const coreMesh = new THREE.Mesh(coreGeom, coreMat);
        coreMesh.position.copy(sPos);
        group.add(coreMesh);

        const haloGeom = new THREE.RingGeometry(1.6, 4.2, 24);
        const haloMat = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.75
        });
        const haloMesh = new THREE.Mesh(haloGeom, haloMat);
        haloMesh.position.copy(sPos.clone().add(normal.clone().multiplyScalar(0.1)));
        haloMesh.lookAt(sPos.clone().add(normal));
        haloMesh.userData = { type: 'pulse_ring', speed: 1.2, phase: Math.random() * Math.PI };
        group.add(haloMesh);
      });
    } else if (mapMode === 'satellite') {
      // Topographical terrain contours
      for (let lat = -60; lat <= 60; lat += 20) {
        const ringPts = [];
        for (let lng = -180; lng <= 180; lng += 10) {
          ringPts.push(latLngToVector3(lat, lng, GLOBE_RADIUS * 1.002));
        }
        const geom = new THREE.BufferGeometry().setFromPoints(ringPts);
        const mat = new THREE.LineBasicMaterial({ color: 0x444444, transparent: true, opacity: 0.35 });
        group.add(new THREE.Line(geom, mat));
      }
    }
  }, [mapMode]);

  // Update 4D Historical Era Boundaries & Empires
  useEffect(() => {
    if (!historicalBordersGroupRef.current) return;
    const group = historicalBordersGroupRef.current;
    while (group.children.length > 0) {
      const child = group.children[0];
      group.remove(child);
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        if (child.material.map) child.material.map.dispose();
        child.material.dispose();
      }
    }

    const eraData = getHistoricalEraData(currentYear);
    const isPresent = String(currentYear).toUpperCase() === 'PRESENT' || currentYear === '2026';

    // Toggle modern borders prominence
    if (bordersMeshRef.current) {
      bordersMeshRef.current.visible = true;
      if (bordersMeshRef.current.material) {
        bordersMeshRef.current.material.opacity = isPresent ? 0.65 : 0.20;
      }
    }

    if (!isPresent && eraData) {
      // 1. Render Era Historical Boundary Segments
      const eraLinePositions = [];
      (eraData.boundarySegments || []).forEach(segment => {
        for (let i = 0; i < segment.length - 1; i++) {
          const pt1 = segment[i];
          const pt2 = segment[i + 1];
          const p1 = latLngToVector3(pt1[0], pt1[1], GLOBE_RADIUS * 1.006);
          const p2 = latLngToVector3(pt2[0], pt2[1], GLOBE_RADIUS * 1.006);
          eraLinePositions.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
        }
      });

      if (eraLinePositions.length > 0) {
        const eraGeom = new THREE.BufferGeometry();
        eraGeom.setAttribute('position', new THREE.Float32BufferAttribute(eraLinePositions, 3));
        const eraMat = new THREE.LineBasicMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0.95,
          linewidth: 2.5
        });
        const eraMesh = new THREE.LineSegments(eraGeom, eraMat);
        group.add(eraMesh);
      }

      // 2. Render Historical Empire Billboards
      (eraData.empires || []).forEach(emp => {
        const sprite = createEmpireBillboardSprite(emp.name, eraData.year);
        const ePos = latLngToVector3(emp.lat, emp.lng, GLOBE_RADIUS * 1.015);
        sprite.position.copy(ePos);
        group.add(sprite);

        // Subsurface anchor beacon
        const beaconGeom = new THREE.SphereGeometry(1.2, 12, 12);
        const beaconMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const beaconMesh = new THREE.Mesh(beaconGeom, beaconMat);
        beaconMesh.position.copy(ePos);
        group.add(beaconMesh);
      });
    } else if (isPresent && eraData) {
      // Render Present Disputed Ceasefires / Lines of Control
      const locPositions = [];
      (eraData.boundarySegments || []).forEach(segment => {
        for (let i = 0; i < segment.length - 1; i++) {
          const pt1 = segment[i];
          const pt2 = segment[i + 1];
          const p1 = latLngToVector3(pt1[0], pt1[1], GLOBE_RADIUS * 1.005);
          const p2 = latLngToVector3(pt2[0], pt2[1], GLOBE_RADIUS * 1.005);
          locPositions.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
        }
      });
      if (locPositions.length > 0) {
        const locGeom = new THREE.BufferGeometry();
        locGeom.setAttribute('position', new THREE.Float32BufferAttribute(locPositions, 3));
        const locMat = new THREE.LineDashedMaterial({
          color: 0xffffff,
          dashSize: 1.5,
          gapSize: 1.0,
          transparent: true,
          opacity: 0.90
        });
        const locMesh = new THREE.LineSegments(locGeom, locMat);
        locMesh.computeLineDistances();
        group.add(locMesh);
      }
    }
  }, [currentYear]);

  // Update Live Kinetic OSINT Sensors (AIS, ADS-B, FIRMS)
  useEffect(() => {
    if (!sensorsGroupRef.current) return;
    const group = sensorsGroupRef.current;
    while (group.children.length > 0) {
      const child = group.children[0];
      group.remove(child);
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        if (child.material.map) child.material.map.dispose();
        child.material.dispose();
      }
    }

    interactiveMarkersRef.current = interactiveMarkersRef.current.filter(m => !m.userData?.type?.startsWith('sensor_'));

    if (activeLayers.sensors === false) return;

    // A. Render AIS Commercial & Naval Vessels
    AIS_VESSELS.forEach(vessel => {
      const vPos = latLngToVector3(vessel.lat, vessel.lng, GLOBE_RADIUS * 1.006);
      const normal = vPos.clone().normalize();

      const hitGeom = new THREE.SphereGeometry(3.0, 10, 10);
      const hitMat = new THREE.MeshBasicMaterial({ visible: false });
      const hitMesh = new THREE.Mesh(hitGeom, hitMat);
      hitMesh.position.copy(vPos);
      hitMesh.userData = { type: 'sensor_ais', data: vessel };
      group.add(hitMesh);
      interactiveMarkersRef.current.push(hitMesh);

      // Ship marker icon (Triangle pointing towards heading)
      const shipGeom = new THREE.ConeGeometry(0.8, 1.8, 3);
      const shipMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const shipMesh = new THREE.Mesh(shipGeom, shipMat);
      shipMesh.position.copy(vPos);
      shipMesh.lookAt(vPos.clone().add(normal));
      shipMesh.rotation.z = (vessel.heading * Math.PI) / 180;
      group.add(shipMesh);

      const sprite = createSensorSprite(vessel.name, `${vessel.speedKts} kts · ${vessel.flag}`, 'ais');
      sprite.position.copy(vPos.clone().add(normal.clone().multiplyScalar(2.2)));
      group.add(sprite);
    });

    // B. Render ADS-B Military Reconnaissance Flights
    ADSB_MILITARY_FLIGHTS.forEach(flight => {
      const fPos = latLngToVector3(flight.lat, flight.lng, GLOBE_RADIUS * 1.018);
      const normal = fPos.clone().normalize();

      const hitGeom = new THREE.SphereGeometry(3.5, 10, 10);
      const hitMat = new THREE.MeshBasicMaterial({ visible: false });
      const hitMesh = new THREE.Mesh(hitGeom, hitMat);
      hitMesh.position.copy(fPos);
      hitMesh.userData = { type: 'sensor_adsb', data: flight };
      group.add(hitMesh);
      interactiveMarkersRef.current.push(hitMesh);

      const planeGeom = new THREE.OctahedronGeometry(1.0, 0);
      const planeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const planeMesh = new THREE.Mesh(planeGeom, planeMat);
      planeMesh.position.copy(fPos);
      group.add(planeMesh);

      const sprite = createSensorSprite(`✈ ${flight.callsign}`, `${flight.altitudeFt.toLocaleString()} FT`, 'adsb');
      sprite.position.copy(fPos.clone().add(normal.clone().multiplyScalar(2.6)));
      group.add(sprite);

      if (flight.flightPath && flight.flightPath.length > 1) {
        const trailPoints = flight.flightPath.map(([lat, lng]) => latLngToVector3(lat, lng, GLOBE_RADIUS * 1.016));
        const spline = new THREE.CatmullRomCurve3(trailPoints);
        const trailGeom = new THREE.BufferGeometry().setFromPoints(spline.getPoints(40));
        const trailMat = new THREE.LineDashedMaterial({
          color: 0x999999,
          dashSize: 1.5,
          gapSize: 1.0,
          transparent: true,
          opacity: 0.65
        });
        const trailLine = new THREE.Line(trailGeom, trailMat);
        trailLine.computeLineDistances();
        group.add(trailLine);
      }
    });

    // C. Render NASA FIRMS Thermal Hotspots
    FIRMS_THERMAL_HOTSPOTS.forEach(hotspot => {
      const hPos = latLngToVector3(hotspot.lat, hotspot.lng, GLOBE_RADIUS * 1.008);
      const normal = hPos.clone().normalize();

      const hitGeom = new THREE.SphereGeometry(3.2, 10, 10);
      const hitMat = new THREE.MeshBasicMaterial({ visible: false });
      const hitMesh = new THREE.Mesh(hitGeom, hitMat);
      hitMesh.position.copy(hPos);
      hitMesh.userData = { type: 'sensor_firms', data: hotspot };
      group.add(hitMesh);
      interactiveMarkersRef.current.push(hitMesh);

      const ringGeom = new THREE.RingGeometry(0.8, 2.2, 16);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.85
      });
      const ringMesh = new THREE.Mesh(ringGeom, ringMat);
      ringMesh.position.copy(hPos.clone().add(normal.clone().multiplyScalar(0.1)));
      ringMesh.lookAt(hPos.clone().add(normal));
      ringMesh.userData = { type: 'pulse_ring', speed: 1.4, phase: Math.random() * Math.PI };
      group.add(ringMesh);
    });
  }, [activeLayers.sensors]);

  // Update Tactical Strategic Flashpoints
  useEffect(() => {
    if (!tacticalFlashpointGroupRef.current) return;
    const group = tacticalFlashpointGroupRef.current;
    while (group.children.length > 0) {
      const child = group.children[0];
      group.remove(child);
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        if (child.material.map) child.material.map.dispose();
        child.material.dispose();
      }
    }

    if (!tacticalFlashpoint) return;

    const fpPos = latLngToVector3(tacticalFlashpoint.lat, tacticalFlashpoint.lng, GLOBE_RADIUS * 1.01);
    const normal = fpPos.clone().normalize();

    animateCameraTo(tacticalFlashpoint.lat, tacticalFlashpoint.lng, tacticalFlashpoint.cameraDist || 155, 900);

    // Concentric Tactical Defense Rings (50km, 100km, 250km)
    [2.5, 5.0, 9.0].forEach((radius, idx) => {
      const ringGeom = new THREE.RingGeometry(radius - 0.2, radius, 36);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.85 - idx * 0.25
      });
      const ringMesh = new THREE.Mesh(ringGeom, ringMat);
      ringMesh.position.copy(fpPos.clone().add(normal.clone().multiplyScalar(0.1 + idx * 0.05)));
      ringMesh.lookAt(fpPos.clone().add(normal));
      group.add(ringMesh);
    });

    const crosshairGeom = new THREE.BufferGeometry();
    const crossPts = [];
    [-6, 6].forEach(offset => {
      crossPts.push(-offset, 0, 0, offset, 0, 0);
      crossPts.push(0, -offset, 0, 0, offset, 0);
    });
    crosshairGeom.setAttribute('position', new THREE.Float32BufferAttribute(crossPts, 3));
    const crosshairMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.75 });
    const crosshairMesh = new THREE.LineSegments(crosshairGeom, crosshairMat);
    crosshairMesh.position.copy(fpPos);
    crosshairMesh.lookAt(fpPos.clone().add(normal));
    group.add(crosshairMesh);

    const sprite = createClusterBillboardSprite(tacticalFlashpoint.name, tacticalFlashpoint.defconLevel.split(' ')[0], true);
    sprite.position.copy(fpPos.clone().add(normal.clone().multiplyScalar(3.8)));
    group.add(sprite);
  }, [tacticalFlashpoint, animateCameraTo]);

  // Update Wargaming Diverted SLOC Arcs
  useEffect(() => {
    if (!wargameGroupRef.current) return;
    const group = wargameGroupRef.current;
    while (group.children.length > 0) {
      const child = group.children[0];
      group.remove(child);
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        if (child.material.map) child.material.map.dispose();
        child.material.dispose();
      }
    }

    if (!activeScenario) return;

    if (activeScenario.focusCoords) {
      animateCameraTo(activeScenario.focusCoords.lat, activeScenario.focusCoords.lng, activeScenario.focusCoords.zoomDist || 175, 850);
    }

    (activeScenario.reroutedRoutes || []).forEach(route => {
      const p1 = latLngToVector3(route.fromCoords[0], route.fromCoords[1], GLOBE_RADIUS * 1.004);
      const p2 = latLngToVector3(route.toCoords[0], route.toCoords[1], GLOBE_RADIUS * 1.004);

      const mid = p1.clone().add(p2).multiplyScalar(0.5);
      const midNormal = mid.clone().normalize();
      const dist = p1.distanceTo(p2);
      const control = midNormal.multiplyScalar(GLOBE_RADIUS + Math.max(dist * 0.28, 14));

      const curve = new THREE.QuadraticBezierCurve3(p1, control, p2);
      const curveGeom = new THREE.BufferGeometry().setFromPoints(curve.getPoints(60));
      const curveMat = new THREE.LineDashedMaterial({
        color: 0xffffff,
        dashSize: 2.2,
        gapSize: 1.5,
        transparent: true,
        opacity: 0.95,
        linewidth: 2.0
      });
      const arc = new THREE.Line(curveGeom, curveMat);
      arc.computeLineDistances();
      group.add(arc);

      const apex = curve.getPoint(0.5);
      const detourSprite = createSensorSprite(`DIVERSION: +${route.addedDays} DAYS`, route.bypassedChokepoint, 'firms');
      detourSprite.position.copy(apex.clone().add(apex.clone().normalize().multiplyScalar(2.0)));
      group.add(detourSprite);
    });
  }, [activeScenario, animateCameraTo]);

  // Selected region zoom trigger
  useEffect(() => {
    if (selectedRegion && selectedRegion.center) {
      const zoomDist = 280 / (selectedRegion.zoom || 1.5);
      animateCameraTo(selectedRegion.center.lat, selectedRegion.center.lng, zoomDist, 1000);
    }
  }, [selectedRegion, animateCameraTo]);

  // Global Reset Globe Trigger
  useEffect(() => {
    if (resetGlobeTrigger) {
      if (cameraRef.current && controlsRef.current) {
        animateCameraTo(20, 0, 290, 800);
        isRotatingRef.current = true;
      }
    }
  }, [resetGlobeTrigger, animateCameraTo]);

  // Direct Geographic Picking with 1200ms Hover Dwell Delay & Instant Subtle Border Feedback
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // Configurable dwell delay defaulting to 1200ms (prevents distracting tooltip flashes while exploring)
    const HOVER_DWELL_MS = Number(hoverDelay) || 1200;

    let hoverTimer = null;
    let pendingTargetKey = null;
    let pendingPayload = null;
    let currentActiveKey = null;

    let isPointerDown = false;
    let isDragging = false;
    let dragStartPos = { x: 0, y: 0 };

    const clearHoverState = () => {
      currentActiveKey = null;
      if (currentHoveredCountryRef.current !== null) {
        currentHoveredCountryRef.current = null;
        if (hoverBordersMeshRef.current) {
          hoverBordersMeshRef.current.geometry.dispose();
          hoverBordersMeshRef.current.geometry = new THREE.BufferGeometry();
        }
      }
      if (onHoverChange) onHoverChange(null);
    };

    const commitCountryHover = (payload) => {
      if (!payload || !payload.countryItem) return;
      const { countryItem, lat, lng, x, y } = payload;

      // If this country is already selected, suppress the hover tooltip
      if (selectedCountryRef.current?.id === countryItem.iso3) {
        return;
      }

      currentActiveKey = `country_${countryItem.iso3}`;

      // Dispatch onHoverChange with rich country data
      const dossier = COUNTRY_DOSSIERS[countryItem.iso3] || 
        COUNTRIES.find(c => c.id === countryItem.iso3 || c.name === countryItem.name);

      if (onHoverChange) {
        onHoverChange({
          type: 'country',
          data: {
            id: countryItem.iso3,
            name: countryItem.name,
            officialName: countryItem.feature.properties.NAME_LONG || countryItem.feature.properties.NAME,
            region: countryItem.feature.properties.SUBREGION || countryItem.feature.properties.CONTINENT || 'Global',
            capital: dossier?.capital || 'National Capital',
            flag: dossier?.flag || '🌐',
            tagline: dossier?.tagline || dossier?.overview?.beginner || 'Sovereign Geographic Entity',
            lat,
            lng
          },
          x,
          y
        });
      }
    };

    const commitMaritimeHover = (payload) => {
      if (!payload || !payload.maritimeEntity) return;
      const { maritimeEntity, lat, lng, x, y } = payload;
      currentActiveKey = `maritime_${maritimeEntity.id}`;

      if (onHoverChange) {
        onHoverChange({
          type: 'maritime',
          data: {
            id: maritimeEntity.id,
            name: maritimeEntity.name,
            type: maritimeEntity.type,
            category: maritimeEntity.type === 'OCEAN' ? 'Ocean Basin' : 'Marginal Sea',
            symbol: maritimeEntity.symbol || '🌊',
            tagline: maritimeEntity.overview?.beginner || 'Strategic Maritime Waterway',
            lat,
            lng
          },
          x,
          y
        });
      }
    };

    const commitMarkerHover = (payload) => {
      if (!payload || !payload.item) return;
      const { item, x, y } = payload;
      currentActiveKey = payload.targetKey;

      if (!onHoverChange) return;

      if (item.type === 'capital') {
        onHoverChange({
          type: 'capital',
          data: {
            name: `● ${item.data.capital}`,
            country: item.data.country,
            tagline: item.data.role
          },
          x,
          y
        });
      } else if (item.type === 'maritime_marker') {
        onHoverChange({
          type: 'maritime',
          data: {
            id: item.maritimeEntity.id,
            name: item.maritimeEntity.name,
            type: item.maritimeEntity.type,
            category: item.marker.markerCategory === 'port' ? 'Strategic Seaport' : 'Maritime Chokepoint',
            symbol: item.marker.symbol || '◆',
            tagline: item.maritimeEntity.overview?.beginner || 'Strategic Maritime Entity'
          },
          x,
          y
        });
      } else if (item.type === 'cluster') {
        onHoverChange({
          type: 'cluster',
          data: item.cluster,
          x,
          y
        });
      } else if (item.type?.startsWith('sensor_')) {
        onHoverChange({
          type: 'sensor',
          data: item.data,
          x,
          y
        });
      } else {
        onHoverChange({
          type: item.type,
          data: item.event || item.location,
          x,
          y
        });
      }
    };

    const handlePointerDown = (e) => {
      isPointerDown = true;
      isDragging = false;
      dragStartPos = { x: e.clientX, y: e.clientY };

      if (hoverTimer) {
        clearTimeout(hoverTimer);
        hoverTimer = null;
      }
      pendingTargetKey = null;
      pendingPayload = null;
    };

    const handlePointerMove = (e) => {
      // Check if user is actively dragging / orbiting the globe
      if (isPointerDown || e.buttons > 0) {
        const dist = Math.hypot(e.clientX - dragStartPos.x, e.clientY - dragStartPos.y);
        if (dist > 5) {
          isDragging = true;
        }
      }

      if (isDragging) {
        if (hoverTimer) {
          clearTimeout(hoverTimer);
          hoverTimer = null;
        }
        pendingTargetKey = null;
        pendingPayload = null;
        clearHoverState();
        container.style.cursor = 'grabbing';
        return;
      }

      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      if (!cameraRef.current || !globeGroupRef.current || !earthMeshRef.current) return;
      raycaster.setFromCamera(mouse, cameraRef.current);

      // 1. Raycast Interactive Markers (capitals, sensors, maritime markers, clusters, events)
      if (interactiveMarkersRef.current.length > 0) {
        const markerHits = raycaster.intersectObjects(interactiveMarkersRef.current, false);
        if (markerHits.length > 0) {
          // Clear country border highlight if moving over marker
          if (currentHoveredCountryRef.current !== null) {
            currentHoveredCountryRef.current = null;
            if (hoverBordersMeshRef.current) {
              hoverBordersMeshRef.current.geometry.dispose();
              hoverBordersMeshRef.current.geometry = new THREE.BufferGeometry();
            }
          }

          const hitObj = markerHits[0].object;
          const item = hitObj.userData;
          const targetKey = `marker_${item.type}_${item.data?.id || item.event?.id || item.location?.id || hitObj.id}`;
          container.style.cursor = 'pointer';

          if (currentActiveKey === targetKey) {
            // Already active: smoothly update tooltip coordinates without re-triggering
            if (onHoverChange) {
              onHoverChange(prev => prev ? { ...prev, x: e.clientX, y: e.clientY } : null);
            }
            return;
          }

          if (pendingTargetKey === targetKey) {
            // Dwell timer in progress: update coordinates
            pendingPayload = { targetKey, item, x: e.clientX, y: e.clientY };
            return;
          }

          // New marker target: clear old tooltip immediately and start 1.2s dwell timer
          if (currentActiveKey !== null) {
            currentActiveKey = null;
            if (onHoverChange) onHoverChange(null);
          }
          if (hoverTimer) clearTimeout(hoverTimer);
          pendingTargetKey = targetKey;
          pendingPayload = { targetKey, item, x: e.clientX, y: e.clientY };
          hoverTimer = setTimeout(() => {
            commitMarkerHover(pendingPayload);
          }, HOVER_DWELL_MS);
          return;
        }
      }

      // 2. Raycast Earth Surface (Countries & Oceans)
      const earthHits = raycaster.intersectObject(earthMeshRef.current, false);
      if (earthHits.length > 0) {
        const hit = earthHits[0];
        const localPoint = globeGroupRef.current.worldToLocal(hit.point.clone());
        const { lat, lng } = vector3ToLatLng(localPoint);

        // A. Find Country via point-in-polygon
        const countryItem = findCountryAt(lat, lng);
        if (countryItem) {
          const targetKey = `country_${countryItem.iso3}`;
          container.style.cursor = 'pointer';

          // Immediate subtle country border highlight for instant geographic orientation
          if (currentHoveredCountryRef.current !== countryItem.iso3) {
            currentHoveredCountryRef.current = countryItem.iso3;
            const lines = geoDatabaseRef.current.countryLineMap.get(countryItem.iso3);
            if (lines && hoverBordersMeshRef.current) {
              hoverBordersMeshRef.current.geometry.dispose();
              const hGeom = new THREE.BufferGeometry();
              hGeom.setAttribute('position', new THREE.BufferAttribute(lines, 3));
              hoverBordersMeshRef.current.geometry = hGeom;
            }
          }

          // If the country is already selected, suppress the hover tooltip completely
          if (selectedCountryRef.current?.id === countryItem.iso3) {
            if (hoverTimer) {
              clearTimeout(hoverTimer);
              hoverTimer = null;
            }
            pendingTargetKey = null;
            pendingPayload = null;
            if (currentActiveKey !== null) {
              currentActiveKey = null;
              if (onHoverChange) onHoverChange(null);
            }
            return;
          }

          if (currentActiveKey === targetKey) {
            // Country already actively hovered: smoothly track tooltip coordinates
            if (onHoverChange) {
              onHoverChange(prev => prev ? { ...prev, x: e.clientX, y: e.clientY } : null);
            }
            return;
          }

          if (pendingTargetKey === targetKey) {
            // Dwell timer currently ticking for this country: update coordinates
            pendingPayload = { countryItem, lat, lng, x: e.clientX, y: e.clientY };
            return;
          }

          // Entering a new country: clear previously shown tooltip immediately and start fresh 1.2s timer
          if (currentActiveKey !== null) {
            currentActiveKey = null;
            if (onHoverChange) onHoverChange(null);
          }
          if (hoverTimer) clearTimeout(hoverTimer);
          pendingTargetKey = targetKey;
          pendingPayload = { countryItem, lat, lng, x: e.clientX, y: e.clientY };
          hoverTimer = setTimeout(() => {
            commitCountryHover(pendingPayload);
          }, HOVER_DWELL_MS);
          return;
        }

        // B. Find Maritime Entity (Oceans & Marginal Seas)
        const maritimeEntity = findMaritimeEntityAtCoordinates(lat, lng);
        if (maritimeEntity) {
          const targetKey = `maritime_${maritimeEntity.id}`;
          container.style.cursor = 'pointer';

          // Clear country border highlight when moving over water
          if (currentHoveredCountryRef.current !== null) {
            currentHoveredCountryRef.current = null;
            if (hoverBordersMeshRef.current) {
              hoverBordersMeshRef.current.geometry.dispose();
              hoverBordersMeshRef.current.geometry = new THREE.BufferGeometry();
            }
          }

          if (currentActiveKey === targetKey) {
            if (onHoverChange) {
              onHoverChange(prev => prev ? { ...prev, x: e.clientX, y: e.clientY } : null);
            }
            return;
          }

          if (pendingTargetKey === targetKey) {
            pendingPayload = { maritimeEntity, lat, lng, x: e.clientX, y: e.clientY };
            return;
          }

          // Entering new maritime entity: clear old tooltip immediately and start fresh 1.2s timer
          if (currentActiveKey !== null) {
            currentActiveKey = null;
            if (onHoverChange) onHoverChange(null);
          }
          if (hoverTimer) clearTimeout(hoverTimer);
          pendingTargetKey = targetKey;
          pendingPayload = { maritimeEntity, lat, lng, x: e.clientX, y: e.clientY };
          hoverTimer = setTimeout(() => {
            commitMaritimeHover(pendingPayload);
          }, HOVER_DWELL_MS);
          return;
        }
      }

      // 3. Pointer is over empty ocean or cosmic background
      container.style.cursor = 'grab';
      if (hoverTimer) {
        clearTimeout(hoverTimer);
        hoverTimer = null;
      }
      pendingTargetKey = null;
      pendingPayload = null;
      clearHoverState();
    };

    const handlePointerUp = () => {
      isPointerDown = false;
      setTimeout(() => {
        isDragging = false;
      }, 60);
      container.style.cursor = 'grab';
    };

    const handlePointerLeave = () => {
      isPointerDown = false;
      isDragging = false;
      if (hoverTimer) {
        clearTimeout(hoverTimer);
        hoverTimer = null;
      }
      pendingTargetKey = null;
      pendingPayload = null;
      clearHoverState();
      container.style.cursor = 'grab';
    };

    const handleClick = (e) => {
      // If releasing from an orbit/pan drag gesture, ignore click
      if (isDragging) return;

      // Cancel hover dwell timer and hide hover tooltip immediately upon clicking
      if (hoverTimer) {
        clearTimeout(hoverTimer);
        hoverTimer = null;
      }
      pendingTargetKey = null;
      pendingPayload = null;
      currentActiveKey = null;
      if (onHoverChange) onHoverChange(null);

      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      if (!cameraRef.current || !globeGroupRef.current || !earthMeshRef.current) return;
      raycaster.setFromCamera(mouse, cameraRef.current);

      if (onUserInteraction) onUserInteraction();

      // 1. Check direct marker hits first (instant click selection)
      if (interactiveMarkersRef.current.length > 0) {
        const markerHits = raycaster.intersectObjects(interactiveMarkersRef.current, false);
        if (markerHits.length > 0) {
          const item = markerHits[0].object.userData;
          isRotatingRef.current = false;
          if (item.type === 'cluster') {
            animateCameraTo(item.cluster.lat, item.cluster.lng, 170, 800);
            return;
          } else if (item.type === 'capital' && onCapitalSelect) {
            onCapitalSelect(item.data);
            return;
          } else if (item.type === 'maritime_marker' && onSelectMaritimeEntity) {
            onSelectMaritimeEntity(item.maritimeEntity);
            return;
          } else if (item.type === 'event' && onEventSelect) {
            onEventSelect(item.event);
            return;
          } else if (item.type === 'location' && onLocationSelect) {
            onLocationSelect(item.location);
            return;
          } else if (item.type?.startsWith('sensor_') && onSensorSelect) {
            onSensorSelect(item.data);
            return;
          }
        }
      }

      // 2. Direct Geographic Country Picking via Earth Sphere (instant click selection)
      const earthHits = raycaster.intersectObject(earthMeshRef.current, false);
      if (earthHits.length > 0) {
        const hit = earthHits[0];
        const localPoint = globeGroupRef.current.worldToLocal(hit.point.clone());
        const { lat, lng } = vector3ToLatLng(localPoint);

        const countryItem = findCountryAt(lat, lng);
        if (countryItem && onCountrySelect) {
          isRotatingRef.current = false;

          const iso3 = countryItem.iso3;
          const fallbackData = {
            id: iso3,
            name: countryItem.name,
            officialName: countryItem.feature.properties.NAME_LONG || countryItem.feature.properties.NAME,
            region: countryItem.feature.properties.SUBREGION || countryItem.feature.properties.CONTINENT || 'Global',
            subregion: countryItem.feature.properties.SUBREGION,
            lat: countryItem.center.lat,
            lng: countryItem.center.lng
          };
          const countryPayload = getCountryDossier(iso3, fallbackData);

          onCountrySelect(countryPayload);
          return;
        }

        // 3. Open Water Picking: Select Ocean or Marginal Sea
        const maritimeEntity = findMaritimeEntityAtCoordinates(lat, lng);
        if (maritimeEntity && onSelectMaritimeEntity) {
          isRotatingRef.current = false;
          onSelectMaritimeEntity(maritimeEntity);
          return;
        }
      }
    };

    container.addEventListener('pointerdown', handlePointerDown);
    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerup', handlePointerUp);
    container.addEventListener('pointerleave', handlePointerLeave);
    container.addEventListener('click', handleClick);

    return () => {
      if (hoverTimer) clearTimeout(hoverTimer);
      container.removeEventListener('pointerdown', handlePointerDown);
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerup', handlePointerUp);
      container.removeEventListener('pointerleave', handlePointerLeave);
      container.removeEventListener('click', handleClick);
    };
  }, [findCountryAt, hoverDelay, onCountrySelect, onEventSelect, onLocationSelect, onSelectMaritimeEntity, onCapitalSelect, onSensorSelect, onHoverChange, onUserInteraction]);

  // Dismiss hover tooltip if selected country changes or opens
  useEffect(() => {
    if (selectedCountry && onHoverChange) {
      onHoverChange(null);
    }
  }, [selectedCountry, onHoverChange]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full overflow-hidden bg-[#05070B] cursor-grab active:cursor-grabbing"
    />
  );
}
