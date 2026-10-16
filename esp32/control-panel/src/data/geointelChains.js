// GEOINTEL Interactive Geopolitical Cause-and-Effect Chains Registry
// Connects concepts, military systems, alliances, and energy security into
// traceable logical sequences with evidence-backed cause-and-effect explanations.

export const GEOPOLITICAL_CHAINS = {
  CHAIN_BRAHMOS_AUTONOMY: {
    id: 'CHAIN_BRAHMOS_AUTONOMY',
    title: 'From BrahMos Missiles to Strategic Autonomy & Energy Balancing',
    tagline: 'How high-tech defense co-development navigated wartime Western sanctions to preserve independent foreign policy.',
    primaryPair: 'IND_RUS',
    nodes: [
      {
        id: 'node_1',
        title: 'BrahMos Missile Co-Development',
        type: 'military',
        badge: 'DEFENSE JV',
        conceptId: 'BRAHMOS',
        country: 'India / Russia',
        summary: 'India (DRDO) and Russia (NPO Mashinostroyeniya) establish BrahMos Aerospace JV, developing the world\'s fastest supersonic cruise missile.',
        causalLink: 'Created deep technological interdependency and long-term joint industrial commitment between New Delhi and Moscow.'
      },
      {
        id: 'node_2',
        title: 'Deep Defense Industrial Reliance',
        type: 'doctrine',
        badge: 'HARDWARE LEGACY',
        conceptId: 'DEFENCE_COOPERATION',
        country: 'India',
        summary: 'Russian-designed platforms grow to represent ~50-60% of the Indian military’s tanks, fighter aircraft, and missile inventory.',
        causalLink: 'Left India vulnerable to severe operational paralysis if Russian supply chains or ammunition supplies were severed.'
      },
      {
        id: 'node_3',
        title: 'Ukraine War & Western Sanctions Shock',
        type: 'event',
        badge: 'SANCTIONS SHOCK',
        conceptId: 'SANCTIONS',
        country: 'Global',
        summary: 'Western nations levy sweeping financial sanctions, freezing Russian reserves and removing major banks from SWIFT clearing.',
        causalLink: 'Threatened Indian defense component payments and exposed India to potential secondary sanctions.'
      },
      {
        id: 'node_4',
        title: 'Assertion of Strategic Autonomy',
        type: 'concept',
        badge: 'DOCTRINAL CHOICE',
        conceptId: 'STRATEGIC_AUTONOMY',
        country: 'India',
        summary: 'India abstains from UN votes condemning Russia, refusing to cut diplomatic ties or join unilateral Western trade embargoes.',
        causalLink: 'Allowed India to protect its national security interests without being drawn into great-power bloc polarization.'
      },
      {
        id: 'node_5',
        title: 'Discounted Russian Energy Pivot',
        type: 'energy',
        badge: 'ENERGY WINDFALL',
        conceptId: 'ENERGY_SECURITY',
        country: 'India / Russia',
        summary: 'Indian refiners dramatically scale up purchases of discounted Russian Urals crude from <2% to over 35-40% of national imports, settled in non-dollar mechanisms.',
        causalLink: 'Tamed domestic inflation and enabled refined fuel exports back to European and global markets.'
      },
      {
        id: 'node_6',
        title: 'Western Recalibration & Indo-Pacific Value',
        type: 'diplomacy',
        badge: 'GEOPOLITICAL PAYOFF',
        conceptId: 'QUAD',
        country: 'USA / Europe / India',
        summary: 'The U.S. and European allies pragmatically accept India’s Russian energy and defense ties, prioritizing India as an indispensable democratic counterweight against China in the Indo-Pacific.',
        causalLink: 'Vindicated India’s multi-alignment strategy, proving middle and rising powers can balance competing superpowers simultaneously.'
      }
    ]
  },

  CHAIN_S400_CAATSA: {
    id: 'CHAIN_S400_CAATSA',
    title: 'S-400 Triumf, CAATSA Sanctions & The U.S.–India Strategic Waiver',
    tagline: 'How sovereign defense procurement tested U.S. sanctions law and forced a strategic exemption.',
    primaryPair: 'USA_IND',
    nodes: [
      {
        id: 'node_1',
        title: 'S-400 Triumf $5.43B Procurement Deal',
        type: 'military',
        badge: 'PROCUREMENT',
        conceptId: 'S400',
        country: 'India / Russia',
        summary: 'India signs a historic intergovernmental contract for 5 regiments of Russian S-400 advanced surface-to-air missile systems.',
        causalLink: 'Triggered immediate legal friction under U.S. secondary sanctions legislation.'
      },
      {
        id: 'node_2',
        title: 'CAATSA Sanctions Trigger',
        type: 'concept',
        badge: 'US STATUTE',
        conceptId: 'CAATSA',
        country: 'USA',
        summary: 'U.S. law mandates mandatory economic and export sanctions on foreign entities conducting significant business with Russia’s defense sector.',
        causalLink: 'Washington expelled Turkey from the F-35 program for buying S-400, threatening India with identical penalties.'
      },
      {
        id: 'node_3',
        title: 'Himalayan Frontier Crisis (Galwan 2020)',
        type: 'event',
        badge: 'SECURITY IMPERATIVE',
        conceptId: 'TERRITORIAL_DISPUTE',
        country: 'India / China',
        summary: 'The 2020 Galwan Valley clash proves India faces an immediate, existential high-altitude threat from China along the Line of Actual Control.',
        causalLink: 'Demonstrated to the U.S. Congress that weakening India\'s air defense would harm broader Indo-Pacific security.'
      },
      {
        id: 'node_4',
        title: 'U.S. Legislative National Security Waiver',
        type: 'diplomacy',
        badge: 'STATUTORY WAIVER',
        conceptId: 'SECONDARY_SANCTIONS',
        country: 'USA Congress',
        summary: 'U.S. Congress passes a bipartisan legislative amendment in the NDAA urging the President to grant India a CAATSA waiver to preserve the QUAD.',
        causalLink: 'Marked a rare victory of geopolitical alliance necessity over domestic U.S. sanctions law.'
      },
      {
        id: 'node_5',
        title: 'Foundational Defense Convergence',
        type: 'agreement',
        badge: 'ACCELERATED TIES',
        conceptId: 'QUAD',
        country: 'USA / India',
        summary: 'India deploys S-400 on its borders while simultaneously signing foundational intelligence pacts (BECA) and iCET critical tech initiatives with Washington.',
        causalLink: 'Solidified India’s unique status as a bridge power operating advanced Russian weapons with real-time American satellite intelligence.'
      }
    ]
  },

  CHAIN_ABRAHAM_IMEC: {
    id: 'CHAIN_ABRAHAM_IMEC',
    title: 'From Abraham Accords to Red Sea Chokepoint Crisis',
    tagline: 'How Arab-Israeli normalization triggered alternative trade corridors, proxy wars, and maritime shipping chokeholds.',
    primaryPair: 'USA_SAUDI',
    nodes: [
      {
        id: 'node_1',
        title: 'Abraham Accords Normalization (2020)',
        type: 'agreement',
        badge: 'DIPLOMATIC BREAKTHROUGH',
        conceptId: 'ABRAHAM_ACCORDS',
        country: 'Israel / UAE / Bahrain / USA',
        summary: 'UAE and Bahrain establish full diplomatic relations with Israel without waiting for Palestinian statehood.',
        causalLink: 'Bypassed traditional Arab consensus and unlocked regional economic integration.'
      },
      {
        id: 'node_2',
        title: 'Birth of I2U2 & IMEC Corridor',
        type: 'concept',
        badge: 'GEOECONOMIC CORRIDOR',
        conceptId: 'ENERGY_SECURITY',
        country: 'India / Israel / UAE / USA',
        summary: 'G20 New Delhi Summit unveils the India-Middle East-Europe Economic Corridor (IMEC) to connect Mumbai to Europe via Gulf rail and Haifa port.',
        causalLink: 'Directly challenged China\'s Belt and Road Initiative and bypassed Iran and traditional maritime bottlenecks.'
      },
      {
        id: 'node_3',
        title: 'October 7 Conflict Eruption',
        type: 'event',
        badge: 'REGIONAL CRISIS',
        conceptId: 'PROXY_WAR',
        country: 'Israel / Gaza / Iran Axis',
        summary: 'Hamas launches catastrophic multi-pronged attacks, freezing Saudi-Israel normalization talks and mobilizing the Iranian "Axis of Resistance."',
        causalLink: 'Pushed the Middle East from economic connectivity back into multi-front kinetic war.'
      },
      {
        id: 'node_4',
        title: 'Houthi Maritime Chokepoint Interdiction',
        type: 'military',
        badge: 'ASYMMETRIC WARFARE',
        conceptId: 'CHOKEPOINT',
        country: 'Yemen / Bab el-Mandeb',
        summary: 'Yemeni Houthi militants fire anti-ship ballistic missiles and drone swarms into the narrow Bab el-Mandeb strait, striking commercial ships.',
        causalLink: 'Shut down the shortest maritime route between Asia and Europe via the Suez Canal.'
      },
      {
        id: 'node_5',
        title: 'Global Shipping Rerouting via Cape of Good Hope',
        type: 'concept',
        badge: 'SUPPLY CHAIN SHOCK',
        conceptId: 'SLOC',
        country: 'Global Maritime Trade',
        summary: 'Over 60% of container traffic diverts around the southern tip of Africa, adding 10-14 transit days, 3,500 nautical miles, and spiking freight inflation.',
        causalLink: 'Demonstrated how low-cost asymmetric drone tech can hold the entire global maritime supply chain hostage.'
      }
    ]
  },

  CHAIN_TAIWAN_MALACCA: {
    id: 'CHAIN_TAIWAN_MALACCA',
    title: 'Taiwan Silicon Shield, First Island Chain & The Malacca Dilemma',
    tagline: 'How semiconductor dominance intersects with naval geography to create the world’s most dangerous flashpoint.',
    primaryPair: 'USA_TWN',
    nodes: [
      {
        id: 'node_1',
        title: 'TSMC & The "Silicon Shield"',
        type: 'concept',
        badge: 'TECH MONOPOLY',
        conceptId: 'DETERRENCE',
        country: 'Taiwan',
        summary: 'Taiwan manufactures over 90% of the world’s most advanced sub-5nm semiconductors, powering global AI chips, smartphones, and military hardware.',
        causalLink: 'Makes an invasion of Taiwan an immediate catastrophic economic collapse for both Beijing and Washington.'
      },
      {
        id: 'node_2',
        title: 'First Island Chain Geostrategic Keystone',
        type: 'concept',
        badge: 'NAVAL GEOGRAPHY',
        conceptId: 'FIRST_ISLAND_CHAIN',
        country: 'Taiwan / Japan / Philippines',
        summary: 'Taiwan sits squarely in the center of the First Island Chain, bottling Chinese naval submarines inside shallow coastal waters.',
        causalLink: 'Controlling Taiwan would grant the PLA Navy unhindered access to the deep waters of the Central Pacific.'
      },
      {
        id: 'node_3',
        title: 'PLA Anti-Access / Area Denial (A2/AD)',
        type: 'military',
        badge: 'MISSILE ENVELOPE',
        conceptId: 'A2_AD',
        country: 'China',
        summary: 'China deploys DF-21D and DF-26 "carrier-killer" ballistic missiles and J-20 stealth fighters to deny U.S. naval strike groups access to the Taiwan Strait.',
        causalLink: 'Undermines traditional American air and naval superiority in the Western Pacific.'
      },
      {
        id: 'node_4',
        title: 'China’s Malacca Dilemma',
        type: 'concept',
        badge: 'ENERGY VULNERABILITY',
        conceptId: 'MALACCA_DILEMMA',
        country: 'China / Indian Ocean',
        summary: 'Over 80% of China’s imported crude oil must transit through the narrow Strait of Malacca, easily interdicted by U.S. and Indian navies in wartime.',
        causalLink: 'Pushes China to build overland pipelines through Pakistan (CPEC) and Myanmar to circumvent maritime blockades.'
      },
      {
        id: 'node_5',
        title: 'Asymmetric "Porcupine" Deterrence',
        type: 'doctrine',
        badge: 'DEFENSE DOCTRINE',
        conceptId: 'STATUS_QUO',
        country: 'Taiwan / USA',
        summary: 'Taiwan transitions to asymmetric defense (thousands of mobile Harpoon missiles, sea mines, and Stinger air defenses) to deter a cross-strait amphibious assault.',
        causalLink: 'Maintains precarious cross-strait status quo by ensuring any invasion attempt would incur astronomical military and economic casualties.'
      }
    ]
  },

  CHAIN_HORMUZ_OIL: {
    id: 'CHAIN_HORMUZ_OIL',
    title: 'Strait of Hormuz, Iranian Asymmetric Power & Global Petrodollars',
    tagline: 'How a 39km marine chokepoint governs global inflation, national security reserves, and currency pricing.',
    primaryPair: 'USA_SAUDI',
    nodes: [
      {
        id: 'node_1',
        title: 'Strait of Hormuz 21 Million bpd Chokepoint',
        type: 'concept',
        badge: 'ENERGY BOTTLENECK',
        conceptId: 'CHOKEPOINT',
        country: 'Iran / Oman / Saudi Arabia',
        summary: '21% of the world\'s petroleum consumption transits through a 39 km-wide waterway overlooked by Iranian coastal bluffs.',
        causalLink: 'Concentrates the single largest energy supply risk on earth in a contested littoral space.'
      },
      {
        id: 'node_2',
        title: 'Iranian Asymmetric Anti-Ship Threat',
        type: 'military',
        badge: 'COASTAL DEFENSE',
        conceptId: 'PROXY_WAR',
        country: 'Iran',
        summary: 'IRGC Navy fields fast-attack missile boats, magnetic sea mines, and shore-based anti-ship cruise missiles (Noor, Qader).',
        causalLink: 'Allows Tehran to credibly threaten closing the strait if subjected to total economic strangulation.'
      },
      {
        id: 'node_3',
        title: 'Global Brent Crude Price Shocks',
        type: 'energy',
        badge: 'COMMODITY SHOCK',
        conceptId: 'ENERGY_SECURITY',
        country: 'Global Markets',
        summary: 'Any incident or tanker seizure immediately spikes crude prices $15–$30/barrel within hours, increasing global manufacturing inflation.',
        causalLink: 'Forces importing powers to maintain massive naval escort presence and strategic oil reserves.'
      },
      {
        id: 'node_4',
        title: 'Petrodollar Recycling & National Reserves',
        type: 'concept',
        badge: 'FINANCIAL ANCHOR',
        conceptId: 'PETRODOLLAR',
        country: 'USA / Saudi Arabia / China',
        summary: 'Crude pricing in USD requires central banks worldwide to stockpile dollar foreign exchange reserves, while Gulf nations reinvest oil surpluses in Western debt.',
        causalLink: 'Sustains American sovereign debt borrowing power while incentivizing China and India to test local-currency oil settlement.'
      }
    ]
  },

  CHAIN_UKRAINE_EUROPE_ENERGY: {
    id: 'CHAIN_UKRAINE_EUROPE_ENERGY',
    title: 'Ukraine War, Nord Stream Sabotage & European Energy Realignment',
    tagline: 'How the termination of cheap Russian pipeline gas transformed European industrial competitiveness and transatlantic energy logistics.',
    primaryPair: 'RUS_UKR',
    nodes: [
      {
        id: 'node_1',
        title: 'Russian Gas Interruption & Pipeline Severance',
        type: 'event',
        badge: 'SUPPLY CHOC',
        conceptId: 'CRITICAL_INFRASTRUCTURE',
        country: 'Russia / Germany',
        summary: 'Underwater explosions severed three of four Nord Stream pipeline conduits on the Baltic seabed, permanently terminating decades of direct Russian natural gas deliveries to Germany.',
        causalLink: 'Eliminated Europe’s baseline cheap industrial energy model overnight, forcing emergency rationing protocols.'
      },
      {
        id: 'node_2',
        title: 'Surge in Transatlantic US LNG Shipments',
        type: 'energy',
        badge: 'LOGISTICS PIVOT',
        conceptId: 'ENERGY_SECURITY',
        country: 'USA / European Union',
        summary: 'European nations rapidly deployed floating storage regasification units (FSRUs), contracting record volumes of US liquefied natural gas at premium pricing.',
        causalLink: 'Deepened European strategic economic dependence on American energy infrastructure while eroding European manufacturing cost parity.'
      },
      {
        id: 'node_3',
        title: 'G7 Price Cap & Russian Oil Redirection',
        type: 'concept',
        badge: 'SANCTIONS SHOCK',
        conceptId: 'ECONOMIC_SANCTIONS',
        country: 'Global Markets',
        summary: 'The G7 and EU imposed a $60/barrel maritime price cap on Russian seaborne crude, enforced through Western maritime insurance denial.',
        causalLink: 'Created the "shadow tanker fleet" and rerouted millions of barrels of Urals crude eastward to refineries in India and China.'
      },
      {
        id: 'node_4',
        title: 'Refined Fuel Re-Export to Europe',
        type: 'doctrine',
        badge: 'ARBITRAGE CIRCUIT',
        conceptId: 'STRATEGIC_AUTONOMY',
        country: 'India / Europe',
        summary: 'Indian refineries processed discounted Russian crude into diesel and jet fuel, legally exporting refined petroleum products back to European consumers.',
        causalLink: 'Stabilized European transport fuel supplies without formal breach of sanctions, illustrating the structural indispensability of strategic multi-alignment.'
      }
    ]
  },

  CHAIN_KOREAN_PENINSULA_DETERRENCE: {
    id: 'CHAIN_KOREAN_PENINSULA_DETERRENCE',
    title: 'North Korean Nuclear Advances & Trilateral Deterrence Integration',
    tagline: 'How solid-fueled ICBM testing transformed East Asian alliance architecture and nuclear deterrence dynamics.',
    primaryPair: 'KOR_PRK',
    nodes: [
      {
        id: 'node_1',
        title: 'North Korean Solid-Fuel ICBM Proliferation',
        type: 'military',
        badge: 'MISSILE ADVANCE',
        conceptId: 'NUCLEAR_PROLIFERATION',
        country: 'North Korea',
        summary: 'Pyongyang operationalizes solid-propellant road-mobile Hwasong-18 ICBMs, eliminating the vulnerable liquid-fueling phase and threatening the continental US.',
        causalLink: 'Compelled Washington and Seoul to address the credibility of the American extended nuclear umbrella.'
      },
      {
        id: 'node_2',
        title: 'The Washington Declaration & NCG',
        type: 'doctrine',
        badge: 'ALLIANCE PACT',
        conceptId: 'EXTENDED_DETERRENCE',
        country: 'USA / South Korea',
        summary: 'Presidents Biden and Yoon establish the Nuclear Consultative Group (NCG) and resume US nuclear-powered ballistic submarine (SSBN) port visits to South Korea.',
        causalLink: 'Dampened domestic South Korean political calls for an independent indigenous nuclear weapons program.'
      },
      {
        id: 'node_3',
        title: 'Camp David Trilateral Historic Rapprochement',
        type: 'event',
        badge: 'TRILATERAL PACT',
        conceptId: 'COLLECTIVE_SECURITY',
        country: 'USA / Japan / South Korea',
        summary: 'Overcoming decades of colonial historical friction, Japan and South Korea institutionalize real-time missile warning data sharing at Camp David.',
        causalLink: 'Unified Northeast Asian missile defense networks into a cohesive, coordinated theater perimeter.'
      },
      {
        id: 'node_4',
        title: 'Russia-North Korea Military Alliance Pact',
        type: 'concept',
        badge: 'MUTUAL DEFENSE',
        conceptId: 'BALANCE_OF_POWER',
        country: 'Russia / North Korea',
        summary: 'Vladimir Putin and Kim Jong Un sign the 2024 Treaty on Comprehensive Strategic Partnership, reviving Soviet-era mutual defense assistance.',
        causalLink: 'Supplied millions of North Korean artillery shells and ballistic missiles to the Russian military in exchange for advanced missile and space telemetry.'
      }
    ]
  },

  CHAIN_ARCTIC_SCRAMBLE: {
    id: 'CHAIN_ARCTIC_SCRAMBLE',
    title: 'Melting Polar Ice, Northern Sea Route & Arctic Resource Scramble',
    tagline: 'How climate change opened shortest maritime passages, igniting superpower competition over Greenland minerals and Russian polar bastions.',
    primaryPair: 'DNK_GRL',
    nodes: [
      {
        id: 'node_1',
        title: 'Polar Ice Recession & Maritime Opening',
        type: 'concept',
        badge: 'GEOGRAPHIC SHIFT',
        conceptId: 'SLOC',
        country: 'Arctic Ocean',
        summary: 'Accelerated Arctic ice melting opens seasonal commercial navigation along Russia’s Northern Sea Route (NSR), cutting Asia-Europe transit by 40%.',
        causalLink: 'Transforms the frozen top of the world into a viable commercial maritime transit corridor.'
      },
      {
        id: 'node_2',
        title: 'Greenland Rare Earths & Sovereignty Standoff',
        type: 'doctrine',
        badge: 'CRITICAL MINERALS',
        conceptId: 'RESOURCE_CURSE',
        country: 'Greenland / Denmark / USA',
        summary: 'Greenland’s vast undeveloped rare earth deposits attract US and European defense interest to counter Chinese mineral supply dominance.',
        causalLink: 'Sparked US territorial purchase overtures and increased Danish domestic defense spending in the North Atlantic.'
      },
      {
        id: 'node_3',
        title: 'Russian Arctic Bastion Militarization',
        type: 'military',
        badge: 'A2/AD BASTION',
        conceptId: 'A2_AD',
        country: 'Russia',
        summary: 'Russia re-opens dozens of Soviet-era Arctic radar stations, airfield strips, and deploys Bastion coastal missile batteries to defend Northern Fleet SSBNs.',
        causalLink: 'Asserted unilateral regulatory control over foreign commercial navigation along the Northern Sea Route.'
      },
      {
        id: 'node_4',
        title: 'NATO Nordic Expansion & Polar Frontier',
        type: 'event',
        badge: 'ALLIANCE FRONTIER',
        conceptId: 'COLLECTIVE_SECURITY',
        country: 'Finland / Sweden / NATO',
        summary: 'Accession of Finland and Sweden completes NATO’s Nordic perimeter, integrating modern Arctic combat forces and air superiority over the high north.',
        causalLink: 'Converts the Baltic and European Arctic into integrated allied defensive operational space.'
      }
    ]
  },

  CHAIN_SOUTH_ASIA_LAC: {
    id: 'CHAIN_SOUTH_ASIA_LAC',
    title: 'Himalayan LAC Standoff, Infrastructure Build-Up & Multi-Domain Balancing',
    tagline: 'How the 2020 Galwan Valley clash triggered unprecedented military infrastructure construction, QUAD alignment, and two-front deterrence.',
    primaryPair: 'IND_CHN',
    nodes: [
      {
        id: 'node_1',
        title: 'Galwan Valley Clash & Border Rupture',
        type: 'event',
        badge: 'KINETIC TRIGGER',
        conceptId: 'LAC',
        country: 'India / China',
        summary: 'Violent physical clashes in the Galwan Valley resulted in the first military casualties along the Line of Actual Control (LAC) in 45 years.',
        causalLink: 'Shattered the 1993 Border Peace and Tranquility Agreement and ended three decades of peaceful bilateral economic compartmentalization.'
      },
      {
        id: 'node_2',
        title: 'Massive Himalayan Infrastructure Modernization',
        type: 'military',
        badge: 'LOGISTICS RACE',
        conceptId: 'CRITICAL_INFRASTRUCTURE',
        country: 'India / China',
        summary: 'Both states constructed dual-use all-weather roads, high-altitude airbases, underground ammunition storage tunnels, and smart border model villages.',
        causalLink: 'Eliminated seasonal winter withdrawal protocols, turning the high-altitude border into a permanently manned, forward-deployed militarized frontier.'
      },
      {
        id: 'node_3',
        title: 'India’s Quad Maritime Balancing Strategy',
        type: 'doctrine',
        badge: 'EXTERNAL BALANCE',
        conceptId: 'QUAD',
        country: 'India / USA / Japan / Australia',
        summary: 'India accelerated its defense interoperability with the QUAD, signing foundational military logistics agreements (LEMOA, COMCASA, BECA).',
        causalLink: 'Signaled to Beijing that continued pressure on the continental land border would prompt reciprocal Indian naval pressure across Indo-Pacific maritime chokepoints.'
      },
      {
        id: 'node_4',
        title: 'Bilateral Disengagement & Strategic Prudence',
        type: 'concept',
        badge: 'TACTICAL DETENTE',
        conceptId: 'STRATEGIC_AUTONOMY',
        country: 'India / China',
        summary: 'Diplomatic negotiations achieved coordinated disengagement protocols at Depsang and Demchok prior to the 2024 BRICS Kazan summit.',
        causalLink: 'Restored baseline border patrolling rights without compromising sovereign territorial postures.'
      }
    ]
  },

  CHAIN_SAHEL_SECURITY: {
    id: 'CHAIN_SAHEL_SECURITY',
    title: 'Sahel Military Coups, Resource Nationalism & Wagner/Africa Corps Resurgence',
    tagline: 'How the collapse of Western counter-terror architecture across Mali, Niger, and Burkina Faso opened the door to Russian mercenary security compacts.',
    primaryPair: 'USA_RUS',
    nodes: [
      {
        id: 'node_1',
        title: 'Wave of Military Juntas Across the Sahel',
        type: 'event',
        badge: 'JUNTAS EMERGENCE',
        conceptId: 'GOVERNANCE_CRISIS',
        country: 'Mali / Burkina Faso / Niger',
        summary: 'Frustration over jihadist insurgencies and neo-colonial dependency fueled military coups across the Sahel, establishing the Alliance of Sahel States (AES).',
        causalLink: 'Led to the immediate expulsion of French Operation Barkhane troops and the termination of US drone base access (Air Base 201 in Agadez).'
      },
      {
        id: 'node_2',
        title: 'Russian Wagner / Africa Corps Security Umbrella',
        type: 'military',
        badge: 'MERCENARY ACCORD',
        conceptId: 'PROXY_WAR',
        country: 'Russia / Sahel Nations',
        summary: 'Military juntas signed direct sovereign security pacts with Moscow, deploying Russian Africa Corps contractors in exchange for mining concessions.',
        causalLink: 'Granted Moscow decisive leverage over trans-Saharan migration routes and gold/uranium export flows.'
      },
      {
        id: 'node_3',
        title: 'Critical Mineral Resource Nationalism',
        type: 'concept',
        badge: 'RESOURCE SOVEREIGNTY',
        conceptId: 'RESOURCE_CURSE',
        country: 'Niger / Mali',
        summary: 'Juntas nationalized mineral exploitation rights, revoking French Orano’s operating permit for the Imouraren uranium deposit in Niger.',
        causalLink: 'Disrupted European nuclear reactor fuel supply chains and accelerated non-Western mineral partnerships.'
      }
    ]
  }
};

