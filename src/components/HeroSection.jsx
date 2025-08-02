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
import { Search } from "lucide-react"; // Assuming you're using lucide-react or similar icons

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-300 to-blue-300 text-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Find Your Dream <br /> <span className="text-slate-700">Job Today</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600">
              Connect with thousands of employers and take the next step in your career.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/browse-jobs"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-md text-blue-700 bg-white hover:bg-blue-50 transition"
              >
                <Search className="w-5 h-5 mr-2" />
                Browse Jobs
              </Link>
              <Link
                to="/register/candidate"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-semibold rounded-md text-white hover:bg-white hover:text-blue-700 transition"
              >
                Create Account
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:block">
            <img
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="People in meeting"
              className="rounded-xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
