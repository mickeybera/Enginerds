import React, { useEffect, useState } from "react";
import MatrixRain from "../Pages/MatrixRain";

const texts = [
  "Code. Compete. Conquer.",
  "Hack the Future.",
  "Where Tech Meets Power.",
  "Welcome to TechFeast 2025",
];

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  /* ---------------- Mouse Glow ---------------- */
  useEffect(() => {
    const move = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  /* ---------------- Typing Effect ---------------- */
  useEffect(() => {
    if (charIndex < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 70);
      return () => clearTimeout(timeout);
    } else {
      const reset = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
      return () => clearTimeout(reset);
    }
  }, [charIndex, textIndex]);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">

      {/* MATRIX RAIN */}
      <MatrixRain />

      {/* Cyber Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,255,255,0.08)_1px,transparent_1px)] bg-[length:28px_28px] opacity-20"></div>

      {/* Neon Lines */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-600 to-transparent animate-pulse"></div>

      {/* Glows */}
      <div className="absolute top-24 left-24 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-24 right-24 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full"></div>

      {/* HUD Frame */}
      <div className="absolute inset-10 border border-white/10 rounded-3xl pointer-events-none"></div>
      <div className="absolute top-10 left-10 w-6 h-6 border-t-2 border-l-2 border-cyan-400"></div>
      <div className="absolute top-10 right-10 w-6 h-6 border-t-2 border-r-2 border-purple-400"></div>
      <div className="absolute bottom-10 left-10 w-6 h-6 border-b-2 border-l-2 border-purple-400"></div>
      <div className="absolute bottom-10 right-10 w-6 h-6 border-b-2 border-r-2 border-cyan-400"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl px-6 text-center">

        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-wider">
          TECH
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            FEAST
          </span>
          2025
        </h1>

        {/* Typing Text */}
        <p className="mt-6 text-xl md:text-2xl font-mono text-cyan-400 h-8">
          {displayText}
          <span className="animate-pulse">|</span>
        </p>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          A futuristic college tech festival featuring hackathons, AI battles,
          robotics, gaming arenas, coding wars and next-gen innovation.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-6">
          <a
            href="#events"
            className="px-8 py-3 rounded-xl border border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/10 transition shadow-lg"
          >
            Explore Events
          </a>

          <a
            className="px-8 py-3 rounded-xl border border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/20 hover:text-white hover:cursor-pointer font-semibold shadow-xl hover:scale-105 transition"
          >
            Register Now
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 flex flex-col items-center text-gray-400 text-sm animate-bounce">
        <span>Scroll</span>
        <div className="w-[2px] h-8 bg-gradient-to-b from-cyan-400 to-transparent mt-2"></div>
      </div>

      {/* Mouse Glow */}
      <div
        className="pointer-events-none fixed w-40 h-40 bg-cyan-400/20 blur-3xl rounded-full transition-all duration-75"
        style={{ left: mouse.x - 80, top: mouse.y - 80 }}
      ></div>

    </section>
  );
};

export default Hero;
