import React from "react";
import { Briefcase, Search, Users, ShieldCheck, ArrowRight, Star } from "lucide-react";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-800 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
              🌟 Learn About Our Mission
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Hierly
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Connecting talented professionals with amazing opportunities since day one.
            </p>
          </div>

          {/* Who We Are */}
          <section className="mb-20">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-2xl mr-4">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Who We Are</h2>
              </div>
              <p className="text-lg lg:text-xl leading-relaxed text-gray-600">
                Welcome to <span className="font-bold text-blue-600">Hierly</span>, your trusted
                job search and recruitment partner. We are a modern job portal built to
                simplify the process of job hunting and hiring, connecting talented
                professionals with top employers across the globe.
              </p>
            </div>
          </section>

          {/* Mission */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white shadow-xl">
              <div className="flex items-center mb-6">
                <div className="bg-white/20 p-3 rounded-2xl mr-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold">Our Mission</h2>
              </div>
              <blockquote className="text-xl lg:text-2xl italic leading-relaxed">
                "To bridge the gap between talent and opportunity by providing a seamless,
                smart, and inclusive platform for job seekers and recruiters worldwide."
              </blockquote>
            </div>
          </section>

          {/* What We Offer */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">What We Offer</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive solutions for both job seekers and employers
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-2xl mb-6 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                  <Search className="text-blue-600 w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">Smart Job Search</h3>
                <p className="text-gray-600 leading-relaxed">Find jobs that perfectly match your skills, location, and experience level.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-2xl mb-6 group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300">
                  <Briefcase className="text-purple-600 w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-purple-600 transition-colors duration-300">Easy Applications</h3>
                <p className="text-gray-600 leading-relaxed">Apply to multiple jobs with one profile and a single click.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group">
                <div className="bg-gradient-to-br from-green-100 to-green-200 p-4 rounded-2xl mb-6 group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300">
                  <Users className="text-green-600 w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-green-600 transition-colors duration-300">Verified Recruiters</h3>
                <p className="text-gray-600 leading-relaxed">Connect with trusted companies and verified hiring agencies.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group">
                <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-4 rounded-2xl mb-6 group-hover:from-pink-200 group-hover:to-pink-300 transition-all duration-300">
                  <ShieldCheck className="text-pink-600 w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-pink-600 transition-colors duration-300">Secure Platform</h3>
                <p className="text-gray-600 leading-relaxed">Your data is protected with enterprise-grade security.</p>
              </div>
            </div>
          </section>

          {/* For Job Seekers & Recruiters */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Who Can Use Hierly?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our platform serves both job seekers and employers with tailored solutions
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-2xl mr-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-blue-600">Job Seekers</h3>
                </div>
                <ul className="space-y-4 text-lg text-gray-600">
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Explore thousands of job opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Build your professional profile and resume</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Track your applications in one place</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Get career advice and interview tips</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-3 rounded-2xl mr-4">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-purple-600">Recruiters</h3>
                </div>
                <ul className="space-y-4 text-lg text-gray-600">
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Post jobs in minutes with easy tools</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Find perfect candidates with smart filters</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Collaborate with your hiring team</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Manage applications efficiently</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Community CTA */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 lg:p-12 rounded-3xl shadow-2xl text-white">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  🌍 Join the Hierly Community
                </h2>
                <p className="text-lg lg:text-xl mb-8 leading-relaxed">
                  Thousands of professionals and recruiters trust Hierly for career
                  growth and hiring success. Start your journey today!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/register/candidate"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Join as Job Seeker
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                  <a
                    href="/register/recruiter"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/20 text-white font-bold rounded-xl hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-white/30"
                  >
                    Join as Recruiter
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
