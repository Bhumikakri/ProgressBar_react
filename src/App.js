import './App.css';
import React, { useState, useEffect } from 'react';
import ProgressBar from './component/bar';

function App() {
  const [progress, setProgress] = useState(0);
  const[mesage,setmesage] =useState('Loading....🤔')


  useEffect(() => {
    // Simulating progress increment
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(prevProgress => prevProgress + 1);
      } else {
        clearInterval(interval);
        setmesage('Completed ! 🤩');
      }
    }, 300);

    return () => clearInterval(interval);
  }, [progress]);



  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <ProgressBar percentage={progress} />
      <p  className ={`${mesage ==='Completed ! 🤩' ? 'show' :'progress-text' }`}>{mesage}</p>
    </div>
  );
}

export default App;
