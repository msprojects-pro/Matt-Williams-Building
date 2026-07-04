/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import FloatingContact from './components/FloatingContact';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  // Set page meta on load for premium SEO-friendliness
  useEffect(() => {
    document.title = "Matt Williams Building Co. | Masonry & Construction Braunton";
    
    // Set meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Braunton based premium building company specialising in professional stone masonry, general construction, home extensions, and complete garden landscaping in Devon UK.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Braunton based premium building company specialising in professional stone masonry, general construction, home extensions, and complete garden landscaping in Devon UK.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#53BADD]/30 selection:text-slate-950 font-sans antialiased scroll-smooth" id="app-root">
      
      {/* Sticky Top Header */}
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Main Structural Blocks */}
      <main>
        {/* Full-Height Hero Section */}
        <Hero onOpenQuote={() => setIsQuoteOpen(true)} />

        {/* Local Devon Roots & About Us Block */}
        <About />

        {/* Detailed Services Catalog Grid */}
        <Services onOpenQuote={() => setIsQuoteOpen(true)} />

        {/* Interactive Image Showcase Portfolio & Lightbox */}
        <Gallery />

        {/* Real Verified Client Reviews */}
        <Testimonials />

        {/* Premium Detailed Contact Forms & Coverage Maps */}
        <Contact />
      </main>

      {/* Aesthetic Site Footer */}
      <Footer />

      {/* Full-Screen Interactive Quote Application Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />

      {/* Sticky Dual Action Message Panel for Mobiles */}
      <FloatingContact />

    </div>
  );
}
