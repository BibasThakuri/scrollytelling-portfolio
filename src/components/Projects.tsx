"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Dohoro Management Pvt. Ltd.",
    role: "IT Admin",
    period: "September 2023 - June 2025",
    description: "Designed and developed the Dohoro website, optimizing user experience. Collaborated on WorkplanX, an IT administration tool. Enhanced data visualization using Power BI and supervised administrative teams.",
    bullets: [
      "Designed and developed the Dohoro website, optimizing user experience and functionality.",
      "Collaborated on development of WorkplanX IT administration tool.",
      "Enhanced data visualization using Power BI to drive data-driven decisions.",
      "Supervised the administrative team and oversaw IT operations and technical administration."
    ],
    color: "from-blue-500/20 to-purple-500/20",
    link: "https://www.dohoro.com/",
  },
  {
    title: "XDezo Pvt. Ltd.",
    role: "Intern - Web Development",
    period: "February 2023 - July 2023",
    description: "Contributed to dynamic front-end components for client projects and supported the team in creating responsive designs. Participated in code reviews to ensure quality.",
    bullets: [
      "Contributed to the development of dynamic front-end components for client projects.",
      "Supported the team in creating responsive designs and maintaining client websites.",
      "Participated in code reviews and debugging to ensure high-quality outputs."
    ],
    color: "from-emerald-500/20 to-teal-500/20",
    link: "https://xdezo.com.np/",
  },
];

const skills = [
  "HTML", "CSS", "JavaScript", "React.js", "Node.js", "Laravel",
  "Tailwind", "Bootstrap", "SCSS", "REST APIs",
  "Power BI", "Zoho Analytics", "MS Excel",
  "Jira", "Trello", "Monday.com",
  "Problem-solving", "Team Leadership", "Communication"
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
                <h4 className="text-lg text-white/80 mb-4 font-medium">{project.role}</h4>
                <ul className="space-y-2 mt-auto">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="text-white/60 text-sm flex items-start">
                      <span className="text-white/30 mr-2 mt-1.5">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
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
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">Education</h2>
          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">Bachelor of Science in Information Technology</h3>
                <span className="text-white/50 font-mono">2021 - 2024</span>
              </div>
              <p className="text-white/70 italic mb-2">Infomax College of BSc IT and Management (Asia Pacific University)</p>
              <div className="flex items-center gap-4">
                <span className="text-white/50 bg-white/5 px-3 py-1 rounded-full text-sm">GPA: 3.09</span>
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">+2 in Science (NEB)</h3>
                <span className="text-white/50 font-mono">2018 - 2020</span>
              </div>
              <p className="text-white/70 italic mb-2">Janapriya Multiple Campus, Pokhara</p>
              <div className="flex items-center gap-4">
                <span className="text-white/50 bg-white/5 px-3 py-1 rounded-full text-sm">GPA: 2.34</span>
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">SEE (NEB)</h3>
                <span className="text-white/50 font-mono">2017</span>
              </div>
              <p className="text-white/70 italic mb-2">Bright Future English School, Belchautara</p>
              <div className="flex items-center gap-4">
                <span className="text-white/50 bg-white/5 px-3 py-1 rounded-full text-sm">GPA: 3.40</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
