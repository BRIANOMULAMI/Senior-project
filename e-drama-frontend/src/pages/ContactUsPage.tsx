
import React from 'react';

const ContactUsPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] p-8 text-center bg-gray-100 m-4 rounded-lg shadow-inner">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Contact Us</h1>
      <p className="text-lg text-gray-600 max-w-2xl">
        Have questions, suggestions, or need support? We're here to help!
      </p>
      <div className="mt-6 text-xl text-gray-700">
        <p className="mb-2">Email: <a href="mailto:info@edrama.com" className="text-blue-600 hover:underline">info@edrama.com</a></p>
        <p className="mb-2">Phone: <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 (234) 567-890</a></p>
        <p className="mb-2">Address: 123 Drama Lane, Art City, Kenya</p>
      </div>
    </div>
  );
};

export default ContactUsPage;
