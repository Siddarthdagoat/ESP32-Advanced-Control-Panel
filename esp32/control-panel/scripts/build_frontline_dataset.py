# Comprehensive dataset generator for the 18 frontline countries in GEOINTEL
import json
import os

countries = {}

# 1. UKRAINE (UKR)
countries["UKR"] = {
    "id": "UKR",
    "name": "Ukraine",
    "officialName": "Ukraine (Ukrayina)",
    "commonName": "Ukraine",
    "capital": "Kyiv",
    "capitalCoords": {"name": "Kyiv", "lat": 50.4501, "lng": 30.5234},
    "capitalAdmin": {
        "role": "Sovereign Administrative Seat of Ukraine",
        "political": "Seat of the Verkhovna Rada, Office of the President of Ukraine (Bankova Street), and the Supreme Court.",
        "geographic": "50.45°N, 30.52°E situated along both banks of the Dnipro River in north-central Ukraine.",
        "strategic": "Apex political and military command center of Ukrainian Armed Forces and General Staff headquarters."
    },
    "region": "Europe",
    "subregion": "Eastern Europe",
    "flag": "🇺🇦",
    "lat": 48.3794,
    "lng": 31.1656,
    "area": "603,628 km²",
    "population": "38.0 Million",
    "politicalSystemType": "Unitary Semi-Presidential Constitutional Republic",
    "currency": "Ukrainian Hryvnia (UAH / ₴)",
    "languages": "Ukrainian (Official), Russian (widely understood)",
    "timeZones": "UTC+2 (EET), UTC+3 (EEST)",
    "tagline": "Frontline Anchor of European Security & Global Grain Basket",
    "overview": {
        "beginner": "Ukraine is a major Eastern European nation situated on the northern shore of the Black Sea. Since 2014 and the full-scale Russian invasion in 2022, Ukraine has become the focal point of the largest conventional armed conflict in Europe since World War II, fundamentally transforming European security, energy corridors, and global food markets.",
        "advanced": "Ukraine commands the strategic northern littoral of the Black Sea and the vast fertile agricultural expanse of the East European Plain. Following the 1991 collapse of the Soviet Union, Ukraine surrendered the world’s third-largest nuclear arsenal under the 1994 Budapest Memorandum in exchange for sovereign security assurances. Russia’s 2014 annexation of Crimea and 2022 invasion precipitated a high-intensity war of attrition along a 1,200 km frontline, accelerating Ukraine’s formal accession trajectory toward the European Union and operational integration with NATO."
    },
    "politicalSystem": {
        "isAvailable": True,
        "type": "Semi-Presidential Republic under Martial Law Governance",
        "constitution": "Constitution of Ukraine (1996, amended 2004/2014)",
        "branches": [
            {"name": "Executive", "role": "President as Commander-in-Chief and Prime Minister leading the Cabinet of Ministers."},
            {"name": "Legislature", "role": "Verkhovna Rada (450-seat unicameral parliament) passing wartime legislation and budgets."},
            {"name": "Judiciary", "role": "Constitutional Court and Supreme Court of Ukraine administering constitutional justice."}
        ],
        "currentLeadership": {
            "headOfState": "Volodymyr Zelenskyy (President)",
            "headOfGovernment": "Denys Shmyhal (Prime Minister)"
        },
        "rulingParty": "Servant of the People (Sluha Narodu)",
        "oppositionParties": ["European Solidarity", "Batkivshchyna", "Holos"],
        "parliamentDetails": "Verkhovna Rada unicameral parliament; regular elections suspended under constitutional provisions of national martial law.",
        "recentElections": "Presidential and Parliamentary elections conducted in 2019; subsequent election cycles deferred during wartime martial law."
    },
    "geographyBorders": {
        "landArea": "603,628 km²",
        "location": "Ukraine is located in Eastern Europe, bordering the Black Sea and Sea of Azov to the south.",
        "continent": "Europe",
        "coastline": "2,782 km (Black Sea and Sea of Azov littoral)",
        "majorOceans": ["Atlantic Basin Approaches via Mediterranean and Black Sea"],
        "topography": "Predominantly fertile agricultural plains (chernozem steppe), intersected by the Dnipro River and bounded by the Carpathian Mountains in the west.",
        "rivers": ["Dnipro River", "Dniester River", "Southern Buh", "Siverskyi Donets"],
        "mountains": ["Carpathian Mountains (Mount Hoverla: 2,061 m)", "Crimean Mountains"],
        "seas": ["Black Sea", "Sea of Azov"],
        "climates": ["Temperate Continental Climate", "Humid Subtropical along southern Crimean coast"],
        "landBorders": ["Russia (1,974 km)", "Belarus (1,084 km)", "Poland (542 km)", "Slovakia (97 km)", "Hungary (137 km)", "Romania (614 km)", "Moldova (1,222 km)"],
        "maritimeBorders": ["Black Sea Exclusive Economic Zone with Romania, Turkey, and Russia"]
    },
    "economy": {
        "gdpNominal": "$178.7 Billion USD",
        "gdpPPP": "$445.0 Billion USD",
        "gdpPerCapita": "$4,650 USD",
        "gdpGrowth": "+3.5% (Post-collapse recovery supported by international financing)",
        "currency": "Ukrainian Hryvnia (UAH)",
        "majorIndustries": ["Defense Manufacturing & UAV Assembly", "Agriculture & Grain Processing", "Ferrous Metallurgy", "IT Services & Software Engineering", "Heavy Chemicals"],
        "majorExports": ["Wheat", "Corn", "Sunflower Oil", "Iron Ore & Semi-Finished Steel", "Insulated Wire"],
        "majorImports": ["Refined Petroleum Products", "Military Equipment & Munitions", "Natural Gas", "Motor Vehicles", "Pharmaceuticals"],
        "energyPosition": "Operates 15 nuclear reactors at 4 stations (including Russian-occupied Zaporizhzhia NPP); synchronized with ENTSO-E European power grid.",
        "naturalResources": ["Iron Ore", "Coal", "Manganese", "Titanium", "Natural Gas", "Lithium Deposits", "Rich Chernozem Soil"],
        "tradeOrgs": ["World Trade Organization (WTO)", "EU Deep and Comprehensive Free Trade Area (DCFTA)", "Energy Community"],
        "economicStrategicImportance": "Vital global supplier of grain, sunflower seed oil, and neon gas for semiconductor lithography.",
        "indiaEconomicConnection": "Historically India’s largest supplier of sunflower oil and gas turbine marine engines for Indian Navy frigates (Zorya-Mashproekt).",
        "majorTradingPartners": ["Poland", "Germany", "Romania", "China", "Turkey", "United States", "India"]
    },
    "military": {
        "isAvailable": True,
        "expenditure": "$64.8 Billion USD (~36% of GDP)",
        "manpowerActive": "850,000 active service personnel",
        "manpowerReserve": "400,000 reserve and Territorial Defense Forces",
        "doctrine": "Total National Defense, mobile defense-in-depth, asymmetric long-range drone strikes, and rapid integration with NATO standard doctrines.",
        "majorEquipment": ["F-16 Fighting Falcon", "Patriot PAC-3 Air Defense", "HIMARS M142", "Leopard 2A4/2A6", "M1A1 Abrams", "Magura V5 Naval Drones", "Neptune Anti-Ship Cruise Missiles"],
        "nuclearStatus": "Non-Nuclear State (Denuclearized under 1994 Budapest Memorandum)",
        "alliances": ["NATO Aspirant State (NATO-Ukraine Council)", "EU Candidate Member", "Bilateral Security Pacts with G7 Nations"]
    },
    "relations": {
        "isAvailable": True,
        "main": [
            {"id": "UKR_USA", "country": "United States", "countryCode": "USA", "status": "Comprehensive Strategic & Military Partnership", "summary": "Primary supplier of security assistance, air defense systems, intelligence sharing, and budgetary financing."},
            {"id": "UKR_POL", "country": "Poland", "countryCode": "POL", "status": "Strategic Logistics & Transit Ally", "summary": "Main transit conduit for Western military logistics (Rzeszów hub) and host to over 1 million displaced Ukrainian citizens."},
            {"id": "UKR_RUS", "country": "Russia", "countryCode": "RUS", "status": "State of Active Armed Conflict", "summary": "Full-scale conventional war along eastern and southern fronts; territorial occupation of Crimea, Donbas, and southern littoral."},
            {"id": "UKR_IND", "country": "India", "countryCode": "IND", "status": "Diplomatic Dialogue & Commercial Ties", "summary": "High-level dialogue including bilateral Prime Ministerial and Presidential visits; humanitarian aid and agricultural trade."}
        ],
        "searchable": [
            {"id": "UKR_DEU", "country": "Germany", "countryCode": "DEU", "summary": "Second-largest supplier of air defense (IRIS-T, Patriot) and armored fighting vehicles."},
            {"id": "UKR_GBR", "country": "United Kingdom", "countryCode": "GBR", "summary": "Pioneered Western long-range strike transfers (Storm Shadow) and naval drone training."},
            {"id": "UKR_TUR", "country": "Turkey", "countryCode": "TUR", "summary": "Maritime guarantor of the Montreux Convention, supplier of Bayraktar TB2 drones, and Black Sea corvette shipbuilder."}
        ]
    },
    "currentTensions": {
        "isAvailable": True,
        "activeFlashpoints": [
            {"name": "Donbas & Pokrovsk Frontline", "type": "Active War of Attrition", "desc": "Heavy conventional artillery and mechanized assaults along the eastern industrial Donets basin."},
            {"name": "Crimean Peninsula & Black Sea", "type": "Naval Drone & Missile Campaign", "desc": "Sustained strikes on Russian naval installations forcing Black Sea Fleet dispersion to Novorossiysk."},
            {"name": "Zaporizhzhia Nuclear Power Plant", "type": "Occupied Critical Infrastructure", "desc": "Europe’s largest nuclear plant held under Russian military occupation with continuous grid safety risks."}
        ],
        "summary": "High-intensity interstate armed conflict resisting Russian territorial occupation across eastern and southern oblasts."
    },
    "strategicLocations": {
        "isAvailable": True,
        "list": [
            {"name": "Port of Odesa", "type": "Primary Deepwater Seaport", "importance": "Hub for the unilateral Ukrainian maritime humanitarian grain corridor navigating Black Sea littoral waters."},
            {"name": "Dnipro Hydroelectric Station (DniproHES)", "type": "Hydroelectric Power Nexus", "importance": "Major electrical dam regulating Dnipro River water flow and regional industrial power generation."},
            {"name": "Yavoriv International Training Center", "type": "Western Military Proving Ground", "importance": "Major staging base near the Polish border used for military coordination and international brigade training."}
        ]
    },
    "indiaImpact": {
        "isAvailable": True,
        "strategicTies": "India maintains a principled stance advocating respect for national sovereignty, territorial integrity, and peaceful dispute resolution under the UN Charter.",
        "trade": "India is a major buyer of Ukrainian agricultural exports (historically importing over 1.5M metric tons of sunflower oil annually), while exporting pharmaceuticals to Ukraine.",
        "energy": "Ukrainian gas turbine manufacturer Zorya-Mashproekt has historically powered Indian Navy frontline guided-missile frigates (Talwar and Grigorovich classes).",
        "diaspora": "Over 20,000 Indian students and professionals were safely evacuated from Ukrainian university centers under Operation Ganga in early 2022.",
        "summary": "Prime Minister Narendra Modi’s historic visit to Kyiv in August 2024 underscored New Delhi’s active diplomatic engagement with both Kyiv and Moscow to foster conditions for conflict resolution."
    }
}

# 2. YEMEN (YEM)
countries["YEM"] = {
    "id": "YEM",
    "name": "Yemen",
    "officialName": "Republic of Yemen (Al-Jumhuriyah al-Yamaniyah)",
    "commonName": "Yemen",
    "capital": "Sana'a (De jure) / Aden (Interim Executive)",
    "capitalCoords": {"name": "Aden", "lat": 12.7855, "lng": 45.0187},
    "capitalAdmin": {
        "role": "Interim Executive Seat of Government of Yemen (Aden) / Historic Capital (Sana'a)",
        "political": "Aden serves as the seat of the internationally recognized Presidential Leadership Council (PLC); Sana'a is controlled by Ansar Allah (Houthis).",
        "geographic": "Aden is situated at 12.79°N, 45.02°E on an extinct volcanic crater commanding the Gulf of Aden.",
        "strategic": "Controls naval anchorages and surveillance positions overseeing the southern mouth of the Bab el-Mandeb strait."
    },
    "region": "Middle East",
    "subregion": "Arabian Peninsula / Red Sea Littoral",
    "flag": "🇾🇪",
    "lat": 15.5527,
    "lng": 48.5164,
    "area": "527,968 km²",
    "population": "33.7 Million",
    "politicalSystemType": "Contested Transition State / Presidential Leadership Council vs. Supreme Political Council",
    "currency": "Yemeni Rial (YER)",
    "languages": "Arabic (Official)",
    "timeZones": "UTC+3 (AST)",
    "tagline": "Gatekeeper of the Bab el-Mandeb & Geopolitical Fulcrum of Red Sea Commerce",
    "overview": {
        "beginner": "Yemen is situated at the southwestern tip of the Arabian Peninsula, commanding the narrow Bab el-Mandeb strait connecting the Red Sea to the Indian Ocean. Since 2014, Yemen has experienced severe civil conflict between the internationally recognized government and the Houthi movement (Ansar Allah), emerging in recent years as a major player disrupting global maritime trade routes.",
        "advanced": "Yemen occupies one of the world’s most consequential geographic chokepoints: the 29-km-wide Bab el-Mandeb strait through which 12% of global commercial shipping and millions of barrels of crude oil transit daily. The country remains divided between the Houthi-controlled northern highlands (including the capital Sana'a and Red Sea port of Hodeidah) and the internationally recognized Presidential Leadership Council (PLC) based in Aden. Supported by Iranian missile, drone, and naval technology, Ansar Allah has leveraged Yemen’s geography to establish an asymmetric anti-access/area-denial (A2/AD) envelope over the southern Red Sea and Gulf of Aden."
    },
    "politicalSystem": {
        "isAvailable": True,
        "type": "Fragmented Dual Authority under Ongoing Civil Conflict",
        "constitution": "Constitution of the Republic of Yemen (1991, amended 2001)",
        "branches": [
            {"name": "Presidential Leadership Council (Aden)", "role": "8-member executive body chaired by Rashad al-Alimi recognized by the UN and Arab League."},
            {"name": "Supreme Political Council (Sana'a)", "role": "De facto administrative executive of the Ansar Allah (Houthi) movement controlling northern Yemen."},
            {"name": "Southern Transitional Council (STC)", "role": "Southern secessionist political and military force participating in the Aden coalition."}
        ],
        "currentLeadership": {
            "headOfState": "Rashad al-Alimi (Chairman, Presidential Leadership Council) / Mahdi al-Mashat (Chairman, Houthi SPC)",
            "headOfGovernment": "Ahmad Awad bin Mubarak (Prime Minister, PLC)"
        },
        "rulingParty": "Contested (General People's Congress factions, Ansar Allah, STC, Islah)",
        "oppositionParties": ["Yemeni Socialist Party", "Nasserist Unionist People's Organization"],
        "parliamentDetails": "House of Representatives divided between rival sessions in Aden and Sana'a.",
        "recentElections": "National elections suspended since the outbreak of hostilities in 2014."
    },
    "geographyBorders": {
        "landArea": "527,968 km²",
        "location": "Southwestern corner of the Arabian Peninsula bordering the Red Sea, Bab el-Mandeb, and Gulf of Aden.",
        "continent": "Asia",
        "coastline": "1,906 km (Red Sea, Gulf of Aden, and Arabian Sea)",
        "majorOceans": ["Indian Ocean Basin via Gulf of Aden and Arabian Sea"],
        "topography": "Arid coastal plains (Tihamah), rugged interior highlands (Jabal an-Nabi Shu'ayb: 3,666 m), and the Rub' al-Khali (Empty Quarter) desert in the north.",
        "rivers": ["Ephemeral seasonal wadis (Wadi Hadramawt, Wadi Bana)"],
        "mountains": ["Sarawat Mountains (Jabal an-Nabi Shu'ayb, highest peak in Arabian Peninsula)"],
        "seas": ["Red Sea", "Gulf of Aden", "Arabian Sea"],
        "climates": ["Arid desert climate", "Semi-arid in southern mountains with summer monsoon rains"],
        "landBorders": ["Saudi Arabia (1,458 km)", "Oman (288 km)"],
        "maritimeBorders": ["Maritime boundaries with Djibouti, Eritrea, and Somalia across Bab el-Mandeb and Gulf of Aden"]
    },
    "economy": {
        "gdpNominal": "$21.6 Billion USD",
        "gdpPPP": "$65.0 Billion USD",
        "gdpPerCapita": "$650 USD",
        "gdpGrowth": "-0.5% (Severely constrained by economic fragmentation and oil export blockades)",
        "currency": "Yemeni Rial (YER) with divergent exchange rates between Aden and Sana'a",
        "majorIndustries": ["Crude Oil Production & Refining (Disrupted)", "Small-Scale Food Processing", "Handicrafts", "Commercial Fishing"],
        "majorExports": ["Crude Petroleum (disrupted)", "Dried and Fresh Fish", "Coffee", "Scrap Metal"],
        "majorImports": ["Wheat & Cereal Grains", "Refined Petroleum Products", "Pharmaceuticals", "Machinery"],
        "energyPosition": "Modest crude reserves (Marib and Masila basins); exports halted due to Houthi missile strikes on export terminals in Hadramawt and Shabwa.",
        "naturalResources": ["Petroleum", "Natural Gas", "Fish & Marine Resources", "Rock Salt", "Marble", "Small coal and gold deposits"],
        "tradeOrgs": ["World Trade Organization (WTO)", "Arab League", "Organisation of Islamic Cooperation (OIC)"],
        "economicStrategicImportance": "Commands the Bab el-Mandeb maritime chokepoint through which global energy and merchandise flows transit.",
        "indiaEconomicConnection": "Historically imported Indian non-basmati rice, pharmaceuticals, and engineering goods; destination for Indian energy workers before 2015.",
        "majorTradingPartners": ["China", "Saudi Arabia", "United Arab Emirates", "India", "Oman", "Turkey"]
    },
    "military": {
        "isAvailable": True,
        "expenditure": "$1.4 Billion USD (Estimated fragmented armed expenditures)",
        "manpowerActive": "Estimated 250,000+ total combatants across Houthi forces, National Army, and STC brigades",
        "manpowerReserve": "Widespread tribal mobilization and regional militia structures",
        "doctrine": "Asymmetric coastal defense, ballistic missile/UAV saturation strikes against naval targets, and rugged mountain guerrilla warfare.",
        "majorEquipment": ["Anti-Ship Ballistic Missiles (Asef, Tankeel, Fadi)", "Quds Land-Attack Cruise Missiles", "Samad-3 & Shahed-136 Attack Drones", "Explosive Unmanned Surface Vessels (Tufan USVs)", "Toophan Anti-Tank Guided Missiles"],
        "nuclearStatus": "Non-Nuclear State (Party to Non-Proliferation Treaty)",
        "alliances": ["Ansar Allah is aligned with Iran's Axis of Resistance; PLC backed by Saudi-led Coalition and UAE"]
    },
    "relations": {
        "isAvailable": True,
        "main": [
            {"id": "YEM_SAU", "country": "Saudi Arabia", "countryCode": "SAU", "status": "Direct Border & Diplomatic Negotiations", "summary": "Riyadh leads bilateral peace talks with Houthis seeking a permanent border truce and exit from armed intervention."},
            {"id": "YEM_IRN", "country": "Iran", "countryCode": "IRN", "status": "Strategic Arms & Ideological Patron", "summary": "Provides advanced ballistic missile guidance, drone components, radar technology, and political backing to Houthis."},
            {"id": "YEM_USA", "country": "United States", "countryCode": "USA", "status": "Target of Coalition Interdiction Strikes", "summary": "US Central Command leads Operation Prosperity Guardian and strikes Houthi launch sites following maritime shipping attacks."},
            {"id": "YEM_IND", "country": "India", "countryCode": "IND", "status": "Historic Maritime Diplomatic Ties", "summary": "Indian Navy maintains high-readiness presence in Gulf of Aden protecting commercial shipping and conducting rescue missions."}
        ],
        "searchable": [
            {"id": "YEM_ARE", "country": "United Arab Emirates", "countryCode": "ARE", "summary": "Maintains influence in southern coastal areas, Socotra Island, and backs the Southern Transitional Council (STC)."},
            {"id": "YEM_OMN", "country": "Oman", "countryCode": "OMN", "summary": "Acts as the primary neutral diplomatic mediator hosting UN and bilateral Saudi-Houthi negotiations in Muscat."},
            {"id": "YEM_DJI", "country": "Djibouti", "countryCode": "DJI", "summary": "Neighbor across the Bab el-Mandeb hosting foreign military naval bases observing Yemeni coastal operations."}
        ]
    },
    "currentTensions": {
        "isAvailable": True,
        "activeFlashpoints": [
            {"name": "Bab el-Mandeb & Southern Red Sea", "type": "Maritime Interdiction Corridor", "desc": "Continuous missile and naval drone strikes targeting international commercial container and tanker traffic."},
            {"name": "Marib Governorate Gas Fields", "type": "Contested Resource Frontline", "desc": "Critical frontline between Houthi forces and government troops controlling Yemen’s main oil refinery and power plant."},
            {"name": "Red Sea Ports of Hodeidah & Salif", "type": "Airstrike & Logistics Focal Point", "desc": "Vital humanitarian import terminals frequently targeted by international coalition counter-missile strikes."}
        ],
        "summary": "Protracted internal conflict intertwined with regional anti-shipping campaign causing systemic global maritime disruption."
    },
    "strategicLocations": {
        "isAvailable": True,
        "list": [
            {"name": "Strait of Bab el-Mandeb", "type": "Global Maritime Chokepoint", "importance": "Critical 29-km wide waterway through which all Suez Canal traffic must pass."},
            {"name": "Port of Hodeidah", "type": "Primary Red Sea Deepwater Port", "importance": "Lifeline entry point for 70% of food and humanitarian supplies entering northern Yemen."},
            {"name": "Socotra Archipelago", "type": "Strategic Oceanic Island Outpost", "importance": "Controls approaches to the Gulf of Aden and Arabian Sea; vital for maritime domain awareness."}
        ]
    },
    "indiaImpact": {
        "isAvailable": True,
        "strategicTies": "India deployed over 10 guided-missile destroyers under Operation Sankalp to safeguard sea lines of communication and rescue multi-national crews.",
        "trade": "Over 50% of India’s trade with Europe and the Americas transits the Gulf of Aden; shipping diversions around Africa inflate Indian export freight costs by 30–40%.",
        "energy": "Crude oil and LNG shipments from the Red Sea and Mediterranean to Indian ports face extended transit times and high war-risk insurance premiums.",
        "diaspora": "India executed the celebrated Operation Raahat in 2015, successfully evacuating over 4,600 Indian citizens and 960 foreign nationals from Yemen.",
        "summary": "Yemen’s maritime disruption directly impacts Indian commercial trade security, making the Indian Navy the primary net security provider in the northern Arabian Sea and Gulf of Aden."
    }
}

# 3. PHILIPPINES (PHL)
countries["PHL"] = {
    "id": "PHL",
    "name": "Philippines",
    "officialName": "Republic of the Philippines (Republika ng Pilipinas)",
    "commonName": "Philippines",
    "capital": "Manila",
    "capitalCoords": {"name": "Manila", "lat": 14.5995, "lng": 120.9842},
    "capitalAdmin": {
        "role": "National Administrative & Political Capital of the Philippines",
        "political": "Seat of Malacañang Palace (Office of the President), Supreme Court of the Philippines, and Congress (Senate and House of Representatives).",
        "geographic": "14.60°N, 120.98°E situated on the eastern shore of Manila Bay on the island of Luzon.",
        "strategic": "Headquarters of the Armed Forces of the Philippines (Camp Aguinaldo) and Western Command coordination center."
    },
    "region": "Indo-Pacific",
    "subregion": "Southeast Asia / Maritime ASEAN",
    "flag": "🇵🇭",
    "lat": 12.8797,
    "lng": 121.7740,
    "area": "300,000 km² (Archipelago of 7,641 islands)",
    "population": "115.5 Million",
    "politicalSystemType": "Unitary Presidential Constitutional Republic",
    "currency": "Philippine Peso (PHP / ₱)",
    "languages": "Filipino (Tagalog) and English (Both Official)",
    "timeZones": "UTC+8 (PHT)",
    "tagline": "Archipelagic Keystone of the First Island Chain & South China Sea Bastion",
    "overview": {
        "beginner": "The Philippines is an archipelagic nation of over 7,600 islands in Southeast Asia. Situated directly between the South China Sea and the open Pacific Ocean, the Philippines is a treaty ally of the United States and has become a central frontline in the territorial dispute with China over the West Philippine Sea.",
        "advanced": "The Republic of the Philippines anchors the central geography of the First Island Chain, commanding the Luzon Strait (connecting the South China Sea to the Philippine Sea) and enclosing the contested waters of the West Philippine Sea. Backed by the 1951 Mutual Defense Treaty with the US, Manila under President Ferdinand Marcos Jr. has executed a decisive strategic pivot, expanding US military access under the Enhanced Defense Cooperation Agreement (EDCA), acquiring Indian BrahMos supersonic coastal anti-ship missile batteries, and directly challenging Chinese Coast Guard blockades at Second Thomas Shoal and Sabina Shoal."
    },
    "politicalSystem": {
        "isAvailable": True,
        "type": "Presidential Representative Democratic Republic",
        "constitution": "1987 Constitution of the Republic of the Philippines",
        "branches": [
            {"name": "Executive", "role": "President serving a single 6-year term as Head of State, Head of Government, and Commander-in-Chief."},
            {"name": "Legislature", "role": "Bicameral Congress consisting of the 24-member Senate and 316-member House of Representatives."},
            {"name": "Judiciary", "role": "Supreme Court of the Philippines exercising apex judicial review and constitutional interpretation."}
        ],
        "currentLeadership": {
            "headOfState": "Ferdinand 'Bongbong' Marcos Jr. (President)",
            "headOfGovernment": "Ferdinand Marcos Jr. (President and Chief Executive)"
        },
        "rulingParty": "Partido Federal ng Pilipinas (PFP) coalition",
        "oppositionParties": ["Liberal Party", "Lakas-CMD", "PDP-Laban", "Makabayan Bloc"],
        "parliamentDetails": "Bicameral Congress of the Philippines sitting in Metro Manila (Senate in Pasay, House in Quezon City).",
        "recentElections": "General Election held in May 2022; midterm legislative elections scheduled for May 2025."
    },
    "geographyBorders": {
        "landArea": "300,000 km²",
        "location": "Southeast Asia, bounded by the South China Sea to the west, Philippine Sea to the east, and Celebes Sea to the south.",
        "continent": "Asia",
        "coastline": "36,289 km (5th longest coastline in the world)",
        "majorOceans": ["Pacific Ocean Basin", "South China Sea Littoral Basin"],
        "topography": "Mountainous terrain of volcanic origin with coastal lowlands across three island groups: Luzon, Visayas, and Mindanao.",
        "rivers": ["Cagayan River", "Pampanga River", "Agusan River", "Pasig River"],
        "mountains": ["Mount Apo (Mindanao: 2,954 m, highest peak)", "Mount Pulag", "Mayon Volcano", "Taal Volcano"],
        "seas": ["South China Sea (West Philippine Sea)", "Philippine Sea", "Sulu Sea", "Celebes Sea"],
        "climates": ["Tropical Marine Climate with southwest monsoon (Habagat) and northeast monsoon (Amihan)"],
        "landBorders": ["No terrestrial land borders (Archipelagic State)"],
        "maritimeBorders": ["Maritime EEZ boundaries with Taiwan (Bashi Channel), Vietnam, Malaysia, Indonesia, and Palau"]
    },
    "economy": {
        "gdpNominal": "$437.1 Billion USD",
        "gdpPPP": "$1.28 Trillion USD",
        "gdpPerCapita": "$3,760 USD",
        "gdpGrowth": "+5.9% (Among the fastest-growing economies in Southeast Asia)",
        "currency": "Philippine Peso (PHP)",
        "majorIndustries": ["Business Process Outsourcing (BPO)", "Electronics & Semiconductor Assembly", "Food & Beverage Processing", "Shipbuilding & Maritime Repairs", "Mining & Nickel Extraction"],
        "majorExports": ["Integrated Circuits & Electronic Components", "Office Machine Parts", "Nickel Ores & Concentrates", "Coconut Oil", "Bananas & Tropical Fruits"],
        "majorImports": ["Refined Petroleum", "Electronic Integrated Circuits", "Coal & Mineral Fuels", "Motor Vehicles", "Wheat"],
        "energyPosition": "Net energy importer; developing offshore Malampaya natural gas field and transitioning toward renewable solar/wind and nuclear energy.",
        "naturalResources": ["Nickel (World's 2nd largest producer)", "Cobalt", "Copper", "Gold", "Chromite", "Timber", "Marine Fishery Stocks"],
        "tradeOrgs": ["World Trade Organization (WTO)", "ASEAN Free Trade Area (AFTA)", "Regional Comprehensive Economic Partnership (RCEP)", "APEC"],
        "economicStrategicImportance": "Key node in global electronics assembly and leading global supplier of unrefined nickel for electric vehicle batteries.",
        "indiaEconomicConnection": "Major importer of Indian generic pharmaceuticals; expanding bilateral trade in defense hardware (BrahMos $375M deal) and fintech.",
        "majorTradingPartners": ["United States", "China", "Japan", "South Korea", "Singapore", "Hong Kong", "India"]
    },
    "military": {
        "isAvailable": True,
        "expenditure": "$5.8 Billion USD (~1.4% of GDP, rising under Horizon 3 modernization)",
        "manpowerActive": "150,000 active military personnel",
        "manpowerReserve": "130,000 reserve personnel plus 30,000 Philippine Coast Guard personnel",
        "doctrine": "Comprehensive Archipelagic Defense Concept (CADC) focusing on external territorial defense, A2/AD along maritime frontiers, and EEZ protection.",
        "majorEquipment": ["BrahMos Supersonic Coastal Anti-Ship Missile Batteries", "FA-50PH Fighting Eagle Light Combat Jets", "Jose Rizal-Class Guided-Missile Frigates", "Tarlac-Class Amphibious Landing Docks", "SPYDER-MR Surface-to-Air Missile Batteries"],
        "nuclearStatus": "Non-Nuclear State (Constitutional ban on nuclear weapons; signatory to SEANWFZ Treaty)",
        "alliances": ["1951 US-Philippines Mutual Defense Treaty (MDT)", "Visiting Forces Agreement (VFA)", "Enhanced Defense Cooperation Agreement (EDCA)", "Reciprocal Access Agreement with Japan (RAA)"]
    },
    "relations": {
        "isAvailable": True,
        "main": [
            {"id": "PHL_USA", "country": "United States", "countryCode": "USA", "status": "Ironclad Treaty Ally & EDCA Host", "summary": "Core security guarantor under 1951 MDT; granted access to 9 strategic Philippine military bases overlooking Taiwan Strait and South China Sea."},
            {"id": "PHL_CHN", "country": "China", "countryCode": "CHN", "status": "Intense Maritime Territorial Friction", "summary": "Continuous standoffs over Scarborough Shoal, Second Thomas Shoal, and Sabina Shoal despite high bilateral trade volumes."},
            {"id": "PHL_IND", "country": "India", "countryCode": "IND", "status": "Strategic Defense & Maritime Security Partner", "summary": "First foreign export customer for India’s BrahMos supersonic missile system ($375M); joint maritime drills and naval port calls."},
            {"id": "PHL_JPN", "country": "Japan", "countryCode": "JPN", "status": "Quasi-Allied Maritime Security Partner", "summary": "Signed Reciprocal Access Agreement (RAA); Japan supplies maritime patrol vessels, coastal surveillance radars, and defense loans."}
        ],
        "searchable": [
            {"id": "PHL_AUS", "country": "Australia", "countryCode": "AUS", "summary": "Maintains Status of Visiting Forces Agreement (SOVFA) and conducts joint Alon amphibious combat drills."},
            {"id": "PHL_VNM", "country": "Vietnam", "countryCode": "VNM", "summary": "Cooperative maritime claimants in South China Sea conducting joint coast guard search-and-rescue exercises."},
            {"id": "PHL_TWN", "country": "Taiwan", "countryCode": "TWN", "summary": "Close geographic proximity across the Bashi Channel; host to over 150,000 Filipino expatriate workers."}
        ]
    },
    "currentTensions": {
        "isAvailable": True,
        "activeFlashpoints": [
            {"name": "Second Thomas Shoal (Ayungin)", "type": "Maritime Blockade & Ramming Flashpoint", "desc": "Chinese Coast Guard water cannons and hull rammings against Philippine resupply missions to BRP Sierra Madre."},
            {"name": "Luzon Strait & Batanes Islands", "type": "Strategic Chokepoint Militarization", "desc": "Philippine military expanding radar and naval outpost presence just 140 km south of Taiwan's southern coast."},
            {"name": "Sabina Shoal (Escoda)", "type": "Coast Guard Standoff", "desc": "Protracted anchoring standoff between Philippine Coast Guard flagship BRP Teresa Magbanua and Chinese naval flotillas."}
        ],
        "summary": "Frontline geopolitical friction resisting Chinese sovereignty claims over the West Philippine Sea within Manila’s UNCLOS-mandated EEZ."
    },
    "strategicLocations": {
        "isAvailable": True,
        "list": [
            {"name": "Luzon Strait / Bashi Channel", "type": "First Island Chain Chokepoint", "importance": "Vital submarine corridor and air-sea transit zone between the South China Sea and the open Western Pacific."},
            {"name": "Subic Bay & Batanes Outpost", "type": "Naval Deepwater Staging Hub", "importance": "Former US mega-base now hosting Philippine Navy forward operating bases overlooking the northern approaches."},
            {"name": "Palawan Island / Oyster Bay", "type": "Forward Maritime Operating Base", "importance": "Headquarters of Western Command (WESCOM) staging all surveillance and patrol operations into the Spratly Islands."}
        ]
    },
    "indiaImpact": {
        "isAvailable": True,
        "strategicTies": "The Philippines is a cornerstone of India’s 'Act East' policy and Indo-Pacific vision based on UNCLOS adherence and freedom of navigation.",
        "trade": "Bilateral trade exceeded $3 Billion USD, bolstered by India's landmark $375 million export of three batteries of the shore-based anti-ship BrahMos missile system to the Philippine Marine Corps.",
        "energy": "ONGC Videsh has historically explored oil and gas blocks in the West Philippine Sea, affirming sovereign international commercial rights.",
        "diaspora": "Over 150,000 Indian nationals reside in the Philippines, including thousands of medical students and professionals in the IT-BPO sector.",
        "summary": "The BrahMos supersonic missile deployment establishes a potent anti-access deterrent along the Philippine western seaboard, showcasing India as an emerging tier-one defense exporter to ASEAN partners."
    }
}

# 4. PAKISTAN (PAK)
countries["PAK"] = {
    "id": "PAK",
    "name": "Pakistan",
    "officialName": "Islamic Republic of Pakistan (Jamhūriyat-e-Islāmī-ye Pākistān)",
    "commonName": "Pakistan",
    "capital": "Islamabad",
    "capitalCoords": {"name": "Islamabad", "lat": 33.6844, "lng": 73.0479},
    "capitalAdmin": {
        "role": "Federal Capital of the Islamic Republic of Pakistan",
        "political": "Seat of the President (Aiwan-e-Sadr), Prime Minister's Secretariat, Parliament House, and Supreme Court.",
        "geographic": "33.68°N, 73.05°E located on the Pothohar Plateau adjacent to Rawalpindi in northern Pakistan.",
        "strategic": "Directly adjacent to Rawalpindi, headquarters of General Headquarters (GHQ) of the Pakistan Army and Strategic Plans Division (SPD)."
    },
    "region": "South Asia",
    "subregion": "South Asia / Arabian Sea Littoral",
    "flag": "🇵🇰",
    "lat": 30.3753,
    "lng": 69.3451,
    "area": "881,913 km²",
    "population": "241.5 Million (World's 5th most populous country)",
    "politicalSystemType": "Federal Parliamentary Republic under Substantial Military Influence (Establishment)",
    "currency": "Pakistani Rupee (PKR / ₨)",
    "languages": "Urdu (National), English (Official), Punjabi, Pashto, Sindhi, Balochi",
    "timeZones": "UTC+5 (PKT)",
    "tagline": "Nuclear-Armed South Asian Power & China-Pakistan Economic Corridor (CPEC) Anchor",
    "overview": {
        "beginner": "Pakistan is a major nuclear-armed South Asian nation located at the crossroads of South Asia, Central Asia, and the Middle East. It shares a heavily fortified frontier with India and is China's primary strategic partner in South Asia through the China-Pakistan Economic Corridor (CPEC).",
        "advanced": "Pakistan commands the northern littoral of the Arabian Sea including the deepwater port of Gwadar at the entrance to the Strait of Hormuz. Armed with an estimated 170 nuclear warheads, Pakistan maintains a full-spectrum deterrence posture primarily directed against India. Domestically, the powerful military establishment (GHQ Rawalpindi) exercises decisive influence over national defense and foreign policy. Pakistan faces acute structural economic crises requiring IMF stabilization programs, rising Baloch separatist insurgency targeting CPEC infrastructure, and severe cross-border border skirmishes along the Durand Line with the Afghan Taliban."
    },
    "politicalSystem": {
        "isAvailable": True,
        "type": "Federal Parliamentary Republic with Strong Hybrid Military Governance Dynamics",
        "constitution": "1973 Constitution of the Islamic Republic of Pakistan",
        "branches": [
            {"name": "Executive", "role": "Prime Minister as Head of Government; President as ceremonial Head of State; military Chief of Army Staff (COAS) exercising preeminent security authority."},
            {"name": "Legislature", "role": "Bicameral Parliament (Majlis-e-Shoora) consisting of the 100-seat Senate and 336-seat National Assembly."},
            {"name": "Judiciary", "role": "Supreme Court of Pakistan and provincial High Courts exercising constitutional jurisprudence."}
        ],
        "currentLeadership": {
            "headOfState": "Asif Ali Zardari (President)",
            "headOfGovernment": "Shehbaz Sharif (Prime Minister) / Field General Asim Munir (Chief of Army Staff)"
        },
        "rulingParty": "Pakistan Muslim League-Nawaz (PML-N) leading ruling coalition with PPP",
        "oppositionParties": ["Pakistan Tehreek-e-Insaf (PTI)", "Jamiat Ulema-e-Islam (F)", "Muttahida Qaumi Movement"],
        "parliamentDetails": "Majlis-e-Shoora bicameral parliament sitting in Islamabad.",
        "recentElections": "General Election conducted in February 2024 resulting in a coalition government."
    },
    "geographyBorders": {
        "landArea": "881,913 km²",
        "location": "South Asia, bordering the Arabian Sea to the south, India to the east, Afghanistan and Iran to the west, and China to the north.",
        "continent": "Asia",
        "coastline": "1,046 km along the Arabian Sea and Gulf of Oman",
        "majorOceans": ["Indian Ocean Basin via Arabian Sea"],
        "topography": "Extremely diverse: high glaciated peaks in the north (Karakoram, Himalayas, Hindu Kush), fertile Indus River alluvial basin in Punjab/Sindh, and arid Balochistan plateau.",
        "rivers": ["Indus River", "Jhelum River", "Chenab River", "Ravi River", "Sutlej River"],
        "mountains": ["K2 (Godwin-Austen: 8,611 m, 2nd highest on Earth)", "Nanga Parbat (8,126 m)", "Tirich Mir (7,708 m)"],
        "seas": ["Arabian Sea"],
        "climates": ["Arid to semi-arid desert climate", "Alpine tundra in far north", "Subtropical humid in Himalayan foothills"],
        "landBorders": ["India (3,323 km including Line of Control)", "Afghanistan (2,670 km Durand Line)", "Iran (959 km)", "China (596 km)"],
        "maritimeBorders": ["Arabian Sea EEZ bordering Oman and India"]
    },
    "economy": {
        "gdpNominal": "$374.9 Billion USD",
        "gdpPPP": "$1.58 Trillion USD",
        "gdpPerCapita": "$1,550 USD",
        "gdpGrowth": "+2.4% (Constrained by inflation, debt servicing, and balance of payments deficits)",
        "currency": "Pakistani Rupee (PKR)",
        "majorIndustries": ["Textiles & Garments", "Agriculture & Food Processing", "Cement & Construction Materials", "Fertilizer Manufacturing", "Defense Production"],
        "majorExports": ["Textiles & Apparel (Cotton, Bedwear, Towels)", "Rice", "Leather Goods", "Surgical Instruments", "Sports Goods"],
        "majorImports": ["Refined Petroleum & Crude Oil", "Liquefied Natural Gas (LNG)", "Palm Oil", "Machinery & Electrical Goods", "Steel & Fertilizer"],
        "energyPosition": "Heavy reliance on imported LNG and crude oil; expanding domestic Thar coal power generation and nuclear plants built with Chinese assistance (Chashma, KANUPP).",
        "naturalResources": ["Extensive natural gas reserves (Sui)", "Thar Lignite Coal", "Reko Diq Copper & Gold deposits", "Iron Ore", "Rock Salt (Khewra)", "Limestone"],
        "tradeOrgs": ["World Trade Organization (WTO)", "South Asian Association for Regional Cooperation (SAARC)", "Shanghai Cooperation Organisation (SCO)", "ECO"],
        "economicStrategicImportance": "Key transit corridor connecting landlocked Central Asia and Western China to the Arabian Sea via CPEC.",
        "indiaEconomicConnection": "Direct bilateral trade officially suspended since August 2019 following constitutional changes in Jammu & Kashmir.",
        "majorTradingPartners": ["China", "United States", "United Arab Emirates", "Saudi Arabia", "United Kingdom", "Germany"]
    },
    "military": {
        "isAvailable": True,
        "expenditure": "$8.5 Billion USD (~2.2% of GDP)",
        "manpowerActive": "654,000 active military personnel",
        "manpowerReserve": "550,000 paramilitary and reserve forces (Rangers, Frontier Corps)",
        "doctrine": "Full-Spectrum Deterrence (FSD), Quid Pro Quo Plus, forward conventional defense combined with tactical nuclear weapons (Nasr missile).",
        "majorEquipment": ["JF-17 Thunder Block III Fighter Jets", "F-16 Fighting Falcon", "J-10CE Vigorous Dragon", "VT-4 Main Battle Tanks", "Al-Khalid MBT", "Hangor-Class (Type 039B) AIP Submarines", "Shaheen-III & Babur Cruise Missiles"],
        "nuclearStatus": "Nuclear-Armed State (Non-NPT Signatory; estimated 170 nuclear warheads deployed across triad)",
        "alliances": ["All-Weather Strategic Cooperative Partnership with China", "Major Non-NATO Ally (MNNA) of the US", "SCO Member State"]
    },
    "relations": {
        "isAvailable": True,
        "main": [
            {"id": "PAK_CHN", "country": "China", "countryCode": "CHN", "status": "All-Weather Strategic Cooperative Partnership", "summary": "Deepest security and economic ally; anchor of $62B China-Pakistan Economic Corridor (CPEC) and main source of modern military hardware."},
            {"id": "PAK_IND", "country": "India", "countryCode": "IND", "status": "Adversarial Nuclear-Armed Stand-off", "summary": "Multiple wars (1947, 1965, 1971, 1999); active 2021 Line of Control ceasefire; frozen high-level diplomatic dialogue."},
            {"id": "PAK_USA", "country": "United States", "countryCode": "USA", "status": "Transactional Security Relationship", "summary": "Cooperation focused on counter-terrorism and IMF program approvals following decades of Cold War and post-9/11 military alliance."},
            {"id": "PAK_SAU", "country": "Saudi Arabia", "countryCode": "SAU", "status": "Strategic Financial & Religious Partner", "summary": "Riyadh provides essential central bank balance-of-payments deposits, deferred oil financing, and employs over 2.5M Pakistani workers."}
        ],
        "searchable": [
            {"id": "PAK_AFG", "country": "Afghanistan", "countryCode": "AFG", "summary": "Severe frontier friction with Afghan Taliban over Tehrik-i-Taliban Pakistan (TTP) cross-border sanctuary and Durand Line fencing."},
            {"id": "PAK_IRN", "country": "Iran", "countryCode": "IRN", "summary": "Complex border security relations punctuated by mutual cross-border missile strikes on Baloch insurgent hideouts in early 2024."},
            {"id": "PAK_TUR", "country": "Turkey", "countryCode": "TUR", "summary": "Close defense industrial cooperation, joint military exercises, and co-production of Babur-class naval corvettes (MILGEM)."}
        ]
    },
    "currentTensions": {
        "isAvailable": True,
        "activeFlashpoints": [
            {"name": "Line of Control (LoC) in Kashmir", "type": "Nuclear-Armed Frontier", "desc": "Highly fortified ceasefire boundary observing 2021 director-general level truce amidst intelligence monitoring."},
            {"name": "Durand Line Frontier with Afghanistan", "type": "Cross-Border Insurgency Theater", "desc": "Deadly clashes between Pakistani security forces and TTP militants staging attacks from Afghan safe havens."},
            {"name": "Balochistan & Gwadar CPEC Corridor", "type": "Separatist Insurgency Flashpoint", "desc": "Baloch Liberation Army (BLA) suicide bombings and ambushes targeting Chinese engineers and security convoys."}
        ],
        "summary": "Multi-front security pressure balancing nuclear-armed deterrence against India with severe western border instability and internal insurgency."
    },
    "strategicLocations": {
        "isAvailable": True,
        "list": [
            {"name": "Port of Gwadar", "type": "Deepwater Warm-Water Port", "importance": "CPEC maritime terminus overlooking the Strait of Hormuz, providing China an overland bypass to the Indian Ocean."},
            {"name": "General Headquarters (GHQ) Rawalpindi", "type": "Apex Military Command Nexus", "importance": "Command center of the Pakistan Army controlling operational planning, corps deployments, and intelligence apparatus (ISI)."},
            {"name": "Karakoram Highway (N-35)", "type": "Cross-Border Strategic Artery", "importance": "Highest paved international highway in the world connecting Gilgit-Baltistan with China's Xinjiang province."}
        ]
    },
    "indiaImpact": {
        "isAvailable": True,
        "strategicTies": "Pakistan is India’s principal strategic rival in South Asia; the relationship has defined New Delhi's defense doctrine, border force deployments, and nuclear posture since 1947.",
        "trade": "Bilateral trade has remained largely halted since 2019, with limited indirect trade flowing via third-party Gulf hubs like Dubai.",
        "energy": "The Indus Waters Treaty (1960) governs cross-border river flow, currently subject to Indian demands for treaty modification to address changed demographics and clean energy.",
        "diaspora": "Historic familial, linguistic, and cultural ties persist despite strict visa regimes and suspended direct commercial flights.",
        "summary": "Pakistan’s close strategic alignment with China presents India with the enduring operational challenge of a potential two-front collusive security threat across the Line of Control and LAC."
    }
}

# Write file
output_path = os.path.join(os.path.dirname(__file__), '../src/data/geointelFrontlineCountries.js')
output_code = "export const FRONTLINE_COUNTRY_DOSSIERS = " + json.dumps(countries, indent=2) + ";\n"
with open(output_path, "w", encoding="utf-8") as f:
    f.write(output_code)

print(f"Successfully generated {len(countries)} countries: {list(countries.keys())}")
