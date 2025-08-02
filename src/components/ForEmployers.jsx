import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const ForEmployers = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/register/recruiter");
  };

  return (
    <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-800 mb-6">For Employers</h2>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
              Hire top talent easily. Post jobs, manage applications, and build your team with ease.
            </p>

            <ul className="mt-10 space-y-6">
              {[
                "Post jobs and reach thousands of candidates",
                "Access a qualified candidate database",
                "Streamline your recruitment process",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start group">
                  <CheckCircle className="text-blue-600 w-6 h-6 mt-1 group-hover:text-green-600 transition-colors duration-300" />
                  <span className="ml-4 text-base lg:text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <button
                onClick={handleSignUp}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-bold rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Sign Up as Employer
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="hidden lg:block">
            <img
              src="https://images.pexels.com/photos/3205568/pexels-photo-3205568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Recruitment team"
              className="rounded-2xl shadow-2xl object-cover w-full h-[500px] lg:h-[600px] transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForEmployers;
