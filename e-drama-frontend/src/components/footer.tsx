import React from 'react';

const Footer: React.FC = () => {
  return (
   
    <footer className="fixed inset-x-0 bottom-0 bg-gray-700 text-white py-6 shadow-inner z-10">
      <div className="container mx-auto text-center text-sm sm:text-base">
       
        <p className="hover:text-blue-400 cursor-pointer transition-colors duration-200">
          &copy; {new Date().getFullYear()} E-DRAMA. All rights reserved.
        </p>
        <p className="mt-2 hover:text-blue-400 cursor-pointer transition-colors duration-200">
          Designed and Developed with passion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
