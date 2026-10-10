// ============================================================================
// GEOINTEL — LIVE KINETIC OSINT SENSOR OVERLAYS (AIS, ADS-B, NASA FIRMS)
// Real-world telemetry for commercial maritime vessels, military reconnaissance
// flights, and satellite-detected thermal / kinetic strike anomalies.
// ============================================================================

export const SENSOR_TYPES = {
  AIS_SHIP: 'AIS_SHIP',
  ADSB_FLIGHT: 'ADSB_FLIGHT',
  FIRMS_THERMAL: 'FIRMS_THERMAL'
};

// 1. AIS COMMERCIAL & NAVAL VESSELS
export const AIS_VESSELS = [
  // Taiwan Strait & East Asia
  {
    id: 'AIS-9318113',
    mmsi: '413289000',
    name: 'COSCO SHIPPING SCORPIO',
    type: 'Ultra Large Container Vessel (20,119 TEU)',
    flag: 'Hong Kong [HK]',
    lat: 24.35,
    lng: 119.82,
    speedKts: 18.4,
    heading: 215,
    destination: 'Rotterdam via Singapore',
    status: 'Underway Using Engine',
    threatRisk: 'High (Taiwan Strait Median Vicinity)',
    theater: 'Taiwan Strait'
  },
  {
    id: 'AIS-9744659',
    mmsi: '219018698',
    name: 'MAERSK MC-KINNEY MOLLER',
    type: 'Container Ship (18,270 TEU)',
    flag: 'Denmark [DK]',
    lat: 22.85,
    lng: 120.15,
    speedKts: 17.1,
    heading: 42,
    destination: 'Kaohsiung Harbor',
    status: 'Underway Using Engine',
    threatRisk: 'Elevated (Approaching Kaohsiung Quarantine Sector)',
    theater: 'Taiwan Strait'
  },
  {
    id: 'AIS-9412157',
    mmsi: '477682900',
    name: 'TI OCEANIA',
    type: 'Ultra Large Crude Carrier (ULCC, 441,585 DWT)',
    flag: 'Marshall Islands [MH]',
    lat: 21.40,
    lng: 121.10,
    speedKts: 14.2,
    heading: 38,
    destination: 'Qingdao Oil Terminal',
    status: 'Underway Using Engine',
    threatRisk: 'Monitored (Luzon Strait Deepwater Corridor)',
    theater: 'Taiwan Strait / Luzon'
  },

  // Strait of Hormuz & Persian Gulf
  {
    id: 'AIS-9388338',
    mmsi: '636015509',
    name: 'PACIFIC RUBY',
    type: 'Very Large Crude Carrier (VLCC, 305,000 DWT)',
    flag: 'Liberia [LR]',
    lat: 26.35,
    lng: 56.42,
    speedKts: 13.6,
    heading: 145,
    destination: 'Jamnagar Port, India',
    status: 'Underway Using Engine',
    threatRisk: 'Critical (Hormuz Outbound Lane / IRGC Speedboat Radar Area)',
    theater: 'Strait of Hormuz'
  },
  {
    id: 'AIS-9821433',
    mmsi: '538008891',
    name: 'AL GHARIYA',
    type: 'Q-Flex LNG Carrier (216,200 m³)',
    flag: 'Qatar [QA]',
    lat: 26.62,
    lng: 56.18,
    speedKts: 16.8,
    heading: 130,
    destination: 'Incheon LNG Terminal',
    status: 'Underway Using Engine',
    threatRisk: 'Critical (Navigating Chokepoint Apex)',
    theater: 'Strait of Hormuz'
  },
  {
    id: 'AIS-4318720',
    mmsi: '311000845',
    name: 'STENA IMPERATIVE',
    type: 'Chemical/Oil Products Tanker (49,700 DWT)',
    flag: 'Bahamas [BS]',
    lat: 25.85,
    lng: 55.45,
    speedKts: 12.1,
    heading: 310,
    destination: 'Jebel Ali, UAE',
    status: 'Underway Using Engine',
    threatRisk: 'Elevated (Approaching Tunb Islands disputed zone)',
    theater: 'Strait of Hormuz'
  },

  // Bab el-Mandeb & Red Sea
  {
    id: 'AIS-9708497',
    mmsi: '353139000',
    name: 'MSC OSCAR',
    type: 'Container Ship (19,224 TEU)',
    flag: 'Panama [PA]',
    lat: 12.55,
    lng: 43.45,
    speedKts: 19.8,
    heading: 330,
    destination: 'Bypassing to Cape of Good Hope',
    status: 'High Speed Evasive Transit',
    threatRisk: 'EXTREME (Houthi Anti-Ship Missile Arc / 22nm off Perim Island)',
    theater: 'Bab el-Mandeb'
  },
  {
    id: 'AIS-9632064',
    mmsi: '229921000',
    name: 'MARAN GAS APOLLONIA',
    type: 'LNG Carrier (161,870 m³)',
    flag: 'Malta [MT]',
    lat: 13.12,
    lng: 43.10,
    speedKts: 18.5,
    heading: 345,
    destination: 'Suez Northern Transit (Escorted)',
    status: 'Underway with US Navy / Combined Maritime Forces Escort',
    threatRisk: 'EXTREME (Active ASBM & Drone Threat Sector)',
    theater: 'Bab el-Mandeb'
  },
  {
    id: 'AIS-NAV-DDG51',
    mmsi: '369970110',
    name: 'USS LABOON (DDG-58)',
    type: 'Arleigh Burke-class Guided Missile Destroyer (Flight I)',
    flag: 'United States Navy [US]',
    lat: 12.80,
    lng: 43.60,
    speedKts: 22.0,
    heading: 160,
    destination: 'Operation Prosperity Guardian Air-Defense Patrol',
    status: 'Active Surface / Air Combat Patrol',
    threatRisk: 'Combat Active (Engaging Houthi USV & ASBM Threats)',
    theater: 'Bab el-Mandeb'
  },
  {
    id: 'AIS-NAV-D66',
    mmsi: '419000166',
    name: 'INS VISAKHAPATNAM (D66)',
    type: 'Stealth Guided Missile Destroyer (Project 15B)',
    flag: 'Indian Navy [IN]',
    lat: 12.20,
    lng: 44.80,
    speedKts: 20.5,
    heading: 260,
    destination: 'Gulf of Aden Merchant Escort & Firefighting Support',
    status: 'Active Anti-Piracy / Humanitarian Escort',
    threatRisk: 'Operational Patrol (Indian Ocean Task Group)',
    theater: 'Bab el-Mandeb / Gulf of Aden'
  },

  // Malacca & Singapore Strait
  {
    id: 'AIS-9725847',
    mmsi: '374823000',
    name: 'EVER GOLDEN',
    type: 'Golden-class Container Ship (20,124 TEU)',
    flag: 'Panama [PA]',
    lat: 1.22,
    lng: 103.85,
    speedKts: 11.2,
    heading: 95,
    destination: 'Port of Singapore Berth',
    status: 'Constrained by Draught',
    threatRisk: 'Moderate (Chokepoint Congestion)',
    theater: 'Strait of Malacca'
  },
  {
    id: 'AIS-9337444',
    mmsi: '538002677',
    name: 'NEW HORIZON',
    type: 'Crude Oil Tanker (297,900 DWT)',
    flag: 'Marshall Islands [MH]',
    lat: 2.30,
    lng: 102.10,
    speedKts: 13.9,
    heading: 125,
    destination: 'Zhoushan Port',
    status: 'Underway Using Engine',
    threatRisk: 'Low (Deepwater Malacca Channel)',
    theater: 'Strait of Malacca'
  }
];

// 2. ADS-B MILITARY RECONNAISSANCE & ISR FLIGHTS
export const ADSB_MILITARY_FLIGHTS = [
  {
    id: 'ADSB-AE5422',
    hex: 'AE5422',
    callsign: 'FORTE10',
    aircraftType: 'Northrop Grumman RQ-4B Global Hawk (HALE ISR UAV)',
    operator: 'US Air Force (9th Reconnaissance Wing)',
    altitudeFt: 54200,
    speedKts: 335,
    squawk: '7611',
    lat: 44.15,
    lng: 31.80,
    heading: 85,
    theater: 'Black Sea / Crimean Coast',
    mission: 'High-Altitude Strategic Synthetic Aperture Radar (SAR) & SIGINT monitoring of Sevastopol and Black Sea Fleet',
    threatContext: 'Russian Su-27 interception hazard zone; operating strictly in international airspace outside territorial waters',
    flightPath: [
      [37.4, 14.9], // Sigonella, Sicily
      [40.2, 22.5],
      [44.0, 29.5],
      [44.15, 31.80]
    ]
  },
  {
    id: 'ADSB-AE01D5',
    hex: 'AE01D5',
    callsign: 'HOMER49',
    aircraftType: 'Boeing RC-135V Rivet Joint (SIGINT / ELINT Platform)',
    operator: 'US Air Force (55th Wing, RAF Mildenhall forward deployed)',
    altitudeFt: 31000,
    speedKts: 420,
    squawk: '4225',
    lat: 54.95,
    lng: 21.80,
    heading: 60,
    theater: 'Baltic Sea / Suwałki Gap / Kaliningrad Frontier',
    mission: 'Electronic Intelligence intercept of Russian S-400 radar emissions, Iskander-M telemetry, and Baltic Fleet comms',
    threatContext: 'Suwałki corridor electromagnetic monitoring; continuous orbit between Poland and Baltic states',
    flightPath: [
      [52.3, 0.5], // UK
      [54.2, 14.5],
      [54.8, 19.2],
      [54.95, 21.80]
    ]
  },
  {
    id: 'ADSB-AE07CF',
    hex: 'AE07CF',
    callsign: 'COBRA55',
    aircraftType: 'Boeing RC-135S Cobra Ball (Ballistic Missile Telemetry ISR)',
    operator: 'US Air Force (Offutt AFB / Kadena deployment)',
    altitudeFt: 33500,
    speedKts: 440,
    squawk: '1420',
    lat: 38.60,
    lng: 133.40,
    heading: 190,
    theater: 'Sea of Japan / East Sea',
    mission: 'Optical and infrared tracking of North Korean Hwasong intercontinental ballistic missile staging and re-entry vehicles',
    threatContext: 'High-alert posture following DPRK solid-fuel IRBM launch preparation telemetry',
    flightPath: [
      [26.3, 127.7], // Kadena
      [33.5, 131.0],
      [38.60, 133.40]
    ]
  },
  {
    id: 'ADSB-AE6812',
    hex: 'AE6812',
    callsign: 'VIPER11',
    aircraftType: 'Boeing P-8A Poseidon (Multimission Maritime Patrol & ASW)',
    operator: 'US Navy (VP-45 "Pelicans")',
    altitudeFt: 22000,
    speedKts: 380,
    squawk: '5214',
    lat: 23.40,
    lng: 119.20,
    heading: 210,
    theater: 'Taiwan Strait / Penghu Islands',
    mission: 'Subsurface acoustic monitoring and surface search across Taiwan Strait median line and Bashi Channel chokepoint',
    threatContext: 'PRC Eastern Theater Command J-16 fighter escort challenges; radar warning receiver activity',
    flightPath: [
      [15.3, 119.8], // Clark/Subic
      [20.5, 120.8],
      [23.40, 119.20]
    ]
  },
  {
    id: 'ADSB-NATO01',
    hex: '4D03C6',
    callsign: 'MAGIC01',
    aircraftType: 'Boeing E-3A Sentry (NATO Airborne Early Warning & Control)',
    operator: 'NATO Airborne Early Warning Force (Geilenkirchen)',
    altitudeFt: 30500,
    speedKts: 360,
    squawk: '2101',
    lat: 53.60,
    lng: 23.20,
    heading: 340,
    theater: 'Eastern Poland / Belarus Border Corridor',
    mission: 'Deep look-down radar surveillance of Belarusian airspace and western military district tactical air movements',
    threatContext: 'Providing real-time datalink air picture to Polish F-35/F-16 squadrons and NATO Patriot air-defense batteries',
    flightPath: [
      [50.9, 6.0], // Geilenkirchen
      [52.4, 16.9],
      [53.60, 23.20]
    ]
  },
  {
    id: 'ADSB-AE5C82',
    hex: 'AE5C82',
    callsign: 'TRITON02',
    aircraftType: 'Northrop Grumman MQ-4C Triton (Maritime BAMS UAV)',
    operator: 'US Navy (VUP-19)',
    altitudeFt: 51200,
    speedKts: 320,
    squawk: '4412',
    lat: 25.10,
    lng: 57.20,
    heading: 315,
    theater: 'Gulf of Oman / Approaches to Hormuz',
    mission: 'High-altitude multi-sensor maritime surveillance of Iranian coastal fast-boat bases and naval mine-laying auxiliaries',
    threatContext: 'Khordad-15 / Sayyad SAM envelope proximity; unblinking 24-hour persistent intelligence orbit',
    flightPath: [
      [25.3, 51.5], // Al Udeid
      [24.5, 56.5],
      [25.10, 57.20]
    ]
  }
];

// 3. NASA FIRMS THERMAL SATELLITE ANOMALIES (KINETIC STRIKE & FIRE HOTSPOTS)
export const FIRMS_THERMAL_HOTSPOTS = [
  // Ukraine Front Line
  {
    id: 'FIRMS-UA-ZAP',
    theater: 'Zaporizhzhia Tactical Axis, Ukraine',
    lat: 47.45,
    lng: 35.85,
    brightnessK: 368.4,
    confidence: '95% (High)',
    satellite: 'Suomi-NPP VIIRS (375m I-band)',
    detectionTime: 'Recent Overpass (T-1.4h)',
    anomalyType: 'Heavy Artillery & Grad Rocket Detonation Thermal Signature',
    notes: 'Active contact line thermal cluster along fortified trench networks and counter-battery fire sectors.'
  },
  {
    id: 'FIRMS-UA-AVD',
    theater: 'Donbas Pokrovsk Front, Ukraine',
    lat: 48.22,
    lng: 37.38,
    brightnessK: 382.1,
    confidence: '98% (High)',
    satellite: 'NOAA-20 VIIRS',
    detectionTime: 'Recent Overpass (T-0.8h)',
    anomalyType: 'Glide Bomb (FAB-1500) & Ammunition Depot Thermal Burn',
    notes: 'Intense industrial district thermal bloom consistent with high-explosive munition impacts.'
  },
  {
    id: 'FIRMS-UA-KUP',
    theater: 'Kupyansk Sector, Kharkiv Oblast',
    lat: 49.71,
    lng: 37.64,
    brightnessK: 352.0,
    confidence: '91% (High)',
    satellite: 'Aqua MODIS (1km band)',
    detectionTime: 'Recent Overpass (T-2.8h)',
    anomalyType: 'Artillery Duel & Forest Fire Breakout',
    notes: 'Multiple contiguous thermal pixels along Oskil river crossing points.'
  },

  // Red Sea & Yemen Coast
  {
    id: 'FIRMS-YE-HOD',
    theater: 'Hodeidah Coastal Port Axis, Yemen',
    lat: 14.81,
    lng: 42.96,
    brightnessK: 374.8,
    confidence: '94% (High)',
    satellite: 'Suomi-NPP VIIRS',
    detectionTime: 'Recent Overpass (T-2.1h)',
    anomalyType: 'Fuel Storage & Radar Site Kinetic Impact Fire',
    notes: 'Coincides with coalition precision strike on coastal radar and fuel bunkering tanks.'
  },
  {
    id: 'FIRMS-YE-SAN',
    theater: 'Sanaa Mountain Missile Storage, Yemen',
    lat: 15.36,
    lng: 44.20,
    brightnessK: 361.2,
    confidence: '89% (High)',
    satellite: 'NOAA-20 VIIRS',
    detectionTime: 'Recent Overpass (T-3.5h)',
    anomalyType: 'Underground Munitions Facility Secondary Cook-off',
    notes: 'High-temperature thermal pulse in Jabal Nuqum mountain storage complex.'
  },

  // Levant & South Lebanon
  {
    id: 'FIRMS-LB-KHY',
    theater: 'South Lebanon Border / Khiam Sector',
    lat: 33.32,
    lng: 35.58,
    brightnessK: 359.5,
    confidence: '92% (High)',
    satellite: 'Suomi-NPP VIIRS',
    detectionTime: 'Recent Overpass (T-1.1h)',
    anomalyType: 'Airstrike & Rocket Launch Site Thermal Signature',
    notes: 'Tactical ridge thermal anomalies following anti-tank missile and counter-battery exchanges.'
  },
  {
    id: 'FIRMS-SY-DAM',
    theater: 'Damascus Perimeter / Mezzeh, Syria',
    lat: 33.48,
    lng: 36.22,
    brightnessK: 366.0,
    confidence: '93% (High)',
    satellite: 'Terra MODIS',
    detectionTime: 'Recent Overpass (T-4.2h)',
    anomalyType: 'Precision Kinetic Strike Anomaly',
    notes: 'Targeted logistics warehouse thermal signature on airport approach.'
  },

  // Sudan & Khartoum
  {
    id: 'FIRMS-SD-KHA',
    theater: 'Khartoum Refinery & Industrial Complex, Sudan',
    lat: 15.65,
    lng: 32.55,
    brightnessK: 388.9,
    confidence: '99% (Extreme)',
    satellite: 'Suomi-NPP VIIRS',
    detectionTime: 'Recent Overpass (T-0.5h)',
    anomalyType: 'Hydrocarbon Depot Conflagration',
    notes: 'Large-scale smoke and intense thermal radiation from ongoing urban fighting between SAF and RSF.'
  }
];

export function getAllSensors() {
  return {
    ais: AIS_VESSELS,
    adsb: ADSB_MILITARY_FLIGHTS,
    firms: FIRMS_THERMAL_HOTSPOTS
  };
}

export function getSensorsByTheater(theaterQuery) {
  const q = (theaterQuery || '').toLowerCase();
  return {
    ais: AIS_VESSELS.filter(v => v.theater.toLowerCase().includes(q)),
    adsb: ADSB_MILITARY_FLIGHTS.filter(f => f.theater.toLowerCase().includes(q)),
    firms: FIRMS_THERMAL_HOTSPOTS.filter(h => h.theater.toLowerCase().includes(q))
  };
}
