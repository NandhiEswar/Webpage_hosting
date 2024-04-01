import React from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

const ScrollableText = () => {
  const { scrollYProgress } = useViewportScroll();

  // Create animations based on scroll position
  const xOffset = useTransform(scrollYProgress, [0, 1], [0, -1000]); // Change from 0 to 360 degrees as you scroll

  return (
    <div className="relative" style={{ height: '100vh', overflow: 'hidden', position: 'relative' }}>
      <div className="absolute inset-0 flex justify-center items-center">
        <motion.div
          style={{
            rotate: xOffset, // Rotate the text based on scroll position
            translateZ: 0,
          }}
        >
          <h1 className="text-4xl font-bold">Scrollable Text</h1>
          <p className="mt-4 text-lg">More text...</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollableText;
