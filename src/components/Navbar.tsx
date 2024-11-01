import CV from "../assets/CV-Marion-Robert_Dev-Fullstack(FR).pdf";
import { useTranslation } from "react-i18next";
import Lang from "./Lang";

export default function Navbar() {
  const { t } = useTranslation();
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand mb-0 h1" href="#">MR</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href={CV} download="CV_MarionRobert.pdf">{t("navbar.curriculum")}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">{t("navbar.projects")}</a>
            </li>
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {t("navbar.projects")}
              </a>

              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                <li><a className="dropdown-item" href="#harmony">Harmony</a></li>
                <li><a className="dropdown-item" href="#verdure">Verdure</a></li>
                <li><a className="dropdown-item" href="#synopsix">Synopsix</a></li>
                <li><a className="dropdown-item" href="#guitarpick">GuitarPick</a></li>
                <li><a className="dropdown-item" href="#waw">Wall Art Works</a></li>
              </ul>
            </li> */}
             <li className="nav-item">
              <a className="nav-link" href="#experience">{t("navbar.experience")}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">{t("navbar.contact")}</a>
            </li>
          </ul>
          <Lang />
        </div>
      </div>
    </nav>
    )
}
