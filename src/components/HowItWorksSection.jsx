import React from "react";
import { Search, Briefcase, Building } from "lucide-react";

const steps = [
  {
    icon: <Search className="h-8 w-8 text-blue-600" />,
    title: "Search Jobs",
    description: "Browse thousands of full-time & part-time jobs near you.",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-blue-600" />,
    title: "Apply Instantly",
    description: "Submit your resume & application with a single click.",
  },
  {
    icon: <Building className="h-8 w-8 text-blue-600" />,
    title: "Get Hired",
    description: "Connect with employers and land your dream job quickly.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-gradient-to-br from-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We've simplified the job search process to help you land your dream job
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 lg:p-8 rounded-full shadow-lg group-hover:shadow-xl group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-500">
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
              </div>
              <h3 className="mt-8 text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{step.title}</h3>
              <p className="mt-4 text-base lg:text-lg text-gray-600 leading-relaxed max-w-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
