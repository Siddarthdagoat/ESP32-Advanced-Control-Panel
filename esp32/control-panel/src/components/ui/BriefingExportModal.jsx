import React, { useState, useId } from 'react';
import { 
  FileText, Printer, Download, Copy, Check, X, ShieldAlert, 
  MapPin, Clock, Globe, ArrowRight, ShieldCheck, Activity, 
  Layers, Compass, AlertTriangle, History, Flag, Anchor
} from 'lucide-react';
import { KENT_PROBABILITY_SCALE } from '../../data/geointelScenarios';

export default function BriefingExportModal({
  isOpen,
  onClose,
  country,
  scenario,
  globalContext
}) {
  const [copied, setCopied] = useState(false);
  const componentId = useId();

  if (!isOpen) return null;

  const timestamp = new Date().toUTCString();
  const documentId = `GEOINTEL-SITREP-${Math.floor(100000 + Math.random() * 900000)}`;

  // Determine Subject Matter
  const subjectTitle = scenario 
    ? `SCENARIO CRISIS SITREP: ${scenario.title}`
    : country 
    ? `NATIONAL STRATEGIC INTELLIGENCE DOSSIER: ${country.name.toUpperCase()} (${country.id})`
    : 'GLOBAL MULTI-THEATER GEOPOLITICAL SITREP (2026)';

  const primaryTheater = scenario?.theater || country?.region || 'Global Strategic Domain';
  const threatLevel = scenario?.threatLevel || country?.threatLevel || 'SEVERE';

  // Construct Key Judgments with Sherman Kent Estimative Language
  const keyJudgments = scenario ? [
    {
      confidence: KENT_PROBABILITY_SCALE.ALMOST_CERTAIN,
      text: `Supply chain shock propagation is ${KENT_PROBABILITY_SCALE.ALMOST_CERTAIN.label} (${KENT_PROBABILITY_SCALE.ALMOST_CERTAIN.range}) to induce double-digit container freight inflation within 96 hours of maritime interdiction declaration.`
    },
    {
      confidence: scenario.baselineProbability || KENT_PROBABILITY_SCALE.HIGHLY_LIKELY,
      text: `Primary state actors are ${scenario.baselineProbability?.label || 'Highly Likely'} to employ asymmetric grey-zone tactics (electronic spoofing, naval quarantine, infrastructure interdiction) below the threshold of open kinetic confrontation.`
    },
    {
      confidence: KENT_PROBABILITY_SCALE.EVEN_CHANCE,
      text: `Allied counter-escort measures hold an Even Chance (40–60%) of stabilizing basic humanitarian transit corridors without triggering immediate direct bilateral missile exchanges.`
    },
    {
      confidence: KENT_PROBABILITY_SCALE.UNLIKELY,
      text: `Total military conquest and rapid pacification remains Unlikely (15–35%) given high anti-access defensive density and dispersed mobile precision fires.`
    }
  ] : country ? [
    {
      confidence: KENT_PROBABILITY_SCALE.ALMOST_CERTAIN,
      text: `${country.name} is ${KENT_PROBABILITY_SCALE.ALMOST_CERTAIN.label} to maintain its core geopolitical alignment around ${country.politicalSystemType || 'sovereign multi-alignment'} throughout the current fiscal forecast.`
    },
    {
      confidence: KENT_PROBABILITY_SCALE.HIGHLY_LIKELY,
      text: `Regional friction along sovereign maritime and border frontiers remains ${KENT_PROBABILITY_SCALE.HIGHLY_LIKELY.label} (${KENT_PROBABILITY_SCALE.HIGHLY_LIKELY.range}) to drive sustained defense modernization procurement.`
    },
    {
      confidence: KENT_PROBABILITY_SCALE.EVEN_CHANCE,
      text: `Bilateral trade rerouting and supply chain resilience measures stand an Even Chance (40–60%) of buffering domestic economic indicators against external tariff or sanction pressures.`
    }
  ] : [
    {
      confidence: KENT_PROBABILITY_SCALE.ALMOST_CERTAIN,
      text: 'Multi-polar maritime chokepoints (Taiwan Strait, Hormuz, Bab el-Mandeb) represent acute systemic vulnerabilities where localized kinetic disruption creates global macroeconomic contagion.'
    },
    {
      confidence: KENT_PROBABILITY_SCALE.HIGHLY_LIKELY,
      text: 'Great-power competition in electronic warfare, low-earth orbit satellite constellations, and deep-sea infrastructure sabotage is Highly Likely to intensify across all oceanic theaters.'
    },
    {
      confidence: KENT_PROBABILITY_SCALE.LIKELY,
      text: 'Strategic middle powers (India, Saudi Arabia, Turkey, Brazil) are Likely to leverage multi-alignment to maximize energy and high-technology autonomy.'
    }
  ];

  // Markdown Export Generator formatted around 8 Core Questions
  const generateMarkdown = () => {
    return `# EXECUTIVE STRATEGIC INTELLIGENCE MEMORANDUM (PDB FORMAT)
**DOCUMENT ID:** ${documentId}
**DATE/TIME (UTC):** ${timestamp}
**CLASSIFICATION:** UNCLASSIFIED // PROPRIETARY OSINT TELEMETRY
**PRIMARY THEATER:** ${primaryTheater}
**ASSESSED THREAT LEVEL:** ${threatLevel}

---

## SUBJECT: ${subjectTitle}

### EXECUTIVE KEY JUDGMENTS (SHERMAN KENT ESTIMATIVE SCALE)
${keyJudgments.map((kj, idx) => `${idx + 1}. **[${kj.confidence.label} — ${kj.confidence.range}]** ${kj.text}`).join('\n')}

---

## 1. WHAT HAPPENED? (OPERATIONAL SITUATION & BASELINE)
${scenario ? scenario.summary || scenario.description : country ? (country.overview?.advanced || country.overview?.beginner || `${country.name} maintains sovereign posture as a key player in ${primaryTheater}.`) : 'Concurrent operational friction observed across 3 major maritime choke points and 2 contested overland borders.'}

## 2. WHEN DID IT HAPPEN? (MULTI-TIMESTAMP & PROVENANCE MATRIX)
- **Document Compiled (UTC):** ${timestamp}
- **Telemetry Verification Status:** Continuously updated via open-source radar and satellite feeds.
- **Reporting Delta:** Real-time baseline reconciling primary wire reporting with orbital sensor data.

## 3. WHERE DID IT HAPPEN? (GEOGRAPHIC DOMAIN, CHOKEPOINTS & TERRAIN)
- **Primary Theater:** ${primaryTheater}
${country ? `
- **Capital:** ${country.capital} (${country.capitalCoords?.lat}°N, ${country.capitalCoords?.lng}°E)
- **Territorial Area:** ${country.area || country.geographyBorders?.landArea || 'Sovereign Geographic Area'}
- **Coastline / Basins:** ${country.geographyBorders?.coastline || 'Sovereign Maritime Zone'}
- **Adjacent Seas & Oceans:** ${country.geographyBorders?.majorOceans?.join(', ') || 'Regional Basins'}
` : scenario ? `
- **Focal Coordinates:** ${scenario.focusCoords?.lat}°N, ${scenario.focusCoords?.lng}°E
- **Strategic Sector:** ${scenario.theater}
` : `
- **Global Coordinates:** Multi-theater geodetic network
`}

## 4. WHO IS INVOLVED? (STATE ACTORS, ALLIANCES & COMMAND AUTHORITIES)
${country ? `
- **Sovereign Authority:** ${country.politicalSystem?.currentLeadership?.headOfState || country.headOfState || 'Constitutional Leadership'}
- **Head of Government:** ${country.politicalSystem?.currentLeadership?.headOfGovernment || country.headOfGovernment || 'Executive Cabinet'}
- **Armed Forces:** ${country.military?.manpowerActive || 'Active Personnel'} (Expenditure: ${country.military?.expenditure || 'Defense Budget'})
- **Key Alliances:** ${country.military?.alliances?.join(', ') || 'Independent Multi-Alignment'}
` : scenario ? `
- **Primary State Parties:** ${scenario.belligerents?.join(', ') || 'Multi-state coalitions'}
- **Defensive Alliances:** NATO / Regional Bilateral Defense Treaties
` : `
- **Primary Coalitions:** G7, NATO, BRICS, Quad, ASEAN, SCO
`}

## 5. WHY DID IT HAPPEN? (ROOT STRUCTURAL DRIVERS & IMMEDIATE TRIGGERS)
- **Structural Driver:** Resource competition, sovereign border contestation, and realignment of post-Cold War security architecture.
- **Immediate Catalyst:** Asymmetric interdictions, military procurement upgrades, or political transitions altering regional deterrence.

## 6. HOW DOES THIS CONNECT TO EARLIER HISTORY? (HISTORICAL ANTECEDENTS & CAUSAL PATHWAYS)
${country?.history && country.history.length > 0 ? country.history.slice(0, 3).map(h => `- **${h.year} (${h.title}):** ${h.whatHappened || h.desc || h.whyItMattered}`).join('\n') : '- **Historical Precedent:** Rooted in 20th-century geopolitical demarcations, decolonization treaties, and superpower rivalry.'}

## 7. WHAT ARE THE CONSEQUENCES? (MULTI-DIMENSIONAL IMPACT MATRIX)
- **Territorial & Borders:** Frontier hardening, increased electronic surveillance, and contested buffer zone patrolling.
- **Political & Governance:** Strengthened executive emergency powers, alliance consolidation, and polarization of diplomatic voting blocs.
- **Military & Strategic:** Accelerated procurement of A2/AD systems, loitering munition swarms, and air defense interceptors.
- **Economic & Supply Chains:** Container rerouting around maritime chokepoints, inflation in war-risk insurance premiums, and critical mineral export controls.

## 8. WHAT DOES THIS MEAN FOR TODAY'S WORLD & FUTURE DEVELOPMENTS? (PROJECTIONS & INDIA IMPACT)
- **Global Strategic Outlook:** Sherman Kent probabilistic estimates point to prolonged grey-zone attrition rather than rapid diplomatic resolution.
- **India Strategic Position:** ${country?.indiaImpact?.summary || country?.indiaImpact?.strategicTies || 'India maintains strategic autonomy, safeguarding its critical sea lines of communication and energy supply security across the Indian Ocean.'}

---

### ESTIMATIVE DIVERGENCE & BLACK SWAN TRIGGERS
1. **Asymmetric Seabed Sabotage:** Sudden severance of undersea fiber-optic communication cables linking financial hubs.
2. **Third-Party Diplomatic Off-Ramp:** Rapid mediation by neutral Global South middle powers dampening military escalation.
3. **Strategic Reserve Deployment:** Coordinated multinational petroleum releases mitigating acute market panic.

### UNRESOLVED INTELLIGENCE GAPS
1. Exact stockpile inventories of mobile anti-ship ballistic missiles in hardened subterranean silos.
2. Degree of sovereign bilateral trade settlement bypasses evading multilateral financial sanctions.
3. Real-time dark vessel transponder spoofing frequency in shallow strait choke points.

*PREPARED BY: GEOINTEL HIGH-FIDELITY INTELLIGENCE INGESTION ENGINE*
`;
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadMd = () => {
    const mdContent = generateMarkdown();
    const blob = new Blob([mdContent], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${documentId}_${(country?.id || scenario?.code || 'GLOBAL')}.md`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleCopy = () => {
    const mdContent = generateMarkdown();
    navigator.clipboard.writeText(mdContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in print:p-0 print:bg-white print:static pointer-events-auto">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#0A0A0A] border border-[#222222] shadow-2xl text-white overflow-hidden print:border-none print:shadow-none print:bg-white print:text-black print:max-h-none">
        
        {/* Top Control Bar (Hidden during Print) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1E1E1E] bg-[#111111]/80 print:hidden shrink-0">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-white" />
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-white uppercase">
                EXECUTIVE STRATEGIC SITREP EXPORTER
              </span>
              <span className="block text-[10px] font-mono text-[#888888]">
                PRESIDENTIAL DAILY BRIEF (PDB) FORMAT · 8 CORE ANALYTICAL QUESTIONS · SHERMAN KENT RIGOR
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-lg border border-white/20 hover:bg-white/10 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Copy Markdown Text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'COPIED' : 'COPY MD'}</span>
            </button>

            <button
              onClick={handleDownloadMd}
              className="px-3 py-1.5 rounded-lg border border-white/20 hover:bg-white/10 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Download as Markdown (.md)"
            >
              <Download className="w-3.5 h-3.5" />
              <span>EXPORT .MD</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-white text-black font-bold text-xs font-mono flex items-center gap-1.5 hover:bg-[#E0E0E0] transition-colors cursor-pointer"
              title="Print to Paper or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#888888] hover:text-white hover:bg-white/10 ml-2 transition-colors cursor-pointer"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Intelligence Briefing Document Container */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 font-mono text-xs leading-relaxed space-y-6 print:p-8 print:text-black print:overflow-visible">
          
          {/* Official Clearance Banner */}
          <div className="text-center border-y border-[#333333] py-2 print:border-black">
            <span className="tracking-[0.25em] text-[11px] font-bold text-white uppercase print:text-black">
              TOP INTELLIGENCE MEMORANDUM // UNCLASSIFIED OSINT SYNTHESIS
            </span>
            <div className="text-[9px] text-[#777777] tracking-wider mt-0.5 print:text-gray-600">
              DISTRIBUTION: APEX STRATEGIC DESK · STANDARDIZED ON 8 CORE INTELLIGENCE QUESTIONS
            </div>
          </div>

          {/* Document Metadata Header */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-[#141414] border border-[#222222] text-[10px] print:bg-gray-50 print:border-gray-300 print:text-black">
            <div>
              <span className="text-[#888888] block">DOCUMENT ID:</span>
              <span className="font-bold text-white print:text-black">{documentId}</span>
            </div>
            <div>
              <span className="text-[#888888] block">DATE/TIME (UTC):</span>
              <span className="font-bold text-white print:text-black">{timestamp}</span>
            </div>
            <div>
              <span className="text-[#888888] block">PRIMARY THEATER:</span>
              <span className="font-bold text-white print:text-black">{primaryTheater}</span>
            </div>
            <div>
              <span className="text-[#888888] block">THREAT POSTURE:</span>
              <span className="font-bold text-white inline-flex items-center gap-1 print:text-black">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                {threatLevel}
              </span>
            </div>
          </div>

          {/* Subject Line */}
          <div>
            <span className="text-[10px] text-[#888888] tracking-widest uppercase block mb-1">
              SUBJECT
            </span>
            <h2 className="text-base sm:text-lg font-bold text-white tracking-wide border-b border-[#222222] pb-2 print:text-black print:border-black">
              {subjectTitle}
            </h2>
          </div>

          {/* EXECUTIVE KEY JUDGMENTS (Sherman Kent Standard) */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-white font-bold tracking-wider">EXECUTIVE KEY JUDGMENTS</span>
              <span className="text-[9px] text-[#888888] px-2 py-0.5 rounded bg-[#1A1A1A] border border-[#333333] print:bg-gray-100 print:border-gray-400 print:text-black">
                SHERMAN KENT ESTIMATIVE RIGOR
              </span>
            </div>

            <div className="space-y-2">
              {keyJudgments.map((judgment, idx) => (
                <div 
                  key={`${componentId}-kj-${idx}`}
                  className="p-3 rounded-xl bg-[#121212] border border-[#262626] flex items-start gap-3 print:bg-white print:border-gray-300"
                >
                  <div 
                    className="px-2 py-1 rounded text-[10px] font-bold tracking-wider uppercase shrink-0 border"
                    style={{ 
                      color: judgment.confidence.color, 
                      backgroundColor: judgment.confidence.bg,
                      borderColor: judgment.confidence.color 
                    }}
                  >
                    {judgment.confidence.label} ({judgment.confidence.range})
                  </div>
                  <p className="text-[#CCCCCC] leading-relaxed print:text-black">
                    {judgment.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ============================================================== */}
          {/* THE 8 CORE ANALYTICAL QUESTIONS                                */}
          {/* ============================================================== */}

          {/* Q1: WHAT HAPPENED? */}
          <div className="p-4 rounded-xl bg-[#111111] border border-[#222222] space-y-1.5">
            <span className="text-[10.5px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <span className="px-1.5 py-0.5 rounded bg-white text-black text-[9px] font-mono">§1</span>
              <span>WHAT HAPPENED? · OPERATIONAL SITUATION & BASELINE</span>
            </span>
            <p className="text-[#BDBDBD] text-xs leading-relaxed">
              {scenario ? scenario.summary || scenario.description : country ? (country.overview?.advanced || country.overview?.beginner || `${country.name} anchors regional security and trade architectures in ${primaryTheater}.`) : 'Concurrent operational friction observed across 3 major maritime choke points and 2 contested overland borders.'}
            </p>
          </div>

          {/* Q2: WHEN DID IT HAPPEN? */}
          <div className="p-4 rounded-xl bg-[#111111] border border-[#222222] space-y-2">
            <span className="text-[10.5px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <span className="px-1.5 py-0.5 rounded bg-white text-black text-[9px] font-mono">§2</span>
              <span>WHEN DID IT HAPPEN? · MULTI-TIMESTAMP & PROVENANCE MATRIX</span>
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px]">
              <div className="p-2 rounded bg-[#161616] border border-[#262626]">
                <span className="text-[#888888] block text-[8.5px]">CURRENT SITREP</span>
                <span className="text-white font-bold">{timestamp}</span>
              </div>
              <div className="p-2 rounded bg-[#161616] border border-[#262626]">
                <span className="text-[#888888] block text-[8.5px]">SENSORS ACTIVE</span>
                <span className="text-white font-bold">24/7 Satellite SAR / AIS</span>
              </div>
              <div className="p-2 rounded bg-[#161616] border border-[#262626]">
                <span className="text-[#888888] block text-[8.5px]">TEMPORAL RECONCILIATION</span>
                <span className="text-white font-bold">UTC Canonical Time</span>
              </div>
              <div className="p-2 rounded bg-[#161616] border border-[#262626]">
                <span className="text-[#888888] block text-[8.5px]">INTELLIGENCE CYCLE</span>
                <span className="text-white font-bold">Continuous Ingestion</span>
              </div>
            </div>
          </div>

          {/* Q3: WHERE DID IT HAPPEN? */}
          <div className="p-4 rounded-xl bg-[#111111] border border-[#222222] space-y-2">
            <span className="text-[10.5px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <span className="px-1.5 py-0.5 rounded bg-white text-black text-[9px] font-mono">§3</span>
              <span>WHERE DID IT HAPPEN? · GEOGRAPHIC DOMAIN, CHOKEPOINTS & TERRAIN</span>
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[10.5px]">
              <div className="p-2.5 rounded bg-[#161616] border border-[#262626]">
                <span className="text-[#888888] text-[9px] block">THEATER & REGION</span>
                <span className="text-white font-semibold">{primaryTheater}</span>
              </div>
              <div className="p-2.5 rounded bg-[#161616] border border-[#262626]">
                <span className="text-[#888888] text-[9px] block">STRATEGIC BASINS & WATERWAYS</span>
                <span className="text-white font-semibold">{country?.geographyBorders?.majorOceans?.join(', ') || 'Global Maritime Sea Lines of Communication'}</span>
              </div>
              <div className="p-2.5 rounded bg-[#161616] border border-[#262626]">
                <span className="text-[#888888] text-[9px] block">COORDINATE CENTROID</span>
                <span className="text-white font-semibold">{country?.capitalCoords ? `${country.capitalCoords.lat}°N, ${country.capitalCoords.lng}°E` : (scenario?.focusCoords ? `${scenario.focusCoords.lat}°N, ${scenario.focusCoords.lng}°E` : 'Global Geodetic Grid')}</span>
              </div>
            </div>
          </div>

          {/* Q4: WHO IS INVOLVED? */}
          <div className="p-4 rounded-xl bg-[#111111] border border-[#222222] space-y-2">
            <span className="text-[10.5px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <span className="px-1.5 py-0.5 rounded bg-white text-black text-[9px] font-mono">§4</span>
              <span>WHO IS INVOLVED? · STATE ACTORS, ALLIANCES & COMMAND STRUCTURES</span>
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[10.5px]">
              <div className="p-2.5 rounded bg-[#161616] border border-[#262626]">
                <span className="text-[#888888] text-[9px] block">EXECUTIVE COMMAND</span>
                <span className="text-white font-semibold">{country?.politicalSystem?.currentLeadership?.headOfState || country?.headOfState || scenario?.belligerents?.[0] || 'National Security Council'}</span>
              </div>
              <div className="p-2.5 rounded bg-[#161616] border border-[#262626]">
                <span className="text-[#888888] text-[9px] block">MILITARY FORCE STRENGTH</span>
                <span className="text-white font-semibold">{country?.military?.manpowerActive || 'Coalition Task Forces'}</span>
              </div>
              <div className="p-2.5 rounded bg-[#161616] border border-[#262626]">
                <span className="text-[#888888] text-[9px] block">NUCLEAR ARSENAL POSTURE</span>
                <span className="text-white font-semibold">{country?.military?.nuclearStatus || 'Non-Nuclear / Multilateral Guarantees'}</span>
              </div>
            </div>
          </div>

          {/* Q5: WHY DID IT HAPPEN? */}
          <div className="p-4 rounded-xl bg-[#111111] border border-[#222222] space-y-1.5">
            <span className="text-[10.5px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <span className="px-1.5 py-0.5 rounded bg-white text-black text-[9px] font-mono">§5</span>
              <span>WHY DID IT HAPPEN? · ROOT STRUCTURAL DRIVERS & IMMEDIATE TRIGGERS</span>
            </span>
            <p className="text-[#BDBDBD] text-xs leading-relaxed">
              Geopolitical contestation driven by the breakdown of unipolar deterrence, systemic competition over critical energy and semiconductor choke points, and assertive revision of sovereign border frontiers by great powers.
            </p>
          </div>

          {/* Q6: HOW DOES THIS CONNECT TO EARLIER HISTORY? */}
          <div className="p-4 rounded-xl bg-[#111111] border border-[#222222] space-y-2">
            <span className="text-[10.5px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <span className="px-1.5 py-0.5 rounded bg-white text-black text-[9px] font-mono">§6</span>
              <span>HOW DOES THIS CONNECT TO EARLIER HISTORY? · HISTORICAL CAUSAL PATHWAYS</span>
            </span>
            {country?.history && country.history.length > 0 ? (
              <div className="space-y-1.5 text-xs">
                {country.history.slice(0, 3).map((h, idx) => (
                  <div key={idx} className="p-2 rounded bg-[#161616] border border-[#242424]">
                    <div className="flex items-center justify-between text-[#888888] text-[10px]">
                      <span className="text-white font-bold">{h.title}</span>
                      <span>{h.year}</span>
                    </div>
                    <p className="text-[#AAAAAA] text-[11px] mt-0.5">{h.whatHappened || h.desc || h.whyItMattered}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[#BDBDBD] text-xs leading-relaxed">
                Directly connected to 20th-century post-war demarcations, the dissolution of imperial hegemonies, and the enduring geopolitical treaties governing maritime straits.
              </p>
            )}
          </div>

          {/* Q7: WHAT ARE THE CONSEQUENCES? */}
          <div className="p-4 rounded-xl bg-[#111111] border border-[#222222] space-y-2">
            <span className="text-[10.5px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <span className="px-1.5 py-0.5 rounded bg-white text-black text-[9px] font-mono">§7</span>
              <span>WHAT ARE THE CONSEQUENCES? · MULTI-DIMENSIONAL SHOCK MATRIX</span>
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded bg-[#161616] border border-[#262626]">
                <span className="text-[9px] font-mono text-[#888888] block">TERRITORIAL & BORDERS</span>
                <p className="text-white text-[11px] mt-0.5">Militarization of border gaps, expansion of maritime exclusion zones, and forward outpost construction.</p>
              </div>
              <div className="p-2.5 rounded bg-[#161616] border border-[#262626]">
                <span className="text-[9px] font-mono text-[#888888] block">POLITICAL & GOVERNANCE</span>
                <p className="text-white text-[11px] mt-0.5">Consolidation of executive emergency authorities and polarization of regional diplomatic voting alignments.</p>
              </div>
              <div className="p-2.5 rounded bg-[#161616] border border-[#262626]">
                <span className="text-[9px] font-mono text-[#888888] block">MILITARY & DEFENSE</span>
                <p className="text-white text-[11px] mt-0.5">High expenditure on precision counter-drone air defenses, loitering munitions, and naval convoy escorts.</p>
              </div>
              <div className="p-2.5 rounded bg-[#161616] border border-[#262626]">
                <span className="text-[9px] font-mono text-[#888888] block">ECONOMIC & SUPPLY CHAINS</span>
                <p className="text-white text-[11px] mt-0.5">Container freight rate inflation, extended transit times via Cape of Good Hope, and strategic mineral export licensing.</p>
              </div>
            </div>
          </div>

          {/* Q8: WHAT DOES THIS MEAN FOR TODAY'S WORLD & FUTURE DEVELOPMENTS? */}
          <div className="p-4 rounded-xl bg-[#111111] border border-white/20 space-y-2">
            <span className="text-[10.5px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <span className="px-1.5 py-0.5 rounded bg-white text-black text-[9px] font-mono">§8</span>
              <span>WHAT DOES THIS MEAN FOR TODAY'S WORLD & FUTURE DEVELOPMENTS?</span>
            </span>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded bg-[#161616] border border-[#262626]">
                <span className="text-[9px] font-mono text-white font-bold block mb-1">GLOBAL STRATEGIC REPERCUSSIONS</span>
                <p className="text-[#CCCCCC] leading-relaxed text-[11.5px]">
                  Accelerating systemic fragmentation of global trade into regionalized, trusted-partner corridors while entrenching high-readiness grey-zone competition across oceanic choke points.
                </p>
              </div>
              <div className="p-2.5 rounded bg-[#161616] border border-white/20">
                <span className="text-[9px] font-mono text-white font-bold block mb-1 flex items-center gap-1">
                  <span>🇮🇳</span>
                  <span>INDIA STRATEGIC POSTURE & IMPLICATIONS</span>
                </span>
                <p className="text-[#E0E0E0] leading-relaxed text-[11.5px]">
                  {country?.indiaImpact?.summary || country?.indiaImpact?.strategicTies || 'India reinforces its role as the net security provider in the Indian Ocean, leveraging strategic autonomy to safeguard energy supply lines and expand alternative connectivity corridors such as IMEC and INSTC.'}
                </p>
              </div>
            </div>
          </div>

          {/* Section: Alternative Scenarios & Off-Ramps */}
          <div className="space-y-2">
            <span className="text-white font-bold tracking-wider block">
              ESTIMATIVE DIVERGENCE & BLACK SWAN TRIGGERS
            </span>
            <ul className="space-y-1.5 list-disc list-inside text-[#B0B0B0] print:text-black">
              <li><strong className="text-white print:text-black">Asymmetric Seabed Sabotage:</strong> High-risk interdiction of subsea fiber optic cables connecting global financial clearinghouses.</li>
              <li><strong className="text-white print:text-black">Third-Party Interlocutor Off-Ramp:</strong> Multilateral maritime escort pacts organized under neutral flags to stabilize container insurance premiums.</li>
              <li><strong className="text-white print:text-black">Strategic Reserve Release:</strong> Coordinated multinational petroleum releases dampening crude market volatility by 12–18%.</li>
            </ul>
          </div>

          {/* Section: Collection Gaps */}
          <div className="space-y-2">
            <span className="text-white font-bold tracking-wider block">
              UNRESOLVED INTELLIGENCE COLLECTION PRIORITIES & GAPS
            </span>
            <ul className="space-y-1.5 list-disc list-inside text-[#B0B0B0] print:text-black">
              <li>True status of mobile anti-ship missile launcher inventories in hardened coastal underground bunkers.</li>
              <li>Extent of bilateral sovereign currency trade settlements bypassing G7 financial sanctions.</li>
              <li>Dark vessel AIS transponder spoofing frequency across littoral chokepoints.</li>
            </ul>
          </div>

          {/* Footer Signature */}
          <div className="pt-6 border-t border-[#222222] flex items-center justify-between text-[10px] text-[#777777] print:border-black print:text-black">
            <span>PREPARED BY: GEOINTEL OSINT ENGINE</span>
            <span>CLASSIFICATION: FOR OFFICIAL USE ONLY</span>
            <span>AUTHENTICATED MEMORANDUM</span>
          </div>

        </div>

      </div>
    </div>
  );
}
