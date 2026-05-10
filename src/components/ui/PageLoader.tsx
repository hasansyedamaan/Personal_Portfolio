'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loader for a minimum amount of time for polish (max 1.8s total)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100%', transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[99999] bg-[var(--color-brand-heading)] flex flex-col items-center justify-center pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-white text-5xl md:text-7xl font-bold tracking-tight mb-4"
          >
            Amaan<span className="text-[var(--color-brand-accent)]">.</span>
          </motion.div>
          
          <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden mt-6">
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-full h-full bg-[var(--color-brand-accent)]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
