import { Link } from "react-router-dom";
import { Search, ArrowRight, Users, Building, Briefcase, Star, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleBrowseJobsClick = (e) => {
    e.preventDefault();
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
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-slate-800 min-h-screen flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-300/10 to-blue-300/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left relative z-10">
            <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-semibold animate-pulse">
              <Star className="w-4 h-4" />
              <span>India's #1 Job Portal</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight mb-6">
              Find Your Dream <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Job Today
              </span>
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
              Connect with thousands of employers and take the next step in your career journey. Your perfect job is just one click away.
            </p>

            {/* Role-based CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={handleBrowseJobsClick}
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Search className="w-5 h-5 mr-2" />
                Find Jobs
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <Link
                to="/register/recruiter"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-purple-600 text-lg font-bold rounded-xl text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Briefcase className="w-5 h-5 mr-2" />
                Hire Talent
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Quick Access Links */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12">
              <Link
                to="/register/candidate"
                className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg text-gray-700 hover:text-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Users className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">New to job search?</span>
              </Link>
              <Link
                to="/resume-tips"
                className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg text-gray-700 hover:text-green-600 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Resume Tips</span>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 text-center lg:text-left">
              <div className="group hover:transform hover:scale-110 transition-all duration-300">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-2 rounded-lg mr-3">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-blue-600">10K+</div>
                </div>
                <div className="text-sm text-slate-600 font-medium">Active Jobs</div>
              </div>
              <div className="group hover:transform hover:scale-110 transition-all duration-300">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-2 rounded-lg mr-3">
                    <Building className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-purple-600">5K+</div>
                </div>
                <div className="text-sm text-slate-600 font-medium">Companies</div>
              </div>
              <div className="group hover:transform hover:scale-110 transition-all duration-300">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-2 rounded-lg mr-3">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-pink-600">50K+</div>
                </div>
                <div className="text-sm text-slate-600 font-medium">Job Seekers</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block relative z-10">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Professional team meeting"
                className="rounded-3xl shadow-2xl w-full h-[500px] xl:h-[600px] object-cover transform hover:scale-105 transition-transform duration-500 border-4 border-white/50"
              />
              {/* Floating success indicators */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-xl animate-bounce">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-800">1000+ Jobs Posted Today</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl animate-bounce" style={{animationDelay: '1s'}}>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-800">500+ Companies Hiring</span>
                </div>
              </div>
              <div className="absolute top-1/2 -left-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-3 shadow-xl animate-pulse">
                <div className="text-center">
                  <div className="text-lg font-bold">95%</div>
                  <div className="text-xs">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;