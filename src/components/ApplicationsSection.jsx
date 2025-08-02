// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

// import api from "../api/axiosConfig";
// import CheckIcon from "./Icons/CheckIcon";
// import CrossIcon from "./Icons/CrossIcon";

// const ApplicationsSection = () => {
//   const isRecruiter = useSelector((state) => state.auth.isRecruiter);
//   const userData = useSelector((state) => state.auth.userData);

//   const [isLoading, setIsLoading] = useState(false);
//   const [actionLoading, setActionLoading] = useState(false);

//   const [applications, setApplications] = useState([]);
//   const [pendingApplications, setPendingApplications] = useState([]);
//   const [acceptedApplications, setAcceptedApplications] = useState([]);
//   const [rejectedApplications, setRejectedApplications] = useState([]);

//   useEffect(() => {
//     const fetchApplications = async () => {
//       setIsLoading(true);

//       const applicationsResponse = await api.get("/api/v1/applications");
//       const jobsResponse = await api.get("/api/v1/jobs");

//       const applicationsData = applicationsResponse.data;
//       const jobsData = jobsResponse.data;

//       if (isRecruiter) {
//         const recruiterApplications = applicationsData.filter((application) =>
//           userData?.jobIds.includes(application.jobId)
//         );

//         const formattedApplications = recruiterApplications.map(
//           (application) => {
//             const jobInfo = jobsData.find(
//               (job) => job.id === application.jobId
//             );
//             return {
//               ...application,
//               position: jobInfo?.position || null,
//             };
//           }
//         );

//         setApplications(formattedApplications);

//         setPendingApplications(
//           formattedApplications.filter((item) => item.status === "Pending")
//         );
//         setAcceptedApplications(
//           formattedApplications.filter((item) => item.status === "Accepted")
//         );
//         setRejectedApplications(
//           formattedApplications.filter((item) => item.status === "Rejected")
//         );
//       } else {
//         const candidateApplications = applicationsData.filter(
//           (item) => item.email === userData?.email
//         );

//         const formattedApplications = candidateApplications.map(
//           (application) => {
//             const jobInfo = jobsData.find(
//               (job) => job.id === application.jobId
//             );
//             return {
//               ...application,
//               position: jobInfo?.position || null,
//               company: jobInfo?.company || null,
//               location: jobInfo?.location || null,
//             };
//           }
//         );

//         setApplications(formattedApplications);
//       }

//       setIsLoading(false);
//     };

//     fetchApplications();
//   }, [isRecruiter, userData]);

//   const acceptApplication = async (item) => {
//     setActionLoading(true);

//     try {
//       const response = await api.post(
//         `/api/v1/applications/${item.id}`,
//         "Accepted"
//       );

//       if (response.status === 200) {
//         setPendingApplications(
//           pendingApplications.filter(
//             (application) => application.id !== item.id
//           )
//         );

//         setAcceptedApplications(acceptedApplications.concat(item));
//         setActionLoading(false);
//       }
//     } catch (error) {
//       console.log(error);
//       setActionLoading(false);
//     }
//   };

//   const rejectApplication = async (item) => {
//     setActionLoading(true);

//     try {
//       const response = await api.post(
//         `/api/v1/applications/${item.id}`,
//         "Rejected"
//       );

//       if (response.status === 200) {
//         setPendingApplications(
//           pendingApplications.filter(
//             (application) => application.id !== item.id
//           )
//         );

//         setRejectedApplications(rejectedApplications.concat(item));
//         setActionLoading(false);
//       }
//     } catch (error) {
//       console.log(error);
//       setActionLoading(false);
//     }
//   };

//   const renderCandidateApplicationDetailsLeftSide = (item) => {
//     return (
//       <div className="p-6 w-4/5">
//         <div className="mb-6">
//           <p className="font-semibold">
//             {item.name}{" "}
//             <span className="ml-10 text-sm opacity-80">
//               {item.qualification}
//             </span>
//           </p>
//           <p>{item.position}</p>
//         </div>
//         <div>
//           <p className="opacity-80">{item.email}</p>
//           <p className="opacity-80">{item.phone}</p>

//           <p className="my-4">
//             {item.skills.map((skill, idx) => (
//               <span
//                 key={idx}
//                 className="mr-2 py-1 px-2 bg-slate-700 text-xs border rounded-md"
//               >
//                 {skill}
//               </span>
//             ))}
//           </p>

//           <a href={item.resumeLink} target="_blank" className="underline">
//             Resume
//           </a>
//         </div>
//       </div>
//     );
//   };

//   const renderPendingApplications = () => {
//     return (
//       <div>
//         <h2 className="text-white text-2xl font-bold">Pending Applications</h2>

//         <div className="my-8 flex flex-col gap-6 text-white">
//           {isLoading ? (
//             <div>
//               <p className="my-10 text-lg font-semibold">Loading...</p>
//             </div>
//           ) : pendingApplications.length > 0 ? (
//             pendingApplications.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex justify-between divide-x-2 border rounded-lg"
//               >
//                 {renderCandidateApplicationDetailsLeftSide(item)}

//                 <div className="px-6 w-1/5 flex flex-col flex-grow justify-evenly items-center text-white">
//                   <button
//                     onClick={() => acceptApplication(item)}
//                     disabled={actionLoading}
//                     className={`py-3 px-8 flex flex-col items-center justify-center bg-green-600 hover:opacity-70 rounded-lg text-white font-semibold transition-opacity ${
//                       actionLoading && "opacity-30 hover:opacity-40"
//                     }`}
//                   >
//                     Accept
//                     <CheckIcon width="1.5em" height="1.5em" />
//                   </button>
//                   <button
//                     onClick={() => rejectApplication(item)}
//                     disabled={actionLoading}
//                     className={`py-3 px-8 flex flex-col items-center justify-center bg-red-600 hover:opacity-70 rounded-lg text-white font-semibold transition-opacity ${
//                       actionLoading && "opacity-30 hover:opacity-40"
//                     }`}
//                   >
//                     Reject
//                     <CrossIcon width="1.5em" height="1.5em" />
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div>
//               <p className="my-10 text-lg font-semibold">
//                 No pending applications
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   };

//   const renderAcceptedApplications = () => {
//     return (
//       <div className="mt-16">
//         <h2 className="text-white text-2xl font-bold">Accepted Applications</h2>

//         <div className="my-8 flex flex-col gap-6 text-white">
//           {isLoading ? (
//             <div>
//               <p className="my-10 text-lg font-semibold">Loading...</p>
//             </div>
//           ) : (
//             acceptedApplications.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex justify-between divide-x-2 border border-green-500 rounded-lg"
//               >
//                 {renderCandidateApplicationDetailsLeftSide(item)}

//                 <div className="px-6 w-1/5 flex flex-col flex-grow justify-evenly items-center text-white">
//                   <p className="text-green-500 font-bold text-lg">Accepted</p>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     );
//   };

//   const renderRejectedApplications = () => {
//     return (
//       <div className="mt-16">
//         <h2 className="text-white text-2xl font-bold">Rejected Applications</h2>

//         <div className="my-8 flex flex-col gap-6 text-white">
//           {isLoading ? (
//             <div>
//               <p className="my-10 text-lg font-semibold">Loading...</p>
//             </div>
//           ) : (
//             rejectedApplications.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex justify-between divide-x-2 border border-red-500 rounded-lg"
//               >
//                 {renderCandidateApplicationDetailsLeftSide(item)}

//                 <div className="px-6 w-1/5 flex flex-col flex-grow justify-evenly items-center text-white">
//                   <p className="text-red-500 font-bold text-lg">Rejected</p>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     );
//   };

//   if (isRecruiter) {
//     return (
//       <div className="my-10">
//         {renderPendingApplications()}

//         {acceptedApplications.length > 0 && renderAcceptedApplications()}
//         {rejectedApplications.length > 0 && renderRejectedApplications()}
//       </div>
//     );
//   }

//   return (
//     <div className="my-10">
//       <h2 className="text-white text-2xl font-bold">Your Applications</h2>

//       <div className="p-4 my-4 border rounded-lg text-white">
//         <div className="flex flex-col gap-2 divide-y divide-white/40">
//           {isLoading ? (
//             <div>
//               <p className="my-10 text-lg font-semibold">Loading...</p>
//             </div>
//           ) : applications.length > 0 ? (
//             applications.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex justify-between items-center py-3 px-4"
//               >
//                 <div>
//                   <p className="font-semibold">{item.position}</p>
//                   <p>
//                     {item.company}
//                     <span className="ml-4 text-sm opacity-80">
//                       @ {item.location}
//                     </span>
//                   </p>
//                 </div>
//                 <div>
//                   <p
//                     className={`${
//                       item.status === "Accepted"
//                         ? "text-green-500"
//                         : item.status === "Rejected" && "text-red-500"
//                     }`}
//                   >
//                     {item.status}
//                   </p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div>
//               <p>You have not applied to any jobs!</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ApplicationsSection;

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import api from "../api/axiosConfig";
import CheckIcon from "./Icons/CheckIcon";
import CrossIcon from "./Icons/CrossIcon";
import { FaMapMarkerAlt, FaBriefcase, FaFileAlt,  FaBuilding } from "react-icons/fa";


const ApplicationsSection = () => {
  const isRecruiter = useSelector((state) => state.auth.isRecruiter);
  const userData = useSelector((state) => state.auth.userData);

  const [isLoading, setIsLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);

  const [applications, setApplications] = useState([]);
  const [pendingApplications, setPendingApplications] = useState([]);
  const [acceptedApplications, setAcceptedApplications] = useState([]);
  const [rejectedApplications, setRejectedApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      setIsLoading(true);

      const applicationsResponse = await api.get("/api/v1/applications");
      const jobsResponse = await api.get("/api/v1/jobs");

      const applicationsData = applicationsResponse.data;
      const jobsData = jobsResponse.data;

      if (isRecruiter) {
        const recruiterApplications = applicationsData.filter((application) =>
          userData?.jobIds.includes(application.jobId)
        );

        const formattedApplications = recruiterApplications.map(
          (application) => {
            const jobInfo = jobsData.find(
              (job) => job.id === application.jobId
            );
            return {
              ...application,
              position: jobInfo?.position || null,
            };
          }
        );

        setApplications(formattedApplications);

        setPendingApplications(
          formattedApplications.filter((item) => item.status === "Pending")
        );
        setAcceptedApplications(
          formattedApplications.filter((item) => item.status === "Accepted")
        );
        setRejectedApplications(
          formattedApplications.filter((item) => item.status === "Rejected")
        );
      } else {
        const candidateApplications = applicationsData.filter(
          (item) => item.email === userData?.email
        );

        const formattedApplications = candidateApplications.map(
          (application) => {
            const jobInfo = jobsData.find(
              (job) => job.id === application.jobId
            );
            return {
              ...application,
              position: jobInfo?.position || null,
              company: jobInfo?.company || null,
              location: jobInfo?.location || null,
            };
          }
        );

        setApplications(formattedApplications);
      }

      setIsLoading(false);
    };

    fetchApplications();
  }, [isRecruiter, userData]);

  const acceptApplication = async (item) => {
    setActionLoading(true);

    try {
      const response = await api.post(
        `/api/v1/applications/${item.id}`,
        "Accepted"
      );

      if (response.status === 200) {
        setPendingApplications(
          pendingApplications.filter(
            (application) => application.id !== item.id
          )
        );

        setAcceptedApplications(acceptedApplications.concat(item));
        setActionLoading(false);
      }
    } catch (error) {
      console.log(error);
      setActionLoading(false);
    }
  };

  const rejectApplication = async (item) => {
    setActionLoading(true);

    try {
      const response = await api.post(
        `/api/v1/applications/${item.id}`,
        "Rejected"
      );

      if (response.status === 200) {
        setPendingApplications(
          pendingApplications.filter(
            (application) => application.id !== item.id
          )
        );

        setRejectedApplications(rejectedApplications.concat(item));
        setActionLoading(false);
      }
    } catch (error) {
      console.log(error);
      setActionLoading(false);
    }
  };

const renderCandidateApplicationDetailsLeftSide = (item) => {
  return (
    <div className="p-6 w-4/5">
      <div className="mb-6">
        <p className="font-semibold">
          {item.name}{" "}
          <span className="ml-10 text-sm opacity-80">{item.qualification}</span>
        </p>
        <p>{item.position}</p>
      </div>
      <div>
        <p className="opacity-80">{item.email}</p>
        <p className="opacity-80">{item.phone}</p>

        <p className="my-4">
          {item.skills.map((skill, idx) => (
            <span
              key={idx}
              className="mr-2 py-1 px-2 bg-slate-700 text-xs border rounded-md"
            >
              {skill}
            </span>
          ))}
        </p>

        {/* Location Icon */}
        <div className="flex items-center gap-2 my-2">
          <FaMapMarkerAlt />
          <p className="opacity-80">{item.location}</p>
        </div>

        {/* Company Icon */}
        <div className="flex items-center gap-2 my-2">
          <FaBriefcase />
          <p className="opacity-80">{item.company}</p>
        </div>

        {/* Resume Link Icon */}
        <div className="flex items-center gap-2 my-2">
          <FaFileAlt />
          <a href={item.resumeLink} target="_blank" className="underline">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};


const renderPendingApplications = () => {
  return (
    <div>
      <h2 className="text-black text-2xl font-bold">Pending Applications</h2>

      <div className="my-8 flex flex-col gap-6 text-black">
        {isLoading ? (
          <p className="my-10 text-lg font-semibold">Loading...</p>
        ) : pendingApplications.length > 0 ? (
          pendingApplications.map((item) => (
            <div
              key={item.id}
              className="border border-gray-600 rounded-2xl shadow-md bg-gray-50 p-6 flex flex-col gap-4"
            >
              {/* Row 1: Name & Email */}
              <div className="flex flex-col md:flex-row gap-4 justify-between">
                <div className="flex-1">
                  <p className="text-sm font-semibold">Name</p>
                  <p className="text-base">{item.name || "N/A"}</p>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold">Email</p>
                  <p className="text-base">{item.email || "N/A"}</p>
                </div>
              </div>
              <div className="border-t border-gray-400" />

              {/* Row 2: Phone & Qualification */}
              <div className="flex flex-col md:flex-row gap-4 justify-between">
                <div className="flex-1">
                  <p className="text-sm font-semibold">Phone</p>
                  <p className="text-base">{item.phone || "N/A"}</p>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold">Qualification</p>
                  <p className="text-base">{item.qualification || "N/A"}</p>
                </div>
              </div>
              <div className="border-t border-gray-400" />

              {/* Row 3: Skills */}
              <div>
                <p className="text-sm font-semibold">Skills</p>
                <p className="text-base">{item.skills?.join(", ") || "N/A"}</p>
              </div>
              <div className="border-t border-gray-400" />

              {/* Row 4: Resume & Status */}
              <div className="flex flex-col md:flex-row gap-4 justify-between">
                <div className="flex-1">
                  <p className="text-sm font-semibold">Resume</p>
                  <a
                    href={item.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    View Resume
                  </a>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold">Status</p>
                  <p className="text-base">{item.status || "Pending"}</p>
                </div>
              </div>

              {/* Row 5: Buttons */}
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => acceptApplication(item)}
                  disabled={actionLoading}
                  className="flex-1 py-2 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold transition-all"
                >
                  Accept
                </button>
                <button
                  onClick={() => rejectApplication(item)}
                  disabled={actionLoading}
                  className="flex-1 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold transition-all"
                >
                  Reject
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="my-10 text-lg font-semibold">No pending applications</p>
        )}
      </div>
    </div>
  );
};



const renderAcceptedApplications = () => {
  return (
    <div className="mt-16">
      <h2 className="text-black text-2xl font-bold">Accepted Applications</h2>

      <div className="my-8 flex flex-col gap-6 text-black">
        {isLoading ? (
          <p className="my-10 text-lg font-semibold">Loading...</p>
        ) : acceptedApplications.length > 0 ? (
          acceptedApplications.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row justify-between gap-6 border border-green-300 rounded-2xl shadow-md bg-gray-50 p-6"
            >
              {/* Left Content (Details) */}
              <div className="flex-1 flex flex-col gap-4">
                {/* Row 1: Name & Email */}
                <div className="flex flex-col md:flex-row gap-4 justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-semibold">Name</p>
                    <p className="text-base">{item.name || "N/A"}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">Email</p>
                    <p className="text-base">{item.email || "N/A"}</p>
                  </div>
                </div>
                <div className="border-t border-gray-400" />

                {/* Row 2: Phone & Qualification */}
                <div className="flex flex-col md:flex-row gap-4 justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-semibold">Phone</p>
                    <p className="text-base">{item.phone || "N/A"}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">Qualification</p>
                    <p className="text-base">{item.qualification || "N/A"}</p>
                  </div>
                </div>
                <div className="border-t border-gray-400" />

                {/* Row 3: Skills */}
                <div>
                  <p className="text-sm font-semibold">Skills</p>
                  <p className="text-base">{item.skills?.join(", ") || "N/A"}</p>
                </div>
                <div className="border-t border-gray-400" />

                {/* Row 4: Resume Link */}
                <div>
                  <p className="text-sm font-semibold">Resume</p>
                  <a
                    href={item.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    View Resume
                  </a>
                </div>
              </div>

              {/* Right Side: Status */}
              <div className="flex items-center justify-center md:w-[150px]">
                <p className="text-green-700 font-bold text-xl">✅ Accepted</p>
              </div>
            </div>
          ))
        ) : (
          <p className="my-10 text-lg font-semibold">No accepted applications</p>
        )}
      </div>
    </div>
  );
};


const renderRejectedApplications = () => {
  return (
    <div className="mt-16">
      <h2 className="text-black text-2xl font-bold">Rejected Applications</h2>

      <div className="my-8 flex flex-col gap-6 text-black">
        {isLoading ? (
          <p className="my-10 text-lg font-semibold">Loading...</p>
        ) : rejectedApplications.length > 0 ? (
          rejectedApplications.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row justify-between gap-6 border border-red-400 rounded-2xl shadow-md bg-gray-100 p-6"
            >
              {/* Left Side: Application Info */}
              <div className="flex-1 flex flex-col gap-4">
                {/* Name & Email */}
                <div className="flex flex-col md:flex-row gap-4 justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-semibold">Name</p>
                    <p className="text-base">{item.name || "N/A"}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">Email</p>
                    <p className="text-base">{item.email || "N/A"}</p>
                  </div>
                </div>
                <div className="border-t border-gray-400" />

                {/* Phone & Qualification */}
                <div className="flex flex-col md:flex-row gap-4 justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-semibold">Phone</p>
                    <p className="text-base">{item.phone || "N/A"}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">Qualification</p>
                    <p className="text-base">{item.qualification || "N/A"}</p>
                  </div>
                </div>
                <div className="border-t border-gray-400" />

                {/* Skills */}
                <div>
                  <p className="text-sm font-semibold">Skills</p>
                  <p className="text-base">{item.skills?.join(", ") || "N/A"}</p>
                </div>
                <div className="border-t border-gray-400" />

                {/* Resume */}
                <div>
                  <p className="text-sm font-semibold">Resume</p>
                  <a
                    href={item.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    View Resume
                  </a>
                </div>
              </div>

              {/* Right Side: Status */}
              <div className="flex items-center justify-center md:w-[150px]">
                <p className="text-red-600 font-bold text-xl">❌ Rejected</p>
              </div>
            </div>
          ))
        ) : (
          <p className="my-10 text-lg font-semibold">No rejected applications</p>
        )}
      </div>
    </div>
  );
};


  if (isRecruiter) {
    return (
      <div className="my-10">
        {renderPendingApplications()}

        {acceptedApplications.length > 0 && renderAcceptedApplications()}
        {rejectedApplications.length > 0 && renderRejectedApplications()}
      </div>
    );
  }

return (
  <div className="my-10">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Applications</h2>

    <div className="rounded-2xl border  border-gray-800 shadow-md bg-white">
      {isLoading ? (
        <div className="p-8 text-center">
          <p className="text-gray-500 font-semibold text-lg">Loading...</p>
        </div>
      ) : applications.length > 0 ? (
        <div className="divide-y divide-gray-500">
          {applications.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center px-6 py-4 hover:bg-gray-50 transition"
            >
              <div>
                <p className="font-semibold text-gray-900 text-lg">
                  {item.position}
                </p>
                <p className="text-sm text-gray-600">
                  {item.company}
                  <span className="ml-4 text-xs text-gray-500">
                    📍 {item.location}
                  </span>
                </p>
              </div>
              <div>
                <p
                  className={`text-sm font-semibold ${
                    item.status === "Accepted"
                      ? "text-green-600"
                      : item.status === "Rejected"
                      ? "text-red-500"
                      : "text-yellow-500"
                  }`}
                >
                  {item.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-6 text-center text-gray-600">
          <p>You have not applied to any jobs yet!</p>
        </div>
      )}
    </div>
  </div>
);

};

export default ApplicationsSection;
