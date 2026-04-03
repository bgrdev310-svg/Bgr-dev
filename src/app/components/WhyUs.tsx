import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Rocket, Gem, Lightbulb, CheckCircle2 } from 'lucide-react';

export function WhyUs() {
  const features = [
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Strategy First",
      description: "We don't guess. We research, analyze, and execute based on data-driven insights."
    },
    {
      icon: <Gem className="w-5 h-5" />,
      title: "Bespoke Design",
      description: "No templates. Every pixel is crafted from scratch to match your unique brand identity."
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "High Performance",
      description: "Lightning-fast load times and optimized code for superior SEO rankings."
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Enterprise Grade",
      description: "Security and scalability are built-in from day one, ensuring your growth is unhindered."
    }
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-[#0B0B0D]">
      {/* Background Decor */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-[#D4AF37]/5 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Left Side - Sticky Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#D4AF37] uppercase">Why Choose Bgr Dev</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[0.9] tracking-tighter">
            Not Just Websites. <br/>
            <span className="text-gradient-gold">
              Digital Assets.
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-lg font-light">
            In a digital landscape saturated with mediocrity, we build the exceptional. 
            We engineer experiences that command attention, build trust, and drive revenue.
          </p>
          
          <div className="flex flex-col gap-4">
             {["Conversion Focused", "Award Winning Design", "24/7 Support"].map((item, i) => (
               <div key={i} className="flex items-center gap-3">
                 <CheckCircle2 className="text-[#D4AF37] w-5 h-5" />
                 <span className="text-white font-medium tracking-wide">{item}</span>
               </div>
             ))}
          </div>
        </motion.div>

        {/* Right Side - Floating Glass Cards */}
        <div className="grid sm:grid-cols-2 auto-rows-fr gap-6 relative sm:pb-8">
          {/* Decorative Elements behind cards */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#D4AF37]/10 to-transparent blur-[100px] -z-10" />

          {features.map((feature, index) => (
            <div key={index} className={`h-full relative ${index % 2 === 1 ? 'sm:top-8 top-4' : ''}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl glass-panel group transition-all duration-300 flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300 text-[#D4AF37] shrink-0">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#F9E4B7] tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 flex-grow">
                  {feature.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
