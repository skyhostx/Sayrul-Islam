import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ServicesSection } from '../components/ServicesSection';
import { EstimatorSection } from '../components/EstimatorSection';
import { ServiceItem, PageRoute } from '../types';
import { FAQS, PERSONAL_INFO } from '../data/portfolioData';
import { ShieldCheck, Zap, RefreshCw, Layers, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';

interface ServicesPageProps {
  onSelectService: (service: ServiceItem) => void;
  onApplyEstimate: (summary: string) => void;
  onNavigate: (page: PageRoute) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onSelectService,
  onApplyEstimate,
  onNavigate,
}) => {
  const serviceFaqs = FAQS.filter(f => f.category === 'Process' || f.category === 'Pricing' || f.category === 'Technical');

  const processSteps = [
    {
      num: '01',
      title: 'Strategic Discovery',
      desc: 'We analyze your business goals, target audience, technical constraints, and brand vision to outline a clear project blueprint.',
    },
    {
      num: '02',
      title: 'Architecture & UI/UX',
      desc: 'High-converting user flows, wireframes, and modern visual designs built for conversion, accessibility, and speed.',
    },
    {
      num: '03',
      title: 'Clean Engineering',
      desc: 'Full-stack development utilizing clean modular code, responsive layouts, fast API integrations, and robust database architecture.',
    },
    {
      num: '04',
      title: 'QA & Optimization',
      desc: 'Rigorous cross-browser testing, mobile audit, 95+ Google PageSpeed benchmarks, and SEO optimization prior to launch.',
    },
    {
      num: '05',
      title: 'Launch & 30-Day QA',
      desc: 'Smooth deployment to production, domain DNS setup, and a full 30-day post-launch warranty covering any questions or fixes.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#090D16]">
      {/* Page Header */}
      <PageHeader
        badge="Sayrul Islam • Agency Services"
        title="Specialized Web Engineering &"
        highlightedWord="Digital Services"
        description="From bespoke modern web design and high-converting eCommerce stores to custom WordPress plugins and scalable web applications, explore our end-to-end engineering solutions."
        currentPage="services"
        onNavigate={onNavigate}
      />

      {/* Main Services Grid */}
      <div className="py-6">
        <ServicesSection onSelectService={onSelectService} />
      </div>

      {/* Production Delivery Process */}
      <section className="py-16 md:py-24 bg-[#060911] border-y border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              Reliable Delivery Framework
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white tracking-tight">
              How We Take Projects From Concept To Launch
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              A transparent, agile workflow honed over 180+ completed projects worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => (
              <div 
                key={step.num}
                className="relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono font-bold flex items-center justify-center text-sm mb-4 group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <h3 className="text-base font-heading font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Scope & Cost Calculator */}
      <div className="py-6">
        <EstimatorSection onApplyEstimateToForm={(summary) => {
          onApplyEstimate(summary);
          onNavigate('contact');
        }} />
      </div>

      {/* Services FAQ Accordion */}
      <section className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
            Clear Answers
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Everything you need to know about partnering with Sayrul Islam.
          </p>
        </div>

        <div className="space-y-4">
          {serviceFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2"
            >
              <h3 className="text-sm sm:text-base font-semibold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{faq.question}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-6">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/5 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            Have a Specific Project or Timeline in Mind?
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Let's discuss your requirements on WhatsApp or fill out a quick project brief. We provide transparent estimates and rapid project start dates.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition-all hover:scale-105"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss on WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 text-white border border-slate-700 hover:border-amber-400 font-semibold text-sm transition-all"
            >
              <span>Submit Project Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
