import { useState } from 'react';
import { User, BookOpen, Heart, ArrowDownToLine, Loader2, Check } from 'lucide-react';
import Card3D from '../../components/Card3D/Card3D';

const TAB_DATA = {
  story: {
    icon: <User className="w-4 h-4" />,
    label: "My Story",
    content: (
      <div className="space-y-4">
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          I am a passionate computer science graduate who loves exploring different areas of technology. As a student, I enjoy building interactive web applications using the MERN stack, analyzing data to find interesting patterns, and working with machine learning models and AI tools.
        </p>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Beyond coding and technical research (like presenting at university conventions), I love taking on leadership roles and organizing tech events. I am always excited to learn new skills, collaborate on team projects, and solve real-world problems.
        </p>
      </div>
    )
  },
  education: {
    icon: <BookOpen className="w-4 h-4" />,
    label: "Education",
    content: (
      <div className="space-y-4 relative pl-4 border-l-2 border-indigo-100 dark:border-slate-800 max-h-[220px] overflow-y-auto pr-1">
        <div className="relative">
          <span className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-indigo-600 dark:bg-cyan-400" />
          <h4 className="text-sm sm:text-base font-bold text-slate-800 dark:text-white">B.Sc. in Computer Science</h4>
          <p className="text-xs text-indigo-600 dark:text-cyan-400 font-bold">Mumbai University | Annasaheb Vartak College • 2023 — 2026</p>
          <p className="text-xs sm:text-sm text-slate-550 dark:text-slate-300 mt-1 font-bold">Final CGPA: 9.78 (Outstanding Academic Record. Sem 2 & Sem 6: 10.00 GPA)</p>
          {/* <ul className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 list-disc pl-4 space-y-1">
            <li>Pioneered machine learning research on resource routing optimization, leading to selection for the prestigious <span className="font-semibold text-slate-700 dark:text-slate-300">Avishkar Mumbai University Research Convention</span>.</li>
            <li>Completed curriculum modules aligned with <span className="font-semibold text-slate-700 dark:text-slate-300">Stanford CS229 (Machine Learning)</span> and <span className="font-semibold text-slate-700 dark:text-slate-300">UC Berkeley CS188 (Intro to AI)</span> standards.</li>
          </ul> */}
        </div>
        <div className="relative pt-2">
          <span className="absolute -left-[21px] top-3.5 w-2 h-2 rounded-full bg-indigo-600 dark:bg-cyan-400" />
          <h4 className="text-sm sm:text-base font-bold text-slate-800 dark:text-white">Advanced Diploma in Software Engineering</h4>
          <p className="text-xs text-indigo-600 dark:text-cyan-400 font-bold">Itech Computer Education • 2024 — Present</p>
        </div>
        <div className="relative pt-2">
          <span className="absolute -left-[21px] top-3.5 w-2 h-2 rounded-full bg-indigo-600 dark:bg-cyan-400" />
          <h4 className="text-sm sm:text-base font-bold text-slate-800 dark:text-white">HSC (Class 12)</h4>
          <p className="text-xs text-indigo-600 dark:text-cyan-400 font-bold">Maharashtra State Board | Annasaheb Vartak College • 2023</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Scored: 90.00%</p>
        </div>
        <div className="relative pt-2">
          <span className="absolute -left-[21px] top-3.5 w-2 h-2 rounded-full bg-indigo-600 dark:bg-cyan-400" />
          <h4 className="text-sm sm:text-base font-bold text-slate-800 dark:text-white">SSC (Class 10)</h4>
          <p className="text-xs text-indigo-600 dark:text-cyan-400 font-bold">Maharashtra State Board | J.B.S High School • 2021</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Scored: 98.60%</p>
        </div>
      </div>
    )
  },
  interests: {
    icon: <Heart className="w-4 h-4" />,
    label: "Interests",
    content: (
      <div className="grid grid-cols-2 gap-3.5">
        {[
          { name: "Machine Learning", desc: "Scikit-Learn classification & regressions" },
          { name: "Generative AI / LLMs", desc: "Context engineering & API workflows" },
          { name: "Data Science & Analysis", desc: "Pandas, NumPy, and Tableau dashboards" },
          { name: "Full-Stack MERN / Web Development", desc: "Interactive dashboards & APIs" },
          { name: "Technical Research & Presentation", desc: "Avishkar Convention presenter & writer" },
          { name: "Leadership", desc: "School HeadGirl & tech coordinator" },
        ].map((interest, idx) => (
          <div 
            key={idx} 
            className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/40 text-left transition-colors hover:border-indigo-100 dark:hover:border-slate-800"
          >
            <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">{interest.name}</p>
            <p className="text-[10px] sm:text-xs text-slate-400">{interest.desc}</p>
          </div>
        ))}
      </div>
    )
  }
};

export default function About() {
  const [activeTab, setActiveTab] = useState('story');
  const [downloadState, setDownloadState] = useState('idle'); // idle -> loading -> success

  const triggerDownload = () => {
    setDownloadState('loading');
    setTimeout(() => {
      setDownloadState('success');
      // Trigger actual PDF file download
      const tempLink = document.createElement('a');
      tempLink.href = '/Ayushi_Rai_Resume.pdf';
      tempLink.setAttribute('download', 'Ayushi_Rai_Resume.pdf');
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
      // Timeout to return back to idle state
      setTimeout(() => {
        setDownloadState('idle');
      }, 2500);
    }, 2000);
  };

  return (
    <section 
      id="about" 
      className="py-24 w-full bg-white dark:bg-slate-950 transition-colors duration-500 relative"
    >
      <div className="w-[92%] max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Heading with text scramble highlight */}
        <div className="mb-16 text-center">
          <span className="text-xs font-black tracking-widest text-indigo-600 dark:text-cyan-400 uppercase mb-2 block">
            01 / WHO I AM
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About My Professional Craft
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* Left Column: Portrait Card with 3D perspective */}
          <div className="lg:col-span-5 flex justify-center">
            <Card3D className="w-full max-w-[380px] aspect-[4/5] rounded-[32px] overflow-hidden group bg-gradient-to-br from-indigo-600/10 via-purple-600/5 to-cyan-500/10 dark:from-indigo-950/20 dark:to-slate-900 border border-slate-200/50 dark:border-slate-800/80 shadow-premium project-card-glow">
              <div className="w-full h-full relative">
                
                {/* Full-bleed self photo */}
                <img 
                  src="/self.jpg" 
                  alt="Ayushi Rai"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = '<div class="absolute inset-0 bg-slate-900 flex items-center justify-center text-white text-4xl font-black">AR</div>';
                  }}
                />

                {/* Dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent z-10" />

                {/* Floating glassmorphic info panel at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                  <div className="bg-white/10 dark:bg-slate-950/45 backdrop-blur-md border border-white/15 dark:border-white/5 p-4 rounded-2xl shadow-lg">
                    <div className="mb-2">
                      <h3 className="text-lg font-bold text-white tracking-tight">Ayushi Rai</h3>
                      <p className="text-[10px] text-indigo-400 dark:text-cyan-400 font-extrabold tracking-widest uppercase mt-0.5">AI/ML ENGINEER / MERN DEVELOPER</p>
                    </div>

                    <div className="w-full bg-black/30 py-2.5 px-3.5 rounded-xl border border-white/5 text-left">
                      <div className="flex justify-between items-center text-[11px] mb-1.5 text-slate-300">
                        <span>Stack Depth</span>
                        <span className="font-bold text-white">100% Full</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cyber decorative grid dots */}
                <div className="absolute top-4 right-4 text-white/20 font-black text-4xl select-none font-mono z-20">
                  + +
                </div>
              </div>
            </Card3D>
          </div>

          {/* Right Column: Narrative Biography & Tabs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-4">
              Building Intelligent Pipelines & Full-Stack Systems
            </h3>
            
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              I bridge the gap between machine learning pipelines and functional, responsive web interfaces. By combining backend Python Flask or Express APIs with data analysis frameworks and dynamic React dashboards, I construct complete, production-ready AI solutions.
            </p>

            {/* Sub-section tab buttons */}
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900/80 p-1 rounded-full border border-slate-200/50 dark:border-slate-800/50 mb-6 w-full max-w-[440px]">
              {Object.keys(TAB_DATA).map((tabKey) => {
                const tab = TAB_DATA[tabKey];
                const isActive = activeTab === tabKey;
                return (
                  <button
                    key={tabKey}
                    onClick={() => setActiveTab(tabKey)}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs sm:text-sm font-bold rounded-full transition-all cursor-none ${
                      isActive
                        ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-cyan-400 shadow-sm border border-slate-200/30 dark:border-slate-700/30'
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Tab content panel */}
            <div className="p-6 rounded-[24px] bg-slate-50/70 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800/40 w-full min-h-[175px] mb-8">
              {TAB_DATA[activeTab].content}
            </div>

            {/* Interactive Resume Download Trigger */}
            <button
              onClick={triggerDownload}
              disabled={downloadState === 'loading'}
              className={`btn-magnetic min-w-[210px] h-12 flex items-center justify-center gap-2 rounded-full text-sm font-bold transition-all shadow-md ${
                downloadState === 'loading'
                  ? 'bg-indigo-50 text-indigo-600 dark:bg-cyan-950/20 dark:text-cyan-400 border border-indigo-200/30 cursor-not-allowed'
                  : downloadState === 'success'
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/10'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-neon-indigo'
              }`}
            >
              {downloadState === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Generating Asset...
                </>
              ) : downloadState === 'success' ? (
                <>
                  <Check className="w-4 h-4" />
                  Resume Acquired!
                </>
              ) : (
                <>
                  <ArrowDownToLine className="w-4 h-4 animate-bounce" />
                  Download CV
                </>
              )}
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
