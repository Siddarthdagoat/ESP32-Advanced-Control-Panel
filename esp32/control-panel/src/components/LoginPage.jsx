import React, { useState } from 'react';
import { RefreshCw, Sparkles, LogIn, UserPlus, Mail, Lock, User as UserIcon, ArrowRight } from 'lucide-react';
import { DEMO_USERS } from '../data/dummyData';

// Passwords kept in-memory for prototype session verification
if (!window.__PROTOTYPE_MEM_AUTH_REGISTRY) {
  window.__PROTOTYPE_MEM_AUTH_REGISTRY = {};
}
const getStoredPassword = (emailStr) => {
  return window.__PROTOTYPE_MEM_AUTH_REGISTRY[emailStr.trim().toLowerCase()];
};
const setStoredPassword = (emailStr, passwordStr) => {
  window.__PROTOTYPE_MEM_AUTH_REGISTRY[emailStr.trim().toLowerCase()] = passwordStr;
};

export default function LoginPage({ onLogin }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [offers, setOffers] = useState('');
  const [lookingFor, setLookingFor] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Quick 1-click demo login handler
  const handleQuickDemoLogin = (demoUser) => {
    localStorage.setItem('rexchange_current_session', JSON.stringify(demoUser));
    onLogin(demoUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password || (isSignUp && !name)) {
      setError('Please fill in all required fields.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      
      const usersList = JSON.parse(localStorage.getItem('rexchange_users') || '[]');
      let userObj;
      const cleanEmail = email.trim().toLowerCase();
      const cleanName = name.trim();

      if (isSignUp) {
        const exists = usersList.some(u => u.email.trim().toLowerCase() === cleanEmail);
        if (exists) {
          setError('An account with this email already exists.');
          return;
        }

        userObj = {
          id: 'usr_' + Date.now(),
          name: cleanName,
          email: cleanEmail,
          avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${cleanName}&backgroundColor=D97757`,
          offers: offers || '',
          lookingFor: lookingFor || ''
        };

        setStoredPassword(cleanEmail, password);
        usersList.push(userObj);
        localStorage.setItem('rexchange_users', JSON.stringify(usersList));
      } else {
        userObj = usersList.find(u => u.email.trim().toLowerCase() === cleanEmail);
        
        // If not found in custom users, check DEMO_USERS
        if (!userObj) {
          userObj = DEMO_USERS.find(u => u.email.trim().toLowerCase() === cleanEmail);
        }

        if (!userObj) {
          setError('Invalid email or password. You can also use the 1-click Demo accounts below.');
          return;
        }

        const storedPassword = getStoredPassword(cleanEmail);
        if (storedPassword && storedPassword !== password) {
          setError('Invalid email or password.');
          return;
        }
      }

      localStorage.setItem('rexchange_current_session', JSON.stringify(userObj));
      onLogin(userObj);
    }, 600);
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12 sm:py-16 animate-fade-in text-left">
      <div className="glass-panel p-7 sm:p-8 rounded-3xl border border-warm-border shadow-premium">
        
        {/* Animated Brand Header */}
        <div className="flex flex-col items-center gap-2 mb-6 text-center">
          <div className="p-3 bg-gradient-to-br from-terracotta to-warm-amber rounded-2xl flex items-center justify-center shadow-md shadow-terracotta/25">
            <RefreshCw className="w-6 h-6 text-white animate-spin-slow" />
          </div>
          <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-charcoal">
            Welcome to RExchange
          </h1>
          <p className="text-muted-gray text-xs sm:text-sm font-sans font-normal">
            The AI-powered campus resource loop.
          </p>
        </div>

        {/* Quick Demo Login Box */}
        <div className="mb-6 p-4 bg-warm-ivory border border-warm-border rounded-2xl">
          <div className="flex items-center gap-1.5 text-xs font-bold text-terracotta mb-2 uppercase tracking-wider font-display">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Instant 1-Click Demo Profiles</span>
          </div>
          <p className="text-[11px] text-muted-gray mb-3 font-sans">
            Test the AI matching and student exchanges immediately with a pre-configured student profile:
          </p>
          <div className="flex flex-col gap-2">
            {DEMO_USERS.map((demo) => (
              <button
                key={demo.id}
                type="button"
                onClick={() => handleQuickDemoLogin(demo)}
                className="w-full flex items-center justify-between p-2.5 bg-white hover:bg-white/80 border border-warm-border rounded-xl transition-all hover:border-terracotta/50 shadow-2xs group cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <img src={demo.avatar} alt={demo.name} className="w-8 h-8 rounded-full object-cover border border-warm-border/60" />
                  <div className="text-left">
                    <div className="text-xs font-bold text-charcoal group-hover:text-terracotta transition-colors">{demo.name}</div>
                    <div className="text-[10px] text-muted-gray">{demo.department} • {demo.year.split(' ')[0]}</div>
                  </div>
                </div>
                <div className="text-[11px] font-semibold text-terracotta flex items-center gap-1">
                  <span>Sign In</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px bg-warm-border flex-1" />
          <span className="text-[11px] font-bold text-muted-gray uppercase tracking-wider">Or Use Email</span>
          <div className="h-px bg-warm-border flex-1" />
        </div>

        {/* Toggle Mode Tab */}
        <div className="flex bg-warm-beige/50 p-1.5 rounded-2xl mb-6 border border-warm-border/60">
          <button
            type="button"
            onClick={() => { setIsSignUp(false); setError(''); }}
            className={`flex-1 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              !isSignUp ? 'bg-white text-charcoal shadow-sm' : 'text-muted-gray hover:text-charcoal'
            }`}
          >
            Log In
          </button>
          <button
            type="button"
            onClick={() => { setIsSignUp(true); setError(''); }}
            className={`flex-1 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              isSignUp ? 'bg-white text-charcoal shadow-sm' : 'text-muted-gray hover:text-charcoal'
            }`}
          >
            Create Account
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-rose-500/10 border border-rose-500/20 text-rose-600 rounded-xl text-xs font-semibold text-left">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          {isSignUp && (
            <div>
              <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1.5">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <UserIcon className="w-4 h-4 text-muted-gray absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="e.g. Jordan Lee"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-warm-surface border border-warm-border rounded-xl text-charcoal text-sm placeholder-muted-gray focus:outline-none focus:border-terracotta/80 focus:ring-1 focus:ring-terracotta/80 transition-all font-sans"
                  required
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1.5">
              Campus Email <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-muted-gray absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                placeholder="you@campus.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-warm-surface border border-warm-border rounded-xl text-charcoal text-sm placeholder-muted-gray focus:outline-none focus:border-terracotta/80 focus:ring-1 focus:ring-terracotta/80 transition-all font-sans"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1.5">
              Password <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-muted-gray absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-warm-surface border border-warm-border rounded-xl text-charcoal text-sm placeholder-muted-gray focus:outline-none focus:border-terracotta/80 focus:ring-1 focus:ring-terracotta/80 transition-all font-sans"
                required
              />
            </div>
          </div>

          {isSignUp && (
            <>
              <div className="border-t border-warm-border/50 my-2 pt-4">
                <div className="flex items-center gap-1 mb-2 text-terracotta">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Configure Match Preferences</span>
                </div>
                
                <div className="flex flex-col gap-3">
                  <div>
                    <label className="block text-[10px] font-bold text-muted-gray uppercase tracking-wider mb-1">
                      What can you offer? (e.g. Python Notes, Arduino Kit)
                    </label>
                    <input
                      type="text"
                      placeholder="Engineering Mathematics, Casio Calculator"
                      value={offers}
                      onChange={(e) => setOffers(e.target.value)}
                      className="w-full px-3 py-2 bg-warm-surface border border-warm-border rounded-xl text-charcoal text-xs placeholder-muted-gray focus:outline-none focus:border-terracotta/80 focus:ring-1 focus:ring-terracotta/80 transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-muted-gray uppercase tracking-wider mb-1">
                      What are you looking for?
                    </label>
                    <input
                      type="text"
                      placeholder="Breadboard, Physics Textbook, Figma Help"
                      value={lookingFor}
                      onChange={(e) => setLookingFor(e.target.value)}
                      className="w-full px-3 py-2 bg-warm-surface border border-warm-border rounded-xl text-charcoal text-xs placeholder-muted-gray focus:outline-none focus:border-terracotta/80 focus:ring-1 focus:ring-terracotta/80 transition-all font-sans"
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-2 py-3 bg-terracotta hover:bg-terracotta/90 text-white font-bold rounded-xl shadow-md shadow-terracotta/20 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {isLoading ? (
              <RefreshCw className="w-4 h-4 animate-spin" />
            ) : isSignUp ? (
              <>
                <UserPlus className="w-4 h-4" />
                Join Campus Loop
              </>
            ) : (
              <>
                <LogIn className="w-4 h-4" />
                Sign In
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
