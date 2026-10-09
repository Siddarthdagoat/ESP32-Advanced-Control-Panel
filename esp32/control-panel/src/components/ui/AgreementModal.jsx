import React, { useState } from 'react';
import { X, FileText, ShieldCheck, ExternalLink, Calendar, Users, Landmark, ArrowRight } from 'lucide-react';
import { GEOPOLITICAL_AGREEMENTS } from '../../data/geointelAgreements';

export default function AgreementModal({
  agreementId,
  intelLevel = 'beginner',
  onClose,
  onSelectConcept,
  onSelectAgreement
}) {
  const [activeTab, setActiveTab] = useState(intelLevel);

  if (!agreementId) return null;

  const normalizedKey = typeof agreementId === 'string'
    ? agreementId.toUpperCase().replace(/[\s\-]+/g, '_')
    : '';

  const agreement = GEOPOLITICAL_AGREEMENTS[normalizedKey] || Object.values(GEOPOLITICAL_AGREEMENTS).find(
    a => a.name.toLowerCase() === agreementId.toLowerCase() || a.id === agreementId
  );

  if (!agreement) return null;

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
                {agreement.type}
              </span>
              <span className="flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-mono text-slate-300 bg-white/10 border border-white/10">
                <Calendar className="w-2.5 h-2.5 text-purple-400" />
                {agreement.year}
              </span>
              {agreement.verification && (
                <span className="flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                  <ShieldCheck className="w-2.5 h-2.5" />
                  {agreement.verification.claimType}
                </span>
              )}
            </div>

            <h2 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-wide text-white">
              {agreement.name}
            </h2>
            <p className="text-[11px] font-mono text-purple-400 mt-1">
              Signed: {agreement.signedDate}
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

        {/* Level Switcher Ribbon */}
        <div className="px-5 py-2.5 bg-black/40 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
              INTEL LEVEL:
            </span>
            <div className="flex rounded-lg p-0.5 bg-white/5 border border-white/10">
              <button
                onClick={() => setActiveTab('beginner')}
                className={`px-3 py-1 rounded-md text-[10px] font-mono font-semibold transition-all cursor-pointer ${
                  activeTab === 'beginner'
                    ? 'bg-purple-500 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                BEGINNER SUMMARY
              </button>
              <button
                onClick={() => setActiveTab('advanced')}
                className={`px-3 py-1 rounded-md text-[10px] font-mono font-semibold transition-all cursor-pointer ${
                  activeTab === 'advanced'
                    ? 'bg-purple-500 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                ADVANCED LEGAL & STRATEGIC
              </button>
            </div>
          </div>

          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            {agreement.status}
          </span>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1 text-xs text-slate-300">
          
          {/* Signatory Parties & Facilitator */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center gap-1.5 text-purple-400 font-mono text-[10px] font-bold uppercase tracking-wider mb-2">
                <Users className="w-3.5 h-3.5" />
                <span>ACTUAL SIGNATORY PARTIES</span>
              </div>
              <ul className="space-y-1 text-xs text-slate-200">
                {agreement.parties?.map((party, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span>{party}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center gap-1.5 text-cyan-400 font-mono text-[10px] font-bold uppercase tracking-wider mb-2">
                <Landmark className="w-3.5 h-3.5" />
                <span>FACILITATOR & DIPLOMATIC ROLE</span>
              </div>
              <p className="text-xs font-semibold text-slate-200 mb-1">
                {agreement.facilitatingActor}
              </p>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {agreement.facilitatingRole}
              </p>
            </div>
          </div>

          {/* Explanation text based on Intel Level */}
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
            <div className="flex items-center gap-2 mb-2 text-purple-400 font-mono text-[11px] font-bold uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5" />
              <span>{activeTab === 'beginner' ? 'Plain English Overview' : 'Strategic Treaty Impact'}</span>
            </div>
            <p className="leading-relaxed text-slate-200 text-xs sm:text-[13px]">
              {activeTab === 'beginner' ? agreement.beginner : agreement.advanced}
            </p>
          </div>

          {/* Why It Matters */}
          <div>
            <span className="block text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase mb-1.5">
              WHY IT MATTERS REGIONALLY & GLOBALLY
            </span>
            <p className="p-3 rounded-lg bg-white/5 border border-white/5 text-slate-200 leading-relaxed">
              {agreement.whyItMatters}
            </p>
          </div>

          {/* Related Initiatives */}
          {agreement.relatedInitiatives && (
            <div>
              <span className="block text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase mb-1.5">
                DESCENDANT INITIATIVES & WORKING FORUMS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {agreement.relatedInitiatives.map((init, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-[11px]">
                    <span className="text-purple-300 font-mono font-bold block mb-0.5">{init.name}</span>
                    <p className="text-slate-400 leading-normal">{init.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Concepts */}
          {agreement.relatedConcepts && (
            <div>
              <span className="block text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase mb-1.5">
                RELATED GEOPOLITICAL CONCEPTS
              </span>
              <div className="flex flex-wrap gap-1.5">
                {agreement.relatedConcepts.map((cId, idx) => (
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
        {agreement.verification && (
          <div className="p-4 border-t border-white/10 bg-white/[0.02] flex items-center justify-between text-[10px] font-mono text-slate-400">
            <span>Source: {agreement.verification.source}</span>
            <span className="text-emerald-400">Confidence: {agreement.verification.confidence}</span>
          </div>
        )}

      </div>
    </div>
  );
}
