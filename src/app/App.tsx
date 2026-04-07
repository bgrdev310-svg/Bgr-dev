import React, { useEffect, Suspense, lazy, memo } from 'react';
import { SEO } from './components/SEO';
import { BrowserRouter, Routes, Route } from 'react-router';
import { BackgroundGradients } from './components/BackgroundGradients';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { SelectedWork } from './components/SelectedWork';
import { WhyUs } from './components/WhyUs';
import { Process } from './components/Process';
import { Insights } from './components/Insights';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import '../styles/fonts.css';

// Lazy loaded pages
const ProjectDetail = lazy(() => import('./pages/ProjectDetail').then(m => ({ default: m.ProjectDetail })));
const PostDetail = lazy(() => import('./pages/PostDetail').then(m => ({ default: m.PostDetail })));
const Works = lazy(() => import('./pages/Works').then(m => ({ default: m.Works })));
const Posts = lazy(() => import('./pages/Posts').then(m => ({ default: m.Posts })));

const Home = memo(function Home() {
  return (
    <main className="flex-grow">
      <SEO
        canonical="/"
        keywords="web design agency, premium web development, UI UX design, digital studio, brand identity, React development, high-end websites, luxury web design, conversion optimization, BGR Dev"
      />
      <Hero />
      <Services />
      <SelectedWork />
      <WhyUs />
      <Process />
      <Insights />
      <CTA />
    </main>
  );
});

function NotFound() {
  return (
    <main className="flex-grow flex items-center justify-center min-h-[60vh]">
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist."
        noIndex={true}
      />
      <div className="text-center px-6">
        <h1 className="text-8xl font-bold text-[#D4AF37] mb-4">404</h1>
        <p className="text-2xl text-gray-400 mb-8">This page doesn't exist.</p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-[#D4AF37] transition-colors duration-300"
        >
          Return Home
        </a>
      </div>
    </main>
  );
}

// Loading Fallback
const PageLoader = () => (
  <div className="flex-grow flex items-center justify-center min-h-[60vh]">
    <div className="w-12 h-12 border-4 border-[#333] border-t-[#D4AF37] rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen w-full max-w-[100vw] bg-[#0B0B0D] text-white font-['Inter'] overflow-x-hidden selection:bg-[#D4AF37] selection:text-black relative">
        {/* Global Noise Texture */}
        <div className="bg-noise" />

        {/* Background Layer */}
        <BackgroundGradients />
        
        {/* Content Layer */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/works" element={<Works />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
              <Route path="/post/:id" element={<PostDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>

          <Footer />
          <ContactModal />
        </div>

      {/* Global CSS overrides */}
      <style>{`
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #0B0B0D;
        }
        ::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #D4AF37;
        }
        
        /* Typography overrides */
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Outfit', sans-serif;
        }
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }

        /* Utility animations */
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
      </div>
    </BrowserRouter>
  );
}
