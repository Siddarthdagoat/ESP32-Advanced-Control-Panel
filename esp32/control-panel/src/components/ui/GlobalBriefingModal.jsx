import React, { useState, useEffect } from 'react';
import { 
  X, 
  FileText, 
  Clock, 
  TrendingUp, 
  ShieldAlert, 
  Globe2, 
  Compass, 
  ExternalLink, 
  Bot, 
  Sparkles, 
  RefreshCw,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import { formatUtcTimestamp } from '../../services/intelligenceFeed';

export default function GlobalBriefingModal({
  isOpen,
  onClose,
  onSelectEvent,
  onOpenEventDossier,
  onFocusCoordinates,
  onShowOnGlobe,
  onSelectCountry,
  onAskAi
}) {
  const [timeframe, setTimeframe] = useState('24h'); // '24h' | '7d' | '30d'
  const effectiveFocusCoords = onFocusCoordinates || onShowOnGlobe;
  const effectiveSelectEvent = onSelectEvent || onOpenEventDossier;
  const [briefingData, setBriefingData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    let isCancelled = false;
    const fetchBriefing = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/intelligence?type=briefing&timeframe=${timeframe}`, {
          signal: AbortSignal.timeout(8000)
        });
        if (res.ok) {
          const json = await res.json();
          if (!isCancelled && json.success && json.briefing) {
            setBriefingData(json.briefing);
            setIsLoading(false);
            return;
          }
        }
      } catch (err) {
        console.warn('Briefing API query failed:', err.message);
      }

      // Offline baseline if API endpoint is unavailable
      if (!isCancelled) {
        setBriefingData({
          timeframe,
          generatedAt: new Date().toISOString(),
          stats: {
            totalMonitored: 48,
            relevantInPeriod: timeframe === '24h' ? 8 : timeframe === '7d' ? 22 : 44,
            criticalAlerts: 3,
            highAlerts: 6,
            escalatingTheaters: 4
          },
          topShifts: [
            {
              id: 'shift-1',
              headline: 'Bab el-Mandeb & Red Sea Maritime Standoff Escalation',
              priority: 'CRITICAL',
              category: 'MARITIME',
              location: 'Southern Red Sea & Gulf of Aden',
              lat: 12.58,
              lng: 43.33,
              whatHappened: 'Anti-ship ballistic missile and drone swarm operations continue to compel container carriers to divert around Africa\'s Cape of Good Hope.',
              whyItMatters: 'Extends Europe-Asia transit by 10 to 14 days and drives up international bunker fuel and marine insurance premiums by up to 250%.',
              indiaImpact: 'Directly impacts Indian export shipments to European ports, while Indian Navy warships provide active maritime convoy escorts in the Arabian Sea.'
            },
            {
              id: 'shift-2',
              headline: 'Taiwan Strait & First Island Chain Naval Patrols',
              priority: 'CRITICAL',
              category: 'MILITARY',
              location: 'Western Pacific & Taiwan Strait',
              lat: 24.0,
              lng: 121.0,
              whatHappened: 'Coordinated amphibious readiness exercises and median line sorties in the western Pacific theater.',
              whyItMatters: 'Heightens deterrence calculations across the global semiconductor manufacturing epicenter.',
              indiaImpact: 'India emphasizes peace and stability in the Taiwan Strait, crucial for international sea lanes and electronics supply chains.'
            },
            {
              id: 'shift-3',
              headline: 'Strait of Hormuz Energy Chokepoint Surveillance',
              priority: 'HIGH',
              category: 'ENERGY',
              location: 'Persian Gulf & Gulf of Oman',
              lat: 26.56,
              lng: 56.25,
              whatHappened: 'Naval interdictions and heightened drone sweeps across the world\'s primary crude transit artery.',
              whyItMatters: 'Over 20 million barrels per day transit this 33km-wide strait.',
              indiaImpact: 'Critical to India\'s energy security, accounting for over 60% of domestic crude oil imports.'
            }
          ],
          indiaStrategicOutlook: {
            posture: 'Strategic Autonomy & Maritime Preparedness',
            keyPriorities: [
              'Guarding Indian Ocean Sea Lines of Communication (Malacca, Bab el-Mandeb, Hormuz).',
              'Enhancing Northern Border infrastructure and multi-domain deterrence along the LAC.',
              'Diversifying strategic partnerships across Quad, BRICS, and European bilateral corridors.',
              'Securing critical mineral imports and semiconductor supply chains against trade choke points.'
            ]
          }
        });
        setIsLoading(false);
      }
    };

    fetchBriefing();
    return () => { isCancelled = true; };
  }, [isOpen, timeframe]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200 pointer-events-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="briefing-modal-title"
    >
      <div className="relative w-full max-w-4xl h-[88vh] flex flex-col rounded-2xl bg-[#090909] border border-white/20 shadow-2xl overflow-hidden font-sans">
        
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#0E0E0E]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/25 flex items-center justify-center text-white">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="briefing-modal-title" className="text-base sm:text-lg font-bold font-mono tracking-wider text-white">
                  GLOBAL BRIEFING SUMMARY
                </h2>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white border border-white/20 font-bold">
                  EXECUTIVE PDB VIEW
                </span>
              </div>
              <p className="text-xs font-mono text-[#888888]">
                Rapid 3-minute synthesis of major geopolitical shifts, energy corridors, and India's security outlook.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Timeframe Selector */}
            <div className="flex items-center bg-black/60 p-1 rounded-xl border border-white/15 text-xs font-mono">
              {['24h', '7d', '30d'].map((tf) => (
                <button
                  key={tf}
                  onClick={() => setTimeframe(tf)}
                  className={`px-3 py-1 rounded-lg transition-all cursor-pointer font-bold ${
                    timeframe === tf
                      ? 'bg-white text-black shadow-md'
                      : 'text-[#888888] hover:text-white'
                  }`}
                >
                  {tf.toUpperCase()}
                </button>
              ))}
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#888888] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          {isLoading ? (
            <div className="h-64 flex flex-col items-center justify-center text-center font-mono text-xs text-[#888888]">
              <RefreshCw className="w-6 h-6 animate-spin text-white mb-2" />
              <span>Generating executive geopolitical briefing...</span>
            </div>
          ) : briefingData ? (
            <>
              {/* Telemetry Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl bg-[#111111] border border-white/10 text-center">
                  <div className="text-[10px] font-mono text-[#888888] uppercase">Developments Monitored</div>
                  <div className="text-lg font-bold font-mono text-white mt-0.5">{briefingData.stats?.relevantInPeriod || 0}</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FF3030]/10 border border-[#FF3030]/30 text-center">
                  <div className="text-[10px] font-mono text-[#FF5555] uppercase font-bold">Critical Alerts</div>
                  <div className="text-lg font-bold font-mono text-[#FF3030] mt-0.5">{briefingData.stats?.criticalAlerts || 0}</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/15 text-center">
                  <div className="text-[10px] font-mono text-[#C0C0C0] uppercase">High Alerts</div>
                  <div className="text-lg font-bold font-mono text-white mt-0.5">{briefingData.stats?.highAlerts || 0}</div>
                </div>
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-center">
                  <div className="text-[10px] font-mono text-amber-300 uppercase font-bold">Escalating Theaters</div>
                  <div className="text-lg font-bold font-mono text-amber-200 mt-0.5">{briefingData.stats?.escalatingTheaters || 0}</div>
                </div>
              </div>

              {/* Top Geopolitical Shifts */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#FF3030]" />
                    <span>Top Strategic Shifts in This Timeframe</span>
                  </h3>
                  <span className="text-[10px] font-mono text-[#888888]">
                    Generated {formatUtcTimestamp(briefingData.generatedAt)}
                  </span>
                </div>

                <div className="space-y-3">
                  {briefingData.topShifts?.map((shift, idx) => {
                    const isCrit = shift.priority === 'CRITICAL';
                    return (
                      <div 
                        key={shift.id || idx}
                        className="p-4 rounded-xl bg-[#111111] border border-white/10 hover:border-white/30 transition-all space-y-2.5"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-0.5 rounded text-[9.5px] font-mono font-bold uppercase border ${
                              isCrit
                                ? 'bg-[#FF3030]/20 text-[#FF3030] border-[#FF3030]'
                                : 'bg-white/20 text-white border-white/40'
                            }`}>
                              {shift.priority}
                            </span>
                            <span className="text-[10px] font-mono text-[#888888] uppercase bg-white/5 px-1.5 py-0.5 rounded">
                              {shift.category}
                            </span>
                            <span className="text-[10px] font-mono text-[#CCCCCC] flex items-center gap-1">
                              <Compass className="w-3 h-3 text-[#777777]" />
                              <span>{shift.location}</span>
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            {shift.lat && shift.lng && effectiveFocusCoords && (
                              <button
                                onClick={() => {
                                  effectiveFocusCoords(shift.lat, shift.lng, shift.location);
                                  onClose();
                                }}
                                className="px-2 py-1 rounded bg-white/5 hover:bg-white/15 text-[10.5px] font-mono text-white flex items-center gap-1 border border-white/10 cursor-pointer"
                              >
                                <Globe2 className="w-3 h-3 text-[#FF3030]" />
                                <span>Globe</span>
                              </button>
                            )}

                            {onAskAi && (
                              <button
                                onClick={() => {
                                  onAskAi(shift);
                                  onClose();
                                }}
                                className="px-2 py-1 rounded bg-[#FF3030]/15 hover:bg-[#FF3030]/25 text-[10.5px] font-mono text-[#FF5555] hover:text-white flex items-center gap-1 border border-[#FF3030]/30 cursor-pointer"
                              >
                                <Bot className="w-3 h-3" />
                                <span>Ask AI</span>
                              </button>
                            )}
                          </div>
                        </div>

                        <h4 className="text-sm font-bold font-mono text-white">
                          {shift.headline}
                        </h4>

                        <p className="text-xs font-mono text-[#B8B8B8] leading-relaxed">
                          {shift.whatHappened}
                        </p>

                        <div className="p-2.5 rounded-lg bg-black/50 border border-white/5 text-xs font-mono space-y-1">
                          <div className="text-[10px] uppercase font-bold text-white tracking-wider">Strategic Significance:</div>
                          <div className="text-[#A0A0A0]">{shift.whyItMatters}</div>
                        </div>

                        {shift.indiaImpact && (
                          <div className="p-2.5 rounded-lg bg-amber-500/[0.05] border border-amber-500/20 text-xs font-mono space-y-0.5">
                            <div className="text-[10px] uppercase font-bold text-amber-300 tracking-wider flex items-center gap-1">
                              <span>🇮🇳</span>
                              <span>Impact on India:</span>
                            </div>
                            <div className="text-amber-100/90">{shift.indiaImpact}</div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* India Strategic Outlook Priorities */}
              {briefingData.indiaStrategicOutlook && (
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/15 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-base">🇮🇳</span>
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                      India Strategic Outlook: {briefingData.indiaStrategicOutlook.posture}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                    {briefingData.indiaStrategicOutlook.keyPriorities.map((priority, pIdx) => (
                      <div key={pIdx} className="p-3 rounded-lg bg-black/40 border border-white/10 flex items-start gap-2 text-[#CCCCCC]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-300 shrink-0 mt-0.5" />
                        <span>{priority}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : null}
        </div>

      </div>
    </div>
  );
}
