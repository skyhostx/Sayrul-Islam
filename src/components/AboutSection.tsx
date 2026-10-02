import React from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  Compass, 
  Clock, 
  HeartHandshake, 
  Target, 
  Award,
  Globe2,
  Calendar,
  MessageSquare
} from 'lucide-react';
import { PERSONAL_INFO, TIMELINE } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 bg-[#0D1322] relative border-t border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-wider">
            <span>About Sayrul Islam</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            We Design with Purpose &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Build with Precision</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Crafting minimal, ultra-fast, and conversion-engineered digital solutions for forward-thinking brands worldwide.
          </p>
        </div>

        {/* 2-Column Story & Agency Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Portrait & Agency Pillars */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl">
              <img
                src={PERSONAL_INFO.aboutImage || PERSONAL_INFO.portraitImage}
                alt="Sayrul Islam - Full Stack Web Developer"
                className="w-full aspect-[4/5] object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="p-6 bg-slate-950/90 border-t border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-heading font-bold text-white text-lg">Sayrul Islam</span>
                  <span className="text-xs font-mono text-amber-400">Founder & Lead Engineer</span>
                </div>
                <p className="text-xs text-slate-400">
                  Dhaka, Bangladesh &bull; Serving Clients in USA, UK, Canada, Australia, UAE & Globally
                </p>
                <div className="pt-2 flex items-center justify-between text-xs border-t border-slate-800/80">
                  <span className="text-slate-400 font-mono">WhatsApp: {PERSONAL_INFO.whatsappDisplay}</span>
                  <span className="text-emerald-400 font-medium">Available for Hire</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission & Core Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white leading-snug">
                More Than 06+ Years of Crafting High-Performance Web Architectures
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Hello! I am <strong className="text-white">Sayrul Islam</strong>. Over the last 6+ years, I have helped startups, eCommerce businesses, and independent brands build digital experiences that look stunning and convert visitors into long-term customers.
              </p>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                My engineering capabilities are not limited to HTML/CMS, WP, and PHP web applications. I architect complete full-stack web solutions using modern React, TypeScript, Next.js, and hardened backend APIs, ensuring sub-second load times and rigorous Core Web Vitals optimization.
              </p>
            </div>

            {/* 4 Pillars Bento */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400">
                  <Target className="w-4 h-4" />
                  <span className="text-sm font-bold font-heading text-white">Conversion-Obsessed</span>
                </div>
                <p className="text-xs text-slate-400">
                  Every button, color contrast, and layout flow is calibrated to maximize user engagement and business ROI.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-400">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-bold font-heading text-white">Sub-Second Speed</span>
                </div>
                <p className="text-xs text-slate-400">
                  Zero code bloat, clean semantic structure, and optimized asset delivery for 95+ PageSpeed scores.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1.5">
                <div className="flex items-center gap-2 text-sky-400">
                  <HeartHandshake className="w-4 h-4" />
                  <span className="text-sm font-bold font-heading text-white">Direct Founder Access</span>
                </div>
                <p className="text-xs text-slate-400">
                  No middle-managers or lost translations. You communicate directly with the lead developer via WhatsApp & Email.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1.5">
                <div className="flex items-center gap-2 text-yellow-400">
                  <Globe2 className="w-4 h-4" />
                  <span className="text-sm font-bold font-heading text-white">Global Reliability</span>
                </div>
                <p className="text-xs text-slate-400">
                  Proven track record supporting brands across North America, Europe, Australia, and the Middle East.
                </p>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat with Sayrul on WhatsApp</span>
              </a>
              <a
                href="#contact"
                className="text-xs sm:text-sm font-semibold text-slate-300 hover:text-white underline underline-offset-4"
              >
                Send Email Inquiry &rarr;
              </a>
            </div>
          </div>

        </div>

        {/* Experience Milestones Timeline */}
        <div className="pt-8 border-t border-slate-800/80">
          <div className="mb-8">
            <h3 className="text-xl font-heading font-bold text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-amber-400" />
              Career Journey &amp; Milestones
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              A continuous 6+ year trajectory of engineering high-impact web products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TIMELINE.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/90 relative space-y-3"
              >
                <div className="inline-block px-3 py-1 rounded-md text-xs font-mono font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  {item.year}
                </div>
                <h4 className="text-base font-heading font-bold text-white">
                  {item.title}
                </h4>
                <div className="text-xs font-medium text-slate-400">
                  {item.company}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1 pt-2">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
