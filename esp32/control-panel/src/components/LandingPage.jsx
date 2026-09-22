import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Compass, 
  ShieldCheck, 
  Zap, 
  BookOpen, 
  Laptop, 
  FileText, 
  GraduationCap, 
  Gift, 
  ArrowRight, 
  ArrowLeftRight, 
  Check, 
  Star,
  MapPin,
  ChevronDown,
  Users,
  CheckCircle2,
  TrendingUp,
  Clock,
  Layers
} from 'lucide-react';
import { DEMO_USERS } from '../data/dummyData';

export default function LandingPage({ setCurrentPage, setSelectedCategory, currentUser, onLogin }) {
  // Interactive Simulation state for the Hero showcase
  const [activeSimulationIndex, setActiveSimulationIndex] = useState(0);
  
  // Interactive FAQ state
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const simulations = [
    {
      title: "STEM Hardware ↔ Textbooks",
      userA: { name: "Alex Rivera", dept: "Computer Science", item: "TI-84 Plus CE Graphing Calculator", type: "Electronics" },
      userB: { name: "Priya Patel", dept: "Electrical Eng", item: "ESP32 Dev Board + Sensor Starter Kit", type: "Electronics" },
      score: 98,
      reason: "Mutual Match: Alex has the calculator Priya requested; Priya has the ESP32 kit Alex needs for his robotics lab."
    },
    {
      title: "Design Critique ↔ ML Tutoring",
      userA: { name: "Sophia Chen", dept: "HCI & Design", item: "Figma UI/UX Portfolio Review (2 Sessions)", type: "Skills" },
      userB: { name: "David Nakamura", dept: "Data Science & AI", item: "Python & PyTorch Machine Learning Tutoring", type: "Skills" },
      score: 96,
      reason: "Skill Synergy: Sophia offers UI/UX guidance David needs for his research portal; David offers Python ML tutoring."
    },
    {
      title: "Pre-Med Science Swap",
      userA: { name: "Marcus Vance", dept: "Biochemistry", item: "Campbell Biology 12th Ed Hardcover", type: "Books" },
      userB: { name: "Chloe Bennett", dept: "Chemistry", item: "Organic Chemistry Molecular Model Kit", type: "Lab Gear" },
      score: 94,
      reason: "Direct Swap: Marcus is entering Organic Chemistry; Chloe is preparing for MCAT Biology."
    }
  ];

  // Auto-cycle simulation every 6 seconds if user hasn't touched it
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSimulationIndex(prev => (prev + 1) % simulations.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [simulations.length]);

  const activeSim = simulations[activeSimulationIndex];

  const categories = [
    { title: 'Books & Notes', desc: 'Calculus, Organic Chem, CS study guides & binders', icon: BookOpen, color: 'indigo', count: '48 items' },
    { title: 'Electronics', desc: 'TI-84 calculators, ESP32 boards, sensors & chargers', icon: Laptop, color: 'cyan', count: '36 items' },
    { title: 'Skills & Services', desc: 'Figma UI/UX reviews, Python ML, interview prep', icon: GraduationCap, color: 'emerald', count: '29 offerings' },
    { title: 'Opportunities', desc: 'Hackathon workbench passes, project teammates', icon: Sparkles, color: 'amber', count: '14 active' },
    { title: 'Giveaways', desc: 'Lab coats, safety goggles, stationary & dorm gear', icon: Gift, color: 'rose', count: '22 free items' }
  ];

  const liveActivity = [
    { text: "Alex R. swapped TI-84 Plus ↔ Priya's ESP32 Board", time: "12m ago", tag: "Mutual Match" },
    { text: "Sophia C. scheduled Figma UI Review ↔ PyTorch Mentoring", time: "24m ago", tag: "Skill Swap" },
    { text: "Chloe B. completed Organic Chem Model Kit exchange", time: "1h ago", tag: "Completed" },
    { text: "Marcus V. saved $180 exchanging Campbell Biology Textbook", time: "2h ago", tag: "Verified Swap" },
    { text: "Hannah K. listed Logitech MX Master 3S for trade", time: "3h ago", tag: "New Listing" }
  ];

  const steps = [
    {
      step: '01',
      title: 'List What You Have',
      description: 'Describe an unused textbook, gadget, notes, or skill you can share.',
      highlight: 'Takes under 60 seconds'
    },
    {
      step: '02',
      title: 'Specify Your Need',
      description: 'Tell RExchange what course material, hardware, or guidance you seek.',
      highlight: 'Flexible keyword matching'
    },
    {
      step: '03',
      title: 'AI Finds Reciprocal Matches',
      description: 'Our compatibility engine identifies classmates with mutual exchange synergy.',
      highlight: '98%+ Synergy Accuracy'
    },
    {
      step: '04',
      title: 'Meet at Campus Safe Zone',
      description: 'Coordinate a safe swap at the Library or Student Center. 100% free.',
      highlight: 'Zero platform fees'
    }
  ];

  const testimonials = [
    {
      name: "Alex Rivera",
      role: "Computer Science, Senior",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      quote: "I had a TI-84 calculator from freshman year sitting in my drawer. Within two hours of posting, RExchange matched me with an EE student who had the exact ESP32 sensors I needed for my capstone.",
      stars: 5,
      saved: "$130 saved"
    },
    {
      name: "Sophia Chen",
      role: "HCI & Design, Senior",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
      quote: "The skill swap feature is brilliant. I helped a graduate student polish his conference paper diagrams in Figma, and he tutored me through my neural network homework. Both of us won.",
      stars: 5,
      saved: "Skill Barter"
    },
    {
      name: "Marcus Vance",
      role: "Biochemistry & Pre-Med, Sophomore",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      quote: "College bookstore wanted $240 for Campbell Biology. Traded my old molecular model kit to a freshman. We met right at the library front desk. Safe, smooth, and saved me a month of groceries.",
      stars: 5,
      saved: "$240 saved"
    }
  ];

  const faqs = [
    {
      q: "Is RExchange completely free to use?",
      a: "Yes, 100% free with zero fees. RExchange is built exclusively for campus communities as a pure peer-to-peer resource loop. There are no commission fees, listing charges, or subscription paywalls."
    },
    {
      q: "How does the AI Matching algorithm work?",
      a: "Our reciprocal compatibility engine tokenizes what you offer and what you are looking for. It searches the campus network for double-ended synergies (where Student A offers what Student B needs AND Student B offers what Student A needs) to create high-probability mutual trades."
    },
    {
      q: "Where do students actually meet up for swaps?",
      a: "All exchanges are encouraged at designated Campus Safe Zones: university library circulation desks, student center lounges, and academic department lobbies. These are high-traffic, secure campus locations with staff present."
    },
    {
      q: "Can I swap skills or tutoring instead of physical items?",
      a: "Absolutely! The 'Skills & Services' category allows students to exchange coding tutoring, design critique, language practice, or resume reviews in reciprocal sessions."
    },
    {
      q: "What if I just want to give away items for free?",
      a: "You can select the 'Giveaways' exchange type when creating a listing. Graduating seniors frequently give away lab goggles, reference sheets, notebooks, and monitors to incoming freshmen."
    }
  ];

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setCurrentPage('explore');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrimaryClick = () => {
    if (currentUser) {
      setCurrentPage('explore');
    } else {
      setCurrentPage('login');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden pb-16 select-none text-left">
      
      {/* Subtle Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[360px] bg-terracotta/6 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[650px] left-[5%] w-[320px] h-[320px] bg-warm-amber/6 rounded-full blur-[90px] pointer-events-none -z-10" />
      <div className="absolute top-[1400px] right-[5%] w-[360px] h-[360px] bg-denim-blue/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* ================= SECTION 1: HERO ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-16 sm:pb-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            
            {/* Campus Verified Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-terracotta/10 border border-terracotta/25 rounded-full shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-terracotta animate-pulse" />
              <span className="text-[11px] font-extrabold text-terracotta tracking-wider uppercase font-display">
                AI-Powered Campus Resource Exchange • 100% Free
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-display font-extrabold tracking-tight text-charcoal leading-[1.1]">
              Turn What You Have <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-terracotta via-warm-amber to-terracotta">
                Into What You Need.
              </span>
            </h1>

            {/* Subheading */}
            <p className="max-w-xl text-muted-gray font-sans text-base sm:text-lg font-normal leading-relaxed">
              Stop letting expensive textbooks, calculators, and hardware gather dust. RExchange connects verified classmates with intelligent double-ended compatibility matching.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mt-2">
              <button 
                onClick={handlePrimaryClick}
                className="w-full sm:w-auto px-7 py-3.5 bg-terracotta hover:bg-terracotta/90 text-white font-semibold rounded-xl shadow-md shadow-terracotta/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
              >
                Start Exploring
                <ArrowRight className="w-4 h-4" />
              </button>

              <button 
                onClick={() => {
                  setCurrentPage('matches');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-7 py-3.5 bg-warm-surface hover:bg-warm-beige/50 text-charcoal font-semibold rounded-xl border border-warm-border transition-all hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-warm-amber" />
                Live AI Matcher
              </button>
            </div>

            {/* Quick Demo Login Shortcut */}
            {!currentUser && (
              <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-muted-gray font-sans">
                <span className="font-semibold text-charcoal">Quick Test Login:</span>
                {DEMO_USERS.map((demo) => (
                  <button
                    key={demo.id}
                    onClick={() => {
                      if (onLogin) {
                        localStorage.setItem('rexchange_current_session', JSON.stringify(demo));
                        onLogin(demo);
                      }
                    }}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-warm-border rounded-lg text-xs font-medium text-charcoal hover:border-terracotta hover:text-terracotta transition-all shadow-2xs cursor-pointer"
                  >
                    <img src={demo.avatar} alt={demo.name} className="w-3.5 h-3.5 rounded-full object-cover" />
                    <span>{demo.name.split(' ')[0]} ({demo.department.split(' ')[0]})</span>
                  </button>
                ))}
              </div>
            )}

            {/* Social Trust Indicators */}
            <div className="pt-4 border-t border-warm-border/60 flex flex-wrap items-center gap-6 text-xs text-muted-gray">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-forest-green" />
                <span>Verified .edu student network</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-terracotta" />
                <span>Designated Campus Safe Zones</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-warm-amber" />
                <span>No platform cuts or cash fees</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive AI Match Simulation Card */}
          <div className="lg:col-span-5 relative w-full flex flex-col items-center">
            
            {/* Simulation Header Selector */}
            <div className="w-full max-w-[420px] mb-3 flex items-center justify-between px-1">
              <span className="text-xs font-display font-bold uppercase tracking-wider text-muted-gray flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-terracotta" />
                Live AI Match Simulation
              </span>
              <div className="flex items-center gap-1">
                {simulations.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSimulationIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                      activeSimulationIndex === idx ? 'bg-terracotta w-5' : 'bg-warm-border hover:bg-muted-gray'
                    }`}
                    title={`Scenario ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Main Interactive Simulation Card */}
            <div className="w-full max-w-[420px] bg-white border border-warm-border rounded-3xl p-6 shadow-premium relative overflow-hidden transition-all duration-300">
              
              {/* Category pill */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 bg-warm-ivory border border-warm-border rounded-lg text-[11px] font-bold text-charcoal font-sans">
                  {activeSim.title}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-forest-green/10 border border-forest-green/20 rounded-lg text-[11px] font-extrabold text-forest-green font-mono">
                  <CheckCircle2 className="w-3 h-3" />
                  {activeSim.score}% Synergy
                </span>
              </div>

              {/* Top Student Box */}
              <div className="p-3.5 bg-warm-surface border border-warm-border/80 rounded-2xl mb-3">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-terracotta/20 text-terracotta flex items-center justify-center font-bold text-xs">
                      {activeSim.userA.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-charcoal">{activeSim.userA.name}</div>
                      <div className="text-[10px] text-muted-gray">{activeSim.userA.dept}</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-extrabold text-terracotta uppercase tracking-wider bg-terracotta/10 px-2 py-0.5 rounded">
                    Has
                  </span>
                </div>
                <div className="text-xs font-semibold text-charcoal font-sans pl-9">
                  {activeSim.userA.item}
                </div>
              </div>

              {/* Double-ended Reciprocal Connector */}
              <div className="flex items-center justify-center py-2 relative">
                <div className="w-full h-px bg-dashed border-t border-dashed border-warm-border" />
                <div className="absolute px-3 py-1 bg-charcoal text-white rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
                  <ArrowLeftRight className="w-3 h-3 text-warm-amber" />
                  <span>Double Reciprocal Swap</span>
                </div>
              </div>

              {/* Bottom Student Box */}
              <div className="p-3.5 bg-warm-surface border border-warm-border/80 rounded-2xl mt-3">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-denim-blue/20 text-denim-blue flex items-center justify-center font-bold text-xs">
                      {activeSim.userB.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-charcoal">{activeSim.userB.name}</div>
                      <div className="text-[10px] text-muted-gray">{activeSim.userB.dept}</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-extrabold text-denim-blue uppercase tracking-wider bg-denim-blue/10 px-2 py-0.5 rounded">
                    Has
                  </span>
                </div>
                <div className="text-xs font-semibold text-charcoal font-sans pl-9">
                  {activeSim.userB.item}
                </div>
              </div>

              {/* AI Match Rationale */}
              <div className="mt-4 p-3 bg-forest-green/5 border border-forest-green/20 rounded-xl flex items-start gap-2">
                <Sparkles className="w-3.5 h-3.5 text-forest-green shrink-0 mt-0.5" />
                <p className="text-[11px] text-forest-green/90 leading-relaxed font-sans font-medium">
                  {activeSim.reason}
                </p>
              </div>

              {/* Interactive Simulation Switchers */}
              <div className="mt-4 pt-3 border-t border-warm-border/50 flex items-center justify-between text-[11px] text-muted-gray">
                <span>Click to preview scenario:</span>
                <div className="flex gap-1.5">
                  {simulations.map((sim, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSimulationIndex(idx)}
                      className={`px-2 py-0.5 rounded-md text-[10px] font-semibold transition-all cursor-pointer ${
                        activeSimulationIndex === idx 
                          ? 'bg-charcoal text-white' 
                          : 'bg-warm-beige/50 text-muted-gray hover:text-charcoal'
                      }`}
                    >
                      #{idx + 1}
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* ================= SECTION 2: LIVE CAMPUS ACTIVITY TICKER ================= */}
      <div className="border-y border-warm-border/80 bg-warm-surface/60 py-3.5 backdrop-blur-sm overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-4 justify-between">
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-forest-green animate-ping" />
            <span className="text-xs font-display font-extrabold uppercase tracking-wider text-charcoal">
              Live Campus Activity
            </span>
          </div>

          {/* Activity items */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-xs text-muted-gray font-sans overflow-x-auto w-full md:w-auto">
            {liveActivity.slice(0, 3).map((act, i) => (
              <div key={i} className="inline-flex items-center gap-2 shrink-0">
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-terracotta/10 text-terracotta">
                  {act.tag}
                </span>
                <span className="text-charcoal font-medium">{act.text}</span>
                <span className="text-[10px] text-muted-gray">({act.time})</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= SECTION 3: PLATFORM IMPACT METRICS ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white border border-warm-border p-6 rounded-2xl shadow-sm text-left">
            <div className="text-3xl sm:text-4xl font-display font-extrabold text-terracotta mb-1">
              $52,400+
            </div>
            <div className="text-xs sm:text-sm font-bold text-charcoal">Student Money Saved</div>
            <p className="text-[11px] text-muted-gray mt-1">Direct textbook & gear barter</p>
          </div>

          <div className="bg-white border border-warm-border p-6 rounded-2xl shadow-sm text-left">
            <div className="text-3xl sm:text-4xl font-display font-extrabold text-forest-green mb-1">
              1,480+
            </div>
            <div className="text-xs sm:text-sm font-bold text-charcoal">Resources Exchanged</div>
            <p className="text-[11px] text-muted-gray mt-1">Calculators, notes, electronics</p>
          </div>

          <div className="bg-white border border-warm-border p-6 rounded-2xl shadow-sm text-left">
            <div className="text-3xl sm:text-4xl font-display font-extrabold text-warm-amber mb-1">
              98.8%
            </div>
            <div className="text-xs sm:text-sm font-bold text-charcoal">Match Satisfaction</div>
            <p className="text-[11px] text-muted-gray mt-1">AI mutual compatibility accuracy</p>
          </div>

          <div className="bg-white border border-warm-border p-6 rounded-2xl shadow-sm text-left">
            <div className="text-3xl sm:text-4xl font-display font-extrabold text-denim-blue mb-1">
              0% Fees
            </div>
            <div className="text-xs sm:text-sm font-bold text-charcoal">Pure Campus Barter</div>
            <p className="text-[11px] text-muted-gray mt-1">No transaction cuts or ads</p>
          </div>
        </div>
      </div>

      {/* ================= SECTION 4: EXPLORE CATEGORIES ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 border-t border-warm-border/50 text-left">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-display font-extrabold uppercase tracking-wider text-terracotta mb-1">
              Browse by Needs
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-charcoal">
              Explore Campus Marketplace Hubs
            </h2>
          </div>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setCurrentPage('explore');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-semibold text-terracotta hover:underline inline-flex items-center gap-1 cursor-pointer"
          >
            View all 11+ listings →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((cat, idx) => {
            const CatIcon = cat.icon;
            return (
              <div 
                key={idx}
                onClick={() => handleCategoryClick(cat.title)}
                className="group bg-white border border-warm-border p-5 rounded-2xl cursor-pointer hover:-translate-y-1 hover:border-terracotta/40 transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-warm-ivory border border-warm-border flex items-center justify-center text-charcoal group-hover:text-terracotta transition-colors">
                      <CatIcon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-muted-gray bg-warm-ivory px-2 py-0.5 rounded-full border border-warm-border/60">
                      {cat.count}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-charcoal group-hover:text-terracotta text-sm sm:text-base transition-colors mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-muted-gray leading-relaxed font-sans font-normal">
                    {cat.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-warm-border/40 text-[11px] font-semibold text-terracotta flex items-center gap-1">
                  <span>Browse Hub</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= SECTION 5: HOW IT WORKS ================= */}
      <div id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 py-20 border-t border-warm-border/50 text-left">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-display font-extrabold uppercase tracking-wider text-terracotta mb-1">
            Seamless Peer Barter
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal">
            How The Campus Exchange Loop Works
          </h2>
          <p className="text-muted-gray text-sm sm:text-base leading-relaxed mt-2 font-sans">
            Designed for busy students. Zero awkward bargaining, zero fees.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative bg-white border border-warm-border p-6 rounded-2xl shadow-premium flex flex-col justify-between">
              <div>
                <span className="font-display font-extrabold text-4xl text-terracotta/15 block mb-2">
                  {step.step}
                </span>
                <h3 className="text-base font-display font-bold text-charcoal mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-gray text-xs sm:text-sm leading-relaxed font-sans font-normal mb-4">
                  {step.description}
                </p>
              </div>
              <div className="pt-3 border-t border-warm-border/50">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-forest-green uppercase tracking-wider">
                  <Check className="w-3 h-3" />
                  {step.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= SECTION 6: CAMPUS SAFE ZONES & TRUST ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 border-t border-warm-border/50 text-left">
        <div className="bg-gradient-to-br from-white via-warm-surface to-warm-ivory border border-warm-border rounded-3xl p-8 sm:p-12 shadow-premium">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-forest-green/10 border border-forest-green/20 rounded-full w-fit">
                <ShieldCheck className="w-4 h-4 text-forest-green" />
                <span className="text-[11px] font-extrabold text-forest-green font-display uppercase tracking-wider">
                  Campus Trust & Safety Guarantee
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-display font-bold text-charcoal leading-tight">
                Trade Safely With Verified Classmates
              </h2>

              <p className="text-muted-gray text-xs sm:text-sm leading-relaxed font-sans">
                Never meet strangers in off-campus parking lots. RExchange enforces verified campus student credentials and recommends official high-visibility Safe Zones for all physical meetups.
              </p>

              <div className="flex flex-col gap-2.5 mt-2 text-xs font-medium text-charcoal font-sans">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center shrink-0">
                    <MapPin className="w-3 h-3" />
                  </div>
                  <span><strong>Main University Library:</strong> 2nd Floor Group Study Desks</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-forest-green/10 text-forest-green flex items-center justify-center shrink-0">
                    <MapPin className="w-3 h-3" />
                  </div>
                  <span><strong>Science & Engineering Quad:</strong> Commons Cafe & Atrium</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-denim-blue/10 text-denim-blue flex items-center justify-center shrink-0">
                    <MapPin className="w-3 h-3" />
                  </div>
                  <span><strong>Student Union:</strong> Front Information Desk & Lounge</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-warm-border shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-warm-amber/15 text-warm-amber flex items-center justify-center mb-3">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold font-display text-charcoal mb-1">.edu Email Authentication</h4>
                <p className="text-[11px] text-muted-gray">Every profile is tied to active enrolled university credentials.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-warm-border shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-forest-green/15 text-forest-green flex items-center justify-center mb-3">
                  <Star className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold font-display text-charcoal mb-1">Student Trust Badges</h4>
                <p className="text-[11px] text-muted-gray">Peer ratings, verified swap counters, and on-time reliability scores.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-warm-border shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-terracotta/15 text-terracotta flex items-center justify-center mb-3">
                  <ArrowLeftRight className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold font-display text-charcoal mb-1">Transparent Proposals</h4>
                <p className="text-[11px] text-muted-gray">Both sides confirm items and condition before any meetup takes place.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-warm-border shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-rose-500/15 text-rose-500 flex items-center justify-center mb-3">
                  <Zap className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold font-display text-charcoal mb-1">Instant Reconnects</h4>
                <p className="text-[11px] text-muted-gray">Build semester-long study loops with classmates in your major.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ================= SECTION 7: STUDENT TESTIMONIALS ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 border-t border-warm-border/50 text-left">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-display font-extrabold uppercase tracking-wider text-terracotta mb-1">
            Student Stories
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal">
            Loved By Classmates Across Campus
          </h2>
          <p className="text-muted-gray text-sm sm:text-base leading-relaxed mt-2 font-sans">
            Hear from students who traded textbooks, lab equipment, and skills this semester.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white border border-warm-border p-6 rounded-2xl shadow-premium flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-warm-amber">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-warm-amber text-warm-amber" />
                    ))}
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-forest-green/10 text-forest-green">
                    {t.saved}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-charcoal leading-relaxed font-sans italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-warm-border/50">
                <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full object-cover border border-warm-border" />
                <div>
                  <div className="text-xs font-bold text-charcoal font-display">{t.name}</div>
                  <div className="text-[10px] text-muted-gray font-sans">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= SECTION 8: INTERACTIVE FAQ ================= */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 border-t border-warm-border/50 text-left">
        <div className="text-center mb-12">
          <div className="text-xs font-display font-extrabold uppercase tracking-wider text-terracotta mb-1">
            Got Questions?
          </div>
          <h2 className="text-3xl font-display font-bold text-charcoal">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white border border-warm-border rounded-2xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-warm-ivory/50 transition-colors"
                >
                  <span className="font-display font-bold text-sm sm:text-base text-charcoal">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-muted-gray shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-terracotta' : ''}`} />
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-4 text-xs sm:text-sm text-muted-gray font-sans leading-relaxed border-t border-warm-border/40 pt-3 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= SECTION 9: FINAL CTA ================= */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 text-center">
        <div className="glass-panel p-10 sm:p-16 rounded-3xl border border-warm-border shadow-premium relative overflow-hidden flex flex-col items-center gap-6">
          <div className="absolute top-0 right-0 w-44 h-44 bg-terracotta/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-44 h-44 bg-warm-amber/8 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-terracotta/10 border border-terracotta/20 rounded-full text-terracotta text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join 1,200+ Classmates</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-charcoal leading-tight max-w-xl">
            Start Your First Campus Exchange Today.
          </h2>
          
          <p className="text-muted-gray text-xs sm:text-base max-w-md mx-auto font-sans leading-relaxed">
            Have a textbook you won't open again? Need a graphing calculator for Monday's midterm? Put your resources to work.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mt-2">
            <button 
              onClick={handlePrimaryClick}
              className="w-full sm:w-auto px-8 py-3.5 bg-terracotta hover:bg-terracotta/90 text-white font-semibold rounded-xl shadow-md shadow-terracotta/25 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
            >
              Explore All Listings
              <ArrowRight className="w-4 h-4" />
            </button>

            <button 
              onClick={() => {
                setCurrentPage('create');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-warm-beige/40 text-charcoal font-semibold rounded-xl border border-warm-border transition-all hover:scale-[1.02] cursor-pointer shadow-xs"
            >
              + Post Something You Have
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
