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
    <div className="bg-gradient-to-br from-blue-50 via-orange-50 to-purple-50 text-slate-700 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight mb-6">
              Find Your Dream <br className="hidden sm:block" /> 
              <span className="bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">Job Today</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Connect with thousands of employers and take the next step in your career.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/browse-jobs"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Search className="w-5 h-5 mr-2" />
                Browse Jobs
              </Link>
              <Link
                to="/register/candidate"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-orange-600 text-base font-bold rounded-xl text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Create Account
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block">
            <img
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="People in meeting"
              className="rounded-2xl shadow-2xl w-full h-[500px] xl:h-[600px] object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
