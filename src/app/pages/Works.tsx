import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router';
import { projects } from '../data/projects';

export function Works() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-[120px] pb-32 px-6 bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="text-[#D4AF37] uppercase tracking-[0.25em] text-xs font-bold mb-4 block">Our Portfolio</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.9]">
            All <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9E4B7] via-[#D4AF37] to-[#996515]">Projects</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              onClick={() => navigate(`/project/${project.id}`)}
              className="group relative overflow-hidden rounded-3xl cursor-pointer aspect-video w-full bg-[#0c0c0e] border border-white/5"
            >
              {/* Image filling the container precisely */}
              <motion.img 
                src={project.mainImage} 
                alt={project.title} 
                className="w-full h-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105 z-10"
              />
              
              {/* Completely hidden overlay and text info until hover triggers opacity-100 */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex flex-col justify-end p-8 bg-gradient-to-t from-black/95 via-black/40 to-transparent">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-medium mb-3">
                        {project.category}
                      </p>
                      <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight drop-shadow-md">
                        {project.title}
                      </h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-black shadow-lg flex items-center justify-center">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 border border-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-colors duration-500 pointer-events-none z-30" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
