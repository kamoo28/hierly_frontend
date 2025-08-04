import React from 'react';
import Footer from '../components/Footer';

const InterviewTips = () => {
  return (
    <>
      <div className="pt-20 px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 lg:p-12">
            <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800 text-center">Top Interview Tips & Guidance</h1>

            <p className="mb-8 text-lg text-gray-600 text-center">
              Preparing for an interview can be a stressful experience, but with the right guidance and preparation, you can significantly improve your chances of success. Here are some essential tips to help you perform confidently in your next interview.
            </p>

            <div className="space-y-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-blue-800">1. Research the Company</h2>
                <p className="mb-4 text-gray-700">
                  Understand the company's mission, values, products, and recent news. This shows you're genuinely interested and allows you to tailor your answers to their culture and needs.
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-purple-800">2. Understand the Job Role</h2>
                <p className="mb-4 text-gray-700">
                  Read the job description carefully. Know what skills and experiences they are looking for and prepare examples from your past work that align with these requirements.
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-green-800">3. Practice Common Interview Questions</h2>
                <p className="mb-4 text-gray-700">
                  Prepare answers for frequently asked questions like:
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                  <li>"Tell me about yourself"</li>
                  <li>"Why do you want to work here?"</li>
                  <li>"What are your strengths and weaknesses?"</li>
                  <li>"Describe a challenge you faced and how you overcame it"</li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-orange-800">4. Use the STAR Method</h2>
                <p className="mb-4 text-gray-700">
                  Structure your responses to behavioral questions using the STAR method:
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                  <li><strong>S</strong>ituation – What was the context?</li>
                  <li><strong>T</strong>ask – What was your responsibility?</li>
                  <li><strong>A</strong>ction – What actions did you take?</li>
                  <li><strong>R</strong>esult – What was the outcome?</li>
                </ul>
              </div>

              <div className="bg-pink-50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-pink-800">5. Dress Appropriately</h2>
                <p className="mb-4 text-gray-700">
                  Dress professionally according to the company's culture. When in doubt, it's better to be slightly overdressed than underdressed.
                </p>
              </div>

              <div className="bg-indigo-50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-indigo-800">6. Arrive on Time</h2>
                <p className="mb-4 text-gray-700">
                  Plan to arrive 10–15 minutes early. This shows punctuality and allows time to settle your nerves.
                </p>
              </div>

              <div className="bg-teal-50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-teal-800">7. Ask Smart Questions</h2>
                <p className="mb-4 text-gray-700">
                  Prepare thoughtful questions to ask the interviewer about the role, team, or company. For example:
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                  <li>"What does a typical day look like in this role?"</li>
                  <li>"How do you measure success in this position?"</li>
                  <li>"What are the next steps after this interview?"</li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-red-800">8. Be Honest and Positive</h2>
                <p className="mb-4 text-gray-700">
                  Always be truthful in your responses. Stay positive even when discussing past challenges or reasons for leaving a job.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-gray-800">9. Follow Up After the Interview</h2>
                <p className="mb-6 text-gray-700">
                  Send a thank-you email within 24 hours. Reiterate your interest in the position and express gratitude for the opportunity.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
              <p className="text-lg font-semibold">
                Remember, interviews are a two-way process. Stay calm, confident, and use the opportunity to show why you're the best fit. With preparation and practice, you'll shine in any interview!
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default InterviewTips;
