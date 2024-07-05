import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRocket, faSeedling, faGraduationCap, faLaptop, faArrowUpRightDots } from "@fortawesome/free-solid-svg-icons"
import { faCircleCheck} from "@fortawesome/free-regular-svg-icons"


export default function Presentation(){
  return(
    <section className="presentation">
      <h1>Bienvenue sur mon portfolio</h1>
      <h2>Je m'appelle Marion Robert et je suis Développeuse Web Full-stack.</h2>
      <div>
        <p>
          <FontAwesomeIcon icon={faRocket} /><FontAwesomeIcon icon={faLaptop} /> Issue d’une formation en droit, j'ai passé trois années enrichissantes à accompagner les demandeurs d’asile au sein du secteur communautaire. Animée par le désir de nouveautés et de challenges quotidiens, je me suis reconvertie dans l'IT.
        </p>
        <p>
          <FontAwesomeIcon icon={faSeedling} /><FontAwesomeIcon icon={faGraduationCap} /> J'ai découvert la programmation à travers l'apprentissage du language python, puis j'ai suivi deux formations en développement web avec Le Wagon et la 3w Academy.
        </p>
        <p>
          <FontAwesomeIcon icon={faCircleCheck} /><FontAwesomeIcon icon={faArrowUpRightDots} /> Au cours des deux dernières années, mes divers apprentissages, projets et expériences m'ont permis de mettre en pratique mes connaissances et de renforcer mon intérêt pour l'IT.
        </p>
      </div>
    </section>
  )
}
