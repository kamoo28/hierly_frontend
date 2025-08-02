// import { useState, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// import { login as storeLogin } from "../../store/authSlice";
// import api from "../../api/axiosConfig";

// const RecruiterRegisterForm = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [company, setCompany] = useState("");
//   const [location, setLocation] = useState("");

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate("/");
//     }
//   }, [isAuthenticated, navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     const jobIds = [];
//     const formData = { name, email, password, company, location, jobIds };

//     setIsLoading(true);

//     try {
//       const response = await api.post("/api/v1/recruiters/signup", formData);

//       if (response.status === 201) {
//         dispatch(storeLogin({ isRecruiter: true, userData: response.data }));

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
//       className="p-14 mb-24 bg-slate-700 w-full max-w-md 2xl:max-w-xl rounded-lg flex flex-col gap-4 2xl:gap-10 mx-auto"
//     >
//       <h1 className="text-3xl 2xl:text-5xl font-bold text-white text-center mb-8 2xl:mb-12">
//         Recruiter Signup
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
//         <input
//           type="text"
//           placeholder="Company"
//           value={company}
//           onChange={(e) => setCompany(e.target.value)}
//           className="w-full py-2 px-4 text-lg rounded-lg text-black/80 font-semibold"
//           required={true}
//         />
//       </div>

//       <div>
//         <input
//           type="text"
//           placeholder="Location"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           className="w-full py-2 px-4 text-lg rounded-lg text-black/80 font-semibold"
//           required={true}
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
//           to="/login/recruiter"
//           className="text-white/80 hover:text-purple-500 text-lg font-semibold"
//         >
//           Already Registered? Login here
//         </Link>
//       </p>
//     </form>
//   );
// };

// export default RecruiterRegisterForm;

// uii by  chetan

// import { useState, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { login as storeLogin } from "../../store/authSlice";
// import api from "../../api/axiosConfig";

// const RecruiterRegisterForm = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [company, setCompany] = useState("");
//   const [location, setLocation] = useState("");

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate("/");
//     }
//   }, [isAuthenticated, navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     const jobIds = [];
//     const formData = { name, email, password, company, location, jobIds };

//     setIsLoading(true);

//     try {
//       const response = await api.post("/api/v1/recruiters/signup", formData);

//       if (response.status === 201) {
//         dispatch(storeLogin({ isRecruiter: true, userData: response.data }));
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
//     <div className="min-h-screen rounded-3xl bg-gradient-to-br flex items-center justify-center">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-slate-800 shadow-xl p-10 rounded-2xl max-w-4xl w-full text-white"
//       >
//         <h1 className="text-4xl font-bold mb-10 text-center">Recruiter Signup</h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <input
//             type="text"
//             placeholder="Full Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="py-3 px-4 rounded-lg text-black placeholder-gray-500 font-medium"
//             required
//           />

//           <input
//             type="email"
//             placeholder="Email Address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="py-3 px-4 rounded-lg text-black placeholder-gray-500 font-medium"
//             required
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="py-3 px-4 rounded-lg text-black placeholder-gray-500 font-medium"
//             required
//           />

//           <input
//             type="password"
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             className={`py-3 px-4 rounded-lg text-black placeholder-gray-500 font-medium ${
//               password === confirmPassword
//                 ? "border-green-500 outline-green-500"
//                 : confirmPassword && "border-red-500 outline-red-500"
//             }`}
//             required
//           />

//           <input
//             type="text"
//             placeholder="Company Name"
//             value={company}
//             onChange={(e) => setCompany(e.target.value)}
//             className="py-3 px-4 rounded-lg text-black placeholder-gray-500 font-medium"
//             required
//           />

//           <input
//             type="text"
//             placeholder="Location"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             className="py-3 px-4 rounded-lg text-black placeholder-gray-500 font-medium"
//             required
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
//           className={`mt-10 w-full py-3 rounded-lg text-lg font-bold transition-opacity ${
//             isLoading ||
//             !name ||
//             !email ||
//             !password ||
//             !confirmPassword ||
//             password !== confirmPassword
//               ? "bg-green-500 opacity-50 cursor-not-allowed"
//               : "bg-green-500 hover:bg-green-600"
//           }`}
//         >
//           {isLoading ? "Registering..." : "Register"}
//         </button>

//         {error && (
//           <p className="text-red-500 text-center mt-4 font-semibold">{error}</p>
//         )}

//         <p className="text-center text-gray-300 mt-6">
//           Already Registered?{" "}
//           <Link
//             to="/login/recruiter"
//             className="text-purple-400 hover:underline font-semibold"
//           >
//             Login here
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default RecruiterRegisterForm;


// more deifnignn ui 

import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login as storeLogin } from "../../store/authSlice";
import api from "../../api/axiosConfig";
import { Eye, EyeOff } from "lucide-react";

const RecruiterRegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const jobIds = [];
    const formData = { name, email, password, company, location, jobIds };

    setIsLoading(true);

    try {
      const response = await api.post("/api/v1/recruiters/signup", formData);

      if (response.status === 201) {
        dispatch(storeLogin({ isRecruiter: true, userData: response.data }));
        // Clear form after success
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setCompany("");
        setLocation("");
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      const msg =
        err.response?.data?.message || "Something went wrong. Try again.";
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const isFormInvalid =
    !name ||
    !email ||
    !password ||
    !confirmPassword ||
    !company ||
    !location ||
    password !== confirmPassword;

  return (
    <div className="w-full flex items-center justify-center px-4 py-6">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 shadow-2xl p-6 sm:p-8 lg:p-12 rounded-3xl w-full max-w-5xl text-white"
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-8 lg:mb-10 text-center">
          Recruiter Signup
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="py-3 lg:py-4 px-4 lg:px-5 text-base lg:text-lg rounded-xl text-black placeholder-gray-500 font-semibold transition-all duration-300 focus:ring-2 focus:ring-purple-500 outline-none"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-3 lg:py-4 px-4 lg:px-5 text-base lg:text-lg rounded-xl text-black placeholder-gray-500 font-semibold transition-all duration-300 focus:ring-2 focus:ring-purple-500 outline-none"
            required
          />

          {/* Password Input */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="py-3 lg:py-4 px-4 lg:px-5 text-base lg:text-lg w-full rounded-xl text-black placeholder-gray-500 font-semibold pr-12 transition-all duration-300 focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black hover:scale-110 transition-transform duration-300"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Confirm Password Input */}
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`py-3 lg:py-4 px-4 lg:px-5 text-base lg:text-lg w-full rounded-xl text-black placeholder-gray-500 font-semibold pr-12 transition-all duration-300 focus:ring-2 outline-none ${
                confirmPassword &&
                (password === confirmPassword
                  ? "border-green-500 focus:ring-green-500"
                  : "border-red-500 focus:ring-red-500")
              }`}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black hover:scale-110 transition-transform duration-300"
            >
              {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <input
            type="text"
            placeholder="Company Name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="py-3 lg:py-4 px-4 lg:px-5 text-base lg:text-lg rounded-xl text-black placeholder-gray-500 font-semibold transition-all duration-300 focus:ring-2 focus:ring-purple-500 outline-none"
            required
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="py-3 lg:py-4 px-4 lg:px-5 text-base lg:text-lg rounded-xl text-black placeholder-gray-500 font-semibold transition-all duration-300 focus:ring-2 focus:ring-purple-500 outline-none"
            required
          />
        </div>

        {/* Password match warning */}
        {password &&
          confirmPassword &&
          password !== confirmPassword && (
            <p className="text-red-400 mt-2 text-center">
              Passwords do not match.
            </p>
          )}

        <button
          type="submit"
          disabled={isLoading || isFormInvalid}
          className={`mt-8 lg:mt-10 w-full py-3 lg:py-4 rounded-xl text-base lg:text-lg font-bold transition-all duration-300 transform hover:scale-105 ${
            isFormInvalid
              ? "bg-green-600 opacity-50 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {isLoading ? "Registering..." : "Register"}
        </button>

        {error && (
          <p className="text-red-500 text-center mt-4 font-semibold">{error}</p>
        )}

        <p className="text-center text-gray-400 mt-6 text-sm lg:text-base">
          Already Registered?{" "}
          <Link
            to="/login/recruiter"
            className="text-purple-400 hover:text-purple-300 hover:underline font-semibold transition-colors duration-300"
          >
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RecruiterRegisterForm;
