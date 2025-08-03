import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MapPin, Building2, Briefcase, BadgeCheck, Search, Filter } from "lucide-react";
import { toast } from "react-hot-toast";
import Footer from "../components/Footer";

const BrowseJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/jobs`);
        setJobs(res.data);
        setFilteredJobs(res.data);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    const filtered = jobs.filter((job) =>
      job.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredJobs(filtered);
  }, [searchTerm, jobs]);

  const handleRedirectWithToast = () => {
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
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
              🎯 Discover Your Next Opportunity
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Browse Jobs
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore thousands of job opportunities from top companies. Find your perfect match today!
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search jobs by title, company, location, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 shadow-lg"
              />
              <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="relative">
                <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>
          ) : filteredJobs.length === 0 ? (
            <div className="text-center py-20">
              <div className="mb-6">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-700 mb-2">No jobs found</h3>
                <p className="text-gray-500">
                  {searchTerm ? `No jobs match "${searchTerm}". Try different keywords.` : "No jobs available at the moment."}
                </p>
              </div>
              <button
                onClick={() => setSearchTerm("")}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <>
              {/* Results count */}
              <div className="mb-8 text-center">
                <p className="text-gray-600">
                  Showing <span className="font-semibold text-blue-600">{filteredJobs.length}</span> job{filteredJobs.length !== 1 ? 's' : ''}
                  {searchTerm && <span> for "<span className="font-semibold">{searchTerm}</span>"</span>}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredJobs.map((job, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 hover:border-blue-500 shadow-lg hover:shadow-2xl rounded-2xl p-6 lg:p-8 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h2 className="text-xl lg:text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 flex-1">
                        {job.position}
                      </h2>
                      <div className="ml-4 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                        New
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-600 text-sm lg:text-base">
                        <Building2 className="w-4 h-4 mr-3 text-blue-500" />
                        <span className="font-medium">{job.company}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm lg:text-base">
                        <MapPin className="w-4 h-4 mr-3 text-green-500" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm lg:text-base">
                        <Briefcase className="w-4 h-4 mr-3 text-purple-500" />
                        <span>{job.experience}</span>
                      </div>
                    </div>

                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-6 line-clamp-3">
                      {job.description?.slice(0, 120)}...
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {job.skills?.slice(0, 3).map((skill, i) => (
                        <span
                          key={i}
                          className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 hover:from-blue-200 hover:to-purple-200 transition-all duration-300"
                        >
                          <BadgeCheck className="w-3 h-3" />
                          {skill}
                        </span>
                      ))}
                      {job.skills?.length > 3 && (
                        <span className="text-xs text-gray-500 px-3 py-1">
                          +{job.skills.length - 3} more
                        </span>
                      )}
                    </div>

                    <div>
                      <button
                        onClick={handleRedirectWithToast}
                        className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-sm font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 group"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Call to Action */}
          {!loading && filteredJobs.length > 0 && (
            <div className="mt-16 text-center">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Apply?</h3>
                <p className="text-gray-600 mb-6">Join thousands of job seekers who found their dream jobs through our platform.</p>
                <button
                  onClick={handleRedirectWithToast}
                  className="inline-flex items-center px-8 py-4 text-lg font-bold rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BrowseJobs;