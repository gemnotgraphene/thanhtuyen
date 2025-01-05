import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Master of IT Graduate",
          "Front-End Developer | Application Developer",
          "The top 3 students achieved Distinction",
          "First Prize in the myUni Hackathon",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
