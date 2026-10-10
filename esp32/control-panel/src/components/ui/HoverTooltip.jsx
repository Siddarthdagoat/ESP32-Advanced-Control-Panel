import React from 'react';

export default function HoverTooltip({ hoverData }) {
  if (!hoverData || !hoverData.data) return null;

  const { type, data, x, y } = hoverData;

  // Offset slightly from cursor to avoid covering point
  const style = {
    top: `${y + 14}px`,
    left: `${x + 14}px`,
    transform: 'translate(0, 0)'
  };

  return (
    <div
      style={style}
      className="fixed z-40 pointer-events-none animate-fade-in transition-all duration-75"
    >
      <div className="glass-panel-elevated px-3 py-2.5 rounded-xl border border-white/15 shadow-2xl backdrop-blur-md min-w-[170px] max-w-[240px]">
        {type === 'country' && (
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 pb-1 border-b border-white/10">
              <span className="text-base">{data.flag || '🌐'}</span>
              <div>
                <h4 className="text-xs font-mono font-bold text-white tracking-wider uppercase">
                  {data.name}
                </h4>
                <p className="text-[9px] font-mono text-cyan-400">
                  {data.region}
                </p>
              </div>
            </div>

            {data.capital && (
              <p className="text-[10px] font-mono text-slate-300">
                <span className="text-slate-400">Capital:</span> {data.capital}
              </p>
            )}

            {data.tagline && (
              <p className="text-[9px] text-slate-300 italic line-clamp-2 pt-0.5 border-t border-white/5">
                {data.tagline}
              </p>
            )}

            <div className="pt-0.5 flex items-center justify-between text-[9px] font-mono text-slate-400 border-t border-white/5">
              <span className="text-cyan-400/80">Click to open dossier</span>
            </div>
          </div>
        )}

        {type === 'event' && (
          <div className="space-y-1">
            <div className="flex items-center justify-between gap-1.5">
              <div className="flex items-center gap-1.5">
                <span 
                  className={`w-2 h-2 rounded-full ${data.priority === 'CRITICAL' ? 'animate-ping' : ''}`}
                  style={{ backgroundColor: data.color || '#FF3030' }}
                />
                <span 
                  className="text-[9px] font-mono font-bold tracking-wider uppercase"
                  style={{ color: data.color || '#FF3030' }}
                >
                  {data.priority || 'FLASH'} INTEL
                </span>
              </div>
              {data.status && (
                <span className="text-[8.5px] font-mono px-1.5 py-0.2 rounded bg-white/10 text-slate-300">
                  {data.status}
                </span>
              )}
            </div>
            <h4 className="text-xs font-bold text-white font-display tracking-wide line-clamp-2">
              {data.title}
            </h4>
            <p className="text-[10px] font-mono text-cyan-400">
              {data.sector || data.regionName}
            </p>
            <div className="pt-1 flex items-center justify-between text-[8.5px] font-mono text-slate-400 border-t border-white/5">
              <span className="text-cyan-400/80">Click to open intelligence card</span>
            </div>
          </div>
        )}

        {type === 'cluster' && (
          <div className="space-y-1">
            <div className="flex items-center justify-between gap-1.5">
              <div className="flex items-center gap-1.5">
                <span 
                  className="w-2 h-2 rounded-full animate-ping"
                  style={{ backgroundColor: data.color || '#38bdf8' }}
                />
                <span className="text-[9px] font-mono font-bold tracking-wider uppercase text-cyan-400">
                  REGIONAL CLUSTER
                </span>
              </div>
              <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300">
                {data.count} INTEL
              </span>
            </div>
            <h4 className="text-xs font-bold text-white font-display uppercase tracking-wide">
              {data.name}
            </h4>
            <p className="text-[9.5px] font-mono text-slate-300">
              {data.criticalCount > 0 ? (
                <span className="text-red-400 font-semibold">{data.criticalCount} Critical Alert(s) · </span>
              ) : null}
              {data.highCount > 0 ? (
                <span className="text-orange-400 font-semibold">{data.highCount} High Priority · </span>
              ) : null}
              Click to zoom into theater
            </p>
          </div>
        )}

        {type === 'location' && (
          <div className="space-y-1">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-sm bg-cyan-400 rotate-45" />
              <span className="text-[9px] font-mono font-bold tracking-wider text-cyan-400 uppercase">
                STRATEGIC NODE
              </span>
            </div>
            <h4 className="text-xs font-bold text-white font-display uppercase tracking-wide">
              {data.name}
            </h4>
            <p className="text-[10px] font-mono text-slate-400">
              {data.category}
            </p>
          </div>
        )}

        {type === 'maritime' && (
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 pb-1 border-b border-white/10">
              <span className="text-base">{data.symbol || '🌊'}</span>
              <div>
                <h4 className="text-xs font-mono font-bold text-white tracking-wider uppercase">
                  {data.name}
                </h4>
                <p className="text-[9px] font-mono text-cyan-400 uppercase">
                  {data.category || data.type || 'MARITIME ENTITY'}
                </p>
              </div>
            </div>

            {data.tagline && (
              <p className="text-[9px] text-slate-300 italic line-clamp-2 pt-0.5">
                {data.tagline}
              </p>
            )}

            <div className="pt-0.5 flex items-center justify-between text-[9px] font-mono text-slate-400 border-t border-white/5">
              <span className="text-cyan-400/80">Click to explore maritime dossier</span>
            </div>
          </div>
        )}

        {type === 'capital' && (
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 pb-1 border-b border-white/10">
              <span className="text-amber-400 font-bold text-sm">●</span>
              <div>
                <h4 className="text-xs font-mono font-bold text-white tracking-wider uppercase">
                  {data.name}
                </h4>
                <p className="text-[9px] font-mono text-amber-300 uppercase">
                  {data.country} · CAPITAL
                </p>
              </div>
            </div>

            {data.tagline && (
              <p className="text-[9px] text-slate-300 line-clamp-2 pt-0.5">
                {data.tagline}
              </p>
            )}

            <div className="pt-0.5 flex items-center justify-between text-[9px] font-mono text-slate-400 border-t border-white/5">
              <span className="text-amber-400/90">Click to view capital dossier</span>
            </div>
          </div>
        )}

        {type === 'sensor' && (
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 pb-1 border-b border-white/10">
              <span className="text-white font-bold text-xs">◎</span>
              <div>
                <h4 className="text-xs font-mono font-bold text-white tracking-wider uppercase">
                  {data.name || data.callsign || data.theater}
                </h4>
                <p className="text-[9px] font-mono text-[#CCCCCC] uppercase truncate max-w-[190px]">
                  {data.type || data.aircraftType || data.anomalyType || 'OSINT SENSOR'}
                </p>
              </div>
            </div>
            {(data.flag || data.altitudeFt) && (
              <p className="text-[9px] font-mono text-slate-300">
                {data.flag ? `Flag: ${data.flag} · ${data.speedKts} kts` : `Altitude: ${data.altitudeFt?.toLocaleString()} FT`}
              </p>
            )}
            <div className="pt-0.5 flex items-center justify-between text-[9px] font-mono text-slate-400 border-t border-white/5">
              <span className="text-white">Click to inspect telemetry</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
