import React from 'react';
import './index.css';
import { useSwiper } from './useSwiper';

const data = [1, 2, 3];
export default () => {
  const { style } = useSwiper(data.length);

  return (
    <div className="scene">
      <div className="swiper">
        <div className="swiper-container" style={style}>
          {/* 无缝连接，复制第一个元素 */}
          {[...data, data[0]].map((_, i) => (
            <div className="swiper-slide" key={i}>
              {_}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
