import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, useTransform, useViewportScroll, AnimatePresence } from 'framer-motion';
import data from '../Assert/data'; // Adjust the path if necessary
import "./detail.css";
import Magnetic from '../Framermotion/Magentic';
import { MdArrowOutward } from "react-icons/md";
import gsap from "gsap-trial";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import SplitText from 'gsap-trial/SplitText';
import Splashscreen from '../Splashscreen/Splashscreen';
import mac from "../Assert/mac.png";

const Detail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useViewportScroll();
  const translateY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [20, -100]); // Adjust for parallax effect
  const z = useTransform(scrollYProgress, [0, 1], [100, -100]); // Adjust for parallax effect


  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null); // Added another ref for the fullscreen video

  const { id } = useParams();
  const [currentIndex, setCurrentIndex] = useState(parseInt(id));
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [currentIndex]);

  const initializeGSAP = () => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    const h1Ref = document.querySelector('.h1');
    const detailsRef = document.querySelector('.porject-details');

    // Clear previous animations
    gsap.killTweensOf(h1Ref);
    gsap.killTweensOf(detailsRef);

    if (h1Ref) {
      let mysplitText = new SplitText(h1Ref, { type: "words" });
      let chars = mysplitText.words;
      gsap.from(chars, {
        yPercent: 80,
        stagger: 0.20,
        ease: "back.out",
        duration: 2,
        scrollTrigger: {
          trigger: '.h1',
          start: "top 80%",
        }
      });
    }

    if (detailsRef) {
      let mysplitText2 = new SplitText(detailsRef, { type: "lines" });
      let words = mysplitText2.lines;
      gsap.from(words, {
        yPercent: 80,
        stagger: 0.20,
        ease: "back.out",
        duration: 2,
        scrollTrigger: {
          trigger: '.porject-details',
          start: "top 80%",
        }
      });
    }
  };

  useEffect(() => {
    initializeGSAP();

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      gsap.to(imageRef1.current, {
        y: -scrollTop / 7 * 0.1, // Adjust the multiplier for speed
        ease: 'power3.out',
        duration: 0.5,
      });
      gsap.to(imageRef2.current, {
        y: scrollTop / 7 * 0.1, // Adjust the multiplier for speed
        ease: 'power3.out',
        duration: 0.5,
      });
      gsap.to(imageRef3.current, {
        y: -scrollTop * 0.05, // Adjust the multiplier for speed
        ease: 'power3.out',
        duration: 0.5,
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const index = parseInt(id);
    if (!isNaN(index) && index >= 0 && index < data.length) {
      setCurrentIndex(index);
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when currentIndex changes
    } else {
      navigate('/Projects/detail'); // Redirect to the first item if the index is invalid
    }
  }, [id, navigate]);

  useEffect(() => {
    initializeGSAP();
  }, [currentIndex]);

  const item = data[currentIndex];
  const words = item ? item.heading : '';

  const handleNextProject = () => {
    setIsLoading(true); // Show splash screen on navigation
    const nextIndex = currentIndex + 1;
    if (nextIndex < data.length) {
      navigate(`/Projects/detail/${nextIndex}`);
    } else {
      navigate('/Projects/detail'); // Navigate to home when reaching the end of the index
    }
  };

  useEffect(() => {
    if (videoRef1.current) {
      videoRef1.current.play();
    }
    if (videoRef2.current) {
      videoRef2.current.play();
    }
    if (videoRef3.current) {
      videoRef3.current.play();
    }
  }, [currentIndex]);

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <AnimatePresence>
      {isLoading ? (
        <Splashscreen key="splashscreen" words={[words]}></Splashscreen>
        
      ) : (
        <motion.div className='flex flex-col items-center justify-center mx-auto  bg-[#E5E4E2] '>
          <div className='relative flex flex-col justify-center p-2 container'>
            <div className='text-left justify-left items-left flex text-3xl'>
              <h1 className='text-left h1 overflow-hidden'>{item.heading}</h1>
            </div>
          </div>

          <div className='flex md:flex-row justify-center p-10 gap-2 flex-col porject-details overflow-hidden'>
            <div className='flex flex-col mt-10'>
              <p className='text-left py-5 text-gray-500'>01</p>
              <div className='h-[0.5px] bg-gray-500 w-[80%]'></div>
              <h1 className='flex py-8'>Travelling</h1>
              <h1 className='text-left'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
            </div>
            <div className='flex flex-col mt-10'>
              <p className='text-left py-5 text-gray-500'>02</p>
              <div className='h-[0.5px] bg-gray-500 w-[80%]'></div>
              <h1 className='flex py-8'>Travelling</h1>
              <h1 className='text-left'>Nisi cum obcaecati repudiandae blanditiis qui</h1>
            </div>
            <div className='flex flex-col mt-10'>
              <p className='text-left py-5 text-gray-500'>03</p>
              <div className='h-[0.5px] bg-gray-500 w-[80%]'></div>
              <h1 className='flex py-8'>Travelling</h1>
              <h1 className='text-left'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.s?
              </h1>
            </div>
            </div>
            {/* this the image one using some 3d animations */}
          {item.image1 && (
            <div className='relative flex flex-col items-center mt-16'>
              <div className='relative'>
                <Magnetic>
                  <div>
                    <motion.div className='absolute right-[20px] bg-[#334BD3] z-[1] text-white rounded-full md:h-[140px] md:w-[140px] h-[80px] w-[80px] flex items-center justify-center'
                      style={{ y: translateY }}>
                      <motion.p className='flex items-center text-2xl'>
                        visit <MdArrowOutward className='text-white rotate-12 ml-2' />
                      </motion.p>
                    </motion.div>
                  </div>
                </Magnetic> 
                <motion.img src={item.image1} alt={item.heading} className='mx-auto h-1/2 w-[1200px]'  style={{y}}/>
              </div>
            </div>
          )}

         {/* mac animation  */}
          {item.image2 && (
            <div className="device mb-36 mt-36">
              <div className="video-container">
                <video ref={videoRef1} src={item.imgSrc} loop muted autoPlay></video>
              </div>
              <img src={mac} alt="Device" className="overlay-image" />
            </div>
            )}
            {/* video playing second play */}
          <div className=' w-[1000px] relative mb-36' >
            <video ref={videoRef2} loop muted autoPlay>
              <source src={item.imgSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Fullscreen video section */}
          <motion.div className=' mt-10' style={{y}}>
            <motion.video ref={videoRef3} loop muted autoPlay style={{ y }}>
              <source src={item.imgSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </motion.video>
          </motion.div>

          {item.image2 && (
            <div className="device mt-52">
              <div className="video-container">
                <video ref={videoRef1} src={item.imgSrc} loop muted autoPlay></video>
              </div>
                <img src={mac} alt="Device" className="overlay-image" />
            </div>
            )}
          <motion.div className='flex flex-row gap-20 mt-60 mb-20' ref={containerRef}>
            {item.mobile2 && (
              <motion.div ref={imageRef1}>
                <motion.img src={item.mobile2} alt={item.heading} className='h-[500px] rounded-2xl' />
              </motion.div>
            )}
            {item.mobile2 && (
              <motion.div >
                <motion.img src={item.mobile2} alt={item.heading} className='h-[500px] rounded-2xl' />
              </motion.div>
            )}
            {item.mobile1 && (
              <motion.div ref={imageRef2}>
                <motion.img src={item.mobile1} alt={item.heading} className='h-[500px] rounded-2xl' />
              </motion.div>
            )}
          </motion.div>

          <motion.button className='border border-red-100 p-4 rounded-2xl px-[30px] hover:bg-slate-700' onClick={handleNextProject}>
            {currentIndex === data.length - 1 ? 'All works' : 'Next Project'}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Detail;
