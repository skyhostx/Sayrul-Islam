import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { PluginsSection } from '../components/PluginsSection';
import { PageRoute } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Code2, Cpu, ShieldCheck, Zap, GitBranch, MessageSquare, ArrowRight, DownloadCloud, Sparkles } from 'lucide-react';

interface PluginsPageProps {
  onRequestPlugin: (name: string) => void;
  onNavigate: (page: PageRoute) => void;
}

export const PluginsPage: React.FC<PluginsPageProps> = ({
  onRequestPlugin,
  onNavigate,
}) => {
  const standards = [
    {
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      title: 'Zero Bloat & Peak Speed',
      desc: 'Engineered using native WordPress APIs and vanilla JavaScript/React for near-zero execution overhead on server queries.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: 'Security Audited & Nonce Protected',
      desc: 'All AJAX and REST endpoints are sanitized, escaped, and authenticated with strict nonce validation and capability checks.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-sky-400" />,
      title: 'Modern PHP 8+ & React Admin',
      desc: 'Built using object-oriented PSR standards, typed properties, and modern Gutenberg/React settings dashboards.',
    },
    {
      icon: <GitBranch className="w-5 h-5 text-purple-400" />,
      title: 'Extensible Filter & Action Hooks',
      desc: 'Packed with custom filters and actions so other developers can easily extend functionality without modifying core files.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#090D16]">
      {/* Page Header */}
      <PageHeader
        badge="WordPress & Extension Engineering"
        title="Custom WordPress Plugins &"
        highlightedWord="Web Extensions"
        description="Explore our specialized WordPress plugins and custom web extensions crafted for high performance, eCommerce conversion boosts, frictionless checkout, and modern agency workflows."
        currentPage="plugins"
        onNavigate={onNavigate}
      />

      {/* Standards & Philosophy Bar */}
      <section className="py-12 bg-[#060911] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((s, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all space-y-2.5"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center">
                  {s.icon}
                </div>
                <h3 className="text-sm font-heading font-bold text-white">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Plugins Showcase */}
      <div className="py-6">
        <PluginsSection onRequestPlugin={(name) => {
          onRequestPlugin(name);
          onNavigate('contact');
        }} />
      </div>

      {/* Custom Plugin Development Banner */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#090D16] to-[#0B101D] border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-emerald-500/10 border border-amber-500/30 text-center space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored Plugin Development</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white max-w-2xl mx-auto tracking-tight">
              Need a Bespoke WordPress Plugin Built for Your Specific Workflow?
            </h2>
            <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              We engineer custom WooCommerce gateways, external API sync bridges, custom user portals, and automated cron jobs tailored specifically to your business logic.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition-all hover:scale-105"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Request Custom Plugin on WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 text-white border border-slate-700 hover:border-amber-400 font-semibold text-sm transition-all"
              >
                <span>Submit Plugin Specs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
