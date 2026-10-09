import React from 'react';
import { RotateCw, ZoomIn, MousePointerClick } from 'lucide-react';

export default function InteractionHints({ visible, onDismiss }) {
  if (!visible) return null;

  return (
    <div 
      onClick={onDismiss}
      className="fixed bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 pointer-events-auto cursor-pointer animate-fade-in transition-all duration-700 ease-out"
    >
      <div className="flex items-center gap-4 sm:gap-6 px-4 sm:px-6 py-2 rounded-full glass-panel border border-white/10 hover:border-cyan-500/30 text-[10px] sm:text-xs font-mono tracking-widest text-slate-400 hover:text-slate-200 shadow-2xl backdrop-blur-md group">
        <div className="flex items-center gap-1.5">
          <RotateCw className="w-3 h-3 text-cyan-400 group-hover:rotate-180 transition-transform duration-500" />
          <span>DRAG TO ROTATE</span>
        </div>
        <span className="text-white/20">•</span>
        <div className="flex items-center gap-1.5">
          <ZoomIn className="w-3 h-3 text-cyan-400" />
          <span>SCROLL TO EXPLORE</span>
        </div>
        <span className="text-white/20">•</span>
        <div className="flex items-center gap-1.5">
          <MousePointerClick className="w-3 h-3 text-cyan-400" />
          <span>CLICK TO INVESTIGATE</span>
        </div>
      </div>
    </div>
  );
}
