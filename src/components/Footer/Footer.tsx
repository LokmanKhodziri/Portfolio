import React from 'react';
import styles from './FooterStyles.module.css';

const Footer: React.FC = () => {
    return (
        <section id='footer' className={styles.container}>
            <p>&copy; 2025 LokmanKhodziri. <br />
                All rights reserved.</p>
        </section>
    );
}

export default Footer; 