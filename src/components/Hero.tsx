import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
// @ts-ignore
import heroBg from '../assets/images/spatial_hero_widescreen_1783500207050.jpg';

interface HeroProps {
  onScrollToProjects: () => void;
}

export default function Hero({ onScrollToProjects }: HeroProps) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-[#0A0A0A] overflow-hidden select-none">
      {/* Background Image with Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="OneMillimeter Spatial Hero"
          className="w-full h-full object-cover opacity-60 scale-105 filter brightness-95"
          referrerPolicy="no-referrer"
        />
        {/* Rich Radial Gradient overlay for high-end cinematic feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/40 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,10,10,0)_0%,rgba(10,10,10,0.85)_100%)]" />
      </div>

      {/* Main Copywriting */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          {/* Subtitle / Concept */}
          <span className="inline-block font-mono text-xs text-white/50 tracking-[0.4em] uppercase">
            One Millimeter Makes the Difference
          </span>

          {/* Main Title */}
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif font-light tracking-tight text-white leading-[1.05]">
            OneMillimeter
          </h1>

          {/* Slogan */}
          <div className="space-y-4 max-w-2xl mx-auto pt-4 border-t border-white/10">
            <p className="text-lg md:text-2xl text-white/80 font-light tracking-wide leading-relaxed font-sans">
              We Design Experiences Through Space.
            </p>
            <p className="text-sm md:text-base text-white/40 tracking-[0.15em] font-light font-sans">
              브랜드를 공간으로 번역합니다.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={onScrollToProjects}
          className="flex flex-col items-center space-y-3 focus:outline-none cursor-pointer group"
        >
          <motion.span
            animate={{ opacity: [0.3, 1, 0.3], y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="font-mono text-[9px] tracking-[0.3em] text-white/40 group-hover:text-white transition-colors duration-300"
          >
            SCROLL
          </motion.span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="p-1 rounded-full border border-white/10 group-hover:border-white/30 transition-colors duration-300"
          >
            <ArrowDown className="w-4 h-4 text-white/40 group-hover:text-white transition-colors duration-300" />
          </motion.div>
        </button>
      </div>
    </section>
  );
}
