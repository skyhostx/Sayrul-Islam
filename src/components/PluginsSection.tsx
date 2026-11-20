import React from 'react';
import { Puzzle, Download } from 'lucide-react';
import { PLUGINS } from '../data/portfolioData';

interface PluginsSectionProps {
  onRequestPlugin?: (pluginName: string) => void;
  hideHeader?: boolean;
}

export const PluginsSection: React.FC<PluginsSectionProps> = ({ hideHeader = false }) => {
  return (
    <section
      id="plugins"
      className={hideHeader ? 'py-12 bg-[#090D16] relative' : 'py-20 bg-[#090D16] relative border-t border-slate-800/80'}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
          <div className="mb-12 text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
              Plugins
            </h2>
          </div>
        )}

        {/* Two Plugins Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {PLUGINS.map((plugin) => (
            <div
              key={plugin.id}
              className="group rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-900/50 border border-slate-800 hover:border-amber-500/40 p-6 sm:p-8 flex flex-col justify-between gap-6 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/5"
            >
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Puzzle className="w-5 h-5" />
                </div>

                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-amber-300 transition-colors">
                  {plugin.name}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {plugin.shortDescription}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <a
                  href={plugin.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md shadow-amber-500/20 transition-all hover:-translate-y-0.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
