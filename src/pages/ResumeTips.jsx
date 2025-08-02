import React from 'react';
import Footer from '../components/Footer';

const ResumeTips = () => {
  return (
    <>
      <div className="pt-5 px-4 ">
        <h1 className="text-2xl font-bold mb-4">Professional Resume Writing Tips</h1>

        <p className="mb-4">
          Creating a professional and well-structured resume is key to landing your dream job. Below are some detailed tips and best practices to help you build a standout resume.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Choose the Right Resume Format</h2>
        <p className="mb-4">
          Use a format that highlights your strengths. The most common formats are:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li><strong>Chronological:</strong> Lists work experience in reverse chronological order.</li>
          <li><strong>Functional:</strong> Focuses on skills and experience rather than job history.</li>
          <li><strong>Combination:</strong> Blends both chronological and functional formats.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Use a Clean, Professional Layout</h2>
        <p className="mb-4">
          Avoid overly decorative fonts and clutter. Stick to easy-to-read fonts like Arial or Calibri and ensure consistent formatting.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Highlight Achievements, Not Just Duties</h2>
        <p className="mb-4">
          Employers are interested in what you accomplished, not just your responsibilities. Use quantifiable results where possible:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>“Increased sales by 30% in 6 months”</li>
          <li>“Managed a team of 10 developers”</li>
          <li>“Improved customer satisfaction rating from 80% to 95%”</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Tailor Your Resume for Each Job</h2>
        <p className="mb-4">
          Customize your resume to include keywords and skills from the specific job description. This also helps with passing Applicant Tracking Systems (ATS).
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Keep it Concise</h2>
        <p className="mb-4">
          Aim for 1 page if you have less than 5 years of experience. Only include relevant details. Hiring managers often spend just 6-10 seconds on a resume.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Include a Strong Summary Section</h2>
        <p className="mb-4">
          Write a 2–3 sentence professional summary at the top of your resume highlighting your top achievements and career goals.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">7. Add Keywords and Skills</h2>
        <p className="mb-4">
          Use keywords relevant to the job. This helps your resume get past automated filters. Also include hard and soft skills:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>Hard skills: JavaScript, Excel, Photoshop, etc.</li>
          <li>Soft skills: Communication, Leadership, Problem-solving, etc.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">8. Proofread and Edit</h2>
        <p className="mb-4">
          Typos and grammatical errors can create a negative impression. Always double-check your resume or ask someone else to review it.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">9. Optional Sections to Include</h2>
        <p className="mb-4">
          Depending on the job, you may include additional sections like:
        </p>
        <ul className="list-disc pl-5 mb-6 space-y-1">
          <li>Certifications</li>
          <li>Languages</li>
          <li>Volunteer Work</li>
          <li>Hobbies (only if relevant)</li>
        </ul>

        <p className="mb-8">
          Remember, your resume is your first impression. Make it count by presenting yourself as a confident and qualified candidate. Good luck!
        </p>
      </div>

      <Footer />
    </>
  );
};

export default ResumeTips;
