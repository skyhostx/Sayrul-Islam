import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ProjectsSection } from '../components/ProjectsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ProjectItem, PageRoute } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Award, CheckCircle, TrendingUp, Globe2, MessageSquare, ArrowRight } from 'lucide-react';

interface PortfolioPageProps {
  onSelectProject: (project: ProjectItem) => void;
  onNavigate: (page: PageRoute) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onSelectProject,
  onNavigate,
}) => {
  const stats = [
    { label: 'Completed Projects', value: PERSONAL_INFO.completedProjects, sub: 'Delivered On Time' },
    { label: 'Client Satisfaction', value: PERSONAL_INFO.satisfiedClients, sub: '5-Star Rated Experience' },
    { label: 'Global Clients', value: PERSONAL_INFO.countriesServed, sub: 'Worldwide Partnerships' },
    { label: 'Years Experience', value: PERSONAL_INFO.experienceYears, sub: 'Continuous Engineering' },
  ];

  return (
    <div className="min-h-screen bg-[#090D16]">
      {/* Page Header */}
      <PageHeader
        badge="Proven Results • Case Studies"
        title="Explore Selected Client Works &"
        highlightedWord="Portfolio Case Studies"
        description="Browse through a curated selection of full-stack web applications, custom WooCommerce systems, high-converting digital agency platforms, and modern UI/UX experiences built by Sayrul Islam."
        currentPage="portfolio"
        onNavigate={onNavigate}
      />

      {/* Stats Counter Bar */}
      <section className="py-10 bg-[#060911] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                  {s.value}
                </div>
                <div className="text-xs font-semibold text-slate-300 mt-1">{s.label}</div>
                <div className="text-[11px] text-slate-500 font-mono mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid with Interactive Category Filtering */}
      <div className="py-6">
        <ProjectsSection onSelectProject={onSelectProject} />
      </div>

      {/* Client Testimonials Section */}
      <div className="py-6 border-t border-slate-800">
        <TestimonialsSection />
      </div>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/5 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            Ready to Build Your Next High-Impact Digital Experience?
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Whether you need a custom web application, an eCommerce store overhaul, or a sleek corporate landing page, we turn your requirements into reality with speed and precision.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition-all hover:scale-105"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Direct WhatsApp Discussion</span>
            </a>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 text-white border border-slate-700 hover:border-amber-400 font-semibold text-sm transition-all"
            >
              <span>Get Project Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
