import React, { useEffect } from 'react';
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
import { ProjectDetail } from './pages/ProjectDetail';
import { PostDetail } from './pages/PostDetail';
import { Works } from './pages/Works';
import { Posts } from './pages/Posts';
import '../styles/fonts.css';

function Home() {
  return (
    <main className="flex-grow">
      <Hero />
      <Services />
      <SelectedWork />
      <WhyUs />
      <Process />
      <Insights />
      <CTA />
    </main>
  );
}

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
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/post/:id" element={<PostDetail />} />
          </Routes>

          <Footer />
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
