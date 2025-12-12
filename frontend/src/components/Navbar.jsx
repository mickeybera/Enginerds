import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-white/10 border-b border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.4)]"
          : "bg-gradient-to-r from-[#0f0c29]/70 via-[#302b63]/70 to-[#24243e]/70"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Tech Logo */}
        <h1 className="text-3xl font-extrabold tracking-wider text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text drop-shadow-md cursor-pointer select-none">
          Tech<span className="text-white font-light">Feast</span>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 text-white font-medium">
          {["Home", "Events", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group text-lg"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-purple-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Desktop Admin Button */}
        <div className="hidden md:flex">
          <Link to="/admin/login">
            <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_12px_rgba(138,43,226,0.8)] hover:shadow-[0_0_18px_rgba(138,43,226,1)] hover:scale-105 transition-all duration-300">
              Admin
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

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/10 backdrop-blur-xl border-t border-white/10 px-6 py-6 space-y-6 text-white text-lg shadow-inner">

          {["Home", "Events", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block hover:text-purple-300 transition-all"
            >
              {item}
            </a>
          ))}

          {/* Mobile Admin Button */}
          <Link to="/admin/login">
            <button
              onClick={() => setOpen(false)}
              className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(138,43,226,0.8)] hover:shadow-[0_0_20px_rgba(138,43,226,1)] hover:scale-[1.02] transition-all duration-300"
            >
              Admin
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
