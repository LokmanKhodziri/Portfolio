import React from 'react';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Resume_Update_2025.pdf';
import { useTheme } from '../common/useTheme';

const Hero: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    return (
        <section id='hero' className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img
                    className={styles.hero}
                    src={heroImg}
                    alt="Profile picture of LokmanKhodziri" />
                <img
                    className={styles.colorMode}
                    src={themeIcon}
                    alt="Color mode icon"
                    onClick={toggleTheme} />
            </div>
            <div className={styles.info}>
                <h1>LokmanKhodziri</h1>
                <h2>Fullstack Developer</h2>
            </div>
            <div className={styles.socialLinks}>
                <a href="https://x.com/jiroooojiroooo" target='_blank' rel="noopener noreferrer">
                    <img src={twitterIcon} alt="Twitter icon" />
                </a>
                <a href="https://github.com/lokmankhodziri" target='_blank' rel="noopener noreferrer">
                    <img src={githubIcon} alt="Github icon" />
                </a>
                <a href="https://www.linkedin.com/in/lokmankhodziri/" target='_blank' rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="Linkedin icon" />
                </a>
            </div>
            <p className={styles.description}>Driven individual with a deep desire to transition into the world of development. I have honed and built interactive prototypes with my skills through self-learning and my current bachelor&apos;s study, fueling my passion for front-end development and its potential.</p>
            <a href={CV} download>
                <button className={styles.button}>
                    Resume
                </button>
            </a>
        </section>
    );
}

export default Hero; 
