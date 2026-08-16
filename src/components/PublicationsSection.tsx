'use client';

import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import { publicationsAndPatents, certifications } from '@/constants/data';
import { HiOutlineDocumentText, HiOutlineLightBulb, HiOutlineBadgeCheck } from 'react-icons/hi';
import { FaAws } from 'react-icons/fa';

export default function PublicationsSection() {
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

  const getIcon = (type: string) => {
    if (type.toLowerCase().includes('patent')) {
      return <HiOutlineLightBulb size={24} className="text-amber-500" />;
    }
    return <HiOutlineDocumentText size={24} className="text-brand-accent" />;
  };

  const getCertIcon = (iconName: string) => {
    if (iconName === 'aws') return <FaAws size={28} className="text-[#FF9900]" />;
    return <HiOutlineBadgeCheck size={28} className="text-brand-accent" />;
  };

  return (
    <section id="publications" className="py-24 md:py-32 relative bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading 
          title="Publications, Patents & Certifications" 
          subtitle="Academic research contributions, intellectual property, and professional credentials." 
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          {publicationsAndPatents.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-brand-soft-stone p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-(--shadow-card-hover) transition-all duration-300 border border-gray-100 flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  {getIcon(item.type)}
                </div>
                <span className="text-xs font-semibold px-3 py-1 bg-white rounded-full text-brand-body shadow-sm border border-gray-100">
                  {item.date}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-brand-heading mb-2 leading-snug">
                {item.title}
              </h3>
              
              <div className="mt-auto pt-4 flex flex-col gap-1">
                <span className="text-sm font-semibold text-brand-accent">
                  {item.type}
                </span>
                <span className="text-sm text-gray-500">
                  {item.publisher}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Certifications blended into this grid */}
          {certifications.map((cert, index) => (
            <motion.div 
              key={`cert-${index}`}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-brand-soft-stone p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-(--shadow-card-hover) transition-all duration-300 border border-gray-100 flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  {getCertIcon(cert.icon)}
                </div>
                <span className="text-xs font-semibold px-3 py-1 bg-white rounded-full text-brand-body shadow-sm border border-gray-100">
                  Certification
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-brand-heading mb-2 leading-snug">
                {cert.title}
              </h3>
              
              <div className="mt-auto pt-4 flex flex-col gap-1">
                <span className="text-sm font-semibold text-brand-accent">
                  Professional Certification
                </span>
                <span className="text-sm text-gray-500">
                  {cert.issuer}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
