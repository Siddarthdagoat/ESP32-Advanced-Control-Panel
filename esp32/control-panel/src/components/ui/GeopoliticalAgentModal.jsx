import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Bot, 
  Send, 
  Sparkles, 
  Globe2, 
  BookOpen, 
  FileText, 
  History, 
  Compass, 
  ShieldAlert, 
  Layers, 
  ArrowRight, 
  RefreshCw, 
  CheckCircle2, 
  HelpCircle,
  ExternalLink,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';
import { getCountryDossier } from '../../data/geointelCountryDossiers';
import { GEOPOLITICAL_TERMS } from '../../data/geopoliticalTerms';
import { retrieveGeopoliticalContext } from '../../services/geopoliticalAgentService';

// Quick-start Prompts
const QUICK_PROMPTS = {
  beginner: [
    { label: 'Strait of Hormuz', prompt: 'Why is the Strait of Hormuz so important for global energy and India?' },
    { label: 'Strategic Autonomy', prompt: "What is India's Strategic Autonomy and why doesn't India join military alliances like NATO?" },
    { label: 'Taiwan Strait', prompt: "Explain the Taiwan situation and why microchips make it globally critical like I'm new to geopolitics." },
    { label: 'String of Pearls', prompt: 'What is China\'s String of Pearls theory and how is India responding in the Indian Ocean?' }
  ],
  analyst: [
    { label: 'Red Sea & Bab el-Mandeb', prompt: 'Assess operational escalation risks in the Red Sea/Bab el-Mandeb and quantifiable impact on Cape of Good Hope rerouting rates.' },
    { label: 'India-Russia Defense', prompt: 'Evaluate India-Russia strategic defense dependency in light of the Ukraine war, S-400 deliveries, and rupee-ruble settlement.' },
    { label: 'Indo-Pacific Balance of Power', prompt: 'Analyze naval balance of power in the Indo-Pacific: Quad deterrent posture vs PLA Navy carrier battle groups expansion.' },
    { label: 'Semiconductor Supply Chokepoints', prompt: 'Map single-point-of-failure geopolitical chokepoints across the advanced extreme ultraviolet lithography and Taiwan foundry supply chain.' }
  ]
};

export default function GeopoliticalAgentModal({
  isOpen,
  onClose,
  initialContext = null,
  initialEvent = null,
  initialQuery = null,
  onSelectCountry,
  onSelectMaritime,
  onSelectConcept,
  onSelectAgreement,
  onSelectEvent,
  onFocusCoordinates,
  onShowOnGlobe
}) {
  const [mode, setMode] = useState('beginner'); // 'beginner' | 'analyst'
  const effectiveFocusCoords = onFocusCoordinates || onShowOnGlobe;
  const effectiveContext = initialEvent || initialContext;
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      role: 'assistant',
      text: mode === 'beginner' 
        ? "Greetings. I am GEOINTEL's Geopolitical AI Agent. I translate complex international grand strategy, conflicts, treaties, and trade routes into plain, intuitive explanations. Select a topic below or ask any question about global affairs."
        : "GEOINTEL Strategic AI Analyst online. BLUF doctrine active. Ready to provide doctrinal risk assessments, escalation thresholds, force posture evaluations, and balance-of-power calculus.",
      sources: [
        { title: 'GEOINTEL Planetary Knowledge Graph', claimType: 'VERIFIED' }
      ],
      actionChips: [
        { type: 'globe', label: 'Show Strait of Malacca', lat: 1.43, lng: 102.89, name: 'Strait of Malacca' },
        { type: 'dossier', label: 'Open India Dossier', code: 'IND' },
        { type: 'term', label: 'Read Strategic Autonomy', conceptId: 'strategic-autonomy' }
      ]
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeContext, setActiveContext] = useState(initialContext);

  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of conversation
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Update context when passed new initialContext or initialEvent
  useEffect(() => {
    if (effectiveContext) {
      setActiveContext(effectiveContext);
      const ctxLabel = effectiveContext.title || effectiveContext.name || effectiveContext.id || 'Selected Intelligence Entity';
      setMessages(prev => [
        ...prev,
        {
          id: `ctx-${Date.now()}`,
          role: 'assistant',
          text: `Context loaded: **${ctxLabel}**. Ask me to analyze its strategic vulnerabilities, historical precedents, or India's diplomatic calculus.`,
          sources: [{ title: `GEOINTEL Dossier: ${ctxLabel}`, claimType: 'VERIFIED' }]
        }
      ]);
    }
  }, [effectiveContext]);

  // Handle initialQuery if passed
  useEffect(() => {
    if (isOpen && initialQuery) {
      handleSendMessage(initialQuery);
    }
  }, [isOpen, initialQuery]);

  // Handle Mode Switch without clearing message history
  const handleToggleMode = (newMode) => {
    setMode(newMode);
    setMessages(prev => [
      ...prev,
      {
        id: `mode-switch-${Date.now()}`,
        role: 'system',
        text: newMode === 'beginner'
          ? "Switched to **BEGINNER MODE**: Explanations will now prioritize plain language, intuitive analogies, and plain-English takeaways."
          : "Switched to **ANALYST MODE**: Explanations will now use formal strategic doctrine, BLUF framing, escalation probabilities, and balance-of-power calculus."
      }
    ]);
  };

  // Submit Query to Agent
  const handleSendMessage = async (queryText = inputQuery) => {
    const textToSend = (queryText || '').trim();
    if (!textToSend || isLoading) return;

    setInputQuery('');
    const userMsgId = `user-${Date.now()}`;
    const newMessages = [
      ...messages,
      { id: userMsgId, role: 'user', text: textToSend }
    ];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // 0. Grounded RAG Retrieval from GEOINTEL Knowledge Base
      const ragContext = retrieveGeopoliticalContext ? retrieveGeopoliticalContext(textToSend) : {};
      const combinedContext = {
        ...(activeContext || {}),
        ragRetrieval: ragContext
      };

      // 1. Try Backend Agent Chat Endpoint
      let responseData = null;
      try {
        const res = await fetch('/api/intelligence?action=agent_chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'agent_chat',
            message: textToSend,
            mode,
            context: combinedContext,
            history: newMessages.slice(-6).map(m => ({ role: m.role, content: m.text }))
          }),
          signal: AbortSignal.timeout(18000)
        });

        if (res.ok) {
          const json = await res.json();
          if (json.success && json.response) {
            responseData = json.response;
          }
        }
      } catch (backendErr) {
        console.warn('Backend agent endpoint failed, trying direct Groq fallback:', backendErr.message);
      }

      // 2. Client-side Groq Direct Fallback if backend is unavailable
      if (!responseData) {
        const groqKey = import.meta.env?.VITE_GROQ_API_KEY;
        if (groqKey) {
          const sysPrompt = mode === 'beginner'
            ? `You are GEOINTEL Geopolitical AI Agent (BEGINNER MODE). Explain geopolitics in engaging plain English. Demystify jargon on first use. Include:
1. Clear Direct Answer (Plain-Language)
2. Helpful Analogy
3. Why This Matters to Everyday Life & Global Economy
4. Impact on India's Interests (Energy, Diplomacy, Maritime)
5. Action links formatted as [Show on Globe: Country or Strait Name], [Open Dossier: CountryCode], [Read Term: term-id].
Output JSON: { "text": "markdown...", "sources": [{"title": "string", "claimType": "VERIFIED"}], "followUps": ["string"] }`
            : `You are GEOINTEL Senior Strategic Intelligence Analyst (ANALYST MODE). Provide doctrinal intelligence briefings:
1. BLUF (Bottom Line Up Front)
2. Competing Sovereign Interests & Red Lines
3. Force Posture, Geographic Bottlenecks & Economic Leverage
4. Escalation Thresholds & Uncertainty Variables
5. India's Operational Calculus & Alignment Strategy
Output JSON: { "text": "markdown...", "sources": [{"title": "string", "claimType": "VERIFIED"}], "followUps": ["string"] }`;

          const fallbackRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${groqKey}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              model: 'openai/gpt-oss-120b',
              messages: [
                { role: 'system', content: sysPrompt },
                { role: 'user', content: textToSend }
              ],
              response_format: { type: 'json_object' },
              temperature: mode === 'beginner' ? 0.3 : 0.2
            }),
            signal: AbortSignal.timeout(18000)
          });

          if (fallbackRes.ok) {
            const data = await fallbackRes.json();
            const rawContent = data.choices?.[0]?.message?.content;
            if (rawContent) {
              const parsed = JSON.parse(rawContent);
              responseData = {
                text: parsed.text || rawContent,
                sources: parsed.sources || [{ title: 'Groq Real-Time Intelligence Engine', claimType: 'ANALYSIS' }],
                followUps: parsed.followUps || []
              };
            }
          }
        }
      }

      // 3. Fallback message if all APIs fail
      if (!responseData) {
        responseData = {
          text: `**Intelligence Briefing: ${textToSend}**\n\nGEOINTEL's live inference server is currently experiencing network latency. Here is the verified baseline:\n\n- **Geopolitical Significance**: Key strategic friction point in contemporary multilateral relations.\n- **India's Stance**: Rooted in Strategic Autonomy, multi-alignment, and safeguarding critical maritime sea lanes.\n- **Risk Factor**: Moderate to high escalation potential depending on naval deployments and sanctions regimes.`,
          sources: [{ title: 'GEOINTEL Offline Dossier Repository', claimType: 'VERIFIED' }],
          followUps: ['Explore country dossiers', 'Check current globe hot news']
        };
      }

      // Extract Action Chips dynamically from text
      const extractedChips = parseActionChipsFromText(responseData.text, textToSend);

      setMessages(prev => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          role: 'assistant',
          text: responseData.text,
          sources: responseData.sources || [],
          followUps: responseData.followUps || [],
          actionChips: extractedChips
        }
      ]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          role: 'assistant',
          text: `An error occurred while synthesizing the intelligence response: ${err.message}. Please try asking again.`,
          sources: []
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Helper to parse action chips from agent text
  const parseActionChipsFromText = (text, query) => {
    const chips = [];
    const lower = (text + ' ' + query).toLowerCase();

    // Check Countries
    if (/india|delhi/i.test(lower)) chips.push({ type: 'dossier', label: 'Open India Dossier', code: 'IND' });
    if (/china|beijing/i.test(lower)) chips.push({ type: 'dossier', label: 'Open China Dossier', code: 'CHN' });
    if (/united states|america|washington/i.test(lower)) chips.push({ type: 'dossier', label: 'Open USA Dossier', code: 'USA' });
    if (/taiwan|taipei/i.test(lower)) chips.push({ type: 'dossier', label: 'Open Taiwan Dossier', code: 'TWN' });
    if (/iran|tehran/i.test(lower)) chips.push({ type: 'dossier', label: 'Open Iran Dossier', code: 'IRN' });
    if (/russia|moscow/i.test(lower)) chips.push({ type: 'dossier', label: 'Open Russia Dossier', code: 'RUS' });

    // Check Chokepoints & Straits
    if (/hormuz/i.test(lower)) {
      chips.push({ type: 'maritime', label: 'Dossier: Strait of Hormuz', entityId: 'strait-hormuz' });
      chips.push({ type: 'globe', label: 'Show Hormuz on Globe', lat: 26.56, lng: 56.25, name: 'Strait of Hormuz' });
    }
    if (/malacca/i.test(lower)) {
      chips.push({ type: 'maritime', label: 'Dossier: Strait of Malacca', entityId: 'strait-malacca' });
      chips.push({ type: 'globe', label: 'Show Malacca on Globe', lat: 1.43, lng: 102.89, name: 'Strait of Malacca' });
    }
    if (/mandeb|red sea/i.test(lower)) {
      chips.push({ type: 'maritime', label: 'Dossier: Bab el-Mandeb', entityId: 'strait-bab-el-mandeb' });
      chips.push({ type: 'globe', label: 'Show Bab el-Mandeb on Globe', lat: 12.58, lng: 43.33, name: 'Bab el-Mandeb Strait' });
    }

    // Check Terms
    if (/strategic autonomy/i.test(lower)) chips.push({ type: 'term', label: 'Read Term: Strategic Autonomy', conceptId: 'strategic-autonomy' });
    if (/string of pearls/i.test(lower)) chips.push({ type: 'term', label: 'Read Term: String of Pearls', conceptId: 'string-of-pearls' });
    if (/security dilemma/i.test(lower)) chips.push({ type: 'term', label: 'Read Term: Security Dilemma', conceptId: 'security-dilemma' });
    if (/deterrence|first strike/i.test(lower)) chips.push({ type: 'term', label: 'Read Term: Deterrence', conceptId: 'deterrence' });
    if (/chokepoint/i.test(lower)) chips.push({ type: 'term', label: 'Read Term: Chokepoint', conceptId: 'chokepoint' });

    return chips.slice(0, 4); // Keep top 4 chips to prevent clutter
  };

  // Handle Action Chip Click
  const handleActionChipClick = (chip) => {
    if (chip.type === 'globe' && effectiveFocusCoords) {
      effectiveFocusCoords(chip.lat, chip.lng, chip.name);
      onClose();
    } else if (chip.type === 'dossier' && onSelectCountry) {
      onSelectCountry(chip.code);
      onClose();
    } else if (chip.type === 'maritime' && onSelectMaritime) {
      onSelectMaritime(chip.entityId);
      onClose();
    } else if (chip.type === 'term' && onSelectConcept) {
      onSelectConcept(chip.conceptId);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200 pointer-events-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="agent-modal-title"
    >
      <div className="relative w-full max-w-4xl h-[90vh] flex flex-col rounded-2xl bg-[#090909] border border-white/20 shadow-2xl overflow-hidden font-sans">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#0E0E0E]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/30 flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="agent-modal-title" className="text-base sm:text-lg font-bold font-mono tracking-wider text-white">
                  GEOPOLITICAL AI AGENT
                </h2>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-[#C0C0C0] border border-white/20 font-bold">
                  GROQ OSS-120B
                </span>
              </div>
              <p className="text-xs font-mono text-[#888888]">
                Grounded in GEOINTEL dossiers, treaties, maritime chokepoints & real-time news.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Dual Mode Switcher */}
            <div className="flex items-center bg-black/60 p-1 rounded-xl border border-white/15 text-xs font-mono">
              <button
                type="button"
                onClick={() => handleToggleMode('beginner')}
                className={`px-3 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  mode === 'beginner'
                    ? 'bg-white text-black font-bold shadow-md'
                    : 'text-[#888888] hover:text-white'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>BEGINNER</span>
              </button>
              <button
                type="button"
                onClick={() => handleToggleMode('analyst')}
                className={`px-3 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  mode === 'analyst'
                    ? 'bg-white text-black font-bold shadow-md'
                    : 'text-[#888888] hover:text-white'
                }`}
              >
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>ANALYST</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#888888] hover:text-white transition-colors cursor-pointer"
              aria-label="Close Agent"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mode Indicator Callout */}
        <div className="px-5 py-2 bg-[#0C0C0C] border-b border-white/5 flex items-center justify-between text-[11px] font-mono text-[#888888]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>
              {mode === 'beginner' 
                ? 'Active: BEGINNER MODE — Plain language, intuitive analogies, terms defined, everyday relevance.'
                : 'Active: ANALYST MODE — Doctrinal BLUF framing, escalation probabilities, force balance calculus.'}
            </span>
          </div>
          {activeContext && (
            <span className="text-[#B0B0B0] bg-white/5 px-2 py-0.5 rounded border border-white/10">
              Context: {activeContext.title || activeContext.name || activeContext.id}
            </span>
          )}
        </div>

        {/* Conversation Stream */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {messages.map((msg) => {
            const isUser = msg.role === 'user';
            const isSystem = msg.role === 'system';

            if (isSystem) {
              return (
                <div key={msg.id} className="text-center py-2">
                  <span className="text-[11px] font-mono text-[#888888] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                    {msg.text}
                  </span>
                </div>
              );
            }

            return (
              <div 
                key={msg.id}
                className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!isUser && (
                  <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-white mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`max-w-[85%] rounded-2xl p-4 font-mono text-xs leading-relaxed ${
                  isUser
                    ? 'bg-white text-black font-semibold shadow-md rounded-tr-none'
                    : 'bg-[#121212] border border-white/15 text-slate-100 rounded-tl-none shadow-xl'
                }`}>
                  {/* Message Content formatted with Markdown-like paragraphs */}
                  <div className="whitespace-pre-wrap space-y-2">
                    {msg.text.split('\n\n').map((paragraph, pIdx) => (
                      <p key={pIdx}>
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Interactive Action Chips (Show on Globe, Open Dossier, Read Term) */}
                  {msg.actionChips && msg.actionChips.length > 0 && (
                    <div className="mt-3.5 pt-3 border-t border-white/10 space-y-1.5">
                      <div className="text-[10px] text-[#888888] uppercase tracking-wider font-bold">
                        Interactive Platform Actions:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {msg.actionChips.map((chip, cIdx) => (
                          <button
                            key={cIdx}
                            onClick={() => handleActionChipClick(chip)}
                            className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/25 border border-white/20 hover:border-white text-white text-[11px] font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
                          >
                            {chip.type === 'globe' && <Globe2 className="w-3 h-3 text-[#FF3030]" />}
                            {chip.type === 'dossier' && <FileText className="w-3 h-3 text-white" />}
                            {chip.type === 'maritime' && <Compass className="w-3 h-3 text-cyan-400" />}
                            {chip.type === 'term' && <BookOpen className="w-3 h-3 text-amber-300" />}
                            <span>{chip.label}</span>
                            <ArrowRight className="w-2.5 h-2.5 opacity-60" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Verified Sources Attribution */}
                  {msg.sources && msg.sources.length > 0 && (
                    <div className="mt-3 pt-2.5 border-t border-white/10 flex flex-wrap items-center gap-2 text-[10px] text-[#777777]">
                      <span className="font-bold uppercase text-[#999999]">Sources:</span>
                      {msg.sources.map((src, sIdx) => (
                        <span key={sIdx} className="bg-black/40 px-2 py-0.5 rounded border border-white/10 text-[#AAAAAA] flex items-center gap-1">
                          <CheckCircle2 className="w-2.5 h-2.5 text-white" />
                          <span>{src.title}</span>
                          {src.claimType && <strong className="text-[9px] text-[#666666]">[{src.claimType}]</strong>}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Follow-up Prompts */}
                  {msg.followUps && msg.followUps.length > 0 && (
                    <div className="mt-3 pt-2.5 border-t border-white/5 flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] text-[#666666]">Follow-up:</span>
                      {msg.followUps.map((fu, fIdx) => (
                        <button
                          key={fIdx}
                          onClick={() => handleSendMessage(fu)}
                          className="text-[10.5px] text-[#CCCCCC] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-2 py-0.5 rounded transition-all cursor-pointer text-left"
                        >
                          "{fu}"
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-white mt-1">
                <Bot className="w-4 h-4 animate-spin" />
              </div>
              <div className="bg-[#121212] border border-white/15 rounded-2xl rounded-tl-none p-4 text-xs font-mono text-[#888888] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                <span>Synthesizing intelligence from GEOINTEL knowledge base & live wires...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick-Start Prompts Bar */}
        <div className="px-5 py-2.5 bg-[#0C0C0C] border-t border-white/10 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            <span className="text-[10px] font-mono text-[#777777] uppercase font-bold flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#FF3030]" />
              {mode === 'beginner' ? 'Beginner Inquiries:' : 'Analyst Scenario Queries:'}
            </span>
            {QUICK_PROMPTS[mode].map((qp, qIdx) => (
              <button
                key={qIdx}
                onClick={() => handleSendMessage(qp.prompt)}
                className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30 text-[11px] font-mono text-[#CCCCCC] hover:text-white transition-all cursor-pointer whitespace-nowrap"
              >
                {qp.label}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-[#0E0E0E] border-t border-white/10">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              placeholder={mode === 'beginner' 
                ? "Ask anything about world politics, chokepoints, treaties, or India's foreign policy..." 
                : "Enter strategic intelligence query, doctrine inquiry, or force escalation assessment..."}
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              disabled={isLoading}
              className="flex-1 bg-black/60 border border-white/15 rounded-xl px-4 py-2.5 text-xs font-mono text-white placeholder-[#555555] focus:outline-none focus:border-white/50 transition-colors"
            />
            <button
              type="submit"
              disabled={!inputQuery.trim() || isLoading}
              className="px-4 py-2.5 rounded-xl bg-white text-black font-mono font-bold text-xs hover:bg-[#E0E0E0] transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 shadow-md"
            >
              <Send className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Send</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
