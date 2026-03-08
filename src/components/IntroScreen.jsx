import { AnimatePresence, motion } from "framer-motion";

export default function IntroScreen({ showIntro, setShowIntro, text }) {
  const handleOpenIntro = () => {
    const overlay = document.querySelector(".intro-overlay");
    if (overlay) overlay.classList.add("open");
    setTimeout(() => setShowIntro(false), 700);
  };

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, delay: 0.55 }}
          className={`intro-overlay ${showIntro ? "" : "open"}`}
        >
          <div className="intro-door left" />
          <div className="intro-door right" />

          <div className="intro-center">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="intro-title"
            >
              {text.introTitle}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="intro-subtitle"
            >
              {text.introSub}
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="scroll-pill"
              onClick={handleOpenIntro}
            >
              <span className="scroll-dot" />
              {text.scroll}
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}