import { useParams } from "react-router-dom";
import LoginForm from "../components/Auth/LoginForm";
import { User, Briefcase, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const { type } = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md">
        {/* Back to Home Link */}
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Role Indicator */}
        <div className="text-center mb-8">
          <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-semibold ${
            type === "recruiter" 
              ? "bg-purple-100 text-purple-800" 
              : "bg-blue-100 text-blue-800"
          }`}>
            {type === "recruiter" ? (
              <>
                <Briefcase className="w-4 h-4" />
                <span>Recruiter Login</span>
              </>
            ) : (
              <>
                <User className="w-4 h-4" />
                <span>Job Seeker Login</span>
              </>
            )}
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mt-4 mb-2">
            Welcome Back!
          </h1>
          <p className="text-gray-600">
            {type === "recruiter" 
              ? "Sign in to manage your job postings and find great candidates" 
              : "Sign in to discover amazing job opportunities"
            }
          </p>
        </div>

        <LoginForm userType={type} />

        {/* Switch Role Link */}
        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">
            {type === "recruiter" ? "Looking for a job instead?" : "Want to hire talent?"}
          </p>
          <Link
            to={`/login/${type === "recruiter" ? "candidate" : "recruiter"}`}
            className={`inline-flex items-center space-x-2 mt-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              type === "recruiter"
                ? "text-blue-600 hover:bg-blue-50"
                : "text-purple-600 hover:bg-purple-50"
            }`}
          >
            {type === "recruiter" ? (
              <>
                <User className="w-4 h-4" />
                <span>Job Seeker Login</span>
              </>
            ) : (
              <>
                <Briefcase className="w-4 h-4" />
                <span>Recruiter Login</span>
              </>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;