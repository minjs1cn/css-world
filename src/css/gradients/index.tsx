import React from 'react';
import './index.css';

export default () => (
  <div className="flex column">
    {[...Array(20)].map((_, i) => (
      <div className={'gradients gradients-' + i + ' mb-20'} key={i}></div>
    ))}
  </div>
);
