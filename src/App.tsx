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
  const getPageFromLocation = (): PageRoute => {
    try {
      // 1. Check pathname first (clean URL: /services, /portfolio, etc.)
      const path = window.location.pathname.replace(/^\/+/, '').split('/')[0].toLowerCase();
      if (['services', 'portfolio', 'plugins', 'about', 'contact'].includes(path)) {
        return path as PageRoute;
      }
      // 2. Check hash fallback (e.g. #/services or #services)
      const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
      if (['services', 'portfolio', 'plugins', 'about', 'contact'].includes(hash)) {
        return hash as PageRoute;
      }
    } catch {
      // ignore
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageRoute>(getPageFromLocation);

  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [formInitialMessage, setFormInitialMessage] = useState<string>('');

  // Synchronize route with browser history for clean URLs, bookmarks, and back/forward navigation
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPage(getPageFromLocation());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  // Dynamic SEO metadata synchronization on route change
  useEffect(() => {
    const PAGE_SEO: Record<PageRoute, { title: string; description: string; canonical: string }> = {
      home: {
        title: 'Sayrul Islam | Full Stack Web Developer & Digital Agency',
        description: 'Experienced Full Stack Web Developer with 06+ years crafting minimal, fast, and conversion-focused websites, eCommerce, and scalable web applications.',
        canonical: 'https://sayrulislam.com/',
      },
      services: {
        title: 'Web Design & Development Services | Sayrul Islam Agency',
        description: 'Explore specialized web design, custom WordPress plugins, WooCommerce stores, and full stack engineering services by Sayrul Islam. Transparent pricing & 30-day warranty.',
        canonical: 'https://sayrulislam.com/services',
      },
      portfolio: {
        title: 'Portfolio & Client Case Studies | Sayrul Islam',
        description: 'Discover selected client works, case studies, and live projects engineered by Sayrul Islam with verified metrics, performance audits, and modern UI/UX.',
        canonical: 'https://sayrulislam.com/portfolio',
      },
      plugins: {
        title: 'Custom WordPress Plugins & Extensions | Sayrul Islam',
        description: 'Specialized WordPress plugins engineered with zero bloat, PHP 8+ PSR standards, nonce authentication, and modern Gutenberg React interfaces.',
        canonical: 'https://sayrulislam.com/plugins',
      },
      about: {
        title: 'About Sayrul Islam | Founder & Full Stack Engineer',
        description: 'Meet Sayrul Islam, Full Stack Web Developer and Digital Agency Founder with 06+ years of experience delivering 180+ web projects for global clients.',
        canonical: 'https://sayrulislam.com/about',
      },
      contact: {
        title: 'Contact & Start a Project | Sayrul Islam Agency',
        description: 'Get in touch with Sayrul Islam for web design, eCommerce, and full-stack development contracts. Direct WhatsApp support with rapid responses.',
        canonical: 'https://sayrulislam.com/contact',
      },
    };

    const currentSeo = PAGE_SEO[currentPage];
    if (currentSeo) {
      document.title = currentSeo.title;
      const descMeta = document.querySelector('meta[name="description"]');
      if (descMeta) descMeta.setAttribute('content', currentSeo.description);
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) canonical.setAttribute('href', currentSeo.canonical);
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute('content', currentSeo.canonical);
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', currentSeo.title);
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', currentSeo.description);
    }
  }, [currentPage]);

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    const targetPath = page === 'home' ? '/' : `/${page}`;
    try {
      if (window.location.pathname !== targetPath) {
        window.history.pushState({ page }, '', targetPath);
      }
    } catch {
      window.location.hash = page === 'home' ? '' : `#/${page}`;
    }
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
