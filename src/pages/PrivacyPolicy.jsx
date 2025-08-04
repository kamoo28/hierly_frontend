import React from "react";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="pt-20 px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 lg:p-12">
            <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Privacy Policy</h1>

            <p className="mb-8 text-lg text-gray-600 text-center">
              At Hierly, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website or services.
            </p>

            <div className="space-y-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-blue-800">1. Information We Collect</h2>
                <p className="mb-4 text-gray-700">
                  We may collect personal information such as your name, email address, phone number, location, job preferences, and any information you include in your resume or application materials.
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-purple-800">2. How We Use Your Information</h2>
                <p className="mb-4 text-gray-700">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                  <li>Provide and manage our job portal services</li>
                  <li>Connect you with potential employers</li>
                  <li>Send you job alerts and updates</li>
                  <li>Improve our services and user experience</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-green-800">3. Sharing of Your Information</h2>
                <p className="mb-4 text-gray-700">
                  We may share your information with:
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                  <li>Employers and recruiters when you apply for jobs</li>
                  <li>Third-party service providers assisting in our operations</li>
                  <li>Law enforcement when legally required</li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-orange-800">4. Your Rights</h2>
                <p className="mb-4 text-gray-700">
                  You have the right to access, update, or delete your personal information. You can manage your preferences in your account settings or contact us for assistance.
                </p>
              </div>

              <div className="bg-pink-50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-pink-800">5. Data Security</h2>
                <p className="mb-4 text-gray-700">
                  We use appropriate technical and organizational measures to protect your data from unauthorized access, loss, or misuse.
                </p>
              </div>

              <div className="bg-indigo-50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-indigo-800">6. Cookies</h2>
                <p className="mb-4 text-gray-700">
                  Our website uses cookies to enhance your browsing experience. You can choose to accept or decline cookies through your browser settings.
                </p>
              </div>

              <div className="bg-teal-50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-teal-800">7. Changes to This Policy</h2>
                <p className="mb-4 text-gray-700">
                  We may update this Privacy Policy from time to time. The latest version will always be available on our website with the updated effective date.
                </p>
              </div>

              <div className="bg-red-50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-red-800">8. Contact Us</h2>
                <p className="mb-6 text-gray-700">
                  If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@hierly.com" className="text-blue-600 underline hover:text-blue-800 transition-colors duration-300">support@hierly.com</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
