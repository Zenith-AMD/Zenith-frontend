import React from 'react';
import './ImportantPoints.css';

const ImportantPoints = ({ points }) => {
  return (
    <div className="important-points-section">
      <h3 className="section-heading">💡 Important Points</h3>
      <ul className="points-list glass">
        {points.map((point, idx) => (
          <li key={idx} className="point-item">
            <span className="point-bullet">•</span>
            <span className="point-text">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImportantPoints;
