import React, { useState,useEffect } from "react";
import Main_text from '../src/Mainpage_text/Main_text'
import Magnetic from './Framermotion/Magentic'
import { useTransform, useViewportScroll, motion } from 'framer-motion';
import { Link ,useNavigate,useLocation} from "react-router-dom";

function Scrollingtext() {
    const { scrollYProgress } = useViewportScroll();
    const [backgroundColor, setBackgroundColor] = useState(
        localStorage.getItem("backgroundColor") || ""
      ); // Retrieve background color from localStorage
      const [textColor, setTextColor] = useState(''); // Initial text color
    
    const navigate = useNavigate();
    const handleNavigation = (page) => {
        // Update background color based on the current page
        if (page === '/About') {
          setBackgroundColor('#C4C4C4')// Home page background color
          setTextColor('')
        } 
        
        navigate(page); // Navigate to the selected page
        
      };
      useEffect(() => {
        // Save background color to localStorage
        localStorage.setItem("backgroundColor", backgroundColor);
      }, [backgroundColor]);

    // Adjust the range [-100, 100] based on the desired parallax effect
    const translateY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
      <div className='flex  flex-row md:flex-col justify-center items-center '>
          <div className='flex containers flex-col md:flex-row md:items-center justify-between relative container'>
              <Main_text className=" md:text-3xl   "></Main_text>
              <div className='flex sm:flex-row vsm:flex-col'>
                  <p className='p-10 min-w-[400px]  text-left md:hidden leading-7 tracking-wider '>Ready to move any location <br />
                      
                  Packing up. New adventures await. Embracing change. Ready for whatever comes next. Excitement fills the air. Time to go.
                  </p>
                  
          <Magnetic>
    <div>
              <motion.div className='sm:w-[190px] sm:h-[190px] vsm:w-[130px] vsm:h-[130px] md:w-60 md:h-60 rounded-full  bg-black flex justify-center text-center sm:mt-48  z-[-1] mr-56 md:mr-0  md:mt-0 items-center cursor-pointer 
                         vsm:ml-32 sm:ml-0 text-white hover:bg-[#455CE9]
        
         '
            style={{ y: translateY }}>
            {/* Wrap the text with motion */}
            <motion.p className='md:p-10 p-5 md:text-3xl  vsm:text-xl font-wixmadefor ' initial={{ x: 0, y: 0 }}>
                <Link to='/About'onClick={() => handleNavigation('/About')}>About me</Link>
            </motion.p>
        </motion.div>
    </div>
</Magnetic>
            </div>

          </div>
         

      </div>
  )
}

export default Scrollingtext

