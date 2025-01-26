import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold mb-4">About HireSmart</h3>
            <p className="text-gray-400 leading-relaxed">
              HireSmart revolutionizes hiring with AI-powered solutions that connect top talent with employers efficiently. 
              We prioritize simplicity, speed, and precision in recruitment.
            </p>
          </div>

          {/* Column 2: Features */}
          <div>
            <h3 className="text-xl font-bold mb-4">Why Choose HireSmart?</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <span className="text-blue-500">&#10003;</span>
                <span className="text-gray-400">AI-Powered Screening</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-blue-500">&#10003;</span>
                <span className="text-gray-400">Streamlined Hiring Process</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-blue-500">&#10003;</span>
                <span className="text-gray-400">Customizable Job Postings</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-blue-500">&#10003;</span>
                <span className="text-gray-400">Real-Time Analytics</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <p className="text-gray-400 mb-4">
              Stay connected and get the latest updates by following us on social media.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaFacebook size={28} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaTwitter size={28} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaInstagram size={28} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaLinkedin size={28} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-500">&copy; 2025 HireSmart. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
