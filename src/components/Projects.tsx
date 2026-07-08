import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { ArrowRight, Eye } from 'lucide-react';

interface ProjectsProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function Projects({ projects, onSelectProject, activeCategory, setActiveCategory }: ProjectsProps) {
  // Map category code to human category names
  const categories = [
    { id: 'ALL', label: 'ALL PROJECTS', desc: '전체 프로젝트' },
    { id: 'Exhibition', label: 'EXHIBITION', desc: '전시공간', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80' },
    { id: 'Brand Experience', label: 'BRAND EXPERIENCE', desc: '브랜드 경험', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80' },
  ];

  const filteredProjects = activeCategory === 'ALL'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 md:py-36 bg-[#0A0A0A] text-white px-6 md:px-12 select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* PORTFOLIO GRID */}

        {/* SECTION 3: FEATURED PROJECTS (PORTFOLIO GRID) */}
        <div id="portfolio-grid" className="pt-12 space-y-12">
          {/* Portfolio Header with Category Filters */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#1A1A1A] pb-8">
            <div className="space-y-3">
              <span className="font-mono text-[10px] text-white/40 tracking-[0.3em] uppercase block">
                THE ARCHIVE
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-white">
                Featured Projects
              </h2>
            </div>
 
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 font-mono text-[10px] tracking-widest transition-all duration-300 cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-white text-black font-semibold'
                      : 'border border-[#1A1A1A] text-white/50 hover:text-white hover:border-white/30'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Photos speak first - beautiful high-end list of project cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
                  className="group block cursor-pointer"
                  onClick={() => onSelectProject(project)}
                >
                  <div className="space-y-6">
                    {/* Immersive high-resolution card photo */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#121212] border border-[#1A1A1A]">
                      <img
                        src={project.heroImage}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[0.16,1,0.3,1] group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Cover hover layer */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="flex items-center space-x-2 bg-white text-black px-4 py-2 text-[10px] tracking-widest font-mono font-semibold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                          <Eye className="w-3.5 h-3.5" />
                          <span>READ CASE STUDY</span>
                        </div>
                      </div>
                    </div>

                    {/* Metadata & Description */}
                    <div className="space-y-3 pt-2">
                      <div className="flex justify-between items-center text-[10px] tracking-widest font-mono text-white/40">
                        <span>{project.client}</span>
                      </div>
                      
                      <div className="flex justify-between items-baseline group-hover:text-white/80 transition-colors">
                        <h3 className="text-xl font-serif font-light text-white tracking-wide">
                          {project.title}
                        </h3>
                        <ArrowRight className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 group-hover:translate-x-1 transition-all duration-300 text-white/30 group-hover:text-white" />
                      </div>

                      {/* Brief description summaries */}
                      <p className="text-xs text-white/50 leading-relaxed font-sans line-clamp-2 pt-1 border-t border-[#1A1A1A]">
                        {project.summary.split('\n')[0]}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-24 border border-dashed border-[#1A1A1A]">
              <span className="font-mono text-xs text-white/40 tracking-wider">
                현재 등록된 프로젝트가 없습니다.
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
