import React, { useState } from 'react';
import { X, ArrowRight, Shield, Anchor, Compass, GitFork } from 'lucide-react';
import InteractiveText from './InteractiveText';

export default function StrategicCard({
  location,
  intelLevel = 'beginner',
  onClose,
  onViewRegion,
  onSelectConcept,
  onSelectAgreement,
  onSelectMilitary,
  onExploreChain
}) {
  const [level, setLevel] = useState(intelLevel);

  if (!location) return null;

  // Map location to relevant chain
  const getChainForLocation = (locId) => {
    if (locId === 'loc_hormuz') return 'CHAIN_HORMUZ_OIL';
    if (locId === 'loc_malacca') return 'CHAIN_TAIWAN_MALACCA';
    if (locId === 'loc_babalmandeb') return 'CHAIN_ABRAHAM_IMEC';
    return 'CHAIN_HORMUZ_OIL';
  };

  return (
    <div className="fixed inset-y-0 right-0 sm:right-6 sm:top-20 sm:bottom-20 z-25 pointer-events-auto w-full sm:max-w-[430px] flex flex-col justify-end sm:justify-start">
      {/* Mobile Backdrop */}
      <div 
        onClick={onClose} 
        className="sm:hidden fixed inset-0 bg-black/50 backdrop-blur-xs -z-10" 
      />

      <div className="glass-panel-elevated rounded-t-3xl sm:rounded-2xl border border-cyan-500/30 shadow-2xl overflow-hidden max-h-[85vh] sm:max-h-[calc(100vh-160px)] flex flex-col animate-slide-up-mobile sm:animate-slide-in-right">
        
        {/* Header */}
        <div className="p-5 pb-3 border-b border-white/10 relative bg-white/[0.02]">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            title="Close (ESC)"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-cyan-400 rotate-45 animate-pulse shrink-0" />
            <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-400 uppercase">
              STRATEGIC INFRASTRUCTURE & CHOKEPOINT
            </span>
          </div>

          <h2 className="text-xl font-bold text-white font-display uppercase tracking-wider">
            {location.name}
          </h2>
          
          <div className="flex items-center gap-2 mt-1.5">
            <span className="px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-[10px] font-mono text-cyan-300">
              {location.category || 'Maritime Chokepoint'}
            </span>
            <span className="text-[10px] font-mono text-slate-400">
              {location.lat?.toFixed(2)}° N, {location.lng?.toFixed(2)}° E
            </span>
          </div>
        </div>

        {/* Level Switcher Ribbon */}
        <div className="px-5 py-2 bg-black/40 border-b border-white/5 flex items-center justify-between">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
            CHOKEPOINT DOSSIER:
          </span>
          <div className="flex rounded-md p-0.5 bg-white/5 border border-white/10">
            <button
              onClick={() => setLevel('beginner')}
              className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold transition-all cursor-pointer ${
                level === 'beginner' ? 'bg-cyan-500 text-black' : 'text-slate-400 hover:text-white'
              }`}
            >
              BEGINNER
            </button>
            <button
              onClick={() => setLevel('advanced')}
              className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold transition-all cursor-pointer ${
                level === 'advanced' ? 'bg-cyan-500 text-black' : 'text-slate-400 hover:text-white'
              }`}
            >
              ADVANCED
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-4 overflow-y-auto flex-1 font-sans text-xs">
          
          {/* Why It Matters */}
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
            <span className="block text-[10px] font-mono tracking-wider text-cyan-400 uppercase mb-1 font-bold">
              STRATEGIC SIGNIFICANCE & THROUGHPUT
            </span>
            <p className="text-slate-200 leading-relaxed text-xs">
              <InteractiveText
                text={location.whyItMatters}
                onSelectConcept={onSelectConcept}
                onSelectAgreement={onSelectAgreement}
                onSelectMilitary={onSelectMilitary}
              />
            </p>
          </div>

          {/* Connected Countries */}
          {location.connectedCountries && (
            <div>
              <span className="block text-[10px] font-mono tracking-wider text-slate-400 uppercase mb-1.5 font-bold">
                LITTORAL & CONTROLLING STATES
              </span>
              <div className="flex flex-wrap gap-1.5">
                {location.connectedCountries.map((c, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-slate-200"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Global Impact */}
          {location.globalImpact && (
            <div>
              <span className="block text-[10px] font-mono tracking-wider text-slate-400 uppercase mb-1 font-bold">
                GLOBAL ECONOMIC & ENERGY IMPACT
              </span>
              <p className="text-slate-300 leading-relaxed bg-white/5 p-3 rounded-xl border border-white/5">
                <InteractiveText
                  text={location.globalImpact}
                  onSelectConcept={onSelectConcept}
                  onSelectAgreement={onSelectAgreement}
                  onSelectMilitary={onSelectMilitary}
                />
              </p>
            </div>
          )}

          {/* India Impact */}
          {location.indiaImpact && (
            <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/30">
              <span className="block text-[10px] font-mono tracking-wider text-amber-400 uppercase mb-1 font-bold">
                🇮🇳 WHY INDIA CARES (NATIONAL STAKES)
              </span>
              <p className="text-slate-200 leading-relaxed">
                <InteractiveText
                  text={location.indiaImpact}
                  onSelectConcept={onSelectConcept}
                  onSelectAgreement={onSelectAgreement}
                  onSelectMilitary={onSelectMilitary}
                />
              </p>
            </div>
          )}

          {/* Connected Geopolitical Concepts */}
          <div>
            <span className="block text-[10px] font-mono tracking-wider text-slate-400 uppercase mb-1.5 font-bold">
              CONNECTED GEOPOLITICAL CONCEPTS
            </span>
            <div className="flex flex-wrap gap-1.5">
              {['CHOKEPOINT', 'SLOC', 'ENERGY_SECURITY', 'FREEDOM_OF_NAVIGATION', 'PETRODOLLAR'].map((cId) => (
                <button
                  key={cId}
                  type="button"
                  onClick={() => onSelectConcept && onSelectConcept(cId)}
                  className="px-2.5 py-1 rounded bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-500/30 hover:border-cyan-400 text-xs font-mono text-cyan-300 font-semibold cursor-pointer transition-colors"
                >
                  {cId.replace(/_/g, ' ')}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-white/10 bg-white/[0.02] flex items-center justify-between gap-2">
          {onViewRegion && (
            <button
              onClick={() => onViewRegion(location)}
              className="flex-1 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>VIEW THEATER</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}

          <button
            onClick={() => onExploreChain && onExploreChain(getChainForLocation(location.id))}
            className="py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 font-mono text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Explore Causal Chain"
          >
            <GitFork className="w-3.5 h-3.5 text-cyan-400" />
            <span>EXPLORE CHAIN</span>
          </button>
        </div>

      </div>
    </div>
  );
}
