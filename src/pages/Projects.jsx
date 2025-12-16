import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

const projects = [
      {
            title: "Arogyata - Web3 Privacy Platform",
            description: "Arogyata is a full-stack application designed to revolutionize healthcare data privacy using Web3 technology. It empowers patients with control over their medical records while providing institutions with a secure and efficient way to access authorized data.",
            tags: ["React", "Ether.js", "Tanstack query", "Express.js", "MongoDB"],
            link: "https://arogyata-final.onrender.com/",
            github: "https://github.com/Shahzaman3/Arogyata-final",
            image: project1,
      },
      {
            title: "LearnMate - AI-Powered Learning Platform",
            description: "LearnMate is a modern, AI-driven educational platform designed to generate personalized learning roadmaps, quizzes, and career connections. Built with React, TypeScript, and Tailwind CSS, it offers a premium, responsive user experience.",
            tags: ["TypeScript", "React", "Context API", "Supabase"],
            link: "https://learn-mate-nu.vercel.app/",
            github: "https://github.com/Shahzaman3/learnmate",
            image: project2,
      },
      {
            title: "Hanexis - AutoPrice Pro",
            description: "Hanexis - AutoPrice Pro is a smarter way to manage prices on Shopify. Automate your pricing strategy and boost sales with our advanced tools.",
            tags: ["React", "Typescript", "Shadcn UI", "Tailwind"],
            link: "https://hanexis.vercel.app/",
            github: "https://github.com/Shahzaman3/hanexis",
            image: project3,
      },
      {
            title: "ThirtySixStudios Clone",
            description: "A boutique production studio website built with React, Vite, Tailwind CSS, and GSAP. This project showcases immersive digital assets and experiences with high-performance animations.",
            tags: ["Canvas", "React", "Tailwind", "GSAP"],
            link: "https://shahzaman3.github.io/thirtysix/",
            github: "https://github.com/Shahzaman3/thirtysix",
            image: project4,
      },
];

const ProjectCard = ({ project }) => {
      return (
            <motion.div
                  className="group relative flex flex-col gap-4 p-6 rounded-[20px] bg-white/5 border border-white/10 backdrop-blur-sm hover:border-[#ff2239]/50 transition-colors duration-500 overflow-hidden w-[85vw] md:w-[600px] h-[70vh] md:h-[600px] flex-shrink-0"
            >
                  {/* Hover Gradient Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff2239]/0 to-[#ff2239]/0 group-hover:from-[#ff2239]/5 group-hover:to-transparent transition-all duration-500" />

                  {/* Image Container */}
                  <div className="w-full h-auto aspect-video md:aspect-auto md:h-[60%] rounded-xl bg-white/5 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                        {project.image ? (
                              <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                              />
                        ) : (
                              <div className="w-full h-full flex items-center justify-center text-white/20 font-[anzo3]">
                                    No Image
                              </div>
                        )}

                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                        <div className="absolute bottom-4 right-4 p-2 bg-black/50 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                              <ArrowUpRight size={20} className="text-white" />
                        </div>
                  </div>

                  <div className="flex flex-col gap-4 relative z-10 flex-1">
                        <div className="flex justify-between items-start">
                              <h3 className="text-3xl md:text-4xl font-[anzo1] text-white group-hover:text-[#ff2239] transition-colors duration-300">
                                    {project.title}
                              </h3>
                              <div className="flex gap-3">
                                    <a
                                          href={project.github}
                                          className="text-white/50 hover:text-white transition-colors"
                                    >
                                          <Github size={24} />
                                    </a>
                                    <a
                                          href={project.link}
                                          className="text-white/50 hover:text-white transition-colors"
                                    >
                                          <ExternalLink size={24} />
                                    </a>
                              </div>
                        </div>

                        <p className="hidden md:block text-white/60 font-[anzo3] text-base md:text-lg leading-relaxed line-clamp-3 md:line-clamp-none">
                              {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                              {project.tags.map((tag, i) => (
                                    <span
                                          key={i}
                                          className="px-4 py-2 text-sm font-medium text-white/70 bg-white/5 rounded-full border border-white/5"
                                    >
                                          {tag}
                                    </span>
                              ))}
                        </div>
                  </div>
            </motion.div>
      );
};

const Projects = () => {
      const targetRef = useRef(null);
      const { scrollYProgress } = useScroll({
            target: targetRef,
      });

      // Horizontal scroll transform
      // Start from 0% (right after the title spacer) and move left
      const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

      // Title animations - Fades out faster to avoid overlap
      const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
      const titleX = useTransform(scrollYProgress, [0, 0.15], ["0%", "-50%"]);

      // Progress bar
      const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

      return (
            <section ref={targetRef} id="projects" className="relative h-[400vh] bg-[#0F0005]">
                  <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                        {/* Fixed Title Section */}
                        <motion.div
                              style={{ opacity: titleOpacity, x: titleX }}
                              className="absolute top-10 left-6 md:left-20 z-10 pointer-events-none"
                        >
                              <h2 className="text-[10vw] md:text-[6vw] font-[anzo1] leading-[0.9] text-white uppercase tracking-tighter">
                                    Selected <span className="text-[#ff2239]">Works</span>
                              </h2>
                              <div className="h-1 w-24 bg-[#ff2239] mt-4" />
                        </motion.div>

                        {/* Horizontal Scroll Container */}
                        <motion.div style={{ x }} className="flex gap-8 md:gap-16 px-6 md:px-20 pt-32 md:pt-0 items-center">
                              {/* Large Spacer to ensure title is visible initially - Increased width */}
                              <div className="w-[100vw] md:w-[800px] flex-shrink-0" />

                              {projects.map((project, index) => (
                                    <ProjectCard key={index} project={project} />
                              ))}
                        </motion.div>

                        {/* Progress Bar */}
                        <div className="absolute bottom-10 left-6 md:left-20 right-6 md:right-20 h-1 bg-white/10 rounded-full overflow-hidden">
                              <motion.div
                                    style={{ width: progressWidth }}
                                    className="h-full bg-[#ff2239]"
                              />
                        </div>
                  </div>
            </section>
      );
};

export default Projects;
