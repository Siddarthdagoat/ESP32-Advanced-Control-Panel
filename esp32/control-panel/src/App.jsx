import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ExplorePage from './components/ExplorePage';
import CreateListingPage from './components/CreateListingPage';
import MyExchangesPage from './components/MyExchangesPage';
import ListingDetailsPage from './components/ListingDetailsPage';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import MatchesPage from './components/MatchesPage';

import { 
  INITIAL_LISTINGS, 
  INITIAL_REQUESTS
} from './data/dummyData';

export default function App() {
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('rexchange_user');
    return saved ? JSON.parse(saved) : null;
  });

  // Toast Notifications System state
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Get initial page from path
  const getPageFromPath = (path) => {
    const p = path.replace(/^\//, ''); // strip leading slash
    if (p === 'explore') return 'explore';
    if (p === 'matches') return 'matches';
    if (p === 'create') return 'create';
    if (p === 'exchanges' || p === 'my-exchanges') return 'exchanges';
    if (p === 'profile') return 'profile';
    if (p === 'login') return 'login';
    if (p === 'details') return 'details';
    return 'landing';
  };

  const getPathFromPage = (page) => {
    if (page === 'landing') return '/';
    if (page === 'exchanges') return '/my-exchanges';
    return '/' + page;
  };

  const [currentPage, setCurrentPage] = useState(() => {
    const initialPage = getPageFromPath(window.location.pathname);
    const savedUser = localStorage.getItem('rexchange_user');
    const isLoggedIn = !!savedUser;
    
    // Protect routes
    const protectedPages = ['explore', 'matches', 'create', 'exchanges', 'profile', 'details'];
    if (protectedPages.includes(initialPage) && !isLoggedIn) {
      return 'login';
    }
    return initialPage;
  });

  const [listings, setListings] = useState(() => {
    const saved = localStorage.getItem('rexchange_listings');
    return saved ? JSON.parse(saved) : INITIAL_LISTINGS;
  });

  const [requests, setRequests] = useState(() => {
    const saved = localStorage.getItem('rexchange_requests');
    return saved ? JSON.parse(saved) : INITIAL_REQUESTS;
  });

  const [selectedListingId, setSelectedListingId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Sync state to local storage
  useEffect(() => {
    localStorage.setItem('rexchange_listings', JSON.stringify(listings));
  }, [listings]);

  useEffect(() => {
    localStorage.setItem('rexchange_requests', JSON.stringify(requests));
  }, [requests]);

  const navigate = (pageId) => {
    const isLoggedIn = !!currentUser;
    const protectedPages = ['explore', 'matches', 'create', 'exchanges', 'profile', 'details'];
    
    let targetPage = pageId;
    if (protectedPages.includes(pageId) && !isLoggedIn) {
      targetPage = 'login';
    }
    
    setCurrentPage(targetPage);
    const path = getPathFromPage(targetPage);
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path);
    }
  };

  // Listen to browser forward/back buttons
  useEffect(() => {
    const handlePopState = () => {
      const page = getPageFromPath(window.location.pathname);
      const isLoggedIn = !!currentUser;
      const protectedPages = ['explore', 'matches', 'create', 'exchanges', 'profile', 'details'];

      if (protectedPages.includes(page) && !isLoggedIn) {
        setCurrentPage('login');
      } else {
        setCurrentPage(page);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [currentUser]);

  // Router dispatcher
  const handleSelectListing = (listingId) => {
    setSelectedListingId(listingId);
    navigate('details');
  };

  const handleAddListing = (newListingData) => {
    const freshListing = {
      ...newListingData,
      id: 'list_' + Date.now(),
      studentName: currentUser?.name || 'Student',
      studentEmail: currentUser?.email || 'student@campus.edu',
      studentAvatar: currentUser?.avatar || `https://api.dicebear.com/7.x/initials/svg?seed=${currentUser?.name || 'Student'}&backgroundColor=D97757`,
      createdAt: new Date().toISOString()
    };
    setListings(prev => [freshListing, ...prev]);
    showToast('Listing published successfully!', 'success');
  };

  const handleRequestExchange = (newRequestData) => {
    setRequests(prev => [newRequestData, ...prev]);
    showToast('Exchange request sent!', 'success');
  };

  const handleUpdateRequest = (requestId, newStatus) => {
    setRequests(prev => 
      prev.map(req => 
        req.id === requestId ? { ...req, status: newStatus } : req
      )
    );
    if (newStatus === 'Accepted') {
      showToast('Exchange request accepted!', 'success');
    } else if (newStatus === 'Declined') {
      showToast('Exchange request declined.', 'info');
    } else if (newStatus === 'Completed') {
      showToast('Exchange marked as completed!', 'success');
    }
  };

  const handleLogin = (user) => {
    setCurrentUser(user);
    showToast(`Logged in as ${user.name}`, 'success');
    navigate('explore');
  };

  const handleLogout = () => {
    localStorage.removeItem('rexchange_user');
    setCurrentUser(null);
    showToast('Logged out successfully.', 'info');
    navigate('login');
  };

  const handleUpdateUser = (updatedUser) => {
    setCurrentUser(updatedUser);
    localStorage.setItem('rexchange_user', JSON.stringify(updatedUser));
  };

  const renderActivePage = () => {
    switch (currentPage) {
      case 'landing':
        return (
          <LandingPage 
            setCurrentPage={navigate} 
            setSelectedCategory={setSelectedCategory} 
            currentUser={currentUser}
          />
        );
      case 'explore':
        return (
          <ExplorePage 
            listings={listings} 
            requests={requests}
            currentUser={currentUser}
            onSelectListing={handleSelectListing} 
            initialCategory={selectedCategory}
            clearInitialCategory={() => setSelectedCategory(null)}
            setCurrentPage={navigate}
          />
        );
      case 'matches':
        return (
          <MatchesPage 
            listings={listings}
            currentUser={currentUser}
            requests={requests}
            onRequestExchange={handleRequestExchange}
            setCurrentPage={navigate}
            onSelectListing={handleSelectListing}
          />
        );
      case 'create':
        return (
          <CreateListingPage 
            onAddListing={handleAddListing} 
            setCurrentPage={navigate} 
          />
        );
      case 'exchanges':
        return (
          <MyExchangesPage 
            requests={requests} 
            onUpdateRequest={handleUpdateRequest}
            setCurrentPage={navigate}
          />
        );
      case 'login':
        return (
          <LoginPage 
            onLogin={handleLogin} 
          />
        );
      case 'profile':
        return (
          <ProfilePage 
            currentUser={currentUser} 
            onUpdateUser={handleUpdateUser} 
            listings={listings} 
            setListings={setListings}
            requests={requests}
            setCurrentPage={navigate}
            onSelectListing={handleSelectListing}
            showToast={showToast}
          />
        );
      case 'details':
        const selectedListing = listings.find(l => l.id === selectedListingId);
        return (
          <ListingDetailsPage 
            listing={selectedListing} 
            allListings={listings} 
            onSelectListing={handleSelectListing} 
            onBack={() => navigate('explore')} 
            onRequestExchange={handleRequestExchange}
            existingRequests={requests}
            onRequestExchangeRedirect={() => navigate('exchanges')}
            currentUser={currentUser}
          />
        );
      default:
        return (
          <LandingPage 
            setCurrentPage={navigate} 
            setSelectedCategory={setSelectedCategory} 
            currentUser={currentUser}
          />
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-transparent text-charcoal selection:bg-terracotta/20">
      {/* Header and Nav */}
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={navigate} 
        currentUser={currentUser} 
        onLogout={handleLogout}
      />

      {/* Main Container */}
      <main className="flex-grow">
        {renderActivePage()}
      </main>

      {/* Footer */}
      <footer className="border-t border-warm-border/60 py-6 text-center text-xs text-muted-gray bg-warm-surface/30">
        <div className="max-w-7xl mx-auto px-4">
          <p>© {new Date().getFullYear()} RExchange — AI-Powered Campus Resource Loop. All rights reserved.</p>
        </div>
      </footer>

      {/* Elegant Toast Notifications */}
      {toast && (
        <div className="fixed bottom-5 right-5 z-55 flex items-center gap-2.5 px-4.5 py-3 bg-charcoal border border-charcoal/80 text-white rounded-xl shadow-premium animate-fade-in font-sans text-xs sm:text-sm font-semibold max-w-sm">
          <div className={`w-2 h-2 rounded-full ${toast.type === 'success' ? 'bg-forest-green' : toast.type === 'error' ? 'bg-rose-500' : 'bg-warm-amber'}`} />
          <span>{toast.message}</span>
          <button 
            onClick={() => setToast(null)}
            className="ml-3 hover:text-muted-gray text-white/50 cursor-pointer transition-colors"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
