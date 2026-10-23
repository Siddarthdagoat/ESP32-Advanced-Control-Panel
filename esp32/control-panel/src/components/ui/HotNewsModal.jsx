import React, { useState, useMemo, useEffect } from 'react';
import { 
  X, 
  Flame, 
  Filter, 
  Search, 
  ArrowUpDown, 
  Globe2, 
  Compass, 
  Clock, 
  ExternalLink, 
  ShieldAlert, 
  ChevronRight, 
  RefreshCw, 
  Layers, 
  CheckCircle2, 
  Bot, 
  FileText, 
  HelpCircle, 
  Share2, 
  TrendingUp, 
  SlidersHorizontal,
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { useIntelligenceFeed, formatFreshnessLabel, formatUtcTimestamp } from '../../services/intelligenceFeed';
import { INTELLIGENCE_PRIORITIES, CONFIDENCE_LEVELS } from '../../data/geointelEventsData';

// 10 Core Geopolitical Categories
export const GEOPOLITICAL_CATEGORIES = [
  { id: 'all', label: 'All Categories' },
  { id: 'conflict', label: '1. Armed Conflicts & Military' },
  { id: 'diplomacy', label: '2. Diplomatic Treaties & Summits' },
  { id: 'trade', label: '3. Trade, Sanctions & FTAs' },
  { id: 'politics', label: '4. Political Transitions & Elections' },
  { id: 'energy', label: '5. Energy & Critical Minerals' },
  { id: 'maritime', label: '6. Maritime & Chokepoints' },
  { id: 'alliances', label: '7. Alliances & Blocs (NATO/BRICS)' },
  { id: 'intelligence', label: '8. Covert Ops & Shadow Intel' },
  { id: 'deterrence', label: '9. Nuclear & Strategic Deterrence' },
  { id: 'law', label: '10. Sovereignty & Territorial Claims' }
];

export default function HotNewsModal({
  isOpen,
  onClose,
  onSelectEvent,
  onSelectCountry,
  onSelectMaritime,
  onSelectConcept,
  onSelectAgreement,
  onFocusCoordinates,
  onAskAi
}) {
  const { events, newsDispatches, isNewsLoading, refreshNews } = useIntelligenceFeed();

  // Filters State
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSeverity, setSelectedSeverity] = useState('all'); // 'all' | 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'
  const [selectedTimeframe, setSelectedTimeframe] = useState('all'); // '24h' | '7d' | '30d' | 'all'
  const [indiaRelevanceOnly, setIndiaRelevanceOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('significance'); // 'significance' | 'recent' | 'severity' | 'connected' | 'india'

  // Expanded Active Event ID for Deep 9-Question Breakdown
  const [expandedEventId, setExpandedEventId] = useState(null);

  // Normalize and combine events & live dispatches
  const mergedItems = useMemo(() => {
    // 1. Map structured intelligence events
    const structured = (events || []).map(evt => {
      const isCrit = evt.priority === 'CRITICAL';
      const isHigh = evt.priority === 'HIGH';
      const severityScore = isCrit ? 4 : isHigh ? 3 : evt.priority === 'MEDIUM' ? 2 : 1;
      const pubDate = new Date(evt.publishedAt || evt.lastVerifiedAt || evt.date || Date.now());
      const pubMs = isNaN(pubDate.getTime()) ? Date.now() : pubDate.getTime();
      const connectedCount = (evt.actors?.length || 0) + (evt.affectedCountries?.length || 0);
      const hasIndiaImpact = !!(
        evt.indiaImpact || 
        evt.implications?.india || 
        evt.actors?.some(a => a.countryCode === 'IND') ||
        (evt.title && /india|delhi|modi|indo-/i.test(evt.title))
      );

      return {
        id: evt.id,
        rawEvent: evt,
        title: evt.title,
        summary: evt.summary || evt.description,
        whatHappened: evt.whatHappened || evt.description || evt.summary,
        whyItMatters: evt.whyItMatters || evt.strategicSignificance || 'High-impact development impacting regional balance of power.',
        globalImpact: evt.globalImpact || evt.implications?.global || 'May influence global trade stability and defense alliances.',
        indiaImpact: evt.indiaImpact || evt.implications?.india || (hasIndiaImpact ? 'Directly engages India\'s strategic autonomy, energy routes, or diplomatic interests.' : null),
        futureScenarios: evt.futureScenarios || evt.outlook || 'Continuous monitoring for escalation indicators across forward defense theaters.',
        alliancesAffected: evt.alliancesAffected || evt.affectedPacts || (evt.actors?.map(a => a.name).join(', ') || 'Regional Defense Blocs'),
        category: evt.category?.toLowerCase() || 'conflict',
        priority: evt.priority || 'MEDIUM',
        severityScore,
        confidence: evt.confidence || 'REPORTED',
        country: evt.country || (evt.actors && evt.actors[0]?.countryCode) || 'GLOBAL',
        countryName: evt.actors && evt.actors[0]?.name,
        location: evt.sector || evt.theater || evt.location || 'Global Strategic Area',
        lat: evt.lat || (evt.actors && evt.actors[0]?.lat),
        lng: evt.lng || (evt.actors && evt.actors[0]?.lng),
        publishedAt: evt.publishedAt || evt.lastVerifiedAt,
        pubMs,
        sources: evt.sources || [],
        connectedCount,
        hasIndiaImpact,
        isDispatch: false
      };
    });

    // 2. Map raw NewsData.io live dispatches if available
    const dispatches = (newsDispatches || []).map((disp, idx) => {
      const pubDate = new Date(disp.pubDate || Date.now());
      const pubMs = isNaN(pubDate.getTime()) ? Date.now() : pubDate.getTime();
      const titleLower = (disp.title || '').toLowerCase();
      const descLower = (disp.description || '').toLowerCase();
      const hasIndiaImpact = /india|delhi|modi|indo-/i.test(titleLower + ' ' + descLower);
      const isCritical = /missile|nuclear|escalat|war|attack|airstrike|closed|blockade/i.test(titleLower);
      const isHigh = /sanction|treaty|pact|tariff|military|drill|clash/i.test(titleLower);
      const priority = isCritical ? 'CRITICAL' : isHigh ? 'HIGH' : 'MEDIUM';

      return {
        id: `dispatch-${idx}-${disp.link ? disp.link.slice(-15) : idx}`,
        rawEvent: {
          id: `disp-${idx}`,
          title: disp.title,
          summary: disp.description,
          category: 'DISPATCH',
          priority,
          confidence: 'REPORTED',
          sources: [{ name: disp.source || 'NewsData.io Wire', url: disp.link }]
        },
        title: disp.title,
        summary: disp.description || 'Live unredacted intelligence wire dispatch retrieved via global telemetry.',
        whatHappened: disp.description || disp.title,
        whyItMatters: 'Signals emerging operational shifts in regional geopolitics and maritime supply chains.',
        globalImpact: 'Monitored for wider geopolitical spillover across neighboring economic theaters.',
        indiaImpact: hasIndiaImpact ? 'Pertinent to Indian strategic interests, bilateral ties, or critical import supply chains.' : null,
        futureScenarios: 'Intelligence analysts are tracking subsequent official diplomatic communiqués.',
        alliancesAffected: 'Regional powers and bilateral security partners.',
        category: 'diplomacy',
        priority,
        severityScore: isCritical ? 4 : isHigh ? 3 : 2,
        confidence: 'REPORTED',
        country: disp.country ? disp.country.toUpperCase() : 'GLOBAL',
        countryName: disp.country ? disp.country.toUpperCase() : null,
        location: disp.aiRegion || disp.country || 'Global Strategic Area',
        lat: 20.0,
        lng: 78.0,
        publishedAt: disp.pubDate,
        pubMs,
        sources: [{ name: disp.source || 'NewsData.io', url: disp.link }],
        connectedCount: 2,
        hasIndiaImpact,
        isDispatch: true
      };
    });

    return [...structured, ...dispatches];
  }, [events, newsDispatches]);

  // Apply User Filters
  const filteredItems = useMemo(() => {
    let result = mergedItems;

    // 1. Category Filter
    if (selectedCategory !== 'all') {
      result = result.filter(item => {
        const cat = item.category.toLowerCase();
        if (selectedCategory === 'conflict') return /conflict|military|clash|war|security|strike/i.test(cat);
        if (selectedCategory === 'diplomacy') return /diplomacy|summit|treaty|accord|talks/i.test(cat);
        if (selectedCategory === 'trade') return /trade|sanction|fta|economic|tariff/i.test(cat);
        if (selectedCategory === 'politics') return /politic|election|coup|transition|government/i.test(cat);
        if (selectedCategory === 'energy') return /energy|oil|gas|mineral|lithium|pipeline/i.test(cat);
        if (selectedCategory === 'maritime') return /maritime|strait|chokepoint|sea|naval|port/i.test(cat);
        if (selectedCategory === 'alliances') return /alliance|nato|brics|quad|sco|asean/i.test(cat);
        if (selectedCategory === 'intelligence') return /intelligence|shadow|covert|espionage|cyber/i.test(cat);
        if (selectedCategory === 'deterrence') return /deterrence|nuclear|missile|first-strike/i.test(cat);
        if (selectedCategory === 'law') return /law|sovereignty|territorial|border|island/i.test(cat);
        return true;
      });
    }

    // 2. Severity Filter
    if (selectedSeverity !== 'all') {
      result = result.filter(item => item.priority === selectedSeverity);
    }

    // 3. Timeframe Filter
    if (selectedTimeframe !== 'all') {
      const now = Date.now();
      const cutoff = selectedTimeframe === '24h' 
        ? now - 24 * 3600 * 1000 
        : selectedTimeframe === '7d' 
        ? now - 7 * 24 * 3600 * 1000 
        : now - 30 * 24 * 3600 * 1000;
      
      result = result.filter(item => item.pubMs >= cutoff);
    }

    // 4. India Relevance Toggle
    if (indiaRelevanceOnly) {
      result = result.filter(item => item.hasIndiaImpact);
    }

    // 5. Keyword Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(item => 
        (item.title && item.title.toLowerCase().includes(q)) ||
        (item.summary && item.summary.toLowerCase().includes(q)) ||
        (item.location && item.location.toLowerCase().includes(q)) ||
        (item.country && item.country.toLowerCase().includes(q)) ||
        (item.whyItMatters && item.whyItMatters.toLowerCase().includes(q))
      );
    }

    // 6. Sorting
    result = [...result].sort((a, b) => {
      if (sortBy === 'significance') {
        // Weighted composite score: Severity * 10 + Connected * 2 + recency bonus
        const recencyA = Math.max(0, 10 - Math.floor((Date.now() - a.pubMs) / (3600 * 1000 * 24)));
        const recencyB = Math.max(0, 10 - Math.floor((Date.now() - b.pubMs) / (3600 * 1000 * 24)));
        const scoreA = (a.severityScore * 15) + (a.connectedCount * 3) + recencyA + (a.hasIndiaImpact ? 5 : 0);
        const scoreB = (b.severityScore * 15) + (b.connectedCount * 3) + recencyB + (b.hasIndiaImpact ? 5 : 0);
        return scoreB - scoreA;
      }
      if (sortBy === 'recent') {
        return b.pubMs - a.pubMs;
      }
      if (sortBy === 'severity') {
        return b.severityScore - a.severityScore;
      }
      if (sortBy === 'connected') {
        return b.connectedCount - a.connectedCount;
      }
      if (sortBy === 'india') {
        if (a.hasIndiaImpact === b.hasIndiaImpact) return b.pubMs - a.pubMs;
        return a.hasIndiaImpact ? -1 : 1;
      }
      return 0;
    });

    return result;
  }, [mergedItems, selectedCategory, selectedSeverity, selectedTimeframe, indiaRelevanceOnly, searchQuery, sortBy]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200 pointer-events-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="hot-news-modal-title"
    >
      <div className="relative w-full max-w-5xl h-[92vh] flex flex-col rounded-2xl bg-[#090909] border border-white/20 shadow-2xl overflow-hidden font-sans">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#0E0E0E]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#FF3030]/10 border border-[#FF3030]/40 flex items-center justify-center text-[#FF3030] shadow-[0_0_15px_rgba(255,48,48,0.25)]">
              <Flame className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="hot-news-modal-title" className="text-base sm:text-lg font-bold font-mono tracking-wider text-white">
                  HOT NEWS & GEOPOLITICAL DISPATCHES
                </h2>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#FF3030]/15 text-[#FF3030] border border-[#FF3030]/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF3030] animate-ping" />
                  LIVE STREAM
                </span>
              </div>
              <p className="text-xs font-mono text-[#888888]">
                Real-time ranked intelligence feed answering the 9 foundational geopolitical questions.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => refreshNews && refreshNews('', true)}
              disabled={isNewsLoading}
              className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-[#C0C0C0] hover:text-white flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
              title="Force refresh live news stream from NewsData.io and backend pipeline"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isNewsLoading ? 'animate-spin text-[#FF3030]' : ''}`} />
              <span className="hidden sm:inline">{isNewsLoading ? 'Fetching...' : 'Refresh Wire'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#888888] hover:text-white transition-colors cursor-pointer"
              aria-label="Close Hot News"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="px-5 py-3 border-b border-white/10 bg-[#0C0C0C] space-y-3">
          
          {/* Top Row: Search + Sort + India Toggle */}
          <div className="flex flex-wrap items-center gap-2.5 justify-between">
            {/* Search Input */}
            <div className="relative flex-1 min-w-[220px]">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#666666]" />
              <input
                type="text"
                placeholder="Search developments, countries, chokepoints, treaties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs font-mono bg-black/60 border border-white/15 rounded-lg text-white placeholder-[#555555] focus:outline-none focus:border-white/50 transition-colors"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#888888] hover:text-white text-xs"
                >
                  ×
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5 text-xs font-mono">
              <span className="text-[#888888] hidden sm:inline">SORT BY:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-black/60 border border-white/15 rounded-lg px-2.5 py-1.5 pr-7 text-xs font-mono text-white focus:outline-none cursor-pointer"
                >
                  <option value="significance">Highest Significance (Composite)</option>
                  <option value="recent">Most Recent First</option>
                  <option value="severity">Highest Severity First</option>
                  <option value="connected">Most Connected Countries</option>
                  <option value="india">Highest India Relevance</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-[#888888] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* India Relevance Toggle */}
            <button
              onClick={() => setIndiaRelevanceOnly(!indiaRelevanceOnly)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer border ${
                indiaRelevanceOnly
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/60 shadow-[0_0_12px_rgba(245,158,11,0.25)]'
                  : 'bg-white/5 text-[#888888] border-white/10 hover:text-white'
              }`}
            >
              <span>🇮🇳</span>
              <span>INDIA IMPACT ONLY</span>
            </button>
          </div>

          {/* Bottom Row: Category, Severity, and Timeframe Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {/* Category Select */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-white/5 border border-white/15 rounded-md px-2.5 py-1 pr-7 text-[11px] font-mono text-[#D0D0D0] hover:text-white focus:outline-none cursor-pointer"
              >
                {GEOPOLITICAL_CATEGORIES.map(c => (
                  <option key={c.id} value={c.id} className="bg-[#111111] text-white">
                    {c.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3 h-3 text-[#888888] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Severity Pills */}
            <div className="flex items-center gap-1 bg-black/40 p-0.5 rounded-md border border-white/10 text-[10px] font-mono">
              {['all', 'CRITICAL', 'HIGH', 'MEDIUM', 'LOW'].map((sev) => {
                const isSelected = selectedSeverity === sev;
                const isCrit = sev === 'CRITICAL';
                return (
                  <button
                    key={sev}
                    onClick={() => setSelectedSeverity(sev)}
                    className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                      isSelected
                        ? isCrit
                          ? 'bg-[#FF3030] text-black font-bold'
                          : 'bg-white text-black font-bold'
                        : 'text-[#888888] hover:text-white'
                    }`}
                  >
                    {sev}
                  </button>
                );
              })}
            </div>

            {/* Timeframe Pills */}
            <div className="flex items-center gap-1 bg-black/40 p-0.5 rounded-md border border-white/10 text-[10px] font-mono ml-auto">
              {[
                { id: '24h', label: '24H' },
                { id: '7d', label: '7D' },
                { id: '30d', label: '30D' },
                { id: 'all', label: 'ALL TIME' }
              ].map(tf => (
                <button
                  key={tf.id}
                  onClick={() => setSelectedTimeframe(tf.id)}
                  className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                    selectedTimeframe === tf.id
                      ? 'bg-white/20 text-white font-bold'
                      : 'text-[#888888] hover:text-white'
                  }`}
                >
                  {tf.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Counter & Active Filters Tag */}
        <div className="px-5 py-2 bg-black/50 border-b border-white/5 flex items-center justify-between text-[11px] font-mono text-[#888888]">
          <div className="flex items-center gap-2">
            <span>Showing <strong className="text-white">{filteredItems.length}</strong> developments</span>
            {(selectedCategory !== 'all' || selectedSeverity !== 'all' || selectedTimeframe !== 'all' || indiaRelevanceOnly || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedSeverity('all');
                  setSelectedTimeframe('all');
                  setIndiaRelevanceOnly(false);
                  setSearchQuery('');
                }}
                className="text-[#FF3030] hover:underline cursor-pointer"
              >
                Reset all filters
              </button>
            )}
          </div>
          <span>Ranked by multi-factor geopolitical significance</span>
        </div>

        {/* Main Feed Content List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {filteredItems.length === 0 ? (
            <div className="h-64 flex flex-col items-center justify-center text-center p-6 border border-dashed border-white/10 rounded-xl">
              <Globe2 className="w-10 h-10 text-[#444444] mb-3" />
              <h3 className="text-sm font-mono text-[#B0B0B0] font-bold">No Geopolitical Developments Match Criteria</h3>
              <p className="text-xs font-mono text-[#666666] max-w-sm mt-1">
                Try loosening your filters, resetting the timeframe, or clicking "Refresh Wire" to query real-time NewsData feeds.
              </p>
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isExpanded = expandedEventId === item.id;
              const isCritical = item.priority === 'CRITICAL';
              const priorityMeta = INTELLIGENCE_PRIORITIES[item.priority] || INTELLIGENCE_PRIORITIES.MEDIUM;
              const confidenceMeta = CONFIDENCE_LEVELS[item.confidence] || CONFIDENCE_LEVELS.REPORTED;
              const freshness = formatFreshnessLabel(item.rawEvent);

              return (
                <article
                  key={item.id}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isExpanded 
                      ? 'bg-[#111111] border-white/30 shadow-2xl'
                      : 'bg-[#0E0E0E] hover:bg-[#131313] border-white/10'
                  }`}
                >
                  {/* Card Header & Summary Bar */}
                  <div className="p-4 sm:p-5">
                    {/* Top Metadata Row */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                      <div className="flex flex-wrap items-center gap-2">
                        {/* Priority Badge */}
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border ${
                          isCritical
                            ? 'bg-[#FF3030]/20 text-[#FF3030] border-[#FF3030] animate-pulse'
                            : item.priority === 'HIGH'
                            ? 'bg-white/20 text-white border-white/50'
                            : 'bg-white/10 text-[#C0C0C0] border-white/20'
                        }`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-current" />
                          <span>{priorityMeta.label}</span>
                        </span>

                        {/* Category */}
                        <span className="text-[10px] font-mono text-[#A0A0A0] uppercase bg-white/5 px-2 py-0.5 rounded border border-white/10">
                          {item.category}
                        </span>

                        {/* Location */}
                        <span className="text-[10px] font-mono text-[#C0C0C0] flex items-center gap-1">
                          <Compass className="w-3 h-3 text-[#888888]" />
                          <span>{item.location}</span>
                        </span>

                        {/* Confidence */}
                        <span className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded border ${confidenceMeta.border || 'border-white/20'} ${confidenceMeta.color || 'text-[#E0E0E0]'} bg-black/40`}>
                          {item.confidence}
                        </span>

                        {/* India Tag if relevant */}
                        {item.hasIndiaImpact && (
                          <span className="text-[9.5px] font-mono text-amber-300 bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 rounded flex items-center gap-1 font-bold">
                            <span>🇮🇳</span>
                            <span>INDIA RELEVANCE</span>
                          </span>
                        )}
                      </div>

                      {/* Freshness Timestamp */}
                      <div className="flex items-center gap-1 text-[11px] font-mono text-[#888888]">
                        <Clock className="w-3 h-3" />
                        <span>{freshness}</span>
                      </div>
                    </div>

                    {/* Headline */}
                    <h3 
                      onClick={() => setExpandedEventId(isExpanded ? null : item.id)}
                      className="text-sm sm:text-base font-bold text-white font-mono hover:text-[#FF3030] transition-colors cursor-pointer leading-snug"
                    >
                      {item.title}
                    </h3>

                    {/* Brief Summary */}
                    <p className="text-xs font-mono text-[#B0B0B0] mt-2 leading-relaxed">
                      {item.summary}
                    </p>

                    {/* Action Bar (Quick links & Expand Toggle) */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t border-white/5">
                      <div className="flex flex-wrap items-center gap-2">
                        {/* Globe Focus */}
                        <button
                          onClick={() => {
                            if (onFocusCoordinates && item.lat && item.lng) {
                              onFocusCoordinates(item.lat, item.lng, item.location);
                              onClose();
                            }
                          }}
                          className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/15 text-[11px] font-mono text-[#D0D0D0] hover:text-white flex items-center gap-1.5 border border-white/10 transition-all cursor-pointer"
                        >
                          <Globe2 className="w-3 h-3 text-white" />
                          <span>Show on Globe</span>
                        </button>

                        {/* Country Dossier link */}
                        {item.country && item.country !== 'GLOBAL' && (
                          <button
                            onClick={() => {
                              if (onSelectCountry) {
                                onSelectCountry(item.country);
                                onClose();
                              }
                            }}
                            className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/15 text-[11px] font-mono text-[#D0D0D0] hover:text-white flex items-center gap-1.5 border border-white/10 transition-all cursor-pointer"
                          >
                            <FileText className="w-3 h-3 text-white" />
                            <span>Dossier: {item.country}</span>
                          </button>
                        )}

                        {/* Ask AI Agent */}
                        <button
                          onClick={() => {
                            if (onAskAi) {
                              onAskAi(item.rawEvent || item);
                              onClose();
                            }
                          }}
                          className="px-2.5 py-1 rounded bg-[#FF3030]/15 hover:bg-[#FF3030]/25 text-[11px] font-mono text-[#FF5555] hover:text-white flex items-center gap-1.5 border border-[#FF3030]/30 transition-all cursor-pointer"
                        >
                          <Bot className="w-3 h-3" />
                          <span>Ask AI Agent</span>
                        </button>

                        {/* External Sources */}
                        {item.sources && item.sources.length > 0 && item.sources[0]?.url && (
                          <a
                            href={item.sources[0].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/15 text-[11px] font-mono text-[#888888] hover:text-white flex items-center gap-1 border border-white/10 transition-all"
                          >
                            <ExternalLink className="w-3 h-3" />
                            <span>{item.sources[0].name || 'Source Wire'}</span>
                          </a>
                        )}
                      </div>

                      {/* Expand / Collapse 9-Question Breakdown */}
                      <button
                        onClick={() => setExpandedEventId(isExpanded ? null : item.id)}
                        className="text-xs font-mono text-white hover:text-[#FF3030] flex items-center gap-1 font-bold cursor-pointer"
                      >
                        <span>{isExpanded ? 'Hide Deep Breakdown' : 'Deep 9-Point Analysis'}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {/* DEEP 9-QUESTION ANALYTICAL BREAKDOWN PANEL */}
                  {isExpanded && (
                    <div className="p-4 sm:p-5 border-t border-white/15 bg-black/60 space-y-4 animate-in fade-in duration-200">
                      <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                        <Sparkles className="w-4 h-4 text-[#FF3030]" />
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                          Comprehensive 9-Point Strategic Intelligence Assessment
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                        
                        {/* 1. What happened */}
                        <div className="p-3 rounded-lg bg-white/[0.03] border border-white/10">
                          <span className="text-[10px] font-bold uppercase text-[#FF3030] tracking-wider block mb-1">
                            1. What Happened?
                          </span>
                          <p className="text-[#C8C8C8] leading-relaxed">
                            {item.whatHappened}
                          </p>
                        </div>

                        {/* 2. When did it happen */}
                        <div className="p-3 rounded-lg bg-white/[0.03] border border-white/10">
                          <span className="text-[10px] font-bold uppercase text-white tracking-wider block mb-1">
                            2. When Did It Happen?
                          </span>
                          <p className="text-[#C8C8C8] leading-relaxed">
                            Reported: {formatUtcTimestamp(item.publishedAt)}
                          </p>
                          <p className="text-[10px] text-[#777777] mt-1">
                            Continuous monitoring across tactical OSINT telemetry.
                          </p>
                        </div>

                        {/* 3. Where did it occur */}
                        <div className="p-3 rounded-lg bg-white/[0.03] border border-white/10">
                          <span className="text-[10px] font-bold uppercase text-white tracking-wider block mb-1">
                            3. Where Did It Occur?
                          </span>
                          <p className="text-[#C8C8C8] leading-relaxed">
                            {item.location} {item.lat && item.lng ? `(${item.lat.toFixed(2)}°N, ${item.lng.toFixed(2)}°E)` : ''}
                          </p>
                        </div>

                        {/* 4. Who are the actors */}
                        <div className="p-3 rounded-lg bg-white/[0.03] border border-white/10">
                          <span className="text-[10px] font-bold uppercase text-white tracking-wider block mb-1">
                            4. Primary & Secondary Actors
                          </span>
                          <p className="text-[#C8C8C8] leading-relaxed">
                            {item.countryName ? `${item.countryName} (${item.country})` : item.country}
                          </p>
                        </div>

                        {/* 5. Why did it happen (Context) */}
                        <div className="p-3 rounded-lg bg-white/[0.03] border border-white/10 md:col-span-2">
                          <span className="text-[10px] font-bold uppercase text-white tracking-wider block mb-1">
                            5. Why Did It Happen? (Historical & Strategic Precedent)
                          </span>
                          <p className="text-[#D8D8D8] leading-relaxed">
                            {item.whyItMatters}
                          </p>
                        </div>

                        {/* 6. Global Stability Impact */}
                        <div className="p-3 rounded-lg bg-white/[0.03] border border-white/10">
                          <span className="text-[10px] font-bold uppercase text-white tracking-wider block mb-1">
                            6. Global Geopolitical Impact
                          </span>
                          <p className="text-[#C8C8C8] leading-relaxed">
                            {item.globalImpact}
                          </p>
                        </div>

                        {/* 7. India Impact */}
                        <div className="p-3 rounded-lg bg-amber-500/[0.05] border border-amber-500/20">
                          <span className="text-[10px] font-bold uppercase text-amber-300 tracking-wider block mb-1 flex items-center gap-1">
                            <span>🇮🇳</span>
                            <span>7. Impact on India's National Interests</span>
                          </span>
                          <p className="text-amber-100/90 leading-relaxed">
                            {item.indiaImpact || 'No immediate direct rupture identified; monitoring secondary energy market shifts, sea lane stability, and diplomatic alignments.'}
                          </p>
                        </div>

                        {/* 8. Alliances Affected */}
                        <div className="p-3 rounded-lg bg-white/[0.03] border border-white/10">
                          <span className="text-[10px] font-bold uppercase text-white tracking-wider block mb-1">
                            8. Alliances & Blocs Affected
                          </span>
                          <p className="text-[#C8C8C8] leading-relaxed">
                            {item.alliancesAffected}
                          </p>
                        </div>

                        {/* 9. Future Scenarios */}
                        <div className="p-3 rounded-lg bg-white/[0.03] border border-white/10">
                          <span className="text-[10px] font-bold uppercase text-[#FF3030] tracking-wider block mb-1">
                            9. Plausible Future Scenarios
                          </span>
                          <p className="text-[#C8C8C8] leading-relaxed">
                            {item.futureScenarios}
                          </p>
                        </div>

                      </div>

                      {/* Deep Link Action Footer */}
                      <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              if (onSelectEvent) {
                                onSelectEvent(item.rawEvent || item);
                                onClose();
                              }
                            }}
                            className="px-3 py-1.5 rounded-lg bg-white text-black font-mono font-bold text-xs hover:bg-[#E0E0E0] transition-colors cursor-pointer"
                          >
                            Open Full Event Dossier
                          </button>

                          <button
                            onClick={() => {
                              if (onAskAi) {
                                onAskAi(item.rawEvent || item);
                                onClose();
                              }
                            }}
                            className="px-3 py-1.5 rounded-lg bg-[#FF3030] text-black font-mono font-bold text-xs hover:bg-[#FF5555] transition-colors cursor-pointer flex items-center gap-1.5"
                          >
                            <Bot className="w-3.5 h-3.5" />
                            <span>Ask Geopolitical AI Agent</span>
                          </button>
                        </div>

                        <span className="text-[10px] font-mono text-[#777777]">
                          GEOINTEL OSINT Verification ID: {item.id}
                        </span>
                      </div>
                    </div>
                  )}

                </article>
              );
            })
          )}
        </div>

      </div>
    </div>
  );
}
