import { startTransition, useEffect, useRef, useState } from "react";
import styles from "./SkillStyles.module.css";
import Reveal from "../common/Reveal";
import TechBadge from "../common/TechBadge";
import { marqueeRows, skillGroups } from "../../data/tech";
import type { Tech } from "../../data/tech";

function MarqueeRow({
  items,
  reverse,
}: {
  items: Tech[];
  reverse?: boolean;
}) {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        el.classList.toggle(styles.offscreen, !entry.isIntersecting);
      },
      { rootMargin: "80px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rowRef} className={styles.marquee}>
      <div
        className={`${styles.track} ${reverse ? styles.trackReverse : ""}`}
        aria-hidden="true"
      >
        {[0, 1].map((copy) =>
          items.map((tech) => (
            <TechBadge key={`${copy}-${tech.name}`} tech={tech} />
          ))
        )}
      </div>
    </div>
  );
}

function Skills() {
  const [grouped, setGrouped] = useState(false);

  const toggleGrouped = () => {
    startTransition(() => {
      setGrouped((value) => !value);
    });
  };

  return (
    <section id="skills" className={styles.container}>
      <Reveal>
        <div className={styles.header}>
          <h2 className={styles.title}>Technologies</h2>
          <div className={styles.headerActions}>
            <button
              type="button"
              className={styles.viewToggle}
              onClick={toggleGrouped}
              title={grouped ? "Show animated rows" : "Show grouped technologies"}
              aria-pressed={grouped}
            >
              {grouped ? (
                <svg viewBox="0 0 16 16" aria-hidden="true">
                  <rect x="1" y="2" width="14" height="2.2" rx="1" />
                  <rect x="1" y="7" width="14" height="2.2" rx="1" />
                  <rect x="1" y="12" width="14" height="2.2" rx="1" />
                </svg>
              ) : (
                <svg viewBox="0 0 16 16" aria-hidden="true">
                  <rect x="1" y="1" width="6" height="6" rx="1.2" />
                  <rect x="9" y="1" width="6" height="6" rx="1.2" />
                  <rect x="1" y="9" width="6" height="6" rx="1.2" />
                  <rect x="9" y="9" width="6" height="6" rx="1.2" />
                </svg>
              )}
            </button>
            <button
              type="button"
              className={styles.viewAll}
              onClick={toggleGrouped}
            >
              {grouped ? "Show less" : "View all"}
              <span aria-hidden="true">›</span>
            </button>
          </div>
        </div>
      </Reveal>

      <ul className={styles.srOnly}>
        {skillGroups.flatMap((group) =>
          group.items.map((tech) => (
            <li key={tech.name}>{tech.name}</li>
          ))
        )}
      </ul>

      {grouped ? (
        <div className={styles.grouped}>
          {skillGroups.map((group) => (
            <div key={group.title} className={styles.group}>
              <p className={styles.groupTitle}>{group.title}</p>
              <div className={styles.groupPills}>
                {group.items.map((tech) => (
                  <TechBadge key={tech.name} tech={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.marqueeStack}>
          {marqueeRows.map((row, index) => (
            <MarqueeRow
              key={index}
              items={row}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Skills;
