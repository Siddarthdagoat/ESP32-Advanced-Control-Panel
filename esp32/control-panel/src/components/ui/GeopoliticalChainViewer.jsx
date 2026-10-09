import React, { useState } from 'react';
import { X, GitFork, ChevronRight, ChevronLeft, ArrowRight, BookOpen, Shield, Globe } from 'lucide-react';
import { GEOPOLITICAL_CHAINS } from '../../data/geointelChains';

export default function GeopoliticalChainViewer({
  chainKey,
  onClose,
  onSelectConcept,
  onSelectMilitary,
  onSelectCountry
}) {
  const [activeChainId, setActiveChainId] = useState(chainKey || 'CHAIN_BRAHMOS_AUTONOMY');
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const chain = GEOPOLITICAL_CHAINS[activeChainId] || GEOPOLITICAL_CHAINS.CHAIN_BRAHMOS_AUTONOMY;
  const nodes = chain.nodes || [];
  const currentNode = nodes[activeStepIndex] || nodes[0];

  const handleNext = () => {
    if (activeStepIndex < nodes.length - 1) {
      setActiveStepIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (activeStepIndex > 0) {
      setActiveStepIndex(prev => prev - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-55 flex items-center justify-center p-2 sm:p-6 pointer-events-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity" 
      />

      {/* Main Glass Modal */}
      <div className="relative w-full max-w-3xl max-h-[92vh] bg-slate-950/95 border border-cyan-500/40 rounded-2xl shadow-[0_0_60px_rgba(6,182,212,0.25)] flex flex-col overflow-hidden animate-fade-in z-10 font-sans">
        
        {/* Header Bar */}
        <div className="p-5 pb-4 border-b border-white/10 bg-white/[0.02] flex items-start justify-between relative">
          <div className="flex-1 pr-6">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-mono font-bold tracking-wider uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                <GitFork className="w-3 h-3 text-cyan-400" />
                GEOPOLITICAL CAUSAL CHAIN
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                NODE {activeStepIndex + 1} OF {nodes.length}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-wide text-white">
              {chain.title}
            </h2>
            <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
              {chain.tagline}
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

        {/* Chain Selector Switcher */}
        <div className="px-5 py-2 bg-black/40 border-b border-white/5 flex items-center gap-2 overflow-x-auto">
          <span className="text-[9px] font-mono text-slate-500 uppercase shrink-0">CHAINS:</span>
          {Object.entries(GEOPOLITICAL_CHAINS).map(([id, c]) => (
            <button
              key={id}
              onClick={() => {
                setActiveChainId(id);
                setActiveStepIndex(0);
              }}
              className={`px-2.5 py-1 rounded text-[10px] font-mono whitespace-nowrap transition-all cursor-pointer ${
                activeChainId === id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                  : 'text-slate-400 hover:text-white border border-white/5 hover:border-white/20'
              }`}
            >
              {c.title.split(':')[0].replace('From ', '').slice(0, 28)}...
            </button>
          ))}
        </div>

        {/* Node Pipeline Timeline Ribbon */}
        <div className="px-5 py-3 bg-white/[0.01] border-b border-white/5 flex items-center gap-2 overflow-x-auto">
          {nodes.map((node, idx) => {
            const isActive = idx === activeStepIndex;
            const isCompleted = idx < activeStepIndex;

            return (
              <React.Fragment key={idx}>
                <button
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer shrink-0 border ${
                    isActive
                      ? 'bg-cyan-500 text-black border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.4)] font-bold'
                      : isCompleted
                      ? 'bg-cyan-950/40 text-cyan-300 border-cyan-500/30 hover:border-cyan-400'
                      : 'bg-white/5 text-slate-400 border-white/5 hover:text-white hover:border-white/20'
                  }`}
                >
                  <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                    isActive ? 'bg-black text-cyan-400 font-bold' : isCompleted ? 'bg-cyan-400/20 text-cyan-300' : 'bg-white/10 text-slate-400'
                  }`}>
                    {idx + 1}
                  </span>
                  <span className="truncate max-w-[130px]">{node.title}</span>
                </button>

                {idx < nodes.length - 1 && (
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Active Node Detail Body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1 text-xs text-slate-300">
          
          {/* Card for Current Node */}
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-cyan-500/30 space-y-3 relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 uppercase">
                  {currentNode.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {currentNode.country}
                </span>
              </div>

              {currentNode.conceptId && (
                <button
                  onClick={() => {
                    if (onSelectConcept) onSelectConcept(currentNode.conceptId);
                  }}
                  className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-[10px] font-mono font-bold text-cyan-300 border border-white/15 flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <BookOpen className="w-3 h-3" />
                  <span>INSPECT {currentNode.conceptId.replace(/_/g, ' ')}</span>
                </button>
              )}
            </div>

            <h3 className="text-lg sm:text-xl font-bold font-display text-white">
              {currentNode.title}
            </h3>

            <p className="text-sm text-slate-200 leading-relaxed">
              {currentNode.summary}
            </p>

            {/* Causal Link Indicator */}
            {currentNode.causalLink && (
              <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-start gap-3 mt-4">
                <div className="p-1 rounded bg-cyan-500/20 text-cyan-400 shrink-0 mt-0.5">
                  <ArrowRight className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider mb-0.5">
                    GEOPOLITICAL CAUSAL CONSEQUENCE:
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed font-sans">
                    {currentNode.causalLink}
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Footer: Stepper Controls */}
        <div className="p-4 border-t border-white/10 bg-white/[0.02] flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={activeStepIndex === 0}
            className={`px-4 py-2 rounded-lg font-mono text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              activeStepIndex === 0 
                ? 'opacity-40 cursor-not-allowed text-slate-500 border border-white/5' 
                : 'text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>PREVIOUS STEP</span>
          </button>

          <span className="text-[11px] font-mono text-slate-400">
            Step {activeStepIndex + 1} of {nodes.length}
          </span>

          <button
            onClick={handleNext}
            disabled={activeStepIndex === nodes.length - 1}
            className={`px-4 py-2 rounded-lg font-mono text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              activeStepIndex === nodes.length - 1
                ? 'opacity-40 cursor-not-allowed text-slate-500 border border-white/5'
                : 'bg-cyan-500 hover:bg-cyan-400 text-black font-bold shadow-lg'
            }`}
          >
            <span>NEXT CAUSAL LINK</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
