import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check saved theme preference or system default
    const savedTheme = localStorage.getItem('portfolio-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.body.classList.add('dark');
      setIsDark(true);
    } else {
      document.body.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.body.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
      setIsDark(false);
    } else {
      document.body.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-full bg-white/80 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/60 shadow-premium hover:shadow-premium-hover transition-all duration-300 group cursor-none hover:scale-105 active:scale-95"
      aria-label="Toggle visual theme mode"
    >
      <div className="relative w-5 h-5 overflow-hidden">
        {/* Sun Icon */}
        <span
          className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ${
            isDark ? 'rotate-90 scale-0' : 'rotate-0 scale-100'
          }`}
        >
          <Sun className="w-5 h-5 text-amber-500 group-hover:rotate-45 transition-transform duration-500" />
        </span>
        {/* Moon Icon */}
        <span
          className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ${
            isDark ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
          }`}
        >
          <Moon className="w-5 h-5 text-indigo-400 group-hover:-rotate-12 transition-transform duration-500" />
        </span>
      </div>
    </button>
  );
}
