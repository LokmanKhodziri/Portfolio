import React from "react";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/Resume_Update_V7.pdf";
import { useTheme } from "../common/useTheme";

const Hero: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
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
            <a href="#projects">Work</a>
            <a href="#skills">Stack</a>
            <a href="#contact">Contact</a>
          </div>
          <div className={styles.navActions}>
            <a
              href="https://github.com/lokmankhodziri"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
              aria-label="GitHub"
            >
              <img src={githubIcon} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/lokmankhodziri/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
              aria-label="LinkedIn"
            >
              <img src={linkedinIcon} alt="" />
            </a>
            <button
              type="button"
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label="Toggle color mode"
            >
              <img src={themeIcon} alt="" />
            </button>
          </div>
        </div>
      </nav>

      <section id="hero" className={styles.hero}>
        <div className={styles.heroMedia} aria-hidden="true">
          <img
            className={styles.heroImage}
            src={heroImg}
            alt=""
          />
          <div className={styles.heroMediaShade} />
        </div>

        <div className={styles.heroContent}>
          <p className={styles.brand}>Lokman Khodziri</p>
          <h1 className={styles.headline}>
            Fullstack apps from API to interface.
          </h1>
          <p className={styles.support}>
            I build and ship web products end to end — Node.js and Express
            backends, React frontends, databases, auth, and production deploys.
          </p>
          <div className={styles.ctaGroup}>
            <a href="#projects" className={styles.primaryButton}>
              View work
            </a>
            <a href={CV} download className={styles.secondaryButton}>
              Download resume
            </a>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Hero;
