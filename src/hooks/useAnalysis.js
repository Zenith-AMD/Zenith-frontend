import { useState, useEffect } from 'react';
import { analyzeContract } from '../services/api';

export function useAnalysis() {
  const [inputText, setInputText] = useState('');
  const [file, setFile] = useState(null);
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!loading) return;
    if (currentStep >= 4) return;
    const timer = setTimeout(() => setCurrentStep(s => s + 1), 1200);
    return () => clearTimeout(timer);
  }, [loading, currentStep]);

  const analyze = async () => {
    setLoading(true);
    setResult(null);
    setError(null);
    setCurrentStep(1);
    try {
      const data = await analyzeContract({ text: inputText, file, country });
      setCurrentStep(5);
      await new Promise(r => setTimeout(r, 600));
      setResult(data);
    } catch (err) {
      setError(err.message || 'Analysis failed.');
    } finally {
      setLoading(false);
    }
  };

  return { 
    inputText, setInputText, 
    file, setFile, 
    country, setCountry,
    loading, currentStep, 
    result, error, 
    analyze 
  };
}
