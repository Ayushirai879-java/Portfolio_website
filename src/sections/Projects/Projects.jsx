import { useState } from 'react';
import { ExternalLink, Layers, Code, Globe, ArrowRight, X } from 'lucide-react';
import { Github } from '../../components/SocialIcons';
import Card3D from '../../components/Card3D/Card3D';

const CATEGORIES = ["All", "AI/ML", "Full-Stack", "Frontend"];

const PROJECTS_DATA = [
  {
    id: 1,
    title: "Moodify: Mood-Centric Social Music Streaming Platform",
    category: "Full-Stack",
    description: "A personalized, socially interactive, and emotionally intelligent music experience. Features include mood-based playlists, personalized recommendations, real-time message chat via Socket.IO, personal diaries, and a central administrator metrics dashboard.",
    image: "/projects/Moodify.png",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Clerk Authentication", "Cloudinary"],
    github: "https://github.com/Ayushirai879-java/Moodify_project.git",
    live: "https://github.com/Ayushirai879-java/Moodify_project.git",
    challenge: "Integrating a real-time chat and social listening feature while keeping Clerk authentication and Clerk middleware secure across the client-server layout.",
    solution: "Developed a robust Socket.IO server layer aligned with MongoDB change streams and Clerk middleware verification, updating Zustand store states dynamically on the frontend."
  },
  {
    id: 2,
    title: "UrbanPulse Smart City Governance Platform",
    category: "Full-Stack",
    description: "An AI-powered smart governance platform designed to improve how civic issues are reported and managed in urban communities, using GPS-tagged locations, image uploads, AI-driven categorization, and complete resolution workflows for citizens and officers.",
    image: "/projects/Urbanpulse.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "GPS Tagging", "OpenRouter AI", "Cloudinary"],
    github: "https://github.com/Ayushirai879-java/UrbanPulse.git",
    live: "https://github.com/Ayushirai879-java/UrbanPulse.git",
    challenge: "Sorting and assigning diverse community complaints to municipal departments with high accuracy while displaying coordinates on visual maps in real time.",
    solution: "Implemented OpenRouter AI LLM triggers on incoming complaints for instant classification, combined with Leaflet map tracking on the frontend for GPS pin visualization."
  },
  {
    id: 3,
    title: "PantryPilot: Smart Recipe Finder & Ingredient Matcher",
    category: "Frontend",
    description: "A modern, responsive recipe finder that helps users generate recipe ideas from available ingredients, utilizing an ingredient chip system, preference filters (cuisine, meal type, cooking time, dietary requirements), scoring matches, and localStorage persistence.",
    image: "/projects/PantryPilot.png",
    tags: ["HTML5", "CSS3", "JavaScript (ES6+)", "LocalStorage", "Responsive Design", "Flexbox/Grid"],
    github: "https://github.com/Ayushirai879-java/PantryPilot.git",
    live: "https://recipegenerator-pantrypilot.netlify.app/",
    challenge: "Sorting and ranking recipes based on matching ingredient counts and user preferences in client-side vanilla JavaScript at high performance.",
    solution: "Developed a weighted scoring algorithm that evaluates ingredient intersections, computes percentages, filters out dietary exclusions, and sorts findings dynamically on input changes."
  },
  {
    id: 4,
    title: "Blossom Flower Shop Website",
    category: "Frontend",
    description: "A static multi-page flower storefront featuring responsive layouts, custom typography, catalog searching and category filtering, testimonial sliders, custom FAQ accordions, and a complete simulated checkout flow.",
    image: "/projects/Blossom.png",
    tags: ["HTML5", "CSS3", "JavaScript (ES6+)", "Auth Simulation", "Cart Flow", "Form Validation"],
    github: "https://github.com/Ayushirai879-java/Blossom-Flower-Shop-website.git",
    live: "https://blossomflowerwebsite.netlify.app/",
    challenge: "Managing interactive checkout and catalog filtering states across multi-page layouts cleanly without library wrappers.",
    solution: "Utilized state-based Javascript rendering hooks and unified CSS class triggers to control product filters, sliders, and form input validation dynamically."
  },
  {
    id: 5,
    title: "SkillSphere: Career Analysis & Roadmap Generator",
    category: "Frontend",
    description: "A production-ready static website and PWA for role-based career analysis. Features include demo auth flow with local persistence, skill management, role-gap analysis, personalized roadmap generation, and JSON exports.",
    image: "/projects/Skillsphere.png",
    tags: ["HTML5", "CSS3", "JavaScript", "PWA", "Service Worker", "LocalStorage", "JSON Export"],
    github: "https://github.com/Ayushirai879-java/SkillSphere.git",
    live: "https://skillssphere.netlify.app/",
    challenge: "Developing a client-side role-gap analysis module and sitemap sifting entirely in vanilla JS without external rendering frameworks.",
    solution: "Designed state-based render loops linked to localStorage, with structural service workers caching resources locally for offline capabilities."
  },
  {
    id: 6,
    title: "Notekeeper: Browser-Based Rich Note Editor",
    category: "Frontend",
    description: "A browser-based note application built with plain HTML, CSS, and JavaScript. Features include rich text editing in modal wrappers, pinning, archiving, trashing, hashtag auto-tagging, label-based filtering, Grid/List view toggle, dark mode, and localStorage persistence.",
    image: "/projects/Notekkeeper.png",
    tags: ["HTML5", "CSS3", "JavaScript", "LocalStorage", "Rich Text", "Hashtags", "Theme Toggle"],
    github: "https://github.com/Ayushirai879-java/Notekeeper.git",
    live: "https://notekeeperhtml.netlify.app/",
    challenge: "Parsing input text in real time to isolate hashtags (#tag) and automatically organize notes by labels client-side.",
    solution: "Implemented regex text parsing loops on inputs that detect hashtag syntax, automatically map tags to array filters, and synchronize store states."
  },
  {
    id: 7,
    title: "AT Jewel Storefront",
    category: "Frontend",
    description: "A modern, responsive multi-page jewelry storefront built with HTML, CSS, and JavaScript, featuring online catalog filters, search, sort, FAQs, testimonials, consultation forms, and localStorage-persisted carts and wishlists.",
    image: "/projects/AT jewel.png",
    tags: ["HTML5", "CSS3", "JavaScript", "LocalStorage", "Cart Flow", "Storefront"],
    github: "https://github.com/Ayushirai879-java/AT-Jewel-Website.git",
    live: "https://atjewel.netlify.app/jwellery.html",
    challenge: "Coordinating multi-page state synchronization for the shopping cart and wishlist purely on the client side.",
    solution: "Developed a unified localStorage API model imported dynamically across pages to synchronize cart counts and catalog statuses."
  },
  {
    id: 8,
    title: "Customer Service Support Chatbot",
    category: "AI/ML",
    description: "An advanced customer-support chatbot built with a hybrid architecture combining rule engines for high-precision routing, TF-IDF cosine similarity for FAQ retrieval, multi-turn conversation memory, and sentiment-aware response tones.",
    image: "/projects/chatbot.png",
    tags: ["Python", "NLP", "TF-IDF Cosine Similarity", "Flask/WebSockets", "Intent Classification", "NLTK"],
    github: "https://github.com/Ayushirai879-java/Customer-Service-Support-Chatbot.git",
    live: "https://github.com/Ayushirai879-java/Customer-Service-Support-Chatbot.git",
    challenge: "Resolving conversational slots and handling human-handoff flows dynamically based on real-time sentiment scoring.",
    solution: "Developed a multi-turn context manager coupled with NLTK sentiment analysis to adapt response tones and auto-generate support tickets."
  },
  {
    id: 9,
    title: "Stock Price Predictor & Time-Series Pipeline",
    category: "AI/ML",
    description: "A time-series forecasting pipeline using historical market data. Downloads data from Yahoo Finance (yfinance), engineers time-series features (lags, EMAs, rolling volatility), trains Linear Regression, Random Forest, and Gradient Boosting Regressors, and evaluates model performance using chronological time-series cross-validation.",
    image: "/projects/stock_predictor.png",
    tags: ["Python", "scikit-learn", "yfinance", "pandas", "Time-Series Forecasting", "Feature Engineering", "Gradient Boosting"],
    github: "https://github.com/Ayushirai879-java/Stock-Price-Predictor.git",
    live: "https://github.com/Ayushirai879-java/Stock-Price-Predictor.git",
    challenge: "Mitigating target leakage in feature engineering and performing chronologically safe train/test splits.",
    solution: "Designed lag-feature generators and rolling aggregators strictly bounded by window offsets, using custom timeline split iterators."
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "All"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeCategory);

  return (
    <section 
      id="projects" 
      className="py-24 w-full bg-white dark:bg-slate-950 transition-colors duration-500 relative"
    >
      <div className="w-[92%] max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <span className="text-xs font-black tracking-widest text-indigo-600 dark:text-cyan-400 uppercase mb-2 block">
            03 / CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Projects
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Categories sliding selector */}
        <div className="flex justify-center mb-12 w-full">
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900/80 p-1 rounded-full border border-slate-200/50 dark:border-slate-800/50 relative">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 text-xs sm:text-sm font-extrabold rounded-full transition-all cursor-none ${
                    isActive
                      ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-cyan-400 shadow-sm border border-slate-200/30 dark:border-slate-700/30'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-none h-full"
            >
              <Card3D className="glass-card project-card-glow rounded-[28px] overflow-hidden border border-slate-200/50 dark:border-slate-800/80 shadow-premium flex flex-col h-full hover:shadow-premium-hover">
                
                {/* Visual Thumbnail */}
                <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-900 relative">
                  {/* Decorative glowing gradient blur */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback placeholder gradient if image has not loaded yet
                      e.target.style.display = 'none';
                      e.target.parentNode.style.background = 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)';
                    }}
                  />
                  <span className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-white/95 dark:bg-slate-900/95 shadow-sm text-[10px] font-black uppercase text-indigo-600 dark:text-cyan-400 tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Card details */}
                <div className="p-6 flex-1 flex flex-col justify-between text-left">
                  <div>
                    <h3 className="text-lg font-black text-slate-800 dark:text-white mb-2.5 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="px-2.5 py-0.5 rounded bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-[10px] font-bold text-slate-500 dark:text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2.5 py-0.5 rounded bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-[10px] font-bold text-slate-400">
                          +{project.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-cyan-400">
                      Learn More
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </div>

              </Card3D>
            </div>
          ))}
        </div>

      </div>

      {/* Expanded Project Details Overlay Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-none"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-2xl animate-fade-in-up flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header image preview */}
            <div className="aspect-[21/9] w-full overflow-hidden relative bg-indigo-600 flex items-center justify-center">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.style.background = 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)';
                }}
              />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-slate-900/80 backdrop-blur-md text-white rounded-full hover:rotate-90 transition-transform duration-300 border border-white/10 cursor-none"
                aria-label="Close Project Modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content Details */}
            <div className="p-6 text-left overflow-y-auto max-h-[70vh] space-y-6">
              <div>
                <span className="text-[10px] font-black uppercase text-indigo-600 dark:text-cyan-400 bg-indigo-50 dark:bg-cyan-950/20 px-2.5 py-1 rounded-full border border-indigo-100/30 dark:border-cyan-400/10">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-black text-slate-800 dark:text-white mt-3">
                  {selectedProject.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Technical Challenges Panel */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-rose-500/5 border border-rose-500/10">
                  <h4 className="text-xs sm:text-sm font-black text-rose-500 flex items-center gap-1.5 mb-1.5 uppercase tracking-wide">
                    <Code className="w-4 h-4" />
                    The Challenge
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {selectedProject.challenge}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 dark:bg-cyan-500/5 dark:border-cyan-500/10">
                  <h4 className="text-xs sm:text-sm font-black text-indigo-600 dark:text-cyan-400 flex items-center gap-1.5 mb-1.5 uppercase tracking-wide">
                    <Layers className="w-4 h-4" />
                    My Solution
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Tag Pills */}
              <div>
                <h4 className="text-xs uppercase tracking-widest font-black text-slate-400 mb-2.5">Built Using:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-3.5 py-1.5 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions panel */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200/40 dark:border-slate-800/60">
                <a 
                  href={selectedProject.live} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-indigo-600 text-white font-bold text-sm shadow-md hover:bg-indigo-700 transition-colors cursor-none"
                >
                  <Globe className="w-4 h-4" />
                  Live Preview
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a 
                  href={selectedProject.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-1.5 px-6 py-2.5 rounded-full border border-slate-300 dark:border-slate-700 bg-white/40 dark:bg-slate-900/40 font-bold text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-none"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
