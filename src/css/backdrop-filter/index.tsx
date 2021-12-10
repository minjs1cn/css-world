import React from 'react';
import './index.css';

const data = [
  {
    filter: 'blur',
    txt: '模糊',
  },
  {
    filter: 'brightness',
    txt: '亮度',
  },
  {
    filter: 'contrast',
    txt: '对比度',
  },
  {
    filter: 'grayscale',
    txt: '灰度',
  },
  {
    filter: 'drop-shadow',
    txt: '阴影',
  },
  {
    filter: 'hue-rotate',
    txt: '色相',
  },
  {
    filter: 'opacity',
    txt: '透明度',
  },
];
export default () => {
  return (
    <div className="scene column">
      {data.map(({ filter, txt }, i) => (
        <div className="backdrop-bg" key={i}>
          <div className={'backdrop backdrop-' + filter}>{txt}</div>
        </div>
      ))}
    </div>
  );
};
