// import { useEffect, useState } from "react";
// import axios from "axios";
// import Footer from "../components/Footer";
// const BrowseJobs = () => {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const res = await axios.get("http://localhost:8080/api/v1/jobs");
//         setJobs(res.data);
//       } catch (err) {
//         console.error("Error fetching jobs:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobs();
//   }, []);

//   return (
    
//     <><div className="max-w-7xl mx-auto px-4 py-20">
//       <h1 className="text-3xl font-bold mb-8 text-purple-800">Browse Jobs</h1>

//       {loading ? (
//         <p>Loading jobs...</p>
//       ) : jobs.length === 0 ? (
//         <p>No jobs available.</p>
//       ) : (
//         <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {jobs.map((job, index) => (
//             <div key={index} className="border rounded-lg p-5 shadow-sm bg-white hover:shadow-lg transition">
//               <h2 className="text-xl font-semibold text-gray-900">{job.position}</h2>
//               <p className="text-sm text-gray-600">{job.company} — {job.location}</p>
//               <p className="text-sm mt-1 text-gray-500">Experience: {job.experience}</p>
//               <p className="mt-2 text-gray-700 text-sm">{job.description}</p>
//               <div className="mt-3 flex flex-wrap gap-2">
//                 {job.skills.map((skill, i) => (
//                   <span
//                     key={i}
//                     className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div><Footer /></>
     
//   );
 
  
// };

// export default BrowseJobs;


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MapPin, Building2, Briefcase, BadgeCheck } from "lucide-react";
import { toast } from "react-hot-toast";
import Footer from "../components/Footer";

const BrowseJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // const res = await axios.get("https://hrly-production.up.railway.app/api/v1/jobs"); //deployument
        
        const res = await axios.get(`${baseURL}/api/v1/jobs`); //deployument

        setJobs(res.data);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleRedirectWithToast = () => {
    toast.error("Please login to proceed!", {
      icon: "🔒",
      style: {
        border: "1px solid #7c3aed",
        padding: "10px",
        color: "#5b21b6",
      },
    });
    navigate("/login/candidate");
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-purple-800 text-center mb-12">Browse Jobs</h1>

        {loading ? (
          <p className="text-center text-lg text-gray-600">Loading jobs...</p>
        ) : jobs.length === 0 ? (
          <p className="text-center text-lg text-gray-600">No jobs available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white border-2 border-purple-200 hover:border-purple-600 shadow-lg hover:shadow-xl rounded-xl p-6 transition-all duration-300 transform hover:scale-[1.03]"
              >
                <h2 className="text-xl font-bold text-purple-800">{job.position}</h2>

                <div className="mt-2 flex items-center text-gray-700 text-sm">
                  <Building2 className="w-4 h-4 mr-1" /> {job.company}
                </div>
                <div className="mt-1 flex items-center text-gray-700 text-sm">
                  <MapPin className="w-4 h-4 mr-1" /> {job.location}
                </div>
                <div className="mt-1 flex items-center text-gray-700 text-sm">
                  <Briefcase className="w-4 h-4 mr-1" /> {job.experience}
                </div>

                <p className="mt-4 text-sm text-gray-600">
                  {job.description?.slice(0, 100)}...
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {job.skills?.slice(0, 3).map((skill, i) => (
                    <span
                      key={i}
                      className="bg-purple-100 text-purple-700 text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1"
                    >
                      <BadgeCheck className="w-3 h-3" /> {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <button
                    onClick={handleRedirectWithToast}
                    className="inline-block px-4 py-2 bg-purple-700 text-white rounded-md text-sm font-semibold hover:bg-purple-800 transition"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default BrowseJobs;
