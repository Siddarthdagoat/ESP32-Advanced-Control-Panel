import React from 'react';
import { RefreshCw, ShieldCheck, MapPin, Sparkles, Heart, ExternalLink } from 'lucide-react';

export default function Footer({ setCurrentPage, setSelectedCategory }) {
  const handleNav = (pageId, category = null) => {
    if (category && setSelectedCategory) {
      setSelectedCategory(category);
    }
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-warm-border/80 bg-warm-surface/80 backdrop-blur-md pt-14 pb-10 text-left select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-warm-border/60">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div 
              onClick={() => handleNav('landing')}
              className="flex items-center gap-2.5 cursor-pointer group w-fit"
            >
              <div className="p-2 bg-gradient-to-br from-terracotta to-warm-amber rounded-xl flex items-center justify-center shadow-md shadow-terracotta/20 group-hover:opacity-90 transition-opacity">
                <RefreshCw className="w-5 h-5 text-white animate-spin-slow group-hover:rotate-180 transition-transform duration-700" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-charcoal">
                RExchange
              </span>
            </div>

            <p className="text-muted-gray text-xs sm:text-sm font-sans leading-relaxed max-w-sm">
              The AI-powered campus resource loop. Connecting students to exchange textbooks, microcontrollers, study guides, and skills with verified classmates.
            </p>

            {/* Live Campus Node Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-forest-green/10 border border-forest-green/20 rounded-full w-fit mt-1">
              <span className="w-2 h-2 rounded-full bg-forest-green animate-pulse" />
              <span className="text-[11px] font-semibold text-forest-green font-mono">
                Campus Loop Active • 100% Free
              </span>
            </div>
          </div>

          {/* Column 2: Marketplace */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-charcoal">
              Marketplace Hubs
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-muted-gray font-sans">
              <li>
                <button 
                  onClick={() => handleNav('explore', 'Books & Notes')} 
                  className="hover:text-terracotta transition-colors text-left cursor-pointer"
                >
                  Textbooks & Study Notes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('explore', 'Electronics')} 
                  className="hover:text-terracotta transition-colors text-left cursor-pointer"
                >
                  Calculators & Dev Boards
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('explore', 'Skills & Services')} 
                  className="hover:text-terracotta transition-colors text-left cursor-pointer"
                >
                  Peer Tutoring & Code Review
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('explore', 'Giveaways')} 
                  className="hover:text-terracotta transition-colors text-left cursor-pointer"
                >
                  Free Senior Giveaways
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: AI & Safe Zones */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-charcoal">
              Safety & Verification
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-muted-gray font-sans">
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-forest-green shrink-0" />
                <span>Verified .edu student accounts</span>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-terracotta shrink-0" />
                <span>Designated Campus Safe Zones</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-warm-amber shrink-0" />
                <span>AI Reciprocal Compatibility Engine</span>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('matches')} 
                  className="hover:text-terracotta transition-colors text-left cursor-pointer font-semibold text-charcoal"
                >
                  View AI Synergy Matches →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Action */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-charcoal">
              Get Started
            </h4>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleNav('create')}
                className="px-4 py-2.5 bg-terracotta hover:bg-terracotta/90 text-white rounded-xl text-xs font-semibold shadow-sm transition-all text-center cursor-pointer hover:scale-[1.02]"
              >
                + Post Resource
              </button>
              <button
                onClick={() => handleNav('explore')}
                className="px-4 py-2 bg-warm-surface hover:bg-warm-beige/50 text-charcoal border border-warm-border rounded-xl text-xs font-semibold transition-all text-center cursor-pointer"
              >
                Browse All Items
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-gray font-sans">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} RExchange. Built for campus communities.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1 text-[11px] text-muted-gray">
              Honest Peer-to-Peer Barter • Zero Fees
            </span>
            <div className="flex items-center gap-1.5 text-muted-gray">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span>for students</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
