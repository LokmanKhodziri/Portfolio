import styles from './ProjectsStyles.module.css';
import Viberr from '../../assets/viberr.png';
import FreshBurger from '../../assets/fresh-burger.png';
import Hipsster from '../../assets/hipsster.png';
import Fitlift from '../../assets/fitlift.png';
import ProjectsCard from '../common/ProjectsCard';

function Projects() {
    return (
        <section id='projects' className={styles.container}>
            <h1 className='sectionTitle'>Projects</h1>
            <div className={styles.projectsContainer}>
                <ProjectsCard
                    src={Viberr}
                    link='https://github.com/LokmanKhodziri/youtube_clone'
                    h3='Youtube Clone'
                    p='A clone of Youtube with React and RapidApi.'
                />
                <ProjectsCard
                    src={FreshBurger}
                    link='https://github.com/LokmanKhodziri/youtube_clone'
                    h3='Youtube Clone'
                    p='A clone of Youtube with React and RapidApi.'
                />
                <ProjectsCard
                    src={Hipsster}
                    link='https://github.com/LokmanKhodziri/youtube_clone'
                    h3='Youtube Clone'
                    p='A clone of Youtube with React and RapidApi.'
                />
                <ProjectsCard
                    src={Fitlift}
                    link='https://github.com/LokmanKhodziri/youtube_clone'
                    h3='Youtube Clone'
                    p='A clone of Youtube with React and RapidApi.'
                />
            </div>
        </section>
    )
}

export default Projects