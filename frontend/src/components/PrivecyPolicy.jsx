import React from "react";
import MatrixRain from "../Pages/MatrixRain";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-50 py-12 px-4 sm:px-6 lg:px-20">
        <MatrixRain/>
      <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-md shadow-xl rounded-3xl p-10 sm:p-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-8 text-center">
          Privacy Policy
        </h1>
        <p className="text-gray-700 mb-6 text-center sm:text-left">
          <strong>Effective Date:</strong> 13th December 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">1. Introduction</h2>
          <p className="text-gray-700">
            Welcome to the College Tech Feast website. Your privacy is important to us. 
            This Privacy Policy explains how we collect, use, and protect your personal 
            information when you register for events, participate in activities, or use 
            our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">2. Information We Collect</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Personal Information:</strong> Name, email, phone number, college name, and event registration details.</li>
            <li><strong>Usage Data:</strong> How you interact with our website, such as pages visited and events viewed.</li>
            <li><strong>Cookies:</strong> Small files stored on your device to enhance your experience.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Register you for events and competitions.</li>
            <li>Send updates and important notifications about the Tech Feast.</li>
            <li>Improve website functionality and user experience.</li>
            <li>Analyze participation trends to plan future events.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">4. Sharing Your Information</h2>
          <p className="text-gray-700">
            We respect your privacy and will <strong>not sell or share your personal information</strong> 
            with third parties, except:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
            <li>With event sponsors or partners to manage participation (only necessary details).</li>
            <li>When required by law or legal obligations.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">5. Data Security</h2>
          <p className="text-gray-700">
            We take measures to protect your personal information from unauthorized access or disclosure. 
            However, no system is completely secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">6. Your Rights</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Access your personal information.</li>
            <li>Request correction of inaccurate information.</li>
            <li>Opt-out of promotional or informational emails.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">7. Third-Party Links</h2>
          <p className="text-gray-700">
            Our website may contain links to third-party websites. We are <strong>not responsible</strong> 
            for their privacy practices. Please review their policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">8. Changes to This Privacy Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy occasionally. Updated versions will be posted here with the effective date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">9. Contact Us</h2>
          <p className="text-gray-700 mb-2">If you have questions or concerns, contact us at:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><strong>Email:</strong> techfeast@college.edu</li>
            <li><strong>Phone:</strong> [Your College Contact Number]</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
