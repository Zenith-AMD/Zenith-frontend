import React from 'react';
import './ProcessingSteps.css';

const STEPS = [
  { id: 1, label: "Analyzing Document",  icon: "📄" },
  { id: 2, label: "Extracting Clauses",  icon: "🔍" },
  { id: 3, label: "Detecting Risks",     icon: "⚠️" },
  { id: 4, label: "Generating Insights", icon: "💡" },
  { id: 5, label: "Final Output",        icon: "✅" },
];

const ProcessingSteps = ({ currentStep, visible }) => {
  if (!visible) return null;

  return (
    <div className="processing-overlay">
      <div className="processing-container">
        {STEPS.map((step) => {
          const isCompleted = step.id < currentStep;
          const isActive = step.id === currentStep;
          const isPending = step.id > currentStep;

          let statusClass = 'pending';
          if (isCompleted) statusClass = 'completed';
          if (isActive) statusClass = 'active';

          return (
            <div 
              key={step.id} 
              className={`step-card glass ${statusClass}`}
              style={{ animationDelay: `${step.id * 80}ms` }}
            >
              <div className="step-icon-circle">
                <span className="step-icon">{step.icon}</span>
              </div>
              <div className="step-content">
                <span className="step-label">{step.label}</span>
                <div className="step-status">
                  {isCompleted && <span className="status-text success">✓ Done</span>}
                  {isActive && (
                    <>
                      <div className="spinner"></div>
                      <span className="status-text processing">Processing...</span>
                    </>
                  )}
                  {isPending && <span className="status-text pending-text">Pending</span>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProcessingSteps;
