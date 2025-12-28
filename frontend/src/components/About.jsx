import React, { useEffect, useRef, useState } from "react";
import MatrixRain from "../Pages/MatrixRain";

const terminalLines = [
  "> booting TechFeast OS...",
  "> loading innovation modules...",
  "> initializing hackathons...",
  "> system ready 🚀",
];

const About = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  /* ---------- Scroll Trigger ---------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ---------- Terminal Typing ---------- */
  useEffect(() => {
    if (!visible) return;

    if (lineIndex < terminalLines.length) {
      if (charIndex < terminalLines[lineIndex].length) {
        const t = setTimeout(() => {
          setTypedText(prev => prev + terminalLines[lineIndex][charIndex]);
          setCharIndex(prev => prev + 1);
        }, 40);
        return () => clearTimeout(t);
      } else {
        setTimeout(() => {
          setTypedText(prev => prev + "\n");
          setLineIndex(prev => prev + 1);
          setCharIndex(0);
        }, 500);
      }
    }
  }, [visible, charIndex, lineIndex]);

  /* ---------- Mouse Parallax ---------- */
  useEffect(() => {
    const move = e => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full py-36 px-6 bg-black overflow-hidden"
    >
      <MatrixRain />

      {/* 🧬 Animated Circuit SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="circuit" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <path
          d="M0 100 H300 V300 H600 V150 H900"
          stroke="url(#circuit)"
          strokeWidth="2"
          fill="none"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="1000"
            to="0"
            dur="6s"
            repeatCount="indefinite"
          />
        </path>
      </svg>

      {/* ⚡ Parallax Glow */}
      <div
        className="pointer-events-none absolute w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full transition-all duration-75"
        style={{ left: mouse.x - 140, top: mouse.y - 140 }}
      ></div>

      {/* CONTENT */}
      <div
        className={`relative z-10 max-w-5xl mx-auto backdrop-blur-2xl bg-white/5 border border-cyan-400/20 rounded-3xl p-12 text-center transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        {/* HUD Corners */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-cyan-400"></div>
        <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-purple-400"></div>
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-purple-400"></div>
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-cyan-400"></div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-wider text-white">
          About{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Tech Feast
          </span>
        </h2>

        {/* Divider */}
        <div className="w-32 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto my-6"></div>

        {/* 🧠 AI Terminal */}
        <pre className="mx-auto mt-8 mb-10 max-w-3xl bg-black/60 border border-cyan-400/30 rounded-xl p-6 text-left text-green-400 font-mono text-sm shadow-[0_0_30px_rgba(0,255,255,0.25)]">
          {typedText}
          <span className="animate-pulse">█</span>
        </pre>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
          Tech Feast is our college’s flagship technical festival — where{" "}
          <span className="text-cyan-400">code</span>,{" "}
          <span className="text-purple-400">creativity</span> and{" "}
          <span className="text-cyan-400">competition</span> collide.
          <br /><br />
          Hackathons, AI battles, robotics, gaming arenas and next-gen innovation
          — this is where future technologists are forged.
        </p>

        {/* CTA */}
        <div className="mt-12">
          <button className="hover:cursor-pointer px-10 py-3 rounded-xl border border-cyan-400/40 text-cyan-300 font-semibold tracking-wide shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_40px_rgba(0,255,255,0.7)] hover:scale-105 transition">
            Enter the System
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
