import React, { useState,useEffect } from "react";
import { AnimatePresence, color, motion } from "framer-motion"
import Magentic from "../Framermotion/Magentic"
import { IoSendSharp } from "react-icons/io5";
import HoverNameChange from "./Namechager";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Navbar1 from "../Navbar_small";

function Navbar() {
  const [backgroundColor, setBackgroundColor] = useState(
    localStorage.getItem("backgroundColor") || ""
  ); // Retrieve background color from localStorage
  const [textColor, setTextColor] = useState(''); // Initial text color

  const navigate = useNavigate();
  
  const handleNavigation = (page) => {
    // Update background color based on the current page
     switch (page) {
    case '/about':
      setBackgroundColor('#C4C4C4');
      setTextColor('');
      break;
    case '/Contact':
      setBackgroundColor('#1C1D20');
      setTextColor('#FFFFFF');
      break;
    case '/':
      setBackgroundColor('');
      setTextColor('');
      break;
    case '/projects':
      setBackgroundColor('#fffff');
      setTextColor('#00000');
      break;
    default:
      // For unknown routes
      setBackgroundColor('#F5F5F5');
      setTextColor('');
      break;
  }
    
    navigate(page); // Navigate to the selected page
    
  };
  useEffect(() => {
    // Save background color to localStorage
    localStorage.setItem("backgroundColor", backgroundColor);
  }, [backgroundColor]);
  return (
    <div className="flex justify-between w-full text-black  md:p-5" style={{backgroundColor ,color : textColor}}>
    <div className="mt-10    flex justify-between items-center w-full md:ml-10  ml-2">
      <div>
        <span className="sr-only">main name</span>
          <Magentic>
          <motion.h1 className="font-telma text-3xl font-extrabold cursor-pointer ">
             
              <Link to="/" onClick={() => handleNavigation('/')}>
              <HoverNameChange></HoverNameChange>
              </Link>
          </motion.h1>
        </Magentic>
         

      </div>
      <div className="flex-grow"></div>
      <div>
          <span className="sr-only"> nav list</span>
          <Navbar1/>
        <div className=" font-lato-thin  font-semibold	  gap-3 justify-end md:gap-16 text-xl  mr-10 text-black md:flex hidden" style={{color:textColor}}>
          <Layoutdata href={"#"} Content={Projects} onClick={() => handleNavigation('/projects')} >Projects</Layoutdata>
          <p className=" cursor-pointer"  onClick={() => handleNavigation('/about')}><Link
            to="/about">
              About
            </Link></p>
            <p className=" cursor-pointer"onClick={() => handleNavigation('/Contact')}>
              <Link to="/Contact">
                Contact</Link>
          </p>
        </div>
      </div>
    </div>
  </div>
  


  );
}

const Layoutdata = ({ children, href, Content ,color }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const showflyout = open && Content;
  return (
    <div
      className="group relative text-black z-10"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      style={{ color: location.pathname === '/Contact' ? '#FFFFFF' : '#000000' }}
    >
      
      <a href={href} className="relative  text-black"  style={{ color: location.pathname === '/Contact' ? '#FFFFFF' : '#000000' }} >
        {children}
        
        {/* underline animation */}
        <span
          style={{
            transform: showflyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left 
          rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        ></span>
      </a>
      <AnimatePresence>
      {showflyout && <motion.div
        initial={{ opacity: 0, y: 15}}
        animate={{opacity: 1 , y: 0}}
        exit={{ opacity: 0, y: 15 }}
          style={{ x: "-50%" }}
          transition={{duration:0.3 ,ease: 'easeOut'}}
        className=" absolute left-1/2 text-black top-12 bg-white -translate-x-1/2">
        <div className=" absolute -top-6  left-0 right-0 h-7 bg-transparent"/>
          <Content />
          
        </motion.div>}
        </AnimatePresence>
    </div>
  );
};

const Projects = () => { 

  return (
    <div className="p-10 shadow-xl md:text-black ">
      <div className=" space-y-3 mt-4 flex flex-col items-left">
        <h2 className="block md:text-3xl text-lg font-semibold">
          Projects
        </h2>
        <Values ><Link to='/projects'>React</Link></Values>
        <Values ><Link to='/projects'>Android</Link></Values>
        <Values ><Link to='/projects'>ML</Link></Values>
        <Values ><Link to='/projects'>Link</Link></Values>
        <Values ><Link to='/projects'>Swift</Link></Values>

        <button className=" border border-black md:text-lg text-sm  md:rounded-[20px] text-center rounded-[10px] px-10 py-2 hover:bg-[#455CE9] hover:text-white ">Git
          <sup className=" text-sm text-[#A5A5A5 ] hover:text">12</sup></button>
      </div>
    </div>
  );
  
}

// const Others = () => { 

//   return (
//     <div className="md:p-6 p-3 shadow-xl">
//       <div className="md:mb-6  md-2 space-y-3 md:mt-4  mt-2 flex flex-col items-left">
//         <h2 className="block md:text-2xl text-sm font-semibold">
//           Fitness
//         </h2>
//         <Values href="#">Planting</Values>
//         <Values href="#">Trucking</Values>
//         <Values href="">Biking</Values>
//       </div>
//     </div>
//   );
  
// }

const Values = ({ children }) => { 
  return (
    <div className="md:text-xl text-sm flex felx-col items-center justify-between hover:text-[#455CE9]">
      <a className="block md:text-lg text-[10px] md:p-1 p-0  ">
        {children}
        
      </a>
      <IoSendSharp className="text-sm "/>
    </div>
  );
}

export default Navbar;
