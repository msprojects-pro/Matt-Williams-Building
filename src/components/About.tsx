import React from 'react';
import { motion } from 'motion/react';
import { MapPin, CheckCircle, Award, Shield } from 'lucide-react';
import Logo from './Logo';

export default function About() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="about">
      {/* Decorative background grid and shapes */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Brand Block */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Main image - High quality stone masonry detailing */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] relative z-10">
                <img
                  src="/masonry_detail.jpg"
                  alt="Traditional Masonry Work in Braunton"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                
                {/* Brand Logo Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 border border-[#DACEB5]/30 shadow-lg">
                  <Logo size="sm" showText={false} />
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-[#DACEB5] font-bold">The Mark of Quality</h4>
                    <p className="text-sm font-bold text-slate-900 leading-tight">Matt Williams Building Co.</p>
                  </div>
                </div>
              </div>

              {/* Decorative block accents */}
              <div 
                className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-[#DACEB5] -z-10 rounded-tl-2xl" 
              />
              <div 
                className="absolute -bottom-6 -right-6 w-36 h-36 bg-[#53BADD]/10 rounded-2xl -z-10" 
              />
            </motion.div>
          </div>

          {/* Right Column: Narrative Block */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#DACEB5] uppercase block">
                  Who We Are
                </span>
                <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900">
                  Braunton's Trusted Specialists in Construction, Stonemasonry & Landscaping
                </h2>
              </div>

              <div className="w-20 h-1 bg-[#53BADD] rounded-full" />

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Based in the coastal village of <strong>Braunton, North Devon</strong>, Matt Williams Building Co. has built a reputation for delivering exceptional general building, heritage brickwork, structural alterations, and high-end outdoor landscaping.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether creating seamless modern house extensions, restoring traditional slate and stone masonry, or shaping tier-terraced garden landscapes, we focus on structural integrity, meticulous finishing, and reliable service. We manage projects from foundation excavations to the final decorative flagstones.
              </p>

              {/* Trust Indicators Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="flex items-start gap-3">
                  <div className="text-[#53BADD] bg-[#53BADD]/10 p-1.5 rounded-lg flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Devon Locals</h4>
                    <p className="text-xs text-slate-500">Proudly serving Braunton, Croyde, Georgeham, Barnstaple & surroundings.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-[#DACEB5] bg-[#DACEB5]/15 p-1.5 rounded-lg flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Stellar Masonry</h4>
                    <p className="text-xs text-slate-500">Specialist skills in heritage stonemasonry, dry stone, and detailed repointing.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-slate-700 bg-slate-100 p-1.5 rounded-lg flex-shrink-0 mt-0.5">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Bespoke Landscaping</h4>
                    <p className="text-xs text-slate-500">Creating custom premium porcelain paving, patio terraces, and border planters.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-emerald-600 bg-emerald-50 p-1.5 rounded-lg flex-shrink-0 mt-0.5">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Fully Licensed & Insured</h4>
                    <p className="text-xs text-slate-500">Comprehensive insurance protection and guaranteed engineering standards.</p>
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-6">
                <div className="inline-flex flex-col sm:flex-row items-stretch sm:items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <p className="text-xs text-slate-500 font-mono flex-1 leading-normal">
                    Need professional masonry or a custom landscape transformation in North Devon? Get in touch with Matt today for a fast quote.
                  </p>
                  <a
                    href="#contact"
                    className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-2.5 px-5 rounded-xl transition-colors text-center shrink-0 uppercase tracking-wider"
                  >
                    Contact Matt
                  </a>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
