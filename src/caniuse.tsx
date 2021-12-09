import React from 'react';

export default ({ name }: { name: string }) => (
  <iframe
    src={
      'https://caniuse.bitsofco.de/embed/index.html?feat=' +
      name +
      '&periods=future_1,current,past_1,past_2,past_3&accessible-colours=false'
    }
  ></iframe>
);
