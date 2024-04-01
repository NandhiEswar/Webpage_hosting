import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom'; // Importing Link and useLocation
import Magnetic from './Framermotion/Magentic';

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get current location

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false); // Close the navbar when location changes
  }, [location]);

  return (
    <nav className="">
      <div className="flex items-center justify-between">
        <button
          className="text-black focus:outline-none sm:hidden"
          onClick={toggleNavbar}
        >
          <div className="sm:hidden flex flex-row gap-2 items-center justify-center text-center">
            <p className=" bg-green-400 rounded-full w-2 h-2"></p>
            <p className="mr-10 uppercase font-semibold ">menu</p>
          </div>
        </button>
      </div>
      <motion.div
        className={`lg:hidden fixed inset-0 bg-gray-800 z-50 ${
          isOpen ? 'left-0' : '-left-full'
        }`}
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 2 }}
      >
        <button
          className="text-white bg-blue-500 rounded-full p-5 absolute top-4 right-4"
          onClick={toggleNavbar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="flex flex-col items-start mt-20 ml-2 space-y-4 gap-5">
          <motion.li
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 3 }}
            className='text-xl  text-gray-500 uppercase '
          >
            Navigation
          </motion.li>
          <li className=' w-full  bg-gray-300 ml-0 h-[0.5px] '></li>
          <Magnetic>
            <motion.li
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
              transition={{ type: 'spring', stiffness: 100, damping: 7, duration: 4 }}
            >
              <Link to='/Home'>
                <a href="#" className="text-white hover:text-gray-300  text-5xl">
                  Home
                </a>
              </Link>
            </motion.li>
          </Magnetic>
          <Magnetic>
            <motion.li
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
              transition={{ type: 'spring', stiffness: 100, damping: 8, duration: 5 }}
            >
              <Link to="/About">
                <a href="#" className="text-white hover:text-gray-300 text-5xl flex flex-row">
                  About
                </a>
              </Link>
            </motion.li>
          </Magnetic>
          <Magnetic>
            <motion.li
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -210 }}
              transition={{ type: 'spring', stiffness: 100, damping: 15, duration: 6 }}
            >
              <Link to='/Projects'>
                <a href="#" className="text-white hover:text-gray-300  text-5xl">
                  Projects
                </a>
              </Link>
            </motion.li>
          </Magnetic>
          <Magnetic>
            <motion.li
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
              transition={{ type: 'spring', stiffness: 100, damping: 15, duration: 2 }}
            >
              <Link to='/Contact'>
                <a href="/Contact" className="text-white hover:text-gray-300 text-5xl" >
                  Contact
                </a>
              </Link>
            </motion.li>
          </Magnetic>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar1;
