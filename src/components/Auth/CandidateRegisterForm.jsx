// import { useState, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import Creatable from "react-select/creatable";

// import { login as storeLogin } from "../../store/authSlice";
// import api from "../../api/axiosConfig";
// import { skillOptions } from "../../data/constants";

// const CandidateRegisterForm = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [skills, setSkills] = useState([]);

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate("/");
//     }
//   }, [isAuthenticated, navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     const skillsArray = skills.map((item) => item.value);
//     const formData = { name, email, password, skills: skillsArray };

//     setIsLoading(true);

//     try {
//       const response = await api.post("/api/v1/candidates/signup", formData);

//       if (response.status === 201) {
//         dispatch(storeLogin({ isRecruiter: false, userData: response.data }));

//         navigate("/");
//         setIsLoading(false);
//       }
//     } catch (error) {
//       console.log(error);
//       setError("Something went wrong!");
//       setIsLoading(false);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="p-14 mb-24 bg-slate-800 w-full max-w-md 2xl:max-w-xl rounded-lg flex flex-col gap-4 2xl:gap-10 mx-auto"
//     >
//       <h1 className="text-3xl 2xl:text-5xl font-bold text-white text-center mb-8 2xl:mb-12">
//         Candidate Signup
//       </h1>

//       <div>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full py-2 px-4 text-lg rounded-lg text-black/80 font-semibold"
//           required={true}
//         />
//       </div>

//       <div>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full py-2 px-4 text-lg rounded-lg text-black/80 font-semibold"
//           required={true}
//         />
//       </div>

//       <div>
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full py-2 px-4 text-lg rounded-lg text-black/80 font-semibold"
//           required={true}
//         />
//       </div>

//       <div>
//         <input
//           type="password"
//           placeholder="Confirm Password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           className={`w-full py-2 px-4 text-lg rounded-lg text-black/80 font-semibold ${
//             password === confirmPassword
//               ? "border-green-500 outline-green-500"
//               : confirmPassword && "border-red-500 outline-red-500"
//           }`}
//           required={true}
//         />
//       </div>

//       <div className="mt-6">
//         <h3 className="text-lg text-white mb-1 font-medium">Skills</h3>
//         <Creatable
//           options={skillOptions}
//           isMulti
//           value={skills}
//           onChange={(selectedOptions) => setSkills(selectedOptions)}
//         />
//       </div>

//       <button
//         type="submit"
//         disabled={
//           isLoading ||
//           !name ||
//           !email ||
//           !password ||
//           !confirmPassword ||
//           password !== confirmPassword
//         }
//         className={`py-2 px-4 my-10 bg-green-500 hover:opacity-70 rounded-lg text-white text-lg font-semibold transition-opacity ${
//           (isLoading ||
//             !name ||
//             !email ||
//             !password ||
//             !confirmPassword ||
//             password !== confirmPassword) &&
//           "opacity-30 hover:opacity-40"
//         }`}
//       >
//         Register
//       </button>

//       {/* ERROR NOTIFICATION */}
//       <p className="text-red-500 text-center text-lg font-black">{error}</p>

//       <p className="text-secondary text-center">
//         <Link
//           to="/login/candidate"
//           className="text-white/80 hover:text-purple-500 text-lg font-semibold"
//         >
//           Already Registered? Login here
//         </Link>
//       </p>
//     </form>
//   );
// };

// export default CandidateRegisterForm;

// ui by chetan


// import { useState, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import Creatable from "react-select/creatable";

// import { login as storeLogin } from "../../store/authSlice";
// import api from "../../api/axiosConfig";
// import { skillOptions } from "../../data/constants";

// const CandidateRegisterForm = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [skills, setSkills] = useState([]);

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate("/");
//     }
//   }, [isAuthenticated, navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     const skillsArray = skills.map((item) => item.value);
//     const formData = { name, email, password, skills: skillsArray };

//     setIsLoading(true);

//     try {
//       const response = await api.post("/api/v1/candidates/signup", formData);

//       if (response.status === 201) {
//         dispatch(storeLogin({ isRecruiter: false, userData: response.data }));
//         navigate("/");
//         setIsLoading(false);
//       }
//     } catch (error) {
//       console.log(error);
//       setError("Something went wrong!");
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-gray-900 to-slate-800 px-4 py-10">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-12 space-y-8"
//       >
//         <h2 className="text-4xl font-bold text-center text-slate-800">
//           Candidate Sign Up
//         </h2>

//         {error && (
//           <p className="text-red-600 text-center font-semibold">{error}</p>
//         )}

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="space-y-2">
//             <label className="block text-slate-700 font-medium">Full Name</label>
//             <input
//               type="text"
//               placeholder="Enter your name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-purple-500 outline-none text-slate-800"
//               required
//             />
//           </div>

//           <div className="space-y-2">
//             <label className="block text-slate-700 font-medium">Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-purple-500 outline-none text-slate-800"
//               required
//             />
//           </div>

//           <div className="space-y-2">
//             <label className="block text-slate-700 font-medium">Password</label>
//             <input
//               type="password"
//               placeholder="Create a password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-purple-500 outline-none text-slate-800"
//               required
//             />
//           </div>

//           <div className="space-y-2">
//             <label className="block text-slate-700 font-medium">
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               placeholder="Confirm your password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className={`w-full px-4 py-2 border rounded-md outline-none text-slate-800 ${
//                 confirmPassword
//                   ? password === confirmPassword
//                     ? "border-green-500 focus:ring-green-500"
//                     : "border-red-500 focus:ring-red-500"
//                   : "border-slate-300 focus:ring-purple-500"
//               }`}
//               required
//             />
//           </div>
//         </div>

//         <div className="space-y-2">
//           <label className="block text-slate-700 font-medium">Skills</label>
//           <Creatable
//             options={skillOptions}
//             isMulti
//             value={skills}
//             onChange={(selectedOptions) => setSkills(selectedOptions)}
//             className="text-sm"
//             classNamePrefix="select"
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={
//             isLoading ||
//             !name ||
//             !email ||
//             !password ||
//             !confirmPassword ||
//             password !== confirmPassword
//           }
//           className={`w-full py-3 rounded-md text-white font-semibold text-lg transition-all ${
//             isLoading ||
//             !name ||
//             !email ||
//             !password ||
//             !confirmPassword ||
//             password !== confirmPassword
//               ? "bg-purple-300 cursor-not-allowed"
//               : "bg-purple-600 hover:bg-purple-700"
//           }`}
//         >
//           {isLoading ? "Registering..." : "Register"}
//         </button>

//         <p className="text-center text-slate-600">
//           Already registered?{" "}
//           <Link
//             to="/login/candidate"
//             className="text-purple-600 hover:underline font-medium"
//           >
//             Login here
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default CandidateRegisterForm;


// uhmm just the normal adding toast uppar ak ok hai warna 

import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Creatable from "react-select/creatable";
import toast from "react-hot-toast";  // Import react-hot-toast
import { login as storeLogin } from "../../store/authSlice";
import api from "../../api/axiosConfig";
import { skillOptions } from "../../data/constants";
import EyeIcon from "../Icons/EyeIcon"; // Import icons
import EyeCloseIcon from "../Icons/EyeCloseIcon";

const CandidateRegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [skills, setSkills] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const skillsArray = skills.map((item) => item.value);
    const formData = { name, email, password, skills: skillsArray };

    setIsLoading(true);

    try {
      const response = await api.post("/api/v1/candidates/signup", formData);

      if (response.status === 201) {
        dispatch(storeLogin({ isRecruiter: false, userData: response.data }));
        navigate("/");
        toast.success("Registration successful!"); // Toast success message
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setError("Something went wrong!");
      toast.error("Registration failed! Please try again."); // Toast error message
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex items-center justify-center px-4 py-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12 space-y-6 lg:space-y-8"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-slate-100">Candidate Sign Up</h2>

        {error && (
          <p className="text-red-600 text-center font-semibold">{error}</p>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <div className="space-y-2">
            <label className="block text-slate-100 font-medium text-sm lg:text-base">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none text-slate-800 transition-all duration-300"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-slate-100 font-medium text-sm lg:text-base">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none text-slate-800 transition-all duration-300"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-slate-100 font-medium text-sm lg:text-base">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none text-slate-800 pr-12 transition-all duration-300"
                required
              />
              <div
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform duration-300"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeCloseIcon height="1.5em" width="1.5em" />
                ) : (
                  <EyeIcon height="1.5em" width="1.5em" />
                )}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-slate-100 font-medium text-sm lg:text-base">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg outline-none text-slate-800 pr-12 transition-all duration-300 ${
                  confirmPassword
                    ? password === confirmPassword
                      ? "border-green-500 focus:ring-green-500"
                      : "border-red-500 focus:ring-red-500"
                    : "border-slate-300 focus:ring-purple-500"
                }`}
                required
              />
              <div
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform duration-300"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeCloseIcon height="1.5em" width="1.5em" />
                ) : (
                  <EyeIcon height="1.5em" width="1.5em" />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-slate-100 font-medium text-sm lg:text-base">Skills</label>
          <Creatable
            options={skillOptions}
            isMulti
            value={skills}
            onChange={(selectedOptions) => setSkills(selectedOptions)}
            className="text-sm"
            classNamePrefix="select"
          />
        </div>

        <button
          type="submit"
          disabled={
            isLoading ||
            !name ||
            !email ||
            !password ||
            !confirmPassword ||
            password !== confirmPassword
          }
          className={`w-full py-3 rounded-md text-white font-semibold text-lg transition-all ${
            isLoading ||
            !name ||
            !email ||
            !password ||
            !confirmPassword ||
            password !== confirmPassword
              ? "bg-purple-300 cursor-not-allowed"
              : "bg-purple-600 hover:bg-purple-700"
          } transform hover:scale-105 transition-all duration-300`}
        >
          {isLoading ? "Registering..." : "Register"}
        </button>

        <p className="text-center text-slate-300 text-sm lg:text-base">
          Already registered?{" "}
          <Link
            to="/login/candidate"
            className="text-purple-400 hover:text-purple-300 hover:underline font-medium transition-colors duration-300"
          >
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default CandidateRegisterForm;
