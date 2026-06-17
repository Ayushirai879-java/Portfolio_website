import { useState, useRef } from 'react';
import { Award, CheckCircle, ExternalLink, X, Calendar, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import Card3D from '../../components/Card3D/Card3D';

const CERTIFICATES_DATA = [
  {
    id: 1,
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia (via Forage)",
    date: "Jul 2025",
    code: " FySQcNqmcq9HZrvQN",
    verifyUrl: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_N4YtYj7zqg4T62was_1751815241403_completion_certificate.pdf",
    image: "/certificates/Deloitte.png",
    description: "Completed simulated data analytics sprints involving detailed database preparation, raw row data cleaning, high-fidelity Tableau dashboards, and client slides to deliver strategic data insights.",
    skills: ["Data Cleaning", "Data Visualization", "Business Strategy", "Tableau"]
  },
  {
    id: 2,
    title: "Software Engineering Job Simulation",
    issuer: "Accenture (via Forage)",
    date: "Jul 2025",
    code: "E4oennnGb5KWPtEwN",
    verifyUrl: "https://www.theforage.com/completion-certificates/xhih9yFWsf6AYfngd/HNpZwZcuYwona2d8Y_xhih9yFWsf6AYfngd_N4YtYj7zqg4T62was_1751817729076_completion_certificate.pdf",
    image: "/certificates/accenture.png",
    description: "Validated structured understanding of fundamental machine learning concepts, classification neural layers, deep search algorithms, and structured chatbot prompt guidelines.",
    skills: ["Agile Methodology", "Code Debugging", "Code Reading", "Data Analysis", "Maturity Assessment", "Problem Identification", "Secure Development", "Waterfall Methodology"]
  },
  {
    id: 3,
    title: "Prompt Engineering",
    issuer: "Infosys Springboard",
    date: "May 2026",
    code: "INF-PE-04052026",
    verifyUrl: "https://verify.onwingspan.com",
    image: "/certificates/Prompt.png",
    description: "Successfully completed prompt engineering training on Infosys Springboard, covering generative AI transformers, prompt formatting structure, few-shot contextual logic, and LLM behavior tuning.",
    skills: ["Prompt Engineering", "Large Language Models", "Generative AI", "AI Optimization"]
  },
  {
    id: 4,
    title: "Artificial Intelligence",
    issuer: "Infosys Springboard",
    date: "May 2026",
    code: "INF-AI-05052026",
    verifyUrl: "https://verify.onwingspan.com",
    image: "/certificates/AI.png",
    description: "Completed core artificial intelligence modules on Infosys Springboard, validating standard search algorithms, classification neural layers, training datasets, and ethical deployment models.",
    skills: ["Artificial Intelligence", "Machine Learning", "Algorithms", "Neural Networks"]
  },
  {
    id: 5,
    title: "Python Skill Certification Test",
    issuer: "One Roadmap",
    date: "Jun 2025",
    code: "CERT-C8CF0013",
    verifyUrl: "https://www.oneroadmap.io/skills/python/certificate/CERT-C8CF0013",
    image: "/certificates/Python.png",
    description: "Passed the professional One Roadmap Python skill test, validating proficiency in core coding concepts, data structure manipulation, script automation, and object-oriented architectures.",
    skills: ["Python", "Algorithms", "OOP", "Scripting"]
  },
  {
    id: 6,
    title: "Introduction to Data Science",
    issuer: "Infosys Springboard",
    date: "Aug 2024",
    code: "INF-DS-20082024",
    verifyUrl: "https://verify.onwingspan.com",
    image: "/certificates/DS.png",
    description: "Completed standard data science modules on Infosys Springboard, covering database structures, clean data engineering, statistical regression models, and exploratory visualizations.",
    skills: ["Data Science", "EDA", "Statistics", "Data Analysis"]
  },
  {
    id: 7,
    title: "Introduction to Deep Learning",
    issuer: "Infosys Springboard",
    date: "Apr 2026",
    code: "INF-DL-04042026",
    verifyUrl: "https://verify.onwingspan.com",
    image: "/certificates/DeepLearn.png",
    description: "Completed deep learning training on Infosys Springboard, validating core understandings of artificial neural networks, backpropagation optimization, and convolutional layers.",
    skills: ["Deep Learning", "Neural Networks", "Model Tuning", "Computer Vision"]
  },
  {
    id: 8,
    title: "Data Analyst Skill Certification Test",
    issuer: "One Roadmap",
    date: "Jun 2025",
    code: "CERT-0BAF431D",
    verifyUrl: "https://www.oneroadmap.io/skills/da/certificate/CERT-0BAF431D",
    image: "/certificates/Data Analyst.png",
    description: "Passed the professional One Roadmap Data Analyst skill test, verifying proficiency in clean data analysis pipelines, data warehousing SQL queries, and interactive dashboard creation.",
    skills: ["Data Analysis", "SQL", "Excel", "Data Visualization"]
  },
  {
    id: 9,
    title: "React.JS Developer Skill Certification Test",
    issuer: "One Roadmap",
    date: "Aug 2025",
    code: "CERT-CAD8C673",
    verifyUrl: "https://www.oneroadmap.io/skills/react/certificate/CERT-CAD8C673",
    image: "/certificates/React.png",
    description: "Passed the professional One Roadmap React.JS Developer skill test, validating advanced single-page application structure, state hooks lifecycle, and component interface models.",
    skills: ["ReactJS", "Hooks", "Component Design", "State Management"]
  }
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const cardWidth = 380; // card min-width + gap spacing
      const scrollAmount = direction === 'left' ? -cardWidth * 2 : cardWidth * 2;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="certificates" 
      className="py-24 w-full bg-white dark:bg-slate-950 transition-colors duration-500 relative overflow-hidden"
    >
      <div className="w-[92%] max-w-7xl mx-auto flex flex-col items-center relative">
        
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <span className="text-xs font-black tracking-widest text-indigo-600 dark:text-cyan-400 uppercase mb-2 block">
            05 / CREDENTIALS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional Certifications
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Carousel Outer Wrapper */}
        <div className="relative w-full group">
          
          {/* Floating Left Scroll Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-6 w-12 h-12 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200/50 dark:border-slate-800/80 shadow-lg flex items-center justify-center text-slate-700 dark:text-slate-200 z-20 hover:scale-105 active:scale-95 transition-all opacity-0 group-hover:opacity-100 cursor-none"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Floating Right Scroll Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-6 w-12 h-12 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200/50 dark:border-slate-800/80 shadow-lg flex items-center justify-center text-slate-700 dark:text-slate-200 z-20 hover:scale-105 active:scale-95 transition-all opacity-0 group-hover:opacity-100 cursor-none"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Horizontal Scrolling Box Container */}
          <div 
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto pb-8 pt-4 px-4 w-full scrollbar-none scroll-smooth snap-x snap-mandatory overflow-y-hidden"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch' 
            }}
          >
            {CERTIFICATES_DATA.map((cert) => (
              <div 
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="min-w-[285px] sm:min-w-[340px] md:min-w-[360px] snap-start group/card cursor-none py-2"
              >
                <Card3D className="glass-card rounded-[28px] overflow-hidden border border-slate-200/50 dark:border-slate-800/80 shadow-premium flex flex-col h-[380px] hover:shadow-premium-hover hover:border-indigo-500/25 dark:hover:border-cyan-500/20">
                  
                  {/* Certificate visual mockup frame */}
                  <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-slate-900 relative flex items-center justify-center border-b border-slate-200/30 dark:border-slate-800/30">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentNode.style.background = 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)';
                      }}
                    />
                    <div className="absolute top-3 right-3 z-10 flex items-center gap-1 text-[8px] font-black uppercase text-emerald-600 dark:text-emerald-400 bg-white/95 dark:bg-slate-900/95 px-2.5 py-0.5 rounded-full shadow-sm border border-emerald-500/20">
                      <CheckCircle className="w-3 h-3 fill-emerald-500/10" />
                      Verified
                    </div>
                  </div>

                  {/* Info text fields */}
                  <div className="p-5 text-left flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm sm:text-base font-black text-slate-850 dark:text-white mb-2 line-clamp-1 group-hover/card:text-indigo-600 dark:group-hover/card:text-cyan-400 transition-colors">
                        {cert.title}
                      </h3>
                      <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 mb-3">
                        <Calendar className="w-3.5 h-3.5" />
                        Acquired: {cert.date}
                      </div>
                    </div>

                    <div>
                      <div className="font-mono text-[9px] font-bold text-slate-400 bg-slate-50 dark:bg-slate-900 py-1.5 px-3 rounded-lg border border-slate-100 dark:border-slate-850/60 mb-4 truncate">
                        ID: {cert.code}
                      </div>

                      <div className="flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-cyan-400">
                        View Credential Details
                        <ExternalLink className="w-3.5 h-3.5 group-hover/card:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>

                </Card3D>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Swipe invitation hint for mobile */}
        <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 tracking-widest uppercase mt-4 block lg:hidden">
          Swipe horizontally to explore ➔
        </p>

      </div>

      {/* Certificate Detail Modal Overlay */}
      {selectedCert && (
        <div 
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-none"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl animate-fade-in-up relative flex flex-col gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full hover:rotate-90 transition-transform duration-300 border border-slate-200/50 dark:border-slate-750 cursor-none z-10"
              aria-label="Close Certificate Modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Certificate Image Preview */}
            <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-150 dark:bg-slate-950 flex items-center justify-center relative border border-slate-200/50 dark:border-slate-800/60 shadow-sm mt-4">
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title} 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.style.background = 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)';
                }}
              />
            </div>

            {/* Header info */}
            <div className="flex items-start gap-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 dark:bg-cyan-500/10 flex items-center justify-center border border-indigo-500/10">
                <Award className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />
              </div>
              <div>
                <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 mb-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified Credential
                </span>
                <h3 className="text-xl font-black text-slate-800 dark:text-white leading-snug">
                  {selectedCert.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-bold mt-0.5">
                  {selectedCert.issuer} • {selectedCert.date}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed text-left">
              {selectedCert.description}
            </p>

            {/* Credential Code and Verify */}
            <div className="space-y-4">
              {/* Skills Learned */}
              <div className="text-left">
                <h4 className="text-xs uppercase tracking-widest font-black text-slate-400 mb-2">Validated Skills:</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCert.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* ID info */}
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-850/50 text-left font-mono text-xs flex justify-between items-center">
                <div>
                  <span className="text-slate-400 font-bold block text-[10px] uppercase">Credential ID</span>
                  <span className="text-slate-700 dark:text-slate-300 font-black">{selectedCert.code}</span>
                </div>
                <a 
                  href={selectedCert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 py-1.5 px-3 rounded-xl bg-indigo-600 text-white font-bold text-[11px] shadow-md hover:bg-indigo-700 transition-colors cursor-none"
                >
                  Verify
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
