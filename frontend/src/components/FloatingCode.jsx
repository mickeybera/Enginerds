import React from "react";

const codes = [
  "const hack = () => {}",
  "npm install future",
  "if(ai > human) evolve();",
  "010101 110011",
  "while(true) innovate();",
  "<AI /> <ML />",
  "sudo hack_the_world",
];

const FloatingCode = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {codes.map((code, i) => (
        <span
          key={i}
          className="absolute text-cyan-400/20 font-mono text-sm animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 2}s`,
          }}
        >
          {code}
        </span>
      ))}
    </div>
  );
};

export default FloatingCode;
