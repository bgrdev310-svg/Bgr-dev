import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowRight, Play, Globe, Zap } from 'lucide-react';
import imgSocial1 from '../../assets/social-instagram.svg';
import imgWhatsapp1 from '../../assets/social-whatsapp.svg';
import imgGmail1 from '../../assets/social-gmail.svg';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Mouse move effect for spotlight
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePosition({ x, y });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden perspective-1000"
    >
      {/* Dynamic Background Spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        animate={{
          background: `radial-gradient(600px circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, rgba(212, 175, 55, 0.15), transparent 40%)`
        }}
      />

      {/* Floating Glass UI Elements (Background) */}
      <motion.div style={{ y: y1, rotate: -10 }} className="absolute top-[15%] left-[5%] w-64 h-40 glass-panel rounded-2xl z-0 hidden lg:block opacity-60">
        <div className="p-4 border-b border-white/10 flex justify-between items-center">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
        </div>
        <div className="p-6 space-y-3">
          <div className="w-3/4 h-2 bg-white/10 rounded-full" />
          <div className="w-1/2 h-2 bg-white/10 rounded-full" />
        </div>
      </motion.div>

      <motion.div style={{ y: y2, rotate: 5 }} className="absolute bottom-[20%] right-[5%] w-56 h-56 glass-panel rounded-full z-0 hidden lg:flex items-center justify-center opacity-60">
        <div className="w-40 h-40 rounded-full border border-[#D4AF37]/20 flex items-center justify-center relative">
          <div className="absolute inset-0 border-t border-[#D4AF37] rounded-full animate-spin duration-[10s]" />
          <Zap className="text-[#D4AF37] w-10 h-10" />
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto text-center z-10 pt-[clamp(2rem,8vh,5rem)] relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-[clamp(1rem,4vh,2rem)] inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
          </span>
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Redefining Digital Luxury
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-[clamp(3rem,min(10vw,12vh),3.75rem)] md:text-[clamp(4rem,min(12vw,14vh),6rem)] lg:text-[clamp(5rem,min(14vw,16vh),8rem)] font-bold tracking-tighter text-white leading-[0.9] mb-[clamp(1rem,4vh,2rem)]"
        >
          We Design <br />
          <span className="text-gradient-gold relative">
            Experiences
            <motion.svg
              className="absolute -bottom-4 left-0 w-full h-4 text-[#D4AF37] opacity-50"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1, duration: 1.5 }}
            >
              <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
            </motion.svg>
          </span> <br />
          That Define Brands
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-[clamp(1rem,4vh,2rem)] max-w-2xl mx-auto text-[clamp(1rem,min(3vw,2.5vh),1.25rem)] text-gray-400 font-light leading-relaxed tracking-wide"
        >
          Bgr Dev is an elite web agency crafting <span className="text-white font-medium">high-end, conversion-focused</span> digital assets.
          We merge strategy, aesthetics, and performance into a seamless masterpiece.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-[clamp(1.5rem,6vh,3rem)] flex flex-col sm:flex-row items-center justify-center gap-[clamp(0.5rem,2vh,1.5rem)]"
        >
          <button className="relative px-[clamp(1.5rem,5vw,2.5rem)] py-[clamp(0.75rem,2.5vh,1.25rem)] bg-gradient-to-r from-[#D4AF37] to-[#996515] rounded-full text-black font-bold text-[clamp(1rem,min(2.5vw,2vh),1.125rem)] hover:shadow-[0_0_50px_-10px_rgba(212,175,55,0.5)] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
            <span className="relative z-10">Schedule a Demo</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>

          <button className="px-[clamp(1.5rem,5vw,2.5rem)] py-[clamp(0.75rem,2.5vh,1.25rem)] bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 rounded-full text-white font-medium text-[clamp(1rem,min(2.5vw,2vh),1.125rem)] backdrop-blur-md hover:bg-white/10 transition-all duration-300 flex items-center gap-3 group">
            View Our Work
            <ArrowRight className="w-5 h-5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Social Icons - Integrated nicely */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute left-6 bottom-10 hidden lg:flex flex-col gap-4 z-20"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent mx-auto mb-4" />
        {[imgSocial1, imgWhatsapp1, imgGmail1].map((icon, i) => (
          <a
            key={i}
            href="#"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300 group"
          >
            <img src={icon} alt="Social" className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:invert transition-all" />
          </a>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-[clamp(1rem,4vh,2.5rem)] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[clamp(0.25rem,1vh,0.75rem)]"
      >
        <span className="text-[clamp(8px,1vh,10px)] uppercase tracking-[0.3em] text-gray-500">Scroll Down</span>
        <div className="w-[1px] h-[clamp(2rem,5vh,3rem)] bg-gradient-to-b from-[#D4AF37] to-transparent" />
      </motion.div>
    </section>
  );
}
