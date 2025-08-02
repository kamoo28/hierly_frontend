import { useSelector } from "react-redux";

import HeroSection from "../components/HeroSection";
import ButtonsSection from "../components/ButtonsSection";
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
      // <div className="pt-40 px-32">
      <div className="pt-16 px-0">

        <HeroSection /> 
{/*           <FeaturedJobsSection/> */}
        

        <HowItWorksSection/>
       
        <ForEmployers/>
        <StatsSection/>  {/*testnng stats on home page*/}

        <Testimonial/>
        <Footer/>
        
        
        {/* <ButtonsSection /> thoe button o n normal page */}
      </div>
    );
  }

  if (isRecruiter) {
    return (
      // <div className="pt-40 px-32">
      <div className="pt-20 px-32">

        <ProfileSection />
        <ApplicationsSection />
      </div>
    );
  }

  // FOR CANDIDATES
//   return (
//     // <div className="pt-40 px-32">
//     <div className="pt-40 px-32">

//       <ProfileSection />
//       <ApplicationsSection />
//     </div>
//   );
// };


// ui by chetn 
  // FOR CANDIDATES
return (
  <div className="pt-32 px-4 sm:px-10 md:px-20 lg:px-32 min-h-screen bg-gradient-to-b bg-zinc-300 text-gray-900">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

      {/* Profile Section */}
      <div className="md:col-span-1">
        <div className="bg-white border border-gray-200 shadow-lg rounded-2xl p-6 sticky top-32">
          <ProfileSection />
        </div>
      </div>

      {/* Applications Section */}
      <div className="md:col-span-2">
        <div className="bg-white border border-gray-200 shadow-lg rounded-2xl p-6">
          <ApplicationsSection />
        </div>
      </div>

    </div>
  </div>
);

};
export default Home;
