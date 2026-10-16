import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const PAGE_METADATA = {
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

if (fs.existsSync(distDir)) {
  const indexHtmlPath = path.join(distDir, 'index.html');
  if (fs.existsSync(indexHtmlPath)) {
    const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

    for (const [route, meta] of Object.entries(PAGE_METADATA)) {
      const routeDir = path.join(distDir, route);
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }

      // Replace Title
      let pageHtml = baseHtml.replace(
        /<title>.*?<\/title>/i,
        `<title>${meta.title}</title>`
      );

      // Replace Meta Description
      pageHtml = pageHtml.replace(
        /<meta name="description" content=".*?" \/>/i,
        `<meta name="description" content="${meta.description}" />`
      );

      // Replace Canonical
      pageHtml = pageHtml.replace(
        /<link rel="canonical" href=".*?" \/>/i,
        `<link rel="canonical" href="${meta.canonical}" />`
      );

      // Replace OG URL & Title
      pageHtml = pageHtml.replace(
        /<meta property="og:url" content=".*?" \/>/i,
        `<meta property="og:url" content="${meta.canonical}" />`
      );
      pageHtml = pageHtml.replace(
        /<meta property="og:title" content=".*?" \/>/i,
        `<meta property="og:title" content="${meta.title}" />`
      );
      pageHtml = pageHtml.replace(
        /<meta property="og:description" content=".*?" \/>/i,
        `<meta property="og:description" content="${meta.description}" />`
      );

      // Replace Twitter Title & Description
      pageHtml = pageHtml.replace(
        /<meta name="twitter:url" content=".*?" \/>/i,
        `<meta name="twitter:url" content="${meta.canonical}" />`
      );
      pageHtml = pageHtml.replace(
        /<meta name="twitter:title" content=".*?" \/>/i,
        `<meta name="twitter:title" content="${meta.title}" />`
      );
      pageHtml = pageHtml.replace(
        /<meta name="twitter:description" content=".*?" \/>/i,
        `<meta name="twitter:description" content="${meta.description}" />`
      );

      fs.writeFileSync(path.join(routeDir, 'index.html'), pageHtml);
      console.log(`Generated customized static SEO page: /${route}/index.html`);
    }

    // Ensure 404.html is present in dist
    const public404Path = path.resolve(__dirname, '../public/404.html');
    if (fs.existsSync(public404Path)) {
      fs.copyFileSync(public404Path, path.join(distDir, '404.html'));
      console.log('Copied public/404.html to dist/404.html');
    }
  }
}
