import React from 'react';
import styles from './ProjectsStyles.module.css';
import Viberr from '../../assets/viberr.png';
import FreshBurger from '../../assets/fresh-burger.png';
import Fitlift from '../../assets/fitlift.png';
import ProjectsCard from '../common/ProjectsCard';

const Projects: React.FC = () => {
    return (
        <section id='projects' className={styles.container}>
            <h1 className='sectionTitle'>Projects</h1>
            <div className={styles.projectsContainer}>
                <ProjectsCard
                    src={Viberr}
                    link='https://github.com/LokmanKhodziri/Ecomm'
                    h3='E-commerce Platform'
                    p='A full-featured e-commerce platform built with React, Redux, and Firebase. Features include user authentication, shopping cart management, Stripe payment integration, and real-time database updates. Implemented state management with Redux, styled components, and responsive design.'
                />
                <ProjectsCard
                    src={Fitlift}
                    link='https://github.com/LokmanKhodziri/BookStore-MERN'
                    h3='Bookstore MERN Project'
                    p='A complete MERN stack bookstore application featuring user authentication, book management system, and admin dashboard. Built with MongoDB, Express.js, React, and Node.js. Includes features like book search, filtering, and real-time updates with RESTful API architecture.'
                />
                <ProjectsCard
                    src={Viberr}
                    link='https://github.com/LokmanKhodziri/Fullstack_Blog'
                    h3='Fullstack Blog'
                    p='A full-stack blog platform built with Node.js, Express, and MongoDB. Features include user authentication, CRUD operations for blog posts, responsive design, and RESTful API architecture. Implemented secure password hashing and JWT authentication.'
                />
                <ProjectsCard
                    src={Viberr}
                    link='https://github.com/LokmanKhodziri/youtube_clone'
                    h3='Youtube Clone'
                    p='A YouTube clone application developed with React and RapidAPI. Features include video search, channel browsing, video playback, and responsive design. Integrated with YouTube API for real-time data fetching and state management using React hooks.'
                />
                <ProjectsCard
                    src={FreshBurger}
                    link='https://github.com/LokmanKhodziri/anime-webs'
                    h3='Anime Website'
                    p='An interactive anime discovery platform built with React and RapidAPI. Features include anime search, detailed information display, genre filtering, and responsive design. Implemented modern UI/UX practices with smooth animations and transitions.'
                />
            </div>
        </section>
    );
}

export default Projects; 