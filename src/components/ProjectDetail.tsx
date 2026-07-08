import React from 'react';
import { Project } from '../types';
import { ArrowLeft } from 'lucide-react';

interface ProjectDetailProps {
  project: Project;
  allProjects: Project[];
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export default function ProjectDetail({ project, allProjects, onClose, onSelectProject }: ProjectDetailProps) {
  // Scroll to top on project load
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [project.id]);

  // Select up to 4 other projects to show as recommendations
  const recommendedProjects = allProjects
    .filter(p => p.id !== project.id)
    .slice(0, 4);

  return (
    <section className="min-h-screen bg-[#0A0A0A] text-white py-24 px-6 md:px-12 select-none relative z-40">
      {/* Editorial layout container */}
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Navigation / Header back buttons */}
        <div className="flex justify-between items-center border-b border-[#1A1A1A] pb-6">
          <button
            onClick={onClose}
            className="flex items-center space-x-2 text-xs tracking-[0.2em] font-mono text-white/50 hover:text-white transition-all cursor-pointer focus:outline-none"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO ARCHIVES</span>
          </button>
          
          <span className="font-mono text-[9px] text-white/30 tracking-[0.3em] uppercase hidden md:inline">
            1MM DESIGN ARCHIVE // {project.category.toUpperCase()}
          </span>
        </div>

        {/* Title Block */}
        <div className="space-y-4 text-center py-4">
          <span className="font-mono text-xs text-white/40 tracking-[0.3em] uppercase block">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-light text-white tracking-tight leading-none">
            {project.title}
          </h1>
        </div>

        {/* Expansive Hero Photo - HUGE */}
        <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#121212] border border-[#1A1A1A]">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover filter brightness-95"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Brand Experience Philosophy (Concept) */}
        <div className="max-w-3xl mx-auto text-center py-8">
          <p className="text-base md:text-lg font-light text-white/80 leading-relaxed font-sans whitespace-pre-line tracking-wide">
            {project.concept}
          </p>
        </div>

        {/* Gallery Section: Photos speak louder, displayed vertically in large sizes */}
        <div className="space-y-12 pt-12 border-t border-[#1A1A1A]">
          {/* Clean vertical list of large photos */}
          <div className="space-y-12 max-w-5xl mx-auto">
            {project.gallery.map((photo, i) => (
              <div 
                key={i} 
                className="relative w-full aspect-[16/10] overflow-hidden bg-[#121212] border border-[#1A1A1A]"
              >
                <img
                  src={photo}
                  alt={`${project.title} detail ${i + 1}`}
                  className="w-full h-full object-cover filter brightness-95 hover:brightness-100 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects Preview Section (Replaces close button) */}
        <div className="pt-20 border-t border-[#1A1A1A] space-y-8">
          <div className="flex justify-between items-baseline">
            <h3 className="font-serif font-light text-xl text-white tracking-wide">
              다른 프로젝트 둘러보기
            </h3>
            <span className="font-mono text-[9px] text-white/40 tracking-wider">
              OTHER ARCHIVES
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {recommendedProjects.map((p) => (
              <div
                key={p.id}
                onClick={() => onSelectProject(p)}
                className="group cursor-pointer space-y-3"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#121212] border border-[#1A1A1A]">
                  <img
                    src={p.heroImage}
                    alt={p.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-0.5">
                  <div className="flex justify-between items-center text-[8px] font-mono text-white/40">
                    <span>{p.client}</span>
                  </div>
                  <h4 className="text-xs font-serif font-light text-white/90 tracking-wide group-hover:text-white truncate">
                    {p.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* Minimal Return button */}
          <div className="flex justify-center pt-10">
            <button
              onClick={onClose}
              className="px-6 py-2.5 border border-[#1A1A1A] text-[10px] tracking-[0.2em] font-mono text-white/60 hover:border-white/40 hover:text-white transition-all duration-300 cursor-pointer focus:outline-none uppercase"
            >
              전체 목록으로 돌아가기
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

