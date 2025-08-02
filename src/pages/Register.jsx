import { useParams } from "react-router-dom";

import RecruiterRegisterForm from "../components/Auth/RecruiterRegisterForm";
import CandidateRegisterForm from "../components/Auth/CandidateRegisterForm";

const Register = () => {
  const { type } = useParams();

  return (
    // <div className="pt-20 px-32 pb-20">
    <div className="pt-20 px-4 sm:px-6 lg:px-8 pb-20 min-h-screen bg-gradient-to-br from-gray-100 to-purple-100 flex items-center justify-center">
      <div className="w-full max-w-6xl">
        {type === "recruiter" ? (
          <RecruiterRegisterForm />
        ) : (
          <CandidateRegisterForm />
        )}
      </div>
    </div>
  );
};


export default Register;
