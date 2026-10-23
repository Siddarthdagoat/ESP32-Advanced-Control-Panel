import React from 'react';
import HotNewsModal from './HotNewsModal';

export default function HotNewsSection(props) {
  const {
    onShowOnGlobe,
    onFocusCoordinates,
    onOpenEventDossier,
    onSelectEvent,
    ...rest
  } = props;

  return (
    <HotNewsModal
      {...rest}
      onFocusCoordinates={onFocusCoordinates || onShowOnGlobe}
      onSelectEvent={onSelectEvent || onOpenEventDossier}
    />
  );
}
