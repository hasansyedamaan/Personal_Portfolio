'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';
import { HiOutlineMail, HiOutlinePhone, HiCheck } from 'react-icons/hi';
import { personalInfo } from '@/constants/data';

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call for now since we don't have a Resend key
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setLoading(false);
    setSuccess(true);
    
    setTimeout(() => {
      setSuccess(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-[var(--color-brand-soft-stone)]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Have a project in mind or want to explore an opportunity? Let's connect." 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-[var(--color-brand-heading)]">Contact Information</h3>
            <p className="text-[var(--color-brand-body)]">
              I&apos;m always open to discussing product design work or partnership opportunities.
            </p>

            <div className="space-y-6">
              <div 
                onClick={copyEmail}
                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md cursor-pointer transition-shadow group"
                title="Click to copy email"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-50 text-[var(--color-brand-accent)] rounded-lg group-hover:scale-110 transition-transform">
                  <HiOutlineMail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email Me</p>
                  <p className="text-[var(--color-brand-heading)] font-semibold flex items-center gap-2">
                    {personalInfo.email}
                    {copied && <span className="text-green-500 text-xs flex items-center"><HiCheck className="mr-1" /> Copied!</span>}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-50 text-[var(--color-brand-accent)] rounded-lg">
                  <HiOutlinePhone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Call Me</p>
                  <p className="text-[var(--color-brand-heading)] font-semibold">{personalInfo.phone}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-[var(--shadow-card)]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-[var(--color-brand-heading)]">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full px-4 py-3 bg-[var(--color-brand-soft-stone)] border border-transparent focus:bg-white focus:border-[var(--color-brand-accent)] focus:ring-2 focus:ring-[var(--color-brand-accent-glow)] rounded-lg outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-[var(--color-brand-heading)]">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="w-full px-4 py-3 bg-[var(--color-brand-soft-stone)] border border-transparent focus:bg-white focus:border-[var(--color-brand-accent)] focus:ring-2 focus:ring-[var(--color-brand-accent-glow)] rounded-lg outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-[var(--color-brand-heading)]">Message</label>
                <textarea 
                  id="message" 
                  required 
                  rows={4}
                  className="w-full px-4 py-3 bg-[var(--color-brand-soft-stone)] border border-transparent focus:bg-white focus:border-[var(--color-brand-accent)] focus:ring-2 focus:ring-[var(--color-brand-accent-glow)] rounded-lg outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button type="submit" className="w-full" isLoading={loading} isSuccess={success}>
                {success ? "Message Sent!" : "Send Message"}
              </Button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
