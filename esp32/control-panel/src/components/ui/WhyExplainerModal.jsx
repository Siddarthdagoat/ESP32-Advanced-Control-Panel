import React from 'react';
import { X, HelpCircle, Globe, Shield, ArrowRight } from 'lucide-react';

export default function WhyExplainerModal({
  item,
  onClose,
  onSelectConcept
}) {
  if (!item || !item.whyDoesItExist) return null;

  const { headline, points = [] } = item.whyDoesItExist;

  return (
    <div className="fixed inset-0 z-55 flex items-center justify-center p-3 sm:p-6 pointer-events-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-slate-950/95 border border-amber-500/40 rounded-2xl shadow-[0_0_50px_rgba(245,158,11,0.2)] flex flex-col overflow-hidden animate-fade-in z-10 font-sans">
        
        {/* Header Bar */}
        <div className="p-5 pb-4 border-b border-white/10 bg-white/[0.02] flex items-start justify-between relative">
          <div className="flex-1 pr-6">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-mono font-bold tracking-wider uppercase bg-amber-500/20 text-amber-300 border border-amber-500/40">
                <HelpCircle className="w-3 h-3 text-amber-400" />
                CONTEXTUAL PERSPECTIVE ANALYSIS
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                {item.name}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-wide text-white">
              WHY DOES THIS EXIST?
            </h2>
            <p className="text-xs text-amber-300/90 font-mono mt-1 leading-relaxed">
              {headline}
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

        {/* Scrollable Perspective Cards */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-3.5 flex-1 text-xs text-slate-300">
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase block mb-1">
              FOUNDATIONAL TAKEAWAY
            </span>
            <p className="text-xs sm:text-[13px] text-slate-200 leading-relaxed">
              {item.beginner || item.whatIsIt}
            </p>
          </div>

          <span className="block text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase pt-2">
            WHY IT MATTERS FROM MULTIPLE CAPITAL PERSPECTIVES:
          </span>

          <div className="space-y-2.5">
            {points.map((pt, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-amber-500/30 transition-all"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span className="font-mono font-bold text-amber-300 text-xs uppercase tracking-wide">
                    {pt.actor}
                  </span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed pl-4">
                  {pt.perspective}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-white/[0.02] flex items-center justify-between">
          <span className="text-[10px] font-mono text-slate-400">
            Multi-perspective realist geopolitical analysis
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-semibold cursor-pointer transition-colors"
          >
            RETURN TO EXPLORATION
          </button>
        </div>

      </div>
    </div>
  );
}
