import React from 'react';
import styles from './SkillStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../common/SkillList';

const Skills: React.FC = () => {
    return (
        <section id='skills' className={styles.container}>
            <h1 className='sectionTitle'>Skills</h1>
            <div className={styles.skillList}>
                <h3>Frontend</h3>
                <SkillList src={checkMarkIcon} skill='TypeScript' />
                <SkillList src={checkMarkIcon} skill='React' />
                <SkillList src={checkMarkIcon} skill='Next.js' />
                <SkillList src={checkMarkIcon} skill='Redux' />
                <SkillList src={checkMarkIcon} skill='Bootstrap' />
            </div>
            <hr />
            <div className={styles.skillList}>
                <h3>Backend</h3>
                <SkillList src={checkMarkIcon} skill='Node.js' />
                <SkillList src={checkMarkIcon} skill='MongoDB' />
                <SkillList src={checkMarkIcon} skill='Firebase' />
            </div>
            <hr />
            <div className={styles.skillList}>
                <h3>Programming Languages</h3>
                <SkillList src={checkMarkIcon} skill='Java' />
                <SkillList src={checkMarkIcon} skill='Python' />
                <SkillList src={checkMarkIcon} skill='C' />
                <SkillList src={checkMarkIcon} skill='HTML' />
                <SkillList src={checkMarkIcon} skill='CSS' />
                <SkillList src={checkMarkIcon} skill='JavaScript' />
            </div>
            <hr />
            <div className={styles.skillList}>
                <h3>Tools & Others</h3>
                <SkillList src={checkMarkIcon} skill='Git' />
                <SkillList src={checkMarkIcon} skill='GitHub' />
                <SkillList src={checkMarkIcon} skill='VS Code' />
                <SkillList src={checkMarkIcon} skill='Responsive Design' />
            </div>
            <hr />
        </section>
    );
}

export default Skills; 