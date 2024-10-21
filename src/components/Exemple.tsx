import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
}

const projects: Project[] = [
  { id: 1, title: "Projet 1" },
  { id: 2, title: "Projet 2" },
  { id: 3, title: "Projet 3" },
  { id: 4, title: "Projet 4" },
  { id: 5, title: "Projet 5" },
];

const Exemple: React.FC = () => {
  const [activeProject, setActiveProject] = useState(1);

  return (
    <div className="exemple-container">
      {projects.map((project) => (
        <div
          key={project.id}
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
