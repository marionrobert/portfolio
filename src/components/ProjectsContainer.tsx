import Project from "./Project";
import { harmony2, verdure2, synopsix1, waw, guitarpick1 } from "../assets/images/projects";


const projects = [
  {
    title: "Harmony",
    description: "Harmony est né du constat que les personnes bénéficiant d'une protection internationale rencontrent des difficultés d'intégration en France. Notre projet vise à faciliter leur inclusion à l'échelle locale en encourageant les interactions et la solidarité entre voisins. Sur notre plateforme, vous pouvez proposer ou réserver des activités pour échanger des services. Chaque coup de main donné vous permet d'accumuler des points utilisables pour recevoir de l'aide à votre tour.",
    technologies: [
      'JavaScript',
      'NodeJS / Express.js',
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
      'Recherche des activités disponibles par filtres',
      'Vérification des points nécessaires à la réservation',
      'Modération des activités et commentaires par un administrateur',
      "Notification de l'utilisateur par emails"
    ],
    image: harmony2,
    link: "https://github.com/marionrobert/harmony-front-react"
  },
  {
    title: "Verdure",
    description: "Verdure est une application web de vente en ligne de plantes d'intérieur. L'application est disponible uniquement en français.",
    technologies: [
      'JavaScript',
      'NodeJS / Express.js',
      'React',
      'SQL / MySQL',
      'Redux',
      'Axios',
      'bcrypt',
      'Stripe',
      'CSS / SCSS'
    ],
    features: [
      'Gestion des sessions utilisateurs',
      'Gestion du panier',
      'Gestion du paiement avec stripe',
      'Dashboard administrateur',
      "Suivi de l'état commandes"
    ],
    image: verdure2,
    link: "https://github.com/marionrobert/verdure-front-react"
  },
  {
    title: "Synopsix",
    description: "Synopsix est une appplication web proposant un jeu autour de l'univers du cinéma, développé sur le modèle de Pédantix. Le but du jeu est de retrouver le titre du film en découvrant peu à peu le synopsix de ce dernier. Deux modes sont possible. Le mode classique (Play word search / input mode) : il s'agit d'entrer des mots pour découvrir progressivement le synopsix. Lle mode contre la montre (Play Against Time / timer mode) : vous avez deux minutes pour retrouver le titre du film dont les mots du synopsix apparaissent progressivement.",
    technologies: [
      'Ruby',
      'Rails',
      'PostgreSQL',
      'Devise',
      'Cloudinary',
      'Bootstrap'
    ],
    features: [
      'Gestion des sessions utilisateurs',
      'Gestion du panier',
      'Dashboard administrateur',
      'Modération des activités et commentaires par un administrateur',
      "Suivi de l'état commandes"
    ],
    image: synopsix1,
    link: "https://github.com/marionrobert/synopsix-940"
  },
  {
    title: "GuitarPick",
    description: "Guitar Pick est un site de location de guitares, développé sur le modèle d'AirBnb. L'application est disponible uniquement en anglais.",
    technologies: [
      'Ruby',
      'Rails',
      'PostgreSQL',
      'Devise',
      'Cloudinary',
      'Bootstrap'
    ],
    features: [
      'Gestion des sessions utilisateurs',
      'Gestion du panier',
      'Gestion du paiement avec stripe',
      'Dashboard administrateur',
      'Modération des activités et commentaires par un administrateur',
      "Suivi de l'état commandes"
    ],
    image: guitarpick1,
    link: "https://github.com/marionrobert/GUITAR_PICK"
  },
  {
    title: "Wall Art Works",
    description: "Commencé comme un projet visant à créer un modèle e-commerce personnalisable, ce projet a évolué pour devenir un site web marchand spécialisé dans la vente de tableaux générés par intelligence artificielle.",
    technologies: [
      'Ruby',
      'Rails',
      'PostgreSQL',
      'Devise',
      "Pagy",
      "Omniauth",
      "pP_search",
      'Cloudinary',
      'Rails_admin',
      "Ransack"
    ],
    features: [
      "Hébergement d'images dans le cloud",
      "Authentification (notamment via OmniAuth Google Facebook)",
      "Barre de recherche",
      "Tableau de bord administrateur",
      "Formulaire de contact",
      "Géolocalisation",
      "Previsualisation virtuelle d'environnement",
      "Gestion du panier",
      "Interface de paiement externalisé avec stripe"
    ],
    image: [waw],
    link: "https://github.com/marionrobert/GUITAR_PICK"
  }
]

export default function ProjectsContainer() {
  return (
    <section className="projects-container">
      <h2>Mes projets</h2>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          features={project.features}
          image={project.image}
          link={project.link}
        />
      ))}
    </section>
  )
}
