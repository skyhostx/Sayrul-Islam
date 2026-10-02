import React, { useState, useMemo } from 'react';
import { 
  ExternalLink, 
  Search, 
  Sparkles, 
  Zap, 
  ArrowUpRight, 
  TrendingUp, 
  Code2, 
  Eye
} from 'lucide-react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

const CATEGORIES = ['All', 'Ecommerce', 'Web Apps', 'Landing Page', 'WordPress / CMS', 'UI/UX Design'] as const;

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section
      id="portfolio"
      className="py-24 bg-[#0D1322] relative border-t border-slate-800/80"
    >
      {/* Anchor for backward compatibility */}
      <span id="projects" className="absolute -top-24 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-wider">
              <span>Featured Work & Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Portfolio</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Explore high-performance websites, custom web apps, and conversion-engineered digital products delivered for international clients.
            </p>
          </div>

          {/* Quick Stat Pill */}
          <div className="hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>180+ Completed &bull; 99.4% Client Satisfaction</span>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800/80">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech or name..."
              className="w-full pl-9 pr-3.5 py-1.5 text-xs bg-slate-900/90 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500/50"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-16 text-center bg-slate-900/40 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">No projects found matching your search.</p>
            <button
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              className="mt-3 text-xs text-amber-400 underline font-mono"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="group relative rounded-2xl overflow-hidden bg-slate-900/80 border border-slate-800/90 hover:border-amber-500/40 shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Project Image Preview Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950 cursor-pointer" onClick={() => onSelectProject(project)}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category Pill Overlay */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-500/30">
                      {project.category}
                    </span>
                  </div>

                  {/* Year Tag */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-900/80 backdrop-blur-md text-slate-400 border border-slate-700">
                      {project.year}
                    </span>
                  </div>

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs shadow-lg">
                      <Eye className="w-3.5 h-3.5" />
                      View Case Study
                    </span>
                  </div>
                </div>

                {/* Project Info Body */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="text-[11px] font-mono text-slate-400">
                      Client: <span className="text-slate-300">{project.client}</span>
                    </div>

                    <h3 
                      onClick={() => onSelectProject(project)}
                      className="text-lg font-heading font-bold text-white group-hover:text-amber-300 transition-colors cursor-pointer line-clamp-1"
                    >
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Impact Metrics Badges */}
                  <div className="grid grid-cols-3 gap-1.5 py-2 px-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-xs font-mono font-bold text-amber-400">
                          {metric.value}
                        </div>
                        <div className="text-[9px] text-slate-500 uppercase tracking-tight">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="text-xs font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
                    >
                      <span>Full Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={`https://wa.me/8801788911722?text=Hi%20Sayrul,%20I%20saw%20your%20project%20"${encodeURIComponent(project.title)}"%20and%20want%20something%20similar.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-medium text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                    >
                      <span>Order Similar Project</span>
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
