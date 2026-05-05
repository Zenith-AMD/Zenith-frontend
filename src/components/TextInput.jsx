import React from 'react';
import './TextInput.css';

const TextInput = ({ value, onTextChange }) => {
  return (
    <textarea
      className="text-input glass"
      placeholder="Or paste your contract text here..."
      value={value}
      onChange={(e) => onTextChange(e.target.value)}
    ></textarea>
  );
};

export default TextInput;
