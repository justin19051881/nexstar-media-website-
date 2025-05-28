import React from 'react';
import { Client } from '../utils/types';

interface ClientCardProps {
  client: Client;
}

const ClientCard: React.FC<ClientCardProps> = ({ client }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 transition-all hover:shadow-md">
      <div className="flex flex-col items-center text-center">
        <div className="w-24 h-24 mb-4 rounded-full bg-gray-100 flex items-center justify-center p-4">
          <img
            src={client.logo}
            alt={`${client.name} logo`}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <h4 className="font-bold text-lg mb-1">{client.name}</h4>
        <p className="text-sm text-gray-500 mb-3">{client.industry}</p>
        <p className="text-gray-600">{client.description}</p>
      </div>
    </div>
  );
};

export default ClientCard;