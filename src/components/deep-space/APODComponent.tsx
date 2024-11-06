import React, { useState, useEffect } from 'react';
import { getAPOD } from '../../services/nasaService';

interface APOD {
  date: string;
  explanation: string;
  hdurl?: string;
  media_type: 'image' | 'video';
  service_version: string;
  title: string;
  url: string;
  copyright?: string;
}

const APODComponent: React.FC = () => {
  const [apodData, setApodData] = useState<APOD | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAPOD = async () => {
      try {
        setLoading(true);
        const data = await getAPOD();
        setApodData(data);
      } catch (err) {
        setError('Failed to fetch Astronomy Picture of the Day');
      } finally {
        setLoading(false);
      }
    };

    fetchAPOD();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-400"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-4 bg-red-500 bg-opacity-10 rounded-lg">
        {error}
      </div>
    );
  }

  if (!apodData) return null;

  return (
    <div className="bg-space-light rounded-lg overflow-hidden">
      <div className="aspect-video relative overflow-hidden">
        {apodData.media_type === 'image' ? (
          <img
            src={apodData.url}
            alt={apodData.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <iframe
            src={apodData.url}
            title={apodData.title}
            className="w-full h-full"
            allowFullScreen
          />
        )}
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-blue-400 mb-2">
            {apodData.title}
          </h2>
          <p className="text-sm text-gray-400">
            {new Date(apodData.date).toLocaleDateString()}
          </p>
        </div>
        
        <p className="text-gray-300 mb-4 leading-relaxed">
          {apodData.explanation}
        </p>
        
        {apodData.copyright && (
          <p className="text-sm text-gray-400">
            © {apodData.copyright}
          </p>
        )}
      </div>
    </div>
  );
};

export default APODComponent;