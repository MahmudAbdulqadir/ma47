import "../styles/App.css";

const Card = ({ project }) => {
  return (
    <article className={`project-card ${project.featured ? "featured" : ""}`}>
      <div className="card-media">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="man">
        <div className="title-row">
          <div className="mama">{project.title}</div>

          <div className="ccc">
            <span>{project.status}</span>
          </div>
        </div>

        <p className="desc">{project.description}</p>

        <div className="project-info">
          <span>📅 {project.date}</span>

          {project.category && <span>🚀 {project.category}</span>}
        </div>

        <div className="tools">
          {project.technologies.map((tool) => (
            <span key={tool} className="tool">
              {tool}
            </span>
          ))}
        </div>

        <div className="actions">
          <a
            href={project.url}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project →
          </a>
        </div>
      </div>
    </article>
  );
};

export default Card;
