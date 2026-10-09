/**
 * GEOINTEL GLOBAL INTELLIGENCE DEVELOPMENTS REPOSITORY
 * 
 * Factual, structured geopolitical intelligence dataset covering:
 * - Europe, Middle East, Indo-Pacific, South Asia, Africa, Americas, Arctic, and Global Institutions.
 * - Categories: Military, Maritime, Diplomacy, Energy, Technology, Economy, Infrastructure.
 * - Strict intelligence standards:
 *   - Priority: CRITICAL, HIGH, MEDIUM, LOW
 *   - Status: Developing, Escalating, Stable, De-escalating, Resolved, Monitoring
 *   - Confidence: VERIFIED, REPORTED, ESTIMATE, DISPUTED, ANALYSIS, HISTORICAL
 *   - India Impact: Documented, Potential, Analytical
 *   - Analytical Assessment clearly labelled for forward projections.
 */

export const INTELLIGENCE_PRIORITIES = {
  CRITICAL: {
    label: 'CRITICAL',
    shape: '◈',
    symbol: '◆',
    color: '#FFFFFF',
    bg: 'bg-white',
    border: 'border-white',
    text: 'text-black font-extrabold',
    pulse: true,
    description: 'Immediate war risk, primary chokepoint interdiction, or strategic escalation'
  },
  HIGH: {
    label: 'HIGH',
    shape: '■',
    symbol: '■',
    color: '#E8E8E8',
    bg: 'bg-[#1A1A1A]',
    border: 'border-white/70',
    text: 'text-white font-bold',
    pulse: false,
    description: 'Major military maneuver, severe sanctions, or systemic economic threat'
  },
  MEDIUM: {
    label: 'MEDIUM',
    shape: '●',
    symbol: '●',
    color: '#BDBDBD',
    bg: 'bg-[#111111]',
    border: 'border-[#444444]',
    text: 'text-[#E8E8E8]',
    pulse: false,
    description: 'Bilateral friction, diplomatic realignment, or localized tension'
  },
  LOW: {
    label: 'LOW',
    shape: '○',
    symbol: '○',
    color: '#888888',
    bg: 'bg-[#080808]',
    border: 'border-[#333333]',
    text: 'text-[#888888]',
    pulse: false,
    description: 'Routine monitoring, exploratory agreements, or long-term structural trends'
  }
};

export const CONFIDENCE_LEVELS = {
  VERIFIED: {
    label: 'VERIFIED',
    description: 'Confirmed by multiple official primary sources or satellite telemetry',
    color: 'text-white',
    bg: 'bg-[#1A1A1A]',
    border: 'border-white/60'
  },
  REPORTED: {
    label: 'REPORTED',
    description: 'Reported by reputable international monitoring agencies / primary wires',
    color: 'text-[#E8E8E8]',
    bg: 'bg-[#141414]',
    border: 'border-[#444444]'
  },
  ESTIMATE: {
    label: 'ESTIMATE',
    description: 'Derived from intelligence analysis or open-source defense evaluations',
    color: 'text-[#BDBDBD]',
    bg: 'bg-[#111111]',
    border: 'border-[#333333]'
  },
  DISPUTED: {
    label: 'DISPUTED',
    description: 'Directly contested claims between adversarial state parties',
    color: 'text-white',
    bg: 'bg-black',
    border: 'border-white border-dashed'
  },
  ANALYSIS: {
    label: 'ANALYSIS',
    description: 'Strategic intelligence deduction synthesizing observable indicators',
    color: 'text-[#BDBDBD]',
    bg: 'bg-[#161616]',
    border: 'border-[#444444]'
  },
  HISTORICAL: {
    label: 'HISTORICAL',
    description: 'A past event supported by historical archival sources',
    color: 'text-[#888888]',
    bg: 'bg-[#080808]',
    border: 'border-[#222222]'
  }
};

export const EVENT_STATUSES = {
  DEVELOPING: { label: 'Developing', shape: '●', color: '#E8E8E8', badge: 'bg-[#1A1A1A] text-white border-white/60' },
  ESCALATING: { label: 'Escalating', shape: '▲', color: '#FFFFFF', badge: 'bg-white text-black font-extrabold border-white' },
  STABLE: { label: 'Stable', shape: '■', color: '#888888', badge: 'bg-[#111111] text-[#BDBDBD] border-[#333333]' },
  DE_ESCALATING: { label: 'De-escalating', shape: '▼', color: '#888888', badge: 'bg-[#0D0D0D] text-[#888888] border-[#333333]' },
  RESOLVED: { label: 'Resolved', shape: '✓', color: '#666666', badge: 'bg-black text-[#666666] border-[#222222]' },
  MONITORING: { label: 'Monitoring', shape: '◈', color: '#BDBDBD', badge: 'bg-[#161616] text-[#BDBDBD] border-[#444444]' }
};

export const CATEGORY_SHAPES = {
  conflict: { shape: '◆', name: 'Armed Conflict', iconType: 'diamond' },
  military: { shape: '■', name: 'Military & Defense', iconType: 'square' },
  maritime: { shape: '▲', name: 'Maritime & Sea Lanes', iconType: 'triangle' },
  diplomacy: { shape: '●', name: 'Diplomacy & Treaties', iconType: 'circle' },
  energy: { shape: '⬡', name: 'Energy Security', iconType: 'hexagon' },
  economy: { shape: '○', name: 'Economy & Sanctions', iconType: 'outlined_circle' },
  technology: { shape: '⬢', name: 'Technology & Cyber', iconType: 'filled_hexagon' },
  infrastructure: { shape: '▣', name: 'Critical Infrastructure', iconType: 'box' },
  politics: { shape: '◈', name: 'Political Upheaval', iconType: 'double_diamond' }
};


export const REGIONAL_THEATERS = [
  { id: 'middle_east', name: 'Middle East', lat: 26.0, lng: 48.0, zoom: 2.2 },
  { id: 'europe', name: 'Europe', lat: 50.0, lng: 25.0, zoom: 2.3 },
  { id: 'indo_pacific', name: 'Indo-Pacific', lat: 18.0, lng: 118.0, zoom: 2.1 },
  { id: 'south_asia', name: 'South Asia', lat: 22.0, lng: 78.0, zoom: 2.4 },
  { id: 'africa', name: 'Africa', lat: 5.0, lng: 22.0, zoom: 2.0 },
  { id: 'americas', name: 'Americas', lat: 20.0, lng: -85.0, zoom: 1.9 },
  { id: 'arctic', name: 'Arctic', lat: 78.0, lng: 35.0, zoom: 2.0 },
  { id: 'global', name: 'Global / Multilateral', lat: 30.0, lng: 0.0, zoom: 1.5 }
];

export const INITIAL_INTELLIGENCE_EVENTS = [
  // ==========================================
  // MIDDLE EAST THEATER
  // ==========================================
  {
    id: 'evt_red_sea_houthi',
    title: 'Red Sea & Bab el-Mandeb Commercial Interdictions',
    headline: 'Continuous anti-ship ballistic missile and autonomous sea-drone strikes forcing global shipping diversion',
    category: 'maritime',
    priority: 'CRITICAL',
    status: 'Escalating',
    confidence: 'VERIFIED',
    changeType: 'ESCALATED',
    lat: 13.5000,
    lng: 42.8000,
    region: 'middle_east',
    regionName: 'Middle East',
    sector: 'Bab el-Mandeb / Southern Red Sea',
    publishedAt: new Date(Date.now() - 1000 * 60 * 25).toISOString(), // 25 mins ago
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
    actors: [
      { name: 'Ansar Allah (Houthis)', countryCode: 'YEM', flag: '🇾🇪', role: 'Anti-Ship Ballistic Missiles & USVs' },
      { name: 'US Navy / Combined Maritime Forces', countryCode: 'USA', flag: '🇺🇸', role: 'Operation Prosperity Guardian' },
      { name: 'Indian Navy', countryCode: 'IND', flag: '🇮🇳', role: 'Operation Sankalp Escort & Rescue' },
      { name: 'United Kingdom', countryCode: 'GBR', flag: '🇬🇧', role: 'Coalition Interception Sorties' }
    ],
    whatHappened: 'Houthi forces launched anti-ship ballistic missiles and unmanned explosive surface vessels against merchant vessels transiting the Bab el-Mandeb strait, compelling over 65% of international container traffic to bypass the Suez Canal entirely and circumnavigate the Cape of Good Hope.',
    whyItMatters: 'The Bab el-Mandeb chokepoint normally handles 12% of global trade and 30% of global container traffic. Sustained interdiction creates a structural supply chain shock, inflating maritime transit times by 10–14 days and consuming massive naval surface-to-air interceptor inventories.',
    globalImpact: {
      defense: 'Naval strike groups are expending multi-million dollar Standard Missile-2/6 and Aster-30 interceptors against $20,000 Shahed-type drones, depleting Western naval magazines.',
      economy: 'Global spot container freight rates surged over 250% on Asia–Europe shipping routes.',
      energy: 'LNG and crude tankers from the Persian Gulf face higher insurance premiums and extended voyage lengths.',
      trade: 'Major manufacturing assembly lines in Europe reported component delivery delays of up to two weeks.',
      shipping: 'Suez Canal authority revenues dropped over 50%, depriving Egypt of its primary foreign exchange source.',
      diplomacy: 'Exposes the limits of multilateral naval coalitions against asymmetric non-state actors backed by Iranian technology.',
      security: 'Proliferation of precision anti-ship ballistic missiles to non-state forces irreversibly changes littoral naval warfare.'
    },
    indiaImpact: {
      documented: 'Indian Navy deployed up to 10 frontline guided-missile destroyers and frigates under Operation Sankalp, conducting successful VBSS counter-piracy operations and escorting Indian-flagged tankers.',
      potential: 'Indian merchandise exporters to Europe and the US East Coast face a 35–40% increase in freight costs and 14-day transit delays, hurting textile, engineering, and agricultural shipments.',
      analytical: 'Reinforces New Delhi’s strategic rationale for developing alternative multi-modal corridors like IMEC (India-Middle East-Europe Economic Corridor) and Chabahar port.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: Coalition airstrikes on Yemeni missile launchers are likely to degrade stockpiles but fail to achieve complete deterrence. As long as regional Gaza/Levant hostilities persist, shipping operators will continue routing around Africa, cementing elevated shipping costs into mid-2025 baseline contracts.',
    sources: [
      { title: 'US Central Command Operational Reports', publisher: 'CENTCOM', url: 'https://www.centcom.mil/', type: 'official' },
      { title: 'IMO Maritime Safety Committee Circulars', publisher: 'International Maritime Organization', url: 'https://www.imo.org/', type: 'official' },
      { title: 'Indian Navy Operation Sankalp Dossier', publisher: 'Ministry of Defence (India)', url: 'https://mod.gov.in/', type: 'official' },
      { title: 'Red Sea Crisis (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Red_Sea_crisis', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['IND', 'USA', 'YEM', 'EGY', 'IRN', 'GBR'],
      maritime: ['BAB_EL_MANDEB', 'RED_SEA', 'SUEZ_CANAL', 'GULF_OF_ADEN'],
      concepts: ['CHOKEPOINT', 'SLOC', 'GREY_ZONE', 'ASYMMETRIC_WARFARE', 'DETERRENCE'],
      military: ['BRAHMOS', 'SM6', 'SHAHED_136']
    }
  },
  {
    id: 'evt_iran_israel_standoff',
    title: 'Iran–Israel Direct Ballistic Exchange & Escalation Cycle',
    headline: 'High-risk standoff following direct state-to-state missile volleys and targeted strikes',
    category: 'military',
    priority: 'CRITICAL',
    status: 'Developing',
    confidence: 'VERIFIED',
    changeType: 'UPDATED',
    lat: 32.8000,
    lng: 44.5000,
    region: 'middle_east',
    regionName: 'Middle East',
    sector: 'Levant / Persian Gulf / Central Iran',
    publishedAt: new Date(Date.now() - 1000 * 60 * 90).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 12).toISOString(),
    actors: [
      { name: 'Israel', countryCode: 'ISR', flag: '🇮🇱', role: 'Multi-Tiered Air Defense & Preemptive Air Force' },
      { name: 'Iran', countryCode: 'IRN', flag: '🇮🇷', role: 'IRGC Aerospace Force Ballistic & Drone Volleys' },
      { name: 'United States', countryCode: 'USA', flag: '🇺🇸', role: 'THAAD Battery & Aegis Destroyer Interceptions' }
    ],
    whatHappened: 'Direct state-on-state military strikes have broken the multi-decade proxy war equilibrium. High-density hypersonic and ballistic missile volleys targeting Israeli military installations were countered by Arrow-3, David’s Sling, and US THAAD interceptors, followed by precision airstrikes on Iranian radar and missile manufacturing facilities.',
    whyItMatters: 'Transitions the Middle East from covert gray-zone conflict into overt interstate warfare between a declared threshold nuclear power (Iran) and an unacknowledged nuclear-armed state (Israel), risking catastrophic closure of the Strait of Hormuz.',
    globalImpact: {
      defense: 'Validated integrated multi-tier theater ballistic missile defense (Arrow 3, THAAD) under saturated supersonic attack.',
      economy: 'Triggered volatility spikes in global crude benchmarks (Brent crude fluctuating ±7% on escalation headlines).',
      energy: 'Heightened threat matrix for Gulf oil export infrastructure and Kharg Island terminal.',
      trade: 'Commercial civil aviation diverted away from Iranian, Iraqi, and Jordanian airspace.',
      shipping: 'Raised insurance war risk premiums for all vessels entering the Persian Gulf via Hormuz.',
      diplomacy: 'Stalled broader regional diplomatic integration under the Abraham Accords.',
      security: 'Accelerated Iranian domestic debates regarding formal weaponization of 60%-enriched uranium stockpiles.'
    },
    indiaImpact: {
      documented: 'Over 8.5 million Indian expatriates reside across Gulf Cooperation Council countries, generating $35B+ in annual inward remittances; safety protocols activated.',
      potential: 'Crude oil import bill rises by ~$1.5 billion annually for every sustained $1/barrel increase in Brent prices.',
      analytical: 'India maintains delicate strategic neutrality, retaining defense partnerships with Israel while securing energy and Chabahar port connectivity with Iran.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: Both sides recognize the existential hazards of all-out war. However, miscalculation during tit-for-tat retaliatory strikes or an accidental strike on nuclear facilities could trigger a wider regional confrontation involving US assets.',
    sources: [
      { title: 'IAEA Director General Reports on Iran Safeguards', publisher: 'IAEA', url: 'https://www.iaea.org/', type: 'official' },
      { title: 'IDF Operational Briefings', publisher: 'Israel Defense Forces', url: 'https://www.idf.il/en/', type: 'official' },
      { title: 'Iran-Israel Conflict (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Iran%E2%80%93Israel_conflict', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['ISR', 'IRN', 'USA', 'SAU', 'IND'],
      maritime: ['STRAIT_OF_HORMUZ', 'PERSIAN_GULF'],
      concepts: ['DETERRENCE', 'NUCLEAR_PROLIFERATION', 'AIR_DEFENCE', 'BALLISTIC_MISSILE'],
      military: ['ARROW_3', 'THAAD', 'IRON_DOME', 'F35']
    }
  },
  {
    id: 'evt_hormuz_surveillance',
    title: 'Strait of Hormuz Tanker Interception Alert',
    headline: 'IRGC naval boarding operations and electronic GPS spoofing reported near Ras Musandam',
    category: 'maritime',
    priority: 'HIGH',
    status: 'Monitoring',
    confidence: 'REPORTED',
    changeType: 'NEW',
    lat: 26.5667,
    lng: 56.2500,
    region: 'middle_east',
    regionName: 'Middle East',
    sector: 'Strait of Hormuz / Gulf of Oman',
    publishedAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 10).toISOString(),
    actors: [
      { name: 'Iran (IRGCN)', countryCode: 'IRN', flag: '🇮🇷', role: 'Fast Attack Craft & Boarding Helos' },
      { name: 'Oman', countryCode: 'OMN', flag: '🇴🇲', role: 'Musandam Peninsula Maritime Monitoring' },
      { name: 'United States Fifth Fleet', countryCode: 'USA', flag: '🇺🇸', role: 'Task Force 59 Autonomous Patrols' }
    ],
    whatHappened: 'Commercial maritime navigation authorities issued alerts regarding intermittent GPS jamming and unauthorized radio callouts by fast patrol craft targeting foreign-flagged oil tankers in the outbound traffic separation scheme near the Musandam peninsula.',
    whyItMatters: 'The Strait of Hormuz is the world’s most critical maritime chokepoint, through which approximately 21 million barrels of petroleum pass daily (roughly 21% of global petroleum liquids consumption). Any disruption causes an immediate global price shock.',
    globalImpact: {
      defense: 'Increased deployment of autonomous surface vessels and P-8A maritime reconnaissance flights by the US Fifth Fleet.',
      economy: 'Immediate 2-3% risk premium built into Asian oil refiners’ purchase contracts.',
      energy: 'Vulnerabilities highlighted for non-pipeline crude export routes from Saudi Arabia, Kuwait, UAE, and Iraq.',
      trade: 'Petrochemical feedstocks to East Asian chemical plants face shipping delays.',
      shipping: 'Maritime insurance underwriters requiring 7-day advance notice for Hormuz transits.',
      diplomacy: 'Oman engages in quiet backchannel diplomacy to defuse maritime confrontations.',
      security: 'Showcases electronic warfare and GPS deception as standard littoral coercion tactics.'
    },
    indiaImpact: {
      documented: 'India imports ~60% of its crude oil and 75% of its LNG through the Strait of Hormuz. The Indian Navy maintains regular warship presence under Operation Sankalp in the Gulf of Oman.',
      potential: 'A closure or severe slowdown would drain India’s Strategic Petroleum Reserve (SPR) within 9–10 days without emergency ration protocols.',
      analytical: 'India continues to diversify crude imports toward Russia and West Africa while expanding domestic crude storage capacity at Padur and Visakhapatnam.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: Iranian naval forces will likely use targeted, legalistic tanker detentions to exert counter-leverage against Western oil sanctions enforcement, stopping short of a full blockade which would alienate its chief customer, China.',
    sources: [
      { title: 'UK Maritime Trade Operations (UKMTO) Warnings', publisher: 'UKMTO', url: 'https://www.ukmto.org/', type: 'official' },
      { title: 'US Energy Information Administration Hormuz Factsheet', publisher: 'EIA', url: 'https://www.eia.gov/', type: 'official' },
      { title: 'Strait of Hormuz (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Strait_of_Hormuz', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['IRN', 'OMN', 'ARE', 'SAU', 'IND', 'USA'],
      maritime: ['STRAIT_OF_HORMUZ', 'PERSIAN_GULF', 'ARABIAN_SEA'],
      concepts: ['CHOKEPOINT', 'ENERGY_SECURITY', 'SLOC', 'GREY_ZONE'],
      military: ['P8I']
    }
  },

  // ==========================================
  // EUROPE THEATER
  // ==========================================
  {
    id: 'evt_ukraine_eastern_front',
    title: 'Donbas–Zaporizhzhia War of Attrition & Deep Strike Campaign',
    headline: 'High-density glide bomb assaults met with deep drone strikes against Russian energy refineries',
    category: 'military',
    priority: 'CRITICAL',
    status: 'Developing',
    confidence: 'VERIFIED',
    changeType: 'UPDATED',
    lat: 48.1500,
    lng: 37.8000,
    region: 'europe',
    regionName: 'Europe',
    sector: 'Eastern European Theater / Pokrovsk & Kupiansk',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
    actors: [
      { name: 'Ukraine', countryCode: 'UKR', flag: '🇺🇦', role: 'Territorial Defense, F-16 Operations & Long-Range UAVs' },
      { name: 'Russia', countryCode: 'RUS', flag: '🇷🇺', role: 'Multi-Axis Ground Assaults & FAB Glide Bomb Strikes' },
      { name: 'NATO Allies', countryCode: 'USA', flag: '🇺🇸', role: 'Artillery Production & Intelligence Support' }
    ],
    whatHappened: 'Intense positional warfare along a 1,000-kilometer frontline characterized by high-volume 152mm/155mm artillery exchanges, FPV drone saturation, and Russian FAB-1500/3000 UMPK glide bombs. Concurrently, Ukrainian long-range indigenous strike drones target oil refineries across western Russia.',
    whyItMatters: 'The largest conventional interstate war in Europe since 1945. It has transformed the post-Cold War security architecture, triggered Finland and Sweden’s NATO accession, accelerated global military rearmament, and reshaped worldwide commodity trade.',
    globalImpact: {
      defense: 'NATO re-prioritizing large-scale industrial ammunition production (155mm shells) and integrated air defenses.',
      economy: 'Comprehensive Western sanctions regime cutting off Russia from SWIFT and Western sovereign debt markets.',
      energy: 'Complete European decoupling from Russian piped natural gas, prompting LNG infrastructure buildout.',
      trade: 'Permanent redirection of Russian crude oil and coal exports to India and China via dark fleet tankers.',
      shipping: 'Black Sea grain corridor operates under unilateral Ukrainian anti-ship missile protection.',
      diplomacy: 'Deepened geopolitical alignment between Moscow, Beijing, Pyongyang, and Tehran.',
      security: 'Nuclear signaling and lowered operational threshold for tactical nuclear weapons in Russian military doctrine.'
    },
    indiaImpact: {
      documented: 'India ramped up imports of discounted Russian Urals crude from <2% of total imports in 2021 to over 35-40% in 2023-2024, saving billions in import costs and refining for domestic/export use.',
      potential: 'Delays in Russian defense equipment spare parts and S-400 battery deliveries due to domestic Russian military consumption.',
      analytical: 'India pursues strategic autonomy: maintaining historical friendship and defense ties with Moscow while simultaneously deepening QUAD defense ties with Washington.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: The conflict remains locked in high-attrition warfare without an immediate decisive military breakthrough by either side. Ceasefire negotiations are unlikely to produce lasting territorial settlements without binding security guarantees.',
    sources: [
      { title: 'Institute for the Study of War (ISW) Daily Assessments', publisher: 'ISW', url: 'https://www.understandingwar.org/', type: 'official' },
      { title: 'Ministry of Defence of Ukraine Updates', publisher: 'MoD Ukraine', url: 'https://www.mil.gov.ua/en/', type: 'official' },
      { title: 'Russian Ministry of Defense Bulletins', publisher: 'MoD Russia', url: 'https://eng.mil.ru/', type: 'official' },
      { title: 'Russo-Ukrainian War (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Russo-Ukrainian_War', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['UKR', 'RUS', 'USA', 'POL', 'DEU', 'IND'],
      maritime: ['BLACK_SEA', 'BALTIC_SEA'],
      concepts: ['DETERRENCE', 'ATTRITION_WARFARE', 'SANCTIONS', 'STRATEGIC_AUTONOMY', 'BALANCE_OF_POWER'],
      military: ['S400', 'PATRIOT', 'SU57', 'F16']
    }
  },
  {
    id: 'evt_baltic_infrastructure_alert',
    title: 'Baltic Sea Undersea Infrastructure Sabotage Alert',
    headline: 'Naval investigations underway into severed telecommunication and energy cables',
    category: 'infrastructure',
    priority: 'HIGH',
    status: 'Developing',
    confidence: 'REPORTED',
    changeType: 'ESCALATED',
    lat: 59.4000,
    lng: 23.5000,
    region: 'europe',
    regionName: 'Europe',
    sector: 'Gulf of Finland / Baltic Sea',
    publishedAt: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 18).toISOString(),
    actors: [
      { name: 'Finland', countryCode: 'FIN', flag: '🇫🇮', role: 'Coast Guard & Maritime Forensics' },
      { name: 'Estonia', countryCode: 'EST', flag: '🇪🇪', role: 'Subsea Cable Operator & Security' },
      { name: 'Sweden', countryCode: 'SWE', flag: '🇸🇪', role: 'Baltic Maritime Surveillance' },
      { name: 'NATO Maritime Command', countryCode: 'USA', flag: '🇺🇸', role: 'Operation Baltic Sentry' }
    ],
    whatHappened: 'Multiple fiber-optic communication lines and power interconnectors linking Finland, Sweden, Estonia, and Germany suffered physical damage consistent with anchor dragging by commercial bulk carriers and research vessels affiliated with state-directed shadow operations.',
    whyItMatters: 'Demonstrates extreme systemic vulnerability of subsea critical infrastructure (carrying 99% of transoceanic internet traffic and power grids). NATO has declared subsea sabotage a potential trigger for Article 5 collective defense consultations.',
    globalImpact: {
      defense: 'NATO established the Critical Undersea Infrastructure Coordination Cell in Northwood.',
      economy: 'Redundant rerouting of European data traffic absorbed the initial shock, but capital costs for marine security will rise.',
      energy: 'Heightened surveillance of offshore wind farms and gas interconnectors across Northern Europe.',
      trade: 'Stricter AIS and port inspection regulations for dark-fleet flagged vessels.',
      shipping: 'Baltic states demand inspection rights for vessels anchoring in proximity to critical seabed assets.',
      diplomacy: 'Intensifies hybrid warfare diplomatic confrontations between Nordic-Baltic capitals and Moscow.',
      security: 'Highlights the grey-zone challenge: attributing malicious anchor dragging vs navigational mishap.'
    },
    indiaImpact: {
      documented: 'No direct territorial impact, but Indian telecom giants (Tata Communications, Reliance Jio) operate thousands of route kilometers of submarine cables globally.',
      potential: 'Prompts security review of subsea landing stations in Mumbai and Chennai that link India to Southeast Asia and Europe.',
      analytical: 'India recognizes subsea cables as vital national infrastructure requiring dedicated Indian Navy and Coast Guard seabed monitoring capabilities.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: NATO will formalize continuous autonomous underwater vehicle (AUV) patrols across high-density choke areas. Expect European nations to push for updated UNCLOS frameworks regarding seabed infrastructure security.',
    sources: [
      { title: 'NATO Statement on Undersea Infrastructure Protection', publisher: 'NATO', url: 'https://www.nato.int/', type: 'official' },
      { title: 'Finnish Border Guard Official Investigation Briefings', publisher: 'Raja.fi', url: 'https://raja.fi/en/', type: 'official' },
      { title: 'Baltic Sea Cable Disruptions (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Balticconnector', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['FIN', 'EST', 'SWE', 'DEU', 'RUS'],
      maritime: ['BALTIC_SEA', 'DANISH_STRAITS'],
      concepts: ['GREY_ZONE', 'CRITICAL_INFRASTRUCTURE', 'COLLECTIVE_SECURITY', 'EEZ'],
      military: []
    }
  },
  {
    id: 'evt_suwalki_gap_hardening',
    title: 'Suwałki Gap & Kaliningrad Frontier Militarization',
    headline: 'Enhanced forward military posture and anti-access missile deployments along Polish-Lithuanian corridor',
    category: 'military',
    priority: 'HIGH',
    status: 'Stable',
    confidence: 'VERIFIED',
    changeType: 'STABLE',
    lat: 54.1000,
    lng: 23.3000,
    region: 'europe',
    regionName: 'Europe',
    sector: 'Suwałki Gap / Belarus–Poland Border',
    publishedAt: new Date(Date.now() - 1000 * 60 * 300).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 40).toISOString(),
    actors: [
      { name: 'Poland', countryCode: 'POL', flag: '🇵🇱', role: 'Shield-East Fortifications & K2/Abrams Armor' },
      { name: 'Lithuania', countryCode: 'LTU', flag: '🇱🇹', role: 'Permanent German Brigade Basing' },
      { name: 'Belarus', countryCode: 'BLR', flag: '🇧🇾', role: 'Joint Russian Combat Training Centers' },
      { name: 'Russia', countryCode: 'RUS', flag: '🇷🇺', role: 'Kaliningrad Iskander-M Nuclear Deployment' }
    ],
    whatHappened: 'Poland initiated construction on "Shield-East", a $2.5 billion fortified defense belt of anti-tank ditches, minefields, and automated reconnaissance posts along its borders with Belarus and the Kaliningrad exclave, securing the narrow 65-mile Suwałki Gap.',
    whyItMatters: 'The Suwałki Gap connects Poland with the Baltic states (Lithuania, Latvia, Estonia). In any NATO-Russia conflict, a Russian thrust from Belarus to Kaliningrad would sever land connectivity to the Baltics.',
    globalImpact: {
      defense: 'Germany permanently stationing a combat-ready armored brigade (Panzerbrigade 45) in Lithuania by 2027.',
      economy: 'Significant diversion of Polish and Baltic national budgets toward defense spending (both exceeding 3-4% of GDP).',
      energy: 'Baltic electrical grids fully synchronizing with Continental European Network, breaking historical BRELL ties.',
      trade: 'Strict land customs checks and restricted transit freight to Kaliningrad.',
      shipping: 'Increased naval escort requirements in the eastern Baltic.',
      diplomacy: 'Hardens the new geopolitical division of Europe along the eastern frontier.',
      security: 'Permanent forward presence of nuclear-capable Iskander-M systems in Kaliningrad creates A2/AD envelope over Poland.'
    },
    indiaImpact: {
      documented: 'Poland has emerged as a key European partner for India, with expanding bilateral trade and visits by Prime Minister Modi.',
      potential: 'Any escalation in Eastern Europe would disrupt India-Europe air freight routes and divert Western diplomatic bandwidth away from the Indo-Pacific.',
      analytical: 'India continues to advocate peaceful dialogue while monitoring how NATO rearmament impacts Russian defense production commitments.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: The Suwałki corridor will remain one of the most heavily fortified frontiers on earth. Direct military conflict remains improbable due to NATO Article 5 deterrence, but hybrid provocations (migrant weaponization, GPS jamming) will persist.',
    sources: [
      { title: 'Polish Ministry of National Defence East Shield Announcement', publisher: 'Gov.pl', url: 'https://www.gov.pl/web/national-defence', type: 'official' },
      { title: 'NATO Vilnius & Washington Summit Declarations', publisher: 'NATO', url: 'https://www.nato.int/', type: 'official' },
      { title: 'Suwałki Gap (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Suwa%C5%82ki_Gap', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['POL', 'LTU', 'RUS', 'BLR', 'DEU'],
      maritime: ['BALTIC_SEA'],
      concepts: ['CHOKEPOINT', 'A2_AD', 'BUFFER_STATE', 'EXCLAVE', 'COLLECTIVE_SECURITY'],
      military: ['ISKANDER', 'LEOPARD_2', 'PATRIOT']
    }
  },

  // ==========================================
  // INDO-PACIFIC THEATER
  // ==========================================
  {
    id: 'evt_taiwan_strait_airsea',
    title: 'Taiwan Strait Joint Combat Readiness Drills & ADIZ Pressure',
    headline: 'High-tempo PLA naval encirclement maneuvers and cross-median line aerial sorties',
    category: 'military',
    priority: 'CRITICAL',
    status: 'Developing',
    confidence: 'VERIFIED',
    changeType: 'UPDATED',
    lat: 24.2000,
    lng: 119.8000,
    region: 'indo_pacific',
    regionName: 'Indo-Pacific',
    sector: 'Taiwan Strait / First Island Chain',
    publishedAt: new Date(Date.now() - 1000 * 60 * 35).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 8).toISOString(),
    actors: [
      { name: 'China (PLA)', countryCode: 'CHN', flag: '🇨🇳', role: 'Eastern Theater Command Carrier Combat Drills' },
      { name: 'Taiwan (ROC)', countryCode: 'TWN', flag: '🇹🇼', role: 'Porcupine Defense & Sky Bow III SAM Batteries' },
      { name: 'United States', countryCode: 'USA', flag: '🇺🇸', role: 'Seventh Fleet FONOPs & Deterrence Deployments' },
      { name: 'Japan', countryCode: 'JPN', flag: '🇯🇵', role: 'Southwest Islands Radar & Anti-Ship Batteries' }
    ],
    whatHappened: 'The People’s Liberation Army deployed dozens of multirole combat aircraft and guided-missile destroyers around Taiwan, conducting joint air-sea blockading drills and crossing the historical median line daily to exhaust Taiwanese defensive alert readiness.',
    whyItMatters: 'Taiwan manufactures over 60% of the world’s microchips and over 90% of sub-3nm advanced logic semiconductors (TSMC). A maritime blockade or kinetic assault would immediately trigger a $2+ trillion global depression.',
    globalImpact: {
      defense: 'Accelerates US and allied dispersal of air and naval forces under Agile Combat Employment across the Western Pacific.',
      economy: 'Estimates by Bloomberg Economics project a 10% global GDP hit in the event of a Taiwan conflict.',
      energy: 'Over 50% of the global container fleet transits the Taiwan Strait annually.',
      trade: 'Global automotive, consumer electronics, and defense production lines would halt within weeks if semiconductor exports are severed.',
      shipping: 'Maritime insurers would cancel hull risk coverage for the entire East and South China Seas.',
      diplomacy: 'Deepens US trilateral defense ties with Japan and the Philippines under the First Island Chain framework.',
      security: 'Serves as the primary operational bellwether for potential great power war between the US and China.'
    },
    indiaImpact: {
      documented: 'India established the India-Taipei Association and Taiwanese tech giants (Foxconn, PSMC, Wistron/Tata) are investing tens of billions in Indian electronics and semiconductor fabrication (Gujarat Dholera fab).',
      potential: 'A Taiwan conflict would halt India’s smartphone, automobile, and IT manufacturing ecosystems overnight.',
      analytical: 'India adheres to standard diplomatic formulation while quietly strengthening economic, semiconductor, and track-1.5 strategic dialogue with Taipei.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: Beijing is currently prioritizing grey-zone quarantine rehearsals and psychological warfare over immediate amphibious invasion, seeking to coerce Taiwan through economic pressure and naval cordoning before the 2027 PLA centennial.',
    sources: [
      { title: 'Ministry of National Defense (Taiwan) Real-time Military Updates', publisher: 'MND ROC', url: 'https://www.mnd.gov.tw/english/', type: 'official' },
      { title: 'US Indo-Pacific Command Posture Statements', publisher: 'INDOPACOM', url: 'https://www.pacom.mil/', type: 'official' },
      { title: 'Taiwan Strait Crisis (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Taiwan_Strait_crises', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['TWN', 'CHN', 'USA', 'JPN', 'IND'],
      maritime: ['TAIWAN_STRAIT', 'SOUTH_CHINA_SEA', 'EAST_CHINA_SEA'],
      concepts: ['FIRST_ISLAND_CHAIN', 'GREY_ZONE', 'A2_AD', 'DETERRENCE', 'FREEDOM_OF_NAVIGATION'],
      military: ['J20', 'F16', 'PATRIOT', 'TYPE_055']
    }
  },
  {
    id: 'evt_south_china_sea_shoal',
    title: 'Second Thomas Shoal & Sabina Shoal Maritime Confrontation',
    headline: 'Chinese Coast Guard water cannoning and hull ramming of Philippine resupply missions',
    category: 'maritime',
    priority: 'HIGH',
    status: 'Escalating',
    confidence: 'VERIFIED',
    changeType: 'ESCALATED',
    lat: 9.8700,
    lng: 115.8500,
    region: 'indo_pacific',
    regionName: 'Indo-Pacific',
    sector: 'Spratly Islands / West Philippine Sea',
    publishedAt: new Date(Date.now() - 1000 * 60 * 50).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 14).toISOString(),
    actors: [
      { name: 'Philippines', countryCode: 'PHL', flag: '🇵🇭', role: 'Coast Guard Resupply to BRP Sierra Madre Outpost' },
      { name: 'China', countryCode: 'CHN', flag: '🇨🇳', role: 'Coast Guard & Maritime Militia Blockade' },
      { name: 'United States', countryCode: 'USA', flag: '🇺🇸', role: 'Mutual Defense Treaty Security Guarantor' },
      { name: 'India', countryCode: 'IND', flag: '🇮🇳', role: 'BrahMos Missile Supplier & UNCLOS Champion' }
    ],
    whatHappened: 'China Coast Guard vessels employed high-pressure water cannons, high-speed hull rammings, and acoustic sonic weapons against Philippine Coast Guard and civilian resupply craft attempting to reach the grounded BRP Sierra Madre naval outpost at Second Thomas Shoal.',
    whyItMatters: 'Directly tests the operational threshold of the 1951 US-Philippines Mutual Defense Treaty. If a Philippine service member is killed during Chinese maritime interdiction, Manila could formally invoke Article IV, compelling US military intervention.',
    globalImpact: {
      defense: 'US and Philippine armed forces expanded Balikatan drills and access to four additional EDCA bases facing Taiwan and the SCS.',
      economy: 'Chills offshore energy exploration in the Reed Bank (estimated 5.4 trillion cubic feet of natural gas).',
      energy: 'Maritime supply lanes through the South China Sea carry over $3.4 trillion in annual global trade.',
      trade: 'Threatens customary rights of regional artisanal fishing fleets across Southeast Asia.',
      shipping: 'Commercial ships navigating the main SCS deep-water routes remain unaffected, but insurance surveillance is heightened.',
      diplomacy: 'Exposes deep fissures within ASEAN, with Manila taking a confrontational public stance while other members remain passive.',
      security: 'China creating an irreversible de facto administrative jurisdiction despite the 2016 Permanent Court of Arbitration ruling.'
    },
    indiaImpact: {
      documented: 'India delivered the first batteries of shore-based BrahMos supersonic anti-ship cruise missiles to the Philippine Marine Corps under a $375M export agreement.',
      potential: 'Over 55% of India’s trade with the Indo-Pacific transits the South China Sea; freedom of navigation is vital for Indian merchant shipping.',
      analytical: 'India firmly backed the 2016 Hague Arbitration award and supports the sovereignty of ASEAN coastal states to uphold a rules-based maritime order.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: While Manila and Beijing reached a provisional resupply protocol, tactical friction will flare repeatedly as China seeks to prevent structural repairs on the deteriorating BRP Sierra Madre hull without firing kinetic weapons.',
    sources: [
      { title: 'Philippine Coast Guard Official Incident Briefings', publisher: 'PCG', url: 'https://coastguard.gov.ph/', type: 'official' },
      { title: 'Permanent Court of Arbitration South China Sea Award', publisher: 'PCA', url: 'https://pca-cpa.org/', type: 'official' },
      { title: 'Second Thomas Shoal (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Second_Thomas_Shoal', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['PHL', 'CHN', 'USA', 'IND', 'VNM'],
      maritime: ['SOUTH_CHINA_SEA', 'MALACCA_STRAIT'],
      concepts: ['EEZ', 'GREY_ZONE', 'FREEDOM_OF_NAVIGATION', 'CHOKEPOINT'],
      military: ['BRAHMOS', 'P8I']
    }
  },
  {
    id: 'evt_korean_peninsula_missiles',
    title: 'Korean Peninsula Solid-Fuel ICBM & Border Severance Escalation',
    headline: 'Pyongyang formally codifies South Korea as principal enemy and demolishes inter-Korean transit links',
    category: 'military',
    priority: 'HIGH',
    status: 'Developing',
    confidence: 'VERIFIED',
    changeType: 'UPDATED',
    lat: 38.3000,
    lng: 127.1000,
    region: 'indo_pacific',
    regionName: 'Indo-Pacific',
    sector: 'Korean Demilitarized Zone / Sea of Japan',
    publishedAt: new Date(Date.now() - 1000 * 60 * 75).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 20).toISOString(),
    actors: [
      { name: 'North Korea (DPRK)', countryCode: 'PRK', flag: '🇰🇵', role: 'Solid-Fuel Hwasong-19 ICBM Tests & Fortifications' },
      { name: 'South Korea (ROK)', countryCode: 'KOR', flag: '🇰🇷', role: 'Kill Chain Preemptive Strike & Hyunmoo-5 Deployment' },
      { name: 'United States', countryCode: 'USA', flag: '🇺🇸', role: 'Nuclear Consultative Group & SSBN Port Visits' }
    ],
    whatHappened: 'North Korea conducted high-apogee test launches of the Hwasong-19 solid-fuel intercontinental ballistic missile, dynamited road and railway links crossing the DMZ, and revised its constitution to abandon reunification, declaring South Korea a permanent hostile foreign adversary.',
    whyItMatters: 'Completely dismantles the 30-year inter-Korean reconciliation architecture. Combined with a comprehensive defense pact with Moscow that includes mutual military assistance, North Korea’s nuclear threshold has substantially decreased.',
    globalImpact: {
      defense: 'US, South Korea, and Japan activated real-time missile warning data sharing networks.',
      economy: 'Geopolitical risk premium on South Korean capital markets ("Korea discount") remains elevated.',
      energy: 'Maritime LNG routes into South Korea remain closely guarded.',
      trade: 'South Korea expanding global arms exports (K2 tanks, K9 howitzers, FA-50 jets) to NATO allies.',
      shipping: 'Commercial airspace and maritime routes in the Sea of Japan rerouted during unannounced missile tests.',
      diplomacy: 'Deepened trilateral Washington-Seoul-Tokyo security architecture codified at Camp David.',
      security: 'Substantial transfer of North Korean artillery ammunition and ballistic missiles to Russia in exchange for advanced missile technology.'
    },
    indiaImpact: {
      documented: 'India maintains diplomatic relations with Pyongyang while strictly enforcing UN Security Council non-proliferation sanctions.',
      potential: 'Historical proliferation links between North Korea and Pakistan (Khan research laboratories missile-for-enrichment barter in the 1990s) remain a key Indian intelligence concern.',
      analytical: 'India continues to call for denuclearization of the Korean Peninsula and regional peace through dialogue.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: Pyongyang will likely execute its seventh underground nuclear test or a live-fire multiple reentry vehicle (MIRV) atmospheric test to demonstrate verified capability to strike mainland US cities before major international summits.',
    sources: [
      { title: 'UN Security Council Panel of Experts on DPRK Reports', publisher: 'United Nations', url: 'https://www.un.org/securitycouncil/', type: 'official' },
      { title: 'ROK Joint Chiefs of Staff Operational Alerts', publisher: 'JCS Korea', url: 'https://www.jcs.mil.kr/', type: 'official' },
      { title: 'North Korea–South Korea Relations (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/North_Korea%E2%80%93South_Korea_relations', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['PRK', 'KOR', 'USA', 'RUS', 'JPN', 'IND'],
      maritime: ['SEA_OF_JAPAN', 'YELLOW_SEA'],
      concepts: ['NUCLEAR_DETERRENCE', 'EXTENDED_DETERRENCE', 'ICBM', 'CONFIDENCE_BUILDING_MEASURES'],
      military: ['THAAD', 'PATRIOT']
    }
  },

  // ==========================================
  // SOUTH ASIA THEATER
  // ==========================================
  {
    id: 'evt_lac_disengagement_verification',
    title: 'India–China Line of Actual Control Patrol Disengagement Verification',
    headline: 'Coordinated patrol disengagement protocols implemented at Depsang and Demchok following Kazan agreement',
    category: 'military',
    priority: 'HIGH',
    status: 'De-escalating',
    confidence: 'VERIFIED',
    changeType: 'UPDATED',
    lat: 34.2000,
    lng: 78.4000,
    region: 'south_asia',
    regionName: 'South Asia',
    sector: 'Eastern Ladakh / Depsang Plains & Demchok',
    publishedAt: new Date(Date.now() - 1000 * 60 * 180).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    actors: [
      { name: 'India', countryCode: 'IND', flag: '🇮🇳', role: 'Indian Army XIV Corps Verification & High-Altitude Patrols' },
      { name: 'China (PLA)', countryCode: 'CHN', flag: '🇨🇳', role: 'Western Theater Command Xinjiang Military District' }
    ],
    whatHappened: 'Following the bilateral summit between Prime Minister Modi and President Xi in Kazan, Indian and Chinese military commanders finalized coordinated ground patrolling arrangements, dismantling temporary structures and verifying patrol schedules in Depsang and Demchok.',
    whyItMatters: 'Resolves the multi-year military freeze triggered by the 2020 Galwan Valley clash. However, it represents tactical disengagement rather than strategic de-escalation: over 100,000 forward-deployed troops with armor and air defenses remain stationed across the Himalayas.',
    globalImpact: {
      defense: 'India hardened permanent mountain infrastructure (Zojila tunnel, Sela tunnel, Nyoma advanced landing ground).',
      economy: 'Signs of selective relaxation on non-sensitive Chinese FDI scrutiny in Indian green manufacturing sectors.',
      energy: 'No direct impact on energy corridors, but Himalayan water security remains a long-term flashpoint.',
      trade: 'India-China bilateral trade continues at record highs ($118B+), dominated by Chinese industrial machinery imports.',
      shipping: 'Maritime surveillance across the Malacca choke-point remains a key Indian Navy contingency against PLA Navy.',
      diplomacy: 'Demonstrates the utility of BRICS multilateral summits as off-ramps for bilateral disputes.',
      security: 'Sets a template for mutual electronic and physical verification protocols without political boundary concessions.'
    },
    indiaImpact: {
      documented: 'Restores Indian Army patrolling rights to customary Patrol Points (PPs) up to the Line of Actual Control that were blocked since April 2020.',
      potential: 'Reduces the immediate operational friction and risk of accidental hand-to-hand combat in high-altitude sub-zero sectors.',
      analytical: 'India will not lower its operational guard; permanent infrastructure, dual-use roads, and integrated mountain strike corps will remain fully stationed along the Northern frontier.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: The disengagement creates tactical breathing space, but mutual strategic distrust will endure. Complete troop de-induction back to pre-2020 peace stations will require years of high-level diplomatic and military negotiations.',
    sources: [
      { title: 'Ministry of External Affairs (India) Press Briefing on Disengagement', publisher: 'MEA India', url: 'https://www.mea.gov.in/', type: 'official' },
      { title: 'Ministry of National Defense (PRC) Regular Press Conference', publisher: 'MND China', url: 'http://eng.mod.gov.cn/', type: 'official' },
      { title: '2020–2021 China–India Skirmishes (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/2020%E2%80%932021_China%E2%80%93India_skirmishes', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['IND', 'CHN'],
      maritime: ['INDIAN_OCEAN'],
      concepts: ['CONFIDENCE_BUILDING_MEASURES', 'STRATEGIC_AUTONOMY', 'BALANCE_OF_POWER', 'TERRITORIAL_DISPUTE'],
      military: ['BRAHMOS', 'S400', 'AKASH']
    }
  },
  {
    id: 'evt_pak_afghan_durand_clashes',
    title: 'Pakistan–Afghanistan Durand Line Frontier Skirmishes',
    headline: 'Cross-border artillery exchanges and air strikes targeting TTP hideouts amid rising bilateral hostility',
    category: 'military',
    priority: 'HIGH',
    status: 'Escalating',
    confidence: 'REPORTED',
    changeType: 'ESCALATED',
    lat: 34.1500,
    lng: 71.1000,
    region: 'south_asia',
    regionName: 'South Asia',
    sector: 'Durand Line / Khyber Pakhtunkhwa & Kunar',
    publishedAt: new Date(Date.now() - 1000 * 60 * 110).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 22).toISOString(),
    actors: [
      { name: 'Pakistan Armed Forces', countryCode: 'PAK', flag: '🇵🇰', role: 'Operation Azm-e-Istehkam & Cross-Border Drone Strikes' },
      { name: 'Afghan Taliban Administration', countryCode: 'AFG', flag: '🇦🇫', role: 'Border Heavy Artillery Retaliation' },
      { name: 'Tehrik-i-Taliban Pakistan (TTP)', countryCode: 'PAK', flag: '🏴', role: 'Asymmetric Insurgency & Base Raids' }
    ],
    whatHappened: 'Pakistan Air Force fighter jets launched cross-border airstrikes into Khost and Paktika provinces targeting TTP militant commanders, drawing direct heavy artillery counter-bombardment from Afghan Taliban border guards along the disputed Durand Line.',
    whyItMatters: 'The collapse of security ties between Islamabad and the Afghan Taliban shatters Pakistan’s historical doctrine of "strategic depth", forcing Pakistan’s military to divert resources away from its eastern border with India to secure its volatile western frontier.',
    globalImpact: {
      defense: 'Significant depletion of Pakistani internal security capacity; recurring attacks on Chinese CPEC engineers in Balochistan.',
      economy: 'Closure of key transit trade border gates (Torkham and Chaman), freezing landlocked Afghan commerce.',
      energy: 'Stalls regional pipeline projects such as TAPI (Turkmenistan-Afghanistan-Pakistan-India) and CASA-1000 power transmission.',
      trade: 'Pakistani fruit, vegetable, and cement exports to Central Asia severely disrupted.',
      shipping: 'Karachi and Gwadar ports experience sharp drop in Afghan transit cargo handling.',
      diplomacy: 'Kabul builds quiet diplomatic engagement with New Delhi and Central Asian republics, bypassing Islamabad.',
      security: 'Risk of regional terrorist contagion involving ISKP (Islamic State Khorasan Province).'
    },
    indiaImpact: {
      documented: 'India operates a Technical Mission in Kabul providing humanitarian food aid, medical supplies, and development assistance.',
      potential: 'Preoccupation of Pakistani military establishment on its western frontier reduces Pakistan’s conventional military flexibility along the Line of Control in Kashmir.',
      analytical: 'India closely monitors cross-border militant dynamics to ensure terror groups do not acquire advanced weaponry left behind by Western forces.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: The Afghan Taliban will not disarm the TTP due to deep ideological and tribal bonds. Cross-border airstrikes and border closures will become a permanent feature of bilateral relations, cementing long-term instability in Pakistan’s northwest.',
    sources: [
      { title: 'Inter-Services Public Relations (ISPR) Pakistan Press Releases', publisher: 'ISPR', url: 'https://ispr.gov.pk/', type: 'official' },
      { title: 'UNAMA Afghanistan Human Rights & Security Reports', publisher: 'UNAMA', url: 'https://unama.unmissions.org/', type: 'official' },
      { title: 'Durand Line (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Durand_Line', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['PAK', 'AFG', 'IND', 'CHN'],
      maritime: ['ARABIAN_SEA'],
      concepts: ['STRATEGIC_DEPTH', 'PROXY_WAR', 'ASYMMETRIC_WARFARE', 'BUFFER_STATE'],
      military: []
    }
  },
  {
    id: 'evt_maldives_strategic_recalibration',
    title: 'Maldives Maritime Security Reset & Indian Ocean Patrols',
    headline: 'President Muizzu visits New Delhi to stabilize financial ties and revive comprehensive maritime cooperation',
    category: 'diplomacy',
    priority: 'MEDIUM',
    status: 'Stable',
    confidence: 'VERIFIED',
    changeType: 'UPDATED',
    lat: 4.1755,
    lng: 73.5093,
    region: 'south_asia',
    regionName: 'South Asia',
    sector: 'Central Indian Ocean / Male Atoll',
    publishedAt: new Date(Date.now() - 1000 * 60 * 240).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    actors: [
      { name: 'Maldives', countryCode: 'MDV', flag: '🇲🇻', role: 'Economic Realignment & Currency Swap Agreement' },
      { name: 'India', countryCode: 'IND', flag: '🇮🇳', role: 'First Responder / SAGAR Maritime Domain Awareness' },
      { name: 'China', countryCode: 'CHN', flag: '🇨🇳', role: 'Infrastructure Loans & Research Vessel Port Calls' }
    ],
    whatHappened: 'Following an initial "India Out" platform, President Mohamed Muizzu executed a pragmatic pivot back to New Delhi, securing a $400 million currency swap line and $360 million financial assistance package while agreeing to a new Vision for Economic and Maritime Security Partnership.',
    whyItMatters: 'The Maldives sits directly astride the major East-West shipping routes connecting the Strait of Malacca with the Persian Gulf and Red Sea. Great-power naval competition between India and China for access to Maldivian atolls is intense.',
    globalImpact: {
      defense: 'Civilian technical personnel replaced Indian military aviation crews operating Dornier 228 and Dhruv helicopters.',
      economy: 'India averted an imminent Maldivian sovereign default on foreign debt obligations.',
      energy: 'Security of Indian Ocean SLOCs passing through the Eight Degree and One-and-a-Half Degree Channels affirmed.',
      trade: 'India-Maldives Free Trade Agreement negotiations initiated.',
      shipping: 'Safe transit guaranteed for commercial tankers traversing central Indian Ocean waters.',
      diplomacy: 'Highlights India’s "Neighbourhood First" policy and SAGAR (Security and Growth for All in the Region) vision.',
      security: 'Chinese oceanic research vessels continue scientific hydrographic mapping in the Maldives’ EEZ.'
    },
    indiaImpact: {
      documented: 'India successfully safeguarded its critical maritime security perimeter in its immediate backyard through timely fiscal and security diplomacy.',
      potential: 'Prevents establishment of any foreign military naval base in the central Indian Ocean.',
      analytical: 'Reaffirms that economic realities and geographic proximity inevitably compel Indian Ocean littoral island states to maintain cooperative relations with New Delhi.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: Male will continue to play off New Delhi and Beijing for maximum financial infrastructure benefits, but will carefully observe Indian red lines concerning foreign naval basing.',
    sources: [
      { title: 'Joint Statement on India-Maldives Comprehensive Economic Partnership', publisher: 'MEA India', url: 'https://www.mea.gov.in/', type: 'official' },
      { title: 'President’s Office Republic of Maldives Press Releases', publisher: 'Presidency Maldives', url: 'https://presidency.gov.mv/', type: 'official' },
      { title: 'India–Maldives Relations (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/India%E2%80%93Maldives_relations', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['MDV', 'IND', 'CHN'],
      maritime: ['INDIAN_OCEAN', 'ARABIAN_SEA'],
      concepts: ['SLOC', 'STRATEGIC_AUTONOMY', 'CHOKEPOINT', 'EEZ'],
      military: ['P8I', 'DORNIER_228']
    }
  },

  // ==========================================
  // AFRICA THEATER
  // ==========================================
  {
    id: 'evt_sudan_civil_war_redsea',
    title: 'Sudan War for Port Sudan & Red Sea Littoral Control',
    headline: 'SAF and RSF battle across Khartoum and Gezira while Port Sudan serves as wartime administrative capital',
    category: 'military',
    priority: 'HIGH',
    status: 'Developing',
    confidence: 'REPORTED',
    changeType: 'NEW',
    lat: 19.6167,
    lng: 37.2167,
    region: 'africa',
    regionName: 'Africa',
    sector: 'Port Sudan / Red Sea Coast & Khartoum',
    publishedAt: new Date(Date.now() - 1000 * 60 * 140).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 28).toISOString(),
    actors: [
      { name: 'Sudanese Armed Forces (SAF)', countryCode: 'SDN', flag: '🇸🇩', role: 'General Burhan Administration & Drone Air Operations' },
      { name: 'Rapid Support Forces (RSF)', countryCode: 'SDN', flag: '🇸🇩', role: 'General Hemedti Paramilitary Ground Dominance' },
      { name: 'Regional External Actors', countryCode: 'ARE', flag: '🇦🇪', role: 'Covert Logistics & Gold Smuggling Networks' }
    ],
    whatHappened: 'The catastrophic civil war between the Sudanese Armed Forces and the paramilitary Rapid Support Forces has displaced over 11 million people. SAF retains control over Port Sudan on the Red Sea, using it to receive weapons shipments and negotiate naval logistics access with Russia and Iran.',
    whyItMatters: 'Sudan’s 850 km Red Sea coastline sits directly across from Saudi Arabia and adjacent to critical Bab el-Mandeb trade lanes. Foreign powers (Russia, UAE, Iran, Turkey) compete aggressively for naval basing rights at Port Sudan.',
    globalImpact: {
      defense: 'Potential establishment of a Russian naval logistical support facility on the Red Sea.',
      economy: 'Severe humanitarian collapse; famine impacting 25 million people across Sudan.',
      energy: 'Disrupts crude oil exports from landlocked South Sudan via the Petrodar pipeline to the Bashayer marine terminal.',
      trade: 'Gum arabic, gold, and sesame seed global supply chains severely disrupted.',
      shipping: 'Port Sudan remains operational but subject to severe war risk insurance surcharges.',
      diplomacy: 'Multiple peace initiatives (Jeddah platform, African Union) stalled due to lack of ceasefire enforcement.',
      security: 'Proliferation of advanced combat drones supplied by foreign sponsors to both belligerents.'
    },
    indiaImpact: {
      documented: 'Indian Navy and Air Force executed "Operation Kaveri" in April 2023, successfully evacuating over 4,000 Indian citizens and foreign nationals from Port Sudan.',
      potential: 'Indian state-owned ONGC Videsh Limited (OVL) holds significant oil equity in South Sudan and Sudan pipelines that have faced force majeure shutdowns.',
      analytical: 'India continues to provide emergency medical and food relief while monitoring naval developments along the Red Sea coast.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: Neither faction possesses the military strength to conquer the entire country, pointing toward a protracted territorial partition with SAF controlling the East and Red Sea coast, and RSF dominating Darfur and parts of Khartoum.',
    sources: [
      { title: 'UN OCHA Sudan Humanitarian Situation Reports', publisher: 'UN OCHA', url: 'https://reports.unocha.org/', type: 'official' },
      { title: 'African Union Peace and Security Council Bulletins', publisher: 'African Union', url: 'https://www.peaceau.org/', type: 'official' },
      { title: 'War in Sudan (2023–present) (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/War_in_Sudan_(2023%E2%80%93present)', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['SDN', 'EGY', 'SAU', 'ARE', 'IND', 'RUS'],
      maritime: ['RED_SEA', 'BAB_EL_MANDEB'],
      concepts: ['PROXY_WAR', 'CHOKEPOINT', 'SLOC', 'ENERGY_SECURITY'],
      military: []
    }
  },
  {
    id: 'evt_sahel_confederation_aes',
    title: 'Alliance of Sahel States (AES) Severance from ECOWAS',
    headline: 'Mali, Niger, and Burkina Faso formalize anti-Western confederation and expel Western military missions',
    category: 'diplomacy',
    priority: 'MEDIUM',
    status: 'Stable',
    confidence: 'VERIFIED',
    changeType: 'UPDATED',
    lat: 13.5137,
    lng: 2.1098,
    region: 'africa',
    regionName: 'Africa',
    sector: 'Sahel Belt / Niamey, Bamako & Ouagadougou',
    publishedAt: new Date(Date.now() - 1000 * 60 * 360).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 55).toISOString(),
    actors: [
      { name: 'Confederation of Sahel States (AES)', countryCode: 'NER', flag: '🇳🇪', role: 'Military Juntas of Niger, Mali & Burkina Faso' },
      { name: 'Russia (Africa Corps)', countryCode: 'RUS', flag: '🇷🇺', role: 'Security Assistance, Air Support & Mining Concessions' },
      { name: 'ECOWAS', countryCode: 'NGA', flag: '🇳🇬', role: 'West African Regional Bloc' }
    ],
    whatHappened: 'The military administrations of Niger, Mali, and Burkina Faso formally ratified the Confederation of Sahel States (AES) charter, exiting ECOWAS, terminating French counter-terror pacts, and expelling US drone forces from Air Base 201 in Agadez in favor of Russian security deployment.',
    whyItMatters: 'Represents the most dramatic geopolitical realignment in West Africa in decades, completely reversing Western counter-terrorism architecture and handing Moscow control over crucial uranium, gold, and lithium mineral belts.',
    globalImpact: {
      defense: 'Closure of US Air Base 201 impairs Western drone intelligence collection across North-West Africa.',
      economy: 'Niger revoked the operating permit of France’s Orano for the massive Imouraren uranium mine.',
      energy: 'European nuclear power utilities forced to diversify uranium ore procurement away from Niger.',
      trade: 'Threat of new tariff borders and transit hurdles between AES states and coastal ECOWAS ports (Cotonou, Lomé).',
      shipping: 'Increased landlocked trade routes seeking alternative access through Morocco or Algeria.',
      diplomacy: 'Demonstrates deep regional rejection of post-colonial French influence (Francafrique).',
      security: 'Surge in jihadist militant activity (JNIM and ISGS) testing the combat limits of Russian Africa Corps forces.'
    },
    indiaImpact: {
      documented: 'India maintains longstanding non-aligned diplomatic ties and developmental credit lines across West Africa.',
      potential: 'Critical mineral access (uranium for nuclear energy, lithium for EV batteries) becomes subject to new geopolitical bidding.',
      analytical: 'India continues to engage all sovereign governments pragmatically, prioritizing diaspora welfare and economic development over ideological alignment.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: The AES confederation will attempt to launch a joint biometric passport and regional investment bank, but will struggle with mounting fiscal deficits and intense jihadist pressure without broader international financial backing.',
    sources: [
      { title: 'ECOWAS Commission Communiqués', publisher: 'ECOWAS', url: 'https://ecowas.int/', type: 'official' },
      { title: 'AES Confederation Founding Charter', publisher: 'AES Portal', url: 'https://www.aes-info.org/', type: 'official' },
      { title: 'Alliance of Sahel States (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Alliance_of_Sahel_States', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['NER', 'MLI', 'BFA', 'FRA', 'RUS', 'USA'],
      maritime: ['GULF_OF_GUINEA'],
      concepts: ['SPHERE_OF_INFLUENCE', 'NON_ALIGNED_MOVEMENT', 'STRATEGIC_AUTONOMY', 'PROXY_WAR'],
      military: []
    }
  },

  // ==========================================
  // AMERICAS THEATER
  // ==========================================
  {
    id: 'evt_us_china_tariffs_semiconductors',
    title: 'US–China Advanced Technology & Critical Minerals Export Restrictions',
    headline: 'Expanded entity list controls on AI accelerators answered by Chinese gallium, germanium and antimony export bans',
    category: 'technology',
    priority: 'CRITICAL',
    status: 'Developing',
    confidence: 'VERIFIED',
    changeType: 'UPDATED',
    lat: 38.8951,
    lng: -77.0364,
    region: 'americas',
    regionName: 'Americas',
    sector: 'Washington D.C. / Beijing / Global Tech Corridors',
    publishedAt: new Date(Date.now() - 1000 * 60 * 85).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 16).toISOString(),
    actors: [
      { name: 'United States', countryCode: 'USA', flag: '🇺🇸', role: 'Bureau of Industry and Security (BIS) Export Controls' },
      { name: 'China', countryCode: 'CHN', flag: '🇨🇳', role: 'Ministry of Commerce Critical Mineral Export Restrictions' },
      { name: 'ASML / Netherlands', countryCode: 'NLD', flag: '🇳🇱', role: 'Advanced DUV/EUV Photolithography Controls' },
      { name: 'Japan', countryCode: 'JPN', flag: '🇯🇵', role: 'Semiconductor Etching Chemical Restrictions' }
    ],
    whatHappened: 'The United States enacted comprehensive export restrictions barring advanced GPU/AI accelerators and high-bandwidth memory (HBM) to Chinese technology companies, while Beijing retaliated by imposing strict licensing and outright export bans on dual-use gallium, germanium, antimony, and superhard materials to US defense contractors.',
    whyItMatters: 'The technological centerpiece of 21st-century great-power competition. Controlling the semiconductor manufacturing equipment and critical mineral supply chains determines primacy in artificial intelligence, autonomous weapons, quantum computing, and national security.',
    globalImpact: {
      defense: 'US defense procurement scrambling to build domestic stockpiles of antimony (vital for ammunition primers, infrared sensors).',
      economy: 'Bifurcation of the global technology ecosystem into separate US-aligned and Chinese-dominated technical stacks.',
      energy: 'Accelerated investments in domestic mineral processing and green chip fabrication under the US CHIPS Act.',
      trade: 'Global supply chains re-architecting toward "friend-shoring" in Southeast Asia, India, and Mexico.',
      shipping: 'Increased inspection and tracking of dual-use technology transshipments through intermediary hubs (UAE, Singapore).',
      diplomacy: 'Allies (Netherlands, Japan, South Korea) face intense US pressure to harmonize export restriction regimes.',
      security: 'China accelerates domestic indigenous substitution (SMIC, Huawei, Naura) to achieve semiconductor self-sufficiency.'
    },
    indiaImpact: {
      documented: 'India established the India Semiconductor Mission (ISM), greenlighting $18B+ in fabrication and packaging plants (Tata-PSMC in Dholera, Micron in Sanand, Murugappa in Assam).',
      potential: 'India positioned as a primary beneficiary of global tech diversification through the US-India iCET (Initiative on Critical and Emerging Technologies) and QUAD semiconductor supply chain initiatives.',
      analytical: 'India must secure assured domestic supplies of processed gallium, lithium, and rare earths to avoid trading dependence on one superpower for another.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: The semiconductor trade war will expand into next-generation technology: advanced biotechnology, quantum computing hardware, and electric vehicle battery components. Neither Washington nor Beijing will de-escalate technology export restrictions.',
    sources: [
      { title: 'US Bureau of Industry and Security Export Administration Regulations', publisher: 'BIS', url: 'https://www.bis.doc.gov/', type: 'official' },
      { title: 'Ministry of Commerce (MOFCOM) PRC Export Control Bulletins', publisher: 'MOFCOM', url: 'http://english.mofcom.gov.cn/', type: 'official' },
      { title: 'United States–China Semiconductor Competition (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Export_controls_on_semiconductors_to_China', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['USA', 'CHN', 'NLD', 'JPN', 'IND', 'TWN'],
      maritime: ['TAIWAN_STRAIT', 'PACIFIC_OCEAN'],
      concepts: ['ECONOMIC_SANCTIONS', 'STRATEGIC_AUTONOMY', 'BALANCE_OF_POWER', 'TRADE_CORRIDOR'],
      military: []
    }
  },
  {
    id: 'evt_essequibo_venezuela_guyana',
    title: 'Guayana Esequiba Territorial Claim & Offshore Oil Standoff',
    headline: 'Venezuelan military buildup along the Cuyuni River border challenging Guyanese offshore drilling concessions',
    category: 'conflict',
    priority: 'MEDIUM',
    status: 'Monitoring',
    confidence: 'REPORTED',
    changeType: 'STABLE',
    lat: 6.8000,
    lng: -59.5000,
    region: 'americas',
    regionName: 'Americas',
    sector: 'Essequibo Region / Stabroek Offshore Oil Block',
    publishedAt: new Date(Date.now() - 1000 * 60 * 420).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
    actors: [
      { name: 'Venezuela', countryCode: 'VEN', flag: '🇻🇪', role: 'Maduro Administration Annexation Claims & Riverine Bases' },
      { name: 'Guyana', countryCode: 'GUY', flag: '🇬🇾', role: 'ExxonMobil Consortium Offshore Production & ICJ Case' },
      { name: 'United States', countryCode: 'USA', flag: '🇺🇸', role: 'SOUTHCOM Joint Flight Operations & Defense Assistance' },
      { name: 'Brazil', countryCode: 'BRA', flag: '🇧🇷', role: 'Border Mediation & Armored Cavalry Deployment in Roraima' }
    ],
    whatHappened: 'Following domestic referendum maneuvers, the Venezuelan government created a designated military command and administrative state for "Guayana Esequiba", massing light armor and riverine gunboats along the border and threatening offshore oil operators licensed by Georgetown.',
    whyItMatters: 'Guyana’s offshore Stabroek block holds over 11 billion barrels of high-grade sweet crude, turning the small nation into one of the fastest-growing economies on earth. A Venezuelan military incursion would disrupt the Western Hemisphere’s biggest new oil province.',
    globalImpact: {
      defense: 'US Southern Command expanded joint air-maritime defense exercises with the Guyana Defence Force.',
      economy: 'ExxonMobil and partners continue production (>640,000 barrels/day) despite Venezuelan diplomatic saber-rattling.',
      energy: 'Guyana represents a vital non-OPEC source of light sweet crude for European and Atlantic refiners.',
      trade: 'Potential disruption of regional Caribbean commercial shipping corridors.',
      shipping: 'Maritime surveillance increased across the Orinoco delta and offshore Guyanese EEZ.',
      diplomacy: 'International Court of Justice (ICJ) issued binding provisional measures ordering Caracas not to alter the territorial status quo.',
      security: 'Brazil reinforced its northern frontier with mechanized armor to prevent Venezuelan transit through Brazilian territory.'
    },
    indiaImpact: {
      documented: 'Guyana has a significant Indian-origin diaspora (~40% Indo-Guyanese). India has high-level energy cooperation and signed an MoU for crude oil sourcing and hydrocarbon infrastructure.',
      potential: 'Indian state-owned refiners have held discussions for long-term crude purchase agreements from Guyanese offshore fields.',
      analytical: 'India supports the sovereignty and territorial integrity of Guyana under international law and the ICJ framework.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: Direct conventional military invasion remains highly improbable due to US deterrence and Brazilian diplomatic opposition. Caracas will use verbal brinkmanship to rally domestic nationalist sentiment while avoiding kinetic clash with US assets.',
    sources: [
      { title: 'International Court of Justice Order on Guyana v. Venezuela', publisher: 'ICJ', url: 'https://www.icj-cij.org/', type: 'official' },
      { title: 'Ministry of Foreign Affairs (Guyana) Official Statements', publisher: 'MinFA Guyana', url: 'https://www.minfa.gov.gy/', type: 'official' },
      { title: 'Guayana Esequiba (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Guayana_Esequiba', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['VEN', 'GUY', 'BRA', 'USA', 'IND'],
      maritime: ['CARIBBEAN_SEA', 'ATLANTIC_OCEAN'],
      concepts: ['TERRITORIAL_DISPUTE', 'ENERGY_SECURITY', 'EEZ', 'STATUS_QUO'],
      military: []
    }
  },

  // ==========================================
  // ARCTIC THEATER
  // ==========================================
  {
    id: 'evt_arctic_northern_sea_route',
    title: 'Northern Sea Route Militarization & Dual-Use Icebreaker Escorts',
    headline: 'Russia expands permanent Arctic military bases and Rosatom nuclear icebreaker escorts for Chinese container ships',
    category: 'maritime',
    priority: 'HIGH',
    status: 'Developing',
    confidence: 'VERIFIED',
    changeType: 'UPDATED',
    lat: 74.0000,
    lng: 60.0000,
    region: 'arctic',
    regionName: 'Arctic',
    sector: 'Kara Sea / Northern Sea Route / Novaya Zemlya',
    publishedAt: new Date(Date.now() - 1000 * 60 * 160).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 32).toISOString(),
    actors: [
      { name: 'Russia', countryCode: 'RUS', flag: '🇷🇺', role: 'Northern Fleet Submarine Bases & Rosatomflot Icebreakers' },
      { name: 'China', countryCode: 'CHN', flag: '🇨🇳', role: '"Polar Silk Road" Container Transit & Joint Arctic Drills' },
      { name: 'NATO (Nordic Allies)', countryCode: 'NOR', flag: '🇳🇴', role: 'Nordic Response Drills & P-8A Maritime Patrols' }
    ],
    whatHappened: 'Russia completed year-round testing of nuclear-powered icebreaker escorts along the Northern Sea Route (NSR), while Russian Coast Guard vessels and Chinese naval combatants conducted joint Arctic patrols near the Bering Strait, reinforcing Moscow’s claim of mandatory pilotage through the Siberian straits.',
    whyItMatters: 'Melting polar ice creates a transit corridor that cuts Asia-to-Europe shipping distances by 35-40% compared to the Suez Canal. However, Moscow claims the Arctic straits as internal sovereign waters, challenging US Freedom of Navigation principles.',
    globalImpact: {
      defense: 'Russia reopened over 50 Soviet-era Arctic military airfields and radar stations from Murmansk to Chukotka.',
      economy: 'Massive capital investments into Arctic LNG 2 and Vostok Oil projects, despite Western sanctions on specialized ice-class tankers.',
      energy: 'Arctic continental shelf holds an estimated 13% of undiscovered global oil and 30% of natural gas.',
      trade: 'Regular summer-fall commercial container transit between Ningbo/Shanghai and St. Petersburg.',
      shipping: 'Substantial savings in fuel and canal fees, but extreme insurance and environmental salvage risks.',
      diplomacy: 'Suspension of Western cooperation within the Arctic Council consolidates a Sino-Russian Arctic condominium.',
      security: 'Deployment of Yasen-M nuclear submarines equipped with Tsirkon hypersonic missiles across the Barents Sea.'
    },
    indiaImpact: {
      documented: 'India released its dedicated Arctic Policy in 2022, is an official Observer State to the Arctic Council, and operates the "Himadri" research station in Svalbard.',
      potential: 'Indian refiners and shipping entities are exploring participation in the Northern Sea Route for discounted crude transport to India’s west coast.',
      analytical: 'India seeks to balance scientific collaboration and commercial Arctic access without endorsing military polarization of the polar theater.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: With full year-round navigation still limited by seasonal ice variability, the NSR will primarily serve as a strategic internal energy export corridor for Russian LNG and crude heading to China and India, rather than a full replacement for Suez container traffic.',
    sources: [
      { title: 'Ministry for the Development of the Russian Far East and Arctic', publisher: 'Minvr.ru', url: 'https://minvr.gov.ru/en/', type: 'official' },
      { title: 'Arctic Council Secretariat Updates', publisher: 'Arctic Council', url: 'https://arctic-council.org/', type: 'official' },
      { title: 'Northern Sea Route (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Northern_Sea_Route', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['RUS', 'CHN', 'USA', 'NOR', 'IND'],
      maritime: ['ARCTIC_OCEAN', 'BERING_STRAIT', 'BARENTS_SEA'],
      concepts: ['SLOC', 'FREEDOM_OF_NAVIGATION', 'CHOKEPOINT', 'ENERGY_SECURITY'],
      military: ['YASEN_M', 'P8I']
    }
  },

  // ==========================================
  // GLOBAL / MULTILATERAL INSTITUTIONS
  // ==========================================
  {
    id: 'evt_brics_financial_dedollarization',
    title: 'BRICS Financial Settlement & Cross-Border Payment Piloting',
    headline: 'Expansion of local currency trade invoicing and development of multi-currency cross-border settlement rails',
    category: 'economy',
    priority: 'HIGH',
    status: 'Developing',
    confidence: 'VERIFIED',
    changeType: 'UPDATED',
    lat: 55.7558,
    lng: 37.6173,
    region: 'global',
    regionName: 'Global',
    sector: 'Kazan / New Development Bank / Global South',
    publishedAt: new Date(Date.now() - 1000 * 60 * 200).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 40).toISOString(),
    actors: [
      { name: 'BRICS Members', countryCode: 'IND', flag: '🇮🇳', role: 'India, China, Russia, Brazil, South Africa, UAE, Iran, Egypt, Ethiopia' },
      { name: 'New Development Bank (NDB)', countryCode: 'CHN', flag: '🌐', role: 'Local Currency Infrastructure Financing' },
      { name: 'United States Federal Reserve', countryCode: 'USA', flag: '🇺🇸', role: 'Global Reserve Currency Issuer & SWIFT Anchor' }
    ],
    whatHappened: 'Following the accession of four new members (UAE, Iran, Egypt, Ethiopia), the BRICS summit endorsed pilot programs for decentralized digital financial settlements, local-currency interbank payments, and expanded lending by the New Development Bank in non-dollar denominations.',
    whyItMatters: 'Represents a structural, long-term challenge to the post-Bretton Woods global financial architecture and the coercive efficacy of Western sovereign sanctions and SWIFT disconnection.',
    globalImpact: {
      defense: 'Limits the coercive power of unilateral secondary sanctions against target states.',
      economy: 'Over 80% of Russia-China and substantial portions of India-Russia bilateral trade are now settled in national currencies (Rupee, Ruble, Yuan).',
      energy: 'Petrodollar pricing hegemony weakened as UAE and Saudi Arabia accept alternative currencies for energy deliveries.',
      trade: 'Lowered transaction and FX conversion costs for intra-BRICS commercial flows.',
      shipping: 'Insurance settlement platforms emerging outside the London maritime underwriting market.',
      diplomacy: 'Consolidates the geopolitical narrative of the "Global South" demanding multipolar governance.',
      security: 'Central banks increasing sovereign gold reserves to record highs (over 1,000 tonnes purchased annually).'
    },
    indiaImpact: {
      documented: 'Reserve Bank of India operationalized Special Rupee Vostro Accounts (SRVA) with over 22 partner nations, facilitating Rupee-denominated trade settlement.',
      potential: 'India strongly opposes the creation of an anti-Western single currency or Yuan-dominated payment mechanism, championing instead its indigenous Unified Payments Interface (UPI) integration globally.',
      analytical: 'India leverages its founding BRICS role to maintain non-alignment, balancing relationships between Western G7 economies and the developing world.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: A unified "BRICS currency" remains impossible due to profound macroeconomic divergences and Sino-Indian strategic rivalry. However, bilateral local-currency settlements and gold-backed payment bridges will continue eroding the US dollar’s share of global foreign exchange reserves from 58% to ~50% over the next decade.',
    sources: [
      { title: 'BRICS Kazan Declaration Official Text', publisher: 'BRICS Portal', url: 'https://brics-russia2024.ru/en/', type: 'official' },
      { title: 'Bank for International Settlements (BIS) Project mBridge Reports', publisher: 'BIS', url: 'https://www.bis.org/', type: 'official' },
      { title: 'BRICS (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/BRICS', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['IND', 'CHN', 'RUS', 'BRA', 'ZAF', 'USA', 'ARE'],
      maritime: ['INDIAN_OCEAN', 'ATLANTIC_OCEAN'],
      concepts: ['SECONDARY_SANCTIONS', 'ECONOMIC_SANCTIONS', 'STRATEGIC_AUTONOMY', 'BALANCE_OF_POWER'],
      military: []
    }
  },

  // ==========================================
  // ADDITIONAL MULTI-THEATER DEVELOPMENTS
  // ==========================================
  {
    id: 'evt_black_sea_naval_drones',
    title: 'Black Sea Asymmetric Naval Drone Strikes & Grain Corridor',
    headline: 'Ukrainian explosive USVs force Russian Black Sea Fleet out of Sevastopol into Novorossiysk',
    category: 'maritime',
    priority: 'HIGH',
    status: 'Developing',
    confidence: 'VERIFIED',
    changeType: 'UPDATED',
    lat: 44.6167,
    lng: 33.5254,
    region: 'europe',
    regionName: 'Europe',
    sector: 'Black Sea / Crimean Coast & Novorossiysk',
    publishedAt: new Date(Date.now() - 1000 * 60 * 150).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 25).toISOString(),
    actors: [
      { name: 'Ukraine (SBU / GUR)', countryCode: 'UKR', flag: '🇺🇦', role: 'Sea Baby & Magura V5 Autonomous USV Swarms' },
      { name: 'Russia (Black Sea Fleet)', countryCode: 'RUS', flag: '🇷🇺', role: 'Calibr Missile Submarines & Port Relocation' },
      { name: 'Turkey', countryCode: 'TUR', flag: '🇹🇷', role: 'Montreux Convention Guardian & Grain Escort Monitoring' }
    ],
    whatHappened: 'Ukraine utilized autonomous explosive unmanned surface vessels (Sea Baby and Magura V5) armed with satellite links and thermal optics to sink or damage over a third of Russia’s Black Sea Fleet combatants, forcing Moscow to withdraw major surface combatants from Sevastopol to Novorossiysk.',
    whyItMatters: 'Revolutionized naval warfare by demonstrating that a nation without a conventional blue-water navy can defeat a premier naval fleet in enclosed littoral waters, reopening a unilateral maritime grain corridor that exported over 50 million metric tons of agricultural commodities.',
    globalImpact: {
      defense: 'Naval strategists worldwide are redesigning harbor defenses, installing remote weapon stations, and deploying counter-USV netting.',
      economy: 'Restored vital wheat, sunflower oil, and corn shipments, helping stabilize global food grain price indices.',
      energy: 'Russian crude loading at Novorossiysk (CPC blend and Urals) operates under constant threat of drone strikes.',
      trade: 'Commercial insurance clubs established specialized war-risk facilities backed by reinsurance syndicates.',
      shipping: 'Commercial bulk carriers navigate close to Romanian and Bulgarian territorial waters under NATO air cover.',
      diplomacy: 'Undermines Russian attempts to use food export blockades as diplomatic leverage against the developing world.',
      security: 'Subsurface and surface autonomous strike craft are now permanently incorporated into naval doctrine.'
    },
    indiaImpact: {
      documented: 'India is one of the world’s largest consumers of sunflower oil, historically relying on Ukraine for ~70% of edible oil imports; reopening the Black Sea stabilized domestic cooking oil inflation.',
      potential: 'Indian Navy doctrine centers study lessons from Black Sea drone operations to fortify defense of Western and Eastern seaboards.',
      analytical: 'India continues to advocate unhindered food and fertilizer exports to the Global South in multilateral fora.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: Russia will intensify port infrastructure ballistic missile bombardments at Odesa, Chornomorsk, and Pivdennyi, while Ukraine will introduce air-defense missiles and torpedoes onto its next-generation naval USVs.',
    sources: [
      { title: 'Ukrainian Naval Forces Official Operational Updates', publisher: 'Naval Forces Ukraine', url: 'https://navy.mil.gov.ua/en/', type: 'official' },
      { title: 'UK Defence Intelligence Black Sea Maritime Briefings', publisher: 'UK MoD', url: 'https://www.gov.uk/government/organisations/ministry-of-defence', type: 'official' },
      { title: 'Black Sea Campaign (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Black_Sea_campaign_(2022%E2%80%93present)', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['UKR', 'RUS', 'TUR', 'ROU', 'IND'],
      maritime: ['BLACK_SEA', 'BOSPHORUS_STRAIT'],
      concepts: ['ASYMMETRIC_WARFARE', 'A2_AD', 'SLOC', 'FOOD_SECURITY', 'FREEDOM_OF_NAVIGATION'],
      military: ['KALIBR', 'HARPOON']
    }
  },
  {
    id: 'evt_aukus_pillar_submarines',
    title: 'AUKUS Trilateral Nuclear Submarine & Advanced Capability Implementation',
    headline: 'Australia commences naval base upgrades for Submarine Rotational Force-West as Pillar 2 hypersonic pact expands',
    category: 'military',
    priority: 'HIGH',
    status: 'Stable',
    confidence: 'VERIFIED',
    changeType: 'UPDATED',
    lat: -32.2230,
    lng: 115.6880,
    region: 'indo_pacific',
    regionName: 'Indo-Pacific',
    sector: 'HMAS Stirling / Perth & Indo-Pacific Maritime Lanes',
    publishedAt: new Date(Date.now() - 1000 * 60 * 220).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    actors: [
      { name: 'Australia', countryCode: 'AUS', flag: '🇦🇺', role: 'HMAS Stirling Upgrades & Virginia-Class Crew Training' },
      { name: 'United States', countryCode: 'USA', flag: '🇺🇸', role: 'Forward SSN Rotations & Nuclear Propulsion Transfer' },
      { name: 'United Kingdom', countryCode: 'GBR', flag: '🇬🇧', role: 'SSN-AUKUS Joint Design & Barrow-in-Furness Shipyards' },
      { name: 'China', countryCode: 'CHN', flag: '🇨🇳', role: 'Opposition on NPT Non-Proliferation Grounds' }
    ],
    whatHappened: 'Australia, the US, and the UK accelerated execution of AUKUS Pillar 1, preparing HMAS Stirling to host rotational US and British nuclear-powered attack submarines (SSNs) by 2027, while advancing Pillar 2 joint projects in quantum sensing, hypersonics, and autonomous undersea warfare.',
    whyItMatters: 'Equips Australia with long-range, stealth nuclear-powered attack submarines capable of sustained submerged operations from the South China Sea to the Malacca Strait, significantly tilting the undersea balance of power against China’s expanding naval fleet.',
    globalImpact: {
      defense: 'Establishes a formidable allied nuclear attack submarine cordon along Indo-Pacific transit chokepoints.',
      economy: 'Australia committing over $240 billion across three decades to build domestic nuclear shipbuilding infrastructure.',
      energy: 'Involves transfer of highly enriched uranium (HEU) naval reactor fuel cores without domestic enrichment.',
      trade: 'Strengthens maritime defense protection for Australia’s iron ore, LNG, and critical mineral export corridors.',
      shipping: 'Secures sea lanes between Oceania and East Asia.',
      diplomacy: 'Draws sharp condemnation from Beijing and initial non-proliferation scrutiny from Southeast Asian capitals.',
      security: 'Sets a significant precedent in naval nuclear propulsion under IAEA Article 14 safeguards.'
    },
    indiaImpact: {
      documented: 'India welcomed AUKUS as a complementary Indo-Pacific security arrangement that does not compete with the QUAD’s non-military, diplomatic and technology agenda.',
      potential: 'US and UK technology sharing under AUKUS could eventually provide insights for India’s own indigenous Project 75 Alpha nuclear-powered attack submarine (SSN) program.',
      analytical: 'Augments allied maritime domain awareness across the eastern Indian Ocean and Sunda/Lombok straits where Chinese submarines transit.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: Australia will face severe shipyard workforce bottlenecks and US industrial capacity constraints in delivering Virginia-class hulls on schedule. Pillar 2 (hypersonics, quantum, AI) will show tangible operational deployment much faster than Pillar 1 submarines.',
    sources: [
      { title: 'AUKUS Leaders Statement on Trilateral Submarine Pathway', publisher: 'White House', url: 'https://www.whitehouse.gov/', type: 'official' },
      { title: 'Australian Department of Defence AUKUS Updates', publisher: 'Defence.gov.au', url: 'https://www.defence.gov.au/', type: 'official' },
      { title: 'AUKUS (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/AUKUS', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['AUS', 'USA', 'GBR', 'CHN', 'IND'],
      maritime: ['PACIFIC_OCEAN', 'INDIAN_OCEAN', 'LOMBOK_STRAIT', 'SUNDA_STRAIT'],
      concepts: ['EXTENDED_DETERRENCE', 'NUCLEAR_DETERRENCE', 'FIRST_ISLAND_CHAIN', 'SLOC'],
      military: ['VIRGINIA_CLASS', 'ASTUTE_CLASS']
    }
  },
  {
    id: 'evt_bangladesh_interim_transition',
    title: 'Bangladesh Political Transformation & Strategic Foreign Policy Recalibration',
    headline: 'Interim administration under Muhammad Yunus reviews bilateral agreements and rebalances ties with New Delhi and Beijing',
    category: 'diplomacy',
    priority: 'HIGH',
    status: 'Developing',
    confidence: 'VERIFIED',
    changeType: 'UPDATED',
    lat: 23.8103,
    lng: 90.4125,
    region: 'south_asia',
    regionName: 'South Asia',
    sector: 'Dhaka / Bay of Bengal Littoral',
    publishedAt: new Date(Date.now() - 1000 * 60 * 190).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 35).toISOString(),
    actors: [
      { name: 'Bangladesh Interim Administration', countryCode: 'BGD', flag: '🇧🇩', role: 'Chief Adviser Muhammad Yunus & Institutional Reforms' },
      { name: 'India', countryCode: 'IND', flag: '🇮🇳', role: 'Security of 4,096 km Border & Minority Protection Concerns' },
      { name: 'China', countryCode: 'CHN', flag: '🇨🇳', role: 'Infrastructure Loans, Mongla Port Expansion & Teesta River Project' },
      { name: 'United States', countryCode: 'USA', flag: '🇺🇸', role: 'Economic Support & Democratic Institutional Assistance' }
    ],
    whatHappened: 'Following the historic student-led mass uprising that resulted in Prime Minister Sheikh Hasina fleeing to India, the interim government led by Nobel laureate Muhammad Yunus took charge, initiating deep constitutional, judiciary, and financial sector audits while reviewing bilateral infrastructure and connectivity pacts.',
    whyItMatters: 'Bangladesh borders five Indian states across 4,096 km and controls key riverine and maritime access to India’s landlocked North-Eastern region (the "Chicken’s Neck" Siliguri Corridor). A hostile or destabilized Bangladesh poses critical national security challenges for New Delhi.',
    globalImpact: {
      defense: 'Indian Border Security Force (BSF) placed on high alert along the porous border to prevent illicit crossings and influx.',
      economy: 'Disruption of ready-made garment (RMG) exports (~85% of Bangladesh foreign earnings), benefiting Indian and Vietnamese textile mills.',
      energy: 'Cross-border electricity transmission from India (including Adani Godda 1,600 MW coal plant) subjected to payment backlog reviews.',
      trade: 'Transit cargo movements through Chittagong and Mongla ports to Northeast India temporarily slowed.',
      shipping: 'Matarbari deep-sea port development (funded by Japan JICA) remains a cornerstone of Bay of Bengal connectivity.',
      diplomacy: 'Intense diplomatic maneuvering as Dhaka recalibrates relations between Washington, Beijing, Islamabad, and New Delhi.',
      security: 'Concerns regarding resurgence of extremist elements and cross-border militant sanctuaries.'
    },
    indiaImpact: {
      documented: 'Prime Minister Modi engaged directly with Chief Adviser Yunus, emphasizing the urgent need to guarantee the safety, security, and property of Hindu and religious minorities in Bangladesh.',
      potential: 'Potential renegotiation of rail, road, and riverine transit agreements that provide India vital transit connectivity to Assam, Tripura, and Meghalaya.',
      analytical: 'India’s diplomacy emphasizes continuity of people-to-people ties, trade, and border tranquility while ensuring Bangladesh does not become a springboard for anti-India security operations.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: The interim administration will navigate sharp domestic socio-economic pressures before holding general elections. While rhetoric will diverge from the Hasina era, Bangladesh’s economic dependence on Indian electricity, food grains, and transit links will compel pragmatic working relations.',
    sources: [
      { title: 'Chief Adviser’s Office Bangladesh Press Wing Updates', publisher: 'CAO Bangladesh', url: 'https://cao.gov.bd/', type: 'official' },
      { title: 'Ministry of External Affairs (India) Statements on Bangladesh', publisher: 'MEA India', url: 'https://www.mea.gov.in/', type: 'official' },
      { title: '2024 Bangladesh Quota Reform Movement (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/2024_Bangladesh_quota_reform_movement', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['BGD', 'IND', 'CHN', 'USA'],
      maritime: ['BAY_OF_BENGAL'],
      concepts: ['CHOKEPOINT', 'BUFFER_STATE', 'STRATEGIC_AUTONOMY', 'TRADE_CORRIDOR'],
      military: []
    }
  },
  {
    id: 'evt_ethiopia_somaliland_berbera',
    title: 'Ethiopia–Somaliland Berbera Port MoU & Horn of Africa Crisis',
    headline: 'Landlocked Ethiopia secures 20 km naval coast access in exchange for potential recognition of Somaliland',
    category: 'maritime',
    priority: 'HIGH',
    status: 'Escalating',
    confidence: 'REPORTED',
    changeType: 'ESCALATED',
    lat: 10.4382,
    lng: 45.0143,
    region: 'africa',
    regionName: 'Africa',
    sector: 'Gulf of Aden / Berbera Port & Mogadishu',
    publishedAt: new Date(Date.now() - 1000 * 60 * 170).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    actors: [
      { name: 'Ethiopia', countryCode: 'ETH', flag: '🇪🇹', role: 'Prime Minister Abiy Ahmed Naval Basing Push' },
      { name: 'Somaliland', countryCode: 'SOM', flag: '🏴', role: 'President Bihi Quest for International Recognition' },
      { name: 'Somalia (Federal Government)', countryCode: 'SOM', flag: '🇸🇴', role: 'Sovereignty Defense & Egypt Defense Pact' },
      { name: 'Egypt', countryCode: 'EGY', flag: '🇪🇬', role: 'Military Deployment to Mogadishu to Counter GERD' }
    ],
    whatHappened: 'Ethiopia signed a Memorandum of Understanding with the self-declared Republic of Somaliland to lease 20 kilometers of Gulf of Aden coastline around Berbera for a commercial port and naval base, in exchange for Ethiopia conducting an in-depth assessment toward recognizing Somaliland’s sovereignty.',
    whyItMatters: 'Triggers a major diplomatic and potential military crisis in the Horn of Africa. Somalia viewed the deal as an act of aggression, signing a mutual defense pact with Egypt, which subsequently dispatched military officers and weapons to Mogadishu, linking the Grand Ethiopian Renaissance Dam (GERD) dispute to the Red Sea.',
    globalImpact: {
      defense: 'Egyptian military assets deployed to the Horn of Africa directly bordering Ethiopia for the first time in modern history.',
      economy: 'Ethiopia spends over $1.5 billion annually in port fees to Djibouti; Berbera offers critical logistics diversification.',
      energy: 'Proximity to the Bab el-Mandeb chokepoint intensifies military congestion in the Gulf of Aden.',
      trade: 'DP World’s $440M development of Berbera Port positions it as a major alternative regional transshipment hub.',
      shipping: 'Increased risk of maritime skirmishes or piracy flare-ups along the Somali coastline.',
      diplomacy: 'African Union and IGAD holding emergency mediation summits to prevent interstate war.',
      security: 'Risk of Al-Shabaab exploiting nationalist anti-Ethiopian fervor to expand terror recruitment.'
    },
    indiaImpact: {
      documented: 'India established a consulate in Hargeisa and maintains strong bilateral ties with both Addis Ababa and Mogadishu, deploying naval destroyers in the Gulf of Aden.',
      potential: 'Instability along the Somali coast threatens Indian merchant shipping transiting from the Arabian Sea into the Red Sea.',
      analytical: 'India upholds the sovereignty and territorial integrity of African Union member states while supporting peaceful resolution through dialogue.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: Full diplomatic recognition of Somaliland by Addis Ababa will remain deferred due to heavy international pressure from the US, EU, and Arab League. However, technical development of Berbera port commercial cargo corridors will proceed.',
    sources: [
      { title: 'Federal Republic of Somalia Ministry of Foreign Affairs Communiqués', publisher: 'MFA Somalia', url: 'https://mfa.gov.so/', type: 'official' },
      { title: 'African Union Peace and Security Council Decisions', publisher: 'AU PSC', url: 'https://www.peaceau.org/', type: 'official' },
      { title: '2024 Ethiopia–Somaliland MoU (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/2024_Ethiopia%E2%80%93Somaliland_memorandum_of_understanding', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['ETH', 'SOM', 'EGY', 'DJI', 'TUR', 'IND'],
      maritime: ['GULF_OF_ADEN', 'RED_SEA', 'BAB_EL_MANDEB'],
      concepts: ['CHOKEPOINT', 'SLOC', 'TERRITORIAL_DISPUTE', 'SPHERE_OF_INFLUENCE'],
      military: []
    }
  },
  {
    id: 'evt_drc_coltan_m23_conflict',
    title: 'DRC Eastern Offensive, M23 Rebel Advances & Critical Battery Mineral Supply Lines',
    headline: 'Clashes in North Kivu threaten Goma as international scrutiny falls on Rwandan-backed mineral corridors',
    category: 'conflict',
    priority: 'HIGH',
    status: 'Developing',
    confidence: 'REPORTED',
    changeType: 'NEW',
    lat: -1.6792,
    lng: 29.2228,
    region: 'africa',
    regionName: 'Africa',
    sector: 'North Kivu / Goma & Great Lakes Region',
    publishedAt: new Date(Date.now() - 1000 * 60 * 210).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 38).toISOString(),
    actors: [
      { name: 'Democratic Republic of Congo (FARDC)', countryCode: 'COD', flag: '🇨🇩', role: 'Government Armed Forces & SAMIDRC Regional Force' },
      { name: 'M23 Rebel Movement', countryCode: 'COD', flag: '🏴', role: 'Heavy Artillery Offensives & Rubaya Coltan Mine Control' },
      { name: 'Rwanda (RDF)', countryCode: 'RWA', flag: '🇷🇼', role: 'Alleged Covert Surface-to-Air & Special Forces Support' }
    ],
    whatHappened: 'M23 rebel forces seized control of the vital mining town of Rubaya—which produces an estimated 15% of the world’s tantalum (coltan)—and tightened their encirclement around the provincial capital of Goma, sparking clashes with Congolese armed forces and SADC regional peacekeepers.',
    whyItMatters: 'The eastern DRC contains over 70% of the world’s cobalt and massive deposits of tantalum, tin, and lithium essential for smartphone electronics, aerospace alloys, and electric vehicle lithium-ion battery packs. Armed conflict directly contaminates global ethical tech supply chains.',
    globalImpact: {
      defense: 'Modern surface-to-air missiles and night-vision capabilities employed by non-state rebel forces in Central Africa.',
      economy: 'US Dodd-Frank Act Section 1502 and EU Conflict Minerals Regulations triggered as illicit mineral smuggling routes thrive.',
      energy: 'EV battery manufacturers face trace-audit liabilities over cobalt origin verification.',
      trade: 'Mineral transit corridors through Rwanda, Uganda, and Tanzania subjected to international sanction reviews.',
      shipping: 'Mombasa and Dar es Salaam port corridors experience delays in raw mineral container export clearance.',
      diplomacy: 'Luanda and Nairobi peace mediation processes stalled due to deep mutual hostility between Kinshasa and Kigali.',
      security: 'Over 1.5 million internally displaced persons around Goma facing acute cholera and food insecurity crises.'
    },
    indiaImpact: {
      documented: 'India is a major troop contributor to the UN Peacekeeping Mission in the DRC (MONUSCO), with Indian peacekeepers defending key civilian and airport perimeters around Goma.',
      potential: 'India’s Khanij Bidesh India Ltd (KABIL) is actively scouting overseas lithium, cobalt, and tantalum assets to fuel India’s national EV manufacturing transition.',
      analytical: 'India prioritizes the safety of its blue helmet peacekeepers while supporting the territorial sovereignty of the DRC.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: M23 will maintain armed leverage over the lucrative Rubaya tantalum mining basin, using tax revenues to fund protracted operations while avoiding a full assault on Goma city to deter overwhelming international military backlash.',
    sources: [
      { title: 'UN Group of Experts on the Democratic Republic of the Congo Reports', publisher: 'United Nations', url: 'https://www.un.org/securitycouncil/sanctions/1533/work-and-mandate', type: 'official' },
      { title: 'MONUSCO Daily Operational Briefings', publisher: 'MONUSCO', url: 'https://monusco.unmissions.org/', type: 'official' },
      { title: 'M23 Campaign (2022–present) (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/M23_offensive_(2022%E2%80%93present)', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['COD', 'RWA', 'UGA', 'ZAF', 'IND', 'USA'],
      maritime: ['INDIAN_OCEAN', 'ATLANTIC_OCEAN'],
      concepts: ['RESOURCE_CURSE', 'PROXY_WAR', 'ASYMMETRIC_WARFARE', 'TRADE_CORRIDOR'],
      military: []
    }
  },
  {
    id: 'evt_myanmar_civil_war_kaladan',
    title: 'Myanmar Junta Territorial Reversals & Kaladan Multi-Modal Corridor Threat',
    headline: 'Arakan Army captures key towns along the Rakhine coastline, jeopardizing India’s Sittwe port access',
    category: 'conflict',
    priority: 'HIGH',
    status: 'Escalating',
    confidence: 'REPORTED',
    changeType: 'ESCALATED',
    lat: 20.1462,
    lng: 92.8984,
    region: 'south_asia',
    regionName: 'South Asia',
    sector: 'Rakhine State / Sittwe Port & Kaladan River Basin',
    publishedAt: new Date(Date.now() - 1000 * 60 * 165).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 28).toISOString(),
    actors: [
      { name: 'Arakan Army (AA)', countryCode: 'MMR', flag: '🏴', role: 'Capture of Paletwa & Coastal Rakhine Encirclement' },
      { name: 'Myanmar Military Junta (SAC)', countryCode: 'MMR', flag: '🇲🇲', role: 'Naval Artillery & Air Force Bombardment' },
      { name: 'India', countryCode: 'IND', flag: '🇮🇳', role: 'Sittwe Port Operator & Mizoram Border Security' },
      { name: 'China', countryCode: 'CHN', flag: '🇨🇳', role: 'Kyaukphyu Deep-Sea Port & Strategic Pipelines' }
    ],
    whatHappened: 'Following the nationwide "Operation 1027" coordinated ethnic armed offensive, the Arakan Army conquered nearly the entire northern Rakhine state and the crucial transport hub of Paletwa in Chin state, effectively surrounding Sittwe and disrupting work on India’s flagship $484M Kaladan Multi-Modal Transit Transport Project.',
    whyItMatters: 'Myanmar is the land bridge connecting South Asia to Southeast Asia. The collapse of junta territorial control threatens both India’s alternative transit corridor to its landlocked Northeast states and China’s twin oil and gas pipelines running from Kyaukphyu to Yunnan.',
    globalImpact: {
      defense: 'The Myanmar Tatmadaw has suffered its worst territorial losses since independence in 1948.',
      economy: 'Cross-border trade across Myanmar’s frontiers with India, China, and Thailand has dropped over 60%.',
      energy: 'Chinese crude and natural gas pipelines bypassing the Malacca Strait operate under armed protection agreements with ethnic militias.',
      trade: 'Construction on the Kaladan road link connecting Zorinpui in Mizoram to Paletwa halted.',
      shipping: 'Sittwe port infrastructure remains intact but commercial cargo transit down the Kaladan river is frozen.',
      diplomacy: 'Forces both New Delhi and Beijing to establish direct operational contacts with non-state ethnic armed organizations.',
      security: 'Refugee flows and cross-border drug and weapons smuggling into India’s border state of Mizoram.'
    },
    indiaImpact: {
      documented: 'Over 35,000 Myanmar refugees and thousands of junta soldiers have crossed into Mizoram and Manipur; India suspended the Free Movement Regime (FMR) and initiated fencing along the 1,643 km border.',
      potential: 'Permanent loss of connectivity via Sittwe Port would force India to continue relying solely on the vulnerable Siliguri Corridor for Northeastern logistics.',
      analytical: 'Indian security agencies maintain backchannel dialogue with the Arakan Army leadership to secure project assets while balancing diplomatic ties with Naypyidaw.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: The Arakan Army will likely consolidate autonomous administrative control over Rakhine state. India will be compelled to formally negotiate operational transit protocols directly with the AA to restart commercial use of Sittwe port.',
    sources: [
      { title: 'Myanmar Peace Monitor Strategic Briefs', publisher: 'BNI MPM', url: 'https://mmpeacemonitor.org/', type: 'official' },
      { title: 'Ministry of External Affairs (India) Myanmar Travel Advisories', publisher: 'MEA India', url: 'https://www.mea.gov.in/', type: 'official' },
      { title: 'Myanmar Civil War (2021–present) (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Myanmar_civil_war_(2021%E2%80%93present)', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['MMR', 'IND', 'CHN', 'BGD', 'THA'],
      maritime: ['BAY_OF_BENGAL', 'ANDAMAN_SEA'],
      concepts: ['TRADE_CORRIDOR', 'BUFFER_STATE', 'CHOKEPOINT', 'ASYMMETRIC_WARFARE'],
      military: []
    }
  },
  {
    id: 'evt_turkey_montreux_straits',
    title: 'Turkish Straits Montreux Convention Enforcement & Black Sea Deterrence',
    headline: 'Ankara maintains strict closure of Bosporus and Dardanelles to non-homeport belligerent naval combatants',
    category: 'maritime',
    priority: 'MEDIUM',
    status: 'Stable',
    confidence: 'VERIFIED',
    changeType: 'STABLE',
    lat: 41.0250,
    lng: 29.0000,
    region: 'europe',
    regionName: 'Europe',
    sector: 'Bosporus & Dardanelles Straits / Sea of Marmara',
    publishedAt: new Date(Date.now() - 1000 * 60 * 320).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 55).toISOString(),
    actors: [
      { name: 'Turkey', countryCode: 'TUR', flag: '🇹🇷', role: '1936 Montreux Convention Sole Custodian' },
      { name: 'Russian Navy', countryCode: 'RUS', flag: '🇷🇺', role: 'Barred from Reinforcing Black Sea Fleet with Northern/Baltic Ships' },
      { name: 'NATO Maritime Command', countryCode: 'USA', flag: '🇺🇸', role: 'Barred from Entering Black Sea with Warships' }
    ],
    whatHappened: 'Turkey strictly enforced Article 19 of the 1936 Montreux Convention, denying passage through the Bosporus and Dardanelles straits to all belligerent Russian and Ukrainian warships, while also dissuading non-littoral NATO allies from deploying warships into the enclosed sea.',
    whyItMatters: 'The Turkish Straits are the sole maritime entryway to the Black Sea. Turkey’s rigorous legal enforcement has prevented Russia from replenishing its sunken Black Sea Fleet warships with Northern Fleet vessels and prevented direct naval clashes between US and Russian warships.',
    globalImpact: {
      defense: 'Locked the naval balance of power inside the Black Sea to preexisting fleets, directly enabling Ukraine’s asymmetric drone strategy.',
      economy: 'Preserves the legal predictability of civilian commercial maritime passage (over 40,000 merchant vessels transit annually).',
      energy: 'Russian oil tankers and agricultural bulk carriers continue routine commercial passage subject to safety inspections.',
      trade: 'Commercial bulk cargo flows between the Danube, Black Sea ports, and global markets remain stable.',
      shipping: 'Vessel traffic management system manages congestion and pilots narrow transit lanes.',
      diplomacy: 'Elevates Ankara’s unique diplomatic leverage as an indispensable mediator between Moscow, Kyiv, and NATO.',
      security: 'Joint mine counter-measures task group (Turkey, Romania, Bulgaria) clears drifting naval mines.'
    },
    indiaImpact: {
      documented: 'India imports significant quantities of fertilizer, sunflower oil, and metallurgical coal transiting the Turkish Straits.',
      potential: 'Any escalation or closure of the Straits would disrupt maritime commerce connecting Eastern Europe with India.',
      analytical: 'India supports the strict adherence to international maritime law and conventions governing strategic chokepoints.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: Ankara will firmly uphold the Montreux regime without exception, resisting both Western requests for NATO naval escort presence and Russian pressure for preferential auxiliary transits, protecting its undisputed sovereignty over the Straits.',
    sources: [
      { title: 'Ministry of Foreign Affairs Republic of Türkiye Montreux Convention Brief', publisher: 'MFA Turkiye', url: 'https://www.mfa.gov.tr/', type: 'official' },
      { title: 'Turkish Straits Maritime Traffic Regulations', publisher: 'Denizcilik Genel Mudurlugu', url: 'https://denizcilik.uab.gov.tr/', type: 'official' },
      { title: 'Montreux Convention Regarding the Regime of the Straits (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Montreux_Convention_Regarding_the_Regime_of_the_Straits', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['TUR', 'RUS', 'UKR', 'USA', 'IND'],
      maritime: ['BOSPHORUS_STRAIT', 'DARDANELLES', 'BLACK_SEA', 'MEDITERRANEAN_SEA'],
      concepts: ['CHOKEPOINT', 'SLOC', 'FREEDOM_OF_NAVIGATION', 'BALANCE_OF_POWER'],
      military: []
    }
  },
  {
    id: 'evt_counter_space_gps_electronic',
    title: 'Counter-Space Electronic Warfare & Low-Earth Orbit Satellite Jamming',
    headline: 'Surge in coordinated spoofing and high-power radio-frequency jamming affecting aviation over Baltic and Levant',
    category: 'technology',
    priority: 'HIGH',
    status: 'Developing',
    confidence: 'VERIFIED',
    changeType: 'UPDATED',
    lat: 56.9496,
    lng: 24.1052,
    region: 'global',
    regionName: 'Global',
    sector: 'Low Earth Orbit (LEO) / Baltic Airspace & Eastern Mediterranean',
    publishedAt: new Date(Date.now() - 1000 * 60 * 135).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 20).toISOString(),
    actors: [
      { name: 'Russian Electronic Warfare Forces', countryCode: 'RUS', flag: '🇷🇺', role: 'Tobol & Krasukha-4 Satellite Uplink Jamming' },
      { name: 'US Space Command (SPACECOM)', countryCode: 'USA', flag: '🇺🇸', role: 'GPS M-Code Hardening & Space Domain Awareness' },
      { name: 'European Union Aviation Safety Agency', countryCode: 'DEU', flag: '🇪🇺', role: 'EASA Safety Bulletins on GNSS Spoofing' },
      { name: 'Commercial Aviation Liners', countryCode: 'FRA', flag: '✈️', role: 'Inertial Navigation Backup Activation' }
    ],
    whatHappened: 'Ground-based military electronic warfare installations in Kaliningrad, Crimea, and Syria conducted high-power radio-frequency jamming and deceptive GNSS spoofing, causing thousands of commercial airliners to lose GPS navigation locks and display false altitude and positional coordinates.',
    whyItMatters: 'Space is no longer a benign sanctuary. Modern precision-guided munitions, naval targeting, financial transactions, and civilian air navigation are completely reliant on space-based PNT (Positioning, Navigation, and Timing) constellations (GPS, GLONASS, BeiDou, Galileo, NavIC).',
    globalImpact: {
      defense: 'Military forces re-training in terrain-contour matching, celestial navigation, and quantum inertial sensors.',
      economy: 'Airlines forced to alter flight corridors, increasing fuel burn and ground turnaround times.',
      energy: 'Offshore oil platforms in the eastern Mediterranean experience positioning sensor dropouts.',
      trade: 'Commercial container vessels report phantom vessel locations on AIS transponders.',
      shipping: 'Port gantry cranes and autonomous straddle carriers experience localized synchronization faults.',
      diplomacy: 'Western states lodge formal diplomatic protests with the International Telecommunication Union (ITU).',
      security: 'Lowering thresholds for counter-space operations, including direct-ascent anti-satellite (ASAT) and orbital laser dazzling.'
    },
    indiaImpact: {
      documented: 'India operates its indigenous satellite navigation system NavIC (Navigation with Indian Constellation), providing independent regional PNT services across India and 1,500 km beyond its borders.',
      potential: 'Indian defense forces are integrating dual-frequency NavIC receivers into frontline combat aircraft and missile guidance to eliminate dependency on foreign GPS.',
      analytical: 'India established the Defence Space Agency (DSA) and conducted Mission Shakti (ASAT test in 2019) to ensure credible counter-space deterrence against space-based threats.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: Electronic warfare jamming in contested theaters will intensify into permanent background noise. Space powers will accelerate proliferation of proliferated Low-Earth Orbit (pLEO) megaconstellations to build resilience against ground jammer saturation.',
    sources: [
      { title: 'US Space Command Operational Space Domain Briefs', publisher: 'SPACECOM', url: 'https://www.spacecom.mil/', type: 'official' },
      { title: 'EASA Safety Information Bulletin on GNSS Outages', publisher: 'EASA', url: 'https://www.easa.europa.eu/', type: 'official' },
      { title: 'Anti-satellite Weapon (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Anti-satellite_weapon', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['USA', 'RUS', 'CHN', 'IND', 'FRA'],
      maritime: ['BALTIC_SEA', 'MEDITERRANEAN_SEA'],
      concepts: ['GREY_ZONE', 'CRITICAL_INFRASTRUCTURE', 'DETERRENCE', 'ASYMMETRIC_WARFARE'],
      military: []
    }
  },
  {
    id: 'evt_panama_canal_transit_recovery',
    title: 'Panama Canal Water Depletion & Commercial Transit Rerouting',
    headline: 'Gatun Lake water levels recover following historic drought, but long-term climate vulnerabilities reshape container routing',
    category: 'infrastructure',
    priority: 'MEDIUM',
    status: 'Stable',
    confidence: 'VERIFIED',
    changeType: 'UPDATED',
    lat: 9.1012,
    lng: -79.6955,
    region: 'americas',
    regionName: 'Americas',
    sector: 'Panama Canal / Gatun Lake Locks',
    publishedAt: new Date(Date.now() - 1000 * 60 * 270).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 48).toISOString(),
    actors: [
      { name: 'Panama Canal Authority (ACP)', countryCode: 'PAN', flag: '🇵🇦', role: 'Transit Slot Auctions & Rio Indio Reservoir Planning' },
      { name: 'United States', countryCode: 'USA', flag: '🇺🇸', role: 'Origin/Destination of 72% of Canal Cargo' },
      { name: 'Global Container & LNG Shippers', countryCode: 'USA', flag: '🚢', role: 'Rerouting Via Cape of Good Hope & Suez' }
    ],
    whatHappened: 'Following an unprecedented El Niño drought that forced the Panama Canal to slash daily transits from 38 down to 22 ships and impose draft limits, rainy season recovery allowed normal transit slots to resume; however, maritime shippers have permanently re-evaluated dependence on fresh-water lock canals.',
    whyItMatters: 'The Panama Canal handles 5% of all global maritime trade and 40% of all US container traffic, connecting Atlantic US Gulf Coast LNG terminals to Asian energy markets. Water-level disruptions create multi-billion dollar freight rate spikes and compel reliance on Cape routes.',
    globalImpact: {
      defense: 'US naval deployments between the Atlantic and Pacific fleets face transit scheduling constraints during drought periods.',
      economy: 'Canal auction slot fees skyrocketed to over $4 million per ship at the height of the queue congestion.',
      energy: 'US LNG carriers bound for Japan and South Korea forced to sail around South Africa’s Cape of Good Hope.',
      trade: 'Accelerated investments in alternative multi-modal dry corridors (e.g. Mexico’s Interoceanic Corridor of the Isthmus of Tehuantepec).',
      shipping: 'Draft restrictions forced Neo-Panamax container ships to discharge cargo before transiting.',
      diplomacy: 'Panama advancing $1.6B Rio Indio reservoir construction to secure drinking and canal water for the next 50 years.',
      security: 'Underscores severe vulnerability of critical maritime chokepoints to climate and hydrological anomalies.'
    },
    indiaImpact: {
      documented: 'India’s merchandise exports to the US West Coast and Latin America utilize trans-Pacific routes, but Indian container liners operating transatlantic networks experienced ripple effects in global vessel scheduling.',
      potential: 'Higher global shipping spot rates directly inflate CIF (Cost, Insurance, Freight) costs for Indian imports and exports.',
      analytical: 'India continues to advocate resilience in critical maritime logistics hubs and diversification of global trading corridors.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: While rainfall has restored near-normal slot allocations, the Panama Canal Authority will invest aggressively in reservoir expansion. Shippers will maintain multi-route redundancy, utilizing Mexican intermodal rail corridors as backup.',
    sources: [
      { title: 'Panama Canal Authority (ACP) Advisories to Shipping', publisher: 'ACP', url: 'https://pancanal.com/en/', type: 'official' },
      { title: 'US Energy Information Administration Panama Canal Briefs', publisher: 'EIA', url: 'https://www.eia.gov/', type: 'official' },
      { title: 'Panama Canal (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Panama_Canal', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['PAN', 'USA', 'CHN', 'JPN', 'IND'],
      maritime: ['PANAMA_CANAL', 'PACIFIC_OCEAN', 'ATLANTIC_OCEAN', 'CARIBBEAN_SEA'],
      concepts: ['CHOKEPOINT', 'SLOC', 'TRADE_CORRIDOR', 'CRITICAL_INFRASTRUCTURE'],
      military: []
    }
  },
  {
    id: 'evt_sri_lanka_colombo_terminal',
    title: 'Sri Lanka Debt Restructuring & Colombo West Container Terminal Operationalization',
    headline: 'Adani Group-led terminal enters commissioning phase, anchoring Indian strategic presence at South Asia’s busiest transshipment hub',
    category: 'economy',
    priority: 'MEDIUM',
    status: 'Stable',
    confidence: 'VERIFIED',
    changeType: 'UPDATED',
    lat: 6.9400,
    lng: 79.8450,
    region: 'south_asia',
    regionName: 'South Asia',
    sector: 'Port of Colombo / Western Indian Ocean',
    publishedAt: new Date(Date.now() - 1000 * 60 * 250).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 42).toISOString(),
    actors: [
      { name: 'Sri Lanka', countryCode: 'LKA', flag: '🇱🇰', role: 'President Dissanayake Administration & IMF Extended Fund Facility' },
      { name: 'India (Adani Ports / DFC)', countryCode: 'IND', flag: '🇮🇳', role: '$553M US DFC-Financed West Container Terminal' },
      { name: 'China (CMPort)', countryCode: 'CHN', flag: '🇨🇳', role: 'Colombo International Container Terminals (CICT) & Hambantota Port' }
    ],
    whatHappened: 'Following comprehensive sovereign debt restructuring agreements with bilateral creditors (India, China, Paris Club), the Colombo West Container Terminal—a $700 million deep-water facility developed by India’s Adani Ports and backed by $553 million from the US International Development Finance Corporation (DFC)—commenced trial container vessel berthing.',
    whyItMatters: 'Over 60% of India’s container transshipment cargo passes through the Port of Colombo. Developing an Indian-operated deep-water terminal directly counterbalances China Merchant Port’s ownership of the adjacent CICT terminal and 99-year lease on Hambantota Port.',
    globalImpact: {
      defense: 'Curbs potential Chinese PLA Navy dual-use warship and submarine port calls at Colombo through bilateral Indian maritime protocols.',
      economy: 'Accelerates Sri Lanka’s economic stabilization following its 2022 sovereign debt default.',
      energy: 'Sri Lanka advancing cross-border renewable power transmission grid interconnectivity with India.',
      trade: 'Expands transshipment capacity for container vessels serving the Indian subcontinent.',
      shipping: 'Enables ultra-large container vessels (24,000 TEU) to dock directly without feeder vessel intermediate shuttles.',
      diplomacy: 'Demonstrates effective trilateral economic-security coordination between New Delhi, Washington, and Colombo.',
      security: 'Enhances regional maritime domain awareness across the southern tip of the Indian subcontinent.'
    },
    indiaImpact: {
      documented: 'India provided over $4 billion in emergency currency swaps, fuel lines, and food credit to Sri Lanka in 2022, building immense goodwill and strategic trust across Sri Lankan civil society.',
      potential: 'Operating the West Container Terminal gives India direct logistical equity in its primary transshipment node while developing its own indigenous transshipment ports at Vizhinjam and Galathea Bay.',
      analytical: 'Reaffirms New Delhi’s "Neighbourhood First" policy, demonstrating that India can deliver large-scale, bankable infrastructure projects in competition with China’s Belt and Road Initiative.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: The newly elected NPP government in Colombo will maintain a balanced foreign policy, honoring both Indian economic connectivity projects and existing Chinese agreements, avoiding exclusive alignment with any single superpower.',
    sources: [
      { title: 'Sri Lanka Ports Authority (SLPA) Development Updates', publisher: 'SLPA', url: 'https://www.slpa.lk/', type: 'official' },
      { title: 'US International Development Finance Corporation (DFC) Project Announcement', publisher: 'US DFC', url: 'https://www.dfc.gov/', type: 'official' },
      { title: 'Port of Colombo (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Port_of_Colombo', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['LKA', 'IND', 'CHN', 'USA'],
      maritime: ['INDIAN_OCEAN', 'LACCADIVE_SEA'],
      concepts: ['TRADE_CORRIDOR', 'SLOC', 'STRATEGIC_AUTONOMY', 'BALANCE_OF_POWER'],
      military: []
    }
  },
  {
    id: 'evt_lebanon_israel_litani',
    title: 'Southern Lebanon Ground Operations & Litani River Buffer Zone',
    headline: 'IDF forces execute targeted ground incursions and airstrikes targeting Hezbollah subterranean infrastructure',
    category: 'conflict',
    priority: 'CRITICAL',
    status: 'Escalating',
    confidence: 'VERIFIED',
    changeType: 'ESCALATED',
    lat: 33.2721,
    lng: 35.2033,
    region: 'middle_east',
    regionName: 'Middle East',
    sector: 'Southern Lebanon / Blue Line & Litani River',
    publishedAt: new Date(Date.now() - 1000 * 60 * 40).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 7).toISOString(),
    actors: [
      { name: 'Israel (IDF)', countryCode: 'ISR', flag: '🇮🇱', role: 'Northern Command Division Maneuvers & Air Interdictions' },
      { name: 'Hezbollah (Radwan Force)', countryCode: 'LBN', flag: '🇱🇧', role: 'Anti-Tank Guided Missile & Rocket Salvos' },
      { name: 'UNIFIL', countryCode: 'LBN', flag: '🇺🇳', role: 'Blue Line Monitoring & Peacekeeper Outposts' }
    ],
    whatHappened: 'Israeli forces initiated localized ground maneuvers and intensive precision airstrikes across southern Lebanon to dismantle Hezbollah’s forward tunnel networks and enforce UN Security Council Resolution 1701 by pushing armed elements north of the Litani River.',
    whyItMatters: 'Directly impacts the return of 60,000+ displaced Israeli citizens to northern Galilee and threatens to trigger broader multi-front state collapse in Lebanon, risking direct Iranian retaliatory ballistic volleys.',
    globalImpact: {
      defense: 'Extensive expenditure of Iron Dome and David’s Sling interceptors against heavy rocket and drone salvos.',
      economy: 'Massive displacement of over 1.2 million Lebanese civilians, compounding Lebanon’s existing financial insolvency.',
      energy: 'Maritime gas production at the Karish offshore field operates under heightened naval perimeter defense.',
      trade: 'Commercial port operations at Beirut and Tripoli face shipping cancellations and container rerouting.',
      shipping: 'Eastern Mediterranean shipping insurance premiums surge.',
      diplomacy: 'France and the US lead diplomatic efforts to forge an enforceable ceasefire and strengthen the Lebanese Armed Forces.',
      security: 'Substantial destruction of Hezbollah’s senior leadership echelon and strategic precision missile inventories.'
    },
    indiaImpact: {
      documented: 'Indian Army contributes a full battalion (~900 personnel) to UNIFIL (United Nations Interim Force in Lebanon) deployed along the eastern sector of the Blue Line (Sector East HQ in Marjayoun).',
      potential: 'Indian peacekeepers remain in hardened bunkers during heavy artillery exchanges along the Blue Line.',
      analytical: 'New Delhi calls for strict adherence to international humanitarian law, protection of UN peacekeepers, and de-escalation through diplomatic dialogue.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: Even if a temporary ceasefire is negotiated, mutual strategic deterrence will remain volatile. Disarming Hezbollah north of the Litani requires an empowered Lebanese Armed Forces with external funding, which remains politically fraught.',
    sources: [
      { title: 'UNIFIL Official Press Statements on Blue Line Security', publisher: 'UNIFIL', url: 'https://unifil.unmissions.org/', type: 'official' },
      { title: 'IDF Operational Briefings on Northern Front', publisher: 'IDF', url: 'https://www.idf.il/en/', type: 'official' },
      { title: '2024 Israeli Invasion of Lebanon (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/2024_Israeli_invasion_of_Lebanon', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['ISR', 'LBN', 'IRN', 'USA', 'FRA', 'IND'],
      maritime: ['MEDITERRANEAN_SEA'],
      concepts: ['BUFFER_STATE', 'DETERRENCE', 'PROXY_WAR', 'AIR_DEFENCE'],
      military: ['IRON_DOME', 'SPIKE', 'F35']
    }
  },
  {
    id: 'evt_syria_post_conflict_golan',
    title: 'Syrian Political Upheaval & Golan Heights Disengagement Monitoring',
    headline: 'Collapse of the Assad regime leads to rapid rebel control in Damascus and Israeli buffer zone deployment in Golan',
    category: 'conflict',
    priority: 'CRITICAL',
    status: 'Developing',
    confidence: 'VERIFIED',
    changeType: 'NEW',
    lat: 33.1000,
    lng: 35.8000,
    region: 'middle_east',
    regionName: 'Middle East',
    sector: 'Golan Heights / UNDOF Separation Zone & Damascus',
    publishedAt: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 3).toISOString(),
    actors: [
      { name: 'Syrian Interim Authorities (HTS/Opposition)', countryCode: 'SYR', flag: '🇸🇾', role: 'Capture of Damascus & Transition Council Formation' },
      { name: 'Israel (IDF)', countryCode: 'ISR', flag: '🇮🇱', role: 'Mount Hermon & UNDOF Buffer Zone Forward Deployment' },
      { name: 'Turkey', countryCode: 'TUR', flag: '🇹🇷', role: 'Northern Border Stabilization & Safe Return Corridor' },
      { name: 'Russia', countryCode: 'RUS', flag: '🇷🇺', role: 'Tartus Naval Facility & Khmeimim Air Base Status' }
    ],
    whatHappened: 'Following the rapid capture of Aleppo, Hama, Homs, and Damascus by an opposition offensive led by Hayat Tahrir al-Sham, President Bashar al-Assad fled to Moscow. Israeli armed forces moved into the 1974 UNDOF separation zone and summit of Mount Hermon to secure forward observation posts.',
    whyItMatters: 'The single most consequential political collapse in the Middle East since the Arab Spring. It severs Iran’s direct land corridor ("Axis of Resistance") to Hezbollah, fundamentally reshapes Russian Mediterranean basing, and creates an entirely new security dynamic along the Israeli frontier.',
    globalImpact: {
      defense: 'IDF destroyed strategic Syrian chemical stockpiles, long-range Scud missiles, and naval air defenses to prevent proliferation.',
      economy: 'Massive capital flight and reconstruction needs exceeding $400 billion across Syria.',
      energy: 'Potential revival of regional Arab Gas Pipeline and power transmission connections.',
      trade: 'Transit trade through the Jordan-Syria-Turkey highway axis re-evaluated.',
      shipping: 'Status of the Russian naval logistical base at Tartus on the Mediterranean remains in legal limbo.',
      diplomacy: 'Intense multilateral diplomacy involving Turkey, Arab states, the US, and European capitals to stabilize governance.',
      security: 'Risk of weapons stockpiles falling into rogue hands; urgent need to protect religious and ethnic minorities.'
    },
    indiaImpact: {
      documented: 'India historically maintained an embassy in Damascus, offering humanitarian and educational scholarships.',
      potential: 'A transformed Levant reduces Iranian land-transit power projection while creating new diplomatic opportunities for Gulf-mediated stabilization.',
      analytical: 'India supports Syrian national unity, sovereignty, and a peaceful inclusive political transition without foreign terrorist domination.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: The new governance structures in Damascus will prioritize international recognition and financial aid, seeking to distance themselves from extremist rhetoric. Israel will maintain its fortified buffer along the Golan until stable bilateral disengagement can be verified.',
    sources: [
      { title: 'United Nations Security Council Briefing on the Situation in the Middle East (Syria)', publisher: 'UNSC', url: 'https://press.un.org/', type: 'official' },
      { title: 'UNDOF Press Releases on Golan Area of Separation', publisher: 'UNDOF', url: 'https://undof.unmissions.org/', type: 'official' },
      { title: '2024 Syrian Opposition Offensive (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/2024_Syrian_opposition_offensive', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['SYR', 'ISR', 'TUR', 'RUS', 'IRN', 'USA', 'IND'],
      maritime: ['MEDITERRANEAN_SEA'],
      concepts: ['BUFFER_STATE', 'SPHERE_OF_INFLUENCE', 'BALANCE_OF_POWER', 'STRATEGIC_DEPTH'],
      military: []
    }
  },
  {
    id: 'evt_saudi_iran_normalization',
    title: 'Saudi–Iran Beijing Accord Implementation & Regional Truce Monitoring',
    headline: 'Riyadh and Tehran sustain high-level security dialogues and diplomatic missions despite regional Levant turbulence',
    category: 'diplomacy',
    priority: 'MEDIUM',
    status: 'Stable',
    confidence: 'VERIFIED',
    changeType: 'STABLE',
    lat: 24.7136,
    lng: 46.6753,
    region: 'middle_east',
    regionName: 'Middle East',
    sector: 'Riyadh / Tehran / Beijing Trilateral Track',
    publishedAt: new Date(Date.now() - 1000 * 60 * 330).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 65).toISOString(),
    actors: [
      { name: 'Saudi Arabia', countryCode: 'SAU', flag: '🇸🇦', role: 'Crown Prince Mohammed bin Salman Economic Security Doctrine' },
      { name: 'Iran', countryCode: 'IRN', flag: '🇮🇷', role: 'Pezeshkian Administration Regional De-escalation Outreach' },
      { name: 'China', countryCode: 'CHN', flag: '🇨🇳', role: 'Beijing Accord Guarantor & Economic Mediator' }
    ],
    whatHappened: 'Despite ongoing conflict in the Levant and Red Sea, Saudi Arabia and Iran maintained direct diplomatic communication, exchange of military delegations, and high-level consultations in Riyadh and Tehran, preserving their March 2023 Chinese-brokered normalization pact.',
    whyItMatters: 'Prevents direct ballistic strikes against Saudi oil facilities (such as the 2019 Abqaiq-Khurais drone attack) and preserves relative peace along the Saudi-Yemeni border, allowing Riyadh to focus resources on its Vision 2030 economic transformation.',
    globalImpact: {
      defense: 'Absence of direct Saudi-Iran kinetic clashes keeps the Gulf Cooperation Council (GCC) mainland secure.',
      economy: 'Protects Saudi Arabia’s massive giga-projects (NEOM, Red Sea Global) from missile interdictions.',
      energy: 'Guarantees unhindered Saudi crude loading at Ras Tanura on the Persian Gulf.',
      trade: 'Exploratory bilateral commercial chamber of commerce delegations exchanging visits.',
      shipping: 'Safe navigation maintained in the northern and central Persian Gulf waters.',
      diplomacy: 'Highlights China’s emergence as a credible diplomatic heavyweight capable of brokering agreements between historic adversaries.',
      security: 'Dampens sectarian Sunni-Shia proxy competition across Iraq and Yemen.'
    },
    indiaImpact: {
      documented: 'India enjoys close strategic partnerships with both Saudi Arabia (energy, trade, diaspora, defence exercises) and Iran (Chabahar port, INSTC).',
      potential: 'Gulf detente drastically reduces the risk of India’s vital energy supplies and millions of Indian expatriate workers being caught in regional crossfire.',
      analytical: 'New Delhi welcomes de-escalation in the Persian Gulf as a necessary prerequisite for regional trade initiatives like the India-Middle East-Europe Economic Corridor (IMEC).'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: The Riyadh-Tehran detente is transactional rather than ideological. It will endure as long as both parties prioritize domestic economic consolidation, but remain vulnerable if Iranian proxy groups target Gulf infrastructure.',
    sources: [
      { title: 'Joint Trilateral Statement by Saudi Arabia, Iran, and China', publisher: 'MFA PRC', url: 'https://www.fmprc.gov.cn/eng/', type: 'official' },
      { title: 'Saudi Press Agency Official Communiqués', publisher: 'SPA', url: 'https://www.spa.gov.sa/en', type: 'official' },
      { title: 'Iran–Saudi Arabia Rapprochement (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Iran%E2%80%93Saudi_Arabia_rapprochement', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['SAU', 'IRN', 'CHN', 'USA', 'IND'],
      maritime: ['PERSIAN_GULF', 'RED_SEA'],
      concepts: ['CONFIDENCE_BUILDING_MEASURES', 'BALANCE_OF_POWER', 'STRATEGIC_AUTONOMY', 'ENERGY_SECURITY'],
      military: []
    }
  },
  {
    id: 'evt_senkaku_diaoyu_standoff',
    title: 'Senkaku / Diaoyu Islands Coast Guard Incursions',
    headline: 'Chinese Coast Guard vessels maintain continuous presence in contiguous and territorial waters off Okinawa',
    category: 'maritime',
    priority: 'HIGH',
    status: 'Monitoring',
    confidence: 'VERIFIED',
    changeType: 'UPDATED',
    lat: 25.7489,
    lng: 123.4739,
    region: 'indo_pacific',
    regionName: 'Indo-Pacific',
    sector: 'East China Sea / Nansei Islands Arc',
    publishedAt: new Date(Date.now() - 1000 * 60 * 185).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 32).toISOString(),
    actors: [
      { name: 'Japan Coast Guard (JCG)', countryCode: 'JPN', flag: '🇯🇵', role: '11th Regional Coast Guard HQ Cutter Patrols' },
      { name: 'China Coast Guard (CCG)', countryCode: 'CHN', flag: '🇨🇳', role: 'Armed Patrol Vessels & Automatic Identification Broadcasts' },
      { name: 'United States', countryCode: 'USA', flag: '🇺🇸', role: 'Article 5 Treaty Security Guarantee Affirmed' }
    ],
    whatHappened: 'China Coast Guard cutters armed with 76mm naval cannons set a new record for consecutive days of presence within the contiguous zone of the Japanese-administered Senkaku Islands (Diaoyu Dao), regularly entering territorial waters to intercept Japanese fishing boats.',
    whyItMatters: 'The United States has explicitly affirmed that Article 5 of the US-Japan Security Treaty applies to the Senkaku Islands. An armed clash between Japanese and Chinese coast guards could immediately trigger US military involvement in East Asia.',
    globalImpact: {
      defense: 'Japan deployed Type 12 surface-to-ship missile batteries and PAC-3 air defenses to Ishigaki and Yonaguni islands.',
      economy: 'Heightens geopolitical supply chain risks between the world’s second and fourth largest economies.',
      energy: 'Contested maritime seabed holds substantial unexplored natural gas and oil reserves.',
      trade: 'Sino-Japanese commercial bilateral trade exceeds $350 billion annually.',
      shipping: 'Key navigation route for merchant ships connecting Shanghai and Ningbo with the Pacific Ocean.',
      diplomacy: 'Continuous friction point in bilateral high-level ministerial and summit meetings.',
      security: 'China applying systematic grey-zone salami-slicing tactics to normalize administrative jurisdiction.'
    },
    indiaImpact: {
      documented: 'India and Japan share a Special Strategic and Global Partnership, conducting annual Malabar and Dharma Guardian naval/army drills.',
      potential: 'Chinese naval focus on the East China Sea constrains PLA Navy force projection capacity into the Indian Ocean.',
      analytical: 'India strongly supports the maintenance of the maritime status quo and opposes unilateral attempts to alter borders by force.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: Neither side will back down from patrol postures. Beijing will continue using coast guard vessels to assert sovereignty without crossing the threshold into kinetic military warfare, maintaining high tactical strain on the Japan Coast Guard.',
    sources: [
      { title: 'Japan Coast Guard Senkaku Islands Situation Updates', publisher: 'Kaiho Japan', url: 'https://www.kaiho.mlit.go.jp/e/', type: 'official' },
      { title: 'State Oceanic Administration (PRC) Diaoyu Dao Portal', publisher: 'SOA China', url: 'http://www.diaoyudao.org.cn/', type: 'official' },
      { title: 'Senkaku Islands Dispute (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Senkaku_Islands_dispute', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['JPN', 'CHN', 'USA', 'IND'],
      maritime: ['EAST_CHINA_SEA', 'PACIFIC_OCEAN'],
      concepts: ['GREY_ZONE', 'EEZ', 'TERRITORIAL_DISPUTE', 'EXTENDED_DETERRENCE'],
      military: ['TYPE_12_SSM', 'PATRIOT']
    }
  },
  {
    id: 'evt_luzon_archipelago_defense',
    title: 'Luzon Strait & Bashi Channel Maritime Surveillance Ring',
    headline: 'US-Philippine-Japanese joint radar and coastal missile deployment across Batanes islands',
    category: 'military',
    priority: 'HIGH',
    status: 'Developing',
    confidence: 'VERIFIED',
    changeType: 'NEW',
    lat: 20.4485,
    lng: 121.9708,
    region: 'indo_pacific',
    regionName: 'Indo-Pacific',
    sector: 'Luzon Strait / Bashi Channel / Batanes Islands',
    publishedAt: new Date(Date.now() - 1000 * 60 * 105).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 18).toISOString(),
    actors: [
      { name: 'Philippines Armed Forces', countryCode: 'PHL', flag: '🇵🇭', role: 'Comprehensive Archipelagic Defense Concept (CADC)' },
      { name: 'United States Marine Corps', countryCode: 'USA', flag: '🇺🇸', role: 'Marine Littoral Regiment (MLR) & NMESIS Deployments' },
      { name: 'Japan Self-Defense Forces', countryCode: 'JPN', flag: '🇯🇵', role: 'Coastal Surveillance Radar Systems Grant' }
    ],
    whatHappened: 'The Armed Forces of the Philippines and US Marine Corps conducted joint deployment exercises across the northern Batanes islands—located less than 150 km from southern Taiwan—installing air-surveillance radars and establishing mobile coastal defense positions commanding the Bashi Channel.',
    whyItMatters: 'The Bashi Channel is the primary deep-water naval corridor used by Chinese PLA Navy nuclear submarines and carrier strike groups exiting the South China Sea into the Philippine Sea to threaten the US naval base in Guam.',
    globalImpact: {
      defense: 'Closes a major operational gap in the First Island Chain anti-submarine and anti-ship perimeter.',
      economy: 'Secures primary underwater telecommunication fiber-optic cables transiting the Luzon Strait connecting East Asia to the Americas.',
      energy: 'Guarantees freedom of navigation for energy tankers transiting through the Malacca-Luzon corridor.',
      trade: 'Protects commercial shipping through one of the busiest maritime sea lines in the world.',
      shipping: 'Submarine acoustic listening arrays monitor all deep-water passages.',
      diplomacy: 'Deepens the Manila-Washington-Tokyo trilateral security architecture.',
      security: 'Enhances allied deterrence against a potential PLA encirclement of Taiwan from the south.'
    },
    indiaImpact: {
      documented: 'India delivered BrahMos supersonic anti-ship cruise missiles to the Philippine Marine Corps, enhancing Philippine coastal anti-access capabilities.',
      potential: 'Indian warships operating in the Western Pacific and South China Sea benefit from enhanced allied maritime domain awareness.',
      analytical: 'India champions a free, open, and inclusive Indo-Pacific where international sea lanes cannot be monopolized by any single power.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: The Philippines and the US will formalize permanent rotational deployments on Mavulis island. Beijing will respond with naval combat exercises and economic pressure targeting Philippine agricultural exports.',
    sources: [
      { title: 'Armed Forces of the Philippines Operational Briefings', publisher: 'AFP', url: 'https://www.afp.mil.ph/', type: 'official' },
      { title: 'US Marine Corps III Marine Expeditionary Force Updates', publisher: 'USMC', url: 'https://www.marines.mil/', type: 'official' },
      { title: 'Luzon Strait (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Luzon_Strait', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['PHL', 'USA', 'JPN', 'CHN', 'TWN', 'IND'],
      maritime: ['LUZON_STRAIT', 'SOUTH_CHINA_SEA', 'PACIFIC_OCEAN'],
      concepts: ['FIRST_ISLAND_CHAIN', 'CHOKEPOINT', 'A2_AD', 'SLOC'],
      military: ['BRAHMOS', 'TYPHON_MISSILE']
    }
  },
  {
    id: 'evt_gwadar_port_cpec_security',
    title: 'Gwadar Port CPEC Corridor & Baloch Insurgency Threat',
    headline: 'Majeed Brigade suicide attacks targeting Chinese engineering convoys disrupt multi-billion dollar transit hub',
    category: 'infrastructure',
    priority: 'HIGH',
    status: 'Developing',
    confidence: 'REPORTED',
    changeType: 'ESCALATED',
    lat: 25.1264,
    lng: 62.3225,
    region: 'south_asia',
    regionName: 'South Asia',
    sector: 'Balochistan / Gwadar Free Zone & Arabian Sea',
    publishedAt: new Date(Date.now() - 1000 * 60 * 125).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 24).toISOString(),
    actors: [
      { name: 'Baloch Liberation Army (BLA)', countryCode: 'PAK', flag: '🏴', role: 'Majeed Brigade Coordinated Attacks & Highway Checkpoints' },
      { name: 'Pakistan Armed Forces', countryCode: 'PAK', flag: '🇵🇰', role: 'Special Security Division (SSD) Escorts & Counter-Terrorism' },
      { name: 'China (COPHC)', countryCode: 'CHN', flag: '🇨🇳', role: 'China Overseas Port Holding Company Infrastructure' }
    ],
    whatHappened: 'The Baloch Liberation Army executed multiple coordinated assaults against security installations and Chinese engineering convoys outside Karachi airport and Gwadar port, demanding an immediate halt to what they term the exploitation of Balochistan’s mineral and maritime resources.',
    whyItMatters: 'Gwadar is the strategic crown jewel of China’s $62 billion China-Pakistan Economic Corridor (CPEC), designed to connect western China (Xinjiang) directly to the Arabian Sea, providing Beijing an overland shortcut that bypasses the Malacca Strait.',
    globalImpact: {
      defense: 'China demanding permission to deploy its own private security contractors inside Pakistan to protect personnel.',
      economy: 'Chills foreign direct investment and stalls commercial development of the Gwadar Free Trade Zone.',
      energy: 'Planned oil refinery and pipeline projects to Kashgar remain economically unviable.',
      trade: 'Commercial cargo throughput at Gwadar remains negligible compared to Karachi and Port Qasim.',
      shipping: 'Chinese naval combatants occasionally dock for replenishment, raising concerns of dual-use naval basing.',
      diplomacy: 'Strains bilateral trust between Beijing and Islamabad over counter-insurgency efficacy.',
      security: 'Baloch insurgent groups integrating advanced weaponry, drone surveillance, and female suicide bombers.'
    },
    indiaImpact: {
      documented: 'Gwadar sits just 72 km east of Iran’s Chabahar port, where India operates the Shahid Beheshti terminal to access Central Asia and Afghanistan.',
      potential: 'Pakistan regularly attempts to deflect from internal domestic grievances by accusing Indian intelligence agencies of supporting the insurgency.',
      analytical: 'Security failures at Gwadar highlight the insurmountable topographical and political hurdles facing China’s overland Malacca bypass ambitions.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: Pakistan will intensify kinetic military sweeps in Balochistan, but insurgent attacks will persist due to deep socio-political alienation. Gwadar will remain a heavily fortified, underutilized garrison outpost rather than a thriving global trade hub.',
    sources: [
      { title: 'Inter-Services Public Relations (ISPR) Pakistan Press Releases', publisher: 'ISPR', url: 'https://ispr.gov.pk/', type: 'official' },
      { title: 'CPEC Official Secretariat Project Progress Reports', publisher: 'CPEC Gov.pk', url: 'https://cpec.gov.pk/', type: 'official' },
      { title: 'Gwadar Port (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Gwadar_Port', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['PAK', 'CHN', 'IND', 'IRN'],
      maritime: ['ARABIAN_SEA', 'STRAIT_OF_HORMUZ'],
      concepts: ['TRADE_CORRIDOR', 'SLOC', 'ASYMMETRIC_WARFARE', 'SPHERE_OF_INFLUENCE'],
      military: []
    }
  },
  {
    id: 'evt_teesta_river_barrage',
    title: 'Teesta River Water Management & India–Bangladesh Hydropolitics',
    headline: 'Bilateral negotiations on Teesta barrage restoration advance amid Chinese competing project bids',
    category: 'diplomacy',
    priority: 'MEDIUM',
    status: 'Stable',
    confidence: 'VERIFIED',
    changeType: 'UPDATED',
    lat: 26.2372,
    lng: 88.9281,
    region: 'south_asia',
    regionName: 'South Asia',
    sector: 'Gajoldoba Barrage / West Bengal & Rangpur',
    publishedAt: new Date(Date.now() - 1000 * 60 * 350).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
    actors: [
      { name: 'India', countryCode: 'IND', flag: '🇮🇳', role: 'Joint River Commission & Comprehensive Restoration Technical Mission' },
      { name: 'Bangladesh', countryCode: 'BGD', flag: '🇧🇩', role: 'Dry-Season Water Sharing & Riverbed Dredging Demands' },
      { name: 'China (PowerChina)', countryCode: 'CHN', flag: '🇨🇳', role: '$1 Billion Teesta River Comprehensive Management Project Proposal' }
    ],
    whatHappened: 'India committed to sending a technical team to Bangladesh for the restoration and management of the Teesta River, seeking to finance and execute the project itself and proactively block a competing $1 billion proposal from China’s PowerChina to develop the river basin close to the strategic Siliguri Corridor.',
    whyItMatters: 'Water security is an existential issue for 21 million farmers in northern Bangladesh. Crucially, the Teesta basin sits immediately adjacent to India’s sensitive "Chicken’s Neck" (Siliguri Corridor), making Chinese civil-engineering presence in the area an unacceptable military vulnerability for New Delhi.',
    globalImpact: {
      defense: 'Prevents Chinese dual-use survey teams and engineers from operating within 50 km of the Siliguri Corridor.',
      economy: 'Essential for dry-season irrigation, food production, and flood mitigation across West Bengal and northern Bangladesh.',
      energy: 'Hydropower generation at upstream Sikkim dams balanced against downstream flow requirements.',
      trade: 'Inland river water transit protocols rely on seasonal depth maintenance.',
      shipping: 'Riverine navigation corridors connecting the Brahmaputra to the Bay of Bengal.',
      diplomacy: 'Exemplifies India’s proactive neighborhood infrastructure diplomacy to hedge against Chinese encirclement.',
      security: 'Transboundary river management represents a core pillar of long-term subcontinent stability.'
    },
    indiaImpact: {
      documented: 'Prime Minister Modi confirmed India’s commitment to river conservation and flood management during bilateral summit discussions.',
      potential: 'A balanced Teesta agreement strengthens goodwill across the Bangladeshi public and neutralizes anti-India political narratives.',
      analytical: 'Domestic coordination between the Government of India and the West Bengal state government remains essential to conclude a formal water-sharing treaty.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: Technical feasibility studies led by Indian agencies will proceed, effectively displacing the Chinese proposal. A final treaty on dry-season flow quotas will depend on domestic Indian political consensus in West Bengal.',
    sources: [
      { title: 'Joint Rivers Commission India-Bangladesh Official Portal', publisher: 'JRC India', url: 'https://jrc.gov.in/', type: 'official' },
      { title: 'Ministry of External Affairs (India) Bilateral Factsheets', publisher: 'MEA India', url: 'https://www.mea.gov.in/', type: 'official' },
      { title: 'Teesta River (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Teesta_River', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['IND', 'BGD', 'CHN'],
      maritime: ['BAY_OF_BENGAL'],
      concepts: ['CHOKEPOINT', 'BUFFER_STATE', 'FOOD_SECURITY', 'STRATEGIC_AUTONOMY'],
      military: []
    }
  },
  {
    id: 'evt_france_germany_defense',
    title: 'European Defense Consolidation & Franco-German Rearmament Axis',
    headline: 'Paris and Berlin harmonize industrial production on Main Ground Combat System (MGCS) and FCAS stealth fighter',
    category: 'military',
    priority: 'MEDIUM',
    status: 'Stable',
    confidence: 'VERIFIED',
    changeType: 'UPDATED',
    lat: 48.8566,
    lng: 2.3522,
    region: 'europe',
    regionName: 'Europe',
    sector: 'Paris / Berlin / European Defense Agency',
    publishedAt: new Date(Date.now() - 1000 * 60 * 290).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 50).toISOString(),
    actors: [
      { name: 'France (DGA)', countryCode: 'FRA', flag: '🇫🇷', role: 'Dassault Aviation, Thales & Nuclear Strategic Deterrence' },
      { name: 'Germany (BMVg)', countryCode: 'DEU', flag: '🇩🇪', role: 'Zeitenwende €100B Fund, Rheinmetall & KNDS Armored Vehicles' },
      { name: 'European Union', countryCode: 'FRA', flag: '🇪🇺', role: 'European Defence Industry Strategy (EDIS)' }
    ],
    whatHappened: 'Defense ministers of France and Germany finalized industrial workshare agreements for the Main Ground Combat System (MGCS next-generation tank) developed by KNDS and Rheinmetall, and reinforced commitment to the Future Combat Air System (FCAS), cementing European defense industrial autonomy.',
    whyItMatters: 'With potential shifts in US transatlantic defense commitments, Europe must build sovereign conventional and nuclear defense capabilities capable of deterring Russian aggression without relying exclusively on American military hardware.',
    globalImpact: {
      defense: 'Gradual reduction of European military dependency on off-the-shelf US systems (F-35, Patriot, HIMARS).',
      economy: 'Massive multi-billion euro procurement contracts revitalizing European industrial manufacturing capacity.',
      energy: 'European defense factories securing dedicated energy supplies to maintain surge production lines.',
      trade: 'Strengthens European arms export competitiveness in global markets.',
      shipping: 'Secures European naval shipbuilders (Naval Group, ThyssenKrupp Marine Systems) global orders.',
      diplomacy: 'Debate between French vision of "Strategic Autonomy" and German preference for continued NATO integration.',
      security: 'Explores nuclear deterrence sharing concepts between France’s Force de Frappe and non-nuclear European partners.'
    },
    indiaImpact: {
      documented: 'France is India’s foremost European strategic defense partner (Rafale fighters, Scorpene submarines, joint jet engine development with Safran).',
      potential: 'Franco-German industrial collaboration creates co-development opportunities for Indian defense private-sector manufacturers.',
      analytical: 'India shares France’s core philosophy of multipolarity and strategic autonomy, welcoming a stronger, sovereign Europe capable of acting as an independent pole.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: MGCS and FCAS will face recurring corporate rivalry between Dassault and Airbus over intellectual property and flight controls. However, existential security threats on Europe’s eastern border will prevent cancellation of core programs.',
    sources: [
      { title: 'French Ministry for the Armed Forces Press Releases', publisher: 'Defense.gouv.fr', url: 'https://www.defense.gouv.fr/en', type: 'official' },
      { title: 'German Federal Ministry of Defence Zeitenwende Report', publisher: 'BMVg Germany', url: 'https://www.bmvg.de/en', type: 'official' },
      { title: 'Future Combat Air System (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Future_Combat_Air_System', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['FRA', 'DEU', 'USA', 'IND'],
      maritime: ['BALTIC_SEA', 'MEDITERRANEAN_SEA'],
      concepts: ['STRATEGIC_AUTONOMY', 'COLLECTIVE_SECURITY', 'BALANCE_OF_POWER', 'DETERRENCE'],
      military: ['RAFALE', 'LEOPARD_2', 'EUROFIGHTER']
    }
  },
  {
    id: 'evt_nordic_defense_integration',
    title: 'Nordic Air Operations Command & Arctic NATO Integration',
    headline: 'Sweden and Finland integrate air forces with Norway and Denmark, forming a unified 250-fighter Nordic fleet',
    category: 'military',
    priority: 'HIGH',
    status: 'Stable',
    confidence: 'VERIFIED',
    changeType: 'UPDATED',
    lat: 60.1699,
    lng: 24.9384,
    region: 'europe',
    regionName: 'Europe',
    sector: 'High North / Baltic Sea & Kola Peninsula Perimeter',
    publishedAt: new Date(Date.now() - 1000 * 60 * 200).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 35).toISOString(),
    actors: [
      { name: 'Sweden & Finland', countryCode: 'SWE', flag: '🇸🇪', role: 'JAS 39 Gripen & F/A-18 Dispersed Road Base Operations' },
      { name: 'Norway & Denmark', countryCode: 'NOR', flag: '🇳🇴', role: 'F-35A Lightning II Stealth Fleet Integration' },
      { name: 'NATO Allied Air Command', countryCode: 'USA', flag: '🇺🇸', role: 'Ramstein Air Base Unified Joint Operations' }
    ],
    whatHappened: 'Following the formal accession of Finland and Sweden to NATO, the air force chiefs of Sweden, Finland, Norway, and Denmark operationalized a joint Nordic Air Operations concept, creating a seamless unified air armada of over 250 frontline combat aircraft acting as a single integrated force.',
    whyItMatters: 'Completely transforms the military balance in Northern Europe and the Arctic. The Baltic Sea is now effectively a "NATO lake", encircling Russia’s Baltic Fleet in Kaliningrad and Kronstadt and providing air superiority over Russian nuclear submarine bases on the Kola Peninsula.',
    globalImpact: {
      defense: 'Mastery of distributed highway runway takeoff and landing doctrines, minimizing vulnerability to ballistic missile strikes on main bases.',
      economy: 'Unified Nordic logistics and maintenance reduces operating life-cycle costs across all four defense budgets.',
      energy: 'Total security over Norwegian offshore gas pipelines supplying 30% of Europe’s gas consumption.',
      trade: 'Guaranteed commercial navigation through the Skagerrak, Kattegat, and Baltic shipping lanes.',
      shipping: 'Integration of Swedish Gotland island defenses commanding Baltic maritime corridors.',
      diplomacy: 'Marks the definitive historical end of 200 years of Swedish non-alignment and Finnish neutrality.',
      security: 'Neutralizes Russian A2/AD missile superiority across the northern flank.'
    },
    indiaImpact: {
      documented: 'India maintains extensive trade and technological partnerships with all Nordic countries (Nordic-India Summit framework).',
      potential: 'Sweden’s Saab actively pitches its JAS 39 Gripen E for the Indian Air Force’s 114 Multi-Role Fighter Aircraft (MRFA) procurement with full technology transfer.',
      analytical: 'India observes how distributed dispersal tactics on civil highways can be adapted for Indian Air Force contingency planning along mountainous Himalayan frontiers.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: The Nordic air alliance will expand into joint mechanized brigade command structures under NATO Multinational Corps Northeast, creating an unassailable defensive wall along the 1,340 km Finnish-Russian border.',
    sources: [
      { title: 'Nordic Defence Cooperation (NORDEFCO) Official Reports', publisher: 'NORDEFCO', url: 'https://www.nordefco.org/', type: 'official' },
      { title: 'NATO Joint Air Power Competence Centre Publications', publisher: 'JAPCC', url: 'https://www.japcc.org/', type: 'official' },
      { title: 'Nordic Defence Cooperation (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Nordic_Defence_Cooperation', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['SWE', 'FIN', 'NOR', 'DNK', 'RUS', 'USA', 'IND'],
      maritime: ['BALTIC_SEA', 'NORWEGIAN_SEA', 'ARCTIC_OCEAN'],
      concepts: ['COLLECTIVE_SECURITY', 'A2_AD', 'DETERRENCE', 'BALANCE_OF_POWER'],
      military: ['GRIPEN', 'F35']
    }
  },
  {
    id: 'evt_libya_oil_central_bank',
    title: 'Libyan Central Bank Governance Crisis & Crude Export Force Majeure',
    headline: 'Eastern-based Haftar administration lifts oilfield blockades following compromise on central bank leadership',
    category: 'energy',
    priority: 'HIGH',
    status: 'Stable',
    confidence: 'VERIFIED',
    changeType: 'UPDATED',
    lat: 30.0768,
    lng: 19.5714,
    region: 'africa',
    regionName: 'Africa',
    sector: 'Sirte Basin Oilfields / Ras Lanuf & Es Sider Terminals',
    publishedAt: new Date(Date.now() - 1000 * 60 * 310).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 52).toISOString(),
    actors: [
      { name: 'Libyan National Oil Corporation (NOC)', countryCode: 'LBY', flag: '🇱🇾', role: 'Crude Production & Terminal Force Majeure Lifting' },
      { name: 'Eastern Administration (LNA/Haftar)', countryCode: 'LBY', flag: '🇱🇾', role: 'Control Over Oil Crescent Export Terminals' },
      { name: 'Western Administration (GNU/Dbeibah)', countryCode: 'LBY', flag: '🇱🇾', role: 'Tripoli-Based Government of National Unity' }
    ],
    whatHappened: 'Following an abrupt political battle over the governorship of the Central Bank of Libya (which controls all national oil revenues) that shut down over 700,000 barrels per day of crude production, UN-brokered talks appointed a compromise central bank leadership, enabling the National Oil Corporation to resume full output.',
    whyItMatters: 'Libya holds Africa’s largest proven crude oil reserves (48 billion barrels). Because Libyan crude is predominantly light and sweet (low sulfur), European refineries rely heavily on it to replace banned Russian Urals barrels. Sudden blockades create acute supply shocks in the Mediterranean.',
    globalImpact: {
      defense: 'Foreign private military contractors (Russian Africa Corps, Turkish advisers) remain entrenched across divided regional zones.',
      economy: 'Restores approximately 1.2 million barrels per day of crude oil to global markets, easing Brent price pressures.',
      energy: 'Guarantees pipeline natural gas flows (Greenstream) from Libyan fields to Sicily and mainland Italy.',
      trade: 'Restores foreign exchange reserves for basic food and medical imports.',
      shipping: 'Tanker loadings resume normal schedules at Ras Lanuf, Es Sider, and Zueitina.',
      diplomacy: 'UN Support Mission in Libya (UNSMIL) continues fragile mediation toward delayed national elections.',
      security: 'Underlines the fragility of petroleum infrastructure hostage to rival warlord extortion.'
    },
    indiaImpact: {
      documented: 'Indian state refiners (IOCL, HPCL) occasionally import Libyan light sweet crude when discount spreads are favorable.',
      potential: 'Stabilization of Mediterranean crude supply keeps a downward check on global oil benchmark prices, benefiting Indian import bills.',
      analytical: 'India maintains diplomatic relations through its mission in Tripoli, supporting an inclusive Libyan-led and Libyan-owned political settlement.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: While crude output has recovered, the structural partition between eastern and western military factions remains unaddressed. Any future dispute over state budget disbursement will trigger another arbitrary oilfield shutdown.',
    sources: [
      { title: 'National Oil Corporation (Libya) Production Statements', publisher: 'NOC Libya', url: 'https://noc.ly/en/', type: 'official' },
      { title: 'UN Support Mission in Libya (UNSMIL) Press Briefings', publisher: 'UNSMIL', url: 'https://unsmil.unmissions.org/', type: 'official' },
      { title: 'Libyan Crisis (2011–present) (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Libyan_crisis_(2011%E2%80%93present)', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['LBY', 'ITA', 'TUR', 'RUS', 'EGY', 'IND'],
      maritime: ['MEDITERRANEAN_SEA'],
      concepts: ['ENERGY_SECURITY', 'RESOURCE_CURSE', 'PROXY_WAR', 'STATUS_QUO'],
      military: []
    }
  },
  {
    id: 'evt_svalbard_treaty_arctic',
    title: 'Svalbard Treaty Sovereignty Contestation & Arctic Seabed Mining',
    headline: 'Norway asserts strict environmental sovereignty over Spitsbergen as Russia and EU dispute continental shelf rights',
    category: 'maritime',
    priority: 'MEDIUM',
    status: 'Monitoring',
    confidence: 'REPORTED',
    changeType: 'STABLE',
    lat: 78.2232,
    lng: 15.6267,
    region: 'arctic',
    regionName: 'Arctic',
    sector: 'Svalbard Archipelago / Barents Sea & Spitsbergen',
    publishedAt: new Date(Date.now() - 1000 * 60 * 370).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 65).toISOString(),
    actors: [
      { name: 'Norway', countryCode: 'NOR', flag: '🇳🇴', role: 'Coast Guard Patrols & Environmental Protection Act Enforcement' },
      { name: 'Russia (Trust Arktikugol)', countryCode: 'RUS', flag: '🇷🇺', role: 'Barentsburg Settlement & Scientific Research Hub' },
      { name: 'European Union', countryCode: 'FRA', flag: '🇪🇺', role: 'Snow Crab Fishing & Mineral Rights Dispute' }
    ],
    whatHappened: 'Norway enforced stricter environmental and helicopter flight regulations over the Svalbard archipelago, drawing diplomatic protests from Moscow, which operates the coal-mining town of Barentsburg, and disputing whether the 1920 Svalbard Treaty’s equal economic access clause extends to the 200-nautical-mile continental shelf and deep-sea minerals.',
    whyItMatters: 'Svalbard occupies the strategic maritime gateway between the Barents Sea and the North Atlantic (the Greenland-Iceland-UK or GIUK Gap). Russian nuclear ballistic missile submarines from the Northern Fleet must transit these waters to reach open ocean patrol stations.',
    globalImpact: {
      defense: 'Norway maintains strict demilitarization of the archipelago in accordance with Article 9 of the Treaty.',
      economy: 'Norway’s parliament voted to permit exploratory deep-sea seabed mining for polymetallic nodules in Arctic waters.',
      energy: 'Potential vast reserves of copper, zinc, lithium, and rare earth minerals on the Arctic seabed.',
      trade: 'Commercial fishing quotas (cod and snow crab) intensely litigated in international courts.',
      shipping: 'Svalbard Satellite Station (SvalSat) provides polar tracking data for hundreds of civilian and dual-use satellites.',
      diplomacy: 'Tests the legal boundaries between 1920 treaty rights and the modern 1982 UNCLOS regime.',
      security: 'Subsea fiber-optic data cables connecting Svalbard to the Norwegian mainland suffered mysterious severed line incidents.'
    },
    indiaImpact: {
      documented: 'India is an original signatory to the 1920 Svalbard Treaty and established its permanent Arctic research station "Himadri" at Ny-Ålesund in 2008.',
      potential: 'India conducts continuous atmospheric, biological, and glaciological scientific research at Svalbard to understand linkages between Arctic climate change and the Indian Monsoon.',
      analytical: 'India upholds peaceful scientific exploration and treaty compliance while safeguarding its sovereign signatory rights in the polar theater.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: Norway will strictly maintain its legal jurisdiction over the Svalbard shelf despite Russian diplomatic bluster. Scientific research stations from various countries will serve as de facto strategic presence outposts.',
    sources: [
      { title: 'Governor of Svalbard Official Regulatory Portal', publisher: 'Sysselmesteren', url: 'https://www.sysselmesteren.no/en/', type: 'official' },
      { title: 'Norwegian Ministry of Foreign Affairs Svalbard White Paper', publisher: 'Regjeringen.no', url: 'https://www.regjeringen.no/en/', type: 'official' },
      { title: 'Svalbard Treaty (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Svalbard_Treaty', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['NOR', 'RUS', 'USA', 'IND'],
      maritime: ['ARCTIC_OCEAN', 'BARENTS_SEA', 'NORWEGIAN_SEA'],
      concepts: ['EEZ', 'SLOC', 'FREEDOM_OF_NAVIGATION', 'STRATEGIC_AUTONOMY'],
      military: []
    }
  },
  {
    id: 'evt_critical_minerals_cartel',
    title: 'Global Critical Minerals Realignment & Rare Earth Supply Securitization',
    headline: 'Western-led Minerals Security Partnership counters Chinese rare earth processing dominance with bilateral off-take pacts',
    category: 'technology',
    priority: 'HIGH',
    status: 'Developing',
    confidence: 'VERIFIED',
    changeType: 'UPDATED',
    lat: -33.8688,
    lng: 151.2093,
    region: 'global',
    regionName: 'Global',
    sector: 'Global Critical Minerals Corridors (Australia / Chile / Africa)',
    publishedAt: new Date(Date.now() - 1000 * 60 * 160).toISOString(),
    lastVerifiedAt: new Date(Date.now() - 1000 * 60 * 26).toISOString(),
    actors: [
      { name: 'Minerals Security Partnership (MSP)', countryCode: 'USA', flag: '🌐', role: '14-Nation Coalition (US, India, Japan, EU, Australia, etc.)' },
      { name: 'China (China Rare Earth Group)', countryCode: 'CHN', flag: '🇨🇳', role: 'Dominance Over 90% of Magnet & Heavy Rare Earth Refining' },
      { name: 'International Energy Agency', countryCode: 'FRA', flag: '🇫🇷', role: 'Critical Minerals Market Review' }
    ],
    whatHappened: 'The Minerals Security Partnership (MSP)—now including India—advanced financing for 15+ mining and processing projects across Africa, Australia, and South America to build secure supply chains for lithium, nickel, cobalt, graphite, and neodymium magnets independent of China.',
    whyItMatters: 'An F-35 fighter jet requires 417 kg of rare earth materials; a Virginia-class nuclear submarine requires over 4 tonnes. China’s near-monopoly over rare earth permanent magnet refining gives Beijing immense geopolitical leverage to choke Western defense and green-energy supply chains.',
    globalImpact: {
      defense: 'US Department of Defense funding domestic processing plants (Lynas, MP Materials) and strategic stockpiling.',
      economy: 'Massive capital investments into downstream refining, overcoming low environmental cost advantages held by China.',
      energy: 'Determines the production pace of electric vehicle traction motors, wind turbines, and grid battery storage.',
      trade: 'Bilateral Free Trade Agreement mineral provisions signed between the US, Japan, and the EU.',
      shipping: 'Maritime bulk shipping of raw mineral ores increasingly redirected to specialized processing hubs.',
      diplomacy: 'Intense diplomatic competition for mining concessions in Africa’s Copperbelt (Zambia, DRC) and South America’s Lithium Triangle.',
      security: 'Critical minerals elevated to the status of national security assets on par with crude oil and uranium.'
    },
    indiaImpact: {
      documented: 'India joined the Minerals Security Partnership (MSP) in 2023 and amended the Mines and Minerals (MMDR) Act to auction 24 critical mineral blocks, including domestic lithium deposits in Jammu & Kashmir and Chhattisgarh.',
      potential: 'Indian state venture KABIL (Khanij Bidesh India Ltd) acquired five lithium brine exploration blocks in Catamarca, Argentina.',
      analytical: 'Securing diversified supplies of processed rare earths is indispensable for India’s flagship "Make in India" manufacturing and national electric mobility missions.'
    },
    whatCouldHappenNext: 'ANALYTICAL ASSESSMENT: Developing non-Chinese separation and refining facilities for heavy rare earths (dysprosium, terbium) will require 5–7 years due to complex chemical processing and environmental permitting. Beijing will retain asymmetric leverage in magnet supply through 2028.',
    sources: [
      { title: 'US Department of State Minerals Security Partnership Fact Sheet', publisher: 'US State Dept', url: 'https://www.state.gov/', type: 'official' },
      { title: 'Ministry of Mines (India) Critical Minerals Strategy', publisher: 'Mines.gov.in', url: 'https://mines.gov.in/', type: 'official' },
      { title: 'Rare earths trade dispute (Wikipedia)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Rare_earths_trade_dispute', type: 'wikipedia' }
    ],
    relatedEntities: {
      countries: ['USA', 'CHN', 'AUS', 'IND', 'JPN', 'CAN'],
      maritime: ['PACIFIC_OCEAN', 'INDIAN_OCEAN'],
      concepts: ['RESOURCE_CURSE', 'STRATEGIC_AUTONOMY', 'TRADE_CORRIDOR', 'ECONOMIC_SANCTIONS'],
      military: []
    }
  },
  {
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
    whatHappened: 'Greenland is experiencing intense trilateral geopolitical competition. The US has expanded diplomatic and technical aid through its Nuuk consulate to integrate Greenland into Western critical mineral supply chains, following Denmark\'s 2018 veto of Chinese bids to construct international airports in Nuuk and Ilulissat. Greenland\'s parliament passed legislation prohibiting uranium mining, effectively halting the Chinese-backed Kvanefjeld rare earth project while boosting Western interest in the uranium-free Tanbreez heavy rare earth deposit.',
    whyItMatters: 'Greenland holds the world\'s largest undeveloped reserves of heavy rare earth elements (dysprosium, terbium, neodymium) outside of China. These minerals are indispensable for permanent magnets in F-35 fighter jets, nuclear submarine drive motors, guided missiles, and electric vehicle drivetrains. Furthermore, Greenland commands the GIUK Gap and the western gateway to the opening Northwest Passage.',
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
];


