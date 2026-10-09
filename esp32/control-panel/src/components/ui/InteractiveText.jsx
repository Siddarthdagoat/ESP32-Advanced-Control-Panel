import React from 'react';
import { GEOPOLITICAL_TERMS, getGeopoliticalTerm } from '../../data/geopoliticalTerms';
import GeopoliticalTerm from './GeopoliticalTerm';

/**
 * Enhanced InteractiveText component
 * Automatically detects both explicit bracketed references like [NUCLEAR TRIAD]
 * and specialized geopolitical terminology in plain text.
 * Applies subtle inline styling, hover tooltips, and click-to-learn cards.
 * Prevents over-linking by matching longer terms first and limiting to 1 match per unique term per block.
 */

// Pre-sort all known terms and aliases by descending length for greedy matching
const TERM_MATCH_LIST = (() => {
  const list = [];
  const seenPhrases = new Set();

  for (const term of Object.values(GEOPOLITICAL_TERMS)) {
    // Add primary name
    if (!seenPhrases.has(term.name.toLowerCase())) {
      list.push({ phrase: term.name, termId: term.id });
      seenPhrases.add(term.name.toLowerCase());
    }
    // Add aliases
    if (term.aliases) {
      for (const alias of term.aliases) {
        if (!seenPhrases.has(alias.toLowerCase()) && alias.length > 2) {
          list.push({ phrase: alias, termId: term.id });
          seenPhrases.add(alias.toLowerCase());
        }
      }
    }
  }

  // Sort descending by character length so "Nuclear Triad" matches before "Triad"
  return list.sort((a, b) => b.phrase.length - a.phrase.length);
})();

// Escape regex special characters
function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export default function InteractiveText({
  text = '',
  contextEntity = null,
  onSelectConcept,
  onSelectAgreement,
  onSelectMilitary,
  className = ''
}) {
  if (!text || typeof text !== 'string') return null;

  // STEP 1: Parse explicit brackets first (e.g. [NUCLEAR TRIAD] or [S-400])
  const bracketRegex = /\[([A-Za-z0-9_\-\s]+)\]/g;
  const initialTokens = [];
  let lastIdx = 0;
  let match;

  while ((match = bracketRegex.exec(text)) !== null) {
    if (match.index > lastIdx) {
      initialTokens.push({
        type: 'text',
        content: text.substring(lastIdx, match.index)
      });
    }

    const raw = match[1].trim();
    const resolvedTerm = getGeopoliticalTerm(raw);

    initialTokens.push({
      type: 'term',
      raw: raw,
      termId: resolvedTerm?.id || raw.toLowerCase().replace(/[\s_]+/g, '-')
    });

    lastIdx = bracketRegex.lastIdx;
  }

  if (lastIdx < text.length) {
    initialTokens.push({
      type: 'text',
      content: text.substring(lastIdx)
    });
  }

  // STEP 2: For plain text sections, scan for recognized specialized terminology
  const matchedTermIds = new Set();
  // Register any already bracketed terms so we don't duplicate links
  initialTokens.forEach(tok => {
    if (tok.type === 'term') matchedTermIds.add(tok.termId);
  });

  const finalElements = [];

  initialTokens.forEach((token, tokenIdx) => {
    if (token.type === 'term') {
      finalElements.push(
        <GeopoliticalTerm
          key={`term-bracket-${tokenIdx}`}
          termId={token.termId}
          contextEntity={contextEntity}
          onSelectTerm={onSelectConcept}
        >
          {token.raw}
        </GeopoliticalTerm>
      );
      return;
    }

    // Process plain text segment for keyword matching
    let currentSegment = token.content;
    const subSegments = [];
    
    // Find candidate terms that appear in this segment
    const candidates = [];
    for (const item of TERM_MATCH_LIST) {
      if (matchedTermIds.has(item.termId)) continue;
      
      const regex = new RegExp(`\\b${escapeRegex(item.phrase)}\\b`, 'i');
      const found = regex.exec(currentSegment);
      if (found) {
        candidates.push({
          termId: item.termId,
          phrase: item.phrase,
          index: found.index,
          length: found[0].length,
          matchedText: found[0]
        });
        matchedTermIds.add(item.termId);
      }
    }

    if (candidates.length === 0) {
      finalElements.push(<span key={`text-${tokenIdx}`}>{currentSegment}</span>);
      return;
    }

    // Sort candidates by position in string
    candidates.sort((a, b) => a.index - b.index);

    // Build segments without overlaps
    let segCursor = 0;
    candidates.forEach((cand, candIdx) => {
      // If overlap occurs, skip
      if (cand.index < segCursor) return;

      if (cand.index > segCursor) {
        subSegments.push({
          type: 'text',
          content: currentSegment.substring(segCursor, cand.index)
        });
      }

      subSegments.push({
        type: 'term',
        termId: cand.termId,
        content: cand.matchedText
      });

      segCursor = cand.index + cand.length;
    });

    if (segCursor < currentSegment.length) {
      subSegments.push({
        type: 'text',
        content: currentSegment.substring(segCursor)
      });
    }

    // Render subsegments
    subSegments.forEach((sub, subIdx) => {
      if (sub.type === 'text') {
        finalElements.push(<span key={`seg-${tokenIdx}-${subIdx}`}>{sub.content}</span>);
      } else {
        finalElements.push(
          <GeopoliticalTerm
            key={`auto-term-${tokenIdx}-${subIdx}`}
            termId={sub.termId}
            contextEntity={contextEntity}
            onSelectTerm={onSelectConcept}
          >
            {sub.content}
          </GeopoliticalTerm>
        );
      }
    });
  });

  return <span className={className}>{finalElements}</span>;
}
