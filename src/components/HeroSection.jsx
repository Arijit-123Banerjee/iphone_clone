import React, { useState, useEffect } from "react";
import { heroVideo, smallHeroVideo } from "../utils";
import gsap from "gsap";

const HeroSection = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);

  useEffect(() => {
    // Function to handle screen resizing
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    // GSAP animation
    gsap.fromTo(
      ".video",
      { opacity: 0, y: 100 },
      { opacity: 1, duration: 4, y: 0 }
    );

    // Attach event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen flex justify-center items-center">
      {/* Conditional rendering based on screen size */}
      {isSmallScreen ? (
        <video src={smallHeroVideo} autoPlay muted playsInline></video>
      ) : (
        <video src={heroVideo} autoPlay muted playsInline></video>
      )}
    </div>
  );
};

export default HeroSection;
