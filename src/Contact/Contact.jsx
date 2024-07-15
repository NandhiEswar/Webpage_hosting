import React from 'react'
import footbar from '../Assert/footbar.png'
import Magnetic from '../Framermotion/Magentic'
import { useState } from 'react';
import {  motion, AnimatePresence } from 'framer-motion';
import Splashscreen from '../Splashscreen/Splashscreen'



function Contact() {
    const [isloading, setisloading] = useState(true);
    setTimeout(() => {  
      setisloading(false);
    }, 1000);
    const   words =["Contact"]

    return (
        <AnimatePresence>
        {isloading ? (
          <Splashscreen key="splashscreen" words={words}></Splashscreen>
        ) : (
      <div className='flex flex-row gap-20 justify-center items-center  md:h-[150vh]    text-white bg-[#1C1D20]'>
          <div className=' flex justify-center items-center md:mt-20  sm:mt-28'>
          <div className=' flex items-center justify-between gap-20  '>
              <div className='flex flex-col gap-6'>
                      <div className='md:m-12 m-8 flex flex-col gap-5 '>
                      <h1 className='md:text-8xl  sm:text-8xl vsm:text-5xl '>
                  Let's Start a 
              </h1>
              <h1 className='md:text-8xl sm:text-8xl  vsm:text-5xl'>
              Project together
                          </h1>
                          <div className='flex-col text-lg md:mb-20 md:ml-20 md:mt-20 sm:mt-14 vsm:mt-10 md:hidden  '>
              <img src={footbar} alt="" className=' md:w-28 md:h-28 sm:h-25 sm:w-25 vsm:h-20 vsm:w-20 ' />
              <div className='md:mt-10 mt-6 flex flex-col md:gap-4 gap-2 md:text-xl sm:text-lg text-sm'>
                  <p className='text-[#5C5859] font-bold md:text-xl '>contact deails</p>
                  <a href="mailto:nshanmukh52@gmail.com">nshanmukh52@gmail.com</a>
                  <a href="tel:+918885522676">+918885522676</a>
              </div>
              <div className='mt-10 flex flex-col md:gap-3 gap-2 md:text-xl sm:text-lg text-sm'>
                  <p className='text-[#5C5859] font-bold md:text-xl vsm:text-lg'>bussines deatils</p>
                  <a target='blank' href="https://www.google.co.in/maps/place/Visakhapatnam,+Andhra+Pradesh/@17.7386034,83.0977797,11z/data=!3m1!4b1!4m6!3m5!1s0x3a39431389e6973f:0x92d9c20395498468!8m2!3d17.6868159!4d83.2184815!16zL20vMDFqbXBm?entry=ttu">pincode: 535002</a>
                  <a target='blank' href="https://www.google.co.in/maps/place/India/@20.7360632,72.1002822,5z/data=!3m1!4b1!4m6!3m5!1s0x30635ff06b92b791:0xd78c4fa1854213a6!8m2!3d20.593684!4d78.96288!16zL20vMDNyazA?entry=ttu">Location:India</a>
              </div>
              <div className='mt-10 flex flex-col gap-2 md:text-xl sm:text-lg text-sm'>
                  <p className='text-[#5C5859] font-bold text-xl'>Social</p>
                  <a href="mailto:nshanmukh52@gmail.com">Linked in</a>
                  <a href="tel:+918885522676">Whatsapp</a>
                  <a  target='blank' href="https://www.instagram.com/nandhi._/">Instagram</a>
              </div>
              </div>
           </div>
                      <form onSubmit={""} className='flex flex-col gap-3 md:mt-10'>
                      <div className='md:w-full  h-[0.5px] bg-gray-500 '></div>

              <label>
                 
                  <div className='flex  sm:p-8  vsm:p-6 '> 
                  <p className='md:mr-20 sm:mr-20 vsm:mr-16 text-[#9C9898] md:text-xl'>01</p>
                        <div className='flex flex-col gap-3'>
                        <p className='md:text-3xl sm:text-2xl  word-spacing-3'>What's your name?</p>
                        <input type='text' name='username' placeholder='Eswar*' className=' bg-transparent outline-none md:text-2xl sm:text-2xl'  value={""} onChange={""}/>
                      </div>
                  </div>
            
                          </label>
                          <div className='w-full h-[0.5px] bg-gray-500 '></div>
                          <label>
                              
              <div className='flex  sm:p-8  vsm:p-6 '> 
                  <p className='md:mr-20 sm:mr-20 vsm:mr-16 text-[#9C9898] md:text-xl'>02</p>
                        <div className='flex flex-col gap-3'>
                        <p className='md:text-3xl sm:text-2xl  word-spacing-3'>What's your email?</p>
                        <input type='email' name='email' placeholder='nshanmukh52@gmail.com*' className=' bg-transparent outline-none  md:text-2xl sm:text-2xl w-full'  value={""} onChange={""}/>
                      </div>
                  </div>
                          </label>
                          <div className='w-full h-[0.5px] bg-gray-500 '></div>

              <label>
              <div className='flex  p-8'> 
                  <p className='md:mr-20 sm:mr-20 vsm:mr-16 text-[#9C9898] md:text-xl'>03</p>
                        <div className='flex flex-col gap-3'>
                        <p className='md:text-3xl sm:text-2xl'>What's the name of your organization?</p>
                        <input type='text' name='organization' placeholder='Nadhi & E' className=' bg-transparent outline-nonemd:text-2xl sm:text-2xl w-full' />
                      </div>
                              </div>
                              <div className='w-full h-[0.5px] bg-gray-500 '></div>

              </label>
              <label>
             <div className='flex  p-8'> 
                  <p className='md:mr-20 sm:mr-20 vsm:mr-16 text-[#9C9898] md:text-xl'>04</p>
                        <div className='flex flex-col gap-3'>
                        <p className='md:text-3xl sm:text-2xl'>What service are you looking for ?</p>
                        <input type='text' name='services' placeholder='Web Design, Machine learning...' className=' bg-transparent outline-nonemd:text-2xl sm:text-2xl w-full'  value={""} onChange={""}/>
                      </div>
                  </div>
                          </label>
                          <div className='w-full h-[0.5px] bg-gray-500 '></div>

              <label>
              <div className='flex  p-8 pb-13'> 
                  <p className='md:mr-20 sm:mr-20 vsm:mr-16 text-[#9C9898] md:text-xl'>05</p>
                        <div className='flex flex-col gap-3'>
                        <p className='md:text-3xl sm:text-2xl'>Your message</p>
                        <input type='text' name='Message' placeholder='Hello Eswar, can you help  me with ... *' className=' bg-transparent outline-nonemd:text-2xl sm:text-2xl w-fulll'  value={""} onChange={""}/>
                      </div>
                  </div>
                          </label>
                          <div className='w-full  h-[0.5px] bg-gray-500 '></div>

                        
                          <div className=' md:mt-32 mt-14 mb-12 flex items-center justify-center'>
                          <div className="md:w-full w-1/2 h-1 bg-[#A5A5A5] flex items-center justify-end my-12 ">
                          <Magnetic>
  
                                      <motion.div className='md:w-60 md:h-60 sm:h-36 sm:w-36 vsm:h-28 vsm:w-28
         rounded-full flex justify-center text-center items-center bg-[#455CE9] cursor-pointer'
           >
         
            <motion.button type='submit' className='md:p-10 text-white md:text-3xl text-xl font-wixmadefor text' initial={{ x: 0, y: 0 }}>
               Send it
            </motion.button>
        </motion.div>
    
</Magnetic>
           </div>
                         </div>


          </form>
            </div>
              
             
          </div >
          
          <div>
              
              
          </div>
          
        
          </div>
          <div className='  flex-col text-lg mb-20 ml-20 mt-20 md:flex hidden'>
              <img src={footbar} alt="" className=' w-28 h-28' />
              <div className='mt-10 flex flex-col gap-4'>
                  <p className='text-[#5C5859] font-bold text-xl'>contact deails</p>
                  <a href="mailto:nshanmukh52@gmail.com">nshanmukh52@gmail.com</a>
                  <a href="tel:+918885522676">+918885522676</a>
              </div>
              <div className='mt-10 flex flex-col gap-3'>
                  <p className='text-[#5C5859] font-bold text-xl'>bussines deatils</p>
                  <a target='blank' href="https://www.google.co.in/maps/place/Visakhapatnam,+Andhra+Pradesh/@17.7386034,83.0977797,11z/data=!3m1!4b1!4m6!3m5!1s0x3a39431389e6973f:0x92d9c20395498468!8m2!3d17.6868159!4d83.2184815!16zL20vMDFqbXBm?entry=ttu">pincode: 535002</a>
                  <a target='blank' href="https://www.google.co.in/maps/place/India/@20.7360632,72.1002822,5z/data=!3m1!4b1!4m6!3m5!1s0x30635ff06b92b791:0xd78c4fa1854213a6!8m2!3d20.593684!4d78.96288!16zL20vMDNyazA?entry=ttu">Location:India</a>
              </div>
              <div className='mt-10 flex flex-col gap-3'>
                  <p className='text-[#5C5859] font-bold text-xl'>Social</p>
                  <a href="mailto:nshanmukh52@gmail.com">Linked in</a>
                  <a href="tel:+918885522676">Whatsapp</a>
                  <a  target='blank' href="https://www.instagram.com/nandhi._/">Instagram</a>
              </div>
              </div>
      </div> )}
    </AnimatePresence>
  )
}

export default Contact
