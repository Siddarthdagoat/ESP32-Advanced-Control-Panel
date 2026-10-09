// GEOINTEL Comprehensive Geopolitical Concept & Key-Term Reference Database
// Central registry of specialized military, geopolitical, economic, geographic, and historical terminology.
// Provides both global definitions and contextual framing by sovereign entity (e.g., India, Russia, USA, China).

export const GEOPOLITICAL_TERMS = {
  'nuclear-triad': {
    id: 'nuclear-triad',
    name: 'Nuclear Triad',
    aliases: ['Nuclear Triad', 'nuclear triad', 'strategic triad', 'Strategic Triad', 'triad'],
    category: 'Military Strategy',
    shortDefinition: 'A strategic military structure consisting of three components: land-based intercontinental ballistic missiles (ICBMs), strategic nuclear submarines (SSBNs), and strategic bomber aircraft.',
    detailedExplanation: 'The three legs operate complementarily to eliminate vulnerabilities:\n• Land-Based ICBMs: Provide prompt, high-accuracy strike capability and responsive deterrence.\n• Submarine-Launched Ballistic Missiles (SLBMs/SSBNs): Provide virtually undetectable, survivable second-strike retaliation from the ocean depths.\n• Strategic Bombers: Provide flexible, visible signaling and can be recalled post-launch prior to weapon release.',
    whyItMatters: 'Guarantees second-strike survivability. If an adversary launches a surprise pre-emptive first strike targeting missile silos and airbases, hidden SSBNs ensure catastrophic retaliation, rendering any initial attack irrational under Mutually Assured Destruction (MAD).',
    contextualFraming: {
      RUS: 'Russia maintains the world\'s largest deployed triad, anchored by silo/road-mobile RS-24 Yars ICBMs, Borei-class SSBNs armed with Bulava missiles, and Tu-160/Tu-95MS strategic bombers, serving as Moscow\'s ultimate sovereign security guarantee against NATO.',
      USA: 'The US nuclear triad consists of Minuteman III silos across the Great Plains, Ohio-class (transitioning to Columbia-class) SSBNs, and B-2 Spirit / B-52H (and upcoming B-21 Raider) stealth bombers, underpinning both homeland and extended deterrence for NATO and Asian allies.',
      IND: 'India achieved a credible operational nuclear triad in 2018 with the deterrent patrol of SSBN INS Arihant, complementing land-based Agni-series missiles and air-delivery Mirage 2000/Rafale platforms under a strict "No First Use" (NFU) nuclear doctrine.',
      CHN: 'China has recently achieved a true nuclear triad with DF-41 road/rail-mobile ICBMs, Type 094 Jin-class SSBNs with JL-2/JL-3 missiles, and air-refuelable H-6N bombers, rapidly expanding its silo fields in Xinjiang and Gansu.'
    },
    majorActors: ['United States', 'Russia', 'China', 'India'],
    historicalBackground: 'Conceived in the 1960s during the Cold War between the US and the Soviet Union as both sides sought to prevent a surprise decapitation strike from neutralizing their retaliatory capability.',
    currentRelevance: 'All four triad powers are undergoing comprehensive trillion-dollar triad modernization programs amidst the expiration of bilateral US-Russian arms control treaties (New START).',
    relatedCountries: ['RUS', 'USA', 'CHN', 'IND'],
    relatedEvents: ['Cold War Nuclear Standoff', 'New START Expiration'],
    relatedLocations: ['Murmansk Submarine Base', 'Malmstrom Air Force Base', 'Vishakhapatnam Submarine Base'],
    relatedTerms: ['icbm', 'slbm', 'ssbn', 'strategic-bomber', 'nuclear-deterrence', 'arms-control'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Nuclear_triad',
    officialSources: [
      { title: 'US Department of Defense — Nuclear Posture Review', type: 'government-doctrine', url: 'https://www.defense.gov' },
      { title: 'SIPRI Arms Control & Nuclear Disarmament Database', type: 'research-institute', url: 'https://www.sipri.org' },
      { title: 'Russian Federation Basic Principles of State Policy on Nuclear Deterrence', type: 'official-doctrine', url: 'http://kremlin.ru' }
    ],
    sources: [
      { title: 'Stockholm International Peace Research Institute (SIPRI)', type: 'research', url: 'https://www.sipri.org' },
      { title: 'International Institute for Strategic Studies (IISS) Military Balance', type: 'defence-publication', url: 'https://www.iiss.org' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'nato': {
    id: 'nato',
    name: 'NATO',
    aliases: ['NATO', 'North Atlantic Treaty Organization', 'North Atlantic Alliance', 'Atlantic Alliance'],
    category: 'Alliances & Blocs',
    shortDefinition: 'A 32-member transatlantic political and military alliance committed to collective defence under Article 5 of the North Atlantic Treaty.',
    detailedExplanation: 'Founded on April 4, 1949, by 12 Western nations. Its core principle is Article 5: an armed attack against one member in Europe or North America is considered an attack against them all. Decision-making is consensus-based via the North Atlantic Council.',
    whyItMatters: 'It represents the most formidable military alliance in modern history, possessing shared command structures, integrated air defence, and common technical standards that anchor Western security architecture.',
    contextualFraming: {
      RUS: 'Russia views NATO\'s eastward expansion since 1997 (incorporating Poland, the Baltic states, Finland, and Sweden) as an existential encirclement and a direct violation of verbal post-Cold War security assurances.',
      USA: 'The US serves as NATO\'s nuclear backbone and primary military contributor, providing the supreme allied commander (SACEUR) and strategic logistics while urging European members to meet the 2% GDP defense spending benchmark.',
      IND: 'India is not a NATO member and maintains non-alignment, though New Delhi maintains bilateral strategic partnerships with key member states (France, US, UK) while avoiding formal bloc entanglement.'
    },
    majorActors: ['United States', 'United Kingdom', 'France', 'Germany', 'Poland', 'Turkey'],
    historicalBackground: 'Created in 1949 to deter Soviet military expansion across war-torn Western Europe and prevent the resurgence of European militarism.',
    currentRelevance: 'Following the 2022 invasion of Ukraine, NATO added Finland and Sweden, deployed multinational battlegroups along its eastern flank, and raised defense spending commitments across Europe.',
    relatedCountries: ['USA', 'GBR', 'FRA', 'DEU', 'POL', 'TUR', 'FIN', 'SWE', 'RUS', 'UKR'],
    relatedEvents: ['1949 Washington Treaty', 'Cold War Expansion', 'Ukraine War Rearmament'],
    relatedLocations: ['Brussels HQ', 'Suwałki Gap', 'Baltic Corridor'],
    relatedTerms: ['collective-security', 'extended-deterrence', 'warsaw-pact', 'suwalki-gap', 'balance-of-power'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/NATO',
    officialSources: [
      { title: 'North Atlantic Treaty Organization Official Portal', type: 'official', url: 'https://www.nato.int' },
      { title: 'The North Atlantic Treaty (Washington, 1949)', type: 'treaty-document', url: 'https://www.nato.int/cps/en/natohq/official_texts_17120.htm' }
    ],
    sources: [
      { title: 'NATO Public Diplomacy Division', type: 'official', url: 'https://www.nato.int' },
      { title: 'Chatham House Transatlantic Security Papers', type: 'research', url: 'https://www.chathamhouse.org' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'brics': {
    id: 'brics',
    name: 'BRICS',
    aliases: ['BRICS', 'BRICS+', 'BRICS Plus'],
    category: 'Alliances & Blocs',
    shortDefinition: 'An intergovernmental bloc of leading emerging economies advocating for multipolarity, reform of the Bretton Woods institutions, and alternative international payment settlement systems.',
    detailedExplanation: 'Originally coined as BRIC by Goldman Sachs in 2001, formalized diplomatically in 2009 by Brazil, Russia, India, and China, with South Africa joining in 2010. In 2024, it expanded to BRICS+ with Egypt, Ethiopia, Iran, and the UAE joining as full members.',
    whyItMatters: 'Represents over 45% of the world population and over 35% of global GDP (PPP), functioning as the primary institutional vehicle for non-Western economies seeking economic de-dollarization and multilateral reform.',
    contextualFraming: {
      IND: 'For India, BRICS is a cornerstone of Strategic Autonomy and Global South leadership. New Delhi champions economic multipolarity and alternative trade settlement while strictly resisting turning BRICS into an anti-Western or China-dominated bloc.',
      RUS: 'For Russia, BRICS is a vital diplomatic and commercial counterweight to Western sanctions, providing alternative markets for hydrocarbons, fertilizer, and grain settled in national currencies.',
      CHN: 'China views BRICS as a platform to project economic leadership, expand South-South development financing through the New Development Bank, and accelerate the internationalization of the Renminbi.'
    },
    majorActors: ['India', 'Brazil', 'Russia', 'China', 'South Africa', 'Egypt', 'UAE', 'Iran'],
    historicalBackground: 'Conceived in the aftermath of the 2008 global financial crisis to challenge the Western monopoly over the IMF and World Bank quotas.',
    currentRelevance: 'At the 2024 Kazan Summit, BRICS debated cross-border payment platforms (BRICS Pay / BRICS Bridge) to mitigate risks of unilateral Western secondary financial sanctions.',
    relatedCountries: ['IND', 'RUS', 'CHN', 'BRA', 'ZAF', 'EGY', 'IRN', 'ARE'],
    relatedEvents: ['2009 Yekaterinburg Summit', '2014 Fortaleza Summit (NDB)', '2024 Kazan Summit'],
    relatedLocations: ['New Development Bank HQ (Shanghai)'],
    relatedTerms: ['multipolarity', 'strategic-autonomy', 'de-dollarization', 'sanctions', 'non-aligned-movement'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/BRICS',
    officialSources: [
      { title: 'BRICS Information Portal & Summit Communiqués', type: 'official', url: 'https://infobrics.org' },
      { title: 'New Development Bank Official Repository', type: 'financial-institution', url: 'https://www.ndb.int' }
    ],
    sources: [
      { title: 'Ministry of External Affairs (India) BRICS Briefs', type: 'government', url: 'https://www.mea.gov.in' },
      { title: 'Carnegie Endowment for International Peace', type: 'research', url: 'https://carnegieendowment.org' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'sco': {
    id: 'sco',
    name: 'SCO',
    aliases: ['SCO', 'Shanghai Cooperation Organisation', 'Shanghai Pact'],
    category: 'Alliances & Blocs',
    shortDefinition: 'A Eurasian political, economic, and security organization established in 2001 to combat terrorism, separatism, and extremism, and secure stability across the Eurasian landmass.',
    detailedExplanation: 'Composed of 10 member states: China, Russia, Kazakhstan, Kyrgyzstan, Tajikistan, Uzbekistan, India, Pakistan, Iran, and Belarus. It hosts the Regional Anti-Terrorist Structure (RATS) based in Tashkent, conducting annual joint counter-terror maneuvers.',
    whyItMatters: 'It covers over 60% of the Eurasian landmass and nearly half of humanity, serving as the premier Eurasian platform balancing regional security without Western participation.',
    contextualFraming: {
      IND: 'India joined as a full member in 2017 to secure its strategic connectivity with Central Asian energy republics and participate in regional counter-terrorism (RATS), while preventing the SCO from turning into a Sino-centric military alliance.',
      RUS: 'Russia utilizes the SCO to coordinate Eurasian security alongside China, maintain stability in its historic Central Asian sphere of influence, and project a unified non-Western front.',
      CHN: 'China leverages the SCO to stabilize its western Xinjiang frontier, foster energy cooperation with Central Asia, and coordinate with member states on Belt and Road infrastructure.'
    },
    majorActors: ['China', 'Russia', 'India', 'Iran', 'Kazakhstan', 'Pakistan', 'Belarus'],
    historicalBackground: 'Evolved from the "Shanghai Five" grouping formed in 1996 to demilitarize former Soviet borders with China.',
    currentRelevance: 'Serves as an essential Eurasian dialogue forum where nuclear-armed rivals (India-Pakistan, India-China) sit at the same negotiating table alongside Russia and Iran.',
    relatedCountries: ['CHN', 'RUS', 'IND', 'IRN', 'PAK', 'KAZ', 'UZB', 'BLR'],
    relatedEvents: ['2001 Shanghai Declaration', '2017 Astana Expansion', '2023 New Delhi Summit'],
    relatedLocations: ['Tashkent (RATS HQ)', 'Beijing (Secretariat)'],
    relatedTerms: ['multipolarity', 'collective-security', 'confidence-building-measures', 'strategic-autonomy'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Shanghai_Cooperation_Organisation',
    officialSources: [
      { title: 'Shanghai Cooperation Organisation Secretariat', type: 'official', url: 'http://eng.sectsco.org' },
      { title: 'SCO Regional Anti-Terrorist Structure (RATS)', type: 'official-security', url: 'https://ecrats.org' }
    ],
    sources: [
      { title: 'Observer Research Foundation (ORF) SCO Studies', type: 'research', url: 'https://www.orfonline.org' },
      { title: 'Russian International Affairs Council (RIAC)', type: 'research', url: 'https://russiancouncil.ru' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'quad': {
    id: 'quad',
    name: 'QUAD',
    aliases: ['QUAD', 'Quad', 'Quadrilateral Security Dialogue', 'QSD'],
    category: 'Alliances & Blocs',
    shortDefinition: 'A strategic diplomatic and security dialogue among India, the United States, Japan, and Australia focused on ensuring a free, open, and resilient Indo-Pacific.',
    detailedExplanation: 'Initiated in 2007 by Japanese Prime Minister Shinzo Abe, revived in 2017, and elevated to leader-level summits in 2021. Operates through working groups on maritime domain awareness, critical technologies, vaccine delivery, climate resilience, and supply chain security.',
    whyItMatters: 'Balances Chinese geopolitical assertiveness across the Indo-Pacific without creating a formal mutual-defense military treaty, preserving flexibility for its sovereign partners.',
    contextualFraming: {
      IND: 'For India, the Quad provides maritime leverage across the Indian Ocean and access to high-end Western technologies and intelligence, while New Delhi ensures the grouping focuses on public goods and maritime domain awareness rather than an explicit military treaty.',
      USA: 'The US considers the Quad a pillar of its Indo-Pacific strategy to maintain the rules-based international order and counter coercive unilateral moves in the East and South China Seas.'
    },
    majorActors: ['India', 'United States', 'Japan', 'Australia'],
    historicalBackground: 'Born out of joint naval humanitarian cooperation following the devastating December 2004 Indian Ocean Tsunami.',
    currentRelevance: 'Conducts the annual Malabar naval exercises and deploys the Indo-Pacific Partnership for Maritime Domain Awareness (IPMDA) to track illegal fishing and dark shipping.',
    relatedCountries: ['IND', 'USA', 'JPN', 'AUS', 'CHN'],
    relatedEvents: ['2004 Tsunami Core Group', '2017 Resuscitation', '2021 Inaugural Leaders Summit'],
    relatedLocations: ['Malacca Strait', 'South China Sea', 'Bay of Bengal'],
    relatedTerms: ['indo-pacific', 'freedom-of-navigation', 'aukus', 'strategic-autonomy', 'balance-of-power'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Quadrilateral_Security_Dialogue',
    officialSources: [
      { title: 'US White House Quad Joint Leaders Statement', type: 'official-statement', url: 'https://www.whitehouse.gov' },
      { title: 'Ministry of External Affairs (India) Quad Outcomes', type: 'government', url: 'https://www.mea.gov.in' }
    ],
    sources: [
      { title: 'Center for Strategic and International Studies (CSIS)', type: 'think-tank', url: 'https://www.csis.org' },
      { title: 'Lowy Institute Indo-Pacific Analysis', type: 'research', url: 'https://www.lowyinstitute.org' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'aukus': {
    id: 'aukus',
    name: 'AUKUS',
    aliases: ['AUKUS', 'Aukus', 'AUKUS Alliance'],
    category: 'Alliances & Blocs',
    shortDefinition: 'A trilateral security partnership among Australia, the United Kingdom, and the United States designed to provide Australia with conventionally armed, nuclear-powered attack submarines (SSNs) and co-develop cutting-edge military capabilities.',
    detailedExplanation: 'Composed of two operational pillars:\n• Pillar I: Acquisition and indigenous construction of SSN-AUKUS nuclear-powered submarines for the Royal Australian Navy.\n• Pillar II: Joint development of advanced military technologies including artificial intelligence, quantum computing, hypersonic strike, undersea warfare, and electronic warfare.',
    whyItMatters: 'Fundamentally alters the naval balance in the Western Pacific by providing Australia with high-endurance, stealthy undersea strike capabilities able to operate far from home ports without surfacing.',
    contextualFraming: {
      AUS: 'Enables Australia to project deterrence deep into the Indo-Pacific chokepoints and safeguard its maritime trade arteries against potential naval blockades.',
      CHN: 'China strongly condemns AUKUS as an instigation of a regional arms race and a violation of the spirit of the Nuclear Non-Proliferation Treaty (NPT).',
      IND: 'India views AUKUS positively as an added counterweight to Chinese naval expansion in the eastern Indian Ocean and Pacific, noting that AUKUS operates under distinct strategic requirements from the Quad.'
    },
    majorActors: ['Australia', 'United Kingdom', 'United States'],
    historicalBackground: 'Announced on September 15, 2021, leading to Australia canceling a previous French conventional submarine contract, generating temporary diplomatic friction with Paris.',
    currentRelevance: 'Submarine rotational deployments (Submarine Rotational Force-West) commenced in Western Australia, alongside joint testing of hypersonic glide interceptors under Pillar II.',
    relatedCountries: ['AUS', 'GBR', 'USA', 'CHN', 'FRA', 'IND'],
    relatedEvents: ['2021 Trilateral Pact Announcement', '2023 San Diego Submarine Roadmap'],
    relatedLocations: ['HMAS Stirling (Perth)', 'Barrow-in-Furness (UK)', 'Adelaide Shipyard'],
    relatedTerms: ['ssbn', 'indo-pacific', 'deterrence', 'quad', 'hypersonic-weapons'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/AUKUS',
    officialSources: [
      { title: 'Australian Department of Defence — AUKUS Portal', type: 'government-defence', url: 'https://www.defence.gov.au' },
      { title: 'UK Ministry of Defence AUKUS Submarine Program', type: 'government-defence', url: 'https://www.gov.uk' }
    ],
    sources: [
      { title: 'Congressional Research Service (CRS) Reports on AUKUS', type: 'legislative-research', url: 'https://crsreports.congress.gov' },
      { title: 'Australian Strategic Policy Institute (ASPI)', type: 'defence-thinktank', url: 'https://www.aspi.org.au' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'gcc': {
    id: 'gcc',
    name: 'GCC',
    aliases: ['GCC', 'Gulf Cooperation Council', 'Cooperation Council for the Arab States of the Gulf'],
    category: 'Alliances & Blocs',
    shortDefinition: 'A regional political and economic union of six Arab monarchies bordering the Persian Gulf: Saudi Arabia, the UAE, Qatar, Kuwait, Oman, and Bahrain.',
    detailedExplanation: 'Established in Abu Dhabi in May 1981. It promotes economic integration (common market, customs union), political coordination, and joint defense (Peninsula Shield Force). Members control nearly 30% of global proven crude oil reserves and 20% of natural gas.',
    whyItMatters: 'Anchors energy security and capital flows across the Middle East, commanding the strategic coastline of the Persian Gulf and the Strait of Hormuz.',
    contextualFraming: {
      SAU: 'Saudi Arabia is the GCC\'s demographic and economic hegemon, housing the GCC Secretariat in Riyadh and coordinating regional energy and defense policies.',
      IND: 'Vital to India\'s energy security and diaspora welfare: over 8.5 million Indian citizens live in the GCC, remitting over $40 billion annually, with the Gulf providing over 60% of India\'s crude imports.'
    },
    majorActors: ['Saudi Arabia', 'United Arab Emirates', 'Qatar', 'Kuwait', 'Oman', 'Bahrain'],
    historicalBackground: 'Founded in 1981 in response to security shocks from the 1979 Iranian Revolution and the Iran-Iraq War.',
    currentRelevance: 'Leading regional economic transformation through sovereign wealth funds (PIF, ADIA, QIA) and balancing ties between Washington, Beijing, and New Delhi.',
    relatedCountries: ['SAU', 'ARE', 'QAT', 'KWT', 'OMN', 'BHR', 'IND', 'IRN', 'USA'],
    relatedEvents: ['1981 Charter of Abu Dhabi', '2017-2021 Qatar Diplomatic Crisis', '2021 Al-Ula Declaration'],
    relatedLocations: ['Riyadh (Secretariat)', 'Strait of Hormuz', 'Persian Gulf'],
    relatedTerms: ['energy-security', 'chokepoint', 'opec-plus', 'trade-corridor'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Gulf_Cooperation_Council',
    officialSources: [
      { title: 'GCC Secretariat General Official Portal', type: 'official', url: 'https://www.gcc-sg.org' }
    ],
    sources: [
      { title: 'Middle East Institute (MEI) Gulf Studies', type: 'research', url: 'https://www.mei.edu' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'opec-plus': {
    id: 'opec-plus',
    name: 'OPEC+',
    aliases: ['OPEC+', 'OPEC Plus', 'OPEC and allies'],
    category: 'Economic Statecraft',
    shortDefinition: 'An alliance of the 12 OPEC nations plus 10 non-OPEC oil-exporting nations (led by Russia) coordinating crude oil production quotas to influence global energy pricing.',
    detailedExplanation: 'Formed in late 2016 (Declaration of Cooperation). Combines traditional OPEC members with major independent producers including Russia, Kazakhstan, Azerbaijan, and Mexico. Controls over 40% of global oil production and 80% of proven reserves.',
    whyItMatters: 'Decisions by the OPEC+ ministerial committee determine global benchmark crude prices (Brent, WTI), directly impacting worldwide inflation, shipping costs, and national fiscal balances.',
    contextualFraming: {
      SAU: 'Saudi Arabia acts as the swing producer and OPEC leader, adjusting output to defend floor prices and sovereign investment budgets (Vision 2030).',
      RUS: 'Russia utilizes OPEC+ coordination to sustain oil export revenues, deepen strategic leverage with Riyadh, and blunt the revenue impact of G7 price caps.',
      IND: 'As the world\'s third-largest oil consumer importing over 85% of its crude, India is heavily vulnerable to OPEC+ production cuts, prompting New Delhi to diversify imports toward discounted Russian and US grades.'
    },
    majorActors: ['Saudi Arabia', 'Russia', 'United Arab Emirates', 'Iraq', 'Kuwait', 'Kazakhstan'],
    historicalBackground: 'Created in December 2016 in Vienna to stabilize collapsed crude prices caused by the US shale boom.',
    currentRelevance: 'Manages voluntary production curtailments through 2025–2026 amid rising non-OPEC output from the United States, Guyana, and Brazil.',
    relatedCountries: ['SAU', 'RUS', 'ARE', 'IRQ', 'KWT', 'KAZ', 'USA', 'IND'],
    relatedEvents: ['2016 Vienna Declaration of Cooperation', '2020 Saudi-Russian Price War'],
    relatedLocations: ['Vienna (OPEC HQ)'],
    relatedTerms: ['energy-security', 'sanctions', 'petrodollar', 'geopolitical-risk'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/OPEC%2B',
    officialSources: [
      { title: 'OPEC Official Secretariat Portal & Monthly Oil Market Reports', type: 'official', url: 'https://www.opec.org' }
    ],
    sources: [
      { title: 'International Energy Agency (IEA) Oil Market Reports', type: 'energy-agency', url: 'https://www.iea.org' },
      { title: 'Oxford Institute for Energy Studies (OIES)', type: 'research', url: 'https://www.oxfordenergy.org' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'indo-pacific': {
    id: 'indo-pacific',
    name: 'Indo-Pacific',
    aliases: ['Indo-Pacific', 'Indo-Pacific Region', 'Indo Pacific'],
    category: 'Geographic Concept',
    shortDefinition: 'A biogeographic and geopolitical concept linking the tropical waters of the Indian Ocean and the Pacific Ocean into a single interconnected strategic theater.',
    detailedExplanation: 'Supersedes the older concept of "Asia-Pacific" by recognizing that maritime commerce, energy transit, and security competitions flow seamlessly from the Persian Gulf and eastern coast of Africa through the Malacca Strait into East Asia and the Americas.',
    whyItMatters: 'Home to 60% of the global population, 60% of world GDP, and two-thirds of global economic growth, containing the world\'s most vital maritime trade routes and flashpoints.',
    contextualFraming: {
      IND: 'India views the Indo-Pacific as extending from the shores of Africa to the Americas. Prime Minister Narendra Modi articulated this vision at the 2018 Shangri-La Dialogue under SAGAR (Security and Growth for All in the Region).',
      USA: 'The US Indo-Pacific Command (INDOPACOM) operates as Washington\'s primary combatant command for the region, prioritizing deterrence against Chinese coercion.',
      CHN: 'Beijing historically viewed the term with suspicion, characterizing it as an American geopolitical construct intended to encircle China through minilateral groupings.'
    },
    majorActors: ['India', 'United States', 'China', 'Japan', 'Australia', 'Indonesia'],
    historicalBackground: 'Popularized in modern strategy by German geographer Karl Haushofer in the 1920s, revived by Japanese PM Shinzo Abe in 2007, and formally adopted into US national security strategy in 2017.',
    currentRelevance: 'The epicenter of 21st-century great-power competition, hosting contested waterways including the South China Sea, Taiwan Strait, and Indian Ocean sea lanes.',
    relatedCountries: ['IND', 'USA', 'CHN', 'JPN', 'AUS', 'IDN', 'PHL', 'VNM'],
    relatedEvents: ['2007 Confluence of the Two Seas Speech', '2018 Shangri-La Dialogue'],
    relatedLocations: ['Malacca Strait', 'Lombok Strait', 'South China Sea', 'Sunda Strait'],
    relatedTerms: ['quad', 'aukus', 'sloc', 'freedom-of-navigation', 'first-island-chain'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Indo-Pacific',
    officialSources: [
      { title: 'US Indo-Pacific Strategy Framework', type: 'government-strategy', url: 'https://www.whitehouse.gov' },
      { title: 'Ministry of External Affairs (India) Indo-Pacific Division', type: 'government', url: 'https://www.mea.gov.in' }
    ],
    sources: [
      { title: 'Observer Research Foundation (ORF)', type: 'research', url: 'https://www.orfonline.org' },
      { title: 'East-West Center Indo-Pacific Programs', type: 'think-tank', url: 'https://www.eastwestcenter.org' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'strategic-autonomy': {
    id: 'strategic-autonomy',
    name: 'Strategic Autonomy',
    aliases: ['Strategic Autonomy', 'strategic autonomy', 'multi-alignment', 'Multi-Alignment'],
    category: 'Geopolitical Doctrine',
    shortDefinition: 'A foreign policy doctrine where a sovereign nation retains complete independence to make security, economic, and diplomatic choices without being bound to treaty military alliances or foreign coercion.',
    detailedExplanation: 'Rooted in the pursuit of national interest through flexible issue-based partnerships rather than binary Cold War treaty alliances. It avoids alliance entrapment (being dragged into another state\'s war) while maximizing diplomatic room to maneuver across competing geopolitical blocs.',
    whyItMatters: 'Enables middle and rising great powers to maintain economic and defense relationships with rival superpowers simultaneously (e.g. trading with China, buying weapons and oil from Russia, and partnering with the US on technology and intelligence).',
    contextualFraming: {
      IND: 'The central doctrine of Indian diplomacy. Allows New Delhi to participate actively in the Quad and buy Western defense tech while sustaining deep legacy ties with Moscow and leading the Global South in BRICS.',
      FRA: 'Known as Gaullism: the conviction that France and Europe must maintain sovereign defense capabilities and nuclear autonomy rather than acting as automatic subordinates to American policy.',
      EU: 'Advocated post-2022 to end asymmetric dependencies on foreign powers across defense, energy, semiconductors, and raw materials.'
    },
    majorActors: ['India', 'France', 'Brazil', 'Saudi Arabia', 'Indonesia', 'South Africa'],
    historicalBackground: 'Originated from the 1955 Bandung Conference and the 1961 Non-Aligned Movement, modernized into active multi-alignment in the 21st century.',
    currentRelevance: 'Demonstrated prominently by the refusal of India, Brazil, and South Africa to join unilateral Western sanctions following the Ukraine invasion, maintaining multi-directional diplomacy.',
    relatedCountries: ['IND', 'FRA', 'BRA', 'ZAF', 'SAU', 'IDN', 'USA', 'RUS'],
    relatedEvents: ['1955 Bandung Conference', '2022 Ukraine Sanctions Divergence'],
    relatedLocations: ['New Delhi', 'Paris', 'Brasília'],
    relatedTerms: ['non-aligned-movement', 'balance-of-power', 'multipolarity', 'sanctions', 'brics'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Strategic_autonomy',
    officialSources: [
      { title: 'Ministry of External Affairs (India) Annual Reports', type: 'official-doctrine', url: 'https://www.mea.gov.in' },
      { title: 'European Council — A Strategic Compass for Security and Defence', type: 'official-strategy', url: 'https://www.consilium.europa.eu' }
    ],
    sources: [
      { title: 'Carnegie India — India\'s Strategic Autonomy in an Era of Multipolarity', type: 'research', url: 'https://carnegieindia.org' },
      { title: 'French Institute of International Relations (IFRI)', type: 'think-tank', url: 'https://www.ifri.org' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'deterrence': {
    id: 'deterrence',
    name: 'Deterrence',
    aliases: ['Deterrence', 'deterrence', 'military deterrence', 'Strategic Deterrence'],
    category: 'Military Strategy',
    shortDefinition: 'A military strategy under which one power dissuades an adversary from taking hostile action by demonstrating that the costs and risks of the action will far exceed any conceivable gains.',
    detailedExplanation: 'Operates via two primary mechanisms:\n• Deterrence by Punishment: Threatening severe, unacceptable retaliation (e.g., massive nuclear or missile counter-strikes) if the adversary crosses a declared red line.\n• Deterrence by Denial: Making an invasion or attack physically impossible or militarily unprofitable (e.g., heavily fortified borders, air defense umbrellas, minefields).',
    whyItMatters: 'The conceptual foundation of modern strategic stability, preventing direct military clashes between nuclear-armed great powers for over seven decades.',
    contextualFraming: {
      USA: 'Underpins US global alliances through conventional military forward-presence and extended nuclear umbrella commitments to NATO, Japan, and South Korea.',
      RUS: 'Relies heavily on non-strategic and strategic nuclear deterrence to offset NATO\'s conventional economic and military superiority.',
      IND: 'Maintains a Credible Minimum Deterrent (CMD) anchored in a strict "No First Use" nuclear doctrine with assured second-strike capability targeting both Pakistan and China.'
    },
    majorActors: ['United States', 'Russia', 'China', 'India', 'Israel', 'Pakistan'],
    historicalBackground: 'Developed as a formal academic and military discipline in the 1950s by Bernard Brodie, Herman Kahn, and Thomas Schelling following the advent of atomic weapons.',
    currentRelevance: 'Tested continuously along contested frontlines in Eastern Europe, the Taiwan Strait, the Korean Peninsula, and the Himalayas.',
    relatedCountries: ['USA', 'RUS', 'CHN', 'IND', 'ISR', 'PAK'],
    relatedEvents: ['1962 Cuban Missile Crisis', 'Cold War Strategic Parity'],
    relatedLocations: ['NORAD HQ', 'Cheyenne Mountain', 'Perimeter Nuclear System'],
    relatedTerms: ['extended-deterrence', 'nuclear-deterrence', 'nuclear-triad', 'a2-ad', 'balance-of-power'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Deterrence_theory',
    officialSources: [
      { title: 'US Joint Chiefs of Staff Doctrine — Joint Publication 3-0: Joint Campaigns and Deterrence', type: 'military-doctrine', url: 'https://www.jcs.mil' }
    ],
    sources: [
      { title: 'RAND Corporation — Understanding Deterrence', type: 'defence-research', url: 'https://www.rand.org' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'extended-deterrence': {
    id: 'extended-deterrence',
    name: 'Extended Deterrence',
    aliases: ['Extended Deterrence', 'extended deterrence', 'nuclear umbrella', 'Nuclear Umbrella'],
    category: 'Military Strategy',
    shortDefinition: 'A commitment by a nuclear-armed power to use its military capabilities—including nuclear weapons—to defend an allied nation that lacks its own nuclear arsenal.',
    detailedExplanation: 'Commonly known as a "nuclear umbrella." A superpower declares that an attack against an ally will trigger a retaliatory response as if the superpower\'s own homeland were attacked. Credibility relies on forward military presence, shared command structures, and nuclear sharing agreements.',
    whyItMatters: 'Prevents nuclear proliferation by convincing technologically capable non-nuclear states (e.g., Japan, South Korea, Germany, Poland) that they do not need to develop sovereign nuclear arsenals.',
    contextualFraming: {
      USA: 'Provides extended deterrence guarantees to 31 NATO allies, Japan, South Korea, and Australia, maintaining tactical nuclear gravity bombs (B61) stationed in Germany, Italy, Belgium, the Netherlands, and Turkey.',
      KOR: 'South Korea established the US-ROK Nuclear Consultative Group (NCG) in 2023 to deepen nuclear planning and counter growing North Korean missile capabilities.',
      TWN: 'The US maintains deliberate strategic ambiguity regarding Taiwan, deliberately stopping short of a formal treaty extended-deterrence guarantee.'
    },
    majorActors: ['United States', 'Japan', 'South Korea', 'Germany', 'Australia', 'Poland'],
    historicalBackground: 'Institutionalized in Europe after World War II to guarantee that Soviet tank armies would not advance beyond the Iron Curtain.',
    currentRelevance: 'Subject to intense debate in Tokyo, Seoul, and European capitals regarding whether Washington would genuinely sacrifice an American city to defend an ally.',
    relatedCountries: ['USA', 'JPN', 'KOR', 'DEU', 'POL', 'TUR'],
    relatedEvents: ['1953 US-ROK Mutual Defense Treaty', '2023 Washington Declaration'],
    relatedLocations: ['Büchel Air Base (Germany)', 'Kunsan Air Base (Korea)', 'Camp Humphreys'],
    relatedTerms: ['deterrence', 'nuclear-deterrence', 'nato', 'collective-security', 'nuclear-triad'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Nuclear_umbrella',
    officialSources: [
      { title: 'US-ROK Washington Declaration (White House, 2023)', type: 'official-accord', url: 'https://www.whitehouse.gov' },
      { title: 'NATO Factsheet on Nuclear Deterrence and Sharing', type: 'official-alliance', url: 'https://www.nato.int' }
    ],
    sources: [
      { title: 'Carnegie Endowment — Extended Nuclear Deterrence in East Asia', type: 'research', url: 'https://carnegieendowment.org' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'collective-security': {
    id: 'collective-security',
    name: 'Collective Security',
    aliases: ['Collective Security', 'collective security', 'Mutual Defense'],
    category: 'Geopolitical Doctrine',
    shortDefinition: 'A regional or global security arrangement in which each participating state accepts that the security of one is the concern of all, agreeing to join in a collective response against any aggression.',
    detailedExplanation: 'Differs from a traditional bilateral military alliance (which targets a designated external rival) by establishing a systemic rule of law: an attack on any member state by any aggressor will be resisted collectively by all other members.',
    whyItMatters: 'Forms the constitutional cornerstone of the United Nations Charter (Chapter VII) and defensive military alliances like NATO (Article 5) and the CSTO (Article 4).',
    contextualFraming: {
      NATO: 'Exemplified by Article 5, invoked for the first and only time following the September 11, 2001 terrorist attacks against the United States.',
      RUS: 'Russia heads the Collective Security Treaty Organization (CSTO) with Armenia, Belarus, Kazakhstan, Kyrgyzstan, and Tajikistan, though its credibility was strained during border clashes between Armenia and Azerbaijan.',
      IND: 'India historically preferred sovereign bilateral defense accords (such as the 1971 Indo-Soviet Treaty) over multilateral collective-security alliances.'
    },
    majorActors: ['United Nations', 'NATO', 'CSTO'],
    historicalBackground: 'First institutionalized globally in the League of Nations Covenant (1919) following World War I, and re-engineered in the 1945 UN Charter.',
    currentRelevance: 'Strained by the UN Security Council veto power possessed by the permanent five (P5) members, hindering collective enforcement during great-power conflicts.',
    relatedCountries: ['USA', 'RUS', 'CHN', 'GBR', 'FRA', 'POL', 'EST', 'LVA', 'LTU'],
    relatedEvents: ['1919 League of Nations Covenant', '1945 UN Charter Adoption', '2001 Article 5 Invocation'],
    relatedLocations: ['UN Headquarters (New York)', 'NATO HQ (Brussels)'],
    relatedTerms: ['nato', 'extended-deterrence', 'balance-of-power', 'united-nations'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Collective_security',
    officialSources: [
      { title: 'United Nations Charter — Chapter VII Action with Respect to Threats to the Peace', type: 'treaty', url: 'https://www.un.org' }
    ],
    sources: [
      { title: 'Council on Foreign Relations (CFR) Global Governance Monitor', type: 'think-tank', url: 'https://www.cfr.org' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'sloc': {
    id: 'sloc',
    name: 'SLOC',
    aliases: ['SLOC', 'SLOCs', 'Sea Lines of Communication', 'sea lines of communication', 'sea lanes'],
    category: 'Maritime Law & Oceans',
    shortDefinition: 'Primary maritime transport routes connecting key trading ports across oceans and seas, essential for commercial trade, container logistics, and military naval redeployment.',
    detailedExplanation: 'Over 80% of global merchandise trade by volume and 70% of world crude oil transit via Sea Lines of Communication. They funnel into natural geographic corridors dictated by oceanography, navigation safety, and coastal topography.',
    whyItMatters: 'Control or disruption of vital SLOCs can cripple an industrial economy within days by cutting off crude oil, refined fuels, microchips, and food supplies.',
    contextualFraming: {
      IND: 'India sits astride the premier East-West global energy SLOC connecting the Persian Gulf to East Asia, allowing the Indian Navy to monitor and safeguard maritime traffic throughout the Indian Ocean region.',
      CHN: 'China suffers from the "Malacca Dilemma": over 80% of its imported petroleum passes through the narrow Malacca Strait SLOC, vulnerable to naval interdiction in wartime.',
      USA: 'The US Navy considers protecting open SLOCs its primary peacetime mission, maintaining uninterrupted commercial sea traffic under international maritime law.'
    },
    majorActors: ['India', 'United States', 'China', 'Singapore', 'Egypt', 'Oman'],
    historicalBackground: 'Concept pioneered by naval strategist Alfred Thayer Mahan in his 1890 treatise "The Influence of Sea Power Upon History."',
    currentRelevance: 'Heavily disrupted in 2024–2026 in the Red Sea / Bab el-Mandeb SLOC by Houthi drone and missile strikes, forcing commercial container traffic to detour around Africa\'s Cape of Good Hope.',
    relatedCountries: ['IND', 'CHN', 'USA', 'SGP', 'EGY', 'YEM'],
    relatedEvents: ['1973 Oil Embargo', '2023-2026 Red Sea Shipping Crisis'],
    relatedLocations: ['Malacca Strait', 'Strait of Hormuz', 'Bab el-Mandeb', 'Cape of Good Hope'],
    relatedTerms: ['chokepoint', 'freedom-of-navigation', 'eez', 'energy-security', 'trade-corridor'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Sea_lines_of_communication',
    officialSources: [
      { title: 'International Maritime Organization (IMO) Navigation Protocols', type: 'international-body', url: 'https://www.imo.org' }
    ],
    sources: [
      { title: 'US Naval War College Review', type: 'academic-naval', url: 'https://digital-commons.usnwc.edu' },
      { title: 'National Maritime Foundation (India)', type: 'research-institute', url: 'https://maritimeindia.org' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'chokepoint': {
    id: 'chokepoint',
    name: 'Chokepoint',
    aliases: ['Chokepoint', 'chokepoint', 'maritime chokepoint', 'strategic chokepoint', 'choke point'],
    category: 'Maritime Law & Oceans',
    shortDefinition: 'A narrow, congested geographic waterway through which critical volumes of global maritime trade and energy commodities must pass, highly susceptible to blockade or military disruption.',
    detailedExplanation: 'The primary global maritime chokepoints include:\n• Strait of Hormuz: 21 miles wide; carries 20-21 million barrels of crude oil daily (~20% of world petroleum).\n• Strait of Malacca: 1.5 nautical miles at Phillips Channel; carries 16 million barrels daily and 80% of China\'s crude imports.\n• Bab el-Mandeb: 18 miles wide; southern gateway to the Red Sea and Suez Canal.\n• Suez Canal: 193 km artificial waterway connecting the Red Sea to the Mediterranean (~12% of world trade).\n• Panama Canal: 82 km canal linking Atlantic and Pacific container traffic.\n• Turkish Straits (Bosphorus & Dardanelles): Connects the Black Sea to the Mediterranean.',
    whyItMatters: 'A closure or threat at a single chokepoint cascades immediately into global supply shortages, sky-rocketing maritime insurance premiums, and localized armed conflicts.',
    contextualFraming: {
      EGY: 'The Suez Canal generates billions in sovereign transit toll revenue for Cairo and underpins Egyptian macroeconomic stability.',
      IRN: 'Iran frequently threatens naval closure of the Strait of Hormuz via mine warfare, fast-attack missile boats, and coastal anti-ship missiles as an asymmetric deterrent.',
      IND: 'The Andaman and Nicobar Islands give India a dominant strategic position at the western entrance of the Malacca Strait, providing maritime domain awareness over Indian Ocean approaches.'
    },
    majorActors: ['Egypt', 'Iran', 'Singapore', 'Yemen', 'Panama', 'Turkey', 'India'],
    historicalBackground: 'Recognized as crucial military terrain since antiquity (Thermopylae, Gibraltar); codified into maritime strategy in the late 19th century.',
    currentRelevance: 'Houthi missile attacks at Bab el-Mandeb and low-water drought constraints at the Panama Canal exposed the structural fragility of global container supply chains in 2024–2026.',
    relatedCountries: ['EGY', 'IRN', 'SGP', 'YEM', 'PAN', 'TUR', 'IND'],
    relatedEvents: ['1956 Suez Crisis', '2021 Ever Given Canal Blockage', '2024 Red Sea Redirection'],
    relatedLocations: ['Strait of Hormuz', 'Strait of Malacca', 'Bab el-Mandeb', 'Suez Canal', 'Bosphorus'],
    relatedTerms: ['sloc', 'strait', 'energy-security', 'freedom-of-navigation', 'trade-corridor'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Choke_point',
    officialSources: [
      { title: 'US Energy Information Administration (EIA) World Oil Transit Chokepoints', type: 'official-data', url: 'https://www.eia.gov' }
    ],
    sources: [
      { title: 'S&P Global Commodity Insights — Maritime Chokepoint Tracking', type: 'industry-analysis', url: 'https://www.spglobal.com' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'grey-zone': {
    id: 'grey-zone',
    name: 'Grey-Zone Warfare',
    aliases: ['Grey-Zone Warfare', 'grey-zone', 'Gray Zone', 'gray-zone warfare', 'hybrid warfare', 'Hybrid Warfare'],
    category: 'Conflict & Security',
    shortDefinition: 'Coercive competitive actions between states that fall deliberately below the threshold of conventional open war and above peaceful diplomatic competition.',
    detailedExplanation: 'Employs asymmetrical tools to achieve strategic political or territorial gains without triggering a formal military response or alliance treaty defense clauses:\n• Maritime Militia / Coast Guard Swarms (e.g., South China Sea artificial island encirclement).\n• Cyber-Attacks and critical infrastructure probing.\n• Disinformation and electoral influence campaigns.\n• Ambiguous special forces operations without national insignia ("Little Green Men" in 2014 Crimea).\n• Economic coercion and targeted trade embargoes.',
    whyItMatters: 'Paralyzes traditional international response frameworks and collective security treaties (like NATO Article 5), creating salami-slicing faits accomplis on the ground.',
    contextualFraming: {
      CHN: 'China uses maritime militia trawlers and coast guard vessels around Second Thomas Shoal and Scarborough Shoal to enforce territorial claims against the Philippines without triggering the US-Philippine Mutual Defense Treaty.',
      RUS: 'Russia utilized proxy militias, disinformation, and energy pipeline manipulations throughout Eastern Europe and the Baltic littoral to weaken NATO cohesion.',
      IND: 'India confronts grey-zone tactics along the Line of Actual Control (LAC), where China builds fortified civilian dual-use Xiaokang border villages and deploys non-firearm melee weapons to change facts on the ground.'
    },
    majorActors: ['China', 'Russia', 'United States', 'India', 'Philippines'],
    historicalBackground: 'Codified into Russian strategic thought through the 2013 "Gerasimov Doctrine" and in Chinese military theory through "Unrestricted Warfare" (1999).',
    currentRelevance: 'Dominates active clashes in the South China Sea, Baltic undersea cable sabotage investigations, and ongoing cyber attacks on energy utilities.',
    relatedCountries: ['CHN', 'RUS', 'USA', 'PHL', 'IND', 'TWN'],
    relatedEvents: ['2014 Annexation of Crimea', 'South China Sea Water Cannon Incidents'],
    relatedLocations: ['Second Thomas Shoal', 'Scarborough Shoal', 'Baltic Undersea Cables', 'LAC Frontline'],
    relatedTerms: ['proxy-war', 'deterrence', 'a2-ad', 'status-quo', 'territorial-waters'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Grey-zone_guidance',
    officialSources: [
      { title: 'US Special Operations Command — The Gray Zone White Paper', type: 'military-paper', url: 'https://www.socom.mil' },
      { title: 'European Centre of Excellence for Countering Hybrid Threats', type: 'international-centre', url: 'https://www.hybridcoe.fi' }
    ],
    sources: [
      { title: 'CSIS International Security Program — Gray Zone Project', type: 'think-tank', url: 'https://www.csis.org' }
    ],
    claimType: 'ANALYSIS',
    lastVerified: '2026-03'
  },

  'proxy-war': {
    id: 'proxy-war',
    name: 'Proxy War',
    aliases: ['Proxy War', 'proxy war', 'proxy warfare', 'Proxy Conflict'],
    category: 'Conflict & Security',
    shortDefinition: 'An armed conflict in which two or more opposing external powers utilize third parties (allied governments, non-state militias, insurgent factions) to fight each other directly, avoiding direct interstate war between themselves.',
    detailedExplanation: 'External patrons provide financing, advanced weaponry, intelligence, military advisers, and diplomatic cover to local factions who bear the combat brunt on the ground. This allows patrons to degrade an opponent\'s power without triggering catastrophic direct confrontation.',
    whyItMatters: 'Reduces the danger of direct nuclear exchange between superpowers, but tends to prolong local destruction and destabilize entire regions for decades.',
    contextualFraming: {
      IRN: 'Iran\'s military doctrine relies on the "Axis of Resistance" (Hezbollah in Lebanon, Houthis in Yemen, Hamas in Gaza, Shia militias in Iraq and Syria) to project deterrence against Israel and the United States.',
      RUS: 'Russia and Western powers fought multiple proxy conflicts during the Cold War (Korea, Vietnam, Angola, Afghanistan); in Ukraine, Western powers supply billions in weapons to fight invading Russian armed forces.',
      IND: 'India has fought decades of proxy conflict against Pakistani-backed cross-border militant networks operating in Jammu & Kashmir.'
    },
    majorActors: ['United States', 'Russia', 'Iran', 'Israel', 'Saudi Arabia'],
    historicalBackground: 'Flourished during the Cold War when nuclear parity made direct superpower combat suicidal.',
    currentRelevance: 'Seen across the Middle East (Yemen, Syria, Lebanon) and in Africa\'s Sahel, where Russian Africa Corps (formerly Wagner) competes with Western counter-terror presence.',
    relatedCountries: ['USA', 'RUS', 'IRN', 'ISR', 'SAU', 'YEM', 'SYR', 'UKR'],
    relatedEvents: ['1979-1989 Soviet-Afghan War', '1980-1988 Iran-Iraq War', '2015-Present Yemen Civil War'],
    relatedLocations: ['Yemen Coastline', 'Gaza Strip', 'Southern Lebanon', 'Sahel Region'],
    relatedTerms: ['grey-zone', 'deterrence', 'cold-war', 'sanctions', 'sphere-of-influence'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Proxy_war',
    officialSources: [
      { title: 'Geneva Academy of International Humanitarian Law and Human Rights', type: 'legal-research', url: 'https://www.geneva-academy.ch' }
    ],
    sources: [
      { title: 'Modern War Institute at West Point — Proxy Warfare', type: 'military-academic', url: 'https://mwi.westpoint.edu' }
    ],
    claimType: 'HISTORICAL',
    lastVerified: '2026-03'
  },

  'sanctions': {
    id: 'sanctions',
    name: 'Sanctions',
    aliases: ['Sanctions', 'sanctions', 'Economic Sanctions', 'economic sanctions', 'financial sanctions'],
    category: 'Economic Statecraft',
    shortDefinition: 'Coercive economic, financial, or commercial penalties applied by one or more sovereign countries (or international bodies) against a targeted state, entity, or individual to compel a change in policy or punish illicit behavior.',
    detailedExplanation: 'Modern sanctions encompass:\n• Trade Embargoes: Banning imports or exports of critical goods (microelectronics, machinery, aviation parts).\n• Financial Freezes: Cutting target banks off from SWIFT and freezing sovereign central bank foreign reserves.\n• Energy Price Caps: Prohibiting maritime insurance and transport services for crude oil sold above an agreed price threshold.\n• Asset Freezes & Travel Bans: Targeting political leaders, oligarchs, and defense executives.',
    whyItMatters: 'Functions as the primary non-military weapon of coercion in contemporary international relations, capable of crippling a nation\'s currency, sovereign credit rating, and industrial supply lines.',
    contextualFraming: {
      RUS: 'Following the 2022 invasion of Ukraine, Russia became the most heavily sanctioned country in history, with over 18,000 active sanctions and $300 billion in frozen central bank assets.',
      USA: 'The US is the world\'s primary sanctions architect, deriving coercive power from the global primacy of the US dollar, American correspondent banking, and Wall Street capital markets.',
      IND: 'India opposes unilateral Western sanctions not authorized by the United Nations, maintaining legitimate trade with sanctioned partners (importing discounted Russian crude and developing Iran\'s Chabahar Port).'
    },
    majorActors: ['United States', 'European Union', 'Russia', 'Iran', 'North Korea', 'China'],
    historicalBackground: 'Used since antiquity (Athenian Megarian Decree in 432 BC), codified in Article 41 of the UN Charter, and revolutionized into targeted financial warfare after 2001.',
    currentRelevance: 'Spurred widespread "de-risking" and the development of alternative payment architectures across the Global South to insulate against future asset freezes.',
    relatedCountries: ['USA', 'RUS', 'IRN', 'PRK', 'CHN', 'IND'],
    relatedEvents: ['2014 Crimea Sanctions', '2022 Comprehensive Russian Sanctions', 'G7 Russian Oil Price Cap'],
    relatedLocations: ['US Treasury OFAC (Washington)', 'SWIFT HQ (Belgium)'],
    relatedTerms: ['secondary-sanctions', 'caatsa', 'de-dollarization', 'brics', 'petrodollar'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Economic_sanctions',
    officialSources: [
      { title: 'US Treasury Office of Foreign Assets Control (OFAC)', type: 'government-agency', url: 'https://home.treasury.gov/policy-issues/office-of-foreign-assets-control-sanctions-programs-and-information' },
      { title: 'European Union Sanctions Map Database', type: 'official-eu', url: 'https://www.sanctionsmap.eu' }
    ],
    sources: [
      { title: 'Peterson Institute for International Economics (PIIE) Sanctions Database', type: 'economic-thinktank', url: 'https://www.piie.com' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'secondary-sanctions': {
    id: 'secondary-sanctions',
    name: 'Secondary Sanctions',
    aliases: ['Secondary Sanctions', 'secondary sanctions', 'extraterritorial sanctions'],
    category: 'Economic Statecraft',
    shortDefinition: 'Economic penalties imposed by a sanctioning country on foreign third-party individuals, businesses, or governments for conducting commercial or financial business with an already-sanctioned target.',
    detailedExplanation: 'Presents foreign companies with an ultimatum: "You can do business with the sanctioned target, or you can do business with the United States—you cannot do both." Because foreign banks depend on access to US dollar clearing, they comply even when their own governments oppose the measures.',
    whyItMatters: 'Extends a nation\'s domestic legal authority extraterritorially across the entire globe, forcing third-party neutral nations to conform to unilateral foreign policy goals.',
    contextualFraming: {
      USA: 'The primary user of secondary sanctions through OFAC, enforcing penalties against foreign shippers, insurers, and banks financing Russian, Iranian, or Venezuelan commerce.',
      IND: 'Presents constant foreign policy friction for India: Indian refiners and banks must carefully navigate US secondary sanctions when buying Russian oil or constructing Iran\'s Chabahar Port.',
      TUR: 'Turkish banks and shipping operators have faced repeated US Treasury warnings and fines for handling dual-use transit goods destined for Russia.'
    },
    majorActors: ['United States', 'India', 'Turkey', 'China', 'United Arab Emirates'],
    historicalBackground: 'Introduced in the 1996 Iran and Libya Sanctions Act (ILSA) and the Helms-Burton Act regarding Cuba; drastically expanded after the 2017 CAATSA legislation.',
    currentRelevance: 'US Executive Order 14114 in late 2023 authorized direct secondary sanctions against foreign financial institutions facilitating transactions for Russia\'s military-industrial base.',
    relatedCountries: ['USA', 'RUS', 'IRN', 'IND', 'TUR', 'CHN', 'ARE'],
    relatedEvents: ['2017 CAATSA Enactment', '2023 US Executive Order 14114'],
    relatedLocations: ['Washington D.C. (OFAC)'],
    relatedTerms: ['sanctions', 'caatsa', 'strategic-autonomy', 'de-dollarization', 'brics'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Secondary_sanctions',
    officialSources: [
      { title: 'US Department of the Treasury — Secondary Sanctions Guidance', type: 'official-guidance', url: 'https://home.treasury.gov' }
    ],
    sources: [
      { title: 'Center for a New American Security (CNAS) Sanctions Policy Papers', type: 'defence-thinktank', url: 'https://www.cnas.org' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'caatsa': {
    id: 'caatsa',
    name: 'CAATSA',
    aliases: ['CAATSA', 'Countering America\'s Adversaries Through Sanctions Act'],
    category: 'Economic Statecraft',
    shortDefinition: 'A 2017 US federal law imposing mandatory secondary sanctions against foreign governments and entities that engage in "significant transactions" with Russia\'s defense or intelligence sectors, Iran, or North Korea.',
    detailedExplanation: 'Under Section 231, purchasing major Russian weapons systems (such as fighter jets, naval vessels, or S-400 surface-to-air missile batteries) automatically triggers US secondary sanctions, including export license bans, foreign exchange bans, and exclusions from US financial markets.',
    whyItMatters: 'Directly weaponizes US financial market access to choke off revenues for Russian defense exporters and deter non-Western nations from military cooperation with Moscow.',
    contextualFraming: {
      TUR: 'When NATO member Turkey bought the Russian S-400 in 2019, the US imposed Section 231 CAATSA sanctions on Turkey\'s Presidency of Defense Industries (SSB) and expelled Ankara from the F-35 fighter jet program.',
      IND: 'When India signed a $5.43 billion contract for five S-400 regiments in 2018, New Delhi successfully argued for an informal US presidential waiver, emphasizing that the system was vital to deter China and that India was concurrently expanding US defense acquisitions.'
    },
    majorActors: ['United States', 'Turkey', 'India', 'Russia'],
    historicalBackground: 'Passed overwhelmingly by the US Congress in July 2017 in response to Russian military actions in Ukraine and cyber interference in the 2016 US presidential election.',
    currentRelevance: 'Continues to cast a shadow over international defense purchases, accelerating India\'s drive toward indigenous weapons manufacturing (Make in India / Atmanirbhar Bharat).',
    relatedCountries: ['USA', 'TUR', 'IND', 'RUS'],
    relatedEvents: ['2017 CAATSA Signing', '2019 Turkey S-400 Sanctioning', '2022 US House NDAA India CAATSA Waiver Amendment'],
    relatedLocations: ['Washington D.C.', 'Ankara', 'New Delhi'],
    relatedTerms: ['secondary-sanctions', 's-400', 'sanctions', 'strategic-autonomy', 'air-defence'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Countering_America%27s_Adversaries_Through_Sanctions_Act',
    officialSources: [
      { title: 'Public Law 115–44 — Countering America\'s Adversaries Through Sanctions Act', type: 'us-statute', url: 'https://www.congress.gov/bill/115th-congress/house-bill/3364/text' }
    ],
    sources: [
      { title: 'Congressional Research Service (CRS) Report on CAATSA Section 231', type: 'legislative-research', url: 'https://crsreports.congress.gov' }
    ],
    claimType: 'TREATY',
    lastVerified: '2026-03'
  },

  'strategic-depth': {
    id: 'strategic-depth',
    name: 'Strategic Depth',
    aliases: ['Strategic Depth', 'strategic depth'],
    category: 'Military Strategy',
    shortDefinition: 'The geographic distance between a country\'s vulnerable forward frontlines or borders and its core centers of population, industrial production, capital cities, and political leadership.',
    detailedExplanation: 'A nation with ample strategic depth can absorb an enemy surprise offensive, trade space for time, exhaust the invading forces over vast logistics lines, and mount a devastating counter-offensive. Conversely, a state lacking strategic depth must adopt forward defense or pre-emptive strike doctrines.',
    whyItMatters: 'Shapes whether a state adopts an offensive, pre-emptive, or defensive posture, driving territorial expansion and buffer state policies.',
    contextualFraming: {
      RUS: 'Russia possesses the world\'s greatest continental strategic depth across 11 time zones, historically allowing it to absorb invasions by Napoleon (1812) and Hitler (1941) by retreating into the vast interior.',
      ISR: 'Israel has virtually no strategic depth (only 9-15 miles wide at its narrowest point between the West Bank and Mediterranean), compelling its military to maintain immediate air superiority and pre-emptive strike doctrine (Begin Doctrine).',
      PAK: 'Pakistan\'s major cities (Lahore, Rawalpindi) lie within 30–50 km of the Indian frontier, historically driving Islamabad to seek "strategic depth" by exerting political influence over Afghanistan.'
    },
    majorActors: ['Russia', 'Israel', 'Pakistan', 'China', 'India'],
    historicalBackground: 'A foundational concept of continental geopolitics analyzed by Carl von Clausewitz and Halford Mackinder.',
    currentRelevance: 'Underpins Russia\'s desire to keep Ukraine out of NATO to preserve an 800-mile defensive buffer from Moscow.',
    relatedCountries: ['RUS', 'ISR', 'PAK', 'UKR', 'AFG', 'IND'],
    relatedEvents: ['1812 Patriotic War', '1941 Operation Barbarossa', '1967 Six-Day War'],
    relatedLocations: ['North European Plain', 'West Bank', 'Durand Line'],
    relatedTerms: ['buffer-state', 'sphere-of-influence', 'exclave', 'balance-of-power'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Strategic_depth',
    officialSources: [
      { title: 'US Army War College Strategic Studies Institute', type: 'academic-defence', url: 'https://ssi.armywarcollege.edu' }
    ],
    sources: [
      { title: 'International Institute for Strategic Studies (IISS)', type: 'think-tank', url: 'https://www.iiss.org' }
    ],
    claimType: 'ANALYSIS',
    lastVerified: '2026-03'
  },

  'nuclear-deterrence': {
    id: 'nuclear-deterrence',
    name: 'Nuclear Deterrence',
    aliases: ['Nuclear Deterrence', 'nuclear deterrence', 'atomic deterrence'],
    category: 'Military Strategy',
    shortDefinition: 'The prevention of military attack through the possession of an assured retaliatory capability using atomic weapons capable of inflicting catastrophic, unacceptable damage.',
    detailedExplanation: 'Depends on the psychological credibility of retaliation: the adversary must be convinced that the nuclear-armed state possesses both the physical technical capability (survivable missiles and warheads) and the political resolve to use them.',
    whyItMatters: 'Prevented direct superpower armed conflict during the Cold War and continues to prevent full-scale conventional warfare between nuclear-armed states today.',
    contextualFraming: {
      RUS: 'Russia\'s nuclear doctrine (revised in 2020 and 2024) allows nuclear employment in response to nuclear weapons or conventional aggression that threatens the very existence of the Russian state or its ally Belarus.',
      IND: 'India maintains a doctrine of Credible Minimum Deterrence with a strict No First Use pledge, guaranteeing massive punitive retaliation if nuclear, chemical, or biological weapons are used against Indian territory or forces.',
      PAK: 'Pakistan rejects No First Use, maintaining tactical nuclear weapons (Nasr short-range missiles) designed to counter Indian conventional armored thrusts (Cold Start doctrine).'
    },
    majorActors: ['United States', 'Russia', 'China', 'India', 'Pakistan', 'France', 'United Kingdom', 'Israel', 'North Korea'],
    historicalBackground: 'Began with the US atomic bombing of Hiroshima and Nagasaki in 1945, formalized with the 1949 Soviet nuclear test.',
    currentRelevance: 'Tested by explicit nuclear signaling and alert level adjustments during the Ukraine conflict and rising tensions in the Taiwan Strait.',
    relatedCountries: ['USA', 'RUS', 'CHN', 'IND', 'PAK', 'FRA', 'GBR', 'ISR', 'PRK'],
    relatedEvents: ['1945 Manhattan Project', '1962 Cuban Missile Crisis', '1998 Pokhran-II Tests'],
    relatedLocations: ['Los Alamos', 'Sarov Nuclear Center', 'Bhabha Atomic Research Centre'],
    relatedTerms: ['nuclear-triad', 'deterrence', 'extended-deterrence', 'arms-control', 'icbm'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Nuclear_deterrence',
    officialSources: [
      { title: 'IAEA International Atomic Energy Agency Repository', type: 'un-agency', url: 'https://www.iaea.org' },
      { title: 'Federation of American Scientists (FAS) Nuclear Notebook', type: 'scientific-data', url: 'https://fas.org' }
    ],
    sources: [
      { title: 'SIPRI Yearbook: Armaments, Disarmament and International Security', type: 'defence-research', url: 'https://www.sipri.org' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'arms-control': {
    id: 'arms-control',
    name: 'Arms Control',
    aliases: ['Arms Control', 'arms control', 'disarmament', 'nuclear arms control', 'strategic arms limitation'],
    category: 'Military Strategy',
    shortDefinition: 'International agreements, treaties, and inspection regimes negotiated between sovereign states to limit the development, testing, deployment, or proliferation of conventional and nuclear weapons.',
    detailedExplanation: 'Arms control treaties operate by:\n• Setting verifiable ceilings on deployed warheads and delivery vehicles (e.g., New START).\n• Banning whole categories of destabilizing weapons (e.g., 1987 Intermediate-Range Nuclear Forces / INF Treaty).\n• Preventing geographic militarization (e.g., 1967 Outer Space Treaty, 1959 Antarctic Treaty).\n• Establishing intrusive on-site inspection verification protocols and telemetry data exchanges.',
    whyItMatters: 'Maintains strategic stability, prevents open-ended economic arms races, and reduces the risk of nuclear war triggered by miscalculation or panic.',
    contextualFraming: {
      USA: 'Historically partnered with Moscow in bilateral treaties (SALT, START I, INF, New START), but now insists that future strategic arms negotiations must include China\'s rapidly growing nuclear arsenal.',
      RUS: 'Suspended participation in New START inspections in 2023, citing Western proxy involvement in Ukraine, putting the bilateral arms control regime at risk of collapse.',
      IND: 'India supports universal, non-discriminatory global nuclear disarmament while refusing to sign the Nuclear Non-Proliferation Treaty (NPT) or Comprehensive Nuclear-Test-Ban Treaty (CTBT) on the grounds that they enshrine nuclear apartheid.'
    },
    majorActors: ['United States', 'Russia', 'China', 'United Nations'],
    historicalBackground: 'Began in earnest after the 1962 Cuban Missile Crisis, producing the 1963 Partial Test Ban Treaty and 1972 Anti-Ballistic Missile (ABM) Treaty.',
    currentRelevance: 'The bilateral US-Russia strategic arms control framework is near total collapse following the expiration of the INF Treaty, Open Skies Treaty, and the looming expiration of New START.',
    relatedCountries: ['USA', 'RUS', 'CHN', 'IND'],
    relatedEvents: ['1972 ABM Treaty', '1987 INF Treaty', '2010 New START Treaty'],
    relatedLocations: ['Geneva (Disarmament Conference)', 'Vienna (IAEA HQ)'],
    relatedTerms: ['start-treaties', 'nuclear-deterrence', 'nuclear-triad', 'confidence-building-measures'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Arms_control',
    officialSources: [
      { title: 'United Nations Office for Disarmament Affairs (UNODA)', type: 'un-agency', url: 'https://www.un.org/disarmament/' },
      { title: 'US State Department Bureau of Arms Control, Deterrence, and Stability', type: 'government-agency', url: 'https://www.state.gov' }
    ],
    sources: [
      { title: 'Arms Control Association (ACA)', type: 'research-journal', url: 'https://www.armscontrol.org' }
    ],
    claimType: 'TREATY',
    lastVerified: '2026-03'
  },

  'confidence-building-measures': {
    id: 'confidence-building-measures',
    name: 'Confidence-Building Measures',
    aliases: ['Confidence-Building Measures', 'confidence-building measures', 'CBMs', 'CBM'],
    category: 'Geopolitical Doctrine',
    shortDefinition: 'Planned actions, hotlines, agreements, and procedures negotiated between rival militaries to enhance transparency, prevent misunderstandings, and reduce the risk of accidental war.',
    detailedExplanation: 'CBMs include:\n• Military hotlines between heads of state and frontline military commanders.\n• Advance notification of large-scale military exercises and missile test launches.\n• Demilitarized buffer zones and disengagement protocols along disputed borders.\n• Routine exchange of military observers and data registries.',
    whyItMatters: 'Transforms dangerous tense frontlines from hair-trigger powder kegs into managed standoffs, reducing the risk of accidental escalation.',
    contextualFraming: {
      IND: 'India and China signed multiple border CBM agreements (1993, 1996, 2005, 2013) prohibiting firearms and explosives within 2 km of the LAC; in October 2024 at the Kazan BRICS Summit, both nations agreed to a disengagement pact restoring patrolling rights.',
      USA: 'The US and the Soviet Union pioneered CBMs during the Cold War with the 1963 Moscow-Washington Hotline and the 1972 Incidents at Sea Agreement (INCSEA).'
    },
    majorActors: ['India', 'China', 'United States', 'Russia', 'Pakistan'],
    historicalBackground: 'Codified in Europe through the 1975 Helsinki Accords and the 1990 Vienna Document on Confidence- and Security-Building Measures.',
    currentRelevance: 'Essential in stabilizing the Line of Actual Control (LAC) between India and China and preventing naval collisions between the US and China in the South China Sea.',
    relatedCountries: ['IND', 'CHN', 'USA', 'RUS', 'PAK'],
    relatedEvents: ['1975 Helsinki Accords', '1993 Peace and Tranquility Agreement', '2024 Kazan LAC Disengagement'],
    relatedLocations: ['Chushul-Moldo Border Point', 'Nathu La', 'Helsinki'],
    relatedTerms: ['status-quo', 'territorial-waters', 'arms-control', 'cold-war'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Confidence-building_measures',
    officialSources: [
      { title: 'OSCE Vienna Document on Confidence- and Security-Building Measures', type: 'international-treaty', url: 'https://www.osce.org' },
      { title: 'Ministry of External Affairs (India) Bilateral Border Agreements with China', type: 'government-treaty', url: 'https://www.mea.gov.in' }
    ],
    sources: [
      { title: 'Stimson Center — South Asia Confidence Building Measures Database', type: 'think-tank', url: 'https://www.stimson.org' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'eez': {
    id: 'eez',
    name: 'Exclusive Economic Zone',
    aliases: ['Exclusive Economic Zone', 'EEZ', 'eez', 'exclusive economic zone'],
    category: 'Maritime Law & Oceans',
    shortDefinition: 'An ocean zone prescribed by the 1982 UNCLOS extending up to 200 nautical miles from a coastal baseline, granting the coastal state sovereign rights over all natural marine resources.',
    detailedExplanation: 'Under UNCLOS Part V, coastal states control fisheries, offshore petroleum, seabed mineral exploitation, and artificial islands in their EEZ. Crucially, however, foreign ships and aircraft retain high-seas freedom of navigation and overflight, distinguishing an EEZ from full sovereign territorial waters (which only extend 12 nautical miles).',
    whyItMatters: 'Encompasses 38% of the world ocean surface and over 90% of global commercial fisheries and offshore petroleum reserves, making it the primary theater of maritime sovereignty disputes.',
    contextualFraming: {
      CHN: 'China claims historic rights over nearly the entire South China Sea inside its "Ten-Dash Line," conflicting with the recognized 200-nautical-mile EEZs of the Philippines, Vietnam, Malaysia, and Indonesia.',
      IND: 'India possesses a vast EEZ of 2.37 million square kilometers across the Arabian Sea, Bay of Bengal, and Andaman Sea, driving its "Deep Ocean Mission" and Blue Economy investments.',
      USA: 'The United States possesses the world\'s largest EEZ (over 11.3 million km² across Alaska, Hawaii, and Pacific island territories), though Washington has signed but not yet ratified UNCLOS.'
    },
    majorActors: ['China', 'Philippines', 'Vietnam', 'India', 'United States', 'Indonesia'],
    historicalBackground: 'Codified in 1982 after decades of negotiations during the Third United Nations Conference on the Law of the Sea.',
    currentRelevance: 'Ground zero for clashes in the South China Sea, where the 2016 Permanent Court of Arbitration ruled that China\'s historical claims have no legal basis under UNCLOS.',
    relatedCountries: ['CHN', 'PHL', 'VNM', 'MYS', 'IDN', 'IND', 'USA'],
    relatedEvents: ['1982 UNCLOS Adoption', '2016 South China Sea Arbitration Ruling'],
    relatedLocations: ['South China Sea', 'Scarborough Shoal', 'Second Thomas Shoal', 'Andaman Sea'],
    relatedTerms: ['freedom-of-navigation', 'territorial-waters', 'continental-shelf', 'sloc', 'chokepoint'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Exclusive_economic_zone',
    officialSources: [
      { title: 'United Nations Convention on the Law of the Sea (UNCLOS Part V)', type: 'un-treaty', url: 'https://www.un.org/depts/los/convention_agreements/texts/unclos/part5.htm' }
    ],
    sources: [
      { title: 'Asia Maritime Transparency Initiative (AMTI / CSIS)', type: 'research-database', url: 'https://amti.csis.org' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'freedom-of-navigation': {
    id: 'freedom-of-navigation',
    name: 'Freedom of Navigation',
    aliases: ['Freedom of Navigation', 'freedom of navigation', 'FONOP', 'FONOPS', 'Freedom of Navigation Operations'],
    category: 'Maritime Law & Oceans',
    shortDefinition: 'A foundational principle of customary international maritime law dictating that ships flying the flag of any sovereign state enjoy the right to travel unhindered in international waters and transit territorial seas via innocent passage.',
    detailedExplanation: 'Under UNCLOS, all commercial and naval ships enjoy high-seas freedoms beyond territorial waters (12 nm) and transit passage rights through international straits. The US Department of Defense conducts operational Freedom of Navigation Operations (FONOPs) by sailing warships through contested waters to challenge excessive maritime claims.',
    whyItMatters: 'Guarantees that no single coastal state can close international trade arteries or militarize shared maritime commons.',
    contextualFraming: {
      USA: 'Conducts regular FONOPs in the South China Sea, Taiwan Strait, and Persian Gulf, asserting the right to navigate without prior notification to challenge excessive coastal state baseline claims.',
      CHN: 'Considers US naval FONOPs inside its claimed 12-mile zones around occupied Paracel and Spratly features as deliberate military provocations and violations of its sovereignty.',
      IND: 'Supports freedom of navigation and overflight across all international waterways, while legally requiring foreign warships to seek prior consent before entering India\'s 12-nm territorial sea.'
    },
    majorActors: ['United States', 'China', 'India', 'Japan', 'United Kingdom', 'Australia'],
    historicalBackground: 'Articulated in Hugo Grotius\'s seminal 1609 text "Mare Liberum" (Free Sea), formalizing the principle that the oceans belong to all humanity.',
    currentRelevance: 'A primary flashpoint in the Taiwan Strait and South China Sea, where Western and allied naval task groups conduct joint freedom of navigation transits.',
    relatedCountries: ['USA', 'CHN', 'IND', 'JPN', 'GBR', 'AUS', 'TWN'],
    relatedEvents: ['1982 UNCLOS Signing', 'Annual US DoD Freedom of Navigation Reports'],
    relatedLocations: ['Taiwan Strait', 'South China Sea', 'Spratly Islands', 'Paracel Islands'],
    relatedTerms: ['eez', 'territorial-waters', 'strait', 'sloc', 'quad'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Freedom_of_navigation',
    officialSources: [
      { title: 'US Department of Defense Annual Freedom of Navigation Reports', type: 'official-report', url: 'https://policy.defense.gov/OUSDP-Offices/FON/' },
      { title: 'UN Division for Ocean Affairs and the Law of the Sea', type: 'un-body', url: 'https://www.un.org/depts/los/' }
    ],
    sources: [
      { title: 'Lawfare Maritime Strategy Archive', type: 'legal-journal', url: 'https://www.lawfaremedia.org' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'icbm': {
    id: 'icbm',
    name: 'ICBM',
    aliases: ['ICBM', 'icbm', 'Intercontinental Ballistic Missile', 'intercontinental ballistic missile'],
    category: 'Weapons Systems',
    shortDefinition: 'A long-range land-based guided ballistic missile designed primarily for nuclear weapons delivery, possessing a minimum range of 5,500 kilometers (3,400 miles).',
    detailedExplanation: 'Launches from hardened underground silos or mobile road/rail transporter-erector-launchers (TELs). Follows a sub-orbital ballistic trajectory that leaves the Earth\'s atmosphere into space before re-entering at hypersonic speeds (Mach 20+). Most modern ICBMs carry Multiple Independently Targetable Re-entry Vehicles (MIRVs) along with decoys and penetration aids to defeat missile defense radars.',
    whyItMatters: 'Provides lightning-fast strategic response (flight time of 25–35 minutes between continents), forming the land-based cornerstone of strategic nuclear triads.',
    contextualFraming: {
      RUS: 'Deploys over 300 modern ICBMs, predominantly road-mobile RS-24 Yars and the super-heavy silo-based RS-28 Sarmat ("Satan II") capable of orbital bombardment paths.',
      USA: 'Operates 400 Minuteman III ICBMs dispersed in silos across North Dakota, Montana, and Wyoming, currently planning replacement with the LGM-35A Sentinel program.',
      IND: 'Operates the Agni-V road-mobile canisterized ballistic missile with an operational range exceeding 5,000–8,000 km, successfully tested with MIRV technology (Mission Divyastra) in March 2024 to cover all of China.',
      CHN: 'Rapidly constructed over 300 new ICBM silos in Yumen and Hami, fielding the DF-41 road/rail-mobile solid-fuel ICBM.'
    },
    majorActors: ['United States', 'Russia', 'China', 'India', 'North Korea'],
    historicalBackground: 'The Soviet Union launched the world\'s first ICBM (the R-7 Semyorka) in August 1957, which also placed Sputnik 1 into orbit.',
    currentRelevance: 'North Korea\'s development of the solid-fueled Hwasong-18 ICBM and the US Sentinel modernization budget debates make ICBMs central to contemporary defense policy.',
    relatedCountries: ['USA', 'RUS', 'CHN', 'IND', 'PRK'],
    relatedEvents: ['1957 R-7 First Launch', '2024 Mission Divyastra MIRV Test'],
    relatedLocations: ['Plesetsk Cosmodrome', 'Malmstrom AFB', 'Minot AFB', 'Abdul Kalam Island'],
    relatedTerms: ['nuclear-triad', 'slbm', 'ballistic-missile', 'nuclear-deterrence', 'start-treaties'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Intercontinental_ballistic_missile',
    officialSources: [
      { title: 'US Air Force Global Strike Command — Minuteman III Factsheet', type: 'military-factsheet', url: 'https://www.afgsc.af.mil' },
      { title: 'DRDO India — Agni Series Missile Systems Overview', type: 'government-defence', url: 'https://www.drdo.gov.in' }
    ],
    sources: [
      { title: 'Center for Strategic and International Studies (CSIS) Missile Defense Project', type: 'missile-database', url: 'https://missilethreat.csis.org' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'slbm': {
    id: 'slbm',
    name: 'SLBM',
    aliases: ['SLBM', 'slbm', 'Submarine-Launched Ballistic Missile', 'submarine-launched ballistic missile'],
    category: 'Weapons Systems',
    shortDefinition: 'A ballistic missile launched from a submerged nuclear-powered submarine, specifically designed for strategic nuclear second-strike deterrence.',
    detailedExplanation: 'Fired from vertical launch tubes while submerged using high-pressure steam/gas ejectors before solid-fuel rocket ignition. SLBMs travel on ballistic trajectories to distances of 6,000 to 12,000 km, carrying nuclear MIRVs.',
    whyItMatters: 'Considered the most survivable leg of the nuclear triad. Because ballistic missile submarines hide in ocean bastions and deep trenches, adversaries cannot locate or eliminate them in a surprise first strike, guaranteeing catastrophic retaliation.',
    contextualFraming: {
      RUS: 'Deploys the RSM-56 Bulava SLBM carried aboard Borei-class SSBNs, designed to bypass ballistic missile defense shields through evasive trajectory maneuvering.',
      USA: 'Deploys the Trident II D5 SLBM aboard Ohio-class submarines (and future Columbia-class), forming the bulk of deployed US operational nuclear warheads.',
      IND: 'Operates the K-15 Sagarika (750 km) and K-4 (3,500 km) SLBMs aboard the indigenous SSBN INS Arihant and INS Arighaat, completing India\'s survivable second-strike capability.',
      FRA: 'France retired its land-based ICBMs in 1996, relying almost exclusively on M51 SLBMs deployed aboard its four Triomphant-class SSBNs.'
    },
    majorActors: ['United States', 'Russia', 'France', 'United Kingdom', 'China', 'India'],
    historicalBackground: 'The US deployed the first operational SLBM system, Polaris A-1, aboard USS George Washington in 1960.',
    currentRelevance: 'Core platform for the UK\'s sole continuous-at-sea nuclear deterrent (Vanguard/Dreadnought-class with Trident II).',
    relatedCountries: ['USA', 'RUS', 'FRA', 'GBR', 'CHN', 'IND'],
    relatedEvents: ['1960 USS George Washington Launch', '2024 INS Arighaat Commissioning'],
    relatedLocations: ['Kings Bay Naval Submarine Base (Georgia)', 'Gadzhiyevo Base (Russia)', 'Île Longue (France)'],
    relatedTerms: ['ssbn', 'nuclear-triad', 'icbm', 'nuclear-deterrence', 'ballistic-missile'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Submarine-launched_ballistic_missile',
    officialSources: [
      { title: 'Royal Navy — Continuous At Sea Deterrent (CASD)', type: 'military-official', url: 'https://www.royalnavy.mod.uk' },
      { title: 'US Navy Strategic Systems Programs (SSP)', type: 'military-command', url: 'https://www.ssp.navy.mil' }
    ],
    sources: [
      { title: 'Missile Threat — CSIS Aerospace Security Project', type: 'defence-thinktank', url: 'https://missilethreat.csis.org' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'ssbn': {
    id: 'ssbn',
    name: 'SSBN',
    aliases: ['SSBN', 'ssbn', 'Ballistic Missile Submarine', 'ballistic missile submarine', 'boomer'],
    category: 'Weapons Systems',
    shortDefinition: 'A nuclear-powered submarine carrying submarine-launched ballistic missiles equipped with nuclear warheads, purpose-built for continuous-at-sea nuclear deterrence.',
    detailedExplanation: 'SSBN stands for Submersible Ship Ballistic Nuclear (US hull classification):\n• SS = Submarine\n• B = Ballistic missile\n• N = Nuclear-powered (nuclear propulsion reactor)\nNuclear reactors allow SSBNs to remain submerged indefinitely without surfacing for air, limited only by the food supply onboard for the crew (typically 60 to 90-day silent deterrent patrols).',
    whyItMatters: 'Functions as the ultimate insurance policy of sovereign statehood. Ensures that even if an entire nation is wiped out by surprise nuclear strikes, its SSBNs cruising quietly in the ocean will carry out devastating retaliatory annihilation.',
    contextualFraming: {
      RUS: 'Deploys 4th-generation Borei-A class SSBNs (e.g., Knyaz Vladimir), which are ultra-quiet pump-jet propelled subs carrying 16 Bulava missiles each.',
      USA: 'Operates 14 Ohio-class SSBNs based at Bangor, Washington, and Kings Bay, Georgia, currently building the next-generation Columbia-class replacement.',
      IND: 'India joined the elite group of SSBN operators with INS Arihant (commissioned 2016) and INS Arighaat (commissioned 2024), built at the Ship Building Centre in Visakhapatnam.',
      GBR: 'The Royal Navy has maintained an unbroken Continuous At Sea Deterrence (CASD) patrol with at least one Vanguard-class SSBN armed with Trident missiles submerged somewhere in the world since 1969.'
    },
    majorActors: ['United States', 'Russia', 'China', 'United Kingdom', 'France', 'India'],
    historicalBackground: 'The commissioning of USS George Washington (SSBN-598) in December 1959 revolutionized Cold War strategic deterrence.',
    currentRelevance: 'Massive capital investments in new SSBN fleets (US Columbia-class, UK Dreadnought-class, Russian Borei-A, Indian S4-class) running into hundreds of billions of dollars.',
    relatedCountries: ['USA', 'RUS', 'CHN', 'GBR', 'FRA', 'IND'],
    relatedEvents: ['1969 UK Continuous At Sea Deterrent Commencement', '2018 INS Arihant First Deterrent Patrol'],
    relatedLocations: ['Naval Base Kitsap', 'Faslane Naval Base (Scotland)', 'Visakhapatnam SBC'],
    relatedTerms: ['slbm', 'nuclear-triad', 'nuclear-deterrence', 'icbm', 'aukus'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Ballistic_missile_submarine',
    officialSources: [
      { title: 'Indian Navy Official Portal — Submarine Arm', type: 'military-official', url: 'https://www.indiannavy.nic.in' },
      { title: 'US Navy Fact File — Fleet Ballistic Missile Submarines (SSBN)', type: 'military-factsheet', url: 'https://www.navy.mil' }
    ],
    sources: [
      { title: 'Covert Shores (H I Sutton) Submarine Warfare Analysis', type: 'defence-specialist', url: 'http://www.hisutton.com' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'air-defence': {
    id: 'air-defence',
    name: 'Air Defence',
    aliases: ['Air Defence', 'air defence', 'air defense', 'Air Defense', 'integrated air defence', 'IADS'],
    category: 'Weapons Systems',
    shortDefinition: 'A multi-layered network of radar sensors, command-and-control nodes, surface-to-air missile (SAM) batteries, anti-aircraft artillery, and interceptor aircraft designed to destroy incoming enemy aircraft, cruise missiles, ballistic missiles, and drones.',
    detailedExplanation: 'Operates in integrated overlapping tiers:\n• Long-Range / High-Altitude: (e.g., S-400, Patriot PAC-3, Arrow 3, THAAD) Intercepts ballistic missiles and high-altitude aircraft at 100–400 km.\n• Medium-Range: (e.g., NASAMS, Buk-M3, Barak-8 / MRSAM) Shields command centers and army divisions at 40–100 km.\n• Short-Range / Point Defense: (e.g., Iron Dome, Pantsir-S1, Tor-M2) Intercepts cruise missiles, glide bombs, and drones at 5–30 km.\n• Very Short-Range (VSHORAD): Man-portable shoulder-fired missiles (Stinger, Igla) and electronic warfare drone jammers.',
    whyItMatters: 'Denies the adversary air superiority, protecting strategic national infrastructure, population centers, and troop concentrations from aerial devastation.',
    contextualFraming: {
      ISR: 'Israel possesses the world\'s most combat-tested multi-layered shield: Iron Dome (rockets), David\'s Sling (cruise missiles/heavy rockets), and Arrow 2/3 (exo-atmospheric ballistic missiles).',
      RUS: 'Russia operates dense Integrated Air Defence Systems (IADS) built around S-400 and S-300 batteries, which severely restricted Ukrainian manned fixed-wing combat aviation.',
      IND: 'India deploys an indigenous multi-layered shield combining the Russian S-400 Triumf, Indo-Israeli Barak-8 (MRSAM), indigenous Akash-NG, and the upcoming Project Kusha (long-range SAM).'
    },
    majorActors: ['Israel', 'Russia', 'United States', 'India', 'China', 'Iran'],
    historicalBackground: 'Evolved from World War II anti-aircraft flak guns into surface-to-air missile systems following the 1960 U-2 spy plane shootdown over Soviet territory.',
    currentRelevance: 'Severely challenged by cheap saturation drone swarms (Shahed-136, FPV drones), forcing a revival of cannon-based air defense and laser directed-energy weapons.',
    relatedCountries: ['ISR', 'RUS', 'USA', 'IND', 'CHN', 'IRN'],
    relatedEvents: ['1960 U-2 Shootdown', '1973 Yom Kippur War SAM Ambush', 'April 2024 Iranian Missile Barrage on Israel'],
    relatedLocations: ['Moscow Ring Air Defense', 'Tel Aviv Iron Dome Batteries'],
    relatedTerms: ['s-400', 'ballistic-missile', 'cruise-missile', 'a2-ad', 'caatsa'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Air_defense',
    officialSources: [
      { title: 'Israel Ministry of Defense — Directorate of Defense R&D (IMDO)', type: 'government-defence', url: 'https://www.mod.gov.il' },
      { title: 'US Army Integrated Fires Mission Command (IBCS)', type: 'military-procurement', url: 'https://www.army.mil' }
    ],
    sources: [
      { title: 'IISS Military Balance Air Defence Assessments', type: 'defence-publication', url: 'https://www.iiss.org' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'ballistic-missile': {
    id: 'ballistic-missile',
    name: 'Ballistic Missile',
    aliases: ['Ballistic Missile', 'ballistic missile', 'ballistic missiles'],
    category: 'Weapons Systems',
    shortDefinition: 'A rocket-propelled guided missile that flies on an unpowered, high-arching parabolic trajectory governed primarily by the laws of ballistics and gravity after its initial rocket boost phase.',
    detailedExplanation: 'Consists of three flight phases:\n• Boost Phase: Rocket engines burn for 1 to 5 minutes, lifting the missile out of the atmosphere at supersonic speed.\n• Midcourse Phase: The longest phase, where the payload coasts through space on a sub-orbital ballistic arc.\n• Terminal Phase: Warheads re-enter the Earth\'s atmosphere at extreme hypersonic speeds (Mach 5 to 25) before striking the target.\nClassified by range: Short-Range (SRBM < 1,000 km), Medium-Range (MRBM 1,000–3,000 km), Intermediate-Range (IRBM 3,000–5,500 km), and Intercontinental (ICBM > 5,500 km).',
    whyItMatters: 'Extreme terminal speed and high-altitude flight trajectories make ballistic missiles extraordinarily difficult to intercept, providing nations with unmatched long-range strike capability.',
    contextualFraming: {
      IRN: 'Iran possesses the largest and most diverse ballistic missile arsenal in the Middle East (Kheibar Shekan, Emad, Fattah), forming its primary deterrence and retaliation arm against Israel and US bases.',
      IND: 'Operates the Agni series (Agni-I to Agni-V) and Prithvi series for nuclear deterrence, alongside Pralay short-range quasi-ballistic missiles for conventional standoff battlefield precision.',
      PRK: 'North Korea uses frequent ballistic missile test launches over the Sea of Japan to demonstrate retaliatory capability against Tokyo and the continental United States.'
    },
    majorActors: ['United States', 'Russia', 'China', 'Iran', 'India', 'North Korea', 'Israel'],
    historicalBackground: 'Invented by Wernher von Braun in Nazi Germany with the V-2 rocket (Vergeltungswaffe 2) used against London in 1944.',
    currentRelevance: 'Showcased in the massive April and October 2024 ballistic missile strikes by Iran against Israel, highlighting the race between ballistic offense and missile defense.',
    relatedCountries: ['IRN', 'ISR', 'IND', 'RUS', 'USA', 'PRK', 'CHN'],
    relatedEvents: ['1944 V-2 Rocket Strikes', '1991 Scud Missile Exchanges', '2024 Operation True Promise'],
    relatedLocations: ['Esfahan Missile City', 'Abdul Kalam Island', 'Kapustin Yar'],
    relatedTerms: ['icbm', 'slbm', 'cruise-missile', 'air-defence', 'hypersonic-weapons'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Ballistic_missile',
    officialSources: [
      { title: 'Missile Defense Agency (MDA) Ballistic Missile Defense System Overview', type: 'government-defence', url: 'https://www.mda.mil' }
    ],
    sources: [
      { title: 'CSIS Missile Threat — Ballistic Missiles of the World', type: 'missile-database', url: 'https://missilethreat.csis.org' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'cruise-missile': {
    id: 'cruise-missile',
    name: 'Cruise Missile',
    aliases: ['Cruise Missile', 'cruise missile', 'cruise missiles', 'subsonic cruise missile', 'supersonic cruise missile'],
    category: 'Weapons Systems',
    shortDefinition: 'An unmanned, self-propelled guided missile powered continuously by a jet engine that flies within the atmosphere at low altitudes on an aerodynamic flight path to deliver a warhead with pinpoint precision.',
    detailedExplanation: 'Unlike ballistic missiles (which arch into space), cruise missiles fly like small unmanned jet aircraft:\n• Low-Altitude Terrain Hugging: Flies tens of meters above ground or sea to stay beneath enemy radar horizons.\n• Advanced Guidance: Employs GPS/GLONASS, INS, Terrain Contour Matching (TERCOM), and optical/infrared scene-matching seekers for surgical terminal accuracy (often within 1–3 meters).\n• Speed Categories: Subsonic (Mach 0.7–0.9 like Tomahawk, Kalibr), Supersonic (Mach 2.5–3.0 like BrahMos), and Hypersonic (Mach 5+ like Zircon).',
    whyItMatters: 'Provides surgical stand-off strike precision against heavily fortified targets, command bunkers, and naval warships without risking human pilots.',
    contextualFraming: {
      IND: 'India co-developed and fields the world\'s fastest supersonic cruise missile, the BrahMos (Mach 3), alongside the long-range subsonic Nirbhay / LRLACM indigenous system.',
      USA: 'The BGM-109 Tomahawk is the signature precision cruise missile of the US Navy, launched from destroyers and attack submarines in virtually every major US conflict since 1991.',
      RUS: 'Russia relies extensively on sea-launched Kalibr and air-launched Kh-101 stealth cruise missiles for long-range strikes against Ukrainian infrastructure.'
    },
    majorActors: ['United States', 'Russia', 'India', 'China', 'United Kingdom', 'France'],
    historicalBackground: 'Originated with Germany\'s V-1 flying bomb in 1944, revolutionized in the late 1970s with micro-turbofans and digital terrain-matching mapping.',
    currentRelevance: 'Proliferating rapidly to non-state actors (e.g., Quds cruise missiles used by Houthis against commercial shipping in the Red Sea).',
    relatedCountries: ['USA', 'RUS', 'IND', 'CHN', 'GBR', 'FRA', 'YEM'],
    relatedEvents: ['1991 Desert Storm Tomahawk Strikes', '2015 Russian Caspian Sea Kalibr Strikes'],
    relatedLocations: ['BrahMos Aerospace (New Delhi)', 'Raytheon Missiles (Tucson)'],
    relatedTerms: ['brahmos', 'ballistic-missile', 'air-defence', 'hypersonic-weapons', 'a2-ad'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Cruise_missile',
    officialSources: [
      { title: 'US Navy Fact File — Tomahawk Cruise Missile', type: 'military-factsheet', url: 'https://www.navy.mil' },
      { title: 'BrahMos Aerospace Official Specifications', type: 'defence-manufacturer', url: 'https://www.brahmos.com' }
    ],
    sources: [
      { title: 'Jane\'s Strategic Weapons Systems', type: 'defence-specialist', url: 'https://www.janes.com' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'geopolitical-risk': {
    id: 'geopolitical-risk',
    name: 'Geopolitical Risk',
    aliases: ['Geopolitical Risk', 'geopolitical risk', 'political risk', 'geopolitical instability'],
    category: 'Economic Statecraft',
    shortDefinition: 'The risk that political events, interstate wars, diplomatic fracturing, trade wars, or regime instability in a country or region will negatively impact global markets, corporate investments, and economic supply chains.',
    detailedExplanation: 'Quantifies how geopolitical decisions alter financial outcomes:\n• Sovereign Expropriation and nationalization of foreign assets.\n• Abrupt sanction imposition or asset freezes.\n• War risk maritime insurance surcharges and shipping rerouting costs.\n• Regulatory decoupling, export bans, and tariff weaponization (e.g., semiconductor export bans).',
    whyItMatters: 'Drives sovereign capital allocation, corporate supply chain "friend-shoring", and foreign direct investment (FDI) decisions across the global economy.',
    contextualFraming: {
      TWN: 'A potential blockade or invasion of Taiwan represents the premier global geopolitical risk, projected by Bloomberg Economics to cause a $10 trillion hit (~10% of world GDP) due to semiconductor supply collapse.',
      SAU: 'Political stability in the Gulf is essential to pricing international crude oil; conflicts in the Persian Gulf add an immediate "geopolitical risk premium" of $5–15 per barrel of Brent crude.',
      IND: 'India benefits from geopolitical risk diversification as multinationals adopt a "China + 1" strategy, shifting electronics and manufacturing supply chains to Tamil Nadu, Karnataka, and Gujarat.'
    },
    majorActors: ['Multinational Corporations', 'Sovereign Wealth Funds', 'IMF', 'World Bank'],
    historicalBackground: 'Recognized formally as a corporate risk category following the 1973 OPEC oil shock and the 1979 Iranian Revolution.',
    currentRelevance: 'Ranked by global CEOs in 2024–2026 as the single greatest threat to global business growth, outpacing inflation and cyber risks.',
    relatedCountries: ['TWN', 'CHN', 'USA', 'SAU', 'RUS', 'IND'],
    relatedEvents: ['1973 Oil Shock', '2018 US-China Trade War', '2022 Russia Sanctions Shock'],
    relatedLocations: ['Wall Street', 'London City', 'Taiwan Semiconductor Manufacturing Hub'],
    relatedTerms: ['sanctions', 'energy-security', 'trade-corridor', 'status-quo'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Political_risk',
    officialSources: [
      { title: 'IMF World Economic Outlook: Geopolitical Fragmentation and Trade', type: 'imf-report', url: 'https://www.imf.org' },
      { title: 'World Economic Forum Global Risks Report', type: 'wef-report', url: 'https://www.weforum.org' }
    ],
    sources: [
      { title: 'Eurasia Group Top Geopolitical Risks Index', type: 'risk-consultancy', url: 'https://www.eurasiagroup.net' }
    ],
    claimType: 'ANALYSIS',
    lastVerified: '2026-03'
  },

  'trade-corridor': {
    id: 'trade-corridor',
    name: 'Trade Corridor',
    aliases: ['Trade Corridor', 'trade corridor', 'economic corridor', 'connectivity corridor'],
    category: 'Economic Statecraft',
    shortDefinition: 'A synchronized intermodal network of highways, railways, deep-water ports, pipelines, and customs checkpoints designed to facilitate the rapid, duty-efficient transit of goods between nations.',
    detailedExplanation: 'Modern trade corridors combine infrastructure with legal harmonization:\n• Multimodal Transit: Seamlessly links container ships to rail freight and inland dry ports.\n• Customs Harmonization: Single-window digital customs clearances and tax-free transit zones.\n• Strategic Geopolitical Counter-Pivots: Major powers build corridors to bypass adversarial chokepoints (e.g., INSTC bypasses Suez, CPEC bypasses Malacca, IMEC connects India to Europe via the Gulf).',
    whyItMatters: 'Directly reshapes global trade routes, creates economic spheres of influence, and reduces transit time and freight costs by 30–50%.',
    contextualFraming: {
      IND: 'India champions both the International North-South Transport Corridor (INSTC via Iran\'s Chabahar Port to Russia) and the India-Middle East-Europe Economic Corridor (IMEC), anchoring New Delhi as a global manufacturing hub.',
      CHN: 'China\'s Belt and Road Initiative (BRI) established the China-Pakistan Economic Corridor (CPEC) linking Xinjiang to Gwadar Port, aiming to bypass the vulnerable Malacca Strait.',
      RUS: 'Following Western sanctions, Russia pivoted its trade southward along the INSTC corridor to access markets in India, Iran, and the Persian Gulf.'
    },
    majorActors: ['India', 'China', 'Russia', 'Iran', 'United States', 'European Union', 'Saudi Arabia'],
    historicalBackground: 'Echoes the ancient Silk Road and British imperial railway networks, modernized in the late 20th century.',
    currentRelevance: 'Competition between China\'s Belt and Road Initiative (BRI) and the Western/Indian-backed IMEC project announced at the 2023 New Delhi G20 Summit.',
    relatedCountries: ['IND', 'CHN', 'RUS', 'IRN', 'SAU', 'ARE', 'PAK'],
    relatedEvents: ['2013 Belt and Road Announcement', '2023 G20 IMEC Corridor Launch'],
    relatedLocations: ['Chabahar Port', 'Gwadar Port', 'Piraeus Port', 'Haifa Port'],
    relatedTerms: ['chokepoint', 'sloc', 'energy-security', 'brics', 'geopolitical-risk'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Economic_corridor',
    officialSources: [
      { title: 'Partnership for Global Infrastructure and Investment (PGI / IMEC)', type: 'official-g7', url: 'https://www.whitehouse.gov' },
      { title: 'International North-South Transport Corridor (INSTC) Coordination Council', type: 'intergovernmental', url: 'https://www.mea.gov.in' }
    ],
    sources: [
      { title: 'Observer Research Foundation (ORF) Connectivity Studies', type: 'research', url: 'https://www.orfonline.org' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'energy-security': {
    id: 'energy-security',
    name: 'Energy Security',
    aliases: ['Energy Security', 'energy security'],
    category: 'Economic Statecraft',
    shortDefinition: 'The uninterrupted availability of energy sources (petroleum, natural gas, electricity, nuclear power, renewables) at an affordable price, resilient against geopolitical disruption.',
    detailedExplanation: 'Composed of four dimensions (the 4 As):\n• Availability: Physical existence of geological deposits or renewable potential.\n• Accessibility: Geopolitical and infrastructural ability to transport energy via pipelines, sea lanes, and grids.\n• Affordability: Economic stability of fuel pricing for domestic consumers and heavy industries.\n• Acceptability: Environmental and climate sustainability.',
    whyItMatters: 'Energy is the lifeblood of national sovereignty and economic activity. A loss of energy security causes industrial shutdowns, blackouts, runaway inflation, and military paralysis.',
    contextualFraming: {
      IND: 'India imports over 85% of its crude oil and 50% of its natural gas. New Delhi prioritized energy security by purchasing discounted Russian crude in national currencies post-2022, saving billions and controlling domestic inflation.',
      EU: 'Suffered an acute energy security shock in 2022 when Russian natural gas pipeline flows (Nord Stream) were severed, forcing a rapid, costly pivot to US and Qatari Liquefied Natural Gas (LNG).',
      CHN: 'As the world\'s largest crude importer, China constructs strategic petroleum reserves (SPR) and expands overland pipelines from Russia (Power of Siberia) and Central Asia to insulate against naval blockades.'
    },
    majorActors: ['Saudi Arabia', 'Russia', 'United States', 'India', 'China', 'Qatar'],
    historicalBackground: 'Elevated to high national security policy during the 1973 Arab oil embargo, which led to the creation of the International Energy Agency (IEA) in 1974.',
    currentRelevance: 'Accelerated transition to critical minerals (lithium, cobalt, rare earths) creating new energy security dependencies on Chinese processing dominance.',
    relatedCountries: ['SAU', 'RUS', 'USA', 'IND', 'CHN', 'QAT'],
    relatedEvents: ['1973 Oil Embargo', '2022 Nord Stream Pipeline Sabotage'],
    relatedLocations: ['Ras Tanura (Saudi Arabia)', 'Strait of Hormuz', 'Nord Stream Pipelines'],
    relatedTerms: ['opec-plus', 'chokepoint', 'sloc', 'petrodollar', 'trade-corridor'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Energy_security',
    officialSources: [
      { title: 'International Energy Agency (IEA) Energy Security Principles', type: 'international-agency', url: 'https://www.iea.org' },
      { title: 'Ministry of Petroleum and Natural Gas (India)', type: 'government-ministry', url: 'https://mopng.gov.in' }
    ],
    sources: [
      { title: 'Center on Global Energy Policy at Columbia University', type: 'energy-research', url: 'https://www.energypolicy.columbia.edu' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'exclave': {
    id: 'exclave',
    name: 'Exclave',
    aliases: ['Exclave', 'exclave', 'exclaves'],
    category: 'Geographic Concept',
    shortDefinition: 'A portion of a sovereign state\'s territory that is geographically separated and detached from the main body of the country by the territory of one or more foreign states.',
    detailedExplanation: 'Exclaves present unique geopolitical and defense vulnerabilities because all overland transit, pipelines, rail, and electricity supplies must cross foreign sovereign territory or international air and sea space. In wartime, exclaves are highly susceptible to military cut-off and siege, often prompting the parent nation to heavily fortify them with deterrent weapons.',
    whyItMatters: 'Frequently function as frontline geopolitical tension nodes and potential flashpoints for military transit corridor disputes.',
    contextualFraming: {
      RUS: 'Kaliningrad is Russia\'s strategic Baltic exclave, separated from mainland Russia by Belarus and Lithuania and bordered by Poland. Heavily fortified with Iskander ballistic missiles and the Baltic Fleet headquarters, surrounded completely by NATO territory.',
      AZE: 'Nakhchivan is an Azerbaijani exclave separated from Azerbaijan by Armenian territory, connected to Turkey by a narrow border and driving Baku\'s push for the "Zangezur Corridor."',
      USA: 'Alaska is the largest exclave in the world, separated from the contiguous 48 states by Canada, occupying a crucial Arctic and Pacific defense vantage point.'
    },
    majorActors: ['Russia', 'Azerbaijan', 'United States', 'Angola', 'Oman'],
    historicalBackground: 'Often created by the collapse of empires or arbitrary border demarcations (e.g., Kaliningrad was German East Prussia until annexed by the Soviet Union in 1945).',
    currentRelevance: 'The Suwałki Gap connecting Poland and Lithuania represents NATO\'s most vulnerable corridor, separating Russian-allied Belarus from Russia\'s Kaliningrad exclave.',
    relatedCountries: ['RUS', 'AZE', 'ARM', 'POL', 'LTU', 'USA', 'CAN'],
    relatedEvents: ['1945 Potsdam Conference', '2020 Nagorno-Karabakh Ceasefire Accord'],
    relatedLocations: ['Kaliningrad Oblast', 'Nakhchivan Autonomous Republic', 'Suwałki Gap', 'Musandam Peninsula (Oman)'],
    relatedTerms: ['suwalki-gap', 'buffer-state', 'strategic-depth', 'nato'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Enclave_and_exclave',
    officialSources: [
      { title: 'United Nations Cartographic Section', type: 'un-cartography', url: 'https://www.un.org/geospatial/' }
    ],
    sources: [
      { title: 'Royal Geographical Society Border Studies', type: 'geographical-society', url: 'https://www.rgs.org' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'buffer-state': {
    id: 'buffer-state',
    name: 'Buffer State',
    aliases: ['Buffer State', 'buffer state', 'buffer zone', 'Buffer Zone'],
    category: 'Geographic Concept',
    shortDefinition: 'A country lying geographically between two rival, hostile, or potentially hostile greater powers, whose existence serves to prevent direct territorial contact and mutual military conflict between them.',
    detailedExplanation: 'Buffer states typically pursue strict neutrality or non-alignment to avoid provoking either great power. If one great power attempts to dominate or absorb the buffer state, the rival power often intervenes to prevent encirclement, turning the buffer state into a major flashpoint.',
    whyItMatters: 'Historically preserves systemic peace by separating rival armies, but carries severe risks of being partitioned or turned into a battleground when great-power competition intensifies.',
    contextualFraming: {
      UKR: 'Historically functioned as a strategic buffer between Russia and Western Europe; Russia\'s military aggression was driven in large part by Moscow\'s determination to prevent Ukraine from transitioning from a neutral buffer into a forward NATO bulwark.',
      NPL: 'Nepal and Bhutan function as historic Himalayan buffer states between India and China, balancing diplomatic relations to preserve sovereign independence.',
      MNG: 'Mongolia acts as a vast landlocked buffer state between Russia and China, successfully pursuing a "Third Neighbor" foreign policy engaging the US, Japan, and India.'
    },
    majorActors: ['Russia', 'China', 'India', 'Ukraine', 'Nepal', 'Mongolia'],
    historicalBackground: 'A key mechanism in 19th-century European balance-of-power diplomacy (e.g., Belgium between France and Germany; Afghanistan between the British and Russian empires during the "Great Game").',
    currentRelevance: 'The breakdown of buffer zones in Eastern Europe and the South Caucasus is a primary driver of the current European security crisis.',
    relatedCountries: ['UKR', 'RUS', 'POL', 'NPL', 'BTN', 'MNG', 'CHN', 'IND'],
    relatedEvents: ['1830 Treaty of London (Belgian Neutrality)', '1885-1907 Great Game Boundary Treaties'],
    relatedLocations: ['Himalayan Borderlands', 'Dnieper River Line', 'Durand Line'],
    relatedTerms: ['strategic-depth', 'sphere-of-influence', 'balance-of-power', 'exclave'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Buffer_state',
    officialSources: [
      { title: 'Encyclopaedia Britannica — Buffer State Geopolitical Entry', type: 'encyclopedia', url: 'https://www.britannica.com' }
    ],
    sources: [
      { title: 'Chatham House Russia and Eurasia Programme', type: 'think-tank', url: 'https://www.chathamhouse.org' }
    ],
    claimType: 'HISTORICAL',
    lastVerified: '2026-03'
  },

  'sphere-of-influence': {
    id: 'sphere-of-influence',
    name: 'Sphere of Influence',
    aliases: ['Sphere of Influence', 'sphere of influence', 'exclusive sphere'],
    category: 'Geopolitical Doctrine',
    shortDefinition: 'A geographic region over which a major power claims exclusive or dominant political, economic, or military authority, demanding that other outside powers refrain from interference.',
    detailedExplanation: 'Major powers establish spheres of influence through formal treaties, military alliances, economic dominance, or implicit red lines. While international law upholds sovereign equality, realism in international relations recognizes that great powers consistently demand security prerogatives over their immediate neighborhoods.',
    whyItMatters: 'Clashes occur when one great power expands into what another considers its vital, non-negotiable sphere of influence.',
    contextualFraming: {
      USA: 'Articulated the Monroe Doctrine in 1823, declaring the Western Hemisphere off-limits to external European military and political colonization.',
      RUS: 'Claims a privileged sphere of interest in the "Near Abroad" (former Soviet republics in Eastern Europe, Central Asia, and the Caucasus), fiercely opposing Western integration in Ukraine and Georgia.',
      CHN: 'Seeks to establish a sphere of influence across East and Southeast Asia, pushing to displace US military primacy in the Western Pacific.'
    },
    majorActors: ['United States', 'Russia', 'China'],
    historicalBackground: 'Codified during the 1884–1885 Berlin Conference during the European Scramble for Africa, and reaffirmed at the 1945 Yalta Conference dividing post-WWII Europe.',
    currentRelevance: 'Underlying cause of contemporary conflicts as smaller sovereign nations (Ukraine, Taiwan, Georgia, Philippines) assert their sovereign right to choose alliances against neighboring great powers.',
    relatedCountries: ['USA', 'RUS', 'CHN', 'UKR', 'GEO', 'TWN', 'PHL'],
    relatedEvents: ['1823 Monroe Doctrine', '1945 Yalta Conference', '2008 Russo-Georgian War'],
    relatedLocations: ['Black Sea Littoral', 'South China Sea', 'Caribbean Basin'],
    relatedTerms: ['buffer-state', 'strategic-depth', 'cold-war', 'balance-of-power'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Sphere_of_influence',
    officialSources: [
      { title: 'US National Archives — The Monroe Doctrine (1823)', type: 'historical-document', url: 'https://www.archives.gov' }
    ],
    sources: [
      { title: 'Foreign Affairs — The Return of Spheres of Influence', type: 'academic-journal', url: 'https://www.foreignaffairs.com' }
    ],
    claimType: 'HISTORICAL',
    lastVerified: '2026-03'
  },

  'non-aligned-movement': {
    id: 'non-aligned-movement',
    name: 'Non-Aligned Movement',
    aliases: ['Non-Aligned Movement', 'NAM', 'non-aligned movement', 'Non-Alignment', 'non-alignment'],
    category: 'Historical Diplomatic Strategy',
    shortDefinition: 'A forum of 120 developing nations that chose not to formally align themselves with or against any major superpower power bloc during the Cold War.',
    detailedExplanation: 'Founded on five principles (Panchsheel): mutual respect for territorial integrity, non-aggression, non-interference in internal affairs, equality and mutual benefit, and peaceful co-existence. Its core philosophy was that developing nations should retain sovereign autonomy to judge every international issue on its merits rather than taking orders from Washington or Moscow.',
    whyItMatters: 'Created the foundational diplomatic coalition of the Global South, establishing the normative framework for post-colonial sovereign equality in international diplomacy.',
    contextualFraming: {
      IND: 'India\'s Prime Minister Jawaharlal Nehru was a foremost architect of NAM alongside Josip Broz Tito (Yugoslavia), Gamal Abdel Nasser (Egypt), Sukarno (Indonesia), and Kwame Nkrumah (Ghana). It remains the moral and philosophical root of modern Indian Strategic Autonomy.',
      IDN: 'Hosted the historic 1955 Asian-African Conference in Bandung, which laid the ideological foundation for NAM.'
    },
    majorActors: ['India', 'Egypt', 'Indonesia', 'Yugoslavia', 'Ghana', 'South Africa'],
    historicalBackground: 'Formally inaugurated at the First Summit of Non-Aligned Countries in Belgrade, Yugoslavia, in September 1961.',
    currentRelevance: 'Though less unified after the Cold War, the spirit of NAM has re-emerged powerfully in the "new non-alignment" of developing countries navigating US-China and US-Russia rivalries.',
    relatedCountries: ['IND', 'EGY', 'IDN', 'ZAF', 'BRA', 'YUG'],
    relatedEvents: ['1955 Bandung Conference', '1961 Belgrade Summit'],
    relatedLocations: ['Bandung (Indonesia)', 'Belgrade (Serbia)', 'New Delhi'],
    relatedTerms: ['strategic-autonomy', 'multipolarity', 'cold-war', 'brics'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Non-Aligned_Movement',
    officialSources: [
      { title: 'Non-Aligned Movement (NAM) Center for South-South Cooperation', type: 'official-nam', url: 'https://www.csnam.org' },
      { title: 'Belgrade Declaration (1961) — UN Treaty Collection', type: 'treaty-document', url: 'https://treaties.un.org' }
    ],
    sources: [
      { title: 'Indian Council of World Affairs (ICWA) NAM Archives', type: 'research', url: 'https://www.icwa.in' }
    ],
    claimType: 'HISTORICAL',
    lastVerified: '2026-03'
  },

  'balance-of-power': {
    id: 'balance-of-power',
    name: 'Balance of Power',
    aliases: ['Balance of Power', 'balance of power', 'balance-of-power'],
    category: 'Geopolitical Doctrine',
    shortDefinition: 'A core theory of international relations positing that peace and stability are maintained when military capabilities are distributed among nations such that no single power is strong enough to dominate the others.',
    detailedExplanation: 'When one state grows rapidly in military and economic power and threatens regional hegemony, other nations naturally react by:\n• Internal Balancing: Expanding defense budgets, drafting forces, and innovating domestic military technology.\n• External Balancing: Forming counter-alliances, coalitions, and strategic partnerships to check the rising hegemon.',
    whyItMatters: 'The central theoretical framework explaining why alliances form, why arms races occur, and why great-power rivalries cycle throughout history.',
    contextualFraming: {
      IND: 'India balances rising Chinese assertiveness by modernizing its armed forces, fortifying border infrastructure, and deepening strategic defense alignment with Quad partners (US, Japan, Australia).',
      USA: 'US grand strategy has historically focused on preventing any single hostile power from dominating either the European or Asian landmass.',
      RUS: 'Russia and China deepened their "no limits" partnership to externally balance against what both view as excessive American unipolar hegemony.'
    },
    majorActors: ['United States', 'China', 'Russia', 'India', 'European Union'],
    historicalBackground: 'Formalized in European statecraft through the 1648 Peace of Westphalia, the 1713 Treaty of Utrecht, and the 1815 Congress of Vienna.',
    currentRelevance: 'Underpins the shifting balance in the Indo-Pacific and the realignment of European defense spending post-2022.',
    relatedCountries: ['USA', 'CHN', 'RUS', 'IND', 'GBR', 'FRA'],
    relatedEvents: ['1648 Peace of Westphalia', '1815 Congress of Vienna', '1949 Cold War Bloc Formation'],
    relatedLocations: ['Vienna', 'Westphalia'],
    relatedTerms: ['multipolarity', 'deterrence', 'collective-security', 'superpower', 'cold-war'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Balance_of_power_(international_relations)',
    officialSources: [
      { title: 'Oxford Bibliographies in International Relations — Balance of Power', type: 'academic-reference', url: 'https://www.oxfordbibliographies.com' }
    ],
    sources: [
      { title: 'Realism in International Relations — Kenneth Waltz, "Theory of International Politics"', type: 'foundational-text', url: 'https://www.jstor.org' }
    ],
    claimType: 'HISTORICAL',
    lastVerified: '2026-03'
  },

  's-400': {
    id: 's-400',
    name: 'S-400 Triumf',
    aliases: ['S-400', 'S-400 Triumf', 's-400', 'SA-21 Growler'],
    category: 'Weapons Systems',
    shortDefinition: 'A Russian mobile, surface-to-air missile (SAM) defense system capable of engaging stealth aircraft, cruise missiles, UAVs, and ballistic missiles at ranges up to 400 kilometers (250 miles).',
    detailedExplanation: 'Produced by Almaz-Antey, the S-400 integrates multifunction phased-array radars, autonomous target acquisition and tracking, and mobile transporter-erector-launchers deploying multiple missile types (including the 40N6E for 400 km ultra-long range and 9M96 for agile terminal interception). Can simultaneously track up to 300 targets and engage 36 targets.',
    whyItMatters: 'One of the most potent long-range air defense systems in the world, creating high-threat Anti-Access/Area Denial (A2/AD) bubbles that prevent adversarial air forces from entering contested airspace.',
    contextualFraming: {
      IND: 'India signed a $5.43 billion deal in 2018 for five S-400 regiments (known in Indian service as Sudarshan Chakra), deploying squadrons along the northern (China) and western (Pakistan) borders, resisting US pressure under CAATSA.',
      RUS: 'Serves as Russia\'s premier operational air defense shield, heavily deployed to defend Moscow, Kaliningrad, the Arctic, and Black Sea bases.',
      TUR: 'Turkey\'s purchase of the S-400 caused a deep crisis within NATO, leading Washington to expel Turkey from the 5th-generation F-35 stealth fighter program.'
    },
    majorActors: ['Russia', 'India', 'Turkey', 'China', 'Belarus'],
    historicalBackground: 'Developed as an evolution of the S-300PMU2 series during the 1990s, entering operational service with the Russian Armed Forces in 2007.',
    currentRelevance: 'Operational in the Ukraine conflict and deployed as India\'s primary long-range air defense deterrent along the Himalayas.',
    relatedCountries: ['RUS', 'IND', 'TUR', 'CHN', 'BLR', 'USA'],
    relatedEvents: ['2018 India-Russia S-400 Deal', '2019 Turkey F-35 Expulsion'],
    relatedLocations: ['Almaz-Antey (Moscow)', 'Ladakh Frontline', 'Punjab Border Bases'],
    relatedTerms: ['air-defence', 'caatsa', 'ballistic-missile', 'cruise-missile', 'a2-ad'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/S-400_missile_system',
    officialSources: [
      { title: 'Almaz-Antey Air and Space Defence Corporation', type: 'manufacturer', url: 'https://almaz-antey.ru' },
      { title: 'Indian Air Force Official Portal', type: 'military-official', url: 'https://indianairforce.nic.in' }
    ],
    sources: [
      { title: 'CSIS Missile Threat — S-400 Triumf (SA-21 Growler)', type: 'missile-database', url: 'https://missilethreat.csis.org/defsys/s-400-triumf/' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'cold-war': {
    id: 'cold-war',
    name: 'Cold War',
    aliases: ['Cold War', 'cold war', 'the Cold War'],
    category: 'Historical Era',
    shortDefinition: 'An era of geopolitical, ideological, and economic confrontation between the United States and the Soviet Union (and their respective alliance blocs) lasting from approximately 1947 to 1991.',
    detailedExplanation: 'Termed "cold" because neither superpower engaged in direct, full-scale military conflict with the other due to the threat of mutually assured nuclear destruction. Instead, competition occurred through nuclear arms races, proxy wars, ideological propaganda, espionage, space exploration, and economic warfare.',
    whyItMatters: 'Defined modern world borders, created NATO and the Warsaw Pact, spurred the decolonization era and the Non-Aligned Movement, and created the global nuclear deterrence architecture still in place today.',
    contextualFraming: {
      RUS: 'Contemporary Russian foreign policy is heavily shaped by perceived grievances over the collapse of the Soviet Union in 1991 and subsequent NATO expansion into former Soviet spheres.',
      USA: 'Established Washington\'s network of global military bases, intelligence agencies (CIA), and permanent forward military alliances.',
      IND: 'India refused to become a satellite of either superpower, co-founding the Non-Aligned Movement while maintaining vital economic and defense ties with Moscow under the 1971 Friendship Treaty.'
    },
    majorActors: ['United States', 'Soviet Union', 'NATO', 'Warsaw Pact', 'China'],
    historicalBackground: 'Ignited after World War II over the political fate of post-war Eastern Europe, symbolized by the Berlin Blockade (1948) and Winston Churchill\'s "Iron Curtain" speech.',
    currentRelevance: 'Many strategists describe the emerging US-China rivalry as a "Second Cold War" or "Cold War 2.0."',
    relatedCountries: ['USA', 'RUS', 'CHN', 'DEU', 'CUB', 'VNM', 'KOR'],
    relatedEvents: ['1947 Truman Doctrine', '1962 Cuban Missile Crisis', '1989 Berlin Wall Fall', '1991 Soviet Dissolution'],
    relatedLocations: ['Berlin', 'Checkpoint Charlie', 'Fulda Gap', 'Yalta'],
    relatedTerms: ['soviet-union', 'superpower', 'warsaw-pact', 'nato', 'proxy-war', 'deterrence'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Cold_War',
    officialSources: [
      { title: 'Wilson Center Cold War International History Project (CWIHP)', type: 'historical-archive', url: 'https://www.wilsoncenter.org/program/cold-war-international-history-project' },
      { title: 'US National Archives Cold War Records', type: 'national-archives', url: 'https://www.archives.gov' }
    ],
    sources: [
      { title: 'John Lewis Gaddis, "The Cold War: A New History"', type: 'historical-monograph', url: 'https://www.penguinrandomhouse.com' }
    ],
    claimType: 'HISTORICAL',
    lastVerified: '2026-03'
  },

  'soviet-union': {
    id: 'soviet-union',
    name: 'Soviet Union',
    aliases: ['Soviet Union', 'USSR', 'Union of Soviet Socialist Republics', 'U.S.S.R.'],
    category: 'Historical Era',
    shortDefinition: 'A transcontinental socialist superpower that existed from 1922 until its dissolution on December 26, 1991, spanning 15 constituent republics across Eurasia.',
    detailedExplanation: 'Covering one-sixth of the Earth\'s landmass, the USSR was governed by the Communist Party from Moscow. Led the Allied defeat of Nazi Germany on the Eastern Front in WWII, built the world\'s largest nuclear arsenal, and served as the ideological leader of the global communist bloc.',
    whyItMatters: 'Its collapse in 1991 created 15 independent successor states (including Russia, Ukraine, Belarus, and Central Asian republics), reshaping European and Asian security.',
    contextualFraming: {
      RUS: 'Russia is the legally recognized successor state to the Soviet Union, inheriting its permanent seat on the UN Security Council, nuclear arsenal, and embassies.',
      IND: 'The Soviet Union was India\'s primary defense and diplomatic partner during the Cold War, exercising its UN veto to support India during the 1971 Bangladesh Liberation War and transferring license-production for MiG fighter jets and T-72 tanks.'
    },
    majorActors: ['Russia', 'Ukraine', 'Belarus', 'Kazakhstan', 'Uzbekistan'],
    historicalBackground: 'Founded in December 1922 following the 1917 Bolshevik Revolution and the Russian Civil War under Vladimir Lenin.',
    currentRelevance: 'Unresolved borders, ethnic tensions, and territorial disputes dating to Soviet internal border demarcations remain active conflict drivers in Ukraine, Nagorno-Karabakh, and Central Asia.',
    relatedCountries: ['RUS', 'UKR', 'BLR', 'KAZ', 'UZB', 'GEO', 'AZE', 'ARM'],
    relatedEvents: ['1917 October Revolution', '1922 USSR Formation', '1991 Belovezha Accords'],
    relatedLocations: ['Moscow Kremlin', 'Baikonur Cosmodrome'],
    relatedTerms: ['cold-war', 'warsaw-pact', 'superpower', 'world-war-ii'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Soviet_Union',
    officialSources: [
      { title: 'State Archive of the Russian Federation (GARF)', type: 'state-archive', url: 'http://statearchive.ru' }
    ],
    sources: [
      { title: 'Harvard Cold War Studies Program', type: 'academic-research', url: 'https://coldwar.fas.harvard.edu' }
    ],
    claimType: 'HISTORICAL',
    lastVerified: '2026-03'
  },

  'world-war-ii': {
    id: 'world-war-ii',
    name: 'World War II',
    aliases: ['World War II', 'WWII', 'Second World War', 'World War 2'],
    category: 'Historical Era',
    shortDefinition: 'A global total conflict lasting from 1939 to 1945 involving the vast majority of the world\'s nations (the Allies vs. the Axis powers), resulting in an estimated 70 to 85 million fatalities.',
    detailedExplanation: 'Fought across Europe, the Atlantic, Asia, and the Pacific. Marked by the industrial genocide of the Holocaust, the introduction of atomic warfare, and the complete destruction of traditional European colonial empires.',
    whyItMatters: 'Created the contemporary post-1945 international order: the United Nations, Bretton Woods institutions (IMF, World Bank), the UN Security Council P5 permanent veto structure, and the US-Soviet superpower rivalry.',
    contextualFraming: {
      RUS: 'Commemorated as the Great Patriotic War (1941–1945); the Soviet Union suffered 27 million military and civilian deaths, which forms the emotional foundation of modern Russian national identity.',
      USA: 'Emerged from WWII as the preeminent global superpower, holding half of world industrial output and the atomic monopoly.',
      IND: 'Over 2.5 million Indian soldiers served in the British Indian Army—the largest all-volunteer force in history—fighting across North Africa, Italy, and Burma, which accelerated Britain\'s post-war decision to grant Indian independence in 1947.'
    },
    majorActors: ['United States', 'Soviet Union', 'United Kingdom', 'China', 'Germany', 'Japan'],
    historicalBackground: 'Began in Asia with Japan\'s invasion of China (1937) and in Europe with Nazi Germany\'s invasion of Poland on September 1, 1939.',
    currentRelevance: 'The treaties, border agreements, and multilateral institutions created in 1945 continue to serve as the legal framework governing international relations today.',
    relatedCountries: ['USA', 'RUS', 'GBR', 'CHN', 'DEU', 'JPN', 'IND'],
    relatedEvents: ['1939 Invasion of Poland', '1941 Pearl Harbor Attack', '1945 Yalta Conference', '1945 Hiroshima & Nagasaki'],
    relatedLocations: ['Normandy', 'Stalingrad', 'Hiroshima', 'Pearl Harbor'],
    relatedTerms: ['cold-war', 'superpower', 'united-nations', 'soviet-union'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/World_War_II',
    officialSources: [
      { title: 'The National WWII Museum Digital Archives', type: 'museum-archive', url: 'https://www.nationalww2museum.org' }
    ],
    sources: [
      { title: 'Antony Beevor, "The Second World War"', type: 'historical-work', url: 'https://www.penguinrandomhouse.com' }
    ],
    claimType: 'HISTORICAL',
    lastVerified: '2026-03'
  },

  'superpower': {
    id: 'superpower',
    name: 'Superpower',
    aliases: ['Superpower', 'superpower', 'superpowers', 'global superpower'],
    category: 'Geopolitical Doctrine',
    shortDefinition: 'A sovereign state possessing superior economic, military, technological, and diplomatic power that enables it to exert decisive influence and project power globally.',
    detailedExplanation: 'Distinct from a great power or regional power by virtue of its global reach:\n• Global Force Projection: Ability to deploy carrier strike groups, strategic airlift, and nuclear deterrent forces to any point on Earth within hours.\n• Economic Scale: Hegemony in global finance, reserve currency status, and major domestic market pull.\n• Diplomatic & Cultural Clout: Permanent UN Security Council veto and widespread soft power.',
    whyItMatters: 'Superpowers define the systemic polarity of the international order (unipolar, bipolar, or multipolar), dictating global security rules.',
    contextualFraming: {
      USA: 'Currently the sole complete superpower with unrivaled military global reach, the world\'s primary reserve currency (US Dollar), and alliance networks across Europe and Asia.',
      CHN: 'Considered an emerging superpower, possessing the world\'s largest economy by PPP, the largest navy by hull count, and global infrastructure investments through the Belt and Road.',
      IND: 'India is characterized as a rising great power and leading voice of the Global South, projected to become the world\'s third-largest economy.'
    },
    majorActors: ['United States', 'China', 'European Union', 'India', 'Russia'],
    historicalBackground: 'Coined in 1944 by William T. R. Fox to describe the "Big Three" nations (the United States, the Soviet Union, and the British Empire) capable of global power projection.',
    currentRelevance: 'Transitioning from the post-Cold War "unipolar moment" of American dominance into a contentious bipolar US-China rivalry within an increasingly multipolar world.',
    relatedCountries: ['USA', 'CHN', 'RUS', 'IND', 'GBR'],
    relatedEvents: ['1945 Superpower Era Genesis', '1991 Soviet Collapse Unipolarity'],
    relatedLocations: ['Washington D.C.', 'Beijing'],
    relatedTerms: ['multipolarity', 'balance-of-power', 'cold-war', 'soviet-union'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Superpower',
    officialSources: [
      { title: 'National Intelligence Council — Global Trends Reports', type: 'intelligence-estimate', url: 'https://www.dni.gov/nic' }
    ],
    sources: [
      { title: 'William T. R. Fox, "The Super-Powers"', type: 'foundational-text', url: 'https://www.jstor.org' }
    ],
    claimType: 'ANALYSIS',
    lastVerified: '2026-03'
  },

  'warsaw-pact': {
    id: 'warsaw-pact',
    name: 'Warsaw Pact',
    aliases: ['Warsaw Pact', 'warsaw pact', 'Warsaw Treaty Organization'],
    category: 'Historical Era',
    shortDefinition: 'A collective defense treaty signed in 1955 by the Soviet Union and seven Soviet satellite states in Central and Eastern Europe to counterbalance NATO.',
    detailedExplanation: 'Formed in Warsaw, Poland, on May 14, 1955. Member states included the Soviet Union, Albania, Bulgaria, Czechoslovakia, East Germany, Hungary, Poland, and Romania. While ostensibly a defensive mutual-aid pact, the alliance was centrally commanded from Moscow and was famously deployed internally to crush anti-Soviet uprisings in Hungary (1956) and Czechoslovakia (1968).',
    whyItMatters: 'Solidified the military division of Europe during the Cold War; its dissolution in 1991 preceded the eastward expansion of NATO.',
    contextualFraming: {
      RUS: 'Moscow deeply resents that former Warsaw Pact members (Poland, Hungary, Romania, Czech Republic, Slovakia, Bulgaria) are today full members of NATO.',
      POL: 'Poland was the titular birthplace of the pact, but emerged in the 1980s as the epicenter of anti-communist resistance through the Solidarity movement.'
    },
    majorActors: ['Soviet Union', 'Poland', 'East Germany', 'Czechoslovakia', 'Hungary'],
    historicalBackground: 'Created in direct response to the integration of a re-armed West Germany (Federal Republic of Germany) into NATO in May 1955.',
    currentRelevance: 'Dissolved formally in Prague on July 1, 1991, leaving NATO as the sole surviving Cold War military alliance in Europe.',
    relatedCountries: ['RUS', 'POL', 'DEU', 'CZE', 'SVK', 'HUN', 'ROU', 'BGR'],
    relatedEvents: ['1955 Treaty of Friendship, Cooperation and Mutual Assistance', '1968 Prague Spring Invasion', '1991 Dissolution'],
    relatedLocations: ['Warsaw', 'Prague', 'Moscow'],
    relatedTerms: ['nato', 'cold-war', 'soviet-union', 'collective-security'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Warsaw_Pact',
    officialSources: [
      { title: 'Wilson Center Cold War History Project — Warsaw Pact Records', type: 'historical-archive', url: 'https://www.wilsoncenter.org' }
    ],
    sources: [
      { title: 'Vojtech Mastny, "A Cardboard Castle? An Inside History of the Warsaw Pact"', type: 'historical-monograph', url: 'https://www.ceupress.com' }
    ],
    claimType: 'HISTORICAL',
    lastVerified: '2026-03'
  },

  'strategic-bomber': {
    id: 'strategic-bomber',
    name: 'Strategic Bomber',
    aliases: ['Strategic Bomber', 'strategic bomber', 'strategic bombers', 'long-range bomber'],
    category: 'Weapons Systems',
    shortDefinition: 'A medium-to-long-range heavy combat aircraft designed to fly deep into enemy territory to drop large payloads of nuclear weapons or precision conventional cruise missiles against strategic targets.',
    detailedExplanation: 'The air-breathing leg of the nuclear triad:\n• Recallable Flexibility: Unlike ICBMs or SLBMs (which cannot be recalled once launched), bombers can be scrambled as an unmistakable political signal and ordered to return to base prior to weapons release.\n• Stand-off Cruise Missile Carriers: Modern bombers rarely fly directly over enemy air defense zones; instead, they launch stealthy cruise missiles from hundreds or thousands of kilometers away.\n• Major Operational Types: US B-2 Spirit (stealth flying wing), B-52H Stratofortress, and B-21 Raider; Russian Tu-160 White Swan (supersonic swing-wing), Tu-95MS Bear (turboprop), and Tu-22M3; Chinese H-6N/H-6K.',
    whyItMatters: 'Provides visible, flexible strategic signaling during international crises and the ability to strike time-sensitive conventional targets globally.',
    contextualFraming: {
      RUS: 'Russia operates Tu-160 and Tu-95MS bombers from Engels and Olenya air bases, frequently launching Kh-101 and Kh-555 cruise missiles over the Caspian and Black Seas.',
      USA: 'The US maintains B-2 stealth bombers and B-52s, frequently conducting Bomber Task Force (BTF) missions over the Indo-Pacific, Baltic Sea, and Middle East.',
      IND: 'India relies on multirole strike aircraft (Su-30MKI, Rafale, Mirage 2000) armed with BrahMos and nuclear gravity bombs rather than dedicated heavy strategic bombers.'
    },
    majorActors: ['United States', 'Russia', 'China'],
    historicalBackground: 'Pioneered in World War II with the B-17 Flying Fortress, B-24 Liberator, and the B-29 Superfortress (which dropped the atomic bombs on Japan).',
    currentRelevance: 'The US rollout of the next-generation B-21 Raider stealth bomber and China\'s anticipated H-20 stealth flying-wing bomber.',
    relatedCountries: ['USA', 'RUS', 'CHN'],
    relatedEvents: ['1945 Hiroshima Mission', '1999 Operation Allied Force B-2 Debut'],
    relatedLocations: ['Whiteman AFB (Missouri)', 'Engels-2 Air Base (Russia)', 'Barksdale AFB'],
    relatedTerms: ['nuclear-triad', 'cruise-missile', 'nuclear-deterrence', 'icbm', 'slbm'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Strategic_bomber',
    officialSources: [
      { title: 'US Air Force — B-21 Raider Fact Sheet', type: 'military-factsheet', url: 'https://www.af.mil' }
    ],
    sources: [
      { title: 'Aviation Week & Space Technology Strategic Aircraft Guide', type: 'aviation-journal', url: 'https://aviationweek.com' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'multipolarity': {
    id: 'multipolarity',
    name: 'Multipolarity',
    aliases: ['Multipolarity', 'multipolarity', 'multipolar world', 'Multipolar World Order'],
    category: 'Geopolitical Doctrine',
    shortDefinition: 'An international system in which power, economic weight, and military influence are distributed among three or more significant great powers or regional poles rather than concentrated in one (unipolar) or two (bipolar).',
    detailedExplanation: 'Contrasts with the bipolar Cold War (US vs. USSR) and the post-Cold War unipolar era of undisputed US primacy. In a multipolar system, powers such as the US, China, India, Russia, the European Union, and middle powers in the Global South form shifting, issue-based coalitions without rigid ideological dividing lines.',
    whyItMatters: 'Increases the agency of regional powers, rendering global governance more complex while requiring fluid diplomacy to prevent great-power conflict.',
    contextualFraming: {
      IND: 'India is one of the most ardent champions of a multipolar world order, with External Affairs Minister S. Jaishankar emphasizing that a multipolar world fundamentally requires a "multipolar Asia."',
      RUS: 'Russia advocates multipolarity as the antidote to Western hegemony, using platforms like BRICS and the SCO to foster non-Western power centers.',
      USA: 'Washington emphasizes defending the "rules-based international order" while acknowledging strategic competition with China in an increasingly complex multipolar arena.'
    },
    majorActors: ['India', 'China', 'United States', 'Russia', 'European Union', 'Brazil'],
    historicalBackground: 'Characterized the 19th-century Concert of Europe, popularized in modern diplomacy after the 2008 financial crisis.',
    currentRelevance: 'Accelerated by the expansion of BRICS+, the emergence of the Global South as an independent diplomatic force, and bilateral de-dollarization trade pacts.',
    relatedCountries: ['IND', 'CHN', 'USA', 'RUS', 'BRA', 'ZAF'],
    relatedEvents: ['2008 Financial Crisis', '2024 Kazan BRICS Summit'],
    relatedLocations: ['New Delhi', 'Beijing', 'Moscow', 'Brussels'],
    relatedTerms: ['strategic-autonomy', 'brics', 'balance-of-power', 'superpower'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Polarity_(international_relations)#Multipolarity',
    officialSources: [
      { title: 'Ministry of External Affairs (India) Speeches on Multipolarity', type: 'government-speeches', url: 'https://www.mea.gov.in' }
    ],
    sources: [
      { title: 'S. Jaishankar, "The India Way: Strategies for an Uncertain World"', type: 'diplomatic-treatise', url: 'https://www.harpercollins.co.in' }
    ],
    claimType: 'ANALYSIS',
    lastVerified: '2026-03'
  },

  'territorial-waters': {
    id: 'territorial-waters',
    name: 'Territorial Waters',
    aliases: ['Territorial Waters', 'territorial waters', 'territorial sea', 'Territorial Sea'],
    category: 'Maritime Law & Oceans',
    shortDefinition: 'A belt of coastal waters extending up to 12 nautical miles (22.2 km) from a coastal baseline, regarded as the sovereign territory of the coastal state.',
    detailedExplanation: 'Under UNCLOS Part II, a state\'s sovereignty extends over its territorial sea, the airspace above it, and the seabed and subsoil beneath it. Foreign vessels have the right of "innocent passage" through territorial waters, provided the passage is continuous, expeditious, and not prejudicial to the peace, good order, or security of the coastal state (e.g. no weapons practice, intelligence gathering, or fishing).',
    whyItMatters: 'Marks the sovereign maritime boundary of a state, where unauthorized military entry can legally be treated as a sovereign invasion.',
    contextualFraming: {
      CHN: 'China claims expansive straight baselines around disputed islands, attempting to treat entire gulfs and straits as internal waters.',
      TUR: 'Greece and Turkey maintain a major dispute in the Aegean Sea, where Greece claims the legal right under UNCLOS to expand its territorial waters from 6 to 12 nautical miles, which Turkey declared would be a casus belli (cause for war).'
    },
    majorActors: ['United Nations', 'Coastal Sovereign States'],
    historicalBackground: 'Historically determined by the "cannon-shot rule" (roughly 3 nautical miles), standardized internationally at 12 nautical miles by the 1982 UNCLOS.',
    currentRelevance: 'Strictly monitored in international straits and contested maritime frontiers in the Aegean Sea, Persian Gulf, and South China Sea.',
    relatedCountries: ['TUR', 'GRC', 'CHN', 'PHL', 'USA', 'IND'],
    relatedEvents: ['1982 UNCLOS Codification', '1995 Aegean Casus Belli Declaration'],
    relatedLocations: ['Aegean Sea', 'Strait of Hormuz', 'Malacca Strait'],
    relatedTerms: ['eez', 'freedom-of-navigation', 'strait', 'continental-shelf'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Territorial_waters',
    officialSources: [
      { title: 'UNCLOS Part II: Territorial Sea and Contiguous Zone', type: 'un-treaty', url: 'https://www.un.org/depts/los/convention_agreements/texts/unclos/part2.htm' }
    ],
    sources: [
      { title: 'International Hydrographic Organization (IHO)', type: 'international-organization', url: 'https://iho.int' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'continental-shelf': {
    id: 'continental-shelf',
    name: 'Continental Shelf',
    aliases: ['Continental Shelf', 'continental shelf', 'extended continental shelf'],
    category: 'Maritime Law & Oceans',
    shortDefinition: 'The underwater edge of a continent that extends from the coast beneath the ocean, over which a coastal state exercises sovereign rights to explore and exploit natural mineral and seabed resources.',
    detailedExplanation: 'Under UNCLOS Part VI, every coastal state is entitled to a legal continental shelf extending at least 200 nautical miles. If the physical geological continental margin extends further, states can submit geological seabed mapping to the UN Commission on the Limits of the Continental Shelf (CLCS) to claim an Extended Continental Shelf (ECS) up to 350 nautical miles.',
    whyItMatters: 'Governs billions of barrels of offshore hydrocarbons and rare earth polymetallic nodules on the seabed floor.',
    contextualFraming: {
      RUS: 'Submitted claims to the UN CLCS for 1.7 million square kilometers of the Arctic seabed, including the North Pole and Lomonosov Ridge, to secure vast oil and gas reserves.',
      USA: 'In December 2023, the US unilaterally announced the boundaries of its Extended Continental Shelf covering 1 million km² across the Arctic, Atlantic, and Pacific.'
    },
    majorActors: ['Russia', 'United States', 'Canada', 'Norway', 'India'],
    historicalBackground: 'Triggered in 1945 by the Truman Proclamation on the Continental Shelf, codified into international treaty law at UNCLOS in 1982.',
    currentRelevance: 'The race to claim the Arctic Ocean floor and deep-sea mining exploration in the Central Indian Ocean basin.',
    relatedCountries: ['RUS', 'USA', 'CAN', 'NOR', 'DNK', 'IND'],
    relatedEvents: ['1945 Truman Proclamation', '2007 Russian North Pole Titanium Flag Planting'],
    relatedLocations: ['Lomonosov Ridge', 'Arctic Basin', 'Central Indian Ocean Basin'],
    relatedTerms: ['eez', 'territorial-waters', 'energy-security'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Continental_shelf',
    officialSources: [
      { title: 'UN Commission on the Limits of the Continental Shelf (CLCS)', type: 'un-commission', url: 'https://www.un.org/depts/los/clcs_new/clcs_home.htm' }
    ],
    sources: [
      { title: 'Geological Survey of Denmark and Greenland (GEUS) Arctic Submissions', type: 'geological-survey', url: 'https://www.geus.dk' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'strait': {
    id: 'strait',
    name: 'Strategic Strait',
    aliases: ['Strait', 'strait', 'straits', 'international strait'],
    category: 'Geographic Concept',
    shortDefinition: 'A naturally formed narrow waterway that connects two larger bodies of water and channels significant international maritime traffic.',
    detailedExplanation: 'Under UNCLOS Part III, international straits used for navigation between one part of the high seas/EEZ and another are governed by the regime of "transit passage": ships and aircraft of all nations enjoy the right of unimpeded, non-suspendable navigation for continuous and expeditious transit.',
    whyItMatters: 'Functions as a primary geographic chokepoint. If a strait is blockaded, trade routes and energy shipments must divert thousands of miles, sharply escalating shipping costs and delays.',
    contextualFraming: {
      TUR: 'Controls the Turkish Straits (Bosphorus and Dardanelles) under the 1936 Montreux Convention, regulating the transit of warships into and out of the Black Sea.',
      OMN: 'Oman and Iran control the Strait of Hormuz, the lifeline through which 20% of world crude passes.',
      TWN: 'The Taiwan Strait (160 km wide) separates Taiwan from mainland China, representing the most heavily scrutinized maritime flashpoint in East Asia.'
    },
    majorActors: ['Turkey', 'Oman', 'Iran', 'Singapore', 'Malaysia', 'Taiwan', 'China'],
    historicalBackground: 'Historically contested by maritime powers seeking toll revenues or military choke control (e.g., Danish Sound dues, Dardanelles campaigns).',
    currentRelevance: 'Central to regional conflicts in the Black Sea (Montreux Convention warship restrictions) and the Taiwan Strait.',
    relatedCountries: ['TUR', 'OMN', 'IRN', 'SGP', 'MYS', 'TWN', 'CHN'],
    relatedEvents: ['1936 Montreux Convention', '1915 Gallipoli Campaign'],
    relatedLocations: ['Bosphorus', 'Dardanelles', 'Strait of Hormuz', 'Malacca Strait', 'Taiwan Strait', 'Bab el-Mandeb'],
    relatedTerms: ['chokepoint', 'sloc', 'freedom-of-navigation', 'territorial-waters'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Strait',
    officialSources: [
      { title: 'Montreux Convention Regarding the Regime of the Straits (1936)', type: 'treaty', url: 'https://www.mfa.gov.tr' }
    ],
    sources: [
      { title: 'Encyclopaedia Britannica — Straits of the World', type: 'encyclopedia', url: 'https://www.britannica.com' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'archipelago': {
    id: 'archipelago',
    name: 'Archipelago',
    aliases: ['Archipelago', 'archipelago', 'archipelagic state'],
    category: 'Geographic Concept',
    shortDefinition: 'An extensive group or chain of islands clustered together in an ocean or sea, recognized in international law with special sovereign archipelagic baseline rights.',
    detailedExplanation: 'Under UNCLOS Part IV, qualifying "archipelagic states" (countries made up entirely of islands, such as Indonesia and the Philippines) can draw straight archipelagic baselines joining the outermost points of their outermost islands. Waters enclosed inside these baselines are designated "archipelagic waters," granting the state full sovereignty while providing foreign vessels designated Archipelagic Sea Lanes Passage rights.',
    whyItMatters: 'Controls the transit passages between major oceans (e.g. Indonesia controls the Sunda, Lombok, and Makassar straits linking the Indian and Pacific Oceans).',
    contextualFraming: {
      IDN: 'Indonesia is the world\'s largest archipelagic state (over 17,500 islands), anchoring the maritime crossroads of Southeast Asia.',
      IND: 'While India is a continental nation, its Andaman and Nicobar Islands form an archipelagic barrier at the western entrance to the Strait of Malacca, home to India\'s only operational joint military theater command.'
    },
    majorActors: ['Indonesia', 'Philippines', 'Japan', 'United Kingdom', 'India'],
    historicalBackground: 'The concept of archipelagic state sovereignty was pioneered by Indonesian statesman Mochtar Kusumaatmadja through the 1957 Djuanda Declaration.',
    currentRelevance: 'Indonesia and the Philippines manage archipelagic sea lane designations under international review to ensure smooth global commercial transit.',
    relatedCountries: ['IDN', 'PHL', 'JPN', 'IND'],
    relatedEvents: ['1957 Djuanda Declaration', '1982 UNCLOS Archipelagic Recognition'],
    relatedLocations: ['Lombok Strait', 'Sunda Strait', 'Andaman and Nicobar Islands'],
    relatedTerms: ['strait', 'chokepoint', 'sloc', 'territorial-waters'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Archipelago',
    officialSources: [
      { title: 'UNCLOS Part IV: Archipelagic States', type: 'un-treaty', url: 'https://www.un.org/depts/los/convention_agreements/texts/unclos/part4.htm' }
    ],
    sources: [
      { title: 'International Hydrographic Organization Archipelagic Sea Lanes', type: 'hydrographic', url: 'https://iho.int' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'maritime-corridor': {
    id: 'maritime-corridor',
    name: 'Maritime Corridor',
    aliases: ['Maritime Corridor', 'maritime corridor', 'humanitarian maritime corridor', 'shipping corridor'],
    category: 'Maritime Law & Oceans',
    shortDefinition: 'A designated, internationally monitored maritime route through a war zone, contested sea, or hazardous waters established to ensure the safe passage of commercial shipping, grain, or energy supplies.',
    detailedExplanation: 'Established through diplomatic agreements between warring parties (often brokered by the UN or neutral nations) or established unilaterally by coastal defense forces enforcing de-mining and anti-missile escort protection.',
    whyItMatters: 'Prevents regional armed conflicts from causing worldwide food and energy shortages by keeping merchant ships moving under war risk protocols.',
    contextualFraming: {
      UKR: 'Following the collapse of the UN/Turkish-brokered Black Sea Grain Initiative in 2023, Ukraine unilaterally established a naval corridor along the western Black Sea coast (hugging Romanian and Bulgarian NATO waters) to export millions of tons of grain despite Russian naval threats.',
      YEM: 'The US and UK established Operation Prosperity Guardian in 2023 to protect commercial container ships transiting the southern Red Sea maritime corridor from Houthi attacks.'
    },
    majorActors: ['United Nations', 'Ukraine', 'Turkey', 'Russia', 'United States'],
    historicalBackground: 'Originated during the 1980–1988 Iran-Iraq "Tanker War," where US warships reflagged and escorted Kuwaiti oil tankers through the Persian Gulf (Operation Earnest Will).',
    currentRelevance: 'Crucial in feeding nations across Africa and the Middle East reliant on Ukrainian grain, and maintaining global container shipping through the Red Sea.',
    relatedCountries: ['UKR', 'TUR', 'RUS', 'USA', 'GBR', 'YEM'],
    relatedEvents: ['1987 Operation Earnest Will', '2022 Black Sea Grain Initiative', '2023 Ukrainian Black Sea Corridor'],
    relatedLocations: ['Odesa Port', 'Bosphorus', 'Bab el-Mandeb'],
    relatedTerms: ['sloc', 'chokepoint', 'trade-corridor', 'freedom-of-navigation'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Black_Sea_Grain_Initiative',
    officialSources: [
      { title: 'United Nations Black Sea Grain Initiative Joint Coordination Centre', type: 'un-initiative', url: 'https://www.un.org/en/black-sea-grain-initiative' }
    ],
    sources: [
      { title: 'Lloyd\'s List Intelligence Shipping Risk Assessments', type: 'maritime-data', url: 'https://www.lloydslistintelligence.com' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'asean': {
    id: 'asean',
    name: 'ASEAN',
    aliases: ['ASEAN', 'Association of Southeast Asian Nations', 'asean'],
    category: 'Alliances & Blocs',
    shortDefinition: 'A 10-member regional intergovernmental organization in Southeast Asia promoting economic integration, political cooperation, and security stability among its members.',
    detailedExplanation: 'Composed of Brunei, Cambodia, Indonesia, Laos, Malaysia, Myanmar, the Philippines, Singapore, Thailand, and Vietnam (with Timor-Leste in accession). Operates under the "ASEAN Way": a diplomatic approach founded on non-interference in internal affairs, consensus-based decision making, and quiet diplomacy.',
    whyItMatters: 'Represents 670 million people and the world\'s fifth-largest economy, anchoring regional diplomatic architecture via the East Asia Summit and ASEAN Regional Forum (ARF).',
    contextualFraming: {
      IND: 'India\'s "Act East Policy" places ASEAN at its strategic core. India and ASEAN elevated ties to a Comprehensive Strategic Partnership in 2022.',
      CHN: 'China is ASEAN\'s largest trading partner, but maritime claims in the South China Sea divide ASEAN member states (pitting maritime claimant states against non-claimants).'
    },
    majorActors: ['Indonesia', 'Singapore', 'Vietnam', 'Philippines', 'Malaysia', 'Thailand'],
    historicalBackground: 'Founded on August 8, 1967, with the Bangkok Declaration by five founding nations to prevent the spread of communism and reduce regional border tensions.',
    currentRelevance: 'Negotiating a formal Code of Conduct (COC) for the South China Sea with Beijing while managing internal division over the civil conflict in Myanmar.',
    relatedCountries: ['IDN', 'SGP', 'VNM', 'PHL', 'MYS', 'THA', 'IND', 'CHN'],
    relatedEvents: ['1967 Bangkok Declaration', '1976 Treaty of Amity and Cooperation (TAC)'],
    relatedLocations: ['Jakarta (Secretariat)'],
    relatedTerms: ['indo-pacific', 'freedom-of-navigation', 'eez', 'trade-corridor'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/ASEAN',
    officialSources: [
      { title: 'ASEAN Official Secretariat Portal', type: 'official', url: 'https://asean.org' }
    ],
    sources: [
      { title: 'ISEAS–Yusof Ishak Institute — State of Southeast Asia Reports', type: 'research-institute', url: 'https://www.iseas.edu.sg' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'european-union': {
    id: 'european-union',
    name: 'European Union',
    aliases: ['European Union', 'EU', 'eu'],
    category: 'Alliances & Blocs',
    shortDefinition: 'A political and economic union of 27 member states located primarily in Europe, operating a supranational single market, a common currency (the Euro in 20 states), and standardized regulatory laws.',
    detailedExplanation: 'Features unique supranational institutions: European Commission (executive), European Parliament (directly elected legislature), Council of the EU (member state ministers), and European Court of Justice. Operates the world\'s largest single trade bloc and single currency area.',
    whyItMatters: 'A global regulatory superpower ("The Brussels Effect") setting worldwide standards on environmental policy, data privacy (GDPR), artificial intelligence, and corporate governance.',
    contextualFraming: {
      DEU: 'Germany is the economic powerhouse of the EU, driving fiscal policy and industrial exports alongside France.',
      FRA: 'France provides the EU\'s sole sovereign nuclear deterrent and permanent UN Security Council seat following Brexit.',
      IND: 'The EU is India\'s third-largest trading partner, actively negotiating a comprehensive Free Trade Agreement (FTA), an Investment Protection Agreement, and semiconductor supply partnerships.'
    },
    majorActors: ['Germany', 'France', 'Italy', 'Poland', 'Spain'],
    historicalBackground: 'Evolved from the 1951 European Coal and Steel Community and 1957 Treaty of Rome, formally becoming the European Union with the 1992 Maastricht Treaty.',
    currentRelevance: 'Major institutional transformation post-2022: joint defense procurement funds, common sanctions packages against Russia, and formal candidate status granted to Ukraine and Moldova.',
    relatedCountries: ['DEU', 'FRA', 'ITA', 'POL', 'ESP', 'UKR', 'GBR', 'IND'],
    relatedEvents: ['1957 Treaty of Rome', '1992 Maastricht Treaty', '2016 Brexit Referendum'],
    relatedLocations: ['Brussels (Commission/Council)', 'Strasbourg (Parliament)', 'Frankfurt (ECB)'],
    relatedTerms: ['nato', 'sanctions', 'strategic-autonomy', 'geopolitical-risk'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/European_Union',
    officialSources: [
      { title: 'Official Portal of the European Union', type: 'official', url: 'https://european-union.europa.eu' }
    ],
    sources: [
      { title: 'Centre for European Reform (CER)', type: 'think-tank', url: 'https://www.cer.eu' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'united-nations': {
    id: 'united-nations',
    name: 'United Nations',
    aliases: ['United Nations', 'UN', 'un', 'U.N.'],
    category: 'Alliances & Blocs',
    shortDefinition: 'An intergovernmental organization established in 1945 to maintain international peace and security, foster friendly relations among nations, achieve international cooperation, and serve as a center for harmonizing actions.',
    detailedExplanation: 'Composed of 193 member states. Core organs:\n• General Assembly (UNGA): All members meet with one vote each on non-binding resolutions.\n• Security Council (UNSC): 15 members; 5 permanent members (P5: US, Russia, China, UK, France) with veto power; can issue legally binding resolutions under Chapter VII.\n• International Court of Justice (ICJ): The principal judicial organ based in The Hague.\n• Specialized Agencies: WHO, IAEA, UNESCO, UNHCR, IMO, WFP.',
    whyItMatters: 'The only universal global institution providing legal legitimacy for international treaties, peacekeeping missions, and collective security enforcement.',
    contextualFraming: {
      IND: 'India is a founding member of the UN and the largest historic troop contributor to UN Peacekeeping operations, leading the G4 coalition demanding permanent membership on a reformed UN Security Council.',
      USA: 'Host nation and largest financial contributor to the regular and peacekeeping budgets, utilizing its veto to shield allies.',
      RUS: 'Inherited the Soviet Union\'s permanent P5 seat and veto power in 1991, frequently employing its veto to block Western security resolutions.'
    },
    majorActors: ['United States', 'Russia', 'China', 'United Kingdom', 'France', 'India'],
    historicalBackground: 'Founded on October 24, 1945, in San Francisco to replace the failed League of Nations after World War II.',
    currentRelevance: 'Facing severe calls for institutional reform due to gridlock in the Security Council caused by P5 vetoes during major wars.',
    relatedCountries: ['USA', 'RUS', 'CHN', 'GBR', 'FRA', 'IND'],
    relatedEvents: ['1945 San Francisco Conference', '1948 Universal Declaration of Human Rights'],
    relatedLocations: ['UN Headquarters (New York)', 'Peace Palace (The Hague)', 'Geneva'],
    relatedTerms: ['collective-security', 'eez', 'arms-control', 'sanctions'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/United_Nations',
    officialSources: [
      { title: 'United Nations Official Portal', type: 'official', url: 'https://www.un.org' },
      { title: 'Charter of the United Nations', type: 'treaty', url: 'https://www.un.org/en/about-us/un-charter' }
    ],
    sources: [
      { title: 'Security Council Report — Independent UNSC Analysis', type: 'research', url: 'https://www.securitycouncilreport.org' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'wto': {
    id: 'wto',
    name: 'WTO',
    aliases: ['WTO', 'World Trade Organization', 'wto'],
    category: 'Alliances & Blocs',
    shortDefinition: 'An intergovernmental organization that regulates and facilitates international trade between nations, providing a framework for negotiating trade agreements and resolving trade disputes.',
    detailedExplanation: 'Composed of 164 member states representing over 98% of world trade. Founded on core principles:\n• Most-Favoured-Nation (MFN): Treating all trading partners equally without discrimination.\n• National Treatment: Treating imported goods no less favorably than domestically produced goods.\n• Dispute Settlement Mechanism: An Appellate Body issuing binding legal rulings on trade complaints.',
    whyItMatters: 'Drove the post-WWII explosion of globalization, lowering average worldwide tariffs from over 40% to under 4%.',
    contextualFraming: {
      IND: 'India uses the WTO to defend public food stockholding programs and farmer subsidies, ensuring developing nations retain policy space for food security and public health.',
      USA: 'The US blocked appointments of judges to the WTO Appellate Body since 2019, incapacitating the formal dispute enforcement mechanism due to grievances over Chinese state subsidies.'
    },
    majorActors: ['United States', 'China', 'European Union', 'India'],
    historicalBackground: 'Established on January 1, 1995, under the Marrakesh Agreement, replacing the 1947 General Agreement on Tariffs and Trade (GATT).',
    currentRelevance: 'Weakened by the rise of protectionist industrial policies, green subsidies, and unilateral national security tariffs.',
    relatedCountries: ['USA', 'CHN', 'IND', 'DEU', 'JPN'],
    relatedEvents: ['1947 GATT Adoption', '1994 Marrakesh Agreement', '2001 China WTO Accession'],
    relatedLocations: ['Geneva (Secretariat)'],
    relatedTerms: ['trade-corridor', 'sanctions', 'geopolitical-risk'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/World_Trade_Organization',
    officialSources: [
      { title: 'World Trade Organization Official Portal', type: 'official', url: 'https://www.wto.org' }
    ],
    sources: [
      { title: 'Peterson Institute for International Economics (PIIE) Trade Policy Studies', type: 'think-tank', url: 'https://www.piie.com' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'abraham-accords': {
    id: 'abraham-accords',
    name: 'Abraham Accords',
    aliases: ['Abraham Accords', 'abraham accords'],
    category: 'Alliances & Blocs',
    shortDefinition: 'A series of diplomatic normalization agreements brokered by the United States in late 2020 between Israel and four Arab nations: the UAE, Bahrain, Sudan, and Morocco.',
    detailedExplanation: 'Marked a historic paradigm shift in Middle Eastern diplomacy: normalization of diplomatic, commercial, security, and tourism ties between Israel and Arab states without waiting for a prior resolution of the Israeli-Palestinian conflict. Fostered joint air defense coordination and billions in high-tech trade.',
    whyItMatters: 'Reshaped Middle Eastern geopolitics by aligning Gulf Arab monarchies and Israel against common regional threats (primarily Iran), while enabling inter-regional connectivity projects.',
    contextualFraming: {
      ISR: 'Ended decades of regional diplomatic isolation in the Gulf, enabling direct flights, intelligence sharing, and bilateral defense equipment sales.',
      IND: 'Enabled the creation of the I2U2 Group (India, Israel, UAE, USA) and provided the diplomatic foundation for the planned India-Middle East-Europe Economic Corridor (IMEC).'
    },
    majorActors: ['Israel', 'United Arab Emirates', 'Bahrain', 'Morocco', 'United States'],
    historicalBackground: 'Signed on September 15, 2020, on the South Lawn of the White House.',
    currentRelevance: 'Heavily tested by the Israel-Hamas war and regional tensions, though the core diplomatic ties between Israel, the UAE, and Morocco have endured.',
    relatedCountries: ['ISR', 'ARE', 'BHR', 'MAR', 'USA', 'IND', 'SAU'],
    relatedEvents: ['2020 Abraham Accords Signing', '2022 Negev Summit', '2023 IMEC Announcement'],
    relatedLocations: ['Abu Dhabi', 'Tel Aviv', 'Manama', 'Rabat'],
    relatedTerms: ['trade-corridor', 'gcc', 'energy-security'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Abraham_Accords',
    officialSources: [
      { title: 'US Department of State — The Abraham Accords Declaration', type: 'official-treaty', url: 'https://www.state.gov/the-abraham-accords/' }
    ],
    sources: [
      { title: 'Washington Institute for Near East Policy', type: 'research-institute', url: 'https://www.washingtoninstitute.org' }
    ],
    claimType: 'TREATY',
    lastVerified: '2026-03'
  },

  'paris-agreement': {
    id: 'paris-agreement',
    name: 'Paris Agreement',
    aliases: ['Paris Agreement', 'paris agreement', 'Paris Climate Accord', 'COP21'],
    category: 'Alliances & Blocs',
    shortDefinition: 'A legally binding international treaty on climate change adopted by 196 parties at COP21 in 2015, aiming to hold global temperature increase to well below 2°C above pre-industrial levels.',
    detailedExplanation: 'Requires every nation to submit Nationally Determined Contributions (NDCs) outlining greenhouse gas reduction targets, updated every five years, and establishes the principle of "common but differentiated responsibilities" reflecting different historical emissions.',
    whyItMatters: 'Drives hundreds of billions in global green energy financing, sovereign carbon border taxes (e.g. EU CBAM), and the transition away from fossil fuels.',
    contextualFraming: {
      IND: 'India committed to achieving 50% cumulative electric power installed capacity from non-fossil fuel sources by 2030 and reaching Net Zero by 2070, while demanding climate adaptation financing from Western historical emitters.',
      USA: 'Withdrew under President Trump in 2020 and rejoined under President Biden in 2021, illustrating the political volatility of US international climate commitments.'
    },
    majorActors: ['United Nations', 'European Union', 'United States', 'China', 'India'],
    historicalBackground: 'Adopted on December 12, 2015, in Paris, entering into force on November 4, 2016.',
    currentRelevance: 'Generates trade friction as the EU implements its Carbon Border Adjustment Mechanism (CBAM), imposing tariffs on carbon-intensive imports like steel and aluminum from developing nations.',
    relatedCountries: ['USA', 'CHN', 'IND', 'FRA', 'DEU'],
    relatedEvents: ['2015 COP21 Paris Conference', '2021 COP26 Glasgow Climate Pact'],
    relatedLocations: ['Paris', 'Bonn (UNFCCC HQ)'],
    relatedTerms: ['energy-security', 'trade-corridor', 'united-nations'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Paris_Agreement',
    officialSources: [
      { title: 'United Nations Climate Change (UNFCCC) Paris Agreement Portal', type: 'un-treaty', url: 'https://unfccc.int/process-and-meetings/the-paris-agreement' }
    ],
    sources: [
      { title: 'Intergovernmental Panel on Climate Change (IPCC) Assessment Reports', type: 'scientific-panel', url: 'https://www.ipcc.ch' }
    ],
    claimType: 'TREATY',
    lastVerified: '2026-03'
  },

  'start-treaties': {
    id: 'start-treaties',
    name: 'START Treaties',
    aliases: ['START Treaties', 'START', 'New START', 'New START Treaty', 'Strategic Arms Reduction Treaty'],
    category: 'Military Strategy',
    shortDefinition: 'A series of bilateral strategic arms reduction treaties between the United States and Russia setting verifiable numerical ceilings on deployed intercontinental nuclear warheads and delivery vehicles.',
    detailedExplanation: 'Key iterations:\n• START I (1991): Signed by George H.W. Bush and Mikhail Gorbachev, eliminating roughly 80% of all strategic nuclear weapons.\n• New START (2010): Signed in Prague by Barack Obama and Dmitry Medvedev, capping each nation at 1,550 deployed strategic warheads, 700 deployed ICBMs/SLBMs/bombers, and 800 deployed and non-deployed launchers, backed by 18 annual on-site inspections.',
    whyItMatters: 'The final surviving legal treaty governing the nuclear arsenals of the two superpowers holding 90% of the world\'s nuclear weapons.',
    contextualFraming: {
      RUS: 'President Vladimir Putin suspended Russian participation in New START inspections in February 2023, citing Western involvement in targeting Russian strategic bomber bases in the Ukraine war.',
      USA: 'Urged Russia to resume treaty compliance while insisting that future arms control frameworks must incorporate China\'s rapid nuclear buildup.'
    },
    majorActors: ['United States', 'Russia'],
    historicalBackground: 'Originated in 1982 under President Ronald Reagan as a more ambitious successor to the SALT strategic arms limitation agreements.',
    currentRelevance: 'The treaty expires in February 2026 with no successor agreement in sight, creating the risk of an unconstrained bilateral nuclear arms race for the first time in over 50 years.',
    relatedCountries: ['USA', 'RUS', 'CHN'],
    relatedEvents: ['1991 START I Signing', '2010 New START Prague Signing', '2023 Russian Inspection Suspension'],
    relatedLocations: ['Prague', 'Geneva', 'Moscow', 'Washington D.C.'],
    relatedTerms: ['arms-control', 'nuclear-triad', 'nuclear-deterrence', 'icbm'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/New_START',
    officialSources: [
      { title: 'US Department of State — New START Treaty Official Portal', type: 'government-treaty', url: 'https://www.state.gov/new-start/' },
      { title: 'Ministry of Foreign Affairs of the Russian Federation — Statements on New START', type: 'government-foreign', url: 'https://mid.ru' }
    ],
    sources: [
      { title: 'Arms Control Association — New START at a Glance', type: 'research-journal', url: 'https://www.armscontrol.org' }
    ],
    claimType: 'TREATY',
    lastVerified: '2026-03'
  },

  'hypersonic-weapons': {
    id: 'hypersonic-weapons',
    name: 'Hypersonic Weapons',
    aliases: ['Hypersonic Weapons', 'hypersonic weapons', 'hypersonic missile', 'HGV', 'hypersonic glide vehicle', 'hypersonic cruise missile'],
    category: 'Weapons Systems',
    shortDefinition: 'Maneuvering strike weapons that travel through the upper atmosphere at speeds exceeding Mach 5 (over 1 mile per second / 6,100 km/h) with unpredictable mid-flight course corrections.',
    detailedExplanation: 'Divided into two distinct types:\n• Hypersonic Glide Vehicles (HGVs): Boosted into space atop a rocket before gliding through the upper atmosphere at Mach 10–20, maneuvering unpredictably to avoid radar tracks.\n• Hypersonic Cruise Missiles (HCMs): Powered continuously within the atmosphere by supersonic combustion ramjet (scramjet) engines at Mach 5–8.\nTheir combination of extreme velocity, low altitude, and maneuverability renders traditional surface-to-air ballistic missile defense radars unable to predict intercept trajectories.',
    whyItMatters: 'Compresses military decision-making timelines to minutes and threatens aircraft carriers and hardened command bunkers.',
    contextualFraming: {
      CHN: 'Fields operational HGVs including the DF-17 and ship-launched YJ-21, designed to breach American naval carrier strike group air defense bubbles.',
      RUS: 'Deploys the Avangard intercontinental HGV and the Kinzhal / Zircon scramjet-powered anti-ship cruise missiles.',
      IND: 'Successfully tested indigenous scramjet hypersonic technology demonstrators (HSTDV) through DRDO and develops the BrahMos-II hypersonic missile alongside Russia.'
    },
    majorActors: ['China', 'Russia', 'United States', 'India'],
    historicalBackground: 'Conceptualized in the 1930s (Eugen Sänger\'s Silbervogel), accelerated following the US withdrawal from the ABM Treaty in 2002.',
    currentRelevance: 'A primary focus of AUKUS Pillar II technology development and the US Glide Phase Interceptor (GPI) missile defense program.',
    relatedCountries: ['CHN', 'RUS', 'USA', 'IND'],
    relatedEvents: ['2019 Russian Avangard Operational Fielding', '2020 DRDO HSTDV Flight Test'],
    relatedLocations: ['Jiuquan Satellite Launch Center', 'Kapustin Yar', 'Abdul Kalam Island'],
    relatedTerms: ['ballistic-missile', 'cruise-missile', 'air-defence', 'a2-ad', 'aukus'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Hypersonic_flight#Weaponry',
    officialSources: [
      { title: 'US Congressional Research Service (CRS) Hypersonic Weapons Report', type: 'legislative-report', url: 'https://crsreports.congress.gov' },
      { title: 'DRDO India Hypersonic Technology Demonstrator Vehicle (HSTDV)', type: 'government-defence', url: 'https://www.drdo.gov.in' }
    ],
    sources: [
      { title: 'CSIS Missile Defense Project Hypersonic Tracker', type: 'defence-thinktank', url: 'https://missilethreat.csis.org' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'brahmos': {
    id: 'brahmos',
    name: 'BrahMos',
    aliases: ['BrahMos', 'BrahMos missile', 'brahmos', 'Brahmos Supersonic Cruise Missile'],
    category: 'Weapons Systems',
    shortDefinition: 'The world\'s fastest operational supersonic cruise missile, jointly developed by India\'s DRDO and Russia\'s NPO Mashinostroyeniya, traveling at Mach 2.8 to 3.0.',
    detailedExplanation: 'Named after the Brahmaputra and Moskva rivers. Powered by a two-stage propulsion system (solid propellant rocket booster and liquid ramjet engine). Features fire-and-forget principles with pinpoint terminal accuracy, capable of sea-skimming at 3–4 meters altitude to defeat shipborne radars. Deployable across all four domains: ship, submarine, land-based mobile launcher, and Su-30MKI fighter jets.',
    whyItMatters: 'Provides unprecedented anti-ship and precision land-attack strike capability; extreme kinetic energy at Mach 3 obliterates large naval warships upon impact.',
    contextualFraming: {
      IND: 'The flagship success of India-Russia defense co-development. India also achieved a major defense export milestone in 2022 by selling three shore-based anti-ship BrahMos batteries to the Philippines for $375 million.',
      RUS: 'NPO Mashinostroyeniya provided the ramjet engine technology based on the P-800 Oniks, receiving royalties while co-developing the system in a New Delhi joint venture.'
    },
    majorActors: ['India', 'Russia', 'Philippines'],
    historicalBackground: 'Established via an intergovernmental agreement on February 12, 1998, with the first test flight in June 2001.',
    currentRelevance: 'Operational deliveries to the Philippine Marine Corps along the South China Sea, and ongoing development of the BrahMos-NG (Next Generation) lightweight version.',
    relatedCountries: ['IND', 'RUS', 'PHL', 'VNM'],
    relatedEvents: ['1998 Intergovernmental JV Agreement', '2022 Philippines Export Contract', '2024 Philippines Delivery'],
    relatedLocations: ['BrahMos Complex (Hyderabad & Lucknow)', 'Subic Bay (Philippines)'],
    relatedTerms: ['cruise-missile', 'air-defence', 's-400', 'a2-ad'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/BrahMos',
    officialSources: [
      { title: 'BrahMos Aerospace Official Portal', type: 'manufacturer', url: 'https://www.brahmos.com' },
      { title: 'DRDO India — BrahMos Missile Weapon System', type: 'government-defence', url: 'https://www.drdo.gov.in' }
    ],
    sources: [
      { title: 'Jane\'s Defence Weapons Systems', type: 'defence-specialist', url: 'https://www.janes.com' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'first-island-chain': {
    id: 'first-island-chain',
    name: 'First Island Chain',
    aliases: ['First Island Chain', 'first island chain', 'island chains'],
    category: 'Geographic Concept',
    shortDefinition: 'A strategic Pacific maritime perimeter formed by the Kuril Islands, the Japanese archipelago, the Ryukyu Islands, Taiwan, the northern Philippines, and Borneo.',
    detailedExplanation: 'Conceived in Cold War US naval strategy to contain Soviet and Chinese maritime expansion into the open Pacific Ocean. For China, breaking through this chain is considered an existential requirement to secure access for its submarine fleet and commercial container vessels into the wider Pacific.',
    whyItMatters: 'The primary geographic battleground of the US-China strategic competition, with Taiwan situated directly at its geographic center.',
    contextualFraming: {
      CHN: 'China has developed extensive A2/AD anti-ship ballistic missiles (DF-21D, DF-26) specifically designed to push US aircraft carriers beyond the First Island Chain.',
      TWN: 'Taiwan is described as the "unsinkable aircraft carrier" anchored in the center of the chain; if Taiwan falls under Beijing\'s control, China can project naval power unhindered into the central Pacific.',
      JPN: 'Japan has heavily fortified its southwestern Nansei (Ryukyu) islands with anti-ship missile batteries and radar stations to guard the Miyako Strait.'
    },
    majorActors: ['China', 'United States', 'Japan', 'Taiwan', 'Philippines'],
    historicalBackground: 'Articulated by US Secretary of State John Foster Dulles in 1951 during the Korean War.',
    currentRelevance: 'The US Marine Corps created Marine Littoral Regiments specifically trained to operate armed mobile missile outposts along the First Island Chain during a Taiwan contingency.',
    relatedCountries: ['CHN', 'USA', 'JPN', 'TWN', 'PHL'],
    relatedEvents: ['1951 Dulles Strategic Formulation', 'Taiwan Strait Crises'],
    relatedLocations: ['Miyako Strait', 'Bashi Channel', 'Okinawa', 'Senkaku/Diaoyu Islands'],
    relatedTerms: ['malacca-dilemma', 'a2-ad', 'indo-pacific', 'freedom-of-navigation'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/First_island_chain',
    officialSources: [
      { title: 'US Department of Defense Annual China Military Power Report', type: 'government-report', url: 'https://www.defense.gov' }
    ],
    sources: [
      { title: 'US Naval Institute Proceedings — Island Chain Strategy', type: 'naval-journal', url: 'https://www.usni.org' }
    ],
    claimType: 'ANALYSIS',
    lastVerified: '2026-03'
  },

  'malacca-dilemma': {
    id: 'malacca-dilemma',
    name: 'Malacca Dilemma',
    aliases: ['Malacca Dilemma', 'malacca dilemma', 'Strait of Malacca dilemma'],
    category: 'Geopolitical Doctrine',
    shortDefinition: 'China\'s strategic vulnerability stemming from its extreme reliance on the narrow, foreign-controlled Strait of Malacca, through which over 80% of its imported oil must pass.',
    detailedExplanation: 'Coined in November 2003 by Chinese President Hu Jintao. Because the Strait of Malacca is narrow (1.5 nautical miles at its tightest choke) and bordered by nations friendly to the US (Singapore, Malaysia, Indonesia), a hostile naval blockade during a conflict over Taiwan could cut off China\'s oil and industrial raw materials within weeks.',
    whyItMatters: 'The driving strategic motivation behind China\'s Belt and Road Initiative (BRI), the China-Pakistan Economic Corridor (CPEC to Gwadar), and pipeline routes bypassing the ocean entirely.',
    contextualFraming: {
      CHN: 'Built deep-water oil and gas pipelines across Myanmar (Kyaukpyu to Kunming), expanded overland energy pipelines from Russia, and developed the China-Pakistan Economic Corridor (CPEC) to Gwadar to circumvent the strait.',
      IND: 'The Indian Navy\'s Andaman and Nicobar Command (ANC) sits directly astride the Six Degree Channel and the western approaches to the Malacca Strait, giving New Delhi potential maritime interdiction leverage.',
      SGP: 'Singapore hosts the US Navy\'s Changi Naval Base, capable of docking US supercarriers right at the mouth of the strait.'
    },
    majorActors: ['China', 'India', 'United States', 'Singapore', 'Malaysia', 'Indonesia'],
    historicalBackground: 'Articulated by Chinese leadership in 2003 following post-9/11 US naval interdiction operations.',
    currentRelevance: 'Shapes Chinese naval carrier deployments into the Indian Ocean and drives Beijing\'s push for Arctic Northern Sea Route alternatives.',
    relatedCountries: ['CHN', 'IND', 'USA', 'SGP', 'MYS', 'IDN', 'MMR', 'PAK'],
    relatedEvents: ['2003 Hu Jintao Malacca Speech', '2015 CPEC Launch'],
    relatedLocations: ['Strait of Malacca', 'Andaman and Nicobar Islands', 'Gwadar Port', 'Kyaukpyu Port'],
    relatedTerms: ['chokepoint', 'sloc', 'first-island-chain', 'trade-corridor', 'energy-security'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Malacca_Dilemma',
    officialSources: [
      { title: 'Chinese Ministry of Foreign Affairs Statements on Maritime Connectivity', type: 'government-foreign', url: 'https://www.mfa.gov.cn' }
    ],
    sources: [
      { title: 'Brookings Institution — The Malacca Dilemma and Chinese Naval Strategy', type: 'think-tank', url: 'https://www.brookings.edu' }
    ],
    claimType: 'ANALYSIS',
    lastVerified: '2026-03'
  },

  'a2-ad': {
    id: 'a2-ad',
    name: 'Anti-Access / Area Denial',
    aliases: ['A2/AD', 'a2/ad', 'A2-AD', 'Anti-Access/Area Denial', 'anti-access/area denial'],
    category: 'Military Strategy',
    shortDefinition: 'A military operational doctrine aimed at preventing an adversary from entering a contested operational theater (Anti-Access) and limiting their freedom of action once inside (Area Denial).',
    detailedExplanation: 'Constructed through overlapping layers of defensive and offensive weaponry:\n• Anti-Access (A2): Long-range ballistic anti-ship missiles (DF-21D, DF-26), long-range bombers, and attack submarines designed to keep enemy carrier strike groups hundreds of miles away.\n• Area Denial (AD): Multi-tier air defense systems (S-400), coastal anti-ship cruise missiles (BrahMos, Bastion-P), dense minefields, and electronic warfare jamming umbrellas.',
    whyItMatters: 'Undermines traditional US expeditionary power projection doctrine, which relies on steaming carrier battle groups close to adversary shores.',
    contextualFraming: {
      CHN: 'Pioneered an immense A2/AD network along its coastline and fortified South China Sea outposts, designed to prevent US Navy intervention during a Taiwan invasion.',
      RUS: 'Created dense A2/AD "bubbles" in Kaliningrad, Crimea, and the Kola Peninsula to deny NATO air and naval superiority in the Baltic and Black Seas.',
      IND: 'The Indian Navy and Air Force deploy BrahMos supersonic coastal missile batteries and Su-30MKI strike wings to create an A2/AD envelope across the northern Indian Ocean.'
    },
    majorActors: ['China', 'Russia', 'United States', 'Iran', 'India'],
    historicalBackground: 'Coined by US military analysts in the late 1990s following the 1996 Third Taiwan Strait Crisis, where the US sailed two carrier strike groups through the Taiwan Strait with impunity.',
    currentRelevance: 'Forced the US military to develop new counter-doctrines such as "Air-Sea Battle" and distributed maritime operations across small Pacific islands.',
    relatedCountries: ['CHN', 'RUS', 'USA', 'IRN', 'IND', 'TWN'],
    relatedEvents: ['1996 Taiwan Strait Crisis', 'Kaliningrad Missile Militarization'],
    relatedLocations: ['Mischief Reef Outpost', 'Kaliningrad Oblast', 'Kola Peninsula'],
    relatedTerms: ['air-defence', 'ballistic-missile', 'cruise-missile', 'first-island-chain', 'grey-zone'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Anti-access/area_denial',
    officialSources: [
      { title: 'US Department of Defense — Joint Operational Access Concept (JOAC)', type: 'military-doctrine', url: 'https://www.defense.gov' }
    ],
    sources: [
      { title: 'Center for Strategic and Budgetary Assessments (CSBA) — A2/AD Studies', type: 'defence-thinktank', url: 'https://csbaonline.org' }
    ],
    claimType: 'ANALYSIS',
    lastVerified: '2026-03'
  },

  'petrodollar': {
    id: 'petrodollar',
    name: 'Petrodollar System',
    aliases: ['Petrodollar System', 'petrodollar', 'Petrodollar', 'petrodollars'],
    category: 'Economic Statecraft',
    shortDefinition: 'The global economic framework under which international crude oil transactions are priced and settled exclusively in United States dollars (USD), generating constant global demand for American currency.',
    detailedExplanation: 'Established in the mid-1970s between the US and Saudi Arabia. In exchange for US security guarantees and modern weapons systems, Saudi Arabia agreed to price all oil exports in US dollars and invest excess surplus revenues back into US Treasury securities. Other OPEC nations followed, creating perpetual artificial demand for dollars among all energy-importing nations worldwide.',
    whyItMatters: 'Allows the United States to run large structural budget and trade deficits with low borrowing costs, while giving Washington immense leverage to enforce global financial sanctions.',
    contextualFraming: {
      SAU: 'Historically anchored the system, but has recently opened doors to accepting payments for crude in Chinese Yuan, Euros, and local currencies.',
      IND: 'India has pushed for de-dollarization in bilateral energy trade, settling oil imports from Russia in Indian Rupees, UAE Dirhams, and other non-USD currencies.',
      RUS: 'Following its exclusion from SWIFT and dollar clearing in 2022, Russia banned dollar settlement for its pipeline natural gas exports to Europe and converted its bilateral trade with China and India to national currencies.'
    },
    majorActors: ['United States', 'Saudi Arabia', 'Russia', 'China', 'India'],
    historicalBackground: 'Negotiated by US Secretary of State Henry Kissinger and the Saudi royal family between 1973 and 1975 following the collapse of the gold-backed Bretton Woods system.',
    currentRelevance: 'Under increasing structural pressure from BRICS+ expansion and central bank digital currencies (mBridge) seeking cross-border settlement without US dollar clearing.',
    relatedCountries: ['USA', 'SAU', 'RUS', 'CHN', 'IND'],
    relatedEvents: ['1971 Nixon Shock (Gold Decoupling)', '1974 US-Saudi Joint Commission on Economic Cooperation'],
    relatedLocations: ['Riyadh', 'US Treasury (Washington)'],
    relatedTerms: ['energy-security', 'opec-plus', 'sanctions', 'brics', 'multipolarity'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Petrodollar_recycling',
    officialSources: [
      { title: 'Federal Reserve Bank of New York — Global Reserve Currencies', type: 'central-bank', url: 'https://www.newyorkfed.org' }
    ],
    sources: [
      { title: 'Carnegie Endowment — The Future of the Petrodollar and US Financial Power', type: 'think-tank', url: 'https://carnegieendowment.org' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'imf': {
    id: 'imf',
    name: 'IMF',
    aliases: ['IMF', 'International Monetary Fund', 'imf'],
    category: 'Economic Statecraft',
    shortDefinition: 'A major international financial institution of 190 member countries working to foster global monetary cooperation, secure financial stability, facilitate international trade, and provide emergency loans to countries facing balance-of-payments crises.',
    detailedExplanation: 'Provides emergency bailout loans conditional on structural economic adjustment programs (fiscal austerity, currency devaluation, privatization). Member voting power is weighted by financial quota shares rather than one-country-one-vote, giving the US an effective veto over major institutional reforms.',
    whyItMatters: 'Functions as the lender of last resort for sovereign nations on the verge of sovereign debt default.',
    contextualFraming: {
      PAK: 'Pakistan has entered over 24 separate IMF bailout programs to avert sovereign debt defaults caused by fiscal deficits and depleted foreign exchange reserves.',
      LKA: 'Sri Lanka received an IMF bailout package in 2023 following its 2022 sovereign debt default and economic collapse, with India providing $4 billion in bilateral credit lines to facilitate the agreement.'
    },
    majorActors: ['United States', 'European Union', 'China', 'India', 'Japan'],
    historicalBackground: 'Conceived in July 1944 at the Bretton Woods Conference alongside the World Bank to prevent competitive currency devaluations like those that caused the Great Depression.',
    currentRelevance: 'Developing nations frequently criticize IMF structural adjustment conditions as overly harsh, leading developing economies to seek alternative development financing from China and the BRICS New Development Bank.',
    relatedCountries: ['USA', 'PAK', 'LKA', 'IND', 'CHN'],
    relatedEvents: ['1944 Bretton Woods Conference', '1997 Asian Financial Crisis', '2022 Sri Lankan Default'],
    relatedLocations: ['Washington D.C. (IMF HQ)'],
    relatedTerms: ['brics', 'wto', 'geopolitical-risk', 'sanctions'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/International_Monetary_Fund',
    officialSources: [
      { title: 'International Monetary Fund Official Portal', type: 'official', url: 'https://www.imf.org' }
    ],
    sources: [
      { title: 'Bretton Woods Project — Critical IMF Monitoring', type: 'ngo-watchdog', url: 'https://www.brettonwoodsproject.org' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  },

  'suwalki-gap': {
    id: 'suwalki-gap',
    name: 'Suwałki Gap',
    aliases: ['Suwałki Gap', 'Suwalki Gap', 'suwalki gap', 'Suwalki corridor'],
    category: 'Geographic Concept',
    shortDefinition: 'A narrow, 65-kilometer-wide land corridor along the Poland-Lithuania border sandwiched between the heavily militarized Russian exclave of Kaliningrad to the northwest and Russian-allied Belarus to the southeast.',
    detailedExplanation: 'Named after the Polish town of Suwałki. Represents NATO\'s most vulnerable land chokepoint: it is the sole overland road and rail corridor connecting Poland and Central Europe with the three Baltic NATO republics (Lithuania, Latvia, and Estonia). In a conflict, a Russian-Belarusian pincers offensive could close the gap in hours, cutting off the Baltic states from overland NATO reinforcement.',
    whyItMatters: 'Frequently termed "the most dangerous place on Earth" or NATO\'s Achilles\' heel, where a localized military clash could directly trigger NATO Article 5 and World War III.',
    contextualFraming: {
      POL: 'Poland maintains dedicated mechanized brigades and rapid-reaction units near Suwałki, fortifying border defenses under the "Eastern Shield" project.',
      RUS: 'Connecting Kaliningrad to Belarus through the Suwałki Gap would eliminate the strategic isolation of its Baltic exclave.',
      LTU: 'Lithuania hosts a permanent German Army armored brigade (Brigade 45) deployed specifically to deter incursions across the gap.'
    },
    majorActors: ['Poland', 'Lithuania', 'Russia', 'Belarus', 'NATO', 'Germany'],
    historicalBackground: 'Became an acute strategic flashpoint following the 2004 accession of Poland and the Baltic States into NATO.',
    currentRelevance: 'The stationing of Russian tactical nuclear weapons in Belarus and Wagner forces in 2023 heightened border security alerts and fence construction along the corridor.',
    relatedCountries: ['POL', 'LTU', 'RUS', 'BLR', 'DEU', 'LVA', 'EST'],
    relatedEvents: ['2004 Baltic NATO Accession', '2024 Polish Eastern Shield Border Fortification'],
    relatedLocations: ['Suwałki', 'Kaliningrad Oblast', 'Grodno (Belarus)'],
    relatedTerms: ['exclave', 'nato', 'strategic-depth', 'buffer-state'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Suwa%C5%82ki_Gap',
    officialSources: [
      { title: 'NATO Enhanced Forward Presence Battlegroups Factsheet', type: 'official-alliance', url: 'https://www.nato.int' },
      { title: 'Polish Ministry of National Defence — Shield East Program', type: 'government-defence', url: 'https://www.gov.pl/web/national-defence' }
    ],
    sources: [
      { title: 'Center for European Policy Analysis (CEPA) — Securing the Suwałki Corridor', type: 'think-tank', url: 'https://cepa.org' }
    ],
    claimType: 'VERIFIED',
    lastVerified: '2026-03'
  }
};

// Quick lookup helper by ID, alias, or normalized string
export function getGeopoliticalTerm(identifier) {
  if (!identifier) return null;
  const raw = String(identifier).trim();
  
  // Direct ID check
  if (GEOPOLITICAL_TERMS[raw]) return GEOPOLITICAL_TERMS[raw];

  // Hyphenated lower-case check
  const kebab = raw.toLowerCase().replace(/[\s_]+/g, '-');
  if (GEOPOLITICAL_TERMS[kebab]) return GEOPOLITICAL_TERMS[kebab];

  // Underscored upper-case check
  const under = raw.toUpperCase().replace(/[\s\-]+/g, '_');
  for (const term of Object.values(GEOPOLITICAL_TERMS)) {
    if (term.id.toUpperCase().replace(/[\s\-]+/g, '_') === under) return term;
  }

  // Name or Alias case-insensitive check
  const lower = raw.toLowerCase();
  for (const term of Object.values(GEOPOLITICAL_TERMS)) {
    if (term.name.toLowerCase() === lower) return term;
    if (term.aliases && term.aliases.some(a => a.toLowerCase() === lower)) return term;
  }

  return null;
}

// Search helper for search modal & command palette
export function searchGeopoliticalTerms(query = '', limit = 6) {
  if (!query || typeof query !== 'string') return [];
  const q = query.trim().toLowerCase();
  if (!q) return Object.values(GEOPOLITICAL_TERMS).slice(0, limit);

  return Object.values(GEOPOLITICAL_TERMS)
    .filter(term => {
      if (term.name.toLowerCase().includes(q)) return true;
      if (term.shortDefinition.toLowerCase().includes(q)) return true;
      if (term.category.toLowerCase().includes(q)) return true;
      if (term.aliases && term.aliases.some(a => a.toLowerCase().includes(q))) return true;
      return false;
    })
    .slice(0, limit);
}
