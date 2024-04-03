import React from "react";
import Myaudio from "../Audio"; // 假设 IconComponent 是您的自定义图标组件

const Example = ({ ja, en, src }) => {
  return (
    <div className="flex flex-col items-start ">
      <div className="font-bold brightness-125  text-lg flex items-bottom ">
        {ja}
        <div className="ml-3 mt-0.5">
          <Myaudio src={src} />
        </div>
      </div>
      <div className="text-lg">{en}</div>
    </div>
  );
};
/*    <div className="font-bold  text-xl"></div>; */
export default Example;
