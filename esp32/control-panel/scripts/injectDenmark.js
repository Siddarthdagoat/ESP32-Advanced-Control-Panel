import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const targetFile = path.join(ROOT_DIR, 'src/data/geointelCountryDossiers.js');

const dnkDossier = `  "DNK": {
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
`;

const content = fs.readFileSync(targetFile, 'utf8');

if (content.includes('"DNK": {')) {
  console.log('DNK dossier already present in geointelCountryDossiers.js');
} else {
  const marker = '"GRL": {';
  const updated = content.replace(marker, dnkDossier + '\n  ' + marker);
  fs.writeFileSync(targetFile, updated, 'utf8');
  console.log('Successfully injected Denmark (DNK) dossier into geointelCountryDossiers.js!');
}
