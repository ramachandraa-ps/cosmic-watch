import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PlanetWeightCalculator = () => {
  const [weight, setWeight] = useState('');
  const [selectedPlanet, setSelectedPlanet] = useState('');
  const [showCalculator, setShowCalculator] = useState(false);
  
  const planets = [
    {
      name: 'Mercury',
      gravity: 0.38,
      reason: 'Mercury is the smallest planet in our solar system and has a weak gravitational pull due to its small mass.'
    },
    {
      name: 'Venus',
      gravity: 0.91,
      reason: 'Venus has gravity similar to Earth due to its similar size, despite being slightly smaller.'
    },
    {
      name: 'Mars',
      gravity: 0.38,
      reason: 'Mars is smaller than Earth and has about 1/3 of Earth\'s gravity, making you feel much lighter.'
    },
    {
      name: 'Jupiter',
      gravity: 2.34,
      reason: 'Jupiter is the largest planet in our solar system, with strong gravity due to its massive size.'
    },
    {
      name: 'Saturn',
      gravity: 1.06,
      reason: 'Despite being large, Saturn\'s gravity is close to Earth\'s due to its low density from being mostly gas.'
    },
    {
      name: 'Uranus',
      gravity: 0.92,
      reason: 'Uranus has slightly lower gravity than Earth due to its composition of mostly icy materials.'
    },
    {
      name: 'Neptune',
      gravity: 1.19,
      reason: 'Neptune\'s gravity is slightly stronger than Earth\'s due to its dense composition.'
    }
  ];

  const calculateWeight = (earthWeight: string, planetGravity: number): string => {
    return (parseFloat(earthWeight) * planetGravity).toFixed(1);
  };

  const renderCalculator = () => {
    if (!showCalculator) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-gray-900 rounded-lg p-6 max-w-6xl w-full border border-gray-800">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">Calculate Your Weight on Other Planets</h2>
              <p className="text-gray-400 mt-1">Enter your Earth weight to see how it changes across our solar system.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 w-64">
              <label className="block text-sm font-medium mb-2">Earth Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full p-2 rounded-lg bg-gray-900 border border-gray-600 text-white focus:border-blue-500 transition-colors duration-300"
                placeholder="Enter weight"
              />
            </div>
          </div>
            
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {planets.map((planet) => (
              <div
                key={planet.name}
                className={`p-4 rounded-lg border ${
                  selectedPlanet === planet.name
                    ? 'border-blue-500 bg-gray-800'
                    : 'border-gray-700 bg-gray-800'
                } cursor-pointer transition-all duration-300 hover:border-blue-400`}
                onClick={() => setSelectedPlanet(planet.name)}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-lg text-blue-400">{planet.name}</h3>
                  {weight && (
                    <div className="text-right">
                      <p className="text-xl font-bold text-white">
                        {calculateWeight(weight, planet.gravity)} kg
                      </p>
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">{planet.reason}</p>
              </div>
            ))}
          </div>
          
          <div className="flex justify-end mt-6">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300"
              onClick={() => setShowCalculator(false)}
            >
              Close Calculator
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Planet Weight Calculator Card */}
      <div className="rounded-lg border border-gray-800 hover:border-blue-500 bg-gray-900 text-white shadow-lg transition-all duration-300">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">Planet Weight Calculator</h3>
        </div>
        <div className="p-6 pt-0">
          <p className="text-gray-300 mb-6">
            Ever wondered how much you'd weigh on different planets? Use our interactive calculator to discover your weight across the solar system and understand why it varies from planet to planet due to different gravitational forces.
          </p>
          <button 
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-300 text-sm font-medium group"
            onClick={() => setShowCalculator(true)}
          >
            Calculate Weight
            <svg 
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>

      {renderCalculator()}
    </>
  );
};

export default PlanetWeightCalculator;