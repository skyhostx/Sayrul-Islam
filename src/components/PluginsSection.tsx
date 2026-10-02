import React, { useState } from 'react';
import { 
  Puzzle, 
  Sparkles, 
  DownloadCloud, 
  Star, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowUpRight, 
  MessageSquare, 
  Terminal,
  Zap
} from 'lucide-react';
import { PLUGINS, PERSONAL_INFO } from '../data/portfolioData';
import { PluginItem } from '../types';

interface PluginsSectionProps {
  onRequestPlugin?: (pluginName: string) => void;
}

export const PluginsSection: React.FC<PluginsSectionProps> = ({ onRequestPlugin }) => {
  const [selectedPlugin, setSelectedPlugin] = useState<PluginItem | null>(null);

  return (
    <section
      id="plugins"
      className="py-24 bg-[#090D16] relative border-t border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-wider">
              <Puzzle className="w-3.5 h-3.5" />
              <span>Custom WordPress &amp; Web Extensions</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Plugins</span> &amp; Tools
            </h2>
            
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Bespoke, feather-light WordPress plugins and web utilities engineered for extreme speed, conversion boost, and flawless API connectivity.
            </p>
          </div>

          {/* Quick Metrics Badge */}
          <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span>90K+ Total Global Downloads</span>
          </div>
        </div>

        {/* Plugins Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {PLUGINS.map((plugin) => (
            <div
              key={plugin.id}
              className="group rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-900/40 border border-slate-800/90 hover:border-amber-500/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/5 relative overflow-hidden"
            >
              {/* Subtle Ambient Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/10 transition-all" />

              <div className="space-y-6">
                {/* Top Badge & Rating Row */}
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    {plugin.badge}
                  </span>
                  
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1 text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <strong className="text-white">{plugin.rating}</strong>
                    </span>
                    <span>&bull;</span>
                    <span className="text-emerald-400 font-medium">{plugin.activeInstalls} Active</span>
                  </div>
                </div>

                {/* Plugin Title & Version */}
                <div>
                  <div className="flex items-baseline gap-2.5">
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-amber-300 transition-colors">
                      {plugin.name}
                    </h3>
                    <span className="text-xs font-mono text-slate-500">{plugin.version}</span>
                  </div>
                  
                  <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                    {plugin.shortDescription}
                  </p>
                </div>

                {/* Key Features List */}
                <div className="space-y-2 pt-2 border-t border-slate-800/60">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Key Capabilities</div>
                  <ul className="space-y-1.5">
                    {plugin.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Compatibility Banner */}
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                  <span className="truncate">{plugin.compatibility}</span>
                </div>
              </div>

              {/* Action Buttons & Tech Stack */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-4">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {plugin.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/60 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex items-center gap-3">
                  <a
                    href={`https://wa.me/8801788911722?text=Hi%20Sayrul,%20I%20am%20interested%20in%20your%20custom%20plugin:%20${encodeURIComponent(plugin.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/20 transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-slate-950" />
                    <span>Get Plugin / Custom License</span>
                  </a>

                  <a
                    href="#contact"
                    onClick={() => onRequestPlugin?.(plugin.name)}
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="Inquire about custom feature additions"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Plugin Development Callout Banner */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-amber-950/30 border border-slate-800 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-mono">
                <Terminal className="w-3.5 h-3.5" />
                <span>Custom Architecture</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                Need a Bespoke Plugin Built Specifically for Your Workflow?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
                From proprietary payment gateways and ERP inventory synchronizers to headless REST API webhooks, Sayrul Islam engineers secure, upgrade-proof custom plugins.
              </p>
            </div>

            <a
              href="#contact"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-emerald-500/20 transition-all hover:scale-105"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950" />
              <span>Discuss Custom Plugin Scope</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
