import React from "react";
import { highlightFirstVideo } from "../utils";

const Highlights = () => {
  return (
    <div>
      <video src={highlightFirstVideo} autoPlay loop></video>
    </div>
  );
};

export default Highlights;
