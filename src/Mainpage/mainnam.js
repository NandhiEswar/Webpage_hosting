import React, { useEffect, useRef, useState } from 'react';

const AnimatedTitle = () => {
  const elRef = useRef(null);
  const [elWidth, setElWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mouseX, setMouseX] = useState(0);
  const [prevMouseX, setPrevMouseX] = useState(0);
  const [skewWithEasing, setSkewWithEasing] = useState(0);
  const [translateWithEasing, setTranslateWithEasing] = useState(0);

  const skewEasingFactor = 0.1;
  const translateEasingFactor = 0.05;

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseX(e.pageX);
    };

    const handleWindowResize = () => {
      setElWidth(elRef.current.offsetWidth);
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleWindowResize);

    setElWidth(elRef.current.offsetWidth);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const lerp = (start, end, factor) => {
    return (1 - factor) * start + factor * end;
  };

  const animateMe = () => {
    const newSkewTarget = mouseX - prevMouseX;
    setPrevMouseX(mouseX);

    const newTranslateTarget = ((elWidth - windowWidth) / windowWidth) * mouseX * -1;

    const newSkewWithEasing = lerp(skewWithEasing, newSkewTarget, skewEasingFactor);
    const limitedSkew = Math.min(Math.max(parseInt(newSkewWithEasing), -75), 75);
    setSkewWithEasing(limitedSkew);

    const newTranslateWithEasing = lerp(translateWithEasing, newTranslateTarget, translateEasingFactor);
    setTranslateWithEasing(newTranslateWithEasing);

    if (elRef.current) {
      elRef.current.style.transform = `translateX(${translateWithEasing}px) skewX(${skewWithEasing}deg)`;
    }

    requestAnimationFrame(animateMe);
  };

  useEffect(() => {
    requestAnimationFrame(animateMe);
  }, [mouseX, prevMouseX, skewWithEasing, translateWithEasing]);

  return (
    <div className="">
      <section >
        <p ref={elRef} className="font-sans text-8xl text-gray-400 inline-block m-0 p-0">
          The pixel perfect artisan 💡 think - create*
        </p>
      </section>
    </div>
  );
};

export default AnimatedTitle;