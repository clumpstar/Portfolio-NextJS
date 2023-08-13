import React, { useState, useEffect } from 'react';
import { FaCode, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';


function Cards({ imageUrl, title, githubLink }) {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    async function fetchLanguages() {
      try {
        const response = await fetch(`https://api.github.com/repos/${githubLink}/languages`);
        if (response.ok) {
          const data = await response.json();
          const langs = Object.keys(data);
          setLanguages(langs);
        } else {
          console.error('Error fetching languages:', response.status);
        }
      } catch (error) {
        console.error('Error fetching languages:', error);
      }
    }

    fetchLanguages();
  }, [githubLink]);

  const handleGitHubClick = () => {
    window.open(githubLink, '_blank');
  };

  return (
    <motion.div className='shadow-lg rounded-2xl p-8 border border-gray-100 dark:border-gray-800 dark:shadow-xl flex flex-col justify-between' 
    whileHover={{ scale: 1.05 }}>
      <div className='flex justify-center items-center'>
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className='w-12 h-12 mr-3'
          />
        )}
        <div className='text-center'>
          <h3 className='font-bold text-xl text-gray-800 dark:text-white mb-2'>
            <span>{title}</span>
          </h3>
          <div className='flex items-center justify-center space-x-2'>
            {languages.map((language, index) => (
              <FaCode key={index} className='text-gray-600 dark:text-gray-300' />
            ))}
          </div>
        </div>
        <div onClick={handleGitHubClick} className='cursor-pointer'>
          <FaGithub className='ml-3 text-3xl text-gray-500 hover:text-blue-500' />
        </div>
      </div>
    </motion.div>
  );
}

export default Cards;
