import React, { useState, useEffect } from 'react';
import { Search, Clock, HelpCircle, Globe2, BookOpen, GitFork, Radio, History } from 'lucide-react';
import { useIntelligenceFeed } from '../../services/intelligenceFeed';

export default function GeointelHeader({
  activeMode,
  setActiveMode,
  onOpenSearch,
  onOpenHelp,
  onOpenGlossary,
  onOpenChains,
  onOpenLiveFeed,
  isLiveFeedOpen,
  onOpenConspiracies,
  onOpenHistoryTimeline
}) {
  const [utcTime, setUtcTime] = useState('');
  const { isLive, lastUpdatedUtcString } = useIntelligenceFeed();

  useEffect(() => {
    const updateChronometer = () => {
      const now = new Date();
      const hours = String(now.getUTCHours()).padStart(2, '0');
      const mins = String(now.getUTCMinutes()).padStart(2, '0');
      const secs = String(now.getUTCSeconds()).padStart(2, '0');
      setUtcTime(`${hours}:${mins}:${secs} UTC`);
    };

    updateChronometer();
    const interval = setInterval(updateChronometer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-30 pointer-events-none p-3 sm:p-5 flex items-start justify-between">
      {/* Top Left: Cinematic Brand Identity (Strict Monochrome) */}
      <div className="pointer-events-auto flex items-start gap-2.5 sm:gap-3 group">
        <div className="w-9 h-9 rounded-lg bg-[#080808]/90 flex items-center justify-center border border-white/20 group-hover:border-white transition-colors shadow-2xl backdrop-blur-md">
          <Globe2 className="w-5 h-5 text-white group-hover:rotate-45 transition-transform duration-500" />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <h1 className="text-sm sm:text-base font-bold tracking-widest text-white font-display">
              GEOINTEL
            </h1>
            <span className="text-[9px] px-1.5 py-0.2 rounded bg-white/10 border border-white/20 text-[#E8E8E8] font-mono font-medium tracking-tight">
              MONOCHROME OSINT
            </span>
          </div>
          <span className="text-[8px] sm:text-[9.5px] font-mono tracking-wider text-[#888888] uppercase">
            GLOBAL GEOPOLITICAL INTELLIGENCE
          </span>
        </div>
      </div>

      {/* Top Center: View Selectors + Educational Modules */}
      <div className="pointer-events-auto hidden md:flex items-center bg-[#080808]/90 px-1.5 py-1 rounded-full border border-white/15 shadow-2xl backdrop-blur-md">
        <button
          onClick={() => setActiveMode('world')}
          className={`px-3 py-1 text-xs font-mono font-medium rounded-full transition-all duration-200 cursor-pointer ${
            activeMode === 'world'
              ? 'bg-white text-black font-bold shadow-sm'
              : 'text-[#888888] hover:text-white'
          }`}
        >
          WORLD
        </button>
        <button
          onClick={() => setActiveMode('regions')}
          className={`px-3 py-1 text-xs font-mono font-medium rounded-full transition-all duration-200 cursor-pointer ${
            activeMode === 'regions'
              ? 'bg-white text-black font-bold shadow-sm'
              : 'text-[#888888] hover:text-white'
          }`}
        >
          REGIONS
        </button>
        <button
          onClick={() => setActiveMode('timeline')}
          className={`px-3 py-1 text-xs font-mono font-medium rounded-full transition-all duration-200 cursor-pointer ${
            activeMode === 'timeline'
              ? 'bg-white text-black font-bold shadow-sm'
              : 'text-[#888888] hover:text-white'
          }`}
        >
          TIMELINE
        </button>
        <button
          onClick={() => setActiveMode('hotspots')}
          className={`px-3 py-1 text-xs font-mono font-medium rounded-full transition-all duration-200 cursor-pointer ${
            activeMode === 'hotspots'
              ? 'bg-white text-black font-bold shadow-sm'
              : 'text-[#888888] hover:text-white'
          }`}
        >
          HOTSPOTS
        </button>

        <div className="w-px h-4 bg-white/10 mx-1" />

        {/* Causal Chains Quick Access */}
        <button
          onClick={onOpenChains}
          className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-bold rounded-full text-[#E8E8E8] hover:text-white hover:bg-white/10 transition-all cursor-pointer"
        >
          <GitFork className="w-3 h-3 text-white" />
          <span>CHAINS</span>
        </button>

        {/* Vocabulary & Concepts Quick Access */}
        <button
          onClick={onOpenGlossary}
          className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-bold rounded-full text-[#BDBDBD] hover:text-white hover:bg-white/10 transition-all cursor-pointer"
        >
          <BookOpen className="w-3 h-3 text-white" />
          <span>CONCEPTS</span>
        </button>

        {/* World History & Soviet Republics Timeline Access */}
        <button
          onClick={onOpenHistoryTimeline}
          className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-bold rounded-full text-white hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          title="Open World History Timeline, The 15 Soviet Republics & Historical Empires"
        >
          <History className="w-3 h-3 text-white" />
          <span>HISTORY</span>
        </button>

        {/* Covert Operations & Conspiracies Access */}
        <button
          onClick={onOpenConspiracies}
          className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-bold rounded-full text-white hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          title="Open Covert Operations & Geopolitical Conspiracies Dossiers (Project Iceworm, Nord Stream, Gladio)"
        >
          <span className="text-white text-xs">◈</span>
          <span>SHADOW INTEL</span>
        </button>

        <div className="w-px h-4 bg-white/10 mx-1" />

        {/* Live Global Intelligence Feed Quick Access */}
        <button
          onClick={onOpenLiveFeed}
          className={`flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-bold rounded-full transition-all cursor-pointer ${
            isLiveFeedOpen
              ? 'bg-white text-black border border-white shadow-sm'
              : isLive
              ? 'text-white hover:text-white hover:bg-white/10'
              : 'text-[#888888] hover:text-white hover:bg-white/10'
          }`}
          title={`Open Live Global Intelligence Feed · Last Refreshed: ${lastUpdatedUtcString}`}
        >
          <span className={`w-2 h-2 rounded-full ${isLive ? 'bg-white animate-ping' : 'bg-[#888888]'} shrink-0`} />
          <span>LIVE INTEL</span>
        </button>

      </div>

      {/* Top Right: Search Trigger, Time & Help */}
      <div className="pointer-events-auto flex items-center gap-2 sm:gap-2.5">
        {/* Mobile History Trigger */}
        <button
          onClick={onOpenHistoryTimeline}
          className="md:hidden px-2 py-1.5 rounded-lg bg-[#080808]/90 border border-white/20 flex items-center gap-1 text-xs font-mono font-bold text-white transition-all cursor-pointer"
          title="World History Timeline"
        >
          <History className="w-3 h-3" />
          <span>HIST</span>
        </button>

        {/* Mobile Shadow Intel Trigger */}
        <button
          onClick={onOpenConspiracies}
          className="md:hidden px-2 py-1.5 rounded-lg bg-[#080808]/90 border border-white/20 flex items-center gap-1 text-xs font-mono font-bold text-white transition-all cursor-pointer"
          title="Shadow Intel (Covert Ops & Conspiracies)"
        >
          <span>◈</span>
          <span>SHADOW</span>
        </button>

        {/* Mobile Live Intel Trigger */}
        <button
          onClick={onOpenLiveFeed}
          className={`md:hidden px-2.5 py-1.5 rounded-lg bg-[#080808]/90 border border-white/20 flex items-center gap-1.5 text-xs font-mono font-bold transition-all cursor-pointer ${
            isLiveFeedOpen ? 'bg-white text-black' : 'text-white hover:text-white'
          }`}
          title="Live Intelligence Feed"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-ping shrink-0" />
          <span>INTEL</span>
        </button>

        {/* Search Trigger */}
        <button
          onClick={onOpenSearch}
          className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-[#080808]/90 hover:bg-[#111111] border border-white/15 hover:border-white/40 flex items-center gap-2 text-xs font-mono text-[#E8E8E8] hover:text-white transition-all cursor-pointer"
        >
          <Search className="w-3.5 h-3.5 text-white" />
          <span className="hidden sm:inline">Search</span>
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] font-mono bg-white/10 border border-white/15 rounded text-[#BDBDBD]">
            /
          </kbd>
        </button>

        {/* Live Precision Time */}
        <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#080808]/90 text-xs font-mono text-[#BDBDBD] border border-white/15">
          <Clock className="w-3.5 h-3.5 text-[#888888]" />
          <span className="text-white">{utcTime}</span>
        </div>

        {/* Shortcuts Help */}
        <button
          onClick={onOpenHelp}
          className="p-1.5 sm:p-2 rounded-lg bg-[#080808]/90 hover:bg-[#111111] border border-white/15 text-[#888888] hover:text-white transition-colors cursor-pointer"
          title="Keyboard Shortcuts"
        >
          <HelpCircle className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
