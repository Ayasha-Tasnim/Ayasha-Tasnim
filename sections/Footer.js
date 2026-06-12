"use client";

import { Mail } from "lucide-react";
import { Github, Linkedin, Facebook } from "@/components/Icons";
import { personalInfo } from "@/lib/data";

const socialsList = [
  { icon: Github, href: personalInfo.socials.github, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.socials.linkedin, label: "LinkedIn" },
  { icon: Facebook, href: personalInfo.socials.facebook, label: "Facebook" },
  { icon: Mail, href: `mailto:${personalInfo.socials.email}`, label: "Email" }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="relative bg-slate-950 py-12 border-t border-white/5 px-6">
      {/* Background vignetting glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] rounded-full bg-purple-500/5 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Left: copyright & logo */}
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <a
            href="#home"
            onClick={handleLogoClick}
            className="text-lg font-bold tracking-widest text-white hover:text-purple-400 transition-colors duration-300"
          >
            AYASHA<span className="text-purple-500">.</span>
          </a>
          <p className="text-slate-500 text-xs">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>

        {/* Center: built with */}
        <div className="text-center">
          <p className="text-slate-500 text-xs">
            Built with{" "}
            <span className="text-white font-semibold">Next.js 15</span> &amp;{" "}
            <span className="text-purple-400 font-semibold">Tailwind CSS</span>
          </p>
        </div>

        {/* Right: socials list */}
        <div className="flex items-center gap-3">
          {socialsList.map((social, idx) => {
            const Icon = social.icon;
            return (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-900 border border-white/5 text-slate-400 hover:text-purple-400 hover:border-purple-500/30 transition-all duration-300"
                aria-label={social.label}
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
