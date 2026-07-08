/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Project, Inquiry } from './types';
import { INITIAL_PROJECTS } from './data';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import About from './components/About';
import Contact from './components/Contact';
import Admin from './components/Admin';
import Renewal from './components/Renewal';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, Github, Shield } from 'lucide-react';

export default function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  
  // Under Renewal state
  const [isRenewalActive, setIsRenewalActive] = useState(() => {
    return sessionStorage.getItem('1mm_design_renewal_bypassed') !== 'true';
  });
  
  // Navigation states
  const [currentSection, setCurrentSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Filtering & Admin toggle
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  
  // Scroll to top button state
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Load from local storage
  useEffect(() => {
    const savedProjects = localStorage.getItem('1mm_design_projects');
    if (savedProjects) {
      try {
        setProjects(JSON.parse(savedProjects));
      } catch (e) {
        setProjects(INITIAL_PROJECTS);
      }
    } else {
      setProjects(INITIAL_PROJECTS);
      localStorage.setItem('1mm_design_projects', JSON.stringify(INITIAL_PROJECTS));
    }

    const savedInquiries = localStorage.getItem('1mm_design_inquiries');
    if (savedInquiries) {
      try {
        setInquiries(JSON.parse(savedInquiries));
      } catch (e) {
        setInquiries([]);
      }
    } else {
      // Mock one initial inquiry so the admin workspace is preloaded with data
      const initialInq: Inquiry[] = [
        {
          id: 'inq_1',
          name: '김대리',
          company: 'LG생활건강 브랜드팀',
          email: 'daeri.kim@lgcare.com',
          phone: '010-1234-5678',
          message: '청담동에 신규 입점할 오프라인 명품 플래그십 브랜드 부티크 2호점에 대한 공간 Identity 수립 및 가구 설계, 시공 전체 일괄 턴키 수주 제안을 요청 드립니다.',
          date: '2026-07-06 14:32',
          status: 'Contacted'
        }
      ];
      setInquiries(initialInq);
      localStorage.setItem('1mm_design_inquiries', JSON.stringify(initialInq));
    }
  }, []);

  // Track active scroll section for Navbar highlight
  useEffect(() => {
    const handleScroll = () => {
      // Toggle back to top button
      setShowScrollTop(window.scrollY > 800);

      if (selectedProject) {
        setCurrentSection('projects');
        return;
      }

      const sections = ['home', 'projects', 'about', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setCurrentSection(section === 'home' ? 'projects' : section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedProject]);

  // Handle section scrolling
  const handleNavigate = (sectionId: string) => {
    setSelectedProject(null); // Close active project details

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setCurrentSection('home');
      return;
    }

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setCurrentSection(sectionId);
      }
    }, 100);
  };

  const handleScrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Add Project Callback
  const handleAddProject = (newProject: Project) => {
    const updated = [newProject, ...projects];
    setProjects(updated);
    localStorage.setItem('1mm_design_projects', JSON.stringify(updated));
  };

  // Update Project Callback
  const handleUpdateProject = (updatedProj: Project) => {
    const updated = projects.map(p => p.id === updatedProj.id ? updatedProj : p);
    setProjects(updated);
    localStorage.setItem('1mm_design_projects', JSON.stringify(updated));
    // If the currently selected project was updated, update detail view too
    if (selectedProject && selectedProject.id === updatedProj.id) {
      setSelectedProject(updatedProj);
    }
  };

  // Delete Project Callback
  const handleDeleteProject = (id: string) => {
    const updated = projects.filter(p => p.id !== id);
    setProjects(updated);
    localStorage.setItem('1mm_design_projects', JSON.stringify(updated));
    if (selectedProject && selectedProject.id === id) {
      setSelectedProject(null);
    }
  };

  // Reorder Projects Callback
  const handleReorderProjects = (reordered: Project[]) => {
    setProjects(reordered);
    localStorage.setItem('1mm_design_projects', JSON.stringify(reordered));
  };

  // Contact Inquiry Submission Callback
  const handleAddInquiry = (rawInq: Omit<Inquiry, 'id' | 'date' | 'status'>) => {
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    
    const newInquiry: Inquiry = {
      ...rawInq,
      id: 'inq_' + Date.now(),
      date: formattedDate,
      status: 'Pending'
    };

    const updated = [newInquiry, ...inquiries];
    setInquiries(updated);
    localStorage.setItem('1mm_design_inquiries', JSON.stringify(updated));
  };

  // Update Inquiry status Callback
  const handleUpdateInquiryStatus = (id: string, status: Inquiry['status']) => {
    const updated = inquiries.map(inq => inq.id === id ? { ...inq, status } : inq);
    setInquiries(updated);
    localStorage.setItem('1mm_design_inquiries', JSON.stringify(updated));
  };

  if (isRenewalActive) {
    return (
      <div className="bg-[#060606] text-white min-h-screen">
        <Renewal
          onSubmitInquiry={handleAddInquiry}
          onEnterSite={() => {
            setIsRenewalActive(false);
            sessionStorage.setItem('1mm_design_renewal_bypassed', 'true');
          }}
          onOpenAdmin={() => setIsAdminOpen(true)}
        />
        
        {/* ADMIN CONTROL CENTER MODAL */}
        <Admin
          isOpen={isAdminOpen}
          onClose={() => setIsAdminOpen(false)}
          projects={projects}
          inquiries={inquiries}
          onAddProject={handleAddProject}
          onUpdateProject={handleUpdateProject}
          onDeleteProject={handleDeleteProject}
          onReorderProjects={handleReorderProjects}
          onUpdateInquiryStatus={handleUpdateInquiryStatus}
          isAdminLoggedIn={isAdminLoggedIn}
          setIsAdminLoggedIn={setIsAdminLoggedIn}
        />
      </div>
    );
  }

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen font-sans selection:bg-white/10 selection:text-white">
      
      {/* Premium Navbar */}
      <Navbar
        currentSection={selectedProject ? 'projects' : currentSection}
        onNavigate={handleNavigate}
        onOpenAdmin={() => setIsAdminOpen(true)}
        isAdminLoggedIn={isAdminLoggedIn}
      />

      <AnimatePresence mode="wait">
        {!selectedProject ? (
          /* SINGLE-PAGE INTEGRATED CONTENT SPREAD */
          <motion.div
            key="home-sections"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* HERO LANDING SECTION */}
            <div id="home">
              <Hero onScrollToProjects={handleScrollToProjects} />
            </div>

            {/* PROJECTS ARCHIVE VIEW */}
            <div id="projects">
              <Projects
                projects={projects}
                onSelectProject={(p) => {
                  setSelectedProject(p);
                  window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
                }}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            </div>

            {/* BRAND PHILOSOPHY AND PROCESS ABOUT */}
            <div id="about">
              <About />
            </div>

            {/* CONNECTION INQUIRIES */}
            <div id="contact">
              <Contact onSubmitInquiry={handleAddInquiry} />
            </div>
          </motion.div>
        ) : (
          /* DEDICATED ARCHIVE CASE STUDY SPREAD (BOOK STYLE) */
          <motion.div
            key="project-details"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProjectDetail
              project={selectedProject}
              allProjects={projects}
              onClose={() => {
                setSelectedProject(null);
                setTimeout(() => {
                  const element = document.getElementById('portfolio-grid');
                  if (element) {
                    element.scrollIntoView({ behavior: 'instant' as ScrollBehavior });
                  }
                }, 50);
              }}
              onSelectProject={setSelectedProject}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER BLOCK */}
      <footer className="bg-[#0A0A0A] border-t border-[#1A1A1A] py-16 px-6 md:px-12 select-none">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-white/40">
          <div className="space-y-3 text-left">
            <span className="font-mono text-xs font-bold tracking-[0.25em] text-white">OneMillimeter</span>
            <p className="text-[10px] font-light max-w-sm font-sans leading-relaxed">
              One Millimeter Makes the Difference. 우리는 단순 시공을 넘어 최상의 브랜드 감동을 실물 공간으로 정밀 구축해 내는 하이엔드 경험 디자인 스튜디오입니다.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 font-mono text-[9px] tracking-widest">
            <div className="space-y-1 text-left">
              <span>BUSINESS REGISTRATION: 120-11-15000</span>
              <br />
              <span>REPRESENTATIVE ART DIRECTOR: OneMillimeter PARTNERS</span>
            </div>
            <div className="space-y-1 text-left">
              <span>COPYRIGHT © 2026 OneMillimeter.</span>
              <br />
              <span>ALL RIGHTS RESERVED IN CHRONICLE.</span>
              <div className="flex flex-col space-y-1.5 mt-2">
                <button
                  onClick={() => setIsAdminOpen(true)}
                  className="block text-[8px] tracking-[0.2em] text-white/25 hover:text-white/60 transition-colors uppercase font-mono cursor-pointer text-left"
                  title="Admin Workspace Access"
                >
                  [ {isAdminLoggedIn ? 'ADMIN ACTIVE' : 'ADMIN PORTAL'} ]
                </button>
                {!isRenewalActive && (
                  <button
                    onClick={() => {
                      setIsRenewalActive(true);
                      sessionStorage.removeItem('1mm_design_renewal_bypassed');
                    }}
                    className="block text-[8px] tracking-[0.2em] text-amber-500/50 hover:text-amber-500 transition-colors uppercase font-mono cursor-pointer text-left"
                  >
                    [ Activate Renewal Mode ]
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ADMIN CONTROL CENTER MODAL */}
      <Admin
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        projects={projects}
        inquiries={inquiries}
        onAddProject={handleAddProject}
        onUpdateProject={handleUpdateProject}
        onDeleteProject={handleDeleteProject}
        onReorderProjects={handleReorderProjects}
        onUpdateInquiryStatus={handleUpdateInquiryStatus}
        isAdminLoggedIn={isAdminLoggedIn}
        setIsAdminLoggedIn={setIsAdminLoggedIn}
      />

      {/* FLOAT BACK TO TOP BUTTON */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-40 bg-zinc-900 border border-white/10 hover:border-white/30 text-white p-3 rounded-full hover:bg-black transition-all cursor-pointer focus:outline-none"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
