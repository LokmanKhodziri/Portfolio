import { useRef } from "react";
import styles from "./PixelTransition.module.css";

interface PixelTransitionProps {
  firstSrc: string;
  secondSrc: string;
  alt: string;
  secondAlt?: string;
  className?: string;
}

function prefersFineHover() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

const PixelTransition = ({
  firstSrc,
  secondSrc,
  alt,
  secondAlt = alt,
  className = "",
}: PixelTransitionProps) => {
  const cardRef = useRef<HTMLButtonElement>(null);
  const ignoreClick = useRef(false);

  const toggle = (fromPointer = false) => {
    const card = cardRef.current;
    if (!card) return;
    if (fromPointer && prefersFineHover()) return;
    card.classList.toggle(styles.on);
  };

  return (
    <button
      ref={cardRef}
      type="button"
      className={`${styles.card} ${className}`.trim()}
      onPointerDown={(event) => {
        if (event.button !== 0) return;
        ignoreClick.current = true;
        toggle(true);
      }}
      onClick={() => {
        if (ignoreClick.current) {
          ignoreClick.current = false;
          return;
        }
        toggle(false);
      }}
      aria-label="Toggle portrait"
      title="Hover to switch portrait"
    >
      <img
        className={styles.image}
        src={firstSrc}
        alt={alt}
        width={320}
        height={320}
        decoding="async"
        fetchPriority="high"
      />
      <img
        className={`${styles.image} ${styles.second}`}
        src={secondSrc}
        alt={secondAlt}
        width={320}
        height={320}
        loading="lazy"
        decoding="async"
      />
      <span className={styles.flash} aria-hidden="true" />
    </button>
  );
};

export default PixelTransition;
