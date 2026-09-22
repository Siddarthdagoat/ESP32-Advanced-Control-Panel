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
import Footer from './components/Footer';

import { 
  INITIAL_LISTINGS, 
  INITIAL_REQUESTS
} from './data/dummyData';

export default function App() {
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('rexchange_current_session');
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

  // Clean up legacy, unisolated data keys and sanitize persisted passwords to prevent leakage
  useEffect(() => {
    const legacyKeys = ['rexchange_user', 'profile', 'currentUser', 'matches'];
    legacyKeys.forEach(k => {
      if (localStorage.getItem(k)) {
        localStorage.removeItem(k);
      }
    });

    // Sanitize any passwords in registered users list and normalize emails
    try {
      const usersList = JSON.parse(localStorage.getItem('rexchange_users') || '[]');
      let updated = false;
      const sanitizedUsers = usersList.map(u => {
        let needsFix = false;
        let cleanEmail = u.email || '';
        if (u.email && (u.email !== u.email.trim().toLowerCase())) {
          cleanEmail = u.email.trim().toLowerCase();
          needsFix = true;
        }
        if (u.password || needsFix) {
          updated = true;
          const { password: _, ...rest } = u;
          return { ...rest, email: cleanEmail };
        }
        return u;
      });
      if (updated) {
        localStorage.setItem('rexchange_users', JSON.stringify(sanitizedUsers));
      }
    } catch (e) {
      console.error("Failed to sanitize users registry", e);
    }

    // Sanitize password in current session
    try {
      const currentSession = JSON.parse(localStorage.getItem('rexchange_current_session') || 'null');
      if (currentSession && currentSession.password) {
        const { password: _, ...rest } = currentSession;
        localStorage.setItem('rexchange_current_session', JSON.stringify(rest));
      }
    } catch (e) {
      console.error("Failed to sanitize current session", e);
    }
  }, []);

  // Get initial page from path
  const getPageFromPath = (path) => {
    const cleanPath = path.split('?')[0].split('#')[0];
    const p = cleanPath.replace(/^\/+|\/+$/g, ''); // strip leading/trailing slashes
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
    const savedUser = localStorage.getItem('rexchange_current_session');
    const isLoggedIn = !!savedUser;
    
    // Protect routes
    const protectedPages = ['explore', 'matches', 'create', 'exchanges', 'profile', 'details'];
    if (protectedPages.includes(initialPage) && !isLoggedIn) {
      return 'login';
    }
    return initialPage;
  });

  const [listings, setListings] = useState(() => {
    try {
      const saved = localStorage.getItem('rexchange_listings');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error("Failed to load listings", e);
    }
    return INITIAL_LISTINGS;
  });

  const [requests, setRequests] = useState(() => {
    try {
      const saved = localStorage.getItem('rexchange_requests');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error("Failed to load requests", e);
    }
    return INITIAL_REQUESTS;
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
      ownerId: currentUser?.id,
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
    localStorage.removeItem('rexchange_current_session');
    setCurrentUser(null);
    setSelectedListingId(null);
    setSelectedCategory(null);
    showToast('Logged out successfully.', 'info');
    navigate('landing');
  };

  const handleDeleteListing = (listingId) => {
    setListings(prev => prev.filter(l => l.id !== listingId));
    showToast('Listing deleted successfully!', 'success');
  };

  const handleUpdateUser = (updatedUser) => {
    setCurrentUser(updatedUser);
    localStorage.setItem('rexchange_current_session', JSON.stringify(updatedUser));
    
    // Also sync the update in the global user registry
    const usersList = JSON.parse(localStorage.getItem('rexchange_users') || '[]');
    const updatedUsersList = usersList.map(u => u.id === updatedUser.id ? updatedUser : u);
    localStorage.setItem('rexchange_users', JSON.stringify(updatedUsersList));

    // Update listings owned by this user
    setListings(prev => 
      prev.map(l => l.ownerId === updatedUser.id ? {
        ...l,
        studentName: updatedUser.name,
        studentAvatar: updatedUser.avatar,
        studentEmail: updatedUser.email
      } : l)
    );

    // Update requests involving this user
    setRequests(prev =>
      prev.map(r => {
        let updatedReq = { ...r };
        if (r.senderId === updatedUser.id) {
          updatedReq.senderName = updatedUser.name;
          updatedReq.senderAvatar = updatedUser.avatar;
        }
        if (r.receiverId === updatedUser.id) {
          updatedReq.receiverName = updatedUser.name;
          updatedReq.receiverAvatar = updatedUser.avatar;
        }
        return updatedReq;
      })
    );
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
        const userExchanges = requests.filter(r => 
          r.senderId === currentUser?.id || 
          r.receiverId === currentUser?.id || 
          r.requesterId === currentUser?.id || 
          r.ownerId === currentUser?.id
        );
        return (
          <MyExchangesPage 
            requests={userExchanges} 
            onUpdateRequest={handleUpdateRequest}
            setCurrentPage={navigate}
            currentUser={currentUser}
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
            onDeleteListing={handleDeleteListing}
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
            onDeleteListing={handleDeleteListing}
          />
        );
      default:
        return (
          <LandingPage 
            setCurrentPage={navigate} 
            setSelectedCategory={setSelectedCategory} 
            currentUser={currentUser}
            onLogin={handleLogin}
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

      {/* Professional Footer */}
      <Footer 
        setCurrentPage={navigate} 
        setSelectedCategory={setSelectedCategory} 
      />

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
