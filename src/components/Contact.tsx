import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, Clock } from 'lucide-react';
import { ContactFormData } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate database submission
    setTimeout(() => {
      console.log('--- Contact Form Message ---');
      console.log(formData);
      console.log('----------------------------');
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="contact">
      {/* Decorative colored glow on background */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#53BADD]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#DACEB5]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#DACEB5] uppercase block">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900">
            Let's Discuss Your Building Project
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Have a project in mind or need a professional site consultation? Drop us a message below or connect with Matt directly via Phone or WhatsApp.
          </p>
          <div className="w-16 h-1 bg-[#53BADD] rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-100 rounded-2xl p-8 sm:p-10 shadow-sm">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-slate-950 font-sans tracking-tight mb-2">
                    Send a Message
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5" htmlFor="contact-name">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-[#53BADD] focus:outline-none focus:ring-2 focus:ring-[#53BADD]/15 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5" htmlFor="contact-phone">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-[#53BADD] focus:outline-none focus:ring-2 focus:ring-[#53BADD]/15 transition-all"
                        placeholder="e.g. +44 7368 229424"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5" htmlFor="contact-email">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-[#53BADD] focus:outline-none focus:ring-2 focus:ring-[#53BADD]/15 transition-all"
                      placeholder="name@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5" htmlFor="contact-subject">
                      Subject / Project Type *
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-[#53BADD] focus:outline-none focus:ring-2 focus:ring-[#53BADD]/15 transition-all"
                      placeholder="e.g. Garden Landscaping, Brick Repointing"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5" htmlFor="contact-message">
                      Your Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-[#53BADD] focus:outline-none focus:ring-2 focus:ring-[#53BADD]/15 transition-all resize-none"
                      placeholder="How can we help? Tell us about your project dimensions, materials, and timeline..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#53BADD] hover:bg-[#3FA3C4] text-white py-3.5 px-6 rounded-xl font-bold tracking-wide transition-all shadow-md shadow-[#53BADD]/20 hover:shadow-lg hover:shadow-[#53BADD]/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center flex flex-col items-center justify-center space-y-5"
                >
                  <div className="rounded-full bg-emerald-50 p-4 text-emerald-500 border border-emerald-100">
                    <CheckCircle2 className="w-14 h-14" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-900">Message Sent Successfully!</h3>
                    <p className="text-slate-600 max-w-md mx-auto text-sm">
                      Thank you for contacting us, <strong>{formData.name}</strong>. Matt will review your subject: <strong className="text-slate-800">"{formData.subject}"</strong> and reply to <strong className="text-slate-800">{formData.email}</strong> or call you back shortly.
                    </p>
                  </div>
                  <button
                    onClick={handleReset}
                    className="border border-slate-200 hover:border-slate-300 text-slate-700 py-2.5 px-6 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Address & Quick Contact */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-100 rounded-2xl p-8 sm:p-10 shadow-sm space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-950 font-sans tracking-tight border-b border-slate-200/60 pb-3">
                Our Contact Info
              </h3>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-[#DACEB5]/15 border border-[#DACEB5]/20 p-3 text-[#DACEB5] flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-slate-400 mb-0.5">Headquarters</h4>
                    <p className="text-sm font-bold text-slate-900 leading-normal">Braunton, Devon, United Kingdom</p>
                    <p className="text-xs text-slate-500">Service Coverage: ~15 Mile Radius</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-[#53BADD]/10 border border-[#53BADD]/20 p-3 text-[#53BADD] flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-slate-400 mb-0.5">Call or WhatsApp</h4>
                    <a href="tel:+447368229424" className="text-sm font-bold text-slate-900 hover:text-[#53BADD] transition-colors leading-normal block">
                      +44 7368 229424
                    </a>
                    <a href="https://wa.me/447368229424" target="_blank" rel="noreferrer" className="text-xs text-[#53BADD] hover:underline font-medium block mt-0.5">
                      Tap to message on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-slate-100 border border-slate-200/40 p-3 text-slate-600 flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-slate-400 mb-0.5">Email Address</h4>
                    <a href="mailto:mattwilliamsbuildingco@gmail.com" className="text-sm font-bold text-slate-900 hover:text-[#53BADD] transition-colors leading-normal block break-all">
                      mattwilliamsbuildingco@gmail.com
                    </a>
                    <p className="text-xs text-slate-500">Replies usually within 24 hours</p>
                  </div>
                </div>

                {/* Working hours */}
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-slate-100 border border-slate-200/40 p-3 text-slate-600 flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-slate-400 mb-0.5">Operating Hours</h4>
                    <p className="text-sm font-bold text-slate-900 leading-normal">Mon - Fri: 8:00 AM - 5:30 PM</p>
                    <p className="text-xs text-slate-500">Sat: By appointment only</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/60 text-xs text-slate-500 leading-relaxed">
              Based in <strong>Braunton</strong>, we serve homeowners and commercial clients throughout North Devon, including Croyde, Woolacombe, Saunton, Ilfracombe, Barnstaple, and Georgeham.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
