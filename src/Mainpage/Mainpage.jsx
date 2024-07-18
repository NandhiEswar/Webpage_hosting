import React, { useState, useEffect } from "react";
import { AnimatePresence, motion, useTransform, useViewportScroll, useAnimation } from "framer-motion";
import Mainleft from "./mainleft";
import Fadein from "../Framermotion/Fadein";
import Splashscreen from "../Splashscreen/Splashscreen";
import Zero from "../Assert/Zero.jpeg";
import { FaArrowRight } from "react-icons/fa";

function Mainpage() {
  const [isSplashscreenVisible, setIsSplashscreenVisible] = useState(true);
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const rotate = useTransform(scrollYProgress, [0, 1], [35, 0]);
  const words = ["Hello", "नमस्ते", "নমস্তে", "नमस्ते", "నమస్తే", "வணக்கம்", "નમસ્તે", "നമസ്തേ"];
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const scrollDiff = scrollY - prevScrollY;

    // Change direction if user scrolls up or down
    if (scrollDiff > 0 && direction !== -1) {
      setDirection(-1);
    } else if (scrollDiff < 0 && direction !== 1) {
      setDirection(1);
    }

    setPrevScrollY(scrollY);
  }, [scrollY, prevScrollY, direction]);

  useEffect(() => {
    const animateScroll = () => {
      controls.start({
        x: direction === 1 ? "80vw" : "-80vw",
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
            duration: 5,
          },
        },
      });
    };

    animateScroll();
  }, [controls, direction]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashscreenVisible(false);
    }, 2000); // Hide splashscreen after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isSplashscreenVisible ? (
        <Splashscreen key="splashscreen" words={words} />
      ) : (
        <div className="flex justify-center items-center h-screen">
          <Mainleft />
          <div className="flex flex-col justify-end gap-1">
            <div className="flex bottom-0 right-0 absolute overflow-hidden">
              <motion.h1
                initial={{ x: direction === 1 ? "80vw" : "-80vw" }} // Adjusted initial position
                animate={controls} // Animate with controls
                className="relative bottom-0 text-[180px] text-gray-600 overflow-hidden title"
                style={{ whiteSpace: "nowrap", overflow: "hidden", y }} // Prevent text wrapping
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
              className="text-black md:text-3xl text-sm md:m-10 m-2 hover:rotate-12"
              style={{ rotate }}
            >
              <FaArrowRight />
            </motion.div>
            <div className="flex gap-2 items-center">
              <div className="md:w-6 md:h-6 w-2 h-2 rounded-full bg-[#66FF00] animate-pulse"></div>
              <h1 className="font-inter italic font-medium md:text-4xl text-sm leading-25 text-black animate-pulse">
                Available for
              </h1>
            </div>
            <h1 className="font-inter italic font-medium md:text-4xl text-sm leading-25 text-black animate-pulse">
              Hiring
            </h1>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default Mainpage;
