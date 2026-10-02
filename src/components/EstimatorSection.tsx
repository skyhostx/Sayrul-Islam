import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Check, 
  MessageSquare, 
  Clock, 
  Sparkles, 
  ShieldAlert, 
  Send, 
  Layers, 
  DollarSign 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface EstimatorSectionProps {
  onApplyEstimateToForm?: (summaryText: string) => void;
}

interface ServiceOption {
  id: string;
  name: string;
  basePrice: number;
  baseDays: number;
  description: string;
}

const SERVICE_OPTIONS: ServiceOption[] = [
  { id: 'landing-page', name: 'High-Impact Landing Page', basePrice: 280, baseDays: 4, description: 'Conversion-engineered single page for launches & ad campaigns' },
  { id: 'web-design', name: 'Custom Brand Website', basePrice: 480, baseDays: 7, description: 'Bespoke multi-page business website with fluid responsive design' },
  { id: 'ui-ux', name: 'UI/UX Design & Prototyping', basePrice: 420, baseDays: 6, description: 'Research, Figma wireframing, clickable prototypes & design system' },
  { id: 'ecommerce', name: 'Full-Stack E-Commerce Store', basePrice: 750, baseDays: 12, description: 'WooCommerce / custom checkout, payment gateways & inventory' },
  { id: 'seo-speed', name: 'SEO & Speed Optimization', basePrice: 240, baseDays: 3, description: '95+ Google PageSpeed, schema markup & technical crawl audit' },
  { id: 'web-analysis', name: 'Full Web Analysis & Audit', basePrice: 190, baseDays: 2, description: 'Comprehensive UX friction, database and security bottleneck audit' }
];

const ADDONS = [
  { id: 'payments', label: 'Payment Gateway Integration (Stripe/PayPal/Local)', price: 120, days: 2 },
  { id: 'cms', label: 'Custom WordPress / Headless CMS Admin', price: 180, days: 3 },
  { id: 'speed', label: '95+ Google PageSpeed Guarantee', price: 100, days: 1 },
  { id: 'multilang', label: 'Multi-Language (i18n) Support', price: 140, days: 2 },
  { id: 'motion', label: 'Advanced Motion / 60fps Micro-Interactions', price: 110, days: 2 },
  { id: 'seo', label: 'Technical SEO & JSON-LD Schema Suite', price: 90, days: 1 }
];

export const EstimatorSection: React.FC<EstimatorSectionProps> = ({ onApplyEstimateToForm }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('web-design');
  const [pageCount, setPageCount] = useState<number>(5);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['speed', 'seo']);
  const [timelineSpeed, setTimelineSpeed] = useState<'standard' | 'express' | 'rush'>('standard');

  const selectedService = useMemo(() => {
    return SERVICE_OPTIONS.find(s => s.id === selectedServiceId) || SERVICE_OPTIONS[0];
  }, [selectedServiceId]);

  const toggleAddon = (addonId: string) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter(id => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  const calculation = useMemo(() => {
    let price = selectedService.basePrice;
    let days = selectedService.baseDays;

    // Extra pages (above base 1 page)
    if (selectedService.id !== 'landing-page' && pageCount > 1) {
      const extraPages = pageCount - 1;
      price += extraPages * 45;
      days += Math.ceil(extraPages * 0.8);
    }

    // Addons
    selectedAddons.forEach(addonId => {
      const addon = ADDONS.find(a => a.id === addonId);
      if (addon) {
        price += addon.price;
        days += addon.days;
      }
    });

    // Speed multiplier
    if (timelineSpeed === 'express') {
      price = Math.round(price * 1.2);
      days = Math.max(2, Math.round(days * 0.7));
    } else if (timelineSpeed === 'rush') {
      price = Math.round(price * 1.4);
      days = Math.max(1, Math.round(days * 0.5));
    }

    return { price, days };
  }, [selectedService, pageCount, selectedAddons, timelineSpeed]);

  const generateSummaryText = () => {
    const addonNames = selectedAddons.map(id => ADDONS.find(a => a.id === id)?.label).filter(Boolean).join(', ');
    return `Hi Sayrul, I generated an estimate on sayrulislam.com:
- Service: ${selectedService.name}
- Page Count: ${pageCount} pages
- Add-ons: ${addonNames || 'None'}
- Urgency: ${timelineSpeed.toUpperCase()}
- Estimated Budget: ~$${calculation.price} USD (${calculation.days} business days)
Let's discuss my project requirements!`;
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(generateSummaryText());
    window.open(`https://wa.me/8801788911722?text=${text}`, '_blank');
  };

  const handleApplyToForm = () => {
    if (onApplyEstimateToForm) {
      onApplyEstimateToForm(generateSummaryText());
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="estimator"
      className="py-24 bg-[#090D16] relative border-t border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-wider">
            <span>Transparent Pricing Engine</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Project Cost</span> &amp; Timeline Estimator
          </h2>
          
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Configure your project scope, select customized feature add-ons, and get an instant accurate estimate with 1-click WhatsApp dispatch.
          </p>
        </div>

        {/* 2-Column Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800/90 rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl">
            
            {/* Step 1: Select Service */}
            <div>
              <label className="block text-sm font-heading font-bold text-white mb-3 flex items-center justify-between">
                <span>1. Select Service Type</span>
                <span className="text-xs font-mono text-amber-400 font-normal">Base package</span>
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICE_OPTIONS.map((srv) => (
                  <button
                    key={srv.id}
                    type="button"
                    onClick={() => setSelectedServiceId(srv.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                      selectedServiceId === srv.id
                        ? 'bg-amber-500/10 border-amber-500 text-white shadow-md'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    <div>
                      <div className="text-xs sm:text-sm font-bold font-heading text-white">
                        {srv.name}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                        {srv.description}
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-xs font-mono pt-2 border-t border-slate-800/60">
                      <span className="text-amber-400 font-bold">from ${srv.basePrice}</span>
                      <span className="text-slate-500">{srv.baseDays} days</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Page / Screen Count Slider */}
            {selectedService.id !== 'landing-page' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-heading font-bold text-white">
                    2. Approximate Pages / Screens
                  </label>
                  <span className="px-3 py-1 rounded-md bg-amber-500/20 text-amber-300 font-mono text-sm font-bold border border-amber-500/30">
                    {pageCount} {pageCount === 1 ? 'Page' : 'Pages'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={pageCount}
                  onChange={(e) => setPageCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500">
                  <span>1 Page (Single-page)</span>
                  <span>5 Pages (Standard)</span>
                  <span>10+ Pages (Complex)</span>
                </div>
              </div>
            )}

            {/* Step 3: Add-on Features */}
            <div>
              <label className="block text-sm font-heading font-bold text-white mb-3">
                3. Technical Add-ons &amp; Enhancements
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-xl border text-left transition-all duration-150 flex items-start justify-between gap-2 ${
                        isChecked
                          ? 'bg-amber-500/10 border-amber-500/60 text-white'
                          : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        <div
                          className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 ${
                            isChecked
                              ? 'bg-amber-500 text-slate-950 font-bold'
                              : 'border border-slate-700 bg-slate-900'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <div>
                          <div className="text-xs font-medium text-slate-200 leading-snug">
                            {addon.label}
                          </div>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-amber-400 shrink-0 font-bold">
                        +${addon.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Urgency / Delivery Speed */}
            <div>
              <label className="block text-sm font-heading font-bold text-white mb-3">
                4. Project Urgency &amp; Delivery Speed
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'standard', name: 'Standard Pace', desc: 'Optimal workflow' },
                  { id: 'express', name: 'Express Speed', desc: '30% faster delivery' },
                  { id: 'rush', name: 'Priority Rush', desc: 'Direct priority queue' }
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setTimelineSpeed(tier.id as any)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      timelineSpeed === tier.id
                        ? 'bg-amber-500 text-slate-950 font-bold border-amber-400'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-heading font-bold">{tier.name}</div>
                    <div className={`text-[10px] mt-0.5 ${timelineSpeed === tier.id ? 'text-slate-900 font-medium' : 'text-slate-500'}`}>
                      {tier.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Price Summary Card */}
          <div className="lg:col-span-5 sticky top-24 space-y-4">
            <div className="rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 border border-amber-500/40 p-6 sm:p-8 shadow-2xl shadow-black/60 relative overflow-hidden">
              
              {/* Subtle top ambient glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                  Estimate Breakdown
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Fixed-Price Guarantee
                </span>
              </div>

              {/* Big Price Display */}
              <div className="py-6 text-center space-y-1">
                <div className="text-xs text-slate-400 font-mono">Estimated Investment</div>
                <div className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight flex items-center justify-center">
                  <span className="text-amber-400">$</span>
                  {calculation.price}
                  <span className="text-sm text-slate-500 font-normal ml-1">USD</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-mono pt-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Estimated Turnaround: ~{calculation.days} Business Days</span>
                </div>
              </div>

              {/* Selected Summary Items */}
              <div className="space-y-2.5 py-4 border-t border-b border-slate-800 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Selected Package:</span>
                  <span className="font-semibold text-white">{selectedService.name}</span>
                </div>

                {selectedService.id !== 'landing-page' && (
                  <div className="flex justify-between text-slate-300">
                    <span>Scope:</span>
                    <span className="font-mono text-slate-200">{pageCount} Custom Pages</span>
                  </div>
                )}

                <div className="flex justify-between text-slate-300">
                  <span>Active Add-ons:</span>
                  <span className="font-mono text-amber-400">{selectedAddons.length} Selected</span>
                </div>

                <div className="flex justify-between text-slate-300">
                  <span>Delivery Urgency:</span>
                  <span className="capitalize text-slate-200">{timelineSpeed}</span>
                </div>
              </div>

              {/* CTAs to Dispatch Estimate */}
              <div className="pt-6 space-y-3">
                <button
                  type="button"
                  id="estimator-whatsapp-send"
                  onClick={handleWhatsAppSend}
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4 fill-slate-950" />
                  <span>Send Estimate to WhatsApp (+8801788911722)</span>
                </button>

                <button
                  type="button"
                  onClick={handleApplyToForm}
                  className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5 text-amber-400" />
                  <span>Apply Estimate to Contact Form Below</span>
                </button>
              </div>

              {/* Guarantees */}
              <div className="mt-4 pt-4 border-t border-slate-800/80 text-[11px] text-slate-400 text-center space-y-1">
                <p>&bull; Includes 30 Days Free Post-Launch Support &amp; QA</p>
                <p>&bull; 100% Milestone-Based Secure Billing (50/50 split)</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
