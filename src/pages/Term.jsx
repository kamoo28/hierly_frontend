import React from 'react';
import Footer from '../components/Footer';

const Term = () => {
  return (
    <>
      <div className="pt-20 px-5">
        <h1 className="text-2xl font-bold mb-4">Terms & Conditions</h1>
        <p className="mb-4">
          Welcome to our Job Portal. By accessing and using our services, you agree to comply with the following Terms and Conditions. Please read them carefully before using our platform.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By registering on our platform, posting a job, or applying for a job, you accept these terms and conditions in full. If you disagree with any part of these terms, please do not use our website.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. User Responsibilities</h2>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
          <li>Users must provide accurate, current, and complete information during registration.</li>
          <li>Employers must ensure that job listings are legitimate and clearly described.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Prohibited Activities</h2>
        <p className="mb-4">
          Users may not post content that is false, misleading, offensive, or violates any local or international law. Spamming, phishing, or uploading malware is strictly prohibited.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Termination of Access</h2>
        <p className="mb-4">
          We reserve the right to suspend or terminate your account without notice if we believe you are violating these terms or using our platform for unlawful purposes.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Intellectual Property</h2>
        <p className="mb-4">
          All content, logos, and trademarks on this website are the property of the Job Portal or its licensors. You may not reproduce or distribute any content without our prior written permission.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Disclaimer</h2>
        <p className="mb-4">
          We do not guarantee job placements or the legitimacy of all listings. Users should exercise caution when interacting with potential employers or candidates.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">7. Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right to modify these terms at any time. Changes will be posted on this page and will become effective immediately upon posting. Continued use of the site after changes constitutes acceptance.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact</h2>
        <p className="mb-6">
          If you have any questions about these Terms and Conditions, please contact us at support@jobportal.com.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Term;
