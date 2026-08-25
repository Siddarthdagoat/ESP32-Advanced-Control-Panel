import React from 'react';
import { Sparkles, Compass, ShieldCheck, Zap, BookOpen, Laptop, FileText, GraduationCap, Palette, Gift, ArrowRight, ArrowLeftRight, Check } from 'lucide-react';

export default function LandingPage({ setCurrentPage, setSelectedCategory, currentUser }) {
  
  const benefits = [
    {
      title: 'Share Resources',
      description: 'Give useful books, notes, electronics, or other resources a second life.'
    },
    {
      title: 'Find What You Need',
      description: "Discover students who have something you're looking for."
    },
    {
      title: 'Smarter Matching',
      description: 'Describe what you offer and what you need, and RExchange helps identify compatible exchanges.'
    },
    {
      title: 'Build a Resource Loop',
      description: 'Keep useful resources moving through your campus community.'
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Share',
      description: 'Create a listing for something you have.'
    },
    {
      step: '02',
      title: 'Tell Us What You Need',
      description: "Add the resource, skill, or opportunity you're looking for."
    },
    {
      step: '03',
      title: 'Get Matched',
      description: 'Discover compatible students and exchange opportunities.'
    },
    {
      step: '04',
      title: 'Exchange',
      description: 'Connect, communicate, and complete the exchange.'
    }
  ];

  const categories = [
    { title: 'Books & Study Material', desc: 'Textbooks, reference manuals, exam prep sheets', icon: BookOpen, color: 'indigo' },
    { title: 'Electronics & Gadgets', desc: 'Calculators, Arduino kits, chargers, sensors', icon: Laptop, color: 'cyan' },
    { title: 'Notes & Academic Resources', desc: 'Handwritten notes, study guides, class slides', icon: FileText, color: 'emerald' },
    { title: 'Skills & Learning Help', desc: 'Tutoring, code reviews, presentation practice', icon: GraduationCap, color: 'amber' },
    { title: 'Creative Resources', desc: 'Design tools help, drawing gear, cameras', icon: Palette, color: 'rose' },
    { title: 'Other Useful Items', desc: 'Lab coats, clickers, drawing boards, giveaways', icon: Gift, color: 'plum' }
  ];

  const valueProps = [
    'Campus-focused verified network',
    'Reuse valuable local resources',
    'Discover useful student connections',
    'Intelligent reciprocal matching',
    'Simple direct exchange requests'
  ];

  const handleCategoryClick = (title) => {
    let targetCategory = 'All';
    if (title.includes('Books')) targetCategory = 'Books & Notes';
    else if (title.includes('Electronics')) targetCategory = 'Electronics';
    else if (title.includes('Notes')) targetCategory = 'Books & Notes';
    else if (title.includes('Skills')) targetCategory = 'Skills & Services';
    else if (title.includes('Creative')) targetCategory = 'Giveaways';
    else if (title.includes('Other')) targetCategory = 'Giveaways';
    
    setSelectedCategory(targetCategory);
    setCurrentPage('explore');
  };

  const handlePrimaryClick = () => {
    if (currentUser) {
      setCurrentPage('explore');
    } else {
      setCurrentPage('login');
    }
  };

  const handleScrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden pb-16">
      {/* Background Glowing Blobs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[550px] h-[300px] bg-terracotta/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-[600px] left-[5%] w-[250px] h-[250px] bg-warm-amber/5 rounded-full blur-[80px] pointer-events-none -z-10" />
      <div className="absolute top-[1200px] right-[5%] w-[300px] h-[300px] bg-denim-blue/4 rounded-full blur-[90px] pointer-events-none -z-10" />

      {/* SECTION 1: HERO */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 text-left flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-terracotta/10 border border-terracotta/20 rounded-full shadow-sm select-none">
              <Sparkles className="w-3.5 h-3.5 text-terracotta" />
              <span className="text-[10px] font-extrabold text-terracotta tracking-wider uppercase font-display">
                AI-Powered Campus Resource Exchange
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-charcoal leading-tight">
              Turn What You Have <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-terracotta via-terracotta to-warm-amber">
                Into What You Need.
              </span>
            </h1>

            <p className="max-w-xl text-muted-gray font-sans text-base sm:text-lg font-normal leading-relaxed">
              RExchange helps students discover useful resources, share what they no longer need, and intelligently connect with people who have what they're looking for.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2">
              <button 
                onClick={handlePrimaryClick}
                className="w-full sm:w-auto px-7 py-3.5 bg-terracotta hover:bg-terracotta/90 text-white font-semibold rounded-xl shadow-md shadow-terracotta/20 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
              >
                Start Exploring
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={handleScrollToHowItWorks}
                className="w-full sm:w-auto px-7 py-3.5 bg-warm-surface hover:bg-warm-beige/35 text-charcoal font-semibold rounded-xl border border-warm-border transition-all hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                How It Works
              </button>
            </div>
          </div>

          {/* Right Column: Abstract CSS & Icon Illustration */}
          <div className="lg:col-span-5 relative w-full flex flex-col items-center justify-center select-none">
            <div className="w-full max-w-[360px] flex flex-col items-center gap-4 relative animate-fade-in">
              {/* Card 1: YOU HAVE */}
              <div className="w-full bg-white border border-warm-border p-5 rounded-2xl relative overflow-hidden shadow-premium text-left">
                <div className="flex items-center gap-2 mb-2 text-terracotta">
                  <Laptop className="w-4 h-4 text-terracotta" />
                  <span className="text-[10px] uppercase tracking-wider font-extrabold font-display">
                    YOU HAVE
                  </span>
                </div>
                <h4 className="text-base font-bold text-charcoal font-display">Engineering Calculator</h4>
                <p className="text-xs text-muted-gray mt-1 font-normal font-sans">Programmable scientific calculator device</p>
              </div>

              {/* Match Connection Indicator */}
              <div className="flex flex-col items-center justify-center relative py-1 w-full">
                <div className="w-0.5 h-12 bg-gradient-to-b from-terracotta to-forest-green rounded-full opacity-60" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-2xl bg-white border border-forest-green/20 flex items-center gap-1.5 shadow-premium">
                  <Sparkles className="w-3.5 h-3.5 text-forest-green animate-pulse" />
                  <span className="text-xs font-extrabold text-forest-green uppercase tracking-wider font-display">
                    AI MATCH
                  </span>
                </div>
              </div>

              {/* Card 2: YOU NEED */}
              <div className="w-full bg-white border border-warm-border p-5 rounded-2xl relative overflow-hidden shadow-premium text-left">
                <div className="flex items-center gap-2 mb-2 text-denim-blue">
                  <FileText className="w-4 h-4 text-denim-blue" />
                  <span className="text-[10px] uppercase tracking-wider font-extrabold font-display">
                    YOU NEED
                  </span>
                </div>
                <h4 className="text-base font-bold text-charcoal font-display">Python Notes</h4>
                <p className="text-xs text-muted-gray mt-1 font-normal font-sans">Introductory programming course study sheets</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: WHAT IS REXCHANGE? */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 border-t border-warm-border/50 text-left">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal leading-tight">
            One Campus. More Possibilities.
          </h2>
          <p className="text-muted-gray text-sm sm:text-base leading-relaxed mt-3 max-w-2xl font-normal font-sans">
            Useful resources often sit unused while another student is searching for exactly the same thing. RExchange helps connect those two people.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl border border-warm-border flex flex-col justify-between shadow-premium hover:-translate-y-1 transition-all duration-300">
              <div>
                <span className="text-[10px] text-terracotta font-extrabold uppercase tracking-wider block mb-2">
                  Benefit 0{idx + 1}
                </span>
                <h3 className="text-lg font-display font-bold text-charcoal mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-gray text-xs sm:text-sm leading-relaxed font-sans font-normal">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: HOW IT WORKS */}
      <div id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 py-20 border-t border-warm-border/50 text-left">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal leading-tight">
            How RExchange Works
          </h2>
          <p className="text-muted-gray text-sm sm:text-base leading-relaxed mt-2">
            Engage with the campus resource loop in simple stages.
          </p>
        </div>

        {/* Process loop visual row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative bg-white border border-warm-border p-6 rounded-2xl shadow-premium">
              <span className="absolute top-5 right-5 font-display font-extrabold text-3xl text-terracotta/10">
                {step.step}
              </span>
              <h3 className="text-base font-display font-bold text-charcoal mb-2 mt-4">
                {step.title}
              </h3>
              <p className="text-muted-gray text-xs sm:text-sm leading-relaxed font-sans font-normal">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Loop Concept banner */}
        <div className="glass-panel py-6 px-8 rounded-2xl border border-warm-border/80 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm bg-warm-surface/40">
          <div className="text-left">
            <span className="text-[10px] text-terracotta font-extrabold uppercase tracking-wider block">RExchange Core</span>
            <h3 className="text-sm font-display font-extrabold text-charcoal mt-0.5">The Campus Resource Loop</h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[10px] sm:text-xs font-extrabold text-charcoal">
            <span className="px-3.5 py-2 bg-white border border-warm-border rounded-xl shadow-sm">SHARE</span>
            <span className="text-terracotta text-sm">→</span>
            <span className="px-3.5 py-2 bg-white border border-warm-border rounded-xl shadow-sm">MATCH</span>
            <span className="text-terracotta text-sm">→</span>
            <span className="px-3.5 py-2 bg-white border border-warm-border rounded-xl shadow-sm">CONNECT</span>
            <span className="text-terracotta text-sm">→</span>
            <span className="px-3.5 py-2 bg-white border border-warm-border rounded-xl shadow-sm">EXCHANGE</span>
          </div>
        </div>
      </div>

      {/* SECTION 4: WHAT CAN YOU EXCHANGE? */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 border-t border-warm-border/50 text-left">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-charcoal mb-8 text-center sm:text-left">
          What Can You Exchange?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, idx) => {
            const CatIcon = cat.icon;
            
            const colorClass = 
              cat.color === 'indigo' ? 'text-warm-amber bg-warm-amber/10 border-warm-amber/20 group-hover:border-warm-amber/60' : 
              cat.color === 'cyan' ? 'text-denim-blue bg-denim-blue/10 border-denim-blue/20 group-hover:border-denim-blue/60' : 
              cat.color === 'emerald' ? 'text-forest-green bg-forest-green/10 border-forest-green/20 group-hover:border-forest-green/60' : 
              cat.color === 'amber' ? 'text-terracotta bg-terracotta/10 border-terracotta/20 group-hover:border-terracotta/60' : 
              cat.color === 'rose' ? 'text-rose-500 bg-rose-500/10 border-rose-500/20 group-hover:border-rose-500/50' :
              'text-purple-600 bg-purple-50 to-pink-50/50 border-purple-500/20 group-hover:border-purple-500/50';

            return (
              <div 
                key={idx}
                onClick={() => handleCategoryClick(cat.title)}
                className="group bg-white border border-warm-border p-5 rounded-2xl cursor-pointer hover:-translate-y-1 transition-all duration-300 shadow-sm flex flex-col justify-between flex-grow"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${colorClass} transition-all border`}>
                    <CatIcon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-charcoal group-hover:text-terracotta text-sm sm:text-base leading-snug transition-colors mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-[10px] text-muted-gray leading-normal font-sans font-normal">
                    {cat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 5: WHY USE REXCHANGE? */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 border-t border-warm-border/50 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal leading-tight">
              Your Campus Has What You Need.
            </h2>
            <p className="text-muted-gray text-sm sm:text-base leading-relaxed mt-4 font-normal font-sans max-w-lg">
              Sometimes the best resource isn't online or in a store. It's already with another student.
            </p>
          </div>
          
          <div className="lg:col-span-6 flex flex-col gap-3">
            {valueProps.map((prop, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-warm-border/80 shadow-sm">
                <div className="w-5 h-5 rounded-full bg-forest-green/10 border border-forest-green/20 flex items-center justify-center text-forest-green">
                  <Check className="w-3 h-3 text-forest-green" />
                </div>
                <span className="text-sm font-semibold text-charcoal font-sans">{prop}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 6: FINAL CTA */}
      <div className="max-w-5xl mx-auto px-4 py-16 border-t border-warm-border/50 text-center">
        <div className="glass-panel p-12 sm:p-16 rounded-3xl border border-warm-border shadow-premium relative overflow-hidden flex flex-col items-center gap-6">
          <div className="absolute top-0 right-0 w-32 h-32 bg-terracotta/5 rounded-full blur-2xl pointer-events-none" />
          
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal leading-tight">
            Ready to Start Your Exchange?
          </h2>
          <p className="text-muted-gray text-sm sm:text-base max-w-sm mx-auto font-sans leading-relaxed">
            Share something useful. Discover something valuable.
          </p>
          
          <button 
            onClick={handlePrimaryClick}
            className="mt-2 px-8 py-3.5 bg-terracotta hover:bg-terracotta/90 text-white font-semibold rounded-xl shadow-md shadow-terracotta/25 transition-all hover:scale-[1.01] flex items-center gap-1.5 cursor-pointer"
          >
            Join RExchange
          </button>
        </div>
      </div>
    </div>
  );
}
