// import { useSelector } from "react-redux";

// const ProfileSection = () => {
//   const userData = useSelector((state) => state.auth.userData);
//   const isRecruiter = useSelector((state) => state.auth.isRecruiter);

//   const renderSkillsSection = () => (
//     <div className="my-3">
//       {userData.skills?.map((item, idx) => (
//         <span
//           key={idx}
//           className="mr-2 py-1 px-2 bg-slate-700 text-xs border rounded-md"
//         >
//           {item}
//         </span>
//       ))}
//     </div>
//   );

//   const renderRecruiterSection = () => (
//     <div className="my-3">
//       <h3>
//         Recruiter @ <span className="font-semibold">{userData.company}</span>
//         <span className="ml-3 opacity-80 text-sm">{userData.location}</span>
//       </h3>
//     </div>
//   );

//   if (!userData) return null;

//   return (
//     <div>
//       <h1 className="text-white text-2xl font-bold">Your Profile</h1>

//       <div className="p-4 my-4 border rounded-lg text-white">
//         <div className="flex justify-between font-semibold">
//           <h2 className="text-lg">{userData.name}</h2>
//           <h2 className="opacity-80">{userData.email}</h2>
//         </div>

//         {isRecruiter ? renderRecruiterSection() : renderSkillsSection()}
//       </div>
//     </div>
//   );
// };

// export default ProfileSection;


// ui by chetan 


// import { useSelector } from "react-redux";

// const ProfileSection = () => {
//   const userData = useSelector((state) => state.auth.userData);
//   const isRecruiter = useSelector((state) => state.auth.isRecruiter);

//   const renderSkillsSection = () => (
//     <div className="mt-4 flex flex-wrap gap-2">
//       {userData.skills?.map((item, idx) => (
//         <span
//           key={idx}
//           className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full hover:bg-indigo-500 transition"
//         >
//           {item}
//         </span>
//       ))}
//     </div>
//   );

//   const renderRecruiterSection = () => (
//     <div className="mt-4 text-sm text-slate-300">
//       Recruiter @{" "}
//       <span className="text-white font-semibold text-base">
//         {userData.company}
//       </span>
//       <span className="ml-2 text-slate-400">📍 {userData.location}</span>
//     </div>
//   );

//   if (!userData) return null;

//   return (
//     <div className="bg-slate-800 bg-opacity-90 backdrop-blur-lg rounded-2xl shadow-lg p-6">
//       <div className="flex items-center gap-4">
//         <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full text-xl font-bold uppercase shadow-inner">
//           {userData.name?.charAt(0)}
//         </div>
//         <div>
//           <h2 className="text-xl font-semibold">{userData.name}</h2>
//           <p className="text-sm text-slate-300">{userData.email}</p>
//         </div>
//       </div>

//       <div className="border-t border-slate-700 mt-4 pt-4">
//         {isRecruiter ? renderRecruiterSection() : renderSkillsSection()}
//       </div>
//     </div>
//   );
// };

// export default ProfileSection;


import { useSelector } from "react-redux";

const ProfileSection = () => {
  const userData = useSelector((state) => state.auth.userData);
  const isRecruiter = useSelector((state) => state.auth.isRecruiter);

  const renderSkillsSection = () => (
    <div className="mt-4 flex flex-wrap gap-2">
      {userData.skills?.map((item, idx) => (
        <span
          key={idx}
          className="bg-red-200 text-gray-800 text-xs px-3 py-1 rounded-full hover:bg-gray-300 transition"
        >
          {item}
        </span>
      ))}
    </div>
  );

  const renderRecruiterSection = () => (
    <div className="mt-4 text-sm text-gray-600">
      Recruiter @{" "}
      <span className="text-gray-800 font-semibold text-base">
        {userData.company}
      </span>
      <span className="ml-2 text-gray-500">📍 {userData.location}</span>
    </div>
  );

  if (!userData) return null;

  return (
    <div className="bg-white border border-gray-700 rounded-2xl shadow-md p-6 transition-all duration-300">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 flex items-center justify-center bg-gray-800 text-white rounded-full text-xl font-bold uppercase shadow-inner">
          {userData.name?.charAt(0)}
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900">{userData.name}</h2>
          <p className="text-sm text-gray-600">{userData.email}</p>
        </div>
      </div>

      <div className="border-t border-gray-400 mt-4 pt-4">
        {isRecruiter ? renderRecruiterSection() : renderSkillsSection()}
      </div>
    </div>
  );
};

export default ProfileSection;
