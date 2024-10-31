import { useState, useEffect } from "react";
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
      'JS / NodeJS / Express.js',
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
  const [activeProject, setActiveProject] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderProjects = () => {
    return projects.map((project) => (
      <div
        key={project.id}
        className={`project ${isMobile ? '' : (project.id === activeProject ? 'active' : '')}`}
        onClick={() => !isMobile && setActiveProject(project.id)}
        style={isMobile ? undefined : {
          zIndex: project.id === activeProject ? 10 : projects.length - Math.abs(project.id - activeProject),
          left: `${(project.id - 1) * 25}px`, // Ajustez la position
          '--title-content': `"${project.name}"` } as React.CSSProperties
        }
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
    ));
  };

  return (
    <section className={`projects-container ${!isMobile ? 'not-mobile' : ''}`} id="projects">
      <h2>{t("projects.title")}</h2>
      {isMobile ? (
        <div className="carousel-container">
          {renderProjects()}
        </div>
      ) : (
        <div className="all-projects">
          {renderProjects()}
        </div>
      )}
    </section>
  );
}
