import "./Projects.css";

const projectsData = [
  {
    name: "AdGA",
    description: "Project description..",
    image_url:
      "https://onetreeplanted.org/cdn/shop/articles/nature_facts_1600x.jpg?v=1705008496",
    image_alt: "Some alternative image description",
    repository_url: "http://repo.xyz",
    tech_stack: ["a", "b", "c"],
    is_academic: true,
  },
  {
    name: "AdGA",
    description: "Project description..",
    image_url:
      "https://onetreeplanted.org/cdn/shop/articles/nature_facts_1600x.jpg?v=1705008496",
    image_alt: "Some alternative image description",
    repository_url: "http://repo.xyz",
    tech_stack: ["a", "b", "c"],
    is_academic: false,
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
              <img src={project.image_url} alt={project.image_alt} />
            </div>
            <h4>{project.name}</h4>
            <h5>{project.description}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
