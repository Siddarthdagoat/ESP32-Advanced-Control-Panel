import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const targetFile = path.join(ROOT_DIR, 'src/data/geointelEventsData.js');

const eventsToAdd = `  {
    id: 'evt_greenland_superpower_scramble',
    title: 'Greenland Arctic Sovereignty & Superpower Rare Earth Scramble',
    headline: 'US, Denmark, and China compete for strategic access to world-class heavy rare earth deposits at Kvanefjeld and Tanbreez as polar sea routes open',
    category: 'diplomacy',
    priority: 'HIGH',
    status: 'Developing',
    confidence: 'VERIFIED',
    changeType: 'UPDATED',
    lat: 64.1835,
    lng: -51.7216,
    region: 'arctic',
    regionName: 'Arctic',
    sector: 'Kalaallit Nunaat (Nuuk & Southwest Mineral Belt)',
    publishedAt: new Date(Date.now() - 1000 * 60 * 180).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 35).toISOString(),
    actors: [
      { name: 'Naalakkersuisut (Greenland Government)', countryCode: 'GRL', flag: '🇬🇱', role: 'Premier Múte B. Egede & Act No. 20 Uranium Ban Enforcement' },
      { name: 'Kingdom of Denmark', countryCode: 'DNK', flag: '🇩🇰', role: 'Constitutional Realm Sovereignty & 3.9B DKK Annual Block Grant' },
      { name: 'United States Department of State', countryCode: 'USA', flag: '🇺🇸', role: 'Consulate in Nuuk & Mineral Security Partnership Integration' },
      { name: 'China (Shenghe Resources / Polar Silk Road)', countryCode: 'CHN', flag: '🇨🇳', role: 'Kvanefjeld Minority Stake & Arctic Resource Diplomacy' }
    ],
    whatHappened: 'Greenland is experiencing intense trilateral geopolitical competition. The US has expanded diplomatic and technical aid through its Nuuk consulate to integrate Greenland into Western critical mineral supply chains, following Denmark\\'s 2018 veto of Chinese bids to construct international airports in Nuuk and Ilulissat. Greenland\\'s parliament passed legislation prohibiting uranium mining, effectively halting the Chinese-backed Kvanefjeld rare earth project while boosting Western interest in the uranium-free Tanbreez heavy rare earth deposit.',
    whyItMatters: 'Greenland holds the world\\'s largest undeveloped reserves of heavy rare earth elements (dysprosium, terbium, neodymium) outside of China. These minerals are indispensable for permanent magnets in F-35 fighter jets, nuclear submarine drive motors, guided missiles, and electric vehicle drivetrains. Furthermore, Greenland commands the GIUK Gap and the western gateway to the opening Northwest Passage.',
    globalImpact: {
      defense: 'Secures alternative raw materials for Western defense industrial bases, breaking dependency on Chinese export quotas.',
      economy: 'Nuuk weighs mining royalty revenue against cultural and environmental preservation as it considers a future independence referendum.',
      energy: 'Accelerates supply chains for high-efficiency wind turbine generators and EV traction motors.',
      trade: 'European Union and United States establish bilateral raw materials partnerships with Nuuk.',
      shipping: 'Thawing Arctic sea ice opens summer navigation windows through Baffin Bay and the Davis Strait.',
      diplomacy: 'Highlights the delicate constitutional balance within the Danish Realm (Rigsfællesskabet) between Copenhagen and Nuuk.',
      security: 'NATO integrates Greenland deeper into North American aerospace and maritime domain awareness.'
    },
    indiaImpact: {
      documented: 'India released its official Arctic Policy in 2022, emphasizing scientific research, polar environmental monitoring, and sustainable development.',
      potential: 'Indian state mineral firm KABIL evaluates global critical mineral off-take opportunities, seeking non-monopoly sources of heavy rare earths for domestic semiconductor and clean-tech manufacturing.',
      analytical: 'New Delhi supports the peaceful scientific governance of the Arctic under UNCLOS, opposing unilateral superpower militarization while safeguarding research on polar ice melt linkages to the Indian Monsoon.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: Greenland will advance commercial licensing for non-radioactive heavy rare earth projects like Tanbreez with Western partners, while deferring an independence referendum until domestic mineral and fishing revenues can replace the Danish block grant.',
    sources: [
      { title: 'Government of Greenland (Naalakkersuisut) Mineral Authority', publisher: 'Naalakkersuisut', url: 'https://govmin.gl/', type: 'official' },
      { title: 'Danish Institute for International Studies (DIIS) Arctic Report', publisher: 'DIIS', url: 'https://www.diis.dk/', type: 'think_tank' },
      { title: 'Greenland–United States relations (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Greenland%E2%80%93United_States_relations', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['GRL', 'DNK', 'USA', 'CHN', 'CAN', 'IND'],
      maritime: ['ARCTIC_OCEAN', 'ATLANTIC_OCEAN'],
      concepts: ['RESOURCE_CURSE', 'STRATEGIC_AUTONOMY', 'TRADE_CORRIDOR', 'SLOC'],
      military: []
    }
  },
  {
    id: 'evt_greenland_pituffik_space_defense',
    title: 'Pituffik Space Base (Thule) Radar Modernization & Arctic Early Warning Intercept',
    headline: 'US Space Force modernizes Upgraded Early Warning Radar in Northwest Greenland to track hypersonic glide vehicles and Russian polar ICBM trajectories',
    category: 'military',
    priority: 'HIGH',
    status: 'Active',
    confidence: 'VERIFIED',
    changeType: 'NEW',
    lat: 76.5312,
    lng: -68.7031,
    region: 'arctic',
    regionName: 'Arctic',
    sector: 'Northwest Greenland / Pituffik Space Base (76°N)',
    publishedAt: new Date(Date.now() - 1000 * 60 * 240).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    actors: [
      { name: 'U.S. Space Force (12th Space Warning Squadron)', countryCode: 'USA', flag: '🇺🇸', role: 'Solid-State Phased-Array Radar Operations' },
      { name: 'Joint Arctic Command (Denmark)', countryCode: 'DNK', flag: '🇩🇰', role: 'Danish Defense Liaison & Air Policing Coordination' },
      { name: 'Greenlandic Local Authority', countryCode: 'GRL', flag: '🇬🇱', role: 'Sovereign Territorial Host & Environmental Oversight' }
    ],
    whatHappened: 'The United States Space Force executed hardware and software upgrades on the Upgraded Early Warning Radar (UEWR) at Pituffik Space Base (formerly Thule Air Base) in northwest Greenland. The facility is the northernmost US military installation on Earth, operating a dual-faced phased-array radar detecting ballistic missile launches and tracking low-Earth-orbit satellites across polar azimuths.',
    whyItMatters: 'Pituffik is the indispensable linchpin of North American aerospace defense (NORAD) and the missile defense sensor network protecting the continental US from trans-polar strikes by Russian or Chinese intercontinental ballistic missiles.',
    globalImpact: {
      defense: 'Enhances tracking sensitivity against next-generation Russian hypersonic glide vehicles (Avangard) and submarine-launched ballistic missiles.',
      economy: 'Provides multi-million dollar annual service contracts for Greenlandic and Danish logistics operators.',
      energy: 'Powered by independent diesel and dual-fuel microgrids capable of surviving extreme Arctic winter conditions.',
      trade: 'Guarantees the northernmost deep-water port access during the brief summer ice-break window.',
      shipping: 'Serves as an emergency communications and search-and-rescue node for opening polar maritime shipping routes.',
      diplomacy: 'Governed under the 1951 US-Denmark Defense Agreement and the 2004 Igaliku Agreement including the Greenland Home Rule government.',
      security: 'Deepens intelligence sharing between US Space Command and NATO allied surveillance networks.'
    },
    indiaImpact: {
      documented: 'India monitors global missile defense sensor architecture and outer space surveillance networks (Project NETRA) to benchmark sovereign space situational awareness.',
      potential: 'Understanding polar early-warning radar calibration informs Indian defense research on multi-layered ballistic missile defense (BMD Prithvi/Ashwin).',
      analytical: 'India advocates for the preservation of outer space and polar domains as peaceful global commons free of orbital weaponization.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: The US will invest further in satellite ground terminal redundancy and subsea fiber connectivity to Pituffik, making the base resilient against cyber disruption and electromagnetic pulse (EMP) threats.',
    sources: [
      { title: 'United States Space Force Pituffik Space Base Fact Sheet', publisher: 'US Space Force', url: 'https://www.spaceforce.mil/', type: 'official' },
      { title: 'Danish Ministry of Defence Arctic White Paper', publisher: 'Forsvarsministeriet', url: 'https://www.fmn.dk/', type: 'official' },
      { title: 'Pituffik Space Base (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Pituffik_Space_Base', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['USA', 'DNK', 'GRL', 'RUS'],
      maritime: ['ARCTIC_OCEAN'],
      concepts: ['DETERRENCE', 'EARLY_WARNING', 'BALLISTIC_MISSILE_DEFENSE', 'STRATEGIC_STABILITY'],
      military: []
    }
  },
`;

const content = fs.readFileSync(targetFile, 'utf8');

if (content.includes('evt_greenland_superpower_scramble')) {
  console.log('Greenland events already present in geointelEventsData.js');
} else {
  const marker = '    relatedEntities: {\n      countries: [\'USA\', \'CHN\', \'AUS\', \'IND\', \'JPN\', \'CAN\'],\n      maritime: [\'PACIFIC_OCEAN\', \'INDIAN_OCEAN\'],\n      concepts: [\'RESOURCE_CURSE\', \'STRATEGIC_AUTONOMY\', \'TRADE_CORRIDOR\', \'ECONOMIC_SANCTIONS\'],\n      military: []\n    }\n  }\n];';
  
  if (content.includes(marker)) {
    const updated = content.replace(marker, marker.replace('  }\n];', '  },\n' + eventsToAdd + '];'));
    fs.writeFileSync(targetFile, updated, 'utf8');
    console.log('Successfully injected Greenland events into geointelEventsData.js!');
  } else {
    // Fallback: replace the last ];
    const lastBracketIndex = content.lastIndexOf('];');
    if (lastBracketIndex !== -1) {
      const updated = content.slice(0, lastBracketIndex) + ',\n' + eventsToAdd + '];\n' + content.slice(lastBracketIndex + 2);
      fs.writeFileSync(targetFile, updated, 'utf8');
      console.log('Successfully injected Greenland events before final bracket in geointelEventsData.js!');
    }
  }
}
