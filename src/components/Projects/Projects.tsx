import React from "react";
import styles from "./ProjectsStyles.module.css";
import Viberr from "../../assets/viberr.png";
import FreshBurger from "../../assets/fresh-burger.png";
import Fitlift from "../../assets/fitlift.png";
import ProjectsCard from "../common/ProjectsCard";

const Projects: React.FC = () => {
  return (
    <section id='projects' className={styles.container}>
      <h1 className={`sectionTitle ${styles.sectionTitle}`}>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectsCard
          src={Viberr}
          link='https://github.com/LokmanKhodziri/Ecomm'
          h3='E-commerce Platform'
          p='A full-featured e-commerce platform built with React, Redux, and Firebase. Features include user authentication, shopping cart management, Stripe payment integration, and real-time database updates. Implemented state management with Redux, styled components, and responsive design.'
        />
        <ProjectsCard
          src={Viberr}
          link='https://github.com/LokmanKhodziri/Fullstack_Blog'
          h3='Fullstack Blog'
          p='A full-stack blog platform built with Node.js, Express, and MongoDB. Features include user authentication, CRUD operations for blog posts, responsive design, and RESTful API architecture. Implemented secure password hashing and JWT authentication.'
        />
        <ProjectsCard
          src={FreshBurger}
          link='https://github.com/LokmanKhodziri/anime-webs'
          h3='Anime Website'
          p='An interactive anime discovery platform built with React and RapidAPI. Features include anime search, detailed information display, genre filtering, and responsive design. Implemented modern UI/UX practices with smooth animations and transitions.'
        />
        <ProjectsCard
          src={Fitlift}
          link='https://github.com/LokmanKhodziri/capstone_project'
          h3='ExpenseTracker (Capstone Project)'
          p='A full-stack expense tracking application built with a Spring Boot backend and React frontend. Implements JWT authentication, secure password hashing, and persistent data storage with MySQL. Containerized with Docker and orchestrated via Docker Compose for easy local development.'
        />
        <ProjectsCard
          src={FreshBurger}
          link='https://bebilisyard-demo.vercel.app/'
          h3='Bebilis Yard Demo'
          p='A demo web application for Bebilis Yard showcasing modern UI/UX and responsive design. Focuses on clean layout, engaging visuals, and reusable components to highlight products and content effectively across devices.'
        />
      </div>
    </section>
  );
};

export default Projects;
