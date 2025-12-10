import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10"></div>

      {/* Glow Circles */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* Content */}
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-wide drop-shadow-lg">
          Welcome to <span className="text-blue-400">TechFeast 2025</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/80">
          The biggest college tech festival with coding battles, hackathons,
          robotics, gaming, workshops and much more!  
          Join and showcase your skills.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex gap-6 justify-center">
          <a
            href="#events"
            className="px-6 py-3 rounded-xl bg-white/20 backdrop-blur-xl text-white border border-white/20 hover:bg-white/30 transition shadow-lg"
          >
            View Events
          </a>
          <a
            href="/login"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition shadow-lg"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
