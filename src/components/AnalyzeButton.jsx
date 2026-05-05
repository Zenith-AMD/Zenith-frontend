import React from 'react';
import './AnalyzeButton.css';

const AnalyzeButton = ({ onClick, disabled }) => {
  return (
    <button 
      className={`analyze-button ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="inner-bg"></div>
      <span className="button-content">
        <span className="button-icon">⚡</span>
        Analyze Contract
      </span>
    </button>
  );
};

export default AnalyzeButton;
