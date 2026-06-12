"use client";

import { motion } from "framer-motion";

export default function CodeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="glass-card w-full max-w-md rounded-xl overflow-hidden font-mono text-sm shadow-2xl shadow-purple-500/10 border border-white/10"
    >
      {/* Tab bar header */}
      <div className="bg-slate-900/80 px-4 py-3 border-b border-white/5 flex items-center justify-between">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <span className="text-xs text-slate-500">developer.js</span>
        <div className="w-12"></div> {/* Spacing spacer */}
      </div>

      {/* Code contents */}
      <div className="p-6 text-slate-300 leading-relaxed overflow-x-auto">
        <div>
          <span className="text-purple-400">class</span>{" "}
          <span className="text-yellow-300">Developer</span>{" "}&#123;
        </div>
        <div className="pl-4">
          <span className="text-blue-400">constructor</span>() &#123;
          <div className="pl-4">
            <span className="text-red-400">this</span>.name ={" "}
            <span className="text-green-300">"Ayasha"</span>;
          </div>
          <div className="pl-4">
            <span className="text-red-400">this</span>.skill ={" "}
            <span className="text-green-300">"Full Stack"</span>;
          </div>
          <div className="pl-4">
            <span className="text-red-400">this</span>.passion ={" "}
            <span className="text-green-300">"Problem Solving"</span>;
          </div>
          <div className="pl-4">&#125;</div>
        </div>
        
        <div className="pl-4 mt-3">
          <span className="text-blue-400">code</span>() &#123;
          <div className="pl-4">
            <span className="text-purple-400">return</span>{" "}
            <span className="text-green-300">"Building the future 🚀"</span>;
          </div>
          <div className="pl-4">&#125;</div>
        </div>
        <div>&#125;</div>
      </div>
    </motion.div>
  );
}
