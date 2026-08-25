import React, { useState, useEffect } from 'react';
import { User, Mail, Sparkles, Plus, Trash2, CheckCircle2, AlertCircle, Clock, Save, Edit3 } from 'lucide-react';

export default function ProfilePage({ currentUser, onUpdateUser, listings, setListings, requests, setCurrentPage, onSelectListing, showToast }) {
  const [name, setName] = useState(currentUser?.name || '');
  const [offers, setOffers] = useState(currentUser?.offers || '');
  const [lookingFor, setLookingFor] = useState(currentUser?.lookingFor || '');
  const [isEditing, setIsEditing] = useState(false);
  const [saveStatus, setSaveStatus] = useState('idle'); // idle, saving, success

  // Sync state if currentUser changes
  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name || '');
      setOffers(currentUser.offers || '');
      setLookingFor(currentUser.lookingFor || '');
    }
  }, [currentUser]);

  // Filter listings belonging to this user
  const userListings = listings.filter(l => l.studentEmail === currentUser?.email);

  // Exchange metrics
  const pendingCount = requests.filter(r => r.status === 'Pending').length;
  const activeCount = requests.filter(r => r.status === 'Accepted').length;
  const completedCount = requests.filter(r => r.status === 'Completed').length;

  const handleSave = (e) => {
    e.preventDefault();
    setSaveStatus('saving');
    
    setTimeout(() => {
      const updatedUser = {
        ...currentUser,
        name,
        offers,
        lookingFor
      };
      
      // Update parent state and localStorage
      onUpdateUser(updatedUser);
      setSaveStatus('success');
      setIsEditing(false);
      if (showToast) {
        showToast('Profile saved successfully!', 'success');
      }
      
      setTimeout(() => setSaveStatus('idle'), 2000);
    }, 800); // ~800ms simulation
  };

  const handleDeleteListing = (listingId, e) => {
    e.stopPropagation(); // prevent card click details redirection
    if (window.confirm('Are you sure you want to delete this listing?')) {
      const updatedListings = listings.filter(l => l.id !== listingId);
      setListings(updatedListings);
      if (showToast) {
        showToast('Listing deleted successfully!', 'success');
      }
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 animate-fade-in">
      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-charcoal flex items-center gap-2">
          My Account
        </h1>
        <p className="text-muted-gray text-sm mt-1">
          Manage your campus exchange profile, view your active listings, and check swap history.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Account Details & Editing */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="glass-panel p-6 rounded-2xl border border-warm-border shadow-premium text-center relative">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="absolute top-4 right-4 p-2 bg-warm-surface hover:bg-warm-beige/50 border border-warm-border text-charcoal rounded-xl text-xs font-semibold cursor-pointer shadow-sm transition-all hover:scale-[1.02] flex items-center gap-1"
            >
              <Edit3 className="w-3.5 h-3.5" />
              {isEditing ? 'Cancel' : 'Edit'}
            </button>

            {/* Avatar */}
            <div className="relative w-24 h-24 mx-auto mb-4">
              <img
                src={currentUser?.avatar}
                alt={currentUser?.name}
                className="w-24 h-24 rounded-full object-cover border-2 border-terracotta shadow-md"
              />
              <div className="absolute bottom-0 right-0 p-1.5 bg-terracotta text-white rounded-full border-2 border-white shadow-sm">
                <User className="w-4 h-4" />
              </div>
            </div>

            {/* Profile Info */}
            {!isEditing ? (
              <div className="text-center">
                <h3 className="text-xl font-display font-bold text-charcoal">{currentUser?.name}</h3>
                <div className="flex items-center justify-center gap-1.5 text-xs text-muted-gray mt-1">
                  <Mail className="w-3.5 h-3.5" />
                  {currentUser?.email}
                </div>
                
                <div className="mt-4 inline-flex items-center gap-1 px-3 py-1 bg-terracotta/10 border border-terracotta/20 rounded-full text-[10px] font-bold text-terracotta tracking-wider uppercase">
                  Verified Student
                </div>

                {/* Match Preferences Overview */}
                <div className="mt-6 pt-6 border-t border-warm-border/60 text-left flex flex-col gap-4">
                  <div>
                    <span className="text-[10px] text-terracotta font-extrabold uppercase tracking-wider">What I Offer</span>
                    <p className="text-sm font-semibold text-charcoal mt-0.5">{currentUser?.offers || 'None specified'}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-denim-blue font-extrabold uppercase tracking-wider">Looking For</span>
                    <p className="text-sm font-semibold text-charcoal mt-0.5">{currentUser?.lookingFor || 'None specified'}</p>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSave} className="text-left flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1.5">
                    Display Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 bg-warm-surface border border-warm-border rounded-xl text-charcoal text-sm placeholder-muted-gray focus:outline-none focus:border-terracotta/80 focus:ring-1 focus:ring-terracotta/80 transition-all font-sans"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-terracotta" />
                    What I Offer
                  </label>
                  <textarea
                    rows={2}
                    value={offers}
                    onChange={(e) => setOffers(e.target.value)}
                    className="w-full px-3 py-2 bg-warm-surface border border-warm-border rounded-xl text-charcoal text-xs placeholder-muted-gray focus:outline-none focus:border-terracotta/80 focus:ring-1 focus:ring-terracotta/80 transition-all font-sans resize-none"
                    placeholder="e.g. Engineering Mathematics Textbook, Python notes"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-denim-blue" />
                    Looking For
                  </label>
                  <textarea
                    rows={2}
                    value={lookingFor}
                    onChange={(e) => setLookingFor(e.target.value)}
                    className="w-full px-3 py-2 bg-warm-surface border border-warm-border rounded-xl text-charcoal text-xs placeholder-muted-gray focus:outline-none focus:border-terracotta/80 focus:ring-1 focus:ring-terracotta/80 transition-all font-sans resize-none"
                    placeholder="e.g. Arduino Kit, Python programming notes"
                  />
                </div>

                <button
                  type="submit"
                  disabled={saveStatus === 'saving'}
                  className="w-full py-2.5 bg-terracotta hover:bg-terracotta/90 text-white font-semibold rounded-xl shadow-md shadow-terracotta/25 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01]"
                >
                  <Save className="w-4 h-4" />
                  {saveStatus === 'saving' ? 'Saving details...' : 'Save Settings'}
                </button>
              </form>
            )}
          </div>

          {/* Exchange Profile Summary Dashboard */}
          <div className="glass-panel p-6 rounded-2xl border border-warm-border shadow-premium flex flex-col gap-4">
            <h3 className="text-base font-display font-bold text-charcoal text-left">
              Exchange Profile Summary
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-warm-surface border border-warm-border/60 p-4 rounded-xl text-left shadow-sm">
                <span className="text-[10px] text-muted-gray uppercase font-extrabold tracking-wider block">Successful Swaps</span>
                <span className="text-xl font-display font-extrabold text-charcoal block mt-1">{completedCount}</span>
              </div>
              
              <div className="bg-warm-surface border border-warm-border/60 p-4 rounded-xl text-left shadow-sm">
                <span className="text-[10px] text-muted-gray uppercase font-extrabold tracking-wider block">Active Listings</span>
                <span className="text-xl font-display font-extrabold text-charcoal block mt-1">{userListings.length}</span>
              </div>

              <div className="bg-warm-surface border border-warm-border/60 p-4 rounded-xl text-left shadow-sm">
                <span className="text-[10px] text-muted-gray uppercase font-extrabold tracking-wider block">Response Rate</span>
                <span className="text-xl font-display font-extrabold text-charcoal block mt-1">
                  {(() => {
                    const incomingCount = requests.filter(r => !r.isOutgoing).length;
                    const answeredCount = requests.filter(r => !r.isOutgoing && r.status !== 'Pending').length;
                    return incomingCount > 0 ? Math.round((answeredCount / incomingCount) * 100) + '%' : '—';
                  })()}
                </span>
              </div>

              <div className="bg-warm-surface border border-warm-border/60 p-4 rounded-xl text-left shadow-sm">
                <span className="text-[10px] text-muted-gray uppercase font-extrabold tracking-wider block">Campus Verification</span>
                <span className="text-sm font-bold text-forest-green block mt-1.5 leading-tight flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-forest-green" />
                  {currentUser?.email.endsWith('.edu') ? 'Verified EDU' : 'Verified Student'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Listings Manager */}
        <div id="listings-section" className="lg:col-span-7 flex flex-col gap-6">
          <div className="glass-panel p-6 rounded-2xl border border-warm-border shadow-premium flex-1">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-display font-bold text-charcoal">
                My Marketplace Listings ({userListings.length})
              </h3>
              <button
                onClick={() => setCurrentPage('create')}
                className="px-4 py-2 bg-terracotta hover:bg-terracotta/90 text-white rounded-xl text-xs font-semibold shadow-sm transition-all hover:scale-[1.01] flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                New Listing
              </button>
            </div>

            {userListings.length > 0 ? (
              <div className="flex flex-col gap-4 max-h-[500px] overflow-y-auto pr-1">
                {userListings.map(listing => (
                  <div
                    key={listing.id}
                    onClick={() => onSelectListing(listing.id)}
                    className="p-4 rounded-xl border border-warm-border bg-warm-surface hover:bg-warm-beige/35 cursor-pointer transition-all flex items-center justify-between gap-4 group"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[9px] uppercase tracking-wider font-extrabold px-1.5 py-0.5 bg-warm-beige border border-warm-border/50 text-muted-gray rounded">
                          {listing.category}
                        </span>
                        <span className="text-[9px] uppercase tracking-wider font-extrabold px-1.5 py-0.5 bg-terracotta/10 text-terracotta rounded">
                          {listing.exchangeType}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-charcoal truncate group-hover:text-terracotta transition-colors">
                        {listing.title}
                      </h4>
                      <div className="grid grid-cols-2 gap-2 text-[10px] mt-2">
                        <div>
                          <span className="text-muted-gray font-bold">Have:</span>{' '}
                          <span className="text-charcoal font-semibold truncate">{listing.offer}</span>
                        </div>
                        <div>
                          <span className="text-muted-gray font-bold">Need:</span>{' '}
                          <span className="text-charcoal font-semibold truncate">{listing.lookingFor}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={(e) => handleDeleteListing(listing.id, e)}
                      className="p-2.5 bg-rose-500/10 hover:bg-rose-500 text-rose-600 hover:text-white rounded-xl border border-rose-500/20 transition-all cursor-pointer shadow-sm"
                      title="Delete Listing"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 border border-dashed border-warm-border rounded-xl">
                <User className="w-10 h-10 text-muted-gray mx-auto mb-4 opacity-40" />
                <h4 className="text-sm font-bold text-charcoal mb-1">No listings created yet</h4>
                <p className="text-xs text-muted-gray max-w-xs mx-auto mb-4">
                  You haven't listed any items or skills on the marketplace. Share what you have!
                </p>
                <button
                  onClick={() => setCurrentPage('create')}
                  className="px-4 py-2 bg-warm-surface hover:bg-warm-beige/50 text-charcoal border border-warm-border rounded-xl text-xs font-semibold cursor-pointer shadow-sm"
                >
                  Create Your First Listing
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
