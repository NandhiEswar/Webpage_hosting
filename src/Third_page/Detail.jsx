import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import data from '../Assert/data'; // Adjust the path if necessary
import "./detail.css";
import Magnetic from '../Framermotion/Magentic';
import { MdArrowOutward } from "react-icons/md";
import gsap from 'gsap';

const Detail = () => {
  const videoRef = useRef(null);
  const { id } = useParams();
  const [currentIndex, setCurrentIndex] = useState(parseInt(id));
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Function to handle scroll
    const handleScroll = () => {
      // Calculate the amount of scroll from the top of the page
      const scrollTop = window.scrollY;

      // Use GSAP to animate the container in the opposite direction of scroll
      gsap.to(container, {
        y: -scrollTop * 0.1, // Adjust the multiplier for speed
        ease: 'power3.out', // Use easing for smoother animation
        duration: 0.5, // Animation duration
      });
    };

    // Event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    const index = parseInt(id);
    if (!isNaN(index) && index >= 0 && index < data.length) {
      setCurrentIndex(index);
    } else {
      navigate('/detail/0'); // Redirect to the first item if the index is invalid
    }
  }, [id, navigate]);
  const item = data[currentIndex];

  const handleNextProject = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < data.length) {
      navigate(`/Projects/detail/${nextIndex}`);
    } else {
      navigate('/Project/detail'); // Navigate to home when reaching the end of the index
    }
  };

  

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [currentIndex]);

  if (!item) {
    return <div>Item not found</div>;
  }


  return (
    <motion.div className='flex flex-col items-center justify-center mx-auto pl-10 pt-10 container'>
      <div className='relative flex flex-col justify-center p-2 container'>
        <div className='text-left justify-left items-left flex text-3xl'>
          <h1 className='text-left'>{item.heading}</h1>
        </div>
      </div>
      
          
      <div className='flex md:flex-row justify-center p-10 gap-2 flex-col'>
        <div className='flex flex-col mt-10'>
          <p className='text-left py-5 text-gray-500'>01</p>
          <div className='h-[0.5px] bg-gray-500 w-[80%]'> </div>
          <h1 className='flex py-8'>Travelling</h1>
          <h1 className='text-left'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
        </div>
        <div className='flex flex-col mt-10'>
          <p className='text-left py-5 text-gray-500'>02</p>
          <div className='h-[0.5px] bg-gray-500 w-[80%]'> </div>
          <h1 className='flex py-8'>Travelling</h1>
          <h1 className='text-left'>Nisi cum obcaecati repudiandae blanditiis qui</h1>
        </div>
        <div className='flex flex-col mt-10'>
          <p className='text-left py-5 text-gray-500'>03</p>
          <div className='h-[0.5px] bg-gray-500 w-[80%]'> </div>
          <h1 className='flex py-8'>Travelling</h1>
          <h1 className='text-left'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.s?
          </h1>
        </div>
        
      </div>
      

      {
  item.image1 && (
    <div className='relative flex flex-col items-center mt-8'>
      <div className='relative'>
        <Magnetic>
          <motion.div className='absolute top-[-60px] right-[20px] bg-[#334BD3] text-white rounded-full md:h-[140px] md:w-[140px] h-[80px] w-[80px] flex items-center justify-center'>
            <motion.p className='flex items-center text-2xl'>
              visit <MdArrowOutward className='text-white rotate-12 ml-2' />
            </motion.p>
          </motion.div>
        </Magnetic>
        <img src={item.image1} alt={item.heading} className='mx-auto' />
      </div>
    </div>
  )
}

      <p className='mt-8'>{item.description}</p>
      <p className='mt-4'><strong>Tools:</strong> {item.tools}</p>

      {item.image2 && (
        <div className="device mb-20">
          <div className="video-container">
            <video ref={videoRef} src={item.image2} loop muted autoPlay></video>
          </div>
          <img src="https://dennissnellenberg.com/assets/img/device-mbp-16-lower-nonotch.png" alt="Device" className="overlay-image"/>
        </div>
      )}

      <motion.div className='flex flex-row gap-20 mt-20 mb-20'>
        {item.mobile1 && (
          <motion.div >
            <motion.img src={item.mobile1} alt={item.heading} className='h-[500px] rounded-2xl'  ref={containerRef}/>
          </motion.div>
        )}
        {item.mobile2 && (
          <div>
            <img src={item.mobile2} alt={item.heading} className='h-[500px] rounded-2xl'/>
          </div>
        )}
      </motion.div>

      <button className='border border-red-100 p-4 rounded-2xl px-[30px] hover:bg-slate-700' onClick={handleNextProject}>
      {currentIndex === data.length - 1 ? 'All works' : 'Next Project'}
      </button>
    </motion.div>
  );
};

export default Detail;
