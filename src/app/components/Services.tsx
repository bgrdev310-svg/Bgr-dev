import React from 'react';
import { motion } from 'motion/react';
import { Palette, Code, Layers, ArrowUpRight } from 'lucide-react';

export function Services() {
  const services = [
    {
      id: "01",
      title: "Digital Design",
      subtitle: "UI/UX & Branding",
      description: "We craft immersive digital environments that captivate and convert. Every pixel is intentional, every interaction is smooth.",
      icon: <Palette className="w-6 h-6" />,
      features: ["User Interface", "Experience Design", "Brand Identity", "Motion Graphics"]
    },
    {
      id: "02",
      title: "Development",
      subtitle: "Frontend & Backend",
      description: "Scalable, secure, and lightning-fast code. We build robust architectures that power your business growth.",
      icon: <Code className="w-6 h-6" />,
      features: ["React / Next.js", "Web WebGL", "E-Commerce", "CMS Integration"]
    },
    {
      id: "03",
      title: "Strategy",
      subtitle: "Growth & Analytics",
      description: "Data-driven insights to maximize your ROI. We position your brand to dominate the market.",
      icon: <Layers className="w-6 h-6" />,
      features: ["Market Analysis", "SEO Optimization", "Conversion Rate", "Content Strategy"]
    }
  ];

  return (
    <section id="services" className="relative py-32 px-6 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#D4AF37] uppercase tracking-[0.25em] text-xs font-bold mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Strategic Services. <br/>
              <span className="text-gradient-gold">Exceptional Execution.</span>
            </h2>
          </motion.div>
          
          <motion.p
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="text-gray-400 max-w-md text-lg font-light leading-relaxed"
          >
            We don't just build websites; we craft digital legacies. Our approach merges aesthetics with performance.
          </motion.p>
        </div>

        <div className="grid gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="glass-panel rounded-3xl p-8 md:p-12 transition-all duration-500 hover:bg-white/10 hover:border-[#D4AF37]/30 hover:shadow-[0_0_50px_-10px_rgba(212,175,55,0.15)] flex flex-col md:flex-row gap-12 items-start md:items-center justify-between overflow-hidden">
                
                {/* Decorative Glow */}
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Left: ID & Title */}
                <div className="flex items-start gap-8 z-10">
                  <span className="text-6xl md:text-8xl font-serif text-white/5 font-bold group-hover:text-[#D4AF37]/20 transition-colors duration-500 italic">
                    {service.id}
                  </span>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-[#F9E4B7] transition-colors">
                      {service.title}
                    </h3>
                    <span className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold">
                      {service.subtitle}
                    </span>
                  </div>
                </div>

                {/* Middle: Description & Features */}
                <div className="flex-1 max-w-xl z-10">
                  <p className="text-gray-400 text-lg leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-[#D4AF37]/80 transition-colors">
                        <div className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Icon Button */}
                <div className="relative z-10">
                  <button className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-300">
                    <ArrowUpRight className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
