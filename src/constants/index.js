import {
  contact,
  css,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  nextjs,
  pricewise,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Front-end developer",
    company_name: "Charity Foundation “I Will Help You”",
    iconBg: "#accbe1",
    date: "August 2023 - Present",
    points: [
      "Developing from scratch and maintaining web applications using React(hooks, router), Redux-toolkit, TypeSctipt, SCSS, REST API.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Layouting the main page.",
      "Image optimization.",
      "Developing front-end part of admin panel: layouting, add/delete/edit functionality form.",
      "Accessibility.",
    ],
  },
  {
    title: "Course creator",
    company_name: " Philosophy Of Kidness",
    iconBg: "#fbc3bc",
    date: "October 2022 - November 2022",
    points: [
      "Developed a javascript course plan, and chapter topics.",
      "Add homework to the topics.",
      "Draw up a plan for completing the homework by points.",
    ],
  },
  {
    title: "Front-end developer",
    company_name: "Freelance",
    iconBg: "#b7e4c7",
    date: "August 2020 - Present",
    points: [
      "Developed websites in pure javascript, HTML, CSS (SCSS)using webpack, gulp assemblies, and work with the react library (react router v6, redux, react hooks).",
      "Communication with clients, assessment of deadlines, and their compliance.",
      "Layouting websites.",
      "E-mail newsletters.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/AlinaShtykhUA",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/alina-shtykh-2b6070188",
  },
];

export const projects = [
  {
    name: "Pokedex",
    description:
      "Pokedex itʼs a pc or tablet web application where you can find all pokemons and information about them from pokeAPI. I used react, typescrip, redux-toolkit, firebase for authorization, axios, SCSS",
    link: "https://pokedex-pet.netlify.app/pokemon/1",
  },
  {
    name: "Personal site",
    description:
      "Site-portfolio in React, make in single-page application style",
    link: "https://alina-shtykh-portfolio.netlify.app/",
  },
  {
    name: "Quizzical game",
    description:
      "Quizzical game in react. Solo project from Scrimba. I used trivia database API, nanoid, react create app, react hooks, SASS",
    link: "https://remarkable-sable-3880a9.netlify.app/",
  },
  {
    name: "Tenzies game",
    description: "Classic tenzi game in react. I added timer and best score.",
    link: "https://tubular-pithivier-27409e.netlify.app/",
  },
  {
    name: "Game store",
    description: "Game store, created in react, redux(toolkit), router",
    link: "https://6481133e05899f0085b99f42--tiny-snickerdoodle-03d324.netlify.app/",
  },
  {
    name: "Nike store",
    description:
      "Nike store, created in react, redux(toolkit). For design used Tailwind.",
    link: "https://648cacd83722940323c63781--subtle-tanuki-7aeff2.netlify.app/",
  },
];
