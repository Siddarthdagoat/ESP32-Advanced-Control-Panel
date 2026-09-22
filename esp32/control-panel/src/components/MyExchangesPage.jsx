import React, { useState } from 'react';
import { ArrowLeftRight, Check, X, CheckCircle2, Clock, Sparkles, Compass, ListPlus } from 'lucide-react';

export default function MyExchangesPage({ requests, onUpdateRequest, setCurrentPage, currentUser }) {
  const [activeTab, setActiveTab] = useState('Pending');

  // Filter requests based on status
  const pendingRequests = requests.filter(r => r.status === 'Pending');
  const acceptedRequests = requests.filter(r => r.status === 'Accepted');
  const completedRequests = requests.filter(r => r.status === 'Completed' || r.status === 'Declined');

  // Dynamic counts for top summary dashboard
  const pendingCount = pendingRequests.length;
  const activeCount = acceptedRequests.length;
  const completedCount = requests.filter(r => r.status === 'Completed').length;

  const getRequestsForTab = () => {
    if (activeTab === 'Pending') return pendingRequests;
    if (activeTab === 'Accepted') return acceptedRequests;
    return completedRequests;
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Accepted':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-forest-green/10 text-forest-green border border-forest-green/20 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            Active Swap
          </span>
        );
      case 'Completed':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-denim-blue/10 text-denim-blue border border-denim-blue/20 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Completed
          </span>
        );
      case 'Declined':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-600 border border-rose-500/20 flex items-center gap-1">
            <X className="w-3.5 h-3.5" />
            Declined
          </span>
        );
      default:
        return (
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-warm-amber/10 text-warm-amber border border-warm-amber/20 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 animate-pulse" />
            Pending Action
          </span>
        );
    }
  };

  const renderJourneyTracker = (status, isOutgoing) => {
    if (status === 'Declined') return null;

    const allStages = [
      { id: 'Requested', label: 'Requested' },
      { id: 'Review', label: 'Under Review' },
      { id: 'Accepted', label: 'Accepted' },
      { id: 'Meet', label: 'Meet & Exchange' },
      { id: 'Completed', label: 'Completed' }
    ];

    let activeIndex = 0;
    if (status === 'Pending') {
      activeIndex = isOutgoing ? 0 : 1; 
    } else if (status === 'Accepted') {
      activeIndex = 3; 
    } else if (status === 'Completed') {
      activeIndex = 4; 
    }

    const visibleStages = (status === 'Pending') 
      ? allStages.slice(0, 3) 
      : allStages;

    return (
      <div className="w-full mt-4 pt-4 border-t border-warm-border/50 text-left">
        <div className="text-[10px] text-muted-gray font-extrabold uppercase tracking-wider mb-3">
          Swap Journey Progress
        </div>
        <div className="flex items-center justify-between relative px-2">
          {/* Connector bar background */}
          <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 h-0.5 bg-warm-beige/85 -z-10" />
          
          {/* Connector bar active fill */}
          <div 
            className="absolute left-4 top-1/2 -translate-y-1/2 h-0.5 bg-forest-green transition-all duration-500 -z-10"
            style={{ width: `${(activeIndex / (visibleStages.length - 1)) * 90}%` }}
          />

          {visibleStages.map((stage, idx) => {
            const isCompleted = idx < activeIndex;
            const isActive = idx === activeIndex;
            const isPending = idx > activeIndex;

            let circleClass = 'bg-warm-surface border-warm-border text-muted-gray';
            let labelClass = 'text-muted-gray';

            if (isCompleted) {
              circleClass = 'bg-forest-green border-forest-green text-white';
              labelClass = 'text-forest-green font-semibold';
            } else if (isActive) {
              circleClass = 'bg-white border-terracotta text-terracotta ring-4 ring-terracotta/10';
              labelClass = 'text-charcoal font-bold';
            } else if (isPending) {
              circleClass = 'bg-warm-surface border-warm-border text-muted-gray/50';
              labelClass = 'text-muted-gray/60';
            }

            return (
              <div key={stage.id} className="flex flex-col items-center gap-1.5 flex-1 relative z-10">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center text-[9px] font-bold ${circleClass} transition-all duration-300`}>
                  {isCompleted ? '✓' : idx + 1}
                </div>
                <span className={`text-[9px] sm:text-[10px] text-center whitespace-nowrap ${labelClass} transition-all duration-300`}>
                  {stage.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 animate-fade-in">
      {/* Page Title */}
      <div className="mb-8 text-left">
        <h1 className="text-3xl font-display font-bold text-charcoal flex items-center gap-2">
          My Campus Exchanges
        </h1>
        <p className="text-muted-gray text-sm mt-1">
          Review, accept, and track active resources exchanges with classmates.
        </p>
      </div>

      {/* Dynamic Summary Dashboard Section */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-warm-surface border border-warm-border p-4.5 rounded-2xl text-center shadow-sm">
          <span className="text-[10px] text-muted-gray font-extrabold uppercase tracking-wider block">Pending</span>
          <span className="text-2xl font-display font-extrabold text-charcoal block mt-1">{pendingCount}</span>
        </div>
        <div className="bg-warm-surface border border-warm-border p-4.5 rounded-2xl text-center shadow-sm">
          <span className="text-[10px] text-muted-gray font-extrabold uppercase tracking-wider block">Active</span>
          <span className="text-2xl font-display font-extrabold text-charcoal block mt-1">{activeCount}</span>
        </div>
        <div className="bg-warm-surface border border-warm-border p-4.5 rounded-2xl text-center shadow-sm">
          <span className="text-[10px] text-muted-gray font-extrabold uppercase tracking-wider block">Completed</span>
          <span className="text-2xl font-display font-extrabold text-charcoal block mt-1">{completedCount}</span>
        </div>
      </div>

      {requests.length === 0 ? (
        /* Polished Custom Empty State when no exchanges exist */
        <div className="glass-panel p-16 rounded-3xl text-center border border-warm-border shadow-premium max-w-xl mx-auto mt-8 animate-fade-in">
          <div className="w-16 h-16 bg-warm-beige rounded-2xl flex items-center justify-center mx-auto mb-6 text-terracotta border border-warm-border/50">
            <ArrowLeftRight className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-display font-bold text-charcoal mb-2">
            Your exchange journey starts here
          </h3>
          <p className="text-muted-gray max-w-sm mx-auto text-sm leading-relaxed mb-8 font-normal">
            Discover students who have what you need, or share something useful with your campus.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => setCurrentPage('matches')}
              className="w-full sm:w-auto px-6 py-3 bg-terracotta hover:bg-terracotta/90 text-white rounded-xl text-sm font-semibold shadow-md shadow-terracotta/20 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
            >
              <Compass className="w-4 h-4" />
              Explore Matches
            </button>
            <button
              onClick={() => setCurrentPage('create')}
              className="w-full sm:w-auto px-6 py-3 bg-warm-surface hover:bg-warm-beige/50 text-charcoal rounded-xl text-sm font-semibold border border-warm-border shadow-sm transition-all hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
            >
              <ListPlus className="w-4 h-4 text-muted-gray" />
              Create a Listing
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Navigation Tabs */}
          <div className="flex border-b border-warm-border/60 mb-8 overflow-x-auto gap-2">
            {[
              { id: 'Pending', label: 'Pending Requests', count: pendingRequests.length },
              { id: 'Accepted', label: 'Active Swaps', count: acceptedRequests.length },
              { id: 'Completed', label: 'History', count: completedRequests.length }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3.5 px-4 font-bold text-sm border-b-2 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'border-terracotta text-terracotta'
                    : 'border-transparent text-muted-gray hover:text-charcoal hover:border-warm-border/40'
                }`}
              >
                {tab.label}
                {tab.count > 0 && (
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                    activeTab === tab.id 
                      ? 'bg-terracotta text-white shadow-sm shadow-terracotta/20' 
                      : 'bg-warm-beige text-muted-gray border border-warm-border/40'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Requests Content */}
          <div className="flex flex-col gap-6">
            {getRequestsForTab().length > 0 ? (
              getRequestsForTab().map((req) => {
                const isOutgoing = (req.senderId === currentUser?.id || req.requesterId === currentUser?.id);
                const displayUser = isOutgoing 
                  ? (req.receiverName || req.ownerName || req.fromUser || 'Campus Peer') 
                  : (req.senderName || req.requesterName || req.fromUser || 'Campus Peer');
                const displayAvatar = isOutgoing 
                  ? (req.receiverAvatar || req.ownerAvatar || req.fromUserAvatar || 'https://api.dicebear.com/7.x/initials/svg?seed=Peer&backgroundColor=D97757') 
                  : (req.senderAvatar || req.requesterAvatar || req.fromUserAvatar || 'https://api.dicebear.com/7.x/initials/svg?seed=Student&backgroundColor=D97757');
                const matchColor = 
                  req.matchPercentage >= 90 ? 'text-forest-green bg-forest-green/10 border-forest-green/20' :
                  req.matchPercentage >= 80 ? 'text-warm-amber bg-warm-amber/10 border-warm-amber/20' :
                  'text-denim-blue bg-denim-blue/10 border-denim-blue/20';

                return (
                  <div 
                    key={req.id}
                    className="glass-panel p-6 rounded-2xl border border-warm-border flex flex-col gap-5 shadow-premium animate-fade-in"
                  >
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      {/* Left Area: User details, matching resource, and stats */}
                      <div className="flex-1 flex flex-col gap-4">
                        {/* Student sender header */}
                        <div className="flex items-center justify-between sm:justify-start gap-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={displayAvatar}
                              alt={displayUser}
                              className="w-10 h-10 rounded-full object-cover border border-warm-border"
                            />
                            <div className="text-left">
                              <div className="text-sm font-bold text-charcoal">{displayUser}</div>
                              <div className="text-xs text-muted-gray font-semibold">{isOutgoing ? 'Outgoing Request' : 'Proposed Swap'}</div>
                            </div>
                          </div>
                          {getStatusBadge(req.status)}
                        </div>

                        {/* Proposal Message (if exists) */}
                        {req.message && (
                          <div className="bg-warm-surface border border-warm-border/60 px-3.5 py-2.5 rounded-xl text-left shadow-sm">
                            <span className="text-[9px] text-muted-gray font-extrabold uppercase tracking-wider block mb-0.5">Proposal Message</span>
                            <p className="text-xs text-charcoal italic leading-relaxed font-normal">
                              "{req.message}"
                            </p>
                          </div>
                        )}
        
                        {/* Swap Exchange details (A ↔ B) */}
                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center bg-warm-surface p-4 rounded-xl border border-warm-border/60 shadow-sm text-left">
                          <div className="sm:col-span-5">
                            <div className="text-[10px] text-terracotta font-extrabold uppercase tracking-wider mb-0.5">
                              {isOutgoing ? 'What You Give' : 'Their Offering'}
                            </div>
                            <div className="text-sm font-bold text-charcoal truncate">{req.userOffer}</div>
                          </div>
                          <div className="sm:col-span-2 flex justify-center text-muted-gray">
                            <ArrowLeftRight className="w-4 h-4 text-terracotta rotate-90 sm:rotate-0" />
                          </div>
                          <div className="sm:col-span-5">
                            <div className="text-[10px] text-denim-blue font-extrabold uppercase tracking-wider mb-0.5">
                              {isOutgoing ? 'What You Receive' : 'For Your Listing'}
                            </div>
                            <div className="text-sm font-bold text-charcoal truncate">{req.listingTitle}</div>
                          </div>
                        </div>
        
                        {/* AI Match Explanation */}
                        <div className="bg-warm-beige/35 border border-warm-border/60 p-3.5 rounded-xl flex flex-col gap-2 shadow-inner text-left">
                          <div className="flex items-center justify-between">
                            <div className="text-[10px] text-terracotta font-bold uppercase tracking-wider flex items-center gap-1">
                              <Sparkles className="w-3.5 h-3.5 animate-pulse text-terracotta" />
                              AI Analysis Match
                            </div>
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${matchColor}`}>
                              {req.matchPercentage}% Match Utility
                            </span>
                          </div>
                          <p className="text-xs text-muted-gray leading-relaxed font-sans font-normal">
                            {req.matchReason}
                          </p>
                        </div>
                      </div>
        
                      {/* Right Area: Action Buttons */}
                      <div className="flex flex-row md:flex-col items-center justify-end gap-3 self-stretch md:self-auto border-t md:border-t-0 border-warm-border/60 pt-4 md:pt-0">
                        {req.status === 'Pending' && (
                          isOutgoing ? (
                            <div className="text-xs text-muted-gray bg-warm-surface border border-warm-border shadow-sm px-4 py-3 rounded-xl flex items-center gap-1.5 font-semibold italic">
                              <Clock className="w-3.5 h-3.5 text-terracotta animate-pulse" />
                              Waiting for response
                            </div>
                          ) : (
                            <>
                              <button
                                onClick={() => onUpdateRequest(req.id, 'Accepted')}
                                className="flex-1 md:flex-none w-full py-2.5 px-4 bg-forest-green hover:bg-forest-green/90 text-white rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                              >
                                <Check className="w-4 h-4" />
                                Accept Swap
                              </button>
                              <button
                                onClick={() => onUpdateRequest(req.id, 'Declined')}
                                className="flex-1 md:flex-none w-full py-2.5 px-4 bg-warm-surface hover:bg-warm-beige/50 text-charcoal rounded-xl text-xs font-semibold border border-warm-border shadow-sm transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                              >
                                <X className="w-4 h-4 text-rose-500" />
                                Decline
                              </button>
                            </>
                          )
                        )}

                        {req.status === 'Accepted' && (
                          <>
                            <button
                              onClick={() => onUpdateRequest(req.id, 'Completed')}
                              className="flex-1 md:flex-none w-full py-3 px-4 bg-terracotta hover:bg-terracotta/90 text-white rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-terracotta/15"
                            >
                              <CheckCircle2 className="w-4 h-4 text-white" />
                              Mark Completed
                            </button>
                            
                            {/* Meetup Coordination Help Info */}
                            <div className="text-[10px] text-muted-gray font-semibold text-center md:max-w-[150px] leading-relaxed bg-warm-beige/35 p-2 rounded border border-warm-border/50 shadow-inner">
                              Discuss exchange meetup in student circles. Verify details on exchange.
                            </div>
                          </>
                        )}

                        {req.status === 'Completed' && (
                          <div className="text-xs text-forest-green bg-forest-green/10 px-4 py-3 rounded-xl border border-forest-green/20 flex items-center gap-2 font-semibold">
                            <CheckCircle2 className="w-4 h-4 text-forest-green" />
                            Swap Complete!
                          </div>
                        )}

                        {req.status === 'Declined' && (
                          <div className="text-xs text-muted-gray bg-rose-500/10 px-4 py-3 rounded-xl border border-rose-500/20 flex items-center gap-2 font-semibold">
                            <X className="w-4 h-4 text-rose-500" />
                            Swap Declined
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Progress journey tracker rendered at the bottom of the card */}
                    {renderJourneyTracker(req.status, isOutgoing)}
                  </div>
                );
              })
            ) : (
              /* Empty tab state */
              <div className="glass-panel p-16 rounded-2xl text-center border border-warm-border text-muted-gray shadow-premium animate-fade-in">
                <div className="w-14 h-14 bg-warm-beige border border-warm-border/50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-muted-gray">
                  <ArrowLeftRight className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-semibold text-charcoal mb-1">No requests here</h3>
                <p className="text-sm max-w-sm mx-auto text-muted-gray leading-relaxed font-normal">
                  {activeTab === 'Pending' && "You don't have any incoming exchange proposals waiting for your response."}
                  {activeTab === 'Accepted' && "You don't have any active swap meetups coordinated. Browse listings and send requests!"}
                  {activeTab === 'Completed' && "Your swap history is empty. Once you complete resource exchanges, they will appear here."}
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
