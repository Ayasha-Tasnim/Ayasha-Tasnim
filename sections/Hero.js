'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Terminal, Braces } from 'lucide-react';
import { Github, Linkedin, Facebook } from '@/components/Icons';
import Image from 'next/image';
import CodeCard from '@/components/CodeCard';
import { personalInfo } from '@/lib/data';

const socialsList = [
  { icon: Github, href: 'https://github.com/Ayasha-Tasnim', label: 'GitHub' },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/ayasha-tasnim/',
    label: 'LinkedIn',
  },
];

export default function Hero() {
  const scrollToSection = id => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6"
    >
      {/* Background glowing blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-glow-purple pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-glow-indigo pointer-events-none z-0" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10 py-12">
        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col text-left justify-center"
        >
          {/* Greeting Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="self-start flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm font-semibold tracking-wide text-purple-300 mb-6"
          >
            <span>👋 Hi, I'm</span>
          </motion.div>

          {/* Large Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
            AYASHA TASNIM
          </h1>

          {/* Roles */}
          <h2 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-purple-400 via-accent-light to-indigo-400 bg-clip-text text-transparent mb-6">
            Computer Science Student &amp; Aspiring Software Engineer
          </h2>

          {/* Bio Description */}
          <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed mb-8">
            {personalInfo.description}
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <span>View My Work</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 rounded-full border border-white/10 hover:border-purple-500/50 bg-slate-900/30 text-white hover:text-purple-300 font-bold text-sm tracking-wide hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Me
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
              Connect:
            </span>
            <div className="flex items-center gap-3">
              {socialsList.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-3 rounded-full bg-slate-950 border border-white/5 text-slate-400 hover:text-purple-400 hover:border-purple-500/30 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Right Column - Avatar & Code Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          {/* Parallax floating gradient rings behind the picture */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full border border-dashed border-purple-500/20 pointer-events-none z-0"
          />

          {/* Primary Floating Tech Badges */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-10 left-4 sm:-left-6 z-20 glass-card p-3 rounded-2xl flex items-center gap-2 border border-purple-500/20 text-purple-300"
          >
            <Terminal className="w-5 h-5" />
            <span className="text-xs font-mono font-bold">JavaScript</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className="absolute bottom-20 right-4 sm:-right-6 z-20 glass-card p-3 rounded-2xl flex items-center gap-2 border border-indigo-500/20 text-indigo-300"
          >
            <Braces className="w-5 h-5" />
            <span className="text-xs font-mono font-bold">React / Next.js</span>
          </motion.div>

          {/* Avatar Container */}
          <div className="relative w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] rounded-3xl overflow-hidden glass-card p-2 border border-white/10 shadow-3xl shadow-purple-500/5 z-10 flex items-center justify-center">
            {/* Inner Glow border */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent pointer-events-none rounded-2xl" />

            {/* Profile Image */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-950">
              <Image
                src="/images/ayasha_profile.png"
                alt="Ayasha Tasnim Profile Portrait"
                fill
                priority
                sizes="(max-width: 768px) 280px, 350px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Overlapping Code Card */}
          <div className="absolute bottom-[-50px] left-0 sm:left-[-30px] z-35 scale-90 sm:scale-95 shadow-2xl">
            <CodeCard />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
