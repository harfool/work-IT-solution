import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-xl font-medium">WorkIT Solution</span>
            </div>
            <p className="text-gray-600 mb-8 max-w-md font-light leading-relaxed">
              Workitsolution, Nadi ka Phatak Benar Rd, Shyam Nagar, Nirmal
              Vihar, Jhotwara, Jaipur, Rajasthan 302012
            </p>
            <div className="space-y-2 mb-8">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-500" />
                <span className="text-gray-600 font-light">+91 6376449199</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-500" />
                <span className="text-gray-600 font-light">
                  info@workitsolution.com
                </span>
              </div>
            </div>
            <div className="flex space-x-6">
              <Facebook className="h-5 w-5 text-gray-500 hover:text-gray-900 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-500 hover:text-gray-900 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-500 hover:text-gray-900 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-500 hover:text-gray-900 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-gray-900 transition-colors font-light"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-600 hover:text-gray-900 transition-colors font-light"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-gray-600 hover:text-gray-900 transition-colors font-light"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-gray-600 hover:text-gray-900 transition-colors font-light"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-gray-900 transition-colors font-light"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">Newsletter</h3>
            <ul className="space-y-2 mb-6 text-base font-light cursor-pointer">
              <li className="text-gray-600 hover:text-gray-900 transition-colors font-light">
                Website Design & Development
              </li>
              <li className="text-gray-600 hover:text-gray-900 transition-colors font-light">
                Mobile App Development
              </li>
              <li className="text-gray-600 hover:text-gray-900 transition-colors font-light">
                Cloud Solutions
              </li>
              <li className="text-gray-600 hover:text-gray-900 transition-colors font-light">
                Cyber Security
              </li>
              <li className="text-gray-600 hover:text-gray-900 transition-colors font-light">
                IT Consulting & Support
              </li>
            </ul>
            <form className="flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-inner">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-base font-light"
              />
              <button
                type="submit"
                className="ml-2 text-gray-500 hover:text-gray-900 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 2L11 13"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 2L15 22L11 13L2 9L22 2Z"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-500 font-light">
            © 2025 WorkIT Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
