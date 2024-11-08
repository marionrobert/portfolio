import React from 'react';
import { TimelineItemProps } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';


const TimelineItem: React.FC<TimelineItemProps> = ({ startTime, company, description, technologies, color, site }) => {
  const technologiesArray = technologies.split(';');

  return (
    <article className="timeline-item">
      <div className="part1">
        <p>{startTime}</p>
      </div>
      <span>{startTime}</span>
      <div className="part2">
        <aside className="circles">
          <div className="circle large" />
          <div className="circle medium" style={{ borderColor: color }} />
          <div className="circle small" style={{ borderColor: color }} />
          <div className="circle dot" style={{ backgroundColor: color, borderColor: color }} />
        </aside>

        <div className="horizontal-line" style={{ backgroundColor: color }} />
        <div className="content">
          <h3 style={{ color: color }}>{company}</h3>
          <p>{description}</p>
          <ul className="list-tech-stack">
          {technologiesArray.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        { site && <div className='link'>
            <a href={site} target="_blank">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          </div>
        }
        </div>
      </div>
    </article>
  );
};

export default TimelineItem;
