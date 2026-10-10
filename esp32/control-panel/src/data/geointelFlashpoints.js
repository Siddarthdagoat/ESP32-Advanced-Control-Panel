// ============================================================================
// GEOINTEL — TACTICAL HIGH-RESOLUTION STRATEGIC FLASHPOINTS
// Precision geospatial coordinates, tactical rings, camera presets,
// and defense telemetry for global military friction zones.
// ============================================================================

export const STRATEGIC_FLASHPOINTS = [
  {
    id: 'FLASHPOINT_SPRATLY',
    code: 'FP-SCS-SPRATLY',
    name: 'Spratly Islands & Second Thomas Shoal',
    region: 'South China Sea / Indo-Pacific',
    lat: 9.88,
    lng: 115.85,
    cameraDist: 155,
    pitch: 42,
    threatLevel: 'CRITICAL',
    type: 'Maritime Sovereignty & Bastion Defense',
    overview: 'High-friction reef archipelago where PRC militarized artificial islands (Subi Reef, Mischief Reef, Fiery Cross) enforce the nine-dash line against the Philippine BRP Sierra Madre outpost at Ayungin (Second Thomas) Shoal.',
    coordinatesDetail: '9°52′N 115°51′E',
    tacticalLayers: [
      { name: 'PRC Militarized Bastion (Subi & Mischief)', desc: '3,000m runways, hardened hangars, HQ-9B SAM batteries, YJ-12B supersonic anti-ship missiles' },
      { name: 'Philippine BRP Sierra Madre (Ayungin)', desc: 'Grounded WWII LST-821 serving as commissioned AFP sovereign outpost under CCG water-cannon siege' },
      { name: 'US-Philippines MDT Trigger Zone', desc: 'Article IV Mutual Defense Treaty extends to armed attacks on Philippine armed forces or public vessels in SCS' }
    ],
    defconLevel: 'DEFCON 3 (Elevated Watch)',
    keyClaimants: ['China (PRC)', 'Philippines (PHL)', 'Vietnam (VNM)', 'Taiwan (ROC)', 'Malaysia (MYS)'],
    tacticalSignificance: 'Chokes $3.4 trillion in annual commercial trade; establishes deep-water acoustic bastion for PLAN Type 094 nuclear ballistic missile submarines (SSBNs) departing Yulin Naval Base in Hainan.'
  },
  {
    id: 'FLASHPOINT_KASHMIR',
    code: 'FP-S-ASIA-KASHMIR',
    name: 'Kashmir LoC & Eastern Ladakh LAC',
    region: 'South Asia / Himalayas',
    lat: 34.50,
    lng: 76.50,
    cameraDist: 160,
    pitch: 45,
    threatLevel: 'SEVERE',
    type: 'High-Altitude Nuclear Tri-Junction',
    overview: 'The world’s most militarized high-altitude border, encompassing the 740 km Line of Control (LoC) between India and Pakistan and the Line of Actual Control (LAC) along Eastern Ladakh and Siachen Glacier where Indian and PLA forces deploy corps-level armor and artillery.',
    coordinatesDetail: '34°30′N 76°30′E',
    tacticalLayers: [
      { name: 'Siachen Glacier & Saltoro Ridge', desc: 'World’s highest battlefield at 20,000 ft; Indian Army holds commanding heights overlooking Pakistani Gilgit-Baltistan' },
      { name: 'Galwan Valley & Depsang Plains', desc: 'Friction points of the 2020 lethal hand-to-hand clashes; PLA forward cantonments vs. Indian DBO airfield road' },
      { name: 'CPEC & Karakoram Corridor', desc: 'Strategic highway linking Xinjiang to Gwadar port passing through Pakistan-administered Kashmir' }
    ],
    defconLevel: 'DEFCON 3 (High Vigilance)',
    keyClaimants: ['India (IND)', 'Pakistan (PAK)', 'China (CHN)'],
    tacticalSignificance: 'Direct physical convergence of three nuclear-armed states controlling Himalayan headwaters feeding 1.5 billion people across the Indus and Ganges-Brahmaputra basins.'
  },
  {
    id: 'FLASHPOINT_SUWALKI',
    code: 'FP-EUR-SUWALKI',
    name: 'The Suwałki Gap Corridor',
    region: 'Eastern Europe / Baltic Frontier',
    lat: 54.25,
    lng: 23.30,
    cameraDist: 150,
    pitch: 38,
    threatLevel: 'CRITICAL',
    type: 'NATO Continental Bottleneck',
    overview: 'A narrow 65 km land corridor along the Poland–Lithuania border squeezed between the heavily militarized Russian exclave of Kaliningrad and Belarus. A Russian armored thrust here would sever Estonia, Latvia, and Lithuania from overland NATO reinforcement.',
    coordinatesDetail: '54°15′N 23°18′E',
    tacticalLayers: [
      { name: 'Kaliningrad Fortress Sector', desc: 'Russian Baltic Fleet HQ, Iskander-M nuclear-capable ballistic missiles, S-400 Triumf A2/AD anti-air bubble' },
      { name: 'Belarus Grodno Forward Corps', desc: 'Integrated Russian-Belarusian Regional Group of Forces, tactical nuclear warhead storage depots' },
      { name: 'NATO Enhanced Forward Presence', desc: 'Multinational battlegroups in Rukla (Lithuania) and Bemowo Piskie (Poland) with rapid reinforcement mandates' }
    ],
    defconLevel: 'DEFCON 2 (Heightened War Posture)',
    keyClaimants: ['Poland (POL)', 'Lithuania (LTU)', 'Russia (RUS / Kaliningrad)', 'Belarus (BLR)'],
    tacticalSignificance: 'The ultimate pivot point for NATO Article 5 deterrence; failure to hold the gap isolates the 3 Baltic republics into an amphibious pocket.'
  },
  {
    id: 'FLASHPOINT_TAIWAN_STRAIT',
    code: 'FP-EA-TAIWAN-STRAIT',
    name: 'Taiwan Strait & Median Line',
    region: 'East Asia / Western Pacific',
    lat: 24.20,
    lng: 120.20,
    cameraDist: 155,
    pitch: 44,
    threatLevel: 'CRITICAL',
    type: 'First Island Chain Flashpoint',
    overview: 'The 110-nautical-mile strait separating mainland China from Taiwan. Daily cross-strait sorties erase the historic tacit Median Line, with PLA joint fire strike rehearsals, electronic jamming, and amphibious landing drills threatening Taiwan’s sovereignty and the global semiconductor nexus.',
    coordinatesDetail: '24°12′N 120°12′E',
    tacticalLayers: [
      { name: 'Disputed Median Line (Davis Line)', desc: 'De facto tacit boundary established in 1955; completely breached by daily PLA fighter and drone combat air patrols' },
      { name: 'Kinmen & Matsu Outlying Fortresses', desc: 'ROC frontline fortified islands located just 2 miles off the coast of Xiamen and Fuzhou' },
      { name: 'Taiwan Defense ADIZ', desc: 'Southwest corner ADIZ subject to frequent H-6K nuclear bomber and Y-9 electronic warfare penetrations' }
    ],
    defconLevel: 'DEFCON 2 (Acute Combat Watch)',
    keyClaimants: ['Taiwan / Republic of China (TWN)', 'China / People’s Republic of China (CHN)'],
    tacticalSignificance: 'Controls 50% of global container ship transits and 90% of sub-5nm advanced semiconductor manufacturing capacity (TSMC fabs).'
  },
  {
    id: 'FLASHPOINT_BAB_EL_MANDEB',
    code: 'FP-ME-BAB-MANDEB',
    name: 'Bab el-Mandeb & Perim Island',
    region: 'Red Sea / Horn of Africa',
    lat: 12.58,
    lng: 43.35,
    cameraDist: 150,
    pitch: 40,
    threatLevel: 'CRITICAL',
    type: 'Global Maritime Chokepoint',
    overview: 'The 16-nautical-mile "Gate of Tears" between Yemen and Djibouti connecting the Gulf of Aden to the Red Sea and Suez Canal. Under continuous interdiction by Houthi anti-ship ballistic missiles, cruise missiles, and explosive USVs.',
    coordinatesDetail: '12°35′N 43°21′E',
    tacticalLayers: [
      { name: 'Perim (Mayyun) Island', desc: 'Volcanic island in the throat of the strait dividing the channel into Large Strait and Small Strait' },
      { name: 'Yemen Coastal Strike Complex', desc: 'Concealed mobile launcher sites in Taiz and Hodeidah mountains firing Noor, Quds, and Tankil ASBMs' },
      { name: 'Djibouti Military Base Hub', desc: 'Hosting foreign naval outposts for the US (Camp Lemonnier), China (PLA Navy logistics support base), France, and Japan' }
    ],
    defconLevel: 'DEFCON 2 (Kinetic Strike Zone)',
    keyClaimants: ['Yemen / Houthi Movement (YEM)', 'Djibouti (DJI)', 'Eritrea (ERI)', 'International Coalition'],
    tacticalSignificance: 'Gateway for 12% of global seaborne trade and 30% of global container volume; interdiction forces a 14-day detour around Africa.'
  },
  {
    id: 'FLASHPOINT_GOLAN',
    code: 'FP-ME-GOLAN',
    name: 'Golan Heights & Mount Hermon',
    region: 'Levant / Middle East',
    lat: 33.15,
    lng: 35.80,
    cameraDist: 145,
    pitch: 42,
    threatLevel: 'CRITICAL',
    type: 'High Ground Geostrategic Ridge',
    overview: 'A rocky plateau overlooking the Sea of Galilee and the plains of Damascus. Captured by Israel from Syria in 1967 and annexed in 1981, Mount Hermon provides uninterrupted radar and SIGINT line-of-sight into Syria, Lebanon, and Jordan.',
    coordinatesDetail: '33°09′N 35°48′E',
    tacticalLayers: [
      { name: 'Mount Hermon SIGINT Complex', desc: 'IDF Unit 8200 electronic eavesdropping facilities dubbed the "Eyes of the Country"' },
      { name: 'UNDOF Buffer Zone (Purple Line)', desc: 'United Nations Disengagement Observer Force demilitarized separation corridor instituted in 1974' },
      { name: 'Southern Lebanon / Shebaa Farms Tripoint', desc: 'Hezbollah anti-tank guided missile and rocket launch corridors targeting northern Israeli communities' }
    ],
    defconLevel: 'DEFCON 2 (Active Armed Conflict)',
    keyClaimants: ['Israel (ISR)', 'Syria (SYR)', 'Lebanon (LBN / Shebaa Farms claim)'],
    tacticalSignificance: 'Provides complete artillery dominance over northern Israel and the Damascus highway; controls 15% of Israel’s freshwater supplies via Jordan River tributaries.'
  },
  {
    id: 'FLASHPOINT_HORMUZ',
    code: 'FP-ME-HORMUZ',
    name: 'Strait of Hormuz & Musandam',
    region: 'Persian Gulf / Arabian Sea',
    lat: 26.56,
    lng: 56.40,
    cameraDist: 155,
    pitch: 40,
    threatLevel: 'CRITICAL',
    type: 'Hydrocarbon Lifeblood Chokepoint',
    overview: 'The 21-nautical-mile wide maritime corridor separating Iran and Oman’s Musandam Peninsula. Inbound and outbound shipping channels are each only 2 nautical miles wide, making 20.5 million barrels/day of petroleum vulnerable to naval mines, drone boats, and coastal missile batteries.',
    coordinatesDetail: '26°34′N 56°24′E',
    tacticalLayers: [
      { name: 'Traffic Separation Scheme (TSS)', desc: '2-mile wide navigation channels flanked by 1-mile buffer separation zone in Omani territorial waters' },
      { name: 'Abu Musa & Greater/Lesser Tunb', desc: 'Disputed strategic islands fortified by Iran with surface-to-air missile silos and coastal rocket batteries' },
      { name: 'US 5th Fleet AOR', desc: 'NAVCENT headquarters in Manama, Bahrain; carrier strike group patrol sector in northern Arabian Sea' }
    ],
    defconLevel: 'DEFCON 3 (Strategic Energy Watch)',
    keyClaimants: ['Iran (IRN)', 'Oman (OMN)', 'United Arab Emirates (ARE)'],
    tacticalSignificance: 'Handles 21% of global petroleum consumption and roughly one-third of total global liquefied natural gas (LNG) maritime trade.'
  }
];

export function getFlashpointById(id) {
  return STRATEGIC_FLASHPOINTS.find(f => f.id === id) || null;
}
