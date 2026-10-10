// ============================================================================
// GEOINTEL — "WHAT-IF?" WARGAMING & CRISIS SCENARIO SIMULATION ENGINE
// Probabilistic escalation models, cascading economic shocks, SLOC reroutes,
// and Sherman Kent estimative probability ratings.
// ============================================================================

export const KENT_PROBABILITY_SCALE = {
  ALMOST_CERTAIN: { label: 'Almost Certain', range: '90–99%', color: '#ffffff', bg: 'rgba(255,255,255,0.15)' },
  HIGHLY_LIKELY:  { label: 'Highly Likely',  range: '70–85%', color: '#e0e0e0', bg: 'rgba(224,224,224,0.12)' },
  LIKELY:         { label: 'Likely',         range: '55–70%', color: '#cccccc', bg: 'rgba(204,204,204,0.10)' },
  EVEN_CHANCE:    { label: 'Even Chance',    range: '40–60%', color: '#aaaaaa', bg: 'rgba(170,170,170,0.08)' },
  UNLIKELY:       { label: 'Unlikely',       range: '15–35%', color: '#888888', bg: 'rgba(136,136,136,0.06)' },
  REMOTE:         { label: 'Remote',         range: '<10%',   color: '#666666', bg: 'rgba(102,102,102,0.04)' }
};

export const WARGAME_SCENARIOS = [
  {
    id: 'SCENARIO_TAIWAN_BLOCKADE',
    code: 'WARGAME-TW-26',
    title: 'Taiwan Strait Quarantine & Maritime Interdiction',
    category: 'Indo-Pacific Contestation',
    theater: 'Taiwan Strait & First Island Chain',
    threatLevel: 'CRITICAL',
    baselineProbability: KENT_PROBABILITY_SCALE.LIKELY,
    focusCoords: { lat: 24.1, lng: 120.5, zoomDist: 175 },
    summary: 'PRC initiates a non-kinetic "Customs Inspection Quarantine" backed by Coast Guard and Eastern Theater Command, declaring a 60-nautical-mile maritime exclusion zone around Kaohsiung and Keelung to choke advanced semiconductor exports and energy imports.',
    strategicActors: [
      { code: 'CHN', role: 'Blockading Power', posture: 'Anti-Access/Area Denial (A2/AD), Coast Guard cutter enforcement, rocket force saturation' },
      { code: 'TWN', role: 'Defender', posture: 'Overall Defense Concept (ODC), asymmetric coastal mobile Harpoon/Hsiung Feng III missiles, civilian stockpiles' },
      { code: 'USA', role: 'Intervening Power', posture: 'Indo-Pacific Command CSGs, Freedom of Navigation FONOPS, bilateral escort dilemmas' },
      { code: 'JPN', role: 'Forward Host Nation', posture: 'Southwest Islands defense, Kadena/Yokosuka logistics hub, Senkaku surveillance' }
    ],
    reroutedRoutes: [
      {
        name: 'Trans-Pacific Direct Diversion (East of Taiwan Trench)',
        fromCoords: [22.0, 125.0],
        toCoords: [32.0, 135.0],
        addedDays: 4.5,
        bypassedChokepoint: 'Taiwan Strait (110 nm channel)'
      },
      {
        name: 'Luzon Strait Southern Deviation',
        fromCoords: [18.5, 118.0],
        toCoords: [20.0, 124.0],
        addedDays: 3.2,
        bypassedChokepoint: 'Kaohsiung Port Approaches'
      }
    ],
    phases: [
      {
        phase: 0,
        name: 'Phase 0: Grey-Zone Quarantine Declaration',
        timeline: 'Day 1–3',
        description: 'PRC Maritime Safety Administration declares mandatory digital cargo pre-clearance. Coast Guard cutters intercept foreign bulk carriers outside Kaohsiung. Commercial insurers suspend war-risk coverage for Taiwan ports.',
        kentAssessment: 'Highly Likely (80%) initial grey-zone formulation to avoid immediate US trigger of Taiwan Relations Act defense commitments.',
        metrics: {
          crudeOilBbl: '$88',
          bblDelta: '+$6/bbl',
          containerFreightTEU: '$4,100',
          freightDelta: '+35%',
          semiconductorDisruption: '25% delay',
          gdpLossBillion: '$320B',
          sprDaysRemaining: 180
        },
        cascades: [
          'Global container ship operators (Maersk, MSC, Evergreen) divert vessels east of the Ryukyu archipelago.',
          'Taiwan LNG inventory drops to 11 days of baseline power consumption reserves.',
          'TSMC Fab 18 wafer output continues but air cargo charters face 400% insurance premium hikes.'
        ]
      },
      {
        phase: 1,
        name: 'Phase 1: Kinetic Anti-Air & Submarine Picket',
        timeline: 'Day 4–10',
        description: 'PLAN Type 093 nuclear attack submarines deploy to Miyako and Bashi Straits. No-Fly Zone declared over central strait. Air cargo flights rerouted via Manila FIR. First commercial merchant vessel boarding occurs.',
        kentAssessment: 'Likely (65%) escalation if Taipei rejects cross-strait customs synchronization terms.',
        metrics: {
          crudeOilBbl: '$104',
          bblDelta: '+$22/bbl',
          containerFreightTEU: '$6,800',
          freightDelta: '+125%',
          semiconductorDisruption: '60% cutoff',
          gdpLossBillion: '$950B',
          sprDaysRemaining: 145
        },
        cascades: [
          'Global automotive and smartphone production assembly lines face immediate supply chain halts.',
          'US 7th Fleet organizes sovereign naval convoy escorts departing Sasebo and Subic Bay.',
          'Nikkei and Hang Seng equity indices drop 12-16% on acute trade paralysis fears.'
        ]
      },
      {
        phase: 2,
        name: 'Phase 2: Total Air-Sea Interdiction & Energy Cutoff',
        timeline: 'Day 11–28',
        description: 'Complete naval blockade of all 5 Taiwan commercial ports. Undersea fiber-optic cables severed in shallow Taiwan Strait seabed. Satellite communications jammed via electronic warfare regiments in Fujian.',
        kentAssessment: 'Even Chance (48%) depending on allied convoy escort resolve and UN Security Council deadlock.',
        metrics: {
          crudeOilBbl: '$128',
          bblDelta: '+$46/bbl',
          containerFreightTEU: '$11,200',
          freightDelta: '+270%',
          semiconductorDisruption: '92% freeze',
          gdpLossBillion: '$2,400B',
          sprDaysRemaining: 95
        },
        cascades: [
          'Global electronics supply chain enters emergency allocation rationing (est. $1.6T consumer tech delay).',
          'US invokes Defense Production Act; emergency TSMC Arizona/Dresden packaging ramp attempted.',
          'Taiwan enters strict rolling energy blackouts; hospital and defense priority power rationing.'
        ]
      },
      {
        phase: 3,
        name: 'Phase 3: Allied Counter-Intervention or Settlement',
        timeline: 'Day 29+',
        description: 'Bifurcation point: Either US/allied naval convoy breaks the maritime picket under aerial cover (kinetic clash risk), or brokered multilateral ceasefire freezes cross-strait status under high PRC inspection rights.',
        kentAssessment: 'Unlikely (30%) outright invasion in this phase; Highly Likely (75%) protracted economic warfare stalemate.',
        metrics: {
          crudeOilBbl: '$145',
          bblDelta: '+$63/bbl',
          containerFreightTEU: '$14,500',
          freightDelta: '+380%',
          semiconductorDisruption: '98% halt',
          gdpLossBillion: '$4,100B',
          sprDaysRemaining: 65
        },
        cascades: [
          'Global recession declared by IMF (estimated 2.8% loss of global output).',
          'Complete decoupling of high-technology trade between Western bloc and mainland China.',
          'Permanent militarization of the First Island Chain with rotational US/Japanese air wings.'
        ]
      }
    ],
    mitigationOptions: [
      'Pre-positioned allied stockpiles of LNG and emergency medical provisions on Penghu and main island.',
      'Establishment of an internationally recognized Humanitarian Maritime Safety Corridor under neutral flags.',
      'Immediate secondary sanctions warning package triggered through G7 financial clearing houses (SWIFT).'
    ]
  },
  {
    id: 'SCENARIO_HORMUZ_MINING',
    code: 'WARGAME-HZ-26',
    title: 'Strait of Hormuz Naval Mining & Gulf Interdiction',
    category: 'Energy & Middle East Security',
    theater: 'Strait of Hormuz & Persian Gulf',
    threatLevel: 'CRITICAL',
    baselineProbability: KENT_PROBABILITY_SCALE.EVEN_CHANCE,
    focusCoords: { lat: 26.5, lng: 56.4, zoomDist: 180 },
    summary: 'Following regional military strikes on nuclear or leadership facilities, IRGC Navy deploys bottom-influence and tethered naval mines across the 21-nautical-mile traffic separation scheme in the Strait of Hormuz, halting 20.5 million barrels/day of global crude flow.',
    strategicActors: [
      { code: 'IRN', role: 'Asymmetric Interdiction Power', posture: 'Emad/Fateh ballistic missile batteries, Ashoura swarm boats, Limpet mines, coastal radar' },
      { code: 'SAU', role: 'Energy Exporter', posture: 'East-West Petroline throughput maximization (5 Mbpd to Yanbu/Red Sea), Patriot missile defense' },
      { code: 'ARE', role: 'Energy Exporter', posture: 'Habshan-Fujairah pipeline utilization (1.5 Mbpd bypassing Hormuz)' },
      { code: 'USA', role: 'Maritime Hegemon', posture: 'NAVCENT 5th Fleet Bahrain, MCM mine countermeasures squadron, Task Force 59 unmanned sensors' }
    ],
    reroutedRoutes: [
      {
        name: 'Saudi East-West Petroline to Yanbu (Red Sea Terminal)',
        fromCoords: [26.0, 50.0],
        toCoords: [24.0, 38.0],
        addedDays: 1.5,
        bypassedChokepoint: 'Strait of Hormuz (bypasses 4.5 Mbpd of Arabian Gulf flow)'
      },
      {
        name: 'Fujairah Gulf of Oman Deepwater Bypass',
        fromCoords: [24.5, 54.0],
        toCoords: [25.1, 56.4],
        addedDays: 0.8,
        bypassedChokepoint: 'Hormuz Traffic Separation Channel'
      }
    ],
    phases: [
      {
        phase: 0,
        name: 'Phase 0: Covert Limpet Mining & Seizure',
        timeline: 'Day 1–2',
        description: 'Two foreign-flagged VLCC crude supertankers suffer hull detonations in the Gulf of Oman. IRGC fast patrol boats seize a UK-flagged product tanker off Abu Musa island.',
        kentAssessment: 'Highly Likely (85%) opening salvo during acute Gulf security crises.',
        metrics: {
          crudeOilBbl: '$94',
          bblDelta: '+$12/bbl',
          containerFreightTEU: '$3,800',
          freightDelta: '+25%',
          semiconductorDisruption: '5% indirect',
          gdpLossBillion: '$180B',
          sprDaysRemaining: 175
        },
        cascades: [
          'Lloyds of London declares Persian Gulf a High-Risk Area; P&I insurance surcharges rise 450%.',
          'Asian energy buyers (Japan, South Korea, India) scramble to secure West African and North Sea cargoes.',
          'Gold and safe-haven sovereign bonds surge as geopolitical risk premium spikes.'
        ]
      },
      {
        phase: 1,
        name: 'Phase 1: Dense Bottom-Influence Minefield Deployment',
        timeline: 'Day 3–7',
        description: 'Commercial shipping through the 2-mile inbound and outbound shipping lanes ceases entirely. US Fifth Fleet mine countermeasure vessels (Avenger-class MCMs) begin sonar mapping.',
        kentAssessment: 'Likely (60%) if maritime standoff escalates without immediate diplomatic backchannels.',
        metrics: {
          crudeOilBbl: '$122',
          bblDelta: '+$40/bbl',
          containerFreightTEU: '$5,900',
          freightDelta: '+95%',
          semiconductorDisruption: '15% indirect',
          gdpLossBillion: '$720B',
          sprDaysRemaining: 130
        },
        cascades: [
          'IEA activates multilateral collective Strategic Petroleum Reserve drawdown of 3.0 million bpd.',
          'Qatar LNG export capacity (77 Mtpa) effectively trapped behind the strait; European TTF gas prices spike 80%.',
          'India triggers strategic crude reserve release at Padur and Visakhapatnam (9.5 days buffer).'
        ]
      },
      {
        phase: 2,
        name: 'Phase 2: Kinetic Clashes & Coastal Battery Engagement',
        timeline: 'Day 8–20',
        description: 'US and coalition forces conduct strikes against IRGC coastal anti-ship missile sites (Noor, Qader) on Qeshm and Hormuz islands. Autonomous underwater vehicles (AUVs) hunt stealth mines under air cover.',
        kentAssessment: 'Even Chance (50%) of kinetic escalation to protect international freedom of navigation.',
        metrics: {
          crudeOilBbl: '$148',
          bblDelta: '+$66/bbl',
          containerFreightTEU: '$8,400',
          freightDelta: '+180%',
          semiconductorDisruption: '25% indirect',
          gdpLossBillion: '$1,650B',
          sprDaysRemaining: 85
        },
        cascades: [
          'Petrochemical feedstocks globally face severe shortages; fertilizer production halts across Europe.',
          'Global inflation rebounds 2.4 percentage points; central banks delay projected interest rate cuts.',
          'Kuwait and UAE declare force majeure on international long-term crude delivery contracts.'
        ]
      },
      {
        phase: 3,
        name: 'Phase 3: Cleared Channel & Permanent Militarization',
        timeline: 'Day 21+',
        description: 'Swept channel opened under 24/7 Aegis cruiser air-defense umbrella. Convoy transit system instituted with 12 ships per day maximum throughput.',
        kentAssessment: 'Almost Certain (92%) that any Hormuz closure will be forcibly cleared by multinational coalition within 30 days.',
        metrics: {
          crudeOilBbl: '$110',
          bblDelta: '+$28/bbl',
          containerFreightTEU: '$6,200',
          freightDelta: '+105%',
          semiconductorDisruption: '10% indirect',
          gdpLossBillion: '$1,100B',
          sprDaysRemaining: 110
        },
        cascades: [
          'Permanent expansion of overland pipeline networks (Saudi Petroline expanded to 7 Mbpd).',
          'GCC sovereign wealth funds absorb $250B in emergency stabilization expenditures.',
          'Accelerated shift of East Asian industry towards alternative energy and nuclear baseload.'
        ]
      }
    ],
    mitigationOptions: [
      'Maximum utilization of Saudi East-West Petroline and Abu Dhabi Fujairah overland crude corridors.',
      'Deployment of underwater robotic mine countermeasure drones (Task Force 59) for high-speed clearance.',
      'Emergency coordinated release of 180M barrels from IEA member Strategic Petroleum Reserves.'
    ]
  },
  {
    id: 'SCENARIO_CABLE_SEVERANCE',
    code: 'WARGAME-CB-26',
    title: 'Baltic & Transatlantic Subsea Infrastructure Sabotage',
    category: 'Critical Infrastructure & Hybrid Warfare',
    theater: 'Baltic Sea, North Sea & North Atlantic Shelf',
    threatLevel: 'SEVERE',
    baselineProbability: KENT_PROBABILITY_SCALE.HIGHLY_LIKELY,
    focusCoords: { lat: 57.5, lng: 18.0, zoomDist: 185 },
    summary: 'Coordinated grey-zone severance of key subsea telecommunications fiber cables and gas interconnectors across the Baltic Sea and North Atlantic, disrupting cross-border financial transactions, cloud data redundancy, and power grid links.',
    strategicActors: [
      { code: 'RUS', role: 'Hybrid Actor', posture: 'GUGI (Main Directorate of Deep-Sea Research) spy ships (Yantar), dark fleet anchor-dragging, submersibles' },
      { code: 'NATO', role: 'Defensive Alliance', posture: 'NATO Critical Undersea Infrastructure Coordination Cell, Baltic Air Policing, frigate patrols' },
      { code: 'FIN', role: 'Littoral State', posture: 'Coast Guard rapid response, subsea acoustic hydrophone array monitoring' },
      { code: 'SWE', role: 'Littoral State', posture: 'Gotland fortress command, Blekinge-class submarine patrols, seabed mine-hunters' }
    ],
    reroutedRoutes: [
      {
        name: 'Trans-Atlantic Satellite & Overland Eurasian Trunk Diversion',
        fromCoords: [51.5, -0.1],
        toCoords: [40.7, -74.0],
        addedDays: 0.1,
        bypassedChokepoint: 'Subsea North Atlantic Cable Corridor (Latency increases by 42ms)'
      },
      {
        name: 'Nordic Overland Terrestrial Fiber Ring Bypass',
        fromCoords: [60.1, 24.9],
        toCoords: [59.3, 18.0],
        addedDays: 0.05,
        bypassedChokepoint: 'Baltic Subsea Cable Trough'
      }
    ],
    phases: [
      {
        phase: 0,
        name: 'Phase 0: Dark Vessel Anchor-Dragging Incidents',
        timeline: 'Day 1–2',
        description: 'Two key subsea fiber optic cables connecting Finland-Germany (C-Lion1) and Sweden-Lithuania are severed within 18 hours. Telemetry locates a foreign-flagged bulk carrier moving with transponder disabled.',
        kentAssessment: 'Almost Certain (95%) feasibility using commercial deniable cover.',
        metrics: {
          crudeOilBbl: '$84',
          bblDelta: '+$2/bbl',
          containerFreightTEU: '$3,100',
          freightDelta: '+5%',
          semiconductorDisruption: '0%',
          gdpLossBillion: '$95B',
          sprDaysRemaining: 180
        },
        cascades: [
          'Data traffic reroutes automatically to terrestrial Nordic backbones; latency increases by 18-35ms.',
          'Stockholm and Helsinki stock exchange clearing systems report packet drops and execution delays.',
          'NATO invokes enhanced maritime reconnaissance in the Danish Straits and Gulf of Finland.'
        ]
      },
      {
        phase: 1,
        name: 'Phase 1: Transatlantic Trunk Severance & Power Interconnector Trip',
        timeline: 'Day 3–6',
        description: 'Targeted deep-water severance of TAT-14 / Dunant cables off the Irish Shelf, accompanied by sabotage of the Estlink power cable between Estonia and Finland.',
        kentAssessment: 'Even Chance (45%) of escalating to deep-ocean transatlantic assets.',
        metrics: {
          crudeOilBbl: '$89',
          bblDelta: '+$7/bbl',
          containerFreightTEU: '$3,400',
          freightDelta: '+12%',
          semiconductorDisruption: '8% indirect',
          gdpLossBillion: '$480B',
          sprDaysRemaining: 175
        },
        cascades: [
          'High-frequency algorithmic trading between London and New York encounters cross-border liquidity freezes.',
          'SWIFT interbank transaction batch processing slows down, creating $180B in settlement delays.',
          'Baltic states trigger emergency diesel power generation as Nordic power links drop by 1,000 MW.'
        ]
      },
      {
        phase: 2,
        name: 'Phase 2: Article 4 Consultations & Warship Escorts for Cable Ships',
        timeline: 'Day 7–18',
        description: 'Baltic nations call NATO Article 4 consultations. Commercial cable repair ships (Orange Marine, SubCom) refuse deployment without armed warship escort due to surface threats.',
        kentAssessment: 'Highly Likely (78%) NATO posture response to prevent further asymmetric infrastructure hits.',
        metrics: {
          crudeOilBbl: '$96',
          bblDelta: '+$14/bbl',
          containerFreightTEU: '$3,900',
          freightDelta: '+28%',
          semiconductorDisruption: '12% indirect',
          gdpLossBillion: '$890B',
          sprDaysRemaining: 160
        },
        cascades: [
          'NATO Standing Maritime Group 1 (SNMG1) begins continuous seabed escorts in the Baltic.',
          'European Union mandates cloud service providers to maintain in-country offline redundant cold backups.',
          'Danish navy institutes mandatory vessel inspection checks for dark fleet tankers navigating the Great Belt.'
        ]
      },
      {
        phase: 3,
        name: 'Phase 3: Resilient Satellite Mesh & Seabed Sensor Grids',
        timeline: 'Day 19+',
        description: 'Repairs completed under naval guard; permanent acoustic hydrophone and AUV seabed monitoring grid deployed across critical subsea infrastructure corridors.',
        kentAssessment: 'Almost Certain (90%) long-term fortification of European subsea network resilience.',
        metrics: {
          crudeOilBbl: '$86',
          bblDelta: '+$4/bbl',
          containerFreightTEU: '$3,300',
          freightDelta: '+10%',
          semiconductorDisruption: '2%',
          gdpLossBillion: '$350B',
          sprDaysRemaining: 180
        },
        cascades: [
          'Adoption of low-earth-orbit satellite constellation (Starlink / Iris2) military backup links across Europe.',
          'EU creates €15B Critical Undersea Infrastructure Resilience Fund for armored cable trenching.',
          'New international legal conventions classifying subsea cables as critical protected global commons.'
        ]
      }
    ],
    mitigationOptions: [
      'Pre-contracted standby naval escorts for specialized commercial undersea repair vessels.',
      'Deployment of autonomous seabed gliders equipped with side-scan sonar along pipeline routes.',
      'Mandatory multi-path satellite failover routing for all Tier-1 banking clearing houses.'
    ]
  },
  {
    id: 'SCENARIO_REDSEA_CLOSURE',
    code: 'WARGAME-RS-26',
    title: 'Bab el-Mandeb & Red Sea Maritime Interdiction',
    category: 'Maritime Security & SLOC Resilience',
    theater: 'Bab el-Mandeb Strait, Red Sea & Gulf of Aden',
    threatLevel: 'CRITICAL',
    baselineProbability: KENT_PROBABILITY_SCALE.ALMOST_CERTAIN,
    focusCoords: { lat: 12.6, lng: 43.3, zoomDist: 175 },
    summary: 'Houthi / Ansar Allah deployment of anti-ship ballistic missiles (ASBM), one-way attack aerial drones (UAVs), and explosive unmanned surface vessels (USVs) compels 85% of container traffic to bypass Suez and divert around Africa via the Cape of Good Hope.',
    strategicActors: [
      { code: 'YEM', role: 'Asymmetric Strike Force', posture: 'Anti-ship ballistic missiles (Asef, Tankil), Samad drones, Al-Qari’ah USVs, coastal radar' },
      { code: 'EGY', role: 'Transit Revenue Casualty', posture: 'Suez Canal transit tolls drop by $500M/month, domestic foreign exchange liquidity crisis' },
      { code: 'USA', role: 'Coalition Interdictor', posture: 'Operation Prosperity Guardian, carrier strike groups, Tomahawk strike missions on Houthi radar' },
      { code: 'IND', role: 'Regional Stabilizer', posture: 'Indian Navy deployment of 10+ destroyers/frigates for anti-piracy, merchant escort, and crew rescue' }
    ],
    reroutedRoutes: [
      {
        name: 'Cape of Good Hope Circumnavigation Route',
        fromCoords: [12.0, 44.0],
        toCoords: [-34.4, 18.5],
        addedDays: 14.0,
        bypassedChokepoint: 'Bab el-Mandeb & Suez Canal (+3,500 nautical miles)'
      },
      {
        name: 'Indian Ocean Southern Archipelagic Route',
        fromCoords: [6.0, 80.0],
        toCoords: [-20.0, 55.0],
        addedDays: 8.5,
        bypassedChokepoint: 'Gulf of Aden Western Corridor'
      }
    ],
    phases: [
      {
        phase: 0,
        name: 'Phase 0: Anti-Ship Ballistic Missile Saturation',
        timeline: 'Day 1–4',
        description: 'First kinetic strike on a 15,000 TEU container ship passing the narrow 16-nautical-mile Bab el-Mandeb channel. War risk insurance rates jump from 0.05% to 1.0% of vessel value.',
        kentAssessment: 'Almost Certain (95%) based on historical 2023-2024 precedent.',
        metrics: {
          crudeOilBbl: '$87',
          bblDelta: '+$5/bbl',
          containerFreightTEU: '$4,400',
          freightDelta: '+45%',
          semiconductorDisruption: '12% delay',
          gdpLossBillion: '$210B',
          sprDaysRemaining: 180
        },
        cascades: [
          'Major container lines (MSC, Maersk, Hapag-Lloyd, CMA CGM) announce immediate pause of Red Sea transits.',
          'Egypt reports an immediate 45% plunge in daily Suez Canal transit receipts.',
          'Spot bunker fuel prices in Port Louis (Mauritius) and Durban spike 60% due to sudden refueling demand.'
        ]
      },
      {
        phase: 1,
        name: 'Phase 1: Full Cape of Good Hope Diversion',
        timeline: 'Day 5–18',
        description: 'Over 85% of Asia-to-Europe liner traffic routes around southern Africa. Transit voyages increase by 10 to 14 days. Container slot shortages develop in Shanghai, Singapore, and Rotterdam.',
        kentAssessment: 'Almost Certain (92%) once commercial carriers commit schedule adjustments.',
        metrics: {
          crudeOilBbl: '$93',
          bblDelta: '+$11/bbl',
          containerFreightTEU: '$6,900',
          freightDelta: '+130%',
          semiconductorDisruption: '28% delay',
          gdpLossBillion: '$590B',
          sprDaysRemaining: 170
        },
        cascades: [
          'Global shipping carbon emissions rise by 25% for Asia-Europe trade lanes due to higher cruising speeds.',
          'European retail inventory lead times expand by 3 weeks; European vehicle manufacturers throttle shifts.',
          'Indian export goods face $30B cost friction; Indian Navy deploys INS Kolkata and INS Kochi to secure lanes.'
        ]
      },
      {
        phase: 2,
        name: 'Phase 2: Coalition Kinetic Suppression & Land Corridors',
        timeline: 'Day 19–45',
        description: 'Operation Prosperity Guardian carries out precision strikes on mobile missile launchers and radar in Hodeidah and Sanaa. Gulf-to-Mediterranean overland trucking land bridges (UAE-Saudi-Jordan-Haifa) reach peak capacity.',
        kentAssessment: 'Highly Likely (75%) operational response, but asymmetric launchers remain mobile and concealed.',
        metrics: {
          crudeOilBbl: '$99',
          bblDelta: '+$17/bbl',
          containerFreightTEU: '$8,200',
          freightDelta: '+175%',
          semiconductorDisruption: '35% delay',
          gdpLossBillion: '$1,020B',
          sprDaysRemaining: 155
        },
        cascades: [
          'Overland Middle East freight corridor provides relief for high-value perishable and pharma shipments.',
          'US Navy encounters heavy expenditure of $2M+ Standard Missile-2/6 rounds against $20,000 drones.',
          'Egypt seeks emergency $8B financial support from IMF and Gulf partners to offset Suez deficits.'
        ]
      },
      {
        phase: 3,
        name: 'Phase 3: Structural Realignment & Chokepoint Redundancy',
        timeline: 'Day 46+',
        description: 'Global supply chains re-architect around permanent 14-day safety buffers. Shipping contracts permanently incorporate flexible routing clauses.',
        kentAssessment: 'Almost Certain (90%) structural reality until comprehensive regional peace settlement.',
        metrics: {
          crudeOilBbl: '$90',
          bblDelta: '+$8/bbl',
          containerFreightTEU: '$5,800',
          freightDelta: '+90%',
          semiconductorDisruption: '15% delay',
          gdpLossBillion: '$780B',
          sprDaysRemaining: 175
        },
        cascades: [
          'South African and Namibian ports receive $4B in terminal expansion investments.',
          'Expansion of the IMEC (India-Middle East-Europe Economic Corridor) rail and port blueprint accelerated.',
          'Liner shipping capacity absorbs oversupply as longer route distances consume 8% of global fleet surplus.'
        ]
      }
    ],
    mitigationOptions: [
      'Escorted naval convoys with Aegis area air-defense frigates covering high-risk 120-mile corridor.',
      'Expansion of overland multimodal freight routes connecting Gulf ports to Mediterranean ports.',
      'Coordinated diplomatic engagement through regional mediators (Oman) for shipping non-targeting guarantees.'
    ]
  }
];

export function getScenarioById(id) {
  return WARGAME_SCENARIOS.find(s => s.id === id) || null;
}
