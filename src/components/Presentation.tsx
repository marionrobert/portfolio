import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling, faGraduationCap, faLaptop, faArrowUpRightDots } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck} from "@fortawesome/free-regular-svg-icons";
import { faSpaceAwesome } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";


export default function Presentation(){
  const { t } = useTranslation();

  return(
    <section className="presentation">
      <h1>Bienvenue sur mon portfolio</h1>
      <h2>Je m'appelle Marion Robert et je suis Développeuse Web Full-stack.</h2>
      <div>
        <p>
          <FontAwesomeIcon icon={faSpaceAwesome} className="fa-fade"/><FontAwesomeIcon icon={faLaptop} />
          {t("presentation.paragraphs.1")}
        </p>
        <p>
          <FontAwesomeIcon icon={faSeedling} className="fa-bounce"/><FontAwesomeIcon icon={faGraduationCap} />
          {t("presentation.paragraphs.2")}
        </p>
        <p>
          <FontAwesomeIcon icon={faCircleCheck} className="fa-spin"/><FontAwesomeIcon icon={faArrowUpRightDots} />
          {t("presentation.paragraphs.3")}
        </p>
      </div>
    </section>
  )
}
