"use client";

import { motion } from "framer-motion";
import { Sparkles, Terminal, ShieldCheck, Cpu, Users } from "lucide-react";
import { personalInfo } from "@/lib/data";

const features = [
  {
    icon: Terminal,
    title: "Web Development Focused",
    description: "Creating modern, performant React and Next.js applications."
  },
  {
    icon: Cpu,
    title: "Problem Solver",
    description: "Strong foundation in data structures, algorithms, and analytical logic."
  },
  {
    icon: Sparkles,
    title: "Continuous Learner",
    description: "Enthusiastic about mastering new frameworks, practices, and system designs."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Excellent communication skills and experience participating in group projects."
  }
];

export default function About() {
  const infoDetails = [
    { label: "Name", value: personalInfo.details.name },
    { label: "Email", value: personalInfo.details.email, isLink: true, href: `mailto:${personalInfo.details.email}` },
    { label: "Location", value: personalInfo.details.location },
    { label: "Degree", value: personalInfo.details.degree },
    { label: "University", value: personalInfo.details.university },
    { label: "Availability", value: personalInfo.details.availability },
    { label: "Languages", value: personalInfo.details.languages }
  ];

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-glow-purple -translate-y-1/2 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
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
          {/* Left Side: Biography & Key Strengths Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                Who is Ayasha?
              </h3>
              <p className="text-slate-400 leading-relaxed text-base">
                I am a passionate Computer Science student based in Dhaka, Bangladesh. Currently pursuing my B.Sc. in Computer Science &amp; Engineering, I devote myself to coding modern web applications and refining my software engineering craft.
              </p>
              <p className="text-slate-400 leading-relaxed text-base">
                I specialize in front-end development, specifically modern React ecosystems and Next.js. I love bridging the gap between clean engineering and stunning visual designs.
              </p>
            </div>

            {/* Features list */}
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
                      <h4 className="font-bold text-white text-sm mb-1">{feature.title}</h4>
                      <p className="text-xs text-slate-400 leading-normal">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side: Information Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="glass-card p-8 rounded-3xl border border-white/10 relative overflow-hidden bg-slate-950/30">
              {/* Card top border glow */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
              
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-purple-400" />
                <span>Quick Info</span>
              </h3>

              <div className="divide-y divide-white/5">
                {infoDetails.map((detail, idx) => (
                  <div key={idx} className="flex py-3.5 first:pt-0 last:pb-0 items-start justify-between text-sm gap-4">
                    <span className="text-slate-400 font-medium">{detail.label}</span>
                    <div className="text-right">
                      {detail.isLink ? (
                        <a
                          href={detail.href}
                          className="text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-300 break-all"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <span className="text-white font-semibold">{detail.value}</span>
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
