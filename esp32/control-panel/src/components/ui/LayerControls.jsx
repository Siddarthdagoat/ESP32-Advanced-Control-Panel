import React, { useState } from 'react';
import { Layers, ChevronDown, ChevronUp, Eye, EyeOff } from 'lucide-react';

const LAYERS_DEF = [
  { id: 'events', label: 'EVENTS', symbol: '◆', color: '#FFFFFF', shortcut: '1', desc: 'Active geopolitical flashpoints' },
  { id: 'tensions', label: 'TENSIONS', symbol: '▲', color: '#E8E8E8', shortcut: 'T', desc: 'High alert military friction zones' },
  { id: 'military', label: 'MILITARY', symbol: '■', color: '#BDBDBD', shortcut: 'M', desc: 'Bases, defense pacts & radar sweeps' },
  { id: 'diplomacy', label: 'DIPLOMACY', symbol: '●', color: '#FFFFFF', shortcut: 'D', desc: 'Cooperation treaties & bilateral summits' },
  { id: 'strategic', label: 'STRATEGIC', symbol: '◈', color: '#FFFFFF', shortcut: 'S', desc: 'Chokepoints, straits & critical nodes' },
  { id: 'relations', label: 'RELATIONS', symbol: '―', color: '#888888', shortcut: 'R', desc: 'Great-circle alliance & rivalry arcs' },
  { id: 'trade', label: 'TRADE', symbol: '○', color: '#E8E8E8', shortcut: '2', desc: 'Critical supply lines & energy flow' },
  { id: 'maritime', label: 'MARITIME', symbol: '≋', color: '#B0B0B0', shortcut: '3', desc: 'International sea lanes of communication' },
];

export default function LayerControls({ activeLayers, onToggleLayer }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-20 pointer-events-auto">
      <div className="rounded-2xl border border-[#1A1A1A] bg-[#080808]/95 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-300 max-w-[260px]">
        {/* Header Toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full px-4 py-2.5 flex items-center justify-between gap-3 text-xs font-mono font-semibold text-[#E8E8E8] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-white" />
            <span>INTELLIGENCE LAYERS</span>
          </div>
          {expanded ? (
            <ChevronDown className="w-3.5 h-3.5 text-[#888888]" />
          ) : (
            <ChevronUp className="w-3.5 h-3.5 text-[#888888]" />
          )}
        </button>

        {/* Collapsible Layer List */}
        {expanded && (
          <div className="p-2 pt-0 space-y-1 border-t border-[#1A1A1A] animate-fade-in max-h-[300px] overflow-y-auto">
            {LAYERS_DEF.map(layer => {
              const isActive = activeLayers[layer.id] !== false;
              return (
                <button
                  key={layer.id}
                  onClick={() => onToggleLayer(layer.id)}
                  className={`w-full px-2.5 py-1.5 rounded-lg flex items-center justify-between text-xs font-mono transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white/10 text-white border border-white/20'
                      : 'text-[#888888] hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                  title={layer.desc}
                >
                  <div className="flex items-center gap-2.5">
                    <span 
                      className="text-xs font-bold leading-none select-none" 
                      style={{ color: layer.color }}
                    >
                      {layer.symbol}
                    </span>
                    <span className="tracking-wider">{layer.label}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-[#888888]">{layer.shortcut}</span>
                    {isActive ? (
                      <Eye className="w-3 h-3 text-white" />
                    ) : (
                      <EyeOff className="w-3 h-3 text-[#555555]" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
