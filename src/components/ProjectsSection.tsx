'use client';

import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import { projects } from '@/constants/data';
import { Tilt } from 'react-tilt';
import { HiOutlineExternalLink, HiOutlineCode, HiOutlineDocumentSearch, HiOutlineShare, HiOutlineBookOpen, HiOutlineCloud, HiOutlineChatAlt2 } from 'react-icons/hi';
import { SiJupyter } from 'react-icons/si';
import { FaJava, FaHtml5, FaCss3Alt, FaJs, FaPython } from 'react-icons/fa';
import Skeleton from './ui/Skeleton';
import { useState, useEffect } from 'react';

export default function ProjectsSection() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for skeleton demo
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } }
  };

  const getProjectIcon = (title: string) => {
    if (title.includes("ATS")) return <HiOutlineDocumentSearch size={24} />;
    if (title.includes("File Sharing")) return <HiOutlineShare size={24} />;
    if (title.includes("Learning")) return <HiOutlineBookOpen size={24} />;
    if (title.includes("Climate")) return <HiOutlineCloud size={24} />;
    if (title.includes("Tweet")) return <HiOutlineChatAlt2 size={24} />;
    return <HiOutlineCode size={24} />;
  };

  const getTechIcon = (tech: string) => {
    const iconProps = { className: "w-3 h-3 mr-1.5" };
    switch (tech.toLowerCase()) {
      case 'html': return <FaHtml5 {...iconProps} className="w-3 h-3 mr-1.5 text-orange-500" />;
      case 'css': return <FaCss3Alt {...iconProps} className="w-3 h-3 mr-1.5 text-blue-500" />;
      case 'javascript': return <FaJs {...iconProps} className="w-3 h-3 mr-1.5 text-yellow-400" />;
      case 'java': return <FaJava {...iconProps} className="w-3 h-3 mr-1.5 text-red-500" />;
      case 'jupyter': return <SiJupyter {...iconProps} className="w-3 h-3 mr-1.5 text-orange-400" />;
      case 'python': return <FaPython {...iconProps} className="w-3 h-3 mr-1.5 text-blue-600" />;
      default: return null;
    }
  };

  const defaultOptions = {
    reverse: false,
    max: 8,
    perspective: 1000,
    scale: 1.02,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <section id="projects" className="py-24 md:py-32 relative bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A selection of my recent work and personal projects." 
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          {loading ? (
            // Skeleton Loader
            [1, 2, 3, 4, 5].map((item) => (
              <div key={`skeleton-${item}`} className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
                 <Skeleton className="w-full h-full" />
              </div>
            ))
          ) : (
            // Actual Projects
            projects.map((project) => (
              <motion.div key={project.title} variants={itemVariants}>
                <Tilt options={defaultOptions} className="w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group block w-full h-full bg-[var(--color-brand-off-white)] border border-gray-100 rounded-2xl p-6 md:p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-accent)]"
                    style={{ transform: 'translateZ(20px)' }}
                  >
                    <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-[var(--color-brand-accent)]">
                      <HiOutlineExternalLink size={24} />
                    </div>

                    <div className="mb-6 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[var(--color-brand-accent)]">
                      {getProjectIcon(project.title)}
                    </div>

                    <h3 className="text-xl font-bold mb-4 text-[var(--color-brand-heading)] group-hover:text-[var(--color-brand-accent)] transition-colors">
                      {project.title}
                    </h3>
                    
                    <div className="mt-auto pt-6 flex flex-wrap gap-2">
                      {project.stack.map(tech => (
                        <span key={tech} className="flex items-center px-3 py-1 bg-white rounded-full text-xs font-medium text-[var(--color-brand-body)] shadow-sm">
                          {getTechIcon(tech)}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </a>
                </Tilt>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
}
