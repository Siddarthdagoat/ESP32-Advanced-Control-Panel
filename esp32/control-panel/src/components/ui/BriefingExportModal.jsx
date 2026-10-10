import React, { useState, useId } from 'react';
import { FileText, Printer, Download, Copy, Check, X, ShieldAlert, Sparkles, AlertTriangle } from 'lucide-react';
import { KENT_PROBABILITY_SCALE } from '../../data/geointelScenarios';

export default function BriefingExportModal({
  isOpen,
  onClose,
  country,
  scenario,
  globalContext
}) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('executive'); // 'executive' | 'full'
  const componentId = useId();

  if (!isOpen) return null;

  const timestamp = new Date().toUTCString();
  const documentId = `GEOINTEL-SITREP-${Math.floor(100000 + Math.random() * 900000)}`;

  // Determine Subject Matter
  const subjectTitle = scenario 
    ? `SCENARIO CRISIS SITREP: ${scenario.title}`
    : country 
    ? `NATIONAL STRATEGIC DOSSIER: ${country.name.toUpperCase()} (${country.id})`
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
      text: `${country.name} is ${KENT_PROBABILITY_SCALE.ALMOST_CERTAIN.label} to maintain its core geopolitical alignment around ${country.alliances?.[0]?.name || 'sovereign multi-alignment'} throughout the current fiscal forecast.`
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

  // Markdown Export Generator
  const generateMarkdown = () => {
    return `# EXECUTIVE STRATEGIC INTELLIGENCE MEMORANDUM
**DOCUMENT ID:** ${documentId}
**DATE/TIME (UTC):** ${timestamp}
**CLASSIFICATION:** UNCLASSIFIED // PROPRIETARY OSINT ANALYSIS
**THEATER:** ${primaryTheater}
**ASSESSED THREAT LEVEL:** ${threatLevel}

---

## 1. SUBJECT
**${subjectTitle}**

## 2. EXECUTIVE KEY JUDGMENTS (SHERMAN KENT ESTIMATIVE SCALE)
${keyJudgments.map((kj, idx) => `${idx + 1}. **[${kj.confidence.label} — ${kj.confidence.range}]** ${kj.text}`).join('\n')}

---

## 3. OPERATIONAL SITUATION & THREAT MATRIX
${scenario ? `
- **Baseline Theater:** ${scenario.theater}
- **Assessed Trigger:** ${scenario.summary}
- **Cascade Metrics:**
  - Crude Oil Shock: ${scenario.phases[1]?.metrics.crudeOilBbl || '$105/bbl'} (${scenario.phases[1]?.metrics.bblDelta || '+$20'})
  - Container Freight: ${scenario.phases[1]?.metrics.containerFreightTEU || '$6,500/TEU'}
  - Semiconductor Supply Disruption: ${scenario.phases[1]?.metrics.semiconductorDisruption || '45% delay'}
  - Estimated Global GDP Loss: ${scenario.phases[1]?.metrics.gdpLossBillion || '$800B'}
` : country ? `
- **Official Title:** ${country.officialName || country.name}
- **Capital:** ${country.capital}
- **Strategic Doctrine:** ${country.dossier?.strategicDoctrine?.overview || 'National sovereignty and regional power projection.'}
- **Active Military Manpower:** ${country.military?.activePersonnel || 'N/A'}
- **Nuclear Capability:** ${country.military?.nuclearStatus || 'Non-Nuclear Weapon State'}
` : `
- **Active Theaters:** Eastern Europe, Western Pacific, Middle East, Red Sea, Arctic.
- **Critical Sensors:** Live AIS tracking active; ADS-B reconnaissance orbits active; NASA FIRMS satellite thermal strike monitors active.
`}

---

## 4. ALTERNATIVE SCENARIOS & BLACK SWAN TRIGGERS
- **Scenario A (Rapid De-escalation):** Multilateral diplomatic mediation via neutral interlocutors establishes monitored humanitarian buffer zones.
- **Scenario B (Kinetic Horizontal Escalation):** Asymmetric retaliation spreads to critical undersea communications cables or satellite datalinks.
- **Scenario C (Protracted Economic Attrition):** Permanent trade rerouting via Cape of Good Hope or overland continental corridors becomes institutionalized.

---

## 5. INTELLIGENCE COLLECTION PRIORITIES & GAPS
1. Real-time satellite imagery over mobile anti-ship missile launcher concealment sites.
2. Undersea acoustic hydrophone telemetry across shallow strait submarine channels.
3. Merchant shipping reinsurance underwriting thresholds and war-risk cancellation clauses.

*PREPARED BY: GEOINTEL CONTINUOUS GLOBAL INTELLIGENCE INGESTION ENGINE*
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in print:p-0 print:bg-white print:static">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#0A0A0A] border border-[#222222] shadow-2xl text-white overflow-hidden print:border-none print:shadow-none print:bg-white print:text-black print:max-h-none">
        
        {/* Top Control Bar (Hidden during Print) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1E1E1E] bg-[#111111]/80 print:hidden">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-white" />
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-white uppercase">
                STRATEGIC SITREP EXPORTER
              </span>
              <span className="block text-[10px] font-mono text-[#888888]">
                PRESIDENTIAL DAILY BRIEF (PDB) FORMAT · SHERMAN KENT ESTIMATIVE RIGOR
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
              <span>PRINT / SAVE PDF</span>
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
              TOP INTELLIGENCE BRIEFING // UNCLASSIFIED OSINT ANALYSIS
            </span>
            <div className="text-[9px] text-[#777777] tracking-wider mt-0.5 print:text-gray-600">
              DISTRIBUTION: STRATEGIC PLANNING DESK · VERIFIED BY GEOINTEL TELEMETRY
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

          {/* Section 1: Executive Key Judgments with Sherman Kent Standard */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-white font-bold tracking-wider">1. EXECUTIVE KEY JUDGMENTS</span>
              <span className="text-[9px] text-[#888888] px-2 py-0.5 rounded bg-[#1A1A1A] border border-[#333333] print:bg-gray-100 print:border-gray-400 print:text-black">
                SHERMAN KENT ESTIMATIVE RIGOR
              </span>
            </div>

            <div className="space-y-2.5">
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

          {/* Section 2: Operational Threat Assessment & Metrics */}
          <div className="space-y-3">
            <span className="text-white font-bold tracking-wider block">
              2. OPERATIONAL THREAT MATRIX & SUPPLY CHAIN TELEMETRY
            </span>

            {scenario ? (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-lg bg-[#141414] border border-[#222222] print:bg-gray-50 print:border-gray-300">
                  <span className="text-[10px] text-[#888888] block">CRUDE OIL SHOCK</span>
                  <span className="text-sm font-bold text-white print:text-black">{scenario.phases[1]?.metrics.crudeOilBbl || '$105'}</span>
                  <span className="text-[9px] text-[#AAAAAA] block mt-0.5">{scenario.phases[1]?.metrics.bblDelta}</span>
                </div>
                <div className="p-3 rounded-lg bg-[#141414] border border-[#222222] print:bg-gray-50 print:border-gray-300">
                  <span className="text-[10px] text-[#888888] block">CONTAINER FREIGHT</span>
                  <span className="text-sm font-bold text-white print:text-black">{scenario.phases[1]?.metrics.containerFreightTEU || '$6,800'}</span>
                  <span className="text-[9px] text-[#AAAAAA] block mt-0.5">{scenario.phases[1]?.metrics.freightDelta}</span>
                </div>
                <div className="p-3 rounded-lg bg-[#141414] border border-[#222222] print:bg-gray-50 print:border-gray-300">
                  <span className="text-[10px] text-[#888888] block">SEMICONDUCTOR FLOW</span>
                  <span className="text-sm font-bold text-white print:text-black">{scenario.phases[1]?.metrics.semiconductorDisruption || '45%'}</span>
                  <span className="text-[9px] text-[#AAAAAA] block mt-0.5">Critical Fab Delay</span>
                </div>
                <div className="p-3 rounded-lg bg-[#141414] border border-[#222222] print:bg-gray-50 print:border-gray-300">
                  <span className="text-[10px] text-[#888888] block">SPR BUFFER REMAINING</span>
                  <span className="text-sm font-bold text-white print:text-black">{scenario.phases[1]?.metrics.sprDaysRemaining || 145} Days</span>
                  <span className="text-[9px] text-[#AAAAAA] block mt-0.5">IEA Member Stock</span>
                </div>
              </div>
            ) : country ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-lg bg-[#141414] border border-[#222222] print:bg-gray-50 print:border-gray-300">
                  <span className="text-[10px] text-[#888888] block">MILITARY MANPOWER</span>
                  <span className="text-sm font-bold text-white print:text-black">{country.military?.activePersonnel || 'N/A'} Active</span>
                  <span className="text-[9px] text-[#AAAAAA] block mt-0.5">{country.military?.reservePersonnel || '0'} Reserve</span>
                </div>
                <div className="p-3 rounded-lg bg-[#141414] border border-[#222222] print:bg-gray-50 print:border-gray-300">
                  <span className="text-[10px] text-[#888888] block">DEFENSE EXPENDITURE</span>
                  <span className="text-sm font-bold text-white print:text-black">{country.military?.budget || 'N/A'}</span>
                  <span className="text-[9px] text-[#AAAAAA] block mt-0.5">{country.military?.gdpShare || '2.1%'} of GDP</span>
                </div>
                <div className="p-3 rounded-lg bg-[#141414] border border-[#222222] print:bg-gray-50 print:border-gray-300">
                  <span className="text-[10px] text-[#888888] block">NUCLEAR ARSENAL POSTURE</span>
                  <span className="text-sm font-bold text-white print:text-black">{country.military?.nuclearWarheads ? `${country.military.nuclearWarheads} Warheads` : 'Non-Nuclear'}</span>
                  <span className="text-[9px] text-[#AAAAAA] block mt-0.5">{country.military?.nuclearStatus || 'Signatory NPT'}</span>
                </div>
              </div>
            ) : (
              <p className="text-[#AAAAAA] leading-relaxed print:text-black">
                Sensor arrays indicate simultaneous friction points across 3 major maritime choke points and 2 contested overland borders. Strategic reserves remain sufficient for 160 days under standard rationing protocols.
              </p>
            )}
          </div>

          {/* Section 3: Alternative Scenarios & Off-Ramps */}
          <div className="space-y-2">
            <span className="text-white font-bold tracking-wider block">
              3. ESTIMATIVE DIVERGENCE & BLACK SWAN TRIGGERS
            </span>
            <ul className="space-y-1.5 list-disc list-inside text-[#B0B0B0] print:text-black">
              <li><strong className="text-white print:text-black">Asymmetric Seabed Sabotage:</strong> High-risk interdiction of subsea fiber optic cables connecting financial clearinghouses.</li>
              <li><strong className="text-white print:text-black">Third-Party Interlocutor Off-Ramp:</strong> Multilateral maritime escort pacts organized under neutral flags to stabilize container insurance premiums.</li>
              <li><strong className="text-white print:text-black">Strategic Reserve Release:</strong> Coordinated multinational petroleum release dampening market panic by 12–18%.</li>
            </ul>
          </div>

          {/* Section 4: Collection Gaps */}
          <div className="space-y-2">
            <span className="text-white font-bold tracking-wider block">
              4. UNRESOLVED INTELLIGENCE GAPS
            </span>
            <ul className="space-y-1.5 list-disc list-inside text-[#B0B0B0] print:text-black">
              <li>True status of mobile anti-ship missile launcher inventories in coastal underground bunkers.</li>
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
