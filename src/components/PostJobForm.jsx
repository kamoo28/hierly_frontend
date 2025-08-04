import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Creatable from "react-select/creatable";

import { addJobIdToRecruiter } from "../store/authSlice";
import api from "../api/axiosConfig";
import { skillOptions } from "../data/constants";

const PostJobForm = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userData = useSelector((state) => state.auth.userData);
  const isRecruiter = useSelector((state) => state.auth.isRecruiter);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setCompany(userData?.company);
    setLocation(userData?.location);
  }, [userData]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login/recruiter");
    } else if (!isRecruiter) {
      navigate("/");
    }
  }, [isAuthenticated, navigate, isRecruiter]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const skillsArray = skills.map((item) => item.value);
    const formData = {
      position,
      company,
      location,
      experience,
      description,
      skills: skillsArray,
    };

    setIsLoading(true);

    try {
      const jobResponse = await api.post("/api/v1/jobs", formData);

      if (jobResponse.status === 201) {
        const appendResponse = await api.post(
          `/api/v1/recruiters/${userData?.email}/appendjob`,
          jobResponse.data.id
        );

        if (appendResponse.status === 200) {
          dispatch(addJobIdToRecruiter({ jobId: jobResponse.data.id }));

          setIsLoading(false);
          navigate("/jobs");
        }

        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setError("Something went wrong!");
      setIsLoading(false);
    }

    console.log(skillsArray);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 lg:p-12 mb-24 bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-gray-200 flex flex-col gap-6 mx-auto"
    >
      <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-8">
        Post New Job
      </h1>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">Position</label>
        <input
          type="text"
          placeholder="Position (e.g. Software Engineer)"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="w-full py-3 px-4 text-lg rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
          required={true}
        />
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">Company</label>
        <input
          type="text"
          value={company}
          readOnly={true}
          className="w-full py-3 px-4 rounded-xl border border-gray-300 bg-gray-100 text-gray-700 font-semibold"
          required={true}
        />
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">Location</label>
        <input
          type="text"
          value={location}
          readOnly={true}
          className="w-full py-3 px-4 rounded-xl border border-gray-300 bg-gray-100 text-gray-700 font-semibold"
          required={true}
        />
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">Experience Required</label>
        <input
          type="text"
          placeholder="Experience Required (e.g. 3+ years)"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          className="w-full py-3 px-4 text-lg rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
          required={true}
        />
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">Job Description</label>
        <textarea
          cols="30"
          rows="5"
          placeholder="Job Description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full py-3 px-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 resize-none"
        ></textarea>
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">Skills Required</label>
        <Creatable
          options={skillOptions}
          isMulti
          value={skills}
          onChange={(selectedOptions) => setSkills(selectedOptions)}
          className="text-gray-800"
          classNamePrefix="select"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={`mt-8 py-4 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl text-white text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
          isLoading && "opacity-50 cursor-not-allowed"
        }`}
      >
        {isLoading ? "Posting Job..." : "Post Job"}
      </button>

      {/* ERROR NOTIFICATION */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <p className="text-red-600 text-center font-semibold">{error}</p>
        </div>
      )}
    </form>
  );
};

export default PostJobForm;
