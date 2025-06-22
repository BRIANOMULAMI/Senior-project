
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (

    <div className="w-full min-h-[calc(100vh - 80px)] bg-gray-900 text-white">
      <div className="container mx-auto">
        {/* Hero Section - Designed to match the two-column layout from Dribbble */}
        <section id="home-section" className="flex flex-col md:flex-row items-center justify-between py-12 md:py-20 lg:py-24 gap-10 md:gap-16 px-4">
          {/* Left Column: Text Content and Call to Action */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 drop-shadow-md">
              <span className="block text-indigo-400">Welcome to E-DRAMA!</span>
              <span className="block text-gray-50 mt-2">Stage Your Success</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">
              Your ultimate platform for seamless drama competition management.
              Explore events, track progress, and celebrate theatrical talent with ease.
            </p>
       
            <Link
              to="#about-section" // Link to the About section on the same page
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              Learn More About Us
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
            </Link>
          </div>

          
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src="https://placehold.co/600x400/374151/ffffff?text=Dramatic+Performance+Illustration"
              alt="Dramatic Arts Illustration"
              className="rounded-3xl shadow-2xl max-w-full h-auto transform transition-transform duration-500 hover:scale-105"
              style={{
                objectFit: 'cover',
                aspectRatio: '3/2'
              }}
            />
          </div>
        </section>

        {/* About Section */}
        <section id="about-section" className="py-16 md:py-24 bg-gray-800 px-4 mt-16 rounded-lg shadow-xl">
          <h2 className="text-4xl font-extrabold text-center text-indigo-400 mb-8 drop-shadow-md">About E-DRAMA</h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed text-center">
            <p className="mb-4">
              E-DRAMA is a pioneering platform dedicated to elevating the art of drama through seamlessly managed competitions.
              Our mission is to connect aspiring talent, dedicated schools, and expert judges in a vibrant ecosystem
              that nurtures creativity and excellence in theatrical performance.
            </p>
            <p className="mb-4">
              We streamline the entire competition process, from application and approval to judging and feedback,
              ensuring fairness, transparency, and an enriching experience for all participants.
              Join us in celebrating the passion and dedication of dramatic arts across the globe.
            </p>
          </div>
        </section>

        <section id="sponsors-section" className="py-16 md:py-24 bg-gray-900 px-4 mt-16 overflow-hidden">
          <h2 className="text-4xl font-extrabold text-center text-indigo-400 mb-12 drop-shadow-md">Our Valued Sponsors</h2>

  
          <div className="relative w-full flex overflow-hidden py-8">
            <div className="flex animate-marquee whitespace-nowrap">
          
              <div className="flex justify-around items-center gap-20 sm:gap-24 md:gap-28 lg:gap-32">
                <div className="bg-gray-800 p-4 rounded-xl shadow-lg flex flex-col items-center justify-center border border-gray-700 hover:shadow-xl transition-shadow duration-300 flex-shrink-0 w-[150px] h-[200px]">
                  <img src="https://placehold.co/150x150/4CAF50/ffffff?text=Safaricom" alt="Safaricom Logo" className="rounded-md mb-2 w-full h-[150px] object-contain" />
                  <p className="text-base font-semibold text-gray-100 text-center">Safaricom</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-xl shadow-lg flex flex-col items-center justify-center border border-gray-700 hover:shadow-xl transition-shadow duration-300 flex-shrink-0 w-[150px] h-[200px]">
                  <img src="https://placehold.co/150x150/0047AB/ffffff?text=KCB+Bank" alt="KCB Bank Logo" className="rounded-md mb-2 w-full h-[150px] object-contain" />
                  <p className="text-base font-semibold text-gray-100 text-center">KCB Bank</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-xl shadow-lg flex flex-col items-center justify-center border border-gray-700 hover:shadow-xl transition-shadow duration-300 flex-shrink-0 w-[150px] h-[200px]">
                  <img src="https://placehold.co/150x150/5A6B5D/ffffff?text=Kenyan+Gov" alt="Kenyan Government Logo" className="rounded-md mb-2 w-full h-[150px] object-contain" />
                  <p className="text-base font-semibold text-gray-100 text-center">Kenyan Government</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-xl shadow-lg flex flex-col items-center justify-center border border-gray-700 hover:shadow-xl transition-shadow duration-300 flex-shrink-0 w-[150px] h-[200px]">
                  <img src="https://placehold.co/150x150/009EDC/ffffff?text=United+Nations" alt="United Nations Logo" className="rounded-md mb-2 w-full h-[150px] object-contain" />
                  <p className="text-base font-semibold text-gray-100 text-center">United Nations</p>
                </div>
             
              </div>

              
              <div className="flex justify-around items-center gap-20 sm:gap-24 md:gap-28 lg:gap-32" aria-hidden="true">
                <div className="bg-gray-800 p-4 rounded-xl shadow-lg flex flex-col items-center justify-center border border-gray-700 hover:shadow-xl transition-shadow duration-300 flex-shrink-0 w-[150px] h-[200px]">
                  <img src="https://placehold.co/150x150/4CAF50/ffffff?text=Safaricom" alt="Safaricom Logo" className="rounded-md mb-2 w-full h-[150px] object-contain" />
                  <p className="text-base font-semibold text-gray-100 text-center">Safaricom</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-xl shadow-lg flex flex-col items-center justify-center border border-gray-700 hover:shadow-xl transition-shadow duration-300 flex-shrink-0 w-[150px] h-[200px]">
                  <img src="https://placehold.co/150x150/0047AB/ffffff?text=KCB+Bank" alt="KCB Bank Logo" className="rounded-md mb-2 w-full h-[150px] object-contain" />
                  <p className="text-base font-semibold text-gray-100 text-center">KCB Bank</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-xl shadow-lg flex flex-col items-center justify-center border border-gray-700 hover:shadow-xl transition-shadow duration-300 flex-shrink-0 w-[150px] h-[200px]">
                  <img src="https://placehold.co/150x150/5A6B5D/ffffff?text=Kenyan+Gov" alt="Kenyan Government Logo" className="rounded-md mb-2 w-full h-[150px] object-contain" />
                  <p className="text-base font-semibold text-gray-100 text-center">Kenyan Government</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-xl shadow-lg flex flex-col items-center justify-center border border-gray-700 hover:shadow-xl transition-shadow duration-300 flex-shrink-0 w-[150px] h-[200px]">
                  <img src="https://placehold.co/150x150/009EDC/ffffff?text=United+Nations" alt="United Nations Logo" className="rounded-md mb-2 w-full h-[150px] object-contain" />
                  <p className="text-base font-semibold text-gray-100 text-center">United Nations</p>
                </div>
                
              </div>
            </div>
          </div>
          <p className="text-center text-md text-gray-500 mt-12">
            Interested in becoming a sponsor? Please contact us!
          </p>
        </section>

        
        <section id="contact-section" className="py-12 md:py-16 bg-gray-800 px-4 mt-8 rounded-lg shadow-xl pb-56">
          <h2 className="text-4xl font-extrabold text-center text-indigo-400 mb-10 drop-shadow-md">Get in Touch</h2>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column: Contact Text, Details, and Social Icons */}
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Have questions, feedback, or need support? We're here to help you every step
                of the way. Reach out to our team using the details below or fill out
                our inquiry form.
              </p>

              {/* Contact Details */}
              <div className="text-lg text-gray-200 mb-8">
                <p className="mb-2 flex items-center gap-3">
                  <i className="fas fa-envelope text-indigo-400 text-xl"></i>
                  Email: <a href="mailto:info@edrama.com" className="text-blue-400 hover:underline">info@edrama.com</a>
                </p>
                <p className="mb-2 flex items-center gap-3">
                  <i className="fas fa-phone-alt text-indigo-400 text-xl"></i>
                  Phone: <a href="tel:+1234567890" className="text-blue-400 hover:underline">+1 (234) 567-890</a>
                </p>
                <p className="flex items-center gap-3">
                  <i className="fas fa-map-marker-alt text-indigo-400 text-xl"></i>
                  Address: 123 Drama Lane, Art City, Kenya
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="mt-6">
                <h3 className="text-2xl font-semibold text-gray-100 mb-3">Follow Us</h3>
                <div className="flex space-x-5">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                    <i className="fab fa-facebook-f text-2xl sm:text-3xl"></i>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors duration-200">
                    <i className="fab fa-instagram text-2xl sm:text-3xl"></i>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                    <i className="fab fa-twitter text-2xl sm:text-3xl"></i>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700 transition-colors duration-200">
                    <i className="fab fa-linkedin-in text-2xl sm:text-3xl"></i>
                  </a>
                </div>
              </div>
            </div>

            
            <div className="bg-gray-700 p-8 rounded-xl shadow-lg border border-gray-600">
              <h3 className="text-2xl font-semibold text-gray-100 mb-6">Leave a Comment</h3>
              <form>
                <div className="mb-5">
                  <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="comment" className="block text-gray-300 text-sm font-medium mb-2">Your Comment</label>
                  <textarea
                    id="comment"
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-y"
                    placeholder="Type your comment here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2.5 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-semibold shadow-md text-base"
                >
                  Submit Comment
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
