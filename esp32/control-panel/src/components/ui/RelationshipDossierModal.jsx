import React, { useState } from 'react';
import { 
  X, Shield, Zap, TrendingUp, Compass, AlertCircle, 
  FileText, GitFork, ArrowRight, ShieldCheck, ChevronRight, Clock, HelpCircle 
} from 'lucide-react';
import { BILATERAL_RELATIONSHIPS } from '../../data/geointelRelationships';
import InteractiveText from './InteractiveText';

export default function RelationshipDossierModal({
  relationshipId,
  intelLevel = 'beginner',
  onClose,
  onSelectConcept,
  onSelectAgreement,
  onSelectMilitary,
  onExploreChain,
  onOpenWhyExplainer
}) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'development' | 'security' | 'energy' | 'economy' | 'regional'
  const [currentLevel, setCurrentLevel] = useState(intelLevel);

  if (!relationshipId) return null;

  const normalizedKey = typeof relationshipId === 'string'
    ? relationshipId.toUpperCase().replace(/[\s\-]+/g, '_')
    : '';

  const rel = BILATERAL_RELATIONSHIPS[normalizedKey] || Object.values(BILATERAL_RELATIONSHIPS).find(
    r => r.id === relationshipId || r.pair.join('_') === relationshipId || `${r.pair[1]}_${r.pair[0]}` === relationshipId || `${r.pair[1]}_${r.pair[0]}` === normalizedKey
  );

  if (!rel) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 pointer-events-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
      />

      {/* Main Glass Dossier Modal */}
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-slate-950/95 border border-cyan-500/30 rounded-2xl shadow-[0_0_60px_rgba(6,182,212,0.2)] flex flex-col overflow-hidden animate-fade-in z-10 font-sans">
        
        {/* Header Bar */}
        <div className="p-5 pb-4 border-b border-white/10 bg-white/[0.02] flex items-start justify-between relative">
          <div className="flex-1 pr-6">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-xl sm:text-2xl">{rel.flags}</span>
              <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold tracking-wider uppercase bg-cyan-500/15 border border-cyan-500/40 text-cyan-300">
                BILATERAL STRATEGIC DOSSIER
              </span>
              <span 
                className="px-2 py-0.5 rounded text-[9px] font-mono font-bold border"
                style={{
                  borderColor: `${rel.atAGlance?.statusColor || '#06b6d4'}40`,
                  color: rel.atAGlance?.statusColor || '#06b6d4',
                  backgroundColor: `${rel.atAGlance?.statusColor || '#06b6d4'}15`
                }}
              >
                ● {rel.atAGlance?.status}
              </span>
              {rel.verification && (
                <span className="flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                  <ShieldCheck className="w-2.5 h-2.5" />
                  {rel.verification.claimType}
                </span>
              )}
            </div>

            <h2 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-wide text-white">
              {rel.title}
            </h2>
            <p className="text-xs font-mono text-slate-400 mt-0.5">
              {rel.classification}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0"
            title="Close (ESC)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Section Navigation Tabs & Intel Level Switcher */}
        <div className="px-5 py-2 bg-black/40 border-b border-white/5 flex flex-wrap items-center justify-between gap-2">
          {/* Section Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto py-1 max-w-full">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1 rounded-md text-xs font-mono font-semibold transition-all cursor-pointer shrink-0 ${
                activeTab === 'overview'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              AT A GLANCE
            </button>
            <button
              onClick={() => setActiveTab('development')}
              className={`px-3 py-1 rounded-md text-xs font-mono font-semibold transition-all cursor-pointer shrink-0 ${
                activeTab === 'development'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              DEVELOPMENT & TURNING POINTS
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`px-3 py-1 rounded-md text-xs font-mono font-semibold transition-all cursor-pointer shrink-0 ${
                activeTab === 'security'
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              SECURITY & DEFENSE
            </button>
            {rel.energy && (
              <button
                onClick={() => setActiveTab('energy')}
                className={`px-3 py-1 rounded-md text-xs font-mono font-semibold transition-all cursor-pointer shrink-0 ${
                  activeTab === 'energy'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                ENERGY
              </button>
            )}
            <button
              onClick={() => setActiveTab('economy')}
              className={`px-3 py-1 rounded-md text-xs font-mono font-semibold transition-all cursor-pointer shrink-0 ${
                activeTab === 'economy'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ECONOMY
            </button>
            {rel.regionalIssues && (
              <button
                onClick={() => setActiveTab('regional')}
                className={`px-3 py-1 rounded-md text-xs font-mono font-semibold transition-all cursor-pointer shrink-0 ${
                  activeTab === 'regional'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                REGIONAL ISSUES
              </button>
            )}
          </div>

          {/* Level Switcher */}
          <div className="flex rounded-md p-0.5 bg-white/5 border border-white/10 shrink-0">
            <button
              onClick={() => setCurrentLevel('beginner')}
              className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold transition-all cursor-pointer ${
                currentLevel === 'beginner' ? 'bg-cyan-500 text-black' : 'text-slate-400'
              }`}
            >
              BEGINNER
            </button>
            <button
              onClick={() => setCurrentLevel('advanced')}
              className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold transition-all cursor-pointer ${
                currentLevel === 'advanced' ? 'bg-cyan-500 text-black' : 'text-slate-400'
              }`}
            >
              ADVANCED
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1 text-xs text-slate-300">
          
          {/* TAB 1: AT A GLANCE */}
          {activeTab === 'overview' && (
            <div className="space-y-4 animate-fade-in">
              {/* Strategic Interests Card */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                <span className="text-[10px] font-mono font-bold tracking-wider text-cyan-400 uppercase block">
                  CORE STRATEGIC INTERESTS & GEOPOLITICAL LOGIC
                </span>
                <p className="text-xs sm:text-[13px] text-slate-200 leading-relaxed">
                  <InteractiveText
                    text={rel.atAGlance?.majorStrategicInterests}
                    onSelectConcept={onSelectConcept}
                    onSelectAgreement={onSelectAgreement}
                    onSelectMilitary={onSelectMilitary}
                  />
                </p>
              </div>

              {/* Key Strategic Areas Pills */}
              <div>
                <span className="block text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase mb-2">
                  KEY PILLARS OF COOPERATION & CONTENTION
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {rel.atAGlance?.keyAreas?.map((area, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span className="text-xs font-semibold text-slate-200">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Clickable Concepts */}
              {rel.keyConcepts && (
                <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-cyan-400 uppercase">
                      INTERACTIVE KEY CONCEPTS (CLICK TO LEARN)
                    </span>
                    <span className="text-[9px] font-mono text-slate-500">
                      Vocabulary System
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {rel.keyConcepts.map((cId, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => onSelectConcept && onSelectConcept(cId)}
                        className="px-2.5 py-1 rounded bg-cyan-500/10 hover:bg-cyan-500/25 border border-cyan-500/30 hover:border-cyan-400 text-xs font-mono text-cyan-300 font-bold transition-all shadow-sm cursor-pointer"
                      >
                        {cId.replace(/_/g, ' ')}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Important Treaties & Agreements */}
              {rel.importantAgreements && (
                <div>
                  <span className="block text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase mb-2">
                    FOUNDATIONAL AGREEMENTS & INITIATIVES
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {rel.importantAgreements.map((agrId, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => onSelectAgreement && onSelectAgreement(agrId)}
                        className="p-3 rounded-xl bg-purple-950/30 hover:bg-purple-900/50 border border-purple-500/30 hover:border-purple-400 text-left transition-all cursor-pointer flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-base">📜</span>
                          <span className="text-xs font-mono font-bold text-purple-300 group-hover:text-purple-100">
                            {agrId.replace(/_/g, ' ')}
                          </span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Why This Relationship Matters */}
              <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/25">
                <span className="text-[10px] font-mono font-bold tracking-wider text-amber-400 uppercase block mb-1">
                  WHY THIS RELATIONSHIP MATTERS TO WORLD ORDER
                </span>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {rel.whyThisMatters}
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: DEVELOPMENT & TURNING POINTS */}
          {activeTab === 'development' && (
            <div className="space-y-5 animate-fade-in">
              {/* Turning Points Grid */}
              {rel.turningPoints && (
                <div>
                  <span className="block text-[10px] font-mono font-bold tracking-wider text-cyan-400 uppercase mb-2">
                    KEY TURNING POINTS
                  </span>
                  <div className="space-y-2">
                    {rel.turningPoints.map((tp, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-white/5 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono font-bold text-xs shrink-0">
                            {tp.year}
                          </span>
                          <span className="text-xs font-bold text-white">{tp.event}</span>
                        </div>
                        <p className="text-[11px] text-slate-300 sm:text-right pl-8 sm:pl-0">
                          {tp.impact}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Chronological Development Timeline */}
              <div>
                <span className="block text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase mb-3">
                  HISTORICAL DEVELOPMENT CHRONOLOGY
                </span>
                <div className="relative pl-6 space-y-4 border-l-2 border-cyan-500/30">
                  {rel.howItDeveloped?.map((step, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute -left-[31px] top-0 w-3 h-3 rounded-full bg-cyan-400 border-2 border-slate-950" />
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-cyan-400 font-bold text-xs">{step.year}</span>
                        <span className="text-slate-500 text-[10px]">—</span>
                        <span className="font-bold text-slate-200 text-xs">{step.title}</span>
                      </div>
                      <p className="text-slate-300 text-[11px] leading-relaxed">
                        <InteractiveText
                          text={step.desc}
                          onSelectConcept={onSelectConcept}
                          onSelectAgreement={onSelectAgreement}
                          onSelectMilitary={onSelectMilitary}
                        />
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SECURITY & DEFENSE */}
          {activeTab === 'security' && (
            <div className="space-y-4 animate-fade-in">
              <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/30">
                <span className="text-[10px] font-mono font-bold tracking-wider text-purple-400 uppercase block mb-1">
                  DEFENSE POSTURE & COOPERATION
                </span>
                <p className="text-xs sm:text-[13px] text-slate-200 leading-relaxed">
                  <InteractiveText
                    text={rel.security?.summary}
                    onSelectConcept={onSelectConcept}
                    onSelectAgreement={onSelectAgreement}
                    onSelectMilitary={onSelectMilitary}
                  />
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {rel.security?.defenseCooperation && (
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[10px] font-mono font-bold text-purple-300 uppercase block mb-1">
                      DEFENSE INDUSTRIAL COOPERATION
                    </span>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      <InteractiveText
                        text={rel.security.defenseCooperation}
                        onSelectConcept={onSelectConcept}
                        onSelectAgreement={onSelectAgreement}
                        onSelectMilitary={onSelectMilitary}
                      />
                    </p>
                  </div>
                )}
                {rel.security?.militaryPresence && (
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[10px] font-mono font-bold text-cyan-300 uppercase block mb-1">
                      MILITARY BASING & FORWARD PRESENCE
                    </span>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      <InteractiveText
                        text={rel.security.militaryPresence}
                        onSelectConcept={onSelectConcept}
                        onSelectAgreement={onSelectAgreement}
                        onSelectMilitary={onSelectMilitary}
                      />
                    </p>
                  </div>
                )}
              </div>

              {rel.security?.regionalDeterrence && (
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[10px] font-mono font-bold text-amber-300 uppercase block mb-1">
                    REGIONAL SECURITY DETERRENCE POSTURE
                  </span>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    <InteractiveText
                      text={rel.security.regionalDeterrence}
                      onSelectConcept={onSelectConcept}
                      onSelectAgreement={onSelectAgreement}
                      onSelectMilitary={onSelectMilitary}
                    />
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: ENERGY */}
          {activeTab === 'energy' && rel.energy && (
            <div className="space-y-4 animate-fade-in">
              <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/30">
                <span className="text-[10px] font-mono font-bold tracking-wider text-amber-400 uppercase block mb-1">
                  ENERGY GEOPOLITICS OVERVIEW
                </span>
                <p className="text-xs sm:text-[13px] text-slate-200 leading-relaxed">
                  <InteractiveText
                    text={rel.energy.summary}
                    onSelectConcept={onSelectConcept}
                    onSelectAgreement={onSelectAgreement}
                    onSelectMilitary={onSelectMilitary}
                  />
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {rel.energy.oilMarkets && (
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[10px] font-mono font-bold text-amber-300 uppercase block mb-1">
                      OIL FLOWS & EXTRACTION CAPACITY
                    </span>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      {rel.energy.oilMarkets}
                    </p>
                  </div>
                )}
                {rel.energy.globalImplications && (
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[10px] font-mono font-bold text-cyan-300 uppercase block mb-1">
                      GLOBAL PRICE BENCHMARKS & COMMODITIES
                    </span>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      {rel.energy.globalImplications}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 5: ECONOMY */}
          {activeTab === 'economy' && (
            <div className="space-y-4 animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[9px] font-mono text-slate-400 uppercase block">BILATERAL TRADE VOLUME</span>
                  <span className="text-sm font-bold text-white font-mono mt-1 block">
                    {rel.economy?.tradeVolume || 'N/A'}
                  </span>
                </div>
                {rel.economy?.investment && (
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 sm:col-span-2">
                    <span className="text-[9px] font-mono text-slate-400 uppercase block">STRATEGIC INVESTMENT</span>
                    <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                      {rel.economy.investment}
                    </p>
                  </div>
                )}
              </div>

              {rel.economy?.alternativeSettlement && (
                <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/25">
                  <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase block mb-1">
                    CURRENCY RAILS & NON-DOLLAR SETTLEMENT
                  </span>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    <InteractiveText
                      text={rel.economy.alternativeSettlement}
                      onSelectConcept={onSelectConcept}
                      onSelectAgreement={onSelectAgreement}
                      onSelectMilitary={onSelectMilitary}
                    />
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 6: REGIONAL ISSUES */}
          {activeTab === 'regional' && rel.regionalIssues && (
            <div className="space-y-3 animate-fade-in">
              <span className="block text-[10px] font-mono font-bold tracking-wider text-rose-400 uppercase">
                TARGETED REGIONAL FRICTION & FLASHPOINTS
              </span>
              <div className="space-y-2">
                {rel.regionalIssues.map((issue, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-rose-400" />
                      <span className="font-bold text-slate-100 text-xs">{issue.name}</span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed pl-4">
                      <InteractiveText
                        text={issue.desc}
                        onSelectConcept={onSelectConcept}
                        onSelectAgreement={onSelectAgreement}
                        onSelectMilitary={onSelectMilitary}
                      />
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer: Explore Connection Chain & Verification */}
        <div className="p-4 border-t border-white/10 bg-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-3">
          {rel.defaultChain ? (
            <button
              onClick={() => onExploreChain && onExploreChain(rel.defaultChain)}
              className="w-full sm:w-auto px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-black font-mono font-bold text-xs flex items-center justify-center gap-2 shadow-lg cursor-pointer transition-all"
            >
              <GitFork className="w-3.5 h-3.5" />
              <span>FOLLOW THE CONNECTION CHAIN</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <div />
          )}

          {rel.verification && (
            <div className="text-[10px] font-mono text-slate-400 text-right">
              <span>Source: {rel.verification.source}</span>
              <span className="block text-slate-500">Confidence: {rel.verification.confidence}</span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
