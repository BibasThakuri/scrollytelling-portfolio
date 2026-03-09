"use client";

import React from "react";
import { useTransform, motion, MotionValue } from "framer-motion";

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Fine-tuned opacity values so text fades in and out at specific scroll milestones
  
  // 0 - 15%: Section 1 is visible
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.15], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -50]); // slight parallax up
  const display1 = useTransform(scrollYProgress, (v) => v > 0.15 ? "none" : "flex");

  // 30% - 45%: Section 2 is visible
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.35, 0.4, 0.45], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.3, 0.45], [50, -50]);
  const display2 = useTransform(scrollYProgress, (v) => (v < 0.25 || v > 0.48) ? "none" : "flex");

  // 60% - 85%: Section 3 is visible
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.65, 0.8, 0.85], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.6, 0.85], [50, -50]);
  const display3 = useTransform(scrollYProgress, (v) => v < 0.55 ? "none" : "flex");

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {/* Section 1 (0% scroll) */}
      <motion.div
        style={{ opacity: opacity1, y: y1, display: display1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-4">
          Bibas Malla Thakuri
        </h1>
        <p className="text-xl md:text-2xl text-white/70 font-light tracking-wide uppercase mb-8">
          IT Admin Supervisor
        </p>
        <motion.a
          href="/cv.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="pointer-events-auto px-8 py-4 bg-white text-black font-bold rounded-full transition-colors hover:bg-white/90"
        >
          Download CV
        </motion.a>
      </motion.div>

      {/* Section 2 (30% scroll) */}
      <motion.div
        style={{ opacity: opacity2, y: y2, display: display2 }}
        className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-12 lg:px-24"
      >
        <h2 className="text-4xl md:text-7xl font-bold leading-tight text-white mb-6 max-w-3xl">
          Bridging IT, software development, and management.
        </h2>
        <div className="h-1 w-24 bg-white/20 rounded-full" />
      </motion.div>

      {/* Section 3 (60% scroll) */}
      <motion.div
        style={{ opacity: opacity3, y: y3, display: display3 }}
        className="absolute inset-0 flex flex-col items-end justify-center px-6 md:px-12 lg:px-24 text-right"
      >
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Proven Experience
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-white/90">Dohoro Management</h3>
              <p className="text-lg text-white/60">IT Admin Supervisor</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white/90">XDezo</h3>
              <p className="text-lg text-white/60">Web Development Intern</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
