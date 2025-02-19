import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer.",
          "Initializing Portfolio.exe...",
          "42 School student.",
          "C/c++ grinder.",
          "Fullstack developer.",
          "root@portfolio:~$ ls -la",
          "Chess.com player.",
          "404: Boring Portfolio Not Found",
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