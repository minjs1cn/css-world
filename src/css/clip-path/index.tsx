import React from 'react';
import './index.css';

export default () => (
  <div className="flex column">
    {[...Array(8)].map((_, i) => (
      <div className={'clip-path clip-path-' + i + ' mb-20'} key={i}></div>
    ))}
    <svg key="clip-path-7">
      <clipPath id="clip-path-7" clipPathUnits="objectBoundingBox">
        <path
          d="M0.5,1
      C 0.5,1,0,0.7,0,0.3
      A 0.25,0.25,1,1,1,0.5,0.3
      A 0.25,0.25,1,1,1,1,0.3
      C 1,0.7,0.5,1,0.5,1 Z"
        />
      </clipPath>
    </svg>
  </div>
);
