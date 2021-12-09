import React from 'react';
import './index.css';

export default () => (
  <div className="scene">
    <div className="turn-card">
      {['back', 'front'].map((_) => (
        <div key={_} className={_}></div>
      ))}
    </div>
  </div>
);
