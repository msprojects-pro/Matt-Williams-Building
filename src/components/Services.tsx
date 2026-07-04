import React from 'react';
import { motion } from 'motion/react';
import { 
  Hammer, 
  Construction, 
  Home, 
  Trees, 
  HardHat, 
  Grid, 
  Check, 
  ArrowRight 
} from 'lucide-react';
import { SERVICES } from '../data';

interface ServicesProps {
  onOpenQuote: () => void;
}

// Helper to render correct icon based on string key
function ServiceIcon({ name, className }: { name: string; className: string }) {
  switch (name) {
    case 'Hammer':
      return <Hammer className={className} />;
    case 'Construction':
      return <Construction className={className} />;
    case 'Home':
      return <Home className={className} />;
    case 'Trees':
      return <Trees className={className} />;
    case 'HardHat':
      return <HardHat className={className} />;
    case 'Grid':
      return <Grid className={className} />;
    default:
      return <Construction className={className} />;
  }
}

export default function Services({ onOpenQuote }: ServicesProps) {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="services">
      {/* Background accent decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#53BADD]/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#DACEB5]/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#DACEB5] uppercase block">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900">
            Professional Building & Construction Excellence
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From restoration of historic stone cottage walls to constructing modern timber-clad extensions and porcelain patio systems, we ensure structural resilience and outstanding finishes.
          </p>
          <div className="w-16 h-1 bg-[#53BADD] rounded-full mx-auto mt-4" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Icon wrapper with soft colored background */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 rounded-xl bg-slate-50 text-[#53BADD] border border-slate-100 group-hover:bg-[#53BADD] group-hover:text-white transition-all duration-300">
                    <ServiceIcon name={service.iconName} className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-slate-300 font-bold">0{index + 1}</span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-slate-950 font-sans tracking-tight mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2.5 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <div className="rounded-full bg-slate-50 border border-slate-100 text-[#DACEB5] p-0.5 flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-medium leading-normal">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={onOpenQuote}
                className="w-full py-3 px-4 rounded-xl border border-slate-200 hover:border-[#53BADD] text-slate-800 hover:text-[#53BADD] font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer group-hover:bg-slate-50/50"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </motion.div>
          ))}
        </div>

        {/* Call-to-action bar */}
        <div className="mt-16 bg-white rounded-2xl border border-slate-100 p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-slate-900">Have a custom structural or masonry project?</h4>
            <p className="text-sm text-slate-500">We do custom brick repairs, lime mortar pointings, drainage solutions, and tailor-built designs.</p>
          </div>
          <button
            onClick={onOpenQuote}
            className="bg-slate-950 hover:bg-slate-800 text-white py-3.5 px-8 rounded-full font-bold text-sm tracking-wide transition-all shadow-md shrink-0 cursor-pointer"
          >
            Ask Matt For Advice
          </button>
        </div>

      </div>
    </section>
  );
}
