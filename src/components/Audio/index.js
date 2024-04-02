import React, { useRef, useState } from "react";
import { AudioIcon } from "../Icons";
const Myaudio = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} src={src} preload="auto" />
      <button onClick={handlePlayPause}>
        <AudioIcon className="h-6 w-6 fill-accent dark:fill-accentDark   hover:scale-125 transition-all ease duration-200" />
      </button>
    </div>
  );
};

export default Myaudio;
