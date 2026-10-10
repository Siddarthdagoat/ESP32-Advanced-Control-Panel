import React, { useState } from 'react';
import { 
  Radio, 
  Ship, 
  Plane, 
  Flame, 
  Crosshair, 
  ChevronRight, 
  ExternalLink, 
  RefreshCw,
  X 
} from 'lucide-react';
import { AIS_VESSELS, ADSB_MILITARY_FLIGHTS, FIRMS_THERMAL_HOTSPOTS } from '../../data/geointelSensors';

export default function SensorTrackerPanel({
  isOpen = true,
  onClose,
  isDocked = false,
  onFlyToSensor
}) {
  const [filterType, setFilterType] = useState('ALL'); // 'ALL' | 'AIS' | 'ADSB' | 'FIRMS'
  const [selectedSensor, setSelectedSensor] = useState(null);

  const handleFly = (sensor) => {
    if (onFlyToSensor) {
      onFlyToSensor({
        lat: sensor.lat,
        lng: sensor.lng,
        name: sensor.name || sensor.callsign || sensor.theater,
        type: sensor.callsign ? 'flight' : sensor.mmsi ? 'vessel' : 'thermal'
      });
    }
  };

  const content = (
    <div className={`flex flex-col h-full text-white font-mono ${isDocked ? 'p-4' : 'p-6'}`}>
      
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#222222]">
        <div className="flex items-center gap-2">
          <Radio className="w-4 h-4 text-white animate-pulse" />
          <span className="text-xs font-bold tracking-wider uppercase text-white">
            LIVE KINETIC OSINT SENSORS
          </span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-white text-black font-bold">
            AIS · ADS-B · FIRMS
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

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 my-3 bg-[#111111] p-1 rounded-xl border border-[#222222]">
        <button
          onClick={() => setFilterType('ALL')}
          className={`flex-1 py-1.5 text-[10px] font-bold rounded-lg transition-all cursor-pointer ${
            filterType === 'ALL' ? 'bg-white text-black' : 'text-[#888888] hover:text-white'
          }`}
        >
          ALL ({AIS_VESSELS.length + ADSB_MILITARY_FLIGHTS.length + FIRMS_THERMAL_HOTSPOTS.length})
        </button>
        <button
          onClick={() => setFilterType('AIS')}
          className={`flex-1 py-1.5 text-[10px] font-bold rounded-lg flex items-center justify-center gap-1 transition-all cursor-pointer ${
            filterType === 'AIS' ? 'bg-white text-black' : 'text-[#888888] hover:text-white'
          }`}
        >
          <Ship className="w-3 h-3" />
          <span>AIS ({AIS_VESSELS.length})</span>
        </button>
        <button
          onClick={() => setFilterType('ADSB')}
          className={`flex-1 py-1.5 text-[10px] font-bold rounded-lg flex items-center justify-center gap-1 transition-all cursor-pointer ${
            filterType === 'ADSB' ? 'bg-white text-black' : 'text-[#888888] hover:text-white'
          }`}
        >
          <Plane className="w-3 h-3" />
          <span>ADS-B ({ADSB_MILITARY_FLIGHTS.length})</span>
        </button>
        <button
          onClick={() => setFilterType('FIRMS')}
          className={`flex-1 py-1.5 text-[10px] font-bold rounded-lg flex items-center justify-center gap-1 transition-all cursor-pointer ${
            filterType === 'FIRMS' ? 'bg-white text-black' : 'text-[#888888] hover:text-white'
          }`}
        >
          <Flame className="w-3 h-3" />
          <span>FIRMS ({FIRMS_THERMAL_HOTSPOTS.length})</span>
        </button>
      </div>

      {/* Sensor Feed List */}
      <div className="flex-1 overflow-y-auto space-y-2.5 pr-1">
        
        {/* AIS Maritime Vessels */}
        {(filterType === 'ALL' || filterType === 'AIS') && (
          <div className="space-y-2">
            <div className="text-[10px] text-[#888888] font-bold tracking-wider flex items-center gap-1">
              <Ship className="w-3 h-3 text-white" />
              <span>MARITIME AIS COMMERCIAL & NAVAL TRACKS</span>
            </div>
            {AIS_VESSELS.map(vessel => (
              <div
                key={vessel.id}
                onClick={() => setSelectedSensor(vessel)}
                className="p-3 rounded-xl bg-[#121212] border border-[#222222] hover:border-white/30 transition-all flex items-center justify-between gap-3 group cursor-pointer"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-bold text-white truncate">
                      {vessel.name}
                    </span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-white/10 text-[#CCCCCC] font-bold shrink-0">
                      {vessel.flag}
                    </span>
                  </div>
                  <div className="text-[10.5px] text-[#999999] truncate">
                    {vessel.type} · {vessel.speedKts} kts
                  </div>
                  <div className="text-[9.5px] text-[#777777] mt-0.5 truncate">
                    Dst: {vessel.destination} · Risk: {vessel.threatRisk}
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFly(vessel);
                  }}
                  className="px-2 py-1.5 rounded-lg bg-white/10 group-hover:bg-white text-white group-hover:text-black text-[10px] font-bold flex items-center gap-1 transition-all cursor-pointer shrink-0"
                  title="Locate Vessel on Globe"
                >
                  <Crosshair className="w-3 h-3" />
                  <span>LOC</span>
                </button>
              </div>
            ))}
          </div>
        )}

        {/* ADS-B Military Reconnaissance Flights */}
        {(filterType === 'ALL' || filterType === 'ADSB') && (
          <div className="space-y-2 pt-2">
            <div className="text-[10px] text-[#888888] font-bold tracking-wider flex items-center gap-1">
              <Plane className="w-3 h-3 text-white" />
              <span>ADS-B STRATEGIC ISR & RECONNAISSANCE FLIGHTS</span>
            </div>
            {ADSB_MILITARY_FLIGHTS.map(flight => (
              <div
                key={flight.id}
                onClick={() => setSelectedSensor(flight)}
                className="p-3 rounded-xl bg-[#121212] border border-[#222222] hover:border-white/30 transition-all flex items-center justify-between gap-3 group cursor-pointer"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-bold text-white truncate">
                      ✈ {flight.callsign}
                    </span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-white text-black font-bold shrink-0">
                      {flight.altitudeFt.toLocaleString()} FT
                    </span>
                  </div>
                  <div className="text-[10.5px] text-[#999999] truncate">
                    {flight.aircraftType}
                  </div>
                  <div className="text-[9.5px] text-[#777777] mt-0.5 truncate">
                    {flight.theater} · {flight.speedKts} kts
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFly(flight);
                  }}
                  className="px-2 py-1.5 rounded-lg bg-white/10 group-hover:bg-white text-white group-hover:text-black text-[10px] font-bold flex items-center gap-1 transition-all cursor-pointer shrink-0"
                  title="Locate Flight on Globe"
                >
                  <Crosshair className="w-3 h-3" />
                  <span>LOC</span>
                </button>
              </div>
            ))}
          </div>
        )}

        {/* NASA FIRMS Thermal Satellite Hotspots */}
        {(filterType === 'ALL' || filterType === 'FIRMS') && (
          <div className="space-y-2 pt-2">
            <div className="text-[10px] text-[#888888] font-bold tracking-wider flex items-center gap-1">
              <Flame className="w-3 h-3 text-white" />
              <span>NASA FIRMS SATELLITE THERMAL & STRIKE HOTSPOTS</span>
            </div>
            {FIRMS_THERMAL_HOTSPOTS.map(hotspot => (
              <div
                key={hotspot.id}
                onClick={() => setSelectedSensor(hotspot)}
                className="p-3 rounded-xl bg-[#121212] border border-[#222222] hover:border-white/30 transition-all flex items-center justify-between gap-3 group cursor-pointer"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-bold text-white truncate">
                      ▲ {hotspot.theater}
                    </span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-white text-black font-bold shrink-0">
                      {hotspot.brightnessK} K
                    </span>
                  </div>
                  <div className="text-[10.5px] text-[#999999] truncate">
                    {hotspot.anomalyType}
                  </div>
                  <div className="text-[9.5px] text-[#777777] mt-0.5 truncate">
                    Sensor: {hotspot.satellite} · {hotspot.detectionTime}
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFly(hotspot);
                  }}
                  className="px-2 py-1.5 rounded-lg bg-white/10 group-hover:bg-white text-white group-hover:text-black text-[10px] font-bold flex items-center gap-1 transition-all cursor-pointer shrink-0"
                  title="Locate Thermal Hotspot on Globe"
                >
                  <Crosshair className="w-3 h-3" />
                  <span>LOC</span>
                </button>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Selected Sensor Detailed Inspector Drawer */}
      {selectedSensor && (
        <div className="mt-3 p-3.5 rounded-xl bg-[#161616] border border-white/20 text-xs space-y-2 animate-fade-in">
          <div className="flex items-center justify-between">
            <span className="font-bold text-white">
              {selectedSensor.name || selectedSensor.callsign || selectedSensor.theater}
            </span>
            <button
              onClick={() => setSelectedSensor(null)}
              className="text-[#888888] hover:text-white cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-[11px] text-[#B0B0B0] leading-relaxed">
            {selectedSensor.mission || selectedSensor.threatContext || selectedSensor.notes || selectedSensor.threatRisk}
          </p>
          <div className="flex items-center justify-between pt-1 border-t border-[#262626] text-[10px] text-[#888888]">
            <span>COORDS: {selectedSensor.lat}°N, {selectedSensor.lng}°E</span>
            <button
              onClick={() => handleFly(selectedSensor)}
              className="px-2 py-1 rounded bg-white text-black font-bold cursor-pointer"
            >
              CENTER GLOBE
            </button>
          </div>
        </div>
      )}

    </div>
  );

  if (isDocked) {
    return content;
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded-2xl bg-[#090909] border border-[#222222] shadow-2xl overflow-hidden">
        {content}
      </div>
    </div>
  );
}
