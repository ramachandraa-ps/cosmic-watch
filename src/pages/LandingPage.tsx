import React from 'react';
import Header from '../components/Header';
import Features from '../components/Features';
import ApodSection from '../components/ApodSection';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-space-dark text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-space-dark to-space-light">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Explore the Cosmos
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Your gateway to real-time space monitoring, astronomical discoveries, and the wonders of the universe.
          </p>
        </div>
      </section>

      <Features />
      <ApodSection />
    </div>
  );
};

export default LandingPage;