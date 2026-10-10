import React, { useState } from 'react';
import { 
  FileText, 
  ShieldAlert, 
  Radio, 
  Crosshair, 
  History, 
  Star, 
  ChevronRight, 
  ChevronLeft, 
  Maximize2, 
  Minimize2, 
  X, 
  Globe2 
} from 'lucide-react';

import WargameScenarioModal from './WargameScenarioModal';
import SensorTrackerPanel from './SensorTrackerPanel';
import FlashpointFocusModal from './FlashpointFocusModal';
import CrisisWatchlist from './CrisisWatchlist';
import CountryIntelligencePanel from './CountryIntelligencePanel';
import GeographicIntelligencePanel from './GeographicIntelligencePanel';
import HistoricalTimelineModal from './HistoricalTimelineModal';

export default function WorkstationDock({
  isOpen,
  onClose,
  activeTab,
  onTabChange,
  // Context states
  selectedCountry,
  selectedMaritimeEntity,
  intelLevel,
  onCountrySelect,
  onMaritimeSelect,
  onLocationSelect,
  onResetGlobe,
  onDeployWargame,
  onFlyToFlashpoint,
  onFlyToSensor,
  onOpenSitrep,
  // Sub-modal triggers from Country panel
  onSelectRelationship,
  onSelectConcept,
  onSelectAgreement,
  onSelectMilitarySystem,
  onSelectEvent,
  onSelectRegion,
  onSelectCapital
}) {
  const [isMinimized, setIsMinimized] = useState(false);

  if (!isOpen) return null;

  const tabs = [
    { id: 'dossier', label: 'DOSSIER', icon: FileText, badge: selectedCountry ? selectedCountry.id : null },
    { id: 'wargame', label: 'WARGAME', icon: ShieldAlert, badge: '4 SCENARIOS' },
    { id: 'sensors', label: 'SENSORS', icon: Radio, badge: 'LIVE OSINT' },
    { id: 'flashpoints', label: 'FLASHPOINTS', icon: Crosshair, badge: '7 HUBS' },
    { id: 'timeline', label: 'TIMELINE', icon: History, badge: '4D ERAS' },
    { id: 'watchlist', label: 'WATCHLIST', icon: Star, badge: null }
  ];

  return (
    <aside 
      className={`fixed top-16 bottom-4 right-4 z-25 flex flex-col rounded-2xl bg-[#090909]/98 border border-[#222222] shadow-2xl backdrop-blur-2xl transition-all duration-300 pointer-events-auto overflow-hidden ${
        isMinimized 
          ? 'w-16' 
          : 'w-[94vw] sm:w-[540px] lg:w-[620px] xl:w-[680px]'
      }`}
    >
      {/* Top Dock Header & Tab Navigation */}
      <div className="flex items-center justify-between px-3 py-2.5 border-b border-[#1E1E1E] bg-[#111111]/90 select-none">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {!isMinimized && tabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-white text-black shadow-sm'
                    : 'text-[#888888] hover:text-white hover:bg-white/5'
                }`}
                title={tab.label}
              >
                <Icon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{tab.label}</span>
                {tab.badge && !isActive && (
                  <span className="text-[9px] px-1 py-0.2 rounded bg-white/10 text-[#CCCCCC] hidden md:inline">
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Dock Controls */}
        <div className="flex items-center gap-1 shrink-0 ml-2">
          {onOpenSitrep && !isMinimized && (
            <button
              onClick={() => onOpenSitrep()}
              className="px-2 py-1 rounded bg-white/10 hover:bg-white hover:text-black text-white text-[10px] font-mono font-bold transition-all cursor-pointer mr-1"
              title="Export Strategic SitRep"
            >
              SITREP
            </button>
          )}

          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1.5 rounded-lg text-[#888888] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            title={isMinimized ? 'Expand Workstation Dock' : 'Collapse Dock'}
          >
            {isMinimized ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#888888] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            title="Close Workstation Dock"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Dock Body */}
      {isMinimized ? (
        <div className="flex-1 flex flex-col items-center py-4 space-y-4">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  onTabChange(tab.id);
                  setIsMinimized(false);
                }}
                className={`p-2 rounded-xl transition-all cursor-pointer ${
                  isActive ? 'bg-white text-black' : 'text-[#888888] hover:text-white hover:bg-white/10'
                }`}
                title={tab.label}
              >
                <Icon className="w-4 h-4" />
              </button>
            );
          })}
        </div>
      ) : (
        <div className="flex-1 overflow-hidden relative">
          
          {/* TAB 1: DOSSIER */}
          {activeTab === 'dossier' && (
            <div className="h-full overflow-y-auto">
              {selectedCountry ? (
                <CountryIntelligencePanel
                  country={selectedCountry}
                  intelLevel={intelLevel}
                  isDocked={true}
                  onClose={() => onCountrySelect(null)}
                  onResetGlobe={onResetGlobe}
                  onSelectRelationship={onSelectRelationship}
                  onSelectConcept={onSelectConcept}
                  onSelectAgreement={onSelectAgreement}
                  onSelectMilitarySystem={onSelectMilitarySystem}
                  onSelectCountry={onCountrySelect}
                  onSelectLocation={onLocationSelect}
                  onSelectEvent={onSelectEvent}
                  onSelectRegion={onSelectRegion}
                  onSelectCapital={onSelectCapital}
                />
              ) : selectedMaritimeEntity ? (
                <GeographicIntelligencePanel
                  entity={selectedMaritimeEntity}
                  intelLevel={intelLevel}
                  isDocked={true}
                  onClose={() => onMaritimeSelect(null)}
                  onSelectMaritimeEntity={onMaritimeSelect}
                  onSelectCountry={onCountrySelect}
                  onSelectConcept={onSelectConcept}
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full p-8 text-center text-mono">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    <Globe2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1 tracking-wider uppercase">
                    NO TARGET SELECTED
                  </h3>
                  <p className="text-xs text-[#888888] max-w-sm mb-4">
                    Click any sovereign nation, maritime chokepoint, or hotspot on the 3D globe to view its full canonical intelligence dossier.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['IND', 'USA', 'CHN', 'RUS', 'UKR', 'TWN', 'IRN'].map(iso => (
                      <button
                        key={iso}
                        onClick={() => onCountrySelect(iso)}
                        className="px-2.5 py-1 rounded bg-[#161616] hover:bg-white hover:text-black border border-[#282828] text-xs font-mono font-bold text-white transition-all cursor-pointer"
                      >
                        {iso}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: WARGAME */}
          {activeTab === 'wargame' && (
            <WargameScenarioModal
              isOpen={true}
              isDocked={true}
              onDeployToGlobe={onDeployWargame}
              onOpenSitrep={onOpenSitrep}
            />
          )}

          {/* TAB 3: SENSORS */}
          {activeTab === 'sensors' && (
            <SensorTrackerPanel
              isOpen={true}
              isDocked={true}
              onFlyToSensor={onFlyToSensor}
            />
          )}

          {/* TAB 4: FLASHPOINTS */}
          {activeTab === 'flashpoints' && (
            <FlashpointFocusModal
              isOpen={true}
              isDocked={true}
              onFlyToFlashpoint={onFlyToFlashpoint}
            />
          )}

          {/* TAB 5: TIMELINE */}
          {activeTab === 'timeline' && (
            <HistoricalTimelineModal
              isOpen={true}
              isDocked={true}
              onSelectCountry={onCountrySelect}
              onLocateCoords={(lat, lng, name) => onLocationSelect({ name, lat, lng })}
              onSelectConcept={onSelectConcept}
              onSelectAgreement={onSelectAgreement}
            />
          )}

          {/* TAB 6: WATCHLIST */}
          {activeTab === 'watchlist' && (
            <CrisisWatchlist
              isOpen={true}
              isDocked={true}
              onFlyToTarget={(coords, name) => onLocationSelect({ name, lat: coords.lat, lng: coords.lng })}
              onSelectCountry={onCountrySelect}
            />
          )}

        </div>
      )}
    </aside>
  );
}
