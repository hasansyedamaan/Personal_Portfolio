'use client';

import { motion } from 'framer-motion';
import Button from './ui/Button';
import { HiDownload, HiArrowRight } from 'react-icons/hi';
import { personalInfo } from '@/constants/data';
import { Tilt } from 'react-tilt';
import Ghost from './Ghost';

export default function HeroSection() {

  const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 8,          // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.02,     // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,     // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null,      // What axis should be disabled. Can be X or Y.
    reset: true,     // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <section 
      id="home" 
      className="relative min-h-svh flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Dynamic Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden opacity-30 pointer-events-none mix-blend-multiply">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-white-abstract-background-with-soft-waves-loop-42861-large.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="max-w-6xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Column: Text */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
              }
            }
          }}
          className="flex flex-col items-start space-y-6 md:space-y-8"
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 32 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } }
            }}
            className="inline-block px-4 py-2 bg-white rounded-full shadow-(--shadow-card) border border-gray-100"
          >
            <span className="text-sm font-semibold text-brand-heading tracking-wide uppercase">
              Hello there! I am
            </span>
          </motion.div>

          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 32 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } }
            }}
            className="text-5xl sm:text-6xl md:text-[clamp(48px,6vw,80px)] font-extrabold leading-[1.1] tracking-tight text-brand-heading overflow-wrap break-word"
          >
            {personalInfo.name.split(' ')[0]} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 via-blue-500 to-indigo-500 animate-gradient-text">
              {personalInfo.name.split(' ').slice(1).join(' ')}
            </span>
          </motion.h1>

          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 32 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } }
            }}
            className="text-lg md:text-xl text-brand-body max-w-lg leading-relaxed"
          >
            M.Tech AI/ML Scholar and Associate Prompt Engineer crafting state-of-the-art multimodal AI solutions and scalable software architecture.
          </motion.p>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 32 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } }
            }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button 
              className="w-full sm:w-auto group hover-target" 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Work
              <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              className="w-full sm:w-auto hover-target"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              Resume
              <HiDownload className="ml-2" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Column: 3D Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="relative w-full aspect-square md:aspect-4/5 lg:aspect-square max-w-md mx-auto hidden sm:block"
        >
          {/* We are passing `any` to Tilt because it's a JS library without great typings, and we want to render it as a div */}
          <Tilt options={defaultOptions} className="w-full h-full relative" style={{ transformStyle: 'preserve-3d' }}>
            <div 
              className="w-full h-full relative flex items-center justify-center overflow-visible"
              style={{ transform: 'translateZ(30px)' }}
            >
              <Ghost />
            </div>
          </Tilt>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce"
      >
        <span className="text-xs text-brand-body uppercase tracking-widest mb-2 font-medium">Scroll</span>
        <div className="w-px h-8 bg-brand-accent" />
      </motion.div>
    </section>
  );
}
