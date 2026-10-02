import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  Globe, 
  Send, 
  Copy, 
  Check, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  ChevronDown, 
  ChevronUp,
  MapPin
} from 'lucide-react';
import { PERSONAL_INFO, FAQS, SERVICES } from '../data/portfolioData';

interface ContactSectionProps {
  initialMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialMessage = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Design',
    budget: '$500 - $1,500',
    message: initialMessage
  });

  useEffect(() => {
    if (initialMessage) {
      setFormData(prev => ({ ...prev, message: initialMessage }));
    }
  }, [initialMessage]);

  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const copyToClipboard = (text: string, type: string) => {
    try {
      if (navigator?.clipboard?.writeText) {
        navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopiedItem(type);
      setTimeout(() => setCopiedItem(null), 2500);
    } catch {
      setCopiedItem(type);
      setTimeout(() => setCopiedItem(null), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#0D1322] relative border-t border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-wider">
            <span>Let's Build Something High-Impact</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Project</span> Today
          </h2>
          
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Ready to build a minimal, fast, and conversion-focused web presence? Reach out directly via WhatsApp for instant reply or send an inquiry below.
          </p>
        </div>

        {/* 2-Column Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Direct Channels & Fast Connect */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Priority Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-500/40 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <MessageSquare className="w-6 h-6 fill-emerald-400/20" />
                  </div>
                  <div>
                    <h3 className="text-base font-heading font-bold text-white">
                      Direct WhatsApp
                    </h3>
                    <p className="text-xs text-emerald-400 font-mono">
                      Fastest Response (&lt; 15 mins)
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.whatsappNumber, 'whatsapp')}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  title="Copy Phone Number"
                >
                  {copiedItem === 'whatsapp' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="text-lg sm:text-xl font-mono font-bold text-white">
                {PERSONAL_INFO.whatsappDisplay}
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Connect directly with Sayrul Islam for immediate scope discussions, wireframe reviews, and instant estimates.
              </p>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950" />
                <span>Open WhatsApp Chat Now</span>
              </a>
            </div>

            {/* Email & Website Info Cards */}
            <div className="space-y-3">
              {/* Email */}
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Email Address</div>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-semibold text-slate-200 hover:text-amber-400">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                  title="Copy email"
                >
                  {copiedItem === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Website */}
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Official Website</div>
                    <a href="https://sayrulislam.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-200 hover:text-sky-400">
                      {PERSONAL_INFO.website}
                    </a>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10">
                  Live
                </span>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Location &amp; Working Hours</div>
                  <div className="text-xs font-semibold text-slate-200">
                    Dhaka, Bangladesh &bull; UTC+6 (Flexible for US, UK &amp; AU Timezones)
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Guarantees */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>NDA &amp; Confidentiality Protected</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Proposal &amp; Wireframe within 24 Hours</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800/90 rounded-2xl p-6 sm:p-8 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white">
                  Inquiry Received!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Sayrul Islam will review your project details and respond via email within 24 hours.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/8801788911722?text=Hi%20Sayrul,%20I%20just%20submitted%20a%20form%20inquiry%20on%20sayrulislam.com%20for%20${encodeURIComponent(formData.service)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Follow-up on WhatsApp for Priority</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-slate-400 underline font-mono"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <h3 className="text-lg font-heading font-bold text-white">
                    Send a Project Inquiry
                  </h3>
                  <span className="text-xs font-mono text-amber-400">
                    Free Consultation
                  </span>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name / Company *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Johnson"
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-950/80 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/60"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-950/80 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/60"
                    />
                  </div>
                </div>

                {/* Service Selection & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Interested Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-950/80 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-amber-500/60"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Full Stack Custom Application">Full Stack Custom Application</option>
                      <option value="Other / General Consultation">Other / General Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Approximate Budget (USD)
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-950/80 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-amber-500/60"
                    >
                      <option value="Under $500">&lt; $500 (Small Task / Audit)</option>
                      <option value="$500 - $1,500">$500 - $1,500 (Landing Page / Web Design)</option>
                      <option value="$1,500 - $3,500">$1,500 - $3,500 (Ecommerce / Full Website)</option>
                      <option value="$3,500+">$3,500+ (Complex Custom SaaS / Platform)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Project Details &amp; Requirements *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, target audience, preferred timeline, reference websites..."
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-950/80 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/60 leading-relaxed font-sans"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Sending Inquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Project Request</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Frequently Asked Questions Accordion */}
        <div className="pt-12 border-t border-slate-800/80 max-w-4xl mx-auto">
          <div className="text-center mb-10 space-y-2">
            <h3 className="text-2xl font-heading font-bold text-white">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Clear answers about project workflows, billing, and technical deliverables.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-slate-900/60 border border-slate-800 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-heading font-bold text-sm sm:text-base text-slate-200">
                      {faq.question}
                    </span>
                    <span className="text-amber-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-800/60">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
