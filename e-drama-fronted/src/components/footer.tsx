// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-400 mb-4">Get in Touch</h3>
          <p className="mb-4">
            Have questions, feedback, or need support? We're here to help.
          </p>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              <i className="fas fa-envelope text-indigo-400"></i>
              <a href="mailto:info@edrama.com" className="hover:text-white transition">info@edrama.com</a>
            </li>
            <li className="flex items-center gap-2">
              <i className="fas fa-phone-alt text-indigo-400"></i>
              <a href="tel:+1234567890" className="hover:text-white transition">+1 (234) 567-890</a>
            </li>
            <li className="flex items-center gap-2">
              <i className="fas fa-map-marker-alt text-indigo-400"></i>
              123 Drama Lane, Art City, Kenya
            </li>
          </ul>
          <div className="mt-6 flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-400 mb-4">Leave a Comment</h3>
          <form>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-4 px-4 py-2 rounded-md bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full mb-4 px-4 py-2 rounded-md bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full mb-4 px-4 py-2 rounded-md bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-y"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold py-2 px-6 rounded-md shadow-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
        &copy; {new Date().getFullYear()} E-DRAMA. All rights reserved. | Designed with passion.
      </div>
    </footer>
  );
};

export default Footer;
