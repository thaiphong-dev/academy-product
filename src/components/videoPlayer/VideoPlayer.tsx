// components/VideoPlayer.js
import { useRef } from "react";

export default function VideoPlayer({
  src,
  autoPlay,
}: {
  src: string;
  autoPlay?: boolean;
}) {
  const videoRef = useRef(null);

  return (
    <div className="max-w-lg mx-auto shadow-lg ">
      <video
        ref={videoRef}
        src={src}
        className="w-full rounded-lg"
        controls
        autoPlay={autoPlay}
      />
    </div>
  );
}
