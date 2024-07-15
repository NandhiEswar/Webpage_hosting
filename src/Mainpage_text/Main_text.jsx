import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import React from 'react'; 
import { slideup } from './anim'
import "./main.scss"
function Main_text() {
    const phrase = `As an experienced professional seeking new opportunities, I am excited to bring my skills and expertise to your organization. I am confident in my ability to contribute positively to your team. Eager to embark on this next chapter of my career, I am open to discussing potential roles and how I can add value to your company. Let's connect and explore how we can work together towards mutual success.`;
    const description = useRef(null);
    const isInView = useInView(description);
    return (
        <div ref={description} className="description ">
            <div className="body">
            <p >
    {
        phrase.split(" ").map((word, index) => {
            return (
                <span className="mask " >
                    <motion.span key={index} variants={slideup}
                        className={`inline-block  overflow-hidden transition duration-500
                         ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        custom={index} animate={isInView ? "open" : "closed"}>
                        {word }
                    </motion.span>
                </span>
            );
        })
    }
</p>

            </div>
        </div>
    );
}

export default Main_text;