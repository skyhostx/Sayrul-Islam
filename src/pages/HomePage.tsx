import React from 'react';
import { Hero } from '../components/Hero';
import { ServicesSection } from '../components/ServicesSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { PluginsSection } from '../components/PluginsSection';
import { SkillsSection } from '../components/SkillsSection';
import { AboutSection } from '../components/AboutSection';
import { EstimatorSection } from '../components/EstimatorSection';
import { BlogSection } from '../components/BlogSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ContactSection } from '../components/ContactSection';
import { ServiceItem, ProjectItem, BlogPost, PageRoute } from '../types';
import { ArrowRight, Layers, Sparkles } from 'lucide-react';

interface HomePageProps {
  onSelectService: (service: ServiceItem) => void;
  onSelectProject: (project: ProjectItem) => void;
  onSelectArticle: (article: BlogPost) => void;
  onRequestPlugin: (name: string) => void;
  onApplyEstimate: (summary: string) => void;
  onNavigate: (page: PageRoute) => void;
  formInitialMessage: string;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectService,
  onSelectProject,
  onSelectArticle,
  onRequestPlugin,
  onApplyEstimate,
  onNavigate,
  formInitialMessage,
}) => {
  return (
    <div>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Services Section with Direct Single-Page Link */}
      <div className="relative">
        <ServicesSection onSelectService={onSelectService} />
        <div className="max-w-7xl mx-auto px-4 text-center -mt-8 pb-16">
          <button
            type="button"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              onNavigate('services');
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 hover:text-white hover:border-amber-400 text-sm font-semibold transition-all shadow-lg hover:scale-105"
          >
            <span>Explore In-Depth Services &amp; Pricing Details</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 3. Portfolio Projects Section with Direct Single-Page Link */}
      <div className="relative">
        <ProjectsSection onSelectProject={onSelectProject} />
        <div className="max-w-7xl mx-auto px-4 text-center -mt-8 pb-16">
          <button
            type="button"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              onNavigate('portfolio');
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 hover:text-white hover:border-amber-400 text-sm font-semibold transition-all shadow-lg hover:scale-105"
          >
            <span>View All Selected Portfolio Works &amp; Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 4. WordPress Plugins Section with Direct Single-Page Link */}
      <div className="relative">
        <PluginsSection onRequestPlugin={onRequestPlugin} />
        <div className="max-w-7xl mx-auto px-4 text-center -mt-8 pb-16">
          <button
            type="button"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              onNavigate('plugins');
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 hover:text-white hover:border-amber-400 text-sm font-semibold transition-all shadow-lg hover:scale-105"
          >
            <span>Browse Full WordPress Plugin Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 5. Technical Stack & Skills */}
      <SkillsSection />

      {/* 6. About Sayrul Islam Section */}
      <div className="relative">
        <AboutSection />
        <div className="max-w-7xl mx-auto px-4 text-center -mt-8 pb-16">
          <button
            type="button"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              onNavigate('about');
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 hover:text-white hover:border-amber-400 text-sm font-semibold transition-all shadow-lg hover:scale-105"
          >
            <span>Read Sayrul Islam's Full Story &amp; Agency Journey</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 7. Interactive Project Estimator */}
      <EstimatorSection onApplyEstimateToForm={onApplyEstimate} />

      {/* 8. Engineering Insights & Articles */}
      <BlogSection onSelectArticle={onSelectArticle} />

      {/* 9. Client Testimonials */}
      <TestimonialsSection />

      {/* 10. Contact & WhatsApp Connect */}
      <ContactSection initialMessage={formInitialMessage} />
    </div>
  );
};
