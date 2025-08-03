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
import { Menu, X } from "lucide-react";
import api from "../../api/axiosConfig";
import { logout as storeLogout } from "../../store/authSlice";
import toast from "react-hot-toast";
import Logo from "../Logo";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isRecruiter = useSelector((state) => state.auth.isRecruiter);
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      toast.error("Please login to browse jobs!", {
        icon: "🔒",
        style: {
          border: "1px solid #3b82f6",
          padding: "12px",
          color: "#1e40af",
          borderRadius: "12px",
        },
      });
      navigate("/register/candidate");
    } else {
      navigate(path);
    }
  };

  const handleBrowseJobsClick = (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
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
    } else {
      navigate("/jobs");
    }
  };

  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-xl transition duration-300 font-semibold ${
      isActive 
        ? "text-blue-600 bg-blue-50 shadow-md" 
        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
    }`;

  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8 bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200 fixed z-50">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <NavLink to="/" className="flex-shrink-0">
          <Logo />
        </NavLink>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex space-x-8">
          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <button
              onClick={handleBrowseJobsClick}
              className="px-4 py-2 rounded-xl transition duration-300 font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            >
              Browse Jobs
            </button>
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

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              disabled={isLoading}
              className={`py-2 px-6 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:from-red-600 hover:to-red-700 transform hover:scale-105 ${
                isLoading ? "opacity-40" : ""
              }`}
            >
              Logout
            </button>
          ) : (
            <div className="flex space-x-3">
              <button
                onClick={() => navigate("/login/recruiter")}
                className="py-2 px-5 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Recruiter Login
              </button>
              <button
                onClick={() => navigate("/login/candidate")}
                className="py-2 px-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Candidate Login
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200">
          <div className="px-4 py-6 space-y-4">
            <NavLink
              to="/"
              className="block px-4 py-3 rounded-xl font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <button
              onClick={(e) => {
                handleBrowseJobsClick(e);
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-3 rounded-xl font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
            >
              Browse Jobs
            </button>
            <NavLink
              to="/about"
              className="block px-4 py-3 rounded-xl font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className="block px-4 py-3 rounded-xl font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </NavLink>
            
            <div className="pt-4 border-t border-gray-200">
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  disabled={isLoading}
                  className="w-full py-3 px-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Logout
                </button>
              ) : (
                <div className="space-y-3">
                  <button
                    onClick={() => {
                      navigate("/login/recruiter");
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Recruiter Login
                  </button>
                  <button
                    onClick={() => {
                      navigate("/login/candidate");
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Candidate Login
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>

  );
};

export default Header;
