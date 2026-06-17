import React, { useEffect } from 'react';
import CustomCursor from './components/CustomCursor/CustomCursor';
import Navbar from './components/Navbar/Navbar';
import Home from './sections/Home/Home';
import About from './sections/About/About';
import Skills from './sections/Skills/Skills';
import Projects from './sections/Projects/Projects';
import Internships from './sections/Internships/Internships';
import Certificates from './sections/Certificates/Certificates';
import Contact from './sections/Contact/Contact';
import { ArrowUp, Heart, Mail } from 'lucide-react';
import { Github, Linkedin } from './components/SocialIcons';

export default function App() {
  
  // Custom scroll reveal animation triggers
  useEffect(() => {
    const handleScrollReveal = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      const windowHeight = window.innerHeight;
      
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Element is visible when top is inside 85% of viewport
        if (rect.top <= windowHeight * 0.85) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScrollReveal);
    // Execute once initially on mount to capture top views
    setTimeout(handleScrollReveal, 100);
    
    return () => window.removeEventListener('scroll', handleScrollReveal);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden transition-colors duration-500 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-155">
      {/* Premium custom mouse cursor pointer follow */}
      <CustomCursor />

      {/* Floating dynamic glass navigation */}
      <Navbar />

      {/* Main Core Stack content */}
      <main className="w-full flex flex-col items-center">
        
        {/* Home/Hero - Initial load active */}
        <Home />
        
        {/* About Section - Scroll Reveal */}
        <div className="reveal-on-scroll w-full">
          <About />
        </div>

        {/* Skills Section - Scroll Reveal */}
        <div className="reveal-on-scroll w-full">
          <Skills />
        </div>

        {/* Projects Section - Scroll Reveal */}
        <div className="reveal-on-scroll w-full">
          <Projects />
        </div>

        {/* Internships Section - Scroll Reveal */}
        <div className="reveal-on-scroll w-full">
          <Internships />
        </div>

        {/* Certificates Section - Scroll Reveal */}
        <div className="reveal-on-scroll w-full">
          <Certificates />
        </div>

        {/* Contact Form Section - Scroll Reveal */}
        <div className="reveal-on-scroll w-full">
          <Contact />
        </div>

      </main>

      {/* Premium responsive footer */}
      <footer className="w-full bg-white dark:bg-slate-950 py-12 border-t border-slate-200/50 dark:border-slate-800/60 transition-colors duration-500 relative z-10 text-left">
        <div className="w-[92%] max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand/Credits */}
          <div className="flex flex-col gap-1.5 items-center md:items-start text-center md:text-left">
            <p className="text-sm font-black text-indigo-800 dark:text-white tracking-tight">
              Ayushi Rai<span className="text-indigo-600 dark:text-cyan-400"></span>
            </p>
            <p className="text-xs text-slate-400 flex items-center gap-1">
              {/* Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500/10" /> in California © {new Date().getFullYear()} */}
              raiayushi381@gmail.com | +91 9075246295 | Mumbai,Maharashtra,India | Copyright © {new Date().getFullYear()}
            </p>
          </div>

          {/* Socials quick links */}
          <div className="flex items-center gap-4 text-slate-400 dark:text-slate-500">
            <a 
              href="https://github.com/Ayushirai879-java" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 rounded-full border border-slate-200/30 dark:border-slate-800/50 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors cursor-none"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ayushi-rai-66b260287" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 rounded-full border border-slate-200/30 dark:border-slate-800/50 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors cursor-none"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="mailto:raiayushi381@gmail.com" 
              className="p-2 rounded-full border border-slate-200/30 dark:border-slate-800/50 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors cursor-none"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Magnetic back to top action */}
          <button
            onClick={scrollToTop}
            className="btn-magnetic p-3.5 rounded-2xl bg-indigo-500/5 dark:bg-cyan-500/5 hover:bg-indigo-600 dark:hover:bg-cyan-400 text-indigo-600 dark:text-cyan-400 hover:text-white dark:hover:text-slate-900 border border-indigo-500/10 dark:border-cyan-500/10 shadow-sm transition-all"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </footer>
    </div>
  );
}
