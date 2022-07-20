import React from "react";
import Typewriter from "typewriter-effect";

const Loading = () => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .changeDelay(10)
          .typeString("<p>Initalized loading...</p>")
          .pauseFor(10)
          .deleteAll();
      }}
    />
  );
};

export default Loading;
