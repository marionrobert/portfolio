import { useState, useEffect } from "react";
import Project from "./Project";
import { useTranslation } from "react-i18next";
import { ProjectProps } from "../types";

export default function ProjectsContainer() {
  const { t } = useTranslation();
  const [activeProject, setActiveProject] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const projects = Object.values(t("projects.projects", { returnObjects: true }) as ProjectProps[]);

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
        key={project.name}
        className={`project ${isMobile ? '' : (project.id === activeProject ? 'active' : '')}`}
        onClick={() => !isMobile && setActiveProject(project.id)}
        style={isMobile ? undefined : {
          zIndex: project.id === activeProject ? 10 : projects.length - Math.abs(project.id - activeProject),
          left: `${(project.id - 1) * 25}px`, // Ajustez la position
          '--title-content': `"${project.name}"` } as React.CSSProperties
        }
      >
        <Project
          id={project.id}
          title={project.title}
          name={project.name}
          description={project.description}
          technologies={project.technologies}
          features={project.features}
          link={project.link}
          image={project.image}
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
