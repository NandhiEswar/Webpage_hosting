import React, { useEffect,useRef} from 'react';
import Magnetic from '../Framermotion/Magentic';
import { useTransform, useViewportScroll, motion } from 'framer-motion';
import { Link,} from 'react-router-dom';
import './main.css'
import Macbook from './Mac';

function Showdata({ products }) {

  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;

    // Ensure the video element exists before attempting to play it
    if (video) {
      // Event listener to wait for the video to be ready to play
      const handleCanPlay = () => {
        video.play(); // Autoplay the video once it's ready
        video.removeEventListener('canplay', handleCanPlay); // Remove the event listener
      };

      // Add event listener to the video element
      video.addEventListener('canplay', handleCanPlay);

      // Clean up function to remove event listener when component unmounts
      return () => {
        if (video) {
          video.removeEventListener('canplay', handleCanPlay);
        }
      };
    }
  }, []); // Run only once when the component mounts
    
  const { scrollYProgress } = useViewportScroll();

  const translateY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  

  return (
    <div className='flex flex-col justify-center items-center  text-center mb-52 '>
      <div className=' container'>
      <div className=''>
    <h1 className='text-6xl'>{ products.Mainheading}</h1>

  <div className='flex md:flex-row justify-center p-10 gap-2 flex-col text-center'>

    <div className='flex flex-col mt-10 mx-auto '>
      <p className='text-left py-5 text-gray-500'>Role/service</p>
      <div className='h-[0.5px] bg-gray-500 w-[250%]'></div>
      <h1 className='flex py-8'>{products.Role}</h1>
    </div>

    <div className='flex flex-col mt-10 mx-auto'>
      <p className='text-left py-5 text-gray-500'>deployment</p>
      <div className='h-[0.5px] bg-gray-500 w-[250%]'></div>
      <h1 className='flex py-8'>{products.deployment}</h1>
    </div>

    <div className='flex flex-col mt-10 mx-auto'>
      <p className='text-left py-5 text-gray-500'>Location</p>
      <div className='h-[0.5px] bg-gray-500 w-[250%]'></div>
      <h1 className='flex py-8'>{products.Location}</h1>
    </div>
  </div>
        </div>
        <div className=' flex flex-col'>
        <Magnetic>
    <div className='flex justify-end  '>
              <motion.div className='sm:w-[190px] sm:h-[190px] vsm:w-[130px] vsm:h-[130px] md:w-60 md:h-60 rounded-full flex justify-center text-center sm:mt-48  z-[-1] mr-56 md:mr-0  md:mt-0 items-center cursor-pointer 
                         vsm:ml-32 sm:ml-0 text-white bg-[#455CE9]
        
         '
            style={{ y: translateY }}>
            <motion.p className='md:p-10 p-5 md:text-3xl  vsm:text-xl font-wixmadefor ' initial={{ x: 0, y: 0 }}>
                <Link to='/About'>Live view</Link>
            </motion.p>
        </motion.div>
    </div>
</Magnetic>
        <img src={products.main_image} alt="" />
        </div>
       <Macbook/>
        <div className='main_video mt-10 w-full h-full'>
        <video src={products.main_video} loop autoPlay muted controls></video>
        </div>
        <button className=' border border-green-800'>next page</button>
      </div>
      
    
</div>

  )
}

export default Showdata