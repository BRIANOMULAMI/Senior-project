import Footer from '../components/footer';
import Navbar from '../components/navbar';
import React from 'react';

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      
      <Footer />
    </>
  );
};

export default PublicLayout;
