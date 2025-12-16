"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";

const experiences = [
  {
    company: "Rittz Digital",
    role: "FrontEnd Intern",
    period: "July — September 2025",
    description:
      "Started the journey into digital craftsmanship. Prototyped micro-interactions and assisted in building responsive layouts for e-commerce clients. Specialized in GSAP animations and performance optimization.",
    tags: ["React", "GSAP", "System Architecture", "Internship"],
    color: "#ff2239",
  },
  {
    company: "HACK8ON 1.0",
    role: "Web Developer",
    period: "2025",
    description:
      "Secured the Top 10 position by developing a responsive and user-friendly website focusing on real world problem and its solution.",
    tags: ["Prototyping", "FullStack", "JavaScript", "Learning"],
    color: "#a822ff",
  },
  {
    company: "NSU TECH UTSAV 3.0",
    role: "Creative Developer",
    period: "2025",
    description:
      "Secured 1st place by developing an innovative project under tight deadlines.",
    tags: ["Creative Dev", "GSAP", "Responsive Design", "Interaction Design"],
    color: "#22d3ff",
  }
];

export default function ExperiencePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <SectionWrapper id="experience" className="bg-[#0F0005] relative overflow-hidden">
      {/* Dynamic Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
          }}
        />

        {/* Floating Orbs */}
        <motion.div
          animate={{
            y: [0, -50, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#ff2239]/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            y: [0, 50, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"
        />
      </div>

      <div ref={containerRef} className="relative z-10">
        {/* Header Section */}
        <div className="h-[40vh] flex items-center justify-center sticky top-0 z-0">
          <motion.h2
            style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
            className="text-[12vw] md:text-[8vw] leading-[0.9] font-[anzo1] text-white uppercase tracking-tighter text-center"
          >
            My <span className="text-[#ff2239]">Experience</span>
          </motion.h2>
        </div>

        {/* Cards Container */}
        <div className="relative pb-[50vh]">
          {experiences.map((experience, i) => {
            const targetScale = 1 - (experiences.length - i) * 0.05;
            return (
              <Card
                key={i}
                i={i}
                {...experience}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

const Card = ({ i, company, role, period, description, tags, color, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{
          scale,
          backgroundColor: "#1a1a1a", // Fallback
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative h-[60vh] w-[90vw] md:w-[1000px] rounded-[30px] p-10 origin-top border border-white/10 overflow-hidden bg-[#0F0005]/80 backdrop-blur-xl shadow-2xl"
      >
        {/* Ambient Glow */}
        <div
          className="absolute -top-[20%] -left-[20%] w-[60%] h-[60%] rounded-full blur-[100px] opacity-20 pointer-events-none"
          style={{ backgroundColor: color }}
        />

        <div className="flex h-full gap-10 relative z-10">
          {/* Left Column: Title & Period */}
          <div className="w-full md:w-[40%] flex flex-col justify-between">
            <div>
              <span
                className="inline-block px-4 py-2 rounded-full border text-sm font-medium mb-6"
                style={{ borderColor: `${color}40`, backgroundColor: `${color}10`, color: color }}
              >
                {period}
              </span>
              <h3 className="text-4xl md:text-5xl font-[anzo1] text-white leading-tight">
                {company}
              </h3>
              <p className="text-xl text-white/60 mt-2 font-light">{role}</p>
            </div>

            {/* Mobile Tags (visible only on small screens) */}
            <div className="flex flex-wrap gap-2 md:hidden mt-4">
              {tags.map((tag, idx) => (
                <span key={idx} className="text-xs text-white/40 border border-white/10 px-2 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          </div>

          {/* Right Column: Description & Visuals */}
          <div className="hidden md:flex w-[60%] flex-col justify-between h-full pl-10 border-l border-white/5">
            <p className="text-2xl text-white/80 font-light leading-relaxed">
              {description}
            </p>

            <div className="flex flex-wrap gap-3">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 text-sm text-white/60 border border-white/10 rounded-full bg-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};