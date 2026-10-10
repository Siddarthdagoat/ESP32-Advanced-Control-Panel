import React, { useState, useMemo } from 'react';
import { 
  X, 
  Search, 
  History, 
  Calendar, 
  Globe, 
  ChevronRight, 
  ChevronDown, 
  ExternalLink, 
  ShieldAlert, 
  ArrowRight, 
  ArrowLeft,
  Layers, 
  Compass, 
  BookOpen, 
  CheckCircle2, 
  Info,
  Maximize2
} from 'lucide-react';
import { HISTORICAL_PERIODS, WORLD_HISTORY_EVENTS } from '../../data/history/worldHistoryEvents';
import { SOVIET_15_REPUBLICS, SOVIET_HISTORICAL_ENTITIES_EXPLAINER, POST_SOVIET_STATISTICS } from '../../data/history/sovietRepublicsTransition';
import { HISTORICAL_EMPIRES } from '../../data/history/historicalEmpires';

export default function HistoricalTimelineModal({
  isOpen,
  onClose,
  onSelectCountry,
  onLocateCoords,
  onSelectConcept,
  onSelectAgreement
}) {
  const [activeTab, setActiveTab] = useState('timeline'); // 'timeline' | 'soviet' | 'empires' | 'chains'
  const [selectedPeriod, setSelectedPeriod] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEventId, setSelectedEventId] = useState(WORLD_HISTORY_EVENTS[0]?.id || null);
  const [selectedSovietRepublicId, setSelectedSovietRepublicId] = useState('RUS');
  const [selectedEmpireId, setSelectedEmpireId] = useState('emp_roman');
  const [showEntityExplainer, setShowEntityExplainer] = useState(false);

  // Filtered world history events
  const filteredEvents = useMemo(() => {
    return WORLD_HISTORY_EVENTS.filter(event => {
      const matchesPeriod = selectedPeriod === 'ALL' || event.period === selectedPeriod;
      if (!matchesPeriod) return false;
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      return (
        event.title.toLowerCase().includes(q) ||
        event.year.toLowerCase().includes(q) ||
        event.locationName?.toLowerCase().includes(q) ||
        event.whatHappened?.toLowerCase().includes(q) ||
        event.actors?.some(a => a.toLowerCase().includes(q)) ||
        event.affectedCountries?.some(c => c.toLowerCase().includes(q))
      );
    });
  }, [selectedPeriod, searchQuery]);

  const activeEvent = useMemo(() => {
    return WORLD_HISTORY_EVENTS.find(e => e.id === selectedEventId) || filteredEvents[0] || WORLD_HISTORY_EVENTS[0];
  }, [selectedEventId, filteredEvents]);

  const activeSovietRepublic = useMemo(() => {
    return SOVIET_15_REPUBLICS.find(r => r.id === selectedSovietRepublicId) || SOVIET_15_REPUBLICS[0];
  }, [selectedSovietRepublicId]);

  const activeEmpire = useMemo(() => {
    return HISTORICAL_EMPIRES.find(emp => emp.id === selectedEmpireId) || HISTORICAL_EMPIRES[0];
  }, [selectedEmpireId]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md animate-fade-in pointer-events-auto">
      {/* Modal Container */}
      <div className="relative w-full max-w-6xl h-[92vh] max-h-[900px] flex flex-col bg-[#0A0A0A] border border-[#222222] rounded-2xl shadow-2xl overflow-hidden font-sans text-[#E0E0E0]">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#1A1A1A] bg-[#0E0E0E]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white font-mono text-sm font-bold">
              ◈
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold tracking-widest text-white uppercase">
                  GEOINTEL HISTORICAL INTELLIGENCE & TIMELINE ARCHIVE
                </span>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white text-black font-bold">
                  VERIFIED CHRONOLOGY
                </span>
              </div>
              <p className="text-[10px] font-mono text-[#888888] hidden sm:block">
                Interconnected Global Timeline, The 15 Soviet Republics & Imperial Hegemonic Succession
              </p>
            </div>
          </div>

          {/* Action Tabs & Close */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center p-0.5 rounded-lg bg-[#141414] border border-[#222222] text-[10px] font-mono">
              <button
                onClick={() => setActiveTab('timeline')}
                className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                  activeTab === 'timeline' ? 'bg-white text-black font-bold' : 'text-[#888888] hover:text-white'
                }`}
              >
                WORLD TIMELINE
              </button>
              <button
                onClick={() => setActiveTab('soviet')}
                className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                  activeTab === 'soviet' ? 'bg-white text-black font-bold' : 'text-[#888888] hover:text-white'
                }`}
              >
                15 SOVIET REPUBLICS
              </button>
              <button
                onClick={() => setActiveTab('empires')}
                className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                  activeTab === 'empires' ? 'bg-white text-black font-bold' : 'text-[#888888] hover:text-white'
                }`}
              >
                HISTORICAL EMPIRES
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#141414] hover:bg-[#222222] border border-[#222222] text-[#888888] hover:text-white transition-colors cursor-pointer"
              title="Close Modal (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Tab Navigation Strip */}
        <div className="flex md:hidden items-center justify-around border-b border-[#1A1A1A] bg-[#0E0E0E] text-[10px] font-mono p-1">
          <button
            onClick={() => setActiveTab('timeline')}
            className={`px-2 py-1 rounded transition-all cursor-pointer ${
              activeTab === 'timeline' ? 'bg-white text-black font-bold' : 'text-[#888888]'
            }`}
          >
            TIMELINE
          </button>
          <button
            onClick={() => setActiveTab('soviet')}
            className={`px-2 py-1 rounded transition-all cursor-pointer ${
              activeTab === 'soviet' ? 'bg-white text-black font-bold' : 'text-[#888888]'
            }`}
          >
            15 REPUBLICS
          </button>
          <button
            onClick={() => setActiveTab('empires')}
            className={`px-2 py-1 rounded transition-all cursor-pointer ${
              activeTab === 'empires' ? 'bg-white text-black font-bold' : 'text-[#888888]'
            }`}
          >
            EMPIRES
          </button>
        </div>

        {/* ======================================================== */}
        {/* TAB 1: WORLD HISTORY TIMELINE (PERIODS A through J) */}
        {/* ======================================================== */}
        {activeTab === 'timeline' && (
          <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
            
            {/* Filter Bar: Search + Era Tabs */}
            <div className="p-3 border-b border-[#1A1A1A] bg-[#0B0B0B] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
              
              {/* Search Bar */}
              <div className="relative w-full sm:w-72">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#666666]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search events, treaties, leaders, dates..."
                  className="w-full bg-[#141414] border border-[#222222] rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-[#666666] font-mono focus:outline-none focus:border-white transition-colors"
                />
              </div>

              {/* Period Quick Filter */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none text-[9.5px] font-mono">
                <button
                  onClick={() => setSelectedPeriod('ALL')}
                  className={`px-2.5 py-1 rounded border transition-colors shrink-0 cursor-pointer ${
                    selectedPeriod === 'ALL'
                      ? 'bg-white text-black font-bold border-white'
                      : 'bg-[#111111] text-[#888888] border-[#222222] hover:text-white'
                  }`}
                >
                  ALL ERAS
                </button>
                {HISTORICAL_PERIODS.map(p => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPeriod(p.id)}
                    className={`px-2 py-1 rounded border transition-colors shrink-0 cursor-pointer ${
                      selectedPeriod === p.id
                        ? 'bg-white text-black font-bold border-white'
                        : 'bg-[#111111] text-[#888888] border-[#222222] hover:text-white'
                    }`}
                    title={p.label}
                  >
                    {p.id.replace('PERIOD_', '')}: {p.label.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Split Pane: Timeline List (Left) & Deep Event Intelligence (Right) */}
            <div className="flex-1 flex flex-col lg:flex-row min-h-0 overflow-hidden">
              
              {/* Left Column: Event Cards List */}
              <div className="w-full lg:w-5/12 border-b lg:border-b-0 lg:border-r border-[#1A1A1A] overflow-y-auto p-3 space-y-2 bg-[#090909]">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#666666] px-1 pb-1">
                  <span>{filteredEvents.length} VERIFIED MILESTONES</span>
                  <span>SELECT FOR DEEP DOSSIER</span>
                </div>

                {filteredEvents.map((evt) => {
                  const isSelected = activeEvent?.id === evt.id;
                  return (
                    <div
                      key={evt.id}
                      onClick={() => setSelectedEventId(evt.id)}
                      className={`p-3 rounded-xl border transition-all cursor-pointer relative ${
                        isSelected 
                          ? 'bg-white/10 border-white shadow-lg' 
                          : 'bg-[#111111] border-[#1C1C1C] hover:border-[#333333] hover:bg-[#161616]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-1.5 font-mono">
                            <span className="text-[10px] font-bold text-white px-1.5 py-0.5 rounded bg-[#1F1F1F] border border-[#2A2A2A]">
                              {evt.year}
                            </span>
                            <span className="text-[9px] text-[#888888] uppercase">
                              {evt.periodLabel}
                            </span>
                          </div>
                          <h4 className="text-xs font-semibold text-white mt-1.5 leading-snug">
                            {evt.title}
                          </h4>
                        </div>
                        <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[#AAAAAA] shrink-0 font-bold">
                          FACT
                        </span>
                      </div>

                      <p className="text-[11px] text-[#A0A0A0] line-clamp-2 mt-1.5 leading-relaxed">
                        {evt.whatHappened}
                      </p>

                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#1C1C1C] text-[9.5px] font-mono text-[#666666]">
                        <span className="truncate max-w-[200px]">{evt.locationName}</span>
                        {evt.affectedCountries && evt.affectedCountries.length > 0 && (
                          <div className="flex items-center gap-1">
                            {evt.affectedCountries.slice(0, 4).map(c => (
                              <span key={c} className="px-1 py-0.2 rounded bg-[#181818] border border-[#262626] text-[#888888]">
                                {c}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Column: Comprehensive Event Dossier */}
              <div className="w-full lg:w-7/12 flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-[#0A0A0A]">
                {activeEvent ? (
                  <div className="space-y-4 animate-fade-in">
                    
                    {/* Header Banner */}
                    <div className="p-4 rounded-xl bg-[#111111] border border-[#222222] space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white text-black">
                            {activeEvent.year}
                          </span>
                          <span className="text-[10px] font-mono text-[#888888] uppercase">
                            {activeEvent.periodLabel}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          {onLocateCoords && activeEvent.lat && activeEvent.lng && (
                            <button
                              onClick={() => onLocateCoords(activeEvent.lat, activeEvent.lng, activeEvent.locationName)}
                              className="px-2.5 py-1 rounded bg-[#1C1C1C] hover:bg-white hover:text-black border border-[#2A2A2A] text-white font-mono text-[10px] flex items-center gap-1.5 transition-all cursor-pointer"
                              title="Fly Globe to Epicenter"
                            >
                              <Compass className="w-3.5 h-3.5" />
                              <span>LOCATE ON GLOBE</span>
                            </button>
                          )}
                        </div>
                      </div>

                      <h2 className="text-base sm:text-lg font-bold text-white tracking-wide">
                        {activeEvent.title}
                      </h2>

                      <div className="flex items-center gap-2 text-xs font-mono text-[#888888] pt-1">
                        <Globe className="w-3.5 h-3.5 shrink-0" />
                        <span>{activeEvent.locationName}</span>
                      </div>
                    </div>

                    {/* What Happened (Detailed Occurrence) */}
                    <div className="p-3.5 rounded-xl bg-[#111111] border border-[#1C1C1C] space-y-1.5">
                      <div className="text-[10px] font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                        <span>■</span>
                        <span>DETAILED HISTORICAL OCCURRENCE</span>
                      </div>
                      <p className="text-xs text-[#D0D0D0] leading-relaxed">
                        {activeEvent.whatHappened}
                      </p>
                    </div>

                    {/* Causality Matrix: Root Causes vs Immediate Trigger vs Turning Points */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-[#0F0F0F] border border-[#1A1A1A] space-y-1">
                        <span className="text-[9.5px] font-mono font-bold text-[#888888] uppercase block">
                          ROOT CAUSES & PRECEDING CONDITIONS
                        </span>
                        <p className="text-[11.5px] text-[#B0B0B0] leading-relaxed">
                          {activeEvent.rootCauses || 'Historical systemic and structural pressures.'}
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-[#0F0F0F] border border-[#1A1A1A] space-y-1">
                        <span className="text-[9.5px] font-mono font-bold text-[#888888] uppercase block">
                          IMMEDIATE TRIGGER & SPARK
                        </span>
                        <p className="text-[11.5px] text-[#B0B0B0] leading-relaxed">
                          {activeEvent.immediateTrigger || 'Direct proximate event unleashing escalation.'}
                        </p>
                      </div>
                    </div>

                    {/* Turning Points */}
                    {activeEvent.turningPoints && (
                      <div className="p-3 rounded-xl bg-[#111111] border border-[#1F1F1F] space-y-1">
                        <span className="text-[9.5px] font-mono font-bold text-white uppercase flex items-center gap-1.5">
                          <span>▲</span>
                          <span>CRITICAL TURNING POINTS</span>
                        </span>
                        <p className="text-[11.5px] text-[#CCCCCC] leading-relaxed">
                          {activeEvent.turningPoints}
                        </p>
                      </div>
                    )}

                    {/* Multi-Dimensional Consequences */}
                    <div className="p-3.5 rounded-xl bg-[#0F0F0F] border border-[#1A1A1A] space-y-2.5">
                      <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                        <span>◈</span>
                        <span>MULTI-DIMENSIONAL GEOPOLITICAL CONSEQUENCES</span>
                      </span>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {activeEvent.territorialConsequences && (
                          <div className="p-2 rounded bg-[#141414] border border-[#222222]">
                            <span className="text-[9px] font-mono text-[#888888] block">TERRITORIAL & BORDERS</span>
                            <p className="text-[11px] text-[#D0D0D0] mt-0.5">{activeEvent.territorialConsequences}</p>
                          </div>
                        )}
                        {activeEvent.politicalConsequences && (
                          <div className="p-2 rounded bg-[#141414] border border-[#222222]">
                            <span className="text-[9px] font-mono text-[#888888] block">POLITICAL & GOVERNANCE</span>
                            <p className="text-[11px] text-[#D0D0D0] mt-0.5">{activeEvent.politicalConsequences}</p>
                          </div>
                        )}
                        {activeEvent.militaryConsequences && (
                          <div className="p-2 rounded bg-[#141414] border border-[#222222]">
                            <span className="text-[9px] font-mono text-[#888888] block">MILITARY & STRATEGIC</span>
                            <p className="text-[11px] text-[#D0D0D0] mt-0.5">{activeEvent.militaryConsequences}</p>
                          </div>
                        )}
                        {activeEvent.economicConsequences && (
                          <div className="p-2 rounded bg-[#141414] border border-[#222222]">
                            <span className="text-[9px] font-mono text-[#888888] block">ECONOMIC & TRADE</span>
                            <p className="text-[11px] text-[#D0D0D0] mt-0.5">{activeEvent.economicConsequences}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Connection to Today's World */}
                    {activeEvent.connectionToPresent && (
                      <div className="p-3.5 rounded-xl bg-white/5 border border-white/20 space-y-1">
                        <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-white uppercase">
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>CONNECTION TO PRESENT-DAY GEOPOLITICS & BORDERS</span>
                        </div>
                        <p className="text-xs text-white leading-relaxed font-sans">
                          {activeEvent.connectionToPresent}
                        </p>
                      </div>
                    )}

                    {/* Participating Actors & Affected Countries */}
                    <div className="p-3 rounded-xl bg-[#0D0D0D] border border-[#1A1A1A] space-y-2">
                      <span className="text-[9.5px] font-mono font-bold text-[#888888] uppercase block">
                        KEY ACTORS & AFFECTED NATIONS
                      </span>
                      <div className="flex flex-wrap items-center gap-1.5">
                        {activeEvent.actors?.map(a => (
                          <span key={a} className="px-2 py-0.5 rounded bg-[#141414] border border-[#222222] text-[10px] font-mono text-white">
                            {a}
                          </span>
                        ))}
                        {activeEvent.affectedCountries?.map(c => (
                          <button
                            key={c}
                            onClick={() => onSelectCountry && onSelectCountry(c)}
                            className="px-2 py-0.5 rounded bg-white text-black font-mono text-[10px] font-bold hover:bg-[#DDDDDD] transition-colors cursor-pointer flex items-center gap-1"
                            title={`Open country dossier for ${c}`}
                          >
                            <span>{c}</span>
                            <ArrowRight className="w-2.5 h-2.5" />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Sources & Citations */}
                    <div className="p-2.5 rounded-lg bg-[#0C0C0C] border border-[#1A1A1A] flex items-center justify-between text-[9.5px] font-mono text-[#666666]">
                      <span>SOURCES & ARCHIVES: {activeEvent.sources}</span>
                      <span className="text-white font-bold">STATUS: {activeEvent.confidence}</span>
                    </div>

                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center text-xs font-mono text-[#666666]">
                    Select an event from the timeline to view detailed intelligence.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 2: SOVIET DISSOLUTION & 15 REPUBLICS TRANSITION */}
        {/* ======================================================== */}
        {activeTab === 'soviet' && (
          <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
            
            {/* Top Explainer Strip */}
            <div className="p-3 border-b border-[#1A1A1A] bg-[#0C0C0C] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white uppercase tracking-wider">
                    DISSOLUTION OF THE USSR: THE 15 CONSTITUENT REPUBLICS (DECEMBER 1991)
                  </span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-white text-black font-bold">
                    15 STATES
                  </span>
                </div>
                <p className="text-[10px] text-[#888888]">
                  Historical Accuracy: The USSR was not Russia; Russia is one of 15 successor republics. CIS is not a state.
                </p>
              </div>

              <button
                onClick={() => setShowEntityExplainer(!showEntityExplainer)}
                className="px-2.5 py-1 rounded bg-[#161616] hover:bg-white hover:text-black border border-[#2A2A2A] text-white text-[10px] font-mono transition-all cursor-pointer shrink-0"
              >
                {showEntityExplainer ? 'HIDE LEGAL ENTITY MATRIX' : 'EXAMINE LEGAL ENTITIES (EMPIRE vs USSR vs RUS vs CIS)'}
              </button>
            </div>

            {/* Expandable Legal Entity Explainer Box */}
            {showEntityExplainer && (
              <div className="p-4 border-b border-[#222222] bg-[#111111] space-y-3 animate-fade-in overflow-y-auto max-h-60 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-white text-[11px] uppercase">
                    {SOVIET_HISTORICAL_ENTITIES_EXPLAINER.title}
                  </span>
                  <button onClick={() => setShowEntityExplainer(false)} className="text-[#888888] hover:text-white cursor-pointer">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-[11px] text-[#B0B0B0] leading-relaxed">
                  {SOVIET_HISTORICAL_ENTITIES_EXPLAINER.clarification}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1">
                  {SOVIET_HISTORICAL_ENTITIES_EXPLAINER.entities.map(ent => (
                    <div key={ent.name} className="p-2.5 rounded-lg bg-[#161616] border border-[#262626] space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white font-mono text-[10.5px]">{ent.name}</span>
                        {ent.span && <span className="text-[9px] font-mono text-[#888888]">{ent.span}</span>}
                      </div>
                      <p className="text-[10.5px] text-[#A0A0A0] leading-snug">{ent.nature}</p>
                      {ent.distinctionFromUSSR && (
                        <p className="text-[9.5px] font-mono text-white pt-1 border-t border-[#262626]">{ent.distinctionFromUSSR}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Split View: 15 Republics Grid (Left) & Republic Deep Dossier (Right) */}
            <div className="flex-1 flex flex-col lg:flex-row min-h-0 overflow-hidden">
              
              {/* Left Column: 15 Republics Cards Grid */}
              <div className="w-full lg:w-5/12 border-b lg:border-b-0 lg:border-r border-[#1A1A1A] overflow-y-auto p-3 space-y-2 bg-[#090909]">
                <div className="text-[10px] font-mono text-[#666666] px-1 pb-1">
                  15 FORMER SOVIET SOCIALIST REPUBLICS (SSRs)
                </div>

                {SOVIET_15_REPUBLICS.map(rep => {
                  const isSelected = rep.id === activeSovietRepublic?.id;
                  const isBaltic = ['EST', 'LVA', 'LTU'].includes(rep.id);

                  return (
                    <div
                      key={rep.id}
                      onClick={() => setSelectedSovietRepublicId(rep.id)}
                      className={`p-3 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-white/10 border-white shadow-lg'
                          : 'bg-[#111111] border-[#1C1C1C] hover:border-[#333333] hover:bg-[#161616]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-1.5 font-mono">
                            <span className="text-xs font-bold text-white">{rep.name}</span>
                            <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-[#1C1C1C] text-[#888888]">
                              {rep.id}
                            </span>
                          </div>
                          <span className="text-[9.5px] font-mono text-[#888888] block mt-0.5 truncate max-w-[260px]">
                            {rep.ussrName}
                          </span>
                        </div>

                        {isBaltic ? (
                          <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-white text-black font-bold shrink-0">
                            BALTIC / NATO
                          </span>
                        ) : rep.id === 'RUS' ? (
                          <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-white/20 text-white font-bold shrink-0">
                            CONTINUER
                          </span>
                        ) : (
                          <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-[#1F1F1F] text-[#888888] font-bold shrink-0">
                            INDEPENDENT
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#1C1C1C] text-[9.5px] font-mono text-[#666666]">
                        <span>Indep: {rep.independenceDeclarationDate.split('(')[0]}</span>
                        <span className="truncate max-w-[150px]">{rep.capital}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Column: Deep Soviet Republic Transition Intelligence */}
              <div className="w-full lg:w-7/12 flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-[#0A0A0A]">
                {activeSovietRepublic ? (
                  <div className="space-y-4 animate-fade-in">
                    
                    {/* Header Card */}
                    <div className="p-4 rounded-xl bg-[#111111] border border-[#222222] space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white text-black">
                            {activeSovietRepublic.id}
                          </span>
                          <span className="text-xs font-mono text-[#888888]">
                            Capital: {activeSovietRepublic.capital}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          {onLocateCoords && (
                            <button
                              onClick={() => onLocateCoords(activeSovietRepublic.lat, activeSovietRepublic.lng, activeSovietRepublic.name)}
                              className="px-2.5 py-1 rounded bg-[#1C1C1C] hover:bg-white hover:text-black border border-[#2A2A2A] text-white font-mono text-[10px] flex items-center gap-1.5 transition-all cursor-pointer"
                              title="Fly Globe to Capital"
                            >
                              <Compass className="w-3.5 h-3.5" />
                              <span>LOCATE ON GLOBE</span>
                            </button>
                          )}
                          {onSelectCountry && (
                            <button
                              onClick={() => onSelectCountry(activeSovietRepublic.id)}
                              className="px-2.5 py-1 rounded bg-white text-black hover:bg-[#DDDDDD] font-mono text-[10px] font-bold flex items-center gap-1 transition-all cursor-pointer"
                              title="Open Full Country Dossier"
                            >
                              <span>DOSSIER</span>
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                      </div>

                      <h2 className="text-lg font-bold text-white">
                        {activeSovietRepublic.name}
                      </h2>
                      <p className="text-xs font-mono text-[#AAAAAA]">
                        {activeSovietRepublic.ussrName}
                      </p>
                    </div>

                    {/* Status within the USSR */}
                    <div className="p-3.5 rounded-xl bg-[#111111] border border-[#1C1C1C] space-y-1">
                      <span className="text-[10px] font-mono font-bold text-white uppercase flex items-center gap-1.5">
                        <span>■</span>
                        <span>STATUS & FUNCTION WITHIN THE USSR</span>
                      </span>
                      <p className="text-xs text-[#D0D0D0] leading-relaxed">
                        {activeSovietRepublic.statusInUSSR}
                      </p>
                    </div>

                    {/* Independence Milestones */}
                    <div className="p-3.5 rounded-xl bg-[#0F0F0F] border border-[#1C1C1C] space-y-2">
                      <span className="text-[10px] font-mono font-bold text-white uppercase flex items-center gap-1.5">
                        <span>▲</span>
                        <span>INDEPENDENCE PROCESS & MILESTONES (1990–1991)</span>
                      </span>

                      <div className="space-y-1.5">
                        {activeSovietRepublic.independenceMilestones?.map((m, idx) => (
                          <div key={idx} className="p-2 rounded bg-[#141414] border border-[#222222] text-xs space-y-0.5">
                            <span className="text-[9.5px] font-mono font-bold text-white">{m.date}:</span>
                            <p className="text-[11px] text-[#B0B0B0]">{m.event}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Initial Transition & Relationship with Russia */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-[#0F0F0F] border border-[#1A1A1A] space-y-1">
                        <span className="text-[9.5px] font-mono font-bold text-[#888888] uppercase block">
                          INITIAL ECONOMIC & POLITICAL TRANSITION
                        </span>
                        <p className="text-[11.5px] text-[#CCCCCC] leading-relaxed">
                          {activeSovietRepublic.initialTransition}
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-[#0F0F0F] border border-[#1A1A1A] space-y-1">
                        <span className="text-[9.5px] font-mono font-bold text-[#888888] uppercase block">
                          RELATIONSHIP WITH RUSSIA POST-INDEPENDENCE
                        </span>
                        <p className="text-[11.5px] text-[#CCCCCC] leading-relaxed">
                          {activeSovietRepublic.relationshipWithRussia}
                        </p>
                      </div>
                    </div>

                    {/* CIS Status & Baltic Distinct Trajectory */}
                    <div className="p-3 rounded-xl bg-[#111111] border border-[#1F1F1F] space-y-1.5 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-white text-[10px] uppercase">
                          CIS STATUS & PARTICIPATION
                        </span>
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-white">
                          MEMBERSHIP RECORD
                        </span>
                      </div>
                      <p className="text-[11.5px] text-[#B0B0B0] leading-relaxed">
                        {activeSovietRepublic.cisStatus}
                      </p>
                      {activeSovietRepublic.balticDistinctTrajectory && (
                        <div className="pt-2 border-t border-[#1F1F1F] space-y-0.5">
                          <span className="text-[9.5px] font-mono font-bold text-white block">
                            DISTINCT WESTERN TRAJECTORY & BALTIC LEGAL CONTINUITY:
                          </span>
                          <p className="text-[11px] text-[#AAAAAA]">
                            {activeSovietRepublic.balticDistinctTrajectory}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Territorial and Border Conflicts */}
                    {activeSovietRepublic.majorTerritorialBorderConflicts && activeSovietRepublic.majorTerritorialBorderConflicts.length > 0 && (
                      <div className="p-3.5 rounded-xl bg-[#0F0F0F] border border-[#1A1A1A] space-y-2">
                        <span className="text-[10px] font-mono font-bold text-white uppercase flex items-center gap-1.5">
                          <ShieldAlert className="w-3.5 h-3.5 text-white" />
                          <span>MAJOR POST-SOVIET BORDER & TERRITORIAL CONFLICTS</span>
                        </span>
                        <ul className="space-y-1 text-xs">
                          {activeSovietRepublic.majorTerritorialBorderConflicts.map((c, i) => (
                            <li key={i} className="text-[11px] text-[#C0C0C0] flex items-start gap-1.5">
                              <span className="text-white font-mono">•</span>
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Current Geopolitical Position */}
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/20 space-y-1">
                      <span className="text-[10px] font-mono font-bold text-white uppercase block">
                        VERIFIED CURRENT GEOPOLITICAL POSTURE & ALLIANCES
                      </span>
                      <p className="text-xs text-white leading-relaxed">
                        {activeSovietRepublic.currentGeopoliticalPosition}
                      </p>
                      <div className="pt-2 flex flex-wrap items-center gap-1 text-[9.5px] font-mono text-[#888888]">
                        <span className="text-white font-bold">ORGANIZATIONS:</span>
                        {activeSovietRepublic.internationalOrganizations?.map(org => (
                          <span key={org} className="px-1.5 py-0.2 rounded bg-[#161616] border border-[#262626] text-white">
                            {org}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center text-xs font-mono text-[#666666]">
                    Select a Soviet Republic to examine its post-Soviet transition.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 3: HISTORICAL EMPIRES & HEGEMONIC SUCCESSION */}
        {/* ======================================================== */}
        {activeTab === 'empires' && (
          <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
            
            <div className="p-3 border-b border-[#1A1A1A] bg-[#0C0C0C] flex items-center justify-between text-xs font-mono">
              <span className="font-bold text-white uppercase tracking-wider">
                HISTORICAL EMPIRES, TERRITORIAL BOUNDARIES & HEGEMONIC SUCCESSION
              </span>
              <span className="text-[10px] text-[#888888]">
                {HISTORICAL_EMPIRES.length} LANDMARK EMPIRES CATALOGED
              </span>
            </div>

            <div className="flex-1 flex flex-col lg:flex-row min-h-0 overflow-hidden">
              
              {/* Left Column: Empire Cards */}
              <div className="w-full lg:w-5/12 border-b lg:border-b-0 lg:border-r border-[#1A1A1A] overflow-y-auto p-3 space-y-2 bg-[#090909]">
                {HISTORICAL_EMPIRES.map(emp => {
                  const isSelected = emp.id === activeEmpire?.id;
                  return (
                    <div
                      key={emp.id}
                      onClick={() => setSelectedEmpireId(emp.id)}
                      className={`p-3 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-white/10 border-white shadow-lg'
                          : 'bg-[#111111] border-[#1C1C1C] hover:border-[#333333] hover:bg-[#161616]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="text-xs font-bold text-white block">{emp.name}</span>
                          <span className="text-[9.5px] font-mono text-[#888888]">{emp.period}</span>
                        </div>
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#1C1C1C] text-white font-bold shrink-0">
                          {emp.territoryKm2}
                        </span>
                      </div>
                      <div className="text-[9.5px] font-mono text-[#666666] mt-2 pt-1.5 border-t border-[#1C1C1C] flex justify-between">
                        <span>Apex: {emp.apexSpan}</span>
                        <span>Capital: {emp.capital.split(' ')[0]}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Column: Empire Deep Dossier */}
              <div className="w-full lg:w-7/12 flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-[#0A0A0A]">
                {activeEmpire && (
                  <div className="space-y-4 animate-fade-in">
                    
                    {/* Header */}
                    <div className="p-4 rounded-xl bg-[#111111] border border-[#222222] space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white text-black">
                          {activeEmpire.period}
                        </span>
                        {onLocateCoords && activeEmpire.apexCoordinates && (
                          <button
                            onClick={() => onLocateCoords(activeEmpire.apexCoordinates.lat, activeEmpire.apexCoordinates.lng, activeEmpire.name)}
                            className="px-2.5 py-1 rounded bg-[#1C1C1C] hover:bg-white hover:text-black border border-[#2A2A2A] text-white font-mono text-[10px] flex items-center gap-1.5 transition-all cursor-pointer"
                          >
                            <Compass className="w-3.5 h-3.5" />
                            <span>LOCATE CAPITAL ON GLOBE</span>
                          </button>
                        )}
                      </div>
                      <h2 className="text-lg font-bold text-white">{activeEmpire.name}</h2>
                      <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#888888] pt-1">
                        <div>Peak Territory: <span className="text-white font-bold">{activeEmpire.territoryKm2}</span></div>
                        <div>Apex Era: <span className="text-white font-bold">{activeEmpire.apexSpan}</span></div>
                      </div>
                    </div>

                    {/* Governance Model */}
                    <div className="p-3.5 rounded-xl bg-[#111111] border border-[#1C1C1C] space-y-1">
                      <span className="text-[10px] font-mono font-bold text-white uppercase block">
                        GOVERNANCE ARCHITECTURE & IMPERIAL MODEL
                      </span>
                      <p className="text-xs text-[#D0D0D0] leading-relaxed">
                        {activeEmpire.governanceModel}
                      </p>
                    </div>

                    {/* Collapse Dynamics */}
                    <div className="p-3.5 rounded-xl bg-[#0F0F0F] border border-[#1C1C1C] space-y-1">
                      <span className="text-[10px] font-mono font-bold text-white uppercase block">
                        COLLAPSE DYNAMICS & IMPERIAL DISSOLUTION
                      </span>
                      <p className="text-xs text-[#C0C0C0] leading-relaxed">
                        {activeEmpire.collapseDynamics}
                      </p>
                    </div>

                    {/* Geopolitical Legacy */}
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/20 space-y-1">
                      <span className="text-[10px] font-mono font-bold text-white uppercase block">
                        ENDURING GEOPOLITICAL LEGACY IN TODAY'S WORLD
                      </span>
                      <p className="text-xs text-white leading-relaxed">
                        {activeEmpire.geopoliticalLegacy}
                      </p>
                    </div>

                    {/* Modern Successor States */}
                    <div className="p-3 rounded-xl bg-[#0D0D0D] border border-[#1A1A1A] space-y-2">
                      <span className="text-[9.5px] font-mono font-bold text-[#888888] uppercase block">
                        MODERN SUCCESSOR STATES FORMED ON EMPIRE'S TERRITORY
                      </span>
                      <div className="flex flex-wrap items-center gap-1.5">
                        {activeEmpire.modernSuccessorStates?.map(c => (
                          <button
                            key={c}
                            onClick={() => onSelectCountry && onSelectCountry(c)}
                            className="px-2 py-0.5 rounded bg-[#161616] hover:bg-white hover:text-black border border-[#262626] text-white font-mono text-[10px] font-bold transition-all cursor-pointer flex items-center gap-1"
                          >
                            <span>{c}</span>
                            <ArrowRight className="w-2.5 h-2.5" />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="text-[9.5px] font-mono text-[#666666] pt-1">
                      SOURCES: {activeEmpire.sources}
                    </div>

                  </div>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
