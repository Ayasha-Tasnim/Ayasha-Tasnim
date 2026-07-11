'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';

const categories = ['All', 'Next.js', 'React.js', 'JavaScript', 'UI/UX'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(project => {
    if (activeCategory === 'All') return true;

    return project.tech.some(
      techName => techName.toLowerCase() === activeCategory.toLowerCase(),
    );
  });

  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-glow-purple translate-x-1/3 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="flex flex-col text-left">
            <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase mb-2">
              My Work
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Featured Projects
            </h2>

            <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-3" />
          </div>

          <div className="flex flex-wrap gap-2 p-1.5 rounded-full bg-slate-950 border border-white/5 w-fit">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-300 z-10 ${
                  activeCategory === category
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {category}

                {activeCategory === category && (
                  <motion.div
                    layoutId="activeCategoryIndicator"
                    className="absolute inset-0 bg-purple-600 rounded-full -z-10 shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 25,
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                }}
                transition={{
                  duration: 0.4,
                }}
              >
                <ProjectCard project={project} index={idx} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
