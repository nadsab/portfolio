import React, { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import IntroScreen from "./components/IntroScreen";
import Navbar from "./components/Navbar";
import ProjectModal from "./components/ProjectModal";
import HomeSection from "./components/HomeSection";
import ProjectsSection from "./components/ProjectsSection";

import { TEXT, profile, skills, projects } from "./data/portfolioData";

export default function PortfolioApp() {
  const [darkMode, setDarkMode] = useState(false);
  const [page, setPage] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showIntro, setShowIntro] = useState(true);
  const [lang, setLang] = useState("fr");
  const introOpeningRef = useRef(false);

  const t = TEXT[lang];

  const themeClass = useMemo(
    () =>
      darkMode ? "portfolio-root dark-theme" : "portfolio-root light-theme",
    [darkMode]
  );

  useEffect(() => {
    const openIntro = () => {
      if (introOpeningRef.current) return;
      introOpeningRef.current = true;

      const overlay = document.querySelector(".intro-overlay");
      if (overlay) overlay.classList.add("open");

      setTimeout(() => {
        setShowIntro(false);
        introOpeningRef.current = false;
      }, 700);
    };

    const handleWheel = (e) => {
      if (showIntro && e.deltaY > 0) openIntro();
    };

    const handleKeyDown = (e) => {
      if (
        showIntro &&
        (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ")
      ) {
        openIntro();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showIntro]);

  return (
    <div className={themeClass}>
      <IntroScreen
        showIntro={showIntro}
        setShowIntro={setShowIntro}
        text={t}
      />

      <div className="container portfolio-container py-4 py-md-5">
        <Navbar
          text={t}
          lang={lang}
          setLang={setLang}
          page={page}
          setPage={setPage}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        {page === "home" ? (
          <HomeSection
            text={t}
            lang={lang}
            profile={profile}
            skills={skills}
            darkMode={darkMode}
            setPage={setPage}
          />
        ) : (
          <ProjectsSection
            text={t}
            lang={lang}
            projects={projects}
            darkMode={darkMode}
            setSelectedProject={setSelectedProject}
          />
        )}

        <ProjectModal
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
          lang={lang}
          // darkMode={darkMode}
          text={t}
        />
      </div>
    </div>
  );
}