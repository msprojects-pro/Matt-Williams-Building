import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, Hammer, Shield } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden" id="main-footer">
      {/* Decorative slant top border */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-white transform -translate-y-1/2 -skew-y-1 z-10" />

      {/* Main footer contents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Logo & Pitch column */}
          <div className="md:col-span-5 space-y-6">
            <div className="bg-white/5 inline-block p-2 rounded-2xl border border-white/10">
              <Logo size="md" lightText={true} />
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Braunton-based building company specializing in structural stone masonry, general renovations, extensions, paving, and custom landscaped gardens across North Devon.
            </p>

            <div className="flex items-center gap-3 text-xs text-slate-400">
              <Shield className="w-4 h-4 text-[#DACEB5]" />
              <span>Fully Insured Building Contractor</span>
            </div>
          </div>

          {/* Quick links column */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-sm font-mono uppercase tracking-widest text-[#DACEB5] font-bold">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        const offset = 80;
                        const bodyRect = document.body.getBoundingClientRect().top;
                        const elementRect = element.getBoundingClientRect().top;
                        const elementPosition = elementRect - bodyRect;
                        const offsetPosition = elementPosition - offset;
                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                      }
                    }}
                    className="text-slate-400 hover:text-[#53BADD] text-sm font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-sm font-mono uppercase tracking-widest text-[#DACEB5] font-bold">
              Contact Details
            </h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#53BADD] shrink-0 mt-0.5" />
                <span>Braunton, Devon, United Kingdom</span>
              </li>
              
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#DACEB5] shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+447368229424" className="text-white hover:text-[#53BADD] transition-colors font-bold block">
                    +44 7368 229424
                  </a>
                  <span className="text-xs text-slate-500 font-mono">Call or WhatsApp Matt</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#53BADD] shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:mattwilliamsbuildingco@gmail.com" className="text-white hover:text-[#53BADD] transition-colors font-bold block break-all">
                    mattwilliamsbuildingco@gmail.com
                  </a>
                  <span className="text-xs text-slate-500 font-mono">Available for consultation</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-xs text-slate-500 font-mono">
              &copy; {new Date().getFullYear()} Matt Williams Building Co. All rights reserved.
            </p>
            <p className="text-[10px] text-slate-600 font-mono">
              Braunton Based General Construction, Masonry & Landscaping Specialist.
            </p>
          </div>

          <button
            onClick={handleScrollToTop}
            className="group rounded-full bg-white/5 border border-white/10 hover:border-[#53BADD] p-3 text-slate-400 hover:text-white transition-all cursor-pointer shadow-lg flex items-center justify-center gap-2 text-xs font-mono font-bold"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
