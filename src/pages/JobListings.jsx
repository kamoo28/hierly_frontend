import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import api from "../api/axiosConfig";
import JobsList from "../components/JobsList";
import JobApplication from "../components/modals/JobApplication";
import Confirmation from "../components/modals/Confirmation";

const JobListings = () => {
  const userData = useSelector((state) => state.auth.userData);

  const [isLoading, setIsLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);

  const [isJobApplicationModalOpen, setIsJobApplicationModalOpen] =
    useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const [confirmationMessage, setConfirmationMessage] = useState("");

  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true);
      const jobsResponse = await api.get("/api/v1/jobs");
      setJobs(jobsResponse.data);
      setIsLoading(false);
    };

    fetchJobs();
  }, []);

  const openApplicationModal = () => {
    setIsJobApplicationModalOpen(true);
  };

  const closeApplicationModal = () => {
    setIsJobApplicationModalOpen(false);
  };

  const openConfirmationModal = () => {
    setIsConfirmationModalOpen(true);
  };

  const closeConfirmationModal = () => {
    setIsConfirmationModalOpen(false);
  };

  const applyForJob = async (formData) => {
    try {
      const applyResponse = await api.post("/api/v1/applications", formData);

      if (applyResponse.status === 201) {
        closeApplicationModal();

        setConfirmationMessage(
          `Successfully applied to the job: ${selectedJob?.position} at ${selectedJob?.company}`
        );

        openConfirmationModal();
      }
    } catch (error) {
      console.log(error);
      closeApplicationModal();

      setConfirmationMessage(
        "Some error occurred while applying for the job. Kindly try again!"
      );

      openConfirmationModal();
    }
  };

  const deleteJob = async (job) => {
    setActionLoading(true);

    try {
      const deleteResponse = await api.delete(`/api/v1/jobs/${job.id}`);

      if (deleteResponse.status === 204) {
        const removeResponse = await api.post(
          `/api/v1/recruiters/${userData.email}/removejob`,
          job.id
        );

        if (removeResponse.status === 200) {
          setJobs(jobs.filter((item) => item.id !== job.id));

          setConfirmationMessage(
            `Successfully deleted the job: ${job?.position} at ${job?.company}`
          );

          openConfirmationModal();
        }

        setActionLoading(false);
      }
    } catch (error) {
      console.log(error);
      setActionLoading(false);

      setConfirmationMessage(
        "Some error occurred while deleting the job. Kindly try again!"
      );

      openConfirmationModal();
    }
  };

  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="relative">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-blue-600 font-semibold">Loading...</span>
              </div>
            </div>
          </div>
        ) : jobs.length > 0 ? (
          <JobsList
            actionLoading={actionLoading}
            jobs={jobs}
            onApply={openApplicationModal}
            onDelete={deleteJob}
            setSelectedJob={setSelectedJob}
          />
        ) : (
          <div className="text-center py-20">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 max-w-md mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No Jobs Available</h3>
              <p className="text-gray-600">
                No available jobs to show! Please check back later.
              </p>
            </div>
          </div>
        )}

        <JobApplication
          isOpen={isJobApplicationModalOpen}
          onClose={closeApplicationModal}
          job={selectedJob}
          applyForJob={applyForJob}
        />

        <Confirmation
          isOpen={isConfirmationModalOpen}
          onClose={closeConfirmationModal}
          message={confirmationMessage}
        />
      </div>
    </div>
  );
};

export default JobListings;
