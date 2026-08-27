import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "./PixelTransition.module.css";

interface PixelTransitionProps {
  firstSrc: string;
  secondSrc: string;
  alt: string;
  secondAlt?: string;
  gridSize?: number;
  durationMs?: number;
  className?: string;
}

function shuffledIndex(length: number) {
  const order = Array.from({ length }, (_, index) => index);
  for (let i = order.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
}

const PixelTransition = ({
  firstSrc,
  secondSrc,
  alt,
  secondAlt = alt,
  gridSize = 12,
  durationMs = 400,
  className = "",
}: PixelTransitionProps) => {
  const [active, setActive] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const pixelLayer = useRef<HTMLSpanElement>(null);
  const runId = useRef(0);
  const target = useRef(false);
  const timers = useRef<number[]>([]);
  const reduceMotion = useRef(false);

  const cells = useMemo(
    () => Array.from({ length: gridSize * gridSize }, (_, index) => index),
    [gridSize]
  );

  const clearTimers = () => {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
  };

  const pixels = () =>
    pixelLayer.current
      ? Array.from(pixelLayer.current.children) as HTMLElement[]
      : [];

  useEffect(() => {
    reduceMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
    return clearTimers;
  }, []);

  const animateTo = useCallback(
    (next: boolean) => {
      if (target.current === next) return;
      target.current = next;

      if (reduceMotion.current) {
        setActive(next);
        pixels().forEach((node) => node.classList.remove(styles.pixelOn));
        return;
      }

      clearTimers();
      const id = runId.current + 1;
      runId.current = id;

      const nodes = pixels();
      nodes.forEach((node) => node.classList.remove(styles.pixelOn));

      const order = shuffledIndex(nodes.length);
      const step = durationMs / Math.max(order.length, 1);

      order.forEach((pixelIndex, i) => {
        timers.current.push(
          window.setTimeout(() => {
            if (runId.current !== id) return;
            nodes[pixelIndex]?.classList.add(styles.pixelOn);
          }, i * step)
        );
      });

      timers.current.push(
        window.setTimeout(() => {
          if (runId.current !== id) return;
          setActive(next);
        }, durationMs)
      );

      order.forEach((pixelIndex, i) => {
        timers.current.push(
          window.setTimeout(() => {
            if (runId.current !== id) return;
            nodes[pixelIndex]?.classList.remove(styles.pixelOn);
          }, durationMs + i * step)
        );
      });
    },
    [durationMs]
  );

  const showSecond = () => animateTo(true);
  const showFirst = () => animateTo(false);

  return (
    <button
      type="button"
      className={`${styles.card} ${className}`.trim()}
      onMouseEnter={isTouch ? undefined : showSecond}
      onMouseLeave={isTouch ? undefined : showFirst}
      onClick={isTouch ? () => (active ? showFirst() : showSecond()) : undefined}
      onFocus={isTouch ? undefined : showSecond}
      onBlur={isTouch ? undefined : showFirst}
      aria-label="Toggle portrait"
      title="Hover to switch portrait"
    >
      <img
        className={styles.image}
        src={firstSrc}
        alt={active ? "" : alt}
        aria-hidden={active}
      />
      <img
        className={`${styles.image} ${styles.second}`}
        src={secondSrc}
        alt={active ? secondAlt : ""}
        aria-hidden={!active}
        style={{ display: active ? "block" : "none" }}
      />
      <span className={styles.pixels} ref={pixelLayer} aria-hidden="true">
        {cells.map((index) => (
          <span
            key={index}
            className={styles.pixel}
            style={{
              width: `${100 / gridSize}%`,
              height: `${100 / gridSize}%`,
              left: `${(index % gridSize) * (100 / gridSize)}%`,
              top: `${Math.floor(index / gridSize) * (100 / gridSize)}%`,
            }}
          />
        ))}
      </span>
    </button>
  );
};

export default PixelTransition;
