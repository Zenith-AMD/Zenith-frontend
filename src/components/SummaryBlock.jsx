import React from 'react';
import './SummaryBlock.css';

const SummaryBlock = ({ summary }) => {
  return (
    <div className="summary-block glass">
      <div className="summary-accent-bar"></div>
      <div className="summary-content">
        <div className="summary-label">📋 Summary</div>
        <p className="summary-text">{summary}</p>
      </div>
    </div>
  );
};

export default SummaryBlock;
