import React, { useRef, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Linker = ({ heading, subheading, imgSrc, href }) => {
  const videoRef = useRef(null);
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const handleCanPlay = () => {
        video.play();
        video.removeEventListener('canplay', handleCanPlay);
      };

      video.addEventListener('canplay', handleCanPlay);

      return () => {
        if (video) {
          video.removeEventListener('canplay', handleCanPlay);
        }
      };
    }
  }, []);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-black md:py-8"
    >
      <RouterLink to={href} className="flex flex-row justify-between items-center w-full gap-7">
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 mb:block flex text-2xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-black md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-1 mt-2 block left-0 text-base text-neutral-500 transition-colors duration-500 group-hover:text-black">
          {subheading}
        </span>
      </RouterLink>
      <motion.video
        ref={videoRef}
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0 },
          whileHover: { scale: 1 },
        }}
        transition={{ type: "spring" }}
        className="absolute z-0 h-52 w-52 rounded-lg object-cover md:h-48 md:w-64"
        loop
        muted
      >
        <source src={imgSrc} />
      </motion.video>
      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-30 p-4"
      >
        <FiArrowRight className="text-5xl text-black" />
      </motion.div>
    </motion.div>
  );
};

export default Linker;
