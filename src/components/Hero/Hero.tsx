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
          <div className={styles.identity}>
            <PixelTransition
              className={styles.portrait}
              firstSrc="/hero.webp"
              secondSrc="/hero-alt.webp"
              alt="Portrait of Lokman Khodziri"
              secondAlt="Alternate portrait of Lokman Khodziri"
            />
            <div className={styles.identityText}>
              <p className={styles.brand}>Lokman Khodziri</p>
              <div className={styles.identityLinks}>
                <a
                  href="https://github.com/lokmankhodziri"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <ThemeIcons light={githubLight} dark={githubDark} />
                </a>
                <a
                  href="https://www.linkedin.com/in/lokmankhodziri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <ThemeIcons light={linkedinLight} dark={linkedinDark} />
                </a>
              </div>
            </div>
          </div>
          <h1 className={styles.headline}>
            Fullstack apps from API to interface.
          </h1>
          <p className={styles.support}>
            I build and ship web products end to end —{" "}
            <span className={styles.inlineTech}>
              <TechBadge tech={techCatalog["Next.js"]} variant="inline" />
              <TechBadge tech={techCatalog.React} variant="inline" />
            </span>{" "}
            frontends,{" "}
            <span className={styles.inlineTech}>
              <TechBadge tech={techCatalog.NestJS} variant="inline" />
              <TechBadge tech={techCatalog["Node.js"]} variant="inline" />
            </span>{" "}
            backends, and production deploys.
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
