import React from 'react';
import Header from '../components/Header';
import APODComponent from '../components/deep-space/APODComponent';

const DeepSpacePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-space-dark text-white">
      <Header />
      
      <main className="container mx-auto px-4 pt-24">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Deep Space Explorer
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Journey through the cosmos with NASA's most stunning astronomical discoveries and images.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-space-light p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">
              Astronomy Picture of the Day
            </h3>
            <p className="text-gray-300">
              Explore the universe through NASA's carefully selected daily astronomical images, each accompanied by detailed explanations from professional astronomers.
            </p>
          </div>
          <div className="bg-space-light p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">
              NASA Image Library
            </h3>
            <p className="text-gray-300">
              Browse through NASA's vast collection of space images, ranging from mission photos to astronomical observations and space phenomena.
            </p>
          </div>
        </div>

        {/* APOD Section */}
        <section className="mb-16">
          <APODComponent />
        </section>
      </main>
    </div>
  );
};

export default DeepSpacePage;