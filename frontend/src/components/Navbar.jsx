import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "backdrop-blur-xl bg-white/10 border-b border-white/10 shadow-lg"
            : "bg-gradient-to-r from-[#0f0c29]/80 via-[#302b63]/80 to-[#24243e]/80"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-white select-none">TechFeast</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-white font-medium">
          <a href="#hero" className="hover:text-gray-300 transition">Home</a>
          <a href="#events" className="hover:text-gray-300 transition">Events</a>
          <a href="#about" className="hover:text-gray-300 transition">About</a>
          <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3">
          {/* <button className="px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">
            Login
          </button> */}
  <Link to = "/signup"><button className="relative px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 hover:bg-white/20 transition overflow-hidden neon-red">
  Signup
</button>
</Link>

          <Link to="/admin/login">
          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg hover:scale-105 transition">
            Admin
          </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white text-3xl cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/10 backdrop-blur-xl border-t border-white/10 px-6 py-6 space-y-6 text-white text-lg">
          <a onClick={() => setOpen(false)} href="#hero" className="block hover:text-gray-300">Home</a>
          <a onClick={() => setOpen(false)} href="#events" className="block hover:text-gray-300">Events</a>
          <a onClick={() => setOpen(false)} href="#about" className="block hover:text-gray-300">About</a>
          <a onClick={() => setOpen(false)} href="#contact" className="block hover:text-gray-300">Contact</a>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 pt-4">
            <button className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">
              Login
            </button>
            <button className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg hover:scale-[1.02] transition">
              Admin
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
