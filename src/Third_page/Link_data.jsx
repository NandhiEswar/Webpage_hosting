import { useRef , useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Link = ({ heading, imgSrc, subheading, href }) => {
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

    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
  
    const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
    const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);
  
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
      <motion.a
        href={href}
        ref={ref}
        onMouseMove={handleMouseMove}
        initial="initial"
        whileHover="whileHover"
        className="group relative flex  items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-black md:py-8  "
      >
        <motion.div className="flex flex-row justify-between items-center w-full gap-7 overflow-hidden">
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
            className="relative z-10 mb:block flex text-2xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-black md:text-6xl  overflow-hidden"
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
          <span className="relative z-1 mt-2 block left-0  text-base text-neutral-500 transition-colors duration-500 group-hover:text-black">
            {subheading}
          </span>
        </motion.div>
        <motion.video
          ref={videoRef}
          style={{
            top,
            left,
            translateX: "-50%",
            translateY: "-50%",
          }}
          variants={{
            initial: { scale: 0,  },
            whileHover: { scale: 1,  },
          }}
          transition={{ type: "spring" }}
         
          className="absolute z-0 h-52 w-52 rounded-lg object-cover md:h-48 md:w-64"
          alt={`Image representing a link for ${heading}`}
          loop
          autoplay
          muted
        >
          <source  src={`${imgSrc}`} />
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
          className="relative  z-30 p-4"
        >
          <FiArrowRight className="text-5xl text-black" />
        </motion.div>
      </motion.a>
    );
};
  
export default Link;