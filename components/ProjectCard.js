"use client";

import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { Github } from "@/components/Icons";
import Image from "next/image";
import { useState } from "react";

export default function ProjectCard({ project, index }) {
  const { title, description, tech, liveLink, githubLink, image } = project;
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="glass-card rounded-2xl overflow-hidden flex flex-col group h-full border border-white/5 bg-slate-950/40"
    >
      {/* Project image container */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10" />
        
        {/* Render styled gradient backdrop if image fails or isn't loaded */}
        {imageError || !image ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0B1023] via-[#050816] to-[#7C3AED]/20 relative">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500 via-transparent to-transparent" />
            <Sparkles className="w-10 h-10 text-purple-400 animate-pulse mb-2 z-20" />
            <span className="text-xs uppercase tracking-widest text-purple-300 font-mono z-20 font-bold">{title}</span>
          </div>
        ) : (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setImageError(true)}
            unoptimized // To bypass domain constraints during prototyping if external resources are used
          />
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
          {description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 text-sm font-medium"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-medium ml-auto"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
