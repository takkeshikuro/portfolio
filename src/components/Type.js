import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer.",
          "42 School student.",
          "C/c++ grinder.",
          "Fullstack developer.",
          "Chess.com player.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 35,
        cursor: "_",
      }}
    />
  );
}

export default Type;