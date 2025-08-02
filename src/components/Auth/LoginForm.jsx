// import { useEffect, useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// import { login as storeLogin } from "../../store/authSlice";
// import api from "../../api/axiosConfig";
// import EyeIcon from "../Icons/EyeIcon";
// import EyeCloseIcon from "../Icons/EyeCloseIcon";

// const LoginForm = ({ userType }) => {
//   const navigate = useNavigate();

//   const dispatch = useDispatch();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate("/");
//     }
//   }, [isAuthenticated, navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     const isRecruiter = userType === "recruiter";
//     const loginObject = { email, password };

//     setIsLoading(true);

//     try {
//       const apiEndpoint = isRecruiter
//         ? "/api/v1/recruiters/login"
//         : "/api/v1/candidates/login";

//       const response = await api.post(apiEndpoint, loginObject);

//       if (response.status === 200) {
//         dispatch(
//           storeLogin({
//             isRecruiter,
//             userData: isRecruiter
//               ? response.data.recruiter
//               : response.data.candidate,
//           })
//         );
//         navigate("/");
//         setIsLoading(false);
//       }
//     } catch (error) {
//       if (error.response.status === 404) {
//         setError("This email or username is not registered");
//       } else if (error.response.status === 401) {
//         setError("Wrong password");
//       } else {
//         setError("Something went wrong!");
//       }

//       setIsLoading(false);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className={`p-14 mb-24 w-full max-w-md 2xl:max-w-xl rounded-lg flex flex-col gap-4 2xl:gap-10 mx-auto ${
//         userType === "recruiter" ? "bg-slate-700" : "bg-slate-800"
//       }`}
//     >
//       <h1 className="text-3xl 2xl:text-5xl font-bold text-white text-center mb-8 2xl:mb-12">
//         {userType === "recruiter" ? "Recruiter Login" : "Candidate Login"}
//       </h1>

//       <div>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full py-2 px-4 text-lg rounded-lg text-black/80"
//           required={true}
//         />
//       </div>

//       <div className="flex justify-between gap-1 items-center">
//         <input
//           type={showPassword ? "text" : "password"}
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full py-2 px-4 text-lg rounded-lg text-black/80"
//           required={true}
//         />

//         <EyeIcon
//           height="1.7em"
//           width="1.7em"
//           className={`cursor-pointer ${showPassword && "hidden"}`}
//           onClick={() => setShowPassword(true)}
//         />
//         <EyeCloseIcon
//           height="1.7em"
//           width="1.7em"
//           className={`cursor-pointer ${!showPassword && "hidden"}`}
//           onClick={() => setShowPassword(false)}
//         />
//       </div>

//       <button
//         type="submit"
//         disabled={isLoading}
//         className={`py-2 px-4 my-10 bg-green-500 hover:opacity-70 rounded-lg text-white text-lg font-semibold transition-opacity ${
//           isLoading && "opacity-30 hover:opacity-40"
//         }`}
//       >
//         Login
//       </button>

//       {/* ERROR NOTIFICATION */}
//       <p className="text-red-500 text-center text-lg font-black">{error}</p>

//       <p className="text-secondary text-center">
//         <Link
//           to={`/register/${
//             userType === "recruiter" ? "recruiter" : "candidate"
//           }`}
//           className="text-white/80 hover:text-purple-500 text-lg font-semibold"
//         >
//           Are you new here? Create a New Account
//         </Link>
//       </p>
//     </form>
//   );
// };

// export default LoginForm;


// gpt chetn

// import { useEffect, useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// import { login as storeLogin } from "../../store/authSlice";
// import api from "../../api/axiosConfig";
// import EyeIcon from "../Icons/EyeIcon";
// import EyeCloseIcon from "../Icons/EyeCloseIcon";

// const LoginForm = ({ userType }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate("/");
//     }
//   }, [isAuthenticated, navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     const isRecruiter = userType === "recruiter";
//     const loginObject = { email, password };
//     setIsLoading(true);

//     try {
//       const apiEndpoint = isRecruiter
//         ? "/api/v1/recruiters/login"
//         : "/api/v1/candidates/login";

//       const response = await api.post(apiEndpoint, loginObject);

//       if (response.status === 200) {
//         dispatch(
//           storeLogin({
//             isRecruiter,
//             userData: isRecruiter
//               ? response.data.recruiter
//               : response.data.candidate,
//           })
//         );
//         navigate("/");
//         setIsLoading(false);
//       }
//     } catch (error) {
//       if (error.response?.status === 404) {
//         setError("This email or username is not registered");
//       } else if (error.response?.status === 401) {
//         setError("Wrong password");
//       } else {
//         setError("Something went wrong!");
//       }
//       setIsLoading(false);
//     }
//   };

//  return (
//   <form
//     onSubmit={handleSubmit}
//     className={`relative p-10 sm:p-12 md:p-14 w-[90%] max-w-md md:max-w-lg rounded-3xl mx-auto mt-16 shadow-2xl backdrop-blur-lg border border-white/20 overflow-hidden group transition-all duration-300 ${
//       userType === "recruiter" ? "bg-gradient-to-br from-slate-800 to-slate-700" : "bg-gradient-to-br from-slate-900 to-slate-800"
//     }`}
//   >
//     <div className="absolute -top-1/2 left-1/2 w-[300%] h-[300%] bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 opacity-10 rotate-45 group-hover:scale-110 transition-all duration-700 blur-3xl pointer-events-none"></div>

//     <h1 className="text-4xl font-extrabold text-white text-center mb-10 animate-fade-in">
//       {userType === "recruiter" ? "Recruiter Login" : "Candidate Login"}
//     </h1>

//     <div className="flex flex-col gap-6">
//       <div className="relative animate-slide-up">
//         <label className="text-white text-sm font-medium mb-1 block">Email</label>
//         <input
//           type="email"
//           placeholder="you@example.com"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full py-3 px-4 rounded-xl bg-white/90 text-black focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-black/50 text-md shadow-lg transition-all duration-300"
//           required
//         />
//       </div>

//       <div className="relative animate-slide-up">
//         <label className="text-white text-sm font-medium mb-1 block">Password</label>
//         <div className="relative">
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="••••••••"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full py-3 px-4 rounded-xl bg-white/90 text-black focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-black/50 text-md shadow-lg pr-12 transition-all duration-300"
//             required
//           />
//           <div className="absolute top-3 right-3 cursor-pointer transition-transform hover:scale-110">
//             {showPassword ? (
//               <EyeCloseIcon height="1.5em" width="1.5em" onClick={() => setShowPassword(false)} />
//             ) : (
//               <EyeIcon height="1.5em" width="1.5em" onClick={() => setShowPassword(true)} />
//             )}
//           </div>
//         </div>
//       </div>

//       {error && (
//         <p className="text-red-400 text-center font-semibold text-sm -mt-2 animate-fade-in">
//           {error}
//         </p>
//       )}

//       <button
//         type="submit"
//         disabled={isLoading}
//         className={`w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-bold tracking-wide shadow-lg hover:opacity-95 hover:shadow-2xl transition-all duration-300 ${
//           isLoading && "opacity-50 cursor-not-allowed"
//         }`}
//       >
//         {isLoading ? "Logging in..." : "Login"}
//       </button>

//       <p className="text-center text-sm text-gray-300 mt-4 animate-fade-in">
//         New here?{" "}
//         <Link
//           to={`/register/${userType === "recruiter" ? "recruiter" : "candidate"}`}
//           className="text-purple-400 hover:underline font-semibold transition-all"
//         >
//           Create an Account
//         </Link>
//       </p>
//     </div>
//   </form>
// );

// };

// export default LoginForm;

// adding toaster n all rest its okk 

import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import { login as storeLogin } from "../../store/authSlice";
import api from "../../api/axiosConfig";
import EyeIcon from "../Icons/EyeIcon";
import EyeCloseIcon from "../Icons/EyeCloseIcon";

const LoginForm = ({ userType }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const validateForm = () => {
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Enter a valid email address");
      return false;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const isRecruiter = userType === "recruiter";
    const loginObject = { email, password };
    setIsLoading(true);

    try {
      const apiEndpoint = isRecruiter
        ? "/api/v1/recruiters/login"
        : "/api/v1/candidates/login";

      const response = await api.post(apiEndpoint, loginObject);

      if (response.status === 200) {
        dispatch(
          storeLogin({
            isRecruiter,
            userData: isRecruiter
              ? response.data.recruiter
              : response.data.candidate,
          })
        );
        toast.success("Login successful!");
        navigate("/");
      }
    } catch (error) {
      if (error.response?.status === 404) {
        toast.error("This email or username is not registered");
      } else if (error.response?.status === 401) {
        toast.error("Wrong password");
      } else {
        toast.error("Something went wrong!");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative p-10 sm:p-12 md:p-16 w-[95%] max-w-2xl rounded-3xl mx-auto mt-16 shadow-2xl backdrop-blur-lg border border-white/20 overflow-hidden group transition-all duration-300 ${
        userType === "recruiter"
          ? "bg-gradient-to-br from-slate-800 to-slate-700"
          : "bg-gradient-to-br from-slate-900 to-slate-800"
      }`}
    >
      <div className="absolute -top-1/2 left-1/2 w-[300%] h-[300%] bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 opacity-10 rotate-45 group-hover:scale-110 transition-all duration-700 blur-3xl pointer-events-none"></div>

      <h1 className="text-4xl font-extrabold text-white text-center mb-10">
        {userType === "recruiter" ? "Recruiter Login" : "Candidate Login"}
      </h1>

      <div className="flex flex-col gap-6">
        {/* Email Field */}
        <div className="animate-fade-in">
          <label className="text-white text-sm font-medium mb-1 block">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full py-3 px-4 rounded-xl bg-white/90 text-black focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-black/50 text-md shadow-lg"
            required
          />
        </div>

        {/* Password Field */}
        <div className="animate-fade-in">
          <label className="text-white text-sm font-medium mb-1 block">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-3 px-4 rounded-xl bg-white/90 text-black focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-black/50 text-md shadow-lg pr-12"
              required
            />
            <div
              className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer hover:scale-110 transition-all"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <EyeCloseIcon height="1.5em" width="1.5em" />
              ) : (
                <EyeIcon height="1.5em" width="1.5em" />
              )}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-bold tracking-wide shadow-lg hover:opacity-95 hover:shadow-2xl transition-all duration-300 ${
            isLoading && "opacity-50 cursor-not-allowed"
          }`}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-300 mt-4">
          New here?{" "}
          <Link
            to={`/register/${userType === "recruiter" ? "recruiter" : "candidate"}`}
            className="text-purple-400 hover:underline font-semibold transition-all"
          >
            Create an Account
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
