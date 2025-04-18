import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";

import "./Projects.css";

const projectsData = [
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
  {
    name: "AdGA",
    description:
      "Autopilot driving Genetic Algorithm (AdGA) is a scalable distributed framework that uses genetic algorithms to optimize autonomous vehicle paths in a driving simulation",
    image_url: "/assets/projects/adga.png",
    image_alt: "Car simulation game",
    repository_url: "https://github.com/dij0s/AdGA",
    tech_stack: ["Python", "MPI", "Kubernetes"],
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
