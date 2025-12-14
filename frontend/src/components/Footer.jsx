import React from "react";
import MatrixRain from "../Pages/MatrixRain";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
const Footer = () => {
  return (
    <footer className="relative w-full pt-20 pb-10 px-6 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white overflow-hidden">
      <MatrixRain/>
      {/* Cyber Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[length:48px_48px] opacity-15"></div>

      {/* Glow Accents */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[500px] h-[120px] bg-cyan-500/20 blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        
        {/* Logo */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-extrabold tracking-wide">
            Tech
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Feast
            </span>
          </h2>
          <p className="text-gray-300 mt-3 text-sm max-w-xs">
            The ultimate celebration of innovation, technology and creativity.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex gap-10 text-gray-300 font-medium">
          {["Home", "Events", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-cyan-400 after:to-purple-500 hover:after:w-full after:transition-all"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Socials */}
        <div className="flex gap-6">
          <ul className="flex gap-6 font-bold text-2xl">
            <li className="hover:cursor-pointer hover:text-blue-600"><FaFacebook /></li>
            <li className="hover:cursor-pointer hover:text-pink-600"><FaInstagram /></li>
            <li className="hover:cursor-pointer hover:text-gray-500"><FiGithub /></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 max-w-6xl mx-auto my-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* Credits */}
      <div className="relative z-10 text-center text-gray-300 text-sm space-y-1">
        <p>
          Designed & Developed by{" "}
          <span className="text-white font-semibold">Arpan Bera</span>
        </p>
        <p>Batch of 2026 • Department of Computer Science & Engineering</p>
      </div>

      {/* Copyright */}
      <p className="relative z-10 text-center text-gray-400 text-xs mt-6">
        © {new Date().getFullYear()} TechFeast • All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
