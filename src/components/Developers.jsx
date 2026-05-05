import React from 'react';
import './Developers.css';

const Developers = () => {
  return (
    <div className="developers-container">
      <div className="developer-card glass">
        <img src="/abeer.png" alt="Abeer" className="developer-avatar" />
        <div className="developer-name">Abeer</div>
        <div className="developer-role">Developer</div>
      </div>
      <div className="developer-card glass">
        <img src="/harshil.png" alt="Harshil" className="developer-avatar" />
        <div className="developer-name">Harshil</div>
        <div className="developer-role">Developer</div>
      </div>
    </div>
  );
};

export default Developers;
