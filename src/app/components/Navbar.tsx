import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import imgLogo from '../../assets/logo-placeholder.svg';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const scrollTimeout = useRef<number | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isPageAtTop = currentScrollY < 100;
      const isScrollingDown = currentScrollY > lastScrollY.current;

      // Handle immediate visibility based on direction
      if (isPageAtTop || mobileMenuOpen || isHovered) {
        setIsVisible(true);
      } else if (isScrollingDown) {
        // Hide immediately on scroll down
        setIsVisible(false);
      } else {
        // Show immediately on scroll up
        setIsVisible(true);
      }

      setScrolled(currentScrollY > 20);

      // Handle inactivity hide (0.7s)
      if (scrollTimeout.current) window.clearTimeout(scrollTimeout.current);
      scrollTimeout.current = window.setTimeout(() => {
        if (!isPageAtTop && !mobileMenuOpen && !isHovered) {
          setIsVisible(false);
        }
      }, 700);

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) window.clearTimeout(scrollTimeout.current);
    };
  }, [mobileMenuOpen, isHovered]);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'Insights', href: '#insights' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ duration: 0.8, ease: "circOut" }}
        onMouseEnter={() => {
          setIsHovered(true);
          setIsVisible(true);
        }}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed top-6 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500`}
      >
        <div className={`
          relative flex items-center justify-between px-6 py-3 rounded-full border 
          transition-all duration-500 backdrop-blur-xl
          ${scrolled 
            ? 'w-full max-w-5xl bg-black/60 border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]' 
            : 'w-full max-w-7xl bg-transparent border-transparent'}
        `}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 relative z-10 group">
             <img src={imgLogo} alt="Bgr Dev Logo" className="h-8 w-auto object-contain transition-transform group-hover:scale-105" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5 backdrop-blur-md absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="px-5 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5 relative group overflow-hidden"
              >
                <span className="relative z-10">{link.name}</span>
                <motion.div 
                  className="absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" 
                  layoutId="nav-hover"
                />
              </a>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 relative z-10">
            <button className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-white text-black hover:bg-[#D4AF37] hover:text-black transition-all duration-300 group overflow-hidden relative">
              <span className="relative z-10 flex items-center gap-2">
                Start Project
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </button>

            <button 
              className="md:hidden text-white p-2 bg-white/5 rounded-full backdrop-blur-md border border-white/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-6"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.name} 
                  href={link.href} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-3xl font-light text-white hover:text-[#D4AF37] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 px-8 py-4 rounded-full text-lg font-semibold bg-[#D4AF37] text-black w-full max-w-xs"
              >
                Start Project
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
