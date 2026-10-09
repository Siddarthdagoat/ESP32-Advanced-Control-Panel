// scripts/updateMaritime.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetPath = path.resolve(__dirname, '../src/data/geointelMaritime.js');

const maritimeCode = `// GEOINTEL Maritime & Strategic Geographic Intelligence Registry
// Standardized intelligence profiles for Oceans, Seas, Gulfs, Straits, Canals, Chokepoints, and Ports.
// Complete 16-section schema with Connected Countries, Maritime Security, Energy Flows, India Impact, and Sources.

export const OCEANS = {
  INDIAN_OCEAN: {
    id: 'INDIAN_OCEAN',
    name: 'Indian Ocean',
    type: 'OCEAN',
    symbol: '🌊',
    center: { lat: -15.0, lng: 75.0 },
    bbox: [-60, 20, 30, 115], // [minLat, minLng, maxLat, maxLng]
    overview: 'The Indian Ocean is the world’s third-largest ocean, covering 70.5 million square kilometers (20% of Earth’s water surface). It is the world’s most critical energy and maritime commercial corridor, carrying 80% of global seaborne oil trade and 40% of container shipments. It is characterized by critical choke-dominated geography (Hormuz, Malacca, Bab el-Mandeb, Sunda, Lombok) and great-power competition between the Indian Navy, the U.S. Fifth and Seventh Fleets, and the expanding naval reach of China’s People’s Liberation Army Navy (PLAN).',
    geographicExtent: 'Extends from the eastern coast of Africa (20°E Cape Agulhas) to Australia and the Indonesian archipelago in the east (147°E), bounded by South Asia and the Arabian Peninsula to the north and the Southern Ocean (60°S) to the south.',
    area: '70,560,000 km² (~19.8% of Earth\\'s water surface)',
    depth: 'Average Depth: 3,741 m | Maximum Depth: Java Trench (Sundar Deep) at 7,450 m',
    location: 'Between Africa, Asia, Australia, and the Southern Ocean',
    connectedCountries: [
      'IND', 'PAK', 'BGD', 'LKA', 'MDV', 'MMR', 'IRN', 'OMN', 'YEM', 'SAU', 
      'UAE', 'QAT', 'KWT', 'IRQ', 'EGY', 'SDN', 'ERI', 'DJI', 'SOM', 'KEN', 
      'TZA', 'MOZ', 'MDG', 'ZAF', 'SYC', 'MUS', 'COM', 'THA', 'MYS', 'SGP', 
      'IDN', 'TLS', 'AUS'
    ],
    marginalSeas: [
      'Arabian Sea', 'Bay of Bengal', 'Andaman Sea', 'Red Sea', 
      'Persian Gulf', 'Laccadive Sea', 'Timor Sea', 'Arafura Sea'
    ],
    gulfs: [
      'Persian Gulf', 'Gulf of Oman', 'Gulf of Aden', 'Gulf of Kutch', 
      'Gulf of Khambhat', 'Gulf of Mannar', 'Gulf of Carpentaria'
    ],
    straits: [
      'Malacca Strait', 'Strait of Hormuz', 'Bab el-Mandeb', 'Sunda Strait', 
      'Lombok Strait', 'Palk Strait', 'Mozambique Channel'
    ],
    strategicChokepoints: ['STRAIT_OF_HORMUZ', 'MALACCA_STRAIT', 'BAB_EL_MANDEB'],
    majorPorts: [
      'MUMBAI_PORT', 'CHABAHAR_PORT', 'SINGAPORE_PORT', 'COLOMBO_PORT', 
      'DJIBOUTI_PORT', 'GWADAR_PORT'
    ],
    shippingRoutes: [
      'East-West Main Trunk Line: Middle East / Suez to Malacca Strait & East Asia',
      'Cape of Good Hope Route: Southern Atlantic to Indian Ocean bulk cargo route',
      'Australia-East Asia Raw Materials Corridor: Western Australia iron ore and LNG to East Asia'
    ],
    energyFlows: 'Over 15 million barrels per day of crude oil transit across the Indian Ocean from Persian Gulf oil terminals toward major East Asian industrial consumers (China, Japan, South Korea, Taiwan, India). Over 20% of world LNG exports transit the basin.',
    navalSignificance: 'Strategic theater of forward deterrence. Commands the Indian Navy\\'s Western and Eastern Naval Commands; the U.S. Fifth Fleet (Bahrain) and Seventh Fleet (Diego Garcia strategic bomber and naval support base); and China\\'s PLA Navy overseas naval logistics facility in Djibouti alongside routine naval counter-piracy escort task forces.',
    economicSignificance: 'Carries approximately 80% of the world\\'s seaborne petroleum trade and over 100,000 commercial vessels annually, linking the industrial manufacturing centers of East Asia with consumer markets in Europe, the Middle East, and Africa.',
    currentStrategicIssues: [
      'Houthi missile and drone targeting against merchant vessels in the southern Red Sea and Gulf of Aden corridor',
      'Expanding presence of Chinese naval oceanographic survey vessels and nuclear attack submarines in the central basin',
      'Maritime infrastructure competition between India\\'s SAGAR security doctrine and China\\'s "String of Pearls" commercial ports'
    ],
    indiaConnection: {
      headline: 'India\\'s Primary Strategic Life-Line & Natural Maritime Sphere of Influence',
      points: [
        'Over 95% of India\\'s foreign trade by volume and 68% by value transits across the Indian Ocean.',
        'India\\'s SAGAR doctrine (Security and Growth for All in the Region) frames the Indian Navy as the net maritime security provider.',
        'Guarantees continuous second-strike nuclear deterrence through INS Arihant and INS Arighaat ballistic missile submarines (SSBNs) patrolling the Bay of Bengal.',
        'Tri-service unified Andaman & Nicobar Command sits at the western entrance of the Malacca Strait.'
      ]
    },
    relatedEvents: ['Red Sea Shipping Disruption', 'Hormuz Oil Tanker Escorts', 'Malacca Dilemma Surveillance'],
    relatedCountries: ['India', 'United States', 'China', 'Australia', 'Japan', 'France'],
    sources: 'International Hydrographic Organization (IHO) / Indian Navy Maritime Military Strategy / U.S. Naval War College'
  },

  PACIFIC_OCEAN: {
    id: 'PACIFIC_OCEAN',
    name: 'Pacific Ocean',
    type: 'OCEAN',
    symbol: '🌊',
    center: { lat: 5.0, lng: -160.0 },
    bbox: [-60, 115, 65, -70], // Crosses 180
    overview: 'The Pacific Ocean is the largest and deepest ocean on Earth, covering more than 165 million square kilometers—larger than all the landmasses of Earth combined. It is the central arena of great-power economic competition between the United States and China, anchored by the First and Second Island Chains, forward carrier strike groups, and critical semiconductor supply lines.',
    geographicExtent: 'Extends from the western coasts of North and South America to the eastern coasts of Asia and Australia, bounded by the Arctic (Bering Strait 65°N) to the Southern Ocean (60°S).',
    area: '165,250,000 km² (~46% of Earth\\'s water surface)',
    depth: 'Average Depth: 4,280 m | Maximum Depth: Mariana Trench (Challenger Deep) at 10,928 m',
    location: 'Between Asia/Australia and North/South America',
    connectedCountries: [
      'USA', 'CAN', 'MEX', 'GTM', 'SLV', 'HND', 'NIC', 'CRI', 'PAN', 'COL', 
      'ECU', 'PER', 'CHL', 'RUS', 'JPN', 'KOR', 'PRK', 'CHN', 'TWN', 'PHL', 
      'VNM', 'MYS', 'IDN', 'BRN', 'PNG', 'AUS', 'NZL', 'FJI', 'SLB', 'VUT', 
      'WSM', 'TON', 'THA', 'KHM'
    ],
    marginalSeas: [
      'South China Sea', 'East China Sea', 'Sea of Japan', 'Bering Sea', 
      'Philippine Sea', 'Coral Sea', 'Tasman Sea', 'Okhotsk Sea', 'Yellow Sea'
    ],
    gulfs: [
      'Gulf of California', 'Gulf of Alaska', 'Gulf of Tonkin', 'Gulf of Thailand', 'Gulf of Anadyr'
    ],
    straits: [
      'Taiwan Strait', 'Malacca Strait', 'Bering Strait', 'Tsushima Strait', 
      'Miyako Strait', 'Torres Strait', 'Cook Strait', 'Bashi Channel'
    ],
    strategicChokepoints: ['TAIWAN_STRAIT', 'MALACCA_STRAIT'],
    majorPorts: [
      'SHANGHAI_PORT', 'SINGAPORE_PORT', 'LOS_ANGELES_PORT', 'VLADIVOSTOK_PORT'
    ],
    shippingRoutes: [
      'Transpacific Trunk Route: East Asian manufacturing ports to US West Coast (Los Angeles / Long Beach)',
      'Intra-Asia Container Circuit: Linking China, Taiwan, Japan, South Korea, and Southeast Asia',
      'Australia-Northeast Asia Bulk Corridor: Iron ore, coal, and bauxite shipments to China and Japan'
    ],
    energyFlows: 'Over 12 million barrels of crude oil pass through western Pacific straits daily toward East Asian refineries. Primary transit lanes for liquefied natural gas (LNG) from Australia and the US Gulf Coast to Asian utility grids.',
    navalSignificance: 'The premier theater of great-power maritime deterrence. Hosts the U.S. Indo-Pacific Command (INDOPACOM) with forward carrier strike groups at Yokosuka (Japan) and Guam, operating alongside the rapid naval expansion of China\\'s PLA Navy (comprising 370+ combatant hulls and three aircraft carriers).',
    economicSignificance: 'The Pacific Rim accounts for over 60% of global GDP and approximately 50% of worldwide containerized maritime trade, anchoring global technology and automotive supply chains.',
    currentStrategicIssues: [
      'Taiwan Strait sovereignty friction and daily air-sea incursions across the median line',
      'Militarization of artificial reefs and exclusive economic zone confrontations in the South China Sea',
      'Nuclear submarine patrol bastions in the Sea of Okhotsk and South China Sea'
    ],
    indiaConnection: {
      headline: 'India\\'s Act East Outreach & Indo-Pacific Security Alignment',
      points: [
        'Over 55% of India\\'s foreign trade transits east toward Pacific littoral nations (ASEAN, Japan, South Korea).',
        'India participates in Pacific multi-lateral naval exercises (Malabar, RIMPAC) alongside the U.S., Japan, and Australia (QUAD).',
        'Direct energy stakes through ONGC Videsh\\'s offshore oil and gas exploration blocks in the South China Sea off Vietnam.'
      ]
    },
    relatedEvents: ['Taiwan Strait Stand-off', 'South China Sea EEZ Confrontations', 'Pacific Deterrence Initiative'],
    relatedCountries: ['United States', 'China', 'Japan', 'Taiwan', 'Australia', 'Philippines'],
    sources: 'U.S. Indo-Pacific Command / SIPRI / NOAA Ocean Data / CSIS Asia Maritime Transparency Initiative'
  },

  ATLANTIC_OCEAN: {
    id: 'ATLANTIC_OCEAN',
    name: 'Atlantic Ocean',
    type: 'OCEAN',
    symbol: '🌊',
    center: { lat: 25.0, lng: -40.0 },
    bbox: [-60, -80, 65, 20],
    overview: 'The Atlantic Ocean is the second-largest ocean, separating the Americas from Europe and Africa. It is the historic highway of transatlantic commerce and the NATO collective security alliance. It is anchored by the Greenland-Iceland-United Kingdom (GIUK) Gap, the historic choke barrier through which Russian Northern Fleet submarines must pass to enter the open Atlantic.',
    geographicExtent: 'Stretches in an elongated S-shape between North/South America to the west and Europe/Africa to the east, bounded by the Arctic (Fram Strait 65°N) to the Southern Ocean (60°S).',
    area: '106,460,000 km² (~29% of Earth\\'s water surface)',
    depth: 'Average Depth: 3,646 m | Maximum Depth: Puerto Rico Trench (Milwaukee Deep) at 8,376 m',
    location: 'Between the Americas and Europe/Africa',
    connectedCountries: [
      'USA', 'CAN', 'GBR', 'FRA', 'DEU', 'NLD', 'BEL', 'ESP', 'PRT', 'IRL', 
      'NOR', 'ISL', 'DNK', 'BRA', 'ARG', 'URY', 'VEN', 'GUY', 'SUR', 'MEX', 
      'CUB', 'HTI', 'DOM', 'JAM', 'TTO', 'BHS', 'MAR', 'MRT', 'SEN', 'GMB', 
      'GIN', 'SLE', 'LBR', 'CIV', 'GHA', 'TGO', 'BEN', 'NGA', 'CMR', 'GAB', 
      'COG', 'COD', 'AGO', 'NAM', 'ZAF', 'ITA', 'GRC', 'TUR', 'EGY'
    ],
    marginalSeas: [
      'Mediterranean Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea', 
      'Norwegian Sea', 'Gulf of Mexico', 'Labrador Sea', 'Irish Sea'
    ],
    gulfs: [
      'Gulf of Mexico', 'Gulf of Guinea', 'Gulf of Saint Lawrence', 'Bay of Biscay', 'Gulf of Cadiz'
    ],
    straits: [
      'Strait of Gibraltar', 'English Channel', 'Danish Straits', 'Florida Strait', 
      'Windward Passage', 'GIUK Gap'
    ],
    strategicChokepoints: ['BOSPHORUS_STRAIT'],
    majorPorts: [
      'ROTTERDAM_PORT', 'NOVOROSSIYSK_PORT'
    ],
    shippingRoutes: [
      'North Atlantic Trunk Line: Connecting US East Coast mega-ports with Northern European hubs',
      'Transatlantic South America Corridor: Brazil and Argentina agricultural and iron ore exports to Europe',
      'West Africa-Europe Energy Route: Crude petroleum exports to Mediterranean and North Sea refineries'
    ],
    energyFlows: 'Critical transit corridor for U.S. liquefied natural gas (LNG) and crude oil shipments to Europe (replacing Russian pipeline supplies), West African crude oil, and North Sea oil production.',
    navalSignificance: 'The core maritime theater of the North Atlantic Treaty Organization (NATO). Commands Allied Maritime Command (MARCOM) at Northwood, UK; the U.S. Second Fleet (Norfolk) and Sixth Fleet (Naples); and nuclear ballistic missile submarine deterrent patrols from the UK (Faslane) and France (Île Longue).',
    economicSignificance: 'Anchors the $1.3 Trillion transatlantic trade partnership, the largest bilateral economic relationship in the world.',
    strategicIssues: [
      'Protection of critical undersea telecommunications cables carrying 95% of transatlantic financial and digital data',
      'Russian Northern Fleet nuclear attack submarine patrols re-entering the North Atlantic through the GIUK Gap',
      'Security of offshore wind farms and critical undersea energy interconnectors'
    ],
    indiaConnection: {
      headline: 'Commercial Trade Transit & Transatlantic Export Gateway',
      points: [
        'Primary conduit for Indian pharmaceutical, textile, chemical, and engineering goods bound for European and North American markets.',
        'India\\'s expanding maritime diplomacy through Mediterranean naval port calls and bilateral exercises with France, the UK, and Italy.'
      ]
    },
    relatedEvents: ['Undersea Infrastructure Defense', 'GIUK Anti-Submarine Surveillance', 'Transatlantic Energy Reshoring'],
    relatedCountries: ['United States', 'United Kingdom', 'France', 'Germany', 'Brazil', 'Norway'],
    sources: 'NATO Allied Maritime Command (MARCOM) / IHO / U.S. Navy Sixth Fleet / Lloyd\\'s Maritime Data'
  },

  ARCTIC_OCEAN: {
    id: 'ARCTIC_OCEAN',
    name: 'Arctic Ocean',
    type: 'OCEAN',
    symbol: '❄️',
    center: { lat: 85.0, lng: 0.0 },
    bbox: [65, -180, 90, 180],
    overview: 'The Arctic Ocean is the smallest, shallowest, and coldest ocean, centered around the North Pole. As polar ice melts due to climate change, it is rapidly transforming into a major strategic corridor, opening the Northern Sea Route (NSR) and unlocking an estimated 30% of the world\\'s undiscovered natural gas and 13% of undiscovered oil.',
    geographicExtent: 'Surrounded entirely by the landmasses of Eurasia and North America, connected to the Pacific via the Bering Strait and to the Atlantic via Fram Strait and the Norwegian Sea.',
    area: '14,060,000 km² (~3.9% of Earth\\'s water surface)',
    depth: 'Average Depth: 1,204 m | Maximum Depth: Molloy Deep (Fram Strait) at 5,550 m',
    location: 'North Polar basin within the Arctic Circle (66.5°N)',
    connectedCountries: ['RUS', 'NOR', 'ISL', 'DNK', 'CAN', 'USA', 'SWE', 'FIN'],
    marginalSeas: [
      'Barents Sea', 'Kara Sea', 'Laptev Sea', 'East Siberian Sea', 
      'Chukchi Sea', 'Beaufort Sea', 'White Sea', 'Greenland Sea'
    ],
    gulfs: ['Gulf of Ob', 'Yenisei Gulf', 'Khatanga Gulf', 'Amundsen Gulf'],
    straits: ['Bering Strait', 'Fram Strait', 'Kara Gate', 'Vilkitsky Strait', 'Nares Strait'],
    strategicChokepoints: ['BOSPHORUS_STRAIT'],
    majorPorts: ['VLADIVOSTOK_PORT', 'NOVOROSSIYSK_PORT'],
    shippingRoutes: [
      'Northern Sea Route (NSR): Russian Arctic coast from Murmansk to Bering Strait (slashes Asia-Europe transit by 40%)',
      'Northwest Passage: Canadian Arctic archipelago connecting Atlantic and Pacific',
      'Transpolar Sea Route: Future ice-free central passage directly across the North Pole'
    ],
    energyFlows: 'Hosts massive hydrocarbon reserves including Russia\\'s Yamal LNG and Arctic LNG 2 projects, moving supercooled gas to Asian markets via Arc7 ice-class LNG tankers.',
    navalSignificance: 'Bastion of the Russian Navy\\'s Northern Fleet submarine-launched nuclear deterrent forces. Submarines operate under polar ice packs, invulnerable to surface radar and satellite surveillance.',
    economicSignificance: 'Controls shortest prospective trade lanes between East Asia and Europe; rich fisheries in the Barents Sea; unexploited seabed rare earth minerals.',
    currentStrategicIssues: [
      'Russian regulatory assertions over the Northern Sea Route contested by the U.S. as international waters',
      'China declaring itself a "Near-Arctic State" and investing in Polar Silk Road port infrastructure',
      'Rapid militarization with reopened Soviet-era airbases and radar installations across Arctic archipelagos'
    ],
    indiaConnection: {
      headline: 'India\\'s Arctic Policy, Scientific Stakes & Northern Sea Route Collaboration',
      points: [
        'India operates the permanent "Himadri" scientific research station in Ny-Ålesund, Svalbard (Norway).',
        'India released its comprehensive Arctic Policy in 2022 emphasizing climate research and sustainable exploration.',
        'Indian merchant mariners undergo specialized polar ice navigation training in Vladivostok; India evaluates the NSR to bypass Suez bottlenecks.'
      ]
    },
    relatedEvents: ['Northern Sea Route Operationalization', 'Arctic Military Re-Basing', 'Polar Silk Road Expansion'],
    relatedCountries: ['Russia', 'Norway', 'Canada', 'United States', 'Denmark', 'China'],
    sources: 'Arctic Council / Ministry of Earth Sciences (India) / Russian Ministry for the Development of the Far East and Arctic'
  },

  SOUTHERN_OCEAN: {
    id: 'SOUTHERN_OCEAN',
    name: 'Southern Ocean',
    type: 'OCEAN',
    symbol: '🧊',
    center: { lat: -70.0, lng: 0.0 },
    bbox: [-90, -180, -60, 180],
    overview: 'The Southern Ocean encircles Antarctica south of 60°S latitude, connecting the southern reaches of the Atlantic, Indian, and Pacific oceans. Governed under the landmark 1959 Antarctic Treaty System, it is demilitarized and reserved exclusively for peaceful scientific research, though contested by illegal fishing and rising geopolitical interest in future resource extraction.',
    geographicExtent: 'Encircles the entire continent of Antarctica uninterrupted by any landmass, bounded by 60°S latitude in the north and the Antarctic continental coast in the south.',
    area: '21,960,000 km² (~6.1% of Earth\\'s water surface)',
    depth: 'Average Depth: 3,270 m | Maximum Depth: South Sandwich Trench (Factorian Deep) at 7,434 m',
    location: 'Circumpolar body surrounding Antarctica south of 60°S',
    connectedCountries: [
      'AUS', 'NZL', 'CHL', 'ARG', 'ZAF', 'GBR', 'FRA', 'NOR', 'USA', 'IND', 
      'RUS', 'CHN', 'JPN', 'BRA'
    ],
    marginalSeas: [
      'Weddell Sea', 'Ross Sea', 'Amundsen Sea', 'Bellingshausen Sea', 
      'Davis Sea', 'D\\'Urville Sea', 'Scotia Sea'
    ],
    gulfs: ['Prydz Bay', 'Pine Island Bay'],
    straits: ['Drake Passage'],
    strategicChokepoints: [],
    majorPorts: [],
    shippingRoutes: [
      'Circumpolar Navigation: Extreme southern bulk shipping avoiding northern canals',
      'Antarctic Gateway Corridors: Logistics shuttles from Punta Arenas, Ushuaia, Hobart, and Cape Town'
    ],
    energyFlows: 'Commercial mineral and fossil fuel extraction is strictly prohibited under the Protocol on Environmental Protection to the Antarctic Treaty (Madrid Protocol).',
    navalSignificance: 'Demilitarized by international law. Military personnel and equipment are permitted exclusively for scientific support and logistics.',
    economicSignificance: 'Vast biological marine resources, particularly Antarctic krill (Euphausia superba), heavily regulated under the Commission for the Conservation of Antarctic Marine Living Resources (CCAMLR).',
    currentStrategicIssues: [
      'Expanding presence of Chinese and Russian research stations and dual-use polar satellite tracking arrays',
      'Geopolitical debates surrounding the review of the Madrid Protocol\\'s mineral extraction moratorium in 2048',
      'Illegal, unreported, and unregulated (IUU) fishing enforcement across remote maritime zones'
    ],
    indiaConnection: {
      headline: 'India\\'s Antarctic Stations: Bharati and Maitri',
      points: [
        'India operates two permanently manned scientific research stations in Antarctica: Maitri (Schirmacher Oasis, 1989) and Bharati (Larsemann Hills, 2012).',
        'India enacted the Indian Antarctic Act in 2022 to establish domestic judicial jurisdiction and environmental oversight.',
        'Annual Indian Scientific Expeditions to Antarctica coordinated by the National Centre for Polar and Ocean Research (NCPOR) in Goa.'
      ]
    },
    relatedEvents: ['Antarctic Treaty Consultative Meetings', 'CCAMLR Marine Protected Area Debates', 'Polar Ice Sheet Monitoring'],
    relatedCountries: ['Australia', 'New Zealand', 'Chile', 'Argentina', 'South Africa', 'India'],
    sources: 'Antarctic Treaty Secretariat / National Centre for Polar and Ocean Research (NCPOR) / CCAMLR'
  }
};

export const SEAS = {
  ARABIAN_SEA: {
    id: 'ARABIAN_SEA',
    name: 'Arabian Sea',
    type: 'SEA',
    center: { lat: 18.0, lng: 65.0 },
    bbox: [5, 50, 26, 78],
    overview: 'The Arabian Sea is the northwestern arm of the Indian Ocean, bounded by India to the east, Pakistan and Iran to the north, and the Arabian Peninsula to the west. It is India\\'s direct maritime gateway to the Gulf and Europe, carrying the sea lines of communication linking the Strait of Hormuz and Bab el-Mandeb to Asian industrial hubs.',
    geography: {
      area: '3,862,000 km²',
      littoralNations: ['India', 'Pakistan', 'Iran', 'Oman', 'Yemen', 'United Arab Emirates'],
      majorIslands: ['Lakshadweep (India)', 'Socotra (Yemen)', 'Masirah (Oman)']
    },
    strategicSignificance: 'Over 60% of India’s imported crude oil traverses the Arabian Sea from Saudi Arabia, Iraq, and the UAE. It hosts major strategic ports including Mumbai, JNPT, Gwadar (CPEC), and Chabahar.',
    chokepointsConnected: ['STRAIT_OF_HORMUZ', 'BAB_EL_MANDEB'],
    majorPorts: ['MUMBAI_PORT', 'GWADAR_PORT', 'CHABAHAR_PORT'],
    currentTensions: [
      'Drone and missile attacks on commercial tankers in the western approaches (linked to Yemen conflict)',
      'Subsurface tracking of Chinese Yuan-class AIP submarines visiting Pakistani ports',
      'Maritime narcotics and illicit weapons interdiction'
    ],
    indiaConnection: {
      headline: 'India\\'s Western Naval Bastion & Hydrocarbon Lifeline',
      points: [
        'Home to the Indian Navy\\'s Western Naval Command headquartered in Mumbai and Karwar INS Kadamba mega-base.',
        'Guards India’s offshore oil infrastructure at Mumbai High.',
        'Facilitates high-volume trade with the Gulf Cooperation Council (GCC) countries.'
      ]
    },
    sources: 'Indian Navy Doctrine / National Institute of Oceanography (Goa)'
  },

  BAY_OF_BENGAL: {
    id: 'BAY_OF_BENGAL',
    name: 'Bay of Bengal',
    type: 'SEA',
    center: { lat: 14.5, lng: 88.0 },
    bbox: [5, 80, 22, 95],
    overview: 'The Bay of Bengal is the northeastern arm of the Indian Ocean, bordered by India and Sri Lanka to the west, Bangladesh to the north, and Myanmar and Thailand to the east. It is the crucial maritime nexus linking the subcontinent to Southeast Asia and the entrance to the Malacca Strait.',
    geography: {
      area: '2,172,000 km²',
      littoralNations: ['India', 'Bangladesh', 'Myanmar', 'Sri Lanka', 'Thailand', 'Indonesia'],
      majorIslands: ['Andaman and Nicobar Islands (India)']
    },
    strategicSignificance: 'Commands the western approaches to the Malacca Strait. Hosts India\\'s primary nuclear submarine patrol bastion and deepwater testing corridors for the Agni-V and K-4 ballistic missiles.',
    chokepointsConnected: ['MALACCA_STRAIT'],
    majorPorts: ['COLOMBO_PORT', 'SINGAPORE_PORT'],
    currentTensions: [
      'Chinese naval surveillance vessels and research ships operating near Indian missile launch sites off Odisha coast',
      'Myanmar naval base developments with reported Chinese radar installations at Great Coco Island'
    ],
    indiaConnection: {
      headline: 'India\\'s Strategic Nuclear Bastion & Act East Fulcrum',
      points: [
        'Home to the Eastern Naval Command in Visakhapatnam and the tri-service Andaman and Nicobar Command.',
        'Secures India\\'s SSBN sea-based nuclear deterrence in deepwater trenches.'
      ]
    },
    sources: 'Indian Navy Eastern Naval Command / BIMSTEC Secretariat'
  },

  RED_SEA: {
    id: 'RED_SEA',
    name: 'Red Sea',
    type: 'SEA',
    center: { lat: 21.0, lng: 38.0 },
    bbox: [12, 32, 28, 44],
    overview: 'The Red Sea is a narrow strip of water separating northeast Africa from the Arabian Peninsula, connecting the Mediterranean Sea (via the Suez Canal) to the Indian Ocean (via Bab el-Mandeb). Approximately 12% of global trade and 30% of global container traffic normally passes through here.',
    geography: {
      area: '438,000 km²',
      littoralNations: ['Saudi Arabia', 'Egypt', 'Sudan', 'Eritrea', 'Djibouti', 'Yemen', 'Israel', 'Jordan'],
      salinity: 'One of the saltiest and warmest bodies of water in the world.'
    },
    strategicSignificance: 'Controls the shortest maritime route between Europe and the Indo-Pacific. A closure forces ships to circumnavigate Africa via the Cape of Good Hope, adding 10 to 14 days and $1 Million+ in fuel per round-trip voyage.',
    chokepointsConnected: ['SUEZ_CANAL', 'BAB_EL_MANDEB'],
    majorPorts: ['DJIBOUTI_PORT'],
    currentTensions: [
      'Houthi anti-ship cruise missiles, ballistic missiles, and USV attacks from Yemen targeting commercial shipping',
      'U.S.-led Operation Prosperity Guardian and EU Operation Aspides international naval escort missions'
    ],
    indiaConnection: {
      headline: 'Critical Export Corridor to Europe & Naval Escort Operations',
      points: [
        'India deploys guided-missile destroyers (Operation Sankalp) to escort Indian-flagged tankers and rescue distressed crews.',
        'Rerouting of Indian exports around Africa caused a 40–60% surge in container freight rates in 2024.'
      ]
    },
    sources: 'International Maritime Organization (IMO) / U.S. Naval Institute'
  },

  PERSIAN_GULF: {
    id: 'PERSIAN_GULF',
    name: 'Persian Gulf',
    type: 'GULF',
    center: { lat: 27.0, lng: 51.0 },
    bbox: [24, 48, 30, 56],
    overview: 'The Persian Gulf is a Mediterranean sea in Western Asia, connected to the Gulf of Oman and Arabian Sea by the Strait of Hormuz. It holds nearly 50% of the world’s proven crude oil reserves and produces approximately 21 million barrels of petroleum daily.',
    geography: {
      area: '251,000 km²',
      littoralNations: ['Saudi Arabia', 'Iran', 'United Arab Emirates', 'Iraq', 'Kuwait', 'Qatar', 'Bahrain', 'Oman']
    },
    strategicSignificance: 'Produces over 20% of global petroleum. Qatar is the world\\'s premier exporter of liquefied natural gas (LNG).',
    chokepointsConnected: ['STRAIT_OF_HORMUZ'],
    majorPorts: [],
    currentTensions: [
      'Periodic Iranian IRGC naval boardings and seizures of commercial tankers',
      'Maritime mine warfare capabilities and fast attack craft swarm tactics'
    ],
    indiaConnection: {
      headline: 'Primary Source of Indian Oil & 8.5 Million Indian Diaspora',
      points: [
        'Over 8.5 million Indian expatriates live in Gulf nations, sending back $40B+ in annual remittances.',
        'India secures over 60% of its petroleum and 85% of imported LNG from Persian Gulf producers.'
      ]
    },
    sources: 'U.S. Energy Information Administration (EIA) / OPEC Bulletin'
  },

  SOUTH_CHINA_SEA: {
    id: 'SOUTH_CHINA_SEA',
    name: 'South China Sea',
    type: 'SEA',
    center: { lat: 12.0, lng: 114.0 },
    bbox: [0, 105, 23, 122],
    overview: 'The South China Sea is a marginal sea of the western Pacific Ocean carrying over $3.4 Trillion in global trade annually. China claims sovereignty over almost the entire sea under its disputed "Nine-Dash Line," constructing militarized artificial islands across the Spratly and Paracel archipelagos.',
    geography: {
      area: '3,500,000 km²',
      littoralNations: ['China', 'Vietnam', 'Philippines', 'Malaysia', 'Brunei', 'Taiwan', 'Indonesia']
    },
    strategicSignificance: 'Carries one-third of global maritime shipping. Contains estimated 11 billion barrels of oil and 190 trillion cubic feet of natural gas.',
    chokepointsConnected: ['MALACCA_STRAIT', 'TAIWAN_STRAIT'],
    majorPorts: ['SINGAPORE_PORT', 'SHANGHAI_PORT'],
    currentTensions: [
      'Chinese Coast Guard water cannon assaults against Philippine supply ships at Second Thomas Shoal',
      'U.S. Navy Freedom of Navigation Operations (FONOPs) challenging excessive maritime claims'
    ],
    indiaConnection: {
      headline: 'Freedom of Navigation & ONGC Videsh Energy Exploration',
      points: [
        'Over 55% of India\\'s trade transits through the South China Sea and Malacca Strait.',
        'India’s state-owned ONGC Videsh holds offshore oil exploration blocks off Vietnam.'
      ]
    },
    sources: 'CSIS Asia Maritime Transparency Initiative / UNCLOS Tribunal'
  },

  EAST_CHINA_SEA: {
    id: 'EAST_CHINA_SEA',
    name: 'East China Sea',
    type: 'SEA',
    center: { lat: 29.0, lng: 125.0 },
    bbox: [24, 117, 33, 131],
    overview: 'The East China Sea is an arm of the western Pacific Ocean bounded by China, Japan, Taiwan, and South Korea. It is the site of sharp territorial friction over the uninhabited Senkaku/Diaoyu Islands and disputed gas extraction platforms.',
    geography: {
      area: '1,249,000 km²',
      littoralNations: ['China', 'Japan', 'Taiwan', 'South Korea']
    },
    strategicSignificance: 'Crucial passage for international shipping moving between the Taiwan Strait, Japan, and the Pacific Ocean. Major submarine transit corridors connecting the First and Second Island Chains.',
    chokepointsConnected: ['TAIWAN_STRAIT'],
    majorPorts: ['SHANGHAI_PORT'],
    currentTensions: [
      'Daily confrontations between Chinese Coast Guard and Japanese Coast Guard vessels around Senkaku Islands',
      'Overlapping Air Defense Identification Zones (ADIZ) declared by China, Japan, and South Korea'
    ],
    indiaConnection: {
      headline: 'Maritime Domain Awareness Coordination with Japan',
      points: [
        'India and Japan share maritime surveillance data under the 2020 Acquisition and Cross-Servicing Agreement (ACSA).'
      ]
    },
    sources: 'Japan Ministry of Defense / U.S. Naval Institute'
  },

  BLACK_SEA: {
    id: 'BLACK_SEA',
    name: 'Black Sea',
    type: 'SEA',
    center: { lat: 43.5, lng: 35.0 },
    bbox: [40, 27, 47, 42],
    overview: 'The Black Sea is an inland sea between Eastern Europe and Western Asia, connected to the Mediterranean via the Bosphorus Strait. Historically Russia\\'s warm-water naval gateway, it has become an active battleground where Ukrainian maritime drones forced the Russian Black Sea Fleet to withdraw from Crimea to Novorossiysk.',
    geography: {
      area: '436,400 km²',
      littoralNations: ['Russia', 'Ukraine', 'Turkey', 'Romania', 'Bulgaria', 'Georgia']
    },
    strategicSignificance: 'The breadbasket corridor of the world, transporting wheat, grain, fertilizer, and Russian crude oil through the Turkish Straits to global markets.',
    chokepointsConnected: ['BOSPHORUS_STRAIT'],
    majorPorts: ['NOVOROSSIYSK_PORT'],
    currentTensions: [
      'Ukrainian Magura V5 sea drone strikes sinking Russian corvettes and landing ships',
      'Enforcement of the 1936 Montreux Convention by Turkey, closing the straits to non-littoral warships'
    ],
    indiaConnection: {
      headline: 'Agricultural Supply Security & Fertilizer Imports',
      points: [
        'India relies on Black Sea fertilizer and sunflower oil imports; Indian diplomacy actively supported UN-brokered Black Sea grain corridors.'
      ]
    },
    sources: 'Turkish Ministry of Foreign Affairs / Montreux Convention 1936'
  },

  MEDITERRANEAN_SEA: {
    id: 'MEDITERRANEAN_SEA',
    name: 'Mediterranean Sea',
    type: 'SEA',
    center: { lat: 35.0, lng: 18.0 },
    bbox: [30, -5, 45, 36],
    overview: 'The Mediterranean Sea connects Europe, Africa, and Asia, linking to the Atlantic Ocean via the Strait of Gibraltar and the Indian Ocean via the Suez Canal. It carries 15% of global maritime commerce and hosts NATO maritime commands.',
    geography: {
      area: '2,500,000 km²',
      littoralNations: ['France', 'Italy', 'Greece', 'Turkey', 'Egypt', 'Israel', 'Spain', 'Algeria', '14 others']
    },
    strategicSignificance: 'Carries 15% of global maritime commerce. Central to European energy diversification via undersea gas fields (Leviathan, Tamar, Zohr).',
    chokepointsConnected: ['SUEZ_CANAL', 'BOSPHORUS_STRAIT'],
    majorPorts: ['ROTTERDAM_PORT'],
    currentTensions: [
      'Maritime border disputes between Greece and Turkey in the Aegean Sea',
      'Russian naval deployments staging out of Tartus naval facility in Syria'
    ],
    indiaConnection: {
      headline: 'Terminal Nexus of the India-Middle East-Europe Economic Corridor (IMEC)',
      points: [
        'Under the G20 IMEC initiative, Indian goods will travel by rail to Israeli and Greek Mediterranean ports (Piraeus, Haifa) to enter Europe directly.'
      ]
    },
    sources: 'European Maritime Safety Agency (EMSA) / US Sixth Fleet'
  },

  CASPIAN_SEA: {
    id: 'CASPIAN_SEA',
    name: 'Caspian Sea',
    type: 'SEA',
    center: { lat: 41.5, lng: 51.0 },
    bbox: [36, 46, 48, 55],
    overview: 'The Caspian Sea is the world\\'s largest inland body of water, often classified as the world\\'s largest lake or a full sea. Surrounded by Russia, Kazakhstan, Turkmenistan, Iran, and Azerbaijan, it contains massive hydrocarbon reserves and anchors the International North-South Transport Corridor (INSTC).',
    geography: {
      area: '371,000 km²',
      littoralNations: ['Russia', 'Kazakhstan', 'Turkmenistan', 'Iran', 'Azerbaijan'],
      salinity: 'Brackish water with about one-third the salinity of normal seawater.'
    },
    strategicSignificance: 'Contains an estimated 48 billion barrels of oil and 292 trillion cubic feet of natural gas. Governed by the 2018 Convention on the Legal Status of the Caspian Sea, which explicitly bars non-littoral military forces.',
    chokepointsConnected: [],
    majorPorts: ['CHABAHAR_PORT'],
    currentTensions: [
      'Iranian and Russian naval drills and drone transit along the internal waterway',
      'Environmental decline and shrinking water levels caused by Volga damming and climate shifts'
    ],
    indiaConnection: {
      headline: 'Central Transit Hub of the International North-South Transport Corridor (INSTC)',
      points: [
        'Connects Indian cargo from Chabahar/Bandar Abbas across the Caspian Sea to Astrakhan, Russia, slashing transit time by 40% compared to Suez.'
      ]
    },
    sources: 'Convention on the Legal Status of the Caspian Sea (Aktau 2018) / INSTC Coordination Council'
  },

  BALTIC_SEA: {
    id: 'BALTIC_SEA',
    name: 'Baltic Sea',
    type: 'SEA',
    center: { lat: 58.0, lng: 20.0 },
    bbox: [53, 9, 66, 30],
    overview: 'The Baltic Sea is a semi-enclosed inland sea in Northern Europe, connected to the North Sea through the Danish Straits. Following the accession of Finland and Sweden to NATO, the Baltic has effectively become a "NATO Lake," surrounding Russia\\'s Kaliningrad exclave and St. Petersburg maritime approaches.',
    geography: {
      area: '377,000 km²',
      littoralNations: ['Sweden', 'Finland', 'Russia', 'Estonia', 'Latvia', 'Lithuania', 'Poland', 'Germany', 'Denmark']
    },
    strategicSignificance: 'Controls the naval exit for Russia\\'s Baltic Fleet based at Baltiysk and Kronstadt. Vital shipping corridor for Scandinavian and Baltic industrial exports.',
    chokepointsConnected: [],
    majorPorts: ['ROTTERDAM_PORT'],
    currentTensions: [
      'Sabotage of undersea gas pipelines (Nord Stream) and fiber-optic communication cables',
      'Russian GPS jamming and electronic warfare disrupting commercial aviation and shipping',
      'Suwalki Gap land corridor vulnerability between Kaliningrad and Belarus'
    ],
    indiaConnection: {
      headline: 'High-Tech and Defense R&D Collaboration with Nordic Littorals',
      points: [
        'India maintains strong bilateral technology and clean energy partnerships with Sweden, Finland, and Denmark.'
      ]
    },
    sources: 'NATO Allied Command Operations / Baltic Marine Environment Protection Commission (HELCOM)'
  },

  NORTH_SEA: {
    id: 'NORTH_SEA',
    name: 'North Sea',
    type: 'SEA',
    center: { lat: 56.5, lng: 3.5 },
    bbox: [51, -4, 62, 10],
    overview: 'The North Sea is a marginal sea of the Atlantic Ocean in northwestern Europe, bounded by the British Isles, Norway, Denmark, Germany, the Netherlands, Belgium, and France. It is Europe\\'s primary hub for offshore oil and gas production (Brent benchmark) and offshore wind power.',
    geography: {
      area: '570,000 km²',
      littoralNations: ['United Kingdom', 'Norway', 'Denmark', 'Germany', 'Netherlands', 'Belgium', 'France']
    },
    strategicSignificance: 'Hosts Europe\\'s largest seaports (Rotterdam, Antwerp, Hamburg). Key energy supply zone with over 100 offshore drilling platforms and Europe\\'s largest offshore wind arrays.',
    chokepointsConnected: [],
    majorPorts: ['ROTTERDAM_PORT'],
    currentTensions: [
      'Russian reconnaissance vessels mapping undersea gas pipelines and power interconnectors',
      'Decommissioning of mature oil fields and security of carbon capture infrastructure'
    ],
    indiaConnection: {
      headline: 'Major Destination for Indian Refined Fuels and Engineering Goods',
      points: [
        'Rotterdam and Antwerp are primary entry points for Indian diesel and industrial components entering the EU single market.'
      ]
    },
    sources: 'UK Department for Energy Security / North Sea Commission'
  },

  SEA_OF_JAPAN: {
    id: 'SEA_OF_JAPAN',
    name: 'Sea of Japan (East Sea)',
    type: 'SEA',
    center: { lat: 40.0, lng: 135.0 },
    bbox: [34, 127, 46, 142],
    overview: 'The Sea of Japan is a marginal sea between the Japanese archipelago, Sakhalin, the Korean Peninsula, and the Russian mainland. It is nearly completely enclosed, connected to adjacent seas via the Korea/Tsushima, Tsugaru, and La Pérouse straits.',
    geography: {
      area: '978,000 km²',
      littoralNations: ['Japan', 'Russia', 'South Korea', 'North Korea']
    },
    strategicSignificance: 'Vital military maneuvering area for the Japanese Maritime Self-Defense Force, the U.S. Seventh Fleet, and Russia\\'s Pacific Fleet based in Vladivostok.',
    chokepointsConnected: [],
    majorPorts: ['VLADIVOSTOK_PORT'],
    currentTensions: [
      'North Korean ballistic missile launches routinely splashing down into the Sea of Japan EEZ',
      'Joint Russian and Chinese strategic bomber and naval patrols circling the perimeter of Japan'
    ],
    indiaConnection: {
      headline: 'Vladivostok-Chennai Eastern Maritime Corridor Staging',
      points: [
        'Vessels loading at Vladivostok transit through the Sea of Japan to head south toward the Indian Ocean.'
      ]
    },
    sources: 'Japan Ministry of Defense / ROK Ministry of National Defense'
  },

  BERING_SEA: {
    id: 'BERING_SEA',
    name: 'Bering Sea',
    type: 'SEA',
    center: { lat: 58.0, lng: 175.0 },
    bbox: [51, 160, 66, -158],
    overview: 'The Bering Sea is a marginal sea of the northern Pacific Ocean, separating the continents of Asia and North America. It connects to the Arctic Ocean via the Bering Strait, where the U.S. (Little Diomede) and Russia (Big Diomede) are separated by just 3.8 kilometers.',
    geography: {
      area: '2,000,000 km²',
      littoralNations: ['United States (Alaska)', 'Russia (Chukotka/Kamchatka)']
    },
    strategicSignificance: 'Controls the sole maritime gate connecting the Pacific Ocean to the Arctic Ocean and the Northern Sea Route. Contains world-class commercial pollock and king crab fisheries.',
    chokepointsConnected: [],
    majorPorts: ['VLADIVOSTOK_PORT'],
    currentTensions: [
      'Russian and Chinese joint naval task groups patrolling near the Aleutian Islands within the U.S. EEZ',
      'U.S. Coast Guard Arctic domain cutter deployments to enforce maritime borders'
    ],
    indiaConnection: {
      headline: 'Scientific Arctic Observation and Northern Sea Route Study',
      points: [
        'Indian maritime research monitors the Pacific-Arctic gateway for seasonal ice-free shipping viability.'
      ]
    },
    sources: 'U.S. Coast Guard District 17 / Russian Border Guard Service'
  },

  CARIBBEAN_SEA: {
    id: 'CARIBBEAN_SEA',
    name: 'Caribbean Sea',
    type: 'SEA',
    center: { lat: 15.0, lng: -75.0 },
    bbox: [9, -89, 22, -60],
    overview: 'The Caribbean Sea is a tropical sea of the western Atlantic Ocean, bounded by Central America to the west, South America to the south, and the Greater and Lesser Antilles to the north and east. It is the Atlantic approach to the Panama Canal.',
    geography: {
      area: '2,754,000 km²',
      littoralNations: ['Colombia', 'Venezuela', 'Panama', 'Costa Rica', 'Nicaragua', 'Honduras', 'Guatemala', 'Mexico', 'Cuba', 'Jamaica', 'Haiti', 'Dominican Republic', '18 island states']
    },
    strategicSignificance: 'Commands the maritime approaches to the Panama Canal. Heavy transit of crude oil from Venezuela, Trinidad, and the U.S. Gulf Coast.',
    chokepointsConnected: [],
    majorPorts: [],
    currentTensions: [
      'Illicit maritime narcotics interdiction by the U.S. Joint Interagency Task Force South (JIATF-S)',
      'Venezuelan territorial claims over Guyana\\'s Essequibo offshore oil blocks (Stabroek block)'
    ],
    indiaConnection: {
      headline: 'CARICOM Diplomatic Solidarity & Energy Investments',
      points: [
        'India holds regular India-CARICOM summits, investing in solar energy and disaster resilience.',
        'Indian energy companies hold equity stakes in Venezuelan crude assets.'
      ]
    },
    sources: 'U.S. Southern Command / CARICOM Secretariat'
  }
};

export const CHOKEPOINTS = {
  STRAIT_OF_HORMUZ: {
    id: 'STRAIT_OF_HORMUZ',
    name: 'Strait of Hormuz',
    type: 'STRAIT',
    symbol: '◆',
    lat: 26.57,
    lng: 56.41,
    overview: 'The Strait of Hormuz is a narrow passage of water connecting the Persian Gulf with the Gulf of Oman and Arabian Sea. It is the single most critical oil chokepoint in the world, carrying over 21 million barrels of crude oil per day (~21% of global petroleum consumption) and nearly 20% of global LNG. At its narrowest, the shipping fairway is just 39 km wide, well within Iranian coastal anti-ship missile range.',
    geography: {
      width: '39 km to 96 km',
      depth: 'Varies from 70 to 100 meters',
      littoralNations: ['Iran', 'Oman', 'United Arab Emirates'],
      connects: 'Persian Gulf to Gulf of Oman & Arabian Sea'
    },
    strategicSignificance: {
      oilVolume: 'Over 21 million barrels of crude oil per day (~21% of global petroleum consumption).',
      lngVolume: 'Transports nearly 20% of the world’s liquefied natural gas, primarily from Qatar.',
      economicImpact: 'A full blockade would instantly send global oil prices skyrocketing beyond $150 per barrel, triggering an immediate worldwide stagflation crisis.'
    },
    militaryDynamics: 'Iran possesses thousands of anti-ship cruise missiles (Noor, Ghader, Qadir), smart sea mines, midget submarines (Ghadir class), and fast attack missile boats stationed on Abu Musa and Qeshm islands.',
    currentTensions: 'Periodic seizures of international tankers, drone surveillance encounters with U.S. carriers, and GPS spoofing affecting civilian navigation.',
    indiaConnection: {
      headline: 'India\\'s Critical Energy Lifeline',
      points: [
        'Over 60% of India’s imported crude oil and 85% of its natural gas passes through the Strait of Hormuz.',
        'The Indian Navy conducts dedicated convoy escort operations (Operation Sankalp) to safeguard Indian tankers transiting the strait.'
      ]
    },
    sources: 'U.S. Energy Information Administration (EIA) Chokepoints Analysis / Lloyd\\'s List Intelligence'
  },

  BAB_EL_MANDEB: {
    id: 'BAB_EL_MANDEB',
    name: 'Bab el-Mandeb ("Gate of Tears")',
    type: 'STRAIT',
    symbol: '◆',
    lat: 12.58,
    lng: 43.33,
    overview: 'Bab el-Mandeb is a narrow strait between Yemen on the Arabian Peninsula and Djibouti and Eritrea in the Horn of Africa, connecting the Red Sea to the Gulf of Aden. Following Houthi anti-ship ballistic missile and drone strikes in 2023–2024, commercial container traffic dropped by over 50%, forcing major shipping lines to divert around the Cape of Good Hope.',
    geography: {
      width: '29 km at narrowest point',
      littoralNations: ['Yemen', 'Djibouti', 'Eritrea'],
      connects: 'Red Sea to Gulf of Aden & Indian Ocean'
    },
    strategicSignificance: {
      oilVolume: 'Carried over 8.8 million barrels of petroleum and refined fuels daily prior to attacks.',
      tradeVolume: 'Conduit for over $1 Trillion in manufactured goods annually moving between Europe and Asia.'
    },
    militaryDynamics: 'Heavily targeted by Houthi shore-based anti-ship ballistic missiles, drones, and uncrewed explosive boats. Monitored by international naval bases clustered in Djibouti (US, France, China, Japan).',
    currentTensions: 'Active kinetic maritime denial campaign by Houthi forces; multinational coalition air strikes on launch sites in western Yemen.',
    indiaConnection: {
      headline: 'Severe Disruption to Indian Export Shipping',
      points: [
        'India’s agricultural, engineering, and textile exports to Europe faced freight rate increases of up to 200%.',
        'Indian Navy warships deployed continuously in the Gulf of Aden, executing multiple high-profile anti-piracy and firefighting rescues.'
      ]
    },
    sources: 'EIA World Oil Transit Chokepoints / Combined Maritime Forces / Indian Navy Information Fusion Centre'
  },

  MALACCA_STRAIT: {
    id: 'MALACCA_STRAIT',
    name: 'Malacca Strait',
    type: 'STRAIT',
    symbol: '◆',
    lat: 2.50,
    lng: 101.50,
    overview: 'The Malacca Strait is a narrow, 900-kilometer stretch of water between the Malay Peninsula and the Indonesian island of Sumatra. It is the world’s busiest maritime corridor, carrying over 94,000 vessels and 16 million barrels of oil daily. At the Phillips Channel near Singapore, the navigable fairway narrows to just 2.8 km, creating an immense strategic bottleneck known as China’s "Malacca Dilemma."',
    geography: {
      length: '900 km',
      width: 'Narrows to 2.8 km at Phillips Channel near Singapore',
      littoralNations: ['Indonesia', 'Malaysia', 'Singapore', 'Thailand'],
      connects: 'Indian Ocean (Andaman Sea) to South China Sea'
    },
    strategicSignificance: {
      oilVolume: 'Transports over 16 million barrels of crude oil daily (~4 times the volume of the Panama Canal).',
      tradeVolume: 'Carries ~40% of all global merchandise trade, serving as the economic lifeline for China, Japan, South Korea, and Taiwan.'
    },
    militaryDynamics: 'India commands the western approaches via the Andaman and Nicobar Command. The U.S. Seventh Fleet and regional navies maintain cooperative patrol arrangements (Malacca Strait Patrols - MSP).',
    currentTensions: 'China’s acute vulnerability to a naval blockade at Malacca during a high-intensity Taiwan conflict, prompting Chinese investments in alternative overland pipelines through Myanmar and Pakistan.',
    indiaConnection: {
      headline: 'India\\'s Ultimate Strategic Choke Point Leverage',
      points: [
        'India’s tri-service command at Port Blair sits directly across the Six-Degree and Ten-Degree Channels at the western mouth of Malacca.',
        'Provides the Indian Navy decisive interdiction leverage over Chinese crude oil shipping in the event of Himalayan border conflict.'
      ]
    },
    sources: 'ReCAAP Information Sharing Centre / Singapore Maritime and Port Authority / CSIS'
  },

  SUEZ_CANAL: {
    id: 'SUEZ_CANAL',
    name: 'Suez Canal',
    type: 'CANAL',
    symbol: '◆',
    lat: 30.70,
    lng: 32.34,
    overview: 'The Suez Canal is an artificial sea-level waterway in Egypt, connecting the Mediterranean Sea to the Red Sea. Opening in 1869, it eliminates the 7,000 km detour around Africa. It normally handles 12% of world trade, 7% of world oil, and 30% of daily container traffic, generating vital revenues for Egypt.',
    geography: {
      length: '193.3 km',
      country: 'Egypt (Suez Canal Authority)',
      connects: 'Mediterranean Sea (Port Said) to Red Sea (Suez)'
    },
    strategicSignificance: {
      tradeVolume: 'Handles approximately 12% of world trade, 7% of world oil, and 30% of daily container traffic.',
      transitCapacity: 'Averages 50 to 70 vessels per day in synchronized north-south convoys.'
    },
    currentTensions: 'Drastic decline in transit revenue (down over 50% in 2024) caused by security threats in the southern Red Sea approaches.',
    indiaConnection: {
      headline: 'Core Conduit for European Trade & Diplomatic Partnership with Egypt',
      points: [
        'India’s largest manufacturing export channel to Europe; India and Egypt elevated relations to a Strategic Partnership in 2023.'
      ]
    },
    sources: 'Suez Canal Authority / World Shipping Council'
  },

  BOSPHORUS_STRAIT: {
    id: 'BOSPHORUS_STRAIT',
    name: 'Bosphorus Strait (Istanbul Strait)',
    type: 'STRAIT',
    symbol: '◆',
    lat: 41.12,
    lng: 29.07,
    overview: 'The Bosphorus is a narrow strait in northwestern Turkey connecting the Black Sea with the Sea of Marmara and Mediterranean. Regulated under the 1936 Montreux Convention, Turkey exercises legal authority to restrict warship passage during wartime, barring belligerent warships following Russia\\'s invasion of Ukraine.',
    geography: {
      length: '31 km',
      width: 'Narrows to 700 meters at the narrowest point',
      country: 'Turkey',
      connects: 'Black Sea to Sea of Marmara & Mediterranean'
    },
    strategicSignificance: 'Sole maritime outlet for the Black Sea fleet of Russia and commercial exports of Ukraine, Romania, Bulgaria, and Georgia. Transports over 3 million barrels of Russian oil daily under normal conditions.',
    currentTensions: 'Strict Turkish enforcement of the Montreux Convention, preventing Russia from reinforcing its damaged Black Sea Fleet with vessels from other fleets.',
    indiaConnection: {
      headline: 'Grain, Sunflower Oil & Fertilizer Supply Chain Stability',
      points: [
        'Uninterrupted passage through the Bosphorus is vital for Indian sunflower oil and chemical fertilizer import contracts.'
      ]
    },
    sources: 'Turkish Ministry of Foreign Affairs / Montreux Convention 1936'
  },

  TAIWAN_STRAIT: {
    id: 'TAIWAN_STRAIT',
    name: 'Taiwan Strait',
    type: 'STRAIT',
    symbol: '◆',
    lat: 24.00,
    lng: 119.50,
    overview: 'The Taiwan Strait is a 160-kilometer wide body of water separating Taiwan from the Chinese mainland. Over 20% of global container trade passes through here. A blockade would halt over 50% of the world’s container ships and choke off 90% of advanced semiconductor exports, causing an estimated $10 Trillion global economic catastrophe.',
    geography: {
      width: '130 km to 180 km',
      depth: 'Relatively shallow (average 60 to 100 meters), canalized by sandbanks and mudflats',
      littoralEntities: ['Taiwan (Republic of China)', 'China (People\\'s Republic of China)'],
      connects: 'East China Sea to South China Sea'
    },
    strategicSignificance: {
      economicImpact: 'A conflict or blockade would halt over 50% of the world’s container ship fleet and choke off 90% of advanced semiconductor exports, causing an estimated $10 Trillion global economic catastrophe.'
    },
    militaryDynamics: 'Dense concentration of Chinese coastal ballistic missile batteries (DF-16, DF-21D), anti-ship cruise missiles, and daily PLA combat air-sea encirclement drills.',
    currentTensions: 'Erosion of the median line buffer zone; Chinese maritime militia harassment and grey-zone quarantine rehearsals.',
    indiaConnection: {
      headline: 'High-Tech Supply Security & Malacca Reciprocal Leverage',
      points: [
        'Over $200 Billion of Indian trade passes through or adjacent to the Taiwan Strait annually.',
        'A blockade would instantly shutter India’s domestic automobile, telecom, and electronics industries.'
      ]
    },
    sources: 'CSIS China Power / Taiwan Ministry of National Defense / Bloomberg Economics'
  }
};

export const PORTS = {
  MUMBAI_PORT: {
    id: 'MUMBAI_PORT',
    name: 'Jawaharlal Nehru Port (JNPT) / Mumbai Port',
    country: 'India',
    countryCode: 'IND',
    type: 'CONTAINER_PORT',
    category: 'Container & Commercial Mega-Hub',
    lat: 18.95,
    lng: 72.95,
    overview: 'JNPT (Nhava Sheva) and the historic Mumbai Port form India\\'s premier container maritime gateway, handling over 50% of the country\\'s total containerized cargo. Located on the Arabian Sea coast of Maharashtra, it connects directly to the Western Dedicated Freight Corridor (DFC).',
    capacity: 'Over 6.5 Million TEUs annually; multi-berth liquid bulk and crude handling terminals.',
    strategicRole: 'Commercial anchor of India\\'s western seaboard; adjacent to the Indian Navy Western Fleet headquarters in Mumbai.',
    connectedRoutes: ['Arabian Sea SLOC', 'Gulf-India Energy Corridor', 'Europe-India Suez Corridor'],
    indiaConnection: {
      headline: 'The Commercial Engine of Western India',
      points: ['Powers Indian automotive, engineering, and chemical exports across the globe.']
    },
    sources: 'Ministry of Ports, Shipping and Waterways (India) / JNPA Official Reports'
  },

  CHABAHAR_PORT: {
    id: 'CHABAHAR_PORT',
    name: 'Chabahar Port (Shahid Beheshti)',
    country: 'Iran',
    countryCode: 'IRN',
    type: 'STRATEGIC_PORT',
    category: 'Strategic Commercial & Transit Gateway',
    lat: 25.29,
    lng: 60.64,
    overview: 'Chabahar is an oceanic port in southeastern Iran on the Gulf of Oman, operated under a historic 10-year bilateral agreement by India to bypass Pakistan and connect directly to landlocked Afghanistan and Central Asia.',
    capacity: 'Current capacity 8.5 million tonnes; planned expansion to 33 million tonnes.',
    strategicRole: 'Strategic connectivity bypass; southern maritime terminus of the International North-South Transport Corridor (INSTC).',
    connectedRoutes: ['INSTC (International North-South Transport Corridor)', 'Oman Sea Transit'],
    indiaConnection: {
      headline: 'India\\'s Premier Overseas Strategic Port Investment',
      points: [
        'India Ports Global Limited (IPGL) signed a landmark 10-year contract in May 2024 committing $370 Million in investments.',
        'Successfully operates despite U.S. sanctions threat via specialized humanitarian carve-outs.'
      ]
    },
    sources: 'Ministry of External Affairs (India) / IPGL / Ports & Maritime Organization (Iran)'
  },

  VLADIVOSTOK_PORT: {
    id: 'VLADIVOSTOK_PORT',
    name: 'Port of Vladivostok',
    country: 'Russia',
    countryCode: 'RUS',
    type: 'NAVAL_PORT',
    category: 'Naval HQ & Pacific Commercial Terminal',
    lat: 43.11,
    lng: 131.87,
    overview: 'Vladivostok is Russia\\'s largest Pacific port, the eastern terminus of the Trans-Siberian Railway, and headquarters of the Russian Navy\\'s Pacific Fleet. It anchors the Vladivostok–Chennai Eastern Maritime Corridor (EMC).',
    capacity: 'Over 25 million tonnes of cargo; ice-free operation maintained year-round by icebreaker escorts.',
    strategicRole: 'Home base for Russian nuclear-powered cruise missile submarines and Pacific carrier-killer surface combatants.',
    connectedRoutes: ['Northern Sea Route (NSR)', 'Eastern Maritime Corridor (Chennai-Vladivostok)', 'Sea of Japan Transit'],
    indiaConnection: {
      headline: 'Chennai–Vladivostok Maritime Corridor Anchor',
      points: [
        'The corridor slashes transit time between India and Russia from 40 days to 24 days, bypassing European choke points.',
        'Facilitates shipments of metallurgical coking coal, crude oil, and fertilizers directly to Indian ports.'
      ]
    },
    sources: 'Russian Ministry of Transport / Vladivostok Commercial Sea Port / MEA India'
  },

  NOVOROSSIYSK_PORT: {
    id: 'NOVOROSSIYSK_PORT',
    name: 'Port of Novorossiysk',
    country: 'Russia',
    countryCode: 'RUS',
    type: 'ENERGY_TERMINAL',
    category: 'Crude Oil & Grain Export Mega-Terminal',
    lat: 44.72,
    lng: 37.77,
    overview: 'Novorossiysk is Russia’s largest commercial port by volume, located on the Black Sea coast. It handles the majority of Russian seaborne oil exports and Siberian grain, alongside relocated units of the Russian Black Sea Fleet.',
    capacity: 'Handles over 140 million tonnes of cargo annually, including 1.5M barrels of oil daily.',
    strategicRole: 'Primary export lifeline for Russian Urals crude oil shipped to India, China, and Turkey.',
    connectedRoutes: ['Black Sea-Mediterranean Route', 'CPC Pipeline Maritime Conduit'],
    indiaConnection: {
      headline: 'Origin of Deeply Discounted Russian Crude Oil Deliveries',
      points: [
        'A significant proportion of the Russian crude oil delivered to Indian refineries (Jamnagar, Vadinar) loads at Novorossiysk.'
      ]
    },
    sources: 'Caspian Pipeline Consortium / Rosmorport Official Data'
  },

  SINGAPORE_PORT: {
    id: 'SINGAPORE_PORT',
    name: 'Port of Singapore',
    country: 'Singapore',
    countryCode: 'SGP',
    type: 'CONTAINER_PORT',
    category: 'Global Transshipment Super-Hub',
    lat: 1.26,
    lng: 103.82,
    overview: 'The Port of Singapore is the world’s largest transshipment port and premier bunkering (ship refueling) hub, situated at the southern end of the Malacca Strait, connecting 600 ports across 120 countries.',
    capacity: '39+ Million TEUs; Tuas Mega Port will reach 65 Million TEUs capacity upon completion in 2040.',
    strategicRole: 'Commands the maritime intersection between the Indian Ocean, South China Sea, and Pacific Ocean.',
    connectedRoutes: ['Malacca Strait Main Line', 'Pacific-Europe Transit', 'ASEAN Feeder Network'],
    indiaConnection: {
      headline: 'Primary Transshipment Hub for Indian Foreign Trade',
      points: [
        'A substantial share of Indian container exports are transshipped through Singapore to mother vessels bound for the Americas and East Asia.'
      ]
    },
    sources: 'Maritime and Port Authority of Singapore (MPA)'
  },

  SHANGHAI_PORT: {
    id: 'SHANGHAI_PORT',
    name: 'Port of Shanghai (Yangshan Deepwater)',
    country: 'China',
    countryCode: 'CHN',
    type: 'CONTAINER_PORT',
    category: 'World\\'s Busiest Container Port',
    lat: 30.63,
    lng: 122.06,
    overview: 'The Port of Shanghai has been the world’s busiest container port since 2010, handling over 49 million TEUs annually at the mouth of the Yangtze River. Anchored by the automated Yangshan Deepwater terminal.',
    capacity: '49.1 Million TEUs annually (world record); fully automated Phase IV terminal.',
    strategicRole: 'Economic powerhouse of the People’s Republic of China and primary destination for global resource imports.',
    connectedRoutes: ['Trans-Pacific Container Route', 'China-Europe Sea Express', 'East Asian Coastal SLOC'],
    indiaConnection: {
      headline: 'Major Origin of Indian Intermediate Electronics & API Imports',
      points: [
        'The majority of intermediate components and solar equipment imported into India originates from Shanghai maritime terminals.'
      ]
    },
    sources: 'Shanghai International Port Group (SIPG) / World Shipping Council'
  },

  ROTTERDAM_PORT: {
    id: 'ROTTERDAM_PORT',
    name: 'Port of Rotterdam',
    country: 'Netherlands',
    countryCode: 'NLD',
    type: 'CONTAINER_PORT',
    category: 'Europe\\'s Largest Deepwater Port',
    lat: 51.95,
    lng: 4.13,
    overview: 'Rotterdam is Europe’s largest seaport, located in the Rhine-Meuse-Scheldt delta on the North Sea coast. Features the Maasvlakte 2 reclaimed deep-water terminal capable of handling the largest 24,000+ TEU container vessels.',
    capacity: '440 million tonnes of total cargo; 14.5 Million TEUs.',
    strategicRole: 'Energy and container transshipment hub for Germany, France, and central European industrial economies.',
    connectedRoutes: ['North Sea SLOC', 'Transatlantic Trade Route', 'Rhine River Barge Inland Network'],
    indiaConnection: {
      headline: 'Prime Destination for Indian Exports into the European Union',
      points: ['Primary point of entry for Indian engineering goods, petroleum fuels, and textiles into northern Europe.']
    },
    sources: 'Port of Rotterdam Authority Annual Report'
  },

  LOS_ANGELES_PORT: {
    id: 'LOS_ANGELES_PORT',
    name: 'Port of Los Angeles / Long Beach',
    country: 'United States',
    countryCode: 'USA',
    type: 'CONTAINER_PORT',
    category: 'North America\\'s Premier Pacific Gateway',
    lat: 33.74,
    lng: -118.26,
    overview: 'The Port of Los Angeles (America\\'s Port) in San Pedro Bay handles the highest volume of containerized trade entering the Western Hemisphere, connecting directly to transcontinental rail networks across the United States.',
    capacity: '10.6 Million TEUs annually (combined complex exceeds 19M TEUs).',
    strategicRole: 'Commercial lifeline connecting Asian manufacturing centers to the consumer market of the United States.',
    connectedRoutes: ['Trans-Pacific Great Circle Route', 'Panama Canal Feeder Route'],
    indiaConnection: {
      headline: 'Major West Coast Port for Indian Consumer Exports',
      points: ['Handles significant volumes of Indian-manufactured apparel, pharmaceuticals, and consumer goods entering North America.']
    },
    sources: 'Port of Los Angeles Official Statistics / American Association of Port Authorities'
  },

  DJIBOUTI_PORT: {
    id: 'DJIBOUTI_PORT',
    name: 'Port of Djibouti (Doraleh)',
    country: 'Djibouti',
    countryCode: 'DJI',
    type: 'STRATEGIC_PORT',
    category: 'Strategic Military Choke Hub & Commercial Gateway',
    lat: 11.59,
    lng: 43.14,
    overview: 'Djibouti is a small nation in the Horn of Africa at the entrance to the Red Sea. Its strategic location hosts military bases from multiple global superpowers (USA Camp Lemonnier, China Doraleh base, France, Japan).',
    capacity: 'Primary maritime lifeline for landlocked Ethiopia (handling 95% of Ethiopian international trade).',
    strategicRole: 'Unmatched military listening post and naval staging hub guarding the Bab el-Mandeb chokepoint.',
    connectedRoutes: ['Bab el-Mandeb Red Sea Route', 'East Africa Coastal Route'],
    indiaConnection: {
      headline: 'Maritime Evacuation Staging Hub & Strategic Coordination',
      points: [
        'Used extensively by the Indian Navy and Air Force during Operation Rahat in 2015 to evacuate over 6,600 citizens from war-torn Yemen.'
      ]
    },
    sources: 'Djibouti Ports & Free Zones Authority (DPFZA) / CSIS Africa Program'
  },

  GWADAR_PORT: {
    id: 'GWADAR_PORT',
    name: 'Gwadar Port',
    country: 'Pakistan',
    countryCode: 'PAK',
    type: 'STRATEGIC_PORT',
    category: 'CPEC Maritime Flagship & Deepwater Port',
    lat: 25.12,
    lng: 62.33,
    overview: 'Gwadar is a deepwater port in southwestern Pakistan on the Arabian Sea coast, developed and operated by China as the crown jewel of the China-Pakistan Economic Corridor (CPEC).',
    capacity: 'Built to handle large bulk carriers; currently operates at modest commercial capacity.',
    strategicRole: 'Potential future dual-use naval replenishment base for the PLA Navy in the northern Arabian Sea.',
    connectedRoutes: ['CPEC Highway Overland Corridor', 'Persian Gulf Approach'],
    indiaConnection: {
      headline: 'Direct Competitor to India-Backed Chabahar Port',
      points: [
        'Located just 72 km east of Chabahar; monitored closely by the Indian Navy due to risks of Chinese naval staging close to Gujarat and Mumbai.'
      ]
    },
    sources: 'Gwadar Port Authority / China Overseas Port Holding Company (COPHC)'
  },

  COLOMBO_PORT: {
    id: 'COLOMBO_PORT',
    name: 'Port of Colombo',
    country: 'Sri Lanka',
    countryCode: 'LKA',
    type: 'CONTAINER_PORT',
    category: 'South Asian Transshipment Mega-Hub',
    lat: 6.94,
    lng: 79.84,
    overview: 'The Port of Colombo is the primary transshipment hub in South Asia, located at the southern tip of India near the world’s main East-West sea lanes, handling over 7.2 million TEUs annually.',
    capacity: '7.2+ Million TEUs; hosts the newly developed West Container Terminal (WCT) built by India’s Adani Ports ($553M commitment).',
    strategicRole: 'Key strategic balance point between Indian commercial interests and Chinese maritime infrastructure investments (CICT).',
    connectedRoutes: ['East-West Main Shipping Trunk Line', 'Bay of Bengal Feeder Network', 'Arabian Sea Shuttles'],
    indiaConnection: {
      headline: 'India\\'s Essential Neighborhood Transshipment Partner',
      points: [
        'Adani Ports partnered with Sri Lanka’s John Keells Holdings to build the West Container Terminal, countering Chinese dominance at CICT.'
      ]
    },
    sources: 'Sri Lanka Ports Authority (SLPA) / Adani Ports Official Disclosures'
  }
};

// Check if a point (lat, lng) falls inside a bounding box [minLat, minLng, maxLat, maxLng]
function isPointInBbox(lat, lng, bbox) {
  if (!bbox || bbox.length < 4) return false;
  const [minLat, minLng, maxLat, maxLng] = bbox;
  if (lat < minLat || lat > maxLat) return false;
  
  // Handle longitude wrap-around across 180 / -180
  if (minLng > maxLng) {
    return (lng >= minLng || lng <= maxLng);
  }
  return (lng >= minLng && lng <= maxLng);
}

// Find ocean or marginal sea entity at geographic coordinates
export function findMaritimeEntityAtCoordinates(lat, lng) {
  // 1. Check marginal seas first (smaller, more specific)
  for (const key of Object.keys(SEAS)) {
    const sea = SEAS[key];
    if (sea.bbox && isPointInBbox(lat, lng, sea.bbox)) {
      return sea;
    }
  }

  // 2. Check oceans second (bounded by coordinates)
  for (const key of Object.keys(OCEANS)) {
    const ocean = OCEANS[key];
    if (ocean.bbox && isPointInBbox(lat, lng, ocean.bbox)) {
      return ocean;
    }
  }

  // 3. Complete Global Water Fallback: every coordinate on Earth maps to the proper oceanic basin
  if (lat <= -60) return OCEANS.SOUTHERN_OCEAN;
  if (lat >= 66) return OCEANS.ARCTIC_OCEAN;
  
  // Indian Ocean sector (Africa 20°E to Australia/Indo 120°E below Asia)
  if (lng >= 20 && lng <= 120 && lat < 30) {
    return OCEANS.INDIAN_OCEAN;
  }
  // Atlantic Ocean sector (Americas -70°W to Europe/Africa 20°E)
  if (lng > -70 && lng < 20 && lat > -60 && lat < 66) {
    return OCEANS.ATLANTIC_OCEAN;
  }
  // Pacific Ocean sector (everything else in the Pacific basin)
  if ((lng >= 120 || lng <= -70) && lat > -60 && lat < 66) {
    return OCEANS.PACIFIC_OCEAN;
  }

  return OCEANS.INDIAN_OCEAN;
}

// Query any maritime entity by ID across oceans, seas, chokepoints, and ports
export function getMaritimeEntity(id) {
  if (!id) return null;
  const normalizedId = String(id).toUpperCase().replace(/[\\s-]+/g, '_');
  return OCEANS[normalizedId] || 
         SEAS[normalizedId] || 
         CHOKEPOINTS[normalizedId] || 
         PORTS[normalizedId] || 
         Object.values(OCEANS).find(e => e.id === id || e.name.toLowerCase() === id.toLowerCase()) ||
         Object.values(SEAS).find(e => e.id === id || e.name.toLowerCase() === id.toLowerCase()) ||
         Object.values(CHOKEPOINTS).find(e => e.id === id || e.name.toLowerCase() === id.toLowerCase()) ||
         Object.values(PORTS).find(e => e.id === id || e.name.toLowerCase() === id.toLowerCase()) ||
         null;
}

// Return unified list of all chokepoints and ports for 3D globe rendering and interaction
export function getAllMaritimeMarkers() {
  const markers = [];

  Object.values(CHOKEPOINTS).forEach(choke => {
    markers.push({
      id: choke.id,
      name: choke.name,
      type: choke.type || 'STRAIT',
      markerCategory: 'chokepoint',
      lat: choke.lat,
      lng: choke.lng,
      symbol: choke.symbol || '◆',
      color: 0x06b6d4, // Cyan
      data: choke
    });
  });

  Object.values(PORTS).forEach(port => {
    markers.push({
      id: port.id,
      name: port.name,
      country: port.country,
      type: port.type || 'PORT',
      markerCategory: 'port',
      lat: port.lat,
      lng: port.lng,
      symbol: '⚓',
      color: 0x10b981, // Emerald Green
      data: port
    });
  });

  return markers;
}

// Ocean and Sea centroids for subtle 3D text/sprite labels on the globe
export function getOceanAndSeaLabels() {
  const labels = [];
  Object.values(OCEANS).forEach(o => {
    labels.push({
      id: o.id,
      name: o.name.toUpperCase(),
      lat: o.center.lat,
      lng: o.center.lng,
      type: 'OCEAN',
      entity: o
    });
  });
  Object.values(SEAS).forEach(s => {
    labels.push({
      id: s.id,
      name: s.name.toUpperCase(),
      lat: s.center.lat,
      lng: s.center.lng,
      type: 'SEA',
      entity: s
    });
  });
  return labels;
}
`;

fs.writeFileSync(targetPath, maritimeCode, 'utf8');
console.log('Successfully updated src/data/geointelMaritime.js with all 5 Oceans, 14 Seas, and Connected Countries!');
