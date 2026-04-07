import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="relative py-48 px-6 flex items-center justify-center overflow-hidden bg-[#0B0B0D]">
      {/* Background Radial Gradient */}
      <div className="absolute inset-0 bg-[#0B0B0D]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[120px] animate-pulse-slow" />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl lg:text-9xl font-bold text-white mb-10 tracking-tighter leading-[0.9]"
        >
          Ready to <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9E4B7] via-[#D4AF37] to-[#996515]">
            Elevate?
          </span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 mb-16 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Join the ranks of ambitious brands that refuse to blend in. Let's build something extraordinary together.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4 }}
           className="flex justify-center"
        >
          <button 
            onClick={() => window.dispatchEvent(new Event('openContactModal'))}
            className="px-14 py-7 bg-gradient-to-r from-[#D4AF37] to-[#996515] rounded-full text-black font-bold text-2xl hover:shadow-[0_0_60px_-10px_rgba(212,175,55,0.6)] transition-all duration-300 transform hover:-translate-y-2 flex items-center gap-4 group">
            Start Project
            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
