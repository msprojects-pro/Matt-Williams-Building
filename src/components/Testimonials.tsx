import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="testimonials">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#DACEB5]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#DACEB5] uppercase block">
            Client Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900">
            What Our Devon Clients Say About Us
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We are proud to serve our local community in Braunton and surrounding coastal villages. Hear from our clients on their project experience.
          </p>
          <div className="w-16 h-1 bg-[#53BADD] rounded-full mx-auto mt-4" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm relative flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              {/* Giant background Quote icon */}
              <div className="absolute top-6 right-6 text-[#DACEB5]/10 pointer-events-none">
                <Quote className="w-16 h-16 transform rotate-180" />
              </div>

              <div className="space-y-4 relative z-10">
                {/* Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Service Tag */}
                <span className="inline-block bg-slate-50 border border-slate-100 text-slate-500 font-mono text-[10px] font-bold py-0.5 px-2 rounded-md">
                  Project: {t.service}
                </span>

                {/* Review Text */}
                <p className="text-slate-600 text-sm leading-relaxed italic">
                  "{t.text}"
                </p>
              </div>

              {/* Client Info Block */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-950 font-sans">{t.name}</h4>
                  <p className="text-xs text-[#DACEB5] font-mono uppercase tracking-wider">{t.location}</p>
                </div>
                
                <div className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-full px-2.5 py-1 text-[10px] font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Job</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Local authority endorsement badge */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 bg-white/60 backdrop-blur-sm border border-slate-100 p-6 rounded-2xl max-w-2xl mx-auto text-center sm:text-left">
          <div className="p-3 bg-[#53BADD]/10 text-[#53BADD] rounded-full">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-900">Your Local, Fully Insured Construction partner</h4>
            <p className="text-xs text-slate-500">
              Matt Williams Building Co. is fully insured. All work is compliant with Devon building regulations and structural engineering mandates.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
