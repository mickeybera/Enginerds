import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-24 px-6 bg-gradient-to-b from-[#24243e] via-[#302b63] to-[#0f0c29]"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        
        {/* Left Text */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Contact Us
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Have questions about events, registration, or payments?  
            We’re here to help!  
            Reach out anytime and our team will respond immediately.
          </p>

          <div className="text-gray-300 space-y-3">
            <p>📍 Government College of Engineering</p>
            <p>📧 techfeast@college.com</p>
            <p>📞 +91 98765 43210</p>
          </div>
        </div>

        {/* Right Form */}
        <div className="flex-1 glass-card p-8 rounded-2xl w-full">
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 border border-white/20 outline-none focus:border-purple-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 border border-white/20 outline-none focus:border-purple-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 border border-white/20 outline-none focus:border-purple-500"
            ></textarea>

            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 transition">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
