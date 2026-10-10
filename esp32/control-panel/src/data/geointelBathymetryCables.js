// ============================================================================
// GEOINTEL — UNDERSEA BATHYMETRY & SUBSEA FIBER-OPTIC CABLE ARRAYS
// Strategic telecommunication arteries carrying 99% of transcontinental internet traffic
// and deep oceanic bathymetric trenches.
// ============================================================================

export const SUBSEA_CABLES = [
  {
    id: 'CABLE_DUNANT',
    name: 'Dunant (Transatlantic High-Capacity Cable)',
    capacityTbps: 250,
    lengthKm: 6400,
    readyForService: 2021,
    landingPoints: ['Virginia Beach, USA', 'Saint-Hilaire-de-Riez, France'],
    significance: 'Dedicated Google subsea fiber highway across North Atlantic shelf.',
    routeCoords: [
      [36.85, -75.98],
      [38.5, -65.0],
      [42.0, -45.0],
      [45.5, -25.0],
      [46.7, -10.0],
      [46.72, -1.95]
    ]
  },
  {
    id: 'CABLE_MAREA',
    name: 'MAREA (Southern Transatlantic Corridor)',
    capacityTbps: 224,
    lengthKm: 6605,
    readyForService: 2018,
    landingPoints: ['Virginia Beach, USA', 'Bilbao (Sopelana), Spain'],
    significance: 'High-resilience route south of traditional North Atlantic transatlantic corridors.',
    routeCoords: [
      [36.85, -75.98],
      [37.2, -60.0],
      [39.0, -40.0],
      [41.5, -20.0],
      [43.4, -9.0],
      [43.38, -2.98]
    ]
  },
  {
    id: 'CABLE_UNITY',
    name: 'Unity / Chikura (Transpacific Backbone)',
    capacityTbps: 4.8,
    lengthKm: 9620,
    readyForService: 2010,
    landingPoints: ['Redondo Beach / Los Angeles, USA', 'Chikura, Chiba, Japan'],
    significance: 'Key transpacific data link connecting US West Coast to Tokyo metro exchange.',
    routeCoords: [
      [33.85, -118.38],
      [35.0, -135.0],
      [38.0, -155.0],
      [40.0, -175.0],
      [38.5, 165.0],
      [36.0, 148.0],
      [34.95, 139.95]
    ]
  },
  {
    id: 'CABLE_FASTER',
    name: 'FASTER (Transpacific 6-Fiber Pair Array)',
    capacityTbps: 60,
    lengthKm: 11629,
    readyForService: 2016,
    landingPoints: ['Bandon, Oregon, USA', 'Chiba & Mie, Japan', 'Tanshui, Taiwan'],
    significance: 'Ultra-low latency transpacific backbone with branch to Northern Taiwan.',
    routeCoords: [
      [43.12, -124.41],
      [45.0, -140.0],
      [48.0, -165.0],
      [46.0, 175.0],
      [40.0, 155.0],
      [35.1, 140.0],
      [28.0, 128.0],
      [25.18, 121.43]
    ]
  },
  {
    id: 'CABLE_SEAMEWE5',
    name: 'SEA-ME-WE 5 (Southeast Asia–Middle East–Western Europe 5)',
    capacityTbps: 24,
    lengthKm: 20000,
    readyForService: 2017,
    landingPoints: ['Singapore', 'Kuala Lumpur', 'Colombo', 'Mumbai', 'Karachi', 'Oman', 'Djibouti', 'Yemen', 'Egypt', 'Sicily', 'Marseille'],
    significance: 'Primary digital spine linking Eurasia through the high-risk Bab el-Mandeb and Suez chokepoints.',
    routeCoords: [
      [1.3, 103.8],
      [5.9, 95.2],
      [6.9, 79.8],
      [18.9, 72.8],
      [24.8, 67.0],
      [23.6, 58.5],
      [12.8, 45.0],
      [12.5, 43.3],
      [20.0, 39.0],
      [28.0, 33.5],
      [31.2, 32.3],
      [37.5, 15.1],
      [43.3, 5.3]
    ]
  },
  {
    id: 'CABLE_2AFRICA',
    name: '2Africa (Circum-African Subsea Ring)',
    capacityTbps: 180,
    lengthKm: 45000,
    readyForService: 2024,
    landingPoints: ['UK', 'Portugal', 'Nigeria', 'South Africa', 'Kenya', 'Djibouti', 'Egypt', 'Saudi Arabia', 'Italy'],
    significance: 'The longest subsea cable system in human history, encircling the entire African continent.',
    routeCoords: [
      [50.1, -5.2],
      [38.7, -9.1],
      [28.0, -15.4],
      [14.7, -17.4],
      [6.4, 3.4],
      [-4.3, 11.8],
      [-22.9, 14.5],
      [-33.9, 18.4],
      [-29.8, 31.0],
      [-4.0, 39.6],
      [11.6, 43.1],
      [21.5, 39.1],
      [27.9, 34.3],
      [31.2, 32.3]
    ]
  },
  {
    id: 'CABLE_ARCTIC_CONNECT',
    name: 'Arctic Connect (Northeast Passage Digital Transit - Proposed/Tracked)',
    capacityTbps: 120,
    lengthKm: 10500,
    readyForService: 2027,
    landingPoints: ['Kirkenes, Norway', 'Murmansk', 'Tiksi', 'Anadyr', 'Tokyo, Japan'],
    significance: 'Shortest latency path between Europe and East Asia via polar ice retreat.',
    routeCoords: [
      [69.7, 30.0],
      [71.5, 45.0],
      [74.0, 75.0],
      [76.0, 110.0],
      [74.0, 145.0],
      [68.0, 175.0],
      [55.0, 160.0],
      [42.0, 144.0],
      [35.6, 140.0]
    ]
  }
];

export const DEEP_OCEAN_TRENCHES = [
  {
    name: 'Mariana Trench (Challenger Deep)',
    depthMeters: 10994,
    ocean: 'Western Pacific Ocean',
    lat: 11.35,
    lng: 142.20,
    significance: 'Deepest point on Earth; strategic acoustic monitoring trench.'
  },
  {
    name: 'Puerto Rico Trench (Milwaukee Deep)',
    depthMeters: 8376,
    ocean: 'North Atlantic Ocean',
    lat: 19.84,
    lng: -66.50,
    significance: 'Tectonic subduction zone separating Atlantic from Caribbean basin.'
  },
  {
    name: 'Java (Sunda) Trench',
    depthMeters: 7450,
    ocean: 'Eastern Indian Ocean',
    lat: -10.32,
    lng: 110.16,
    significance: 'Indian Ocean subduction arc flanking the Malacca and Sunda straits.'
  },
  {
    name: 'Kurile-Kamchatka Trench',
    depthMeters: 10542,
    ocean: 'Northwestern Pacific',
    lat: 44.0,
    lng: 150.0,
    significance: 'Bastion exit corridor for Russian Pacific Fleet SSBNs.'
  }
];
