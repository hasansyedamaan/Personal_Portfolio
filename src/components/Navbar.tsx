'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '@/constants/data';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section
      const sections = navLinks.map(link => link.name.toLowerCase());
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/85 backdrop-blur-md shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="#home" className="text-2xl font-bold text-[var(--color-brand-heading)] group">
          Amaan<span className="text-[var(--color-brand-accent)]">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors relative group ${
                activeSection === link.name.toLowerCase() 
                  ? 'text-[var(--color-brand-accent)]' 
                  : 'text-[var(--color-brand-body)] hover:text-[var(--color-brand-heading)]'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-brand-accent)] transition-all duration-300 group-hover:w-full ${
                activeSection === link.name.toLowerCase() ? 'w-full' : ''
              }`} />
            </Link>
          ))}
          <a 
            href="https://www.linkedin.com/in/syed-amaan-hasan-497898212/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[var(--color-brand-heading)] text-white text-sm font-medium hover:bg-black transition-colors"
          >
            LinkedIn
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[var(--color-brand-heading)] p-2 z-50 hover-target"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
              className="fixed inset-0 bg-white/95 backdrop-blur-lg z-40 flex flex-col justify-center items-center h-screen"
            >
              <div className="flex flex-col space-y-8 items-center w-full px-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="overflow-hidden"
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="text-3xl font-bold text-[var(--color-brand-heading)] hover:text-[var(--color-brand-accent)] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + navLinks.length * 0.05 }}
                  href="https://www.linkedin.com/in/syed-amaan-hasan-497898212/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 px-8 py-4 w-full text-center rounded-full bg-[var(--color-brand-accent)] text-white text-lg font-medium shadow-lg hover-target active:scale-95 transition-transform"
                >
                  Connect on LinkedIn
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
