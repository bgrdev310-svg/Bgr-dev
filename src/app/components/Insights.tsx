import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { Link } from 'react-router';
import { instagramPosts } from '../data/posts';

export function Insights() {
  return (
    <section id="insights" className="py-16 md:py-32 px-6 bg-[#0B0B0D] relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#D4AF37] uppercase tracking-[0.25em] text-xs font-bold mb-4 block">Thoughts & Insights</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
              Editorial
            </h2>
          </motion.div>
          
          <Link to="/posts">
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="hidden md:flex items-center gap-2 text-white border-b border-white/20 pb-1 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300 group"
            >
              <span className="text-sm font-medium tracking-widest uppercase">View All Posts</span>
              <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {instagramPosts.map((post, i) => (
             <Link key={post.id} to={`/post/${post.id}`}>
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group cursor-pointer flex flex-col h-full relative"
                >
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-8 ring-1 ring-white/10 group-hover:ring-[#D4AF37]/50 transition-all duration-500">
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
    </section>
  );
}
