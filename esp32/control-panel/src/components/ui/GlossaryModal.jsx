import React, { useState } from 'react';
import { X, Search, BookOpen, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { GEOPOLITICAL_CONCEPTS } from '../../data/geointelConcepts';

export default function GlossaryModal({
  isOpen,
  onClose,
  onSelectConcept
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  if (!isOpen) return null;

  const allConcepts = Object.values(GEOPOLITICAL_CONCEPTS);
  const categories = ['ALL', ...Array.from(new Set(allConcepts.map(c => c.category)))];

  const filtered = allConcepts.filter(c => {
    const matchesSearch = 
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.whatIsIt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (c.acronym && c.acronym.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'ALL' || c.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 pointer-events-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
      />

      {/* Main Glass Dialog */}
      <div className="relative w-full max-w-3xl max-h-[88vh] bg-slate-950/95 border border-cyan-500/30 rounded-2xl shadow-[0_0_60px_rgba(6,182,212,0.2)] flex flex-col overflow-hidden animate-fade-in z-10 font-sans">
        
        {/* Header */}
        <div className="p-5 pb-3 border-b border-white/10 bg-white/[0.02] flex items-start justify-between relative">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold tracking-wider uppercase bg-cyan-500/15 border border-cyan-500/40 text-cyan-300">
                PEDAGOGICAL INTELLIGENCE
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                {allConcepts.length} CONCEPTS
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-wide text-white">
              GEOPOLITICAL VOCABULARY & DOCTRINES
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Master the foundational concepts, alliances, international laws, and strategic theories shaping global power.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            title="Close (ESC)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search & Category Filter */}
        <div className="p-4 bg-black/40 border-b border-white/5 space-y-2.5">
          <div className="relative">
            <Search className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search concepts, acronyms (e.g. SLOC, CAATSA, A2/AD, Nuclear Triad)..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none text-xs text-white placeholder-slate-500 font-mono"
              autoFocus
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-mono whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-black font-bold'
                    : 'bg-white/5 text-slate-400 hover:text-white border border-white/5 hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Concepts Grid */}
        <div className="p-5 overflow-y-auto space-y-2.5 flex-1 text-xs">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-slate-500 font-mono text-xs">
              No matching geopolitical concepts found.
            </div>
          ) : (
            filtered.map((concept) => (
              <div
                key={concept.id}
                onClick={() => {
                  if (onSelectConcept) {
                    onSelectConcept(concept.id);
                  }
                  onClose();
                }}
                className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-cyan-500/40 transition-all cursor-pointer group flex items-start justify-between gap-3 shadow-sm"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-bold text-white group-hover:text-cyan-300 font-display tracking-wide text-sm transition-colors">
                      {concept.name}
                    </h3>
                    {concept.acronym && (
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-white/10 text-slate-300 border border-white/10">
                        {concept.acronym}
                      </span>
                    )}
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/30">
                      {concept.category}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {concept.whatIsIt}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-slate-500 group-hover:text-cyan-400 text-xs font-mono shrink-0 self-center">
                  <span>LEARN</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-3.5 border-t border-white/10 bg-white/[0.02] flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span>Click any concept to open deep beginner & advanced explanations.</span>
          <span>GEOINTEL Educational Architecture</span>
        </div>

      </div>
    </div>
  );
}
