// import { useTranslation } from "react-i18next";
// import { Event } from "../types";
// import { Chrono } from "react-chrono";

// export default function Experience() {
//   const { t } = useTranslation("");
//   const events = Object.values(t("experience.experiences", { returnObjects: true }) as Record<string, Event>);

//   // Préparez les données pour react-chrono
//   const timelineItems = events.map((event) => ({
//     title: event["start-time"],
//     cardTitle: event.company,
//     cardSubtitle: event.description,
//     cardDetailedText: event.features || "",
//     url: event.site || ""
//   }));

//   console.log("timelinesItems -->", timelineItems)

//   return (
//     <section id="experience">
//       <h3>{t("experience.title")}</h3>
//       <Chrono
//         items={timelineItems}
//         mode="VERTICAL_ALTERNATING" // Utilisez le mode vertical alternatif
//         disableToolbar={true}
//         theme={{
//           primary: 'grey', // ligne
//           secondary: 'black',
//           cardBgColor: 'transparent',
//           titleColor: 'white',
//           titleColorActive: 'white',
//         }}
//         borderLessCards={false}
//         cardHeight={120} // Hauteur des cartes
//         scrollable={{ scrollbar: false }} // Désactiver la barre de défilement
//       />
//     </section>
//   );
// }



const Timeline = () => {
  const timelineData = [
    {
      id: 1,
      title: "INTÉGRATION",
      content: "La procédure d'intégration implique de définir les objectifs et les attentes en termes de performances, mais aussi d'établir les besoins en formation de la nouvelle recrue.",
      color: "rgb(172, 235, 190)" // Couleur verte
    },
    {
      id: 2,
      title: "ANALYSE DU POSTE",
      content: "Avant la publication de ces offres, vous devez finaliser une analyse détaillée et un bref descriptif du poste.",
      position: "left",
      color: "rgb(70, 205, 110)" // Couleur bleue
    },
    {
      id: 3,
      title: "FORMATION ET ORIENTATION",
      content: "L'équipe d'intégration peut désormais planifier efficacement et organiser des formations individuelles et en groupe.",
      color: "rgb(69, 187, 255)" // Couleur jaune
    },
    {
      id: 4,
      title: "PUBLIER LES OFFRES D'EMPLOI",
      content: "La diffusion des offres d'emploi nécessite d'utiliser les canaux adaptés pour toucher une population plus ciblée.",
      position: "left",
      color: "rgb(160, 220, 255)" // Couleur rouge
    }
  ];

  return (
    <div className="timeline-container">
      <div className="timeline">
        <div className="vertical-line" />

        {timelineData.map((item, index) => (
          <article className="timeline-item" key={item.id}>
            <div className="part1">
              <p>2017</p>
            </div>
            <div className={`part2 ${index % 2 === 0 ? 'row' : 'row-reverse'}`}>
              <aside className="circles">
                <div className="circle large" />
                <div className="circle medium" style={{ borderColor: item.color }} />
                <div className="circle small" style={{ borderColor: item.color }} />
                <div className="circle dot" style={{ backgroundColor: item.color, borderColor: item.color }} />
              </aside>

              <div className="horizontal-line" style={{ backgroundColor: item.color }} />
              <div className="content" style={{ borderColor: item.color }}>
                <h3 style={{ color: item.color, borderColor: item.color }}>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
