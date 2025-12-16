import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Loader({ onFinish }) {
  const containerRef = useRef(null);
  const counterRef = useRef(null);
  const progressRef = useRef(null);
  const textRef = useRef(null);

  const words = ["DESIGN", "DEVELOPMENT", "EXPERIENCE", "INTERACTION"];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onFinish) onFinish();
        },
      });

      // Counter Animation
      tl.to(counterRef.current, {
        textContent: "100",
        duration: 3.5,
        ease: "power2.out",
        snap: { textContent: 1 },
        onUpdate: function () {
          if (counterRef.current) {
            counterRef.current.textContent = Math.round(this.targets()[0].textContent) + "%";
          }
        },
      });

      // Progress Bar Animation
      tl.to(
        progressRef.current,
        {
          width: "100%",
          duration: 3.5,
          ease: "power2.out",
        },
        0
      );

      // Cycling Text Animation
      const textTl = gsap.timeline();
      const durationPerWord = 3.0 / words.length;

      words.forEach((word, index) => {
        const startTime = index * durationPerWord;

        textTl.set(textRef.current, { innerText: word }, startTime);
        textTl.fromTo(
          textRef.current,
          { opacity: 0, y: 10, filter: "blur(4px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.4, ease: "power2.out" },
          startTime
        );

        if (index < words.length - 1) {
          textTl.to(
            textRef.current,
            { opacity: 0, y: -10, filter: "blur(4px)", duration: 0.3, ease: "power2.in" },
            startTime + durationPerWord - 0.3
          );
        }
      });

      tl.add(textTl, 0);

      // Exit Animation
      tl.to(
        [counterRef.current, progressRef.current, textRef.current],
        {
          opacity: 0,
          y: -20,
          duration: 0.5,
          ease: "power2.in",
        },
        "-=0.5"
      );

      tl.to(containerRef.current, {
        yPercent: -100,
        duration: 1.2,
        ease: "power4.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [onFinish]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-[#0F0005] flex flex-col items-center justify-center text-white"
    >
      {/* Background Noise */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="relative overflow-hidden flex flex-col items-center z-10">
        <h1
          ref={counterRef}
          className="text-[12vw] md:text-[8vw] font-[anzo1] leading-none tracking-tighter"
        >
          0%
        </h1>
        <div
          ref={textRef}
          className="h-8 mt-4 font-[anzo3] text-sm md:text-base uppercase tracking-[0.3em] text-[#ff2239]"
        >
          INITIALIZING
        </div>
      </div>

      <div className="w-64 h-[2px] bg-white/10 mt-8 rounded-full overflow-hidden relative z-10">
        <div
          ref={progressRef}
          className="h-full bg-[#ff2239] w-0 absolute left-0 top-0"
        />
      </div>
    </div>
  );
}
