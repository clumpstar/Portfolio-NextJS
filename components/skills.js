import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ProgressBarCard = ({ title, limit, backgroundImage }) => {
  const [percentage, setPercentage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const intervalDelay = 5;

    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // Adjust the breakpoint if needed
    };

    // Initial check and listen for window resize
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const intervalDelay = 5;

    if ((isHovered || isMobileView) && percentage < limit) {
      const interval = setInterval(() => {
        setPercentage((prevPercentage) => Math.min(prevPercentage + 2, limit));
      }, intervalDelay);

      return () => {
        clearInterval(interval);
      };
    } else if (!isHovered && !isMobileView && percentage > 0) {
      const interval = setInterval(() => {
        setPercentage((prevPercentage) => Math.max(prevPercentage - 3, 0));
      }, intervalDelay);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered, percentage, limit, isMobileView]);

  return (
    <motion.div
      className="w-80 h-40 bg-white rounded-xl shadow-md p-2 relative overflow-hidden transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
    >
      {(isHovered || isMobileView) && (
        <div className="text-center text-lg lg:text-xl">
          {title}
          <div className="text-gray-900 text-lg mt-1 lg:text-xl font-extrabold">
            {`${percentage}%`}
          </div>
        </div>
      )}
      <div
        className="w-full h-full rounded-xl absolute top-0 left-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: (isHovered || isMobileView) ? 'blur(70px)' : 'none',
        }}
      ></div>
      <div className="absolute bottom-0 left-0 w-full bg-blue-200 h-2">
        <div className="h-full bg-blue-500" style={{ width: `${percentage}%` }}></div>
      </div>
      <div className={`absolute bottom-0 left-0 w-full text-sm font-semibold ${isHovered || isMobileView ? 'text-gray-600' : 'opacity-0'}`} style={{ transform: 'translateY(100%)' }}>
        {percentage}%
      </div>
      <div className={`absolute top-0 right-0 bottom-0 left-0 ${isHovered ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}></div>
    </motion.div>
  );
};

export default ProgressBarCard;
