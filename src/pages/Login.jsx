import { useParams } from "react-router-dom";
import LoginForm from "../components/Auth/LoginForm";

const Login = () => {
  const { type } = useParams();

  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 pb-20 min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 flex items-center justify-center">
      <LoginForm userType={type} />
    </div>
  );
};

export default Login;
