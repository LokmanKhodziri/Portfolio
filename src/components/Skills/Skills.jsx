import styles from './SkillStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../common/SkillList';

function Skill() {
    return (
        <section id='skills' className={styles.container}>
            <h1 className='sectionTitle'>Skills</h1>
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill='HTML' />
                <SkillList src={checkMarkIcon} skill='CSS' />
                <SkillList src={checkMarkIcon} skill='JavaScript' />
                <SkillList src={checkMarkIcon} skill='React' />
                <SkillList src={checkMarkIcon} skill='Node' />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill='Firebase' />
                <SkillList src={checkMarkIcon} skill='MangoDB' />
                <SkillList src={checkMarkIcon} skill='Java' />
                <SkillList src={checkMarkIcon} skill='C' />
                <SkillList src={checkMarkIcon} skill='Python' />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill='GIT' />
                <SkillList src={checkMarkIcon} skill='Bootstrap' />
                <SkillList src={checkMarkIcon} skill='Redux' />
            </div>
            <hr />
        </section>
    )
}

export default Skill