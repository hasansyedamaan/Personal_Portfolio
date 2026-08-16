'use client';

import { personalInfo, navLinks } from '@/constants/data';
import Link from 'next/link';
import { HiArrowUp } from 'react-icons/hi';
import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-100 py-12 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-brand-heading mb-2">
              {personalInfo.name}
            </h2>
            <p className="text-brand-body text-sm">
              Building digital experiences that matter.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-brand-body hover:text-brand-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-body hover:text-brand-heading transition-colors"
            >
              GitHub
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-body hover:text-brand-heading transition-colors"
            >
              LinkedIn
            </a>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Built with Next.js 14, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-brand-heading text-white rounded-full flex items-center justify-center shadow-lg hover:bg-black transition-colors"
        aria-label="Scroll to top"
      >
        <HiArrowUp size={20} />
      </motion.button>
    </footer>
  );
}
