import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MapPin, Building2, Briefcase, BadgeCheck } from "lucide-react";
import { toast } from "react-hot-toast";
import Footer from "../components/Footer";

const BrowseJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/jobs`);

        setJobs(res.data);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleRedirectWithToast = () => {
    toast.error("Please login to proceed!", {
      icon: "🔒",
      style: {
        border: "1px solid #7c3aed",
        padding: "10px",
        color: "#5b21b6",
      },
    });
    navigate("/login/candidate");
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-800 text-center mb-12">Browse Jobs</h1>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
          </div>
        ) : jobs.length === 0 ? (
          <p className="text-center text-lg lg:text-xl text-gray-600 py-20">No jobs available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white border border-purple-200 hover:border-purple-600 shadow-lg hover:shadow-2xl rounded-2xl p-6 lg:p-8 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group"
              >
                <h2 className="text-xl lg:text-2xl font-bold text-purple-800 group-hover:text-purple-600 transition-colors duration-300 mb-4">{job.position}</h2>

                <div className="flex items-center text-gray-700 text-sm lg:text-base mb-2">
                  <Building2 className="w-4 h-4 mr-2" /> {job.company}
                </div>
                <div className="flex items-center text-gray-700 text-sm lg:text-base mb-2">
                  <MapPin className="w-4 h-4 mr-2" /> {job.location}
                </div>
                <div className="flex items-center text-gray-700 text-sm lg:text-base mb-4">
                  <Briefcase className="w-4 h-4 mr-2" /> {job.experience}
                </div>

                <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-6">
                  {job.description?.slice(0, 100)}...
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {job.skills?.slice(0, 3).map((skill, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 hover:from-purple-200 hover:to-blue-200 transition-all duration-300"
                    >
                      <BadgeCheck className="w-3 h-3" /> {skill}
                    </span>
                  ))}
                </div>

                <div>
                  <button
                    onClick={handleRedirectWithToast}
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl text-sm font-bold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <button
            onClick={handleRedirectWithToast}
            className="inline-flex items-center px-8 py-4 text-lg font-bold rounded-xl text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View All Jobs
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BrowseJobs;