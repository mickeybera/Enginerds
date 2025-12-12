import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-24 px-6 bg-gradient-to-b from-[#24243e] via-[#302b63] to-[#0f0c29]"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        
        {/* Left Text */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide drop-shadow-lg">
            Contact Us
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Have questions about events, registration, or payments?  
            We’re here to help!  
            Reach out anytime and our team will respond immediately.
          </p>

          <div className="text-gray-300 space-y-3 text-lg">
            <p>📍 <span className="text-purple-400 font-medium">Government College of Engineering</span></p>
            <p>📧 <span className="text-purple-400 font-medium">techfeast@college.com</span></p>
            <p>📞 <span className="text-purple-400 font-medium">+91 98765 43210</span></p>
          </div>
        </div>

        {/* Right Form */}
        <div className="flex-1 p-8 rounded-2xl w-full glass-card border border-white/20 backdrop-blur-lg shadow-2xl animate-fadeIn">
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 border border-white/20 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 border border-white/20 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 border border-white/20 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
            ></textarea>

            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-purple-500/50 transition transform duration-300">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;

