import React, { useState, useEffect } from 'react';
import { ArrowLeft, RefreshCw, Sparkles, User, Tag, ShieldAlert, Check, Send, AlertCircle, X, ArrowLeftRight, Clock, MessageSquare } from 'lucide-react';
import { getTopMatches, calculateMatchScore } from '../utils/matching';

export default function ListingDetailsPage({ 
  listing, 
  allListings, 
  onSelectListing, 
  onBack, 
  onRequestExchange,
  existingRequests,
  onRequestExchangeRedirect,
  currentUser
}) {
  const [matches, setMatches] = useState([]);
  const [selectedMatchForProposal, setSelectedMatchForProposal] = useState(null);
  const [customMessage, setCustomMessage] = useState('');
  const [proposalSentStatus, setProposalSentStatus] = useState('idle'); // idle, sending, success

  // Filter listings belonging to this user
  const userListings = allListings.filter(l => l.studentEmail === currentUser?.email);

  // Calculate matches for this listing
  useEffect(() => {
    if (listing) {
      const topMatches = getTopMatches(listing, allListings);
      setMatches(topMatches);
    }
  }, [listing, allListings]);

  // Check if a request has already been made for this listing
  const alreadyRequested = existingRequests.some(req => 
    req.listingTitle === listing.title && req.fromUser === (currentUser?.name || '')
  ) || existingRequests.some(req => 
    req.listingTitle === listing.title && req.status !== 'Completed'
  );

  const simulateProfileMatch = () => {
    return {
      id: 'profile_sim',
      title: 'General Exchange Offer',
      offer: currentUser?.offers.split(',')[0] || 'My resources',
      category: 'Profile Details',
      studentName: currentUser?.name || 'Student',
      studentEmail: currentUser?.email || 'student@campus.edu',
      match: {
        score: 75,
        reason: `Profile swap: Proposing to exchange resources based on your interest in "${listing.offer}".`
      }
    };
  };

  const handleRequestClick = () => {
    if (alreadyRequested || proposalSentStatus !== 'idle') return;

    if (userListings.length > 0) {
      const selected = userListings[0];
      const scoreResult = calculateMatchScore(selected, listing);
      setSelectedMatchForProposal({
        ...selected,
        match: scoreResult
      });
    } else {
      setSelectedMatchForProposal(simulateProfileMatch());
    }
    setProposalSentStatus('idle');
    setCustomMessage('');
  };

  const handleSendMatchProposalRequest = () => {
    if (proposalSentStatus !== 'idle') return;

    setProposalSentStatus('sending');

    // Simulate network delay for 1.2s
    setTimeout(() => {
      setProposalSentStatus('success');

      // Submit proposal request
      onRequestExchange({
        id: 'r_match_' + Date.now(),
        fromUser: listing.studentName,
        fromUserAvatar: listing.studentAvatar,
        listingTitle: listing.title,
        listingOffer: listing.offer,
        userOffer: selectedMatchForProposal.offer,
        matchPercentage: selectedMatchForProposal.match.score,
        matchReason: selectedMatchForProposal.match.reason,
        status: 'Pending',
        isOutgoing: true,
        message: customMessage.trim(),
        createdAt: new Date().toISOString()
      });
    }, 1200);
  };

  if (!listing) return null;

  const getCategoryGradient = (category) => {
    if (category === 'Electronics') return 'from-blue-50 to-indigo-50/50';
    if (category === 'Skills & Services') return 'from-emerald-50 to-teal-50/50';
    if (category === 'Opportunities') return 'from-purple-50 to-pink-50/50';
    if (category === 'Giveaways') return 'from-rose-50 to-orange-50/50';
    return 'from-amber-50 to-yellow-50/50';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Back button link */}
      <button 
        onClick={onBack}
        className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-muted-gray hover:text-charcoal mb-6 transition-colors cursor-pointer select-none"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Explore
      </button>

      {/* Grid structure */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Details panel */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="glass-panel overflow-hidden rounded-3xl border border-warm-border shadow-premium flex flex-col">
            
            {/* Visual Cover Header */}
            <div className={`h-40 sm:h-48 bg-gradient-to-br ${getCategoryGradient(listing.category)} relative p-6 flex flex-col justify-end border-b border-warm-border/30`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-white/70 border border-warm-border/50 rounded-md text-charcoal backdrop-blur-sm shadow-sm">
                  {listing.category}
                </span>
                {listing.condition && listing.condition !== 'N/A' && (
                  <span className="text-[10px] font-semibold bg-white/70 border border-warm-border/40 px-2 py-0.5 rounded text-muted-gray backdrop-blur-sm">
                    Condition: {listing.condition}
                  </span>
                )}
              </div>
              <h1 className="text-2xl sm:text-4xl font-display font-extrabold text-charcoal leading-tight max-w-3xl">
                {listing.title}
              </h1>
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8 flex flex-col gap-6">
              
              {/* Creator details and exchange summary badges */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-warm-surface border border-warm-border/80 rounded-2xl shadow-sm">
                <div className="flex items-center gap-3">
                  <img
                    src={listing.studentAvatar}
                    alt={listing.studentName}
                    className="w-11 h-11 rounded-full object-cover border border-warm-border shadow-sm"
                  />
                  <div>
                    <div className="text-sm font-semibold text-charcoal">{listing.studentName}</div>
                    <div className="text-xs text-terracotta font-mono font-bold uppercase tracking-wider">Verified Student</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-gray font-semibold">Exchange Mode:</span>
                  <span className="px-3 py-1 rounded-xl text-xs font-bold bg-terracotta/10 text-terracotta border border-terracotta/25">
                    {listing.exchangeType}
                  </span>
                </div>
              </div>

              {/* Offer / Looking for Swap Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-terracotta/10 border border-terracotta/20 rounded-2xl text-left">
                  <div className="text-[10px] text-terracotta font-bold uppercase tracking-wider mb-1">
                    Student Offers
                  </div>
                  <div className="text-lg font-display font-bold text-charcoal leading-snug">
                    {listing.offer}
                  </div>
                </div>

                <div className="p-5 bg-denim-blue/10 border border-denim-blue/20 rounded-2xl text-left">
                  <div className="text-[10px] text-denim-blue font-bold uppercase tracking-wider mb-1">
                    Student Wants In Return
                  </div>
                  <div className="text-lg font-display font-bold text-charcoal leading-snug">
                    {listing.lookingFor}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="text-left">
                <h3 className="text-xs font-bold text-charcoal uppercase tracking-wider mb-2">
                  Description
                </h3>
                <p className="text-muted-gray text-sm sm:text-base leading-relaxed whitespace-pre-wrap font-normal">
                  {listing.description}
                </p>
              </div>

              {/* Request Exchange Button */}
              <div className="pt-4 border-t border-warm-border/60">
                {alreadyRequested ? (
                  <div
                    className="w-full py-4 px-6 bg-warm-beige/40 text-muted-gray rounded-2xl text-sm sm:text-base font-semibold border border-warm-border flex items-center justify-center gap-2"
                  >
                    <Check className="w-5 h-5 text-forest-green" />
                    Exchange Request Sent (Check My Exchanges)
                  </div>
                ) : (
                  <button
                    onClick={handleRequestClick}
                    className="w-full py-4 px-6 bg-terracotta hover:bg-terracotta/90 text-white rounded-2xl text-sm sm:text-base font-semibold transition-all hover:shadow-lg hover:shadow-terracotta/20 hover:scale-[1.005] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    Propose Exchange Swap
                  </button>
                )}
              </div>

            </div>
          </div>
        </div>

        {/* Right Column: AI Match Recommendations */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="glass-panel p-6 rounded-3xl border border-warm-border shadow-premium flex flex-col gap-5 relative overflow-hidden">
            
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-terracotta/5 rounded-full blur-xl pointer-events-none" />

            <div className="flex items-center gap-2 border-b border-warm-border/60 pb-4">
              <div className="p-1.5 bg-forest-green/10 rounded-lg text-forest-green">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h3 className="font-display font-bold text-charcoal flex items-center gap-1.5 text-sm sm:text-base">
                  AI Exchange Matches
                </h3>
                <p className="text-[10px] text-muted-gray font-semibold">
                  Calculated based on reciprocal swap utility
                </p>
              </div>
            </div>

            {/* Recommended Matches List */}
            {matches.length > 0 ? (
              <div className="flex flex-col gap-4">
                {matches.map((match) => {
                  const scoreColor = 
                    match.match.score >= 90 ? 'text-forest-green bg-forest-green/10 border-forest-green/20' : 
                    match.match.score >= 80 ? 'text-warm-amber bg-warm-amber/10 border-warm-amber/20' : 
                    'text-denim-blue bg-denim-blue/10 border-denim-blue/20';

                  return (
                    <div
                      key={match.id}
                      onClick={() => onSelectListing(match.id)}
                      className="group border border-warm-border hover:border-terracotta/55 bg-warm-surface hover:bg-warm-beige/30 p-4 rounded-2xl cursor-pointer transition-all duration-300 flex flex-col gap-3 shadow-sm text-left animate-fade-in"
                    >
                      {/* Score and Student info */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <img
                            src={match.studentAvatar}
                            alt={match.studentName}
                            className="w-6 h-6 rounded-full object-cover border border-warm-border shadow-sm"
                          />
                          <span className="text-xs font-bold text-charcoal">
                            {match.studentName}
                          </span>
                        </div>
                        <span className={`px-2 py-0.5 rounded-lg text-xs font-bold border ${scoreColor}`}>
                          {match.match.score}% Match
                        </span>
                      </div>

                      {/* Matching Item */}
                      <div>
                        <div className="text-[10px] text-muted-gray font-bold uppercase tracking-wider">Offering</div>
                        <h4 className="text-sm font-display font-bold text-charcoal group-hover:text-terracotta leading-tight mt-0.5 truncate transition-colors">
                          {match.title}
                        </h4>
                      </div>

                      {/* Match explanation reason */}
                      <p className="text-[11px] text-muted-gray leading-relaxed bg-warm-beige/30 p-2.5 rounded-lg border border-warm-border/50 font-normal font-sans">
                        {match.match.reason}
                      </p>
                      
                      <div 
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedMatchForProposal(match);
                          setProposalSentStatus('idle');
                          setCustomMessage('');
                        }}
                        className="text-[10px] text-terracotta hover:text-terracotta/80 group-hover:underline font-bold self-end cursor-pointer"
                      >
                        View Match Proposal →
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* No matches found */
              <div className="p-6 text-center text-muted-gray flex flex-col items-center gap-2">
                <AlertCircle className="w-8 h-8 text-muted-gray" />
                <span className="text-xs">No active matches found. Add more items to trigger trades.</span>
              </div>
            )}

          </div>
        </div>

      </div>

      {/* Match Proposal Modal */}
      {selectedMatchForProposal && (
        <div className="fixed inset-0 bg-charcoal/45 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="glass-panel w-full max-w-xl rounded-3xl border border-warm-border shadow-premium overflow-hidden relative animate-scale-up">
            
            {/* Background glowing circle */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-terracotta/5 rounded-full blur-2xl pointer-events-none" />
            
            {proposalSentStatus === 'success' ? (
              /* Success Content */
              <div className="p-8 sm:p-12 text-center flex flex-col items-center gap-5">
                <div className="w-16 h-16 bg-forest-green/10 rounded-full flex items-center justify-center text-forest-green border border-forest-green/20">
                  <Check className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-display font-extrabold text-charcoal">
                  Exchange Request Sent!
                </h3>
                <p className="text-muted-gray text-xs sm:text-sm max-w-md mx-auto leading-relaxed font-normal">
                  We've successfully proposed your exchange to <span className="font-semibold text-charcoal">{listing.studentName}</span>. They will review it under their Pending Requests. You can track this swap on your dashboard.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto mt-4">
                  <button
                    onClick={() => {
                      setSelectedMatchForProposal(null);
                      setProposalSentStatus('idle');
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 bg-warm-surface hover:bg-warm-beige/50 text-charcoal text-sm font-semibold rounded-xl border border-warm-border cursor-pointer shadow-sm transition-all"
                  >
                    Close Match
                  </button>
                  <button
                    onClick={() => {
                      setSelectedMatchForProposal(null);
                      setProposalSentStatus('idle');
                      onRequestExchangeRedirect();
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 bg-terracotta hover:bg-terracotta/90 text-white text-sm font-semibold rounded-xl shadow-md shadow-terracotta/20 transition-all hover:scale-[1.01] cursor-pointer"
                  >
                    Go to My Exchanges
                  </button>
                </div>
              </div>
            ) : (
              /* Modal Proposal Content */
              <div className="p-6 sm:p-8 flex flex-col gap-6 text-left">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-warm-border/60 pb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-forest-green animate-pulse" />
                    <h3 className="font-display font-bold text-charcoal text-lg">
                      Propose Exchange Swap
                    </h3>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedMatchForProposal(null);
                      setProposalSentStatus('idle');
                    }}
                    className="text-muted-gray hover:text-charcoal p-1.5 rounded-lg hover:bg-warm-beige/50 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Reciprocal Swap Visual Representation */}
                <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center py-2 relative">
                  
                  {/* Left Column: You offer */}
                  <div className="md:col-span-5 glass-panel p-4.5 rounded-2xl border border-warm-border bg-warm-surface shadow-sm relative overflow-hidden text-left">
                    <div className="absolute top-3 right-3 text-[9px] font-bold text-terracotta uppercase tracking-wider bg-terracotta/10 px-2 py-0.5 rounded border border-terracotta/20">
                      You Offer
                    </div>
                    <div className="flex items-center gap-2 mb-3 mt-1">
                      <img 
                        src={currentUser?.avatar}
                        className="w-6 h-6 rounded-full object-cover border border-warm-border"
                        alt="You"
                      />
                      <span className="text-xs font-semibold text-charcoal truncate max-w-[100px]">{currentUser?.name}</span>
                    </div>
                    
                    {/* User Listings Dropdown or Text */}
                    {selectedMatchForProposal.id === 'profile_sim' ? (
                      <h4 className="text-sm font-display font-extrabold text-charcoal leading-snug line-clamp-2">
                        {selectedMatchForProposal.offer}
                      </h4>
                    ) : (
                      <div className="flex flex-col gap-2">
                        <select
                          value={selectedMatchForProposal.id}
                          onChange={(e) => {
                            const selected = userListings.find(ul => ul.id === e.target.value);
                            if (selected) {
                              const scoreResult = calculateMatchScore(selected, listing);
                              setSelectedMatchForProposal({
                                ...selected,
                                match: scoreResult
                              });
                            }
                          }}
                          className="w-full px-2 py-1.5 bg-white border border-warm-border rounded-lg text-charcoal text-[11px] focus:outline-none focus:border-terracotta/80 focus:ring-1 focus:ring-terracotta/80 font-sans"
                        >
                          {userListings.map(ul => (
                            <option key={ul.id} value={ul.id}>
                              {ul.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                    <p className="text-[10px] text-muted-gray mt-2.5">
                      Category: {selectedMatchForProposal.category}
                    </p>
                  </div>

                  {/* Center Column: Swap Indicators */}
                  <div className="md:col-span-1 flex flex-col items-center justify-center gap-2.5 my-2 md:my-0">
                    <div className="w-10 h-10 rounded-full bg-warm-beige border border-warm-border flex items-center justify-center text-terracotta shadow-inner shadow-premium">
                      <ArrowLeftRight className="w-5 h-5" />
                    </div>
                    <span className="px-2 py-0.5 rounded-lg text-[10px] font-extrabold bg-forest-green/10 text-forest-green border border-forest-green/20 whitespace-nowrap">
                      {selectedMatchForProposal.match.score}% Match
                    </span>
                  </div>

                  {/* Right Column: You receive */}
                  <div className="md:col-span-5 glass-panel p-4.5 rounded-2xl border border-warm-border bg-warm-surface shadow-sm relative overflow-hidden text-left">
                    <div className="absolute top-3 right-3 text-[9px] font-bold text-denim-blue uppercase tracking-wider bg-denim-blue/10 px-2 py-0.5 rounded border border-denim-blue/20">
                      You Receive
                    </div>
                    <div className="flex items-center gap-2 mb-3 mt-1">
                      <img 
                        src={listing.studentAvatar}
                        className="w-6 h-6 rounded-full object-cover border border-warm-border"
                        alt={listing.studentName}
                      />
                      <span className="text-xs font-semibold text-charcoal truncate max-w-[100px]">{listing.studentName}</span>
                    </div>
                    <h4 className="text-sm font-display font-extrabold text-charcoal leading-snug line-clamp-2">
                      {listing.offer}
                    </h4>
                    <p className="text-[10px] text-muted-gray mt-2.5">
                      Category: {listing.category}
                    </p>
                  </div>

                </div>

                {/* Match score explanation box */}
                <div className="bg-warm-beige/35 border border-warm-border p-4 rounded-xl flex flex-col gap-2 shadow-inner text-left">
                  <div className="text-[10px] text-terracotta font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-terracotta" />
                    Why This Match?
                  </div>
                  <p className="text-xs text-muted-gray leading-relaxed font-sans font-normal">
                    {selectedMatchForProposal.match.reason}
                  </p>
                </div>

                {/* Optional Message Field */}
                <div>
                  <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5 text-muted-gray" />
                    Include an optional message
                  </label>
                  <textarea
                    rows={3}
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    placeholder="Introduce yourself and specify meetup coordinates or availability..."
                    className="w-full px-3 py-2 bg-warm-surface border border-warm-border rounded-xl text-charcoal text-xs placeholder-muted-gray focus:outline-none focus:border-terracotta/80 focus:ring-1 focus:ring-terracotta/80 transition-all font-sans resize-none"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-end gap-3 mt-2 border-t border-warm-border/60 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedMatchForProposal(null);
                      setProposalSentStatus('idle');
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 bg-warm-surface hover:bg-warm-beige/50 text-charcoal text-xs sm:text-sm font-semibold rounded-xl border border-warm-border shadow-sm transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSendMatchProposalRequest}
                    disabled={proposalSentStatus === 'sending'}
                    className="w-full sm:w-auto px-6 py-2.5 bg-terracotta hover:bg-terracotta/90 disabled:bg-terracotta/40 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md shadow-terracotta/20 transition-all hover:scale-[1.01] flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {proposalSentStatus === 'sending' ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        Sending Request...
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        Send Exchange Request
                      </>
                    )}
                  </button>
                </div>

              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}
