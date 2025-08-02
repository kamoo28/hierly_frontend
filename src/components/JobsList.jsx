// import { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const JobsList = ({
//   actionLoading,
//   jobs,
//   onApply,
//   onDelete,
//   setSelectedJob,
// }) => {
//   const navigate = useNavigate();

//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const isRecruiter = useSelector((state) => state.auth.isRecruiter);
//   const userData = useSelector((state) => state.auth.userData);

//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate("/");
//     }
//   }, [isAuthenticated, navigate]);

//   const handleApplyClick = (job) => {
//     setSelectedJob(job);
//     onApply();
//   };

//   const handleDeleteClick = (job) => {
//     onDelete(job);
//   };

//   return (
//     <div className="text-white">
//       <h1 className="text-2xl font-bold">Available Jobs</h1>

//       {isRecruiter && (
//         <div className="my-6">
//           <button
//             onClick={() => navigate("/postjob")}
//             className="py-3 px-8 bg-green-600 hover:opacity-70 rounded-lg text-white text-lg font-bold transition-opacity"
//           >
//             + Post New Job
//           </button>
//         </div>
//       )}

//       <div className="my-6 flex flex-col gap-6">
//         {jobs.map((job) => (
//           <div
//             key={job.id}
//             className="my-4 p-4 flex justify-between items-center gap-4 border rounded-lg"
//           >
//             <div>
//               <h2 className="text-xl font-semibold">{job.position}</h2>
//               <p className="opacity-80 mb-4">
//                 {job.experience} of Experience required
//               </p>

//               <h2 className="font-semibold">{job.company}</h2>
//               <p className="opacity-80">{job.location}</p>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               {job.skills.map((item, idx) => (
//                 <span
//                   key={idx}
//                   className="mr-2 py-1 px-2 bg-slate-700 text-xs border rounded-md"
//                 >
//                   {item}
//                 </span>
//               ))}
//             </div>

//             {isRecruiter && userData.jobIds.includes(job.id) ? (
//               <div>
//                 <button
//                   onClick={() => handleDeleteClick(job)}
//                   disabled={actionLoading}
//                   className={`py-4 px-8 bg-red-600 hover:opacity-70 rounded-lg text-white text-lg font-semibold transition-opacity ${
//                     actionLoading && "opacity-30 hover:opacity-40"
//                   }`}
//                 >
//                   Delete
//                 </button>
//               </div>
//             ) : (
//               <div>
//                 <button
//                   onClick={() => handleApplyClick(job)}
//                   disabled={isRecruiter}
//                   className={`py-4 px-8 bg-green-600 hover:opacity-70 rounded-lg text-white text-lg font-semibold transition-opacity ${
//                     isRecruiter && "opacity-30 hover:opacity-40"
//                   }`}
//                 >
//                   Apply
//                 </button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default JobsList;

// ui by chetna 

// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { FaMapMarkerAlt, FaBriefcase, FaBuilding, FaSearch } from "react-icons/fa";
// import toast from "react-hot-toast";

// const JobsList = ({
//   actionLoading,
//   jobs,
//   onApply,
//   onDelete,
//   setSelectedJob,
// }) => {
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState("");

//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const isRecruiter = useSelector((state) => state.auth.isRecruiter);
//   const userData = useSelector((state) => state.auth.userData);

//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate("/");
//     }
//   }, [isAuthenticated, navigate]);

//   const handleApplyClick = (job) => {
//     try {
//       setSelectedJob(job);
//       onApply(); // Assume this runs successfully
//       toast.success("✅ Application submitted successfully!");
//     } catch (error) {
//       toast.error("❌ Failed to apply. Please try again.");
//     }
//   };

//   const handleDeleteClick = (job) => {
//     onDelete(job);
//   };

//   const filteredJobs = jobs.filter((job) =>
//     [job.position, job.company, job.experience, job.location, ...(job.skills || [])]
//       .join(" ")
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="bg-slate-500 min-h-screen p-6 text-white">
//       <div className="flex items-center justify-between flex-wrap mb-6">
//         <h1 className="text-3xl font-bold mb-4">🚀 Available Jobs</h1>

//         {isRecruiter && (
//           <button
//             onClick={() => navigate("/postjob")}
//             className="py-2 px-6 bg-green-600 hover:bg-green-700 rounded-lg text-white text-lg font-bold"
//           >
//             + Post New Job
//           </button>
//         )}
//       </div>

//       {/* Search Bar */}
//       <div className="flex items-center gap-2 mb-6 bg-slate-800 rounded-lg p-3 shadow-lg">
//         <FaSearch className="text-xl text-gray-400" />
//         <input
//           type="text"
//           placeholder="Search by title, company, location, skills..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full bg-transparent focus:outline-none text-white placeholder-gray-400"
//         />
//       </div>

//       <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//         {filteredJobs.length > 0 ? (
//           filteredJobs.map((job) => (
//             <div
//               key={job.id}
//               className="bg-slate-800 p-5 rounded-xl shadow-md hover:shadow-lg transition-all border border-slate-700 flex flex-col justify-between h-full"
//             >
//               <div>
//                 <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
//                   <FaBriefcase /> {job.position}
//                 </h2>
//                 <p className="mb-1 text-gray-300 flex items-center gap-2">
//                   <FaBuilding /> {job.company}
//                 </p>
//                 <p className="mb-1 text-gray-400 flex items-center gap-2">
//                   <FaMapMarkerAlt /> {job.location}
//                 </p>
//                 <p className="text-sm text-yellow-400">{job.experience} experience required</p>
//               </div>

//               <div className="flex flex-wrap gap-2 mt-4">
//                 {job.skills.map((skill, idx) => (
//                   <span
//                     key={idx}
//                     className="bg-slate-700 text-xs text-white px-2 py-1 rounded-md border border-slate-600"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>

//               <div className="mt-6">
//                 {isRecruiter && userData.jobIds.includes(job.id) ? (
//                   <button
//                     onClick={() => handleDeleteClick(job)}
//                     disabled={actionLoading}
//                     className={`w-full py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold transition-opacity ${
//                       actionLoading && "opacity-40 cursor-not-allowed"
//                     }`}
//                   >
//                     Delete
//                   </button>
//                 ) : (
//                   <button
//                     onClick={() => handleApplyClick(job)}
//                     disabled={isRecruiter}
//                     className={`w-full py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white font-semibold transition-opacity ${
//                       isRecruiter && "opacity-30 cursor-not-allowed"
//                     }`}
//                   >
//                     Apply
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-gray-400 col-span-full">No jobs found matching your search.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default JobsList;


import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaBriefcase, FaBuilding, FaSearch } from "react-icons/fa";
import toast from "react-hot-toast";
import { confirmAlert } from "react-confirm-alert"; // ✅ added as per request
import "react-confirm-alert/src/react-confirm-alert.css"; // ✅ import default styles

const JobsList = ({
  actionLoading,
  jobs,
  onApply,
  onDelete,
  setSelectedJob,
}) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isRecruiter = useSelector((state) => state.auth.isRecruiter);
  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleApplyClick = (job) => {
    try {
      setSelectedJob(job);
      onApply();
      toast.success("✅ Application submitted successfully!");
    } catch (error) {
      toast.error("❌ Failed to apply. Please try again.");
    }
  };

  const handleDeleteClick = (job) => {
    confirmAlert({
      title: "Confirm Deletion",
      message: "Are you sure you want to delete this job?",
      buttons: [
        {
          label: "Yes",
          onClick: () => onDelete(job),
        },
        {
          label: "No",
        },
      ],
    });
  };

  const filteredJobs = jobs.filter((job) =>
    [job.position, job.company, job.experience, job.location, ...(job.skills || [])]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-slate-500 min-h-screen p-6 text-white">
      <div className="flex items-center justify-between flex-wrap mb-6">
        <h1 className="text-3xl font-bold mb-4">🚀 Available Jobs</h1>

        {isRecruiter && (
          <button
            onClick={() => navigate("/postjob")}
            className="py-2 px-6 bg-green-600 hover:bg-green-700 rounded-lg text-white text-lg font-bold"
          >
            + Post New Job
          </button>
        )}
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-2 mb-6 bg-slate-800 rounded-lg p-3 shadow-lg">
        <FaSearch className="text-xl text-gray-400" />
        <input
          type="text"
          placeholder="Search by title, company, location, skills..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-transparent focus:outline-none text-white placeholder-gray-400"
        />
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-slate-800 p-5 rounded-xl shadow-md hover:shadow-lg transition-all border border-slate-700 flex flex-col justify-between h-full"
            >
              <div>
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <FaBriefcase /> {job.position}
                </h2>
                <p className="mb-1 text-gray-300 flex items-center gap-2">
                  <FaBuilding /> {job.company}
                </p>
                <p className="mb-1 text-gray-400 flex items-center gap-2">
                  <FaMapMarkerAlt /> {job.location}
                </p>
                <p className="text-sm text-yellow-400">{job.experience} experience required</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {job.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-700 text-xs text-white px-2 py-1 rounded-md border border-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                {isRecruiter && userData.jobIds.includes(job.id) ? (
                  <button
                    onClick={() => handleDeleteClick(job)}
                    disabled={actionLoading}
                    className={`w-full py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold transition-opacity ${
                      actionLoading && "opacity-40 cursor-not-allowed"
                    }`}
                  >
                    Delete
                  </button>
                ) : (
                  <button
                    onClick={() => handleApplyClick(job)}
                    disabled={isRecruiter}
                    className={`w-full py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white font-semibold transition-opacity ${
                      isRecruiter && "opacity-30 cursor-not-allowed"
                    }`}
                  >
                    Apply
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full">No jobs found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default JobsList;
