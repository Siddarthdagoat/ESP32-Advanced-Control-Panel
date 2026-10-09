import React, { useState } from 'react';
import { Layers, ChevronUp, ChevronDown, Info } from 'lucide-react';

export default function IntelligenceLegend() {
  const [isOpen, setIsOpen] = useState(false);

  const legendItems = [
    {
      label: 'Luminous Particle Land',
      symbol: '●',
      textColor: 'text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]',
      desc: 'Dense sampled continental landmass points with sovereign coastlines'
    },
    {
      label: 'Deep Oceanic Basins',
      symbol: '■',
      textColor: 'text-[#333333]',
      desc: 'Pitch-black & charcoal marine surfaces with interactive dossiers'
    },
    {
      label: 'Selected Country',
      symbol: '■',
      textColor: 'text-white border border-white',
      desc: 'Active intelligence subject with elevated brilliant white border'
    },
    {
      label: 'Immediate Neighbors',
      symbol: '■',
      textColor: 'text-[#888888]',
      desc: 'Terrestrial & strategic maritime bordering nations'
    },
    {
      label: 'Under Cursor (Hover)',
      symbol: '□',
      textColor: 'text-white font-bold',
      desc: 'Real-time raycast hit detection polygon highlight'
    },
    {
      label: 'Flash / Critical Event',
      symbol: '◆',
      textColor: 'text-white animate-pulse',
      desc: 'Active kinetic crisis or high-priority intelligence alert'
    },
    {
      label: 'Strategic Chokepoint',
      symbol: '◈',
      textColor: 'text-white',
      desc: 'Key canal, strait, or naval transit bottleneck (e.g., Hormuz, Malacca)'
    },
    {
      label: 'Strategic Seaport',
      symbol: '○',
      textColor: 'text-[#E8E8E8]',
      desc: 'Naval base, transshipment mega-hub, or energy export terminal'
    },
    {
      label: 'Bilateral Network Arcs',
      lineStyle: 'w-4 h-0.5 bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)] rounded',
      desc: 'Diplomatic & defense corridors with traveling white photon flow'
    },
    {
      label: 'Maritime Shipping Routes',
      lineStyle: 'w-4 h-0.5 border-t border-dashed border-[#B0B0B0]',
      desc: 'Documented sea lines of communication with luminous waypoint nodes'
    }
  ];

  return (
    <div className="fixed bottom-4 left-4 z-30 font-sans select-none">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#080808]/95 hover:bg-[#111111] border border-[#1A1A1A] hover:border-white/30 text-[#888888] hover:text-white backdrop-blur-md shadow-lg text-xs font-mono transition-all group cursor-pointer"
        >
          <Layers className="w-3.5 h-3.5 text-white group-hover:rotate-12 transition-transform" />
          <span className="font-semibold tracking-wider text-white">TACTICAL LEGEND</span>
          <ChevronUp className="w-3.5 h-3.5 text-[#888888]" />
        </button>
      ) : (
        <div className="w-80 rounded-xl bg-[#080808]/98 border border-[#1A1A1A] backdrop-blur-2xl shadow-2xl p-3.5 space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-[#1A1A1A]">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-white" />
              <span className="font-mono text-xs font-bold text-white tracking-wider uppercase">
                Tactical Map Key · Monochrome
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/10 rounded text-[#888888] hover:text-white transition-colors cursor-pointer"
              title="Collapse Legend"
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-2 text-xs">
            {legendItems.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <div className="mt-0.5 flex items-center justify-center shrink-0 w-4 h-4">
                  {item.symbol ? (
                    <span className={`font-bold text-sm leading-none ${item.textColor}`}>{item.symbol}</span>
                  ) : item.lineStyle ? (
                    <div className={item.lineStyle} />
                  ) : null}
                </div>
                <div className="flex-1">
                  <div className="text-[11px] font-semibold text-white leading-tight">
                    {item.label}
                  </div>
                  <div className="text-[10px] text-[#888888] leading-tight mt-0.5">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-[#1A1A1A] flex items-center gap-1.5 text-[9px] font-mono text-[#888888]">
            <Info className="w-3 h-3 text-white shrink-0" />
            <span>Click any polygon or marker on the globe for in-depth intelligence.</span>
          </div>
        </div>
      )}
    </div>
  );
}
