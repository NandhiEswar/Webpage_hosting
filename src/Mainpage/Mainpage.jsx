import React, { useState, useEffect } from "react";
import { AnimatePresence, motion,useScroll,useTransform ,useViewportScroll} from "framer-motion";
import Mainleft from "./mainleft";
import Fadein from "../Framermotion/Fadein";
import Splashscreen from "../Splashscreen/Splashscreen";
import Zero from "../Assert/Zero.jpeg";
import { FaArrowRight } from "react-icons/fa";



function Mainpage() {
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const rotate = useTransform(scrollYProgress, [0, 1], [35, 0]); // Rotate from 45 degrees to 0 as you scroll up
  const words = ["Hello", "नमस्ते", "নমস্তে", "नमस्ते", "నమస్తే", "வணக்கம்", "નમસ્તે", "നമസ്തേ"]
   // Adjust the range as needed


  // const { scrollYProgress } = useScroll(); // Corrected variable name
  
  // const x = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const [direction, setDirection] = useState(1); // Direction state: 1 for right to left, -1 for left to right

 
  const [isloading, setisloading] = useState(true);
  setTimeout(() => {  
    setisloading(false);
  }, 2000);

  return (
    <AnimatePresence>
      {isloading ? (
        <Splashscreen key="splashscreen" words={words}></Splashscreen>
      ) : (
        <div className="flex justify-center items-center h-screen  ">
          <Mainleft />
            <div className=" flex flex-col justify-end gap-1 ">
              <div className=" flex bottom-0 right-0 absolute overflow-hidden ">
                <motion.h1
                  
                  initial={{ x: direction === 1 ? "88%" : "-100%" }} // Start off-screen to the right or left depending on direction
                  animate={{ x: "0%" }} // Animate to full visibility (assuming you want to bring it to the center)
                  
        transition={{
          duration: 10, // Duration of each animation cycle
          ease: "linear", // Linear easing
          repeat: Infinity, // Repeat animation infinitely
          repeatType: "mirror", // Reverse animation direction when it reaches the end
          type:"tween"
        }}
        className="relative  bottom-0 text-[180px] text-gray-600    "
        style={{ whiteSpace: "nowrap", y  }} // Prevent text wrapping
      >
        Nandhi Eswaran Developer and Designer
      </motion.h1>
              </div>
            <div className="w-full h-screen overflow-hidden z-[-1]">
                <motion.img
                  
                src={Zero}
                  alt=""
                  style={{ y }}

                className="absolute top-0 left-0 h-screen w-screen object-cover"
                />
              </div>
            </div>

            <motion.div
  variants={Fadein("left", 0.3)}
  initial="hidden"
  whileInView={"show"}
  viewport={{ once: false, amount: 0.7 }}
  className="absolute md:right-32 top-[300px] transform -translate-y-1/2 flex flex-col items-center gap-1 right-4"
            > 
 <motion.div
                  className="text-black md:text-3xl  text-sm md:m-10 m-2 hover:rotate-12"
                  style={{ rotate}}
                >
                  <FaArrowRight />
                </motion.div>
              <div className="flex  gap-2 items-center">
              <div className="md:w-6 md:h-6 w-2 h-2 rounded-full bg-[#66FF00] animate-pulse"></div>
  <h1 className="font-inter italic font-medium md:text-4xl  text-sm leading-25 text-black animate-pulse">
    Available for
  </h1>
            </div>
  <h1 className="font-inter italic font-medium md:text-4xl  text-sm leading-25  text-black animate-pulse">
    Hiring
  </h1>
  
</motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default Mainpage;
