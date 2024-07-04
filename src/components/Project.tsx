interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  image: string;
  link: string;
}

const ProjectComponent: React.FC<ProjectProps> = ({ title, description, technologies, features, image, link }) => {
  return (
    <article className="project" id={title}>
      <h3>{title}</h3>
      <div className="description">
        <p>{description}</p>
        <ul className="list-tech-stack">
        {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <h4>Fonctionnalités principales :</h4>
        <ul className="features">
        {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <a className="button" href={link} target="_blank">
          <span>Voir le code</span>
        </a>
      </div>
      <div className="image-layout">
        <img className="image" src={image}/>
      </div>
    </article>
  )
}
export default ProjectComponent;
