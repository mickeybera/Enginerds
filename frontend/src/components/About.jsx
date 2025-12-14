import React from "react";
import MatrixRain from "../Pages/MatrixRain";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full py-28 px-6 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden"
    >
      <MatrixRain/>
      {/* Subtle Cyber Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[length:36px_36px] opacity-20"></div>

      {/* Soft Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto glass-card p-12 rounded-3xl border border-white/10 backdrop-blur-xl text-center">
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">
          About{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Tech Feast
          </span>
        </h2>

        {/* Divider */}
        <div className="w-24 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto my-6"></div>

        {/* Text */}
        <p className="text-gray-300 text-lg leading-relaxed">
          Tech Feast is our college’s flagship technical festival — a fusion of
          innovation, creativity and competition.
          <br /><br />
          From intense coding battles and hackathons to UI/UX wars, robotics,
          quizzes and gaming arenas, Tech Feast is where ideas evolve into
          impact and talent meets opportunity.
        </p>

        {/* Button */}
        <div className="mt-10">
          <button className="hover:cursor-pointer px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-xl hover:scale-105 transition">
            Be Part of the Future
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;

