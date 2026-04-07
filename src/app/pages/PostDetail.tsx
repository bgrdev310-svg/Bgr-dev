import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { instagramPosts } from '../data/posts';
import { ArrowLeft, Clock, Calendar, ArrowUpRight, Share2, Bookmark, Heart, MessageCircle, ChevronLeft, ChevronRight, LayoutGrid, Layers } from 'lucide-react';
import { SEO } from '../components/SEO';

export function PostDetail() {
  const { id } = useParams();
  const post = instagramPosts.find(p => p.id === id);
  
  const [viewMode, setViewMode] = useState<'3d' | 'swipe'>('3d');
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);
  const [dragWidth, setDragWidth] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  // Recalculate drag constraints when switching to swipe mode
  useEffect(() => {
    if (viewMode === 'swipe' && carouselRef.current) {
      setDragWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, [viewMode, post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0B0B0D] flex items-center justify-center text-white">
        <SEO title="Post Not Found" description="The post you are looking for does not exist." noIndex={true} />
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Post not found</h1>
          <Link to="/" className="text-[#D4AF37] hover:underline flex items-center gap-2 justify-center">
            <ArrowLeft size={16} /> Return Home
          </Link>
        </div>
      </div>
    );
  }

  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "author": { "@type": "Organization", "name": "BGR Dev", "url": "https://bgrdev.com" },
    "publisher": {
      "@type": "Organization",
      "name": "BGR Dev",
      "logo": { "@type": "ImageObject", "url": "https://bgrdev.com/logo.png" }
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": `https://bgrdev.com/post/${post.id}` }
  };

  return (
    <div className="bg-[#0B0B0D] min-h-screen text-white relative font-['Inter'] pb-32 overflow-hidden">
      <SEO
        title={post.title}
        description={post.excerpt}
        canonical={`/post/${post.id}`}
        ogType="article"
        keywords={`${post.title}, ${post.category}, UI UX design, luxury branding, BGR Dev insights`}
        structuredData={articleData}
      />
      {/* Intro Section */}
      <section className="pt-32 pb-8 px-6 max-w-7xl mx-auto">
        <Link 
          to="/posts" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#D4AF37] mb-12 transition-colors w-fit group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium tracking-widest uppercase">Back to Insights</span>
        </Link>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-4">
             <div>
                <div className="flex items-center gap-4 text-xs text-[#D4AF37] mb-6 font-medium tracking-wider uppercase">
                  <span className="flex items-center gap-2"><Calendar size={14} />{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="flex items-center gap-2"><Clock size={14} />{post.readingTime}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span>{post.category}</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight max-w-4xl text-white">
                  {post.title}
                </h1>
             </div>

             {/* UI TOGGLE BUTTONS */}
             <div className="flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/10 shrink-0 relative z-50">
               <button 
                 onClick={() => setViewMode('3d')}
                 className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${viewMode === '3d' ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20' : 'text-gray-400 hover:text-white'}`}
               >
                 <Layers size={16} />
                 3D Coverflow
               </button>
               <button 
                 onClick={() => setViewMode('swipe')}
                 className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${viewMode === 'swipe' ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20' : 'text-gray-400 hover:text-white'}`}
               >
                 <LayoutGrid size={16} />
                 Swipe Grid
               </button>
             </div>
          </div>
        </motion.div>
      </section>

      {/* DYNAMIC PRESENTATION AREA */}
      <section className="w-full relative py-8 mb-12 min-h-[65vh] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          
          {/* 3D COVERFLOW MODE */}
          {viewMode === '3d' && (
            <motion.div 
              key="3d-mode"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full flex items-center justify-center relative perspective-container"
            >
               <div className="relative w-full max-w-7xl h-[60vh] md:h-[70vh] flex items-center justify-center">
                  {post.slides.map((slide, index) => {
                    const offset = index - activeIndex;
                    const isCenter = offset === 0;
                    const isVisible = Math.abs(offset) <= 2;
                    
                    // Slightly increased xTranslation to add a bit more breathing room
                    const xTranslation = offset * 95; 
                    const scaleVal = isCenter ? 1 : Math.abs(offset) === 1 ? 0.75 : 0.55;
                    const opacityVal = isCenter ? 1 : Math.abs(offset) === 1 ? 0.4 : 0.1;
                    const zIndexVal = 50 - Math.abs(offset);

                    if (!isVisible) return null;

                    return (
                      <motion.div
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        animate={{
                          x: `${xTranslation}%`,
                          scale: scaleVal,
                          opacity: opacityVal,
                          zIndex: zIndexVal,
                        }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 200, 
                          damping: 25, 
                          mass: 1 
                        }}
                        className={`absolute w-[80vw] sm:w-[400px] md:w-[450px] aspect-[4/5] rounded-2xl overflow-hidden ring-1 shadow-2xl ${
                          isCenter ? 'ring-[#D4AF37]/50 shadow-[#D4AF37]/20 cursor-default' : 'ring-white/10 shadow-black cursor-pointer hover:ring-white/30'
                        }`}
                      >
                         <div className={`absolute inset-0 bg-black transition-opacity duration-300 z-10 ${isCenter ? 'opacity-0' : 'opacity-40'}`} />
                         <img 
                            src={slide} 
                            alt={`Slide ${index + 1}`} 
                            className="w-full h-full object-cover"
                            draggable="false"
                         />
                         {isCenter && (
                           <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#D4AF37]/30 text-xs font-mono text-[#D4AF37] tracking-widest shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                             {String(index + 1).padStart(2, '0')} / {String(post.slides.length).padStart(2, '0')}
                           </div>
                         )}
                      </motion.div>
                    );
                  })}
               </div>

               {/* 3D Navigation Overlays */}
               <div className="absolute top-1/2 -translate-y-1/2 w-full max-w-[90rem] flex justify-between px-4 md:px-12 pointer-events-none z-50">
                  <button 
                    onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
                    disabled={activeIndex === 0}
                    className={`pointer-events-auto p-4 rounded-full backdrop-blur-md border border-white/10 transition-all duration-300 ${activeIndex === 0 ? 'opacity-0 translate-x-4' : 'opacity-100 bg-black/50 hover:bg-[#D4AF37] text-white hover:text-black hover:scale-110'}`}
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={() => setActiveIndex(Math.min(post.slides.length - 1, activeIndex + 1))}
                    disabled={activeIndex === post.slides.length - 1}
                    className={`pointer-events-auto p-4 rounded-full backdrop-blur-md border border-white/10 transition-all duration-300 ${activeIndex === post.slides.length - 1 ? 'opacity-0 -translate-x-4' : 'opacity-100 bg-black/50 hover:bg-[#D4AF37] text-white hover:text-black hover:scale-110'}`}
                  >
                    <ChevronRight size={24} />
                  </button>
               </div>
            </motion.div>
          )}

          {/* SWIPE GRID MODE (Framer Motion Drag) */}
          {viewMode === 'swipe' && (
            <motion.div
              key="swipe-mode"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5 }}
              className="w-full flex justify-center"
            >
               <motion.div 
                  ref={carouselRef}
                  className="w-[95vw] md:w-[90vw] overflow-hidden cursor-grab active:cursor-grabbing pb-8"
                >
                  <motion.div 
                    drag="x"
                    dragConstraints={{ right: 0, left: -dragWidth }}
                    dragElastic={0.1}
                    className="flex gap-6 px-4 md:px-12 w-max"
                  >
                    {post.slides.map((slide, index) => (
                      <motion.div 
                        key={index}
                        className="relative flex-shrink-0 w-[85vw] sm:w-[450px] aspect-[4/5] rounded-xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] ring-1 ring-white/10 group select-none hover:ring-[#D4AF37]/50 transition-colors duration-500"
                      >
                        <img 
                          src={slide} 
                          alt={`${post.title} — Slide ${index + 1} of ${post.slides.length}`} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02] pointer-events-none"
                          draggable="false"
                        />
                        
                        <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs font-mono text-white tracking-widest pointer-events-none">
                          {String(index + 1).padStart(2, '0')} / {String(post.slides.length).padStart(2, '0')}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
            </motion.div>
          )}

        </AnimatePresence>
      </section>

      {/* POST INFORMATION / CAPTION */}
      <section className="max-w-3xl mx-auto px-6 relative z-10 mt-4">
        <div className="border border-white/10 rounded-2xl bg-[#0B0B0D]/80 p-6 md:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          {/* Subtle gradient glow inside card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

          {/* Action Bar (Like, Comment, Share, Save) */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
             <div className="flex gap-4">
                <button className="text-white hover:text-[#D4AF37] transition-colors hover:scale-110 active:scale-95"><Heart size={24} /></button>
                <button className="text-white hover:text-[#D4AF37] transition-colors hover:scale-110 active:scale-95"><MessageCircle size={24} className="scale-x-[-1]" /></button>
                <button className="text-white hover:text-[#D4AF37] transition-colors hover:scale-110 active:scale-95"><Share2 size={24} /></button>
             </div>
             <button className="text-white hover:text-[#D4AF37] transition-colors hover:scale-110 active:scale-95"><Bookmark size={24} /></button>
          </div>

          <div className="flex items-center gap-3 mb-6">
             <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#D4AF37] to-white/20 p-[2px] shadow-lg shadow-[#D4AF37]/20">
               <div className="w-full h-full bg-[#0B0B0D] rounded-full flex items-center justify-center font-bold tracking-tighter text-sm">
                  BGR
               </div>
             </div>
             <div>
                <p className="font-bold text-sm tracking-wide">bgr_dev.studio</p>
                <p className="text-xs text-[#D4AF37]">Premium UI/UX Agency</p>
             </div>
          </div>

          <div className="prose prose-invert prose-p:text-gray-300 prose-p:font-light prose-p:leading-relaxed prose-a:text-[#D4AF37] max-w-none mb-8">
            <p className="text-lg md:text-xl font-medium text-white mb-4">
               {post.excerpt}
            </p>
            <p>
              In our latest masterclass, we break down exactly how elite brands command attention not just through aesthetics, but through rigorous architectural design and psychology. We dissect the precise elements—from strict typographic hierarchies to the subtleties of high-framerate dynamic gradients—that set a digital experience apart as genuinely luxurious. 
            </p>
            <p>
              When your users interact with an interface designed at this level, their perception of your brand’s value multiplies exponentially. It's the difference between a product that works, and a product that mesmerizes. 
            </p>
            
            <p className="text-[#D4AF37] font-medium mt-6 tracking-wide">
              #UIUXDesign #LuxuryBranding #WebDevelopment #FrontendEngineering #DesignSystems
            </p>
          </div>

          <Link to="/" className="inline-flex items-center justify-center w-full sm:w-auto gap-3 bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-[#D4AF37] hover:text-black transition-all duration-300 shadow-xl hover:shadow-[#D4AF37]/20 hover:-translate-y-1">
             Start Your Project
             <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
