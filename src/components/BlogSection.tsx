import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  ArrowUpRight, 
  Search, 
  Tag, 
  Heart, 
  Eye, 
  Sparkles,
  Share2
} from 'lucide-react';
import { BLOG_POSTS } from '../data/portfolioData';
import { BlogPost } from '../types';

interface BlogSectionProps {
  onSelectArticle: (article: BlogPost) => void;
}

const CATEGORIES = ['All', 'Performance & SEO', 'Web Development', 'UI/UX & Conversion'] as const;

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectArticle }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [likesMap, setLikesMap] = useState<Record<string, number>>({});

  const handleLike = (e: React.MouseEvent, postId: string) => {
    e.stopPropagation();
    setLikesMap(prev => ({
      ...prev,
      [postId]: (prev[postId] || 0) + 1
    }));
  };

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section
      id="blog"
      className="py-24 bg-[#0D1322] relative border-t border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-wider">
              <span>Insights &amp; Tutorials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
              Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Articles</span> &amp; Guides
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              In-depth engineering write-ups, Core Web Vitals blueprints, full-stack architecture patterns, and conversion optimization strategies.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400 font-mono">
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>Updated regularly by Sayrul Islam</span>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800/80">
          <div className="flex flex-wrap items-center gap-2">
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

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides & tutorials..."
              className="w-full pl-9 pr-3.5 py-1.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500/50"
            />
          </div>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => {
            const totalLikes = post.likes + (likesMap[post.id] || 0);
            return (
              <article
                key={post.id}
                id={`blog-post-${post.id}`}
                onClick={() => onSelectArticle(post)}
                className="group p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-amber-500/40 shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Category & Read Time Meta */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-amber-300 transition-colors mb-3 leading-snug">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950/80 text-slate-400 border border-slate-800"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer: Author & Engagement */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-7 h-7 rounded-full object-cover border border-amber-500/40"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="text-xs font-bold text-slate-200">
                        {post.author.name}
                      </div>
                      <div className="text-[10px] text-slate-500">
                        {post.author.role}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={(e) => handleLike(e, post.id)}
                      className="flex items-center gap-1 text-xs text-slate-400 hover:text-rose-400 transition-colors"
                      title="Like this article"
                    >
                      <Heart className="w-3.5 h-3.5 fill-rose-500/20 text-rose-400" />
                      <span className="font-mono text-[11px]">{totalLikes}</span>
                    </button>

                    <div className="flex items-center gap-1 text-xs font-semibold text-amber-400 group-hover:text-amber-300">
                      <span>Read Full Guide</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
