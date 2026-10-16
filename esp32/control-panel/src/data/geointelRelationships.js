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
  },

  USA_CHN: {
    id: 'USA_CHN',
    pair: ['USA', 'CHN'],
    title: 'United States ↔ China',
    flags: '🇺🇸 ↔ 🇨🇳',
    classification: 'Superpower Hegemonic Rivalry & Strategic Competition',
    atAGlance: {
      status: 'Intense Strategic Rivalry / Managed Competition',
      statusColor: '#ef4444',
      keyAreas: ['Taiwan Strait Deterrence', 'Semiconductor Export Controls', 'South China Sea FONOPs', 'Trade Tariffs & Decoupling', 'AI & Quantum Computing Superiority'],
      majorStrategicInterests: 'Washington seeks to preserve the rules-based international order, protect Taiwan from forced reunification, maintain freedom of navigation in the Indo-Pacific, and prevent Chinese military-civilian fusion from dominating critical technologies. Beijing seeks national reunification with Taiwan, expulsion of US forward military presence from the First Island Chain, reform of the international financial architecture, and recognition as the preeminent power in Asia.'
    },
    howItDeveloped: [
      { year: '1971–1972', title: 'Kissinger Secret Visit & Nixon in China', desc: 'Sino-Soviet split enabled the historic opening, triangular diplomacy against Moscow, and Shanghai Communiqué.' },
      { year: '1979', title: 'Formal Normalization & Taiwan Relations Act', desc: 'Washington recognized the PRC as the sole legal government of China while passing the Taiwan Relations Act to ensure Taiwan retained defensive arms.' },
      { year: '2001', title: 'China WTO Accession', desc: 'US supported China’s entry into global trade, betting economic integration would lead to political liberalization; instead, China emerged as the world’s manufacturing superpower.' },
      { year: '2018–Present', title: 'Trade War & High-Tech Decoupling', desc: 'Tariff impositions, strict entity list bans on Huawei/SMIC, and sweeping October 2022 semiconductor export controls initiated the modern technological cold war.' }
    ],
    turningPoints: [
      { year: '1979', event: 'Diplomatic Normalization', impact: 'Shifted Cold War balance against the USSR.' },
      { year: '2001', event: 'WTO Accession', impact: 'Turned China into the undisputed manufacturing engine of the world economy.' },
      { year: '2018', event: 'Trump Administration Section 301 Tariffs', impact: 'Ended the 40-year era of economic engagement in favor of strategic containment.' },
      { year: '2022', event: 'Sweeping Semiconductor Export Restrictions', impact: 'Institutionalized weaponized interdependence to sever China from leading-edge AI chip fabrication.' }
    ],
    security: {
      summary: 'Direct military friction centers on the Taiwan Strait, Second Thomas Shoal, and the East/South China Seas.',
      defenseCooperation: 'No bilateral defense cooperation. High-level military-to-military communication channels were re-established at the 2023 Woodside Summit to reduce collision risks.',
      militaryPresence: 'US Indo-Pacific Command operates carrier strike groups, stealth fighter wings in Japan and Guam, and rotational access to 9 Philippine bases under EDCA.'
    },
    energy: {
      summary: 'China is the world\'s largest crude oil importer, vulnerable to US naval blockades at the Strait of Malacca, prompting heavy domestic clean energy investments and Russian pipeline construction.',
      globalImplications: 'Bilateral competition accelerates the transition to electric vehicles and renewable infrastructure while maintaining friction over rare earth processing dominance.'
    },
    economy: {
      tradeVolume: 'Bilateral trade exceeded $690 Billion in 2023 despite extensive tariffs and technology bans.',
      techColdWar: 'Restrictions on advanced lithography machines (EUV/DUV), AI accelerators (Nvidia H100/H800), and quantum computing research.'
    },
    diplomacy: {
      bilateralDialogues: 'Regular presidential summits, strategic economic dialogues, and working groups on counter-narcotics and climate change.',
      challenges: 'Taiwan sovereignty, military grey-zone harassment, human rights in Xinjiang/Hong Kong, and competing visions for multilateral global governance.'
    },
    regionalIssues: [
      { name: 'Taiwan Flashpoint', desc: 'The most dangerous military flashpoint on earth, with daily Chinese air/sea incursions and US arms sales.' },
      { name: 'South China Sea Disputes', desc: 'US Navy FONOPs directly challenge Chinese militarized artificial islands and territorial claims.' }
    ],
    keyConcepts: ['BALANCE_OF_POWER', 'FIRST_ISLAND_CHAIN', 'DETERRENCE', 'ECONOMIC_SANCTIONS', 'STATUS_QUO'],
    importantAgreements: ['UNCLOS_1982', 'THREE_COMMUNIQUES'],
    defaultChain: 'CHAIN_TAIWAN_SEMICONDUCTORS',
    whyThisMatters: 'The US-China bilateral dynamic is the defining geopolitical relationship of the 21st century. Any direct kinetic clash would plunge the global economy into an immediate depression and carry unprecedented risks of nuclear escalation.',
    verification: {
      source: 'US National Security Strategy / PRC State Council White Papers / CSIS China Power',
      sourceType: 'Government Grand Strategy Documents',
      publicationDate: '2024',
      lastVerified: '2026-03',
      confidence: 'High (Documented Great-Power Conflict)',
      claimType: 'CURRENT'
    }
  },

  USA_RUS: {
    id: 'USA_RUS',
    pair: ['USA', 'RUS'],
    title: 'United States ↔ Russia',
    flags: '🇺🇸 ↔ 🇷🇺',
    classification: 'Nuclear Superpower Confrontation & Proxy Conflict',
    atAGlance: {
      status: 'Adversarial Proxy War / Severed Diplomatic Architecture',
      statusColor: '#ef4444',
      keyAreas: ['Ukraine War & Western Aid Packages', 'Nuclear Strategic Stability & Arms Control', 'NATO Eastern Flank Forward Deployment', 'Arctic Sovereignty & Militarization', 'Cyber & Hybrid Warfare'],
      majorStrategicInterests: 'Washington seeks to enforce the sovereignty of European states, inflict strategic defeat on Russian expansionism in Ukraine, deter attacks on NATO allies, and prevent nuclear escalation. Moscow seeks a recognized sphere of influence in Eastern Europe, formal neutrality of Ukraine, withdrawal of US forward nuclear weapons from Europe, and an end to Western unipolar dominance.'
    },
    howItDeveloped: [
      { year: '1945–1991', title: 'The Cold War Standoff', desc: 'Bipolar ideological and military competition characterized by nuclear deterrence (MAD), proxy wars, and eventual Soviet economic collapse.' },
      { year: '1997–2004', title: 'NATO Eastward Expansion', desc: 'NATO incorporated former Warsaw Pact states (Poland, Czechia, Hungary, Baltics), which Moscow framed as an existential betrayal of post-Cold War security assurances.' },
      { year: '2014', title: 'Annexation of Crimea & Donbas War', desc: 'Following Ukraine’s Euromaidan revolution, Russia annexed Crimea, triggering the first round of Western sanctions and defense posture shifts.' },
      { year: '2022–Present', title: 'Full-Scale Invasion & Total Severance', desc: 'Russia invaded Ukraine; the US and allies responded with over $175B in aid, unprecedented sanctions, and troop deployments to NATO’s eastern border.' }
    ],
    turningPoints: [
      { year: '1991', event: 'Collapse of the Soviet Union', impact: 'Temporarily left the United States as the sole global hyperpower.' },
      { year: '2007', event: 'Putin Munich Security Conference Speech', impact: 'Formally announced Russian rejection of the US-led unipolar world order.' },
      { year: '2022', event: 'Invasion of Ukraine', impact: 'Permanently fractured US-Russian post-Cold War diplomatic and economic relations.' },
      { year: '2023', event: 'Suspension of New START Treaty', impact: 'Ended the last remaining bilateral nuclear arms control treaty with on-site inspections.' }
    ],
    security: {
      summary: 'Together, the US and Russia control over 88% of the world’s nuclear warheads (~11,000 warheads). Direct military clash is prevented by Mutually Assured Destruction.',
      nuclearPosture: 'Russia suspended participation in New START in 2023 and deployed tactical nuclear weapons to Belarus. The US maintains nuclear gravity bombs across five NATO nations (B61).'
    },
    energy: {
      summary: 'US LNG completely replaced Russian pipeline natural gas in the European energy market, achieving transatlantic energy realignments.',
      globalImplications: 'G7 price caps on Russian crude ($60) rerouted Russian oil tankers to India and China.'
    },
    economy: {
      tradeVolume: 'Bilateral trade collapsed to historic lows (<$5B annually) under sweeping embargoes and technology export bans.',
      reservesFreeze: 'Over $300 Billion of Russian Central Bank foreign exchange reserves remain frozen in Western clearing houses (Euroclear).'
    },
    diplomacy: {
      bilateralDialogues: 'Virtually frozen except for prisoner swaps, nuclear deconfliction hotlines, and basic embassy operations.',
      challenges: 'Unprecedented cyber attacks, accusations of sabotage against undersea infrastructure, and total mutual diplomatic distrust.'
    },
    regionalIssues: [
      { name: 'War in Ukraine', desc: 'Active high-intensity conventional war where US weapons (ATACMS, HIMARS, Patriot) engage Russian forces directly.' },
      { name: 'Suwałki Gap & Baltic Front', desc: 'NATO enhanced Forward Presence battlegroups face Russian forces in Kaliningrad and Belarus.' }
    ],
    keyConcepts: ['NUCLEAR_TRIAD', 'STRATEGIC_STABILITY', 'DETERRENCE', 'ECONOMIC_SANCTIONS', 'BALANCE_OF_POWER'],
    importantAgreements: ['NEW_START_2010', 'NATO_RUSSIA_FOUNDING_ACT_1997'],
    defaultChain: 'CHAIN_BRAHMOS_AUTONOMY',
    whyThisMatters: 'The US-Russia confrontation carries the highest instantaneous existential risk on planet Earth due to their vast nuclear arsenals. Any miscalculation in the Ukraine theater could trigger direct hot conflict between nuclear superpowers.',
    verification: {
      source: 'SIPRI Arms Control Yearbook / White House National Security Council / Russian MFA',
      sourceType: 'Government Treaties & Security Policy Disclosures',
      publicationDate: '2024',
      lastVerified: '2026-03',
      confidence: 'Verified (Documented Superpower Conflict)',
      claimType: 'CURRENT'
    }
  },

  RUS_UKR: {
    id: 'RUS_UKR',
    pair: ['RUS', 'UKR'],
    title: 'Russia ↔ Ukraine',
    flags: '🇷🇺 ↔ 🇺🇦',
    classification: 'Active Interstate War & Territorial Sovereignty Conflict',
    atAGlance: {
      status: 'High-Intensity Conventional War of Attrition',
      statusColor: '#FF3030',
      keyAreas: ['Donbas Frontline & Kursk Incursions', 'Black Sea Maritime Drone Campaign', 'Critical Energy Grid Missile Strikes', 'Zaporizhzhia Nuclear Safety', 'NATO & EU Integration'],
      majorStrategicInterests: 'Kyiv seeks the restoration of its internationally recognized 1991 borders (including Crimea), complete withdrawal of Russian occupation forces, war reparations, security guarantees through NATO membership, and prosecution of war crimes. Moscow seeks Ukrainian constitutional neutrality, permanent recognition of its annexation of Crimea, Donetsk, Luhansk, Zaporizhzhia, and Kherson, demilitarization of Ukraine, and elimination of NATO infrastructure on its border.'
    },
    howItDeveloped: [
      { year: '1991', title: 'Independence & Belovezha Accords', desc: 'Ukraine voted overwhelmingly (92%) for independence, dissolving the Soviet Union alongside Russia and Belarus.' },
      { year: '1994', title: 'Budapest Memorandum', desc: 'Ukraine surrendered the world’s third-largest nuclear arsenal (1,900 warheads) to Russia in exchange for security assurances respecting its territorial integrity.' },
      { year: '2014', title: 'Euromaidan & Annexation of Crimea', desc: 'Pro-Western protests ousted President Yanukovych; Russian special forces seized Crimea and ignited war in the Donbas.' },
      { year: '2022–Present', title: 'Full-Scale Russian Invasion', desc: 'Russia launched a multi-axis invasion attempting to take Kyiv; Ukraine repelled the assault, leading to a brutal 1,000-km war of attrition.' }
    ],
    turningPoints: [
      { year: '1994', event: 'Budapest Memorandum', impact: 'Denuclearized Ukraine in exchange for sovereignty guarantees violated in 2014.' },
      { year: '2014', event: 'Annexation of Crimea', impact: 'Broke the post-WWII European norm of territorial inviolability.' },
      { year: '2022', event: 'Battle of Kyiv & Kharkiv/Kherson Counteroffensives', impact: 'Demonstrated Ukrainian military resilience with Western arms.' },
      { year: '2024', event: 'Ukrainian Incursion into Kursk (Russia)', impact: 'Brought active ground combat directly onto sovereign Russian Federation soil.' }
    ],
    security: {
      summary: 'The largest conventional war in Europe since 1945, with casualties exceeding 500,000 across both belligerents.',
      defenseDynamics: 'Massive artillery expenditure, first-person-view (FPV) attack drone swarms, glide-bomb airstrikes, and dense minefields along the Surovikin Line.',
      blackSeaNavalBattle: 'Ukrainian maritime uncrewed surface vessels (Magura V5) sank or disabled one-third of Russia’s Black Sea Fleet, breaking the naval blockade without a conventional navy.'
    },
    energy: {
      summary: 'Severed Russia’s pipeline gas monopoly in Europe; Ukraine’s electrical grid targeted continuously by Russian missile barrages.',
      nuclearRisk: 'Zaporizhzhia Nuclear Power Plant (Europe’s largest) remains under Russian military occupation on the frontline, facing persistent blackout and cooling risks.'
    },
    economy: {
      economicDamage: 'Ukraine lost over 30% of its GDP in 2022 and relies entirely on external Western financial subsidies to fund civilian pensions and governance.',
      reconstructionCost: 'World Bank estimates post-war Ukrainian reconstruction needs exceed $486 Billion.'
    },
    diplomacy: {
      peaceNegotiations: 'Direct negotiations stalled over incompatible demands: Ukraine requires full territorial withdrawal; Russia requires Ukrainian surrender of four partially occupied oblasts.',
      multilateralSupport: 'Ukraine granted EU candidate status; NATO declared Ukraine’s path to membership "irreversible."'
    },
    regionalIssues: [
      { name: 'Crimean Peninsula & Black Sea', desc: 'Russia’s primary warm-water naval bastion, targeted by Ukrainian ATACMS and Storm Shadow strikes.' },
      { name: 'Border Fortifications', desc: 'Heavily mined frontline spanning Luhansk, Donetsk, Zaporizhzhia, and Kherson.' }
    ],
    keyConcepts: ['ATTRITION_WARFARE', 'ASYMMETRIC_WARFARE', 'CRITICAL_INFRASTRUCTURE', 'COLLECTIVE_SECURITY', 'FOOD_SECURITY'],
    importantAgreements: ['BUDAPEST_MEMORANDUM_1994', 'MINSK_II_2015'],
    defaultChain: 'CHAIN_BRAHMOS_AUTONOMY',
    whyThisMatters: 'The war between Russia and Ukraine is the geopolitical earthquake that has redefined 21st-century international relations: remilitarizing Europe, expanding NATO, driving Russia into China’s embrace, and disrupting global food and energy supplies.',
    verification: {
      source: 'UN Human Rights Monitoring Mission in Ukraine / IISS Military Balance / CSIS War in Ukraine',
      sourceType: 'UN & Strategic Defense Assessments',
      publicationDate: '2024',
      lastVerified: '2026-03',
      confidence: 'High (Verified Combat Theater)',
      claimType: 'CURRENT'
    }
  },

  IND_PAK: {
    id: 'IND_PAK',
    pair: ['IND', 'PAK'],
    title: 'India ↔ Pakistan',
    flags: '🇮🇳 ↔ 🇵🇰',
    classification: 'Nuclear-Armed South Asian Rivalry & Frontier Conflict',
    atAGlance: {
      status: 'Precarious Ceasefire / Suspended Diplomatic Engagement',
      statusColor: '#f59e0b',
      keyAreas: ['Line of Control (LoC) & Jammu and Kashmir', 'Nuclear Deterrence & Tactical Weapons', 'Cross-Border Terrorism Interdiction', 'Indus Waters Treaty Allocation', 'China-Pakistan Economic Corridor (CPEC)'],
      majorStrategicInterests: 'New Delhi seeks a permanent end to Pakistani state-sponsored cross-border terrorism, recognition of Jammu & Kashmir as an integral, non-negotiable part of India, and preservation of strategic stability without third-party mediation. Islamabad seeks internationalization of the Kashmir dispute, plebiscite under historic UN resolutions, strategic nuclear parity with India despite an acute economic crisis, and strategic depth through close military alliance with China.'
    },
    howItDeveloped: [
      { year: '1947', title: 'Partition & First Kashmir War', desc: 'British partition of India unleashed mass communal violence and the first war over the accession of the princely state of Jammu and Kashmir.' },
      { year: '1971', title: 'Bangladesh Liberation War', desc: 'Indian military intervention defeated Pakistani forces in East Pakistan, leading to the creation of sovereign Bangladesh and the Simla Agreement.' },
      { year: '1998', title: 'Nuclearization (Pokhran-II & Chagai-I)', desc: 'Both nations conducted back-to-back nuclear tests, permanently transforming the bilateral standoff into a nuclear-armed deterrence relationship.' },
      { year: '1999', title: 'Kargil War', desc: 'Pakistani paramilitary forces intruded into high-altitude Indian posts in Kargil; Indian Army evicted them under nuclear shadows.' },
      { year: '2019', title: 'Balakot Airstrikes & Article 370', desc: 'Following the Pulwama terror attack, the Indian Air Force conducted precision airstrikes inside mainland Pakistan (Balakot). India subsequently revoked the special constitutional status of Jammu & Kashmir.' }
    ],
    turningPoints: [
      { year: '1947', event: 'Partition of the Subcontinent', impact: 'Created foundational territorial, identity, and river-sharing rivalries.' },
      { year: '1972', event: 'Simla Agreement', impact: 'Committed both nations to resolve disputes bilaterally without third-party intervention.' },
      { year: '1998', event: 'Nuclear Testing', impact: 'Established mutual deterrence, raising the cost of full-scale conventional war.' },
      { year: '2019', event: 'Balakot Precedent', impact: 'India established a new doctrine of conventional aerial strikes inside Pakistan in response to cross-border terrorism.' }
    ],
    security: {
      summary: 'Both states possess approximately 165–170 nuclear warheads, deployed across ballistic missiles, strike aircraft, and naval assets.',
      doctrinalContrast: 'India adheres to a strict "No First Use" (NFU) policy with massive retaliatory punishment; Pakistan fields short-range tactical nuclear missiles (Nasr) under a "Full Spectrum Deterrence" posture designed to deter Indian conventional armor.',
      ceasefire: 'A renewed ceasefire along the Line of Control agreed in February 2021 has largely held, reducing civilian shelling casualties.'
    },
    energy: {
      summary: 'The 1960 Indus Waters Treaty (brokered by the World Bank) governs the sharing of six major rivers (Indus, Jhelum, Chenab, Ravi, Beas, Sutlej), surviving multiple wars.',
      currentIssues: 'India has formally notified Pakistan of its intent to renegotiate the treaty to reflect modern hydroelectric needs, climate change, and demographic growth.'
    },
    economy: {
      tradeVolume: 'Direct bilateral trade collapsed to near-zero (<$1B via third-party Dubai conduits) following Pakistan’s suspension of trade after August 2019.',
      cpecTension: 'The China-Pakistan Economic Corridor passes through Pakistan-occupied Kashmir (Gilgit-Baltistan), drawing strong Indian sovereignty objections.'
    },
    diplomacy: {
      bilateralDialogues: 'Formal structured dialogues remain entirely suspended; communication is limited to military Director Generals of Military Operations (DGMO) hotlines.',
      conditions: 'India maintains "terror and talks cannot go together"; Pakistan insists on restoration of Article 370 before engaging in comprehensive talks.'
    },
    regionalIssues: [
      { name: 'Siachen Glacier', desc: 'The world’s highest battlefield at 6,000 meters elevation, held continuously by India since Operation Meghdoot in 1984.' },
      { name: 'Sir Creek', desc: 'Disputed 96-km tidal estuary in the Rann of Kutch marshlands affecting maritime Exclusive Economic Zone boundaries.' }
    ],
    keyConcepts: ['DETERRENCE', 'NUCLEAR_TRIAD', 'PROXY_WAR', 'STRATEGIC_STABILITY', 'BALANCE_OF_POWER'],
    importantAgreements: ['SIMLA_AGREEMENT_1972', 'INDUS_WATERS_TREATY_1960', 'LAHORE_DECLARATION_1999'],
    defaultChain: 'CHAIN_SOUTH_ASIA_LAC',
    whyThisMatters: 'The India-Pakistan rivalry remains one of the world\'s most dangerous flashpoints due to contiguous geographic borders, short missile flight times (under 5 minutes), unresolved territorial claims, and nuclear arsenals.',
    verification: {
      source: 'Ministry of External Affairs (India) / Pakistan Ministry of Foreign Affairs / SIPRI Arms Transfers',
      sourceType: 'Government Bilateral Records & Treaties',
      publicationDate: '2024',
      lastVerified: '2026-03',
      confidence: 'High (Documented Interstate Conflict)',
      claimType: 'CURRENT'
    }
  },

  ISR_IRN: {
    id: 'ISR_IRN',
    pair: ['ISR', 'IRN'],
    title: 'Israel ↔ Iran',
    flags: '🇮🇱 ↔ 🇮🇷',
    classification: 'Existential Ideological Enmity & Direct Missile Standoff',
    atAGlance: {
      status: 'Direct Kinetic Strikes / Shadow War Escalated to Open Confrontation',
      statusColor: '#FF3030',
      keyAreas: ['Iranian Nuclear Enrichment Infrastructure', 'Hezbollah & Houthi Proxy Networks', 'Direct Ballistic & Hypersonic Missile Strikes', 'Covert Cyber Warfare & Targeted Assassinations', 'Abraham Accords Regional Alignment'],
      majorStrategicInterests: 'Jerusalem views a nuclear-capable Iranian regime as an existential threat that must be prevented by any means, including preemptive military strikes on nuclear sites (Fordow, Natanz), while dismantling Iran’s forward rocket encirclement (Hezbollah in Lebanon, Hamas in Gaza). Tehran views the state of Israel as an illegitimate Western imperial outpost that must be eliminated, using its "Axis of Resistance" to impose asymmetric costs on Israel while achieving threshold nuclear deterrent capability.'
    },
    howItDeveloped: [
      { year: '1953–1979', title: 'The Cold Friendship (Imperial Iran)', desc: 'Under the Shah, Iran and Israel maintained close covert intelligence and economic ties (Periphery Doctrine).' },
      { year: '1979', title: 'Islamic Revolution & Rupture', desc: 'Ayatollah Khomeini declared Israel the "Little Satan", severing diplomatic ties and making anti-Zionism a core constitutional tenet of the Islamic Republic.' },
      { year: '1982–2006', title: 'Creation of Hezbollah & Proxy Fronts', desc: 'Iran’s IRGC founded Hezbollah in Lebanon following the Israeli invasion, building an arsenal of over 150,000 rockets on Israel’s northern border.' },
      { year: '2024', title: 'First Direct State-on-State Strikes', desc: 'Following an Israeli strike on the Iranian embassy compound in Damascus, Iran launched over 300 drones and missiles directly at Israel in April 2024, followed by another massive 180+ ballistic missile volley in October 2024, shattered the four-decade shadow war equilibrium.' }
    ],
    turningPoints: [
      { year: '1979', event: 'Iranian Islamic Revolution', impact: 'Transformed closest regional partner into permanent existential adversary.' },
      { year: '2010', event: 'Stuxnet Cyber Attack', impact: 'Demonstrated covert cyber destruction of Iranian nuclear centrifuges at Natanz.' },
      { year: '2020', event: 'Abraham Accords', impact: 'Forged open security partnerships between Israel and Gulf Arab states against Iran.' },
      { year: '2024', event: 'Direct Missile Exchanges', impact: 'Broke the proxy taboo, establishing direct kinetic exchanges between the two homelands.' }
    ],
    security: {
      summary: 'A contest between Israel’s unmatched qualitative military edge (F-35I stealth fighters, Arrow 3 BMD, intelligence penetration) and Iran’s vast quantity of ballistic missiles, cruise missiles, and loitering drones.',
      nuclearDimension: 'Iran possesses enough 60% enriched uranium to produce fuel for multiple nuclear weapons within weeks if weaponized; Israel maintains an unacknowledged sovereign nuclear arsenal (~90 warheads, Jericho III ICBMs, Dolphin-class submarine cruise missiles).'
    },
    energy: {
      summary: 'Iran sits on the world\'s second-largest natural gas reserves and fourth-largest oil reserves; Israeli natural gas fields (Leviathan, Tamar) face Hezbollah anti-ship missile threats in the Mediterranean.'
    },
    diplomacy: {
      bilateralDialogues: 'Zero direct diplomatic contact; messages conveyed exclusively through intermediaries (Switzerland, Oman, Qatar).',
      regionalCoalition: 'Israel coordinates with the US CENTCOM regional air defense architecture alongside Jordan, Saudi Arabia, and the UAE to intercept incoming Iranian missile waves.'
    },
    regionalIssues: [
      { name: 'Syrian Transit Corridor', desc: 'Israeli "campaign between wars" executing hundreds of airstrikes in Syria to prevent IRGC weapons transfers to Hezbollah.' },
      { name: 'Red Sea & Bab el-Mandeb', desc: 'Iranian-armed Houthi forces targeting Israeli-linked commercial shipping and firing ballistic missiles at Eilat.' }
    ],
    keyConcepts: ['BALLISTIC_MISSILE_DEFENSE', 'ASYMMETRIC_WARFARE', 'PROXY_WAR', 'NUCLEAR_PROLIFERATION', 'DETERRENCE'],
    importantAgreements: ['ABRAHAM_ACCORDS_2020', 'JCPOA_2015'],
    defaultChain: 'CHAIN_HORMUZ_OIL',
    whyThisMatters: 'The Israel-Iran duel is the central engine of conflict in the Middle East. Any full-scale escalation carries the immediate threat of Iranian nuclear breakout, Israeli strikes on nuclear facilities, and the closure of the Strait of Hormuz.',
    verification: {
      source: 'IAEA Director General Reports / Israel Defense Forces / U.S. Congressional Research Service',
      sourceType: 'International Nuclear Monitoring & Military Briefings',
      publicationDate: '2024',
      lastVerified: '2026-03',
      confidence: 'High (Direct Kinetic Conflict)',
      claimType: 'CURRENT'
    }
  },

  SAU_IRN: {
    id: 'SAU_IRN',
    pair: ['SAU', 'IRN'],
    title: 'Saudi Arabia ↔ Iran',
    flags: '🇸🇦 ↔ 🇮🇷',
    classification: 'Sectarian Leadership Rivalry & Beijing-Brokered Détente',
    atAGlance: {
      status: 'Fragile Diplomatic Détente / Strategic De-escalation',
      statusColor: '#f59e0b',
      keyAreas: ['2023 Beijing Rapprochement Accord', 'Yemen Peace Negotiations with Houthis', 'Persian Gulf Maritime Security & Oil Stability', 'Regional Proxy Demarcation (Iraq, Syria, Lebanon)', 'OPEC+ Crude Production Quotas'],
      majorStrategicInterests: 'Riyadh seeks to insulate its domestic Vision 2030 economic transformation and mega-projects (NEOM, Red Sea Project) from Iranian drone and missile strikes, wind down the costly military intervention in Yemen, and stabilize Gulf oil shipping lanes. Tehran seeks to break its diplomatic isolation, weaken US-led regional containment, prevent formal Saudi-Israeli normalization, and expand bilateral economic commerce.'
    },
    howItDeveloped: [
      { year: '1979', title: 'Revolutionary Export & Mecca Clashes', desc: 'Iran’s revolutionary theocracy challenged the legitimacy of the Saudi monarchy as the Custodian of the Two Holy Mosques, sparking sectarian tension.' },
      { year: '2016', title: 'Severance of Diplomatic Relations', desc: 'Following the Saudi execution of Shia cleric Nimr al-Nimr, Iranian mobs ransacked the Saudi Embassy in Tehran, leading Riyadh to sever all diplomatic ties.' },
      { year: '2019', title: 'Abqaiq-Khurais Drone Attacks', desc: 'Precision drone and cruise missile strikes knocked out 5.7M bpd of Saudi crude output; lack of direct US retaliation prompted Riyadh to pursue bilateral diplomacy with Iran.' },
      { year: '2023', title: 'Beijing-Brokered Diplomatic Rapprochement', desc: 'China hosted secret negotiations in Beijing, culminating in the historic March 2023 agreement restoring embassies, trade accords, and security pacts.' }
    ],
    turningPoints: [
      { year: '2016', event: 'Embassy Attack & Total Severance', impact: 'Ignited seven years of intense proxy warfare across Yemen, Syria, and Iraq.' },
      { year: '2019', event: 'Aramco Abqaiq Strikes', impact: 'Catalyzed Saudi strategic pivot toward direct conflict de-escalation with Iran.' },
      { year: '2023', event: 'Beijing Agreement', impact: 'Restored formal ties and demonstrated China’s rising diplomatic weight in Middle Eastern statecraft.' }
    ],
    security: {
      summary: 'Direct armed confrontation has subsided following the 2023 détente, but proxy competition in Yemen and maritime surveillance along the Persian Gulf remains active.',
      yemenCeasefire: 'Saudi Arabia engaged in direct bilateral negotiations with Houthi leaders in Sana’a, halting cross-border missile attacks on Saudi territory.'
    },
    energy: {
      summary: 'Saudi Arabia and Iran are founding members of OPEC. Both coordinate on oil production policy, though Iran is exempt from formal quota cuts under US sanctions.',
      reserveWealth: 'Combined, the two nations hold over 30% of global proven petroleum reserves and 20% of global natural gas reserves.'
    },
    diplomacy: {
      bilateralDialogues: 'Embassies reopened in Riyadh and Tehran in 2023; high-level foreign minister visits and defense minister communications ongoing.',
      challenges: 'Deep lingering mistrust; potential collapse of the détente if regional hostilities drag the Gulf into wider conflict.'
    },
    regionalIssues: [
      { name: 'Yemen Settlement', desc: 'Solidifying a permanent political solution between the Yemeni government and the Iranian-backed Houthis.' },
      { name: 'Gulf Maritime Domain', desc: 'Preventing Iranian naval seizures of commercial tankers in the Strait of Hormuz.' }
    ],
    keyConcepts: ['PETRODOLLAR', 'PROXY_WAR', 'CHOKEPOINT', 'ENERGY_SECURITY', 'BALANCE_OF_POWER'],
    importantAgreements: ['BEIJING_AGREEMENT_2023'],
    defaultChain: 'CHAIN_HORMUZ_OIL',
    whyThisMatters: 'The Saudi-Iran relationship dictates the stability of the Persian Gulf and global energy markets. The 2023 rapprochement demonstrated that Middle Eastern powers are willing to use Chinese diplomacy to de-escalate conflicts when Western guarantees appear uncertain.',
    verification: {
      source: 'Beijing Communiqué (March 2023) / Saudi Ministry of Foreign Affairs / Iranian Ministry of Foreign Affairs',
      sourceType: 'Tripartite Intergovernmental Accord',
      publicationDate: '2024',
      lastVerified: '2026-03',
      confidence: 'High (Verified Diplomatic Détente)',
      claimType: 'CURRENT'
    }
  },

  CHN_PHL: {
    id: 'CHN_PHL',
    pair: ['CHN', 'PHL'],
    title: 'China ↔ Philippines',
    flags: '🇨🇳 ↔ 🇵🇭',
    classification: 'South China Sea Maritime Boundary & Island Sovereignty Clash',
    atAGlance: {
      status: 'Escalating Grey-Zone Confrontation / Naval Standoff',
      statusColor: '#FF3030',
      keyAreas: ['Second Thomas Shoal (BRP Sierra Madre)', 'Scarborough Shoal (Panatag Shoal)', 'Chinese Coast Guard Water Cannon Strikes', 'US-Philippine Mutual Defense Treaty Invocation Risk', 'BrahMos Supersonic Missile Coastal Deployment'],
      majorStrategicInterests: 'Manila seeks to defend its sovereign Exclusive Economic Zone (EEZ) and continental shelf as affirmed by the landmark 2016 Hague Arbitral Award, resupply the marooned garrison on the BRP Sierra Madre at Second Thomas Shoal, and assert fishing rights for Philippine fishermen. Beijing seeks to enforce its historic "Nine-Dash Line" sovereignty over virtually the entire South China Sea, blockade Philippine supply missions, and prevent the expansion of US military basing in the northern Philippines opposite Taiwan.'
    },
    howItDeveloped: [
      { year: '1999', title: 'Grounding of BRP Sierra Madre', desc: 'The Philippine Navy intentionally ran aground a WWII-era landing ship at Second Thomas Shoal (Ayungin) to establish a permanent sovereign outpost.' },
      { year: '2012', title: 'Scarborough Shoal Standoff', desc: 'Chinese maritime surveillance ships seized effective control of Scarborough Shoal following a tense naval standoff, evicting Filipino fishermen.' },
      { year: '2016', title: 'Historic Hague Arbitration Ruling', desc: 'The Permanent Court of Arbitration unanimously ruled in favor of the Philippines, declaring China’s Nine-Dash Line historical claims invalid under UNCLOS.' },
      { year: '2022–Present', title: 'Marcos Jr. Pivot & Maritime Friction', desc: 'President Ferdinand Marcos Jr. rejected predecessor Duterte’s appeasement, granted US forces access to 4 additional military bases (EDCA), and publicized aggressive Chinese Coast Guard ramming and water cannon attacks.' }
    ],
    turningPoints: [
      { year: '2016', event: 'Hague Arbitral Award', impact: 'Provided definitive international legal invalidation of China’s South China Sea claims.' },
      { year: '2023', event: 'EDCA Base Expansion', impact: 'Gave the US military access to strategic bases in Cagayan and Batanes, 140 km from Taiwan.' },
      { year: '2024', event: 'BrahMos Coastal Missile Battery Delivery', impact: 'Delivered Indian supersonic anti-ship missiles to the Philippine Marine Corps for stand-off sea denial.' }
    ],
    security: {
      summary: 'Daily grey-zone confrontations between the China Coast Guard / Maritime Militia and Philippine Coast Guard vessels.',
      usTreatyRisk: 'The United States has repeatedly reaffirmed that Article IV of the 1951 US-Philippines Mutual Defense Treaty applies to armed attacks on Philippine armed forces, public vessels, or aircraft anywhere in the South China Sea.'
    },
    energy: {
      summary: 'Reed Bank (Recto Bank) holds an estimated 5.4 trillion cubic feet of natural gas and 115 million barrels of oil within the Philippine EEZ, vital for replacing the depleting Malampaya gas field.',
      dispute: 'Chinese harassment prevents commercial drilling and exploration partnerships without Chinese state equity participation.'
    },
    economy: {
      tradeTies: 'China remains the Philippines’ largest trading partner despite geopolitical friction, creating a dual-track relationship between high-level trade and maritime confrontation.'
    },
    diplomacy: {
      bilateralDialogues: 'Bilateral Consultation Mechanism (BCM) on the South China Sea meets intermittently to manage tactical deconfliction.'
    },
    regionalIssues: [
      { name: 'Second Thomas Shoal', desc: 'Weekly resupply missions to the rusting BRP Sierra Madre face aggressive Chinese blockades, water cannoning, and acoustic weapon harassment.' },
      { name: 'Sabina Shoal (Escoda)', desc: 'Emerging second flashpoint where both coast guards maintain continuous standoff presence.' }
    ],
    keyConcepts: ['UNCLOS', 'A2_AD', 'GREY_ZONE', 'CHOKEPOINT', 'MUTUAL_DEFENCE'],
    importantAgreements: ['UNCLOS_1982', 'US_PHILIPPINES_MDT_1951', 'PHILIPPINES_INDIA_BRAHMOS_2022'],
    defaultChain: 'CHAIN_BRAHMOS_AUTONOMY',
    whyThisMatters: 'The China-Philippines confrontation is widely considered the most likely flashpoint to trigger a direct military clash between the United States and China under the US-Philippine defense treaty.',
    verification: {
      source: 'Permanent Court of Arbitration (The Hague) / Philippine Coast Guard Disclosures / CSIS AMTI',
      sourceType: 'International Judicial Award & Verified Operational Video',
      publicationDate: '2024',
      lastVerified: '2026-03',
      confidence: 'High (Verified Operational Conflict)',
      claimType: 'CURRENT'
    }
  },

  DNK_GRL: {
    id: 'DNK_GRL',
    pair: ['DNK', 'GRL'],
    title: 'Denmark ↔ Greenland',
    flags: '🇩🇰 ↔ 🇬🇱',
    classification: 'Constitutional Realm Partnership & Arctic Resource Sovereignty',
    atAGlance: {
      status: 'Stable Realm Partnership / Evolving Decolonization & Independence Path',
      statusColor: '#3b82f6',
      keyAreas: ['2009 Self-Government Act Secession Framework', 'Annual Danish Block Grant (3.9B DKK)', 'Pituffik (Thule) US Space Base Defense Accord', 'Rare Earths & Critical Minerals (Kvanefjeld)', 'Great-Power Arctic Geopolitics (US Purchase Bid)'],
      majorStrategicInterests: 'Nuuk seeks gradual economic self-sufficiency to enable sovereign independence from Denmark, sustainable extraction of critical minerals without environmental destruction, and autonomous Arctic foreign policy representation. Copenhagen seeks to preserve the unity of the Danish Realm (Rigsfællesskabet), uphold NATO collective defense responsibilities in the Arctic, and counter predatory Chinese or foreign investments in sensitive Arctic infrastructure.'
    },
    howItDeveloped: [
      { year: '1721', title: 'Hans Egede Colonization', desc: 'Dano-Norwegian missionary Hans Egede established permanent European settlement, initiating over two centuries of Danish colonial administration.' },
      { year: '1951', title: 'US-Denmark Defense Agreement', desc: 'Legalized the construction and permanent operation of the strategic American air and space defense base at Thule (Pituffik).' },
      { year: '1979', title: 'Home Rule Act', desc: 'Greenlandic citizens voted for home rule, establishing the Inatsisartut parliament and taking control of internal domestic governance.' },
      { year: '2009', title: 'Act on Greenland Self-Government', desc: 'Recognized Greenlanders as an independent people under international law with the explicit right to declare full independence via popular referendum.' },
      { year: '2019', title: 'The Trump Purchase Bid Crisis', desc: 'US President Donald Trump proposed purchasing Greenland; dismissed by Danish PM Mette Frederiksen and Greenlandic Premier Kim Kielsen, sparking international focus on Arctic mineral security.' }
    ],
    turningPoints: [
      { year: '1953', event: 'Colonial Status Abolition', impact: 'Greenland became an equal county within the Kingdom of Denmark under constitutional reform.' },
      { year: '2009', event: 'Self-Government Act', impact: 'Transferred full subsoil mineral rights to Greenland and legalized eventual independence.' },
      { year: '2019', event: 'US Purchase Bid Rebuff', impact: 'Re-centered Greenland on the frontline of superpower critical mineral and Arctic military strategy.' }
    ],
    security: {
      summary: 'Denmark retains sovereign constitutional responsibility for defense and foreign affairs through Joint Arctic Command (Arktisk Kommando) headquartered in Nuuk.',
      usPresence: 'Hosts Pituffik Space Base (formerly Thule Air Base), housing the 12th Space Warning Squadron tracking ballistic missile launches over the North Pole.'
    },
    energy: {
      summary: 'Greenland holds an estimated 38.5 million tonnes of rare earth oxides (Kvanefjeld and Tanbreez deposits), enough to break China’s global monopoly.',
      uraniumBan: 'The Greenlandic parliament enacted a moratorium on uranium extraction in 2021, halting projects with radioactive byproducts.'
    },
    economy: {
      blockGrant: 'Denmark provides an annual block grant of ~3.9 Billion DKK ($560 Million), representing over 50% of the Greenlandic government budget.',
      fishingDominance: 'Seafood (shrimp, halibut) accounts for over 90% of Greenland’s sovereign merchandise exports.'
    },
    diplomacy: {
      representation: 'Greenland maintains independent representation in Washington, Brussels, and Beijing alongside Danish diplomatic missions.'
    },
    regionalIssues: [
      { name: 'Arctic Council Governance', desc: 'Balancing regional polar cooperation amidst the suspension of formal council meetings with Russia.' },
      { name: 'Airport Infrastructure Finance', desc: 'Denmark financed major airport expansions in Nuuk and Ilulissat to block Chinese state construction bids.' }
    ],
    keyConcepts: ['STRATEGIC_AUTONOMY', 'RESOURCE_CURSE', 'EARLY_WARNING', 'STATUS_QUO'],
    importantAgreements: ['GREENLAND_SELF_GOVERNMENT_ACT_2009', 'US_DENMARK_DEFENSE_AGREEMENT_1951'],
    defaultChain: 'CHAIN_ARCTIC_SCRAMBLE',
    whyThisMatters: 'The Denmark-Greenland dynamic is the geopolitical key to the Western Arctic. Whoever controls Greenland commands the central early-warning radar for North American nuclear defense and the largest undeveloped critical mineral reserves outside of China.',
    verification: {
      source: 'Act on Greenland Self-Government (Act No. 473 of 12 June 2009) / Danish Ministry of Foreign Affairs / Government of Greenland (Naalakkersuisut)',
      sourceType: 'Sovereign Statutory Law & Official Treaties',
      publicationDate: '2024',
      lastVerified: '2026-03',
      confidence: 'High (Verified Realm Partnership)',
      claimType: 'CURRENT'
    }
  },

  KOR_PRK: {
    id: 'KOR_PRK',
    pair: ['KOR', 'PRK'],
    title: 'South Korea ↔ North Korea',
    flags: '🇰🇷 ↔ 🇰🇵',
    classification: 'Divided Peninsula Nuclear Standoff & Armistice Confrontation',
    atAGlance: {
      status: 'Acute Nuclear Tension / Formally Declared Hostile Belligerents',
      statusColor: '#ef4444',
      keyAreas: ['Demilitarized Zone (DMZ) Fortifications', 'North Korean Nuclear Warheads & Hypersonic Tests', 'US-ROK Extended Deterrence (Washington Declaration)', 'Northern Limit Line (NLL) Maritime Clashes', 'Denunciation of Peaceful Reunification by Pyongyang'],
      majorStrategicInterests: 'Seoul seeks complete denuclearization of the Korean Peninsula, deterrence against North Korean invasion or nuclear blackmail through the US nuclear umbrella, and peace preservation. Pyongyang seeks international recognition as a permanent nuclear weapons state, removal of US forces from South Korea, regime survival, and in 2024 formally declared South Korea its "principal enemy", abandoning the historic goal of peaceful reconciliation.'
    },
    howItDeveloped: [
      { year: '1945', title: 'Post-WWII Division at 38th Parallel', desc: 'Soviet and American occupation zones solidified into two separate ideological states.' },
      { year: '1950–1953', title: 'The Korean War & Armistice', desc: 'North Korean invasion triggered UN military intervention; concluded with the 1953 Armistice Agreement without a formal peace treaty.' },
      { year: '2000–2007', title: 'Sunshine Policy Era', desc: 'Inter-Korean summits in Pyongyang, Kaesong Industrial Complex, and Mount Kumgang tourism fostered temporary reconciliation.' },
      { year: '2024', title: 'Abandonment of Reunification Doctrine', desc: 'Kim Jong Un formally abolished reunification agencies, blew up cross-border rail links, and amended the constitution to define South Korea as the permanent enemy state.' }
    ],
    turningPoints: [
      { year: '1953', event: 'Korean Armistice Agreement', impact: 'Established the Demilitarized Zone (DMZ) as the most heavily fortified border on earth.' },
      { year: '2006', event: 'First North Korean Nuclear Test', impact: 'Elevated peninsular confrontation to a nuclear-armed standoff.' },
      { year: '2023', event: 'Washington Declaration', impact: 'Established the US-ROK Nuclear Consultative Group and port visits by US nuclear SSBNs.' },
      { year: '2024', event: 'Russia-North Korea Comprehensive Strategic Partnership', impact: 'Revived Soviet-era mutual defense clause, providing Russian tech for North Korean troops.' }
    ],
    security: {
      summary: 'Over 1.5 million active military personnel stationed along the 250-km DMZ within artillery range of Seoul (metropolitan population 25 million).',
      usForces: '28,500 US troops stationed in South Korea under US Forces Korea (USFK) / Combined Forces Command (CFC).'
    },
    diplomacy: {
      status: 'All hotlines and inter-Korean liaison offices severed; military deconfliction buffer zone established in 2018 completely suspended by both sides.'
    },
    regionalIssues: [
      { name: 'Northern Limit Line (NLL)', desc: 'Contested maritime border in the Yellow Sea; site of recurring naval skirmishes and artillery exchanges.' },
      { name: 'Ballistic Missile Tests', desc: 'Routine North Korean launches of solid-fueled Hwasong-18 ICBMs and submarine-launched ballistic missiles.' }
    ],
    keyConcepts: ['DETERRENCE', 'NUCLEAR_PROLIFERATION', 'EXTENDED_DETERRENCE', 'EARLY_WARNING', 'BALLISTIC_MISSILE_DEFENSE'],
    importantAgreements: ['KOREAN_ARMISTICE_1953', 'WASHINGTON_DECLARATION_2023'],
    defaultChain: 'CHAIN_KOREAN_PENINSULA_DETERRENCE',
    whyThisMatters: 'The Korean Peninsula is the ultimate high-density nuclear tripwire. A resumption of active conflict would inflict catastrophic destruction on Seoul within hours and immediately draw the United States and China into direct war.',
    verification: {
      source: 'ROK Ministry of National Defense White Paper / KCNA Disclosures / UN Command',
      sourceType: 'Official Defense Publications & Armistice Monitoring',
      publicationDate: '2024',
      lastVerified: '2026-03',
      confidence: 'High (Documented Interstate Confrontation)',
      claimType: 'CURRENT'
    }
  },

  IND_BGD: {
    id: 'IND_BGD',
    pair: ['IND', 'BGD'],
    title: 'India ↔ Bangladesh',
    flags: '🇮🇳 ↔ 🇧🇩',
    classification: 'Subcontinental Neighbor Strategic Partnership & Border Recalibration',
    atAGlance: {
      status: 'Recalibrating / Transitional Diplomatic Standoff',
      statusColor: '#f59e0b',
      keyAreas: ['4,096 km Land Boundary Security & Enclaves', 'Trans-Boundary River Water Sharing (Teesta)', 'Transit Corridors to India’s Northeast (Chicken’s Neck)', 'Minority Protection Post-Hasina Ouster', 'Bilateral Trade & Power Transmission (Adani Power)'],
      majorStrategicInterests: 'New Delhi seeks a stable, secular Bangladesh that refuses to harbor anti-India insurgent groups, ensures the safety of religious minorities, permits transit cargo corridors connecting mainland India to the landlocked Northeast states, and prevents Chinese military naval staging in the Bay of Bengal. Dhaka seeks equitable trans-boundary river water agreements (especially Teesta), economic tariff concessions, non-lethal border management by the Indian BSF, and diversified foreign policy balancing India with China and Western development partners.'
    },
    howItDeveloped: [
      { year: '1971', title: 'Liberation War & Indian Military Intervention', desc: 'India intervened militarily to defeat Pakistani forces, giving birth to independent Bangladesh and forging deep historical and strategic solidarity.' },
      { year: '1996', title: 'Ganges Water Sharing Treaty', desc: 'Landmark 30-year treaty signed to govern water allocation at the Farakka Barrage during dry season months.' },
      { year: '2015', title: 'Historic Land Boundary Agreement (LBA)', desc: 'Resolved centuries-old border disputes by peacefully exchanging 162 sovereign enclaves along the 4,096 km frontier.' },
      { year: '2024', title: 'Ouster of Sheikh Hasina & Interim Government', desc: 'Mass student protests forced long-ruling pro-India Prime Minister Sheikh Hasina to flee to India; interim government led by Nobel laureate Muhammad Yunus took power, initiating a delicate recalibration in bilateral ties.' }
    ],
    turningPoints: [
      { year: '1971', event: 'Bangladesh Independence', impact: 'Eliminated Pakistan’s two-front military encirclement of India.' },
      { year: '2015', event: 'Land Boundary Agreement Ratification', impact: 'Permanently demarcated the world’s fifth-longest land border.' },
      { year: '2024', event: 'Fall of Awami League Government', impact: 'Ended 15 years of uninterrupted close strategic alignment between New Delhi and Dhaka.' }
    ],
    security: {
      summary: 'Shares a 4,096-kilometer porous border, the longest land border India shares with any neighbor.',
      connectivity: 'Bangladesh granted India transit access through Chittagong and Mongla ports, drastically cutting transport times to Tripura and Assam bypassing the Siliguri Corridor ("Chicken\'s Neck").'
    },
    energy: {
      summary: 'Cross-border power transmission delivers over 1,600 MW of electricity from Indian power grids (including Adani Power Godda plant) to Bangladesh; India-Bangladesh Friendship Pipeline delivers high-speed diesel directly.'
    },
    economy: {
      tradeVolume: 'Bilateral trade reached $15.9 Billion in 2023, with India as Bangladesh’s second-largest import partner in Asia.',
      tariffs: 'India grants duty-free quota-free access to Bangladeshi goods under SAFTA.'
    },
    diplomacy: {
      bilateralDialogues: 'Joint River Commission (JRC), regular Home and Commerce Secretary-level talks, and BIMSTEC multilateral cooperation.',
      challenges: 'Public anti-India sentiment in Bangladesh following political upheavals, concerns over border fencing killings, and unresolved Teesta water sharing.'
    },
    regionalIssues: [
      { name: 'Teesta River Dispute', desc: 'Dispute over water allocation during lean months, blocked domestically by West Bengal state politics.' },
      { name: 'Siliguri Corridor Security', desc: 'India’s ultra-sensitive 22-km wide strategic bottleneck connecting the Northeast, highly sensitive to political instability in neighboring northern Bangladesh.' }
    ],
    keyConcepts: ['STRATEGIC_AUTONOMY', 'CHOKEPOINT', 'FOOD_SECURITY', 'BALANCE_OF_POWER'],
    importantAgreements: ['LAND_BOUNDARY_AGREEMENT_2015', 'GANGES_WATER_TREATY_1996'],
    defaultChain: 'CHAIN_SOUTH_ASIA_LAC',
    whyThisMatters: 'Bangladesh is India’s most critical land neighbor. A cooperative government in Dhaka guarantees security for India’s vulnerable northeastern frontier and access to the Bay of Bengal, whereas a hostile government opens a direct vector for foreign intelligence infiltration.',
    verification: {
      source: 'Ministry of External Affairs (India) / Bangladesh Ministry of Foreign Affairs / World Bank South Asia',
      sourceType: 'Bilateral Treaties & Official Communiqués',
      publicationDate: '2024',
      lastVerified: '2026-03',
      confidence: 'High (Verified Regional Partnership)',
      claimType: 'CURRENT'
    }
  },

  TUR_RUS: {
    id: 'TUR_RUS',
    pair: ['TUR', 'RUS'],
    title: 'Turkey ↔ Russia',
    flags: '🇹🇷 ↔ 🇷🇺',
    classification: 'Transactional Adversarial Interdependence & Black Sea Balancing',
    atAGlance: {
      status: 'Strategic Balancing / Compartmentalized Cooperation',
      statusColor: '#f59e0b',
      keyAreas: ['Black Sea Montreux Convention Enforcement', 'TurkStream Natural Gas Pipeline & Akkuyu Nuclear Plant', 'S-400 Missile Procurement & F-35 Expulsion Fallout', 'Geopolitical Proxy Standoffs (Syria, Libya, South Caucasus)', 'Russian Grain & Energy Commerce Intermediation'],
      majorStrategicInterests: 'Ankara seeks to maximize its strategic autonomy as an independent Eurasian bridge power, leverage Russian natural gas and tourism while balancing Moscow’s naval power in the Black Sea, and position President Erdoğan as the primary diplomatic mediator between Russia and the West. Moscow seeks to exploit divisions within NATO by maintaining close defense and economic ties with Turkey, secure maritime gas transit to southern Europe via TurkStream, and ensure Turkish neutrality regarding unilateral Western financial sanctions.'
    },
    howItDeveloped: [
      { year: '1568–1918', title: 'Centuries of Russo-Turkish Wars', desc: 'Fought 12 major wars over three centuries for control of the Black Sea, Crimea, the Caucasus, and the Turkish Straits.' },
      { year: '2015', title: 'Syrian Jet Shoot-Down Crisis', desc: 'Turkish F-16 shot down a Russian Su-24 bomber along the Syrian border, pushing the two nations to the brink of war before rapid reconciliation.' },
      { year: '2017–2019', title: 'S-400 Missile Deal & US Rift', desc: 'Turkey purchased the Russian S-400 Triumf air defense system for $2.5B, prompting the US to expel Turkey from the F-35 stealth fighter program and impose CAATSA sanctions.' },
      { year: '2022–Present', title: 'Montreux Enforcement & Wartime Mediation', desc: 'Turkey closed the Bosphorus to non-littoral warships under the 1936 Montreux Convention, halting Russian naval reinforcements while brokering the 2022 UN Black Sea Grain Deal.' }
    ],
    turningPoints: [
      { year: '1936', event: 'Montreux Convention', impact: 'Granted Turkey sovereign control to close the Black Sea straits to belligerent warships during war.' },
      { year: '2019', event: 'S-400 Delivery to Turkey', impact: 'Created an unprecedented breach between a NATO member and Washington.' },
      { year: '2022', event: 'Closure of Bosphorus to Warships', impact: 'Decisively constrained the Russian Black Sea Fleet during the invasion of Ukraine.' },
      { year: '2022', event: 'Istanbul Black Sea Grain Agreement', impact: 'Proved Turkey’s unique ability to mediate functional wartime treaties between Moscow and Kyiv.' }
    ],
    security: {
      summary: 'Turkey possesses NATO’s second-largest standing military; simultaneously coordinates and clashes with Russia across multiple active battlegrounds.',
      proxyContrast: 'Turkish armed Bayraktar TB2 drones and armored vehicles support Ukraine and Azerbaijan, while Russian forces back the Syrian Assad regime and Armenia.'
    },
    energy: {
      summary: 'Deep energy interdependence: Russia supplies nearly 40% of Turkey’s natural gas via the Blue Stream and TurkStream pipelines across the Black Sea.',
      nuclearMegaProject: 'Rosatom is constructing Turkey’s first nuclear power plant at Akkuyu ($20B BOO model), operating under Russian majority ownership.'
    },
    economy: {
      tradeVolume: 'Bilateral trade exceeded $55 Billion in 2023, boosted by Russian crude oil imports and millions of Russian tourists visiting Mediterranean resorts.',
      sanctionsHub: 'Turkey refused to join Western sanctions against Russia, serving as a primary transit and financial intermediation hub.'
    },
    diplomacy: {
      bilateralStyle: 'Direct leader-to-leader transactional diplomacy between Recep Tayyip Erdoğan and Vladimir Putin, based on pragmatic realpolitik.'
    },
    regionalIssues: [
      { name: 'Turkish Straits (Bosphorus/Dardanelles)', desc: 'Sole maritime conduit connecting the Black Sea to the Mediterranean, guarded strictly by Turkish naval authorities.' },
      { name: 'South Caucasus Balancing', desc: 'Turkey backed Azerbaijan in reclaiming Nagorno-Karabakh in 2020–2023, eclipsing historic Russian peacekeeper influence in the region.' }
    ],
    keyConcepts: ['STRATEGIC_AUTONOMY', 'CHOKEPOINT', 'A2_AD', 'BALANCE_OF_POWER', 'ECONOMIC_SANCTIONS'],
    importantAgreements: ['MONTREUX_CONVENTION_1936', 'TURKSTREAM_AGREEMENT_2016'],
    defaultChain: 'CHAIN_BRAHMOS_AUTONOMY',
    whyThisMatters: 'The Turkey-Russia relationship is the ultimate masterclass in geopolitical compartmentalization: two historic rivals simultaneously fighting proxy wars against each other while maintaining multi-billion-dollar gas pipelines, nuclear plants, and diplomatic mediation channels.',
    verification: {
      source: 'Montreux Convention 1936 Text / Turkish Ministry of Foreign Affairs / Kremlin Press Releases',
      sourceType: 'International Treaty & Official Government Communiqués',
      publicationDate: '2024',
      lastVerified: '2026-03',
      confidence: 'High (Verified Transactional Partnership)',
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

// Reverse lookups for newly added core dyads
BILATERAL_RELATIONSHIPS.CHN_USA = BILATERAL_RELATIONSHIPS.USA_CHN;
BILATERAL_RELATIONSHIPS.RUS_USA = BILATERAL_RELATIONSHIPS.USA_RUS;
BILATERAL_RELATIONSHIPS.UKR_RUS = BILATERAL_RELATIONSHIPS.RUS_UKR;
BILATERAL_RELATIONSHIPS.PAK_IND = BILATERAL_RELATIONSHIPS.IND_PAK;
BILATERAL_RELATIONSHIPS.IRN_ISR = BILATERAL_RELATIONSHIPS.ISR_IRN;
BILATERAL_RELATIONSHIPS.IRN_SAU = BILATERAL_RELATIONSHIPS.SAU_IRN;
BILATERAL_RELATIONSHIPS.PHL_CHN = BILATERAL_RELATIONSHIPS.CHN_PHL;
BILATERAL_RELATIONSHIPS.GRL_DNK = BILATERAL_RELATIONSHIPS.DNK_GRL;
BILATERAL_RELATIONSHIPS.PRK_KOR = BILATERAL_RELATIONSHIPS.KOR_PRK;
BILATERAL_RELATIONSHIPS.BGD_IND = BILATERAL_RELATIONSHIPS.IND_BGD;
BILATERAL_RELATIONSHIPS.RUS_TUR = BILATERAL_RELATIONSHIPS.TUR_RUS;

