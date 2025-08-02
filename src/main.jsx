import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store.js";

import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import JobListings from "./pages/JobListings.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import PostJob from "./pages/PostJob.jsx";
import BrowseJobs from "./pages/BrowseJobs.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import ResumeTips from "./pages/ResumeTips.jsx";
import InterviewTips from "./pages/InerviewTips.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Term from "./pages/Term.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <JobListings />,
      },
      {
        path: "/browse-jobs",
        element:<BrowseJobs />, // tesignt  gpt 
      },
      {
        path: "/about",
        element:<AboutUs />, // tesignt  gpt 
      },
      {
        path: "/contact",
        element:<ContactUs />, // tesignt  gpt 
      },
      {
        path: "/login/:type",
        element: <Login />,
      },
      {
        path: "/register/:type",
        element: <Register />,
      },
      {
        path: "/postjob",
        element: <PostJob />,
      }, 
      {
        path: "/resume-tips",
        element: <ResumeTips />,
      },
       {
        path: "/interview-tips",
        element: <InterviewTips />,
      },
       {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
       {
        path: "/terms-condition",
        element: <Term />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
