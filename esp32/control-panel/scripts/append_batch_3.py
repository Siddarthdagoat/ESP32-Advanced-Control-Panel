# Batch 3: SDN, SOM, ETH, MMR, VNM, BGD
import json
import os
import re

base_path = os.path.join(os.path.dirname(__file__), '../src/data/geointelFrontlineCountries.js')
with open(base_path, 'r', encoding='utf-8') as f:
    text = f.read()

json_str = re.sub(r'^export const FRONTLINE_COUNTRY_DOSSIERS =\s*', '', text)
json_str = re.sub(r';\s*$', '', json_str)
countries = json.loads(json_str)

# 13. SUDAN (SDN)
countries["SDN"] = {
    "id": "SDN",
    "name": "Sudan",
    "officialName": "Republic of the Sudan (Jumhūriyyat as-Sūdān)",
    "commonName": "Sudan",
    "capital": "Khartoum (De jure) / Port Sudan (Administrative)",
    "capitalCoords": {"name": "Port Sudan", "lat": 19.6158, "lng": 37.2164},
    "capitalAdmin": {
        "role": "Interim Administrative Capital & Maritime Gateway (Port Sudan) / Historic Capital (Khartoum)",
        "political": "Port Sudan serves as the operational headquarters of the Transitional Sovereign Council led by General Abdel Fattah al-Burhan; central Khartoum remains heavily contested.",
        "geographic": "Port Sudan is situated at 19.62°N, 37.22°E on the western Red Sea coast.",
        "strategic": "Commands Sudan's sole international seaport, oil export pipeline terminals, and primary humanitarian logistics node."
    },
    "region": "Africa",
    "subregion": "North / East Africa / Red Sea Littoral",
    "flag": "🇸🇩",
    "lat": 12.8628,
    "lng": 30.2176,
    "area": "1,886,068 km² (3rd largest country in Africa)",
    "population": "48.1 Million (Over 10M internally displaced, world's largest displacement crisis)",
    "politicalSystemType": "Military-Led Sovereign Council under High-Intensity Civil Conflict",
    "currency": "Sudanese Pound (SDG)",
    "languages": "Arabic and English (Both Official)",
    "timeZones": "UTC+2 (CAT)",
    "tagline": "Red Sea Littoral Nexus, Nile Basin Keystone & Battleground for African Statehood",
    "overview": {
        "beginner": "Sudan is a large Northeast African nation bordering the Red Sea, Egypt, and six other countries. Since April 2023, Sudan has been engulfed in a catastrophic civil war between the Sudanese Armed Forces and the paramilitary Rapid Support Forces, displacing over 10 million people and creating a severe regional humanitarian and security crisis.",
        "advanced": "Sudan occupies an irreplaceable geopolitical position spanning the central Nile River basin and 853 km of Red Sea coastline, providing landlocked South Sudan, Chad, and the Central African Republic access to international maritime commerce. The civil war between General al-Burhan’s Sudanese Armed Forces (SAF) and Mohamed Hamdan Dagalo’s (Hemedti) Rapid Support Forces (RSF) has triggered severe international proxy competition: Russia seeks a naval logistics facility at Port Sudan, Iran has supplied armed drones to the SAF, and regional Gulf powers maneuver for influence over Red Sea agricultural and port assets."
    },
    "politicalSystem": {
        "isAvailable": True,
        "type": "Military Junta / Contested Sovereign Transition",
        "constitution": "2019 Constitutional Charter (Suspended following military takeover)",
        "branches": [
            {"name": "Transitional Sovereign Council (SAF)", "role": "Apex executive authority chaired by Army Commander-in-Chief General Abdel Fattah al-Burhan operating from Port Sudan."},
            {"name": "Rapid Support Forces (RSF)", "role": "Rival paramilitary force controlling large swathes of Khartoum, Darfur, and Kordofan under Mohamed Hamdan Dagalo."},
            {"name": "Civilian Democratic Coalition (Taqaddum)", "role": "Coalition of political parties and civil society advocating an immediate ceasefire and return to civilian rule."}
        ],
        "currentLeadership": {
            "headOfState": "Abdel Fattah al-Burhan (Chairman, Transitional Sovereign Council)",
            "headOfGovernment": "Osman Hussein (Acting Prime Minister)"
        },
        "rulingParty": "Military-led Transitional Administration",
        "oppositionParties": ["Forces of Freedom and Change (FFC)", "National Umma Party", "Sudanese Congress Party"],
        "parliamentDetails": "National Assembly dissolved; legislative decrees issued by the Sovereign Council.",
        "recentElections": "Democratic elections deferred indefinitely due to ongoing armed hostilities."
    },
    "geographyBorders": {
        "landArea": "1,886,068 km²",
        "location": "Northeast Africa, bordering the Red Sea between Egypt and Eritrea.",
        "continent": "Africa",
        "coastline": "853 km along the Red Sea",
        "majorOceans": ["Indian Ocean Basin via Red Sea and Gulf of Aden"],
        "topography": "Vast desert plains in the north (Nubian Desert), central fertile savanna plains intersected by the Blue and White Nile rivers, and the Marrah Mountains in Darfur.",
        "rivers": ["Nile River (Formed by confluence of Blue Nile and White Nile at Khartoum)", "Atbarah River"],
        "mountains": ["Deriba Caldera (Marrah Mountains: 3,042 m, highest point in Sudan)"],
        "seas": ["Red Sea"],
        "climates": ["Arid desert in the north; tropical semi-arid savanna in the south with rainy summer seasons"],
        "landBorders": ["Egypt (1,273 km)", "Eritrea (605 km)", "Ethiopia (723 km)", "South Sudan (2,184 km)", "Central African Republic (175 km)", "Chad (1,403 km)", "Libya (383 km)"],
        "maritimeBorders": ["Red Sea EEZ bordering Saudi Arabia and Egypt"]
    },
    "economy": {
        "gdpNominal": "$26.8 Billion USD (Contracted by over 40% due to conflict)",
        "gdpPPP": "$80.0 Billion USD",
        "gdpPerCapita": "$560 USD",
        "gdpGrowth": "-12.5% (Catastrophic contraction in agricultural output and industrial capacity)",
        "currency": "Sudanese Pound (SDG, severe hyperinflation)",
        "majorIndustries": ["Gold Mining & Artisanal Smelting", "Petroleum Refining & Transit", "Gum Arabic Production (Supplies 70% of global market)", "Livestock Breeding & Agriculture", "Cotton Processing"],
        "majorExports": ["Gold (Primary source of foreign currency)", "Gum Arabic", "Crude Oil (South Sudan transit fees)", "Live Sheep & Camels", "Sesame Seeds & Peanuts"],
        "majorImports": ["Wheat & Cereal Grains", "Refined Petroleum Products", "Pharmaceuticals", "Manufactured Goods", "Weapons & Munitions"],
        "energyPosition": "Operates the Heglig and Khartoum refineries; collects transit pipeline fees for South Sudanese crude flowing to the Bashayer marine terminal near Port Sudan.",
        "naturalResources": ["Gold (Top export earner)", "Petroleum Reserves", "Iron Ore", "Copper", "Chromium Ore", "Zinc", "Vast Arable Land along Nile"],
        "tradeOrgs": ["Arab League", "African Union (Suspended following coup)", "COMESA"],
        "economicStrategicImportance": "Supplier of 70% of the world's gum arabic (essential emulsifier for beverages, pharmaceuticals, and cosmetics); key Red Sea pipeline transit route.",
        "indiaEconomicConnection": "ONGC Videsh has invested over $2.5 Billion in Sudan's oil exploration (Greater Nile Oil Project); India launched Operation Kaveri to evacuate citizens in 2023.",
        "majorTradingPartners": ["United Arab Emirates", "China", "Saudi Arabia", "Egypt", "India", "Turkey"]
    },
    "military": {
        "isAvailable": True,
        "expenditure": "$1.5 Billion USD (Estimated fragmented wartime procurement)",
        "manpowerActive": "Sudanese Armed Forces (~150,000 active troops) vs. Rapid Support Forces (~100,000 mobile fighters)",
        "manpowerReserve": "Popular Defense Forces and newly armed civilian volunteer brigades",
        "doctrine": "Conventional combined-arms warfare and air power (SAF) vs. highly mobile, dispersed urban guerrilla and technical-truck warfare (RSF).",
        "majorEquipment": ["MiG-29SE & Su-25 Frogfoot Combat Jets", "Mohajer-6 & Zagil Armed Attack Drones", "T-72 & Type 59 Main Battle Tanks", "BTR-70/80 Armored Personnel Carriers", "Armed Toyota Land Cruiser Technicals with Heavy Machine Guns"],
        "nuclearStatus": "Non-Nuclear State (Party to Non-Proliferation Treaty)",
        "alliances": ["SAF supported diplomatically by Egypt, Saudi Arabia, and Iran; RSF backed by regional patron networks"]
    },
    "relations": {
        "isAvailable": True,
        "main": [
            {"id": "SDN_EGY", "country": "Egypt", "countryCode": "EGY", "status": "Vital Northern Neighbor & SAF Ally", "summary": "Cairo firmly backs General al-Burhan’s SAF, coordinates shared Nile water security against Ethiopia, and hosts over 500,000 displaced Sudanese."},
            {"id": "SDN_RUS", "country": "Russia", "countryCode": "RUS", "status": "Naval Basing Talks & Arms Supplier", "summary": "Moscow maintains ties with both sides; pursuing agreement with the SAF for a naval logistics support facility at Port Sudan on the Red Sea."},
            {"id": "SDN_SAU", "country": "Saudi Arabia", "countryCode": "SAU", "status": "Diplomatic Mediator & Humanitarian Donor", "summary": "Co-hosts Jeddah peace negotiations with the US seeking permanent ceasefires and humanitarian corridors across the Red Sea."},
            {"id": "SDN_IND", "country": "India", "countryCode": "IND", "status": "Historic Energy Investor & Maritime Partner", "summary": "India deployed Indian Navy stealth frigates and IAF C-130J transport aircraft to Port Sudan in 2023, successfully executing Operation Kaveri."}
        ],
        "searchable": [
            {"id": "SDN_SSD", "country": "South Sudan", "countryCode": "SSD", "summary": "Landlocked neighbor completely dependent on Sudanese pipelines to export its crude oil through the Red Sea terminal at Port Sudan."},
            {"id": "SDN_ETH", "country": "Ethiopia", "countryCode": "ETH", "summary": "Contentious border friction over the fertile al-Fashaga agricultural strip and downstream Blue Nile water flows from the GERD reservoir."}
        ]
    },
    "currentTensions": {
        "isAvailable": True,
        "activeFlashpoints": [
            {"name": "Khartoum Metropolitan Theater", "type": "Urban Warfare & Siege", "desc": "Widespread destruction across Khartoum, Omdurman, and Bahri between entrenched RSF units and SAF mechanized brigades."},
            {"name": "Al-Fashir & Darfur Sieges", "type": "Catastrophic Humanitarian Flashpoint", "desc": "RSF offensive to capture Al-Fashir, the last SAF stronghold in Darfur, accompanied by severe civilian displacement."},
            {"name": "Port Sudan & Red Sea Logistics Perimeter", "type": "Administrative Red Sea Sanctuary", "desc": "Heavily fortified coastal enclave hosting government ministries, foreign embassies, and international humanitarian operations."}
        ],
        "summary": "High-intensity civil conflict threatening the fragmentation of Africa’s third-largest country and inviting foreign proxy warfare."
    },
    "strategicLocations": {
        "isAvailable": True,
        "list": [
            {"name": "Port Sudan (Bashayer Oil Terminal)", "type": "Sole Strategic Maritime Seaport", "importance": "Lifeline port handling all imports, exports, and South Sudanese crude oil transit to world markets."},
            {"name": "Confluence of Blue & White Nile (Khartoum)", "type": "Hydrological & Strategic Epicenter", "importance": "Where the Blue Nile from Ethiopia joins the White Nile from Lake Victoria to form the main Nile River."},
            {"name": "Merowe Dam", "type": "Major Hydroelectric Infrastructure", "importance": "Largest hydroelectric dam in Sudan producing 1,250 MW of electricity on the main Nile River."}
        ]
    },
    "indiaImpact": {
        "isAvailable": True,
        "strategicTies": "India shares historic and cordial ties with Sudan, supporting its sovereignty and maintaining an active diplomatic presence in Port Sudan.",
        "trade": "Bilateral trade stood at $1.5 Billion USD prior to hostilities, with India supplying pharmaceuticals, machinery, and food grains while importing gold and sesame.",
        "energy": "ONGC Videsh (OVL) invested over $2.5 Billion in Sudanese oil fields (Block 1, 2, and 4) and constructed the 741-km Khartoum-Port Sudan multi-product pipeline.",
        "diaspora": "India executed the daring Operation Kaveri in April-May 2023, utilizing INS Sumedha, INS Teg, and IAF C-130J aircraft to safely evacuate 4,097 people (including 3,862 Indians).",
        "summary": "Sudan’s Red Sea coastline directly faces the sea lines of communication linking India with Europe, making Sudanese maritime stability essential for Indian Ocean trade security."
    }
}

# 14. SOMALIA (SOM)
countries["SOM"] = {
    "id": "SOM",
    "name": "Somalia",
    "officialName": "Federal Republic of Somalia (Jamhuuriyadda Federaalka Soomaaliya)",
    "commonName": "Somalia",
    "capital": "Mogadishu",
    "capitalCoords": {"name": "Mogadishu", "lat": 2.0469, "lng": 45.3182},
    "capitalAdmin": {
        "role": "Federal Capital of Somalia",
        "political": "Seat of Villa Somalia (Presidential Palace), Federal Parliament, and Supreme Court.",
        "geographic": "2.05°N, 45.32°E situated along the Indian Ocean coastline of the Horn of Africa.",
        "strategic": "Heavily fortified headquarters of the African Union Transition Mission in Somalia (ATMIS) and Somali National Armed Forces."
    },
    "region": "Africa",
    "subregion": "Horn of Africa / Indian Ocean Littoral",
    "flag": "🇸🇴",
    "lat": 5.1521,
    "lng": 46.1996,
    "area": "637,657 km²",
    "population": "18.1 Million",
    "politicalSystemType": "Federal Parliamentary Republic (Clan-Based 4.5 Power-Sharing Formula)",
    "currency": "Somali Shilling (SOS / Sh)",
    "languages": "Somali and Arabic (Both Official)",
    "timeZones": "UTC+3 (EAT)",
    "tagline": "Guardian of the Horn of Africa & Longest Coastline in Mainland Africa",
    "overview": {
        "beginner": "Somalia is situated in the Horn of Africa, commanding the longest coastline on the African mainland (over 3,300 km) along the Indian Ocean and Gulf of Aden. Emerging from decades of state collapse, Somalia is rebuilding federal governance while combating the Al-Shabaab insurgency and disputing maritime agreements with landlocked Ethiopia.",
        "advanced": "The Federal Republic of Somalia commands the northern approach to the Western Indian Ocean and the eastern entrance to the Gulf of Aden, flanking all commercial traffic transiting the Bab el-Mandeb chokepoint. While the Federal Government in Mogadishu has expanded territorial control with African Union (ATMIS) support, it faces two profound geopolitical challenges: the resilient Al-Shabaab terrorist network and deep sovereignty friction stemming from landlocked Ethiopia's 2024 Memorandum of Understanding with the self-declared breakaway Republic of Somaliland to lease a naval base at the port of Berbera."
    },
    "politicalSystem": {
        "isAvailable": True,
        "type": "Federal Parliamentary Republic under Clan Power-Sharing Model",
        "constitution": "Provisional Constitution of the Federal Republic of Somalia (2012, amended 2024)",
        "branches": [
            {"name": "President", "role": "Head of State elected by the Federal Parliament, directing foreign policy and armed forces."},
            {"name": "Prime Minister & Cabinet", "role": "Head of Government leading the executive ministries."},
            {"name": "Federal Parliament", "role": "Bicameral body consisting of the 54-seat Upper House (Senate) and 275-seat House of the People."}
        ],
        "currentLeadership": {
            "headOfState": "Hassan Sheikh Mohamud (President)",
            "headOfGovernment": "Hamza Abdi Barre (Prime Minister)"
        },
        "rulingParty": "Union for Peace and Development Party (UPD)",
        "oppositionParties": ["Himilo Qaran", "Wadajir Party", "Puntland regional leadership"],
        "parliamentDetails": "Federal Parliament of Somalia sitting in Mogadishu.",
        "recentElections": "Presidential election conducted in May 2022; constitutional amendments passed in 2024 preparing for direct universal suffrage."
    },
    "geographyBorders": {
        "landArea": "637,657 km²",
        "location": "Easternmost tip of Africa (Horn of Africa), bounded by the Gulf of Aden to the north and Indian Ocean to the east.",
        "continent": "Africa",
        "coastline": "3,333 km (Longest on the African mainland)",
        "majorOceans": ["Indian Ocean Basin", "Gulf of Aden Approaches"],
        "topography": "Primarily arid to semi-arid plateaus, plains, and highlands, intersected by the southern Juba and Shabelle river basins.",
        "rivers": ["Juba River", "Shabelle River (Both originating in the Ethiopian highlands)"],
        "mountains": ["Shimbiris (Karkaar Mountains: 2,450 m, highest peak in northern Somalia)"],
        "seas": ["Indian Ocean", "Gulf of Aden", "Guardafui Channel"],
        "climates": ["Arid to semi-arid desert climate with monsoonal rainfall regimes"],
        "landBorders": ["Ethiopia (1,640 km)", "Kenya (684 km)", "Djibouti (61 km)"],
        "maritimeBorders": ["Maritime boundary with Kenya settled by the International Court of Justice (ICJ) in 2021; EEZ facing Yemen across Gulf of Aden"]
    },
    "economy": {
        "gdpNominal": "$11.8 Billion USD",
        "gdpPPP": "$32.0 Billion USD",
        "gdpPerCapita": "$650 USD",
        "gdpGrowth": "+3.7% (Boosted by international debt relief under the HIPC Initiative)",
        "currency": "Somali Shilling (SOS), with ubiquitous adoption of US dollar mobile money systems (EVC Plus, Sahal)",
        "majorIndustries": ["Livestock Export (Camels, Sheep, Goats)", "Telecommunications & Mobile Banking", "Commercial Fishing & Marine Resources", "Money Remittances (Hawala)", "Agriculture (Bananas, Sesame)"],
        "majorExports": ["Live Animals (Primary export to Gulf states)", "Sheep and Goat Skins", "Gold & Scrap Metal", "Fish Products", "Frankincense & Myrrh"],
        "majorImports": ["Cereal Grains & Rice", "Sugar & Sweeteners", "Construction Materials", "Refined Petroleum", "Electronics"],
        "energyPosition": "Developing extensive renewable solar and off-grid wind resources; significant unexploited offshore hydrocarbon potential.",
        "naturalResources": ["Extensive Offshore Fisheries", "Uranium", "Iron Ore", "Bauxite", "Copper", "Salt", "Natural Gas & Petroleum (Offshore exploration blocks)"],
        "tradeOrgs": ["East African Community (EAC, Joined March 2024)", "Arab League", "African Union", "COMESA"],
        "economicStrategicImportance": "Unrivaled geographic maritime frontage overlooking Gulf of Aden shipping; diaspora remittances inject over $1.5 Billion annually.",
        "indiaEconomicConnection": "Major importer of Indian rice, sugar, pharmaceuticals, and two-wheelers; historical commercial ties dating back centuries.",
        "majorTradingPartners": ["United Arab Emirates", "Saudi Arabia", "India", "China", "Turkey", "Kenya"]
    },
    "military": {
        "isAvailable": True,
        "expenditure": "$320 Million USD (~2.7% of GDP)",
        "manpowerActive": "Somali National Army (~40,000 troops) supported by ATMIS / AUSSOM African Union troops",
        "manpowerReserve": "Regional police units, Darwish state paramilitary forces, and allied local clan militias (Macawisley)",
        "doctrine": "Counter-insurgency, clearing rural strongholds, protecting federal supply lines, and building maritime domain awareness against illegal fishing and piracy.",
        "majorEquipment": ["BMC Kirpi Mine-Resistant Ambush Protected (MRAP) Vehicles", "Bayraktar TB2 Combat Drones", "Type 56 Assault Rifles", "DShK Heavy Machine Guns", "Light Maritime Patrol Boats"],
        "nuclearStatus": "Non-Nuclear State (Party to Non-Proliferation Treaty and Pelindaba Treaty)",
        "alliances": ["Comprehensive Defense and Economic Cooperation Pact with Turkey (2024 maritime security deal)", "East African Community member"]
    },
    "relations": {
        "isAvailable": True,
        "main": [
            {"id": "SOM_TUR", "country": "Turkey", "countryCode": "TUR", "status": "Premier Strategic Security & Development Partner", "summary": "Operates TURKSOM (Turkey's largest overseas military base in Mogadishu); signed 10-year maritime defense pact to protect Somali territorial waters."},
            {"id": "SOM_ETH", "country": "Ethiopia", "countryCode": "ETH", "status": "Severe Diplomatic Crisis & Sovereignty Dispute", "summary": "Relations deteriorated following Ethiopia's MoU with breakaway Somaliland seeking access to Berbera port in exchange for recognition."},
            {"id": "SOM_EGY", "country": "Egypt", "countryCode": "EGY", "status": "Strategic Security & Military Partner", "summary": "Signed bilateral defense pact in 2024; Egypt deployed military advisors and pledged troops to the new African Union mission."},
            {"id": "SOM_IND", "country": "India", "countryCode": "IND", "status": "Historic Maritime & Counter-Piracy Partner", "summary": "Indian Navy conducts high-tempo counter-piracy patrols in Gulf of Aden, rescuing hijacked Somali and international dhows."}
        ],
        "searchable": [
            {"id": "SOM_ARE", "country": "United Arab Emirates", "countryCode": "ARE", "summary": "Operates training facilities for Somali security forces; manages port concession at Bosaso through DP World."},
            {"id": "SOM_USA", "country": "United States", "countryCode": "USA", "status": "Counter-Terrorism Partner", "summary": "US Africa Command (AFRICOM) provides airstrikes and trains elite Danab special forces brigades against Al-Shabaab."}
        ]
    },
    "currentTensions": {
        "isAvailable": True,
        "activeFlashpoints": [
            {"name": "Somaliland Berbera Port MoU Standoff", "type": "National Sovereignty & Territorial Crisis", "desc": "Mogadishu fiercely rejects Ethiopia's unilateral maritime port deal with breakaway Somaliland as a violation of territorial integrity."},
            {"name": "Al-Shabaab Rural Insurgency", "type": "Active Counter-Terrorism Front", "desc": "Continuous military offensives in Galmudug and Hirshabelle states accompanied by suicide vehicle attacks in urban centers."},
            {"name": "Gulf of Aden & Guardafui Piracy Resurgence", "type": "Maritime Piracy Threat", "desc": "Opportunistic hijackings of commercial dhows and bulk carriers by pirate gangs off Puntland coast."}
        ],
        "summary": "Multi-dimensional struggle defending sovereign territorial boundaries while countering violent extremism and securing Africa's longest coastline."
    },
    "strategicLocations": {
        "isAvailable": True,
        "list": [
            {"name": "Port of Mogadishu", "type": "Primary Commercial Maritime Port", "importance": "Main seaport handling the vast majority of Somali imports, managed under international modernization concession by Albayrak Group."},
            {"name": "Guardafui Channel (Cape Guardafui)", "type": "Global Oceanic Chokepoint", "importance": "Northeastern maritime tip of Africa where ships round into the Gulf of Aden; key node for maritime domain surveillance."},
            {"name": "TURKSOM Military Academy", "type": "Major Foreign Military Base", "importance": "Turkey's largest overseas military installation, responsible for training a substantial portion of the Somali National Armed Forces officer corps."}
        ]
    },
    "indiaImpact": {
        "isAvailable": True,
        "strategicTies": "India was among the first nations to establish diplomatic ties with Somalia upon its independence in 1960, consistently supporting its federal unity and territorial sovereignty.",
        "trade": "Bilateral trade reached $1.1 Billion USD, dominated by Indian exports of non-basmati rice, sugar, pharmaceuticals, and electrical machinery.",
        "energy": "India provides technical cooperation and academic training scholarships to Somali maritime and agricultural officials.",
        "diaspora": "Historic presence of Indian merchants in Mogadishu, Kismayo, and Berbera dating back to the dhow trade of the 19th century.",
        "summary": "The Indian Navy acts as the primary guardian of maritime security off the Somali coast, carrying out celebrated anti-piracy interceptions including the liberation of the hijacked MV Ruen in March 2024 and rescue of 17 crew members."
    }
}

# 15. ETHIOPIA (ETH)
countries["ETH"] = {
    "id": "ETH",
    "name": "Ethiopia",
    "officialName": "Federal Democratic Republic of Ethiopia (Ityopp'iya Fēdēralawī Dēmokirasīyawī Rīpebilīk)",
    "commonName": "Ethiopia",
    "capital": "Addis Ababa",
    "capitalCoords": {"name": "Addis Ababa", "lat": 9.0320, "lng": 38.7482},
    "capitalAdmin": {
        "role": "Diplomatic & Political Capital of Africa",
        "political": "Headquarters of the African Union (AU), UN Economic Commission for Africa (UNECA), and Federal Parliament.",
        "geographic": "9.03°N, 38.75°E situated in the Ethiopian highlands at an elevation of 2,355 m (world's 4th highest capital).",
        "strategic": "Apex political and intelligence command center directing national development and regional Horn of Africa security."
    },
    "region": "Africa",
    "subregion": "Horn of Africa / East Africa",
    "flag": "🇪🇹",
    "lat": 9.1450,
    "lng": 40.4897,
    "area": "1,104,300 km²",
    "population": "126.5 Million (World's most populous landlocked country, 2nd in Africa)",
    "politicalSystemType": "Federal Parliamentary Republic (Ethnic Federalism Model)",
    "currency": "Ethiopian Birr (ETB)",
    "languages": "Amharic (Federal Working), Oromo, Tigrinya, Somali, Afar, English",
    "timeZones": "UTC+3 (EAT)",
    "tagline": "Ancient Highland Civilization, Horn of Africa Hegemon & BRICS Member",
    "overview": {
        "beginner": "Ethiopia is a populous nation in the Horn of Africa with an ancient history as one of the few African countries never colonized by European powers. As the world's most populous landlocked country, Ethiopia has achieved rapid economic growth, completed Africa's largest hydroelectric dam (GERD), and joined the BRICS grouping.",
        "advanced": "The Federal Democratic Republic of Ethiopia commands the strategic high ground of the Horn of Africa, source of over 85% of the Nile River's water through the Blue Nile. Having lost its Red Sea coastline upon Eritrea's independence in 1993, landlocked Ethiopia has relied almost exclusively on Djibouti for 95% of its foreign maritime trade. Under Prime Minister Abiy Ahmed, Ethiopia has pursued bold geopolitical maneuvers: filling the controversial $4.8 Billion Grand Ethiopian Renaissance Dam (GERD) despite fierce Egyptian opposition, signing a contentious port deal with Somaliland, and joining BRICS in 2024."
    },
    "politicalSystem": {
        "isAvailable": True,
        "type": "Federal Parliamentary Representative Democratic Republic",
        "constitution": "1995 Constitution of the Federal Democratic Republic of Ethiopia",
        "branches": [
            {"name": "Prime Minister", "role": "Head of Government, Chief Executive, and Commander-in-Chief of the Ethiopian National Defense Force."},
            {"name": "President", "role": "Ceremonial Head of State elected by joint parliamentary session."},
            {"name": "Federal Parliamentary Assembly", "role": "Bicameral body consisting of the 547-seat House of Peoples' Representatives and 153-seat House of Federation."}
        ],
        "currentLeadership": {
            "headOfState": "Taye Atske Selassie (President)",
            "headOfGovernment": "Abiy Ahmed (Prime Minister)"
        },
        "rulingParty": "Prosperity Party (Merged multi-ethnic ruling party)",
        "oppositionParties": ["Tigray People's Liberation Front (TPLF)", "Oromo Federalist Congress", "Ezema", "National Movement of Amhara"],
        "parliamentDetails": "Federal Parliamentary Assembly sitting in Addis Ababa.",
        "recentElections": "General elections held in June 2021 giving the Prosperity Party a decisive parliamentary majority."
    },
    "geographyBorders": {
        "landArea": "1,104,300 km²",
        "location": "Horn of Africa, completely landlocked, bounded by Eritrea to the north, Djibouti and Somalia to the east, Kenya to the south, and Sudan/South Sudan to the west.",
        "continent": "Africa",
        "coastline": "0 km (Landlocked since 1993)",
        "majorOceans": ["Access to Red Sea & Indian Ocean via Djibouti port and proposed Berbera corridor"],
        "topography": "High central plateau divided by the Great Rift Valley, with rugged mountain ranges, deep river gorges, and lowlands on the periphery.",
        "rivers": ["Blue Nile (Abay River, originates at Lake Tana)", "Omo River", "Awash River", "Tekezé River"],
        "mountains": ["Ras Dashen (Simien Mountains: 4,550 m, highest peak in Ethiopia)"],
        "seas": ["No direct sea access; relies on ports of Djibouti, Berbera (Somaliland), and Port Sudan"],
        "climates": ["Highland temperate climate (Dega) in central plateau; tropical wet in southwest; arid desert in eastern Danakil Depression"],
        "landBorders": ["Eritrea (1,033 km)", "Djibouti (342 km)", "Somalia (1,640 km)", "Kenya (867 km)", "South Sudan (1,299 km)", "Sudan (744 km)"],
        "maritimeBorders": ["None (Landlocked State)"]
    },
    "economy": {
        "gdpNominal": "$163.7 Billion USD (Fastest growing major economy in East Africa)",
        "gdpPPP": "$395.0 Billion USD",
        "gdpPerCapita": "$1,290 USD",
        "gdpGrowth": "+6.2%",
        "currency": "Ethiopian Birr (ETB, transitioning to market-determined floating exchange rate)",
        "majorIndustries": ["Agriculture & Coffee Production", "Hydroelectric Power Generation (GERD)", "Textiles & Garment Manufacturing", "Aviation & Logistics (Ethiopian Airlines)", "Cement & Construction Materials"],
        "majorExports": ["Coffee (Arabica birthplace, top export)", "Oilseeds & Sesame", "Cut Flowers & Horticulture", "Gold", "Chat", "Textiles"],
        "majorImports": ["Machinery & Electrical Equipment", "Refined Petroleum", "Fertilizer & Chemicals", "Commercial Aircraft", "Wheat"],
        "energyPosition": "Emerging green energy giant of Africa; GERD generating over 5,150 MW upon full commissioning, exporting surplus power to Kenya, Sudan, and Djibouti.",
        "naturalResources": ["Massive Hydroelectric Potential", "Potash (Danakil)", "Gold", "Natural Gas (Ogaden Basin)", "Platinum", "Tantalum", "Fertile Highlands Farmland"],
        "tradeOrgs": ["African Union", "COMESA", "BRICS (Acceded Jan 2024)", "AfCFTA"],
        "economicStrategicImportance": "African diplomatic hub and continent's premier aviation powerhouse through state-owned Ethiopian Airlines.",
        "indiaEconomicConnection": "India is among the top 3 foreign investors in Ethiopia (over $5 Billion in textile manufacturing, agriculture, and pharmaceuticals); pioneer of bilateral lines of credit.",
        "majorTradingPartners": ["China", "India", "United States", "United Arab Emirates", "Saudi Arabia", "Germany"]
    },
    "military": {
        "isAvailable": True,
        "expenditure": "$1.5 Billion USD (~1.0% of GDP)",
        "manpowerActive": "180,000 active military personnel (Ethiopian National Defense Force)",
        "manpowerReserve": "Special regional police forces and demobilized veterans",
        "doctrine": "Territorial integrity defense, regional counter-insurgency, securing Nile hydrological assets, and re-establishing a sovereign naval force in the Red Sea.",
        "majorEquipment": ["Su-27 & Su-30 Flanker Air Superiority Fighters", "Bayraktar TB2 and Wing Loong Combat Drones", "Pantsir-S1 Air Defense Systems", "T-72 Main Battle Tanks", "AR2 300mm Multiple Rocket Launchers"],
        "nuclearStatus": "Non-Nuclear State (Party to Non-Proliferation Treaty and Pelindaba Treaty)",
        "alliances": ["Comprehensive Strategic Partnership with China", "Strategic Partnership with UAE", "BRICS Member State"]
    },
    "relations": {
        "isAvailable": True,
        "main": [
            {"id": "ETH_CHN", "country": "China", "countryCode": "CHN", "status": "All-Weather Strategic Partner & Infrastructure Creditor", "summary": "Financed and built the landmark $4.5B Addis Ababa-Djibouti electrified railway, African Union headquarters, and urban light rail."},
            {"id": "ETH_EGY", "country": "Egypt", "countryCode": "EGY", "status": "Existential Hydrological Standoff", "summary": "Fierce dispute over the filling and operation of the Grand Ethiopian Renaissance Dam (GERD), which Cairo views as a water security threat."},
            {"id": "ETH_SOM", "country": "Somalia", "countryCode": "SOM", "status": "Maritime Sovereignty Crisis", "summary": "Severe diplomatic fallout following Ethiopia's MoU with breakaway Somaliland seeking 20 km of coastline for a naval base at Berbera."},
            {"id": "ETH_IND", "country": "India", "countryCode": "IND", "status": "Historic Diplomatic & Economic Partner", "summary": "India is a top investor in Ethiopian manufacturing and industrial parks; shared membership in BRICS and Global South forums."}
        ],
        "searchable": [
            {"id": "ETH_ERI", "country": "Eritrea", "countryCode": "ERI", "summary": "Complicated post-war dynamic; joint combatants in the Tigray conflict now experiencing strained relations over border demarcation and regional influence."},
            {"id": "ETH_DJI", "country": "Djibouti", "countryCode": "DJI", "summary": "Critical maritime transit lifeline handling over 95% of Ethiopian international commerce via port and railway links."}
        ]
    },
    "currentTensions": {
        "isAvailable": True,
        "activeFlashpoints": [
            {"name": "Somaliland Berbera Port MoU", "type": "Red Sea Access Standoff", "desc": "International controversy surrounding Ethiopia's agreement with Somaliland to lease naval and commercial port access in exchange for recognition."},
            {"name": "GERD Dam Nile River Basin", "type": "Transboundary Hydrological Crisis", "desc": "Unilateral impoundment of the 74-billion-cubic-meter reservoir on the Blue Nile causing recurring diplomatic friction with Egypt and Sudan."},
            {"name": "Amhara & Oromia Internal Security", "type": "Regional Militia Insurgencies", "desc": "Ongoing security operations against Fano militias in Amhara and the Oromo Liberation Army (OLA) in central Ethiopia."}
        ],
        "summary": "Balancing economic modernization, massive renewable energy infrastructure, and pursuit of sovereign sea access amidst regional tensions."
    },
    "strategicLocations": {
        "isAvailable": True,
        "list": [
            {"name": "Grand Ethiopian Renaissance Dam (GERD)", "type": "Africa's Largest Hydroelectric Dam", "importance": "Massive 5,150 MW gravity dam on the Blue Nile near the Sudanese border, transforming Ethiopian electrical exports and Nile geopolitics."},
            {"name": "Addis Ababa-Djibouti Electrified Railway", "type": "Strategic Economic Lifeline Corridor", "importance": "759-km standard-gauge electrified railway carrying over 90% of landlocked Ethiopia's trade to the deepwater port of Doraleh in Djibouti."},
            {"name": "Bishoftu Air Base (Harar Meda)", "type": "Headquarters of Ethiopian Air Force", "importance": "Command center for Ethiopian combat aviation, fighter maintenance, and unmanned aerial vehicle (UAV) strike operations."}
        ]
    },
    "indiaImpact": {
        "isAvailable": True,
        "strategicTies": "India and Ethiopia enjoy cordial relations dating back over two millennia, formalizing diplomatic ties upon Indian independence in 1948 and cooperating within BRICS.",
        "trade": "Bilateral trade reached $1.8 Billion USD, with India exporting pharmaceuticals, steel, machinery, and electrical equipment.",
        "energy": "India has extended over $1 Billion in concessional export lines of credit, financing vital sugar factories, rural electrification, and water distribution networks.",
        "diaspora": "Over 10,000 Indian professionals reside in Ethiopia, including university faculty teaching across Ethiopian federal universities and business leaders.",
        "summary": "Indian companies represent one of the largest foreign employment generators in Ethiopia, operating in industrial parks, agriculture, and engineering, underscoring New Delhi's commitment to South-South economic partnership."
    }
}

# 16. MYANMAR (MMR)
countries["MMR"] = {
    "id": "MMR",
    "name": "Myanmar",
    "officialName": "Republic of the Union of Myanmar (Pyidaunzu Thanmăda Myăma Nainngandaw)",
    "commonName": "Myanmar (Burma)",
    "capital": "Naypyidaw",
    "capitalCoords": {"name": "Naypyidaw", "lat": 19.7633, "lng": 96.0785},
    "capitalAdmin": {
        "role": "Purpose-Built Administrative Capital of Myanmar",
        "political": "Seat of the State Administration Council (SAC), Presidential Palace, and military ministries.",
        "geographic": "19.76°N, 96.08°E situated inland in the central Mandalay region.",
        "strategic": "Heavily fortified military stronghold featuring deep underground bunkers, isolated from urban coastal unrest."
    },
    "region": "Indo-Pacific",
    "subregion": "Southeast Asia / Bay of Bengal Littoral",
    "flag": "🇲🇲",
    "lat": 21.9162,
    "lng": 95.9560,
    "area": "676,578 km² (Largest country in mainland Southeast Asia)",
    "population": "54.5 Million",
    "politicalSystemType": "Military Junta (State Administration Council) under Nationwide Civil War",
    "currency": "Myanmar Kyat (MMK / K)",
    "languages": "Burmese (Official), Shan, Karen, Kachin, Chin, Mon, Rakhine",
    "timeZones": "UTC+6:30 (MMT)",
    "tagline": "Gateway Between South & Southeast Asia, Bay of Bengal Strategic Pivot",
    "overview": {
        "beginner": "Myanmar (formerly Burma) is the largest country in mainland Southeast Asia, bordering India, Bangladesh, China, Laos, and Thailand along the Bay of Bengal. Since the February 2021 military coup, Myanmar has been engulfed in nationwide armed resistance, with ethnic armed groups capturing key border trade routes.",
        "advanced": "Myanmar commands the critical overland and maritime land bridge connecting South Asia to the ASEAN realm, offering China a direct Indian Ocean bypass route via the deepwater port of Kyaukpyu in Rakhine State. Following the 2021 coup against Aung San Suu Kyi's elected government, Myanmar erupted into a multi-front civil war between the military junta (Tatmadaw) and the National Unity Government (NUG) allied with powerful Ethnic Armed Organizations (EAOs). Historic rebel offensives (Operation 1027) have stripped the junta of border trade crossings with China, India, and Thailand, directly jeopardizing major connectivity corridors such as India's Kaladan Multi-Modal Project."
    },
    "politicalSystem": {
        "isAvailable": True,
        "type": "Military Junta under State of Emergency amidst Full-Scale Civil Conflict",
        "constitution": "2008 Constitution of Myanmar (Contested and suspended in practice)",
        "branches": [
            {"name": "State Administration Council (SAC)", "role": "Ruling military junta chaired by Senior General Min Aung Hlaing exercising executive decrees."},
            {"name": "National Unity Government (NUG)", "role": "Parallel civilian government in exile representing ousted democratic lawmakers and civil defense forces."},
            {"name": "Ethnic Armed Organizations (EAOs)", "role": "Autonomous military administrations governing substantial border territories (Arakan Army, MNDAA, TNLA, KIA)."}
        ],
        "currentLeadership": {
            "headOfState": "Min Aung Hlaing (Chairman, State Administration Council & Acting President)",
            "headOfGovernment": "Min Aung Hlaing (Prime Minister of Military Caretaker Government)"
        },
        "rulingParty": "Union Solidarity and Development Party (USDP, military proxy)",
        "oppositionParties": ["National League for Democracy (NLD, dissolved by junta)", "National Unity Party"],
        "parliamentDetails": "Pyidaungsu Hluttaw dissolved following the 2021 coup.",
        "recentElections": "November 2020 democratic elections annulled by military coup; proposed junta elections repeatedly postponed."
    },
    "geographyBorders": {
        "landArea": "676,578 km²",
        "location": "Mainland Southeast Asia, bordering the Bay of Bengal and Andaman Sea to the southwest, India/Bangladesh to the northwest, China to the northeast, and Laos/Thailand to the east.",
        "continent": "Asia",
        "coastline": "1,930 km along the Bay of Bengal and Andaman Sea",
        "majorOceans": ["Indian Ocean Basin via Bay of Bengal and Andaman Sea"],
        "topography": "Central lowlands formed by the Irrawaddy River valley, ringed by steep mountain ranges on all sides: Arakan Mountains in the west, Shan Plateau in the east, and Himalayas in the north.",
        "rivers": ["Irrawaddy (Ayeyarwady) River (Lifeline of Myanmar)", "Salween (Thanlwin) River", "Chindwin River", "Kaladan River"],
        "mountains": ["Hkakabo Razi (5,881 m, highest mountain in Southeast Asia, located in northern Kachin State)"],
        "seas": ["Bay of Bengal", "Andaman Sea", "Gulf of Martaban"],
        "climates": ["Tropical monsoon climate with heavy monsoon rainfall and dry winter season"],
        "landBorders": ["India (1,643 km)", "Bangladesh (271 km)", "China (2,185 km)", "Thailand (2,416 km)", "Laos (238 km)"],
        "maritimeBorders": ["Maritime boundary with Bangladesh and India in the northern Bay of Bengal (settled by ITLOS in 2012)"]
    },
    "economy": {
        "gdpNominal": "$64.8 Billion USD",
        "gdpPPP": "$260.0 Billion USD",
        "gdpPerCapita": "$1,180 USD",
        "gdpGrowth": "+1.0% (Severely constrained by civil war, Western sanctions, and infrastructure destruction)",
        "currency": "Myanmar Kyat (MMK, sharp informal market depreciation)",
        "majorIndustries": ["Natural Gas Extraction & Pipeline Export (Yadana, Shwe)", "Garment & Footwear Manufacturing", "Jade, Ruby & Gemstone Mining", "Rare Earth Elements Extraction (Kachin State)", "Agriculture & Forestry (Teak)"],
        "majorExports": ["Offshore Natural Gas (piped to Thailand and China)", "Garments & Textiles", "Heavy Rare Earth Oxides", "Agricultural Goods (Rice, Dried Legumes, Corn)", "Jade & Gemstones"],
        "majorImports": ["Refined Petroleum Products", "Industrial Machinery", "Fabrics & Yarn for Garment Processing", "Fertilizer", "Motorcycles & Vehicles"],
        "energyPosition": "Significant offshore natural gas producer in the Bay of Bengal and Gulf of Martaban; pipelines supply ~20% of Thailand's natural gas and feed southwest China via Yunnan pipeline.",
        "naturalResources": ["Natural Gas", "Jade & Gemstones (World's top source of jadeite)", "Heavy Rare Earth Elements (Crucial global supplier for magnets)", "Teak & Timber", "Tin", "Copper", "Zinc"],
        "tradeOrgs": ["ASEAN (Subject to diplomatic downgrades)", "BIMSTEC", "WTO", "RCEP"],
        "economicStrategicImportance": "Critical Indian Ocean energy bypass for China; major global source of heavy rare earth elements essential for green tech.",
        "indiaEconomicConnection": "Anchor of India's 'Act East' policy; developing the Kaladan Multi-Modal Transit Transport Project connecting Kolkata to Mizoram via Sittwe port.",
        "majorTradingPartners": ["China", "Thailand", "India", "Singapore", "Japan", "South Korea"]
    },
    "military": {
        "isAvailable": True,
        "expenditure": "$2.7 Billion USD (~4.0% of GDP)",
        "manpowerActive": "Tatmadaw estimated at 150,000–200,000 active troops (heavily depleted by battlefield casualties and desertions)",
        "manpowerReserve": "Border Guard Forces and newly enforced mandatory conscription laws",
        "doctrine": "Counter-insurgency, brutal four-cuts doctrine, reliance on air strikes, heavy artillery, and armored operations to hold urban centers.",
        "majorEquipment": ["Su-30SME & MiG-29 Fighter Aircraft", "JF-17 Thunder Fighter Jets", "Mi-35P & Mi-17 Attack/Transport Helicopters", "Type 59D & T-72S Main Battle Tanks", "BTR-3U Armored Personnel Carriers", "Kilo-Class & Type 035 Submarines"],
        "nuclearStatus": "Non-Nuclear State (Party to Non-Proliferation Treaty and SEANWFZ)",
        "alliances": ["Diplomatically and militarily supported by Russia and China; ASEAN membership diplomatically suspended at political summit level"]
    },
    "relations": {
        "isAvailable": True,
        "main": [
            {"id": "MMR_CHN", "country": "China", "countryCode": "CHN", "status": "Paramount Economic & Security Guarantor", "summary": "Controls the $1.3B Kyaukpyu deepwater port project and dual oil/gas pipelines; maintains relationships with both the military junta and northern border ethnic armed groups."},
            {"id": "MMR_RUS", "country": "Russia", "countryCode": "RUS", "status": "Premier Arms Supplier & Nuclear Partner", "summary": "Primary source of advanced fighter jets, attack helicopters, and air defense; signed roadmap for small modular nuclear reactor research."},
            {"id": "MMR_IND", "country": "India", "countryCode": "IND", "status": "Strategic Neighbor & Multi-Modal Transit Link", "summary": "India balances security engagement with the junta to protect its 1,640 km border while safeguarding the Kaladan and Trilateral Highway projects."},
            {"id": "MMR_THA", "country": "Thailand", "countryCode": "THA", "status": "Key Border Trade & Energy Customer", "summary": "Purchases substantial piped natural gas; hosts over 2M displaced Myanmar workers and provides humanitarian border assistance."}
        ],
        "searchable": [
            {"id": "MMR_BGD", "country": "Bangladesh", "countryCode": "BGD", "summary": "Host to over 1 million Rohingya refugees who fled military clearances in Rakhine State; border security tensions persist."},
            {"id": "MMR_USA", "country": "United States", "countryCode": "USA", "status": "Sanctions & Democratic Support", "summary": "Imposes extensive sanctions on junta generals, state oil enterprise (MOGE), and provides non-lethal aid to the NUG under the BURMA Act."}
        ]
    },
    "currentTensions": {
        "isAvailable": True,
        "activeFlashpoints": [
            {"name": "Rakhine State & Kaladan Corridor", "type": "Arakan Army Offensive", "desc": "Arakan Army (AA) capturing major townships, encircling military bases, and threatening the Indian-developed port of Sittwe."},
            {"name": "Northern Shan State & China Border", "type": "Rebel Encirclement of Trade Routes", "desc": "Operation 1027 capture of key border trade crossings (Muse, Chinshwehaw) and junta regional command headquarters at Lashio."},
            {"name": "Sagaing & Karen Border Lands", "type": "People's Defense Force Guerrilla War", "desc": "Widespread asymmetric drone strikes, ambushes, and military air strikes displacing hundreds of thousands of civilians."}
        ],
        "summary": "Existential civil war threatening the total territorial fracturing of the Myanmar state along ethnic and regional fault lines."
    },
    "strategicLocations": {
        "isAvailable": True,
        "list": [
            {"name": "Port of Sittwe (Kaladan Project)", "type": "Deepwater Riverine Gateway", "importance": "Operationalized Indian-built port connecting Kolkata by sea to Myanmar, and via the Kaladan River to Mizoram in Northeast India."},
            {"name": "Port of Kyaukpyu (CMEC)", "type": "Chinese Strategic Indian Ocean Terminus", "importance": "Deepwater port and special economic zone housing the origin of dual pipelines pumping crude oil and gas directly to Kunming, China."},
            {"name": "Naypyidaw Military Fortress Citadel", "type": "Fortified Sovereign Command Nexus", "importance": "Sprawling military capital equipped with deep subterranean bunkers, anti-aircraft rings, and secure communications arrays."}
        ]
    },
    "indiaImpact": {
        "isAvailable": True,
        "strategicTies": "Myanmar is India’s sole land bridge to ASEAN and the cornerstone of both the 'Neighborhood First' and 'Act East' policies, sharing a 1,643 km border with four Northeast Indian states.",
        "trade": "Bilateral trade stands around $1.7 Billion USD, with India importing critical pulses (beans and pigeon peas) and wood products while exporting pharmaceuticals and machinery.",
        "energy": "India's ONGC Videsh and GAIL hold a combined 30% stake in Myanmar’s offshore Shwe gas project in the Bay of Bengal.",
        "diaspora": "Historic community of over 1.5 million people of Indian origin (PIOS) residing in Yangon, Mandalay, and central agricultural belts.",
        "summary": "Instability in Myanmar directly affects Indian national security: ethnic rebel advances in Chin and Rakhine states threaten India’s $500M Kaladan project, while refugee flows and insurgent safe havens strain border management in Mizoram and Manipur."
    }
}

# 17. VIETNAM (VNM)
countries["VNM"] = {
    "id": "VNM",
    "name": "Vietnam",
    "officialName": "Socialist Republic of Vietnam (Cộng hòa xã hội chủ nghĩa Việt Nam)",
    "commonName": "Vietnam",
    "capital": "Hanoi",
    "capitalCoords": {"name": "Hanoi", "lat": 21.0285, "lng": 105.8542},
    "capitalAdmin": {
        "role": "Sovereign Administrative & Party Capital of Vietnam",
        "political": "Seat of the Communist Party of Vietnam (CPV) Central Committee, National Assembly, Presidential Palace, and Government Office.",
        "geographic": "21.03°N, 105.85°E situated in the fertile Red River Delta in northern Vietnam.",
        "strategic": "Command center of the Vietnam People's Army (VPA) and Ministry of National Defence."
    },
    "region": "Indo-Pacific",
    "subregion": "Southeast Asia / South China Sea Littoral",
    "flag": "🇻🇳",
    "lat": 14.0583,
    "lng": 108.2772,
    "area": "331,212 km²",
    "population": "100.3 Million",
    "politicalSystemType": "Unitary One-Party Socialist Republic led by Communist Party of Vietnam",
    "currency": "Vietnamese Đồng (VND / ₫)",
    "languages": "Vietnamese (Official)",
    "timeZones": "UTC+7 (ICT)",
    "tagline": "Global High-Tech Supply Chain Hub & Master of Bamboo Diplomacy",
    "overview": {
        "beginner": "Vietnam is a dynamic, rapidly industrializing socialist nation in Southeast Asia with over 3,200 km of coastline along the South China Sea. Known for its remarkable economic transformation (Đổi Mới) and leading role in global electronics manufacturing, Vietnam balances delicate relations with China and the United States through its pragmatic 'Bamboo Diplomacy'.",
        "advanced": "The Socialist Republic of Vietnam commands the strategic western coastline of the South China Sea (East Sea), flanking primary global trade lanes and maintaining extensive island outposts in the Spratly Archipelago. Governed by the Communist Party of Vietnam (CPV), Hanoi executes a masterclass in strategic balancing known as 'Bamboo Diplomacy'—solid in root, flexible in branch. In a single 12-month span, Vietnam elevated its bilateral relations to the highest level of 'Comprehensive Strategic Partnership' with the United States, Japan, and Australia, while simultaneously welcoming China's leadership and maintaining historical defense ties with Russia and India."
    },
    "politicalSystem": {
        "isAvailable": True,
        "type": "One-Party Marxist-Leninist Socialist Republic",
        "constitution": "2013 Constitution of the Socialist Republic of Vietnam",
        "branches": [
            {"name": "Communist Party of Vietnam (CPV)", "role": "Vanguard party exercising supreme constitutional leadership through the General Secretary and Politburo."},
            {"name": "President & Prime Minister", "role": "Head of State (President) and Head of Government (Prime Minister) leading executive state administration."},
            {"name": "National Assembly (Quốc hội)", "role": "500-seat unicameral legislative parliament passing national laws, socioeconomic plans, and state appointments."}
        ],
        "currentLeadership": {
            "headOfState": "Lương Cường (President) / Tô Lâm (General Secretary of the CPV)",
            "headOfGovernment": "Phạm Minh Chính (Prime Minister)"
        },
        "rulingParty": "Communist Party of Vietnam (CPV)",
        "oppositionParties": ["None (Political opposition parties prohibited by law)"],
        "parliamentDetails": "National Assembly sitting in Ba Dinh Hall, Hanoi.",
        "recentElections": "National Assembly elections conducted in May 2021; 14th National Party Congress scheduled for early 2026."
    },
    "geographyBorders": {
        "landArea": "331,212 km²",
        "location": "Eastern edge of mainland Southeast Asia, bordering the South China Sea to the east and south, China to the north, and Laos/Cambodia to the west.",
        "continent": "Asia",
        "coastline": "3,260 km (Excluding islands)",
        "majorOceans": ["Pacific Ocean Basin via South China Sea (Biển Đông)"],
        "topography": "Elongated S-shaped terrain with rugged forested highlands (Annamite Range) covering 40%, bounded by two vast agricultural deltas: Red River Delta in the north and Mekong River Delta in the south.",
        "rivers": ["Mekong River (Cửu Long)", "Red River (Sông Hồng)", "Black River (Sông Đà)", "Đồng Nai River"],
        "mountains": ["Fansipan (3,147 m, highest peak in Indochina, Hoang Lien Son range)"],
        "seas": ["South China Sea (East Sea / Biển Đông)", "Gulf of Tonkin", "Gulf of Thailand"],
        "climates": ["Tropical in the south with monsoonal wet/dry seasons; humid subtropical in the north with cool winters"],
        "landBorders": ["China (1,297 km)", "Laos (2,161 km)", "Cambodia (1,158 km)"],
        "maritimeBorders": ["Gulf of Tonkin boundary settled with China in 2000; maritime claims across Paracel and Spratly archipelagos in the South China Sea"]
    },
    "economy": {
        "gdpNominal": "$433.3 Billion USD (Targeting $500B+)",
        "gdpPPP": "$1.43 Trillion USD",
        "gdpPerCapita": "$4,320 USD",
        "gdpGrowth": "+6.8% (Top economic growth performer in Asia)",
        "currency": "Vietnamese Đồng (VND)",
        "majorIndustries": ["Electronics, Smartphones & Semiconductor Packaging (Samsung, Intel, Foxconn)", "Textiles, Footwear & Apparel (Nike, Adidas)", "Agri-Food Processing (World's #1 Robusta Coffee, #2 Rice)", "Shipbuilding & Marine Equipment", "Automotive & Electric Vehicles (VinFast)"],
        "majorExports": ["Smartphones, Computers & Electronic Components", "Machinery & Equipment", "Footwear & Textiles", "Agricultural Products (Coffee, Rice, Cashews, Pepper)", "Seafood & Shrimp"],
        "majorImports": ["Integrated Circuits & Electronic Sub-assemblies", "Fabrics & Raw Cotton", "Refined Petroleum", "Plastics & Steel", "Production Machinery"],
        "energyPosition": "Rapid expansion of solar and offshore wind; transitioning from coal; offshore natural gas production (Ca Voi Xanh field).",
        "naturalResources": ["Rare Earth Elements (2nd largest reserves in the world, ~22M tons)", "Bauxite (3rd largest reserves)", "Titanium", "Coal (Anthracite)", "Offshore Petroleum & Natural Gas", "Hydropower"],
        "tradeOrgs": ["World Trade Organization (WTO)", "CPTPP", "RCEP", "EU-Vietnam Free Trade Agreement (EVFTA)", "APEC", "ASEAN"],
        "economicStrategicImportance": "Top destination for global supply chain diversification away from China ('China+1' strategy); controls world-class rare earth reserves.",
        "indiaEconomicConnection": "Bilateral trade reached $15 Billion USD; expanding partnership in defense patrol boat construction, pharmaceuticals, and oil exploration in the South China Sea.",
        "majorTradingPartners": ["United States (Largest export market)", "China (Largest import source)", "South Korea", "Japan", "European Union", "India"]
    },
    "military": {
        "isAvailable": True,
        "expenditure": "$8.2 Billion USD (~1.9% of GDP)",
        "manpowerActive": "482,000 active service members (People's Army of Vietnam - PAVN)",
        "manpowerReserve": "Over 5,000,000 militia and self-defense reserve forces",
        "doctrine": "Four No's Defense Policy: No military alliances, no foreign military bases, no siding with one country against another, and no use of force in international relations; asymmetric A2/AD coastal defense.",
        "majorEquipment": ["Su-30MK2 Flanker-G Strike Fighters", "Kilo-Class (Project 636.1) Advanced Diesel-Electric Submarines", "Gepard 3.9-Class Guided-Missile Frigates", "T-90S/SK Main Battle Tanks", "Bastion-P Mobile Coastal Defense Missile Systems (Yakhont)", "S-300PMU-1 Long-Range Air Defense Batteries"],
        "nuclearStatus": "Non-Nuclear State (Party to Non-Proliferation Treaty and SEANWFZ)",
        "alliances": ["Comprehensive Strategic Partnerships with India, Russia, China, US, Japan, South Korea, and Australia (Strict policy of non-alignment)"]
    },
    "relations": {
        "isAvailable": True,
        "main": [
            {"id": "VNM_CHN", "country": "China", "countryCode": "CHN", "status": "Comprehensive Strategic Cooperative Partnership", "summary": "Top economic trade partner; deep ideological party-to-party ties; managed friction over overlapping sovereignty claims in the South China Sea."},
            {"id": "VNM_USA", "country": "United States", "countryCode": "USA", "status": "Comprehensive Strategic Partnership (2023)", "summary": "Historic diplomatic upgrade; surging bilateral trade ($120B+), semiconductor supply chain investment, and coast guard cutter transfers."},
            {"id": "VNM_IND", "country": "India", "countryCode": "IND", "status": "Comprehensive Strategic Partner & Defense Anchor", "summary": "Deep strategic convergence on maritime security; India transferred fully operational guided-missile corvette INS Kirpan to Vietnam Navy in 2023."},
            {"id": "VNM_RUS", "country": "Russia", "countryCode": "RUS", "status": "Comprehensive Strategic Partner & Historic Arms Supplier", "summary": "Historic Cold War ally; supplier of over 80% of Vietnam’s military hardware (Kilo submarines, Su-30s, Gepard frigates); joint oil venture Vietsovpetro."}
        ],
        "searchable": [
            {"id": "VNM_JPN", "country": "Japan", "countryCode": "JPN", "summary": "Top infrastructure development partner; major provider of official development assistance (ODA) and maritime patrol vessels."},
            {"id": "VNM_PHL", "country": "Philippines", "countryCode": "PHL", "summary": "Signed landmark maritime cooperation agreements to prevent incidents in the contested Spratly Islands and enhance coast guard coordination."}
        ]
    },
    "currentTensions": {
        "isAvailable": True,
        "activeFlashpoints": [
            {"name": "Spratly Islands Island Reclamation", "type": "Maritime Fortification Expansion", "desc": "Accelerated Vietnamese land reclamation and harbor dredging across Barque Canada Reef and other occupied features in the South China Sea."},
            {"name": "Vanguard Bank (Bãi Tư Chính)", "type": "Offshore Hydrocarbon Standoff", "desc": "Recurrent intrusions by Chinese research vessels and coast guard flotillas into Vietnam’s sovereign EEZ gas exploration blocks."},
            {"name": "Mekong River Upstream Water Retention", "type": "Ecological & Transboundary Hydrological Crisis", "desc": "Upstream mega-dams in China and Laos altering seasonal river flow, causing severe saltwater intrusion in the agricultural Mekong Delta."}
        ],
        "summary": "Sophisticated balancing act asserting maritime sovereignty and international law in the East Sea while preserving vital trade with China."
    },
    "strategicLocations": {
        "isAvailable": True,
        "list": [
            {"name": "Cam Ranh Bay Deepwater Naval Base", "type": "World-Class Natural Deepwater Harbor", "importance": "Controls the central maritime flank of the South China Sea; home to Vietnam's 6 Kilo-class submarine fleet and international naval guest facility."},
            {"name": "Port of Hai Phong (Lach Huyen)", "type": "Northern International Deepwater Container Port", "importance": "Gateway for northern Vietnam's massive tech manufacturing export complex, handling direct container calls to the US and Europe."},
            {"name": "Spratly Island (Đảo Trường Sa Lớn)", "type": "Island Outpost & Runway Base", "importance": "Administrative center of Vietnam's Spratly holdings, featuring an expanded 1,300-meter airstrip and coastal radar installations."}
        ]
    },
    "indiaImpact": {
        "isAvailable": True,
        "strategicTies": "India and Vietnam share a deeply fraternal, trust-based 'Comprehensive Strategic Partnership' with defense and security cooperation as its primary pillar.",
        "trade": "Bilateral trade reached $15 Billion USD, driven by Indian exports of metals, machinery, and agricultural goods, and Vietnamese electronics and chemicals.",
        "energy": "India's ONGC Videsh (OVL) has operated in offshore oil Block 128 in the South China Sea for over two decades, reaffirming international legal rights in international waters despite Chinese objections.",
        "diaspora": "Growing Indian diaspora of business leaders, IT professionals, and restaurant entrepreneurs across Ho Chi Minh City and Hanoi.",
        "summary": "In an unprecedented move demonstrating deep defense convergence, India gifted the indigenously built active guided-missile corvette INS Kirpan to the Vietnam People's Navy in July 2023, accompanied by submarine crew training and defense credit lines."
    }
}

# 18. BANGLADESH (BGD)
countries["BGD"] = {
    "id": "BGD",
    "name": "Bangladesh",
    "officialName": "People's Republic of Bangladesh (Gônôprôjatôntrī Bangladesh)",
    "commonName": "Bangladesh",
    "capital": "Dhaka",
    "capitalCoords": {"name": "Dhaka", "lat": 23.8103, "lng": 90.4125},
    "capitalAdmin": {
        "role": "Sovereign Administrative & Economic Capital of Bangladesh",
        "political": "Seat of the Chief Adviser's Office (Jamuna), President (Bangabhaban), and Jatiya Sangsad (National Parliament).",
        "geographic": "23.81°N, 90.41°E located in the central Ganges-Brahmaputra delta plain.",
        "strategic": "Apex political and economic command nexus overseeing nationwide institutional reform and border security."
    },
    "region": "South Asia",
    "subregion": "South Asia / Bay of Bengal Littoral",
    "flag": "🇧🇩",
    "lat": 23.6850,
    "lng": 90.3563,
    "area": "148,460 km²",
    "population": "173.0 Million (World's 8th most populous country, highest population density among major states)",
    "politicalSystemType": "Unitary Parliamentary Republic under Interim Transition Government",
    "currency": "Bangladeshi Taka (BDT / ৳)",
    "languages": "Bengali (Bangla, Official)",
    "timeZones": "UTC+6 (BST)",
    "tagline": "Bay of Bengal Textile Powerhouse & Focal Point of South Asian Geopolitical Transition",
    "overview": {
        "beginner": "Bangladesh is a densely populated South Asian nation located on the Bay of Bengal, almost entirely surrounded by India. Renowned globally as the world's second-largest exporter of ready-made garments, Bangladesh entered a historic political transition in August 2024 following student-led protests that ended 15 years of rule by Sheikh Hasina.",
        "advanced": "The People's Republic of Bangladesh commands the northern littoral of the Bay of Bengal and sits directly adjacent to India's sensitive Siliguri Corridor ('Chicken's Neck'), which links mainland India to its eight northeastern states. Following the dramatic collapse of the Awami League government in August 2024, an interim administration headed by Nobel Peace Laureate Dr. Muhammad Yunus assumed authority to enact sweeping constitutional and institutional reforms. Bangladesh balances critical foreign relationships: managing its indispensable 4,096 km border partnership with India, navigating major Chinese infrastructure loans, deepening trade with the US and Europe, and hosting over 1 million Rohingya refugees."
    },
    "politicalSystem": {
        "isAvailable": True,
        "type": "Interim Caretaker Governance executing State Institutional Reforms",
        "constitution": "1972 Constitution of the People's Republic of Bangladesh (Under review by constitutional reform commission)",
        "branches": [
            {"name": "Interim Government", "role": "Council of Advisers led by Chief Adviser Muhammad Yunus holding executive governing authority."},
            {"name": "President", "role": "Constitutional Head of State overseeing official state appointments."},
            {"name": "Supreme Court of Bangladesh", "role": "Appellate Division and High Court Division upholding constitutional justice and civil liberties."}
        ],
        "currentLeadership": {
            "headOfState": "Mohammed Shahabuddin (President)",
            "headOfGovernment": "Dr. Muhammad Yunus (Chief Adviser of the Interim Government)"
        },
        "rulingParty": "Non-Partisan Interim Administration",
        "oppositionParties": ["Bangladesh Nationalist Party (BNP)", "Bangladesh Jamaat-e-Islami", "Jatiya Party", "Awami League (Dispersed leadership)"],
        "parliamentDetails": "Jatiya Sangsad dissolved in August 2024; democratic parliamentary elections to follow electoral commission reforms.",
        "recentElections": "January 2024 general election dissolved; free multi-party elections planned under interim roadmap."
    },
    "geographyBorders": {
        "landArea": "148,460 km²",
        "location": "South Asia, deltaic plain at the head of the Bay of Bengal, bounded by India on three sides and Myanmar to the southeast.",
        "continent": "Asia",
        "coastline": "580 km along the Bay of Bengal",
        "majorOceans": ["Indian Ocean Basin via Bay of Bengal"],
        "topography": "World's largest delta (Bengal Delta), dominated by an intricate network of over 700 rivers and low-lying alluvial plains, with hills in the Chittagong Hill Tracts and Sylhet.",
        "rivers": ["Padma River (Main Ganges distributary)", "Jamuna River (Main Brahmaputra distributary)", "Meghna River", "Karnaphuli River", "Teesta River"],
        "mountains": ["Saka Haphong (Chittagong Hill Tracts: 1,052 m, highest peak in Bangladesh)"],
        "seas": ["Bay of Bengal"],
        "climates": ["Tropical monsoon climate characterized by high humidity, heavy monsoon rains, and seasonal cyclone risks"],
        "landBorders": ["India (4,096 km, 5th longest land border in the world)", "Myanmar (271 km)"],
        "maritimeBorders": ["Maritime boundary with Myanmar (ITLOS 2012) and India (PCA 2014) settled, establishing Bangladesh's 200 nautical mile EEZ"]
    },
    "economy": {
        "gdpNominal": "$455.0 Billion USD (World's 34th largest economy)",
        "gdpPPP": "$1.41 Trillion USD",
        "gdpPerCapita": "$2,650 USD",
        "gdpGrowth": "+5.2% (Recovering from foreign exchange reserve constraints and political restructuring)",
        "currency": "Bangladeshi Taka (BDT)",
        "majorIndustries": ["Ready-Made Garments & Textiles (World's 2nd largest exporter after China)", "Pharmaceuticals & Generic Medicines", "Ship Breaking & Recycling (Chittagong)", "Leather & Footwear Products", "Jute & Jute Goods", "Information Technology & Freelancing"],
        "majorExports": ["Knitwear & Woven Garments (Over 80% of total export earnings)", "Home Textiles", "Footwear", "Jute & Jute Yarn", "Frozen Shrimp & Fish", "Pharmaceuticals"],
        "majorImports": ["Cotton & Yarn (Raw materials for garment industry)", "Refined Petroleum", "Machinery & Mechanical Appliances", "Iron & Steel", "Edible Oils & Wheat"],
        "energyPosition": "Heavy reliance on domestic natural gas (declining production) and imported LNG; constructing Rooppur Nuclear Power Plant (2,400 MW with Russian Rosatom).",
        "naturalResources": ["Natural Gas (Titas, Bibiyana)", "Coal", "Fertile Alluvial Farmland", "Extensive Inland and Marine Fisheries", "Timber (Sundarbans mangrove)"],
        "tradeOrgs": ["World Trade Organization (WTO)", "SAARC", "BIMSTEC", "D-8", "IORA"],
        "economicStrategicImportance": "Dominant global supplier of apparel; developing the deepwater Matarbari commercial port to serve as a regional transshipment hub.",
        "indiaEconomicConnection": "India’s largest trading partner in South Asia (~$14B); cross-border electricity interconnection (1,160 MW) and Friendship Pipeline for diesel exports.",
        "majorTradingPartners": ["European Union (Top garment destination)", "United States", "China (Top source of imports)", "India", "Japan", "United Kingdom"]
    },
    "military": {
        "isAvailable": True,
        "expenditure": "$3.8 Billion USD (~0.9% of GDP)",
        "manpowerActive": "165,000 active service personnel (Bangladesh Armed Forces)",
        "manpowerReserve": "Border Guard Bangladesh (BGB, 60,000) plus Ansar & Village Defense Party (VDP)",
        "doctrine": "Forces Goal 2030 modernization program, defensive deterrence, protecting maritime sovereignty in the Bay of Bengal, and world-leading participation in UN peacekeeping.",
        "majorEquipment": ["Type 59G & VT-5 Light Main Battle Tanks", "BTR-80 Armored Personnel Carriers", "MiG-29 & F-7BG Fighter Aircraft", "Ming-Class (Type 035G) Conventional Submarines", "Type 056 Corvette (Shadhinota-Class)", "FM-90 Short-Range Surface-to-Air Missile Batteries"],
        "nuclearStatus": "Non-Nuclear State (Party to Non-Proliferation Treaty; developing civilian nuclear power at Rooppur under IAEA safeguards)",
        "alliances": ["Policy of Friendship to all, malice towards none; top troop contributor to UN Peacekeeping operations globally"]
    },
    "relations": {
        "isAvailable": True,
        "main": [
            {"id": "BGD_IND", "country": "India", "countryCode": "IND", "status": "Indispensable Strategic Neighbor under Reset", "summary": "Shares 4,096 km border; deeply interconnected through river basins, transit access to India's Northeast, power grids, and historical 1971 Liberation War ties."},
            {"id": "BGD_CHN", "country": "China", "countryCode": "CHN", "status": "Comprehensive Strategic Partner & Infrastructure Creditor", "summary": "Major creditor and infrastructure builder (Padma Bridge rail link, Bangabandhu Tunnel); primary supplier of military hardware."},
            {"id": "BGD_USA", "country": "United States", "countryCode": "USA", "status": "Top Export Market & Interim Supporter", "summary": "Largest single export destination for garments; actively supporting Dr. Yunus’s interim administration with financial and governance assistance."},
            {"id": "BGD_JPN", "country": "Japan", "countryCode": "JPN", "status": "Strategic Infrastructure & Port Partner", "summary": "Financing and constructing the landmark Matarbari Deep Sea Port and developing the Bay of Bengal Industrial Growth Belt (BIG-B)."}
        ],
        "searchable": [
            {"id": "BGD_MMR", "country": "Myanmar", "countryCode": "MMR", "summary": "Border friction exacerbated by hosting over 1 million Rohingya refugees in Cox's Bazar and cross-border shelling from Rakhine State conflict."},
            {"id": "BGD_PAK", "country": "Pakistan", "countryCode": "PAK", "summary": "Diplomatic ties experiencing a historic thaw following the 2024 government transition, with direct maritime container shipping resuming."}
        ]
    },
    "currentTensions": {
        "isAvailable": True,
        "activeFlashpoints": [
            {"name": "Rohingya Refugee Camps (Cox's Bazar)", "type": "World's Largest Refugee Camp Crisis", "desc": "Hosting over 1.1 million refugees in Kutupalong with escalating gang violence and funding shortages from international donors."},
            {"name": "Teesta River Water Sharing Standoff", "type": "Transboundary Hydropolitical Dispute", "desc": "Protracted stalemate over dry-season water allocation from the Teesta River, impacting northern agricultural livelihoods."},
            {"name": "Border Security & Border Guard Patrols", "type": "4,096 km Frontier Management", "desc": "Managing cross-border smuggling, illegal crossings, and frontier fencing issues along the extensive Indian land border."}
        ],
        "summary": "Executing comprehensive democratic state reform and economic stabilization while managing complex triangular ties with India, China, and the West."
    },
    "strategicLocations": {
        "isAvailable": True,
        "list": [
            {"name": "Port of Chittagong & Matarbari Deep Sea Port", "type": "National Maritime Lifeline", "importance": "Chittagong handles over 90% of Bangladesh’s maritime trade; Matarbari is the first 18.5m deepwater port accommodating mega-container vessels."},
            {"name": "Padma Multi-Purpose Bridge", "type": "National Integration Infrastructure", "importance": "Landmark 6.15-km road-rail bridge across the mighty Padma River connecting 21 southwestern districts to Dhaka."},
            {"name": "Rooppur Nuclear Power Plant Complex", "type": "First Nuclear Energy Installation", "importance": "Dual VVER-1200 reactor facility on the Padma River delivering 2,400 MW of baseload electricity to the national grid."}
        ]
    },
    "indiaImpact": {
        "isAvailable": True,
        "strategicTies": "India played an existential founding role in the 1971 Bangladesh Liberation War; a stable, secure, and democratic Bangladesh is indispensable for the security and development of India's Northeast.",
        "trade": "Bilateral trade reached $14 Billion USD, supported by comprehensive border trade infrastructure (Integrated Check Posts at Petrapole-Benapole).",
        "energy": "India supplies over 1,160 MW of electricity to the Bangladeshi grid; operationalized the 131-km India-Bangladesh Friendship Pipeline pumping 1M metric tons of high-speed diesel annually.",
        "diaspora": "Bangladesh is the largest source of foreign tourists, medical travelers, and academic students visiting India, generating significant goodwill.",
        "summary": "The land transit agreements allowing Indian cargo to move seamlessly through Chittagong and Mongla ports to Tripura, Assam, and Meghalaya represent a geopolitical game-changer reducing travel distances by over 1,000 km."
    }
}

# Write file
output_code = "export const FRONTLINE_COUNTRY_DOSSIERS = " + json.dumps(countries, indent=2) + ";\n"
with open(base_path, "w", encoding="utf-8") as f:
    f.write(output_code)

print(f"ALL 18 FRONTLINE COUNTRIES GENERATED SUCCESSFULLY! Total: {len(countries)}: {list(countries.keys())}")
