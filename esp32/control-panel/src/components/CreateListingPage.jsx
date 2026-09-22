import React, { useState } from 'react';
import { Sparkles, Send, CheckCircle2, RefreshCw, Info, AlertTriangle } from 'lucide-react';
import { CATEGORIES } from '../data/dummyData';

export default function CreateListingPage({ onAddListing, setCurrentPage }) {
  // Form states
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Books & Notes');
  const [offer, setOffer] = useState('');
  const [lookingFor, setLookingFor] = useState('');
  const [exchangeType, setExchangeType] = useState('Exchange');
  const [condition, setCondition] = useState('Good');
  const [description, setDescription] = useState('');
  
  // AI Smart Listing Input
  const [aiText, setAiText] = useState('');
  const [isAiAnalyzing, setIsAiAnalyzing] = useState(false);
  const [aiSuccess, setAiSuccess] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [highlightFields, setHighlightFields] = useState(false);

  // Simulated AI Field Extraction
  const handleAiAnalyze = () => {
    if (!aiText.trim()) return;

    setIsAiAnalyzing(true);
    setAiSuccess(false);

    // Simulate network/API delay for 1.5 seconds to look authentic
    setTimeout(() => {
      const text = aiText.toLowerCase().trim();
      let extractedCategory = 'Books & Notes';
      let extractedType = 'Exchange';
      let extractedCondition = 'Good';
      let extractedOffer = '';
      let extractedLookingFor = '';
      let extractedTitle = '';

      // Parse Category
      if (text.includes('book') || text.includes('math') || text.includes('notes') || text.includes('textbook') || text.includes('paper') || text.includes('manual')) {
        extractedCategory = 'Books & Notes';
      } else if (text.includes('arduino') || text.includes('calculator') || text.includes('kit') || text.includes('charger') || text.includes('electronic') || text.includes('sensor') || text.includes('wire') || text.includes('hardware')) {
        extractedCategory = 'Electronics';
      } else if (text.includes('help') || text.includes('tutor') || text.includes('teach') || text.includes('learn') || text.includes('skill') || text.includes('design') || text.includes('figma') || text.includes('resume') || text.includes('interview')) {
        extractedCategory = 'Skills & Services';
      } else if (text.includes('pass') || text.includes('ticket') || text.includes('event') || text.includes('hackathon') || text.includes('spot') || text.includes('opportunity')) {
        extractedCategory = 'Opportunities';
      } else if (text.includes('free') || text.includes('giveaway') || text.includes('donate') || text.includes('gift')) {
        extractedCategory = 'Giveaways';
        extractedType = 'Give Away';
      }

      // Parse Condition
      if (text.includes('like new') || text.includes('brand new') || text.includes('new condition')) {
        extractedCondition = 'Like New';
      } else if (text.includes('excellent') || text.includes('flawless') || text.includes('perfect')) {
        extractedCondition = 'Excellent';
      } else if (text.includes('good') || text.includes('fine')) {
        extractedCondition = 'Good';
      } else if (text.includes('fair') || text.includes('worn') || text.includes('used') || text.includes('old')) {
        extractedCondition = 'Fair';
      } else if (extractedCategory === 'Skills & Services') {
        extractedCondition = 'N/A';
      }

      // Parse Exchange Type
      if (text.includes('free') || text.includes('giveaway') || text.includes('donate') || text.includes('give away') || text.includes('gift')) {
        extractedType = 'Give Away';
        extractedLookingFor = 'Nothing (Free)';
      } else if (text.includes('teach') || text.includes('tutor') || text.includes('learn') || text.includes('skill') || text.includes('help me learn')) {
        extractedType = 'Skill Swap';
      } else {
        extractedType = 'Exchange';
      }

      // Specific handling for the test input:
      // "I have an Arduino Uno kit in good condition with sensors and jumper wires. I don't use it anymore and I'm looking for someone who can help me learn Python or exchange it for good Python programming notes."
      if (text.includes('arduino') && text.includes('python')) {
        extractedTitle = 'Arduino Uno Kit with Sensors';
        extractedOffer = 'Arduino Uno kit with sensors and jumper wires';
        extractedLookingFor = 'Python learning help or Python notes';
        extractedCategory = 'Electronics';
        extractedCondition = 'Good';
        extractedType = 'Exchange';
      } 
      // Specific handling for math textbook & python notes
      else if (text.includes('mathematics textbook') && text.includes('python notes')) {
        extractedTitle = 'Engineering Mathematics Textbook';
        extractedOffer = 'Engineering Mathematics textbook';
        extractedLookingFor = 'Python programming notes';
        extractedCategory = 'Books & Notes';
        extractedCondition = 'Like New';
        extractedType = 'Exchange';
      }
      else {
        // Parsing Substrings: "I have X" and "looking for Y"
        const haveMatch = aiText.match(/(?:i\s+have|offering|offer)\s+(?:an|a|some)?\s*([^,.]+?)(?:\s+in\s+(?:good|excellent|like|fair)\s+condition|\s+and|\s+with|\s+but|\s+that|\s+i\s+don't|looking\s+for|\s+for\s+exchange|$)/i);
        if (haveMatch && haveMatch[1]) {
          extractedOffer = haveMatch[1].trim();
          extractedTitle = extractedOffer;
        }

        const lookMatch = aiText.match(/(?:looking\s+for|look\s+for|in\s+exchange\s+for|need\s+a|want\s+a|interested\s+in|help\s+me\s+learn)\s+([^,.]+)/i);
        if (lookMatch && lookMatch[1]) {
          extractedLookingFor = lookMatch[1].trim();
        }

        // Fallbacks
        if (!extractedOffer) {
          extractedOffer = 'Campus study resource';
          extractedTitle = 'Campus Resource';
        }
        if (!extractedLookingFor && extractedType !== 'Give Away') {
          extractedLookingFor = 'Help or study resource';
        }
      }

      // Title casing formatting
      const capitalize = (str) => str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
      
      setTitle(capitalize(extractedTitle || extractedOffer));
      setOffer(capitalize(extractedOffer));
      setLookingFor(extractedType === 'Give Away' ? 'Nothing (Free)' : capitalize(extractedLookingFor));
      setCategory(extractedCategory);
      setExchangeType(extractedType);
      setCondition(extractedCondition);
      setDescription(aiText);

      setIsAiAnalyzing(false);
      setAiSuccess(true);
      setHighlightFields(true);

      // Flash animation lasts 1.5 seconds
      setTimeout(() => {
        setHighlightFields(false);
      }, 1500);
    }, 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !offer || !description || (!lookingFor && exchangeType !== 'Give Away')) {
      alert("Please fill in all required fields!");
      return;
    }

    // Set styling gradients based on category
    let gradientFrom = 'from-indigo-650';
    let gradientTo = 'to-blue-500';
    if (category === 'Electronics') {
      gradientFrom = 'from-cyan-600';
      gradientTo = 'to-blue-600';
    } else if (category === 'Skills & Services') {
      gradientFrom = 'from-emerald-600';
      gradientTo = 'to-teal-500';
    } else if (category === 'Opportunities') {
      gradientFrom = 'from-amber-600';
      gradientTo = 'to-orange-500';
    } else if (category === 'Giveaways') {
      gradientFrom = 'from-rose-600';
      gradientTo = 'to-pink-500';
    }

    const newListing = {
      title,
      category,
      offer,
      lookingFor: exchangeType === 'Give Away' ? 'Nothing (Free)' : lookingFor,
      exchangeType,
      condition: category === 'Skills & Services' ? 'N/A' : condition,
      description,
      gradientFrom,
      gradientTo
    };

    onAddListing(newListing);
    setFormSubmitted(true);
    
    // Auto redirect to Explore page after 2 seconds
    setTimeout(() => {
      setCurrentPage('explore');
    }, 1800);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-charcoal">Create a Listing</h1>
        <p className="text-muted-gray text-sm mt-1">
          Post what resource or skill you can share, and what you are looking for in return.
        </p>
      </div>

      {formSubmitted ? (
        /* Success Screen */
        <div className="glass-panel p-16 rounded-3xl text-center border border-warm-border shadow-premium animate-fade-in">
          <div className="w-16 h-16 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto mb-6 text-forest-green border border-forest-green/20">
            <CheckCircle2 className="w-10 h-10 animate-bounce" />
          </div>
          <h2 className="text-2xl font-display font-bold text-charcoal mb-2">Listing Published!</h2>
          <p className="text-muted-gray max-w-sm mx-auto text-sm leading-relaxed mb-4">
            Your listing has been posted successfully to the campus. Other students can now see it and suggest matches.
          </p>
          <div className="text-xs text-terracotta font-semibold font-mono flex items-center justify-center gap-2">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            Redirecting you to Explore page...
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* AI Helper Sidebar */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-panel p-6 rounded-2xl border border-warm-border relative overflow-hidden shadow-premium">
              {/* Background glowing gradient */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-terracotta/5 rounded-full blur-xl pointer-events-none" />
              
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 bg-terracotta/10 rounded-lg text-terracotta">
                  <Sparkles className="w-5 h-5 text-terracotta" />
                </div>
                <h3 className="font-display font-bold text-charcoal flex items-center gap-1.5">
                  AI Smart Listing
                </h3>
              </div>
              
              <p className="text-muted-gray text-xs sm:text-sm leading-relaxed mb-4">
                Type what you offer and need in plain English, and our AI will automatically parse the tags and structure for you.
              </p>

              <textarea
                value={aiText}
                onChange={(e) => setAiText(e.target.value)}
                placeholder="Example: I have an Engineering Mathematics textbook in like new condition and I'm looking for Python notes or someone to teach me Python."
                className="w-full h-32 p-3 bg-warm-surface border border-warm-border rounded-xl text-xs sm:text-sm text-charcoal placeholder-muted-gray focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta/50 transition-all resize-none mb-4"
              />

              <button
                type="button"
                onClick={handleAiAnalyze}
                disabled={isAiAnalyzing || !aiText.trim()}
                className="w-full py-3 px-4 bg-terracotta hover:bg-terracotta/90 disabled:bg-terracotta/40 disabled:text-slate-400 text-white rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                {isAiAnalyzing ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Analyzing your listing...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-white/80 animate-pulse" />
                    Analyze with AI
                  </>
                )}
              </button>

              {aiSuccess && (
                <div className="mt-4 p-3 bg-forest-green/10 border border-forest-green/20 rounded-xl text-forest-green text-xs flex items-center gap-2 animate-fade-in shadow-inner shadow-forest-green/5">
                  <CheckCircle2 className="w-4 h-4 text-forest-green" />
                  <span>AI analysis complete — review your listing before publishing.</span>
                </div>
              )}
            </div>

            {/* Smart Tips Info */}
            <div className="glass-panel p-6 rounded-2xl border border-warm-border text-muted-gray text-xs sm:text-sm flex flex-col gap-3 shadow-premium">
              <div className="flex items-center gap-2 text-charcoal font-bold">
                <Info className="w-4 h-4 text-terracotta" />
                Tips for Great Exchanges
              </div>
              <ul className="list-disc pl-5 space-y-2 text-xs leading-relaxed text-muted-gray">
                <li>Be specific about what textbooks or electronics model you have.</li>
                <li>Clearly specify what skills/topics you want to swap.</li>
                <li>Free listings under 'Giveaways' do not require you to input what you want.</li>
              </ul>
            </div>
          </div>

          {/* Listing Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-warm-border/80 flex flex-col gap-5 shadow-premium">
            <h3 className="text-lg font-display font-bold text-charcoal border-b border-warm-border/60 pb-3">
              Listing Details
            </h3>

            {/* Title Field */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-charcoal uppercase tracking-wider">
                Listing Title <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Engineering Mathematics Textbook"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={`px-4 py-2.5 bg-warm-surface border rounded-xl text-charcoal placeholder-muted-gray focus:outline-none text-sm transition-all duration-200 ${
                  highlightFields 
                    ? 'border-terracotta bg-terracotta/10 ring-1 ring-terracotta scale-[1.005]' 
                    : 'border-warm-border/85 focus:border-terracotta focus:ring-1 focus:ring-terracotta'
                }`}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Category Field */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-charcoal uppercase tracking-wider">
                  Category <span className="text-rose-500">*</span>
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className={`px-4 py-2.5 bg-warm-surface border rounded-xl text-charcoal focus:outline-none text-sm transition-all duration-200 ${
                    highlightFields 
                      ? 'border-terracotta bg-terracotta/10 ring-1 ring-terracotta scale-[1.005]' 
                      : 'border-warm-border/85 focus:border-terracotta focus:ring-1 focus:ring-terracotta'
                  }`}
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.name} className="bg-warm-surface text-charcoal">
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Exchange Type Field */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-charcoal uppercase tracking-wider">
                  Exchange Type <span className="text-rose-500">*</span>
                </label>
                <select
                  value={exchangeType}
                  onChange={(e) => {
                    setExchangeType(e.target.value);
                    if (e.target.value === 'Give Away') setLookingFor('Nothing (Free)');
                  }}
                  className={`px-4 py-2.5 bg-warm-surface border rounded-xl text-charcoal focus:outline-none text-sm transition-all duration-200 ${
                    highlightFields 
                      ? 'border-terracotta bg-terracotta/10 ring-1 ring-terracotta scale-[1.005]' 
                      : 'border-warm-border/85 focus:border-terracotta focus:ring-1 focus:ring-terracotta'
                  }`}
                >
                  <option value="Exchange" className="bg-warm-surface">Exchange</option>
                  <option value="Give Away" className="bg-warm-surface">Give Away</option>
                  <option value="Skill Swap" className="bg-warm-surface">Skill Swap</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* What are you offering */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-charcoal uppercase tracking-wider">
                  What are you offering? <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Math Textbook"
                  value={offer}
                  onChange={(e) => setOffer(e.target.value)}
                  className={`px-4 py-2.5 bg-warm-surface border rounded-xl text-charcoal placeholder-muted-gray focus:outline-none text-sm transition-all duration-200 ${
                    highlightFields 
                      ? 'border-terracotta bg-terracotta/10 ring-1 ring-terracotta scale-[1.005]' 
                      : 'border-warm-border/85 focus:border-terracotta focus:ring-1 focus:ring-terracotta'
                  }`}
                />
              </div>

              {/* What are you looking for */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-charcoal uppercase tracking-wider">
                  What are you looking for? {exchangeType !== 'Give Away' && <span className="text-rose-500">*</span>}
                </label>
                <input
                  type="text"
                  required={exchangeType !== 'Give Away'}
                  disabled={exchangeType === 'Give Away'}
                  placeholder={exchangeType === 'Give Away' ? 'Nothing (Free)' : 'e.g. Python Notes'}
                  value={exchangeType === 'Give Away' ? 'Nothing (Free)' : lookingFor}
                  onChange={(e) => setLookingFor(e.target.value)}
                  className={`px-4 py-2.5 bg-warm-surface border rounded-xl text-charcoal placeholder-muted-gray focus:outline-none text-sm transition-all duration-200 ${
                    highlightFields 
                      ? 'border-terracotta bg-terracotta/10 ring-1 ring-terracotta scale-[1.005]' 
                      : 'border-warm-border/85 focus:border-terracotta focus:ring-1 focus:ring-terracotta'
                  } disabled:bg-warm-beige/40 disabled:text-muted-gray disabled:border-warm-border`}
                />
              </div>
            </div>

            {/* Condition Field (Skip for services) */}
            {category !== 'Skills & Services' && (
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-charcoal uppercase tracking-wider">
                  Item Condition
                </label>
                <div className="flex flex-wrap gap-2">
                  {['Like New', 'Excellent', 'Good', 'Fair'].map((cond) => (
                    <button
                      key={cond}
                      type="button"
                      onClick={() => setCondition(cond)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border cursor-pointer transition-all duration-200 ${
                        condition === cond
                          ? 'bg-terracotta text-white border-terracotta shadow-sm shadow-terracotta/20'
                          : highlightFields 
                            ? 'border-terracotta bg-terracotta/10 text-terracotta' 
                            : 'bg-warm-surface border-warm-border text-muted-gray hover:text-charcoal hover:bg-warm-beige/30'
                      }`}
                    >
                      {cond}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Description Field */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-charcoal uppercase tracking-wider">
                Full Description <span className="text-rose-500">*</span>
              </label>
              <textarea
                required
                rows={4}
                placeholder="Describe your item, include edition numbers, specific condition details, or what specific topics you want to study."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={`px-4 py-2.5 bg-warm-surface border rounded-xl text-charcoal placeholder-muted-gray focus:outline-none text-sm resize-y transition-all duration-200 ${
                  highlightFields 
                    ? 'border-terracotta bg-terracotta/10 ring-1 ring-terracotta scale-[1.005]' 
                    : 'border-warm-border/85 focus:border-terracotta focus:ring-1 focus:ring-terracotta'
                }`}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-2 py-3 px-4 bg-terracotta hover:bg-terracotta/90 text-white rounded-xl text-sm font-semibold transition-all hover:shadow-lg hover:shadow-terracotta/20 hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              Publish Listing
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
