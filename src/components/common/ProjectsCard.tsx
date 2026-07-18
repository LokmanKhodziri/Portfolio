import React from "react";

interface ProjectsCardProps {
  src: string;
  link: string;
  title: string;
  summary: string;
  stack: string[];
  role: string;
  featured?: boolean;
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({
  src,
  link,
  title,
  summary,
  stack,
  role,
  featured = false,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={featured ? "projectCard featured" : "projectCard"}
      data-featured={featured || undefined}
    >
      <div className="projectMedia">
        <img src={src} alt={`${title} preview`} />
      </div>
      <div className="projectBody">
        <div className="projectMeta">
          <span className="projectRole">{role}</span>
          <span className="projectArrow" aria-hidden="true">
            →
          </span>
        </div>
        <h3>{title}</h3>
        <p>{summary}</p>
        <ul className="projectStack">
          {stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </a>
  );
};

export default ProjectsCard;
