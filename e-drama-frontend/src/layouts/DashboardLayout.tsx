import React from 'react';
import DashboardNavbar from '../components/DashboardNavbar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DashboardNavbar />
      <div className="pt-20 min-h-screen bg-gray-900 text-white">
        {children}
      </div>
    </>
  );
};

export default DashboardLayout;
