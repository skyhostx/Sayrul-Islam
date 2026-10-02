export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  deliverables: string[];
  technologies: string[];
  turnaroundTime: string;
  idealFor: string;
  benefits: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: 'Ecommerce' | 'Web Apps' | 'Landing Page' | 'WordPress / CMS' | 'UI/UX Design';
  description: string;
  fullCaseStudy: string;
  image: string;
  techStack: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  liveUrl?: string;
  featured: boolean;
  year: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level: number;
    years: string;
    highlight?: boolean;
  }[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: 'Web Development' | 'WordPress & PHP' | 'Performance & SEO' | 'UI/UX & Conversion';
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
  views: number;
  likes: number;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  country: string;
  countryFlag: string;
  avatar: string;
  content: string;
  rating: number;
  projectType: string;
  outcome: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface PluginItem {
  id: string;
  name: string;
  badge: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  version: string;
  downloads: string;
  activeInstalls: string;
  rating: number;
  compatibility: string;
  features: string[];
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
}
