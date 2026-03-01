import styles from "./SkillStyles.module.css";
import { useTheme } from "../common/useTheme";

// Skill data organized by category
const skills = {
  Frontend: [
    "React",
    "Next.js",
    "Tailwind CSS",
    "Chakra UI",
    "Redux",
    "Bootstrap",
  ],
  "Programming Languages": [
    "TypeScript",
    "Java",
    "Python",
    "C",
    "HTML",
    "CSS",
    "JavaScript",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "Spring Boot",
    "REST APIs",
    "MongoDB",
    "Firebase",
    "Prisma",
    "Neon",
    "MySQL",
    "PostgreSQL",
  ],
  "Tools & Others": [
    "Git",
    "GitHub",
    "VS Code",
    "Responsive Design",
    "Figma",
    "GitHub Actions",
    "Docker",
    "Docker Compose",
    "Jenkins",
    "JWT Authentication",
    "CI/CD Pipelines",
  ],
};

function Skills() {
  const { theme } = useTheme();
  const checkmarkIcon =
    theme === "light"
      ? "/src/assets/checkmark-light.svg"
      : "/src/assets/checkmark-dark.svg";

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillCategories}>
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className={styles.skillCategory}>
            <h3>{category}</h3>
            <div className={styles.skillList}>
              {skillList.map((skill) => (
                <div key={skill} className={styles.skillItem}>
                  <img src={checkmarkIcon} alt="Checkmark icon" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
