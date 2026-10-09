import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const targetFile = path.join(ROOT_DIR, 'src/data/geointelCountryDossiers.js');

const grlDossier = `  "GRL": {
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
`;

const content = fs.readFileSync(targetFile, 'utf8');

if (content.includes('"GRL": {')) {
  console.log('GRL dossier already present in geointelCountryDossiers.js');
} else {
  const marker = 'export const COUNTRY_DOSSIERS = {';
  const updated = content.replace(marker, marker + '\n' + grlDossier);
  fs.writeFileSync(targetFile, updated, 'utf8');
  console.log('Successfully injected Greenland (GRL) dossier into geointelCountryDossiers.js!');
}
