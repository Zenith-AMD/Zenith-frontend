import React from 'react';
import { useAnalysis } from '../hooks/useAnalysis';
import FileUpload from '../components/FileUpload';
import TextInput from '../components/TextInput';
import CountrySelector from '../components/CountrySelector';
import AnalyzeButton from '../components/AnalyzeButton';
import ProcessingSteps from '../components/ProcessingSteps';
import ResultsPanel from '../components/ResultsPanel';
import Developers from '../components/Developers';
import './Home.css';

const Home = () => {
  const {
    inputText, setInputText,
    file, setFile,
    country, setCountry,
    loading, currentStep,
    result, error,
    analyze
  } = useAnalysis();

  const isAnalyzeDisabled = loading || (!inputText.trim() && !file) || !country;

  return (
    <main className="home-main">
      <div className="container home-container">
        
        <div className="hero-section">
          <h1 className="hero-title">AI Contract Analysis</h1>
          <p className="hero-subtitle">
            Detect risks, extract key clauses, and understand your contracts instantly.
          </p>
        </div>

        {error && (
          <div className="error-banner glass">
            <span className="error-icon">❌</span>
            <span className="error-text">{error}</span>
          </div>
        )}

        {!result && !loading && (
          <div className="input-section glass">
            <div className="inputs-grid">
              <FileUpload file={file} onFileChange={setFile} />
              <TextInput value={inputText} onTextChange={setInputText} />
            </div>
            
            <div className="controls-row">
              <CountrySelector value={country} onCountryChange={setCountry} />
            </div>
            
            <div className="action-row">
              <AnalyzeButton 
                onClick={analyze} 
                disabled={isAnalyzeDisabled} 
              />
            </div>
          </div>
        )}

        <ProcessingSteps visible={loading && !result} currentStep={currentStep} />
        
        {result && <ResultsPanel result={result} />}

        <div className="team-section">
          <h2 className="team-heading">👥 Meet the Team</h2>
          <Developers />
        </div>

      </div>
    </main>
  );
};

export default Home;
