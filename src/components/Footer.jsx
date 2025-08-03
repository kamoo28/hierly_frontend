import React from 'react';
import { Briefcase, Facebook, Twitter, Linkedin, Instagram, Mail, Home, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Logo & Description */}
          <div>
            <Logo className="mb-6 text-white" />
            <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-6">
              Connecting talented professionals with amazing opportunities. Your career journey starts here.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-gray-800 p-2 rounded-xl text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all duration-300 transform hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-xl text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all duration-300 transform hover:scale-110">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-xl text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all duration-300 transform hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-xl text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all duration-300 transform hover:scale-110">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Candidates */}
          <div>
            <h3 className="text-lg lg:text-xl font-bold mb-6 text-blue-400">For Job Seekers</h3>
            <ul className="space-y-3 text-gray-400 text-sm lg:text-base">
              <li>
                <Link to="/browse-jobs" className="flex items-center hover:text-white transition-colors duration-300 group">
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link to="/register/candidate" className="flex items-center hover:text-white transition-colors duration-300 group">
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Create Profile
                </Link>
              </li>
              <li>
                <Link to="/resume-tips" className="flex items-center hover:text-white transition-colors duration-300 group">
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Resume Tips
                </Link>
              </li>
              <li>
                <Link to="/interview-tips" className="flex items-center hover:text-white transition-colors duration-300 group">
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Interview Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Employers */}
          <div>
            <h3 className="text-lg lg:text-xl font-bold mb-6 text-purple-400">For Employers</h3>
            <ul className="space-y-3 text-gray-400 text-sm lg:text-base">
              <li>
                <Link to="/login/recruiter" className="flex items-center hover:text-white transition-colors duration-300 group">
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Post Jobs
                </Link>
              </li>
              <li>
                <Link to="/login/recruiter" className="flex items-center hover:text-white transition-colors duration-300 group">
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Find Talent
                </Link>
              </li>
              <li>
                <Link to="/login/recruiter" className="flex items-center hover:text-white transition-colors duration-300 group">
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/login/recruiter" className="flex items-center hover:text-white transition-colors duration-300 group">
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg lg:text-xl font-bold mb-6 text-green-400">Company</h3>
            <ul className="space-y-3 text-gray-400 text-sm lg:text-base">
              <li>
                <Link to="/" className="flex items-center hover:text-white transition-colors duration-300 group">
                  <Home className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="flex items-center hover:text-white transition-colors duration-300 group">
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center hover:text-white transition-colors duration-300 group">
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="flex items-center hover:text-white transition-colors duration-300 group">
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-condition" className="flex items-center hover:text-white transition-colors duration-300 group">
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="relative z-10 border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm lg:text-base mb-4 md:mb-0">
              © 2025 Hierly. All rights reserved. Made with ❤️ for job seekers and employers.
            </p>
            <div className="flex items-center space-x-4">
              <Mail className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400 text-sm">support@hierly.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
