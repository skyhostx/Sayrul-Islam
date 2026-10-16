import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { PluginsPage } from './pages/PluginsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ServiceModal, ProjectModal, BlogModal } from './components/Modals';
import { ServiceItem, ProjectItem, BlogPost, PageRoute } from './types';
import { PortraitProvider } from './context/PortraitContext';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>(() => {
    try {
      const hash = window.location.hash.replace('#/', '').replace('#', '').toLowerCase();
      if (['home', 'services', 'portfolio', 'plugins', 'about', 'contact'].includes(hash)) {
        return hash as PageRoute;
      }
    } catch {
      // ignore
    }
    return 'home';
  });

  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [formInitialMessage, setFormInitialMessage] = useState<string>('');

  // Synchronize route with browser hash for bookmarks and back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '').toLowerCase();
      if (['home', 'services', 'portfolio', 'plugins', 'about', 'contact'].includes(hash)) {
        setCurrentPage(hash as PageRoute);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '#/' : `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleApplyEstimate = (summaryText: string) => {
    setFormInitialMessage(summaryText);
    handleNavigate('contact');
  };

  const handleRequestPlugin = (pluginName: string) => {
    setFormInitialMessage(`Hi Sayrul, I am interested in custom development / setup for your plugin: ${pluginName}.`);
    handleNavigate('contact');
  };

  return (
    <PortraitProvider>
      <div className="min-h-screen bg-[#090D16] text-[#F1F5F9] relative selection:bg-amber-500/20 selection:text-amber-300 flex flex-col justify-between">
        
        {/* Universal Sticky Header Navigation */}
        <Navbar
          activePage={currentPage}
          onNavigate={handleNavigate}
        />

        {/* Dynamic Route Pages */}
        <main id="main-content" className="flex-1">
          {currentPage === 'home' && (
            <HomePage
              onSelectService={(service) => setSelectedService(service)}
              onSelectProject={(project) => setSelectedProject(project)}
              onSelectArticle={(article) => setSelectedArticle(article)}
              onRequestPlugin={handleRequestPlugin}
              onApplyEstimate={handleApplyEstimate}
              onNavigate={handleNavigate}
              formInitialMessage={formInitialMessage}
            />
          )}

          {currentPage === 'services' && (
            <ServicesPage
              onSelectService={(service) => setSelectedService(service)}
              onApplyEstimate={handleApplyEstimate}
              onNavigate={handleNavigate}
            />
          )}

          {currentPage === 'portfolio' && (
            <PortfolioPage
              onSelectProject={(project) => setSelectedProject(project)}
              onNavigate={handleNavigate}
            />
          )}

          {currentPage === 'plugins' && (
            <PluginsPage
              onRequestPlugin={handleRequestPlugin}
              onNavigate={handleNavigate}
            />
          )}

          {currentPage === 'about' && (
            <AboutPage
              onNavigate={handleNavigate}
            />
          )}

          {currentPage === 'contact' && (
            <ContactPage
              initialMessage={formInitialMessage}
              onNavigate={handleNavigate}
            />
          )}
        </main>

        {/* Global Footer */}
        <Footer onNavigate={handleNavigate} />

        {/* Deep Dive Interactive Modals */}
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

      </div>
    </PortraitProvider>
  );
}
