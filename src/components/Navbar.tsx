import React from 'react';
import { Shield, Mail, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface NavbarProps {
  currentSection: string;
  onNavigate: (section: string) => void;
  onOpenAdmin: () => void;
  isAdminLoggedIn: boolean;
}

export default function Navbar({ currentSection, onNavigate, onOpenAdmin, isAdminLoggedIn }: NavbarProps) {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'projects', label: 'PROJECTS' },
    { id: 'about', label: 'ABOUT' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#0A0A0A]/85 backdrop-blur-md border-b border-[#1A1A1A] py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* LOGO */}
        <button 
          onClick={() => onNavigate('home')} 
          className="group flex flex-col items-start tracking-[0.25em] font-mono text-white text-left focus:outline-none cursor-pointer"
        >
          <span className="text-lg font-bold tracking-[0.3em] transition-all duration-300 group-hover:text-white/80">
            OneMillimeter
          </span>
          <span className="text-[9px] text-white/40 tracking-[0.1em] font-sans">
            BRAND EXPERIENCE STUDIO
          </span>
        </button>

        {/* NAVIGATION ITEMS */}
        <nav className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`relative py-1 text-xs tracking-[0.2em] transition-colors duration-300 focus:outline-none cursor-pointer ${
                currentSection === item.id 
                  ? 'text-white font-medium' 
                  : 'text-white/50 hover:text-white'
              }`}
            >
              {item.label}
              {currentSection === item.id && (
                <motion.span
                  layoutId="activeNavLine"
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-white"
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* RIGHT SIDE ACTIONS */}
        <div className="flex items-center space-x-6">
          {/* Quick contact button */}
          <button
            onClick={() => onNavigate('contact')}
            className="flex items-center space-x-2 bg-white text-black hover:bg-white/90 text-[10px] tracking-widest font-mono font-semibold py-2 px-4 rounded-none transition-all duration-300 group cursor-pointer"
          >
            <span className="hidden sm:inline">INQUIRE</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
