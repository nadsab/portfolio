import { motion } from "framer-motion";
import { ArrowRight, FolderKanban } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function ProjectsSection({
  text,
  lang,
  projects,
  darkMode,
  setSelectedProject,
}) {
  return (
    <motion.main
      key="projects"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35 }}
    >
      <SectionTitle
        icon={FolderKanban}
        title={text.projectTitle}
        subtitle={text.projectSub}
      />

      <div className="row g-4">
        {projects.map((project, index) => (
          <div className="col-12 col-md-6 col-xl-4" key={project.id}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="project-card h-100 p-3"
              onClick={() => setSelectedProject(project)}
            >
              <div className="d-flex align-items-center justify-content-between gap-3 mb-4">
                <div className="category-badge rounded-pill px-3 py-2 small">
                  {lang === "fr"
                    ? project.category
                    : project.category_en || project.category}
                </div>
                <div className="project-thumb">
                  <img
                    src={project.image}
                    alt={lang === "fr" ? project.title : project.title_en}
                  />
                </div>
              </div>

              <h3 className="project-title h5 fw-bold mb-3">
                {lang === "fr" ? project.title : project.title_en}
              </h3>

              <p className="project-text mb-4 fw-medium">
                {lang === "fr" ? project.short : project.short_en}
              </p>

              <div className="d-flex flex-wrap gap-2 mb-4">
                {project.stack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="stack-badge rounded-pill px-3 py-2 small"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div
                className="d-inline-flex align-items-center fw-semibold"
                style={{ color: darkMode ? "#7dd3fc" : "#0369a1" }}
              >
                {text.seeDetails}
                <ArrowRight size={16} className="ms-2" />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.main>
  );
}