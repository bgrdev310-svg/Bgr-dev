import React from 'react';
import { motion } from 'motion/react';
import { Twitter, Linkedin, Instagram, Dribbble, ArrowRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const links = {
    explore: ['Work', 'Services', 'Process', 'About', 'Insights'],
    legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
    social: [Twitter, Linkedin, Instagram, Dribbble]
  };

  return (
    <footer className="bg-[#050507] border-t border-white/5 pt-32 pb-12 px-6 relative overflow-hidden z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center gap-2 mb-8">
               <span className="text-4xl font-bold font-serif text-[#D4AF37]">B</span>
               <span className="text-xl font-medium text-white tracking-[0.2em] uppercase">Bgr Dev</span>
             </div>
             
             <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 max-w-md leading-tight">
               Crafting the future of digital luxury.
             </h3>

             <div className="flex items-center gap-4">
               {links.social.map((Icon, i) => (
                 <a 
                   key={i} 
                   href="#" 
                   className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300 group"
                 >
                   <Icon size={20} className="group-hover:scale-110 transition-transform" />
                 </a>
               ))}
             </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs text-[#D4AF37]">Explore</h4>
            <ul className="space-y-4">
              {links.explore.map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-lg font-light flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-[#D4AF37] group-hover:w-4 transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs text-[#D4AF37]">Contact</h4>
             <ul className="space-y-6">
               <li>
                 <a href="mailto:hello@bgrdev.com" className="text-2xl text-white hover:text-[#D4AF37] transition-colors font-medium">
                   hello@bgrdev.com
                 </a>
               </li>
               <li>
                 <p className="text-gray-400 font-light leading-relaxed">
                   123 Luxury Blvd, Suite 100 <br/>
                   Beverly Hills, CA 90210
                 </p>
               </li>
             </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500 uppercase tracking-wider font-medium">
          <p>© {currentYear} Bgr Dev. All rights reserved.</p>
          <div className="flex gap-8">
            {links.legal.map((item) => (
              <a key={item} href="#" className="hover:text-[#D4AF37] transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
