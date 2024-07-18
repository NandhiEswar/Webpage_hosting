import React, { useRef, useState, useEffect } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import './Main_forth.scss';

import Star from '../Assert/Star.png';
import some from '../Assert/some.mp4'
import platy from '../Assert/platy.mp4'
import data from '../Assert/data';

const slider1 = [
    {
        color: "#e3e5e7",
        src: some
    },
    {
        color: "#d6d7dc",
        src: platy
    },
    {
        color: "#e3e3e3",
        src: Star
    },
    {
        color: "#21242b",
        src: Star
    }
];

const slider2 = [
    {
        color: "#d4e3ec",
        src: Star
    },
    {
        color: "#e5e0e1",
        src: Star
    },
    {
        color: "#d7d4cf",
        src: Star
    },
    {
        color: "#e1dad6",
        src: Star
    }
];

export default function Scrollering() {
    const videoRef = useRef(null);
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);
    const navigate = useNavigate();

    const handleClick = (index) => {
        navigate(`/Projects/detail/${index}`);
    };

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

    return (
        <div ref={container} className="slidingImages sm:w-[30%] smh:h-[30%] vsm:w-[100%] vsm:h-[50%] md:w-[100%] overflow-hidden flex justify-center">
            <motion.div style={{ x: x1 }} className="slider overflow-hidden cursor-pointer">
                {data.map((project, index) => (
                    <div key={index} className="project" style={{ backgroundColor: project.color }} onClick={() => handleClick(index)}>
                        <div className="imageContainer">
                            <video ref={videoRef} type="video/mp4" autoPlay loop muted>
                                <source src={`${project.imgSrc}`} />
                            </video>
                        </div>
                    </div>
                ))}
            </motion.div>
            <motion.div style={{ x: x2 }} className="slider overflow-hidden">
                {slider2.map((project, index) => (
                    <div key={index} className="project" style={{ backgroundColor: project.color }}>
                        <div className="imageContainer">
                            <img
                                fill={true}
                                alt={"image"}
                                src={`${project.src}`}
                            />
                        </div>
                    </div>
                ))}
            </motion.div>
            <motion.div style={{ height }} className="circleContainer">
                <div className="circle"></div>
            </motion.div>
        </div>
    );
}
