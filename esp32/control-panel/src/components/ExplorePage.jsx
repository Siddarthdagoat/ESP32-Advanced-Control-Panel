import React, { useState, useEffect } from 'react';
import { Search, Compass, ListPlus, Sparkles, Filter as FilterIcon, User } from 'lucide-react';
import { CATEGORIES } from '../data/dummyData';
import { calculateMatchScore } from '../utils/matching';

export default function ExplorePage({ 
  listings, 
  requests = [], 
  currentUser, 
  onSelectListing, 
  initialCategory, 
  clearInitialCategory, 
  setCurrentPage 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'All');
  const [selectedType, setSelectedType] = useState('All');

  // Sync with initialCategory if set from external pages
  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
      clearInitialCategory();
    }
  }, [initialCategory]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedType('All');
  };

  // Filter listings based on search & filters
  const filteredListings = listings.filter((item) => {
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.offer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.lookingFor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.studentName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesType = selectedType === 'All' || item.exchangeType === selectedType;

    return matchesSearch && matchesCategory && matchesType;
  });

  // Calculate Campus Pulse statistics from actual listings/requests
  const categoryCounts = {};
  listings.forEach(l => {
    categoryCounts[l.category] = (categoryCounts[l.category] || 0) + 1;
  });
  
  let trendingCategory = '—';
  let maxCount = 0;
  Object.keys(categoryCounts).forEach(cat => {
    if (categoryCounts[cat] > maxCount) {
      maxCount = categoryCounts[cat];
      trendingCategory = cat;
    }
  });

  const requestCounts = {};
  listings.forEach(l => {
    if (l.lookingFor && l.lookingFor !== 'Nothing (Free)') {
      const item = l.lookingFor.toLowerCase().trim();
      requestCounts[item] = (requestCounts[item] || 0) + 1;
    }
  });
  
  let mostRequestedItem = '—';
  let maxReqCount = 0;
  Object.keys(requestCounts).forEach(item => {
    if (requestCounts[item] > maxReqCount) {
      maxReqCount = requestCounts[item];
      mostRequestedItem = item.charAt(0).toUpperCase() + item.slice(1);
    }
  });

  const getExchangeTypeBadge = (type) => {
    if (type === 'Give Away') {
      return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/10 text-rose-600 border border-rose-500/20">Free</span>;
    }
    if (type === 'Skill Swap') {
      return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">Skill Swap</span>;
    }
    return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500/10 text-indigo-650 border border-indigo-500/20">Swap</span>;
  };

  const getCategoryGradient = (category) => {
    if (category === 'Electronics') return 'from-blue-50 to-indigo-50/50';
    if (category === 'Skills & Services') return 'from-emerald-50 to-teal-50/50';
    if (category === 'Opportunities') return 'from-purple-50 to-pink-50/50';
    if (category === 'Giveaways') return 'from-rose-50 to-orange-50/50';
    return 'from-amber-50 to-yellow-50/50';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Page Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-display font-bold text-charcoal flex items-center gap-2">
            Explore Campus Listings
          </h1>
          <p className="text-muted-gray text-sm mt-1 font-sans">
            Browse and search for textbooks, components, skills, and handouts shared by your classmates.
          </p>
        </div>

        {/* AI Hint Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-forest-green/10 border border-forest-green/20 rounded-xl self-start md:self-auto shadow-sm">
          <Sparkles className="w-4 h-4 text-forest-green animate-pulse" />
          <span className="text-xs text-forest-green font-semibold">Automatic Match detection active</span>
        </div>
      </div>

      {listings.length === 0 ? (
        /* Professional Empty Marketplace State */
        <div className="glass-panel p-16 rounded-3xl text-center border border-warm-border shadow-premium max-w-xl mx-auto mt-8 animate-fade-in">
          <div className="w-16 h-16 bg-warm-beige rounded-2xl flex items-center justify-center mx-auto mb-6 text-terracotta border border-warm-border/50">
            <Compass className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-display font-bold text-charcoal mb-2">Nothing to explore yet</h3>
          <p className="text-muted-gray max-w-sm mx-auto text-sm leading-relaxed mb-6 font-normal">
            Be the first student to create a listing and start exchanging resources. Post what you have and what you need!
          </p>
          <button
            onClick={() => setCurrentPage('create')}
            className="px-6 py-3 bg-terracotta hover:bg-terracotta/90 text-white rounded-xl text-sm font-semibold shadow-md shadow-terracotta/20 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 mx-auto cursor-pointer"
          >
            <ListPlus className="w-4 h-4" />
            Create a Listing
          </button>
        </div>
      ) : (
        <>
          {/* Campus Pulse Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 animate-fade-in">
            <div className="glass-panel p-4 rounded-xl border border-warm-border/60 text-left shadow-sm bg-warm-surface/20">
              <span className="text-[9px] text-muted-gray font-extrabold uppercase tracking-wider block">Active Listings</span>
              <div className="text-xl font-display font-extrabold text-charcoal mt-0.5">
                {listings.length}
              </div>
              <span className="text-[8px] text-muted-gray mt-0.5 block">Shared on campus</span>
            </div>

            <div className="glass-panel p-4 rounded-xl border border-warm-border/60 text-left shadow-sm bg-warm-surface/20">
              <span className="text-[9px] text-muted-gray font-extrabold uppercase tracking-wider block">Active Swaps</span>
              <div className="text-xl font-display font-extrabold text-charcoal mt-0.5">
                {requests.filter(r => r.status === 'Accepted').length}
              </div>
              <span className="text-[8px] text-muted-gray mt-0.5 block">Swaps currently active</span>
            </div>

            <div className="glass-panel p-4 rounded-xl border border-warm-border/60 text-left shadow-sm bg-warm-surface/20">
              <span className="text-[9px] text-muted-gray font-extrabold uppercase tracking-wider block">Top Shared</span>
              <div className="text-sm font-extrabold text-charcoal mt-1 truncate">
                {trendingCategory}
              </div>
              <span className="text-[8px] text-muted-gray mt-0.5 block">Most shared resource type</span>
            </div>

            <div className="glass-panel p-4 rounded-xl border border-warm-border/60 text-left shadow-sm bg-warm-surface/20">
              <span className="text-[9px] text-muted-gray font-extrabold uppercase tracking-wider block">Most Requested</span>
              <div className="text-sm font-extrabold text-charcoal mt-1 truncate">
                {mostRequestedItem}
              </div>
              <span className="text-[8px] text-muted-gray mt-0.5 block">High demand resources</span>
            </div>
          </div>

          {/* Search and Filters Panel */}
          <div className="glass-panel p-6 rounded-2xl border border-warm-border/75 mb-8 flex flex-col gap-5 shadow-premium animate-fade-in">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-gray" />
              <input
                type="text"
                placeholder="Search textbook, programming notes, calculator, name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-warm-surface border border-warm-border rounded-xl text-charcoal placeholder-muted-gray focus:outline-none focus:border-terracotta/80 focus:ring-1 focus:ring-terracotta/80 transition-all text-sm sm:text-base font-sans"
              />
            </div>

            {/* Filters Group */}
            <div className="flex flex-col gap-4">
              {/* Category Filter Pills */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted-gray mb-2.5">
                  Categories
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCategory('All')}
                    className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      selectedCategory === 'All'
                        ? 'bg-terracotta text-white shadow-sm shadow-terracotta/25'
                        : 'bg-warm-surface text-muted-gray hover:text-charcoal hover:bg-warm-beige/50 border border-warm-border/80'
                    }`}
                  >
                    All Categories
                  </button>
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.name)}
                      className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                        selectedCategory === cat.name
                          ? 'bg-terracotta text-white shadow-sm shadow-terracotta/25'
                          : 'bg-warm-surface text-muted-gray hover:text-charcoal hover:bg-warm-beige/50 border border-warm-border/80'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Exchange Type Pills */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted-gray mb-2.5">
                  Exchange Type
                </div>
                <div className="flex flex-wrap gap-2">
                  {['All', 'Exchange', 'Give Away', 'Skill Swap'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                        selectedType === type
                          ? 'bg-terracotta/10 text-terracotta border border-terracotta/20 shadow-sm'
                          : 'bg-warm-surface text-muted-gray hover:text-charcoal hover:bg-warm-beige/50 border border-warm-border/80'
                      }`}
                    >
                      {type === 'All' ? 'All Types' : type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Listings Grid */}
          {filteredListings.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredListings.map((item) => {
                // Calculate dynamic compatibility score against user's listings
                const userListings = listings.filter(l => l.studentEmail === currentUser?.email);
                let bestScore = 0;
                if (currentUser) {
                  userListings.forEach(uL => {
                    const matchRes = calculateMatchScore(uL, item);
                    if (matchRes.score > bestScore) {
                      bestScore = matchRes.score;
                    }
                  });
                }

                return (
                  <div
                    key={item.id}
                    onClick={() => onSelectListing(item.id)}
                    className="glass-card rounded-2xl overflow-hidden flex flex-col cursor-pointer group border border-warm-border flex-grow shadow-premium hover:-translate-y-1 transition-all duration-300 animate-fade-in"
                  >
                    {/* Card visual header */}
                    <div className={`h-28 bg-gradient-to-br ${getCategoryGradient(item.category)} relative p-4 flex flex-col justify-between border-b border-warm-border/30`}>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-warm-surface/75 border border-warm-border/50 rounded-md text-charcoal backdrop-blur-sm">
                          {item.category}
                        </span>
                        {getExchangeTypeBadge(item.exchangeType)}
                      </div>
                      {item.condition && item.condition !== 'N/A' && (
                        <span className="self-start text-[10px] font-semibold bg-warm-surface/75 border border-warm-border/40 px-2 py-0.5 rounded text-muted-gray backdrop-blur-sm">
                          Condition: {item.condition}
                        </span>
                      )}
                    </div>

                    {/* Card content */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-display font-bold text-charcoal group-hover:text-terracotta mb-2 leading-snug line-clamp-1 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-gray text-xs sm:text-sm line-clamp-2 mb-2 leading-relaxed font-normal">
                          {item.description}
                        </p>
                        
                        {/* Dynamic AI Compatibility Badge */}
                        {bestScore >= 40 && (
                          <div className="mb-4 py-1 px-2.5 bg-forest-green/10 border border-forest-green/20 rounded-xl flex items-center gap-1.5 text-[9px] text-forest-green font-extrabold self-start inline-flex shadow-sm">
                            <Sparkles className="w-3 h-3 text-forest-green animate-pulse" />
                            AI MATCH — {bestScore}%
                          </div>
                        )}
                      </div>

                      <div className="border-t border-warm-border/50 pt-4 flex flex-col gap-3">
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div>
                            <div className="text-[10px] text-terracotta uppercase tracking-wider font-bold">Offering</div>
                            <div className="text-charcoal font-semibold truncate mt-0.5">{item.offer}</div>
                          </div>
                          <div>
                            <div className="text-[10px] text-denim-blue uppercase tracking-wider font-bold">Looking For</div>
                            <div className="text-charcoal font-semibold truncate mt-0.5">{item.lookingFor}</div>
                          </div>
                        </div>

                        {/* Student details footer */}
                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-warm-border/50">
                          {item.studentName ? (
                            <div className="flex items-center gap-2">
                              <img
                                src={item.studentAvatar || `https://api.dicebear.com/7.x/initials/svg?seed=${item.studentName}&backgroundColor=D97757`}
                                alt={item.studentName}
                                className="w-6 h-6 rounded-full object-cover border border-warm-border shadow-sm"
                              />
                              <span className="text-xs text-charcoal font-semibold truncate max-w-[120px]">
                                {item.studentName}
                              </span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-1.5 text-xs text-muted-gray font-semibold">
                              <User className="w-3.5 h-3.5" />
                              <span>Campus Resource</span>
                            </div>
                          )}
                          <span className="text-[10px] text-terracotta group-hover:underline font-bold transition-all">
                            View Swap Details →
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Empty State: Matches query filters, but has listings */
            <div className="glass-panel p-16 rounded-2xl text-center border border-warm-border shadow-premium">
              <div className="w-16 h-16 bg-warm-beige rounded-2xl flex items-center justify-center mx-auto mb-6 text-muted-gray border border-warm-border/50">
                <FilterIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-display font-bold text-charcoal mb-2">No listings found</h3>
              <p className="text-muted-gray max-w-sm mx-auto text-sm leading-relaxed mb-6 font-normal">
                We couldn't find any resources matching your search keywords or active filters. Try adjusting them.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-5 py-2.5 bg-warm-surface hover:bg-warm-beige/50 text-charcoal rounded-xl text-sm font-semibold border border-warm-border shadow-sm transition-all hover:scale-[1.01] cursor-pointer"
              >
                Clear Filters & Search
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
