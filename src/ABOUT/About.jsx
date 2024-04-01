import React ,{useEffect} from 'react'
import Magnetic from '../Framermotion/Magentic'
import Aboutimage from '../Assert/Aboutimage.jpeg'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './styles.css';
import { useState } from 'react';
import {  motion, AnimatePresence } from 'framer-motion';
import Splashscreen from '../Splashscreen/Splashscreen'

import about2 from '../Assert/about2.jpeg'

gsap.registerPlugin(ScrollTrigger);


function About() {
  const [isloading, setisloading] = useState(true);
  setTimeout(() => {  
    setisloading(false);
  }, 2000);
  const   words =["About"]
  

  useEffect(() => {
    const imageContainer = document.querySelector(".image-container");
    if (imageContainer) {
      const image = imageContainer.querySelector("img");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: image,
          scrub: true,
          pin: false,
        },
      });
  
      tl.from(image, {
        yPercent: -2,
        ease: "none",
      }).to(image, {
        yPercent: 20,
        ease: "none",
      });
    }
  }, []);
  

  return (
    <AnimatePresence>
        {isloading ? (
          <Splashscreen key="splashscreen" words={words}></Splashscreen>
        ) : (
    <div className=' flex  flex-col  relative justify-center  '>
       <div className='flex flex-col w-screen  justify-center text-center items-center relative bg-[#C4C4C4]'>
          <div className=' md:text-9xl p-10 text-6xl'>
              <h1>Passionte in the digital world</h1>
          </div>

          <motion.div className=' items-center justify-end w-1/2 md:h-1 h-[0.5px] bg-[#A5A5A5] flex  my-12 container md:mt-28'>
              <Magnetic>
                  <motion.div  className=' bg-[#334BD3] text-white rounded-full md:h-[100px] md:w-[100px] h-[80px] w-[80px] items-center
                   justify-center flex md:p-24   md:mr-28'>
                      
                      <motion.p className=' md:text-lg text-xl '>
                      
                      <motion.svg
            width="50px"
            height="50px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            className=" mx-auto md:mt-4 mt-2 w-[30px] h-[30px] md:w-[100px] md:h-[100px]   "
            style={{ originX: "90%", originY: "50%" }} // Set the transform origin to the middle of the SVG
            animate={{ rotate: 360 }} // Rotate the SVG 360 degrees
            transition={{ duration: 12, repeat: Infinity, ease:  "linear" }} // Repeat the rotation infinitely
          >
            <defs>
              <clipPath id="clip-world">
                <rect width="32" height="32" />
              </clipPath>
            </defs>
            <g id="world" clip-path="url(#clip-world)">
              <g
                id="Group_1702"
                data-name="Group 1702"
                transform="translate(-312 -468)"
              >
                <g id="Group_1701" data-name="Group 1701">
                  <g id="Group_1700" data-name="Group 1700">
                    <g id="Group_1699" data-name="Group 1699">
                      <g id="Group_1698" data-name="Group 1698">
                        <g id="Group_1697" data-name="Group 1697">
                          <g id="Group_1696" data-name="Group 1696">
                            <g id="Group_1695" data-name="Group 1695">
                              <g id="Group_1694" data-name="Group 1694">
                                <g id="Group_1693" data-name="Group 1693">
                                  <g id="Group_1692" data-name="Group 1692">
                                    <g id="Group_1691" data-name="Group 1691">
                                      <g id="Group_1690" data-name="Group 1690">
                                        <path
                                          id="Path_3712"
                                          data-name="Path 3712"
                                          d="M328,468.438A15.562,15.562,0,1,0,343.562,484,15.58,15.58,0,0,0,328,468.438Zm-1.112,2.554a19.046,19.046,0,0,0-3.859,6.044,14.42,14.42,0,0,1-4.13-2.363A12.909,12.909,0,0,1,326.888,470.992Zm-9.072,4.072.019.017a15.451,15.451,0,0,0,4.839,2.892,18.812,18.812,0,0,0-.982,5.527h-7.229A13.489,13.489,0,0,1,317.816,475.064Zm.516,18.44a13.509,13.509,0,0,1-3.869-9h7.229a18.839,18.839,0,0,0,1.316,6.409,15.381,15.381,0,0,0-4.607,2.54Zm1.161.367a14.329,14.329,0,0,1,3.9-2.035,19.035,19.035,0,0,0,3.5,5.176A13.008,13.008,0,0,1,319.493,493.871ZM327.5,496.2a18.039,18.039,0,0,1-3.133-4.652,14.344,14.344,0,0,1,3.133-.449Zm0-6.1a15.3,15.3,0,0,0-3.54.52,17.848,17.848,0,0,1-1.269-6.119H327.5Zm0-6.6h-4.809a17.821,17.821,0,0,1,.937-5.214,15.289,15.289,0,0,0,3.872.626Zm0-5.587a14.294,14.294,0,0,1-3.527-.569A18.058,18.058,0,0,1,327.5,471.8Zm9.6-3.24a14.417,14.417,0,0,1-3.964,2.295,18.98,18.98,0,0,0-3.791-5.957A12.913,12.913,0,0,1,337.1,474.673Zm-8.6-3.107a18.034,18.034,0,0,1,3.7,5.724,14.234,14.234,0,0,1-3.7.623Zm0,7.346a15.272,15.272,0,0,0,4.038-.68,18.034,18.034,0,0,1,.929,5.268H328.5Zm0,5.588h4.967a17.974,17.974,0,0,1-1.255,6.171,15.336,15.336,0,0,0-3.712-.572Zm0,6.6a14.277,14.277,0,0,1,3.3.5,18.063,18.063,0,0,1-3.3,4.838Zm.852,5.886a19.066,19.066,0,0,0,3.422-5.086,14.327,14.327,0,0,1,3.733,1.973A13,13,0,0,1,329.352,496.984Zm8.316-3.48-.069-.055a15.4,15.4,0,0,0-4.438-2.482,18.961,18.961,0,0,0,1.3-6.467h7.071A13.509,13.509,0,0,1,337.668,493.5Zm-3.2-10a19.062,19.062,0,0,0-.976-5.588,15.442,15.442,0,0,0,4.675-2.831l.019-.017a13.489,13.489,0,0,1,3.353,8.436Zm7.091.406c0,.032.005.062.005.094s-.005.063-.005.094Z"
                                          fill="#ffff"
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </motion.svg>
                      
                      
                      
                      
                      </motion.p>
                          
                  </motion.div>
                  </Magnetic>
              </motion.div>
          
          <div className='flex   md:flex-row  flex-col-reverse  text-center gap-20  mt-20  '>
          <p className="max-w-[500px]">
            Sure, let me give you a brief overview of my background and experiences. I graduated with a degree in Computer Science from XYZ University, where I developed a strong foundation in programming languages like Java, Python, and C++. During my time there, I completed several projects, including a mobile application that streamlined communication for a local nonprofit organization, which taught me the importance of using technology to create real-world solutions.
          </p>
          <div className="grid-container items-center justify-center">
      <div className="cell">
        <div className="image-container  " >
          <motion.img
            src={Aboutimage}
            alt="Your Image"
            className=" relative  object-cover md:h-auto md:w-auto h-[600px]"
          />
        </div>
      </div>
    </div>
        </div>

          <div className='relative flex flex-col  justify-center  p-10  container '>
        <div className='text-left justify-left items-left flex text-3xl '>
          <h1 className='text-left '>My skills to show</h1>
        </div>


        <div className='flex md:flex-row justify-center p-10 gap-2 flex-col  '>
          
          <div className='flex flex-col mt-10 '>
          <p className='text-left py-5  text-gray-500'>01</p>
            <div className='h-[0.5px] bg-gray-500 w-[80%]'> </div>
      <h1 className='flex py-8'>Travelling</h1>
      <h1 className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cum obcaecati repudiandae blanditiis quisquam at modi, soluta ad nesciunt delectus ducimus a. Iusto accusantium adipisci commodi, sit nam tenetur quas?</h1>
    </div>
    <div className='flex flex-col mt-10'>
          <p className='text-left py-5  text-gray-500'>02</p>
            <div className='h-[0.5px] bg-gray-500 w-[80%]'> </div>
      <h1 className='flex py-8'>Travelling</h1>
      <h1 className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cum obcaecati repudiandae blanditiis quisquam at modi, soluta ad nesciunt delectus ducimus a. Iusto accusantium adipisci commodi, sit nam tenetur quas?</h1>
    </div>
    <div className='flex flex-col mt-10'>
          <p className='text-left py-5  text-gray-500'>03</p>
            <div className='h-[0.5px] bg-gray-500 w-[80%]'> </div>
      <h1 className='flex py-8'>Travelling</h1>
      <h1 className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cum obcaecati repudiandae blanditiis quisquam at modi, soluta ad nesciunt delectus ducimus a. Iusto accusantium adipisci commodi, sit nam tenetur quas?</h1>
    </div>
  </div>

 
</div>
   
      </div>
      
      <div class=' relative flex flex-col justify-center md:flex-row  items-center mt-16 md:mt-28 md:gap-52  mb-32 '>
      <div className="grid-container h-[600px] w-[400px]">
      <div className="cell">
        <div className="image-container" >
          <motion.img
            src={about2}
            alt="Your Image"
            className=" relative  object-cover"
          />
        </div>
      </div>
    
      </div>
      
   
    <div class=' flex  md:mt-52 m-5 '>
          <div className='flex flex-col gap-3'>
            <div className='flex  flex-col gap-7'>
            <div className="circle-container">
        <motion.svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    >
      <text
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="11"
      >
        <textPath xlinkHref="#circle-path" className='leading-10 tracking-[8px] uppercase'>journy journy . offical . awards</textPath>
      </text>
      <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fontSize="16" fill="black " className=' font-extrabold uppercase text-[#9F8170]'>W</text>
      <path id="circle-path" d="M50 10
          A 40 40, 0, 1, 1, 10 50
          A 40 40, 0, 1, 1, 50 90
          A 40 40, 0, 1, 1, 90 50
          A 40 40, 0, 1, 1, 50 10" fill="none" />
    </motion.svg>

          </div>
            <h1 className='text-7xl'>awarding of </h1>
            <h1 className='text-7xl'>the data</h1>
           
    </div>
            <p className=' max-w-[600px] mt-12 text-lg'>I am a proud member of the Awwwards International Jury, where I judge the best websites in the world using my expertise as a designer and developer. Micro animations and transitions have my full attention and get me thrilled with every move.</p>

          </div>
          
        </div>
        
</div>

     </div>)}
    </AnimatePresence>
  )
}

export default About