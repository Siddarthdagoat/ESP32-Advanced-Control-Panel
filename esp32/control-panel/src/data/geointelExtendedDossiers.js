// GEOINTEL Extended Country Intelligence Dossiers
// Comprehensive 12-section profiles for UK, France, Germany, Iran, Saudi Arabia, Israel, Turkey,
// plus universal country metadata lookup and ISO code mappings.

export const ISO3_TO_ISO2 = {
  RUS: 'ru', IND: 'in', USA: 'us', CHN: 'cn', JPN: 'jp', TWN: 'tw',
  GBR: 'gb', FRA: 'fr', DEU: 'de', IRN: 'ir', SAU: 'sa', ISR: 'il',
  TUR: 'tr', UKR: 'ua', POL: 'pl', PAK: 'pk', KOR: 'kr', PRK: 'kp',
  BLR: 'by', KAZ: 'kz', GEO: 'ge', AZE: 'az', ARM: 'am', FIN: 'fi',
  SWE: 'se', NOR: 'no', EST: 'ee', LVA: 'lv', LTU: 'lt', MDA: 'md',
  ROU: 'ro', BGR: 'bg', GRC: 'gr', ITA: 'it', ESP: 'es', PRT: 'pt',
  NLD: 'nl', BEL: 'be', CHE: 'ch', AUT: 'at', CZE: 'cz', SVK: 'sk',
  HUN: 'hu', SRB: 'rs', HRV: 'hr', BIH: 'ba', MNE: 'me', ALB: 'al',
  MKD: 'mk', SVN: 'si', CYP: 'cy', MLT: 'mt', ISL: 'is', IRL: 'ie',
  DNK: 'dk', GRL: 'gl', CAN: 'ca', MEX: 'mx', BRA: 'br', ARG: 'ar', CHL: 'cl',
  COL: 'co', VEN: 've', PER: 'pe', ECU: 'ec', BOL: 'bo', PRY: 'py',
  URY: 'uy', GUY: 'gy', SUR: 'sr', CUB: 'cu', HTI: 'ht', DOM: 'do',
  JAM: 'jm', TTO: 'tt', BHS: 'bs', BLZ: 'bz', GTM: 'gt', HND: 'hn',
  SLV: 'sv', NIC: 'ni', CRI: 'cr', PAN: 'pa', AUS: 'au', NZL: 'nz',
  PNG: 'pg', FJI: 'fj', SLB: 'sb', VUT: 'vu', WSM: 'ws', TON: 'to',
  EGY: 'eg', LBY: 'ly', TUN: 'tn', DZA: 'dz', MAR: 'ma', SDN: 'sd',
  SSD: 'ss', ETH: 'et', ERI: 'er', DJI: 'dj', SOM: 'so', KEN: 'ke',
  UGA: 'ug', TZA: 'tz', RWA: 'rw', BDI: 'bi', COD: 'cd', COG: 'cg',
  CAF: 'cf', TCD: 'td', CMR: 'cm', NGA: 'ng', NER: 'ne', BEN: 'bj',
  TGO: 'tg', GHA: 'gh', CIV: 'ci', LBR: 'lr', SLE: 'sl', GIN: 'gn',
  GNB: 'gw', SEN: 'sn', GMB: 'gm', MRT: 'mr', MLI: 'ml', BFA: 'bf',
  ZAF: 'za', NAM: 'na', BWA: 'bw', ZWE: 'zw', MOZ: 'mz', ZMB: 'zm',
  MWI: 'mw', AGO: 'ao', MDG: 'mg', MUS: 'mu', SYC: 'sc', COM: 'km',
  IRQ: 'iq', SYR: 'sy', LBN: 'lb', JOR: 'jo', PSE: 'ps', KWT: 'kw',
  BHR: 'bh', QAT: 'qa', UAE: 'ae', OMN: 'om', YEM: 'ye', AFG: 'af',
  TJK: 'tj', UZB: 'uz', TKM: 'tm', KGZ: 'kg', MNG: 'mn', MMR: 'mm',
  THA: 'th', LAO: 'la', KHM: 'kh', VNM: 'vn', MYS: 'my', SGP: 'sg',
  IDN: 'id', BRN: 'bn', PHL: 'ph', TLS: 'tl', BGD: 'bd', LKA: 'lk',
  NPL: 'np', BTN: 'bt', MDV: 'mv'
};

// Global Capital Coordinates Registry for 3D Globe Capital Reticles
export const CAPITAL_COORDINATES = {
  "GRL": {
    "name": "Nuuk",
    "lat": 64.1835,
    "lng": -51.7216
  },
  "AFG": {
    "name": "Kabul",
    "lat": 34.5553,
    "lng": 69.2075
  },
  "ALB": {
    "name": "Tirana",
    "lat": 41.3275,
    "lng": 19.8187
  },
  "DZA": {
    "name": "Algiers",
    "lat": 36.7538,
    "lng": 3.0588
  },
  "AGO": {
    "name": "Luanda",
    "lat": -8.839,
    "lng": 13.2894
  },
  "ARG": {
    "name": "Buenos Aires",
    "lat": -34.6037,
    "lng": -58.3816
  },
  "ARM": {
    "name": "Yerevan",
    "lat": 40.1792,
    "lng": 44.4991
  },
  "AUS": {
    "name": "Canberra",
    "lat": -35.2809,
    "lng": 149.13
  },
  "AUT": {
    "name": "Vienna",
    "lat": 48.2082,
    "lng": 16.3738
  },
  "AZE": {
    "name": "Baku",
    "lat": 40.4093,
    "lng": 49.8671
  },
  "BHS": {
    "name": "Nassau",
    "lat": 25.0443,
    "lng": -77.3504
  },
  "BGD": {
    "name": "Dhaka",
    "lat": 23.8103,
    "lng": 90.4125
  },
  "BLR": {
    "name": "Minsk",
    "lat": 53.9045,
    "lng": 27.5615
  },
  "BEL": {
    "name": "Brussels",
    "lat": 50.8503,
    "lng": 4.3517
  },
  "BLZ": {
    "name": "Belmopan",
    "lat": 17.251,
    "lng": -88.759
  },
  "BEN": {
    "name": "Porto-Novo",
    "lat": 6.4969,
    "lng": 2.6289
  },
  "BTN": {
    "name": "Thimphu",
    "lat": 27.4728,
    "lng": 89.6393
  },
  "BOL": {
    "name": "Sucre / La Paz",
    "lat": -16.5,
    "lng": -68.15
  },
  "BIH": {
    "name": "Sarajevo",
    "lat": 43.8563,
    "lng": 18.4131
  },
  "BWA": {
    "name": "Gaborone",
    "lat": -24.6282,
    "lng": 25.9231
  },
  "BRA": {
    "name": "Brasília",
    "lat": -15.7975,
    "lng": -47.8919
  },
  "BRN": {
    "name": "Bandar Seri Begawan",
    "lat": 4.9031,
    "lng": 114.9398
  },
  "BGR": {
    "name": "Sofia",
    "lat": 42.6977,
    "lng": 23.3219
  },
  "BFA": {
    "name": "Ouagadougou",
    "lat": 12.3714,
    "lng": -1.5197
  },
  "BDI": {
    "name": "Gitega",
    "lat": -3.4264,
    "lng": 29.9246
  },
  "KHM": {
    "name": "Phnom Penh",
    "lat": 11.5564,
    "lng": 104.9282
  },
  "CMR": {
    "name": "Yaoundé",
    "lat": 3.848,
    "lng": 11.5021
  },
  "CAN": {
    "name": "Ottawa",
    "lat": 45.4215,
    "lng": -75.6972
  },
  "CAF": {
    "name": "Bangui",
    "lat": 4.3947,
    "lng": 18.5582
  },
  "TCD": {
    "name": "N'Djamena",
    "lat": 12.1348,
    "lng": 15.0557
  },
  "CHL": {
    "name": "Santiago",
    "lat": -33.4489,
    "lng": -70.6693
  },
  "CHN": {
    "name": "Beijing",
    "lat": 39.9042,
    "lng": 116.4074
  },
  "COL": {
    "name": "Bogotá",
    "lat": 4.711,
    "lng": -74.0721
  },
  "COG": {
    "name": "Brazzaville",
    "lat": -4.2634,
    "lng": 15.2429
  },
  "COD": {
    "name": "Kinshasa",
    "lat": -4.4419,
    "lng": 15.2663
  },
  "CRI": {
    "name": "San José",
    "lat": 9.9281,
    "lng": -84.0907
  },
  "CIV": {
    "name": "Yamoussoukro",
    "lat": 6.8276,
    "lng": -5.2893
  },
  "HRV": {
    "name": "Zagreb",
    "lat": 45.815,
    "lng": 15.9819
  },
  "CUB": {
    "name": "Havana",
    "lat": 23.1136,
    "lng": -82.3666
  },
  "CYP": {
    "name": "Nicosia",
    "lat": 35.1856,
    "lng": 33.3823
  },
  "CZE": {
    "name": "Prague",
    "lat": 50.0755,
    "lng": 14.4378
  },
  "DNK": {
    "name": "Copenhagen",
    "lat": 55.6761,
    "lng": 12.5683
  },
  "DJI": {
    "name": "Djibouti",
    "lat": 11.5721,
    "lng": 43.1456
  },
  "DOM": {
    "name": "Santo Domingo",
    "lat": 18.4861,
    "lng": -69.9312
  },
  "ECU": {
    "name": "Quito",
    "lat": -0.1807,
    "lng": -78.4678
  },
  "EGY": {
    "name": "Cairo",
    "lat": 30.0444,
    "lng": 31.2357
  },
  "SLV": {
    "name": "San Salvador",
    "lat": 13.6929,
    "lng": -89.2182
  },
  "GNQ": {
    "name": "Malabo",
    "lat": 3.7504,
    "lng": 8.7371
  },
  "ERI": {
    "name": "Asmara",
    "lat": 15.3229,
    "lng": 38.9251
  },
  "EST": {
    "name": "Tallinn",
    "lat": 59.437,
    "lng": 24.7535
  },
  "SWZ": {
    "name": "Mbabane",
    "lat": -26.3054,
    "lng": 31.1367
  },
  "ETH": {
    "name": "Addis Ababa",
    "lat": 9.03,
    "lng": 38.74
  },
  "FJI": {
    "name": "Suva",
    "lat": -18.1248,
    "lng": 178.4501
  },
  "FIN": {
    "name": "Helsinki",
    "lat": 60.1699,
    "lng": 24.9384
  },
  "FRA": {
    "name": "Paris",
    "lat": 48.8566,
    "lng": 2.3522
  },
  "GAB": {
    "name": "Libreville",
    "lat": 0.4162,
    "lng": 9.4673
  },
  "GMB": {
    "name": "Banjul",
    "lat": 13.4549,
    "lng": -16.579
  },
  "GEO": {
    "name": "Tbilisi",
    "lat": 41.7151,
    "lng": 44.8271
  },
  "DEU": {
    "name": "Berlin",
    "lat": 52.52,
    "lng": 13.405
  },
  "GHA": {
    "name": "Accra",
    "lat": 5.6037,
    "lng": -0.187
  },
  "GRC": {
    "name": "Athens",
    "lat": 37.9838,
    "lng": 23.7275
  },
  "GTM": {
    "name": "Guatemala City",
    "lat": 14.6349,
    "lng": -90.5069
  },
  "GIN": {
    "name": "Conakry",
    "lat": 9.6412,
    "lng": -13.5784
  },
  "GNB": {
    "name": "Bissau",
    "lat": 11.8816,
    "lng": -15.6178
  },
  "GUY": {
    "name": "Georgetown",
    "lat": 6.8013,
    "lng": -58.1551
  },
  "HTI": {
    "name": "Port-au-Prince",
    "lat": 18.5944,
    "lng": -72.3074
  },
  "HND": {
    "name": "Tegucigalpa",
    "lat": 14.0723,
    "lng": -87.1921
  },
  "HUN": {
    "name": "Budapest",
    "lat": 47.4979,
    "lng": 19.0402
  },
  "ISL": {
    "name": "Reykjavik",
    "lat": 64.1466,
    "lng": -21.9426
  },
  "IND": {
    "name": "New Delhi",
    "lat": 28.6139,
    "lng": 77.209
  },
  "IDN": {
    "name": "Jakarta",
    "lat": -6.2088,
    "lng": 106.8456
  },
  "IRN": {
    "name": "Tehran",
    "lat": 35.6892,
    "lng": 51.389
  },
  "IRQ": {
    "name": "Baghdad",
    "lat": 33.3152,
    "lng": 44.3661
  },
  "IRL": {
    "name": "Dublin",
    "lat": 53.3498,
    "lng": -6.2603
  },
  "ISR": {
    "name": "Jerusalem",
    "lat": 31.7683,
    "lng": 35.2137
  },
  "ITA": {
    "name": "Rome",
    "lat": 41.9028,
    "lng": 12.4964
  },
  "JAM": {
    "name": "Kingston",
    "lat": 17.9712,
    "lng": -76.7936
  },
  "JPN": {
    "name": "Tokyo",
    "lat": 35.6762,
    "lng": 139.6503
  },
  "JOR": {
    "name": "Amman",
    "lat": 31.9454,
    "lng": 35.9284
  },
  "KAZ": {
    "name": "Astana",
    "lat": 51.1694,
    "lng": 71.4491
  },
  "KEN": {
    "name": "Nairobi",
    "lat": -1.2921,
    "lng": 36.8219
  },
  "PRK": {
    "name": "Pyongyang",
    "lat": 39.0392,
    "lng": 125.7625
  },
  "KOR": {
    "name": "Seoul",
    "lat": 37.5665,
    "lng": 126.978
  },
  "KWT": {
    "name": "Kuwait City",
    "lat": 29.3759,
    "lng": 47.9774
  },
  "KGZ": {
    "name": "Bishkek",
    "lat": 42.8746,
    "lng": 74.5698
  },
  "LAO": {
    "name": "Vientiane",
    "lat": 17.9757,
    "lng": 102.6331
  },
  "LVA": {
    "name": "Riga",
    "lat": 56.9496,
    "lng": 24.1052
  },
  "LBN": {
    "name": "Beirut",
    "lat": 33.8938,
    "lng": 35.5018
  },
  "LSO": {
    "name": "Maseru",
    "lat": -29.3151,
    "lng": 27.4869
  },
  "LBR": {
    "name": "Monrovia",
    "lat": 6.3156,
    "lng": -10.8074
  },
  "LBY": {
    "name": "Tripoli",
    "lat": 32.8872,
    "lng": 13.1913
  },
  "LTU": {
    "name": "Vilnius",
    "lat": 54.6872,
    "lng": 25.2797
  },
  "LUX": {
    "name": "Luxembourg City",
    "lat": 49.6116,
    "lng": 6.1319
  },
  "MDG": {
    "name": "Antananarivo",
    "lat": -18.8792,
    "lng": 47.5079
  },
  "MWI": {
    "name": "Lilongwe",
    "lat": -13.9626,
    "lng": 33.7741
  },
  "MYS": {
    "name": "Kuala Lumpur",
    "lat": 3.139,
    "lng": 101.6869
  },
  "MLI": {
    "name": "Bamako",
    "lat": 12.6392,
    "lng": -8.0029
  },
  "MRT": {
    "name": "Nouakchott",
    "lat": 18.0735,
    "lng": -15.9582
  },
  "MEX": {
    "name": "Mexico City",
    "lat": 19.4326,
    "lng": -99.1332
  },
  "MDA": {
    "name": "Chisinau",
    "lat": 47.0105,
    "lng": 28.8638
  },
  "MNG": {
    "name": "Ulaanbaatar",
    "lat": 47.8864,
    "lng": 106.9057
  },
  "MNE": {
    "name": "Podgorica",
    "lat": 42.4304,
    "lng": 19.2594
  },
  "MAR": {
    "name": "Rabat",
    "lat": 34.0209,
    "lng": -6.8416
  },
  "MOZ": {
    "name": "Maputo",
    "lat": -25.9692,
    "lng": 32.5732
  },
  "MMR": {
    "name": "Naypyidaw",
    "lat": 19.7633,
    "lng": 96.0785
  },
  "NAM": {
    "name": "Windhoek",
    "lat": -22.5609,
    "lng": 17.0658
  },
  "NPL": {
    "name": "Kathmandu",
    "lat": 27.7172,
    "lng": 85.324
  },
  "NLD": {
    "name": "Amsterdam / The Hague",
    "lat": 52.3676,
    "lng": 4.9041
  },
  "NZL": {
    "name": "Wellington",
    "lat": -41.2865,
    "lng": 174.7762
  },
  "NIC": {
    "name": "Managua",
    "lat": 12.115,
    "lng": -86.2362
  },
  "NER": {
    "name": "Niamey",
    "lat": 13.5116,
    "lng": 2.1254
  },
  "NGA": {
    "name": "Abuja",
    "lat": 9.0765,
    "lng": 7.3986
  },
  "MKD": {
    "name": "Skopje",
    "lat": 41.9981,
    "lng": 21.4254
  },
  "NOR": {
    "name": "Oslo",
    "lat": 59.9139,
    "lng": 10.7522
  },
  "OMN": {
    "name": "Muscat",
    "lat": 23.588,
    "lng": 58.3829
  },
  "PAK": {
    "name": "Islamabad",
    "lat": 33.6844,
    "lng": 73.0479
  },
  "PAN": {
    "name": "Panama City",
    "lat": 8.9824,
    "lng": -79.5199
  },
  "PNG": {
    "name": "Port Moresby",
    "lat": -9.4438,
    "lng": 147.1803
  },
  "PRY": {
    "name": "Asunción",
    "lat": -25.2637,
    "lng": -57.5759
  },
  "PER": {
    "name": "Lima",
    "lat": -12.0464,
    "lng": -77.0428
  },
  "PHL": {
    "name": "Manila",
    "lat": 14.5995,
    "lng": 120.9842
  },
  "POL": {
    "name": "Warsaw",
    "lat": 52.2297,
    "lng": 21.0122
  },
  "PRT": {
    "name": "Lisbon",
    "lat": 38.7223,
    "lng": -9.1393
  },
  "QAT": {
    "name": "Doha",
    "lat": 25.2854,
    "lng": 51.531
  },
  "ROU": {
    "name": "Bucharest",
    "lat": 44.4268,
    "lng": 26.1025
  },
  "RUS": {
    "name": "Moscow",
    "lat": 55.7558,
    "lng": 37.6173
  },
  "RWA": {
    "name": "Kigali",
    "lat": -1.9706,
    "lng": 30.1044
  },
  "SAU": {
    "name": "Riyadh",
    "lat": 24.7136,
    "lng": 46.6753
  },
  "SEN": {
    "name": "Dakar",
    "lat": 14.7167,
    "lng": -17.4677
  },
  "SRB": {
    "name": "Belgrade",
    "lat": 44.7866,
    "lng": 20.4489
  },
  "SLE": {
    "name": "Freetown",
    "lat": 8.484,
    "lng": -13.2299
  },
  "SGP": {
    "name": "Singapore",
    "lat": 1.3521,
    "lng": 103.8198
  },
  "SVK": {
    "name": "Bratislava",
    "lat": 48.1486,
    "lng": 17.1077
  },
  "SVN": {
    "name": "Ljubljana",
    "lat": 46.0569,
    "lng": 14.5058
  },
  "SOM": {
    "name": "Mogadishu",
    "lat": 2.0469,
    "lng": 45.3182
  },
  "ZAF": {
    "name": "Pretoria / Cape Town",
    "lat": -25.7479,
    "lng": 28.2293
  },
  "SSD": {
    "name": "Juba",
    "lat": 4.8594,
    "lng": 31.5713
  },
  "ESP": {
    "name": "Madrid",
    "lat": 40.4168,
    "lng": -3.7038
  },
  "LKA": {
    "name": "Colombo / Sri Jayawardenepura Kotte",
    "lat": 6.9271,
    "lng": 79.8612
  },
  "SDN": {
    "name": "Khartoum",
    "lat": 15.5007,
    "lng": 32.5599
  },
  "SUR": {
    "name": "Paramaribo",
    "lat": 5.852,
    "lng": -55.2038
  },
  "SWE": {
    "name": "Stockholm",
    "lat": 59.3293,
    "lng": 18.0686
  },
  "CHE": {
    "name": "Bern",
    "lat": 46.948,
    "lng": 7.4474
  },
  "SYR": {
    "name": "Damascus",
    "lat": 33.5138,
    "lng": 36.2765
  },
  "TWN": {
    "name": "Taipei",
    "lat": 25.033,
    "lng": 121.5654
  },
  "TJK": {
    "name": "Dushanbe",
    "lat": 38.5598,
    "lng": 68.787
  },
  "TZA": {
    "name": "Dodoma / Dar es Salaam",
    "lat": -6.163,
    "lng": 35.7516
  },
  "THA": {
    "name": "Bangkok",
    "lat": 13.7563,
    "lng": 100.5018
  },
  "TLS": {
    "name": "Dili",
    "lat": -8.5569,
    "lng": 125.5603
  },
  "TGO": {
    "name": "Lomé",
    "lat": 6.1375,
    "lng": 1.2123
  },
  "TTO": {
    "name": "Port of Spain",
    "lat": 10.6549,
    "lng": -61.5019
  },
  "TUN": {
    "name": "Tunis",
    "lat": 36.8065,
    "lng": 10.1815
  },
  "TUR": {
    "name": "Ankara",
    "lat": 39.9334,
    "lng": 32.8597
  },
  "TKM": {
    "name": "Ashgabat",
    "lat": 37.9601,
    "lng": 58.3261
  },
  "UGA": {
    "name": "Kampala",
    "lat": 0.3476,
    "lng": 32.5825
  },
  "UKR": {
    "name": "Kyiv",
    "lat": 50.4501,
    "lng": 30.5234
  },
  "ARE": {
    "name": "Abu Dhabi",
    "lat": 24.4539,
    "lng": 54.3773
  },
  "GBR": {
    "name": "London",
    "lat": 51.5074,
    "lng": -0.1278
  },
  "USA": {
    "name": "Washington, D.C.",
    "lat": 38.9072,
    "lng": -77.0369
  },
  "URY": {
    "name": "Montevideo",
    "lat": -34.9011,
    "lng": -56.1645
  },
  "UZB": {
    "name": "Tashkent",
    "lat": 41.2995,
    "lng": 69.2401
  },
  "VUT": {
    "name": "Port Vila",
    "lat": -17.7333,
    "lng": 168.3273
  },
  "VEN": {
    "name": "Caracas",
    "lat": 10.4806,
    "lng": -66.9036
  },
  "VNM": {
    "name": "Hanoi",
    "lat": 21.0285,
    "lng": 105.8542
  },
  "YEM": {
    "name": "Sana'a / Aden",
    "lat": 15.3694,
    "lng": 44.191
  },
  "ZMB": {
    "name": "Lusaka",
    "lat": -15.3875,
    "lng": 28.3228
  },
  "ZWE": {
    "name": "Harare",
    "lat": -17.8216,
    "lng": 31.0492
  }
};

// Neighbor relationships mapping for visual highlighting
export const EXTENDED_COUNTRY_NEIGHBORS = {
  RUS: ['NOR', 'FIN', 'EST', 'LVA', 'LTU', 'POL', 'BLR', 'UKR', 'GEO', 'AZE', 'KAZ', 'CHN', 'MNG', 'PRK'],
  IND: ['PAK', 'CHN', 'NPL', 'BTN', 'BGD', 'MMR', 'LKA'],
  USA: ['CAN', 'MEX'],
  CHN: ['RUS', 'MNG', 'KAZ', 'KGZ', 'TJK', 'AFG', 'PAK', 'IND', 'NPL', 'BTN', 'MMR', 'LAO', 'VNM', 'PRK'],
  JPN: ['RUS', 'KOR', 'CHN', 'TWN'],
  TWN: ['CHN', 'JPN', 'PHL'],
  GBR: ['IRL', 'FRA', 'BEL', 'NLD'],
  FRA: ['BEL', 'LUX', 'DEU', 'CHE', 'ITA', 'MCO', 'ESP', 'AND', 'GBR'],
  DEU: ['DNK', 'POL', 'CZE', 'AUT', 'CHE', 'FRA', 'LUX', 'BEL', 'NLD'],
  IRN: ['TUR', 'IRQ', 'AZE', 'ARM', 'TKM', 'AFG', 'PAK', 'SAU', 'KWT', 'UAE', 'OMN'],
  SAU: ['JOR', 'IRQ', 'KWT', 'QAT', 'BHR', 'UAE', 'OMN', 'YEM', 'IRN', 'EGY'],
  ISR: ['LBN', 'SYR', 'JOR', 'EGY', 'PSE'],
  TUR: ['GRC', 'BGR', 'GEO', 'ARM', 'AZE', 'IRN', 'IRQ', 'SYR'],
  UKR: ['RUS', 'BLR', 'POL', 'SVK', 'HUN', 'ROU', 'MDA'],
  POL: ['DEU', 'CZE', 'SVK', 'UKR', 'BLR', 'LTU', 'RUS'],
  PAK: ['IRN', 'AFG', 'CHN', 'IND']
};

export const EXTENDED_DOSSIERS = {
  // =========================================================================
  // UNITED KINGDOM (GBR)
  // =========================================================================
  "GBR": {
    id: "GBR",
    name: "United Kingdom",
    officialName: "United Kingdom of Great Britain and Northern Ireland",
    commonName: "United Kingdom",
    capital: "London",
    capitalCoords: { lat: 51.5074, lng: -0.1278 },
    capitalAdmin: {
      role: "Capital of the UK, Seat of Parliament & Monarchy",
      political: "Westminster system center, Whitehall civil service, Supreme Court",
      geographic: "Situated on the River Thames in south-east England",
      strategic: "Apex command center (Cabinet Office Briefing Rooms - COBR), global financial center"
    },
    region: "Europe",
    subregion: "Northern & Western Europe",
    flag: "🇬🇧",
    iso2: "gb",
    isoCode: "GBR / 826",
    lat: 55.3781,
    lng: -3.4360,
    area: "242,495 km² (Rank: 78th globally)",
    population: "67.8 Million (2024 ONS / UN estimate)",
    politicalSystemType: "Constitutional Monarchy with Parliamentary Democracy",
    currency: "Pound Sterling (GBP / £)",
    languages: "English (Official De Facto); Scots, Scottish Gaelic, Welsh, Irish (Regional)",
    timeZones: "Greenwich Mean Time (UTC+0 / BST UTC+1)",
    foundingInfo: "1707 (Acts of Union between England and Scotland); 1800 (Union with Ireland); 1922 (Northern Ireland settlement)",
    tagline: "Global Maritime Power, P5 Nuclear State & Founder of the Commonwealth",
    overview: {
      beginner: "The United Kingdom is an island nation in northwestern Europe consisting of England, Scotland, Wales, and Northern Ireland. As a permanent member of the UN Security Council, a leading member of NATO, and the world’s sixth-largest economy, Britain wields substantial global diplomatic, financial, and military clout. Its capital, London, remains one of the planet's top two financial capitals.",
      advanced: "The United Kingdom exercises strategic influence through its \"Global Britain\" doctrine, operating independent continuous at-sea nuclear deterrence (Vanguard-class SSBNs armed with Trident II D5 SLBMs) and leading European expeditionary strike groups (Queen Elizabeth-class supercarriers). Britain is an architect of the AUKUS defense pact, the Five Power Defence Arrangements (FPDA), and the Five Eyes intelligence alliance."
    },
    history: [
      {
        year: "1066",
        title: "Norman Conquest & Feudal Centralization",
        phase: "Medieval Statehood",
        whatHappened: "William the Conqueror defeated Anglo-Saxon King Harold at the Battle of Hastings, consolidating centralized Anglo-Norman monarchical rule.",
        where: "Hastings, England",
        actors: ["William the Conqueror", "King Harold Godwinson"],
        whyItMattered: "Integrated England into continental European dynastic politics, reshaping the English language, law, and administrative tax surveys (Domesday Book).",
        consequences: "Created a strong centralized monarchy and long-term territorial competition with France.",
        claimType: "HISTORICAL FACT",
        sources: "Anglo-Saxon Chronicle / Bayeux Tapestry Archives"
      },
      {
        year: "1215",
        title: "Magna Carta & Constitutional Restraint",
        phase: "Foundational Constitutionalism",
        whatHappened: "Rebel barons forced King John at Runnymede to sign Magna Carta, placing the English monarch under the rule of law and establishing trial by jury.",
        where: "Runnymede, Surrey",
        actors: ["King John", "Archbishop Stephen Langton", "Rebel Barons"],
        whyItMattered: "Formed the cornerstone of English common law and constitutional restraint against arbitrary executive tyranny, inspiring democratic constitutions globally.",
        consequences: "Led to the establishment of the English Parliament in 1265 under Simon de Montfort.",
        claimType: "HISTORICAL FACT",
        sources: "British Library Magna Carta Manuscripts / UK Parliamentary Archives"
      },
      {
        year: "1588",
        title: "Defeat of the Spanish Armada",
        phase: "Tudor Maritime Rise",
        whatHappened: "Under Queen Elizabeth I, English naval ships and fire ships commanded by Sir Francis Drake routed King Philip II’s invading Spanish Armada in the English Channel.",
        where: "English Channel & North Sea",
        actors: ["Queen Elizabeth I", "Sir Francis Drake", "Duke of Medina Sidonia"],
        whyItMattered: "Preserved English national sovereignty, secured the Protestant succession, and catalyzed England's rise as a dominant global maritime power.",
        consequences: "Marked the beginning of permanent English overseas colonial settlement in North America and Asia.",
        claimType: "HISTORICAL FACT",
        sources: "National Maritime Museum (Greenwich) / State Papers Foreign"
      },
      {
        year: "1688–1689",
        title: "Glorious Revolution & Bill of Rights",
        phase: "Parliamentary Sovereignty",
        whatHappened: "Parliament overthrew King James II in favor of William III and Mary II, enacting the 1689 Bill of Rights establishing parliamentary supremacy and statutory law over the royal prerogative.",
        where: "Westminster, London",
        actors: ["William of Orange", "Mary II", "The Immortal Seven Barons"],
        whyItMattered: "Established the definitive model of constitutional monarchy where the monarch reigns but does not rule.",
        consequences: "Created modern ministerial governance, the Bank of England (1694), and national debt financing.",
        claimType: "HISTORICAL FACT",
        sources: "UK Parliamentary Roll (1689) / Statutes of the Realm"
      },
      {
        year: "1750–1850",
        title: "The Industrial Revolution & Global Hegemony",
        phase: "Industrial & Imperial Zenith",
        whatHappened: "Britain became the \"Workshop of the World,\" pioneering coal-powered steam engines, mechanized textile mills, metallurgy, and national railway networks.",
        where: "Midlands, Lancashire, Glasgow, London",
        actors: ["James Watt", "George Stephenson", "Richard Arkwright"],
        whyItMattered: "Transformed global human productivity, urbanized society, and created economic wealth enabling the British Empire to control one-quarter of Earth's land area (\"Pax Britannica\").",
        consequences: "British naval hegemony (Royal Navy) enforced open maritime sea lanes and the international gold standard.",
        claimType: "HISTORICAL FACT",
        sources: "Science Museum Group Historical Archives / Cambridge Economic History"
      },
      {
        year: "1939–1945",
        title: "World War II & The Battle of Britain",
        phase: "Existential Defense & Allied Coalition",
        whatHappened: "Britain stood alone against Nazi-dominated Europe following the fall of France in 1940. The Royal Air Force defeated the Luftwaffe in the Battle of Britain. Under Winston Churchill, Britain formed the Grand Alliance with the USSR and USA, orchestrating the D-Day landings in 1944.",
        where: "London (The Blitz), English Channel, North Atlantic, Normandy",
        actors: ["Winston Churchill", "King George VI", "Air Chief Marshal Hugh Dowding"],
        whyItMattered: "Prevented Nazi European domination and secured the preservation of democratic institutions in Western Europe.",
        consequences: "Wartime bankruptcy accelerated the decolonization of India (1947) and the transformation of the Empire into the Commonwealth of Nations.",
        claimType: "HISTORICAL FACT",
        sources: "Imperial War Museum Archives / National Archives Kew"
      },
      {
        year: "1982",
        title: "Falklands War & Power Projection",
        phase: "Late 20th Century Maritime Action",
        whatHappened: "Following Argentina’s invasion of the British Falkland Islands, Prime Minister Margaret Thatcher dispatched a naval task force 8,000 miles to recapture the islands in 74 days of combat.",
        where: "Falkland Islands, South Atlantic Ocean",
        actors: ["Margaret Thatcher", "Admiral Sir John Fieldhouse", "General Leopoldo Galtieri"],
        whyItMattered: "Demonstrated British independent expeditionary military resolve and confirmed sovereignty over Atlantic overseas territories.",
        consequences: "Revitalized British defense posture and precipitated the collapse of Argentina’s military junta.",
        claimType: "HISTORICAL FACT",
        sources: "Falklands Islands Conflict Official History / MOD Declassified Papers"
      },
      {
        year: "2016–2020",
        title: "Brexit Referendum & Departure from the European Union",
        phase: "Contemporary Geopolitical Reorientation",
        whatHappened: "On June 23, 2016, 51.9% of UK voters chose to leave the European Union. Following four years of parliamentary negotiations, the UK formally departed the EU single market and customs union on December 31, 2020.",
        where: "Westminster, Brussels",
        actors: ["David Cameron", "Theresa May", "Boris Johnson"],
        whyItMattered: "Restored sovereign British regulatory, trade, and immigration autonomy while introducing commercial friction across the English Channel.",
        consequences: "Launched the \"Global Britain\" strategy, prioritizing Indo-Pacific trade accessions (CPTPP) and Atlantic defense partnerships (AUKUS).",
        claimType: "HISTORICAL FACT",
        sources: "European Union (Withdrawal) Act 2018 / UK House of Commons Library"
      }
    ],
    politicalSystem: {
      type: "Constitutional Monarchy with Parliamentary Democracy",
      constitution: "Uncodified Constitution (comprising statutes like Magna Carta and Bill of Rights, court precedents, royal prerogatives, and conventions)",
      branches: [
        { name: "Monarch (Crown)", role: "Head of State (King Charles III); acts on the constitutional advice of ministers and grants Royal Assent." },
        { name: "Prime Minister & Cabinet", role: "Head of Government (Keir Starmer); exercises executive power and commands majority in House of Commons." },
        { name: "House of Commons", role: "650 directly elected Members of Parliament (MPs) responsible for debating legislation and approving taxation." },
        { name: "House of Lords", role: "Bicameral upper house (~780 life peers, hereditary peers, bishops) scrutinizing and revising bills." },
        { name: "Supreme Court of the UK", role: "Apex judicial body for civil and criminal appeals, interpreting statutory law and devolution disputes." }
      ],
      currentLeadership: {
        headOfState: "King Charles III (Ascended Sept 2022)",
        headOfGovernment: "Prime Minister Keir Starmer (Elected July 2024)",
        foreignSecretary: "David Lammy",
        defenseSecretary: "John Healey"
      },
      rulingParty: "Labour Party (Secured commanding majority of 411 of 650 seats in July 2024)",
      oppositionParties: [
        { name: "Conservative Party", seats: "121 seats", leader: "Kemi Badenoch", stance: "Center-right, market capitalism, fiscal conservatism" },
        { name: "Liberal Democrats", seats: "72 seats", leader: "Ed Davey", stance: "Centrist, pro-European, civil liberties" },
        { name: "Scottish National Party (SNP)", seats: "9 seats", stance: "Scottish independence, social democracy" },
        { name: "Reform UK", seats: "5 seats", leader: "Nigel Farage", stance: "Populist right, anti-immigration, economic nationalism" }
      ],
      parliamentDetails: "Bicameral Parliament: 650-seat House of Commons elected via First-Past-The-Post across single-member constituencies.",
      recentElections: "July 4, 2024 General Election: Labour Party won 411 seats (ending 14 years of Conservative rule) with 59.8% turnout. Next election scheduled by mid-2029.",
      domesticDevelopments: [
        { title: "Strategic Defence Review 2024–25", claimType: "VERIFIED FACT", desc: "Commissioned independent defense review to recalibrate military readiness and support for NATO Eastern flank." },
        { title: "Great British Energy Inception", claimType: "VERIFIED FACT", desc: "Publicly owned clean energy company established to accelerate offshore wind and civil nuclear expansion." }
      ],
      currentIssues: [
        { title: "Fiscal Deficit & NHS Backlogs", claimType: "ANALYSIS", desc: "Addressing public sector financing pressures and waiting lists for national healthcare services." },
        { title: "Post-Brexit Border & Trade Delimitation", claimType: "ANALYSIS", desc: "Implementing sanitary and electronic trade checks with the European Union while expanding CPTPP ties." }
      ],
      policyDebates: [
        { topic: "Defense Spending Path to 2.5% of GDP", desc: "Debate over timeline to increase defense budget from 2.3% toward 2.5% of GDP amidst tight fiscal rules." },
        { topic: "Net Zero & Industrial Competitiveness", desc: "Balancing ambitious 2030 clean electricity targets against domestic manufacturing energy costs." }
      ],
      institutions: [
        { name: "Cabinet Office & COBR", role: "Central executive coordination mechanism for emergency and national security responses." },
        { name: "MI6 (SIS) & GCHQ", role: "Foreign intelligence and signals surveillance agencies operating within the Five Eyes network." },
        { name: "Bank of England", role: "Independent central bank managing monetary policy and banking system prudential stability." }
      ],
      foreignPolicyDoctrine: "Active engagement in NATO, Atlantic partnership with the US, unwavering military support for Ukraine, Indo-Pacific tilt (AUKUS, CPTPP), and leadership of the 56-nation Commonwealth."
    },
    geographyBorders: {
      landArea: "242,495 km² (Rank: 78th globally)",
      location: "Northwestern coast of mainland Europe, bounded by the Atlantic Ocean, North Sea, and English Channel",
      continent: "Europe",
      latRange: "49° N to 61° N",
      lngRange: "8° W to 2° E",
      topography: "Rugged highlands in Scotland and Wales; rolling lowland hills, plateaus, and agricultural river valleys across central and southern England.",
      rivers: [
        "River Thames (346 km - London's historic waterway, tidal estuary to North Sea)",
        "River Severn (354 km - Longest river in Great Britain, draining into Bristol Channel)",
        "River Trent (298 km - Industrial heartland conduit through the Midlands)"
      ],
      mountains: [
        "Ben Nevis (1,345 m - Highest peak in the British Isles, Scottish Highlands)",
        "Scafell Pike (978 m - Lake District, England)",
        "Snowdon / Yr Wyddfa (1,085 m - Snowdonia, Wales)"
      ],
      seas: [
        "North Sea (Host to offshore energy, gas platforms, and commercial fishing)",
        "English Channel (World’s busiest maritime transit corridor; linked to France via Channel Tunnel)",
        "Irish Sea (Separates Great Britain from the island of Ireland)",
        "Atlantic Ocean (Western oceanic approaches)"
      ],
      majorOceans: ["North Atlantic Ocean"],
      coastline: "12,429 km (Highly indented coastline with numerous natural deep-water ports)",
      climates: [
        "Temperate Maritime (Cfb - Moderated by the North Atlantic Drift / Gulf Stream; mild winters and cool summers)"
      ],
      landBorders: [
        {
          country: "Ireland",
          id: "IRL",
          borderLength: "499 km",
          region: "Northern Ireland Frontier",
          status: "Open Border under Good Friday Agreement & Windsor Framework",
          strategicContext: "Crucial geopolitical frontier; operates without physical border posts under the 1998 Belfast/Good Friday Agreement, with regulatory checks moved to Irish Sea ports under the Windsor Framework."
        }
      ],
      maritimeBorders: [
        {
          country: "France",
          id: "FRA",
          boundary: "Dover Strait / English Channel (Separated by just 33.3 km; connected undersea by the 50.45 km Channel Tunnel)."
        },
        {
          country: "Norway & Netherlands",
          id: "NOR",
          boundary: "North Sea median line delimiting exclusive economic zones and offshore oil and gas fields."
        }
      ],
      majorIslands: [
        "Great Britain (Largest island in Europe)",
        "Hebrides, Orkney & Shetland Islands (Scotland)",
        "Isle of Wight & Isles of Scilly (England)",
        "14 British Overseas Territories (Falklands, Gibraltar, Bermuda, Diego Garcia/BIOT, Cayman)"
      ],
      strategicGeography: "Commands the GIUK (Greenland-Iceland-UK) Gap—NATO's critical anti-submarine chokepoint monitoring Russian Northern Fleet submarine egress into the North Atlantic Ocean."
    },
    economy: {
      gdpNominal: "$3.33 Trillion (6th largest globally, IMF 2024)",
      gdpPPP: "$3.98 Trillion (World Bank PPP)",
      gdpPerCapita: "$48,900 Nominal / $58,500 PPP",
      gdpGrowth: "+0.9% (2024 IMF estimate)",
      currency: "Pound Sterling (GBP / £)",
      majorIndustries: [
        "Financial & Professional Services (City of London global capital hub)",
        "Aerospace & Defense (BAE Systems, Rolls-Royce aerospace engines)",
        "Pharmaceuticals & Life Sciences (AstraZeneca, GSK)",
        "Automotive & Advanced Engineering",
        "Creative & Digital Technologies",
        "Offshore Wind & Green Hydrogen"
      ],
      majorExports: [
        "Commercial & Financial Services ($400B+)",
        "Gas Turbines & Aircraft Parts ($32B)",
        "Medicinal Products & Vaccines ($28B)",
        "Precious Metals & Crude Oil ($35B)",
        "Automotive & Specialist Vehicles ($24B)"
      ],
      majorImports: [
        "Industrial Machinery & Electronics",
        "Motor Vehicles & Transportation Equipment",
        "Refined Petroleum & Natural Gas",
        "Consumer Electronics & Pharmaceuticals"
      ],
      majorTradePartners: [
        { country: "United States", share: "Largest single trade partner (~21% of UK exports)" },
        { country: "European Union", share: "Collective bloc accounting for ~42% of total trade" },
        { country: "China", share: "Primary import source for consumer goods and electronics (~7%)" },
        { country: "India", share: "Rapidly growing trade corridor ($45B+; concluding FTA negotiations)" }
      ],
      energyPosition: "Major global pioneer in offshore wind (world's 2nd largest installed capacity); declining North Sea oil and gas output offset by LNG imports from US and Qatar and new Sizewell C nuclear reactors.",
      naturalResources: "North Sea petroleum and natural gas, coal deposits, limestone, salt, chalk, and high offshore wind kinetic potential.",
      tradeOrgs: [
        "World Trade Organization (WTO)",
        "Comprehensive and Progressive Agreement for Trans-Pacific Partnership (CPTPP)",
        "Group of Seven (G7)",
        "Group of Twenty (G20)",
        "OECD & Commonwealth of Nations"
      ],
      economicStrategicImportance: "Global financial services capital, secondary currency clearing hub for foreign exchange (43% of global forex turnover), and key intellectual property and patent jurisdiction.",
      indiaEconomicConnection: "Bilateral trade reached £38.1 Billion ($48B) in 2023–24. Active negotiations for a landmark Comprehensive Free Trade Agreement (FTA) designed to slash tariffs on automotive, scotch whisky, and tech services. Massive reciprocal investment: Tata Group is one of the UK’s largest industrial employers (JLR, Tata Steel, £4B gigafactory in Somerset)."
    },
    military: {
      expenditure: "$74.9 Billion (2.3% of GDP, 2024 NATO standard)",
      personnel: {
        active: "142,500 full-time active personnel (Army, Royal Navy, RAF)",
        reserves: "35,000 trained volunteer reserves",
        conscription: "All-volunteer professional armed forces"
      },
      doctrine: "Integrated Operating Concept: Forward-deployed allied defense anchored in NATO Article 5; Continuous At-Sea Deterrence (CASD); global expeditionary carrier strike operations; high-tech cyber and space integration.",
      nuclearStockpile: "Approx. 225 thermonuclear warheads; operational ceiling authorized up to 260 warheads.",
      defenseIndustry: "BAE Systems (world's 7th largest defense contractor), Rolls-Royce Defence (marine nuclear reactors, jet engines), MBDA UK (advanced missile systems), Thales UK, Babcock International.",
      majorDomesticSystems: [
        "Vanguard-class & Dreadnought-class SSBN Nuclear Submarines",
        "Astute-class Nuclear Attack Submarines (SSN)",
        "HMS Queen Elizabeth & Prince of Wales Supercarriers (65,000 tonnes)",
        "Type 45 Daring-class Guided Missile Destroyers (Sea Viper / Aster 30)",
        "Challenger 2 / Challenger 3 Main Battle Tanks",
        "Eurofighter Typhoon FGR4 & F-35B Lightning II Stealth Fighters",
        "Storm Shadow Standoff Cruise Missiles & Brimstone Precision Missiles"
      ],
      majorImports: ["F-35B Lightning II STOVL aircraft (US/Lockheed Martin)", "P-8A Poseidon Maritime Patrol (US/Boeing)", "AH-64E Apache Attack Helicopters (US/Boeing)"],
      majorExports: ["Typhoon combat aircraft, advanced radar systems, Hawk trainers, marine propulsion, Storm Shadow cruise missiles"],
      militaryAlliances: ["NATO (Founding Member)", "AUKUS (Trilateral submarine and advanced tech pact)", "Five Eyes (Intelligence)", "Joint Expeditionary Force (JEF)", "FPDA"],
      categories: [
        {
          name: "STRATEGIC NUCLEAR DETERRENT",
          desc: "Four Vanguard-class nuclear-powered ballistic missile submarines operating continuous patrol.",
          systems: [
            { name: "Trident II D5 SLBM", type: "Submarine-Launched Ballistic Missile", origin: "UK/USA", status: "CONFIRMED", quantity: "Up to 16 missiles per submarine", role: "Thermonuclear strategic deterrence with 12,000 km range." }
          ]
        },
        {
          name: "EXPEDITIONARY NAVAL FLEET",
          desc: "Queen Elizabeth-class supercarriers and surface combatants projecting blue-water strike.",
          systems: [
            { name: "HMS Queen Elizabeth (R08)", type: "65,000-Tonne Aircraft Carrier", origin: "UK", status: "CONFIRMED", quantity: "2 carriers in service", role: "Embarks up to 36 F-35B stealth jets and Merlin anti-submarine helicopters." },
            { name: "Astute-class Submarine", type: "Nuclear-Powered Attack Submarine (SSN)", origin: "UK (BAE Systems)", status: "CONFIRMED", quantity: "5 commissioned (2 building)", role: "Armed with Spearfish heavyweight torpedoes and Tomahawk Block V cruise missiles." }
          ]
        }
      ]
    },
    relations: {
      main: [
        { id: "GBR_USA", country: "United States", flag: "🇺🇸", status: "Special Relationship & Defense Pillar", color: "#3b82f6", note: "Deepest intelligence (Five Eyes), nuclear missile sharing, and NATO cornerstone." },
        { id: "GBR_IND", country: "India", flag: "🇮🇳", status: "Comprehensive Strategic Partnership", color: "#10b981", note: "Roadmap 2030, FTA negotiations, shared Indian Ocean maritime defense." },
        { id: "GBR_FRA", country: "France", flag: "🇫🇷", status: "Lancaster House Treaties Ally", color: "#3b82f6", note: "Combined Joint Expeditionary Force (CJEF) and European defense coordination." },
        { id: "GBR_UKR", country: "Ukraine", flag: "🇺🇦", status: "100-Year Strategic Security Accord", color: "#10b981", note: "Leading military hardware donor (Storm Shadow, Challenger 2 tanks)." }
      ],
      searchable: []
    },
    strategicLocations: [
      { name: "HMNB Clyde (Faslane, Scotland)", type: "Nuclear Submarine Naval Base", coords: "56.06° N, 4.81° W", significance: "Home base for the UK's strategic nuclear deterrent Vanguard submarines and Astute attack submarines." },
      { name: "HMNB Portsmouth", type: "Surface Fleet Naval Base", coords: "50.81° N, 1.11° W", significance: "Headquarters of the Royal Navy and home port for HMS Queen Elizabeth carrier group." },
      { name: "Gibraltar Naval Base", type: "Mediterranean Chokepoint Fortress", coords: "36.14° N, 5.35° W", significance: "Controls the western entrance to the Mediterranean Sea and Strait of Gibraltar." },
      { name: "RAF Akrotiri (Cyprus)", type: "Middle East Air Operations Base", coords: "34.59° N, 32.98° E", significance: "Sovereign base area staging reconnaissance and strike missions across the Levant and Red Sea." }
    ],
    currentTensions: [
      {
        title: "Russian Subsurface Probing in GIUK Gap & Underwater Cables",
        severity: "Elevated Security Alert",
        color: "#f97316",
        desc: "Increased Russian submarine activity in the North Atlantic targeting critical undersea internet cables and energy interconnectors."
      }
    ],
    keyEvents: [
      { title: "1940 Victory in the Battle of Britain", category: "Existential Defense", date: "October 1940" },
      { title: "2020 Formal Departure from the EU", category: "Sovereign Reorientation", date: "December 31, 2020" },
      { title: "2021 Creation of AUKUS Defense Alliance", category: "Indo-Pacific Pact", date: "September 15, 2021" }
    ],
    indiaImpact: {
      headline: "UK–India Roadmap 2030 & Landmark Free Trade Agreement",
      points: [
        { title: "Roadmap 2030 Framework", desc: "Transforms bilateral ties across defense, trade, climate change, and health into a high-level strategic partnership." },
        { title: "Free Trade Agreement (FTA) Dynamics", desc: "Designed to double bilateral trade by 2030, cutting tariffs on Scotch whisky, British manufacturing, and Indian IT and professional services." },
        { title: "Defense Tech & Maritime Co-Operation", desc: "Collaborating on electric naval propulsion, jet engine development, and interoperability across the Western Indian Ocean." }
      ]
    }
  },

  // =========================================================================
  // FRANCE (FRA)
  // =========================================================================
  "FRA": {
    id: "FRA",
    name: "France",
    officialName: "French Republic (République française)",
    commonName: "France",
    capital: "Paris",
    capitalCoords: { lat: 48.8566, lng: 2.3522 },
    capitalAdmin: {
      role: "Capital of France & Seat of the Presidency",
      political: "Élysée Palace, Matignon (Prime Minister), National Assembly, Senate",
      geographic: "Located on the Seine River in northern-central France",
      strategic: "Command authority for France's sovereign nuclear strike force (Force de Frappe)"
    },
    region: "Europe",
    subregion: "Western Europe",
    flag: "🇫🇷",
    iso2: "fr",
    isoCode: "FRA / 250",
    lat: 46.2276,
    lng: 2.2137,
    area: "643,801 km² (Metropolitan: 551,695 km²; largest in EU)",
    population: "68.4 Million (2024 INSEE / UN estimate)",
    politicalSystemType: "Semi-Presidential Constitutional Republic",
    currency: "Euro (EUR / €)",
    languages: "French (Official State Language)",
    timeZones: "Central European Time (UTC+1 / CEST UTC+2; 12 time zones including overseas territories)",
    foundingInfo: "843 (Treaty of Verdun); 1789 (French Revolution); 1958 (Fifth Republic established by Charles de Gaulle)",
    tagline: "EU Defense Pillar, P5 Sovereign Nuclear Power & Indo-Pacific Resident State",
    overview: {
      beginner: "France is a leading European power, the world’s seventh-largest economy, and a permanent member of the UN Security Council. It stands as the only nuclear-armed power in the European Union following Brexit. France champions European 'Strategic Autonomy'—the belief that Europe must have the independent military and industrial capacity to protect itself without complete reliance on the United States.",
      advanced: "The French Republic maintains an independent, strictly national nuclear deterrent (Force de Frappe) comprising submarine-launched M51 SLBMs and airborne ASMP-A nuclear cruise missiles carried by Rafale fighters. France is a resident power in the Indo-Pacific, possessing sovereign overseas departments (Réunion, Mayotte, New Caledonia, French Polynesia) hosting 1.6 million French citizens and commanding the world's second-largest Exclusive Economic Zone (11.7 million km²)."
    },
    history: [
      {
        year: "1789–1799",
        title: "French Revolution & Declaration of the Rights of Man",
        phase: "Revolutionary Transformation",
        whatHappened: "The storming of the Bastille overthrew absolute monarchy and feudal privilege, proclaiming universal human liberties and the First French Republic.",
        where: "Paris, Versailles",
        actors: ["Maximilien Robespierre", "King Louis XVI", "Marquis de Lafayette"],
        whyItMattered: "Dismantled ancient regime monarchies across Europe, establishing popular sovereignty, secularism (laïcité), and civic citizenship.",
        consequences: "Sparked continental wars and opened the path for the rise of Napoleon Bonaparte.",
        claimType: "HISTORICAL FACT",
        sources: "Archives Nationales de France / Declaration of 1789"
      },
      {
        year: "1799–1815",
        title: "Napoleonic Empire & The Civil Code",
        phase: "Imperial Dominance & Legal Code",
        whatHappened: "Napoleon Bonaparte conquered continental Europe, standardizing the metric system, administrative prefectures, and the Napoleonic Civil Code.",
        where: "Austerlitz, Jena, Moscow, Waterloo",
        actors: ["Napoleon Bonaparte", "Tsar Alexander I", "Duke of Wellington"],
        whyItMattered: "Fundamentally reorganized modern civil jurisprudence across Europe and Latin America.",
        consequences: "Defeat at Waterloo (1815) led to the Bourbon Restoration under the Congress of Vienna.",
        claimType: "HISTORICAL FACT",
        sources: "Code Civil des Français (1804) / Musée de l'Armée"
      },
      {
        year: "1914–1918",
        title: "World War I & The Battle of Verdun",
        phase: "Total Industrial Warfare",
        whatHappened: "France bore the primary brunt of the Western Front against Imperial Germany, losing 1.4 million soldiers. The ferocious 10-month defense of Verdun (\"Ils ne passeront pas!\") became the national symbol of military endurance.",
        where: "Verdun, Marne, Somme",
        actors: ["Marshal Philippe Pétain", "Georges Clemenceau", "Marshal Ferdinand Foch"],
        whyItMattered: "Repelled German conquest and restored Alsace-Lorraine under the 1919 Treaty of Versailles.",
        consequences: "Profound demographic and economic devastation weakened interwar French security posture.",
        claimType: "HISTORICAL FACT",
        sources: "Service Historique de la Défense (SHD) / Treaty of Versailles 1919"
      },
      {
        year: "1940–1944",
        title: "Fall of France & The Free French Resistance",
        phase: "Occupation & Liberation",
        whatHappened: "Following Germany's Blitzkrieg in May 1940, General Charles de Gaulle issued his June 18 radio appeal from London, organizing Free French forces and domestic underground resistance until Paris was liberated in August 1944.",
        where: "London, Paris, Normandy, French Equatorial Africa",
        actors: ["General Charles de Gaulle", "Jean Moulin", "Philippe Pétain (Vichy)"],
        whyItMattered: "Ensured France's inclusion as one of the four Allied occupying powers in Berlin and secured a permanent seat on the UN Security Council.",
        consequences: "Delegitimized collaborationist Vichy governance and laid the foundation for post-war constitutional renewal.",
        claimType: "HISTORICAL FACT",
        sources: "Fondation Charles de Gaulle Archives / Ordre de la Libération"
      },
      {
        year: "1958",
        title: "Inception of the Fifth Republic & Gaullism",
        phase: "Gaullist Strategic Autonomy",
        whatHappened: "Amidst the Algerian War crisis, Charles de Gaulle returned to power, drafted the 1958 Constitution with strong presidential executive authority, tested France’s first atomic bomb (1960), and withdrew France from NATO's integrated military command in 1966.",
        where: "Paris, Reggane (Algerian Sahara)",
        actors: ["President Charles de Gaulle", "Michel Debré"],
        whyItMattered: "Established France’s permanent foreign policy tradition of 'Strategic Autonomy' and independent nuclear deterrence.",
        consequences: "Created the stable Fifth Republic presidential system that governs France today.",
        claimType: "HISTORICAL FACT",
        sources: "Constitution de la République Française (1958) / CEA Nuclear Archives"
      }
    ],
    politicalSystem: {
      type: "Semi-Presidential Constitutional Republic",
      constitution: "1958 Constitution of the Fifth Republic",
      branches: [
        { name: "President of the Republic", role: "Head of State (Emmanuel Macron); supreme commander of armed forces, controls nuclear release, sets foreign policy." },
        { name: "Prime Minister & Government", role: "Head of Government (Michel Barnier); directs internal administration and answers to parliament." },
        { name: "National Assembly", role: "577 deputies elected by two-round voting; votes on budgets and can pass motions of no-confidence." },
        { name: "Senate", role: "348 senators indirectly elected representing local territorial communities." },
        { name: "Constitutional Council", role: "Judicial review of statutes ensuring compliance with constitutional principles." }
      ],
      currentLeadership: {
        headOfState: "President Emmanuel Macron (Mandate to 2027)",
        headOfGovernment: "Prime Minister Michel Barnier",
        foreignMinister: "Jean-Noël Barrot",
        defenseMinister: "Sébastien Lecornu"
      },
      rulingParty: "Centrist Presidential Coalition (Ensemble / Renaissance coalition governing without an absolute majority)",
      oppositionParties: [
        { name: "National Rally (RN)", seats: "126+ seats", leader: "Marine Le Pen / Jordan Bardella", stance: "Right-wing nationalist, anti-immigration, Eurosceptic" },
        { name: "New Popular Front (NFP / LFI / PS / Greens)", seats: "190+ seats", leader: "Jean-Luc Mélenchon / Olivier Faure", stance: "Left-wing alliance, wealth redistribution, welfare" },
        { name: "The Republicans (LR)", seats: "47 seats", stance: "Traditional center-right Gaullist conservatism" }
      ],
      parliamentDetails: "Bicameral Parliament: National Assembly (577 seats) and Senate (348 seats). Currently operates in a fractured tri-polar parliamentary configuration.",
      recentElections: "June–July 2024 Snap Legislative Election: Resulted in a hung parliament divided between the left-wing NFP, centrist Ensemble, and right-wing RN. Next Presidential election: April 2027.",
      domesticDevelopments: [
        { title: "Military Planning Law 2024–2030 (LPM)", claimType: "VERIFIED FACT", desc: "Historic €413 Billion defense budget authorization to modernize Force de Frappe, Rafale F4/F5, and space defense." },
        { title: "Nuclear Reactor Renaissance", claimType: "VERIFIED FACT", desc: "Commitment to construct 6 to 14 next-generation EPR2 nuclear power reactors to secure energy independence." }
      ],
      currentIssues: [
        { title: "Parliamentary Coalition Instability", claimType: "ANALYSIS", desc: "Governing without an absolute majority requires precarious cross-party compromises to pass annual budgets." },
        { title: "Re-calibrating Sahel & African Security Posture", claimType: "ANALYSIS", desc: "Redeploying French military bases from Mali, Niger, and Burkina Faso toward Chad, Senegal, and maritime hubs." }
      ],
      policyDebates: [
        { topic: "European Strategic Autonomy vs US Alignment", desc: "France pushes for independent European defense industrial capabilities versus Eastern European preference for direct NATO/US dependence." },
        { topic: "Pension & Fiscal Deficit Controls", desc: "Balancing strict EU deficit limits (below 3% of GDP) against domestic demands to lower the retirement age." }
      ],
      institutions: [
        { name: "Élysée Palace General Secretariat", role: "Apex executive nerve center formulating defense, nuclear, and diplomatic directives." },
        { name: "DGSE (General Directorate for External Security)", role: "Foreign intelligence and clandestine operations agency." },
        { name: "CEA (Atomic Energy Commission)", role: "Oversees nuclear warhead design and military propulsion technology." }
      ],
      foreignPolicyDoctrine: "European Strategic Autonomy, defense of multilateral rule of law, nuclear independence, and active maritime posture across the Indo-Pacific."
    },
    geographyBorders: {
      landArea: "643,801 km² total (Metropolitan: 551,695 km² - Largest nation in the European Union)",
      location: "Western Europe, bordered by the Atlantic Ocean, English Channel, and Mediterranean Sea",
      continent: "Europe",
      latRange: "41° N to 51° N",
      lngRange: "5° W to 10° E",
      topography: "Low-lying agricultural plains in the north and west; mountainous perimeters along the Pyrenees, Alps, Jura, and Vosges.",
      rivers: [
        "Loire River (1,006 km - Longest river entirely in France)",
        "Seine River (777 km - Navigable commercial artery through Paris to Le Havre)",
        "Rhône River (813 km - Heavy hydroelectric and nuclear cooling corridor draining into Mediterranean)",
        "Garonne & Rhine (Border river with Germany)"
      ],
      mountains: [
        "Mont Blanc (4,809 m - Highest peak in the Alps and Western Europe)",
        "Pyrenees Mountains (Natural border barrier with Spain)",
        "Massif Central (Ancient volcanic plateau in south-central France)"
      ],
      seas: [
        "Mediterranean Sea (Southern maritime coastline; host to Toulon naval base)",
        "Atlantic Ocean / Bay of Biscay (Western oceanic approaches; Brest nuclear submarine base)",
        "English Channel (Separates northern France from the UK)"
      ],
      majorOceans: ["North Atlantic Ocean", "Indian Ocean & Pacific Ocean (via overseas departments)"],
      coastline: "4,853 km (Metropolitan coastline; 10,000+ km including overseas territories)",
      climates: [
        "Oceanic (Western plains; mild and humid)",
        "Mediterranean (Southern coast; hot, dry summers and mild winters)",
        "Continental / Alpine (Eastern borders and mountain ranges)"
      ],
      landBorders: [
        { country: "Germany", id: "DEU", borderLength: "448 km", region: "Rhine Frontier", status: "Open Schengen Frontier / Core EU Axis", strategicContext: "Historic frontier of three major wars; today the central Franco-German political and economic engine of the EU." },
        { country: "Spain", id: "ESP", borderLength: "656 km", region: "Pyrenees Crest", status: "Open Schengen Frontier", strategicContext: "Delimited along the Pyrenean crest from Bay of Biscay to Mediterranean." },
        { country: "Belgium", id: "BEL", borderLength: "620 km", region: "Northern Lowlands", status: "Open Schengen Frontier", strategicContext: "Flat northern plain historically vulnerable to armored advance." },
        { country: "Switzerland", id: "CHE", borderLength: "573 km", region: "Jura & Alps", status: "Schengen Border with Customs Checks", strategicContext: "Major cross-border labor commuting corridor around Geneva and Basel." },
        { country: "Italy", id: "ITA", borderLength: "488 km", region: "Alpine Frontier", status: "Open Schengen Frontier", strategicContext: "High Alpine tunnels (Mont Blanc and Fréjus) anchoring trade." },
        { country: "Brazil", id: "BRA", borderLength: "730 km", region: "French Guiana (South America)", status: "EU Sovereign Border in Amazon", strategicContext: "France's longest land border is with Brazil in French Guiana, protecting the Guiana Space Centre at Kourou." }
      ],
      maritimeBorders: [
        { country: "United Kingdom", id: "GBR", boundary: "English Channel and Dover Strait" }
      ],
      majorIslands: [
        "Corsica (Mediterranean island department)",
        "Réunion & Mayotte (Indian Ocean)",
        "New Caledonia & French Polynesia (Pacific Ocean)",
        "Guadeloupe & Martinique (Caribbean)"
      ],
      strategicGeography: "Unique bi-continental geography commanding both Atlantic and Mediterranean coastlines, with sovereign archipelagos ensuring a permanent military and naval footprint across the Indo-Pacific."
    },
    economy: {
      gdpNominal: "$3.13 Trillion (7th largest globally, IMF 2024)",
      gdpPPP: "$3.87 Trillion (World Bank PPP)",
      gdpPerCapita: "$46,300 Nominal / $58,800 PPP",
      gdpGrowth: "+1.1% (2024 IMF estimate)",
      currency: "Euro (EUR / €)",
      majorIndustries: [
        "Aerospace & Defense (Airbus, Dassault Aviation, Safran, Thales)",
        "Civil Nuclear Power (EDF - generates ~70% of national electricity)",
        "Luxury Goods & Cosmetics (LVMH, L'Oréal, Hermès, Kering)",
        "Agriculture & Wine (World's #1 exporter of premium wines and top EU agricultural producer)",
        "Automotive & Rail Transport (Renault, Stellantis, Alstom TGV)",
        "Pharmaceuticals & Healthcare (Sanofi)"
      ],
      majorExports: [
        "Aerospace Aircraft & Spacecraft Equipment ($60B+)",
        "Pharmaceuticals & Vaccines ($38B)",
        "Wines, Spirits & Beverages ($22B)",
        "Automobiles & Automotive Components ($30B)",
        "Luxury Fashion & Perfumes ($35B)",
        "Military Hardware (Rafale fighters, naval frigates, Caesar artillery)"
      ],
      majorImports: [
        "Crude Petroleum & Natural Gas",
        "Electronics & Semiconductor Components",
        "Automobiles & Mechanical Machinery",
        "Chemicals & Plastics"
      ],
      majorTradePartners: [
        { country: "Germany", share: "Largest single trade partner (~15% of trade)" },
        { country: "United States", share: "2nd largest export market ($55B+)" },
        { country: "Italy", share: "Major Mediterranean industrial partner" },
        { country: "India", share: "Rapidly expanding strategic trade and defense customer ($15B+)" }
      ],
      energyPosition: "Nuclear Energy Superpower: 56 commercial nuclear reactors generate ~70% of France’s electricity, making it the world's largest net exporter of low-carbon electricity and immune to gas supply shocks.",
      naturalResources: "Arable agricultural farmland (largest in EU), bauxite, uranium processing, hydroelectric potential, timber, and coastal wind energy.",
      tradeOrgs: [
        "European Union (EU Founding Member)",
        "Eurozone (Founding Member)",
        "World Trade Organization (WTO)",
        "Group of Seven (G7)",
        "Group of Twenty (G20)",
        "OECD"
      ],
      economicStrategicImportance: "Anchors the European aerospace and defense manufacturing supply chain (Airbus headquarters in Toulouse; Dassault Rafale production; Arianespace space launch).",
      indiaEconomicConnection: "Premier strategic partner in defense technology. India procured 36 Dassault Rafale fighters for the Indian Air Force and selected 26 Rafale-M carrier fighters and 3 additional Scorpène-class submarines for the Indian Navy. Co-development of next-generation jet engines (Safran with DRDO) and joint space observation initiatives with ISRO."
    },
    military: {
      expenditure: "$53.6 Billion (2.05% of GDP, 2024 NATO standard; expanding under LPM 2024–30)",
      personnel: {
        active: "205,000 active duty military personnel (Army, Navy, Air & Space Force, Gendarmerie)",
        reserves: "41,000 operational reserves",
        conscription: "All-volunteer professional forces"
      },
      doctrine: "Strict national nuclear deterrence (Force de Frappe); Strategic Autonomy; expeditionary power projection; leadership of European defense coalitions.",
      nuclearStockpile: "Approx. 290 deployed nuclear warheads across maritime (SSBN) and airborne (ASMP-A) components.",
      defenseIndustry: "Dassault Aviation (Rafale), Naval Group (submarines and frigates), MBDA (missile systems), Nexter/KNDS (armored vehicles & artillery), Thales (radars & avionics), Safran (aero-engines).",
      majorDomesticSystems: [
        "Triomphant-class & SNLE 3G Nuclear Ballistic Missile Submarines (SSBN)",
        "Suffren-class (Barracuda) Nuclear Attack Submarines (SSN)",
        "Charles de Gaulle Nuclear-Powered Aircraft Carrier (Catapult-equipped)",
        "Dassault Rafale C/B/M Multi-Role Omnirole Fighters",
        "Caesar 155mm Wheeled Truck-Mounted Howitzers",
        "Leclerc XLR Main Battle Tanks",
        "M51.3 Submarine-Launched Intercontinental Ballistic Missiles",
        "Aster 15 / Aster 30 SAMP/T (MAMBA) Air Defense Systems"
      ],
      majorImports: ["E-2D Advanced Hawkeye Airborne Early Warning (US/Northrop Grumman)"],
      majorExports: ["Dassault Rafale combat aircraft (India, UAE, Egypt, Greece, Indonesia), Caesar artillery systems, Scorpène-class submarines, FDI frigates"],
      militaryAlliances: ["NATO (Founding Member)", "European Intervention Initiative (EI2)", "Lancaster House Treaties (UK)", "Indo-Pacific Trilateral with India and UAE"],
      categories: [
        {
          name: "STRATEGIC NUCLEAR FORCES (FORCE DE FRAPPE)",
          desc: "Independent submarine and airborne nuclear strike triads.",
          systems: [
            { name: "M51 SLBM", type: "Submarine-Launched Ballistic Missile", origin: "France (ArianeGroup)", status: "CONFIRMED", quantity: "16 missiles per SSBN", role: "10,000 km range missile carrying 6 to 10 TNO thermonuclear warheads." },
            { name: "ASMP-A / ASN4G", type: "Air-Launched Nuclear Supersonic Cruise Missile", origin: "France (MBDA)", status: "CONFIRMED", quantity: "Carried by Rafale B/M", role: "Mach 3 standoff nuclear delivery system ensuring pre-strategic warning strike." }
          ]
        },
        {
          name: "BLUE-WATER NAVAL FLEET",
          desc: "Only catapult-assisted nuclear aircraft carrier outside the United States Navy.",
          systems: [
            { name: "Charles de Gaulle (R91)", type: "Nuclear-Powered Aircraft Carrier", origin: "France (Naval Group)", status: "CONFIRMED", quantity: "1 nuclear carrier in service", role: "Operates Rafale Marine fighters and Hawkeye AEW aircraft globally." },
            { name: "Suffren-class (Barracuda)", type: "Nuclear-Powered Attack Submarine (SSN)", origin: "France (Naval Group)", status: "CONFIRMED", quantity: "3 commissioned (3 building)", role: "Equipped with naval cruise missiles (MdCN) with 1,000 km land-attack range." }
          ]
        }
      ]
    },
    relations: {
      main: [
        { id: "FRA_IND", country: "India", flag: "🇮🇳", status: "Comprehensive Strategic Defense Partner", color: "#10b981", note: "Rafale supply, naval submarine joint construction, joint Indian Ocean maritime patrol." },
        { id: "FRA_DEU", country: "Germany", flag: "🇩🇪", status: "Franco-German European Core Axis", color: "#3b82f6", note: "Joint development of future combat aircraft (FCAS) and main ground combat tank (MGCS)." },
        { id: "FRA_USA", country: "United States", flag: "🇺🇸", status: "Oldest Ally & NATO Partner", color: "#3b82f6", note: "Deep counter-terrorism and intelligence sharing, with tactical disputes over AUKUS." },
        { id: "FRA_UAE", country: "United Arab Emirates", flag: "🇦🇪", status: "Forward Strategic Ally", color: "#10b981", note: "Hosts French permanent military naval and air base in Abu Dhabi (Camp de la Paix)." }
      ],
      searchable: []
    },
    strategicLocations: [
      { name: "Île Longue Naval Submarine Base (Brest)", type: "Nuclear SSBN Command Base", coords: "48.31° N, 4.50° W", significance: "Impregnable underground naval citadel sheltering France’s 4 Triomphant-class nuclear ballistic missile submarines." },
      { name: "Toulon Naval Base", type: "Mediterranean Naval Fleet HQ", coords: "43.12° N, 5.92° E", significance: "Home base for aircraft carrier Charles de Gaulle, amphibious assault ships, and nuclear attack submarines." },
      { name: "Guiana Space Centre (Kourou, French Guiana)", type: "European Spaceport", coords: "5.23° N, 52.77° W", significance: "Primary orbital launch site for Ariane 6 rockets near the equator, giving maximum orbital velocity boost." },
      { name: "Djibouti Forward Base", type: "Red Sea Chokepoint Air & Naval Base", coords: "11.58° N, 43.14° E", significance: "Secures French and allied maritime traffic through the Bab el-Mandeb strait." }
    ],
    currentTensions: [
      {
        title: "Russian Influence Operations & Mercenary Presence in West Africa",
        severity: "Elevated Geopolitical Tension",
        color: "#f97316",
        desc: "Competition with Russian Africa Corps forces in the Sahel following coups in Mali, Burkina Faso, and Niger."
      }
    ],
    keyEvents: [
      { title: "1789 French Revolution & Republic Inception", category: "Democratic Milestone", date: "July 14, 1789" },
      { title: "1958 Establishment of the Fifth Republic", category: "Constitutional Order", date: "October 4, 1958" },
      { title: "1960 Gerboise Bleue First Atomic Test", category: "Nuclear Independence", date: "February 13, 1960" }
    ],
    indiaImpact: {
      headline: "France as India’s Most Reliable and Unconditional Western Strategic Ally",
      points: [
        { title: "Unconditional Defense Technology Transfer", desc: "Unlike other Western nations, France never imposes political sanctions or end-user restrictions on weapons sales to India during border clashes." },
        { title: "Rafale Aerospace Foundation", desc: "Rafale fighters serve as the apex deep-strike and nuclear-capable delivery platform for the Indian Air Force and Navy." },
        { title: "Joint Indian Ocean Maritime Domain Awareness", desc: "Reciprocal logistics pact allows Indian Navy access to French naval installations in Réunion, monitoring southern Indian Ocean transit lanes." }
      ]
    }
  },

  // =========================================================================
  // GERMANY (DEU)
  // =========================================================================
  "DEU": {
    id: "DEU",
    name: "Germany",
    officialName: "Federal Republic of Germany (Bundesrepublik Deutschland)",
    commonName: "Germany",
    capital: "Berlin",
    capitalCoords: { lat: 52.5200, lng: 13.4050 },
    capitalAdmin: {
      role: "Capital of Germany & Seat of the Federal Government",
      political: "Reichstag (Bundestag), Federal Chancellery, Bundesrat, Federal President",
      geographic: "Located in northeastern Germany on the Spree River",
      strategic: "Political and economic decision-making center of the European Union"
    },
    region: "Europe",
    subregion: "Central Europe",
    flag: "🇩🇪",
    iso2: "de",
    isoCode: "DEU / 276",
    lat: 51.1657,
    lng: 10.4515,
    area: "357,592 km² (Rank: 62nd globally)",
    population: "84.7 Million (Largest population in the European Union)",
    politicalSystemType: "Federal Parliamentary Republic",
    currency: "Euro (EUR / €)",
    languages: "German (Official State Language)",
    timeZones: "Central European Time (UTC+1 / CEST UTC+2)",
    foundingInfo: "1871 (Unification under Bismarck); 1949 (Federal Republic established); October 3, 1990 (German Reunification)",
    tagline: "Economic Engine of Europe, Industrial Manufacturing Giant & Zeitenwende Power",
    overview: {
      beginner: "Germany is Europe's largest national economy and the third-largest economy in the world. It is the geographic and economic heart of the European Union, renowned for precision engineering, automotive manufacturing, and high-tech industrial machinery. Historically cautious about military power since World War II, Germany declared a historic defense transformation ('Zeitenwende') in 2022 to rebuild the Bundeswehr and lead European conventional deterrence.",
      advanced: "The Federal Republic operates a federal parliamentary system anchored by the Basic Law (Grundgesetz). Following the rupture of cheap Russian pipeline gas deliveries in 2022, Berlin rapidly diversified its energy architecture with mobile LNG terminals and expanded renewables. Under its 'Zeitenwende' policy, Germany established a €100 Billion special military fund to procure F-35A stealth jets and Arrow-3 missile defense systems, permanently deploying a combat brigade to Lithuania on NATO's eastern frontier."
    },
    history: [
      {
        year: "1871",
        title: "German Unification & The German Empire",
        phase: "Imperial Unification",
        whatHappened: "Following victory in the Franco-Prussian War, Chancellor Otto von Bismarck unified the independent German states into the German Empire at the Palace of Versailles, with King Wilhelm I crowned Kaiser.",
        where: "Versailles / Berlin",
        actors: ["Otto von Bismarck", "Kaiser Wilhelm I"],
        whyItMattered: "Created a massive new industrial and military great power in the center of Europe, completely disrupting the continental balance of power.",
        consequences: "Initiated rapid heavy industrialization and naval competition with Great Britain.",
        claimType: "HISTORICAL FACT",
        sources: "Deutsches Historisches Museum / Imperial Proclamation of 1871"
      },
      {
        year: "1914–1918",
        title: "World War I & Fall of the Hohenzollern Empire",
        phase: "Imperial Collapse",
        whatHappened: "Germany fought the Allied powers on two fronts. Following the failure of the 1918 Spring Offensive and the Kiel mutiny, Kaiser Wilhelm II abdicated, and the Weimar Republic was proclaimed.",
        where: "Western Front, Berlin",
        actors: ["Kaiser Wilhelm II", "General Paul von Hindenburg", "Friedrich Ebert"],
        whyItMattered: "Ended imperial rule and imposed the harsh reparations and territorial losses of the 1919 Treaty of Versailles.",
        consequences: "Severe hyperinflation, economic dislocation, and political polarization destabilized Weimar democracy.",
        claimType: "HISTORICAL FACT",
        sources: "Weimar Constitutional Records / Bundesarchiv"
      },
      {
        year: "1933–1945",
        title: "Nazi Dictatorship, Holocaust & Total Defeat in WWII",
        phase: "Totalitarian Catastrophe",
        whatHappened: "Adolf Hitler dismantled democratic institutions, initiated totalitarian fascist dictatorship, launched aggressive military conquests across Europe, and orchestrated the Holocaust (genocide of 6 million European Jews). Nazi Germany was unconditionally crushed in 1945 by the Soviet Red Army and Western Allies.",
        where: "Berlin, Nuremberg, Auschwitz, Stalingrad",
        actors: ["Adolf Hitler", "Allied Coalition Commanders"],
        whyItMattered: "The darkest catastrophe in modern German history, resulting in the partition of Germany and total national devastation.",
        consequences: "Germany was divided into four Allied occupation zones, leading to the Cold War split between West and East Germany.",
        claimType: "HISTORICAL FACT",
        sources: "Nuremberg Military Tribunal Records / Bundesarchiv Koblenz"
      },
      {
        year: "1949",
        title: "Creation of the Basic Law & The Economic Miracle (Wirtschaftswunder)",
        phase: "Democratic Rebirth",
        whatHappened: "The Parliamentary Council in Bonn adopted the Basic Law (Grundgesetz), creating the democratic Federal Republic of Germany (West Germany). Chancellor Konrad Adenauer anchored West Germany in the West (NATO, European Coal and Steel Community), fueling the miraculous post-war economic boom.",
        where: "Bonn",
        actors: ["Konrad Adenauer", "Ludwig Erhard", "Theodor Heuss"],
        whyItMattered: "Built a deeply rooted social market economy and federal democratic system dedicated to peace and European integration.",
        consequences: "Established West Germany as the economic anchor of Western Europe.",
        claimType: "HISTORICAL FACT",
        sources: "Grundgesetz für die Bundesrepublik Deutschland (1949)"
      },
      {
        year: "1989–1990",
        title: "Fall of the Berlin Wall & German Reunification",
        phase: "National Unity",
        whatHappened: "Mass peaceful protests across East Germany forced the opening of the Berlin Wall on November 9, 1989. Under Chancellor Helmut Kohl and the Two-Plus-Four Treaty with the WWII Allied powers, Germany was peacefully reunified on October 3, 1990.",
        where: "Berlin Wall, Leipzig, Bonn, Moscow",
        actors: ["Helmut Kohl", "Mikhail Gorbachev", "George H.W. Bush", "Hans-Dietrich Genscher"],
        whyItMattered: "Healed the division of Europe without bloodshed, ending the Cold War partition of the continent.",
        consequences: "Berlin was restored as federal capital; accelerated the creation of the European Union and Euro currency under the Maastricht Treaty.",
        claimType: "HISTORICAL FACT",
        sources: "Two-Plus-Four Treaty (1990) / German Federal Archives"
      },
      {
        year: "2022",
        title: "Zeitenwende: Historic Shift in Defense & Security Policy",
        phase: "Contemporary Strategic Realignment",
        whatHappened: "Following Russia’s military escalation in Ukraine, Chancellor Olaf Scholz delivered his historic 'Zeitenwende' (Turning Point) speech, establishing a €100B special defense fund, exceeding NATO's 2% GDP defense spending goal, and ending decades of energy dependence on Russian pipeline gas.",
        where: "Bundestag, Berlin",
        actors: ["Chancellor Olaf Scholz", "Defense Minister Boris Pistorius"],
        whyItMattered: "Reversed post-Cold War German pacifist policy, establishing Germany as a primary conventional military defense provider in Central Europe.",
        consequences: "Procured US F-35A stealth fighters for nuclear sharing; deployed permanent Bundeswehr combat brigade to Lithuania.",
        claimType: "CURRENT",
        sources: "Bundestag Plenarprotokoll 20/19 (Feb 27, 2022) / BMVg Strategy Papers"
      }
    ],
    politicalSystem: {
      type: "Federal Parliamentary Constitutional Republic",
      constitution: "Basic Law for the Federal Republic of Germany (Grundgesetz, 1949)",
      branches: [
        { name: "Federal Chancellor", role: "Head of Government (Olaf Scholz); sets the guidelines of government policy (Richtlinienkompetenz)." },
        { name: "Federal President", role: "Head of State (Frank-Walter Steinmeier); largely ceremonial role representing the nation and signing federal laws." },
        { name: "Bundestag (Federal Parliament)", role: "736 directly elected members passing federal legislation and electing the Chancellor." },
        { name: "Bundesrat (Federal Council)", role: "69 members representing the governments of the 16 Federal States (Länder), approving state-affecting laws." },
        { name: "Federal Constitutional Court (BVerfG)", role: "Karlsruhe-based apex judicial body safeguarding constitutional order and civil rights." }
      ],
      currentLeadership: {
        headOfState: "President Frank-Walter Steinmeier",
        headOfGovernment: "Chancellor Olaf Scholz",
        foreignMinister: "Annalena Baerbock",
        defenseMinister: "Boris Pistorius"
      },
      rulingParty: "Traffic Light Coalition (SPD, Greens, FDP; navigating minority governance and snap election preparations)",
      oppositionParties: [
        { name: "CDU/CSU", seats: "196 seats", leader: "Friedrich Merz", stance: "Center-right Christian democratic conservatism, pro-business, defense reinforcement" },
        { name: "Alternative for Germany (AfD)", seats: "77 seats", leader: "Alice Weidel / Tino Chrupalla", stance: "Right-wing populist, anti-immigration, Eurosceptic, pro-Russian energy" },
        { name: "Bündnis Sahra Wagenknecht (BSW)", seats: "10 seats", leader: "Sahra Wagenknecht", stance: "Left-wing economic conservatism, anti-NATO, anti-sanctions" },
        { name: "Die Linke", seats: "28 seats", stance: "Democratic socialist" }
      ],
      parliamentDetails: "Bicameral Federal Parliament: Bundestag (proportional representation with a 5% threshold) and Bundesrat (representing 16 Federal States).",
      recentElections: "September 2021 Federal Election. Snap federal elections scheduled for early 2025 following coalition budget disputes.",
      domesticDevelopments: [
        { title: "Permanent Brigade Lithuania Deployment", claimType: "VERIFIED FACT", desc: "First permanent foreign deployment of German combat troops (Panzerbrigade 45) since WWII." },
        { title: "LNG Import Infrastructure Speed", claimType: "VERIFIED FACT", desc: "Built operational coastal floating LNG terminals (Wilhelmshaven, Brunsbüttel) in record 10-month timeframe." }
      ],
      currentIssues: [
        { title: "Industrial Competitiveness & Energy Costs", claimType: "ANALYSIS", desc: "Chemical, automotive, and steel manufacturers facing elevated electricity prices following departure from cheap Russian gas." },
        { title: "Fiscal Debt Brake (Schuldenbremse) Dispute", claimType: "ANALYSIS", desc: "Constitutional limit restricting federal deficit to 0.35% of GDP constraining public infrastructure and military renewal." }
      ],
      policyDebates: [
        { topic: "Reforming the Constitutional Debt Brake", desc: "SPD and Greens advocate reforming the debt brake for infrastructure investments; CDU and FDP demand strict fiscal discipline." },
        { topic: "Military Conscription Re-Introduction", desc: "Defense Minister Pistorius proposing voluntary military service model inspired by Sweden to address Bundeswehr troop shortages." }
      ],
      institutions: [
        { name: "Federal Chancellery (Bundeskanzleramt)", role: "Executive coordination office directing federal ministries and security council." },
        { name: "BND (Federal Intelligence Service)", role: "Foreign intelligence agency monitoring international security risks." },
        { name: "Deutsche Bundesbank", role: "Central bank and core anchor of the European Central Bank (ECB) system." }
      ],
      foreignPolicyDoctrine: "Commitment to European integration, NATO transatlantic alliance, Zeitenwende conventional deterrence, and multilateral climate action."
    },
    geographyBorders: {
      landArea: "357,592 km² (Rank: 62nd globally)",
      location: "Central Europe, bounded by the North and Baltic Seas in the north and the Alps in the south",
      continent: "Europe",
      latRange: "47° N to 55° N",
      lngRange: "5° E to 15° E",
      topography: "North German Lowland plains; central forested uplands and river valleys; Bavarian Alpine foothills and peaks in the south.",
      rivers: [
        "Rhine River (865 km in Germany - Europe's most vital commercial inland waterway)",
        "Danube River (2,857 km total - Rises in Black Forest, flows eastward across Central and Eastern Europe)",
        "Elbe River (727 km in Germany - Navigable artery through Dresden, Magdeburg, and Hamburg to North Sea)",
        "Oder River (Forms northern international boundary with Poland)"
      ],
      mountains: [
        "Zugspitze (2,962 m - Highest peak in Germany, Bavarian Alps)",
        "Black Forest (Schwarzwald - Dense southwestern mountain range)",
        "Harz Mountains (Central German upland plateau)"
      ],
      seas: [
        "North Sea (Western maritime coast; deep-water ports of Hamburg and Bremerhaven)",
        "Baltic Sea (Eastern maritime coastline; naval base of Rostock and Kiel Canal)"
      ],
      majorOceans: ["Atlantic Ocean (via North Sea and English Channel)"],
      coastline: "2,389 km (Indented coastline with Wadden Sea tidal flats and Baltic bays)",
      climates: [
        "Temperate Maritime to Continental (Cfb - Moderated by prevailing westerly winds; warm summers and mild cloudy winters)"
      ],
      landBorders: [
        { country: "Poland", id: "POL", borderLength: "467 km", region: "Oder-Neisse Frontier", status: "Open Schengen Frontier", strategicContext: "Historic frontier anchored by the Oder and Neisse rivers; major industrial trade corridor." },
        { country: "Czech Republic", id: "CZE", borderLength: "815 km", region: "Bohemian Forest", status: "Open Schengen Frontier", strategicContext: "Crosses the Ore Mountains; integrated automotive supply chain." },
        { country: "Austria", id: "AUT", borderLength: "784 km", region: "Alpine Frontier", status: "Open Schengen Frontier (Occasional checks)", strategicContext: "Major transit route for European freight crossing the Brenner Pass." },
        { country: "France", id: "FRA", borderLength: "448 km", region: "Rhine Frontier", status: "Open Schengen Frontier / Core EU Axis", strategicContext: "Franco-German economic and political engine of Europe." },
        { country: "Netherlands", id: "NLD", borderLength: "577 km", region: "Lowland Frontier", status: "Open Schengen Frontier", strategicContext: "Deeply integrated joint army corps; freight conduit to Port of Rotterdam." },
        { country: "Switzerland", id: "CHE", borderLength: "334 km", region: "Lake Constance / Rhine", status: "Schengen with Customs Checks", strategicContext: "High-value cross-border financial and manufacturing trade." },
        { country: "Belgium", id: "BEL", borderLength: "167 km", region: "Ardennes", status: "Open Schengen Frontier", strategicContext: "Direct highway link to Brussels European capital." },
        { country: "Denmark", id: "DNK", borderLength: "68 km", region: "Jutland Peninsula", status: "Open Schengen Frontier", strategicContext: "Sole land connection between mainland Europe and Scandinavia." },
        { country: "Luxembourg", id: "LUX", borderLength: "138 km", region: "Moselle River", status: "Open Schengen Frontier", strategicContext: "Financial and commuter corridor." }
      ],
      maritimeBorders: [
        { country: "Sweden & United Kingdom", id: "SWE", boundary: "North Sea and Baltic Sea continental shelf median lines." }
      ],
      majorIslands: [
        "Rügen (Largest island in Germany, Baltic Sea)",
        "Sylt (North Sea Frisian island)",
        "Fehmarn & Usedom (Baltic coastal islands)"
      ],
      strategicGeography: "Commands the central transit crossroads of Europe, bordering 9 sovereign nations and controlling the Kiel Canal—the world's most frequently used artificial maritime shipping shortcut between the North and Baltic Seas."
    },
    economy: {
      gdpNominal: "$4.59 Trillion (3rd largest globally, IMF 2024)",
      gdpPPP: "$5.68 Trillion (World Bank PPP)",
      gdpPerCapita: "$54,300 Nominal / $67,200 PPP",
      gdpGrowth: "+0.2% (2024 IMF estimate)",
      currency: "Euro (EUR / €)",
      majorIndustries: [
        "Automotive Engineering (Volkswagen, Mercedes-Benz, BMW, Porsche)",
        "Industrial Machinery & Precision Robotics (Siemens, Bosch, Festo)",
        "Chemicals & Pharmaceuticals (BASF, Bayer, Merck)",
        "Precision Metallurgy & Renewable Energy Technology",
        "Mittelstand (Vast backbone of specialized small-to-medium manufacturing global market leaders)"
      ],
      majorExports: [
        "Motor Vehicles & Automotive Parts ($260B+)",
        "Industrial Machinery & Equipment ($220B+)",
        "Chemical Products & Plastics ($140B+)",
        "Electronics & Optical Products ($125B+)",
        "Pharmaceutical Products ($110B+)"
      ],
      majorImports: [
        "Data Processing Equipment & Consumer Electronics",
        "Crude Oil, Liquefied Natural Gas & Electricity",
        "Motor Vehicles & Transportation Components",
        "Chemicals and Agricultural Commodities"
      ],
      majorTradePartners: [
        { country: "United States", share: "Largest export market ($160B+)" },
        { country: "China", share: "Largest bilateral trading partner ($250B+ overall)" },
        { country: "France", share: "Primary European partner" },
        { country: "Netherlands", share: "Primary logistics port gateway" },
        { country: "India", share: "High-priority strategic economic partner ($30B+)" }
      ],
      energyPosition: "Energiewende: Phased out nuclear power in 2023; expanded solar and wind to generate >55% of national electricity; built rapid floating LNG terminals to replace Nord Stream Russian gas.",
      naturalResources: "Lignite coal, potash, salt, silica sand, timber, and high offshore wind power potential.",
      tradeOrgs: [
        "European Union (EU Core Member)",
        "Eurozone (Anchor Member)",
        "World Trade Organization (WTO)",
        "Group of Seven (G7)",
        "Group of Twenty (G20)",
        "OECD"
      ],
      economicStrategicImportance: "The industrial manufacturing backbone of Europe, producing advanced machine tools, semiconductors, and precision robotics that power global factories.",
      indiaEconomicConnection: "Bilateral trade reached €26+ Billion in 2023–24. Over 2,000 German companies operate in India, employing over 500,000 workers (Siemens, Bosch, Volkswagen, SAP). In October 2024, Chancellor Scholz visited New Delhi with Cabinet ministers for the 7th Inter-Governmental Consultations, launching the 'Focus on India' strategy to attract skilled Indian tech talent and co-develop green hydrogen and defense tech."
    },
    military: {
      expenditure: "$72.1 Billion (2.12% of GDP, 2024 NATO standard; augmented by the €100B Sondervermögen fund)",
      personnel: {
        active: "181,500 active military personnel (Heer, Marine, Luftwaffe, Cyber & Information Space)",
        reserves: "34,000 operational reserves",
        conscription: "Suspended in 2011; professional volunteer armed forces with voluntary service reform under review"
      },
      doctrine: "Zeitenwende: Forward-deployed allied defense anchored in NATO Article 5; collective defense of Eastern Flank; leadership of the European Sky Shield Initiative (ESSI); nuclear sharing role with US B61 bombs.",
      nuclearStockpile: "Non-nuclear state under 1990 Two-Plus-Four Treaty; participates in NATO nuclear sharing, hosting ~20 US B61 nuclear gravity bombs at Büchel Air Base delivered by German combat jets.",
      defenseIndustry: "Rheinmetall (world's leading ammunition and armor manufacturer), Krauss-Maffei Wegmann / KNDS (Leopard 2 tanks), Diehl Defence (IRIS-T air defense), ThyssenKrupp Marine Systems (TKMS submarines), Hensoldt (sensors).",
      majorDomesticSystems: [
        "Leopard 2A7V / Leopard 2A8 Main Battle Tanks",
        "Puma Infantry Fighting Vehicles & Boxer 8x8 Armored Vehicles",
        "PzH 2000 155mm Self-Propelled Howitzers",
        "IRIS-T SLM Medium-Range Air Defense Systems",
        "Type 212A Air-Independent Propulsion (AIP) Fuel-Cell Submarines",
        "Eurofighter Typhoon Multi-Role Combat Aircraft",
        "F-35A Lightning II Stealth Fighters (Purchased for nuclear sharing role)"
      ],
      majorImports: ["F-35A Lightning II (US/Lockheed Martin)", "Arrow 3 Exo-Atmospheric Missile Defense (Israel/IAI)", "CH-47F Chinook Heavy Helicopters (US/Boeing)"],
      majorExports: ["Leopard 2 tanks (NATO allies), Type 214 submarines, IRIS-T air defense systems, Boxer armored vehicles, naval frigates"],
      militaryAlliances: ["NATO (Founding member of European defense pillar)", "European Sky Shield Initiative (ESSI - Initiated by Germany with 21 nations)", "PESCO"],
      categories: [
        {
          name: "AIR DEFENSE & ARROW-3 SHIELD",
          desc: "Lead architect of the European Sky Shield Initiative (ESSI).",
          systems: [
            { name: "Arrow 3 System", type: "Exo-Atmospheric Hypersonic Ballistic Interceptor", origin: "Israel/Germany", status: "CONFIRMED (Induction)", quantity: "Procured under €4B contract", role: "Intercepts ballistic missiles outside the Earth's atmosphere up to 2,400 km range." },
            { name: "IRIS-T SLM", type: "Medium-Range Surface-to-Air Missile", origin: "Germany (Diehl)", status: "CONFIRMED", quantity: "Deployed and combat-proven", role: "Destroys cruise missiles, drones, and aircraft at 40 km range with 360-degree radar tracking." }
          ]
        },
        {
          name: "ARMORED GROUND FORCES (HEER)",
          desc: "World benchmark in heavy armored combat vehicles and artillery.",
          systems: [
            { name: "Leopard 2A8", type: "Main Battle Tank", origin: "Germany (KNDS/Rheinmetall)", status: "CONFIRMED", quantity: "In production for Germany and European partners", role: "Fitted with Trophy Active Protection System, 120mm L55A1 smoothbore gun, and digital fire control." },
            { name: "PzH 2000", type: "155mm Armored Self-Propelled Howitzer", origin: "Germany (KNDS)", status: "CONFIRMED", quantity: "Over 100 in service", role: "Fires up to 10 rounds per minute with automated autoloader out to 54 km with precision shells." }
          ]
        }
      ]
    },
    relations: {
      main: [
        { id: "DEU_FRA", country: "France", flag: "🇫🇷", status: "Core European Union Engine", color: "#3b82f6", note: "Treaty of Aachen; joint defense and European economic policy coordination." },
        { id: "DEU_USA", country: "United States", flag: "🇺🇸", status: "Primary Transatlantic Security Guarantor", color: "#3b82f6", note: "Hosts largest US military troop presence in Europe (Ramstein Air Base, EUCOM HQ)." },
        { id: "DEU_POL", country: "Poland", flag: "🇵🇱", status: "Eastern Flank NATO Partner", color: "#3b82f6", note: "Integrated energy grids and supply chain, balancing historical reconciliation." },
        { id: "DEU_IND", country: "India", flag: "🇮🇳", status: "Strategic Technology & Trade Partner", color: "#10b981", note: "Focus on India strategy, green hydrogen partnership, and skilled immigration." }
      ],
      searchable: []
    },
    strategicLocations: [
      { name: "Ramstein Air Base", type: "US Air Forces in Europe HQ", coords: "49.44° N, 7.60° E", significance: "Largest American military community outside the US; central airlift and command hub for Middle East and European operations." },
      { name: "Wilhelmshaven Energy Terminal", type: "Deepwater LNG & Port Hub", coords: "53.52° N, 8.13° E", significance: "Germany's primary deep-water naval port and critical floating LNG import terminal." },
      { name: "Kiel Canal (Nord-Ostsee-Kanal)", type: "Strategic Maritime Shortcut", coords: "54.33° N, 9.85° E", significance: "98-km artificial canal linking North Sea to Baltic Sea, bypassing Jutland peninsula." },
      { name: "Frankfurt Financial District (Bankenviertel)", type: "European Central Bank HQ", coords: "50.11° N, 8.68° E", significance: "Monetary capital of the Eurozone managing currency stability for 350 million Europeans." }
    ],
    currentTensions: [
      {
        title: "Baltic Sea Critical Undersea Infrastructure Sabotage Threats",
        severity: "Elevated Maritime Alert",
        color: "#f97316",
        desc: "Protecting undersea telecommunications cables and gas pipelines following suspicious severed cables in the Baltic Sea."
      }
    ],
    keyEvents: [
      { title: "1989 Fall of the Berlin Wall", category: "Democratic Rebirth", date: "November 9, 1989" },
      { title: "1990 Reunification of Germany", category: "National Unity", date: "October 3, 1990" },
      { title: "2022 Zeitenwende Defense Speech", category: "Strategic Realignment", date: "February 27, 2022" }
    ],
    indiaImpact: {
      headline: "Germany’s 'Focus on India' Strategy: High-Tech Manufacturing & Defense",
      points: [
        { title: "'Focus on India' Federal Strategy (2024)", desc: "Adopted by the German cabinet to deepen defense procurement, green technology partnerships, and speed up work visas for Indian STEM specialists." },
        { title: "Submarine Technology Proposal (P-75I)", desc: "Germany's TKMS partnering with Mazagon Dock Shipbuilders (MDL) for India's $5.5B Project-75I advanced AIP submarine tender." },
        { title: "Green & Sustainable Development Partnership", desc: "Germany committed €10 Billion in concessional green funding to support India’s renewable energy and clean mobility targets." }
      ]
    }
  },

  // =========================================================================
  // IRAN (IRN)
  // =========================================================================
  "IRN": {
    id: "IRN",
    name: "Iran",
    officialName: "Islamic Republic of Iran (جمهوری اسلامی ایران)",
    commonName: "Iran",
    capital: "Tehran",
    capitalCoords: { lat: 35.6892, lng: 51.3890 },
    capitalAdmin: {
      role: "Capital of Iran & Seat of the Supreme Leader",
      political: "Beit-e Rahbari (Office of Supreme Leader), President, Majlis (Parliament), Guardian Council",
      geographic: "Situated at the foot of the Alborz mountain range in northern Iran",
      strategic: "Command and control center for the Islamic Revolutionary Guard Corps (IRGC) and ballistic missile program"
    },
    region: "Middle East",
    subregion: "Western Asia",
    flag: "🇮🇷",
    iso2: "ir",
    isoCode: "IRN / 364",
    lat: 32.4279,
    lng: 53.6880,
    area: "1,648,195 km² (Rank: 17th globally; 2nd largest in Middle East)",
    population: "89.2 Million (2024 UN estimate)",
    politicalSystemType: "Theocratic-Republican Hybrid (Islamic Republic under Velayat-e Faqih)",
    currency: "Iranian Rial (IRR / ﷼)",
    languages: "Persian / Farsi (Official State Language); Azerbaijani, Kurdish, Luri, Arabic, Balochi",
    timeZones: "Iran Standard Time (UTC+3:30)",
    foundingInfo: "550 BC (Achaemenid Empire under Cyrus the Great); 1501 (Safavid Empire); April 1, 1979 (Islamic Republic proclaimed)",
    tagline: "Guardian of the Persian Gulf, Leader of the 'Axis of Resistance' & Uranium Enrichment Power",
    overview: {
      beginner: "Iran is an ancient civilization and energy-rich powerhouse located at the strategic crossroads of the Middle East, Central Asia, and the Caucasus. Following the 1979 Islamic Revolution, Iran transformed into an Islamic Republic headed by a Supreme Leader. It commands the northern coast of the Strait of Hormuz—the waterway through which one-fifth of the world’s petroleum passes—and wields broad influence through allied regional non-state groups known as the 'Axis of Resistance.'",
      advanced: "The Islamic Republic operates an asymmetric deterrence doctrine built upon the Middle East's largest ballistic and cruise missile arsenal, thousands of long-range loitering suicide drones (Shahed-136 series), and naval swarm/mine-warfare capabilities designed to close the Strait of Hormuz. Iran operates an advanced civil-military nuclear fuel cycle, enriching uranium to 60% purity at deeply fortified underground facilities (Fordow and Natanz). Confronting US sanctions, Tehran has consolidated a comprehensive strategic partnership with Russia and China and gained formal accession to BRICS and the SCO."
    },
    history: [
      {
        year: "550 BC",
        title: "Cyrus the Great & The Achaemenid Empire",
        phase: "Ancient Persian Superpower",
        whatHappened: "Cyrus the Great unified the Medes and Persians, establishing the Achaemenid Empire—the largest empire in ancient history stretching from the Balkans to the Indus Valley.",
        where: "Pasargadae, Persepolis, Babylon",
        actors: ["Cyrus the Great", "Darius I"],
        whyItMattered: "Created the Cyrus Cylinder (earliest charter of human rights and religious tolerance) and pioneered the Royal Road and imperial satrapy governance.",
        consequences: "Cemented Iranian national cultural identity and linguistic pride for over 2,500 years.",
        claimType: "HISTORICAL FACT",
        sources: "British Museum Cyrus Cylinder / Persepolis Archaeological Archives"
      },
      {
        year: "1501",
        title: "Safavid Empire & Adoption of Twelver Shi'ism",
        phase: "Modern National Rebirth",
        whatHappened: "Shah Ismail I founded the Safavid dynasty, reunifying the Iranian plateau and establishing Twelver Shi'a Islam as the official state religion.",
        where: "Tabriz, Isfahan",
        actors: ["Shah Ismail I", "Shah Abbas the Great"],
        whyItMattered: "Differentiated Iran religious-politically from its Sunni Ottoman and Mughal rivals, shaping the spiritual architecture of modern Iran.",
        consequences: "Isfahan became a glorious world architectural capital (\"Isfahan is half the world\").",
        claimType: "HISTORICAL FACT",
        sources: "National Library of Iran / Cambridge History of Iran"
      },
      {
        year: "1951–1953",
        title: "Mosaddegh Oil Nationalization & CIA-MI6 Coup (Operation Ajax)",
        phase: "Nationalist Struggle & Foreign Intervention",
        whatHappened: "Democratically elected Prime Minister Mohammad Mosaddegh nationalized Iran’s oil industry from British control (Anglo-Iranian Oil Company). In August 1953, the US CIA and British MI6 orchestrated a covert military coup toppling Mosaddegh and restoring the absolute rule of Shah Mohammad Reza Pahlavi.",
        where: "Tehran",
        actors: ["Mohammad Mosaddegh", "Shah Mohammad Reza Pahlavi", "Kermit Roosevelt Jr."],
        whyItMattered: "Deeply entrenched anti-imperialist and anti-American sentiment across generations of Iranian society.",
        consequences: "The Shah governed as an autocratic pro-Western monarch until overthrown in 1979.",
        claimType: "HISTORICAL FACT",
        sources: "Declassified US CIA Secret History of the 1953 Coup / National Security Archive"
      },
      {
        year: "1979",
        title: "The Islamic Revolution & Collapse of the Pahlavi Monarchy",
        phase: "Theocratic Revolution",
        whatHappened: "Mass popular uprisings, strikes, and protests forced the Shah into exile in January 1979. Ayatollah Ruhollah Khomeini returned from exile, establishing the Islamic Republic under the theological doctrine of Velayat-e Faqih (Guardianship of the Islamic Jurist). Radical students seized the US Embassy in Tehran, holding 52 Americans hostage for 444 days.",
        where: "Tehran, Qom",
        actors: ["Ayatollah Ruhollah Khomeini", "Shah Mohammad Reza Pahlavi"],
        whyItMattered: "Overthrew one of the West's primary Cold War allies in the Middle East, establishing a theocratic state opposed to both the US ('Great Satan') and USSR.",
        consequences: "Triggered severed diplomatic ties with the US and a complete restructuring of Middle Eastern security alignments.",
        claimType: "HISTORICAL FACT",
        sources: "Constitution of the Islamic Republic of Iran (1979) / Documents of the US Hostage Crisis"
      },
      {
        year: "1980–1988",
        title: "Iran–Iraq War (\"The Imposed War / Holy Defense\")",
        phase: "Existential Defense & Asymmetric Doctrine Inception",
        whatHappened: "Saddam Hussein’s Iraq invaded Iran, seeking to seize Khuzestan’s oilfields. Iran fought back through human-wave volunteer infantry (Basij), enduring extensive Iraqi chemical weapons attacks and ballistic missile bombardments of cities ('War of the Cities'). The war ended in a 1988 UN ceasefire (Resolution 598) with zero territorial change.",
        where: "Khuzestan, Khorramshahr, Basra, Persian Gulf",
        actors: ["Ayatollah Khomeini", "Saddam Hussein", "General Ali Sayad Shirazi"],
        whyItMattered: "Cost approximately 500,000 Iranian lives; convinced Iranian strategists that Iran could never rely on international law or Western suppliers, catalyzing self-sufficient indigenous missile and drone development.",
        consequences: "Formed the ideological foundation of the Islamic Revolutionary Guard Corps (IRGC).",
        claimType: "HISTORICAL FACT",
        sources: "UN Security Council Resolution 598 / Holy Defense Museum Tehran"
      },
      {
        year: "2015–2018",
        title: "JCPOA Nuclear Deal & Maximum Pressure Era",
        phase: "Nuclear Diplomacy & Escalation",
        whatHappened: "Iran and the P5+1 powers (US, UK, France, Russia, China, Germany) signed the 2015 Joint Comprehensive Plan of Action (JCPOA), capping Iranian enrichment in exchange for sanctions relief. In May 2018, US President Donald Trump unilaterally withdrew the US from the deal, reimposing 'Maximum Pressure' sanctions. In response, Iran expanded enrichment to 60% purity and installed advanced IR-6 centrifuges.",
        where: "Vienna, Tehran, Washington",
        actors: ["President Hassan Rouhani", "Foreign Minister Javad Zarif", "Donald Trump"],
        whyItMattered: "Demonstrated the vulnerability of diplomatic accords to domestic political shifts, pushing Iran decisively toward a 'Pivot to the East' (China and Russia).",
        consequences: "Assassination of IRGC Quds Force Commander Qasem Soleimani in January 2020 triggered direct Iranian ballistic missile strikes on US bases in Iraq.",
        claimType: "HISTORICAL FACT",
        sources: "UN Security Council Resolution 2231 / IAEA Board of Governors Reports"
      }
    ],
    politicalSystem: {
      type: "Theocratic-Republican Dual Constitutional System",
      constitution: "1979 Constitution of the Islamic Republic of Iran (amended 1989)",
      branches: [
        { name: "Supreme Leader (Vali-e Faqih)", role: "Apex authority (Ayatollah Ali Khamenei); commander-in-chief, sets general state policies, appoints judiciary head and IRGC commanders." },
        { name: "President of the Republic", role: "Head of Government (Masoud Pezeshkian); executes domestic and socioeconomic administration, elected every 4 years." },
        { name: "Guardian Council", role: "12 jurists and clerics vetting all election candidates and ensuring legislation conforms to Islamic law and the Constitution." },
        { name: "Islamic Consultative Assembly (Majlis)", role: "290-seat parliament debating laws and approving international treaties." },
        { name: "Expediency Discernment Council", role: "Mediates legislative disputes between the Majlis and the Guardian Council." },
        { name: "Assembly of Experts", role: "88 Islamic scholars elected every 8 years charged with supervising and appointing the Supreme Leader." }
      ],
      currentLeadership: {
        headOfState: "Supreme Leader Ayatollah Ali Khamenei (In office since 1989)",
        supremeLeader: "Ayatollah Ali Khamenei (In office since 1989)",
        headOfGovernment: "President Masoud Pezeshkian (Elected July 2024)",
        foreignMinister: "Abbas Araghchi",
        defenseMinister: "Brigadier General Aziz Nasirzadeh",
        irgcCommander: "Major General Hossein Salami"
      },
      rulingParty: "Clerical Theocratic Establishment / Conservative Principlists dominate the judiciary and security apparatus; reformist Masoud Pezeshkian holds the presidency",
      oppositionParties: [
        { name: "Principlists / Hardliners", stance: "Anti-Western, revolutionary orthodoxy, full support for Axis of Resistance" },
        { name: "Reformists / Moderates", stance: "Advocate limited social reforms, diplomatic engagement with the West, and economic opening" }
      ],
      parliamentDetails: "Unicameral Majlis (290 seats) elected via two-round system across multi-member and single-member constituencies.",
      recentElections: "July 2024 Presidential Election: Held following the death of President Ebrahim Raisi in a helicopter crash. Reformist cardiac surgeon Masoud Pezeshkian won 53.7% of the second-round vote. Next Majlis election: 2028.",
      domesticDevelopments: [
        { title: "2024 Pezeshkian Administration Transition", claimType: "VERIFIED FACT", desc: "Cabinet confirmed with a mandate to pursue sanctions-lifting talks while maintaining national defense posture." },
        { title: "Nuclear Expansion to 60% U-235", claimType: "VERIFIED FACT", desc: "IAEA reports Iran possesses over 180 kg of 60% enriched uranium and cascades of advanced IR-6 centrifuges at Fordow." }
      ],
      currentIssues: [
        { title: "Severe Inflation & Currency Devaluation", claimType: "ANALYSIS", desc: "Western banking and oil sanctions causing persistent 35–45% domestic inflation and rial depreciation." },
        { title: "Direct Military Deterrence with Israel", claimType: "ANALYSIS", desc: "Shifting from purely proxy warfare to direct ballistic missile exchanges (Operation True Promise I & II in April and October 2024)." }
      ],
      policyDebates: [
        { topic: "Nuclear Breakout vs Threshold Deterrence", desc: "Debate within security circles over whether to formally revise military doctrine toward weaponization if threatened with existential attack." },
        { topic: "Social Governance & Mandatory Hijab Enactment", desc: "Balancing strict religious moral policing against demands for personal liberty from youth and urban women." }
      ],
      institutions: [
        { name: "IRGC (Islamic Revolutionary Guard Corps)", role: "Parallel military organization controlling ballistic missiles, naval coastal denial, and Quds Force external operations." },
        { name: "Supreme National Security Council (SNSC)", role: "Key decision-making body on strategic defense and foreign nuclear policy." },
        { name: "Atomic Energy Organization of Iran (AEOI)", role: "Manages nuclear enrichment, reactor engineering, and research centers." }
      ],
      foreignPolicyDoctrine: "Leader of the 'Axis of Resistance' (Hezbollah in Lebanon, Houthis in Yemen, Iraqi PMF, Syrian government); resistance to US hegemony; strategic partnership with Russia and China; full integration into BRICS and SCO."
    },
    geographyBorders: {
      landArea: "1,648,195 km² (Rank: 17th globally; 2nd largest in the Middle East after Saudi Arabia)",
      location: "Middle East / Southwest Asia, commanding the northern coast of the Persian Gulf and Gulf of Oman",
      continent: "Asia",
      latRange: "25° N to 40° N",
      lngRange: "44° E to 63° E",
      topography: "High mountainous rim (Zagros and Alborz ranges) surrounding an arid central plateau (Dasht-e Kavir and Dasht-e Lut deserts); fertile coastal strips along the Caspian Sea.",
      rivers: [
        "Karun River (950 km - Iran's only navigable river, flowing from Zagros mountains to Shatt al-Arab / Arvand Rud)",
        "Sefid-Rud (Flows from Alborz into Caspian Sea)",
        "Aras River (Border river with Azerbaijan and Armenia)"
      ],
      mountains: [
        "Mount Damavand (5,610 m - Highest peak in Iran and highest volcano in Asia, Alborz range)",
        "Zagros Mountains (1,600 km chain separating the central plateau from the Mesopotamian plains)",
        "Alborz Range (Shields the Caspian coastline from the dry interior)"
      ],
      seas: [
        "Persian Gulf (Contains vast oil and gas deposits; northern coastline entirely under Iranian sovereign control)",
        "Gulf of Oman (Direct oceanic outlet to the Arabian Sea and Indian Ocean)",
        "Caspian Sea (World's largest inland sea; northern maritime border)"
      ],
      majorOceans: ["Indian Ocean (via Gulf of Oman and Arabian Sea)"],
      coastline: "2,440 km (Persian Gulf and Gulf of Oman: 1,700+ km; Caspian Sea: 740 km)",
      climates: [
        "Arid & Semiarid (Dominates the vast central plateau and southern coast)",
        "Subtropical Maritime (Humid Caspian coastal plain, \"Iran's green belt\")",
        "Continental Alpine (Severe cold winters across the high Zagros and Alborz mountains)"
      ],
      landBorders: [
        { country: "Iraq", id: "IRQ", borderLength: "1,458 km", region: "Zagros & Mesopotamian Marshlands", status: "Demarcated / High Pilgrim & Trade Corridor", strategicContext: "Scene of the 1980–88 war; today deep Shi'a religious connectivity (Najaf/Karbala) and major non-oil export market." },
        { country: "Turkey", id: "TUR", borderLength: "534 km", region: "High Mountain Frontier", status: "Peaceful Historical Frontier", strategicContext: "One of the oldest stable borders in the world (established 1639 Treaty of Zuhab); major overland truck and pipeline corridor." },
        { country: "Pakistan", id: "PAK", borderLength: "909 km", region: "Balochistan Frontier", status: "Monitored Frontier / Security Standoff", strategicContext: "Arid desert and mountain terrain; joint counter-insurgency operations against Jaish al-Adl." },
        { country: "Afghanistan", id: "AFG", borderLength: "921 km", region: "Eastern Desert Basin", status: "Monitored Border under Taliban Rule", strategicContext: "Water rights disputes over the Helmand River; cross-border narcotics interdiction and refugee management." },
        { country: "Turkmenistan", id: "TKM", borderLength: "992 km", region: "Central Asian Frontier", status: "Peaceful / Railway Transit Corridor", strategicContext: "Overland trade gate to Central Asia and natural gas swap corridor." },
        { country: "Azerbaijan", id: "AZE", borderLength: "611 km", region: "Aras River Basin", status: "Delimited with Tensions over Zangezur Corridor", strategicContext: "Friction regarding proposed Zangezur corridor that could sever Iran's direct land border with Armenia." },
        { country: "Armenia", id: "ARM", borderLength: "35 km", region: "Norduz / Meghri Crossing", status: "Vital Geopolitical Lifeline", strategicContext: "Iran's shortest land border, but strategically vital to maintain overland access to Europe bypassing Azerbaijan and Turkey." }
      ],
      maritimeBorders: [
        { country: "Oman", id: "OMN", boundary: "Strait of Hormuz (Controls the 39-km deep-water navigable shipping channel)." },
        { country: "Saudi Arabia, UAE, Qatar, Kuwait", id: "SAU", boundary: "Persian Gulf median lines delimiting the South Pars / North Dome offshore gas field." }
      ],
      majorIslands: [
        "Qeshm (Largest island in the Persian Gulf; strategic naval chokepoint)",
        "Kish Island (Free trade zone and tourism hub)",
        "Kharg Island (Primary petroleum export terminal loading ~90% of Iranian crude exports)",
        "Abu Musa, Greater & Lesser Tunbs (Heavily fortified islands controlling the entrance to the Persian Gulf)"
      ],
      strategicGeography: "Natural geographic fortress ringed by immense mountain ranges. Commands the entire northern coastline of the Strait of Hormuz—the most vital energy chokepoint on Earth."
    },
    economy: {
      gdpNominal: "$403 Billion (IMF 2024)",
      gdpPPP: "$1.85 Trillion (World Bank PPP)",
      gdpPerCapita: "$4,670 Nominal / $21,200 PPP",
      gdpGrowth: "+3.7% (2024 IMF estimate)",
      currency: "Iranian Rial (IRR / ﷼)",
      majorIndustries: [
        "Petroleum & Petrochemicals (National Iranian Oil Company - NIOC)",
        "Natural Gas Extraction & Refining (South Pars field - world's largest gas reservoir)",
        "Mining & Metallurgy (Steel, copper, aluminum, zinc)",
        "Automotive Manufacturing (Iran Khodro, SAIPA - largest in Middle East)",
        "Agriculture & Agro-processing (Pistachios, saffron, dates, wheat)"
      ],
      majorExports: [
        "Crude Oil & Condensates ($35B+; overwhelmingly to independent Chinese 'teapot' refineries)",
        "Petrochemicals & Polymers ($14B)",
        "Natural Gas & Electricity (to Iraq and Turkey)",
        "Semi-Finished Steel & Copper Cathodes ($6B)",
        "Agricultural Specialties (Saffron, pistachios, dates, fruits)"
      ],
      majorImports: [
        "Industrial Machinery & Precision Tools",
        "Electronics & Semiconductor Components",
        "Pharmaceutical Raw Materials & Medical Devices",
        "Food Staples & Grains (Corn, soybeans, wheat)"
      ],
      majorTradePartners: [
        { country: "China", share: "Primary economic lifeline (buys >90% of Iranian crude oil; signed 25-Year Cooperation Program)" },
        { country: "Iraq", share: "Top non-oil export market (natural gas, food, construction materials)" },
        { country: "United Arab Emirates", share: "Key financial re-export and trade intermediary hub" },
        { country: "Turkey", share: "Natural gas buyer and overland commercial conduit" },
        { country: "Russia", share: "Expanding INSTC transit, wheat imports, and defense synergy" },
        { country: "India", share: "Historic customer for oil; co-developer of Chabahar Port" }
      ],
      energyPosition: "World's 2nd largest proven natural gas reserves (~34 Tcm) and 3rd largest proven crude oil reserves (~208 billion barrels). Produces approx. 3.2 to 3.4 million barrels per day despite Western sanctions.",
      naturalResources: "Vast reserves of crude oil, natural gas, coal, chromium, copper, iron ore, lead, manganese, zinc, and sulfur.",
      tradeOrgs: [
        "BRICS (Joined January 1, 2024)",
        "Shanghai Cooperation Organisation (SCO - Full member since 2023)",
        "OPEC (Founding Member)",
        "Gas Exporting Countries Forum (GECF)",
        "Economic Cooperation Organization (ECO)"
      ],
      economicStrategicImportance: "Direct master of the Strait of Hormuz energy flow; central transit bridge of the International North-South Transport Corridor (INSTC) linking Russia and Europe to the Indian Ocean.",
      indiaEconomicConnection: "Deep historical and cultural ties. In May 2024, India signed a landmark 10-year bilateral contract to manage and operate the Shahid Beheshti terminal at Chabahar Port, investing $120 Million with an additional $250 Million credit line. Chabahar provides India a sovereign commercial gateway to Afghanistan and Central Asia, completely bypassing Pakistan. India and Iran are founding partners of the INSTC."
    },
    military: {
      expenditure: "$10.2 Billion (Official state budget; augmented by IRGC off-budget commercial enterprises)",
      personnel: {
        active: "610,000 active personnel (Army / Artesh: 350,000; IRGC: 190,000; Air Force & Navy: 70,000)",
        reserves: "350,000 trained reserves + millions in Basij paramilitary militia",
        conscription: "Mandatory 21-month military conscription for males aged 18+"
      },
      doctrine: "Asymmetric warfare; deep ballistic and cruise missile deterrence; drone saturation strikes; Anti-Access/Area Denial (A2/AD) across the Persian Gulf; proxy operations through the 'Axis of Resistance.'",
      nuclearStockpile: "Non-nuclear weapons state; verified threshold nuclear status (IAEA confirms uranium enriched up to 60% with technical ability to enrich to 90% weapons grade within days).",
      defenseIndustry: "Defense Industries Organization (DIO), Aerospace Industries Organization (AIO - ballistic missiles), Qods Aviation / HESA (Shahed and Mohajer UAVs), Marine Industries Organization.",
      majorDomesticSystems: [
        "Khorramshahr-4 (Kheibar) & Emad Medium-Range Ballistic Missiles (2,000 km)",
        "Fattah-1 & Fattah-2 Hypersonic Aero-Ballistic Missiles",
        "Shahed-136 & Shahed-131 One-Way Attack Loitering Drones",
        "Mohajer-6 & Shahed-129 Reconnaissance and Strike UAVs",
        "Bavar-373 Long-Range Anti-Air Missile System (Sayyad-4B missile - 300 km range)",
        "Khordad 15th & Sevom Khordad SAM systems (shot down US Global Hawk in 2019)",
        "Noor, Qader & Abu Mahdi Long-Range Anti-Ship Cruise Missiles (1,000 km)",
        "Fast-Attack Missile Boats & Swarm Torpedo Catamarans (Peykaap, Zolfaghar)"
      ],
      majorImports: ["Su-35 combat aircraft and Yak-130 jet trainers (Russia), S-300PMU2 air defense batteries (Russia)"],
      majorExports: ["Shahed-136 loitering munitions to Russia; ballistic missile components and UAV technology to regional allies (Houthis, Hezbollah)"],
      militaryAlliances: ["Axis of Resistance (State and non-state regional defense network)", "Comprehensive Strategic Partnership with Russia (Mutual security and intelligence cooperation)"],
      categories: [
        {
          name: "BALLISTIC & HYPERSONIC MISSILES",
          desc: "Largest and most diverse missile arsenal in the Middle East.",
          systems: [
            { name: "Khorramshahr-4 (Kheibar)", type: "Liquid-Fueled Medium-Range Ballistic Missile", origin: "Iran (AIO)", status: "CONFIRMED", quantity: "Operational with IRGC Aerospace Force", role: "2,000 km range with a massive 1,500 kg warhead, utilizing mid-course exo-atmospheric guidance." },
            { name: "Fattah Hypersonic Missile", type: "Hypersonic Aero-Ballistic Glide Weapon", origin: "Iran (IRGC)", status: "CONFIRMED", quantity: "Operational deployment", role: "Mach 13–15 terminal velocity with movable solid-fuel nozzle, designed to defeat Arrow and Patriot defenses." }
          ]
        },
        {
          name: "UNMANNED AERIAL VEHICLES (UAVS)",
          desc: "Global pioneer in low-cost, mass-produced long-range kamikaze drones.",
          systems: [
            { name: "Shahed-136", type: "One-Way Attack Loitering Munition", origin: "Iran (HESA)", status: "CONFIRMED", quantity: "Thousands manufactured", role: "Delta-wing drone with 2,000 km range and 50 kg warhead, executing saturation swarm strikes." },
            { name: "Mohajer-6", type: "Armed Reconnaissance UAV", origin: "Iran (Qods Aviation)", status: "CONFIRMED", quantity: "Operational across multiple theaters", role: "Carries 4 Qaem precision-guided glide munitions with 12-hour endurance." }
          ]
        }
      ]
    },
    relations: {
      main: [
        { id: "IRN_RUS", country: "Russia", flag: "🇷🇺", status: "Strategic Defense & Transit Axis", color: "#3b82f6", note: "Drone technology transfers, civil nuclear reactors, Su-35 procurement, and INSTC transit corridor." },
        { id: "IRN_CHN", country: "China", flag: "🇨🇳", status: "25-Year Strategic Economic Partnership", color: "#3b82f6", note: "Buys over 90% of Iranian crude oil; brokered 2023 Iran-Saudi diplomatic normalization." },
        { id: "IRN_IND", country: "India", flag: "🇮🇳", status: "Chabahar Port & INSTC Partner", color: "#10b981", note: "10-year Chabahar Port operations contract, energy connectivity, non-dollar settlements." },
        { id: "IRN_ISR", country: "Israel", flag: "🇮🇱", status: "Existential Enemy / Active Kinetic Confrontation", color: "#ef4444", note: "Direct ballistic missile exchanges, covert operations, shadow war across the Levant." },
        { id: "IRN_USA", country: "United States", flag: "🇺🇸", status: "Adversary / Sanctions Standoff", color: "#ef4444", note: "Nuclear negotiations impasse, maximum pressure sanctions, regional proxy deterrence." }
      ],
      searchable: []
    },
    strategicLocations: [
      { name: "Strait of Hormuz (Bandar Abbas)", type: "Global Petroleum Chokepoint", coords: "27.18° N, 56.26° E", significance: "Controls the 39-km fairway through which 20–21 million barrels of crude oil pass daily (~20% of global consumption)." },
      { name: "Natanz & Fordow Fuel Enrichment Plants", type: "Fortified Underground Nuclear Facilities", coords: "33.72° N, 51.72° E", significance: "Primary uranium enrichment installations deep beneath mountain rock, housing thousands of IR-6 centrifuges." },
      { name: "Chabahar Port (Shahid Beheshti)", type: "Oceanic Deepwater Commercial Port", coords: "25.29° N, 60.64° E", significance: "Bypasses the Strait of Hormuz directly on the Indian Ocean; operated by India to connect to Central Asia." },
      { name: "Kharg Island Petroleum Terminal", type: "Crude Export Megahub", coords: "29.23° N, 50.31° E", significance: "Loads over 90% of Iran's crude oil exports onto maritime supertankers in the Persian Gulf." }
    ],
    currentTensions: [
      {
        title: "Direct Missile & Airstrike Escalation with Israel",
        severity: "Critical / Active Armed Clashes",
        color: "#ef4444",
        desc: "Direct military exchanges involving hundreds of ballistic missiles, long-range drones, and airstrikes targeting radar installations."
      },
      {
        title: "Nuclear Enrichment Escalation & Pre-Emptive Strike Threats",
        severity: "High Crisis Level",
        color: "#f97316",
        desc: "IAEA verification disputes and Western threats of kinetic strikes on Iranian enrichment infrastructure."
      }
    ],
    keyEvents: [
      { title: "1979 Islamic Revolution & US Embassy Hostage Crisis", category: "Systemic Rupture", date: "February–November 1979" },
      { title: "2015 JCPOA Vienna Nuclear Agreement", category: "Multilateral Accord", date: "July 14, 2015" },
      { title: "2024 Operation True Promise Ballistic Strikes on Israel", category: "Direct Military Conflict", date: "April & October 2024" }
    ],
    indiaImpact: {
      headline: "Chabahar Port as India's Golden Gateway to Afghanistan and Eurasia",
      points: [
        { title: "Chabahar Port 10-Year Contract (2024)", desc: "Guarantees Indian commercial operations at Shahid Beheshti terminal, giving India an oceanic bypass around Pakistan." },
        { title: "INSTC Transit Multimodal Corridor", desc: "Reduces container transit time between Mumbai and Moscow from 40 to 20 days, cutting freight costs by 30%." },
        { title: "Energy Security & Sanctions Balancing", desc: "India balances its US partnership against strategic energy and connectivity interests in Tehran." }
      ]
    }
  },

  // =========================================================================
  // SAUDI ARABIA (SAU)
  // =========================================================================
  "SAU": {
    id: "SAU",
    name: "Saudi Arabia",
    officialName: "Kingdom of Saudi Arabia (المملكة العربية السعودية)",
    commonName: "Saudi Arabia",
    capital: "Riyadh",
    capitalCoords: { lat: 24.7136, lng: 46.6753 },
    capitalAdmin: {
      role: "Capital of Saudi Arabia & Seat of the Royal Court",
      political: "Al-Yamamah Palace, Council of Ministers, Consultative Assembly (Shura)",
      geographic: "Located in the central desert plateau (Najd)",
      strategic: "Command center for the world's largest sovereign crude oil exporter and Vision 2030"
    },
    region: "Middle East",
    subregion: "Arabian Peninsula",
    flag: "🇸🇦",
    iso2: "sa",
    isoCode: "SAU / 682",
    lat: 23.8859,
    lng: 45.0792,
    area: "2,149,690 km² (Largest sovereign state in the Middle East; Rank: 12th globally)",
    population: "36.9 Million (2024 GASTAT estimate)",
    politicalSystemType: "Absolute Monarchy (Islamic Monarchy governed by Basic Law)",
    currency: "Saudi Riyal (SAR / ﷼)",
    languages: "Arabic (Official State Language)",
    timeZones: "Arabia Standard Time (UTC+3)",
    foundingInfo: "1744 (First Saudi State); 1902 (Reconquest of Riyadh by Ibn Saud); September 23, 1932 (Unification of the Kingdom)",
    tagline: "Global Oil Superpower, Custodian of the Two Holy Mosques & Vision 2030 Megaproject Architect",
    overview: {
      beginner: "Saudi Arabia is the largest country in the Middle East, occupying the vast majority of the Arabian Peninsula. It holds the world’s second-largest proven oil reserves and serves as the birthplace of Islam, housing its two holiest cities, Mecca and Medina. Under Crown Prince Mohammed bin Salman (MBS), the Kingdom is executing 'Vision 2030'—a massive multitrillion-dollar campaign to diversify the economy away from oil into tourism, tech, and entertainment.",
      advanced: "The Kingdom of Saudi Arabia acts as the de facto leader of OPEC+ and the primary swing producer in global hydrocarbon markets. Under Vision 2030, Saudi Arabia is deploying its $900B+ Public Investment Fund (PIF) to construct futuristic cognitive cities (NEOM), develop green hydrogen, and anchor global supply chains. In foreign policy, Riyadh pursues dynamic strategic hedging: balancing its historic defense relationship with the US against deepening energy partnerships with China and regional détente with Iran."
    },
    history: [
      {
        year: "1902–1932",
        title: "Ibn Saud & Unification of the Kingdom",
        phase: "Monarchical Unification",
        whatHappened: "Abdulaziz Al Saud (Ibn Saud) captured Riyadh in 1902, conquered the Hejaz (Mecca and Medina) in 1925, and proclaimed the unified Kingdom of Saudi Arabia on September 23, 1932.",
        where: "Riyadh, Mecca, Medina, Hejaz, Najd",
        actors: ["King Abdulaziz Al Saud (Ibn Saud)"],
        whyItMattered: "Created the modern Saudi state, assuming sovereign custodianship of Islam's holiest sites.",
        consequences: "Unified disparate nomadic desert tribes under the House of Saud.",
        claimType: "HISTORICAL FACT",
        sources: "Royal Saudi Archives / Darah Foundation for Research and Archives"
      },
      {
        year: "1938",
        title: "Discovery of Commercial Petroleum at Dammam Well No. 7",
        phase: "Hydrocarbon Revolution",
        whatHappened: "American geologists from CASOC (later Aramco) struck massive oil deposits at Dammam Well No. 7 ('Prosperity Well'), unlocking the world's most lucrative petroleum reserves.",
        where: "Dammam, Eastern Province",
        actors: ["King Abdulaziz", "American Oil Geologists"],
        whyItMattered: "Transformed an impoverished desert kingdom into the wealthiest energy superpower in the modern world.",
        consequences: "Initiated the historic 1945 USS Quincy meeting between King Abdulaziz and FDR, sealing the US-Saudi 'Oil for Security' alliance.",
        claimType: "HISTORICAL FACT",
        sources: "Saudi Aramco Historical Archives / US State Department Foreign Relations (FRUS)"
      },
      {
        year: "1973",
        title: "OPEC Oil Embargo",
        phase: "Global Energy Geopolitics",
        whatHappened: "Following the 1973 Yom Kippur War, King Faisal led an Arab oil embargo against Western nations supporting Israel, causing global oil prices to quadruple.",
        where: "Riyadh, Vienna",
        actors: ["King Faisal bin Abdulaziz", "Sheikh Ahmed Zaki Yamani"],
        whyItMattered: "Demonstrated for the first time the immense geopolitical leverage of oil as an instrument of great-power diplomacy.",
        consequences: "Generated immense sovereign petrodollar surpluses and cemented the petrodollar pricing system with the US.",
        claimType: "HISTORICAL FACT",
        sources: "OPEC Official Records / King Faisal Center for Research and Islamic Studies"
      },
      {
        year: "2016–Present",
        title: "Vision 2030 & Modernization Transformation",
        phase: "Contemporary Socioeconomic Revolution",
        whatHappened: "Crown Prince Mohammed bin Salman unveiled 'Vision 2030,' a sweeping socioeconomic blueprint to end oil dependency, liberalize society (permitting women to drive, reopening cinemas), launch mega-projects like NEOM, and privatize a stake in Saudi Aramco (world's largest IPO in 2019).",
        where: "Riyadh, NEOM, Red Sea Coast",
        actors: ["Crown Prince Mohammed bin Salman (MBS)", "King Salman bin Abdulaziz"],
        whyItMattered: "The most radical internal economic and cultural transformation in the Kingdom's history.",
        consequences: "Diversified non-oil government revenues to over 50% of economic activity; restored diplomatic ties with Iran in 2023 under Chinese mediation.",
        claimType: "CURRENT",
        sources: "Vision 2030 Official Government Framework / Saudi Aramco Investor Relations"
      }
    ],
    politicalSystem: {
      type: "Absolute Monarchy (Governed under the Basic Law of Governance)",
      constitution: "The Holy Quran and the Sunnah of Prophet Muhammad serve as the Constitution; codified by the 1992 Basic Law of Governance",
      branches: [
        { name: "The King & Prime Minister", role: "Head of State & Government (King Salman; Crown Prince MBS is Prime Minister); absolute executive and legislative authority." },
        { name: "Council of Ministers", role: "Executive cabinet appointed by royal decree to administer state ministries and national defense." },
        { name: "Consultative Assembly (Majlis ash-Shura)", role: "150-member appointed advisory parliament proposing and reviewing laws." },
        { name: "Judiciary (Sharia Courts)", role: "Independent court system applying Islamic jurisprudence codified under modern commercial and civil statutes." }
      ],
      currentLeadership: {
        headOfState: "King Salman bin Abdulaziz Al Saud",
        headOfGovernment: "Crown Prince Mohammed bin Salman (MBS) (Prime Minister)",
        primeMinister: "Crown Prince Mohammed bin Salman (MBS)",
        foreignMinister: "Prince Faisal bin Farhan Al Saud",
        defenseMinister: "Prince Khalid bin Salman Al Saud"
      },
      rulingParty: "House of Saud (Royal Dynastic Governance; political parties are prohibited)",
      parliamentDetails: "Consultative Assembly (Shura Council): 150 members appointed by the King for 4-year terms (includes 30 women members).",
      recentElections: "No national legislative elections; local municipal council elections held periodically.",
      domesticDevelopments: [
        { title: "NEOM & The Line Megaproject Execution", claimType: "VERIFIED FACT", desc: "$500B+ cognitive zero-carbon region under construction in northwestern Tabuk province." },
        { title: "Aramco Secondary Stock Offerings", claimType: "VERIFIED FACT", desc: "Substantial capital raised to fund Public Investment Fund (PIF) domestic industrial diversification." }
      ],
      currentIssues: [
        { title: "Fiscal Deficit & Oil Price Balancing", claimType: "ANALYSIS", desc: "Balancing Vision 2030 mega-project spending against Brent crude oil price fluctuations ($75–85/bbl fiscal breakeven)." },
        { title: "Normalization Diplomacy with Israel & Palestinian Statehood", claimType: "ANALYSIS", desc: "Riyadh insists on irreversible path to independent Palestinian statehood before any bilateral normalization accord." }
      ],
      policyDebates: [
        { topic: "Megaproject Prioritization & Spending Realism", desc: "Debate over pacing and scaling of gigaprojects (NEOM, Red Sea, Qiddiya) to prevent sovereign financial overextension." },
        { topic: "US Defense Treaty vs Multi-Alignment", desc: "Negotiating formal mutual defense treaty and civil nuclear pact with the US while preserving BRICS and China trade partnerships." }
      ],
      institutions: [
        { name: "Public Investment Fund (PIF)", role: "Sovereign wealth fund managing ~$950 Billion in assets, driving domestic diversification and global investments." },
        { name: "Saudi Aramco", role: "World's most valuable energy corporation, managing 260+ billion barrels of oil reserves." },
        { name: "Presidency of State Security (PSS)", role: "Coordinates counter-terrorism, domestic intelligence, and border security." }
      ],
      foreignPolicyDoctrine: "Energy market leadership (OPEC+), regional stability, diplomatic mediation, Arab-Islamic solidarity, and balanced multi-alignment between Washington, Beijing, and New Delhi."
    },
    geographyBorders: {
      landArea: "2,149,690 km² (Occupies ~80% of the Arabian Peninsula; Rank: 12th globally)",
      location: "Arabian Peninsula, bounded by the Red Sea on the west and the Persian Gulf on the east",
      continent: "Asia",
      latRange: "16° N to 32° N",
      lngRange: "34° E to 56° E",
      topography: "Vast Arabian desert plateaus, including the Rub' al Khali (Empty Quarter - world's largest continuous sand desert); Sarawat mountain range along the western Red Sea coast.",
      rivers: [
        "No permanent natural surface rivers; extensive dry riverbeds (wadis) that flood during seasonal rains (Wadi Hanifa, Wadi al-Rummah)",
        "World's largest network of seawater desalination plants producing >60% of domestic drinking water"
      ],
      mountains: [
        "Jabal Sawda (3,000 m - Highest peak in Saudi Arabia, Asir Mountains)",
        "Sarawat Mountains (Extends along the western Red Sea rim from Jordan to Yemen)",
        "Tuwaiq Escarpment (800-km curved limestone ridge cutting through central Najd)"
      ],
      seas: [
        "Red Sea (Western coastline; critical global maritime transit corridor linking to Suez Canal)",
        "Persian Gulf (Eastern coastline; home to offshore oilfields and industrial ports)"
      ],
      majorOceans: ["Indian Ocean (via Arabian Sea and Gulf of Aden)"],
      coastline: "2,640 km (Red Sea: ~1,800 km; Persian Gulf: ~840 km)",
      climates: [
        "Arid Desert (BWh - Extreme summer heat exceeding 45°C; mild winters; minimal annual rainfall)",
        "Semiarid Highland (Mild, temperate climate across Asir mountain resort areas)"
      ],
      landBorders: [
        { country: "Yemen", id: "YEM", borderLength: "1,458 km", region: "Southern Mountain & Desert Border", status: "Heavily Fortified / Electronic Barrier", strategicContext: "Scene of active border defense and ballistic missile/drone interdictions during the Yemen conflict." },
        { country: "Jordan", id: "JOR", borderLength: "744 km", region: "Northern Desert Border", status: "Peaceful / Trade Highway", strategicContext: "Overland transit corridor connecting Saudi Arabia to the Levant and Mediterranean." },
        { country: "Iraq", id: "IRQ", borderLength: "814 km", region: "Northern Frontier", status: "Fortified Border / Arar Checkpoint", strategicContext: "Double-layered border fence with radar surveillance; Arar border post reopened for trade and pilgrims." },
        { country: "Kuwait", id: "KWT", borderLength: "222 km", region: "Neutral Zone Frontier", status: "Peaceful / Shared Partitioned Neutral Zone", strategicContext: "Joint exploitation of offshore Khafji and onshore Wafra oilfields." },
        { country: "Oman", id: "OMN", borderLength: "676 km", region: "Empty Quarter (Rub' al Khali)", status: "Peaceful / Direct Highway Connection", strategicContext: "New 725-km highway across Empty Quarter desert opened direct trade to Port of Duqm." },
        { country: "United Arab Emirates", id: "UAE", borderLength: "457 km", region: "Al-Batha Crossing", status: "High-Volume Trade Corridor", strategicContext: "Major trade artery linking Riyadh to Dubai and Abu Dhabi." },
        { country: "Qatar", id: "QAT", borderLength: "60 km", region: "Salwa Border", status: "Fully Restored Peaceful Border", strategicContext: "Land connection restored following the 2021 Al-Ula Declaration." }
      ],
      maritimeBorders: [
        { country: "Bahrain", id: "BHR", boundary: "Connected across the Gulf by the 25-km King Fahd Causeway." },
        { country: "Egypt & Sudan", id: "EGY", boundary: "Red Sea median lines (Tiran and Sanafir islands ceded to Saudi sovereignty in 2016)." },
        { country: "Iran", id: "IRN", boundary: "Persian Gulf continental shelf boundary." }
      ],
      majorIslands: [
        "Tiran & Sanafir (Strategic islands commanding the Strait of Tiran into the Gulf of Aqaba)",
        "Farasan Islands (Archipelago of 84 coral islands in the southern Red Sea)",
        "Tarout Island (Historic Persian Gulf island near Dammam)"
      ],
      strategicGeography: "Borders both the Red Sea (Bab el-Mandeb / Suez corridor) and the Persian Gulf (Strait of Hormuz), commanding the two most critical maritime energy transit bottlenecks on Earth."
    },
    economy: {
      gdpNominal: "$1.11 Trillion (Largest economy in the Middle East; Rank: 18th globally, IMF 2024)",
      gdpPPP: "$2.35 Trillion (World Bank PPP)",
      gdpPerCapita: "$30,400 Nominal / $64,500 PPP",
      gdpGrowth: "+1.5% (2024 IMF estimate; non-oil growth >4.5%)",
      currency: "Saudi Riyal (SAR / ﷼ - pegged to USD at 3.75 SAR = 1 USD since 1986)",
      majorIndustries: [
        "Petroleum Extraction & Refining (Saudi Aramco - lowest extraction cost on Earth at ~$3/bbl)",
        "Petrochemicals & Plastics (SABIC - global top-3 chemical producer)",
        "Mining & Mineral Exploration (Ma'aden - massive phosphate, gold, aluminum deposits)",
        "Construction & Megaproject Development (NEOM, Red Sea Global, Diriyah)",
        "Financial Services, Fintech & Sovereign Investment"
      ],
      majorExports: [
        "Crude Petroleum ($220B+)",
        "Refined Petroleum Products & Aviation Fuels ($45B)",
        "Petrochemical Polymers & Industrial Resins ($25B)",
        "Fertilizers (Diammonium Phosphate - Ma'aden)",
        "Aluminum & Structural Metals"
      ],
      majorImports: [
        "Industrial Machinery & Electrical Equipment",
        "Motor Vehicles & Transportation Fleets",
        "Defense Equipment & Aerospace Electronics",
        "Pharmaceuticals & Medical Devices"
      ],
      majorTradePartners: [
        { country: "China", share: "Top trade partner ($100B+; buys ~1.7M bpd crude oil)" },
        { country: "India", share: "2nd largest trading partner ($52B+ trade; major oil and LPG buyer)" },
        { country: "Japan", share: "Critical energy buyer (~1.2M bpd crude oil)" },
        { country: "South Korea", share: "Major petrochemical and construction partner" },
        { country: "United States", share: "Key defense and aerospace supplier" }
      ],
      energyPosition: "World's #1 crude oil exporter; possesses ~267 billion barrels of proved oil reserves and massive unconventional Jafurah shale gas field. Commands ~12 million bpd maximum sustainable production capacity.",
      naturalResources: "Crude petroleum, natural gas, gold, copper, iron ore, phosphates (world's top phosphate fertilizer supplier), silica sand, and immense solar radiation potential.",
      tradeOrgs: [
        "OPEC & OPEC+ (Leading Member)",
        "Group of Twenty (G20 - Only Arab member)",
        "World Trade Organization (WTO)",
        "Gulf Cooperation Council (GCC HQ in Riyadh)",
        "Invited to BRICS (Engaged in BRICS deliberations)"
      ],
      economicStrategicImportance: "The world's ultimate energy central bank: Saudi Aramco's spare production capacity (2–3 million bpd) is the only global buffer capable of stabilizing global oil prices during supply crises.",
      indiaEconomicConnection: "Bilateral trade reached $52.8 Billion in 2023–24. Saudi Arabia is India's second-largest supplier of crude oil and liquefied petroleum gas (LPG). Crown Prince MBS made a State Visit to New Delhi in September 2023, co-chairing the Strategic Partnership Council (SPC) with Prime Minister Modi and launching the historic India–Middle East–Europe Economic Corridor (IMEC) linking Indian ports (Mundra/JNPT) to Saudi Arabia and the UAE by rail and sea."
    },
    military: {
      expenditure: "$71.7 Billion (5th largest defense budget in the world; approx. 6.6% of GDP, 2024)",
      personnel: {
        active: "257,000 active military personnel (Armed Forces: 127,000; Saudi Arabian National Guard - SANG: 100,000; Royal Guard: 30,000)",
        reserves: "100,000 paramilitary and border guards",
        conscription: "All-volunteer professional forces"
      },
      doctrine: "Territorial and energy infrastructure defense; air defense against asymmetric drone and cruise missile attacks; deterrence against regional proxies; localization of defense spending (50% local procurement target under Vision 2030 via SAMI).",
      nuclearStockpile: "Non-nuclear state; pursuing domestic civil nuclear energy program with strict IAEA safeguards; actively negotiating US civil nuclear agreement.",
      defenseIndustry: "Saudi Arabian Military Industries (SAMI - established to localize defense production), Advanced Electronics Company (AEC), Military Industries Corporation (MIC).",
      majorDomesticSystems: [
        "MIM-104 Patriot PAC-3 & PAC-2 Air & Missile Defense Batteries",
        "THAAD (Terminal High Altitude Area Defense) Interceptors (Contracted)",
        "F-15SA Advanced Eagle Multi-Role Strike Fighters (84 new + 68 modernized)",
        "Eurofighter Typhoon Combat Aircraft (72 in service)",
        "Tornado IDS Interdiction Strike Aircraft",
        "M1A2S Abrams Main Battle Tanks",
        "Al Jubail-class (Avante 2200) Multi-Role Corvettes (Navantia partnership)"
      ],
      majorImports: ["F-15SA fighters (US/Boeing), Patriot PAC-3 missiles (US/Lockheed Martin), Typhoon jets (UK/BAE), Cheongung-II SAMs (South Korea)"],
      majorExports: ["Localizing maintenance, repair, and overhaul (MRO) for tactical combat air fleets"],
      militaryAlliances: ["Islamic Military Counter Terrorism Coalition (IMCTC - 42 nations; HQ in Riyadh)", "GCC Peninsula Shield Force", "Strategic Defense Partnership with the US"],
      categories: [
        {
          name: "AIR & MISSILE DEFENSE SHIELD",
          desc: "The world's most combat-tested anti-ballistic missile and drone defense network.",
          systems: [
            { name: "Patriot PAC-3 MSE", type: "Hit-to-Kill Ballistic Missile Interceptor", origin: "USA (Lockheed Martin)", status: "CONFIRMED", quantity: "Dozens of operational batteries", role: "Intercepted hundreds of Houthi ballistic missiles and cruise missiles targeting Riyadh and Aramco refineries." },
            { name: "THAAD System", type: "Terminal High Altitude Area Defense", origin: "USA (Lockheed Martin)", status: "CONFIRMED (Induction)", quantity: "Procured under $15B contract", role: "Exo-atmospheric interception of medium-range ballistic threats." }
          ]
        },
        {
          name: "ROYAL SAUDI AIR FORCE (RSAF)",
          desc: "Premier modern strike air force in the Arab world.",
          systems: [
            { name: "F-15SA Advanced Eagle", type: "Heavy Multi-Role Strike Fighter", origin: "USA (Boeing)", status: "CONFIRMED", quantity: "150+ operational airframes", role: "Equipped with APG-63(V)3 AESA radar, fly-by-wire controls, and carrying up to 29,500 lbs of precision ordnance." },
            { name: "Eurofighter Typhoon", type: "Air Superiority Combat Jet", origin: "UK/Europe", status: "CONFIRMED", quantity: "72 aircraft in operational squadrons", role: "Equipped with Meteor beyond-visual-range air-to-air missiles." }
          ]
        }
      ]
    },
    relations: {
      main: [
        { id: "SAU_USA", country: "United States", flag: "🇺🇸", status: "Historic Defense Guarantor & Major Partner", color: "#3b82f6", note: "Eight-decade alliance; massive military hardware procurement; negotiating formal defense treaty." },
        { id: "SAU_CHN", country: "China", flag: "🇨🇳", status: "Comprehensive Strategic Energy Partnership", color: "#3b82f6", note: "Top buyer of Saudi crude; brokered 2023 Riyadh-Tehran normalization accord." },
        { id: "SAU_IND", country: "India", flag: "🇮🇳", status: "Strategic Partnership Council & IMEC Corridor", color: "#10b981", note: "Key oil and LPG supplier; co-architect of IMEC transport route; joint Al-Mohed Al-Hindi naval exercises." },
        { id: "SAU_IRN", country: "Iran", flag: "🇮🇷", status: "Diplomatic Détente under Beijing Agreement", color: "#eab308", note: "Restored diplomatic embassies in 2023; ongoing regional de-escalation dialogue." }
      ],
      searchable: []
    },
    strategicLocations: [
      { name: "Ras Tanura Oil Terminal", type: "World's Largest Offshore Oil Port", coords: "26.64° N, 50.16° E", significance: "Handles ~6.5 million barrels of crude oil exports daily, serving as the central artery of global energy commerce." },
      { name: "Abqaiq Processing Facility", type: "World's Largest Crude Oil Stabilization Plant", coords: "25.93° N, 49.66° E", significance: "Stabilizes up to 7 million barrels per day of Arabian crude oil; critical global energy node." },
      { name: "King Fahd Causeway", type: "Strategic Island Causeway", coords: "26.18° N, 50.32° E", significance: "25-km bridge network connecting Saudi Arabia directly to the Kingdom of Bahrain." },
      { name: "East-West Crude Oil Pipeline (Petroline)", type: "Strategic Bypass Pipeline", coords: "24.00° N, 45.00° E", significance: "1,200-km pipeline transporting 5 million bpd from Eastern oilfields to Yanbu on the Red Sea, completely bypassing the Strait of Hormuz." }
    ],
    currentTensions: [
      {
        title: "Red Sea Maritime Commercial Shipping Attacks",
        severity: "Elevated Maritime Risk",
        color: "#f97316",
        desc: "Monitoring Houthi missile and drone strikes against commercial shipping off the southern Red Sea and Bab el-Mandeb strait."
      }
    ],
    keyEvents: [
      { title: "1938 Discovery of Commercial Oil at Dammam No. 7", category: "Economic Superpower", date: "March 3, 1938" },
      { title: "2016 Launch of Vision 2030 Transformation", category: "Socioeconomic Blueprint", date: "April 25, 2016" },
      { title: "2023 Beijing-Brokered Saudi-Iran Normalization", category: "Diplomatic Realignment", date: "March 10, 2023" }
    ],
    indiaImpact: {
      headline: "India–Saudi Strategic Partnership Council & IMEC Economic Corridor",
      points: [
        { title: "India–Middle East–Europe Economic Corridor (IMEC)", desc: "Pivotal transit bridge connecting Mumbai/Mundra ports to UAE/Saudi rail networks and onward to Europe, bypassing traditional chokepoints." },
        { title: "Crude Oil & LPG Supply Anchor", desc: "Saudi Aramco supplies ~18% of India's crude oil imports and >30% of its cooking gas (LPG), underpinning Indian household energy security." },
        { title: "Indian Diaspora & Remittances", desc: "Over 2.6 million Indian professionals and workers live in Saudi Arabia, remitting over $11 Billion annually to India." }
      ]
    }
  },

  // =========================================================================
  // ISRAEL (ISR)
  // =========================================================================
  "ISR": {
    id: "ISR",
    name: "Israel",
    officialName: "State of Israel (מְדִינַת יִשְׂרָאֵל / دولة إسرائيل)",
    commonName: "Israel",
    capital: "Jerusalem",
    capitalCoords: { lat: 31.7683, lng: 35.2137 },
    capitalAdmin: {
      role: "Capital of Israel & Seat of Government",
      political: "Knesset (Parliament), Prime Minister's Office, Supreme Court, President's Residence",
      geographic: "Situated in the Judean Mountains between the Mediterranean and the Dead Sea",
      strategic: "Historic, cultural, and political center; contested status under international diplomacy"
    },
    region: "Middle East",
    subregion: "Levant",
    flag: "🇮🇱",
    iso2: "il",
    isoCode: "ISR / 376",
    lat: 31.0461,
    lng: 34.8516,
    area: "22,072 km² (Rank: 150th globally)",
    population: "9.9 Million (2024 CBS estimate)",
    politicalSystemType: "Parliamentary Democracy",
    currency: "Israeli New Shekel (ILS / ₪)",
    languages: "Hebrew (Official State Language); Arabic (Special Status)",
    timeZones: "Israel Standard Time (UTC+2 / IDT UTC+3)",
    foundingInfo: "May 14, 1948 (Declaration of Independence under David Ben-Gurion)",
    tagline: "High-Tech 'Startup Nation', Unacknowledged Nuclear Power & Multi-Tier Missile Defense Pioneer",
    overview: {
      beginner: "Israel is a technologically advanced democracy located on the eastern shore of the Mediterranean Sea. Despite its small geographic size and population of under 10 million, it is a formidable military and cyber superpower, holding the world's most sophisticated multi-layered air defense shield (Iron Dome, David’s Sling, Arrow 3). It is known globally as the 'Startup Nation' for its world-leading cybersecurity, artificial intelligence, and biotech industries.",
      advanced: "The State of Israel operates under the 'Begin Doctrine' (preempting any regional adversary from acquiring weapons of mass destruction) and 'Mabbul' (Campaign Between the Wars). While maintaining official 'nuclear ambiguity' (Amimut), Israel possesses an estimated arsenal of 90 to 200 thermonuclear warheads deliverable via Jericho III ICBMs, Dolphin-II class submarines armed with Popeye Turbo cruise missiles, and F-35I Adir stealth fighters. Following the October 7, 2023 Hamas attacks, Israel has engaged in multi-front warfare across Gaza, Lebanon, Syria, Yemen, and direct exchanges with Iran."
    },
    history: [
      {
        year: "1948",
        title: "Declaration of Independence & 1948 Arab–Israeli War",
        phase: "Sovereign Statehood",
        whatHappened: "Following the expiration of the British Mandate and UN Resolution 181, David Ben-Gurion proclaimed the establishment of the State of Israel on May 14, 1948. A coalition of five Arab armies invaded; Israel prevailed and expanded its borders under the 1949 Armistice Agreements.",
        where: "Tel Aviv, Jerusalem, Galilee, Negev",
        actors: ["David Ben-Gurion", "Chaim Weizmann"],
        whyItMattered: "Established the first sovereign Jewish state in nearly two millennia following the Holocaust.",
        consequences: "Displaced over 700,000 Palestinian Arabs (the Nakba) and absorbed hundreds of thousands of Jewish refugees from Europe and Arab lands.",
        claimType: "HISTORICAL FACT",
        sources: "Declaration of the Establishment of the State of Israel (1948) / Israel State Archives"
      },
      {
        year: "1967",
        title: "The Six-Day War",
        phase: "Geopolitical Transformation",
        whatHappened: "Facing imminent invasion after Egypt mobilized in the Sinai and closed the Straits of Tiran, Israel launched preemptive airstrikes destroying Egyptian, Syrian, and Jordanian air forces on the ground. In six days of combat, Israel captured the Sinai Peninsula, Gaza Strip, West Bank, East Jerusalem, and the Golan Heights.",
        where: "Sinai, Golan Heights, West Bank, Old City of Jerusalem",
        actors: ["Yitzhak Rabin", "Moshe Dayan", "Gamal Abdel Nasser"],
        whyItMattered: "Fundamentally redrew the map of the Middle East, placing millions of Palestinians under Israeli military administration and establishing Israel as the dominant regional military power.",
        consequences: "UN Security Council passed Resolution 242 ('Land for Peace' formula).",
        claimType: "HISTORICAL FACT",
        sources: "UN Security Council Resolution 242 / IDF Archives"
      },
      {
        year: "1973",
        title: "Yom Kippur War",
        phase: "Existential Crisis & Diplomacy",
        whatHappened: "On the holiest day of the Jewish calendar, Egypt and Syria launched a surprise joint offensive across the Suez Canal and Golan Heights. After initial catastrophic setbacks, IDF counter-offensives encircled Egypt's Third Army and reached within 100 km of Cairo and 40 km of Damascus.",
        where: "Suez Canal, Golan Heights",
        actors: ["Prime Minister Golda Meir", "Defense Minister Moshe Dayan", "General Ariel Sharon"],
        whyItMattered: "Shattered Israeli assumptions of military invulnerability; paved the way for the historic 1978 Camp David Accords.",
        consequences: "Israel and Egypt signed the 1979 Peace Treaty—the first peace treaty between Israel and an Arab nation.",
        claimType: "HISTORICAL FACT",
        sources: "Agranat Commission Report / 1979 Egypt-Israel Peace Treaty"
      },
      {
        year: "1993",
        title: "Oslo Accords",
        phase: "Peace Process Architecture",
        whatHappened: "Secret negotiations in Norway led to the signing of the Oslo Accords between Israeli Prime Minister Yitzhak Rabin and PLO Chairman Yasser Arafat on the White House lawn, creating the Palestinian Authority (PA) and dividing the West Bank into Areas A, B, and C.",
        where: "Oslo, Washington, D.C.",
        actors: ["Yitzhak Rabin", "Yasser Arafat", "Bill Clinton", "Shimon Peres"],
        whyItMattered: "First formal mutual recognition between Israel and the Palestine Liberation Organization.",
        consequences: "Prime Minister Yitzhak Rabin was assassinated by a Jewish extremist in 1995; peace process collapsed amidst the Second Intifada (2000–2005).",
        claimType: "HISTORICAL FACT",
        sources: "Declaration of Principles on Interim Self-Government Arrangements (1993)"
      },
      {
        year: "2020",
        title: "The Abraham Accords",
        phase: "Regional Normalization Breakthrough",
        whatHappened: "Brokered by the United States, Israel signed historic normalization agreements with the United Arab Emirates, Bahrain, Morocco, and Sudan, establishing direct diplomatic, commercial, security, and tourism ties without pre-resolving the Palestinian conflict.",
        where: "White House, Washington",
        actors: ["Benjamin Netanyahu", "Donald Trump", "Sheikh Abdullah bin Zayed"],
        whyItMattered: "Reversed decades of the Arab League boycott, building an anti-Iran coalition across the Gulf and Mediterranean.",
        consequences: "Catalyzed billions in bilateral trade, high-tech joint ventures, and direct flights.",
        claimType: "HISTORICAL FACT",
        sources: "Abraham Accords Declaration (Sept 15, 2020) / US Department of State"
      },
      {
        year: "2023–Present",
        title: "October 7 Attacks & Multi-Front Regional War",
        phase: "Existential Multi-Front Conflict",
        whatHappened: "On October 7, 2023, Hamas militants breached the Gaza border fence, killing approximately 1,200 people and abducting 250 hostages. Israel declared war, launching a massive ground and air campaign in Gaza, followed by kinetic operations against Hezbollah in Lebanon (decapitating its leadership including Hassan Nasrallah) and direct ballistic missile exchanges with Iran.",
        where: "Gaza Strip, Southern Israel, Lebanon, Tehran",
        actors: ["Prime Minister Benjamin Netanyahu", "Defense Minister Yoav Gallant", "Yahya Sinwar", "Hassan Nasrallah"],
        whyItMattered: "The deadliest day for Jewish people since the Holocaust, triggering the most intense regional military conflict in 50 years.",
        consequences: "Deep humanitarian crisis in Gaza; displacement of tens of thousands of Israeli and Lebanese civilians; direct confrontation between Israel and Iran.",
        claimType: "CURRENT",
        sources: "IDF Official Briefings / UN OCHA Reports / Israeli Ministry of Foreign Affairs"
      }
    ],
    politicalSystem: {
      type: "Parliamentary Democratic Republic",
      constitution: "Uncodified Constitution (comprising 14 Basic Laws passed by the Knesset)",
      branches: [
        { name: "Prime Minister", role: "Head of Government (Benjamin Netanyahu); chief executive commanding parliamentary majority." },
        { name: "President of the State", role: "Head of State (Isaac Herzog); non-partisan ceremonial role representing national unity." },
        { name: "Knesset (Parliament)", role: "120-seat unicameral parliament elected by nationwide proportional representation." },
        { name: "Supreme Court", role: "Apex judicial body and High Court of Justice exercising judicial review over Knesset legislation." }
      ],
      currentLeadership: {
        headOfState: "President Isaac Herzog",
        headOfGovernment: "Prime Minister Benjamin Netanyahu (Likud)",
        defenseMinister: "Israel Katz",
        foreignMinister: "Gideon Sa'ar"
      },
      rulingParty: "Right-wing religious coalition (Likud, Religious Zionism, Otzma Yehudit, Shas, United Torah Judaism)",
      oppositionParties: [
        { name: "Yesh Atid", seats: "24 seats", leader: "Yair Lapid", stance: "Centrist, secular, liberal democracy" },
        { name: "National Unity", seats: "12 seats", leader: "Benny Gantz", stance: "Center, national security focus" },
        { name: "Yisrael Beiteinu", seats: "6 seats", leader: "Avigdor Lieberman", stance: "Secular right-wing nationalist" },
        { name: "The Democrats (Labor/Meretz)", leader: "Yair Golan", stance: "Zionist left, two-state solution" }
      ],
      parliamentDetails: "Unicameral Knesset: 120 members elected by closed party-list proportional representation with a 3.25% electoral threshold.",
      recentElections: "November 1, 2022 General Election: Netanyahu's right-wing bloc secured a 64-seat majority. Next election scheduled by October 2026.",
      domesticDevelopments: [
        { title: "Judicial Reform Turmoil", claimType: "VERIFIED FACT", desc: "Mass national protests throughout 2023 over proposed legislation curbing Supreme Court judicial review powers." },
        { title: "Wartime Emergency Mobilization", claimType: "VERIFIED FACT", desc: "Mobilized over 300,000 reservists to sustain simultaneous military campaigns in Gaza and northern frontiers." }
      ],
      currentIssues: [
        { title: "Hostage Recovery & Ceasefire Negotiations", claimType: "ANALYSIS", desc: "Balancing military pressure against diplomatic negotiations to secure the release of remaining hostages held in Gaza." },
        { title: "Ultra-Orthodox (Haredi) Military Conscription", claimType: "ANALYSIS", desc: "Supreme Court ruled Haredi yeshiva students must be conscripted, triggering intense coalition political tensions." }
      ],
      policyDebates: [
        { topic: "Day-After Governance for Gaza", desc: "Debating between military reoccupation, local clan governance, or reformed Arab-international peacekeeping administration." },
        { topic: "Judicial Independence vs Majoritarian Governance", desc: "Continuing ideological conflict over the balance of power between the Knesset majority and the High Court of Justice." }
      ],
      institutions: [
        { name: "Mossad", role: "External intelligence agency conducting global clandestine operations and counter-proliferation." },
        { name: "Shin Bet (Shabak)", role: "Internal security agency responsible for counter-terrorism in Israel and the West Bank." },
        { name: "IDF General Staff", role: "Directs unified operations across Ground Forces, Air Force (IAF), and Navy." }
      ],
      foreignPolicyDoctrine: "Ironclad alliance with the United States; Begin Doctrine (prevention of hostile nuclear capabilities); Abraham Accords integration; qualitative military edge (QME) maintenance."
    },
    geographyBorders: {
      landArea: "22,072 km² (excluding West Bank and Golan Heights; Golan Heights: 1,150 km²)",
      location: "Eastern Mediterranean coastline of the Levant, Southwest Asia",
      continent: "Asia",
      latRange: "29° N to 33° N",
      lngRange: "34° E to 35° E",
      topography: "Coastal plain along Mediterranean; central Judean and Samarian hill country; Great Rift Valley (Jordan River and Dead Sea); arid Negev Desert covering southern 60% of landmass.",
      rivers: [
        "Jordan River (251 km - Primary freshwater artery flowing from Sea of Galilee to Dead Sea)",
        "Yarkon River (Flows through Tel Aviv to Mediterranean)",
        "Kishon River (Drains into Bay of Haifa)"
      ],
      mountains: [
        "Mount Hermon (2,814 m total; Israeli sector 2,236 m - Strategic radar surveillance peak overlooking Syria and Lebanon)",
        "Mount Meron (1,208 m - Upper Galilee)",
        "Judean Hills & Mount of Olives (Surrounding Jerusalem)"
      ],
      seas: [
        "Mediterranean Sea (Western coastline hosting 70% of population, Haifa/Ashdod ports, and offshore gas rigs)",
        "Dead Sea (Lowest point on Earth at -430 m below sea level; high mineral and potash extraction)",
        "Red Sea / Gulf of Aqaba (Southern port of Eilat giving direct maritime access to Indian Ocean)"
      ],
      majorOceans: ["Atlantic (via Mediterranean) and Indian Ocean (via Gulf of Aqaba)"],
      coastline: "273 km (Mediterranean: 190 km; Red Sea at Eilat: 12 km; Dead Sea: 56 km; Sea of Galilee: 56 km)",
      climates: [
        "Mediterranean (Hot, dry summers and mild, wet winters along coastal plains)",
        "Semi-arid & Desert (Hot and dry throughout the year across the southern Negev and Arava valley)"
      ],
      landBorders: [
        { country: "Lebanon", id: "LBN", borderLength: "79 km", region: "Blue Line", status: "UN Blue Line / Active Warfare Zone", strategicContext: "Fortified with sensor walls and radar; scene of high-intensity clashes with Hezbollah." },
        { country: "Syria", id: "SYR", borderLength: "76 km", region: "Golan Heights Frontier", status: "1974 Disengagement Line (UNDOF)", strategicContext: "Strategic high ground overlooking Damascus plain; fortified against Iranian-backed militia infiltration." },
        { country: "Jordan", id: "JOR", borderLength: "238 km", region: "Jordan Valley & Arava", status: "Peaceful Frontier under 1994 Treaty", strategicContext: "Longest peaceful border; critical commercial crossing (Allenby / King Hussein bridge) and security coordination." },
        { country: "Egypt", id: "EGY", borderLength: "208 km", region: "Sinai Frontier", status: "Peaceful / 2013 High-Tech Security Barrier", strategicContext: "Protected by a 5-meter steel barrier with sensors; deep intelligence sharing against ISIS Sinai." },
        { country: "Gaza Strip", id: "PSE", borderLength: "51 km", region: "Perimeter Barrier", status: "Active High-Intensity War Zone", strategicContext: "Subterranean and surface barrier breached on Oct 7, 2023; current scene of IDF military combat operations." },
        { country: "West Bank", id: "PSE", borderLength: "330 km", region: "Security Barrier / Green Line", status: "Enclosed by Security Wall & Checkpoints", strategicContext: "Concrete wall and electronic fence dividing Israeli territory from Palestinian population centers." }
      ],
      maritimeBorders: [
        { country: "Lebanon", id: "LBN", boundary: "2022 US-brokered Maritime Boundary Agreement delimiting the Qana and Karish offshore natural gas fields." },
        { country: "Cyprus", id: "CYP", boundary: "Mediterranean exclusive economic zone delimitation." }
      ],
      majorIslands: ["No sovereign offshore islands"],
      strategicGeography: "Extreme strategic depth vulnerability: Israel’s narrowest waistline between the West Bank and the Mediterranean Sea is only 15 km wide (Netanya). Commands the overland land bridge linking Asia to Africa."
    },
    economy: {
      gdpNominal: "$530 Billion (IMF 2024)",
      gdpPPP: "$540 Billion (World Bank PPP)",
      gdpPerCapita: "$53,800 Nominal / $54,900 PPP",
      gdpGrowth: "+0.5% (2024 estimate impacted by multi-front wartime mobilization)",
      currency: "Israeli New Shekel (ILS / ₪)",
      majorIndustries: [
        "High-Tech & Cybersecurity (Check Point, Palo Alto Networks, Mobileye, Wiz)",
        "Defense Electronics & Aerospace (IAI, Elbit Systems, Rafael)",
        "Diamond Polishing & Trading (Ramat Gan Diamond Exchange)",
        "Pharmaceuticals & Medical Devices (Teva Pharmaceuticals)",
        "Offshore Natural Gas (Leviathan and Tamar gas fields in the Mediterranean)"
      ],
      majorExports: [
        "High-Tech Software & Cybersecurity Services ($45B+)",
        "Military Defense Hardware & Electronics ($13B+ record)",
        "Cut & Polished Diamonds ($9B)",
        "Offshore Natural Gas (to Egypt and Jordan)",
        "Integrated Circuits & Microprocessors (Intel Israel)",
        "Pharmaceutical Products"
      ],
      majorImports: [
        "Industrial Machinery & Electrical Equipment",
        "Military Weapons Systems (US Foreign Military Financing)",
        "Motor Vehicles & Transportation Components",
        "Raw Rough Diamonds & Agricultural Foodstuffs"
      ],
      majorTradePartners: [
        { country: "United States", share: "Largest single trade partner (~28% of exports; recipient of $3.8B annual US military aid)" },
        { country: "European Union", share: "Major collective commercial partner (~30% of trade)" },
        { country: "China", share: "Major import supplier and operator of Haifa Bayport" },
        { country: "India", share: "Premier strategic defense and tech partner ($10B+)" }
      ],
      energyPosition: "Energy Self-Sufficient: Offshore Mediterranean discoveries (Tamar: ~300 bcm; Leviathan: ~600 bcm) transformed Israel from an energy importer into a natural gas exporter supplying Egypt and Jordan.",
      naturalResources: "Offshore natural gas, potash, bromine, magnesium, phosphate rock, and solar energy potential.",
      tradeOrgs: [
        "OECD (Member since 2010)",
        "World Trade Organization (WTO)",
        "Free Trade Agreements with US, EU, UK, Canada, South Korea, UAE"
      ],
      economicStrategicImportance: "Global epicenter of venture capital and software cybersecurity ('Silicon Wadi'); developer of autonomous driving sensors (Mobileye) and critical military technologies.",
      indiaEconomicConnection: "Special Strategic Partnership. India is Israel’s top customer for advanced military systems (Barak-8 air defense, Heron drones, Spike anti-tank missiles, Phalcon AWACS). Bilateral trade exceeded $10 Billion. Major corporate investments: Adani Group purchased 70% of the Port of Haifa ($1.2B) in 2023. Deep co-development in agriculture, drip irrigation (Netafim), and cybersecurity."
    },
    military: {
      expenditure: "$30.5 Billion (Approx. 5.5% of GDP in peacetime; surging to over 8% in 2024 wartime mobilization)",
      personnel: {
        active: "170,000 active duty military personnel (Ground Forces, Air Force, Navy)",
        reserves: "465,000 highly trained reserves mobilizable within 48 hours",
        conscription: "Mandatory military service: 32 months for males, 24 months for females (with exemptions for Arab citizens and Ultra-Orthodox)"
      },
      doctrine: "Begin Doctrine; rapid transfer of war into enemy territory; decisive offensive strike; multi-tier active air defense shield; qualitative military edge (QME); nuclear ambiguity (Amimut).",
      nuclearStockpile: "Unacknowledged nuclear weapons state; estimated 90 to 200 thermonuclear warheads (plutonium produced at Dimona reactor) with operational triad.",
      defenseIndustry: "Israel Aerospace Industries (IAI - Arrow missiles, drones, satellites), Rafael Advanced Defense Systems (Iron Dome, David's Sling, Trophy), Elbit Systems (Hermes UAVs, electronics).",
      majorDomesticSystems: [
        "Iron Dome (Tamir interceptors - short-range rocket and artillery defense)",
        "David's Sling (Stunner interceptor - medium/long-range cruise missile defense)",
        "Arrow 2 & Arrow 3 (Upper-tier exo-atmospheric ballistic missile interceptors)",
        "Iron Beam (100kW directed-energy laser defense system)",
        "Merkava Mk 4M & Barak Main Battle Tanks (fitted with Trophy APS)",
        "Namer Heavy Armored Personnel Carriers",
        "F-35I Adir (Customized stealth fighters with Israeli electronic warfare suites)",
        "Dolphin-II Class Submarines (Air-Independent Propulsion; nuclear cruise missile capable)"
      ],
      majorImports: ["F-35I Adir, F-15I Ra'am, F-16I Sufa aircraft (US/Lockheed Martin/Boeing), precision JDAM bomb kits"],
      majorExports: ["Barak-8 SAM (India), Arrow-3 (Germany €4B), David's Sling (Finland), Spike missiles (35+ nations), Hermes drones"],
      militaryAlliances: ["Strategic Major Non-NATO Ally (MNNA) of the United States; CENTCOM operational alignment with Gulf states"],
      categories: [
        {
          name: "MULTI-TIER INTEGRATED AIR DEFENSE",
          desc: "The most sophisticated multi-layered missile shield in the world.",
          systems: [
            { name: "Arrow 3", type: "Exo-Atmospheric Hypersonic Interceptor", origin: "Israel (IAI/Boeing)", status: "CONFIRMED", quantity: "Operational batteries", role: "Intercepts ballistic missiles outside the atmosphere up to 2,400 km range." },
            { name: "David's Sling", type: "Hit-to-Kill Cruise & Ballistic Missile Interceptor", origin: "Israel/USA (Rafael/Raytheon)", status: "CONFIRMED", quantity: "Operational deployment", role: "Stunner missile with dual optical/radar seekers defeating cruise missiles up to 300 km." },
            { name: "Iron Dome", type: "Short-Range Counter-Rocket Artillery & Mortar (C-RAM)", origin: "Israel (Rafael)", status: "CONFIRMED", quantity: "10+ batteries deployed", role: "Over 90% interception success against rockets, drones, and artillery shells." }
          ]
        },
        {
          name: "AIR SUPERIORITY & STEALTH STRIKE",
          desc: "Only operational F-35 stealth fleet in the Middle East with customized domestic avionics.",
          systems: [
            { name: "F-35I Adir", type: "5th Gen Stealth Strike Fighter", origin: "USA/Israel", status: "CONFIRMED", quantity: "39 delivered (75 total on order)", role: "Internal weapon bays, indigenous EW systems, and long-range conformal fuel tanks for deep strike." }
          ]
        }
      ]
    },
    relations: {
      main: [
        { id: "ISR_USA", country: "United States", flag: "🇺🇸", status: "Indispensable Superpower Patron", color: "#3b82f6", note: "$3.8B annual military financing, diplomatic veto shield at UN Security Council, intelligence sharing." },
        { id: "ISR_IND", country: "India", flag: "🇮🇳", status: "Comprehensive Strategic Defense & High-Tech Ally", color: "#10b981", note: "Barak-8 co-development, drone procurement, Adani Haifa Port ownership, counter-terror synergy." },
        { id: "ISR_UAE", country: "United Arab Emirates", flag: "🇦🇪", status: "Abraham Accords Normalization Partner", color: "#10b981", note: "Bilateral trade over $3B, high-tech joint ventures, regional intelligence coordination." },
        { id: "ISR_IRN", country: "Iran", flag: "🇮🇷", status: "Existential Adversary / Direct Kinetic War", color: "#ef4444", note: "Active military clashes, shadow intelligence war, nuclear counter-proliferation." }
      ],
      searchable: []
    },
    strategicLocations: [
      { name: "Haifa Port (Adani-Owned Bayport)", type: "Deepwater Commercial Hub & Naval Base", coords: "32.82° N, 34.99° E", significance: "Israel's primary commercial container port and home base for Dolphin-class nuclear-capable submarines." },
      { name: "Nevatim Airbase (Negev)", type: "F-35I Stealth Fighter Command Base", coords: "31.20° N, 35.01° E", significance: "Super-base housing all three F-35I Adir stealth fighter squadrons and strategic airlift wings." },
      { name: "Dimona Nuclear Research Center (Negev)", type: "Shimon Peres Nuclear Center", coords: "31.00° N, 35.15° E", significance: "Heavily fortified underground nuclear reactor and plutonium reprocessing facility anchoring Israel's nuclear deterrent." },
      { name: "Leviathan Offshore Gas Platform", type: "Strategic Energy Extraction Platform", coords: "32.90° N, 34.50° E", significance: "Supplies domestic electricity generation and exports gas to Egypt and Jordan; protected by naval Iron Dome (C-Dome)." }
    ],
    currentTensions: [
      {
        title: "Multi-Theater War in Gaza, Lebanon & Direct Confrontation with Iran",
        severity: "Critical / Maximum Conflict",
        color: "#ef4444",
        desc: "Simultaneous high-intensity military campaigns against Hamas in Gaza, Hezbollah in southern Lebanon, and ballistic missile exchanges with Tehran."
      }
    ],
    keyEvents: [
      { title: "1948 Declaration of the State of Israel", category: "Statehood Proclamation", date: "May 14, 1948" },
      { title: "1967 Six-Day War & Jerusalem Reunification", category: "Territorial Shift", date: "June 5–10, 1967" },
      { title: "2020 Abraham Accords Normalization", category: "Regional Diplomacy", date: "September 15, 2020" },
      { title: "2023 October 7 Hamas Incursion & Multi-Front War", category: "Existential Crisis", date: "October 7, 2023" }
    ],
    indiaImpact: {
      headline: "Israel as India’s Critical High-Tech Defense & Intelligence Co-Developer",
      points: [
        { title: "Kargil War Emergency Resupply Legacy (1999)", desc: "Israel delivered laser-guided bomb kits and mortar ammunition during the Kargil conflict, cementing enduring trust between security establishments." },
        { title: "Barak-8 Missile System Co-Development", desc: "Jointly developed by DRDO and IAI, the Long-Range Surface-to-Air Missile (LRSAM) protects all frontline Indian Navy destroyers and frigates." },
        { title: "Adani Ownership of Haifa Port ($1.2B)", desc: "Provides India a direct maritime and commercial foothold on the Mediterranean Sea, forming the terminal anchor of the IMEC trade corridor." }
      ]
    }
  },

  // =========================================================================
  // TURKEY (TUR)
  // =========================================================================
  "TUR": {
    id: "TUR",
    name: "Turkey",
    officialName: "Republic of Türkiye (Türkiye Cumhuriyeti)",
    commonName: "Turkey / Türkiye",
    capital: "Ankara",
    capitalCoords: { lat: 39.9334, lng: 32.8597 },
    capitalAdmin: {
      role: "Capital of Turkey & Seat of the Presidency",
      political: "Presidential Complex (Külliye), Grand National Assembly (TBMM), Ministries",
      geographic: "Located in the central Anatolian plateau",
      strategic: "Command center for the 2nd largest military force in NATO and national drone program"
    },
    region: "Middle East",
    subregion: "Transcontinental (Eurasia)",
    flag: "🇹🇷",
    iso2: "tr",
    isoCode: "TUR / 792",
    lat: 38.9637,
    lng: 35.2433,
    area: "783,562 km² (Rank: 36th globally)",
    population: "85.8 Million (2024 TÜİK estimate)",
    politicalSystemType: "Presidential Constitutional Republic",
    currency: "Turkish Lira (TRY / ₺)",
    languages: "Turkish (Official State Language); Kurdish (Regional)",
    timeZones: "Further-eastern European Time (UTC+3 permanent)",
    foundingInfo: "1299 (Ottoman Empire established); October 29, 1923 (Republic of Turkey proclaimed by Mustafa Kemal Atatürk)",
    tagline: "Guardian of the Turkish Straits, 2nd Largest Military in NATO & Global Drone Power",
    overview: {
      beginner: "Turkey is a transcontinental nation bridging southeastern Europe and southwestern Asia. It controls the strategic Bosphorus and Dardanelles straits—the only maritime passages between the Black Sea and the Mediterranean. As NATO's second-largest military power and a top-20 global economy, Turkey under President Recep Tayyip Erdoğan pursues an assertive, independent foreign policy, acting as a mediator between Russia and Ukraine and pioneering armed combat drones.",
      advanced: "The Republic of Türkiye exercises sovereign regulatory authority over the Turkish Straits under the 1936 Montreux Convention. Ankara operates under the 'Blue Homeland' (Mavi Vatan) naval doctrine and strategic autonomy, balancing NATO obligations against energy and diplomatic partnerships with Moscow. Turkey has emerged as a premier global exporter of armed UAVs (Bayraktar TB2 and Akinci) and is building a fully indigenous defense ecosystem spanning 5th-gen fighter jets (KAAN), amphibious assault ships (TCG Anadolu), and missile defense."
    },
    history: [
      {
        year: "1453",
        title: "Fall of Constantinople & Rise of the Ottoman Empire",
        phase: "Imperial Conquest",
        whatHappened: "Sultan Mehmed II (the Conqueror) breached the ancient Theodosian Walls, conquering Byzantine Constantinople and renaming it Istanbul as the new capital of the Ottoman Empire.",
        where: "Constantinople / Istanbul",
        actors: ["Sultan Mehmed II (Fatih)", "Emperor Constantine XI Palaiologos"],
        whyItMattered: "Ended the 1,100-year Byzantine Empire, severing European land trade routes to Asia and spurring the European Age of Discovery.",
        consequences: "Transformed the Ottoman Empire into a dominant Mediterranean, Middle Eastern, and Balkan superpower.",
        claimType: "HISTORICAL FACT",
        sources: "Topkapi Palace Archives / Ottoman Imperial Decrees"
      },
      {
        year: "1915",
        title: "Battle of Gallipoli (Çanakkale)",
        phase: "WWI Existential Defense",
        whatHappened: "Ottoman forces commanded by Lieutenant Colonel Mustafa Kemal repelled a massive British, French, and ANZAC amphibious invasion seeking to seize the Dardanelles and capture Constantinople.",
        where: "Gallipoli Peninsula (Çanakkale)",
        actors: ["Mustafa Kemal (Atatürk)", "Winston Churchill"],
        whyItMattered: "A decisive Ottoman defensive victory that thwarted Allied plans to supply Russia, forging the national identity of modern Turkey.",
        consequences: "Propelled Mustafa Kemal into national hero status, setting the stage for the Turkish War of Independence.",
        claimType: "HISTORICAL FACT",
        sources: "Turkish General Staff Military History Archives (ATASE)"
      },
      {
        year: "1919–1923",
        title: "War of Independence & Proclamation of the Republic",
        phase: "National Rebirth & Secularization",
        whatHappened: "Following the partition of the Ottoman Empire in WWI (Treaty of Sèvres), Mustafa Kemal organized the national resistance, expelled Greek, British, and French occupation forces, abolished the Sultanate, and proclaimed the secular Republic of Turkey on October 29, 1923.",
        where: "Ankara, Izmir, Sakarya",
        actors: ["Mustafa Kemal Atatürk", "İsmet İnönü"],
        whyItMattered: "Replaced 600 years of dynastic Islamic caliphate rule with a modern secular republic with Latin alphabet reform and civil equality.",
        consequences: "Ratified by the 1923 Treaty of Lausanne, securing Turkey's modern internationally recognized borders.",
        claimType: "HISTORICAL FACT",
        sources: "Treaty of Lausanne (1923) / Grand National Assembly of Turkey Archives"
      },
      {
        year: "1936",
        title: "Montreux Convention on the Turkish Straits",
        phase: "Maritime Sovereignty",
        whatHappened: "International convention signed in Switzerland granting Turkey sovereign remilitarization and regulatory control over the Bosphorus and Dardanelles straits.",
        where: "Montreux, Switzerland",
        actors: ["Foreign Minister Tevfik Rüştü Aras"],
        whyItMattered: "Restricted naval warships of non-Black Sea states from entering the Black Sea in wartime, making Turkey the ultimate gatekeeper of Russian naval ingress.",
        consequences: "Invoked by Turkey in February 2022 to close the straits to Russian warships during the Ukraine war.",
        claimType: "HISTORICAL FACT",
        sources: "1936 Montreux Convention Text / League of Nations Treaty Series"
      },
      {
        year: "1952",
        title: "Accession to NATO & Cold War Forward Bastion",
        phase: "Transatlantic Integration",
        whatHappened: "Following Turkish troop valor in the Korean War and Soviet territorial demands over the Straits, Turkey and Greece formally joined NATO in 1952.",
        where: "Ankara, Brussels, Washington",
        actors: ["President Celal Bayar", "Prime Minister Adnan Menderes"],
        whyItMattered: "Anchored NATO's southern flank along a direct 1,000-km border with the Soviet Union, hosting US Jupiter missiles (at the heart of the 1962 Cuban Missile Crisis) and Incirlik Air Base.",
        consequences: "Built the second-largest army in the NATO alliance.",
        claimType: "HISTORICAL FACT",
        sources: "NATO Declassified Cold War Archives"
      },
      {
        year: "2016–Present",
        title: "July 15 Coup Attempt & Presidential Republic Transformation",
        phase: "Contemporary Presidential Centralization",
        whatHappened: "A military faction attempted to overthrow President Recep Tayyip Erdoğan in July 2016, bombing parliament before being defeated by popular street resistance. In 2017, a constitutional referendum abolished the parliamentary system, concentrating executive power in the office of the President.",
        where: "Ankara, Istanbul Bosphorus Bridge",
        actors: ["President Recep Tayyip Erdoğan", "Binali Yıldırım"],
        whyItMattered: "Accelerated Turkey’s strategic realignment, purging domestic opposition, purchasing Russian S-400 air defense batteries, and expanding military interventions in Syria, Libya, and Azerbaijan (Karabakh).",
        consequences: "US removed Turkey from the F-35 fighter jet program; spurred Turkey to build its own 5th-gen fighter (KAAN) and drone armada.",
        claimType: "HISTORICAL FACT",
        sources: "Turkish Grand National Assembly Official Gazette / Presidency Communications Directorate"
      }
    ],
    politicalSystem: {
      type: "Presidential Constitutional Republic",
      constitution: "1982 Constitution of the Republic of Turkey (substantially transformed by 2017 amendments)",
      branches: [
        { name: "President of the Republic", role: "Head of State & Government (Recep Tayyip Erdoğan); possesses sweeping executive decrees, appoints ministers and judges." },
        { name: "Grand National Assembly of Turkey (TBMM)", role: "600-seat parliament passing statutory laws, budgets, and approving military deployments." },
        { name: "Constitutional Court", role: "15 judges reviewing the constitutionality of statutes and executive decrees." },
        { name: "National Security Council (MGK)", role: "Bi-monthly council coordinating civil-military security directives." }
      ],
      currentLeadership: {
        headOfState: "President Recep Tayyip Erdoğan (In power since 2003 as PM/President; re-elected May 2023)",
        headOfGovernment: "President Recep Tayyip Erdoğan (Executive Presidency)",
        foreignMinister: "Hakan Fidan (Former head of MİT intelligence)",
        defenseMinister: "Yaşar Güler (Former Chief of General Staff)",
        financeMinister: "Mehmet Şimşek"
      },
      rulingParty: "People's Alliance (Cumhur İttifakı - AK Party led by Erdoğan partnered with nationalist MHP)",
      oppositionParties: [
        { name: "Republican People's Party (CHP)", seats: "169 seats", leader: "Özgür Özel / Ekrem İmamoğlu", stance: "Kemalist, secular social democracy, pro-EU" },
        { name: "DEM Party", seats: "57 seats", stance: "Pro-Kurdish rights, left-wing" },
        { name: "Good Party (İYİ)", seats: "38 seats", stance: "Secular Turkish nationalism" }
      ],
      parliamentDetails: "Unicameral TBMM: 600 deputies elected via party-list proportional representation across 87 electoral districts (7% national threshold).",
      recentElections: "May 2023 Presidential & Parliamentary Elections: Erdoğan won re-election in the runoff with 52.18% of the vote. Next elections scheduled for 2028.",
      domesticDevelopments: [
        { title: "Orthodox Economic Policy Pivot", claimType: "VERIFIED FACT", desc: "Finance Minister Mehmet Şimşek raised interest rates to 50% to tame runaway inflation and rebuild foreign reserves." },
        { title: "First Flight of TAI KAAN 5th-Gen Jet", claimType: "VERIFIED FACT", desc: "Indigenous twin-engine stealth fighter completed its maiden test flights in 2024." }
      ],
      currentIssues: [
        { title: "Inflation & Cost of Living Pressures", claimType: "ANALYSIS", desc: "Managing persistent domestic inflation (50–65%) while attempting to attract foreign direct investment." },
        { title: "Syrian Refugee Return & Cross-Border Buffer Zones", claimType: "ANALYSIS", desc: "Managing ~3.2 million Syrian refugees and maintaining military safe zones across northern Syria against YPG/PKK." }
      ],
      policyDebates: [
        { topic: "New Civil Constitution vs 1982 Basic Law", desc: "Erdoğan pushing to draft a completely new civilian constitution to replace the 1982 post-coup document." },
        { topic: "Balancing BRICS/SCO vs NATO Membership", desc: "Debate over formal application to BRICS while maintaining full operational membership in NATO." }
      ],
      institutions: [
        { name: "Presidential Complex (Beştepe)", role: "Central executive apparatus directing foreign policy and defense strategy." },
        { name: "MİT (National Intelligence Organization)", role: "Foreign intelligence and armed drone counter-terror operations agency." },
        { name: "SSB (Defense Industry Agency)", role: "Procurement and defense industrial coordination body." }
      ],
      foreignPolicyDoctrine: "Strategic Autonomy, 'Blue Homeland' (Mavi Vatan) maritime sovereignty, active mediation (Black Sea grain corridor), and expanding commercial-defense footprint across Africa and Turkic states (Organization of Turkic States)."
    },
    geographyBorders: {
      landArea: "783,562 km² (Anatolia in Asia: 97%; East Thrace in Europe: 3%; Rank: 36th globally)",
      location: "Transcontinental crossroads bridging Southeastern Europe and Southwestern Asia",
      continent: "Eurasia",
      latRange: "35° N to 42° N",
      lngRange: "25° E to 45° E",
      topography: "Central Anatolian plateau surrounded by the Pontic Mountains in the north and Taurus Mountains in the south; rugged mountainous highlands in Eastern Anatolia.",
      rivers: [
        "Euphrates River (Fırat - 2,800 km total; headwaters rise in Eastern Turkey, vital GAP dam system)",
        "Tigris River (Dicle - 1,900 km total; headwaters rise in southeastern Turkey)",
        "Kızılırmak River (1,355 km - Longest river flowing entirely within Turkey to Black Sea)",
        "Sakarya River (Flows through northwestern Anatolia)"
      ],
      mountains: [
        "Mount Ararat (Ağrı Dağı - 5,137 m - Highest peak in Turkey, biblical volcanic peak in Eastern Anatolia)",
        "Taurus Mountains (Toros - Stretches parallel to the southern Mediterranean coastline)",
        "Pontic Mountains (Northern coastal barrier along the Black Sea)"
      ],
      seas: [
        "Black Sea (Northern coastline spanning 1,700 km; natural gas reserves at Sakarya field)",
        "Mediterranean Sea (Southern coastline; major tourism and commercial shipping corridor)",
        "Aegean Sea (Western coastline; disputed territorial waters and airspace with Greece)",
        "Sea of Marmara (Inland sea completely enclosed by Turkish territory, connecting Bosphorus to Dardanelles)"
      ],
      majorOceans: ["Atlantic Ocean (via Mediterranean) and Black Sea basin"],
      coastline: "8,333 km (Surrounded on three sides by water: Black Sea, Aegean, Mediterranean, and Marmara)",
      climates: [
        "Mediterranean (Hot, dry summers and mild, rainy winters along Aegean and southern coasts)",
        "Black Sea Oceanic (Warm summers, cool winters, and heavy rainfall year-round)",
        "Continental (Severe cold winters and hot dry summers across central and eastern Anatolia)"
      ],
      landBorders: [
        { country: "Syria", id: "SYR", borderLength: "911 km", region: "Southern Frontier", status: "Fortified Wall & Buffer Zone", strategicContext: "Concrete security wall; scene of Turkish military operations against ISIS and YPG/PKK." },
        { country: "Iran", id: "IRN", borderLength: "534 km", region: "High Mountain Frontier", status: "Border Wall / Demarcated since 1639", strategicContext: "Ancient peaceful frontier; concrete border wall erected to prevent irregular migration." },
        { country: "Iraq", id: "IRQ", borderLength: "384 km", region: "Northern Iraqi Mountains", status: "Mountainous / Operation Claw-Lock", strategicContext: "Rugged terrain; Turkish military maintains forward operating bases fighting PKK headquarters in Qandil." },
        { country: "Greece", id: "GRC", borderLength: "206 km", region: "Evros / Meriç River", status: "NATO Frontier with Island Tensions", strategicContext: "River border; disputes over Aegean airspace, continental shelf, and militarized Greek islands." },
        { country: "Bulgaria", id: "BGR", borderLength: "269 km", region: "Thrace", status: "Open European Frontier / High-Volume Highway", strategicContext: "Primary overland road artery for Turkish exports into the European Union." },
        { country: "Georgia", id: "GEO", borderLength: "273 km", region: "Black Sea Frontier", status: "Peaceful / Sarp Checkpoint", strategicContext: "Visa-free passport-free border; Baku-Tbilisi-Ceyhan oil pipeline transit corridor." },
        { country: "Armenia", id: "ARM", borderLength: "311 km", region: "Aras River Basin", status: "Closed Border since 1993", strategicContext: "Border closed in solidarity with Azerbaijan; normalization talks progressing following Karabakh settlement." },
        { country: "Azerbaijan (Nakhchivan)", id: "AZE", borderLength: "17 km", region: "Dilucu / Aras Crossing", status: "Brotherly Strategic Alliance Border", strategicContext: "Turkey's shortest border, providing direct connection to Azerbaijan's Nakhchivan exclave." }
      ],
      maritimeBorders: [
        { country: "Russia, Ukraine, Romania, Bulgaria", id: "RUS", boundary: "Black Sea exclusive economic zone median lines." },
        { country: "Libya", id: "LBY", boundary: "Controversial 2019 Turkey-Libya Maritime Memorandum establishing a Mediterranean EEZ corridor." }
      ],
      majorIslands: [
        "Gökçeada (Imbros) & Bozcaada (Tenedos) - Strategic islands commanding the entrance to the Dardanelles",
        "Marmara Island (Sea of Marmara)"
      ],
      strategicGeography: "Controls the Turkish Straits (Bosphorus and Dardanelles), the only maritime chokepoints connecting the Black Sea to global oceans, governing naval transit under the 1936 Montreux Convention."
    },
    economy: {
      gdpNominal: "$1.12 Trillion (17th largest globally, IMF 2024)",
      gdpPPP: "$3.57 Trillion (11th largest globally by World Bank PPP)",
      gdpPerCapita: "$13,100 Nominal / $41,600 PPP",
      gdpGrowth: "+3.0% (2024 IMF estimate)",
      currency: "Turkish Lira (TRY / ₺)",
      majorIndustries: [
        "Automotive Manufacturing (Major European assembly hub for Ford, Toyota, Renault, Fiat, Togg)",
        "Defense & Aerospace (Baykar, TAI, Aselsan, Roketsan - record $5.5B exports)",
        "Textiles & Ready-to-Wear Apparel (Major supplier to EU brands)",
        "Iron, Steel & White Goods (Beko / Arçelik household appliances)",
        "Construction & International Contracting (World #2 after China in global construction contracts)",
        "Tourism & Hospitality (Over 56 million international tourists annually; #4 globally)"
      ],
      majorExports: [
        "Motor Vehicles & Automotive Components ($35B+)",
        "Machinery, Mechanical Appliances & Boilers ($25B)",
        "Iron & Steel Products ($16B)",
        "Apparel & Knitwear ($18B)",
        "Defense Equipment & Armed Drones ($5.5B+)",
        "Chemicals and Electrical Machinery"
      ],
      majorImports: [
        "Mineral Fuels & Petroleum (Natural gas and crude oil: $70B+)",
        "Gold & Precious Metals (Domestic hedge against inflation)",
        "Industrial Machinery & Electronics",
        "Iron Ore, Scrap Metal & Motor Vehicles"
      ],
      majorTradePartners: [
        { country: "Germany", share: "Top export destination ($21B+; host to 3M+ Turkish diaspora)" },
        { country: "Russia", share: "Primary energy import source and tourism partner ($55B+)" },
        { country: "China", share: "Major import supplier for industrial machinery and electronics" },
        { country: "United States", share: "Key defense customer and bilateral trade partner ($30B+)" },
        { country: "Italy", share: "Major Mediterranean manufacturing partner" }
      ],
      energyPosition: "Strategic Energy Transit Hub: Crucial bridge through which Caspian, Russian, and Middle Eastern natural gas flows to Europe via TANAP (Southern Gas Corridor), TurkStream, and Blue Stream. Major Black Sea Sakarya gas field producing domestic gas; Akkuyu Nuclear Power Plant being built by Rosatom.",
      naturalResources: "Boron (controls ~73% of world's proven boron reserves), coal, iron ore, copper, chromium, antimony, marble, and hydroelectric potential.",
      tradeOrgs: [
        "EU Customs Union (Member since 1995)",
        "G20 (Founding Member)",
        "World Trade Organization (WTO)",
        "OECD (Founding Member)",
        "Organization of Turkic States (OTS HQ in Istanbul)",
        "D-8 Organization for Economic Cooperation"
      ],
      economicStrategicImportance: "The primary manufacturing and automotive bridge between Europe and Asia; pivotal logistics crossroads through the Middle Corridor (Caspian transit)."
    },
    military: {
      expenditure: "$40.0 Billion (Surging past 2% of GDP in 2024)",
      personnel: {
        active: "425,000 active military personnel (2nd largest army in NATO after the United States)",
        reserves: "380,000 trained reserves",
        conscription: "Mandatory 6-month military service for males aged 20+ (with paid exemption option)"
      },
      doctrine: "Blue Homeland (Mavi Vatan) maritime sovereignty; forward cross-border counter-terrorism; indigenous defense technology self-sufficiency; armed drone swarm saturation; expeditionary basing in Qatar, Somalia, and Northern Cyprus.",
      nuclearStockpile: "Non-nuclear state; hosts ~20 to 50 US B61 nuclear gravity bombs under NATO nuclear sharing at Incirlik Air Base.",
      defenseIndustry: "Baykar Technologies (Bayraktar TB2/TB3/Akinci/Kizilelma), TAI (KAAN 5th-gen fighter, Anka, Gokbey), Aselsan (radar & avionics), Roketsan (missiles), Havelsan (software), BMC.",
      majorDomesticSystems: [
        "Bayraktar TB2 & Akinci Armed Drone Systems",
        "Bayraktar Kızılelma Unmanned Carrier-Capable Stealth Fighter",
        "TAI KAAN 5th-Generation Stealth Fighter (in flight test)",
        "TCG Anadolu (L400) Amphibious Drone Carrier / Assault Ship",
        "Altay Main Battle Tank (with domestic composite armor)",
        "Siper Long-Range Air Defense System & Hisar Tactical SAMs",
        "Atmaca Anti-Ship Cruise Missile & SOM Standoff Missile",
        "T-129 ATAK Attack Helicopter"
      ],
      majorImports: ["S-400 Triumf missile system (Russia), F-16 Block 70 upgrade kits (US/Lockheed Martin)"],
      majorExports: ["Bayraktar TB2/Akinci drones (exported to 35+ countries), armored vehicles (Ejder Yalcin, Kirpi), Milgem Ada-class corvettes (Pakistan, Ukraine)"],
      militaryAlliances: ["NATO (Member since 1952)", "Shusha Declaration Mutual Defense Pact with Azerbaijan", "Turkic Defense Cooperation"],
      categories: [
        {
          name: "ARMED UNMANNED AERIAL VEHICLES (UAVS)",
          desc: "World's most commercially exported and battle-proven combat drone fleet.",
          systems: [
            { name: "Bayraktar TB2", type: "Medium-Altitude Long-Endurance (MALE) Armed UAV", origin: "Turkey (Baykar)", status: "CONFIRMED", quantity: "600+ produced globally", role: "Decisive in conflicts across Libya, Syria, Nagorno-Karabakh, and Ukraine, firing MAM-L laser-guided smart micro-munitions." },
            { name: "Bayraktar Akıncı", type: "High-Altitude Long-Endurance Heavy Combat UAV", origin: "Turkey (Baykar)", status: "CONFIRMED", quantity: "Operational with Air Force", role: "Twin turboprop engine drone carrying 1,500 kg payload including cruise missiles and AESA radar." }
          ]
        },
        {
          name: "AMPHIBIOUS POWER PROJECTION & NAVY",
          desc: "World's first dedicated drone aircraft carrier anchoring the Blue Homeland doctrine.",
          systems: [
            { name: "TCG Anadolu (L400)", type: "Amphibious Assault Ship / Drone Carrier", origin: "Turkey (Sedef/Navantia)", status: "CONFIRMED", quantity: "Commissioned flagship", role: "27,000-tonne assault ship adapted to launch Bayraktar TB3 folding-wing and Kizilelma jet drones." }
          ]
        }
      ]
    },
    relations: {
      main: [
        { id: "TUR_AZE", country: "Azerbaijan", flag: "🇦🇿", status: "Brotherly Strategic Alliance (\"One Nation, Two States\")", color: "#10b981", note: "Mutual defense treaty (Shusha Declaration), joint military operations, TANAP gas pipeline." },
        { id: "TUR_RUS", country: "Russia", flag: "🇷🇺", status: "Strategic Transactional Balancing", color: "#3b82f6", note: "Akkuyu nuclear plant, TurkStream gas, balancing rivalries in Syria, Libya, and South Caucasus." },
        { id: "TUR_USA", country: "United States", flag: "🇺🇸", status: "NATO Ally with Frictional Co-existence", color: "#3b82f6", note: "Incirlik Air Base, F-16 Block 70 procurement, disputes over YPG support and CAATSA sanctions." },
        { id: "TUR_GRC", country: "Greece", flag: "🇬🇷", status: "NATO Neighbor with Aegean Territorial Disputes", color: "#eab308", note: "Disputes over Aegean continental shelf and airspace, alongside recent Athens Declaration dialogue." }
      ],
      searchable: []
    },
    strategicLocations: [
      { name: "Bosphorus Strait (Istanbul)", type: "Strategic Chokepoint", coords: "41.11° N, 29.07° E", significance: "31-km strait bisecting Istanbul, connecting the Black Sea to Sea of Marmara under 1936 Montreux Convention." },
      { name: "Dardanelles Strait (Çanakkale)", type: "Strategic Chokepoint", coords: "40.20° N, 26.40° E", significance: "61-km strait linking Sea of Marmara to Aegean Sea and Mediterranean." },
      { name: "Incirlik Air Base (Adana)", type: "NATO Strategic Air Base", coords: "37.00° N, 35.42° E", significance: "Hosts US Air Force wings and NATO nuclear sharing B61 gravity bomb stockpile." },
      { name: "Ceyhan Petroleum Terminal", type: "Energy Export Megahub", coords: "36.88° N, 35.93° E", significance: "Mediterranean marine terminal for the Baku-Tbilisi-Ceyhan (BTC) and Kirkuk-Ceyhan crude oil pipelines." }
    ],
    currentTensions: [
      {
        title: "Black Sea Naval Mines & Grain Escort Tensions",
        severity: "Elevated Maritime Security Alert",
        color: "#f97316",
        desc: "Monitoring floating naval drift mines in the Black Sea and enforcing the Montreux Convention prohibiting warship transit."
      }
    ],
    keyEvents: [
      { title: "1453 Conquest of Constantinople", category: "Historical Turning Point", date: "May 29, 1453" },
      { title: "1923 Proclamation of the Republic by Atatürk", category: "Secular Statehood", date: "October 29, 1923" },
      { title: "1936 Montreux Convention on the Turkish Straits", category: "Maritime Sovereignty", date: "July 20, 1936" }
    ],
    indiaImpact: {
      headline: "Turkey–India Complex Geopolitical Dynamics: Trade vs Multilateral Positioning",
      points: [
        { title: "Bilateral Trade Expansion ($12B+)", desc: "Bilateral commerce exceeds $12 Billion, anchored by Indian exports of refined fuels, automotive parts, and machinery." },
        { title: "Kashmir Stance & Pakistan Alliance", desc: "Ankara's vocal support for Pakistan on Kashmir at the UN prompts India to deepen strategic defense ties with Greece, Cyprus, and Armenia." },
        { title: "Disaster Relief Solidarity (Operation Dost)", desc: "India dispatched NDRF search-and-rescue teams and field hospitals to Turkey within hours of the devastating February 2023 earthquake." }
      ]
    }
  },

  "AUS": {
  "id": "AUS",
  "name": "Australia",
  "officialName": "Commonwealth of Australia",
  "commonName": "Australia",
  "capital": "Canberra",
  "capitalCoords": {
    "lat": -35.2809,
    "lng": 149.13
  },
  "capitalAdmin": {
    "role": "Federal Administrative Seat & National Capital of Australia",
    "political": "Location of Parliament House on Capital Hill, Federal Cabinet, High Court of Australia, and national defense headquarters.",
    "geographic": "Situated in the Australian Capital Territory (ACT), 280 km southwest of Sydney.",
    "strategic": "Apex command nexus for Australian Defence Force (Russell Offices), Department of Foreign Affairs and Trade (DFAT), and Australian Geospatial-Intelligence Organisation."
  },
  "region": "Oceania",
  "subregion": "Australia and New Zealand",
  "flag": "🇦🇺",
  "iso2": "au",
  "isoCode": "AUS / 036",
  "lat": -25.2744,
  "lng": 133.7751,
  "area": "7,692,024 km² (Rank: 6th globally)",
  "population": "26.8 Million (2024 ABS / UN estimate)",
  "politicalSystemType": "Federal Parliamentary Constitutional Monarchy",
  "currency": "Australian Dollar (AUD / A$)",
  "languages": "English (Official de facto; 75%+ spoken at home)",
  "timeZones": "UTC+8 to UTC+10.5 (AEST, ACST, AWST)",
  "foundingInfo": "Federation proclaimed January 1, 1901; Australia Act 1986 established total constitutional independence from the UK.",
  "tagline": "Indo-Pacific Maritime Anchor, Critical Minerals Titan & AUKUS Pillar",
  "overview": {
    "beginner": "Australia is the world's sixth-largest country by land area and the only nation governing an entire continent. A developed democracy of 26.8 million people, Australia is a critical economic powerhouse endowed with immense reserves of iron ore, lithium, gold, and liquefied natural gas. As an Indo-Pacific maritime democracy, Australia plays a pivotal security role anchoring the Quad alliance and the historic AUKUS submarine partnership.",
    "advanced": "The Commonwealth of Australia exercises strategic stewardship across three oceanic approaches: the Pacific, Indian, and Southern Oceans, overseeing the world's third-largest exclusive economic zone (8.2M km²). Australia's national defense doctrine has undergone a historic realignment under the 2023 Defence Strategic Review, shifting from low-intensity expeditionary deployments to focused 'National Defence' and northern maritime deterrence. Through the AUKUS security partnership with the US and UK, Australia is procuring conventionally armed, nuclear-powered attack submarines (SSNs) to secure vulnerable sea lines of communication across the Indo-Pacific."
  },
  "history": [
    {
      "year": "65,000+ BCE",
      "title": "Aboriginal & Torres Strait Islander Custodianship",
      "phase": "Indigenous Pre-Colonial Era",
      "whatHappened": "Aboriginal Australians and Torres Strait Islanders established continuous human habitation, forming the world's oldest surviving cultural traditions.",
      "where": "Continental Australia and offshore archipelagos",
      "actors": [
        "First Nations Peoples of Australia"
      ],
      "whyItMattered": "Deep spiritual connection to 'Country' and sustainable continental land management over sixty millennia.",
      "consequences": "Recognized as Australia's foundational cultural inheritance; subject of contemporary constitutional reconciliation.",
      "claimType": "HISTORICAL FACT",
      "sources": "Australian Institute of Aboriginal and Torres Strait Islander Studies (AIATSIS)"
    },
    {
      "year": "1788",
      "title": "British Colonization & First Fleet Arrival",
      "phase": "Colonial Era",
      "whatHappened": "Captain Arthur Phillip landed the First Fleet at Sydney Cove (Port Jackson), establishing the British penal colony of New South Wales.",
      "where": "Sydney Cove, New South Wales",
      "actors": [
        "Captain Arthur Phillip",
        "British Admiralty"
      ],
      "whyItMattered": "Initiated British settlement, English common law administration, and widespread displacement of First Nations populations.",
      "consequences": "Established agricultural settlements and sheep pastoralism across southeastern Australia.",
      "claimType": "HISTORICAL FACT",
      "sources": "State Library of New South Wales / British National Archives"
    },
    {
      "year": "1901",
      "title": "Federation of the Commonwealth of Australia",
      "phase": "Nation-State Founding",
      "whatHappened": "Six self-governing British colonies united under a single federal constitution approved by popular referendum.",
      "where": "Melbourne / Sydney / Federal Parliament",
      "actors": [
        "Sir Edmund Barton",
        "Sir Henry Parkes",
        "Queen Victoria"
      ],
      "whyItMattered": "Created a unified sovereign continental federal democracy combining British parliamentary traditions with American federalism ('Washminster system').",
      "consequences": "Centralized customs, postal services, national defense, and immigration policy.",
      "claimType": "HISTORICAL FACT",
      "sources": "Commonwealth of Australia Constitution Act 1900 / National Archives of Australia"
    },
    {
      "year": "1942",
      "title": "Battle of the Coral Sea & US Alliance Pivot",
      "phase": "World War II Pacific Theater",
      "whatHappened": "Following the bombing of Darwin and the fall of Singapore, Prime Minister John Curtin pivoted Australia's strategic alliance from Britain to the United States.",
      "where": "Coral Sea / Northern Australia / Papua New Guinea",
      "actors": [
        "John Curtin",
        "General Douglas MacArthur",
        "US & Australian Navies"
      ],
      "whyItMattered": "Prevented Japanese amphibious isolation of Australia and laid the foundation for the 1951 ANZUS Treaty.",
      "consequences": "Firmly embedded Australia into the US-led Indo-Pacific alliance architecture.",
      "claimType": "HISTORICAL FACT",
      "sources": "Australian War Memorial Archives / US Navy Naval History and Heritage Command"
    },
    {
      "year": "2021",
      "title": "AUKUS Strategic Partnership Announcement",
      "phase": "21st Century Deterrence",
      "whatHappened": "Australia, the United States, and the United Kingdom signed the AUKUS security partnership to equip the Royal Australian Navy with nuclear-powered attack submarines.",
      "where": "Canberra, Washington, London",
      "actors": [
        "Scott Morrison",
        "Joe Biden",
        "Boris Johnson"
      ],
      "whyItMattered": "Represents the most consequential upgrade in Australian military capability since WWII, incorporating advanced hypersonic weapons and quantum AI capabilities.",
      "consequences": "Triggered significant diplomatic friction with China and recalibrated Indo-Pacific maritime balance.",
      "claimType": "HISTORICAL FACT",
      "sources": "AUKUS Leaders Statement / Australian Department of Defence"
    }
  ],
  "politicalSystem": {
    "type": "Federal Parliamentary Constitutional Monarchy",
    "constitution": "Constitution of the Commonwealth of Australia (1901)",
    "branches": [
      {
        "name": "Executive",
        "role": "Head of State (King Charles III represented by Governor-General Sam Mostyn); Prime Minister Anthony Albanese and Federal Cabinet exercising executive authority."
      },
      {
        "name": "Legislature",
        "role": "Bicameral Federal Parliament comprising the 151-member House of Representatives and the 76-member Senate."
      },
      {
        "name": "Judiciary",
        "role": "High Court of Australia exercising constitutional interpretation and supreme appellate jurisdiction."
      }
    ],
    "currentLeadership": {
      "headOfState": "King Charles III (Governor-General: Sam Mostyn)",
      "headOfGovernment": "Prime Minister Anthony Albanese (Australian Labor Party)",
      "foreignMinister": "Senator Penny Wong (Minister for Foreign Affairs)",
      "defenseMinister": "Richard Marles (Deputy Prime Minister & Minister for Defence)"
    },
    "rulingParty": "Australian Labor Party (ALP) - Center-left governing party",
    "oppositionParties": [
      {
        "name": "Liberal-National Coalition",
        "seats": "54 seats (House)",
        "stance": "Center-right opposition led by Peter Dutton"
      },
      {
        "name": "Australian Greens",
        "seats": "4 seats (House), 11 (Senate)",
        "stance": "Environmentalist, progressive social policy"
      }
    ],
    "parliamentDetails": "Bicameral Parliament sitting at Capital Hill, Canberra. The Senate is elected via proportional representation with strong crossbench legislative review.",
    "recentElections": "Federal Election May 2022 resulting in Labor majority government. Next federal election due by May 2025.",
    "domesticDevelopments": [
      {
        "title": "Future Made in Australia Act",
        "claimType": "VERIFIED POLICY",
        "desc": "A$22.7B industrial policy package promoting clean energy manufacturing, critical minerals refining, and quantum computing."
      },
      {
        "title": "Defence Strategic Review Implementation",
        "claimType": "VERIFIED POLICY",
        "desc": "Restructuring ADF posture towards long-range strike, maritime denial, and northern base hardening."
      }
    ],
    "currentIssues": [
      {
        "title": "Housing Affordability & Cost of Living",
        "claimType": "DOMESTIC CHALLENGE",
        "desc": "High interest rates and acute housing shortage dominating domestic legislative debate."
      },
      {
        "title": "Geopolitical Balancing with China",
        "claimType": "FOREIGN POLICY",
        "desc": "Managing economic trade stabilization with Beijing while hardening security counter-interference defenses."
      }
    ],
    "policyDebates": [
      {
        "topic": "AUKUS SSN Procurement Timeline",
        "desc": "Debate over $368B cost, workforce readiness, and sovereign control of Virginia-class and SSN-AUKUS submarines."
      }
    ],
    "institutions": [
      {
        "name": "National Security Committee (NSC)",
        "role": "Apex executive cabinet committee overseeing intelligence, defense, and foreign policy decisions."
      },
      {
        "name": "Australian Security Intelligence Organisation (ASIO)",
        "role": "Domestic counter-espionage and counter-terrorism agency."
      }
    ],
    "federalDynamics": "Six states (NSW, VIC, QLD, WA, SA, TAS) and two major territories (ACT, NT) sharing health, education, and transport funding via Council of Australian Governments / National Cabinet.",
    "foreignPolicyDoctrine": "Middle-power diplomacy anchored in the US alliance, Indo-Pacific maritime rules-based order, Quad cooperation, and South Pacific regional stability."
  },
  "geographyBorders": {
    "landArea": "7,692,024 km² (Entire continental landmass)",
    "location": "Continent between the Indian and South Pacific Oceans in Oceania.",
    "continent": "Oceania",
    "latRange": "9°S to 44°S",
    "lngRange": "112°E to 154°E",
    "coastline": "25,760 km mainland (35,877 km including offshore islands)",
    "majorOceans": [
      "Pacific Ocean",
      "Indian Ocean",
      "Southern Ocean"
    ],
    "majorIslands": [
      "Tasmania",
      "Christmas Island",
      "Cocos (Keeling) Islands",
      "Norfolk Island",
      "Lord Howe Island"
    ],
    "strategicGeography": "Controls southern oceanic choke approaches connecting the Indian and Pacific Oceans (Bass Strait, Torres Strait, Timor Sea).",
    "topography": "Low plateau with deserts (Outback) occupying central and western regions; Great Dividing Range along eastern littoral; vast fertile Murray-Darling river basin.",
    "rivers": [
      "Murray River",
      "Darling River",
      "Murrumbidgee River",
      "Flinders River"
    ],
    "mountains": [
      "Mount Kosciuszko (2,228 m)",
      "Great Dividing Range",
      "Flinders Ranges"
    ],
    "seas": [
      "Tasman Sea",
      "Coral Sea",
      "Timor Sea",
      "Arafura Sea"
    ],
    "climates": [
      "Arid to semi-arid in interior",
      "Temperate in south and east",
      "Tropical monsoonal in north"
    ],
    "landBorders": [],
    "maritimeBorders": [
      {
        "country": "Indonesia",
        "id": "IDN",
        "boundary": "Timor Sea / Arafura Sea Maritime Delimitation Treaty"
      },
      {
        "country": "Papua New Guinea",
        "id": "PNG",
        "boundary": "Torres Strait Treaty 1978"
      },
      {
        "country": "New Zealand",
        "id": "NZL",
        "boundary": "Tasman Sea Maritime Boundary Agreement"
      },
      {
        "country": "Timor-Leste",
        "id": "TLS",
        "boundary": "Greater Sunrise Maritime Delimitation Accord 2018"
      }
    ]
  },
  "economy": {
    "gdpNominal": "$1.72 Trillion (Rank: 13th globally)",
    "gdpPPP": "$1.81 Trillion",
    "gdpPerCapita": "$65,100 (High-income advanced economy)",
    "gdpGrowth": "+1.5% (2024 IMF estimate)",
    "currency": "Australian Dollar (AUD / A$)",
    "majorIndustries": [
      "Mining & Resource Extraction (Iron Ore, Lithium, Coal, Bauxite, Gold)",
      "Liquefied Natural Gas (LNG) Production & Export",
      "Financial Services & Superannuation Asset Management ($3.9T)",
      "Higher Education Services for International Students",
      "Agriculture (Beef, Wheat, Barley, Wool, Wine)"
    ],
    "majorExports": [
      "Iron Ore & Concentrates ($136B/yr - #1 Global Exporter)",
      "Liquefied Natural Gas ($68B/yr)",
      "Thermal & Metallurgical Coal ($60B/yr)",
      "Gold & Critical Minerals (Lithium Spodumene, Rare Earths)",
      "Beef & Wheat Agricultural Commodities"
    ],
    "majorImports": [
      "Refined Petroleum Products & Transportation Fuels",
      "Motor Vehicles & Heavy Freight Trucks",
      "Telecommunications Equipment & Computing Hardware",
      "Pharmaceuticals & Medical Devices"
    ],
    "energyPosition": "Major global fossil energy exporter while rapidly transitioning domestic grid to solar and wind (aiming for 82% renewables by 2030).",
    "naturalResources": "Vast reserves of iron ore, lithium, bauxite, nickel, zinc, uranium (world's largest known reserves), copper, and rare earths.",
    "tradeOrgs": [
      "World Trade Organization (WTO)",
      "Asia-Pacific Economic Cooperation (APEC)",
      "CPTPP (Comprehensive and Progressive Agreement for Trans-Pacific Partnership)",
      "RCEP (Regional Comprehensive Economic Partnership)"
    ],
    "economicStrategicImportance": "World's indispensable supplier of steelmaking inputs (iron ore/coal) and foundational critical minerals for the global green energy and electric vehicle transition.",
    "indiaEconomicConnection": "Comprehensive Economic Cooperation and Trade Agreement (ECTA) operational; Australia-India Critical Minerals Investment Partnership actively supplying lithium and cobalt to Indian clean tech manufacturing.",
    "majorTradingPartners": [
      {
        "country": "China",
        "share": "32.5% of total merchandise trade"
      },
      {
        "country": "Japan",
        "share": "11.2% of total trade"
      },
      {
        "country": "United States",
        "share": "8.4% of total trade"
      },
      {
        "country": "South Korea",
        "share": "6.8% of total trade"
      },
      {
        "country": "India",
        "share": "4.9% of total trade ($30B+ bilateral)"
      }
    ]
  },
  "military": {
    "expenditure": "$35.8 Billion (2.1% of GDP - Defence Portfolio Budget)",
    "personnel": {
      "active": "60,330 Sovereign Active Duty Armed Forces",
      "reserves": "29,800 Active Reserve Formations"
    },
    "doctrine": "National Defence doctrine focused on denial strategies, long-range precision strike, northern air and maritime base hardening, and integrated deterrence under the US alliance.",
    "nuclearStockpile": "Non-nuclear weapons state strictly party to the NPT. Under AUKUS, procuring conventionally armed nuclear-powered submarines under IAEA Article 14 safeguards.",
    "defenseIndustry": "Domestic shipbuilders (ASC Pty Ltd, Austal), munitions manufacturing (Thales Australia, NIOA), CEA Technologies active phased-array radars, and drone systems (Boeing MQ-28 Ghost Bat).",
    "majorDomesticSystems": [
      "CEA Technologies CEAFAR Active Electronically Scanned Array (AESA) Radars",
      "Boeing MQ-28 Ghost Bat Collaborative Combat Aircraft (Loyal Wingman Drone)",
      "Bushmaster Protected Mobility Vehicles (4x4 Infantry Mobility Vehicle)",
      "Hawkei Light Protected Tactical Vehicles"
    ],
    "majorImports": [
      "F-35A Lightning II 5th-Gen Stealth Fighters (Lockheed Martin, USA)",
      "Virginia-class / SSN-AUKUS Nuclear Attack Submarines (USA / UK)",
      "Hobart-class Air Warfare Destroyers (Navantia design, Spain)",
      "M1A2 SEPv3 Abrams Main Battle Tanks (General Dynamics, USA)",
      "HIMARS High Mobility Artillery Rocket Systems (USA)"
    ],
    "majorExports": [
      "Bushmaster armored vehicles (supplied to Ukraine, Indonesia, Netherlands)",
      "Advanced radar sensors, counter-drone systems, and specialized communications software"
    ],
    "militaryAlliances": [
      "ANZUS Security Treaty (1951 with United States)",
      "AUKUS Security Partnership (Australia, United Kingdom, United States)",
      "The Quad (Quadrilateral Security Dialogue with India, Japan, US)",
      "Five Power Defence Arrangements (FPDA with UK, NZ, Singapore, Malaysia)",
      "Five Eyes Intelligence Alliance (US, UK, Canada, Australia, NZ)"
    ],
    "categories": [
      {
        "name": "ROYAL AUSTRALIAN NAVY (FLEET COMMAND)",
        "desc": "Expeditionary surface warfare, anti-submarine warfare, and future nuclear submarine flotilla.",
        "systems": [
          {
            "name": "Hobart-Class Air Warfare Destroyers (Aegis Combat System)",
            "type": "Guided Missile Destroyer",
            "origin": "Australia / Navantia Spain",
            "status": "CONFIRMED",
            "quantity": "3 in active service",
            "role": "Fleet area air defense and maritime strike."
          },
          {
            "name": "Collins-Class Diesel-Electric Submarines",
            "type": "Attack Submarine (SSK)",
            "origin": "Australia / Kockums",
            "status": "CONFIRMED",
            "quantity": "6 operational (undergoing Life-of-Type Extension)",
            "role": "Undersea intelligence, reconnaissance, and anti-surface strike."
          },
          {
            "name": "Canberra-Class Amphibious Assault Ships (LHD)",
            "type": "Helicopter Landing Dock",
            "origin": "Australia / Navantia",
            "status": "CONFIRMED",
            "quantity": "2 ships (HMAS Canberra & Adelaide)",
            "role": "Amphibious troop insertion, humanitarian disaster relief."
          }
        ]
      },
      {
        "name": "ROYAL AUSTRALIAN AIR FORCE (RAAF)",
        "desc": "5th-generation stealth combat aviation, maritime surveillance, and strategic airlift.",
        "systems": [
          {
            "name": "Lockheed Martin F-35A Lightning II",
            "type": "5th-Gen Stealth Multi-Role Fighter",
            "origin": "United States",
            "status": "CONFIRMED",
            "quantity": "72 aircraft operational",
            "role": "Stealth air superiority and precision strike."
          },
          {
            "name": "Boeing P-8A Poseidon",
            "type": "Maritime Patrol & Anti-Submarine Aircraft",
            "origin": "United States",
            "status": "CONFIRMED",
            "quantity": "14 aircraft",
            "role": "Wide-area maritime surveillance, ASW, and sea lane interdiction."
          },
          {
            "name": "Boeing E-7A Wedgetail",
            "type": "Airborne Early Warning & Control (AEW&C)",
            "origin": "Australia / USA",
            "status": "CONFIRMED",
            "quantity": "6 aircraft",
            "role": "Battle management and air defense coordination."
          }
        ]
      },
      {
        "name": "AUSTRALIAN ARMY (LAND COMBAT)",
        "desc": "Mechanized combined-arms brigades, long-range fires, and amphibious combat groups.",
        "systems": [
          {
            "name": "HIMARS M142 Rocket Artillery",
            "type": "Long-Range Precision Strike",
            "origin": "United States",
            "status": "CONFIRMED",
            "quantity": "42 launchers on order / arriving",
            "role": "Anti-ship and land-attack missile strikes up to 500 km (PrSM)."
          },
          {
            "name": "Redback AS21 Infantry Fighting Vehicles",
            "type": "Tracked Armored Combat Vehicle",
            "origin": "South Korea (Hanwha Defence)",
            "status": "CONFIRMED",
            "quantity": "129 on order (Australian manufacture)",
            "role": "Heavy mechanized infantry combat protection."
          }
        ]
      }
    ]
  },
  "relations": {
    "main": [
      {
        "id": "AUS_USA",
        "country": "United States",
        "flag": "🇺🇸",
        "status": "Indispensable Treaty Ally (ANZUS)",
        "color": "#10b981",
        "note": "Deepest defense, intelligence (Five Eyes), and technological interoperability."
      },
      {
        "id": "AUS_IND",
        "country": "India",
        "flag": "🇮🇳",
        "status": "Comprehensive Strategic Partner",
        "color": "#06b6d4",
        "note": "Quad alliance anchor, Malabar maritime exercises, and critical minerals corridor."
      },
      {
        "id": "AUS_CHN",
        "country": "China",
        "flag": "🇨🇳",
        "status": "Primary Economic Trading Partner with Strategic Friction",
        "color": "#eab308",
        "note": "Top buyer of Australian commodities amid balancing against Chinese maritime assertiveness."
      },
      {
        "id": "AUS_GBR",
        "country": "United Kingdom",
        "flag": "🇬🇧",
        "status": "Historic Sovereign & Defense Partner",
        "color": "#3b82f6",
        "note": "AUKUS pillar, Five Power Defence Arrangements, Commonwealth institutional links."
      },
      {
        "id": "AUS_JPN",
        "country": "Japan",
        "flag": "🇯🇵",
        "status": "Special Strategic Defense Partner",
        "color": "#10b981",
        "note": "Reciprocal Access Agreement (RAA), joint aerial drills, and energy security alliance."
      }
    ],
    "searchable": []
  },
  "strategicLocations": [
    {
      "name": "Joint Defence Facility Pine Gap (Alice Springs)",
      "type": "Top-Secret Satellite Intelligence Station",
      "coords": "23.79° S, 133.73° E",
      "significance": "Joint US-Australian SIGINT station collecting satellite telemetry and tracking global missile launches."
    },
    {
      "name": "Fleet Base West / HMAS Stirling (Garden Island, WA)",
      "type": "Primary Submarine & Naval Megabase",
      "coords": "32.20° S, 115.68° E",
      "significance": "Homeport of Collins-class submarines; future operating base for rotational US/UK SSNs under Submarine Rotational Force-West."
    },
    {
      "name": "RAAF Base Tindal (Northern Territory)",
      "type": "Forward Air Defense Bastion",
      "coords": "14.52° S, 132.38° E",
      "significance": "Heavily upgraded forward base capable of accommodating US B-52 and B-21 strategic stealth bombers."
    },
    {
      "name": "Port of Darwin (Northern Territory)",
      "type": "Northern Maritime Gateway",
      "coords": "12.46° S, 130.84° E",
      "significance": "Hosts annual Marine Rotational Force-Darwin (MRF-D) and anchors northern littoral approaches."
    }
  ],
  "currentTensions": [
    {
      "title": "South China Sea & Taiwan Strait Maritime Transit Rights",
      "severity": "Elevated Strategic Watch",
      "color": "#f59e0b",
      "desc": "Monitoring PLA-N naval close encounters with RAAF P-8A aircraft and upholding UNCLOS navigational freedom."
    }
  ],
  "keyEvents": [
    {
      "title": "1901 Federation of Australia",
      "category": "Constitutional Milestone",
      "date": "January 1, 1901"
    },
    {
      "title": "1942 Battle of the Coral Sea & ANZUS Foundation",
      "category": "Strategic Pivot",
      "date": "May 8, 1942"
    },
    {
      "title": "2021 Signing of the AUKUS Pact",
      "category": "Defense Architecture",
      "date": "September 15, 2021"
    }
  ],
  "indiaImpact": {
    "headline": "Australia–India Comprehensive Strategic Partnership: Indo-Pacific Maritime & Economic Pillar",
    "points": [
      {
        "title": "Quad Partnership & Maritime Security (Malabar)",
        "desc": "Australia and India lead the Quadrilateral Security Dialogue alongside the US and Japan, conducting advanced anti-submarine and surface warfare drills in the Indian Ocean."
      },
      {
        "title": "ECTA Free Trade Agreement & Critical Minerals",
        "desc": "The Economic Cooperation and Trade Agreement eliminated tariffs on over 85% of Indian exports, while Australia supplies lithium and rare earths directly for India's EV and solar manufacturing."
      },
      {
        "title": "Indo-Pacific Oceans Initiative (IPOI)",
        "desc": "Australia co-leads the Maritime Ecology pillar of India's IPOI, securing sea lines of communication and combating illegal, unreported, and unregulated (IUU) fishing across the eastern Indian Ocean."
      }
    ]
  }
},

  "BRA": {
  "id": "BRA",
  "name": "Brazil",
  "officialName": "Federative Republic of Brazil",
  "commonName": "Brazil",
  "capital": "Brasília",
  "capitalCoords": {
    "lat": -15.7975,
    "lng": -47.8919
  },
  "capitalAdmin": {
    "role": "Federal Capital & Planned Modernist Administrative Center",
    "political": "Hosts the Palácio do Planalto (Presidential Office), National Congress of Brazil, and Supreme Federal Court (STF).",
    "geographic": "Situated in the Federal District within the central-western Brazilian Highlands.",
    "strategic": "Apex command hub for the Ministry of Defense, Joint Staff of the Armed Forces, and central intelligence."
  },
  "region": "Americas",
  "subregion": "South America",
  "flag": "🇧🇷",
  "iso2": "br",
  "isoCode": "BRA / 076",
  "lat": -14.235,
  "lng": -51.9253,
  "area": "8,515,767 km² (Rank: 5th globally)",
  "population": "215.3 Million (2024 IBGE / UN estimate)",
  "politicalSystemType": "Federal Presidential Constitutional Republic",
  "currency": "Brazilian Real (BRL / R$)",
  "languages": "Portuguese (Official national language)",
  "timeZones": "UTC-2 to UTC-5 (BRT UTC-3 standard)",
  "foundingInfo": "Independence declared September 7, 1822 from Portugal; Republic proclaimed November 15, 1889; current Constitution enacted 1988.",
  "tagline": "South American Titan, Agricultural Superpower & BRICS Founder",
  "overview": {
    "beginner": "Brazil is the largest country in South America and the fifth-largest in the world, covering nearly half the continent. Home to 215 million people, Brazil is an economic and agricultural powerhouse that feeds over one billion people worldwide with massive exports of soybeans, beef, poultry, coffee, and sugar. It is also an industrial giant, manufacturing modern commercial jets through Embraer and pumping offshore crude oil.",
    "advanced": "The Federative Republic of Brazil is the undisputed regional hegemon of South America, possessing the continent's largest GDP ($2.17T), largest military forces, and highest diplomatic weight. As a founding leader of BRICS, Mercosur, and the G20, Brazil champions multipolar global governance and South-South cooperation. Brazil's strategic defense priority is safeguarding the 'Blue Amazon' (Amazônia Azul)—its 4.5M km² maritime exclusive economic zone rich in pre-salt ultra-deepwater hydrocarbon deposits."
  },
  "history": [
    {
      "year": "1500",
      "title": "Portuguese Arrival by Pedro Álvares Cabral",
      "phase": "Colonial Era",
      "whatHappened": "Portuguese explorer Pedro Álvares Cabral claimed the territory for the Crown of Portugal, initiating three centuries of colonial mercantile extraction.",
      "where": "Porto Seguro, Bahia",
      "actors": [
        "Pedro Álvares Cabral",
        "Indigenous Tupiniquim peoples"
      ],
      "whyItMattered": "Made Brazil the only Portuguese-speaking nation in the Americas, integrating it into the transatlantic sugar and slave trade.",
      "consequences": "Demographic and cultural transformation; profound Afro-Brazilian heritage.",
      "claimType": "HISTORICAL FACT",
      "sources": "Letter of Pero Vaz de Caminha / Portuguese National Archives (Torre do Tombo)"
    },
    {
      "year": "1822",
      "title": "Independence & The Empire of Brazil",
      "phase": "Monarchical Independence",
      "whatHappened": "Prince Regent Dom Pedro uttered the 'Cry of Ipiranga' ('Independence or Death!'), declaring Brazil independent from Portugal and crowning himself Emperor Pedro I.",
      "where": "São Paulo / Rio de Janeiro",
      "actors": [
        "Dom Pedro I",
        "José Bonifácio de Andrada e Silva"
      ],
      "whyItMattered": "Preserved continental territorial unity under a stable centralized constitutional empire while Spanish America fragmented into dozens of republics.",
      "consequences": "Sustained monarchical stability until the 1889 republican coup.",
      "claimType": "HISTORICAL FACT",
      "sources": "Imperial Archives of Brazil / National Museum of Brazil"
    },
    {
      "year": "1888",
      "title": "Abolition of Slavery (Lei Áurea)",
      "phase": "Social Emancipation",
      "whatHappened": "Princess Regent Isabel signed the Golden Law (Lei Áurea), legally abolishing slavery in Brazil—the last Western nation to do so.",
      "where": "Rio de Janeiro",
      "actors": [
        "Princess Isabel",
        "Joaquim Nabuco",
        "José do Patrocínio"
      ],
      "whyItMattered": "Ended centuries of institutional chattel slavery, leading disgruntled coffee oligarchs to overthrow the monarchy the following year.",
      "consequences": "Proclamation of the First Brazilian Republic in November 1889.",
      "claimType": "HISTORICAL FACT",
      "sources": "Historical Archive of the Federal Senate (Brazil)"
    },
    {
      "year": "1960",
      "title": "Inauguration of Brasília",
      "phase": "Modern Interiorization",
      "whatHappened": "President Juscelino Kubitschek moved the federal capital from Rio de Janeiro to the newly constructed interior city of Brasília.",
      "where": "Federal District, Central Highlands",
      "actors": [
        "Juscelino Kubitschek",
        "Oscar Niemeyer",
        "Lúcio Costa"
      ],
      "whyItMattered": "Drove population, highways, and industrial agriculture into the vast Brazilian interior (Cerrado).",
      "consequences": "Transformed Brazil from a coastal enclave into a continental agricultural exporter.",
      "claimType": "HISTORICAL FACT",
      "sources": "Public Archives of the Federal District (ArPDF)"
    },
    {
      "year": "1988",
      "title": "Enactment of the Citizen Constitution",
      "phase": "Democratic Re-democratization",
      "whatHappened": "Following 21 years of military dictatorship (1964–1985), the National Constituent Assembly promulgated the 1988 democratic constitution.",
      "where": "National Congress, Brasília",
      "actors": [
        "Ulysses Guimarães",
        "Constituent Assembly Deputies"
      ],
      "whyItMattered": "Codified comprehensive civil liberties, indigenous land rights, universal public healthcare (SUS), and judicial autonomy.",
      "consequences": "Institutional foundation of contemporary Brazilian democracy.",
      "claimType": "HISTORICAL FACT",
      "sources": "Official Gazette of the Union (DOU 1988)"
    }
  ],
  "politicalSystem": {
    "type": "Federal Presidential Constitutional Republic",
    "constitution": "Constitution of the Federative Republic of Brazil (1988)",
    "branches": [
      {
        "name": "Executive",
        "role": "President Luiz Inácio Lula da Silva and Vice President Geraldo Alckmin leading the federal cabinet and civil administration."
      },
      {
        "name": "Legislature",
        "role": "Bicameral National Congress: 513-member Chamber of Deputies and 81-member Federal Senate."
      },
      {
        "name": "Judiciary",
        "role": "Supreme Federal Court (STF) acting as guardian of the constitution with expansive legal review."
      }
    ],
    "currentLeadership": {
      "headOfState": "President Luiz Inácio Lula da Silva (PT)",
      "headOfGovernment": "President Luiz Inácio Lula da Silva",
      "foreignMinister": "Mauro Vieira (Minister of Foreign Affairs)",
      "defenseMinister": "José Múcio Monteiro (Minister of Defense)"
    },
    "rulingParty": "Workers' Party (PT) leading a broad democratic coalition government",
    "oppositionParties": [
      {
        "name": "Liberal Party (PL)",
        "seats": "99 deputies (Chamber)",
        "stance": "Right-wing conservative opposition aligned with Jair Bolsonaro"
      },
      {
        "name": "Centrão Bloc (PP, União Brasil, Republicans)",
        "seats": "Major pivotal voting bloc",
        "stance": "Pragmatic legislative bargaining bloc"
      }
    ],
    "parliamentDetails": "National Congress housed in the landmark Niemeyer twin towers in Brasília, characterized by strong multi-party coalition presidentialism.",
    "recentElections": "October 2022 presidential election won by Lula da Silva; municipal elections held in October 2024.",
    "domesticDevelopments": [
      {
        "title": "New Growth Acceleration Program (Novo PAC)",
        "claimType": "INFRASTRUCTURE",
        "desc": "R$1.7 Trillion infrastructure investment program targeting railways, clean energy, and sanitation."
      },
      {
        "title": "Historic Consumption Tax Reform",
        "claimType": "FISCAL REFORM",
        "desc": "Passed constitutional amendment unifying fragmented municipal and state taxes into a dual VAT system (IBS/CBS)."
      }
    ],
    "currentIssues": [
      {
        "title": "Amazon Deforestation Enforcement",
        "claimType": "ENVIRONMENTAL",
        "desc": "Combating illegal gold mining (garimpo) and cattle ranching across indigenous territories."
      },
      {
        "title": "Fiscal Deficit & Interest Rate Debates",
        "claimType": "ECONOMIC",
        "desc": "Tensions between executive spending priorities and Central Bank monetary policy."
      }
    ],
    "policyDebates": [
      {
        "topic": "Equatorial Margin Offshore Oil Drilling",
        "desc": "Debate between energy ministry and environmental agency (IBAMA) over licensing oil exploration near the mouth of the Amazon River."
      }
    ],
    "institutions": [
      {
        "name": "Itamaraty (Ministry of Foreign Affairs)",
        "role": "Renowned professional diplomatic service spearheading multilateral diplomacy."
      },
      {
        "name": "Federal Police of Brazil (DPF)",
        "role": "Investigative agency leading anti-corruption and border security operations."
      }
    ],
    "federalDynamics": "26 states and 1 Federal District with substantial police, public health, and local tax responsibilities.",
    "foreignPolicyDoctrine": "Universalist multilateralism, non-intervention, South American regional integration (Mercosur), and active leadership in BRICS and G20."
  },
  "geographyBorders": {
    "landArea": "8,515,767 km² (Nearly half of the South American continent)",
    "location": "Eastern and central South America, bordering the Atlantic Ocean.",
    "continent": "Americas",
    "latRange": "5°N to 34°S",
    "lngRange": "35°W to 74°W",
    "coastline": "7,491 km along the Atlantic Ocean",
    "majorOceans": [
      "Atlantic Ocean"
    ],
    "majorIslands": [
      "Fernando de Noronha",
      "Ilha Grande",
      "Marajó (World's largest river island)"
    ],
    "strategicGeography": "Controls the Amazon River Basin and maritime approaches to the South Atlantic; borders 10 of the 12 South American states.",
    "topography": "Vast Amazon Basin lowlands in the north; Pantanal wetlands in west; Brazilian Highlands and Atlantic Forest along central and southern plateau.",
    "rivers": [
      "Amazon River (World's largest river by discharge)",
      "Paraná River",
      "São Francisco River",
      "Tocantins River"
    ],
    "mountains": [
      "Pico da Neblina (2,995 m)",
      "Serra do Mar",
      "Serra da Mantiqueira"
    ],
    "seas": [
      "South Atlantic Ocean",
      "Equatorial Atlantic Approach"
    ],
    "climates": [
      "Equatorial in the Amazon",
      "Tropical savanna in Cerrado",
      "Subtropical in south"
    ],
    "landBorders": [
      {
        "country": "Bolivia",
        "id": "BOL",
        "borderLength": "3,400 km",
        "region": "West",
        "status": "Demarcated",
        "strategicContext": "Cross-border transit for natural gas pipeline (Gasbol)."
      },
      {
        "country": "Venezuela",
        "id": "VEN",
        "borderLength": "2,200 km",
        "region": "North",
        "status": "Demarcated",
        "strategicContext": "Roraima border corridor managing migrant flows and energy transmission."
      },
      {
        "country": "Colombia",
        "id": "COL",
        "borderLength": "1,644 km",
        "region": "Northwest",
        "status": "Demarcated",
        "strategicContext": "Deep Amazon river security patrols combating narcotrafficking."
      },
      {
        "country": "Peru",
        "id": "PER",
        "borderLength": "1,560 km",
        "region": "West",
        "status": "Demarcated",
        "strategicContext": "Acre frontier and Transoceanic Highway linking Atlantic to Pacific."
      },
      {
        "country": "Paraguay",
        "id": "PRY",
        "borderLength": "1,290 km",
        "region": "Southwest",
        "status": "Demarcated",
        "strategicContext": "Friendship Bridge and Itaipu Dam shared hydroelectricity."
      },
      {
        "country": "Argentina",
        "id": "ARG",
        "borderLength": "1,224 km",
        "region": "South",
        "status": "Demarcated",
        "strategicContext": "Core industrial axis of Mercosur integration across the Iguazu."
      },
      {
        "country": "Uruguay",
        "id": "URY",
        "borderLength": "985 km",
        "region": "South",
        "status": "Demarcated",
        "strategicContext": "Agricultural trade and open border twin cities."
      },
      {
        "country": "Guyana",
        "id": "GUY",
        "borderLength": "1,119 km",
        "region": "North",
        "status": "Demarcated",
        "strategicContext": "Diplomatic transit mediator in Guyana-Venezuela Essequibo dispute."
      },
      {
        "country": "Suriname",
        "id": "SUR",
        "borderLength": "597 km",
        "region": "North",
        "status": "Demarcated",
        "strategicContext": "Remote dense rainforest frontier."
      },
      {
        "country": "French Guiana (France)",
        "id": "FRA",
        "borderLength": "673 km",
        "region": "North",
        "status": "Demarcated",
        "strategicContext": "Oyapock River Bridge connecting Brazil to the European Union."
      }
    ],
    "maritimeBorders": []
  },
  "economy": {
    "gdpNominal": "$2.17 Trillion (Rank: 9th globally)",
    "gdpPPP": "$4.27 Trillion (Rank: 8th globally)",
    "gdpPerCapita": "$10,100 (Upper-middle income)",
    "gdpGrowth": "+2.9% (2024 IMF estimate)",
    "currency": "Brazilian Real (BRL / R$)",
    "majorIndustries": [
      "Commercial Agriculture (Soybeans, Corn, Sugarcane, Coffee, Citrus)",
      "Mining & Iron Ore Extraction (Vale SA - Carajás Megamine)",
      "Deepwater Crude Oil & Gas Extraction (Petrobras - Pre-salt reserves)",
      "Aerospace & Defense Engineering (Embraer - E-Jets & C-390)",
      "Automotive & Heavy Truck Manufacturing"
    ],
    "majorExports": [
      "Soybeans & Soy Derivatives ($53B/yr - #1 Global Exporter)",
      "Crude Petroleum Oil ($42B/yr - Petrobras)",
      "Iron Ore & Concentrates ($31B/yr - Vale)",
      "Beef, Poultry & Pork ($24B/yr - JBS, BRF)",
      "Raw Sugar, Ethanol & Specialty Coffee ($18B/yr)"
    ],
    "majorImports": [
      "Refined Petroleum, Diesel & Aviation Fuels",
      "Chemical Fertilizers (Potash, Nitrogen, Phosphate for agribusiness)",
      "Integrated Semiconductor Circuits & Electronic Components",
      "Automotive Parts & Industrial Engines"
    ],
    "energyPosition": "One of the greenest electricity grids in the world (~85% renewable), dominated by massive hydroelectric generation (Itaipu, Belo Monte) and rapidly expanding onshore wind and solar.",
    "naturalResources": "Vast reserves of iron ore, crude oil, bauxite, niobium (95%+ of global reserves), manganese, nickel, timber, and 12% of the world's freshwater.",
    "tradeOrgs": [
      "Mercosur (Southern Common Market)",
      "World Trade Organization (WTO)",
      "BRICS Alliance (Founding Member)",
      "G20 (2024 Presidency Host)"
    ],
    "economicStrategicImportance": "Global food security guarantor feeding 1B+ people; key supplier of iron ore to Chinese steel mills and deepwater crude oil outside OPEC.",
    "indiaEconomicConnection": "Bilateral trade surpassed $15 Billion; India is a major supplier of diesel and generic pharmaceuticals to Brazil, while Brazil exports crude oil and vegetable oils; active bilateral cooperation in ethanol biofuel blending.",
    "majorTradingPartners": [
      {
        "country": "China",
        "share": "30.7% of total exports ($105B)"
      },
      {
        "country": "United States",
        "share": "10.8% of total exports"
      },
      {
        "country": "Argentina",
        "share": "5.1% of total exports"
      },
      {
        "country": "Netherlands",
        "share": "4.2% of total exports"
      },
      {
        "country": "India",
        "share": "3.5% of total bilateral trade ($15B+)"
      }
    ]
  },
  "military": {
    "expenditure": "$23.8 Billion (1.1% of GDP - Ministry of Defense)",
    "personnel": {
      "active": "360,000 Active Duty Armed Forces (Largest in Latin America)",
      "reserves": "1,340,000 Registered Reserve Personnel"
    },
    "doctrine": "Dissuasion and defense of sovereign national territory; protection of the Amazon frontier (SINDACTA / SISFRON) and safeguarding the offshore 'Blue Amazon' pre-salt oil fields.",
    "nuclearStockpile": "Non-nuclear weapons state strictly prohibited by the 1988 Constitution and Tlatelolco Treaty; operates civilian nuclear power and an indigenous nuclear-powered submarine propulsion program.",
    "defenseIndustry": "Latin America's premier defense industrial base led by Embraer (KC-390, Super Tucano), Avibras (Astros II MLRS), Taurus (small arms), and ICN (submarine shipyard).",
    "majorDomesticSystems": [
      "Embraer KC-390 Millennium Multi-Mission Tactical Transport Aircraft",
      "Embraer EMB-314 Super Tucano Light Attack & Counter-Insurgency Aircraft",
      "Avibras Astros II Mk6 Multiple Launch Rocket System (surface-to-surface)",
      "VBTP-MR Guarani 6x6 Armored Personnel Carriers (Iveco / Brazilian Army)"
    ],
    "majorImports": [
      "Saab JAS 39 Gripen E/F 4.5-Gen Multi-Role Fighters (Sweden / domestic assembly)",
      "Scorpène-class Attack Submarines (Naval Group France technology transfer)",
      "Centauro II 8x8 Heavy Tank Destroyers (CIO Leonardo / Iveco)",
      "Leopard 1A5 Main Battle Tanks (Germany)"
    ],
    "majorExports": [
      "Super Tucano aircraft exported to 18+ air forces worldwide",
      "KC-390 Millennium transports purchased by Portugal, Hungary, Netherlands, Austria, South Korea",
      "Astros II MLRS rocket systems to Middle Eastern defense forces"
    ],
    "militaryAlliances": [
      "Inter-American Treaty of Reciprocal Assistance (Rio Treaty)",
      "South American Defense Council (UNASUR / bilateral defense pacts)",
      "Major Non-NATO Ally (MNNA) designation by the United States"
    ],
    "categories": [
      {
        "name": "BRAZILIAN NAVY (MARINHA DO BRASIL)",
        "desc": "Blue-water naval command protecting the 4.5M km² 'Blue Amazon' exclusive economic zone.",
        "systems": [
          {
            "name": "Riachuelo-Class (Scorpène) Submarines",
            "type": "Diesel-Electric Attack Submarine (SSK)",
            "origin": "France / Brazil (ICN Itaguaí)",
            "status": "CONFIRMED",
            "quantity": "4 vessels (Riachuelo, Humaitá, Tonelero, Angostura)",
            "role": "Long-range maritime interdiction and pre-salt oilfield defense."
          },
          {
            "name": "Álvaro Alberto Nuclear Submarine Project (PROSUB)",
            "type": "Nuclear-Powered Attack Submarine (SSN)",
            "origin": "Brazil (Indigenous Nuclear Reactor)",
            "status": "IN DEVELOPMENT",
            "quantity": "1 hull under construction",
            "role": "Strategic ocean patrol and undersea power projection."
          },
          {
            "name": "NAM Atlântico (Multipurpose Aircraft/Helicopter Carrier)",
            "type": "Amphibious Assault Ship / Flagship",
            "origin": "United Kingdom (ex-HMS Ocean)",
            "status": "CONFIRMED",
            "quantity": "1 flagship carrier",
            "role": "Fleet command, amphibious helicopter assault, humanitarian ops."
          },
          {
            "name": "Tamandaré-Class Stealth Frigates",
            "type": "Guided Missile Frigate (MEKO A-100)",
            "origin": "Germany (Thyssenkrupp) / Brazil",
            "status": "CONFIRMED",
            "quantity": "4 on order / sea trials",
            "role": "Anti-air and anti-submarine blue-water combat."
          }
        ]
      },
      {
        "name": "BRAZILIAN AIR FORCE (FORÇA AÉREA BRASILEIRA - FAB)",
        "desc": "Air superiority, Amazon basin surveillance, and strategic airlift.",
        "systems": [
          {
            "name": "Saab F-39 Gripen E/F",
            "type": "4.5-Gen Multi-Role Fighter",
            "origin": "Sweden / Embraer Brazil",
            "status": "CONFIRMED",
            "quantity": "36 ordered (8+ operational)",
            "role": "Air superiority, supersonic intercept, and precision strike."
          },
          {
            "name": "Embraer E-99M",
            "type": "Airborne Early Warning & Control (AEW&C)",
            "origin": "Brazil (Embraer / Erieye radar)",
            "status": "CONFIRMED",
            "quantity": "5 operational",
            "role": "Airborne battle management and border airspace surveillance."
          },
          {
            "name": "Embraer KC-390 Millennium",
            "type": "Tactical Jet Transport & Tanker",
            "origin": "Brazil (Embraer)",
            "status": "CONFIRMED",
            "quantity": "6+ operational",
            "role": "Tactical airlift, mid-air refueling, firefighting."
          }
        ]
      },
      {
        "name": "BRAZILIAN ARMY (EXÉRCITO BRASILEIRO)",
        "desc": "Continental land warfare, border protection (SISFRON), and jungle warfare command.",
        "systems": [
          {
            "name": "VBTP-MR Guarani 6x6",
            "type": "Amphibious Armored Personnel Carrier",
            "origin": "Brazil / Iveco",
            "status": "CONFIRMED",
            "quantity": "600+ vehicles delivered",
            "role": "Mechanized infantry maneuver with automated 30mm turret."
          },
          {
            "name": "Astros II Mk6 MLRS",
            "type": "Multiple Launch Rocket & Cruise Missile System",
            "origin": "Brazil (Avibras)",
            "status": "CONFIRMED",
            "quantity": "36+ launcher batteries",
            "role": "Long-range tactical saturation strike and AV-TM 300 cruise missiles."
          },
          {
            "name": "Jungle Warfare Instruction Center (CIGS)",
            "type": "Elite Jungle Warfare Brigade",
            "origin": "Brazil (Manaus)",
            "status": "CONFIRMED",
            "quantity": "Specialized units",
            "role": "Unconventional warfare and sovereignty defense in the Amazon."
          }
        ]
      }
    ]
  },
  "relations": {
    "main": [
      {
        "id": "BRA_CHN",
        "country": "China",
        "flag": "🇨🇳",
        "status": "Comprehensive Strategic Partner & Top Trade Partner",
        "color": "#10b981",
        "note": "Purchases 30%+ of exports; joint CBERS Earth observation satellites and currency swap accords."
      },
      {
        "id": "BRA_USA",
        "country": "United States",
        "flag": "🇺🇸",
        "status": "Major Hemispheric Partner (MNNA)",
        "color": "#3b82f6",
        "note": "Historic commercial and defense links; cooperation on climate transition."
      },
      {
        "id": "BRA_IND",
        "country": "India",
        "flag": "🇮🇳",
        "status": "Strategic Partner & BRICS/IBSA Co-Leader",
        "color": "#06b6d4",
        "note": "Bilateral trade ($15B+), G4 alliance for UNSC permanent seats, energy and agribusiness."
      },
      {
        "id": "BRA_ARG",
        "country": "Argentina",
        "flag": "🇦🇷",
        "status": "Strategic Neighbor & Mercosur Anchor",
        "color": "#10b981",
        "note": "Key industrial automotive trade corridor despite ideological differences between leaderships."
      },
      {
        "id": "BRA_FRA",
        "country": "France",
        "flag": "🇫🇷",
        "status": "Strategic Defense & Technology Partner",
        "color": "#3b82f6",
        "note": "PROSUB submarine development agreement and 673 km land border with French Guiana."
      }
    ],
    "searchable": []
  },
  "strategicLocations": [
    {
      "name": "Port of Santos (São Paulo)",
      "type": "Largest Seaport in Latin America",
      "coords": "23.96° S, 46.30° W",
      "significance": "Handles 28% of Brazilian foreign trade; primary export funnel for soybeans, sugar, and coffee."
    },
    {
      "name": "Itaguaí Submarine Base & Complex (Rio de Janeiro)",
      "type": "PROSUB Naval Shipyard & Nuclear Submarine Facility",
      "coords": "22.92° S, 43.83° W",
      "significance": "Constructs the Riachuelo-class and future Álvaro Alberto nuclear-powered attack submarine."
    },
    {
      "name": "Itaipu Hydroelectric Dam (Paraná River)",
      "type": "Binational Energy Megaproject",
      "coords": "25.41° S, 54.59° W",
      "significance": "Shared with Paraguay; generates 14 GW, supplying over 10% of total Brazilian electricity consumption."
    },
    {
      "name": "Alcântara Space Launch Center (Maranhão)",
      "type": "Equatorial Satellite Launch Base",
      "coords": "2.37° S, 44.40° W",
      "significance": "Located 2.3° from the Equator, offering 30% rocket fuel savings for geostationary satellite launches."
    }
  ],
  "currentTensions": [
    {
      "title": "Venezuela–Guyana Border Crisis (Essequibo Mediation)",
      "severity": "Diplomatic & Border Deployment Alert",
      "color": "#f59e0b",
      "desc": "Deployed armored cavalry to Roraima border to guarantee Brazilian territory is not violated during Venezuelan territorial threats against Guyana."
    }
  ],
  "keyEvents": [
    {
      "title": "1822 Declaration of Independence",
      "category": "Sovereign Statehood",
      "date": "September 7, 1822"
    },
    {
      "title": "1960 Inauguration of Brasília",
      "category": "Modern Development",
      "date": "April 21, 1960"
    },
    {
      "title": "2006 Discovery of Pre-Salt Ultra-Deepwater Oil",
      "category": "Energy Turning Point",
      "date": "July 2006"
    }
  ],
  "indiaImpact": {
    "headline": "Brazil–India Strategic Partnership: South-South Pillars in BRICS, IBSA, and Global Agriculture",
    "points": [
      {
        "title": "BRICS & G4 Multilateral Alignment",
        "desc": "Brazil and India stand as foundational architects of the expanded BRICS bloc and jointly campaign under the G4 framework for permanent seats on the UN Security Council."
      },
      {
        "title": "Bilateral Trade Expansion ($15B+)",
        "desc": "Bilateral trade reached historic highs anchored by Indian exports of refined diesel, agrochemicals, and generic pharmaceuticals, balanced by Brazilian exports of crude oil, soybean oil, and raw sugar."
      },
      {
        "title": "Global Biofuels Alliance (GBA)",
        "desc": "Launched under India's G20 presidency with Brazil and the US, establishing global standards and trade corridors for ethanol blending and sustainable aviation fuel."
      }
    ]
  }
},

  "ZAF": {
  "id": "ZAF",
  "name": "South Africa",
  "officialName": "Republic of South Africa",
  "commonName": "South Africa",
  "capital": "Pretoria",
  "capitalCoords": {
    "lat": -25.7479,
    "lng": 28.2293
  },
  "capitalAdmin": {
    "role": "Administrative & Executive Capital (Seat of Government)",
    "political": "Hosts the Union Buildings (Presidency) and central civil government ministries. Note: Cape Town is the Legislative Capital; Bloemfontein is the Judicial Capital.",
    "geographic": "Situated in Gauteng Province, 50 km north of Johannesburg.",
    "strategic": "Apex command node for the South African National Defence Force (SANDF), State Security Agency (SSA), and Department of International Relations and Cooperation (DIRCO)."
  },
  "region": "Africa",
  "subregion": "Southern Africa",
  "flag": "🇿🇦",
  "iso2": "za",
  "isoCode": "ZAF / 710",
  "lat": -30.5595,
  "lng": 22.9375,
  "area": "1,221,037 km² (Rank: 24th globally)",
  "population": "62.4 Million (2024 Stats SA / UN estimate)",
  "politicalSystemType": "Parliamentary Republic with Executive President",
  "currency": "South African Rand (ZAR / R)",
  "languages": "12 Official Languages (including isiZulu, isiXhosa, Afrikaans, Sepedi, English, Setswana, Sign Language)",
  "timeZones": "South African Standard Time (UTC+2)",
  "foundingInfo": "Union formed May 31, 1910; Republic declared May 31, 1961; First democratic non-racial elections April 27, 1994 (Freedom Day).",
  "tagline": "Rainbow Nation, Southern Ocean Gateway & BRICS Industrial Hub",
  "overview": {
    "beginner": "South Africa occupies the southernmost tip of the African continent, framed by 2,800 kilometers of coastline along both the Atlantic and Indian Oceans. With a population of 62 million people, it is the most industrialized and diversified economy in Sub-Saharan Africa. Renowned for its rich mineral wealth in platinum, chromium, manganese, and gold, South Africa is globally influential as an African diplomat, leader in the African Union, and member of BRICS and the G20.",
    "advanced": "The Republic of South Africa commands an irreplaceable geostrategic vantage point controlling the Cape of Good Hope maritime corridor—the vital interoceanic bypass between the Atlantic and Indian Oceans, especially crucial during Red Sea chokepoint disruptions. Following the watershed May 2024 general election, South Africa is governed by a historic Government of National Unity (GNU) uniting the African National Congress (ANC) and Democratic Alliance (DA). South Africa pursues an assertive, non-aligned foreign policy anchored in international humanitarian law, African peace architecture, and BRICS expansion."
  },
  "history": [
    {
      "year": "1652",
      "title": "Dutch East India Company (VOC) Cape Station",
      "phase": "Colonial Maritime Settlement",
      "whatHappened": "Jan van Riebeeck landed at Table Bay to establish a replenishment station for VOC merchant ships sailing between the Netherlands and the East Indies.",
      "where": "Cape Town (Table Bay)",
      "actors": [
        "Jan van Riebeeck",
        "Khoikhoi pastoralists"
      ],
      "whyItMattered": "Introduced permanent European settlement, enslaved labor from Madagascar and Indonesia, and colonial livestock trade.",
      "consequences": "Evolved into the Dutch Cape Colony and the genesis of Afrikaner identity.",
      "claimType": "HISTORICAL FACT",
      "sources": "VOC Cape Archives / National Library of South Africa"
    },
    {
      "year": "1867–1886",
      "title": "The Mineral Revolution (Diamonds & Gold)",
      "phase": "Industrial Transformation",
      "whatHappened": "Discovery of diamonds in Kimberley (1867) and the world's richest gold reef on the Witwatersrand (1886) transformed an agrarian frontier into an industrial magnet.",
      "where": "Kimberley & Johannesburg",
      "actors": [
        "Cecil Rhodes",
        "Uitlander mining magnates"
      ],
      "whyItMattered": "Triggered massive British imperial expansion, the Anglo-Boer War (1899–1902), and the institutionalization of migrant labor camps.",
      "consequences": "Created the city of Johannesburg and modern South African financial infrastructure.",
      "claimType": "HISTORICAL FACT",
      "sources": "Chamber of Mines Historical Records / Barloworld Archives"
    },
    {
      "year": "1948",
      "title": "Institutionalization of Apartheid",
      "phase": "Racial Segregation Regime",
      "whatHappened": "The National Party won the 1948 election under D.F. Malan, legally codifying brutal racial segregation, Group Areas disenfranchisement, and 'Pass Laws'.",
      "where": "Pretoria / Nationwide",
      "actors": [
        "D.F. Malan",
        "Hendrik Verwoerd",
        "National Party"
      ],
      "whyItMattered": "Imposed 46 years of state-enforced racial hierarchy, stripping the black majority of citizenship and creating impoverished 'Bantustans'.",
      "consequences": "Catalyzed domestic armed struggle (MK) and comprehensive international UN sanctions.",
      "claimType": "HISTORICAL FACT",
      "sources": "Apartheid Museum Archives / United Nations Special Committee Against Apartheid"
    },
    {
      "year": "1994",
      "title": "First Democratic Elections & Nelson Mandela",
      "phase": "Democratic Liberation",
      "whatHappened": "Millions of South Africans queued on April 27, 1994, to vote in the country's first non-racial democratic election, inaugurating Nelson Mandela as President.",
      "where": "Union Buildings, Pretoria",
      "actors": [
        "Nelson Mandela",
        "F.W. de Klerk",
        "Chief Albert Luthuli legacy"
      ],
      "whyItMattered": "Ended white minority rule peacefully, averted racial civil war, and promulgated one of the world's most progressive constitutional democracies.",
      "consequences": "Re-entry into the Commonwealth, UN General Assembly, and the global diplomatic fold.",
      "claimType": "HISTORICAL FACT",
      "sources": "Independent Electoral Commission (IEC) / Nelson Mandela Foundation"
    },
    {
      "year": "2024",
      "title": "Formation of Government of National Unity (GNU)",
      "phase": "Contemporary Coalition Era",
      "whatHappened": "After the ANC lost its parliamentary majority for the first time in 30 years (winning 40%), President Cyril Ramaphosa formed a multi-party Government of National Unity with the DA and other parties.",
      "where": "Cape Town / Pretoria",
      "actors": [
        "Cyril Ramaphosa",
        "John Steenhuisen",
        "Velenkosini Hlabisa"
      ],
      "whyItMattered": "Marked the maturation of South African democracy into stable multiparty coalition governance focused on structural economic reforms (Operation Vulindlela).",
      "consequences": "Stabilized currency markets, ended daily rolling power cuts (load shedding), and advanced logistics privatization.",
      "claimType": "HISTORICAL FACT",
      "sources": "Parliament of South Africa / Presidency of the Republic"
    }
  ],
  "politicalSystem": {
    "type": "Parliamentary Republic with Executive President",
    "constitution": "Constitution of the Republic of South Africa (1996)",
    "branches": [
      {
        "name": "Executive",
        "role": "President Cyril Ramaphosa elected by the National Assembly, serving as Head of State, Head of Government, and Commander-in-Chief."
      },
      {
        "name": "Legislature",
        "role": "Bicameral Parliament: 400-member National Assembly and 90-member National Council of Provinces (NCOP) sitting in Cape Town."
      },
      {
        "name": "Judiciary",
        "role": "Constitutional Court of South Africa in Johannesburg, exercising supreme authority on constitutional rights."
      }
    ],
    "currentLeadership": {
      "headOfState": "President Cyril Ramaphosa (ANC)",
      "headOfGovernment": "President Cyril Ramaphosa",
      "deputyPresident": "Paul Mashatile",
      "foreignMinister": "Ronald Lamola (Minister of International Relations and Cooperation)",
      "defenseMinister": "Angie Motshekga (Minister of Defence and Military Veterans)"
    },
    "rulingParty": "Government of National Unity (GNU) led by ANC (159 seats) and Democratic Alliance (87 seats)",
    "oppositionParties": [
      {
        "name": "uMkhonto we Sizwe (MK Party)",
        "seats": "58 seats",
        "stance": "Populist opposition led by former President Jacob Zuma"
      },
      {
        "name": "Economic Freedom Fighters (EFF)",
        "seats": "39 seats",
        "stance": "Far-left radical transformation led by Julius Malema"
      }
    ],
    "parliamentDetails": "National Assembly meets in Cape Town, requiring consensus-building across 10 coalition partner parties in the GNU.",
    "recentElections": "May 29, 2024 general election; next local government elections due 2026; national election due 2029.",
    "domesticDevelopments": [
      {
        "title": "Operation Vulindlela Economic Reforms",
        "claimType": "REFORM",
        "desc": "Unbundling state power utility Eskom, introducing third-party access to freight rail (Transnet), and resolving visa backlogs."
      },
      {
        "title": "National Health Insurance (NHI) Act",
        "claimType": "POLICY DEBATE",
        "desc": "Legislation establishing universal healthcare fund facing constitutional pushback from private medical sectors."
      }
    ],
    "currentIssues": [
      {
        "title": "High Structural Unemployment (32%+)",
        "claimType": "ECONOMIC",
        "desc": "Chronic youth joblessness and expanding social welfare grant dependency."
      },
      {
        "title": "Logistics Bottlenecks at Seaports & Rail",
        "claimType": "INFRASTRUCTURE",
        "desc": "Delays in Durban container terminals and coal rail lines driving private concessions."
      }
    ],
    "policyDebates": [
      {
        "topic": "Land Expropriation without Compensation",
        "desc": "Ongoing constitutional review regarding land reform and restitution mechanisms."
      }
    ],
    "institutions": [
      {
        "name": "Reserve Bank of South Africa (SARB)",
        "role": "Globally respected independent central bank managing inflation targeting."
      },
      {
        "name": "Public Protector of South Africa",
        "role": "Independent constitutional oversight watchdog investigating state maladministration."
      }
    ],
    "federalDynamics": "Unitary state with nine provincial legislatures (Gauteng, Western Cape, KZN, etc.) managing provincial healthcare and education.",
    "foreignPolicyDoctrine": "Progressive internationalism, Pan-African peace and security, South-South solidarity through BRICS/IBSA, and strict adherence to the UN Charter."
  },
  "geographyBorders": {
    "landArea": "1,221,037 km² (Extends from Limpopo River to Cape Agulhas)",
    "location": "Southern tip of the African continent, bordering Atlantic and Indian Oceans.",
    "continent": "Africa",
    "latRange": "22°S to 35°S",
    "lngRange": "16°E to 33°E",
    "coastline": "2,798 km along Atlantic and Indian Oceans",
    "majorOceans": [
      "Indian Ocean",
      "Atlantic Ocean",
      "Southern Ocean Approaches"
    ],
    "majorIslands": [
      "Prince Edward Islands (Marion Island - Sub-Antarctic territory)",
      "Robben Island"
    ],
    "strategicGeography": "Controls the Cape of Good Hope sea route, the primary global shipping alternative when the Suez Canal is blocked or threatened.",
    "topography": "Vast interior plateau (Highveld, 1,200m–1,800m elevation) bordered by the Great Escarpment; Drakensberg mountain range; coastal lowlands.",
    "rivers": [
      "Orange River",
      "Limpopo River",
      "Vaal River",
      "Tugela River"
    ],
    "mountains": [
      "Mafadi (3,450 m - Drakensberg)",
      "Table Mountain",
      "Swartberg Range"
    ],
    "seas": [
      "South Atlantic Ocean",
      "Southwest Indian Ocean",
      "Mozambique Channel Approach"
    ],
    "climates": [
      "Semi-arid in the Karoo",
      "Mediterranean in the Western Cape",
      "Subtropical along the eastern Indian Ocean coast"
    ],
    "landBorders": [
      {
        "country": "Namibia",
        "id": "NAM",
        "borderLength": "1,005 km",
        "region": "Northwest",
        "status": "Demarcated",
        "strategicContext": "Orange River boundary and cross-border SACU trade."
      },
      {
        "country": "Botswana",
        "id": "BWA",
        "borderLength": "1,969 km",
        "region": "North",
        "status": "Demarcated",
        "strategicContext": "Kalahari frontier and diamond/beef commerce."
      },
      {
        "country": "Zimbabwe",
        "id": "ZWE",
        "borderLength": "230 km",
        "region": "Northeast",
        "status": "Demarcated",
        "strategicContext": "Beitbridge border post (busiest road corridor in Sub-Saharan Africa)."
      },
      {
        "country": "Mozambique",
        "id": "MOZ",
        "borderLength": "496 km",
        "region": "East",
        "status": "Demarcated",
        "strategicContext": "Maputo Development Corridor linking Gauteng industries to Maputo port."
      },
      {
        "country": "Eswatini",
        "id": "SWZ",
        "borderLength": "438 km",
        "region": "East",
        "status": "Demarcated",
        "strategicContext": "SACU customs union border."
      },
      {
        "country": "Lesotho",
        "id": "LSO",
        "borderLength": "1,106 km",
        "region": "Enclave",
        "status": "Demarcated",
        "strategicContext": "Complete sovereign enclave; source of the Lesotho Highlands Water Project supplying Gauteng."
      }
    ],
    "maritimeBorders": []
  },
  "economy": {
    "gdpNominal": "$380 Billion (Rank: 38th globally)",
    "gdpPPP": "$990 Billion",
    "gdpPerCapita": "$6,100 (Upper-middle income)",
    "gdpGrowth": "+1.2% (2024 IMF estimate)",
    "currency": "South African Rand (ZAR / R)",
    "majorIndustries": [
      "Mining (World's #1 Platinum, Chromium, Manganese producer; major Gold and Diamonds)",
      "Automotive Manufacturing & Assembly (BMW, Mercedes-Benz, Toyota, Ford)",
      "Financial Services & Banking (Standard Bank, FirstRand, Absa, JSE Stock Exchange)",
      "Chemicals & Synthetic Fuels (Sasol - Coal-to-liquid technology)",
      "Agriculture & Agro-processing (Citrus, Wine, Table Grapes, Maize)"
    ],
    "majorExports": [
      "Platinum Group Metals (PGMs - $14B/yr - #1 Global Producer)",
      "Gold & Semi-manufactured Alloys ($11B/yr)",
      "Iron Ore, Chromium & Manganese Ores ($10B/yr)",
      "Motor Vehicles & Automotive Components ($8B/yr to Europe)",
      "Coal ($7B/yr via Richards Bay Terminal)",
      "Citrus Fruit & Premium Wine ($4B/yr)"
    ],
    "majorImports": [
      "Refined Petroleum Products & Crude Hydrocarbons",
      "Motor Vehicle Parts & CKD Components",
      "Semiconductors, Electronics & Telecom Equipment",
      "Pharmaceutical Formulations & Medical Supplies"
    ],
    "energyPosition": "Undergoing rapid green energy transition away from aging coal-fired plants (Eskom) via Just Energy Transition Partnership (JETP) with $11B+ in international climate finance.",
    "naturalResources": "Unmatched mineral reserves: 90% of global platinum reserves, 80% of manganese, 70% of chromium, alongside vanadium, titanium, and gold.",
    "tradeOrgs": [
      "Southern African Customs Union (SACU - World's oldest customs union)",
      "Southern African Development Community (SADC)",
      "African Continental Free Trade Area (AfCFTA)",
      "BRICS Alliance (Joined in 2010)",
      "G20 Member State"
    ],
    "economicStrategicImportance": "Gateway to Sub-Saharan African consumer markets; irreplaceable global supplier of catalytic-converter minerals (platinum/palladium) essential for global automotive and green hydrogen tech.",
    "indiaEconomicConnection": "Bilateral trade reached $18+ Billion; Indian automotive (Tata, Mahindra) and pharmaceutical firms (Cipla, Ranbaxy) maintain deep manufacturing and logistics footholds in South Africa.",
    "majorTradingPartners": [
      {
        "country": "China",
        "share": "16.5% of total merchandise exports"
      },
      {
        "country": "United States",
        "share": "8.2% of exports (AGOA framework)"
      },
      {
        "country": "Germany",
        "share": "7.8% of trade"
      },
      {
        "country": "India",
        "share": "6.5% of total bilateral trade ($18B+)"
      },
      {
        "country": "Japan",
        "share": "5.4% of trade"
      }
    ]
  },
  "military": {
    "expenditure": "$3.1 Billion (0.8% of GDP - SANDF Allocation)",
    "personnel": {
      "active": "73,000 Active Duty Armed Forces",
      "reserves": "15,000 Trained Reserve Formations"
    },
    "doctrine": "Territorial defense, maritime surveillance of the EEZ, and regional peace enforcement in support of the African Union and SADC Standby Force.",
    "nuclearStockpile": "Dismantled all six indigenous nuclear weapons in 1989–1991, becoming the first nation in history to voluntarily dismantle a self-developed nuclear arsenal; strictly party to the Pelindaba Treaty.",
    "defenseIndustry": "Pioneering defense engineering base centered on Denel SOC Ltd, Paramount Group, and Reutech (Rooivalk attack helicopter, G6 self-propelled howitzer, mine-resistant ambush-protected MRAPs).",
    "majorDomesticSystems": [
      "Denel Rooivalk Combat Attack Helicopter",
      "Denel G6 Rhino 155mm Wheeled Self-Propelled Howitzer",
      "Casspir & Mamba Mine-Resistant Ambush Protected (MRAP) Vehicles",
      "Badger 8x8 Infantry Combat Vehicle (Patria AMV derivative)"
    ],
    "majorImports": [
      "Saab JAS 39C/D Gripen Multi-Role Fighters (Sweden)",
      "Valour-Class (MEKO A-200SAN) Guided Missile Stealth Frigates (Germany)",
      "Type 209/1400MOD Diesel-Electric Submarines (HDW Germany)",
      "BAE Systems Hawk 120 Lead-In Fighter Trainers (UK)"
    ],
    "majorExports": [
      "Paramount Marauder and Mbombe MRAP armored combat vehicles",
      "Denel artillery systems, laser rangefinders, and missile warning sensors"
    ],
    "militaryAlliances": [
      "Southern African Development Community (SADC) Mutual Defence Pact",
      "African Standby Force (ASF) Southern Brigade",
      "IBSA Naval Drills (IBSAMAR with India and Brazil)"
    ],
    "categories": [
      {
        "name": "SOUTH AFRICAN NAVY (SAN)",
        "desc": "Coastal and blue-water patrol safeguarding the Cape sea route and sub-Antarctic islands.",
        "systems": [
          {
            "name": "Valour-Class (MEKO A-200SAN) Frigates",
            "type": "Guided Missile Stealth Frigate",
            "origin": "Germany / South Africa",
            "status": "CONFIRMED",
            "quantity": "4 ships (Amatola, Spioenkop, Mendi, Isandlwana)",
            "role": "EEZ defense, surface combat, helicopter patrol."
          },
          {
            "name": "Heroine-Class (Type 209/1400) Submarines",
            "type": "Diesel-Electric Attack Submarine",
            "origin": "HDW Germany",
            "status": "CONFIRMED",
            "quantity": "3 submarines (Manthatisi, Charlotte Maxeke, Queen Modjadji)",
            "role": "Anti-surface, anti-submarine warfare and covert patrol."
          },
          {
            "name": "Warrior-Class Multi-Mission Inshore Patrol Vessels (MMIPV)",
            "type": "Offshore Patrol Vessel",
            "origin": "Damen Shipyards Cape Town",
            "status": "CONFIRMED",
            "quantity": "3 in service",
            "role": "Counter-piracy, fisheries protection, search and rescue."
          }
        ]
      },
      {
        "name": "SOUTH AFRICAN AIR FORCE (SAAF)",
        "desc": "Air defense, tactical transport, and international peacekeeping airlift.",
        "systems": [
          {
            "name": "Saab JAS 39 Gripen C/D",
            "type": "4th-Gen Multi-Role Fighter",
            "origin": "Sweden",
            "status": "CONFIRMED",
            "quantity": "26 ordered (combat operational)",
            "role": "Supersonic air defense, interception, and reconnaissance."
          },
          {
            "name": "Denel Rooivalk Mk1",
            "type": "Attack Combat Helicopter",
            "origin": "South Africa (Denel)",
            "status": "CONFIRMED",
            "quantity": "11 in service",
            "role": "Armed escort, UN MONUSCO peace enforcement in DR Congo."
          },
          {
            "name": "Lockheed C-130BZ Hercules",
            "type": "Tactical Airlift Transport",
            "origin": "United States",
            "status": "CONFIRMED",
            "quantity": "6 operational (undergoing cockpit avionics upgrade)",
            "role": "Continental troop transport and humanitarian disaster relief."
          }
        ]
      },
      {
        "name": "SOUTH AFRICAN ARMY",
        "desc": "Mechanized brigades, peacekeeping detachments, and border safeguarding (Operation Corona).",
        "systems": [
          {
            "name": "Olifant Mk2 Main Battle Tank",
            "type": "Main Battle Tank",
            "origin": "South Africa (Centurion redesign)",
            "status": "CONFIRMED",
            "quantity": "26 modernized MBTs",
            "role": "Heavy armored breakthrough."
          },
          {
            "name": "Ratel Infantry Combat Vehicle",
            "type": "6x6 Wheeled Armored Combat Vehicle",
            "origin": "South Africa",
            "status": "CONFIRMED",
            "quantity": "500+ in service",
            "role": "Mechanized troop mobility with 20mm/90mm guns."
          },
          {
            "name": "G6 Rhino 155mm Howitzer",
            "type": "Self-Propelled Wheeled Artillery",
            "origin": "South Africa (Denel)",
            "status": "CONFIRMED",
            "quantity": "43 units",
            "role": "Long-range precision artillery up to 50 km (V-LAP)."
          }
        ]
      }
    ]
  },
  "relations": {
    "main": [
      {
        "id": "ZAF_IND",
        "country": "India",
        "flag": "🇮🇳",
        "status": "Historical Kinship & Strategic Partner (BRICS/IBSA)",
        "color": "#10b981",
        "note": "Deep anti-apartheid historical bond, 1.6M Indian-origin community, IBSAMAR naval exercises."
      },
      {
        "id": "ZAF_CHN",
        "country": "China",
        "flag": "🇨🇳",
        "status": "All-Weather Comprehensive Strategic Partner",
        "color": "#10b981",
        "note": "Top trade destination; major industrial infrastructure and electric bus assembly investments."
      },
      {
        "id": "ZAF_USA",
        "country": "United States",
        "flag": "🇺🇸",
        "status": "Strategic Economic Partner with Geopolitical Friction",
        "color": "#eab308",
        "note": "AGOA duty-free export access balanced against disputes over Russia and Middle East stance."
      },
      {
        "id": "ZAF_RUS",
        "country": "Russia",
        "flag": "🇷🇺",
        "status": "Historical Solidarity & BRICS Partner",
        "color": "#3b82f6",
        "note": "Historic Soviet backing of liberation movements; joint naval drills (Exercise Mosi)."
      }
    ],
    "searchable": []
  },
  "strategicLocations": [
    {
      "name": "Cape of Good Hope / Cape Point",
      "type": "Global Maritime Chokepoint & Sea Route",
      "coords": "34.35° S, 18.49° E",
      "significance": "Controls traffic routing between Atlantic and Indian Oceans; handles ~10,000 deep-draft ships annually bypassing Suez."
    },
    {
      "name": "Port of Durban",
      "type": "Busiest Container Port in Sub-Saharan Africa",
      "coords": "29.87° S, 31.02° E",
      "significance": "Handles 60% of South African container traffic; primary maritime conduit for landlocked SADC economies."
    },
    {
      "name": "Richards Bay Coal Terminal (RBCT)",
      "type": "World's Largest Single-Site Coal Export Facility",
      "coords": "28.80° S, 32.08° E",
      "significance": "Exports 70M+ tons of coal annually to India, Europe, and Asia."
    },
    {
      "name": "Simon's Town Naval Base",
      "type": "Primary Headquarters Naval Megabase",
      "coords": "34.19° S, 18.43° E",
      "significance": "Command center for the South African Navy submarine and frigate flotillas."
    }
  ],
  "currentTensions": [
    {
      "title": "SAMIDRC Military Deployment in Eastern DR Congo",
      "severity": "Combat Operations Alert",
      "color": "#f59e0b",
      "desc": "SANDF troops deployed under SADC regional mission in North Kivu facing combat clashes with M23 rebel forces."
    }
  ],
  "keyEvents": [
    {
      "title": "1910 Union of South Africa",
      "category": "Unification",
      "date": "May 31, 1910"
    },
    {
      "title": "1994 Non-Racial Democratic Elections",
      "category": "Democratic Triumph",
      "date": "April 27, 1994"
    },
    {
      "title": "2024 Formation of Government of National Unity",
      "category": "Political Realignment",
      "date": "June 14, 2024"
    }
  ],
  "indiaImpact": {
    "headline": "South Africa–India Historic Kinship: From Gandhi's Satyagraha to BRICS Leadership",
    "points": [
      {
        "title": "Historic Solidarity & People-to-People Ties",
        "desc": "Mahatma Gandhi formulated his philosophy of Satyagraha (non-violent resistance) during 21 years in South Africa (1893–1914); today, South Africa is home to 1.6 million people of Indian origin (the largest diaspora outside Asia)."
      },
      {
        "title": "BRICS & IBSA Trilateral Dialogue Forum",
        "desc": "India, South Africa, and Brazil coordinate shared multilateral reform policies, demanding democratized governance across the UN, World Bank, and IMF."
      },
      {
        "title": "IBSAMAR Maritime Joint Naval Exercises",
        "desc": "The Indian Navy and South African Navy conduct regular joint anti-submarine and maritime domain awareness drills off the Cape coast."
      }
    ]
  }
},

  "EGY": {
  "id": "EGY",
  "name": "Egypt",
  "officialName": "Arab Republic of Egypt",
  "commonName": "Egypt",
  "capital": "Cairo",
  "capitalCoords": {
    "lat": 30.0444,
    "lng": 31.2357
  },
  "capitalAdmin": {
    "role": "Historic Capital & Seat of Sovereign Arab Republic of Egypt",
    "political": "Hosts Heliopolis Palace, the Egyptian Parliament, Cabinet of Ministries, and the Arab League headquarters. New Administrative Capital (NAC) under completion 45 km east.",
    "geographic": "Situated on the banks of the Nile River in Lower Egypt.",
    "strategic": "Apex military headquarters (The Octagon / New Defense HQ), General Intelligence Directorate (GIS), and Supreme Council of the Armed Forces (SCAF)."
  },
  "region": "Africa",
  "subregion": "Northern Africa",
  "flag": "🇪🇬",
  "iso2": "eg",
  "isoCode": "EGY / 818",
  "lat": 26.8206,
  "lng": 30.8025,
  "area": "1,002,450 km² (Rank: 29th globally)",
  "population": "112.7 Million (2024 CAPMAS / UN estimate)",
  "politicalSystemType": "Semi-Presidential Republic",
  "currency": "Egyptian Pound (EGP / E£)",
  "languages": "Modern Standard Arabic (Official); Egyptian Arabic (National Vernacular)",
  "timeZones": "Eastern European Time (UTC+2 / UTC+3 Summer)",
  "foundingInfo": "Unification of Upper and Lower Egypt under King Narmer c. 3100 BCE; Modern State established by Muhammad Ali Pasha 1805; Republic proclaimed June 18, 1953.",
  "tagline": "Cradle of Civilization, Guardian of the Suez Canal & Arab World Anchor",
  "overview": {
    "beginner": "Egypt is a transcontinental nation situated in the northeast corner of Africa and the Sinai Peninsula in Asia. With over 112 million people, it is the most populous country in the Arab world and the third-most populous in Africa. Home to over 5,000 years of recorded human history, modern Egypt is internationally vital because it owns and operates the Suez Canal—the artificial waterway carrying approximately 12% of all global trade and connecting European markets directly to Asian supply chains.",
    "advanced": "The Arab Republic of Egypt occupies the premier geostrategic crossroads linking Africa, Asia, the Mediterranean Sea, and the Red Sea. Egypt operates the largest standing armed forces in Africa and the Arab world, maintaining comprehensive maritime commands across both the Northern (Mediterranean) and Southern (Red Sea) theaters. Under President Abdel Fattah el-Sisi, Egypt has completed massive infrastructure projects including the New Suez Canal expansion and the New Administrative Capital. Egypt's foreign policy focuses on regional conflict mediation (Gaza ceasefire, Sudan crisis), safeguarding Nile River water security against Ethiopia's GERD dam, and expanding its strategic role within BRICS (joined January 2024)."
  },
  "history": [
    {
      "year": "c. 3100 BCE",
      "title": "Unification of Upper & Lower Egypt by Narmer",
      "phase": "Pharaonic Civilization",
      "whatHappened": "King Narmer united Upper and Lower Egypt, establishing the First Dynasty at Memphis and initiating three millennia of Pharaonic civilization.",
      "where": "Memphis, Nile Delta",
      "actors": [
        "King Narmer (Menes)"
      ],
      "whyItMattered": "Created the world's earliest unified bureaucratic territorial state, monumental stone architecture (Pyramids of Giza), and hieroglyphic writing.",
      "consequences": "Foundational baseline of Egyptian national identity that has persisted across five millennia.",
      "claimType": "HISTORICAL FACT",
      "sources": "Narmer Palette (Egyptian Museum Cairo) / Royal Canon of Turin"
    },
    {
      "year": "1869",
      "title": "Inauguration of the Suez Canal",
      "phase": "Modern Maritime Transformation",
      "whatHappened": "Constructed under Ferdinand de Lesseps and Khedive Ismail, the 193-km sea-level waterway opened, eliminating the 7,000-km circumnavigation of Africa.",
      "where": "Isthmus of Suez",
      "actors": [
        "Ferdinand de Lesseps",
        "Khedive Ismail",
        "Egyptian canal laborers"
      ],
      "whyItMattered": "Revolutionized global maritime commerce, linking Europe to India and the Far East in half the transit time.",
      "consequences": "Deepened British financial control, leading to the British occupation of Egypt in 1882.",
      "claimType": "HISTORICAL FACT",
      "sources": "Suez Canal Authority Historical Archives / French National Archives"
    },
    {
      "year": "1952–1956",
      "title": "Free Officers Revolution & Suez Crisis",
      "phase": "Arab Nationalism & Sovereignty",
      "whatHappened": "Colonel Gamal Abdel Nasser led the Free Officers to overthrow King Farouk, proclaimed the Republic, and nationalized the Suez Canal in July 1956.",
      "where": "Alexandria / Cairo / Suez Canal Zone",
      "actors": [
        "Gamal Abdel Nasser",
        "Anthony Eden",
        "Guy Mollet",
        "David Ben-Gurion"
      ],
      "whyItMattered": "Egypt stood firm against British, French, and Israeli tripartite invasion; diplomatic intervention by the US and USSR forced their withdrawal.",
      "consequences": "Cemented Nasser as the paramount hero of Pan-Arab nationalism and signaled the definitive end of the British and French colonial empires.",
      "claimType": "HISTORICAL FACT",
      "sources": "National Archives Kew (Cabinet Minutes) / Egyptian National Documents Archive"
    },
    {
      "year": "1973",
      "title": "The October War (Yom Kippur War) & Crossing the Bar-Lev",
      "phase": "Sinai Liberation",
      "whatHappened": "Egyptian forces executed Operation Badr, crossing the Suez Canal and storming the fortified Israeli Bar-Lev Line in the Sinai.",
      "where": "Suez Canal & Sinai Peninsula",
      "actors": [
        "Anwar Sadat",
        "General Saad el-Shazly",
        "Golda Meir"
      ],
      "whyItMattered": "Restored Arab military morale, shattered the myth of Israeli invincibility, and paved the way for the 1978 Camp David Accords.",
      "consequences": "Complete return of the Sinai Peninsula to Egyptian sovereignty and a historic peace treaty with Israel (1979).",
      "claimType": "HISTORICAL FACT",
      "sources": "Egyptian Armed Forces War Records / Carter Presidential Library"
    },
    {
      "year": "2015",
      "title": "Inauguration of the New Suez Canal",
      "phase": "Modern Megaprojects",
      "whatHappened": "President Abdel Fattah el-Sisi completed the $8.5 Billion New Suez Canal project in one year, digging a 35-km parallel channel and deepening existing fairways.",
      "where": "Ismailia / Suez Canal Corridor",
      "actors": [
        "Abdel Fattah el-Sisi",
        "Admiral Mohab Mamish"
      ],
      "whyItMattered": "Allowed simultaneous two-way ship transit, reduced vessel waiting time from 18 to 11 hours, and doubled potential daily vessel capacity.",
      "consequences": "Boosted canal revenue potential to over $9B annually before 2024 Red Sea geopolitical disruptions.",
      "claimType": "HISTORICAL FACT",
      "sources": "Suez Canal Authority Official Data / World Bank Maritime Logistics Reports"
    }
  ],
  "politicalSystem": {
    "type": "Semi-Presidential Constitutional Republic",
    "constitution": "Constitution of the Arab Republic of Egypt (2014, amended 2019)",
    "branches": [
      {
        "name": "Executive",
        "role": "President Abdel Fattah el-Sisi exercising extensive executive authority; Prime Minister Mostafa Madbouly overseeing the Council of Ministers."
      },
      {
        "name": "Legislature",
        "role": "Bicameral Parliament: 596-seat House of Representatives and 300-seat Senate."
      },
      {
        "name": "Judiciary",
        "role": "Supreme Constitutional Court and Court of Cassation administering civil and administrative law."
      }
    ],
    "currentLeadership": {
      "headOfState": "President Abdel Fattah el-Sisi (Re-elected Dec 2023 for 6-year term)",
      "headOfGovernment": "Prime Minister Mostafa Madbouly",
      "foreignMinister": "Badr Abdelatty (Minister of Foreign Affairs & Emigration)",
      "defenseMinister": "General Abdel Mageed Saqr (Minister of Defense and Military Production)"
    },
    "rulingParty": "Nation's Future Party (Mostaqbal Watan) - Dominant pro-government parliamentary party",
    "oppositionParties": [
      {
        "name": "Republican People's Party",
        "seats": "50 seats",
        "stance": "Loyal coalition partner"
      },
      {
        "name": "Wafd Party & Tagammu",
        "seats": "Minority opposition",
        "stance": "Historic nationalist and secular leftist parties"
      }
    ],
    "parliamentDetails": "House of Representatives meets in central Cairo, with permanent legislative facilities transferring to the New Administrative Capital.",
    "recentElections": "Presidential Election December 2023 won by Abdel Fattah el-Sisi with 89.6% of votes; parliamentary elections scheduled for late 2025.",
    "domesticDevelopments": [
      {
        "title": "New Administrative Capital (NAC)",
        "claimType": "INFRASTRUCTURE",
        "desc": "A $58 Billion smart city project housing all ministries, parliament, supreme court, and diplomatic quarters."
      },
      {
        "title": "Ras El-Hekma Megadeal ($35 Billion)",
        "claimType": "INVESTMENT",
        "desc": "Landmark development agreement with UAE sovereign wealth fund (ADQ) injecting emergency foreign currency reserves."
      }
    ],
    "currentIssues": [
      {
        "title": "Red Sea Shipping Revenue Loss",
        "claimType": "ECONOMIC CRISIS",
        "desc": "Houthi maritime missile strikes diverting container ships around Africa, cutting Suez Canal revenues by over 50% in 2024."
      },
      {
        "title": "Grand Ethiopian Renaissance Dam (GERD)",
        "claimType": "WATER SECURITY",
        "desc": "Existential concern over downstream Nile water flow reduction caused by Ethiopia's filling of the 74B m³ reservoir."
      }
    ],
    "policyDebates": [
      {
        "topic": "Food & Bread Subsidy Rationalization",
        "desc": "Reforming historic state bread subsidies to curb budget deficits while protecting vulnerable low-income populations."
      }
    ],
    "institutions": [
      {
        "name": "Supreme Council of the Armed Forces (SCAF)",
        "role": "Apex military body with constitutional role safeguarding national sovereignty and state stability."
      },
      {
        "name": "General Intelligence Directorate (GIS)",
        "role": "Primary foreign intelligence service actively managing Palestinian-Israeli mediation."
      }
    ],
    "federalDynamics": "Centralized state divided into 27 governorates led by presidentially appointed governors.",
    "foreignPolicyDoctrine": "Arab leadership, non-alignment, strategic autonomy, Mediterranean energy integration, and African water security."
  },
  "geographyBorders": {
    "landArea": "1,002,450 km² (Over 95% hyper-arid Sahara and Sinai desert)",
    "location": "Northeast Africa and Southwest Asia (Sinai Peninsula).",
    "continent": "Africa / Asia (Transcontinental)",
    "latRange": "22°N to 32°N",
    "lngRange": "25°E to 37°E",
    "coastline": "2,450 km along the Mediterranean Sea and Red Sea",
    "majorOceans": [
      "Mediterranean Sea (Atlantic Basin)",
      "Red Sea (Indian Ocean Basin)"
    ],
    "majorIslands": [
      "Giftun Island",
      "Tiran & Sanafir (transferred to Saudi administration)"
    ],
    "strategicGeography": "Owns the Suez Canal, the indispensable link between the North Atlantic / Mediterranean and the Indo-Pacific oceans.",
    "topography": "95% desert plateau (Western Desert, Eastern Desert); narrow fertile Nile River Valley and vast Nile Delta housing 98% of the population.",
    "rivers": [
      "Nile River (World's longest river, flowing 6,650 km)",
      "Rosetta Branch",
      "Damietta Branch"
    ],
    "mountains": [
      "Mount Catherine (Gabal Katrīnah, 2,629 m - highest peak in Egypt)",
      "Mount Sinai (Gabal Mūsā, 2,285 m)"
    ],
    "seas": [
      "Mediterranean Sea",
      "Red Sea",
      "Gulf of Suez",
      "Gulf of Aqaba"
    ],
    "climates": [
      "Arid desert climate with mild winters and extremely hot, dry summers",
      "Mediterranean coastal strip with winter rainfall"
    ],
    "landBorders": [
      {
        "country": "Libya",
        "id": "LBY",
        "borderLength": "1,115 km",
        "region": "West",
        "status": "Demarcated",
        "strategicContext": "Fortified border monitored by Sidi Barrani Base against militia instability."
      },
      {
        "country": "Sudan",
        "id": "SDN",
        "borderLength": "1,273 km",
        "region": "South",
        "status": "Demarcated",
        "strategicContext": "22nd parallel boundary; Halayeb Triangle territory dispute; managing Sudanese refugee arrivals."
      },
      {
        "country": "Israel",
        "id": "ISR",
        "borderLength": "208 km",
        "region": "Northeast",
        "status": "Demarcated",
        "strategicContext": "Sinai-Negev security fence; Philadelphi Corridor buffer; 1979 peace treaty verification."
      },
      {
        "country": "Palestine (Gaza Strip)",
        "id": "PSE",
        "borderLength": "13 km",
        "region": "Northeast",
        "status": "Demarcated",
        "strategicContext": "Rafah Crossing; critical humanitarian border transit corridor."
      }
    ],
    "maritimeBorders": [
      {
        "country": "Cyprus",
        "id": "CYP",
        "boundary": "Eastern Mediterranean EEZ delimitation (Aphrodite & Zohr gas fields)"
      },
      {
        "country": "Greece",
        "id": "GRC",
        "boundary": "Exclusive Economic Zone Delimitation Agreement 2020"
      },
      {
        "country": "Saudi Arabia",
        "id": "SAU",
        "boundary": "Red Sea Maritime Delimitation Accord 2016"
      }
    ]
  },
  "economy": {
    "gdpNominal": "$395 Billion (Rank: 36th globally)",
    "gdpPPP": "$1.81 Trillion (Rank: 19th globally)",
    "gdpPerCapita": "$3,700 (Lower-middle income)",
    "gdpGrowth": "+3.0% (2024 IMF estimate)",
    "currency": "Egyptian Pound (EGP / E£)",
    "majorIndustries": [
      "Hydrocarbon Extraction & Liquefied Natural Gas (Zohr Deepwater Offshore Field)",
      "Suez Canal Transit Dues & Maritime Services",
      "International Cultural & Beach Tourism (Pyramids, Luxor, Red Sea Resorts)",
      "Textiles, Apparel & Agricultural Cotton Production",
      "Construction & Megaproject Civil Engineering"
    ],
    "majorExports": [
      "Liquefied Natural Gas (LNG - Damietta & Idku plants)",
      "Refined Petroleum & Chemical Fertilizers (Urea, Nitrogen)",
      "Agricultural Produce (Oranges #1 Global Exporter, Potatoes, Onions)",
      "Ready-made Garments & Textiles",
      "Gold (Sukari Gold Mine)"
    ],
    "majorImports": [
      "Wheat & Grain (World's largest wheat importer - from Russia & Ukraine)",
      "Refined Fuels & Crude Oil Derivatives",
      "Industrial Machinery, Electronic Appliances & Spare Parts",
      "Pharmaceutical Raw Ingredients"
    ],
    "energyPosition": "Major regional natural gas exporter anchoring the East Mediterranean Gas Forum (EMGF); constructing El Dabaa Nuclear Power Plant (4x 1,200 MW VVER reactors with Rosatom).",
    "naturalResources": "Natural gas, petroleum, phosphates, iron ore, limestone, manganese, and world-class solar irradiation (Benban Solar Park - 1.8 GW).",
    "tradeOrgs": [
      "BRICS Alliance (Joined January 2024)",
      "Common Market for Eastern and Southern Africa (COMESA)",
      "Greater Arab Free Trade Area (GAFTA)",
      "East Mediterranean Gas Forum (EMGF - Headquarters in Cairo)",
      "World Trade Organization (WTO)"
    ],
    "economicStrategicImportance": "Gatekeeper of the Suez Canal; critical hub for trans-Mediterranean subsea electricity interconnectors to Greece and Saudi Arabia.",
    "indiaEconomicConnection": "Strategic Partnership established 2023; President Sisi was Chief Guest at India's Republic Day; bilateral trade reached $7.5B; India is developing a dedicated Indian Special Economic Zone in the SCZONE.",
    "majorTradingPartners": [
      {
        "country": "United Arab Emirates",
        "share": "Primary direct investor and trade partner"
      },
      {
        "country": "Saudi Arabia",
        "share": "Major trade and financial deposit supporter"
      },
      {
        "country": "Turkey",
        "share": "Top export destination for Egyptian LNG and plastics"
      },
      {
        "country": "Italy",
        "share": "Key European energy partner (Eni / Zohr field)"
      },
      {
        "country": "India",
        "share": "Top 5 trade partner ($7.5B+ trade)"
      }
    ]
  },
  "military": {
    "expenditure": "$9.4 Billion (2.3% of GDP - Armed Forces Budget)",
    "personnel": {
      "active": "438,500 Active Duty Armed Forces (Largest military in Africa & Arab World)",
      "reserves": "479,000 Trained Reserve Personnel"
    },
    "doctrine": "Multi-theater defense protecting national borders, securing the Suez Canal and Red Sea approaches, deterring threats to Nile water security, and countering regional terrorism.",
    "nuclearStockpile": "Non-nuclear state strictly advocating for a Middle East Weapons of Mass Destruction Free Zone; constructing civilian nuclear energy at El Dabaa under IAEA safeguards.",
    "defenseIndustry": "Robust domestic military production under the Ministry of Military Production and Arab Organization for Industrialization (AOI) assembling tanks, armored vehicles, drones, and naval patrol craft.",
    "majorDomesticSystems": [
      "M1A1 Abrams Main Battle Tank (Co-produced domestically in Factory 200 Cairo)",
      "Temsah (Crocodile) 4x4 / 6x6 Mine-Resistant Armored Vehicles",
      "Fahd-280/300 Armored Personnel Carriers",
      "30th of June Armed Reconnaissance Combat Drones"
    ],
    "majorImports": [
      "Dassault Rafale 4.5-Gen Multi-Role Fighters (France - 54 aircraft)",
      "Mistral-Class Amphibious Assault Helicopter Carriers (France - 2 ships: Gamal Abdel Nasser & Anwar Sadat)",
      "FREMM & MEKO A-200EN Guided Missile Frigates (France, Italy, Germany)",
      "Type 209/1400MOD Diesel-Electric Submarines (HDW Germany - 4 submarines)",
      "S-300VM (Antey-2500) Long-Range Air Defense Systems (Russia)",
      "Lockheed Martin F-16C/D Fighting Falcon (USA - 200+ aircraft)"
    ],
    "majorExports": [
      "Ammunition, small arms, and armored vehicles to Arab and African partners"
    ],
    "militaryAlliances": [
      "Bright Star Multinational Military Exercises (Co-hosted with US Central Command)",
      "Arab League Joint Defense Council",
      "Combined Maritime Forces (CMF) Task Force 153 (Red Sea security)"
    ],
    "categories": [
      {
        "name": "EGYPTIAN NAVY (AL-QUWWĀT AL-BAḤRIYYAH)",
        "desc": "Dominant maritime force split into Northern (Mediterranean) and Southern (Red Sea) Fleet Commands.",
        "systems": [
          {
            "name": "Mistral-Class Helicopter Landing Docks (LHD)",
            "type": "Amphibious Assault Ship / Carrier",
            "origin": "France",
            "status": "CONFIRMED",
            "quantity": "2 ships (ENS Gamal Abdel Nasser, ENS Anwar El Sadat)",
            "role": "Power projection, Ka-52K helicopter assault, naval theater command."
          },
          {
            "name": "Type 209/1400MOD Attack Submarines",
            "type": "Diesel-Electric Attack Submarine",
            "origin": "HDW Germany",
            "status": "CONFIRMED",
            "quantity": "4 submarines (S41, S42, S43, S44)",
            "role": "Anti-surface, anti-submarine warfare, Harpoon missile strike."
          },
          {
            "name": "FREMM & MEKO A-200EN Stealth Frigates",
            "type": "Guided Missile Frigates",
            "origin": "France / Italy / Germany",
            "status": "CONFIRMED",
            "quantity": "7 modern frigates",
            "role": "Air defense, Aster 30 missile defense, anti-submarine warfare."
          }
        ]
      },
      {
        "name": "EGYPTIAN AIR FORCE (AL-QUWWĀT AL-JAWWIYYAH)",
        "desc": "Extensive multi-doctrine air fleet with 4th and 4.5-generation combat fighters.",
        "systems": [
          {
            "name": "Dassault Rafale DM/EM",
            "type": "4.5-Gen Omnirole Fighter",
            "origin": "France",
            "status": "CONFIRMED",
            "quantity": "24 in service (30 additional ordered)",
            "role": "Deep precision strike, SCALP cruise missiles, Meteor long-range BVR."
          },
          {
            "name": "Lockheed Martin F-16C/D Fighting Falcon",
            "type": "Multi-Role Fighter",
            "origin": "United States",
            "status": "CONFIRMED",
            "quantity": "207 aircraft in service",
            "role": "Air superiority, close air support, and border patrol."
          },
          {
            "name": "MiG-29M/M2 / Su-35 Flanker Variants",
            "type": "Multi-Role Fighter",
            "origin": "Russia",
            "status": "CONFIRMED",
            "quantity": "44 MiG-29M/M2 aircraft",
            "role": "Air intercept and tactical maritime strike."
          },
          {
            "name": "Boeing AH-64D Apache & Kamov Ka-52 Alligator",
            "type": "Heavy Attack Helicopters",
            "origin": "USA / Russia",
            "status": "CONFIRMED",
            "quantity": "46 Apaches, 46 Ka-52s",
            "role": "Anti-armor, counter-insurgency, and naval carrier strike."
          }
        ]
      },
      {
        "name": "EGYPTIAN ARMY (AL-JAYSH AL-MIṢRĪ)",
        "desc": "Massive armored and mechanized formations holding the Sinai and western frontier.",
        "systems": [
          {
            "name": "General Dynamics M1A1 Abrams",
            "type": "Main Battle Tank",
            "origin": "USA / Egypt (Factory 200)",
            "status": "CONFIRMED",
            "quantity": "1,130 MBTs assembled in Egypt",
            "role": "Heavy armored breakthrough."
          },
          {
            "name": "K9A1 EGY Thunder 155mm Howitzer",
            "type": "Tracked Self-Propelled Artillery",
            "origin": "South Korea (Hanwha) / Egypt",
            "status": "CONFIRMED",
            "quantity": "200+ systems on order / local production",
            "role": "High-precision artillery fires with automated fire control."
          },
          {
            "name": "Tor-M2E & Buk-M2E Mobile SAM Systems",
            "type": "Short-to-Medium Range Air Defense",
            "origin": "Russia",
            "status": "CONFIRMED",
            "quantity": "Operational nationwide",
            "role": "Point-defense protection for mechanized armored divisions."
          }
        ]
      }
    ]
  },
  "relations": {
    "main": [
      {
        "id": "EGY_IND",
        "country": "India",
        "flag": "🇮🇳",
        "status": "Elevated Strategic Partner",
        "color": "#10b981",
        "note": "Historic Non-Aligned Movement founders, defense joint training, green hydrogen investments."
      },
      {
        "id": "EGY_SAU",
        "country": "Saudi Arabia",
        "flag": "🇸🇦",
        "status": "Pivotal Strategic & Financial Backer",
        "color": "#10b981",
        "note": "Billion-dollar central bank deposits, Red Sea causeway plans, joint naval drills."
      },
      {
        "id": "EGY_USA",
        "country": "United States",
        "flag": "🇺🇸",
        "status": "Strategic Treaty Partner ($1.3B/yr FMF)",
        "color": "#3b82f6",
        "note": "Cornerstone Camp David Accords partner, Bright Star exercises, counter-terrorism."
      },
      {
        "id": "EGY_ISR",
        "country": "Israel",
        "flag": "🇮🇱",
        "status": "Peace Treaty Neighbor with High Border Tensions",
        "color": "#eab308",
        "note": "1979 peace treaty, natural gas imports, intelligence coordination on Gaza border."
      },
      {
        "id": "EGY_RUS",
        "country": "Russia",
        "flag": "🇷🇺",
        "status": "Strategic Energy & Arms Partner",
        "color": "#3b82f6",
        "note": "Constructing El Dabaa Nuclear Plant; major supplier of wheat; Russian Industrial Zone in Suez."
      }
    ],
    "searchable": []
  },
  "strategicLocations": [
    {
      "name": "Suez Canal Corridor (Port Said to Suez)",
      "type": "World-Dominant Maritime Chokepoint",
      "coords": "30.58° N, 32.26° E",
      "significance": "193-km waterway handling 12% of global trade and 10% of seaborne crude oil; eliminates 7,000 km voyage around Africa."
    },
    {
      "name": "Berenice Military Megabase (Red Sea)",
      "type": "Apex Red Sea & Bab el-Mandeb Naval Air Base",
      "coords": "23.95° N, 35.48° E",
      "significance": "Largest naval-air base on the Red Sea, securing southern maritime approaches to the Suez Canal."
    },
    {
      "name": "Sidi Barrani Military Base (Western Frontier)",
      "type": "Northwestern Border Megabase",
      "coords": "31.60° N, 25.92° E",
      "significance": "Protects Egypt's 1,115-km border with Libya against militia infiltration."
    },
    {
      "name": "The Octagon (New Defense Ministry HQ)",
      "type": "Supreme Armed Forces Command Megacomplex",
      "coords": "29.98° N, 31.75° E",
      "significance": "3,000-acre command headquarters in the New Administrative Capital; largest defense ministry complex in the world."
    }
  ],
  "currentTensions": [
    {
      "title": "Gaza Border Security & Humanitarian Emergency",
      "severity": "Critical National Security Watch",
      "color": "#ef4444",
      "desc": "Preventing forced displacement of Palestinians into the Sinai Peninsula while managing Rafah border crossing operations."
    },
    {
      "title": "Red Sea Shipping Disruptions (Houthi Attacks)",
      "severity": "Severe Economic Loss Alert",
      "color": "#f59e0b",
      "desc": "Over 50% drop in Suez Canal transit revenue due to commercial ship diversions around the Cape of Good Hope."
    }
  ],
  "keyEvents": [
    {
      "title": "1869 Opening of the Suez Canal",
      "category": "Global Maritime Event",
      "date": "November 17, 1869"
    },
    {
      "title": "1956 Suez Crisis & Canal Nationalization",
      "category": "Sovereign Triumph",
      "date": "July 26, 1956"
    },
    {
      "title": "1973 October War & Sinai Crossing",
      "category": "Military Turning Point",
      "date": "October 6, 1973"
    },
    {
      "title": "2015 Opening of New Suez Canal Expansion",
      "category": "Infrastructure Milestone",
      "date": "August 6, 2015"
    }
  ],
  "indiaImpact": {
    "headline": "Egypt–India Strategic Partnership: Guardians of the Suez & Indo-Pacific Maritime Corridors",
    "points": [
      {
        "title": "Historical Kinship (Nehru & Nasser to Modi & Sisi)",
        "desc": "Co-founders of the Non-Aligned Movement in 1961; ties elevated to a 'Strategic Partnership' in January 2023 when President Sisi was Chief Guest at India's Republic Day."
      },
      {
        "title": "Suez Canal Economic Zone (SCZONE) Indian Dedicated Hub",
        "desc": "Egypt allocated dedicated industrial land in the SCZONE for Indian conglomerates to manufacture green hydrogen, solar panels, and pharmaceuticals with duty-free access to European and African markets."
      },
      {
        "title": "Joint Military & Aerial Drills (Cyclone & Desert Warrior)",
        "desc": "Indian Air Force and Special Forces regularly conduct joint exercises (Exercise Cyclone) with Egyptian counterparts, focusing on counter-terrorism and maritime anti-piracy."
      }
    ]
  }
},

  "IDN": {
  "id": "IDN",
  "name": "Indonesia",
  "officialName": "Republic of Indonesia",
  "commonName": "Indonesia",
  "capital": "Jakarta",
  "capitalCoords": {
    "lat": -6.2088,
    "lng": 106.8456
  },
  "capitalAdmin": {
    "role": "National Capital & Megacity Financial Hub (Future capital: Nusantara)",
    "political": "Location of Merdeka Palace, the People's Consultative Assembly (MPR), Supreme Court, and ASEAN Secretariat headquarters. Administrative functions transitioning to Ibu Kota Nusantara (IKN) in East Kalimantan.",
    "geographic": "Situated on the northwest coast of Java island.",
    "strategic": "Apex military command (MABES TNI Cilangkap), National Resilience Institute (Lemhannas), and State Intelligence Agency (BIN)."
  },
  "region": "Asia",
  "subregion": "South-Eastern Asia",
  "flag": "🇮🇩",
  "iso2": "id",
  "isoCode": "IDN / 360",
  "lat": -0.7893,
  "lng": 113.9213,
  "area": "1,904,569 km² (Largest archipelagic state in the world - 17,500+ islands)",
  "population": "279.8 Million (Rank: 4th globally - 2024 BPS / UN estimate)",
  "politicalSystemType": "Presidential Constitutional Republic",
  "currency": "Indonesian Rupiah (IDR / Rp)",
  "languages": "Indonesian (Bahasa Indonesia - Official national language; 700+ regional languages including Javanese, Sundanese)",
  "timeZones": "UTC+7 to UTC+9 (WIB, WITA, WIT)",
  "foundingInfo": "Proclamation of Independence August 17, 1945 by Sukarno and Hatta; Dutch recognition following war of independence in 1949.",
  "tagline": "World's Largest Archipelago, Malacca Strait Guardian & Nickel Superpower",
  "overview": {
    "beginner": "Indonesia is the largest island country on Earth, comprising over 17,500 tropical islands spanning more than 5,000 kilometers along the Equator between the Indian and Pacific Oceans. Home to nearly 280 million people, it is the world's fourth most populous nation and the largest Muslim-majority democracy. Indonesia holds immense geopolitical importance because it controls the Strait of Malacca, the Sunda Strait, and the Lombok Strait—the maritime passages through which the majority of the world's energy and container trade flows.",
    "advanced": "The Republic of Indonesia is the natural leader of ASEAN and Southeast Asia's sole G20 economy ($1.37T GDP). Indonesia anchors the pivotal geographic junction between the Indian and Pacific Oceans (Indo-Pacific). Domestically, President Prabowo Subianto continues the transformative economic 'downstreaming' (hilirisasi) industrial strategy pioneered by Joko Widodo, prohibiting raw mineral exports to force multinational companies to build multibillion-dollar nickel processing and electric vehicle battery gigafactories domestically. Militarily, Indonesia exercises sovereign stewardship over three designated Archipelagic Sea Lanes (ALKI), balancing its traditional non-aligned doctrine ('bebas dan aktif') between the United States and China."
  },
  "history": [
    {
      "year": "7th–13th Cent.",
      "title": "Srivijaya Maritime Thalassocracy",
      "phase": "Classical Maritime Empire",
      "whatHappened": "The Buddhist Srivijaya Empire based in Palembang (Sumatra) dominated maritime trade across the Strait of Malacca and Sunda Strait.",
      "where": "Sumatra, Malay Peninsula, Western Java",
      "actors": [
        "Maharajas of Srivijaya"
      ],
      "whyItMattered": "Established the earliest unified control over Southeast Asia's strategic straits, linking Tang/Song Dynasty China with India and the Arab world.",
      "consequences": "Cemented the Strait of Malacca as the premier global maritime chokepoint.",
      "claimType": "HISTORICAL FACT",
      "sources": "Kedukan Bukit Inscription (682 CE) / Arab & Chinese Maritime Chronicles"
    },
    {
      "year": "1293–1527",
      "title": "Majapahit Empire & Nusantara Golden Age",
      "phase": "Archipelagic Zenith",
      "whatHappened": "Founded by Raden Wijaya after repelling a Mongol Yuan armada, Majapahit reached its zenith under Prime Minister Gajah Mada and King Hayam Wuruk.",
      "where": "Trowulan, East Java / Across Indonesian Archipelago",
      "actors": [
        "Gajah Mada (Palapa Oath)",
        "Hayam Wuruk"
      ],
      "whyItMattered": "United the archipelagic realm of Nusantara under shared tribute and maritime trade networks, providing the historical inspiration for modern Indonesian boundaries.",
      "consequences": "Created foundational legal, cultural, and political concepts embodied in the national motto 'Bhinneka Tunggal Ika' (Unity in Diversity).",
      "claimType": "HISTORICAL FACT",
      "sources": "Nagarakretagama Manuscript (1365) / National Museum of Indonesia"
    },
    {
      "year": "1602–1942",
      "title": "Dutch VOC & Colonial Spice Monopoly",
      "phase": "Colonial Mercantile Rule",
      "whatHappened": "The Dutch East India Company (VOC) conquered the Maluku spice islands (nutmeg and cloves), established Batavia (Jakarta) in 1619, and consolidated the Dutch East Indies.",
      "where": "Batavia (Jakarta), Maluku, Java",
      "actors": [
        "Jan Pieterszoon Coen",
        "Dutch Colonial Governors"
      ],
      "whyItMattered": "Enforced monopolistic colonial exploitation (Cultuurstelsel), binding diverse ethnic sultanates under a single centralized legal administration.",
      "consequences": "Established modern Indonesian territorial borders.",
      "claimType": "HISTORICAL FACT",
      "sources": "VOC Batavia Dagregisters / National Archives of Indonesia (ANRI)"
    },
    {
      "year": "1945",
      "title": "Proclamation of Independence & Pancasila",
      "phase": "Sovereign Statehood",
      "whatHappened": "Following Japanese surrender, Sukarno and Mohammad Hatta read the Proclamation of Independence in Jakarta on August 17, 1945, and codified the state philosophy of Pancasila.",
      "where": "Pegangsaan Timur 56, Jakarta",
      "actors": [
        "Sukarno",
        "Mohammad Hatta",
        "Indonesian Republican Youth (Pemuda)"
      ],
      "whyItMattered": "Launched a four-year diplomatic and armed revolution that forced Dutch recognition of Indonesian sovereignty in 1949.",
      "consequences": "Birth of the modern secular Republic of Indonesia.",
      "claimType": "HISTORICAL FACT",
      "sources": "Proclamation Document (National Archives) / Constitution of 1945 (UUD 1945)"
    },
    {
      "year": "1955",
      "title": "Bandung Asian-African Conference",
      "phase": "Global Non-Aligned Leadership",
      "whatHappened": "President Sukarno convened leaders of 29 newly independent Asian and African nations in Bandung, opposing colonialism and Cold War military blocs.",
      "where": "Gedung Merdeka, Bandung, West Java",
      "actors": [
        "Sukarno",
        "Jawaharlal Nehru",
        "Zhou Enlai",
        "Gamal Abdel Nasser"
      ],
      "whyItMattered": "Laid down the 'Ten Principles of Bandung' and founded the Non-Aligned Movement (NAM), elevating Indonesia to the leadership of the Global South.",
      "consequences": "Established Indonesia's enduring 'free and active' (bebas-aktif) foreign policy doctrine.",
      "claimType": "HISTORICAL FACT",
      "sources": "Bandung Conference Final Communiqué / Museum of the Asian-African Conference"
    }
  ],
  "politicalSystem": {
    "type": "Presidential Constitutional Republic",
    "constitution": "Constitution of the Republic of Indonesia (1945 / UUD 1945, amended 1999–2002)",
    "branches": [
      {
        "name": "Executive",
        "role": "President Prabowo Subianto serving as Head of State, Head of Government, and Commander-in-Chief alongside Vice President Gibran Rakabuming Raka."
      },
      {
        "name": "Legislature",
        "role": "Bicameral People's Consultative Assembly (MPR) comprising the 580-member House of Representatives (DPR) and the 152-member Regional Representative Council (DPD)."
      },
      {
        "name": "Judiciary",
        "role": "Supreme Court (Mahkamah Agung) and Constitutional Court (Mahkamah Konstitusi) exercising constitutional review."
      }
    ],
    "currentLeadership": {
      "headOfState": "President Prabowo Subianto (Inaugurated October 20, 2024)",
      "headOfGovernment": "President Prabowo Subianto",
      "vicePresident": "Gibran Rakabuming Raka",
      "foreignMinister": "Sugiono (Minister of Foreign Affairs)",
      "defenseMinister": "Sjafrie Sjamsoeddin (Minister of Defense)"
    },
    "rulingParty": "Gerindra Party leading the broad 'Red and White Cabinet' multi-party coalition",
    "oppositionParties": [
      {
        "name": "Indonesian Democratic Party of Struggle (PDI-P)",
        "seats": "110 seats",
        "stance": "Secular nationalist party led by Megawati Sukarnoputri"
      }
    ],
    "parliamentDetails": "DPR meets at the Senayan Complex in Jakarta; constitutional amendments and presidential inaugurations conducted by joint MPR plenary.",
    "recentElections": "February 14, 2024 general election; peaceful democratic transition of power to Prabowo Subianto.",
    "domesticDevelopments": [
      {
        "title": "Nusantara New Capital City (IKN)",
        "claimType": "MEGAPROJECT",
        "desc": "Constructing a $32 Billion smart, forest capital in East Kalimantan to relieve sinking, congested Jakarta."
      },
      {
        "title": "Mineral Downstreaming (Hilirisasi)",
        "claimType": "INDUSTRIAL POLICY",
        "desc": "Mandatory domestic smelting of nickel, bauxite, and copper, boosting processed nickel export value from $3B to $35B+."
      }
    ],
    "currentIssues": [
      {
        "title": "South China Sea Natuna Islands EEZ Encroachments",
        "claimType": "SECURITY",
        "desc": "Chinese coast guard and fishing vessel incursions into Indonesia's North Natuna Sea exclusive economic zone."
      },
      {
        "title": "Free Nutritious Meal Program",
        "claimType": "DOMESTIC WELFARE",
        "desc": "Flagship presidential initiative targeting universal daily school lunches to eliminate child stunting."
      }
    ],
    "policyDebates": [
      {
        "topic": "OECD Accession vs BRICS Membership",
        "desc": "Balancing prospective OECD developed-nation accession with formal application to join the BRICS bloc."
      }
    ],
    "institutions": [
      {
        "name": "Corruption Eradication Commission (KPK)",
        "role": "Independent statutory investigative agency prosecuting high-level graft."
      },
      {
        "name": "Bank Indonesia (BI)",
        "role": "Autonomous central bank managing rupiah stability and domestic payment digitization (QRIS)."
      }
    ],
    "federalDynamics": "Unitary state decentralized across 38 provinces with special autonomy statuses for Aceh (sharia law provisions) and Papua regions.",
    "foreignPolicyDoctrine": "Bebas dan Aktif (Free and Active): independent foreign policy refusing alignment with major power blocs while actively promoting regional peace, ASEAN centrality, and UNCLOS rules."
  },
  "geographyBorders": {
    "landArea": "1,904,569 km² (World's largest archipelagic state)",
    "location": "Southeast Asia and Oceania, between the Indian and Pacific Oceans.",
    "continent": "Asia / Oceania",
    "latRange": "6°N to 11°S",
    "lngRange": "95°E to 141°E",
    "coastline": "54,716 km along Indian and Pacific Oceans (2nd longest coastline in the world)",
    "majorOceans": [
      "Indian Ocean",
      "Pacific Ocean"
    ],
    "majorIslands": [
      "Java (World's most populous island - 150M+)",
      "Sumatra",
      "Kalimantan (Borneo)",
      "Sulawesi",
      "Papua (Western New Guinea)",
      "Bali"
    ],
    "strategicGeography": "Controls the world's most critical maritime chokepoints: Strait of Malacca, Sunda Strait, Lombok Strait, and Makassar Strait.",
    "topography": "Extensive volcanic mountain backbones (Pacific Ring of Fire, 130+ active volcanoes); dense tropical rainforests; extensive coastal mangrove swamps.",
    "rivers": [
      "Kapuas River (Borneo - 1,143 km)",
      "Mahakam River",
      "Barito River",
      "Musi River (Sumatra)"
    ],
    "mountains": [
      "Puncak Jaya (Carstensz Pyramid, 4,884 m - highest peak in Oceania with equatorial glaciers)",
      "Mount Rinjani",
      "Mount Semeru"
    ],
    "seas": [
      "Java Sea",
      "Banda Sea",
      "Flores Sea",
      "Celebes Sea",
      "Arafura Sea",
      "Timor Sea"
    ],
    "climates": [
      "Tropical equatorial climate characterized by heavy monsoon rains and high year-round humidity"
    ],
    "landBorders": [
      {
        "country": "Malaysia",
        "id": "MYS",
        "borderLength": "2,019 km",
        "region": "Kalimantan (Borneo)",
        "status": "Demarcated",
        "strategicContext": "Cross-border transit between West/East Kalimantan and Sarawak/Sabah."
      },
      {
        "country": "Papua New Guinea",
        "id": "PNG",
        "borderLength": "820 km",
        "region": "Papua",
        "status": "Demarcated (141st meridian)",
        "strategicContext": "Dense jungle border monitoring OPM separatist movements."
      },
      {
        "country": "Timor-Leste",
        "id": "TLS",
        "borderLength": "228 km",
        "region": "Timor Island",
        "status": "Demarcated",
        "strategicContext": "Land border with Oecusse enclave and main territory."
      }
    ],
    "maritimeBorders": [
      {
        "country": "Singapore",
        "id": "SGP",
        "boundary": "Strait of Singapore Delimitation Treaties (1973, 2009, 2014)"
      },
      {
        "country": "Australia",
        "id": "AUS",
        "boundary": "Timor and Arafura Seas Maritime Delimitation Agreement"
      },
      {
        "country": "India",
        "id": "IND",
        "boundary": "Great Channel Maritime Boundary (Indira Point to Rondo Island, Aceh)"
      },
      {
        "country": "Vietnam",
        "id": "VNM",
        "boundary": "Exclusive Economic Zone Delimitation Agreement 2022"
      },
      {
        "country": "Philippines",
        "id": "PHL",
        "boundary": "Celebes Sea EEZ Delimitation Treaty 2014"
      }
    ]
  },
  "economy": {
    "gdpNominal": "$1.37 Trillion (Rank: 16th globally - Largest in Southeast Asia)",
    "gdpPPP": "$4.33 Trillion (Rank: 7th globally)",
    "gdpPerCapita": "$4,900 (Upper-middle income)",
    "gdpGrowth": "+5.1% (2024 IMF estimate)",
    "currency": "Indonesian Rupiah (IDR / Rp)",
    "majorIndustries": [
      "Mineral Processing & Smelting (World's #1 Nickel Miner; Bauxite, Copper, Tin, Gold)",
      "Palm Oil Agribusiness (World's #1 Crude Palm Oil producer - 60% global supply)",
      "Automotive & Electric Vehicle Battery Manufacturing (Hyundai, Wuling, BYD)",
      "Coal Extraction & Thermal Energy Export (World's #1 thermal coal exporter)",
      "Digital Economy & Consumer Tech (GoTo, Tokopedia, Bukalapak - $82B GMV)"
    ],
    "majorExports": [
      "Mineral Fuels & Thermal Coal ($46B/yr - #1 Global Exporter)",
      "Palm Oil & Derivatives ($30B/yr - #1 Global Exporter)",
      "Manufactured Steel & Ferronickel ($28B/yr)",
      "Electrical Machinery & Electronic Equipment",
      "Refined Copper Cathodes & Tin Ingots (Grasberg Mine / PT Timah)"
    ],
    "majorImports": [
      "Refined Petroleum Products & Crude Hydrocarbons",
      "Capital Machinery & Industrial Smelting Furnaces",
      "Plastics, Resins & Organic Chemicals",
      "Wheat, Soybeans & Agricultural Grains"
    ],
    "energyPosition": "World's largest exporter of thermal coal while holding the world's second-largest geothermal energy potential (28 GW); constructing major floating solar installations (Cirata 145 MW).",
    "naturalResources": "Unrivaled mineral reserves: world's largest nickel reserves (21M metric tons), world's second-largest tin reserves, copper/gold (Grasberg - world's 2nd largest gold mine), and coal.",
    "tradeOrgs": [
      "ASEAN (Association of Southeast Asian Nations - Founding Member & HQ)",
      "RCEP (Regional Comprehensive Economic Partnership)",
      "G20 Member State",
      "Asia-Pacific Economic Cooperation (APEC)",
      "World Trade Organization (WTO)"
    ],
    "economicStrategicImportance": "Global supply chain anchor for electric vehicle batteries and stainless steel; irreplaceable controller of the maritime straits facilitating 30% of global seaborne commerce.",
    "indiaEconomicConnection": "Comprehensive Strategic Partnership; bilateral trade surpassed $38 Billion; India is the top buyer of Indonesian coal and crude palm oil; developing joint deep-sea port cooperation at Sabang in Aceh near Andaman & Nicobar.",
    "majorTradingPartners": [
      {
        "country": "China",
        "share": "25.6% of total trade ($130B+)"
      },
      {
        "country": "United States",
        "share": "9.2% of exports"
      },
      {
        "country": "Japan",
        "share": "8.4% of trade"
      },
      {
        "country": "India",
        "share": "7.5% of total exports ($25B+ Indian imports of coal/palm oil)"
      },
      {
        "country": "Singapore",
        "share": "5.8% of trade"
      }
    ]
  },
  "military": {
    "expenditure": "$8.9 Billion (0.7% of GDP - Ministry of Defense)",
    "personnel": {
      "active": "400,000 Active Duty Armed Forces (TNI: AD, AL, AU)",
      "reserves": "400,000 Reserve Components (Komcad)"
    },
    "doctrine": "Sistem Pertahanan Keamanan Rakyat Semesta (Sishannegata - Total People's Defense System) combining professional military forces with territorial guerrilla mobilization, focused on archipelagic sea lane defense.",
    "nuclearStockpile": "Non-nuclear weapons state strictly party to the NPT and Bangkok Treaty (Southeast Asia Nuclear Weapon-Free Zone).",
    "defenseIndustry": "State-owned defense industrial holding Defend ID led by PT PAL (naval shipbuilding), PT Pindad (armored combat vehicles, small arms), PT Dirgantara Indonesia (aerospace), and PT Dahana (explosives).",
    "majorDomesticSystems": [
      "PT Pindad Harimau Medium Battle Tank (Co-developed with FNSS Turkey)",
      "PT Pindad Anoa 6x6 & Komodo 4x4 Armored Personnel Carriers",
      "PT PAL Martadinata-Class (SIGMA 10514) Guided Missile Frigates",
      "PT PAL KCR-60M Fast Missile Attack Craft",
      "PT Dirgantara Indonesia CN-235 / NC-212 Maritime Patrol Aircraft"
    ],
    "majorImports": [
      "Dassault Rafale 4.5-Gen Multi-Role Fighters (France - 42 aircraft ordered)",
      "Fregata European Multi-Mission (FREMM) Frigates (Italy - contract signed)",
      "Scorpène Evolved Attack Submarines with Full Lithium-Ion Batteries (France - 2 on order at PT PAL)",
      "F-15EX Eagle II Heavy Fighters (USA - MOU signed for 24 aircraft)",
      "Su-27SKM / Su-30MK2 Heavy Air Superiority Fighters (Russia)"
    ],
    "majorExports": [
      "Strategic Sealift Vessels (SSV / LPD) exported to the Philippine Navy by PT PAL",
      "CN-235 maritime surveillance aircraft to Malaysia, South Korea, Thailand, Senegal",
      "Anoa 6x6 armored vehicles for UN peacekeeping missions"
    ],
    "militaryAlliances": [
      "ASEAN Regional Forum (ARF) & ADMM-Plus",
      "Malacca Strait Patrols (MSP with Malaysia, Singapore, Thailand)",
      "Comprehensive Strategic Partnership with the United States & Joint Super Garuda Shield Exercises",
      "Bilateral defense cooperation agreements with India, France, and Australia"
    ],
    "categories": [
      {
        "name": "INDONESIAN NAVY (TNI ANGKATAN LAUT)",
        "desc": "Archipelagic naval command divided across three Fleet Commands (Koarmada I, II, III).",
        "systems": [
          {
            "name": "Martadinata-Class (SIGMA 10514) Frigates",
            "type": "Guided Missile Stealth Frigate",
            "origin": "Netherlands (Damen) / PT PAL",
            "status": "CONFIRMED",
            "quantity": "2 ships (KRI Raden Eddy Martadinata, KRI I Gusti Ngurah Rai)",
            "role": "Air defense, VL Mica missiles, anti-submarine warfare."
          },
          {
            "name": "Nagapasa-Class (Type 209/1400) Submarines",
            "type": "Diesel-Electric Attack Submarine",
            "origin": "South Korea (DSME) / PT PAL",
            "status": "CONFIRMED",
            "quantity": "3 submarines (Nagapasa, Ardadedali, Alugoro)",
            "role": "Archipelagic sea lane surveillance, torpedo attack."
          },
          {
            "name": "Makassar-Class Amphibious Landing Platform Docks (LPD)",
            "type": "Amphibious Assault Ship",
            "origin": "South Korea / PT PAL",
            "status": "CONFIRMED",
            "quantity": "5 ships in service",
            "role": "Amphibious marine insertion and disaster relief across archipelagos."
          },
          {
            "name": "Bung Tomo-Class Corvettes",
            "type": "Multi-Role Corvette",
            "origin": "United Kingdom (BAE Systems)",
            "status": "CONFIRMED",
            "quantity": "3 corvettes",
            "role": "Patrol and maritime boundary defense in Natuna Sea."
          }
        ]
      },
      {
        "name": "INDONESIAN AIR FORCE (TNI ANGKATAN UDARA)",
        "desc": "Multi-spectrum air defense protecting 5,000 km of equatorial archipelagic airspace.",
        "systems": [
          {
            "name": "Dassault Rafale F4",
            "type": "4.5-Gen Omnirole Fighter",
            "origin": "France",
            "status": "CONFIRMED",
            "quantity": "42 ordered (first delivery due 2026)",
            "role": "Omnirole air superiority, deep precision strike."
          },
          {
            "name": "Sukhoi Su-27SKM / Su-30MK2",
            "type": "Heavy Air Superiority Fighter",
            "origin": "Russia",
            "status": "CONFIRMED",
            "quantity": "16 aircraft",
            "role": "Long-range maritime intercept and air defense."
          },
          {
            "name": "Lockheed Martin F-16A/B/C/D Fighting Falcon",
            "type": "Multi-Role Fighter",
            "origin": "United States (eMLU upgrade)",
            "status": "CONFIRMED",
            "quantity": "33 aircraft operational",
            "role": "Air superiority and tactical strike."
          },
          {
            "name": "Boeing 737-2X9 Surveiller & CN-235 MPA",
            "type": "Maritime Patrol & SLAMMR Radar",
            "origin": "USA / PTDI",
            "status": "CONFIRMED",
            "quantity": "6 aircraft",
            "role": "Real-time maritime surveillance over Malacca and South China Sea."
          }
        ]
      },
      {
        "name": "INDONESIAN ARMY (TNI ANGKATAN DARAT)",
        "desc": "Strategic reserve command (Kostrad), special forces (Kopassus), and territorial military commands (Kodam).",
        "systems": [
          {
            "name": "Leopard 2A4 / Leopard 2RI Main Battle Tank",
            "type": "Main Battle Tank",
            "origin": "Germany (Rheinmetall)",
            "status": "CONFIRMED",
            "quantity": "103 MBTs in service",
            "role": "Heavy armored maneuver and coastal defense."
          },
          {
            "name": "Harimau (Kaplan MT) Medium Tank",
            "type": "Medium Battle Tank",
            "origin": "Indonesia (PT Pindad) / Turkey",
            "status": "CONFIRMED",
            "quantity": "18 delivered / 100+ on order",
            "role": "Designed specifically for archipelagic jungle and soft terrain."
          },
          {
            "name": "M109A4 155mm Tracked Self-Propelled Howitzer",
            "type": "Artillery System",
            "origin": "USA / Belgium",
            "status": "CONFIRMED",
            "quantity": "36 systems",
            "role": "Long-range tactical fire support."
          }
        ]
      }
    ]
  },
  "relations": {
    "main": [
      {
        "id": "IDN_CHN",
        "country": "China",
        "flag": "🇨🇳",
        "status": "Top Economic Partner with Maritime EEZ Friction",
        "color": "#eab308",
        "note": "Financed Jakarta-Bandung High-Speed Rail (Whoosh); nickel processing hub; friction in North Natuna Sea."
      },
      {
        "id": "IDN_USA",
        "country": "United States",
        "flag": "🇺🇸",
        "status": "Comprehensive Strategic Partner",
        "color": "#3b82f6",
        "note": "Hosts massive Super Garuda Shield exercises; major military procurement (F-15EX MOU)."
      },
      {
        "id": "IDN_IND",
        "country": "India",
        "flag": "🇮🇳",
        "status": "Maritime Comprehensive Strategic Partner",
        "color": "#10b981",
        "note": "Historic cultural affinity, Sabang Port deep-sea cooperation, $38B trade, joint naval patrols."
      },
      {
        "id": "IDN_MYS",
        "country": "Malaysia",
        "flag": "🇲🇾",
        "status": "Brotherly ASEAN Neighbor (Serumpun)",
        "color": "#10b981",
        "note": "Shared Borneo land border, joint Malacca Strait patrols, co-producers of 85% of global palm oil."
      },
      {
        "id": "IDN_AUS",
        "country": "Australia",
        "flag": "🇦🇺",
        "status": "Comprehensive Strategic Partner & Southern Neighbor",
        "color": "#3b82f6",
        "note": "Signed landmark 2024 bilateral defense cooperation treaty allowing joint troops deployments."
      }
    ],
    "searchable": []
  },
  "strategicLocations": [
    {
      "name": "Strait of Malacca Fairways (Batam / Karimun)",
      "type": "World's Busiest Commercial Chokepoint",
      "coords": "1.25° N, 103.55° E",
      "significance": "800-km strait carrying 25% of global seaborne oil and 60% of Chinese energy imports; co-secured by Indonesia."
    },
    {
      "name": "Sunda Strait (Java-Sumatra Passage)",
      "type": "Strategic Deepwater Interoceanic Chokepoint",
      "coords": "5.95° S, 105.80° E",
      "significance": "Alternative deepwater route between the Indian Ocean and Java Sea; designated ALKI I transit corridor."
    },
    {
      "name": "Lombok Strait (Bali-Lombok Passage)",
      "type": "Deep-Draft Maritime Chokepoint",
      "coords": "8.45° S, 115.72° E",
      "significance": "Deepest Indonesian passage (over 1,000m depth), accommodating giant Capesize bulk carriers and nuclear submarines."
    },
    {
      "name": "Natuna Ranai Naval & Air Base",
      "type": "South China Sea Frontier Bastion",
      "coords": "3.90° N, 108.38° E",
      "significance": "Forward operational base protecting Indonesia's 200-nm EEZ and the East Natuna gas field against foreign incursions."
    }
  ],
  "currentTensions": [
    {
      "title": "North Natuna Sea Chinese Coast Guard Incursions",
      "severity": "Maritime Frontier Watch",
      "color": "#f59e0b",
      "desc": "Indonesian Maritime Security Agency (Bakamla) regularly expelling Chinese Coast Guard ships claiming overlapping 'Nine-Dash Line' rights."
    }
  ],
  "keyEvents": [
    {
      "title": "1945 Proclamation of Independence",
      "category": "Nation-State Founding",
      "date": "August 17, 1945"
    },
    {
      "title": "1955 Historic Asian-African Bandung Conference",
      "category": "Global Leadership",
      "date": "April 18, 1955"
    },
    {
      "title": "1982 UNCLOS Adoption (Archipelagic State Principle)",
      "category": "Maritime Sovereignty",
      "date": "December 10, 1982"
    }
  ],
  "indiaImpact": {
    "headline": "Indonesia–India Comprehensive Strategic Partnership: Indo-Pacific Maritime Neighbors at the Great Channel",
    "points": [
      {
        "title": "Direct Maritime Neighborhood (Great Channel)",
        "desc": "India's southernmost territory (Indira Point on Great Nicobar) lies only 90 nautical miles from Indonesia's Rondo Island in Aceh, anchoring the western gateway to the Strait of Malacca."
      },
      {
        "title": "Strategic Cooperation at Sabang Port (Aceh)",
        "desc": "India and Indonesia established a joint task force to develop connectivity and commercial port infrastructure at Sabang Port in Sumatra, directly adjacent to the Andaman and Nicobar Islands."
      },
      {
        "title": "Massive Bilateral Trade ($38B+)",
        "desc": "India is the largest importer of Indonesian crude palm oil and thermal coal, while exporting specialized engineering goods, refined petroleum, pharmaceuticals, and automotive systems."
      },
      {
        "title": "Coordinated Maritime Patrols (IND-INDO CORPAT)",
        "desc": "The Indian Navy and Indonesian Navy have conducted over 40 editions of Coordinated Patrols (CORPAT) across the International Maritime Boundary Line."
      }
    ]
  }
},

  "CAN": {
  "id": "CAN",
  "name": "Canada",
  "officialName": "Canada",
  "commonName": "Canada",
  "capital": "Ottawa",
  "capitalCoords": {
    "lat": 45.4215,
    "lng": -75.6972
  },
  "capitalAdmin": {
    "role": "Federal Capital & Seat of Government of Canada",
    "political": "Hosts Parliament Hill (House of Commons and Senate), the Prime Minister's Office, Rideau Hall (Governor General), and the Supreme Court of Canada.",
    "geographic": "Situated in Ontario on the south bank of the Ottawa River bordering Quebec.",
    "strategic": "Apex national security node: National Defence Headquarters (Carling Campus), Privy Council Office (PCO), and Canadian Security Intelligence Service (CSIS)."
  },
  "region": "Americas",
  "subregion": "Northern America",
  "flag": "🇨🇦",
  "iso2": "ca",
  "isoCode": "CAN / 124",
  "lat": 56.1304,
  "lng": -106.3468,
  "area": "9,984,670 km² (Rank: 2nd globally - Largest in the Western Hemisphere)",
  "population": "40.5 Million (2024 Statistics Canada estimate)",
  "politicalSystemType": "Federal Parliamentary Constitutional Monarchy",
  "currency": "Canadian Dollar (CAD / C$)",
  "languages": "English (Official - 75%) and French (Official - 22%, majority in Quebec)",
  "timeZones": "UTC-3.5 to UTC-8 (6 time zones from Newfoundland to Pacific)",
  "foundingInfo": "Confederation established July 1, 1867 (British North America Act); Statute of Westminster 1931; Patriation of Constitution Act 1982.",
  "tagline": "Arctic Sovereign, Energy & Critical Minerals Titan & G7 Democracy",
  "overview": {
    "beginner": "Canada is the second-largest country in the world by land area, spanning from the Atlantic to the Pacific and northward into the Arctic Ocean. A prosperous, multicultural democracy of 40 million people, Canada possesses extraordinary natural wealth: the world's fourth-largest oil reserves, vast fresh water, potash, uranium, and timber. It shares the longest undefended international land border in the world (8,891 km) with the United States, its primary economic and defense ally.",
    "advanced": "Canada exercises sovereign stewardship over the longest coastline on Earth (243,042 km) fronting three oceans, with profound geopolitical stakes in the melting Arctic Northwest Passage. As a founding member of NATO, the G7, the Five Eyes intelligence alliance, and NORAD (the world's only binational integrated aerospace defense command), Canada is a cornerstone of Western collective security. Economically, Canada is deeply integrated into North American supply chains via the USMCA trade pact, with bilateral US trade exceeding $2.5 Billion daily."
  },
  "history": [
    {
      "year": "1608",
      "title": "Founding of New France (Quebec City)",
      "phase": "French Colonial Era",
      "whatHappened": "French explorer Samuel de Champlain founded Quebec City on the St. Lawrence River, establishing the colony of New France.",
      "where": "Quebec City, St. Lawrence River",
      "actors": [
        "Samuel de Champlain",
        "First Nations Wendat & Innu"
      ],
      "whyItMattered": "Established permanent Francophone civilization, the transatlantic fur trade, and Roman Catholic institutional roots in North America.",
      "consequences": "Created the French-Canadian cultural nation that remains a constitutional pillar of modern Canada.",
      "claimType": "HISTORICAL FACT",
      "sources": "Jesuit Relations / National Archives of Quebec (BAnQ)"
    },
    {
      "year": "1759–1763",
      "title": "Battle of the Plains of Abraham & Treaty of Paris",
      "phase": "British Conquest",
      "whatHappened": "British General James Wolfe defeated French General Louis-Joseph de Montcalm outside Quebec City, leading France to cede Canada to Great Britain.",
      "where": "Plains of Abraham, Quebec",
      "actors": [
        "General James Wolfe",
        "Marquis de Montcalm"
      ],
      "whyItMattered": "Ended French imperial rule in North America; the 1774 Quebec Act guaranteed French civil law and Catholic religious rights under British Crown rule.",
      "consequences": "Preserved dual English-French legal and cultural heritage.",
      "claimType": "HISTORICAL FACT",
      "sources": "British National Archives / Treaty of Paris 1763 (Article IV)"
    },
    {
      "year": "1867",
      "title": "Confederation of Canada (British North America Act)",
      "phase": "Federal Statehood",
      "whatHappened": "The British Parliament passed the British North America Act, uniting the Province of Canada (Ontario and Quebec), New Brunswick, and Nova Scotia into the Dominion of Canada.",
      "where": "Ottawa / Charlottetown / London",
      "actors": [
        "Sir John A. Macdonald",
        "Sir George-Étienne Cartier",
        "Fathers of Confederation"
      ],
      "whyItMattered": "Created the world's first modern federal parliamentary dominion combining Westminster democracy with federal division of powers.",
      "consequences": "Constructed the transcontinental Canadian Pacific Railway (CPR) linking Atlantic to Pacific.",
      "claimType": "HISTORICAL FACT",
      "sources": "Constitution Act 1867 / Library and Archives Canada"
    },
    {
      "year": "1917",
      "title": "Battle of Vimy Ridge & National Identity",
      "phase": "World War I Crucible",
      "whatHappened": "All four divisions of the Canadian Corps fought together for the first time, capturing the heavily fortified Vimy Ridge in northern France from the German Army.",
      "where": "Vimy, France",
      "actors": [
        "General Sir Arthur Currie",
        "Canadian Corps"
      ],
      "whyItMattered": "Widely commemorated as the 'birth of a nation,' establishing Canada's independent military reputation and diplomatic standing.",
      "consequences": "Led to Canada signing the 1919 Treaty of Versailles as an independent sovereign nation.",
      "claimType": "HISTORICAL FACT",
      "sources": "Canadian War Museum Archives / Commonwealth War Graves Commission"
    },
    {
      "year": "1982",
      "title": "Patriation of the Constitution & Charter of Rights",
      "phase": "Constitutional Independence",
      "whatHappened": "Prime Minister Pierre Trudeau patriated the Canadian Constitution from the UK, signed by Queen Elizabeth II, enshrining the Canadian Charter of Rights and Freedoms.",
      "where": "Parliament Hill, Ottawa",
      "actors": [
        "Pierre Elliott Trudeau",
        "Queen Elizabeth II"
      ],
      "whyItMattered": "Severed the last legal ties requiring British parliamentary approval for constitutional amendments, establishing fundamental individual and minority rights.",
      "consequences": "Empowered the Supreme Court of Canada as an assertive constitutional review body.",
      "claimType": "HISTORICAL FACT",
      "sources": "Canada Act 1982 / Supreme Court of Canada Law Reports"
    }
  ],
  "politicalSystem": {
    "type": "Federal Parliamentary Constitutional Monarchy",
    "constitution": "Constitution Acts 1867 to 1982 (incorporating Charter of Rights and Freedoms)",
    "branches": [
      {
        "name": "Executive",
        "role": "Head of State (King Charles III represented by Governor General Mary Simon); Prime Minister Justin Trudeau and Federal Cabinet exercising executive power."
      },
      {
        "name": "Legislature",
        "role": "Bicameral Parliament: 338-seat House of Representatives (House of Commons) and 105-seat appointed Senate."
      },
      {
        "name": "Judiciary",
        "role": "Supreme Court of Canada in Ottawa comprising nine justices exercising supreme appellate and constitutional review."
      }
    ],
    "currentLeadership": {
      "headOfState": "King Charles III (Governor General: Mary Simon)",
      "headOfGovernment": "Prime Minister Justin Trudeau (Liberal Party of Canada)",
      "foreignMinister": "Mélanie Joly (Minister of Foreign Affairs)",
      "defenseMinister": "Bill Blair (Minister of National Defence)"
    },
    "rulingParty": "Liberal Party of Canada - Minority governing administration supported by supply-and-confidence mechanisms",
    "oppositionParties": [
      {
        "name": "Conservative Party of Canada",
        "seats": "119 seats",
        "stance": "Official Opposition led by Pierre Poilievre"
      },
      {
        "name": "Bloc Québécois",
        "seats": "32 seats",
        "stance": "Quebec sovereignty and regional interest advocate"
      },
      {
        "name": "New Democratic Party (NDP)",
        "seats": "25 seats",
        "stance": "Social democratic party led by Jagmeet Singh"
      }
    ],
    "parliamentDetails": "Westminster-style Parliament sitting at Parliament Hill in Ottawa, requiring high party discipline and executive accountability during daily Question Period.",
    "recentElections": "Federal general election September 2021; next federal election legally mandated by October 2025.",
    "domesticDevelopments": [
      {
        "title": "Trans Mountain Pipeline Expansion (TMX)",
        "claimType": "ENERGY INFRASTRUCTURE",
        "desc": "Completed $34 Billion pipeline expansion tripling crude export capacity from Alberta to Pacific tidewater (Burnaby, BC) to 890,000 bpd."
      },
      {
        "title": "Critical Minerals & Battery Ecosystem Strategy",
        "claimType": "INDUSTRIAL STRATEGY",
        "desc": "Federal-provincial subsidization of EV battery gigafactories (Volkswagen St. Thomas, Stellantis Windsor)."
      }
    ],
    "currentIssues": [
      {
        "title": "Housing Cost Crisis & Immigration Targets",
        "claimType": "DOMESTIC CHALLENGE",
        "desc": "Skyrocketing rental and home prices prompting federal cuts to international student and temporary foreign worker caps."
      },
      {
        "title": "Foreign Interference & National Inquiries",
        "claimType": "NATIONAL SECURITY",
        "desc": "Public inquiry into foreign interference in Canadian democratic processes and electoral ridings."
      }
    ],
    "policyDebates": [
      {
        "topic": "Federal Carbon Pricing (Consumer Carbon Tax)",
        "desc": "Intense political debate between the governing Liberals defending carbon dividend pricing and the Conservatives pledging to 'Axe the Tax'."
      }
    ],
    "institutions": [
      {
        "name": "Bank of Canada",
        "role": "Autonomous central bank managing monetary policy and 2% inflation targets."
      },
      {
        "name": "Communications Security Establishment (CSE)",
        "role": "National cryptologic and signals intelligence agency responsible for cyber defense and foreign intelligence."
      }
    ],
    "federalDynamics": "Decentralized federation of 10 provinces and 3 northern territories with immense provincial autonomy over healthcare, natural resource extraction, education, and civil law (Quebec Civil Code).",
    "foreignPolicyDoctrine": "Liberal multilateralism, NATO collective defense, NORAD joint continental defense, Arctic sovereignty, and Indo-Pacific diversification."
  },
  "geographyBorders": {
    "landArea": "9,984,670 km² (Second-largest country on Earth; 9% of world's land area)",
    "location": "Northern North America, bordering the Atlantic, Pacific, and Arctic Oceans.",
    "continent": "Americas",
    "latRange": "41°N to 83°N",
    "lngRange": "52°W to 141°W",
    "coastline": "243,042 km (Longest coastline of any country in the world)",
    "majorOceans": [
      "Atlantic Ocean",
      "Pacific Ocean",
      "Arctic Ocean"
    ],
    "majorIslands": [
      "Baffin Island (5th largest in world)",
      "Vancouver Island",
      "Victoria Island",
      "Ellesmere Island",
      "Newfoundland"
    ],
    "strategicGeography": "Controls the Arctic Northwest Passage and North American aerospace approaches via the Arctic polar route.",
    "topography": "Vast Canadian Shield of ancient precambrian rock and boreal forest; Great Plains/Prairies in central west; rugged Rocky Mountains in the west; St. Lawrence lowlands.",
    "rivers": [
      "Mackenzie River (4,241 km - Arctic drainage)",
      "St. Lawrence River (Seaway connecting Great Lakes to Atlantic)",
      "Yukon River",
      "Fraser River"
    ],
    "mountains": [
      "Mount Logan (5,959 m - Saint Elias Mountains, Yukon)",
      "Canadian Rockies",
      "Coast Mountains"
    ],
    "seas": [
      "Beaufort Sea",
      "Hudson Bay (Inland sea)",
      "Baffin Bay",
      "Labrador Sea"
    ],
    "climates": [
      "Subarctic and arctic tundra in the north",
      "Continental with freezing winters in interior/prairies",
      "Maritime temperate in British Columbia"
    ],
    "landBorders": [
      {
        "country": "United States (Southern Border)",
        "id": "USA",
        "borderLength": "6,416 km (Mainland)",
        "region": "South",
        "status": "Demarcated",
        "strategicContext": "Longest undefended international border; highest-volume bilateral trade border globally."
      },
      {
        "country": "United States (Alaska Border)",
        "id": "USA",
        "borderLength": "2,475 km (141st meridian)",
        "region": "Northwest",
        "status": "Demarcated",
        "strategicContext": "Yukon-Alaska frontier and Arctic defense corridors."
      },
      {
        "country": "Greenland (Denmark - Hans Island)",
        "id": "DNK",
        "borderLength": "1.2 km",
        "region": "Arctic Ocean",
        "status": "Demarcated 2022",
        "strategicContext": "Peacefully resolved the 'Whisky War', creating a direct Canadian land border with the Kingdom of Denmark."
      }
    ],
    "maritimeBorders": [
      {
        "country": "France (Saint Pierre and Miquelon)",
        "id": "FRA",
        "boundary": "1992 International Court of Arbitration EEZ maritime corridor off Newfoundland"
      }
    ]
  },
  "economy": {
    "gdpNominal": "$2.14 Trillion (Rank: 10th globally - G7 Member)",
    "gdpPPP": "$2.38 Trillion",
    "gdpPerCapita": "$53,200 (Advanced G7 high-income economy)",
    "gdpGrowth": "+1.3% (2024 IMF estimate)",
    "currency": "Canadian Dollar (CAD / C$)",
    "majorIndustries": [
      "Energy & Oil Extraction (World's 4th largest crude oil producer - Alberta Athabasca Oil Sands)",
      "Mining (World's #1 Potash producer, #2 Uranium producer, Nickel, Gold, Cobalt)",
      "Automotive Assembly & Parts Manufacturing (Ontario Auto Corridor)",
      "Financial Services & Global Pension Funds (CPPIB, CDPQ, OTPP - $2T+ assets)",
      "Forestry, Lumber & Pulp / Commercial Agriculture (Canola, Wheat, Pulses)"
    ],
    "majorExports": [
      "Crude Petroleum Oil & Bitumen ($125B/yr - #4 Global Exporter)",
      "Motor Vehicles & Auto Components ($55B/yr)",
      "Natural Gas & Refined Hydrocarbons ($25B/yr)",
      "Gold, Nickel & Unwrought Metals ($24B/yr)",
      "Potash Agricultural Fertilizer ($12B/yr - Nutrien, #1 globally)",
      "Softwood Lumber & Timber Products ($10B/yr)"
    ],
    "majorImports": [
      "Motor Vehicles & Truck Assemblies",
      "Consumer Electronics, Laptops & Smartphones",
      "Industrial Machinery & Electrical Heavy Equipment",
      "Refined Motor Fuels & Crude Oil for Eastern Refineries"
    ],
    "energyPosition": "World's fourth largest crude oil producer (4.8M bpd) and fifth largest natural gas producer; over 82% of domestic electricity is non-emitting (60% hydro, 15% nuclear via CANDU reactors).",
    "naturalResources": "Vast reserves of crude oil (170B barrels), natural gas, uranium (Athabasca Basin - highest grade in the world), potash, copper, nickel, lithium, zinc, fresh water, and timber.",
    "tradeOrgs": [
      "United States-Mexico-Canada Agreement (USMCA / CUSMA)",
      "G7 (Group of Seven Leading Industrial Democracies)",
      "CPTPP (Comprehensive and Progressive Agreement for Trans-Pacific Partnership)",
      "CETA (Canada-European Union Comprehensive Economic and Trade Agreement)",
      "World Trade Organization (WTO)"
    ],
    "economicStrategicImportance": "Primary supplier of energy, crude oil, and refined fuels to the United States; essential global supplier of agricultural potash fertilizer and clean-tech uranium.",
    "indiaEconomicConnection": "Bilateral merchandise trade exceeds $8 Billion; Canada is India's critical supplier of agricultural pulses (lentils) and potash fertilizer; major source of foreign direct investment into Indian infrastructure ($55B+ via Canadian pension funds); home to 1.8M Canadians of Indian heritage.",
    "majorTradingPartners": [
      {
        "country": "United States",
        "share": "76.8% of total Canadian merchandise exports"
      },
      {
        "country": "China",
        "share": "4.2% of exports"
      },
      {
        "country": "United Kingdom",
        "share": "3.1% of exports"
      },
      {
        "country": "Japan",
        "share": "2.3% of exports"
      },
      {
        "country": "India",
        "share": "1.2% of exports ($8B+ bilateral trade)"
      }
    ]
  },
  "military": {
    "expenditure": "$29.9 Billion (1.37% of GDP - Committed to reaching NATO 2.0% target by 2032)",
    "personnel": {
      "active": "68,000 Regular Force Active Duty (Canadian Armed Forces)",
      "reserves": "34,000 Primary Reserve Personnel"
    },
    "doctrine": "Continental defense under NORAD, collective security under NATO Article 5, Arctic sovereignty enforcement (Operation NANOOK), and Indo-Pacific maritime patrol.",
    "nuclearStockpile": "Non-nuclear weapons state strictly adhering to the NPT; covered under the US nuclear umbrella via NATO and NORAD.",
    "defenseIndustry": "Specialized defense aerospace and armored vehicle manufacturing: General Dynamics Land Systems Canada (LAV III/LAV 6.0), CAE (flight simulators), MDA Space (Canadarm, RADARSAT), and Irving Shipbuilding.",
    "majorDomesticSystems": [
      "LAV 6.0 Light Armoured Vehicles (General Dynamics Land Systems Canada)",
      "Harry DeWolf-Class Arctic and Offshore Patrol Ships (AOPS - Irving Shipbuilding)",
      "RADARSAT Constellation Mission (Space-based synthetic aperture radar surveillance)",
      "CAE Advanced Military Flight and Mission Simulation Systems"
    ],
    "majorImports": [
      "Lockheed Martin F-35A Lightning II 5th-Gen Stealth Fighters (88 ordered, arriving 2026)",
      "Boeing P-8A Poseidon Multi-Mission Maritime Patrol Aircraft (16 ordered to replace CP-140)",
      "Canadian Surface Combatant (CSC / Type 26 Frigate design by BAE Systems / Lockheed)",
      "Leopard 2A4 / 2A6M Main Battle Tanks (Germany)"
    ],
    "majorExports": [
      "LAV armored vehicles (exported to US Army as Stryker, Saudi Arabia, Ukraine)",
      "Commercial and military space sensors, satellite communications, and simulation software"
    ],
    "militaryAlliances": [
      "NORAD (North American Aerospace Defense Command with the United States)",
      "NATO (North Atlantic Treaty Organization - Founding Member)",
      "Five Eyes Intelligence Alliance (Canada, US, UK, Australia, New Zealand)",
      "Indo-Pacific Strategy Deployments (Operation HORIZON / NEON)"
    ],
    "categories": [
      {
        "name": "ROYAL CANADIAN NAVY (RCN)",
        "desc": "Three-ocean naval force operating Atlantic and Pacific Fleet Commands with expanding Arctic presence.",
        "systems": [
          {
            "name": "Halifax-Class Multi-Role Patrol Frigates",
            "type": "Guided Missile Frigate",
            "origin": "Canada (Saint John Shipbuilding)",
            "status": "CONFIRMED",
            "quantity": "12 ships in service",
            "role": "Anti-submarine warfare, Evolved Sea Sparrow anti-air defense."
          },
          {
            "name": "Harry DeWolf-Class Arctic Offshore Patrol Ships (AOPS)",
            "type": "Polar Ice-Capable Patrol Vessel",
            "origin": "Canada (Irving Shipbuilding)",
            "status": "CONFIRMED",
            "quantity": "5 in service (6 planned)",
            "role": "Arctic sovereignty enforcement, northern sea ice surveillance."
          },
          {
            "name": "Victoria-Class Long-Range Patrol Submarines",
            "type": "Diesel-Electric Submarine (SSK)",
            "origin": "United Kingdom (ex-Upholder)",
            "status": "CONFIRMED",
            "quantity": "4 submarines",
            "role": "Covert anti-submarine intelligence and coastal patrol."
          },
          {
            "name": "Canadian Surface Combatant (River-Class Destroyer)",
            "type": "Next-Gen Stealth Destroyer (Type 26)",
            "origin": "Canada / BAE Systems / Lockheed",
            "status": "IN DEVELOPMENT",
            "quantity": "15 planned",
            "role": "Future surface fleet flagship with SPY-7 radar."
          }
        ]
      },
      {
        "name": "ROYAL CANADIAN AIR FORCE (RCAF)",
        "desc": "Aerospace defense under NORAD, maritime surveillance, and strategic airlift.",
        "systems": [
          {
            "name": "McDonnell Douglas CF-188 (CF-18) Hornet",
            "type": "Supersonic Fighter Interceptor",
            "origin": "USA (Modernized with AESA radar)",
            "status": "CONFIRMED",
            "quantity": "76 aircraft in service",
            "role": "NORAD continental air interception and NATO deployments."
          },
          {
            "name": "Lockheed Martin F-35A Lightning II",
            "type": "5th-Gen Stealth Multi-Role Fighter",
            "origin": "United States",
            "status": "CONFIRMED",
            "quantity": "88 on order (replacing CF-18)",
            "role": "Next-generation stealth air defense and strike."
          },
          {
            "name": "CP-140 Aurora (P-3 Orion Derivative)",
            "type": "Long-Range Maritime Surveillance & ASW",
            "origin": "USA / Canada",
            "status": "CONFIRMED",
            "quantity": "14 aircraft (being replaced by P-8A)",
            "role": "Three-ocean maritime reconnaissance and anti-submarine warfare."
          },
          {
            "name": "Boeing CC-177 Globemaster III",
            "type": "Heavy Strategic Transport Aircraft",
            "origin": "United States",
            "status": "CONFIRMED",
            "quantity": "5 aircraft",
            "role": "Global expeditionary airlift and northern Arctic resupply."
          }
        ]
      },
      {
        "name": "CANADIAN ARMY",
        "desc": "Mechanized combined-arms brigade groups and specialized Arctic Canadian Rangers.",
        "systems": [
          {
            "name": "LAV 6.0 Light Armoured Vehicle",
            "type": "8x8 Wheeled Infantry Fighting Vehicle",
            "origin": "Canada (GDLS Canada)",
            "status": "CONFIRMED",
            "quantity": "650+ vehicles in service",
            "role": "Armored infantry maneuver with 25mm Bushmaster autocannon."
          },
          {
            "name": "Leopard 2A4 / 2A6M CAN Main Battle Tank",
            "type": "Main Battle Tank",
            "origin": "Germany (Krauss-Maffei Wegmann)",
            "status": "CONFIRMED",
            "quantity": "80+ MBTs in service",
            "role": "Heavy armored breakthrough and combined-arms firepower."
          },
          {
            "name": "Canadian Rangers (1st to 5th Patrol Groups)",
            "type": "Sovereign Arctic Surveillance Militia",
            "origin": "Canada (Indigenous & Northern Rangers)",
            "status": "CONFIRMED",
            "quantity": "5,000+ volunteer rangers",
            "role": "Remote Arctic presence, guide operations, and polar search and rescue."
          }
        ]
      }
    ]
  },
  "relations": {
    "main": [
      {
        "id": "CAN_USA",
        "country": "United States",
        "flag": "🇺🇸",
        "status": "Indispensable Ally, Defense (NORAD) & Trade Partner",
        "color": "#10b981",
        "note": "Integrated economies via USMCA; shared energy grid; NORAD joint aerospace command."
      },
      {
        "id": "CAN_GBR",
        "country": "United Kingdom",
        "flag": "🇬🇧",
        "status": "Historic Sovereign & Intelligence Ally",
        "color": "#10b981",
        "note": "Common monarch, Commonwealth pillar, Five Eyes intelligence partnership."
      },
      {
        "id": "CAN_FRA",
        "country": "France",
        "flag": "🇫🇷",
        "status": "Bilingual Cultural & NATO Partner",
        "color": "#3b82f6",
        "note": "Shared Francophone heritage; maritime neighbor off Saint Pierre and Miquelon."
      },
      {
        "id": "CAN_IND",
        "country": "India",
        "flag": "🇮🇳",
        "status": "Significant Economic & Diaspora Ties with Severe Diplomatic Friction",
        "color": "#ef4444",
        "note": "Major trade in lentils/potash and 1.8M Indian diaspora; severe diplomatic breakdown over Khalistan allegations and foreign interference claims."
      },
      {
        "id": "CAN_CHN",
        "country": "China",
        "flag": "🇨🇳",
        "status": "Commercial Trade Partner with Acute Geopolitical Friction",
        "color": "#eab308",
        "note": "Trade in commodities alongside public inquiries into foreign election interference."
      }
    ],
    "searchable": []
  },
  "strategicLocations": [
    {
      "name": "Northwest Passage (Arctic Maritime Corridor)",
      "type": "Strategic Arctic Shipping Route",
      "coords": "74.00° N, 95.00° W",
      "significance": "Shortens Atlantic-Pacific transit by 4,000 km compared to Panama Canal; Canada asserts internal sovereign waters, while US/EU claim international strait."
    },
    {
      "name": "CFB Halifax (Nova Scotia)",
      "type": "Atlantic Fleet Headquarters & Megabase",
      "coords": "44.66° N, 63.58° W",
      "significance": "Command center for Maritime Forces Atlantic (MARLANT) and NATO North Atlantic patrols."
    },
    {
      "name": "CFB Esquimalt (Vancouver Island, BC)",
      "type": "Pacific Fleet Headquarters",
      "coords": "48.43° N, 123.43° W",
      "significance": "Command center for Maritime Forces Pacific (MARPAC) securing western approaches."
    },
    {
      "name": "Port of Vancouver (British Columbia)",
      "type": "Largest Maritime Cargo Port in Canada",
      "coords": "49.29° N, 123.10° W",
      "significance": "Handles $300B in trade annually; primary export gateway for Canadian grain, potash, and Trans Mountain oil to Asia."
    }
  ],
  "currentTensions": [
    {
      "title": "Canada–India Diplomatic Standoff",
      "severity": "Acute Diplomatic Breakdown",
      "color": "#ef4444",
      "desc": "Expulsion of senior diplomats and ambassadors following Canadian allegations linking Indian agents to the killing of a Sikh separatist in BC."
    },
    {
      "title": "Arctic Sovereignty & Russian Polar Militarization",
      "severity": "Strategic Aerospace & Maritime Alert",
      "color": "#f59e0b",
      "desc": "Monitoring Russian submarine and bomber activities near Canada's Air Defense Identification Zone (ADIZ) through NORAD."
    }
  ],
  "keyEvents": [
    {
      "title": "1867 Confederation of Canada",
      "category": "Nation-State Founding",
      "date": "July 1, 1867"
    },
    {
      "title": "1917 Battle of Vimy Ridge",
      "category": "National Sovereign Identity",
      "date": "April 9, 1917"
    },
    {
      "title": "1982 Patriation of the Constitution Act",
      "category": "Constitutional Independence",
      "date": "April 17, 1982"
    }
  ],
  "indiaImpact": {
    "headline": "Canada–India Complex Dynamics: Trade Complementarity vs Diplomatic Crisis",
    "points": [
      {
        "title": "Vibrant Indian Diaspora (1.8 Million People)",
        "desc": "Canadians of Indian origin comprise 4.5% of Canada's population, making up influential cultural, academic, and business communities across Greater Toronto, Vancouver, and Calgary."
      },
      {
        "title": "Critical Food & Fertilizer Security (Pulses & Potash)",
        "desc": "Canada remains an indispensable commercial partner for Indian food security, supplying high-protein yellow peas and lentils alongside agricultural potash fertilizer essential for Indian farms."
      },
      {
        "title": "Severe Diplomatic Rupture (Khalistan Issue)",
        "desc": "Bilateral diplomatic relations reached a historic nadir in 2023–2024 following Canadian accusations regarding extraterritorial targeting of Sikh separatist activists, resulting in mutual ambassadorial expulsions and frozen trade negotiations."
      }
    ]
  }
},

  "MEX": {
  "id": "MEX",
  "name": "Mexico",
  "officialName": "United Mexican States",
  "commonName": "Mexico",
  "capital": "Mexico City",
  "capitalCoords": {
    "lat": 19.4326,
    "lng": -99.1332
  },
  "capitalAdmin": {
    "role": "Federal Capital & Megacity Political Center (CDMX)",
    "political": "Hosts the National Palace (Palacio Nacional - Presidential Seat), Congress of the Union (San Lázaro), and Supreme Court of Justice of the Nation (SCJN).",
    "geographic": "Situated in the high Valley of Mexico at an elevation of 2,240 meters.",
    "strategic": "Apex military commands: Secretariat of National Defense (SEDENA), Secretariat of the Navy (SEMAR), and National Center for Intelligence (CNI)."
  },
  "region": "Americas",
  "subregion": "Central / North America",
  "flag": "🇲🇽",
  "iso2": "mx",
  "isoCode": "MEX / 484",
  "lat": 23.6345,
  "lng": -102.5528,
  "area": "1,964,375 km² (Rank: 13th globally)",
  "population": "129.5 Million (Rank: 10th globally - 2024 INEGI / UN estimate)",
  "politicalSystemType": "Federal Presidential Constitutional Republic",
  "currency": "Mexican Peso (MXN / Mex$)",
  "languages": "Spanish (National de facto official; 68 recognized Indigenous languages including Nahuatl, Maya)",
  "timeZones": "UTC-5 to UTC-8 (4 time zones: Central, Mountain, Pacific, Northwest)",
  "foundingInfo": "Independence war initiated September 16, 1810; Independence recognized 1821; current Constitution enacted February 5, 1917.",
  "tagline": "North American Manufacturing Giant, Pacific-Atlantic Gateway & Cultural Epicenter",
  "overview": {
    "beginner": "Mexico is a vibrant North American country of nearly 130 million people, bounded by the United States to the north and the Pacific Ocean and Gulf of Mexico on its coasts. The world's largest Spanish-speaking nation, Mexico combines an extraordinarily rich heritage of ancient civilizations like the Aztecs and Maya with a dynamic modern industrial economy. Today, Mexico is the United States' top overall trading partner, manufacturing millions of vehicles, advanced electronics, and aerospace equipment.",
    "advanced": "The United Mexican States is the second-largest economy in Latin America ($1.79T nominal GDP) and the 12th largest exporter globally. In 2024, Claudia Sheinbaum was elected as Mexico's first female president, leading the dominant Morena movement. Mexico is the primary beneficiary of the global 'nearshoring' supply chain restructuring under the USMCA trade pact, attracting billions in foreign direct investment as manufacturing relocates closer to the North American market. Geostrategically, Mexico bridges North and Central America, operating key interoceanic transit corridors like the newly modernized Interoceanic Corridor of the Isthmus of Tehuantepec (CIIT)—a direct overland competitor to the Panama Canal."
  },
  "history": [
    {
      "year": "1325–1521",
      "title": "Aztec Empire & Tenochtitlan",
      "phase": "Mesoamerican Civilization",
      "whatHappened": "The Mexica (Aztecs) founded Tenochtitlan on Lake Texcoco, constructing an imperial metropolis of 200,000+ people with advanced chinampa agriculture and monumental temples.",
      "where": "Tenochtitlan (Modern Mexico City)",
      "actors": [
        "Moctezuma II",
        "Cuauhtémoc"
      ],
      "whyItMattered": "Apex urban and political civilization in Mesoamerica, ruling over 5 million subjects before the Spanish conquest.",
      "consequences": "Provided the name, coat of arms (eagle on a nopal cactus), and cultural bedrock of modern Mexico.",
      "claimType": "HISTORICAL FACT",
      "sources": "Florentine Codex / Templo Mayor Archaeological Archives"
    },
    {
      "year": "1521",
      "title": "Spanish Conquest & Fall of Tenochtitlan",
      "phase": "Conquest & Viceroyalty",
      "whatHappened": "Hernán Cortés led a Spanish armada allied with indigenous Tlaxcalans, conquering Tenochtitlan after a three-month siege and establishing the Viceroyalty of New Spain.",
      "where": "Tenochtitlan / Mexico City",
      "actors": [
        "Hernán Cortés",
        "Cuauhtémoc",
        "Malinche (Doña Marina)"
      ],
      "whyItMattered": "Integrated Mexico into the Spanish Empire, initiating three centuries of silver extraction and profound biological and cultural mestizaje (mixing).",
      "consequences": "Transformed Mexico into the crown jewel of the Spanish Empire and center of the Manila Galleon trade.",
      "claimType": "HISTORICAL FACT",
      "sources": "True History of the Conquest of New Spain (Bernal Díaz del Castillo) / Archivo General de Indias"
    },
    {
      "year": "1810–1821",
      "title": "Grito de Dolores & War of Independence",
      "phase": "Sovereign Independence",
      "whatHappened": "Father Miguel Hidalgo uttered the 'Cry of Dolores' on September 16, 1810, sparking an 11-year popular revolution culminating in the Plan of Iguala and independence in 1821.",
      "where": "Dolores, Guanajuato / Mexico City",
      "actors": [
        "Miguel Hidalgo y Costilla",
        "José María Morelos",
        "Agustín de Iturbide"
      ],
      "whyItMattered": "Ended 300 years of Spanish colonial rule and established Mexican sovereign statehood.",
      "consequences": "Celebrated annually as Mexican National Day on September 16.",
      "claimType": "HISTORICAL FACT",
      "sources": "Sentimientos de la Nación (1813) / Treaty of Córdoba (1821)"
    },
    {
      "year": "1910–1917",
      "title": "Mexican Revolution & 1917 Constitution",
      "phase": "Social Revolution",
      "whatHappened": "Overthrow of dictator Porfirio Díaz precipitated a decade-long popular civil war that claimed over one million lives, culminating in the progressive 1917 Constitution.",
      "where": "Across Mexico (Chihuahua, Morelos, Mexico City)",
      "actors": [
        "Francisco Madero",
        "Emiliano Zapata",
        "Pancho Villa",
        "Venustiano Carranza"
      ],
      "whyItMattered": "First major social revolution of the 20th century, enshrining radical agrarian reform (ejidos), national ownership of subsoil resources (oil/minerals), and workers' rights.",
      "consequences": "Created the modern constitutional republic and nationalized petroleum under Lázaro Cárdenas in 1938 (PEMEX).",
      "claimType": "HISTORICAL FACT",
      "sources": "Constitution of the United Mexican States (1917) / Archivo General de la Nación"
    },
    {
      "year": "2024",
      "title": "Historic Election of Claudia Sheinbaum",
      "phase": "Contemporary Democratic Milestone",
      "whatHappened": "Claudia Sheinbaum, former Mayor of Mexico City and environmental scientist, won a landslide victory (nearly 60% of votes) to become Mexico's first female president in 200 years of republic.",
      "where": "Mexico City / Nationwide",
      "actors": [
        "Claudia Sheinbaum",
        "Andrés Manuel López Obrador (AMLO)"
      ],
      "whyItMattered": "Solidified the political hegemony of the leftist Morena movement ('Fourth Transformation'), commanding supermajorities to reform the federal judiciary.",
      "consequences": "Deepened state welfare programs, infrastructure investment, and nearshoring industrial policies.",
      "claimType": "HISTORICAL FACT",
      "sources": "National Electoral Institute (INE) / Official Gazette of the Federation (DOF)"
    }
  ],
  "politicalSystem": {
    "type": "Federal Presidential Constitutional Republic",
    "constitution": "Political Constitution of the United Mexican States (1917)",
    "branches": [
      {
        "name": "Executive",
        "role": "President Claudia Sheinbaum serving as Head of State, Head of Government, and Supreme Commander of the Armed Forces for a single 6-year term (no re-election)."
      },
      {
        "name": "Legislature",
        "role": "Bicameral Congress of the Union: 500-seat Chamber of Deputies and 128-seat Senate."
      },
      {
        "name": "Judiciary",
        "role": "Supreme Court of Justice of the Nation (SCJN) undergoing transition to popular election of federal judges following 2024 constitutional reforms."
      }
    ],
    "currentLeadership": {
      "headOfState": "President Claudia Sheinbaum (Inaugurated October 1, 2024)",
      "headOfGovernment": "President Claudia Sheinbaum",
      "foreignMinister": "Juan Ramón de la Fuente (Secretary of Foreign Affairs)",
      "defenseMinister": "General Ricardo Trevilla Trejo (Secretary of National Defense - SEDENA)",
      "navyMinister": "Admiral Raymundo Pedro Morales Ángeles (Secretary of the Navy - SEMAR)"
    },
    "rulingParty": "Morena (National Regeneration Movement) leading the dominant 'Let's Keep Making History' coalition",
    "oppositionParties": [
      {
        "name": "National Action Party (PAN)",
        "seats": "Center-right pro-business opposition"
      },
      {
        "name": "Institutional Revolutionary Party (PRI)",
        "seats": "Historic ruling party of the 20th century"
      },
      {
        "name": "Citizens' Movement (MC)",
        "seats": "Center-left social democratic alternative"
      }
    ],
    "parliamentDetails": "Congress meets at San Lázaro and the Senate chamber in Mexico City, currently controlled by Morena constitutional supermajorities.",
    "recentElections": "June 2, 2024 general election won by Claudia Sheinbaum; mid-term legislative elections scheduled for 2027.",
    "domesticDevelopments": [
      {
        "title": "Judicial Reform Constitutional Overhaul",
        "claimType": "CONSTITUTIONAL REFORM",
        "desc": "Passed controversial amendment mandating popular election of all federal judges, magistrates, and Supreme Court ministers."
      },
      {
        "title": "Interoceanic Corridor of the Isthmus of Tehuantepec (CIIT)",
        "claimType": "STRATEGIC INFRASTRUCTURE",
        "desc": "Modernized 300-km railway and highway corridor linking Atlantic (Coatzacoalcos) to Pacific (Salina Cruz) ports."
      }
    ],
    "currentIssues": [
      {
        "title": "Organized Crime & Cartel Containment",
        "claimType": "INTERNAL SECURITY",
        "desc": "Managing cartel territorial disputes (Sinaloa Cartel internal conflict, CJNG) using National Guard intelligence."
      },
      {
        "title": "US Border Migration & Fentanyl Negotiations",
        "claimType": "BILATERAL DIPLOMACY",
        "desc": "Coordinating border enforcement and countering cross-border weapons trafficking with the United States."
      }
    ],
    "policyDebates": [
      {
        "topic": "Energy Transition vs PEMEX Support",
        "desc": "Balancing state fiscal support for debt-laden state oil company PEMEX with ambitious solar and wind renewable targets."
      }
    ],
    "institutions": [
      {
        "name": "Banco de México (Banxico)",
        "role": "Respected independent central bank managing inflation and foreign reserves."
      },
      {
        "name": "National Guard (Guardia Nacional)",
        "role": "130,000-strong federal militarized public security force incorporated under SEDENA."
      }
    ],
    "federalDynamics": "31 sovereign states and 1 autonomous capital (Mexico City) with state governors and local police forces.",
    "foreignPolicyDoctrine": "Estrada Doctrine of non-intervention and respect for self-determination; peaceful resolution of disputes; active leadership in Latin American and Caribbean integration (CELAC)."
  },
  "geographyBorders": {
    "landArea": "1,964,375 km² (Rank: 13th globally)",
    "location": "Southern North America, bounded by the Pacific Ocean and Gulf of Mexico.",
    "continent": "Americas",
    "latRange": "14°N to 33°N",
    "lngRange": "86°W to 118°W",
    "coastline": "9,330 km (Pacific Ocean 7,338 km; Gulf of Mexico/Caribbean 2,805 km)",
    "majorOceans": [
      "Pacific Ocean",
      "Gulf of Mexico (Atlantic Basin)",
      "Caribbean Sea"
    ],
    "majorIslands": [
      "Cozumel",
      "Isla Mujeres",
      "Revillagigedo Archipelago (UNESCO World Heritage Site)",
      "Guadalupe Island"
    ],
    "strategicGeography": "Controls the narrowest overland transit corridor between the Atlantic and Pacific Oceans north of Panama (Isthmus of Tehuantepec).",
    "topography": "Two massive mountain chains (Sierra Madre Occidental in west, Sierra Madre Oriental in east) enclosing the elevated Mexican Altiplano; volcanic belt (Trans-Mexican Volcanic Belt); tropical Yucatan lowlands.",
    "rivers": [
      "Rio Grande (Río Bravo - 3,051 km)",
      "Grijalva-Usumacinta River System",
      "Balsas River",
      "Pánuco River"
    ],
    "mountains": [
      "Pico de Orizaba (Citlaltépetl, 5,636 m - highest peak in Mexico)",
      "Popocatépetl (5,426 m - active volcano)",
      "Iztaccíhuatl (5,230 m)"
    ],
    "seas": [
      "Gulf of Mexico",
      "Gulf of California (Sea of Cortez)",
      "Caribbean Sea"
    ],
    "climates": [
      "Arid and semi-arid in northern plateau",
      "Temperate in central highlands",
      "Tropical wet in southern lowlands and Yucatan"
    ],
    "landBorders": [
      {
        "country": "United States",
        "id": "USA",
        "borderLength": "3,145 km",
        "region": "North",
        "status": "Demarcated",
        "strategicContext": "Most frequently crossed international border in the world; vital USMCA manufacturing supply chains."
      },
      {
        "country": "Guatemala",
        "id": "GTM",
        "borderLength": "956 km",
        "region": "South",
        "status": "Demarcated",
        "strategicContext": "Suchiate River frontier; primary southern migration and Central American trade corridor."
      },
      {
        "country": "Belize",
        "id": "BLZ",
        "borderLength": "276 km",
        "region": "Southeast",
        "status": "Demarcated",
        "strategicContext": "Hondo River border and Caribbean free-trade zone."
      }
    ],
    "maritimeBorders": [
      {
        "country": "Cuba",
        "id": "CUB",
        "boundary": "Yucatan Channel Maritime Delimitation Agreement"
      }
    ]
  },
  "economy": {
    "gdpNominal": "$1.79 Trillion (Rank: 12th globally - 2nd largest in Latin America)",
    "gdpPPP": "$3.28 Trillion (Rank: 11th globally)",
    "gdpPerCapita": "$13,800 (Upper-middle income)",
    "gdpGrowth": "+2.2% (2024 IMF estimate)",
    "currency": "Mexican Peso (MXN / Mex$)",
    "majorIndustries": [
      "Automotive & Commercial Truck Manufacturing (World's 7th largest vehicle producer - 4M+ vehicles/yr)",
      "Advanced Electronics & Computing Equipment Assembly (Guadalajara 'Silicon Valley of Mexico')",
      "Aerospace Engineering & Component Fabrication (Querétaro Aerospace Cluster)",
      "Crude Oil Extraction & Refining (PEMEX - Campeche Sound offshore fields)",
      "Commercial Agriculture & Agribusiness (Avocados #1 globally, Berries, Tomatoes, Tequila/Mezcal)"
    ],
    "majorExports": [
      "Motor Vehicles, SUVs & Commercial Cargo Trucks ($60B/yr)",
      "Automotive Parts, Engines & Transmissions ($42B/yr)",
      "Computers, Telecommunications Equipment & Display Units ($38B/yr)",
      "Electrical Wiring, Transformers & Electronic Circuits ($35B/yr)",
      "Crude Petroleum Oil ($30B/yr - PEMEX Maya Crude)",
      "Fresh Fruit & Vegetables ($18B/yr - Avocados, Tomatoes, Citrus)"
    ],
    "majorImports": [
      "Intermediate Industrial Components & Semiconductor Chips",
      "Refined Gasoline, Ultra-Low Sulfur Diesel & Natural Gas (from US pipelines)",
      "Plastic Resins & Specialized Industrial Polymers",
      "Automotive Stamping Steel & Aluminum Sheet Metal"
    ],
    "energyPosition": "Major oil producer through state oil monopoly PEMEX (1.6M bpd); dependent on US natural gas pipeline imports for 60%+ of domestic electricity generation; constructing massive solar complexes (Puerto Peñasco 1 GW).",
    "naturalResources": "World's #1 silver producer, extensive reserves of copper, zinc, crude oil, natural gas, lithium (nationalized reserves in Sonora), and timber.",
    "tradeOrgs": [
      "USMCA (United States-Mexico-Canada Agreement)",
      "Pacific Alliance (Mexico, Colombia, Chile, Peru)",
      "G20 Member State",
      "OECD (Organisation for Economic Co-operation and Development)",
      "CPTPP (Comprehensive and Progressive Trans-Pacific Partnership)"
    ],
    "economicStrategicImportance": "The United States' #1 overall commercial trading partner ($800B+ annual trade), acting as the central manufacturing nearshoring hub for North America.",
    "indiaEconomicConnection": "Bilateral trade reached $10.5 Billion; Mexico is India's top trading partner in Latin America; Indian IT conglomerates (TCS, Infosys, Wipro, HCL) employ over 40,000 engineers in Mexico; major Indian pharma investments (Sun Pharma, Dr. Reddy's).",
    "majorTradingPartners": [
      {
        "country": "United States",
        "share": "78.2% of total Mexican merchandise exports ($475B+)"
      },
      {
        "country": "Canada",
        "share": "3.2% of exports"
      },
      {
        "country": "China",
        "share": "1.9% of exports (Major source of industrial component imports - 19%)"
      },
      {
        "country": "Germany",
        "share": "1.6% of trade"
      },
      {
        "country": "India",
        "share": "1.5% of total trade ($10.5B+ bilateral)"
      }
    ]
  },
  "military": {
    "expenditure": "$11.8 Billion (0.65% of GDP - Combined SEDENA, SEMAR & National Guard)",
    "personnel": {
      "active": "280,000 Active Duty Armed Forces (Army 210,000; Navy 70,000)",
      "reserves": "130,000 National Guard Personnel"
    },
    "doctrine": "Internal national defense, territorial border surveillance, counter-narcotics and organized crime containment, and national disaster relief under the acclaimed Plan DN-III-E.",
    "nuclearStockpile": "Strict non-nuclear weapons state; historic architect of the 1967 Treaty of Tlatelolco, which established Latin America and the Caribbean as the world's first nuclear-weapon-free zone (earning Mexican diplomat Alfonso García Robles the Nobel Peace Prize).",
    "defenseIndustry": "Domestic manufacturing led by Military Industry Directorate (SEDENA DGIM) and Navy Shipyards (ASTIMAR) producing FX-05 Xiuhcoatl assault rifles, Oshkosh-licensed armored tactical vehicles, and offshore patrol vessels.",
    "majorDomesticSystems": [
      "FX-05 Xiuhcoatl 5.56mm Assault Rifle (Indigenous Mexican design)",
      "DN-XI Armored Tactical Security Vehicles (Ford F-550 chassis)",
      "Oaxaca-Class Offshore Patrol Vessels (OPV - SEMAR Shipyards)",
      "Sierra-Class & Durango-Class Guided Helicopter Patrol Vessels"
    ],
    "majorImports": [
      "Sikorsky UH-60M Black Hawk Utility Helicopters (USA)",
      "Airbus C295 Tactical Transport Aircraft (Spain / Airbus)",
      "Beechcraft T-6C Texan II Turboprop Strike Trainers (USA)",
      "SIG Sauer P320 & Small Arms (USA)",
      "SandCat Armored Tactical Combat Vehicles (Plasan Israel / Mexico)"
    ],
    "majorExports": [
      "Patrol boats, small arms munitions, and civil disaster response equipment to Central America"
    ],
    "militaryAlliances": [
      "Inter-American Defense Board (IADB / OAS)",
      "North American Defense Bilateral Cooperation with US Northern Command (USNORTHCOM)",
      "UN Peacekeeping Operations contributor (MINUSTAH, UNIFIL)"
    ],
    "categories": [
      {
        "name": "MEXICAN NAVY (SECRETARÍA DE MARINA - SEMAR)",
        "desc": "Maritime security, anti-smuggling patrol, port administration, and marine infantry brigades.",
        "systems": [
          {
            "name": "Reformador-Class (SIGMA 10714) Ocean Patrol Frigate",
            "type": "Long-Range Ocean Patrol Frigate",
            "origin": "Netherlands (Damen) / SEMAR Salina Cruz",
            "status": "CONFIRMED",
            "quantity": "1 frigate (ARM Benito Juárez)",
            "role": "Flagship blue-water sovereignty defense and missile intercept."
          },
          {
            "name": "Oaxaca-Class Offshore Patrol Vessels (OPV)",
            "type": "Helicopter-Capable Patrol Vessel",
            "origin": "Mexico (ASTIMAR)",
            "status": "CONFIRMED",
            "quantity": "8 vessels in service",
            "role": "EEZ defense, search and rescue, anti-narcotics interdiction."
          },
          {
            "name": "Mexican Marine Infantry (UNIMAR / Infantería de Marina)",
            "type": "Elite Amphibious Combat Force",
            "origin": "Mexico",
            "status": "CONFIRMED",
            "quantity": "25,000+ marines",
            "role": "High-value cartel interdiction, port protection, counter-terrorism."
          }
        ]
      },
      {
        "name": "MEXICAN AIR FORCE (FUERZA AÉREA MEXICANA - FAM)",
        "desc": "Airspace surveillance, tactical airlift, close air support, and disaster relief.",
        "systems": [
          {
            "name": "Northrop F-5E/F Tiger II",
            "type": "Supersonic Fighter Interceptor",
            "origin": "United States",
            "status": "CONFIRMED",
            "quantity": "4 operational (sole supersonic combat jets)",
            "role": "Air defense and ceremonial intercept."
          },
          {
            "name": "Beechcraft T-6C+ Texan II",
            "type": "Light Attack & Armed Reconnaissance",
            "origin": "United States",
            "status": "CONFIRMED",
            "quantity": "60 aircraft",
            "role": "Counter-insurgency and precision aerial strike."
          },
          {
            "name": "Sikorsky UH-60M Black Hawk & Mil Mi-17",
            "type": "Combat Assault & Transport Helicopters",
            "origin": "USA / Russia",
            "status": "CONFIRMED",
            "quantity": "18 Black Hawks, 30+ Mi-17s",
            "role": "Air mobile troop insertion and disaster relief."
          },
          {
            "name": "Airbus C295M / Lockheed C-130 Hercules",
            "type": "Tactical Airlift Transport",
            "origin": "Spain / USA",
            "status": "CONFIRMED",
            "quantity": "14 C295s, 3 C-130s",
            "role": "Nationwide troop transport and Plan DN-III-E logistics."
          }
        ]
      },
      {
        "name": "MEXICAN ARMY & NATIONAL GUARD (SEDENA)",
        "desc": "Ground forces maintaining internal security, strategic installations, and border corridors.",
        "systems": [
          {
            "name": "National Guard Tactical Formations",
            "type": "Federal Gendarmerie & Security",
            "origin": "Mexico",
            "status": "CONFIRMED",
            "quantity": "130,000 active personnel",
            "role": "Federal highway security, border containment, and anti-cartel operations."
          },
          {
            "name": "DN-XI & SandCat 4x4 Armored Vehicles",
            "type": "Light Armored Protected Vehicles",
            "origin": "Mexico / Israel",
            "status": "CONFIRMED",
            "quantity": "600+ tactical vehicles",
            "role": "Urban and rural patrol under ballistic fire."
          },
          {
            "name": "Panhard VBL & ERC-90 Lynx",
            "type": "Wheeled Armored Reconnaissance Vehicles",
            "origin": "France",
            "status": "CONFIRMED",
            "quantity": "150+ armored scout vehicles",
            "role": "Border reconnaissance and perimeter defense."
          }
        ]
      }
    ]
  },
  "relations": {
    "main": [
      {
        "id": "MEX_USA",
        "country": "United States",
        "flag": "🇺🇸",
        "status": "Primary Commercial & Defense Partner ($800B+ Trade)",
        "color": "#10b981",
        "note": "Integrated industrial supply chains (USMCA), shared border, coordination on migration."
      },
      {
        "id": "MEX_CAN",
        "country": "Canada",
        "flag": "🇨🇦",
        "status": "Trilateral North American Partner (USMCA)",
        "color": "#10b981",
        "note": "Strong commercial ties, seasonal agricultural workers program, mining investments."
      },
      {
        "id": "MEX_IND",
        "country": "India",
        "flag": "🇮🇳",
        "status": "Privileged Economic & Tech Partner ($10.5B Trade)",
        "color": "#06b6d4",
        "note": "Top trade partner in Latin America; major Indian IT hubs in Guadalajara and Monterrey."
      },
      {
        "id": "MEX_CHN",
        "country": "China",
        "flag": "🇨🇳",
        "status": "Major Component Supplier & Direct Investor",
        "color": "#eab308",
        "note": "Supplies $100B+ in manufacturing components; Chinese EV investments near US border."
      },
      {
        "id": "MEX_GTM",
        "country": "Guatemala",
        "flag": "🇬🇹",
        "status": "Strategic Southern Neighbor",
        "color": "#3b82f6",
        "note": "Managing southern border security, Central American migration, and river basin accords."
      }
    ],
    "searchable": []
  },
  "strategicLocations": [
    {
      "name": "Port of Manzanillo (Colima)",
      "type": "Busiest Seaport in Mexico (Pacific Gate)",
      "coords": "19.05° N, 104.32° W",
      "significance": "Handles 45% of Mexico's containerized cargo; primary trade gateway with China, Japan, and Asian supply chains."
    },
    {
      "name": "Interoceanic Corridor of the Isthmus of Tehuantepec (CIIT)",
      "type": "Trans-Isthmus Overland Trade Corridor",
      "coords": "16.85° N, 95.05° W",
      "significance": "300-km modern railway connecting Salina Cruz (Pacific) to Coatzacoalcos (Gulf of Mexico); alternative to the Panama Canal."
    },
    {
      "name": "Port of Veracruz (Gulf of Mexico)",
      "type": "Historic Atlantic Maritime Megaport",
      "coords": "19.20° N, 96.13° W",
      "significance": "Primary maritime automotive export port shipping vehicles to Europe, the US East Coast, and South America."
    },
    {
      "name": "Tijuana–San Diego Border Megacrossing",
      "type": "World's Busiest Land Border Port of Entry",
      "coords": "32.54° N, 117.03° W",
      "significance": "San Ysidro Land Port of Entry handles tens of millions of crossings and billions in cross-border manufacturing trade annually."
    }
  ],
  "currentTensions": [
    {
      "title": "USMCA Rules of Origin & Automotive Tariff Tensions",
      "severity": "Economic Policy Watch",
      "color": "#f59e0b",
      "desc": "Protecting Mexican automotive manufacturing export access to the US amid disputes over steel sourcing and Chinese EV investments."
    },
    {
      "title": "Transnational Cartel Border & Fentanyl Interdiction",
      "severity": "Security & Bilateral Friction Alert",
      "color": "#f59e0b",
      "desc": "Coordinating with US agencies to stop fentanyl trafficking while demanding US crack down on high-powered firearms smuggled into Mexico."
    }
  ],
  "keyEvents": [
    {
      "title": "1810 Grito de Dolores & Independence War",
      "category": "Nation-State Founding",
      "date": "September 16, 1810"
    },
    {
      "title": "1917 Promulgation of Mexican Constitution",
      "category": "Social Revolution",
      "date": "February 5, 1917"
    },
    {
      "title": "1994 NAFTA Inception / 2020 USMCA Transition",
      "category": "Trade Architecture",
      "date": "July 1, 2020"
    },
    {
      "title": "2024 Election of Claudia Sheinbaum",
      "category": "Historic Democratic Milestone",
      "date": "June 2, 2024"
    }
  ],
  "indiaImpact": {
    "headline": "Mexico–India Strategic Partnership: Latin America's Tech Hub & $10.5 Billion Commercial Axis",
    "points": [
      {
        "title": "India's #1 Commercial Trading Partner in Latin America",
        "desc": "Bilateral trade reached $10.5 Billion, led by Mexican exports of crude oil and electronic machinery to India, and Indian exports of motor vehicles, automotive parts, and organic chemicals."
      },
      {
        "title": "Indian Information Technology Superhubs in Mexico",
        "desc": "India's top IT multinationals (TCS, Infosys, Wipro, HCLTech, Cognizant) operate major delivery centers in Guadalajara ('the Silicon Valley of Mexico'), Monterrey, and Mexico City, employing over 40,000 bilingual software engineers."
      },
      {
        "title": "Pharmaceutical Manufacturing & Generic Medicines",
        "desc": "Indian pharmaceutical giants (Sun Pharma, Dr. Reddy's Laboratories, Cipla, Torrent Pharma) maintain advanced manufacturing facilities in Mexico, supplying affordable generic medications across public healthcare systems."
      }
    ]
  }
}
};

export const UNIVERSAL_CURRENCIES = {
  "AFG": "Afghan Afghani (AFN)",
  "ALB": "Albanian Lek (ALL)",
  "DZA": "Algerian Dinar (DZD)",
  "AGO": "Angolan Kwanza (AOA)",
  "ARG": "Argentine Peso (ARS)",
  "ARM": "Armenian Dram (AMD)",
  "AUS": "Australian Dollar (AUD)",
  "AUT": "Euro (EUR)",
  "AZE": "Azerbaijani Manat (AZN)",
  "BHS": "Bahamian Dollar (BSD)",
  "BGD": "Bangladeshi Taka (BDT)",
  "BLR": "Belarusian Ruble (BYN)",
  "BEL": "Euro (EUR)",
  "BLZ": "Belize Dollar (BZD)",
  "BEN": "West African CFA Franc (XOF)",
  "BTN": "Bhutanese Ngultrum (BTN)",
  "BOL": "Bolivian Boliviano (BOB)",
  "BIH": "Bosnia and Herzegovina Convertible Mark (BAM)",
  "BWA": "Botswana Pula (BWP)",
  "BRA": "Brazilian Real (BRL)",
  "BRN": "Brunei Dollar (BND)",
  "BGR": "Bulgarian Lev (BGN)",
  "BFA": "West African CFA Franc (XOF)",
  "BDI": "Burundian Franc (BIF)",
  "KHM": "Cambodian Riel (KHR)",
  "CMR": "Central African CFA Franc (XAF)",
  "CAN": "Canadian Dollar (CAD)",
  "CAF": "Central African CFA Franc (XAF)",
  "TCD": "Central African CFA Franc (XAF)",
  "CHL": "Chilean Peso (CLP)",
  "CHN": "Renminbi Yuan (CNY)",
  "COL": "Colombian Peso (COP)",
  "COG": "Central African CFA Franc (XAF)",
  "COD": "Congolese Franc (CDF)",
  "CRI": "Costa Rican Colón (CRC)",
  "CIV": "West African CFA Franc (XOF)",
  "HRV": "Euro (EUR)",
  "CUB": "Cuban Peso (CUP)",
  "CYP": "Euro (EUR)",
  "CZE": "Czech Koruna (CZK)",
  "DNK": "Danish Krone (DKK)",
  "DJI": "Djiboutian Franc (DJF)",
  "DOM": "Dominican Peso (DOP)",
  "ECU": "United States Dollar (USD)",
  "EGY": "Egyptian Pound (EGP)",
  "SLV": "United States Dollar (USD)",
  "GNQ": "Central African CFA Franc (XAF)",
  "ERI": "Eritrean Nakfa (ERN)",
  "EST": "Euro (EUR)",
  "SWZ": "Swazi Lilangeni (SZL)",
  "ETH": "Ethiopian Birr (ETB)",
  "FJI": "Fijian Dollar (FJD)",
  "FIN": "Euro (EUR)",
  "FRA": "Euro (EUR)",
  "GAB": "Central African CFA Franc (XAF)",
  "GMB": "Gambian Dalasi (GMD)",
  "GEO": "Georgian Lari (GEL)",
  "DEU": "Euro (EUR)",
  "GHA": "Ghanaian Cedi (GHS)",
  "GRC": "Euro (EUR)",
  "GTM": "Guatemalan Quetzal (GTQ)",
  "GIN": "Guinean Franc (GNF)",
  "GNB": "West African CFA Franc (XOF)",
  "GUY": "Guyanese Dollar (GYD)",
  "HTI": "Haitian Gourde (HTG)",
  "HND": "Honduran Lempira (HNL)",
  "HUN": "Hungarian Forint (HUF)",
  "ISL": "Icelandic Króna (ISK)",
  "IND": "Indian Rupee (INR)",
  "IDN": "Indonesian Rupiah (IDR)",
  "IRN": "Iranian Rial (IRR)",
  "IRQ": "Iraqi Dinar (IQD)",
  "IRL": "Euro (EUR)",
  "ISR": "Israeli New Shekel (ILS)",
  "ITA": "Euro (EUR)",
  "JAM": "Jamaican Dollar (JMD)",
  "JPN": "Japanese Yen (JPY)",
  "JOR": "Jordanian Dinar (JOD)",
  "KAZ": "Kazakhstani Tenge (KZT)",
  "KEN": "Kenyan Shilling (KES)",
  "PRK": "North Korean Won (KPW)",
  "KOR": "South Korean Won (KRW)",
  "KWT": "Kuwaiti Dinar (KWD)",
  "KGZ": "Kyrgyzstani Som (KGS)",
  "LAO": "Lao Kip (LAK)",
  "LVA": "Euro (EUR)",
  "LBN": "Lebanese Pound (LBP)",
  "LSO": "Lesotho Loti (LSL)",
  "LBR": "Liberian Dollar (LRD)",
  "LBY": "Libyan Dinar (LYD)",
  "LTU": "Euro (EUR)",
  "LUX": "Euro (EUR)",
  "MDG": "Malagasy Ariary (MGA)",
  "MWI": "Malawian Kwacha (MWK)",
  "MYS": "Malaysian Ringgit (MYR)",
  "MLI": "West African CFA Franc (XOF)",
  "MRT": "Mauritanian Ouguiya (MRU)",
  "MEX": "Mexican Peso (MXN)",
  "MDA": "Moldovan Leu (MDL)",
  "MNG": "Mongolian Tögrög (MNT)",
  "MNE": "Euro (EUR)",
  "MAR": "Moroccan Dirham (MAD)",
  "MOZ": "Mozambican Metical (MZN)",
  "MMR": "Myanmar Kyat (MMK)",
  "NAM": "Namibian Dollar (NAD)",
  "NPL": "Nepalese Rupee (NPR)",
  "NLD": "Euro (EUR)",
  "NZL": "New Zealand Dollar (NZD)",
  "NIC": "Nicaraguan Córdoba (NIO)",
  "NER": "West African CFA Franc (XOF)",
  "NGA": "Nigerian Naira (NGN)",
  "MKD": "Macedonian Denar (MKD)",
  "NOR": "Norwegian Krone (NOK)",
  "OMN": "Omani Rial (OMR)",
  "PAK": "Pakistani Rupee (PKR)",
  "PAN": "Panamanian Balboa / USD (PAB)",
  "PNG": "Papua New Guinean Kina (PGK)",
  "PRY": "Paraguayan Guaraní (PYG)",
  "PER": "Peruvian Sol (PEN)",
  "PHL": "Philippine Peso (PHP)",
  "POL": "Polish Złoty (PLN)",
  "PRT": "Euro (EUR)",
  "QAT": "Qatari Riyal (QAR)",
  "ROU": "Romanian Leu (RON)",
  "RUS": "Russian Ruble (RUB)",
  "RWA": "Rwandan Franc (RWF)",
  "SAU": "Saudi Riyal (SAR)",
  "SEN": "West African CFA Franc (XOF)",
  "SRB": "Serbian Dinar (RSD)",
  "SLE": "Sierra Leonean Leone (SLL)",
  "SGP": "Singapore Dollar (SGD)",
  "SVK": "Euro (EUR)",
  "SVN": "Euro (EUR)",
  "SOM": "Somali Shilling (SOS)",
  "ZAF": "South African Rand (ZAR)",
  "SSD": "South Sudanese Pound (SSP)",
  "ESP": "Euro (EUR)",
  "LKA": "Sri Lankan Rupee (LKR)",
  "SDN": "Sudanese Pound (SDG)",
  "SUR": "Surinamese Dollar (SRD)",
  "SWE": "Swedish Krona (SEK)",
  "CHE": "Swiss Franc (CHF)",
  "SYR": "Syrian Pound (SYP)",
  "TWN": "New Taiwan Dollar (TWD)",
  "TJK": "Tajikistani Somoni (TJS)",
  "TZA": "Tanzanian Shilling (TZS)",
  "THA": "Thai Baht (THB)",
  "TLS": "United States Dollar (USD)",
  "TGO": "West African CFA Franc (XOF)",
  "TTO": "Trinidad and Tobago Dollar (TTD)",
  "TUN": "Tunisian Dinar (TND)",
  "TUR": "Turkish Lira (TRY)",
  "TKM": "Turkmenistan Manat (TMT)",
  "UGA": "Ugandan Shilling (UGX)",
  "UKR": "Ukrainian Hryvnia (UAH)",
  "ARE": "United Arab Emirates Dirham (AED)",
  "GBR": "Pound Sterling (GBP)",
  "USA": "United States Dollar (USD)",
  "URY": "Uruguayan Peso (UYU)",
  "UZB": "Uzbekistani Som (UZS)",
  "VUT": "Vanuatu Vatu (VUV)",
  "VEN": "Venezuelan Bolívar (VES)",
  "VNM": "Vietnamese Đồng (VND)",
  "YEM": "Yemeni Rial (YER)",
  "ZMB": "Zambian Kwacha (ZMW)",
  "ZWE": "Zimbabwe Gold (ZiG)"
};

export const UNIVERSAL_LANGUAGES = {
  "AFG": "Pashto, Dari (Persian)",
  "ALB": "Albanian",
  "DZA": "Arabic, Tamazight",
  "AGO": "Portuguese",
  "ARG": "Spanish",
  "ARM": "Armenian",
  "AUS": "English",
  "AUT": "German",
  "AZE": "Azerbaijani",
  "BHS": "English",
  "BGD": "Bengali",
  "BLR": "Belarusian, Russian",
  "BEL": "Dutch, French, German",
  "BLZ": "English",
  "BEN": "French",
  "BTN": "Dzongkha",
  "BOL": "Spanish, Quechua, Aymara",
  "BIH": "Bosnian, Croatian, Serbian",
  "BWA": "English, Setswana",
  "BRA": "Portuguese",
  "BRN": "Malay",
  "BGR": "Bulgarian",
  "BFA": "French",
  "BDI": "Kirundi, French, English",
  "KHM": "Khmer",
  "CMR": "French, English",
  "CAN": "English, French",
  "CAF": "French, Sango",
  "TCD": "French, Arabic",
  "CHL": "Spanish",
  "CHN": "Standard Chinese (Mandarin)",
  "COL": "Spanish",
  "COG": "French, Lingala, Kituba",
  "COD": "French, Lingala, Swahili, Kongo, Luba-Kasai",
  "CRI": "Spanish",
  "CIV": "French",
  "HRV": "Croatian",
  "CUB": "Spanish",
  "CYP": "Greek, Turkish",
  "CZE": "Czech",
  "DNK": "Danish",
  "DJI": "Arabic, French",
  "DOM": "Spanish",
  "ECU": "Spanish, Kichwa",
  "EGY": "Arabic",
  "SLV": "Spanish",
  "GNQ": "Spanish, French, Portuguese",
  "ERI": "Tigrinya, Arabic, English",
  "EST": "Estonian",
  "SWZ": "Swazi, English",
  "ETH": "Amharic, Afar, Oromo, Somali, Tigrinya",
  "FJI": "English, Fijian, Hindi",
  "FIN": "Finnish, Swedish",
  "FRA": "French",
  "GAB": "French",
  "GMB": "English",
  "GEO": "Georgian",
  "DEU": "German",
  "GHA": "English",
  "GRC": "Greek",
  "GTM": "Spanish",
  "GIN": "French",
  "GNB": "Portuguese",
  "GUY": "English",
  "HTI": "French, Haitian Creole",
  "HND": "Spanish",
  "HUN": "Hungarian",
  "ISL": "Icelandic",
  "IND": "Hindi, English (22 Scheduled Languages)",
  "IDN": "Indonesian",
  "IRN": "Persian (Farsi)",
  "IRQ": "Arabic, Kurdish",
  "IRL": "Irish, English",
  "ISR": "Hebrew, Arabic",
  "ITA": "Italian",
  "JAM": "English",
  "JPN": "Japanese",
  "JOR": "Arabic",
  "KAZ": "Kazakh, Russian",
  "KEN": "Swahili, English",
  "PRK": "Korean",
  "KOR": "Korean",
  "KWT": "Arabic",
  "KGZ": "Kyrgyz, Russian",
  "LAO": "Lao",
  "LVA": "Latvian",
  "LBN": "Arabic",
  "LSO": "Sesotho, English",
  "LBR": "English",
  "LBY": "Arabic",
  "LTU": "Lithuanian",
  "LUX": "Luxembourgish, French, German",
  "MDG": "Malagasy, French",
  "MWI": "English, Chichewa",
  "MYS": "Malay",
  "MLI": "French, Bambara",
  "MRT": "Arabic",
  "MEX": "Spanish",
  "MDA": "Romanian",
  "MNG": "Mongolian",
  "MNE": "Montenegrin",
  "MAR": "Arabic, Tamazight",
  "MOZ": "Portuguese",
  "MMR": "Burmese",
  "NAM": "English",
  "NPL": "Nepali",
  "NLD": "Dutch",
  "NZL": "English, Māori, NZ Sign Language",
  "NIC": "Spanish",
  "NER": "French, Hausa",
  "NGA": "English",
  "MKD": "Macedonian",
  "NOR": "Norwegian",
  "OMN": "Arabic",
  "PAK": "Urdu, English",
  "PAN": "Spanish",
  "PNG": "English, Tok Pisin, Hiri Motu",
  "PRY": "Spanish, Guaraní",
  "PER": "Spanish, Quechua, Aymara",
  "PHL": "Filipino, English",
  "POL": "Polish",
  "PRT": "Portuguese",
  "QAT": "Arabic",
  "ROU": "Romanian",
  "RUS": "Russian",
  "RWA": "Kinyarwanda, French, English, Swahili",
  "SAU": "Arabic",
  "SEN": "French, Wolof",
  "SRB": "Serbian",
  "SLE": "English",
  "SGP": "English, Malay, Mandarin, Tamil",
  "SVK": "Slovak",
  "SVN": "Slovene",
  "SOM": "Somali, Arabic",
  "ZAF": "12 Official Languages (Zulu, Xhosa, Afrikaans, English, etc.)",
  "SSD": "English",
  "ESP": "Spanish",
  "LKA": "Sinhala, Tamil",
  "SDN": "Arabic, English",
  "SUR": "Dutch",
  "SWE": "Swedish",
  "CHE": "German, French, Italian, Romansh",
  "SYR": "Arabic",
  "TWN": "Mandarin Chinese",
  "TJK": "Tajik",
  "TZA": "Swahili, English",
  "THA": "Thai",
  "TLS": "Tetum, Portuguese",
  "TGO": "French",
  "TTO": "English",
  "TUN": "Arabic",
  "TUR": "Turkish",
  "TKM": "Turkmen",
  "UGA": "English, Swahili",
  "UKR": "Ukrainian",
  "ARE": "Arabic",
  "GBR": "English",
  "USA": "English (de facto)",
  "URY": "Spanish",
  "UZB": "Uzbek",
  "VUT": "Bislama, English, French",
  "VEN": "Spanish",
  "VNM": "Vietnamese",
  "YEM": "Arabic",
  "ZMB": "English",
  "ZWE": "16 Official Languages (Shona, Ndebele, English, etc.)"
};
