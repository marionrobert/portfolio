import Project from "./Project";
import { harmony, verdure, synopsix, waw, guitarpick } from "../assets/images/projects";
import { useTranslation } from "react-i18next";

const projects = [
  {
    id: "harmony",
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
    id: "verdure",
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
    id: "synopsix",
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
    id: "guitarpick",
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
    id: "waw",
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
  const {t} = useTranslation();
  return (
    <section className="projects-container">
      <h2>{t("projects.title")}</h2>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={t(`projects.${project.id}.title`)}
          description={t(`projects.${project.id}.description`)}
          technologies={project.technologies}
          features={t(`projects.${project.id}.features`)}
          image={project.image}
          link={project.link}
        />
      ))}
    </section>
  )
}
