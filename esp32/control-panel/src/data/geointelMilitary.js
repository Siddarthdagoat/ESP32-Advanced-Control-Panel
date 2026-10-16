// GEOINTEL Contextual Military Systems & Defense Hardware Registry
// Specificity: what is it, who produces, who operates, operational range,
// strategic importance, bilateral linkages, and treaty/sanction implications.

export const MILITARY_SYSTEMS = {
  BRAHMOS: {
    id: 'BRAHMOS',
    name: 'BrahMos PJ-10 Supersonic Cruise Missile',
    category: 'Supersonic Cruise Missile',
    type: 'Anti-Ship & Land-Attack Stand-Off Missile',
    speed: 'Mach 2.8 – 3.0 (Supersonic Ramjet)',
    range: '290 km (original export limit) / 450–500+ km (extended post-MTCR upgrade)',
    producer: {
      name: 'BrahMos Aerospace Private Limited',
      composition: 'Joint Venture between DRDO (India, 50.5%) and NPO Mashinostroyeniya (Russia, 49.5%)',
      headquarters: 'New Delhi & Hyderabad, India / Reutov, Russia'
    },
    operators: [
      { country: 'India', flag: '🇮🇳', units: 'Indian Army (Regiments along LAC & Western border), Indian Navy (Rajput/Kolkata/Visakhapatnam destroyers), Indian Air Force (Sukhoi Su-30MKI modified squadrons)' },
      { country: 'Philippines', flag: '🇵🇭', units: 'Philippine Marine Corps Coastal Defense Regiment (3 shore-based batteries deployed in Western Luzon, 2024)' }
    ],
    whyImportant: 'Regarded as the fastest operational cruise missile in active military inventory. Its high kinetic energy impact, low radar cross-section, and sea-skimming altitude (10 meters) make modern naval point-defense systems (such as Phalanx CIWS or SeaRAM) almost incapable of successful interception before impact.',
    indiaConnection: 'The crown jewel of India’s conventional strike capability. Deployed in high-altitude Ladakh and Arunachal Pradesh for precision counter-force strikes against PLA radar stations, supply depots, and mountain passes.',
    russiaConnection: 'Based on the Russian P-800 Oniks (Yakhont) missile. Russia supplied the liquid ramjet engine and radar seeker, while India developed the fire control system, airframe materials, and mission software.',
    relatedIssues: [
      { name: 'MTCR Accession', desc: 'India’s 2016 membership in the Missile Technology Control Regime removed the 300 km range restriction on joint designs.' },
      { name: 'Defense Export Milestone', desc: 'The $375 Million Philippine procurement contract marked India’s first major high-technology military hardware export to an ASEAN partner.' }
    ],
    relatedConcepts: ['STRATEGIC_AUTONOMY', 'DEFENCE_COOPERATION', 'A2_AD', 'SLOC'],
    verification: {
      source: 'DRDO Technology Focus / BrahMos Aerospace Technical Dossier / SIPRI Arms Transfers Database',
      sourceType: 'Defense Agency Technical Specifications',
      publicationDate: '2024',
      lastVerified: '2026-02',
      confidence: 'High (Verified Operational Military Hardware)',
      claimType: 'VERIFIED'
    }
  },

  S400_TRIUMF: {
    id: 'S400_TRIUMF',
    name: 'S-400 Triumf (NATO: SA-21 Growler)',
    category: 'Long-Range Air & Missile Defense System',
    type: 'Mobile Surface-to-Air Missile (SAM) Umbrella',
    speed: 'Missile interception speeds up to Mach 14 (4,800 m/s)',
    range: '40 km (9M96E) to 400 km (40N6E ultra-long-range interceptor); altitude ceiling: 30 km',
    producer: {
      name: 'Almaz-Antey Joint Stock Company',
      composition: 'Russian State Defense Enterprise',
      headquarters: 'Moscow, Russian Federation'
    },
    operators: [
      { country: 'Russia', flag: '🇷🇺', units: 'Aerospace Forces (Over 25 regiments deployed across Moscow, Kaliningrad, and frontier sectors)' },
      { country: 'India', flag: '🇮🇳', units: 'Indian Air Force (Designated "Sudharshan"; 3 of 5 contracted regiments operational along northern/western air sectors)' },
      { country: 'China', flag: '🇨🇳', units: 'PLA Air Force (6 battalions stationed opposite Taiwan Strait and coastal regions)' },
      { country: 'Turkey', flag: '🇹🇷', units: 'Turkish Air Force (Acquired 2019; prompted expulsion from US F-35 program)' }
    ],
    whyImportant: 'Creates a near-impenetrable Anti-Access/Area Denial (A2/AD) bubble. Capable of tracking 300 targets simultaneously and engaging 36 airborne targets at once, neutralizing incoming 4th-generation fighters, early-warning AWACS aircraft, and tactical ballistic missiles.',
    indiaConnection: 'India signed a $5.43 Billion contract for 5 squadrons in October 2018 during the Modi-Putin summit in New Delhi. Despite heavy American diplomatic pressure, India insisted on delivery to balance simultaneous two-front aerial threats from Pakistan and China.',
    usConnection: 'Direct trigger of U.S. CAATSA (Countering America’s Adversaries Through Sanctions Act). While Washington levied sanctions on Turkey and China for buying the system, the U.S. Congress passed a modified waiver acknowledging India’s strategic necessity to deter China in the Indo-Pacific.',
    relatedIssues: [
      { name: 'CAATSA Sanctions Debate', desc: 'Demonstrates the delicate balance between US statutory sanctions and strategic partnership priorities with New Delhi.' },
      { name: 'F-35 Data Vulnerability', desc: 'Pentagon barred Turkey from the F-35 stealth fighter out of fear S-400 radar algorithms would harvest radar-reflectivity secrets of the F-35.' }
    ],
    relatedConcepts: ['CAATSA', 'A2_AD', 'DETERRENCE', 'SECONDARY_SANCTIONS', 'STRATEGIC_AUTONOMY'],
    verification: {
      source: 'IISS Military Balance / U.S. Congressional Research Service (CRS Report R45142) / SIPRI',
      sourceType: 'Congressional Research & Strategic Defense Assessment',
      publicationDate: '2024',
      lastVerified: '2026-01',
      confidence: 'High (Documented Intergovernmental Defense Sale)',
      claimType: 'VERIFIED'
    }
  },

  F35_LIGHTNING_II: {
    id: 'F35_LIGHTNING_II',
    name: 'F-35 Lightning II Joint Strike Fighter',
    category: '5th-Generation Multi-Role Stealth Fighter',
    type: 'Stealth Air-Superiority & Precision Attack Strike Aircraft',
    speed: 'Mach 1.6 (1,960 km/h) at altitude; internal fuel range: 2,200 km',
    range: 'Combat radius: 1,240 km on internal stealth fuel; sensor fusion processing capability',
    producer: {
      name: 'Lockheed Martin Aeronautics (with Northrop Grumman & BAE Systems)',
      composition: 'Multinational Nine-Partner Consortium led by the United States',
      headquarters: 'Fort Worth, Texas, USA'
    },
    operators: [
      { country: 'USA', flag: '🇺🇸', units: 'US Air Force (F-35A), US Marine Corps (F-35B STOVL), US Navy (F-35C Carrier)' },
      { country: 'Israel', flag: '🇮🇱', units: 'Israeli Air Force (F-35I "Adir" with custom Israeli electronic warfare and avionics)' },
      { country: 'Allies', flag: '🌐', units: 'UK, Japan, South Korea, Australia, Italy, Netherlands, Norway, Poland, Singapore, Finland' }
    ],
    whyImportant: 'The cornerstone of Western air superiority and tactical sensor fusion. Low-observable stealth coatings, distributed aperture infrared sensors, and active electronically scanned array (AESA) radar allow the F-35 to act as an airborne quarterback, directing artillery, drone swarms, and naval missiles while remaining undetected.',
    indiaConnection: 'India has not joined the F-35 program, focusing domestically on the indigenous AMCA (Advanced Medium Combat Aircraft) 5th-gen fighter project and operating French Rafales.',
    israelConnection: 'Israel became the first country outside the U.S. to use the F-35 in operational combat (2018), utilizing its stealth to strike Iranian proxy targets across Syria and Lebanon undetected by Syrian S-300 batteries.',
    relatedIssues: [
      { name: 'Qualitative Military Edge (QME)', desc: 'U.S. law mandates Israel retain advanced capabilities like the F-35 that surpass any neighboring Arab military.' },
      { name: 'First Island Chain Interoperability', desc: 'Forward-deployed in Japan (Misawa/Iwakuni) and South Korea to counter Chinese J-20 stealth aircraft.' }
    ],
    relatedConcepts: ['DETERRENCE', 'EXTENDED_DETERRENCE', 'A2_AD', 'FIRST_ISLAND_CHAIN'],
    verification: {
      source: 'Pentagon Operational Test and Evaluation (DOT&E) Annual Report / Lockheed Martin Data',
      sourceType: 'Military Testing & Defense Manufacturer Record',
      publicationDate: '2024',
      lastVerified: '2026-02',
      confidence: 'Verified (Primary Aerospace Program Data)',
      claimType: 'VERIFIED'
    }
  },

  IRON_DOME: {
    id: 'IRON_DOME',
    name: 'Iron Dome (Tamir Interceptor)',
    category: 'Mobile Point Air Defense & C-RAM System',
    type: 'Counter-Rocket, Artillery, and Mortar (C-RAM) & Cruise Missile Interception',
    speed: 'Supersonic Tamir interceptor equipped with proximity fuse warhead',
    range: 'Effective engagement from 4 km to 70 km; all-weather radar tracking',
    producer: {
      name: 'Rafael Advanced Defense Systems & Israel Aerospace Industries (IAI)',
      composition: 'Jointly funded and co-produced with RTX (Raytheon, USA)',
      headquarters: 'Haifa, Israel / Tucson, Arizona, USA'
    },
    operators: [
      { country: 'Israel', flag: '🇮🇱', units: 'Israel Defense Forces Air Defense Command (10+ batteries deployed nationwide)' },
      { country: 'USA', flag: '🇺🇸', units: 'US Army (2 batteries acquired for testing and cruise missile defense)' }
    ],
    whyImportant: 'Boasts an exceptional battle-tested interception rate exceeding 90% against incoming short-range unguided rockets and loitering drones. Its Battle Management & Control (BMC) unit calculates the rocket’s ballistic trajectory in milliseconds, only firing interceptors if the incoming projectile is calculated to hit populated areas or critical infrastructure, conserving costly Tamir missiles ($50,000 each).',
    israelConnection: 'The foundational lower tier of Israel’s multi-layered air defense shield (supported by David’s Sling for medium range, and Arrow-2/Arrow-3 for exo-atmospheric ballistic missiles).',
    relatedIssues: [
      { name: 'Interception Saturation', desc: 'Militias (Hamas, Hezbollah) attempt to overwhelm the system by launching massive salvos of hundreds of rockets within seconds to exhaust battery magazines.' },
      { name: 'U.S. Co-Funding', desc: 'The U.S. Congress has appropriated over $3 Billion in direct funding for Iron Dome batteries and Tamir interceptor replenishment.' }
    ],
    relatedConcepts: ['DETERRENCE', 'REGIONAL_SECURITY', 'PROXY_WAR'],
    verification: {
      source: 'Israel Missile Defense Organization (IMDO) / U.S. Congressional Research Service',
      sourceType: 'Government Defense Organization Assessment',
      publicationDate: '2024',
      lastVerified: '2026-01',
      confidence: 'High (Combat-Tested Interception Telemetry)',
      claimType: 'VERIFIED'
    }
  },

  DF21D_DF26: {
    id: 'DF21D_DF26',
    name: 'Dongfeng-21D / DF-26 ("Carrier Killer" / "Guam Killer")',
    category: 'Anti-Ship Ballistic Missile (ASBM)',
    type: 'Maneuverable Re-entry Vehicle (MaRV) Precision Strike Ballistic Missile',
    speed: 'Terminal re-entry velocity exceeds Mach 10; radar and optical seekers',
    range: 'DF-21D: 1,500–1,800 km / DF-26: 4,000–5,000 km (reaches Guam and Second Island Chain)',
    producer: {
      name: 'China Aerospace Science and Industry Corporation (CASIC)',
      composition: 'PLA Rocket Force (PLARF)',
      headquarters: 'Beijing, People’s Republic of China'
    },
    operators: [
      { country: 'China', flag: '🇨🇳', units: 'PLA Rocket Force mobile road-transporter erector launcher (TEL) brigades across eastern/southern theaters' }
    ],
    whyImportant: 'The cornerstone of China\'s Anti-Access/Area Denial (A2/AD) strategy. Ballistic trajectories plunge down onto moving aircraft carriers from space at hypersonic terminal speeds. Defending against a steep hypersonic re-entry angle pushes U.S. Aegis missile cruisers (SM-3/SM-6) to their extreme theoretical limits.',
    strategicImpact: 'Forces U.S. Navy aircraft carriers to operate far beyond the range of their unrefueled strike fighters (F/A-18 Super Hornet, F-35C), degrading carrier air wing sortie generation during a cross-strait crisis.',
    relatedConcepts: ['A2_AD', 'FIRST_ISLAND_CHAIN', 'DETERRENCE', 'STATUS_QUO'],
    verification: {
      source: 'U.S. Department of Defense China Military Power Report / CSIS Missile Defense Project',
      sourceType: 'Pentagon Defense Assessment',
      publicationDate: '2024',
      lastVerified: '2026-01',
      confidence: 'High (Observed Missile Tests & Satellite Imagery)',
      claimType: 'CURRENT'
    }
  },

  INS_ARIHANT: {
    id: 'INS_ARIHANT',
    name: 'INS Arihant (SSBN 73)',
    category: 'Nuclear-Powered Ballistic Missile Submarine',
    type: 'Sub-Surface Ballistic Nuclear (SSBN) Deterrence Submarine',
    displacement: '6,000 tonnes submerged; 83 MW pressurized light-water nuclear reactor',
    armament: '12x K-15 Sagarika SLBMs (range: 750 km) or 4x K-4 SLBMs (range: 3,500 km)',
    producer: {
      name: 'Ship Building Centre (SBC), Visakhapatnam, India',
      composition: 'Advanced Technology Vessel (ATV) Project with Russian naval design & reactor consultation',
      headquarters: 'Visakhapatnam & New Delhi, India'
    },
    operators: [
      { country: 'India', flag: '🇮🇳', units: 'Indian Navy Strategic Forces Command (Commissioned 2016; joined by sister submarine INS Arighaat in 2024)' }
    ],
    whyImportant: 'Completed India\'s operational Nuclear Triad. Ensures a secure, survivable Second-Strike capability that guarantees catastrophic retaliation even if New Delhi and all land-based Agni missile silos were targeted in a preemptive nuclear first strike. Vital for maintaining credibility under India\'s official "No First Use" (NFU) nuclear doctrine.',
    russiaConnection: 'Russian naval engineers provided technical consultancy on reactor miniaturization and hull metallurgy, drawing from Soviet Charlie-class and Akula-class submarine technologies.',
    relatedConcepts: ['NUCLEAR_TRIAD', 'DETERRENCE', 'STRATEGIC_AUTONOMY', 'BALANCE_OF_POWER'],
    verification: {
      source: 'Indian Navy Official Directorate / IISS Military Balance / SIPRI Yearbook',
      sourceType: 'Government Naval Records & Nuclear Monitor',
      publicationDate: '2024',
      lastVerified: '2026-02',
      confidence: 'Verified (Commissioned Naval Asset)',
      claimType: 'VERIFIED'
    }
  },

  SM6: {
    id: 'SM6',
    name: 'RIM-174 Standard ERAM (SM-6)',
    category: 'Multi-Mission Air, Missile & Surface Strike Interceptor',
    type: 'Extended Range Active Missile (ERAM)',
    speed: 'Mach 3.5+ (Hypersonic terminal phase)',
    range: '240–370 km operational envelope; dual air-defense & anti-ship terminal capability',
    producer: {
      name: 'Raytheon Technologies (RTX)',
      composition: 'Missiles & Defense Division',
      headquarters: 'Tucson, Arizona, USA'
    },
    operators: [
      { country: 'USA', flag: '🇺🇸', units: 'US Navy Aegis Cruisers and Destroyers (Arleigh Burke class), US Army Typhon Mid-Range batteries' },
      { country: 'Japan', flag: '🇯🇵', units: 'Japan Maritime Self-Defense Force Maya-class Aegis destroyers' },
      { country: 'Australia', flag: '🇦🇺', units: 'Royal Australian Navy Hobart-class destroyers' }
    ],
    whyImportant: 'The US Navy’s ultimate triple-threat missile: simultaneously intercepts anti-ship cruise missiles, ballistic missiles in their terminal phase, and strikes enemy surface warships over the horizon via active radar seeker borrowed from the AIM-120 AMRAAM.',
    indiaConnection: 'Monitored closely by Indian naval planners evaluating future long-range naval surface-to-air systems for Project 18 next-generation destroyers.',
    relatedConcepts: ['A2_AD', 'DETERRENCE', 'EXTENDED_DETERRENCE', 'BALLISTIC_MISSILE_DEFENSE'],
    verification: {
      source: 'US Navy Program Executive Office Integrated Warfare Systems / Raytheon Factsheet',
      sourceType: 'Official Defense Technical Documentation',
      publicationDate: '2024',
      lastVerified: '2026-02',
      confidence: 'Verified (Active Operational Munition)',
      claimType: 'VERIFIED'
    }
  },

  SHAHED_136: {
    id: 'SHAHED_136',
    name: 'Shahed-136 (Geran-2) Loitering Munition',
    category: 'One-Way Attack Drone / Kamikaze UAV',
    type: 'Long-Range Autonomous Loitering Strike Munition',
    speed: '185 km/h (Mado MD-550 piston engine)',
    range: '1,500–2,500 km range with 40–50 kg high-explosive fragmentation warhead',
    producer: {
      name: 'HESA (Iran) / Alabuga Special Economic Zone (Russia)',
      composition: 'Iranian State Defense Enterprise / Russian Licensed Mass-Fabrication Facility',
      headquarters: 'Isfahan, Iran / Tatarstan, Russian Federation'
    },
    operators: [
      { country: 'Iran', flag: '🇮🇷', units: 'IRGC Aerospace Force & Regional Proxy Axis (Houthis, Iraqi Militias)' },
      { country: 'Russia', flag: '🇷🇺', units: 'Russian Armed Forces (Designated Geran-2, deployed in daily waves across Ukrainian energy infrastructure)' },
      { country: 'Yemen (Houthis)', flag: '🇾🇪', units: 'Ansar Allah drone battalions targeting Red Sea shipping and Israeli ports' }
    ],
    whyImportant: 'The definitive symbol of asymmetric economic-cost imposition in modern warfare. At a manufacturing cost of only $20,000–$40,000, it forces defenders to fire $1M–$3M surface-to-air interceptors (Patriot, SM-2, Aster), bankrupting air defense magazines.',
    indiaConnection: 'Demonstrates the critical necessity of indigenous low-cost Counter-Unmanned Aerial Systems (C-UAS), directional jamming, and laser directed-energy weapons (DEWs) along the western and northern borders.',
    relatedConcepts: ['ASYMMETRIC_WARFARE', 'PROXY_WAR', 'ATTRITION_WARFARE', 'A2_AD'],
    verification: {
      source: 'Conflict Armament Research (CAR) Teardown Reports / US Defense Intelligence Agency',
      sourceType: 'Forensic Weapons Recovery & Technical Intelligence',
      publicationDate: '2024',
      lastVerified: '2026-02',
      confidence: 'Verified (Forensically Documented Hardware)',
      claimType: 'VERIFIED'
    }
  },

  ARROW_3: {
    id: 'ARROW_3',
    name: 'Arrow 3 Exo-Atmospheric Anti-Ballistic Missile System',
    category: 'Upper-Tier Ballistic Missile Defense Interceptor',
    type: 'Exo-Atmospheric Hit-to-Kill Interceptor',
    speed: 'Hypersonic (Exceeds Mach 9)',
    range: '2,400 km operational range; interception altitude exceeds 100 km (outer space)',
    producer: {
      name: 'Israel Aerospace Industries (IAI) & Boeing',
      composition: 'Joint US-Israeli Intergovernmental Defense Development',
      headquarters: 'Lod, Israel / Arlington, Virginia, USA'
    },
    operators: [
      { country: 'Israel', flag: '🇮🇱', units: 'IDF Air Defense Command (Achieved historic first combat exo-atmospheric interception in 2023)' },
      { country: 'Germany', flag: '🇩🇪', units: 'Bundeswehr (Purchased for $3.5B in 2023 as anchor of European Sky Shield Initiative)' }
    ],
    whyImportant: 'Destroys incoming ballistic missiles in space prior to atmospheric re-entry. Prevents weapons of mass destruction (nuclear, chemical, biological) from detonating or dispersing fallout over national territory.',
    israelConnection: 'The uppermost protective layer of Israel’s multi-tier defense architecture, sitting above David’s Sling and Iron Dome.',
    relatedConcepts: ['DETERRENCE', 'BALLISTIC_MISSILE_DEFENSE', 'STRATEGIC_STABILITY'],
    verification: {
      source: 'Israel Missile Defense Organization (IMDO) / German Federal Ministry of Defence',
      sourceType: 'Government Defense Agency Communique',
      publicationDate: '2024',
      lastVerified: '2026-01',
      confidence: 'High (Documented Space Interceptions)',
      claimType: 'VERIFIED'
    }
  },

  THAAD: {
    id: 'THAAD',
    name: 'Terminal High Altitude Area Defense (THAAD)',
    category: 'Theater Ballistic Missile Defense System',
    type: 'Hit-to-Kill High-Altitude Interceptor',
    speed: 'Mach 8.2 (2,800 m/s)',
    range: '200 km range; 150 km interception altitude ceiling',
    producer: {
      name: 'Lockheed Martin Space Systems',
      composition: 'US Prime Defense Contractor with Raytheon AN/TPY-2 Radar',
      headquarters: 'Sunnyvale, California, USA'
    },
    operators: [
      { country: 'USA', flag: '🇺🇸', units: 'US Army (7 batteries deployed across Guam, South Korea, Israel, and Saudi Arabia)' },
      { country: 'UAE', flag: '🇦🇪', units: 'UAE Air Force & Air Defence (Intercepted Houthi ballistic missiles targeting Abu Dhabi in 2022)' },
      { country: 'Saudi Arabia', flag: '🇸🇦', units: 'Royal Saudi Air Defense Forces ($15B procurement under active deployment)' }
    ],
    whyImportant: 'Carries no explosive warhead, relying exclusively on pure kinetic energy ("hit-to-kill") to pulverize incoming intermediate and short-range ballistic missiles in their terminal descent phase. AN/TPY-2 radar can detect launches over 1,000 km away.',
    relatedConcepts: ['BALLISTIC_MISSILE_DEFENSE', 'EXTENDED_DETERRENCE', 'EARLY_WARNING'],
    verification: {
      source: 'Missile Defense Agency (MDA) / Congressional Research Service',
      sourceType: 'US Government Official Program Evaluation',
      publicationDate: '2024',
      lastVerified: '2026-01',
      confidence: 'Verified (Combat-Validated Performance)',
      claimType: 'VERIFIED'
    }
  },

  PATRIOT: {
    id: 'PATRIOT',
    name: 'MIM-104 Patriot (PAC-2 / PAC-3 MSE)',
    category: 'Surface-to-Air Missile & Missile Defense System',
    type: 'Mobile Theater Air & Cruise/Ballistic Missile Defense',
    speed: 'Mach 5.0 (PAC-3 MSE hit-to-kill interceptor)',
    range: '70 km (PAC-3 MSE anti-ballistic) to 160 km (PAC-2 anti-air)',
    producer: {
      name: 'Raytheon Technologies (Radar & System) / Lockheed Martin (PAC-3 Missiles)',
      composition: 'Prime US Aerospace Consortium',
      headquarters: 'Tewksbury, Massachusetts / Grand Prairie, Texas, USA'
    },
    operators: [
      { country: 'USA', flag: '🇺🇸', units: 'US Army Air Defense Artillery (Over 60 operational batteries worldwide)' },
      { country: 'Ukraine', flag: '🇺🇦', units: 'Ukrainian Air Force (Intercepted Russian Kinzhal air-launched ballistic missiles over Kyiv)' },
      { country: 'Allies', flag: '🌐', units: 'Germany, Poland, Japan, Taiwan, Saudi Arabia, UAE, Israel, Netherlands, Sweden, Romania' }
    ],
    whyImportant: 'The gold standard of Western land-based air and missile defense. Combat-validated in Ukraine by intercepting supposedly unstoppable Russian Kh-47M2 Kinzhal hypersonic aero-ballistic missiles.',
    relatedConcepts: ['DETERRENCE', 'BALLISTIC_MISSILE_DEFENSE', 'AIR_SUPERIORITY'],
    verification: {
      source: 'US Army PEO Missiles and Space / German Ministry of Defence',
      sourceType: 'Official Military Procurement Record',
      publicationDate: '2024',
      lastVerified: '2026-02',
      confidence: 'Verified (Combat-Validated in High-Intensity War)',
      claimType: 'VERIFIED'
    }
  },

  SU57: {
    id: 'SU57',
    name: 'Sukhoi Su-57 (NATO: Felon)',
    category: '5th-Generation Multi-Role Stealth Fighter',
    type: 'Stealth Air-Dominance & Deep Strike Combat Aircraft',
    speed: 'Mach 2.0 (Supercruise capability)',
    range: 'Combat radius: 1,500 km subsonic / 3,500 km ferry range',
    producer: {
      name: 'United Aircraft Corporation (Sukhoi)',
      composition: 'Russian State Aerospace Holding Rostec',
      headquarters: 'Moscow, Russian Federation'
    },
    operators: [
      { country: 'Russia', flag: '🇷🇺', units: 'Russian Aerospace Forces (VKS) 23rd Fighter Aviation Regiment at Dzyomgi' }
    ],
    whyImportant: 'Russia’s premier 5th-generation stealth combat aircraft featuring internal weapon bays carrying R-77M and Kh-59MK2 stand-off missiles. Employs 3D thrust-vectoring for supermaneuverability.',
    indiaConnection: 'India was an initial partner in the joint FGFA (Fifth Generation Fighter Aircraft) program with Russia, withdrawing in 2018 over work-share, engine maturity, and stealth coating concerns.',
    relatedConcepts: ['AIR_SUPERIORITY', 'STEALTH_AVIONICS', 'DETERRENCE'],
    verification: {
      source: 'IISS Military Balance / Jane’s Defence Weekly',
      sourceType: 'Independent Defense Assessment',
      publicationDate: '2024',
      lastVerified: '2026-01',
      confidence: 'Verified (Operational Military Inventory)',
      claimType: 'VERIFIED'
    }
  },

  F16: {
    id: 'F16',
    name: 'F-16 Fighting Falcon (Block 70/72 Viper)',
    category: '4th-Generation Multi-Role Combat Fighter',
    type: 'All-Weather Precision Strike & Air-Superiority Fighter',
    speed: 'Mach 2.05 (2,175 km/h)',
    range: 'Combat radius: 550 km on internal fuel; 4,200 km ferry range with drop tanks',
    producer: {
      name: 'Lockheed Martin Aeronautics',
      composition: 'US Prime Aerospace Manufacturer',
      headquarters: 'Greenville, South Carolina, USA'
    },
    operators: [
      { country: 'USA', flag: '🇺🇸', units: 'US Air Force & National Guard' },
      { country: 'Pakistan', flag: '🇵🇰', units: 'Pakistan Air Force (No. 9, 11, and 19 Squadrons, involved in 2019 aerial engagement)' },
      { country: 'Ukraine', flag: '🇺🇦', units: 'Ukrainian Air Force (Supplied by Netherlands, Denmark, Norway, Belgium in 2024)' },
      { country: 'Taiwan', flag: '🇹🇼', units: 'Republic of China Air Force (66 new Block 70 fighters on order to counter PLA air incursions)' }
    ],
    whyImportant: 'The most widely operated multirole fighter in the world with over 4,600 units built. Features AN/APG-83 SABR active electronically scanned array (AESA) radar and Link-16 tactical data exchange.',
    indiaConnection: 'Central protagonist in the 2019 post-Balakot aerial engagement along the Line of Control. Lockheed Martin offered a customized variant (F-21) for the Indian Air Force MRFA fighter tender.',
    relatedConcepts: ['AIR_SUPERIORITY', 'DETERRENCE', 'BALANCE_OF_POWER'],
    verification: {
      source: 'US Air Force Fact Sheet / Lockheed Martin Program Overview',
      sourceType: 'Manufacturer & Service Branch Official Technical Release',
      publicationDate: '2024',
      lastVerified: '2026-01',
      confidence: 'Verified',
      claimType: 'VERIFIED'
    }
  },

  ISKANDER: {
    id: 'ISKANDER',
    name: '9K720 Iskander-M (NATO: SS-26 Stone)',
    category: 'Road-Mobile Short-Range Ballistic Missile (SRBM)',
    type: 'Quasi-Ballistic Stand-Off Precision Strike System',
    speed: 'Terminal velocity exceeds Mach 6–7',
    range: '400–500 km range (MTCR-compliant threshold); 700 kg warhead options',
    producer: {
      name: 'KBM Machine-Building Design Bureau',
      composition: 'High Precision Systems (Rostec)',
      headquarters: 'Kolomna, Russian Federation'
    },
    operators: [
      { country: 'Russia', flag: '🇷🇺', units: 'Russian Ground Forces Missile Brigades across Western, Southern, and Kaliningrad military districts' },
      { country: 'Belarus', flag: '🇧🇾', units: 'Belarusian Armed Forces (Deployed in 2023 alongside shared tactical nuclear storage)' },
      { country: 'Armenia', flag: '🇦🇲', units: 'Armenian Armed Forces (Acquired Iskander-E export variant)' }
    ],
    whyImportant: 'Fires quasi-ballistic missiles that follow unpredictable, evasive flight paths and release terminal electronic decoys (spoofer penetrators), rendering standard missile defense interception extraordinarily difficult.',
    relatedConcepts: ['A2_AD', 'DETERRENCE', 'BALLISTIC_MISSILE_DEFENSE'],
    verification: {
      source: 'Center for Strategic and International Studies (CSIS) Missile Threat / Russian MoD',
      sourceType: 'Strategic Defense Threat Matrix',
      publicationDate: '2024',
      lastVerified: '2026-02',
      confidence: 'Verified (Heavily Documented Combat Deployment)',
      claimType: 'VERIFIED'
    }
  },

  LEOPARD_2: {
    id: 'LEOPARD_2',
    name: 'Leopard 2 (A6 / A7 / A8 Standard)',
    category: 'Main Battle Tank (MBT)',
    type: 'Heavy Armored Breakthrough & Anti-Armor Combat Platform',
    speed: '68 km/h road speed / 31 km/h reverse speed',
    range: '450 km operational range; 1,500 hp MTU multi-fuel diesel engine',
    producer: {
      name: 'Krauss-Maffei Wegmann (KNDS) & Rheinmetall',
      composition: 'German Defense Industrial Consortium',
      headquarters: 'Munich & Düsseldorf, Germany'
    },
    operators: [
      { country: 'Germany', flag: '🇩🇪', units: 'Bundeswehr Panzertruppen' },
      { country: 'Ukraine', flag: '🇺🇦', units: 'Ukrainian Armored Brigades (Supplied by European coalition 2023–2024)' },
      { country: 'NATO Coalition', flag: '🌐', units: 'Poland, Sweden (Strv 122), Finland, Spain, Greece, Turkey, Canada, Norway' }
    ],
    whyImportant: 'The cornerstone of European land defense. Equipped with the legendary Rheinmetall 120mm L/55 smoothbore gun, hunter-killer panoramic sights, and composite Chobham-type modular armor.',
    relatedConcepts: ['LAND_WARFARE', 'ARMORED_WARFARE', 'COLLECTIVE_SECURITY'],
    verification: {
      source: 'German Federal Ministry of Defence / KNDS Official Catalog',
      sourceType: 'Primary Defense Manufacturer Specifications',
      publicationDate: '2024',
      lastVerified: '2026-01',
      confidence: 'Verified',
      claimType: 'VERIFIED'
    }
  },

  J20: {
    id: 'J20',
    name: 'Chengdu J-20 "Mighty Dragon"',
    category: '5th-Generation Heavy Stealth Air-Superiority Fighter',
    type: 'Low-Observable Long-Range Penetrating Air Combat Aircraft',
    speed: 'Mach 2.0+; powered by indigenous WS-10C / WS-15 turbofan engines',
    range: 'Combat radius: 2,000 km; armed with PL-15 beyond-visual-range radar-guided missiles',
    producer: {
      name: 'Chengdu Aircraft Industry Group (CAIG)',
      composition: 'Aviation Industry Corporation of China (AVIC)',
      headquarters: 'Chengdu, Sichuan, People’s Republic of China'
    },
    operators: [
      { country: 'China', flag: '🇨🇳', units: 'PLA Air Force (Over 200 operational airframes assigned across Eastern and Southern theater commands)' }
    ],
    whyImportant: 'China’s answer to the American F-22 and F-35. Designed specifically to penetrate dense radar networks and assassinate high-value airborne assets like AWACS early-warning planes and aerial refueling tankers in the Western Pacific.',
    indiaConnection: 'Forward deployed by the PLAAF at high-altitude Tibetan airfields (Hotan, Shigatse) opposite Ladakh and Arunachal Pradesh, driving India’s deployment of S-400 batteries and Rafale fighters.',
    relatedConcepts: ['A2_AD', 'AIR_SUPERIORITY', 'FIRST_ISLAND_CHAIN'],
    verification: {
      source: 'Pentagon China Military Power Report / IISS Military Balance',
      sourceType: 'US DoD Strategic Assessment',
      publicationDate: '2024',
      lastVerified: '2026-02',
      confidence: 'High (Documented Flight Telemetry)',
      claimType: 'VERIFIED'
    }
  },

  TYPE_055: {
    id: 'TYPE_055',
    name: 'Type 055 Renhai-Class Guided-Missile Destroyer',
    category: 'Large Guided-Missile Cruiser / Super-Destroyer',
    type: 'Air-Defense & Maritime Strike Capital Surface Combatant',
    displacement: '13,000 tonnes full load (Largest surface combatant built in Asia since WWII)',
    armament: '112 Universal Vertical Launch System (VLS) cells firing YJ-21 hypersonic anti-ship missiles and HQ-9 SAMs',
    producer: {
      name: 'Jiangnan Shipyard (Shanghai) & Dalian Shipbuilding Industry',
      composition: 'China State Shipbuilding Corporation (CSSC)',
      headquarters: 'Shanghai & Dalian, People’s Republic of China'
    },
    operators: [
      { country: 'China', flag: '🇨🇳', units: 'PLA Navy Surface Fleets (Nanchang, Lhasa, Anshan, Dalian, Wuxi, Yan’an, Zunyi, Xianyang)' }
    ],
    whyImportant: 'The apex surface combatant of China’s blue-water navy. Acts as the primary air-defense shield and command flagship for Chinese aircraft carrier strike groups, fielding dual-band phased-array radar and ship-launched hypersonic missiles (YJ-21).',
    indiaConnection: 'Monitored with acute vigilance by the Indian Navy when PLAN task groups stage out into the Indian Ocean via Malacca and Sunda straits.',
    relatedConcepts: ['BLUE_WATER_NAVY', 'A2_AD', 'FIRST_ISLAND_CHAIN'],
    verification: {
      source: 'US Office of Naval Intelligence (ONI) China Naval Modernization / CSIS China Power',
      sourceType: 'Naval Intelligence Assessment',
      publicationDate: '2024',
      lastVerified: '2026-02',
      confidence: 'Verified (Commissioned Warship Data)',
      claimType: 'VERIFIED'
    }
  },

  P8I: {
    id: 'P8I',
    name: 'Boeing P-8I Neptune (P-8A Poseidon)',
    category: 'Long-Range Maritime Patrol & Anti-Submarine Warfare (ASW) Aircraft',
    type: 'Submarine Hunter & Maritime Domain Awareness Platform',
    speed: '789 km/h cruising speed; operational ceiling 41,000 feet',
    range: 'Combat radius: 2,222 km with 4+ hours on station; auxiliary fuel tanks',
    producer: {
      name: 'Boeing Defense, Space & Security',
      composition: 'US Prime Aerospace Manufacturer with Indian Offset Components',
      headquarters: 'Seattle, Washington & Arlington, Virginia, USA'
    },
    operators: [
      { country: 'India', flag: '🇮🇳', units: 'Indian Navy Air Arm (12 operational P-8I aircraft based at INS Rajali, Arakkonam and INS Hansa, Goa)' },
      { country: 'USA', flag: '🇺🇸', units: 'US Navy Maritime Patrol Squadrons (VP)' },
      { country: 'Allies', flag: '🌐', units: 'Royal Australian Air Force, Royal Air Force (UK), Royal Norwegian Air Force, South Korea, Germany' }
    ],
    whyImportant: 'Equipped with the Telephonics APS-143 OceanEye radar, CAE magnetic anomaly detector (MAD), sonobuoy launchers, and armed with Harpoon anti-ship missiles and Mk-54 lightweight torpedoes. Capable of locating and destroying submerged submarines across thousands of square miles of ocean.',
    indiaConnection: 'The eyes and ears of the Indian Navy across the Indian Ocean basin. India was the first international customer for the platform, utilizing it for tracking Chinese nuclear submarines entering the Bay of Bengal.',
    relatedConcepts: ['ASW', 'MARITIME_DOMAIN_AWARENESS', 'QUAD', 'CHOKEPOINT'],
    verification: {
      source: 'Indian Navy Directorate of Naval Aviation / Boeing Program Dossier',
      sourceType: 'Official Military Aviation Inventory Record',
      publicationDate: '2024',
      lastVerified: '2026-02',
      confidence: 'Verified',
      claimType: 'VERIFIED'
    }
  },

  AKASH: {
    id: 'AKASH',
    name: 'Akash Air Defence Missile System (Akash Prime / Akash-NG)',
    category: 'Medium-Range Surface-to-Air Missile (SAM) Defense Shield',
    type: 'All-Weather Mobile Air Defense Interceptor',
    speed: 'Mach 2.5–3.5 (Ramjet propulsion system)',
    range: '25–30 km (Akash-1S) / 70+ km (Akash Next Generation); engagement ceiling: 18 km',
    producer: {
      name: 'Defence Research and Development Organisation (DRDO)',
      composition: 'Bharat Dynamics Limited (BDL) & Bharat Electronics Limited (BEL)',
      headquarters: 'Hyderabad & Bengaluru, India'
    },
    operators: [
      { country: 'India', flag: '🇮🇳', units: 'Indian Army (High-altitude LAC regiments) & Indian Air Force (Airbase defense squadrons)' },
      { country: 'Armenia', flag: '🇦🇲', units: 'Armed Forces of Armenia ($250M landmark export contract procured in 2022)' }
    ],
    whyImportant: 'India’s flagship indigenous mobile air defense system. Can simultaneously engage multiple aerial targets (drones, fighters, cruise missiles) using the 3D multi-target Rajendra radar. Operates reliably in extreme high-altitude conditions (15,000+ ft in Ladakh).',
    indiaConnection: 'A premier triumph of "Make in India" defense self-reliance (Atmanirbhar Bharat), with an indigenization level exceeding 96%.',
    relatedConcepts: ['DEFENCE_COOPERATION', 'STRATEGIC_AUTONOMY', 'AIR_SUPERIORITY'],
    verification: {
      source: 'DRDO Technology Focus / BDL Annual Disclosures',
      sourceType: 'Government Defense Agency Record',
      publicationDate: '2024',
      lastVerified: '2026-02',
      confidence: 'Verified',
      claimType: 'VERIFIED'
    }
  },

  KALIBR: {
    id: 'KALIBR',
    name: '3M-54 Kalibr (NATO: SS-N-27 Sizzler / SS-N-30A)',
    category: 'Ship & Submarine-Launched Land-Attack Cruise Missile (LACM)',
    type: 'Precision Stand-Off Land Attack & Supersonic Terminal Anti-Ship Missile',
    speed: 'Subsonic cruise (Mach 0.8); supersonic terminal dash (Mach 3.0 on anti-ship variant)',
    range: '1,500–2,500 km land-attack range; 450 kg conventional or nuclear warhead',
    producer: {
      name: 'Novator Design Bureau',
      composition: 'Almaz-Antey Joint Stock Company',
      headquarters: 'Yekaterinburg, Russian Federation'
    },
    operators: [
      { country: 'Russia', flag: '🇷🇺', units: 'Russian Navy (Black Sea, Caspian Flotilla, Northern Fleet surface frigates and Kilo-class attack submarines)' }
    ],
    whyImportant: 'The Russian equivalent of the American Tomahawk missile. Allows small corvettes and diesel-electric submarines in enclosed seas (Black Sea, Caspian) to strike targets deep inside entire continental landmasses with high precision.',
    relatedConcepts: ['STAND_OFF_STRIKE', 'A2_AD', 'NAVAL_WARFARE'],
    verification: {
      source: 'CSIS Missile Defense Project / Russian Ministry of Defence',
      sourceType: 'Defense Research Evaluation',
      publicationDate: '2024',
      lastVerified: '2026-02',
      confidence: 'Verified (Heavily Expended in Combat)',
      claimType: 'VERIFIED'
    }
  },

  HARPOON: {
    id: 'HARPOON',
    name: 'AGM/RGM/UGM-84 Harpoon',
    category: 'All-Weather Over-the-Horizon Anti-Ship Missile',
    type: 'Subsonic Sea-Skimming Anti-Ship Cruise Missile',
    speed: 'Mach 0.71 (864 km/h)',
    range: '124–280 km operational range (Block II+)',
    producer: {
      name: 'Boeing Defense, Space & Security',
      composition: 'US Prime Defense Manufacturer',
      headquarters: 'St. Louis, Missouri, USA'
    },
    operators: [
      { country: 'USA', flag: '🇺🇸', units: 'US Navy cruisers, destroyers, submarines, and strike aircraft' },
      { country: 'India', flag: '🇮🇳', units: 'Indian Air Force (Jaguar strike fighters) & Indian Navy (Shishumar submarines and P-8I aircraft)' },
      { country: 'Taiwan', flag: '🇹🇼', units: 'Republic of China Navy (100 coastal defense launchers and 400 missiles acquired for asymmetric deterrence)' }
    ],
    whyImportant: 'The most ubiquitous Western anti-ship missile in history. Skims just meters above the wave tops using active radar homing and pop-up maneuver options to defeat shipboard anti-missile Gatling guns.',
    indiaConnection: 'Standard anti-ship stand-off weapon equipped on Indian Air Force maritime strike Jaguar fighter squadrons and Indian Navy Boeing P-8I aircraft.',
    relatedConcepts: ['A2_AD', 'NAVAL_WARFARE', 'CHOKEPOINT'],
    verification: {
      source: 'US Navy Program Executive Office Strike Weapons / Boeing Data',
      sourceType: 'Defense Industrial Specification',
      publicationDate: '2024',
      lastVerified: '2026-01',
      confidence: 'Verified',
      claimType: 'VERIFIED'
    }
  },

  VIRGINIA_CLASS: {
    id: 'VIRGINIA_CLASS',
    name: 'Virginia-Class Nuclear Fast Attack Submarine (SSN 774)',
    category: 'Nuclear-Powered Fast Attack Submarine (SSN)',
    type: 'Sub-Surface Multi-Mission Hunter-Killer & Cruise Missile Strike Platform',
    displacement: '7,800 tonnes submerged (Block I–IV) / 10,200 tonnes (Block V with VPM)',
    armament: '12 to 40 Tomahawk cruise missiles, Mk 48 ADCAP torpedoes, UUV drone deployment bays',
    producer: {
      name: 'General Dynamics Electric Boat & Newport News Shipbuilding',
      composition: 'US Nuclear Submarine Industrial Complex',
      headquarters: 'Groton, Connecticut & Newport News, Virginia, USA'
    },
    operators: [
      { country: 'USA', flag: '🇺🇸', units: 'US Navy Submarine Forces (22+ active in Pacific and Atlantic fleets)' },
      { country: 'Australia', flag: '🇦🇺', units: 'Royal Australian Navy (Purchasing 3–5 Virginia-class SSNs under AUKUS Pillar 1 in the 2030s)' }
    ],
    whyImportant: 'The backbone of American undersea dominance. Stealth acoustic quieting and S9G nuclear reactor (requiring no refueling over a 33-year service life) allow it to operate undetected inside heavily fortified enemy littorals (such as the Taiwan Strait or South China Sea).',
    relatedConcepts: ['AUKUS', 'UNDERSEA_CABLES', 'FIRST_ISLAND_CHAIN', 'DETERRENCE'],
    verification: {
      source: 'Naval Sea Systems Command (NAVSEA) / Congressional Research Service',
      sourceType: 'Congressional Defense Review',
      publicationDate: '2024',
      lastVerified: '2026-02',
      confidence: 'Verified',
      claimType: 'VERIFIED'
    }
  },

  ASTUTE_CLASS: {
    id: 'ASTUTE_CLASS',
    name: 'Astute-Class Nuclear Fleet Submarine (SSN)',
    category: 'Nuclear-Powered Fleet Attack Submarine',
    type: 'Sub-Surface Acoustic Hunter-Killer & Intelligence Gathering Asset',
    displacement: '7,400 tonnes submerged',
    armament: 'Spearfish wire-guided heavyweight torpedoes & Tomahawk Block V cruise missiles',
    producer: {
      name: 'BAE Systems Submarines (with Rolls-Royce Nuclear)',
      composition: 'British Sovereign Defense Shipbuilding Complex',
      headquarters: 'Barrow-in-Furness & Derby, United Kingdom'
    },
    operators: [
      { country: 'United Kingdom', flag: '🇬🇧', units: 'Royal Navy Submarine Service (HMS Astute, Ambush, Artful, Audacious, Anson, Agamemnon)' }
    ],
    whyImportant: 'Represents the pinnacle of British naval engineering. Features world-leading Sonar 2076 hydrophone array and world-record acoustic quieting; forms the foundational design lineage for the future SSN-AUKUS submarine.',
    relatedConcepts: ['AUKUS', 'NATO', 'UNDERSEA_WARFARE'],
    verification: {
      source: 'UK Ministry of Defence / Royal Navy Official Directory',
      sourceType: 'Government Naval Specification',
      publicationDate: '2024',
      lastVerified: '2026-01',
      confidence: 'Verified',
      claimType: 'VERIFIED'
    }
  },

  SPIKE: {
    id: 'SPIKE',
    name: 'Spike Precision Guided Missile Family (Spike NLOS / LR II)',
    category: 'Anti-Tank & Stand-Off Precision Guided Missile',
    type: 'Electro-Optical & Infrared Fire-and-Forget / Man-in-the-Loop Guided Weapon',
    speed: 'Subsonic with fiber-optic two-way data link',
    range: '5.5 km (Spike LR II) to 32 km (Spike NLOS 6th Gen)',
    producer: {
      name: 'Rafael Advanced Defense Systems',
      composition: 'Israeli State Defense Manufacturer',
      headquarters: 'Haifa, Israel'
    },
    operators: [
      { country: 'Israel', flag: '🇮🇱', units: 'Israel Defense Forces Ground Forces and Air Force (Apache helicopter integration)' },
      { country: 'India', flag: '🇮🇳', units: 'Indian Army (Infantry regiments deployed along Northern LAC frontier) & Indian Air Force (Mi-17 helicopters)' },
      { country: 'Allies', flag: '🌐', units: 'Operated by 39 nations worldwide across NATO and Asia' }
    ],
    whyImportant: 'Allows operators to shoot around terrain corners and obstacles without having line of sight to the target. The gunner watches live thermal video transmitted from the missile tip and can switch targets mid-flight or abort if civilians enter the blast radius.',
    indiaConnection: 'Procured by the Indian Army under emergency financial powers following the 2020 Galwan Valley clashes, deployed to eliminate hostile armored tanks and reinforced concrete bunkers.',
    relatedConcepts: ['PRECISION_STRIKE', 'ASYMMETRIC_WARFARE', 'LAC'],
    verification: {
      source: 'Rafael Advanced Defense Systems Official Technical Catalog / Jane’s',
      sourceType: 'Manufacturer Technical Data',
      publicationDate: '2024',
      lastVerified: '2026-01',
      confidence: 'Verified',
      claimType: 'VERIFIED'
    }
  },

  TYPE_12_SSM: {
    id: 'TYPE_12_SSM',
    name: 'Type 12 Surface-to-Ship Missile (Extended-Range Upgrade)',
    category: 'Truck-Mounted Anti-Ship & Stand-Off Strike Missile',
    type: 'Coastal Defense & Stand-Off Counterstrike Cruise Missile',
    speed: 'High subsonic; low-radar cross-section stealth airframe',
    range: 'Original: 200 km / Upgraded Stand-Off Variant: 1,000–1,200 km',
    producer: {
      name: 'Mitsubishi Heavy Industries (MHI)',
      composition: 'Japan Defense Industrial Base',
      headquarters: 'Tokyo, Japan'
    },
    operators: [
      { country: 'Japan', flag: '🇯🇵', units: 'Japan Ground Self-Defense Force (JGSDF) Coastal Defense Artillery Units (deployed across the Nansei / Ryukyu Islands)' }
    ],
    whyImportant: 'The cornerstone of Japan’s historic shift from purely passive self-defense to possessing sovereign "counterstrike capability." Stations stand-off missile batteries along the First Island Chain (Miyako, Ishigaki, Yonaguni) capable of targeting Chinese naval bases and warships across the East China Sea.',
    relatedConcepts: ['FIRST_ISLAND_CHAIN', 'A2_AD', 'STATUS_QUO'],
    verification: {
      source: 'Japan Ministry of Defense Defense White Paper / Defense Acquisition Agency (ATLA)',
      sourceType: 'Official Government Defense White Paper',
      publicationDate: '2024',
      lastVerified: '2026-02',
      confidence: 'Verified',
      claimType: 'VERIFIED'
    }
  },

  TYPHON_MISSILE: {
    id: 'TYPHON_MISSILE',
    name: 'Typhon Mid-Range Capability (MRC) Weapon System',
    category: 'Mobile Ground-Based Intermediate Strike Missile Launcher',
    type: 'Containerized Road-Mobile Stand-Off Precision Strike Battery',
    speed: 'Fires supersonic SM-6 and subsonic Tomahawk cruise missiles',
    range: '500 km (SM-6 surface strike mode) to 1,600+ km (Tomahawk Block V)',
    producer: {
      name: 'Lockheed Martin Missiles and Fire Control',
      composition: 'US Army Multi-Domain Task Force (MDTF)',
      headquarters: 'Orlando, Florida, USA'
    },
    operators: [
      { country: 'USA', flag: '🇺🇸', units: '1st Multi-Domain Task Force, US Army (Forward deployed to Northern Luzon, Philippines in 2024)' }
    ],
    whyImportant: 'The first operational land-based intermediate-range missile system deployed by the United States following the collapse of the 1987 INF (Intermediate-Range Nuclear Forces) Treaty. Placed in Northern Luzon, its range covers the entire Taiwan Strait and South China Sea.',
    relatedConcepts: ['A2_AD', 'FIRST_ISLAND_CHAIN', 'DETERRENCE', 'ARMS_CONTROL'],
    verification: {
      source: 'US Army Rapid Capabilities and Critical Technologies Office (RCCTO) / US Indo-Pacific Command',
      sourceType: 'Military Command Operational Deployment Notice',
      publicationDate: '2024',
      lastVerified: '2026-02',
      confidence: 'Verified (Observed Bilateral Exercise Deployment)',
      claimType: 'CURRENT'
    }
  },

  RAFALE: {
    id: 'RAFALE',
    name: 'Dassault Rafale (F3R / F4 Standard)',
    category: '4.5-Generation Omnirole Combat Fighter',
    type: 'All-Mission Air Dominance, Reconnaissance & Nuclear Stand-Off Platform',
    speed: 'Mach 1.8 (1,912 km/h); supercruise at Mach 1.4',
    range: 'Combat radius: 1,850 km; external weapons load capacity: 9,500 kg across 14 hardpoints',
    producer: {
      name: 'Dassault Aviation (with Thales & Safran)',
      composition: 'French Sovereign Aerospace Consortium',
      headquarters: 'Saint-Cloud & Paris, France'
    },
    operators: [
      { country: 'France', flag: '🇫🇷', units: 'French Air and Space Force & French Navy (Carrier-borne Rafale M on Charles de Gaulle)' },
      { country: 'India', flag: '🇮🇳', units: 'Indian Air Force (36 operational fighters at Ambala Golden Arrows and Hasimara Flying Bullets; 26 Rafale Marine fighters approved for INS Vikrant)' },
      { country: 'Allies', flag: '🌐', units: 'Egypt, Qatar, Greece, UAE (80 aircraft ordered), Croatia, Indonesia' }
    ],
    whyImportant: 'Features the SPECTRA electronic warfare suite (radar cancellation, laser warning, automated jamming), Thales RBE2 active electronically scanned array (AESA) radar, Meteor beyond-visual-range air-to-air missiles (no-escape zone >60 km), and SCALP deep-strike stealth cruise missiles.',
    indiaConnection: 'India’s frontline aerial game-changer. The 36 aircraft delivered between 2020 and 2022 gave the Indian Air Force decisive qualitative superiority in Beyond Visual Range (BVR) combat over Pakistani and Chinese regional fighters.',
    relatedConcepts: ['AIR_SUPERIORITY', 'STRATEGIC_AUTONOMY', 'DEFENCE_COOPERATION'],
    verification: {
      source: 'French Ministry of the Armed Forces / Indian Ministry of Defence',
      sourceType: 'Bilateral Intergovernmental Defense Agreement Record',
      publicationDate: '2024',
      lastVerified: '2026-02',
      confidence: 'Verified',
      claimType: 'VERIFIED'
    }
  },

  EUROFIGHTER: {
    id: 'EUROFIGHTER',
    name: 'Eurofighter Typhoon (Tranche 3/4 Standard)',
    category: '4.5-Generation Canard-Delta Air-Superiority Fighter',
    type: 'High-Agility Air-Dominance & Precision Ground-Attack Combat Aircraft',
    speed: 'Mach 2.0 (2,495 km/h); supercruise capability without afterburner at Mach 1.5',
    range: 'Combat radius: 1,389 km air-to-air profile; 2,900 km ferry range',
    producer: {
      name: 'Eurofighter Jagdflugzeug GmbH',
      composition: 'Multinational Joint Enterprise: Airbus (Germany/Spain), BAE Systems (UK), Leonardo (Italy)',
      headquarters: 'Hallbergmoos, Germany'
    },
    operators: [
      { country: 'UK', flag: '🇬🇧', units: 'Royal Air Force (RAF Coningsby & Lossiemouth quick-reaction alert squadrons)' },
      { country: 'Germany', flag: '🇩🇪', units: 'Luftwaffe Tactical Air Force Wings' },
      { country: 'Italy & Spain', flag: '🇮🇹', units: 'Aeronautica Militare & Spanish Air and Space Force' },
      { country: 'Middle East', flag: '🌐', units: 'Saudi Arabia, Qatar, Kuwait, Oman' }
    ],
    whyImportant: 'One of the most agile dogfighting and air-superiority fighters ever engineered, combining twin Eurojet EJ200 turbofans, Captor-E AESA radar, and Meteor air-to-air missiles. Forms the air defense umbrella of NATO over Eastern Europe.',
    relatedConcepts: ['AIR_SUPERIORITY', 'NATO', 'COLLECTIVE_SECURITY'],
    verification: {
      source: 'NATO Allied Air Command / Eurofighter Consortium Technical Factsheet',
      sourceType: 'Alliance Air Command Documentation',
      publicationDate: '2024',
      lastVerified: '2026-01',
      confidence: 'Verified',
      claimType: 'VERIFIED'
    }
  },

  GRIPEN: {
    id: 'GRIPEN',
    name: 'Saab JAS 39 Gripen (E/F Standard)',
    category: '4.5-Generation Light Multirole Combat Fighter',
    type: 'Network-Centric Distributed Air-Defense & Dispersed Strip Fighter',
    speed: 'Mach 2.0 (Supercruise capability)',
    range: 'Combat radius: 1,300 km; operational turnaround time on highway strip: under 10 minutes',
    producer: {
      name: 'Saab AB Aerospace',
      composition: 'Swedish Sovereign Defense Enterprise',
      headquarters: 'Linköping, Sweden'
    },
    operators: [
      { country: 'Sweden', flag: '🇸🇪', units: 'Swedish Air Force (Flygvapnet, designed for dispersed cold-war Bas 90 highway operations)' },
      { country: 'Brazil', flag: '🇧🇷', units: 'Brazilian Air Force (F-39 Gripen with local co-production at Embraer)' },
      { country: 'Allies', flag: '🌐', units: 'South Africa, Czech Republic, Hungary, Thailand' }
    ],
    whyImportant: 'Designed specifically to defeat Russian air forces through decentralized dispersal: can land on a normal public highway, be refueled and rearmed by 1 technician and 5 conscripts in 10 minutes, and take off again. Fields the Leonardo Raven ES-05 AESA radar and Meteor BVRAAM.',
    indiaConnection: 'Saab is actively contesting India’s 114-fighter Multi-Role Fighter Aircraft (MRFA) competition, offering full domestic technology transfer and "Make in India" manufacturing.',
    relatedConcepts: ['DISPERSED_OPERATIONS', 'AIR_SUPERIORITY', 'DEFENCE_COOPERATION'],
    verification: {
      source: 'Swedish Defence Materiel Administration (FMV) / Saab AB Data',
      sourceType: 'Primary Manufacturer Engineering Record',
      publicationDate: '2024',
      lastVerified: '2026-01',
      confidence: 'Verified',
      claimType: 'VERIFIED'
    }
  },

  MQ9_REAPER: {
    id: 'MQ9_REAPER',
    name: 'MQ-9B Reaper / SeaGuardian / SkyGuardian',
    category: 'High-Altitude Long-Endurance (HALE) Armed Remotely Piloted Aircraft',
    type: 'Persistent Surveillance, Intelligence & Precision Strike Unmanned Platform',
    speed: 'Cruise speed: 310 km/h; operational endurance: over 35 to 40 hours continuous flight',
    range: '11,000 km ferry range; operational ceiling: 50,000 feet (15,000 meters)',
    producer: {
      name: 'General Atomics Aeronautical Systems',
      composition: 'US Prime Defense Unmanned Systems Contractor',
      headquarters: 'Poway, California, USA'
    },
    operators: [
      { country: 'USA', flag: '🇺🇸', units: 'US Air Force, US Navy, US Special Operations Command, and CIA' },
      { country: 'India', flag: '🇮🇳', units: 'Indian Navy (Leased SeaGuardians at INS Rajali) & Tri-Service ($3.99B approved procurement for 31 MQ-9B aircraft in 2024)' },
      { country: 'Allies', flag: '🌐', units: 'United Kingdom, Japan, Italy, France, Spain, Netherlands, Australia' }
    ],
    whyImportant: 'Provides unblinking wide-area persistent surveillance over maritime straits and disputed high-altitude mountain borders. Carries synthetic aperture radar (SAR), maritime search radar, and Hellfire laser-guided precision missiles.',
    indiaConnection: 'India approved the intergovernmental acquisition of 31 MQ-9B SkyGuardian and SeaGuardian drones for $3.99 Billion in 2024 to patrol the vast Indian Ocean and Himalayan LAC.',
    relatedConcepts: ['UNMANNED_SYSTEMS', 'MARITIME_DOMAIN_AWARENESS', 'LAC'],
    verification: {
      source: 'US Defense Security Cooperation Agency (DSCA) / Indian Ministry of Defence',
      sourceType: 'Intergovernmental Arms Sale Notification',
      publicationDate: '2024',
      lastVerified: '2026-02',
      confidence: 'Verified (Approved Strategic Procurement)',
      claimType: 'VERIFIED'
    }
  },

  HIMARS: {
    id: 'HIMARS',
    name: 'M142 HIMARS (High Mobility Artillery Rocket System)',
    category: 'Wheel-Mounted Precision Rocket Artillery System',
    type: 'Rapid-Deployable Deep-Strike Precision Rocket Artillery',
    speed: '85 km/h road speed (5-ton 6x6 Family of Medium Tactical Vehicles chassis)',
    range: '84 km (GMLRS guided rockets) to 300 km (ATACMS ballistic missile) / 500 km (PrSM)',
    producer: {
      name: 'Lockheed Martin Missiles and Fire Control',
      composition: 'US Prime Defense Contractor',
      headquarters: 'Grand Prairie, Texas & Camden, Arkansas, USA'
    },
    operators: [
      { country: 'USA', flag: '🇺🇸', units: 'US Army & Marine Corps Artillery Battalions' },
      { country: 'Ukraine', flag: '🇺🇦', units: 'Ukrainian Ground Forces (Pivotal in Kherson counteroffensive and destroying Russian command nodes)' },
      { country: 'Allies', flag: '🌐', units: 'Poland, Taiwan, Australia, Romania, Singapore, UAE, Jordan, Lithuania, Latvia, Estonia' }
    ],
    whyImportant: 'Revolutionized modern land artillery. Its shoot-and-scoot capability allows the crew to launch 6 GPS-guided rockets with 1-meter accuracy within 45 seconds and relocate before counter-battery radar can detect their firing position.',
    relatedConcepts: ['LAND_WARFARE', 'PRECISION_STRIKE', 'ASYMMETRIC_WARFARE'],
    verification: {
      source: 'US Army Acquisition Support Center / Ukrainian General Staff',
      sourceType: 'Government Combat Performance Review',
      publicationDate: '2024',
      lastVerified: '2026-02',
      confidence: 'Verified',
      claimType: 'VERIFIED'
    }
  }
};

// Aliases for seamless lookup tolerance across different casing and punctuation
MILITARY_SYSTEMS['S400'] = MILITARY_SYSTEMS['S400_TRIUMF'];
MILITARY_SYSTEMS['S-400'] = MILITARY_SYSTEMS['S400_TRIUMF'];
MILITARY_SYSTEMS['F35'] = MILITARY_SYSTEMS['F35_LIGHTNING_II'];
MILITARY_SYSTEMS['F-35'] = MILITARY_SYSTEMS['F35_LIGHTNING_II'];
MILITARY_SYSTEMS['F16'] = MILITARY_SYSTEMS['F16'];
MILITARY_SYSTEMS['F-16'] = MILITARY_SYSTEMS['F16'];
MILITARY_SYSTEMS['SM-6'] = MILITARY_SYSTEMS['SM6'];
MILITARY_SYSTEMS['SHAHED136'] = MILITARY_SYSTEMS['SHAHED_136'];
MILITARY_SYSTEMS['P-8I'] = MILITARY_SYSTEMS['P8I'];
MILITARY_SYSTEMS['SU-57'] = MILITARY_SYSTEMS['SU57'];
MILITARY_SYSTEMS['J-20'] = MILITARY_SYSTEMS['J20'];
MILITARY_SYSTEMS['MQ9'] = MILITARY_SYSTEMS['MQ9_REAPER'];
MILITARY_SYSTEMS['MQ-9'] = MILITARY_SYSTEMS['MQ9_REAPER'];
MILITARY_SYSTEMS['LEOPARD2'] = MILITARY_SYSTEMS['LEOPARD_2'];
MILITARY_SYSTEMS['LEOPARD_2A6'] = MILITARY_SYSTEMS['LEOPARD_2'];

