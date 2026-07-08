import React, { useState } from 'react';
import { Mail, MapPin, Send, ArrowRight, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Inquiry } from '../types';

interface ContactProps {
  onSubmitInquiry: (inquiry: Omit<Inquiry, 'id' | 'date' | 'status'>) => void;
}

export default function Contact({ onSubmitInquiry }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('이름, 이메일, 문의 내용을 입력해주세요.');
      return;
    }

    onSubmitInquiry({
      name: formData.name,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    });

    setSubmitted(true);
    setError('');
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    });

    // Reset success animation after a few seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 8000);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#0A0A0A] text-white px-6 md:px-12 select-none relative">
      {/* Decorative linear grid line */}
      <div className="absolute inset-y-0 left-12 md:left-24 w-[1px] bg-[#1A1A1A] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Contact Intro Header */}
        <div className="space-y-4">
          <span className="font-mono text-[10px] text-white/40 tracking-[0.3em] uppercase block">
            CONNECTION
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-light tracking-tight text-white leading-tight">
            Let's make<br />something memorable.
          </h2>
          <div className="w-16 h-[1px] bg-[#1A1A1A] mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: Contact details & Map Mockup */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-light text-white">프로젝트 문의</h3>
              <p className="text-sm text-white/50 leading-relaxed font-sans">
                새로운 브랜드 경험의 구축, 스페이스 크레이이티브 자문, 공간 시공 및 정밀 설계 설계 협업을 원하신다면 언제든 편하게 연락 주십시오.
              </p>
            </div>

            {/* Quick Contact Links */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#121212] border border-[#1A1A1A] text-white/70">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono text-white/40 tracking-wider uppercase">EMAIL (이메일)</h4>
                  <p className="text-sm font-sans font-light text-white/90 hover:text-white transition-colors">
                    jwy@1mmdesign.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#121212] border border-[#1A1A1A] text-white/70">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono text-white/40 tracking-wider uppercase">STUDIO (오시는 길)</h4>
                  <p className="text-sm font-sans font-light text-white/90 leading-relaxed">
                    서울 광진구 아차산로78길 166 광장빌딩 6층
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder Mockup (Minimal Black map theme) */}
            <div className="relative w-full aspect-video border border-[#1A1A1A] bg-[#121212] overflow-hidden group">
              <div className="absolute inset-0 z-0 opacity-40 grayscale filter invert contrast-125">
                {/* Clean map drawing representation */}
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle, #2a2a2a 1px, transparent 1px), linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)',
                  backgroundSize: '24px 24px'
                }} />
                {/* Fake roads and locations */}
                <div className="absolute top-1/2 left-0 right-0 h-4 bg-zinc-900 border-y border-[#1A1A1A]" />
                <div className="absolute left-1/3 top-0 bottom-0 w-6 bg-zinc-900 border-x border-[#1A1A1A]" />
                <div className="absolute left-2/3 top-1/4 bottom-0 w-4 bg-zinc-900 border-x border-[#1A1A1A]" />
              </div>

              {/* Pin indicator */}
              <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                <div className="w-3 h-3 bg-white rounded-full animate-ping absolute" />
                <div className="w-3.5 h-3.5 bg-white rounded-full border-2 border-black z-20" />
                <div className="mt-2 bg-[#0A0A0A] border border-[#1A1A1A] px-2 py-1 text-[8px] font-mono tracking-widest text-white whitespace-nowrap">
                  1MM DESIGN STUDIO
                </div>
              </div>

              {/* Map Info overlay */}
              <div className="absolute bottom-3 left-3 bg-[#0A0A0A]/85 backdrop-blur-md border border-[#1A1A1A] px-3 py-1.5 text-[9px] font-mono text-white/60">
                SEOUL GWANGJIN-GU STUDIO
              </div>
            </div>

          </div>

          {/* RIGHT: Sophisticated Interactive Contact Form */}
          <div className="lg:col-span-7 bg-[#121212] border border-[#1A1A1A] p-8 md:p-12 space-y-8">
            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-light text-white">온라인 문의 등록</h3>
              <p className="text-xs text-white/40 font-sans">
                정보를 입력해 주시면 경험 담당 파트너가 내용을 검토한 후 24시간 이내 연락을 드립니다.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-16 text-center space-y-6"
                >
                  <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mx-auto text-white">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-serif font-light text-white">문의가 성공적으로 전달되었습니다</h4>
                    <p className="text-xs text-white/50 max-w-sm mx-auto font-sans leading-relaxed">
                      귀중한 비즈니스 요청에 감사드립니다. 1mm 오차 없는 완벽한 분석을 거쳐 신속하게 연락을 드릴 수 있도록 하겠습니다.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono tracking-widest border border-[#1A1A1A] px-6 py-2.5 hover:bg-white hover:text-black transition-all"
                  >
                    새로운 문의 작성
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 text-left"
                >
                  {error && (
                    <div className="p-4 bg-red-950/40 border border-red-900 text-xs text-red-200 font-sans">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono tracking-widest text-white/50 block">이름 / 담당자명 *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-[#0A0A0A] border border-[#1A1A1A] rounded-none px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors"
                        placeholder="홍길동"
                        required
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono tracking-widest text-white/50 block">회사명 / 브랜드명</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-[#0A0A0A] border border-[#1A1A1A] rounded-none px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors"
                        placeholder="주식회사 에이치코리아"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono tracking-widest text-white/50 block">이메일 주소 *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-[#0A0A0A] border border-[#1A1A1A] rounded-none px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors"
                        placeholder="client@brand.com"
                        required
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono tracking-widest text-white/50 block">연락처 *</label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-[#0A0A0A] border border-[#1A1A1A] rounded-none px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors"
                        placeholder="010-0000-0000"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] font-mono tracking-widest text-white/50 block">의뢰 내용 (프로젝트 요구사항) *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-[#0A0A0A] border border-[#1A1A1A] rounded-none px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors resize-none"
                      placeholder="프로젝트 일정, 장소, 면적, 대략적인 컨셉 구상 등 1MM Design 파트너와 나누고 싶으신 세부 사양을 자유롭게 적어주십시오."
                      required
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full md:w-auto px-8 py-3.5 bg-white text-black font-mono text-[10px] tracking-[0.25em] font-semibold hover:bg-white/90 transition-colors flex items-center justify-center space-x-3 cursor-pointer group"
                    >
                      <span>SUBMIT REQUEST</span>
                      <Send className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
