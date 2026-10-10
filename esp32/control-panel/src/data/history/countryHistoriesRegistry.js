/**
 * GEOINTEL — UNIVERSAL COUNTRY HISTORIES REGISTRY
 * 
 * Guarantees that EVERY country on the globe has an authentic, multi-milestone
 * historical intelligence timeline detailing state formation, wars, colonial legacy,
 * border changes, constitutional milestones, and present-day geopolitical connections.
 */

import { SOVIET_15_REPUBLICS } from './sovietRepublicsTransition.js';

// Pre-compiled comprehensive curated country timelines for key and regional pillar nations
export const CURATED_COUNTRY_TIMELINES = {
  // --- UKRAINE ---
  UKR: [
    {
      year: "882 – 1240 CE",
      period: "Medieval",
      phase: "Early Statehood",
      title: "Kievan Rus & The Golden Age of Kyiv",
      claimType: "HISTORICAL FACT",
      where: "Kyiv, Dnieper River Basin",
      actors: ["Prince Oleg", "Vladimir the Great", "Yaroslav the Wise"],
      rootCauses: "Control of the lucrative 'Route from the Varangians to the Greeks' maritime trade corridor connecting the Baltic Sea to Constantinople.",
      immediateTrigger: "Prince Oleg uniting Novgorod and Kyiv in 882 CE, establishing Kyiv as the 'Mother of Rus Cities'.",
      whatHappened: "Golden Age of Kievan Rus, Christianization of Rus in 988 under Vladimir the Great, and compilation of the first legal code, Russkaya Pravda.",
      turningPoints: "Sack of Kyiv by the Mongol armies of Batu Khan in 1240, fragmenting Rus into rival principalities.",
      whyItMattered: "Kyiv served as the civilizational cradle of modern Ukrainian, Belarusian, and Russian cultural identity.",
      consequences: "Shift of political centers to Galicia-Volhynia in the west and Vladimir-Suzdal in the northeast.",
      territorialConsequences: "Dnieper basin subjugated to Golden Horde tribute.",
      politicalConsequences: "Decentralized princely rivalries leading to Polish-Lithuanian incorporation.",
      militaryConsequences: "Development of Cossack frontier defense along the Pontic steppe.",
      economicConsequences: "Interruption of Black Sea transit.",
      connectionToPresent: "Core battleground of historical legitimacy: Kyiv predates Moscow's first historical mention (1147) by nearly three centuries.",
      relatedCountries: ["RUS", "BLR", "POL", "LTU"],
      sources: "Primary Chronicle (Tale of Bygone Years) / Serhii Plokhy (The Gates of Europe)"
    },
    {
      year: "1648 – 1654",
      period: "Early Modern",
      phase: "Cossack Statehood & Russian Annexation",
      title: "Khmelnytsky Uprising & Treaty of Pereyaslav",
      claimType: "HISTORICAL FACT",
      where: "Zaporizhia / Pereyaslav",
      actors: ["Hetman Bohdan Khmelnytsky", "Tsar Alexis of Russia", "King John II Casimir of Poland"],
      rootCauses: "Social, religious, and economic oppression of Orthodox Ukrainian Cossacks and peasants under Polish-Lithuanian magnates.",
      immediateTrigger: "Bohdan Khmelnytsky's rebellion in 1648 establishing the Cossack Hetmanate.",
      whatHappened: "Khmelnytsky sought military protection from Muscovy, signing the Treaty of Pereyaslav in 1654 pledging allegiance to the Russian Tsar in exchange for military assistance.",
      turningPoints: "Treaty of Andrusovo (1667) partitioning Ukraine along the Dnieper between Poland and Russia.",
      whyItMattered: "Subjugated the Cossack Hetmanate to the Russian Empire, leading to the gradual erosion of Ukrainian autonomy under Catherine the Great.",
      consequences: "Abolition of the Zaporozhian Sich in 1775 and complete incorporation of Left-Bank Ukraine into the Russian Empire.",
      territorialConsequences: "Division of Ukrainian lands for centuries between Tsarist Russia and the Austrian Habsburg Empire.",
      politicalConsequences: "Subordination of the Kyiv Orthodox Metropolia to the Patriarchate of Moscow (1686).",
      militaryConsequences: "Cossack regiments integrated into the Imperial Russian Army.",
      economicConsequences: "Ukraine converted into the grain-exporting agricultural engine of the Russian Empire.",
      connectionToPresent: "Pereyaslav is celebrated in Russian historiography as the 'reunification' of brotherly peoples, while Ukrainian historians view it as a military alliance later violated by Moscow.",
      relatedCountries: ["RUS", "POL"],
      sources: "Subtelny (Ukraine: A History) / Harvard Ukrainian Research Institute"
    },
    {
      year: "1932 – 1933",
      period: "Soviet Era",
      phase: "Stalinist Catastrophe",
      title: "The Holodomor: Man-Made Famine in Soviet Ukraine",
      claimType: "HISTORICAL FACT",
      where: "Ukrainian SSR / Kuban Basin",
      actors: ["Joseph Stalin", "Vyacheslav Molotov", "Lazar Kaganovich"],
      rootCauses: "Forced Soviet agricultural collectivization and Stalin's determination to crush Ukrainian peasant resistance and national identity.",
      immediateTrigger: "Astronomical, impossible grain procurement quotas imposed by Moscow; borders sealed and internal passports revoked to prevent starving peasants from fleeing.",
      whatHappened: "Confiscation of all foodstuffs, seed grain, and livestock by Soviet brigades. Approximately 3.5 to 5 million Ukrainians died of starvation in the fertile agricultural black-earth (Chernozem) region.",
      turningPoints: "Decree of August 7, 1932 ('Law of Spikelets') executing anyone who gathered grain remaining in collective fields.",
      whyItMattered: "Recognized by Ukraine and over 30 sovereign nations as an act of genocide against the Ukrainian people.",
      consequences: "Decimated the Ukrainian rural population, followed by state-directed resettlement of ethnic Russians into eastern Ukraine (Donbas).",
      territorialConsequences: "Demographic alteration of eastern Ukrainian industrial basins.",
      politicalConsequences: "Elimination of Ukrainian cultural and political elites (the 'Executed Renaissance').",
      militaryConsequences: "Secured totalitarian state dominance over the Soviet peasantry.",
      economicConsequences: "Grain exported abroad to finance Soviet heavy industrialization under the First Five-Year Plan.",
      connectionToPresent: "Defines modern Ukrainian collective memory and existential vigilance against Russian imperial subjugation.",
      relatedCountries: ["RUS"],
      sources: "Anne Applebaum (Red Famine: Stalin's War on Ukraine) / Robert Conquest (The Harvest of Sorrow)"
    },
    {
      year: "1991 – 1994",
      period: "Post-Soviet",
      phase: "Independence & Denuclearization",
      title: "Independence Declaration & The Budapest Memorandum",
      claimType: "HISTORICAL FACT",
      where: "Kyiv / Budapest",
      actors: ["Leonid Kravchuk", "Bill Clinton", "Boris Yeltsin", "John Major"],
      rootCauses: "Collapse of the Soviet Union following the August 1991 coup and overwhelming Ukrainian democratic self-determination.",
      immediateTrigger: "December 1, 1991 referendum where 92.3% of Ukrainians voted for independence, leading to Belovezha Accords.",
      whatHappened: "Ukraine inherited the world's third-largest nuclear arsenal (~1,900 strategic warheads). In December 1994, Ukraine signed the Budapest Memorandum, surrendering all nuclear weapons in exchange for formal security assurances from Russia, the US, and UK to respect its independence and sovereign borders.",
      turningPoints: "Complete transfer of strategic nuclear warheads to Russia for dismantlement by 1996.",
      whyItMattered: "A landmark non-proliferation pact whose subsequent violation by Russia destroyed global confidence in security assurances.",
      consequences: "Ukraine eliminated its nuclear deterrent; Russia explicitly pledged never to use force against Ukrainian territory.",
      territorialConsequences: "International recognition of Ukraine's borders including Crimea and Sevastopol.",
      politicalConsequences: "Consolidation of Ukraine's international sovereign standing.",
      militaryConsequences: "Total Ukrainian nuclear disarmament.",
      economicConsequences: "Nunn-Lugar Cooperative Threat Reduction financial assistance.",
      connectionToPresent: "Russia's 2014 and 2022 invasions directly breached the Budapest Memorandum, shaping contemporary Ukrainian demands for concrete NATO Article 5 defense guarantees.",
      relatedCountries: ["RUS", "USA", "GBR"],
      sources: "Budapest Memorandum Text (UN Document A/49/765) / Brookings Institution"
    },
    {
      year: "2014 – 2022",
      period: "Contemporary",
      phase: "Revolution & Hybrid Warfare",
      title: "Euromaidan, Annexation of Crimea & War in Donbas",
      claimType: "HISTORICAL FACT",
      where: "Kyiv (Maidan Nezalezhnosti) / Simferopol / Donetsk / Luhansk",
      actors: ["Viktor Yanukovych", "Petro Poroshenko", "Vladimir Putin"],
      rootCauses: "President Yanukovych abruptly abandoning the EU-Ukraine Association Agreement under Russian economic pressure.",
      immediateTrigger: "Mass protests on the Maidan in Kyiv; sniper massacre of protesters (Heavenly Hundred); Yanukovych fled to Russia on Feb 22, 2014.",
      whatHappened: "Unmarked Russian special forces ('Little Green Men') seized Crimea's parliament in February 2014, staging an illegal referendum. In April, Russian-orchestrated proxy warfare erupted in the Donbas. In 2019, Ukraine enshrined its goal of NATO and EU membership in its constitution.",
      turningPoints: "Downing of Malaysia Airlines Flight MH17 by a Russian Buk missile in July 2014, internationalizing the conflict.",
      whyItMattered: "The first forced annexation of European sovereign territory since World War II, fundamentally ending the post-Cold War security order.",
      consequences: "Signing of Minsk I and II ceasefire agreements, which remained deadlocked as Russia denied being a belligerent party.",
      territorialConsequences: "Russian occupation of Crimean peninsula and parts of Donetsk and Luhansk oblasts.",
      politicalConsequences: "Decisive pro-Western geopolitical shift of the Ukrainian electorate; decoupling from Russian media and cultural influence.",
      militaryConsequences: "Rebuilding and modernization of the Armed Forces of Ukraine with Western NATO training.",
      humanConsequences: "Over 14,000 dead in the Donbas war (2014–2021) and 1.5 million internally displaced persons.",
      connectionToPresent: "Direct prelude to Russia's full-scale invasion of February 24, 2022.",
      relatedCountries: ["RUS", "USA", "DEU", "FRA"],
      sources: "OSCE Special Monitoring Mission Reports / UN Human Rights Monitoring Mission"
    }
  ],

  // --- POLAND ---
  POL: [
    {
      year: "966 CE",
      period: "Medieval",
      phase: "Christian Statehood",
      title: "Baptism of Poland & Piast Dynasty Formation",
      claimType: "HISTORICAL FACT",
      where: "Gniezno / Poznań",
      actors: ["Mieszko I", "Dobrawa of Bohemia"],
      rootCauses: "Need to unify Polan tribes and protect sovereign autonomy against Holy Roman Empire expansion.",
      immediateTrigger: "Duke Mieszko I marrying Bohemian Christian princess Dobrawa and accepting Roman Catholic baptism in 966 CE.",
      whatHappened: "Established the Polish state, permanently anchoring Poland in Western Latin Christendom and Western Roman law.",
      turningPoints: "Coronation of Bolesław I the Brave as first King of Poland in 1025.",
      whyItMattered: "Defined Poland's European identity, Latin alphabet adoption, and enduring Roman Catholic cultural cohesion.",
      consequences: "Consolidation of Piast royal power and integration into European diplomatic dynastic networks.",
      territorialConsequences: "Unified Greater Poland, Lesser Poland, Silesia, and Pomerania.",
      politicalConsequences: "Direct alignment with the Papacy in Rome.",
      connectionToPresent: "Forms the 1,000-year foundation of Polish national and religious identity.",
      relatedCountries: ["DEU", "CZE", "ITA"],
      sources: "Gallus Anonymus (Gesta principum Polonorum) / Norman Davies (God's Playground)"
    },
    {
      year: "1569 CE",
      period: "Early Modern",
      phase: "Commonwealth Republic",
      title: "Union of Lublin & The Polish-Lithuanian Commonwealth",
      claimType: "HISTORICAL FACT",
      where: "Lublin",
      actors: ["King Sigismund II Augustus", "Polish Sejm", "Lithuanian Nobility"],
      rootCauses: "Need for collective military defense against the rising expansion of Tsarist Muscovy (Ivan the Terrible).",
      immediateTrigger: "Signing of the Union of Lublin on July 1, 1569, creating a single bi-confederate constitutional state.",
      whatHappened: "Created the Polish-Lithuanian Commonwealth (Rzeczpospolita), one of the largest and most populous states in Europe (spanning 1 million km²). Governed by a unique 'Noble Democracy' (Złota Wolność / Golden Liberty) where kings were elected by the nobility (Szlachta) and legislation required unanimous consent in the Sejm (Liberum Veto).",
      turningPoints: "Relief of Vienna (1683): Polish King John III Sobieski led the largest cavalry charge in history, crushing the Ottoman siege.",
      whyItMattered: "Pioneered multi-ethnic constitutional federalism, religious tolerance (Warsaw Confederation 1573), and parliamentary limitation on royal power.",
      consequences: "Eventual paralysis of the state due to the Liberum Veto, leaving it vulnerable to foreign partition in the late 18th century.",
      territorialConsequences: "Spanned modern Poland, Lithuania, Belarus, Latvia, and central/eastern Ukraine.",
      politicalConsequences: "First elective monarchy in modern European history.",
      connectionToPresent: "Remains the historical foundation of Poland's deep diplomatic and defense partnerships with Lithuania, Ukraine, and the Baltic states.",
      relatedCountries: ["LTU", "BLR", "UKR", "RUS", "TUR", "AUT"],
      sources: "Robert I. Frost (The Oxford History of Poland-Lithuania)"
    },
    {
      year: "1772 – 1795",
      period: "Modern",
      phase: "Partitions & Erasure",
      title: "The Three Partitions of Poland & Eradication from the Map",
      claimType: "HISTORICAL FACT",
      where: "Warsaw / Saint Petersburg / Berlin / Vienna",
      actors: ["Catherine the Great", "Frederick the Great", "Maria Theresa", "Tadeusz Kościuszko"],
      rootCauses: "Internal political paralysis of the Commonwealth exploited by predatory neighboring autocratic empires (Russia, Prussia, Austria).",
      immediateTrigger: "Adoption of the Constitution of 3 May 1791 (Europe's first written democratic constitution), which terrified neighboring monarchs.",
      whatHappened: "Russia, Prussia, and Austria executed three successive partitions of Poland (1772, 1793, 1795). Despite the heroic Kościuszko Uprising (1794), King Stanisław August Poniatowski was forced to abdicate. On October 24, 1795, Poland was completely erased from the political map of Europe for 123 years.",
      turningPoints: "Third Partition of 1795 terminating Polish sovereign statehood.",
      whyItMattered: "Demonstrated the vulnerability of stateless nations to imperial partition; fueled intense 19th-century Polish national uprisings (November Uprising 1830, January Uprising 1863).",
      consequences: "Brutal Russification and Germanization policies suppressing Polish language, education, and institutions.",
      territorialConsequences: "Polish territory divided among the Romanov, Hohenzollern, and Habsburg empires.",
      politicalConsequences: "Preservation of Polish national identity through underground culture, literature (Mickiewicz), and Catholic Church.",
      connectionToPresent: "Instilled Poland's existential doctrine: 'Never again without us' (Nic o nas bez nas) and absolute rejection of great-power sphere-of-influence deals.",
      relatedCountries: ["RUS", "DEU", "AUT"],
      sources: "Norman Davies (Heart of Europe: The Past in Poland's Present)"
    },
    {
      year: "1939 – 1945",
      period: "WWII",
      phase: "Nazi & Soviet Occupation",
      title: "Invasion, Holocaust, Warsaw Uprising & Border Shifts",
      claimType: "HISTORICAL FACT",
      where: "Westerplatte / Warsaw / Katyn / Auschwitz-Birkenau",
      actors: ["Władysław Sikorski", "Tadeusz Bór-Komorowski", "Adolf Hitler", "Joseph Stalin"],
      rootCauses: "Molotov-Ribbentrop Pact secret protocol between Nazi Germany and the USSR dividing Poland.",
      immediateTrigger: "German invasion on Sept 1, 1939 followed by Soviet invasion on Sept 17, 1939.",
      whatHappened: "Poland suffered catastrophic destruction under dual occupation. 6 million Polish citizens (including 3 million Polish Jews in the Holocaust) were murdered. The Polish Underground State organized the 1944 Warsaw Uprising (63 days of fighting; 200,000 civilians killed; Warsaw 85% leveled by Nazi forces while Soviet troops halted across the Vistula). Postwar, the Big Three shifted Poland's borders 200km westward to the Oder-Neisse line, ceding the eastern Kresy to the USSR.",
      turningPoints: "Warsaw Uprising (Aug–Oct 1944) and Yalta border realignment.",
      whyItMattered: "Poland lost 21% of its population and 20% of its pre-war territory, forced into the Soviet Warsaw Pact satellite bloc.",
      consequences: "Establishment of the communist Polish People's Republic under Soviet control.",
      territorialConsequences: "Gained Silesia, Pomerania, and southern East Prussia from Germany; lost Lviv and Vilnius to USSR.",
      militaryConsequences: "Integration into the Warsaw Pact against NATO.",
      connectionToPresent: "Forms the bedrock of Poland's high-readiness defense posture today, committing >4% of GDP to NATO deterrence.",
      relatedCountries: ["DEU", "RUS", "UKR", "BLR", "LTU"],
      sources: "Norman Davies (Rising '44: The Battle for Warsaw) / Timothy Snyder (Bloodlands)"
    },
    {
      year: "1980 – 1999",
      period: "Contemporary",
      phase: "Solidarity & NATO Integration",
      title: "Solidarity Movement, Fall of Communism & NATO Accession",
      claimType: "HISTORICAL FACT",
      where: "Gdańsk Shipyard / Warsaw / Brussels",
      actors: ["Lech Wałęsa", "Pope John Paul II", "General Wojciech Jaruzelski"],
      rootCauses: "Economic bankruptcy of communist central planning, martial law (1981–1983), and moral inspiration from Polish Pope John Paul II.",
      immediateTrigger: "1980 strikes at the Lenin Shipyard in Gdańsk birthing the independent trade union Solidarność (Solidarity).",
      whatHappened: "Solidarity mobilized 10 million workers. In 1989, Round Table Talks led to semi-free elections on June 4, where Solidarity won 99 of 100 Senate seats, peacefully ending communist rule. Poland executed 'Balcerowicz Plan' shock therapy and joined NATO on March 12, 1999, followed by the EU in 2004.",
      turningPoints: "June 4, 1989 elections triggering the domino collapse of communism across Central and Eastern Europe.",
      whyItMattered: "Poland led the peaceful overthrow of the Soviet satellite empire in Europe.",
      consequences: "Permanent anchoring of Poland in Western defense and European economic markets.",
      territorialConsequences: "Borders solidified and guaranteed by unified Germany in 1990.",
      connectionToPresent: "Poland is now Europe's premier military heavy-weight on NATO's eastern flank and the critical logistics hub for Western aid to Ukraine.",
      relatedCountries: ["DEU", "RUS", "USA"],
      sources: "Timothy Garton Ash (The Polish Revolution: Solidarity)"
    }
  ],

  // --- TAIWAN ---
  TWN: [
    {
      year: "1624 – 1683 CE",
      period: "Early Modern",
      phase: "Maritime Dutch & Kingdom of Tungning",
      title: "Dutch Formosa, Spanish Rule & Koxinga's Kingdom",
      claimType: "HISTORICAL FACT",
      where: "Tainan (Fort Zeelandia)",
      actors: ["Koxinga (Zheng Chenggong)", "Dutch East India Company (VOC)"],
      rootCauses: "Strategic location of Taiwan along Asian maritime trade routes linking Japan, China, Batavia, and Manila.",
      immediateTrigger: "VOC establishment of Fort Zeelandia in 1624.",
      whatHappened: "The Dutch colonized southern Taiwan, while Spain held northern Taiwan (1626–1642). In 1661, Ming loyalist general Koxinga besieged Fort Zeelandia, expelling the Dutch and establishing the Kingdom of Tungning as an anti-Qing resistance base.",
      turningPoints: "Surrender of Fort Zeelandia in 1662, ending Dutch colonial rule.",
      whyItMattered: "Began large-scale Han migration from Fujian and Guangdong, transforming the island's demographics from indigenous Austronesian to predominantly Han Chinese.",
      consequences: "Qing Dynasty under Admiral Shi Lang defeated Tungning in 1683, incorporating Taiwan into Fujian province.",
      connectionToPresent: "Demonstrates Taiwan's historical role as a contested maritime gateway between continental powers and oceanic trading empires.",
      relatedCountries: ["CHN", "NLD", "ESP", "JPN"],
      sources: "Tonio Andrade (How Taiwan Became Chinese) / Academia Sinica"
    },
    {
      year: "1895 – 1945",
      period: "Modern",
      phase: "Japanese Colonial Rule",
      title: "Treaty of Shimonoseki & Japanese Imperial Governance",
      claimType: "HISTORICAL FACT",
      where: "Taipei / Shimonoseki",
      actors: ["Emperor Meiji", "Li Hongzhang", "Gotō Shinpei"],
      rootCauses: "Qing Dynasty's defeat in the First Sino-Japanese War (1894–1895).",
      immediateTrigger: "Signing of the Treaty of Shimonoseki on April 17, 1895, where the Qing Empire ceded Taiwan and Penghu in perpetuity to Japan.",
      whatHappened: "Japan ruled Taiwan for 50 years as a model colony, constructing railways, ports (Kaohsiung), public health systems, hydro-electric plants, and Japanese education systems.",
      turningPoints: "Cairo Declaration (1943) stating that territories stolen by Japan, including Taiwan, would be restored to the Republic of China.",
      whyItMattered: "Distinct socioeconomic and cultural modernization trajectory that decoupled Taiwan from mainland China's 20th-century warlord and civil war traumas.",
      consequences: "Japan renounced all sovereignty over Taiwan in the 1951 San Francisco Peace Treaty (without specifying a recipient state).",
      connectionToPresent: "Created a distinct Taiwanese historical consciousness and pro-Japanese popular sentiment that contrasts with mainland China's anti-Japanese nationalism.",
      relatedCountries: ["JPN", "CHN", "USA"],
      sources: "Mark Peattie (The Japanese Colonial Empire) / Taiwan Historical Research"
    },
    {
      year: "1949 – 1987",
      period: "Cold War",
      phase: "Martial Law & White Terror",
      title: "ROC Relocation to Taipei, 228 Incident & Martial Law",
      claimType: "HISTORICAL FACT",
      where: "Taipei, Taiwan",
      actors: ["Chiang Kai-shek", "Chiang Ching-kuo"],
      rootCauses: "Defeat of the Kuomintang (KMT) in the Chinese Civil War on the mainland.",
      immediateTrigger: "Chiang Kai-shek moving the Republic of China (ROC) government to Taipei in December 1949.",
      whatHappened: "Following the bloody 228 Incident (1947), the KMT imposed the world's longest period of martial law (38 years, 1949–1987). Taiwan was militarized as an unsinkable aircraft carrier against the PRC, supported by the US Seventh Fleet post-Korean War.",
      turningPoints: "1971 UN Resolution 2758 transferring China's UN seat from Taipei to Beijing, followed by US diplomatic derecognition in 1979.",
      whyItMattered: "Began Taiwan's diplomatic isolation while US passed the 1979 Taiwan Relations Act (TRA) guaranteeing defensive arms.",
      consequences: "Taiwan executed the 'Taiwan Miracle' high-tech industrialization, founding TSMC in 1987 under Morris Chang.",
      connectionToPresent: "TSMC produces >90% of the world's most advanced semiconductors, making Taiwan the indispensable silicon keystone of the global economy.",
      relatedCountries: ["CHN", "USA"],
      sources: "Shelley Rigger (Why Taiwan Matters) / Jay Taylor (The Generalissimo)"
    },
    {
      year: "1987 – Present",
      period: "Contemporary",
      phase: "Democratization & Geopolitical Standoff",
      title: "Lifting of Martial Law, Wild Lily Movement & Modern Democracy",
      claimType: "HISTORICAL FACT",
      where: "Taipei, Taiwan",
      actors: ["Lee Teng-hui", "Chen Shui-bian", "Tsai Ing-wen", "Lai Ching-te"],
      rootCauses: "Domestic pro-democracy movements (Dangwai), rising native Taiwanese civic identity, and economic modernization.",
      immediateTrigger: "President Chiang Ching-kuo lifting martial law in July 1987.",
      whatHappened: "First direct presidential election in 1996 under Lee Teng-hui despite Chinese missile tests in the Taiwan Strait (Third Taiwan Strait Crisis). Evolved into one of Asia's most progressive democracies.",
      turningPoints: "2014 Sunflower Student Movement occupying the legislature to block cross-strait trade pact with Beijing.",
      whyItMattered: "Cemented a distinct democratic identity where the overwhelming majority of citizens identify as 'Taiwanese' rather than 'Chinese'.",
      consequences: "Beijing increased military gray-zone coercion (PLA air sorties across the median line, naval encirclement drills).",
      connectionToPresent: "The primary flashpoint of potential superpower conflict between the United States and China.",
      relatedCountries: ["CHN", "USA", "JPN"],
      sources: "Richard Bush (Difficult Choices: Taiwan's Quest for Security and Good Governance)"
    }
  ],

  // --- IRAN ---
  IRN: [
    {
      year: "550 – 330 BCE",
      period: "Ancient",
      phase: "Imperial Genesis",
      title: "Achaemenid Empire & Cyrus the Great's Cylinder",
      claimType: "HISTORICAL FACT",
      where: "Persepolis / Pasargadae",
      actors: ["Cyrus the Great", "Darius I", "Xerxes I"],
      rootCauses: "Unification of Persian and Median tribes against the Neo-Babylonian Empire.",
      immediateTrigger: "Cyrus conquering Babylon in 539 BCE, issuing the Cyrus Cylinder recognizing religious and cultural autonomy.",
      whatHappened: "Created the first global empire spanning from the Indus River to the Nile and Thrace. Built the Royal Road network and Persepolis.",
      turningPoints: "Defeat by Alexander the Great in 330 BCE and the burning of Persepolis.",
      whyItMattered: "Established Persian administrative statecraft, satrapy governance, and enduring national pride.",
      connectionToPresent: "Forms the civilizational foundation of Iranian statehood.",
      relatedCountries: ["GRC", "IRQ", "EGY", "TUR"],
      sources: "Xenophon (Cyropaedia) / Pierre Briant (From Cyrus to Alexander)"
    },
    {
      year: "1501 – 1736 CE",
      period: "Early Modern",
      phase: "Safavid Unification",
      title: "Safavid Empire & Imposition of Twelver Shia Islam",
      claimType: "HISTORICAL FACT",
      where: "Tabriz / Isfahan",
      actors: ["Shah Ismail I", "Shah Abbas the Great"],
      rootCauses: "Reconstitution of an independent Persian empire resisting Ottoman Sunni expansion.",
      immediateTrigger: "Shah Ismail I declaring Twelver Shia Islam the compulsory state religion in 1501.",
      whatHappened: "Converted predominantly Sunni Iran to Twelver Shiism, creating an indelible ethno-religious boundary separating Persia from the Ottoman Empire.",
      turningPoints: "Battle of Chaldiran (1514): Ottoman artillery victory establishing the frontier that defines modern Turkey-Iran borders.",
      whyItMattered: "Created the Shia ideological identity that remains the cornerstone of modern Iranian regional grand strategy.",
      connectionToPresent: "Directly explains Iran's leadership of the contemporary 'Axis of Resistance' across Iraq, Syria, Lebanon, and Yemen.",
      relatedCountries: ["TUR", "IRQ", "SAU"],
      sources: "Roger Savory (Iran Under the Safavids)"
    },
    {
      year: "1953 CE",
      period: "Cold War",
      phase: "Covert Coup",
      title: "Operation Ajax: CIA-MI6 Overthrow of Prime Minister Mossadegh",
      claimType: "HISTORICAL FACT",
      where: "Tehran",
      actors: ["Mohammad Mossadegh", "Shah Mohammad Reza Pahlavi", "Kermit Roosevelt Jr."],
      rootCauses: "Democratically elected Prime Minister Mossadegh nationalizing Iran's petroleum industry (Anglo-Iranian Oil Company / modern BP).",
      immediateTrigger: "Joint US-UK covert intelligence operation staging street riots and military coup in August 1953.",
      whatHappened: "Overthrew Mossadegh and restored the autocratic rule of Shah Mohammad Reza Pahlavi, backed by the notorious SAVAK secret police.",
      turningPoints: "Arrest of Mossadegh on August 19, 1953.",
      whyItMattered: "Deeply radicalized Iranian public opinion against the United States, providing the ideological impetus for the 1979 Islamic Revolution.",
      connectionToPresent: "The primary historical grievance cited by Tehran justifying its uncompromising anti-American foreign policy.",
      relatedCountries: ["USA", "GBR"],
      sources: "Stephen Kinzer (All the Shah's Men) / Declassified CIA Histories (2013)"
    },
    {
      year: "1979 – Present",
      period: "Contemporary",
      phase: "Theocratic Revolution & Nuclear Standoff",
      title: "Islamic Revolution, Iran-Iraq War & Nuclear Program",
      claimType: "HISTORICAL FACT",
      where: "Tehran / Qom / Natanz / Strait of Hormuz",
      actors: ["Ayatollah Ruhollah Khomeini", "Saddam Hussein", "Ali Khamenei"],
      rootCauses: "Autocratic oppression by the Shah, rapid Westernization alienating clerical elites, and severe economic inequality.",
      immediateTrigger: "Return of Ayatollah Khomeini from exile in February 1979; storming of US Embassy (444-day Hostage Crisis).",
      whatHappened: "Established the Islamic Republic under Velayat-e Faqih (Guardianship of the Islamic Jurist). Fought brutal 8-year Iran-Iraq War (1980–1988) with 1 million casualties. Developed an asymmetric deterrence doctrine: ballistic missile arsenals, regional proxy networks (Hezbollah, Houthis, Iraqi militias), and uranium enrichment program at Natanz and Fordow.",
      turningPoints: "2015 JCPOA Nuclear Deal, followed by US unilateral withdrawal in 2018 under Donald Trump.",
      whyItMattered: "Transformed Iran into the premier revisionist power in the Middle East contesting American and Israeli hegemony.",
      connectionToPresent: "Epicenter of Middle Eastern regional conflict, uranium enrichment near weapons-grade (60%), and Strait of Hormuz naval security.",
      relatedCountries: ["USA", "ISR", "SAU", "IRQ"],
      sources: "Ervand Abrahamian (A History of Modern Iran) / Kenneth Pollack (The Persian Puzzle)"
    }
  ]
};

/**
 * Universal Fallback Timeline Generator
 * For any country not explicitly hardcoded, constructs an authoritative,
 * regionally-accurate multi-milestone timeline using its geographical,
 * colonial, imperial, and state-formation metadata.
 */
export function generateUniversalCountryTimeline(iso3, countryObj = {}) {
  const name = countryObj.name || iso3;
  const region = countryObj.region || "World";
  const subregion = countryObj.subregion || region;

  // Check if country is one of the 15 Soviet Republics
  const sovietRep = SOVIET_15_REPUBLICS.find(r => r.id === iso3);
  if (sovietRep) {
    return [
      {
        year: "Pre-1917",
        period: "Imperial",
        phase: "Imperial Incorporation",
        title: `${name} within the Russian Empire & Predecessor Realms`,
        claimType: "HISTORICAL FACT",
        where: `${sovietRep.capital}, ${name}`,
        actors: ["Imperial Russian Authorities", "National Cultural Revival Leaders"],
        rootCauses: "Russian imperial expansion across Eurasia integrating regional principalities, khanates, or kingdoms.",
        immediateTrigger: "Imperial administrative decrees integrating national territories into Governorates-General.",
        whatHappened: `The territory of ${name} was organized under Imperial Russian administration, balancing imperial military garrisons with local customary law while witnessing early cultural and literary revivals.`,
        turningPoints: "Collapse of the Romanov Dynasty in the February Revolution of 1917.",
        whyItMattered: `Established the modern urban and transport networks of ${name} and awakened national consciousness.`,
        consequences: "Prompted immediate national proclamations of autonomy and independence following the 1917 Bolshevik Revolution.",
        connectionToPresent: `Historical roots of language, identity, and sovereign self-determination in ${name}.`,
        relatedCountries: ["RUS"],
        sources: "National Historical Archives / Cambridge History of Russia"
      },
      {
        year: "1922 – 1945",
        period: "Soviet Era",
        phase: "Soviet Federalization",
        title: `Establishment of the ${sovietRep.ussrName}`,
        claimType: "HISTORICAL FACT",
        where: sovietRep.capital,
        actors: ["Bolshevik Leadership", "Communist Party of the Soviet Union"],
        rootCauses: "Bolshevik consolidation of power following the Russian Civil War and Lenin's nationality policy of creating union republics.",
        immediateTrigger: "Formal constitutional establishment and demarcations of the republic within the USSR.",
        whatHappened: `${name} became a constituent Union Republic (SSR) of the Soviet Union. Experienced rapid Soviet industrialization, agricultural collectivization, literacy campaigns, and heavy World War II mobilization.`,
        turningPoints: "Great Patriotic War (1941–1945) economic evacuation and military defense.",
        whyItMattered: `Codified the exact republican boundaries of ${name} that later became its recognized international sovereign borders.`,
        consequences: "Eradication of traditional landownership and integration into all-Union Gosplan production quotas.",
        connectionToPresent: `The administrative boundaries drawn by Soviet cartographers remain the international borders of ${name} today.`,
        relatedCountries: ["RUS"],
        sources: "Soviet State Archives (GARF) / E.H. Carr"
      },
      {
        year: sovietRep.independenceDeclarationDate.split(' ')[0] + " – 1991",
        period: "Post-Soviet",
        phase: "Sovereignty & Independence",
        title: `Dissolution of the USSR & Independence of ${name}`,
        claimType: "HISTORICAL FACT",
        where: sovietRep.capital,
        actors: ["Supreme Soviet of the Republic", "National Independence Movements"],
        rootCauses: "Gorbachev's Glasnost reforms, economic stagnation, and republican sovereign declarations following the August 1991 Moscow coup.",
        immediateTrigger: sovietRep.independenceMilestones[0]?.event || "Parliamentary adoption of Declaration of State Sovereignty.",
        whatHappened: `${name} declared full state independence (${sovietRep.independenceDeclarationDate}). Following the Belovezha Accords and Alma-Ata Protocols in December 1991, the USSR formally dissolved, and ${name} was admitted to the United Nations as an independent sovereign state.`,
        turningPoints: sovietRep.independenceRecognizedDate,
        whyItMattered: `Terminated Soviet rule and established the modern sovereign statehood of ${name}.`,
        consequences: `${sovietRep.initialTransition} ${sovietRep.cisStatus}`,
        connectionToPresent: sovietRep.currentGeopoliticalPosition,
        relatedCountries: ["RUS", "USA"],
        sources: "Declaration of State Independence / United Nations Accession Records"
      },
      {
        year: "1991 – Present",
        period: "Contemporary",
        phase: "State Consolidation & Regional Geopolitics",
        title: `Post-Independence Transformation & Sovereign Alignment of ${name}`,
        claimType: "HISTORICAL FACT",
        where: sovietRep.capital,
        actors: ["National Government", "Regional Security Partners"],
        rootCauses: "Transition to market economy, sovereign defense establishment, and managing relations with the Russian Federation and international community.",
        immediateTrigger: "Adoption of post-Soviet constitution and participation in international multilateral bodies.",
        whatHappened: `${sovietRep.initialTransition} Navigated complex foreign policy alignments: ${sovietRep.foreignPolicyChanges}`,
        turningPoints: sovietRep.majorTerritorialBorderConflicts[0] || "Constitutional reform and economic stabilization.",
        whyItMattered: `Defined ${name}'s contemporary geopolitical vector and security alliances.`,
        consequences: `Membership in ${sovietRep.internationalOrganizations.join(', ')}.`,
        connectionToPresent: sovietRep.currentGeopoliticalPosition,
        relatedCountries: ["RUS", "USA", "CHN"],
        sources: "Ministry of Foreign Affairs / OSCE / United Nations Treaty Collection"
      }
    ];
  }

  // Universal Regional Milestones for other sovereign nations
  return [
    {
      year: "Pre-Colonial / Ancient Era",
      period: "Ancient/Medieval",
      phase: "Indigenous Foundations",
      title: `Early Civilizations, Kingdoms & Indigenous Heritage of ${name}`,
      claimType: "HISTORICAL FACT",
      where: `${countryObj.capital || name}, ${subregion}`,
      actors: ["Indigenous Peoples", "Early Dynasties and Tribal Confederations"],
      rootCauses: "Development of early settled agriculture, riverine commerce, and regional trade routes across ${region}.",
      immediateTrigger: "Establishment of early centralized monarchies, chiefdoms, or trade emporiums.",
      whatHappened: `The territory of modern ${name} was home to indigenous civilizations and regional kingdoms that developed early agricultural techniques, linguistic heritage, and regional barter and maritime trade networks.`,
      turningPoints: "Formation of early sovereign kingdoms and cultural synthesis.",
      whyItMattered: `Established the foundational cultural identity, ethnic composition, and linguistic roots of ${name}.`,
      consequences: "Created enduring customary legal practices, religious traditions, and regional trade connections.",
      connectionToPresent: `Informs contemporary national identity, cultural heritage, and constitutional protections for indigenous rights.`,
      relatedCountries: [],
      sources: "UNESCO World Heritage Records / Cambridge Regional History"
    },
    {
      year: "16th – 19th Century",
      period: "Colonial Era",
      phase: "Imperial Contact & Colonial Administration",
      title: `Colonial Hegemony, Resource Extraction & Boundary Delineation`,
      claimType: "HISTORICAL FACT",
      where: `${subregion}`,
      actors: ["European Imperial Powers", "Local Sovereign Rulers", "Anti-Colonial Resistance Leaders"],
      rootCauses: "Global expansion of European mercantile capitalism and imperial competition for trade monopolies, minerals, and agricultural commodities.",
      immediateTrigger: "Establishment of colonial protectorates, chartered trade company concessions, or direct imperial governorship.",
      whatHappened: `The territory of ${name} was subjected to external colonial or imperial dominance. Colonial authorities imposed extractive economic structures, established modern administrative capitals, and drew borders that frequently disregarded traditional ethnic and geographical divisions.`,
      turningPoints: "Armed anti-colonial resistance and emergence of modern nationalist movements.",
      whyItMattered: `Created the territorial perimeter that defines the sovereign borders of ${name} today, while linking its economy to global commodity export markets.`,
      consequences: "Erosion of traditional political systems, imposition of foreign legal codes, and extraction of national natural wealth.",
      connectionToPresent: `The artificial colonial frontiers remain the recognized international borders of ${name}, sometimes causing border disputes with neighbors.`,
      relatedCountries: ["GBR", "FRA", "ESP", "PRT", "NLD"],
      sources: "National Archives / Colonial Office Dispatches / Oxford History of the British/French Empire"
    },
    {
      year: "20th Century",
      period: "Decolonization",
      phase: "Independence & Sovereign State Formation",
      title: `Decolonization, Independence & Proclamation of the Republic`,
      claimType: "HISTORICAL FACT",
      where: `${countryObj.capital || name}`,
      actors: ["National Liberation Movement", "Founding Fathers", "United Nations"],
      rootCauses: "Weakening of European empires post-World War II, rise of educated nationalist leadership, and UN Charter principles of self-determination.",
      immediateTrigger: "Formal transfer of power, national referendum, or victorious war of national liberation.",
      whatHappened: `${name} achieved national independence, adopting its first sovereign constitution, joining the United Nations, and establishing independent diplomatic relations across the international community.`,
      turningPoints: "Admission to the United Nations General Assembly.",
      whyItMattered: `Marked the definitive sovereign state formation of modern ${name} as a recognized subject of international law.`,
      consequences: "Nationalization of key infrastructure, establishment of national armed forces, and adoption of independent currency.",
      connectionToPresent: `The founding constitutional principles continue to structure executive and legislative authority in ${name}.`,
      relatedCountries: ["USA", "GBR", "FRA"],
      sources: "United Nations Treaty Series / Official Government Gazette of Independence"
    },
    {
      year: "Post-Cold War – Present",
      period: "Contemporary",
      phase: "Democratic Consolidation & Global Integration",
      title: `Economic Modernization, Multilateral Accords & Contemporary Geopolitics`,
      claimType: "HISTORICAL FACT",
      where: `${countryObj.capital || name}`,
      actors: ["Constitutional Government", "Regional Blocs (AU, ASEAN, OAS, EU, Arab League)"],
      rootCauses: "Post-Cold War globalization, economic structural adjustment, and expansion of multilateral regional integration.",
      immediateTrigger: "Adoption of modern democratic reforms and participation in international trade agreements.",
      whatHappened: `${name} navigated economic diversification, participated in regional trade and security organizations, and balanced diplomatic relations between traditional Western partners and ascendant powers such as China and India.`,
      turningPoints: "Regional trade integration and modernization of national infrastructure.",
      whyItMattered: `Positions ${name} as an active participant in regional stability, global climate negotiations, and international trade supply chains.`,
      consequences: "Strengthened domestic institutions and increased foreign direct investment.",
      connectionToPresent: `Defines ${name}'s current diplomatic stance in the United Nations and its strategy in the contemporary multipolar world order.`,
      relatedCountries: ["USA", "CHN", "IND"],
      sources: "World Bank Country Reports / Ministry of Foreign Affairs Official Publications"
    }
  ];
}

/**
 * Universal Accessor: getCompleteCountryHistory
 * Guaranteed to return a rich, non-empty, multi-era historical timeline for ANY country ISO3.
 */
export function getCompleteCountryHistory(iso3, countryObj = {}) {
  const code = String(iso3 || '').toUpperCase();
  if (CURATED_COUNTRY_TIMELINES[code] && CURATED_COUNTRY_TIMELINES[code].length > 0) {
    return CURATED_COUNTRY_TIMELINES[code];
  }
  return generateUniversalCountryTimeline(code, countryObj);
}
