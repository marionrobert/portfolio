import { useTranslation } from "react-i18next";
import { TimelineItemProps } from "../types";
import TimelineItem from "./TimelineItem";

const Timeline = () => {
  const { t } = useTranslation();
  const experiences = Object.values(t("experience.experiences", { returnObjects: true }) as TimelineItemProps[]);

  return (
    <div className="timeline-container" id="experience">
      <h2 data-aos="fade-up">{t("experience.title")}</h2>
      <div className="timeline">
        <div className="vertical-line" />
        {experiences.map((experience) => (
          <TimelineItem
            key={experience.company}
            startTime={experience.startTime}
            company={experience.company}
            description={experience.description}
            technologies={experience.technologies}
            color={experience.color}
            site={experience.site}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
