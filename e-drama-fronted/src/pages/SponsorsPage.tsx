import React from 'react';

const SponsorsPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] p-8 text-center bg-gray-100 m-4 rounded-lg shadow-inner">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Our Valued Sponsors</h1>
      <p className="text-lg text-gray-600 max-w-2xl">
        We are incredibly grateful for the unwavering support of our sponsors.
        Their contributions are vital in making E-DRAMA competitions a success and fostering talent in dramatic arts.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-8">
        {/* Safaricom */}
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 w-[200px] h-[200px] flex flex-col items-center justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Safaricom_logo_2020.svg"
            alt="Safaricom Logo"
            className="h-20 object-contain"
          />
          <p className="mt-3 text-gray-700 font-semibold">Safaricom</p>
        </div>

        {/* KCB Bank */}
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 w-[200px] h-[200px] flex flex-col items-center justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/55/Kenya_Commercial_Bank_Logo.svg"
            alt="KCB Bank Logo"
            className="h-20 object-contain"
          />
          <p className="mt-3 text-gray-700 font-semibold">KCB Bank</p>
        </div>

        {/* Kenyan Government */}
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 w-[200px] h-[200px] flex flex-col items-center justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Coat_of_arms_of_Kenya.svg"
            alt="Kenyan Government Logo"
            className="h-20 object-contain"
          />
          <p className="mt-3 text-gray-700 font-semibold text-center">Gov’t of Kenya</p>
        </div>

        {/* United Nations */}
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 w-[200px] h-[200px] flex flex-col items-center justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/United_Nations_emblem_blue.svg"
            alt="United Nations Logo"
            className="h-20 object-contain"
          />
          <p className="mt-3 text-gray-700 font-semibold">United Nations</p>
        </div>
      </div>

      <p className="text-md text-gray-500 mt-10">
        Interested in becoming a sponsor? Please contact us through the Contact Us page.
      </p>
    </div>
  );
};

export default SponsorsPage;

