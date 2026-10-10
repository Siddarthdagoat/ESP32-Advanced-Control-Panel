// ============================================================================
// GEOINTEL — 4D HISTORICAL BORDER BOUNDARIES & EMPIRE CARTOGRAPHY
// Territorial models, partition lines, and imperial entity overlays for:
// 1914 (WWI Eve), 1939 (WWII Eve), 1962 (Cold War Peak), 1991 (Soviet Collapse), 2026 (Present)
// ============================================================================

export const HISTORICAL_BOUNDARY_ERAS = {
  '1914': {
    year: '1914',
    title: '1914: The Age of High Imperialism & WWI Eve',
    paradigm: 'Imperial Balance of Power / Concert of Europe Collapse',
    description: 'Six European and Asian empires rule over two-thirds of the planet’s landmass. Modern sovereign states across Eastern Europe, Central Asia, the Middle East, and Africa do not exist as independent entities.',
    empires: [
      {
        id: 'EMP_RUSSIAN_1914',
        name: 'RUSSIAN EMPIRE',
        capital: 'Saint Petersburg',
        lat: 59.93,
        lng: 30.33,
        color: '#E0E0E0',
        extent: 'Stretches from Baltic Sea and Poland to Pacific Ocean and Pamir mountains.',
        subsumedModernIso: ['RUS', 'UKR', 'BLR', 'EST', 'LVA', 'LTU', 'FIN', 'POL', 'GEO', 'ARM', 'AZE', 'KAZ', 'UZB', 'TKM', 'KGZ', 'TJK']
      },
      {
        id: 'EMP_AUSTRO_HUNGARIAN_1914',
        name: 'AUSTRO-HUNGARIAN EMPIRE',
        capital: 'Vienna / Budapest',
        lat: 48.20,
        lng: 16.37,
        color: '#FFFFFF',
        extent: 'Dual Monarchy ruling Central Europe, Danube basin, and the Adriatic coast.',
        subsumedModernIso: ['AUT', 'HUN', 'CZE', 'SVK', 'SVN', 'HRV', 'BIH', 'ROU', 'UKR', 'POL', 'ITA']
      },
      {
        id: 'EMP_GERMAN_1914',
        name: 'GERMAN REICH (IMPERIAL GERMANY)',
        capital: 'Berlin',
        lat: 52.52,
        lng: 13.40,
        color: '#D4D4D4',
        extent: 'Dominant continental industrial power extending from Alsace-Lorraine to East Prussia and Memel.',
        subsumedModernIso: ['DEU', 'POL', 'FRA', 'DNK', 'RUS']
      },
      {
        id: 'EMP_OTTOMAN_1914',
        name: 'OTTOMAN EMPIRE',
        capital: 'Constantinople (Istanbul)',
        lat: 41.00,
        lng: 28.97,
        color: '#C0C0C0',
        extent: 'Encompasses Anatolia, Levant, Mesopotamia, and the Red Sea Hijaz coast.',
        subsumedModernIso: ['TUR', 'SYR', 'IRQ', 'LBN', 'ISR', 'PSE', 'JOR', 'SAU', 'YEM']
      },
      {
        id: 'EMP_BRITISH_RAJ_1914',
        name: 'BRITISH EMPIRE & THE RAJ',
        capital: 'London / Calcutta & New Delhi',
        lat: 28.61,
        lng: 77.20,
        color: '#F0F0F0',
        extent: 'The British Raj rules undivided Indian subcontinent, Burma, Aden, and Malaya.',
        subsumedModernIso: ['GBR', 'IND', 'PAK', 'BGD', 'MMR', 'LKA', 'MYS', 'EGY', 'SDN', 'KEN', 'NGA', 'ZAF', 'CAN', 'AUS', 'NZL']
      },
      {
        id: 'EMP_FRENCH_1914',
        name: 'FRENCH COLONIAL EMPIRE',
        capital: 'Paris',
        lat: 48.85,
        lng: 2.35,
        color: '#D8D8D8',
        extent: 'Metropolitan France, French Indochina, and vast French West and Equatorial Africa.',
        subsumedModernIso: ['FRA', 'DZA', 'TUN', 'MAR', 'SEN', 'MLI', 'NER', 'TCD', 'VNM', 'LAO', 'KHM', 'MDG']
      }
    ],
    boundarySegments: [
      // Russian - Austro-Hungarian Frontier (1914 Eastern border)
      [[54.5, 22.8], [52.0, 23.5], [50.5, 24.0], [48.0, 25.5], [45.0, 29.5]],
      // German - Russian Frontier (Pre-WWI Poland partition line)
      [[55.0, 21.0], [53.5, 20.0], [51.5, 18.5], [50.0, 19.0]],
      // Franco-German Frontier (Alsace-Lorraine in Germany)
      [[49.0, 6.0], [48.0, 7.5], [47.5, 7.6]],
      // Ottoman - British Egypt Border (Sinai frontier)
      [[31.2, 34.2], [29.5, 34.9]],
      // Undivided British Raj Outer Perimeter (Durand Line & McMahon Line)
      [[35.0, 71.0], [30.0, 66.0], [25.0, 62.0], [27.0, 88.0], [28.0, 96.0]]
    ]
  },

  '1939': {
    year: '1939',
    title: '1939: WWII Eve & Axis Expansion',
    paradigm: 'Fascist Expansionism vs. Fragile Collective Security',
    description: 'Nazi Germany has annexed Austria and the Sudetenland and partitioned Czechoslovakia. The Molotov-Ribbentrop Pact carves Eastern Europe with the USSR. Imperial Japan occupies Manchuria and coastal China.',
    empires: [
      {
        id: 'EMP_GREATER_GERMANY_1939',
        name: 'GREATER GERMAN REICH',
        capital: 'Berlin',
        lat: 52.52,
        lng: 13.40,
        color: '#FFFFFF',
        extent: 'Encompasses Germany, Austria (Anschluss), Protectorate of Bohemia & Moravia, and Memel.',
        subsumedModernIso: ['DEU', 'AUT', 'CZE', 'POL']
      },
      {
        id: 'EMP_USSR_1939',
        name: 'UNION OF SOVIET SOCIALIST REPUBLICS (USSR)',
        capital: 'Moscow',
        lat: 55.75,
        lng: 37.61,
        color: '#E0E0E0',
        extent: 'Stalinist superpower preparing to occupy Eastern Poland, Baltic States, and Bessarabia.',
        subsumedModernIso: ['RUS', 'UKR', 'BLR', 'KAZ', 'UZB', 'TKM', 'KGZ', 'TJK', 'GEO', 'ARM', 'AZE']
      },
      {
        id: 'EMP_JAPANESE_1939',
        name: 'EMPIRE OF JAPAN & MANCHUKUO',
        capital: 'Tokyo / Hsinking',
        lat: 35.68,
        lng: 139.69,
        color: '#D0D0D0',
        extent: 'Japanese archipelago, Chōsen (Korea), Taiwan, puppet state of Manchukuo, and coastal treaty ports.',
        subsumedModernIso: ['JPN', 'KOR', 'PRK', 'TWN', 'CHN']
      },
      {
        id: 'EMP_BRITISH_EMPIRE_1939',
        name: 'BRITISH EMPIRE & ALLIES',
        capital: 'London',
        lat: 51.50,
        lng: -0.12,
        color: '#F0F0F0',
        extent: 'Dominions, British India, Middle Eastern mandates (Palestine, Transjordan, Iraq), African colonies.',
        subsumedModernIso: ['GBR', 'IND', 'PAK', 'BGD', 'EGY', 'CAN', 'AUS', 'ZAF']
      }
    ],
    boundarySegments: [
      // Molotov-Ribbentrop Secret Partition Line through Poland (Curzon line vicinity)
      [[53.5, 23.5], [52.0, 23.0], [50.5, 23.8], [48.5, 24.5]],
      // Greater Germany Annexed Bohemia/Moravia perimeter
      [[50.8, 14.5], [49.5, 17.5], [48.5, 16.5], [49.0, 13.0]],
      // Japanese Manchukuo - Soviet Far East border (Khalkhin Gol battle sector)
      [[47.8, 118.6], [48.5, 122.0], [45.0, 131.0]]
    ]
  },

  '1962': {
    year: '1962',
    title: '1962: Peak Cold War & Bipolar Brinkmanship',
    paradigm: 'Bipolar Superpower Confrontation / Nuclear Deterrence / Decolonization',
    description: 'The world is locked in a zero-sum struggle between NATO and the Warsaw Pact. The Berlin Wall has sealed Germany. The Cuban Missile Crisis and Sino-Indian War explode simultaneously in October 1962.',
    empires: [
      {
        id: 'EMP_WARSAW_USSR_1962',
        name: 'WARSAW PACT & SOVIET UNION',
        capital: 'Moscow',
        lat: 55.75,
        lng: 37.61,
        color: '#E0E0E0',
        extent: 'USSR (15 republics) plus satellite states: Poland, East Germany (GDR), Czechoslovakia, Hungary, Romania, Bulgaria.',
        subsumedModernIso: ['RUS', 'UKR', 'BLR', 'EST', 'LVA', 'LTU', 'MDA', 'GEO', 'ARM', 'AZE', 'KAZ', 'UZB', 'TKM', 'KGZ', 'TJK', 'POL', 'CZE', 'SVK', 'HUN', 'ROU', 'BGR']
      },
      {
        id: 'EMP_NATO_1962',
        name: 'NATO ALLIANCE & WESTERN BLOC',
        capital: 'Washington / Paris (SHAPE)',
        lat: 38.89,
        lng: -77.03,
        color: '#FFFFFF',
        extent: 'United States, Canada, UK, France, West Germany (FRG), Italy, Norway, Denmark, Benelux, Greece, Turkey.',
        subsumedModernIso: ['USA', 'CAN', 'GBR', 'FRA', 'DEU', 'ITA', 'NOR', 'DNK', 'NLD', 'BEL', 'GRC', 'TUR']
      },
      {
        id: 'EMP_NON_ALIGNED_1962',
        name: 'NON-ALIGNED MOVEMENT (NAM)',
        capital: 'Belgrade / New Delhi / Cairo',
        lat: 28.61,
        lng: 77.20,
        color: '#CCCCCC',
        extent: 'Independent nations rejecting superpower bloc alignment led by Nehru, Tito, Nasser, and Sukarno.',
        subsumedModernIso: ['IND', 'EGY', 'IDN', 'GHA']
      }
    ],
    boundarySegments: [
      // The Iron Curtain / Inner German Border (FRG vs GDR)
      [[53.9, 10.9], [52.5, 11.0], [51.5, 10.5], [50.4, 11.8], [48.8, 13.7]],
      // Divided Korea: 38th Parallel Demilitarized Zone (DMZ)
      [[37.9, 126.7], [38.3, 128.4]],
      // Divided Vietnam: 17th Parallel Demilitarized Zone
      [[16.9, 106.8], [17.1, 107.2]],
      // Sino-Indian Disputed Frontline (1962 Conflict lines in Ladakh and NEFA)
      [[35.5, 78.5], [34.0, 79.0], [28.0, 93.0], [27.8, 96.0]]
    ]
  },

  '1991': {
    year: '1991',
    title: '1991: Dissolution of the USSR & Post-Cold War Birth',
    paradigm: 'End of Bipolarity / Unipolar Moment / Rebirth of Nation-States',
    description: 'On December 26, 1991, the Soviet flag is lowered from the Kremlin. The USSR breaks into 15 independent sovereign republics. The Warsaw Pact dissolves, Germany reunifies, and the Gulf War demonstrates precision unipolar coalition power.',
    empires: [
      {
        id: 'EMP_COLLAPSING_USSR_1991',
        name: 'DISSOLVING SOVIET UNION (15 REPUBLICS)',
        capital: 'Moscow (Belovezha Accords)',
        lat: 55.75,
        lng: 37.61,
        color: '#E0E0E0',
        extent: '15 newly independent nations emerge: Russia, Ukraine, Belarus, Baltic 3, Caucasus 3, Central Asia 5.',
        subsumedModernIso: ['RUS', 'UKR', 'BLR', 'EST', 'LVA', 'LTU', 'MDA', 'GEO', 'ARM', 'AZE', 'KAZ', 'UZB', 'TKM', 'KGZ', 'TJK']
      },
      {
        id: 'EMP_REUNIFIED_GERMANY_1991',
        name: 'REUNIFIED FEDERAL REPUBLIC OF GERMANY',
        capital: 'Berlin / Bonn',
        lat: 52.52,
        lng: 13.40,
        color: '#FFFFFF',
        extent: 'Reunification of East and West Germany following Two-Plus-Four Treaty.',
        subsumedModernIso: ['DEU']
      },
      {
        id: 'EMP_DESERT_STORM_1991',
        name: 'DESERT STORM COALITION',
        capital: 'Riyadh / Washington',
        lat: 29.37,
        lng: 47.97,
        color: '#D8D8D8',
        extent: '35-nation military coalition liberates Kuwait from Iraqi occupation.',
        subsumedModernIso: ['USA', 'GBR', 'FRA', 'SAU', 'KWT', 'EGY', 'ARE']
      }
    ],
    boundarySegments: [
      // Belovezha Boundaries between Russia, Ukraine, and Belarus
      [[52.5, 31.0], [53.5, 32.5], [56.0, 31.0]],
      // Baltic States restored frontiers with Russian Federation
      [[59.4, 28.1], [58.0, 27.8], [56.0, 27.5], [54.5, 22.8]],
      // Iraq - Kuwait Demarcated Desert Frontier (UNIKOM zone)
      [[30.1, 47.5], [29.1, 48.0]]
    ]
  },

  'PRESENT': {
    year: '2026',
    title: '2026: Multi-Polar Contestation & Active Ceasefires',
    paradigm: 'Great Power Competition / Fragmented Globalization / Hybrid Warfare',
    description: 'Internationally recognized UN sovereign borders overlaid with high-friction de facto lines of control, disputed maritime exclusive economic zones, and active contact lines.',
    empires: [],
    boundarySegments: [
      // Line of Control (LoC) Jammu & Kashmir
      [[32.5, 74.8], [33.5, 74.2], [34.5, 74.5], [35.0, 77.0]],
      // Line of Actual Control (LAC) Eastern Ladakh
      [[35.5, 78.0], [34.5, 78.8], [33.5, 79.2]],
      // Taiwan Strait Median Line
      [[25.5, 121.2], [24.0, 119.8], [22.8, 118.8]],
      // Ukraine 2024-2026 Contact Line (Donbas & Southern Axis)
      [[49.7, 37.8], [48.6, 38.0], [48.0, 37.5], [47.5, 36.0], [46.8, 35.2], [46.5, 32.5]],
      // Cyprus Green Line (UN Buffer Zone)
      [[35.15, 32.85], [35.18, 33.36], [35.05, 33.95]],
      // Korean DMZ (38th Parallel)
      [[37.75, 126.65], [38.30, 128.35]],
      // Golan Heights Purple Line / UNDOF Buffer
      [[33.35, 35.80], [33.00, 35.85], [32.75, 35.82]]
    ]
  }
};

export function getHistoricalEraData(year) {
  const cleanYear = String(year || 'PRESENT').toUpperCase();
  if (HISTORICAL_BOUNDARY_ERAS[cleanYear]) {
    return HISTORICAL_BOUNDARY_ERAS[cleanYear];
  }
  // Fallback to nearest era
  if (cleanYear.includes('1914')) return HISTORICAL_BOUNDARY_ERAS['1914'];
  if (cleanYear.includes('1939')) return HISTORICAL_BOUNDARY_ERAS['1939'];
  if (cleanYear.includes('1962')) return HISTORICAL_BOUNDARY_ERAS['1962'];
  if (cleanYear.includes('1991')) return HISTORICAL_BOUNDARY_ERAS['1991'];
  return HISTORICAL_BOUNDARY_ERAS['PRESENT'];
}
