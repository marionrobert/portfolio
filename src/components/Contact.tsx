import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot, faSquarePhone, faAt, faArrowRight } from "@fortawesome/free-solid-svg-icons"

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contactez-moi</h2>
      <ul>
        <li><FontAwesomeIcon icon={faAt} /> mrobert148@gmail.com</li>
        <li><FontAwesomeIcon icon={faSquarePhone} /> (+1)438-812-7844</li>
        <li><FontAwesomeIcon icon={faLocationDot} /> Montréal, Québec, Canada</li>
      </ul>
      <a className="cta" target="_blank" href="mailto:mrobert148@gmail.com?subject=Prise de contact">
          Envoyer un email <FontAwesomeIcon icon={faArrowRight} />
      </a>

    </section>
  )
}
