import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALLERY } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'masonry' | 'building' | 'landscaping'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  const filterOptions = [
    { label: 'All Projects', value: 'all' as const },
    { label: 'Masonry & Stone', value: 'masonry' as const },
    { label: 'Extensions & Building', value: 'building' as const },
    { label: 'Patios & Landscaping', value: 'landscaping' as const }
  ];

  const filteredItems = GALLERY.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  const handleOpenLightbox = (item: GalleryItem) => {
    const idx = GALLERY.findIndex((g) => g.id === item.id);
    setSelectedImage(item);
    setCurrentIndex(idx);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) prevIndex = GALLERY.length - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(GALLERY[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    let nextIndex = currentIndex + 1;
    if (nextIndex >= GALLERY.length) nextIndex = 0;
    setCurrentIndex(nextIndex);
    setSelectedImage(GALLERY[nextIndex]);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#DACEB5] uppercase block">
            Completed Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900">
            Showcase of Our Local Devon Craftsmanship
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Take a look through our physical work portfolio, featuring architectural extensions, stone wall restorations, and bespoke garden landscapes completed around Braunton.
          </p>
          <div className="w-16 h-1 bg-[#53BADD] rounded-full mx-auto mt-4" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setActiveFilter(opt.value)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeFilter === opt.value
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-100'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-slate-50 rounded-2xl overflow-hidden shadow-sm aspect-[4/3] cursor-pointer border border-slate-100"
                onClick={() => handleOpenLightbox(item)}
                id={`gallery-item-${item.id}`}
              >
                {/* Project Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

                {/* Hover overlay content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  {/* Category Pill */}
                  <div className="self-end">
                    <span className="bg-white/90 backdrop-blur-sm text-slate-900 text-[10px] font-bold font-mono tracking-wider uppercase py-1 px-3 rounded-full">
                      {item.category === 'masonry' ? 'Masonry' : item.category === 'building' ? 'Extension / Build' : 'Landscaping'}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5 text-white">
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-bold font-sans tracking-tight leading-tight">
                        {item.title}
                      </h4>
                      <Eye className="w-4 h-4 text-[#DACEB5] shrink-0" />
                    </div>
                    <p className="text-xs text-slate-200 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Micro zoom icon (mobile indicator) */}
                <div className="absolute top-4 left-4 p-2 rounded-full bg-white/80 backdrop-blur-sm text-slate-700 md:hidden shadow">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Dark backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
                className="fixed inset-0 bg-slate-950/90 backdrop-blur-md"
              />

              {/* Lightbox Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative max-w-4xl w-full bg-slate-950 rounded-2xl overflow-hidden shadow-2xl z-10 border border-slate-800"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Main Media Panel */}
                <div className="relative aspect-video max-h-[70vh] bg-black flex items-center justify-center">
                  <img
                    src={selectedImage.imageUrl}
                    alt={selectedImage.title}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />

                  {/* Close button */}
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 bg-black/60 hover:bg-black/90 text-white rounded-full p-2.5 transition-colors border border-white/10"
                    aria-label="Close details"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Navigation Arrows */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white rounded-full p-2.5 transition-colors border border-white/10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white rounded-full p-2.5 transition-colors border border-white/10"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Narrative Details panel */}
                <div className="p-6 bg-slate-900 text-white border-t border-slate-800">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-[#DACEB5] uppercase block">
                        Featured Project &bull; {selectedImage.category.toUpperCase()}
                      </span>
                      <h3 className="text-xl font-bold font-sans tracking-tight">
                        {selectedImage.title}
                      </h3>
                    </div>
                    
                    <div>
                      <span className="inline-block bg-[#53BADD]/15 border border-[#53BADD]/30 text-[#53BADD] text-xs font-mono py-1 px-3.5 rounded-full uppercase font-bold">
                        Braunton, UK
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-slate-400 mt-4 leading-relaxed max-w-3xl">
                    {selectedImage.description}
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
