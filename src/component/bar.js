import React from 'react';
import './bar.css';


const ProgressBar = ({ percentage }) => {
    return (
      <div className="progress-bar">
        <div className="progress" style={{ width: `${percentage}%` }}></div>
        <p style={{ position:'absolute', top:'73px', left:'660px', fontSize:'1.2rem', color:'white'  }}>{percentage}%</p>
      </div>
    );
  };
  
  export default ProgressBar;