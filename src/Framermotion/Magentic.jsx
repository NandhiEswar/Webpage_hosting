import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

export default function Magnetic({ children }) {
    const magnetic = useRef(null);

    useEffect(() => {
        const xTo = gsap.quickTo(magnetic.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(magnetic.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        magnetic.current.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = magnetic.current.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x * 0.35);
            yTo(y * 0.35);

            // Move the text along with the element
            gsap.to(magnetic.current.querySelector('.text'), { x: x * 0.35, y: y * 0.35, duration: 1, ease: "elastic.out(1, 0.3)" });
        });

        magnetic.current.addEventListener("mouseleave", (e) => {
            xTo(0);
            yTo(0);

            // Reset the position of the text
            gsap.to(magnetic.current.querySelector('.text'), { x: 0, y: 0, duration: 1, ease: "elastic.out(1, 0.3)" });
        });
    }, []);

    return (
        React.cloneElement(children, { ref: magnetic })
    );
}