import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

function Motion({ children }) {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    
    const mouseMove = (e) => { 
        const { clientX, clientY } = e; // Corrected variable names
        const { width, height, left, top } = ref.current.getBoundingClientRect();
        const x = clientX - (left + width / 10);
        const y = clientY - (top + height / 10);
        setPosition({ x, y });
    }

    const mouseLeave = (e) => {
        setPosition({ x: 0, y: 0 });
    }

    const { x, y } = position;

    return (
        <motion.div
            onMouseMove={mouseMove}
            onMouseLeave={mouseLeave} // Corrected event name
            ref={ref}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.1 }} // Adjusted damping value
        >
            {children}
        </motion.div>
    );
}

export default Motion;
