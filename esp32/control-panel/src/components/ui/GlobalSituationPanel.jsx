import React, { useState, useMemo } from 'react';
import { 
  X, 
  RefreshCw, 
  Radio, 
  AlertTriangle, 
  Clock, 
  Search, 
  Compass, 
  ArrowUpRight, 
  History, 
  Activity,
  Layers,
  Zap
} from 'lucide-react';
import { useIntelligenceFeed, formatFreshnessLabel, formatUtcTimestamp } from '../../services/intelligenceFeed';
import { INTELLIGENCE_PRIORITIES, CONFIDENCE_LEVELS, EVENT_STATUSES } from '../../data/geointelEventsData';

export default function GlobalSituationPanel({
  isOpen,
  onClose,
  onSelectEvent,
  onSelectRegion
}) {
  const {
    events,
    telemetry,
    historyLog = [],
    isLive,
    isUpdating,
    lastUpdatedUtcString,
    nextScheduledRefreshUtcString,
    latestSourcePubUtcString,
    feedHealthString,
    newInCycle = 0,
    updatedInCycle = 0,
    metrics,
    refreshFeed,
    setLiveStatus
  } = useIntelligenceFeed();

  // Navigation / View Tabs
  // 'ALL' | 'TOP' | 'NEW' | 'UPDATED' | 'ESCALATING' | 'DE_ESCALATING' | 'INDIA' | 'TIMELINE' | 'AUDIT'
  const [activeTab, setActiveTab] = useState('ALL'); 
  const [selectedTimeline, setSelectedTimeline] = useState('24H'); // '1H' | '6H' | '24H' | '7D' | '30D' | 'ALL'
  
  // Secondary Filters
  const [selectedRegionFilter, setSelectedRegionFilter] = useState('all');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('all');
  const [selectedPriorityFilter, setSelectedPriorityFilter] = useState('all');
  const [selectedConfidenceFilter, setSelectedConfidenceFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered Developments
  const filteredEvents = useMemo(() => {
    let list = [...events];

    // Search query across all core fields including India impact
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(e => 
        e.title.toLowerCase().includes(q) ||
        e.headline?.toLowerCase().includes(q) ||
        e.sector?.toLowerCase().includes(q) ||
        e.whatHappened?.toLowerCase().includes(q) ||
        e.whyItMatters?.toLowerCase().includes(q) ||
        e.actors?.some(a => a.name.toLowerCase().includes(q) || a.countryCode?.toLowerCase().includes(q)) ||
        (e.indiaImpact && (
          e.indiaImpact.documented?.toLowerCase().includes(q) ||
          e.indiaImpact.potential?.toLowerCase().includes(q) ||
          e.indiaImpact.analytical?.toLowerCase().includes(q)
        ))
      );
    }

    // View Tab Filter
    if (activeTab === 'TOP') {
      list = list.filter(e => e.priority === 'CRITICAL' || e.priority === 'HIGH');
    } else if (activeTab === 'NEW') {
      list = list.filter(e => e.changeType === 'NEW');
    } else if (activeTab === 'UPDATED') {
      list = list.filter(e => ['UPDATED', 'ESCALATED', 'DE_ESCALATED'].includes(e.changeType));
    } else if (activeTab === 'ESCALATING') {
      list = list.filter(e => e.status === 'Escalating');
    } else if (activeTab === 'DE_ESCALATING') {
      list = list.filter(e => ['De-escalating', 'Resolved', 'Stable'].includes(e.status));
    } else if (activeTab === 'INDIA') {
      list = list.filter(e => 
        (e.indiaImpact && (e.indiaImpact.documented || e.indiaImpact.potential || e.indiaImpact.analytical)) ||
        e.actors?.some(a => a.countryCode === 'IND') ||
        e.relatedEntities?.countries?.includes('IND')
      );
    } else if (activeTab === 'TIMELINE' && selectedTimeline !== 'ALL') {
      const now = Date.now();
      const hoursMap = { '1H': 1, '6H': 6, '24H': 24, '7D': 168, '30D': 720 };
      const limit = hoursMap[selectedTimeline] || 24;
      const threshold = now - limit * 60 * 60 * 1000;
      list = list.filter(e => {
        const time = new Date(e.publishedAt || e.lastVerifiedAt).getTime();
        return !isNaN(time) && time >= threshold;
      });
    }

    // Region filter
    if (selectedRegionFilter !== 'all') {
      list = list.filter(e => e.region === selectedRegionFilter);
    }

    // Category filter
    if (selectedCategoryFilter !== 'all') {
      list = list.filter(e => e.category === selectedCategoryFilter);
    }

    // Priority filter
    if (selectedPriorityFilter !== 'all') {
      list = list.filter(e => e.priority === selectedPriorityFilter);
    }

    // Confidence / Verification filter
    if (selectedConfidenceFilter !== 'all') {
      list = list.filter(e => e.confidence === selectedConfidenceFilter);
    }

    // Sort order: CRITICAL first, then HIGH, then publication time descending
    const priorityWeight = { CRITICAL: 4, HIGH: 3, MEDIUM: 2, LOW: 1 };
    list.sort((a, b) => {
      const pDiff = (priorityWeight[b.priority] || 0) - (priorityWeight[a.priority] || 0);
      if (pDiff !== 0) return pDiff;
      return new Date(b.lastVerifiedAt || b.publishedAt || 0).getTime() - new Date(a.lastVerifiedAt || a.publishedAt || 0).getTime();
    });

    return list;
  }, [
    events, 
    activeTab, 
    selectedTimeline, 
    selectedRegionFilter, 
    selectedCategoryFilter, 
    selectedPriorityFilter, 
    selectedConfidenceFilter, 
    searchQuery
  ]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 sm:right-6 sm:top-16 sm:bottom-6 z-35 pointer-events-auto w-full sm:max-w-[560px] flex flex-col justify-end sm:justify-start font-sans">
      {/* Mobile Backdrop */}
      <div 
        onClick={onClose}
        className="sm:hidden fixed inset-0 bg-black/70 backdrop-blur-xs -z-10" 
      />

      <div className="glass-panel-elevated rounded-t-3xl sm:rounded-2xl border border-[#333333] shadow-2xl overflow-hidden max-h-[90vh] sm:max-h-[calc(100vh-88px)] flex flex-col animate-slide-up-mobile sm:animate-slide-in-right bg-[#0a0a0a]/95 backdrop-blur-xl">
        
        {/* ============================================================== */}
        {/* HEADER: Live Pipeline Status & Telemetry (Monochrome)          */}
        {/* ============================================================== */}
        <div className="p-4 sm:p-5 pb-3 border-b border-[#222222] relative bg-white/[0.015]">
          <div className="flex items-center justify-between gap-3 mb-2.5">
            {/* Live Telemetry Indicator */}
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${isLive ? 'bg-white shadow-[0_0_8px_#ffffff] animate-pulse' : 'bg-[#666666]'}`} />
              <div className="flex flex-col">
                <span className="text-[11px] font-mono font-bold tracking-widest text-white uppercase flex items-center gap-1.5">
                  <Radio className="w-3.5 h-3.5 text-white" />
                  {isLive ? 'LIVE INTELLIGENCE · GROQ ENGINE' : 'FEED OFFLINE'}
                </span>
                <span className="text-[9px] font-mono text-[#888888]">
                  {feedHealthString || (isLive ? 'CONTINUOUSLY MONITORED' : 'CONNECTIVITY INTERRUPTED')}
                </span>
              </div>
            </div>

            {/* Refresh and Close Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => refreshFeed()}
                disabled={isUpdating}
                className="p-1.5 rounded-lg bg-[#141414] hover:bg-[#222222] border border-[#333333] text-[#BDBDBD] hover:text-white transition-all cursor-pointer disabled:opacity-50"
                title="Refresh Live Intelligence Pipeline"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isUpdating ? 'animate-spin text-white' : ''}`} />
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-[#888888] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                title="Close Feed (ESC)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Telemetry Multi-Timestamp Grid */}
          <div className="grid grid-cols-3 gap-2 p-2 rounded-lg bg-[#0e0e0e] border border-[#222222] text-[9.5px] font-mono text-[#888888] mb-2.5">
            <div>
              <span className="block text-[#666666]">LAST REFRESH</span>
              <span className="font-bold text-white">{lastUpdatedUtcString || 'Active'}</span>
            </div>
            <div>
              <span className="block text-[#666666]">NEXT REFRESH</span>
              <span className="font-bold text-[#E8E8E8]">{nextScheduledRefreshUtcString || 'Active'}</span>
            </div>
            <div>
              <span className="block text-[#666666]">LATEST SOURCE PUB</span>
              <span className="font-bold text-[#BDBDBD]">{latestSourcePubUtcString || 'Recent'}</span>
            </div>
          </div>

          {/* Activity status bar */}
          <div className="flex items-center justify-between text-[9px] font-mono text-[#888888] pt-1 border-t border-[#1a1a1a]">
            <span className="text-[#BDBDBD]">
              {newInCycle > 0 || updatedInCycle > 0 
                ? `CYCLE ACTIVITY: +${newInCycle} NEW · ${updatedInCycle} UPDATED` 
                : 'NO NEW DEVELOPMENTS DETECTED — CONTINUOUSLY MONITORING'}
            </span>
            <span>{events.length} ACTIVE SITUATIONS</span>
          </div>
        </div>

        {/* ============================================================== */}
        {/* HONEST FALLBACK ERROR DISPLAY (If feed is offline)            */}
        {/* ============================================================== */}
        {!isLive && (
          <div className="p-4 bg-[#141414] border-b border-[#444444] flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-white shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                LIVE INTELLIGENCE FEED TEMPORARILY UNAVAILABLE
              </h4>
              <p className="text-[11px] text-[#BDBDBD] mt-0.5 font-sans">
                External intelligence verification telemetry cannot establish an active connection. Showing verified cached situational snapshot.
              </p>
              <button
                onClick={() => setLiveStatus(true)}
                className="mt-2 px-3 py-1 rounded bg-white text-black text-[10px] font-mono font-bold border border-white cursor-pointer hover:bg-neutral-200 transition-colors"
              >
                Retry Connection
              </button>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* GLOBAL SITUATION SUMMARY METRICS BAR (Strict Monochrome)       */}
        {/* ============================================================== */}
        <div className="grid grid-cols-5 gap-1.5 p-2.5 bg-[#080808] border-b border-[#222222] text-center">
          <button 
            onClick={() => { setActiveTab('TOP'); setSelectedPriorityFilter('CRITICAL'); }}
            className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
              activeTab === 'TOP' && selectedPriorityFilter === 'CRITICAL' 
                ? 'bg-white text-black border-white' 
                : 'bg-[#111111] border-[#222222] text-white hover:border-[#444444]'
            }`}
          >
            <span className="block text-xs sm:text-sm font-mono font-extrabold">
              ◈ {metrics?.critical || 0}
            </span>
            <span className="text-[8px] font-mono uppercase tracking-tight block text-[#888888] font-semibold">
              CRITICAL
            </span>
          </button>

          <button 
            onClick={() => { setActiveTab('TOP'); setSelectedPriorityFilter('HIGH'); }}
            className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
              activeTab === 'TOP' && selectedPriorityFilter === 'HIGH' 
                ? 'bg-white text-black border-white' 
                : 'bg-[#111111] border-[#222222] text-white hover:border-[#444444]'
            }`}
          >
            <span className="block text-xs sm:text-sm font-mono font-bold">
              ■ {metrics?.high || 0}
            </span>
            <span className="text-[8px] font-mono uppercase tracking-tight block text-[#888888]">
              HIGH ALERT
            </span>
          </button>

          <button 
            onClick={() => { setActiveTab('ESCALATING'); setSelectedPriorityFilter('all'); }}
            className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
              activeTab === 'ESCALATING' 
                ? 'bg-white text-black border-white' 
                : 'bg-[#111111] border-[#222222] text-white hover:border-[#444444]'
            }`}
          >
            <span className="block text-xs sm:text-sm font-mono font-bold">
              ▲ {metrics?.escalating || 0}
            </span>
            <span className="text-[8px] font-mono uppercase tracking-tight block text-[#888888]">
              ESCALATING
            </span>
          </button>

          <button 
            onClick={() => { setActiveTab('NEW'); setSelectedPriorityFilter('all'); }}
            className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
              activeTab === 'NEW' 
                ? 'bg-white text-black border-white' 
                : 'bg-[#111111] border-[#222222] text-white hover:border-[#444444]'
            }`}
          >
            <span className="block text-xs sm:text-sm font-mono font-bold">
              ● {metrics?.changed || 0}
            </span>
            <span className="text-[8px] font-mono uppercase tracking-tight block text-[#888888]">
              NEW / CHANGED
            </span>
          </button>

          <button 
            onClick={() => { setActiveTab('INDIA'); setSelectedPriorityFilter('all'); }}
            className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
              activeTab === 'INDIA' 
                ? 'bg-white text-black border-white' 
                : 'bg-[#111111] border-[#222222] text-white hover:border-[#444444]'
            }`}
          >
            <span className="block text-xs sm:text-sm font-mono font-bold">
              ○ {metrics?.india || 0}
            </span>
            <span className="text-[8px] font-mono uppercase tracking-tight block text-[#888888]">
              INDIA IMPACT
            </span>
          </button>
        </div>

        {/* ============================================================== */}
        {/* VIEW NAVIGATION TABS (Strict Monochrome)                       */}
        {/* ============================================================== */}
        <div className="px-3 py-2 border-b border-[#222222] flex items-center justify-between gap-2 bg-[#0c0c0c] overflow-x-auto scrollbar-none">
          <div className="flex rounded-lg p-0.5 bg-[#141414] border border-[#2a2a2a] text-[10.5px] font-mono shrink-0">
            <button
              onClick={() => setActiveTab('ALL')}
              className={`px-2.5 py-1 rounded transition-all cursor-pointer font-semibold ${
                activeTab === 'ALL' ? 'bg-white text-black font-bold shadow-sm' : 'text-[#888888] hover:text-white'
              }`}
            >
              ALL
            </button>
            <button
              onClick={() => setActiveTab('TOP')}
              className={`px-2.5 py-1 rounded transition-all cursor-pointer font-semibold ${
                activeTab === 'TOP' ? 'bg-white text-black font-bold shadow-sm' : 'text-[#888888] hover:text-white'
              }`}
            >
              TOP GLOBAL
            </button>
            <button
              onClick={() => setActiveTab('NEW')}
              className={`px-2.5 py-1 rounded transition-all cursor-pointer font-semibold flex items-center gap-1 ${
                activeTab === 'NEW' ? 'bg-white text-black font-bold shadow-sm' : 'text-[#888888] hover:text-white'
              }`}
            >
              <Zap className="w-3 h-3" />
              <span>NEW</span>
            </button>
            <button
              onClick={() => setActiveTab('UPDATED')}
              className={`px-2.5 py-1 rounded transition-all cursor-pointer font-semibold flex items-center gap-1 ${
                activeTab === 'UPDATED' ? 'bg-white text-black font-bold shadow-sm' : 'text-[#888888] hover:text-white'
              }`}
            >
              <RefreshCw className="w-3 h-3" />
              <span>UPDATES</span>
            </button>
            <button
              onClick={() => setActiveTab('INDIA')}
              className={`px-2.5 py-1 rounded transition-all cursor-pointer font-semibold flex items-center gap-1 ${
                activeTab === 'INDIA' ? 'bg-white text-black font-bold shadow-sm' : 'text-[#888888] hover:text-white'
              }`}
            >
              <span>INDIA IMPACT</span>
            </button>
            <button
              onClick={() => setActiveTab('TIMELINE')}
              className={`px-2.5 py-1 rounded transition-all cursor-pointer font-semibold flex items-center gap-1 ${
                activeTab === 'TIMELINE' ? 'bg-white text-black font-bold shadow-sm' : 'text-[#888888] hover:text-white'
              }`}
            >
              <Clock className="w-3 h-3" />
              <span>TIMELINE</span>
            </button>
            <button
              onClick={() => setActiveTab('AUDIT')}
              className={`px-2.5 py-1 rounded transition-all cursor-pointer font-semibold flex items-center gap-1 ${
                activeTab === 'AUDIT' ? 'bg-white text-black font-bold shadow-sm' : 'text-[#888888] hover:text-white'
              }`}
            >
              <History className="w-3 h-3" />
              <span>AUDIT TRAIL</span>
            </button>
          </div>

          {/* Timeframe sub-selector (if Timeline tab is active) */}
          {activeTab === 'TIMELINE' && (
            <div className="flex rounded p-0.5 bg-black border border-[#333333] text-[9px] font-mono shrink-0">
              {['1H', '6H', '24H', '7D', '30D', 'ALL'].map(t => (
                <button
                  key={t}
                  onClick={() => setSelectedTimeline(t)}
                  className={`px-1.5 py-0.5 rounded transition-colors cursor-pointer ${
                    selectedTimeline === t ? 'bg-white text-black font-bold' : 'text-[#888888] hover:text-white'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ============================================================== */}
        {/* SEARCH & MULTI-CRITERIA FILTERS                                */}
        {/* ============================================================== */}
        {activeTab !== 'AUDIT' && (
          <div className="p-3 border-b border-[#222222] space-y-2 bg-[#080808]">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-[#888888] absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search developments, theaters, actors, India impact..."
                className="w-full pl-8 pr-7 py-1.5 rounded-lg bg-[#141414] border border-[#333333] text-xs text-white placeholder-[#666666] focus:outline-none focus:border-white font-mono"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#888888] hover:text-white cursor-pointer"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-[9.5px] font-mono">
              {/* Region Select */}
              <select
                value={selectedRegionFilter}
                onChange={(e) => setSelectedRegionFilter(e.target.value)}
                className="px-2 py-1 rounded bg-[#141414] border border-[#333333] text-[#BDBDBD] focus:outline-none focus:border-white cursor-pointer"
              >
                <option value="all">Theater: All</option>
                <option value="middle_east">Middle East</option>
                <option value="europe">Europe</option>
                <option value="indo_pacific">Indo-Pacific</option>
                <option value="south_asia">South Asia</option>
                <option value="africa">Africa</option>
                <option value="americas">Americas</option>
                <option value="arctic">Arctic</option>
                <option value="global">Global Hubs</option>
              </select>

              {/* Category Select */}
              <select
                value={selectedCategoryFilter}
                onChange={(e) => setSelectedCategoryFilter(e.target.value)}
                className="px-2 py-1 rounded bg-[#141414] border border-[#333333] text-[#BDBDBD] focus:outline-none focus:border-white cursor-pointer"
              >
                <option value="all">Category: All</option>
                <option value="military">Military & Defense</option>
                <option value="maritime">Maritime & Trade</option>
                <option value="diplomacy">Diplomacy & Treaties</option>
                <option value="energy">Energy Security</option>
                <option value="technology">Technology & Cyber</option>
                <option value="economy">Economy & Sanctions</option>
                <option value="infrastructure">Infrastructure</option>
                <option value="conflict">Armed Conflict</option>
              </select>

              {/* Priority Select */}
              <select
                value={selectedPriorityFilter}
                onChange={(e) => setSelectedPriorityFilter(e.target.value)}
                className="px-2 py-1 rounded bg-[#141414] border border-[#333333] text-[#BDBDBD] focus:outline-none focus:border-white cursor-pointer"
              >
                <option value="all">Priority: All</option>
                <option value="CRITICAL">◈ Critical</option>
                <option value="HIGH">■ High</option>
                <option value="MEDIUM">● Medium</option>
                <option value="LOW">○ Low</option>
              </select>

              {/* Confidence Select */}
              <select
                value={selectedConfidenceFilter}
                onChange={(e) => setSelectedConfidenceFilter(e.target.value)}
                className="px-2 py-1 rounded bg-[#141414] border border-[#333333] text-[#BDBDBD] focus:outline-none focus:border-white cursor-pointer"
              >
                <option value="all">Verification: All</option>
                <option value="VERIFIED">Confirmed</option>
                <option value="REPORTED">Reported</option>
                <option value="ESTIMATE">Estimate</option>
                <option value="DISPUTED">Disputed</option>
                <option value="ANALYSIS">Analysis</option>
              </select>

              {(selectedRegionFilter !== 'all' || selectedCategoryFilter !== 'all' || selectedPriorityFilter !== 'all' || selectedConfidenceFilter !== 'all' || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedRegionFilter('all');
                    setSelectedCategoryFilter('all');
                    setSelectedPriorityFilter('all');
                    setSelectedConfidenceFilter('all');
                    setSearchQuery('');
                  }}
                  className="px-2 py-1 rounded bg-[#222222] hover:bg-white hover:text-black text-white border border-[#444444] cursor-pointer transition-colors"
                  title="Reset Filters"
                >
                  Reset
                </button>
              )}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* MAIN BODY: DEVELOPMENTS LIST OR AUDIT LOG VIEW                 */}
        {/* ============================================================== */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {activeTab === 'AUDIT' ? (
            /* AUDIT LOG VIEW */
            <div className="space-y-3 font-mono">
              <div className="flex items-center justify-between pb-2 border-b border-[#222222]">
                <span className="text-xs font-bold text-white uppercase flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-white" />
                  Live Ingestion Audit Trail
                </span>
                <span className="text-[10px] text-[#888888]">
                  {historyLog.length} Recorded Transitions
                </span>
              </div>

              {historyLog.length === 0 ? (
                <div className="text-center py-8 text-[#888888] text-xs">
                  No status transition log recorded yet. Continuous monitoring active.
                </div>
              ) : (
                historyLog.map((entry, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#111111] border border-[#222222] text-[10.5px] space-y-1.5">
                    <div className="flex items-center justify-between text-[#888888]">
                      <span className={`font-bold px-1.5 py-0.2 rounded border ${
                        entry.changeType === 'ESCALATED' ? 'bg-white text-black border-white' :
                        entry.changeType === 'NEW' ? 'bg-[#222222] text-white border-white/60' :
                        'bg-[#1a1a1a] text-[#E8E8E8] border-[#444444]'
                      }`}>
                        {entry.changeType}
                      </span>
                      <span className="text-[9.5px]">
                        {formatUtcTimestamp(entry.timestamp)}
                      </span>
                    </div>
                    <h4 className="font-semibold text-white text-xs">{entry.eventTitle}</h4>
                    <p className="text-[#BDBDBD] text-[11px] font-sans leading-relaxed">{entry.rationale}</p>
                  </div>
                ))
              )}
            </div>
          ) : filteredEvents.length === 0 ? (
            <div className="text-center py-12 text-[#888888]">
              <Compass className="w-8 h-8 text-[#444444] mx-auto mb-2 animate-pulse" />
              <p className="text-xs font-mono uppercase tracking-wider text-white">
                No developments match active filters
              </p>
              <p className="text-[10px] text-[#888888] mt-1">
                Try loosening theater, category, or timeframe criteria.
              </p>
            </div>
          ) : (
            filteredEvents.map((event) => {
              const priorityInfo = INTELLIGENCE_PRIORITIES[event.priority] || INTELLIGENCE_PRIORITIES.MEDIUM;
              const statusInfo = EVENT_STATUSES[event.status?.toUpperCase()] || EVENT_STATUSES.MONITORING;
              const confidenceInfo = CONFIDENCE_LEVELS[event.confidence] || CONFIDENCE_LEVELS.VERIFIED;
              const hasIndiaImpact = event.indiaImpact && (event.indiaImpact.documented || event.indiaImpact.potential);
              const freshnessLabel = formatFreshnessLabel(event);
              const isUpdated = event.changeType === 'UPDATED' || event.changeType === 'ESCALATED' || event.changeType === 'DE_ESCALATED' || !!event.whatChanged;

              return (
                <div
                  key={event.id}
                  onClick={() => onSelectEvent(event)}
                  className="group relative p-3.5 rounded-xl bg-[#111111] hover:bg-[#161616] border border-[#222222] hover:border-white transition-all cursor-pointer shadow-lg"
                >
                  {/* Top Meta Bar */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {/* Priority Shape Badge */}
                      <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded border uppercase flex items-center gap-1 ${priorityInfo.bg} ${priorityInfo.border} ${priorityInfo.text}`}>
                        <span>{priorityInfo.shape || '●'}</span>
                        <span>{event.priority}</span>
                      </span>

                      {/* Status Shape Pill */}
                      <span className={`text-[8.5px] font-mono px-1.5 py-0.5 rounded border ${statusInfo.badge}`}>
                        <span>{statusInfo.shape || '●'}</span>
                        <span>{event.status}</span>
                      </span>

                      {/* Change Tag */}
                      {event.changeType && event.changeType !== 'STABLE' && (
                        <span className={`text-[8.5px] font-mono px-1.5 py-0.5 rounded font-bold border ${
                          event.changeType === 'ESCALATED' ? 'bg-white text-black border-white' :
                          event.changeType === 'NEW' ? 'bg-[#222222] text-white border-white/60' :
                          'bg-[#1a1a1a] text-[#E8E8E8] border-[#444444]'
                        }`}>
                          {event.changeType}
                        </span>
                      )}

                      {/* Verification Status */}
                      <span className={`text-[8.5px] font-mono px-1.5 py-0.5 rounded border ${confidenceInfo.bg} ${confidenceInfo.color} ${confidenceInfo.border}`}>
                        {event.verificationStatus || event.confidence || 'VERIFIED'}
                      </span>

                      {/* India Impact Pill */}
                      {hasIndiaImpact && (
                        <span className="text-[8.5px] font-mono px-1.5 py-0.5 rounded bg-[#1a1a1a] text-white border border-[#444444]">
                          ○ INDIA
                        </span>
                      )}
                    </div>

                    {/* Accurate Human-Readable Freshness Label */}
                    <div className="text-right shrink-0">
                      <span className="text-[9.5px] font-mono font-bold text-white block" title={`Published: ${formatUtcTimestamp(event.publishedAt)}\nLast Verified: ${formatUtcTimestamp(event.lastVerifiedAt)}`}>
                        {freshnessLabel}
                      </span>
                      {event.sourceName && (
                        <span className="text-[8.5px] font-mono text-[#888888] block truncate max-w-[140px]">
                          {event.sourceName}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Sector */}
                  <h3 className="text-xs sm:text-sm font-bold text-white font-display group-hover:text-white transition-colors leading-snug">
                    {event.title}
                  </h3>
                  <div className="text-[10px] font-mono text-[#888888] mt-0.5 flex items-center gap-1.5">
                    <span className="text-[#BDBDBD]">{event.sector || event.regionName}</span>
                    <span>·</span>
                    <span className="uppercase">{event.category}</span>
                  </div>

                  {/* Factual Summary */}
                  <p className="text-[11.5px] text-[#BDBDBD] leading-relaxed mt-2 line-clamp-2">
                    {event.whatHappened || event.headline || event.summary}
                  </p>

                  {/* DEDICATED "WHAT CHANGED?" SECTION FOR UPDATED DEVELOPMENTS */}
                  {isUpdated && event.whatChanged && (
                    <div className="mt-2.5 p-2.5 rounded-lg bg-[#080808] border border-white/30 text-[10.5px] font-mono space-y-1">
                      <div className="flex items-center justify-between text-white font-bold">
                        <span className="flex items-center gap-1">
                          <span>◈ WHAT CHANGED?</span>
                        </span>
                        <span className="text-[8.5px] text-[#888888]">
                          {event.lastSubstantiveUpdateAt ? formatFreshnessLabel({ lastSubstantiveUpdateAt: event.lastSubstantiveUpdateAt }) : 'Latest update'}
                        </span>
                      </div>
                      <p className="text-[#E8E8E8] font-sans leading-relaxed text-[11px]">
                        {event.whatChanged}
                      </p>
                    </div>
                  )}

                  {/* Bottom Footer: Principal Actors & Action Trigger */}
                  <div className="mt-3 pt-2 border-t border-[#222222] flex items-center justify-between text-[10px]">
                    {/* Actors Flags */}
                    <div className="flex items-center gap-1">
                      {event.actors?.slice(0, 4).map((actor, idx) => (
                        <span key={idx} className="text-xs" title={`${actor.name}: ${actor.role}`}>
                          {actor.flag}
                        </span>
                      ))}
                      {event.actors?.length > 4 && (
                        <span className="text-[9px] font-mono text-[#888888]">
                          +{event.actors.length - 4}
                        </span>
                      )}
                    </div>

                    {/* View Dossier Action */}
                    <div className="flex items-center gap-1 text-[10px] font-mono text-white group-hover:translate-x-0.5 transition-transform font-bold">
                      <span>OPEN INTEL</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* ============================================================== */}
        {/* FOOTER CONTROLS: Quick Theater Jump & Simulation Controls     */}
        {/* ============================================================== */}
        <div className="p-3 border-t border-[#222222] bg-[#080808] flex items-center justify-between text-[10px] font-mono text-[#888888]">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span>Click any development to refocus 3D particle Earth</span>
          </div>

          <button
            onClick={() => {
              if (onSelectRegion) onSelectRegion({ id: 'middle_east', name: 'Middle East', lat: 26.0, lng: 48.0 });
            }}
            className="text-white hover:underline transition-colors cursor-pointer font-bold"
          >
            Regional Theaters →
          </button>
        </div>

      </div>
    </div>
  );
}
