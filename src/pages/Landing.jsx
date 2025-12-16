import React from "react";
import TextPressure from "../components/TextPressure";
import Hyperspeed from "../components/Hyperspeed";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Landing() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#0F0005]">
      {<Hyperspeed
  effectOptions={{
    onSpeedUp: () => {},
    onSlowDown: () => {},

    distortion: "mountainDistortion",

    length: 600,
    roadWidth: 9,
    islandWidth: 2,
    lanesPerRoad: 4,

    // ⚡ Extreme speed & zoom
    fov: 95,
    fovSpeedUp: 180,
    speedUp: 3.2,

    carLightsFade: 0.25,

    totalSideLightSticks: 90,
    lightPairsPerRoadWay: 90,

    shoulderLinesWidthPercentage: 0.06,
    brokenLinesWidthPercentage: 0.12,
    brokenLinesLengthPercentage: 0.65,

    lightStickWidth: [0.15, 0.55],
    lightStickHeight: [1.5, 2.2],

    // 🚀 INSANE motion
    movingAwaySpeed: [120, 180],
    movingCloserSpeed: [-260, -340],

    carLightsLength: [600 * 0.12, 600 * 0.25],
    carLightsRadius: [0.08, 0.18],

    carWidthPercentage: [0.45, 0.65],
    carShiftX: [-0.3, 0.3],
    carFloorSeparation: [0.02, 0.6],

    colors: {
      roadColor: 0x050507,
      islandColor: 0x0a0a12,
      background: 0x000000,
      shoulderLines: 0x1f1fff,
      brokenLines: 0x1f1fff,

      // 🔴 Neon red traffic
      leftCars: [0xff003c, 0xff1a5e, 0xff4d7a],

      // 🔵 Neon blue traffic
      rightCars: [0x00e5ff, 0x4dd2ff, 0x7fdaff],

      // ✨ Cyberpunk light sticks
      sticks: 0x8b9cff,
    },
  }}
/>}

      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 pointer-events-none">
        <div className="w-full max-w-7xl px-6 flex flex-col items-start">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="text-xl md:text-2xl font-[anzo1] uppercase text-[#ff2239] mb-4 tracking-widest"
          >
            Seamless ✦ Effortless ✦ Infinite
          </motion.h4>
          
          <div className="w-full h-[200px] md:h-[300px] relative">
             <TextPressure
                text="SHAHZAMAN"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#ffffff"
                strokeColor="#ff0000"
                minFontSize={36}
              />
          </div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            className="text-lg md:text-2xl text-[#bfc0e9] font-[anzo3] max-w-2xl mt-8 leading-relaxed"
          >
            Turning code into experiences you don’t just see — you feel, remember,
            and can’t stop coming back to.
          </motion.h3>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="animate-bounce" />
      </motion.div>
    </div>
  );
}
