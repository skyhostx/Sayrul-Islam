import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ContactSection } from '../components/ContactSection';
import { PageRoute } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MessageSquare, Mail, Phone, MapPin, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ContactPageProps {
  initialMessage?: string;
  onNavigate: (page: PageRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  initialMessage = '',
  onNavigate,
}) => {
  return (
    <div className="min-h-screen bg-[#090D16]">
      {/* Page Header */}
      <PageHeader
        badge="Direct Inquiry • Fast Response"
        title="Start Your Project With"
        highlightedWord="Sayrul Islam"
        description="Whether you have an immediate deadline, require a custom quote, or want to discuss technical feasibility, reach out directly. Average response time is under 15 minutes on WhatsApp."
        currentPage="contact"
        onNavigate={onNavigate}
      />

      {/* Direct Contact Methods Bar */}
      <section className="py-10 bg-[#060911] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* WhatsApp Direct */}
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 transition-all flex items-center gap-3.5 group"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] text-slate-500 font-mono">Fastest Response</div>
                <div className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                  {PERSONAL_INFO.whatsappDisplay}
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/50 transition-all flex items-center gap-3.5 group"
            >
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] text-slate-500 font-mono">Official Email</div>
                <div className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors truncate max-w-[170px]">
                  {PERSONAL_INFO.email}
                </div>
              </div>
            </a>

            {/* Availability */}
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] text-slate-500 font-mono">Current Status</div>
                <div className="text-sm font-semibold text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Available Now</span>
                </div>
              </div>
            </div>

            {/* Location & Timezone */}
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] text-slate-500 font-mono">Location &amp; Reach</div>
                <div className="text-sm font-semibold text-white">
                  Dhaka &bull; Global Clients
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Interactive Contact Section */}
      <div className="py-6">
        <ContactSection initialMessage={initialMessage} />
      </div>
    </div>
  );
};
