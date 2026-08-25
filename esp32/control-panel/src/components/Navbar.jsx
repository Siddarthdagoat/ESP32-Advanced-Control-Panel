import React, { useState } from 'react';
import { RefreshCw, Menu, X, ListPlus, Compass, ArrowLeftRight, User, LogOut, ChevronDown, Sparkles, Home } from 'lucide-react';

export default function Navbar({ currentPage, setCurrentPage, currentUser, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navItems = [
    { id: 'landing', label: 'Home', icon: Home },
    { id: 'explore', label: 'Explore', icon: Compass },
    { id: 'matches', label: 'Matches', icon: Sparkles },
    { id: 'create', label: 'Create Listing', icon: ListPlus },
    { id: 'exchanges', label: 'My Exchanges', icon: ArrowLeftRight },
  ];

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setIsOpen(false);
  };

  return (
    <nav className="glass-panel sticky top-0 z-50 px-4 sm:px-6 py-3.5 shadow-premium border-b border-warm-border/80 bg-white/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick('landing')}
          className="flex items-center gap-2.5 cursor-pointer group select-none"
        >
          <div className="p-2 bg-gradient-to-br from-terracotta to-warm-amber rounded-xl flex items-center justify-center shadow-md shadow-terracotta/20 group-hover:opacity-90 transition-opacity">
            <RefreshCw className="w-5 h-5 text-white animate-spin-slow group-hover:rotate-180 transition-transform duration-700" />
          </div>
          <span className="font-display font-bold text-2xl tracking-tight text-charcoal">
            RExchange
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-terracotta text-white shadow-sm shadow-terracotta/20 scale-[1.01]'
                    : 'text-muted-gray hover:text-charcoal hover:bg-warm-beige/40'
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Desktop User Account Actions / Sign In */}
        {currentUser ? (
          <div className="hidden md:relative md:block">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-3 pl-4 border-l border-warm-border/80 focus:outline-none cursor-pointer group select-none text-left"
            >
              <div className="text-right">
                <div className="text-sm font-semibold text-charcoal group-hover:text-terracotta transition-colors">
                  {currentUser.name}
                </div>
                <div className="text-[10px] text-terracotta font-mono font-bold uppercase tracking-wider flex items-center gap-0.5">
                  Student Account
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </div>
              </div>
              <img 
                src={currentUser.avatar} 
                alt={currentUser.name} 
                className="w-10 h-10 rounded-full border border-warm-border object-cover shadow-sm group-hover:border-terracotta/50 transition-colors"
              />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <>
                <div 
                  className="fixed inset-0 z-40 cursor-default" 
                  onClick={() => setDropdownOpen(false)}
                />
                
                <div className="absolute right-0 mt-3 w-48 bg-white border border-warm-border rounded-2xl shadow-premium z-50 py-2 animate-fade-in text-left">
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      setCurrentPage('profile');
                    }}
                    className="w-full px-4 py-2.5 text-xs sm:text-sm font-semibold text-charcoal hover:bg-warm-beige/35 hover:text-terracotta flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <User className="w-4 h-4 text-muted-gray" />
                    My Profile
                  </button>
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      setCurrentPage('profile');
                      setTimeout(() => {
                        const el = document.getElementById('listings-section');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    className="w-full px-4 py-2.5 text-xs sm:text-sm font-semibold text-charcoal hover:bg-warm-beige/35 hover:text-terracotta flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <ListPlus className="w-4 h-4 text-muted-gray" />
                    My Listings
                  </button>
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      setCurrentPage('exchanges');
                    }}
                    className="w-full px-4 py-2.5 text-xs sm:text-sm font-semibold text-charcoal hover:bg-warm-beige/35 hover:text-terracotta flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <ArrowLeftRight className="w-4 h-4 text-muted-gray" />
                    My Exchanges
                  </button>
                  
                  <div className="border-t border-warm-border/50 my-1.5" />
                  
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      onLogout();
                    }}
                    className="w-full px-4 py-2.5 text-xs sm:text-sm font-semibold text-rose-600 hover:bg-rose-500/10 flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="hidden md:block">
            <button
              onClick={() => setCurrentPage('login')}
              className="px-5 py-2.5 bg-terracotta hover:bg-terracotta/90 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-sm transition-all hover:scale-[1.01] cursor-pointer flex items-center gap-1.5"
            >
              <User className="w-4 h-4" />
              Sign In
            </button>
          </div>
        )}

        {/* Mobile Actions Menu Toggler */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-muted-gray hover:text-charcoal hover:bg-warm-beige/40 rounded-lg transition-colors cursor-pointer"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-warm-border flex flex-col gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-terracotta text-white'
                    : 'text-muted-gray hover:text-charcoal hover:bg-warm-beige/45'
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </button>
            );
          })}
          
          {currentUser ? (
            <>
              {/* My Profile Mobile Button */}
              <button
                onClick={() => handleNavClick('profile')}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold transition-colors cursor-pointer ${
                  currentPage === 'profile'
                    ? 'bg-terracotta text-white'
                    : 'text-muted-gray hover:text-charcoal hover:bg-warm-beige/45'
                }`}
              >
                <User className="w-5 h-5" />
                My Profile
              </button>
              
              {/* User Profile details (Mobile footer) */}
              <div className="flex items-center justify-between px-4 py-4 mt-2 border-t border-warm-border">
                <div className="flex items-center gap-3">
                  <img 
                    src={currentUser.avatar} 
                    alt={currentUser.name} 
                    className="w-10 h-10 rounded-full object-cover border border-warm-border"
                  />
                  <div className="text-left">
                    <div className="text-sm font-semibold text-charcoal">{currentUser.name}</div>
                    <div className="text-xs text-muted-gray">{currentUser.email}</div>
                  </div>
                </div>
                
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onLogout();
                  }}
                  className="p-2.5 bg-rose-500/10 hover:bg-rose-500 text-rose-600 hover:text-white border border-rose-500/20 rounded-xl transition-all cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            </>
          ) : (
            <div className="px-4 py-4 border-t border-warm-border">
              <button
                onClick={() => handleNavClick('login')}
                className="w-full py-3 bg-terracotta hover:bg-terracotta/90 text-white text-sm font-semibold rounded-xl shadow-sm transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <User className="w-4 h-4" />
                Sign In
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
