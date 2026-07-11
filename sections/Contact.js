"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, Sparkles, CheckCircle2 } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate API request delay
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  const contactMethods = [
    { icon: Mail, label: "Email", value: personalInfo.details.email, href: `mailto:${personalInfo.details.email}` },
    { icon: Phone, label: "Phone", value: "+880 1521 231818", href: "tel:+8801521231818" }, // Placeholder phone
    { icon: MapPin, label: "Location", value: personalInfo.details.location },
  ];

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      {/* Background glowing blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-glow-purple pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] rounded-full bg-glow-indigo pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col mb-16 text-left">
          <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase mb-2">
            Let's Collaborate
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Get In Touch
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact details & socials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Chat, message, or meet!
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Have an exciting project idea, internship opportunity, or just want to say hi? Fill out the form or reach out directly via these channels.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="flex flex-col gap-4">
              {contactMethods.map((method, idx) => {
                const Icon = method.icon;
                const isLink = !!method.href;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-slate-950/20"
                  >
                    <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold font-mono tracking-widest text-slate-500 uppercase mb-0.5">
                        {method.label}
                      </span>
                      {isLink ? (
                        <a
                          href={method.href}
                          className="text-white hover:text-purple-400 font-semibold text-sm transition-colors duration-300 break-all"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <span className="text-white font-semibold text-sm">{method.value}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social handles links */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">Follow Me:</span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-950 border border-white/5 text-slate-400 hover:text-purple-400 hover:border-purple-500/30 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-950 border border-white/5 text-slate-400 hover:text-purple-400 hover:border-purple-500/30 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 w-full"
          >
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden bg-slate-950/30">
              {/* Top border glow line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <CheckCircle2 className="w-16 h-16 text-green-400 mb-4 animate-bounce" />
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                    <p className="text-slate-400 text-sm max-w-sm leading-relaxed mb-6">
                      Thank you for reaching out. I have received your submission and will get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-6 py-2.5 rounded-full border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500 text-white font-bold text-sm tracking-wide transition-all duration-300"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="px-4 py-3.5 rounded-xl border border-white/5 bg-slate-900/50 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/80 focus:ring-1 focus:ring-purple-500/30 transition-all duration-300"
                        />
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your email"
                          className="px-4 py-3.5 rounded-xl border border-white/5 bg-slate-900/50 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/80 focus:ring-1 focus:ring-purple-500/30 transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="subject" className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project topic or hello"
                        className="px-4 py-3.5 rounded-xl border border-white/5 bg-slate-900/50 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/80 focus:ring-1 focus:ring-purple-500/30 transition-all duration-300"
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or details..."
                        className="px-4 py-3.5 rounded-xl border border-white/5 bg-slate-900/50 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/80 focus:ring-1 focus:ring-purple-500/30 transition-all duration-300 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:from-purple-800 disabled:to-indigo-800 text-white font-bold text-sm tracking-wide shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-75 transition-all duration-300 group"
                    >
                      {status === "sending" ? (
                        <>
                          <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
