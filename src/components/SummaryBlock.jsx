import React from 'react';
import './SummaryBlock.css';

const SummaryBlock = ({ summary }) => {
  if (!summary) return null;

  return (
    <div className="summary-block glass">
      <div className="summary-content">
        <div className="summary-label">📋 Overall Summary</div>
        <p className="summary-text">{summary}</p>
      </div>
    </div>
  );
};

export default SummaryBlock;
