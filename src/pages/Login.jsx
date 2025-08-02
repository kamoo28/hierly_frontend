import { useParams } from "react-router-dom";
import LoginForm from "../components/Auth/LoginForm";

const Login = () => {
  const { type } = useParams();

  return (
    <div className="pt-20 px-32 pb-20">
      <LoginForm userType={type} />
    </div>
  );
};

export default Login;
