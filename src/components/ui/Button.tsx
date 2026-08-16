'use client';

import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  isLoading?: boolean;
  isSuccess?: boolean;
}

export default function Button({ 
  children, 
  className, 
  variant = 'primary', 
  isLoading, 
  isSuccess,
  ...props 
}: ButtonProps) {
  
  const baseClasses = "relative overflow-hidden inline-flex items-center justify-center font-medium transition-all duration-300 ease-out rounded-lg px-6 py-3";
  
  const variants = {
    primary: "bg-brand-accent text-white hover:bg-brand-accent-hover shadow-md hover:shadow-(--shadow-card-hover)",
    secondary: "bg-brand-heading text-white hover:bg-black shadow-md",
    outline: "border-2 border-[var(--color-brand-accent)] text-brand-accent hover:bg-brand-accent hover:text-white",
    ghost: "text-brand-body hover:text-brand-heading hover:bg-brand-soft-stone"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={twMerge(clsx(baseClasses, variants[variant]), className)}
      disabled={isLoading || isSuccess || props.disabled}
      {...props}
    >
      {/* Ripple effect overlay can be added here if needed */}
      <span className={clsx("flex items-center gap-2", (isLoading || isSuccess) && "opacity-0")}>
        {children}
      </span>

      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </span>
      )}

      {isSuccess && (
        <motion.span 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </motion.span>
      )}
    </motion.button>
  );
}
