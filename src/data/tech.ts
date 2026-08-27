export type Tech = {
  name: string;
  slug: string;
  color: string;
  invertInDark?: boolean;
};

export const techCatalog: Record<string, Tech> = {
  React: { name: "React", slug: "react", color: "#61DAFB" },
  "Next.js": {
    name: "Next.js",
    slug: "nextdotjs",
    color: "#000000",
    invertInDark: true,
  },
  TypeScript: { name: "TypeScript", slug: "typescript", color: "#3178C6" },
  "Tailwind CSS": { name: "Tailwind CSS", slug: "tailwindcss", color: "#06B6D4" },
  Redux: { name: "Redux", slug: "redux", color: "#764ABC" },
  "Chakra UI": { name: "Chakra UI", slug: "chakraui", color: "#319795" },
  "Node.js": { name: "Node.js", slug: "nodedotjs", color: "#5FA04E" },
  "Express.js": {
    name: "Express.js",
    slug: "express",
    color: "#000000",
    invertInDark: true,
  },
  "Spring Boot": { name: "Spring Boot", slug: "springboot", color: "#6DB33F" },
  "REST APIs": { name: "REST APIs", slug: "swagger", color: "#85EA2D" },
  "JWT Auth": {
    name: "JWT Auth",
    slug: "jsonwebtokens",
    color: "#000000",
    invertInDark: true,
  },
  MongoDB: { name: "MongoDB", slug: "mongodb", color: "#47A248" },
  PostgreSQL: { name: "PostgreSQL", slug: "postgresql", color: "#4169E1" },
  MySQL: { name: "MySQL", slug: "mysql", color: "#4479A1" },
  Prisma: {
    name: "Prisma",
    slug: "prisma",
    color: "#2D3748",
    invertInDark: true,
  },
  Firebase: { name: "Firebase", slug: "firebase", color: "#DD2C00" },
  Neon: { name: "Neon", slug: "neon", color: "#00E599" },
  Git: { name: "Git", slug: "git", color: "#F05032" },
  Docker: { name: "Docker", slug: "docker", color: "#2496ED" },
  "Docker Compose": { name: "Docker Compose", slug: "docker", color: "#2496ED" },
  "GitHub Actions": {
    name: "GitHub Actions",
    slug: "githubactions",
    color: "#2088FF",
  },
  "CI/CD": { name: "CI/CD", slug: "githubactions", color: "#2088FF" },
  Jenkins: { name: "Jenkins", slug: "jenkins", color: "#D24939" },
  NestJS: { name: "NestJS", slug: "nestjs", color: "#E0234E" },
  Vite: { name: "Vite", slug: "vite", color: "#646CFF" },
  Stripe: { name: "Stripe", slug: "stripe", color: "#635BFF" },
  Vercel: {
    name: "Vercel",
    slug: "vercel",
    color: "#000000",
    invertInDark: true,
  },
  OAuth: { name: "OAuth", slug: "auth0", color: "#EB5424" },
  GitHub: {
    name: "GitHub",
    slug: "github",
    color: "#181717",
    invertInDark: true,
  },
};

export const skillGroups: { title: string; items: Tech[] }[] = [
  {
    title: "Frontend",
    items: [
      techCatalog["Next.js"],
      techCatalog.React,
      techCatalog.TypeScript,
      techCatalog["Tailwind CSS"],
      techCatalog.Vite,
      techCatalog["Chakra UI"],
    ],
  },
  {
    title: "Backend",
    items: [
      techCatalog.NestJS,
      techCatalog["Node.js"],
      techCatalog["Express.js"],
      techCatalog["Spring Boot"],
      techCatalog["REST APIs"],
      techCatalog["JWT Auth"],
    ],
  },
  {
    title: "Data",
    items: [
      techCatalog.MongoDB,
      techCatalog.PostgreSQL,
      techCatalog.MySQL,
      techCatalog.Prisma,
      techCatalog.Firebase,
      techCatalog.Neon,
    ],
  },
  {
    title: "Tools & delivery",
    items: [
      techCatalog.Git,
      techCatalog.Docker,
      techCatalog["GitHub Actions"],
      techCatalog.Vercel,
      techCatalog.Stripe,
      techCatalog.Jenkins,
    ],
  },
];

export const marqueeRows: Tech[][] = [
  skillGroups[0].items,
  skillGroups[1].items,
  [
    ...skillGroups[2].items,
    techCatalog.Git,
    techCatalog.Docker,
    techCatalog.Vercel,
    techCatalog.Stripe,
  ],
];

const aliases: Record<string, string> = {
  Express: "Express.js",
  NextJS: "Next.js",
  Nextjs: "Next.js",
  Nestjs: "NestJS",
  NestJS: "NestJS",
};

export function resolveTech(name: string): Tech {
  const canonical = aliases[name] ?? name;
  return techCatalog[canonical] ?? { name, slug: "", color: "#6b7280" };
}
