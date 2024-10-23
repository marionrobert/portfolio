import React, { useState, useEffect } from 'react';

interface Project {
  id: number;
  title: string;
}

const projects: Project[] = [
  { id: 1, title: "Harmony" },
  { id: 2, title: "Verdure" },
  { id: 3, title: "Synopsix" },
  { id: 4, title: "GuitarPick" },
  { id: 5, title: "Wall Art Works" },
];

const Exemple: React.FC = () => {
  const [activeProject, setActiveProject] = useState(1);

  // useEffect(() => {
  //   const hash = (window.location.hash).substring(1);
  //   console.log(" hash -->", hash)
  //   if (hash) {
  //     const project = projects.find(p => p.title === hash); // Trouve le projet correspondant au hash
  //     if (project) {
  //       setActiveProject(project.id); // Définit le projet comme actif
  //     }
  //   }
  //   console.log("activeProject -->", activeProject)
  // }, []);

  return (
    <div className="exemple-container">
      {projects.map((project) => (
        <div
          key={project.id}
          id={project.title}
          className={`exemple-project ${project.id === activeProject ? 'active' : ''}`}
          style={{
            zIndex: projects.length - Math.abs(project.id - activeProject),
            left: `${(project.id - 1) * 20}px`,
          }}
          onClick={() => setActiveProject(project.id)}
        >
          <div className="exemple-project-content">
            <h2 className="exemple-project-title">{project.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Exemple;
