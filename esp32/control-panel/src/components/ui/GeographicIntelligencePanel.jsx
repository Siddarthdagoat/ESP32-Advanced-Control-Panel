import React, { useState, useEffect } from 'react';
import { 
  X, Compass, Shield, ArrowRight, AlertTriangle, 
  MapPin, Anchor, Waves, Ship, Globe2, Radio, CheckCircle2, ChevronRight
} from 'lucide-react';
import { getMaritimeEntity } from '../../data/geointelMaritime.js';
import { getCountryDossier } from '../../data/geointelCountryDossiers.js';
import { ISO3_TO_ISO2 } from '../../data/geointelExtendedDossiers.js';
import InteractiveText from './InteractiveText';

export default function GeographicIntelligencePanel({
  entity,
  onClose,
  onSelectMaritimeEntity,
  onSelectCountry,
  onSelectConcept,
  onFocusCoordinates
}) {
  const [activeTab, setActiveTab] = useState('overview'); 
  // 'overview' | 'countries' | 'seas' | 'nodes' | 'security' | 'india' | 'sources'
  const [loadingState, setLoadingState] = useState('loading');

  const resolvedEntity = entity ? (getMaritimeEntity(entity.id) || entity) : null;

  useEffect(() => {
    if (!entity) return;
    setLoadingState('loading');
    const timer = setTimeout(() => {
      setLoadingState('ready');
    }, 160);
    return () => clearTimeout(timer);
  }, [entity?.id]);

  if (!resolvedEntity) return null;

  const connectedList = resolvedEntity.connectedCountries || 
    (resolvedEntity.geography?.littoralNations || []);

  const tabs = [
    { id: 'overview', label: 'OVERVIEW' },
    ...(connectedList.length > 0 ? [{ id: 'countries', label: `CONNECTED NATIONS (${connectedList.length})` }] : []),
    ...(resolvedEntity.geography?.marginalSeas || resolvedEntity.marginalSeas ? [{ id: 'seas', label: 'MARGINAL SEAS' }] : []),
    { id: 'nodes', label: 'CHOKEPOINTS & PORTS' },
    { id: 'security', label: 'SECURITY & STRATEGY' },
    { id: 'india', label: 'INDIA IMPACT' },
    { id: 'sources', label: 'SOURCES' }
  ];

  const getBadgeColor = (type) => {
    switch (type) {
      case 'OCEAN':
        return 'bg-white text-black font-bold border-white';
      case 'SEA':
        return 'bg-[#1A1A1A] text-white border-white/40';
      case 'STRAIT':
      case 'CANAL':
        return 'bg-[#111111] text-[#E8E8E8] border-white/30';
      case 'PORT':
      case 'SEAPORT':
        return 'bg-[#0D0D0D] text-[#E8E8E8] border-[#333333]';
      default:
        return 'bg-black text-[#888888] border-[#1A1A1A]';
    }
  };

  const entityTypeLabel = resolvedEntity.category || resolvedEntity.type || 'MARITIME ENTITY';
  const entityCoords = resolvedEntity.center || { lat: resolvedEntity.lat, lng: resolvedEntity.lng };

  // Hierarchy Navigation Resolution
  const parentOceanId = resolvedEntity.parentOcean;
  const parentSeaId = resolvedEntity.parentSea;
  const parentOceanEntity = parentOceanId ? getMaritimeEntity(parentOceanId) : null;
  const parentSeaEntity = parentSeaId ? getMaritimeEntity(parentSeaId) : null;

  const handleCountryClick = (countryCodeOrName) => {
    if (!onSelectCountry) return;
    const countryData = getCountryDossier(countryCodeOrName, { id: countryCodeOrName, name: countryCodeOrName });
    onSelectCountry(countryData);
  };

  return (
    <aside 
      aria-label="Geographic & Maritime Intelligence Dossier"
      className="fixed top-14 right-0 bottom-12 w-[520px] max-w-[94vw] bg-[#080808]/98 backdrop-blur-2xl border-l border-[#1A1A1A] z-40 flex flex-col shadow-2xl transition-all duration-300 animate-in slide-in-from-right text-[#BDBDBD]"
    >
      {/* Top Status Header */}
      <div className="flex items-center justify-between px-5 py-2.5 bg-[#000000] border-b border-[#1A1A1A] text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="font-mono text-white font-semibold tracking-wider">
            {loadingState === 'loading' ? 'SCANNING HYDROGRAPHIC DATA...' : 'MARITIME INTELLIGENCE READY'}
          </span>
          <span className="font-mono text-[#888888]">[{resolvedEntity.id}]</span>
        </div>
        <div className="flex items-center gap-2">
          {entityCoords && onFocusCoordinates && (
            <button
              onClick={() => onFocusCoordinates(entityCoords.lat, entityCoords.lng)}
              className="p-1 hover:bg-white/10 rounded text-[#888888] hover:text-white transition-colors cursor-pointer"
              title="Focus on Globe"
            >
              <Globe2 className="w-4 h-4" />
            </button>
          )}
          <button 
            onClick={onClose}
            className="p-1 hover:bg-white/10 rounded text-[#888888] hover:text-white transition-colors cursor-pointer"
            title="Close Panel"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Hierarchy Breadcrumb Bar */}
      <div className="px-5 py-1.5 bg-[#0D0D0D] border-b border-[#1A1A1A] flex items-center gap-1.5 text-[11px] font-mono overflow-x-auto scrollbar-none text-[#888888]">
        <span className="text-[#555555]">HIERARCHY:</span>
        {parentOceanEntity && (
          <>
            <button 
              onClick={() => onSelectMaritimeEntity && onSelectMaritimeEntity(parentOceanEntity)}
              className="text-[#E8E8E8] hover:text-white hover:underline cursor-pointer"
            >
              {parentOceanEntity.name}
            </button>
            <ChevronRight className="w-3 h-3 text-[#555555] shrink-0" />
          </>
        )}
        {parentSeaEntity && (
          <>
            <button 
              onClick={() => onSelectMaritimeEntity && onSelectMaritimeEntity(parentSeaEntity)}
              className="text-[#BDBDBD] hover:text-white hover:underline cursor-pointer"
            >
              {parentSeaEntity.name}
            </button>
            <ChevronRight className="w-3 h-3 text-[#555555] shrink-0" />
          </>
        )}
        <span className="text-white font-semibold truncate">{resolvedEntity.name}</span>
      </div>

      {/* Main Entity Banner */}
      <div className="px-5 pt-3.5 pb-3 border-b border-[#1A1A1A] bg-[#0A0A0A]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase font-semibold border ${getBadgeColor(resolvedEntity.type)}`}>
                {entityTypeLabel}
              </span>
              {resolvedEntity.type === 'OCEAN' && (
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 border border-white/20 text-white">
                  PRIMARY OCEANIC BASIN
                </span>
              )}
              {resolvedEntity.country && (
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#111111] border border-[#1A1A1A] text-[#BDBDBD]">
                  {resolvedEntity.country} {resolvedEntity.countryCode ? `(${resolvedEntity.countryCode})` : ''}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">{resolvedEntity.symbol || (resolvedEntity.type?.includes('PORT') ? '⚓' : '🌊')}</span>
              <h1 className="text-xl font-bold tracking-tight text-white font-display">
                {resolvedEntity.name}
              </h1>
            </div>
          </div>
          {entityCoords && (
            <div className="text-right font-mono text-[11px] text-[#888888] bg-[#111111] px-2.5 py-1.5 rounded border border-[#1A1A1A] shrink-0">
              <div className="text-white font-medium text-[9px] uppercase">COORDINATES</div>
              <div>{entityCoords.lat?.toFixed(2)}°, {entityCoords.lng?.toFixed(2)}°</div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Tabs Bar */}
      <div className="flex border-b border-[#1A1A1A] bg-[#000000] overflow-x-auto scrollbar-none px-2 shrink-0">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-2 text-xs font-mono tracking-wider border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === tab.id
                ? 'border-white text-white font-bold bg-white/10'
                : 'border-transparent text-[#888888] hover:text-white hover:bg-white/5'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content Container */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10">

        {/* 1. OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            {/* Primary Analysis Box */}
            <div className="p-3.5 rounded-lg bg-[#111111] border border-[#1A1A1A] text-xs leading-relaxed text-[#BDBDBD] space-y-2">
              <div className="text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                STRATEGIC OVERVIEW & GEOGRAPHIC EXTENT
              </div>
              <InteractiveText
                text={resolvedEntity.overview?.advanced || resolvedEntity.overview?.beginner || (typeof resolvedEntity.overview === 'string' ? resolvedEntity.overview : 'Maritime hydrographic and security assessment active.')}
                onSelectConcept={onSelectConcept}
              />
            </div>

            {/* Structured Ocean Metrics Grid */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              {resolvedEntity.geography?.area && (
                <div className="p-2.5 rounded bg-[#111111] border border-[#1A1A1A]">
                  <div className="text-[9px] font-mono text-[#888888] uppercase">SURFACE AREA</div>
                  <div className="font-semibold text-white mt-0.5">{resolvedEntity.geography.area}</div>
                </div>
              )}
              {resolvedEntity.geography?.depth && (
                <div className="p-2.5 rounded bg-[#111111] border border-[#1A1A1A]">
                  <div className="text-[9px] font-mono text-[#888888] uppercase">MAXIMUM / AVG DEPTH</div>
                  <div className="font-semibold text-white mt-0.5">{resolvedEntity.geography.depth}</div>
                </div>
              )}
              {resolvedEntity.geography?.deepestPoint && (
                <div className="p-2.5 rounded bg-[#111111] border border-[#1A1A1A] col-span-2">
                  <div className="text-[9px] font-mono text-[#888888] uppercase">DEEPEST POINT / TRENCH</div>
                  <div className="font-semibold text-white mt-0.5">{resolvedEntity.geography.deepestPoint}</div>
                </div>
              )}
              {resolvedEntity.geography?.extent && (
                <div className="p-2.5 rounded bg-[#111111] border border-[#1A1A1A] col-span-2">
                  <div className="text-[9px] font-mono text-[#888888] uppercase">GEOGRAPHIC EXTENT & BOUNDARIES</div>
                  <div className="text-[#E8E8E8] mt-0.5 leading-relaxed">{resolvedEntity.geography.extent}</div>
                </div>
              )}
              {resolvedEntity.geography?.width && (
                <div className="p-2.5 rounded bg-[#111111] border border-[#1A1A1A]">
                  <div className="text-[9px] font-mono text-[#888888] uppercase">FAIRWAY WIDTH</div>
                  <div className="font-semibold text-white mt-0.5">{resolvedEntity.geography.width}</div>
                </div>
              )}
              {resolvedEntity.geography?.length && (
                <div className="p-2.5 rounded bg-[#111111] border border-[#1A1A1A]">
                  <div className="text-[9px] font-mono text-[#888888] uppercase">CHANNEL LENGTH</div>
                  <div className="font-semibold text-white mt-0.5">{resolvedEntity.geography.length}</div>
                </div>
              )}
              {resolvedEntity.strategicRole && (
                <div className="p-2.5 rounded bg-[#111111] border border-[#1A1A1A] col-span-2">
                  <div className="text-[9px] font-mono text-[#888888] uppercase">STRATEGIC ROLE</div>
                  <div className="text-[#E8E8E8] mt-0.5">{resolvedEntity.strategicRole}</div>
                </div>
              )}
            </div>

            {/* Strategic Energy & Cargo Transit */}
            {resolvedEntity.strategicSignificance && typeof resolvedEntity.strategicSignificance === 'object' && (
              <div className="p-3.5 rounded-lg bg-[#0D0D0D] border border-white/20 space-y-2">
                <div className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Ship className="w-3.5 h-3.5 text-white" />
                  HYDROCARBON & COMMERCIAL TRANSIT FLOWS
                </div>
                {resolvedEntity.strategicSignificance.oilVolume && (
                  <div className="text-xs text-[#BDBDBD]">
                    <span className="font-semibold text-white">Crude Oil Transit:</span> {resolvedEntity.strategicSignificance.oilVolume}
                  </div>
                )}
                {resolvedEntity.strategicSignificance.lngVolume && (
                  <div className="text-xs text-[#BDBDBD]">
                    <span className="font-semibold text-white">LNG Flow:</span> {resolvedEntity.strategicSignificance.lngVolume}
                  </div>
                )}
                {resolvedEntity.strategicSignificance.tradeVolume && (
                  <div className="text-xs text-[#BDBDBD]">
                    <span className="font-semibold text-white">Global Merchandise:</span> {resolvedEntity.strategicSignificance.tradeVolume}
                  </div>
                )}
                {resolvedEntity.strategicSignificance.economicImpact && (
                  <div className="text-xs text-white bg-[#1A1A1A] p-2 rounded border border-white/20 mt-1">
                    <span className="font-semibold text-white">Disruption Risk:</span> {resolvedEntity.strategicSignificance.economicImpact}
                  </div>
                )}
              </div>
            )}

            {/* Current Tensions / Flashpoints */}
            {(resolvedEntity.currentIssues || resolvedEntity.currentTensions) && (
              <div className="space-y-2">
                <div className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-white" />
                  ACTIVE SECURITY ISSUES & FLASHPOINTS
                </div>
                <div className="space-y-1.5">
                  {(Array.isArray(resolvedEntity.currentIssues) ? resolvedEntity.currentIssues : 
                    Array.isArray(resolvedEntity.currentTensions) ? resolvedEntity.currentTensions : 
                    [resolvedEntity.currentTensions]).map((issue, idx) => (
                    <div key={idx} className="p-2.5 rounded bg-[#111111] border border-[#1A1A1A] text-xs text-[#BDBDBD] flex items-start gap-2">
                      <span className="text-white font-mono mt-0.5">•</span>
                      <span>{issue}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* 2. CONNECTED NATIONS TAB */}
        {activeTab === 'countries' && (
          <div className="space-y-3 animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-1 border-b border-[#1A1A1A]">
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                BORDERING & CONNECTED LITTORAL STATES ({connectedList.length})
              </span>
              <span className="text-[10px] font-mono text-[#888888]">
                CLICK TO OPEN DOSSIER
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-[#111111] border border-[#1A1A1A] text-[11px] text-[#BDBDBD] font-mono">
              ⚡ Connected littoral relationship: these states share maritime approaches and are secondary-illuminated on the 3D globe.
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {connectedList.map((countryCodeOrName, idx) => {
                const code = String(countryCodeOrName).toUpperCase();
                const dossier = getCountryDossier(code, { id: code, name: countryCodeOrName });
                const iso2 = ISO3_TO_ISO2[code] || (dossier.iso2 ? String(dossier.iso2).toLowerCase() : code.slice(0, 2).toLowerCase());

                return (
                  <button
                    key={idx}
                    onClick={() => handleCountryClick(code)}
                    className="p-2.5 rounded-xl bg-[#111111] hover:bg-white/10 border border-[#1A1A1A] hover:border-white/40 text-left transition-all cursor-pointer group flex items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-7 h-5 rounded overflow-hidden border border-white/20 shrink-0 bg-black flex items-center justify-center">
                        {iso2 ? (
                          <img 
                            src={`https://flagcdn.com/w80/${iso2}.png`} 
                            alt={dossier.name} 
                            className="w-full h-full object-cover"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                          />
                        ) : (
                          <span>{dossier.flag || '🌐'}</span>
                        )}
                      </div>
                      <div className="truncate">
                        <div className="text-xs font-semibold text-white group-hover:text-white truncate">
                          {dossier.name}
                        </div>
                        <div className="text-[9px] font-mono text-[#888888] uppercase">
                          {dossier.id || code} • {dossier.region || 'Littoral'}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#888888] group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" />
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 3. MARGINAL SEAS & GULFS TAB */}
        {activeTab === 'seas' && (
          <div className="space-y-3 animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-1 border-b border-[#1A1A1A]">
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                MARGINAL SEAS & WATERWAYS ({(resolvedEntity.geography?.marginalSeas || resolvedEntity.marginalSeas || []).length})
              </span>
              <span className="text-[10px] font-mono text-[#888888]">
                CLICK TO EXPLORE SEA
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {(resolvedEntity.geography?.marginalSeas || resolvedEntity.marginalSeas || []).map((seaName, idx) => {
                const seaEntity = getMaritimeEntity(seaName);
                return (
                  <button
                    key={idx}
                    onClick={() => onSelectMaritimeEntity && onSelectMaritimeEntity(seaEntity || seaName)}
                    className="p-2.5 rounded-xl bg-[#111111] hover:bg-white/10 border border-[#1A1A1A] hover:border-white/40 text-left transition-all cursor-pointer group flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <Waves className="w-4 h-4 text-white" />
                      <span className="text-xs font-semibold text-white group-hover:text-white">
                        {seaEntity?.name || seaName}
                      </span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#888888] group-hover:text-white" />
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 4. CHOKEPOINTS, PORTS & SHIPPING ROUTES TAB */}
        {activeTab === 'nodes' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            {/* Chokepoints */}
            {(resolvedEntity.strategicChokepoints || resolvedEntity.chokepointsConnected) && (
              <div className="space-y-2">
                <div className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-white" />
                  CONTROLLING CHOKEPOINTS & STRAITS
                </div>
                <div className="space-y-1.5">
                  {(resolvedEntity.strategicChokepoints || resolvedEntity.chokepointsConnected).map((chokeId, i) => {
                    const chokeEntity = getMaritimeEntity(chokeId);
                    return (
                      <button
                        key={i}
                        onClick={() => onSelectMaritimeEntity && onSelectMaritimeEntity(chokeEntity || chokeId)}
                        className="w-full p-2.5 rounded-lg bg-[#111111] hover:bg-white/10 border border-[#1A1A1A] hover:border-white/40 text-left transition-all flex items-center justify-between group cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-white font-mono text-sm">◈</span>
                          <div>
                            <div className="text-xs font-semibold text-white">
                              {chokeEntity?.name || chokeId.replace(/_/g, ' ')}
                            </div>
                            <div className="text-[10px] font-mono text-[#888888]">
                              {chokeEntity?.type || 'STRATEGIC CHOKEPOINT'}
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-[#888888] group-hover:text-white transition-colors" />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Strategic Ports */}
            {resolvedEntity.majorPorts && (
              <div className="space-y-2">
                <div className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Anchor className="w-3.5 h-3.5 text-white" />
                  ANCHOR COMMERCIAL & NAVAL SEAPORTS
                </div>
                <div className="space-y-1.5">
                  {resolvedEntity.majorPorts.map((portId, i) => {
                    const portEntity = getMaritimeEntity(portId);
                    return (
                      <button
                        key={i}
                        onClick={() => onSelectMaritimeEntity && onSelectMaritimeEntity(portEntity || portId)}
                        className="w-full p-2.5 rounded-lg bg-[#111111] hover:bg-white/10 border border-[#1A1A1A] hover:border-white/40 text-left transition-all flex items-center justify-between group cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-white text-sm">⚓</span>
                          <div>
                            <div className="text-xs font-semibold text-white">
                              {portEntity?.name || portId.replace(/_/g, ' ')}
                            </div>
                            <div className="text-[10px] font-mono text-[#888888]">
                              {portEntity?.country || 'LITTORAL PORT'}
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-[#888888] group-hover:text-white transition-colors" />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Connected Trunk Shipping Corridors */}
            {resolvedEntity.connectedRoutes && (
              <div className="p-3.5 rounded-lg bg-[#111111] border border-[#1A1A1A] space-y-2">
                <div className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Ship className="w-3.5 h-3.5 text-white" />
                  TRUNK MARITIME SHIPPING ROUTES
                </div>
                <div className="space-y-1">
                  {resolvedEntity.connectedRoutes.map((route, i) => (
                    <div key={i} className="text-xs text-[#BDBDBD] flex items-center gap-2">
                      <span className="text-white">•</span>
                      <span>{route}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* 5. SECURITY & STRATEGY TAB */}
        {activeTab === 'security' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            {/* Maritime Balance of Power */}
            {(resolvedEntity.maritimeSecurity?.summary || resolvedEntity.militaryDynamics || resolvedEntity.strategicSignificance) && (
              <div className="p-3.5 rounded-lg bg-[#111111] border border-[#1A1A1A] space-y-2">
                <div className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-white" />
                  MARITIME THEATER COMMAND & BALANCE OF POWER
                </div>
                <div className="text-xs leading-relaxed text-[#BDBDBD]">
                  <InteractiveText 
                    text={resolvedEntity.maritimeSecurity?.summary || resolvedEntity.militaryDynamics || (typeof resolvedEntity.strategicSignificance === 'string' ? resolvedEntity.strategicSignificance : 'Regional theater defense architecture active.')}
                    onSelectConcept={onSelectConcept}
                  />
                </div>
              </div>
            )}

            {/* Forward Naval Bases */}
            {resolvedEntity.maritimeSecurity?.keyBases && (
              <div className="space-y-2">
                <div className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Radio className="w-3.5 h-3.5 text-white" />
                  FORWARD NAVAL BASES & BASTIONS
                </div>
                <div className="space-y-2">
                  {resolvedEntity.maritimeSecurity.keyBases.map((base, i) => (
                    <div key={i} className="p-2.5 rounded bg-[#111111] border border-[#1A1A1A] text-xs">
                      <div className="flex items-center justify-between text-white font-semibold">
                        <span>{base.name}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white text-black font-bold">
                          {base.country}
                        </span>
                      </div>
                      <div className="text-[#888888] mt-1">{base.role}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Primary Naval Patrol Missions */}
            {resolvedEntity.maritimeSecurity?.primaryMissions && (
              <div className="p-3 rounded-lg bg-[#111111] border border-[#1A1A1A] space-y-2">
                <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  PRIMARY NAVAL PATROL & DETERRENCE MISSIONS
                </div>
                <div className="space-y-1">
                  {resolvedEntity.maritimeSecurity.primaryMissions.map((mission, i) => (
                    <div key={i} className="text-xs text-[#BDBDBD] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-white shrink-0" />
                      <span>{mission}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* 6. INDIA IMPACT TAB */}
        {activeTab === 'india' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            {resolvedEntity.indiaConnection ? (
              <div className="p-4 rounded-lg bg-[#111111] border border-white/20 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🇮🇳</span>
                  <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    {resolvedEntity.indiaConnection.headline || 'India Strategic Stakes'}
                  </div>
                </div>
                <div className="space-y-2">
                  {resolvedEntity.indiaConnection.points.map((pt, i) => (
                    <div key={i} className="p-2.5 rounded bg-[#0A0A0A] border border-[#1A1A1A] text-xs text-[#BDBDBD] leading-relaxed flex items-start gap-2">
                      <span className="text-white font-mono mt-0.5">•</span>
                      <InteractiveText text={pt} onSelectConcept={onSelectConcept} />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-4 rounded bg-[#111111] border border-[#1A1A1A] text-xs text-[#888888]">
                PUBLIC DATA LIMITED. Strategic impact on Indian sea lines of communication currently under review.
              </div>
            )}
          </div>
        )}

        {/* 7. SOURCES TAB */}
        {activeTab === 'sources' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="p-4 rounded-lg bg-[#111111] border border-[#1A1A1A] space-y-2 text-xs">
              <div className="font-mono text-white font-semibold uppercase tracking-wider">
                Hydrographic & Geopolitical Authorities
              </div>
              <div className="text-[#BDBDBD] leading-relaxed">
                {resolvedEntity.sources || 'International Hydrographic Organization (IHO) / U.S. Naval War College / UNCLOS / National Geospatial-Intelligence Agency'}
              </div>
              <div className="pt-2 text-[11px] font-mono text-[#888888]">
                Data calibrated against satellite automatic identification system (AIS) logs, naval doctrine publications, and port authority registers.
              </div>
            </div>
          </div>
        )}

      </div>
    </aside>
  );
}
