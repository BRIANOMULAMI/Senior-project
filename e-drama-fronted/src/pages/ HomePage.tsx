import React from 'react';
import { Link } from 'react-router-dom';

// Local sponsor logo imports
import kenyaFlag from '../assets/kenya.jpg';
import unFlag from '../assets/un.jpg';
import usaFlag from '../assets/america.jpg';
import sportsMinistry from '../assets/olympics.jpg';
import masaiBg from '../assets/masai.jpg';

const sponsors = [
  { img: kenyaFlag, label: 'Kenyan Government' },
  { img: unFlag, label: 'United Nations' },
  { img: usaFlag, label: 'USA Embassy' },
  { img: sportsMinistry, label: 'Ministry of Sports' },
];

const HomePage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white font-inter overflow-x-hidden">
      <div className="container mx-auto px-4 py-20 space-y-32">
        {/* Hero Section */}
        <section
          id="home-section"
          className="text-center flex flex-col items-center justify-center animate-fade-in-up"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-xl">
            <span className="block text-indigo-500 animate-pulse">Welcome to E-DRAMA</span>
            <span className="block text-white mt-2">Stage Your Success</span>
          </h1>

          <p className="text-lg text-gray-300 mt-6 max-w-2xl animate-fade-in delay-200">
            Your ultimate platform for seamless drama competition management. Explore events,
            track progress, and celebrate theatrical talent with ease.
          </p>

          <Link
            to="#about-section"
            className="mt-10 inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 rounded-full shadow-lg text-white font-semibold animate-fade-in delay-500 hover:scale-105"
          >
            Learn More About Us
          </Link>
        </section>
      </div>

      {/* About Section */}
      <section
        id="about-section"
        className="w-full bg-gray-900 text-white py-24 px-6"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Heading on Top */}
          <h2 className="text-4xl font-bold text-indigo-400 text-center">About E-DRAMA</h2>

          {/* Two Columns with Equal Height */}
          <div className="flex flex-col md:flex-row items-stretch gap-10 min-h-[400px]">
            {/* Left Text */}
            <div className="md:w-1/2 flex flex-col justify-center space-y-6 text-center md:text-left">
              <p className="text-lg text-gray-300">
                E-DRAMA is a pioneering platform dedicated to elevating the art of drama through
                seamlessly managed competitions. We connect aspiring talent, schools, and judges in a
                vibrant ecosystem that nurtures creativity and excellence.
              </p>
              <p className="text-lg text-gray-300">
                From registration to adjudication, our digital tools ensure fairness, transparency,
                and a world-class experience for everyone. Join us in celebrating the passion of
                dramatic arts.
              </p>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 h-full">
              <img
                src={masaiBg}
                alt="Masai Culture"
                className="rounded-xl shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section
        id="sponsors-section"
        className="w-full py-16 bg-gray-900 border-t border-gray-800 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-indigo-400 mb-8">Our Sponsors</h2>
          <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
            Proudly supported by organizations committed to arts, youth, and cultural excellence.
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="animate-marquee-robust flex gap-20 px-4">
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-48 bg-gray-800 rounded-xl shadow-lg p-4 flex flex-col items-center justify-center"
              >
                <img
                  src={sponsor.img}
                  alt={sponsor.label}
                  className="h-24 w-24 object-contain rounded-full border-2 border-indigo-400 mb-3"
                />
                <p className="text-center text-indigo-300 text-sm font-semibold">
                  {sponsor.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
