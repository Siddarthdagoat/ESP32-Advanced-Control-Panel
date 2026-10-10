import React, { useState } from 'react';
import { Crosshair, ShieldAlert, ChevronRight, MapPin, Eye, X, Globe2, Radio } from 'lucide-react';
import { STRATEGIC_FLASHPOINTS } from '../../data/geointelFlashpoints';

export default function FlashpointFocusModal({
  isOpen = true,
  onClose,
  isDocked = false,
  onFlyToFlashpoint,
  selectedFlashpointId = 'FLASHPOINT_TAIWAN_STRAIT'
}) {
  const [selectedId, setSelectedId] = useState(selectedFlashpointId || 'FLASHPOINT_TAIWAN_STRAIT');

  const flashpoint = STRATEGIC_FLASHPOINTS.find(f => f.id === selectedId) || STRATEGIC_FLASHPOINTS[0];

  const handleSelect = (id) => {
    setSelectedId(id);
    const fp = STRATEGIC_FLASHPOINTS.find(f => f.id === id);
    if (fp && onFlyToFlashpoint) {
      onFlyToFlashpoint(fp);
    }
  };

  const content = (
    <div className={`flex flex-col h-full text-white font-mono ${isDocked ? 'p-4' : 'p-6'}`}>
      
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#222222]">
        <div className="flex items-center gap-2">
          <Crosshair className="w-4 h-4 text-white" />
          <span className="text-xs font-bold tracking-wider uppercase text-white">
            TACTICAL STRATEGIC FLASHPOINTS
          </span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-white text-black font-bold">
            HIGH-RES RECON
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

      {/* Flashpoint Selector List */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-3">
        {STRATEGIC_FLASHPOINTS.map(fp => {
          const isSelected = fp.id === flashpoint.id;
          return (
            <button
              key={fp.id}
              onClick={() => handleSelect(fp.id)}
              className={`p-2 rounded-xl border text-left transition-all cursor-pointer ${
                isSelected
                  ? 'bg-white text-black border-white font-bold shadow-md'
                  : 'bg-[#111111] text-[#999999] border-[#222222] hover:text-white hover:border-white/30'
              }`}
            >
              <div className="text-[8.5px] uppercase tracking-wider mb-0.5 opacity-80 truncate">
                {fp.defconLevel.split(' ')[0]}
              </div>
              <div className="text-[10.5px] leading-tight line-clamp-1">
                {fp.name}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Flashpoint Tactical Dossier */}
      <div className="flex-1 overflow-y-auto space-y-3.5 pr-1">
        
        {/* Main Banner */}
        <div className="p-4 rounded-xl bg-[#121212] border border-[#222222]">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div>
              <span className="text-sm font-bold text-white block">
                {flashpoint.name}
              </span>
              <span className="text-[10px] text-[#888888]">
                {flashpoint.region} · {flashpoint.coordinatesDetail}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] px-2 py-0.5 rounded bg-white text-black font-bold">
                {flashpoint.threatLevel}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#1C1C1C] border border-[#333333] text-[#CCCCCC]">
                {flashpoint.defconLevel}
              </span>
            </div>
          </div>

          <p className="text-xs text-[#B0B0B0] leading-relaxed">
            {flashpoint.overview}
          </p>

          <div className="mt-3 pt-3 border-t border-[#1F1F1F] flex flex-wrap gap-1.5 items-center">
            <span className="text-[10px] text-[#888888]">CLAIMANTS / COMBATANTS:</span>
            {flashpoint.keyClaimants.map((c, idx) => (
              <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-[#181818] border border-[#262626] text-white">
                ◈ {c}
              </span>
            ))}
          </div>
        </div>

        {/* Tactical Defense Layers & Fortifications */}
        <div className="p-4 rounded-xl bg-[#121212] border border-[#222222]">
          <div className="flex items-center gap-2 mb-3">
            <ShieldAlert className="w-3.5 h-3.5 text-white" />
            <span className="text-xs font-bold text-white tracking-wider">
              TACTICAL LAYERS & MILITARY FORTIFICATIONS
            </span>
          </div>

          <div className="space-y-2">
            {flashpoint.tacticalLayers.map((layer, idx) => (
              <div key={idx} className="p-2.5 rounded-lg bg-[#161616] border border-[#262626] text-xs">
                <span className="text-white font-bold block mb-0.5">■ {layer.name}</span>
                <span className="text-[#AAAAAA] text-[11px] leading-relaxed block">{layer.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tactical Significance */}
        <div className="p-3.5 rounded-xl bg-[#141414] border border-[#262626] text-xs space-y-1">
          <span className="text-white font-bold tracking-wider block text-[10px] uppercase">
            GEOPOLITICAL SIGNIFICANCE & CHOKEPOINT IMPACT:
          </span>
          <p className="text-[#B0B0B0] leading-relaxed text-[11px]">
            {flashpoint.tacticalSignificance}
          </p>
        </div>

      </div>

      {/* Fly to Flashpoint Button */}
      <div className="mt-3 pt-3 border-t border-[#222222] flex items-center justify-between">
        <div className="text-[10px] text-[#888888]">
          TARGET CAMERA: {flashpoint.lat}°N, {flashpoint.lng}°E
        </div>
        <button
          onClick={() => {
            if (onFlyToFlashpoint) onFlyToFlashpoint(flashpoint);
          }}
          className="px-4 py-2 rounded-lg bg-white text-black font-bold text-xs flex items-center gap-1.5 hover:bg-[#E0E0E0] transition-colors cursor-pointer shadow-lg"
        >
          <Crosshair className="w-3.5 h-3.5" />
          <span>TACTICAL ZOOM ON GLOBE</span>
        </button>
      </div>

    </div>
  );

  if (isDocked) {
    return content;
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[85vh] flex flex-col rounded-2xl bg-[#090909] border border-[#222222] shadow-2xl overflow-hidden">
        {content}
      </div>
    </div>
  );
}
