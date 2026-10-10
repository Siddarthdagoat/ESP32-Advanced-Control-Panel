// GEOINTEL Geopolitical Intelligence Dataset
// Strict semantic color coding:
// RED: Active conflict / severe military tension
// ORANGE: High geopolitical tension
// YELLOW: Political instability / developing situation
// BLUE: Diplomatic / strategic cooperation
// PURPLE: Military / defence development
// CYAN: Strategic infrastructure / important location
// GREEN: Stable / cooperative development
// GRAY: No significant current event

import { INITIAL_INTELLIGENCE_EVENTS } from './geointelEventsData.js';

export const SEMANTIC_COLORS = {
  conflict: '#FFFFFF',
  tension: '#E8E8E8',
  instability: '#BDBDBD',
  diplomatic: '#E8E8E8',
  military: '#FFFFFF',
  strategic: '#E8E8E8',
  stable: '#888888',
  neutral: '#555555'
};


export const GLOBAL_REGIONS = [
  { id: 'world', name: 'WORLD', center: { lat: 20, lng: 20 }, zoom: 2.2 },
  { 
    id: 'south_asia', 
    name: 'SOUTH ASIA', 
    center: { lat: 22.0, lng: 79.0 }, 
    zoom: 1.45,
    events: 7, diplomatic: 9, military: 8, strategic: 4,
    brief: 'Himalayan deterrence posture, Indian Ocean maritime domain awareness, and bilateral friction management.'
  },
  { 
    id: 'middle_east', 
    name: 'MIDDLE EAST', 
    center: { lat: 28.0, lng: 48.0 }, 
    zoom: 1.45,
    events: 12, diplomatic: 6, military: 10, strategic: 6,
    brief: 'Red Sea maritime transit security, Persian Gulf energy choke defense, and multi-theater proxy escalation.'
  },
  { 
    id: 'east_asia', 
    name: 'EAST ASIA', 
    center: { lat: 30.0, lng: 125.0 }, 
    zoom: 1.45,
    events: 6, diplomatic: 8, military: 12, strategic: 8,
    brief: 'First Island Chain missile density, Taiwan Strait air defense patrol frequency, and semiconductor supply integrity.'
  },
  { 
    id: 'europe', 
    name: 'EUROPE', 
    center: { lat: 51.0, lng: 22.0 }, 
    zoom: 1.45,
    events: 8, diplomatic: 14, military: 16, strategic: 7,
    brief: 'Eastern Flank forward defense posture, Suwalki Gap reinforcement, and Baltic naval surveillance.'
  },
  { 
    id: 'indo_pacific', 
    name: 'INDO-PACIFIC', 
    center: { lat: 5.0, lng: 105.0 }, 
    zoom: 1.5,
    events: 11, diplomatic: 15, military: 18, strategic: 12,
    brief: 'Malacca Strait freedom of navigation, AUKUS sub deterrence architecture, and exclusive economic zone patrols.'
  },
  { 
    id: 'africa', 
    name: 'AFRICA', 
    center: { lat: 4.0, lng: 22.0 }, 
    zoom: 1.5,
    events: 9, diplomatic: 5, military: 7, strategic: 4,
    brief: 'Sahel counter-insurgency vacuums, Red Sea coastal littoral security, and critical mineral logistics security.'
  },
  { 
    id: 'north_america', 
    name: 'NORTH AMERICA', 
    center: { lat: 40.0, lng: -98.0 }, 
    zoom: 1.5,
    events: 2, diplomatic: 18, military: 14, strategic: 5,
    brief: 'NORAD aerospace warning integration, Arctic early-warning radar upgrades, and Pacific strategic redeployments.'
  }
];

export const COUNTRIES = [
  {
    id: 'IND',
    name: 'India',
    officialName: 'Republic of India',
    capital: 'New Delhi',
    region: 'South Asia',
    flag: '🇮🇳',
    lat: 20.5937,
    lng: 78.9629,
    status: 'Strategic Cooperation & Frontier Alert',
    statusColor: SEMANTIC_COLORS.diplomatic,
    activeEventsCount: 7,
    strategicLinksCount: 6,
    metrics: {
      defenseBudget: '$74.8 Billion (2024–25)',
      activeForces: '1,455,500 active military personnel',
      strategicReadiness: 'High Alert (Northern & Western Commands)',
      nuclearPosture: 'No First Use (Operational Triad)'
    },
    activities: [
      { type: 'conflict', label: 'Border tension', color: SEMANTIC_COLORS.conflict, desc: 'High-altitude mechanized readiness along Eastern Ladakh LAC.' },
      { type: 'military', label: 'Defence development', color: SEMANTIC_COLORS.military, desc: 'Commissioning of indigenous aircraft carriers & long-range missile interceptors.' },
      { type: 'diplomatic', label: 'Strategic partnership', color: SEMANTIC_COLORS.diplomatic, desc: 'QUAD maritime domain awareness & IMEC trade corridor anchoring.' },
      { type: 'strategic', label: 'Andaman & Nicobar Fortress', color: SEMANTIC_COLORS.strategic, desc: 'Upgrading naval air wings monitoring Malacca Strait chokepoint.' }
    ],
    relations: [
      { country: 'China', flag: '🇨🇳', status: 'Tension', color: SEMANTIC_COLORS.conflict, note: 'Line of Actual Control standoff and infrastructure competition' },
      { country: 'Pakistan', flag: '🇵🇰', status: 'Tension', color: SEMANTIC_COLORS.conflict, note: 'LoC ceasefire observation and asymmetric security focus' },
      { country: 'USA', flag: '🇺🇸', status: 'Strategic', color: SEMANTIC_COLORS.diplomatic, note: 'Major Defense Partner (BECA, COMCASA, critical tech initiative iCET)' },
      { country: 'Russia', flag: '🇷🇺', status: 'Strategic', color: SEMANTIC_COLORS.diplomatic, note: 'Special & Privileged Strategic Partnership (S-400 & hydrocarbon supply)' },
      { country: 'France', flag: '🇫🇷', status: 'Strategic', color: SEMANTIC_COLORS.diplomatic, note: 'Rafale aerospace synergy & joint Indian Ocean sovereign patrolling' },
      { country: 'Japan', flag: '🇯🇵', status: 'Cooperative', color: SEMANTIC_COLORS.stable, note: 'Indo-Pacific connectivity corridor & 2+2 diplomatic defense summits' }
    ],
    dossier: 'India maintains strategic autonomy across the Eurasian and Indo-Pacific geopolitical spheres, acting as the primary net maritime security provider in the Indian Ocean while deploying layered forward defenses across the Himalayan perimeter.',
    treaties: ['QUAD', 'BRICS', 'SCO', 'IMEC', 'G20', 'Colombo Security Conclave']
  },
  {
    id: 'CHN',
    name: 'China',
    officialName: "People's Republic of China",
    capital: 'Beijing',
    region: 'East Asia',
    flag: '🇨🇳',
    lat: 35.8617,
    lng: 104.1954,
    status: 'High Geopolitical Tension',
    statusColor: SEMANTIC_COLORS.tension,
    activeEventsCount: 9,
    strategicLinksCount: 8,
    metrics: {
      defenseBudget: '$236.1 Billion (Official Est.)',
      activeForces: '2,035,000 active personnel',
      strategicReadiness: 'High Alert (Eastern & Southern Theaters)',
      nuclearPosture: 'Rapid Silo Expansion & Hypersonic Glide'
    },
    activities: [
      { type: 'military', label: 'Taiwan Strait sorties', color: SEMANTIC_COLORS.conflict, desc: 'Regular multi-axis median line air-sea combat drills.' },
      { type: 'tension', label: 'South China Sea patrols', color: SEMANTIC_COLORS.tension, desc: 'Coast Guard water-cannon enforcement near Second Thomas Shoal.' },
      { type: 'strategic', label: 'Belt & Road port nodes', color: SEMANTIC_COLORS.strategic, desc: 'Gwadar, Hambantota, and Djibouti deep-water port access.' }
    ],
    relations: [
      { country: 'Russia', flag: '🇷🇺', status: 'Strategic', color: SEMANTIC_COLORS.diplomatic, note: 'No-Limits strategic partnership and dual-use industrial trade' },
      { country: 'USA', flag: '🇺🇸', status: 'Tension', color: SEMANTIC_COLORS.tension, note: 'Semiconductor restrictions, Taiwan deterrence, and tariff disputes' },
      { country: 'India', flag: '🇮🇳', status: 'Tension', color: SEMANTIC_COLORS.conflict, note: 'Himalayan LAC militarization and counter-balancing diplomacy' },
      { country: 'Philippines', flag: '🇵🇭', status: 'Tension', color: SEMANTIC_COLORS.conflict, note: 'Shoal sovereignty confrontations in West Philippine Sea' }
    ],
    dossier: 'Expanding blue-water PLAN naval footprint and anti-access/area-denial (A2/AD) envelopes across the First and Second Island Chains while accelerating civil-military fusion in AI and hypersonic technologies.',
    treaties: ['BRICS', 'SCO', 'RCEP', 'Belt and Road Initiative']
  },
  {
    id: 'USA',
    name: 'United States',
    officialName: 'United States of America',
    capital: 'Washington, D.C.',
    region: 'North America',
    flag: '🇺🇸',
    lat: 37.0902,
    lng: -95.7129,
    status: 'Global Deterrence & Alliance Command',
    statusColor: SEMANTIC_COLORS.diplomatic,
    activeEventsCount: 11,
    strategicLinksCount: 12,
    metrics: {
      defenseBudget: '$842.0 Billion (FY 2024)',
      activeForces: '1,328,000 active military personnel',
      strategicReadiness: 'Global Multi-Theater Command',
      nuclearPosture: 'Full Nuclear Triad (Global Prompt Strike)'
    },
    activities: [
      { type: 'military', label: 'Operation Prosperity Guardian', color: SEMANTIC_COLORS.conflict, desc: 'Combined maritime task force intercepting anti-ship missiles in Red Sea.' },
      { type: 'diplomatic', label: 'Indo-Pacific Alliance hardening', color: SEMANTIC_COLORS.diplomatic, desc: 'Trilateral cooperation with Japan and South Korea at Camp David.' },
      { type: 'military', label: 'NATO Eastern Flank rotations', color: SEMANTIC_COLORS.military, desc: 'Forward-stationed brigade combat teams in Poland and Romania.' }
    ],
    relations: [
      { country: 'Taiwan', flag: '🇹🇼', status: 'Strategic', color: SEMANTIC_COLORS.diplomatic, note: 'Taiwan Relations Act arms transfers and asymmetric defense support' },
      { country: 'UK', flag: '🇬🇧', status: 'Strategic', color: SEMANTIC_COLORS.diplomatic, note: 'Special Relationship, Five Eyes intelligence sharing, and AUKUS pillar' },
      { country: 'India', flag: '🇮🇳', status: 'Strategic', color: SEMANTIC_COLORS.diplomatic, note: 'Critical and emerging technology pact (iCET) and QUAD framework' },
      { country: 'Russia', flag: '🇷🇺', status: 'Conflict Proxy', color: SEMANTIC_COLORS.conflict, note: 'Full sanctions regime and Ukraine security assistance' },
      { country: 'China', flag: '🇨🇳', status: 'Strategic Competition', color: SEMANTIC_COLORS.tension, note: 'Technological containment and freedom of navigation operations' }
    ],
    dossier: 'Operating unified combatant commands across every global theater, prioritizing Indo-Pacific deterrence, European collective defense integrity under Article 5, and international maritime freedom of transit.',
    treaties: ['NATO', 'AUKUS', 'QUAD', 'Five Eyes', 'USMCA', 'ANZUS']
  },
  {
    id: 'RUS',
    name: 'Russia',
    officialName: 'Russian Federation',
    capital: 'Moscow',
    region: 'Eurasia',
    flag: '🇷🇺',
    lat: 61.5240,
    lng: 105.3188,
    status: 'Active Conflict & Wartime Economy',
    statusColor: SEMANTIC_COLORS.conflict,
    activeEventsCount: 8,
    strategicLinksCount: 5,
    metrics: {
      defenseBudget: '$140.0 Billion (approx. 6% GDP)',
      activeForces: '1,320,000 military personnel',
      strategicReadiness: 'Wartime Mobilization Active',
      nuclearPosture: 'Extensive Strategic & Tactical Stockpile'
    },
    activities: [
      { type: 'conflict', label: 'Ukraine Theater offensive', color: SEMANTIC_COLORS.conflict, desc: 'High-intensity attritional warfare along 1,000km eastern contact line.' },
      { type: 'military', label: 'Belarus nuclear integration', color: SEMANTIC_COLORS.military, desc: 'Non-strategic nuclear warhead storage facilities operationalized.' },
      { type: 'strategic', label: 'Northern Sea Route fortification', color: SEMANTIC_COLORS.strategic, desc: 'Arctic coastal defense Bastion systems and icebreaker flotillas.' }
    ],
    relations: [
      { country: 'China', flag: '🇨🇳', status: 'Strategic', color: SEMANTIC_COLORS.diplomatic, note: 'Economic backbone and dual-use technological import pipeline' },
      { country: 'Iran', flag: '🇮🇷', status: 'Military Pacts', color: SEMANTIC_COLORS.military, note: 'Shahed drone manufacturing tech transfer and air defense swaps' },
      { country: 'Belarus', flag: '🇧🇾', status: 'Union State', color: SEMANTIC_COLORS.military, note: 'Integrated joint regional military command and staging base' },
      { country: 'India', flag: '🇮🇳', status: 'Strategic Partner', color: SEMANTIC_COLORS.diplomatic, note: 'Crude oil exports and long-term joint defense manufacturing' },
      { country: 'USA', flag: '🇺🇸', status: 'Adversary', color: SEMANTIC_COLORS.conflict, note: 'New START treaty suspension and direct diplomatic chill' }
    ],
    dossier: 'Transitioned defense industry to 24/7 continuous wartime production, pivoting trade flows to Asian markets while employing grey-zone hybrid tactics and asymmetric cyber operations.',
    treaties: ['CSTO', 'BRICS', 'SCO', 'EAEU', 'Union State']
  },
  {
    id: 'UKR',
    name: 'Ukraine',
    officialName: 'Ukraine',
    capital: 'Kyiv',
    region: 'Europe',
    flag: '🇺🇦',
    lat: 48.3794,
    lng: 31.1656,
    status: 'Active High-Intensity Defense',
    statusColor: SEMANTIC_COLORS.conflict,
    activeEventsCount: 6,
    strategicLinksCount: 6,
    metrics: {
      defenseBudget: '$43.0 Billion + Foreign Aid',
      activeForces: '850,000 mobilized defense personnel',
      strategicReadiness: 'Full Wartime Martial Law',
      nuclearPosture: 'Non-Nuclear (Budapest Memo Signatory)'
    },
    activities: [
      { type: 'conflict', label: 'Donbas & South defensive operations', color: SEMANTIC_COLORS.conflict, desc: 'Combatting drone-guided glide bomb barrages and trench breakthroughs.' },
      { type: 'military', label: 'Black Sea sea-drone campaign', color: SEMANTIC_COLORS.military, desc: 'Magura V5 unmanned surface vessels forcing Russian fleet retreat.' },
      { type: 'strategic', label: 'Deep drone strikes on Russian refineries', color: SEMANTIC_COLORS.strategic, desc: 'Indigenous long-range UAVs targeting logistics 1,000km inside Russia.' }
    ],
    relations: [
      { country: 'USA', flag: '🇺🇸', status: 'Major Patron', color: SEMANTIC_COLORS.diplomatic, note: 'Patriot air defense, HIMARS, and intelligence telemetry feed' },
      { country: 'Poland', flag: '🇵🇱', status: 'Logistics Hub', color: SEMANTIC_COLORS.diplomatic, note: 'Rzeszów air transit hub channeling 90% of Western materiel' },
      { country: 'UK', flag: '🇬🇧', status: 'Strategic Pact', color: SEMANTIC_COLORS.diplomatic, note: '10-year security agreement, Storm Shadow cruise missiles' },
      { country: 'Russia', flag: '🇷🇺', status: 'Active War', color: SEMANTIC_COLORS.conflict, note: 'Territorial invasion and sovereignty war' }
    ],
    dossier: 'Pioneered modern drone swarm integration, precision long-range strikes against maritime targets, and total civil-military digital resilience via Starlink and electronic warfare innovations.',
    treaties: ['EU Candidate', 'Bilateral Security Treaties with 20+ nations']
  },
  {
    id: 'TWN',
    name: 'Taiwan',
    officialName: 'Republic of China (Taiwan)',
    capital: 'Taipei',
    region: 'East Asia',
    flag: '🇹🇼',
    lat: 23.6978,
    lng: 120.9605,
    status: 'High Asymmetric Preparedness',
    statusColor: SEMANTIC_COLORS.tension,
    activeEventsCount: 5,
    strategicLinksCount: 4,
    metrics: {
      defenseBudget: '$19.0 Billion (approx. 2.5% GDP)',
      activeForces: '215,000 active + 1.6M reservists',
      strategicReadiness: 'High Alert (Porcupine Strategy)',
      nuclearPosture: 'Non-Nuclear (Silicon Shield Guarantee)'
    },
    activities: [
      { type: 'tension', label: 'Strait grey-zone defense', color: SEMANTIC_COLORS.tension, desc: 'Tracking balloon incursions, naval blockades, and cognitive warfare.' },
      { type: 'strategic', label: 'Indigenous submarine program', color: SEMANTIC_COLORS.strategic, desc: 'Hai Kun-class diesel-electric attack subs deployed for deep trench chokepoints.' },
      { type: 'military', label: 'Asymmetric anti-ship missile ring', color: SEMANTIC_COLORS.military, desc: 'Hsiung Feng III and mobile Harpoon batteries guarding littoral shallows.' }
    ],
    relations: [
      { country: 'USA', flag: '🇺🇸', status: 'Security Guarantor', color: SEMANTIC_COLORS.diplomatic, note: 'Presidential Drawdown Authority and strategic ambiguity umbrella' },
      { country: 'Japan', flag: '🇯🇵', status: 'Adjacent Ally', color: SEMANTIC_COLORS.stable, note: 'Yonaguni base radar coordination 110km off Taiwan east coast' },
      { country: 'China', flag: '🇨🇳', status: 'Existential Threat', color: SEMANTIC_COLORS.conflict, note: 'Military intimidation and sovereignty contestation' }
    ],
    dossier: 'Produces over 90% of the world’s most advanced sub-3nm semiconductors (TSMC), turning the island into an indispensable global technological chokepoint while fortifying asymmetric coastal defenses.',
    treaties: ['Taiwan Relations Act (US)', 'APEC']
  },
  {
    id: 'ISR',
    name: 'Israel',
    officialName: 'State of Israel',
    capital: 'Jerusalem',
    region: 'Middle East',
    flag: '🇮🇱',
    lat: 31.0461,
    lng: 34.8516,
    status: 'Multi-Front Kinetic Warfare',
    statusColor: SEMANTIC_COLORS.conflict,
    activeEventsCount: 7,
    strategicLinksCount: 5,
    metrics: {
      defenseBudget: '$30.5 Billion',
      activeForces: '170,000 active + 300,000 reservists',
      strategicReadiness: 'Maximum Alert (North & South)',
      nuclearPosture: 'Undeclared Strategic Deterrent (Jericho III)'
    },
    activities: [
      { type: 'conflict', label: 'Northern Front missile suppression', color: SEMANTIC_COLORS.conflict, desc: 'Air strikes and ground operations against Hezbollah launch complexes.' },
      { type: 'military', label: 'Multi-layer air defense shield', color: SEMANTIC_COLORS.military, desc: 'Iron Dome, David’s Sling, and Arrow 3 intercepting ballistic volleys.' },
      { type: 'conflict', label: 'Gaza operational encirclement', color: SEMANTIC_COLORS.conflict, desc: 'Urban tunnel system neutralization and hostage rescue operations.' }
    ],
    relations: [
      { country: 'USA', flag: '🇺🇸', status: 'Ironclad Ally', color: SEMANTIC_COLORS.diplomatic, note: 'Joint missile defense funding, THAAD deployment, intelligence sharing' },
      { country: 'Iran', flag: '🇮🇷', status: 'Direct Conflict', color: SEMANTIC_COLORS.conflict, note: 'Direct ballistic strikes and cyber sabotage campaigns' },
      { country: 'Saudi Arabia', flag: '🇸🇦', status: 'Backchannel Track', color: SEMANTIC_COLORS.neutral, note: 'Normalization talks paused during regional active escalation' }
    ],
    dossier: 'Possesses the most technologically dense integrated air defense and SIGINT surveillance network in the Middle East, conducting multi-front operations against Axis of Resistance non-state actors and state ballistic threats.',
    treaties: ['Abraham Accords', 'US-Israel Strategic Defense MoU']
  },
  {
    id: 'IRN',
    name: 'Iran',
    officialName: 'Islamic Republic of Iran',
    capital: 'Tehran',
    region: 'Middle East',
    flag: '🇮🇷',
    lat: 32.4279,
    lng: 53.6880,
    status: 'High Tension & Proxy Coordination',
    statusColor: SEMANTIC_COLORS.tension,
    activeEventsCount: 8,
    strategicLinksCount: 5,
    metrics: {
      defenseBudget: '$10.2 Billion',
      activeForces: '610,000 personnel (IRGC + Artesh)',
      strategicReadiness: 'High Alert (Ballistic Missile Corps)',
      nuclearPosture: 'Near-Breakout Uranium Enrichment (60%+)'
    },
    activities: [
      { type: 'military', label: 'Underground missile city readiness', color: SEMANTIC_COLORS.conflict, desc: 'Fattah hypersonic and Emad ballistic missiles armed in hardened silos.' },
      { type: 'conflict', label: 'Axis of Resistance command', color: SEMANTIC_COLORS.conflict, desc: 'Supplying anti-ship ballistic missiles to Houthis and precision rockets to Hezbollah.' },
      { type: 'strategic', label: 'Strait of Hormuz fast-boat swarms', color: SEMANTIC_COLORS.strategic, desc: 'IRGC Navy minelaying and commercial tanker boarding capabilities.' }
    ],
    relations: [
      { country: 'Russia', flag: '🇷🇺', status: 'Military Synergy', color: SEMANTIC_COLORS.military, note: 'Drones and missiles for Su-35 fighters and S-400 radar components' },
      { country: 'China', flag: '🇨🇳', status: 'Strategic Accord', color: SEMANTIC_COLORS.diplomatic, note: '25-Year Strategic Cooperation Agreement and discounted oil trade' },
      { country: 'Israel', flag: '🇮🇱', status: 'Active War', color: SEMANTIC_COLORS.conflict, note: 'Direct ballistic strikes, proxy conflict, and nuclear facility defense' },
      { country: 'USA', flag: '🇺🇸', status: 'Adversary', color: SEMANTIC_COLORS.conflict, note: 'Maximum pressure sanctions and Persian Gulf naval confrontations' }
    ],
    dossier: 'Fields the largest arsenal of ballistic and cruise missiles in the Middle East, leveraging asymmetric regional proxies to exert leverage over the Strait of Hormuz and Bab el-Mandeb chokepoints.',
    treaties: ['SCO', 'BRICS', 'Iran-China 25-Year Accord']
  },
  {
    id: 'SAU',
    name: 'Saudi Arabia',
    officialName: 'Kingdom of Saudi Arabia',
    capital: 'Riyadh',
    region: 'Middle East',
    flag: '🇸🇦',
    lat: 23.8859,
    lng: 45.0792,
    status: 'Strategic Transition & Energy Hedging',
    statusColor: SEMANTIC_COLORS.diplomatic,
    activeEventsCount: 4,
    strategicLinksCount: 6,
    metrics: {
      defenseBudget: '$75.8 Billion (Top 5 Globally)',
      activeForces: '257,000 active personnel',
      strategicReadiness: 'Air & Coastal Defense Vigilance',
      nuclearPosture: 'Civilian Nuclear Pursuit (Pact Negotiating)'
    },
    activities: [
      { type: 'diplomatic', label: 'Beijing-brokered détente', color: SEMANTIC_COLORS.diplomatic, desc: 'Maintaining delicate diplomatic channels with Tehran to safeguard oil infrastructure.' },
      { type: 'strategic', label: 'Vision 2030 Defense Localisation', color: SEMANTIC_COLORS.strategic, desc: 'Targeting 50% domestic military spending retention by 2030.' },
      { type: 'diplomatic', label: 'US Mutual Defense Treaty Talks', color: SEMANTIC_COLORS.diplomatic, desc: 'Seeking formal security pact in exchange for civil nuclear technology.' }
    ],
    relations: [
      { country: 'USA', flag: '🇺🇸', status: 'Key Defense Partner', color: SEMANTIC_COLORS.diplomatic, note: 'Air defense interceptor resupply and strategic oil pricing dialogues' },
      { country: 'China', flag: '🇨🇳', status: 'Top Hydrocarbon Buyer', color: SEMANTIC_COLORS.stable, note: 'Yuan-denominated energy sales and petrochemical refinery hubs' },
      { country: 'India', flag: '🇮🇳', status: 'Energy & Tech Partner', color: SEMANTIC_COLORS.stable, note: 'Anchor state in the India-Middle East-Europe Economic Corridor (IMEC)' }
    ],
    dossier: 'The premier swing producer of OPEC+, modernizing its military with Western platforms while maintaining strategic trade balance with Beijing and managing southern border security along the Red Sea.',
    treaties: ['GCC', 'OPEC+', 'Arab League', 'IMEC Partner']
  },
  {
    id: 'JPN',
    name: 'Japan',
    officialName: 'State of Japan',
    capital: 'Tokyo',
    region: 'East Asia',
    flag: '🇯🇵',
    lat: 36.2048,
    lng: 138.2529,
    status: 'Counter-Strike Expansion & Deterrence',
    statusColor: SEMANTIC_COLORS.military,
    activeEventsCount: 4,
    strategicLinksCount: 7,
    metrics: {
      defenseBudget: '$55.9 Billion (2% GDP Target by 2027)',
      activeForces: '247,150 JSDF personnel',
      strategicReadiness: 'Nansei Islands Fortress Line',
      nuclearPosture: 'Non-Nuclear (US Nuclear Umbrella)'
    },
    activities: [
      { type: 'military', label: 'Tomahawk cruise missile acquisition', color: SEMANTIC_COLORS.military, desc: 'Equipping Aegis destroyers with stand-off counter-strike strike capability.' },
      { type: 'strategic', label: 'Southwestern Island chain militarization', color: SEMANTIC_COLORS.strategic, desc: 'Missile batteries on Ishigaki, Miyakojima, and Yonaguni facing Taiwan.' },
      { type: 'diplomatic', label: 'QUAD & Trilateral coordination', color: SEMANTIC_COLORS.diplomatic, desc: 'Deepening interoperability with US Indo-Pacific Command and Australia.' }
    ],
    relations: [
      { country: 'USA', flag: '🇺🇸', status: 'Security Treaty Ally', color: SEMANTIC_COLORS.diplomatic, note: 'Hosting 54,000 forward-deployed US troops, 7th Fleet at Yokosuka' },
      { country: 'China', flag: '🇨🇳', status: 'Senkaku Standoff', color: SEMANTIC_COLORS.tension, note: 'Coast guard incursions in contiguous zone around Diaoyu/Senkaku islands' },
      { country: 'India', flag: '🇮🇳', status: 'Special Global Partner', color: SEMANTIC_COLORS.stable, note: 'Joint naval Malabar maneuvers and high-speed rail/infrastructure financing' }
    ],
    dossier: 'Historic transformation of post-war defense policy, acquiring stand-off counterstrike capabilities and constructing island fortresses across the Ryukyu arc to defend the First Island Chain.',
    treaties: ['US-Japan Security Treaty', 'QUAD', 'G7', 'CPTPP']
  },
  {
    id: 'KOR',
    name: 'South Korea',
    officialName: 'Republic of Korea',
    capital: 'Seoul',
    region: 'East Asia',
    flag: '🇰🇷',
    lat: 35.9078,
    lng: 127.7669,
    status: 'Northern DMZ Alert & Defense Export Power',
    statusColor: SEMANTIC_COLORS.military,
    activeEventsCount: 5,
    strategicLinksCount: 5,
    metrics: {
      defenseBudget: '$44.7 Billion',
      activeForces: '500,000 active personnel',
      strategicReadiness: 'Kill Chain & KAMD 24/7 Watch',
      nuclearPosture: 'US Nuclear Consultation Group (NCG)'
    },
    activities: [
      { type: 'military', label: 'Three-Axis Defense System', color: SEMANTIC_COLORS.military, desc: 'Preemptive strike (Kill Chain), missile intercept (KAMD), and massive punishment.' },
      { type: 'strategic', label: 'Global arms exporter surge', color: SEMANTIC_COLORS.strategic, desc: 'K2 Black Panther tanks, K9 Howitzers, and FA-50 jets supplied to NATO frontlines.' },
      { type: 'tension', label: 'Northern missile defense drills', color: SEMANTIC_COLORS.tension, desc: 'Simulating retaliatory strikes against North Korean underground launch tubes.' }
    ],
    relations: [
      { country: 'USA', flag: '🇺🇸', status: 'Mutual Defense Treaty', color: SEMANTIC_COLORS.diplomatic, note: '28,500 US troops stationed, Washington Declaration nuclear umbrella' },
      { country: 'North Korea', flag: '🇰🇵', status: 'Armistice Line Foe', color: SEMANTIC_COLORS.conflict, note: 'Hypersonic tests, artillery barrages, and spy satellite launches' },
      { country: 'Poland', flag: '🇵🇱', status: 'Major Arms Pact', color: SEMANTIC_COLORS.military, note: '$14B defense procurement contract for modern armored fighting vehicles' }
    ],
    dossier: 'Possesses one of the most industrialized precision defense manufacturing bases in the world, maintaining continuous deterrence along the 38th parallel while supplying heavy armor to European allies.',
    treaties: ['ROK-US Alliance', 'IP4 (NATO Partner)']
  },
  {
    id: 'PRK',
    name: 'North Korea',
    officialName: "Democratic People's Republic of Korea",
    capital: 'Pyongyang',
    region: 'East Asia',
    flag: '🇰🇵',
    lat: 40.3399,
    lng: 127.5101,
    status: 'Ballistic Escalation & Nuclear Doctrine',
    statusColor: SEMANTIC_COLORS.conflict,
    activeEventsCount: 5,
    strategicLinksCount: 2,
    metrics: {
      defenseBudget: 'Estimated ~25–35% of GDP',
      activeForces: '1,280,000 active military personnel',
      strategicReadiness: 'Preemptive Nuclear Strike Doctrine',
      nuclearPosture: '50+ Warheads, Solid-Fuel ICBMs (Hwasong-18)'
    },
    activities: [
      { type: 'conflict', label: 'Hwasong-18 solid-fuel ICBM tests', color: SEMANTIC_COLORS.conflict, desc: 'Demonstrating continental US strike range with rapid road-mobile launch.' },
      { type: 'military', label: 'Artillery ammunition shipments to Russia', color: SEMANTIC_COLORS.military, desc: 'Rail deliveries of 152mm shells and KN-23 tactical ballistic missiles.' },
      { type: 'tension', label: 'Reconnaissance satellite launches', color: SEMANTIC_COLORS.tension, desc: 'Orbiting military optical sensors to track US-ROK fleet maneuvers.' }
    ],
    relations: [
      { country: 'Russia', flag: '🇷🇺', status: 'Comprehensive Treaty', color: SEMANTIC_COLORS.military, note: 'Mutual defense clause signed in 2024; munitions swapped for space tech' },
      { country: 'China', flag: '🇨🇳', status: 'Economic Lifeline', color: SEMANTIC_COLORS.diplomatic, note: 'Cross-border oil, rail transit, and diplomatic veto shelter at UN' },
      { country: 'South Korea', flag: '🇰🇷', status: 'Designated Hostile State', color: SEMANTIC_COLORS.conflict, note: 'Abolished unification agencies; codified South Korea as principal enemy' }
    ],
    dossier: 'Rapidly transitioned from liquid-fuel prototypes to road-mobile solid-fuel ICBMs and tactical nuclear warhead deployment, formally abandoning reconciliation with Seoul and entering mutual defense pacts with Moscow.',
    treaties: ['DPRK-Russia Comprehensive Strategic Partnership Treaty']
  },
  {
    id: 'GBR',
    name: 'United Kingdom',
    officialName: 'United Kingdom of Great Britain and Northern Ireland',
    capital: 'London',
    region: 'Europe',
    flag: '🇬🇧',
    lat: 55.3781,
    lng: -3.4360,
    status: 'Global Power Projection & NATO Pillar',
    statusColor: SEMANTIC_COLORS.diplomatic,
    activeEventsCount: 6,
    strategicLinksCount: 9,
    metrics: {
      defenseBudget: '$68.5 Billion (2.3% GDP)',
      activeForces: '142,000 personnel',
      strategicReadiness: 'Continuous At-Sea Deterrent (Vanguard SSBNs)',
      nuclearPosture: 'Trident D5 Submarine-Launched Ballistic Missiles'
    },
    activities: [
      { type: 'military', label: 'AUKUS SSN-AUKUS design lead', color: SEMANTIC_COLORS.military, desc: 'Developing next-generation nuclear attack submarine fleet with Australia.' },
      { type: 'conflict', label: 'Red Sea airstrikes against Houthis', color: SEMANTIC_COLORS.conflict, desc: 'RAF Typhoon jets operating from Cyprus targeting drone command centers.' },
      { type: 'diplomatic', label: 'Ukraine security lead', color: SEMANTIC_COLORS.diplomatic, desc: 'Pioneered Western tank and long-range cruise missile (Storm Shadow) supplies.' }
    ],
    relations: [
      { country: 'USA', flag: '🇺🇸', status: 'Special Relationship', color: SEMANTIC_COLORS.diplomatic, note: 'Unparalleled nuclear and Five Eyes signals intelligence integration' },
      { country: 'Ukraine', flag: '🇺🇦', status: 'Primary Ally', color: SEMANTIC_COLORS.diplomatic, note: '100-year defense agreement and high-level battlefield intelligence sharing' },
      { country: 'India', flag: '🇮🇳', status: 'Roadmap 2030', color: SEMANTIC_COLORS.stable, note: 'Carrier strike group interoperability and free trade negotiations' }
    ],
    dossier: 'Maintains continuous sea-based nuclear deterrence through Vanguard-class submarines, serving as NATO’s leading European naval and intelligence pillar while projecting influence across the Indo-Pacific.',
    treaties: ['NATO', 'AUKUS', 'Five Eyes', 'JEF', 'G7']
  },
  {
    id: 'FRA',
    name: 'France',
    officialName: 'French Republic',
    capital: 'Paris',
    region: 'Europe',
    flag: '🇫🇷',
    lat: 46.2276,
    lng: 2.2137,
    status: 'Strategic Autonomy & Nuclear Power',
    statusColor: SEMANTIC_COLORS.diplomatic,
    activeEventsCount: 5,
    strategicLinksCount: 8,
    metrics: {
      defenseBudget: '$47.2 Billion',
      activeForces: '203,000 military personnel',
      strategicReadiness: 'Independent Sovereign Deterrent',
      nuclearPosture: 'Air-Launched ASMP-A & Triomphant SSBNs'
    },
    activities: [
      { type: 'military', label: 'NATO Eastern Flank battle group lead', color: SEMANTIC_COLORS.military, desc: 'Commanding multinational forward battlegroup in Cincu, Romania.' },
      { type: 'strategic', label: 'Indo-Pacific sovereign presence', color: SEMANTIC_COLORS.strategic, desc: 'Deploying naval forces from Réunion and French Polynesia EEZs.' },
      { type: 'diplomatic', label: 'European strategic autonomy push', color: SEMANTIC_COLORS.diplomatic, desc: 'Advocating independent European sovereign defense industrial capability.' }
    ],
    relations: [
      { country: 'India', flag: '🇮🇳', status: 'Comprehensive Strategic', color: SEMANTIC_COLORS.diplomatic, note: 'Rafale-M for Indian Navy, Scorpene submarines, joint jet engine R&D' },
      { country: 'USA', flag: '🇺🇸', status: 'Historic Ally', color: SEMANTIC_COLORS.diplomatic, note: 'NATO partner with independent strategic command and posture' },
      { country: 'Russia', flag: '🇷🇺', status: 'Adversary', color: SEMANTIC_COLORS.conflict, note: 'Advocated strategic ambiguity regarding potential troop deployment' }
    ],
    dossier: 'The sole indigenous nuclear-armed European Union power with global overseas territories, championing European defense autonomy with completely independent launch codes and sovereign military aerospace.',
    treaties: ['NATO', 'European Union', 'UNSC Permanent Member', 'G7']
  },
  {
    id: 'DEU',
    name: 'Germany',
    officialName: 'Federal Republic of Germany',
    capital: 'Berlin',
    region: 'Europe',
    flag: '🇩🇪',
    lat: 51.1657,
    lng: 10.4515,
    status: 'Zeitenwende Rearmament & NATO Brigade',
    statusColor: SEMANTIC_COLORS.military,
    activeEventsCount: 4,
    strategicLinksCount: 7,
    metrics: {
      defenseBudget: '$73.4 Billion (including special fund)',
      activeForces: '181,000 Bundeswehr personnel',
      strategicReadiness: 'Permanent Brigade in Lithuania',
      nuclearPosture: 'NATO Nuclear Sharing (Tornado/F-35A)'
    },
    activities: [
      { type: 'military', label: 'Permanent Lithuania Brigade 45', color: SEMANTIC_COLORS.military, desc: 'First permanent German foreign troop stationing since WWII to guard Suwalki Gap.' },
      { type: 'strategic', label: 'European Sky Shield Initiative (ESSI)', color: SEMANTIC_COLORS.strategic, desc: 'Leading 21-nation air defense procurement of Iris-T, Patriot, and Arrow 3.' },
      { type: 'diplomatic', label: 'European defense industrial consolidation', color: SEMANTIC_COLORS.diplomatic, desc: 'Co-funding main ground combat tank systems (MGCS) with France.' }
    ],
    relations: [
      { country: 'USA', flag: '🇺🇸', status: 'Alliance Backbone', color: SEMANTIC_COLORS.diplomatic, note: 'Ramstein Air Base hosts US European Command and NATO Air HQ' },
      { country: 'Ukraine', flag: '🇺🇦', status: 'Top European Donor', color: SEMANTIC_COLORS.diplomatic, note: 'Leopard 2 tanks, Iris-T air defense, and artillery systems' },
      { country: 'Poland', flag: '🇵🇱', status: 'Border Defense Partner', color: SEMANTIC_COLORS.stable, note: 'Patriot battery stationing along the Vistula River corridor' }
    ],
    dossier: 'Undergoing the historic "Zeitenwende" transition with a €100B special military fund, purchasing F-35A stealth jets and permanently basing a 4,800-soldier combat brigade in the Baltic states.',
    treaties: ['NATO', 'European Union', 'G7', 'ESSI']
  },
  {
    id: 'TUR',
    name: 'Turkey',
    officialName: 'Republic of Türkiye',
    capital: 'Ankara',
    region: 'Middle East',
    flag: '🇹🇷',
    lat: 38.9637,
    lng: 35.2433,
    status: 'Strait Gatekeeper & Drone Hegemony',
    statusColor: SEMANTIC_COLORS.strategic,
    activeEventsCount: 6,
    strategicLinksCount: 7,
    metrics: {
      defenseBudget: '$40.0 Billion',
      activeForces: '425,000 personnel (2nd largest in NATO)',
      strategicReadiness: 'Montreux Convention Enforcement',
      nuclearPosture: 'NATO Nuclear Sharing at Incirlik Air Base'
    },
    activities: [
      { type: 'strategic', label: 'Montreux Convention blockade', color: SEMANTIC_COLORS.strategic, desc: 'Banning belligerent warships from passing through Bosphorus into Black Sea.' },
      { type: 'military', label: 'KAAN 5th-gen fighter prototype tests', color: SEMANTIC_COLORS.military, desc: 'Advancing indigenous stealth fighter and Bayraktar TB3 drone carrier ops.' },
      { type: 'conflict', label: 'Northern Syria & Iraq buffer ops', color: SEMANTIC_COLORS.conflict, desc: 'Targeting PKK/YPG positions with armed drone strikes.' }
    ],
    relations: [
      { country: 'Russia', flag: '🇷🇺', status: 'Transactional Accord', color: SEMANTIC_COLORS.tension, note: 'Akkuyu nuclear plant trade while closing Bosphorus to Russian fleet' },
      { country: 'USA', flag: '🇺🇸', status: 'Complex NATO Ally', color: SEMANTIC_COLORS.diplomatic, note: 'F-16 modernization deal approved following Sweden NATO accession' },
      { country: 'Ukraine', flag: '🇺🇦', status: 'Maritime Drone Partner', color: SEMANTIC_COLORS.stable, note: 'Building Ada-class corvettes for Ukrainian Navy in Istanbul' }
    ],
    dossier: 'Controls the Black Sea maritime bottleneck at the Bosphorus, fielding NATO’s second-largest standing army and balancing pragmatic ties with Moscow and Washington.',
    treaties: ['NATO', 'Montreux Convention', 'Turkic Council']
  },
  {
    id: 'POL',
    name: 'Poland',
    officialName: 'Republic of Poland',
    capital: 'Warsaw',
    region: 'Europe',
    flag: '🇵🇱',
    lat: 51.9194,
    lng: 19.1451,
    status: 'NATO Eastern Bulwark & Rapid Armament',
    statusColor: SEMANTIC_COLORS.military,
    activeEventsCount: 5,
    strategicLinksCount: 6,
    metrics: {
      defenseBudget: '$35.0 Billion (4.12% GDP - Highest in NATO)',
      activeForces: '216,000 soldiers (Target 300,000)',
      strategicReadiness: 'High Alert (Belarus border & Suwalki)',
      nuclearPosture: 'Requesting NATO Nuclear Sharing stationing'
    },
    activities: [
      { type: 'military', label: 'Shield East (Tarcza Wschód) fortification', color: SEMANTIC_COLORS.military, desc: '$2.5B heavy anti-tank ditches, minefields, and bunkers on Belarus frontier.' },
      { type: 'strategic', label: 'Logistics conduit for Ukraine defense', color: SEMANTIC_COLORS.strategic, desc: 'Securing the Rzeszów-Jasionka logistics hub against sabotage and recon.' },
      { type: 'military', label: 'Mass armor modernization', color: SEMANTIC_COLORS.military, desc: 'Absorbing 1,000 K2 Black Panther tanks, Abrams M1A2 SEPv3, and HIMARS.' }
    ],
    relations: [
      { country: 'USA', flag: '🇺🇸', status: 'Key Strategic Ally', color: SEMANTIC_COLORS.diplomatic, note: 'US V Corps forward headquarters established in Poznań permanently' },
      { country: 'Belarus', flag: '🇧🇾', status: 'Severe Friction', color: SEMANTIC_COLORS.conflict, note: 'Weaponized migrant incursions and Wagner mercenary staging alerts' },
      { country: 'South Korea', flag: '🇰🇷', status: 'Industrial Defense Ally', color: SEMANTIC_COLORS.military, note: 'Largest bilateral land weapons transfer in European modern history' }
    ],
    dossier: 'Investing over 4% of GDP into building the most formidable conventional land army in Europe, fortifying the Belarusian border and anchoring NATO’s deterrence against eastward incursions.',
    treaties: ['NATO', 'European Union', 'Bucharest Nine (B9)', 'Three Seas Initiative']
  },
  {
    id: 'PAK',
    name: 'Pakistan',
    officialName: 'Islamic Republic of Pakistan',
    capital: 'Islamabad',
    region: 'South Asia',
    flag: '🇵🇰',
    lat: 30.3753,
    lng: 69.3451,
    status: 'Border Instability & Economic Crisis',
    statusColor: SEMANTIC_COLORS.instability,
    activeEventsCount: 5,
    strategicLinksCount: 3,
    metrics: {
      defenseBudget: '$7.4 Billion',
      activeForces: '654,000 active personnel',
      strategicReadiness: 'Western & Eastern Border Deployment',
      nuclearPosture: 'Full Spectrum Deterrence (Tactical Nasr)'
    },
    activities: [
      { type: 'conflict', label: 'Durand Line cross-border skirmishes', color: SEMANTIC_COLORS.conflict, desc: 'Airstrikes against TTP militants in eastern Afghanistan provinces.' },
      { type: 'instability', label: 'Balochistan insurgency attacks', color: SEMANTIC_COLORS.instability, desc: 'BLA separatist ambushes against CPEC infrastructure and military convoys.' },
      { type: 'military', label: 'Shaheen-III MRBM testing', color: SEMANTIC_COLORS.military, desc: 'Upgrading solid-fuel ballistic missiles with MIRV warhead capability.' }
    ],
    relations: [
      { country: 'China', flag: '🇨🇳', status: 'All-Weather Ally', color: SEMANTIC_COLORS.military, note: '$62B China-Pakistan Economic Corridor and JF-17 Thunder co-production' },
      { country: 'India', flag: '🇮🇳', status: 'Rival', color: SEMANTIC_COLORS.conflict, note: 'Historic conflict over Jammu and Kashmir with nuclear redlines' },
      { country: 'USA', flag: '🇺🇸', status: 'Major Non-NATO Ally', color: SEMANTIC_COLORS.neutral, note: 'Counter-terrorism dialogues and F-16 sustainment packages' }
    ],
    dossier: 'Faces twin security pressures along its eastern Line of Control and western Durand Line with Afghanistan, while depending heavily on Chinese CPEC capital and sovereign debt roll-overs.',
    treaties: ['SCO', 'Major Non-NATO Ally (US)', 'OIC']
  },
  {
    id: 'PHL',
    name: 'Philippines',
    officialName: 'Republic of the Philippines',
    capital: 'Manila',
    region: 'Southeast Asia',
    flag: '🇵🇭',
    lat: 12.8797,
    lng: 121.7740,
    status: 'Maritime Flashpoint & US Base Access',
    statusColor: SEMANTIC_COLORS.tension,
    activeEventsCount: 4,
    strategicLinksCount: 4,
    metrics: {
      defenseBudget: '$4.1 Billion (Horizon 3 Modernization)',
      activeForces: '150,000 active personnel',
      strategicReadiness: 'West Philippine Sea High Alert',
      nuclearPosture: 'Non-Nuclear (SEANWFZ Treaty)'
    },
    activities: [
      { type: 'conflict', label: 'Second Thomas Shoal resupply missions', color: SEMANTIC_COLORS.conflict, desc: 'Confronting CCG water cannon and acoustic weapon blockades.' },
      { type: 'military', label: 'EDCA site operationalization', color: SEMANTIC_COLORS.military, desc: 'Granting US forces access to 9 strategic air and naval bases near Taiwan.' },
      { type: 'strategic', label: 'BrahMos coastal battery deployment', color: SEMANTIC_COLORS.strategic, desc: 'Induction of Indian-made supersonic anti-ship missiles along Luzon coastline.' }
    ],
    relations: [
      { country: 'USA', flag: '🇺🇸', status: 'Mutual Defense Treaty', color: SEMANTIC_COLORS.diplomatic, note: '1951 MDT reaffirmed to cover armed attacks on coast guard in South China Sea' },
      { country: 'China', flag: '🇨🇳', status: 'Maritime Adversary', color: SEMANTIC_COLORS.conflict, note: 'Rejecting 2016 Hague arbitration ruling and militarizing Spratly features' },
      { country: 'India', flag: '🇮🇳', status: 'Defense Supplier', color: SEMANTIC_COLORS.stable, note: 'Purchased $375M BrahMos coastal anti-ship missile system' }
    ],
    dossier: 'Frontline littoral state defending its 200-nautical-mile Exclusive Economic Zone against Chinese maritime militia swarm tactics, bolstered by US EDCA bases and supersonic BrahMos missile batteries.',
    treaties: ['US-Philippines MDT', 'EDCA', 'ASEAN']
  },
  {
    id: 'SWE',
    name: 'Sweden',
    officialName: 'Kingdom of Sweden',
    capital: 'Stockholm',
    region: 'Europe',
    flag: '🇸🇪',
    lat: 60.1282,
    lng: 18.6435,
    status: 'New NATO Ally & Baltic Dominance',
    statusColor: SEMANTIC_COLORS.stable,
    activeEventsCount: 3,
    strategicLinksCount: 5,
    metrics: {
      defenseBudget: '$11.8 Billion (2.2% GDP)',
      activeForces: '24,000 active + Gotland Home Guard',
      strategicReadiness: 'Total Defense Strategy Restored',
      nuclearPosture: 'Covered by NATO Nuclear Umbrella'
    },
    activities: [
      { type: 'strategic', label: 'Gotland Island fortress militarization', color: SEMANTIC_COLORS.strategic, desc: 'Deploying RBS-15 anti-ship missiles and Patriot SAMs in the center of Baltic Sea.' },
      { type: 'military', label: 'JAS 39 Gripen E air patrols', color: SEMANTIC_COLORS.military, desc: 'Dispersed road-runway operations with Meteor beyond-visual-range missiles.' },
      { type: 'diplomatic', label: 'Full NATO integration', color: SEMANTIC_COLORS.diplomatic, desc: 'Participating in Steadfast Defender drills as 32nd alliance member.' }
    ],
    relations: [
      { country: 'Finland', flag: '🇫🇮', status: 'Nordic Defense Twin', color: SEMANTIC_COLORS.stable, note: 'Integrated air operational command across Nordic airspace' },
      { country: 'USA', flag: '🇺🇸', status: 'DCA Agreement', color: SEMANTIC_COLORS.diplomatic, note: 'Granting US access to 17 Swedish military bases and training grounds' },
      { country: 'Russia', flag: '🇷🇺', status: 'Strategic Threat', color: SEMANTIC_COLORS.tension, note: 'Submarine incursions and airspace violations in Baltic approaches' }
    ],
    dossier: 'Ended 200 years of military non-alignment in 2024 to join NATO, turning Gotland Island into an unsinkable aircraft carrier that locks down Russian naval egress from St. Petersburg and Kaliningrad.',
    treaties: ['NATO (32nd Member)', 'European Union', 'Nordefco']
  }
];

export const STRATEGIC_LOCATIONS = [
  {
    id: 'loc_hormuz',
    name: 'Strait of Hormuz',
    category: 'Maritime Chokepoint',
    type: 'chokepoint',
    lat: 26.5667,
    lng: 56.2500,
    whyItMatters: 'World’s most critical oil transit chokepoint. Approximately 21 million barrels of crude oil per day pass through this 39km-wide waterway (21% of global petroleum consumption).',
    connectedCountries: ['Iran', 'Oman', 'United Arab Emirates', 'Saudi Arabia'],
    globalImpact: 'Any closure or kinetic minefield would immediately surge Brent crude beyond $130/barrel and trigger severe energy rationing in East Asia and Europe.',
    indiaImpact: 'India sources over 60% of its imported crude through Hormuz, making naval presence in the Gulf of Oman vital for energy security.',
    status: 'High Alert (Continuous Drone & Fast-Boat Surveillance)'
  },
  {
    id: 'loc_malacca',
    name: 'Strait of Malacca',
    category: 'Maritime Chokepoint',
    type: 'chokepoint',
    lat: 4.0000,
    lng: 100.0000,
    whyItMatters: 'Main shipping channel between the Indian Ocean and the Pacific Ocean. Over 100,000 vessels traverse annually carrying 40% of global trade and 80% of China’s oil imports (the "Malacca Dilemma").',
    connectedCountries: ['Singapore', 'Malaysia', 'Indonesia'],
    globalImpact: 'Key maritime lifeline for China, Japan, and South Korea manufacturing supply chains.',
    indiaImpact: 'Overlooked by India’s Andaman & Nicobar Command, granting New Delhi critical strategic interdiction leverage in times of crisis.',
    status: 'Heavily Patrolled (Coordinated Littoral Patrols)'
  },
  {
    id: 'loc_babalmandeb',
    name: 'Bab el-Mandeb Strait',
    category: 'Maritime Chokepoint',
    type: 'chokepoint',
    lat: 12.5833,
    lng: 43.3333,
    whyItMatters: 'Connects the Red Sea to the Gulf of Aden and the Indian Ocean. Gateway to the Suez Canal; critical for Europe-Asia maritime container traffic.',
    connectedCountries: ['Yemen', 'Djibouti', 'Eritrea'],
    globalImpact: 'Houthi drone and anti-ship missile attacks forced 70% of global container ships to divert around the Cape of Good Hope, adding 12–14 days transit time.',
    indiaImpact: 'Indian Navy deployed 10+ guided-missile destroyers (INS Kolkata, INS Visakhapatnam) to conduct anti-piracy and merchant vessel escort operations.',
    status: 'Active Kinetic Hazard Zone'
  },
  {
    id: 'loc_suez',
    name: 'Suez Canal',
    category: 'Canal',
    type: 'chokepoint',
    lat: 30.7050,
    lng: 32.3442,
    whyItMatters: 'Artery of global commerce linking Mediterranean to Red Sea. Handled 12% of global trade and 30% of global container traffic prior to Red Sea disruptions.',
    connectedCountries: ['Egypt'],
    globalImpact: 'Revenues dropped over 50% during 2024 due to Red Sea diversions, impacting Egypt’s sovereign foreign currency reserves.',
    indiaImpact: 'Direct link for Indian engineering exports, pharmaceuticals, and agricultural trade heading to Mediterranean and European ports.',
    status: 'Operating with Reduced Tonnage'
  },
  {
    id: 'loc_bosphorus',
    name: 'Bosphorus Strait',
    category: 'Strategic Waterway',
    type: 'chokepoint',
    lat: 41.1193,
    lng: 29.0744,
    whyItMatters: 'Only maritime egress for Russian Black Sea Fleet and Ukrainian agricultural grain bulk carriers.',
    connectedCountries: ['Turkey'],
    globalImpact: 'Governed by the 1936 Montreux Convention. Turkey’s closure of the straits to non-homeported warships prevented Russia from reinforcing its Black Sea Fleet.',
    indiaImpact: 'Vital for grain import stability and fertilizer pricing on global markets.',
    status: 'Monitored (Strict Montreux Protocol Enforcement)'
  },
  {
    id: 'loc_suwalki',
    name: 'Suwalki Gap',
    category: 'Land Corridor',
    type: 'land_chokepoint',
    lat: 54.1000,
    lng: 23.3500,
    whyItMatters: 'A narrow 65km strip of land connecting NATO allies Poland and Lithuania, flanked by Russian Kaliningrad exclave to the northwest and Belarus to the southeast.',
    connectedCountries: ['Poland', 'Lithuania', 'Belarus', 'Russia (Kaliningrad)'],
    globalImpact: 'Often termed the "most dangerous corridor on Earth". In a confrontation, Russian forces could link Kaliningrad and Belarus, cutting off the Baltic states.',
    indiaImpact: 'Indirect impact on Eurasian supply routes and European defense expenditure dynamics.',
    status: 'Heavily Fortified (NATO Enhanced Forward Presence)'
  },
  {
    id: 'loc_diegogarcia',
    name: 'Diego Garcia Naval Facility',
    category: 'Military Base',
    type: 'military_base',
    lat: -7.3195,
    lng: 72.4229,
    whyItMatters: 'Strategic UK-US joint military and naval air support facility in the Chagos Archipelago, supporting B-52 and B-2 bomber global strike missions.',
    connectedCountries: ['United Kingdom', 'United States'],
    globalImpact: 'Allows rapid long-range air and submarine power projection across the Middle East, South Asia, and the southern Indian Ocean.',
    indiaImpact: 'Close to southern Indian maritime approaches; key node in Anglo-American Indian Ocean security architecture.',
    status: 'High Readiness (Submarine Tender & Strategic Bomber Aprons)'
  },
  {
    id: 'loc_guam',
    name: 'Guam Naval & Andersen AFB',
    category: 'Military Base',
    type: 'military_base',
    lat: 13.4443,
    lng: 144.7937,
    whyItMatters: 'Westernmost sovereign US territory in the Pacific. Hub of the Second Island Chain with submarine squadrons and continuous bomber presence.',
    connectedCountries: ['United States'],
    globalImpact: 'Key staging ground for any Indo-Pacific contingency, currently undergoing a $1.5B 360-degree Enhanced Integrated Air and Missile Defense (EIAMD) upgrade.',
    indiaImpact: 'Coordinates with Indo-Pacific naval drills and logistics agreements (LEMOA).',
    status: 'Upgrading 360° Missile Defense Shield'
  },
  {
    id: 'loc_hsinchu',
    name: 'Hsinchu Science Park (TSMC Hub)',
    category: 'Strategic Tech Infrastructure',
    type: 'strategic_infrastructure',
    lat: 24.7788,
    lng: 121.0145,
    whyItMatters: 'The beating heart of global advanced silicon fabrication. Produces the microchips that power modern AI, smartphones, and precision guided weapons.',
    connectedCountries: ['Taiwan'],
    globalImpact: 'Any disruption to Hsinchu fabs would cause an estimated $10 Trillion hit to global GDP within 12 months.',
    indiaImpact: 'India is partnering with Taiwanese chip foundries (Tata Electronics - PSMC) to stand up domestic semiconductor fabrication in Dholera.',
    status: 'Under Deep Civil-Military Air Defense Protection'
  },
  {
    id: 'loc_djibouti',
    name: 'Djibouti Military Crossroads',
    category: 'Military Port Node',
    type: 'military_base',
    lat: 11.8251,
    lng: 42.5903,
    whyItMatters: 'Small nation hosting military bases for the United States (Camp Lemonnier), China (PLAN Support Base), France, Japan, and Italy just miles apart.',
    connectedCountries: ['Djibouti', 'United States', 'China', 'France', 'Japan'],
    globalImpact: 'Primary operational hub for Red Sea counter-piracy, anti-terror ops, and Chinese naval replenishment in the Horn of Africa.',
    indiaImpact: 'Regular port of call for Indian Navy escort ships operating in the Gulf of Aden.',
    status: 'Multi-National Intelligence Coexistence'
  }
];

export const GEOPOLITICAL_EVENTS = INITIAL_INTELLIGENCE_EVENTS.map(evt => ({
  ...evt,
  summary: evt.summary || evt.whatHappened,
  type: evt.type || (evt.priority === 'CRITICAL' ? 'Critical Intelligence Alert' : 'Geopolitical Development'),
  severity: evt.priority ? evt.priority.toLowerCase() : 'high',
  color: evt.priority === 'CRITICAL' ? SEMANTIC_COLORS.conflict : evt.priority === 'HIGH' ? SEMANTIC_COLORS.tension : evt.category === 'military' ? SEMANTIC_COLORS.military : SEMANTIC_COLORS.strategic
}));

export const GEOPOLITICAL_EVENTS_ARCHIVE = [
  {
    id: 'evt_lac_border',
    title: 'India–China Line of Actual Control Standoff',
    sector: 'Eastern Ladakh / Depsang / Demchok',
    category: 'conflict',
    type: 'Active Conflict / Frontier Alert',
    lat: 34.2000,
    lng: 78.4000,
    severity: 'critical',
    color: SEMANTIC_COLORS.conflict,
    actors: [
      { name: 'India', flag: '🇮🇳', role: 'Frontline Defense & Infrastructure Hardening' },
      { name: 'China', flag: '🇨🇳', role: 'PLA Western Theater Command Forward Deployment' }
    ],
    timeline: [
      { year: '1962', text: 'Sino-Indian Border War sets baseline territorial disputes.' },
      { year: '2020', text: 'Galwan Valley hand-to-hand clash; 20 Indian soldiers and multiple PLA casualties.' },
      { year: '2022', text: 'Yangtse, Tawang sector clash repulsed by Indian troops.' },
      { year: '2024', text: 'Coordinated patrol disengagement verification protocols agreed in Kazan.' },
      { year: 'NOW', text: 'Verifiable buffer zones monitored via satellite, surveillance drones, and ground patrols.' }
    ],
    summary: 'The world’s highest-altitude military standoff involves over 100,000 forward-deployed soldiers backed by tanks, surface-to-air missiles, and hardened mountain airbases across Eastern Ladakh.',
    impact: {
      defense: 'Indian Army sustains winter-equipped corps with indigenous Akash SAMs and K9 Vajra-T howitzers.',
      diplomacy: '21+ rounds of Corps Commander talks accompanied by strict bilateral verification.',
      trade: 'Intense scrutiny on Chinese FDI, blocking of 300+ mobile apps, and diversification into domestic manufacturing.'
    },
    status: 'Active Verification of Disengagement Protocols'
  },
  {
    id: 'evt_taiwan_strait',
    title: 'Taiwan Strait Air Defense Incursions',
    sector: 'First Island Chain / Taiwan Median Line',
    category: 'tension',
    type: 'High Geopolitical Tension',
    lat: 24.5000,
    lng: 119.5000,
    severity: 'high',
    color: SEMANTIC_COLORS.tension,
    actors: [
      { name: 'China', flag: '🇨🇳', role: 'PLA Eastern Theater Combat Drills' },
      { name: 'Taiwan', flag: '🇹🇼', role: 'ROK Island Perimeter Defense' },
      { name: 'USA', flag: '🇺🇸', role: 'Freedom of Navigation Patrols' }
    ],
    timeline: [
      { year: '1996', text: 'Third Taiwan Strait Crisis; US carrier battle groups deployed.' },
      { year: '2022', text: 'Joint Sword simulated blockade drills following US Congressional visits.' },
      { year: '2024', text: 'Daily ADIZ incursions crossing median line with J-20 stealth fighters.' },
      { year: 'NOW', text: 'Continuous grey-zone pressure combining naval encirclement and cognitive warfare.' }
    ],
    summary: 'PLA aircraft and naval combatants maintain daily pressure around Taiwan’s air defense identification zone (ADIZ), eroding tactical response time and rehearsing rapid maritime quarantine scenarios.',
    impact: {
      defense: 'Taiwan deploys mobile anti-ship cruise missiles and extended conscription to 1 year.',
      diplomacy: 'US reinforces Taiwan Relations Act with Presidential Drawdown weapon packages.',
      trade: 'Over $2.4 Trillion in global container traffic routes through the strait annually.'
    },
    status: 'High Grey-Zone Sortie Tempo'
  },
  {
    id: 'evt_ukraine_front',
    title: 'Donbas–Zaporizhzhia War of Attrition',
    sector: 'Eastern European Theater',
    category: 'conflict',
    type: 'Active High-Intensity War',
    lat: 48.0000,
    lng: 37.5000,
    severity: 'critical',
    color: SEMANTIC_COLORS.conflict,
    actors: [
      { name: 'Ukraine', flag: '🇺🇦', role: 'Territorial Defense & Drone Deep Strike' },
      { name: 'Russia', flag: '🇷🇺', role: 'Multi-Pronged Frontline Assaults & Aerial Glides' }
    ],
    timeline: [
      { year: '2014', text: 'Annexation of Crimea and covert Donbas proxy war begins.' },
      { year: '2022', text: 'Full-scale Russian invasion; Kyiv defense and Kherson counter-offensive.' },
      { year: '2023', text: 'Battle of Bakhmut and southern counteroffensive against Surovikin Line.' },
      { year: 'NOW', text: 'Electronic warfare saturated warfare with FPV drone swarms and glide bombs.' }
    ],
    summary: 'A 1,000-kilometer active combat frontline dominated by high-density electronic warfare, thermal reconnaissance UAVs, extensive minefields, and FAB-3000 glide bomb bombardments.',
    impact: {
      defense: 'Massive ammunition expenditure testing NATO industrial surge capacity.',
      diplomacy: 'European Union and US sanctioning Russian oil price cap and dark fleet tankers.',
      trade: 'Restructuring of global fertilizer, wheat, and natural gas export routes.'
    },
    status: 'Active Heavy Combat Along Entire Front'
  },
  {
    id: 'evt_red_sea',
    title: 'Red Sea Commercial Shipping Interdictions',
    sector: 'Bab el-Mandeb / Southern Red Sea',
    category: 'conflict',
    type: 'Active Maritime Conflict',
    lat: 13.5000,
    lng: 42.8000,
    severity: 'critical',
    color: SEMANTIC_COLORS.conflict,
    actors: [
      { name: 'Houthis (Ansar Allah)', flag: '🇾🇪', role: 'Anti-Ship Ballistic Missiles & Drone Swarms' },
      { name: 'US / UK Coalition', flag: '🇺🇸', role: 'Operation Prosperity Guardian & Preemptive Strikes' },
      { name: 'India', flag: '🇮🇳', role: 'Autonomous Maritime Rescue & Counter-Piracy' }
    ],
    timeline: [
      { year: '2023', text: 'Hijacking of Galaxy Leader; initial rocket launches toward Red Sea shipping.' },
      { year: '2024', text: 'Sinking of Rubymar and Tutor via autonomous sea-drones and ballistic missiles.' },
      { year: 'NOW', text: 'Ongoing carrier strike group operations and air defense interceptions.' }
    ],
    summary: 'First operational combat use of anti-ship ballistic missiles in history against commercial shipping, forcing global container liners to reroute around South Africa.',
    impact: {
      defense: 'Western navies expending $2M Standard Missile-2/Aster-30 interceptors against $20k drones.',
      diplomacy: 'Coalition enforcement strikes on coastal radar installations and weapons caches.',
      trade: 'Container freight spot rates surged 300% on Asia-to-Europe trade lanes.'
    },
    status: 'Extreme Commercial Transit Hazard'
  },
  {
    id: 'evt_korean_dmz',
    title: 'Korean Peninsula Ballistic Escalation',
    sector: '38th Parallel / Northern Limit Line',
    category: 'tension',
    type: 'Developing High Tension',
    lat: 37.9500,
    lng: 126.6500,
    severity: 'high',
    color: SEMANTIC_COLORS.tension,
    actors: [
      { name: 'North Korea', flag: '🇰🇵', role: 'Solid-Fuel Missile Tests & Border Fortification' },
      { name: 'South Korea', flag: '🇰🇷', role: 'Live-Fire Artillery & Reconnaissance Drills' },
      { name: 'USA', flag: '🇺🇸', role: 'Strategic Nuclear Submarine Port Calls' }
    ],
    timeline: [
      { year: '1953', text: 'Armistice agreement creates Demilitarized Zone.' },
      { year: '2018', text: 'Inter-Korean Comprehensive Military Agreement signed.' },
      { year: '2023', text: 'Scrapping of 2018 pact; remilitarization of border guard posts.' },
      { year: 'NOW', text: 'Blowing up inter-Korean railways and codifying South Korea as hostile state.' }
    ],
    summary: 'Pyongyang’s formal abandonment of peaceful reunification goals accompanied by artillery fortifications and solid-fueled hypersonic missile flight tests over the Sea of Japan.',
    impact: {
      defense: 'US nuclear-powered ballistic missile submarines (SSBNs) docking in Busan.',
      diplomacy: 'Deepened Seoul-Tokyo intelligence sharing via GSOMIA.',
      trade: 'High readiness across South Korea’s semiconductor and shipbuilding hubs.'
    },
    status: 'Elevated Stand-off Alert'
  },
  {
    id: 'evt_philippines_shoal',
    title: 'Second Thomas Shoal Sovereignty Confrontation',
    sector: 'Spratly Islands / West Philippine Sea',
    category: 'conflict',
    type: 'Maritime Sovereignty Conflict',
    lat: 9.8700,
    lng: 115.8500,
    severity: 'high',
    color: SEMANTIC_COLORS.conflict,
    actors: [
      { name: 'Philippines', flag: '🇵🇭', role: 'BRP Sierra Madre Garrison Resupply' },
      { name: 'China', flag: '🇨🇳', role: 'CCG Blockade, Water Cannons & Boarding Rammers' },
      { name: 'USA', flag: '🇺🇸', role: 'P-8A Poseidon Reconnaissance Support' }
    ],
    timeline: [
      { year: '1999', text: 'Philippines runs WWII ship BRP Sierra Madre aground to claim shoal.' },
      { year: '2016', text: 'Hague Tribunal rules China’s Nine-Dash line invalid under UNCLOS.' },
      { year: '2024', text: 'High-speed ramming and axe-wielding CCG boardings injuring Philippine sailors.' },
      { year: 'NOW', text: 'Interim provisional resupply arrangement tested weekly.' }
    ],
    summary: 'Direct hand-to-hand maritime confrontations over a rusted naval outpost in the Spratlys, testing the trigger threshold of the 1951 US-Philippines Mutual Defense Treaty.',
    impact: {
      defense: 'Philippine Coast Guard outfitting ships with real-time video transmission.',
      diplomacy: 'US warns Article 4 of Mutual Defense Treaty applies to all Philippine public vessels.',
      trade: 'Disrupts rich traditional fishing grounds and offshore seabed gas exploration.'
    },
    status: 'Tense Maritime Standoff'
  },
  {
    id: 'evt_iran_israel',
    title: 'Iran–Israel Direct Ballistic & Proxy War',
    sector: 'Levant / Persian Gulf / Central Iran',
    category: 'conflict',
    type: 'State-Level Missile War',
    lat: 33.5000,
    lng: 44.0000,
    severity: 'critical',
    color: SEMANTIC_COLORS.conflict,
    actors: [
      { name: 'Israel', flag: '🇮🇱', role: 'Preemptive Air Strikes & Missile Defense' },
      { name: 'Iran', flag: '🇮🇷', role: 'Ballistic Missile Volleys & Regional Proxy Networks' },
      { name: 'USA', flag: '🇺🇸', role: 'THAAD Deployment & Coalition Air Defense Intercepts' }
    ],
    timeline: [
      { year: '2024 (Apr)', text: 'Operation True Promise I: Iran launches 300+ drones & missiles.' },
      { year: '2024 (Oct)', text: 'Operation True Promise II: 180 ballistic missiles target Israeli air bases.' },
      { year: '2024 (Late)', text: 'Days of Repentance: 100+ Israeli jets strike Iranian radar and air defenses.' },
      { year: 'NOW', text: 'High alert for next tit-for-tat retaliation wave.' }
    ],
    summary: 'The shift from decades of shadow proxy war into direct, large-scale ballistic missile strikes between sovereign Iranian soil and Israeli military installations.',
    impact: {
      defense: 'THAAD batteries deployed to Israel with US military crews.',
      diplomacy: 'Intense diplomatic pressure to avoid targeting nuclear and oil production facilities.',
      trade: 'Volatile spikes in crude oil benchmarks and international airspace diversions.'
    },
    status: 'Hair-Trigger State-Level Deterrence'
  },
  {
    id: 'evt_arctic_sea_route',
    title: 'Arctic Northern Sea Route & Bastion Patrols',
    sector: 'Barents Sea / High North',
    category: 'military',
    type: 'Military / Strategic Competition',
    lat: 72.0000,
    lng: 45.0000,
    severity: 'medium',
    color: SEMANTIC_COLORS.military,
    actors: [
      { name: 'Russia', flag: '🇷🇺', role: 'Northern Fleet Bastion & Nuclear Icebreaker Escort' },
      { name: 'NATO Nordic', flag: '🇸🇪', role: 'Integrated Arctic Air Surveillance & Sub-Hunting' }
    ],
    timeline: [
      { year: '2023', text: 'Finland joins NATO; doubling NATO’s land border with Russia.' },
      { year: '2024', text: 'Sweden joins NATO; complete alliance control of Baltic rim.' },
      { year: 'NOW', text: 'Undersea cable acoustic monitoring and Arctic radar modernization.' }
    ],
    summary: 'Melting polar ice opens commercial transit routes between Europe and Asia while intensifying strategic competition over undersea critical cables and submarine bastions.',
    impact: {
      defense: 'P-8A Poseidon maritime patrol aircraft flying daily sorties from Evenes, Norway.',
      diplomacy: 'Arctic Council cooperation stalled between Western members and Moscow.',
      trade: 'Russian oil deliveries sailing to China via ice-class Arc7 tankers.'
    },
    status: 'Strategic Subsurface Monitoring'
  }
];

export const STRATEGIC_RELATIONS = [
  // Major Strategic Partnerships (Blue)
  { from: 'USA', to: 'IND', type: 'strategic', color: SEMANTIC_COLORS.diplomatic, title: 'US–India Strategic Partnership', desc: 'Critical defense technology sharing (iCET), jet engine co-production, and QUAD maritime security.' },
  { from: 'USA', to: 'TWN', type: 'strategic', color: SEMANTIC_COLORS.diplomatic, title: 'US–Taiwan Defense Pact', desc: 'Taiwan Relations Act arms deliveries and asymmetric defense capability building.' },
  { from: 'USA', to: 'GBR', type: 'strategic', color: SEMANTIC_COLORS.diplomatic, title: 'US–UK Special Relationship', desc: 'Five Eyes signals intelligence, nuclear submarine propulsion, and AUKUS pillar.' },
  { from: 'USA', to: 'JPN', type: 'strategic', color: SEMANTIC_COLORS.diplomatic, title: 'US–Japan Security Alliance', desc: 'Stationing 50,000+ US troops and integrated ballistic missile defense.' },
  { from: 'USA', to: 'ISR', type: 'strategic', color: SEMANTIC_COLORS.diplomatic, title: 'US–Israel Defense Covenant', desc: 'Iron Dome resupply, THAAD missile battery deployment, and joint intelligence.' },
  { from: 'USA', to: 'PHL', type: 'strategic', color: SEMANTIC_COLORS.diplomatic, title: 'US–Philippines Mutual Defense', desc: 'EDCA expanded base access across Luzon facing Taiwan and West Philippine Sea.' },
  { from: 'IND', to: 'RUS', type: 'strategic', color: SEMANTIC_COLORS.diplomatic, title: 'India–Russia Privileged Partnership', desc: 'Long-standing military tech cooperation (BrahMos, S-400) and discounted crude supply.' },
  { from: 'IND', to: 'FRA', type: 'strategic', color: SEMANTIC_COLORS.diplomatic, title: 'India–France Strategic Autonomy', desc: 'Rafale combat aircraft, naval Scorpene submarines, and Indian Ocean sovereign joint patrols.' },
  { from: 'IND', to: 'JPN', type: 'strategic', color: SEMANTIC_COLORS.stable, title: 'India–Japan Indo-Pacific Pact', desc: 'QUAD infrastructure development and Act East high-speed rail connectivity.' },
  { from: 'CHN', to: 'RUS', type: 'strategic', color: SEMANTIC_COLORS.military, title: 'China–Russia "No-Limits" Axis', desc: 'Dual-use machine tool trade, joint bomber patrols, and massive hydrocarbon pipeline flows.' },
  { from: 'RUS', to: 'IRN', type: 'military', color: SEMANTIC_COLORS.military, title: 'Russia–Iran Drone & Air Defense Swaps', desc: 'Shahed-136 drone tech transfer in exchange for Su-35 fighters and electronic warfare systems.' },
  { from: 'RUS', to: 'PRK', type: 'military', color: SEMANTIC_COLORS.military, title: 'Russia–North Korea Mutual Defense', desc: 'Millions of artillery shells and ballistic missiles supplied in exchange for space/missile tech.' },
  { from: 'CHN', to: 'PAK', type: 'military', color: SEMANTIC_COLORS.military, title: 'China–Pakistan CPEC & Defense Pact', desc: '$62B infrastructure corridor and joint military fighter manufacturing (JF-17).' },
  { from: 'POL', to: 'KOR', type: 'military', color: SEMANTIC_COLORS.military, title: 'Poland–South Korea Armored Pacts', desc: 'Rapid procurement of 1,000 K2 tanks, K9 howitzers, and FA-50 light attack jets.' },

  // Active Tensions (Red & Orange)
  { from: 'IND', to: 'CHN', type: 'conflict', color: SEMANTIC_COLORS.conflict, title: 'India–China Himalayan Standoff', desc: 'High-altitude militarization along 3,488km Line of Actual Control.' },
  { from: 'IND', to: 'PAK', type: 'conflict', color: SEMANTIC_COLORS.conflict, title: 'India–Pakistan LoC Ceasefire Watch', desc: 'Nuclear-armed rivalry with continuous counter-infiltration vigilance.' },
  { from: 'USA', to: 'RUS', type: 'conflict', color: SEMANTIC_COLORS.conflict, title: 'US–Russia Strategic Cold War', desc: 'Proxy confrontation in Ukraine, sanctions enforcement, and nuclear treaty halts.' },
  { from: 'USA', to: 'CHN', type: 'tension', color: SEMANTIC_COLORS.tension, title: 'US–China Strategic Competition', desc: 'Taiwan Strait deterrence, semiconductor export bans, and naval containment.' },
  { from: 'ISR', to: 'IRN', type: 'conflict', color: SEMANTIC_COLORS.conflict, title: 'Israel–Iran Kinetic Confrontation', desc: 'Direct ballistic strikes, proxy rocket volleys, and covert sabotage ops.' },
  { from: 'CHN', to: 'PHL', type: 'conflict', color: SEMANTIC_COLORS.conflict, title: 'China–Philippines Shoal Clashes', desc: 'Coast Guard water cannons, ramming tactics, and Spratly sovereignty standoffs.' },
  { from: 'PRK', to: 'KOR', type: 'conflict', color: SEMANTIC_COLORS.conflict, title: 'North–South Korea DMZ Standoff', desc: 'Severed cross-border links, artillery massing, and missile test volleys.' }
];

export const HISTORICAL_ERAS = [
  {
    year: '1914',
    label: '1914: High Imperialism & WWI Outbreak',
    brief: 'Six great empires govern two-thirds of the planet; assassination of Archduke Franz Ferdinand triggers systemic alliance chain reaction.'
  },
  {
    year: '1939',
    label: '1939: Axis Expansion & Molotov-Ribbentrop',
    brief: 'Nazi-Soviet pact carves Eastern Europe; Imperial Japan expands in Asia; collapse of the League of Nations collective security order.'
  },
  {
    year: '1962',
    label: '1962: Sino-Indian War & Cuban Crisis',
    brief: 'High Cold War nuclear brinkmanship between Washington and Moscow, coinciding with the Himalayan high-altitude war between India and China.'
  },
  {
    year: '1973',
    label: '1973: Yom Kippur War & Oil Shock',
    brief: 'Middle Eastern armored warfare leads to OPEC oil embargo, transforming international energy geopolitics and sovereign debt.'
  },
  {
    year: '1991',
    label: '1991: Soviet Collapse & Desert Storm',
    brief: 'Dissolution of the USSR creates a unipolar world; US coalition liberates Kuwait with overwhelming precision air campaign.'
  },
  {
    year: '2001',
    label: '2001: 9/11 & War on Terror',
    brief: 'Asymmetric non-state actors disrupt global security paradigm; NATO invokes Article 5 for the first time for Afghanistan deployment.'
  },
  {
    year: '2014',
    label: '2014: Crimea Annexation & Levant Upheaval',
    brief: 'Russia seizes Crimean peninsula; emergence of hybrid warfare in Eastern Europe while ISIS destabilizes the Fertile Crescent.'
  },
  {
    year: '2020',
    label: '2020: Galwan Clash & Abraham Accords',
    brief: 'Deadly hand-to-hand combat in Eastern Ladakh freezes India-China relations; historic normalization pacts reshape Middle Eastern alliances.'
  },
  {
    year: '2022',
    label: '2022: Ukraine Invasion & Nordic Realignment',
    brief: 'Full-scale European land war resumes; Sweden and Finland abandon historic non-alignment to seek NATO collective security.'
  },
  {
    year: '2024',
    label: '2024: Red Sea Crisis & Indo-Pacific Deterrence',
    brief: 'Anti-ship ballistic missiles disrupt global maritime shipping in Bab el-Mandeb; Quad and AUKUS fortify Indo-Pacific deterrence.'
  },
  {
    year: 'PRESENT',
    label: 'PRESENT: Multi-Polar Contestation',
    brief: 'Live satellite-tracked global intelligence posture across critical waterways, electronic warfare frontlines, and semiconductor chokepoints.'
  }
];

export const MARITIME_ROUTES = [
  {
    id: 'route_europe_asia',
    name: 'Suez – Indian Ocean – Malacca Trunk Route',
    points: [
      { lat: 51.9, lng: 4.5 },   // Rotterdam
      { lat: 36.1, lng: -5.3 },  // Gibraltar
      { lat: 30.7, lng: 32.3 },  // Suez
      { lat: 12.6, lng: 43.3 },  // Bab el-Mandeb
      { lat: 6.9, lng: 79.8 },   // Colombo
      { lat: 1.3, lng: 103.8 },  // Singapore / Malacca
      { lat: 22.3, lng: 114.2 }, // Hong Kong
      { lat: 31.2, lng: 121.5 }  // Shanghai
    ],
    color: '#06b6d4',
    type: 'trade'
  },
  {
    id: 'route_gulf_east_asia',
    name: 'Persian Gulf Energy Artery',
    points: [
      { lat: 26.6, lng: 50.1 },  // Ras Tanura
      { lat: 26.5, lng: 56.2 },  // Hormuz
      { lat: 18.9, lng: 72.8 },  // Mumbai
      { lat: 1.3, lng: 103.8 },  // Malacca
      { lat: 35.4, lng: 139.6 }  // Tokyo Bay
    ],
    color: '#f59e0b',
    type: 'energy'
  },
  {
    id: 'route_trans_pacific',
    name: 'Trans-Pacific Technology Corridor',
    points: [
      { lat: 24.8, lng: 121.0 }, // Taiwan
      { lat: 35.4, lng: 139.6 }, // Japan
      { lat: 37.8, lng: -122.4 } // California
    ],
    color: '#38bdf8',
    type: 'strategic'
  }
];
