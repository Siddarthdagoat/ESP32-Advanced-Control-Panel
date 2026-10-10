import React, { useState, useEffect, useCallback } from 'react';
import GeointelGlobe from './components/globe/GeointelGlobe';
import GeointelHeader from './components/ui/GeointelHeader';
import InteractionHints from './components/ui/InteractionHints';
import LayerControls from './components/ui/LayerControls';
import CountryIntelligencePanel from './components/ui/CountryIntelligencePanel';
import GeographicIntelligencePanel from './components/ui/GeographicIntelligencePanel';
import IntelligenceLegend from './components/ui/IntelligenceLegend';
import EventOverlay from './components/ui/EventOverlay';
import StrategicCard from './components/ui/StrategicCard';
import TimeMachine from './components/ui/TimeMachine';
import RegionSelector from './components/ui/RegionSelector';
import HoverTooltip from './components/ui/HoverTooltip';
import SearchModal from './components/ui/SearchModal';
import KeyboardShortcutsModal from './components/ui/KeyboardShortcutsModal';
import GlobalSituationPanel from './components/ui/GlobalSituationPanel';

// Educational & Interconnected Intelligence Modals
import ConceptModal from './components/ui/ConceptModal';
import AgreementModal from './components/ui/AgreementModal';
import MilitaryModal from './components/ui/MilitaryModal';
import RelationshipDossierModal from './components/ui/RelationshipDossierModal';
import GeopoliticalChainViewer from './components/ui/GeopoliticalChainViewer';
import WhyExplainerModal from './components/ui/WhyExplainerModal';
import GlossaryModal from './components/ui/GlossaryModal';
import CapitalModal from './components/ui/CapitalModal';
import ConspiracyIntelModal from './components/ui/ConspiracyIntelModal';
import HistoricalTimelineModal from './components/ui/HistoricalTimelineModal';

// Advanced Analytical Capabilities (Workstation, PDB Briefing, Wargaming, OSINT Sensors, Flashpoints, Watchlist)
import WorkstationDock from './components/ui/WorkstationDock';
import BriefingExportModal from './components/ui/BriefingExportModal';
import WargameScenarioModal from './components/ui/WargameScenarioModal';
import FlashpointFocusModal from './components/ui/FlashpointFocusModal';
import SensorTrackerPanel from './components/ui/SensorTrackerPanel';
import CrisisWatchlist from './components/ui/CrisisWatchlist';

import { GLOBAL_REGIONS, COUNTRIES } from './data/geointelData';
import { COUNTRY_DOSSIERS, getCountryDossier } from './data/geointelCountryDossiers';
import { getMaritimeEntity } from './data/geointelMaritime';
import { WARGAME_SCENARIOS } from './data/geointelScenarios';
import { STRATEGIC_FLASHPOINTS } from './data/geointelFlashpoints';

export default function App() {
  // Navigation & Mode
  const [activeMode, setActiveMode] = useState('world'); // 'world' | 'regions' | 'timeline' | 'hotspots'
  const [isRotating, setIsRotating] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [intelLevel, setIntelLevel] = useState('advanced'); // Default to full intelligence

  // Active Selections
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCapital, setSelectedCapital] = useState(null);
  const [selectedMaritimeEntity, setSelectedMaritimeEntity] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [hoverData, setHoverData] = useState(null);

  // Deep Educational Knowledge Modals State
  const [selectedConcept, setSelectedConcept] = useState(null);
  const [selectedAgreement, setSelectedAgreement] = useState(null);
  const [selectedMilitarySystem, setSelectedMilitarySystem] = useState(null);
  const [selectedRelationship, setSelectedRelationship] = useState(null);
  const [activeChain, setActiveChain] = useState(null);
  const [whyExplainerItem, setWhyExplainerItem] = useState(null);
  const [glossaryOpen, setGlossaryOpen] = useState(false);

  // Reset Globe Counter Trigger
  const [resetGlobeCounter, setResetGlobeCounter] = useState(0);

  // Time Machine Era
  const [currentYear, setCurrentYear] = useState('PRESENT');

  // Intelligence Layers Active States
  const [activeLayers, setActiveLayers] = useState({
    sensors: true,
    events: true,
    tensions: true,
    military: true,
    diplomacy: true,
    strategic: true,
    relations: true,
    trade: true,
    maritime: true
  });

  // Docked Split Workstation Mode & Dock Tab
  const [workstationMode, setWorkstationMode] = useState(false);
  const [workstationTab, setWorkstationTab] = useState('dossier');

  // Globe Visual Display Mode
  const [mapMode, setMapMode] = useState('monochrome'); // 'monochrome' | 'bathymetry' | 'thermal' | 'satellite'

  // Advanced Analytical Telemetry States
  const [activeScenario, setActiveScenario] = useState(null);
  const [tacticalFlashpoint, setTacticalFlashpoint] = useState(null);
  const [selectedSensorData, setSelectedSensorData] = useState(null);

  // Analytical Standalone Modals (Active in HUD Mode)
  const [sitrepModalOpen, setSitrepModalOpen] = useState(false);
  const [sitrepContext, setSitrepContext] = useState(null);
  const [wargameModalOpen, setWargameModalOpen] = useState(false);
  const [flashpointsModalOpen, setFlashpointsModalOpen] = useState(false);
  const [sensorsModalOpen, setSensorsModalOpen] = useState(false);
  const [watchlistModalOpen, setWatchlistModalOpen] = useState(false);

  // Modals
  const [searchOpen, setSearchOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [isLiveFeedOpen, setIsLiveFeedOpen] = useState(false);
  const [conspiraciesOpen, setConspiraciesOpen] = useState(false);
  const [historyTimelineOpen, setHistoryTimelineOpen] = useState(false);

  // Mark first user interaction to dismiss hint overlay
  const handleUserInteraction = useCallback(() => {
    if (!hasInteracted) {
      setHasInteracted(true);
    }
  }, [hasInteracted]);

  // Handle Layer Toggle
  const handleToggleLayer = (layerId) => {
    setActiveLayers(prev => ({
      ...prev,
      [layerId]: !prev[layerId]
    }));
  };

  // Find country object by identifier (code, name, etc.)
  const findCountry = (query) => {
    if (!query) return null;
    const lower = query.toLowerCase();
    const upper = query.toUpperCase();
    if (COUNTRY_DOSSIERS[upper]) return COUNTRY_DOSSIERS[upper];
    const inDossiers = Object.values(COUNTRY_DOSSIERS).find(c => 
      c.id.toLowerCase() === lower || 
      c.name.toLowerCase() === lower || 
      c.officialName?.toLowerCase().includes(lower)
    );
    if (inDossiers) return inDossiers;
    return COUNTRIES.find(c => 
      c.id.toLowerCase() === lower || 
      c.name.toLowerCase() === lower || 
      c.officialName?.toLowerCase().includes(lower)
    );
  };

  // Handle Country Selection
  const handleSelectCountry = (country) => {
    handleUserInteraction();
    setSelectedEvent(null);
    setSelectedLocation(null);
    setSelectedMaritimeEntity(null);
    setSelectedCapital(null);
    let countryObj = typeof country === 'string' ? findCountry(country) : country;
    if (countryObj) {
      const iso3 = countryObj.id || countryObj.ISO_A3 || countryObj.isoCode;
      const fullDossier = getCountryDossier(iso3, countryObj);
      setSelectedCountry(fullDossier);
      setIsRotating(false);
      setWorkstationTab('dossier');
    }
  };

  // Handle Event Selection
  const handleSelectEvent = (event) => {
    handleUserInteraction();
    setSelectedCountry(null);
    setSelectedLocation(null);
    setSelectedMaritimeEntity(null);
    setSelectedEvent(event);
    setIsRotating(false);
  };

  // Handle Strategic Location Selection
  const handleSelectLocation = (location) => {
    handleUserInteraction();
    setSelectedCountry(null);
    setSelectedEvent(null);
    setSelectedMaritimeEntity(null);
    setSelectedLocation(location);
    setIsRotating(false);
  };

  // Handle Maritime Entity Selection (Ocean, Sea, Chokepoint, Port)
  const handleSelectMaritimeEntity = (entity) => {
    handleUserInteraction();
    setSelectedCountry(null);
    setSelectedEvent(null);
    setSelectedLocation(null);
    const resolved = typeof entity === 'string' ? getMaritimeEntity(entity) : entity;
    setSelectedMaritimeEntity(resolved);
    setIsRotating(false);
    setWorkstationTab('dossier');
  };

  // Handle Open Executive SitRep Briefing
  const handleOpenSitrep = (context = null) => {
    setSitrepContext(context || selectedCountry || activeScenario || null);
    setSitrepModalOpen(true);
  };

  // Handle Deploy Wargame to Globe
  const handleDeployWargameToGlobe = (scenario, phaseIdx) => {
    setActiveScenario(scenario);
    if (scenario.focusCoords) {
      handleSelectLocation({
        name: `Wargame Focal Point: ${scenario.title}`,
        lat: scenario.focusCoords.lat,
        lng: scenario.focusCoords.lng
      });
    }
    setWargameModalOpen(false);
  };

  // Handle Fly to Tactical Flashpoint
  const handleFlyToFlashpoint = (fp) => {
    setTacticalFlashpoint(fp);
    handleSelectLocation({
      name: fp.name,
      lat: fp.lat,
      lng: fp.lng,
      defcon: fp.defconLevel
    });
    setFlashpointsModalOpen(false);
  };

  // Handle Fly to Sensor
  const handleFlyToSensor = (sensor) => {
    handleSelectLocation({
      name: sensor.name,
      lat: sensor.lat,
      lng: sensor.lng
    });
    setSensorsModalOpen(false);
  };

  // Handle Region Selection
  const handleSelectRegion = (region) => {
    handleUserInteraction();
    setSelectedRegion(region);
    setSelectedCountry(null);
    setSelectedEvent(null);
    setSelectedLocation(null);
    setSelectedMaritimeEntity(null);
  };

  // Reset Globe Camera and Exploration Mode
  const handleResetGlobe = () => {
    setSelectedCountry(null);
    setSelectedEvent(null);
    setSelectedLocation(null);
    setSelectedMaritimeEntity(null);
    setResetGlobeCounter(prev => prev + 1);
    setIsRotating(true);
  };

  // Deselect All / Close Active Panels
  const handleDeselectAll = () => {
    setSelectedCountry(null);
    setSelectedMaritimeEntity(null);
    setSelectedEvent(null);
    setSelectedLocation(null);
    setSelectedRegion(null);
    setSelectedConcept(null);
    setSelectedAgreement(null);
    setSelectedMilitarySystem(null);
    setSelectedRelationship(null);
    setActiveChain(null);
    setWhyExplainerItem(null);
    setIsRotating(true);
  };

  // View Region from Strategic Card
  const handleViewRegionFromStrategic = (location) => {
    let targetRegion = GLOBAL_REGIONS.find(r => r.id === 'middle_east');
    if (location.lat < 15 && location.lng > 90) {
      targetRegion = GLOBAL_REGIONS.find(r => r.id === 'indo_pacific');
    } else if (location.lat > 40 && location.lng < 40) {
      targetRegion = GLOBAL_REGIONS.find(r => r.id === 'europe');
    }
    if (targetRegion) {
      handleSelectRegion(targetRegion);
      setActiveMode('regions');
    }
  };

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger if user is typing in search input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.key === '/') {
        e.preventDefault();
        setSearchOpen(true);
      } else if (e.key === 'Escape') {
        if (sitrepModalOpen) setSitrepModalOpen(false);
        else if (wargameModalOpen) setWargameModalOpen(false);
        else if (flashpointsModalOpen) setFlashpointsModalOpen(false);
        else if (sensorsModalOpen) setSensorsModalOpen(false);
        else if (watchlistModalOpen) setWatchlistModalOpen(false);
        else if (selectedConcept) setSelectedConcept(null);
        else if (selectedAgreement) setSelectedAgreement(null);
        else if (selectedMilitarySystem) setSelectedMilitarySystem(null);
        else if (selectedRelationship) setSelectedRelationship(null);
        else if (selectedMaritimeEntity) setSelectedMaritimeEntity(null);
        else if (activeChain) setActiveChain(null);
        else if (whyExplainerItem) setWhyExplainerItem(null);
        else if (glossaryOpen) setGlossaryOpen(false);
        else if (isLiveFeedOpen) setIsLiveFeedOpen(false);
        else if (searchOpen) setSearchOpen(false);
        else if (helpOpen) setHelpOpen(false);
        else handleDeselectAll();
      } else if (e.code === 'Space') {
        e.preventDefault();
        setIsRotating(prev => !prev);
      } else if (e.key.toLowerCase() === 'w') {
        setWorkstationMode(prev => !prev);
      } else if (e.key.toLowerCase() === 'c') {
        setActiveChain(prev => prev ? null : 'CHAIN_BRAHMOS_AUTONOMY');
      } else if (e.key.toLowerCase() === 'v') {
        setGlossaryOpen(prev => !prev);
      } else if (e.key.toLowerCase() === 'l') {
        setIsLiveFeedOpen(prev => !prev);
      } else if (e.key.toLowerCase() === 't') {
        handleToggleLayer('tensions');
      } else if (e.key.toLowerCase() === 'r') {
        handleToggleLayer('relations');
      } else if (e.key.toLowerCase() === 'm') {
        handleToggleLayer('military');
      } else if (e.key.toLowerCase() === 's') {
        handleToggleLayer('strategic');
      } else if (e.key === '1') {
        handleToggleLayer('events');
      } else if (e.key === '2') {
        handleToggleLayer('trade');
      } else if (e.key === '3') {
        handleToggleLayer('maritime');
      } else if (e.key === '4') {
        handleToggleLayer('sensors');
      } else if (e.key.toLowerCase() === 'h' || e.key === '?') {
        setHelpOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    searchOpen, helpOpen, isLiveFeedOpen, selectedConcept, selectedAgreement, 
    selectedMilitarySystem, selectedRelationship, activeChain, 
    whyExplainerItem, glossaryOpen, sitrepModalOpen, wargameModalOpen, 
    flashpointsModalOpen, sensorsModalOpen, watchlistModalOpen
  ]);

  return (
    <div 
      className="relative w-screen h-screen overflow-hidden bg-[#05070B] select-none text-slate-100"
      onPointerDown={handleUserInteraction}
      onWheel={handleUserInteraction}
    >
      {/* 1. Core 3D Globe - The Globe is the Interface */}
      <GeointelGlobe
        selectedCountry={selectedCountry}
        selectedMaritimeEntity={selectedMaritimeEntity}
        selectedEvent={selectedEvent}
        selectedLocation={selectedLocation}
        selectedRegion={selectedRegion}
        selectedRelationship={selectedRelationship}
        tacticalFlashpoint={tacticalFlashpoint}
        activeScenario={activeScenario}
        mapMode={mapMode}
        activeLayers={activeLayers}
        currentYear={currentYear}
        onCountrySelect={handleSelectCountry}
        onSelectMaritimeEntity={handleSelectMaritimeEntity}
        onEventSelect={handleSelectEvent}
        onLocationSelect={handleSelectLocation}
        onCapitalSelect={setSelectedCapital}
        onSensorSelect={(sensor) => {
          setSelectedSensorData(sensor);
          handleSelectLocation({
            name: sensor.name || sensor.callsign || sensor.theater,
            lat: sensor.lat,
            lng: sensor.lng
          });
        }}
        onHoverChange={setHoverData}
        isRotating={isRotating}
        onUserInteraction={handleUserInteraction}
        resetGlobeTrigger={resetGlobeCounter}
      />

      {/* 2. Top Header & Operational Telemetry with Educational Shortcuts */}
      <GeointelHeader
        activeMode={activeMode}
        setActiveMode={(mode) => {
          setActiveMode(mode);
          if (mode === 'world') {
            handleDeselectAll();
          } else if (mode === 'hotspots') {
            setActiveLayers(prev => ({ ...prev, events: true, tensions: true }));
          }
        }}
        workstationMode={workstationMode}
        onToggleWorkstationMode={() => setWorkstationMode(prev => !prev)}
        onOpenWargame={() => {
          setWorkstationTab('wargame');
          if (!workstationMode) setWargameModalOpen(true);
        }}
        onOpenFlashpoints={() => {
          setWorkstationTab('flashpoints');
          if (!workstationMode) setFlashpointsModalOpen(true);
        }}
        onOpenSensors={() => {
          setWorkstationTab('sensors');
          if (!workstationMode) setSensorsModalOpen(true);
        }}
        onOpenSitrep={() => handleOpenSitrep()}
        onOpenWatchlist={() => {
          setWorkstationTab('watchlist');
          if (!workstationMode) setWatchlistModalOpen(true);
        }}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenHelp={() => setHelpOpen(true)}
        onOpenGlossary={() => setGlossaryOpen(true)}
        onOpenChains={() => setActiveChain('CHAIN_BRAHMOS_AUTONOMY')}
        onOpenLiveFeed={() => setIsLiveFeedOpen(prev => !prev)}
        isLiveFeedOpen={isLiveFeedOpen}
        onOpenConspiracies={() => setConspiraciesOpen(true)}
        onOpenHistoryTimeline={() => setHistoryTimelineOpen(true)}
        selectedRegion={selectedRegion}
        onSelectRegion={handleSelectRegion}
      />

      {/* 3. Subtle Landing Experience Interaction Hints (Auto-dismisses) */}
      <InteractionHints
        visible={!hasInteracted && !selectedCountry && !selectedMaritimeEntity && !selectedEvent && !selectedLocation}
        onDismiss={() => setHasInteracted(true)}
      />

      {/* 4. Floating Intelligence Layer Controls */}
      <LayerControls
        activeLayers={activeLayers}
        onToggleLayer={handleToggleLayer}
        mapMode={mapMode}
        onMapModeChange={setMapMode}
      />

      {/* 4.5. Docked Split Workstation Mode (Split-Screen Multi-Pane Terminal) */}
      <WorkstationDock
        isOpen={workstationMode}
        onClose={() => setWorkstationMode(false)}
        activeTab={workstationTab}
        onTabChange={setWorkstationTab}
        selectedCountry={selectedCountry}
        selectedMaritimeEntity={selectedMaritimeEntity}
        intelLevel={intelLevel}
        onCountrySelect={handleSelectCountry}
        onMaritimeSelect={handleSelectMaritimeEntity}
        onLocationSelect={handleSelectLocation}
        onResetGlobe={handleResetGlobe}
        onDeployWargame={handleDeployWargameToGlobe}
        onFlyToFlashpoint={handleFlyToFlashpoint}
        onFlyToSensor={handleFlyToSensor}
        onOpenSitrep={handleOpenSitrep}
        onSelectRelationship={(pairId) => setSelectedRelationship(pairId)}
        onSelectConcept={(cId) => setSelectedConcept(cId)}
        onSelectAgreement={(agrId) => setSelectedAgreement(agrId)}
        onSelectMilitarySystem={(sysId) => setSelectedMilitarySystem(sysId)}
        onSelectEvent={handleSelectEvent}
        onSelectRegion={handleSelectRegion}
        onSelectCapital={setSelectedCapital}
      />

      {/* 5. Region Theater Selector (When in regions mode or when opened) */}
      {activeMode === 'regions' && (
        <RegionSelector
          selectedRegion={selectedRegion}
          onSelectRegion={handleSelectRegion}
          onClose={() => setActiveMode('world')}
        />
      )}

      {/* 6. Time Machine Dock (When in timeline mode or scrubbing) */}
      {activeMode === 'timeline' && (
        <TimeMachine
          currentYear={currentYear}
          onYearChange={setCurrentYear}
          onClose={() => setActiveMode('world')}
        />
      )}

      {/* 7. Contextual Country Intelligence Dossier Panel (Canonical 11 Sections, when in HUD Mode) */}
      {!workstationMode && selectedCountry && (
        <CountryIntelligencePanel
          country={selectedCountry}
          intelLevel={intelLevel}
          onClose={() => {
            setSelectedCountry(null);
            setIsRotating(true);
          }}
          onResetGlobe={handleResetGlobe}
          onOpenSitrep={handleOpenSitrep}
          onSelectRelationship={(pairId) => setSelectedRelationship(pairId)}
          onSelectConcept={(cId) => setSelectedConcept(cId)}
          onSelectAgreement={(agrId) => setSelectedAgreement(agrId)}
          onSelectMilitarySystem={(sysId) => setSelectedMilitarySystem(sysId)}
          onSelectCountry={handleSelectCountry}
          onSelectLocation={handleSelectLocation}
          onSelectEvent={handleSelectEvent}
          onSelectRegion={handleSelectRegion}
          onSelectCapital={setSelectedCapital}
        />
      )}

      {/* 8. Geographic & Maritime Intelligence Panel (Oceans, Seas, Chokepoints, Ports, when in HUD Mode) */}
      {!workstationMode && selectedMaritimeEntity && (
        <GeographicIntelligencePanel
          entity={selectedMaritimeEntity}
          intelLevel={intelLevel}
          onClose={() => {
            setSelectedMaritimeEntity(null);
            setIsRotating(true);
          }}
          onSelectMaritimeEntity={handleSelectMaritimeEntity}
          onSelectCountry={handleSelectCountry}
          onSelectConcept={(cId) => setSelectedConcept(cId)}
        />
      )}

      {/* 9. Contextual Event Intelligence Overlay */}
      {selectedEvent && (
        <EventOverlay
          event={selectedEvent}
          intelLevel={intelLevel}
          onClose={() => setSelectedEvent(null)}
          onExploreTimeline={() => setActiveMode('timeline')}
          onSelectConcept={(cId) => setSelectedConcept(cId)}
          onSelectAgreement={(agrId) => setSelectedAgreement(agrId)}
          onSelectMilitary={(sysId) => setSelectedMilitarySystem(sysId)}
          onExploreChain={(chainId) => setActiveChain(chainId)}
          onSelectCountry={handleSelectCountry}
          onSelectMaritimeEntity={handleSelectMaritimeEntity}
        />
      )}

      {/* Live Global Situation & Intelligence Feed Drawer */}
      <GlobalSituationPanel
        isOpen={isLiveFeedOpen}
        onClose={() => setIsLiveFeedOpen(false)}
        onSelectEvent={handleSelectEvent}
        onSelectRegion={handleSelectRegion}
      />

      {/* 10. Strategic Location Floating Intelligence Card */}
      {selectedLocation && (
        <StrategicCard
          location={selectedLocation}
          intelLevel={intelLevel}
          onClose={() => setSelectedLocation(null)}
          onViewRegion={handleViewRegionFromStrategic}
          onSelectConcept={(cId) => setSelectedConcept(cId)}
          onSelectAgreement={(agrId) => setSelectedAgreement(agrId)}
          onSelectMilitary={(sysId) => setSelectedMilitarySystem(sysId)}
          onExploreChain={(chainId) => setActiveChain(chainId)}
        />
      )}

      {/* 11. Cursor Hover Tooltip */}
      <HoverTooltip hoverData={hoverData} />

      {/* 11b. Tactical Globe Recon HUD Indicator (Red Blinking Beacon) */}
      <div className="fixed bottom-6 left-6 z-20 pointer-events-none hidden md:flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#080808]/90 border border-white/15 backdrop-blur-md shadow-2xl">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-80" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600 shadow-[0_0_8px_#ef4444]" />
        </span>
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-[9px] font-mono font-bold tracking-widest text-white uppercase">
              {hoverData?.data?.name ? `RECON LOCK: ${hoverData.data.name}` : selectedCountry?.name ? `TARGET: ${selectedCountry.name}` : 'ORBITAL RECON BEACON'}
            </span>
            <span className="text-[8px] font-mono px-1 py-0.2 rounded bg-red-950/70 border border-red-500/30 text-red-300 font-semibold">
              {hoverData?.data ? 'TRACKING' : selectedCountry ? 'LOCKED' : 'ACTIVE'}
            </span>
          </div>
          <span className="text-[8px] font-mono text-[#888888]">
            {hoverData?.data?.lat && hoverData?.data?.lng 
              ? `${Math.abs(hoverData.data.lat).toFixed(1)}°${hoverData.data.lat >= 0 ? 'N' : 'S'} ${Math.abs(hoverData.data.lng).toFixed(1)}°${hoverData.data.lng >= 0 ? 'E' : 'W'} · 280ms DWELL LOCK` 
              : 'HOVER OVER ANY NATION TO ENGAGE 3D BEACON'}
          </span>
        </div>
      </div>

      {/* 12. Global Search Command Palette (/) */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectCountry={handleSelectCountry}
        onSelectMaritime={handleSelectMaritimeEntity}
        onSelectEvent={handleSelectEvent}
        onSelectLocation={handleSelectLocation}
        onSelectConcept={(cId) => setSelectedConcept(cId)}
        onSelectConspiracy={() => setConspiraciesOpen(true)}
        onSelectHistory={() => setHistoryTimelineOpen(true)}
        onSelectWargame={(scenario) => {
          setActiveScenario(scenario);
          if (workstationMode) setWorkstationTab('wargame');
          else setWargameModalOpen(true);
        }}
        onSelectFlashpoint={(fp) => handleFlyToFlashpoint(fp)}
      />

      {/* 13. Operational Keyboard Shortcuts Modal (H / ?) */}
      <KeyboardShortcutsModal
        isOpen={helpOpen}
        onClose={() => setHelpOpen(false)}
      />

      {/* Capital Intelligence Dossier Modal */}
      {selectedCapital && (
        <CapitalModal
          capital={selectedCapital}
          onClose={() => setSelectedCapital(null)}
          onOpenCountry={handleSelectCountry}
        />
      )}

      {/* 14. Interactive Geopolitical Concept Explainer Modal */}
      {selectedConcept && (
        <ConceptModal
          conceptId={selectedConcept}
          contextCountryCode={selectedCountry?.id}
          intelLevel={intelLevel}
          onClose={() => setSelectedConcept(null)}
          onSelectConcept={(id) => setSelectedConcept(id)}
          onSelectAgreement={(id) => setSelectedAgreement(id)}
          onSelectCountry={handleSelectCountry}
          onExploreChain={(chainId) => setActiveChain(chainId)}
          onOpenWhyExplainer={(concept) => setWhyExplainerItem(concept)}
        />
      )}

      {/* 15. Verified Agreement & Treaty Dossier Modal */}
      {selectedAgreement && (
        <AgreementModal
          agreementId={selectedAgreement}
          intelLevel={intelLevel}
          onClose={() => setSelectedAgreement(null)}
          onSelectConcept={(id) => setSelectedConcept(id)}
          onSelectAgreement={(id) => setSelectedAgreement(id)}
        />
      )}

      {/* 16. Contextual Military Hardware & Defense System Modal */}
      {selectedMilitarySystem && (
        <MilitaryModal
          militaryId={selectedMilitarySystem}
          onClose={() => setSelectedMilitarySystem(null)}
          onSelectConcept={(id) => setSelectedConcept(id)}
          onSelectCountry={handleSelectCountry}
        />
      )}

      {/* 17. Deep Bilateral Relationship Dossier Modal */}
      {selectedRelationship && (
        <RelationshipDossierModal
          relationshipId={selectedRelationship}
          intelLevel={intelLevel}
          onClose={() => setSelectedRelationship(null)}
          onSelectConcept={(id) => setSelectedConcept(id)}
          onSelectAgreement={(id) => setSelectedAgreement(id)}
          onSelectMilitary={(id) => setSelectedMilitarySystem(id)}
          onExploreChain={(chainId) => setActiveChain(chainId)}
          onOpenWhyExplainer={(item) => setWhyExplainerItem(item)}
        />
      )}

      {/* 18. Interactive Geopolitical Causal Chain Viewer */}
      {activeChain && (
        <GeopoliticalChainViewer
          chainKey={activeChain}
          onClose={() => setActiveChain(null)}
          onSelectConcept={(id) => setSelectedConcept(id)}
          onSelectMilitary={(id) => setSelectedMilitarySystem(id)}
          onSelectCountry={handleSelectCountry}
        />
      )}

      {/* 19. "Why Does This Exist?" Multi-Perspective Explainer Modal */}
      {whyExplainerItem && (
        <WhyExplainerModal
          item={whyExplainerItem}
          onClose={() => setWhyExplainerItem(null)}
          onSelectConcept={(id) => setSelectedConcept(id)}
        />
      )}

      {/* 20. Geopolitical Concepts & Vocabulary Glossary Modal */}
      <GlossaryModal
        isOpen={glossaryOpen}
        onClose={() => setGlossaryOpen(false)}
        onSelectConcept={(cId) => setSelectedConcept(cId)}
      />

      {/* 21. Covert Operations & Geopolitical Conspiracies Modal (Shadow Intel) */}
      <ConspiracyIntelModal
        isOpen={conspiraciesOpen}
        onClose={() => setConspiraciesOpen(false)}
        onSelectCountry={handleSelectCountry}
        onFocusCoordinates={(lat, lng) => {
          handleSelectLocation({ name: 'Covert Operational Theater', lat, lng });
          setConspiraciesOpen(false);
        }}
      />

      {/* 22. Comprehensive World History Timeline & Soviet Republics Modal */}
      <HistoricalTimelineModal
        isOpen={historyTimelineOpen}
        onClose={() => setHistoryTimelineOpen(false)}
        onSelectCountry={(cCode) => {
          handleSelectCountry(cCode);
          setHistoryTimelineOpen(false);
        }}
        onLocateCoords={(lat, lng, locName) => {
          handleSelectLocation({ name: locName || 'Historical Epicenter', lat, lng });
          setHistoryTimelineOpen(false);
        }}
        onSelectConcept={(cId) => setSelectedConcept(cId)}
        onSelectAgreement={(agrId) => setSelectedAgreement(agrId)}
      />

      {/* 23. Executive PDB / SitRep Export Briefing Modal */}
      <BriefingExportModal
        isOpen={sitrepModalOpen}
        onClose={() => setSitrepModalOpen(false)}
        country={sitrepContext || selectedCountry}
        scenario={activeScenario}
      />

      {/* 24. Standalone Wargaming Modal (When in HUD Mode) */}
      {!workstationMode && wargameModalOpen && (
        <WargameScenarioModal
          isOpen={wargameModalOpen}
          onClose={() => setWargameModalOpen(false)}
          onDeployToGlobe={handleDeployWargameToGlobe}
          onOpenSitrep={handleOpenSitrep}
        />
      )}

      {/* 25. Standalone Tactical Flashpoint Focus Modal (When in HUD Mode) */}
      {!workstationMode && flashpointsModalOpen && (
        <FlashpointFocusModal
          isOpen={flashpointsModalOpen}
          onClose={() => setFlashpointsModalOpen(false)}
          onFlyToFlashpoint={handleFlyToFlashpoint}
        />
      )}

      {/* 26. Standalone OSINT Sensor Tracker Panel (When in HUD Mode) */}
      {!workstationMode && sensorsModalOpen && (
        <SensorTrackerPanel
          isOpen={sensorsModalOpen}
          onClose={() => setSensorsModalOpen(false)}
          onFlyToSensor={handleFlyToSensor}
        />
      )}

      {/* 27. Standalone Crisis Watchlist Modal (When in HUD Mode) */}
      {!workstationMode && watchlistModalOpen && (
        <CrisisWatchlist
          isOpen={watchlistModalOpen}
          onClose={() => setWatchlistModalOpen(false)}
          onFlyToTarget={(coords, name) => handleSelectLocation({ name, lat: coords.lat, lng: coords.lng })}
          onSelectCountry={handleSelectCountry}
        />
      )}

      {/* 28. Collapsible Intelligence Legend */}
      <IntelligenceLegend />
    </div>
  );
}
