import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, ArrowRight, Users, Target, Zap } from "lucide-react";

const ForEmployers = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/register/recruiter");
  };

  const features = [
    {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      text: "Post jobs and reach thousands of qualified candidates"
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      text: "Access a curated database of top talent"
    },
    {
      icon: <Zap className="w-6 h-6 text-green-600" />,
      text: "Streamline your recruitment process with smart tools"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-white py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 rounded-full text-sm font-semibold">
              🏢 For Employers
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hire Top <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Talent</span> Easily
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed mb-10">
              Transform your hiring process with our powerful platform. Connect with qualified candidates, manage applications efficiently, and build your dream team faster than ever.
            </p>

            <ul className="space-y-6 mb-12">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-white p-2 rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <span className="text-base lg:text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300 leading-relaxed">
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleSignUp}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-bold rounded-xl shadow-lg hover:from-purple-700 hover:to-blue-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Hiring Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button
                onClick={() => navigate("/about")}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-purple-600 text-purple-600 text-lg font-bold rounded-xl hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3205568/pexels-photo-3205568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Recruitment team"
                className="rounded-2xl shadow-2xl object-cover w-full h-[400px] lg:h-[600px] transform hover:scale-105 transition-transform duration-500"
              />
              
              {/* Floating stats */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-xl animate-bounce">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold">5000+ Active Recruiters</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl animate-bounce" style={{animationDelay: '1s'}}>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold">95% Success Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForEmployers;