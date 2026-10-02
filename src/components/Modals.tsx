import React from 'react';
import { 
  X, 
  Check, 
  Clock, 
  ExternalLink, 
  MessageSquare, 
  Share2, 
  Heart, 
  Calendar, 
  User, 
  ArrowRight, 
  Layers,
  Sparkles,
  Zap
} from 'lucide-react';
import { ServiceItem, ProjectItem, BlogPost } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

// --- SERVICE MODAL ---
interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0F172A] border border-amber-500/30 p-6 sm:p-8 shadow-2xl space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 pr-8">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-amber-400 font-bold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
              Service {service.number}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
              <Clock className="w-3.5 h-3.5" />
              {service.turnaroundTime}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            {service.title}
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            {service.fullDescription}
          </p>
        </div>

        {/* Deliverables List */}
        <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
          <h4 className="text-xs font-mono text-amber-400 uppercase tracking-wider font-bold">
            Included Deliverables &amp; Output
          </h4>
          <div className="space-y-2">
            {service.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack & Ideal For */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
            <span className="font-mono text-slate-400 block font-semibold">Technologies Utilized:</span>
            <div className="flex flex-wrap gap-1">
              {service.technologies.map((t, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[11px]">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
            <span className="font-mono text-slate-400 block font-semibold">Ideal For:</span>
            <p className="text-slate-300">{service.idealFor}</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={`https://wa.me/8801788911722?text=Hi%20Sayrul,%20I%20would%20like%20to%20hire%20you%20for%20${encodeURIComponent(service.title)}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 transition-all"
          >
            <MessageSquare className="w-4 h-4 fill-slate-950" />
            <span>Chat on WhatsApp (+8801788911722)</span>
          </a>

          <a
            href="#contact"
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs sm:text-sm shadow-md"
          >
            <span>Request Custom Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};


// --- PROJECT CASE STUDY MODAL ---
interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0F172A] border border-amber-500/30 p-6 sm:p-8 shadow-2xl space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Image Banner */}
        <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-slate-950/90 text-amber-300 border border-amber-500/30">
              {project.category}
            </span>
          </div>
        </div>

        {/* Header */}
        <div className="space-y-2">
          <div className="text-xs font-mono text-slate-400">
            Client: <span className="text-white font-semibold">{project.client}</span> &bull; {project.year}
          </div>
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {project.fullCaseStudy}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="text-center">
              <div className="text-lg sm:text-xl font-mono font-extrabold text-amber-400">
                {m.value}
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-tight">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="space-y-2">
          <span className="text-xs font-mono text-slate-400 block uppercase">
            Architectural Tech Stack:
          </span>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 text-amber-300 border border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={`https://wa.me/8801788911722?text=Hi%20Sayrul,%20I%20love%20the%20case%20study%20for%20"${encodeURIComponent(project.title)}".%20Can%20we%20discuss%20a%20similar%20project?`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Discuss on WhatsApp (+8801788911722)</span>
          </a>

          <a
            href="#contact"
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs sm:text-sm font-semibold"
          >
            <span>Inquire for Similar Project</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </a>
        </div>

      </div>
    </div>
  );
};


// --- BLOG ARTICLE MODAL ---
interface BlogModalProps {
  article: BlogPost | null;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0F172A] border border-amber-500/30 p-6 sm:p-10 shadow-2xl space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Article Meta */}
        <div className="space-y-3 pr-8">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
              {article.category}
            </span>
            <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              {article.date}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white leading-tight">
            {article.title}
          </h2>

          <div className="flex items-center gap-3 pt-2">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-9 h-9 rounded-full object-cover border border-amber-500/40"
              referrerPolicy="no-referrer"
            />
            <div>
              <div className="text-xs font-bold text-white">Written by {article.author.name}</div>
              <div className="text-[10px] text-slate-400">{article.author.role}</div>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 pt-4 border-t border-slate-800">
          <div className="p-4 rounded-xl bg-slate-900/80 border-l-4 border-amber-500 text-slate-300 italic text-sm">
            {article.excerpt}
          </div>

          <div className="space-y-4 whitespace-pre-line font-sans">
            {article.content}
          </div>
        </div>

        {/* Tags */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-slate-500">Tags:</span>
          {article.tags.map((tag, idx) => (
            <span key={idx} className="px-2.5 py-1 rounded bg-slate-900 text-slate-300 font-mono text-xs border border-slate-800">
              #{tag}
            </span>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="pt-4 border-t border-slate-800 bg-slate-950/60 -mx-6 -mb-6 sm:-mx-10 sm:-mb-10 p-6 rounded-b-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-white">Need help implementing these optimizations?</div>
            <div className="text-[11px] text-slate-400">Sayrul Islam is available for consulting and full buildout.</div>
          </div>

          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Consult on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
};
