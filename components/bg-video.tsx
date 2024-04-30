"use client";

import { useEffect, useRef } from "react";

interface BgVideoProps {
    playbackRate: number;
    src: string;
    posterSrc: string;
}

const BgVideo = ({playbackRate, src, posterSrc}: BgVideoProps) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.playbackRate = playbackRate;
  });

  return (
    <div className="reduced-motion-hidden fixed top-0 left-0 w-screen h-screen pointer-events-none">
      <video
        ref={ref}
        poster={posterSrc}
        preload="none"
        src={src}
        className="w-full blur-md opacity-20 h-full top-0 left-0 object-cover"
        autoPlay
        loop
        playsInline
        muted
      ></video>
    </div>
  );
};

export default BgVideo;
