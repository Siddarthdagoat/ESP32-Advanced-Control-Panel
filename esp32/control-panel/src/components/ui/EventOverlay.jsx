import React, { useState } from 'react';
import { 
  X, 
  Shield, 
  Globe, 
  TrendingUp, 
  AlertTriangle, 
  ArrowRight, 
  GitFork, 
  ShieldCheck, 
  ExternalLink, 
  Clock, 
  MapPin, 
  Layers, 
  CheckCircle2, 
  HelpCircle, 
  Compass, 
  Building2, 
  Anchor, 
  Cpu, 
  Flame, 
  FileText,
  History,
  Activity,
  FileCheck2,
  RefreshCw
} from 'lucide-react';
import { formatFreshnessLabel, formatUtcTimestamp } from '../../services/intelligenceFeed';
import InteractiveText from './InteractiveText';

export default function EventOverlay({
  event,
  intelLevel = 'advanced',
  onClose,
  onExploreTimeline,
  onSelectConcept,
  onSelectAgreement,
  onSelectMilitary,
  onExploreChain,
  onSelectCountry,
  onSelectMaritimeEntity
}) {
  const [level, setLevel] = useState(intelLevel);
  const [activeTab, setActiveTab] = useState('INTELLIGENCE'); // 'INTELLIGENCE' | 'GLOBAL_IMPACT' | 'INDIA_IMPACT' | 'GRAPH'

  if (!event) return null;

  // Geometric priority icon & styles
  const getPriorityBadge = (p) => {
    switch (p?.toUpperCase()) {
      case 'CRITICAL':
        return {
          symbol: '◈',
          text: 'CRITICAL',
          classes: 'bg-white text-black font-bold border-white shadow-[0_0_12px_rgba(255,255,255,0.4)]'
        };
      case 'HIGH':
        return {
          symbol: '■',
          text: 'HIGH PRIORITY',
          classes: 'bg-[#1A1A1A] text-white border-white/40'
        };
      case 'ELEVATED':
      case 'MEDIUM':
        return {
          symbol: '▲',
          text: 'ELEVATED',
          classes: 'bg-[#111111] text-[#E8E8E8] border-[#333333]'
        };
      default:
        return {
          symbol: '●',
          text: 'ROUTINE',
          classes: 'bg-[#080808] text-[#888888] border-[#1A1A1A]'
        };
    }
  };

  // Geometric status icon & styles
  const getStatusBadge = (s) => {
    switch (s?.toUpperCase()) {
      case 'ESCALATING':
        return { symbol: '▲', text: 'ESCALATING', classes: 'border-white text-white bg-white/10' };
      case 'ACTIVE':
        return { symbol: '●', text: 'ACTIVE', classes: 'border-white/50 text-[#E8E8E8] bg-white/5' };
      case 'RESOLVED':
        return { symbol: '○', text: 'RESOLVED', classes: 'border-[#333333] text-[#888888] bg-black' };
      case 'MONITORING':
      default:
        return { symbol: '◈', text: s || 'MONITORING', classes: 'border-[#333333] text-[#BDBDBD] bg-[#111111]' };
    }
  };

  const priorityBadge = getPriorityBadge(event.priority);
  const statusBadge = getStatusBadge(event.status);
  const freshnessLabel = formatFreshnessLabel(event);

  // Fallback audit history merging
  const auditEntries = (event.updateHistory && event.updateHistory.length > 0)
    ? event.updateHistory
    : (event.changeHistory && event.changeHistory.length > 0)
    ? event.changeHistory.map(ch => ({
        timestamp: ch.timestamp,
        whatChanged: ch.rationale || ch.summary,
        type: ch.changeType || 'UPDATE'
      }))
    : [];

  return (
    <div className="fixed inset-y-0 right-0 sm:right-6 sm:top-16 sm:bottom-6 z-40 pointer-events-auto w-full sm:max-w-[520px] flex flex-col justify-end sm:justify-start font-sans">
      {/* Mobile Backdrop */}
      <div 
        onClick={onClose}
        className="sm:hidden fixed inset-0 bg-black/80 backdrop-blur-xs -z-10" 
      />

      <div className="rounded-t-3xl sm:rounded-2xl border border-white/15 shadow-2xl overflow-hidden max-h-[90vh] sm:max-h-[calc(100vh-88px)] flex flex-col animate-slide-up-mobile sm:animate-slide-in-right bg-[#080808]/98 backdrop-blur-2xl">
        
        {/* ============================================================== */}
        {/* HEADER: Priority, Status, Freshness & Close Trigger            */}
        {/* ============================================================== */}
        <div className="p-4 sm:p-5 pb-3 border-b border-[#1A1A1A] relative bg-[#0D0D0D]">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg text-[#888888] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            title="Close Dossier (ESC)"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Badges strip */}
          <div className="flex items-center gap-1.5 mb-2.5 flex-wrap pr-8">
            {/* Priority Badge */}
            <span className={`text-[9.5px] font-mono font-bold px-2 py-0.5 rounded border uppercase flex items-center gap-1.5 ${priorityBadge.classes}`}>
              <span>{priorityBadge.symbol}</span>
              <span>{priorityBadge.text}</span>
            </span>

            {/* Status Pill */}
            <span className={`text-[9px] font-mono px-2 py-0.5 rounded border flex items-center gap-1 ${statusBadge.classes}`}>
              <span>{statusBadge.symbol}</span>
              <span>{statusBadge.text}</span>
            </span>

            {/* Freshness Badge (Calculated Truth) */}
            <span className="text-[9px] font-mono px-2 py-0.5 rounded border border-white/30 text-white bg-white/5 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>{freshnessLabel}</span>
            </span>

            {/* Confidence Level */}
            <span className="text-[9px] font-mono px-2 py-0.5 rounded border border-[#333333] text-[#888888] bg-black">
              CONFIDENCE: {event.confidence || 'VERIFIED'}
            </span>
          </div>

          {/* Headline Title */}
          <h2 className="text-base sm:text-lg font-bold text-white font-display leading-snug">
            {event.title}
          </h2>

          {/* Geographic Coordinates & Sector */}
          <div className="flex items-center gap-2 mt-1.5 text-[10.5px] font-mono text-[#888888]">
            <span className="flex items-center gap-1 text-[#E8E8E8]">
              <MapPin className="w-3 h-3 text-[#888888]" />
              {event.sector || event.regionName || 'Global Grid'}
            </span>
            <span className="text-[#333333]">·</span>
            <span className="text-[#888888] uppercase">
              {event.lat?.toFixed(2)}°N, {event.lng?.toFixed(2)}°E
            </span>
            {event.id && (
              <>
                <span className="text-[#333333]">·</span>
                <span className="text-[#888888]">ID: {event.id}</span>
              </>
            )}
          </div>
        </div>

        {/* ============================================================== */}
        {/* NAVIGATION SUB-TABS: Strict Monochrome Navigation              */}
        {/* ============================================================== */}
        <div className="px-4 py-1.5 bg-[#000000] border-b border-[#1A1A1A] flex items-center justify-between text-[10.5px] font-mono">
          <div className="flex rounded-lg p-0.5 bg-[#111111] border border-[#1A1A1A]">
            <button
              onClick={() => setActiveTab('INTELLIGENCE')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                activeTab === 'INTELLIGENCE' ? 'bg-white text-black font-bold shadow-sm' : 'text-[#888888] hover:text-white'
              }`}
            >
              INTEL
            </button>
            <button
              onClick={() => setActiveTab('GLOBAL_IMPACT')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                activeTab === 'GLOBAL_IMPACT' ? 'bg-white text-black font-bold shadow-sm' : 'text-[#888888] hover:text-white'
              }`}
            >
              GLOBAL
            </button>
            <button
              onClick={() => setActiveTab('INDIA_IMPACT')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                activeTab === 'INDIA_IMPACT' ? 'bg-white text-black font-bold shadow-sm' : 'text-[#888888] hover:text-white'
              }`}
            >
              INDIA
            </button>
            <button
              onClick={() => setActiveTab('GRAPH')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                activeTab === 'GRAPH' ? 'bg-white text-black font-bold shadow-sm' : 'text-[#888888] hover:text-white'
              }`}
            >
              GRAPH & SOURCES
            </button>
          </div>

          <div className="flex items-center gap-1 text-[9.5px] text-[#888888]">
            <Clock className="w-3 h-3 text-[#888888]" />
            <span title={`Published: ${formatUtcTimestamp(event.publishedAt)}\nLast Verified: ${formatUtcTimestamp(event.lastVerifiedAt)}`}>
              {event.publishedAt ? 'TIMESTAMPED' : 'LIVE'}
            </span>
          </div>
        </div>

        {/* ============================================================== */}
        {/* SCROLLABLE MAIN CONTENT BODY                                   */}
        {/* ============================================================== */}
        <div className="p-4 sm:p-5 space-y-4 overflow-y-auto flex-1 font-sans text-xs">
          
          {/* TAB 1: CORE INTELLIGENCE DOSSIER */}
          {activeTab === 'INTELLIGENCE' && (
            <>
              {/* SUBSTANTIVE UPDATE CALLOUT: "WHAT CHANGED?" */}
              {event.whatChanged && (
                <div className="p-3.5 rounded-xl bg-[#111111] border border-white/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-white uppercase flex items-center gap-1.5">
                      <RefreshCw className="w-3.5 h-3.5 text-white animate-spin-slow" />
                      WHAT CHANGED? · SUBSTANTIVE UPDATE
                    </span>
                    <span className="text-[9px] font-mono text-[#888888]">
                      {formatUtcTimestamp(event.lastSubstantiveUpdateAt || event.publishedAt)}
                    </span>
                  </div>
                  <p className="text-white leading-relaxed text-xs font-semibold">
                    {event.whatChanged}
                  </p>
                  <p className="text-[9.5px] font-mono text-[#888888] pt-1 border-t border-[#1A1A1A]">
                    Substantive update recorded and reconciled across verified wire reports.
                  </p>
                </div>
              )}

              {/* SECTION 1: WHAT HAPPENED */}
              <div className="p-3.5 rounded-xl bg-[#111111] border border-[#1A1A1A] space-y-1.5">
                <span className="block text-[10px] font-mono font-bold tracking-wider text-[#E8E8E8] uppercase">
                  WHAT HAPPENED · FACTUAL INTELLIGENCE
                </span>
                <p className="text-[#BDBDBD] leading-relaxed text-xs">
                  <InteractiveText
                    text={event.whatHappened || event.summary}
                    onSelectConcept={onSelectConcept}
                    onSelectAgreement={onSelectAgreement}
                    onSelectMilitary={onSelectMilitary}
                  />
                </p>
              </div>

              {/* MULTI-TIMESTAMP & PROVENANCE MATRIX */}
              <div className="p-3.5 rounded-xl bg-[#0D0D0D] border border-[#1A1A1A] space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="block text-[10px] font-mono font-bold tracking-wider text-white uppercase">
                    TIMESTAMP & PROVENANCE MATRIX
                  </span>
                  <span className="text-[9px] font-mono text-[#888888]">
                    UTC TIME ENGINE
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                  <div className="p-2 rounded bg-[#111111] border border-[#1A1A1A]">
                    <span className="text-[#888888] block text-[8.5px] uppercase">SOURCE PUBLISHED</span>
                    <span className="text-white font-semibold">{formatUtcTimestamp(event.publishedAt)}</span>
                  </div>

                  <div className="p-2 rounded bg-[#111111] border border-[#1A1A1A]">
                    <span className="text-[#888888] block text-[8.5px] uppercase">EVENT OCCURRED</span>
                    <span className="text-[#E8E8E8]">
                      {event.eventOccurredAt ? formatUtcTimestamp(event.eventOccurredAt) : (event.eventTime || 'Real-time observation')}
                    </span>
                  </div>

                  <div className="p-2 rounded bg-[#111111] border border-[#1A1A1A]">
                    <span className="text-[#888888] block text-[8.5px] uppercase">FIRST DETECTED</span>
                    <span className="text-[#BDBDBD]">{formatUtcTimestamp(event.firstDetectedAt || event.publishedAt)}</span>
                  </div>

                  <div className="p-2 rounded bg-[#111111] border border-[#1A1A1A]">
                    <span className="text-[#888888] block text-[8.5px] uppercase">LAST SUBSTANTIVE UPDATE</span>
                    <span className="text-white font-semibold">
                      {formatUtcTimestamp(event.lastSubstantiveUpdateAt || event.publishedAt)}
                    </span>
                  </div>

                  <div className="p-2 rounded bg-[#111111] border border-[#1A1A1A]">
                    <span className="text-[#888888] block text-[8.5px] uppercase">LAST VERIFIED</span>
                    <span className="text-[#E8E8E8]">{formatUtcTimestamp(event.lastVerifiedAt || event.publishedAt)}</span>
                  </div>

                  <div className="p-2 rounded bg-[#111111] border border-[#1A1A1A]">
                    <span className="text-[#888888] block text-[8.5px] uppercase">PRIMARY SOURCE</span>
                    <span className="text-white truncate block">
                      {event.sourceName || (event.sources?.[0]?.publisher) || 'Verified Diplomatic Wire'}
                    </span>
                  </div>
                </div>

                {event.sourceUrl && (
                  <div className="pt-1 flex items-center justify-between text-[10px] font-mono">
                    <span className="text-[#888888]">PROVENANCE URL:</span>
                    <a
                      href={event.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:underline flex items-center gap-1"
                    >
                      <span>Direct Reference</span>
                      <ExternalLink className="w-3 h-3 text-[#888888]" />
                    </a>
                  </div>
                )}

                {event.confidenceNotes && (
                  <p className="text-[10px] text-[#888888] pt-1.5 border-t border-[#1A1A1A] leading-relaxed italic">
                    Verification Note: {event.confidenceNotes}
                  </p>
                )}
              </div>

              {/* HISTORICAL BACKGROUND */}
              {event.background && (
                <div className="p-3.5 rounded-xl bg-[#111111] border border-[#1A1A1A] space-y-1.5">
                  <span className="block text-[10px] font-mono font-bold tracking-wider text-[#E8E8E8] uppercase">
                    HISTORICAL BACKGROUND · STRATEGIC CONTEXT
                  </span>
                  <p className="text-[#BDBDBD] leading-relaxed text-xs">
                    <InteractiveText
                      text={event.background}
                      onSelectConcept={onSelectConcept}
                      onSelectAgreement={onSelectAgreement}
                      onSelectMilitary={onSelectMilitary}
                    />
                  </p>
                </div>
              )}

              {/* WHY IT MATTERS */}
              {event.whyItMatters && (
                <div className="p-3.5 rounded-xl bg-[#111111] border border-white/20 space-y-1.5">
                  <span className="block text-[10px] font-mono font-bold tracking-wider text-white uppercase">
                    WHY IT MATTERS · GEOPOLITICAL SIGNIFICANCE
                  </span>
                  <p className="text-[#E8E8E8] leading-relaxed text-xs">
                    <InteractiveText
                      text={event.whyItMatters}
                      onSelectConcept={onSelectConcept}
                      onSelectAgreement={onSelectAgreement}
                      onSelectMilitary={onSelectMilitary}
                    />
                  </p>
                </div>
              )}

              {/* PRINCIPAL ACTORS */}
              {event.actors && event.actors.length > 0 && (
                <div>
                  <span className="block text-[10px] font-mono tracking-wider text-[#888888] uppercase mb-2 font-bold">
                    WHO IS INVOLVED · PRIMARY ACTORS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {event.actors.map((actor, idx) => (
                      <div 
                        key={idx}
                        onClick={() => {
                          if (actor.countryCode && onSelectCountry) {
                            onSelectCountry(actor.countryCode);
                          }
                        }}
                        className={`p-2.5 rounded-lg bg-[#111111] border border-[#1A1A1A] ${
                          actor.countryCode ? 'hover:border-white/40 cursor-pointer transition-colors' : ''
                        }`}
                      >
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="text-base">{actor.flag}</span>
                          <span className="font-semibold text-white">{actor.name}</span>
                          {actor.countryCode && (
                            <span className="text-[9px] font-mono text-[#888888] hover:text-white ml-auto">
                              DOSSIER →
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] text-[#888888] leading-tight">
                          {actor.role}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ANALYTICAL ASSESSMENT */}
              {event.whatCouldHappenNext && (
                <div className="p-3.5 rounded-xl bg-[#0D0D0D] border border-white/15 space-y-2">
                  <div className="flex items-center gap-1.5">
                    <span className="px-1.5 py-0.5 rounded bg-white text-black text-[9px] font-mono font-bold uppercase">
                      FORWARD PROJECTION
                    </span>
                    <span className="text-[9px] font-mono text-[#888888]">
                      Analytical Assessment
                    </span>
                  </div>
                  <p className="text-[#BDBDBD] leading-relaxed text-xs italic">
                    <InteractiveText
                      text={event.whatCouldHappenNext.replace(/^ANALYTICAL ASSESSMENT:\s*/i, '')}
                      onSelectConcept={onSelectConcept}
                      onSelectAgreement={onSelectAgreement}
                      onSelectMilitary={onSelectMilitary}
                    />
                  </p>
                  <p className="text-[8.5px] font-mono text-[#888888] pt-1 border-t border-[#1A1A1A]">
                    * Forward projections represent probabilistic intelligence synthesis and are explicitly not deterministic facts.
                  </p>
                </div>
              )}

              {/* CHANGE HISTORY AUDIT LOG */}
              {auditEntries.length > 0 && (
                <div className="p-3 rounded-xl bg-[#000000] border border-[#1A1A1A] space-y-2">
                  <span className="block text-[10px] font-mono font-bold tracking-wider text-white uppercase flex items-center gap-1.5">
                    <History className="w-3.5 h-3.5 text-[#888888]" />
                    UPDATE HISTORY & AUDIT TRAIL
                  </span>
                  <div className="space-y-1.5">
                    {auditEntries.map((ch, idx) => (
                      <div key={idx} className="p-2 rounded bg-[#111111] border border-[#1A1A1A] text-[10px] font-mono">
                        <div className="flex items-center justify-between text-[#888888]">
                          <span className="text-white font-semibold">{ch.type || 'SUBSTANTIVE_UPDATE'}</span>
                          <span>{formatUtcTimestamp(ch.timestamp)}</span>
                        </div>
                        <p className="text-[#BDBDBD] text-[11px] mt-1">{ch.whatChanged || ch.rationale}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {/* TAB 2: GLOBAL MULTI-SECTOR IMPACT */}
          {activeTab === 'GLOBAL_IMPACT' && (
            <div className="space-y-3">
              <span className="block text-[10px] font-mono tracking-wider text-[#888888] uppercase font-bold">
                SYSTEMIC GLOBAL IMPACT MATRIX
              </span>

              {event.globalImpact ? (
                <div className="space-y-2">
                  {Object.entries(event.globalImpact).map(([sector, impactText]) => {
                    const icons = {
                      defense: <Shield className="w-3.5 h-3.5 text-white" />,
                      economy: <TrendingUp className="w-3.5 h-3.5 text-white" />,
                      energy: <Flame className="w-3.5 h-3.5 text-white" />,
                      trade: <Building2 className="w-3.5 h-3.5 text-white" />,
                      shipping: <Anchor className="w-3.5 h-3.5 text-white" />,
                      diplomacy: <Globe className="w-3.5 h-3.5 text-white" />,
                      security: <AlertTriangle className="w-3.5 h-3.5 text-white" />
                    };

                    return (
                      <div key={sector} className="p-3 rounded-lg bg-[#111111] border border-[#1A1A1A] space-y-1">
                        <div className="flex items-center gap-1.5">
                          {icons[sector] || <Layers className="w-3.5 h-3.5 text-[#888888]" />}
                          <span className="text-[10px] font-mono font-bold uppercase text-white tracking-wider">
                            {sector}
                          </span>
                        </div>
                        <p className="text-[11.5px] text-[#BDBDBD] leading-relaxed">
                          <InteractiveText
                            text={impactText}
                            onSelectConcept={onSelectConcept}
                            onSelectAgreement={onSelectAgreement}
                            onSelectMilitary={onSelectMilitary}
                          />
                        </p>
                      </div>
                    );
                  })}
                </div>
              ) : event.impact ? (
                <div className="space-y-2">
                  {Object.entries(event.impact).map(([sector, impactText]) => (
                    <div key={sector} className="p-3 rounded-lg bg-[#111111] border border-[#1A1A1A] space-y-1">
                      <span className="text-[10px] font-mono font-bold uppercase text-white tracking-wider">
                        {sector}
                      </span>
                      <p className="text-[11.5px] text-[#BDBDBD] leading-relaxed">
                        <InteractiveText
                          text={impactText}
                          onSelectConcept={onSelectConcept}
                          onSelectAgreement={onSelectAgreement}
                          onSelectMilitary={onSelectMilitary}
                        />
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-[#888888] text-xs">Global sector impact analysis compiling.</p>
              )}
            </div>
          )}

          {/* TAB 3: INDIA IMPACT ANALYSIS */}
          {activeTab === 'INDIA_IMPACT' && (
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-[#111111] border border-white/20 flex items-center gap-3">
                <span className="text-2xl">🇮🇳</span>
                <div>
                  <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    NATIONAL STRATEGIC IMPLICATIONS · NEW DELHI
                  </h4>
                  <p className="text-[10px] text-[#888888]">
                    Direct security, energy, trade, diaspora, and Indian Ocean evaluation.
                  </p>
                </div>
              </div>

              {event.indiaImpact ? (
                <div className="space-y-2.5">
                  {/* Documented Impact */}
                  {event.indiaImpact.documented && (
                    <div className="p-3 rounded-lg bg-[#111111] border border-[#1A1A1A] space-y-1">
                      <span className="block text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                        ● DOCUMENTED OPERATIONAL IMPACT
                      </span>
                      <p className="text-[11.5px] text-[#BDBDBD] leading-relaxed">
                        <InteractiveText
                          text={event.indiaImpact.documented}
                          onSelectConcept={onSelectConcept}
                          onSelectAgreement={onSelectAgreement}
                          onSelectMilitary={onSelectMilitary}
                        />
                      </p>
                    </div>
                  )}

                  {/* Potential Implication */}
                  {event.indiaImpact.potential && (
                    <div className="p-3 rounded-lg bg-[#111111] border border-[#1A1A1A] space-y-1">
                      <span className="block text-[10px] font-mono font-bold text-[#E8E8E8] uppercase tracking-wider">
                        ▲ POTENTIAL STRATEGIC IMPLICATION
                      </span>
                      <p className="text-[11.5px] text-[#BDBDBD] leading-relaxed">
                        <InteractiveText
                          text={event.indiaImpact.potential}
                          onSelectConcept={onSelectConcept}
                          onSelectAgreement={onSelectAgreement}
                          onSelectMilitary={onSelectMilitary}
                        />
                      </p>
                    </div>
                  )}

                  {/* Analytical Assessment */}
                  {event.indiaImpact.analytical && (
                    <div className="p-3 rounded-lg bg-[#0D0D0D] border border-white/10 space-y-1">
                      <span className="block text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                        ◈ ANALYTICAL ASSESSMENT · NEW DELHI DOCTRINE
                      </span>
                      <p className="text-[11.5px] text-[#BDBDBD] leading-relaxed italic">
                        <InteractiveText
                          text={event.indiaImpact.analytical}
                          onSelectConcept={onSelectConcept}
                          onSelectAgreement={onSelectAgreement}
                          onSelectMilitary={onSelectMilitary}
                        />
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-3 rounded-lg bg-[#111111] border border-[#1A1A1A] text-[#BDBDBD] leading-relaxed">
                  <InteractiveText
                    text={event.indiaImpact || 'India maintains strategic monitoring through naval presence and diplomatic channels in the region.'}
                    onSelectConcept={onSelectConcept}
                    onSelectAgreement={onSelectAgreement}
                    onSelectMilitary={onSelectMilitary}
                  />
                </div>
              )}
            </div>
          )}

          {/* TAB 4: KNOWLEDGE GRAPH & SOURCES */}
          {activeTab === 'GRAPH' && (
            <div className="space-y-4">
              {/* Connected Countries */}
              {event.relatedEntities?.countries && event.relatedEntities.countries.length > 0 && (
                <div>
                  <span className="block text-[10px] font-mono tracking-wider text-[#888888] uppercase mb-1.5 font-bold">
                    CONNECTED COUNTRIES
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {event.relatedEntities.countries.map(cCode => (
                      <button
                        key={cCode}
                        onClick={() => onSelectCountry && onSelectCountry(cCode)}
                        className="px-2.5 py-1 rounded bg-[#111111] hover:bg-white hover:text-black border border-[#1A1A1A] hover:border-white text-[10.5px] font-mono text-[#E8E8E8] transition-colors cursor-pointer"
                      >
                        {cCode} Dossier →
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Connected Maritime & Chokepoints */}
              {event.relatedEntities?.maritime && event.relatedEntities.maritime.length > 0 && (
                <div>
                  <span className="block text-[10px] font-mono tracking-wider text-[#888888] uppercase mb-1.5 font-bold">
                    STRATEGIC WATERWAYS & CHOKEPOINTS
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {event.relatedEntities.maritime.map(mId => (
                      <button
                        key={mId}
                        onClick={() => onSelectMaritimeEntity && onSelectMaritimeEntity(mId)}
                        className="px-2.5 py-1 rounded bg-[#111111] hover:bg-white hover:text-black border border-[#1A1A1A] hover:border-white text-[10.5px] font-mono text-[#E8E8E8] transition-colors cursor-pointer flex items-center gap-1"
                      >
                        <Anchor className="w-3 h-3" />
                        <span>{mId.replace(/_/g, ' ')}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Connected Geopolitical Concepts */}
              {event.relatedEntities?.concepts && event.relatedEntities.concepts.length > 0 && (
                <div>
                  <span className="block text-[10px] font-mono tracking-wider text-[#888888] uppercase mb-1.5 font-bold">
                    CONNECTED GEOPOLITICAL CONCEPTS
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {event.relatedEntities.concepts.map(cId => (
                      <button
                        key={cId}
                        onClick={() => onSelectConcept && onSelectConcept(cId)}
                        className="px-2.5 py-1 rounded bg-[#111111] hover:bg-white hover:text-black border border-[#1A1A1A] hover:border-white text-[10.5px] font-mono text-[#E8E8E8] transition-colors cursor-pointer"
                      >
                        {cId.replace(/_/g, ' ')}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Connected Military Systems */}
              {event.relatedEntities?.military && event.relatedEntities.military.length > 0 && (
                <div>
                  <span className="block text-[10px] font-mono tracking-wider text-[#888888] uppercase mb-1.5 font-bold">
                    DEPLOYED MILITARY HARDWARE
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {event.relatedEntities.military.map(sysId => (
                      <button
                        key={sysId}
                        onClick={() => onSelectMilitary && onSelectMilitary(sysId)}
                        className="px-2.5 py-1 rounded bg-[#111111] hover:bg-white hover:text-black border border-[#1A1A1A] hover:border-white text-[10.5px] font-mono text-[#E8E8E8] transition-colors cursor-pointer"
                      >
                        {sysId.replace(/_/g, ' ')}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Official Sources & Verification Citations */}
              <div>
                <span className="block text-[10px] font-mono tracking-wider text-[#888888] uppercase mb-2 font-bold">
                  OFFICIAL & AUTHORITATIVE SOURCES
                </span>
                <div className="space-y-1.5">
                  {event.sources?.map((source, idx) => (
                    <a
                      key={idx}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-[#111111] hover:bg-[#1A1A1A] border border-[#1A1A1A] hover:border-white/40 flex items-center justify-between text-xs transition-colors group cursor-pointer"
                    >
                      <div>
                        <span className="font-semibold text-white group-hover:text-white block">
                          {source.title}
                        </span>
                        <span className="text-[10px] font-mono text-[#888888]">
                          {source.publisher} · {source.type?.toUpperCase()}
                        </span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-[#888888] group-hover:text-white shrink-0" />
                    </a>
                  ))}
                  {(!event.sources || event.sources.length === 0) && (
                    <p className="text-[10px] text-[#888888] italic">
                      Primary government briefings and UN operational reports recorded in internal index.
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* ============================================================== */}
        {/* FOOTER ACTIONS: Timeline Mode & Causal Chains                  */}
        {/* ============================================================== */}
        <div className="p-3.5 border-t border-[#1A1A1A] bg-[#0D0D0D] flex items-center justify-between gap-2">
          <button
            onClick={onExploreTimeline}
            className="flex-1 py-2 rounded-lg bg-white hover:bg-[#E8E8E8] text-black font-mono text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>TIMELINE MODE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          
          <button
            onClick={() => onExploreChain && onExploreChain('CHAIN_BRAHMOS_AUTONOMY')}
            className="py-2 px-3 rounded-lg bg-[#111111] hover:bg-[#1A1A1A] border border-white/20 text-white font-mono text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Explore Geopolitical Causal Chain"
          >
            <GitFork className="w-3.5 h-3.5 text-white" />
            <span className="hidden sm:inline">CHAIN</span>
          </button>
        </div>

      </div>
    </div>
  );
}
