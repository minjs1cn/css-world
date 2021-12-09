import React from 'react';

export function useSwiper(count: number, timeout: number = 1500) {
  const [index, setIndex] = React.useState(0);
  const [style, setStyle] = React.useState({});
  const timer = React.useRef<number>();

  React.useEffect(() => {
    timer.current = window.setInterval(() => {
      setIndex((index + 1) % (count + 1));
      if (index === count) {
        setTimeout(() => {
          setIndex(1);
        }, timeout - 1000);
      }
    }, timeout);

    return () => {
      clearInterval(timer.current);
    };
  });

  React.useEffect(() => {
    if (index === 0) {
      setStyle({
        transform: `translate3d(0, 0, 0)`,
      });
    } else {
      setStyle({
        transition: 'transform 1s ease-out',
        transform: `translate3d(-${index * 100}%, 0, 0)`,
      });
    }
  }, [index]);

  return {
    style,
  };
}
