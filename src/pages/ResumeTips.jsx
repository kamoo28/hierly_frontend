import React from 'react';
import Footer from '../components/Footer';

const ResumeTips = () => {
  return (
    <>
      <div className="pt-20 px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 lg:p-12">
            <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800 text-center">Professional Resume Writing Tips</h1>

            <p className="mb-8 text-lg text-gray-600 text-center">
              Creating a professional and well-structured resume is key to landing your dream job. Below are some detailed tips and best practices to help you build a standout resume.
            </p>

            <div className="space-y-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-blue-800">1. Choose the Right Resume Format</h2>
                <p className="mb-4 text-gray-700">
                  Use a format that highlights your strengths. The most common formats are:
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                  <li><strong>Chronological:</strong> Lists work experience in reverse chronological order.</li>
                  <li><strong>Functional:</strong> Focuses on skills and experience rather than job history.</li>
                  <li><strong>Combination:</strong> Blends both chronological and functional formats.</li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-purple-800">2. Use a Clean, Professional Layout</h2>
                <p className="mb-4 text-gray-700">
                  Avoid overly decorative fonts and clutter. Stick to easy-to-read fonts like Arial or Calibri and ensure consistent formatting.
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-green-800">3. Highlight Achievements, Not Just Duties</h2>
                <p className="mb-4 text-gray-700">
                  Employers are interested in what you accomplished, not just your responsibilities. Use quantifiable results where possible:
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                  <li>"Increased sales by 30% in 6 months"</li>
                  <li>"Managed a team of 10 developers"</li>
                  <li>"Improved customer satisfaction rating from 80% to 95%"</li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-orange-800">4. Tailor Your Resume for Each Job</h2>
                <p className="mb-4 text-gray-700">
                  Customize your resume to include keywords and skills from the specific job description. This also helps with passing Applicant Tracking Systems (ATS).
                </p>
              </div>

              <div className="bg-pink-50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-pink-800">5. Keep it Concise</h2>
                <p className="mb-4 text-gray-700">
                  Aim for 1 page if you have less than 5 years of experience. Only include relevant details. Hiring managers often spend just 6-10 seconds on a resume.
                </p>
              </div>

              <div className="bg-indigo-50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-indigo-800">6. Include a Strong Summary Section</h2>
                <p className="mb-4 text-gray-700">
                  Write a 2–3 sentence professional summary at the top of your resume highlighting your top achievements and career goals.
                </p>
              </div>

              <div className="bg-teal-50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-teal-800">7. Add Keywords and Skills</h2>
                <p className="mb-4 text-gray-700">
                  Use keywords relevant to the job. This helps your resume get past automated filters. Also include hard and soft skills:
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                  <li>Hard skills: JavaScript, Excel, Photoshop, etc.</li>
                  <li>Soft skills: Communication, Leadership, Problem-solving, etc.</li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-red-800">8. Proofread and Edit</h2>
                <p className="mb-4 text-gray-700">
                  Typos and grammatical errors can create a negative impression. Always double-check your resume or ask someone else to review it.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-gray-800">9. Optional Sections to Include</h2>
                <p className="mb-4 text-gray-700">
                  Depending on the job, you may include additional sections like:
                </p>
                <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
                  <li>Certifications</li>
                  <li>Languages</li>
                  <li>Volunteer Work</li>
                  <li>Hobbies (only if relevant)</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
              <p className="text-lg font-semibold">
                Remember, your resume is your first impression. Make it count by presenting yourself as a confident and qualified candidate. Good luck!
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ResumeTips;
