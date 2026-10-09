import React, { useState, useMemo } from 'react';
import { 
  X, 
  Search, 
  ShieldAlert, 
  FileText, 
  MapPin, 
  ExternalLink, 
  Radio, 
  Clock, 
  Eye, 
  Globe2, 
  AlertTriangle,
  Lock,
  Unlock,
  ChevronRight,
  ShieldCheck,
  Flame,
  Binary
} from 'lucide-react';
import { GEOPOLITICAL_CONSPIRACIES, CONSPIRACY_CATEGORIES } from '../../data/geointelConspiracies';

export default function ConspiracyIntelModal({
  isOpen,
  onClose,
  onSelectCountry,
  onFocusCoordinates
}) {
  const [selectedId, setSelectedId] = useState(GEOPOLITICAL_CONSPIRACIES[0]?.id || 'PROJECT_ICEWORM');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const filteredItems = useMemo(() => {
    return GEOPOLITICAL_CONSPIRACIES.filter(item => {
      const matchesCategory = selectedCategory === 'ALL' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        item.title.toLowerCase().includes(q) ||
        item.codename.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.geographicLocation?.country?.toLowerCase().includes(q) ||
        item.primaryActors?.some(a => a.name.toLowerCase().includes(q) || a.state.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const activeItem = useMemo(() => {
    return GEOPOLITICAL_CONSPIRACIES.find(c => c.id === selectedId) || filteredItems[0] || GEOPOLITICAL_CONSPIRACIES[0];
  }, [selectedId, filteredItems]);

  if (!isOpen) return null;

  const getVerificationBadge = (status) => {
    switch (status) {
      case 'DOCUMENTED_HISTORICAL_FACT':
        return {
          symbol: '■',
          label: 'DOCUMENTED HISTORICAL FACT',
          classes: 'bg-white text-black font-bold border-white'
        };
      case 'CONTESTED_INTELLIGENCE_ESTIMATE':
        return {
          symbol: '◆',
          label: 'CONTESTED INTELLIGENCE ESTIMATE',
          classes: 'bg-[#1A1A1A] text-white border-white/40'
        };
      case 'DEBUNKED_DISINFORMATION_THEORY':
        return {
          symbol: '○',
          label: 'WEAPONIZED DISINFORMATION',
          classes: 'bg-black text-[#888888] border-[#333333]'
        };
      default:
        return {
          symbol: '▲',
          label: status || 'CLASSIFIED',
          classes: 'bg-[#111111] text-[#E8E8E8] border-[#1A1A1A]'
        };
    }
  };

  const verBadge = getVerificationBadge(activeItem?.verificationStatus);

  return (
    <div className="fixed inset-0 z-50 pointer-events-auto flex items-center justify-center p-2 sm:p-6 font-sans">
      {/* Dark backdrop */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity" 
      />

      {/* Main Tactical Modal */}
      <div className="relative w-full max-w-6xl h-[92vh] max-h-[880px] bg-[#080808] border border-[#1A1A1A] rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10 animate-fade-in">
        
        {/* Top Header Bar */}
        <div className="px-5 py-3.5 bg-[#0D0D0D] border-b border-[#1A1A1A] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-white text-black flex items-center justify-center font-mono font-bold text-sm shadow-[0_0_12px_rgba(255,255,255,0.4)]">
              ◈
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm sm:text-base font-bold text-white font-display tracking-wider uppercase">
                  SHADOW INTEL · COVERT OPERATIONS & GEOPOLITICAL CONSPIRACIES
                </h2>
                <span className="hidden sm:inline px-1.5 py-0.5 rounded bg-white/10 text-[#E8E8E8] border border-white/20 text-[9px] font-mono font-bold">
                  DECLASSIFIED OSINT ARCHIVES
                </span>
              </div>
              <p className="text-[10px] font-mono text-[#888888] uppercase tracking-wider">
                DOCUMENTED COVERT PROGRAMS, SUBTERRANEAN BASES, HISTORICAL SABOTAGE & DEEP-STATE THEORIES
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#888888] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            title="Close Dossier (ESC)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Ribbon & Search Bar */}
        <div className="px-5 py-2.5 bg-[#000000] border-b border-[#1A1A1A] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
          {/* Category Pills */}
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-none py-0.5">
            {Object.values(CONSPIRACY_CATEGORIES).map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-2.5 py-1 rounded text-[10px] font-mono whitespace-nowrap transition-all cursor-pointer flex items-center gap-1 ${
                  selectedCategory === cat.id
                    ? 'bg-white text-black font-bold shadow-sm'
                    : 'text-[#888888] hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <span>{cat.symbol}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64 shrink-0">
            <Search className="w-3.5 h-3.5 text-[#888888] absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter by codename, actor, region..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1 bg-[#111111] border border-[#1A1A1A] focus:border-white/40 rounded text-xs text-white placeholder-[#555555] font-mono focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Master-Detail Content Split */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          
          {/* Left Master List */}
          <div className="w-full md:w-80 lg:w-96 border-r border-[#1A1A1A] bg-[#050505] overflow-y-auto divide-y divide-[#1A1A1A] shrink-0">
            {filteredItems.map(item => {
              const isSelected = activeItem?.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`p-3.5 transition-all cursor-pointer select-none group ${
                    isSelected ? 'bg-[#111111] border-l-2 border-l-white' : 'hover:bg-[#0D0D0D]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-white font-bold truncate">
                      {item.codename}
                    </span>
                    <span className="text-[9px] font-mono text-[#888888]">
                      {item.era}
                    </span>
                  </div>

                  <h3 className={`text-xs font-bold leading-snug truncate transition-colors ${
                    isSelected ? 'text-white' : 'text-[#E8E8E8] group-hover:text-white'
                  }`}>
                    {item.title}
                  </h3>

                  <p className="text-[10px] text-[#888888] line-clamp-2 mt-1 leading-relaxed">
                    {item.summary}
                  </p>

                  <div className="flex items-center justify-between mt-2 pt-1 border-t border-white/5 text-[9px] font-mono text-[#888888]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-2.5 h-2.5 text-[#888888]" />
                      {item.geographicLocation?.country || item.geographicLocation?.region}
                    </span>
                    <span className="uppercase text-[#BDBDBD]">
                      {item.category.replace(/_/g, ' ')}
                    </span>
                  </div>
                </div>
              );
            })}

            {filteredItems.length === 0 && (
              <div className="p-8 text-center text-xs font-mono text-[#888888]">
                No covert dossiers found matching search query.
              </div>
            )}
          </div>

          {/* Right Detail Dossier */}
          {activeItem && (
            <div className="flex-1 bg-[#080808] overflow-y-auto p-5 sm:p-7 space-y-5">
              
              {/* Dossier Banner */}
              <div className="p-4 rounded-xl bg-[#0D0D0D] border border-[#1A1A1A] space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  {/* Codename Badge */}
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white text-black">
                    CODENAME: {activeItem.codename}
                  </span>

                  {/* Classification Pill */}
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded border border-[#333333] text-[#E8E8E8] bg-[#111111] flex items-center gap-1">
                    <Lock className="w-2.5 h-2.5 text-[#888888]" />
                    {activeItem.classificationLevel}
                  </span>

                  {/* Verification Status Badge */}
                  <span className={`text-[9px] font-mono px-2 py-0.5 rounded border flex items-center gap-1 ${verBadge.classes}`}>
                    <span>{verBadge.symbol}</span>
                    <span>{verBadge.label}</span>
                  </span>

                  {/* Location Action */}
                  {activeItem.geographicLocation && onFocusCoordinates && (
                    <button
                      onClick={() => onFocusCoordinates(activeItem.geographicLocation.lat, activeItem.geographicLocation.lng)}
                      className="ml-auto px-2 py-0.5 rounded bg-[#111111] hover:bg-white hover:text-black border border-[#1A1A1A] hover:border-white text-[9.5px] font-mono text-white transition-all cursor-pointer flex items-center gap-1"
                      title="Fly Globe to Coordinates"
                    >
                      <Globe2 className="w-3 h-3" />
                      <span>LOCATE ON GLOBE</span>
                    </button>
                  )}
                </div>

                <h1 className="text-base sm:text-xl font-bold text-white font-display leading-snug">
                  {activeItem.title}
                </h1>

                <div className="flex items-center gap-2 text-[10.5px] font-mono text-[#888888]">
                  <span>THEATER: {activeItem.geographicLocation?.sector || activeItem.geographicLocation?.region}</span>
                  <span>·</span>
                  <span>COORDINATES: {activeItem.geographicLocation?.lat}°N, {activeItem.geographicLocation?.lng}°W</span>
                  <span>·</span>
                  <span>CHRONOLOGY: {activeItem.era}</span>
                </div>
              </div>

              {/* Executive Summary */}
              <div className="p-3.5 rounded-xl bg-[#111111] border border-[#1A1A1A] space-y-1">
                <span className="text-[10px] font-mono font-bold text-[#E8E8E8] uppercase tracking-wider block">
                  EXECUTIVE INTELLIGENCE BRIEFING
                </span>
                <p className="text-xs text-[#BDBDBD] leading-relaxed">
                  {activeItem.summary}
                </p>
              </div>

              {/* The Two Sides: Declassified Facts vs Conspiracy / Theory */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                
                {/* 1. Declassified Facts */}
                <div className="p-4 rounded-xl bg-[#0D0D0D] border border-white/20 space-y-2">
                  <div className="flex items-center gap-1.5 text-white font-mono text-xs font-bold uppercase tracking-wider">
                    <Unlock className="w-3.5 h-3.5 text-white" />
                    <span>DECLASSIFIED HISTORICAL FACTS</span>
                  </div>
                  <p className="text-xs text-[#E8E8E8] leading-relaxed">
                    {activeItem.declassifiedFacts}
                  </p>
                </div>

                {/* 2. The Conspiracy / Theory */}
                <div className="p-4 rounded-xl bg-[#0D0D0D] border border-white/20 space-y-2">
                  <div className="flex items-center gap-1.5 text-white font-mono text-xs font-bold uppercase tracking-wider">
                    <Eye className="w-3.5 h-3.5 text-white" />
                    <span>THE CONSPIRACY & COMPETING THEORIES</span>
                  </div>
                  <p className="text-xs text-[#BDBDBD] leading-relaxed">
                    {activeItem.theConspiracyOrTheory}
                  </p>
                </div>

              </div>

              {/* Primary Participating Actors & Agencies */}
              {activeItem.primaryActors && activeItem.primaryActors.length > 0 && (
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#888888] uppercase tracking-wider block mb-2">
                    PARTICIPATING INTELLIGENCE AGENCIES & KEY ACTORS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {activeItem.primaryActors.map((actor, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-[#111111] border border-[#1A1A1A]">
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="font-semibold text-white text-xs">{actor.name}</span>
                          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-white text-black font-bold">
                            {actor.state}
                          </span>
                        </div>
                        <p className="text-[10px] text-[#888888] leading-tight">
                          {actor.role}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Geopolitical Fallout & Strategic Consequences */}
              <div className="p-3.5 rounded-xl bg-[#111111] border border-[#1A1A1A] space-y-1.5">
                <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider block">
                  GEOPOLITICAL FALLOUT & LONG-TERM STRATEGIC IMPACT
                </span>
                <p className="text-xs text-[#BDBDBD] leading-relaxed">
                  {activeItem.geopoliticalFallout}
                </p>
              </div>

              {/* India Angle & National Strategic Implications */}
              {activeItem.indiaAngle && (
                <div className="p-3.5 rounded-xl bg-[#0D0D0D] border border-white/20 flex items-start gap-3">
                  <span className="text-2xl shrink-0 mt-0.5">🇮🇳</span>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider block">
                      NATIONAL STRATEGIC IMPLICATIONS · NEW DELHI PERSPECTIVE
                    </span>
                    <p className="text-xs text-[#BDBDBD] leading-relaxed">
                      {activeItem.indiaAngle}
                    </p>
                  </div>
                </div>
              )}

              {/* Authoritative Evidence & Source Declassifications */}
              {activeItem.evidenceDossier && activeItem.evidenceDossier.length > 0 && (
                <div className="p-3.5 rounded-xl bg-[#000000] border border-[#1A1A1A] space-y-2">
                  <span className="text-[10px] font-mono font-bold text-[#888888] uppercase tracking-wider block">
                    DECLASSIFIED EVIDENCE DOSSIER & AUTHORITATIVE CITATIONS
                  </span>
                  <div className="space-y-1.5">
                    {activeItem.evidenceDossier.map((ev, idx) => (
                      <div key={idx} className="text-xs font-mono text-[#E8E8E8] flex items-start gap-2">
                        <span className="text-[#888888] mt-0.5">◈</span>
                        <span>{ev}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
