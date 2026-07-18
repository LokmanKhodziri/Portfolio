import React from "react";
import styles from "./ProjectsStyles.module.css";
import Viberr from "../../assets/viberr.png";
import FreshBurger from "../../assets/fresh-burger.png";
import Fitlift from "../../assets/fitlift.png";
import TravelPlanner from "../../assets/travel-planner1.png";
import ProjectsCard from "../common/ProjectsCard";
import Reveal from "../common/Reveal";

const projects = [
  {
    src: TravelPlanner,
    link: "https://jomjalanjalan.vercel.app/",
    title: "JomJalanJalan",
    role: "Fullstack · Live product",
    summary:
      "Muslim-friendly travel planner with day-by-day itineraries, maps, prayer times, and nearby halal spots. Next.js frontend backed by an Express + Prisma API with Google/GitHub OAuth.",
    stack: ["Next.js", "Express", "Prisma", "OAuth"],
    featured: true,
  },
  {
    src: Fitlift,
    link: "https://github.com/LokmanKhodziri/capstone_project",
    title: "ExpenseTracker",
    role: "Fullstack · Capstone",
    summary:
      "Expense tracking app with JWT auth, password hashing, and MySQL persistence. Spring Boot API + React client, packaged with Docker Compose for one-command local setup.",
    stack: ["Spring Boot", "React", "MySQL", "Docker"],
  },
  {
    src: Viberr,
    link: "https://github.com/LokmanKhodziri/Ecomm",
    title: "E-commerce Platform",
    role: "Fullstack",
    summary:
      "Storefront with auth, cart, and checkout. React + Redux on the client, Firebase for auth/data, and Stripe for payments with real-time cart updates.",
    stack: ["React", "Redux", "Firebase", "Stripe"],
  },
  {
    src: Viberr,
    link: "https://github.com/LokmanKhodziri/Fullstack_Blog",
    title: "Fullstack Blog",
    role: "Fullstack",
    summary:
      "Blog platform with JWT auth and full CRUD for posts. Node.js + Express REST API, MongoDB storage, and a responsive React-ready architecture.",
    stack: ["Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    src: FreshBurger,
    link: "https://bebilisyard-demo.vercel.app/",
    title: "Bebilis Yard Demo",
    role: "Frontend · Demo",
    summary:
      "Marketing demo for Bebilis Yard — responsive layout, reusable UI pieces, and product-focused presentation built to ship cleanly across devices.",
    stack: ["React", "Responsive UI"],
  },
  {
    src: FreshBurger,
    link: "https://github.com/LokmanKhodziri/anime-webs",
    title: "Anime Discovery",
    role: "Frontend · API integration",
    summary:
      "Anime search and browse app consuming RapidAPI — filtering, detail views, and a responsive interface wired to external data.",
    stack: ["React", "RapidAPI"],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className={styles.container}>
      <Reveal>
        <div className="sectionHeader">
          <p className="sectionEyebrow">Selected work</p>
          <h2 className="sectionTitle">Projects that ship end to end</h2>
          <p className="sectionSubtitle">
            APIs, data models, auth, and interfaces — built as real products,
            not isolated UI pages.
          </p>
        </div>
      </Reveal>

      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <Reveal
            key={project.title}
            delayMs={index * 60}
            className={project.featured ? styles.featuredSlot : undefined}
          >
            <ProjectsCard {...project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
