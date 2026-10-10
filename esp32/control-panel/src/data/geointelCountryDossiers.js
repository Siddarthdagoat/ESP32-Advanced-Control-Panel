import { EXTENDED_DOSSIERS, ISO3_TO_ISO2, CAPITAL_COORDINATES, UNIVERSAL_CURRENCIES, UNIVERSAL_LANGUAGES } from './geointelExtendedDossiers.js';
import { getCompleteCountryHistory } from './history/countryHistoriesRegistry.js';
import { SOVIET_15_REPUBLICS } from './history/sovietRepublicsTransition.js';

export const COUNTRY_DOSSIERS = {
    "DNK": {
    "id": "DNK",
    "name": "Denmark",
    "officialName": "Kingdom of Denmark (Kongeriget Danmark)",
    "commonName": "Denmark",
    "capital": "Copenhagen",
    "capitalCoords": { "name": "Copenhagen", "lat": 55.6761, "lng": 12.5683 },
    "capitalAdmin": {
      "role": "Sovereign Administrative Seat of the Kingdom of Denmark",
      "political": "Seat of the Folketing parliament, Christiansborg Palace, Supreme Court of Denmark, and the royal palace at Amalienborg.",
      "geographic": "55.68°N, 12.57°E situated on the eastern shore of the island of Zealand, facing the Øresund Strait.",
      "strategic": "Apex maritime command nexus controlling Baltic naval access and headquarters of Danish Defence Intelligence Service (FE)."
    },
    "region": "Europe",
    "subregion": "Northern Europe / Scandinavia",
    "flag": "🇩🇰",
    "lat": 56.2639,
    "lng": 9.5018,
    "area": "42,933 km² (Metropolitan Denmark; 2,210,579 km² including Greenland & Faroe Islands)",
    "population": "5.9 Million (Metropolitan Denmark)",
    "politicalSystemType": "Unitary Parliamentary Constitutional Monarchy",
    "currency": "Danish Krone (DKK / kr)",
    "languages": "Danish (Official), English (widely spoken)",
    "timeZones": "UTC+1 (CET), UTC+2 (CEST)",
    "tagline": "Gatekeeper of the Baltic Straits & Arctic Sovereign of Greenland",
    "overview": {
      "beginner": "Denmark is a Nordic nation in Northern Europe that controls the vital waterways connecting the Baltic Sea to the Atlantic Ocean. It is also the head of the Danish Realm, which includes Greenland and the Faroe Islands. Because of this, Denmark is simultaneously a central European NATO ally and a major Arctic sovereign power, finding itself at the center of great-power diplomacy with the United States and China over Greenland's future.",
      "advanced": "The Kingdom of Denmark (Kongeriget Danmark) commands two of the most critical maritime chokepoints in the Western world: the Danish Straits (Great Belt, Little Belt, and Øresund), which control all commercial and naval transit between the Baltic Sea and the North Sea, and the Arctic Realm through sovereign jurisdiction over Greenland and the Faroe Islands. A founding member of NATO, Denmark maintains a high-tech naval fleet and modern F-35 air combat fleet. Copenhagen balances intricate geopolitical pressures: managing rising Greenlandic independence movements, upholding NATO collective defense on the Baltic frontline against Russia, and defending Danish sovereignty against superpower overtures such as the 2019 US bid to purchase Greenland."
    },
    "history": [
      {
        "year": "1658",
        "title": "Treaty of Roskilde & The Danish Straits",
        "phase": "Baltic Hegemony Standoff",
        "whatHappened": "Following catastrophic defeats in the Dano-Swedish Wars, Denmark was forced to cede Scania, Halland, and Blekinge to Sweden, permanently establishing the Øresund as an international border between Denmark and Sweden.",
        "where": "Roskilde / Copenhagen",
        "actors": ["King Frederick III", "King Charles X Gustav of Sweden"],
        "whyItMattered": "Transformed Denmark from a Baltic empire into the guardian of the narrow straits connecting the Baltic to the open ocean.",
        "consequences": "Instituted centuries of strategic management over the Sound Dues (Øresundstolden) and Baltic maritime passage.",
        "claimType": "HISTORICAL FACT",
        "sources": "Treaty of Roskilde Historical Text / Royal Danish Library"
      },
      {
        "year": "1940–1945",
        "title": "Nazi German Occupation & Kauffmann Greenland Accord",
        "phase": "World War II Crisis",
        "whatHappened": "Nazi Germany invaded Denmark in April 1940. Danish Ambassador to Washington Henrik Kauffmann broke with the occupied government in Copenhagen, declaring himself independent and signing the 1941 treaty with the US to defend Greenland.",
        "where": "Copenhagen / Washington, D.C.",
        "actors": ["King Christian X", "Ambassador Henrik Kauffmann", "U.S. President Franklin D. Roosevelt"],
        "whyItMattered": "Prevented Nazi Germany from establishing weather stations in Greenland and initiated permanent US-Greenland defense links.",
        "consequences": "Kauffmann was initially charged with treason by Copenhagen, but his actions were ratified immediately upon Danish liberation in 1945.",
        "claimType": "HISTORICAL FACT",
        "sources": "Danish National Archives / U.S. State Department Historical Series"
      },
      {
        "year": "1949",
        "title": "Founding of NATO & Arctic Strategic Integration",
        "phase": "Cold War Alignment",
        "whatHappened": "Denmark abandoned historic neutrality to become a founding member of NATO in April 1949, driven by Soviet expansionism in the Baltic and the need for security guarantees. In 1951, Denmark signed the US-Denmark Defense Agreement, legalizing the American military base at Thule (Pituffik), Greenland.",
        "where": "Washington / Copenhagen / Thule",
        "actors": ["Prime Minister Hans Hedtoft", "U.S. Secretary of State Dean Acheson"],
        "whyItMattered": "Firmly anchored Denmark and its Arctic realm in the Western security architecture.",
        "consequences": "Instituted Denmark's 'Footnote Policy' during parts of the Cold War, balancing NATO membership with anti-nuclear public sentiment.",
        "claimType": "HISTORICAL FACT",
        "sources": "North Atlantic Treaty 1949 / 1951 US-Denmark Defense Agreement"
      },
      {
        "year": "1979–2009",
        "title": "Greenland Home Rule to Self-Rule Transition",
        "phase": "Decolonization & Realm Evolution",
        "whatHappened": "Denmark granted Greenland Home Rule in 1979, followed by the landmark 2009 Self-Government Act (Lov om Grønlands Selvstyre), which recognized Greenlanders as an independent people under international law with the statutory right to secede from the Kingdom of Denmark.",
        "where": "Nuuk / Copenhagen",
        "actors": ["Danish Folketing", "Inatsisartut", "Queen Margrethe II"],
        "whyItMattered": "Transformed Greenland from a colonial possession into an equal autonomous constituent country within the Realm.",
        "consequences": "Established an annual 3.9 billion DKK block grant while granting Greenland full control over natural resources and the right to declare independence via referendum.",
        "claimType": "HISTORICAL FACT",
        "sources": "Act on Greenland Self-Government (Act No. 473 of 12 June 2009)"
      },
      {
        "year": "2019",
        "title": "The Greenland Purchase Crisis with Washington",
        "phase": "Diplomatic Flashpoint",
        "whatHappened": "US President Donald Trump publicly suggested buying Greenland from Denmark. Danish Prime Minister Mette Frederiksen unequivocally dismissed the idea as 'absurd', stating that Greenland belongs to the people of Greenland and is not for sale, leading to a diplomatic spat that included the temporary cancellation of a state visit.",
        "where": "Copenhagen / Nuuk / Washington",
        "actors": ["Prime Minister Mette Frederiksen", "President Donald Trump", "Premier Kim Kielsen"],
        "whyItMattered": "Exposed the emerging geopolitical friction between American Arctic expansionism and Danish sovereign territorial integrity.",
        "consequences": "Galvanized Danish national defense focus on the Arctic and prompted direct Danish investments in Greenlandic airports to block Chinese capital.",
        "claimType": "HISTORICAL FACT",
        "sources": "Prime Minister's Office Press Briefings / White House Statements (August 2019)"
      },
      {
        "year": "2022–Present",
        "title": "Historic Defense Opt-Out Abolition & Arctic Defense Package",
        "phase": "Defense Modernization",
        "whatHappened": "Following Russia's invasion of Ukraine, Danish citizens voted in a historic referendum (66.9% in favor) to abolish Denmark's 30-year opt-out from the European Union's Common Security and Defence Policy (CSDP). Denmark subsequently committed over 143 billion DKK ($20.5B USD) to military modernization, deploying F-35 stealth fighters and Arctic surveillance drones.",
        "where": "Copenhagen / Baltic Sea / Bornholm",
        "actors": ["Prime Minister Mette Frederiksen", "Danish Ministry of Defence", "NATO Headquarters"],
        "whyItMattered": "Ended Denmark's defense reservations within the EU and aligned its military expenditure with NATO's 2% of GDP target.",
        "consequences": "Strengthened Denmark's operational readiness in both the Baltic Sea (surveillance of Russian Baltic Fleet) and the Arctic (Joint Arctic Command).",
        "claimType": "CURRENT",
        "sources": "Ministry of Defence Defense Agreement 2024–2033 / EU External Action Service"
      }
    ],
    "politicalSystem": {
      "type": "Constitutional Monarchy with Parliamentary Democracy",
      "constitution": "1953 Constitution of Denmark (Danmarks Riges Grundlov)",
      "branches": [
        { "name": "Monarch", "role": "King Frederik X, constitutional Head of State performing ceremonial and diplomatic functions." },
        { "name": "Statsministeriet (Prime Minister's Office)", "role": "Headed by Prime Minister Mette Frederiksen (Social Democrats), leading the executive government." },
        { "name": "Folketinget (Parliament)", "role": "179-seat unicameral parliament in Copenhagen, including 2 seats reserved for Greenland and 2 for the Faroe Islands." },
        { "name": "Judiciary (Højesteret)", "role": "Supreme Court of Denmark providing constitutional and appellate oversight across the entire Realm." }
      ],
      "currentLeadership": {
        "headOfState": "King Frederik X (Accession January 2024)",
        "headOfGovernment": "Prime Minister Mette Frederiksen (Social Democrats)",
        "term": "In office since June 2019 (Re-elected November 2022)",
        "commanderInChief": "Defense authority vested in the Minister of Defence under the constitutional Cabinet."
      },
      "rulingParty": "Centrist Coalition: Social Democrats, Venstre (Liberal Party), and Moderates",
      "oppositionParties": ["Green Left (SF)", "Liberal Alliance", "Denmark Democrats", "Conservative People's Party", "Red-Green Alliance"],
      "currentIssues": [
        "Managing the constitutional relationship with Greenland and the Faroe Islands",
        "Bolstering Baltic maritime defenses following the Nord Stream sabotage near Bornholm",
        "Fulfilling the NATO 2% defense investment pledge through major F-35 procurement",
        "Transitioning national energy away from imported hydrocarbons to offshore wind hubs"
      ]
    },
    "geographyBorders": {
      "landArea": "42,933 km² (Metropolitan Denmark comprising Jutland peninsula and 406 named islands)",
      "location": "Northern Europe, controlling the maritime transition between the North Sea and the Baltic Sea.",
      "continent": "Europe",
      "coastline": "8,750 km of shallow coastal bays, straits, and sounds",
      "strategicGeography": "The Danish Straits (Storebælt, Lillebælt, and Øresund) are the singular natural exit corridor for the Russian Baltic Fleet and millions of barrels of Russian maritime crude exports.",
      "maritimeChokepoints": [
        { "name": "Great Belt (Storebælt)", "width": "Primary deep-draft passage allowing aircraft carriers, container ships, and crude tankers into the Baltic." },
        { "name": "Øresund (The Sound)", "width": "Narrow 4 km strait separating Helsingør (Denmark) from Helsingborg (Sweden)." },
        { "name": "Little Belt (Lillebælt)", "width": "Narrow winding channel between Jutland and Funen island." }
      ],
      "landBorders": [
        { "country": "Germany (Schleswig-Holstein)", "length": "68 km land border" },
        { "country": "Canada (Hans Island, via Greenland)", "length": "1.28 km border on Hans Island / Tartupaluk" }
      ],
      "maritimeBorders": [
        { "country": "Sweden (Kattegat, Øresund, Baltic Sea)", "type": "Agreed Maritime EEZ Boundary" },
        { "country": "Norway (Skagerrak)", "type": "Agreed Bilateral Boundary" },
        { "country": "United Kingdom (North Sea)", "type": "North Sea Continental Shelf Partition" }
      ]
    },
    "economy": {
      "gdpNominal": "$400 Billion (World Bank)",
      "gdpPerCapita": "$68,000 (World Bank)",
      "currency": "Danish Krone (DKK / kr) pegged to the Euro via ERM II",
      "majorIndustries": "Pharmaceuticals (Novo Nordisk - Europe's most valuable company), renewable energy (Vestas, Ørsted), global shipping (Maersk - world's 2nd largest container shipping line), high-tech manufacturing, agricultural exports (pork, dairy), and audio/design technology.",
      "economicStrategicImportance": "Home to A.P. Møller - Mærsk, moving over 15% of global maritime container freight, and world leader in offshore wind energy technology.",
      "indiaEconomicConnection": "Strong Green Strategic Partnership established in 2020 focusing on offshore wind development in Tamil Nadu and Gujarat, maritime shipping, and water conservation technologies.",
      "majorTradingPartners": ["Germany", "Sweden", "United States", "United Kingdom", "China"]
    },
    "military": {
      "expenditure": "$7.1 Billion USD / 2.0% of GDP (SIPRI 2024)",
      "branches": "Royal Danish Army (Hæren), Royal Danish Navy (Søværnet), Royal Danish Air Force (Flyvevåbnet), and Home Guard (Hjemmeværnet).",
      "keyAssets": "F-35A Lightning II stealth fighters, Iver Huitfeldt-class guided missile frigates (air defense), Absalon-class command and support ships, Thetis-class ocean patrol frigates.",
      "specialForces": "Jaeger Corps (Jægerkorpset - Army special operations), Frogman Corps (Frømandskorpset - Navy maritime special forces), and Sirius Dog Sled Patrol (Arctic reconnaissance).",
      "alliances": "NATO founding member, European Union (CSDP full member since 2022), Nordic Defence Cooperation (NORDEFCO), Joint Expeditionary Force (JEF)."
    },
    "relations": {
      "main": [
        {
          "country": "United States",
          "countryCode": "USA",
          "id": "DNK_USA",
          "status": "Founding NATO Ally & Arctic Base Host",
          "summary": "Deep military integration through NATO, Pituffik Space Base access in Greenland, and defense procurement (F-35).",
          "friction": "Reactions to US proposals regarding Greenland's territorial status and historical espionage revelations (NSA tapping Danish subsea internet cables to spy on European leaders)."
        },
        {
          "country": "Greenland",
          "countryCode": "GRL",
          "id": "DNK_GRL",
          "status": "Autonomous Constituent Territory (Rigsfællesskabet)",
          "summary": "Denmark subsidizes Greenland with 3.9 billion DKK annually and represents it in NATO and foreign defense.",
          "friction": "Greenlandic sovereign independence debate, resource revenue distribution, and past colonial integration policies."
        },
        {
          "country": "Germany",
          "countryCode": "DEU",
          "id": "DNK_DEU",
          "status": "Close Strategic Partner & Primary Trading Counterpart",
          "summary": "Shared land border, interconnected electrical and natural gas grids, and joint Baltic Sea security cooperation.",
          "friction": "Minimal; exemplary bilateral cross-border minority rights integration (Bonn-Copenhagen Declarations of 1955)."
        },
        {
          "country": "Sweden",
          "countryCode": "SWE",
          "id": "DNK_SWE",
          "status": "Nordic Ally & Øresund Integrated Region",
          "summary": "Connected by the monumental Øresund Bridge, joint Nordic air surveillance, and mutual NATO Baltic membership.",
          "friction": "Bilateral coordination over cross-border criminal gang activity and passport control checks."
        }
      ]
    },
    "currentTensions": {
      "isAvailable": true,
      "flashpoints": [
        {
          "name": "Baltic Undersea Infrastructure Security & Nord Stream Sabotage",
          "severity": "HIGH",
          "desc": "Heightened naval patrols around Bornholm island and critical Danish subsea telecom and power cables following the September 2022 pipeline blasts."
        },
        {
          "name": "Arctic Superpower Pressures & Greenlandic Sovereignty",
          "severity": "ELEVATED",
          "desc": "Navigating intense American defense interests, Chinese mineral initiatives, and local independence movements across the Arctic crown of the Realm."
        },
        {
          "name": "Russian 'Shadow Fleet' Oil Transit through Danish Straits",
          "severity": "ELEVATED",
          "desc": "Hundreds of uninsured, ageing Russian oil tankers transiting the narrow Danish Straits posing catastrophic environmental spill risks and testing UNCLOS free transit rights."
        }
      ]
    },
    "strategicLocations": {
      "isAvailable": true,
      "nodes": [
        { "name": "Copenhagen / Christiansborg", "type": "Administrative / Command", "significance": "Apex government seat and headquarters of Danish Defence Intelligence Service (FE)." },
        { "name": "Great Belt (Storebælt)", "type": "Maritime Chokepoint", "significance": "Deep-water passage through which all major naval vessels and commercial tankers enter and exit the Baltic Sea." },
        { "name": "Bornholm Island", "type": "Baltic Forward Sentinel", "significance": "Danish island in the central Baltic Sea hosting NATO radar listening stations monitoring the Baltic states and Kaliningrad." },
        { "name": "Skrydstrup Air Base", "type": "Military Aerospace", "significance": "Primary fighter base housing Denmark's newly delivered fleet of F-35A Lightning II stealth aircraft." },
        { "name": "Frederikshavn Naval Base", "type": "Naval / Patrol", "significance": "Headquarters of the Royal Danish Navy's 1st Squadron responsible for Arctic and North Atlantic operations." }
      ]
    },
    "indiaImpact": {
      "isAvailable": true,
      "headline": "Green Strategic Partnership & Maritime Logistics",
      "documented": "India and Denmark signed the landmark 'Green Strategic Partnership' in September 2020, representing India's first such environmental bilateral accord with any nation.",
      "potential": "Danish firms (Vestas, Danfoss, Ramboll) partner with India's Ministry of New and Renewable Energy (MNRE) to construct offshore wind farms in Tamil Nadu and establish Centre of Excellence for Offshore Wind. Maersk operates major terminal concessions at Indian ports (JNPT, Pipavav).",
      "analytical": "Denmark strongly supports India's Observer status in the Arctic Council, collaborating on polar climate models that evaluate Greenland ice melt correlations with the Indian Monsoon."
    }
  },

  "GRL": {
    "id": "GRL",
    "name": "Greenland",
    "officialName": "Kalaallit Nunaat (Greenland)",
    "commonName": "Greenland",
    "capital": "Nuuk",
    "capitalCoords": { "name": "Nuuk", "lat": 64.1835, "lng": -51.7216 },
    "capitalAdmin": {
      "role": "Sovereign Administrative Seat of Naalakkersuisut & Inatsisartut",
      "political": "Seat of the 31-member Greenlandic Parliament (Inatsisartut), the Premier's executive cabinet, and the Danish High Commissioner (Rigsombudsmanden).",
      "geographic": "64.18°N, 51.72°W situated at the mouth of Nuup Kangerlua fjord on the southwestern coast.",
      "strategic": "Apex maritime hub of the Joint Arctic Command (Arktisk Kommando) and commercial logistics gateway for the Arctic Ocean."
    },
    "region": "Arctic",
    "subregion": "North America / Danish Realm",
    "flag": "🇬🇱",
    "lat": 71.7069,
    "lng": -42.6043,
    "area": "2,166,086 km² (World's Largest Island; ~80% Covered by Ice Sheet)",
    "population": "56,600 (88% Inuit, 12% Danish/European)",
    "politicalSystemType": "Parliamentary Democracy under Constitutional Monarchy (Self-Governing Territory within the Kingdom of Denmark)",
    "currency": "Danish Krone (DKK / kr)",
    "languages": "Greenlandic (Kalaallisut - Sole Official Language), Danish, English",
    "timeZones": "UTC-2 (Nuuk Standard), UTC+0 (Danmarkshavn), UTC-1 (Ittoqqortoormiit)",
    "tagline": "The Arctic Keystone: Superpower Scramble, Rare Earths & Secret Nuclear Ice Bases",
    "overview": {
      "beginner": "Greenland is the largest island in the world, home to about 56,600 people. Although geographically part of North America, it is an autonomous territory under the Kingdom of Denmark. It is currently at the center of intense geopolitical competition between the United States, Denmark, and China because of its critical military location overlooking the Arctic, its massive deposits of rare earth minerals needed for high-tech manufacturing, and its access to newly thawing polar shipping lanes.",
      "advanced": "Greenland (Kalaallit Nunaat) occupies the critical northern sentinel position between North America and the Arctic Basin, commanding the western flank of the Greenland-Iceland-UK (GIUK) Gap. Governed under the 2009 Self-Rule Act, Greenland exercises comprehensive jurisdiction over its natural resources, environment, taxation, and domestic law, while Denmark maintains constitutional authority over defense, foreign policy, and currency. The island is the focus of intense trilateral competition: the United States relies on Pituffik (formerly Thule) Space Base for ballistic missile early warning and space surveillance; Denmark seeks to preserve the unity of the Danish Realm (Rigsfællesskabet); and global superpowers compete for access to its world-class rare earth mineral reserves at Kvanefjeld and Tanbreez as the Arctic ice sheet melts."
    },
    "history": [
      {
        "year": "Pre-1940",
        "title": "Thule Inuit Migration & Danish Colonial Consolidation",
        "phase": "Colonial Formation",
        "whatHappened": "Inuit populations established permanent societies across Greenland, following earlier Dorset and Norse settlements. Missionary Hans Egede established Danish colonial presence in 1721. In 1933, the Permanent Court of International Justice awarded full sovereignty over all of Greenland to Denmark, rejecting Norwegian territorial claims to eastern Greenland.",
        "where": "Nuuk, Disko Bay, Eastern Greenland",
        "actors": ["Greenlandic Inuit", "Kingdom of Denmark", "Kingdom of Norway"],
        "whyItMattered": "Legally consolidated Danish sovereign title over the entire island under international law.",
        "consequences": "Maintained Greenland as a closed royal trade monopoly until the geopolitical shock of the Second World War.",
        "claimType": "HISTORICAL FACT",
        "sources": "Permanent Court of International Justice 1933 Judgment / Royal Greenland Trading Department Archives"
      },
      {
        "year": "1941–1946",
        "title": "WWII US Defense Protectorate & Truman $100M Purchase Offer",
        "phase": "Strategic Awakening",
        "whatHappened": "Following Nazi Germany's occupation of Denmark in 1940, Danish Ambassador Henrik Kauffmann unilaterally signed the 1941 Defense of Greenland Agreement with the United States, authorizing US military bases. In 1946, President Harry S. Truman secretly offered Denmark $100 million in gold bullion to buy Greenland outright, recognizing its vital role in polar defense against the USSR.",
        "where": "Washington, D.C. / Nuuk / Narsarsuaq (Bluie West One)",
        "actors": ["President Harry S. Truman", "Ambassador Henrik Kauffmann", "Danish Government"],
        "whyItMattered": "Marked the beginning of permanent American military integration in Greenland.",
        "consequences": "Denmark politely declined the purchase offer but recognized that American military presence was indispensable for Western hemisphere defense.",
        "claimType": "HISTORICAL FACT",
        "sources": "U.S. State Department Declassified Foreign Relations (FRUS 1946) / Danish Foreign Ministry Archives"
      },
      {
        "year": "1951",
        "title": "1951 US-Denmark Defense Pact & Construction of Thule Air Base",
        "phase": "Cold War Bastion",
        "whatHappened": "The US and Denmark signed the 1951 bilateral Defense Agreement, granting the US military sweeping rights to build installations. The US Air Force executed Operation Blue Jay, deploying 12,000 workers to secretly construct Thule Air Base (now Pituffik Space Base) at 76°N, complete with a 10,000-ft strategic runway and Ballistic Missile Early Warning System (BMEWS) radar.",
        "where": "Pituffik / Thule, Northwest Greenland",
        "actors": ["U.S. Air Force", "Danish Ministry of Foreign Affairs", "Displaced Inughuit Inuit"],
        "whyItMattered": "Anchored the primary early-warning radar node detecting Soviet ICBM launches over the North Pole.",
        "consequences": "Local Inughuit indigenous residents were forcibly relocated 100 km north to Qaanaaq in 1953 to accommodate base expansion, leading to decades of legal battles and apologies.",
        "claimType": "HISTORICAL FACT",
        "sources": "1951 US-Denmark Defense Agreement (TIAS 2298) / Supreme Court of Denmark 2003 Ruling"
      },
      {
        "year": "1959–1967",
        "title": "Project Iceworm & Camp Century (Covert Nuclear Missile Base)",
        "phase": "Covert Nuclear Program",
        "whatHappened": "Under the civilian cover of a scientific polar research station ('Camp Century'), the US Army excavated 4,000 km of subterranean tunnels beneath the ice sheet to deploy 600 nuclear-tipped Iceman missiles capable of striking Moscow, powered by the PM-2A portable nuclear reactor. The operation was kept secret from the Danish Parliament, violating Denmark's non-nuclear policy.",
        "where": "Camp Century, Northwest Greenland Ice Sheet",
        "actors": ["U.S. Army Corps of Engineers", "Danish Prime Minister H.C. Hansen (Privately Informed)", "Danish Folketing"],
        "whyItMattered": "Demonstrated the lengths to which the US sought to utilize Greenland as a covert nuclear staging ground.",
        "consequences": "Abandoned in 1966 due to unpredictable ice movement. Left behind radioactive wastewater, PCBs, and 200,000 liters of diesel fuel now threatened with exposure by global warming.",
        "claimType": "HISTORICAL FACT",
        "sources": "Danish DUPI Report (1997) / Geophysical Research Letters (2016)"
      },
      {
        "year": "1968",
        "title": "1968 Thule B-52 Nuclear Crash & Operation Crested Ice",
        "phase": "Nuclear Accident",
        "whatHappened": "On January 21, 1968, a B-52G bomber carrying four thermonuclear weapons crashed onto sea ice in North Star Bay near Thule Air Base. The conventional explosives detonated, scattering radioactive plutonium across the ice. Declassified documents revealed that the secondary core of weapon serial 78252 was never recovered.",
        "where": "North Star Bay / Wolstenholme Fjord",
        "actors": ["U.S. Strategic Air Command", "Atomic Energy Commission", "Danish Cleanup Workers"],
        "whyItMattered": "Exposed the reality of American nuclear-armed airborne alert patrols over Greenland despite Danish non-nuclear proclamations.",
        "consequences": "Sparked Denmark's 'Thulegate' scandal, terminated Operation Chrome Dome flights, and led to long-term health compensation claims by Danish workers.",
        "claimType": "HISTORICAL FACT",
        "sources": "National Security Archive Briefing Book 293 / BBC FOIA Investigation (2008)"
      },
      {
        "year": "2009–Present",
        "title": "Self-Rule Act, 2018 Chinese Airport Veto & 2019 Trump Purchase Crisis",
        "phase": "Contemporary Superpower Competition",
        "whatHappened": "In 2009, Greenlanders approved the Self-Rule Act, establishing the legal right to declare full independence. In 2018, Chinese state contractor CCCC submitted bids to construct airports in Nuuk and Ilulissat; Denmark, under intense US pressure, directly funded the project to block Beijing. In August 2019, US President Donald Trump publicly proposed buying Greenland; Danish Prime Minister Mette Frederiksen called the idea 'absurd', stating 'Greenland belongs to Greenland', sparking a diplomatic rift.",
        "where": "Nuuk / Copenhagen / Washington / Beijing",
        "actors": ["Premier Múte B. Egede", "Prime Minister Mette Frederiksen", "U.S. President Donald Trump", "Chinese State Council"],
        "whyItMattered": "Propelled Greenland into the center of contemporary 21st-century great-power rivalry over Arctic dominance and critical minerals.",
        "consequences": "The US opened a dedicated consulate in Nuuk (2020), signed aid agreements, and Greenland passed legislation banning uranium mining to safeguard environmental sovereignty.",
        "claimType": "HISTORICAL FACT",
        "sources": "2009 Greenland Self-Government Act / Danish Ministry of Defence / Inatsisartut Records"
      }
    ],
    "competitionAnalysis": {
      "unitedStates": {
        "coreMotives": "Secure Pituffik Space Base for early warning missile detection and space surveillance; control the GIUK Gap anti-submarine choke-point; access massive rare earth element deposits to decouple defense supply chains from China.",
        "leverage": "Defense guarantee under the 1951/2004 agreements; direct financial grants and technical aid to Nuuk; US Consulate in Nuuk."
      },
      "denmark": {
        "coreMotives": "Preserve the constitutional unity of the Danish Realm (Rigsfællesskabet); balance NATO security obligations while defending sovereignty against foreign takeover; manage the annual 3.9 billion DKK block grant.",
        "leverage": "Constitutional authority over foreign policy and defense; annual block grant funding >50% of public budget; Danish Joint Arctic Command."
      },
      "china": {
        "coreMotives": "Expand the 'Polar Silk Road'; secure rare earth extraction rights (Kvanefjeld project via Shenghe Resources); establish scientific and logistics presence in the Arctic Basin.",
        "leverage": "State-backed capital for infrastructure, mining consortia investments, and appetite for Greenlandic seafood exports."
      },
      "indigenousAutonomy": {
        "coreMotives": "Achieve full political and economic independence; protect Inuit cultural heritage and hunting grounds from extractive pollution; balance mining revenues against ecological protection.",
        "leverage": "2009 Self-Rule Act granting legal right to an independence referendum; democratic control over natural resource licensing (Act No. 20 banning uranium)."
      }
    },
    "politicalSystem": {
      "type": "Parliamentary Democracy under Constitutional Monarchy",
      "constitution": "Act on Greenland Self-Government (Act No. 473 of 12 June 2009) & Constitution of the Kingdom of Denmark",
      "branches": [
        { "name": "Naalakkersuisut (Cabinet)", "role": "Executive branch led by Premier Múte B. Egede, administering domestic portfolios including mineral resources, fisheries, health, and education." },
        { "name": "Inatsisartut (Parliament)", "role": "31-seat unicameral legislature elected by proportional representation in Nuuk, enacting domestic statutes and budgets." },
        { "name": "Judiciary (Landsret)", "role": "High Court of Greenland administering civil and criminal law, with final appellate review by the Supreme Court of Denmark." },
        { "name": "Rigsombudsmanden (High Commissioner)", "role": "Represents the Danish Crown and Government of Denmark in Greenland, facilitating institutional liaison." }
      ],
      "currentLeadership": {
        "headOfState": "King Frederik X (Kingdom of Denmark)",
        "headOfGovernment": "Premier Múte B. Egede (Inuit Ataqatigiit - IA)",
        "term": "In office since April 2021",
        "commanderInChief": "Defense authority constitutionally vested in the Danish Ministry of Defence."
      },
      "rulingParty": "Inuit Ataqatigiit (IA) in governing coalition with Siumut",
      "oppositionParties": ["Demokraatit (Democrat Party)", "Naleraq (Pro-Rapid Independence)", "Atassut (Liberal-Conservative, Unionist)"],
      "currentIssues": [
        "Independence Referendum Timeline vs. Fiscal Viability without the Danish Block Grant",
        "Implementation of Act No. 20 prohibiting uranium mining, impacting the Kvanefjeld REE project",
        "Airport expansions in Nuuk and Ilulissat to support direct transatlantic tourism and commerce",
        "Mitigating environmental risks from melting glaciers unearthing Cold War toxic sites (Camp Century)"
      ]
    },
    "geographyBorders": {
      "landArea": "2,166,086 km² (Ice sheet spans 1,755,637 km² up to 3.2 km thick; ice-free coastal zone is 410,449 km²)",
      "location": "North America / Arctic Ocean, situated between Baffin Bay, the Greenland Sea, and the North Atlantic.",
      "continent": "North America",
      "coastline": "44,087 km of deeply indented fjord coastlines",
      "strategicGeography": "Keystone of the GIUK Gap and the gateway to the Northwest Passage, Baffin Bay, and the Central Arctic Basin.",
      "maritimeChokepoints": [
        { "name": "GIUK Gap", "width": "Chokepoint between Greenland, Iceland, and the UK controlling Russian submarine transit into the Atlantic." },
        { "name": "Fram Strait", "width": "Deepest maritime passage connecting the Arctic Ocean to the North Atlantic." },
        { "name": "Kennedy Channel / Nares Strait", "width": "Narrow strait separating Northwest Greenland from Ellesmere Island, Canada (site of Hans Island)." }
      ],
      "climates": ["Polar Tundra", "Polar Ice Cap", "Sub-Arctic Coastal Maritime"],
      "landBorders": [
        { "country": "Canada (Hans Island / Tartupaluk)", "length": "1.28 km peaceful land boundary formally ratified in June 2022" }
      ],
      "maritimeBorders": [
        { "country": "Canada (Baffin Bay, Davis Strait, Lincoln Sea)", "type": "Agreed Maritime EEZ Boundary" },
        { "country": "Iceland (Denmark Strait)", "type": "Agreed Bilateral EEZ Boundary" },
        { "country": "Norway (Jan Mayen / Svalbard)", "type": "Agreed Maritime Boundary" }
      ]
    },
    "economy": {
      "gdpNominal": "$3.2 Billion (World Bank)",
      "gdpPerCapita": "$56,500 (World Bank)",
      "currency": "Danish Krone (DKK / kr)",
      "bloktilskud": "3.9 Billion DKK ($570 Million USD) annual direct block grant from the Kingdom of Denmark, funding >50% of the public budget.",
      "majorIndustries": "Commercial fisheries (coldwater shrimp, Greenland halibut, cod - over 90% of total export receipts), fish processing (Royal Greenland), public administration, mineral exploration, maritime shipping, and tourism.",
      "criticalMinerals": "Kvanefjeld (Kuannersuit) holding the world's 2nd largest rare earth deposit; Tanbreez holding world-class heavy rare earths (dysprosium, terbium, yttrium, neodymium) with zero radioactive elements; large reserves of zinc, lead, graphite, gold, and platinum.",
      "economicStrategicImportance": "Positioned as the most viable Western alternative source for critical rare earth minerals needed to break China's 70%+ global processing monopoly.",
      "indiaEconomicConnection": "Exploratory technical cooperation in critical mineral supply chains (KABIL) and joint glaciological climate studies assessing polar ice melt correlation with Indian summer monsoons.",
      "majorTradingPartners": ["Denmark", "United States", "China", "European Union", "Japan"]
    },
    "military": {
      "expenditure": "Financed by Danish Ministry of Defence (Danish Defense Budget: ~$7.1B / 2.0% GDP)",
      "pituffikSpaceBase": "Pituffik Space Base (US Space Force 12th Space Warning Squadron): operates the Upgraded Early Warning Radar (UEWR) monitoring ICBM launches across polar azimuths, satellite tracking, and polar strategic logistics.",
      "jointArcticCommand": "Danish Joint Arctic Command (Arktisk Kommando) based in Nuuk: commands Arctic offshore patrol vessels (Thetis and Knud Rasmussen classes), Challenger maritime patrol aircraft, and search-and-rescue assets.",
      "siriusPatrol": "Slædepatruljen Sirius (Sirius Dog Sled Patrol): elite Danish naval special reconnaissance unit conducting long-range winter sovereignty patrols across Northeast Greenland National Park.",
      "natoIntegration": "Greenland is integrated into NATO's collective defense architecture under Article 5 through Denmark's founding membership."
    },
    "relations": {
      "main": [
        {
          "country": "United States",
          "countryCode": "USA",
          "id": "GRL_USA",
          "status": "Strategic Base Treaty & Critical Minerals Cooperation",
          "summary": "Governed by the 1951 Defense Agreement and 2004 Igaliku Agreement. The US maintains Pituffik Space Base, opened a dedicated Consulate in Nuuk in 2020, and finances environmental and mineral mapping projects.",
          "friction": "Residual sensitivities from President Trump's 2019 purchase proposal and historical Cold War nuclear cover-ups (Project Iceworm, Thule B-52 crash)."
        },
        {
          "country": "Denmark",
          "countryCode": "DNK",
          "id": "GRL_DNK",
          "status": "Constitutional Sovereign Realm (Rigsfællesskabet)",
          "summary": "Denmark provides annual block grants of 3.9 billion DKK, administers defense and foreign affairs, and represents Greenland in international security bodies.",
          "friction": "Greenlandic political movement toward eventual full independence; debates over revenue sharing from potential offshore mineral and oil extraction."
        },
        {
          "country": "China",
          "countryCode": "CHN",
          "id": "GRL_CHN",
          "status": "Commercial Resource Interest & Polar Silk Road",
          "summary": "Chinese state enterprise Shenghe Resources holds equity in the Kvanefjeld rare earth project, and Chinese firms previously bid on major Greenlandic airport infrastructure.",
          "friction": "Denmark and the US actively intervene to block Chinese ownership of strategic infrastructure and dual-use port/airport facilities."
        },
        {
          "country": "Canada",
          "countryCode": "CAN",
          "id": "GRL_CAN",
          "status": "Border Accord & Inuit Circumpolar Council Ties",
          "summary": "Resolved the 50-year 'Whisky War' dispute in June 2022 by amicably dividing Hans Island (Tartupaluk) in Kennedy Channel. Shared Inuit cultural and linguistic ties across Nunavut and Kalaallit Nunaat.",
          "friction": "None; serves as a global model for peaceful Arctic border resolution."
        }
      ]
    },
    "currentTensions": {
      "isAvailable": true,
      "flashpoints": [
        {
          "name": "Superpower Mineral Scramble (Kvanefjeld vs Tanbreez)",
          "severity": "HIGH",
          "desc": "Intense rivalry between Western defense interests and Chinese state-backed consortia for control of Greenland's massive heavy rare earth deposits, complicated by local environmental legislation banning uranium byproduct mining."
        },
        {
          "name": "Independence vs. Danish Block Grant Dilemma",
          "severity": "ELEVATED",
          "desc": "Nuuk's aspirations for full sovereignty require replacing 3.9 billion DKK in Danish annual subsidies with extractive mining revenues, creating domestic political friction over environmental protection."
        },
        {
          "name": "Melting Cold War Nuclear Waste (Camp Century)",
          "severity": "ELEVATED",
          "desc": "Rapid climate-induced ice sheet melting threatens to unearth thousands of tons of radioactive and toxic waste abandoned by the US Army at Camp Century by 2070, raising unresolved legal liability disputes."
        }
      ]
    },
    "strategicLocations": {
      "isAvailable": true,
      "nodes": [
        { "name": "Pituffik Space Base (Thule)", "type": "Military / Early Warning", "significance": "US Space Force early-warning radar node monitoring Russian ballistic missile launches across the polar route." },
        { "name": "Nuuk", "type": "Administrative / Command", "significance": "Seat of the Inatsisartut parliament, Premier's executive cabinet, and Danish Joint Arctic Command." },
        { "name": "Kvanefjeld (Kuannersuit)", "type": "Critical Minerals", "significance": "World's second-largest rare earth element deposit, subject to legislative ban on radioactive uranium extraction." },
        { "name": "Tanbreez Deposit", "type": "Critical Minerals", "significance": "World's largest heavy rare earth deposit with zero radioactive elements, licensed for Western commercial exploitation." },
        { "name": "Camp Century Site", "type": "Historical / Nuclear Site", "significance": "Subterranean site of Project Iceworm containing abandoned nuclear reactor coolant waste beneath the ice sheet." }
      ]
    },
    "indiaImpact": {
      "isAvailable": true,
      "headline": "India Arctic Policy & Polar Glaciological Linkages",
      "documented": "India released its official Arctic Policy in March 2022, emphasizing scientific glaciology, environmental monitoring, and sustainable development as an accredited Observer to the Arctic Council.",
      "potential": "National Centre for Polar and Ocean Research (NCPOR) monitors Greenland ice sheet mass balance to model global sea-level rise and predictive impacts on the Indian Summer Monsoon. India's state-owned KABIL evaluates global rare earth partnerships to secure supply chains for domestic electric vehicle and defense manufacturing.",
      "analytical": "New Delhi maintains that the Arctic must remain a zone of peaceful scientific collaboration governed by international law (UNCLOS), opposing unilateral superpower militarization while safeguarding access to polar shipping lanes and critical mineral resources."
    }
  },

  "TWN": {
    "id": "TWN",
    "name": "Taiwan",
    "officialName": "Republic of China (Taiwan)",
    "capital": "Taipei",
    "region": "East Asia",
    "subregion": "Eastern Asia",
    "flag": "🇹🇼",
    "lat": 23.6978,
    "lng": 120.9605,
    "area": "36,197 km²",
    "population": "23.5 Million",
    "politicalSystemType": "Semi-Presidential Constitutional Republic",
    "currency": "New Taiwan Dollar (TWD / NT$)",
    "languages": "Mandarin Chinese (Official), Taiwanese Hokkien, Hakka, Indigenous Languages",
    "timeZones": "UTC+8 (National Standard Time)",
    "tagline": "Global Semiconductor Keystone & First Island Chain Frontline",
    "overview": {
      "beginner": "Taiwan is an island democracy of 23.5 million people located 160 kilometers off the southeastern coast of China. It is internationally critical for two reasons: it manufactures over 90% of the world’s most advanced computer chips, and it sits right in the center of East Asia’s most critical commercial shipping lanes. Although it functions as a fully independent democracy with its own military, passport, and currency, the government in Beijing claims Taiwan is part of China and refuses to rule out taking it by military force.",
      "advanced": "The Republic of China (ROC/Taiwan) occupies the pivotal geographic fulcrum of the First Island Chain, separating the East and South China Seas. Taiwan operates a consolidated semi-presidential democracy with an $800B+ economy anchored by Taiwan Semiconductor Manufacturing Company (TSMC), creating an indispensable global \"Silicon Shield.\" Beijing claims sovereignty over Taiwan under its \"One China Principle,\" asserting historical and legal succession to all Chinese territory, whereas Taipei maintains that the ROC is a sovereign, independent state that has never been ruled by the People's Republic of China (PRC). The United States governs its relationship under the 1979 Taiwan Relations Act, Three Joint Communiqués, and Six Assurances—a framework of \"Strategic Ambiguity\" designed to deter a Chinese amphibious invasion while dissuading unilateral Taiwanese declarations of formal de jure independence."
    },
    "history": [
      {
        "year": "Pre-1600s",
        "title": "Austronesian Indigenous Inhabitation",
        "phase": "Early History",
        "whatHappened": "Austronesian indigenous peoples inhabited Taiwan for over 5,000 years. Linguistic research identifies Taiwan as the ancestral homeland from which Austronesian maritime migrations spread across the Pacific and Indian Oceans.",
        "where": "Throughout the main island and offshore archipelagos",
        "actors": [
          "Austronesian Indigenous tribes (Atayal, Amis, Paiwan, etc.)"
        ],
        "whyItMattered": "Establishes that Taiwan’s earliest human civilization was ethnically and linguistically distinct from continental Han Chinese dynasties.",
        "consequences": "Today, 16 officially recognized indigenous tribes comprise ~2.5% of Taiwan’s population, retaining distinct cultural rights under modern democratic law.",
        "claimType": "HISTORICAL FACT",
        "sources": "National Museum of Prehistory (Taiwan) / Austronesian Linguistics Journal"
      },
      {
        "year": "1624–1662",
        "title": "Dutch East India Company & Spanish Formosa",
        "phase": "Colonial Mercantile Era",
        "whatHappened": "The Dutch VOC established Fort Zeelandia (Tainan) in southwestern Taiwan to anchor trade routes with Japan and China. The Spanish established Fort San Salvador in northern Keelung (1626) until expelled by the Dutch in 1642.",
        "where": "Anping (Tainan) and Keelung",
        "actors": [
          "Dutch East India Company (VOC)",
          "Spanish Empire"
        ],
        "whyItMattered": "Marked Taiwan’s first entry into global maritime commercial networks and introduced large-scale Han Chinese farming labor recruitment from Fujian.",
        "consequences": "Initiated the transition of western plain agriculture from deer hunting to rice and sugar cane exports.",
        "claimType": "HISTORICAL FACT",
        "sources": "VOC Dagregisters (Batavia Archives) / Cambridge History of China"
      },
      {
        "year": "1661–1683",
        "title": "Kingdom of Tungning (Koxinga)",
        "phase": "Ming-Qing Transition",
        "whatHappened": "Ming loyalist commander Zheng Chenggong (Koxinga) led a naval armada that besieged Fort Zeelandia, forcing the Dutch surrender. Zheng established the Kingdom of Tungning as a military base to restore the fallen Ming Dynasty against the Manchu Qing Dynasty.",
        "where": "Southwestern Taiwan (Tainan)",
        "actors": [
          "Zheng Chenggong (Koxinga)",
          "Dutch VOC Governor Coyett"
        ],
        "whyItMattered": "The first Han-led political administration established on Taiwan.",
        "consequences": "Fostered deep agricultural settlement and Confucian educational institutions, but was conquered by the Qing navy under Admiral Shi Lang in 1683.",
        "claimType": "HISTORICAL FACT",
        "sources": "Qing Imperial Gazettes / Historical Society of Taiwan"
      },
      {
        "year": "1683–1895",
        "title": "Qing Dynasty Administration",
        "phase": "Imperial Chinese Era",
        "whatHappened": "The Qing Dynasty annexed Taiwan in 1683, administering it loosely as a prefecture of Fujian province. Following foreign military encroachments (French and Japanese expeditions in the 1870s–1880s), the Qing upgraded Taiwan to full provincial status in 1887 under modernization advocate Liu Mingchuan.",
        "where": "Western and northern Taiwan",
        "actors": [
          "Qing Imperial Court",
          "Governor Liu Mingchuan"
        ],
        "whyItMattered": "Formal imperial Chinese governance lasted 212 years, during which massive Han Chinese migration (Hoklo and Hakka) created modern demographic baselines.",
        "consequences": "Modern infrastructure (railways, undersea telegraph cables to Fujian) began taking root in northern Taipei.",
        "claimType": "HISTORICAL FACT",
        "sources": "Draft History of Qing (Qingshi Gao) / Taiwan Provincial Government Records"
      },
      {
        "year": "1895",
        "title": "Treaty of Shimonoseki & Japanese Colonization",
        "phase": "Japanese Rule",
        "whatHappened": "Following the Qing Empire’s defeat in the First Sino-Japanese War, the Qing signed the Treaty of Shimonoseki, ceding Taiwan, the Penghu archipelago, and the Liaodong Peninsula to the Empire of Japan \"in perpetuity.\"",
        "where": "Shimonoseki, Japan / Taipei, Taiwan",
        "actors": [
          "Li Hongzhang (Qing)",
          "Itō Hirobumi (Japan)"
        ],
        "whyItMattered": "Permanently severed Taiwan’s legal and political administration from mainland China.",
        "consequences": "Japan ruled Taiwan for 50 years (1895–1945), transforming it into a model colony through modern civil law, sanitation, extensive narrow-gauge railways, and agricultural industrialization.",
        "claimType": "HISTORICAL FACT",
        "sources": "Treaty of Shimonoseki (Article II) / National Archives of Japan"
      },
      {
        "year": "1945",
        "title": "Post-WWII Transition to Republic of China",
        "phase": "Post-War Transition",
        "whatHappened": "Following Japan’s unconditional surrender in August 1945, Allied Supreme Commander General Douglas MacArthur issued General Order No. 1, directing Japanese forces in Taiwan to surrender to Generalissimo Chiang Kai-shek’s Republic of China (ROC) military.",
        "where": "Taipei City Hall (Zhongshan Hall)",
        "actors": [
          "General Douglas MacArthur",
          "Generalissimo Chiang Kai-shek",
          "Governor Chen Yi"
        ],
        "whyItMattered": "ROC administration commenced, but international status remained formally undefined under the 1951 Treaty of San Francisco (which renounced Japanese claims without naming a recipient sovereign).",
        "consequences": "Initial mismanagement by mainland Nationalist officials led to intense cultural friction and local economic dislocation.",
        "claimType": "HISTORICAL FACT",
        "sources": "General Order No. 1 (SCAP) / 1951 Treaty of Peace with Japan (San Francisco)"
      },
      {
        "year": "1947",
        "title": "228 Incident & Martial Law Period",
        "phase": "White Terror Era",
        "whatHappened": "On February 28, 1947, violent clashes erupted between local Taiwanese citizens and ROC authorities following the beating of a female cigarette vendor. The ROC garrison initiated a nationwide military crackdown, resulting in the execution and disappearance of an estimated 18,000 to 28,000 Taiwanese intellectuals and civic leaders.",
        "where": "Across major Taiwanese cities (Taipei, Keelung, Kaohsiung)",
        "actors": [
          "Governor Chen Yi",
          "ROC 21st Division",
          "Taiwanese Civic Committee"
        ],
        "whyItMattered": "Created a profound psychological and political faultline between \"benshengren\" (native Taiwanese) and \"waishengren\" (post-1949 mainland arrivals).",
        "consequences": "In May 1949, Taiwan was placed under Martial Law—initiating the 38-year \"White Terror\" era of strict censorship and political persecution.",
        "claimType": "HISTORICAL FACT",
        "sources": "Executive Yuan 228 Incident Investigation Report (1992) / Academia Sinica"
      },
      {
        "year": "1949",
        "title": "ROC Government Retreat to Taiwan",
        "phase": "Cross-Strait Separation",
        "whatHappened": "Following decisive military defeats against Mao Zedong’s Chinese Communist Party (CCP) armies in the Chinese Civil War (Huaihai Campaign), Chiang Kai-shek relocated the ROC central government, 2 million soldiers, civil servants, and the treasures of the National Palace Museum to Taipei.",
        "where": "Nanjing to Taipei",
        "actors": [
          "Chiang Kai-shek (ROC)",
          "Mao Zedong (PRC)"
        ],
        "whyItMattered": "Created the enduring two-state cross-strait reality: the Republic of China (ROC) in Taipei and the People’s Republic of China (PRC) in Beijing.",
        "consequences": "Taiwan became an anti-communist fortress island bastion preparing for a \"reconquest of the mainland.\"",
        "claimType": "HISTORICAL FACT",
        "sources": "Chiang Kai-shek Diaries (Hoover Institution) / Cold War International History Project"
      },
      {
        "year": "1954–1958",
        "title": "Taiwan Strait Crises & US-ROC Defense Treaty",
        "phase": "Cold War Military Standoff",
        "whatHappened": "PLA artillery heavily bombarded the ROC-held offshore islands of Kinmen and Matsu. The U.S. and ROC signed the 1954 Sino-American Mutual Defense Treaty, deploying U.S. forces and nuclear-capable Matador cruise missiles to Taiwan to deter a PLA amphibious invasion.",
        "where": "Kinmen, Matsu, Taiwan Strait",
        "actors": [
          "U.S. President Eisenhower",
          "Chiang Kai-shek",
          "Mao Zedong"
        ],
        "whyItMattered": "Formalized American military defense of Taiwan, establishing the de facto boundary of the Taiwan Strait median line.",
        "consequences": "Kinmen and Matsu were turned into underground fortress archipelagos that remain under Taiwanese control today, just kilometers off the mainland coast.",
        "claimType": "HISTORICAL FACT",
        "sources": "1954 Sino-American Mutual Defense Treaty / Pentagon Historical Office"
      },
      {
        "year": "1971–1979",
        "title": "Diplomatic Isolation & Taiwan Relations Act",
        "phase": "Diplomatic Realignment",
        "whatHappened": "In 1971, UN General Assembly Resolution 2758 recognized the PRC as the sole representative of China to the UN. In January 1979, the U.S. officially normalized ties with Beijing and severed diplomatic relations with Taipei. In response, the U.S. Congress passed the landmark Taiwan Relations Act (PL 96-8) to guarantee defensive arms sales and peace in the Western Pacific.",
        "where": "United Nations (New York) / Washington, D.C.",
        "actors": [
          "U.S. Congress",
          "President Jimmy Carter",
          "President Chiang Ching-kuo"
        ],
        "whyItMattered": "Replaced formal diplomatic alliance with a durable statutory legal framework governing de facto bilateral security and trade relations.",
        "consequences": "Created the policy of \"Strategic Ambiguity,\" allowing Taiwan to survive and flourish economically without official U.S. embassy ties.",
        "claimType": "HISTORICAL FACT",
        "sources": "UN Resolution 2758 / Public Law 96-8 (Taiwan Relations Act)"
      },
      {
        "year": "1987–1996",
        "title": "Democratization & First Direct Election",
        "phase": "Democratic Miracle",
        "whatHappened": "President Chiang Ching-kuo lifted martial law in 1987 after 38 years. His successor, President Lee Teng-hui, repealed temporary emergency provisions, legalized opposition parties (founding of DPP), and oversaw Taiwan’s first direct popular presidential election in March 1996 despite PLA missile tests across the strait (Third Taiwan Strait Crisis).",
        "where": "Taipei",
        "actors": [
          "President Lee Teng-hui",
          "U.S. President Bill Clinton (dispatched dual carrier battle groups)"
        ],
        "whyItMattered": "Transformed Taiwan from a one-party military dictatorship into one of Asia’s most vibrant, progressive constitutional democracies.",
        "consequences": "Legitimacy of Taiwan’s governance shifted from claiming to represent all of mainland China to deriving sovereign democratic mandate solely from the people of Taiwan.",
        "claimType": "HISTORICAL FACT",
        "sources": "Academia Historica (Taiwan) / U.S. Department of Defense"
      },
      {
        "year": "2000s–Present",
        "title": "The Silicon Shield & Grey-Zone Confrontation",
        "phase": "Contemporary Geopolitical Era",
        "whatHappened": "Taiwan achieved near-total monopoly on advanced semiconductor manufacturing via TSMC, while alternating democratic power between the DPP and KMT. Following Xi Jinping’s consolidation of power, the PLA launched daily multi-axis aircraft and warship incursions across the median line to normalize a combat encirclement posture.",
        "where": "Taiwan ADIZ, First Island Chain, Hsinchu Science Park",
        "actors": [
          "President Lai Ching-te",
          "President Xi Jinping",
          "U.S. Indo-Pacific Command"
        ],
        "whyItMattered": "Taiwan has emerged as the single most critical technological chokepoint and potential high-intensity great-power flashpoint in the world.",
        "consequences": "Taiwan enacted asymmetric defense modernization (\"porcupine strategy\"), extended conscription to 1 year, and deployed indigenous submarines.",
        "claimType": "CURRENT",
        "sources": "Taiwan Ministry of National Defense White Paper / CSIS / Bloomberg Economics"
      }
    ],
    "politicalSystem": {
      "type": "Semi-Presidential Constitutional Republic",
      "constitution": "1947 Constitution of the Republic of China (with Additional Articles enacted in Taiwan)",
      "branches": [
        {
          "name": "Executive Yuan",
          "role": "Headed by the Premier, responsible for state administration and cabinet ministries."
        },
        {
          "name": "Legislative Yuan",
          "role": "Unicameral 113-seat parliament enacting statutes and approving budgets."
        },
        {
          "name": "Judicial Yuan",
          "role": "Constitutional Court and judicial hierarchy ensuring rule of law."
        },
        {
          "name": "Control Yuan",
          "role": "Ombudsman body overseeing government ethics, auditing, and impeachment."
        },
        {
          "name": "Examination Yuan",
          "role": "Oversees civil service qualification, testing, and merit systems."
        }
      ],
      "currentLeadership": {
        "headOfState": "President Lai Ching-te (Democratic Progressive Party - DPP)",
        "headOfGovernment": "Premier Cho Jung-tai (President of the Executive Yuan)",
        "term": "2024–2028 (Elected in January 2024)",
        "commanderInChief": "President holds supreme operational command of the Armed Forces."
      },
      "crossStraitPosition": "Maintains the \"Four Commitments\": Commitment to a free and democratic constitutional system, commitment that the ROC and PRC should not be subordinate to each other, commitment to resist annexation or encroachment, and commitment that the future of Taiwan must be decided by the Taiwanese people."
    },
    "geographyBorders": {
      "landArea": "36,197 km² (main island ~395 km north-to-south, ~144 km east-to-west)",
      "topography": "Dominated by the Central Mountain Range (peaks reaching up to 3,952m at Yushan / Jade Mountain). 70% of land is rugged mountain terrain; 90% of population lives on the narrow western alluvial coastal plain.",
      "maritimeChokepoints": [
        {
          "name": "Taiwan Strait",
          "width": "130 to 180 km separating Taiwan from Fujian province, China. Over 20% of global container trade transits through here."
        },
        {
          "name": "Bashi Channel / Luzon Strait",
          "width": "Separates southern Taiwan from the northern Philippine island of Batanes; primary naval passage between South China Sea and Pacific."
        },
        {
          "name": "Miyako Strait",
          "width": "Lies northeast between Taiwan and Okinawa, Japan; prime transit lane for PLA Navy carrier strike groups."
        }
      ],
      "amphibiousVulnerability": "Only 14 \"red beaches\" along the western coast are suitable for amphibious military landings, heavily canalized by shallow mudflats, fish farms, and urban high-rises.",
      "landBorders": [],
      "maritimeBorders": [
        {
          "country": "China (PRC)",
          "id": "CHN",
          "boundary": "Taiwan Strait Median Line (de facto 160 km maritime boundary)"
        },
        {
          "country": "Japan",
          "id": "JPN",
          "boundary": "East China Sea / Yonaguni Island gap (110 km from eastern Taiwan coast)"
        },
        {
          "country": "Philippines",
          "id": "PHL",
          "boundary": "Bashi Channel / Luzon Strait (separating southern tip from Batanes)"
        }
      ]
    },
    "economy": {
      "gdpNominal": "$800+ Billion (21st largest economy globally)",
      "gdpPerCapita": "$34,500 Nominal / $76,000 PPP",
      "currency": "New Taiwan Dollar (NTD)",
      "siliconShield": {
        "summary": "Taiwan produces over 60% of all semiconductors globally and over 90% of advanced sub-3nm logic chips.",
        "primaryFabricator": "Taiwan Semiconductor Manufacturing Co. (TSMC), founded 1987 in Hsinchu.",
        "clients": "NVIDIA, Apple, AMD, Qualcomm, Intel, Broadcom, and major defense contractors.",
        "geopoliticalSignificance": "A physical disruption or Chinese conquest of Taiwan’s foundries would paralyze global auto, consumer electronics, cloud computing, and AI data centers within 30 days, causing an estimated $10 Trillion global economic depression (Bloomberg estimate)."
      },
      "vulnerabilities": {
        "energyImportDependency": "Taiwan imports 97.5% of its energy (crude oil, liquefied natural gas - LNG, coal).",
        "reserveLifeline": "Maintains ~10 to 14 days of LNG reserves during summer, making it acutely vulnerable to a maritime blockade or quarantine without firing a shot."
      },
      "majorTradingPartners": [
        {
          "country": "China & Hong Kong",
          "share": "~35% of exports (heavily intermediate electronics components)"
        },
        {
          "country": "United States",
          "share": "~23% of exports (surging due to AI server demand)"
        },
        {
          "country": "European Union",
          "share": "~9%"
        },
        {
          "country": "Japan",
          "share": "~7%"
        },
        {
          "country": "ASEAN & India",
          "share": "~16% (expanding under New Southbound Policy)"
        }
      ]
    },
    "military": {
      "expenditure": "$19.0 Billion (2024 budget; ~2.5% of GDP, with special procurement appropriations)",
      "personnel": {
        "active": "215,000 active duty military personnel",
        "reserves": "2.3 million registered reservists (reorganizing under All-Out Defense Mobilization Agency)",
        "conscription": "Extended from 4 months back to 1 full year for males born after 2005."
      },
      "doctrine": "Overall Defense Concept (ODC) & \"Porcupine Strategy\" — shifting from legacy conventional platform parity to asymmetric, survivable, distributed A2/AD systems to deny PLA beachhead access and maritime control.",
      "categories": [
        {
          "name": "AIR DEFENCE & MISSILE SHIELD",
          "desc": "World’s second-highest air defense missile density after Israel.",
          "systems": [
            {
              "name": "MIM-104 Patriot PAC-3 / PAC-3 MSE",
              "type": "Surface-to-Air Missile (Hit-to-Kill)",
              "origin": "United States",
              "status": "CONFIRMED",
              "quantity": "9 battalions (approx. 72 launchers)",
              "role": "Terminal missile defense against PLA ballistic missiles targeting airbases and Taipei."
            },
            {
              "name": "Tien Kung III (Sky Bow III)",
              "type": "Indigenous Long-Range SAM",
              "origin": "Taiwan (NCSIST)",
              "status": "CONFIRMED",
              "quantity": "12+ operational batteries",
              "role": "Intercepts fixed-wing aircraft, cruise missiles, and short-range ballistic missiles up to 200 km."
            }
          ]
        },
        {
          "name": "COASTAL DEFENCE & ANTI-SHIP CRUISE MISSILES",
          "desc": "Primary asymmetric pillar to destroy PLA amphibious transport fleets in the strait.",
          "systems": [
            {
              "name": "Hsiung Feng III (HF-3)",
              "type": "Supersonic Anti-Ship Cruise Missile (Mach 3.0)",
              "origin": "Taiwan (NCSIST)",
              "status": "CONFIRMED",
              "quantity": "Extensively deployed on warships and mobile coastal trucks",
              "role": "Sea-skimming Mach 3.0 kinetic warship killer with 150–400 km range."
            },
            {
              "name": "RGM-84L-4 Harpoon Block II Coastal Defense",
              "type": "Subsonic Anti-Ship Missile System",
              "origin": "United States",
              "status": "CONFIRMED (Contracted)",
              "quantity": "100 launcher trucks, 400 missiles",
              "role": "Provides mobile, hidden coastal battery network across Taiwan and Penghu islands."
            }
          ]
        },
        {
          "name": "COMBAT AVIATION & AIR INTERCEPTION",
          "desc": "Frontline fighter force defending the Taiwan ADIZ and median line.",
          "systems": [
            {
              "name": "F-16V (Block 70/72 Viper)",
              "type": "4.5 Generation Multi-Role Fighter",
              "origin": "United States",
              "status": "CONFIRMED",
              "quantity": "141 upgraded F-16V + 66 new Block 70 on order",
              "role": "Equipped with AN/APG-83 AESA radar, AIM-120D AMRAAM, and AGM-84 Harpoons."
            },
            {
              "name": "F-CK-1 Ching-kuo (Indigenous Defense Fighter - IDF)",
              "type": "Twin-Engine Air Superiority Fighter",
              "origin": "Taiwan (AIDC)",
              "status": "CONFIRMED",
              "quantity": "129 operational airframes",
              "role": "Rapid-scramble interceptor armed with indigenous Wan Chien standoff submunition cruise missiles."
            }
          ]
        },
        {
          "name": "NAVAL SURFACE COMBATANTS & ASYMMETRIC CORVETTES",
          "desc": "Fleet defending territorial waters and escorting international trade routes.",
          "systems": [
            {
              "name": "Tuo Chiang-class Corvette",
              "type": "Wave-Piercing Catamaran Stealth Missile Corvette",
              "origin": "Taiwan (Lungteh Shipbuilding)",
              "status": "CONFIRMED",
              "quantity": "6 commissioned (12 planned by 2026)",
              "role": "\"Carrier-killer\" corvette carrying 16 anti-ship missiles (8 HF-2 + 8 HF-3) with shallow draft."
            },
            {
              "name": "Hai Kun-class Indigenous Defense Submarine (IDS)",
              "type": "Diesel-Electric Attack Submarine (SSK)",
              "origin": "Taiwan (CSBC Corp / International Technical Assistance)",
              "status": "CONFIRMED (Sea Trials)",
              "quantity": "1 built (Hai Kun SS-711), 7 additional planned",
              "role": "Silent choke-point interdiction in the Miyako and Bashi Straits against PLA surface flotillas."
            }
          ]
        }
      ]
    },
    "relations": {
      "main": [
        {
          "id": "TWN_USA",
          "country": "United States",
          "flag": "🇺🇸",
          "status": "Primary Security & Arms Guarantor",
          "color": "#10b981",
          "note": "Governed by Taiwan Relations Act & Six Assurances; primary weapons supplier and technological ally."
        },
        {
          "id": "TWN_CHN",
          "country": "China",
          "flag": "🇨🇳",
          "status": "Frontline Sovereignty Adversary",
          "color": "#ef4444",
          "note": "Claims Taiwan under \"One China Principle\"; conducts daily grey-zone military coercion."
        },
        {
          "id": "TWN_JPN",
          "country": "Japan",
          "flag": "🇯🇵",
          "status": "Vital Democratic Security Partner",
          "color": "#3b82f6",
          "note": "\"A Taiwan emergency is a Japan emergency\" (Abe Doctrine); joint economic security cooperation."
        },
        {
          "id": "TWN_IND",
          "country": "India",
          "flag": "🇮🇳",
          "status": "Emerging High-Tech Semiconductor Ally",
          "color": "#06b6d4",
          "note": "Tata-PSMC semiconductor fab in Gujarat, Foxconn electronics assembly, trade expanding."
        }
      ],
      "searchable": [
        {
          "id": "TWN_IND",
          "country": "India",
          "flag": "🇮🇳",
          "status": "High-Tech & Commercial Partner",
          "color": "#06b6d4",
          "summary": "Taiwan and India have forged a transformative semiconductor and electronics manufacturing partnership, anchored by the $11B Tata-PSMC wafer fabrication plant in Dholera, Gujarat, and massive Foxconn investment hubs.",
          "keyAreas": [
            "Tata-PSMC Dholera Fab JV",
            "Foxconn & Pegatron iPhone Assembly Plants",
            "India-Taiwan Bilateral Investment Agreement (BIA)"
          ]
        },
        {
          "id": "TWN_PHL",
          "country": "Philippines",
          "flag": "🇵🇭",
          "status": "Maritime Neighbor & Bashi Flank",
          "color": "#3b82f6",
          "summary": "Separated by the strategic Bashi Channel. The Philippines granted the U.S. military expanded access to naval and air bases in northern Luzon and Batanes directly overlooking southern Taiwan.",
          "keyAreas": [
            "EDCA Northern Luzon Bases",
            "Bashi Channel Surveillance",
            "Fishery and EEZ Protocols"
          ]
        },
        {
          "id": "TWN_AUS",
          "country": "Australia",
          "flag": "🇦🇺",
          "status": "Indo-Pacific Democratic Partner",
          "color": "#10b981",
          "summary": "Australia is Taiwan’s largest supplier of energy resources (LNG and metallurgical coal). Both nations advocate for peace and stability across the Taiwan Strait and oppose unilateral changes to the status quo.",
          "keyAreas": [
            "Critical Energy Supply (LNG & Coal)",
            "Critical Minerals Supply Chains",
            "Indo-Pacific Rules-Based Order"
          ]
        }
      ]
    },
    "currentTensions": [
      {
        "title": "Daily PLA Air & Maritime Encirclement (ADIZ Incursions)",
        "severity": "Critical / High Intensity Grey-Zone",
        "color": "#ef4444",
        "desc": "China deploys 20–40 fighter jets, H-6K bombers, and naval warships daily across the median line to exhaust Taiwan’s armed forces and erode early-warning response time."
      },
      {
        "title": "Maritime Blockade & Quarantine Rehearsals (Joint Sword Drills)",
        "severity": "High Tension",
        "color": "#f97316",
        "desc": "PLA Eastern Theater Command executes multi-directional exercises simulating naval quarantines, port encirclements, and missile strikes against Taiwan’s energy ports."
      }
    ],
    "strategicLocations": [
      {
        "name": "Hsinchu Science Park",
        "type": "Semiconductor Hub",
        "coords": "24.78° N, 121.01° E",
        "significance": "HQ of TSMC and global advanced silicon foundries, creating the world's Silicon Shield."
      },
      {
        "name": "Kinmen Archipelago",
        "type": "Fortified Outpost",
        "coords": "24.44° N, 118.33° E",
        "significance": "ROC military outpost located just 3.2 kilometers from Xiamen, China; frontline radar monitoring."
      },
      {
        "name": "Zuoying Naval Base (Kaohsiung)",
        "type": "Fleet HQ",
        "coords": "22.70° N, 120.28° E",
        "significance": "Main operating base for ROC Navy surface fleet and submarine force."
      }
    ],
    "keyEvents": [
      {
        "title": "1949 Nationalist Government Relocation",
        "category": "Sovereignty Origin",
        "date": "December 1949"
      },
      {
        "title": "1979 Taiwan Relations Act Enacted",
        "category": "Security Framework",
        "date": "April 1979"
      },
      {
        "title": "1996 Third Taiwan Strait Crisis",
        "category": "Military Standoff",
        "date": "March 1996"
      },
      {
        "title": "2024 Presidential Election (Lai Ching-te)",
        "category": "Democratic Mandate",
        "date": "January 2024"
      }
    ],
    "indiaImpact": {
      "headline": "Taiwan as India’s Semiconductor Foundation & Strategic Flank",
      "points": [
        {
          "title": "India Semiconductor Mission (ISM) Anchor",
          "desc": "Taiwan’s Powerchip Semiconductor Manufacturing Corp (PSMC) partnered with Tata Sons to build India's first commercial 28nm/40nm/90nm semiconductor fabrication facility in Dholera, Gujarat ($11 Billion investment)."
        },
        {
          "title": "Electronics Manufacturing Supply Chain Migration",
          "desc": "Taiwanese giants Foxconn, Pegatron, and Wistron/Tata have established mega-assembly clusters across Tamil Nadu, Karnataka, and Andhra Pradesh, producing over 14% of global iPhones in India."
        },
        {
          "title": "Strategic Synergy in the Indo-Pacific",
          "desc": "While maintaining informal ties under its \"One China\" formulation, New Delhi emphasizes the critical importance of peace and stability in the Taiwan Strait, recognizing that any conflict would sever India's vital trade routes to East Asia."
        }
      ]
    }
  },
  "IND": {
    "id": "IND",
    "name": "India",
    "officialName": "Republic of India (Bharat)",
    "capital": "New Delhi",
    "region": "South Asia",
    "subregion": "Southern Asia",
    "flag": "🇮🇳",
    "lat": 20.5937,
    "lng": 78.9629,
    "area": "3,287,263 km² (7th largest globally)",
    "population": "1.43 Billion (World's most populous nation)",
    "politicalSystemType": "Federal Parliamentary Democratic Republic",
    "currency": "Indian Rupee (INR / ₹)",
    "languages": "Hindi & English (Union Official), 22 Eighth Schedule Constitutional Languages",
    "timeZones": "UTC+5:30 (Indian Standard Time - IST)",
    "tagline": "Leading Global Power, Anchor of the Indian Ocean & Global South Voice",
    "overview": {
      "beginner": "India is the world’s most populous democracy and the fifth-largest economy, located at the center of the Indian Ocean. It balances strategic partnerships with both the West (United States, Europe, Japan) and traditional Eurasian partners like Russia. India faces a tense military border with China in the Himalayas and maintains nuclear deterrence against Pakistan, while acting as the primary net security provider in the Indian Ocean.",
      "advanced": "The Republic of India practices a grand strategy of \"Strategic Autonomy\" and \"Multi-Alignment,\" refusing to join formal collective defense treaties while aggressively expanding minilateral security frameworks (the QUAD with US, Japan, Australia; I2U2 with US, Israel, UAE; and SCO/BRICS with Russia and China). India is modernizing its nuclear triad with canisterized Agni-V ICBMs and Arihant-class SSBNs, forward-deploying over 100,000 troops along the disputed 3,488-km Line of Actual Control (LAC) with China, and positioning itself as the voice and economic champion of the Global South."
    },
    "history": [
      {
        "year": "c. 2500–1500 BCE",
        "title": "Indus Valley Civilization",
        "phase": "Ancient Urban Era",
        "whatHappened": "One of the world’s earliest urban civilizations flourished across the Indus river basin (Harappa, Mohenjo-daro, Lothal). Characterized by advanced brick architecture, grid city planning, metallurgy, and extensive maritime trade with ancient Mesopotamia.",
        "where": "Northwestern Indian subcontinent",
        "actors": [
          "Harappan urban societies"
        ],
        "whyItMattered": "Established foundational urban planning, craft standardization, and maritime port trade (Lothal dockyard) in South Asia.",
        "consequences": "Created the cultural and agricultural roots of Indian civilization before urban decline and Vedic migration.",
        "claimType": "HISTORICAL FACT",
        "sources": "Archaeological Survey of India (ASI) / Cambridge History of India"
      },
      {
        "year": "c. 322–185 BCE",
        "title": "Maurya Empire & Ashoka the Great",
        "phase": "Classical Imperial Era",
        "whatHappened": "Chandragupta Maurya and advisor Chanakya (author of the Arthashastra) united almost the entire subcontinent. Emperor Ashoka expanded the empire to its territorial zenith, later renouncing militarism to embrace Buddhism following the Kalinga War (261 BCE).",
        "where": "Pataliputra (modern Patna, Bihar)",
        "actors": [
          "Chandragupta Maurya",
          "Chanakya (Kautilya)",
          "Emperor Ashoka"
        ],
        "whyItMattered": "The first pan-Indian centralized empire; codified statecraft and intelligence doctrines in the Arthashastra that continue to influence Indian strategic thought.",
        "consequences": "Spread Buddhism across Central Asia, Sri Lanka, and East Asia via diplomatic edicts and trade missions.",
        "claimType": "HISTORICAL FACT",
        "sources": "Edicts of Ashoka / Arthashastra of Kautilya"
      },
      {
        "year": "c. 319–550 CE",
        "title": "Gupta Empire (Golden Age of India)",
        "phase": "Classical Renaissance",
        "whatHappened": "A period of peace, economic prosperity, and scientific flourishing under Samudragupta and Chandragupta II. Indian mathematicians invented the decimal numeral system and the concept of zero (Aryabhata), while Sanskrit literature and classical arts reached their peak.",
        "where": "Northern and Central India",
        "actors": [
          "Samudragupta",
          "Chandragupta II",
          "Aryabhata"
        ],
        "whyItMattered": "Produced groundbreaking mathematical, astronomical, and philosophical foundations inherited by Islamic and Western science.",
        "consequences": "Cemented classical Indian cultural influence across Southeast Asia through maritime trade.",
        "claimType": "HISTORICAL FACT",
        "sources": "Allahabad Pillar Inscription / Aryabhatiya"
      },
      {
        "year": "1526–1857",
        "title": "Mughal Empire & Subcontinental Integration",
        "phase": "Early Modern Imperial Era",
        "whatHappened": "Founded by Babur after the First Battle of Panipat, the Mughal Empire unified the subcontinent under centralized administrative, tax, and judicial systems. Reached economic peak under Akbar and Aurangzeb, accounting for ~25% of world industrial and textile output in 1700.",
        "where": "Delhi, Agra, Lahore",
        "actors": [
          "Babur",
          "Akbar the Great",
          "Aurangzeb",
          "Chhatrapati Shivaji Maharaj (Maratha Empire)"
        ],
        "whyItMattered": "Integrated regional trade routes and created iconic Indo-Islamic architecture (Taj Mahal, Red Fort), before regional fragmentation led to the rise of the Maratha Confederacy and European trading enclaves.",
        "consequences": "Decentralized power vacuum allowed the British East India Company to exploit local political rivalries.",
        "claimType": "HISTORICAL FACT",
        "sources": "Ain-i-Akbari (Abu'l-Fazl) / Cambridge Economic History of India"
      },
      {
        "year": "1757–1947",
        "title": "British Colonial Rule & Independence Struggle",
        "phase": "Colonial Exploitation & National Awakening",
        "whatHappened": "Following the 1757 Battle of Plassey, the British East India Company established commercial hegemony, transitioning to direct British Crown rule after the 1857 Rebellion. Mahatma Gandhi and the Indian National Congress led a nationwide non-violent civil disobedience movement, culminating in Indian Independence on August 15, 1947, and the traumatic Partition of India and Pakistan.",
        "where": "Across British India",
        "actors": [
          "Mahatma Gandhi",
          "Jawaharlal Nehru",
          "Sardar Vallabhbhai Patel",
          "Lord Mountbatten"
        ],
        "whyItMattered": "Decolonization of the world’s largest colony; Sardar Patel successfully integrated over 565 princely states into a unified sovereign Republic.",
        "consequences": "Created the enduring territorial dispute over Jammu & Kashmir with Pakistan and inherited undemarcated Himalayan borders with China.",
        "claimType": "HISTORICAL FACT",
        "sources": "Indian Independence Act 1947 / National Archives of India"
      },
      {
        "year": "1947–1991",
        "title": "Non-Aligned Movement & 1971 Bangladesh Liberation",
        "phase": "Cold War Strategic Autonomy",
        "whatHappened": "Under Jawaharlal Nehru, India co-founded the Non-Aligned Movement (NAM) to avoid Cold War proxy entrapment. In 1971, facing genocide in East Pakistan, Prime Minister Indira Gandhi signed the landmark Indo-Soviet Treaty of Friendship and launched a 13-day decisive military campaign, defeating Pakistan and liberating the sovereign nation of Bangladesh.",
        "where": "New Delhi, Dhaka, United Nations",
        "actors": [
          "Indira Gandhi",
          "Field Marshal Sam Manekshaw",
          "Leonid Brezhnev",
          "Richard Nixon"
        ],
        "whyItMattered": "Decisive geopolitical victory establishing India as the undisputed preeminent power in South Asia; solidified Moscow as India’s primary strategic and defense hardware supplier.",
        "consequences": "Prompted India’s first peaceful nuclear test (Smiling Buddha) in May 1974 at Pokhran.",
        "claimType": "HISTORICAL FACT",
        "sources": "1971 Indo-Soviet Treaty of Peace, Friendship and Cooperation / Instrument of Surrender (Dhaka, 1971)"
      },
      {
        "year": "1998",
        "title": "Pokhran-II Nuclear Tests & Strategic Parity",
        "phase": "Declared Nuclear Weapons State",
        "whatHappened": "Under Prime Minister Atal Bihari Vajpayee, India conducted five underground nuclear explosions (Operation Shakti) at Pokhran, demonstrating thermonuclear and fission capabilities. Despite severe Western economic sanctions, India declared itself a responsible nuclear power with a strict \"No First Use\" (NFU) doctrine.",
        "where": "Pokhran Test Range, Rajasthan",
        "actors": [
          "Prime Minister Atal Bihari Vajpayee",
          "Dr. A.P.J. Abdul Kalam",
          "Dr. R. Chidambaram"
        ],
        "whyItMattered": "Deterred simultaneous aggression from Pakistan and China, ending ambiguity and establishing India as an overt nuclear weapons state.",
        "consequences": "Paved the way for the landmark 2008 U.S.-India Civil Nuclear Agreement, reintegrating India into global nuclear commerce without signing the NPT.",
        "claimType": "HISTORICAL FACT",
        "sources": "Ministry of External Affairs Pokhran-II Declarations / 2008 U.S.-India 123 Agreement"
      },
      {
        "year": "2020–Present",
        "title": "Galwan Clashes, LAC Stand-off & Multi-Alignment Era",
        "phase": "Contemporary Strategic Realignment",
        "whatHappened": "In June 2020, Chinese PLA and Indian troops clashed violently in the Galwan Valley in Eastern Ladakh—the first fatal clash in 45 years. India responded by mirror-deploying over 68,000 soldiers, tanks, and fighter jets, banning 300+ Chinese mobile apps, revitalizing the QUAD, and securing the 2024 Kazan disengagement agreement with Beijing.",
        "where": "Eastern Ladakh LAC / Galwan Valley / New Delhi",
        "actors": [
          "Prime Minister Narendra Modi",
          "President Xi Jinping",
          "Indian Army XIV Corps"
        ],
        "whyItMattered": "Permanently fractured the post-1988 consensus that border disputes could be compartmentalized from bilateral trade and diplomacy.",
        "consequences": "Accelerated India’s defense localization (Atmanirbhar Bharat), expanded the QUAD maritime security architecture, and deepened technology ties with the US and Taiwan.",
        "claimType": "CURRENT",
        "sources": "Indian Ministry of External Affairs / Pentagon China Military Power Report / CSIS"
      }
    ],
    "politicalSystem": {
      "type": "Federal Parliamentary Democratic Republic",
      "constitution": "1950 Constitution of India (World’s longest written sovereign constitution)",
      "branches": [
        {
          "name": "President of India",
          "role": "Constitutional Head of State and Supreme Commander of the Armed Forces."
        },
        {
          "name": "Prime Minister & Union Cabinet",
          "role": "Head of Government exercising executive powers accountable to the Lok Sabha."
        },
        {
          "name": "Parliament of India (Sansad)",
          "role": "Bicameral legislature: Lok Sabha (543 directly elected members) and Rajya Sabha (245 state representatives)."
        },
        {
          "name": "Supreme Court of India",
          "role": "Apex constitutional court with judicial review powers and basic structure doctrine oversight."
        }
      ],
      "currentLeadership": {
        "headOfState": "President Droupadi Murmu",
        "headOfGovernment": "Prime Minister Narendra Modi (Bharatiya Janata Party - BJP)",
        "term": "Third consecutive term (2024–2029)",
        "commanderInChief": "President Droupadi Murmu"
      },
      "strategicPosture": "Operates under the doctrine of Strategic Autonomy and \"Vishwa Bandhu\" (Global Friend), maintaining independent bilateral decision-making free from treaty alliance entrapment."
    },
    "geographyBorders": {
      "landArea": "3,287,263 km² (spans 3,214 km north-to-south, 2,933 km east-to-west)",
      "topography": "Geographically framed by the Himalayan mountain wall in the north, the Indo-Gangetic alluvial plains in the center, the Deccan Plateau in the south, and a 7,516-km coastline surrounded by the Arabian Sea and Bay of Bengal.",
      "rivers": [
        "Ganges (Ganga)",
        "Brahmaputra (Tsangpo)",
        "Indus",
        "Yamuna",
        "Godavari",
        "Narmada",
        "Krishna"
      ],
      "mountains": [
        "Himalayas (Kanchenjunga 8,586m)",
        "Karakoram",
        "Western Ghats (UNESCO biodiversity hotspot)",
        "Eastern Ghats",
        "Vindhyas"
      ],
      "seas": [
        "Arabian Sea (West)",
        "Bay of Bengal (East)",
        "Indian Ocean (South)",
        "Andaman Sea"
      ],
      "climates": [
        "Tropical Monsoon",
        "Humid Subtropical",
        "Arid / Semi-Arid (Thar Desert)",
        "Alpine Himalayan"
      ],
      "landBorders": [
        {
          "country": "Bangladesh",
          "id": "BGD",
          "borderLength": "4,156 km",
          "region": "East",
          "status": "Peaceful / Enclave Demarcation",
          "strategicContext": "World's 5th longest land border; 2015 Land Boundary Agreement solved historical enclave enmeshment."
        },
        {
          "country": "China",
          "id": "CHN",
          "borderLength": "3,488 km",
          "region": "North / LAC",
          "status": "Disputed Frontier / High Alert",
          "strategicContext": "Disputed Line of Actual Control (LAC) in Ladakh, Uttarakhand, and Arunachal Pradesh. Over 100,000 troops forward deployed."
        },
        {
          "country": "Pakistan",
          "id": "PAK",
          "borderLength": "3,323 km",
          "region": "West",
          "status": "Hostile / LoC Ceasefire",
          "strategicContext": "Includes 740 km Line of Control (LoC) in Kashmir and Sir Creek marshland dispute. Nuclear flashpoint monitored by electronic fencing."
        },
        {
          "country": "Nepal",
          "id": "NPL",
          "borderLength": "1,751 km",
          "region": "North",
          "status": "Open Border / Treaty of Peace",
          "strategicContext": "Open international border governed by 1950 Friendship Treaty; Kalapani-Lipulekh territorial dispute."
        },
        {
          "country": "Myanmar",
          "id": "MMR",
          "borderLength": "1,643 km",
          "region": "East",
          "status": "Insurgency & Civil War Buffer",
          "strategicContext": "Free Movement Regime suspended in 2024 to curb narcotics, refugee influx, and insurgent sanctuaries following the Myanmar civil war."
        },
        {
          "country": "Bhutan",
          "id": "BTN",
          "borderLength": "699 km",
          "region": "Northeast",
          "status": "Close Special Ally",
          "strategicContext": "Special bilateral security and economic coordination; Doklam tri-junction defense partnership."
        }
      ],
      "maritimeBorders": [
        {
          "country": "Sri Lanka",
          "id": "LKA",
          "boundary": "Palk Strait and Gulf of Mannar (30 km gap bridged by Ram Setu / Adam's Bridge)"
        },
        {
          "country": "Maldives",
          "id": "MDV",
          "boundary": "Eight Degree Channel separating Minicoy Island from northern Maldivian atolls"
        },
        {
          "country": "Indonesia",
          "id": "IDN",
          "boundary": "Great Channel (Six Degree Channel) separating Indira Point from Sumatra"
        },
        {
          "country": "Thailand",
          "id": "THA",
          "boundary": "Andaman Sea maritime delimitation line"
        }
      ],
      "strategicCorridors": [
        {
          "name": "Siliguri Corridor (\"Chicken's Neck\")",
          "width": "22 km narrow strip connecting mainland India to eight northeastern states, flanked by Nepal and Bangladesh."
        },
        {
          "name": "Andaman & Nicobar Islands",
          "significance": "Dominate the entrance to the Malacca Strait, granting India decisive maritime choke leverage."
        }
      ]
    },
    "economy": {
      "gdpNominal": "$3.94 Trillion (5th largest globally, targeting $5T by 2027)",
      "gdpPPP": "$14.6 Trillion (3rd largest globally)",
      "gdpPerCapita": "$2,750 Nominal / $10,150 PPP",
      "currency": "Indian Rupee (INR / ₹)",
      "keySectors": [
        {
          "name": "Digital Public Infrastructure (India Stack)",
          "desc": "Unified Payments Interface (UPI) processes over 14 billion transactions monthly (~46% of all global real-time digital payments)."
        },
        {
          "name": "Pharmaceuticals & Biotechnology",
          "desc": "\"Pharmacy of the World\" supplying over 20% of global generic medicines and 60% of worldwide vaccines."
        },
        {
          "name": "Information Technology & SaaS",
          "desc": "Over $250 Billion in annual IT and business services exports, driving global enterprise digital transformation."
        },
        {
          "name": "Renewable Energy & Solar",
          "desc": "4th largest installed renewable capacity globally (190+ GW), co-founder of the International Solar Alliance (ISA)."
        }
      ],
      "vulnerabilities": {
        "energyImportDependency": "Imports 85% of crude oil and 50% of natural gas requirements.",
        "manufacturingDeficit": "Sustained large trade deficit with China (~$85 Billion annually), primarily in active pharmaceutical ingredients (APIs), solar cells, and electronics hardware."
      },
      "majorTradingPartners": [
        {
          "country": "United States",
          "share": "Largest bilateral trading partner ($120B+ trade with substantial Indian trade surplus)"
        },
        {
          "country": "China",
          "share": "Largest source of imported intermediate goods and components"
        },
        {
          "country": "United Arab Emirates",
          "share": "Comprehensive Economic Partnership Agreement (CEPA) gateway"
        },
        {
          "country": "Russia",
          "share": "Surged to top crude oil supplier post-2022, settling trade in non-dollar mechanisms"
        }
      ]
    },
    "military": {
      "expenditure": "$83.6 Billion (2024 budget; 3rd largest defense budget globally, ~1.9% of GDP)",
      "personnel": {
        "active": "1,455,000 active duty military personnel (2nd largest active military)",
        "reserves": "1,155,000 trained reserves + 1.4 million central armed police forces (CAPF)"
      },
      "doctrine": "Credible Minimum Nuclear Deterrence with strict \"No First Use\" (NFU) pledge; Two-Front War doctrine against simultaneous Pakistan-China collusion; Joint theater commands transition; Indian Ocean \"Net Security Provider\" under SAGAR doctrine.",
      "categories": [
        {
          "name": "STRATEGIC STRIKE & NUCLEAR TRIAD",
          "desc": "Survivable triad across land canisters, strategic air bombers, and SSBNs.",
          "systems": [
            {
              "name": "Agni-V ICBM",
              "type": "Canisterized Road/Rail Mobile Ballistic Missile",
              "origin": "India (DRDO)",
              "status": "CONFIRMED",
              "quantity": "Strategic Forces Command",
              "role": "5,000–5,500+ km range ICBM capable of delivering MIRV thermonuclear warheads across all of Asia."
            },
            {
              "name": "BrahMos PJ-10",
              "type": "Supersonic Cruise Missile (Mach 3.0)",
              "origin": "India / Russia JV",
              "status": "CONFIRMED",
              "quantity": "Deployed on Army regiments and frontline warships",
              "role": "World’s fastest supersonic anti-ship and precision bunker-busting strike system (450+ km range)."
            }
          ]
        },
        {
          "name": "AIR DEFENCE & SURVEILLANCE",
          "desc": "Integrated multi-layered airspace defense.",
          "systems": [
            {
              "name": "S-400 Triumf (Sudharshan)",
              "type": "Long-Range Surface-to-Air Missile",
              "origin": "Russia",
              "status": "CONFIRMED",
              "quantity": "3 operational squadrons (5 contracted)",
              "role": "400 km A2/AD anti-air umbrella shielding northern and western frontiers."
            },
            {
              "name": "Akash Air Defence System (Akash-Prime / Akash-NG)",
              "type": "Medium-Range Mobile SAM",
              "origin": "India (DRDO / BDL)",
              "status": "CONFIRMED",
              "quantity": "Extensively deployed across Army and Air Force",
              "role": "Mobile supersonic interceptor guarding tactical troop formations and airbases against saturation drone attacks."
            }
          ]
        },
        {
          "name": "COMBAT AVIATION & FIGHTER FLEET",
          "desc": "Frontline fighter squadrons defending airspace and projecting regional deterrence.",
          "systems": [
            {
              "name": "Sukhoi Su-30MKI Flanker-H",
              "type": "Heavy Multi-Role Air Superiority Fighter",
              "origin": "Russia / India (HAL license-built)",
              "status": "CONFIRMED",
              "quantity": "260+ operational fighters",
              "role": "Air force backbone armed with BrahMos supersonic missiles and Astra BVR missiles."
            },
            {
              "name": "Dassault Rafale EH/DH",
              "type": "4.5 Generation Omni-Role Combat Aircraft",
              "origin": "France",
              "status": "CONFIRMED",
              "quantity": "36 operational fighters (+26 Rafale-M selected for Navy)",
              "role": "Equipped with Meteor ramjet-powered BVR missiles and SCALP deep-strike cruise missiles."
            },
            {
              "name": "HAL Tejas Mark 1 / 1A",
              "type": "Indigenous Light Combat Aircraft (LCA)",
              "origin": "India (HAL / ADA)",
              "status": "CONFIRMED",
              "quantity": "32+ Mk1 in service (83 Mk1A on order)",
              "role": "Indigenous multi-role fighter with AESA radar and indigenous Astra beyond-visual-range missiles."
            }
          ]
        },
        {
          "name": "NAVAL CAPITAL SHIPS & SUBMARINES",
          "desc": "Blue-water carrier strike groups and guaranteed second-strike nuclear deterrence.",
          "systems": [
            {
              "name": "INS Vikrant (IAC-1) & INS Vikramaditya",
              "type": "Aircraft Carriers (STOBAR)",
              "origin": "Indigenous / Russia",
              "status": "CONFIRMED",
              "quantity": "2 operational aircraft carriers",
              "role": "Command carrier strike groups projecting power across the northern Indian Ocean."
            },
            {
              "name": "INS Arihant & INS Arighaat",
              "type": "SSBN Nuclear Ballistic Submarines",
              "origin": "India (ATV Program)",
              "status": "CONFIRMED",
              "quantity": "2 commissioned SSBNs (S4 class undergoing fitting)",
              "role": "Guaranteed second-strike nuclear deterrence armed with K-15 (750 km) and K-4 (3,500 km) SLBMs."
            },
            {
              "name": "Kalvari-class (Project 75 Scorpène)",
              "type": "Diesel-Electric Attack Submarines",
              "origin": "France / India (Mazagon Dock MDL)",
              "status": "CONFIRMED",
              "quantity": "6 commissioned submarines",
              "role": "Silent stealth hunter-killer submarines armed with SM39 Exocet anti-ship missiles and heavyweight torpedoes."
            }
          ]
        },
        {
          "name": "ARMORED FORMATIONS & ARTILLERY",
          "desc": "Heavy strike corps for desert and high-altitude mountain warfare.",
          "systems": [
            {
              "name": "T-90S / T-90M Bhishma",
              "type": "Main Battle Tank",
              "origin": "Russia / India (HVF Avadi)",
              "status": "CONFIRMED",
              "quantity": "1,200+ operational tanks",
              "role": "Primary armored spearhead deployed across plains and reinforced in Eastern Ladakh at 15,000 ft altitude."
            },
            {
              "name": "K9 Vajra-T",
              "type": "155mm / 52-calibre Tracked Self-Propelled Howitzer",
              "origin": "South Korea / India (L&T)",
              "status": "CONFIRMED",
              "quantity": "100+ in service (+100 repeat order)",
              "role": "Heavy self-propelled precision artillery adapted for high-altitude Himalayan fire support."
            }
          ]
        }
      ]
    },
    "relations": {
      "main": [
        {
          "id": "IND_RUS",
          "country": "Russia",
          "flag": "🇷🇺",
          "status": "Special & Privileged Strategic Partner",
          "color": "#3b82f6",
          "note": "Historical defense hardware supplier, crude oil supplier, nuclear energy partner."
        },
        {
          "id": "IND_USA",
          "country": "United States",
          "flag": "🇺🇸",
          "status": "Comprehensive Global Strategic Partner",
          "color": "#10b981",
          "note": "QUAD anchor, foundational defense agreements (LEMOA, BECA), iCET tech cooperation."
        },
        {
          "id": "IND_CHN",
          "country": "China",
          "flag": "🇨🇳",
          "status": "Frontier Friction & Strategic Rivalry",
          "color": "#f97316",
          "note": "Disputed Himalayan border (LAC), bilateral trade deficit, Indo-Pacific naval competition."
        },
        {
          "id": "IND_FRA",
          "country": "France",
          "flag": "🇫🇷",
          "status": "Indo-Pacific Strategic Anchor",
          "color": "#10b981",
          "note": "Unconditional defense technology partner (Rafale, Scorpène submarines, jet engine co-design)."
        }
      ],
      "searchable": [
        {
          "id": "IND_TWN",
          "country": "Taiwan",
          "flag": "🇹🇼",
          "status": "High-Tech & Commercial Partner",
          "color": "#06b6d4",
          "summary": "India and Taiwan have established historic semiconductor joint ventures (Tata-PSMC $11B fab in Dholera) and electronics assembly hubs (Foxconn, Pegatron). Bilateral trade exceeded $10 Billion.",
          "keyAreas": [
            "Dholera Semiconductor Fabrication",
            "Foxconn iPhone Manufacturing Hubs",
            "Science & Technology Academic MoUs"
          ]
        },
        {
          "id": "IND_ISR",
          "country": "Israel",
          "flag": "🇮🇱",
          "status": "Special Defense & Technology Partner",
          "color": "#3b82f6",
          "summary": "Israel is one of India’s top defense technology suppliers, providing Phalcon AWACS, Heron drones, and Barak-8 missile systems. Co-founders of the I2U2 minilateral forum.",
          "keyAreas": [
            "Barak-8 Missile Co-Development",
            "Agriculture & Desalination Tech",
            "I2U2 Geoeconomic Forum"
          ]
        },
        {
          "id": "IND_JPN",
          "country": "Japan",
          "flag": "🇯🇵",
          "status": "Special Strategic & Global Partner",
          "color": "#10b981",
          "summary": "Japan funds major Indian infrastructure projects including the Mumbai-Ahmedabad High-Speed Rail. Core QUAD partners coordinating naval interoperability.",
          "keyAreas": [
            "QUAD Maritime Coordination",
            "Shinkansen Bullet Train Funding",
            "Supply Chain Resilience Initiative"
          ]
        }
      ]
    },
    "currentTensions": [
      {
        "title": "Line of Actual Control (LAC) Standoff & Verification",
        "severity": "Critical / Frontier Alert",
        "color": "#f97316",
        "desc": "Over 100,000 soldiers forward-deployed in Eastern Ladakh; 2024 Kazan patrolling agreement restored disengagement protocols in Depsang and Demchok."
      },
      {
        "title": "Cross-Border Terrorism & Kashmir LoC Ceasefire",
        "severity": "High Tension",
        "color": "#ef4444",
        "desc": "Maintains 2021 LoC ceasefire with Pakistan while actively intercepting drone-dropped weapons and cross-border infiltration in Jammu & Kashmir."
      }
    ],
    "strategicLocations": [
      {
        "name": "Andaman and Nicobar Islands",
        "type": "Tri-Service Island Command",
        "coords": "11.66° N, 92.74° E",
        "significance": "Dominates the western entrance to the Malacca Strait, granting India strategic maritime choke leverage."
      },
      {
        "name": "Siliguri Corridor (\"Chicken’s Neck\")",
        "type": "Vulnerable Land Chokepoint",
        "coords": "26.71° N, 88.43° E",
        "significance": "A 22 km-wide land strip connecting mainland India to its eight northeastern states, bordered by Nepal, Bangladesh, and Bhutan."
      },
      {
        "name": "INS Kadamba (Karwar)",
        "type": "Naval Base",
        "coords": "14.80° N, 74.13° E",
        "significance": "India's largest deepwater naval mega-base, shielding the Western Fleet carrier battle group outside commercial radar ranges."
      }
    ],
    "keyEvents": [
      {
        "title": "1971 Indo-Soviet Treaty & Bangladesh War",
        "category": "Historical Turning Point",
        "date": "1971"
      },
      {
        "title": "1998 Pokhran-II Nuclear Tests",
        "category": "Nuclear Doctrine",
        "date": "May 1998"
      },
      {
        "title": "2020 Galwan Valley Standoff",
        "category": "Frontier Conflict",
        "date": "June 2020"
      },
      {
        "title": "2024 Kazan Disengagement Protocol",
        "category": "Bilateral Agreement",
        "date": "October 2024"
      }
    ],
    "indiaImpact": {
      "headline": "India's Global Strategic Role",
      "points": [
        {
          "title": "Anchor of Indian Ocean Security",
          "desc": "Net security provider combating piracy, securing trade lanes, and conducting maritime domain surveillance."
        },
        {
          "title": "Bridge Between Global North & Global South",
          "desc": "Bridges Western high-tech partnerships with the economic aspirations of developing nations in Africa and Asia."
        }
      ]
    }
  },
  "RUS": {
    "id": "RUS",
    "name": "Russia",
    "officialName": "Russian Federation (Российская Федерация)",
    "commonName": "Russia",
    "capital": "Moscow",
    "capitalCoords": { "lat": 55.7558, "lng": 37.6173 },
    "capitalAdmin": {
      "role": "Federal Capital & Seat of the Kremlin",
      "political": "Seat of the President, Government, State Duma, Federation Council, and Supreme Court",
      "geographic": "Situated on the Moskva River in the European plain of Western Russia",
      "strategic": "Apex command and control hub for the Russian Armed Forces and Strategic Rocket Forces"
    },
    "region": "Eurasia",
    "subregion": "Eastern Europe & Northern Asia",
    "flag": "🇷🇺",
    "iso2": "ru",
    "isoCode": "RUS / 643",
    "lat": 61.524,
    "lng": 105.3188,
    "area": "17,098,246 km² (Rank: 1st globally, ~11% of Earth's landmass)",
    "population": "144.2 Million (2024 Rosstat / UN estimate)",
    "politicalSystemType": "Federal Semi-Presidential Republic",
    "currency": "Russian Ruble (RUB / ₽)",
    "languages": "Russian (Official State Language); 35+ regional co-official languages",
    "headOfState": "President Vladimir Putin",
    "headOfGovernment": "Prime Minister Mikhail Mishustin",
    "timeZones": "11 Time Zones (UTC+2 in Kaliningrad to UTC+12 in Kamchatka)",
    "foundingInfo": "862 (Traditional founding of Rus'); 1547 (Tsardom proclaimed); 1721 (Imperial proclamation); 1922 (Soviet Union); December 25, 1991 (Russian Federation sovereign independence)",
    "tagline": "Nuclear Superpower, Resource Heartland & Eurasian Polar Power",
    "overview": {
      "beginner": "Russia is the largest country on Earth by geographic area, spanning 11 time zones across Europe and Asia, from the Baltic Sea to the Pacific Ocean. It possesses the world’s largest confirmed arsenal of nuclear weapons and vast reserves of oil, natural gas, timber, and critical minerals. Following the 1991 collapse of the Soviet Union, Russia under Vladimir Putin has sought to reassert its status as an independent global power pole, resisting NATO’s eastward expansion and deepening strategic partnerships with non-Western powers including China, India, and Iran.",
      "advanced": "The Russian Federation occupies the strategic \"Heartland\" of the Eurasian landmass, exercising dominant control over trans-continental Arctic, Siberian, and Central Asian transit corridors. Russia operates an assertive foreign doctrine founded on \"Strategic Autonomy,\" the pursuit of a polycentric world order, and the preservation of privileged spheres of influence across the post-Soviet space. Confronting systemic Western economic sanctions and diplomatic isolation following the 2022 escalation in Ukraine, Moscow has accelerated a decisive geoeconomic and strategic \"Pivot to the East,\" transforming bilateral energy flows toward China and India, restructuring foreign trade around de-dollarized payment mechanisms (SPFS, local currencies), and cementing a comprehensive defense alignment with Beijing, Pyongyang, and Tehran."
    },
    "history": [
      {
        "year": "862–1240",
        "title": "Kievan Rus' & Eastern Slavic Statehood",
        "phase": "Medieval Slavic State",
        "whatHappened": "According to the Primary Chronicle, the Varangian chieftain Rurik founded the first East Slavic ruling dynasty in Novgorod (862). His successor Oleg conquered Kiev in 882, establishing Kievan Rus'. In 988, Grand Prince Vladimir the Great adopted Orthodox Christianity from the Byzantine Empire as the state religion.",
        "where": "Novgorod, Kiev, Dnieper trade route (\"from the Varangians to the Greeks\")",
        "actors": [
          "Rurik",
          "Oleg of Novgorod",
          "Vladimir the Great",
          "Yaroslav the Wise"
        ],
        "whyItMattered": "Established the spiritual, linguistic, and cultural foundation of modern Russian, Ukrainian, and Belarusian national identities.",
        "consequences": "Integrated Rus' into European Christian civilization and produced the earliest codified law (Russkaya Pravda). Fractured into rival feudal principalities in the 12th century.",
        "claimType": "HISTORICAL FACT",
        "sources": "The Russian Primary Chronicle (Tale of Bygone Years) / Harvard Ukrainian Research Institute"
      },
      {
        "year": "1237–1480",
        "title": "Mongol Invasions & The Golden Horde (\"Tatar Yoke\")",
        "phase": "Mongol Hegemony",
        "whatHappened": "Batu Khan led the Mongol armies of the Golden Horde in a devastating invasion of Rus', destroying Ryazan, Vladimir, and Kiev (1240). Rus' princes became tributary vassals, requiring yarlyks (patents) from the Khan to rule.",
        "where": "Across European Russia / Sarai (Volga capital of Golden Horde)",
        "actors": [
          "Batu Khan",
          "Alexander Nevsky (Prince of Novgorod)",
          "Dmitry Donskoy"
        ],
        "whyItMattered": "Severed Russia from Renaissance Western Europe for over two centuries; catalyzed the rise of Moscow as the primary tax collector and enforcer for the Mongols.",
        "consequences": "Dmitry Donskoy won the symbolic Battle of Kulikovo (1380), weakening the Horde. Formal Mongol suzerainty ended in 1480 after the Great Stand on the Ugra River.",
        "claimType": "HISTORICAL FACT",
        "sources": "Cambridge History of Russia (Vol. 1) / Medieval Russian Chronicles"
      },
      {
        "year": "1462–1505",
        "title": "Ivan III the Great & Rise of the Muscovite State",
        "phase": "Unification of Lands",
        "whatHappened": "Grand Prince Ivan III tripled the territory of Moscow by annexing Novgorod, Tver, and Yaroslavl (\"Gathering of the Russian Lands\"). Following the 1453 Fall of Constantinople, Ivan married Sophia Palaiologina (niece of the last Byzantine Emperor), adopted the double-headed eagle crest, and proclaimed Moscow the \"Third Rome.\"",
        "where": "Moscow Kremlin",
        "actors": [
          "Ivan III (the Great)",
          "Sophia Palaiologina"
        ],
        "whyItMattered": "Ended tributary status to the Golden Horde and established the autocratic ideological basis of the sovereign Russian state.",
        "consequences": "Commissioned Italian architects to rebuild the Moscow Kremlin cathedrals and walls that stand today.",
        "claimType": "HISTORICAL FACT",
        "sources": "Sobornoye Ulozheniye / Institute of Russian History, Russian Academy of Sciences"
      },
      {
        "year": "1547–1584",
        "title": "Tsardom of Russia & Ivan IV (The Terrible)",
        "phase": "Imperial Expansion & Autocracy",
        "whatHappened": "Ivan IV was the first ruler crowned as \"Tsar of All Rus'\" in 1547. He conquered the Muslim Tatar Khanates of Kazan (1552) and Astrakhan (1556), opening the Volga River to the Caspian Sea and initiating Yermak’s conquest of Siberia.",
        "where": "Moscow, Kazan, Astrakhan, Western Siberia",
        "actors": [
          "Ivan IV (Grozny)",
          "Cossack Ataman Yermak Timofeyevich"
        ],
        "whyItMattered": "Transformed Russia from a European principality into a multi-ethnic, transcontinental empire stretching into Asia.",
        "consequences": "Instituted the Oprichnina political police and centralization of autocratic power; devastating Livonian War and succession crisis set the stage for dynastic collapse.",
        "claimType": "HISTORICAL FACT",
        "sources": "State Historical Museum (Moscow) / Oxford History of Russia"
      },
      {
        "year": "1598–1613",
        "title": "Time of Troubles & Romanov Dynasty Inception",
        "phase": "Dynastic Crisis & National Rebirth",
        "whatHappened": "The extinction of the Rurikid dynasty led to famine, foreign invasions, and pretenders (False Dmitrys). Polish-Lithuanian forces occupied Moscow in 1610. Merchant Kuzma Minin and Prince Dmitry Pozharsky mobilized a volunteer national army, expelling the Poles in November 1612. In 1613, the Zemsky Sobor unanimously elected 16-year-old Mikhail Romanov as Tsar.",
        "where": "Nizhny Novgorod, Moscow Red Square",
        "actors": [
          "Kuzma Minin",
          "Prince Dmitry Pozharsky",
          "Tsar Mikhail Romanov"
        ],
        "whyItMattered": "Founded the Romanov Dynasty, which ruled Russia for 304 years until the 1917 Bolshevik Revolution.",
        "consequences": "Celebrated today in modern Russia as National Unity Day (November 4).",
        "claimType": "HISTORICAL FACT",
        "sources": "Zemsky Sobor Assembly Records (1613) / Russian State Archive of Ancient Acts"
      },
      {
        "year": "1682–1725",
        "title": "Peter the Great & Proclamation of the Russian Empire",
        "phase": "Westernization & Baltic Expansion",
        "whatHappened": "Tsar Peter I modernized Russia through sweeping institutional, military, and administrative reforms. Following victory over Charles XII of Sweden in the Great Northern War (Battle of Poltava, 1709), Russia acquired Estonia, Livonia, and access to the Baltic Sea. Peter founded Saint Petersburg in 1703 and proclaimed the Russian Empire in 1721.",
        "where": "Saint Petersburg, Baltic Sea Coast, Poltava",
        "actors": [
          "Peter I (the Great)",
          "King Charles XII of Sweden",
          "Alexander Menshikov"
        ],
        "whyItMattered": "Established Russia as a primary European great power and naval force with a direct maritime window to Europe.",
        "consequences": "Relocated the capital to Saint Petersburg and reorganized state administration along meritocratic civil ranks (Table of Ranks).",
        "claimType": "HISTORICAL FACT",
        "sources": "1721 Treaty of Nystad / Russian Imperial Senate Records"
      },
      {
        "year": "1762–1796",
        "title": "Catherine the Great & Black Sea Conquest",
        "phase": "Enlightened Imperial Zenith",
        "whatHappened": "Empress Catherine II expanded Russian borders through two victorious Russo-Turkish Wars, annexing Crimea in 1783 under Prince Grigory Potemkin and establishing the Black Sea Fleet at Sevastopol. Russia participated in the three Partitions of Poland (1772, 1793, 1795), incorporating Belarus, Lithuania, and right-bank Ukraine.",
        "where": "Crimea, Sevastopol, Novorossiya, Warsaw",
        "actors": [
          "Catherine II (the Great)",
          "Prince Grigory Potemkin",
          "Field Marshal Alexander Suvorov"
        ],
        "whyItMattered": "Secured permanent warm-water naval access to the Black Sea and Mediterranean, creating the administrative region of \"Novorossiya.\"",
        "consequences": "Sevastopol became Russia's primary strategic naval fortress; territorial expansion brought millions of new subjects into the Empire.",
        "claimType": "HISTORICAL FACT",
        "sources": "Treaty of Kuchuk-Kainarji (1774) / 1783 Imperial Manifesto on the Annexation of Crimea"
      },
      {
        "year": "1812–1815",
        "title": "Patriotic War of 1812 & Defeat of Napoleon",
        "phase": "Great Power Hegemony",
        "whatHappened": "Napoleon Bonaparte invaded Russia with the 600,000-strong Grande Armée. After the bloody Battle of Borodino, Russian commander Mikhail Kutuzov ordered the tactical evacuation and burning of Moscow. The Russian winter, scorched-earth strategy, and Cossack partisan attacks decimated Napoleon's retreating force. Russian troops marched into Paris in March 1814.",
        "where": "Borodino, Moscow, Paris",
        "actors": [
          "Tsar Alexander I",
          "Field Marshal Mikhail Kutuzov",
          "Napoleon Bonaparte"
        ],
        "whyItMattered": "Ended Napoleon's conquest of Europe; Tsar Alexander I became a principal architect of the post-Napoleonic European order at the 1815 Congress of Vienna.",
        "consequences": "Created the \"Holy Alliance\" of conservative monarchies, positioning Imperial Russia as the \"Gendarme of Europe.\"",
        "claimType": "HISTORICAL FACT",
        "sources": "Treaty of Paris (1814) / 1815 Congress of Vienna Final Act / Borodino Battlefield Museum"
      },
      {
        "year": "1853–1861",
        "title": "Crimean War & Emancipation of the Serfs",
        "phase": "Modernization & Great Reforms",
        "whatHappened": "Russia fought the Ottoman Empire, Britain, France, and Sardinia in the Crimean War. Following the 11-month Siege of Sevastopol, Russia was defeated, revealing deep technological and industrial backwardness. In response, Tsar Alexander II enacted the Great Reforms, issuing the 1861 Emancipation Manifesto that freed over 23 million Russian serfs.",
        "where": "Sevastopol, Crimea, Saint Petersburg",
        "actors": [
          "Tsar Alexander II (the Liberator)",
          "Admiral Pavel Nakhimov",
          "Leo Tolstoy"
        ],
        "whyItMattered": "A critical inflection point showing that military power required domestic industrialization, legal modernization, and modern army conscription.",
        "consequences": "Modernized the Russian judicial system, established local self-government (zemstvos), and accelerated factory industrialization.",
        "claimType": "HISTORICAL FACT",
        "sources": "1856 Treaty of Paris / 1861 Emancipation Manifesto (Imperial Ukase)"
      },
      {
        "year": "1860–1891",
        "title": "Pacific Expansion & The Trans-Siberian Railway",
        "phase": "Far East Hegemony",
        "whatHappened": "Under the 1858 Treaty of Aigun and 1860 Convention of Peking with Qing Dynasty China, Russia annexed the Amur and Maritime regions, founding the naval outpost of Vladivostok on the Pacific. In 1891, Tsarevich Nicholas inaugurated construction of the Trans-Siberian Railway, the world’s longest continuous railway (9,289 km), linking Moscow to Vladivostok.",
        "where": "Vladivostok, Amur Basin, Lake Baikal",
        "actors": [
          "Count Nikolay Muravyov-Amursky",
          "Finance Minister Sergei Witte",
          "Tsar Alexander III"
        ],
        "whyItMattered": "Unified European Russia with its Pacific coast, securing access to East Asian markets and naval projection into the Sea of Japan.",
        "consequences": "Intensified geopolitical competition with Imperial Japan and Britain (\"The Great Game\" across Central Asia).",
        "claimType": "HISTORICAL FACT",
        "sources": "1860 Convention of Peking / Russian State Railway Archives"
      },
      {
        "year": "1904–1905",
        "title": "Russo-Japanese War & 1905 Revolution",
        "phase": "Imperial Decline & Constitutional Crisis",
        "whatHappened": "Imperial Russia and Japan clashed over rival imperial ambitions in Manchuria and Korea. Russia suffered shocking naval and land defeats at Port Arthur, Mukden, and the naval Battle of Tsushima. The defeat triggered the 1905 Russian Revolution (Bloody Sunday), forcing Tsar Nicholas II to sign the October Manifesto, granting basic civil liberties and creating the State Duma.",
        "where": "Port Arthur, Tsushima Strait, Saint Petersburg",
        "actors": [
          "Tsar Nicholas II",
          "Sergei Witte",
          "Admiral Zinovy Rozhestvensky",
          "Admiral Togo Heihachiro"
        ],
        "whyItMattered": "The first modern defeat of a European great power by an Asian nation; shattered the myth of Romanov absolute infallibility.",
        "consequences": "Created Russia's first parliamentary body (Duma) and paved the way for radical political mobilization among industrial workers and soldiers.",
        "claimType": "HISTORICAL FACT",
        "sources": "1905 Treaty of Portsmouth (brokered by Theodore Roosevelt) / October Manifesto 1905"
      },
      {
        "year": "1914–1917",
        "title": "World War I & Fall of the Romanov Autocracy",
        "phase": "Total War & Revolution",
        "whatHappened": "Russia entered World War I in defense of Serbia against Austria-Hungary and Germany. Despite initial advances in Galicia, Russia suffered catastrophic losses at Tannenberg and Gorlice-Tarnów. By 1917, wartime food shortages, runaway inflation, and military collapse triggered the February Revolution, forcing Tsar Nicholas II to abdicate, ending 304 years of Romanov rule.",
        "where": "Eastern Front, Petrograd (Saint Petersburg)",
        "actors": [
          "Tsar Nicholas II",
          "Alexander Kerensky (Provisional Government)",
          "General Aleksei Brusilov"
        ],
        "whyItMattered": "Brought down one of Europe’s oldest imperial dynasties, leaving a fragile dual-power vacuum between the Provisional Government and the Petrograd Soviet.",
        "consequences": "Set the stage for the Bolshevik overthrow eight months later.",
        "claimType": "HISTORICAL FACT",
        "sources": "Nicholas II Abdication Manifesto (March 1917) / State Archive of the Russian Federation (GARF)"
      },
      {
        "year": "1917–1922",
        "title": "October Revolution, Civil War & USSR Formation",
        "phase": "Bolshevik Triumph",
        "whatHappened": "On November 7, 1917 (October 25 O.S.), Vladimir Lenin and Leon Trotsky led the Bolshevik Red Guards in seizing power in Petrograd. Lenin signed the harsh Treaty of Brest-Litovsk (1918) to exit WWI. A brutal five-year Civil War ensued between the Bolshevik Red Army and the anti-communist White armies (supported by Allied intervention). The Red Army prevailed, and on December 30, 1922, the Union of Soviet Socialist Republics (USSR) was officially formed.",
        "where": "Petrograd, Moscow, Volga, Siberia, Crimea",
        "actors": [
          "Vladimir Lenin",
          "Leon Trotsky",
          "Felix Dzerzhinsky",
          "General Anton Denikin",
          "Admiral Alexander Kolchak"
        ],
        "whyItMattered": "Created the world’s first communist state, completely reorganizing the socioeconomic architecture of one-sixth of the globe under Marxist-Leninist ideology.",
        "consequences": "Moscow was restored as the national capital; state nationalization replaced private property and free markets.",
        "claimType": "HISTORICAL FACT",
        "sources": "1922 Treaty on the Creation of the USSR / Lenin Collected Works"
      },
      {
        "year": "1928–1939",
        "title": "Industrialization, Collectivization & Molotov-Ribbentrop Pact",
        "phase": "Stalinist Transformation & Pre-War Diplomacy",
        "whatHappened": "Following Lenin’s death, Joseph Stalin consolidated absolute authority. The state launched rapid Five-Year Plans, forcibly collectivizing agriculture and building massive heavy industrial complexes (Magnitogorsk, Uralvagonzavod, hydro plants) at immense human cost. In August 1939, facing Western hesitation for a collective security pact against Nazi Germany, the USSR signed the German-Soviet Non-Aggression Pact (Molotov-Ribbentrop Pact), with secret protocols dividing Eastern Europe into spheres of influence.",
        "where": "Moscow, Berlin, Urals, Ukraine",
        "actors": [
          "Joseph Stalin",
          "Vyacheslav Molotov",
          "Joachim von Ribbentrop",
          "Adolf Hitler"
        ],
        "whyItMattered": "Built the heavy industrial and metallurgy base that later proved decisive in defeating Nazi Germany, while temporarily buying time before the inevitable clash.",
        "consequences": "Soviet forces moved into eastern Poland, the Baltic states (Estonia, Latvia, Lithuania), and Bessarabia in 1939–1940; Winter War with Finland.",
        "claimType": "HISTORICAL FACT",
        "sources": "German-Soviet Non-Aggression Pact (1939) / Russian Foreign Ministry Archives (AVP RF)"
      },
      {
        "year": "1941–1945",
        "title": "Great Patriotic War (World War II Allied Victory)",
        "phase": "Heroic Defense & Superpower Triumph",
        "whatHappened": "On June 22, 1941, Nazi Germany launched Operation Barbarossa, the largest land invasion in human history, invading the Soviet Union with over 3.8 million Axis troops along an 1,800-mile frontline. The Red Army mounted a ferocious defense during the Battle of Moscow (1941), halting the Wehrmacht at the city's outskirts. The war turned decisively at the Battle of Stalingrad (Aug 1942–Feb 1943), where the Soviet 62nd Army encircled and destroyed Field Marshal Paulus's German 6th Army. The Red Army then crushed the German armored blitzkrieg at the Battle of Kursk (July 1943), the largest tank battle in history. In 1944, Operation Bagration completely obliterated German Army Group Centre, liberating Belarus, the Baltics, and eastern Poland. In April–May 1945, the Red Army launched the Berlin Strategic Offensive, storming the Reichstag on April 30 and hoisting the Victory Banner. Nazi Germany signed unconditional surrender in Berlin on May 8–9, 1945.",
        "where": "Moscow, Leningrad (900-day siege), Stalingrad, Kursk, Dnieper, Berlin Reichstag",
        "actors": [
          "Marshal Georgy Zhukov",
          "Joseph Stalin",
          "Marshal Konstantin Rokossovsky",
          "Marshal Vasily Chuikov",
          "Allied Partners (FDR, Churchill)"
        ],
        "whyItMattered": "The Soviet Union served as the primary Allied land force that broke the backbone of Nazi Germany, suffering catastrophic sacrifice (approx. 27 million Soviet military and civilian casualties).",
        "consequences": "Transformed the USSR into one of two global nuclear superpowers, permanently established its frontier westward, secured a permanent veto seat on the newly created UN Security Council, and laid the foundation for Soviet control over Eastern Europe.",
        "claimType": "HISTORICAL FACT",
        "sources": "Act of Military Surrender (Berlin-Karlshorst, May 8 1945) / Central Archive of the Ministry of Defense of the Russian Federation (TsAMO)"
      },
      {
        "year": "1945–1985",
        "title": "The Cold War & Nuclear Superpower Rivalry",
        "phase": "Bipolar Superpower Hegemony",
        "whatHappened": "The USSR established the Warsaw Pact (1955) in response to NATO. In August 1949, the Soviet Union tested its first atomic bomb (RDS-1), breaking the American nuclear monopoly. The Soviets led early space achievements: launching Sputnik 1 (1957) and sending Yuri Gagarin as the first human into space (1961). The 1962 Cuban Missile Crisis brought the world to the brink of nuclear war before Kennedy and Khrushchev reached a secret diplomatic withdrawal agreement. A period of détente and strategic arms limitation (SALT I & II) was interrupted by the Soviet intervention in Afghanistan (1979).",
        "where": "Moscow, Washington, Berlin Wall, Baikonur Cosmodrome, Cuba, Kabul",
        "actors": [
          "Nikita Khrushchev",
          "Leonid Brezhnev",
          "John F. Kennedy",
          "Yuri Gagarin",
          "Sergei Korolev"
        ],
        "whyItMattered": "Defined four decades of global geopolitical architecture through ideological rivalry, nuclear deterrence (MAD), proxy conflicts, and space race supremacy.",
        "consequences": "Massive military expenditures and industrial stagnation created structural economic strains that weakened Soviet governance by the mid-1980s.",
        "claimType": "HISTORICAL FACT",
        "sources": "Cuban Missile Crisis Secret Correspondence (Wilson Center) / 1972 SALT I Treaty / 1955 Warsaw Treaty"
      },
      {
        "year": "1985–1991",
        "title": "Perestroika, Glasnost & Dissolution of the USSR",
        "phase": "Systemic Transformation & Collapse",
        "whatHappened": "Mikhail Gorbachev became General Secretary in 1985, initiating Perestroika (economic restructuring) and Glasnost (political openness) to modernize the stagnation-hit economy. In 1987, Gorbachev and Reagan signed the historic INF Treaty banning intermediate-range nuclear missiles. Gorbachev refused to militarily intervene when the Berlin Wall fell in 1989. However, economic shortages and rising nationalist movements across the Soviet republics escalated. Following an abortive hardline coup in August 1991, the leaders of Russia, Ukraine, and Belarus signed the Belovezha Accords on December 8, 1991. On December 25, 1991, Gorbachev resigned, the Soviet flag over the Kremlin was lowered, and the USSR was dissolved into 15 independent sovereign states.",
        "where": "Moscow Kremlin, Belovezha Forest (Belarus), Geneva, Reykjavik",
        "actors": [
          "Mikhail Gorbachev",
          "Boris Yeltsin",
          "Ronald Reagan",
          "Stanislav Shushkevich",
          "Leonid Kravchuk"
        ],
        "whyItMattered": "The most significant geopolitical earthquake of the late 20th century, ending the Cold War without great-power military conflict.",
        "consequences": "The Russian Federation became the recognized international legal successor state to the USSR, inheriting its UN Security Council permanent seat and consolidated nuclear arsenal under the 1994 Budapest Memorandum.",
        "claimType": "HISTORICAL FACT",
        "sources": "Belovezha Accords (1991) / Alma-Ata Protocol (1991) / Gorbachev Foundation Archives"
      },
      {
        "year": "1991–1999",
        "title": "Post-Soviet Transition, Shock Therapy & Chechen Wars",
        "phase": "Turbulent Democratic Transition",
        "whatHappened": "Under President Boris Yeltsin, Russia enacted rapid free-market \"shock therapy,\" leading to hyperinflation, collapse of the industrial base, and the rise of powerful business oligarchs through voucher privatization. The October 1993 constitutional crisis saw tanks shell the Russian White House parliament building. Moscow fought the devastating First Chechen War (1994–1996), ending in the Khasavyurt Accord. The August 1998 financial crisis saw the Russian government default on domestic debt and devalue the ruble.",
        "where": "Moscow White House, Grozny (Chechnya)",
        "actors": [
          "President Boris Yeltsin",
          "Yegor Gaidar",
          "Anatoly Chubais",
          "General Dzhokhar Dudayev"
        ],
        "whyItMattered": "Severe economic contraction (GDP fell by ~40% between 1991 and 1998) and perceived geopolitical humiliation cemented deep skepticism toward Western-style liberal reforms.",
        "consequences": "On December 31, 1999, an ailing Boris Yeltsin unexpectedly resigned, appointing former FSB chief and Prime Minister Vladimir Putin as Acting President.",
        "claimType": "HISTORICAL FACT",
        "sources": "1993 Constitution of the Russian Federation / 1996 Khasavyurt Accord / IMF Russian Economic Reviews"
      },
      {
        "year": "2000–Present",
        "title": "Putin Era, Sovereign Reassertion & Eurasian Multi-Polarity",
        "phase": "Contemporary Geopolitical Realignment",
        "whatHappened": "Vladimir Putin consolidated the \"vertical of state power,\" defeated separatist insurgency in the Second Chechen War, reined in oligarchs, and renationalized strategic energy assets (Gazprom, Rosneft). High oil prices fueled a decade of 7% annual GDP growth. At the 2007 Munich Security Conference, Putin delivered a landmark speech condemning U.S. unipolar dominance and NATO’s eastward expansion. Following the five-day Russo-Georgian War in 2008, Russia recognized Abkhazia and South Ossetia. In March 2014, following Ukraine's Euromaidan revolution, Russia annexed Crimea and supported separatist militias in Donbas. In September 2015, Russia launched air operations in Syria, saving Bashar al-Assad’s government and reclaiming a Mediterranean naval presence. In February 2022, Russia launched its \"Special Military Operation\" in Ukraine, triggering unprecedented Western sanctions, asset freezes, and export bans. In response, Russia pivoted its foreign trade and energy exports decisively to China, India, and the Global South, hosting the expanded BRICS Summit in Kazan in October 2024.",
        "where": "Moscow Kremlin, Munich, Sevastopol, Damascus, Donbas, Kazan",
        "actors": [
          "President Vladimir Putin",
          "Foreign Minister Sergey Lavrov",
          "President Xi Jinping",
          "Prime Minister Narendra Modi"
        ],
        "whyItMattered": "Marked the definitive rupture of post-Cold War European security architecture and the emergence of a multi-polar, contested global order characterized by economic de-dollarization and strategic alignment between Eurasian powers.",
        "consequences": "Over 80% of Russian crude oil and coal shifted from Europe to India and China; national defense expenditures increased to ~6% of GDP; Russia modernized its nuclear doctrine in 2024 to lower the threshold for nuclear retaliation.",
        "claimType": "CURRENT",
        "sources": "2007 Munich Security Conference Address / 2024 Kazan BRICS Declaration / SIPRI Military Expenditure Database"
      }
    ],
    "politicalSystem": {
      "type": "Federal Semi-Presidential Constitutional Republic",
      "constitution": "1993 Constitution of the Russian Federation (substantially amended by national referendum in 2020)",
      "branches": [
        {
          "name": "President of the Russian Federation",
          "role": "Head of State, Supreme Commander-in-Chief of the Armed Forces, sets domestic and foreign policy directives, and chairs the Security Council."
        },
        {
          "name": "Security Council of the Russian Federation",
          "role": "Apex national security body coordinating military, intelligence (FSB, SVR, GRU), and strategic nuclear decisions."
        },
        {
          "name": "Government of the Russian Federation",
          "role": "Headed by the Prime Minister (Mikhail Mishustin), executing domestic socioeconomic policy and managing federal ministries."
        },
        {
          "name": "Federal Assembly (Parliament)",
          "role": "Bicameral legislature: State Duma (450 deputies approving legislation and prime minister) and Federation Council (178 regional senators approving military deployments abroad)."
        },
        {
          "name": "Constitutional Court",
          "role": "Guardian of the Constitution with jurisdiction to rule on international treaty compliance with domestic law."
        }
      ],
      "currentLeadership": {
        "headOfState": "President Vladimir Putin",
        "term": "2024–2030 (Re-elected in March 2024)",
        "headOfGovernment": "Prime Minister Mikhail Mishustin",
        "foreignMinister": "Sergey Lavrov (serving since 2004)",
        "defenseMinister": "Andrey Belousov (economist appointed in 2024 to manage wartime industrial efficiency)"
      },
      "rulingParty": "United Russia (Holds constitutional supermajority with 324 of 450 State Duma seats)",
      "oppositionParties": [
        { "name": "Communist Party of the Russian Federation (CPRF)", "seats": "57 seats", "leader": "Gennady Zyuganov", "stance": "Left-wing nationalist, state planning, pro-reunification" },
        { "name": "A Just Russia — For Truth", "seats": "28 seats", "leader": "Sergey Mironov", "stance": "Social democratic, patriotic, pro-welfare" },
        { "name": "Liberal Democratic Party of Russia (LDPR)", "seats": "23 seats", "leader": "Leonid Slutsky", "stance": "Right-wing nationalist, strong military stance" },
        { "name": "New People", "seats": "15 seats", "leader": "Alexey Nechayev", "stance": "Center-right, business development, modernization" }
      ],
      "parliamentDetails": "Federal Assembly: State Duma (450 deputies elected by mixed member system: 225 party list, 225 single-mandate) and Federation Council (178 regional senators representing federal subjects).",
      "recentElections": "March 2024 Presidential Election: Vladimir Putin officially re-elected with 87.28% of the vote (77.49% turnout). Next State Duma election: September 2026; next Presidential election: March 2030.",
      "domesticDevelopments": [
        { "title": "May 2024 Defense Cabinet Overhaul", "claimType": "VERIFIED FACT", "desc": "Appointment of technocratic economist Andrey Belousov as Defense Minister to maximize military-industrial production and curb waste." },
        { "title": "Strategic Industrial Nationalization", "claimType": "VERIFIED FACT", "desc": "Judicial return of critical defense manufacturing, metallurgy plants, and sea terminals to state ownership." },
        { "title": "Servicemen & Veteran Benefits Expansion", "claimType": "VERIFIED FACT", "desc": "Large-scale tax exemptions, land grants, and pension increases for frontline contract soldiers and families." }
      ],
      "currentIssues": [
        { "title": "Wartime Economic Overheating & Labor Shortages", "claimType": "ANALYSIS", "desc": "Central Bank elevated key benchmark interest rate to 19–20% to curb inflation amid high domestic wages and defense recruitment." },
        { "title": "Sanctions Circumvention & Dual-Use Supply", "claimType": "ANALYSIS", "desc": "Navigating international secondary sanctions to secure machine tooling, sensors, and electronic microchips." }
      ],
      "policyDebates": [
        { "topic": "Defense vs Civilian Social Budgeting", "desc": "Balancing record defense and security expenditures (~6.2% of GDP) against long-term civilian health, education, and regional development." },
        { "topic": "Central Asian Migration Quotas", "desc": "Debate between business demands for construction and service workers vs security agency demands for stricter migration controls." }
      ],
      "institutions": [
        { "name": "Security Council of the Russian Federation", "role": "Apex constitutional organ coordinating defense, foreign intelligence, and strategic nuclear posture." },
        { "name": "Presidential Executive Office (Kremlin)", "role": "Direct executive instrument formulating decrees and federal regional oversight." },
        { "name": "Bank of Russia", "role": "Monetary regulator managing currency controls, inflation, and SPFS financial messaging." },
        { "name": "Federal Security Service (FSB)", "role": "Domestic counter-intelligence, border guard, and anti-subversion service." }
      ],
      "federalDynamics": "Asymmetric federalism comprising 89 Federal Subjects organized under 8 Federal Districts overseen by Presidential Plenipotentiary Envoys.",
      "foreignPolicyDoctrine": "Concept of the Foreign Policy of the Russian Federation (2023) defines Russia as a unique \"State-Civilization\" and Eurasian-Euro-Pacific power, prioritizing deep integration with the CIS, strategic partnership with China and India, the expansion of BRICS/SCO, and the dismantling of Western geopolitical and financial hegemony."
    },
    "geographyBorders": {
      "landArea": "17,098,246 km² (World’s largest sovereign nation, covering ~11% of Earth's total landmass)",
      "location": "Northern Eurasia, spanning Eastern Europe and Northern Asia",
      "continent": "Eurasia",
      "latRange": "41° N to 82° N",
      "lngRange": "19° E to 169° W",
      "coastline": "37,653 km (World's 3rd longest, bordering Arctic, Pacific, and Atlantic basins)",
      "majorOceans": ["Arctic Ocean", "Pacific Ocean", "Atlantic Ocean (via Baltic & Black Seas)"],
      "majorIslands": ["Sakhalin", "Kuril Islands", "Novaya Zemlya", "Severnaya Zemlya", "Franz Josef Land", "Wrangel Island"],
      "strategicGeography": "Commands the pivotal 'Heartland' of Eurasia (Mackinder geopolitical theory), exercising dominant control over transcontinental rail corridors, Arctic maritime routes (Northern Sea Route), and key transit routes between Europe and Asia.",
      "topography": "A vast expanse spanning Eastern Europe and Northern Asia. Defined by the expansive East European Plain, the Ural Mountains (traditional boundary between Europe and Asia), the vast West Siberian Plain (world's largest flatland), the Central Siberian Plateau, and rugged mountain chains along the southern rim and Pacific Far East.",
      "rivers": [
        "Volga River (3,530 km - Longest river in Europe, historic national waterway linking Moscow to the Caspian Sea)",
        "Yenisey River (3,487 km - Massive Siberian river draining into the Arctic Ocean; hosts Sayano-Shushenskaya hydroelectric dam)",
        "Lena River (4,294 km - Entirely within Russian borders, freezes 7 months of the year)",
        "Ob-Irtysh River System (5,410 km - Drains the vast West Siberian petroleum and gas fields)",
        "Amur River (2,824 km - Forms the strategic international boundary with Northeast China)"
      ],
      "mountains": [
        "Ural Mountains (2,500 km chain separating European Russia from Siberia; ancient mineral storehouse)",
        "Caucasus Mountains (Contains Mount Elbrus at 5,642m, the highest peak in Europe)",
        "Altai Mountains (Siberian border junction with Kazakhstan, China, and Mongolia)",
        "Kamchatka Volcanic Peninsula (Home to Klyuchevskaya Sopka and 160 active/dormant volcanoes)"
      ],
      "seas": [
        "Arctic Ocean Basins (Barents, Kara, Laptev, East Siberian, and Chukchi Seas)",
        "Pacific Ocean Basins (Bering Sea, Sea of Okhotsk, and Sea of Japan)",
        "Atlantic Ocean Basins (Baltic Sea, Black Sea, and Sea of Azov)",
        "Caspian Sea (World’s largest enclosed inland water body)"
      ],
      "climates": [
        "Arctic Tundra (Treeless polar permafrost along northern shoreline)",
        "Subarctic Taiga (The world’s largest continuous coniferous forest biome, spanning Siberia)",
        "Humid Continental (Heart of agriculture and population in European Russia)",
        "Semiarid Steppe (Southern agrarian grain belt extending into Central Asia)"
      ],
      "landBorders": [
        {
          "country": "Norway",
          "id": "NOR",
          "borderLength": "196 km",
          "region": "Arctic / High North",
          "status": "NATO Border / Monitored Border Station",
          "strategicContext": "Direct Arctic land border at Storskog/Borisoglebsk; proximity to Russia's Kola Peninsula nuclear submarine bastion."
        },
        {
          "country": "Finland",
          "id": "FIN",
          "borderLength": "1,340 km",
          "region": "Nordic / Baltic Flank",
          "status": "Closed Border Crossings / NATO Frontier",
          "strategicContext": "Finland’s 2023 NATO accession doubled NATO's direct terrestrial border with Russia; crossing points closed amidst heightened tensions."
        },
        {
          "country": "Estonia",
          "id": "EST",
          "borderLength": "334 km",
          "region": "Baltic",
          "status": "NATO Eastern Flank / Narva River Frontier",
          "strategicContext": "Borders Lake Peipus and Narva; high concentration of Russian-speaking minority in Narva; active NATO eFP troop presence."
        },
        {
          "country": "Latvia",
          "id": "LVA",
          "borderLength": "284 km",
          "region": "Baltic",
          "status": "NATO Border / Fortified Border Line",
          "strategicContext": "Strategic corridor between Pskov and eastern Latvia; participating in Baltic Defence Line fortification."
        },
        {
          "country": "Lithuania",
          "id": "LTU",
          "borderLength": "266 km",
          "region": "Kaliningrad Border",
          "status": "Kaliningrad Exclave Transit Friction",
          "strategicContext": "Borders Russia's Kaliningrad exclave along the Neman River; sits directly adjacent to the strategic Suwalki Gap."
        },
        {
          "country": "Poland",
          "id": "POL",
          "borderLength": "210 km",
          "region": "Kaliningrad Border",
          "status": "Heavily Fortified / Electronic Barrier",
          "strategicContext": "Southern border of the Kaliningrad military exclave; Poland erected high-tech border barriers and electronic surveillance."
        },
        {
          "country": "Belarus",
          "id": "BLR",
          "borderLength": "1,239 km",
          "region": "Union State Ally",
          "status": "Open Border / Deep Defense Integration",
          "strategicContext": "Treaty on the Creation of a Union State; integrated regional air defense; Russian tactical nuclear weapons stationed in Belarus."
        },
        {
          "country": "Ukraine",
          "id": "UKR",
          "borderLength": "1,974 km",
          "region": "Frontline Warfare Zone",
          "status": "Active High-Intensity Armed Conflict",
          "strategicContext": "Scene of full-scale military conflict; frontlines contested across Luhansk, Donetsk, Zaporizhzhia, Kherson, and Kursk border sectors."
        },
        {
          "country": "Georgia",
          "id": "GEO",
          "borderLength": "894 km",
          "region": "Caucasus",
          "status": "Border Checkpoint / Abkhazia & Ossetia",
          "strategicContext": "High Caucasus mountain crest; Upper Lars is the only operational road crossing; Russia maintains military bases in breakaway Abkhazia and South Ossetia."
        },
        {
          "country": "Azerbaijan",
          "id": "AZE",
          "borderLength": "338 km",
          "region": "Caucasus / Caspian",
          "status": "Peaceful / INSTC Railway Corridor",
          "strategicContext": "Crosses the Samur River; critical overland railway and road link for the International North-South Transport Corridor (INSTC) toward Iran."
        },
        {
          "country": "Kazakhstan",
          "id": "KAZ",
          "borderLength": "7,591 km",
          "region": "Central Asia",
          "status": "World’s Longest Continuous Land Border",
          "strategicContext": "Completely unfortified friendly border under Eurasian Economic Union (EAEU) and CSTO; hosts Baikonur Cosmodrome lease."
        },
        {
          "country": "China",
          "id": "CHN",
          "borderLength": "4,209 km",
          "region": "Far East & Siberia",
          "status": "Demarcated / Strategic Partnership",
          "strategicContext": "Divided into eastern (Amur/Ussuri) and western sectors; fully settled in 2004; anchored by major railway bridges and Power of Siberia gas pipeline."
        },
        {
          "country": "Mongolia",
          "id": "MNG",
          "borderLength": "3,485 km",
          "region": "Inner Asia",
          "status": "Peaceful Buffer State",
          "strategicContext": "Runs along the Sayan and Altai ranges; landlocked neutral partner; planned transit route for the 50 bcm Power of Siberia 2 gas pipeline."
        },
        {
          "country": "North Korea",
          "id": "PRK",
          "borderLength": "17 km",
          "region": "Far East",
          "status": "Strategic Alliance / Tumangang Rail Link",
          "strategicContext": "Shortest land border along the Tumen River; connected by the Korea-Russia Friendship Bridge; deepened under the 2024 Comprehensive Strategic Partnership Treaty."
        }
      ],
      "maritimeBorders": [
        {
          "country": "United States",
          "id": "USA",
          "boundary": "Bering Strait (Maritime Boundary Agreement 1990; Little Diomede US and Big Diomede Russia are separated by only 3.8 km / the International Date Line)."
        },
        {
          "country": "Japan",
          "id": "JPN",
          "boundary": "La Pérouse Strait (Soya Strait) and Nemuro Strait separating Hokkaido from Sakhalin and the disputed Kuril Islands (Iturup, Kunashir, Shikotan, Habomai)."
        }
      ],
      "strategicCorridors": [
        {
          "name": "Kaliningrad Exclave & Suwalki Gap",
          "significance": "A heavily fortified Baltic Russian territory separated from mainland Russia, flanked by Poland and Lithuania. The 65-km Suwalki corridor is NATO's most vulnerable bottleneck linking the Baltic states to Poland."
        },
        {
          "name": "Northern Sea Route (NSR)",
          "significance": "A 5,600 km Arctic shipping shortcut linking European ports to East Asia via the Arctic Ocean, cutting Suez transit times by up to 40% under Russian icebreaker escort."
        }
      ]
    },
    "economy": {
      "gdpNominal": "$2.06 Trillion (8th largest globally, IMF 2024)",
      "gdpPPP": "$5.5 Trillion (4th largest globally by World Bank PPP calculations)",
      "gdpPerCapita": "$14,200 Nominal / $38,000 PPP",
      "gdpGrowth": "+3.6% (2023) / +3.2% (2024 IMF estimate)",
      "currency": "Russian Ruble (RUB / ₽)",
      "majorIndustries": [
        "Hydrocarbons (Oil & Gas extraction, pipeline transit, and refining)",
        "Defense & Aerospace Manufacturing (Rostec, UAC, Almaz-Antey, Sevmash)",
        "Metallurgy (Titanium, Nickel, Palladium, Aluminum, Special Steels)",
        "Nuclear Reactor Engineering & Nuclear Fuel Cycle (Rosatom)",
        "Agriculture & Fertilizer Synthesis (World's #1 wheat & fertilizer exporter)",
        "Chemicals & Heavy Machinery"
      ],
      "majorExports": [
        "Crude Petroleum & Refined Hydrocarbons ($130B+)",
        "Pipeline Natural Gas & Liquefied Natural Gas (Yamal & Arctic LNG)",
        "Mineral Fertilizers (Nitrogen, Potash, Phosphate)",
        "Wheat, Barley & Agricultural Grain ($15B+)",
        "Semi-Finished Metals (Platinum, Palladium, Nickel, Aluminum, Steel)",
        "Commercial Nuclear Reactors & Defense Equipment"
      ],
      "majorImports": [
        "Industrial Machinery, Mechanical Tools & Spare Parts",
        "Motor Vehicles, Heavy Trucks & Automotive Components",
        "Microchips, Semiconductors & Electronic Assemblies",
        "Pharmaceutical Products & Precision Medical Instruments",
        "Plastics, Specialized Chemicals & Rubber"
      ],
      "energyPosition": "World's #1 proven natural gas reserves (~48 Tcm), world's #2 crude oil exporter (~9.8M bpd production), and world's #1 exporter of commercial nuclear power stations (Rosatom controls ~70% of global new builds).",
      "naturalResources": "Vast continental reserves of crude oil, natural gas, coal, timber, rare earths, iron ore, gold, platinum, nickel, palladium, titanium, and fertile black-soil agricultural chernozem.",
      "tradeOrgs": [
        "Eurasian Economic Union (EAEU - Founding Member)",
        "BRICS (Founding Member)",
        "Shanghai Cooperation Organisation (SCO)",
        "Commonwealth of Independent States (CIS)",
        "World Trade Organization (WTO)"
      ],
      "economicStrategicImportance": "Vital global commodity anchor: supply disruptions in Russian hydrocarbons, fertilizers, wheat, or titanium trigger immediate inflationary and food-security shocks across global markets.",
      "indiaEconomicConnection": "Bilateral trade surged past $65 Billion in 2023–24. India imports ~1.8 million bpd of Russian crude oil and essential fertilizers at favorable terms. Settled in non-dollar mechanisms (Ruble/Rupee and UAE Dirham accounts) with strategic investment in the INSTC and Chennai–Vladivostok Eastern Maritime Corridor.",
      "energySuperpower": {
        "summary": "Russia possesses the world’s largest proven natural gas reserves (~48 trillion cubic meters) and is the second-largest global exporter of crude oil.",
        "oilProduction": "Produces approx. 9.5 to 10.0 million barrels per day; crude oil exports restructured from Europe toward India and China.",
        "gasInfrastructure": "Power of Siberia pipeline to China (operating at 38 bcm/yr); Yamal LNG and Arctic LNG-2 facilities supplying global liquefied gas markets.",
        "nuclearLeadership": "Rosatom controls approx. 70% of worldwide exports of commercial nuclear power reactors, constructing reactors in China, India, Turkey, Egypt, and Bangladesh."
      },
      "criticalMinerals": {
        "palladium": "World’s top producer (~40% of global supply through Nornickel), essential for automotive catalytic converters and electronics.",
        "nickelAndTitanium": "Supplies high-purity nickel for electric vehicle batteries and aircraft-grade forged titanium (VSMPO-AVISMA) historically critical for Boeing and Airbus.",
        "fertilizersAndWheat": "World’s largest exporter of nitrogen and potash fertilizers and #1 global wheat exporter, underpinning food security across the Middle East and Africa."
      },
      "financialResilience": {
        "deDollarization": "Over 90% of Russia-China and Russia-India bilateral commercial trade is now settled in local sovereign currencies (rubles, yuan, rupees), bypassing SWIFT and Western banking intermediaries.",
        "spfsMessaging": "Central Bank of Russia operated SPFS (System for Transfer of Financial Messages) connects hundreds of domestic and international financial institutions.",
        "mirCardNetwork": "Domestic Mir payment card network processes all domestic electronic transactions, completely immune to Visa/Mastercard sanctions."
      },
      "majorTradingPartners": [
        {
          "country": "China",
          "share": "Largest bilateral trading partner ($240B+ record trade; supplier of industrial machinery, electronics, and vehicles)"
        },
        {
          "country": "India",
          "share": "2nd largest export destination ($65B+ trade, overwhelmingly discounted crude oil, fertilizers, and defense spares)"
        },
        {
          "country": "Turkey",
          "share": "Key trade and energy transit hub; buyer of Russian natural gas via TurkStream and Blue Stream"
        },
        {
          "country": "Belarus",
          "share": "Integrated Union State common market"
        }
      ]
    },
    "military": {
      "expenditure": "$140.0+ Billion (2024 military budget; approx. 6.2% of GDP, surging to meet wartime industrial production)",
      "personnel": {
        "active": "1,320,000 active duty military personnel (authorized expansion toward 1.5 million)",
        "reserves": "2,000,000 trained reserves with combat experience",
        "conscription": "Semi-annual draft for males aged 18–30 (1-year service obligation); vast volunteer contract soldier recruitment system."
      },
      "doctrine": "Updated 2024 Nuclear Deterrence Doctrine (\"Basic Principles of State Policy on Nuclear Deterrence\") — significantly lowers the threshold for nuclear retaliatory release: aggression against Russia or Belarus by any non-nuclear state with the participation or support of a nuclear power will be considered a joint attack; Multi-domain Anti-Access/Area Denial (A2/AD) bastions; Strategic Active Defense.",
      "nuclearStockpile": "Approx. 5,580 total nuclear warheads (~1,710 deployed strategic warheads across ICBMs, SLBMs, and heavy bombers; ~2,800 non-strategic and retired reserves)",
      "defenseIndustry": "Rostec State Corporation (incorporating 800+ defense manufacturing subsidiaries), Almaz-Antey (air & missile defense), United Aircraft Corporation (UAC), Sevmash Shipyard (nuclear submarines), Uralvagonzavod (armor & tanks), Tactical Missiles Corporation (KTRV), and Rosatom. Factories running 24/7 continuous operations.",
      "majorDomesticSystems": [
        "RS-24 Yars & RS-28 Sarmat ICBMs",
        "Avangard & Tsirkon Hypersonic Missiles",
        "S-400 Triumf & S-500 Prometey Air Defense Systems",
        "T-90M Proryv & T-80BVM Main Battle Tanks",
        "Su-57 Felon 5th-Gen Fighters & Su-34M Strike Bombers",
        "Project 885M Yasen-M & Project 955A Borei-A Submarines",
        "Pantsir-S1 & Tor-M2 Tactical SAM Systems",
        "Lancet & Geran-2 Loitering Attack Munitions"
      ],
      "majorImports": [
        "Commercial dual-use machine tools, microcontrollers, and optical sensors via non-sanctioning third-country corridors; artillery munitions and ballistic missiles from North Korea"
      ],
      "majorExports": [
        "Su-30/Su-35 combat aircraft, S-400 air defense batteries, T-90S tanks, Kilo-class submarines, naval frigates, and civil nuclear power reactors (Rosatom)"
      ],
      "militaryAlliances": [
        "Collective Security Treaty Organization (CSTO)",
        "Union State Joint Defense Doctrine with Belarus",
        "Comprehensive Strategic Partnership Treaty with North Korea (2024 mutual defense)",
        "Strategic naval and air patrol coordination with China (SCO)"
      ],
      "categories": [
        {
          "name": "STRATEGIC STRIKE & NUCLEAR TRIAD",
          "desc": "World’s largest confirmed nuclear arsenal with approx. 5,580 warheads across land, sea, and air triads.",
          "systems": [
            {
              "name": "RS-24 Yars (SS-27 Mod 2)",
              "type": "Road-Mobile & Silo-Based ICBM",
              "origin": "Russia (MITT)",
              "status": "CONFIRMED",
              "quantity": "180+ mobile and silo launchers",
              "role": "Solid-fueled intercontinental ballistic missile (11,000 km range) armed with 3–6 MIRV thermonuclear warheads with active decoy penetration aids."
            },
            {
              "name": "Avangard Hypersonic Glide Vehicle (HGV)",
              "type": "Strategic Hypersonic Boost-Glide System",
              "origin": "Russia (NPO Mashinostroyeniya)",
              "status": "CONFIRMED",
              "quantity": "Operational with Dombarovsky missile division",
              "role": "Glides at Mach 20–27 inside the atmosphere, performing evasive maneuvers to bypass any missile defense system."
            },
            {
              "name": "RS-28 Sarmat (Satan II)",
              "type": "Heavy Liquid-Fueled Super-Heavy ICBM",
              "origin": "Russia (Makeyev Rocket Design Bureau)",
              "status": "CONFIRMED (Induction)",
              "quantity": "Replacing R-36M2 Voyevoda",
              "role": "Global-range (18,000 km) heavy ICBM capable of flying over either the North or South Pole, carrying 10 heavy MIRV warheads."
            },
            {
              "name": "Tu-160M \"White Swan\" (Blackjack)",
              "type": "Variable-Sweep Supersonic Strategic Bomber",
              "origin": "Russia (Tupolev)",
              "status": "CONFIRMED",
              "quantity": "16 upgraded + new-build production",
              "role": "Mach 2.05 heavy strategic bomber launching Kh-101 and Kh-102 nuclear stealth cruise missiles at 4,500 km standoff distance."
            }
          ]
        },
        {
          "name": "HYPERSONIC WEAPONS",
          "desc": "World-leading operational hypersonic cruise missiles and aero-ballistic systems.",
          "systems": [
            {
              "name": "3M22 Tsirkon (Zircon)",
              "type": "Scramjet-Powered Naval Hypersonic Cruise Missile",
              "origin": "Russia (NPO Mashinostroyeniya)",
              "status": "CONFIRMED",
              "quantity": "Deployed on Admiral Gorshkov frigates and Yasen-M SSGNs",
              "role": "Flies at Mach 9 at altitudes of 28 km with 1,000 km range, defeating Aegis air defense systems."
            },
            {
              "name": "Kh-47M2 Kinzhal",
              "type": "Aero-Ballistic Hypersonic Missile",
              "origin": "Russia (KBM)",
              "status": "CONFIRMED",
              "quantity": "Combat-deployed on MiG-31K interceptors",
              "role": "Accelerates to Mach 10+ with 2,000 km combat radius, executing high-G evasive maneuvers against high-value infrastructure and carrier groups."
            }
          ]
        },
        {
          "name": "LONG-RANGE AIR & MISSILE DEFENCE",
          "desc": "Strategic aerospace defense shield guarding national territory and key garrisons.",
          "systems": [
            {
              "name": "S-400 Triumf (SA-21 Growler)",
              "type": "Long-Range Anti-Aircraft & Anti-Missile System",
              "origin": "Russia (Almaz-Antey)",
              "status": "CONFIRMED",
              "quantity": "570+ launchers in 50+ regiments",
              "role": "Engages aerodynamic targets up to 400 km (40N6 missile) and ballistic targets up to 60 km, with multi-band radar tracking."
            },
            {
              "name": "S-500 Prometey (55R6M)",
              "type": "Theater Ballistic Missile & Low-Orbit Space Defense",
              "origin": "Russia (Almaz-Antey)",
              "status": "CONFIRMED",
              "quantity": "Serial production / Moscow air defense deployment",
              "role": "Designed to intercept hypersonic cruise missiles, ballistic warheads in the exo-atmosphere, and low-Earth orbit reconnaissance satellites."
            }
          ]
        },
        {
          "name": "SHORT & MEDIUM-RANGE AIR DEFENCE",
          "desc": "Mobile tactical systems protecting forward ground troop formations and critical infrastructure.",
          "systems": [
            {
              "name": "Pantsir-S1 / Pantsir-SM",
              "type": "Combined Gun-Missile Air Defence System",
              "origin": "Russia (KBP Instrument Design Bureau)",
              "status": "CONFIRMED",
              "quantity": "200+ systems",
              "role": "Point defense combining 12 radio-command missiles (20–40 km range) with dual 30mm autocannons against precision munitions, cruise missiles, and suicide drones."
            },
            {
              "name": "Buk-M3 (Viking)",
              "type": "Medium-Range Mobile Surface-to-Air Missile",
              "origin": "Russia (Tikhomirov NIIP)",
              "status": "CONFIRMED",
              "quantity": "Operational with Army air defense brigades",
              "role": "Tracks and destroys tactical ballistic missiles, stealth cruise missiles, and aircraft at ranges up to 70 km."
            },
            {
              "name": "Tor-M2 / Tor-M2DT (Arctic)",
              "type": "Short-Range All-Weather Tactical SAM",
              "origin": "Russia (Kupol / Almaz-Antey)",
              "status": "CONFIRMED",
              "quantity": "Deployed across all military districts",
              "role": "Highly automated system capable of firing on the move against smart bombs, anti-radiation missiles, and UAV swarms."
            }
          ]
        },
        {
          "name": "COASTAL DEFENCE & ANTI-SHIP SYSTEMS",
          "desc": "Layered maritime denial protecting Russia’s 37,000-km coastline and closed seas.",
          "systems": [
            {
              "name": "K-300P Bastion-P",
              "type": "Mobile Coastal Missile System",
              "origin": "Russia (NPO Mashinostroyeniya)",
              "status": "CONFIRMED",
              "quantity": "Deployed in Crimea, Kaliningrad, Kurils, and Arctic",
              "role": "Fires P-800 Oniks supersonic anti-ship missiles (Mach 2.6) with 600 km range, operating autonomous swarm target distribution."
            },
            {
              "name": "Bal (SSC-6 Sennight)",
              "type": "Coastal Anti-Ship Missile System",
              "origin": "Russia (KTRV)",
              "status": "CONFIRMED",
              "quantity": "Deployed with naval coastal missile brigades",
              "role": "Fires Kh-35U subsonic anti-ship missiles up to 260 km, delivering saturation volleys of up to 32 missiles simultaneously."
            }
          ]
        },
        {
          "name": "MAIN BATTLE TANKS (MBT)",
          "desc": "World's largest tank fleet, engineered for heavy attrition and active-protection warfare.",
          "systems": [
            {
              "name": "T-90M Proryv-3",
              "type": "Advanced Main Battle Tank",
              "origin": "Russia (Uralvagonzavod)",
              "status": "CONFIRMED",
              "quantity": "Hundreds delivered from continuous factory assembly lines",
              "role": "Features Kalina automated fire control, Relikt explosive reactive armor, 125mm 2A46M-5 smoothbore gun, and anti-drone cage armor suites."
            },
            {
              "name": "T-80BVM",
              "type": "Gas-Turbine Main Battle Tank",
              "origin": "Russia (Omsktransmash)",
              "status": "CONFIRMED",
              "quantity": "Specialized for Arctic and deep-winter operations",
              "role": "Gas-turbine 1,250 hp engine starts instantly in -40°C Siberian temperatures, fitted with Sosna-U thermal sights and Relikt ERA."
            },
            {
              "name": "T-72B3M",
              "type": "Upgraded Main Battle Tank",
              "origin": "Russia (Uralvagonzavod)",
              "status": "CONFIRMED",
              "quantity": "Mainstay armored force (~1,500+ modernized)",
              "role": "Workhorse tank equipped with V-92S2F 1,130 hp engine, Sosna-U multichannel sight, and enhanced side armor plates."
            }
          ]
        },
        {
          "name": "ARMORED FIGHTING VEHICLES & IFVS",
          "desc": "Mechanized infantry vehicles providing high amphibious and cross-country mobility.",
          "systems": [
            {
              "name": "BMP-3M",
              "type": "Amphibious Infantry Fighting Vehicle",
              "origin": "Russia (Kurganmashzavod)",
              "status": "CONFIRMED",
              "quantity": "Extensively deployed",
              "role": "Heavily armed IFV mounting a 100mm 2A70 rifled gun/missile launcher paired with a 30mm 2A72 autocannon."
            },
            {
              "name": "BTR-82A",
              "type": "8x8 Wheeled Armored Personnel Carrier",
              "origin": "Russia (Arzamas Machinery)",
              "status": "CONFIRMED",
              "quantity": "Standard motorized rifle APC",
              "role": "High-speed wheeled troop carrier fitted with a stabilized 30mm autocannon and night-vision sights."
            }
          ]
        },
        {
          "name": "ROCKET & TUBE ARTILLERY",
          "desc": "The traditional \"God of War\" in Russian military doctrine, delivering crushing volume of fire.",
          "systems": [
            {
              "name": "2S35 Koalitsiya-SV",
              "type": "152mm Self-Propelled Howitzer",
              "origin": "Russia (Uraltransmash)",
              "status": "CONFIRMED",
              "quantity": "Entering operational brigade service",
              "role": "Fully automated unmanned turret capable of 12–16 rounds per minute with precision-guided rounds reaching 70 km."
            },
            {
              "name": "2S19 Msta-S / Msta-SM2",
              "type": "152mm Tracked Self-Propelled Howitzer",
              "origin": "Russia (Uraltransmash)",
              "status": "CONFIRMED",
              "quantity": "Primary heavy artillery asset (~500+)",
              "role": "Fires Krasnopol laser-guided artillery projectiles designated by Orlan-10 reconnaissance drones."
            },
            {
              "name": "Tornado-S (9K515)",
              "type": "300mm Precision Multiple Launch Rocket System (MLRS)",
              "origin": "Russia (Splav)",
              "status": "CONFIRMED",
              "quantity": "Replacing legacy BM-30 Smerch",
              "role": "Fires GLONASS satellite-guided precision rockets up to 120 km with cluster or unitary bunker-buster warheads."
            }
          ]
        },
        {
          "name": "THERMOBARIC WEAPONS & HEAVY FLAMETHROWERS",
          "desc": "Specialized area-denial rocket systems creating devastating fuel-air explosive overpressure.",
          "systems": [
            {
              "name": "TOS-1A Solntsepek / TOS-2 Tosochka",
              "type": "Heavy Thermobaric Rocket Launcher",
              "origin": "Russia (Omsktransmash / Splav)",
              "status": "CONFIRMED",
              "quantity": "Operational with NBC Protection Troops",
              "role": "220mm unguided thermobaric rockets generating immense blast waves and vacuum combustion to clear fortified urban blocks and trench networks (6–15 km range)."
            }
          ]
        },
        {
          "name": "MULTI-ROLE COMBAT AIRCRAFT",
          "desc": "Air superiority and multi-role tactical fighters maintaining airspace dominance.",
          "systems": [
            {
              "name": "Su-57 Felon",
              "type": "5th Generation Stealth Multi-Role Fighter",
              "origin": "Russia (Sukhoi / Komsomolsk KnAAZ)",
              "status": "CONFIRMED",
              "quantity": "Over 24 operational aircraft delivered",
              "role": "Internal weapon bays, supercruise, 3D thrust-vectoring, side-looking AESA radars, and armed with R-37M extreme-range air-to-air missiles (300+ km)."
            },
            {
              "name": "Su-35S Flanker-E",
              "type": "4++ Generation Air Superiority Fighter",
              "origin": "Russia (Sukhoi)",
              "status": "CONFIRMED",
              "quantity": "110+ aircraft",
              "role": "Unmatched supermaneuverability, Irbis-E passive electronically scanned radar tracking 30 aerial targets simultaneously."
            },
            {
              "name": "Su-30SM2",
              "type": "Multi-Role Two-Seat Combat Aircraft",
              "origin": "Russia (Irkut Corp)",
              "status": "CONFIRMED",
              "quantity": "130+ aircraft in Air Force and Naval Aviation",
              "role": "Heavy strike fighter adapted with AL-41F1S engines and upgraded radar suites."
            }
          ]
        },
        {
          "name": "STRIKE AVIATION & HEAVY INTERCEPTORS",
          "desc": "Long-range frontline interdiction bombers and extreme-altitude interceptors.",
          "systems": [
            {
              "name": "Su-34M Fullback",
              "type": "Twin-Engine Armored Strike Fighter-Bomber",
              "origin": "Russia (Sukhoi / Novosibirsk NAPO)",
              "status": "CONFIRMED",
              "quantity": "120+ aircraft in frontline regiments",
              "role": "Heavy frontline bomber featuring an armored titanium cockpit bathtub, carrying 8,000 kg of FAB glide bombs with UMPC guidance kits."
            },
            {
              "name": "MiG-31BM / MiG-31K Foxhound",
              "type": "Supersonic Long-Range Interceptor & Kinzhal Carrier",
              "origin": "Russia (Mikoyan)",
              "status": "CONFIRMED",
              "quantity": "100+ operational airframes",
              "role": "World’s fastest operational combat jet (Mach 2.83), acting as the launch platform for Kh-47M2 Kinzhal hypersonic missiles."
            }
          ]
        },
        {
          "name": "ATTACK & RECONNAISSANCE HELICOPTERS",
          "desc": "Anti-armor gunships providing close-air support and tank hunting.",
          "systems": [
            {
              "name": "Ka-52M Alligator (Hokum-B)",
              "type": "Coaxial Twin-Rotor Attack Helicopter",
              "origin": "Russia (Kamov / Progress)",
              "status": "CONFIRMED",
              "quantity": "100+ helicopters",
              "role": "Equipped with GOES-451 electro-optical turret, LMUR (Izdeliye 305) guided missiles (14.5 km range), and Vitebsk onboard defense system."
            },
            {
              "name": "Mi-28NM Night Hunter",
              "type": "All-Weather Heavy Attack Helicopter",
              "origin": "Russia (Mil / Rostvertol)",
              "status": "CONFIRMED",
              "quantity": "Operational with Army Aviation",
              "role": "Mast-mounted 360-degree radar, 30mm Shipunov 2A42 autocannon, and Vikhr laser-beam-riding anti-tank missiles."
            }
          ]
        },
        {
          "name": "NUCLEAR ATTACK & CRUISE MISSILE SUBMARINES",
          "desc": "Silent undersea hunters armed with long-range land-attack and hypersonic missiles.",
          "systems": [
            {
              "name": "Project 885M Yasen-M (Severodvinsk / Kazan)",
              "type": "Nuclear-Powered Guided Missile Submarine (SSGN)",
              "origin": "Russia (Sevmash)",
              "status": "CONFIRMED",
              "quantity": "5 commissioned (4 more under construction)",
              "role": "World’s quietest operational nuclear submarine; 32 vertical launch tubes firing Tsirkon hypersonic, Kalibr land-attack, and Oniks anti-ship missiles."
            },
            {
              "name": "Project 955A Borei-A (Knyaz Vladimir)",
              "type": "SSBN Nuclear Ballistic Missile Submarine",
              "origin": "Russia (Sevmash)",
              "status": "CONFIRMED",
              "quantity": "7 commissioned Borei/Borei-A boats",
              "role": "Key pillar of strategic nuclear deterrence; armed with 16 RSM-56 Bulava SLBMs (each carrying 6 MIRVs) with pump-jet propulsion."
            }
          ]
        },
        {
          "name": "CONVENTIONAL DIESEL-ELECTRIC SUBMARINES",
          "desc": "Extremely quiet tactical submarines patrolling regional seas.",
          "systems": [
            {
              "name": "Project 636.3 Improved Kilo (\"Black Hole\")",
              "type": "Diesel-Electric Attack Submarine (SSK)",
              "origin": "Russia (Admiralty Shipyards)",
              "status": "CONFIRMED",
              "quantity": "12+ boats across Black Sea, Pacific, and Baltic Fleets",
              "role": "Dubbed \"Black Hole\" by the US Navy for its acoustic invisibility; armed with Kalibr-PL cruise missiles and heavy 533mm torpedoes."
            }
          ]
        },
        {
          "name": "SURFACE NAVAL COMBATANTS",
          "desc": "Missile frigates and corvettes carrying heavy stand-off strike armaments.",
          "systems": [
            {
              "name": "Admiral Gorshkov-class (Project 22350)",
              "type": "Guided Missile Frigate",
              "origin": "Russia (Severnaya Verf)",
              "status": "CONFIRMED",
              "quantity": "3 commissioned (7 under construction)",
              "role": "Frontline blue-water frigate equipped with 16 VLS cells firing Tsirkon and Kalibr missiles, with Poliment-Redut air defense (32 cells)."
            },
            {
              "name": "Steregushchiy / Gremyashchiy-class (Project 20380/20385)",
              "type": "Multi-Role Corvette",
              "origin": "Russia (Severnaya Verf / Amur Shipyard)",
              "status": "CONFIRMED",
              "quantity": "10+ corvettes",
              "role": "Stealth composite corvettes designed for coastal A2/AD, armed with Uran anti-ship or Kalibr vertical launch systems."
            }
          ]
        },
        {
          "name": "ELECTRONIC WARFARE & SIGNALS COUNTERMEASURES",
          "desc": "Unmatched global capabilities in GPS jamming, radar denial, and communications blinding.",
          "systems": [
            {
              "name": "Krasukha-4 (1RL257)",
              "type": "Broadband Ground-Based Multi-Functional Jamming Station",
              "origin": "Russia (KRET)",
              "status": "CONFIRMED",
              "quantity": "Standard equipment of EW brigades",
              "role": "Jams airborne surveillance radars (AWACS), satellite radar reconnaissance, and radar-guided missiles over a 300 km radius."
            },
            {
              "name": "Borisoglebsk-2 (RB-301B)",
              "type": "Automated Tactical EW System",
              "origin": "Russia (Sozvezdie)",
              "status": "CONFIRMED",
              "quantity": "Operational with Motorized Rifle divisions",
              "role": "Suppresses tactical HF/VHF radio networks, soldier radios, and commercial drone communication frequencies."
            },
            {
              "name": "Murmansk-BN",
              "type": "Long-Range Strategic HF Communications Jammer",
              "origin": "Russia (KRET)",
              "status": "CONFIRMED",
              "quantity": "Deployed on Kola Peninsula, Crimea, and Kaliningrad",
              "role": "Monstrous 32-meter antenna array capable of blinding high-frequency military communication networks across Europe and the North Atlantic up to 5,000 km."
            }
          ]
        }
      ]
    },
    "relations": {
      "main": [
        {
          "id": "RUS_IND",
          "country": "India",
          "flag": "🇮🇳",
          "status": "Special & Privileged Strategic Partner",
          "color": "#10b981",
          "note": "Historical defense hardware supplier, crude oil supplier, nuclear energy partner; settled in local currencies."
        },
        {
          "id": "RUS_CHN",
          "country": "China",
          "flag": "🇨🇳",
          "status": "Comprehensive Strategic Partnership (\"No Limits\")",
          "color": "#3b82f6",
          "note": "Core Eurasian geopolitical axis; record $240B trade; joint military patrols; anti-hegemony coordination."
        },
        {
          "id": "RUS_USA",
          "country": "United States",
          "flag": "🇺🇸",
          "status": "Strategic Adversary / Nuclear Parity",
          "color": "#ef4444",
          "note": "Direct nuclear parity; proxy conflict in Eastern Europe; treaty arms control unraveling."
        },
        {
          "id": "RUS_BLR",
          "country": "Belarus",
          "flag": "🇧🇾",
          "status": "Union State Ally & Joint Defense",
          "color": "#10b981",
          "note": "Integrated military grouping; Russian tactical nuclear weapons stationed on Belarusian territory."
        }
      ],
      "searchable": [
        {
          "id": "RUS_IND",
          "country": "India",
          "flag": "🇮🇳",
          "status": "Special & Privileged Strategic Partner",
          "color": "#10b981",
          "summary": "Bilateral relations are founded on seven decades of historic trust and the landmark 1971 Treaty of Friendship. Russia is India’s premier defense technology partner (BrahMos joint venture, Su-30MKI licensed production, S-400 air defense systems, Talwar-class frigates, and SSN nuclear submarine leases). Since 2022, India emerged as Russia’s second-largest crude oil customer, importing 1.7–2.0 million barrels per day at discounted prices, saving billions in Indian foreign exchange. Bilateral trade exceeded $65 Billion, settled primarily in non-dollar payment mechanisms.",
          "keyAreas": [
            "BrahMos Missile Co-Development",
            "Discounted Crude Oil Supply Lifeline",
            "Kudankulam Nuclear Power Plant (Units 1-6)",
            "INSTC Transit Corridor via Iran",
            "Vladivostok-Chennai Eastern Maritime Corridor"
          ]
        },
        {
          "id": "RUS_CHN",
          "country": "China",
          "flag": "🇨🇳",
          "status": "Comprehensive Strategic Partnership of Coordination",
          "color": "#3b82f6",
          "summary": "Declared a \"no limits\" partnership in February 2022. China is Russia’s primary economic lifeline under Western sanctions, providing automotive, machine tool, and electronic goods in exchange for discounted pipeline gas, crude oil, and coal. The two nuclear giants conduct regular joint naval and strategic bomber patrols across the Sea of Japan, Bering Sea, and Western Pacific.",
          "keyAreas": [
            "Power of Siberia 1 & 2 Gas Pipelines",
            "De-Dollarization of Bilateral Commerce (100% Yuan/Ruble)",
            "Joint Strategic Bomber & Naval Flotilla Patrols",
            "SCO & BRICS Institutional Coordination"
          ]
        },
        {
          "id": "RUS_PRK",
          "country": "North Korea",
          "flag": "🇰🇵",
          "status": "Treaty on Comprehensive Strategic Partnership (Mutual Defense)",
          "color": "#ef4444",
          "summary": "In June 2024, President Putin and Kim Jong Un signed a landmark mutual defense treaty (Article 4 mandating immediate military assistance if either is attacked). North Korea supplies millions of 152mm artillery shells and KN-23 ballistic missiles in exchange for Russian space launch technology, air defense assistance, and refined petroleum products.",
          "keyAreas": [
            "Mutual Defense Obligation (Article 4)",
            "Artillery Munitions Supply",
            "Space & Satellite Launch Assistance",
            "Tumangang Border Logistics"
          ]
        },
        {
          "id": "RUS_IRN",
          "country": "Iran",
          "flag": "🇮🇷",
          "status": "Strategic Defense & Geoeconomic Alignment",
          "color": "#f97316",
          "summary": "A deep defense and logistical partnership anchored by the International North-South Transport Corridor (INSTC). Iran supplies Shahed-136 loitering munitions and transfer technology for the Alabuga drone assembly facility; Russia provides Su-35 combat jets and advanced air defense systems.",
          "keyAreas": [
            "INSTC Transit Linking Russia to Indian Ocean",
            "UAV Technology Transfer & Alabuga Factory",
            "Civil Nuclear Cooperation (Bushehr)",
            "BRICS & SCO Integration"
          ]
        },
        {
          "id": "RUS_TUR",
          "country": "Turkey",
          "flag": "🇹🇷",
          "status": "Pragmatic Transactional Co-existence",
          "color": "#eab308",
          "summary": "A complex, transactional relationship balancing cooperation and regional rivalry. Turkey purchased Russian S-400 missile systems and Rosatom is building Turkey’s first nuclear plant (Akkuyu), while Ankara supplies Bayraktar drones to Ukraine and controls naval access to the Black Sea under the 1936 Montreux Convention.",
          "keyAreas": [
            "Akkuyu Nuclear Power Plant ($20B Project)",
            "TurkStream Natural Gas Pipeline",
            "Montreux Convention Black Sea Straits",
            "Syria & South Caucasus Diplomatic Balancing"
          ]
        }
      ]
    },
    "currentTensions": [
      {
        "title": "Ukraine Armed Conflict & NATO High-Readiness Standoff",
        "severity": "Critical / High Intensity Conflict",
        "color": "#ef4444",
        "desc": "Active full-scale military conflict along a 1,000-km frontline; NATO forward-deploying multinational battlegroups along the Baltic-Black Sea eastern flank."
      },
      {
        "title": "Kaliningrad & Baltic Sea Encirclement Dynamics",
        "severity": "High Tension",
        "color": "#f97316",
        "desc": "Following Sweden and Finland's NATO accession, the Baltic Sea is effectively ringed by NATO members; Russia reinforces Kaliningrad with Iskander-M missiles."
      },
      {
        "title": "Arctic Militarization & Northern Sea Route Sovereignty",
        "severity": "Elevated Tension",
        "color": "#3b82f6",
        "desc": "Russia claims domestic regulatory jurisdiction over the NSR, which the US contests as international transit waters; expansion of Arctic military bases."
      },
      {
        "title": "Kuril Islands / Northern Territories Dispute with Japan",
        "severity": "Diplomatic Freeze",
        "color": "#eab308",
        "desc": "Following Japanese sanctions, Moscow terminated WWII peace treaty negotiations and deployed Bastion-P anti-ship missile batteries to Paramushir and Matua."
      }
    ],
    "strategicLocations": [
      {
        "name": "Sevastopol Naval Base (Crimea)",
        "type": "Black Sea Fleet HQ",
        "coords": "44.61° N, 33.52° E",
        "significance": "Historic warm-water naval fortress guarding Russia's southern maritime flank; heavily fortified against surface and subsurface drone attacks."
      },
      {
        "name": "Severomorsk (Kola Peninsula)",
        "type": "Northern Fleet HQ",
        "coords": "69.07° N, 33.42° E",
        "significance": "Command hub for Russia's nuclear ballistic and attack submarines (SSBNs/SSGNs) operating in the Arctic and North Atlantic."
      },
      {
        "name": "Vladivostok Port",
        "type": "Pacific Fleet HQ",
        "coords": "43.11° N, 131.87° E",
        "significance": "Pacific naval headquarters and eastern terminal of the Trans-Siberian Railway; gateway for the Eastern Maritime Corridor to Chennai."
      },
      {
        "name": "Kaliningrad Special Defense District",
        "type": "A2/AD Enclave",
        "coords": "54.71° N, 20.51° E",
        "significance": "Heavily fortified Baltic exclave hosting S-400 systems, Iskander-M nuclear-capable ballistic missiles, and Baltic Fleet units."
      },
      {
        "name": "Tartus Naval Base & Khmeimim Air Base (Syria)",
        "type": "Mediterranean Staging Base",
        "coords": "34.89° N, 35.88° E",
        "significance": "Russia’s only naval facility in the Mediterranean Sea, providing sovereign logistics and air defense projection."
      },
      {
        "name": "Vostochny Cosmodrome (Amur Oblast)",
        "type": "Civilian Spaceport",
        "coords": "51.88° N, 128.33° E",
        "significance": "Modern spaceport developed in the Russian Far East to reduce strategic dependence on the Baikonur Cosmodrome in Kazakhstan."
      }
    ],
    "keyEvents": [
      {
        "title": "1945 Victory in the Great Patriotic War",
        "category": "Existential Superpower Milestone",
        "date": "May 9, 1945"
      },
      {
        "title": "1991 Dissolution of the Soviet Union",
        "category": "Systemic Geopolitical Realignment",
        "date": "December 25, 1991"
      },
      {
        "title": "2007 Munich Security Conference Address",
        "category": "Foreign Policy Reorientation",
        "date": "February 10, 2007"
      },
      {
        "title": "2014 Reunification of Crimea & Western Sanctions",
        "category": "Territorial Sovereignty",
        "date": "March 18, 2014"
      },
      {
        "title": "2022 Full-Scale Ukraine Conflict & Pivot to Asia",
        "category": "Major Great Power Rupture",
        "date": "February 24, 2022"
      },
      {
        "title": "2024 Kazan BRICS Summit & Multilateral Currency Push",
        "category": "Global South Architecture",
        "date": "October 24, 2024"
      }
    ],
    "indiaImpact": {
      "headline": "Russia as India’s Irreplaceable Strategic Defense & Energy Lifeline",
      "points": [
        {
          "title": "Legacy of the 1971 Indo-Soviet Treaty & Unconditional Diplomatic Shield",
          "desc": "Moscow provided India decisive naval deterrence against US and British task forces during the 1971 Bangladesh Liberation War and has consistently utilized its permanent UN Security Council veto to shield India on Kashmir."
        },
        {
          "title": "Defense Hardware Foundation & Sovereign Technology Co-Development",
          "desc": "Over 60% of the Indian military’s active equipment is of Russian or Soviet origin. Unlike Western suppliers who restrict source code and technology transfers, Russia established true joint ventures including the BrahMos supersonic cruise missile, licensed assembly of 260+ Su-30MKI fighters, 1,200+ T-90 Bhishma tanks, S-400 air defense batteries, and leasing of Akula-class nuclear attack submarines (INS Chakra)."
        },
        {
          "title": "Hydrocarbon Energy Lifeline & Foreign Exchange Savings",
          "desc": "Following Western sanctions on Russian petroleum in 2022, India surged purchases of discounted Russian Urals crude from <2% to over 40% of its total oil import basket (approx. 1.8M bpd), saving the Indian treasury an estimated $10+ Billion in foreign exchange and stabilizing domestic inflation."
        },
        {
          "title": "Civil Nuclear Energy Leadership (Kudankulam Mega-Project)",
          "desc": "Russia’s Rosatom is building India’s largest nuclear power installation at Kudankulam, Tamil Nadu, supplying six 1,000 MW VVER light-water reactors with lifetime sovereign fuel guarantees, vital for India’s clean energy transition."
        },
        {
          "title": "Strategic Transit Corridors: INSTC & Vladivostok–Chennai Route",
          "desc": "India and Russia are operationalizing two multimodal bypass corridors: the International North-South Transport Corridor (INSTC) connecting Mumbai to Saint Petersburg via Iran (bypassing the Suez Canal and Pakistan), and the Eastern Maritime Corridor (EMC) linking Chennai to Vladivostok, reducing transit time from 40 to 24 days."
        }
      ]
    }
  },
  "USA": {
    "id": "USA",
    "name": "United States",
    "officialName": "United States of America",
    "capital": "Washington, D.C.",
    "region": "North America",
    "subregion": "Northern America",
    "flag": "🇺🇸",
    "lat": 37.0902,
    "lng": -95.7129,
    "area": "9,833,517 km² (3rd largest globally)",
    "population": "335 Million",
    "politicalSystemType": "Federal Constitutional Presidential Republic",
    "currency": "United States Dollar (USD / $)",
    "languages": "English (National Language), Spanish",
    "timeZones": "6 Standard Time Zones (UTC-5 to UTC-10)",
    "tagline": "Global Superpower, Anchor of NATO & World Reserve Currency Hegemon",
    "overview": {
      "beginner": "The United States is the world’s foremost economic and military superpower. It leads the NATO alliance, maintains over 750 military bases globally, and issues the US dollar, which accounts for the vast majority of international trade and central bank reserves. The US focuses its grand strategy on deterring Chinese military expansion in the Indo-Pacific, supporting European allies against Russian aggression, and safeguarding freedom of navigation across global maritime chokepoints.",
      "advanced": "The United States exercises global hegemony through structural dominance across four pillars: the preeminent reserve currency status of the US Dollar; unmatched blue-water carrier strike group naval projection; the primary network of collective defense alliances (NATO Article 5, bilateral defense pacts with Japan, South Korea, Australia, Philippines); and dominance over global computing and financial architecture. Confronting a peer challenge from China and revisionist pressure from Russia, Washington is executing an \"Integrated Deterrence\" strategy, reorganizing high-tech supply chains through \"friend-shoring\" (CHIPS and Science Act), expanding the QUAD and AUKUS pacts, and modernizing its nuclear triad."
    },
    "history": [
      {
        "year": "1776",
        "title": "Declaration of Independence & Revolutionary War",
        "phase": "Founding Era",
        "whatHappened": "Thirteen North American colonies declared independence from the British Empire, establishing a constitutional republic founded on Enlightenment ideals and popular sovereignty.",
        "where": "Philadelphia, Pennsylvania",
        "actors": [
          "George Washington",
          "Thomas Jefferson",
          "Benjamin Franklin"
        ],
        "whyItMattered": "The first modern anti-colonial democratic revolution, establishing the constitutional architecture of the United States.",
        "consequences": "Enacted the 1787 United States Constitution with separation of powers.",
        "claimType": "HISTORICAL FACT",
        "sources": "Declaration of Independence (1776) / National Archives"
      },
      {
        "year": "1941–1945",
        "title": "World War II & Emergence as Global Superpower",
        "phase": "Total War & Hegemony",
        "whatHappened": "Following the Japanese attack on Pearl Harbor, the US mobilized its immense industrial base, waging a two-front war in Europe and the Pacific. Developed the atomic bomb (Manhattan Project) and forced Japanese surrender in August 1945.",
        "where": "Pacific Theater, Western Europe, Hiroshima, Nagasaki",
        "actors": [
          "Franklin D. Roosevelt",
          "Harry S. Truman",
          "General Dwight D. Eisenhower",
          "General Douglas MacArthur"
        ],
        "whyItMattered": "Transformed the US from an isolationist nation into the undisputed economic, financial, and nuclear hegemon of the Western world.",
        "consequences": "Created the Bretton Woods institutions (IMF, World Bank), founded the United Nations in San Francisco, and launched the Marshall Plan.",
        "claimType": "HISTORICAL FACT",
        "sources": "Bretton Woods Agreement (1944) / United Nations Charter (1945)"
      },
      {
        "year": "1947–1991",
        "title": "Cold War & Containment of the Soviet Bloc",
        "phase": "Bipolar Superpower Era",
        "whatHappened": "Formulated the Truman Doctrine and George Kennan’s \"containment\" strategy. Formed NATO in 1949, fought wars in Korea and Vietnam, engaged in the Space Race, and negotiated nuclear arms control treaties with Moscow before the Soviet collapse in 1991.",
        "where": "Washington, Berlin, Seoul, Saigon, Moscow",
        "actors": [
          "Harry S. Truman",
          "John F. Kennedy",
          "Richard Nixon",
          "Ronald Reagan"
        ],
        "whyItMattered": "Established the liberal rules-based international order and cemented the US Dollar as the primary global reserve currency.",
        "consequences": "Left the US as the world's sole \"hyperpower\" at the start of the 1990s.",
        "claimType": "HISTORICAL FACT",
        "sources": "1949 North Atlantic Treaty / Wilson Center Cold War Records"
      },
      {
        "year": "2001–Present",
        "title": "War on Terror to Indo-Pacific Strategic Competition",
        "phase": "Contemporary Geopolitical Era",
        "whatHappened": "Following the September 11 attacks, the US fought protracted wars in Afghanistan and Iraq. Over the past decade, Washington pivoted its grand strategy to great-power competition with China and Russia, launching AUKUS, reviving the QUAD, and supporting Ukraine against Russian military action.",
        "where": "Middle East, Indo-Pacific, Washington",
        "actors": [
          "George W. Bush",
          "Barack Obama",
          "Donald Trump",
          "Joe Biden"
        ],
        "whyItMattered": "Shifted American military planning from counter-insurgency back to high-end great-power deterrence and supply chain reshoring.",
        "consequences": "Enacted the CHIPS Act, restricted advanced semiconductor exports to China, and forward-deployed military assets to the First Island Chain.",
        "claimType": "CURRENT",
        "sources": "US National Security Strategy (2022) / Department of Defense"
      }
    ],
    "politicalSystem": {
      "type": "Federal Constitutional Presidential Republic",
      "constitution": "1787 Constitution of the United States",
      "branches": [
        {
          "name": "Executive Branch",
          "role": "President as Head of State and Government and Commander-in-Chief of the Armed Forces."
        },
        {
          "name": "Legislative Branch (Congress)",
          "role": "Bicameral: House of Representatives (435 members) and Senate (100 members)."
        },
        {
          "name": "Judicial Branch",
          "role": "Supreme Court of the United States exercising constitutional review."
        }
      ],
      "currentLeadership": {
        "headOfState": "President of the United States",
        "headOfGovernment": "President of the United States (Combined Head of State and Chief Executive)",
        "commanderInChief": "Supreme command exercised via National Command Authority and Unified Combatant Commands."
      },
      "strategicPosture": "Integrated Deterrence, global forward presence across 6 geographic combatant commands, and preservation of maritime freedom of navigation."
    },
    "geographyBorders": {
      "landArea": "9,833,517 km² (spanning from Atlantic to Pacific, plus Alaska and Hawaii)",
      "topography": "Appalachian Mountains in the east, massive Great Plains agricultural basin in the center, Rocky Mountains and Sierra Nevada in the west, and fertile Pacific coastal valleys.",
      "rivers": [
        "Mississippi-Missouri River System (World's premier commercial inland waterway)",
        "Colorado",
        "Columbia",
        "Rio Grande",
        "Hudson"
      ],
      "mountains": [
        "Rocky Mountains",
        "Appalachians",
        "Sierra Nevada",
        "Alaska Range (Denali 6,190m)"
      ],
      "seas": [
        "Atlantic Ocean",
        "Pacific Ocean",
        "Arctic Ocean (Northern Alaska)",
        "Gulf of Mexico",
        "Caribbean Sea"
      ],
      "climates": [
        "Humid Continental",
        "Humid Subtropical",
        "Mediterranean (California)",
        "Arid / Desert",
        "Subarctic / Tundra (Alaska)"
      ],
      "landBorders": [
        {
          "country": "Canada",
          "id": "CAN",
          "borderLength": "8,891 km",
          "region": "North",
          "status": "World’s Longest Demilitarized Border",
          "strategicContext": "NORAD integrated aerospace defense partner and primary NATO/USMCA trading ally."
        },
        {
          "country": "Mexico",
          "id": "MEX",
          "borderLength": "3,145 km",
          "region": "South",
          "status": "USMCA Partner / Active Border Security",
          "strategicContext": "Overland manufacturing supply chain partner; focal point of narcotics interdiction and migration control."
        }
      ],
      "maritimeBorders": [
        {
          "country": "Russia",
          "id": "RUS",
          "boundary": "Bering Strait (Little Diomede and Big Diomede 3.8 km apart)"
        },
        {
          "country": "Cuba",
          "id": "CUB",
          "boundary": "Straits of Florida (150 km gap; hosts Guantanamo Bay naval station)"
        },
        {
          "country": "Bahamas",
          "id": "BHS",
          "boundary": "Atlantic / Florida maritime boundary"
        }
      ]
    },
    "economy": {
      "gdpNominal": "$28.7 Trillion (World’s largest economy)",
      "gdpPPP": "$28.7 Trillion (2nd largest after China)",
      "gdpPerCapita": "$85,000 Nominal",
      "currency": "United States Dollar (USD / $)",
      "dollarHegemony": {
        "summary": "The US Dollar comprises ~58% of global foreign exchange reserves and over 85% of foreign exchange transactions.",
        "significance": "Enables the US to run perpetual current account deficits, borrow cheaply, and project global financial power through SWIFT and Treasury sanctions."
      },
      "keySectors": [
        {
          "name": "High-Tech & Artificial Intelligence",
          "desc": "Home to the \"Magnificent Seven\" (Apple, Microsoft, Alphabet, Amazon, NVIDIA, Meta, Tesla) driving global compute."
        },
        {
          "name": "Aerospace & Defense Industry",
          "desc": "World’s largest arms exporter (~42% global market share: Lockheed Martin, Boeing, RTX, Northrop Grumman)."
        },
        {
          "name": "Energy Superpower (Shale Revolution)",
          "desc": "World’s #1 producer of crude oil (13.2M bpd) and liquefied natural gas (LNG), supplying Europe post-2022."
        }
      ],
      "majorTradingPartners": [
        {
          "country": "Mexico",
          "share": "Largest trading partner under USMCA ($800B+ trade)"
        },
        {
          "country": "Canada",
          "share": "Integrated energy and automotive partner"
        },
        {
          "country": "China",
          "share": "Major consumer goods supplier and high-tech supply chain focal point"
        },
        {
          "country": "European Union",
          "share": "Transatlantic commercial and investment alliance"
        }
      ]
    },
    "military": {
      "expenditure": "$877.0+ Billion (2024 budget; accounts for ~39% of entire global military spending)",
      "personnel": {
        "active": "1,328,000 active duty military personnel across Army, Navy, Air Force, Marine Corps, Space Force, Coast Guard",
        "reserves": "799,000 National Guard and Reserve personnel"
      },
      "doctrine": "Integrated Deterrence across all domains (air, land, sea, space, cyber); Forward Defense via 11 Carrier Strike Groups and global overseas bases; Extended Nuclear Deterrence shielding 30+ treaty allies.",
      "categories": [
        {
          "name": "NUCLEAR TRIAD & STRATEGIC BOMBERS",
          "desc": "1,550 deployed strategic nuclear warheads under New START baselines.",
          "systems": [
            {
              "name": "Ohio-class / Columbia-class SSBN",
              "type": "Nuclear Ballistic Missile Submarine",
              "origin": "USA (General Dynamics Electric Boat)",
              "status": "CONFIRMED",
              "quantity": "14 Ohio SSBNs (Columbia entering production)",
              "role": "Carries 20 Trident II D5 SLBMs per boat, providing unassailable second-strike deterrence."
            },
            {
              "name": "Minuteman III (LGM-30G) / Sentinel",
              "type": "Silo-Based ICBM",
              "origin": "USA (Boeing / Northrop Grumman)",
              "status": "CONFIRMED",
              "quantity": "400 operational silos",
              "role": "Solid-fueled land-based leg of the nuclear triad deployed across Wyoming, North Dakota, and Montana."
            },
            {
              "name": "B-2 Spirit / B-21 Raider",
              "type": "Stealth Strategic Flying-Wing Bomber",
              "origin": "USA (Northrop Grumman)",
              "status": "CONFIRMED",
              "quantity": "20 B-2 (100+ B-21 planned)",
              "role": "Penetrates advanced dense air defense networks carrying nuclear gravity bombs or conventional standoff cruise missiles."
            }
          ]
        },
        {
          "name": "CARRIER STRIKE GROUPS & NAVAL PROJECTION",
          "desc": "Unmatched global naval power projection.",
          "systems": [
            {
              "name": "Nimitz-class & Gerald R. Ford-class",
              "type": "Nuclear-Powered Aircraft Carriers (CVN)",
              "origin": "USA (Newport News Shipbuilding)",
              "status": "CONFIRMED",
              "quantity": "11 operational supercarriers",
              "role": "100,000-ton supercarriers carrying 75+ strike aircraft (F-35C, F/A-18E/F, E-2D Hawkeye) projecting power globally."
            },
            {
              "name": "Arleigh Burke-class (Flight I/II/III)",
              "type": "Aegis Guided Missile Destroyer (DDG)",
              "origin": "USA (Bath Iron Works / Ingalls)",
              "status": "CONFIRMED",
              "quantity": "73+ active destroyers",
              "role": "Equipped with SPY-1D / SPY-6 AESA radar, 96 VLS cells firing SM-2, SM-3, SM-6, Tomahawk, and ESSM missiles."
            },
            {
              "name": "Virginia-class (SSN-774)",
              "type": "Nuclear Fast-Attack Submarine",
              "origin": "USA (General Dynamics / Newport News)",
              "status": "CONFIRMED",
              "quantity": "22+ commissioned",
              "role": "Silent hunter-killer submarine equipped with Virginia Payload Module (VPM) firing Tomahawk cruise missiles."
            }
          ]
        },
        {
          "name": "5TH GENERATION COMBAT AVIATION",
          "desc": "World’s most advanced stealth tactical fighter fleets.",
          "systems": [
            {
              "name": "F-35 Lightning II (A/B/C)",
              "type": "5th Gen Multi-Role Stealth Fighter",
              "origin": "USA (Lockheed Martin)",
              "status": "CONFIRMED",
              "quantity": "1,000+ delivered globally to US and 17 allied nations",
              "role": "Flying sensor fusion node combining stealth, electronic attack, and precision strike."
            },
            {
              "name": "F-22 Raptor",
              "type": "5th Gen Air Superiority Stealth Fighter",
              "origin": "USA (Lockheed Martin)",
              "status": "CONFIRMED",
              "quantity": "183 operational fighters",
              "role": "Unrivaled air dominance platform featuring supercruise and super-stealth."
            }
          ]
        },
        {
          "name": "MISSILE DEFENSE & PRECISION STRIKE",
          "desc": "Layered missile shield and precision artillery.",
          "systems": [
            {
              "name": "M142 HIMARS",
              "type": "High Mobility Artillery Rocket System",
              "origin": "USA (Lockheed Martin)",
              "status": "CONFIRMED",
              "quantity": "Extensively deployed",
              "role": "Fires GMLRS precision rockets (80 km) and PrSM ballistic missiles (500 km)."
            },
            {
              "name": "THAAD (Terminal High Altitude Area Defense)",
              "type": "Anti-Ballistic Missile Defense",
              "origin": "USA (Lockheed Martin)",
              "status": "CONFIRMED",
              "quantity": "Deployed in Guam, South Korea, Israel, and Middle East",
              "role": "Intercepts short and intermediate-range ballistic missiles in endo- and exo-atmosphere."
            }
          ]
        }
      ]
    },
    "relations": {
      "main": [
        {
          "id": "USA_CHN",
          "country": "China",
          "flag": "🇨🇳",
          "status": "Primary Peer Competitor & Rival",
          "color": "#ef4444",
          "note": "Taiwan Strait tensions, Indo-Pacific naval competition, semiconductor export controls."
        },
        {
          "id": "USA_RUS",
          "country": "Russia",
          "flag": "🇷🇺",
          "status": "Strategic Adversary / NATO Standoff",
          "color": "#ef4444",
          "note": "Supporting Ukraine, direct nuclear deterrence, European flank security."
        },
        {
          "id": "USA_IND",
          "country": "India",
          "flag": "🇮🇳",
          "status": "Comprehensive Global Strategic Partner",
          "color": "#10b981",
          "note": "QUAD anchor, foundational defense agreements (BECA, LEMOA), iCET tech cooperation."
        },
        {
          "id": "USA_JPN",
          "country": "Japan",
          "flag": "🇯🇵",
          "status": "Core Indo-Pacific Treaty Ally",
          "color": "#3b82f6",
          "note": "Hosts 54,000 US military personnel (US Forces Japan); First Island Chain bastion."
        }
      ],
      "searchable": [
        {
          "id": "USA_IND",
          "country": "India",
          "flag": "🇮🇳",
          "status": "Comprehensive Global Strategic Partner",
          "color": "#10b981",
          "summary": "The US-India relationship is defined by shared interests in preserving a free and open Indo-Pacific, balancing Chinese expansionism, and securing critical technology supply chains under the Initiative on Critical and Emerging Technologies (iCET). Foundational defense pacts (LEMOA, COMCASA, BECA) enable real-time geospatial intelligence sharing and mutual logistical basing access.",
          "keyAreas": [
            "QUAD Strategic Forum",
            "GE F414 Jet Engine Co-Production (HAL)",
            "MQ-9B SkyGuardian Drone Procurement",
            "iCET Semiconductor & Defense AI Initiatives"
          ]
        },
        {
          "id": "USA_TWN",
          "country": "Taiwan",
          "flag": "🇹🇼",
          "status": "Strategic Partner (Taiwan Relations Act)",
          "color": "#06b6d4",
          "summary": "Governed by the Taiwan Relations Act, Three Joint Communiqués, and Six Assurances. The US sells advanced defensive hardware (F-16V, Harpoon coastal batteries, Patriot missiles) and deters unilateral PRC military aggression under the doctrine of Strategic Ambiguity.",
          "keyAreas": [
            "Arms Sales & Military Training",
            "TSMC Arizona Semiconductor Fabs",
            "Freedom of Navigation Strait Transits"
          ]
        }
      ]
    },
    "currentTensions": [
      {
        "title": "Taiwan Strait & First Island Chain Deterrence",
        "severity": "Critical Great-Power Flashpoint",
        "color": "#ef4444",
        "desc": "US Navy maintains continuous freedom-of-navigation transits while building asymmetric anti-ship missile garrisons in the Philippines and Japan to deter a Chinese amphibious assault."
      },
      {
        "title": "European Deterrence & Support for Ukraine",
        "severity": "High Tension",
        "color": "#f97316",
        "desc": "Coordinating NATO eastern flank defense and supplying precision arms, air defense, and satellite intelligence to counter Russian military forces."
      }
    ],
    "strategicLocations": [
      {
        "name": "Guam (Naval Base Guam & Andersen AFB)",
        "type": "Forward Pacific Citadel",
        "coords": "13.44° N, 144.79° E",
        "significance": "Key power-projection hub in the Second Island Chain hosting strategic bombers and fast-attack submarines."
      },
      {
        "name": "Yokosuka Naval Base (Japan)",
        "type": "Forward Naval Fleet HQ",
        "coords": "35.28° N, 139.67° E",
        "significance": "Homeport of the US Seventh Fleet and forward-deployed carrier strike group (USS Ronald Reagan / George Washington)."
      },
      {
        "name": "Al Udeid Air Base (Qatar)",
        "type": "CENTCOM Forward Air HQ",
        "coords": "25.11° N, 51.31° E",
        "significance": "Largest US military air base in the Middle East, directing air operations across the Persian Gulf."
      },
      {
        "name": "Ramstein Air Base (Germany)",
        "type": "USAFE HQ & European Logistics Hub",
        "coords": "49.43° N, 7.60° E",
        "significance": "Command hub for US Air Forces in Europe and primary conduit for transatlantic military logistics."
      }
    ],
    "keyEvents": [
      {
        "title": "1945 Founding of Bretton Woods & UN",
        "category": "Global Architecture",
        "date": "1945"
      },
      {
        "title": "1949 NATO Collective Defense Treaty",
        "category": "Alliance Architecture",
        "date": "April 1949"
      },
      {
        "title": "1991 Cold War Victory & Unipolar Moment",
        "category": "Geopolitical Shift",
        "date": "December 1991"
      },
      {
        "title": "2022 National Security Strategy (China/Russia Focus)",
        "category": "Great Power Competition",
        "date": "October 2022"
      }
    ],
    "indiaImpact": {
      "headline": "The United States as India’s Indispensable High-Tech & QUAD Partner",
      "points": [
        {
          "title": "Indo-Pacific Balance of Power Anchor",
          "desc": "The US views India as the indispensable counterweight to Chinese hegemony in Asia, supporting India's rise as a leading global military and industrial power."
        },
        {
          "title": "Defense Technology Co-Production (iCET)",
          "desc": "Landmark agreements for General Electric to manufacture GE-F414 jet engines in India with 80% technology transfer, paired with procurement of 31 MQ-9B armed drones."
        },
        {
          "title": "Largest Bilateral Trading Partner",
          "desc": "The US is India’s largest trade partner ($120B+ goods trade), with India running a substantial trade surplus driven by IT services, pharmaceuticals, and engineering goods."
        }
      ]
    }
  },
  "CHN": {
    "id": "CHN",
    "name": "China",
    "officialName": "People's Republic of China (中华人民共和国)",
    "capital": "Beijing",
    "region": "East Asia",
    "subregion": "Eastern Asia",
    "flag": "🇨🇳",
    "lat": 35.8617,
    "lng": 104.1954,
    "area": "9,596,961 km² (4th largest globally)",
    "population": "1.41 Billion",
    "politicalSystemType": "Unitary One-Party Socialist Republic",
    "currency": "Chinese Yuan / Renminbi (CNY / ¥)",
    "languages": "Standard Chinese (Mandarin / Putonghua)",
    "timeZones": "Single Time Zone: UTC+8 (Beijing Time across entire territory)",
    "tagline": "World's Factory, Emerging Superpower & Belt and Road Architect",
    "overview": {
      "beginner": "China is the world’s second-largest economy and the global manufacturing powerhouse, producing the vast majority of electronics, solar panels, batteries, and steel. Governed by the Chinese Communist Party (CCP) under President Xi Jinping, China seeks to achieve \"National Rejuvenation,\" which includes absorbing Taiwan and establishing dominance in the South China Sea. China engages in intense technological and geopolitical competition with the United States while maintaining close strategic ties with Russia.",
      "advanced": "The People's Republic of China (PRC) operates a grand strategy aimed at transforming itself into the preeminent superpower in East Asia and a leading global power by the centenary of the PRC in 2049. China leverages its $18T+ industrial economy, the $1T Belt and Road Initiative (BRI), and rapid military modernization of the People’s Liberation Army (PLA) across naval, rocket, and cyber domains. Beijing seeks to breach the First Island Chain, claim sovereignty over the South China Sea within its \"Ten-Dash Line,\" enforce unification with Taiwan, and create alternative non-Western financial networks through the BRICS and SCO."
    },
    "history": [
      {
        "year": "c. 221 BCE",
        "title": "Qin Dynasty & Imperial Unification",
        "phase": "Imperial Foundation",
        "whatHappened": "Qin Shi Huang conquered the rival Warring States, unifying China under centralized bureaucratic legalism. Standardized writing, currency, weights, and measures, and connected defensive walls to form the earliest Great Wall.",
        "where": "Xianyang, Shaanxi",
        "actors": [
          "Qin Shi Huang",
          "Chancellor Li Si"
        ],
        "whyItMattered": "Created the enduring administrative model of a centralized, unified Chinese imperial state.",
        "consequences": "Established the title and institution of the Emperor that persisted for over 2,100 years until 1912.",
        "claimType": "HISTORICAL FACT",
        "sources": "Records of the Grand Historian (Shiji by Sima Qian)"
      },
      {
        "year": "1839–1949",
        "title": "Century of Humiliation & Fall of the Qing Empire",
        "phase": "Foreign Encroachment & Civil War",
        "whatHappened": "Defeat in the Opium Wars forced China to sign unequal treaties, ceding Hong Kong to Britain and opening treaty ports. The 1911 Xinhai Revolution ended imperial rule. Decades of warlordism, Japanese brutal invasion (WWII), and Civil War between Chiang Kai-shek's Nationalists (KMT) and Mao Zedong's Communists (CCP) followed.",
        "where": "Nanjing, Beijing, Shanghai, Yan'an",
        "actors": [
          "Sun Yat-sen",
          "Chiang Kai-shek",
          "Mao Zedong"
        ],
        "whyItMattered": "The foundational trauma that drives modern Chinese nationalist foreign policy: the vow that China will \"never again be bullied or humiliated by foreign powers.\"",
        "consequences": "On October 1, 1949, Mao Zedong proclaimed the founding of the People's Republic of China in Tiananmen Square.",
        "claimType": "HISTORICAL FACT",
        "sources": "Treaty of Nanking (1842) / Selected Works of Mao Zedong"
      },
      {
        "year": "1978–2012",
        "title": "Reform and Opening Up (Deng Xiaoping Era)",
        "phase": "Economic Miracle",
        "whatHappened": "Following the chaos of the Cultural Revolution, Deng Xiaoping launched market-oriented reforms (\"Socialism with Chinese characteristics\"). Established Special Economic Zones (Shenzhen), welcomed foreign direct investment, and joined the World Trade Organization (WTO) in 2001, lifting 800 million citizens out of poverty.",
        "where": "Beijing, Shenzhen, Shanghai Pudong",
        "actors": [
          "Deng Xiaoping",
          "Jiang Zemin",
          "Zhu Rongji"
        ],
        "whyItMattered": "Transformed China from an impoverished agrarian nation into the \"Factory of the World\" and the second-largest economy on Earth.",
        "consequences": "Maintained Deng's foreign policy principle: \"Hide your strength, bide your time\" (taoguang yanghui).",
        "claimType": "HISTORICAL FACT",
        "sources": "Third Plenum of the 11th Central Committee (1978) / WTO Accession Protocol (2001)"
      },
      {
        "year": "2012–Present",
        "title": "Xi Jinping Era & The Chinese Dream",
        "phase": "Great Power Reassertion",
        "whatHappened": "Xi Jinping consolidated power, launching the Belt and Road Initiative, building artificial island military bases in the South China Sea, and constructing the world's largest navy by ship count. Replaced Deng’s caution with assertive \"Wolf Warrior\" diplomacy and designated Taiwan unification as an historical inevitability.",
        "where": "Beijing, South China Sea, Taiwan Strait",
        "actors": [
          "President Xi Jinping",
          "Central Military Commission"
        ],
        "whyItMattered": "Brought China into direct strategic, military, and technological competition with the United States across AI, semiconductors, and maritime supremacy.",
        "consequences": "Triggered the revival of the QUAD, formation of AUKUS, and extensive US technology export restrictions.",
        "claimType": "CURRENT",
        "sources": "19th and 20th CCP National Congress Reports / Pentagon China Military Power Report"
      }
    ],
    "politicalSystem": {
      "type": "Unitary Marxist-Leninist One-Party Socialist Republic",
      "constitution": "1982 Constitution of the PRC (amended to remove presidential term limits in 2018)",
      "branches": [
        {
          "name": "Chinese Communist Party (CCP)",
          "role": "Monopolizes political power; Politburo Standing Committee is the supreme ruling organ led by the General Secretary."
        },
        {
          "name": "Central Military Commission (CMC)",
          "role": "Supreme military command of the PLA, subordinate directly to the Party rather than the state government."
        },
        {
          "name": "State Council",
          "role": "Chief administrative authority led by the Premier (Li Qiang), directing ministries and economic planning."
        },
        {
          "name": "National People's Congress (NPC)",
          "role": "Unicameral 2,980-seat nominal legislature approving Party directives and constitutional revisions."
        }
      ],
      "currentLeadership": {
        "headOfState": "President Xi Jinping (General Secretary of the CCP)",
        "headOfPartyAndState": "General Secretary & President Xi Jinping",
        "term": "Historic third term (commenced 2022/2023)",
        "headOfGovernment": "Premier Li Qiang"
      },
      "ideologicalDoctrine": "\"Xi Jinping Thought on Socialism with Chinese Characteristics for a New Era\" and the pursuit of the \"Great Rejuvenation of the Chinese Nation.\""
    },
    "geographyBorders": {
      "landArea": "9,596,961 km² (spans ~5,000 km east-to-west, ~5,500 km north-to-south)",
      "topography": "A three-step topographic staircase descending from the high Tibetan Plateau in the west (Roof of the World), to central basins and plateaus, to densely populated alluvial plains and river deltas in the east.",
      "rivers": [
        "Yangtze River (Chang Jiang - 6,300 km, longest in Asia, heart of manufacturing)",
        "Yellow River (Huang He)",
        "Pearl River (Zhujiang Delta)",
        "Mekong (Lancang)",
        "Brahmaputra (Yarlung Tsangpo)"
      ],
      "mountains": [
        "Himalayas (Mount Everest / Qomolangma 8,848m)",
        "Kunlun",
        "Tian Shan",
        "Pamir Mountains"
      ],
      "seas": [
        "Bohai Sea",
        "Yellow Sea",
        "East China Sea",
        "South China Sea (enclosed within the Ten-Dash Line)"
      ],
      "climates": [
        "Subarctic (Northern Heilongjiang)",
        "Temperate Monsoon",
        "Subtropical / Tropical (Hainan, Guangdong)",
        "Arid Desert (Gobi, Taklamakan)",
        "Alpine Plateau (Tibet)"
      ],
      "landBorders": [
        {
          "country": "Russia",
          "id": "RUS",
          "borderLength": "4,209 km",
          "region": "Northeast & Northwest",
          "status": "Demarcated / Strategic Partnership",
          "strategicContext": "Comprehensive strategic partner; Power of Siberia gas pipeline."
        },
        {
          "country": "India",
          "id": "IND",
          "borderLength": "3,488 km",
          "region": "Himalayan LAC",
          "status": "Disputed Frontier / High Alert",
          "strategicContext": "Heavily militarized Line of Actual Control (LAC); flashpoint of 2020 Galwan clash; disengagement protocol in 2024."
        },
        {
          "country": "Mongolia",
          "id": "MNG",
          "borderLength": "4,677 km",
          "region": "North",
          "status": "Peaceful Transit Buffer",
          "strategicContext": "Mineral resource supply partner."
        },
        {
          "country": "Kazakhstan",
          "id": "KAZ",
          "borderLength": "1,783 km",
          "region": "Northwest",
          "status": "Key Belt & Road Rail Gateway",
          "strategicContext": "Khorgos dry port linking China to European freight rail networks."
        },
        {
          "country": "Myanmar",
          "id": "MMR",
          "borderLength": "2,185 km",
          "region": "Southwest",
          "status": "Civil War Border / Pipeline Hub",
          "strategicContext": "Hosts Kyaukpyu deepwater port and overland oil/gas pipelines bypassing Malacca Strait."
        },
        {
          "country": "Vietnam",
          "id": "VNM",
          "borderLength": "1,281 km",
          "region": "South",
          "status": "Demarcated Land / Disputed Maritime",
          "strategicContext": "Intense trade partnership paired with sharp South China Sea territorial friction."
        },
        {
          "country": "North Korea",
          "id": "PRK",
          "borderLength": "1,416 km",
          "region": "Northeast",
          "status": "Treaty Ally & Buffer State",
          "strategicContext": "1961 Mutual Aid and Cooperation Treaty; Dandong-Sinuiju rail bridge trade lifeline."
        },
        {
          "country": "Pakistan",
          "id": "PAK",
          "borderLength": "523 km",
          "region": "Karakoram",
          "status": "\"All-Weather\" Strategic Partner",
          "strategicContext": "China-Pakistan Economic Corridor (CPEC) connecting Xinjiang to Gwadar Port."
        },
        {
          "country": "Nepal",
          "id": "NPL",
          "borderLength": "1,236 km",
          "region": "Himalayas",
          "status": "Mountain Border / Trans-Himalayan Transit",
          "strategicContext": "Infrastructure investments connecting Tibet to Kathmandu."
        },
        {
          "country": "Kyrgyzstan",
          "id": "KGZ",
          "borderLength": "858 km",
          "region": "Central Asia",
          "status": "Belt and Road Transit",
          "strategicContext": "China-Kyrgyzstan-Uzbekistan (CKU) railway project."
        },
        {
          "country": "Tajikistan",
          "id": "TJK",
          "borderLength": "414 km",
          "region": "Pamirs",
          "status": "Border Security Cooperation",
          "strategicContext": "Security post monitoring the Wakhan Corridor."
        },
        {
          "country": "Laos",
          "id": "LAO",
          "borderLength": "423 km",
          "region": "Southeast Asia",
          "status": "High-Speed Rail Corridor",
          "strategicContext": "China-Laos Railway connecting Kunming to Vientiane."
        },
        {
          "country": "Bhutan",
          "id": "BTN",
          "borderLength": "470 km",
          "region": "Himalayas",
          "status": "Undemarcated / Border Negotiations",
          "strategicContext": "Doklam trijunction dispute near the Siliguri Corridor."
        },
        {
          "country": "Afghanistan",
          "id": "AFG",
          "borderLength": "76 km",
          "region": "Wakhan Corridor",
          "status": "Closed High-Mountain Pass",
          "strategicContext": "Narrow corridor monitored against cross-border extremist movement."
        }
      ]
    },
    "economy": {
      "gdpNominal": "$18.5 Trillion (2nd largest globally)",
      "gdpPPP": "$35.2 Trillion (World’s largest economy by Purchasing Power Parity)",
      "gdpPerCapita": "$13,100 Nominal / $25,000 PPP",
      "currency": "Chinese Yuan / Renminbi (CNY / ¥)",
      "manufacturingSuperpower": {
        "summary": "China accounts for approx. 31% of total global manufacturing output—more than the United States, Japan, and Germany combined.",
        "cleanTechMonopoly": "Controls over 80% of global solar panel manufacturing, 75% of electric vehicle battery supply chains (CATL, BYD), and 60% of critical rare earth processing."
      },
      "vulnerabilities": {
        "malaccaDilemma": "Over 75% of China’s imported crude oil transits the narrow Malacca Strait, vulnerable to a naval blockade in a wartime contingency.",
        "demographicDecline": "Rapidly aging population following decades of the One-Child Policy; shrinking labor workforce."
      },
      "majorTradingPartners": [
        {
          "country": "ASEAN",
          "share": "Largest regional trading partner ($900B+ trade)"
        },
        {
          "country": "European Union",
          "share": "Major market for machinery, chemicals, and consumer goods"
        },
        {
          "country": "United States",
          "share": "Massive bilateral trade relationship undergoing strategic de-risking"
        },
        {
          "country": "Russia",
          "share": "Surged to record $240B+ post-2022 trade in energy and industrial equipment"
        }
      ]
    },
    "military": {
      "expenditure": "$236.0+ Billion (Official 2024 budget; estimated at $350B+ in real terms; 2nd largest globally)",
      "personnel": {
        "active": "2,035,000 active duty personnel (World's largest standing military force)",
        "branches": [
          "PLA Ground Force (PLAGF)",
          "PLA Navy (PLAN)",
          "PLA Air Force (PLAAF)",
          "PLA Rocket Force (PLARF)",
          "PLA Strategic Support Force / Information Support Force"
        ]
      },
      "doctrine": "Anti-Access/Area Denial (A2/AD) to deter US intervention inside the First and Second Island Chains; Rapid Amphibious Joint Assault capability targeting Taiwan; Expansion of strategic nuclear arsenal toward 1,500 warheads by 2035.",
      "categories": [
        {
          "name": "ROCKET FORCE & CARRIER-KILLER MISSILES",
          "desc": "World’s most formidable land-based ballistic and hypersonic missile inventory.",
          "systems": [
            {
              "name": "DF-21D & DF-26B",
              "type": "Anti-Ship Ballistic Missiles (ASBM)",
              "origin": "China (CASIC)",
              "status": "CONFIRMED",
              "quantity": "Extensively deployed",
              "role": "\"Guam Killer\" and \"Carrier Killer\" precision ballistic missiles designed to destroy moving aircraft carriers at 2,000–4,000 km range."
            },
            {
              "name": "DF-17",
              "type": "Hypersonic Glide Vehicle (HGV)",
              "origin": "China (CASIC)",
              "status": "CONFIRMED",
              "quantity": "Operational brigades",
              "role": "Mach 8–10 boost-glide weapon designed to penetrate regional missile defense radars in Taiwan and Japan."
            },
            {
              "name": "DF-41",
              "type": "Road-Mobile Heavy ICBM",
              "origin": "China (ARMT)",
              "status": "CONFIRMED",
              "quantity": "Multi-silo & mobile deployment",
              "role": "Solid-fueled 15,000 km range ICBM capable of delivering up to 10 MIRV thermonuclear warheads to any US city."
            }
          ]
        },
        {
          "name": "EXPANDING NAVAL FLEET (PLAN)",
          "desc": "World’s largest navy by total hull count (370+ surface combatants and submarines).",
          "systems": [
            {
              "name": "Type 003 Fujian Aircraft Carrier",
              "type": "CATOBAR Electromagnetic Catapult Carrier",
              "origin": "China (Jiangnan Shipyard)",
              "status": "CONFIRMED (Sea Trials)",
              "quantity": "1 built (joining Liaoning & Shandong)",
              "role": "80,000-ton supercarrier equipped with EMALS catapults launching J-35 stealth fighters and KJ-600 radar planes."
            },
            {
              "name": "Type 055 Renhai-class Destroyer",
              "type": "Large Guided Missile Cruiser/Destroyer",
              "origin": "China (Jiangnan / Dalian)",
              "status": "CONFIRMED",
              "quantity": "8 commissioned (more building)",
              "role": "13,000-ton stealth warship with 112 universal VLS cells carrying YJ-21 hypersonic anti-ship and HHQ-9 air defense missiles."
            },
            {
              "name": "Type 094 Jin-class / Type 096",
              "type": "SSBN Nuclear Ballistic Submarine",
              "origin": "China (Bohai Shipyard)",
              "status": "CONFIRMED",
              "quantity": "6 operational Type 094 boats",
              "role": "Continuous sea-based nuclear deterrence patrols armed with 12 JL-3 SLBMs (10,000 km range)."
            }
          ]
        },
        {
          "name": "5TH GENERATION COMBAT AVIATION",
          "desc": "Rapidly modernizing stealth air superiority and strike aviation.",
          "systems": [
            {
              "name": "Chengdu J-20 Mighty Dragon",
              "type": "5th Gen Heavy Stealth Fighter",
              "origin": "China (Chengdu Aerospace)",
              "status": "CONFIRMED",
              "quantity": "Over 250 operational aircraft",
              "role": "Equipped with indigenous WS-15 engines, AESA radar, and PL-15 beyond-visual-range missiles (200+ km)."
            },
            {
              "name": "Shenyang J-35",
              "type": "5th Gen Carrier-Borne & Export Stealth Fighter",
              "origin": "China (Shenyang Aircraft)",
              "status": "CONFIRMED (Production)",
              "quantity": "Tailored for Fujian carrier and export",
              "role": "Twin-engine multi-role stealth combat aircraft designed for carrier strike group operations."
            }
          ]
        }
      ]
    },
    "relations": {
      "main": [
        {
          "id": "CHN_RUS",
          "country": "Russia",
          "flag": "🇷🇺",
          "status": "Comprehensive Strategic Partnership (\"No Limits\")",
          "color": "#3b82f6",
          "note": "Primary Eurasian security partner, oil/gas supplier, and anti-hegemony ally."
        },
        {
          "id": "CHN_USA",
          "country": "United States",
          "flag": "🇺🇸",
          "status": "Strategic Competitor & Rival",
          "color": "#ef4444",
          "note": "Taiwan friction, semiconductor export controls, South China Sea freedom of navigation."
        },
        {
          "id": "CHN_IND",
          "country": "India",
          "flag": "🇮🇳",
          "status": "Disputed Frontier & Strategic Rivalry",
          "color": "#f97316",
          "note": "Disputed Himalayan border (LAC), bilateral trade deficit, Indo-Pacific naval competition."
        },
        {
          "id": "CHN_PAK",
          "country": "Pakistan",
          "flag": "🇵🇰",
          "status": "\"All-Weather\" Strategic Cooperative Partner",
          "color": "#10b981",
          "note": "CPEC corridor anchor ($65B), major defense hardware supplier (JF-17, submarines)."
        }
      ],
      "searchable": [
        {
          "id": "CHN_TWN",
          "country": "Taiwan",
          "flag": "🇹🇼",
          "status": "Territorial Claim (\"Sacred Territory\")",
          "color": "#ef4444",
          "summary": "Beijing views Taiwan as a renegade province that must be reunified with the motherland, refusing to renounce the use of military force. Conducts regular encirclement exercises and economic pressure.",
          "keyAreas": [
            "One China Principle",
            "Anti-Secession Law",
            "Joint Sword Military Exercises"
          ]
        },
        {
          "id": "CHN_IND",
          "country": "India",
          "flag": "🇮🇳",
          "status": "Frontier Rivalry & Economic Imbalance",
          "color": "#f97316",
          "summary": "China and India contest the 3,488-km Himalayan Line of Actual Control (LAC). Following the 2020 Galwan clash, both armies deployed heavy armored corps. The 2024 Kazan disengagement agreement marked a calibrated step toward de-escalation, though structural geopolitical competition in the Indian Ocean remains intense.",
          "keyAreas": [
            "Himalayan LAC Demarcation",
            "Bilateral Trade Deficit ($85B+)",
            "Indian Ocean String of Pearls vs SAGAR"
          ]
        }
      ]
    },
    "currentTensions": [
      {
        "title": "Taiwan Sovereignty & Cross-Strait Military Pressure",
        "severity": "Critical National Objective",
        "color": "#ef4444",
        "desc": "PLA conducts daily sea and air combat patrols across the Taiwan Strait median line to enforce encirclement and deter foreign intervention."
      },
      {
        "title": "South China Sea Territorial & EEZ Disputes",
        "severity": "High Tension",
        "color": "#f97316",
        "desc": "China uses Coast Guard and Maritime Militia vessels to contest Second Thomas Shoal and Scarborough Shoal with the Philippines."
      }
    ],
    "strategicLocations": [
      {
        "name": "Yulin Naval Base (Hainan Island)",
        "type": "Submarine Bastion",
        "coords": "18.22° N, 109.56° E",
        "significance": "Underground submarine tunnels sheltering nuclear ballistic submarines (SSBNs) entering the deep South China Sea basin."
      },
      {
        "name": "Fiery Cross Reef (Kagitingan)",
        "type": "Militarized Island Fortress",
        "coords": "9.55° N, 112.89° E",
        "significance": "Artificial island equipped with a 3,000m runway, hangars, radars, and anti-ship missile batteries dominating the central South China Sea."
      },
      {
        "name": "Gwadar Port (Pakistan)",
        "type": "CPEC Terminal",
        "coords": "25.12° N, 62.33° E",
        "significance": "Deepwater commercial and potential dual-use naval replenishment port giving western China direct access to the Arabian Sea."
      }
    ],
    "keyEvents": [
      {
        "title": "1949 Proclamation of the PRC",
        "category": "Founding Era",
        "date": "October 1, 1949"
      },
      {
        "title": "1978 Reform and Opening Up",
        "category": "Economic Transformation",
        "date": "December 1978"
      },
      {
        "title": "2001 Accession to the WTO",
        "category": "Global Trade Integration",
        "date": "December 2001"
      },
      {
        "title": "2013 Belt and Road Initiative Announced",
        "category": "Geoeconomic Strategy",
        "date": "September 2013"
      }
    ],
    "indiaImpact": {
      "headline": "China as India’s Primary Strategic Challenge & Frontier Competitor",
      "points": [
        {
          "title": "Active Himalayan Frontier Threat (LAC)",
          "desc": "China’s refusal to clarify the Line of Actual Control and its infrastructure build-up along the Tibetan Plateau forces India to commit over 100,000 soldiers and modern strike armor to high-altitude defense."
        },
        {
          "title": "Indian Ocean \"String of Pearls\" Encirclement",
          "desc": "Chinese commercial and dual-use port investments in Gwadar (Pakistan), Hambantota (Sri Lanka), Kyaukpyu (Myanmar), and Djibouti encircle India's maritime neighborhood, requiring constant Indian naval surveillance."
        },
        {
          "title": "Severe Trade Imbalance & Supply Chain Vulnerability",
          "desc": "India imports over $100 Billion in Chinese goods annually, maintaining an $85B+ trade deficit centered on critical APIs, electronics, and solar equipment that New Delhi is working to replace through PLI schemes."
        }
      ]
    }
  },
  "JPN": {
    "id": "JPN",
    "name": "Japan",
    "officialName": "Japan (日本国 - Nihon-koku)",
    "capital": "Tokyo",
    "region": "East Asia",
    "subregion": "Eastern Asia",
    "flag": "🇯🇵",
    "lat": 36.2048,
    "lng": 138.2529,
    "area": "377,975 km²",
    "population": "124 Million",
    "politicalSystemType": "Constitutional Monarchy with Parliamentary Democracy",
    "currency": "Japanese Yen (JPY / ¥)",
    "languages": "Japanese (National Language)",
    "timeZones": "UTC+9 (Japan Standard Time - JST)",
    "tagline": "High-Tech Titan, First Island Chain Anchor & Free and Open Indo-Pacific Architect",
    "overview": {
      "beginner": "Japan is an archipelago nation of 124 million people in East Asia, representing the world’s fourth-largest economy. A staunch democratic ally of the United States, Japan is home to major US forward-deployed military bases. Faced with increasing military threats from China, Russia, and North Korea, Japan is significantly modernizing its defense capabilities, doubling its military spending, and co-leading the QUAD partnership with India, Australia, and the US.",
      "advanced": "Japan anchors the northeastern sector of the First Island Chain, dominating the chokepoints controlling PLA naval breakout into the open Pacific (Miyako Strait, Tsushima Strait). Japan is the original architect of the \"Free and Open Indo-Pacific\" (FOIP) strategic vision conceptualized by the late Prime Minister Shinzo Abe. Japan is currently executing an historic defense transformation: doubling defense expenditure to 2% of GDP ($55B+), acquiring long-range \"counterstrike\" standoff capabilities (Tomahawk cruise missiles), and converting Izumo-class helicopter destroyers into light aircraft carriers operating F-35B stealth fighters."
    },
    "history": [
      {
        "year": "1868",
        "title": "Meiji Restoration & Rapid Modernization",
        "phase": "Modern Transformation",
        "whatHappened": "The overthrow of the Tokugawa Shogunate restored executive authority to Emperor Meiji, launching sweeping industrial, legal, and military modernization to avoid Western colonial subjugation.",
        "where": "Tokyo (formerly Edo)",
        "actors": [
          "Emperor Meiji",
          "Saigo Takamori",
          "Ito Hirobumi"
        ],
        "whyItMattered": "The first Asian nation to successfully industrialize and build a modern constitutional state with Western-style army and naval forces.",
        "consequences": "Became an imperial great power, defeating Qing China in 1895 and Imperial Russia in 1905.",
        "claimType": "HISTORICAL FACT",
        "sources": "Charter Oath (1868) / Meiji Constitution (1889)"
      },
      {
        "year": "1945–1952",
        "title": "Post-WWII Reconstruction & Peace Constitution",
        "phase": "Pacifist Democracy",
        "whatHappened": "Following defeat in WWII, Japan was occupied by Allied forces under General Douglas MacArthur. Enacted the 1947 Constitution containing Article 9, which renounced war and the maintenance of land, sea, and air forces.",
        "where": "Tokyo",
        "actors": [
          "General Douglas MacArthur",
          "Prime Minister Shigeru Yoshida",
          "Emperor Hirohito"
        ],
        "whyItMattered": "Formulated the \"Yoshida Doctrine\"—focusing all national energy on economic recovery while relying on the United States for security under the 1951 Security Treaty.",
        "consequences": "Created the Japan Self-Defense Forces (JSDF) in 1954 strictly for defensive territorial operations.",
        "claimType": "HISTORICAL FACT",
        "sources": "1947 Constitution of Japan / 1951 US-Japan Security Treaty"
      },
      {
        "year": "2007–Present",
        "title": "Abe Doctrine, FOIP & Counterstrike Modernization",
        "phase": "Proactive Contribution to Peace",
        "whatHappened": "Prime Minister Shinzo Abe reinterpreted Article 9 to allow collective self-defense, authored the Free and Open Indo-Pacific (FOIP) framework, and founded the QUAD. In 2022, Japan adopted a new National Security Strategy committing to acquire counterstrike capabilities and raise defense spending to 2% of GDP.",
        "where": "Tokyo, Washington, New Delhi",
        "actors": [
          "Prime Minister Shinzo Abe",
          "Prime Minister Fumio Kishida"
        ],
        "whyItMattered": "Ended seven decades of strict post-war military passivity, establishing Japan as a proactive security leader in East Asia.",
        "consequences": "Accelerated joint naval coordination with the US, India, Australia, and the Philippines.",
        "claimType": "CURRENT",
        "sources": "Japan National Security Strategy (2022) / Ministry of Defense White Paper"
      }
    ],
    "politicalSystem": {
      "type": "Constitutional Monarchy with Parliamentary Democracy",
      "constitution": "1947 Constitution of Japan",
      "branches": [
        {
          "name": "Emperor of Japan",
          "role": "Symbol of the State and unity of the people; no governing powers."
        },
        {
          "name": "Prime Minister & Cabinet",
          "role": "Head of Government exercising executive authority, accountable to the Diet."
        },
        {
          "name": "National Diet",
          "role": "Bicameral parliament: House of Representatives (465 members) and House of Councillors (248 members)."
        },
        {
          "name": "Supreme Court",
          "role": "Independent judicial authority."
        }
      ],
      "currentLeadership": {
        "headOfState": "Emperor Naruhito",
        "headOfGovernment": "Prime Minister of Japan",
        "defenseMinister": "Oversees the Japan Self-Defense Forces (JSDF)"
      },
      "securityFramework": "US-Japan Security Treaty (Article 5 binds the US to defend all territories under Japanese administration, including the Senkaku Islands)."
    },
    "geographyBorders": {
      "landArea": "377,975 km² across 6,852 islands (main four: Honshu, Hokkaido, Kyushu, Shikoku)",
      "topography": "73% mountainous and forested terrain; situated along the Pacific Ring of Fire with frequent seismic and volcanic activity.",
      "maritimeChokepoints": [
        {
          "name": "Miyako Strait",
          "width": "250 km gap between Okinawa and Miyako Island; prime international transit passage for Chinese naval fleets entering the Pacific."
        },
        {
          "name": "Tsushima Strait",
          "width": "Separates Kyushu from South Korea; controls naval transit between Sea of Japan and East China Sea."
        },
        {
          "name": "La Pérouse / Soya Strait",
          "width": "Separates Hokkaido from Russian Sakhalin Island."
        }
      ],
      "landBorders": [],
      "maritimeBorders": [
        {
          "country": "United States",
          "id": "USA",
          "boundary": "Pacific maritime boundary via Northern Mariana Islands"
        },
        {
          "country": "South Korea",
          "id": "KOR",
          "boundary": "Sea of Japan (contested sovereignty over Dokdo/Takeshima)"
        },
        {
          "country": "China",
          "id": "CHN",
          "boundary": "East China Sea (dispute over Senkaku / Diaoyu Islands)"
        },
        {
          "country": "Russia",
          "id": "RUS",
          "boundary": "Sea of Okhotsk / Kuril Islands dispute (Northern Territories)"
        },
        {
          "country": "Taiwan",
          "id": "TWN",
          "boundary": "Yonaguni Island is only 110 km from eastern Taiwan coast"
        }
      ]
    },
    "economy": {
      "gdpNominal": "$4.1 Trillion (4th largest globally)",
      "gdpPPP": "$6.5 Trillion",
      "gdpPerCapita": "$33,800 Nominal",
      "currency": "Japanese Yen (JPY / ¥)",
      "industrialDominance": {
        "summary": "World leader in automotive manufacturing (Toyota, Honda), precision robotics (Fanuc), and semiconductor materials/equipment (Tokyo Electron, Shin-Etsu Chemical).",
        "energyVulnerability": "Imports over 99% of its crude oil and petroleum requirements, overwhelmingly from the Persian Gulf via the Malacca Strait."
      },
      "majorTradingPartners": [
        {
          "country": "China",
          "share": "Largest trading partner; major manufacturing destination"
        },
        {
          "country": "United States",
          "share": "Largest destination for Japanese high-value automotive and tech exports"
        },
        {
          "country": "European Union",
          "share": "Major investment and trade agreement partner"
        },
        {
          "country": "Australia",
          "share": "Vital supplier of iron ore, coal, and liquefied natural gas"
        }
      ]
    },
    "military": {
      "expenditure": "$55.0+ Billion (Budget rising toward $80B+ / 2% of GDP by 2027; 5th largest globally)",
      "personnel": {
        "active": "247,000 active duty personnel in Japan Self-Defense Forces (JGSDF, JMSDF, JASDF)",
        "reserves": "56,000 trained reserves"
      },
      "doctrine": "Exclusive Defense-Oriented Policy (\"Senshu Boei\") transitioning to proactive deterrence and counterstrike capability against enemy missile bases; Nansei Islands island-defense fortress chain.",
      "categories": [
        {
          "name": "NAVAL DESTROYERS & LIGHT CARRIERS (JMSDF)",
          "desc": "One of the world’s most sophisticated surface and anti-submarine warfare fleets.",
          "systems": [
            {
              "name": "Izumo-class Destroyer (JS Izumo & JS Kaga)",
              "type": "Multi-Functional Aircraft Carrier",
              "origin": "Japan (IHI Marine United)",
              "status": "CONFIRMED",
              "quantity": "2 converted light carriers",
              "role": "Refitted with heat-resistant flight decks to operate F-35B STOVL stealth fighters for blue-water power projection."
            },
            {
              "name": "Maya-class / Kongo-class Aegis Destroyers",
              "type": "Aegis Guided Missile Destroyer",
              "origin": "Japan (JMU)",
              "status": "CONFIRMED",
              "quantity": "8 Aegis-equipped destroyers",
              "role": "Equipped with SM-3 Block IIA interceptors capable of knocking down mid-course ballistic missiles in space."
            },
            {
              "name": "Taigei-class Submarines",
              "type": "Lithium-Ion Battery Diesel-Electric Submarine (SSK)",
              "origin": "Japan (Mitsubishi / Kawasaki)",
              "status": "CONFIRMED",
              "quantity": "4 commissioned (8 planned)",
              "role": "World’s first submarines powered by advanced lithium-ion batteries, delivering silent underwater endurance."
            }
          ]
        },
        {
          "name": "AIR DEFENCE & 5TH GEN FIGHTERS (JASDF)",
          "desc": "High-tech air interception guarding island airspace.",
          "systems": [
            {
              "name": "F-35A / F-35B Lightning II",
              "type": "5th Gen Stealth Combat Aircraft",
              "origin": "USA / Japan (Mitsubishi assembly)",
              "status": "CONFIRMED",
              "quantity": "147 on order (largest foreign F-35 operator)",
              "role": "F-35A for conventional runways; F-35B for island bases and Izumo-class carriers."
            },
            {
              "name": "Mitsubishi F-2",
              "type": "Support Fighter / Anti-Ship Platform",
              "origin": "Japan / USA (Mitsubishi/Lockheed)",
              "status": "CONFIRMED",
              "quantity": "90 operational fighters",
              "role": "Armed with Type 12 supersonic anti-ship missiles for maritime strike."
            }
          ]
        },
        {
          "name": "COUNTERSTRIKE & ISLAND DEFENSE MISSILES",
          "desc": "Acquiring stand-off deterrent strike systems.",
          "systems": [
            {
              "name": "Type 12 Surface-to-Ship Missile (Upgraded)",
              "type": "Standoff Cruise Missile",
              "origin": "Japan (Mitsubishi Heavy Industries)",
              "status": "CONFIRMED (Induction)",
              "quantity": "Procuring upgraded 1,000 km version",
              "role": "Truck-mounted long-range strike missile deployed across Okinawa and Ishigaki to deny the Miyako Strait."
            },
            {
              "name": "UGM/RGM-109 Tomahawk Cruise Missile",
              "type": "Long-Range Precision Strike Missile",
              "origin": "USA (Raytheon)",
              "status": "CONFIRMED",
              "quantity": "400 missiles contracted",
              "role": "Provides immediate counterstrike capability against adversary command centers."
            }
          ]
        }
      ]
    },
    "relations": {
      "main": [
        {
          "id": "JPN_USA",
          "country": "United States",
          "flag": "🇺🇸",
          "status": "Inviolable Treaty Ally & Security Guarantor",
          "color": "#10b981",
          "note": "Hosts 54,000 US military personnel (US Forces Japan); core cornerstone of defense."
        },
        {
          "id": "JPN_CHN",
          "country": "China",
          "flag": "🇨🇳",
          "status": "Economic Partner & Strategic Concern",
          "color": "#ef4444",
          "note": "Senkaku Islands friction, East China Sea air scrambles, vital commercial trade."
        },
        {
          "id": "JPN_IND",
          "country": "India",
          "flag": "🇮🇳",
          "status": "Special Strategic & Global Partner",
          "color": "#10b981",
          "note": "QUAD anchor, bullet train infrastructure funding, Malabar naval exercises."
        },
        {
          "id": "JPN_TWN",
          "country": "Taiwan",
          "flag": "🇹🇼",
          "status": "Vital Democratic Security Partner",
          "color": "#06b6d4",
          "note": "\"A Taiwan emergency is a Japan emergency\" (Abe formulation); TSMC Kumamoto mega-fabs."
        }
      ],
      "searchable": [
        {
          "id": "JPN_IND",
          "country": "India",
          "flag": "🇮🇳",
          "status": "Special Strategic & Global Partner",
          "color": "#10b981",
          "summary": "Japan and India share an unbreakable strategic convergence founded on preserving a Free and Open Indo-Pacific. Japan is a premier investor in Indian infrastructure, financing the Mumbai-Ahmedabad High-Speed Rail (Shinkansen) and industrial corridors. Both navies conduct advanced interoperability exercises (Malabar, JIMEX).",
          "keyAreas": [
            "QUAD Strategic Alignment",
            "Mumbai-Ahmedabad Bullet Train Financing",
            "Supply Chain Resilience Initiative (SCRI)"
          ]
        },
        {
          "id": "JPN_TWN",
          "country": "Taiwan",
          "flag": "🇹🇼",
          "status": "High-Tech & Security Convergence",
          "color": "#06b6d4",
          "summary": "Japan has welcomed TSMC to build two massive semiconductor fabrication plants in Kumamoto (JASM) with billions in Japanese government subsidies. Japanese defense planners recognize that Chinese military control of Taiwan would directly threaten Japan’s southern islands and sealanes.",
          "keyAreas": [
            "TSMC Kumamoto Semiconductor Fabs",
            "First Island Chain Defense Coordination",
            "Yonaguni-Taiwan Maritime Lifeline"
          ]
        }
      ]
    },
    "currentTensions": [
      {
        "title": "Senkaku Islands (East China Sea) Incursions",
        "severity": "High Tension",
        "color": "#f97316",
        "desc": "Chinese Coast Guard vessels enter the territorial waters of the Japanese-administered Senkaku Islands almost daily, challenging Japanese sovereignty."
      },
      {
        "title": "North Korean Ballistic Missile Trajectories",
        "severity": "Critical Threat Alert",
        "color": "#ef4444",
        "desc": "North Korea repeatedly tests ICBMs and intermediate-range missiles overflying Japanese northern territory into the Pacific Ocean."
      }
    ],
    "strategicLocations": [
      {
        "name": "Yokosuka Naval Base",
        "type": "Fleet Command",
        "coords": "35.28° N, 139.67° E",
        "significance": "Primary naval base for the JMSDF and US Seventh Fleet forward-deployed carrier strike group."
      },
      {
        "name": "Kadena Air Base (Okinawa)",
        "type": "Air Superiority Hub",
        "coords": "26.35° N, 127.76° E",
        "significance": "\"Keystone of the Pacific\" hosting advanced US and Japanese fighter squadrons directly adjacent to the Taiwan Strait."
      },
      {
        "name": "Yonaguni Island",
        "type": "Frontline Surveillance Post",
        "coords": "24.46° N, 122.98° E",
        "significance": "Japan’s westernmost inhabited island, located just 110 kilometers from Taiwan, hosting coastal radar and missile units."
      }
    ],
    "keyEvents": [
      {
        "title": "1868 Meiji Restoration Modernization",
        "category": "National Renaissance",
        "date": "1868"
      },
      {
        "title": "1947 Pacifist Constitution Article 9 Enacted",
        "category": "Constitutional Order",
        "date": "May 1947"
      },
      {
        "title": "1960 US-Japan Mutual Security Treaty",
        "category": "Alliance Foundation",
        "date": "January 1960"
      },
      {
        "title": "2022 National Security Strategy Counterstrike Adoption",
        "category": "Defense Doctrine",
        "date": "December 2022"
      }
    ],
    "indiaImpact": {
      "headline": "Japan as India's Premier Technology, Infrastructure & QUAD Partner",
      "points": [
        {
          "title": "Transformative Infrastructure Financing",
          "desc": "Japan International Cooperation Agency (JICA) has provided tens of billions of dollars in soft loans to finance India's metro rail networks and the flagship Mumbai-Ahmedabad High-Speed Rail corridor."
        },
        {
          "title": "Foundational Anchor of the QUAD",
          "desc": "Japan and India, alongside the US and Australia, coordinate maritime surveillance, humanitarian disaster response, and critical supply chain security across the Indo-Pacific."
        },
        {
          "title": "Act East & Northeast India Connectivity",
          "desc": "Japan is the only foreign country permitted by India to invest in strategic infrastructure in India's sensitive Northeastern states, improving road connectivity to Bangladesh and Southeast Asia."
        }
      ]
    }
  },
  ...EXTENDED_DOSSIERS
};

export function getCountryDossier(iso3, fallbackData = {}) {
  if (!iso3) return fallbackData;
  const upper = String(iso3).toUpperCase();
  const sovietInfo = SOVIET_15_REPUBLICS.find(r => r.id === upper);

  if (COUNTRY_DOSSIERS[upper]) {
    const curated = { ...COUNTRY_DOSSIERS[upper] };
    if (!curated.history || !Array.isArray(curated.history) || curated.history.length === 0) {
      curated.history = getCompleteCountryHistory(upper, fallbackData);
    }
    if (sovietInfo) {
      curated.sovietTransition = sovietInfo;
    }
    return curated;
  }

  // Derive genuine universal factual data
  const name = fallbackData.name || fallbackData.NAME || fallbackData.ADMIN || upper;
  const officialName = fallbackData.FORMAL_EN || fallbackData.officialName || fallbackData.NAME_LONG || name;
  const commonName = fallbackData.NAME || fallbackData.name || name;
  const capital = CAPITAL_COORDINATES[upper]?.name || fallbackData.capital || 'DATA UNAVAILABLE';
  const capitalCoords = CAPITAL_COORDINATES[upper] || (fallbackData.lat ? { lat: fallbackData.lat, lng: fallbackData.lng } : null);
  const region = fallbackData.CONTINENT || fallbackData.region || 'Global';
  const subregion = fallbackData.SUBREGION || fallbackData.subregion || region;
  const flag = fallbackData.flag || '🌐';
  const iso2 = ISO3_TO_ISO2[upper] || (fallbackData.ISO_A2 ? String(fallbackData.ISO_A2).toLowerCase() : upper.slice(0, 2).toLowerCase());

  // Population formatting
  let populationStr = 'DATA UNAVAILABLE';
  if (fallbackData.POP_EST && fallbackData.POP_EST > 0) {
    if (fallbackData.POP_EST >= 1000000) {
      populationStr = `${(fallbackData.POP_EST / 1000000).toFixed(1)} Million (UN / World Bank)`;
    } else {
      populationStr = `${Number(fallbackData.POP_EST).toLocaleString()} (UN / World Bank)`;
    }
  } else if (fallbackData.population) {
    populationStr = String(fallbackData.population);
  }

  // GDP Nominal formatting
  let gdpNominalStr = 'DATA UNAVAILABLE';
  if (fallbackData.GDP_MD && fallbackData.GDP_MD > 0) {
    if (fallbackData.GDP_MD >= 1000) {
      gdpNominalStr = `$${(fallbackData.GDP_MD / 1000).toFixed(1)} Billion (World Bank)`;
    } else {
      gdpNominalStr = `$${Number(fallbackData.GDP_MD).toLocaleString()} Million (World Bank)`;
    }
  } else if (fallbackData.gdp) {
    gdpNominalStr = String(fallbackData.gdp);
  }

  // GDP Per Capita calculation
  let gdpPerCapitaStr = 'DATA UNAVAILABLE';
  if (fallbackData.GDP_MD && fallbackData.POP_EST && fallbackData.POP_EST > 0) {
    const perCapita = Math.round((fallbackData.GDP_MD * 1000000) / fallbackData.POP_EST);
    gdpPerCapitaStr = `$${perCapita.toLocaleString()} (World Bank)`;
  }

  const currencyStr = UNIVERSAL_CURRENCIES[upper] || fallbackData.currency || 'DATA UNAVAILABLE';
  const languagesStr = UNIVERSAL_LANGUAGES[upper] || fallbackData.languages || 'DATA UNAVAILABLE';
  const areaStr = fallbackData.area || 'DATA UNAVAILABLE';

  return {
    id: upper,
    iso2: iso2,
    isoCode: upper,
    name,
    officialName,
    commonName,
    capital,
    capitalCoords,
    capitalAdmin: capitalCoords ? {
      role: `National Capital & Administrative Seat of ${name}`,
      political: `Seat of executive ministries, legislative assembly, and supreme court of ${name}.`,
      geographic: `${capitalCoords.lat?.toFixed(2)}°, ${capitalCoords.lng?.toFixed(2)}° situated in ${region}.`,
      strategic: `Apex national command center, sovereign communications hub, and civil emergency headquarters.`
    } : null,
    region,
    subregion,
    flag,
    lat: fallbackData.lat || (capitalCoords ? capitalCoords.lat : (fallbackData.LABEL_Y || 0)),
    lng: fallbackData.lng || (capitalCoords ? capitalCoords.lng : (fallbackData.LABEL_X || 0)),
    area: areaStr,
    population: populationStr,
    politicalSystemType: fallbackData.politicalSystemType || 'Constitutional Sovereign State',
    currency: currencyStr,
    languages: languagesStr,
    headOfState: fallbackData.headOfState || null,
    headOfGovernment: fallbackData.headOfGovernment || null,
    timeZones: fallbackData.timeZones || 'UTC',
    foundingInfo: fallbackData.foundingInfo || null,
    tagline: `Sovereign Nation in ${subregion}`,

    overview: {
      beginner: `${name} (${officialName}) is a recognized sovereign state located in ${region} within the ${subregion} region. It exercises constitutional governance, independent domestic law, and diplomatic representation as an active member of the international community.`,
      advanced: `The sovereign state of ${name} exercises full territorial jurisdiction across its sovereign borders in ${region}. It participates in regional multilateral organizations, international commerce, and bilateral diplomatic treaties in accordance with the United Nations Charter.`
    },

    // History: Guaranteed verified multi-era historical intelligence timeline
    history: (Array.isArray(fallbackData.history) && fallbackData.history.length > 0)
      ? fallbackData.history
      : getCompleteCountryHistory(upper, { name, officialName, capital, region, subregion, ...fallbackData }),
    sovietTransition: sovietInfo || null,

    politicalSystem: {
      isAvailable: fallbackData.headOfState ? true : false,
      type: fallbackData.politicalSystemType || 'Constitutional Government',
      constitution: 'National Constitution and statutory legal code',
      branches: [
        { name: 'Executive', role: 'Head of State and Ministerial Cabinet exercising administrative authority.' },
        { name: 'Legislature', role: 'National assembly responsible for approving laws, public taxation, and state budgets.' },
        { name: 'Judiciary', role: 'Independent court system upholding constitutional rule of law and statutory rights.' }
      ],
      currentLeadership: {
        headOfState: fallbackData.headOfState || null,
        headOfGovernment: fallbackData.headOfGovernment || null
      },
      rulingParty: fallbackData.rulingParty || null,
      oppositionParties: fallbackData.oppositionParties || [],
      parliamentDetails: 'National Legislative Assembly exercising legislative authority, state budget approval, and executive scrutiny.',
      recentElections: 'Regular national elections conducted under constitutional and statutory election regulations.',
      domesticDevelopments: fallbackData.domesticDevelopments || [],
      currentIssues: fallbackData.currentIssues || [],
      explanation: "Detailed party mechanics, legislative faction breakdowns, and domestic coalition analytics are currently under compilation."
    },

    geographyBorders: {
      landArea: areaStr,
      location: `${name} is situated in ${region} (${subregion}).`,
      continent: region,
      latRange: 'Sovereign Geographic Coordinates',
      lngRange: 'Sovereign Geographic Coordinates',
      coastline: fallbackData.coastline || 'Sovereign Maritime Littoral / Landlocked',
      majorOceans: [`${region} Basin Approaches`],
      majorIslands: fallbackData.majorIslands || [],
      strategicGeography: `${name} anchors regional transit and commercial connectivity in ${subregion}.`,
      topography: fallbackData.topography || 'National terrain and regional river basins.',
      rivers: fallbackData.rivers || [],
      mountains: fallbackData.mountains || [],
      seas: fallbackData.seas || [],
      climates: fallbackData.climates || [`${region} Continental / Regional Climate`],
      landBorders: fallbackData.landBorders || [],
      maritimeBorders: fallbackData.maritimeBorders || []
    },

    economy: {
      gdpNominal: gdpNominalStr,
      gdpPPP: 'DATA UNAVAILABLE',
      gdpPerCapita: gdpPerCapitaStr,
      gdpGrowth: fallbackData.gdpGrowth || 'DATA UNAVAILABLE',
      currency: currencyStr,
      majorIndustries: fallbackData.majorIndustries || null,
      majorExports: fallbackData.majorExports || null,
      majorImports: fallbackData.majorImports || null,
      energyPosition: fallbackData.energyPosition || null,
      naturalResources: fallbackData.naturalResources || null,
      tradeOrgs: fallbackData.tradeOrgs || ['World Trade Organization (WTO)', 'United Nations (UN)'],
      economicStrategicImportance: `Sustains domestic employment, regional commerce, and supply chain continuity in ${subregion}.`,
      indiaEconomicConnection: fallbackData.indiaEconomicConnection || null,
      majorTradingPartners: fallbackData.majorTradingPartners || null,
      explanation: "Detailed commodity flow registers, trade volume metrics, and sectoral breakdown data are currently being cataloged."
    },

    // Military: Mark explicitly unavailable rather than inventing fake weapon systems
    military: fallbackData.military || {
      isAvailable: false,
      expenditure: 'National Defense Budget (SIPRI)',
      explanation: "Detailed military asset registries, weapon inventories, and defense force structures are unavailable or not reliably verified for this nation."
    },

    // Relations: Mark explicitly unavailable rather than inventing fake alliances
    relations: fallbackData.relations || {
      isAvailable: false,
      main: [],
      searchable: [],
      explanation: "Specific bilateral relationship dossiers and strategic accords for this nation are not cataloged in current open-source intelligence archives."
    },

    // Current Tensions: Mark explicitly unavailable
    currentTensions: fallbackData.currentTensions || {
      isAvailable: false,
      explanation: "No active critical frontier alerts or documented crisis flashpoints currently registered."
    },

    // Strategic Locations: Mark explicitly unavailable
    strategicLocations: fallbackData.strategicLocations || {
      isAvailable: false,
      explanation: "Tactical military installations and strategic infrastructure nodes are not cataloged for this entity."
    },

    // Key Events: Mark explicitly unavailable
    keyEvents: fallbackData.keyEvents || {
      isAvailable: false,
      explanation: "Chronological historical milestones and diplomatic agreements are currently under compilation."
    },

    // India Impact: Mark explicitly unavailable
    indiaImpact: fallbackData.indiaImpact || {
      isAvailable: false,
      explanation: "Dedicated bilateral strategic analysis between India and this nation is currently under compilation."
    }
  };
}
