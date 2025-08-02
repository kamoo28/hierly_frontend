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
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We've simplified the job search process to help you land your dream job
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full">{step.icon}</div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-base text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
