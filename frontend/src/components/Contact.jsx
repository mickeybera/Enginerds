import React from "react";
import MatrixRain from "../Pages/MatrixRain";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full py-28 px-6 bg-gradient-to-b from-[#24243e] via-[#302b63] to-[#0f0c29] overflow-hidden"
    >
      <MatrixRain/>
      {/* Cyber Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px] opacity-20"></div>

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[420px] h-[420px] bg-purple-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-cyan-500/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        
        {/* Left Info */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-white">
            Get In{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <div className="w-20 h-0.5 bg-cyan-400/40"></div>

          <p className="text-gray-300 text-lg leading-relaxed">
            Have questions about events, registration, or payments?
            Our Tech Feast team is always ready to assist you.
          </p>

          <div className="space-y-3 text-gray-300 text-lg">
            <p>
              📍 <span className="text-cyan-400 font-medium">
                Government College of Engineering & Leather Technology
              </span>
            </p>
            <p>
              📧 <span className="text-purple-400 font-medium">
                techfeast@college.com
              </span>
            </p>
            <p> Nabakumar Mahato
              📞 <span className="text-cyan-400 font-medium">
                +91 98765 43210
              </span>
            </p>
            <p> Arpan Bera
              📞 <span className="text-cyan-400 font-medium">
                +91 9732760714
              </span>
            </p>
            <p> Sabbyasachi Garai
              📞 <span className="text-cyan-400 font-medium">
                +91 98765 43210
              </span>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-card p-10 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/20 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/20 outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/20 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition resize-none"
            ></textarea>

            <button
              type="submit"
              className="hover:cursor-pointer w-full py-3 rounded-xl border border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/10 font-semibold shadow-xl hover:scale-105 hover:shadow-cyan-400/10 transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
