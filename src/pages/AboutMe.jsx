"use client";

import React from "react";
import MagicBento from "../components/MagicBento";
import SectionWrapper from "../components/SectionWrapper";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <SectionWrapper id="about" className="bg-[#0F0005]">
      <div className="flex flex-col items-center justify-center w-full">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[12vw] leading-[0.8] font-[anzo1] text-[#ff2239] opacity-20 select-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap z-0 pointer-events-none"
        >
          ABOUT ME
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-[anzo1] uppercase text-center mb-24 text-white relative z-10"
        >
          WHO I AM
        </motion.h2>
        <div className="w-full h-auto relative">
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={30}
            glowColor="255, 34, 57"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
