import React, { useState, useEffect } from 'react';
import { getTechTransferData } from '../services/techTransferService';
import { TechTransferData } from '../types/techTransfer';
import Header from '../components/Header';

const TechHubPage: React.FC = () => {
  const [techTransferItems, setTechTransferItems] = useState<TechTransferData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<TechTransferData | null>(null);

  useEffect(() => {
    const fetchTechTransferData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getTechTransferData();
        setTechTransferItems(data);
      } catch (err) {
        setError('Failed to fetch tech transfer data');
      } finally {
        setLoading(false);
      }
    };
    fetchTechTransferData();
  }, []);

  const handleMoreInfo = (item: TechTransferData) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen bg-space-dark text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-space-dark to-space-light">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Tech Transfer Hub
          </h1>
          <p className="text-xl text-gray-300">
            Explore the latest technology innovations from NASA's research centers.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-24">
        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-400"></div>
          </div>
        )}

        {error && (
          <div className="text-red-500 text-center p-4 bg-red-500 bg-opacity-10 rounded-lg">
            {error}
          </div>
        )}

        {techTransferItems.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {techTransferItems.map((item) => (
              <div
                key={item.id}
                className={`bg-space-light rounded-lg p-4 shadow-lg ${
                  selectedItem && selectedItem.id !== item.id ? 'opacity-20' : ''
                }`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="mb-4 h-48 w-full object-cover rounded-lg"
                />
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-300 mb-4">{item.description.slice(0, 100)}...</p>
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleMoreInfo(item)}
                    className="text-blue-400 hover:text-blue-500"
                  >
                    More Info
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedItem && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-space-dark bg-opacity-80">
            <div className="bg-space-light rounded-lg p-6 shadow-lg w-full max-w-2xl">
              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                className="mb-4 h-48 w-full object-cover rounded-lg"
              />
              <h2 className="text-xl font-semibold mb-2">{selectedItem.title}</h2>
              <p className="text-gray-300 mb-4">{selectedItem.description}</p>
              <div className="flex space-x-4">
                <a href={selectedItem.links.moreInfo} className="text-blue-400 hover:text-blue-500">
                  Learn More
                </a>
                <button onClick={handleClose} className="text-blue-400 hover:text-blue-500">
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechHubPage;