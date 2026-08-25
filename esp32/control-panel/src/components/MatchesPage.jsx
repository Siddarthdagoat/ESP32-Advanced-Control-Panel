import React, { useState } from 'react';
import { Sparkles, ArrowLeftRight, Compass, MessageSquare, Send, X, AlertCircle } from 'lucide-react';
import { calculateMatchScore } from '../utils/matching';

export default function MatchesPage({ listings, currentUser, requests, onRequestExchange, setCurrentPage, onSelectListing }) {
  const [proposalModalOpen, setProposalModalOpen] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [customMessage, setCustomMessage] = useState('');
  const [proposalSentStatus, setProposalSentStatus] = useState('idle'); // idle, sending, success

  const userListings = listings.filter(l => l.studentEmail === currentUser?.email);
  const peerListings = listings.filter(l => l.studentEmail !== currentUser?.email);

  // Compile all matches
  const matchesList = [];
  userListings.forEach(userL => {
    peerListings.forEach(peerL => {
      const result = calculateMatchScore(userL, peerL);
      if (result.score >= 40) { // Show matches with decent score
        matchesList.push({
          userListing: userL,
          peerListing: peerL,
          score: result.score,
          reason: result.reason
        });
      }
    });
  });

  // Sort matches by compatibility score descending
  matchesList.sort((a, b) => b.score - a.score);

  const handleOpenProposal = (match) => {
    setSelectedMatch(match);
    setCustomMessage('');
    setProposalSentStatus('idle');
    setProposalModalOpen(true);
  };

  const handleSendProposalSubmit = (e) => {
    e.preventDefault();
    if (proposalSentStatus !== 'idle') return;

    setProposalSentStatus('sending');

    // Simulate sending proposal delay
    setTimeout(() => {
      setProposalSentStatus('success');

      // Add new request to exchange history
      onRequestExchange({
        id: 'r_match_' + Date.now(),
        fromUser: selectedMatch.peerListing.studentName,
        fromUserAvatar: selectedMatch.peerListing.studentAvatar,
        listingTitle: selectedMatch.peerListing.title,
        listingOffer: selectedMatch.peerListing.offer,
        userOffer: selectedMatch.userListing.offer,
        matchPercentage: selectedMatch.score,
        matchReason: selectedMatch.reason,
        status: 'Pending',
        isOutgoing: true,
        message: customMessage.trim(),
        createdAt: new Date().toISOString()
      });

      // Clear state and close modal after 1.5s
      setTimeout(() => {
        setProposalModalOpen(false);
        setSelectedMatch(null);
        setProposalSentStatus('idle');
      }, 1500);
    }, 1200);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 animate-fade-in">
      {/* Header section */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-charcoal flex items-center gap-2.5">
            <Sparkles className="w-7 h-7 text-terracotta animate-pulse" />
            Smart Match Center
          </h1>
          <p className="text-muted-gray text-sm mt-1">
            AI-powered exchange matching showing compatibility based on your active listings and needs.
          </p>
        </div>
      </div>

      {userListings.length === 0 ? (
        /* Empty state: User has no listings */
        <div className="glass-panel p-16 rounded-3xl text-center border border-warm-border shadow-premium max-w-xl mx-auto mt-8">
          <div className="w-16 h-16 bg-warm-beige rounded-2xl flex items-center justify-center mx-auto mb-6 text-terracotta border border-warm-border/50">
            <Sparkles className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-display font-bold text-charcoal mb-2">Got nothing listed yet?</h3>
          <p className="text-muted-gray max-w-sm mx-auto text-sm leading-relaxed mb-6 font-normal">
            Post an offer on the marketplace first! The AI Match Center will then compare your needs against others to find exchanges.
          </p>
          <button
            onClick={() => setCurrentPage('create')}
            className="px-6 py-3 bg-terracotta hover:bg-terracotta/90 text-white rounded-xl text-sm font-semibold shadow-md shadow-terracotta/20 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 mx-auto cursor-pointer"
          >
            Create Your First Listing
          </button>
        </div>
      ) : matchesList.length === 0 ? (
        /* Empty state: No compatible listings exist */
        <div className="glass-panel p-16 rounded-3xl text-center border border-warm-border shadow-premium max-w-xl mx-auto mt-8">
          <div className="w-16 h-16 bg-warm-beige rounded-2xl flex items-center justify-center mx-auto mb-6 text-muted-gray border border-warm-border/50">
            <ArrowLeftRight className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-display font-bold text-charcoal mb-2">We're watching the exchange network</h3>
          <p className="text-muted-gray max-w-sm mx-auto text-sm leading-relaxed mb-6 font-normal">
            Create more listings and specify what you're looking for. We'll surface compatible opportunities here as soon as they appear.
          </p>
          <button
            onClick={() => setCurrentPage('explore')}
            className="px-6 py-3 bg-terracotta hover:bg-terracotta/90 text-white rounded-xl text-sm font-semibold shadow-md shadow-terracotta/20 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 mx-auto cursor-pointer"
          >
            <Compass className="w-4 h-4" />
            Explore Listings
          </button>
        </div>
      ) : (
        /* Matches Grid */
        <div className="grid grid-cols-1 gap-6">
          {matchesList.map((match, idx) => {
            const scoreColor =
              match.score >= 90 ? 'text-forest-green bg-forest-green/10 border-forest-green/20' :
              match.score >= 75 ? 'text-warm-amber bg-warm-amber/10 border-warm-amber/20' :
              'text-denim-blue bg-denim-blue/10 border-denim-blue/20';

            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-warm-border shadow-premium flex flex-col gap-5 hover:border-warm-border/95 transition-all"
              >
                {/* Header: compatibility badge and student */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={match.peerListing.studentAvatar}
                      alt={match.peerListing.studentName}
                      className="w-10 h-10 rounded-full object-cover border border-warm-border shadow-sm"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-charcoal">{match.peerListing.studentName}</h4>
                      <p className="text-[10px] text-muted-gray font-semibold">Listing Match partner</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-xl text-xs font-bold border ${scoreColor}`}>
                    {match.score}% Compatibility
                  </div>
                </div>

                {/* Double sided exchange block */}
                <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center bg-warm-surface p-4.5 rounded-xl border border-warm-border/60 shadow-sm">
                  {/* Left Side: You Offer */}
                  <div className="md:col-span-5 text-left">
                    <span className="text-[9px] text-terracotta uppercase tracking-wider font-extrabold">You Offer</span>
                    <h5 className="text-sm font-bold text-charcoal mt-1">{match.userListing.title}</h5>
                    <p className="text-xs text-muted-gray mt-0.5 truncate">Having: {match.userListing.offer}</p>
                  </div>
                  
                  {/* Center arrow */}
                  <div className="md:col-span-1 flex justify-center text-muted-gray">
                    <ArrowLeftRight className="w-5 h-5 text-terracotta rotate-90 md:rotate-0" />
                  </div>

                  {/* Right Side: You Receive */}
                  <div className="md:col-span-5 text-left">
                    <span className="text-[9px] text-denim-blue uppercase tracking-wider font-extrabold">You Receive</span>
                    <h5 className="text-sm font-bold text-charcoal mt-1">{match.peerListing.title}</h5>
                    <p className="text-xs text-muted-gray mt-0.5 truncate">Offering: {match.peerListing.offer}</p>
                  </div>
                </div>

                {/* Insights reasoning section */}
                <div className="bg-warm-beige/35 border border-warm-border/50 p-4 rounded-xl shadow-inner text-left">
                  <div className="flex items-center gap-1.5 text-terracotta font-bold text-xs uppercase tracking-wider mb-1.5">
                    <Sparkles className="w-4 h-4 text-terracotta" />
                    Exchange Insight
                  </div>
                  <p className="text-xs text-muted-gray leading-relaxed font-normal">
                    {match.reason}
                  </p>
                </div>

                {/* Action buttons */}
                <div className="flex items-center justify-end gap-3 mt-1 pt-4 border-t border-warm-border/55">
                  <button
                    onClick={() => onSelectListing(match.peerListing.id)}
                    className="px-4 py-2.5 bg-warm-surface hover:bg-warm-beige/50 text-charcoal rounded-xl text-xs font-semibold border border-warm-border shadow-sm transition-colors cursor-pointer"
                  >
                    View Listing
                  </button>
                  <button
                    onClick={() => handleOpenProposal(match)}
                    className="px-5 py-2.5 bg-terracotta hover:bg-terracotta/90 text-white rounded-xl text-xs font-semibold shadow-md shadow-terracotta/20 transition-all hover:scale-[1.01] flex items-center gap-1.5 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Propose Exchange
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Reusable Propose Exchange Modal */}
      {proposalModalOpen && selectedMatch && (
        <div className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white border border-warm-border rounded-3xl w-full max-w-lg shadow-premium overflow-hidden animate-scale-up">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4.5 border-b border-warm-border/60 bg-warm-beige/25">
              <h3 className="font-display font-bold text-lg text-charcoal flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-terracotta" />
                Propose Exchange
              </h3>
              <button
                onClick={() => setProposalModalOpen(false)}
                className="p-1.5 hover:bg-warm-beige/55 rounded-lg text-muted-gray hover:text-charcoal transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {proposalSentStatus === 'success' ? (
              /* Success message state */
              <div className="p-8 text-center flex flex-col items-center gap-3 animate-fade-in">
                <div className="w-14 h-14 bg-forest-green/10 border border-forest-green/20 rounded-full flex items-center justify-center text-forest-green mb-2">
                  <Sparkles className="w-6 h-6 animate-pulse" />
                </div>
                <h4 className="text-xl font-display font-bold text-charcoal">Proposal Sent Successfully!</h4>
                <p className="text-xs text-muted-gray max-w-xs leading-relaxed font-normal">
                  Your swap request has been added to My Exchanges. {selectedMatch.peerListing.studentName} will be notified.
                </p>
              </div>
            ) : (
              /* Input Form state */
              <form onSubmit={handleSendProposalSubmit} className="p-6 flex flex-col gap-4 text-left">
                <div className="grid grid-cols-2 gap-4 bg-warm-surface p-3.5 rounded-xl border border-warm-border/60 text-xs">
                  <div>
                    <span className="text-[9px] text-terracotta font-extrabold uppercase">Your Offer</span>
                    <div className="font-bold text-charcoal truncate mt-0.5">{selectedMatch.userListing.offer}</div>
                  </div>
                  <div>
                    <span className="text-[9px] text-denim-blue font-extrabold uppercase">You Receive</span>
                    <div className="font-bold text-charcoal truncate mt-0.5">{selectedMatch.peerListing.offer}</div>
                  </div>
                </div>

                <div className="bg-warm-beige/35 border border-warm-border/60 p-3 rounded-xl">
                  <div className="flex justify-between items-center text-[10px] text-muted-gray mb-1">
                    <span className="font-extrabold uppercase tracking-wide">Why match works</span>
                    <span className="font-bold text-forest-green">{selectedMatch.score}% Score</span>
                  </div>
                  <p className="text-[11px] text-muted-gray leading-relaxed font-normal">
                    {selectedMatch.reason}
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5 text-muted-gray" />
                    Include an optional message
                  </label>
                  <textarea
                    rows={3}
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    placeholder="Hey! I would love to exchange my textbook for your Python notes. Let me know if that works!"
                    className="w-full px-3 py-2 bg-warm-surface border border-warm-border rounded-xl text-charcoal text-xs placeholder-muted-gray focus:outline-none focus:border-terracotta/80 focus:ring-1 focus:ring-terracotta/80 transition-all font-sans resize-none"
                  />
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-end gap-3 mt-2">
                  <button
                    type="button"
                    onClick={() => setProposalModalOpen(false)}
                    className="px-5 py-2.5 bg-warm-surface hover:bg-warm-beige/50 text-charcoal text-xs font-semibold rounded-xl border border-warm-border shadow-sm transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={proposalSentStatus === 'sending'}
                    className="px-6 py-2.5 bg-terracotta hover:bg-terracotta/90 disabled:bg-terracotta/40 text-white text-xs font-semibold rounded-xl shadow-md shadow-terracotta/20 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {proposalSentStatus === 'sending' ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        Send Proposal
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
