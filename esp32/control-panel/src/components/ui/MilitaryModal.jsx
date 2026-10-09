import React from 'react';
import { X, Shield, Crosshair, Factory, Users, AlertTriangle, ArrowRight, ShieldCheck } from 'lucide-react';
import { MILITARY_SYSTEMS } from '../../data/geointelMilitary';

export default function MilitaryModal({
  militaryId,
  onClose,
  onSelectConcept,
  onSelectCountry
}) {
  if (!militaryId) return null;

  const normalizedKey = typeof militaryId === 'string'
    ? militaryId.toUpperCase().replace(/[\s\-]+/g, '_')
    : '';

  const system = MILITARY_SYSTEMS[normalizedKey] || Object.values(MILITARY_SYSTEMS).find(
    s => s.name.toLowerCase() === militaryId.toLowerCase() || s.id === militaryId
  );

  if (!system) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 pointer-events-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity" 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-slate-950/95 border border-purple-500/30 rounded-2xl shadow-[0_0_50px_rgba(168,85,247,0.15)] flex flex-col overflow-hidden animate-fade-in z-10 font-sans">
        
        {/* Header Bar */}
        <div className="p-5 pb-4 border-b border-white/10 bg-white/[0.02] flex items-start justify-between relative">
          <div className="flex-1 pr-6">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold tracking-wider uppercase bg-purple-500/15 border border-purple-500/40 text-purple-300">
                {system.category}
              </span>
              <span className="px-2 py-0.5 rounded text-[9px] font-mono text-slate-300 bg-white/10 border border-white/10">
                {system.type}
              </span>
              {system.verification && (
                <span className="flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                  <ShieldCheck className="w-2.5 h-2.5" />
                  {system.verification.claimType}
                </span>
              )}
            </div>

            <h2 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-wide text-white">
              {system.name}
            </h2>

            <div className="flex flex-wrap items-center gap-4 mt-2 text-xs font-mono text-slate-300">
              {system.speed && (
                <div>
                  <span className="text-slate-500 text-[10px] block">VELOCITY</span>
                  <span className="text-purple-300 font-bold">{system.speed}</span>
                </div>
              )}
              {system.range && (
                <div>
                  <span className="text-slate-500 text-[10px] block">OPERATIONAL RANGE</span>
                  <span className="text-cyan-300 font-bold">{system.range}</span>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0"
            title="Close (ESC)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1 text-xs text-slate-300">
          
          {/* Producer & Operators Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center gap-1.5 text-purple-400 font-mono text-[10px] font-bold uppercase tracking-wider mb-1.5">
                <Factory className="w-3.5 h-3.5" />
                <span>DEVELOPER / MANUFACTURER</span>
              </div>
              <p className="text-xs font-bold text-slate-100">{system.producer?.name}</p>
              <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">{system.producer?.composition}</p>
              {system.producer?.headquarters && (
                <span className="text-[10px] font-mono text-slate-500 block mt-1">HQ: {system.producer.headquarters}</span>
              )}
            </div>

            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center gap-1.5 text-cyan-400 font-mono text-[10px] font-bold uppercase tracking-wider mb-1.5">
                <Users className="w-3.5 h-3.5" />
                <span>DEPLOYING ARMED FORCES</span>
              </div>
              <div className="space-y-1.5">
                {system.operators?.map((op, idx) => (
                  <div key={idx} className="text-[11px]">
                    <div className="flex items-center gap-1.5 font-semibold text-slate-200">
                      <span>{op.flag}</span>
                      <span>{op.country}</span>
                    </div>
                    <p className="text-[10px] text-slate-400 pl-4">{op.units}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why It Is Important */}
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
            <div className="flex items-center gap-2 mb-1.5 text-purple-400 font-mono text-[11px] font-bold uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5" />
              <span>STRATEGIC & TACTICAL SIGNIFICANCE</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-200 leading-relaxed">
              {system.whyImportant}
            </p>
          </div>

          {/* Bilateral Connections */}
          {(system.indiaConnection || system.russiaConnection || system.usConnection || system.israelConnection) && (
            <div className="space-y-2">
              <span className="block text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
                STRATEGIC NATION CONNECTIONS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {system.indiaConnection && (
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                    <span className="text-xs font-mono font-bold text-amber-300 block mb-0.5">🇮🇳 INDIA CONNECTION</span>
                    <p className="text-[11px] text-slate-300 leading-relaxed">{system.indiaConnection}</p>
                  </div>
                )}
                {system.russiaConnection && (
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                    <span className="text-xs font-mono font-bold text-blue-300 block mb-0.5">🇷🇺 RUSSIA CONNECTION</span>
                    <p className="text-[11px] text-slate-300 leading-relaxed">{system.russiaConnection}</p>
                  </div>
                )}
                {system.usConnection && (
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                    <span className="text-xs font-mono font-bold text-rose-300 block mb-0.5">🇺🇸 U.S. CONNECTION</span>
                    <p className="text-[11px] text-slate-300 leading-relaxed">{system.usConnection}</p>
                  </div>
                )}
                {system.israelConnection && (
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                    <span className="text-xs font-mono font-bold text-cyan-300 block mb-0.5">🇮🇱 ISRAEL CONNECTION</span>
                    <p className="text-[11px] text-slate-300 leading-relaxed">{system.israelConnection}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Related Treaties / Sanctions Issues */}
          {system.relatedIssues && (
            <div>
              <span className="block text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase mb-1.5">
                TREATY & SANCTION IMPLICATIONS
              </span>
              <div className="space-y-1.5">
                {system.relatedIssues.map((issue, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-amber-950/20 border border-amber-500/30 text-[11px]">
                    <span className="text-amber-300 font-mono font-bold block mb-0.5">{issue.name}</span>
                    <p className="text-slate-300">{issue.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Concepts */}
          {system.relatedConcepts && (
            <div>
              <span className="block text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase mb-1.5">
                RELATED GEOPOLITICAL CONCEPTS
              </span>
              <div className="flex flex-wrap gap-1.5">
                {system.relatedConcepts.map((cId, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => onSelectConcept && onSelectConcept(cId)}
                    className="flex items-center gap-1 px-2.5 py-1 rounded bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-500/30 hover:border-cyan-400 text-xs font-mono text-cyan-300 transition-colors cursor-pointer"
                  >
                    <span>{cId.replace(/_/g, ' ')}</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer Verification */}
        {system.verification && (
          <div className="p-4 border-t border-white/10 bg-white/[0.02] flex items-center justify-between text-[10px] font-mono text-slate-400">
            <span>Verified Source: {system.verification.source}</span>
            <span className="text-emerald-400">Confidence: {system.verification.confidence}</span>
          </div>
        )}

      </div>
    </div>
  );
}
