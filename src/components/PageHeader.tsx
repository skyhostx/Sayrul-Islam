import React from 'react';
import { ChevronRight, ArrowLeft, MessageSquare, Sparkles } from 'lucide-react';
import { PageRoute } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface PageHeaderProps {
  badge: string;
  title: string;
  highlightedWord?: string;
  description: string;
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  highlightedWord,
  description,
  currentPage,
  onNavigate,
}) => {
  return (
    <div className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-gradient-to-b from-[#090D16] via-[#0D1424] to-[#090D16] border-b border-slate-800/80">
      {/* Background Grid & Ambient Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[550px] h-[280px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Breadcrumb & Back to Home */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="flex items-center gap-1 hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-amber-400 capitalize">{currentPage}</span>
        </div>

        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 mb-4">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>{badge}</span>
        </div>

        {/* Page Title & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-8 space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
              {title}{' '}
              {highlightedWord && (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                  {highlightedWord}
                </span>
              )}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
              {description}
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="lg:col-span-4 flex flex-wrap sm:flex-nowrap lg:justify-end items-center gap-3 pt-2 lg:pt-0">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 text-xs font-semibold transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Now</span>
            </a>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 hover:bg-amber-400 text-xs font-bold transition-all shadow-lg shadow-amber-500/20 hover:-translate-y-0.5"
            >
              <span>Get a Quote</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
