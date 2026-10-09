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
  }
};
