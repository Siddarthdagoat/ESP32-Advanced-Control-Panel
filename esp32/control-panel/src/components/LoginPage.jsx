import React, { useState } from 'react';
import { RefreshCw, Sparkles, LogIn, UserPlus, Mail, Lock, User as UserIcon } from 'lucide-react';

export default function LoginPage({ onLogin }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [offers, setOffers] = useState('');
  const [lookingFor, setLookingFor] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password || (isSignUp && !name)) {
      setError('Please fill in all required fields.');
      return;
    }

    setIsLoading(true);

    // Simulate authenticating delay
    setTimeout(() => {
      setIsLoading(false);
      
      let userObj;
      if (isSignUp) {
        userObj = {
          name,
          email,
          avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${name}&backgroundColor=D97757`,
          offers: offers || '',
          lookingFor: lookingFor || ''
        };
      } else {
        // Mock login
        // Check if there is an existing user in localStorage from signup
        const stored = localStorage.getItem('rexchange_user');
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed.email === email) {
            userObj = parsed;
          }
        }
        
        if (!userObj) {
          // If no stored matches, create a clean user with the entered email
          userObj = {
            name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
            email,
            avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${email.split('@')[0]}&backgroundColor=D97757`,
            offers: '',
            lookingFor: ''
          };
        }
      }

      localStorage.setItem('rexchange_user', JSON.stringify(userObj));
      onLogin(userObj);
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16 animate-fade-in">
      <div className="glass-panel p-8 rounded-3xl border border-warm-border shadow-premium text-center">
        {/* Animated Brand Header */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <div className="p-3 bg-gradient-to-br from-terracotta to-warm-amber rounded-2xl flex items-center justify-center shadow-md shadow-terracotta/25">
            <RefreshCw className="w-6 h-6 text-white animate-spin-slow" />
          </div>
          <h1 className="font-display font-extrabold text-3xl text-charcoal">
            Welcome to RExchange
          </h1>
          <p className="text-muted-gray text-xs sm:text-sm font-sans font-normal">
            The circular economy for university campuses.
          </p>
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
                  placeholder="John Doe"
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
                      placeholder="Python Tutoring, Chemistry Textbook"
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
            className="w-full mt-4 py-3 bg-terracotta hover:bg-terracotta/90 disabled:bg-terracotta/40 text-white font-semibold rounded-xl shadow-md shadow-terracotta/25 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01]"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                {isSignUp ? 'Creating account...' : 'Logging in...'}
              </>
            ) : (
              <>
                {isSignUp ? <UserPlus className="w-4 h-4" /> : <LogIn className="w-4 h-4" />}
                {isSignUp ? 'Sign Up' : 'Log In'}
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
