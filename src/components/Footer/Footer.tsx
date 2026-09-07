import React, { useEffect, useState } from "react";
import styles from "./FooterStyles.module.css";

const CACHE_KEY = "visitor_count_cache";
const CACHE_TTL_MS = 5 * 60 * 1000;

function readCachedCount(): number | null {
  try {
    const cached = JSON.parse(sessionStorage.getItem(CACHE_KEY) ?? "null") as {
      count?: number;
      fetchedAt?: number;
    } | null;
    if (
      cached &&
      typeof cached.count === "number" &&
      typeof cached.fetchedAt === "number" &&
      Date.now() - cached.fetchedAt < CACHE_TTL_MS
    ) {
      return cached.count;
    }
  } catch {
    /* ignore broken cache */
  }
  return null;
}

function useVisitorCount() {
  const [count, setCount] = useState<number | null>(readCachedCount);

  useEffect(() => {
    if (readCachedCount() !== null) return;

    fetch("/api/visit")
      .then((response) =>
        response.ok ? response.json() : Promise.reject(new Error("visit count failed"))
      )
      .then((payload: { count?: number }) => {
        if (typeof payload.count !== "number") return;
        setCount(payload.count);
        sessionStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ count: payload.count, fetchedAt: Date.now() })
        );
      })
      .catch(() => {
        /* keep the pill hidden if the counter is down */
      });
  }, []);

  return count;
}

const Footer: React.FC = () => {
  const visitorCount = useVisitorCount();

  return (
    <footer id="footer" className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.meta}>
          <p className={styles.brand}>Lokman Khodziri</p>
          <p className={styles.copy}>
            Fullstack developer · Building reliable web products
          </p>
          <p className={styles.legal}>
            © 2026 Lokman Khodziri. All rights reserved.
          </p>
        </div>

        <div className={styles.visits}>
          <div className={styles.avatars} aria-hidden="true">
            <img className={styles.avatar} src="/hero.webp" alt="" />
            <span className={`${styles.avatar} ${styles.avatarMark} ${styles.avatarNext}`}>
              N
            </span>
            <span className={`${styles.avatar} ${styles.avatarMark} ${styles.avatarNest}`}>
              n
            </span>
            <span className={`${styles.avatar} ${styles.avatarMark} ${styles.avatarNode}`}>
              js
            </span>
          </div>
          {visitorCount !== null && (
            <p className={styles.count}>
              Visited by {visitorCount.toLocaleString()} people
            </p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
