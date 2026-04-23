import React from "react";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/Resume_Update_V7.pdf";
import { useTheme } from "../common/useTheme";

const Hero: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <header className={styles.wrapper}>
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <a href="#hero" className={styles.logo}>
            LK
          </a>
          <div className={styles.navLinks}>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
          <button
            type="button"
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Toggle color mode"
          >
            <img src={themeIcon} alt="Color mode icon" />
          </button>
        </div>
      </nav>

      <section id="hero" className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <span className={styles.rolePill}>Fullstack Developer</span>
            <h1>Lokman Khodziri</h1>
            <p className={styles.tagline}>
              I build fullstack web applications with Node.js, Express, and
              React.
            </p>
            <p className={styles.description}>
              I&apos;m a Node.js-focused fullstack developer who enjoys designing
              clean REST APIs, wiring them to responsive React interfaces, and
              deploying reliable apps end-to-end. My work spans from backend
              architecture and authentication to frontend UX and performance.
            </p>
            <div className={styles.ctaGroup}>
              <a href="#projects" className={styles.primaryButton}>
                View Projects
              </a>
              <a href={CV} download className={styles.secondaryButton}>
                Download Resume
              </a>
            </div>
            <div className={styles.techChips}>
              <span className={styles.chip}>Node.js</span>
              <span className={styles.chip}>Express.js</span>
              <span className={styles.chip}>React</span>
              <span className={styles.chip}>TypeScript</span>
              <span className={styles.chip}>MongoDB &amp; PostgreSQL</span>
            </div>
            <div className={styles.socialLinks}>
              <a
                href="https://x.com/jiroooojiroooo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitterIcon} alt="Twitter icon" />
              </a>
              <a
                href="https://github.com/lokmankhodziri"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubIcon} alt="Github icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/lokmankhodziri/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="Linkedin icon" />
              </a>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.heroCard}>
              <div className={styles.heroGlow} />
              <img
                className={styles.hero}
                src={heroImg}
                alt="Profile picture of Lokman Khodziri"
              />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Hero;
