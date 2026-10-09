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
  }
};
