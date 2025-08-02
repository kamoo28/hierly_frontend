import React from 'react';
import Footer from '../components/Footer';

const InterviewTips = () => {
  return (
    <>
      <div className="pt-5 px-4 ">
        <h1 className="text-2xl font-bold mb-4">Top Interview Tips & Guidance</h1>

        <p className="mb-4">
          Preparing for an interview can be a stressful experience, but with the right guidance and preparation, you can significantly improve your chances of success. Here are some essential tips to help you perform confidently in your next interview.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Research the Company</h2>
        <p className="mb-4">
          Understand the company's mission, values, products, and recent news. This shows you're genuinely interested and allows you to tailor your answers to their culture and needs.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Understand the Job Role</h2>
        <p className="mb-4">
          Read the job description carefully. Know what skills and experiences they are looking for and prepare examples from your past work that align with these requirements.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Practice Common Interview Questions</h2>
        <p className="mb-4">
          Prepare answers for frequently asked questions like:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>"Tell me about yourself"</li>
          <li>"Why do you want to work here?"</li>
          <li>"What are your strengths and weaknesses?"</li>
          <li>"Describe a challenge you faced and how you overcame it"</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Use the STAR Method</h2>
        <p className="mb-4">
          Structure your responses to behavioral questions using the STAR method:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li><strong>S</strong>ituation – What was the context?</li>
          <li><strong>T</strong>ask – What was your responsibility?</li>
          <li><strong>A</strong>ction – What actions did you take?</li>
          <li><strong>R</strong>esult – What was the outcome?</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Dress Appropriately</h2>
        <p className="mb-4">
          Dress professionally according to the company's culture. When in doubt, it's better to be slightly overdressed than underdressed.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Arrive on Time</h2>
        <p className="mb-4">
          Plan to arrive 10–15 minutes early. This shows punctuality and allows time to settle your nerves.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">7. Ask Smart Questions</h2>
        <p className="mb-4">
          Prepare thoughtful questions to ask the interviewer about the role, team, or company. For example:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>"What does a typical day look like in this role?"</li>
          <li>"How do you measure success in this position?"</li>
          <li>"What are the next steps after this interview?"</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">8. Be Honest and Positive</h2>
        <p className="mb-4">
          Always be truthful in your responses. Stay positive even when discussing past challenges or reasons for leaving a job.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">9. Follow Up After the Interview</h2>
        <p className="mb-6">
          Send a thank-you email within 24 hours. Reiterate your interest in the position and express gratitude for the opportunity.
        </p>

        <p className="mb-8">
          Remember, interviews are a two-way process. Stay calm, confident, and use the opportunity to show why you're the best fit. With preparation and practice, you’ll shine in any interview!
        </p>
      </div>

      <Footer />
    </>
  );
};

export default InterviewTips;
