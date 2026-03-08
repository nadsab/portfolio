import { motion } from "framer-motion";
import { ArrowRight, Code2, User } from "lucide-react";
import SkillBadge from "./SkillBadge";
import SectionTitle from "./SectionTitle";

export default function HomeSection({
  text,
  lang,
  profile,
  skills,
  darkMode,
  setPage,
}) {
  return (
    <motion.main
      key="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35 }}
    >
      <div className="row g-3 g-xl-4 align-items-start">
        <div className="col-12 col-xl-7">
          <div className="portfolio-card h-100 overflow-hidden p-3 p-lg-4 position-relative">
            <div className="hero-badge d-inline-flex rounded-pill px-3 py-2 mb-4">
              {text.heroBadge}
            </div>

            <h2 className="hero-title display-6 fw-bold lh-sm mb-3">
              {text.heroTitle}
            </h2>

            <p className="hero-text fs-6 lh-lg mb-4">
              {lang === "fr" ? profile.intro : profile.intro_en}
            </p>

            <div className="mb-4">
              <div className="mini-badge d-inline-flex align-items-center gap-2 rounded-pill px-3 py-2 small">
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 999,
                    background: "#0ea5e9",
                    display: "inline-block",
                  }}
                />
                {text.heroMini}
              </div>
            </div>

            <div className="d-flex flex-wrap gap-3">
              <button
                className="btn btn-main action-btn d-inline-flex align-items-center"
                onClick={() => setPage("projects")}
              >
                {text.seeProjects}
                <ArrowRight size={16} className="ms-2" />
              </button>

              <a className="btn btn-soft action-btn" href={profile.contactLink}>
                {text.contact}
              </a>
            </div>

            <div className="mt-5 pt-4 border-top border-secondary-subtle">
              <SectionTitle
                icon={Code2}
                title={text.skillsTitle}
                subtitle={text.skillsSub}
              />
              <div className="d-flex flex-wrap gap-2 gap-md-3">
                {skills.map((skill) => (
                  <SkillBadge key={skill} label={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-xl-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="position-relative"
          >
            <div className="portfolio-card p-3 p-lg-4 position-relative">
              <div className="card-glow" />
              <div className="position-relative" style={{ zIndex: 1 }}>
                <SectionTitle
                  icon={User}
                  title={text.aboutTitle}
                  subtitle={text.aboutSub}
                />

                <div className="profile-shell d-flex align-items-center justify-content-center">
                  <div className="profile-glow" />
                  <div className="profile-ring" />
                  <div className="profile-image-wrap">
                    <img src={profile.image} alt={profile.name} />
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="profile-name h4 fw-bold mb-2">
                    {profile.name}
                  </h3>
                  {/*  */}
                  <div className="d-flex justify-content-center gap-3 mt-3">
                    <a
                      href={profile.github}
                      target="_blank"
                      className="btn btn-soft action-btn"
                    >
                      GitHub
                    </a>

                    <a
                      href={profile.linkedin}
                      target="_blank"
                      className="btn btn-soft action-btn"
                    >
                      LinkedIn
                    </a>
                  </div>
                  {/*  */}
                  <p
                    className="mb-1 fw-semibold"
                    style={{ color: darkMode ? "#7dd3fc" : "#0369a1" }}
                  >
                    {lang === "fr" ? profile.title : profile.title_en}
                  </p>
                  <p className="text-secondary mb-0">{profile.location}</p>
                </div>
              </div>

              <div
                className="row g-3 mt-4 position-relative"
                style={{ zIndex: 1 }}
              >
                <div className="col-12 col-sm-6">
                  <a
                    href={profile.cvLink}
                    className="btn btn-main action-btn w-100"
                  >
                    {text.downloadCV}
                  </a>
                </div>
                <div className="col-12 col-sm-6">
                  <a
                    href={profile.contactLink}
                    className="btn btn-soft action-btn w-100"
                  >
                    {text.contactShort}
                  </a>
                </div>
              </div>
            </div>

            <div className="floating-glow-top" />
            <div className="floating-glow-bottom" />
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
}
