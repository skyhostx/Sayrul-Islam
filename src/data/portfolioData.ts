import { ServiceItem, ProjectItem, SkillCategory, BlogPost, TestimonialItem, TimelineMilestone, FAQItem, PluginItem } from '../types';

import portraitImg from '../assets/images/sayrul_islam_portrait_1787109025432.jpg';
import heroPortraitImg from '../assets/images/sayrul_hero_portrait_1790833108022.jpg';
import aboutPortraitImg from '../assets/images/sayrul_about_portrait_1790833120904.jpg';
import ecommerceImg from '../assets/images/ecommerce_project_mockup_1787109040030.jpg';
import saasImg from '../assets/images/saas_webapp_mockup_1787109051940.jpg';
import landingImg from '../assets/images/agency_landing_mockup_1787109062922.jpg';

export const PERSONAL_INFO = {
  name: 'Sayrul Islam',
  role: 'Experienced Full Stack Web Developer & Digital Agency Founder',
  experienceYears: '06+',
  completedProjects: '180+',
  satisfiedClients: '99.4%',
  countriesServed: '16+',
  website: 'sayrulislam.com',
  whatsappNumber: '+8801788911722',
  whatsappDisplay: '+880 1788-911722',
  whatsappUrl: 'https://wa.me/8801788911722?text=Hi%20Sayrul,%20I%20visited%20sayrulislam.com%20and%20would%20like%20to%20discuss%20a%20web%20project.',
  email: 'sayrulislam22@gmail.com',
  agencyEmail: 'sayrulislam22@gmail.com',
  location: 'Dhaka, Bangladesh (Serving Global Clients)',
  availability: 'Available for New Projects & Contracts',
  tagline: 'We Build High-Impact Digital Experiences.',
  agencyDescription: 'Sayrul Islam is a modern digital agency crafting minimal, fast, and conversion-focused websites for brands, startups, and creators. We design with purpose and build with precision.',
  portraitImage: heroPortraitImg || portraitImg,
  aboutImage: aboutPortraitImg || portraitImg,
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-design',
    number: '01',
    title: 'Web Design',
    shortDescription: 'Modern, bespoke website design tailored to capture brand essence and engage your target audience with high aesthetic precision.',
    fullDescription: 'Crafting visually arresting, bespoke digital experiences from the ground up. Every interface is architected around your brand narrative, user journey optimization, and flawless responsive fluidity across all screen sizes.',
    iconName: 'Layout',
    deliverables: [
      'Custom Responsive Layouts (Desktop, Tablet, Mobile)',
      'Brand Identity & Color Palette Architecture',
      'Interactive Micro-Animations & Motion Design',
      'Design System & Component Library',
      'Cross-Browser & Device Compatibility QA'
    ],
    technologies: ['Figma', 'Tailwind CSS', 'HTML5/Modern CSS', 'Motion/Framer', 'Responsive Grid'],
    turnaroundTime: '5 - 10 Business Days',
    idealFor: 'Brands, Agencies, Personal Portfolios, Corporate Websites',
    benefits: ['Distinctive brand recognition', 'Zero cookie-cutter templates', '60fps fluid user interaction']
  },
  {
    id: 'ui-ux-design',
    number: '02',
    title: 'UI/UX Design',
    shortDescription: 'Human-centered user experience and intuitive user interfaces backed by user research and conversion psychology.',
    fullDescription: 'We bridge complex engineering with effortless simplicity. Through user research, wireframing, interactive prototyping, and usability testing, we engineer flows that reduce bounce rates and maximize user retention.',
    iconName: 'Palette',
    deliverables: [
      'User Persona & Journey Mapping',
      'Low-Fidelity & High-Fidelity Wireframes',
      'Interactive Clickable Figma Prototypes',
      'UX Friction & Usability Audits',
      'Design Tokens & Accessibility Compliance (WCAG AA)'
    ],
    technologies: ['Figma', 'FigJam', 'Design Tokens', 'Heuristic Evaluation', 'Prototyping'],
    turnaroundTime: '7 - 14 Business Days',
    idealFor: 'SaaS Platforms, Web Apps, Mobile-First Interfaces, Dashboards',
    benefits: ['Reduced user friction', 'Higher feature adoption', 'Crystal-clear information hierarchy']
  },
  {
    id: 'landing-page',
    number: '03',
    title: 'Landing Page',
    shortDescription: 'High-converting, hyper-focused landing pages engineered for lead generation, product launches, and paid ad campaigns.',
    fullDescription: 'Every pixel and headline is calibrated for action. We combine persuasive copy hierarchy, lightning-fast load speeds (<1s), compelling visual hooks, and seamless CRM/email integration to turn visitors into paying customers.',
    iconName: 'Flame',
    deliverables: [
      'Conversion-Optimized Sales Page Architecture',
      'Sub-Second Load Speed Performance Optimization',
      'A/B Testing Ready Structure & Event Tracking',
      'Lead Capture & CRM / WhatsApp Direct Integration',
      'Social Proof & Testimonial Showcase Modules'
    ],
    technologies: ['Next.js / React', 'Tailwind CSS', 'WordPress / Elementor Pro', 'PHP API', 'Google Analytics 4 / GTM'],
    turnaroundTime: '3 - 7 Business Days',
    idealFor: 'Product Launches, SaaS Free Trials, Paid Google/Meta Ads, Info Products',
    benefits: ['Industry-leading conversion rates', 'Instant mobile responsiveness', 'Flawless ad pixel tracking']
  },
  {
    id: 'ecommerce-development',
    number: '04',
    title: 'Ecommerce Development',
    shortDescription: 'Scalable, secure online stores with frictionless checkout, inventory management, and multi-currency payment gateways.',
    fullDescription: 'From custom WooCommerce architectures to headless commerce platforms, we build robust e-commerce engines that handle peak traffic smoothly, maximize Average Order Value (AOV), and provide seamless backend store management.',
    iconName: 'ShoppingBag',
    deliverables: [
      'Custom WooCommerce / Shopify Store Architecture',
      '1-Click & Multi-Step Frictionless Checkout',
      'Payment Gateway Setup (Stripe, PayPal, bKash, SSLCommerz, Razorpay)',
      'Automated Inventory & Shipping Rate Calculators',
      'Customer Dashboard, Order Tracking & Automated Invoices'
    ],
    technologies: ['PHP', 'WooCommerce', 'WordPress Custom', 'REST API', 'MySQL', 'Stripe / PayPal'],
    turnaroundTime: '10 - 21 Business Days',
    idealFor: 'Direct-to-Consumer (D2C) Brands, Retailers, Digital Product Stores',
    benefits: ['Reduced cart abandonment', 'Zero monthly platform lock-in fees', 'Bank-grade checkout security']
  },
  {
    id: 'seo-service',
    number: '05',
    title: 'SEO Service',
    shortDescription: 'Technical SEO, structured schema data, page speed optimization, and on-page strategies to dominate search rankings.',
    fullDescription: 'A gorgeous website is useless if nobody finds it. We implement end-to-end technical SEO: optimizing Core Web Vitals, generating structured JSON-LD schemas, dynamic XML sitemaps, semantic HTML5, and keyword-targeted metadata.',
    iconName: 'TrendingUp',
    deliverables: [
      'Comprehensive Technical SEO & Crawl Audit',
      'Core Web Vitals 95+ PageSpeed Optimization',
      'Rich Snippet & JSON-LD Structured Data Implementation',
      'On-Page Heading, Alt Tag & Content Optimization',
      'Google Search Console & Bing Webmaster Verification'
    ],
    technologies: ['Google Search Console', 'Schema.org JSON-LD', 'Lighthouse 100', 'Screaming Frog', 'RankMath / Yoast'],
    turnaroundTime: '5 - 12 Business Days',
    idealFor: 'Businesses looking to scale organic search traffic and outrank competitors',
    benefits: ['Consistent organic inbound leads', 'Higher Google search visibility', 'Instant indexation of new pages']
  },
  {
    id: 'web-analysis',
    number: '06',
    title: 'Web Analysis',
    shortDescription: 'In-depth performance, security, UX friction, and conversion rate audits with actionable data-driven roadmaps.',
    fullDescription: 'Identify the hidden bottlenecks eating your revenue. We perform deep analytical diagnostic audits covering page load bottlenecks, user heatmaps, database query inefficiencies, mobile responsiveness glitches, and security vulnerabilities.',
    iconName: 'Activity',
    deliverables: [
      'Full Lighthouse & Core Web Vitals Performance Report',
      'UX Heatmap & User Drop-off Funnel Analysis',
      'Database Query & Server Bottleneck Diagnostic',
      'Security Vulnerability & SSL / Header Audit',
      'Prioritized 30-Day Remediation Roadmap & Action Checklist'
    ],
    technologies: ['Google Analytics 4', 'Hotjar / Clarity', 'GTmetrix', 'Lighthouse CLI', 'Query Monitor'],
    turnaroundTime: '2 - 5 Business Days',
    idealFor: 'Existing websites with high traffic but poor conversion, or slow sluggish stores',
    benefits: ['Pinpoint revenue leaks', 'Concrete ROI recommendations', 'Immediate speed improvements']
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'luxora-fashion',
    title: 'Luxora Prime - High-End Fashion E-Commerce',
    client: 'Luxora Apparel Ltd. (USA / UK)',
    category: 'Ecommerce',
    description: 'Custom full-stack WooCommerce store with headless performance, instant search filtering, and seamless multi-currency checkout.',
    fullCaseStudy: 'The client needed a digital storefront that reflected luxury craftsmanship while maintaining blistering fast page loads. We built a custom lightweight theme with optimized PHP backend, asynchronous product filtering, and single-page checkout.',
    image: ecommerceImg,
    techStack: ['WordPress', 'WooCommerce', 'PHP 8.2', 'Tailwind CSS', 'Stripe API', 'MySQL'],
    metrics: [
      { label: 'Page Load Speed', value: '0.82s' },
      { label: 'Conversion Rate', value: '+142%' },
      { label: 'Mobile Sales Share', value: '68%' }
    ],
    liveUrl: 'https://sayrulislam.com/projects/luxora',
    featured: true,
    year: '2025'
  },
  {
    id: 'zenith-analytics',
    title: 'ZenithPulse - SaaS Analytics & Revenue Engine',
    client: 'Zenith Tech Labs (Canada)',
    category: 'Web Apps',
    description: 'Real-time subscription billing, API usage telemetry, and analytics dashboard with dark mode precision and lightning responsive data visualization.',
    fullCaseStudy: 'Engineered a scalable full-stack application connecting live API metrics with interactive charting. Built with modern React, Node/Express, and secure JWT authentication.',
    image: saasImg,
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS', 'PostgreSQL'],
    metrics: [
      { label: 'Live Data Latency', value: '<50ms' },
      { label: 'Active Users', value: '45K+' },
      { label: 'Uptime Score', value: '99.98%' }
    ],
    liveUrl: 'https://sayrulislam.com/projects/zenithpulse',
    featured: true,
    year: '2025'
  },
  {
    id: 'novacrest-agency',
    title: 'NovaCrest Digital - High-Conversion Studio Platform',
    client: 'NovaCrest Agency (Australia)',
    category: 'Landing Page',
    description: 'Ultra-modern bento grid agency landing page with smooth motion transitions, interactive budget calculator, and direct CRM inquiry routing.',
    fullCaseStudy: 'Redesigned their marketing website to position them as an elite design studio. Leveraged 60fps Framer motion animations, custom vector SVG graphics, and instant WhatsApp chat trigger.',
    image: landingImg,
    techStack: ['React', 'Tailwind CSS', 'Motion/Framer', 'PHP Contact Handler', 'Google Analytics 4'],
    metrics: [
      { label: 'Lead Inquiries', value: '+210%' },
      { label: 'Bounce Rate', value: '24.1%' },
      { label: 'Google PageSpeed', value: '99/100' }
    ],
    liveUrl: 'https://sayrulislam.com/projects/novacrest',
    featured: true,
    year: '2024'
  },
  {
    id: 'apex-medic',
    title: 'Apex Health - Medical Appointment & Patient Portal',
    client: 'Apex Health Clinic (UAE)',
    category: 'WordPress / CMS',
    description: 'Custom medical booking system built on customized WordPress backend with doctor calendars, patient records, and WhatsApp SMS confirmations.',
    fullCaseStudy: 'Replaced a slow manual phone scheduling system with an automated digital workflow. Created custom post types, REST endpoints, and role-based staff access.',
    image: saasImg,
    techStack: ['PHP', 'WordPress Custom', 'REST API', 'JavaScript', 'ACF Pro', 'MySQL'],
    metrics: [
      { label: 'Booking Time', value: '-75%' },
      { label: 'Online Bookings', value: '8.4K/mo' },
      { label: 'Client Rating', value: '4.9/5' }
    ],
    liveUrl: 'https://sayrulislam.com/projects/apexhealth',
    featured: false,
    year: '2024'
  },
  {
    id: 'strata-realestate',
    title: 'Strata Estate - Luxury Real Estate Showcase',
    client: 'Strata Properties (UK)',
    category: 'UI/UX Design',
    description: 'Bespoke UI/UX design and interactive property catalog with 3D virtual tour integrations, neighborhood map overlays, and mortgage calculators.',
    fullCaseStudy: 'Delivered end-to-end UX wireframes and high-fidelity prototype in Figma, followed by pixel-perfect frontend engineering.',
    image: landingImg,
    techStack: ['Figma', 'UI/UX Research', 'Tailwind CSS', 'Interactive Maps', 'JavaScript'],
    metrics: [
      { label: 'Time on Page', value: '4m 18s' },
      { label: 'Brochure Downloads', value: '+320%' },
      { label: 'Inquiry Rate', value: '18.4%' }
    ],
    liveUrl: 'https://sayrulislam.com/projects/strata',
    featured: false,
    year: '2024'
  },
  {
    id: 'verve-organic',
    title: 'Verve Botanicals - Sustainable Skincare Store',
    client: 'Verve Natural Care (USA)',
    category: 'Ecommerce',
    description: 'Eco-conscious e-commerce web application featuring custom bundle builder, subscription model, and customer reward loyalty points.',
    fullCaseStudy: 'Created a customized WooCommerce subscription architecture that allowed customers to curate their own monthly routine bundles with real-time discounts.',
    image: ecommerceImg,
    techStack: ['WooCommerce', 'PHP', 'Tailwind CSS', 'Stripe Subscriptions', 'Redis Cache'],
    metrics: [
      { label: 'Repeat Orders', value: '+65%' },
      { label: 'Avg Order Value', value: '$84.50' },
      { label: 'Lighthouse Perf', value: '97/100' }
    ],
    liveUrl: 'https://sayrulislam.com/projects/verve',
    featured: false,
    year: '2023'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Frontend Engineering',
    icon: 'Code',
    description: 'Pixel-perfect, accessible, responsive and high-performance client-side development.',
    skills: [
      { name: 'HTML5 & Semantic Markup', level: 98, years: '6+ yrs', highlight: true },
      { name: 'CSS3 / Tailwind CSS / SASS', level: 96, years: '6+ yrs', highlight: true },
      { name: 'JavaScript (ES6+ / Modern)', level: 94, years: '6+ yrs', highlight: true },
      { name: 'React.js & Next.js', level: 92, years: '4+ yrs', highlight: true },
      { name: 'TypeScript', level: 88, years: '3+ yrs' },
      { name: 'Motion / Framer Animations', level: 90, years: '3+ yrs' },
      { name: 'Responsive Mobile-First Design', level: 99, years: '6+ yrs', highlight: true }
    ]
  },
  {
    category: 'Backend & Server-Side',
    icon: 'Server',
    description: 'Scalable server architectures, custom CMS engines, secure APIs, and database engineering.',
    skills: [
      { name: 'PHP 8.x & OOP Architecture', level: 95, years: '6+ yrs', highlight: true },
      { name: 'WordPress Custom Themes & Plugins', level: 98, years: '6+ yrs', highlight: true },
      { name: 'Node.js & Express.js', level: 86, years: '4+ yrs' },
      { name: 'RESTful API & Webhooks', level: 92, years: '5+ yrs', highlight: true },
      { name: 'MySQL & PostgreSQL Databases', level: 90, years: '5+ yrs' },
      { name: 'Laravel Framework Basics', level: 80, years: '2+ yrs' },
      { name: 'Authentication & Security Best Practices', level: 89, years: '5+ yrs' }
    ]
  },
  {
    category: 'E-Commerce & CMS Platforms',
    icon: 'ShoppingBag',
    description: 'Complete commercial stores with frictionless checkouts, inventory, and payment gateways.',
    skills: [
      { name: 'WooCommerce Custom Development', level: 96, years: '5+ yrs', highlight: true },
      { name: 'Payment Gateways (Stripe, PayPal, etc.)', level: 94, years: '5+ yrs', highlight: true },
      { name: 'Elementor Pro / ACF Pro / Gutenberg', level: 97, years: '6+ yrs', highlight: true },
      { name: 'Shopify Liquid Customization', level: 85, years: '3+ yrs' },
      { name: 'Headless CMS (Strapi / Sanity)', level: 82, years: '2+ yrs' },
      { name: 'Speed Optimization for E-Commerce', level: 95, years: '5+ yrs', highlight: true }
    ]
  },
  {
    category: 'SEO, Performance & Analytics',
    icon: 'Cpu',
    description: 'Dominating search engines, zero-lag page speeds, and actionable analytics pipelines.',
    skills: [
      { name: 'Core Web Vitals Optimization', level: 96, years: '5+ yrs', highlight: true },
      { name: 'Technical SEO & JSON-LD Schemas', level: 92, years: '5+ yrs', highlight: true },
      { name: 'Google PageSpeed 95+ Tuning', level: 95, years: '5+ yrs', highlight: true },
      { name: 'Google Analytics 4 & GTM', level: 88, years: '4+ yrs' },
      { name: 'Server Caching & CDN Configuration', level: 91, years: '5+ yrs' },
      { name: 'Conversion Rate Optimization (CRO)', level: 90, years: '4+ yrs' }
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'core-web-vitals-2026',
    title: 'Achieving 98+ Google PageSpeed & Core Web Vitals on Heavy WordPress Sites',
    slug: 'core-web-vitals-wordpress-guide',
    category: 'Performance & SEO',
    readTime: '6 min read',
    date: 'Aug 12, 2025',
    excerpt: 'A comprehensive technical blueprint on eliminating render-blocking scripts, optimizing LCP image assets, and utilizing server-side caching without breaking dynamic functions.',
    author: {
      name: 'Sayrul Islam',
      role: 'Full Stack Engineer & Performance Specialist',
      avatar: portraitImg
    },
    tags: ['WordPress', 'Core Web Vitals', 'PageSpeed', 'Caching', 'PHP'],
    views: 3420,
    likes: 189,
    content: `
## Why Speed is Your Most Critical Conversion Metric

In modern web development, every 100ms of delay in page load time directly correlates with a 7% reduction in conversion rates. Search engines like Google now place heavy algorithmic weight on **Core Web Vitals**: Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and Interaction to Next Paint (INP).

### 1. Eliminating Critical Render-Blocking Resources
Most WordPress themes enqueue large stylesheets and unminified scripts in the document header. Here is the modern approach to asynchronous script loading:

\`\`\`php
// Optimize asset delivery in WordPress functions.php
function sayrul_defer_non_critical_scripts($tag, $handle, $src) {
    // Array of non-critical handles
    $defer_scripts = array('theme-animations', 'analytics-tracker', 'contact-form-fx');
    
    if (in_array($handle, $defer_scripts)) {
        return '<script src="' . esc_url($src) . '" defer></script>' . "\\n";
    }
    return $tag;
}
add_filter('script_loader_tag', 'sayrul_defer_non_critical_scripts', 10, 3);
\`\`\`

### 2. Modern Image Optimization & LCP Prioritization
Never lazy-load the above-the-fold hero image. Instead, preload it and declare modern \`fetchpriority="high"\`:

\`\`\`html
<!-- Preload High-Priority Hero Banner -->
<link rel="preload" as="image" href="/assets/hero-optimized.webp" fetchpriority="high" />
\`\`\`

### 3. Server-Level Redis Object Caching
By utilizing Redis in-memory key-value caching alongside PHP OPcache, complex WooCommerce database queries drop from 300ms down to sub-15ms, delivering near-instant TTFB (Time to First Byte).
    `
  },
  {
    id: 'frictionless-ecommerce-checkout',
    title: 'Anatomy of a High-Converting E-Commerce Checkout Flow in 2026',
    slug: 'high-converting-ecommerce-checkout',
    category: 'UI/UX & Conversion',
    readTime: '7 min read',
    date: 'Jul 28, 2025',
    excerpt: 'How we reduced cart abandonment by 34% by eliminating account creation barriers, streamlining input forms, and implementing instant localized payment gateways.',
    author: {
      name: 'Sayrul Islam',
      role: 'Full Stack Developer',
      avatar: portraitImg
    },
    tags: ['WooCommerce', 'UI/UX', 'Checkout', 'Conversion Rate', 'Payments'],
    views: 2890,
    likes: 214,
    content: `
## The 68% Cart Abandonment Crisis

Average e-commerce stores lose over two-thirds of interested buyers at the final payment stage. The primary culprits:
- Forced account registration
- Surprise shipping fee reveals
- Excessive form fields
- Lack of local trusted payment buttons (Apple Pay, Google Pay, bKash, Stripe 1-Click)

### The 4 Rules for Maximum Checkout Conversion
1. **Guest Checkout by Default**: Offer 1-click checkout with automated background account generation based on email.
2. **Inline Input Validation**: Validate postal codes, email formats, and credit cards in real-time with helpful visual feedback.
3. **Sticky Order Summary**: Keep the cart total, discount codes, and security badges visible on mobile screens.
4. **Instant WhatsApp / Live Help**: A discreet "Need help ordering?" button solves checkout hesitation in real-time.
    `
  },
  {
    id: 'php-and-react-architecture',
    title: 'Building Modern Hybrid Architectures with PHP Backend & React Frontend',
    slug: 'modern-php-react-architecture',
    category: 'Web Development',
    readTime: '8 min read',
    date: 'Jun 19, 2025',
    excerpt: 'Combining the rock-solid reliability and CMS versatility of PHP/WordPress with the fluid interactivity of modern React components.',
    author: {
      name: 'Sayrul Islam',
      role: 'Lead Architect',
      avatar: portraitImg
    },
    tags: ['PHP', 'React', 'REST API', 'Architecture', 'TypeScript'],
    views: 4120,
    likes: 308,
    content: `
## Why PHP + Modern JavaScript Remains a Powerhouse

While many follow fleeting web framework trends, the combination of a hardened PHP 8.x backend with a snappy React frontend powers some of the most reliable and profitable digital products in the world.

### Clean REST API Controller Example
Here is how we construct secure, token-authenticated REST endpoints in PHP to communicate with React components:

\`\`\`php
<?php
// Endpoint for dynamic project quote calculation
add_action('rest_api_init', function () {
    register_rest_route('sayrul/v1', '/calculate-quote', array(
        'methods' => 'POST',
        'callback' => 'sayrul_handle_quote_calculation',
        'permission_callback' => '__return_true'
    ));
});

function sayrul_handle_quote_calculation($request) {
    $params = $request->get_json_params();
    $service = sanitize_text_field($params['service'] ?? '');
    $pages = intval($params['pages'] ?? 1);
    
    // Transparent pricing calculation engine
    $basePrice = 250;
    if ($service === 'ecommerce') $basePrice = 650;
    $total = $basePrice + ($pages * 45);
    
    return new WP_REST_Response(array(
        'status' => 'success',
        'estimatedTotal' => $total,
        'turnaroundDays' => ceil($pages * 1.5) + 3
    ), 200);
}
\`\`\`
    `
  },
  {
    id: 'technical-seo-checklist',
    title: 'The Ultimate Technical SEO Checklist for Client Websites in 2026',
    slug: 'technical-seo-checklist-2026',
    category: 'Performance & SEO',
    readTime: '5 min read',
    date: 'May 04, 2025',
    excerpt: 'Step-by-step technical checklist to ensure your new website launch achieves instant indexing and ranks in competitive search results.',
    author: {
      name: 'Sayrul Islam',
      role: 'SEO & Web Analyst',
      avatar: portraitImg
    },
    tags: ['SEO', 'Schema.org', 'Robots.txt', 'Search Console', 'Indexation'],
    views: 2150,
    likes: 145,
    content: `
## Technical Foundations Over Keyword Stuffing

Search engine algorithms have evolved. Today, clean semantic HTML5, valid JSON-LD structured data, proper canonicalization, and zero 404 crawl loops are the true drivers of organic visibility.

### 5 Critical Must-Have Elements:
1. **Schema.org Structured Data**: Add Organization, WebSite, and LocalBusiness JSON-LD scripts.
2. **Canonical Links**: Prevent duplicate content penalties on URL query parameters.
3. **Clean XML Sitemaps**: Auto-generating and submitted directly to Google Search Console.
4. **Open Graph & Twitter Cards**: Ensuring rich previews when links are shared across social channels.
5. **Mobile-First Viewport Scaling**: Zero horizontal scroll or overflowing touch targets.
    `
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'David Reynolds',
    role: 'Founder & CEO',
    company: 'Apex Digital Brands',
    country: 'United States',
    countryFlag: '🇺🇸',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    content: 'Sayrul Islam transformed our outdated online store into a modern powerhouse. Our page speed increased from 4.2s to under 0.9s, and our sales conversion jumped by over 140% within the first month. Incredible communication, deep technical knowledge, and delivered right on schedule.',
    rating: 5,
    projectType: 'Ecommerce Development & Speed Optimization',
    outcome: '+142% Conversion Rate Boost'
  },
  {
    id: 't-2',
    name: 'Elena Rostova',
    role: 'Product Director',
    company: 'FinVibe Technologies',
    country: 'United Kingdom',
    countryFlag: '🇬🇧',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    content: 'Working with Sayrul was one of the smoothest agency experiences we have had. He possesses that rare combination of elite UI/UX design sense paired with clean, modular full-stack code. His attention to detail in responsive layouts and performance is world-class.',
    rating: 5,
    projectType: 'SaaS Dashboard UI/UX & Web Application',
    outcome: 'Completed 4 days ahead of deadline'
  },
  {
    id: 't-3',
    name: 'Marcus Vance',
    role: 'Marketing Lead',
    company: 'Nova Growth Labs',
    country: 'Australia',
    countryFlag: '🇦🇺',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    content: 'Sayrul built a high-converting landing page for our new software launch. We achieved a 99/100 Google PageSpeed score, and our paid ad campaign generated more than double the leads of our previous benchmark. Highly recommended!',
    rating: 5,
    projectType: 'High-Impact Landing Page & SEO',
    outcome: '99/100 Google PageSpeed'
  },
  {
    id: 't-4',
    name: 'Tariq Al-Mansoor',
    role: 'Managing Partner',
    company: 'Gulf Horizon Properties',
    country: 'United Arab Emirates',
    countryFlag: '🇦🇪',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    content: 'Sayrul Islam delivered our real estate portal flawlessly. His custom WordPress and PHP solutions are robust, clean, and extremely easy for our internal team to manage. Plus, his direct WhatsApp communication made collaboration effortless.',
    rating: 5,
    projectType: 'Custom WordPress & CMS Web App',
    outcome: 'Zero bugs post-launch'
  }
];

export const TIMELINE: TimelineMilestone[] = [
  {
    year: '2023 - Present',
    title: 'Founder & Lead Full Stack Architect',
    company: 'Sayrul Islam Digital Agency (sayrulislam.com)',
    description: 'Leading end-to-end web design, full-stack development, and high-impact digital solutions for startups and brands across 16+ countries.',
    tags: ['React', 'Next.js', 'Full Stack PHP', 'WooCommerce', 'UI/UX', 'SEO']
  },
  {
    year: '2021 - 2023',
    title: 'Senior Full Stack & WordPress Engineer',
    company: 'Global Digital Agency & Freelance Consultant',
    description: 'Delivered 90+ custom web applications, complex eCommerce stores, and API integrations with 99% client satisfaction rating.',
    tags: ['PHP 8.x', 'Custom Plugins', 'Tailwind CSS', 'Performance Tuning', 'MySQL']
  },
  {
    year: '2019 - 2021',
    title: 'Web Developer & UI/UX Specialist',
    company: 'Tech Solutions Studio',
    description: 'Developed custom HTML5/CSS3/JavaScript frontends, CMS integrations, and conversion-focused landing pages for enterprise clients.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'WordPress', 'Figma', 'SEO Basics']
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How do we start working together on a project?',
    answer: 'Simply click the "Chat on WhatsApp" button (+8801788911722) or fill out the contact form below. We will discuss your goals, timeline, and deliverables, then provide a detailed proposal and transparent quote.',
    category: 'Process'
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'I specialize in full-stack web engineering: Modern React/Next.js, TypeScript, Tailwind CSS, PHP 8+, custom WordPress & WooCommerce architectures, REST APIs, MySQL, and Core Web Vitals speed optimization.',
    category: 'Technical'
  },
  {
    question: 'How long does a typical website project take?',
    answer: 'A high-converting landing page typically takes 3-7 business days. A full business website takes 7-14 business days, and complex eCommerce or web applications take 2-4 weeks depending on scope.',
    category: 'Timeline'
  },
  {
    question: 'Do you provide ongoing maintenance and post-launch support?',
    answer: 'Yes! Every project includes 30 days of complimentary post-launch support and bug fixes. We also offer monthly maintenance, speed monitoring, and technical SEO retainer packages.',
    category: 'Support'
  },
  {
    question: 'How are project payments structured?',
    answer: 'Typically, projects are split into milestones: 50% initial deposit to begin work, and 50% upon final testing, client approval, and live deployment. We accept international bank transfers, Wise, Stripe, and PayPal.',
    category: 'Billing'
  }
];

export const PLUGINS: PluginItem[] = [
  {
    id: 'sayrul-woospeed',
    name: 'Sayrul WooSpeed Checkout',
    badge: 'WooCommerce / E-Commerce',
    category: 'E-Commerce',
    shortDescription: 'High-conversion, single-page frictionless checkout for WooCommerce with instant AJAX validation, address autocomplete, and auto-currency conversion.',
    fullDescription: 'Sayrul WooSpeed Checkout replaces default clunky multi-step WooCommerce checkouts with a lightning-fast single-page flow engineered to reduce abandoned carts. Features dynamic address lookup, inline coupon validation, multi-currency switching, and custom thank-you routing.',
    version: 'v2.4.1',
    downloads: '14.8K+',
    activeInstalls: '3.2K+',
    rating: 4.9,
    compatibility: 'WordPress 6.2 - 6.7+ | WooCommerce 8.x - 9.x | PHP 8.1 - 8.3',
    features: [
      '1-Step Frictionless Checkout Layout',
      'Instant AJAX Form Validation & Zip Autocomplete',
      'Direct WhatsApp Order Notification Webhook',
      'Custom Multi-Currency & Stripe Elements Integration',
      'Zero Layout Shift & Under 40ms Execution Overhead'
    ],
    techStack: ['PHP 8.2', 'WooCommerce Hooks', 'Vanilla JS', 'Tailwind CSS', 'REST API'],
    demoUrl: '#contact'
  },
  {
    id: 'sayrul-cache-speed',
    name: 'WP Ultra-Cache & Asset Minifier',
    badge: 'Performance & Speed',
    category: 'Optimization',
    shortDescription: 'Advanced server-level caching engine that defers non-critical CSS/JS, generates WebP images on the fly, and guarantees 95+ Core Web Vitals.',
    fullDescription: 'Custom-built for speed-critical client sites. Unlike generic bloated caching plugins, WP Ultra-Cache eliminates render-blocking assets, pre-warms page caches, connects with Redis object caching, and optimizes database queries on schedule.',
    version: 'v1.9.0',
    downloads: '22.4K+',
    activeInstalls: '5.1K+',
    rating: 5.0,
    compatibility: 'WordPress 6.0+ | All Themes & Builders | PHP 8.0 - 8.3',
    features: [
      'Automated Critical CSS Extraction & Pre-generation',
      'Zero Render-Blocking Script Deferral Engine',
      'Lossless WebP Image Serving on Request',
      'Redis & Memcached Direct Object Cache Connection',
      'Automated Heartbeat & Database Transient Cleaner'
    ],
    techStack: ['PHP 8.x', 'Server Caching', 'Object Cache', 'WebP Library', 'HTTP/2 & HTTP/3'],
    demoUrl: '#contact'
  },
  {
    id: 'sayrul-whatsapp-speed-dial',
    name: 'Smart WhatsApp Direct Speed Dial',
    badge: 'Lead Generation',
    category: 'Conversion',
    shortDescription: 'Multi-agent floating WhatsApp speed dial with custom greetings, analytics conversion tracking, and intelligent page-context message generators.',
    fullDescription: 'Bridges website visitors with your sales team in seconds. Automatically populates chat messages with the current service or product page title, tracks clicks in Google Analytics 4, and supports business hour availability toggles.',
    version: 'v3.1.2',
    downloads: '38.6K+',
    activeInstalls: '8.4K+',
    rating: 4.9,
    compatibility: 'WordPress & Any CMS | 100% Mobile Responsive',
    features: [
      'Multi-Agent Department Routing (Sales, Support, Custom)',
      'Pre-populated Dynamic Message Prompts from Current URL',
      'Google Analytics 4 & Meta Pixel Event Tracking',
      'Working Hours Availability Badge & Auto-reply Prompts',
      'Feather-light: Zero External Font/CSS Dependencies (<6KB)'
    ],
    techStack: ['PHP', 'WordPress REST', 'SVG Icons', 'Vanilla JS', 'GA4 Events'],
    demoUrl: '#contact'
  },
  {
    id: 'sayrul-schema-rich-seo',
    name: 'Dynamic Schema & JSON-LD Architect',
    badge: 'SEO & Structured Data',
    category: 'SEO',
    shortDescription: 'Automated Schema.org structured data injector for Articles, Products, Organizations, Local Businesses, and interactive FAQ snippets.',
    fullDescription: 'Empower your site with rich snippets in Google search results. Automatically generates valid Schema.org JSON-LD microdata for breadcrumbs, author credentials, product ratings, FAQs, and enterprise business details with zero manual code.',
    version: 'v2.0.5',
    downloads: '19.2K+',
    activeInstalls: '4.6K+',
    rating: 4.8,
    compatibility: 'WordPress 6.0+ | Google Search Console Tested | PHP 8.1+',
    features: [
      'Automated FAQ Accordion to JSON-LD Schema Hook',
      'Full WooCommerce Product Schema with Reviews & Stock',
      'Person & Organization Authority Microdata',
      'Google Rich Results & Search Console 100% Error-Free',
      'Built-in Schema Validator Previewer'
    ],
    techStack: ['PHP 8.x', 'JSON-LD', 'Schema.org Standards', 'WordPress API'],
    demoUrl: '#contact'
  }
];
