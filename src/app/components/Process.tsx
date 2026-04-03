import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Search, PenTool, LayoutTemplate, Zap, Hexagon, Sparkles, Rocket } from 'lucide-react';

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const steps = [
    {
      id: "01",
      title: "Discovery Audit",
      description: "We deep dive into your brand DNA, audience psychology, and market position to uncover the unique value proposition.",
      icon: <Search className="w-6 h-6 text-[#D4AF37]" />,
      bgIcon: <Search className="w-48 h-48 text-white/5" />,
    },
    {
      id: "02",
      title: "Strategic Blueprint",
      description: "Developing a comprehensive architecture that aligns visual aesthetics with business goals for maximum ROI.",
      icon: <PenTool className="w-6 h-6 text-[#D4AF37]" />,
      bgIcon: <Hexagon className="w-48 h-48 text-white/5" />,
    },
    {
      id: "03",
      title: "Design & Build",
      description: "Crafting pixel-perfect interfaces with robust, scalable code. Every interaction is smoothed to absolute perfection.",
      icon: <LayoutTemplate className="w-6 h-6 text-[#D4AF37]" />,
      bgIcon: <Sparkles className="w-48 h-48 text-white/5" />,
    },
    {
      id: "04",
      title: "Launch & Scale",
      description: "Rigorous testing across all devices followed by a highly strategic launch and ongoing conversion optimization.",
      icon: <Zap className="w-6 h-6 text-[#D4AF37]" />,
      bgIcon: <Rocket className="w-48 h-48 text-white/5" />,
    }
  ];

  return (
    <section id="process" ref={containerRef} className="py-16 md:py-32 px-4 md:px-6 relative overflow-hidden w-full max-w-[100vw] bg-[#0B0B0D]">
      {/* Abstract Background Vectors */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-[#D4AF37]/10 to-transparent rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-0 left-[-20%] w-[600px] h-[600px] bg-gradient-to-t from-white/5 to-transparent rounded-full blur-[100px] mix-blend-screen" />
        <svg className="absolute w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            d="M0,50 Q25,30 50,50 T100,50"
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="0.5"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.2 }}
            d="M0,60 Q25,40 50,60 T100,60"
            fill="none"
            stroke="rgba(212,175,55,0.05)"
            strokeWidth="0.5"
          />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(255,255,255,0.03)]"
          >
            <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse-slow shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
            <span className="text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-semibold">Our Methodology</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tighter"
          >
            The Science of <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F9E4B7] to-[#D4AF37] md:animate-gradient-x inline-block mt-1 sm:mt-2 md:mt-0 md:ml-4">Excellence.</span>
          </motion.h2>
        </div>

        {/* Global Horizontal Layout Container for both Mobile and Desktop */}
        <div className="relative w-full">
          {/* Continuous Glow Line Background - Hidden on small mobile to avoid overflow issues */}
          <div className="hidden md:block absolute top-[88px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.1)]" />

          {/* Animated Gold Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden md:block absolute top-[88px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent origin-left shadow-[0_0_20px_rgba(212,175,55,0.6)]"
          />

          {/* Steps Container: Vertical Stack on Mobile, Grid on Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 gap-y-20 md:gap-y-6 xl:gap-8 pt-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.7,
                  ease: [0.21, 1.11, 0.81, 0.99]
                }}
                className="relative flex flex-col group"
              >
                {/* Node Top Section */}
                <div className="flex flex-col items-center mb-8 relative z-20">
                  <span className="text-white/20 font-serif text-5xl italic font-light absolute -top-12 -z-10 group-hover:text-white/40 transition-colors duration-500">{step.id}</span>
                  <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center relative group-hover:border-[#D4AF37]/50 group-hover:scale-110 transition-all duration-500 ease-out shadow-[0_0_30px_rgba(0,0,0,0.8)]">
                    {/* Inner glowing ring */}
                    <div className="absolute inset-0 rounded-full border border-[#D4AF37]/30 scale-110 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out" />
                    {/* Glow behind icon */}
                    <div className="absolute inset-0 bg-[#D4AF37] opacity-0 group-hover:opacity-20 rounded-full blur-xl transition-opacity duration-500" />
                    {step.icon}
                  </div>
                </div>

                {/* Card Section */}
                <div className="relative flex-grow h-full">
                  {/* Apple iOS Glassmorphism Card */}
                  <div className="h-full bg-white/[0.02] backdrop-blur-[20px] border border-white/[0.05] p-8 rounded-[2rem] overflow-hidden relative transition-all duration-500 ease-out flex flex-col items-center text-center shadow-[0_8px_32px_rgba(0,0,0,0.5)] group-hover:-translate-y-2 group-hover:bg-gradient-to-b group-hover:from-white/[0.08] group-hover:to-white/[0.02] group-hover:backdrop-blur-[40px] group-hover:border-white/[0.12] group-hover:border-t-white/[0.25] group-hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),_inset_0_24px_48px_rgba(255,255,255,0.02),_0_24px_48px_rgba(0,0,0,0.8),_0_0_60px_rgba(212,175,55,0.15)] z-10">

                    {/* Glossy Top Reflection (iOS Apple styling) */}
                    <div className="absolute top-0 left-0 w-full h-[45%] bg-gradient-to-b from-white/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-t-[2rem]" />

                    {/* Background Oversized Icon for depth - This creates the "drawing in the background" effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none scale-50 group-hover:scale-110 ease-out flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#D4AF37] blur-[100px] opacity-20 rounded-full" />
                        {step.bgIcon}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors duration-300 z-10">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed z-10 group-hover:text-gray-300 transition-colors duration-300">
                      {step.description}
                    </p>

                    {/* Bottom Glow bar on hover */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent group-hover:w-full transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
