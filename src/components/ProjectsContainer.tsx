import { useState } from "react";
import Project from "./Project";
import { harmony, verdure, synopsix, waw, guitarpick } from "../assets/images/projects";
import { useTranslation } from "react-i18next";

const projects = [
  {
    id: 1,
    name: "harmony",
    image: harmony,
    link: "https://github.com/marionrobert/harmony-front-react",
    technologies: [
      'JavaScript',
      'NodeJS / Express.js',
      'React',
      'SQL / MySQL',
      'Redux',
      'Axios',
      'bcrypt',
      'GoogleAPI / nodemailer'
    ]
  },
  {
    id: 2,
    name: "verdure",
    image: verdure,
    link: "https://github.com/marionrobert/verdure-front-react",
    technologies: [
      'JavaScript',
      'NodeJS / Express.js',
      'React',
      'SQL / MySQL',
      'Redux',
      'Axios',
      'bcrypt',
      'Stripe'
    ]
  },
  {
    id: 3,
    name: "synopsix",
    image: synopsix,
    link: "https://github.com/marionrobert/synopsix-940",
    technologies: [
      'Ruby',
      'Rails',
      'PostgreSQL',
      'Devise',
      'Cloudinary',
      'Bootstrap'
    ]
  },
  {

    id: 4,
    name: "guitarpick",
    image: guitarpick,
    link: "https://github.com/marionrobert/GUITAR_PICK",
    technologies: [
      'Ruby',
      'Rails',
      'PostgreSQL',
      'Devise',
      'Cloudinary',
      'Bootstrap'
    ]
  },
  {
    id: 5,
    name: "waw",
    image: waw,
    link: "https://github.com/marionrobert/GUITAR_PICK",
    technologies: [
      'Ruby',
      'Rails',
      'PostgreSQL',
      'Devise',
      "Pagy",
      "Omniauth",
      "Pg_search",
      'Rails_admin',
      "Ransack"
    ]
  }
];

export default function ProjectsContainer() {
  const { t } = useTranslation();
  const [activeProject, setActiveProject] = useState(1); // État pour le projet actif

  return (
    <section className="projects-container">
      <h2>{t("projects.title")}</h2>
      {projects.map((project) => (
        <div
          key={project.id}
          className={`project ${project.id === activeProject ? 'active' : ''}`}
          style={{
            zIndex: projects.length - Math.abs(project.id - activeProject),
            left: `${(project.id - 1) * 25}px`, // Ajustez la position
          }}
          onClick={() => setActiveProject(project.id)}
        >
          <Project
             title={t(`projects.${project.name}.title`)}
             description={t(`projects.${project.name}.description`)}
             technologies={project.technologies}
             features={t(`projects.${project.name}.features`)}
             image={project.image}
             link={project.link}
          />
        </div>
      ))}
    </section>
  );
}
