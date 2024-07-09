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
                    link='https://github.com/LokmanKhodziri/Fullstack_Blog'
                    h3='Fullstack Blog'
                    p='A blog website that have simple autentication for loging with NodeJs and MongoDB .'
                />
                <ProjectsCard
                    src={Viberr}
                    link='https://github.com/LokmanKhodziri/youtube_clone'
                    h3='Youtube Clone'
                    p='A clone of Youtube with React and RapidApi.'
                />
                <ProjectsCard
                    src={FreshBurger}
                    link='https://github.com/LokmanKhodziri/anime-webs'
                    h3='Anime Website'
                    p='An Anime website to with RapidApi.'
                />
                <ProjectsCard
                    src={Hipsster}
                    link='https://github.com/LokmanKhodziri/crwn-clothing-v2'
                    h3='E-commerce website'
                    p='A e-commerce website with firebase.'
                />
                <ProjectsCard
                    src={Fitlift}
                    link='https://github.com/LokmanKhodziri/BookStore-MERN'
                    h3='Bookstore Mern Project'
                    p='A Mern bookstore project to showcase book and able to update the data on backend.'
                />
            </div>
        </section>
    )
}

export default Projects