import { useTranslation } from "react-i18next";
import { ProjectProps } from "../types";

const ProjectComponent: React.FC<ProjectProps> = ({ title, description, technologies, features, image, link }) => {
  const {t} = useTranslation();
  const featuresArray = features.split(';');

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
        <h4>{t("projects.features")}</h4>
        <ul className="features">
        {featuresArray.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <a className="button" href={link} target="_blank">
          <span>{t("projects.button")}</span>
        </a>
      </div>
      <div className="image-layout">
        <img className="image" src={image}/>
      </div>
    </article>
  )
}
export default ProjectComponent;
