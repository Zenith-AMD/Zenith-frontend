import React from 'react';
import SummaryBlock from './SummaryBlock';
import ImportantPoints from './ImportantPoints';
import RiskyClauseCard from './RiskyClauseCard';
import './ResultsPanel.css';

const ResultsPanel = ({ result }) => {
  if (!result) return null;

  return (
    <div className="results-panel glass">
      <h2 className="results-title">Analysis Complete</h2>
      
      {(result.overall_summary || result.summary) && (
        <SummaryBlock summary={result.overall_summary || result.summary} />
      )}
      
      {result.important_points && Array.isArray(result.important_points) && result.important_points.length > 0 && (
        <ImportantPoints points={result.important_points} />
      )}
      
      {result.risky_clauses && Array.isArray(result.risky_clauses) && result.risky_clauses.length > 0 && (
        <div className="risky-section">
          <h3 className="section-heading">⚠️ Risky Clauses</h3>
          <div className="risky-cards-container">
            {result.risky_clauses.map((clause, idx) => (
              <RiskyClauseCard key={idx} clause={clause} index={idx} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultsPanel;
