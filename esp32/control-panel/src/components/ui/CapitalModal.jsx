import React from 'react';
import { X, MapPin, Building, Landmark, Compass, Shield, Globe, Navigation, ArrowRight } from 'lucide-react';
import { ISO3_TO_ISO2 } from '../../data/geointelExtendedDossiers';

export default function CapitalModal({ capital, onClose, onCenterCapital, onOpenCountry }) {
  if (!capital) return null;

  const iso3 = String(capital.iso3 || '').toUpperCase();
  const iso2 = ISO3_TO_ISO2[iso3] || iso3.slice(0, 2).toLowerCase();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 pointer-events-auto font-sans">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl max-h-[90vh] bg-slate-950/95 border border-amber-500/40 rounded-2xl shadow-[0_0_50px_rgba(245,158,11,0.2)] flex flex-col overflow-hidden animate-fade-in z-10">
        
        {/* Header Bar */}
        <div className="p-5 pb-4 border-b border-white/10 bg-gradient-to-r from-amber-500/10 via-transparent to-transparent flex items-start justify-between relative">
          <div className="flex-1 pr-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping shrink-0" />
              <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold tracking-widest uppercase bg-amber-500/15 border border-amber-500/40 text-amber-300">
                NATIONAL CAPITAL & SOVEREIGN ADMINISTRATIVE SEAT
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-6 rounded border border-white/20 overflow-hidden bg-slate-900 shrink-0">
                {iso2 ? (
                  <img 
                    src={`https://flagcdn.com/w80/${iso2}.png`} 
                    alt={capital.country}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                ) : (
                  <span className="text-sm flex items-center justify-center h-full">🌐</span>
                )}
              </div>
              <div>
                <h2 className="text-2xl font-bold font-display uppercase tracking-wider text-white flex items-center gap-2">
                  <span className="text-amber-400">●</span> {capital.capital}
                </h2>
                <span className="text-xs font-mono text-slate-300 tracking-wide uppercase">
                  {capital.country} {capital.officialName && capital.officialName !== capital.country ? `(${capital.officialName})` : ''}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-4 overflow-y-auto flex-1 text-xs">
          
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center font-mono">
            <div>
              <span className="block text-[8px] text-slate-400 uppercase tracking-wider">ROLE</span>
              <span className="text-xs font-semibold text-amber-300 truncate block mt-0.5">Apex Government Seat</span>
            </div>
            <div>
              <span className="block text-[8px] text-slate-400 uppercase tracking-wider">COORDINATES</span>
              <span className="text-xs font-semibold text-slate-200 truncate block mt-0.5">
                {capital.coords ? `${capital.coords.lat?.toFixed(2)}°N, ${capital.coords.lng?.toFixed(2)}°E` : 'Sovereign Hub'}
              </span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="block text-[8px] text-slate-400 uppercase tracking-wider">SOVEREIGN STATE</span>
              <span className="text-xs font-semibold text-slate-200 truncate block mt-0.5">{capital.iso3 || 'SOVEREIGN'}</span>
            </div>
          </div>

          {/* 1. Administrative Role */}
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 space-y-1.5">
            <div className="flex items-center gap-2 text-cyan-400">
              <Building className="w-3.5 h-3.5" />
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase">ADMINISTRATIVE ROLE</span>
            </div>
            <p className="text-slate-200 text-xs leading-relaxed pl-5.5">
              {capital.role || `${capital.capital} serves as the primary administrative seat and executive command headquarters of ${capital.country}.`}
            </p>
          </div>

          {/* 2. Political Significance */}
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 space-y-1.5">
            <div className="flex items-center gap-2 text-purple-400">
              <Landmark className="w-3.5 h-3.5" />
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase">POLITICAL SIGNIFICANCE</span>
            </div>
            <p className="text-slate-200 text-xs leading-relaxed pl-5.5">
              {capital.politicalSignificance || `Houses the supreme legislative assembly, ministerial cabinets, apex judiciary, and diplomatic diplomatic missions for ${capital.country}.`}
            </p>
          </div>

          {/* 3. Geographic Location */}
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-400">
              <Compass className="w-3.5 h-3.5" />
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase">GEOGRAPHIC LOCATION</span>
            </div>
            <p className="text-slate-200 text-xs leading-relaxed pl-5.5">
              {capital.geographicLocation || `Geographic hub anchoring communication, national logistics, and regional transportation infrastructure.`}
            </p>
          </div>

          {/* 4. Strategic Significance */}
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-1.5">
            <div className="flex items-center gap-2 text-amber-400">
              <Shield className="w-3.5 h-3.5" />
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase">STRATEGIC SIGNIFICANCE</span>
            </div>
            <p className="text-slate-100 text-xs leading-relaxed pl-5.5">
              {capital.strategicSignificance || `Vital military command node, central communications nexus, and sovereign national emergency management center.`}
            </p>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-white/10 bg-black/40 flex items-center justify-between gap-3">
          {onOpenCountry && (
            <button
              onClick={() => {
                onOpenCountry(capital.iso3 || capital.country);
                onClose();
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-mono transition-all cursor-pointer"
            >
              <span>View Country Dossier</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}

          <button
            onClick={onClose}
            className="ml-auto px-4 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black text-xs font-mono font-bold transition-all cursor-pointer"
          >
            Acknowledge
          </button>
        </div>

      </div>
    </div>
  );
}
