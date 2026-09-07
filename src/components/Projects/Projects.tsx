import React from "react";
import styles from "./ProjectsStyles.module.css";
import ProjectsCard from "../common/ProjectsCard";
import Reveal from "../common/Reveal";

const projects = [
  {
    src: "/projects/musafirgo.webp",
    link: "https://musafirgo.vercel.app/",
    title: "Musafir-Go",
    role: "Fullstack · Live product",
    summary:
      "Muslim-friendly travel planner with day-by-day itineraries, maps, prayer times, and nearby halal spots. Next.js frontend backed by an Express + Prisma API with Google/GitHub OAuth.",
    stack: ["Next.js", "Express.js", "Prisma", "OAuth"],
    featured: true,
  },
  {
    src: "/projects/service-flow.webp",
    link: "https://github.com/LokmanKhodziri/service-flow",
    title: "ServiceFlow",
    role: "Fullstack · SaaS",
    summary:
      "Operations platform for field-service businesses — customers, scheduled jobs, invoice PDFs, Stripe Checkout, and multi-tenant RBAC. NestJS API with a Next.js shell, PostgreSQL via Prisma, and unit + e2e tests.",
    stack: ["NestJS", "Next.js", "Prisma", "Stripe"],
  },
  {
    src: "/projects/bebilis.webp",
    link: "https://demo-bebilis-yard.vercel.app/",
    title: "Bebilis Yard Demo",
    role: "Frontend · Demo",
    summary:
      "Marketing demo for Bebilis Yard — responsive layout, reusable UI pieces, and product-focused presentation built to ship cleanly across devices.",
    stack: ["React", "Responsive UI"],
  },
  {
    src: "/projects/caripart.webp",
    link: "https://caripart.vercel.app/",
    title: "CariPart",
    role: "Fullstack · Ongoing",
    summary:
      "PC parts price comparison for Malaysian marketplaces. Import Shopee and Lazada exports, normalize messy product titles into canonical parts, and track MYR price trends for GPUs, CPUs, and RAM.",
    stack: ["React", "Node.js", "Data pipeline"],
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
