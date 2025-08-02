import React from 'react';
import { Building2, Facebook, Twitter, Linkedin, Instagram, Mail, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Logo & Description */}
          <div>
            <div className="flex items-center mb-6">
              <Building2 className="h-8 w-8 lg:h-10 lg:w-10 text-blue-400" />
              <span className="ml-3 text-xl lg:text-2xl font-bold">Hierly</span>
            </div>
            <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-6">
              Helping candidates and employers connect in the most efficient way. Find top jobs and perfect candidates.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Candidates */}
          <div>
            <h3 className="text-lg lg:text-xl font-bold mb-6 text-blue-400">Candidates</h3>
            <ul className="space-y-3 text-gray-400 text-sm lg:text-base">
              <li><Link to="/jobs" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Browse Jobs</Link></li>
              <li><Link to="/register/candidate" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Create Profile</Link></li>
              <li><Link to="/resume-tips" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Resume Tips</Link></li>
              <li><Link to="/interview-tips" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Interview Guidance</Link></li>
            </ul>
          </div>

          {/* Employers */}
          <div>
            <h3 className="text-lg lg:text-xl font-bold mb-6 text-purple-400">Employers</h3>
            <ul className="space-y-3 text-gray-400 text-sm lg:text-base">
              <li><Link to="/login/recruiter" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Post Job</Link></li>
              <li><Link to="/login/recruiter" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Search Talent</Link></li>
              <li><Link to="/login/recruiter" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Company Dashboard</Link></li>
              <li><Link to="/login/recruiter" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Pricing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg lg:text-xl font-bold mb-6 text-green-400">Company</h3>
            <ul className="space-y-3 text-gray-400 text-sm lg:text-base">
              <li><Link to="/" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block flex items-center gap-2"><Home size={16} /> Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Contact</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Privacy Policy</Link></li>
              <li><Link to="/terms-condition" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm lg:text-base">
            © 2025 Hierly. All rights reserved. Made with ❤️ for job seekers and employers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
