import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Landing from "./pages/Landing";
import AboutMe from "./pages/AboutMe";
import SkillsSection from "./pages/SkillsSection";
import ExperiencePage from "./pages/ExperiencePage";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";

const App = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Loader handles its own lifecycle via onFinish callback

  return (
    <>
      {showLoader ? (
        <Loader onFinish={() => setShowLoader(false)} />
      ) : (
        <div className="bg-[#0F0005] min-h-screen text-white selection:bg-[#ff2239] selection:text-white">
          <Navbar onHireMeClick={() => setIsContactOpen(true)} />
          <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
          <main>
            <div id="home">
              <Landing />
            </div>
            <div id="about">
              <AboutMe />
            </div>
            <div id="skills">
              <SkillsSection />
            </div>
            <div id="experience">
              <ExperiencePage />
            </div>
            <div id="projects">
              <Projects />
            </div>
          </main>
          <div id="contact">
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
