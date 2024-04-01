// import { motion } from "framer-motion";
// import { useEffect, useRef } from "react";
// import Fadein from "./Fadein";
// import { FaArrowDown } from "react-icons/fa";

// const ButtonWrapper = () => {
//   return (
//     <div className="flex min-h-[200px] items-center justify-center bg-slate-800 px-4">
//       <SpotlightButton />
//     </div>
//   );
// };

// const SpotlightButton = () => {
//   const btnRef = useRef(null);
//   const spanRef = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const { height } = e.target.getBoundingClientRect();
//       const offset = e.offsetX;
//       const top = `${(offset / height) * 100}%`;

//       spanRef.current.animate({ top }, { duration: 250, fill: "backwards" });
//     };

//     const handleMouseLeave = () => {
//       spanRef.current.animate(
//         { top: "50%" },
//         { duration: 100, fill: "backwards" }
//       );
//     };

//     btnRef.current.addEventListener("mousemove", handleMouseMove);
//     btnRef.current.addEventListener("mouseleave", handleMouseLeave);

//     return () => {
//       btnRef.current.removeEventListener("mousemove", handleMouseMove);
//       btnRef.current.removeEventListener("mouseleave", handleMouseLeave);
//     };
//   }, []);
//     console.log(btnRef)

//   return (
    
// <motion.div
// variants={Fadein("top", 0.3)}
// initial="hidden"
// whileInView={"show"}
//     viewport={{ once: false, amount: 0.7 }}
//     whileTap={{ scale: 0.985 }}
//     ref={btnRef}

// className=" bg-black md:w-32 md:h-32 sm:w-32 sm:h-32 rounded-full md:mr-52 text-center justify-center items-center md:flex  hidden  cursor-pointer ">
// <FaArrowDown className=" text-white md:text-5xl  text-sm" />
// <span
//         ref={spanRef}
//         className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-[#455CE9]"
//       />
// </motion.div>
//   );
// };

// export default ButtonWrapper;


{/* <span className="sr-only"> i need to reasearch</span> */}
import { motion } from "framer-motion";
import { useState } from "react";
import Fadein from "./Fadein";
import { FaArrowDown } from "react-icons/fa";

const SpotlightButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      variants={Fadein("top", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="relative bg-black md:w-32 md:h-32 sm:w-32 sm:h-32 rounded-full md:mr-52 text-center justify-center items-center md:flex hidden overflow-hidden cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <FaArrowDown
        className={`text-${isHovered ? "blue" : "white"} md:text-5xl text-sm`}
      />
    </motion.div>
  );
};

export default SpotlightButton;



