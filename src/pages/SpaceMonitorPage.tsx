import React, { useEffect, useState } from 'react';
import { NeoFeed } from '../types/neo';
import { getNeoFeed } from '../services/neoService';
import Header from '../components/Header';
import DateSelector from '../components/space-monitor/DateSelector';
import NeoList from '../components/space-monitor/NeoList';

const SpaceMonitorPage: React.FC = () => {
  const [neoFeed, setNeoFeed] = useState<NeoFeed | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [startDate, setStartDate] = useState(
    new Date().toISOString().split('T')[0]
  );
  const [endDate, setEndDate] = useState(
    new Date().toISOString().split('T')[0]
  );

  useEffect(() => {
    const fetchNeoData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getNeoFeed(startDate, endDate);
        setNeoFeed(data);
      } catch (err) {
        setError('Failed to fetch asteroid data');
      } finally {
        setLoading(false);
      }
    };

    fetchNeoData();
  }, [startDate, endDate]);

  return (
    <div className="min-h-screen bg-space-dark text-white">
      <Header />
      
      <main className="container mx-auto px-4 pt-24">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Real-Time Space Monitor
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Track and monitor near-Earth objects as they pass through our cosmic neighborhood.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-space-light p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Near-Earth Objects</h3>
            <p className="text-gray-300">
              Monitor asteroids and other objects that pass within 30 million miles of Earth's orbit. Get real-time data on their size, speed, and trajectory.
            </p>
          </div>
          <div className="bg-space-light p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Hazard Assessment</h3>
            <p className="text-gray-300">
              Identify potentially hazardous asteroids (PHAs) based on NASA's classification system. PHAs are objects that come within 4.6 million miles of Earth's orbit.
            </p>
          </div>
          <div className="bg-space-light p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Detailed Analytics</h3>
            <p className="text-gray-300">
              Access comprehensive data including object diameter, velocity, miss distance, and close approach timing. All information is sourced directly from NASA's NEO database.
            </p>
          </div>
        </div>

        {/* Data Legend */}
        <div className="bg-space-light p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4">Understanding the Data</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <span>Potentially Hazardous</span>
            </div>
            <div>
              <strong>Diameter:</strong> Estimated size in kilometers
            </div>
            <div>
              <strong>Velocity:</strong> Speed relative to Earth
            </div>
            <div>
              <strong>Miss Distance:</strong> Closest approach in lunar distances
            </div>
          </div>
        </div>

        {/* Date Selector */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Select Date Range</h2>
          <DateSelector
            startDate={startDate}
            endDate={endDate}
            onStartDateChange={setStartDate}
            onEndDateChange={setEndDate}
          />
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-400"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-red-500 text-center p-4 bg-red-500 bg-opacity-10 rounded-lg">
            {error}
          </div>
        )}

        {/* NEO List */}
        {neoFeed && !loading && (
          <div>
            <div className="mb-6">
              <p className="text-gray-300">
                Showing {neoFeed.element_count} near-Earth objects for the selected date range
              </p>
            </div>
            {Object.entries(neoFeed.near_earth_objects).map(([date, neos]) => (
              <NeoList key={date} date={date} neos={neos} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default SpaceMonitorPage;