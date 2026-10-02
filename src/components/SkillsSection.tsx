import React, { useState } from 'react';
import { 
  Code, 
  Server, 
  ShoppingBag, 
  Cpu, 
  CheckCircle, 
  Zap, 
  Gauge, 
  ShieldCheck,
  Terminal,
  Layers
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5" />;
      case 'Server':
        return <Server className="w-5 h-5" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      default:
        return <Terminal className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="skills"
      className="py-24 bg-[#090D16] relative border-t border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-wider">
            <span>06+ Years Technical Mastery</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Expertise</span> & Stack
          </h2>
          
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Skills are not limited to HTML/CMS, WP and PHP web applications. We engineer robust, modern frontends, scalable server APIs, and lightning-fast architectures.
          </p>
        </div>

        {/* 4 Pillars Quality Metric Badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Gauge className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white font-heading">95+ PageSpeed</div>
              <div className="text-[11px] text-slate-400">Core Web Vitals Optimized</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white font-heading">Hardened Security</div>
              <div className="text-[11px] text-slate-400">OWASP & Clean Sanitization</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white font-heading">Modular Architecture</div>
              <div className="text-[11px] text-slate-400">Scalable & Reusable Components</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white font-heading">Sub-1s TTFB</div>
              <div className="text-[11px] text-slate-400">Redis & Advanced OPcache</div>
            </div>
          </div>
        </div>

        {/* Main Interactive Skills Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Category Selection Tabs */}
          <div className="lg:col-span-4 space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3 px-1">
              Select Technology Domain:
            </div>
            {SKILL_CATEGORIES.map((cat, idx) => {
              const isActive = activeCategoryIndex === idx;
              return (
                <button
                  key={cat.category}
                  type="button"
                  onClick={() => setActiveCategoryIndex(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between ${
                    isActive
                      ? 'bg-slate-800/90 border-amber-500/60 shadow-lg shadow-amber-500/10'
                      : 'bg-slate-900/50 border-slate-800/80 hover:bg-slate-800/50 text-slate-400'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                        isActive
                          ? 'bg-amber-500 text-slate-950 font-bold'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {getCategoryIcon(cat.icon)}
                    </div>
                    <div>
                      <div className={`text-sm font-bold font-heading ${isActive ? 'text-white' : 'text-slate-300'}`}>
                        {cat.category}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {cat.skills.length} core technologies
                      </div>
                    </div>
                  </div>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Detailed Skills View */}
          <div className="lg:col-span-8 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="mb-6 pb-4 border-b border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-xl font-heading font-bold text-white">
                  {SKILL_CATEGORIES[activeCategoryIndex].category}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {SKILL_CATEGORIES[activeCategoryIndex].description}
                </p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20 w-fit">
                06+ Years Professional Experience
              </span>
            </div>

            {/* Individual Skills Progress Bars */}
            <div className="space-y-4">
              {SKILL_CATEGORIES[activeCategoryIndex].skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-400" />
                      <span className="text-sm font-medium text-slate-200">
                        {skill.name}
                      </span>
                      {skill.highlight && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Core Specialization
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-slate-400">{skill.years}</span>
                      <span className="text-xs font-mono font-bold text-amber-400">{skill.level}%</span>
                    </div>
                  </div>

                  {/* Progress Meter */}
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
