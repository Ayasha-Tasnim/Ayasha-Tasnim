"use client";

import TimelineItem from "@/components/TimelineItem";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6 overflow-hidden bg-slate-950/10">
      {/* Background glowing blob */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-glow-purple translate-x-1/2 pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col mb-16 text-left">
          <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase mb-2">
            Learning &amp; Growth
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Experience Timeline
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Timeline wrapper */}
        <div className="relative mt-8">
          {experience.map((item, idx) => (
            <TimelineItem
              key={idx}
              item={item}
              index={idx}
              type="experience"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
