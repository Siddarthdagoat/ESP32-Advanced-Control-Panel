import React, { useState } from 'react';
import { 
  X, 
  AlertTriangle, 
  MapPin, 
  Clock, 
  ExternalLink, 
  FileText, 
  Shield, 
  Globe2, 
  Compass, 
  HelpCircle, 
  Bot, 
  ChevronRight,
  TrendingUp,
  Activity,
  Layers,
  CheckCircle2,
  Share2
} from 'lucide-react';
import { formatFreshnessLabel, formatUtcTimestamp } from '../../services/intelligenceFeed';
import { INTELLIGENCE_PRIORITIES, CONFIDENCE_LEVELS } from '../../data/geointelEventsData';

/**
 * Concise Geopolitical Alert Event Panel
 * 
 * Displays immediate, source-backed intelligence when an alert marker is clicked on the 3D globe:
 * - Headline & exact location
 * - Category and 4-tier Severity badge (CRITICAL #FF3030, HIGH, MEDIUM, LOW)
 * - Verification status (VERIFIED, REPORTED, ESTIMATE, DISPUTED, ANALYSIS)
 * - What Happened
 * - When it happened (occurrence vs publication timestamps)
 * - Why It Matters (Plain-language "Why does this matter?" layer)
 * - Potential Global Implications
 * - Potential Implications for India
 * - Source links & publication timestamps
 * - When GEOINTEL last retrieved & updated
 * - Buttons to open Complete Event Dossier, Ask AI Agent, or Focus Camera on Globe
 */
export default function AlertQuickPanel({
  event,
  onClose,
  onOpenFullDossier,
  onAskAi,
  onFocusCoordinates,
  onSelectCountry,
  onSelectConcept,
  onSelectAgreement
}) {
  const [showWhyExplainer, setShowWhyExplainer] = useState(false);

  if (!event) return null;

  const priorityMeta = INTELLIGENCE_PRIORITIES[event.priority] || INTELLIGENCE_PRIORITIES.MEDIUM;
  const isCritical = event.priority === 'CRITICAL';
  const confidenceMeta = CONFIDENCE_LEVELS[event.confidence] || CONFIDENCE_LEVELS.REPORTED;
  const freshnessLabel = formatFreshnessLabel(event);

  // Parse location and actors
  const locationLabel = event.sector || event.theater || event.location || (event.actors && event.actors[0]?.name) || 'Global Strategic Theater';
  const primaryCountry = event.actors && event.actors[0]?.countryCode;

  // Format dates honestly
  const eventDate = event.date || event.year || 'Current Development';
  const pubDateStr = event.publishedAt ? formatUtcTimestamp(event.publishedAt) : (event.lastVerifiedAt ? formatUtcTimestamp(event.lastVerifiedAt) : 'Recently Dispatched');
  const lastUpdatedStr = event.lastVerifiedAt ? formatUtcTimestamp(event.lastVerifiedAt) : formatUtcTimestamp(new Date().toISOString());

  return (
    <aside 
      className="fixed bottom-6 left-6 z-40 w-[92vw] max-w-lg sm:w-[480px] max-h-[85vh] flex flex-col rounded-2xl bg-[#080808]/95 border border-white/20 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.85)] overflow-hidden font-sans select-none animate-in fade-in slide-in-from-bottom-4 duration-300 pointer-events-auto"
      role="dialog"
      aria-labelledby="alert-panel-title"
    >
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/15 bg-white/[0.03]">
        <div className="flex items-center gap-2">
          {/* Priority Badge */}
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border ${
            isCritical
              ? 'bg-[#FF3030]/20 text-[#FF3030] border-[#FF3030] animate-pulse shadow-[0_0_12px_rgba(255,48,48,0.4)]'
              : event.priority === 'HIGH'
              ? 'bg-white/20 text-white border-white/60'
              : 'bg-white/10 text-[#C0C0C0] border-white/20'
          }`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            <span>{priorityMeta.label} ALERT</span>
          </span>

          {/* Category Pill */}
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#A0A0A0] bg-white/5 px-2 py-0.5 rounded border border-white/10">
            {event.category || 'GEOPOLITICS'}
          </span>

          {/* Verification Badge */}
          <span className={`text-[9.5px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border ${confidenceMeta.border || 'border-white/20'} ${confidenceMeta.color || 'text-[#E0E0E0]'} bg-black/40`}>
            {event.confidence || 'REPORTED'}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-1 rounded-lg text-[#888888] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close Alert Panel"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Scrollable Body Content */}
      <div className="p-4 sm:p-5 overflow-y-auto space-y-4 text-slate-100 divide-y divide-white/10">
        
        {/* Title & Location */}
        <div className="space-y-2">
          <h2 id="alert-panel-title" className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug font-sans">
            {event.headline || event.title}
          </h2>

          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#A8A8A8]">
            <span className="flex items-center gap-1.5 text-white/90">
              <MapPin className="w-3.5 h-3.5 text-white" />
              <span>{locationLabel}</span>
              {event.lat !== undefined && event.lng !== undefined && (
                <span className="text-[#888888] text-[10px]">
                  ({event.lat.toFixed(2)}°, {event.lng.toFixed(2)}°)
                </span>
              )}
            </span>

            <span>·</span>

            <span className="flex items-center gap-1 text-[#888888]">
              <Clock className="w-3.5 h-3.5" />
              <span>{eventDate}</span>
            </span>

            {primaryCountry && (
              <button
                onClick={() => onSelectCountry && onSelectCountry(primaryCountry)}
                className="text-white hover:underline text-[11px] font-bold"
                title={`Open Country Dossier for ${primaryCountry}`}
              >
                [{primaryCountry} DOSSIER]
              </button>
            )}
          </div>
        </div>

        {/* 1. What Happened */}
        <div className="pt-3 space-y-1.5">
          <h3 className="text-[11px] font-mono tracking-widest uppercase text-[#888888] font-bold flex items-center gap-1.5">
            <Activity className="w-3 h-3 text-white" />
            WHAT HAPPENED
          </h3>
          <p className="text-xs sm:text-sm text-[#E0E0E0] leading-relaxed font-light">
            {event.whatHappened || event.description || event.summary || 'Specific situational details currently monitored by open-source feeds.'}
          </p>
        </div>

        {/* 2. Why It Matters (Interactive Plain-Language Layer) */}
        <div className="pt-3 space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-[11px] font-mono tracking-widest uppercase text-white font-bold flex items-center gap-1.5">
              <TrendingUp className="w-3 h-3 text-white" />
              WHY IT MATTERS
            </h3>
            <button
              onClick={() => setShowWhyExplainer(prev => !prev)}
              className="text-[10px] font-mono text-white/80 hover:text-white underline flex items-center gap-1 cursor-pointer"
            >
              <HelpCircle className="w-3 h-3" />
              <span>{showWhyExplainer ? 'Summary View' : 'Beginner Breakdown'}</span>
            </button>
          </div>

          <p className="text-xs sm:text-sm text-[#D4D4D4] leading-relaxed font-light">
            {event.whyItMatters || 'Strategic balance-of-power shift with consequences across regional trade, security, and alliance dynamics.'}
          </p>

          {/* Plain-Language Beginner Layer */}
          {showWhyExplainer && (
            <div className="p-3 rounded-xl bg-white/[0.04] border border-white/15 space-y-1.5 text-xs text-[#EAEAEA] animate-in fade-in duration-200">
              <span className="text-[9.5px] font-mono font-bold tracking-widest text-white uppercase block">
                PLAIN-LANGUAGE EXPLANATION:
              </span>
              <p className="leading-relaxed">
                In simple terms, this event impacts the balance of power because sovereign nations rely on stability in this region for trade, energy routes, or border security. When this equilibrium is challenged, neighboring countries are forced to reposition military assets, renegotiate alliances, or impose economic countermeasures to protect their citizens.
              </p>
            </div>
          )}
        </div>

        {/* 3. Global & Regional Implications */}
        {event.globalImplications && (
          <div className="pt-3 space-y-1.5">
            <h3 className="text-[11px] font-mono tracking-widest uppercase text-[#888888] font-bold flex items-center gap-1.5">
              <Globe2 className="w-3 h-3 text-white" />
              GLOBAL IMPLICATIONS
            </h3>
            <p className="text-xs text-[#CCCCCC] leading-relaxed">
              {typeof event.globalImplications === 'string'
                ? event.globalImplications
                : Object.entries(event.globalImplications).map(([k, v]) => `${k.toUpperCase()}: ${v}`).join(' · ')}
            </p>
          </div>
        )}

        {/* 4. Implications for India */}
        {event.indiaImpact && (
          <div className="pt-3 space-y-1.5">
            <h3 className="text-[11px] font-mono tracking-widest uppercase text-white font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_6px_#FFFFFF]" />
              IMPLICATIONS FOR INDIA
            </h3>
            <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/20 text-xs text-[#E8E8E8] leading-relaxed space-y-1">
              {event.indiaImpact.documented && (
                <p><strong className="text-white font-mono text-[10px]">DOCUMENTED:</strong> {event.indiaImpact.documented}</p>
              )}
              {event.indiaImpact.potential && (
                <p><strong className="text-white font-mono text-[10px]">STRATEGIC RISK:</strong> {event.indiaImpact.potential}</p>
              )}
              {event.indiaImpact.analytical && (
                <p><strong className="text-[#A0A0A0] font-mono text-[10px]">NEW DELHI POSTURE:</strong> {event.indiaImpact.analytical}</p>
              )}
            </div>
          </div>
        )}

        {/* 5. Sources, Verification & Timestamps */}
        <div className="pt-3 space-y-2">
          <div className="flex items-center justify-between text-[10px] font-mono text-[#888888]">
            <span>FIRST REPORTED: {pubDateStr}</span>
            <span>LAST VERIFIED: {lastUpdatedStr}</span>
          </div>

          {/* Sources Links */}
          {Array.isArray(event.sources) && event.sources.length > 0 && (
            <div className="space-y-1">
              <span className="text-[9.5px] font-mono uppercase tracking-wider text-[#777777] block">
                CORROBORATING SOURCES ({event.sources.length}):
              </span>
              <div className="flex flex-wrap gap-1.5">
                {event.sources.slice(0, 3).map((src, i) => (
                  <a
                    key={i}
                    href={src.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/[0.06] hover:bg-white/15 border border-white/10 text-[10px] font-mono text-[#D0D0D0] hover:text-white transition-colors"
                  >
                    <span>{src.title || src.name || 'Source Wire'}</span>
                    <ExternalLink className="w-2.5 h-2.5 text-[#888888]" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-3 sm:p-4 border-t border-white/15 bg-[#0D0D0D] flex flex-col sm:flex-row items-center gap-2">
        <button
          onClick={() => onOpenFullDossier && onOpenFullDossier(event)}
          className="w-full sm:flex-1 py-2.5 px-4 rounded-xl bg-white text-black hover:bg-[#EAEAEA] text-xs font-mono font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>OPEN COMPLETE EVENT DOSSIER</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          {event.lat !== undefined && event.lng !== undefined && (
            <button
              onClick={() => onFocusCoordinates && onFocusCoordinates(event.lat, event.lng, event.title)}
              className="flex-1 sm:flex-none p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-mono flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              title="Center 3D Globe on Event"
            >
              <Compass className="w-3.5 h-3.5" />
              <span className="sm:hidden">FOCUS</span>
            </button>
          )}

          <button
            onClick={() => onAskAi && onAskAi(event)}
            className="flex-1 sm:flex-none p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-mono flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            title="Ask Geopolitical AI Assistant about this event"
          >
            <Bot className="w-3.5 h-3.5" />
            <span className="text-[11px] font-bold">ASK AI</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
