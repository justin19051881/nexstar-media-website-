import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Service } from '../utils/types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  // Get the appropriate icon from Lucide React
  const LucideIcon = () => {
    const iconName = service.icon;
    
    // You would normally import and use the actual Lucide icon
    // For simplicity, we'll just render a placeholder
    return (
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
        <span className="text-2xl">{iconName.charAt(0)}</span>
      </div>
    );
  };

  return (
    <div className="service-card h-full flex flex-col">
      <div className="mb-4">
        <LucideIcon />
      </div>
      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
      <ul className="space-y-2 mb-6">
        {service.benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="h-5 w-5 text-secondary mt-0.5 mr-2 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
      <a href="#" className="inline-flex items-center text-primary font-medium hover:underline mt-auto">
        Read More
        <ArrowRight size={16} className="ml-1" />
      </a>
    </div>
  );
};

export default ServiceCard;