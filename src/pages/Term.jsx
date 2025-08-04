import React from 'react';
import Footer from '../components/Footer';

const Term = () => {
  return (
    <>
      <div className="pt-20 px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 lg:p-12">
            <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Terms & Conditions</h1>
            <p className="mb-8 text-lg text-gray-600 text-center">
              Welcome to Hierly. By accessing and using our services, you agree to comply with the following Terms and Conditions. Please read them carefully before using our platform.
            </p>

            <div className="space-y-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-blue-800">1. Acceptance of Terms</h2>
                <p className="mb-4 text-gray-700">
                  By registering on our platform, posting a job, or applying for a job, you accept these terms and conditions in full. If you disagree with any part of these terms, please do not use our website.
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-purple-800">2. User Responsibilities</h2>
                <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                  <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
                  <li>Users must provide accurate, current, and complete information during registration.</li>
                  <li>Employers must ensure that job listings are legitimate and clearly described.</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-green-800">3. Prohibited Activities</h2>
                <p className="mb-4 text-gray-700">
                  Users may not post content that is false, misleading, offensive, or violates any local or international law. Spamming, phishing, or uploading malware is strictly prohibited.
                </p>
              </div>

              <div className="bg-orange-50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-orange-800">4. Termination of Access</h2>
                <p className="mb-4 text-gray-700">
                  We reserve the right to suspend or terminate your account without notice if we believe you are violating these terms or using our platform for unlawful purposes.
                </p>
              </div>

              <div className="bg-pink-50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-pink-800">5. Intellectual Property</h2>
                <p className="mb-4 text-gray-700">
                  All content, logos, and trademarks on this website are the property of Hierly or its licensors. You may not reproduce or distribute any content without our prior written permission.
                </p>
              </div>

              <div className="bg-indigo-50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-indigo-800">6. Disclaimer</h2>
                <p className="mb-4 text-gray-700">
                  We do not guarantee job placements or the legitimacy of all listings. Users should exercise caution when interacting with potential employers or candidates.
                </p>
              </div>

              <div className="bg-teal-50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-teal-800">7. Changes to Terms</h2>
                <p className="mb-4 text-gray-700">
                  We reserve the right to modify these terms at any time. Changes will be posted on this page and will become effective immediately upon posting. Continued use of the site after changes constitutes acceptance.
                </p>
              </div>

              <div className="bg-red-50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-red-800">8. Contact</h2>
                <p className="mb-6 text-gray-700">
                  If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:support@hierly.com" className="text-blue-600 underline hover:text-blue-800 transition-colors duration-300">support@hierly.com</a>.
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

export default Term;
