import React from "react";
import { Search, Briefcase, Building, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: <Search className="h-8 w-8 text-blue-600" />,
    title: "Search Jobs",
    description: "Browse thousands of full-time & part-time jobs near you.",
    color: "from-blue-100 to-blue-200",
    hoverColor: "group-hover:from-blue-200 group-hover:to-blue-300"
  },
  {
    icon: <Briefcase className="h-8 w-8 text-purple-600" />,
    title: "Apply Instantly",
    description: "Submit your resume & application with a single click.",
    color: "from-purple-100 to-purple-200",
    hoverColor: "group-hover:from-purple-200 group-hover:to-purple-300"
  },
  {
    icon: <Building className="h-8 w-8 text-green-600" />,
    title: "Get Hired",
    description: "Connect with employers and land your dream job quickly.",
    color: "from-green-100 to-green-200",
    hoverColor: "group-hover:from-green-200 group-hover:to-green-300"
  },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-gradient-to-br from-white to-gray-50 py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/20 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-semibold">
            ⚡ Simple Process
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We've simplified the job search process to help you land your dream job in just three easy steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-500">
              {/* Step Number */}
              <div className="relative mb-6">
                <div className={`bg-gradient-to-br ${step.color} ${step.hoverColor} p-6 lg:p-8 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-500`}>
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                  {index + 1}
                </div>
              </div>

              <h3 className="mt-4 text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-4">
                {step.title}
              </h3>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-sm group-hover:text-gray-800 transition-colors duration-300">
                {step.description}
              </p>

              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">Join thousands of job seekers who found their perfect match</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = '/register/candidate'}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Start Job Search
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button
                onClick={() => window.location.href = '/register/recruiter'}
                className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Post a Job
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;