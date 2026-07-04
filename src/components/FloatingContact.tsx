import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageSquare, ChevronUp, AlertCircle } from 'lucide-react';

export default function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down 200px
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 md:hidden flex flex-col items-end gap-3">
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Expanded Quick Contact Buttons */}
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                className="flex flex-col gap-2 items-end mb-1"
              >
                {/* Dial Phone Button */}
                <a
                  href="tel:+447368229424"
                  className="bg-white border border-slate-100 rounded-full px-4 py-2.5 shadow-xl flex items-center gap-2.5 text-xs font-bold text-slate-800 hover:bg-slate-50 transition-colors"
                >
                  <span className="font-sans">Direct Call</span>
                  <div className="rounded-full bg-slate-900 p-1.5 text-white">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                </a>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/447368229424"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white border border-slate-100 rounded-full px-4 py-2.5 shadow-xl flex items-center gap-2.5 text-xs font-bold text-slate-800 hover:bg-slate-50 transition-colors"
                >
                  <span className="font-sans">WhatsApp Chat</span>
                  <div className="rounded-full bg-emerald-500 p-1.5 text-white">
                    <MessageSquare className="w-3.5 h-3.5 fill-white" />
                  </div>
                </a>
              </motion.div>
            )}

            {/* Main Primary Floating Circular Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setIsOpen(!isOpen)}
              className="bg-[#53BADD] text-white p-4 rounded-full shadow-2xl shadow-[#53BADD]/40 flex items-center justify-center cursor-pointer relative"
              style={{ width: '56px', height: '56px' }}
              aria-label="Contact quick links"
            >
              {isOpen ? (
                <ChevronUp className="w-6 h-6 transform rotate-180 transition-transform duration-200" />
              ) : (
                <>
                  <MessageSquare className="w-6 h-6 fill-white" />
                  {/* Small breathing dot indicator for incoming attraction */}
                  <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500 border-2 border-white"></span>
                  </span>
                </>
              )}
            </motion.button>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
