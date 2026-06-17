import React from 'react';
import { Calendar, Briefcase, Award, ArrowUpRight } from 'lucide-react';
import Card3D from '../../components/Card3D/Card3D';

const INTERNSHIPS_DATA = [
  {
    role: "AI Developer Intern",
    company: "Codec Technologies",
    logo: "C",
    color: "from-emerald-500 to-teal-600",
    duration: "1 Month Virtual Internship",
    location: "Virtual",
    bulletPoints: [
      "Designed and optimized advanced prompt engineering pipelines and custom system prompts for LLM-based virtual agents, increasing task-completion accuracy.",
      "Developed Python Flask middleware to securely orchestrate OpenAI/OpenRouter AI API queries with MERN-backed context data streams.",
      "Engineered dynamic AI chatbot interfaces featuring custom context histories, responsive loading indicators, and structured JSON-schema outputs."
    ],
    tech: ["Generative AI","Machine Learning Concepts and algorithms","Python ML Libraries","Prompt Engineering", "Python Flask", "LLM APIs", "JSON-Schema"]
  },
  {
    role: "Data Analyst Intern",
    company: "Excelerate",
    logo: "E",
    color: "from-blue-600 to-indigo-650",
    duration: "2 Month Virtual Internship",
    location: "Virtual",
    bulletPoints: [
      "Conducted detailed data ingestion and statistical exploration (EDA) using Pandas and NumPy libraries on tabular records.",
      "Constructed dynamic KPI dashboards in Tableau and Power BI, mapping visual analytics workflows to support data-driven decisions.",
      "Formulated linear regression analyses and statistical correlation metrics to isolate anomaly markers in target datasets."
    ],
    tech: ["Pandas & NumPy", "Tableau", "Power BI", "Excel","Data Cleaning and Preprocessing","Data Exploration", "Statistical Analytics"]
  },
  {
    role: "Virtual Intern",
    company: "Nobel Learning PBC",
    logo: "N",
    color: "from-violet-500 to-purple-650",
    duration: "2 Month Virtual Internship",
    location: "Virtual",
    bulletPoints: [
      "As a part of my internship at Nobel Learning PBC, I had the opportunity to grow in a dynamic, education-focused environment, contributing to impactful digital initiatives while developing a strong foundation in both technical and soft skills.",
      "Developed web design and internet troubleshooting skills while supporting educational platforms and improving user experience.",
      "Strengthened communication, public speaking, presentation, and idea-pitching abilities through collaborative activities and discussions.",
      "Demonstrated leadership, teamwork, problem-solving, and time management skills by contributing to group projects and meeting deadlines in a fast-paced environment.",
    ],
    tech: ["Project Milestones", "Idea Pitching", "Web Design & Internet Troubleshooting", "Leadership","Time Management", "Team Collaboration", "Technical Presentations"]
  }
];

export default function Internships() {
  return (
    <section 
      id="internships" 
      className="py-24 w-full bg-slate-50 dark:bg-slate-900/40 transition-colors duration-500 relative bg-grid-pattern"
    >
      <div className="w-[92%] max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <span className="text-xs font-black tracking-widest text-indigo-600 dark:text-cyan-400 uppercase mb-2 block">
            04 / EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Industry Internships
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Timeline container */}
        <div className="relative w-full max-w-4xl mt-12">
          
          {/* Vertical central pipeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line rounded-full -translate-x-1/2 opacity-30 dark:opacity-20" />

          {/* Timeline Nodes */}
          <div className="space-y-16">
            {INTERNSHIPS_DATA.map((job, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <div 
                  key={idx}
                  className={`flex flex-col md:flex-row items-start relative w-full ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Central Badge Indicator Node */}
                  <div className="absolute left-6 md:left-1/2 w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-600 dark:border-cyan-400 flex items-center justify-center -translate-x-1/2 z-10 shadow-md group-hover:scale-110 transition-transform">
                    <Briefcase className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Active Card Column */}
                  <div className="w-full md:w-1/2 pl-14 md:pl-0 md:px-10 text-left">
                    <Card3D className="glass-card rounded-[32px] p-6 sm:p-8 border border-slate-200/50 dark:border-slate-800/80 shadow-premium flex flex-col group hover:shadow-premium-hover">
                      
                      {/* Logo and Job Info */}
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-5 pb-4 border-b border-slate-200/40 dark:border-slate-800/50">
                        <div className="flex items-center gap-3.5">
                          <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${job.color} flex items-center justify-center text-white text-base font-black shadow-md`}>
                            {job.logo}
                          </div>
                          <div>
                            <h3 className="font-extrabold text-base sm:text-lg text-slate-800 dark:text-white leading-tight group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                              {job.role}
                            </h3>
                            <p className="text-xs sm:text-sm font-black text-slate-500 dark:text-slate-400 mt-0.5">
                              {job.company}
                            </p>
                          </div>
                        </div>

                        {/* Duration Badge */}
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800 text-[10px] sm:text-xs font-bold text-slate-600 dark:text-slate-300">
                          <Calendar className="w-3.5 h-3.5 text-indigo-500 dark:text-cyan-400" />
                          {job.duration}
                        </div>
                      </div>

                      {/* Location details */}
                      <p className="text-xs font-bold text-indigo-600 dark:text-cyan-400 uppercase tracking-widest mb-4">
                        📍 {job.location}
                      </p>

                      {/* Bullet points */}
                      <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        {job.bulletPoints.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 leading-relaxed">
                            <span className="text-indigo-500 dark:text-cyan-400 font-black mt-1">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech badges */}
                      <div className="flex flex-wrap gap-1.5">
                        {job.tech.map((tool, tIdx) => (
                          <span 
                            key={tIdx}
                            className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200/20 dark:border-slate-800/60 text-[10px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                    </Card3D>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
