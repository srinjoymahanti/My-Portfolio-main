import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowUp, Instagram, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0F0005] pt-20 pb-10 px-6 border-t border-white/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          <div className="flex-1">
            <h2 className="text-[10vw] lg:text-[7vw] leading-[0.8] font-[anzo1] text-white uppercase tracking-tighter mb-8">
              Let's create <br /> <span className="text-[#00d4ff]">something epic</span>
            </h2>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:srinjoymahanti@gmail.com"
                className="px-8 py-4 rounded-full bg-white text-black font-[anzo3] text-lg flex items-center gap-3 hover:bg-[#00d4ff] hover:text-white transition-all duration-300"
              >
                <span>srinjoymahanti@gmail.com</span>
                <ArrowUpRight size={20} />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:w-1/3">
            <p className="text-white/60 text-lg leading-relaxed font-light">
              I help brands and agencies create immersive digital experiences that leave a lasting impression.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <h4 className="text-white font-[anzo3] uppercase tracking-wider text-sm opacity-50">Socials</h4>
                <SocialLink href="https://x.com/Shahahahzaman" label="Twitter" />
                <SocialLink href="https://www.linkedin.com/in/srinjoy-mahanti-6168b5306/" label="LinkedIn" />
                <SocialLink href="https://instagram.com/shahzaman_.23" label="Instagram" />
                <SocialLink href="https://github.com/Shahzaman3" label="Github" />
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-white font-[anzo3] uppercase tracking-wider text-sm opacity-50">Sitemap</h4>
                <FooterLink href="#home" label="Home" />
                <FooterLink href="#about" label="About" />
                <FooterLink href="#skills" label="Skills" />
                <FooterLink href="#experience" label="Experience" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-white/10 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <h3 className="text-2xl font-[anzo1] text-white">SRINJOY</h3>
            <span className="text-white/40 text-sm">© {new Date().getFullYear()}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <span className="uppercase text-sm tracking-widest">Back to top</span>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#00d4ff] group-hover:border-[#00d4ff] transition-all">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>

      {/* Background Gradient Mesh */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-[#00d4ff]/5 to-transparent pointer-events-none" />
    </footer>
  );
}

function SocialLink({ href, label }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#00d4ff] transition-colors flex items-center gap-2 group">
      <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 opacity-0 group-hover:opacity-100 text-[#00d4ff]">→</span>
      {label}
    </a>
  );
}

function FooterLink({ href, label }) {
  const scrollToSection = (e) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a href={href} onClick={scrollToSection} className="text-white/80 hover:text-white transition-colors">
      {label}
    </a>
  );
}
