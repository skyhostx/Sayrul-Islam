import React from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Calculator, 
  Code2, 
  Zap, 
  Globe, 
  Award,
  Download
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenEstimator?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimator }) => {
  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 pb-20 md:pb-28 overflow-hidden bg-gradient-to-b from-[#090D16] via-[#0D1322] to-[#090D16]"
    >
      {/* Background Decorative Grid & Ambient Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Full Stack Web Developer &bull; 06+ Years Experience</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.1]">
              We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">High-Impact</span> Digital Experiences.
            </h1>

            {/* Agency Positioning Statement */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <strong className="text-white font-semibold">Sayrul Islam</strong> is a modern digital agency crafting minimal, fast, and conversion-focused websites for brands, startups, and creators. We design with purpose and build with precision.
            </p>

            {/* Core Competencies Quick Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              {[
                'Full-Stack PHP / WP',
                'Modern React & Next.js',
                'High-Conversion UI/UX',
                'E-Commerce & WooCommerce',
                'Core Web Vitals 95+'
              ].map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono rounded-md bg-slate-900/90 text-slate-300 border border-slate-800 flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  {skill}
                </span>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              {/* WhatsApp Direct */}
              <a
                id="hero-whatsapp-cta"
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950" />
                <span>WhatsApp: {PERSONAL_INFO.whatsappDisplay}</span>
              </a>

              {/* View Projects */}
              <a
                id="hero-projects-cta"
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>View Portfolio Projects</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </a>

              {/* Cost Estimator */}
              <a
                id="hero-estimator-cta"
                href="#estimator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-amber-300 border border-amber-500/30 text-xs sm:text-sm font-semibold transition-all duration-200"
              >
                <Calculator className="w-4 h-4" />
                <span>Estimate Project Cost</span>
              </a>
            </div>

            {/* Trust Badges / Guarantees */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Direct 1-on-1 Developer Access</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>100% Mobile & Speed Optimized</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-sky-400" />
                <span>sayrulislam.com &bull; Global Clients</span>
              </div>
            </div>

          </div>

          {/* Right Column: Sayrul Islam Portrait & Floating Stat Cards */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              
              {/* Outer Decorative Frame with Subtle Gold Border */}
              <div className="relative rounded-2xl overflow-hidden p-1.5 bg-gradient-to-b from-amber-500/40 via-slate-800 to-slate-900 shadow-2xl shadow-black/60">
                <div className="relative rounded-xl overflow-hidden bg-slate-950 aspect-[3/4]">
                  
                  {/* Portrait of Sayrul Islam */}
                  <img
                    id="sayrul-hero-portrait"
                    src={PERSONAL_INFO.portraitImage}
                    alt="Sayrul Islam - Full Stack Web Developer & Digital Agency Founder"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient Overlay for bottom caption */}
                  <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent flex flex-col justify-end p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-lg font-heading font-bold text-white tracking-tight">
                          Sayrul Islam
                        </h2>
                        <p className="text-xs text-amber-400 font-mono">
                          Full Stack Web Developer
                        </p>
                      </div>
                      <div className="px-2.5 py-1 rounded-md bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold font-mono">
                        06+ Yrs Exp
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating Stat Card 1: Completed Projects (Top Right) */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-[#0F172A]/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-700/80 shadow-xl flex items-center gap-3 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg font-heading font-bold text-white leading-none">
                    {PERSONAL_INFO.completedProjects}
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                    Projects Delivered
                  </div>
                </div>
              </div>

              {/* Floating Stat Card 2: Client Satisfaction (Bottom Left) */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-[#0F172A]/95 backdrop-blur-md p-3.5 rounded-xl border border-emerald-500/30 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg font-heading font-bold text-white leading-none flex items-center gap-1">
                    {PERSONAL_INFO.satisfiedClients}
                    <span className="text-xs text-emerald-400 font-normal">Rating</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                    Across 16+ Countries
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Global Numbers Bar */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6 sm:p-8">
          <div className="text-center sm:text-left border-r border-slate-800/60 last:border-r-0 pr-4">
            <div className="text-3xl sm:text-4xl font-heading font-bold text-amber-400">
              06+
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">
              Years Active Experience
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              PHP, CMS, React & Full-Stack
            </div>
          </div>

          <div className="text-center sm:text-left border-r border-slate-800/60 last:border-r-0 pr-4">
            <div className="text-3xl sm:text-4xl font-heading font-bold text-white">
              180+
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">
              Completed Web Projects
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              Stores, Web Apps & Portals
            </div>
          </div>

          <div className="text-center sm:text-left border-r border-slate-800/60 last:border-r-0 pr-4">
            <div className="text-3xl sm:text-4xl font-heading font-bold text-emerald-400">
              99.4%
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">
              Client Satisfaction
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              Verified 5-Star Reviews
            </div>
          </div>

          <div className="text-center sm:text-left">
            <div className="text-3xl sm:text-4xl font-heading font-bold text-amber-300">
              &lt; 1.0s
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">
              Average Load Speed
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              Google PageSpeed 95+ Score
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
