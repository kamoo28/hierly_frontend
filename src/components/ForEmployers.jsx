import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const ForEmployers = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/register/recruiter");
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-blue-800">For Employers</h2>
            <p className="mt-4 text-lg text-gray-600">
              Hire top talent easily. Post jobs, manage applications, and build your team with ease.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Post jobs and reach thousands of candidates",
                "Access a qualified candidate database",
                "Streamline your recruitment process",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="text-blue-600 w-6 h-6 mt-1" />
                  <span className="ml-3 text-base text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <button
                onClick={handleSignUp}
                className="inline-flex items-center px-6 py-3 bg-blue-700 text-white text-base font-semibold rounded-md shadow hover:bg-blue-800 transition"
              >
                Sign Up as Employer
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="hidden md:block">
            <img
              src="https://images.pexels.com/photos/3205568/pexels-photo-3205568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Recruitment team"
              className="rounded-2xl shadow-xl object-cover w-full h-full max-h-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForEmployers;
