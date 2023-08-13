import React from 'react';

const AbstractBackground = () => {
  return (
    <div className="absolute inset-0 z-[-1]">
      <div className="h-full w-full flex flex-wrap">
        {[...Array(50)].map((_, index) => (
          <div
            key={index}
            className="h-1 w-full opacity-30 transform rotate-45 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
            style={{
              marginTop: `${index * 20}px`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AbstractBackground;
