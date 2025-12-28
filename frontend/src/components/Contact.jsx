import React, { useEffect, useRef, useState } from "react";
import MatrixRain from "../Pages/MatrixRain";

const Contact = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  /* Scroll reveal */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  /* Mouse parallax */
  useEffect(() => {
    const move = e => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full py-36 px-6 bg-black overflow-hidden"
    >
      <MatrixRain />

      {/* 🧬 Animated Circuit */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="contactCircuit" x1="0%" y1="0%" x2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <path
          d="M0 120 H400 V320 H800 V200 H1200"
          stroke="url(#contactCircuit)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="6 12"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="600"
            to="0"
            dur="5s"
            repeatCount="indefinite"
          />
        </path>
      </svg>

      {/* ⚡ Mouse Glow */}
      <div
        className="pointer-events-none absolute w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full transition-all duration-75"
        style={{ left: mouse.x - 160, top: mouse.y - 160 }}
      ></div>

      {/* CONTENT */}
      <div
        className={`relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        {/* LEFT PANEL */}
        <div className="relative backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-3xl p-10 shadow-[0_0_40px_rgba(0,255,255,0.15)]">

          {/* HUD corners */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-cyan-400"></div>
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-purple-400"></div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wider text-white">
            Contact{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Console
            </span>
          </h2>

          <div className="w-24 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 my-6"></div>

          {/* AI Terminal */}
          <pre className="bg-black/70 border border-cyan-400/30 rounded-xl p-4 text-green-400 font-mono text-sm shadow-[0_0_25px_rgba(0,255,255,0.3)] mb-6">
{`> establishing secure connection...
> loading contact nodes...
> awaiting transmission █`}
          </pre>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Reach out for event details, registrations or collaborations.
            Our system operators are always online.
          </p>

          {/* Contacts */}
          <div className="space-y-3 text-gray-300 text-lg">
            <p>📍 <span className="text-cyan-400">GCELT, Kolkata</span></p>
            <p>📧 <span className="text-purple-400">techfeast@college.com</span></p>
            <p>👤 Nabakumar Mahata — <span className="text-cyan-400">+91 7679747410</span></p>
            <p>👤 Arpan Bera — <span className="text-cyan-400">+91 9732760714</span></p>
            <p>👤 Sabbyasachi Garai — <span className="text-cyan-400">+91 7679357976</span></p>
            <p>👤 Gourab Banerjee — <span className="text-cyan-400">+91 9732385249</span></p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="relative backdrop-blur-xl bg-white/5 border border-purple-400/20 rounded-3xl p-10 shadow-[0_0_40px_rgba(168,85,247,0.2)]">

          {/* HUD corners */}
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-purple-400"></div>
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-cyan-400"></div>

          <form className="space-y-6">
            {["Your Name", "Your Email"].map((p, i) => (
              <input
                key={i}
                type={i === 1 ? "email" : "text"}
                placeholder={p}
                className="w-full px-4 py-3 rounded-xl bg-black/40 text-white placeholder-gray-500 border border-white/20 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition"
              />
            ))}

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-xl bg-black/40 text-white placeholder-gray-500 border border-white/20 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 outline-none transition resize-none"
            ></textarea>

            <button
              type="submit"
              className="hover:cursor-pointer w-full py-3 rounded-xl border border-cyan-400/40 text-cyan-300 font-semibold tracking-wide shadow-[0_0_25px_rgba(0,255,255,0.3)] hover:shadow-[0_0_45px_rgba(0,255,255,0.6)] hover:scale-105 transition"
            >
              Transmit Message 🚀
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
