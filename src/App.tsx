import React, { useState } from 'react';
import { MessageSquare, Phone, ArrowUpRight } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { PluginsSection } from './components/PluginsSection';
import { SkillsSection } from './components/SkillsSection';
import { AboutSection } from './components/AboutSection';
import { EstimatorSection } from './components/EstimatorSection';
import { BlogSection } from './components/BlogSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceModal, ProjectModal, BlogModal } from './components/Modals';
import { ServiceItem, ProjectItem, BlogPost } from './types';
import { PERSONAL_INFO } from './data/portfolioData';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [formInitialMessage, setFormInitialMessage] = useState<string>('');

  const handleApplyEstimate = (summaryText: string) => {
    setFormInitialMessage(summaryText);
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-[#F1F5F9] relative selection:bg-amber-500/20 selection:text-amber-300">
      
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Services (6 Core Services) */}
        <ServicesSection onSelectService={(service) => setSelectedService(service)} />

        {/* 3. Portfolio & Projects */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* 4. WordPress Plugins & Web Extensions */}
        <PluginsSection onRequestPlugin={(name) => setFormInitialMessage(`Hi Sayrul, I am interested in your plugin: ${name}.`)} />

        {/* 5. Technical Stack & Skills */}
        <SkillsSection />

        {/* 5. About Sayrul Islam & Agency Milestones */}
        <AboutSection />

        {/* 6. Interactive Scope & Cost Calculator */}
        <EstimatorSection onApplyEstimateToForm={handleApplyEstimate} />

        {/* 7. Development Insights & Tutorials Blog */}
        <BlogSection onSelectArticle={(article) => setSelectedArticle(article)} />

        {/* 8. Client Testimonials & Proven Metrics */}
        <TestimonialsSection />

        {/* 9. Contact & WhatsApp Connect */}
        <ContactSection initialMessage={formInitialMessage} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <BlogModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      {/* Persistent Floating WhatsApp Speed Dial */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <a
          id="floating-whatsapp-widget"
          href={PERSONAL_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-2xl shadow-emerald-500/40 border border-emerald-400/50 transition-all duration-300 hover:scale-105"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 fill-slate-950" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping opacity-75" />
          </div>
          <span className="hidden sm:inline font-sans">Chat on WhatsApp</span>
          <span className="sm:hidden font-sans">WhatsApp</span>
        </a>
      </div>

    </div>
  );
}
