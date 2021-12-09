import React from 'react';
import './index.css';

const data = [
  {
    title:
      '在宜州这像天涯一样偏远的地方，竟然也有像江南一样的报春使者——梅花，看到梅花开放，才知道春天临近了。',
    text: '夜阑风细得香迟，不道晓来开遍、向南枝：夜深人静时微风吹送来梅花的香气，才觉察到梅花的开放；竟然不知道早晨向阳的枝条上就已经开遍了梅花，我的感觉太迟钝了。',
  },
  {
    title:
      '“夜阑风细”之时才闻到梅香，也暗示白天俗务纷乱、人声嘈杂，所以对梅花视而不见。平生个里愿杯深，去国十年老尽、少年心：以前见到这种花开景象，便会在花下吟赏畅饮，希望一醉方休；自从被贬离开汴京，历经十年沧桑，现在那种青年人的情怀、兴致已经完全没有了。',
    text: '玩的是联机版，30个小时了还没过第一个冬天。',
  },
  {
    title: '你觉得国漫的巅峰之作是哪个？',
    text: '玉台弄粉花应妒，飘到眉心住：寿阳公主在镜台前化妆，似乎引起了梅花的羡妒，所以飘落在她的眉心上不再飞走。玉台：玉饰的镜台。弄粉：以脂粉饰容，指化妆。',
  },
];
export default () => {
  return (
    <div className="scene">
      <div className="clamp-container">
        {data.map((item, index) => (
          <div className="clamp" key={index}>
            <div className="title">{item.title}</div>
            <div className="excerpt">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
