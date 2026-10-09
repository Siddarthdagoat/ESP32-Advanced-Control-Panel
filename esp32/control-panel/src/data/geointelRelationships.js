// GEOINTEL Deep Bilateral Geopolitical Relationships Registry
// Structured analytical dossiers: At a Glance, Historical Foundation,
// Turning Points, Security, Energy, Economy, Diplomacy, Regional Issues,
// Clickable Agreements, Key Concepts, and Connected Cause-and-Effect Chains.

export const BILATERAL_RELATIONSHIPS = {
  USA_SAUDI: {
    id: 'USA_SAUDI',
    pair: ['USA', 'SAU'],
    title: 'United States ↔ Saudi Arabia',
    flags: '🇺🇸 ↔ 🇸🇦',
    classification: 'Strategic Energy-Security Nexus & Geoeconomic Recalibration',
    atAGlance: {
      status: 'Recalibrating / Strategic Security Negotiation',
      statusColor: '#f59e0b',
      keyAreas: ['Gulf Maritime Security', 'Petrodollar Recycling', 'Arms Procurement', 'Nuclear Energy Discussions', 'Regional Deterrence vs. Iran'],
      majorStrategicInterests: 'Washington seeks stable global oil prices, freedom of navigation in the Red Sea and Strait of Hormuz, and diplomatic normalization with Israel to integrate regional air defenses. Riyadh seeks formal treaty-level U.S. defense guarantees, advanced civilian nuclear technology access without enrichment bans, and modern defense hardware (F-35, THAAD) while maintaining sovereign foreign policy diversification with Beijing and Moscow.'
    },
    howItDeveloped: [
      {
        year: '1945',
        title: 'The USS Quincy Secret Summit',
        desc: 'President Franklin D. Roosevelt met King Abdulaziz Ibn Saud aboard the USS Quincy in the Suez Canal, forging the historic "oil-for-security" compact that defined postwar Middle East geopolitics.'
      },
      {
        year: '1973–1974',
        title: 'The Oil Embargo & Petrodollar Architecture',
        desc: 'Following the 1973 Yom Kippur War oil embargo, U.S. Treasury Secretary William Simon negotiated the petrodollar pact: Riyadh priced oil exclusively in USD and recycled profits into U.S. Treasury securities in exchange for American defense hardware.'
      },
      {
        year: '1990–1991',
        title: 'Operation Desert Shield & Desert Storm',
        desc: 'Following Saddam Hussein’s invasion of Kuwait, over 500,000 U.S. troops deployed to Saudi territory to shield Saudi oil fields, proving the operational vitality of the American security umbrella.'
      },
      {
        year: '2015–2018',
        title: 'JCPOA Rift & Strategic Pivot',
        desc: 'The Obama administration’s 2015 Iran Nuclear Deal sparked Saudi alarm over Iranian regional empowerment, leading Riyadh to adopt an assertive foreign policy (Yemen intervention) and expand diplomatic ties with China.'
      },
      {
        year: '2023–2026',
        title: 'Triangular Normalization & Defense Treaty Negotiations',
        desc: 'Talks for a historic U.S.-Saudi formal Mutual Defense Treaty tied to Saudi-Israeli normalization were complicated by the Gaza conflict, but strategic intelligence and maritime escorts against Houthi threats remain actively coordinated.'
      }
    ],
    turningPoints: [
      { year: '1945', event: 'USS Quincy Summit', impact: 'Anchored U.S. security umbrella over Saudi monarchy in exchange for energy access.' },
      { year: '1974', event: 'Petrodollar Agreement', impact: 'Cemented worldwide USD supremacy through exclusive dollar pricing of global oil.' },
      { year: '2001', event: 'September 11 Attacks', impact: 'Severely strained intelligence trust and public opinion, prompting internal security reforms.' },
      { year: '2019', event: 'Abqaiq-Khurais Drone Attacks', impact: 'Iran-linked drone strikes knocked out 5.7M bpd of Saudi processing; lack of direct U.S. kinetic retaliation catalyzed Riyadh’s multi-alignment strategy.' },
      { year: '2023', event: 'Beijing-Brokered Saudi-Iran Détente', impact: 'China’s diplomatic coup signaled Saudi willingness to balance Washington with Beijing.' }
    ],
    security: {
      summary: 'U.S. military presence in the Kingdom operates via the 378th Air Expeditionary Wing at Prince Sultan Air Base (PSAB), alongside extensive missile defense integration.',
      defenseCooperation: 'Saudi Arabia is the largest single customer of U.S. foreign military sales (FMS), with an active portfolio exceeding $100 Billion across Patriot PAC-3, THAAD ballistic missile interceptors, and F-15SA strike aircraft.',
      militaryPresence: 'Approximately 2,500 to 3,000 U.S. personnel deployed in advisory, training, and air defense roles, coordinated via U.S. Central Command (CENTCOM).',
      regionalDeterrence: 'Focused on countering Iranian ballistic missiles, cruise missiles, and loitering Shahed drones launched by Houthi forces in Yemen across the Red Sea corridor.'
    },
    energy: {
      summary: 'The relationship shifted from physical dependency (U.S. shale revolution made America a net exporter) to global market governance via OPEC+.',
      oilMarkets: 'Saudi Aramco produces ~9–10 million barrels per day with unmatched spare capacity (~3M bpd), giving Riyadh the power to rapidly surge or cut global supply.',
      globalImplications: 'Washington relies on Saudi moderation to keep Brent crude within an affordable band ($70–$85) to mitigate domestic inflation and prevent energy price spikes from funding Russian state budgets.'
    },
    economy: {
      tradeVolume: 'Over $30 Billion annually in bilateral goods and services.',
      investment: 'Saudi Public Investment Fund (PIF, $900B+ AUM) holds substantial equity in U.S. technology, financial firms, and infrastructure.',
      vision2030: 'Riyadh is seeking American technology partnerships in artificial intelligence, green hydrogen, clean energy, and semiconductor fabrication to diversify away from crude hydrocarbons.'
    },
    diplomacy: {
      bilateralDialogues: 'U.S.-Saudi Strategic Dialogue, CENTCOM multilateral naval task forces (Combined Maritime Forces Task Force 153 in the Red Sea).',
      challenges: 'Tensions over human rights, domestic governance, OPEC+ production cuts, and Saudi willingness to settle minor oil trades in Chinese Yuan (Petroyuan).'
    },
    regionalIssues: [
      { name: 'Iran Proxy Axis', desc: 'Managing containment of Iranian-backed groups across Yemen, Iraq, and Syria while preserving the 2023 Saudi-Iran diplomatic detente.' },
      { name: 'Red Sea & Bab el-Mandeb', desc: 'Protecting oil tanker lanes from Houthi anti-ship missile attacks without triggering a wider regional war.' },
      { name: 'Israel & Abraham Accords', desc: 'Riyadh demands an irreversible, credible pathway to an independent Palestinian state before formalizing full diplomatic normalization with Israel.' }
    ],
    keyConcepts: ['PETRODOLLAR', 'ENERGY_SECURITY', 'CHOKEPOINT', 'OPEC_PLUS', 'PROXY_WAR', 'ABRAHAM_ACCORDS'],
    importantAgreements: ['QUINCY_AGREEMENT_1945', 'ABRAHAM_ACCORDS_2020'],
    defaultChain: 'CHAIN_HORMUZ_OIL',
    whyThisMatters: 'The U.S.–Saudi relationship anchors the stability of global energy markets and the security architecture of the Persian Gulf. Any rupture directly impacts worldwide fuel prices, strengthens Chinese influence in the Middle East, and destabilizes maritime trade routes.',
    verification: {
      source: 'Congressional Research Service (CRS Report RL33533) / SIPRI Arms Transfers / U.S. Energy Information Administration (EIA)',
      sourceType: 'Government Research & Energy Assessments',
      publicationDate: '2024',
      lastVerified: '2026-02',
      confidence: 'High (Verified Strategic Partnership Record)',
      claimType: 'CURRENT'
    }
  },

  IND_RUS: {
    id: 'IND_RUS',
    pair: ['IND', 'RUS'],
    title: 'India ↔ Russia',
    flags: '🇮🇳 ↔ 🇷🇺',
    classification: 'Special and Privileged Strategic Partnership',
    atAGlance: {
      status: 'Stable Strategic Anchor & Geoeconomic Pragmatism',
      statusColor: '#3b82f6',
      keyAreas: ['Defense Industrial Co-Development', 'Discounted Crude Energy Imports', 'Civil Nuclear Cooperation', 'Multipolar Global Governance (BRICS/SCO)', 'Space Technology & Cryogenics'],
      majorStrategicInterests: 'New Delhi prioritizes maintaining reliable spare parts for its Russian-origin military hardware (~50% of armed forces inventory), securing affordable crude oil imports to control domestic inflation, and preventing Moscow from becoming wholly dependent on and subordinated to Beijing. Moscow prioritizes sustaining major export revenues amidst Western sanctions, demonstrating international diplomatic relevance, and selling advanced defense platforms.'
    },
    howItDeveloped: [
      {
        year: '1955',
        title: 'Post-Colonial Soviet Outreach',
        desc: 'Soviet Premier Nikita Khrushchev and Prime Minister Jawaharlal Nehru initiated diplomatic visits, establishing Soviet backing for Indian heavy industrialization (Bhilai steel plant) and veto support at the UN Security Council over Kashmir.'
      },
      {
        year: '1971',
        title: 'Indo-Soviet Friendship Treaty & 1971 War',
        desc: 'Faced with a nascent U.S.-China-Pakistan alignment, Prime Minister Indira Gandhi signed the historic 1971 Treaty. Soviet naval deployments in the Indian Ocean deterred foreign naval intervention during the Bangladesh Liberation War.'
      },
      {
        year: '1998–2000',
        title: 'Strategic Partnership Declaration',
        desc: 'Following the collapse of the USSR, relations were institutionalized under Vladimir Putin and Atal Bihari Vajpayee, establishing annual bilateral summits and joint defense co-development programs.'
      },
      {
        year: '2005–2018',
        title: 'Co-Development Era: BrahMos & S-400',
        desc: 'Transitioned from a buyer-seller relationship to joint co-development. India deployed the jointly developed BrahMos supersonic missile and signed the $5.43B deal for five S-400 Triumf air defense regiments.'
      },
      {
        year: '2022–2026',
        title: 'Ukraine War Balancing Act & Energy Surge',
        desc: 'Despite Western diplomatic pressure, India refused to condemn Russia at the UN, citing national interests. Indian purchases of discounted Russian crude surged from under 2% to over 35-40% of national imports, settled in non-dollar mechanisms.'
      }
    ],
    turningPoints: [
      { year: '1971', event: 'Indo-Soviet Treaty of Peace and Friendship', impact: 'Article IX provided Soviet deterrence against U.S. naval task groups in the Bay of Bengal.' },
      { year: '1998', event: 'Pokhran-II Nuclear Tests', impact: 'Russia stood firm in refusing to join Western sanctions against India’s nuclear weapons program.' },
      { year: '2018', event: 'S-400 Triumf Procurement Deal', impact: 'India asserted strategic autonomy against American CAATSA threats by buying Russian air defenses.' },
      { year: '2022', event: 'Russian Invasion of Ukraine', impact: 'Triggered Western sanctions; India navigated secondary sanctions to purchase discounted Urals crude oil.' },
      { year: '2024', event: 'Moscow & Kazan Bilateral Summits', impact: 'Modi and Putin met to eliminate non-tariff trade barriers, boost rupee-ruble settlements, and address defense delivery delays.' }
    ],
    security: {
      summary: 'Russia remains India’s largest single historical defense supplier, providing critical high-end military technologies that no Western power was willing to share.',
      defenseCooperation: 'Co-development of BrahMos supersonic cruise missiles, licensed domestic manufacturing of Su-30MKI fighter jets and T-90 Bhishma main battle tanks, and indigenous production of AK-203 assault rifles in Amethi.',
      militaryPresence: 'No foreign combat troops stationed on Indian soil. Deep intelligence consultations, joint naval exercises (INDRA), and leasing of nuclear-powered attack submarines (Akula-class / Chakra).',
      regionalDeterrence: 'Russian hardware forms the frontline defensive shield deployed along both the Line of Actual Control (facing China) and the Line of Control (facing Pakistan).'
    },
    energy: {
      summary: 'Transformed into a bedrock commercial pillar post-2022.',
      oilMarkets: 'Russia became India’s #1 crude oil supplier, delivering ~1.6 to 1.9 million barrels per day of discounted Urals crude, saving Indian refiners billions in foreign exchange.',
      nuclearEnergy: 'Russia’s Rosatom is building all 6 units of the Kudankulam Nuclear Power Plant in Tamil Nadu, the largest nuclear generation facility in India.'
    },
    economy: {
      tradeVolume: 'Surged to an all-time record exceeding $65 Billion (2024), driven heavily by petroleum imports.',
      tradeDeficit: 'A major structural challenge: India’s exports to Russia stand at ~$4–$5 Billion vs. $60B+ imports. Both nations are expanding Indian pharmaceutical, engineering, and agricultural exports to balance payments.',
      alternativeSettlement: 'Settling trade via Vostro accounts in Indian Rupees, UAE Dirhams, and Russian Rubles to bypass the SWIFT dollar-clearing system and mitigate secondary sanctions.'
    },
    diplomacy: {
      multilateralCoordination: 'Founding partners in BRICS and the Shanghai Cooperation Organisation (SCO), advocating for a multipolar global financial and political architecture.',
      strategicDilemma: 'New Delhi closely monitors Moscow’s deepening "no-limits" strategic partnership with Beijing, working proactively to keep Russia engaged as an independent pole in Eurasia.'
    },
    regionalIssues: [
      { name: 'China Balancing Dilemma', desc: 'India’s paramount strategic challenge: ensuring that Moscow’s growing economic reliance on Beijing does not compromise Russian arms and spare parts deliveries during a border crisis with China.' },
      { name: 'INSTC Corridor', desc: 'The International North-South Transport Corridor linking Mumbai to Saint Petersburg via Iran (Chabahar / Bandar Abbas) and Central Asia, bypassing Pakistan and Suez.' }
    ],
    keyConcepts: ['STRATEGIC_AUTONOMY', 'BRAHMOS', 'S400', 'CAATSA', 'ENERGY_SECURITY', 'BRICS', 'SCO', 'NUCLEAR_TRIAD'],
    importantAgreements: ['INDO_SOVIET_TREATY_1971', 'LEMOA_COMCASA_BECA'],
    defaultChain: 'CHAIN_BRAHMOS_AUTONOMY',
    whyThisMatters: 'India–Russia relations demonstrate the essence of Strategic Autonomy in modern geopolitics. India refuses to abandon a 70-year reliable partner that supplies critical defense and energy lifelines, while simultaneously expanding its QUAD partnership with the United States.',
    verification: {
      source: 'Ministry of External Affairs (India) Annual Reports / Stockholm International Peace Research Institute (SIPRI) Arms Transfer Database / Directorate General of Commercial Intelligence and Statistics (DGCIS)',
      sourceType: 'Official Government Data & Defense Peace Research',
      publicationDate: '2024',
      lastVerified: '2026-03',
      confidence: 'High (Verified Primary Trade and Defense Data)',
      claimType: 'CURRENT'
    }
  },

  USA_ISR: {
    id: 'USA_ISR',
    pair: ['USA', 'ISR'],
    title: 'United States ↔ Israel',
    flags: '🇺🇸 ↔ 🇮🇱',
    classification: 'Special Relationship & Qualitative Military Edge (QME)',
    atAGlance: {
      status: 'Intimate Strategic Alliance / Domestic & Diplomatic Strains',
      statusColor: '#ef4444',
      keyAreas: ['Qualitative Military Edge (QME)', 'Multi-Tier Missile Defense', 'Joint Intelligence Sharing', 'UN Diplomatic Veto Shield', 'Abraham Accords Expansion'],
      majorStrategicInterests: 'The U.S. considers Israel its primary democratic and intelligence ally in the Middle East, guaranteeing Israel’s regional military superiority to deter hostile state and non-state actors. Israel relies on American diplomatic cover at the UN Security Council, steady replenishment of precision munitions, and financial defense assistance ($3.8B annually) while pursuing independent tactical operations across Gaza, Lebanon, Syria, and Iran.'
    },
    howItDeveloped: [
      {
        year: '1948',
        title: 'Immediate Recognition',
        desc: 'President Harry S. Truman recognized the State of Israel just 11 minutes after its declaration of independence, establishing a moral and diplomatic bond.'
      },
      {
        year: '1973',
        title: 'Operation Nickel Grass',
        desc: 'During the Yom Kippur War, President Richard Nixon ordered an emergency massive military airlift of tanks, artillery, and ammunition, turning the tide of the conflict and averting Israeli defeat.'
      },
      {
        year: '1979',
        title: 'Camp David Peace Treaty',
        desc: 'President Jimmy Carter mediated the historic Egypt-Israel Peace Treaty, transforming Egypt from an adversary into a security partner and institutionalizing long-term U.S. military aid to both countries.'
      },
      {
        year: '2016',
        title: 'Record 10-Year Defense Memorandum',
        desc: 'The Obama administration signed a historic 10-year, $38 Billion Memorandum of Understanding (MOU) guaranteeing $3.3B annually in Foreign Military Financing and $500M annually for missile defense through 2028.'
      },
      {
        year: '2023–2026',
        title: 'Multi-Front Regional Escalation',
        desc: 'Following the October 7 attacks, the U.S. deployed dual carrier strike groups and THAAD missile defense batteries to the region, providing continuous military replenishment while managing intense international diplomatic blowback.'
      }
    ],
    turningPoints: [
      { year: '1973', event: 'Operation Nickel Grass Airlift', impact: 'Solidified the U.S. as Israel’s indispensable ultimate military guarantor.' },
      { year: '1985', event: 'U.S.-Israel Free Trade Agreement', impact: 'The first Free Trade Agreement ever signed by the United States with any foreign nation.' },
      { year: '2008', event: 'Codification of QME into U.S. Law', impact: 'Mandated by statute that any U.S. arms sale to Arab nations must not degrade Israel’s Qualitative Military Edge.' },
      { year: '2020', event: 'Abraham Accords Normalization', impact: 'U.S. diplomacy broke the Arab diplomatic embargo, normalizing Israeli ties with the UAE, Bahrain, and Morocco.' },
      { year: '2024', event: 'Direct Iran-Israel Missile Exchanges', impact: 'U.S. CENTCOM, along with regional Arab partners and the UK, intercepted hundreds of Iranian ballistic missiles and drones launched directly at Israel.' }
    ],
    security: {
      summary: 'The U.S.-Israel defense relationship is the deepest tactical and intelligence partnership in the Middle East.',
      defenseCooperation: 'Co-development of world-leading multi-tiered missile defense systems: Iron Dome (short-range rockets), David’s Sling (medium-range cruise missiles), and Arrow-2/Arrow-3 (exo-atmospheric ballistic missile interceptors).',
      militaryPresence: 'U.S. maintains Site 512, a classified radar tracking installation in Israel\'s Negev desert, alongside War Reserve Stockpile Allies-Israel (WRSA-I) munitions depots.',
      regionalDeterrence: 'Deterring Iran’s nuclear weaponization program and dismantling proxy infrastructure along Israel’s immediate borders.'
    },
    energy: {
      summary: 'Israel’s offshore natural gas discoveries (Tamar and Leviathan fields in the Eastern Mediterranean) turned it from an energy importer into an exporter to Egypt and Jordan, supporting regional energy stability.'
    },
    economy: {
      tradeVolume: 'Bilateral trade exceeds $50 Billion annually.',
      highTech: 'Deep technological synergy in cybersecurity, semiconductors (Intel research centers in Israel), artificial intelligence, and biotechnology.'
    },
    diplomacy: {
      unVetoCover: 'The United States has utilized its UN Security Council veto over 45 times to shield Israel from hostile binding resolutions, sanctions, or arms embargoes.',
      frictionPoints: 'Disagreements over Israeli settlement expansion in the West Bank, civilian casualties in urban warfare, and long-term political resolution of the Palestinian statehood question.'
    },
    regionalIssues: [
      { name: 'Iranian Nuclear Escalation', desc: 'Coordinating covert operations and cyber warfare (Stuxnet legacy) to disrupt Iranian uranium enrichment toward weapons-grade thresholds.' },
      { name: 'Hezbollah & Northern Border', desc: 'Managing the military neutralization of precision-guided rocket stockpiles in southern Lebanon.' }
    ],
    keyConcepts: ['DETERRENCE', 'EXTENDED_DETERRENCE', 'PROXY_WAR', 'ABRAHAM_ACCORDS'],
    importantAgreements: ['ABRAHAM_ACCORDS_2020'],
    defaultChain: 'CHAIN_ABRAHAM_IMEC',
    whyThisMatters: 'The U.S.–Israel alliance is legally and politically anchored in American foreign policy, shaping troop deployments, UN voting patterns, and regional defense architectures throughout the Middle East.',
    verification: {
      source: 'U.S. Congressional Research Service (CRS Report RL33222) / Israel Ministry of Defense / TIAS Treaties Archive',
      sourceType: 'Congressional Research & Bilateral Treaty Texts',
      publicationDate: '2024',
      lastVerified: '2026-02',
      confidence: 'High (Documented Statutory Commitments)',
      claimType: 'CURRENT'
    }
  },

  IND_CHN: {
    id: 'IND_CHN',
    pair: ['IND', 'CHN'],
    title: 'India ↔ China',
    flags: '🇮🇳 ↔ 🇨🇳',
    classification: 'Competitive Coexistence, Frontier Standoff & Economic Interdependence',
    atAGlance: {
      status: 'Cautious Military Disengagement & Long-Term Strategic Rivalry',
      statusColor: '#f97316',
      keyAreas: ['Line of Actual Control (LAC) Demarcation', 'Himalayan Frontier Infrastructure', 'Trade Imbalance & Critical Imports', 'Indian Ocean Maritime Competition', 'Water Security & Upper Brahmaputra Dams'],
      majorStrategicInterests: 'India’s foremost national security objective is defending its northern borders, resisting unilateral changes to the status quo along the 3,488 km LAC, and checking China’s naval encirclement in the Indian Ocean ("String of Pearls"). China seeks to prevent India from aligning formally with the U.S. into an "Asian NATO," secure its vital Sea Lines of Communication through the Malacca Strait, and expand its regional dominance across South Asia and the Global South.'
    },
    howItDeveloped: [
      {
        year: '1954',
        title: 'Panchsheel Agreement',
        desc: 'Nehru and Zhou Enlai signed the Five Principles of Peaceful Coexistence under the slogan "Hindi-Chini Bhai-Bhai" (Indians and Chinese are brothers), recognizing Chinese sovereignty over Tibet.'
      },
      {
        year: '1962',
        title: 'Sino-Indian Border War',
        desc: 'Simmering territorial disputes over Aksai Chin and NEFA (Arunachal Pradesh) culminated in China’s surprise offensive, inflicting a traumatic military defeat on India and shattering bilateral trust for generations.'
      },
      {
        year: '1988',
        title: 'Rajiv Gandhi’s Historic Beijing Thaw',
        desc: 'Agreed to compartmentalize the border dispute: develop bilateral trade, economic, and diplomatic ties while establishing joint working groups to peacefully demarcate the frontier.'
      },
      {
        year: '1993–1996',
        title: 'Peace and Tranquility Agreements (BPTA)',
        desc: 'Institutionalized the Line of Actual Control (LAC) and banned the use of firearms, heavy explosives, and combat aircraft within 2 km of the frontier.'
      },
      {
        year: '2020',
        title: 'Galwan Valley Deadly Clash',
        desc: 'Chinese PLA attempted to unilaterally shift the LAC in Eastern Ladakh, resulting in a brutal hand-to-hand combat clash on June 15, 2020. 20 Indian soldiers and at least 4 Chinese troops were killed—the first fatal clash in 45 years.'
      },
      {
        year: '2024–2026',
        title: 'Kazan Disengagement & Managed Coexistence',
        desc: 'Following 21 rounds of military talks, Modi and Xi formalized coordinated patrolling protocols in Depsang and Demchok at the BRICS Summit in Kazan, resuming direct flights and dialogue while maintaining forward forces.'
      }
    ],
    turningPoints: [
      { year: '1962', event: 'Sino-Indian War', impact: 'Permanently militarized the Himalayan boundary and triggered India’s long-term defense modernization.' },
      { year: '1988', event: 'Rajiv Gandhi–Deng Xiaoping Summit', impact: 'Established the three-decade policy of compartmentalizing border disputes to grow economic trade.' },
      { year: '2017', event: 'Doklam 73-Day Standoff', impact: 'Indian troops intervened at the tri-junction with Bhutan to block Chinese road construction toward the sensitive Siliguri Corridor.' },
      { year: '2020', event: 'Galwan Valley Clash', impact: 'Completely collapsed the 1993 peace framework; India reoriented its strike corps from Pakistan toward the China border and banned 300+ Chinese mobile apps.' },
      { year: '2024', event: 'Kazan Patrolling Agreement', impact: 'Restored pre-2020 patrolling rights in Eastern Ladakh, preventing accidental escalation while keeping heavy armor deployed.' }
    ],
    security: {
      summary: 'The world’s highest-altitude military confrontation, with over 100,000 soldiers permanently deployed in sub-zero Himalayan altitudes.',
      lacFrontier: 'The Line of Actual Control remains undemarcated on official maps, leading to recurring overlapping patrols in Depsang, Pangong Tso, and Arunachal Pradesh.',
      infrastructureRace: 'India built the Darbuk-Shyok-Daulat Beg Oldie (DS-DBO) road, Atal Tunnel, and Sela Tunnel; China built dual-use border villages ("Xiaokang"), high-speed rail to Tibet, and hardened underground hangars.',
      nuclearDeterrence: 'Both nations maintain "No First Use" nuclear doctrines, relying on land-based road-mobile missiles (India’s Agni-V, China’s DF-26/31AG) and SSBN ballistic submarines.'
    },
    energy: {
      summary: 'Brahmaputra (Yarlung Tsangpo) River Hydro-Politics: China’s construction of massive mega-dams in Tibet upstream from the Great Bend raises serious strategic concerns in New Delhi regarding water weaponization and downstream flash flooding in Assam.'
    },
    economy: {
      tradeVolume: 'Exceeds $136 Billion annually (2023–2024).',
      tradeDeficit: 'Massively skewed in China’s favor: India’s trade deficit with China exceeds $100 Billion, driven by heavy Indian industrial dependence on Chinese active pharmaceutical ingredients (APIs), solar panels, electronics components, and telecom hardware.',
      regulatoryScrutiny: 'India implemented Press Note 3 requiring prior government approval for foreign investment from land-bordering nations, heavily restricting Chinese FDI and blocking telecom vendor Huawei from 5G rollouts.'
    },
    diplomacy: {
      multilateralOverlap: 'Both nations sit together in BRICS and SCO, sharing an interest in a multipolar currency order, but New Delhi acts as an internal check against turning these groupings into anti-Western Chinese forums.'
    },
    regionalIssues: [
      { name: 'China-Pakistan Economic Corridor (CPEC)', desc: 'China’s $62B flagship project passes through Pakistan-occupied Kashmir (Gilgit-Baltistan), which India considers a direct violation of its territorial sovereignty.' },
      { name: 'Indian Ocean "String of Pearls"', desc: 'Chinese naval port developments in Gwadar (Pakistan), Hambantota (Sri Lanka), Kyaukpyu (Myanmar), and Ream (Cambodia) encircle the Indian littoral.' }
    ],
    keyConcepts: ['TERRITORIAL_DISPUTE', 'STATUS_QUO', 'GREY_ZONE', 'CONFIDENCE_BUILDING_MEASURES', 'SLOC', 'MALACCA_DILEMMA', 'QUAD'],
    importantAgreements: ['KAZAN_DISENGAGEMENT_2024', 'LEMOA_COMCASA_BECA'],
    defaultChain: 'CHAIN_BRAHMOS_AUTONOMY',
    whyThisMatters: 'The India–China relationship is the definitive Asian geopolitical rivalry of the 21st century. As two nuclear-armed continental giants with 2.8 billion people share a disputed 3,488 km border, their friction shapes the entire Indo-Pacific security balance and global manufacturing supply chains.',
    verification: {
      source: 'Ministry of External Affairs (India) / Ministry of National Defense (PRC) / IISS Strategic Dossier / Observer Research Foundation (ORF)',
      sourceType: 'Government Communiqués & Strategic Think Tank Studies',
      publicationDate: '2024',
      lastVerified: '2026-03',
      confidence: 'High (Verified Military & Trade Telemetry)',
      claimType: 'CURRENT'
    }
  },

  CHN_RUS: {
    id: 'CHN_RUS',
    pair: ['CHN', 'RUS'],
    title: 'China ↔ Russia',
    flags: '🇨🇳 ↔ 🇷🇺',
    classification: '"No-Limits" Comprehensive Strategic Partnership of Coordination',
    atAGlance: {
      status: 'Deep Strategic Alignment & Asymmetric Economic Interdependence',
      statusColor: '#a855f7',
      keyAreas: ['Countering Western Primacy', 'Siberian Natural Gas Corridors (Power of Siberia)', 'Joint Military Exercises & Bomber Patrols', 'Local Currency Financial Settlements', 'Arctic Northern Sea Route Navigation'],
      majorStrategicInterests: 'United by a shared imperative to erode U.S. global hegemony, counter NATO in Europe and U.S. alliances in the Indo-Pacific, and establish an alternative non-Western financial clearing system. Russia gains a massive, sanctions-proof customer for its hydrocarbon exports, military technology markets, and industrial imports. China secures a stable, friendly 4,200 km northern border, reliable overland pipeline energy immune to U.S. naval blockades in the Malacca Strait, and Russian advanced defense tech (submarines, jet engines).'
    },
    howItDeveloped: [
      {
        year: '1950–1960',
        title: 'Sino-Soviet Alliance & Ideological Split',
        desc: 'Mao Zedong and Joseph Stalin signed a friendship pact, but ideological divergence and border skirmishes along the Ussuri River (1969) led to a bitter, dangerous split that reshuffled Cold War geopolitics.'
      },
      {
        year: '1989–2001',
        title: 'Rapprochement & Treaty of Good-Neighborliness',
        desc: 'Mikhail Gorbachev visited Beijing during the Tiananmen protests, demilitarizing the frontier. In 2001, Jiang Zemin and Vladimir Putin signed the landmark 20-Year Treaty of Good-Neighborliness and Friendly Cooperation.'
      },
      {
        year: '2014',
        title: 'Crimea Annexation & Pivot to the East',
        desc: 'Following Western sanctions over Crimea, Russia turned decisively to Beijing, signing the historic $400 Billion, 30-year "Power of Siberia" natural gas pipeline deal.'
      },
      {
        year: '2022',
        title: 'The "No Limits" Beijing Declaration',
        desc: 'On February 4, 2022, just 20 days before the full-scale invasion of Ukraine, Xi Jinping and Vladimir Putin issued a 5,000-word joint statement declaring their friendship has "no limits" and "no forbidden zones."'
      },
      {
        year: '2023–2026',
        title: 'Economic Lifeline & Dual-Use Integration',
        desc: 'Bilateral trade surged past $240 Billion. China became Russia’s vital lifeline for microelectronics, machine tools, and vehicle exports, while settling over 90% of transactions in Rubles and Renminbi.'
      }
    ],
    turningPoints: [
      { year: '1969', event: 'Zhenbao / Damansky Island Border Clash', impact: 'Brought the two communist giants to the brink of nuclear war and prompted Nixon’s opening to China.' },
      { year: '2001', event: 'Treaty of Good-Neighborliness', impact: 'Permanently settled all boundary demarcations along the 4,209 km shared border.' },
      { year: '2014', event: 'Power of Siberia Gas Agreement', impact: 'Anchored Russia’s energy exports to the Chinese consumer market.' },
      { year: '2022', event: '"No-Limits" Joint Statement', impact: 'Formalized mutual diplomatic backing against NATO enlargement and U.S. Indo-Pacific alliances.' }
    ],
    security: {
      summary: 'While not a formal mutual defense alliance with an automated Article 5 clause, their military integration is the closest in modern history.',
      jointOperations: 'Conduct regular joint strategic bomber patrols over the Sea of Japan and East China Sea, coordinated naval flotillas sailing near Alaska and Japan, and large-scale military war games (Vostok).',
      technologyTransfer: 'Russia supplied China with advanced Su-35 fighters, S-400 air defense batteries, and consultancy on ballistic missile early warning systems.'
    },
    energy: {
      summary: 'Power of Siberia pipeline delivers over 38 billion cubic meters of natural gas annually; negotiations advance for Power of Siberia-2 via Mongolia to replace lost European gas revenues.'
    },
    economy: {
      tradeVolume: 'Broke all historical records, exceeding $240 Billion (2023–2024).',
      deDollarization: 'Over 92% of bilateral trade is settled directly in Chinese Yuan (RMB) and Russian Rubles, bypassing U.S. dollar clearing entirely.',
      asymmetry: 'Russia has become economically dependent on China, which accounts for ~38% of Russian total imports and ~31% of exports, whereas Russia accounts for only ~4% of China\'s total global trade.'
    },
    diplomacy: {
      unCoordination: 'Consistently cast synchronized vetoes at the UN Security Council on resolutions involving Syria, North Korea, and conflict investigations.'
    },
    regionalIssues: [
      { name: 'Central Asia & "Greater Eurasia"', desc: 'Managing the quiet condominium where Russia historically provided security (CSTO) while China drove economic investment (BRI).' },
      { name: 'Arctic Northern Sea Route', desc: 'Joint investments in LNG tankers and icebreaker fleets to create a polar shipping corridor independent of Western control.' }
    ],
    keyConcepts: ['BALANCE_OF_POWER', 'SANCTIONS', 'ENERGY_SECURITY', 'BRICS', 'SCO', 'SLOC'],
    defaultChain: 'CHAIN_BRAHMOS_AUTONOMY',
    whyThisMatters: 'The China–Russia entente forms the most powerful autocratic axis challenging the Western-led international order. Their combined nuclear arsenals, permanent UN vetoes, and complementary raw materials and industrial base make them the primary strategic counterweight to the U.S. and its allies.',
    verification: {
      source: 'Joint Declarations of the PRC and Russian Federation / General Administration of Customs of the PRC / Federal Customs Service of Russia / CSIS China Power Project',
      sourceType: 'Bilateral State Communiqués & Trade Statistics',
      publicationDate: '2024',
      lastVerified: '2026-03',
      confidence: 'High (Verified Economic and Military Integration)',
      claimType: 'CURRENT'
    }
  },

  USA_IND: {
    id: 'USA_IND',
    pair: ['USA', 'IND'],
    title: 'United States ↔ India',
    flags: '🇺🇸 ↔ 🇮🇳',
    classification: 'Comprehensive Global and Strategic Partnership',
    atAGlance: {
      status: 'Rapid Strategic Convergence with Managed Disagreements',
      statusColor: '#10b981',
      keyAreas: ['Indo-Pacific Maritime Domain Awareness', 'Critical & Emerging Technologies (iCET)', 'Bilateral Defense Interoperability (LEMOA/COMCASA/BECA)', 'Supply Chain Resilience & De-risking from China', 'Counter-Terrorism & Space Cooperation (NISAR)'],
      majorStrategicInterests: 'Washington views India as an indispensable democratic anchor and demographic powerhouse essential for balancing Chinese hegemony across the Indo-Pacific. New Delhi seeks advanced American defense and civilian technology, jet engine co-production, and diversified supply chains to accelerate its economic modernization, while steadfastly preserving strategic autonomy and refusing to become a subordinate treaty ally.'
    },
    howItDeveloped: [
      {
        year: '1947–1990',
        title: 'Cold War "Estranged Democracies"',
        desc: 'Divided by Cold War geopolitics: India championed non-alignment and signed the 1971 pact with the USSR, while the U.S. partnered with Pakistan and sent Task Force 74 into the Bay of Bengal during the 1971 war.'
      },
      {
        year: '2000',
        title: 'Bill Clinton’s Landmark New Delhi Visit',
        desc: 'Following India’s 1998 nuclear tests and the 1999 Kargil conflict, President Clinton’s five-day visit marked the decisive structural turning point from estrangement to active engagement.'
      },
      {
        year: '2005–2008',
        title: 'Civil Nuclear Agreement (123 Agreement)',
        desc: 'President George W. Bush and Prime Minister Manmohan Singh negotiated the landmark pact ending 30 years of nuclear isolation for India, recognizing it de facto as a responsible nuclear weapons state.'
      },
      {
        year: '2016–2020',
        title: 'Foundational Defense Pacts & QUAD Revival',
        desc: 'India signed LEMOA, COMCASA, and BECA, and revived the Quadrilateral Security Dialogue alongside Japan and Australia following escalating Chinese assertiveness.'
      },
      {
        year: '2023–2026',
        title: 'iCET, Jet Engine Co-Production & Critical Tech',
        desc: 'Launched the Initiative on Critical and Emerging Technologies (iCET), approving GE F414 jet engine co-production in India with 80% tech transfer, procurement of MQ-9B SeaGuardian drones, and semiconductor assembly.'
      }
    ],
    turningPoints: [
      { year: '2008', event: 'U.S.-India Civil Nuclear Deal', impact: 'Ended nuclear apartheid and unlocked high-tech bilateral trade.' },
      { year: '2016', event: 'Major Defense Partner Designation', impact: 'Elevated India’s defense access to the level of traditional American NATO allies.' },
      { year: '2020', event: 'Signing of BECA during Ladakh Standoff', impact: 'Provided India real-time high-resolution U.S. satellite imagery during the border crisis with China.' },
      { year: '2023', event: 'State Visit & GE F414 Engine Agreement', impact: 'Unprecedented transfer of military aerospace propulsion technology to a non-treaty partner.' }
    ],
    security: {
      summary: 'Transformed from near-zero defense trade in 2000 to over $25 Billion in procurement contracts today.',
      hardwareProcured: 'P-8I Poseidon maritime patrol aircraft (vital for tracking Chinese submarines in the Indian Ocean), C-17 Globemaster III transports, AH-64E Apache attack helicopters, and MQ-9B SkyGuardian UAVs.',
      interoperability: 'Annual Tiger Triumph (tri-service), Yudh Abhyas (army), and Malabar (naval carrier) joint exercises.'
    },
    economy: {
      tradeVolume: 'Bilateral trade in goods and services surpassed $190 Billion (2023–2024), making the U.S. India’s largest overall trading partner.',
      deRisking: 'Apple, Micron, and other American multinationals accelerating manufacturing migration to India ("China + 1" strategy).'
    },
    diplomacy: {
      quadForum: 'Active summits coordinating infrastructure funding, open radio access networks (Open RAN), and maritime domain surveillance.',
      frictionPoints: 'Disagreements over India’s continued crude oil imports and arms purchases from Russia, U.S. domestic concerns over minority rights, and allegations regarding transnational intelligence plots.'
    },
    regionalIssues: [
      { name: 'Indo-Pacific Maritime Deterrence', desc: 'Ensuring freedom of navigation across the Indian Ocean and Malacca Strait.' },
      { name: 'Management of India-Russia Ties', desc: 'Washington pragmatically accepts India’s defense and energy ties with Moscow to avoid alienating its key counterweight against China.' }
    ],
    keyConcepts: ['STRATEGIC_AUTONOMY', 'QUAD', 'INDO_PACIFIC', 'LEMOA_COMCASA_BECA', 'DEFENCE_COOPERATION', 'SLOC'],
    importantAgreements: ['LEMOA_COMCASA_BECA'],
    defaultChain: 'CHAIN_S400_CAATSA',
    whyThisMatters: 'The U.S.–India partnership is described by international strategists as the defining partnership of the 21st century. It unites the world’s oldest and largest democracies to safeguard the freedom of the Indo-Pacific without infringing on India’s fiercely protected strategic autonomy.',
    verification: {
      source: 'White House Fact Sheets on U.S.-India Partnership / Ministry of External Affairs (India) / U.S. Department of Commerce',
      sourceType: 'Bilateral Joint Statements & Government Trade Data',
      publicationDate: '2024',
      lastVerified: '2026-03',
      confidence: 'Verified (Primary Diplomatic Record)',
      claimType: 'CURRENT'
    }
  }
,

  TWN_IND: {
    id: 'TWN_IND',
    pair: ['TWN', 'IND'],
    title: 'Taiwan ↔ India',
    flags: '🇹🇼 ↔ 🇮🇳',
    classification: 'Strategic Technology Partnership & Indo-Pacific Geoeconomic Alignment',
    atAGlance: {
      status: 'Rapidly Deepening High-Tech & Supply Chain Convergence',
      statusColor: '#06b6d4',
      keyAreas: ['Semiconductor Fabrication (Tata-PSMC Fab)', 'Electronics Manufacturing (Foxconn/Pegatron)', 'Maritime Domain Awareness in SLOCs', 'Skilled Labor Mobility Agreement', 'Mutual Balancing of Chinese Hegemony'],
      majorStrategicInterests: 'Taipei seeks to diversify its overseas manufacturing and supply chains away from mainland China through its "New Southbound Policy," anchoring advanced foundries in democratic India. New Delhi seeks critical semiconductor technology transfer, multi-billion-dollar electronics assembly investments, and skilled workforce integration under "Make in India" and the $10B India Semiconductor Mission, while signaling to Beijing that territorial pressure on the LAC warrants expanded ties with Taipei.'
    },
    howItDeveloped: [
      {
        year: '1995',
        title: 'Establishment of De Facto Diplomatic Missions',
        desc: 'India and Taiwan established reciprocal representative offices: the India-Taipei Association (ITA) in Taipei and the Taipei Economic and Cultural Center (TECC) in New Delhi, enabling commerce, visas, and scientific exchanges.'
      },
      {
        year: '2018',
        title: 'Bilateral Investment Agreement (BIA)',
        desc: 'Both sides signed an updated Bilateral Investment Agreement providing legal protection, international arbitration rights, and national treatment for Taiwanese high-tech companies entering India.'
      },
      {
        year: '2020',
        title: 'Post-Galwan Strategic Realignment',
        desc: 'Following China’s lethal border assault in the Galwan Valley, public opinion and elite strategic consensus in India decisively shifted toward openly embracing deeper relations with Taiwan, recognizing shared threats from PLA aggression.'
      },
      {
        year: '2024',
        title: 'Tata-PSMC $11B Semiconductor Fab & Mumbai TECC',
        desc: 'Tata Electronics partnered with Taiwan’s Powerchip (PSMC) to construct India’s first 28nm/40nm/55nm commercial semiconductor fabrication facility in Dholera, Gujarat, while Taiwan inaugurated its third representative office in Mumbai.'
      }
    ],
    turningPoints: [
      { year: '1995', event: 'Mutual Establishment of ITA & TECC', impact: 'Bypassed absence of formal diplomatic ties to create institutional interaction channels.' },
      { year: '2018', event: 'Signing of Modern Bilateral Investment Agreement', impact: 'Protected capital flows, triggering major electronics manufacturing investments.' },
      { year: '2020', event: 'Galwan Clashes & Public Sympathy Wave', impact: 'Demolished self-imposed Indian restraint on public engagement with Taiwan.' },
      { year: '2024', event: 'Dholera Semiconductor Mega-Fab Launch', impact: 'Cemented Taiwan as the primary technological architect of India’s domestic chip industry.' }
    ],
    security: {
      summary: 'Operates quietly via track-1.5 dialogues, maritime intelligence sharing, and cyber defense cooperation without public military alliances.',
      defenseCooperation: 'Cooperation centers on monitoring Chinese naval movements across the Indian Ocean and Malacca Strait, alongside counter-cyber intelligence on PLA Strategic Support Force activities.',
      regionalDeterrence: 'A stable, autonomous Taiwan prevents the PLA Navy from breaking out uninhibited into the wider Indian Ocean, safeguarding India’s vital sea lines of communication (SLOCs).'
    },
    energy: {
      summary: 'Focuses on the energy transition, solar component supply chains, and green hydrogen technology.',
      globalImplications: 'Taiwan’s energy security relies heavily on tankers passing through the Indian Ocean and Malacca Strait, areas where the Indian Navy exercises primary maritime domain oversight.'
    },
    economy: {
      tradeVolume: 'Bilateral trade exceeded $10.1 Billion in 2023–2024, expanding rapidly across high-tech components, machinery, and specialty chemicals.',
      investment: 'Foxconn alone committed over $1.5 Billion to iPhone manufacturing hubs in Tamil Nadu and Karnataka, employing over 40,000 workers; Tata-PSMC Dholera fab represents an $11 Billion capital commitment.',
      semiconductors: 'India’s electronics design ecosystem combines with Taiwan’s world-class fabrication expertise to build resilient, non-China electronics supply chains.'
    },
    diplomacy: {
      bilateralDialogues: 'Conducted through the India-Taipei Association (ITA) and TECC offices in New Delhi, Chennai, and Mumbai.',
      challenges: 'India adheres to a diplomatic formulation of its "One China policy" in formal communiqués, but has deliberately stopped mentioning "One China" in joint statements since 2010.'
    },
    regionalIssues: [
      { name: 'Taiwan Strait Stability', desc: 'India explicitly stresses the vital importance of peace and stability in the Taiwan Strait, where over $200B of Indian maritime trade transits annually.' },
      { name: 'Two-Front Dilemma', desc: 'Any Chinese military contingency in the Taiwan Strait raises the acute risk of opportunism along the Sino-Indian Himalayan border (LAC).' }
    ],
    keyConcepts: ['STRATEGIC_AUTONOMY', 'FIRST_ISLAND_CHAIN', 'SLOC', 'DEFENCE_COOPERATION', 'STATUS_QUO'],
    importantAgreements: ['INDIA_TAIWAN_BIA_2018'],
    defaultChain: null,
    whyThisMatters: 'Taiwan and India represent the natural democratic bookends of the Indo-Pacific. Taiwan provides the semiconductor hardware and fabrication mastery India requires to modernize, while India provides the scale, talent pool, and strategic depth necessary to de-risk critical global technology from Chinese coercion.',
    verification: {
      source: 'Ministry of External Affairs (India) / Ministry of Foreign Affairs (Taiwan) / India-Taipei Association Official Releases',
      sourceType: 'Bilateral Trade and Diplomatic Records',
      publicationDate: '2024',
      lastVerified: '2026-03',
      confidence: 'High (Verified Strategic Economic Nexus)',
      claimType: 'CURRENT'
    }
  },

  USA_TWN: {
    id: 'USA_TWN',
    pair: ['USA', 'TWN'],
    title: 'United States ↔ Taiwan',
    flags: '🇺🇸 ↔ 🇹🇼',
    classification: 'Strategic Security Partnership & Semiconductor Anchor',
    atAGlance: {
      status: 'Intensifying Deterrence & Strategic Ambiguity Under Pressure',
      statusColor: '#3b82f6',
      keyAreas: ['Taiwan Relations Act & Defensive Arms Transfers', 'Semiconductor Supply Chain Security (TSMC Arizona Fab)', 'First Island Chain Deterrence', 'Presidential Drawdown Authority (PDA) Military Aid', 'Counter-Grey Zone Interoperability'],
      majorStrategicInterests: 'Washington seeks to preserve peace and deterrence across the Taiwan Strait, protect Taiwan’s democratic institutions, ensure uninterrupted supply of sub-3nm semiconductors, and prevent the PLA Navy from breaching the First Island Chain into the Central Pacific. Taipei seeks timely delivery of U.S. arms backlogs (Harpoon missiles, F-16V, HIMARS), enhanced intelligence sharing, asymmetric military training, and international diplomatic space.'
    },
    howItDeveloped: [
      {
        year: '1954',
        title: 'Sino-American Mutual Defense Treaty',
        desc: 'Signed in the wake of the Korean War and First Taiwan Strait Crisis, guaranteeing direct U.S. military protection for Taiwan.'
      },
      {
        year: '1979',
        title: 'Taiwan Relations Act (Public Law 96-8)',
        desc: 'Following U.S. diplomatic normalization with Beijing, Congress enacted the TRA, legally obligating the U.S. to provide defensive weapons to Taiwan and declaring that any non-peaceful effort to determine Taiwan’s future would be of "grave concern" to the United States.'
      },
      {
        year: '1982',
        title: 'The Six Assurances',
        desc: 'President Ronald Reagan gave six written assurances to Taipei, pledging that Washington would not set a date for ending arms sales, would not mediate between Taipei and Beijing, and would not formally recognize Chinese sovereignty over Taiwan.'
      },
      {
        year: '2022–2024',
        title: 'Direct Foreign Military Financing & Presidential Drawdown',
        desc: 'The U.S. enacted the Taiwan Enhanced Resilience Act (TERA), providing grant military aid for the first time through Presidential Drawdown Authority (PDA), mirroring assistance mechanisms previously reserved for Ukraine and Israel.'
      }
    ],
    turningPoints: [
      { year: '1979', event: 'Passage of Taiwan Relations Act', impact: 'Created the enduring statutory basis for U.S.-Taiwan security and commercial relations.' },
      { year: '1996', event: 'Third Taiwan Strait Crisis', impact: 'President Clinton deployed two carrier strike groups (USS Nimitz and Independence), deterring Chinese missile coercion.' },
      { year: '2022', event: 'TSMC Phoenix Arizona Fab $40B Commitment', impact: 'Began building cutting-edge semiconductor fabrication capability directly on American soil.' }
    ],
    security: {
      summary: 'The U.S. is Taiwan’s premier foreign weapons supplier, with over $19 Billion in pending defense equipment deliveries.',
      defenseCooperation: 'Supplies F-16V fighter jets, Patriot PAC-3 interceptors, coastal defense Harpoon missile systems, MQ-9B SeaGuardian drones, and asymmetric landmines (Volcano system). U.S. Special Forces (Green Berets) provide advisory training on Kinmen and Taiwanese training bases.',
      regionalDeterrence: 'U.S. Indo-Pacific Command conducts regular freedom of navigation transits through the Taiwan Strait to reinforce that the waterway remains international waters.'
    },
    energy: {
      summary: 'U.S. exports liquefied natural gas (LNG) and crude oil to Taiwan to help fulfill its energy import demands.',
      globalImplications: 'U.S. energy planners emphasize the fragility of Taiwan’s LNG storage capacity (~11 days), actively advising on hardened energy storage infrastructure.'
    },
    economy: {
      tradeVolume: 'Bilateral trade exceeded $127 Billion in 2023, making Taiwan the 8th largest trading partner of the United States.',
      semiconductors: 'Taiwan fabricates the vast majority of chips designed by Nvidia, AMD, Apple, Qualcomm, and Google, making Taiwan indispensable to the American technology economy.'
    },
    diplomacy: {
      bilateralDialogues: 'Conducted via the American Institute in Taiwan (AIT) in Taipei and the Taipei Economic and Cultural Representative Office (TECRO) in Washington.',
      challenges: 'Managing the delicate policy of "Strategic Ambiguity"—neither guaranteeing American intervention nor ruling it out—as Chinese military pressure accelerates.'
    },
    regionalIssues: [
      { name: 'First Island Chain Defense', desc: 'A Chinese takeover of Taiwan would puncture the First Island Chain, cutting off Japan and South Korea from sea lanes and granting the PLA submarine force direct access to deep Pacific waters.' },
      { name: 'Allied Coalition Coordination', desc: 'The U.S. coordinates with Japan, Australia, and the Philippines to prepare contingency logistics and dispersal options.' }
    ],
    keyConcepts: ['DETERRENCE', 'EXTENDED_DETERRENCE', 'MUTUAL_DEFENCE', 'STATUS_QUO', 'FREEDOM_OF_NAVIGATION', 'FIRST_ISLAND_CHAIN'],
    importantAgreements: ['TAIWAN_RELATIONS_ACT_1979'],
    defaultChain: null,
    whyThisMatters: 'A military confrontation over Taiwan would be the first great-power war between nuclear-armed states since WWII. It would trigger an estimated $10 Trillion global economic crash and irrevocably upend the postwar balance of power in the Indo-Pacific.',
    verification: {
      source: 'Congressional Research Service (CRS Report R44996) / U.S. Department of Defense Annual China Military Power Report',
      sourceType: 'Congressional Research & Pentagon Assessments',
      publicationDate: '2024',
      lastVerified: '2026-03',
      confidence: 'High (Primary Statutory and Defense Framework)',
      claimType: 'CURRENT'
    }
  },

  CHN_TWN: {
    id: 'CHN_TWN',
    pair: ['CHN', 'TWN'],
    title: 'China ↔ Taiwan',
    flags: '🇨🇳 ↔ 🇹🇼',
    classification: 'Existential Sovereignty Dispute & Chokepoint Interdependence',
    atAGlance: {
      status: 'High Tension / Escalating Coercion & Combat Drills',
      statusColor: '#ef4444',
      keyAreas: ['"One China" Principle vs. De Facto Sovereignty', 'Daily ADIZ & Median Line Incursions', 'Cross-Strait Economic Interdependence ($150B+ exports)', 'Quarantine & Maritime Blockade Drills', 'United Front & Cognitive Warfare'],
      majorStrategicInterests: 'Beijing views the "reunification" of Taiwan with the Chinese mainland as an essential national rejuvenation objective and historical mission under Xi Jinping, refusing to renounce the use of armed force. Taipei seeks to preserve its democratic constitution, freedom, and de facto independence, asserting that the Republic of China and the People’s Republic of China are not subordinate to each other.'
    },
    howItDeveloped: [
      {
        year: '1949',
        title: 'Chinese Civil War Division',
        desc: 'The Chinese Communist Party established the PRC in Beijing, while Chiang Kai-shek’s ROC government retreated to Taipei, dividing the Chinese nation across the Taiwan Strait.'
      },
      {
        year: '1992',
        title: 'The 1992 Consensus Discussions',
        desc: 'Semi-official representatives met in Hong Kong, producing a tacit understanding where both sides agreed there is only "One China," though each side held different interpretations of what "China" meant.'
      },
      {
        year: '2005',
        title: 'PRC Anti-Secession Law',
        desc: 'Beijing enacted legislation explicitly authorizing "non-peaceful means" should Taiwan declare formal independence or if possibilities for peaceful reunification are completely exhausted.'
      },
      {
        year: '2016–Present',
        title: 'Communication Freeze & Military Encirclement',
        desc: 'Following the election of DPP President Tsai Ing-wen and successor Lai Ching-te, Beijing severed official dialogue channels and initiated daily combat encirclement drills around the island.'
      }
    ],
    turningPoints: [
      { year: '1949', event: 'Great Cross-Strait Partition', impact: 'Created the enduring territorial divide between Beijing and Taipei.' },
      { year: '1996', event: 'Third Taiwan Strait Crisis', impact: 'PLA fired ballistic missiles off Taiwan ports prior to direct presidential elections.' },
      { year: '2010', event: 'ECFA Economic Framework Agreement', impact: 'Tied cross-strait trade closely together, creating deep economic linkages.' },
      { year: '2022', event: 'Simulated Blockade Drills after Pelosi Visit', impact: 'Permanently erased the informal Taiwan Strait median line buffer.' }
    ],
    security: {
      summary: 'The cross-strait military balance has heavily shifted in Beijing’s favor, with the PLA fielding vastly superior air, naval, and missile assets.',
      defenseCooperation: 'Zero military cooperation; state of constant military alert and tactical shadowing.',
      regionalDeterrence: 'Taiwan employs its "Porcupine Strategy" with mobile anti-ship missiles, sea mines, and air defenses to convince Beijing that an amphibious assault would result in unacceptable losses.'
    },
    energy: {
      summary: 'Taiwan is critically vulnerable to a maritime blockade or quarantine imposed by the PLA Navy.',
      globalImplications: '97.5% of Taiwan’s energy is imported via maritime shipping lanes that pass within reach of PLA coastal missile batteries and naval squadrons.'
    },
    economy: {
      tradeVolume: 'Despite military tensions, cross-strait trade surpassed $160 Billion in 2023, with China relying heavily on Taiwanese semiconductor imports to power its domestic consumer electronics export sector.',
      investment: 'Over 100,000 Taiwanese companies have invested in mainland China over four decades, though capital is actively diversifying to Southeast Asia and India.'
    },
    diplomacy: {
      bilateralDialogues: 'Formal cross-strait channels (SEF and ARATS) remain frozen due to Beijing’s precondition that Taipei accept the "1992 Consensus."',
      challenges: 'Deepening divergence: 80%+ of Taiwan’s population identifies solely as Taiwanese rather than Chinese, rejecting Beijing’s "One Country, Two Systems" model.'
    },
    regionalIssues: [
      { name: 'Grey-Zone Pressure', desc: 'China uses maritime militia, coast guard patrols around Kinmen, and cyber attacks to exhaust Taiwanese defenses without crossing kinetic thresholds.' },
      { name: 'Blockade vs. Invasion', desc: 'Defense analysts increasingly focus on the risk of a Chinese naval quarantine or customs inspection regime rather than a high-risk D-Day style amphibious landing.' }
    ],
    keyConcepts: ['STATUS_QUO', 'GREY_ZONE', 'TERRITORIAL_DISPUTE', 'A2_AD', 'CHOKEPOINT'],
    importantAgreements: ['UNCLOS_1982'],
    defaultChain: null,
    whyThisMatters: 'The Taiwan Strait is the most dangerous geopolitical flashpoint on Earth. A military confrontation here would instantly paralyze the global electronics industry, shutter vital maritime trade corridors, and risk a catastrophic war between the United States and China.',
    verification: {
      source: 'Ministry of National Defense (Taiwan) / Taiwan Affairs Office (State Council PRC) / CSIS China Power Project',
      sourceType: 'Official Defense and Cross-Strait Publications',
      publicationDate: '2024',
      lastVerified: '2026-03',
      confidence: 'High (Primary Flashpoint Record)',
      claimType: 'CURRENT'
    }
  },

  JPN_TWN: {
    id: 'JPN_TWN',
    pair: ['JPN', 'TWN'],
    title: 'Japan ↔ Taiwan',
    flags: '🇯🇵 ↔ 🇹🇼',
    classification: 'Adjacent Democratic Security Partnership & Tech Symbiosis',
    atAGlance: {
      status: 'Close Democratic Solidarity & Expanding Defense Coordination',
      statusColor: '#10b981',
      keyAreas: ['Yonaguni & Nansei Islands Border Defense', 'TSMC Kumamoto Semiconductor Fab ($8.6B)', 'Taiwan Strait Peace as Essential to Japanese Security', 'Disaster Relief & Humanitarian Bonds', 'Fisheries & Maritime Boundary Coordination'],
      majorStrategicInterests: 'Tokyo views Taiwan’s autonomy as existential to Japan’s national survival: late Prime Minister Shinzo Abe famously declared, "A Taiwan emergency is a Japan emergency, and therefore an emergency for the Japan-U.S. alliance." Taipei views Japan as its closest neighboring democratic partner, a crucial backer within the G7, and an indispensable partner in securing the Nansei island chain.'
    },
    howItDeveloped: [
      {
        year: '1895–1945',
        title: 'Colonial Period & Institutional Legacy',
        desc: 'Japan ruled Taiwan for 50 years, constructing railways, irrigation systems, and civil infrastructure, establishing enduring societal and cultural affinities.'
      },
      {
        year: '1972',
        title: 'Diplomatic Severance & Working Ties',
        desc: 'Tokyo normalized ties with Beijing in 1972, maintaining working non-governmental relations with Taipei through the Japan-Taiwan Exchange Association.'
      },
      {
        year: '2021',
        title: 'Shinzo Abe Doctrine & Defense Awakening',
        desc: 'Japan formally linked Taiwan Strait peace to Japan’s own defense in its Defense White Paper, fortifying its southwestern Nansei islands with anti-ship and air defense missile batteries.'
      },
      {
        year: '2024',
        title: 'TSMC Kumamoto Fab Inauguration (JASM)',
        desc: 'TSMC opened its massive $8.6B advanced foundry in Kumamoto with heavy Japanese government subsidies, reviving Japan’s domestic semiconductor manufacturing sector.'
      }
    ],
    turningPoints: [
      { year: '1972', event: 'Japan-Taiwan Exchange Association Created', impact: 'Maintained deep economic, cultural, and political ties without formal embassy recognition.' },
      { year: '2011', event: 'Taiwanese Outpouring after 3/11 Tsunami', impact: 'Taiwan donated over $250 Million, forging unprecedented grassroots emotional bonds.' },
      { year: '2024', event: 'Opening of TSMC Kumamoto Fab (Fab 23)', impact: 'Bound Japan’s automotive and industrial economy directly to Taiwanese semiconductor leadership.' }
    ],
    security: {
      summary: 'Japan’s westernmost inhabited island, Yonaguni, is located just 110 kilometers from the coast of Taiwan, placing Japanese territory directly in the line of any Taiwan Strait conflict.',
      defenseCooperation: 'Japan has deployed Type 12 surface-to-ship missiles, PAC-3 air defense systems, and coastal surveillance radar units across Yonaguni, Ishigaki, and Miyako islands.',
      regionalDeterrence: 'In 2022, Chinese ballistic missiles fired during military drills landed inside Japan’s Exclusive Economic Zone (EEZ), underscoring that Japan cannot remain isolated from a Taiwan contingency.'
    },
    energy: {
      summary: 'Japan imports over 90% of its crude oil from the Middle East, with virtually all of it transiting through waters adjacent to Taiwan.',
      globalImplications: 'A Chinese naval blockade of the Taiwan Strait would force Japanese oil tankers to make costly detours around eastern Australia or face economic strangulation.'
    },
    economy: {
      tradeVolume: 'Bilateral trade exceeded $75 Billion in 2023.',
      investment: 'TSMC’s Kumamoto project represents Japan’s single largest foreign tech investment in decades, followed by plans for a second fab focusing on 6nm/7nm chips.'
    },
    diplomacy: {
      bilateralDialogues: 'Conducted via the Japan-Taiwan Exchange Association and frequent 2+2 parliamentarian security dialogues between Japan’s LDP and Taiwan’s DPP.',
      challenges: 'Navigating Beijing’s vehement diplomatic protests whenever Japanese politicians visit Taipei or call for Taiwan’s inclusion in the WHO or CPTPP.'
    },
    regionalIssues: [
      { name: 'Nansei Island Chain Fortification', desc: 'Ensuring the maritime passages between Okinawa, Miyako, and Yonaguni remain closed to unauthorized PLA Navy breakout.' },
      { name: 'CPTPP Accession', desc: 'Japan actively supports Taiwan’s application to join the Comprehensive and Progressive Agreement for Trans-Pacific Partnership (CPTPP).' }
    ],
    keyConcepts: ['SLOC', 'DETERRENCE', 'FIRST_ISLAND_CHAIN', 'STATUS_QUO', 'MUTUAL_DEFENCE'],
    importantAgreements: ['UNCLOS_1982'],
    defaultChain: null,
    whyThisMatters: 'Geographically, Japan and Taiwan are joined at the hip. If Taiwan were to fall under Chinese military control, Japan’s southern maritime trade lifelines would be permanently dominated by Beijing, making Japan’s defense virtually untenable.',
    verification: {
      source: 'Ministry of Defense (Japan) Defense White Paper / Japan-Taiwan Exchange Association / CSIS Japan Chair',
      sourceType: 'Official Defense Publications & Bilateral Records',
      publicationDate: '2024',
      lastVerified: '2026-03',
      confidence: 'High (Primary Indo-Pacific Security Nexus)',
      claimType: 'CURRENT'
    }
  }

};

// Aliases for reverse lookups
BILATERAL_RELATIONSHIPS.IND_TWN = BILATERAL_RELATIONSHIPS.TWN_IND;
BILATERAL_RELATIONSHIPS.USA_TWN = BILATERAL_RELATIONSHIPS.TWN_USA;
BILATERAL_RELATIONSHIPS.TWN_USA = BILATERAL_RELATIONSHIPS.USA_TWN;
BILATERAL_RELATIONSHIPS.CHN_TWN = BILATERAL_RELATIONSHIPS.TWN_CHN;
BILATERAL_RELATIONSHIPS.TWN_CHN = BILATERAL_RELATIONSHIPS.CHN_TWN;
BILATERAL_RELATIONSHIPS.JPN_TWN = BILATERAL_RELATIONSHIPS.TWN_JPN;
BILATERAL_RELATIONSHIPS.TWN_JPN = BILATERAL_RELATIONSHIPS.JPN_TWN;
