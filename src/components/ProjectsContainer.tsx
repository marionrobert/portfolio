import Project from "./Project";
import { harmony1, harmony2, harmony3 } from "../assets/images/projects";

const projects = [
  {
    title: "Harmony",
    description: "Harmony est né du constat que les personnes bénéficiant d'une protection internationale rencontrent des difficultés d'intégration en France. Notre projet vise à faciliter leur inclusion à l'échelle locale en encourageant les interactions et la solidarité entre voisins. Sur notre plateforme, vous pouvez proposer ou réserver des activités pour échanger des services. Chaque coup de main donné vous permet d'accumuler des points utilisables pour recevoir de l'aide à votre tour.",
    technologies: [
      'JavaScript',
      'NodeJS',
      'Express',
      'React',
      'SQL / MySQL',
      'Redux',
      'Axios',
      'bcrypt',
      'nodemailer',
      'CSS / SCSS'
    ],
    features: [
      'Gestion des sessions utilisateurs',
      'Gestion du panier',
      'Filtrage des activités disponibles',
      'Réservation d\'une activité',
      'Vérification des points nécessaires à la réservation',
      'Modération des activités et commentaires par un administrateur',
      "Notification de l'utilisateur par emails"
    ],
    images: [harmony1, harmony2, harmony3]
  }
]

export default function ProjectsContainer() {
  return (
    <>
      <h2>Mes projets</h2>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          features={project.features}
          images={project.images}
        />
      ))}
    </>
  )
}
