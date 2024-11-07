import React, { useState } from 'react';
import Header from '../components/Header';

const AstronautAliasPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    favoriteColor: '',
    birthMonth: ''
  });
  const [generatedAlias, setGeneratedAlias] = useState<{
    name: string;
    specialty: string;
    rank: string;
  } | null>(null);

  const prefixes = ['Commander', 'Captain', 'Cosmonaut', 'Star', 'Galaxy', 'Nova', 'Nebula', 'Cosmic'];
  const suffixes = ['Explorer', 'Voyager', 'Pioneer', 'Navigator', 'Ranger', 'Hunter', 'Seeker', 'Guardian'];
  const specialties = [
    'expert in asteroid navigation',
    'master of space botany',
    'specialist in alien communications',
    'chief of lunar operations',
    'stellar cartographer',
    'quantum mechanic',
    'space chef extraordinaire',
    'cosmic photographer'
  ];

  const generateAlias = () => {
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    const specialty = specialties[Math.floor(Math.random() * specialties.length)];
    
    const colorMapping = {
      'red': 'Mars',
      'blue': 'Neptune',
      'green': 'Aurora',
      'purple': 'Nebula',
      'yellow': 'Solar',
      'orange': 'Jupiter',
      'pink': 'Supernova',
      'black': 'Pulsar',
      'white': 'Starlight'
    } as const;

    const colorElement = colorMapping[formData.favoriteColor.toLowerCase() as keyof typeof colorMapping] || 'Cosmic';
    setGeneratedAlias(() => ({
      name: `${prefix} ${colorElement} ${suffix}`,
      specialty: specialty,
      rank: 'Level ' + (Math.floor(Math.random() * 5) + 1)
    }));
  };

  return (
    <div className="min-h-screen bg-space-dark text-white">
      <Header />
      
      <div className="pt-32 px-4 container mx-auto max-w-2xl">
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-8">
          <h1 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Astronaut Alias Generator
          </h1>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                First Name
              </label>
              <input
                type="text"
                className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:border-blue-500 focus:ring-blue-500"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Favorite Color
              </label>
              <select
                className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:border-blue-500 focus:ring-blue-500"
                value={formData.favoriteColor}
                onChange={(e) => setFormData({...formData, favoriteColor: e.target.value})}
              >
                <option value="">Select a color</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="purple">Purple</option>
                <option value="yellow">Yellow</option>
                <option value="orange">Orange</option>
                <option value="pink">Pink</option>
                <option value="black">Black</option>
                <option value="white">White</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Birth Month
              </label>
              <select
                className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:border-blue-500 focus:ring-blue-500"
                value={formData.birthMonth}
                onChange={(e) => setFormData({...formData, birthMonth: e.target.value})}
              >
                <option value="">Select month</option>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {new Date(2024, i, 1).toLocaleString('default', { month: 'long' })}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={generateAlias}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300"
            >
              Generate Astronaut Name
            </button>
          </div>

          {generatedAlias && (
            <div className="mt-8 p-6 bg-gray-800 rounded-lg border border-gray-700">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-blue-400 mb-2">
                  {generatedAlias.name}
                </h2>
                <p className="text-gray-300 mb-2">{generatedAlias.specialty}</p>
                <p className="text-sm text-gray-400">{generatedAlias.rank}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AstronautAliasPage;