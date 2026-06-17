import React, { useState, useEffect } from 'react';
import { Layout, Server, Database, Terminal, Settings2 } from 'lucide-react';
import Card3D from '../../components/Card3D/Card3D';

const SKILLS_DATA = [
  {
    category: "AI, ML & Libraries",
    icon: <Database className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />,
    skills: [
      { name: "Machine Learning (ML)", level: 88, desc: "Regression models, Scikit-Learn classifiers, decision trees" },
      { name: "Pandas & NumPy", level: 90, desc: "Multidimensional arrays, data cleaning pipelines, data frames aggregates" },
      { name: "Generative AI & LLMs", level: 95, desc: "Prompt engineering, OpenAI/OpenRouter AI API chatbot workflow designs" },
      { name: "Matplotlib & Scikit-Learn", level: 85, desc: "Mathematical optimizations, analytics charting, curve fits" }
    ]
  },
  {
    category: "Programming & Backend",
    icon: <Server className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />,
    skills: [
      { name: "Python / Flask", level: 90, desc: "Script automation modules, backend APIs, data structures" },
      { name: "Node.js / Express", level: 85, desc: "Full-stack server APIs, routing controllers, custom middleware layers" },
      { name: "PHP / MySQL / MongoDB", level: 86, desc: "Dynamic relational databases, query optimizations, schema structures" },
      { name: "C / C++", level: 82, desc: "Memory arrays matrices, low-level algorithm implementations" }
    ]
  },
  {
    category: "MERN & Frontend",
    icon: <Layout className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />,
    skills: [
      { name: "ReactJS", level: 92, desc: "Component architecture, dynamic state, modular UI controls" },
      { name: "JavaScript", level: 90, desc: "Asynchronous scripts, event loops, API client integration" },
      { name: "Tableau & Power BI", level: 88, desc: "Visual analytics dashboards, KPI trend tracking reports" },
      { name: "Tailwind CSS / HTML5", level: 95, desc: "Responsive visual styling, custom keyframe stylesheet animations" }
    ]
  }
];

export default function Skills() {
  const [animateProgress, setAnimateProgress] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Trigger skill bar filling animations shortly after loading section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateProgress(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('skills');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section 
      id="skills" 
      className="py-24 w-full bg-slate-50 dark:bg-slate-900/40 transition-colors duration-500 relative bg-grid-pattern"
    >
      <div className="w-[92%] max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-xs font-black tracking-widest text-indigo-600 dark:text-cyan-400 uppercase mb-2 block">
            02 / TECH STACK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Advanced Skill Dashboard
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Dynamic Category Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {SKILLS_DATA.map((category, catIdx) => (
            <Card3D 
              key={catIdx} 
              className="glass-card rounded-[28px] p-6 border border-slate-200/50 dark:border-slate-800/80 shadow-premium flex flex-col group h-full"
            >
              {/* Category header */}
              <div className="flex items-center gap-3.5 mb-6 border-b border-slate-200/40 dark:border-slate-800/50 pb-4">
                <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 dark:bg-cyan-500/10 flex items-center justify-center border border-indigo-500/10 dark:border-cyan-500/10 group-hover:bg-indigo-600 dark:group-hover:bg-cyan-400 group-hover:text-white transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="font-extrabold text-lg text-slate-800 dark:text-white transition-colors group-hover:text-indigo-600 dark:group-hover:text-cyan-400">
                  {category.category}
                </h3>
              </div>

              {/* Skills elements */}
              <div className="flex-1 flex flex-col gap-6 relative">
                {category.skills.map((skill, skillIdx) => {
                  const uniqueSkillId = `${catIdx}-${skillIdx}`;
                  const isThisSkillHovered = hoveredSkill === uniqueSkillId;
                  
                  return (
                    <div 
                      key={skillIdx}
                      className="relative text-left"
                      onMouseEnter={() => setHoveredSkill(uniqueSkillId)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {/* Title and Percent */}
                      <div className="flex justify-between items-center text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 mb-1.5 cursor-none">
                        <span>{skill.name}</span>
                        <span className="text-indigo-600 dark:text-cyan-400 font-black">{skill.level}%</span>
                      </div>

                      {/* Bar indicator */}
                      <div className="w-full h-2 bg-slate-200/60 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: animateProgress ? `${skill.level}%` : '0%',
                            transitionDelay: `${skillIdx * 100}ms`
                          }}
                        />
                      </div>

                      {/* Floating custom responsive tooltip */}
                      {isThisSkillHovered && (
                        <div className="absolute left-0 bottom-full mb-2 w-full max-w-[280px] bg-slate-900 text-white dark:bg-slate-950 p-3 rounded-2xl border border-slate-800/80 shadow-2xl text-xs z-30 animate-fade-in-up">
                          <p className="font-bold text-indigo-400 dark:text-cyan-400 mb-1">{skill.name} Mastery</p>
                          <p className="text-slate-300 leading-relaxed font-medium">{skill.desc}</p>
                          {/* Triangle Arrow */}
                          <div className="absolute top-full left-4 -translate-y-px border-8 border-transparent border-t-slate-900 dark:border-t-slate-950" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </Card3D>
          ))}
        </div>

        {/* Skill tags quick scan panel */}
        <div className="mt-16 glass-card rounded-3xl p-5 border border-slate-200/50 dark:border-slate-800/60 max-w-3xl w-full flex flex-wrap justify-center gap-2.5 shadow-sm">
          <span className="text-xs uppercase tracking-widest font-black text-slate-400 flex items-center gap-1.5 mr-2 self-center">
            <Settings2 className="w-4 h-4 text-indigo-500 animate-spin-slow" />
            Quick Tags:
          </span>
          {[
            "MERN Stack", "Python", "Flask", "Tableau", "Power BI", "Pandas", 
            "NumPy", "C/C++", "MySQL", "PHP", "Git", "GitHub", "Generative AI"
          ].map((tag, idx) => (
            <span 
              key={idx} 
              className="px-3.5 py-1.5 rounded-full bg-indigo-500/5 border border-indigo-500/10 dark:bg-cyan-500/5 dark:border-cyan-500/10 text-slate-600 dark:text-slate-300 text-xs font-bold transition-all hover:bg-indigo-500 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-950 hover:border-transparent hover:-translate-y-0.5"
            >
              #{tag}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
