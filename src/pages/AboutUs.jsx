import React from "react";
import { Briefcase, Search, Users, ShieldCheck } from "lucide-react";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
  
    <><div className="min-h-screen bg-gray-100 text-gray-800 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-10 text-green-700">
          About JobQuest
        </h1>

        {/* Who We Are */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">🚀 Who We Are</h2>
          <p className="text-lg leading-relaxed">
            Welcome to <span className="font-semibold">JobQuest</span>, your trusted
            job search and recruitment partner. We are a modern job portal built to
            simplify the process of job hunting and hiring, connecting talented
            professionals with top employers across India.
          </p>
        </section>

        {/* Mission */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">🎯 Our Mission</h2>
          <blockquote className="text-xl italic border-l-4 border-green-600 pl-4">
            "To bridge the gap between talent and opportunity by providing a seamless,
            smart, and inclusive platform for job seekers and recruiters."
          </blockquote>
        </section>

        {/* What We Offer */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">💡 What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow hover:shadow-md transition">
              <Search className="text-green-600 mb-4" size={32} />
              <h3 className="font-bold text-xl mb-2">Smart Job Search</h3>
              <p>Find jobs that suit your skills, location, and experience.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow hover:shadow-md transition">
              <Briefcase className="text-green-600 mb-4" size={32} />
              <h3 className="font-bold text-xl mb-2">Easy Applications</h3>
              <p>Apply to multiple jobs with one profile and click.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow hover:shadow-md transition">
              <Users className="text-green-600 mb-4" size={32} />
              <h3 className="font-bold text-xl mb-2">Verified Recruiters</h3>
              <p>Connect with trusted companies and hiring agencies.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow hover:shadow-md transition">
              <ShieldCheck className="text-green-600 mb-4" size={32} />
              <h3 className="font-bold text-xl mb-2">Secure Platform</h3>
              <p>Your data is protected. Your trust is our priority.</p>
            </div>
          </div>
        </section>

        {/* For Job Seekers & Recruiters */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">👥 Who Can Use JobQuest?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-2xl font-bold text-green-700 mb-2">Job Seekers</h3>
              <ul className="list-disc pl-6 text-lg space-y-1">
                <li>Explore thousands of job opportunities</li>
                <li>Build your profile and resume</li>
                <li>Track your applications in one place</li>
                <li>Get career advice and tips</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-2xl font-bold text-green-700 mb-2">Recruiters</h3>
              <ul className="list-disc pl-6 text-lg space-y-1">
                <li>Post jobs in minutes</li>
                <li>Find perfect candidates with smart filters</li>
                <li>Collaborate with your hiring team</li>
                <li>Manage applications easily</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Community CTA */}
        <section className="text-center bg-green-100 p-8 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-green-800">
            🌍 Join the JobQuest Community
          </h2>
          <p className="text-lg mb-6">
            Thousands of professionals and recruiters trust JobQuest for career
            growth and hiring success. What are you waiting for?
          </p>
          <a
            href="/register"
            className="bg-green-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-green-700 transition"
          >
            Get Started Now
          </a>
        </section>
      </div>
    </div> <Footer/> </>
   
    
  );
};

export default AboutUs;
