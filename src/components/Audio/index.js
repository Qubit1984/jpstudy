import { AudioIcon } from "../Icons";
import { useRef } from "react";
const Myaudio = ({ src }) => {
  const audioRef = useRef(null);
  const handlePlayPause = () => {
    /*     if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying); */
    audioRef.current.play();
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
