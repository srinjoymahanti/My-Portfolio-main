import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

// Premium About component
// Theme: dark (black) with accent #ff2239

export default function PremiumAbout() {
  const rootRef = useRef(null);
  const accentRef = useRef(null);
  const imgRef = useRef(null);
  const cursorPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Section fade-in with slight upward motion
      tl.from(rootRef.current, {
        autoAlpha: 0,
        y: 24,
        duration: 1,
      });

      // Accent sweep line
      tl.from(
        accentRef.current,
        {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1,
        },
        "-=0.8"
      );

      // Image card floating animation (loop)
      gsap.to(imgRef.current, {
        y: -12,
        rotationX: 2,
        rotationY: 2,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Staggered bullets reveal
      tl.from(
        ".about-bullet",
        {
          y: 12,
          autoAlpha: 0,
          stagger: 0.08,
          duration: 0.6,
        },
        "-=0.6"
      );

      return () => tl.kill();
    }, rootRef);

    // Mouse-based parallax tilt effect on card
    const handleMouseMove = (e) => {
      const rect = imgRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      cursorPos.current = { x, y };
      gsap.to(imgRef.current, {
        rotationY: x / 25,
        rotationX: -y / 25,
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(imgRef.current, {
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="w-full bg-black text-white px-6 sm:px-8 lg:px-16 py-16 md:py-24 overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
        {/* LEFT - Text */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 id="about-heading" className="text-sm uppercase tracking-wider text-gray-400">
            Beyond the Code
          </h2>

          <div className="mt-4 flex items-center gap-4">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              I’m <span className="text-[#ff2239]">Shahzaman</span>,
              <span className="block font-medium text-gray-300 text-lg sm:text-xl mt-2">a CS student building premium web experiences.</span>
            </h3>
          </div>

          <div
            ref={accentRef}
            className="mt-6 w-28 h-[2px] bg-[#ff2239] origin-left"
            aria-hidden
          />

          <p className="mt-6 text-gray-300 max-w-xl leading-relaxed">
            I turn ideas into pixel-perfect web experiences that look sleek and run smooth. I don’t just
            write code — I <strong>engineer motion</strong>, design with intent, and make interfaces that feel alive.
          </p>

          <ul className="mt-6 space-y-3">
            <li className="about-bullet flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-white/6">
                🚀
              </span>
              <span className="text-gray-300">Mastering full-stack development & UI animations (GSAP / Framer Motion)</span>
            </li>

            <li className="about-bullet flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-white/6">🎨</span>
              <span className="text-gray-300">Obsessed with clean layouts, smooth transitions, and Apple-level polish</span>
            </li>

            <li className="about-bullet flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-white/6">🤝</span>
              <span className="text-gray-300">Open to freelance work, collaborations, and ambitious builds</span>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="inline-flex items-center gap-3 px-5 py-3 bg-[#ff2239] text-black rounded-lg font-semibold shadow-2xl hover:brightness-95 transition"
            >
              View My Work
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>

            <motion.a
              whileHover={{ opacity: 0.9 }}
              href="mailto:your@email.com"
              className="inline-flex items-center gap-3 px-5 py-3 border border-white/10 rounded-lg text-sm text-gray-200"
            >
              Let’s Talk
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT - Image / Visual */}
        <motion.div
          className="relative flex justify-center md:justify-end perspective-1000"
        >
          <div
            ref={imgRef}
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-white/4 to-white/2 p-1 backdrop-blur-md cursor-grab"
            style={{ boxShadow: '0 15px 40px rgba(0,0,0,0.7)' }}
          >
            {/* Inner card */}
            <div className="w-full h-full rounded-xl bg-gradient-to-b from-black to-[#0b0b0b] overflow-hidden flex flex-col">
              <div className="flex-1 flex items-center justify-center">
                <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="160" height="160" rx="20" fill="#0b0b0b" />
                  <g>
                    <circle cx="80" cy="56" r="28" fill="#111" stroke="#ff2239" strokeWidth="2" />
                    <rect x="36" y="96" width="88" height="34" rx="8" fill="#111" stroke="#222" />
                    <path d="M44 128c10-8 30-12 52-12s42 4 52 12" stroke="#222" strokeWidth="2" strokeLinecap="round" />
                  </g>
                </svg>
              </div>
              <div className="px-5 py-4 border-t border-white/6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-300">Shahzaman</p>
                    <p className="text-xs text-gray-500 mt-1">CS Student • Frontend & Motion</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-[#ff2239]">Available</p>
                    <p className="text-xs text-gray-500">for freelance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative floating accent */}
          <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full mix-blend-screen opacity-25 animate-pulse" style={{ background: 'radial-gradient(circle at 30% 30%, #ff2239, transparent 40%)' }} />
        </motion.div>
      </div>
    </section>
  );
}
