import React from 'react';
import { Radio } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Radio size={32} className="text-primary mr-2" />
      <div className="font-heading font-bold text-xl md:text-2xl">
        <span className="text-primary">NEX</span>
        <span className="text-secondary">STAR</span>
        <span className="text-gray-800 text-sm ml-1">MEDIA</span>
      </div>
    </div>
  );
};

export default Logo;