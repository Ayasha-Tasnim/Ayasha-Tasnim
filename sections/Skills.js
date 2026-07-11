'use client';

import { motion } from 'framer-motion';
import SkillCard from '@/components/SkillCard';
import { skills } from '@/lib/data';

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 overflow-hidden bg-slate-950/10"
    >
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] rounded-full bg-glow-indigo -translate-x-1/2 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col mb-16 text-left">
          <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase mb-2">
            My Toolbox
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            My Skills & Expertise
          </h2>

          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-3" />
        </div>

        <div className="flex flex-col gap-12">
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold text-white mb-6 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              Frontend Development
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {skills.frontend.map((skill, idx) => (
                <SkillCard key={idx} skill={skill} index={idx} />
              ))}
            </div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold text-white mb-6 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              UI/UX Design
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {skills.design.map((skill, idx) => (
                <SkillCard key={idx} skill={skill} index={idx} />
              ))}
            </div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold text-white mb-6 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-accent-purple" />
              Tools & Workflow
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {skills.tools.map((skill, idx) => (
                <SkillCard key={idx} skill={skill} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
