import React from 'react';
import './ImportantPoints.css';

const ImportantPoints = ({ points }) => {
  if (!points || !Array.isArray(points)) return null;

  return (
    <div className="important-points-section">
      <h3 className="section-heading">💡 Important Points</h3>
      <div className="important-cards-container">
        {points.map((point, idx) => (
          <div key={idx} className="important-point-card glass" style={{ animationDelay: `${150 + idx * 100}ms` }}>
            <div className="point-text">{point?.text || 'No heading available'}</div>
            <div className="point-summary">{point?.summary || 'No summary available.'}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImportantPoints;
