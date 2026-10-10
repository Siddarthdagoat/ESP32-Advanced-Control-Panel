import React, { useState, useEffect } from 'react';
import { Bookmark, Star, Trash2, Crosshair, AlertTriangle, ArrowUpRight, Plus, ExternalLink, X } from 'lucide-react';
import { STRATEGIC_FLASHPOINTS } from '../../data/geointelFlashpoints';

const DEFAULT_WATCHLIST_ITEMS = [
  {
    id: 'TWN',
    name: 'Taiwan Strait Theater',
    category: 'Sovereignty / Cross-Strait',
    threatLevel: 'CRITICAL',
    defcon: 'DEFCON 2',
    delta: '+18% Sortie Volume',
    coords: { lat: 24.2, lng: 120.2 },
    pinnedAt: 'Active Watch'
  },
  {
    id: 'FLASHPOINT_SUWALKI',
    name: 'Suwałki Gap Corridor',
    category: 'NATO Frontier',
    threatLevel: 'CRITICAL',
    defcon: 'DEFCON 2',
    delta: '+12% Electronic Jamming',
    coords: { lat: 54.25, lng: 23.3 },
    pinnedAt: 'Active Watch'
  },
  {
    id: 'FLASHPOINT_BAB_EL_MANDEB',
    name: 'Bab el-Mandeb / Red Sea Chokepoint',
    category: 'Maritime SLOC Interdiction',
    threatLevel: 'CRITICAL',
    defcon: 'DEFCON 2',
    delta: '+35% Cape Diversion',
    coords: { lat: 12.58, lng: 43.35 },
    pinnedAt: 'Active Watch'
  },
  {
    id: 'FLASHPOINT_HORMUZ',
    name: 'Strait of Hormuz',
    category: 'Strategic Hydrocarbon Artery',
    threatLevel: 'SEVERE',
    defcon: 'DEFCON 3',
    delta: '+8% Tanker Insurance',
    coords: { lat: 26.56, lng: 56.4 },
    pinnedAt: 'Active Watch'
  }
];

export default function CrisisWatchlist({
  isOpen = true,
  onClose,
  isDocked = false,
  onFlyToTarget,
  onSelectCountry
}) {
  const [watchlist, setWatchlist] = useState(() => {
    try {
      const saved = localStorage.getItem('geointel_watchlist');
      return saved ? JSON.parse(saved) : DEFAULT_WATCHLIST_ITEMS;
    } catch {
      return DEFAULT_WATCHLIST_ITEMS;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('geointel_watchlist', JSON.stringify(watchlist));
    } catch {
      // Ignore quota errors
    }
  }, [watchlist]);

  const handleRemove = (id) => {
    setWatchlist(prev => prev.filter(item => item.id !== id));
  };

  const handleResetDefaults = () => {
    setWatchlist(DEFAULT_WATCHLIST_ITEMS);
  };

  const content = (
    <div className={`flex flex-col h-full text-white font-mono ${isDocked ? 'p-4' : 'p-6'}`}>
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#222222]">
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-white fill-white" />
          <span className="text-xs font-bold tracking-wider uppercase text-white">
            CUSTOM CRISIS WATCHLIST
          </span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-[#CCCCCC] font-bold">
            {watchlist.length} MONITORED THEATERS
          </span>
        </div>

        {!isDocked && onClose && (
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#888888] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <div className="py-2 text-[11px] text-[#999999] leading-relaxed">
        Pinned high-volatility sovereign territories and tactical flashpoints. Track real-time DEFCON telemetry and jump directly to coordinates on the 3D globe.
      </div>

      {/* Watchlist Items */}
      <div className="flex-1 overflow-y-auto space-y-2.5 my-3 pr-1">
        {watchlist.length === 0 ? (
          <div className="p-8 text-center rounded-xl bg-[#111111] border border-[#222222] text-[#777777] text-xs">
            No theaters pinned. Pin countries or tactical flashpoints from dossiers.
            <div className="mt-3">
              <button
                onClick={handleResetDefaults}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[10px] font-bold cursor-pointer"
              >
                RESTORE DEFAULT WATCHLIST
              </button>
            </div>
          </div>
        ) : (
          watchlist.map(item => (
            <div
              key={item.id}
              className="p-3 rounded-xl bg-[#121212] border border-[#222222] hover:border-white/30 transition-all flex items-center justify-between gap-3 group"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-white truncate">
                    {item.name}
                  </span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-white text-black font-bold shrink-0">
                    {item.threatLevel}
                  </span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#1C1C1C] border border-[#333333] text-[#AAAAAA] shrink-0">
                    {item.defcon}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[10px] text-[#888888]">
                  <span>◈ {item.category}</span>
                  <span className="text-white font-bold">{item.delta}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1 shrink-0">
                <button
                  onClick={() => {
                    if (onFlyToTarget && item.coords) {
                      onFlyToTarget(item.coords, item.name);
                    } else if (onSelectCountry && item.id.length === 3) {
                      onSelectCountry(item.id);
                    }
                  }}
                  className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white text-white hover:text-black text-[10px] font-bold flex items-center gap-1 transition-all cursor-pointer"
                  title="Center Globe on Theater"
                >
                  <Crosshair className="w-3 h-3" />
                  <span>FLY</span>
                </button>

                <button
                  onClick={() => handleRemove(item.id)}
                  className="p-1.5 rounded-lg text-[#666666] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  title="Remove from Watchlist"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Quick Add Flashpoint Presets */}
      <div className="pt-3 border-t border-[#222222]">
        <span className="text-[10px] text-[#888888] block mb-2 font-bold uppercase tracking-wider">
          PIN FLASHPOINTS TO WATCHLIST:
        </span>
        <div className="flex flex-wrap gap-1.5">
          {STRATEGIC_FLASHPOINTS.slice(0, 5).map(fp => {
            const isAlreadyPinned = watchlist.some(w => w.id === fp.id);
            if (isAlreadyPinned) return null;
            return (
              <button
                key={fp.id}
                onClick={() => {
                  setWatchlist(prev => [
                    ...prev,
                    {
                      id: fp.id,
                      name: fp.name,
                      category: fp.type,
                      threatLevel: fp.threatLevel,
                      defcon: fp.defconLevel.split(' ')[0],
                      delta: 'Active Surveillance',
                      coords: { lat: fp.lat, lng: fp.lng },
                      pinnedAt: 'Custom'
                    }
                  ]);
                }}
                className="px-2 py-1 rounded bg-[#161616] hover:bg-white hover:text-black border border-[#282828] text-[9px] text-[#B0B0B0] flex items-center gap-1 transition-all cursor-pointer"
              >
                <Plus className="w-2.5 h-2.5" />
                <span>{fp.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  if (isDocked) {
    return content;
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl max-h-[85vh] flex flex-col rounded-2xl bg-[#0A0A0A] border border-[#222222] shadow-2xl overflow-hidden">
        {content}
      </div>
    </div>
  );
}
