interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  images: string[];
}

const ProjectComponent: React.FC<ProjectProps> = ({ title, description, technologies, features, images }) => {
  return (
    <article className="project">
      <h2>{title}</h2>
      <div className="description">
        <p>{description}</p>
        <ul className="list-tech-stack">
        {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <p>Fonctionnalités principales :</p>
        <ul>
        {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="image-layout">
        <div className="big-image">
          <img src={images[0]} alt="Harmony 1" />
        </div>
        <div className="small-images">
          <img src={images[1]} alt="Harmony 2" />
          <img src={images[2]} alt="Harmony 3" />
        </div>
      </div>
    </article>
  )
}
export default ProjectComponent;
