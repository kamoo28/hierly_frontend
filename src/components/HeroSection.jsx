// const HeroSection = () => {
//   return (
//     <div className="flex flex-col justify-center items-center">
//       <h1 className="text-8xl font-black bg-gradient-to-r from-pink-600 via-green-500 to-purple-400 inline-block text-transparent bg-clip-text">
//         JobQuest
//       </h1>
//       <h2 className="my-8 text-2xl font-semibold bg-gradient-to-r from-pink-600 via-green-500 to-purple-400 inline-block text-transparent bg-clip-text">
//         Unlocking Opportunities, Empowering Careers
//       </h2>
//     </div>
//   );
// };

// export default HeroSection;

// gpt

import { Link } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";
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
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left relative z-10">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
              🚀 Your Career Journey Starts Here
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight mb-6 animate-fade-in">
              Find Your Dream <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Job Today
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-slide-up">
              Connect with thousands of employers and take the next step in your career journey. Your perfect job is just one click away.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up">
              <button
                onClick={handleBrowseJobsClick}
                className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Search className="w-5 h-5 mr-2" />
                Browse Jobs
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <Link
                to="/register/candidate"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-base font-bold rounded-xl text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Create Account
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <div className="text-2xl font-bold text-blue-600">10K+</div>
                <div className="text-sm text-slate-600">Active Jobs</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">5K+</div>
                <div className="text-sm text-slate-600">Companies</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-pink-600">50K+</div>
                <div className="text-sm text-slate-600">Job Seekers</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block relative z-10">
            <img
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="People in meeting"
              className="rounded-3xl shadow-2xl w-full h-[500px] xl:h-[600px] object-cover transform hover:scale-105 transition-transform duration-500 border-4 border-white/50"
            />
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-semibold">1000+ Jobs Posted Today</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-semibold">500+ Companies Hiring</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
