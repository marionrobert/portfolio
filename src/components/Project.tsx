interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  images: string[];
  link: string;
}

const ProjectComponent: React.FC<ProjectProps> = ({ title, description, technologies, features, images, link }) => {
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
        <h3>Fonctionnalités principales :</h3>
        <ul className="features">
        {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <a className="btn btn-dark mt-4" href={link} target="_blank">Voir le code</a>
      </div>
      <div className="image-layout">
        {/* <div className="big-image">
          <img src={images[0]} alt="Harmony 1" />
        </div>
        <div className="small-images">
          <img src={images[1]} alt="Harmony 2" />
          <img src={images[2]} alt="Harmony 3" />
        </div> */}
        <img className="image" src={images[0]}/>
      </div>

    </article>
  )
}
export default ProjectComponent;
