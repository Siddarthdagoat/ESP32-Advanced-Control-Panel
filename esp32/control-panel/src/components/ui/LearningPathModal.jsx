import React, { useState } from 'react';
import { 
  X, 
  GraduationCap, 
  BookOpen, 
  CheckCircle2, 
  ChevronRight, 
  ArrowRight, 
  Globe2, 
  Compass, 
  HelpCircle, 
  ShieldAlert, 
  Sparkles,
  Layers,
  FileText
} from 'lucide-react';

export const LEARNING_LESSONS = [
  {
    id: 1,
    title: '1. What is Geopolitics?',
    subtitle: 'Geography, Power, and How States Fight to Survive',
    coreIdea: 'Geopolitics is the study of how physical geography—mountains, coastlines, rivers, climate, and natural resources—shapes international relations, national power, and foreign policy decisions. Unlike political leaders or ideologies which change, geography is permanent: a country cannot pack up and move to a safer neighborhood.',
    whyItMatters: 'Whether a nation has warm-water sea ports, fertile plains to feed its citizens, or defensible mountain borders determines whether it flourishes as a global trading power or constantly prepares for foreign invasion.',
    caseStudy: {
      headline: 'The North European Plain: Russia\'s Geographic Insecurity',
      text: 'Russia has been invaded through the flat North European Plain multiple times (Napoleon in 1812, Germany in 1914 and 1941). Because there are no natural barriers between Berlin and Moscow, Russian strategic doctrine has historically prioritized maintaining "buffer states" to its west.',
      focus: { name: 'North European Plain Corridor', lat: 55.75, lng: 37.61, country: 'RUS' }
    },
    terms: ['sovereignty', 'buffer-state', 'balance-of-power'],
    indiaAngle: 'India is shielded by the Himalayas to the north and commands the central Indian Ocean to the south, making its maritime and continental strategies distinct.',
    reflection: 'Why do landlocked nations face far greater economic and diplomatic constraints than nations with long ocean coastlines?'
  },
  {
    id: 2,
    title: '2. The Power of Geography',
    subtitle: 'Landmasses, Rimlands, and Maritime Supremacy',
    coreIdea: 'Geopolitical theorists historically divided the world into continental "Heartlands" (the vast Eurasian landmass) and maritime "Rimlands" (coastal nations with access to sea trade). Naval powers like the US and UK rely on open seas for commerce, while land powers prioritize large standing armies and continental rail corridors.',
    whyItMatters: 'Over 80% of global trade by volume travels by sea. Controlling maritime access routes gives nations immense economic leverage over rivals without firing a single shot.',
    caseStudy: {
      headline: 'The First Island Chain in the Western Pacific',
      text: 'A string of archipelagos stretching from Japan through Taiwan to the Philippines creates a natural geographic boundary for China\'s naval access to the deep Pacific Ocean. This makes Taiwan not just a political dispute, but a critical geographic gateway.',
      focus: { name: 'Taiwan Strait & First Island Chain', lat: 24.0, lng: 121.0, country: 'TWN' }
    },
    terms: ['chokepoint', 'hegemony', 'deterrence'],
    indiaAngle: 'The Andaman and Nicobar Islands give India an unsinkable aircraft carrier overlooking the western approaches to the Malacca Strait.',
    reflection: 'How does island geography give a small country outsized naval influence over a continental superpower?'
  },
  {
    id: 3,
    title: '3. Strategic Chokepoints',
    subtitle: 'The Narrow Arteries of Global Energy and Trade',
    coreIdea: 'A chokepoint is a narrow geographic waterway through which massive volumes of global commercial shipping must pass. If a chokepoint is blocked by war, piracy, or accidents, alternative routes require thousands of miles of detour, driving up fuel costs and inflation worldwide.',
    whyItMatters: 'When ships through the Suez Canal or Red Sea are disrupted, container ships must sail around Africa\'s Cape of Good Hope, adding 10 to 14 days and hundreds of thousands of dollars in freight costs per voyage.',
    caseStudy: {
      headline: 'The Strait of Hormuz: The World\'s Oil Jugular',
      text: 'Only 33 kilometers wide at its narrowest point, the Strait of Hormuz connects the Persian Gulf to the open ocean. Approximately 20-21 million barrels of oil—one fifth of global consumption—transit this single strait daily.',
      focus: { name: 'Strait of Hormuz', lat: 26.56, lng: 56.25, chokepoint: 'strait-hormuz' }
    },
    terms: ['chokepoint', 'security-dilemma'],
    indiaAngle: 'India imports over 85% of its crude oil, with more than 60% flowing directly through the Strait of Hormuz from Gulf producers.',
    reflection: 'If a major chokepoint is closed for 30 days, what immediate impacts occur at local petrol pumps and grocery stores?'
  },
  {
    id: 4,
    title: '4. Alliances, Treaties & Blocs',
    subtitle: 'Collective Defense vs Strategic Coalitions',
    coreIdea: 'Nations form alliances to deter adversaries and pool security costs. Formal defense treaties (like NATO Article 5) legally obligate members to treat an attack on one as an attack on all. Informal coalitions (like the Quad or BRICS) focus on flexible economic coordination or maritime security dialogues without mutual defense treaties.',
    whyItMatters: 'Alliances prevent small conflicts from being fought in isolation, but also risk dragging multiple nuclear-armed powers into regional border clashes.',
    caseStudy: {
      headline: 'NATO Expansion and the Transatlantic Security Architecture',
      text: 'Founded in 1949 with 12 nations, NATO expanded to 32 members following the accession of Finland and Sweden. The collective defense guarantee is credited with preventing direct great-power warfare in Europe during the Cold War.',
      focus: { name: 'NATO Headquarters & Baltic Corridor', lat: 50.85, lng: 4.35, country: 'USA' }
    },
    terms: ['balance-of-power', 'security-dilemma', 'sovereignty'],
    indiaAngle: 'India famously avoids joining formal military pacts, preferring bilateral defense partnerships and multilateral groupings like Quad, BRICS, and SCO simultaneously.',
    reflection: 'What are the main advantages and drawbacks of signing a mutual defense treaty with a superpower?'
  },
  {
    id: 5,
    title: '5. Nuclear Deterrence & Stability',
    subtitle: 'Mutually Assured Destruction and Red Lines',
    coreIdea: 'Nuclear deterrence rests on the premise that a nuclear-armed state cannot be attacked with existential force because its counter-strike capability guarantees unacceptable retaliatory damage (Mutually Assured Destruction / MAD). To maintain credible deterrence, states deploy a "Nuclear Triad": land-based silos, strategic bombers, and ballistic missile submarines.',
    whyItMatters: 'Nuclear weapons have prevented direct all-out wars between superpowers since 1945, but they also lower the threshold for conventional proxy wars beneath the nuclear ceiling.',
    caseStudy: {
      headline: 'The 1962 Cuban Missile Crisis',
      text: 'When the Soviet Union deployed nuclear ballistic missiles to Cuba—90 miles from Florida—the world stood on the brink of nuclear war. The crisis was resolved through backchannel diplomacy and mutual missile withdrawals from Cuba and Turkey.',
      focus: { name: 'Caribbean Strategic Theater', lat: 21.5, lng: -79.0, country: 'USA' }
    },
    terms: ['deterrence', 'first-strike', 'security-dilemma'],
    indiaAngle: 'India maintains a strict "No First Use" (NFU) nuclear doctrine combined with an operational submarine-based second-strike triad (INS Arihant).',
    reflection: 'Why is a ballistic missile submarine considered the most survivable leg of the nuclear triad?'
  },
  {
    id: 6,
    title: '6. India\'s Strategic Doctrine',
    subtitle: 'From Non-Alignment to Strategic Autonomy and Multi-Alignment',
    coreIdea: 'India\'s foreign policy is guided by Strategic Autonomy: the principle that New Delhi refuses to become a junior ally or satellite in any superpower bloc. Instead, India maintains sovereign decision-making freedom by engaging multiple competing power centers simultaneously based on national interest.',
    whyItMatters: 'Strategic Autonomy allows India to buy defense systems from Russia, coordinate maritime surveillance with the US, trade heavily with China, and build ports in Iran, without sacrificing its independent foreign policy.',
    caseStudy: {
      headline: 'India\'s Energy and Diplomatic Stance During the Ukraine Conflict',
      text: 'Despite immense diplomatic pressure from Western capitals to join sanction regimes, India prioritized energy affordability for its 1.4 billion citizens by purchasing discounted Russian crude oil, refining it, and remaining an active interlocutor for peaceful resolution.',
      focus: { name: 'New Delhi & Strategic Indian Ocean Arc', lat: 28.61, lng: 77.20, country: 'IND' }
    },
    terms: ['strategic-autonomy', 'string-of-pearls', 'balance-of-power'],
    indiaAngle: 'India\'s "Security and Growth for All in the Region" (SAGAR) and "Neighbourhood First" policies operationalize this doctrine across the Indian Ocean.',
    reflection: 'Why is Strategic Autonomy more challenging to sustain during times of sharp global polarization?'
  },
  {
    id: 7,
    title: '7. Resource Geopolitics',
    subtitle: 'Oil, Gas, Critical Minerals, and Semiconductor Foundries',
    coreIdea: 'The modern economy runs on specialized physical materials: oil and gas for base energy, lithium and cobalt for electric vehicle batteries, rare earth elements for advanced radar and missile guidance, and semiconductor microchips for computing power. Geographic monopolies over these resources create immense geopolitical leverage.',
    whyItMatters: 'A single Taiwanese semiconductor foundry (TSMC) produces over 90% of the world\'s most advanced sub-7nm microchips. An interruption in production would halt global electronics and automotive manufacturing within weeks.',
    caseStudy: {
      headline: 'China\'s Rare Earth Refining Dominance',
      text: 'While rare earth minerals exist worldwide, China controls over 60% of extraction and more than 85% of global processing and magnet manufacturing, giving Beijing significant leverage in international trade disputes.',
      focus: { name: 'East Asian High-Tech & Resource Corridor', lat: 31.23, lng: 121.47, country: 'CHN' }
    },
    terms: ['chokepoint', 'hegemony'],
    indiaAngle: 'India launched the India Semiconductor Mission (ISM) and secured lithium exploration blocks in Argentina to build indigenous supply chain resilience.',
    reflection: 'Why is refining and processing critical minerals often a bigger strategic bottleneck than simply mining them?'
  },
  {
    id: 8,
    title: '8. Grey-Zone & Hybrid Threats',
    subtitle: 'Cyber Operations, Subsea Cables, and Information Warfare',
    coreIdea: 'Grey-zone conflict encompasses aggressive state actions that fall deliberately below the threshold of conventional warfare (Article 5 trigger). This includes cyber-attacks against critical power grids, cutting undersea fiber-optic internet cables, using maritime militias disguised as fishing trawlers, and psychological disinformation campaigns.',
    whyItMatters: 'Over 95% of all transcontinental internet and financial data travels through thin fiber-optic cables resting on the ocean floor. Severing a cable can sever an entire nation from the global economy.',
    caseStudy: {
      headline: 'Subsea Cable Severances in the Red Sea & Baltic Sea',
      text: 'In 2024, multiple critical communication cables passing through the shallow Bab el-Mandeb strait were damaged, disrupting nearly 25% of data traffic between Asia, the Middle East, and Europe.',
      focus: { name: 'Bab el-Mandeb Subsea Fiber Route', lat: 12.58, lng: 43.33, chokepoint: 'strait-bab-el-mandeb' }
    },
    terms: ['security-dilemma', 'deterrence', 'sovereignty'],
    indiaAngle: 'Mumbai and Chennai serve as India\'s primary international submarine cable landing stations, handling virtually all financial and internet traffic.',
    reflection: 'Why are grey-zone tactics so difficult for democratic alliances to counter effectively?'
  }
];

export default function LearningPathModal({
  isOpen,
  onClose,
  onSelectConcept,
  onSelectCountry,
  onSelectMaritime,
  onFocusCoordinates,
  onExploreOnGlobe
}) {
  const [activeLessonId, setActiveLessonId] = useState(1);
  const effectiveFocusCoords = onFocusCoordinates || onExploreOnGlobe;

  if (!isOpen) return null;

  const currentLesson = LEARNING_LESSONS.find(l => l.id === activeLessonId) || LEARNING_LESSONS[0];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200 pointer-events-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="learning-modal-title"
    >
      <div className="relative w-full max-w-5xl h-[92vh] flex flex-col rounded-2xl bg-[#090909] border border-white/20 shadow-2xl overflow-hidden font-sans">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#0E0E0E]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="learning-modal-title" className="text-base sm:text-lg font-bold font-mono tracking-wider text-white">
                  GEOPOLITICAL LEARNING PATH
                </h2>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold">
                  8-PART FOUNDATION
                </span>
              </div>
              <p className="text-xs font-mono text-[#888888]">
                Master the fundamental doctrines, maritime routes, and grand strategies shaping global power.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#888888] hover:text-white transition-colors cursor-pointer"
            aria-label="Close Learning Path"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Lesson Progress Stepper Strip */}
        <div className="px-5 py-3 bg-[#0C0C0C] border-b border-white/10 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            {LEARNING_LESSONS.map((lesson) => {
              const isSelected = lesson.id === activeLessonId;
              const isCompleted = lesson.id < activeLessonId;

              return (
                <button
                  key={lesson.id}
                  onClick={() => setActiveLessonId(lesson.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center gap-2 transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-white text-black border-white shadow-md'
                      : isCompleted
                      ? 'bg-white/10 text-[#CCCCCC] border-white/20 hover:text-white'
                      : 'bg-black/40 text-[#666666] border-white/5 hover:text-[#AAAAAA]'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                    isSelected
                      ? 'bg-black text-white font-bold'
                      : isCompleted
                      ? 'bg-amber-400 text-black'
                      : 'bg-white/10 text-[#888888]'
                  }`}>
                    {lesson.id}
                  </span>
                  <span>{lesson.title.split('.')[1]?.trim() || lesson.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Lesson Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">
          
          {/* Lesson Header Banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-white/[0.04] to-transparent border border-white/10">
            <div className="flex items-center gap-2 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Lesson {currentLesson.id} of 8</span>
            </div>
            <h3 className="text-lg sm:text-2xl font-bold font-mono text-white">
              {currentLesson.title}
            </h3>
            <p className="text-sm font-mono text-[#AAAAAA] mt-1">
              {currentLesson.subtitle}
            </p>
          </div>

          {/* 1. The Core Idea */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF5555] flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>The Foundational Principle (Plain Language)</span>
            </h4>
            <div className="p-4 rounded-xl bg-[#111111] border border-white/15 text-xs sm:text-sm font-mono text-[#E0E0E0] leading-relaxed">
              {currentLesson.coreIdea}
            </div>
          </div>

          {/* 2. Why It Matters to Everyday Life */}
          <div className="p-4 rounded-xl bg-amber-500/[0.04] border border-amber-500/20 space-y-1">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Why Does This Matter to Everyday Life?</span>
            </h4>
            <p className="text-xs sm:text-sm font-mono text-amber-100/90 leading-relaxed">
              {currentLesson.whyItMatters}
            </p>
          </div>

          {/* 3. Real-World Case Study with Interactive Focus */}
          <div className="p-5 rounded-xl bg-black/60 border border-white/15 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                <Globe2 className="w-3.5 h-3.5 text-[#FF3030]" />
                <span>Real-World Strategic Case Study</span>
              </h4>
              <span className="text-[10px] font-mono text-[#888888]">
                Interactive Field Recon
              </span>
            </div>

            <div className="space-y-1.5">
              <h5 className="text-sm font-mono font-bold text-white">
                {currentLesson.caseStudy.headline}
              </h5>
              <p className="text-xs font-mono text-[#B0B0B0] leading-relaxed">
                {currentLesson.caseStudy.text}
              </p>
            </div>

            {/* Interactive Action Chips for Case Study */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              {currentLesson.caseStudy.focus && (
                <button
                  onClick={() => {
                    if (effectiveFocusCoords) {
                      effectiveFocusCoords(
                        currentLesson.caseStudy.focus.lat,
                        currentLesson.caseStudy.focus.lng,
                        currentLesson.caseStudy.focus.name
                      );
                      onClose();
                    }
                  }}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-mono font-bold text-white flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Globe2 className="w-3.5 h-3.5 text-[#FF3030]" />
                  <span>Explore on 3D Globe: {currentLesson.caseStudy.focus.name}</span>
                </button>
              )}

              {currentLesson.caseStudy.focus?.country && onSelectCountry && (
                <button
                  onClick={() => {
                    onSelectCountry(currentLesson.caseStudy.focus.country);
                    onClose();
                  }}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-mono text-[#CCCCCC] hover:text-white flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Open Dossier: {currentLesson.caseStudy.focus.country}</span>
                </button>
              )}

              {currentLesson.caseStudy.focus?.chokepoint && onSelectMaritime && (
                <button
                  onClick={() => {
                    onSelectMaritime(currentLesson.caseStudy.focus.chokepoint);
                    onClose();
                  }}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-mono text-[#CCCCCC] hover:text-white flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Compass className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Open Maritime Strait Dossier</span>
                </button>
              )}
            </div>
          </div>

          {/* 4. India's Strategic Angle */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <span>🇮🇳</span>
              <span>India's Strategic Calculus</span>
            </h4>
            <p className="text-xs font-mono text-[#C0C0C0] leading-relaxed">
              {currentLesson.indiaAngle}
            </p>
          </div>

          {/* 5. Key Terms to Click & Master */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#888888]">
              Key Geopolitical Terms in This Lesson (Click to Open Explainer):
            </h4>
            <div className="flex flex-wrap gap-2">
              {currentLesson.terms.map(tId => (
                <button
                  key={tId}
                  onClick={() => {
                    if (onSelectConcept) {
                      onSelectConcept(tId);
                    }
                  }}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 border border-white/20 hover:border-white text-xs font-mono font-bold text-white flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <BookOpen className="w-3 h-3 text-amber-300" />
                  <span className="capitalize">{tId.replace(/-/g, ' ')}</span>
                  <ChevronRight className="w-3 h-3 text-[#666666]" />
                </button>
              ))}
            </div>
          </div>

          {/* 6. Test Your Understanding Reflection */}
          <div className="p-4 rounded-xl bg-black/40 border border-dashed border-white/20 space-y-1">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-white flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#FF3030]" />
              <span>Analytical Reflection Question</span>
            </h4>
            <p className="text-xs font-mono italic text-[#A0A0A0]">
              "{currentLesson.reflection}"
            </p>
          </div>

        </div>

        {/* Bottom Navigation Bar */}
        <div className="px-5 py-3 border-t border-white/10 bg-[#0C0C0C] flex items-center justify-between">
          <button
            onClick={() => setActiveLessonId(Math.max(1, activeLessonId - 1))}
            disabled={activeLessonId === 1}
            className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed text-xs font-mono text-[#CCCCCC] transition-colors cursor-pointer"
          >
            ← Previous Lesson
          </button>

          <span className="text-xs font-mono text-[#888888]">
            Progress: Lesson {activeLessonId} of {LEARNING_LESSONS.length}
          </span>

          {activeLessonId < LEARNING_LESSONS.length ? (
            <button
              onClick={() => setActiveLessonId(activeLessonId + 1)}
              className="px-4 py-1.5 rounded-lg bg-white text-black font-mono font-bold text-xs hover:bg-[#E0E0E0] transition-colors flex items-center gap-1.5 cursor-pointer shadow-md"
            >
              <span>Next Lesson</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-amber-400 text-black font-mono font-bold text-xs hover:bg-amber-300 transition-colors cursor-pointer shadow-md"
            >
              Complete Curriculum ✓
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
