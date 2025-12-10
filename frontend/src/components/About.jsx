import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-24 px-6 flex justify-center items-center bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]"
    >
      <div className="max-w-4xl mx-auto glass-card p-10 rounded-2xl">
        <h2 className="text-4xl font-bold text-white text-center mb-6">
          About Tech Feast
        </h2>

        <p className="text-gray-200 text-lg leading-relaxed text-center">
          Tech Feast is our college’s biggest annual technical festival that
          brings together brilliant minds, creative developers, innovators and
          tech enthusiasts.  
          <br /><br />
          With multiple events like coding battles, hackathons, UI/UX wars,
          robotics challenges, quizzes and gaming competitions — Tech Feast is
          built to ignite inspiration, spark creativity and celebrate the power
          of technology.
        </p>

        <div className="flex justify-center mt-8">
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 transition">
            Join the Celebration
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
