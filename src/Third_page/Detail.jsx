import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../Assert/data'; // Adjust the path if necessary
import { motion } from 'framer-motion';
import some from '../Assert/some.mp4'
import { useState, useEffect, useRef } from 'react';
import "./detail.css"
const Detail = () => {
  const videoRef = useRef(null);
  const { id } = useParams();
  const item = data[id];

  const VideoPlayer = () => {
    const videoRef = useRef(null);
  
    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, []);
  }
  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <motion.div className='flex flex-col items-center  justify-center mx-auto pl-10 pt-10 container'>
      <div className='relative flex flex-col  justify-center  p-2  container '>
        <div className='text-left justify-left items-left flex text-3xl '>
          <h1 className='text-left '>{item.heading}</h1>
        </div>
      </div>
      <div className='flex md:flex-row justify-center p-10 gap-2 flex-col '>
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
          <h1 className='text-left'>Nisi cum obcaecati repudiandae blanditiis qui
          </h1>
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

      {/* <div className='flex flex-col gap-3 text-xl items-center md:items-start w-full md:w-auto'>
        <p className='uppercase text-gray-500'>Role / Services</p>
        <div className='border-t border-gray-500 w-full md:w-50'></div>
        <p>{item.service_role}</p>
      </div>
      <div className='flex flex-col gap-3 text-xl items-center md:items-start w-full md:w-auto'>
        <p className='uppercase text-gray-500'>Credits</p>
        <div className='border-t border-gray-500 w-full md:w-50'></div>
        <p>{item.tools}</p>
      </div>
      <div className='flex flex-col gap-3 text-xl items-center md:items-start w-full md:w-auto'>
        <p className='uppercase text-gray-500'>Location & Year</p>
        <div className='border-t border-gray-500 w-full md:w-50'></div>
        <p>{item.deployment}</p>
      </div> */}
      <img src={item.imgae1} alt={item.heading} className='mx-auto mt-8' />
      <video ref={videoRef} loop autoPlay muted className='mt-20'>
      <source src={item.image2} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
      <p className='mt-8'>{item.description}</p>
      <p className='mt-4'><strong>Tools:</strong> {item.tools}</p>
      
      <div class="device mb-20">
        <div class="video-container">
            <video ref={videoRef} src={some} loop muted  autoplay></video>
        </div>
        <img src="https://dennissnellenberg.com/assets/img/device-mbp-16-lower-nonotch.png" alt="Device" class="overlay-image"/>
      </div>

      <div >
        <h1>we need add some video</h1>
      </div>
      
      <div>
        <h1>we neeed to add other mac book</h1>
      </div>

      <div>
        <h1>mobile images </h1>
      </div>
      

    </motion.div>
  );
};

export default Detail;
