import React from "react";
import type { Tech } from "../../data/tech";
import styles from "./TechBadge.module.css";

type Variant = "default" | "inline" | "compact";

interface TechBadgeProps {
  tech: Tech;
  variant?: Variant;
}

const TechBadge: React.FC<TechBadgeProps> = ({ tech, variant = "default" }) => {
  const iconUrl = tech.slug ? `url("/tech/${tech.slug}.svg")` : undefined;

  return (
    <span
      className={[
        styles.badge,
        variant !== "default" ? styles[variant] : "",
        !iconUrl ? styles.plain : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={
        {
          "--tech-color": tech.color,
          "--tech-icon": iconUrl,
        } as React.CSSProperties
      }
    >
      {iconUrl ? (
        <span
          className={`${styles.icon} ${tech.invertInDark ? styles.invert : ""}`}
          aria-hidden="true"
        />
      ) : null}
      {tech.name}
    </span>
  );
};

export default TechBadge;
