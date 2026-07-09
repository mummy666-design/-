import React, { useState } from 'react';
import { Project, Inquiry } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shield, Plus, Edit2, Trash2, Key, Check, AlertCircle, FileText, Settings, UserCheck, Upload, ArrowUp, ArrowDown } from 'lucide-react';
import { UNSPLASH_POOL } from '../data';

// Helper function to resize and compress uploaded images to safe Web/LocalStorage friendly sizes
const compressImage = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
        
        // Max dimension 1400px for balanced high fidelity and performance
        const MAX_WIDTH = 1400;
        const MAX_HEIGHT = 1400;
        
        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }
        
        canvas.width = width;
        canvas.height = height;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(e.target?.result as string);
          return;
        }
        ctx.drawImage(img, 0, 0, width, height);
        
        // Export to highly-efficient JPEG with balanced compression
        const compressedBase64 = canvas.toDataURL('image/jpeg', 0.82);
        resolve(compressedBase64);
      };
      img.onerror = () => reject(new Error('Image loading failed'));
      img.src = e.target?.result as string;
    };
    reader.onerror = () => reject(new Error('File reading failed'));
    reader.readAsDataURL(file);
  });
};

interface AdminProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  inquiries: Inquiry[];
  onAddProject: (p: Project) => void;
  onUpdateProject: (p: Project) => void;
  onDeleteProject: (id: string) => void;
  onReorderProjects: (reordered: Project[]) => void;
  onUpdateInquiryStatus: (id: string, status: Inquiry['status']) => void;
  isAdminLoggedIn: boolean;
  setIsAdminLoggedIn: (loggedIn: boolean) => void;
}

export default function Admin({
  isOpen,
  onClose,
  projects,
  inquiries,
  onAddProject,
  onUpdateProject,
  onDeleteProject,
  onReorderProjects,
  onUpdateInquiryStatus,
  isAdminLoggedIn,
  setIsAdminLoggedIn
}: AdminProps) {
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState<'projects' | 'inquiries'>('projects');
  
  // Reorder Handlers
  const handleMoveUp = (index: number) => {
    if (index === 0) return;
    const reordered = [...projects];
    const temp = reordered[index];
    reordered[index] = reordered[index - 1];
    reordered[index - 1] = temp;
    onReorderProjects(reordered);
  };

  const handleMoveDown = (index: number) => {
    if (index === projects.length - 1) return;
    const reordered = [...projects];
    const temp = reordered[index];
    reordered[index] = reordered[index + 1];
    reordered[index + 1] = temp;
    onReorderProjects(reordered);
  };
  
  // Project editing states
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  
  // Form fields state
  const [formState, setFormState] = useState<Omit<Project, 'id'>>({
    title: '',
    client: '',
    year: '2026',
    category: 'Brand Experience',
    heroImage: '',
    summary: '',
    concept: '',
    designStory: '',
    gallery: [],
    area: '',
    period: '',
    location: '',
    scope: '',
    keywords: ['Branding'],
    featured: false,
    videoUrl: ''
  });

  const [galleryInput, setGalleryInput] = useState('');

  // Handle pass validation
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '1115') {
      setIsAdminLoggedIn(true);
      setLoginError('');
      setPassword('');
    } else {
      setLoginError('비밀번호가 올바르지 않습니다.');
    }
  };

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
  };

  // Open edit project form
  const startEdit = (proj: Project) => {
    setEditingProject(proj);
    setIsAddingNew(false);
    setFormState({
      title: proj.title,
      client: proj.client,
      year: proj.year,
      category: proj.category,
      heroImage: proj.heroImage,
      summary: proj.summary,
      concept: proj.concept,
      designStory: proj.designStory,
      gallery: proj.gallery,
      area: proj.area,
      period: proj.period,
      location: proj.location,
      scope: proj.scope,
      keywords: proj.keywords,
      featured: proj.featured,
      videoUrl: proj.videoUrl || ''
    });
    setGalleryInput(proj.gallery.join('\n'));
  };

  // Open add new form
  const startAdd = () => {
    setIsAddingNew(true);
    setEditingProject(null);
    const randomHero = UNSPLASH_POOL.details[Math.floor(Math.random() * UNSPLASH_POOL.details.length)];
    setFormState({
      title: '',
      client: '',
      year: '2026',
      category: 'Brand Experience',
      heroImage: randomHero,
      summary: '',
      concept: '',
      designStory: '',
      gallery: [
        UNSPLASH_POOL.details[0],
        UNSPLASH_POOL.details[1],
        UNSPLASH_POOL.details[2],
        UNSPLASH_POOL.details[3]
      ],
      area: '',
      period: '',
      location: '',
      scope: '',
      keywords: ['Branding'],
      featured: false,
      videoUrl: ''
    });
    setGalleryInput([
      UNSPLASH_POOL.details[0],
      UNSPLASH_POOL.details[1],
      UNSPLASH_POOL.details[2],
      UNSPLASH_POOL.details[3]
    ].join('\n'));
  };

  // Handle Form Submission
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Parse gallery list from multiline text inputs
    const parsedGallery = galleryInput
      .split('\n')
      .map(url => url.trim())
      .filter(url => url.length > 0);

    const projectData: Project = {
      id: editingProject ? editingProject.id : 'proj_' + Date.now(),
      title: formState.title || 'Untitled Project',
      client: formState.client || 'General Client',
      year: formState.year || '2026',
      category: formState.category,
      heroImage: formState.heroImage || UNSPLASH_POOL.luxuryShowroom,
      summary: formState.summary || 'Premium space design summary',
      concept: formState.concept || 'Minimal high-end design concept details.',
      designStory: formState.designStory || 'Conceptual architectural development story.',
      gallery: parsedGallery.length > 0 ? parsedGallery : [UNSPLASH_POOL.luxuryShowroom],
      area: formState.area || '250㎡',
      period: formState.period || '3 Months',
      location: formState.location || 'Seoul, Korea',
      scope: formState.scope || 'Interior Design, Space Branding',
      keywords: formState.keywords,
      featured: formState.featured,
      videoUrl: formState.videoUrl || ''
    };

    if (editingProject) {
      onUpdateProject(projectData);
    } else {
      onAddProject(projectData);
    }

    // Reset forms
    setEditingProject(null);
    setIsAddingNew(false);
  };

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const words = e.target.value.split(',').map(w => w.trim()).filter(w => w.length > 0);
    setFormState(prev => ({ ...prev, keywords: words }));
  };

  // Fast autofill premium Unsplash images to form
  const applyPresetImage = (url: string) => {
    setFormState(prev => ({ ...prev, heroImage: url }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 select-none">
      <div className="bg-[#121212] border border-[#1A1A1A] w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden relative shadow-2xl">
        
        {/* Admin Header */}
        <div className="p-6 border-b border-[#1A1A1A] flex justify-between items-center bg-[#0A0A0A]">
          <div className="flex items-center space-x-3">
            <Shield className="w-5 h-5 text-white/80" />
            <h2 className="text-sm font-mono tracking-[0.25em] text-white">
              1MM DESIGN // MANAGEMENT ENGINE
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-white/50 hover:text-white hover:bg-white/5 transition-all cursor-pointer focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* AUTH LAYER OR INTERNAL MANAGEMENT LAYER */}
        {!isAdminLoggedIn ? (
          <div className="flex-1 flex flex-col justify-center items-center p-8 max-w-sm mx-auto space-y-6">
            <div className="w-12 h-12 rounded-full border border-[#1A1A1A] flex items-center justify-center bg-[#0A0A0A]">
              <Key className="w-5 h-5 text-white/50" />
            </div>
            
            <div className="text-center space-y-2">
              <h3 className="text-lg font-serif font-light text-white">관리자 인증</h3>
              <p className="text-xs text-white/40 font-sans leading-relaxed">
                포트폴리오 아카이브 수정 및 견적 문의 조회를 위해 관리자 비밀번호를 입력해 주십시오.
              </p>
            </div>

            <form onSubmit={handleLogin} className="w-full space-y-4">
              {loginError && (
                <div className="p-3 bg-red-950/40 border border-red-900/60 text-[11px] text-red-200 font-sans flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{loginError}</span>
                </div>
              )}
              
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호 입력"
                className="w-full bg-[#0A0A0A] border border-[#1A1A1A] px-4 py-3 text-center text-xs text-white tracking-[0.4em] focus:outline-none focus:border-white transition-colors"
                autoFocus
              />

              <button
                type="submit"
                className="w-full py-3 bg-white text-black font-mono text-[10px] tracking-widest font-semibold hover:bg-white/90 transition-all cursor-pointer"
              >
                AUTHORIZE ACCESS
              </button>
            </form>
          </div>
        ) : (
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
            
            {/* SIDEBAR TABS */}
            <div className="w-full md:w-56 border-b md:border-b-0 md:border-r border-[#1A1A1A] p-4 bg-[#0A0A0A] flex flex-row md:flex-col justify-between md:justify-start gap-2">
              <div className="space-y-2 flex-1 md:w-full flex md:block">
                <button
                  onClick={() => { setActiveTab('projects'); setEditingProject(null); setIsAddingNew(false); }}
                  className={`w-full text-left px-4 py-3 text-xs tracking-widest font-mono flex items-center space-x-3 cursor-pointer ${
                    activeTab === 'projects'
                      ? 'bg-white/10 text-white border-l-2 border-white'
                      : 'text-white/45 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  <span>PORTFOLIOS ({projects.length})</span>
                </button>
                <button
                  onClick={() => { setActiveTab('inquiries'); setEditingProject(null); setIsAddingNew(false); }}
                  className={`w-full text-left px-4 py-3 text-xs tracking-widest font-mono flex items-center space-x-3 cursor-pointer ${
                    activeTab === 'inquiries'
                      ? 'bg-white/10 text-white border-l-2 border-white'
                      : 'text-white/45 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Settings className="w-4 h-4" />
                  <span>INQUIRIES ({inquiries.length})</span>
                </button>
              </div>

              {/* Log out option */}
              <div className="pt-0 md:pt-6 border-t border-[#1A1A1A]">
                <button
                  onClick={handleLogout}
                  className="px-3 py-1.5 border border-red-900/40 text-red-400 hover:bg-red-950/20 text-[9px] font-mono tracking-widest uppercase transition-all w-full text-center"
                >
                  LOGOUT ADMIN
                </button>
              </div>
            </div>

            {/* MAIN INTERNAL WORKSPACE */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-[#0A0A0A]">
              
              {activeTab === 'projects' && (
                <div className="space-y-8">
                  
                  {/* Portfolio Tab default listing */}
                  {!editingProject && !isAddingNew ? (
                    <div className="space-y-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-lg font-serif font-light text-white">프로젝트 보드</h3>
                          <p className="text-xs text-white/40">등록된 브랜드 익스피리언스 아카이브들을 관리합니다.</p>
                        </div>
                        <button
                          onClick={startAdd}
                          className="flex items-center space-x-2 bg-white text-black text-[10px] tracking-widest font-mono font-bold py-2.5 px-4 cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>ADD PROJECT</span>
                        </button>
                      </div>

                      {/* Small simple table */}
                      <div className="border border-white/5 bg-zinc-950 divide-y divide-white/5">
                        {projects.map((proj, index) => (
                          <div key={proj.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex items-center space-x-4">
                              <span className="text-[10px] font-mono text-white/30 w-4 text-center">
                                {index + 1}
                              </span>
                              <img
                                src={proj.heroImage}
                                alt={proj.title}
                                className="w-16 h-12 object-cover border border-white/5 bg-zinc-900"
                                referrerPolicy="no-referrer"
                              />
                              <div>
                                <span className="text-[9px] font-mono text-white/30 tracking-wider block uppercase">
                                  {proj.category}
                                </span>
                                <h4 className="text-sm font-sans font-medium text-white">{proj.title}</h4>
                                <p className="text-[10px] text-white/50">{proj.client}</p>
                              </div>
                            </div>

                            <div className="flex items-center space-x-3 self-end sm:self-auto">
                              {/* Reorder Buttons */}
                              <div className="flex items-center bg-zinc-900 border border-white/10 divide-x divide-white/10 rounded overflow-hidden">
                                <button
                                  type="button"
                                  disabled={index === 0}
                                  onClick={() => handleMoveUp(index)}
                                  className={`p-1.5 transition-colors cursor-pointer ${
                                    index === 0 
                                      ? 'opacity-20 cursor-not-allowed bg-zinc-950 text-white/20' 
                                      : 'hover:bg-white/10 text-white/60 hover:text-white'
                                  }`}
                                  title="위로 이동 (노출 순서 올리기)"
                                >
                                  <ArrowUp className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  type="button"
                                  disabled={index === projects.length - 1}
                                  onClick={() => handleMoveDown(index)}
                                  className={`p-1.5 transition-colors cursor-pointer ${
                                    index === projects.length - 1 
                                      ? 'opacity-20 cursor-not-allowed bg-zinc-950 text-white/20' 
                                      : 'hover:bg-white/10 text-white/60 hover:text-white'
                                  }`}
                                  title="아래로 이동 (노출 순서 내리기)"
                                >
                                  <ArrowDown className="w-3.5 h-3.5" />
                                </button>
                              </div>

                              <button
                                onClick={() => startEdit(proj)}
                                className="p-2 border border-white/10 hover:border-white/30 hover:bg-white/5 text-white/70 hover:text-white transition-all cursor-pointer"
                                title="Edit Project"
                              >
                                <Edit2 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => {
                                  if (confirm(`정말 "${proj.title}" 프로젝트를 삭제하시겠습니까?`)) {
                                    onDeleteProject(proj.id);
                                  }
                                }}
                                className="p-2 border border-red-900/40 hover:border-red-800 hover:bg-red-950/20 text-red-400 transition-all cursor-pointer"
                                title="Delete Project"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* GitHub Sync Information and Exporter */}
                      <div className="mt-8 p-4 bg-[#141414] border border-amber-950/40 text-amber-200/90 rounded space-y-3">
                        <div className="flex items-start space-x-2.5">
                          <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                          <div className="space-y-1">
                            <h4 className="text-xs font-mono tracking-widest font-bold text-white uppercase">
                              💡 GITHUB 영구 동기화 안내
                            </h4>
                            <p className="text-[11px] text-white/60 leading-relaxed font-sans select-text">
                              어드민 페이지에서 추가/수정한 내용은 브라우저의 <strong>로컬 스토리지(LocalStorage)</strong>에 임시 저장되어 현재 프리뷰에서만 보입니다.<br />
                              이 수정한 내용을 GitHub 소스 코드에 영구 보존하려면, 아래 <strong>[동기화용 데이터 복사]</strong> 버튼을 누르신 후, AI 채팅창에 복사한 값을 그대로 붙여넣고 <strong>"이 데이터로 src/data.ts를 영구 업데이트해줘"</strong>라고 말씀해 주세요! AI가 즉시 소스 파일에 반영하여 저장해 드립니다.
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-2 pt-1">
                          <button
                            type="button"
                            onClick={() => {
                              const jsonString = JSON.stringify(projects, null, 2);
                              navigator.clipboard.writeText(jsonString);
                              alert('동기화 데이터가 클립보드에 성공적으로 복사되었습니다! 이제 AI 채팅창에 붙여넣어 "이 데이터로 src/data.ts를 업데이트해줘"라고 요청해 주세요.');
                            }}
                            className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 px-3 py-1.5 text-[10px] font-mono tracking-widest uppercase transition-all cursor-pointer rounded flex items-center space-x-1.5"
                          >
                            <span>Copy Sync Data (동기화용 데이터 복사)</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* PROJECT FORM WORKSPACE: ADD OR EDIT */
                    <form onSubmit={handleSave} className="space-y-6 pb-12">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5">
                        <h4 className="text-md font-serif text-white">
                          {editingProject ? '프로젝트 수정' : '신규 프로젝트 등록'}
                        </h4>
                        <button
                          type="button"
                          onClick={() => { setEditingProject(null); setIsAddingNew(false); }}
                          className="text-xs font-mono text-white/40 hover:text-white cursor-pointer"
                        >
                          취소하기
                        </button>
                      </div>

                      {/* Title & Client & Year */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-1">
                          <label className="text-[9px] font-mono tracking-widest text-white/40">프로젝트명 *</label>
                          <input
                            type="text"
                            required
                            value={formState.title}
                            onChange={(e) => setFormState(prev => ({ ...prev, title: e.target.value }))}
                            className="w-full bg-black border border-white/15 px-3 py-2 text-xs text-white focus:outline-none focus:border-white"
                            placeholder="e.g. Häagen-Dazs Lounge"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-mono tracking-widest text-white/40">고객사 *</label>
                          <input
                            type="text"
                            required
                            value={formState.client}
                            onChange={(e) => setFormState(prev => ({ ...prev, client: e.target.value }))}
                            className="w-full bg-black border border-white/15 px-3 py-2 text-xs text-white focus:outline-none focus:border-white"
                            placeholder="e.g. Häagen-Dazs Korea"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-mono tracking-widest text-white/40">연도 *</label>
                          <input
                            type="text"
                            required
                            value={formState.year}
                            onChange={(e) => setFormState(prev => ({ ...prev, year: e.target.value }))}
                            className="w-full bg-black border border-white/15 px-3 py-2 text-xs text-white focus:outline-none focus:border-white"
                            placeholder="e.g. 2026"
                          />
                        </div>
                      </div>

                      {/* Category & Keywords & Featured */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-1">
                          <label className="text-[9px] font-mono tracking-widest text-white/40">분류 *</label>
                          <select
                            value={formState.category}
                            onChange={(e) => setFormState(prev => ({ ...prev, category: e.target.value as Project['category'] }))}
                            className="w-full bg-black border border-white/15 px-3 py-2 text-xs text-white focus:outline-none focus:border-white"
                          >
                            <option value="Exhibition">Exhibition (전시공간)</option>
                            <option value="Brand Experience">Brand Experience (브랜드 경험)</option>
                            <option value="and">and (기타/협업)</option>
                          </select>
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-mono tracking-widest text-white/40">태그/키워드 (쉼표 구분) *</label>
                          <input
                            type="text"
                            value={formState.keywords.join(', ')}
                            onChange={handleKeywordChange}
                            className="w-full bg-black border border-white/15 px-3 py-2 text-xs text-white focus:outline-none focus:border-white"
                            placeholder="Exhibition, Retail, Branding"
                          />
                        </div>
                        <div className="flex items-center space-x-3 pt-4">
                          <input
                            type="checkbox"
                            id="featured-check"
                            checked={formState.featured}
                            onChange={(e) => setFormState(prev => ({ ...prev, featured: e.target.checked }))}
                            className="w-4 h-4 bg-black border border-white/15 focus:ring-0 text-white"
                          />
                          <label htmlFor="featured-check" className="text-xs text-white/80 font-sans cursor-pointer select-none">
                            대표 프로젝트 등록 (Featured)
                          </label>
                        </div>
                      </div>

                      {/* Detail attributes */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="space-y-1">
                          <label className="text-[9px] font-mono tracking-widest text-white/40">면적 (Area)</label>
                          <input
                            type="text"
                            value={formState.area}
                            onChange={(e) => setFormState(prev => ({ ...prev, area: e.target.value }))}
                            className="w-full bg-black border border-white/15 px-3 py-2 text-xs text-white"
                            placeholder="e.g. 350㎡"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-mono tracking-widest text-white/40">기간 (Period)</label>
                          <input
                            type="text"
                            value={formState.period}
                            onChange={(e) => setFormState(prev => ({ ...prev, period: e.target.value }))}
                            className="w-full bg-black border border-white/15 px-3 py-2 text-xs text-white"
                            placeholder="e.g. 2026.01 - 2026.04"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-mono tracking-widest text-white/40">위치 (Location)</label>
                          <input
                            type="text"
                            value={formState.location}
                            onChange={(e) => setFormState(prev => ({ ...prev, location: e.target.value }))}
                            className="w-full bg-black border border-white/15 px-3 py-2 text-xs text-white"
                            placeholder="e.g. Seoul, South Korea"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-mono tracking-widest text-white/40">참여범위 (Scope)</label>
                          <input
                            type="text"
                            value={formState.scope}
                            onChange={(e) => setFormState(prev => ({ ...prev, scope: e.target.value }))}
                            className="w-full bg-black border border-white/15 px-3 py-2 text-xs text-white"
                            placeholder="e.g. Space Design, Construction"
                          />
                        </div>
                      </div>

                      {/* Hero Image Setup */}
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <div className="flex justify-between items-center">
                            <label className="text-[9px] font-mono tracking-widest text-white/40 block">대표 이미지 URL (Hero Image) *</label>
                            <label className="cursor-pointer text-[9px] font-mono text-white/70 hover:text-white flex items-center space-x-1 border border-white/10 px-2 py-1 bg-zinc-900 hover:bg-zinc-850 transition-colors">
                              <Upload className="w-3 h-3" />
                              <span>사진 직접 올리기</span>
                              <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={async (e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    try {
                                      const compressed = await compressImage(file);
                                      setFormState(prev => ({ ...prev, heroImage: compressed }));
                                    } catch (err) {
                                      alert('이미지 업로드 중 오류가 발생했습니다.');
                                    }
                                  }
                                }}
                              />
                            </label>
                          </div>
                          <input
                            type="text"
                            required
                            value={formState.heroImage}
                            onChange={(e) => setFormState(prev => ({ ...prev, heroImage: e.target.value }))}
                            className="w-full bg-black border border-white/15 px-3 py-2 text-xs text-white focus:outline-none focus:border-white"
                            placeholder="https://images.unsplash.com/photo... 또는 업로드된 파일 데이터"
                          />
                        </div>
                        {formState.heroImage && (
                          <div className="relative w-32 aspect-[16/10] bg-zinc-950 border border-white/5 overflow-hidden">
                            <img
                              src={formState.heroImage}
                              alt="Hero Preview"
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute top-1 right-1 bg-black/85 px-1 py-0.5 text-[7px] font-mono text-white/60">
                              PREVIEW
                            </div>
                          </div>
                        )}
                        {/* Quick Selection Library presets */}
                        <div>
                          <span className="text-[8px] font-mono text-white/30 tracking-wider block mb-1">PRESET HIGH-END ASSETS</span>
                          <div className="flex flex-wrap gap-2">
                            {Object.entries(UNSPLASH_POOL).filter(([k]) => k !== 'details').map(([name, url]) => (
                              <button
                                key={name}
                                type="button"
                                onClick={() => applyPresetImage(url as string)}
                                className="px-2 py-1 bg-zinc-900 hover:bg-zinc-850 text-[8px] font-mono text-white/60 hover:text-white border border-white/5 cursor-pointer"
                              >
                                {name.toUpperCase()}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* 대표 설명 - 3줄 */}
                      <div className="space-y-1">
                        <label className="text-[9px] font-mono tracking-widest text-white/40 block">대표 설명 (대표 설명 3줄 규칙) *</label>
                        <textarea
                          required
                          rows={3}
                          value={formState.summary}
                          onChange={(e) => setFormState(prev => ({ ...prev, summary: e.target.value }))}
                          className="w-full bg-black border border-white/15 px-3 py-2 text-xs text-white focus:outline-none focus:border-white resize-none"
                          placeholder="한 줄에 한 디테일씩 작성해 주시면 레이아웃이 깔끔하게 맞아 떨어집니다. (최대 3줄)"
                        />
                      </div>

                      {/* Concept - 5-10줄 */}
                      <div className="space-y-1">
                        <label className="text-[9px] font-mono tracking-widest text-white/40 block">공간 철학 (Concept 5~10줄 규칙) *</label>
                        <textarea
                          required
                          rows={6}
                          value={formState.concept}
                          onChange={(e) => setFormState(prev => ({ ...prev, concept: e.target.value }))}
                          className="w-full bg-black border border-white/15 px-3 py-2 text-xs text-white focus:outline-none focus:border-white"
                          placeholder="공간 철학의 디테일한 무드와 정서적 가치를 묘사해 주십시오."
                        />
                      </div>

                      {/* Design Story */}
                      <div className="space-y-1">
                        <label className="text-[9px] font-mono tracking-widest text-white/40 block">디자인 스토리 (왜 이렇게 디자인했는가)</label>
                        <textarea
                          rows={4}
                          value={formState.designStory}
                          onChange={(e) => setFormState(prev => ({ ...prev, designStory: e.target.value }))}
                          className="w-full bg-black border border-white/15 px-3 py-2 text-xs text-white focus:outline-none focus:border-white"
                          placeholder="특정 두께, 마감 기법, 조명 배치 설계 등 구체적인 디자인 의사 결정을 서술해 주십시오."
                        />
                      </div>

                      {/* Gallery Plates (10-30장) */}
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <div className="flex justify-between items-center">
                            <label className="text-[9px] font-mono tracking-widest text-white/40 block">갤러리 리스트 URL (한 줄에 하나씩 입력, 10~30장 추천) *</label>
                            <label className="cursor-pointer text-[9px] font-mono text-white/70 hover:text-white flex items-center space-x-1 border border-white/10 px-2 py-1 bg-zinc-900 hover:bg-zinc-800 transition-colors">
                              <Upload className="w-3 h-3" />
                              <span>사진 다중 업로드</span>
                              <input
                                type="file"
                                accept="image/*"
                                multiple
                                className="hidden"
                                onChange={async (e) => {
                                  const files = e.target.files;
                                  if (files && files.length > 0) {
                                    try {
                                      const promises = Array.from(files).map(file => compressImage(file as File));
                                      const compressedUrls = await Promise.all(promises);
                                      const currentUrls = galleryInput
                                        .split('\n')
                                        .map(url => url.trim())
                                        .filter(url => url.length > 0);
                                      
                                      const newUrls = [...currentUrls, ...compressedUrls];
                                      setGalleryInput(newUrls.join('\n'));
                                    } catch (err) {
                                      alert('이미지 업로드 중 오류가 발생했습니다.');
                                    }
                                  }
                                }}
                              />
                            </label>
                          </div>
                          <textarea
                            required
                            rows={6}
                            value={galleryInput}
                            onChange={(e) => setGalleryInput(e.target.value)}
                            className="w-full bg-black border border-white/15 px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-white"
                            placeholder="https://images.unsplash.com/photo-1..."
                          />
                        </div>
                        {galleryInput.trim().length > 0 && (
                          <div className="space-y-1.5">
                            <span className="text-[8px] font-mono text-white/30 tracking-wider block">PREVIEW ({galleryInput.split('\n').filter(url => url.trim().length > 0).length} PLATES)</span>
                            <div className="flex flex-wrap gap-2 max-h-28 overflow-y-auto p-2 bg-zinc-950 border border-white/5">
                              {galleryInput.split('\n').map(url => url.trim()).filter(url => url.length > 0).map((url, i) => (
                                <div key={i} className="relative w-12 h-12 bg-zinc-900 border border-[#1A1A1A] overflow-hidden shrink-0 group">
                                  <img
                                    src={url}
                                    alt={`Preview ${i}`}
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                    onError={(e) => {
                                      (e.target as HTMLImageElement).style.display = 'none';
                                    }}
                                  />
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const updated = galleryInput
                                        .split('\n')
                                        .map(u => u.trim())
                                        .filter((u, index) => index !== i && u.length > 0);
                                      setGalleryInput(updated.join('\n'));
                                    }}
                                    className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-red-400 text-[8px] font-mono hover:text-red-300"
                                  >
                                    DELETE
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Video URL Input */}
                      <div className="space-y-1">
                        <label className="text-[9px] font-mono tracking-widest text-white/40 block">영상 URL (Video URL - YouTube, Vimeo, MP4 등)</label>
                        <input
                          type="text"
                          value={formState.videoUrl || ''}
                          onChange={(e) => setFormState(prev => ({ ...prev, videoUrl: e.target.value }))}
                          className="w-full bg-black border border-white/15 px-3 py-2 text-xs text-white focus:outline-none focus:border-white"
                          placeholder="e.g. https://www.youtube.com/watch?v=... 또는 직접 연결 비디오 링크"
                        />
                      </div>

                      {/* Action buttons */}
                      <div className="flex justify-end space-x-3 pt-4 border-t border-white/5">
                        <button
                          type="button"
                          onClick={() => { setEditingProject(null); setIsAddingNew(false); }}
                          className="px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-xs font-mono text-white/70 tracking-widest cursor-pointer"
                        >
                          CANCEL
                        </button>
                        <button
                          type="submit"
                          className="px-6 py-2.5 bg-white hover:bg-white/90 text-black font-mono text-xs font-bold tracking-widest cursor-pointer"
                        >
                          SAVE ARCHIVE
                        </button>
                      </div>

                    </form>
                  )}

                </div>
              )}

              {/* INQUIRIES TAB: VIEW USER SUBMITTED INQUIRIES */}
              {activeTab === 'inquiries' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-serif font-light text-white">온라인 문의 접수 내역</h3>
                    <p className="text-xs text-white/40">홈페이지 Contact Form을 통해 유입된 실시간 견적/상담 목록입니다.</p>
                  </div>

                  {inquiries.length === 0 ? (
                    <div className="text-center py-20 border border-dashed border-white/10">
                      <span className="font-mono text-xs text-white/40">현재 수신된 프로젝트 문의가 없습니다.</span>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {inquiries.map((inq) => (
                        <div key={inq.id} className="p-6 bg-zinc-950 border border-white/5 space-y-4">
                          
                          <div className="flex flex-col sm:flex-row justify-between gap-2 border-b border-white/5 pb-3">
                            <div className="space-y-1">
                              <span className="text-[10px] font-mono text-white/40 tracking-wider">
                                DATE: {inq.date}
                              </span>
                              <h4 className="text-sm font-sans font-medium text-white flex items-center space-x-2">
                                <span>{inq.name} ({inq.company || '개인'})</span>
                              </h4>
                            </div>

                            {/* Status dropdown selector */}
                            <div className="flex items-center space-x-2">
                              <span className="text-[9px] font-mono text-white/30">STATUS:</span>
                              <select
                                value={inq.status}
                                onChange={(e) => onUpdateInquiryStatus(inq.id, e.target.value as Inquiry['status'])}
                                className={`text-[10px] font-mono tracking-widest px-2.5 py-1 bg-black border focus:outline-none cursor-pointer ${
                                  inq.status === 'Completed'
                                    ? 'border-green-800 text-green-400'
                                    : inq.status === 'Contacted'
                                    ? 'border-blue-800 text-blue-400'
                                    : 'border-white/20 text-white/60'
                                }`}
                              >
                                <option value="Pending">미연락 (Pending)</option>
                                <option value="Contacted">상담중 (Contacted)</option>
                                <option value="Completed">완료됨 (Completed)</option>
                              </select>
                            </div>
                          </div>

                          {/* Contact information details */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-white/70">
                            <div>
                              <span className="text-white/30 mr-2">Email:</span>
                              <a href={`mailto:${inq.email}`} className="underline hover:text-white">{inq.email}</a>
                            </div>
                            <div>
                              <span className="text-white/30 mr-2">Phone:</span>
                              <span>{inq.phone}</span>
                            </div>
                          </div>

                          {/* Message box */}
                          <div className="p-4 bg-black border border-white/5 text-xs text-white/80 font-sans leading-relaxed whitespace-pre-line">
                            {inq.message}
                          </div>

                        </div>
                      ))}
                    </div>
                  )}

                </div>
              )}

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
