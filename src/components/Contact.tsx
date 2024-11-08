import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faSquarePhone, faAt, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const {t} = useTranslation();

  return (
    <section id="contact" data-aos="fade-up">
      <h2 >{t("contact.title")}</h2>
      <ul>
        <li><FontAwesomeIcon icon={faAt} /> mrobert148@gmail.com</li>
        <li><FontAwesomeIcon icon={faSquarePhone} /> (+1)438-812-7844</li>
        <li><FontAwesomeIcon icon={faLocationDot} />{t("contact.city")}</li>
      </ul>
      <a className="cta" target="_blank" href="mailto:mrobert148@gmail.com?subject=Prise de contact">
        {t("contact.button")}
        <FontAwesomeIcon icon={faArrowRight} />
      </a>
    </section>
  )
}
