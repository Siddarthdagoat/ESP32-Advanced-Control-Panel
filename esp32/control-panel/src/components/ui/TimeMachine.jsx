import React from 'react';
import { History, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { HISTORICAL_ERAS } from '../../data/geointelData';

export default function TimeMachine({
  currentYear,
  onYearChange,
  onClose
}) {
  const currentIndex = HISTORICAL_ERAS.findIndex(e => e.year === currentYear);
  const safeIndex = currentIndex >= 0 ? currentIndex : HISTORICAL_ERAS.length - 1;
  const currentEra = HISTORICAL_ERAS[safeIndex] || HISTORICAL_ERAS[HISTORICAL_ERAS.length - 1];

  const handleSliderChange = (e) => {
    const idx = parseInt(e.target.value, 10);
    if (HISTORICAL_ERAS[idx]) {
      onYearChange(HISTORICAL_ERAS[idx].year);
    }
  };

  const handlePrev = () => {
    if (safeIndex > 0) {
      onYearChange(HISTORICAL_ERAS[safeIndex - 1].year);
    }
  };

  const handleNext = () => {
    if (safeIndex < HISTORICAL_ERAS.length - 1) {
      onYearChange(HISTORICAL_ERAS[safeIndex + 1].year);
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-25 pointer-events-auto w-[92%] max-w-2xl animate-fade-in">
      <div className="rounded-2xl border border-[#1A1A1A] p-4 shadow-2xl backdrop-blur-2xl bg-[#080808]/98">
        
        {/* Top Era Header */}
        <div className="flex items-center justify-between gap-3 mb-2.5">
          <div className="flex items-center gap-2">
            <History className="w-4 h-4 text-white" />
            <span className="text-xs font-mono font-bold tracking-wider text-white">
              GEOPOLITICAL TIME MACHINE
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-black font-bold">
              {currentEra.year}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              disabled={safeIndex === 0}
              className="p-1 rounded hover:bg-white/10 text-[#888888] hover:text-white disabled:opacity-30 cursor-pointer"
              title="Previous Era"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              disabled={safeIndex === HISTORICAL_ERAS.length - 1}
              className="p-1 rounded hover:bg-white/10 text-[#888888] hover:text-white disabled:opacity-30 cursor-pointer"
              title="Next Era"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded hover:bg-white/10 text-[#888888] hover:text-white cursor-pointer ml-1"
              title="Close Timeline"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Era Description */}
        <div className="text-[11px] text-[#BDBDBD] mb-3 bg-[#111111] p-2.5 rounded-lg border border-[#1A1A1A] flex items-start gap-2">
          <span className="text-white font-mono font-bold shrink-0">{currentEra.label.split(':')[0]}:</span>
          <span className="leading-snug">{currentEra.brief}</span>
        </div>

        {/* Interactive Scrub Slider */}
        <div className="relative px-2 py-1">
          <div className="flex justify-between text-[9px] font-mono text-[#888888] mb-1.5 tracking-wider">
            <span>PAST ({HISTORICAL_ERAS[0]?.year || '1914'})</span>
            <span className="text-white font-bold">SCRUB CHRONOLOGY</span>
            <span>PRESENT (2026)</span>
          </div>

          <input
            type="range"
            min={0}
            max={HISTORICAL_ERAS.length - 1}
            step={1}
            value={safeIndex}
            onChange={handleSliderChange}
            className="w-full h-1.5 bg-[#1A1A1A] rounded-lg appearance-none cursor-pointer accent-white"
          />

          {/* Milestone markers */}
          <div className="flex justify-between items-center mt-2 px-1">
            {HISTORICAL_ERAS.map((era, idx) => (
              <button
                key={era.year}
                onClick={() => onYearChange(era.year)}
                className={`text-[9px] sm:text-[10px] font-mono transition-colors cursor-pointer ${
                  idx === safeIndex
                    ? 'text-white font-bold scale-110'
                    : 'text-[#888888] hover:text-white'
                }`}
              >
                {era.year}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
