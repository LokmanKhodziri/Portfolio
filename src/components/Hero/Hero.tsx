import { useRef, type PointerEvent } from "react";
import { useTheme } from "../common/useTheme";
import TechBadge from "../common/TechBadge";
import PixelTransition from "../common/PixelTransition";
import { techCatalog } from "../../data/tech";
import styles from "./HeroStyles.module.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/Lokman_Resume_V8.pdf";

function ThemeIcons({
  light,
  dark,
}: {
  light: string;
  dark: string;
}) {
  return (
    <>
      <img className={styles.iconLight} src={light} alt="" />
      <img className={styles.iconDark} src={dark} alt="" />
    </>
  );
}

const heroStack = [
  techCatalog.Expo,
  techCatalog["React Native"],
  techCatalog["Next.js"],
  techCatalog.NestJS,
] as const;

const Hero = () => {
  const { toggleTheme } = useTheme();
  const ignoreThemeClick = useRef(false);

  const handleThemePointerDown = (
    event: PointerEvent<HTMLButtonElement>
  ) => {
    if (event.button !== 0) return;
    ignoreThemeClick.current = true;
    toggleTheme();
  };

  const handleThemeClick = () => {
    if (ignoreThemeClick.current) {
      ignoreThemeClick.current = false;
      return;
    }
    toggleTheme();
  };

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
              <ThemeIcons light={githubLight} dark={githubDark} />
            </a>
            <a
              href="https://www.linkedin.com/in/lokmankhodziri/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
              aria-label="LinkedIn"
            >
              <ThemeIcons light={linkedinLight} dark={linkedinDark} />
            </a>
            <button
              type="button"
              className={styles.themeToggle}
              onPointerDown={handleThemePointerDown}
              onClick={handleThemeClick}
              aria-label="Toggle color mode"
            >
              <ThemeIcons light={sun} dark={moon} />
            </button>
          </div>
        </div>
      </nav>

      <section id="hero" className={styles.hero}>
        <div className={styles.heroContent}>
          <PixelTransition
            className={styles.portrait}
            firstSrc="/hero.webp"
            secondSrc="/hero-alt.webp"
            alt="Portrait of Lokman Khodziri"
            secondAlt="Alternate portrait of Lokman Khodziri"
          />
          <p className={styles.brand}>Lokman Khodziri</p>
          <p className={styles.eyebrow}>Currently shipping</p>
          <h1 className={styles.headline}>Building ShiftMate</h1>
          <p className={styles.support}>
            An offline-first shift calendar for Malaysian rotating schedules —
            plus fullstack web products from API to interface.
          </p>
          <div className={styles.ctaGroup}>
            <a href="#projects" className={styles.primaryButton}>
              View work
            </a>
            <a href={CV} download className={styles.secondaryButton}>
              Download resume
            </a>
          </div>
          <ul className={styles.stackPills}>
            {heroStack.map((tech) => (
              <li key={tech.name}>
                <TechBadge tech={tech} variant="compact" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </header>
  );
};

export default Hero;
