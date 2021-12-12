import React from 'react';
import './index.css';

const data = [...Array(6)];

export default () => (
  <div className="scene flex-wrap">
    {data.map((_, i) => (
      <div className="loading" key={i}>
        <div className={'loading-' + i}></div>
      </div>
    ))}
  </div>
);
