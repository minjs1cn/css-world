import React from 'react';
import './index.css';

export default () => {
  const ref = React.useRef<HTMLButtonElement>(null);

  const onClick = (e: React.MouseEvent) => {
    ref.current?.style.setProperty('--mouse-x', e.nativeEvent.offsetX + 'px');
    ref.current?.style.setProperty('--mouse-y', e.nativeEvent.offsetY + 'px');
  };

  return (
    <div className="scene">
      <button ref={ref} className="button-wave" onClick={onClick}>
        按钮
      </button>
    </div>
  );
};
