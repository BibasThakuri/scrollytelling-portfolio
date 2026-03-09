"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Dohoro Management",
    role: "IT Admin Supervisor",
    period: "September 2023 - May 2025",
    description: "Generated detailed reports using IT tools. Tested in-house software and ensured smooth deployment. Provided technical support to admin teams and resolved system issues. Ensured IT security compliance and optimized workflows.",
    color: "from-blue-500/20 to-purple-500/20",
    link: "https://www.dohoro.com/",
  },
  {
    title: "XDezo",
    role: "Intern - Web Development",
    period: "February 2023 - July 2023",
    description: "Built dynamic front-end components and maintained responsive client websites. Conducted code reviews and debugging for high-quality outputs.",
    color: "from-emerald-500/20 to-teal-500/20",
    link: "https://xdezo.com.np/",
  },
];

const skills = [
  "HTML", "CSS", "JavaScript", "React.js", "Node.js", "Laravel",
  "Tailwind / Bootstrap", "Power BI", "Jira", "Trello"
];

export default function Projects() {
  return (
    <section className="relative z-20 min-h-screen bg-[#121212] py-32 px-6 md:px-20 lg:px-40 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Work Experience</h2>
          <div className="h-1 w-24 bg-white/20 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {projects.map((project, idx) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className={`block p-8 rounded-3xl backdrop-blur-md bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer relative overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-white/50 text-sm font-mono tracking-wider">{project.period}</span>
                  <svg className="w-6 h-6 text-white/30 group-hover:text-white/80 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                <h4 className="text-lg text-white/80 mb-6 font-medium">{project.role}</h4>
                <p className="text-white/60 leading-relaxed mt-auto">{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">Technical Arsenal</h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/80 backdrop-blur-sm hover:bg-white/10 hover:text-white transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
