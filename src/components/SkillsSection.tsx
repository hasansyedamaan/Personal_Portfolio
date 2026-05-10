'use client';

import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import { skills } from '@/constants/data';

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

  const categories = [
    { title: "Programming Languages", data: skills.languages },
    { title: "Web & Backend", data: skills.backend },
    { title: "AI & Data", data: skills.ai },
    { title: "Developer Tools", data: skills.tools },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 relative bg-[var(--color-brand-soft-stone)]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="A comprehensive overview of my technical expertise and tools I use." 
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          {categories.map((category) => (
            <motion.div 
              key={category.title}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-[var(--color-brand-heading)] border-b border-gray-100 pb-4">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.data.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, backgroundColor: 'var(--color-brand-accent)', color: '#ffffff' }}
                    className="px-4 py-2 rounded-lg bg-[var(--color-brand-soft-stone)] text-[var(--color-brand-body)] text-sm font-medium transition-colors cursor-default select-none"
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
