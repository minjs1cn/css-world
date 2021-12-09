import React from 'react';
import './index.css';

export default () => (
  <div className="scene">
    <div className="transfer">
      {['top', 'bottom', 'left', 'right'].map((_) => (
        <div key={_} className="transfer-item"></div>
      ))}
    </div>
  </div>
);
