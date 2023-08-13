import React, { useState } from 'react';
import { HiOutlineMail, HiOutlineClipboard } from 'react-icons/hi';

const ContactCard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('your@email.com');
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:your@email.com';
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-300 to-purple-400 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
      <div className="flex items-center justify-center">
        <HiOutlineMail size={48} className="text-white" />
      </div>
      <div className="text-center mt-4">
        <p className="font-semibold text-2xl text-white">Let&apos;s Get in Touch! 👋</p>
      </div>
      <div className="text-center mt-4">
        <p className="text-gray-300">
          Feel free to reach out to me via email:
        </p>
        <div className="flex items-center justify-center mt-2">
          <a
            href="#"
            onClick={handleEmailClick}
            className="text-white hover:text-blue-500 cursor-pointer font-medium"
          >
            your@email.com
          </a>
          <button
            onClick={handleCopy}
            className={`ml-2 cursor-pointer ${
              isCopied ? 'text-green-500' : 'text-white hover:text-blue-500'
            }`}
          >
            <HiOutlineClipboard size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
