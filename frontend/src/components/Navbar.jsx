import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../../public/logo.png"
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-2xl bg-black/40 border-b border-cyan-400/20 shadow-[0_0_30px_rgba(0,255,255,0.15)]"
          : "bg-transparent"
      }`}
    >
      {/* HUD line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-widest cursor-pointer select-none">
          <img
            src={logo}
            alt="Enginerds Logo"
            className="w-20 h-20 cursor-pointer select-none
             object-cover rounded-xl
             border border-cyan-400/40
             shadow-[0_0_20px_rgba(0,255,255,0.5)]
             hover:shadow-[0_0_30px_rgba(0,255,255,0.8)]
             transition"
          />
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-12 text-white font-medium tracking-wide">
          {["Home", "Events", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group"
            >
              <span className="relative z-10">{item}</span>

              {/* Neon underline */}
              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>

              {/* Glow */}
              <span className="absolute -bottom-3 left-0 w-0 h-[6px] blur-md bg-cyan-400/40 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Admin Button */}
        <div className="hidden md:block">
          <Link to="/admin/login">
            <button className="hover:cursor-pointer hover:bg-cyan-400/10 border border-cyan-400/40 relative px-6 py-2.5 rounded-xl text-cyan-300 font-semibold overflow-hidden group">
              {/* <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-90"></span>
              <span className="absolute inset-0 blur-lg bg-gradient-to-r from-cyan-500 to-purple-600 opacity-60 group-hover:opacity-100 transition"></span> */}
              <span className="relative">Admin</span>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-white text-3xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/70 backdrop-blur-2xl border-t border-cyan-400/20 px-6 py-8 space-y-6 text-white text-lg">
          {["Home", "Events", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block tracking-wider hover:text-cyan-400 transition"
            >
              {item}
            </a>
          ))}

          <Link to="/admin/login">
            <button
              onClick={() => setOpen(false)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:shadow-[0_0_30px_rgba(0,255,255,0.8)] transition"
            >
              ADMIN PANEL
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
