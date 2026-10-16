# Python script to generate all 18 frontline country dossiers
import json
import os
import re

# Read current 4 countries from src/data/geointelFrontlineCountries.js
base_path = os.path.join(os.path.dirname(__file__), '../src/data/geointelFrontlineCountries.js')
with open(base_path, 'r', encoding='utf-8') as f:
    text = f.read()

# Extract json
json_str = re.sub(r'^export const FRONTLINE_COUNTRY_DOSSIERS =\s*', '', text)
json_str = re.sub(r';\s*$', '', json_str)
countries = json.loads(json_str)

# 5. NORTH KOREA (PRK)
countries["PRK"] = {
    "id": "PRK",
    "name": "North Korea",
    "officialName": "Democratic People's Republic of Korea (Chosŏn Minjujuŭi Inmin Konghwaguk)",
    "commonName": "North Korea",
    "capital": "Pyongyang",
    "capitalCoords": {"name": "Pyongyang", "lat": 39.0392, "lng": 125.7625},
    "capitalAdmin": {
        "role": "Sovereign Administrative & Party Seat of the DPRK",
        "political": "Headquarters of the Workers' Party of Korea (WPK), Mansudae Assembly Hall, and Kumsusan Palace of the Sun.",
        "geographic": "39.04°N, 125.76°E situated on both banks of the Taedong River in western North Korea.",
        "strategic": "Apex nuclear command and state decision-making nexus under General Secretary Kim Jong Un."
    },
    "region": "Indo-Pacific",
    "subregion": "East Asia / Korean Peninsula",
    "flag": "🇰🇵",
    "lat": 40.3399,
    "lng": 127.5101,
    "area": "120,538 km²",
    "population": "26.1 Million",
    "politicalSystemType": "Totalitarian Unitary One-Party Socialist Republic under Kim Family Rule",
    "currency": "North Korean Won (KPW / ₩)",
    "languages": "Korean (Official)",
    "timeZones": "UTC+9 (KST)",
    "tagline": "Nuclear-Armed Hermit State & Strategic Keystone of Northeast Asian Brinkmanship",
    "overview": {
        "beginner": "North Korea is an authoritarian socialist state occupying the northern half of the Korean Peninsula. Heavily militarized and isolated by extensive international sanctions, North Korea has developed a formidable nuclear and ballistic missile capability and maintains a mutual defense partnership with Russia and China.",
        "advanced": "The DPRK commands the northern gateway of the Korean Peninsula, bordering China, Russia, and the heavily fortified Demilitarized Zone (DMZ) with South Korea. Guided by Juche (self-reliance) and Songun (military-first) doctrines, Pyongyang has systematically achieved an operational nuclear triad, developing road-mobile solid-fuel ICBMs (Hwasong-18) capable of striking the continental US. In 2024, North Korea formally abandoned reunification with South Korea, designated the South as its 'principal enemy', and signed a historic Comprehensive Strategic Partnership Treaty with Russia guaranteeing mutual military assistance."
    },
    "politicalSystem": {
        "isAvailable": True,
        "type": "Hereditary One-Party Totalitarian State",
        "constitution": "Socialist Constitution of the DPRK (1972, amended 2023 enshrining nuclear status)",
        "branches": [
            {"name": "State Affairs Commission (SAC)", "role": "Supreme policy-leading organ of state power chaired by Kim Jong Un."},
            {"name": "Workers' Party of Korea (WPK)", "role": "Ruling vanguard party directing all civil, military, and economic state institutions."},
            {"name": "Supreme People's Assembly (SPA)", "role": "687-seat unicameral legislative body formally approving state appointments and constitutional decrees."}
        ],
        "currentLeadership": {
            "headOfState": "Kim Jong Un (General Secretary of WPK and President of State Affairs)",
            "headOfGovernment": "Kim Tok Hun (Premier of the Cabinet)"
        },
        "rulingParty": "Workers' Party of Korea (WPK)",
        "oppositionParties": ["None (Opposition prohibited by law; token united front parties exist)"],
        "parliamentDetails": "Supreme People's Assembly meets annually in Mansudae Assembly Hall, Pyongyang.",
        "recentElections": "Single-candidate parliamentary elections held in 2019 under state supervision."
    },
    "geographyBorders": {
        "landArea": "120,538 km²",
        "location": "East Asia, occupying the northern half of the Korean Peninsula.",
        "continent": "Asia",
        "coastline": "2,495 km (Sea of Japan / East Sea to the east, Yellow Sea to the west)",
        "majorOceans": ["Pacific Ocean Basin via Sea of Japan and Yellow Sea"],
        "topography": "Highly mountainous with deep, narrow valleys; 80% composed of rugged highlands.",
        "rivers": ["Yalu (Amnok) River", "Tumen River", "Taedong River"],
        "mountains": ["Mount Paektu (2,744 m, sacred active volcano)", "Myohyang Mountains", "Kumgang Mountains"],
        "seas": ["Sea of Japan (East Sea)", "Yellow Sea (West Sea)", "Korea Bay"],
        "climates": ["Continental climate with cold, snowy winters and hot, rainy summers"],
        "landBorders": ["China (1,416 km)", "South Korea (238 km along DMZ)", "Russia (17.3 km along Tumen River)"],
        "maritimeBorders": ["Northern Limit Line (NLL) disputed maritime boundary with South Korea in the Yellow Sea"]
    },
    "economy": {
        "gdpNominal": "$16.5 Billion USD (Estimated)",
        "gdpPPP": "$40.0 Billion USD (Estimated)",
        "gdpPerCapita": "$640 USD",
        "gdpGrowth": "+1.8% (Estimated recovery driven by arms transfers and trade resumption with Russia and China)",
        "currency": "North Korean Won (KPW)",
        "majorIndustries": ["Military Munitions & Arms Manufacturing", "Mining & Metallurgical Processing", "Heavy Chemicals", "Textiles", "Cryptocurrency & Cyber Operations"],
        "majorExports": ["Ammunition & Artillery Shells (to Russia)", "Ballistic Missiles (KN-23)", "Anthracite Coal (restricted)", "Iron Ore", "Textiles (illicit/sanctioned)"],
        "majorImports": ["Refined Petroleum", "Cereal Grains & Food Stuffs", "Fertilizer", "Industrial Machinery", "Coking Coal"],
        "energyPosition": "Chronic energy shortages; primarily reliant on domestic coal power and hydroelectricity with petroleum imported from Russia and China.",
        "naturalResources": ["Anthracite Coal", "Iron Ore", "Magnesite", "Zinc", "Copper", "Lead", "Graphite", "Rare Earth Elements (Unexploited)"],
        "tradeOrgs": ["Subject to extensive UN Security Council sanctions regimes; non-WTO"],
        "economicStrategicImportance": "Key geopolitical buffer state for China; supplier of conventional artillery munitions to Russia.",
        "indiaEconomicConnection": "Strictly compliant with UN sanctions; historic non-aligned diplomatic mission in Pyongyang; limited humanitarian food/medicine transfers.",
        "majorTradingPartners": ["China (Accounts for over 90% of documented trade)", "Russia", "Restricted global grey-market networks"]
    },
    "military": {
        "isAvailable": True,
        "expenditure": "$4.5 Billion USD (~25–30% of national GDP)",
        "manpowerActive": "1,280,000 active service members (Korean People's Army)",
        "manpowerReserve": "600,000 reserve personnel plus 5,700,000 Worker-Peasant Red Guards militia",
        "doctrine": "Asymmetric strategic deterrence, rapid offensive mechanized breakout, extensive deep-underground facilities, and tactical nuclear preemption.",
        "majorEquipment": ["Hwasong-17 & Hwasong-18 Solid-Fuel ICBMs", "KN-23 & KN-24 Short-Range Quasi-Ballistic Missiles", "Hypersonic Glide Vehicles", "Chonma-216 & Chollima Main Battle Tanks", "Romeo-Class Conventional and SSB Submarines", "Koksan 170mm Self-Propelled Artillery"],
        "nuclearStatus": "Declared Nuclear-Armed State (Constitutionally defined; estimated 50–60 operational warheads with fissile material for 100+)",
        "alliances": ["Comprehensive Strategic Partnership Treaty with Russia (2024 Mutual Defense Pact)", "1961 Sino-North Korean Treaty of Friendship"]
    },
    "relations": {
        "isAvailable": True,
        "main": [
            {"id": "PRK_RUS", "country": "Russia", "countryCode": "RUS", "status": "Mutual Defense Treaty Alliance (2024)", "summary": "Full strategic military alliance; North Korea supplies artillery munitions and missiles in exchange for Russian space launch and satellite technology."},
            {"id": "PRK_CHN", "country": "China", "countryCode": "CHN", "status": "Essential Economic Lifeline & Buffer Ally", "summary": "Beijing provides vital energy, food supplies, and diplomatic cover at the UN Security Council while managing regional escalation risks."},
            {"id": "PRK_KOR", "country": "South Korea", "countryCode": "KOR", "status": "Principal Hostile Adversary State", "summary": "Formal abandonment of reunification policy; fortified DMZ; mutual reconnaissance balloon and electronic warfare skirmishes."},
            {"id": "PRK_USA", "country": "United States", "countryCode": "USA", "status": "Strategic Nuclear Adversary", "summary": "Permanent nuclear standoff; DPRK ICBM tests designed to decouple Washington's extended nuclear deterrence from Seoul and Tokyo."}
        ],
        "searchable": [
            {"id": "PRK_JPN", "country": "Japan", "countryCode": "JPN", "summary": "Continuous tension over missile overflights, abduction of Japanese citizens, and Tokyo's counterstrike missile build-up."},
            {"id": "PRK_IND", "country": "India", "countryCode": "IND", "summary": "Maintains sovereign diplomatic embassy in Pyongyang while strictly enforcing UN Security Council non-proliferation sanctions."}
        ]
    },
    "currentTensions": {
        "isAvailable": True,
        "activeFlashpoints": [
            {"name": "Demilitarized Zone (DMZ) & Border Road Severance", "type": "Frontier Militarization", "desc": "Laying of dense minefields, construction of anti-tank barriers, and physical dynamiting of inter-Korean road and rail links."},
            {"name": "Northern Limit Line (NLL) Yellow Sea", "type": "Maritime Artillery Standoff", "desc": "Live-fire coastal artillery drills and GPS spoofing operations in disputed maritime border sectors."},
            {"name": "Ballistic Missile & Space Reconnaissance Tests", "type": "Strategic Proliferation Alert", "desc": "Routine solid-fuel multi-stage ICBM launches and military spy satellite orbital deployments."}
        ],
        "summary": "High-risk nuclear brinkmanship combined with overt alignment with Moscow in global anti-Western balancing."
    },
    "strategicLocations": {
        "isAvailable": True,
        "list": [
            {"name": "Sohae Satellite Launching Ground (Tongchang-ri)", "type": "Primary Space & Missile Spaceport", "importance": "Main liquid and solid-fuel engine test stand and orbital satellite launch facility."},
            {"name": "Yongbyon Nuclear Scientific Research Center", "type": "Fissile Material Production Complex", "importance": "Operates 5 MWe graphite reactor and experimental light water reactor producing weapons-grade plutonium and highly enriched uranium."},
            {"name": "Sinpo South Shipyard", "type": "Submarine Naval Construction Center", "importance": "Primary construction hub for ballistic missile submarines (SSB) and submarine-launched ballistic missile (SLBM) test barges."}
        ]
    },
    "indiaImpact": {
        "isAvailable": True,
        "strategicTies": "India maintains diplomatic relations with North Korea dating back to 1973, serving as a rare channel of communication while firmly opposing proliferation.",
        "trade": "Bilateral commercial trade is strictly restricted to humanitarian goods in compliance with UN Security Council resolution mandates.",
        "energy": "India provides no direct energy supplies, participating in international sanctions monitoring against illegal ship-to-ship petroleum transfers.",
        "diaspora": "Minimal Indian diplomatic and humanitarian staff presence in Pyongyang.",
        "summary": "India has consistently expressed grave concern regarding historical clandestine proliferation linkages between North Korea and Pakistan involving ballistic missile and uranium enrichment technologies."
    }
}

# 6. SOUTH KOREA (KOR)
countries["KOR"] = {
    "id": "KOR",
    "name": "South Korea",
    "officialName": "Republic of Korea (Daehan Minguk)",
    "commonName": "South Korea",
    "capital": "Seoul",
    "capitalCoords": {"name": "Seoul", "lat": 37.5665, "lng": 126.9780},
    "capitalAdmin": {
        "role": "National Administrative Capital of the Republic of Korea",
        "political": "Seat of the President (Yongsan Presidential Office), National Assembly (Yeouido), and Supreme Court.",
        "geographic": "37.57°N, 126.98°E situated on the Han River in northwestern South Korea, 40 km from the DMZ.",
        "strategic": "Center of Combined Forces Command (CFC) and primary command bunker networks coordinating with US Forces Korea."
    },
    "region": "Indo-Pacific",
    "subregion": "East Asia / Korean Peninsula",
    "flag": "🇰🇷",
    "lat": 35.9078,
    "lng": 127.7669,
    "area": "100,210 km²",
    "population": "51.7 Million",
    "politicalSystemType": "Unitary Presidential Constitutional Republic",
    "currency": "South Korean Won (KRW / ₩)",
    "languages": "Korean (Official)",
    "timeZones": "UTC+9 (KST)",
    "tagline": "High-Tech Democratic Powerhouse, Global Defense Arsenal & East Asian Linchpin",
    "overview": {
        "beginner": "South Korea is an advanced industrial democracy occupying the southern half of the Korean Peninsula. Famous globally for its semiconductor technology, automotive manufacturing, and K-culture, South Korea is a key treaty ally of the United States and has rapidly emerged as one of the world's leading arms exporters.",
        "advanced": "The Republic of Korea stands as one of the world’s most militarily dense and technologically capable states, situated between China, Russia, and Japan. Facing the existential threat of North Korea’s expanding nuclear arsenal, Seoul operates a cutting-edge conventional military and relies on the US nuclear umbrella under the 1953 Mutual Defense Treaty, bolstered by the 2023 Washington Declaration and Nuclear Consultative Group (NCG). South Korea is also a dominant supplier in global high-bandwidth memory (HBM) semiconductors, commercial shipbuilding, and world-class defense equipment (K2 tanks, K9 howitzers)."
    },
    "politicalSystem": {
        "isAvailable": True,
        "type": "Presidential Representative Democratic Republic",
        "constitution": "1987 Constitution of the Republic of Korea (Sixth Republic)",
        "branches": [
            {"name": "Executive", "role": "President serving a single 5-year term as Head of State, Head of Government, and Commander-in-Chief."},
            {"name": "Legislature", "role": "National Assembly (Gukhoe, 300-seat unicameral parliament) passing national budgets and laws."},
            {"name": "Judiciary", "role": "Supreme Court and Constitutional Court ensuring constitutional adherence."}
        ],
        "currentLeadership": {
            "headOfState": "Yoon Suk Yeol (President)",
            "headOfGovernment": "Han Duck-soo (Prime Minister)"
        },
        "rulingParty": "People Power Party (PPP)",
        "oppositionParties": ["Democratic Party of Korea (DPK)", "Rebuilding Korea Party", "Reform Party"],
        "parliamentDetails": "National Assembly of the Republic of Korea sitting in Yeouido, Seoul.",
        "recentElections": "Presidential election in March 2022; 22nd Legislative General Election held in April 2024 resulting in an opposition majority."
    },
    "geographyBorders": {
        "landArea": "100,210 km²",
        "location": "East Asia, southern half of the Korean Peninsula bordering the Sea of Japan, Korea Strait, and Yellow Sea.",
        "continent": "Asia",
        "coastline": "2,413 km along three seas",
        "majorOceans": ["Pacific Ocean Basin via Sea of Japan (East Sea) and Yellow Sea"],
        "topography": "Predominantly mountainous (70% of landmass) with rugged eastern spine and coastal plains in the west and south.",
        "rivers": ["Han River", "Nakdong River", "Geum River", "Yeongsan River"],
        "mountains": ["Hallasan (Jeju Island: 1,947 m, highest peak)", "Jirisan (1,915 m)", "Seoraksan (1,708 m)"],
        "seas": ["Sea of Japan (East Sea)", "Yellow Sea (West Sea)", "Korea Strait"],
        "climates": ["Humid continental with cold winters and hot, humid summer monsoons"],
        "landBorders": ["North Korea (238 km Military Demarcation Line along DMZ)"],
        "maritimeBorders": ["Disputed Dokdo/Takeshima islets with Japan; maritime EEZ boundaries with China across Yellow Sea"]
    },
    "economy": {
        "gdpNominal": "$1.71 Trillion USD (World's 12th largest)",
        "gdpPPP": "$2.93 Trillion USD",
        "gdpPerCapita": "$33,150 USD",
        "gdpGrowth": "+2.2%",
        "currency": "South Korean Won (KRW)",
        "majorIndustries": ["Advanced Semiconductors & HBM Chips", "Automobiles & Electric Vehicles (Hyundai, Kia)", "Commercial Shipbuilding (LNG Carriers)", "Consumer Electronics (Samsung, LG)", "Defense Equipment Manufacturing (Hanwha, KAI, Hyundai Rotem)"],
        "majorExports": ["Memory Chips & Semiconductors", "Motor Vehicles & Parts", "Refined Petroleum", "Cargo & Passenger Ships", "Wireless Communications Devices"],
        "majorImports": ["Crude Petroleum & LNG", "Semiconductor Manufacturing Equipment", "Coal", "Rare Earth Elements & Battery Precursors", "Integrated Circuits"],
        "energyPosition": "Imports over 90% of primary energy; operating 26 nuclear power reactors producing ~30% of electricity.",
        "naturalResources": ["Coal (Limited)", "Tungsten", "Graphite", "Molybdenum", "Extensive deepsea fishery waters"],
        "tradeOrgs": ["World Trade Organization (WTO)", "OECD", "G20", "APEC", "RCEP"],
        "economicStrategicImportance": "Irreplaceable choke-point producer of over 60% of the world's advanced DRAM and HBM memory chips.",
        "indiaEconomicConnection": "Bilateral CEPA trade agreement; major manufacturing hub investments in India by Samsung, Hyundai, LG, and Kia; defense cooperation on K9 Vajra self-propelled howitzers.",
        "majorTradingPartners": ["China", "United States", "Vietnam", "Japan", "Australia", "India"]
    },
    "military": {
        "isAvailable": True,
        "expenditure": "$47.9 Billion USD (~2.7% of GDP)",
        "manpowerActive": "500,000 active service members (ROK Armed Forces)",
        "manpowerReserve": "3,100,000 highly trained reserve forces",
        "doctrine": "Three-Axis Defense System: Kill Chain preemptive strike, Korea Air and Missile Defense (KAMD), and Korea Massive Punishment and Retaliation (KMPR).",
        "majorEquipment": ["K2 Black Panther Main Battle Tank", "K9 Thunder 155mm Self-Propelled Howitzer", "KF-21 Boramae Multi-Role Fighter", "Hyunmoo-4/5 Conventional Bunker-Buster Ballistic Missiles", "Cheongung-II (KM-SAM) Air Defense", "KDX-III Aegis Guided-Missile Destroyers"],
        "nuclearStatus": "Non-Nuclear Weapon State under US Nuclear Umbrella (Extended Deterrence via Nuclear Consultative Group)",
        "alliances": ["1953 US-ROK Mutual Defense Treaty (Hosting 28,500 US Forces Korea personnel at Camp Humphreys)", "Trilateral Security Cooperation with US and Japan"]
    },
    "relations": {
        "isAvailable": True,
        "main": [
            {"id": "KOR_USA", "country": "United States", "countryCode": "USA", "status": "Comprehensive Global Strategic Alliance", "summary": "Core treaty alliance; joint operational command structure, extended nuclear deterrence, and deep semiconductor tech coordination."},
            {"id": "KOR_PRK", "country": "North Korea", "countryCode": "PRK", "status": "Principal Hostile Nuclear Adversary", "summary": "Constant state of military alert; inter-Korean agreements collapsed; deterrence backed by 24/7 high-readiness missile systems."},
            {"id": "KOR_JPN", "country": "Japan", "countryCode": "JPN", "status": "Trilateral Security Partner", "summary": "Historic diplomatic rapprochement under President Yoon; real-time missile warning data sharing and Camp David summit institutionalization."},
            {"id": "KOR_CHN", "country": "China", "countryCode": "CHN", "status": "Complex Economic Partner & Strategic Balance", "summary": "Largest overall trading partner; constant friction over US missile defense deployments (THAAD) and semiconductor export curbs."}
        ],
        "searchable": [
            {"id": "KOR_IND", "country": "India", "countryCode": "IND", "summary": "Special Strategic Partnership; major defense manufacturing transfers (K9 Vajra), electronics FDI, and Indo-Pacific cooperation."},
            {"id": "KOR_POL", "country": "Poland", "countryCode": "POL", "summary": "Mega defense export partnership exceeding $15 Billion USD for K2 tanks, K9 howitzers, and FA-50 aircraft."}
        ]
    },
    "currentTensions": {
        "isAvailable": True,
        "activeFlashpoints": [
            {"name": "Northern Limit Line (NLL) & Western Border", "type": "Naval and Coastal Artillery Flashpoint", "desc": "Frequent North Korean coastal artillery barrages and naval incursions in the Yellow Sea."},
            {"name": "DMZ Reconnaissance & Balloon Warfare", "type": "Hybrid Border Confrontation", "desc": "North Korean trash balloon campaigns met with South Korean loudspeaker broadcasts and resumed border military drills."},
            {"name": "Solid-Fuel Ballistic Missile Threat", "type": "Nuclear Preemption Threat", "desc": "Countering DPRK short-range tactical nuclear-capable missiles capable of striking all South Korean airbases in under 5 minutes."}
        ],
        "summary": "High-readiness conventional and missile defense mobilization against accelerating North Korean nuclear integration with Russia."
    },
    "strategicLocations": {
        "isAvailable": True,
        "list": [
            {"name": "US Army Garrison Camp Humphreys (Pyeongtaek)", "type": "Largest Overseas US Military Base", "importance": "Headquarters of US Forces Korea (USFK), 8th Army, and Combined Forces Command."},
            {"name": "Busan Naval Base & Deepwater Port", "type": "Primary Naval Logistics Hub", "importance": "Key staging port for visiting US Navy nuclear-powered aircraft carriers and submarines."},
            {"name": "Jeju Civilian-Military Complex", "type": "Southern Maritime Flank Defense Base", "importance": "Secures the Korea Strait and approaches to the East China Sea against foreign naval interdiction."}
        ]
    },
    "indiaImpact": {
        "isAvailable": True,
        "strategicTies": "India and South Korea maintain a 'Special Strategic Partnership' anchored in shared democratic values and common Indo-Pacific security interests.",
        "trade": "Bilateral trade reached $27 Billion USD under the Comprehensive Economic Partnership Agreement (CEPA), with major South Korean manufacturing giants heavily embedded in India's Make-in-India initiative.",
        "energy": "Cooperation in clean energy, green hydrogen, and electric vehicle battery supply chain diversification.",
        "diaspora": "Growing presence of Indian software engineers, researchers, and students in South Korean tech conglomerates.",
        "summary": "Defense cooperation represents a premier pillar, exemplified by Larsen & Toubro's successful domestic assembly of 100 K9 Vajra-T howitzers for the Indian Army under technology transfer from Hanwha Aerospace."
    }
}

# Write file
output_path = os.path.join(os.path.dirname(__file__), '../src/data/geointelFrontlineCountries.js')
output_code = "export const FRONTLINE_COUNTRY_DOSSIERS = " + json.dumps(countries, indent=2) + ";\n"
with open(output_path, "w", encoding="utf-8") as f:
    f.write(output_code)

print(f"Successfully generated {len(countries)} countries: {list(countries.keys())}")
