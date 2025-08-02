import React from "react";

const StatsSection = () => {
  const stats = [
    { value: "10k+", label: "Active Jobs" },
    { value: "8k+", label: "Companies" },
    { value: "15M+", label: "Candidates" },
    { value: "20k+", label: "Placements" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-extrabold text-blue-600">{stat.value}</div>
              <div className="mt-2 text-base text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
