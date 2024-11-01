import { useTranslation } from "react-i18next";
import { Event } from "../types";

export default function Experience() {
  const { t } = useTranslation("");
  const events = Object.values(t("experience.experiences", { returnObjects: true }) as Record<string, Event>);

  return (
    <section id="experience">
      <h2>{t("experience.title")}</h2>
      <div className="timeline">
        {events.map((event, index) => (
          <div
            key={index}
            className={`timeline-event ${index % 2 === 0 ? "left" : "right"}`}
          >
            <h3>{event.company}</h3>
            <p>
              {event["start-time"]}
            </p>
            <p>{event.description}</p>
            {event.features && <p>{event.features}</p>}
            {event.site && (
              <a href={event.site} target="_blank" rel="noopener noreferrer">
                {event.site}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
