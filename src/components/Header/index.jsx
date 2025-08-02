// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

// import Logo from "../Logo";
// import api from "../../api/axiosConfig";
// import { logout as storeLogout } from "../../store/authSlice";

// const Header = () => {
//   const navigate = useNavigate();

//   const dispatch = useDispatch();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const isRecruiter = useSelector((state) => state.auth.isRecruiter);

//   const [isLoading, setIsLoading] = useState(false);

//   const handleLogout = async (e) => {
//     try {
//       e.preventDefault();
//       setIsLoading(true);

//       const apiEndpoint = isRecruiter
//         ? "/api/v1/recruiters/logout"
//         : "/api/v1/candidates/logout";

//       const response = await api.post(apiEndpoint);
//       setIsLoading(false);

//       if (response.status === 200) {
//         dispatch(storeLogout());
//         navigate("/");
//       }
//     } catch {
//       console.log("Logging out due to error");
//       dispatch(storeLogout());
//       navigate("/");
//     }
//   };

//   return (
//     <header className="w-full py-4 2xl:py-6 px-10 font-fira bg-white bg-opacity-10 backdrop-blur-lg fixed z-10">
//       <nav className="flex justify-between items-center">
//         <div>
//           <Link to="/">
//             <Logo className="text-xl 2xl:text-2xl" />
//           </Link>
//         </div>

//         {isAuthenticated && (
//           <ul className="flex gap-x-4 text-white/80 font-semibold text-base 2xl:text-xl">
//             <li>
//               <button
//                 onClick={() => navigate("/")}
//                 className="inline-block px-4 py-2 duration-200 hover:bg-slate-900 hover:text-purple-400 rounded-2xl"
//               >
//                 Home
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => navigate("/jobs")}
//                 className="inline-block px-4 py-2 duration-200 hover:bg-slate-900 hover:text-purple-400 rounded-2xl"
//               >
//                 Job Listings
//               </button>
//             </li>
//           </ul>
//         )}

//         {isAuthenticated ? (
//           <div className="flex justify-around items-center gap-x-6 2xl:gap-x-8">
//             <button
//               onClick={handleLogout}
//               disabled={isLoading}
//               className={`py-3 px-8 bg-orange-600 hover:opacity-70 rounded-lg text-white text-base font-semibold transition-opacity ${
//                 isLoading && "opacity-30 hover:opacity-40"
//               }`}
//             >
//               Logout
//             </button>
//           </div>
//         ) : (
//           <div className="flex justify-between gap-4">
//             <button
//               onClick={() => navigate("/login/recruiter")}
//               className="py-2 px-6 bg-purple-600 hover:opacity-70 rounded-lg text-white text-base font-semibold transition-opacity"
//             >
//               Recruiter Login
//             </button>

//             <button
//               onClick={() => navigate("/login/candidate")}
//               className="py-2 px-6 bg-green-600 hover:opacity-70 rounded-lg text-white text-base font-semibold transition-opacity"
//             >
//               Candidate Login
//             </button>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Header;

// uppar wlaa og hai neeche wala gpt 


// import { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import api from "../../api/axiosConfig";
// import { logout as storeLogout } from "../../store/authSlice";

// const Header = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const isRecruiter = useSelector((state) => state.auth.isRecruiter);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleLogout = async (e) => {
//     try {
//       e.preventDefault();
//       setIsLoading(true);

//       const apiEndpoint = isRecruiter
//         ? "/api/v1/recruiters/logout"
//         : "/api/v1/candidates/logout";

//       const response = await api.post(apiEndpoint);
//       setIsLoading(false);

//       if (response.status === 200) {
//         dispatch(storeLogout());
//         navigate("/");
//       }
//     } catch {
//       console.log("Logging out due to error");
//       dispatch(storeLogout());
//       navigate("/");
//     }
//   };

//   const navLinkClass = ({ isActive }) =>
//     `px-4 py-1.5 rounded-md transition duration-200 font-medium ${
//       isActive ? "text-purple-600 bg-gray-100" : "text-gray-700 hover:text-purple-600"
//     }`;

//   return (
//     <header className="w-full py-3 px-6 bg-white shadow-sm fixed z-10">
//       <nav className="flex items-center justify-between max-w-7xl mx-auto">
//         {/* Logo */}
//         <NavLink to="/" className="text-2xl font-bold text-purple-600 tracking-tight">
//           JobQuest
//         </NavLink>

//         {/* Navigation Links */}
//         <ul className="flex space-x-6">
//           <li>
//             <NavLink to="/" className={navLinkClass}>
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/jobs" className={navLinkClass}>
//               Browse Jobs
//             </NavLink>
//           </li>
          
//         </ul>

//         {/* Auth Buttons */}
//         {isAuthenticated ? (
//           <button
//             onClick={handleLogout}
//             disabled={isLoading}
//             className={`py-2 px-5 bg-orange-600 text-white rounded-md font-semibold transition-opacity ${
//               isLoading ? "opacity-40" : "hover:opacity-80"
//             }`}
//           >
//             Logout
//           </button>
//         ) : (
//           <div className="flex space-x-3">
//             <button
//               onClick={() => navigate("/login/recruiter")}
//               className="py-2 px-5 bg-purple-600 text-white rounded-md font-semibold hover:opacity-80"
//             >
//               Recruiter Login
//             </button>
//             <button
//               onClick={() => navigate("/login/candidate")}
//               className="py-2 px-5 bg-green-600 text-white rounded-md font-semibold hover:opacity-80"
//             >
//               Candidate Login
//             </button>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Header;


// testing for unauthorized tester toatsta dding 

import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import api from "../../api/axiosConfig";
import { logout as storeLogout } from "../../store/authSlice";
import toast from "react-hot-toast";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isRecruiter = useSelector((state) => state.auth.isRecruiter);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);

      const apiEndpoint = isRecruiter
        ? "/api/v1/recruiters/logout"
        : "/api/v1/candidates/logout";

      const response = await api.post(apiEndpoint);
      setIsLoading(false);

      if (response.status === 200) {
        dispatch(storeLogout());
        navigate("/");
      }
    } catch {
      console.log("Logging out due to error");
      dispatch(storeLogout());
      navigate("/");
    }
  };

  const handleProtectedNavigation = (e, path) => {
    e.preventDefault();
    if (!isAuthenticated) {
      toast.error("Please login to proceed.");
      navigate("/register/candidate");
    } else {
      navigate(path);
    }
  };

  const navLinkClass = ({ isActive }) =>
    `px-4 py-1.5 rounded-md transition duration-200 font-medium ${
      isActive ? "text-purple-600 bg-gray-100" : "text-gray-700 hover:text-purple-600"
    }`;

  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 to-orange-100 shadow-lg border-b border-orange-200 fixed z-50 backdrop-blur-sm bg-opacity-95">
  <nav className="flex items-center justify-between max-w-7xl mx-auto">
    {/* Logo */}
    <NavLink to="/" className="text-2xl sm:text-3xl font-bold text-orange-800 tracking-tight hover:text-orange-600 transition-colors duration-300">
      Hierly
    </NavLink>

    {/* Navigation Links */}
    <ul className="hidden md:flex space-x-6 lg:space-x-8">
      <li>
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
      </li>
      <li>
        <a
          href="/jobs"
          onClick={(e) => handleProtectedNavigation(e, "/jobs")}
          className="px-4 py-1.5 rounded-md transition duration-200 font-medium text-orange-900 hover:text-orange-700"
        >
          Browse Jobs
        </a>
      </li>
      <li>
        <NavLink to="/about" className={navLinkClass}>
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={navLinkClass}>
          Contact Us
        </NavLink>
      </li>
    </ul>

    {/* Auth Buttons */}
    {isAuthenticated ? (
      <button
        onClick={handleLogout}
        disabled={isLoading}
        className={`py-2 px-4 sm:px-5 bg-red-500 text-white rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:bg-red-600 text-sm sm:text-base ${
          isLoading ? "opacity-40" : "hover:opacity-90"
        }`}
      >
        Logout
      </button>
    ) : (
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
        <button
          onClick={() => navigate("/login/recruiter")}
          className="py-2 px-3 sm:px-5 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 shadow-md hover:shadow-lg text-xs sm:text-sm"
        >
          <span className="hidden sm:inline">Recruiter Login</span>
          <span className="sm:hidden">Recruiter</span>
        </button>
        <button
          onClick={() => navigate("/login/candidate")}
          className="py-2 px-3 sm:px-5 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg text-xs sm:text-sm"
        >
          <span className="hidden sm:inline">Candidate Login</span>
          <span className="sm:hidden">Candidate</span>
        </button>
      </div>
    )}
  </nav>
</header>

  );
};

export default Header;
