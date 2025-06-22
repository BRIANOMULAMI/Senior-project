import React from 'react';

const SponsorsPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] p-8 text-center bg-gray-100 m-4 rounded-lg shadow-inner">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Our Valued Sponsors</h1>
      <p className="text-lg text-gray-600 max-w-2xl">
        We are incredibly grateful for the unwavering support of our sponsors.
        Their contributions are vital in making E-DRAMA competitions a success and fostering talent in dramatic arts.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-8">
        {/* Placeholder sponsor logos */}
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
          <img src="https://placehold.co/180x90/e0e0e0/444444?text=Global+Arts+Inc." alt="Global Arts Inc." className="rounded-md" />
          <p className="mt-2 text-gray-700 font-semibold">Global Arts Inc.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
          <img src="https://placehold.co/180x90/e0e0e0/444444?text=Creative+Foundations" alt="Creative Foundations" className="rounded-md" />
          <p className="mt-2 text-gray-700 font-semibold">Creative Foundations</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
          <img src="https://placehold.co/180x90/e0e0e0/444444?text=Community+Partners" alt="Community Partners" className="rounded-md" />
          <p className="mt-2 text-gray-700 font-semibold">Community Partners</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
          <img src="https://placehold.co/180x90/e0e0e0/444444?text=Stagecraft+Supplies" alt="Stagecraft Supplies" className="rounded-md" />
          <p className="mt-2 text-gray-700 font-semibold">Stagecraft Supplies</p>
        </div>
      </div>
      <p className="text-md text-gray-500 mt-8">
        Interested in becoming a sponsor? Please contact us through the Contact Us page.
      </p>
    </div>
  );
};

export default SponsorsPage;
