import React from 'react';
import { NearEarthObject } from '../../types/neo';
import NeoCard from './NeoCard';

interface NeoListProps {
  neos: NearEarthObject[];
  date: string;
}

const NeoList: React.FC<NeoListProps> = ({ neos, date }) => {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-6">
        Near Earth Objects for {new Date(date).toLocaleDateString()}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {neos.map((neo) => (
          <NeoCard key={neo.id} neo={neo} />
        ))}
      </div>
    </div>
  );
};

export default NeoList;
