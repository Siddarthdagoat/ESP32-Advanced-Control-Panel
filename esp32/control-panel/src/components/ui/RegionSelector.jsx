import React from 'react';
import { Compass, X } from 'lucide-react';
import { GLOBAL_REGIONS } from '../../data/geointelData';

export default function RegionSelector({
  selectedRegion,
  onSelectRegion,
  onClose
}) {
  return (
    <div className="fixed top-20 left-6 z-20 pointer-events-auto flex flex-col gap-3 animate-fade-in max-w-xs">
      {/* Horizontal / Wrap Region Buttons */}
      <div className="glass-panel p-2 rounded-2xl border border-white/10 flex flex-wrap gap-1 shadow-2xl">
        <div className="w-full flex items-center justify-between px-2 py-1 mb-1 border-b border-white/5">
          <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-cyan-400 tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>GLOBAL THEATERS</span>
          </div>
          {onClose && (
            <button 
              onClick={onClose}
              className="text-slate-500 hover:text-white p-0.5 cursor-pointer"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>

        {GLOBAL_REGIONS.filter(r => r.id !== 'world').map(region => {
          const isSelected = selectedRegion?.id === region.id;
          return (
            <button
              key={region.id}
              onClick={() => onSelectRegion(region)}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-semibold transition-all cursor-pointer ${
                isSelected
                  ? 'bg-cyan-500 text-black shadow-cyan-500/20 shadow'
                  : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {region.name}
            </button>
          );
        })}
      </div>

      {/* Selected Region Detailed Card */}
      {selectedRegion && selectedRegion.id !== 'world' && (
        <div className="glass-panel-elevated p-4 rounded-2xl border border-cyan-500/30 shadow-2xl animate-fade-in">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold text-white font-display uppercase tracking-wider">
              {selectedRegion.name}
            </h3>
            <span className="text-[9px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
              THEATER INTEL
            </span>
          </div>

          <p className="text-[11px] text-slate-300 mb-3 leading-relaxed">
            {selectedRegion.brief}
          </p>

          {/* Regional Statistics */}
          <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
            <div className="p-2 rounded bg-rose-500/10 border border-rose-500/20 flex items-center justify-between">
              <span className="text-rose-300">ACTIVE EVENTS</span>
              <span className="font-bold text-white text-xs">{selectedRegion.events}</span>
            </div>
            <div className="p-2 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-between">
              <span className="text-blue-300">DIPLOMATIC</span>
              <span className="font-bold text-white text-xs">{selectedRegion.diplomatic}</span>
            </div>
            <div className="p-2 rounded bg-purple-500/10 border border-purple-500/20 flex items-center justify-between">
              <span className="text-purple-300">MILITARY</span>
              <span className="font-bold text-white text-xs">{selectedRegion.military}</span>
            </div>
            <div className="p-2 rounded bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-between">
              <span className="text-cyan-300">STRATEGIC</span>
              <span className="font-bold text-white text-xs">{selectedRegion.strategic}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
