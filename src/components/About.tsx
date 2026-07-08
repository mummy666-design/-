import React from 'react';
import { motion } from 'motion/react';
import { Award, Zap, Compass } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-36 bg-[#0A0A0A] text-white px-6 md:px-12 select-none relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-white/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* BRAND PHILOSOPHY (철학이 연혁보다 우선) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-4 space-y-4">
            <span className="font-mono text-[10px] text-white/40 tracking-[0.3em] uppercase block">
              PHILOSOPHY
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-white">
              ABOUT US
            </h2>
            <div className="w-12 h-[1px] bg-[#1A1A1A]" />
          </div>

          <div className="lg:col-span-8 space-y-8">
            <h3 className="font-serif text-2xl md:text-4xl font-light text-white tracking-wide leading-snug">
              We believe
            </h3>
            
            <div className="space-y-6">
              <p className="text-xl md:text-3xl font-light font-sans text-white/90 leading-relaxed tracking-wide">
                공간은 <span className="border-b border-white/30 pb-1">브랜드의 이야기</span>를<br className="hidden md:inline"/> 가장 강력하게 전달하는 매체입니다.
              </p>
              
              <div className="h-[1px] bg-[#1A1A1A] my-8" />
              
              <p className="text-base md:text-lg text-white/60 font-light leading-relaxed font-sans max-w-3xl">
                1MM Design은 단순히 보기 좋게 마감된 인테리어 시공사가 아닙니다. 
                우리는 brand 고유의 영혼과 물리적 물성, 고객 동선을 정밀하게 정렬하여 최상의 미학적이고 영속적인 브랜드 경험을 설계하는 <span className="text-white font-medium">Brand Experience Studio</span>입니다. 
                <br /><br />
                우리가 정의하는 1mm의 세밀한 가공 차이는 곧 고객이 전율을 느끼는 정서적 차이를 창출해 냅니다. 공간 설계의 모든 단계에 장인 정신과 최신 기술을 결합하여 가치 있는 역사를 기록해 갑니다.
              </p>
            </div>

            {/* Micro value badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="p-6 bg-[#121212] border border-[#1A1A1A] space-y-3">
                <Compass className="w-5 h-5 text-white/60" />
                <h4 className="font-serif text-lg font-light text-white">Experience-First</h4>
                <p className="text-xs text-white/40 font-sans leading-relaxed">화려한 치장 대신 방문객의 정서와 오감 경험을 기준으로 설계합니다.</p>
              </div>
              <div className="p-6 bg-[#121212] border border-[#1A1A1A] space-y-3">
                <Zap className="w-5 h-5 text-white/60" />
                <h4 className="font-serif text-lg font-light text-white">1mm Accuracy</h4>
                <p className="text-xs text-white/40 font-sans leading-relaxed">단차 제로를 추구하는 철저한 공학 감리와 수작업 마감 디테일.</p>
              </div>
              <div className="p-6 bg-[#121212] border border-[#1A1A1A] space-y-3">
                <Award className="w-5 h-5 text-white/60" />
                <h4 className="font-serif text-lg font-light text-white">Premium Quality</h4>
                <p className="text-xs text-white/40 font-sans leading-relaxed">국내외 럭셔리 대기업 브랜드들과의 협업으로 검증된 신뢰도.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
