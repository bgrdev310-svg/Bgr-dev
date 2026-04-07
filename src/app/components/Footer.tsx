import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Mail, MessageCircle, ArrowRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const links = {
    explore: ['Work', 'Services', 'Process', 'About', 'Insights'],
    legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
    social: [
      { icon: Instagram, href: 'https://www.instagram.com/bgr.dev/' },
      { icon: MessageCircle, href: 'https://wa.me/213659308807' },
      { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&to=bgrdev310@gmail.com' }
    ]
  };

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <footer className="bg-[#020202] pt-32 pb-8 px-6 relative overflow-hidden z-20 border-t border-white/5">
      {/* Top subtle glow line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>

      {/* Giant Watermark Background */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden flex justify-center pointer-events-none select-none z-0 opacity-[0.02]">
        <h1 className="text-[20vw] font-black uppercase text-white whitespace-nowrap leading-none mb-[-4vw]">
          BGR DEV
        </h1>
      </div>

      <motion.div 
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Main CTA Section */}
        <motion.div variants={itemVariants} className="mb-24 flex flex-col items-center text-center gap-10 border-b border-white/5 pb-16">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9]">
            Ready to craft <br className="hidden md:block"/> 
            <span className="text-[#D4AF37] italic font-serif font-light tracking-normal"> the future?</span>
          </h2>
        </motion.div>

        {/* Links Grid */}
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 flex flex-col justify-between">
             <div>
               <div className="flex items-center gap-3 mb-6">
                 <span className="text-5xl font-bold font-serif text-[#D4AF37] leading-none">B</span>
                 <span className="text-2xl font-bold text-white tracking-[0.25em] uppercase leading-none mt-1">Bgr Dev</span>
               </div>
               
               <p className="text-xl text-gray-400 font-light mb-10 max-w-md leading-relaxed">
                 A premium digital studio dedicated to elevating brands through masterclass design and state-of-the-art engineering.
               </p>
             </div>

             <div className="flex items-center gap-4">
               {links.social.map((item, i) => (
                 <a 
                   key={i} 
                   href={item.href}
                   target={item.href.startsWith('mailto') ? undefined : "_blank"}
                   rel="noopener noreferrer"
                   className="w-14 h-14 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-400 hover:text-black hover:border-[#D4AF37] hover:bg-[#D4AF37] transition-all duration-500 transform hover:-translate-y-1 group"
                 >
                   <item.icon size={22} className="group-hover:scale-110 transition-transform duration-500" />
                 </a>
               ))}
             </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold mb-8 uppercase tracking-[0.3em] text-xs text-[#D4AF37]">Explore</h4>
            <ul className="space-y-5">
              {links.explore.map((item) => (
                <li key={item}>
                  <a href="#" className="relative inline-flex items-center text-gray-400 hover:text-white transition-colors text-lg font-light group overflow-hidden py-1">
                    <span className="absolute left-0 opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 text-[#D4AF37] transition-all duration-300 ease-out">
                      <ArrowRight size={16} />
                    </span>
                    <span className="relative z-10 translate-x-0 group-hover:translate-x-6 transition-transform duration-300 ease-out">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
             <h4 className="text-white font-bold mb-8 uppercase tracking-[0.3em] text-xs text-[#D4AF37]">Contact</h4>
             <ul className="space-y-8">
               <li>
                 <a href="https://mail.google.com/mail/?view=cm&to=bgrdev310@gmail.com" target="_blank" rel="noopener noreferrer" className="relative inline-block text-lg lg:text-xl text-white font-medium group pb-2 break-all">
                    bgrdev310@gmail.com
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4AF37] scale-x-0 origin-right group-hover:origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                  </a>
               </li>
               <li>
                  <p className="text-gray-400 font-light leading-relaxed text-lg">
                    Currently accepting <br/>
                    select projects for 2026.
                  </p>
               </li>
             </ul>
          </motion.div>
        </div>

        {/* Absolute Bottom / Legal */}
        <motion.div variants={itemVariants} className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-gray-600 uppercase tracking-widest font-bold">
          <p>© {currentYear} Bgr Dev. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-8">
            {links.legal.map((item) => (
              <a key={item} href="#" className="hover:text-[#D4AF37] transition-colors duration-300">{item}</a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}