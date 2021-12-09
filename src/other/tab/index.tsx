import React from 'react';
import './index.css';

export default () => {
  return (
    <div className="scene">
      <div className="tab">
        {['one', 'two', 'three'].map((item) => (
          <button key={item} className="tab-item"></button>
        ))}
      </div>
    </div>
  );
};
