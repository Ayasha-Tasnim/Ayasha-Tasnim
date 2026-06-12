"use client";

import TimelineItem from "@/components/TimelineItem";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="relative py-24 px-6 overflow-hidden">
      {/* Background glowing blob */}
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-glow-indigo -translate-x-1/2 pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col mb-16 text-left">
          <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase mb-2">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Education Timeline
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Timeline wrapper */}
        <div className="relative mt-8">
          {education.map((item, idx) => (
            <TimelineItem
              key={idx}
              item={item}
              index={idx}
              type="education"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
