import React, { useState } from 'react';
import { 
  Layout, 
  Palette, 
  Flame, 
  ShoppingBag, 
  TrendingUp, 
  Activity, 
  ArrowRight, 
  Check, 
  Clock, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { SERVICES, PERSONAL_INFO } from '../data/portfolioData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-6 h-6 text-amber-400" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-sky-400" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-orange-400" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-emerald-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-yellow-400" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-indigo-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section
      id="services"
      className="py-24 bg-[#090D16] relative border-t border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-wider">
            <span>Specialized Capabilities</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            My Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Services</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            I design and build high-performance, modern websites for brands and creators. Every project is engineered for speed, conversion, and effortless maintainability.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => {
            const isHovered = hoveredId === service.id;
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 bg-slate-900/70 border ${
                  isHovered
                    ? 'border-amber-500/50 shadow-xl shadow-amber-500/10 -translate-y-1.5'
                    : 'border-slate-800/90 shadow-lg shadow-black/20'
                }`}
              >
                {/* Number & Icon Header */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center shadow-inner">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="font-mono text-2xl font-bold text-slate-700 select-none">
                      {service.number}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-heading font-bold text-white mb-2.5">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Key Deliverables Bullet Points */}
                  <div className="space-y-2 mb-6 border-t border-slate-800/60 pt-4">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2">
                      Key Deliverables:
                    </span>
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Footer: Turnaround & Action Buttons */}
                <div className="pt-4 border-t border-slate-800/60 mt-auto space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      {service.turnaroundTime}
                    </span>
                    <span className="text-amber-400/90 font-mono text-[11px]">
                      {service.technologies[0]} &bull; {service.technologies[1]}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => onSelectService(service)}
                      className="w-full py-2 px-3 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors flex items-center justify-center gap-1"
                    >
                      <span>Scope Details</span>
                      <ArrowRight className="w-3 h-3 text-amber-400" />
                    </button>

                    <a
                      href={`https://wa.me/8801788911722?text=Hi%20Sayrul,%20I%20am%20interested%20in%20your%20service:%20${encodeURIComponent(service.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-3 rounded-lg text-xs font-semibold bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-colors flex items-center justify-center gap-1"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>Inquire</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-heading font-bold text-white">
              Have a custom web development or agency requirement?
            </h4>
            <p className="text-sm text-slate-400">
              We handle complex CMS migrations, custom PHP architectures, and API integrations with tailored quotes.
            </p>
          </div>
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md shadow-amber-500/20 transition-all hover:scale-105"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Discuss Custom Project</span>
          </a>
        </div>

      </div>
    </section>
  );
};
