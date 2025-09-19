"use client";

import React, { useRef, useEffect } from "react";

const FullScreenVideo = ({ mode = "cover" }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true; // autoplay allow hoga
      videoRef.current.play().catch((err) => {
        console.log("Autoplay blocked:", err);
      });
    }
  }, []);

  return (
    <div className="w-full h-[260px] md:h-screen xl:h-screen 2xl:h-screen lg:h-screen relative overflow-hidden bg-black">
      <video
        ref={videoRef}
        className={`absolute top-0 left-0 w-full h-full 
          ${mode === "cover" ? "object-cover" : "object-contain"} 
          md:object-cover`}
        src="/F.webm"
        autoPlay
        loop
        muted
        playsInline
        poster="/SL.webp"
      />
    </div>
  );
};

export default FullScreenVideo;
