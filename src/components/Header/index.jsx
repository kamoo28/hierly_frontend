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
        toast.success("Logged out successfully!");
        navigate("/");
      }
    } catch {
      console.log("Logging out due to error");
      dispatch(storeLogout());
      toast.success("Logged out successfully!");
      navigate("/");
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
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8 bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200 fixed z-50 top-0">
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
              {isLoading ? "Logging out..." : "Logout"}
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
                  onClick={(e) => {
                    handleLogout(e);
                    setIsMobileMenuOpen(false);
                  }}
                  disabled={isLoading}
                  className="w-full py-3 px-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {isLoading ? "Logging out..." : "Logout"}
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