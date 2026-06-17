import React, { useState, useEffect } from 'react';
import { ArrowDown, Mail, Cpu, Play } from 'lucide-react';
import { Github, Linkedin } from '../../components/SocialIcons';

const TYPING_TAGS = [
  "AI/ML Engineer",
  "Full Stack Developer",
  "Web developer",
  "Python Developer",
  "Data Analyst"
];

export default function Home() {
  const [currentTagIndex, setCurrentTagIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [terminalTab, setTerminalTab] = useState('server');

  // Auto typing state machine
  useEffect(() => {
    const activeWord = TYPING_TAGS[currentTagIndex];
    let timer;

    if (isDeleting) {
      // Deleting text
      timer = setTimeout(() => {
        setDisplayedText(activeWord.substring(0, displayedText.length - 1));
        setTypingSpeed(50); // Deleting is faster
      }, typingSpeed);
    } else {
      // Typing text
      timer = setTimeout(() => {
        setDisplayedText(activeWord.substring(0, displayedText.length + 1));
        setTypingSpeed(110);
      }, typingSpeed);
    }

    // Switch states
    if (!isDeleting && displayedText === activeWord) {
      // Pause at full word before deleting
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      // Switch to next word
      setCurrentTagIndex((prev) => (prev + 1) % TYPING_TAGS.length);
      setTypingSpeed(300); // Small pause before writing new word
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTagIndex, typingSpeed]);

  const handleScrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Dynamic Glowing Ambient Blobs */}
      <div className="glow-orb w-72 h-72 bg-indigo-400/25 dark:bg-indigo-500/10 top-1/4 left-1/4 animate-float" />
      <div className="glow-orb w-80 h-80 bg-cyan-400/25 dark:bg-cyan-500/10 bottom-1/4 right-1/4 animate-float-delayed" />
      <div className="glow-orb w-64 h-64 bg-rose-400/15 dark:bg-rose-500/5 top-1/3 right-1/3 animate-pulse-slow" />

      <div className="w-[92%] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Heading and Core Copy */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Animated greeting badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-550/20 text-emerald-700 dark:text-cyan-400 dark:bg-cyan-500/5 dark:border-cyan-400/10 text-xs font-bold tracking-wider uppercase mb-6 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 dark:bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600 dark:bg-cyan-400"></span>
            </span>
            Actively Seeking Job Opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] mb-5 tracking-tight animate-fade-in-up">
            Hi, I'm <span className="bg-gradient-to-r from-indigo-600 via-purple-500 to-cyan-500 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">Ayushi Rai</span>
          </h1>

          {/* Typing Effect Tagline */}
          <div className="h-10 sm:h-12 flex items-center mb-6 text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300">
            <span>A Passionate&nbsp;</span>
            <span className="text-indigo-600 dark:text-cyan-400 border-r-2 border-indigo-600 dark:border-cyan-400 animate-pulse pr-1">
              {displayedText}
            </span>
          </div>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl mb-8 leading-relaxed">
            I specialize in engineering intelligent digital pipelines—bridging Full-Stack MERN applications, automated Python workflows, Machine Learning models, and interactive Data Analytics dashboards.
          </p>

          {/* Magnetic CTA Buttons */}
          <div className="flex flex-wrap gap-4 items-center mb-10">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-magnetic px-7 py-3.5 text-sm font-bold text-white bg-slate-900 dark:bg-indigo-600 hover:bg-slate-800 dark:hover:bg-indigo-500 rounded-full shadow-lg transition-transform"
            >
              Explore Projects
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-magnetic px-7 py-3.5 text-sm font-bold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 hover:bg-slate-100/60 dark:hover:bg-slate-800 rounded-full shadow-sm"
            >
              Let's Talk
            </button>
          </div>

          {/* Social Links Panel */}
          <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
            <span className="text-xs uppercase tracking-widest font-black text-slate-400">Follow Me:</span>
            <a 
              href="https://github.com/Ayushirai879-java" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 rounded-full hover:bg-indigo-50 dark:hover:bg-indigo-950/30 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors duration-300 cursor-none"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ayushi-rai-66b260287" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 rounded-full hover:bg-indigo-50 dark:hover:bg-indigo-950/30 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors duration-300 cursor-none"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:raiayushi381@gmail.com" 
              className="p-2 rounded-full hover:bg-indigo-50 dark:hover:bg-indigo-950/30 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors duration-300 cursor-none"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Column: Code Terminal Sandbox Visual */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="w-full max-w-[420px] rounded-3xl overflow-hidden glass-card shadow-2xl p-5 border border-indigo-100/50 dark:border-slate-800/80 relative group hover:shadow-premium-hover transition-all duration-300 animate-float">
            {/* Top window headers */}
            <div className="flex items-center justify-between border-b border-slate-200/50 dark:border-slate-800/60 pb-3 mb-3.5">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400 block animate-pulse" />
                <span className="w-3 h-3 rounded-full bg-amber-400 block" />
                <span className="w-3 h-3 rounded-full bg-green-400 block" />
              </div>
              <span className="text-[11px] font-black tracking-widest text-slate-400 flex items-center gap-1 uppercase">
                <Cpu className="w-3.5 h-3.5 text-indigo-500 animate-spin-slow" />
                ayushi-console.sh
              </span>
            </div>

            {/* Coder Console Content Area */}
            <div className="font-mono text-xs text-left leading-relaxed text-slate-600 dark:text-slate-355 p-2 overflow-hidden h-[290px] flex flex-col justify-between">
              
              {/* Tab Selector Buttons */}
              <div className="flex items-center gap-1.5 border-b border-slate-200/40 dark:border-slate-800/50 pb-2.5 mb-2.5">
                {['server', 'config', 'health'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setTerminalTab(tab)}
                    className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase cursor-none transition-all ${
                      terminalTab === tab
                        ? 'bg-indigo-500/10 text-indigo-600 dark:bg-cyan-500/10 dark:text-cyan-400 border border-indigo-500/15 dark:border-cyan-500/20'
                        : 'text-slate-400 hover:text-slate-650 dark:hover:text-slate-205'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Dynamic Console screens */}
              <div className="flex-1 overflow-hidden flex flex-col justify-center">
                {terminalTab === 'server' && (
                  <div className="animate-fade-in-up space-y-1 text-[11px]">
                    <span className="text-cyan-600 dark:text-cyan-400">~/ayushi-portfolio</span>
                    <span className="text-slate-400"> (main)</span>
                    <br />
                    <span className="text-rose-500">$</span> npm run build --analytics
                    <br />
                    <span className="text-green-500 font-bold">✔</span> Production assets successfully compiled
                    <br />
                    <span className="text-slate-400">  ➜  Files:   </span>
                    <span className="text-indigo-600 dark:text-indigo-400">index.html (1.01kB), index.js (272kB)</span>
                    <br />
                    <span className="text-slate-400">  ➜  Status:  </span>
                    <span className="text-emerald-500 font-bold">Live & Operational</span>
                    <br />
                    <span className="text-slate-400">  ➜  Actions: </span>
                    <a href="#about" className="text-indigo-650 dark:text-cyan-400 underline decoration-indigo-400 cursor-none">Scroll to explore CV</a>
                  </div>
                )}

                {terminalTab === 'config' && (
                  <div className="font-mono text-[10px] leading-relaxed text-slate-500 dark:text-slate-400 animate-fade-in-up overflow-y-auto max-h-[160px] pr-1">
                    <span className="text-indigo-600 dark:text-indigo-400">const</span> developer = &#123;
                    <br />
                    &nbsp;&nbsp;name: <span className="text-emerald-600 dark:text-emerald-400">"Ayushi Rai"</span>,
                    <br />
                    &nbsp;&nbsp;roles: [
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-600 dark:text-emerald-400">"AI/ML Engineer"</span>,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-600 dark:text-emerald-400">"Full Stack Developer"</span>,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-600 dark:text-emerald-400">"Python Developer"</span>,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-600 dark:text-emerald-400">"Data Analyst"</span>
                    <br />
                    &nbsp;&nbsp;],
                    <br />
                    &nbsp;&nbsp;cgpa: <span className="text-amber-500 font-bold">9.78</span>,
                    <br />
                    &nbsp;&nbsp;skills: &#123;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;ai_ml: [<span className="text-cyan-600 dark:text-cyan-400">"Scikit-Learn"</span>, <span className="text-cyan-600 dark:text-cyan-400">"LLMs"</span>, <span className="text-cyan-600 dark:text-cyan-400">"Gekko"</span>],
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;full_stack: [<span className="text-cyan-600 dark:text-cyan-400">"React"</span>, <span className="text-cyan-600 dark:text-cyan-400">"Node"</span>, <span className="text-cyan-600 dark:text-cyan-400">"MongoDB"</span>],
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;python: [<span className="text-cyan-600 dark:text-cyan-400">"Flask"</span>, <span className="text-cyan-600 dark:text-cyan-400">"Pandas"</span>, <span className="text-cyan-600 dark:text-cyan-400">"NumPy"</span>],
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;analytics: [<span className="text-cyan-600 dark:text-cyan-400">"Tableau"</span>, <span className="text-cyan-600 dark:text-cyan-400">"Power BI"</span>, <span className="text-cyan-600 dark:text-cyan-400">"SQL"</span>]
                    <br />
                    &nbsp;&nbsp;&#125;,
                    <br />
                    &nbsp;&nbsp;status: <span className="text-emerald-650 dark:text-cyan-400">"Actively Seeking Roles"</span>
                    <br />
                    &#125;;
                  </div>
                )}

                {terminalTab === 'health' && (
                  <div className="space-y-3 animate-fade-in-up w-full">
                    <div className="flex justify-between items-center text-[10px] sm:text-[11px] font-bold">
                      <span className="text-slate-400 uppercase tracking-wider">Site Performance</span>
                      <span className="text-emerald-500 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 block animate-ping" />
                        98/100 (EXCELLENT)
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center text-[10px] font-mono text-slate-450">
                        <span>Bundle Optimization</span>
                        <span>96% Optimized</span>
                      </div>
                      <div className="w-full h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="w-[96%] h-full bg-emerald-500 rounded-full" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center text-[10px] font-mono text-slate-450">
                        <span>MERN State Hydration</span>
                        <span>Synced (100% Operational)</span>
                      </div>
                      <div className="w-full h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="w-[100%] h-full bg-indigo-500 rounded-full" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center text-[10px] font-mono text-slate-450">
                        <span>AI Integration Telemetry</span>
                        <span>Active (Codec Chatbot Engine)</span>
                      </div>
                      <div className="w-full h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="w-[97%] h-full bg-cyan-500 rounded-full" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom footer bar */}
              <div className="bg-slate-100/85 dark:bg-slate-950/60 p-3 rounded-2xl border border-slate-200/30 dark:border-slate-800/60 flex items-center gap-3 mt-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center text-white">
                  <Play className="w-3.5 h-3.5 fill-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-black text-slate-700 dark:text-slate-200 truncate">AyushiRai.compile()</p>
                  <p className="text-[10px] text-slate-400 truncate">Status: Ready to deploy production build</p>
                </div>
              </div>
            </div>

            {/* Glowing borders hover indicator */}
            <div className="absolute inset-0 border border-transparent rounded-3xl group-hover:border-indigo-500/25 pointer-events-none transition-all duration-300" />
          </div>
        </div>

      </div>

      {/* Floating Scroll Indicator arrow */}
      <button 
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors duration-300 animate-bounce cursor-none"
        aria-label="Scroll to About Section"
      >
        <span className="text-[10px] tracking-widest font-black uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </button>
    </section>
  );
}
