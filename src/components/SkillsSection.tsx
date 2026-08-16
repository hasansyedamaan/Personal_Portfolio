'use client';

import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import { skills } from '@/constants/data';
import { SiPython, SiJavascript, SiCplusplus, SiC, SiPhp } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { HiDatabase } from 'react-icons/hi';
import { type IconType } from 'react-icons';

const languageIcons: Record<string, { icon: IconType; color: string }> = {
  Python: { icon: SiPython, color: '#3776AB' },
  Java: { icon: FaJava, color: '#E11F21' },
  JavaScript: { icon: SiJavascript, color: '#F7DF1E' },
  SQL: { icon: HiDatabase, color: '#336791' },
  'C++': { icon: SiCplusplus, color: '#00599C' },
  C: { icon: SiC, color: '#A8B9CC' },
  PHP: { icon: SiPhp, color: '#777BB4' },
};

export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const langItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const } }
  };

  const otherCategories = [
    { title: "AI & Multimodal Modeling", data: skills.ai_ml },
    { title: "Interpretability & Evaluation", data: skills.evaluation },
    { title: "Frameworks & Computer Vision", data: skills.frameworks_cv },
    { title: "Backend & Web", data: skills.backend_web },
    { title: "Cloud & DevOps", data: skills.cloud_devops },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 relative bg-brand-soft-stone">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="A comprehensive overview of my technical expertise and tools I use." 
        />

        {/* Programming Languages - Icon Grid */}
        <motion.div
          className="bg-white rounded-2xl p-6 md:p-8 shadow-(--shadow-card) hover:shadow-(--shadow-card-hover) transition-shadow duration-300 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          <h3 className="text-xl font-bold mb-8 text-brand-heading border-b border-gray-100 pb-4">
            Programming Languages
          </h3>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6">
            {skills.languages.map((lang) => {
              const iconData = languageIcons[lang];
              if (!iconData) return null;
              const IconComponent = iconData.icon;
              return (
                <motion.div
                  key={lang}
                  variants={langItemVariants}
                  whileHover={{ y: -6, scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex flex-col items-center gap-3 cursor-default select-none group"
                >
                  <div className="w-16 h-16 md:w-18 md:h-18 rounded-2xl bg-brand-soft-stone flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                    <IconComponent 
                      size={36} 
                      style={{ color: iconData.color }}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <span className="text-sm font-semibold text-brand-heading text-center">
                    {lang}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Other Skill Categories - Pill Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          {otherCategories.map((category) => (
            <motion.div 
              key={category.title}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-(--shadow-card) hover:shadow-(--shadow-card-hover) transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-brand-heading border-b border-gray-100 pb-4">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.data.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, backgroundColor: 'var(--color-brand-accent)', color: '#ffffff' }}
                    className="px-4 py-2 rounded-lg bg-brand-soft-stone text-brand-body text-sm font-medium transition-colors cursor-default select-none"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
