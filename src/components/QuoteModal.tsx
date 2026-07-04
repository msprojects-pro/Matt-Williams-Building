import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, PhoneCall } from 'lucide-react';
import { QuoteRequestData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SERVICES_OPTIONS = [
  'Masonry & Brickwork',
  'General Building & Construction',
  'House Extensions & Renovations',
  'Landscaping & Garden Work',
  'Groundworks & Foundations',
  'Patios, Driveways & Paving',
  'Other / Custom Project'
];

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState<QuoteRequestData>({
    name: '',
    phone: '',
    email: '',
    service: SERVICES_OPTIONS[0],
    urgency: 'Within 1-3 months',
    location: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate backend submission
    setTimeout(() => {
      console.log('--- Quote Request Submitted ---');
      console.log(formData);
      console.log('-------------------------------');
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: SERVICES_OPTIONS[0],
      urgency: 'Within 1-3 months',
      location: '',
      message: ''
    });
    setIsSubmitted(false);
  };

  const handleClose = () => {
    onClose();
    // Reset after transition finishes
    setTimeout(resetForm, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-100 z-10 flex flex-col max-h-[90vh]"
            id="quote-request-modal"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 bg-slate-50">
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-sans tracking-tight">Request a Free Quote</h3>
                <p className="text-xs text-slate-500 font-mono">Braunton & Surrounding Devon Areas</p>
              </div>
              <button
                onClick={handleClose}
                className="rounded-full p-1.5 text-slate-400 hover:bg-slate-200 hover:text-slate-600 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-6 flex-1">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1" htmlFor="quote-name">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="quote-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-[#53BADD] focus:outline-none focus:ring-2 focus:ring-[#53BADD]/20 transition-all bg-slate-50"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1" htmlFor="quote-phone">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="quote-phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-[#53BADD] focus:outline-none focus:ring-2 focus:ring-[#53BADD]/20 transition-all bg-slate-50"
                        placeholder="e.g. +44 7368 229424"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1" htmlFor="quote-email">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="quote-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-[#53BADD] focus:outline-none focus:ring-2 focus:ring-[#53BADD]/20 transition-all bg-slate-50"
                      placeholder="name@example.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1" htmlFor="quote-service">
                        Service Required
                      </label>
                      <select
                        id="quote-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-[#53BADD] focus:outline-none focus:ring-2 focus:ring-[#53BADD]/20 transition-all bg-slate-50"
                      >
                        {SERVICES_OPTIONS.map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1" htmlFor="quote-location">
                        Project Location *
                      </label>
                      <input
                        type="text"
                        id="quote-location"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-[#53BADD] focus:outline-none focus:ring-2 focus:ring-[#53BADD]/20 transition-all bg-slate-50"
                        placeholder="e.g. Braunton, Croyde"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1" htmlFor="quote-urgency">
                      Timeframe / Urgency
                    </label>
                    <select
                      id="quote-urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-[#53BADD] focus:outline-none focus:ring-2 focus:ring-[#53BADD]/20 transition-all bg-slate-50"
                    >
                      <option value="Immediate">Immediate / Emergency</option>
                      <option value="Within 1 month">Within 1 month</option>
                      <option value="Within 1-3 months">Within 1-3 months</option>
                      <option value="Just Planning / Future">Just Planning / Future</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1" htmlFor="quote-message">
                      Project Details *
                    </label>
                    <textarea
                      id="quote-message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-[#53BADD] focus:outline-none focus:ring-2 focus:ring-[#53BADD]/20 transition-all bg-slate-50 resize-none"
                      placeholder="Please describe the work you need done, estimated size, materials preferred, etc..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#53BADD] hover:bg-[#3FA3C4] text-white py-3 px-4 rounded-xl font-bold tracking-wide transition-all shadow-md shadow-[#53BADD]/25 hover:shadow-lg hover:shadow-[#53BADD]/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Request
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center flex flex-col items-center justify-center space-y-4"
                >
                  <div className="rounded-full bg-emerald-50 p-4 text-emerald-500 border border-emerald-100">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Request Received!</h4>
                  <p className="text-sm text-slate-600 max-w-sm">
                    Thank you, <strong className="text-slate-800">{formData.name}</strong>. Matt will review your details and get back to you shortly regarding your <strong className="text-slate-800">{formData.service}</strong> inquiry in <strong className="text-slate-800">{formData.location}</strong>.
                  </p>
                  
                  <div className="w-full border-t border-slate-100 my-4" />
                  
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 w-full flex items-center gap-3 text-left">
                    <div className="rounded-full bg-[#53BADD]/10 p-2 text-[#53BADD]">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-mono uppercase">Need urgent response?</p>
                      <a 
                        href="https://wa.me/447368229424" 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-sm font-bold text-slate-900 hover:text-[#53BADD] transition-colors"
                      >
                        Message on WhatsApp: +44 7368 229424
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleClose}
                    className="mt-4 border border-slate-200 hover:border-slate-300 text-slate-700 py-2 px-6 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Close Window
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
