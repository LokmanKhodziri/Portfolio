import React from "react";
import styles from "./FooterStyles.module.css";

const Footer: React.FC = () => {
  return (
    <footer id="footer" className={styles.container}>
      <div className={styles.inner}>
        <p className={styles.brand}>Lokman Khodziri</p>
        <p className={styles.copy}>
          Fullstack developer · Building reliable web products
        </p>
        <p className={styles.legal}>© 2026 Lokman Khodziri. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
