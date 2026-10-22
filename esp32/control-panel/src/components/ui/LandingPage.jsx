import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Globe2, ShieldCheck, Activity, Compass } from 'lucide-react';

/**
 * GEOINTEL Landing Page
 * 
 * Features:
 * - Fullscreen background video using the authentic looped video asset (gemini_generated_video_581aa9d1.mp4)
 * - Calibrated CSS overlay (35% base black + directional gradient for text contrast)
 * - Premium GEOINTEL branding in top-right corner with refined typography and subtle glow
 * - Main headline: "Understand the World. See What Comes Next."
 * - Description: "Explore geopolitical events, global power dynamics, strategic geography, historical turning points, and their implications for India — all through one connected intelligence platform."
 * - Prominent "EXPLORE NOW" primary call to action with interactive hover, focus, and scale feedback
 * - Smooth cinematic transition into the main 3D geospatial intelligence platform
 * - Staggered entrance animations respecting prefers-reduced-motion
 * - Fallback poster frame and zero-flicker video loading
 */
export default function LandingPage({ onExplore }) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const videoRef = useRef(null);

  // Initialize and attempt muted autoplay safely across all browsers
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      video.playsInline = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Muted autoplay fallback: user gesture will activate video or poster frame displays
        });
      }
    }
  }, []);

  const handleExploreClick = () => {
    if (isExiting) return;
    setIsExiting(true);
    // Smooth cinematic dissolve transition
    setTimeout(() => {
      onExplore();
    }, 450);
  };

  return (
    <div 
      className={`fixed inset-0 w-full h-full z-50 overflow-hidden bg-black select-none font-sans transition-all duration-500 ease-out ${
        isExiting ? 'opacity-0 scale-[1.03] pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* ============================================================== */}
      {/* 1. BACKGROUND VIDEO LAYER & CALIBRATED OVERLAYS                */}
      {/* ============================================================== */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
        {/* Poster frame layer (Always rendered underneath video to prevent any blank frames) */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url(/videos/frame_60.jpg)' }}
        />

        {/* Fullscreen Looped Background Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/videos/frame_60.jpg"
          src="/videos/gemini_generated_video_581aa9d1.mp4"
          onCanPlay={() => setIsVideoLoaded(true)}
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-90'
          }`}
        >
          <source src="/videos/gemini_generated_video_581aa9d1.mp4" type="video/mp4" />
          <source src="/gemini_generated_video_581aa9d1.mp4" type="video/mp4" />
        </video>

        {/* Base Darkness Overlay (~35% opacity as specified to preserve colors & motion) */}
        <div className="absolute inset-0 bg-black/35 pointer-events-none" />

        {/* Directional Contrast Gradient: extra depth behind text on left & bottom, clear on globe at right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />

        {/* Subtle Vignette for cinematic focus */}
        <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.85)] pointer-events-none" />
      </div>

      {/* ============================================================== */}
      {/* 2. TOP-RIGHT GEOINTEL BRANDING                                  */}
      {/* ============================================================== */}
      <header className="absolute top-6 right-6 sm:top-10 sm:right-10 md:top-12 md:right-14 z-30 flex flex-col items-end pointer-events-auto animate-landing-brand">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.15)]">
            <Globe2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div className="flex flex-col items-end">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[0.28em] text-white font-mono uppercase drop-shadow-[0_2px_16px_rgba(255,255,255,0.4)]">
              GEOINTEL
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_8px_#FFFFFF]" />
          <span className="text-[9px] sm:text-[10.5px] font-mono tracking-[0.25em] text-[#C8C8C8] uppercase font-medium">
            PLANETARY INTELLIGENCE PLATFORM
          </span>
        </div>
      </header>

      {/* Top Left Minimalist System Indicator */}
      <div className="absolute top-6 left-6 sm:top-10 sm:left-10 md:top-12 md:left-14 z-30 hidden sm:flex items-center gap-2.5 text-[10px] font-mono text-[#9E9E9E] animate-landing-brand pointer-events-none">
        <ShieldCheck className="w-3.5 h-3.5 text-white/80" />
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
        <h2 className="animate-landing-headline text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold tracking-tight text-white leading-[1.08] drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] max-w-3xl">
          Understand the World.{' '}
          <span className="text-[#E5E5E5] block sm:inline">
            See What Comes Next.
          </span>
        </h2>

        {/* Main Description */}
        <p className="animate-landing-desc text-sm sm:text-base md:text-lg lg:text-xl text-[#D0D0D0] font-light leading-relaxed max-w-2xl mt-4 sm:mt-6 drop-shadow-[0_2px_16px_rgba(0,0,0,0.9)]">
          Explore geopolitical events, global power dynamics, strategic geography, historical turning points, and their implications for India — all through one connected intelligence platform.
        </p>

        {/* 4. EXPLORE NOW — Larger Primary Call to Action */}
        <div className="animate-landing-cta pointer-events-auto mt-8 sm:mt-11 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <button
            onClick={handleExploreClick}
            className="group relative inline-flex items-center justify-center gap-4 px-8 py-4 sm:px-11 sm:py-5 rounded-xl bg-white text-black hover:bg-[#F4F4F4] text-sm sm:text-base font-mono font-bold tracking-[0.18em] uppercase shadow-[0_0_35px_rgba(255,255,255,0.35)] hover:shadow-[0_0_65px_rgba(255,255,255,0.75)] border border-white/90 transition-all duration-300 transform hover:scale-[1.04] active:scale-[0.98] cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black"
            aria-label="Explore GEOINTEL Platform"
          >
            {/* Subtle inner highlight shimmer */}
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <span className="relative z-10">EXPLORE NOW</span>
            <ArrowRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 text-black group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>

          {/* Operational Sub-Telemetry Metadata */}
          <div className="flex items-center gap-2.5 sm:gap-3 text-[10px] font-mono text-[#A0A0A0] pl-1 sm:pl-2">
            <span className="flex items-center gap-1.5">
              <Compass className="w-3 h-3 text-white/70" />
              LIVE 3D GLOBE
            </span>
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
      <footer className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-12 sm:right-14 z-20 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-[#888888] pointer-events-none">
        <div>
          <span>VERIFIED OPEN-SOURCE GEOPOLITICAL INTELLIGENCE</span>
        </div>
        <div className="hidden sm:block">
          <span>COORDINATES: 28°36'N, 77°12'E // NEW DELHI PERSPECTIVE</span>
        </div>
      </footer>
    </div>
  );
}
