import React from 'react';
import { TimelineItemProps } from '../types';

const TimelineItem: React.FC<TimelineItemProps> = ({ startTime, company, description, features, color, site }) => {
  return (
    <article className="timeline-item">
      <div className="part1">
        <p>{startTime}</p>
      </div>
      <div className="part2">
        <aside className="circles">
          <div className="circle large" />
          <div className="circle medium" style={{ borderColor: color }} />
          <div className="circle small" style={{ borderColor: color }} />
          <div className="circle dot" style={{ backgroundColor: color, borderColor: color }} />
        </aside>

        <div className="horizontal-line" style={{ backgroundColor: color }} />
        <div className="content" style={{ borderColor: color }}>
          <h3 style={{ color: color }}>{company}</h3>
          <p>{description}</p>
          <p>{features}</p>
          { site && <a href={site}></a>}
        </div>
      </div>
    </article>
  );
};

export default TimelineItem;
