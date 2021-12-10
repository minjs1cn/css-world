import React from 'react';
import './index.css';

const data = [...Array(9)];

export default () => {
  const [state, setState] = React.useState(data);

  const onClick = () => {
    setState(state.concat([state.length]));
  };

  return (
    <div className="scene">
      <div className="grid9">
        {state.map((_) => (
          <div className="grid9-item"></div>
        ))}
      </div>
      <button type="button" onClick={onClick}>
        add
      </button>
    </div>
  );
};
