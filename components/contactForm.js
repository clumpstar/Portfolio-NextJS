import React, { useState } from 'react';
import { HiOutlineMail, HiOutlinePhone, HiOutlinePencil, HiOutlineDocumentText } from 'react-icons/hi';

const ContactCard = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [phonePrefix, setPhonePrefix] = useState('+1'); // Default to US prefix

  const handlePhonePrefixChange = (event) => {
    setPhonePrefix(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email with regex
    const emailRegex = /^[^\s@]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com|live\.com)$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address with domains like Gmail, Yahoo, Outlook, Hotmail, or Live');
      return;
    }

    // Validate phone numbers with regex
    // const usPhoneRegex = /^\+1\d{10}$/;
    // const indianPhoneRegex = /^\+91\d{10}$/;

    // if (!(usPhoneRegex.test(phoneNumber) || indianPhoneRegex.test(phoneNumber))) {
    //   alert('Please enter a valid phone number');
    //   return;
    // }

    // Send the form data to your backend service here
    // Include the fullName, email, phoneNumber, and message in the request

    // Clear form fields
    setFullName('');
    setEmail('');
    setPhoneNumber('');
    setMessage('');
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-300 to-purple-400 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
      <div className="flex items-center justify-center">
        <HiOutlineMail size={48} className="text-white" />
      </div>
      <div className="text-center mt-4">
        <p className="font-semibold text-2xl text-white">Let&apos;s Get in Touch! 👋</p>
      </div>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="flex flex-col items-center">
          <div className="flex items-center bg-gray-100 rounded-full p-2 focus-within:ring-2 focus-within:ring-blue-300 mb-2">
            <HiOutlineDocumentText className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Full Name"
              className="bg-transparent p-1 pl-2 focus:outline-none rounded-full"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center bg-gray-100 rounded-full p-2 focus-within:ring-2 focus-within:ring-blue-300 mb-2">
            <HiOutlineMail className="text-gray-500 mr-2" />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent p-1 pl-2 focus:outline-none rounded-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center bg-gray-100 rounded-full p-2 focus-within:ring-2 focus-within:ring-blue-300 mb-2">
            {/* Phone prefix dropdown */}
            <select
              value={phonePrefix}
              onChange={handlePhonePrefixChange}
              className="bg-transparent border-none pr-1 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-l-full"
            >
              <option value="+1">🇺🇸</option>
              <option value="+91">🇮🇳</option>
            </select>
            {/* Phone input */}
            {/* <HiOutlinePhone className="text-gray-500 mx-2" /> */}
            <input
              type="tel"
              placeholder="Phone Number"
              className="bg-transparent p-1 pl-2 focus:outline-none rounded-r-full"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              pattern="\d{10}" // Pattern to restrict to 10 digits
              required
            />
          </div>
          <div className="flex items-center bg-gray-100 rounded p-2 focus-within:ring-2 focus-within:ring-blue-300 mb-2">
            <HiOutlinePencil className="text-gray-500 mr-2" />
            <textarea
              placeholder="Message"
              className="bg-transparent p-1 pl-2 focus:outline-none rounded-lg h-20"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="text-center mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactCard;
