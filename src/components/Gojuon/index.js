import React from "react";
import Myaudio from "../Audio"; // 假设 IconComponent 是您的自定义图标组件

const Gojuon = ({ ja, en, src }) => {
  return (
    <div className="flex flex-col font-bold brightness-125 sm:text-2xl text-base items-center">
      <div>{ja}</div>
      <div className="my-1">{en}</div>
      <div className=" mt-1">
        <Myaudio src={src} />
      </div>
    </div>
  );
};
/*    <div className="font-bold  text-xl"></div>; */
export default Gojuon;
