import React from 'react'
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '../Framermotion/Magentic';
import footer from "../Assert/footbar.png"
import './Fotters.css'
function Fotters() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])
  return (
      <div style={{ y }} ref={container} className='   bg-[#141516] text-white justify-center items-center ' >
          <div className=' flex flex-col justify-center items-center  gap-10'>
              <div className='flex items-center gap-4 md:mt-52 sm:mt-40 vsm:mt-32 '>
                  
                  <img src={footer} alt="main fotter" className='md:w-[100px] md:h-[100px] sm:w-[80px] sm:h-[80px] vsm:h-[60px] vsm:w-[60px]' />
                  <h2 className="text-center md:text-9xl sm:text-6xl  vsm:text-4xl font-wixmadefor  text-white">
                      {"Let's Work together".split("").map((child, idx) => (
             <span className="hoverText" key={idx}>
            {child}
          </span>
        ))}{" "}
      </h2>
              </div>
              <motion.div className=' items-center justify-end w-1/2 md:h-1 vsm:h-[0.8px] bg-[#A5A5A5] flex  sm:my-12 container sm:mt-28 
              vsm:my-8'>
                  <motion.div style={{ x }} className=' bg-[#334BD3] rounded-full md:h-[100px] md:w-[100px] items-center
                   justify-center flex md:p-24   md:mr-28 p-10 sm:h-[150px] sm:w-[150px]  vsm:h-[100px] vsm:w-[100px] text-center'>
                      <Magnetic>
                          <motion.p initial={{ x: 0, y: 0 }} className=' md:text-lg sm:text-lg  vsm:text-sm '>Get in Touch</motion.p>
                          </Magnetic>
                      </motion.div>
              </motion.div>
             
              <div className='flex md:gap-20 sm:gap-16 vsm:gap-7 sm:mt-10 vsm:mt-5 md:flex-row sm:flex-row vsm:flex-col '>
                  {/* buttons */}
                  <Magnetic>
              <motion.div className=" border rounded-xl md:p-5 vsm:p-3 vsm:items-center vsm:flex vsm:justify-center  border-[#C3B091] hover:bg-[#455CE9]">
                          <a href="mailto:nshanmukh52@gmail.com">
                          <motion.p initial={{ x: 0, y: 0 }} className=''>nshamukh52@gmail.com</motion.p>
                            </a>
                      </motion.div>
                  </Magnetic>
                  <Magnetic>
              <motion.div className=" border rounded-lg md:p-5  vsm:p-3 vsm:items-center vsm:flex vsm:justify-center border-[#C3B091] hover:bg-[#455CE9]">
                          <a href="tel:+918885522676" >
                          <motion.p initial={{ x: 0, y: 0 }}>+91 8885522676</motion.p>
                            </a>
                      </motion.div>
                  </Magnetic>
              </div>
             
             
          </div>
         
          <div className=' items-center  w-full h-1 vsm:h-[0.8px] bg-[#A5A5A5] flex   
              vsm:my-8 sm:hidden'/>
          <div className='flex sm:ml-10 sm:mt-40 sm:flex-row vsm:flex-col-reverse  justify-between items-center'>
        
              <div className=' flex  md:gap-20 sm:gap-10  vsm:flex-row vsm:justify-between vsm:gap-28'>
                        <span>
                            <h3>Version</h3>
                            <p>2024 © Edition</p>
                        </span>
                        <span>
                            <h3>Version</h3>
                            <p>11:49 PM GMT+2</p>
                        </span>
              </div>
              <div className=' items-center  w-full h-1 vsm:h-[0.8px] bg-[#A5A5A5] flex   
              vsm:my-8 sm:hidden'/>
              <div className='flex md:gap-10 sm:gap-2  sm:mr-10 vsm:mr-0 vsm:felx vsm:gap-10 '>
                  
             
                        <Magnetic>
                            <p>Instagram</p>
                        </Magnetic>
                        <Magnetic>
                            <p>Dribbble</p>
                        </Magnetic>
                        <Magnetic>
                            <p>Linkedin</p>
                        </Magnetic>
              </div>
              </div>
            
   </div>
  )
}

export default Fotters