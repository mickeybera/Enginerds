import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-10 px-6 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Logo + Tagline */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold">TechFeast</h2>
          <p className="text-gray-300 mt-2 text-sm">
            The ultimate celebration of innovation, technology & creativity.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex gap-10 text-gray-300">
          <a href="#hero" className="hover:text-white transition">Home</a>
          <a href="#events" className="hover:text-white transition">Events</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-gray-300">
          <a href="#">
            <i className="fa-brands fa-instagram text-2xl hover:text-white transition"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-facebook text-2xl hover:text-white transition"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-github text-2xl hover:text-white transition"></i>
          </a>
        </div>
      </div>

      {/* Credits */}
      <div className="mt-10 text-center text-gray-300 text-sm leading-relaxed">
        <p>Designed & Developed by <span className="text-white font-semibold">Arpan Bera</span></p>
        <p>Batch of 2026 • Department of Computer Science & Engineering</p>
      </div>

      {/* Bottom small text */}
      <p className="text-center text-gray-400 text-xs mt-6">
        © {new Date().getFullYear()} TechFeast • All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
