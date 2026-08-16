'use client';
import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning!';
  if (hour < 18) return 'Good afternoon!';
  return 'Good evening!';
}

export default function Ghost() {
  const greeting = useMemo(() => getGreeting(), []);
  const [phase, setPhase] = useState<'greeting' | 'coding' | 'coffee' | 'idle'>('greeting');

  useEffect(() => {

    let isMounted = true;
    
    const runSequence = async () => {
      if (!isMounted) return;
      setPhase('greeting');
      await new Promise(r => setTimeout(r, 4000));
      
      if (!isMounted) return;
      setPhase('coding');
      await new Promise(r => setTimeout(r, 6000));
      
      if (!isMounted) return;
      setPhase('coffee');
      await new Promise(r => setTimeout(r, 5000));
      
      if (!isMounted) return;
      setPhase('idle');
    };
    
    runSequence();
    
    const interval = setInterval(runSequence, 20000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center pointer-events-none drop-shadow-[0_15px_35px_rgba(0,0,0,0.4)]">
      <AnimatePresence mode="wait">
        {phase === 'greeting' && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.8 }}
            className="absolute -top-10 bg-white px-5 py-2 rounded-2xl shadow-lg border border-gray-100 z-20"
          >
            <p className="text-sm font-bold text-brand-accent whitespace-nowrap">{greeting}</p>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-r border-b border-gray-100"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-64 h-72 lg:w-80 lg:h-80"
      >
        <svg viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="ghostGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.98" />
              <stop offset="100%" stopColor="#f4f4f5" stopOpacity="0.9" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Body */}
          <path d="M30 80 Q30 30 100 30 Q170 30 170 80 L170 180 Q160 220 145 200 Q130 230 115 200 Q100 230 85 200 Q70 230 55 200 Q40 220 30 180 Z" fill="url(#ghostGrad)" filter="url(#glow)"/>
          
          {/* Face Base */}
          <ellipse cx="100" cy="90" rx="55" ry="50" fill="#ffffff" opacity="0.3"/>
          
          {/* Eyes - Blink animation */}
          <motion.g 
            animate={{ scaleY: [1, 1, 0.1, 1, 1] }} 
            transition={{ duration: 4, times: [0, 0.45, 0.5, 0.55, 1], repeat: Infinity }}
            style={{ originY: "85px" }}
          >
            <circle cx="75" cy="85" r="10" fill="#1a1a1a"/>
            <circle cx="125" cy="85" r="10" fill="#1a1a1a"/>
            <circle cx="78" cy="82" r="3" fill="#ffffff"/>
            <circle cx="128" cy="82" r="3" fill="#ffffff"/>
          </motion.g>

          {/* Mouth depending on phase */}
          {phase === 'greeting' && (
            <ellipse cx="100" cy="115" rx="12" ry="8" fill="#1a1a1a"/>
          )}
          {phase === 'coding' && (
            <path d="M92 110 Q100 115 108 110" fill="none" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round"/>
          )}
          {phase === 'coffee' && (
             <path d="M90 112 Q100 118 110 112" fill="none" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round"/>
          )}
          {phase === 'idle' && (
            <path d="M85 110 Q100 120 115 110" fill="none" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round"/>
          )}

          {/* Blush */}
          <path d="M45 105 Q55 100 65 105 Q55 115 45 105" fill="#ffb6c1" opacity="0.5"/>
          <path d="M135 105 Q145 100 155 105 Q145 115 135 105" fill="#ffb6c1" opacity="0.5"/>

          {/* Laptop for Coding Phase */}
          <AnimatePresence>
            {phase === 'coding' && (
              <motion.g
                key="coding-elements"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Base */}
                <path d="M30 190 L170 190 L185 205 L15 205 Z" fill="#cfd8dc" />
                <path d="M15 205 L185 205 L185 208 L15 208 Z" fill="#90a4ae" />
                {/* Screen */}
                <rect x="50" y="140" width="100" height="65" rx="4" fill="#eceff1" />
                <rect x="55" y="145" width="90" height="55" rx="2" fill="#263238" />
                {/* Code lines */}
                <motion.g
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <rect x="60" y="152" width="45" height="3" fill="#4caf50" rx="1" />
                  <rect x="60" y="159" width="65" height="3" fill="#2196f3" rx="1" />
                  <rect x="75" y="166" width="55" height="3" fill="#ffeb3b" rx="1" />
                  <rect x="60" y="173" width="35" height="3" fill="#e91e63" rx="1" />
                  <rect x="100" y="173" width="30" height="3" fill="#9c27b0" rx="1" />
                </motion.g>
                {/* Arms typing */}
                <motion.path 
                  animate={{ y: [0, -8, 0], x: [0, -3, 0] }}
                  transition={{ duration: 0.15, repeat: Infinity }}
                  d="M60 130 Q45 160 70 195" fill="none" stroke="#ffffff" strokeWidth="12" strokeLinecap="round" filter="url(#glow)"
                />
                <motion.path 
                  animate={{ y: [0, -8, 0], x: [0, 3, 0] }}
                  transition={{ duration: 0.15, repeat: Infinity, delay: 0.07 }}
                  d="M140 130 Q155 160 130 195" fill="none" stroke="#ffffff" strokeWidth="12" strokeLinecap="round" filter="url(#glow)"
                />
              </motion.g>
            )}
          </AnimatePresence>

          {/* Coffee Cup for Coffee Phase */}
          <AnimatePresence>
            {phase === 'coffee' && (
              <motion.g
                key="coffee-elements"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <g className="coffee-cup" transform="translate(0, 15)">
                  <ellipse cx="145" cy="175" rx="20" ry="15" fill="#ffffff"/>
                  <path d="M125 160 L125 175 Q125 190 145 190 Q165 190 165 175 L165 160" fill="#ffffff"/>
                  <ellipse cx="145" cy="160" rx="20" ry="8" fill="#ffffff"/>
                  <ellipse cx="145" cy="160" rx="16" ry="6" fill="#6d4c41"/>
                  <motion.g animate={{ y: [0, -15, 0], opacity: [0, 0.8, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>
                    <path d="M135 145 Q135 135 140 130" stroke="#ffffff" strokeWidth="2" fill="none" />
                    <path d="M145 145 Q145 130 150 125" stroke="#ffffff" strokeWidth="2" fill="none" />
                    <path d="M155 145 Q155 135 160 130" stroke="#ffffff" strokeWidth="2" fill="none" />
                  </motion.g>
                  <path d="M165 165 Q178 165 178 175 Q178 185 165 185" fill="none" stroke="#ffffff" strokeWidth="4"/>
                </g>
                {/* Arm holding coffee */}
                <motion.path 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  d="M130 130 Q150 160 145 185" fill="none" stroke="#ffffff" strokeWidth="12" strokeLinecap="round" filter="url(#glow)"
                />
              </motion.g>
            )}
          </AnimatePresence>

          {/* Idle / Greeting arms */}
          <AnimatePresence>
            {(phase === 'idle' || phase === 'greeting') && (
              <motion.g
                key="idle-arms"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.path 
                  animate={{ rotate: phase === 'greeting' ? [0, -25, 15, -25, 0] : [0, 5, 0] }}
                  transition={{ duration: phase === 'greeting' ? 1.5 : 4, repeat: Infinity, ease: "easeInOut" }}
                  style={{ originX: "45px", originY: "130px" }}
                  d="M45 130 Q30 120 25 100 Q20 85 35 75" fill="none" stroke="#ffffff" strokeWidth="12" strokeLinecap="round" filter="url(#glow)"
                />
                {phase === 'idle' && (
                  <motion.path 
                    animate={{ rotate: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    style={{ originX: "155px", originY: "130px" }}
                    d="M155 130 Q170 120 175 100 Q180 85 165 75" fill="none" stroke="#ffffff" strokeWidth="12" strokeLinecap="round" filter="url(#glow)"
                  />
                )}
              </motion.g>
            )}
          </AnimatePresence>

        </svg>
      </motion.div>
    </div>
  );
}
