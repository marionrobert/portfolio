import Project from "./Project";
import { harmony2, verdure2, synopsix1, waw, guitarpick1 } from "../assets/images/projects";


const projects = [
  {
    title: "Harmony",
    description: "Harmony vise à faciliter l'intégration des bénéficiaires d'une protection internationale en encourageant les interactions et la solidarité entre voisins. L'application web permet de proposer ou réserver des activités pour échanger des services. Chaque coup de main donné permet d'accumuler des points pour recevoir de l'aide à son tour.",
    technologies: [
      'JavaScript',
      'NodeJS / Express.js',
      'React',
      'SQL / MySQL',
      'Redux',
      'Axios',
      'bcrypt',
      'nodemailer'
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
    description: "Verdure est une application web de vente de plantes d'intérieur.",
    technologies: [
      'JavaScript',
      'NodeJS / Express.js',
      'React',
      'SQL / MySQL',
      'Redux',
      'Axios',
      'bcrypt',
      'Stripe'
    ],
    features: [
      'Gestion des sessions utilisateurs',
      'Gestion du panier',
      'Gestion du paiement avec stripe',
      'Dashboard administrateur et utilisateur',
      "Suivi et mise à jour de l'état des commandes"
    ],
    image: verdure2,
    link: "https://github.com/marionrobert/verdure-front-react"
  },
  {
    title: "Synopsix",
    description: "Synopsix est un jeu dont le but est de retrouver le titre d'un film à partir de son synopsis. Il existe deux modes: le mode classique où vous entrez des mots pour révéler le synopsis, et le mode contre la montre où vous disposez de deux minutes pour deviner le titre alors que les mots du synopsis apparaissent peu à peu.",
    technologies: [
      'Ruby',
      'Rails',
      'PostgreSQL',
      'Devise',
      'Cloudinary',
      'Bootstrap'
    ],
    features: [
      "Affichage des mots devinés en fonction de leur score de proximité avec ceux présents dans le synopsix",
      "Visualisaion d'indices",
      'Classement des meilleurs joueurs',
      "Choix du mode de jeu et de la catégorie de films"
    ],
    image: synopsix1,
    link: "https://github.com/marionrobert/synopsix-940"
  },
  {
    title: "GuitarPick",
    description: "Guitar Pick est un site de location de guitares, développé sur le modèle d'AirBnb.",
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
      "Recherche des produits par mots clés",
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
      'Rails_admin',
      "Ransack"
    ],
    features: [
      "Authentification via OmniAuth Google Facebook",
      "Recherche des produits par mots clés",
      "Tableau de bord administrateur",
      "Prévisualisation virtuelle d'environnement",
      "Gestion du panier, paiement via Stripe"
    ],
    image: waw,
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
