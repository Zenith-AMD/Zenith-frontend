import React from 'react';
import ThemeToggle from './ThemeToggle';
import './Header.css';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="header glass">
      <div className="header-content">
        <div className="logo-container">
          <img src="/logo.png" alt="Zerith" height="36" className="logo" />
          <span className="brand-name">Zerith</span>
        </div>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </header>
  );
};

export default Header;
