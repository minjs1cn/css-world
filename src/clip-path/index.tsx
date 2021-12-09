import React from 'react';
import './1.css';

export default () => (
  <div className="flex column">
    {[...Array(7)].map((_, i) => (
      <div className={'clip-path clip-path-' + i + ' mb-20'}></div>
    ))}
  </div>
);
