import React from 'react';
import { Feature } from '../types';

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      title: 'Real-Time Space Monitor',
      description: 'Track near-Earth objects and space weather in real-time'
    },
    {
      title: 'Deep Space Explorer',
      description: 'Explore exoplanets and astronomical discoveries'
    },
    {
      title: 'Space Technology Hub',
      description: 'Stay updated with latest space innovations'
    },
    {
      title: 'Interaction Zone',
      description: 'Engage with interactive simulations and quizzes'
    }
  ];

  return (
    <section className="py-12 px-5">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-space-light p-6 rounded-lg hover:transform hover:scale-105 transition-transform duration-200"
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;