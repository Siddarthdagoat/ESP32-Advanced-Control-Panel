import React, { useState, useEffect } from 'react';
import { 
  X, RotateCcw, ChevronDown, ChevronUp, Shield, Compass, BookOpen, 
  Search, ExternalLink, ArrowRight, AlertTriangle, MapPin, Calendar, 
  Cpu, Award, Building, Globe2, Flag, CheckCircle2, Loader2,
  Landmark, DollarSign, Scale, Anchor, Crosshair, Users, Zap, TrendingUp, Navigation
} from 'lucide-react';
import { getCountryDossier } from '../../data/geointelCountryDossiers';
import { ISO3_TO_ISO2, CAPITAL_COORDINATES } from '../../data/geointelExtendedDossiers';
import InteractiveText from './InteractiveText';

// High-fidelity flag renderer with resilient fallback
function AdaptiveFlag({ iso3, flagEmoji, name, className = "w-8 h-5 sm:w-10 sm:h-7" }) {
  const upper = String(iso3 || '').toUpperCase();
  const iso2 = ISO3_TO_ISO2[upper] || upper.slice(0, 2).toLowerCase();
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`relative rounded border border-white/20 overflow-hidden shadow shrink-0 bg-slate-900 flex items-center justify-center ${className}`}>
      {!imageError && iso2 ? (
        <img 
          src={`https://flagcdn.com/w80/${iso2}.png`} 
          alt={name || iso3}
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <span className="text-xl filter drop-shadow select-none">
          {flagEmoji || '🌐'}
        </span>
      )}
    </div>
  );
}

// Standardized Component for Unavailable Data Sections
function DataNotAvailable({ section = "INTELLIGENCE", explanation, className = "" }) {
  return (
    <div className={`p-4 rounded-xl bg-white/[0.02] border border-white/10 text-center space-y-1.5 ${className}`}>
      <div className="flex items-center justify-center gap-1.5 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
        <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
        <span>DATA NOT AVAILABLE</span>
      </div>
      <div className="text-[10px] font-mono text-slate-400 uppercase font-semibold">{section}</div>
      <p className="text-slate-300 text-xs leading-relaxed max-w-sm mx-auto">
        {explanation || "Detailed data is unavailable or not reliably verified in current open-source intelligence databases."}
      </p>
    </div>
  );
}

export default function CountryIntelligencePanel({
  country,
  onClose,
  onResetGlobe,
  onSelectRelationship,
  onSelectConcept,
  onSelectAgreement,
  onSelectMilitarySystem,
  onSelectCountry,
  onSelectLocation,
  onSelectEvent,
  onSelectRegion,
  onSelectCapital
}) {
  const [activeTab, setActiveTab] = useState('overview'); 
  // 'overview' | 'history' | 'politics' | 'geography' | 'borders' | 'economy' | 'military' | 'relations' | 'tensions' | 'locations' | 'events' | 'india'
  const [historyExpandedIndex, setHistoryExpandedIndex] = useState(null);
  const [historySearchQuery, setHistorySearchQuery] = useState('');
  const [historyCategoryFilter, setHistoryCategoryFilter] = useState('ALL');
  const [relationSearchQuery, setRelationSearchQuery] = useState('');
  const [loadingState, setLoadingState] = useState('loading'); // 'loading' | 'ready'

  // Retrieve comprehensive dossier or merge fallback
  const iso3 = country ? (country.id || country.ISO_A3 || country.ADM0_A3 || 'RUS') : 'RUS';
  const dossier = country ? getCountryDossier(iso3, country) : null;

  const handleCapitalClick = () => {
    if (!dossier || !onSelectCapital) return;
    onSelectCapital({
      capital: dossier.capital,
      country: dossier.name,
      officialName: dossier.officialName,
      iso3: dossier.id,
      flag: dossier.flag,
      coords: dossier.capitalCoords,
      role: dossier.capitalAdmin?.role || `National Capital & Administrative Seat of ${dossier.name}`,
      politicalSignificance: dossier.capitalAdmin?.political || `Seat of executive ministries, legislative assembly, and supreme court of ${dossier.name}.`,
      geographicLocation: dossier.capitalAdmin?.geographic || `${dossier.capitalCoords?.lat?.toFixed(2)}°N, ${dossier.capitalCoords?.lng?.toFixed(2)}°E situated in ${dossier.region || 'the nation'}.`,
      strategicSignificance: dossier.capitalAdmin?.strategic || `Apex military command nexus, national civil defense center, and sovereign communications hub.`
    });
  };

  // Handle tactical loading transition on country selection change
  useEffect(() => {
    if (!country) return;
    setLoadingState('loading');
    const timer = setTimeout(() => {
      setLoadingState('ready');
    }, 180);
    return () => clearTimeout(timer);
  }, [iso3]);

  if (!country || !dossier) return null;

  // Navigation tab definitions
  const tabs = [
    { id: 'overview', label: 'OVERVIEW' },
    { id: 'history', label: 'HISTORY' },
    { id: 'politics', label: 'POLITICS' },
    { id: 'geography', label: 'GEOGRAPHY' },
    { id: 'borders', label: 'BORDERS' },
    { id: 'economy', label: 'ECONOMY' },
    { id: 'military', label: 'MILITARY' },
    { id: 'relations', label: 'RELATIONS' },
    { id: 'tensions', label: 'TENSIONS' },
    { id: 'locations', label: 'STRATEGIC' },
    { id: 'events', label: 'EVENTS' },
    { id: 'india', label: 'INDIA IMPACT' }
  ];

  // Helper to handle relationship clicks
  const handleRelationClick = (rel) => {
    if (!onSelectRelationship) return;
    const relId = rel.id || `${iso3}_${rel.countryCode || 'IND'}`;
    onSelectRelationship(relId);
  };

  // Search filter for relations
  const searchableRelations = dossier.relations?.searchable || [];
  const mainRelations = dossier.relations?.main || [];
  const allRelations = [...mainRelations, ...searchableRelations];

  const filteredRelations = relationSearchQuery.trim() === ''
    ? allRelations
    : allRelations.filter(r => 
        r.country?.toLowerCase().includes(relationSearchQuery.toLowerCase()) ||
        r.id?.toLowerCase().includes(relationSearchQuery.toLowerCase()) ||
        r.summary?.toLowerCase().includes(relationSearchQuery.toLowerCase()) ||
        r.note?.toLowerCase().includes(relationSearchQuery.toLowerCase())
      );

  return (
    <div className="fixed inset-y-0 right-0 sm:right-6 sm:top-20 sm:bottom-20 z-25 pointer-events-auto w-full sm:max-w-[520px] flex flex-col justify-end sm:justify-start">
      {/* Mobile Backdrop */}
      <div 
        onClick={onClose} 
        className="sm:hidden fixed inset-0 bg-black/60 backdrop-blur-xs -z-10" 
      />

      {/* Main Glass Dossier */}
      <div className="rounded-t-3xl sm:rounded-2xl border border-[#1A1A1A] shadow-2xl overflow-hidden max-h-[90vh] sm:max-h-[calc(100vh-150px)] flex flex-col animate-slide-up-mobile sm:animate-slide-in-right bg-[#080808]/98 backdrop-blur-2xl">
        
        {/* Header Bar */}
        <div className="p-4 pb-3 border-b border-[#1A1A1A] relative bg-[#0D0D0D]">
          {/* Action Buttons: Reset Globe & Close */}
          <div className="absolute top-3.5 right-4 flex items-center gap-1.5">
            {onResetGlobe && (
              <button
                onClick={onResetGlobe}
                className="px-2 py-1 rounded-md text-[10px] font-mono text-white hover:text-white bg-[#111111] hover:bg-[#1A1A1A] border border-[#1A1A1A] flex items-center gap-1 transition-all cursor-pointer"
                title="Reset Globe View"
              >
                <RotateCcw className="w-3 h-3 text-[#888888]" />
                <span>RESET GLOBE</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1 rounded-md text-[#888888] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title="Close Dossier (ESC)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-3 pt-0.5">
            <AdaptiveFlag iso3={dossier.id} flagEmoji={dossier.flag} name={dossier.name} />
            <div className="flex-1 pr-24">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold tracking-wider text-white font-display uppercase truncate">
                  {dossier.name}
                </h2>
                <span className="px-1.5 py-0.5 rounded bg-white/10 text-white border border-white/20 text-[9px] font-mono font-bold">
                  {dossier.id}
                </span>
              </div>
              <p className="text-[10px] font-mono tracking-wider text-[#888888] uppercase truncate">
                {dossier.officialName || dossier.name}
              </p>
            </div>
          </div>

          {/* Structured Country Metadata Header Grid */}
          <div className="grid grid-cols-3 gap-2 mt-2.5 pt-2 border-t border-white/5 text-center">
            <button
              onClick={handleCapitalClick}
              disabled={!onSelectCapital}
              className="p-1 rounded hover:bg-white/5 transition-colors cursor-pointer text-center group"
              title="Click to view capital profile"
            >
              <span className="block text-[8px] font-mono tracking-wider text-slate-400 uppercase group-hover:text-amber-400">
                CAPITAL ●
              </span>
              <span className="text-xs font-semibold text-slate-200 truncate block group-hover:text-amber-300">
                {dossier.capital || 'DATA UNAVAILABLE'}
              </span>
            </button>
            <button
              onClick={() => onSelectRegion && onSelectRegion(dossier.region)}
              disabled={!onSelectRegion}
              className="p-1 rounded hover:bg-white/5 transition-colors cursor-pointer text-center group"
              title="Click to explore region"
            >
              <span className="block text-[8px] font-mono tracking-wider text-slate-400 uppercase group-hover:text-cyan-400">
                REGION
              </span>
              <span className="text-xs font-semibold text-slate-200 truncate block group-hover:text-cyan-300">
                {dossier.region || 'DATA UNAVAILABLE'}
              </span>
            </button>
            <div className="p-1 text-center">
              <span className="block text-[8px] font-mono tracking-wider text-slate-400 uppercase">
                LAND AREA
              </span>
              <span className="text-xs font-semibold text-slate-200 truncate block">
                {dossier.area || dossier.geographyBorders?.landArea || 'DATA UNAVAILABLE'}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 mt-1.5 text-center border-t border-white/5 pt-1.5">
            <div>
              <span className="block text-[8px] font-mono tracking-wider text-slate-400 uppercase">
                POPULATION
              </span>
              <span className="text-xs font-semibold text-slate-200 truncate block">
                {dossier.population || 'DATA UNAVAILABLE'}
              </span>
            </div>
            <div>
              <span className="block text-[8px] font-mono tracking-wider text-slate-400 uppercase">
                SYSTEM
              </span>
              <span className="text-xs font-semibold text-slate-200 truncate block">
                {dossier.politicalSystemType || dossier.politicalSystem?.type || 'Constitutional'}
              </span>
            </div>
            <div>
              <span className="block text-[8px] font-mono tracking-wider text-slate-400 uppercase">
                CURRENCY
              </span>
              <span className="text-xs font-semibold text-slate-200 truncate block">
                {dossier.currency || dossier.economy?.currency || 'DATA UNAVAILABLE'}
              </span>
            </div>
          </div>

          {/* Tactical Status Pill */}
          <div className="mt-2 pt-1 border-t border-[#1A1A1A] flex items-center justify-between text-[9px] font-mono">
            <div className="flex items-center gap-1.5 text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>STATUS: {loadingState === 'loading' ? 'COMPILING INTELLIGENCE...' : 'INTELLIGENCE READY'}</span>
            </div>
            <span className="text-[#888888] truncate max-w-[200px]">
              TIME ZONE: {dossier.timeZones || 'UTC'}
            </span>
          </div>
        </div>

        {/* 12-Section Tab Ribbon */}
        <div className="flex items-center overflow-x-auto border-b border-[#1A1A1A] bg-[#000000] px-2 py-1 scrollbar-none gap-1">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-2.5 py-1 rounded text-[9px] font-mono font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-white text-black font-bold shadow-sm'
                  : 'text-[#888888] hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Scrollable Intelligence Body or Loading Indicator */}
        {loadingState === 'loading' ? (
          <div className="flex-1 flex flex-col items-center justify-center py-20 px-6 space-y-4">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping" />
              <div className="w-12 h-12 rounded-full border-2 border-t-white border-r-white border-b-transparent border-l-transparent animate-spin" />
            </div>
            <div className="text-center space-y-1">
              <span className="text-xs font-mono font-bold tracking-widest text-white animate-pulse block">
                LOADING INTELLIGENCE...
              </span>
              <p className="text-[10px] font-mono text-[#888888] max-w-xs">
                Synthesizing comprehensive geopolitical dossier, order of battle, and frontier vectors for {dossier.name}
              </p>
            </div>
          </div>
        ) : (
          <div className="p-4 space-y-4 overflow-y-auto flex-1 font-sans text-xs">
            
            {/* ======================================================== */}
            {/* 1. OVERVIEW & BASIC INFORMATION */}
            {/* ======================================================== */}
            {activeTab === 'overview' && (
              <div className="space-y-3 animate-fade-in">
                {dossier.tagline && (
                  <div className="p-2.5 rounded-lg bg-cyan-950/20 border border-cyan-500/20 text-cyan-300 font-mono text-[10px]">
                    ⚡ {dossier.tagline}
                  </div>
                )}

                {/* Strategic Overview Text */}
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                  <div className="flex items-center gap-1.5 text-cyan-400 font-mono text-[10px] font-bold uppercase tracking-wider">
                    <Compass className="w-3.5 h-3.5" />
                    <span>STRATEGIC OVERVIEW & SOVEREIGN STATUS</span>
                  </div>
                  <div className="text-slate-200 text-xs leading-relaxed space-y-2">
                    <InteractiveText
                      text={dossier.overview?.advanced || dossier.overview?.beginner || (typeof dossier.overview === 'string' ? dossier.overview : 'Strategic sovereign assessment active.')}
                      onSelectConcept={onSelectConcept}
                      onSelectAgreement={onSelectAgreement}
                      onSelectMilitary={onSelectMilitarySystem}
                    />
                  </div>
                </div>

                {/* BASIC INFORMATION & NATIONAL PROFILE (NON-EMPTY DATA MODEL) */}
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2.5">
                  <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
                    <div className="flex items-center gap-1.5 text-cyan-400 font-mono text-[10px] font-bold uppercase tracking-wider">
                      <Landmark className="w-3.5 h-3.5" />
                      <span>BASIC INFORMATION & SOVEREIGN PROFILE</span>
                    </div>
                    <span className="text-[9px] font-mono text-slate-400">VERIFIED METRIC</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2 rounded-lg bg-black/30 border border-white/5 space-y-0.5">
                      <span className="text-[8px] font-mono uppercase text-slate-400 block">OFFICIAL NAME</span>
                      <span className="font-semibold text-slate-100 block">{dossier.officialName || dossier.name}</span>
                    </div>

                    <div className="p-2 rounded-lg bg-black/30 border border-white/5 space-y-0.5">
                      <span className="text-[8px] font-mono uppercase text-slate-400 block">COMMON NAME</span>
                      <span className="font-semibold text-slate-100 block">{dossier.commonName || dossier.name}</span>
                    </div>

                    <div 
                      onClick={handleCapitalClick}
                      className="p-2 rounded-lg bg-black/30 border border-white/5 space-y-0.5 hover:border-amber-500/40 transition-colors cursor-pointer group"
                      title="Click to view capital profile"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] font-mono uppercase text-slate-400 block group-hover:text-amber-400">NATIONAL CAPITAL</span>
                        <span className="text-[8px] font-mono text-amber-400/80 uppercase">PROFILE →</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-cyan-300 group-hover:text-amber-300">{dossier.capital || 'DATA UNAVAILABLE'}</span>
                        {dossier.capitalCoords && (
                          <span className="text-[8px] font-mono text-slate-400">● {dossier.capitalCoords.lat.toFixed(2)}°, {dossier.capitalCoords.lng.toFixed(2)}°</span>
                        )}
                      </div>
                    </div>

                    <div className="p-2 rounded-lg bg-black/30 border border-white/5 space-y-0.5">
                      <span className="text-[8px] font-mono uppercase text-slate-400 block">POPULATION (SOURCED)</span>
                      <span className="font-semibold text-slate-100 block">{dossier.population || 'DATA UNAVAILABLE'}</span>
                    </div>

                    <div className="p-2 rounded-lg bg-black/30 border border-white/5 space-y-0.5">
                      <span className="text-[8px] font-mono uppercase text-slate-400 block">LAND AREA & GLOBAL RANK</span>
                      <span className="font-semibold text-slate-100 block">{dossier.area || dossier.geographyBorders?.landArea || 'DATA UNAVAILABLE'}</span>
                    </div>

                    <div 
                      onClick={() => onSelectRegion && onSelectRegion(dossier.region)}
                      className="p-2 rounded-lg bg-black/30 border border-white/5 space-y-0.5 hover:border-cyan-500/40 transition-colors cursor-pointer group"
                      title="Click to explore region"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] font-mono uppercase text-slate-400 block group-hover:text-cyan-400">REGION & SUB-REGION</span>
                        <span className="text-[8px] font-mono text-cyan-400/80 uppercase">NAVIGATE →</span>
                      </div>
                      <span className="font-semibold text-slate-100 group-hover:text-cyan-300 block">{dossier.region} / {dossier.subregion || 'DATA UNAVAILABLE'}</span>
                    </div>

                    <div className="p-2 rounded-lg bg-black/30 border border-white/5 space-y-0.5">
                      <span className="text-[8px] font-mono uppercase text-slate-400 block">NATIONAL CURRENCY</span>
                      <span className="font-semibold text-slate-100 block">{dossier.currency || dossier.economy?.currency || 'DATA UNAVAILABLE'}</span>
                    </div>

                    <div className="p-2 rounded-lg bg-black/30 border border-white/5 space-y-0.5">
                      <span className="text-[8px] font-mono uppercase text-slate-400 block">OFFICIAL LANGUAGE(S)</span>
                      <span className="font-semibold text-slate-100 block truncate">{dossier.languages || 'DATA UNAVAILABLE'}</span>
                    </div>

                    <div className="p-2 rounded-lg bg-black/30 border border-white/5 space-y-0.5">
                      <span className="text-[8px] font-mono uppercase text-slate-400 block">GOVERNMENT SYSTEM</span>
                      <span className="font-semibold text-slate-100 block">{dossier.politicalSystemType || dossier.politicalSystem?.type || 'DATA UNAVAILABLE'}</span>
                    </div>

                    <div className="p-2 rounded-lg bg-black/30 border border-white/5 space-y-0.5">
                      <span className="text-[8px] font-mono uppercase text-slate-400 block">HEAD OF STATE</span>
                      <span className="font-semibold text-slate-100 block">{dossier.headOfState || dossier.politicalSystem?.currentLeadership?.headOfState || 'DATA UNAVAILABLE'}</span>
                    </div>

                    <div className="p-2 rounded-lg bg-black/30 border border-white/5 space-y-0.5">
                      <span className="text-[8px] font-mono uppercase text-slate-400 block">HEAD OF GOVERNMENT</span>
                      <span className="font-semibold text-slate-100 block">{dossier.headOfGovernment || dossier.politicalSystem?.currentLeadership?.headOfGovernment || 'DATA UNAVAILABLE'}</span>
                    </div>

                    <div className="p-2 rounded-lg bg-black/30 border border-white/5 space-y-0.5">
                      <span className="text-[8px] font-mono uppercase text-slate-400 block">ISO CODES & TIME ZONES</span>
                      <span className="font-semibold text-slate-100 block">{dossier.isoCode || dossier.id} | {dossier.timeZones || 'UTC'}</span>
                    </div>
                  </div>

                  {dossier.foundingInfo && (
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-[10px] text-slate-300 leading-relaxed">
                      <span className="text-[8px] font-mono uppercase text-white font-bold block mb-0.5">FOUNDING & INDEPENDENCE MILESTONES</span>
                      {dossier.foundingInfo}
                    </div>
                  )}
                </div>

                {/* Dedicated Superpower Competition Matrix (e.g. for Greenland) */}
                {dossier.competitionAnalysis && (
                  <div className="p-3.5 rounded-xl bg-[#0D0D0D] border border-white/20 space-y-3">
                    <div className="flex items-center justify-between pb-1.5 border-b border-[#1A1A1A]">
                      <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                        <span>◈</span>
                        <span>GREAT-POWER COMPETITION & STRATEGIC RIVALRY MATRIX</span>
                      </span>
                      <span className="text-[8.5px] font-mono text-[#888888]">SPECIAL INTELLIGENCE</span>
                    </div>

                    <div className="space-y-2.5 text-xs">
                      {dossier.competitionAnalysis.unitedStates && (
                        <div className="p-2.5 rounded-lg bg-[#111111] border border-[#1A1A1A] space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-white font-mono text-[10px]">🇺🇸 UNITED STATES STRATEGIC MOTIVES</span>
                            <span className="text-[9px] font-mono px-1.5 rounded bg-white text-black font-bold">PITUFFIK / DEFENSE</span>
                          </div>
                          <p className="text-[11px] text-[#BDBDBD] leading-relaxed">
                            {dossier.competitionAnalysis.unitedStates.coreMotives}
                          </p>
                          <div className="text-[9.5px] font-mono text-[#888888] pt-1 border-t border-[#1A1A1A]">
                            Leverage: {dossier.competitionAnalysis.unitedStates.leverage}
                          </div>
                        </div>
                      )}

                      {dossier.competitionAnalysis.denmark && (
                        <div className="p-2.5 rounded-lg bg-[#111111] border border-[#1A1A1A] space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-white font-mono text-[10px]">🇩🇰 DENMARK SOVEREIGN MOTIVES</span>
                            <span className="text-[9px] font-mono px-1.5 rounded bg-white text-black font-bold">REALM UNITY</span>
                          </div>
                          <p className="text-[11px] text-[#BDBDBD] leading-relaxed">
                            {dossier.competitionAnalysis.denmark.coreMotives}
                          </p>
                          <div className="text-[9.5px] font-mono text-[#888888] pt-1 border-t border-[#1A1A1A]">
                            Leverage: {dossier.competitionAnalysis.denmark.leverage}
                          </div>
                        </div>
                      )}

                      {dossier.competitionAnalysis.china && (
                        <div className="p-2.5 rounded-lg bg-[#111111] border border-[#1A1A1A] space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-white font-mono text-[10px]">🇨🇳 CHINA POLAR SILK ROAD MOTIVES</span>
                            <span className="text-[9px] font-mono px-1.5 rounded bg-white text-black font-bold">RARE EARTHS</span>
                          </div>
                          <p className="text-[11px] text-[#BDBDBD] leading-relaxed">
                            {dossier.competitionAnalysis.china.coreMotives}
                          </p>
                          <div className="text-[9.5px] font-mono text-[#888888] pt-1 border-t border-[#1A1A1A]">
                            Leverage: {dossier.competitionAnalysis.china.leverage}
                          </div>
                        </div>
                      )}

                      {dossier.competitionAnalysis.indigenousAutonomy && (
                        <div className="p-2.5 rounded-lg bg-[#111111] border border-[#1A1A1A] space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-white font-mono text-[10px]">🇬🇱 INUIT SELF-RULE & AUTONOMY</span>
                            <span className="text-[9px] font-mono px-1.5 rounded bg-white text-black font-bold">SELF-DETERMINATION</span>
                          </div>
                          <p className="text-[11px] text-[#BDBDBD] leading-relaxed">
                            {dossier.competitionAnalysis.indigenousAutonomy.coreMotives}
                          </p>
                          <div className="text-[9.5px] font-mono text-[#888888] pt-1 border-t border-[#1A1A1A]">
                            Leverage: {dossier.competitionAnalysis.indigenousAutonomy.leverage}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ======================================================== */}
            {/* 2. HISTORY (Interactive Chronological Intelligence Timeline) */}
            {/* ======================================================== */}
            {activeTab === 'history' && (() => {
              const rawHistory = Array.isArray(dossier.history) ? dossier.history : [];
              const filteredHistory = rawHistory.filter(item => {
                if (historyCategoryFilter !== 'ALL') {
                  const cat = historyCategoryFilter.toLowerCase();
                  const hay = `${item.phase || ''} ${item.title || ''} ${item.whatHappened || ''} ${item.claimType || ''}`.toLowerCase();
                  if (!hay.includes(cat)) return false;
                }
                if (!historySearchQuery.trim()) return true;
                const q = historySearchQuery.toLowerCase();
                return (
                  item.title?.toLowerCase().includes(q) ||
                  item.year?.toLowerCase().includes(q) ||
                  item.whatHappened?.toLowerCase().includes(q) ||
                  item.where?.toLowerCase().includes(q) ||
                  item.actors?.some(a => a.toLowerCase().includes(q)) ||
                  item.sources?.toLowerCase().includes(q)
                );
              });

              return (
                <div className="space-y-3 animate-fade-in text-[#E0E0E0]">
                  
                  {/* Top Bar: Count & Search */}
                  <div className="space-y-2 pb-2 border-b border-[#1A1A1A]">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                        <span>◈</span>
                        <span>CHRONOLOGICAL HISTORICAL ARCHIVE ({rawHistory.length} MILESTONES)</span>
                      </span>
                      <span className="text-[8.5px] font-mono text-[#888888]">
                        STRICT HISTORICAL FACT
                      </span>
                    </div>

                    {/* In-Timeline Search Input */}
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-[#666666]" />
                      <input
                        type="text"
                        value={historySearchQuery}
                        onChange={(e) => setHistorySearchQuery(e.target.value)}
                        placeholder="Filter milestones, treaties, wars, leaders..."
                        className="w-full bg-[#111111] border border-[#1C1C1C] rounded-lg pl-7 pr-3 py-1 text-xs text-white placeholder-[#555555] font-mono focus:outline-none focus:border-white transition-colors"
                      />
                    </div>

                    {/* Category Filter Pills */}
                    <div className="flex items-center gap-1 overflow-x-auto pb-0.5 scrollbar-none text-[8.5px] font-mono">
                      {[
                        { id: 'ALL', label: 'ALL' },
                        { id: 'war', label: 'WARS & CONFLICT' },
                        { id: 'state', label: 'STATEHOOD / EMPIRES' },
                        { id: 'treaty', label: 'TREATIES' },
                        { id: 'independence', label: 'INDEPENDENCE' },
                        { id: 'soviet', label: 'SOVIET / COLD WAR' }
                      ].map(pill => (
                        <button
                          key={pill.id}
                          onClick={() => setHistoryCategoryFilter(pill.id)}
                          className={`px-2 py-0.5 rounded border transition-colors shrink-0 cursor-pointer ${
                            historyCategoryFilter === pill.id
                              ? 'bg-white text-black font-bold border-white'
                              : 'bg-[#141414] text-[#888888] border-[#222222] hover:text-white'
                          }`}
                        >
                          {pill.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Former Soviet Union Republic Special Historical Matrix */}
                  {dossier.sovietTransition && (
                    <div className="p-3.5 rounded-xl bg-[#111111] border border-white/20 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                          <span>■</span>
                          <span>USSR STATUS & 1991 SOVEREIGN TRANSITION</span>
                        </span>
                        <span className="text-[8.5px] font-mono px-1.5 py-0.2 rounded bg-white text-black font-bold">
                          POST-SOVIET REPUBLIC
                        </span>
                      </div>

                      <div className="text-xs space-y-1.5 text-[#CCCCCC]">
                        <div>
                          <span className="text-[9.5px] font-mono text-[#888888] block">CONSTITUENT ENTITY IN USSR:</span>
                          <p className="font-semibold text-white">{dossier.sovietTransition.ussrName}</p>
                          <p className="text-[11px] text-[#AAAAAA] mt-0.5 leading-snug">{dossier.sovietTransition.statusInUSSR}</p>
                        </div>

                        <div className="pt-1 border-t border-[#1C1C1C] flex items-center justify-between text-[10px] font-mono">
                          <span className="text-[#888888]">Independence Declaration:</span>
                          <span className="text-white font-bold">{dossier.sovietTransition.independenceDeclarationDate}</span>
                        </div>

                        <div className="pt-1 border-t border-[#1C1C1C] space-y-0.5">
                          <span className="text-[9.5px] font-mono text-[#888888] block">CIS & COLLECTIVE SECURITY STATUS:</span>
                          <p className="text-[11px] text-[#CCCCCC]">{dossier.sovietTransition.cisStatus}</p>
                        </div>

                        {dossier.sovietTransition.balticDistinctTrajectory && (
                          <div className="pt-1 border-t border-[#1C1C1C] space-y-0.5">
                            <span className="text-[9.5px] font-mono text-white font-bold block">BALTIC WESTERN INTEGRATION (NATO & EU 2004):</span>
                            <p className="text-[11px] text-[#AAAAAA]">{dossier.sovietTransition.balticDistinctTrajectory}</p>
                          </div>
                        )}

                        {dossier.sovietTransition.majorTerritorialBorderConflicts?.length > 0 && (
                          <div className="pt-1 border-t border-[#1C1C1C] space-y-0.5">
                            <span className="text-[9.5px] font-mono text-[#888888] block">DOCUMENTED POST-INDEPENDENCE BORDER CONFLICTS:</span>
                            <ul className="text-[10.5px] text-[#B0B0B0] list-disc list-inside space-y-0.5">
                              {dossier.sovietTransition.majorTerritorialBorderConflicts.slice(0, 3).map((cnf, i) => (
                                <li key={i}>{cnf}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Empty state check */}
                  {filteredHistory.length === 0 ? (
                    <div className="p-4 rounded-xl bg-[#111111] border border-[#1C1C1C] text-center space-y-1">
                      <p className="text-xs text-white font-semibold">No historical milestones matched current filters.</p>
                      <button
                        onClick={() => { setHistorySearchQuery(''); setHistoryCategoryFilter('ALL'); }}
                        className="text-[10px] font-mono text-[#888888] hover:text-white underline cursor-pointer"
                      >
                        Reset history filters
                      </button>
                    </div>
                  ) : (
                    <div className="relative border-l border-[#222222] ml-2 space-y-3 pl-4">
                      {filteredHistory.map((item, idx) => {
                        const isExpanded = historyExpandedIndex === idx;

                        return (
                          <div 
                            key={idx}
                            className="group relative"
                          >
                            {/* Dot on timeline */}
                            <div className="absolute -left-[21px] top-2 w-2.5 h-2.5 rounded-full bg-[#0A0A0A] border-2 border-white group-hover:scale-125 transition-transform" />

                            <div 
                              onClick={() => setHistoryExpandedIndex(isExpanded ? null : idx)}
                              className="p-3 rounded-xl bg-[#111111] hover:bg-[#161616] border border-[#1C1C1C] hover:border-[#333333] transition-all cursor-pointer"
                            >
                              <div className="flex items-start justify-between gap-2">
                                <div>
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-[10.5px] font-mono font-bold text-white px-1.5 py-0.2 rounded bg-[#1C1C1C] border border-[#262626]">
                                      {item.year}
                                    </span>
                                    {item.phase && (
                                      <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-white/5 text-[#888888]">
                                        {item.phase}
                                      </span>
                                    )}
                                  </div>
                                  <h4 className="text-xs font-semibold text-white group-hover:text-white transition-colors mt-1 leading-snug">
                                    {item.title}
                                  </h4>
                                </div>

                                <div className="flex items-center gap-1 shrink-0">
                                  {item.claimType && (
                                    <span className="text-[8px] font-mono px-1.5 py-0.5 rounded uppercase font-bold bg-white/10 text-white border border-white/20">
                                      {item.claimType}
                                    </span>
                                  )}
                                  {isExpanded ? (
                                    <ChevronUp className="w-3.5 h-3.5 text-[#888888]" />
                                  ) : (
                                    <ChevronDown className="w-3.5 h-3.5 text-[#888888]" />
                                  )}
                                </div>
                              </div>

                              {/* Collapsible Expanded Details */}
                              {isExpanded && (
                                <div 
                                  onClick={(e) => e.stopPropagation()}
                                  className="mt-3 pt-2.5 border-t border-[#1C1C1C] space-y-2.5 text-[11px] leading-relaxed animate-fade-in"
                                >
                                  {/* What Happened */}
                                  <div>
                                    <strong className="text-white uppercase font-mono text-[9px] block">WHAT HAPPENED?</strong>
                                    <div className="text-[#D0D0D0] mt-0.5">
                                      <InteractiveText text={item.whatHappened} contextEntity={dossier.id} onSelectConcept={onSelectConcept} />
                                    </div>
                                  </div>

                                  {/* Root Causes & Immediate Trigger (if present) */}
                                  {(item.rootCauses || item.immediateTrigger) && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-[#1A1A1A]">
                                      {item.rootCauses && (
                                        <div className="p-2 rounded bg-[#141414] border border-[#222222]">
                                          <span className="text-[8.5px] font-mono text-[#888888] uppercase block">ROOT CAUSES</span>
                                          <p className="text-[10.5px] text-[#B0B0B0] mt-0.5">{item.rootCauses}</p>
                                        </div>
                                      )}
                                      {item.immediateTrigger && (
                                        <div className="p-2 rounded bg-[#141414] border border-[#222222]">
                                          <span className="text-[8.5px] font-mono text-[#888888] uppercase block">IMMEDIATE TRIGGER</span>
                                          <p className="text-[10.5px] text-[#B0B0B0] mt-0.5">{item.immediateTrigger}</p>
                                        </div>
                                      )}
                                    </div>
                                  )}

                                  {/* Turning Points */}
                                  {item.turningPoints && (
                                    <div>
                                      <strong className="text-white uppercase font-mono text-[9px] block">CRITICAL TURNING POINTS</strong>
                                      <p className="text-[#C0C0C0] mt-0.5">{item.turningPoints}</p>
                                    </div>
                                  )}

                                  {/* Geographic Location & Locate Action */}
                                  {item.where && (
                                    <div className="flex items-center justify-between p-2 rounded bg-[#141414] border border-[#222222]">
                                      <div>
                                        <strong className="text-[#888888] uppercase font-mono text-[8.5px] block">GEOGRAPHIC LOCATION</strong>
                                        <p className="text-[#CCCCCC] text-[10.5px]">{item.where}</p>
                                      </div>
                                      {onSelectLocation && (
                                        <button
                                          onClick={() => onSelectLocation({ name: item.title, lat: dossier.lat, lng: dossier.lng })}
                                          className="px-2 py-0.5 rounded bg-[#1C1C1C] hover:bg-white hover:text-black border border-[#2A2A2A] text-white font-mono text-[9px] flex items-center gap-1 transition-all cursor-pointer"
                                        >
                                          <Compass className="w-3 h-3" />
                                          <span>LOCATE</span>
                                        </button>
                                      )}
                                    </div>
                                  )}

                                  {/* Key Actors */}
                                  {item.actors && item.actors.length > 0 && (
                                    <div>
                                      <strong className="text-[#888888] uppercase font-mono text-[9px] block">KEY ACTORS & LEADERS</strong>
                                      <p className="text-[#B0B0B0]">{item.actors.join(', ')}</p>
                                    </div>
                                  )}

                                  {/* Why Did It Matter */}
                                  {item.whyItMattered && (
                                    <div>
                                      <strong className="text-white uppercase font-mono text-[9px] block">STRATEGIC SIGNIFICANCE</strong>
                                      <div className="text-[#D0D0D0]">
                                        <InteractiveText text={item.whyItMattered} contextEntity={dossier.id} onSelectConcept={onSelectConcept} />
                                      </div>
                                    </div>
                                  )}

                                  {/* Consequences & Aftermath */}
                                  {(item.consequences || item.politicalConsequences) && (
                                    <div>
                                      <strong className="text-white uppercase font-mono text-[9px] block">CONSEQUENCES & AFTERMATH</strong>
                                      <div className="text-[#D0D0D0]">
                                        <InteractiveText text={item.politicalConsequences || item.consequences} contextEntity={dossier.id} onSelectConcept={onSelectConcept} />
                                      </div>
                                    </div>
                                  )}

                                  {/* Connection to Present */}
                                  {item.connectionToPresent && (
                                    <div className="p-2 rounded bg-white/5 border border-white/10">
                                      <strong className="text-white uppercase font-mono text-[8.5px] block">CONNECTION TO PRESENT GEOPOLITICS</strong>
                                      <p className="text-[#E0E0E0] text-[10.5px] mt-0.5">{item.connectionToPresent}</p>
                                    </div>
                                  )}

                                  {/* Sources */}
                                  {item.sources && (
                                    <div className="pt-1 text-[8.5px] font-mono text-[#666666] border-t border-[#1C1C1C]">
                                      SOURCES: {item.sources}
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })()}

            {/* ======================================================== */}
            {/* 3. POLITICAL STRUCTURE & POLITICS */}
            {/* ======================================================== */}
            {activeTab === 'politics' && (
              <div className="space-y-3 animate-fade-in">
                {/* Constitutional Framework */}
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                  <div className="flex items-center gap-1.5 text-cyan-400 font-mono text-[10px] font-bold uppercase">
                    <Building className="w-3.5 h-3.5" />
                    <span>CONSTITUTIONAL STRUCTURE & GOVERNMENT TYPE</span>
                  </div>
                  <p className="font-semibold text-slate-100 text-xs">
                    {dossier.politicalSystem?.type || dossier.politicalSystemType || 'Constitutional Government'}
                  </p>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    {dossier.politicalSystem?.constitution || 'National Constitution and statutory legal framework.'}
                  </p>
                </div>

                {/* Current Leadership */}
                <div className="p-3 rounded-xl bg-black/40 border border-white/10 space-y-2">
                  <span className="block text-[9px] font-mono uppercase text-cyan-400 font-bold">CURRENT EXECUTIVE LEADERSHIP</span>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Head of State:</span>
                      <span className="text-slate-100 font-semibold">{dossier.headOfState || dossier.politicalSystem?.currentLeadership?.headOfState || 'DATA UNAVAILABLE'}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Head of Government:</span>
                      <span className="text-slate-100 font-semibold">{dossier.headOfGovernment || dossier.politicalSystem?.currentLeadership?.headOfGovernment || 'DATA UNAVAILABLE'}</span>
                    </div>
                    {dossier.politicalSystem?.currentLeadership?.foreignMinister && (
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Foreign Minister:</span>
                        <span className="text-slate-200">{dossier.politicalSystem.currentLeadership.foreignMinister}</span>
                      </div>
                    )}
                    {dossier.politicalSystem?.currentLeadership?.defenseMinister && (
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Defense Minister:</span>
                        <span className="text-slate-200">{dossier.politicalSystem.currentLeadership.defenseMinister}</span>
                      </div>
                    )}
                    {dossier.politicalSystem?.currentLeadership?.term && (
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Electoral Mandate:</span>
                        <span className="text-slate-300 font-mono text-[10px]">{dossier.politicalSystem.currentLeadership.term}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Ruling Party & Parliament */}
                {(dossier.politicalSystem?.rulingParty || dossier.politicalSystem?.parliamentDetails) && (
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                    <span className="block text-[9px] font-mono uppercase text-amber-400 font-bold">PARLIAMENT & RULING COALITION</span>
                    {dossier.politicalSystem.rulingParty && (
                      <div>
                        <strong className="text-slate-400 font-mono text-[9px] uppercase block">Ruling Party / Coalition:</strong>
                        <p className="text-xs font-semibold text-slate-100 mt-0.5">{dossier.politicalSystem.rulingParty}</p>
                      </div>
                    )}
                    {dossier.politicalSystem.parliamentDetails && (
                      <p className="text-[11px] text-slate-300 pt-1 border-t border-white/5 leading-relaxed">
                        {dossier.politicalSystem.parliamentDetails}
                      </p>
                    )}
                  </div>
                )}

                {/* Major Opposition Parties */}
                {dossier.politicalSystem?.oppositionParties && dossier.politicalSystem.oppositionParties.length > 0 && (
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                    <span className="block text-[9px] font-mono uppercase text-slate-400 font-bold">MAJOR OPPOSITION PARTIES</span>
                    <div className="space-y-1.5">
                      {dossier.politicalSystem.oppositionParties.map((op, idx) => (
                        <div key={idx} className="p-2 rounded-lg bg-black/30 border border-white/5 text-[11px]">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-slate-200">{op.name}</span>
                            {op.seats && <span className="text-[9px] font-mono text-cyan-400">{op.seats}</span>}
                          </div>
                          {op.stance && <p className="text-[10px] text-slate-400 mt-0.5 italic">{op.stance}</p>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Recent Elections */}
                {dossier.politicalSystem?.recentElections && (
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10 space-y-1">
                    <span className="block text-[9px] font-mono uppercase text-emerald-400 font-bold">RECENT ELECTIONS & TIMELINE</span>
                    <p className="text-[11px] text-slate-200 leading-relaxed">{dossier.politicalSystem.recentElections}</p>
                  </div>
                )}

                {/* Domestic Political Developments */}
                {dossier.politicalSystem?.domesticDevelopments && (
                  <div className="space-y-1.5">
                    <span className="block text-[9px] font-mono uppercase text-cyan-400 font-bold">DOMESTIC POLITICAL DEVELOPMENTS</span>
                    {dossier.politicalSystem.domesticDevelopments.map((dev, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-slate-200 text-xs">{dev.title}</span>
                          <span className="text-[8px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold uppercase">
                            {dev.claimType || 'VERIFIED FACT'}
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-300">{dev.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Current Political Issues & Debates */}
                {dossier.politicalSystem?.currentIssues && (
                  <div className="space-y-1.5">
                    <span className="block text-[9px] font-mono uppercase text-rose-400 font-bold">CURRENT POLITICAL ISSUES & POLICY DEBATES</span>
                    {dossier.politicalSystem.currentIssues.map((issue, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-rose-950/20 border border-rose-500/20 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-rose-200 text-xs">{issue.title}</span>
                          <span className="text-[8px] font-mono px-1.5 py-0.2 rounded bg-rose-500/20 text-rose-300 uppercase font-bold">
                            {issue.claimType || 'ANALYSIS'}
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-300">{issue.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* State Institutions */}
                {dossier.politicalSystem?.branches && (
                  <div className="space-y-1.5">
                    <span className="block text-[9px] font-mono uppercase text-slate-400 font-bold">STATE INSTITUTIONS</span>
                    {dossier.politicalSystem.branches.map((b, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                        <span className="font-semibold text-cyan-300 text-xs">{b.name}</span>
                        <p className="text-[11px] text-slate-300 mt-0.5">{b.role}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Foreign Policy Doctrine */}
                {dossier.politicalSystem?.foreignPolicyDoctrine && (
                  <div className="p-3 rounded-xl bg-cyan-950/20 border border-cyan-500/30 space-y-1">
                    <span className="block text-[9px] font-mono uppercase text-cyan-400 font-bold">FOREIGN POLICY DOCTRINE</span>
                    <div className="text-[11px] text-slate-200 leading-relaxed">
                      <InteractiveText text={dossier.politicalSystem.foreignPolicyDoctrine} contextEntity={dossier.id} onSelectConcept={onSelectConcept} />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ======================================================== */}
            {/* 4. GEOGRAPHIC POSITION */}
            {/* ======================================================== */}
            {activeTab === 'geography' && (
              <div className="space-y-3 animate-fade-in">
                {/* Strategic Geography Position */}
                {dossier.geographyBorders?.strategicGeography && (
                  <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/30 space-y-1.5">
                    <span className="block text-[9px] font-mono uppercase text-cyan-400 font-bold">STRATEGIC GEOGRAPHIC POSITION</span>
                    <div className="text-[11px] text-slate-200 leading-relaxed font-semibold">
                      <InteractiveText text={dossier.geographyBorders.strategicGeography} contextEntity={dossier.id} onSelectConcept={onSelectConcept} />
                    </div>
                  </div>
                )}

                {/* Location & Coordinates */}
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                  <span className="block text-[9px] font-mono uppercase text-cyan-400 font-bold">LOCATION & CONTINENTAL POSITION</span>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-[8px] font-mono text-slate-400 uppercase block">CONTINENT / REGION</span>
                      <span className="text-slate-200 font-semibold">{dossier.geographyBorders?.continent || dossier.region}</span>
                    </div>
                    <div>
                      <span className="text-[8px] font-mono text-slate-400 uppercase block">COASTLINE</span>
                      <span className="text-slate-200 font-semibold">{dossier.geographyBorders?.coastline || 'DATA UNAVAILABLE'}</span>
                    </div>
                    <div>
                      <span className="text-[8px] font-mono text-slate-400 uppercase block">LATITUDE RANGE</span>
                      <span className="text-slate-200 font-mono text-[10px]">{dossier.geographyBorders?.latRange || 'Standard Geographic Extent'}</span>
                    </div>
                    <div>
                      <span className="text-[8px] font-mono text-slate-400 uppercase block">LONGITUDE RANGE</span>
                      <span className="text-slate-200 font-mono text-[10px]">{dossier.geographyBorders?.lngRange || 'Standard Geographic Extent'}</span>
                    </div>
                  </div>
                  {dossier.geographyBorders?.location && (
                    <p className="text-[10px] text-slate-300 pt-1.5 border-t border-white/5">{dossier.geographyBorders.location}</p>
                  )}
                </div>

                {/* Land Area & Topography */}
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="block text-[9px] font-mono uppercase text-cyan-400 font-bold">LAND AREA & TOPOGRAPHY</span>
                  <p className="text-xs text-slate-200 font-semibold mt-1">
                    {dossier.geographyBorders?.landArea || dossier.area || 'DATA UNAVAILABLE'}
                  </p>
                  <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                    {dossier.geographyBorders?.topography || 'Territorial sovereign topography.'}
                  </p>
                </div>

                {/* Major Oceans & Adjacent Seas */}
                {(dossier.geographyBorders?.majorOceans || dossier.geographyBorders?.seas) && (
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                    <span className="block text-[9px] font-mono uppercase text-cyan-400 font-bold">MARITIME BASINS & ADJACENT SEAS</span>
                    {dossier.geographyBorders?.majorOceans && (
                      <div>
                        <strong className="text-slate-400 font-mono text-[9px] uppercase block">Major Oceans:</strong>
                        <p className="text-[11px] text-cyan-300 font-semibold">{dossier.geographyBorders.majorOceans.join(' • ')}</p>
                      </div>
                    )}
                    {dossier.geographyBorders?.seas && (
                      <div className="pt-1 border-t border-white/5">
                        <strong className="text-slate-400 font-mono text-[9px] uppercase block">Adjacent Seas:</strong>
                        <div className="space-y-1 pt-0.5">
                          {dossier.geographyBorders.seas.map((sea, idx) => (
                            <div key={idx} className="text-[11px] text-slate-200 flex items-start gap-1.5">
                              <span className="text-cyan-400">•</span>
                              <span>{sea}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Mountain Ranges */}
                {dossier.geographyBorders?.mountains && dossier.geographyBorders.mountains.length > 0 && (
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="block text-[9px] font-mono uppercase text-cyan-400 font-bold">MOUNTAIN SYSTEMS & ELEVATION</span>
                    <div className="space-y-1 pt-1">
                      {dossier.geographyBorders.mountains.map((mountain, idx) => (
                        <div key={idx} className="text-[11px] text-slate-200 flex items-start gap-1.5">
                          <span className="text-cyan-400">•</span>
                          <span>{mountain}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Major Rivers */}
                {dossier.geographyBorders?.rivers && dossier.geographyBorders.rivers.length > 0 && (
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="block text-[9px] font-mono uppercase text-cyan-400 font-bold">MAJOR RIVERS & WATERWAYS</span>
                    <div className="space-y-1 pt-1">
                      {dossier.geographyBorders.rivers.map((river, idx) => (
                        <div key={idx} className="text-[11px] text-slate-200 flex items-start gap-1.5">
                          <span className="text-cyan-400">•</span>
                          <span>{river}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Major Islands */}
                {dossier.geographyBorders?.majorIslands && dossier.geographyBorders.majorIslands.length > 0 && (
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="block text-[9px] font-mono uppercase text-cyan-400 font-bold">MAJOR ISLANDS & TERRITORIES</span>
                    <p className="text-[11px] text-slate-300 pt-0.5">{dossier.geographyBorders.majorIslands.join(', ')}</p>
                  </div>
                )}

                {/* Climatic Biomes */}
                {dossier.geographyBorders?.climates && dossier.geographyBorders.climates.length > 0 && (
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="block text-[9px] font-mono uppercase text-cyan-400 font-bold">CLIMATIC BIOMES & TERRAIN</span>
                    <div className="space-y-1 pt-1">
                      {dossier.geographyBorders.climates.map((climate, idx) => (
                        <div key={idx} className="text-[11px] text-slate-200 flex items-start gap-1.5">
                          <span className="text-cyan-400">•</span>
                          <span>{climate}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ======================================================== */}
            {/* 5. BORDERS & NEIGHBORING STATES */}
            {/* ======================================================== */}
            {activeTab === 'borders' && (
              <div className="space-y-3 animate-fade-in">
                <div className="flex items-center justify-between pb-1 border-b border-white/10">
                  <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider">
                    TERRESTRIAL & MARITIME BORDERS ({dossier.geographyBorders?.landBorders?.length || 0} LAND FRONTIERS)
                  </span>
                  <span className="text-[9px] font-mono text-slate-400">
                    CLICK TO FOCUS NEIGHBOR
                  </span>
                </div>

                {/* Terrestrial Land Borders */}
                {dossier.geographyBorders?.landBorders && dossier.geographyBorders.landBorders.length > 0 ? (
                  <div className="space-y-2">
                    {dossier.geographyBorders.landBorders.map((border, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 transition-all space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Globe2 className="w-3.5 h-3.5 text-cyan-400" />
                            <span className="font-semibold text-slate-100 text-xs">{border.country}</span>
                          </div>
                          <span className="text-[10px] font-mono font-bold text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                            {border.borderLength}
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between text-[10px] text-slate-400">
                          <span>Sector: <strong className="text-slate-300">{border.region}</strong></span>
                          <span className="font-mono text-cyan-300">{border.status}</span>
                        </div>

                        {border.strategicContext && (
                          <p className="text-[10px] text-slate-300 leading-relaxed italic bg-black/20 p-2 rounded-lg border border-white/5">
                            {border.strategicContext}
                          </p>
                        )}

                        <div className="flex items-center justify-end gap-2 pt-1 border-t border-white/5">
                          <button
                            onClick={() => {
                              if (onSelectRelationship) {
                                onSelectRelationship(`${iso3}_${border.id}`);
                              }
                            }}
                            className="px-2 py-1 rounded text-[9px] font-mono text-cyan-400 hover:text-cyan-200 bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-500/30 flex items-center gap-1 transition-all cursor-pointer"
                          >
                            <span>EXPLORE RELATIONSHIP</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>

                          {onSelectCountry && border.id && border.id !== 'BORDER' && (
                            <button
                              onClick={() => onSelectCountry(border.id)}
                              className="px-2 py-1 rounded text-[9px] font-mono text-amber-400 hover:text-amber-200 bg-amber-950/40 hover:bg-amber-900/60 border border-amber-500/30 flex items-center gap-1 transition-all cursor-pointer"
                            >
                              <MapPin className="w-3 h-3" />
                              <span>VIEW NEIGHBOR</span>
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-center space-y-1">
                    <p className="text-slate-300 text-xs font-semibold">Island Nation or Maritime Littoral</p>
                    <p className="text-slate-400 text-[10px]">No sovereign terrestrial land borders; bounded exclusively by territorial seas and exclusive economic zones.</p>
                  </div>
                )}

                {/* Maritime Boundaries */}
                {dossier.geographyBorders?.maritimeBorders && dossier.geographyBorders.maritimeBorders.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                      MARITIME DELIMITATION & ADJACENT STRAITS
                    </span>
                    {dossier.geographyBorders.maritimeBorders.map((mb, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-cyan-300">{mb.country}</span>
                          {mb.id && onSelectCountry && (
                            <button
                              onClick={() => onSelectCountry(mb.id)}
                              className="text-[9px] font-mono text-slate-400 hover:text-white underline cursor-pointer"
                            >
                              Inspect
                            </button>
                          )}
                        </div>
                        <p className="text-[10px] text-slate-300">{mb.boundary}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* ======================================================== */}
            {/* 6. ECONOMY */}
            {/* ======================================================== */}
            {activeTab === 'economy' && (
              <div className="space-y-3 animate-fade-in">
                {/* GDP Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 text-center">
                    <span className="text-[8px] font-mono text-slate-400 uppercase">GDP NOMINAL</span>
                    <p className="font-bold text-slate-100 text-xs mt-0.5">{dossier.economy?.gdpNominal || 'DATA UNAVAILABLE'}</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 text-center">
                    <span className="text-[8px] font-mono text-slate-400 uppercase">GDP (PPP)</span>
                    <p className="font-bold text-slate-100 text-xs mt-0.5">{dossier.economy?.gdpPPP || 'DATA UNAVAILABLE'}</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 text-center">
                    <span className="text-[8px] font-mono text-slate-400 uppercase">PER CAPITA</span>
                    <p className="font-bold text-slate-100 text-xs mt-0.5">{dossier.economy?.gdpPerCapita || 'DATA UNAVAILABLE'}</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 text-center">
                    <span className="text-[8px] font-mono text-slate-400 uppercase">GROWTH RATE</span>
                    <p className="font-bold text-emerald-400 text-xs mt-0.5">{dossier.economy?.gdpGrowth || '+2.5% (Est)'}</p>
                  </div>
                </div>

                {/* Major Industries */}
                {dossier.economy?.majorIndustries && (
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5">
                    <span className="block text-[9px] font-mono uppercase text-cyan-400 font-bold">MAJOR DOMESTIC INDUSTRIES</span>
                    <div className="space-y-1 pt-0.5">
                      {dossier.economy.majorIndustries.map((ind, idx) => (
                        <div key={idx} className="text-[11px] text-slate-200 flex items-start gap-1.5">
                          <span className="text-cyan-400">•</span>
                          <span>{ind}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Major Exports & Imports */}
                {(dossier.economy?.majorExports || dossier.economy?.majorImports) && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {dossier.economy.majorExports && (
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                        <span className="block text-[9px] font-mono uppercase text-emerald-400 font-bold">TOP EXPORT COMMODITIES</span>
                        <div className="space-y-1 pt-1">
                          {dossier.economy.majorExports.map((exp, idx) => (
                            <div key={idx} className="text-[10px] text-slate-300 flex items-start gap-1">
                              <span className="text-emerald-400">↑</span>
                              <span>{exp}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {dossier.economy.majorImports && (
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                        <span className="block text-[9px] font-mono uppercase text-rose-400 font-bold">TOP IMPORT COMMODITIES</span>
                        <div className="space-y-1 pt-1">
                          {dossier.economy.majorImports.map((imp, idx) => (
                            <div key={idx} className="text-[10px] text-slate-300 flex items-start gap-1">
                              <span className="text-rose-400">↓</span>
                              <span>{imp}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Major Trading Partners */}
                {dossier.economy?.majorTradingPartners && (
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5">
                    <span className="block text-[9px] font-mono uppercase text-slate-400 font-bold">KEY BILATERAL TRADING PARTNERS</span>
                    <div className="space-y-1.5 pt-0.5">
                      {dossier.economy.majorTradingPartners.map((tp, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-black/30 border border-white/5 text-[11px]">
                          <span className="text-slate-200 font-semibold">{tp.country}</span>
                          <span className="text-cyan-400 font-mono text-[10px]">{tp.share}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Energy Position & Natural Resources */}
                {(dossier.economy?.energyPosition || dossier.economy?.naturalResources) && (
                  <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/30 space-y-2">
                    <span className="block text-[9px] font-mono uppercase text-amber-300 font-bold">ENERGY POSITION & NATURAL RESOURCES</span>
                    {dossier.economy.energyPosition && (
                      <div>
                        <strong className="text-slate-400 font-mono text-[9px] uppercase block">Energy Position:</strong>
                        <p className="text-[11px] text-slate-200 leading-relaxed mt-0.5">{dossier.economy.energyPosition}</p>
                      </div>
                    )}
                    {dossier.economy.naturalResources && (
                      <div className="pt-1.5 border-t border-white/5">
                        <strong className="text-slate-400 font-mono text-[9px] uppercase block">Natural Resources:</strong>
                        <p className="text-[11px] text-slate-300 leading-relaxed mt-0.5">{dossier.economy.naturalResources}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Trade Organizations & Economic Importance */}
                {(dossier.economy?.tradeOrgs || dossier.economy?.economicStrategicImportance) && (
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                    <span className="block text-[9px] font-mono uppercase text-cyan-400 font-bold">INTERNATIONAL TRADE INTEGRATION</span>
                    {dossier.economy.tradeOrgs && (
                      <p className="text-[10px] text-cyan-300 font-mono">{dossier.economy.tradeOrgs.join(' • ')}</p>
                    )}
                    {dossier.economy.economicStrategicImportance && (
                      <p className="text-[11px] text-slate-300 leading-relaxed pt-1 border-t border-white/5">
                        {dossier.economy.economicStrategicImportance}
                      </p>
                    )}
                  </div>
                )}

                {/* India Economic Connection */}
                {dossier.economy?.indiaEconomicConnection && (
                  <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/40 space-y-1">
                    <span className="block text-[9px] font-mono uppercase text-cyan-400 font-bold">INDIA ECONOMIC CONNECTION</span>
                    <p className="text-[11px] text-slate-200 leading-relaxed">{dossier.economy.indiaEconomicConnection}</p>
                  </div>
                )}
              </div>
            )}

            {/* ======================================================== */}
            {/* 7. MILITARY & DEFENCE */}
            {/* ======================================================== */}
            {activeTab === 'military' && (
              <div className="space-y-3 animate-fade-in">
                {/* Expenditure & Personnel */}
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono text-cyan-400 font-bold uppercase">DEFENSE EXPENDITURE</span>
                    <span className="font-mono text-xs font-bold text-slate-100">
                      {dossier.military?.expenditure || 'DATA UNAVAILABLE'}
                    </span>
                  </div>
                  {dossier.military?.personnel && (
                    <div className="grid grid-cols-2 gap-2 pt-1 border-t border-white/5 text-[10px]">
                      <div>
                        <span className="text-slate-400 block font-mono">ACTIVE FORCES</span>
                        <span className="text-slate-200 font-semibold">{dossier.military.personnel.active || 'DATA UNAVAILABLE'}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block font-mono">RESERVES</span>
                        <span className="text-slate-200 font-semibold">{dossier.military.personnel.reserves || 'DATA UNAVAILABLE'}</span>
                      </div>
                    </div>
                  )}
                  {dossier.military?.personnel?.conscription && (
                    <p className="text-[10px] text-slate-400 italic pt-1 border-t border-white/5">
                      Service Terms: {dossier.military.personnel.conscription}
                    </p>
                  )}
                </div>

                {/* Military Doctrine */}
                <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/30 space-y-1.5">
                  <span className="block text-[9px] font-mono uppercase text-cyan-400 font-bold">MILITARY DOCTRINE</span>
                  <div className="text-[11px] text-slate-200 leading-relaxed">
                    <InteractiveText 
                      text={dossier.military?.doctrine || 'Territorial defense doctrine dedicated to the preservation of sovereign borders and constitutional order.'} 
                      contextEntity={dossier.id} 
                      onSelectConcept={onSelectConcept} 
                    />
                  </div>
                </div>

                {/* Nuclear Capability */}
                {dossier.military?.nuclearStockpile && (
                  <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-1">
                    <span className="block text-[9px] font-mono uppercase text-rose-400 font-bold">NUCLEAR CAPABILITY & ARSENAL</span>
                    <div className="text-[11px] text-slate-200 leading-relaxed font-semibold">
                      <InteractiveText text={dossier.military.nuclearStockpile} contextEntity={dossier.id} onSelectConcept={onSelectConcept} />
                    </div>
                  </div>
                )}

                {/* Defense Industrial Base */}
                {dossier.military?.defenseIndustry && (
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                    <span className="block text-[9px] font-mono uppercase text-amber-400 font-bold">DEFENSE INDUSTRIAL BASE</span>
                    <div className="text-[11px] text-slate-300 leading-relaxed">
                      <InteractiveText text={dossier.military.defenseIndustry} contextEntity={dossier.id} onSelectConcept={onSelectConcept} />
                    </div>
                  </div>
                )}

                {/* Major Domestic Systems, Imports, Exports */}
                {(dossier.military?.majorDomesticSystems || dossier.military?.majorImports || dossier.military?.majorExports) && (
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                    <span className="block text-[9px] font-mono uppercase text-cyan-400 font-bold">MAJOR HARDWARE PLATFORMS & ARMS TRANSFERS</span>
                    {dossier.military.majorDomesticSystems && (
                      <div>
                        <strong className="text-slate-400 font-mono text-[9px] uppercase block">Domestic Strategic Systems:</strong>
                        <div className="text-[10px] text-slate-200 mt-0.5">
                          <InteractiveText text={dossier.military.majorDomesticSystems.join(', ')} contextEntity={dossier.id} onSelectConcept={onSelectConcept} />
                        </div>
                      </div>
                    )}
                    {dossier.military.majorImports && (
                      <div className="pt-1.5 border-t border-white/5">
                        <strong className="text-slate-400 font-mono text-[9px] uppercase block">Weapons Imports / Sourcing:</strong>
                        <div className="text-[10px] text-slate-300 mt-0.5">
                          <InteractiveText text={dossier.military.majorImports.join(', ')} contextEntity={dossier.id} onSelectConcept={onSelectConcept} />
                        </div>
                      </div>
                    )}
                    {dossier.military.majorExports && (
                      <div className="pt-1.5 border-t border-white/5">
                        <strong className="text-slate-400 font-mono text-[9px] uppercase block">Weapons Exports:</strong>
                        <div className="text-[10px] text-slate-300 mt-0.5">
                          <InteractiveText text={dossier.military.majorExports.join(', ')} contextEntity={dossier.id} onSelectConcept={onSelectConcept} />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Alliances & Security Accords */}
                {dossier.military?.militaryAlliances && (
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10 space-y-1">
                    <span className="block text-[9px] font-mono uppercase text-slate-400 font-bold">SECURITY ALLIANCES & TREATIES</span>
                    <p className="text-[11px] text-cyan-300 font-mono">{dossier.military.militaryAlliances.join(' • ')}</p>
                  </div>
                )}

                {/* Standardized Military Categories */}
                {(!dossier.military?.categories || dossier.military.categories.length === 0 || dossier.military?.isAvailable === false) ? (
                  <DataNotAvailable
                    section="MILITARY INVENTORY & FORCE STRUCTURE"
                    explanation={dossier.military?.explanation || "Some detailed military data is unavailable or not reliably verified."}
                  />
                ) : (
                  dossier.military.categories.map((cat, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                      <div>
                        <h4 className="text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-wide">
                          {cat.name}
                        </h4>
                        <p className="text-[10px] text-slate-400">{cat.desc}</p>
                      </div>

                      <div className="space-y-1.5 pt-1">
                        {cat.systems?.map((sys, sIdx) => (
                          <div 
                            key={sIdx}
                            onClick={() => onSelectMilitarySystem && onSelectMilitarySystem(sys.name)}
                            className="p-2 rounded-lg bg-black/40 border border-white/5 hover:border-cyan-500/30 transition-all cursor-pointer group"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-slate-200 group-hover:text-cyan-300 text-xs">
                                {sys.name}
                              </span>
                              <span className="text-[8px] font-mono px-1.5 py-0.2 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                {sys.status}
                              </span>
                            </div>
                            <div className="text-[10px] text-slate-400 flex items-center gap-2 mt-0.5">
                              <span>{sys.type}</span>
                              <span>•</span>
                              <span>Origin: {sys.origin}</span>
                            </div>
                            <p className="text-[9px] text-slate-300 mt-1 italic">
                              {sys.role}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* ======================================================== */}
            {/* 8. INTERNATIONAL RELATIONS */}
            {/* ======================================================== */}
            {activeTab === 'relations' && (
              <div className="space-y-3 animate-fade-in">
                {/* Search Input */}
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
                  <input
                    type="text"
                    value={relationSearchQuery}
                    onChange={(e) => setRelationSearchQuery(e.target.value)}
                    placeholder="Search any partner (e.g. India, USA, China)..."
                    className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-black/50 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-mono"
                  />
                </div>

                <div className="flex items-center justify-between pb-1 border-b border-white/10">
                  <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold">
                    {relationSearchQuery ? 'SEARCH RESULTS' : 'STRATEGIC RELATIONSHIPS (CLICK TO EXPLORE)'}
                  </span>
                  <span className="text-[9px] font-mono text-cyan-400">
                    {filteredRelations.length} PARTNERS
                  </span>
                </div>

                <div className="space-y-1.5">
                  {(dossier.relations?.isAvailable === false || filteredRelations.length === 0) ? (
                    <DataNotAvailable
                      section="BILATERAL STRATEGIC RELATIONS"
                      explanation={dossier.relations?.explanation || "Specific bilateral relationship dossiers for this nation are not cataloged in current open-source intelligence archives."}
                    />
                  ) : (
                    filteredRelations.map((rel, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleRelationClick(rel)}
                        className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-cyan-500/40 transition-all cursor-pointer group flex items-center justify-between gap-2"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-base">{rel.flag || '🌐'}</span>
                            <span className="font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors text-xs">
                              {dossier.name} ↔ {rel.country}
                            </span>
                          </div>
                          <p className="text-[10px] text-slate-400 pl-6 mt-0.5 line-clamp-1">
                            {rel.note || rel.summary || rel.status}
                          </p>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          <span 
                            className="text-[9px] font-mono px-2 py-0.5 rounded border"
                            style={{
                              borderColor: `${rel.color || '#06b6d4'}40`,
                              color: rel.color || '#06b6d4',
                              backgroundColor: `${rel.color || '#06b6d4'}15`
                            }}
                          >
                            {rel.status}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* 9. CURRENT TENSIONS */}
            {/* ======================================================== */}
            {activeTab === 'tensions' && (
              <div className="space-y-2.5 animate-fade-in">
                <span className="block text-[10px] font-mono uppercase text-rose-400 font-bold">ONGOING CRISES & FLASHPOINTS</span>
                {(dossier.currentTensions?.isAvailable === false || !Array.isArray(dossier.currentTensions) || dossier.currentTensions.length === 0) ? (
                  <DataNotAvailable
                    section="ACTIVE CRISES & FLASHPOINTS"
                    explanation={dossier.currentTensions?.explanation || "No active critical frontier alerts or documented crisis flashpoints currently registered."}
                  />
                ) : (
                  dossier.currentTensions.map((tension, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-rose-200 text-xs">{tension.title}</h4>
                        <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold uppercase">
                          {tension.severity}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-300 leading-relaxed pt-0.5">
                        <InteractiveText text={tension.desc} contextEntity={dossier.id} onSelectConcept={onSelectConcept} />
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* ======================================================== */}
            {/* 10. STRATEGIC LOCATIONS */}
            {/* ======================================================== */}
            {activeTab === 'locations' && (
              <div className="space-y-2.5 animate-fade-in">
                <span className="block text-[10px] font-mono uppercase text-cyan-400 font-bold">TACTICAL NODES & BASES</span>
                {(dossier.strategicLocations?.isAvailable === false || !Array.isArray(dossier.strategicLocations) || dossier.strategicLocations.length === 0) ? (
                  <DataNotAvailable
                    section="STRATEGIC MILITARY BASES & NODES"
                    explanation={dossier.strategicLocations?.explanation || "Tactical military installations and strategic infrastructure nodes are not cataloged for this sovereign entity."}
                  />
                ) : (
                  dossier.strategicLocations.map((loc, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => onSelectLocation && onSelectLocation(loc)}
                      className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 transition-all cursor-pointer space-y-1 group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors text-xs">{loc.name}</span>
                        <span className="text-[9px] font-mono text-cyan-400">{loc.coords}</span>
                      </div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase">{loc.type}</div>
                      <div className="text-[11px] text-slate-300 mt-1">
                        <InteractiveText text={loc.significance} contextEntity={dossier.id} onSelectConcept={onSelectConcept} />
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* ======================================================== */}
            {/* 11. KEY EVENTS */}
            {/* ======================================================== */}
            {activeTab === 'events' && (
              <div className="space-y-2.5 animate-fade-in">
                <span className="block text-[10px] font-mono uppercase text-cyan-400 font-bold">CRITICAL HISTORICAL & MODERN TURNING POINTS</span>
                {(dossier.keyEvents?.isAvailable === false || !Array.isArray(dossier.keyEvents) || dossier.keyEvents.length === 0) ? (
                  <DataNotAvailable
                    section="HISTORICAL & DIPLOMATIC TURNING POINTS"
                    explanation={dossier.keyEvents?.explanation || "Key historical events and diplomatic milestones are currently under compilation."}
                  />
                ) : (
                  dossier.keyEvents.map((ev, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => onSelectEvent && onSelectEvent(ev)}
                      className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 transition-all cursor-pointer flex items-center justify-between group"
                    >
                      <div>
                        <h4 className="font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors text-xs">{ev.title}</h4>
                        <span className="text-[10px] font-mono text-cyan-400">{ev.category}</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">{ev.date}</span>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* ======================================================== */}
            {/* 12. INDIA IMPACT */}
            {/* ======================================================== */}
            {activeTab === 'india' && (
              <div className="space-y-3 animate-fade-in">
                {dossier.indiaImpact?.headline && (
                  <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/40">
                    <span className="block text-[9px] font-mono uppercase text-cyan-400 font-bold">STRATEGIC SIGNIFICANCE TO INDIA</span>
                    <div className="text-xs font-semibold text-slate-100 mt-1">
                      <InteractiveText text={dossier.indiaImpact.headline} contextEntity={dossier.id} onSelectConcept={onSelectConcept} />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  {(!dossier.indiaImpact?.points || dossier.indiaImpact.points.length === 0 || dossier.indiaImpact?.isAvailable === false) ? (
                    <DataNotAvailable
                      section="INDIA STRATEGIC SIGNIFICANCE"
                      explanation={dossier.indiaImpact?.explanation || "Dedicated bilateral strategic analysis between India and this nation is currently under compilation."}
                    />
                  ) : (
                    dossier.indiaImpact.points.map((pt, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                        <h4 className="font-semibold text-cyan-300 text-xs">{pt.title}</h4>
                        <div className="text-[11px] text-slate-300 leading-relaxed">
                          <InteractiveText text={pt.desc} contextEntity={dossier.id} onSelectConcept={onSelectConcept} />
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

          </div>
        )}
      </div>
    </div>
  );
}
