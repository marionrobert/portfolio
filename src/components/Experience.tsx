import { useTranslation } from "react-i18next";
import { Experience } from "../types";

const Timeline = () => {
  const { t } = useTranslation();
  const experiences = Object.values(t("experience.experiences", { returnObjects: true }) as Record<string, Experience>);

  return (
    <div className="timeline-container">
      <div className="timeline">
        <div className="vertical-line" />

        {experiences.map((experience) => (
          <article className="timeline-item" key={experience.company}>
            <div className="part1">
              <p>{experience.startTime}</p>
            </div>
            <div className="part2">
              <aside className="circles">
                <div className="circle large" />
                <div className="circle medium" style={{ borderColor: experience.color }} />
                <div className="circle small" style={{ borderColor: experience.color }} />
                <div className="circle dot" style={{ backgroundColor: experience.color, borderColor: experience.color }} />
              </aside>

              <div className="horizontal-line" style={{ backgroundColor: experience.color }} />
              <div className="content" style={{ borderColor: experience.color }}>
                <h3 style={{ color: experience.color }}>{experience.company}</h3>
                <p>{experience.description}</p>
                <p>{experience.features || ""}</p> {/* Vous pouvez afficher d'autres propriétés comme description si nécessaire */}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
