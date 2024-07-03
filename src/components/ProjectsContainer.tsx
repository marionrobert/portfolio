import Project from "./Project";
import { harmony2, verdure2, synopsix1, waw, guitarpick1 } from "../assets/images/projects";


const projects = [
  {
    title: "Harmony",
    description: "Harmony vise à faciliter l'intégration des bénéficiaires de protection internationale en France en encourageant les interactions et la solidarité entre voisins. Sur notre plateforme, vous pouvez proposer ou réserver des activités pour échanger des services. Chaque coup de main donné vous permet d'accumuler des points pour recevoir de l'aide à votre tour.",
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
    description: "Synopsix est une application web de jeu cinématographique inspirée de Pédantix. Le but est de retrouver le titre du film en découvrant son synopsis progressivement. Deux modes sont disponibles : le mode classique où vous entrez des mots pour révéler le synopsis, et le mode contre la montre où vous avez deux minutes pour deviner le titre alors que les mots du synopsis apparaissent peu à peu.",
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
      'Géolocalisation',
      'Gestion du paiement avec stripe',
      'Dashboard utilisateur',
      "Hébergement d'images dans le cloud"
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
      "Authentification (notamment via OmniAuth Google Facebook)",
      "Barre de recherche",
      "Tableau de bord administrateur",
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
