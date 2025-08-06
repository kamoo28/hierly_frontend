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
//       toast.error("Oops! You haven't logged in. Please login to proceed.");
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
import { MapPin, Building2, Briefcase, BadgeCheck, ArrowRight } from "lucide-react";
import { toast } from "react-hot-toast";

const FeaturedJobsSection = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  const isLoggedIn = false; // Change this with actual auth state

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        if (!apiUrl || apiUrl === "Backend url") {
          console.warn("API URL not configured, using mock data");
          setJobs([]);
          return;
        }
        
        const res = await fetch(`${apiUrl}/api/v1/jobs`);
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Response is not JSON");
        }
        
        const data = await res.json();
        setJobs(data.slice(0, 3)); // Show only 3 jobs
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
        // Set empty array on error to prevent UI issues
        setJobs([]);
      }
    };
    fetchJobs();
  }, []);

  const handleRedirectWithToast = () => {
    if (!isLoggedIn) {
      toast.error("Please login to browse jobs!", {
        icon: "🔒",
        style: {
          border: "1px solid #3b82f6",
          padding: "12px",
          color: "#1e40af",
          borderRadius: "12px",
        },
      });
      navigate("/login/candidate");
    }
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">Featured Jobs</h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore top job openings from leading companies hiring now
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 hover:border-blue-500 shadow-lg hover:shadow-2xl rounded-2xl p-6 lg:p-8 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group"
            >
              <h3 className="text-xl lg:text-2xl font-bold text-blue-800 group-hover:text-blue-600 transition-colors duration-300">{job.position}</h3>
              <div className="mt-3 flex items-center text-gray-700 text-sm lg:text-base">
                <Building2 className="w-4 h-4 mr-1" />
                {job.company}
              </div>
              <div className="mt-2 flex items-center text-gray-700 text-sm lg:text-base">
                <MapPin className="w-4 h-4 mr-1" />
                {job.location}
              </div>
              <div className="mt-2 flex items-center text-gray-700 text-sm lg:text-base">
                <Briefcase className="w-4 h-4 mr-1" />
                {job.experience}
              </div>
              <div className="mt-4 text-sm lg:text-base text-gray-600 leading-relaxed">
                {job.description?.slice(0, 80)}...
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {job.skills?.slice(0, 3).map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 hover:from-blue-200 hover:to-purple-200 transition-all duration-300"
                  >
                    <BadgeCheck className="w-3 h-3" /> {skill}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <button
                  onClick={handleRedirectWithToast}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-sm font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 group"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={handleRedirectWithToast}
            className="inline-flex items-center px-8 py-4 text-lg font-bold rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View All Jobs
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobsSection;