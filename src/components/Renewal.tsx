import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight, Shield } from 'lucide-react';
import { Inquiry } from '../types';

interface RenewalProps {
  onSubmitInquiry: (rawInq: Omit<Inquiry, 'id' | 'date' | 'status'>) => void;
  onEnterSite: () => void;
  onOpenAdmin: () => void;
}

export default function Renewal({ onSubmitInquiry, onEnterSite, onOpenAdmin }: RenewalProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      onSubmitInquiry({
        name: formData.name,
        company: formData.company || '일반 문의',
        email: formData.email,
        phone: formData.phone || '-',
        message: formData.message,
      });
      setIsSubmitted(true);
      setLoading(false);
      setFormData({ name: '', company: '', email: '', phone: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#060606] text-white flex flex-col justify-between selection:bg-white/10 selection:text-white font-sans overflow-x-hidden relative">
      {/* Decorative architectural background line accents */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/[0.015] pointer-events-none hidden md:block" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/[0.015] pointer-events-none hidden md:block" />

      {/* Header */}
      <header className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8 flex justify-between items-center z-10 relative select-none">
        <div className="flex items-center space-x-2">
          <span className="font-mono text-sm tracking-[0.4em] font-semibold text-white">OneMillimeter</span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
        </div>
      </header>

      {/* Main Container */}
      <main className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center z-10 relative">
        
        {/* Left Side: Brand Statement & Renewal Notice */}
        <div className="lg:col-span-7 space-y-10 text-left">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-full font-mono text-[9px] tracking-widest uppercase">
              <span>Notice</span>
              <span className="w-1 h-1 rounded-full bg-amber-500" />
              <span>RENEWAL IN PROGRESS</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light tracking-tight text-white leading-tight">
              더 깊이 있게 조율된<br />
              <span className="text-white/40">브랜드 경험 공간</span>을 위해<br />
              사이트를 리뉴얼 중입니다
            </h1>
          </div>

          <p className="text-sm sm:text-base text-white/50 leading-relaxed font-sans max-w-xl font-light">
            OneMillimeter는 단순한 시공을 넘어, 브랜드 고유의 정서적 본질과 1mm의 세밀한 물성을 결합하여 완결성 있는 경험을 설계합니다. 현재 더욱 격조 높은 포트폴리오 스레드와 감도 높은 디지털 공간 구축을 위해 새로운 단장을 진행하고 있습니다. 2026년 하반기, 완전히 새로워진 모습으로 만나 뵙겠습니다.
          </p>

          {/* Quick Contacts Panel */}
          <div className="pt-4 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">
            <div className="flex items-start space-x-3 text-white/50 group sm:col-span-2">
              <div className="p-2 bg-white/[0.03] border border-white/5 group-hover:border-white/10 group-hover:text-white rounded-lg transition-all">
                <Mail className="w-4 h-4 text-white/60" />
              </div>
              <div className="space-y-0.5">
                <span className="block text-[10px] font-mono tracking-widest text-white/30 uppercase">E-MAIL</span>
                <a href="mailto:jwy@1mmdesign.com" className="text-xs font-mono text-white/70 hover:text-white transition-colors">
                  jwy@1mmdesign.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3 text-white/50 group sm:col-span-2">
              <div className="p-2 bg-white/[0.03] border border-white/5 group-hover:border-white/10 group-hover:text-white rounded-lg transition-all">
                <MapPin className="w-4 h-4 text-white/60" />
              </div>
              <div className="space-y-0.5">
                <span className="block text-[10px] font-mono tracking-widest text-white/30 uppercase">STUDIO ADDRESS</span>
                <span className="text-xs font-sans text-white/70 leading-relaxed block">
                  서울 광진구 아차산로78길 166 광장빌딩 6층
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Fast Inquiry Box */}
        <div className="lg:col-span-5">
          <div className="bg-[#0c0c0c] border border-white/5 p-8 md:p-10 relative overflow-hidden shadow-2xl">
            {/* Subtle light leak decoration */}
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />
            
            <div className="space-y-2 mb-8 text-left">
              <span className="font-mono text-[9px] tracking-[0.25em] text-amber-500 uppercase block font-semibold">
                LEAVE A MESSAGE
              </span>
              <h2 className="text-xl font-serif font-light text-white">
                리뉴얼 중에도 프로젝트 문의하기
              </h2>
              <p className="text-xs text-white/40 leading-relaxed font-sans">
                공간 혁신 제안이나 신규 견적 요청을 남겨주시면, 담당 기획자가 24시간 이내에 개별 연락 드립니다.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5 text-left"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-widest text-white/40 uppercase block">
                        성함 *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="홍길동 대표"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#050505] border border-white/5 focus:border-white/20 text-xs px-3 py-2.5 outline-none font-sans text-white placeholder-white/20 transition-all rounded"
                      />
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-widest text-white/40 uppercase block">
                        회사명/브랜드명
                      </label>
                      <input
                        type="text"
                        placeholder="예: 1MM 파트너스"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-[#050505] border border-white/5 focus:border-white/20 text-xs px-3 py-2.5 outline-none font-sans text-white placeholder-white/20 transition-all rounded"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-widest text-white/40 uppercase block">
                        이메일 주소 *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#050505] border border-white/5 focus:border-white/20 text-xs px-3 py-2.5 outline-none font-mono text-white placeholder-white/20 transition-all rounded"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-widest text-white/40 uppercase block">
                        연락처
                      </label>
                      <input
                        type="tel"
                        placeholder="010-1234-5678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#050505] border border-white/5 focus:border-white/20 text-xs px-3 py-2.5 outline-none font-mono text-white placeholder-white/20 transition-all rounded"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono tracking-widest text-white/40 uppercase block">
                      문의 내용 *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="프로젝트 예정 시기, 평수, 예산, 컨셉 방향 등을 간략히 기재해 주시면 신속한 맞춤 상담에 큰 도움이 됩니다."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#050505] border border-white/5 focus:border-white/20 text-xs p-3 outline-none font-sans text-white placeholder-white/20 transition-all resize-none rounded leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-white hover:bg-zinc-200 text-black py-3 rounded text-xs tracking-widest font-mono font-medium hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span>{loading ? 'SENDING...' : 'SEND PROPOSAL'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-medium text-white">문의가 성공적으로 전달되었습니다</h3>
                    <p className="text-xs text-white/40 leading-relaxed font-sans max-w-xs">
                      OneMillimeter의 공간 컨설턴트가 내용을 면밀하게 검토한 후 빠르게 이메일 및 유선으로 연락 드리겠습니다.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Footer / Bypass entry */}
      <footer className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-white/5 z-10 relative select-none">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase text-center sm:text-left">
            COPYRIGHT © 2026 OneMillimeter. ALL RIGHTS RESERVED.
          </span>
          <button
            onClick={onOpenAdmin}
            className="text-[10px] font-mono tracking-widest text-white/20 hover:text-white/60 transition-all cursor-pointer flex items-center gap-1.5 border border-white/5 hover:border-white/20 px-2 py-0.5 rounded bg-white/[0.01]"
            title="Admin Workspace Access"
          >
            <Shield className="w-2.5 h-2.5" />
            <span>PORTAL</span>
          </button>
        </div>
        
        {/* Bypass link */}
        <button
          onClick={onEnterSite}
          className="text-[10px] font-mono tracking-widest text-white/40 hover:text-white border-b border-dashed border-white/20 hover:border-white transition-all cursor-pointer pb-0.5 flex items-center gap-1.5"
          title="작업 진행 상황을 임시로 확인하기 위해 사이트로 입장합니다."
        >
          <span>임시 사이트 입장 (미리보기)</span>
          <ArrowRight className="w-3 h-3 text-amber-500" />
        </button>
      </footer>
    </div>
  );
}
