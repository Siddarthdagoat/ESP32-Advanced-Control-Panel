import React from 'react';
import { X, Keyboard } from 'lucide-react';

const SHORTCUTS = [
  { key: '/', desc: 'Open Global Search & Navigation' },
  { key: 'ESC', desc: 'Deselect / Close active intelligence panel' },
  { key: 'SPACE', desc: 'Pause / Resume globe auto-rotation' },
  { key: 'C', desc: 'Open Geopolitical Causal Chains' },
  { key: 'V', desc: 'Open Geopolitical Vocabulary & Concepts' },
  { key: 'L', desc: 'Toggle Live Global Intelligence Feed & What Changed' },
  { key: 'T', desc: 'Toggle TENSIONS layer' },
  { key: 'R', desc: 'Toggle RELATIONS layer' },
  { key: 'M', desc: 'Toggle MILITARY layer' },
  { key: 'S', desc: 'Toggle STRATEGIC layer' },
  { key: 'W', desc: 'Toggle Docked Split Workstation Mode' },
  { key: '1', desc: 'Toggle EVENTS layer' },
  { key: '2', desc: 'Toggle TRADE routes' },
  { key: '3', desc: 'Toggle MARITIME corridors' },
  { key: '4', desc: 'Toggle OSINT SENSORS (AIS, ADS-B, FIRMS)' },
  { key: 'H / ?', desc: 'Open / Close this shortcuts guide' }
];

export default function KeyboardShortcutsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity" 
      />

      <div className="relative w-full max-w-md glass-panel-elevated rounded-2xl border border-white/15 p-5 shadow-2xl animate-fade-in z-10">
        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
          <div className="flex items-center gap-2">
            <Keyboard className="w-4 h-4 text-cyan-400" />
            <h3 className="text-sm font-mono font-bold text-white tracking-wider">
              OPERATIONAL KEYBOARD SHORTCUTS
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-2 max-h-[60vh] overflow-y-auto">
          {SHORTCUTS.map((s, idx) => (
            <div 
              key={idx}
              className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5 text-xs font-mono"
            >
              <span className="text-slate-300">{s.desc}</span>
              <kbd className="px-2 py-1 rounded bg-white/10 text-cyan-300 border border-white/15 font-bold shadow-xs">
                {s.key}
              </kbd>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-3 border-t border-white/10 text-center text-[10px] font-mono text-slate-500">
          GEOINTEL TERMINAL SYSTEM • ALL COMMANDS OPERATIONAL
        </div>
      </div>
    </div>
  );
}
