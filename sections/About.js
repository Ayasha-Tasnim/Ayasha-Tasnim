'use client';

import { motion } from 'framer-motion';
import { Sparkles, Terminal, ShieldCheck, Cpu, Users } from 'lucide-react';
import { personalInfo } from '@/lib/data';

const features = [
  {
    icon: Terminal,
    title: 'Frontend Development',
    description:
      'Building responsive and interactive interfaces using React and Next.js.',
  },
  {
    icon: Sparkles,
    title: 'UI/UX Design',
    description:
      'Creating clean, intuitive designs focused on usability and user experience.',
  },
  {
    icon: Cpu,
    title: 'Creative Problem Solver',
    description:
      'Combining design thinking with frontend technologies to create better experiences.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description:
      'Collaborating effectively to transform ideas into polished digital products.',
  },
];

export default function About() {
  const infoDetails = [
    { label: 'Name', value: personalInfo.details.name },
    {
      label: 'Email',
      value: personalInfo.details.email,
      isLink: true,
      href: `mailto:${personalInfo.details.email}`,
    },
    { label: 'Location', value: personalInfo.details.location },
    { label: 'Degree', value: personalInfo.details.degree },
    { label: 'University', value: personalInfo.details.university },
    { label: 'Availability', value: personalInfo.details.availability },
    { label: 'Languages', value: personalInfo.details.languages },
  ];

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-glow-purple -translate-y-1/2 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col mb-16 text-left">
          <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase mb-2">
            Get To Know Me
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            About Me
          </h2>

          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Who is Ayasha?</h3>

              <p className="text-slate-400 leading-relaxed text-base">
                I am a passionate Computer Science student with a strong
                interest in frontend development and UI/UX design. I enjoy
                creating modern, responsive web interfaces and transforming
                ideas into engaging digital experiences.
              </p>

              <p className="text-slate-400 leading-relaxed text-base">
                I specialize in building frontend experiences with React,
                Next.js, and Tailwind CSS. I love combining clean code with
                thoughtful design to create interfaces that are beautiful and
                user-friendly.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
              {features.map((feature, idx) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={idx}
                    className="flex gap-4 p-4 rounded-xl border border-white/5 bg-slate-950/20"
                  >
                    <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 h-fit">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div>
                      <h4 className="font-bold text-white text-sm mb-1">
                        {feature.title}
                      </h4>

                      <p className="text-xs text-slate-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="glass-card p-8 rounded-3xl border border-white/10 bg-slate-950/30">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-purple-400" />
                Quick Info
              </h3>

              <div className="divide-y divide-white/5">
                {infoDetails.map((detail, idx) => (
                  <div
                    key={idx}
                    className="flex py-3.5 justify-between text-sm gap-4"
                  >
                    <span className="text-slate-400">{detail.label}</span>

                    <div className="text-right">
                      {detail.isLink ? (
                        <a
                          href={detail.href}
                          className="text-purple-400 hover:text-purple-300 font-semibold break-all"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <span className="text-white font-semibold">
                          {detail.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
