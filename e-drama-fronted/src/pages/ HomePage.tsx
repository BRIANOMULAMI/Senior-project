import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="w-full min-h-[calc(100vh - 80px)] bg-gray-900 text-white">
      <div className="container mx-auto">
        <section id="home-section" className="flex flex-col md:flex-row items-center justify-between py-12 md:py-20 lg:py-24 gap-10 md:gap-16 px-4">
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
              to="#about-section"
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
              style={{ objectFit: 'cover', aspectRatio: '3/2' }}
            />
          </div>
        </section>

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
  
      </div>
    </div>
  );
};

export default HomePage;

