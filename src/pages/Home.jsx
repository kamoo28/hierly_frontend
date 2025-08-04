import { useSelector } from "react-redux";

import HeroSection from "../components/HeroSection";
import ProfileSection from "../components/ProfileSection";
import ApplicationsSection from "../components/ApplicationsSection";
import Testimonial from "../components/Testimonials";
import StatsSection from "../components/Stats_section";
import FeaturedJobsSection from "../components/FeaturedJobsSection";
import HowItWorksSection from "../components/HowItWorksSection";
import ForEmployers from "../components/ForEmployers";
import Footer from "../components/Footer";

const Home = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isRecruiter = useSelector((state) => state.auth.isRecruiter);

  if (!isAuthenticated) { // till not authenticated thenn  showw thesee okk 
    return (
      <div className="pt-20">

        <HeroSection /> 
        <FeaturedJobsSection/>
        <HowItWorksSection/>
        <ForEmployers/>
        <StatsSection/>
        <Testimonial/>
        <Footer/>
      </div>
    );
  }

  if (isRecruiter) {
    return (
      <div className="pt-20 px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

            {/* Profile Section */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-gray-200 shadow-lg rounded-2xl p-6 lg:sticky lg:top-24">
                <ProfileSection />
              </div>
            </div>

            {/* Applications Section */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 shadow-lg rounded-2xl p-6">
                <ApplicationsSection />
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  // FOR CANDIDATES
  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* Profile Section */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 shadow-lg rounded-2xl p-6 lg:sticky lg:top-24">
              <ProfileSection />
            </div>
          </div>

          {/* Applications Section */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 shadow-lg rounded-2xl p-6">
              <ApplicationsSection />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
