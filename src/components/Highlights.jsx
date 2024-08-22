import React, { useState } from "react";
import { highlightFirstVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Highlights = () => {
  const [isVideoFinished, setIsVideoFinished] = useState(false);

  useGSAP(() => {
    gsap.fromTo(
      ".highlightvideo",
      { opacity: 0 },
      { opacity: 1, stagger: 0.1 }
    );
  });

  const handleVideoEnd = () => {
    setIsVideoFinished(true);
  };

  return (
    <div className="relative">
      <video
        src={highlightFirstVideo}
        autoPlay
        muted
        playsInline
        className="highlightvideo"
        onEnded={handleVideoEnd}
      ></video>
    </div>
  );
};

export default Highlights;
