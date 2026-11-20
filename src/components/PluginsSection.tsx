import React, { useState, useEffect } from 'react';
import {
  Puzzle,
  Download,
  ShieldCheck,
  CheckCircle2,
  MessageSquare,
  Terminal,
  FileArchive,
  User,
  Scale,
  Settings,
  BookOpen,
  X,
  ExternalLink,
  Layers,
  Cpu
} from 'lucide-react';
import { PLUGINS } from '../data/portfolioData';
import { PluginItem } from '../types';

interface PluginsSectionProps {
  onRequestPlugin?: (pluginName: string) => void;
}

export const PluginsSection: React.FC<PluginsSectionProps> = ({ onRequestPlugin }) => {
  const [selectedPlugin, setSelectedPlugin] = useState<PluginItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPlugin(null);
      }
    };
    if (selectedPlugin) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedPlugin]);

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
              <span>Official WordPress &amp; WooCommerce Plugins</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
              My WordPress <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Plugins</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Lightweight, production-ready WordPress &amp; WooCommerce plugins engineered by Sayrul Islam. Download directly for free with complete setup instructions and documentation.
            </p>
          </div>

          {/* Authentic Status Badge */}
          <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
            <Download className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Free Direct Download &bull; WordPress &amp; WooCommerce Ready</span>
          </div>
        </div>

        {/* Plugins Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {PLUGINS.map((plugin) => (
            <article
              key={plugin.id}
              className="group rounded-2xl bg-gradient-to-b from-slate-900/95 to-slate-900/50 border border-slate-800/90 hover:border-amber-500/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/5 relative overflow-hidden"
            >
              {/* Subtle Ambient Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/10 transition-all" />

              <div className="space-y-6 relative z-10">
                {/* Top Row: Category Badge & Version + License */}
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <span className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    {plugin.badge}
                  </span>

                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                      {plugin.version}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/80">
                      {plugin.license}
                    </span>
                  </div>
                </div>

                {/* Plugin Name & Description */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white group-hover:text-amber-300 transition-colors">
                    {plugin.name}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {plugin.shortDescription}
                  </p>
                </div>

                {/* Essential Plugin Specs Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500 uppercase">
                      <User className="w-3 h-3 text-amber-400" />
                      <span>Author</span>
                    </div>
                    <div className="text-xs font-semibold text-white mt-1 truncate">
                      {plugin.author}
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500 uppercase">
                      <FileArchive className="w-3 h-3 text-sky-400" />
                      <span>Package</span>
                    </div>
                    <div className="text-xs font-semibold text-white mt-1 truncate">
                      {plugin.fileSize}
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500 uppercase">
                      <Scale className="w-3 h-3 text-emerald-400" />
                      <span>License</span>
                    </div>
                    <div className="text-xs font-semibold text-white mt-1 truncate">
                      {plugin.license}
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500 uppercase">
                      <Layers className="w-3 h-3 text-purple-400" />
                      <span>Platform</span>
                    </div>
                    <div className="text-xs font-semibold text-white mt-1 truncate">
                      WP + Woo
                    </div>
                  </div>
                </div>

                {/* Supported Coins / Contact Channels */}
                <div className="space-y-2.5 pt-2 border-t border-slate-800/60">
                  <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                    {plugin.supportedItemsLabel}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {plugin.supportedItems.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-950/80 text-slate-200 border border-slate-800"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Full Key Features List */}
                <div className="space-y-2.5 pt-2 border-t border-slate-800/60">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    All Key Features
                  </div>
                  <ul className="space-y-2">
                    {plugin.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Compatibility & Admin Settings Path */}
                <div className="space-y-2 pt-1">
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs font-mono text-slate-300 flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-500">Compatibility: </span>
                      <span>{plugin.compatibility}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs font-mono text-slate-300 flex items-start gap-2.5">
                    <Settings className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-500">Settings Path: </span>
                      <span>{plugin.adminMenuPath}</span>
                    </div>
                  </div>
                </div>

                {/* Quick Installation Preview */}
                <div className="space-y-2 pt-2 border-t border-slate-800/60">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Quick Installation Steps
                  </div>
                  <ol className="space-y-1.5">
                    {plugin.installationSteps.map((step, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed">
                        <span className="w-5 h-5 rounded-md bg-slate-800 border border-slate-700 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Action Buttons & Tech Stack */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-4 relative z-10">
                {/* Tech Stack */}
                <div className="flex flex-wrap items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-slate-500 mr-1" />
                  {plugin.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/70 text-slate-300 border border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Primary Download & Details Actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={plugin.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-0.5"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Plugin ({plugin.version})</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setSelectedPlugin(plugin)}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-amber-400/50 font-semibold text-xs transition-all"
                  >
                    <BookOpen className="w-4 h-4 text-amber-400" />
                    <span>Full Details</span>
                  </button>

                  <a
                    href={`https://wa.me/8801788911722?text=Hi%20Sayrul,%20I%20need%20support%20or%20customization%20for%20your%20plugin:%20${encodeURIComponent(plugin.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-3.5 py-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 font-semibold text-xs transition-all"
                    title={`Request support or customization for ${plugin.name}`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span className="sm:hidden">Support / Customize</span>
                  </a>
                </div>
              </div>
            </article>
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
                From proprietary WooCommerce payment gateways and ERP inventory synchronizers to headless REST API webhooks, Sayrul Islam engineers secure, upgrade-proof custom plugins.
              </p>
            </div>

            <a
              href="https://wa.me/8801788911722?text=Hi%20Sayrul,%20I%20would%20like%20to%20discuss%20a%20custom%20WordPress%20plugin%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-amber-500/20 transition-all hover:scale-105"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950" />
              <span>Discuss Custom Plugin Scope</span>
            </a>
          </div>
        </div>

      </div>

      {/* Full Plugin Documentation & Download Modal */}
      {selectedPlugin && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedPlugin(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="plugin-modal-title"
        >
          <div
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0D1322] border border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-5">
              <div className="space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    {selectedPlugin.badge}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                    {selectedPlugin.version}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {selectedPlugin.fileSize} &bull; {selectedPlugin.license}
                  </span>
                </div>
                <h3
                  id="plugin-modal-title"
                  className="text-2xl sm:text-3xl font-heading font-bold text-white"
                >
                  {selectedPlugin.name}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedPlugin(null)}
                className="p-2 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="Close plugin details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Full Overview */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400">
                Plugin Overview
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedPlugin.fullDescription}
              </p>
            </div>

            {/* Technical Metadata */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs font-mono">
              <div>
                <span className="text-slate-500 block">Author</span>
                <span className="text-white font-semibold">{selectedPlugin.author}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Requirements</span>
                <span className="text-white font-semibold">{selectedPlugin.requires}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-slate-500 block">Compatibility</span>
                <span className="text-sky-300">{selectedPlugin.compatibility}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-slate-500 block">Admin Configuration Location</span>
                <span className="text-amber-300">{selectedPlugin.adminMenuPath}</span>
              </div>
            </div>

            {/* Supported Items */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400">
                {selectedPlugin.supportedItemsLabel}
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedPlugin.supportedItems.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-900 text-slate-200 border border-slate-700/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Complete Features */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400">
                Complete Features
              </h4>
              <ul className="space-y-2">
                {selectedPlugin.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step-by-Step Installation */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400">
                Step-by-Step Installation &amp; Setup
              </h4>
              <ol className="space-y-2.5">
                {selectedPlugin.installationSteps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="w-6 h-6 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-400 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Modal Footer Actions */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={selectedPlugin.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download {selectedPlugin.name} ({selectedPlugin.version})</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              {onRequestPlugin && (
                <button
                  type="button"
                  onClick={() => {
                    const name = selectedPlugin.name;
                    setSelectedPlugin(null);
                    onRequestPlugin(name);
                  }}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 text-sm font-semibold transition-all"
                >
                  <span>Customize</span>
                </button>
              )}

              <a
                href={`https://wa.me/8801788911722?text=Hi%20Sayrul,%20I%20have%20a%20question%20about%20${encodeURIComponent(selectedPlugin.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 text-sm font-semibold transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Need Help?</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
