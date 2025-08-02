import React from "react";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="pt-5 px-4  text-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">Privacy Policy</h1>

        <p className="mb-4">
          At JobPortal, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website or services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <p className="mb-4">
          We may collect personal information such as your name, email address, phone number, location, job preferences, and any information you include in your resume or application materials.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
        <p className="mb-4">
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>Provide and manage our job portal services</li>
          <li>Connect you with potential employers</li>
          <li>Send you job alerts and updates</li>
          <li>Improve our services and user experience</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Sharing of Your Information</h2>
        <p className="mb-4">
          We may share your information with:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>Employers and recruiters when you apply for jobs</li>
          <li>Third-party service providers assisting in our operations</li>
          <li>Law enforcement when legally required</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Your Rights</h2>
        <p className="mb-4">
          You have the right to access, update, or delete your personal information. You can manage your preferences in your account settings or contact us for assistance.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Data Security</h2>
        <p className="mb-4">
          We use appropriate technical and organizational measures to protect your data from unauthorized access, loss, or misuse.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Cookies</h2>
        <p className="mb-4">
          Our website uses cookies to enhance your browsing experience. You can choose to accept or decline cookies through your browser settings.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">7. Changes to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. The latest version will always be available on our website with the updated effective date.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact Us</h2>
        <p className="mb-6">
          If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@jobportal.com" className="text-blue-600 underline">support@jobportal.com</a>.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
