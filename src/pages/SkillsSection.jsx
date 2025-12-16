"use client";
import React, { useRef, useState } from "react";
import SectionWrapper from "../components/SectionWrapper";
import { motion } from "framer-motion";

export default function SkillsSection() {
  const skillGroups = [
    {
      title: "Design",
      items: ["Figma", "Framer", "UI/UX", "Spline", "Blender"],
    },
    {
      title: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind", "Three.js"],
    },
    {
      title: "Motion",
      items: ["GSAP", "Framer Motion", "WebGL", "Lottie", "Canvas"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express", "PostgreSQL", "Supabase", "Prisma"],
    },
  ];

  return (
    <SectionWrapper id="skills" className="bg-[#0F0005] overflow-visible">
      <div className="relative z-10 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[12vw] leading-[0.8] font-[anzo1] text-[#ff2239] opacity-20 select-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap z-0 pointer-events-none"
        >
          EXPERTISE
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-[anzo1] uppercase text-center mb-24 text-white relative z-10"
        >
          My Arsenal
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {skillGroups.map((group, idx) => (
            <SkillColumn key={idx} group={group} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function SkillColumn({ group, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-6"
    >
      <h3 className="text-xl font-[anzo3] text-white/50 border-b border-white/10 pb-2">
        {group.title}
      </h3>
      <div className="flex flex-col gap-3">
        {group.items.map((item, i) => (
          <MagneticItem key={i} text={item} />
        ))}
      </div>
    </motion.div>
  );
}

function MagneticItem({ text }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX, y: middleY });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative group cursor-pointer"
    >
      <div className="text-3xl md:text-4xl font-[anzo1] text-white group-hover:text-[#ff2239] transition-colors duration-300 uppercase">
        {text}
      </div>
      <div className="h-[1px] w-0 bg-[#ff2239] group-hover:w-full transition-all duration-300" />
    </motion.div>
  );
}
