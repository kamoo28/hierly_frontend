import React from "react";
import { Briefcase, Building, Users, Award } from "lucide-react";

const StatsSection = () => {
  const stats = [
    { 
      value: "10k+", 
      label: "Active Jobs",
      icon: <Briefcase className="w-8 h-8 text-white" />,
      color: "from-blue-500 to-blue-600"
    },
    { 
      value: "8k+", 
      label: "Companies",
      icon: <Building className="w-8 h-8 text-white" />,
      color: "from-purple-500 to-purple-600"
    },
    { 
      value: "15M+", 
      label: "Candidates",
      icon: <Users className="w-8 h-8 text-white" />,
      color: "from-pink-500 to-pink-600"
    },
    { 
      value: "20k+", 
      label: "Placements",
      icon: <Award className="w-8 h-8 text-white" />,
      color: "from-green-500 to-green-600"
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Trusted by Millions
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
            Join the largest job platform connecting talent with opportunity
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-110 transition-all duration-500"
            >
              <div className="flex flex-col items-center">
                <div className={`bg-gradient-to-r ${stat.color} p-4 rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300 mb-4`}>
                  {stat.icon}
                </div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-base sm:text-lg lg:text-xl text-blue-100 font-semibold group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Our Community?</h3>
            <p className="text-blue-100 mb-6">Start your journey with thousands of successful professionals</p>
            <button
              onClick={() => window.location.href = '/register/candidate'}
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Started Now
              <Briefcase className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;