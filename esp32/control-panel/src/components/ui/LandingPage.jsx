import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Globe2, ShieldCheck, Activity } from 'lucide-react';

/**
 * GEOINTEL Landing Page
 * 
 * Features:
 * - Fullscreen background video using the authentic looped video asset
 * - Calibrated CSS overlay (35% base black + directional gradient for text contrast)
 * - Premium GEOINTEL branding in top-right corner with refined typography and subtle glow
 * - Main headline: "Understand the World. See What Comes Next."
 * - Description: "Explore geopolitical events, global power dynamics, strategic geography, historical turning points, and their implications for India — all through one connected intelligence platform."
 * - Prominent "EXPLORE NOW" primary call to action with interactive hover, focus, and scale feedback
 * - Staggered entrance animations respecting prefers-reduced-motion
 * - Fallback poster image and graceful error handling
 */
export default function LandingPage({ onExplore }) {
  const [videoError, setVideoError] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  // Attempt video playback safely
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback: muted autoplay is generally allowed
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-50 overflow-hidden bg-black select-none font-sans">
      {/* ============================================================== */}
      {/* 1. BACKGROUND VIDEO LAYER                                       */}
      {/* ============================================================== */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {!videoError ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            poster="/videos/frame_60.jpg"
            onLoadedData={() => setIsVideoLoaded(true)}
            onError={() => setVideoError(true)}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              isVideoLoaded ? 'opacity-100' : 'opacity-80'
            }`}
          >
            <source src="/videos/gemini_generated_video_581aa9d1.mp4" type="video/mp4" />
            <source src="/gemini_generated_video_581aa9d1.mp4" type="video/mp4" />
          </video>
        ) : (
          /* Fallback Poster Image if Video Fails */
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: 'url(/videos/frame_60.jpg)' }}
          />
        )}

        {/* Base Darkness Overlay (~35% opacity as specified) */}
        <div className="absolute inset-0 bg-black/35 pointer-events-none" />

        {/* Directional Contrast Gradient: extra depth behind text on left & bottom */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/25 pointer-events-none" />

        {/* Subtle Vignette for cinematic focus */}
        <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.85)] pointer-events-none" />
      </div>

      {/* ============================================================== */}
      {/* 2. TOP-RIGHT GEOINTEL BRANDING                                  */}
      {/* ============================================================== */}
      <header className="absolute top-6 right-6 sm:top-10 sm:right-10 md:top-12 md:right-14 z-30 flex flex-col items-end pointer-events-auto animate-landing-brand">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.15)]">
            <Globe2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <div className="flex flex-col items-end">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-[0.28em] text-white font-mono uppercase drop-shadow-[0_2px_16px_rgba(255,255,255,0.4)]">
              GEOINTEL
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-1.5 sm:mt-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_8px_#FFFFFF]" />
          <span className="text-[8.5px] sm:text-[10px] font-mono tracking-[0.25em] text-[#C4C4C4] uppercase">
            PLANETARY INTELLIGENCE PLATFORM
          </span>
        </div>
      </header>

      {/* Top Left Optional Minimalist System Indicator */}
      <div className="absolute top-6 left-6 sm:top-10 sm:left-10 md:top-12 md:left-14 z-30 hidden sm:flex items-center gap-2.5 text-[10px] font-mono text-[#8E8E8E] animate-landing-brand pointer-events-none">
        <ShieldCheck className="w-3.5 h-3.5 text-white/70" />
        <span className="tracking-widest uppercase">MONOCHROME GEOSPATIAL RECON // 2.0</span>
      </div>

      {/* ============================================================== */}
      {/* 3. MAIN HERO CONTENT & CALL TO ACTION                           */}
      {/* ============================================================== */}
      <main className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24 max-w-4xl z-20 pointer-events-none">
        {/* Category Pill */}
        <div className="animate-landing-headline pointer-events-auto inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/20 backdrop-blur-md w-fit mb-4 sm:mb-6">
          <Activity className="w-3 h-3 text-white" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] text-[#E0E0E0] uppercase font-semibold">
            GLOBAL POWER & STRATEGIC GEOGRAPHY
          </span>
        </div>

        {/* Main Headline */}
        <h2 className="animate-landing-headline text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold tracking-tight text-white leading-[1.08] drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] max-w-3xl">
          Understand the World.{' '}
          <span className="text-[#E0E0E0] block sm:inline">
            See What Comes Next.
          </span>
        </h2>

        {/* Main Description */}
        <p className="animate-landing-desc text-sm sm:text-base md:text-lg lg:text-xl text-[#CCCCCC] font-light leading-relaxed max-w-2xl mt-4 sm:mt-6 drop-shadow-[0_2px_16px_rgba(0,0,0,0.9)]">
          Explore geopolitical events, global power dynamics, strategic geography, historical turning points, and their implications for India — all through one connected intelligence platform.
        </p>

        {/* 4. EXPLORE NOW Primary Call to Action */}
        <div className="animate-landing-cta pointer-events-auto mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <button
            onClick={onExplore}
            className="group relative inline-flex items-center justify-center gap-3.5 px-8 py-4 sm:px-10 sm:py-4.5 rounded-xl bg-white text-black hover:bg-[#F2F2F2] text-sm sm:text-base font-mono font-bold tracking-[0.16em] uppercase shadow-[0_0_35px_rgba(255,255,255,0.4)] hover:shadow-[0_0_55px_rgba(255,255,255,0.7)] border border-white/80 transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black"
            aria-label="Explore GEOINTEL Platform"
          >
            <span>EXPLORE NOW</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-black group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          {/* Additional Sub-Telemetry Metadata */}
          <div className="flex items-center gap-3 text-[10px] font-mono text-[#999999] pl-1 sm:pl-2">
            <span>LIVE 3D GLOBE</span>
            <span>·</span>
            <span>40+ COUNTRY DOSSIERS</span>
            <span>·</span>
            <span>REAL-TIME OSINT</span>
          </div>
        </div>
      </main>

      {/* ============================================================== */}
      {/* 5. SUBTLE BOTTOM CORNER TELEMETRY                               */}
      {/* ============================================================== */}
      <footer className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-12 sm:right-14 z-20 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-[#777777] pointer-events-none">
        <div>
          <span>VERIFIED OPEN-SOURCE INTELLIGENCE</span>
        </div>
        <div className="hidden sm:block">
          <span>COORDINATES: 28°36'N, 77°12'E // NEW DELHI PERSPECTIVE</span>
        </div>
      </footer>
    </div>
  );
}
