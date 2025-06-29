// import React from 'react';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-gray-800 text-gray-300 px-6 py-12">
//       <div className="max-w-7xl mx-auto">
//         <h3 className="text-2xl font-semibold text-indigo-400 mb-4">Get in Touch</h3>
//         <p className="mb-4">
//           Have questions, feedback, or need support? We're here to help.
//         </p>
//         <ul className="text-sm space-y-2">
//           <li className="flex items-center gap-2">
//             <i className="fas fa-envelope text-indigo-400"></i>
//             <a href="mailto:info@edrama.com" className="hover:text-white transition">info@edrama.com</a>
//           </li>
//           <li className="flex items-center gap-2">
//             <i className="fas fa-phone-alt text-indigo-400"></i>
//             <a href="tel:+1234567890" className="hover:text-white transition">+254 (799) 567-890</a>
//           </li>
//           <li className="flex items-center gap-2">
//             <i className="fas fa-map-marker-alt text-indigo-400"></i>
//             123 Drama Lane, Eldoret City, Kenya
//           </li>
//         </ul>
//       </div>

//       {/* Bottom */}
//       <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
//         &copy; {new Date().getFullYear()} E-DRAMA. All rights reserved. | Designed with passion.
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact-section" className="bg-gray-900 text-gray-200 px-6 py-12">
      <div className="max-w-7xl mx-auto">
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
            <a href="tel:+254799567890" className="hover:text-white transition">+254 (799) 567-890</a>
          </li>
          <li className="flex items-center gap-2">
            <i className="fas fa-map-marker-alt text-indigo-400"></i>
            123 Drama Lane, Eldoret City, Kenya
          </li>
        </ul>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} E-DRAMA. All rights reserved. | Designed with passion.
      </div>
    </footer>
  );
};

export default Footer;

