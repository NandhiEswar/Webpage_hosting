import './Splashscreen.scss'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


export default function Index(props) {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({width: 0, height:0});

    useEffect( () => {
        setDimension({width: window.innerWidth, height: window.innerHeight})
    }, [])

    useEffect(() => {
        if (!props.words) return; // Guard clause to check if props.words is defined
        const intervalId = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % props.words.length);
        }, 180); // Adjust the interval time as needed
        return () => clearInterval(intervalId); // Cleanup function to clear the interval
    }, [props.words]);

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height}  L0 0`

    const curve = {
        initial: {
            d: initialPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}
        },
        exit: {
            d: targetPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3}
        }
    }

    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className="introduction">
           {dimension.width > 0 && 
            <>
                {/* Check if props.words[index] is defined before accessing it */}
                {props.words && (
                    <motion.p variants={opacity} initial="initial" animate="enter"><span></span>{props.words[index]}</motion.p>
                )}
                <svg>
                    <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
                </svg>
            </>
            }
        </motion.div>
    )
}

export const opacity = {
  initial: {
      opacity: 0
  },
  enter: {
      opacity: 0.75,
      transition: {duration: 1, delay: 0.2}
  },
}

export const slideUp = {
  initial: {
      top: 0
  },
  exit: {
      top: "-100vh",
      transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2}
  }
}