import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import { SEO } from '../components/SEO';

export function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <SEO title="Project Not Found" description="The project you are looking for does not exist." noIndex={true} />
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button onClick={() => navigate('/')} className="text-[#D4AF37] hover:underline flex items-center justify-center gap-2">
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </button>
        </div>
      </div>
    );
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bgrdev.com/" },
      { "@type": "ListItem", "position": 2, "name": "Works", "item": "https://bgrdev.com/works" },
      { "@type": "ListItem", "position": 3, "name": project.title, "item": `https://bgrdev.com/project/${project.id}` }
    ]
  };

  return (
    <article className="min-h-screen pt-[120px] pb-32 px-6">
      <SEO
        title={`${project.title} — ${project.category} Case Study`}
        description={project.description}
        canonical={`/project/${project.id}`}
        ogType="article"
        keywords={`${project.title}, ${project.category}, ${project.services.join(', ')}, BGR Dev project`}
        structuredData={breadcrumbData}
      />
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-10 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium tracking-widest uppercase">Back to Works</span>
          </button>
          
          <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-end mb-8">
            <div>
              <span className="inline-block px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-6">
                {project.category}
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.9]">
                {project.title}
              </h1>
            </div>
            
            <a 
              href="#" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-[#D4AF37] transition-colors duration-300"
            >
              Visit Live Site
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full lg:w-4/5 xl:w-3/4 mx-auto rounded-3xl overflow-hidden relative mb-20 bg-[#0c0c0e] border border-white/5"
        >
          <img 
            src={project.mainImage} 
            alt={`${project.title} Main Preview`} 
            className="w-full h-auto block relative z-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-transparent opacity-80 pointer-events-none z-20" />
        </motion.div>

        {/* Project Details Grid */}
        <div className="grid md:grid-cols-12 gap-12 mb-32">
          {/* Metadata */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 flex flex-col gap-8"
          >
            <div className="p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm">
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">Client</h4>
                <p className="text-xl font-medium text-white">{project.client}</p>
              </div>
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">Year</h4>
                <p className="text-xl font-medium text-white">{project.year}</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">Services</h4>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-8 flex flex-col justify-center"
          >
            <h3 className="text-3xl md:text-4xl font-light text-white leading-tight mb-8">
              "An uncompromising pursuit of <span className="text-gradient-gold font-medium">digital perfection</span>."
            </h3>
            <p className="text-xl text-gray-400 leading-relaxed font-light">
              {project.description}
            </p>
          </motion.div>
        </div>

        {/* Gallery Section */}
        {project.galleryImages.length > 0 && (
          <div className="space-y-8">
            <h3 className="text-[#D4AF37] uppercase tracking-[0.25em] text-sm font-bold mb-8">Visual Explorations</h3>
            <div className={`grid gap-8 ${project.galleryImages.length === 1 ? 'grid-cols-1 md:w-3/4 mx-auto' : 'md:grid-cols-2'}`}>
              {project.galleryImages.map((img, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  className={`rounded-3xl overflow-hidden border border-white/5 bg-[#0c0c0e] flex items-center justify-center p-6 ${project.galleryImages.length === 3 && idx === 0 ? 'md:col-span-2 md:h-[600px] p-12' : 'h-[400px] md:h-[500px]'}`}
                >
                  <img 
                    src={img} 
                    alt={`${project.title} Gallery ${idx + 1}`} 
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}
        
        {/* Next Project Prompt */}
        <div className="mt-32 pt-16 border-t border-white/10 flex flex-col items-center justify-center text-center">
           <h4 className="text-2xl font-light text-gray-400 mb-6">Want to see more?</h4>
           <button 
             onClick={() => navigate('/')} 
             className="text-4xl md:text-6xl font-bold text-white hover:text-[#D4AF37] transition-colors duration-300 tracking-tighter"
           >
             Return to <span className="underline decoration-[#D4AF37] decoration-2 underline-offset-8">All Works</span>
           </button>
        </div>
      </div>
    </article>
  );
}
