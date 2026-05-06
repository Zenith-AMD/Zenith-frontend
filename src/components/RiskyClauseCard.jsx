import React from 'react';
import './RiskyClauseCard.css';

const getRiskColors = (level) => {
  const normalizedLevel = level?.toLowerCase() || '';
  if (normalizedLevel.includes('fraud') || normalizedLevel.includes('critical')) {
    return { glow: '#ef4444', label: level, bgTint: 'rgba(239, 68, 68, 0.05)' }; // Red
  }
  if (normalizedLevel.includes('high')) {
    return { glow: '#f97316', label: level, bgTint: 'rgba(255, 255, 255, 0.05)' }; // Orange-red
  }
  if (normalizedLevel.includes('medium')) {
    return { glow: '#eab308', label: level, bgTint: 'rgba(255, 255, 255, 0.05)' }; // Yellow
  }
  if (normalizedLevel.includes('low')) {
    return { glow: '#22c55e', label: level, bgTint: 'rgba(255, 255, 255, 0.05)' }; // Green
  }
  return { glow: 'var(--accent)', label: level || 'UNKNOWN', bgTint: 'rgba(255, 255, 255, 0.05)' }; // Neutral
};

const RiskyClauseCard = ({ clause, index }) => {
  if (!clause) return null;
  const { glow, label, bgTint } = getRiskColors(clause.risk);
  const normalizedRisk = label?.toLowerCase().replace(/\s+/g, '-') || 'unknown';

  return (
    <div 
      className={`risky-clause-card glass risk-${normalizedRisk}`}
      style={{ 
        '--glow-color': glow,
        '--bg-tint': bgTint,
        animationDelay: `${300 + index * 100}ms`
      }}
    >
      <div className="clause-header">
        <span className={`risk-badge risk-${normalizedRisk}`} style={{ backgroundColor: `${glow}33`, color: glow, border: `1px solid ${glow}` }}>
          {label?.toUpperCase() || 'UNKNOWN'}
        </span>
      </div>
      <div className="clause-body">
        <div className="clause-text">"{clause.text || 'No text available'}"</div>
        <div className="clause-explanation">{clause.reason || 'No explanation provided.'}</div>
      </div>
    </div>
  );
};

export default RiskyClauseCard;
