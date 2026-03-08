import { motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";

export default function ProjectModal({
  selectedProject,
  setSelectedProject,
  lang,
  text,
}) {
  if (!selectedProject) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-overlay"
      onClick={() => setSelectedProject(null)}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 18 }}
        transition={{ duration: 0.22 }}
        onClick={(e) => e.stopPropagation()}
        className="project-modal project-modal-compact w-100"
      >
        <div className="d-flex align-items-start justify-content-between gap-3 mb-3">
          <div>
            <div className="category-badge rounded-pill px-3 py-2 small mb-3">
              {lang === "fr"
                ? selectedProject.category
                : selectedProject.category_en || selectedProject.category}
            </div>

            <h3 className="modal-title h3 fw-bold mb-2">
              {lang === "fr" ? selectedProject.title : selectedProject.title_en}
            </h3>
            <div className="d-flex gap-2 mb-3 modal-links">
              <a
                href={selectedProject.live}
                target="_blank"
                rel="noreferrer"
                className="btn btn-main action-btn btn-sm d-inline-flex align-items-center"
              >
                {text.seeProject}
                <ExternalLink size={15} className="ms-1" />
              </a>

              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-soft action-btn btn-sm d-inline-flex align-items-center"
              >
                GitHub
                <Github size={15} className="ms-1" />
              </a>
            </div>
          </div>

          <button
            className="btn btn-soft close-btn"
            onClick={() => setSelectedProject(null)}
          >
            <X size={18} />
          </button>
        </div>

        <p className="modal-text modal-description mb-4">
          {lang === "fr"
            ? selectedProject.description
            : selectedProject.description_en}
        </p>

        <div className="row g-4">
          <div className="col-12 col-md-5">
            <h4 className="text-uppercase fw-bold small mb-3">{text.stack}</h4>
            <div className="d-flex flex-wrap gap-2">
              {selectedProject.stack.map((item) => (
                <span
                  key={item}
                  className="stack-badge rounded-pill px-3 py-2 stack-text"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="col-12 col-md-7">
            <h4 className="text-uppercase fw-bold small mb-3">
              {text.features}
            </h4>
            <div className="d-flex flex-column gap-2">
              {(lang === "fr"
                ? selectedProject.features
                : selectedProject.features_en
              ).map((feature) => (
                <div
                  key={feature}
                  className="feature-item px-3 py-3 feature-text"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/*  */}
      </motion.div>
    </motion.div>
  );
}
