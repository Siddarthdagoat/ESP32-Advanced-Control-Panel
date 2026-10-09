import React, { useState } from 'react';
import { getGeopoliticalTerm } from '../../data/geopoliticalTerms';

/**
 * GeopoliticalTerm
 * Subtle, non-intrusive inline reference component for specialized terminology.
 * Displays subtle dotted underline, discreet info glyph, hover tooltip, and interactive click handler.
 */
export default function GeopoliticalTerm({
  termId,
  children,
  contextEntity = null,
  onSelectTerm,
  className = ''
}) {
  const [hovered, setHovered] = useState(false);
  const termData = getGeopoliticalTerm(termId);
  const displayText = children || termData?.name || termId;
  const tooltipText = termData?.name 
    ? `${termData.name} — click to learn more`
    : `${displayText} — click to learn more`;

  const handleClick = (e) => {
    e.stopPropagation();
    if (onSelectTerm) {
      onSelectTerm(termData?.id || termId, contextEntity);
    }
  };

  return (
    <span
      className={`relative inline-block align-baseline group ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        type="button"
        onClick={handleClick}
        title={tooltipText}
        className="inline-flex items-baseline text-left font-medium text-cyan-200/90 hover:text-white border-b border-dotted border-cyan-500/50 hover:border-cyan-300 hover:bg-cyan-950/40 rounded-xs px-0.5 transition-all duration-150 cursor-pointer select-text align-baseline"
      >
        <span>{displayText}</span>
        <span className="inline-block text-[9px] text-cyan-400/60 group-hover:text-cyan-300 ml-0.5 select-none font-mono leading-none">
          ⓘ
        </span>
      </button>

      {/* Sleek Floating Hover Tooltip */}
      {hovered && (
        <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-1 rounded bg-slate-900/95 border border-cyan-500/30 text-white text-[10px] font-mono whitespace-nowrap shadow-xl z-50 animate-fade-in backdrop-blur-md">
          <span className="text-cyan-400 font-bold mr-1">{termData?.name || displayText}</span>
          <span className="text-slate-400">— click to learn more</span>
        </span>
      )}
    </span>
  );
}
