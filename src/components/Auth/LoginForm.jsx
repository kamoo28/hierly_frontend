import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Eye, EyeOff, Mail, Lock, LogIn } from "lucide-react";

import { login as storeLogin } from "../../store/authSlice";
import api from "../../api/axiosConfig";

const LoginForm = ({ userType }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const validateForm = () => {
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Enter a valid email address");
      return false;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const isRecruiter = userType === "recruiter";
    const loginObject = { email, password };
    setIsLoading(true);

    try {
      const apiEndpoint = isRecruiter
        ? "/api/v1/recruiters/login"
        : "/api/v1/candidates/login";

      const response = await api.post(apiEndpoint, loginObject);

      if (response.status === 200) {
        dispatch(
          storeLogin({
            isRecruiter,
            userData: isRecruiter
              ? response.data.recruiter
              : response.data.candidate,
          })
        );
        toast.success(`Welcome back! ${isRecruiter ? 'Ready to find great talent?' : 'Let\'s find your dream job!'}`);
        navigate("/");
      }
    } catch (error) {
      if (error.response?.status === 404) {
        toast.error("Account not found. Please check your email or sign up.");
      } else if (error.response?.status === 401) {
        toast.error("Incorrect password. Please try again.");
      } else {
        toast.error("Something went wrong! Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Field */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300"
              required
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
            userType === "recruiter"
              ? "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg hover:shadow-xl"
              : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl"
          } ${isLoading && "opacity-50 cursor-not-allowed"}`}
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
              <span>Signing in...</span>
            </>
          ) : (
            <>
              <LogIn className="w-5 h-5" />
              <span>Sign In</span>
            </>
          )}
        </button>

        {/* Register Link */}
        <div className="text-center pt-4 border-t border-gray-200">
          <p className="text-gray-600 text-sm mb-2">
            Don't have an account?
          </p>
          <Link
            to={`/register/${userType}`}
            className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              userType === "recruiter"
                ? "text-purple-600 hover:bg-purple-50"
                : "text-blue-600 hover:bg-blue-50"
            }`}
          >
            <span>Create {userType === "recruiter" ? "Recruiter" : "Job Seeker"} Account</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;