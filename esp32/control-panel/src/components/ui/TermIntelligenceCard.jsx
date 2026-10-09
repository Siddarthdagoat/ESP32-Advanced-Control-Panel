import React, { useState, useEffect } from 'react';
import { 
  X, BookOpen, ShieldCheck, ArrowRight, ArrowLeft, ExternalLink, 
  Globe, Shield, MapPin, Landmark, Layers, HelpCircle, ChevronRight 
} from 'lucide-react';
import { getGeopoliticalTerm, GEOPOLITICAL_TERMS } from '../../data/geopoliticalTerms';

/**
 * TermIntelligenceCard
 * Compact contextual popover/modal for specialized geopolitical, military, economic,
 * and historical concepts.
 * Features:
 * - Direct "What is it?" and "Why does it matter?"
 * - Smart Contextual Framing ("Why is it relevant here?" based on country/theater context)
 * - Interconnected knowledge graph (Clickable related terms with back-history navigation)
 * - Clickable related countries that pivot the 3D globe & open sovereign dossiers
 * - Authoritative sources + Wikipedia "Learn More →" links
 */
export default function TermIntelligenceCard({
  termId,
  contextEntity = null,
  isOpen = true,
  onClose,
  onSelectTerm,
  onSelectCountry,
  onSelectLocation
}) {
  // Navigation history stack for deep rabbit-hole exploration
  const [history, setHistory] = useState([]);
  const [currentId, setCurrentId] = useState(termId);
  const [showFullDoctrine, setShowFullDoctrine] = useState(false);

  // Sync when prop termId changes externally
  useEffect(() => {
    if (termId && termId !== currentId) {
      setCurrentId(termId);
      setHistory([]);
      setShowFullDoctrine(false);
    }
  }, [termId]);

  // Keyboard navigation: Close on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !currentId) return null;

  const term = getGeopoliticalTerm(currentId);

  // Navigate to another related term within the card
  const navigateToTerm = (targetId) => {
    setHistory((prev) => [...prev, currentId]);
    setCurrentId(targetId);
    setShowFullDoctrine(false);
  };

  // Step back in history
  const navigateBack = () => {
    if (history.length === 0) return;
    const previousId = history[history.length - 1];
    setHistory((prev) => prev.slice(0, -1));
    setCurrentId(previousId);
  };

  if (!term) return null;

  // Determine contextual relevance
  const contextNote = contextEntity && term.contextualFraming?.[contextEntity];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 pointer-events-auto font-sans">
      {/* Dimmed backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
      />

      {/* Main Contextual Card */}
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-slate-950/95 border border-cyan-500/35 rounded-2xl shadow-[0_0_60px_rgba(6,182,212,0.2)] flex flex-col overflow-hidden animate-fade-in z-10 text-slate-200">
        
        {/* Top Control Bar */}
        <div className="p-4 sm:p-5 pb-3 border-b border-white/10 bg-white/[0.02] flex items-start justify-between relative">
          <div className="flex-1 pr-4">
            
            {/* History Back button if chained */}
            {history.length > 0 && (
              <button
                type="button"
                onClick={navigateBack}
                className="inline-flex items-center gap-1.5 mb-2 px-2 py-0.5 rounded text-[10px] font-mono font-semibold text-cyan-400 hover:text-cyan-200 bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-500/30 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3 h-3" />
                <span>BACK TO PREVIOUS TERM</span>
              </button>
            )}

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold tracking-wider uppercase bg-cyan-500/15 border border-cyan-500/40 text-cyan-300">
                {term.category}
              </span>
              {term.claimType && (
                <span className="flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                  <ShieldCheck className="w-2.5 h-2.5" />
                  <span>{term.claimType}</span>
                </span>
              )}
              {term.lastVerified && (
                <span className="text-[9px] font-mono text-slate-500">
                  VERIFIED: {term.lastVerified}
                </span>
              )}
            </div>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-wide text-white">
              {term.name}
            </h2>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0"
            title="Close (ESC)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Intelligence Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 flex-1 text-xs text-slate-300 leading-relaxed">
          
          {/* SECTION: WHAT IS IT? */}
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
            <div className="flex items-center gap-1.5 text-cyan-400 font-mono text-[11px] font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>WHAT IS IT?</span>
            </div>
            <p className="text-slate-100 text-[13px] font-medium leading-relaxed">
              {term.shortDefinition}
            </p>
            {term.detailedExplanation && (
              <div className="pt-2 border-t border-white/5 text-slate-300 text-xs whitespace-pre-line leading-relaxed">
                {term.detailedExplanation}
              </div>
            )}
          </div>

          {/* SECTION: WHY DOES IT MATTER? */}
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5">
            <div className="flex items-center gap-1.5 text-amber-400 font-mono text-[11px] font-bold uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5" />
              <span>WHY DOES IT MATTER?</span>
            </div>
            <p className="text-slate-200 text-xs leading-relaxed">
              {term.whyItMatters}
            </p>
          </div>

          {/* SECTION: CONTEXTUAL EXPLANATION ("WHY IS IT RELEVANT HERE?") */}
          {contextNote ? (
            <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/40 space-y-1.5 shadow-[inset_0_0_20px_rgba(6,182,212,0.1)]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold tracking-wider text-cyan-300 uppercase flex items-center gap-1">
                  <span>🎯</span>
                  <span>WHY IS IT RELEVANT HERE? ({contextEntity} CONTEXT)</span>
                </span>
                <span className="text-[9px] font-mono text-cyan-400 bg-cyan-500/20 px-1.5 py-0.5 rounded">
                  CONTEXTUAL DOCTRINE
                </span>
              </div>
              <p className="text-xs text-slate-100 leading-relaxed font-normal">
                {contextNote}
              </p>
            </div>
          ) : term.contextualFraming && Object.keys(term.contextualFraming).length > 0 && (
            <div className="space-y-2">
              <span className="block text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
                CONTEXTUAL RELEVANCE BY NATION
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {Object.entries(term.contextualFraming).map(([actorCode, actorNote]) => (
                  <div key={actorCode} className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-[11px] space-y-0.5">
                    <span className="text-cyan-300 font-mono font-bold block">{actorCode} CONTEXT</span>
                    <p className="text-slate-300 leading-normal">{actorNote}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION: WHO IS INVOLVED? / MAJOR ACTORS */}
          {term.majorActors && term.majorActors.length > 0 && (
            <div>
              <span className="block text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase mb-1.5">
                WHO IS INVOLVED? / MAJOR ACTORS
              </span>
              <div className="flex flex-wrap gap-1.5">
                {term.majorActors.map((actor, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      if (onSelectCountry) {
                        onSelectCountry(actor);
                        onClose();
                      }
                    }}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 hover:bg-cyan-950/60 border border-white/10 hover:border-cyan-400 text-xs font-mono text-slate-200 hover:text-white transition-colors cursor-pointer"
                    title={`Explore dossier for ${actor}`}
                  >
                    <span>🌐</span>
                    <span>{actor}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* SECTION: HISTORICAL ORIGIN & CURRENT RELEVANCE */}
          {(term.historicalBackground || term.currentRelevance) && (
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => setShowFullDoctrine(!showFullDoctrine)}
                className="flex items-center gap-1.5 text-[11px] font-mono font-semibold text-slate-400 hover:text-cyan-300 cursor-pointer"
              >
                <ChevronRight className={`w-3.5 h-3.5 transition-transform ${showFullDoctrine ? 'rotate-90' : ''}`} />
                <span>{showFullDoctrine ? 'HIDE HISTORICAL & CURRENT CONTEXT' : 'VIEW HISTORICAL BACKGROUND & CURRENT RELEVANCE'}</span>
              </button>

              {showFullDoctrine && (
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-3 animate-fade-in text-xs">
                  {term.historicalBackground && (
                    <div>
                      <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase mb-1">
                        HISTORICAL ORIGIN
                      </span>
                      <p className="text-slate-300 leading-relaxed">{term.historicalBackground}</p>
                    </div>
                  )}
                  {term.currentRelevance && (
                    <div className="pt-2 border-t border-white/5">
                      <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase mb-1">
                        CURRENT RELEVANCE (2024–2026)
                      </span>
                      <p className="text-slate-300 leading-relaxed">{term.currentRelevance}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* SECTION: RELATED TERMS (INTERCONNECTED GRAPH) */}
          {term.relatedTerms && term.relatedTerms.length > 0 && (
            <div className="pt-2 border-t border-white/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase flex items-center gap-1">
                  <span>🔗</span>
                  <span>RELATED TERMS & CONCEPTS</span>
                </span>
                <span className="text-[9px] font-mono text-slate-500">
                  CLICK TO EXPLORE CHAIN
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {term.relatedTerms.map((relId) => {
                  const relTerm = getGeopoliticalTerm(relId);
                  const relName = relTerm?.name || relId.replace(/[\-_]/g, ' ').toUpperCase();
                  return (
                    <button
                      key={relId}
                      type="button"
                      onClick={() => navigateToTerm(relId)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-500/30 hover:border-cyan-400 text-xs font-mono text-cyan-300 hover:text-white transition-all cursor-pointer shadow-sm"
                      title={`Explore related term: ${relName}`}
                    >
                      <span>{relName}</span>
                      <ArrowRight className="w-2.5 h-2.5 text-cyan-400" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* SECTION: RELATED LOCATIONS */}
          {term.relatedLocations && term.relatedLocations.length > 0 && (
            <div>
              <span className="block text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase mb-1.5">
                STRATEGIC GEOGRAPHIC LOCATIONS
              </span>
              <div className="flex flex-wrap gap-1.5">
                {term.relatedLocations.map((loc, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300"
                  >
                    <MapPin className="w-2.5 h-2.5 text-red-400" />
                    <span>{loc}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* SECTION: SOURCES & "LEARN MORE →" FOOTER */}
        <div className="p-4 border-t border-white/10 bg-white/[0.02] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          
          {/* Authoritative & Wikipedia Links */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">
              LEARN MORE:
            </span>

            {/* Wikipedia button */}
            {term.wikipediaUrl && (
              <a
                href={term.wikipediaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-xs font-mono text-white transition-colors cursor-pointer"
                title="Read full article on Wikipedia"
              >
                <span>Wikipedia</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            )}

            {/* Official / Authoritative Sources */}
            {term.officialSources && term.officialSources.map((source, idx) => (
              <a
                key={idx}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-500/30 hover:border-cyan-400 text-xs font-mono text-cyan-300 hover:text-white transition-colors cursor-pointer"
                title={source.title}
              >
                <span>{source.title.length > 28 ? source.title.slice(0, 26) + '…' : source.title}</span>
                <ExternalLink className="w-3 h-3 text-cyan-400" />
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-xs font-mono font-semibold text-white transition-colors cursor-pointer"
          >
            DISMISS
          </button>
        </div>

      </div>
    </div>
  );
}
