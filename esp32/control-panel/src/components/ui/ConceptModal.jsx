import React from 'react';
import TermIntelligenceCard from './TermIntelligenceCard';

/**
 * ConceptModal
 * Re-exports the enriched TermIntelligenceCard for seamless backward compatibility
 * across all existing modal triggers in the GEOINTEL platform.
 */
export default function ConceptModal({
  conceptId,
  contextCountryCode = null,
  intelLevel = 'beginner',
  onClose,
  onSelectConcept,
  onSelectAgreement,
  onSelectCountry,
  onExploreChain,
  onOpenWhyExplainer
}) {
  return (
    <TermIntelligenceCard
      termId={conceptId}
      contextEntity={contextCountryCode}
      isOpen={!!conceptId}
      onClose={onClose}
      onSelectTerm={onSelectConcept}
      onSelectCountry={onSelectCountry}
    />
  );
}
