import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'internships', label: 'Internships' },
  { id: 'certificates', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scrolling (progress indicator + spy highlights + navbar shrinking)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Calculate scroll progress percentage
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalScroll = docHeight - winHeight;
      const progress = totalScroll > 0 ? (scrollY / totalScroll) * 100 : 0;
      setScrollProgress(progress);

      // Add border/shadow when user scrolls
      setIsScrolled(scrollY > 20);

      // Section Scroll Spy
      let currentSection = 'home';
      for (const item of NAV_ITEMS) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If top of section is within upper half of the viewport
          if (rect.top <= winHeight * 0.3) {
            currentSection = item.id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div 
        id="scroll-progress" 
        style={{ width: `${scrollProgress}%` }} 
      />

      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50 rounded-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-800/50 shadow-premium backdrop-blur-md py-3 px-6'
            : 'bg-white/40 dark:bg-slate-950/40 border border-slate-200/20 dark:border-slate-800/10 shadow-sm backdrop-blur-sm py-4 px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <div 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 cursor-none select-none font-bold text-lg tracking-tight bg-gradient-to-r from-indigo-600 via-purple-500 to-cyan-500 bg-clip-text text-transparent group hover:scale-105 transition-transform duration-300"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-black text-sm shadow-md group-hover:shadow-neon-indigo transition-shadow">
              AR
            </div>
            <span>AyushiRai<span className="text-indigo-600 dark:text-cyan-400">.</span></span>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1.5 relative">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-1.5 text-sm font-semibold transition-colors duration-300 cursor-none ${
                    isActive 
                      ? 'text-indigo-600 dark:text-cyan-400' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                  }`}
                >
                  {/* Slider Capsule indicator */}
                  {isActive && (
                    <span className="active-slider-tab absolute inset-0 bg-indigo-500/5 dark:bg-cyan-500/10 rounded-full border border-indigo-500/10 dark:border-cyan-500/20 z-[-1] pointer-events-none" />
                  )}
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Actions Block */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-magnetic flex items-center gap-1.5 px-4.5 py-2 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 rounded-full transition-colors shadow-md hover:shadow-neon-indigo"
            >
              Hire Me
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Actions Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full border border-slate-200/50 dark:border-slate-800/50 bg-white/70 dark:bg-slate-900/70 shadow-sm cursor-none text-slate-700 dark:text-slate-300"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-md z-40 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-24 left-1/2 -translate-x-1/2 w-[90%] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-2xl transition-transform duration-300 flex flex-col gap-4 ${
            mobileMenuOpen ? 'translate-y-0 scale-100' : '-translate-y-8 scale-95'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-5 py-3 rounded-2xl text-base font-bold transition-all ${
                    isActive
                      ? 'bg-indigo-500/10 text-indigo-600 dark:bg-cyan-500/10 dark:text-cyan-400 border-l-4 border-indigo-600 dark:border-cyan-400'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full text-center py-3.5 mt-2 font-black text-white bg-indigo-600 dark:bg-indigo-600 rounded-2xl shadow-lg hover:bg-indigo-700"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </>
  );
}
