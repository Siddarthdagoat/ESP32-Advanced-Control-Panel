import React, { useState, useEffect, useCallback, useMemo } from 'react';
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

// Critical Global Alerts, Hot News, AI Agent & Educational Learning Path
import AlertQuickPanel from './components/ui/AlertQuickPanel';
import HotNewsSection from './components/ui/HotNewsSection';
import GeopoliticalAgentModal from './components/ui/GeopoliticalAgentModal';
import LearningPathModal from './components/ui/LearningPathModal';
import GlobalBriefingModal from './components/ui/GlobalBriefingModal';
import { useIntelligenceFeed } from './services/intelligenceFeed';

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
import LandingPage from './components/ui/LandingPage';

import { GLOBAL_REGIONS, COUNTRIES } from './data/geointelData';
import { COUNTRY_DOSSIERS, getCountryDossier } from './data/geointelCountryDossiers';
import { getMaritimeEntity } from './data/geointelMaritime';
import { WARGAME_SCENARIOS } from './data/geointelScenarios';
import { STRATEGIC_FLASHPOINTS } from './data/geointelFlashpoints';

export default function App() {
  // Landing Page View vs Main Application - Both live seamlessly under the EXACT SAME URL
  const [showLanding, setShowLanding] = useState(() => {
    if (typeof window !== 'undefined') {
      // Clean up any historical /app path to ensure the user stays on the single unified URL
      if (window.location.pathname === '/app' || window.location.pathname.startsWith('/app/')) {
        try {
          window.history.replaceState(null, '', '/' + (window.location.search || ''));
        } catch (_) {}
      }
    }
    return true;
  });

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
  const [navStack, setNavStack] = useState([]);

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

  // Alert Priority Filters (Feature 1: Critical & High enabled by default, Medium & Low filterable)
  const [alertPriorityFilters, setAlertPriorityFilters] = useState({
    critical: true,
    high: true,
    medium: false,
    low: false
  });

  // Selected quick alert for concise immediate panel vs full event dossier
  const [quickAlertEvent, setQuickAlertEvent] = useState(null);

  // Modals for Features 2, 3, 4
  const [hotNewsOpen, setHotNewsOpen] = useState(false);
  const [agentModalOpen, setAgentModalOpen] = useState(false);
  const [agentInitialEvent, setAgentInitialEvent] = useState(null);
  const [agentInitialQuery, setAgentInitialQuery] = useState(null);
  const [learningPathOpen, setLearningPathOpen] = useState(false);
  const [briefingModalOpen, setBriefingModalOpen] = useState(false);

  // Live intelligence feed for alert priority counts
  const { events: liveEventsList } = useIntelligenceFeed();
  const alertCounts = useMemo(() => {
    const counts = { critical: 0, high: 0, medium: 0, low: 0 };
    (liveEventsList || []).forEach(e => {
      const p = (e.priority || 'medium').toLowerCase();
      if (counts[p] !== undefined) counts[p]++;
    });
    return counts;
  }, [liveEventsList]);

  const handleToggleAlertPriority = (priorityKey) => {
    setAlertPriorityFilters(prev => ({
      ...prev,
      [priorityKey]: !prev[priorityKey]
    }));
  };

  const handleQuickFilterCritical = () => {
    setAlertPriorityFilters({
      critical: true,
      high: false,
      medium: false,
      low: false
    });
  };

  const handleExplore = useCallback(() => {
    setShowLanding(false);
  }, []);

  const handleReturnToLanding = useCallback(() => {
    setShowLanding(true);
  }, []);

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

  // Push active context onto breadcrumb history stack before transitioning
  const pushCurrentToStack = (incomingType, incomingId) => {
    if (selectedEvent && !(incomingType === 'event' && selectedEvent.id === incomingId)) {
      setNavStack(prev => {
        if (prev.length > 0 && prev[prev.length - 1].type === 'event' && prev[prev.length - 1].data?.id === selectedEvent.id) {
          return prev;
        }
        return [...prev.slice(-19), {
          type: 'event',
          data: selectedEvent,
          label: selectedEvent.title || selectedEvent.id
        }];
      });
    } else if (selectedCountry && !(incomingType === 'country' && (selectedCountry.id === incomingId || selectedCountry.ISO_A3 === incomingId))) {
      setNavStack(prev => {
        if (prev.length > 0 && prev[prev.length - 1].type === 'country' && prev[prev.length - 1].data?.id === selectedCountry.id) {
          return prev;
        }
        return [...prev.slice(-19), {
          type: 'country',
          data: selectedCountry,
          label: selectedCountry.name || selectedCountry.id
        }];
      });
    } else if (selectedMaritimeEntity && !(incomingType === 'maritime' && selectedMaritimeEntity.id === incomingId)) {
      setNavStack(prev => {
        if (prev.length > 0 && prev[prev.length - 1].type === 'maritime' && prev[prev.length - 1].data?.id === selectedMaritimeEntity.id) {
          return prev;
        }
        return [...prev.slice(-19), {
          type: 'maritime',
          data: selectedMaritimeEntity,
          label: selectedMaritimeEntity.name || selectedMaritimeEntity.id
        }];
      });
    }
  };

  const handlePopNav = () => {
    if (navStack.length === 0) return;
    const previous = navStack[navStack.length - 1];
    setNavStack(prev => prev.slice(0, -1));

    setSelectedEvent(null);
    setSelectedCountry(null);
    setSelectedMaritimeEntity(null);
    setSelectedLocation(null);
    setSelectedCapital(null);

    if (previous.type === 'event') {
      setSelectedEvent(previous.data);
    } else if (previous.type === 'country') {
      setSelectedCountry(previous.data);
    } else if (previous.type === 'maritime') {
      setSelectedMaritimeEntity(previous.data);
    }
  };

  // Handle Country Selection
  const handleSelectCountry = (country) => {
    handleUserInteraction();
    let countryObj = typeof country === 'string' ? findCountry(country) : country;
    const targetId = countryObj ? (countryObj.id || countryObj.ISO_A3 || countryObj.isoCode) : country;
    pushCurrentToStack('country', targetId);
    setSelectedEvent(null);
    setQuickAlertEvent(null);
    setSelectedLocation(null);
    setSelectedMaritimeEntity(null);
    setSelectedCapital(null);
    if (countryObj) {
      const iso3 = countryObj.id || countryObj.ISO_A3 || countryObj.isoCode;
      const fullDossier = getCountryDossier(iso3, countryObj);
      setSelectedCountry(fullDossier);
      setIsRotating(false);
      setWorkstationTab('dossier');
    }
  };

  // Handle Event Selection (Displays Concise Interactive Alert Panel by default)
  const handleSelectEvent = (event) => {
    handleUserInteraction();
    pushCurrentToStack('event', event?.id);
    setSelectedCountry(null);
    setSelectedLocation(null);
    setSelectedMaritimeEntity(null);
    setSelectedEvent(null);
    setQuickAlertEvent(event);
    setIsRotating(false);
  };

  // Open Complete Event Dossier & Historical Context (Full Overlay)
  const handleOpenFullEventDossier = (event) => {
    setQuickAlertEvent(null);
    setSelectedEvent(event);
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
    const resolved = typeof entity === 'string' ? getMaritimeEntity(entity) : entity;
    pushCurrentToStack('maritime', resolved?.id || entity);
    setSelectedCountry(null);
    setSelectedEvent(null);
    setSelectedLocation(null);
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
    setQuickAlertEvent(null);
    setSelectedLocation(null);
    setSelectedMaritimeEntity(null);
    setSelectedCapital(null);
    setActiveScenario(null);
    setTacticalFlashpoint(null);
    setNavStack([]);
    setResetGlobeCounter(prev => prev + 1);
    setIsRotating(true);
  };

  // Deselect All / Close Active Panels
  const handleDeselectAll = () => {
    setSelectedCountry(null);
    setSelectedMaritimeEntity(null);
    setSelectedEvent(null);
    setQuickAlertEvent(null);
    setSelectedLocation(null);
    setSelectedRegion(null);
    setSelectedConcept(null);
    setSelectedAgreement(null);
    setSelectedMilitarySystem(null);
    setSelectedRelationship(null);
    setActiveChain(null);
    setWhyExplainerItem(null);
    setNavStack([]);
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
      // Don't trigger if landing page is active or user is typing in search input
      if (showLanding) return;
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.key === '/') {
        e.preventDefault();
        setSearchOpen(true);
      } else if (e.key === 'Escape') {
        if (quickAlertEvent) setQuickAlertEvent(null);
        else if (hotNewsOpen) setHotNewsOpen(false);
        else if (agentModalOpen) setAgentModalOpen(false);
        else if (learningPathOpen) setLearningPathOpen(false);
        else if (briefingModalOpen) setBriefingModalOpen(false);
        else if (sitrepModalOpen) setSitrepModalOpen(false);
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
        if (['input', 'textarea'].includes(document.activeElement?.tagName?.toLowerCase())) return;
        e.preventDefault();
        setIsRotating(prev => !prev);
      } else if (['input', 'textarea', 'select'].includes(document.activeElement?.tagName?.toLowerCase())) {
        return;
      } else if (e.key.toLowerCase() === 'n') {
        setHotNewsOpen(prev => !prev);
      } else if (e.key.toLowerCase() === 'a') {
        setAgentModalOpen(prev => !prev);
      } else if (e.key.toLowerCase() === 'b') {
        setBriefingModalOpen(prev => !prev);
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
    showLanding, searchOpen, helpOpen, isLiveFeedOpen, selectedConcept, selectedAgreement, 
    selectedMilitarySystem, selectedRelationship, activeChain, 
    whyExplainerItem, glossaryOpen, sitrepModalOpen, wargameModalOpen, 
    flashpointsModalOpen, sensorsModalOpen, watchlistModalOpen,
    quickAlertEvent, hotNewsOpen, agentModalOpen, learningPathOpen, briefingModalOpen
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
        alertPriorityFilters={alertPriorityFilters}
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
        isPaused={showLanding}
      />

      {/* 2. Top Header & Operational Telemetry with Educational Shortcuts */}
      {!showLanding && (
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
          onOpenHotNews={() => setHotNewsOpen(true)}
          onOpenAgent={() => {
            setAgentInitialEvent(null);
            setAgentInitialQuery(null);
            setAgentModalOpen(true);
          }}
          onOpenLearn={() => setLearningPathOpen(true)}
          onOpenBriefing={() => setBriefingModalOpen(true)}
          onOpenLanding={handleReturnToLanding}
          selectedRegion={selectedRegion}
          onSelectRegion={handleSelectRegion}
        />
      )}

      {/* Cinematic Looped Video Landing Page Experience */}
      {showLanding && (
        <LandingPage onExplore={handleExplore} />
      )}

      {/* 3. Subtle Landing Experience Interaction Hints (Auto-dismisses) */}
      {!showLanding && (
        <InteractionHints
          visible={!hasInteracted && !selectedCountry && !selectedMaritimeEntity && !selectedEvent && !selectedLocation}
          onDismiss={() => setHasInteracted(true)}
        />
      )}

      {/* 4. Floating Intelligence Layer Controls */}
      {!showLanding && (
        <LayerControls
          activeLayers={activeLayers}
          onToggleLayer={handleToggleLayer}
          mapMode={mapMode}
          onMapModeChange={setMapMode}
          alertPriorityFilters={alertPriorityFilters}
          onToggleAlertPriority={handleToggleAlertPriority}
          onQuickFilterCritical={handleQuickFilterCritical}
          alertCounts={alertCounts}
        />
      )}

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
            setNavStack([]);
            setIsRotating(true);
          }}
          onBack={navStack.length > 0 ? handlePopNav : null}
          backLabel={navStack.length > 0 ? navStack[navStack.length - 1].label : null}
          onResetGlobe={handleResetGlobe}
          onOpenSitrep={handleOpenSitrep}
          onSelectRelationship={(pairId) => setSelectedRelationship(pairId)}
          onSelectConcept={(cId) => setSelectedConcept(cId)}
          onSelectAgreement={(agrId) => setSelectedAgreement(agrId)}
          onSelectMilitarySystem={(sysId) => setSelectedMilitarySystem(sysId)}
          onSelectCountry={handleSelectCountry}
          onSelectLocation={handleSelectLocation}
          onSelectEvent={handleSelectEvent}
          onSelectMaritimeEntity={handleSelectMaritimeEntity}
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
            setNavStack([]);
            setIsRotating(true);
          }}
          onBack={navStack.length > 0 ? handlePopNav : null}
          backLabel={navStack.length > 0 ? navStack[navStack.length - 1].label : null}
          onSelectMaritimeEntity={handleSelectMaritimeEntity}
          onSelectCountry={handleSelectCountry}
          onSelectConcept={(cId) => setSelectedConcept(cId)}
        />
      )}

      {/* Interactive Concise Geopolitical Alert Panel (Feature 1) */}
      {quickAlertEvent && (
        <AlertQuickPanel
          event={quickAlertEvent}
          onClose={() => setQuickAlertEvent(null)}
          onOpenFullDossier={(evt) => handleOpenFullEventDossier(evt)}
          onAskAi={(evt) => {
            setQuickAlertEvent(null);
            setAgentInitialEvent(evt);
            setAgentModalOpen(true);
          }}
          onFocusCoordinates={(lat, lng, label) => handleSelectLocation({ name: label || 'Tactical Alert Focus', lat, lng })}
          onSelectCountry={handleSelectCountry}
          onSelectConcept={(cId) => setSelectedConcept(cId)}
          onSelectAgreement={(agrId) => setSelectedAgreement(agrId)}
        />
      )}

      {/* 9. Contextual Event Intelligence Overlay */}
      {selectedEvent && (
        <EventOverlay
          event={selectedEvent}
          intelLevel={intelLevel}
          onClose={() => {
            setSelectedEvent(null);
            setNavStack([]);
          }}
          onBack={navStack.length > 0 ? handlePopNav : null}
          backLabel={navStack.length > 0 ? navStack[navStack.length - 1].label : null}
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
      {!showLanding && <HoverTooltip hoverData={hoverData} />}


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
          onBack={navStack.length > 0 ? handlePopNav : null}
          backLabel={navStack.length > 0 ? navStack[navStack.length - 1].label : null}
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

      {/* Dedicated Hot News & Real-Time Wire Modal (Feature 2) */}
      <HotNewsSection
        isOpen={hotNewsOpen}
        onClose={() => setHotNewsOpen(false)}
        onShowOnGlobe={(lat, lng, label) => {
          handleSelectLocation({ name: label || 'Strategic Hot News Theater', lat, lng });
        }}
        onSelectCountry={handleSelectCountry}
        onOpenTimeline={() => {
          setHotNewsOpen(false);
          setActiveMode('timeline');
        }}
        onAskAi={(evt) => {
          setHotNewsOpen(false);
          setAgentInitialEvent(evt);
          setAgentModalOpen(true);
        }}
        onOpenEventDossier={(evt) => {
          setHotNewsOpen(false);
          handleOpenFullEventDossier(evt);
        }}
      />

      {/* Specialized Geopolitical AI Agent (Dual Mode) Modal (Feature 3) */}
      <GeopoliticalAgentModal
        isOpen={agentModalOpen}
        onClose={() => {
          setAgentModalOpen(false);
          setAgentInitialEvent(null);
          setAgentInitialQuery(null);
        }}
        initialEvent={agentInitialEvent}
        initialQuery={agentInitialQuery}
        onShowOnGlobe={(lat, lng, label) => {
          handleSelectLocation({ name: label || 'AI Agent Focal Point', lat, lng });
        }}
        onSelectCountry={handleSelectCountry}
        onOpenTimeline={() => {
          setAgentModalOpen(false);
          setActiveMode('timeline');
        }}
        onSelectConcept={(cId) => {
          setAgentModalOpen(false);
          setSelectedConcept(cId);
        }}
        onSelectAgreement={(agrId) => {
          setAgentModalOpen(false);
          setSelectedAgreement(agrId);
        }}
      />

      {/* 8-Lesson Educational Learning Path Modal (Feature 4) */}
      <LearningPathModal
        isOpen={learningPathOpen}
        onClose={() => setLearningPathOpen(false)}
        onExploreOnGlobe={(lat, lng, label) => {
          setLearningPathOpen(false);
          handleSelectLocation({ name: label || 'Geopolitical Case Study', lat, lng });
        }}
        onSelectCountry={(countryCode) => {
          setLearningPathOpen(false);
          handleSelectCountry(countryCode);
        }}
      />

      {/* Global Executive Briefing (24h/7d/30d) Modal (Feature 4) */}
      <GlobalBriefingModal
        isOpen={briefingModalOpen}
        onClose={() => setBriefingModalOpen(false)}
        onShowOnGlobe={(lat, lng, label) => {
          handleSelectLocation({ name: label || 'Executive SitRep Theater', lat, lng });
        }}
        onSelectCountry={handleSelectCountry}
        onAskAi={(evt) => {
          setBriefingModalOpen(false);
          setAgentInitialEvent(evt);
          setAgentModalOpen(true);
        }}
        onOpenEventDossier={(evt) => {
          setBriefingModalOpen(false);
          handleOpenFullEventDossier(evt);
        }}
      />

      {/* 28. Collapsible Intelligence Legend */}
      {!showLanding && <IntelligenceLegend />}
    </div>
  );
}
