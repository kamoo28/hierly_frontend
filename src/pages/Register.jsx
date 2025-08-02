import { useParams } from "react-router-dom";

import RecruiterRegisterForm from "../components/Auth/RecruiterRegisterForm";
import CandidateRegisterForm from "../components/Auth/CandidateRegisterForm";

const Register = () => {
  const { type } = useParams();

  return (
    // <div className="pt-20 px-32 pb-20">
    <div className=" bg-white p-8 shadow-lg rounded-xl">

     
      {type === "recruiter" ? (
        <RecruiterRegisterForm />
      ) : (
        <CandidateRegisterForm />
      )}
    </div>
  );
};

export default Register;
