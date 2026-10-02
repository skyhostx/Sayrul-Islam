import React from 'react';
import { Star, Quote, Sparkles, CheckCircle2, TrendingUp } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="py-24 bg-[#090D16] relative border-t border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <span>Verified Client Feedback</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Trusted by Brands &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Founders Globally</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Real feedback and tangible business outcomes from 6+ years of full-stack engineering and digital agency deliveries.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-7 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-amber-500/30 transition-all flex flex-col justify-between space-y-6 relative overflow-hidden"
            >
              {/* Quote Mark Watermark */}
              <Quote className="absolute right-6 top-6 w-16 h-16 text-slate-800/40 pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Rating Stars & Project Type */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                    {testimonial.projectType}
                  </span>
                </div>

                {/* Content */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Outcome Badge & Author Meta */}
              <div className="pt-4 border-t border-slate-800 space-y-3 relative z-10">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Key Result: {testimonial.outcome}</span>
                </div>

                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-700"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="text-sm font-bold text-white font-heading flex items-center gap-1.5">
                      <span>{testimonial.name}</span>
                      <span title={testimonial.country}>{testimonial.countryFlag}</span>
                    </div>
                    <div className="text-xs text-slate-400">
                      {testimonial.role}, <span className="text-slate-300">{testimonial.company}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
