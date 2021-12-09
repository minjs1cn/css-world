import React from 'react';
import './index.css';

export default () => (
  <div className="scene">
    <div className="box-3d">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="box-3d-item"></div>
      ))}
    </div>
  </div>
);
