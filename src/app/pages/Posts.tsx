import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowUpRight, Calendar, ArrowLeft } from 'lucide-react';
import { instagramPosts } from '../data/posts';
import { SEO } from '../components/SEO';

export function Posts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-[#0B0B0D] pt-32 pb-20 px-6 font-['Inter']">
      <SEO
        title="Insights & Editorials — Design Blog"
        description="Dive into BGR Dev's premium masterclasses on UI/UX design, luxury branding, typography, color psychology, and digital strategy for high-end brands."
        canonical="/posts"
        keywords="UI UX design insights, luxury branding tips, web design blog, typography masterclass, color psychology, BGR Dev blog"
      />
      <div className="max-w-7xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#D4AF37] mb-12 transition-colors w-fit group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium tracking-widest uppercase">Back to Home</span>
        </Link>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
            Insights & <span className="text-[#D4AF37]">Editorials</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl font-light">
            Dive into our premium masterclasses on design, development, and digital strategy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {instagramPosts.map((post, i) => (
             <Link key={post.id} to={`/post/${post.id}`}>
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group cursor-pointer flex flex-col h-full relative"
                >
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-8 ring-1 ring-white/10 group-hover:ring-[#D4AF37]/50 transition-all duration-500 shadow-xl shadow-black">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                    <motion.img 
                      src={post.coverImage} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex items-center gap-4 text-xs text-[#D4AF37] mb-4 font-medium tracking-wider uppercase">
                    <span className="flex items-center gap-2">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>{post.category}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 text-base leading-relaxed line-clamp-3 mb-6 flex-grow font-light">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-white text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                    View Post Details
                    <ArrowUpRight size={14} className="text-[#D4AF37]" />
                  </div>
                </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
