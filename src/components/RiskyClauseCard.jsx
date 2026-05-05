import React from 'react';
import './RiskyClauseCard.css';

const getRiskColors = (level) => {
  switch (level?.toLowerCase()) {
    case 'high': return { color: '#ef4444', label: 'HIGH' };
    case 'medium': return { color: '#f59e0b', label: 'MEDIUM' };
    case 'low': return { color: '#22c55e', label: 'LOW' };
    default: return { color: 'var(--accent)', label: level?.toUpperCase() || 'UNKNOWN' };
  }
};

const RiskyClauseCard = ({ clause, index }) => {
  const { color, label } = getRiskColors(clause.risk_level);

  return (
    <div 
      className="risky-clause-card glass"
      style={{ 
        borderLeftColor: color, 
        animationDelay: `${300 + index * 100}ms`,
        boxShadow: `0 4px 15px ${color}15`
      }}
    >
      <div className="clause-header">
        <span className="risk-badge" style={{ backgroundColor: color }}>
          {label}
        </span>
      </div>
      <div className="clause-body">
        <div className="clause-text">"{clause.text}"</div>
        <div className="clause-explanation">{clause.explanation}</div>
      </div>
    </div>
  );
};

export default RiskyClauseCard;
