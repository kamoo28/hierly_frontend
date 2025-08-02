// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { MapPin, Building2, Briefcase, BadgeCheck } from "lucide-react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const FeaturedJobsSection = () => {
//   const [jobs, setJobs] = useState([]);
//   const navigate = useNavigate();

//   // Dummy check for login (replace with your actual auth logic)
//   const isLoggedIn = false; // change based on your app context

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const res = await fetch("http://localhost:8080/api/v1/jobs");
//         const data = await res.json();
//         setJobs(data.slice(0, 6)); // limit to 6
//       } catch (err) {
//         console.error("Error fetching jobs:", err);
//       }
//     };

//     fetchJobs();
//   }, []);

//   const handleProtectedNavigation = (e, path) => {
//     e.preventDefault();
//     if (!isLoggedIn) {
//       toast.error("Oops! You haven’t logged in. Please login to proceed.");
//     } else {
//       navigate(path);
//     }
//   };

//   return (
//     <section className="bg-[#f9f9f9] py-16">
//       <ToastContainer position="top-right" autoClose={3000} />
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-gray-900">Featured Jobs</h2>
//           <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
//             Explore top job openings from leading companies hiring now
//           </p>
//         </div>

//         {/* Jobs Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {jobs.map((job, idx) => (
//             <div
//               key={idx}
//               className="bg-white border border-gray-100 hover:border-blue-500 shadow-md hover:shadow-xl rounded-xl p-6 transition-all duration-300 transform hover:scale-[1.03]"
//             >
//               <h3 className="text-xl font-semibold text-blue-700">
//                 {job.position}
//               </h3>
//               <div className="mt-2 flex items-center text-gray-600 text-sm">
//                 <Building2 className="w-4 h-4 mr-1" />
//                 {job.company}
//               </div>
//               <div className="mt-1 flex items-center text-gray-600 text-sm">
//                 <MapPin className="w-4 h-4 mr-1" />
//                 {job.location}
//               </div>
//               <div className="mt-1 flex items-center text-gray-600 text-sm">
//                 <Briefcase className="w-4 h-4 mr-1" />
//                 {job.experience}
//               </div>

//               {/* Description */}
//               <div className="mt-4">
//                 <p className="text-gray-700 text-sm">{job.description}</p>
//               </div>

//               {/* Skills */}
//               <div className="mt-4 flex flex-wrap gap-2">
//                 {job.skills.map((skill, index) => (
//                   <span
//                     key={index}
//                     className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1"
//                   >
//                     <BadgeCheck className="w-3 h-3" /> {skill}
//                   </span>
//                 ))}
//               </div>

//               {/* View Button */}
//               <div className="mt-6">
//                 <button
//                   onClick={(e) => handleProtectedNavigation(e, "/jobs")}
//                   className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition"
//                 >
//                   View Details
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View All Button */}
//         <div className="mt-12 text-center">
//           <button
//             onClick={(e) => handleProtectedNavigation(e, "/jobs")}
//             className="inline-flex items-center px-6 py-3 text-base font-semibold rounded-md text-white bg-blue-700 hover:bg-blue-800 transition-colors"
//           >
//             View All Jobs
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedJobsSection;


// ui by chetan 

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Building2, Briefcase, BadgeCheck } from "lucide-react";
import { toast } from "react-hot-toast";

const FeaturedJobsSection = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  const isLoggedIn = false; // Change this with actual auth state

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // const res = await fetch("api/v1/jobs"); deployment
        const res = await fetch(`${baseURL}/api/v1/jobs`);
        
        const data = await res.json();
        setJobs(data.slice(0, 3)); // Show only 3 jobs
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  const handleRedirectWithToast = () => {
    if (!isLoggedIn) {
      toast.error("Please login to proceed!", {
        icon: "🔒",
        style: {
          border: "1px solid #2563eb",
          padding: "10px",
          color: "#1e3a8a",
        },
      });
      navigate("/login/candidate");
    }
  };

  return (
    <section className="bg-[#f5f7fa] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Featured Jobs</h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore top job openings from leading companies hiring now
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-blue-200 hover:border-blue-600 shadow-lg hover:shadow-xl rounded-xl p-6 transition-all duration-300 transform hover:scale-[1.03]"
            >
              <h3 className="text-xl font-bold text-blue-800">{job.position}</h3>
              <div className="mt-2 flex items-center text-gray-700 text-sm">
                <Building2 className="w-4 h-4 mr-1" />
                {job.company}
              </div>
              <div className="mt-1 flex items-center text-gray-700 text-sm">
                <MapPin className="w-4 h-4 mr-1" />
                {job.location}
              </div>
              <div className="mt-1 flex items-center text-gray-700 text-sm">
                <Briefcase className="w-4 h-4 mr-1" />
                {job.experience}
              </div>
              <div className="mt-4 text-sm text-gray-600">
                {job.description?.slice(0, 80)}...
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.skills?.slice(0, 3).map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1"
                  >
                    <BadgeCheck className="w-3 h-3" /> {skill}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <button
                  onClick={handleRedirectWithToast}
                  className="inline-block px-4 py-2 bg-blue-700 text-white rounded-md text-sm font-semibold hover:bg-blue-800 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={handleRedirectWithToast}
            className="inline-flex items-center px-6 py-3 text-base font-bold rounded-md text-white bg-blue-700 hover:bg-blue-800 transition-colors"
          >
            View All Jobs
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobsSection;
