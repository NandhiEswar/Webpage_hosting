import React, { useState } from 'react';

const HoverNameChange = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [name, setName] = useState('Nandhi');

  const handleMouseEnter = () => {
    setIsHovered(true);
    setName('Eswar');
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setName('Nandhi');
  };

  return (
    <div
   
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Comment: Display the name */}
      <p className=" transition-all  duration-100 md:text-5xl text-3xl ">{name}</p>
    </div>
  );
};

export default HoverNameChange;
