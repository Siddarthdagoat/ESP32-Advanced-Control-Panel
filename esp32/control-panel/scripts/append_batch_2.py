# Batch 2: POL, FIN, SWE, ARE, SYR, LBN
import json
import os
import re

base_path = os.path.join(os.path.dirname(__file__), '../src/data/geointelFrontlineCountries.js')
with open(base_path, 'r', encoding='utf-8') as f:
    text = f.read()

json_str = re.sub(r'^export const FRONTLINE_COUNTRY_DOSSIERS =\s*', '', text)
json_str = re.sub(r';\s*$', '', json_str)
countries = json.loads(json_str)

# 7. POLAND (POL)
countries["POL"] = {
    "id": "POL",
    "name": "Poland",
    "officialName": "Republic of Poland (Rzeczpospolita Polska)",
    "commonName": "Poland",
    "capital": "Warsaw",
    "capitalCoords": {"name": "Warsaw", "lat": 52.2297, "lng": 21.0122},
    "capitalAdmin": {
        "role": "Sovereign Administrative Capital of Poland",
        "political": "Seat of the President (Presidential Palace), Prime Minister (Chancellery), Sejm, and Senate.",
        "geographic": "52.23°N, 21.01°E situated on the Vistula River in east-central Poland.",
        "strategic": "Command nexus for NATO's eastern flank and hub of the Polish Armed Forces General Staff."
    },
    "region": "Europe",
    "subregion": "Central / Eastern Europe",
    "flag": "🇵🇱",
    "lat": 51.9194,
    "lng": 19.1451,
    "area": "312,696 km²",
    "population": "37.8 Million",
    "politicalSystemType": "Unitary Parliamentary Republic",
    "currency": "Polish Złoty (PLN / zł)",
    "languages": "Polish (Official)",
    "timeZones": "UTC+1 (CET), UTC+2 (CEST)",
    "tagline": "NATO Eastern Flank Bastion & European Conventional Rearmament Anchor",
    "overview": {
        "beginner": "Poland is a major Central European democracy and key NATO ally bordering the Baltic Sea, Belarus, and Ukraine. In response to the war in Ukraine, Poland has undertaken the largest military modernization and rearmament program in Europe, spending over 4% of its GDP on defense.",
        "advanced": "The Republic of Poland occupies the critical North European Plain corridor, guarding the Suwałki Gap—the narrow 65-km land bridge connecting the Baltic States to NATO territory between Russian Kaliningrad and Belarus. Poland has emerged as NATO's primary operational hub, hosting rotational US heavy armored brigades and funneling the vast majority of Western military assistance through the Rzeszów logistics nexus. Armed with massive acquisitions of US and South Korean hardware (Abrams tanks, K2 Black Panthers, HIMARS, F-35s), Poland is rapidly fielding the largest conventional ground army in the European Union."
    },
    "politicalSystem": {
        "isAvailable": True,
        "type": "Parliamentary Representative Democratic Republic",
        "constitution": "1997 Constitution of the Republic of Poland",
        "branches": [
            {"name": "Executive", "role": "Prime Minister as Head of Government leading the Council of Ministers; President as Head of State with veto power."},
            {"name": "Legislature", "role": "Bicameral Parliament consisting of the 460-seat Sejm and 100-seat Senate."},
            {"name": "Judiciary", "role": "Supreme Court, Constitutional Tribunal, and common courts administering rule of law."}
        ],
        "currentLeadership": {
            "headOfState": "Andrzej Duda (President)",
            "headOfGovernment": "Donald Tusk (Prime Minister)"
        },
        "rulingParty": "Civic Coalition (KO) / Trzecia Droga / Lewica governing coalition",
        "oppositionParties": ["Law and Justice (PiS)", "Confederation (Konfederacja)"],
        "parliamentDetails": "Sejm and Senate sitting in Warsaw.",
        "recentElections": "Parliamentary election held in October 2023 resulting in a pro-European governing majority; presidential election scheduled for 2025."
    },
    "geographyBorders": {
        "landArea": "312,696 km²",
        "location": "Central Europe, bounded by the Baltic Sea to the north, Germany to the west, Czechia/Slovakia to the south, and Ukraine/Belarus/Russia/Lithuania to the east.",
        "continent": "Europe",
        "coastline": "440 km along the Baltic Sea",
        "majorOceans": ["Atlantic Basin Approaches via North Sea and Baltic Sea"],
        "topography": "Low-lying North European Plain in the center and north, with the Carpathian and Sudeten mountains forming the southern border.",
        "rivers": ["Vistula (Wisła) River", "Oder (Odra) River", "Warta River", "Bug River"],
        "mountains": ["Tatra Mountains (Rysy: 2,499 m, highest peak)", "Karkonosze Mountains"],
        "seas": ["Baltic Sea (Bay of Gdańsk, Pomeranian Bay)"],
        "climates": ["Temperate transitional climate between maritime Western Europe and continental Eastern Europe"],
        "landBorders": ["Germany (467 km)", "Czechia (796 km)", "Slovakia (541 km)", "Ukraine (542 km)", "Belarus (418 km)", "Lithuania (104 km Suwałki Gap)", "Russia (210 km Kaliningrad border)"],
        "maritimeBorders": ["Baltic Sea EEZ with Sweden, Denmark, Germany, and Russia"]
    },
    "economy": {
        "gdpNominal": "$842.2 Billion USD (World's 21st largest)",
        "gdpPPP": "$1.71 Trillion USD",
        "gdpPerCapita": "$22,300 USD",
        "gdpGrowth": "+2.9%",
        "currency": "Polish Złoty (PLN)",
        "majorIndustries": ["Automotive & EV Battery Manufacturing", "Machinery & Equipment", "Electronics & IT Services", "Chemicals & Fertilizers", "Agri-Food Processing"],
        "majorExports": ["Machinery & Mechanical Appliances", "Automotive Parts & Electric Vehicle Batteries", "Furniture", "Plastics", "Meat & Dairy Products"],
        "majorImports": ["Crude Petroleum & Refined Fuels", "Electronic Equipment & Components", "Motor Vehicles", "Pharmaceuticals", "Metals"],
        "energyPosition": "Rapidly reducing coal dependence; completed Baltic Pipe pipeline from Norway; operating Świnoujście LNG terminal; constructing first nuclear power plant with US Westinghouse.",
        "naturalResources": ["Hard Coal & Lignite", "Copper & Silver (KGHM)", "Rock Salt", "Sulfur", "Natural Gas (Limited)", "Arable Farmland"],
        "tradeOrgs": ["World Trade Organization (WTO)", "European Union (EU)", "OECD", "Three Seas Initiative (3SI)"],
        "economicStrategicImportance": "Major manufacturing powerhouse of Central Europe and dominant logistics gateway into Eastern Europe.",
        "indiaEconomicConnection": "Expanding trade in automotive components, pharmaceuticals, and IT; Indian tech firms (TCS, Infosys, Wipro) maintain large delivery centers across Polish cities.",
        "majorTradingPartners": ["Germany (Over 27% of exports)", "Czechia", "France", "United Kingdom", "United States", "Italy", "China"]
    },
    "military": {
        "isAvailable": True,
        "expenditure": "$38.7 Billion USD (~4.2% of GDP, highest percentage in NATO)",
        "manpowerActive": "216,000 active military personnel (expanding toward 300,000 target)",
        "manpowerReserve": "40,000 Territorial Defense Forces (WOT) plus substantial reserves",
        "doctrine": "Forward territorial defense, deterrence against Russian aggression, high-intensity armored warfare, and total defense-in-depth.",
        "majorEquipment": ["M1A2 SEPv3 Abrams & K2 Black Panther MBTs", "HIMARS M142 & K239 Chunmoo Rocket Artillery", "Patriot PAC-3 / Wisła Air Defense", "F-35A Lightning II & FA-50PL Fighter Jets", "Borsuk Infantry Fighting Vehicles", "Krab 155mm Self-Propelled Howitzers"],
        "nuclearStatus": "Non-Nuclear State (NATO Nuclear Sharing aspirant)",
        "alliances": ["NATO Member State (Article 5 collective defense)", "European Union Common Security and Defence Policy (CSDP)", "Weimar Triangle (with France and Germany)"]
    },
    "relations": {
        "isAvailable": True,
        "main": [
            {"id": "POL_USA", "country": "United States", "countryCode": "USA", "status": "Premier Strategic Security Ally", "summary": "Hosts permanent US Army V Corps headquarters (Camp Kościuszko in Poznań), Aegis Ashore missile defense site at Redzikowo, and thousands of US combat troops."},
            {"id": "POL_UKR", "country": "Ukraine", "countryCode": "UKR", "status": "Vital Strategic Rear & Logistics Corridor", "summary": "Primary logistics lifeline for Western arms; hosted over 1.5M Ukrainian refugees despite periodic bilateral agricultural trade friction."},
            {"id": "POL_DEU", "country": "Germany", "countryCode": "DEU", "status": "Core Economic Partner & NATO Ally", "summary": "Largest trading partner; close coordination on NATO eastern flank defense despite historical World War II reparations dialogue."},
            {"id": "POL_RUS", "country": "Russia", "countryCode": "RUS", "status": "Hostile Strategic Adversary", "summary": "Full security barrier along Kaliningrad border; complete energy decoupling from Russian gas and oil imports."}
        ],
        "searchable": [
            {"id": "POL_LTU", "country": "Lithuania", "countryCode": "LTU", "summary": "Joint guardians of the strategic Suwałki Gap; close defense coordination along the Baltic frontier."},
            {"id": "POL_IND", "country": "India", "countryCode": "IND", "summary": "Historic diplomatic ties; Prime Minister Narendra Modi's historic visit in August 2024 elevated ties to a Strategic Partnership."}
        ]
    },
    "currentTensions": {
        "isAvailable": True,
        "activeFlashpoints": [
            {"name": "Suwałki Gap Corridor", "type": "Strategic Chokepoint Defense", "desc": "Defending the narrow land strip between Russian Kaliningrad and Belarus against potential mechanized interdiction."},
            {"name": "Belarusian Border Hybrid Pressure", "type": "Weaponized Migration Frontier", "desc": "Fortified 5.5-meter border barrier with electronic sensors repelling orchestrated migrant incursions by Belarusian state forces."},
            {"name": "Kaliningrad Border Fortification (Shield-East)", "type": "Anti-Access Fortification Line", "desc": "Multi-billion-euro 'Tarcza Wschód' defense line comprising minefields, anti-tank ditches, and fortified bunkers."}
        ],
        "summary": "Frontline NATO mobilization deterring Russian and Belarusian conventional and hybrid escalation along the eastern border."
    },
    "strategicLocations": {
        "isAvailable": True,
        "list": [
            {"name": "Rzeszów-Jasionka Airport (Hub)", "type": "International Military Logistics Nexus", "importance": "Global transshipment hub protected by US Patriot batteries handling over 80% of Western security assistance to Ukraine."},
            {"name": "Redzikowo Aegis Ashore Site", "type": "Ballistic Missile Defense Installation", "importance": "US Navy operational facility housing AN/SPY-1 radar and SM-3 interceptors defending Europe from intermediate-range ballistic missiles."},
            {"name": "Port of Gdańsk & Świnoujście LNG", "type": "Deepwater Maritime Energy Terminal", "importance": "Secures non-Russian crude oil and LNG imports, feeding Polish and Central European energy grids."}
        ]
    },
    "indiaImpact": {
        "isAvailable": True,
        "strategicTies": "India and Poland upgraded bilateral relations to a 'Strategic Partnership' in August 2024 during the first Indian Prime Ministerial visit to Warsaw in 45 years.",
        "trade": "Bilateral trade crossed $5.7 Billion USD, making Poland India’s largest economic partner in Central and Eastern Europe.",
        "energy": "Cooperation in clean energy technologies, mining machinery, wastewater treatment, and green transition initiatives.",
        "diaspora": "Vibrant Indian community of over 45,000 professionals, entrepreneurs, and university students.",
        "summary": "Poland played an invaluable role facilitating the evacuation of over 6,000 Indian citizens from Ukraine through the Rzeszów border during Operation Ganga in 2022."
    }
}

# 8. FINLAND (FIN)
countries["FIN"] = {
    "id": "FIN",
    "name": "Finland",
    "officialName": "Republic of Finland (Suomen tasavalta)",
    "commonName": "Finland",
    "capital": "Helsinki",
    "capitalCoords": {"name": "Helsinki", "lat": 60.1699, "lng": 24.9384},
    "capitalAdmin": {
        "role": "Sovereign Administrative Capital of Finland",
        "political": "Seat of the President (Presidential Palace), Prime Minister (Valtioneuvosto), and Parliament (Eduskunta).",
        "geographic": "60.17°N, 24.94°E situated on the southern coast facing the Gulf of Finland.",
        "strategic": "Coordinates maritime defense of the Gulf of Finland and headquarters of the Finnish Defence Forces."
    },
    "region": "Europe",
    "subregion": "Northern Europe / Nordic-Baltic",
    "flag": "🇫🇮",
    "lat": 61.9241,
    "lng": 25.7482,
    "area": "338,424 km²",
    "population": "5.6 Million",
    "politicalSystemType": "Unitary Parliamentary Republic",
    "currency": "Euro (EUR / €)",
    "languages": "Finnish and Swedish (Both Official)",
    "timeZones": "UTC+2 (EET), UTC+3 (EEST)",
    "tagline": "NATO's Longest Arctic Frontier with Russia & Master of Total National Defense",
    "overview": {
        "beginner": "Finland is a Nordic country in Northern Europe known for its world-class education, high-tech industry, and vast forests. Following decades of military non-alignment, Finland made the historic decision to join NATO in April 2023, doubling the alliance's direct land border with Russia.",
        "advanced": "The Republic of Finland commands a strategic 1,340 km border with the Russian Federation, stretching from the Gulf of Finland to the Arctic Barents Sea region. Operating on a model of 'Comprehensive Security' and universal male conscription, Finland can mobilize an exceptionally large wartime army of 280,000 troops backed by Western Europe's largest artillery force. Its accession to NATO fundamentally transformed the security architecture of the Baltic Sea, turning the waterway into an internal NATO lake and securing the northern approaches to Saint Petersburg."
    },
    "politicalSystem": {
        "isAvailable": True,
        "type": "Parliamentary Constitutional Republic",
        "constitution": "Constitution of Finland (2000)",
        "branches": [
            {"name": "Executive", "role": "President leading foreign and security policy in co-operation with the Government; Prime Minister as Head of Government."},
            {"name": "Legislature", "role": "Eduskunta (200-seat unicameral parliament) exercising sovereign legislative power."},
            {"name": "Judiciary", "role": "Supreme Court and Supreme Administrative Court ensuring judicial independence."}
        ],
        "currentLeadership": {
            "headOfState": "Alexander Stubb (President)",
            "headOfGovernment": "Petteri Orpo (Prime Minister)"
        },
        "rulingParty": "National Coalition Party (Kokoomus) leading government with Finns Party",
        "oppositionParties": ["Social Democratic Party (SDP)", "Centre Party", "Green League", "Left Alliance"],
        "parliamentDetails": "Eduskunta parliament sitting in Helsinki.",
        "recentElections": "Parliamentary election in April 2023; Presidential election held in February 2024 electing Alexander Stubb."
    },
    "geographyBorders": {
        "landArea": "338,424 km²",
        "location": "Northern Europe, bordering the Gulf of Bothnia to the west and Gulf of Finland to the south.",
        "continent": "Europe",
        "coastline": "1,250 km along the Baltic Sea, Gulf of Finland, and Gulf of Bothnia",
        "majorOceans": ["Atlantic Basin Approaches via Baltic Sea and Arctic approaches"],
        "topography": "Low-lying terrain characterized by over 188,000 lakes, dense boreal forests (taiga), and Arctic fells in Lapland.",
        "rivers": ["Kemijoki", "Iijoki", "Oulujoki", "Tornionjoki"],
        "mountains": ["Halti (1,324 m, highest point in Lapland near Norwegian border)"],
        "seas": ["Baltic Sea", "Gulf of Finland", "Gulf of Bothnia"],
        "climates": ["Cold temperate continental / subarctic climate with long snowy winters and short mild summers"],
        "landBorders": ["Russia (1,340 km)", "Sweden (614 km)", "Norway (736 km)"],
        "maritimeBorders": ["Baltic Sea and Gulf of Finland EEZ bordering Estonia, Sweden, and Russia"]
    },
    "economy": {
        "gdpNominal": "$300.2 Billion USD",
        "gdpPPP": "$345.0 Billion USD",
        "gdpPerCapita": "$54,100 USD",
        "gdpGrowth": "+0.5%",
        "currency": "Euro (EUR)",
        "majorIndustries": ["Telecommunications & 5G/6G Networks (Nokia)", "Forestry, Pulp & High-Tech Bio-Materials", "Machinery, Marine Propulsion & Icebreakers", "Refined Petroleum & Chemicals (Neste)", "Defense Technology & Electronics (Patria)"],
        "majorExports": ["Paper, Cardboard & Wood Pulp", "Refined Petroleum Products", "Telecommunications Equipment", "Industrial Machinery & Cranes", "Stainless Steel"],
        "majorImports": ["Crude Petroleum & Natural Gas", "Electronic Components", "Motor Vehicles & Parts", "Chemicals", "Consumer Electronics"],
        "energyPosition": "High energy independence; 5 nuclear reactors producing over 40% of electricity (including Olkiluoto 3, Europe's largest reactor).",
        "naturalResources": ["Extensive Timber Forests (Green Gold)", "Iron Ore", "Nickel", "Cobalt", "Chromium", "Zinc", "Copper", "Clean Freshwater"],
        "tradeOrgs": ["World Trade Organization (WTO)", "European Union (EU)", "OECD", "Nordic Council"],
        "economicStrategicImportance": "World leader in 5G wireless telecom equipment and specialized icebreaker naval design.",
        "indiaEconomicConnection": "Expanding partnership in 6G technology research, quantum computing, clean tech, and high-skilled talent mobility agreements.",
        "majorTradingPartners": ["Germany", "Sweden", "United States", "Netherlands", "China", "India"]
    },
    "military": {
        "isAvailable": True,
        "expenditure": "$6.7 Billion USD (~2.4% of GDP)",
        "manpowerActive": "24,000 professional military cadre (expanded by 21,000 conscripts trained annually)",
        "manpowerReserve": "900,000 trained reserves with a fully mobilized wartime strength of 280,000",
        "doctrine": "Comprehensive Defense, territorial defense-in-depth, asymmetric Arctic forest warfare, and massive precision artillery barrages.",
        "majorEquipment": ["F/A-18C/D Hornets transitioning to 64 F-35A Lightning II stealth jets", "K9 Moukari 155mm Self-Propelled Howitzers", "Leopard 2A4 and 2A6 Main Battle Tanks", "David's Sling Long-Range Air & Missile Defense System", "Patria AMV 8x8 Armored Vehicles", "Hamina-Class Guided-Missile Fast Attack Craft"],
        "nuclearStatus": "Non-Nuclear Weapon State under NATO Nuclear Umbrella",
        "alliances": ["31st Member of NATO (Acceded April 4, 2023)", "Defense Cooperation Agreement (DCA) with the United States", "Nordic Defence Cooperation (NORDEFCO)"]
    },
    "relations": {
        "isAvailable": True,
        "main": [
            {"id": "FIN_USA", "country": "United States", "countryCode": "USA", "status": "NATO Treaty Ally & Bilateral DCA Partner", "summary": "Signed landmark Defense Cooperation Agreement granting US forces access to 15 military facilities in Finland."},
            {"id": "FIN_RUS", "country": "Russia", "countryCode": "RUS", "status": "Hostile Adversary & Closed Border", "summary": "All eastern land border crossings closed following Russian weaponized migrant flows; complete severance of historical energy ties."},
            {"id": "FIN_SWE", "country": "Sweden", "countryCode": "SWE", "status": "Closest Nordic Sister Nation & Ally", "summary": "Full operational defense integration across land, naval, and air forces guarding the Baltic and Arctic flanks."},
            {"id": "FIN_EST", "country": "Estonia", "countryCode": "EST", "status": "Gulf of Finland Maritime Partner", "summary": "Joint coastal anti-ship missile coordination creating a defensive naval bottleneck closing the Gulf of Finland to Russian naval maneuvers."}
        ],
        "searchable": [
            {"id": "FIN_IND", "country": "India", "countryCode": "IND", "summary": "Deepening high-tech partnership in sustainability, clean tech, 6G telecom, and academic talent corridors."}
        ]
    },
    "currentTensions": {
        "isAvailable": True,
        "activeFlashpoints": [
            {"name": "1,340 km Finnish-Russian Land Frontier", "type": "Closed Militarized Border", "desc": "All vehicular crossing points sealed; construction of permanent electronic surveillance fences against hybrid border pressure."},
            {"name": "Gulf of Finland Undersea Infrastructure", "type": "Subsea Sabotage Monitoring", "desc": "Heightened naval patrols following sabotage incidents affecting Balticconnector gas pipeline and subsea telecom cables."},
            {"name": "Arctic Lapland Staging Corridor", "type": "NATO Northern Flank Integration", "desc": "Expanding Rovaniemi airbase to host NATO multi-national forward land forces headquarters."}
        ],
        "summary": "Full mobilization of sovereign and allied defenses against hybrid, electronic, and subsea threats from the Russian Federation."
    },
    "strategicLocations": {
        "isAvailable": True,
        "list": [
            {"name": "Upinniemi Naval Base & Gulf of Finland Fortress", "type": "Primary Coastal Defense Naval Base", "importance": "Controls coastal artillery, missile batteries, and mine warfare ships sealing the maritime approaches to Helsinki."},
            {"name": "Rovaniemi Air Base (Lapland)", "type": "Arctic Fighter & Quick Reaction Alert Base", "importance": "Home to Lapland Air Wing, future main operating base for F-35A stealth fighters near the Arctic Circle."},
            {"name": "Saimaa Canal & Imatra Border Sector", "type": "Severed Historical Transit Link", "importance": "Symbol of historical post-war compromise, now completely halted amidst structural European geopolitical realignment."}
        ]
    },
    "indiaImpact": {
        "isAvailable": True,
        "strategicTies": "India and Finland enjoy warm, non-contentious diplomatic relations marked by shared commitments to multilateralism and high-tech sustainability.",
        "trade": "Bilateral trade reached $1.8 Billion USD, led by Indian IT services and Finnish exports of advanced machinery, paper, and telecom equipment.",
        "energy": "Finnish energy tech firm Fortum has made significant solar power investments in India; Neste cooperates on sustainable aviation fuels.",
        "diaspora": "Over 20,000 Indian professionals and students reside in Finland, heavily represented in Helsinki's technology and engineering ecosystem.",
        "summary": "Finland's Nokia operates major R&D centers in Bengaluru and manufacturing hubs in Chennai, driving India’s domestic 5G rollout and future 6G standards."
    }
}

# 9. SWEDEN (SWE)
countries["SWE"] = {
    "id": "SWE",
    "name": "Sweden",
    "officialName": "Kingdom of Sweden (Konungariket Sverige)",
    "commonName": "Sweden",
    "capital": "Stockholm",
    "capitalCoords": {"name": "Stockholm", "lat": 59.3293, "lng": 18.0686},
    "capitalAdmin": {
        "role": "Sovereign Administrative Seat of the Kingdom of Sweden",
        "political": "Seat of the Riksdag (parliament), Prime Minister (Rosenbad), Royal Palace, and Supreme Court.",
        "geographic": "59.33°N, 18.07°E situated across 14 islands where Lake Mälaren flows into the Baltic Sea.",
        "strategic": "Coordinates Baltic maritime domain awareness and hosts Swedish Armed Forces Headquarters."
    },
    "region": "Europe",
    "subregion": "Northern Europe / Scandinavia",
    "flag": "🇸🇪",
    "lat": 60.1282,
    "lng": 18.6435,
    "area": "450,295 km²",
    "population": "10.5 Million",
    "politicalSystemType": "Unitary Parliamentary Constitutional Monarchy",
    "currency": "Swedish Krona (SEK / kr)",
    "languages": "Swedish (Official)",
    "timeZones": "UTC+1 (CET), UTC+2 (CEST)",
    "tagline": "Baltic Sea Maritime Keystone, High-Tech Arms Innovator & 32nd NATO Ally",
    "overview": {
        "beginner": "Sweden is a Nordic country occupying the eastern Scandinavian Peninsula. Renowned for its advanced welfare model, multinational corporations (IKEA, Volvo, Spotify), and indigenous defense industry (Gripen jets, submarines), Sweden ended 200 years of official military non-alignment to join NATO in March 2024.",
        "advanced": "The Kingdom of Sweden controls the vast central expanse of the Baltic Sea, notably anchoring the unsinkable aircraft carrier of Gotland Island—the geographic focal point controlling naval access between the Gulf of Finland, Gulf of Riga, and the Danish Straits. Possessing one of the world's most advanced indigenous aerospace and submarine shipbuilders (Saab, Kockums), Sweden's accession as NATO's 32nd member finalized the transformation of the Baltic Sea into an allied maritime basin, integrating seamless air and undersea combat operations across the Nordic-Baltic theater."
    },
    "politicalSystem": {
        "isAvailable": True,
        "type": "Parliamentary Constitutional Monarchy",
        "constitution": "Instrument of Government (1974) and statutory fundamental laws",
        "branches": [
            {"name": "Executive", "role": "Prime Minister as Head of Government leading the Cabinet; King as ceremonial Head of State."},
            {"name": "Legislature", "role": "Riksdag (349-seat unicameral parliament) passing all state legislation and budgets."},
            {"name": "Judiciary", "role": "Supreme Court and Supreme Administrative Court ensuring statutory compliance."}
        ],
        "currentLeadership": {
            "headOfState": "King Carl XVI Gustaf (Monarch)",
            "headOfGovernment": "Ulf Kristersson (Prime Minister)"
        },
        "rulingParty": "Moderate Party leading coalition with Christian Democrats and Liberals, backed by Sweden Democrats",
        "oppositionParties": ["Social Democratic Party", "Left Party", "Centre Party", "Green Party"],
        "parliamentDetails": "Riksdag parliament sitting in Helgeandsholmen, Stockholm.",
        "recentElections": "General election held in September 2022 resulting in a center-right governing coalition."
    },
    "geographyBorders": {
        "landArea": "450,295 km²",
        "location": "Northern Europe on the Scandinavian Peninsula, bounded by the Gulf of Bothnia and Baltic Sea to the east, and Skagerrak/Kattegat to the southwest.",
        "continent": "Europe",
        "coastline": "3,218 km along the Baltic Sea, Kattegat, and Skagerrak",
        "majorOceans": ["Atlantic Basin Approaches via North Sea, Kattegat, and Baltic Sea"],
        "topography": "Rolling terrain of forests and lakes, with the Scandinavian Mountain range (Scandes) forming the Norwegian border and thousands of coastal archipelago islands.",
        "rivers": ["Torne River", "Lule River", "Kalix River", "Dalälven", "Göta älv"],
        "mountains": ["Kebnekaise (2,096 m, highest peak in Sweden)"],
        "seas": ["Baltic Sea", "Gulf of Bothnia", "Kattegat", "Skagerrak"],
        "climates": ["Temperate in the south; subarctic in the north with long cold winters"],
        "landBorders": ["Norway (1,619 km)", "Finland (614 km)"],
        "maritimeBorders": ["Øresund maritime boundary and bridge link with Denmark; Baltic EEZ with Germany, Poland, Lithuania, Latvia, and Russia"]
    },
    "economy": {
        "gdpNominal": "$603.8 Billion USD",
        "gdpPPP": "$725.0 Billion USD",
        "gdpPerCapita": "$57,400 USD",
        "gdpGrowth": "+1.4%",
        "currency": "Swedish Krona (SEK)",
        "majorIndustries": ["Automotive & Heavy Commercial Vehicles (Volvo, Scania)", "Aerospace & Defense Engineering (Saab)", "Telecommunications (Ericsson)", "Pharmaceuticals & Life Sciences (AstraZeneca)", "Clean Tech, Steel & Iron Ore Extraction (LKAB)"],
        "majorExports": ["Machinery & Transport Equipment", "Motor Vehicles & Parts", "Pharmaceutical Products", "Iron Ore & High-Grade Steel", "Paper & Wood Products"],
        "majorImports": ["Crude Petroleum & Refined Products", "Electronic Integrated Circuits & Computing", "Motor Vehicles", "Foodstuffs", "Chemicals"],
        "energyPosition": "Almost completely decarbonized electricity grid; balanced between hydro power (~40%), nuclear power (~30%), and wind energy (~20%).",
        "naturalResources": ["High-Grade Iron Ore (Kiruna, Europe's largest underground mine)", "Rare Earth Elements (Per Geijer deposit, largest in Europe)", "Copper", "Lead", "Zinc", "Extensive Timber & Hydropower"],
        "tradeOrgs": ["World Trade Organization (WTO)", "European Union (EU)", "OECD", "Nordic Council"],
        "economicStrategicImportance": "Supplier of 80% of the European Union's iron ore; pioneer in fossil-free green steel.",
        "indiaEconomicConnection": "Over 260 Swedish companies operate in India (Ericsson, Volvo, ABB, IKEA, Astra); defense partnership in aerospace and radar technologies.",
        "majorTradingPartners": ["Germany", "Norway", "United States", "Denmark", "Finland", "United Kingdom", "China"]
    },
    "military": {
        "isAvailable": True,
        "expenditure": "$12.5 Billion USD (~2.1% of GDP)",
        "manpowerActive": "24,000 professional military personnel (expanding with conscription)",
        "manpowerReserve": "32,000 trained reserves plus 21,000 Home Guard (Hemvärnet)",
        "doctrine": "Total Defense (Totalförsvaret), high-technology air and subsea dominance, dispersal of air assets to road runways, and Baltic littoral choke-point control.",
        "majorEquipment": ["JAS 39C/D and JAS 39E Gripen Multi-Role Fighter Jets", "Gotland-Class AIP Air-Independent Propulsion Submarines", "Visby-Class Stealth Corvettes", "Archer 155mm Wheeled Self-Propelled Howitzer", "Stridsvagn 122 (Leopard 2A5 upgraded) Main Battle Tanks", "Combat Boat 90 (CB90) Fast Assault Craft"],
        "nuclearStatus": "Non-Nuclear Weapon State under NATO Nuclear Umbrella",
        "alliances": ["32nd Member of NATO (Acceded March 7, 2024)", "Bilateral DCA with the United States", "NORDEFCO (Nordic Defence Cooperation)"]
    },
    "relations": {
        "isAvailable": True,
        "main": [
            {"id": "SWE_USA", "country": "United States", "countryCode": "USA", "status": "NATO Treaty Ally & Bilateral DCA Partner", "summary": "Signed Defense Cooperation Agreement granting US Armed Forces access to 17 Swedish military bases and training grounds."},
            {"id": "SWE_FIN", "country": "Finland", "countryCode": "FIN", "status": "Inseparable Strategic Security Partner", "summary": "Joint operational command, shared air and naval patrol operations, and common Nordic-Baltic defense planning."},
            {"id": "SWE_RUS", "country": "Russia", "countryCode": "RUS", "status": "Strategic Adversary & Threat Vector", "summary": "Full defense reorientation driven by Russian aggression; frequent Russian electronic warfare and GPS jamming in Baltic airspace."},
            {"id": "SWE_IND", "country": "India", "countryCode": "IND", "status": "Strategic Technology & Innovation Partner", "summary": "Close dialogue on Indo-Pacific maritime security, defense co-production (Saab Carl-Gustaf M4 manufactured in India), and green transition."}
        ],
        "searchable": [
            {"id": "SWE_DNK", "country": "Denmark", "countryCode": "DNK", "summary": "Connected by the landmark Øresund Bridge; joint control of naval passage between the Kattegat and the Baltic Sea."},
            {"id": "SWE_POL", "country": "Poland", "countryCode": "POL", "summary": "Key Baltic maritime partner; Sweden ordered Saab 340 Early Warning aircraft for Poland to bolster regional situational awareness."}
        ]
    },
    "currentTensions": {
        "isAvailable": True,
        "activeFlashpoints": [
            {"name": "Gotland Island Air-Sea Fortress", "type": "Strategic Baltic Bastion", "desc": "Remilitarized island equipped with RBS-15 anti-ship missiles and Patriot air defenses to deny Russian naval breakout."},
            {"name": "Baltic Undersea Critical Infrastructure", "type": "Subsea Hybrid Security Alert", "desc": "Monitoring undersea fiber-optic telecom cables and power interconnectors against dark-fleet sabotage operations."},
            {"name": "High North Arctic Space & Radar Hub (Esrange)", "type": "Arctic Satellite Ground Station", "desc": "Expanding sovereign orbital launch and telemetry capabilities in Kiruna near Arctic frontiers."}
        ],
        "summary": "Full strategic military integration into NATO command structures safeguarding the Baltic maritime domain."
    },
    "strategicLocations": {
        "isAvailable": True,
        "list": [
            {"name": "Gotland Island (Visby & Slite)", "type": "Baltic Strategic Keystone", "importance": "Controls the central maritime basin of the Baltic Sea; whoever controls Gotland controls Baltic air and sea transit."},
            {"name": "Karlskrona Naval Base", "type": "Primary Headquarters of Swedish Navy", "importance": "Submarine construction, maintenance, and coastal missile corvette base commanding the southern Baltic."},
            {"name": "Muskö Underground Naval Base", "type": "Hardened Subterranean Naval Citadel", "importance": "Blast-proof underground naval docks blasted into granite island bedrock, serving as wartime naval command center."}
        ]
    },
    "indiaImpact": {
        "isAvailable": True,
        "strategicTies": "India-Sweden ties are anchored in shared commitments to rules-based international order, technological innovation, and sustainable development.",
        "trade": "Bilateral trade reached $4.6 Billion USD; major Swedish industrial giants have operated in India for over a century.",
        "energy": "Co-leads the global Leadership Group for Industry Transition (LeadIT) with India, driving decarbonization of heavy steel and cement industries.",
        "diaspora": "Vibrant and growing Indian diaspora of over 60,000 engineers, scientists, and IT specialists across Stockholm and Gothenburg.",
        "summary": "Saab established the first 100% foreign-owned defense manufacturing plant in Haryana, India, producing the legendary Carl-Gustaf M4 multi-role shoulder-fired weapon system for the Indian Armed Forces."
    }
}

# 10. UNITED ARAB EMIRATES (ARE)
countries["ARE"] = {
    "id": "ARE",
    "name": "United Arab Emirates",
    "officialName": "United Arab Emirates (Al-Imārāt al-‘Arabīyah al-Muttaḥidah)",
    "commonName": "UAE",
    "capital": "Abu Dhabi",
    "capitalCoords": {"name": "Abu Dhabi", "lat": 24.4539, "lng": 54.3773},
    "capitalAdmin": {
        "role": "Federal Capital of the United Arab Emirates",
        "political": "Seat of the Federal Supreme Council, Presidential Palace (Qasr Al Watan), and federal ministries.",
        "geographic": "24.45°N, 54.38°E situated on an island in the central Persian Gulf.",
        "strategic": "Apex political and financial command center controlling over 90% of UAE hydrocarbon wealth and sovereign wealth funds (ADIA, Mubadala)."
    },
    "region": "Middle East",
    "subregion": "Persian Gulf / Arabian Peninsula",
    "flag": "🇦🇪",
    "lat": 23.4241,
    "lng": 53.8478,
    "area": "83,600 km² (Federation of 7 Emirates)",
    "population": "10.2 Million (~11% Emirati citizens, 89% expatriate residents)",
    "politicalSystemType": "Federal Elective Constitutional Monarchy (Council of 7 Ruling Emirs)",
    "currency": "UAE Dirham (AED / د.إ)",
    "languages": "Arabic (Official), English (Universal Business Language)",
    "timeZones": "UTC+4 (GST)",
    "tagline": "Global Logistics & Capital Nexus, Abraham Accords Architect & BRICS Member",
    "overview": {
        "beginner": "The United Arab Emirates is a prosperous federation of seven emirates (including Abu Dhabi and Dubai) located on the Persian Gulf. Known globally as a powerhouse of trade, aviation, and financial technology, the UAE is an influential Middle Eastern diplomatic power that signed the historic Abraham Accords with Israel and joined BRICS.",
        "advanced": "The United Arab Emirates commands a critical geographic position at the southern approaches to the Strait of Hormuz, with extensive Persian Gulf coastlines and a strategic open-ocean bypass terminal at Fujairah on the Gulf of Oman. Operating under the leadership of President Sheikh Mohamed bin Zayed Al Nahyan (MBZ), the UAE has developed a sophisticated foreign policy of strategic autonomy: maintaining a major defense pact with the US, deepening economic partnerships with China and India (CEPA, IMEC), expanding maritime footprint across the Horn of Africa, and integrating high-technology cooperation under the Abraham Accords."
    },
    "politicalSystem": {
        "isAvailable": True,
        "type": "Federal Absolute Monarchy with Elective Supreme Council",
        "constitution": "1971 Permanent Constitution of the United Arab Emirates",
        "branches": [
            {"name": "Federal Supreme Council", "role": "Apex constitutional authority comprising the hereditary rulers of the seven emirates."},
            {"name": "President", "role": "Head of State and Commander-in-Chief of the Armed Forces (traditionally the Ruler of Abu Dhabi)."},
            {"name": "Federal National Council (FNC)", "role": "40-member consultative assembly reviewing federal draft laws and state budgets."}
        ],
        "currentLeadership": {
            "headOfState": "Sheikh Mohamed bin Zayed Al Nahyan (President and Ruler of Abu Dhabi)",
            "headOfGovernment": "Sheikh Mohammed bin Rashid Al Maktoum (Vice President, Prime Minister, Ruler of Dubai)"
        },
        "rulingParty": "None (Political parties prohibited; governance through consensus of ruling families)",
        "oppositionParties": ["None"],
        "parliamentDetails": "Federal National Council sitting in Abu Dhabi.",
        "recentElections": "Indirect consultative FNC elections held in October 2023."
    },
    "geographyBorders": {
        "landArea": "83,600 km²",
        "location": "Eastern Arabian Peninsula, bordering the Persian Gulf and Gulf of Oman, between Saudi Arabia and Oman.",
        "continent": "Asia",
        "coastline": "1,318 km (primarily Persian Gulf, plus eastern coastline on Gulf of Oman)",
        "majorOceans": ["Indian Ocean Basin via Gulf of Oman and Arabian Sea"],
        "topography": "Arid coastal lowlands and vast desert sand dunes (Rub' al-Khali), with the rocky Hajar Mountains rising in the east.",
        "rivers": ["No permanent rivers; seasonal wadis"],
        "mountains": ["Hajar Mountains (Jebel Jais: 1,934 m, highest point)"],
        "seas": ["Persian Gulf (Arabian Gulf)", "Gulf of Oman"],
        "climates": ["Arid subtropical desert climate with extremely hot summers and mild winters"],
        "landBorders": ["Saudi Arabia (457 km)", "Oman (410 km)"],
        "maritimeBorders": ["Maritime EEZ with Iran, Qatar, Saudi Arabia, and Oman"]
    },
    "economy": {
        "gdpNominal": "$509.2 Billion USD",
        "gdpPPP": "$890.0 Billion USD",
        "gdpPerCapita": "$49,900 USD",
        "gdpGrowth": "+3.9%",
        "currency": "UAE Dirham (AED, pegged to USD at 3.6725)",
        "majorIndustries": ["Petroleum & Natural Gas Extraction (ADNOC)", "Global Logistics, Seaports & Aviation (DP World, Emirates)", "Financial Services & Real Estate", "Aluminum Smelting & Petrochemicals", "Defense & Autonomous Systems (EDGE Group)"],
        "majorExports": ["Crude Petroleum & Refined Products", "Gold & Precious Metals", "Non-Crude Petroleum Gases", "Broadcasting Equipment & Re-exports", "Aluminum"],
        "majorImports": ["Gold & Diamonds", "Broadcasting & Telecommunications Equipment", "Refined Petroleum", "Motor Vehicles & Aircraft Parts"],
        "energyPosition": "OPEC founding member producing ~3.2M bpd of crude; operating the Barakah Nuclear Energy Plant (4 APR-1400 reactors producing 25% of electricity).",
        "naturalResources": ["Petroleum (7th largest reserves in the world)", "Natural Gas", "Gypsum", "Limestone", "Extensive solar irradiance"],
        "tradeOrgs": ["World Trade Organization (WTO)", "OPEC", "Gulf Cooperation Council (GCC)", "BRICS (Acceded Jan 2024)", "Arab League"],
        "economicStrategicImportance": "Top global trading and aviation crossroads; sovereign wealth funds manage over $1.5 Trillion in foreign assets.",
        "indiaEconomicConnection": "Landmark Comprehensive Economic Partnership Agreement (CEPA); local currency settlement (INR-AED); anchor partner in the India-Middle East-Europe Economic Corridor (IMEC).",
        "majorTradingPartners": ["India", "China", "United States", "Saudi Arabia", "Japan", "Switzerland"]
    },
    "military": {
        "isAvailable": True,
        "expenditure": "$20.7 Billion USD (~4.1% of GDP)",
        "manpowerActive": "63,000 active service personnel (UAE Armed Forces)",
        "manpowerReserve": "Universal male conscription generating tens of thousands of trained reserves",
        "doctrine": "Expeditionary power projection, integrated multi-layer air/missile defense, autonomous drone warfare, and maritime domain control across the Arabian Sea and Red Sea.",
        "majorEquipment": ["F-16E/F Block 60 Desert Falcon", "Mirage 2000-9 transitioning to 80 Rafale F4 jets", "THAAD Terminal High Altitude Area Defense Batteries", "Patriot PAC-3 Missile Defense", "Leclerc Main Battle Tanks", "Bayraktar TB2 and Akinci Combat Drones", "EDGE Group Loitering Munitions"],
        "nuclearStatus": "Non-Nuclear Weapon State (Pioneer of 123 Agreement with US for peaceful nuclear energy without domestic enrichment)",
        "alliances": ["Defense Cooperation Agreement with the United States (Hosting US forces at Al Dhafra Air Base)", "Abraham Accords Security Ties with Israel", "GCC Joint Peninsula Shield"]
    },
    "relations": {
        "isAvailable": True,
        "main": [
            {"id": "ARE_IND", "country": "India", "countryCode": "IND", "status": "Comprehensive Strategic & Economic Partnership", "summary": "One of India’s top trade and energy partners; pioneer of bilateral local currency trade and anchor hub for the IMEC corridor."},
            {"id": "ARE_USA", "country": "United States", "countryCode": "USA", "status": "Major Defense Partner & Security Host", "summary": "Core security partner; hosts US Air Force 380th Air Expeditionary Wing at Al Dhafra; designated as a Major Defense Partner."},
            {"id": "ARE_ISR", "country": "Israel", "countryCode": "ISR", "status": "Abraham Accords Diplomatic & Tech Partner", "summary": "Historic 2020 normalization; thriving bilateral tourism, cybersecurity cooperation, and commercial joint ventures."},
            {"id": "ARE_CHN", "country": "China", "countryCode": "CHN", "status": "Comprehensive Strategic Partner & Tech Hub", "summary": "Major trading partner; cooperation on port logistics (Khalifa Port terminal), AI development, and digital currency pilots."}
        ],
        "searchable": [
            {"id": "ARE_SAU", "country": "Saudi Arabia", "countryCode": "SAU", "summary": "Close strategic Gulf ally despite friendly economic competition over multinational regional headquarters and OPEC quotas."},
            {"id": "ARE_IRN", "country": "Iran", "countryCode": "IRN", "summary": "Restored full diplomatic ties in 2022 to de-escalate tensions, while maintaining claims over three Iranian-occupied islands (Abu Musa, Greater and Lesser Tunb)."}
        ]
    },
    "currentTensions": {
        "isAvailable": True,
        "activeFlashpoints": [
            {"name": "Three Disputed Gulf Islands (Abu Musa, Tunbs)", "type": "Territorial Sovereignty Dispute with Iran", "desc": "Continuous diplomatic assertion of UAE sovereignty over islands occupied by Iran since 1971."},
            {"name": "Strait of Hormuz Tanker Interception Zone", "type": "Maritime Commercial Risk Zone", "desc": "Monitoring naval chokepoint risks; mitigating tanker threats via the Fujairah bypass pipeline to open water."},
            {"name": "Sudan & Horn of Africa Proxy Dynamics", "type": "Regional Influence Competition", "desc": "Diplomatic pressure regarding allegations of military support in regional conflicts across the Red Sea littoral."}
        ],
        "summary": "Balancing multi-alignment diplomacy between the US, China, and Russia while safeguarding maritime oil export routes."
    },
    "strategicLocations": {
        "isAvailable": True,
        "list": [
            {"name": "Port of Jebel Ali (Dubai)", "type": "World's Largest Man-Made Harbor", "importance": "Top deepwater transshipment hub in the Middle East and most frequent port of call for the US Navy outside the United States."},
            {"name": "Al Dhafra Air Base (Abu Dhabi)", "type": "Major Joint Air Base", "importance": "Hosts UAE Air Force, US 380th Air Expeditionary Wing (MQ-9s, KC-10s), and advanced multi-tier missile defense batteries."},
            {"name": "Port of Fujairah & Habshan-Fujairah Oil Pipeline", "type": "Strategic Hormuz Bypass Terminal", "importance": "Allows up to 1.8M barrels of crude oil per day to bypass the vulnerable Strait of Hormuz directly to the Indian Ocean."}
        ]
    },
    "indiaImpact": {
        "isAvailable": True,
        "strategicTies": "India and the UAE share a historic, multifaceted 'Comprehensive Strategic Partnership' reinforced by personal chemistry between PM Narendra Modi and President MBZ.",
        "trade": "Bilateral trade reached $85 Billion USD under the landmark CEPA agreement, with both nations actively targeting $100 Billion non-oil trade.",
        "energy": "The UAE is India's top crude and LNG supplier; ADNOC was the first international partner to invest in India's Strategic Petroleum Reserve (SPR) cavern at Mangalore.",
        "diaspora": "Over 3.5 million Indian nationals reside in the UAE, constituting the largest expatriate community and remitting over $15 Billion annually.",
        "summary": "The UAE is the critical western terminal node for the India-Middle East-Europe Economic Corridor (IMEC), establishing a seamless multimodal rail-and-port route connecting Indian ports to Europe."
    }
}

# 11. SYRIA (SYR)
countries["SYR"] = {
    "id": "SYR",
    "name": "Syria",
    "officialName": "Syrian Arab Republic (Al-Jumhūrīyah al-‘Arabīyah as-Sūrīyah)",
    "commonName": "Syria",
    "capital": "Damascus",
    "capitalCoords": {"name": "Damascus", "lat": 33.5138, "lng": 36.2765},
    "capitalAdmin": {
        "role": "Ancient Administrative Capital of the Syrian Arab Republic",
        "political": "Seat of the Presidential Palace, People's Council (parliament), and central government ministries.",
        "geographic": "33.51°N, 36.28°E situated on a plateau 680 m above sea level at the foot of the Anti-Lebanon Mountains.",
        "strategic": "Apex political and intelligence coordination hub presiding over the transition and post-conflict authority."
    },
    "region": "Middle East",
    "subregion": "Levant / Eastern Mediterranean",
    "flag": "🇸🇾",
    "lat": 34.8021,
    "lng": 38.9968,
    "area": "185,180 km²",
    "population": "22.1 Million (Over 6M displaced abroad, 7M internally displaced)",
    "politicalSystemType": "State in Complex Transition following Collapse of the Assad Regime",
    "currency": "Syrian Pound (SYP / ل.س)",
    "languages": "Arabic (Official), Kurdish, Armenian, Aramaic",
    "timeZones": "UTC+3 (AST)",
    "tagline": "Historic Heart of the Levant & Geopolitical Crossroad of Mediterranean Hegemony",
    "overview": {
        "beginner": "Syria is a historic nation in the Levant bordering the Eastern Mediterranean Sea, Lebanon, Israel, Jordan, Iraq, and Turkey. After over a decade of devastating civil war that drew in global superpowers, Syria entered a dramatic political transition following the sudden collapse of the Assad government in late 2024.",
        "advanced": "Syria occupies the strategic territorial bridge connecting the Mediterranean basin, Anatolia, and the Mesopotamian river systems. For decades an anchor of the Iranian-led 'Axis of Resistance' and host to Russia's only Mediterranean naval installation at Tartus, the Syrian state fractured into multiple zones of foreign influence. The collapse of the Ba'athist regime in December 2024 reshaped Middle Eastern geopolitics, triggering Israeli preemptive buffer operations on the Golan Heights, Turkish maneuvering in northern Syria, and urgent international diplomacy to stabilize national institutions."
    },
    "politicalSystem": {
        "isAvailable": True,
        "type": "Transitional Governing Authority under Post-Assad Restructuring",
        "constitution": "Transitional Constitutional Framework under Negotiation",
        "branches": [
            {"name": "Transitional Administration", "role": "Interim executive council formed to maintain civil state services and public safety."},
            {"name": "Security Coordination Council", "role": "Consortium of regional and military factions coordinating demilitarization and border control."},
            {"name": "Constitutional Drafting Body", "role": "Tasked with formulating an inclusive, representative constitution for all Syrian communities."}
        ],
        "currentLeadership": {
            "headOfState": "Interim Transitional Council Leadership",
            "headOfGovernment": "Mohammed al-Bashir (Head of Transitional Administration)"
        },
        "rulingParty": "Transitional Governance Framework",
        "oppositionParties": ["Syrian National Coalition", "Syrian Democratic Council (SDC)", "Diverse civil society groupings"],
        "parliamentDetails": "People's Council suspended pending national transitional assembly convening.",
        "recentElections": "National general elections planned under UN Security Council Resolution 2254 roadmap."
    },
    "geographyBorders": {
        "landArea": "185,180 km²",
        "location": "Levant region of Southwest Asia, bordering the Mediterranean Sea to the west, Turkey to the north, Iraq to the east, Jordan to the south, and Israel/Lebanon to the southwest.",
        "continent": "Asia",
        "coastline": "193 km along the Mediterranean Sea",
        "majorOceans": ["Atlantic Basin Approaches via Mediterranean Sea"],
        "topography": "Narrow coastal plain, coastal mountain range (Jabal Ansariya), fertile interior river valleys (Orontes), and the vast Syrian Desert (Badia) in the east.",
        "rivers": ["Euphrates River", "Orontes River", "Khabur River", "Yarmouk River"],
        "mountains": ["Mount Hermon (Jabal al-Shaykh: 2,814 m, on border with Lebanon)", "Jabal Ansariya", "Jabal al-Druze"],
        "seas": ["Mediterranean Sea (Levantine Basin)"],
        "climates": ["Mediterranean climate along coast; semi-arid and arid desert in the interior"],
        "landBorders": ["Turkey (822 km)", "Iraq (605 km)", "Jordan (375 km)", "Lebanon (375 km)", "Israel / Golan Heights (76 km UNDOF buffer zone)"],
        "maritimeBorders": ["Mediterranean EEZ bordering Cyprus, Lebanon, and Turkey"]
    },
    "economy": {
        "gdpNominal": "$14.2 Billion USD (Severely contracted from pre-war $60B+)",
        "gdpPPP": "$35.0 Billion USD",
        "gdpPerCapita": "$650 USD",
        "gdpGrowth": "-1.2% (Severe liquidity crisis, hyperinflation, and war damage)",
        "currency": "Syrian Pound (SYP)",
        "majorIndustries": ["Crude Oil Extraction (Severely depleted/damaged)", "Agriculture & Olive Oil Processing", "Textiles & Garments", "Phosphates Mining", "Small-scale Food Manufacturing"],
        "majorExports": ["Olive Oil", "Fruits & Vegetables", "Phosphates", "Spices", "Scrap Metal"],
        "majorImports": ["Wheat & Grain Flour", "Refined Petroleum Products", "Pharmaceuticals", "Machinery", "Sugar"],
        "energyPosition": "Pre-war oil exporter (Deir ez-Zor fields); oil and gas fields severely damaged or contested; reliance on subsidized imports.",
        "naturalResources": ["Petroleum (Depleted)", "Natural Gas", "Phosphates", "Chrome & Manganese Ores", "Asphalt", "Iron Ore", "Rock Salt"],
        "tradeOrgs": ["Arab League", "OIC"],
        "economicStrategicImportance": "Historic transit corridor for regional overland trade connecting Turkey and Europe with the Gulf states.",
        "indiaEconomicConnection": "India maintained continuous diplomatic presence throughout the conflict; provided lines of credit for power generation and IT training.",
        "majorTradingPartners": ["Turkey", "United Arab Emirates", "China", "Jordan", "Saudi Arabia", "India"]
    },
    "military": {
        "isAvailable": True,
        "expenditure": "$1.2 Billion USD (Estimated fragmented armed structures)",
        "manpowerActive": "Transitional armed structures restructuring conventional divisions",
        "manpowerReserve": "Extensive demobilized veterans, regional local defense units, and internal security personnel",
        "doctrine": "Transitioning from regime protection to national territorial integrity, border defense, and counter-terrorist stabilization.",
        "majorEquipment": ["T-72 & T-62 Main Battle Tanks", "BMP-1/2 Infantry Fighting Vehicles", "S-300 / Buk-M2 Air Defense Batteries (Degraded/captured)", "Su-24 & MiG-29 Combat Aircraft (Partially grounded)", "D-30 122mm Towed Artillery"],
        "nuclearStatus": "Non-Nuclear State (Suspected covert al-Kibar reactor destroyed by Israeli airstrike in 2007)",
        "alliances": ["Transitional diplomacy engaging Arab League, Turkey, United States, and European partners"]
    },
    "relations": {
        "isAvailable": True,
        "main": [
            {"id": "SYR_TUR", "country": "Turkey", "countryCode": "TUR", "status": "Frontier Security & Transition Power", "summary": "Controls extensive northern border security zones; main diplomatic interlocutor facilitating transitional governance in Damascus."},
            {"id": "SYR_RUS", "country": "Russia", "countryCode": "RUS", "status": "Naval Base Host & Re-negotiation", "summary": "Maintained naval facility at Tartus and Hmeimim airbase; navigating relations with the post-Assad transitional authority."},
            {"id": "SYR_ISR", "country": "Israel", "countryCode": "ISR", "status": "Golan Heights Frontier Ceasefire", "summary": "Israel executed preemptive strikes on heavy weapons stockpiles and established forward buffer outposts beyond the 1974 disengagement line."},
            {"id": "SYR_IND", "country": "India", "countryCode": "IND", "status": "Historic Friendly Diplomatic Ties", "summary": "India kept its embassy in Damascus continuously operational throughout the war, providing humanitarian aid, student scholarships, and IT training."}
        ],
        "searchable": [
            {"id": "SYR_IRN", "country": "Iran", "countryCode": "IRN", "summary": "Historical patron of the Assad regime; Iranian military and proxy footprint collapsed following the December 2024 government transition."},
            {"id": "SYR_USA", "country": "United States", "countryCode": "USA", "status": "Counter-ISIS Mission & Sanctions Review", "summary": "Maintains special forces garrison at al-Tanf and eastern Syria; reviewing Caesar Act sanctions to facilitate humanitarian reconstruction."}
        ]
    },
    "currentTensions": {
        "isAvailable": True,
        "activeFlashpoints": [
            {"name": "Golan Heights & Mount Hermon Buffer Zone", "type": "Israeli Military Advance", "desc": "IDF forward deployment into the demilitarized UNDOF buffer zone to prevent weapon transfers following regime collapse."},
            {"name": "Northeastern Syria / SDF-Turkish Frontier", "type": "Kurdish Autonomy Flashpoint", "desc": "Tensions between Turkish-backed factions and the Syrian Democratic Forces (SDF) over control of oilfields and border zones."},
            {"name": "Tartus & Latakia Naval Coastal Sector", "type": "Foreign Basing Contestation", "desc": "Uncertain future of Russian naval access to the deepwater port of Tartus amidst transitional diplomacy."}
        ],
        "summary": "Historic state transition balancing foreign troop withdrawals, territorial stabilization, and national reconstruction."
    },
    "strategicLocations": {
        "isAvailable": True,
        "list": [
            {"name": "Port of Tartus Naval Facility", "type": "Mediterranean Deepwater Naval Hub", "importance": "Historically Russia's only naval repair and supply point in the Mediterranean Sea."},
            {"name": "Mount Hermon (Jabal al-Shaykh)", "type": "Dominant Electronic Surveillance Nexus", "importance": "Overlooks Damascus, southern Lebanon, and northern Israel; critical apex intelligence intercept site."},
            {"name": "Euphrates River Tabqa Dam (Lake Assad)", "type": "Hydroelectric & Water Lifeline", "importance": "Primary hydroelectric generation plant and agricultural irrigation reservoir for eastern Syria."}
        ]
    },
    "indiaImpact": {
        "isAvailable": True,
        "strategicTies": "India has maintained continuous, principled diplomatic relations with Damascus, consistently supporting Syria’s sovereignty, unity, and territorial integrity.",
        "trade": "India has provided extensive humanitarian assistance, including consignments of critical life-saving medicines, food supplies, and artificial limbs (Jaipur Foot camps).",
        "energy": "ONGC Videsh historically held a 50% participating interest in Block XXIV in northeast Syria alongside Syrian Petroleum Company.",
        "diaspora": "Modest Indian expatriate presence involved in UN peacekeeping (UNDOF on the Golan Heights) and international humanitarian organizations.",
        "summary": "India’s steadfast diplomatic presence throughout Syria’s crisis positions New Delhi as a trusted, non-partisan partner eligible to support post-conflict reconstruction and institutional capacity building."
    }
}

# 12. LEBANON (LBN)
countries["LBN"] = {
    "id": "LBN",
    "name": "Lebanon",
    "officialName": "Lebanese Republic (Al-Jumhūrīyah al-Lubnānīyah)",
    "commonName": "Lebanon",
    "capital": "Beirut",
    "capitalCoords": {"name": "Beirut", "lat": 33.8938, "lng": 35.5018},
    "capitalAdmin": {
        "role": "Sovereign Administrative & Cultural Capital of Lebanon",
        "political": "Seat of the Grand Serail (Government Palace), Parliament (Place de l'Étoile), and central ministries.",
        "geographic": "33.89°N, 35.50°E situated on a rocky promontory overlooking the Mediterranean Sea.",
        "strategic": "Historical financial and maritime gateway of the Levant; headquarters of the Lebanese Armed Forces (LAF)."
    },
    "region": "Middle East",
    "subregion": "Levant / Eastern Mediterranean",
    "flag": "🇱🇧",
    "lat": 33.8547,
    "lng": 35.8623,
    "area": "10,452 km²",
    "population": "5.3 Million (Plus ~1.5M registered Syrian and Palestinian refugees)",
    "politicalSystemType": "Confessionalist Parliamentary Republic (National Pact Power-Sharing)",
    "currency": "Lebanese Pound (LBP / ل.ل)",
    "languages": "Arabic (Official), French, English",
    "timeZones": "UTC+2 (EET), UTC+3 (EEST)",
    "tagline": "Mediterranean Crossroads of the Levant & Frontline of Southern Border Deterrence",
    "overview": {
        "beginner": "Lebanon is a small, culturally vibrant Mediterranean nation bordering Syria and Israel. Governing through a complex system that shares power between Christians, Sunni Muslims, and Shia Muslims, Lebanon has experienced severe economic collapse and recurring military conflict between Israel and the armed group Hezbollah.",
        "advanced": "The Lebanese Republic commands the vital coastal strip between the Syrian interior and the Eastern Mediterranean, bounded by Mount Lebanon and the fertile Bekaa Valley. Lebanon’s unique confessional political system reserves the Presidency for a Maronite Christian, Prime Minister for a Sunni Muslim, and Speaker of Parliament for a Shia Muslim. Southern Lebanon, particularly south of the Litani River, has served as the primary operational theater between the Israel Defense Forces (IDF) and Hezbollah, monitored by the United Nations Interim Force in Lebanon (UNIFIL), which includes a substantial Indian peacekeeping battalion."
    },
    "politicalSystem": {
        "isAvailable": True,
        "type": "Confessionalist Parliamentary Representative Democratic Republic",
        "constitution": "1926 Constitution of Lebanon (as amended by the 1989 Taif Agreement)",
        "branches": [
            {"name": "President", "role": "Head of State (Reserved for Maronite Christian; vacant amidst protracted parliamentary deadlock)."},
            {"name": "Council of Ministers", "role": "Executive Cabinet headed by the Prime Minister (Reserved for Sunni Muslim)."},
            {"name": "Parliament", "role": "128-seat Chamber of Deputies equally divided 64-64 between Christian and Muslim confessions, headed by Speaker (Shia Muslim)."}
        ],
        "currentLeadership": {
            "headOfState": "Vacant / Presidential powers exercised by Council of Ministers",
            "headOfGovernment": "Najib Mikati (Caretaker Prime Minister)"
        },
        "rulingParty": "Confessional Power-Sharing Cabinet",
        "oppositionParties": ["Free Patriotic Movement", "Lebanese Forces", "Amal Movement", "Hezbollah", "Kataeb", "Progressive Socialist Party"],
        "parliamentDetails": "Chamber of Deputies sitting in Place de l'Étoile, Beirut.",
        "recentElections": "Parliamentary elections held in May 2022; presidential election stalled by quorum disagreements."
    },
    "geographyBorders": {
        "landArea": "10,452 km²",
        "location": "Levant region along the Eastern Mediterranean coast, bounded by Syria to the north and east, and Israel to the south.",
        "continent": "Asia",
        "coastline": "225 km along the Mediterranean Sea",
        "majorOceans": ["Atlantic Basin Approaches via Mediterranean Sea"],
        "topography": "Narrow coastal plain, high Mount Lebanon mountain chain running parallel to the sea, interior fertile Bekaa Valley, and Anti-Lebanon Mountains along Syrian border.",
        "rivers": ["Litani River (Longest wholly Lebanese river)", "Orontes (Asi) River", "Hasbani River"],
        "mountains": ["Qurnat as Sawda (3,088 m, highest peak in Mount Lebanon range and Levant)", "Mount Hermon"],
        "seas": ["Mediterranean Sea (Levantine Sea)"],
        "climates": ["Mediterranean climate with warm, dry summers and cool, rainy winters; heavy winter snowfall in mountains"],
        "landBorders": ["Syria (375 km)", "Israel (79 km Blue Line demarcated by UN)"],
        "maritimeBorders": ["US-brokered 2022 maritime border agreement with Israel delineating offshore gas blocks (Qana and Karish)"]
    },
    "economy": {
        "gdpNominal": "$21.5 Billion USD (Contracted by over 50% since 2019 financial crisis)",
        "gdpPPP": "$68.0 Billion USD",
        "gdpPerCapita": "$3,800 USD",
        "gdpGrowth": "-0.8% (Severe banking insolvency, state debt default, and currency devaluation)",
        "currency": "Lebanese Pound (LBP, devalued by over 98% against USD)",
        "majorIndustries": ["Banking & Financial Services (Historic/Distressed)", "Agri-Food & Wine Production (Bekaa)", "Tourism & Hospitality", "Jewelry & Precious Metals", "Pharmaceuticals"],
        "majorExports": ["Jewelry & Precious Metals", "Chemicals & Plastics", "Agri-Food Products & Wine", "Scrap Metal", "Machinery"],
        "majorImports": ["Refined Petroleum", "Pharmaceuticals", "Motor Vehicles", "Cereal Grains & Wheat", "Electronics"],
        "energyPosition": "Chronic national grid electricity deficits; widespread reliance on private diesel generator cartels; offshore gas exploration underway in Block 9.",
        "naturalResources": ["Limestone", "Iron Ore", "Salt", "Clean Water Resources (Arable springs)", "Potential offshore natural gas reserves"],
        "tradeOrgs": ["Arab League", "OIC"],
        "economicStrategicImportance": "Key commercial conduit and banking center of the Levant historically, heavily reliant on remittances from the worldwide Lebanese diaspora.",
        "indiaEconomicConnection": "Modest trade in pharmaceuticals, motor vehicles, textiles, and spices; Indian peacekeepers deliver veterinary and medical community services in southern Lebanon.",
        "majorTradingPartners": ["United Arab Emirates", "Turkey", "China", "Greece", "Italy", "United States", "India"]
    },
    "military": {
        "isAvailable": True,
        "expenditure": "$980 Million USD (~4.5% of GDP)",
        "manpowerActive": "75,000 active personnel in Lebanese Armed Forces (LAF)",
        "manpowerReserve": "Internal Security Forces (ISF) plus demobilized reserves",
        "doctrine": "National unity preservation, internal counter-terrorism, border defense, and progressive redeployment south of the Litani River under UN Resolution 1701.",
        "majorEquipment": ["M113 Armored Personnel Carriers", "M60A3 & T-55 Main Battle Tanks", "A-29 Super Tucano Light Attack Aircraft", "M198 155mm Howitzers", "TOW Anti-Tank Guided Missiles"],
        "nuclearStatus": "Non-Nuclear State (Party to Non-Proliferation Treaty)",
        "alliances": ["LAF receives defensive military aid from the US and France; UNIFIL peacekeepers monitor southern border"]
    },
    "relations": {
        "isAvailable": True,
        "main": [
            {"id": "LBN_USA", "country": "United States", "countryCode": "USA", "status": "LAF Security Benefactor & Diplomatic Mediator", "summary": "Provides vital payroll support and equipment to the Lebanese Armed Forces; mediated the 2022 maritime border deal and 2024 ceasefire negotiations."},
            {"id": "LBN_ISR", "country": "Israel", "countryCode": "ISR", "status": "State of War & Blue Line Frontline", "summary": "History of armed conflicts (1978, 1982, 2006, 2024); ceasefire monitoring along the Blue Line overseen by UNIFIL."},
            {"id": "LBN_FRA", "country": "France", "countryCode": "FRA", "status": "Historic Cultural & Diplomatic Guarantor", "summary": "Former mandate authority actively mediating Lebanese political deadlock, humanitarian relief, and institutional reform."},
            {"id": "LBN_IND", "country": "India", "countryCode": "IND", "status": "Longstanding Peacekeeping & Diplomatic Partner", "summary": "India has deployed a 900-strong infantry battalion (INDBATT) to UNIFIL in southern Lebanon continuously since 1998."}
        ],
        "searchable": [
            {"id": "LBN_SAU", "country": "Saudi Arabia", "countryCode": "SAU", "summary": "Historical financial donor advocating for Lebanese state sovereignty and curbing Hezbollah's political influence."},
            {"id": "LBN_IRN", "country": "Iran", "countryCode": "IRN", "summary": "Primary ideological, financial, and military patron of Hezbollah, deeply shaping southern Lebanese security dynamics."}
        ]
    },
    "currentTensions": {
        "isAvailable": True,
        "activeFlashpoints": [
            {"name": "Litani River & Blue Line Frontier", "type": "UN Resolution 1701 Implementation Zone", "desc": "Demilitarization buffer zone monitored by UNIFIL and LAF following heavy ground battles and airstrikes."},
            {"name": "Southern Suburbs of Beirut (Dahiyeh)", "type": "Reconstruction & Security Standoff", "desc": "Rebuilding residential and commercial areas heavily impacted by targeted airstrikes against command bunkers."},
            {"name": "Shebaa Farms & Ghajar", "type": "Contested Border Pockets", "desc": "Disputed border trijunction between Lebanon, Syria, and the Israeli-occupied Golan Heights."}
        ],
        "summary": "Implementation of ceasefire mechanisms, LAF redeployment south of the Litani, and ending political deadlock to elect a head of state."
    },
    "strategicLocations": {
        "isAvailable": True,
        "list": [
            {"name": "Litani River Demilitarization Line", "type": "Strategic Buffer Waterway", "importance": "Geographic line established under UN Security Council Resolution 1701 barring armed non-state forces from the southern frontier."},
            {"name": "Port of Beirut", "type": "Primary Commercial Maritime Lifeline", "importance": "Handles over 70% of Lebanese maritime imports; ongoing multi-phase reconstruction following the catastrophic 2020 ammonium nitrate explosion."},
            {"name": "UNIFIL Sector East (Marjayoun / INDBATT)", "type": "United Nations Peacekeeping Command", "importance": "Operational headquarters of Indian peacekeepers monitoring the volatile Blue Line opposite the Golan Heights."}
        ]
    },
    "indiaImpact": {
        "isAvailable": True,
        "strategicTies": "India maintains an exemplary diplomatic and peacekeeping profile in Lebanon, anchored by the continuous deployment of the Indian Battalion (INDBATT) in UNIFIL since November 1998.",
        "trade": "Bilateral trade stands around $400 Million USD, with India exporting pharmaceutical generic medicines, machinery, and textiles.",
        "energy": "India has supported local clean energy through solar electrification projects in southern Lebanese municipalities.",
        "diaspora": "Vibrant Indian expatriate community of around 10,000 workers, professionals, and UN peacekeepers; successful evacuation operations conducted during the 2006 war (Operation Sukoon).",
        "summary": "Indian peacekeepers in UNIFIL Sector East have earned widespread local reverence for executing impartial peacekeeping, providing free medical and dental camps, and delivering vital veterinary care to local farming communities along the Blue Line."
    }
}

# Write file
output_code = "export const FRONTLINE_COUNTRY_DOSSIERS = " + json.dumps(countries, indent=2) + ";\n"
with open(base_path, "w", encoding="utf-8") as f:
    f.write(output_code)

print(f"Batch 2 complete! Total countries now: {len(countries)}: {list(countries.keys())}")
