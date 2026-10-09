/**
 * GEOINTEL SHADOW INTEL & COVERT OPERATIONS KNOWLEDGE BASE
 * 
 * Comprehensive intelligence dossiers covering:
 * - Declassified Historical Covert Operations
 * - Subterranean & Polar Military Bases (Project Iceworm, Camp Century, Thule Coverup)
 * - Strategic Sabotage & Kinetic Infrastructure Strikes (Nord Stream)
 * - Stay-Behind Networks & Domestic Covert Actions (Operation Gladio)
 * - Undersea Espionage (Project Azorian / Hughes Glomar Explorer)
 * - Cyber Warfare & Kinetic Digital Weapons (Stuxnet / Olympic Games)
 * - Global Signal Intelligence Interception (ECHELON / Five Eyes)
 * - Directed Energy & Anomalous Health Incidents (Havana Syndrome)
 * - Illicit Nuclear Proliferation Rings (A.Q. Khan Syndicate)
 * - Commercial Cyber Weapons (Pegasus Spyware Intrigue)
 * - Sovereignty Expulsions & Secret Base Pacts (Chagos / Diego Garcia)
 * 
 * Every dossier features rigorous intelligence categorization:
 * - Verification Status (DOCUMENTED_HISTORICAL_FACT, CONTESTED_ATTRIBUTION, DEBUNKED_DISINFORMATION)
 * - Declassified Facts vs The Theory / Narrative
 * - Geopolitical Fallout & Strategic Consequences
 * - National Strategic Implications (India Angle)
 */

export const CONSPIRACY_CATEGORIES = {
  ALL: { id: 'ALL', label: 'ALL SHADOW DOSSIERS', symbol: '◈' },
  DECLASSIFIED_HISTORICAL: { id: 'DECLASSIFIED_HISTORICAL', label: 'DECLASSIFIED HISTORICAL', symbol: '■' },
  COVERT_SABOTAGE: { id: 'COVERT_SABOTAGE', label: 'COVERT SABOTAGE & KINETIC', symbol: '▲' },
  INTELLIGENCE_THEORY: { id: 'INTELLIGENCE_THEORY', label: 'CONTESTED ATTRIBUTION', symbol: '◆' },
  SURVEILLANCE_ESPIONAGE: { id: 'SURVEILLANCE_ESPIONAGE', label: 'GLOBAL SURVEILLANCE & CYBER', symbol: '●' },
  NUCLEAR_PROLIFERATION: { id: 'NUCLEAR_PROLIFERATION', label: 'COVERT NUCLEAR PROGRAMS', symbol: '◈' },
  GEOPOLITICAL_DISINFORMATION: { id: 'GEOPOLITICAL_DISINFORMATION', label: 'DISINFORMATION & THEORIES', symbol: '○' }
};

export const GEOPOLITICAL_CONSPIRACIES = [
  {
    id: "PROJECT_ICEWORM",
    title: "Project Iceworm: Nuclear Missile City Beneath the Greenland Ice Sheet",
    codename: "PROJECT_ICEWORM / CAMP_CENTURY",
    category: "DECLASSIFIED_HISTORICAL",
    classificationLevel: "TOP SECRET // DECLASSIFIED (1997)",
    primaryActors: [
      { name: "U.S. Department of Defense / Army Corps of Engineers", role: "Covert Construction & Missile Deployment", state: "USA" },
      { name: "Danish Parliament (Folketinget)", role: "Concealed From Sovereign Knowledge", state: "DNK" },
      { name: "Greenlandic Indigenous Inuit", role: "Uninformed Local Population", state: "GRL" }
    ],
    geographicLocation: {
      region: "Arctic",
      country: "Greenland (Kingdom of Denmark)",
      lat: 77.1667,
      lng: -61.1333,
      sector: "Northwest Greenland Ice Sheet / Camp Century"
    },
    era: "1959–1966 (Cold War Peak)",
    summary: "A top-secret US Army covert program to construct a subterranean railway and launch complex spanning 4,000 km of cut-and-cover trenches under the Greenland ice sheet to house 600 nuclear-tipped 'Iceman' intermediate-range ballistic missiles capable of striking the Soviet Union.",
    declassifiedFacts: "Under the public civilian cover story of 'Camp Century: City Under the Ice' (ostensibly an Arctic scientific station), the US military deployed a PM-2A portable nuclear reactor to power an extensive sub-glacial base. The plan was kept completely concealed from the Danish Prime Minister H.C. Hansen and Danish Parliament, violating Denmark's 1957 nuclear-free policy. The project was abruptly canceled in 1966 when glaciologists discovered the Greenland ice sheet was moving far faster than anticipated, warping and crushing the subterranean launch tunnels. The reactor was removed, but thousands of tons of radioactive wastewater, carcinogenic PCBs, and 200,000 liters of diesel fuel were permanently abandoned under the ice.",
    theConspiracyOrTheory: "For over three decades, rumors persisted of secret American nuclear weapons buried in Greenland. Following the 1995 Danish Parliamentary inquiry (the DUPI Report), the covert program was officially confirmed. Contemporary intelligence concerns center on climate change: rapid Arctic ice melt models project that within decades, the retreating ice will expose the toxic and radioactive waste left by Camp Century, creating an international sovereignty and environmental liability crisis between Washington, Copenhagen, and Nuuk.",
    geopoliticalFallout: "Triggered a major political scandal in Denmark known as 'Thulegate'. Forced Denmark to admit it had privately tolerated American nuclear flights while publicly professing a nuclear-free policy. Deepened Greenlandic Inuit demands for sovereignty over their land and natural resources.",
    verificationStatus: "DOCUMENTED_HISTORICAL_FACT",
    evidenceDossier: [
      "Danish Foreign Policy Institute (DUPI) 1997 Declassified Report: 'Grønland under den kolde krig'",
      "U.S. Army Polar Research and Development Center Historical Monographs (Declassified 1996)",
      "Geophysical Research Letters (2016): 'The Abandoned Cold War Base at Camp Century, Greenland, in a Warming Climate'"
    ],
    indiaAngle: "India's National Centre for Polar and Ocean Research (NCPOR) studies Arctic ice shelf dynamics and sub-glacial contaminants, citing Camp Century as a cautionary case study on the ecological vulnerabilities of polar militarization."
  },
  {
    id: "THULE_B52_NUCLEAR_COVERUP",
    title: "1968 Thule Nuclear Crash & The Missing Thermonuclear Weapon",
    codename: "OPERATION_CRESTED_ICE",
    category: "DECLASSIFIED_HISTORICAL",
    classificationLevel: "SECRET // PARTIALLY DECLASSIFIED",
    primaryActors: [
      { name: "Strategic Air Command (USAF)", role: "Operation Chrome Dome Nuclear Alert Patrol", state: "USA" },
      { name: "Atomic Energy Commission (AEC)", role: "Plutonium Recovery & Radioactive Decontamination", state: "USA" },
      { name: "Danish Workers Association", role: "Decontamination Crews Irradiated Without Protection", state: "DNK" }
    ],
    geographicLocation: {
      region: "Arctic",
      country: "Greenland",
      lat: 76.5312,
      lng: -68.7031,
      sector: "North Star Bay / Wolstenholme Fjord, Thule Air Base"
    },
    era: "January 21, 1968",
    summary: "A US B-52G Stratofortress carrying four B28FI thermonuclear bombs crashed onto sea ice in North Star Bay near Thule Air Base while conducting a covert airborne nuclear alert patrol over Greenland.",
    declassifiedFacts: "The impact detonated the conventional high explosives in all four hydrogen bombs, scattering highly toxic plutonium-239, uranium, and americium across miles of sea ice and ocean water. Under Operation Crested Ice, tons of radioactive blackened snow and ice were scooped into steel containers and shipped to the US. Declassified files released under FOIA in 2008 and BBC investigative reporting revealed that only three bomb secondary stages were fully recovered from the seabed; the secondary core of weapon serial number 78252 was never located and remains lost on the Arctic ocean floor.",
    theConspiracyOrTheory: "The Pentagon and Danish government allegedly conspired to suppress information regarding the missing fourth nuclear weapon to avoid violating Denmark's non-nuclear territory policy and to prevent international panic. Hundreds of Danish civilian workers who assisted in the cleanup developed cancers and premature deaths, triggering legal battles for state compensation.",
    geopoliticalFallout: "Ended the US military's round-the-clock airborne nuclear alert program (Operation Chrome Dome). Accelerated Greenlandic local demands for the closure of Thule Air Base and catalyzed Scandinavian anti-nuclear movements.",
    verificationStatus: "DOCUMENTED_HISTORICAL_FACT",
    evidenceDossier: [
      "Department of Defense Broken Arrow Incident Dossier (Crash of B-52G 58-0188)",
      "National Security Archive Electronic Briefing Book No. 293: 'The 1968 Thule Crash'",
      "BBC Investigative Report (2008): 'Mystery of the Lost US Nuclear Bomb in Greenland'"
    ],
    indiaAngle: "Indian defense strategists cite the Thule crash as a textbook demonstration of the severe environmental and sovereignty hazards of foreign nuclear staging bases, reinforcing New Delhi's strict doctrine against foreign military bases on sovereign soil."
  },
  {
    id: "NORD_STREAM_SABOTAGE",
    title: "Nord Stream 1 & 2 Undersea Pipeline Demolition",
    codename: "OPERATION_BALTIC_RUPTURE",
    category: "COVERT_SABOTAGE",
    classificationLevel: "CONTESTED CLASSIFIED INVESTIGATION",
    primaryActors: [
      { name: "Covert Special Operations Diving Team", role: "Underwater Explosive Placement", state: "CONTESTED" },
      { name: "Ukrainian Covert Operatives (Alleged)", role: "Rented Yacht 'Andromeda' Extraction Hypothesis", state: "UKR" },
      { name: "U.S. Navy EOD / CIA (Alleged)", role: "Seymour Hersh BALTOPS-22 Allegation", state: "USA" },
      { name: "Russian Military Intelligence (GRU) (Alleged)", role: "Special Purpose Submersible False Flag", state: "RUS" }
    ],
    geographicLocation: {
      region: "Baltic Sea",
      country: "International Waters / Danish & Swedish EEZ",
      lat: 55.5333,
      lng: 15.7500,
      sector: "Bornholm Basin (Baltic Sea)"
    },
    era: "September 26, 2022",
    summary: "Four massive underwater explosions severed three of the four subsea pipes of the Nord Stream 1 and Nord Stream 2 natural gas conduits on the floor of the Baltic Sea, causing the largest industrial methane release in human history and permanently terminating direct Russian gas transit to Germany.",
    declassifiedFacts: "Seismological stations recorded two underwater seismic events (magnitudes 2.3 and 2.1) corresponding to several hundred kilograms of high-grade military explosives (HMX/RDX). Both Sweden and Denmark concluded their formal investigations in early 2024 without naming perpetrators, confirming gross sabotage occurred in international waters. German Federal Prosecutors issued an arrest warrant in August 2024 for a Ukrainian commercial diver associated with the sailing yacht 'Andromeda'.",
    theConspiracyOrTheory: "Three competing geopolitical narratives dominate international debate: (1) The Ukrainian Covert Cell theory: a six-person non-state Ukrainian special operations team used a chartered 50-foot yacht to place shaped charges at 80-meter depths; (2) The US State-Sponsored Operation theory (advocated by investigative journalist Seymour Hersh): US Navy deep-sea divers from Panama City placed C4 explosives during NATO exercise BALTOPS 22, detonated remotely via sonar buoys to prevent Germany from lifting Russian sanctions; (3) The Russian False Flag theory: Russian mini-submarines from Kaliningrad executed the sabotage to enforce an energy embargo on Europe while framing Ukraine.",
    geopoliticalFallout: "Irrevocably severed Germany's 50-year energy interdependence with Russia (Ostpolitik), forced Europe into reliance on US liquefied natural gas (LNG), heightened Baltic NATO naval patrolling, and demonstrated the extreme vulnerability of global critical undersea energy and data infrastructure.",
    verificationStatus: "CONTESTED_INTELLIGENCE_ESTIMATE",
    evidenceDossier: [
      "German Federal Court of Justice (BGH) Arrest Warrant Dossier (2024)",
      "Swedish Security Service (Säkerhetspolisen) Investigation Conclusion Brief (Feb 2024)",
      "Danish Police / Forsvarets Efterretningstjeneste Joint Assessment (Feb 2024)"
    ],
    indiaAngle: "The sabotage disrupted global LNG spot markets, forcing India to import redirected Russian Urals crude via maritime routes at discounted rates and highlighting the urgent necessity of naval protection for Indian offshore energy installations (Bombay High)."
  },
  {
    id: "OPERATION_GLADIO",
    title: "Operation Gladio: NATO Cold War Stay-Behind Paramilitaries",
    codename: "OPERATION_GLADIO",
    category: "DECLASSIFIED_HISTORICAL",
    classificationLevel: "SECRET // OFFICIALLY ACKNOWLEDGED (1990)",
    primaryActors: [
      { name: "Central Intelligence Agency (CIA) & MI6", role: "Coordination, Arming & Training", state: "USA / GBR" },
      { name: "Italian Military Intelligence (SISMI / SIFAR)", role: "Domestic Paramilitary Management", state: "ITA" },
      { name: "Clandestine Western European Units", role: "Stay-Behind Sabotage Networks", state: "NATO" }
    ],
    geographicLocation: {
      region: "Western Europe",
      country: "Italy, Belgium, France, Germany, Greece, Turkey",
      lat: 41.9028,
      lng: 12.4964,
      sector: "Western European NATO Theater"
    },
    era: "1948–1990",
    summary: "A secret NATO-coordinated network of clandestine stay-behind paramilitary cells established across Western Europe to wage guerrilla warfare, sabotage, and resistance in the event of a Soviet invasion of the continent.",
    declassifiedFacts: "Formally revealed to the Italian Parliament on October 24, 1990, by Prime Minister Giulio Andreotti. Caches of military-grade firearms, explosives (Semtex/C-4), and encrypted communications gear were secretly buried across rural Italy, Germany, France, and Belgium. Governed by the Allied Clandestine Committee (ACC) and Clandestine Planning Committee (CPC) under NATO Supreme Headquarters Allied Powers Europe (SHAPE).",
    theConspiracyOrTheory: "The network was allegedly repurposed during peacetime to execute the 'Strategy of Tension' (Strategia della tensione)—orchestrating or enabling false-flag terrorist bombings (such as the 1969 Piazza Fontana bombing and 1980 Bologna massacre) blamed on radical left-wing groups to terrify the civilian populace into voting for right-wing, pro-NATO authoritarian stability.",
    geopoliticalFallout: "Severely damaged public trust in Western European intelligence apparatuses and NATO's clandestine command structures. Prompted official parliamentary condemnation by the European Parliament in November 1990.",
    verificationStatus: "DOCUMENTED_HISTORICAL_FACT",
    evidenceDossier: [
      "Prime Minister Giulio Andreotti Speech to the Chamber of Deputies (Oct 1990)",
      "European Parliament Resolution on Gladio (Official Journal C 324, 24/12/1990)",
      "Italian Parliamentary Commission of Inquiry on Terrorism and Massacres Report (2000)"
    ],
    indiaAngle: "Studied in Indian national security academies to understand clandestine proxy network dynamics, covert arms caches, and the risks of non-state paramilitary assets escaping sovereign oversight."
  },
  {
    id: "PROJECT_AZORIAN",
    title: "Project Azorian: The 6-Mile-Deep Soviet Nuclear Submarine Heist",
    codename: "PROJECT_AZORIAN (HUGHES GLAMOR EXPLORER)",
    category: "DECLASSIFIED_HISTORICAL",
    classificationLevel: "TOP SECRET // DECLASSIFIED (2010)",
    primaryActors: [
      { name: "Central Intelligence Agency (Directorate of Science & Technology)", role: "Covert Salvage Architecture", state: "USA" },
      { name: "Billionaire Howard Hughes & Summa Corporation", role: "Commercial Deep-Sea Mining Cover Story", state: "USA" },
      { name: "Soviet Navy Northern / Pacific Fleet", role: "Target: Sunken Ballistic Missile Submarine K-129", state: "SUN" }
    ],
    geographicLocation: {
      region: "North Pacific",
      country: "International Waters",
      lat: 40.1000,
      lng: -179.9500,
      sector: "1,560 Nautical Miles Northwest of Hawaii"
    },
    era: "1974",
    summary: "One of the most audacious and expensive covert intelligence operations in history: the CIA's six-year, $4 billion effort to lift the sunken Soviet nuclear ballistic missile submarine K-129 from a depth of 16,500 feet (5,000 meters) beneath the Pacific Ocean floor.",
    declassifiedFacts: "The CIA partnered with eccentric billionaire Howard Hughes to construct a 618-foot specialized vessel, the Hughes Glomar Explorer, claiming it was designed to extract manganese nodules from the deep ocean floor. In secret, the ship contained a giant submerged mechanical claw ('Clementine') designed to lower to the abyssal seabed, grab the 2,700-ton Soviet submarine, and haul it into an internal well. During the lift in July 1974, a mechanical failure caused two-thirds of the submarine hull to break off and plunge back to the ocean floor. The CIA recovered the forward section, including two nuclear torpedoes and the bodies of six Soviet submariners who were buried at sea with military honors. When journalists uncovered the story in 1975, the CIA created the famous legal standard: 'neither confirm nor deny' (the Glomar response).",
    theConspiracyOrTheory: "Debate persists among naval intelligence historians over whether the CIA secretly recovered the intact Soviet R-21 nuclear ballistic missiles and cryptographic codebooks from the severed mid-section during a second undisclosed retrieval operation.",
    geopoliticalFallout: "Demonstrated unprecedented American undersea salvage and acoustic detection capabilities, forced the Soviet Navy to redesign its naval cryptographic ciphers, and created the universal 'Glomar response' legal doctrine used across modern intelligence agencies.",
    verificationStatus: "DOCUMENTED_HISTORICAL_FACT",
    evidenceDossier: [
      "CIA Official History: 'Project Azorian: The Story of the Hughes Glomar Explorer' (Declassified 2010)",
      "National Security Archive Electronic Briefing Book No. 305",
      "Declassified White House Memorandum for President Nixon (Signed by Henry Kissinger, 1974)"
    ],
    indiaAngle: "Relevance to India's Deep Ocean Mission and underwater salvage capabilities, highlighting the convergence between marine scientific exploration and deep-sea military intelligence."
  },
  {
    id: "OPERATION_OLYMPIC_GAMES_STUXNET",
    title: "Operation Olympic Games & Stuxnet: The Dawn of Kinetic Cyber Warfare",
    codename: "OPERATION_OLYMPIC_GAMES / STUXNET",
    category: "COVERT_SABOTAGE",
    classificationLevel: "TOP SECRET // LEAKED OPERATIONAL ASSET",
    primaryActors: [
      { name: "NSA Tailored Access Operations (TAO) & CIA", role: "Joint Cyber Weapon Development", state: "USA" },
      { name: "Israeli Military Intelligence Unit 8200 & Mossad", role: "Exploit Engineering & Centrifuge Telemetry", state: "ISR" },
      { name: "Atomic Energy Organization of Iran (AEOI)", role: "Target: Natanz Uranium Enrichment Facility", state: "IRN" }
    ],
    geographicLocation: {
      region: "Middle East",
      country: "Iran",
      lat: 33.7225,
      lng: 51.7278,
      sector: "Natanz Underground Enrichment Complex"
    },
    era: "2006–2010",
    summary: "The world's first known cyber weapon designed to bridge the digital realm and cause physical, kinetic destruction: a joint US-Israeli malware worm engineered to sabotage Iran's uranium enrichment centrifuges at the fortified underground Natanz facility.",
    declassifiedFacts: "Stuxnet utilized four zero-day vulnerabilities in Microsoft Windows and targeted specific Siemens S7-300 programmable logic controllers (PLCs) driving variable-frequency centrifuge motors. Once introduced via an infected USB drive into Natanz's air-gapped network, the worm secretly commanded the IR-1 centrifuges to spin dangerously fast and then abruptly slow down, causing the aluminum rotors to tear themselves apart, while simultaneously feeding false normal readings back to Iranian control room monitors. The malware destroyed an estimated 1,000 centrifuges, setting back Iran's nuclear breakout timeline by one to two years before escaping onto the public internet in 2010 due to an unauthorized software update.",
    theConspiracyOrTheory: "Allegations that the malware was intentionally allowed to spread globally by Israeli intelligence to signal to the world that Iran's nuclear program was compromised, prompting resistance within the US intelligence community over premature operational exposure.",
    geopoliticalFallout: "Established cyber warfare as a recognized domain of sovereign kinetic conflict, spurred Iran and Russia to establish dedicated offensive cyber commands, and ushered in the era of state-sponsored infrastructure malware (Triton, Industroyer, BlackEnergy).",
    verificationStatus: "DOCUMENTED_HISTORICAL_FACT",
    evidenceDossier: [
      "Symantec Security Response: 'W32.Stuxnet Dossier' (Comprehensive Technical Reverse Engineering, 2011)",
      "The New York Times Investigative Report by David E. Sanger: 'Obama Ordered Wave of Cyberattacks Against Iran' (2012)",
      "International Atomic Energy Agency (IAEA) Safeguards Reports on Natanz Centrifuge Degradation (2009–2010)"
    ],
    indiaAngle: "Directly prompted the creation of India's Defence Cyber Agency (DCA) and National Critical Information Infrastructure Protection Centre (NCIIPC) to safeguard Indian nuclear power reactors (Kudankulam, Tarapur) from air-gapped industrial control malware."
  },
  {
    id: "CHAGOS_EXPULSION_DIEGO_GARCIA",
    title: "The Chagos Expulsion & Secret Base Deal of Diego Garcia",
    codename: "OPERATION_BIOT_LEASE",
    category: "DECLASSIFIED_HISTORICAL",
    classificationLevel: "CONFIDENTIAL // DECLASSIFIED & LITIGATED",
    primaryActors: [
      { name: "British Foreign and Commonwealth Office (FCO)", role: "Sovereignty Separation & Forced Depopulation", state: "GBR" },
      { name: "U.S. Department of Defense / Navy", role: "Base Construction & Strategic Lease", state: "USA" },
      { name: "Chagossian Population (Ilois)", role: "Forcibly Expelled Indigenous Inhabitants", state: "MUS" }
    ],
    geographicLocation: {
      region: "Indian Ocean",
      country: "British Indian Ocean Territory (BIOT) / Mauritius",
      lat: -7.3195,
      lng: 72.4228,
      sector: "Diego Garcia Atoll, Central Indian Ocean"
    },
    era: "1965–1973",
    summary: "A clandestine bilateral agreement between the United Kingdom and the United States to detach the Chagos Archipelago from Mauritius and forcibly depopulate its entire indigenous Chagossian population (approx. 2,000 people) to build the secretive US naval and nuclear bomber megabase on Diego Garcia.",
    declassifiedFacts: "In 1965, the UK severed the Chagos Archipelago from pre-independence Mauritius to form the British Indian Ocean Territory (BIOT). In exchange for a secret $14 million discount on American Polaris submarine-launched ballistic missile technology, the UK agreed to clear the islands of all human inhabitants. Between 1968 and 1973, Chagossians were forcibly rounded up, their pet dogs poisoned, and the population loaded onto cargo ships and dumped in the slums of Mauritius and the Seychelles. Diego Garcia was subsequently transformed into the primary power projection fortress in the Indian Ocean, hosting B-52, B-1, and B-2 stealth bombers, nuclear submarine tender docks, and CIA black site detention facilities.",
    theConspiracyOrTheory: "Internal British diplomatic cables declassified in legal proceedings revealed intentional government deception, with British officials advising that Chagossians be described merely as 'contract laborers' and 'transient birds of passage' rather than indigenous inhabitants to circumvent United Nations Article 73 decolonization mandates.",
    geopoliticalFallout: "In 2019, the International Court of Justice (ICJ) issued an Advisory Opinion ruling the UK's separation of Chagos unlawful and demanding full decolonization. In October 2024, the UK government officially announced an agreement to surrender sovereign ownership of Chagos to Mauritius while preserving a 99-year lease for the US-UK military base on Diego Garcia.",
    verificationStatus: "DOCUMENTED_HISTORICAL_FACT",
    evidenceDossier: [
      "International Court of Justice (ICJ) Advisory Opinion: 'Legal Consequences of the Separation of the Chagos Archipelago from Mauritius in 1965' (Feb 2019)",
      "UK Foreign Office Declassified Memoranda (FCO 40 Series, National Archives Kew)",
      "UN General Assembly Resolution 73/295"
    ],
    indiaAngle: "India voted decisively in the UN and ICJ supporting Mauritian sovereignty over Chagos, while maintaining close strategic maritime cooperation with Mauritius (including India's naval surveillance airstrip on Agalega Island) in the wider Indian Ocean."
  },
  {
    id: "ECHELON_FIVE_EYES_INTERCEPT",
    title: "Project ECHELON & The Five Eyes Global Surveillance Machine",
    codename: "PROJECT_ECHELON",
    category: "SURVEILLANCE_ESPIONAGE",
    classificationLevel: "TOP SECRET // OFFICIALLY CONFIRMED",
    primaryActors: [
      { name: "Five Eyes Alliance (NSA, GCHQ, CSEC, ASD, GCSB)", role: "Signals Intelligence Interception & Processing", state: "USA / GBR / CAN / AUS / NZL" },
      { name: "Pine Gap, Menwith Hill, Waihopai", role: "Key Satellite Intercept Ground Stations", state: "AUS / GBR / NZL" }
    ],
    geographicLocation: {
      region: "Global",
      country: "United States, United Kingdom, Australia, Canada, New Zealand",
      lat: -23.7989,
      lng: 133.7372,
      sector: "Pine Gap Joint Defence Facility (Australia) & Menwith Hill (UK)"
    },
    era: "1960s–Present (Formalized UKUSA Agreement)",
    summary: "A global automated signals intelligence (SIGINT) interception network operated by the Five Eyes alliance to intercept military, diplomatic, commercial, and civilian communications transmitted via satellite, radio, and undersea fiber-optic cables.",
    declassifiedFacts: "Born out of the secret 1946 UKUSA Agreement. Operates massive satellite interception ground stations (such as Menwith Hill in England and Pine Gap in central Australia) utilizing dictionary keyword filtering to parse billions of calls, telexes, and internet data packets daily. Exposed in detail by the 2001 European Parliament Temporary Committee on the ECHELON Interception System and subsequently corroborated by Edward Snowden's 2013 disclosures (PRISM, Upstream, Tempora).",
    theConspiracyOrTheory: "Persistent European investigations concluded the US utilized ECHELON not merely for national security, but for covert economic and commercial espionage—intercepting proprietary trade secrets of European corporations (such as Airbus and Enercon) to benefit American industrial competitors.",
    geopoliticalFallout: "Prompted European moves toward sovereign data protection (GDPR), fueled global mistrust of American technology hardware, and accelerated Chinese and Russian efforts to construct decoupled national internets and indigenous encryption standards.",
    verificationStatus: "DOCUMENTED_HISTORICAL_FACT",
    evidenceDossier: [
      "European Parliament Report on the existence of a global system for the interception of private and commercial communications (ECHELON interception system, July 2001)",
      "National Security Agency (NSA) Declassified UKUSA Agreement Text (2010)",
      "Snowden Archive: GCHQ and NSA SIGINT Development Architecture Documents"
    ],
    indiaAngle: "India is a primary target of Five Eyes electronic monitoring in South Asia, driving India's development of indigenous secure satellite communication networks (GSAT-7 Rukmini) and national secure communications architecture."
  },
  {
    id: "HAVANA_SYNDROME_DIRECTED_ENERGY",
    title: "Havana Syndrome: Directed Radiofrequency Weapons or Psychogenic Phenomenon?",
    codename: "ANOMALOUS_HEALTH_INCIDENTS (AHI)",
    category: "INTELLIGENCE_THEORY",
    classificationLevel: "CONTESTED CLASSIFIED ASSESSMENTS",
    primaryActors: [
      { name: "Central Intelligence Agency (CIA) & State Department Personnel", role: "Affected Diplomatic & Intelligence Officers", state: "USA" },
      { name: "Russian GRU Unit 29155 (Alleged)", role: "Suspected Pulsed Microwave Weapon Deployment", state: "RUS" },
      { name: "National Academies of Sciences, Engineering, and Medicine", role: "Independent Scientific Evaluation", state: "USA" }
    ],
    geographicLocation: {
      region: "Global",
      country: "Cuba, Austria (Vienna), China (Guangzhou), Germany, United States",
      lat: 23.1136,
      lng: -82.3666,
      sector: "U.S. Embassy Havana & Diplomatic Residencies Worldwide"
    },
    era: "2016–Present",
    summary: "A series of unexplained acute sensory and neurological symptoms—including sudden loud pressure, vestibular disorientation, cognitive impairment, and traumatic brain injury—reported by over 1,500 American and allied diplomats, military officers, and intelligence personnel across the globe.",
    declassifiedFacts: "First identified in late 2016 among US diplomats stationed at the reopened embassy in Havana, Cuba, and subsequently reported in Vienna, Guangzhou, Berlin, and Washington, D.C. A 2020 consensus study by the National Academies of Sciences concluded that directed, pulsed radio frequency (RF) energy was the most plausible mechanism explaining the core constellation of symptoms. However, a comprehensive March 2023 US National Intelligence Council (NIC) review involving seven intelligence agencies concluded it was 'very unlikely' a foreign adversary was responsible using an exotic weapon, attributing the vast majority of cases to pre-existing medical conditions, environmental factors, or stress.",
    theConspiracyOrTheory: "In March 2024, a joint five-year investigation by The Insider, 60 Minutes, and Der Spiegel published documentary evidence linking members of Russian military intelligence (GRU Unit 29155) to the geographic locations and timelines of specific AHI incidents, alleging Russia developed portable acoustic/directed energy acoustic weapons rewarded by state military honors.",
    geopoliticalFallout: "Led to the passage of the HAVANA Act of 2021 providing financial compensation to afflicted personnel, exacerbated US-Russian covert diplomatic friction, and elevated concerns over portable electronic warfare weapons capable of targeting diplomatic personnel without leaving ballistic forensic evidence.",
    verificationStatus: "CONTESTED_INTELLIGENCE_ESTIMATE",
    evidenceDossier: [
      "National Academies of Sciences, Engineering, and Medicine Consensus Study Report (2020)",
      "Office of the Director of National Intelligence (ODNI) Updated Assessment on AHI (March 2023)",
      "Joint Investigation by The Insider, 60 Minutes, and Der Spiegel: 'Unraveling Havana Syndrome' (March 2024)"
    ],
    indiaAngle: "In September 2021, a CIA officer traveling to New Delhi with CIA Director William Burns reported acute Havana Syndrome symptoms, prompting Indian security agencies to inspect electronic emissions and sweep diplomatic areas."
  },
  {
    id: "HAARP_ELECTROMAGNETIC_GEOPOLITICS",
    title: "HAARP: Ionospheric Research vs Electromagnetic Warfare Geopolitics",
    codename: "HAARP (HIGH-FREQUENCY ACTIVE AURORAL RESEARCH)",
    category: "GEOPOLITICAL_DISINFORMATION",
    classificationLevel: "UNCLASSIFIED SCIENTIFIC // STATE WEAPONIZED NARRATIVE",
    primaryActors: [
      { name: "University of Alaska Fairbanks (formerly USAF / US Navy / DARPA)", role: "Scientific Facility Operation", state: "USA" },
      { name: "Russian State Duma & State Media (RT, Sputnik)", role: "Geopolitical Weaponization of Geophysical Warfare Claims", state: "RUS" },
      { name: "Iranian Supreme National Security Council Officials", role: "Earthquake & Drought Blame Allegations", state: "IRN" }
    ],
    geographicLocation: {
      region: "North America",
      country: "United States (Alaska)",
      lat: 62.3917,
      lng: -145.1500,
      sector: "Gakona, Alaska"
    },
    era: "1993–Present",
    summary: "The High-frequency Active Auroral Research Program (HAARP), an ionospheric heating facility in Gakona, Alaska, consisting of 180 high-frequency radio antennas, which has become the primary lightning rod for worldwide geopolitical allegations of weather modification, earthquake generation, and electromagnetic mind control.",
    declassifiedFacts: "HAARP was initially funded by the US Air Force, US Navy, and DARPA to investigate basic physical processes in the uppermost regions of the atmosphere (ionosphere) and to test whether ionospheric heating could enhance submarine communication using ELF (Extremely Low Frequency) waves or detect underground bunkers. In 2015, the US military transferred ownership of the facility to the civilian University of Alaska Fairbanks for public scientific research.",
    theConspiracyOrTheory: "Worldwide state actors and conspiracy theorists routinely claim HAARP is an active geophysical superweapon capable of triggering devastating earthquakes (such as the 2010 Haiti earthquake or 2023 Turkey-Syria earthquake), weaponizing climate change into artificial droughts, disrupting satellite communications, and altering human brainwaves. In 2002, the Russian State Duma passed a formal resolution alleging the US was creating a 'geophysical weapon capable of destabilizing the planet's atmospheric balance'.",
    geopoliticalFallout: "Demonstrates how advanced military-funded scientific installations are weaponized by rival geopolitical powers in cognitive warfare to deflect public anger over domestic climate crises or natural disaster mismanagement onto foreign intelligence agencies.",
    verificationStatus: "DEBUNKED_DISINFORMATION_THEORY",
    evidenceDossier: [
      "University of Alaska Fairbanks HAARP Scientific Research Archives & Open House Logs",
      "Russian State Duma Committee on International Affairs Resolution (August 2002)",
      "American Geophysical Union (AGU) Physical Feasibility Analysis of Ionospheric Heating"
    ],
    indiaAngle: "Periodically cited by fringe political groups in South Asia during extreme monsoon anomalies or cyclonic disruptions, requiring official clarifications by the India Meteorological Department (IMD) on natural climatological drivers."
  },
  {
    id: "AQ_KHAN_NUCLEAR_BLACK_MARKET",
    title: "The A.Q. Khan Nuclear Syndicate & Illicit Centrifuge Black Market",
    codename: "PROJECT_CENTRIFUGE_SYNDICATE",
    category: "NUCLEAR_PROLIFERATION",
    classificationLevel: "CONFIRMED COVERT PROLIFERATION NETWORK",
    primaryActors: [
      { name: "Dr. Abdul Qadeer Khan (KRL)", role: "Syndicate Mastermind & Technology Source", state: "PAK" },
      { name: "Libyan Jamahiriya (Muammar Gaddafi)", role: "Centrifuge & Weapon Blueprint Buyer", state: "LBY" },
      { name: "Democratic People's Republic of Korea (DPRK)", role: "Missile-for-Enrichment Barter Partner", state: "PRK" },
      { name: "Islamic Republic of Iran", role: "P-1 and P-2 Centrifuge Blueprints Recipient", state: "IRN" }
    ],
    geographicLocation: {
      region: "South Asia / Middle East / Global",
      country: "Pakistan, Dubai, Libya, North Korea, Malaysia, Switzerland",
      lat: 33.6007,
      lng: 73.0679,
      sector: "Kahuta Research Laboratories (KRL) & Dubai Front Companies"
    },
    era: "1980s–2004",
    summary: "The most dangerous and extensive illicit nuclear proliferation network in history: a covert transnational black market orchestrated by the father of Pakistan's nuclear bomb, Dr. A.Q. Khan, which transferred uranium enrichment centrifuge technology, components, and nuclear weapon designs to North Korea, Iran, and Libya.",
    declassifiedFacts: "Khan leveraged stolen European Urenco centrifuge blueprints (P-1, P-2) to establish a global illicit procurement web using front companies in Dubai, factories in Malaysia (Scomi Precision Engineering), and middlemen in Switzerland and South Africa. Pakistan bartered uranium enrichment technology with North Korea in exchange for North Korean Nodong ballistic missile technology (which became Pakistan's Ghauri missile). The network collapsed in October 2003 when US and British intelligence intercepted the German cargo ship BBC China bound for Libya, discovering thousands of centrifuge components. In February 2004, Khan delivered a televised confession in Islamabad and was placed under house arrest.",
    theConspiracyOrTheory: "Widespread debate remains over the degree of complicity of Pakistan's military leadership and Inter-Services Intelligence (ISI). Critics and intelligence analysts argue it was impossible for Khan to transport entire planeloads of nuclear centrifuges aboard Pakistan Air Force C-130 transports to North Korea without the direct authorization of Pakistani Army Chiefs.",
    geopoliticalFallout: "Enabled North Korea to achieve a viable nuclear weapons arsenal, laid the foundational enrichment infrastructure for Iran's nuclear program, and permanently altered the strategic balance in both East Asia and the Middle East.",
    verificationStatus: "DOCUMENTED_HISTORICAL_FACT",
    evidenceDossier: [
      "International Atomic Energy Agency (IAEA) Board of Governors Report on the A.Q. Khan Network (2004–2008)",
      "U.S. House Committee on International Relations: 'The A.Q. Khan Network: Case Closed?' (May 2006)",
      "Dr. A.Q. Khan Televised Confession Transcript (Pakistan Television, Feb 4, 2004)"
    ],
    indiaAngle: "Directly threatened Indian national security by fostering two nuclear-armed adversaries (Pakistan and North Korea) interconnected by shared ballistic missile and centrifuge technology, cementing New Delhi's imperative for a reliable nuclear triad (Agni-V, Arihant)."
  },
  {
    id: "PEGASUS_SURVEILLANCE_INTRIGUE",
    title: "Pegasus: Commercial Zero-Click Cyber Mercenaries & Sovereign Espionage",
    codename: "PROJECT_PEGASUS",
    category: "SURVEILLANCE_ESPIONAGE",
    classificationLevel: "CONFIRMED COMMERCIALLY WEAPONIZED EXPLOIT",
    primaryActors: [
      { name: "NSO Group Technologies", role: "Zero-Click Exploit Development & Global Sales", state: "ISR" },
      { name: "Sovereign Intelligence Agencies Worldwide", role: "Targeting Operations Across 50+ Nations", state: "GLOBAL" },
      { name: "Citizen Lab & Amnesty International Security Lab", role: "Forensic Discovery & Public Exposure", state: "CAN / GBR" }
    ],
    geographicLocation: {
      region: "Global",
      country: "Israel, France, Spain, Mexico, India, Saudi Arabia, UAE, Morocco",
      lat: 32.1624,
      lng: 34.8447,
      sector: "Herzliya (NSO Group HQ) & Global Telecom Networks"
    },
    era: "2016–Present",
    summary: "The commercial weaponization of military-grade zero-click spyware developed by Israeli cyber arms firm NSO Group, capable of silently compromising modern smartphones without user interaction to extract encrypted chats, activate microphones, and track real-time locations.",
    declassifiedFacts: "Pegasus utilizes advanced zero-click exploits targeting Apple iOS (iMessage) and Android operating systems. Once installed, it grants total administrative access, defeating end-to-end encryption by scraping data directly from device memory before transmission. In July 2021, the Pegasus Project consortium revealed a leaked list of over 50,000 phone numbers selected as targets by NSO clients, including heads of state (French President Emmanuel Macron, South African President Cyril Ramaphosa), cabinet ministers, journalists, human rights defenders, and diplomats. The US Department of Commerce placed NSO Group on the Entity List (blacklist) in November 2021.",
    theConspiracyOrTheory: "Allegations that the Israeli Ministry of Defense utilized export licenses for Pegasus as a diplomatic bargaining chip to persuade governments (including Morocco, the UAE, and Bahrain) to sign the Abraham Accords and normalize diplomatic ties with Israel.",
    geopoliticalFallout: "Exposed the ungoverned multi-billion-dollar global private cyber arms bazaar, prompted international diplomatic crises between France, Spain, and North African states, and triggered nationwide judicial inquiries.",
    verificationStatus: "DOCUMENTED_HISTORICAL_FACT",
    evidenceDossier: [
      "Amnesty International Security Lab: 'Forensic Methodology Report on Pegasus' (July 2021)",
      "University of Toronto Citizen Lab Forensic Reports (2016–2024)",
      "U.S. Department of Commerce Bureau of Industry and Security Entity List Ruling (Nov 2021)"
    ],
    indiaAngle: "Triggered major parliamentary and political uproar in New Delhi in 2021, culminating in an independent Technical Committee appointed by the Supreme Court of India to investigate unauthorized cyber surveillance of citizens and officials."
  }
];

export function getConspiracyById(id) {
  if (!id) return null;
  const upper = String(id).toUpperCase();
  return GEOPOLITICAL_CONSPIRACIES.find(c => c.id.toUpperCase() === upper) || null;
}

export function getConspiraciesByCategory(category) {
  if (!category || category === 'ALL') return GEOPOLITICAL_CONSPIRACIES;
  return GEOPOLITICAL_CONSPIRACIES.filter(c => c.category === category);
}
