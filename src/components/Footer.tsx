import React from 'react';
import { 
  ArrowUp, 
  MessageSquare, 
  Mail, 
  Phone, 
  Globe, 
  Sparkles, 
  ShieldCheck,
  Code2
} from 'lucide-react';
import { PERSONAL_INFO, SERVICES } from '../data/portfolioData';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#060911] border-t border-slate-800 text-slate-400 text-sm">
      
      {/* Top CTA Bar */}
      <div className="border-b border-slate-800/80 bg-gradient-to-r from-slate-900/60 via-slate-900 to-slate-900/60 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
              Ready to create your next high-impact website?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Direct founder collaboration &bull; Sub-second speed &bull; 06+ years full-stack mastery
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950" />
              <span>WhatsApp (+8801788911722)</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md"
            >
              <span>Get Free Proposal</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="py-1">
              <Logo size="lg" variant="light" />
              <p className="text-xs text-amber-400 font-mono mt-1">
                Full Stack Web Developer &amp; Agency
              </p>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {PERSONAL_INFO.agencyDescription}
            </p>

            <div className="pt-2 space-y-1.5 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-sky-400" />
                <a href="https://sayrulislam.com" className="text-slate-300 hover:text-amber-400">sayrulislam.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Whats-app: {PERSONAL_INFO.whatsappDisplay}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-300 hover:text-amber-400">{PERSONAL_INFO.email}</a>
              </div>
            </div>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-amber-400 transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-amber-400 transition-colors">Home &amp; Overview</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Core Services</a></li>
              <li><a href="#portfolio" className="hover:text-amber-400 transition-colors">Selected Portfolio</a></li>
              <li><a href="#plugins" className="hover:text-amber-400 transition-colors">Custom Plugins</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About Sayrul Islam</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact &amp; Inquiry</a></li>
            </ul>
          </div>

          {/* Col 5: Guarantees & Status */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Work Guarantee
            </h4>
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Quality Assurance</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                30-day post-launch warranty on bug fixes, speed guarantees, and responsive QA.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="pt-12 mt-12 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} <strong className="text-slate-400">Sayrul Islam</strong>. All rights reserved. &bull; <a href="https://sayrulislam.com" className="text-slate-400 hover:text-amber-400">sayrulislam.com</a>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] font-mono">
              Whats-app: <a href={PERSONAL_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-bold">{PERSONAL_INFO.whatsappNumber}</a>
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-amber-500/50 transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
