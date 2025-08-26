import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";

import "./Projects.css";

const projectsData = [
  {
    name: "PETAL",
    description:
      "Planification Énergétique Territoriale Assistée par LLM (PETAL) is a solution enabling data-driven, informed decisions for energy planning tasks, in Swiss municipalities.",
    image_url: "/assets/projects/petal.png",
    image_alt:
      "PETAL web interface, displaying recommendations for photovoltaic installations in Switzerland",
    repository_url: "https://github.com/dij0s/PETAL",
    tech_stack: ["LangGraph", "Ollama", "Redis"],
    is_academic: true,
  },
  {
    name: "AMR",
    description:
      "Implementation of an Adaptive Mesh Refinement (AMR) algorithm applied to a two-dimensional heat diffusion problem",
    image_url: "/assets/projects/amr.png",
    image_alt: "Adaptive Mesh Refinement on a 2D heat diffusion problem",
    repository_url: "https://github.com/dij0s/AMR",
    tech_stack: ["Python"],
    is_academic: true,
  },
];

function Projects() {
  return (
    <div id="projects-wrapper">
      <span>Here are my favorite projects.</span>
      <div id="projects-inner-wrapper">
        {projectsData.map((project, projectIndex) => (
          <div className="single-project-wrapper" key={projectIndex}>
            <div className="single-project-hero-wrapper">
              <img
                src={project.image_url}
                alt={project.image_alt}
                onClick={() => window.open(project.repository_url, "_blank")}
              />
            </div>
            <div className="single-project-address">
              <h4 className="project-name">{project.name}</h4>
              <FontAwesomeIcon
                icon={faGithubAlt}
                onClick={() => window.open(project.repository_url, "_blank")}
              />
            </div>
            <h5 className="project-description">{project.description}</h5>
            <div className="tech-stack-wrapper">
              {project.tech_stack.map((tech, index) => (
                <h5 key={index} className="tech-stack-label">
                  {tech}
                </h5>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
