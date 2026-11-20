import React from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { PluginsSection } from '../components/PluginsSection';
import { PageRoute } from '../types';

interface PluginsPageProps {
  onRequestPlugin?: (name: string) => void;
  onNavigate: (page: PageRoute) => void;
}

export const PluginsPage: React.FC<PluginsPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#090D16] pt-28 sm:pt-36 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-4">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="flex items-center gap-1 hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-amber-400">Plugins</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
          Plugins
        </h1>
      </div>

      <PluginsSection hideHeader />
    </div>
  );
};
