import React, { useRef, useState } from 'react';
import './FileUpload.css';

const FileUpload = ({ onFileChange, file }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const inputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (selectedFile) => {
    onFileChange(selectedFile);
  };

  const clearFile = (e) => {
    e.stopPropagation();
    onFileChange(null);
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <div 
      className={`file-upload glass ${isDragOver ? 'drag-over' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => inputRef.current && inputRef.current.click()}
    >
      <input 
        type="file" 
        accept=".pdf,.docx,.txt" 
        hidden 
        ref={inputRef} 
        onChange={handleChange}
      />
      
      {file ? (
        <div className="file-chip">
          <span className="file-name">{file.name}</span>
          <button className="remove-file" onClick={clearFile}>✕</button>
        </div>
      ) : (
        <div className="upload-placeholder">
          <svg className="upload-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="17 8 12 3 7 8"></polyline>
            <line x1="12" y1="3" x2="12" y2="15"></line>
          </svg>
          <p className="upload-text">Drop your contract here</p>
          <p className="upload-subtext">PDF, DOCX, TXT supported</p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
