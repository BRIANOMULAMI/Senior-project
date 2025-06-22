
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] p-8 text-center bg-gray-100 m-4 rounded-lg shadow-inner">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">About E-DRAMA</h1>
      <p className="text-lg text-gray-600 max-w-2xl">
        E-DRAMA is dedicated to fostering theatrical talent through seamless competition management.
        We connect schools, judges, and administrators to create a vibrant ecosystem for drama festivals.
      </p>
      <p className="text-md text-gray-500 mt-4 max-w-2xl">
        Our mission is to simplify the organization, participation, and judging of drama competitions,
        allowing participants to focus on their art.
      </p>
    </div>
  );
};

export default AboutPage;
