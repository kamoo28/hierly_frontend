import React from 'react';
import { Building2, Facebook, Twitter, Linkedin, Instagram, Mail, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* Logo & Description */}
          <div>
            <div className="flex items-center mb-4">
              <Building2 className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">JobPortal</span>
            </div>
            <p className="text-gray-400 text-sm">
              Helping candidates and employers connect in the most efficient way. Find top jobs and perfect candidates.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Candidates */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Candidates</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/jobs" className="hover:text-white">Browse Jobs</Link></li>
              <li><Link to="/signup" className="hover:text-white">Create Profile</Link></li>
              <li><Link to="/resume-tips" className="hover:text-white">Resume Tips</Link></li>
              <li><Link to="/interview-tips" className="hover:text-white">Interview Guidance</Link></li>
            </ul>
          </div>

          {/* Employers */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Employers</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/login/recruiter" className="hover:text-white">Post Job</Link></li>
              <li><Link to="/login/recruiter" className="hover:text-white">Search Talent</Link></li>
              <li><Link to="/login/recruiter" className="hover:text-white">Company Dashboard</Link></li>
              <li><Link to="/login/recruiter" className="hover:text-white">Pricing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-white flex items-center gap-1"><Home size={16} /> Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms-condition" className="hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        
      </div>
    </footer>
  );
};

export default Footer;
