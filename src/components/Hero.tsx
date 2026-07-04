import React from 'react';
import { motion } from 'motion/react';
import { Phone, Calendar, ArrowRight, ShieldCheck, Star, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden" 
      id="hero"
    >
      {/* Background Image with custom blue/beige gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_background.jpg"
          alt="Matt Williams Construction & Stonemasonry"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Multilayer Overlay for ultra readability & premium aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20" />
        
        {/* Subtle abstract blue and beige glow overlays */}
        <div 
          className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full bg-[#53BADD]/15 blur-[120px] pointer-events-none" 
        />
        <div 
          className="absolute bottom-1/4 left-1/4 w-[35vw] h-[35vw] rounded-full bg-[#DACEB5]/10 blur-[100px] pointer-events-none" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-white flex flex-col justify-center h-full">
        <div className="max-w-3xl">
          
          {/* Tagline / Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#DACEB5]/15 border border-[#DACEB5]/30 px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-[#DACEB5]" />
            <span className="text-xs sm:text-sm font-mono tracking-widest text-[#DACEB5] uppercase font-bold">
              Braunton Based &bull; Fully Insured
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-sans font-black tracking-tight leading-none mb-6"
          >
            Professional <span className="text-[#53BADD]">Masonry</span>, General Building & <span className="text-[#DACEB5]">Landscaping</span>
          </motion.h1>

          {/* Subheadline description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-sans mb-10 max-w-2xl"
          >
            Braunton based building company specialising in premium stonemasonry, structural construction, home extensions, and complete garden transformations across North Devon.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <button
              onClick={onOpenQuote}
              className="bg-[#53BADD] hover:bg-[#3FA3C4] text-white py-4 px-8 rounded-full font-bold tracking-wide transition-all shadow-lg shadow-[#53BADD]/20 hover:shadow-xl hover:shadow-[#53BADD]/35 flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/447368229424"
              target="_blank"
              rel="noreferrer"
              className="border-2 border-white/80 hover:border-[#DACEB5] hover:bg-white/5 text-white py-4 px-8 rounded-full font-bold tracking-wide transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#DACEB5]" />
              <span>Call / WhatsApp Matt</span>
            </a>
          </motion.div>

          {/* Core Badges / Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-[#53BADD]/10 border border-[#53BADD]/20 p-2.5 text-[#53BADD] flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Guaranteed Quality</p>
                <p className="text-xs text-slate-400">Exceptional local craftsmanship</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-full bg-[#DACEB5]/10 border border-[#DACEB5]/20 p-2.5 text-[#DACEB5] flex-shrink-0">
                <Star className="w-5 h-5 fill-[#DACEB5]" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">5-Star Rated Service</p>
                <p className="text-xs text-slate-400">Highly trusted Braunton builder</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-full bg-white/5 border border-white/10 p-2.5 text-white flex-shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Free Detailed Estimates</p>
                <p className="text-xs text-slate-400">No obligation site consultations</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Decorative slant bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform translate-y-1/2 skew-y-1 z-10" />
    </section>
  );
}
