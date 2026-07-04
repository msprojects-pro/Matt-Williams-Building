import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  onOpenQuote: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || isOpen
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
          : 'bg-transparent py-5'
      }`}
      id="main-navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="focus:outline-none">
            <Logo size="sm" lightText={!(isScrolled || isOpen)} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm font-medium transition-colors tracking-wide duration-300 ${
                  isScrolled || isOpen
                    ? 'text-slate-700 hover:text-[#53BADD]'
                    : 'text-white hover:text-[#53BADD]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Call To Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+447368229424"
              className={`flex items-center gap-2 text-sm font-bold transition-colors duration-300 ${
                isScrolled || isOpen
                  ? 'text-slate-800 hover:text-[#53BADD]'
                  : 'text-white hover:text-[#53BADD]'
              }`}
            >
              <Phone className="w-4 h-4 text-[#DACEB5]" />
              <span>+44 7368 229424</span>
            </a>
            
            <button
              onClick={onOpenQuote}
              className="bg-[#53BADD] hover:bg-[#3FA3C4] text-white text-sm font-bold py-2.5 px-5 rounded-full transition-all shadow-md shadow-[#53BADD]/15 hover:shadow-lg hover:shadow-[#53BADD]/25 cursor-pointer"
            >
              Get a Free Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="tel:+447368229424"
              className={`p-2 border rounded-full transition-colors duration-300 ${
                isScrolled || isOpen
                  ? 'text-slate-700 hover:text-[#53BADD] bg-slate-50 border-slate-100'
                  : 'text-white hover:text-[#53BADD] bg-white/10 border-white/10'
              }`}
              aria-label="Call business"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg focus:outline-none transition-colors duration-300 ${
                isScrolled || isOpen
                  ? 'text-slate-700 hover:bg-slate-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl py-6 px-4 animate-in fade-in slide-in-from-top-5 duration-200">
          <nav className="flex flex-col space-y-4 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-slate-800 hover:text-[#53BADD] font-medium text-base py-2 border-b border-slate-50"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="flex flex-col gap-3">
            <a
              href="tel:+447368229424"
              className="flex items-center justify-center gap-2 border border-slate-200 text-slate-800 py-3 rounded-xl font-bold transition-all text-sm"
            >
              <Phone className="w-4 h-4 text-[#DACEB5]" />
              <span>Call: +44 7368 229424</span>
            </a>
            
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenQuote();
              }}
              className="w-full bg-[#53BADD] hover:bg-[#3FA3C4] text-white py-3 rounded-xl font-bold transition-all shadow-md text-sm cursor-pointer"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
