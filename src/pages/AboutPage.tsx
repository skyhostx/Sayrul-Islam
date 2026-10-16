import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillsSection';
import { PageRoute } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ShieldCheck, HeartHandshake, Award, Target, MessageSquare, ArrowRight, Zap, Coffee } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const values = [
    {
      icon: <Target className="w-5 h-5 text-amber-400" />,
      title: 'Business-First Architecture',
      desc: 'We do not just write code; we design architectures that drive customer engagement, minimize bounce rates, and maximize conversions.',
    },
    {
      icon: <Zap className="w-5 h-5 text-sky-400" />,
      title: 'Performance Without Compromise',
      desc: 'Every project is audited against 95+ Google PageSpeed criteria, Core Web Vitals, and responsive cross-device fluid typography.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: 'Reliability & 30-Day Guarantee',
      desc: 'Every client receives a 30-day post-launch warranty covering any questions, bug resolutions, or adjustments without friction.',
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-purple-400" />,
      title: 'Long-Term Partnership',
      desc: 'Over 99.4% satisfied clients across 16+ countries rely on us for ongoing evolution, scaling, and feature expansions.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#090D16]">
      {/* Page Header */}
      <PageHeader
        badge="Founder Story & Core Values"
        title="Meet Sayrul Islam & Our"
        highlightedWord="Digital Agency Vision"
        description="Full Stack Web Developer & Digital Agency Founder with 06+ years crafting high-impact digital experiences for businesses, startups, and international creators."
        currentPage="about"
        onNavigate={onNavigate}
      />

      {/* Main About Section */}
      <div className="py-6">
        <AboutSection />
      </div>

      {/* Core Engineering Values */}
      <section className="py-16 md:py-24 bg-[#060911] border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              Our Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white tracking-tight">
              Values That Define Every Project We Build
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Clean engineering, transparent communication, and genuine passion for digital excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 transition-all space-y-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {v.icon}
                </div>
                <h3 className="text-base font-heading font-bold text-white">
                  {v.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Technical Proficiencies */}
      <div className="py-6">
        <SkillsSection />
      </div>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/5 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            Let's Collaborate on Your Next Venture
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            I am currently open for select client contracts, long-term technical partnerships, and custom web engineering projects.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition-all hover:scale-105"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 text-white border border-slate-700 hover:border-amber-400 font-semibold text-sm transition-all"
            >
              <span>Send Project Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
