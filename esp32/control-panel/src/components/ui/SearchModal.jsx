import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, BookOpen } from 'lucide-react';
import { COUNTRIES, GEOPOLITICAL_EVENTS, STRATEGIC_LOCATIONS } from '../../data/geointelData';
import { OCEANS, SEAS, CHOKEPOINTS, PORTS } from '../../data/geointelMaritime';
import { searchGeopoliticalTerms } from '../../data/geopoliticalTerms';
import { GEOPOLITICAL_CONSPIRACIES } from '../../data/geointelConspiracies';
import { WORLD_HISTORY_EVENTS } from '../../data/history/worldHistoryEvents';
import { WARGAME_SCENARIOS } from '../../data/geointelScenarios';
import { STRATEGIC_FLASHPOINTS } from '../../data/geointelFlashpoints';

export default function SearchModal({
  isOpen,
  onClose,
  onSelectCountry,
  onSelectEvent,
  onSelectLocation,
  onSelectMaritime,
  onSelectConcept,
  onSelectConspiracy,
  onSelectHistory,
  onSelectWargame,
  onSelectFlashpoint
}) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Aggregate search results
  const q = query.trim().toLowerCase();

  // Match Geopolitical Concepts & Specialized Terms
  const matchedTerms = searchGeopoliticalTerms(q, 4).map(t => ({
    type: 'concept',
    data: t,
    title: t.name,
    sub: `${t.category} • ${t.shortDefinition.slice(0, 75)}…`,
    symbol: '📖'
  }));

  const matchedCountries = COUNTRIES.filter(c => 
    !q || c.name.toLowerCase().includes(q) || c.officialName.toLowerCase().includes(q) || c.region.toLowerCase().includes(q)
  ).slice(0, 4).map(c => ({ type: 'country', data: c, title: c.name, sub: `${c.region} • ${c.capital}`, flag: c.flag }));

  // Match maritime entities (Oceans, Seas, Chokepoints, Ports)
  const allMaritime = [
    ...Object.values(OCEANS),
    ...Object.values(SEAS),
    ...Object.values(CHOKEPOINTS),
    ...Object.values(PORTS)
  ];
  const matchedMaritime = allMaritime.filter(m =>
    !q || m.name.toLowerCase().includes(q) || (m.category && m.category.toLowerCase().includes(q)) || (m.country && m.country.toLowerCase().includes(q))
  ).slice(0, 3).map(m => ({ 
    type: 'maritime', 
    data: m, 
    title: m.name, 
    sub: m.category || (m.country ? `${m.country} • ${m.type}` : m.type), 
    symbol: m.symbol || (m.type?.includes('PORT') ? '⚓' : '🌊') 
  }));

  const matchedEvents = GEOPOLITICAL_EVENTS.filter(e => 
    !q || e.title?.toLowerCase().includes(q) || e.sector?.toLowerCase().includes(q) || e.whatHappened?.toLowerCase().includes(q) || e.regionName?.toLowerCase().includes(q)
  ).slice(0, 4).map(e => ({ type: 'event', data: e, title: e.title, sub: e.sector || e.regionName, color: e.color }));

  const matchedLocations = STRATEGIC_LOCATIONS.filter(l => 
    !q || l.name.toLowerCase().includes(q) || l.category.toLowerCase().includes(q)
  ).slice(0, 2).map(l => ({ type: 'location', data: l, title: l.name, sub: l.category }));

  const matchedConspiracies = GEOPOLITICAL_CONSPIRACIES.filter(c =>
    !q || c.title?.toLowerCase().includes(q) || c.codename?.toLowerCase().includes(q) || c.summary?.toLowerCase().includes(q)
  ).slice(0, 3).map(c => ({
    type: 'conspiracy',
    data: c,
    title: `${c.codename}: ${c.title}`,
    sub: `${c.category.replace(/_/g, ' ')} • ${c.era}`,
    symbol: '◈'
  }));

  const matchedHistory = WORLD_HISTORY_EVENTS.filter(h =>
    !q || h.title?.toLowerCase().includes(q) || h.year?.toLowerCase().includes(q) || h.whatHappened?.toLowerCase().includes(q) || h.locationName?.toLowerCase().includes(q)
  ).slice(0, 3).map(h => ({
    type: 'history',
    data: h,
    title: `${h.year}: ${h.title}`,
    sub: `${h.periodLabel} • ${h.locationName}`,
    symbol: '📜'
  }));

  const matchedWargames = WARGAME_SCENARIOS.filter(w =>
    !q || w.title?.toLowerCase().includes(q) || w.theater?.toLowerCase().includes(q) || w.summary?.toLowerCase().includes(q) || w.code?.toLowerCase().includes(q)
  ).slice(0, 2).map(w => ({
    type: 'wargame',
    data: w,
    title: `${w.code}: ${w.title}`,
    sub: `${w.threatLevel} • ${w.theater}`,
    symbol: '🛡️'
  }));

  const matchedFlashpoints = STRATEGIC_FLASHPOINTS.filter(f =>
    !q || f.name?.toLowerCase().includes(f) || f.region?.toLowerCase().includes(q) || f.overview?.toLowerCase().includes(q)
  ).slice(0, 2).map(f => ({
    type: 'flashpoint',
    data: f,
    title: f.name,
    sub: `${f.defconLevel.split(' ')[0]} • ${f.region}`,
    symbol: '🎯'
  }));

  // Prioritize concepts, history, shadow intel, wargames, flashpoints
  const allResults = [
    ...matchedTerms, 
    ...matchedWargames, 
    ...matchedFlashpoints, 
    ...matchedHistory, 
    ...matchedConspiracies, 
    ...matchedCountries, 
    ...matchedMaritime, 
    ...matchedEvents, 
    ...matchedLocations
  ];

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(allResults.length, 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + allResults.length) % Math.max(allResults.length, 1));
    } else if (e.key === 'Enter' && allResults[selectedIndex]) {
      handleSelect(allResults[selectedIndex]);
    }
  };

  const handleSelect = (item) => {
    if (item.type === 'concept' && onSelectConcept) onSelectConcept(item.data.id);
    else if (item.type === 'wargame' && onSelectWargame) onSelectWargame(item.data);
    else if (item.type === 'flashpoint' && onSelectFlashpoint) onSelectFlashpoint(item.data);
    else if (item.type === 'history' && onSelectHistory) onSelectHistory(item.data);
    else if (item.type === 'conspiracy' && onSelectConspiracy) onSelectConspiracy(item.data);
    else if (item.type === 'country') onSelectCountry(item.data);
    else if (item.type === 'maritime' && onSelectMaritime) onSelectMaritime(item.data);
    else if (item.type === 'event') onSelectEvent(item.data);
    else if (item.type === 'location') onSelectLocation(item.data);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 pointer-events-auto font-sans">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity" 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl glass-panel-elevated rounded-2xl border border-white/15 shadow-2xl overflow-hidden animate-fade-in z-10">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-white/10 flex items-center gap-3">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search concepts (NATO, Nuclear Triad...), countries, straits..."
            className="w-full bg-transparent text-sm font-mono text-white placeholder-slate-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 space-y-1">
          {allResults.length === 0 ? (
            <div className="p-8 text-center text-xs font-mono text-slate-500">
              No geopolitical intelligence entities found for "{query}"
            </div>
          ) : (
            allResults.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={`${item.type}-${item.title}-${idx}`}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`p-2.5 rounded-xl flex items-center justify-between transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-cyan-500/15 border border-cyan-500/30 text-white'
                      : 'hover:bg-white/5 border border-transparent text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {item.type === 'country' && (
                      <span className="text-xl shrink-0">{item.flag}</span>
                    )}
                    {item.type === 'concept' && (
                      <span className="text-lg shrink-0">📖</span>
                    )}
                    {item.type === 'event' && (
                      <span 
                        className="w-2.5 h-2.5 rounded-full shrink-0" 
                        style={{ backgroundColor: item.color || '#ef4444' }}
                      />
                    )}
                    {item.type === 'location' && (
                      <span className="w-2 h-2 rounded-sm bg-cyan-400 rotate-45 shrink-0" />
                    )}
                    {item.type === 'maritime' && (
                      <span className="text-lg shrink-0">{item.symbol || '🌊'}</span>
                    )}

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-semibold text-white truncate">
                          {item.title}
                        </span>
                        <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded uppercase shrink-0 ${
                          item.type === 'concept'
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold'
                            : 'bg-white/10 text-slate-400'
                        }`}>
                          {item.type}
                        </span>
                      </div>
                      <p className="text-[10px] font-mono text-slate-400 mt-0.5 truncate">
                        {item.sub}
                      </p>
                    </div>
                  </div>

                  <ArrowRight className={`w-3.5 h-3.5 shrink-0 ml-2 transition-transform ${isSelected ? 'translate-x-1 text-cyan-400' : 'text-slate-600'}`} />
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="p-3 border-t border-white/5 bg-white/2 flex items-center justify-between text-[10px] font-mono text-slate-500 px-4">
          <div className="flex items-center gap-3">
            <span><kbd className="px-1 py-0.5 rounded bg-white/10 text-slate-300">↑↓</kbd> Navigate</span>
            <span><kbd className="px-1 py-0.5 rounded bg-white/10 text-slate-300">Enter</kbd> Select</span>
            <span><kbd className="px-1 py-0.5 rounded bg-white/10 text-slate-300">Esc</kbd> Close</span>
          </div>
          <span>GEOINTEL DIRECTORY</span>
        </div>

      </div>
    </div>
  );
}
