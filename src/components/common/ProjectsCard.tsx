import React from "react";
import TechBadge from "./TechBadge";
import { resolveTech } from "../../data/tech";

interface ProjectsCardProps {
  src: string;
  link?: string;
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
  const className = featured ? "projectCard featured" : "projectCard";
  const body = (
    <>
      <div className="projectMedia">
        <img
          src={src}
          alt={`${title} preview`}
          width={960}
          height={540}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="projectBody">
        <div className="projectMeta">
          <span className="projectRole">{role}</span>
          {link ? (
            <span className="projectArrow" aria-hidden="true">
              →
            </span>
          ) : null}
        </div>
        <h3>{title}</h3>
        <p>{summary}</p>
        <ul className="projectStack">
          {stack.map((item) => (
            <li key={item}>
              <TechBadge tech={resolveTech(item)} variant="compact" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        data-featured={featured || undefined}
      >
        {body}
      </a>
    );
  }

  return (
    <article className={className} data-featured={featured || undefined}>
      {body}
    </article>
  );
};

export default ProjectsCard;
