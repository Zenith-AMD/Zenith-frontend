import React from 'react';
import './CountrySelector.css';

const CountrySelector = ({ value, onCountryChange }) => {
  return (
    <div className="country-selector-container">
      <label className="country-label">Jurisdiction / Country</label>
      <div className="select-wrapper glass">
        <select 
          className="country-select"
          value={value}
          onChange={(e) => onCountryChange(e.target.value)}
        >
          <option value="">Select Jurisdiction</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="EU">EU</option>
        </select>
        <div className="select-arrow"></div>
      </div>
    </div>
  );
};

export default CountrySelector;
