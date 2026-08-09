import styles from "./SkillStyles.module.css";
import Reveal from "../common/Reveal";

const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Chakra UI"],
  Backend: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "JWT Auth"],
  Data: ["MongoDB", "PostgreSQL", "MySQL", "Prisma", "Firebase", "Neon"],
  "Tools & delivery": [
    "Git",
    "Docker",
    "Docker Compose",
    "GitHub Actions",
    "CI/CD",
    "Jenkins",
  ],
};

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <Reveal>
        <div className="sectionHeader">
          <p className="sectionEyebrow">Capabilities</p>
          <h2 className="sectionTitle">Stack I work across</h2>
          <p className="sectionSubtitle">
            Comfortable owning the full path — UI, API, data, and how it gets
            into production.
          </p>
        </div>
      </Reveal>

      <div className={styles.skillCategories}>
        {Object.entries(skills).map(([category, skillList], index) => (
          <Reveal key={category} delayMs={index * 70}>
            <div className={styles.skillCategory}>
              <h3>{category}</h3>
              <ul className={styles.skillList}>
                {skillList.map((skill) => (
                  <li key={skill} className={styles.skillItem}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Skills;
