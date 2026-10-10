import React, { useState } from 'react';
import { 
  Play, 
  RotateCcw, 
  ShieldAlert, 
  TrendingUp, 
  AlertTriangle, 
  Layers, 
  Crosshair, 
  FileText, 
  Globe2, 
  ChevronRight, 
  X,
  Gauge
} from 'lucide-react';
import { WARGAME_SCENARIOS, KENT_PROBABILITY_SCALE } from '../../data/geointelScenarios';

export default function WargameScenarioModal({
  isOpen = true,
  onClose,
  isDocked = false,
  activeScenarioId = 'SCENARIO_TAIWAN_BLOCKADE',
  onSelectScenario,
  onDeployToGlobe,
  onOpenSitrep
}) {
  const [selectedId, setSelectedId] = useState(activeScenarioId || 'SCENARIO_TAIWAN_BLOCKADE');
  const [currentPhaseIdx, setCurrentPhaseIdx] = useState(1);

  const scenario = WARGAME_SCENARIOS.find(s => s.id === selectedId) || WARGAME_SCENARIOS[0];
  const phase = scenario.phases[currentPhaseIdx] || scenario.phases[0];

  const handleScenarioChange = (id) => {
    setSelectedId(id);
    setCurrentPhaseIdx(0);
    if (onSelectScenario) onSelectScenario(id);
  };

  const handleDeploy = () => {
    if (onDeployToGlobe) {
      onDeployToGlobe(scenario, currentPhaseIdx);
    }
  };

  const content = (
    <div className={`flex flex-col h-full text-white font-mono ${isDocked ? 'p-4' : 'p-6'}`}>
      
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#222222]">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-white" />
          <span className="text-xs font-bold tracking-wider uppercase text-white">
            "WHAT-IF?" WARGAME & CRISIS SIMULATOR
          </span>
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-[#CCCCCC] border border-white/20 font-bold">
            ESCALATION ENGINE
          </span>
        </div>

        {!isDocked && onClose && (
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#888888] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Scenario Selector Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-4">
        {WARGAME_SCENARIOS.map(sc => {
          const isSelected = sc.id === scenario.id;
          return (
            <button
              key={sc.id}
              onClick={() => handleScenarioChange(sc.id)}
              className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                isSelected
                  ? 'bg-white text-black border-white shadow-lg font-bold'
                  : 'bg-[#111111] text-[#999999] border-[#222222] hover:text-white hover:border-white/40'
              }`}
            >
              <div className="text-[9px] uppercase tracking-wider mb-0.5 opacity-80">
                {sc.code}
              </div>
              <div className="text-[11px] leading-tight line-clamp-2">
                {sc.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Crisis Dossier Area */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-1">
        
        {/* Scenario Overview Banner */}
        <div className="p-4 rounded-xl bg-[#121212] border border-[#222222]">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span className="text-sm font-bold text-white tracking-wide">
              {scenario.title}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] px-2 py-0.5 rounded bg-white text-black font-bold">
                {scenario.threatLevel}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#1C1C1C] border border-[#333333] text-[#CCCCCC]">
                {scenario.theater}
              </span>
            </div>
          </div>
          <p className="text-xs text-[#B0B0B0] leading-relaxed">
            {scenario.summary}
          </p>

          {/* Strategic Actors */}
          <div className="mt-3 pt-3 border-t border-[#1F1F1F] flex flex-wrap gap-2">
            <span className="text-[10px] text-[#888888] py-0.5">KEY ACTORS:</span>
            {scenario.strategicActors.map(act => (
              <span 
                key={act.code}
                className="text-[10px] px-2 py-0.5 rounded bg-[#181818] border border-[#2A2A2A] text-white"
                title={`${act.role}: ${act.posture}`}
              >
                ◈ {act.code} ({act.role})
              </span>
            ))}
          </div>
        </div>

        {/* Interactive Escalation Scrubber */}
        <div className="p-4 rounded-xl bg-[#141414] border border-[#262626]">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Gauge className="w-3.5 h-3.5 text-white" />
              <span className="text-xs font-bold text-white tracking-wider">
                ESCALATION TIMELINE & PHASE SCRUBBER
              </span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-white border border-white/20 font-bold">
              {phase.timeline}
            </span>
          </div>

          {/* Scrubber slider */}
          <div className="space-y-2">
            <input
              type="range"
              min={0}
              max={scenario.phases.length - 1}
              step={1}
              value={currentPhaseIdx}
              onChange={(e) => setCurrentPhaseIdx(parseInt(e.target.value, 10))}
              className="w-full h-2 bg-[#222222] rounded-lg appearance-none cursor-pointer accent-white"
            />

            <div className="flex justify-between items-center text-[10px] text-[#888888]">
              {scenario.phases.map((ph, idx) => (
                <button
                  key={ph.phase}
                  onClick={() => setCurrentPhaseIdx(idx)}
                  className={`transition-colors cursor-pointer ${
                    idx === currentPhaseIdx ? 'text-white font-bold underline' : 'hover:text-white'
                  }`}
                >
                  P{idx}: {ph.name.split(':')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Active Phase Description & Estimative Rigor */}
          <div className="mt-4 p-3 rounded-lg bg-[#0E0E0E] border border-[#222222] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white">
                {phase.name}
              </span>
              <span className="text-[9px] px-2 py-0.5 rounded bg-white/10 text-[#CCCCCC] border border-white/15">
                {phase.timeline}
              </span>
            </div>
            <p className="text-[11px] text-[#C0C0C0] leading-relaxed">
              {phase.description}
            </p>
            <div className="text-[10px] text-white bg-white/5 p-2 rounded border border-white/10 flex items-start gap-1.5">
              <span className="font-bold shrink-0">◈ SHERMAN KENT ESTIMATIVE RATING:</span>
              <span>{phase.kentAssessment}</span>
            </div>
          </div>
        </div>

        {/* Cascading Economic Shock Telemetry */}
        <div className="p-4 rounded-xl bg-[#121212] border border-[#222222]">
          <span className="text-xs font-bold text-white tracking-wider block mb-3">
            CASCADING GLOBAL ECONOMIC CASUALTIES
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            <div className="p-2.5 rounded-lg bg-[#181818] border border-[#262626]">
              <span className="text-[9px] text-[#888888] block">BRENT CRUDE</span>
              <span className="text-sm font-bold text-white">{phase.metrics.crudeOilBbl}</span>
              <span className="text-[9px] text-[#AAAAAA] block mt-0.5">{phase.metrics.bblDelta}</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#181818] border border-[#262626]">
              <span className="text-[9px] text-[#888888] block">CONTAINER FREIGHT</span>
              <span className="text-sm font-bold text-white">{phase.metrics.containerFreightTEU}</span>
              <span className="text-[9px] text-[#AAAAAA] block mt-0.5">{phase.metrics.freightDelta}</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#181818] border border-[#262626]">
              <span className="text-[9px] text-[#888888] block">SEMICONDUCTOR DELAY</span>
              <span className="text-sm font-bold text-white">{phase.metrics.semiconductorDisruption}</span>
              <span className="text-[9px] text-[#AAAAAA] block mt-0.5">Critical Supply</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#181818] border border-[#262626]">
              <span className="text-[9px] text-[#888888] block">EST. GDP IMPACT</span>
              <span className="text-sm font-bold text-white">{phase.metrics.gdpLossBillion}</span>
              <span className="text-[9px] text-[#AAAAAA] block mt-0.5">Global Loss</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#181818] border border-[#262626]">
              <span className="text-[9px] text-[#888888] block">SPR BUFFER</span>
              <span className="text-sm font-bold text-white">{phase.metrics.sprDaysRemaining} D</span>
              <span className="text-[9px] text-[#AAAAAA] block mt-0.5">IEA Reserves</span>
            </div>
          </div>

          {/* Cascading Consequences Bullet Points */}
          <div className="mt-3 space-y-1.5">
            {phase.cascades.map((casc, cIdx) => (
              <div key={cIdx} className="text-[11px] text-[#B0B0B0] flex items-start gap-2">
                <span className="text-white shrink-0 mt-0.5">■</span>
                <span>{casc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Diverted Maritime SLOCs */}
        <div className="p-4 rounded-xl bg-[#121212] border border-[#222222]">
          <span className="text-xs font-bold text-white tracking-wider block mb-2">
            DIVERTED SEA LINES OF COMMUNICATION (SLOCs)
          </span>
          <div className="space-y-2">
            {scenario.reroutedRoutes.map((route, rIdx) => (
              <div 
                key={rIdx}
                className="p-2.5 rounded-lg bg-[#161616] border border-[#282828] flex items-center justify-between text-xs"
              >
                <div>
                  <span className="font-bold text-white block">{route.name}</span>
                  <span className="text-[10px] text-[#888888]">Bypassing: {route.bypassedChokepoint}</span>
                </div>
                <div className="text-right">
                  <span className="px-2 py-0.5 rounded bg-white text-black font-bold text-[10px]">
                    +{route.addedDays} DAYS
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Action Footer Bar */}
      <div className="mt-4 pt-3 border-t border-[#222222] flex items-center justify-between gap-3">
        <button
          onClick={() => setCurrentPhaseIdx(0)}
          className="px-3 py-2 rounded-lg border border-[#333333] hover:bg-white/10 text-xs font-mono text-[#888888] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
          title="Reset to Baseline Phase 0"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>RESET</span>
        </button>

        <div className="flex items-center gap-2">
          {onOpenSitrep && (
            <button
              onClick={() => onOpenSitrep(scenario)}
              className="px-3 py-2 rounded-lg border border-white/20 hover:bg-white/10 text-xs font-mono text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>EXPORT SITREP</span>
            </button>
          )}

          <button
            onClick={handleDeploy}
            className="px-4 py-2 rounded-lg bg-white text-black font-bold text-xs font-mono flex items-center gap-1.5 hover:bg-[#E0E0E0] shadow-lg transition-colors cursor-pointer"
          >
            <Globe2 className="w-3.5 h-3.5" />
            <span>DEPLOY WARGAME TO GLOBE</span>
          </button>
        </div>
      </div>

    </div>
  );

  if (isDocked) {
    return content;
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-[#090909] border border-[#222222] shadow-2xl overflow-hidden">
        {content}
      </div>
    </div>
  );
}
