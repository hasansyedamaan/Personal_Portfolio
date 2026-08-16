'use client';

import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import { experience, education, personalInfo } from '@/constants/data';
import { HiOutlineAcademicCap, HiOutlineBriefcase } from 'react-icons/hi';
import Image from 'next/image';

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } }
  };

  return (
    <section id="about" className="py-24 md:py-32 relative bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading 
          title="About Me" 
          subtitle="Discover who I am and what drives my passion for technology." 
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Bio & Photo */}
          <motion.div 
            className="lg:col-span-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
          >
            <motion.div variants={itemVariants} className="relative w-full aspect-4/3 rounded-2xl overflow-hidden mb-8 shadow-(--shadow-card)">
              <Image 
                src="/profile2.png" 
                alt="Amaan Hasan" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
            </motion.div>
            
            <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-4 text-brand-heading">
              Get to know me
            </motion.h3>
            
            <motion.div variants={itemVariants} className="prose prose-lg text-brand-body">
              {personalInfo.bio.split('\n\n').map((paragraph, i) => (
                <p key={i} className="mb-4 leading-relaxed last:mb-0">
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Timeline */}
          <motion.div 
            className="lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
          >
            {/* Experience */}
            <div className="mb-12">
              <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-indigo-50 text-brand-accent">
                  <HiOutlineBriefcase size={24} />
                </div>
                <h3 className="text-2xl font-bold text-brand-heading">Work Experience</h3>
              </motion.div>

              <div className="space-y-8 ml-6 pl-8 relative">
                {/* Animated Timeline Line */}
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: '100%' }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="absolute left-0 top-0 w-0.5 bg-indigo-100"
                />
                
                {experience.map((exp, i) => (
                  <motion.div 
                    key={i} 
                    variants={itemVariants} 
                    className="relative"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.span 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: false, margin: "-100px" }}
                      transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 300, damping: 20 }}
                      className="absolute -left-10.25 top-1 w-5 h-5 rounded-full border-4 border-white bg-brand-accent shadow-sm z-10"
                    />
                    <div className="bg-brand-soft-stone p-6 rounded-2xl hover:shadow-(--shadow-card) transition-shadow duration-300">
                      <span className="text-sm font-semibold text-brand-accent tracking-wide uppercase mb-1 block">
                        {exp.date}
                      </span>
                      <h4 className="text-lg font-bold text-brand-heading mb-1">{exp.role}</h4>
                      <div className="flex items-center gap-3 mb-4">
                        {exp.logo && (
                          <Image src={exp.logo} alt={exp.company} width={48} height={48} className="object-contain flex-shrink-0" />
                        )}
                        <h5 className="text-md font-medium text-gray-600">{exp.company}</h5>
                      </div>
                      <p className="text-brand-body leading-relaxed">
                        {exp.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-indigo-50 text-brand-accent">
                  <HiOutlineAcademicCap size={24} />
                </div>
                <h3 className="text-2xl font-bold text-brand-heading">Education</h3>
              </motion.div>

              <div className="space-y-8 ml-6 pl-8 relative">
                {/* Animated Timeline Line */}
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: '100%' }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="absolute left-0 top-0 w-0.5 bg-indigo-100"
                />

                {education.map((edu, i) => (
                  <motion.div 
                    key={i} 
                    variants={itemVariants} 
                    className="relative"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.span 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: false, margin: "-100px" }}
                      transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 300, damping: 20 }}
                      className="absolute -left-10.25 top-1 w-5 h-5 rounded-full border-4 border-white bg-brand-accent shadow-sm z-10"
                    />
                    <div className="bg-brand-soft-stone p-6 rounded-2xl hover:shadow-(--shadow-card) transition-shadow duration-300">
                      <span className="text-sm font-semibold text-brand-accent tracking-wide uppercase mb-1 block">
                        {edu.date}
                      </span>
                      <h4 className="text-lg font-bold text-brand-heading mb-1">{edu.degree}</h4>
                      <div className="flex items-center gap-3 mb-4">
                        {edu.logo && (
                          <Image src={edu.logo} alt={edu.school} width={36} height={36} className="object-contain flex-shrink-0" />
                        )}
                        <h5 className="text-md font-medium text-gray-600">{edu.school}</h5>
                      </div>
                      <p className="text-brand-body leading-relaxed">
                        {edu.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
