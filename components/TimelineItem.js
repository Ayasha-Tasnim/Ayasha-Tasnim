"use client";

import { motion } from "framer-motion";
import { Calendar, Award, GraduationCap, Briefcase } from "lucide-react";

export default function TimelineItem({ item, index, type = "education" }) {
  const isEdu = type === "education";
  
  return (
    <div className="relative pl-8 sm:pl-12 pb-12 last:pb-0 group">
      {/* Timeline line connector */}
      <div className="absolute left-[11px] sm:left-[15px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/50 to-indigo-500/10 group-last:bottom-8" />

      {/* Timeline indicator node */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="absolute left-0 sm:left-1 w-6 h-6 rounded-full bg-slate-950 border-2 border-purple-500 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(139,92,246,0.5)] group-hover:border-indigo-400 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.8)] transition-all duration-300"
      >
        {isEdu ? (
          <GraduationCap className="w-3 h-3 text-purple-400" />
        ) : (
          <Briefcase className="w-3 h-3 text-purple-400" />
        )}
      </motion.div>

      {/* Timeline Content Card */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="glass-card p-6 sm:p-8 rounded-2xl border border-white/5 bg-slate-950/30 relative"
      >
        {/* Glow corner background */}
        <div className="absolute -left-10 -top-10 w-24 h-24 rounded-full bg-purple-500/5 blur-xl pointer-events-none" />

        {/* Date / Period Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-purple-300 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full">
            <Calendar className="w-3.5 h-3.5" />
            {item.period}
          </span>
          {isEdu && item.gpa && (
            <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
              <Award className="w-3.5 h-3.5" />
              {item.gpa}
            </span>
          )}
        </div>

        {/* Title & Organization */}
        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
          {isEdu ? item.degree : item.role}
        </h3>
        <p className="text-slate-400 text-sm font-medium mb-4">
          {isEdu ? item.institution : item.company}
        </p>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed">
          {item.description}
        </p>
      </motion.div>
    </div>
  );
}
