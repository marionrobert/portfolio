import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
  return (
    <footer>
      <div>
        <ul>
          <li>
            <a aria-label="Icône de LinkedIn contenant un lien vers la page LinkedIn du créateur du site" href="https://www.linkedin.com/in/marion-robert-" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} className="icon"/></a>
          </li>
          <li>
            <a aria-label="Icône de Github contenant un lien vers la page Github du créateur du site" href="https://github.com/marionrobert" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faGithub} className="icon" /></a>
          </li>
        </ul>
        <p className="brand">MR</p>
        <p>© 2024, Portfolio Marion Robert</p>
      </div>
    </footer>
  )
}
