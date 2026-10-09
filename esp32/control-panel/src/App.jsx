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

import { GLOBAL_REGIONS, COUNTRIES } from './data/geointelData';
import { COUNTRY_DOSSIERS, getCountryDossier } from './data/geointelCountryDossiers';
import { getMaritimeEntity } from './data/geointelMaritime';

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
    events: true,
    tensions: true,
    military: true,
    diplomacy: true,
    strategic: true,
    relations: true,
    trade: true,
    maritime: true
  });

  // Modals
  const [searchOpen, setSearchOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [isLiveFeedOpen, setIsLiveFeedOpen] = useState(false);
  const [conspiraciesOpen, setConspiraciesOpen] = useState(false);

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
        if (selectedConcept) setSelectedConcept(null);
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
      } else if (e.key.toLowerCase() === 'h' || e.key === '?') {
        setHelpOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    searchOpen, helpOpen, isLiveFeedOpen, selectedConcept, selectedAgreement, 
    selectedMilitarySystem, selectedRelationship, activeChain, 
    whyExplainerItem, glossaryOpen
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
        activeLayers={activeLayers}
        currentYear={currentYear}
        onCountrySelect={handleSelectCountry}
        onSelectMaritimeEntity={handleSelectMaritimeEntity}
        onEventSelect={handleSelectEvent}
        onLocationSelect={handleSelectLocation}
        onCapitalSelect={setSelectedCapital}
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
        onOpenSearch={() => setSearchOpen(true)}
        onOpenHelp={() => setHelpOpen(true)}
        onOpenGlossary={() => setGlossaryOpen(true)}
        onOpenChains={() => setActiveChain('CHAIN_BRAHMOS_AUTONOMY')}
        onOpenLiveFeed={() => setIsLiveFeedOpen(prev => !prev)}
        isLiveFeedOpen={isLiveFeedOpen}
        onOpenConspiracies={() => setConspiraciesOpen(true)}
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

      {/* 7. Contextual Country Intelligence Dossier Panel (Canonical 11 Sections) */}
      {selectedCountry && (
        <CountryIntelligencePanel
          country={selectedCountry}
          intelLevel={intelLevel}
          onClose={() => {
            setSelectedCountry(null);
            setIsRotating(true);
          }}
          onResetGlobe={handleResetGlobe}
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

      {/* 8. Geographic & Maritime Intelligence Panel (Oceans, Seas, Chokepoints, Ports) */}
      {selectedMaritimeEntity && (
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

      {/* 22. Collapsible Intelligence Legend */}
      <IntelligenceLegend />
    </div>
  );
}
