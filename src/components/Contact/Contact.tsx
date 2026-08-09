import React from "react";
import styles from "./ContactStyles.module.css";
import Reveal from "../common/Reveal";

const Contact: React.FC = () => {
  return (
    <section id="contact" className={styles.container}>
      <Reveal>
        <div className="sectionHeader">
          <p className="sectionEyebrow">Contact</p>
          <h2 className="sectionTitle">Let’s build something solid</h2>
          <p className="sectionSubtitle">
            Open to fullstack roles, freelance builds, and collaborations.
            Tell me what you’re shipping — I’ll get back to you.
          </p>
        </div>
      </Reveal>

      <Reveal delayMs={80}>
        <form
          className={styles.form}
          action="https://formspree.io/f/xjkbvegq"
          method="POST"
        >
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required autoComplete="name" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              autoComplete="email"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows={6} required />
          </div>
          <button className={styles.submit} type="submit">
            Send message
          </button>
        </form>
      </Reveal>
    </section>
  );
};

export default Contact;
