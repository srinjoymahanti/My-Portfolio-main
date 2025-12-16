import React from "react";
import TextPressure from "../components/TextPressure";
import Hyperspeed from "../components/Hyperspeed";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Landing() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#0F0005]">
      <Hyperspeed
        effectOptions={{
          onSpeedUp: () => {},
          onSlowDown: () => {},
          distortion: "mountainDistortion",
          length: 400,
          roadWidth: 9,
          islandWidth: 2,
          lanesPerRoad: 3,
          fov: 90,
          fovSpeedUp: 150,
          speedUp: 2,
          carLightsFade: 0.4,
          totalSideLightSticks: 50,
          lightPairsPerRoadWay: 50,
          shoulderLinesWidthPercentage: 0.05,
          brokenLinesWidthPercentage: 0.1,
          brokenLinesLengthPercentage: 0.5,
          lightStickWidth: [0.12, 0.5],
          lightStickHeight: [1.3, 1.7],
          movingAwaySpeed: [60, 80],
          movingCloserSpeed: [-120, -160],
          carLightsLength: [400 * 0.05, 400 * 0.15],
          carLightsRadius: [0.05, 0.14],
          carWidthPercentage: [0.3, 0.5],
          carShiftX: [-0.2, 0.2],
          carFloorSeparation: [0.05, 1],
          colors: {
            roadColor: 0x080808,
            islandColor: 0x0a0a0a,
            background: 0x000000,
            shoulderLines: 0x131318,
            brokenLines: 0x131318,
            leftCars: [0xff102a, 0xeb383e, 0xff102a],
            rightCars: [0xdadafa, 0xbebae3, 0x8f97e4],
            sticks: 0xdadafa,
          },
        }}
      />

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
