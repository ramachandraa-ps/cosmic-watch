import React, { useEffect, useState } from 'react';
import { ApodData } from '../types';
import axios from 'axios';

const ApodSection: React.FC = () => {
  const [apodData, setApodData] = useState<ApodData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApod = async () => {
      try {
        const response = await axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`
        );
        setApodData(response.data);
      } catch (err) {
        setError('Failed to fetch APOD data');
      } finally {
        setLoading(false);
      }
    };

    fetchApod();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-400"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-4">
        {error}
      </div>
    );
  }

  if (!apodData) return null;

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Astronomy Picture of the Day
        </h2>
        <div className="bg-space-light rounded-lg overflow-hidden shadow-xl">
          <div className="relative aspect-video">
            <img
              src={apodData.url}
              alt={apodData.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">{apodData.title}</h3>
            <p className="text-gray-300 mb-4">{apodData.explanation}</p>
            <p className="text-gray-400">Date: {apodData.date}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApodSection;