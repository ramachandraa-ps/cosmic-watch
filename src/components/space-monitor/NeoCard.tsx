import React from 'react';
import { NearEarthObject } from '../../types/neo';

interface NeoCardProps {
  neo: NearEarthObject;
}

const NeoCard: React.FC<NeoCardProps> = ({ neo }) => {
  const avgDiameter = (
    (neo.estimated_diameter.kilometers.estimated_diameter_min +
      neo.estimated_diameter.kilometers.estimated_diameter_max) /
    2
  ).toFixed(2);

  const closeApproach = neo.close_approach_data[0];
  const velocity = parseFloat(closeApproach.relative_velocity.kilometers_per_hour).toFixed(2);
  const missDistance = parseFloat(closeApproach.miss_distance.lunar).toFixed(2);

  return (
    <div className={`bg-space-light rounded-lg p-6 ${
      neo.is_potentially_hazardous_asteroid ? 'border-2 border-red-500' : ''
    }`}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">{neo.name}</h3>
        {neo.is_potentially_hazardous_asteroid && (
          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-sm">
            Hazardous
          </span>
        )}
      </div>
      
      <div className="space-y-2 text-gray-300">
        <p>Diameter: {avgDiameter} km</p>
        <p>Velocity: {velocity} km/h</p>
        <p>Miss Distance: {missDistance} lunar distances</p>
        <p>Close Approach: {closeApproach.close_approach_date}</p>
      </div>
      
      <a
        href={neo.nasa_jpl_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-blue-400 hover:text-blue-300"
      >
        More Details →
      </a>
    </div>
  );
};

export default NeoCard;