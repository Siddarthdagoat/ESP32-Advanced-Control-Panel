/**
 * GEOINTEL — SOVIET UNION TRANSITION & 15 INDEPENDENT REPUBLICS DATABASE
 * 
 * Authoritative Historical Reference:
 * Disaggregates the historical progression across:
 * 1. Russian Empire (1721–1917)
 * 2. Soviet Russia / Russian SFSR (1917–1922)
 * 3. Union of Soviet Socialist Republics / USSR (Dec 30, 1922 – Dec 26, 1991)
 * 4. Russian Federation (Dec 25, 1991 – Present; principal continuing state in UN Security Council)
 * 5. Commonwealth of Independent States / CIS (Dec 8, 1991 Belovezha Accords – Present; regional multilateral forum, not a sovereign federation)
 * 
 * Rigorous post-Soviet independence data for all 15 constituent union republics.
 */

export const SOVIET_HISTORICAL_ENTITIES_EXPLAINER = {
  title: "Deconstruction of Russian Imperial, Soviet, and Post-Soviet Legal Entities",
  clarification: "A fundamental error in geopolitical analysis is conflating the Soviet Union with Russia, or assuming the Soviet Union simply became Russia after World War II. The USSR was a multi-ethnic constitutional federation of 15 sovereign union republics (SSRs). When the USSR dissolved on December 26, 1991, 15 independent sovereign states emerged.",
  entities: [
    {
      name: "Russian Empire",
      span: "1721 – 1917",
      headOfState: "Tsar / Emperor (House of Romanov)",
      nature: "Autocratic imperial monarchy spanning Eurasia, collapsed during the February Revolution of 1917 with the abdication of Tsar Nicholas II.",
      successor: "Russian Provisional Government (March–November 1917), overthrown by the Bolshevik October Revolution."
    },
    {
      name: "Soviet Russia (Russian SFSR)",
      span: "Nov 7, 1917 – Dec 30, 1922",
      headOfState: "Vladimir Lenin / Council of People's Commissars",
      nature: "Revolutionary Bolshevik socialist state established after the October Revolution. Fought the Russian Civil War (1917–1922) against White Army forces and foreign interventionists.",
      successor: "Joined with Ukrainian SSR, Byelorussian SSR, and Transcaucasian SFSR to sign the Treaty on the Creation of the USSR on December 30, 1922."
    },
    {
      name: "Union of Soviet Socialist Republics (USSR)",
      span: "Dec 30, 1922 – Dec 26, 1991",
      headOfState: "General Secretary of the Communist Party of the Soviet Union (CPSU)",
      nature: "Marxist-Leninist federal state governed by the CPSU. At its final constitution (1977), it was composed of 15 Union Republics (Soviet Socialist Republics). Held a permanent seat on the UN Security Council (1945–1991). Defeated Nazi Germany on the Eastern Front (Great Patriotic War, 1941–1945) as a key Allied power, emerged as a nuclear superpower during the Cold War.",
      dissolution: "Dissolved on December 26, 1991 by Declaration 142-N of the Soviet of the Republics of the Supreme Soviet of the USSR, following the Belovezha Accords (Dec 8) and Alma-Ata Protocol (Dec 21)."
    },
    {
      name: "Russian Federation",
      span: "Dec 25, 1991 – Present",
      headOfState: "President of the Russian Federation",
      nature: "Independent sovereign republic. Under international law, recognized as the 'continuation state' (state-continuer) of the USSR, inheriting the Soviet Union's permanent seat on the UN Security Council, nuclear arsenal obligations (under the Budapest Memorandum), and Soviet external state debt.",
      distinctionFromUSSR: "Russia is ONE of the 15 successor states of the USSR. It accounts for ~76% of the Soviet landmass and ~51% of its 1991 population, but does not encompass Ukraine, Belarus, Central Asia, the Caucasus, or the Baltic states."
    },
    {
      name: "Commonwealth of Independent States (CIS)",
      span: "Dec 8, 1991 – Present",
      nature: "A loose regional intergovernmental organization created by the Belovezha Accords. IT IS NOT A STATE OR FEDERATION. Membership is voluntary: the 3 Baltic states NEVER joined; Georgia joined in 1993 and withdrew in 2008 following the Russo-Georgian War; Ukraine participated as a founding state but never ratified the charter and formally withdrew in 2018."
    }
  ]
};

export const SOVIET_15_REPUBLICS = [
  {
    id: "RUS",
    name: "Russian Federation",
    ussrName: "Russian Soviet Federative Socialist Republic (RSFSR)",
    capital: "Moscow",
    lat: 55.7558,
    lng: 37.6173,
    statusInUSSR: "Core and largest constituent republic of the USSR; seat of central Soviet government, CPSU headquarters, and Kremlin command.",
    independenceDeclarationDate: "June 12, 1990 (Declaration of State Sovereignty of the RSFSR)",
    independenceRecognizedDate: "December 26, 1991 (Formal dissolution of the USSR)",
    independenceMilestones: [
      { date: "June 12, 1990", event: "Congress of People's Deputies of the RSFSR adopts the Declaration of State Sovereignty, asserting primacy of Russian laws over Soviet federal laws." },
      { date: "June 12, 1991", event: "Boris Yeltsin elected President of the Russian SFSR in first direct presidential election." },
      { date: "August 19–21, 1991", event: "Hardline communist State Emergency Committee stages failed August Coup against Mikhail Gorbachev; Yeltsin leads resistance at White House, breaking CPSU authority." },
      { date: "December 8, 1991", event: "Yeltsin signs the Belovezha Accords with leaders of Ukraine and Belarus, declaring that the USSR 'ceases to exist as a subject of international law'." },
      { date: "December 25, 1991", event: "Mikhail Gorbachev resigns as Soviet President; Soviet red flag lowered from Kremlin and replaced with Russian tricolor." }
    ],
    initialTransition: "Endured catastrophic economic collapse under 1992 'Shock Therapy' price liberalization, hyperinflation, voucher privatization that spawned the oligarch class, 1993 Constitutional Crisis (shelling of parliament), 1998 ruble financial default, and First Chechen War (1994–1996).",
    relationshipWithRussia: "N/A (Core continuing state).",
    cisStatus: "Founding member and permanent headquarters host (Minsk/Moscow coordinate); principal military anchor of CSTO.",
    majorTerritorialBorderConflicts: [
      "First and Second Chechen Wars (1994–1996, 1999–2009) suppressing North Caucasus separatism.",
      "2008 Russo-Georgian War recognizing Abkhazia and South Ossetia.",
      "2014 Annexation of Crimea and covert warfare in Donbas.",
      "2022 Full-scale invasion of Ukraine and illegal annexation claims of Donetsk, Luhansk, Zaporizhzhia, and Kherson oblasts."
    ],
    internationalOrganizations: ["United Nations (Permanent SC Member)", "CSTO", "Eurasian Economic Union (EAEU)", "BRICS", "SCO", "G20", "CIS"],
    foreignPolicyChanges: "Evolved from pro-Western cooperation under early Yeltsin (NATO Partnership for Peace, G8) to aggressive revanchist anti-Western revisionism under Vladimir Putin (2007 Munich Speech, 2014 Ukraine, 2022 invasion), seeking to reconstruct a Russian sphere of privileged influence across Eurasia.",
    currentGeopoliticalPosition: "Subject to unprecedented Western financial, tech, and energy sanctions following the 2022 Ukraine invasion; deeply reoriented trade and defense logistics toward China, India, Iran, and North Korea.",
    balticDistinctTrajectory: "Viewed Baltic independence as loss of strategic warm-water ports, vehemently protesting NATO's 2004 expansion into the Baltic rim."
  },
  {
    id: "UKR",
    name: "Ukraine",
    ussrName: "Ukrainian Soviet Socialist Republic (UkrSSR)",
    capital: "Kyiv",
    lat: 50.4501,
    lng: 30.5234,
    statusInUSSR: "Second most populous and economically vital republic; primary agricultural breadbasket, heavy industrial base (Donbas), and naval shipbuilding center (Mykolaiv). Co-founding member of the United Nations in 1945.",
    independenceDeclarationDate: "August 24, 1991 (Act of Declaration of Independence of Ukraine)",
    independenceRecognizedDate: "December 26, 1991 (Confirmed by 92.3% vote in nationwide referendum on December 1, 1991)",
    independenceMilestones: [
      { date: "July 16, 1990", event: "Verkhovna Rada adopts Declaration of State Sovereignty, declaring intentions to become a neutral, non-nuclear state." },
      { date: "August 24, 1991", event: "Parliament formally declares independence following the failed Moscow August Coup." },
      { date: "December 1, 1991", event: "National referendum confirms independence with 92.3% 'Yes' vote (including 54% in Crimea and 83% in Luhansk/Donetsk); Leonid Kravchuk elected President." },
      { date: "December 8, 1991", event: "Kravchuk signs Belovezha Accords, sealing the dissolution of the Soviet Union." },
      { date: "December 5, 1994", event: "Budapest Memorandum signed: Ukraine surrenders third-largest nuclear arsenal in the world to Russia in exchange for security assurances of territorial integrity from US, UK, and Russia." }
    ],
    initialTransition: "Deep post-Soviet industrial depression (GDP fell >60% between 1990 and 1999); political tug-of-war between pro-Western western regions and Russian-speaking industrialized eastern regions; hyperinflation curbed with introduction of the Hryvnia in 1996.",
    relationshipWithRussia: "Shifted from complex bilateral negotiations (1997 Partition Treaty on Black Sea Fleet) to acute conflict following the 2004 Orange Revolution, culminating in Russian military aggression in 2014 and total war in 2022.",
    cisStatus: "Participated as founding signatory of Belovezha Accords, but NEVER ratified the CIS Charter; fully severed ties and withdrew from statutory CIS bodies in May 2018.",
    majorTerritorialBorderConflicts: [
      "1992–1997 Status disputes over Sevastopol and the Black Sea Fleet.",
      "2003 Tuzla Island dispute in the Kerch Strait.",
      "February–March 2014 Russian annexation of Crimean Peninsula.",
      "April 2014 – 2022 War in Donbas (Russian-backed proxy republics DPR and LPR).",
      "February 24, 2022 – Present Full-scale Russian invasion; intense active warfare across 1,000km frontline."
    ],
    internationalOrganizations: ["United Nations (Founding Member 1945)", "Council of Europe", "GUAM Organization for Democracy and Economic Development", "Candidate member of European Union (2022)", "Official NATO membership applicant (2022)"],
    foreignPolicyChanges: "Shifted from balanced non-alignment under Kuchma to constitutionally enshrined commitments (2019) to achieve full NATO and EU membership.",
    currentGeopoliticalPosition: "Frontline democratic state resisting full-scale Russian armed aggression with extensive Western financial and military assistance; central theater of European security architecture.",
    balticDistinctTrajectory: "Maintains close security and political alliance with Estonia, Latvia, Lithuania, and Poland as key advocates for Ukrainian NATO and EU accession."
  },
  {
    id: "BLR",
    name: "Republic of Belarus",
    ussrName: "Byelorussian Soviet Socialist Republic (BSSR)",
    capital: "Minsk",
    lat: 53.9045,
    lng: 27.5615,
    statusInUSSR: "Heavily industrialized western borderland republic; devastated during WWII (losing 25–30% of its population). Founding co-member of the United Nations in 1945 alongside UkrSSR.",
    independenceDeclarationDate: "July 27, 1990 (Declaration of State Sovereignty); formalized August 25, 1991",
    independenceRecognizedDate: "December 26, 1991",
    independenceMilestones: [
      { date: "July 27, 1990", event: "Supreme Soviet of BSSR adopts Declaration of State Sovereignty." },
      { date: "August 25, 1991", event: "Declaration of Sovereignty given constitutional status following Moscow coup collapse." },
      { date: "September 19, 1991", event: "Republic officially adopts the name 'Republic of Belarus' and historical white-red-white flag and Pahonia coat of arms." },
      { date: "December 8, 1991", event: "Stanislav Shushkevich hosts the Belovezha Accords meeting in Viskuli, Belarus, dissolving the USSR." },
      { date: "July 1994", event: "Alexander Lukashenko elected first President of Belarus, subsequently consolidating authoritarian rule." }
    ],
    initialTransition: "Initial democratic opening and market reforms were reversed after Alexander Lukashenko's 1994 election, preserving Soviet-style state-directed economy, collective agriculture, and state security apparatus (retaining the KGB name).",
    relationshipWithRussia: "Deepest strategic integration of any post-Soviet state; signed the 1999 Union State of Russia and Belarus treaty, relying heavily on subsidized Russian natural gas and crude oil.",
    cisStatus: "Founding member and permanent headquarters host of the CIS Executive Secretariat in Minsk; CSTO member; EAEU member.",
    majorTerritorialBorderConflicts: [
      "No direct military territorial disputes with neighbors; borders with Poland, Lithuania, and Ukraine demarcated peacefully.",
      "2021 Engineered migrant crisis weaponizing border crossings against Poland, Lithuania, and Latvia.",
      "2022 Staging ground for Russian forces attacking northern Ukraine toward Kyiv."
    ],
    internationalOrganizations: ["United Nations (Founding Member 1945)", "CIS", "CSTO", "Eurasian Economic Union (EAEU)", "Shanghai Cooperation Organisation (SCO 2024 accession)"],
    foreignPolicyChanges: "Pursued periodic balancing ('seesaw policy') between the West and Russia until the rigged 2020 presidential election, after which crushing domestic crackdowns left Lukashenko entirely dependent on Russian security backing.",
    currentGeopoliticalPosition: "De facto satellite military ally of the Russian Federation; hosts Russian tactical nuclear weapons (stationed 2023) and served as northern staging base for the 2022 invasion of Ukraine.",
    balticDistinctTrajectory: "Sharp diplomatic and security antagonism with Baltic neighbors (Lithuania, Latvia) hosting Belarusian democratic opposition in exile."
  },
  {
    id: "EST",
    name: "Republic of Estonia",
    ussrName: "Estonian Soviet Socialist Republic (ESSR)",
    capital: "Tallinn",
    lat: 59.4370,
    lng: 24.7535,
    statusInUSSR: "Illegally annexed in 1940 under the Molotov-Ribbentrop Pact secret protocols; Western democracies (including US under Welles Declaration) maintained continuous non-recognition of Soviet sovereignty.",
    independenceDeclarationDate: "November 16, 1988 (Sovereignty); August 20, 1991 (Full Restoration of Independence)",
    independenceRecognizedDate: "September 6, 1991 (Recognized by Soviet State Council); UN accession September 17, 1991",
    independenceMilestones: [
      { date: "November 16, 1988", event: "Estonian Supreme Soviet issues Declaration of Sovereignty, the first in the USSR to declare local laws sovereign over Soviet decrees." },
      { date: "August 23, 1989", event: "Baltic Way: 2 million Estonians, Latvians, and Lithuanians form 675km human chain across Baltic capitals protesting Molotov-Ribbentrop Pact." },
      { date: "August 20, 1991", event: "Supreme Soviet of Estonia declares full restoration of pre-1940 Republic of Estonia during the Moscow coup." },
      { date: "August 31, 1994", event: "Final Russian military units fully withdraw from Estonian territory." }
    ],
    initialTransition: "Rapid, comprehensive shock therapy, monetary reform (introducing Kroon pegged to Deutsche Mark in 1992), total privatization, flat-tax adoption, and pioneering e-governance digitalization (e-Estonia).",
    relationshipWithRussia: "Highly tense and adversarial; Moscow continuously attacked Estonia over Soviet-era Russian minority citizenship laws and dismantled WWII monuments.",
    cisStatus: "NEVER JOINED THE CIS. Legally maintained that Estonia was an illegally occupied pre-existing state restoring its 1918 republic, not a Soviet successor entity.",
    majorTerritorialBorderConflicts: [
      "1920 Treaty of Tartu border dispute regarding Ivangorod and Petseri district ceded to RSFSR in 1944; border treaty signed in 2014 remains unratified by Russian State Duma.",
      "2007 Bronze Soldier crisis: Tallinn relocation of Soviet monument triggered major Russian state-orchestrated cyberattacks, leading to creation of NATO CCDCOE in Tallinn."
    ],
    internationalOrganizations: ["United Nations (1991)", "NATO (March 29, 2004)", "European Union (May 1, 2004)", "Eurozone (2011)", "OECD (2010)"],
    foreignPolicyChanges: "Complete, uncompromising integration into Western Euro-Atlantic structures; pioneer of NATO cyber defense and highest defense spending per capita in alliance against Russian threats.",
    currentGeopoliticalPosition: "Frontline NATO and EU member state, ardent defender of Ukraine's sovereignty, devoting >3% of GDP to defense deterrence on NATO's northeastern flank.",
    balticDistinctTrajectory: "Emphasized uninterrupted legal continuity of the 1918 republic, rejecting all post-Soviet institutional linkages and integrating seamlessly into Nordic-Baltic (NB8) formats."
  },
  {
    id: "LVA",
    name: "Republic of Latvia",
    ussrName: "Latvian Soviet Socialist Republic (LaSSR)",
    capital: "Riga",
    lat: 56.9496,
    lng: 24.1052,
    statusInUSSR: "Illegally occupied and annexed in June 1940; subjected to mass deportations to Siberia (1941, 1949) and intensive Soviet industrial migration that drastically reduced native Latvian demographic share.",
    independenceDeclarationDate: "May 4, 1990 (Declaration on the Restoration of Independence); August 21, 1991 (De facto complete independence)",
    independenceRecognizedDate: "September 6, 1991 (Soviet recognition)",
    independenceMilestones: [
      { date: "May 4, 1990", event: "Supreme Soviet adopts Declaration on the Restoration of Independence of the Republic of Latvia." },
      { date: "January 1991", event: "The Barricades: Citizens defend Riga parliament against Soviet OMON special police troops." },
      { date: "August 21, 1991", event: "Parliament adopts Constitutional Law on Statehood, declaring full restoration of the 1922 Satversme constitution." },
      { date: "August 31, 1994", event: "Russian armed forces complete military withdrawal from Latvia (radar station at Skrunda dismantled 1998)." }
    ],
    initialTransition: "Deep market restructuring, introduction of the Latvian Lats (1993), strict citizenship legislation ensuring continuity of the interwar republic, and comprehensive reorientation of maritime transit away from Moscow.",
    relationshipWithRussia: "Friction over language laws, status of non-citizen Russian minority, and Latvia's vocal exposure of Soviet crimes.",
    cisStatus: "NEVER JOINED THE CIS. Maintained absolute legal rejection of any Soviet legal inheritance.",
    majorTerritorialBorderConflicts: [
      "Abrene district dispute (ceded to RSFSR in 1944); Latvia relinquished claims in a ratified 2007 border treaty to clear path for EU Schengen accession."
    ],
    internationalOrganizations: ["United Nations (1991)", "NATO (2004)", "European Union (2004)", "Eurozone (2014)", "OECD (2016)"],
    foreignPolicyChanges: "Prioritized collective Baltic security, NATO enhanced Forward Presence host nation (Camp Ādaži), and decoupling from Russian energy pipelines and electricity grids (BRELL synch exit).",
    currentGeopoliticalPosition: "Key Baltic defense nexus guarding the eastern approaches to the Gulf of Riga; strong military and humanitarian donor to Ukraine.",
    balticDistinctTrajectory: "Unbroken legal continuity of the 1918 republic; full Western institutional integration alongside Estonia and Lithuania."
  },
  {
    id: "LTU",
    name: "Republic of Lithuania",
    ussrName: "Lithuanian Soviet Socialist Republic (LiSSR)",
    capital: "Vilnius",
    lat: 54.6872,
    lng: 25.2797,
    statusInUSSR: "Illegally annexed in 1940; epicenter of fiercest armed anti-Soviet partisan resistance ('Forest Brothers', 1944–1953) and first republic to break the Soviet Union.",
    independenceDeclarationDate: "March 11, 1990 (Act of the Re-Establishment of the State of Lithuania)",
    independenceRecognizedDate: "September 6, 1991",
    independenceMilestones: [
      { date: "March 11, 1990", event: "Supreme Council led by Vytautas Landsbergis adopts Act of Re-Establishment of Independence, FIRST Soviet republic to officially declare full secession." },
      { date: "April 1990", event: "Mikhail Gorbachev imposes 74-day crippling economic and energy blockade against Lithuania." },
      { date: "January 13, 1991", event: "January Events: Soviet Alpha Group troops assault Vilnius TV tower, killing 14 unarmed civilians; massive resistance forces Soviet withdrawal." },
      { date: "August 31, 1993", event: "Russian troops complete total military evacuation from Lithuania, one year earlier than in Estonia and Latvia." }
    ],
    initialTransition: "Rapid transition to open market capitalism, adoption of Litas, early privatization, and swift integration into Central European trade circuits.",
    relationshipWithRussia: "Strained due to Russian military transit across Lithuanian territory to the heavily armed Russian exclave of Kaliningrad, and vocal Lithuanian warnings about Russian revanchism.",
    cisStatus: "NEVER JOINED THE CIS. Total legal continuity of the pre-war Republic of Lithuania.",
    majorTerritorialBorderConflicts: [
      "No territorial disputes with neighbors; border treaty with Russia ratified in 2003.",
      "Suwałki Gap geopolitical vulnerability: 65km land corridor between Belarus and Kaliningrad bordering Poland, regarded as NATO's most vulnerable chokepoint."
    ],
    internationalOrganizations: ["United Nations (1991)", "NATO (2004)", "European Union (2004)", "Eurozone (2015)", "OECD (2018)"],
    foreignPolicyChanges: "One of the most principled pro-democracy and anti-authoritarian foreign policies in Europe; severed all Russian gas imports early via Klaipėda LNG terminal ('Independence'), established diplomatic ties with Taiwan in 2021.",
    currentGeopoliticalPosition: "Pivotal NATO eastern bastion; hosting permanent brigade deployment of the German Bundeswehr to deter aggression across the Suwałki Gap.",
    balticDistinctTrajectory: "First republic to declare independence, demonstrating the constitutional unraveling of the USSR; immediate western pivot."
  },
  {
    id: "MDA",
    name: "Republic of Moldova",
    ussrName: "Moldavian Soviet Socialist Republic (MSSR)",
    capital: "Chișinău",
    lat: 47.0105,
    lng: 28.8638,
    statusInUSSR: "Formed in 1940 from annexation of Bessarabia from Romania merged with the Moldavian Autonomous SSR on the eastern bank of the Dniester River.",
    independenceDeclarationDate: "August 27, 1991 (Declaration of Independence of the Republic of Moldova)",
    independenceRecognizedDate: "December 26, 1991",
    independenceMilestones: [
      { date: "June 23, 1990", event: "Parliament adopts Declaration of Sovereignty of Soviet Socialist Republic of Moldova." },
      { date: "August 27, 1991", event: "Adopts Declaration of Independence following the Moscow coup, declaring the Molotov-Ribbentrop Pact null and void." },
      { date: "March–July 1992", event: "Transnistria War: Armed conflict erupts along the Dniester; Russian 14th Guards Army under General Aleksandr Lebed intervenes to establish a frozen pro-Russian enclave." }
    ],
    initialTransition: "Severe economic dislocation, persistent political instability, hyperinflation, heavy reliance on Russian natural gas, and massive labor emigration to EU countries and Russia.",
    relationshipWithRussia: "Heavily compromised by Russian military presence in breakaway Transnistria, frequent Russian gas cutoffs, and trade embargoes on Moldovan wine and agriculture.",
    cisStatus: "Joined the CIS in 1994 to facilitate trade, but withdrew from key CIS parliamentary and sectoral agreements in 2023 under pro-European administration.",
    majorTerritorialBorderConflicts: [
      "Transnistria frozen conflict: De facto self-proclaimed 'Pridnestrovian Moldavian Republic' (PMR) along the eastern Dniester bank hosting ~1,500 Russian troops and massive Cobasna ammunition depot.",
      "Gagauzia autonomy tensions: Pro-Russian autonomy in southern Moldova with constitutional right to external self-determination if Moldova unifies with Romania."
    ],
    internationalOrganizations: ["United Nations (1992)", "GUAM", "Council of Europe", "European Union Candidate State (granted June 2022; accession talks opened 2024)"],
    foreignPolicyChanges: "Transitioned from vacillating between Romania/Europe and Moscow to decisive constitutional integration toward the EU under President Maia Sandu.",
    currentGeopoliticalPosition: "Vulnerable pro-European democracy bordering war-torn Ukraine, facing intense Russian hybrid warfare, energy blackmail, and coup plots.",
    balticDistinctTrajectory: "Hampered by frozen conflict and territorial division, unlike the Baltic states which maintained intact territory and evicted Russian troops."
  },
  {
    id: "GEO",
    name: "Georgia",
    ussrName: "Georgian Soviet Socialist Republic (GSSR)",
    capital: "Tbilisi",
    lat: 41.7151,
    lng: 44.8271,
    statusInUSSR: "Transcaucasian republic with ancient Christian civilizational roots; birthplace of Joseph Stalin; key agricultural and Black Sea resort center.",
    independenceDeclarationDate: "April 9, 1991 (Act of Restoration of State Independence of Georgia)",
    independenceRecognizedDate: "December 26, 1991",
    independenceMilestones: [
      { date: "April 9, 1989", event: "Tbilisi Massacre: Soviet troops violently disperse peaceful pro-independence demonstration, killing 21 and radicalizing Georgian public." },
      { date: "March 31, 1991", event: "Nationwide referendum votes 99.5% in favor of restoring independence of the 1918 Democratic Republic of Georgia." },
      { date: "April 9, 1991", event: "Supreme Council under dissident Zviad Gamsakhurdia adopts Act of Restoration of Independence." },
      { date: "December 1991 – January 1992", event: "Violent military coup overthrows President Gamsakhurdia, plunging the country into civil war." },
      { date: "November 2003", event: "Rose Revolution: Peaceful pro-Western revolution led by Mikheil Saakashvili overthrows Eduard Shevardnadze." }
    ],
    initialTransition: "Devastating civil war and concurrent ethnic conflicts in South Ossetia (1991–1992) and Abkhazia (1992–1993) resulting in ethnic cleansing of Georgians; rampant corruption until sweeping reforms post-2003 Rose Revolution.",
    relationshipWithRussia: "Openly hostile; severed diplomatic relations completely following the August 2008 Russo-Georgian War and Russian recognition of Abkhazia and South Ossetia.",
    cisStatus: "Resisted joining CIS until forced by Eduard Shevardnadze in December 1993 to secure Russian assistance in ending civil war; OFFICIALLY WITHDREW in August 2008 following Russian invasion.",
    majorTerritorialBorderConflicts: [
      "1992–1993 War in Abkhazia resulting in loss of territory and 250,000 displaced Georgians.",
      "1991–1992 First South Ossetian War.",
      "August 2008 Five-Day War with Russia: Russian armored columns invaded through Roki Tunnel; Russia formally recognized independence of Abkhazia and South Ossetia.",
      "'Creeping borderization': Ongoing Russian FSB installation of barbed wire fences shifting administrative boundary lines deeper into Georgian territory."
    ],
    internationalOrganizations: ["United Nations (1992)", "GUAM", "Council of Europe", "EU Candidate Country (granted December 2023)"],
    foreignPolicyChanges: "Fervent Euro-Atlantic aspirations under Saakashvili; recent years marked by controversial democratic backsliding and foreign-agent legislation under Georgian Dream party balancing pressure from Moscow.",
    currentGeopoliticalPosition: "Crucial Black Sea transit corridor for Caspian energy (Baku-Tbilisi-Ceyhan pipeline) with 20% of its sovereign territory under Russian military occupation.",
    balticDistinctTrajectory: "Maintained staunch diplomatic solidarity with Baltic states, who consistently lobby for Georgian sovereignty against Russian occupation."
  },
  {
    id: "ARM",
    name: "Republic of Armenia",
    ussrName: "Armenian Soviet Socialist Republic (ArSSR)",
    capital: "Yerevan",
    lat: 40.1792,
    lng: 44.4991,
    statusInUSSR: "Smallest republic in the USSR; ancient South Caucasus civilization; heavily industrialized scientific and technological center of the Caucasus.",
    independenceDeclarationDate: "August 23, 1990 (Declaration of Independence); September 21, 1991 (Referendum)",
    independenceRecognizedDate: "December 26, 1991",
    independenceMilestones: [
      { date: "February 1988", event: "Karabakh Movement emerges: Armenian Supreme Soviet requests transfer of Nagorno-Karabakh Autonomous Oblast from Azerbaijan SSR to Armenia SSR, triggering violent clashes in Sumgait and Baku." },
      { date: "August 23, 1990", event: "Supreme Soviet of Armenia adopts Declaration of Independence, renaming the state Republic of Armenia." },
      { date: "September 21, 1991", event: "99.5% vote in favor of full secession in nationwide referendum." },
      { date: "December 21, 1991", event: "Signs Alma-Ata Protocols entering the CIS." }
    ],
    initialTransition: "Suffered catastrophic devastation from the 1988 Spitak earthquake, simultaneous full-scale war with Azerbaijan over Nagorno-Karabakh (1988–1994), and a crippling economic blockade by Turkey and Azerbaijan.",
    relationshipWithRussia: "Historically Armenia's chief security guarantor; hosted Russian 102nd Military Base in Gyumri; relations severely deteriorated after Russian peacekeepers failed to prevent Azerbaijan's 2023 offensive in Nagorno-Karabakh.",
    cisStatus: "Founding member of CIS (Alma-Ata 1991); member of CSTO (membership frozen in 2024); member of Eurasian Economic Union (EAEU).",
    majorTerritorialBorderConflicts: [
      "First Nagorno-Karabakh War (1988–1994): Armenian victory establishing de facto Artsakh republic and controlling seven surrounding Azerbaijani districts.",
      "Second Nagorno-Karabakh War (September–November 2020): Turkish-backed Azerbaijani offensive recapturing majority of lost territories.",
      "September 2023 Azerbaijani Lightning Offensive: Complete collapse of Artsakh and forced exodus of >100,000 ethnic Armenians.",
      "Border clashes along sovereign Armenian-Azerbaijani frontier (2021–2023) and disputes over the proposed 'Zangezur Corridor'."
    ],
    internationalOrganizations: ["United Nations (1992)", "CIS", "EAEU", "CSTO (Frozen participation 2024)", "Council of Europe"],
    foreignPolicyChanges: "Pivoting away from complete reliance on Moscow toward enhanced defense and political ties with France, India, and the United States, freezing participation in CSTO exercises.",
    currentGeopoliticalPosition: "Landlocked state seeking peace treaty with Azerbaijan and normalization of closed borders with Turkey, navigating profound regional vulnerability.",
    balticDistinctTrajectory: "Maintained Russian security dependency for decades due to geographic encirclement, diverging sharply from Baltic Western integration."
  },
  {
    id: "AZE",
    name: "Republic of Azerbaijan",
    ussrName: "Azerbaijan Soviet Socialist Republic (AzSSR)",
    capital: "Baku",
    lat: 40.4093,
    lng: 49.8671,
    statusInUSSR: "Pivotal petroleum heartland; supplied >70% of all Soviet oil during World War II, crucial for defeating the German Wehrmacht.",
    independenceDeclarationDate: "August 30, 1991 (Declaration of Independence); October 18, 1991 (Constitutional Act)",
    independenceRecognizedDate: "December 26, 1991",
    independenceMilestones: [
      { date: "January 20, 1990", event: "Black January: Soviet army brutally suppresses Azerbaijani independence movement in Baku, killing >130 civilians." },
      { date: "August 30, 1991", event: "Supreme Soviet adopts Declaration on the Restoration of State Independence of the Azerbaijan Republic (invoking the 1918 Democratic Republic of Azerbaijan)." },
      { date: "October 18, 1991", event: "Constitutional Act on State Independence officially adopted." },
      { date: "June 1993", event: "Heydar Aliyev returns to power, establishing stable dynastic rule passed to son Ilham Aliyev in 2003." },
      { date: "September 1994", event: "'Contract of the Century' signed with Western consortium (BP, Amoco) unlocking Caspian offshore oil." }
    ],
    initialTransition: "Initial chaotic military losses in Karabakh and political coups resolved by Heydar Aliyev, who leveraged Caspian hydrocarbon reserves to finance rapid state consolidation and modern military buildup.",
    relationshipWithRussia: "Pragmatic, transactional partnership balancing Russian regional influence with a profound strategic alliance with Turkey ('One Nation, Two States').",
    cisStatus: "Joined the CIS in September 1993; withdrew from the CSTO collective security treaty in 1999; member of Non-Aligned Movement (NAM).",
    majorTerritorialBorderConflicts: [
      "Nagorno-Karabakh conflict (1988–2023): Restored complete sovereign control over Nagorno-Karabakh and surrounding territories through military victories in 2020 and September 2023.",
      "Demarcation disputes along the border with Armenia.",
      "Demands for an unhindered transit corridor ('Zangezur Corridor') connecting mainland Azerbaijan to its Nakhchivan exclave through southern Armenia."
    ],
    internationalOrganizations: ["United Nations (1992)", "CIS", "GUAM", "Organization of Turkic States (OTS)", "Non-Aligned Movement (NAM)", "OPEC+"],
    foreignPolicyChanges: "Developed deep military integration with Turkey (Shusha Declaration 2021) and strategic intelligence/energy ties with Israel, emerging as a critical non-Russian gas supplier to the European Union.",
    currentGeopoliticalPosition: "Ascendant Caspian energy and transit hegemon linking East and West via the Middle Corridor, having fully resolved the Karabakh conflict by force.",
    balticDistinctTrajectory: "Leveraged hydrocarbon wealth and Turkish alliance rather than Euro-Atlantic integration."
  },
  {
    id: "KAZ",
    name: "Republic of Kazakhstan",
    ussrName: "Kazakh Soviet Socialist Republic (KazSSR)",
    capital: "Astana",
    lat: 51.1694,
    lng: 71.4491,
    statusInUSSR: "Second largest republic by land area (spanning 2.7M km²); major nuclear testing ground (Semipalatinsk), space launch center (Baikonur Cosmodrome), and grain producer (Virgin Lands Campaign).",
    independenceDeclarationDate: "October 25, 1990 (Sovereignty); December 16, 1991 (Independence)",
    independenceRecognizedDate: "December 26, 1991 (LAST Soviet republic to declare independence)",
    independenceMilestones: [
      { date: "December 1986", event: "Jeltoqsan (December) protests in Almaty: First major nationalist mass protest against Soviet leadership in USSR history." },
      { date: "August 29, 1991", event: "President Nursultan Nazarbayev officially closes the Semipalatinsk Nuclear Test Site." },
      { date: "December 16, 1991", event: "Supreme Soviet declares independence—the last constituent republic of the USSR to do so." },
      { date: "December 21, 1991", event: "Hosts the historic Alma-Ata Summit where 11 Soviet republics sign protocols creating the CIS and formally terminating the USSR." },
      { date: "1994–1995", event: "Surrenders fourth-largest nuclear arsenal in the world (1,410 nuclear warheads) for safe transfer to Russia under Budapest Memorandum assurances." }
    ],
    initialTransition: "Managed peaceful multi-ethnic transition (where ethnic Kazakhs were initially a minority of ~40% in 1989), moved capital from Almaty to Astana in 1997, and capitalized on Tengiz/Kashagan supergiant oil fields.",
    relationshipWithRussia: "Maintains longest continuous land border in the world (7,644 km); complex alliance balancing CSTO/EAEU membership with refusal to recognize Russian annexations in Ukraine.",
    cisStatus: "Founding member and key diplomatic architect of CIS (Alma-Ata Protocol); founding member of CSTO and EAEU.",
    majorTerritorialBorderConflicts: [
      "Completed comprehensive border demarcation with Russia, China, and Central Asian neighbors without military conflict.",
      "Sporadic Russian nationalist rhetoric claiming northern Kazakhstan regions as historical Russian lands."
    ],
    internationalOrganizations: ["United Nations (1992)", "CIS", "CSTO", "EAEU", "SCO", "Organization of Turkic States", "CICA"],
    foreignPolicyChanges: "Championed 'Multi-Vector Foreign Policy' under Nazarbayev and continued by Kassym-Jomart Tokayev, skillfully balancing Russia, China (Belt and Road launch site 2013), the United States, and the European Union.",
    currentGeopoliticalPosition: "Economic giant of Central Asia accounting for 60% of regional GDP; world's top uranium producer and critical supplier of oil to Europe and critical minerals to global markets.",
    balticDistinctTrajectory: "Maintained deep institutional and economic ties with Russia while pursuing sovereign multi-vector diplomacy."
  },
  {
    id: "UZB",
    name: "Republic of Uzbekistan",
    ussrName: "Uzbek Soviet Socialist Republic (UzSSR)",
    capital: "Tashkent",
    lat: 41.2995,
    lng: 69.2401,
    statusInUSSR: "Most populous Central Asian republic; center of Soviet cotton monoculture ('White Gold') which caused the catastrophic desiccation of the Aral Sea; home to historic Silk Road cities (Samarkand, Bukhara).",
    independenceDeclarationDate: "August 31, 1991 (Declared); September 1, 1991 (Celebrated Independence Day)",
    independenceRecognizedDate: "December 26, 1991",
    independenceMilestones: [
      { date: "June 20, 1990", event: "Supreme Soviet adopts Declaration on State Sovereignty." },
      { date: "August 31, 1991", event: "President Islam Karimov proclaims Uzbekistan's state independence." },
      { date: "December 21, 1991", event: "Signs Alma-Ata Protocols entering CIS." },
      { date: "December 29, 1991", event: "98.2% vote in favor of independence in nationwide referendum." }
    ],
    initialTransition: "Under Islam Karimov (1991–2016), maintained strict autocratic political control, state economic monopoly, crackdowns on Islamic extremism in the Fergana Valley, and isolationist trade policies.",
    relationshipWithRussia: "Oscillated between cooperation and suspicion; suspended and rejoined Russian-led security pacts repeatedly to preserve sovereign autonomy.",
    cisStatus: "Member of the CIS; twice joined and withdrew from the CSTO (withdrew 1999, rejoined 2006, withdrew permanently in 2012).",
    majorTerritorialBorderConflicts: [
      "Complex Fergana Valley border enclaves (Sokh, Shakhimardan) historically generating clashes with Kyrgyzstan and Tajikistan; largely resolved through border demarcations under President Mirziyoyev.",
      "2005 Andijan massacre: Violent suppression of protests leading to eviction of US air base at Karshi-Khanabad."
    ],
    internationalOrganizations: ["United Nations (1992)", "CIS", "SCO (Founding member 2001)", "Organization of Turkic States", "Non-Aligned Movement"],
    foreignPolicyChanges: "Under President Shavkat Mirziyoyev (2016–Present), launched major economic liberalization, opened borders with Central Asian neighbors, resolved long-standing water/border disputes, and modernized foreign policy.",
    currentGeopoliticalPosition: "Demographic heavyweight of Central Asia (>36 million people), key participant in China-Central Asia infrastructure and the Trans-Afghan Railway corridor.",
    balticDistinctTrajectory: "Maintained secular autocratic consolidation and avoided foreign alliances, rejecting both Russian integration and Western alignment."
  },
  {
    id: "TKM",
    name: "Turkmenistan",
    ussrName: "Turkmen Soviet Socialist Republic (TkSSR)",
    capital: "Ashgabat",
    lat: 37.9601,
    lng: 58.3261,
    statusInUSSR: "Desert republic across the Karakum; site of fourth-largest natural gas reserves on Earth (Galkynysh gas field); major supplier of Soviet gas grid.",
    independenceDeclarationDate: "October 27, 1991",
    independenceRecognizedDate: "December 26, 1991",
    independenceMilestones: [
      { date: "August 22, 1990", event: "Supreme Soviet adopts Declaration on State Sovereignty." },
      { date: "October 27, 1991", event: "Supreme Soviet declares independence following a 94% affirmative referendum." },
      { date: "December 12, 1995", event: "United Nations General Assembly adopts Resolution 50/80 formally recognizing Turkmenistan's status of Permanent Positive Neutrality." }
    ],
    initialTransition: "Extreme totalitarian consolidation under Saparmurat Niyazov ('Turkmenbashi'), extensive personality cult, and strict state control over colossal natural gas assets.",
    relationshipWithRussia: "Distance and independence; broke Russia's monopoly on Turkmen gas exports by opening pipelines to China (2009) and Iran.",
    cisStatus: "Founding member of CIS in 1991, but downgraded participation to ASSOCIATE MEMBER in 2005 due to strict policy of permanent neutrality.",
    majorTerritorialBorderConflicts: [
      "Peaceful borders with neighbors; Caspian Sea legal status settled in 2018 Convention; disputed Dostluk offshore field agreed jointly with Azerbaijan in 2021."
    ],
    internationalOrganizations: ["United Nations (1992)", "Non-Aligned Movement", "Organization of Islamic Cooperation", "CIS (Associate Member)"],
    foreignPolicyChanges: "Constitutionally enshrined 'Permanent Positive Neutrality'; does not join military alliances (CSTO) or supranational economic blocs (EAEU).",
    currentGeopoliticalPosition: "Hyper-isolated, gas-rich hermit kingdom exporting majority of its natural gas to China via Central Asia-China Gas Pipeline network.",
    balticDistinctTrajectory: "Adopted UN-recognized permanent isolationist neutrality, contrasting completely with Baltic NATO/EU collective defense."
  },
  {
    id: "KGZ",
    name: "Kyrgyz Republic",
    ussrName: "Kirghiz Soviet Socialist Republic (KiSSR)",
    capital: "Bishkek",
    lat: 42.8746,
    lng: 74.5698,
    statusInUSSR: "Mountainous Tian Shan republic; strategic defense testing (Lake Issyk-Kul torpedo range) and vital upstream water source for Central Asia (Syr Darya).",
    independenceDeclarationDate: "August 31, 1991 (Declaration on State Independence)",
    independenceRecognizedDate: "December 26, 1991",
    independenceMilestones: [
      { date: "December 15, 1990", event: "Supreme Soviet adopts Declaration on State Sovereignty." },
      { date: "August 31, 1991", event: "Declares complete state independence following the failed Moscow coup." },
      { date: "March 2005", event: "Tulip Revolution: Overthrows President Askar Akayev amid corruption allegations." },
      { date: "April 2010", event: "Second Revolution: Ousts President Kurmanbek Bakiyev, followed by deadly ethnic clashes in Osh." },
      { date: "October 2020", event: "Third Revolution: Post-election protests bring Sadyr Japarov to the presidency." }
    ],
    initialTransition: "Known initially as an 'island of democracy' in Central Asia, but suffered severe poverty, political volatility, and three revolutions (2005, 2010, 2020).",
    relationshipWithRussia: "Close security dependency; hosts Russian air base at Kant; heavily reliant on remittances from hundreds of thousands of Kyrgyz migrant workers in Russia.",
    cisStatus: "Founding member of CIS (1991); member of CSTO; joined Eurasian Economic Union (EAEU) in 2015.",
    majorTerritorialBorderConflicts: [
      "Deadly border clashes with Tajikistan (April 2021 and September 2022) in the Batken region over water access and contested boundary sections; comprehensive border demarcation agreement reached in 2023–2024.",
      "1990 and 2010 ethnic violence between Kyrgyz and Uzbeks in southern Kyrgyzstan (Osh and Jalal-Abad)."
    ],
    internationalOrganizations: ["United Nations (1992)", "CIS", "CSTO", "EAEU", "SCO", "Organization of Turkic States"],
    foreignPolicyChanges: "Hosted both US military transit center (Manas Air Base for Afghanistan, 2001–2014) and Russian military base simultaneously; consolidated Russian and Chinese alignment after closing Manas.",
    currentGeopoliticalPosition: "Strategic mountainous state participating in China-Kyrgyzstan-Uzbekistan (CKU) railway project, navigating acute economic reliance on Russia and China.",
    balticDistinctTrajectory: "Suffered political instability and remained locked within Russian-led security and trade blocs (CSTO/EAEU)."
  },
  {
    id: "TJK",
    name: "Republic of Tajikistan",
    ussrName: "Tajik Soviet Socialist Republic (TaSSR)",
    capital: "Dushanbe",
    lat: 38.5598,
    lng: 68.7870,
    statusInUSSR: "Poorest and southern-most republic in the USSR; mountainous Persian-speaking republic bordering Afghanistan; site of Okno space surveillance station in Nurek.",
    independenceDeclarationDate: "September 9, 1991 (Declaration of Independence)",
    independenceRecognizedDate: "December 26, 1991",
    independenceMilestones: [
      { date: "August 24, 1990", event: "Supreme Soviet adopts Declaration on State Sovereignty." },
      { date: "September 9, 1991", event: "Supreme Soviet declares state independence." },
      { date: "1992–1997", event: "Devastating Tajik Civil War: Communist government fights United Tajik Opposition (Islamist and democratic alliance), killing 50,000–100,000 people." },
      { date: "June 27, 1997", event: "General Agreement on the Establishment of Peace signed in Moscow, ending civil war and establishing Emomali Rahmon's rule." }
    ],
    initialTransition: "Immediate descent into civil war destroyed national economy and infrastructure; consolidated under long-ruling President Emomali Rahmon (in power since 1992).",
    relationshipWithRussia: "Deep military dependency; hosts Russian 201st Military Base (Russia's largest foreign military base with ~7,000 troops) guarding the 1,357km border with Afghanistan.",
    cisStatus: "Founding member of CIS; member of CSTO; member of SCO.",
    majorTerritorialBorderConflicts: [
      "Frequent violent border clashes with Kyrgyzstan over Fergana Valley enclaves (Vorukh) and irrigation canals, resulting in scores of casualties until 2024 demarcation pact.",
      "Porous border with Afghanistan: Infiltration risks from ISIS-K, drug trafficking, and Taliban tensions."
    ],
    internationalOrganizations: ["United Nations (1992)", "CIS", "CSTO", "SCO", "Organization of Islamic Cooperation"],
    foreignPolicyChanges: "Prioritizes regime security through Russian military guarantees and Chinese debt/infrastructure funding, maintaining cold relations with Taliban-controlled Afghanistan due to support for Afghan Tajiks.",
    currentGeopoliticalPosition: "Economically fragile buffer state between Central Asia, China, and Afghanistan; remittances from Russia comprise >40% of national GDP.",
    balticDistinctTrajectory: "Experienced destructive post-Soviet civil war and established absolute reliance on Russian military garrisoning."
  }
];

export const POST_SOVIET_STATISTICS = {
  totalRepublics: 15,
  dissolutionDate: "December 26, 1991",
  belovezhaSignatories: ["Russia", "Ukraine", "Belarus"],
  budapestMemorandumSignatories: ["Russia", "Ukraine", "Belarus", "Kazakhstan"],
  cstoMembers: ["Russia", "Belarus", "Kazakhstan", "Kyrgyzstan", "Tajikistan", "Armenia (frozen)"],
  withdrewFromCis: ["Georgia (2008)", "Ukraine (2018)"],
  neverJoinedCis: ["Estonia", "Latvia", "Lithuania"],
  natoMembers: ["Estonia (2004)", "Latvia (2004)", "Lithuania (2004)"],
  euMembers: ["Estonia (2004)", "Latvia (2004)", "Lithuania (2004)"]
};
