
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative h-16 w-16 water-wave rounded-full bg-amazon-blue-light/20 flex items-center justify-center">
        <span className="absolute text-amazon-green text-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 12h20" />
            <path d="M12 2v20" />
            <path d="M12 2c-2.8 0-5 5.4-5 10s2.2 10 5 10c2.8 0 5-5.4 5-10s-2.2-10-5-10Z" />
          </svg>
        </span>
      </div>
      <div className="ml-2 text-amazon-green font-bold text-2xl">GreenWatch</div>
    </div>
  );
};

export default Logo;
