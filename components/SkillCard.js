"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import * as CustomIcons from "@/components/Icons";

// Helper to resolve Icon components dynamically
const getIconComponent = (iconName) => {
  // Check custom brand icons first
  const CustomIcon = CustomIcons[iconName];
  if (CustomIcon) return <CustomIcon className="w-6 h-6 text-purple-400" />;

  const Icon = LucideIcons[iconName];
  if (Icon) return <Icon className="w-6 h-6 text-purple-400" />;
  
  return <LucideIcons.Code2 className="w-6 h-6 text-purple-400" />;
};

export default function SkillCard({ skill, index }) {
  const { name, level, icon } = skill;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ 
        scale: 1.03,
        borderColor: "rgba(168, 85, 247, 0.4)",
        boxShadow: "0 10px 30px -10px rgba(168, 85, 247, 0.25)"
      }}
      className="glass-card p-6 rounded-2xl border border-white/5 bg-slate-950/30 flex flex-col gap-4 relative overflow-hidden"
    >
      {/* Background glow vignette */}
      <div className="absolute -right-10 -bottom-10 w-24 h-24 rounded-full bg-purple-500/5 blur-xl pointer-events-none" />

      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20">
          {getIconComponent(icon)}
        </div>
        <div>
          <h4 className="font-bold text-white text-base">{name}</h4>
          <span className="text-xs text-purple-300 font-mono font-semibold">{level}%</span>
        </div>
      </div>

      {/* Progress Bar Container */}
      <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden mt-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.05 + 0.2 }}
          className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
        />
      </div>
    </motion.div>
  );
}
