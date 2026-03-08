import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function Navbar({
  text,
  lang,
  setLang,
  page,
  setPage,
  darkMode,
  setDarkMode,
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-nav mb-4 mb-md-5 px-3 px-md-4 py-2"
    >
      <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-2">
        <div>
          <h1 className="h4 fw-bold mb-0">{text.navTitle}</h1>
          <p className="mb-0 text-secondary">{text.navSubtitle}</p>
        </div>

        <div className="d-flex flex-wrap align-items-center gap-2">
          <button
            className="btn btn-soft action-btn"
            onClick={() => setLang((prev) => (prev === "fr" ? "en" : "fr"))}
            aria-label={text.switchToEnglish}
            title={lang === "fr" ? "English" : "Français"}
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>

          <button
            className={`btn action-btn ${page === "home" ? "btn-main" : "btn-soft"}`}
            onClick={() => setPage("home")}
          >
            {text.home}
          </button>

          <button
            className={`btn action-btn ${page === "projects" ? "btn-main" : "btn-soft"}`}
            onClick={() => setPage("projects")}
          >
            {text.projects}
          </button>

          <button
            className="btn btn-soft action-btn d-inline-flex align-items-center justify-content-center px-3"
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label={darkMode ? text.lightMode : text.darkMode}
            title={darkMode ? text.lightMode : text.darkMode}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </motion.header>
  );
}