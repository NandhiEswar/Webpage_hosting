
import Star from "../Assert/Star.png"
import Magnetic from "../Framermotion/Magentic";
import LinkHover from "./Link_data";

import { Link } from "react-router-dom";
import data from "../Assert/data"
const HoverImageLinks = () => {
  
  
  
  return (
    <section className="bg-white p-4 md:p-8 text-center md:mt-32 sm:mt-20  vsm:mt-24 flex flex-col justify-center">
      <div className="mx-auto container"> 
        <div className="h-[0.5px] w-full bg-gray-900 container flex justify-center items-center text-center"></div>
        
       { data.data.map(item => (
          <Link key={item.id} to={`/Productpage/${item.id}`}>
          <LinkHover
              key={item.id}
              heading={item.name} // Assuming Mainheading is the correct property name
              subheading={item.Mainheading} // Assuming Service is the correct property name
              imgSrc={item.video} // Assuming Image1 is the correct property name
            />
         </Link>
          ))}
      
        <Magnetic>
        <button className=" border border-gray-500 md:py-8 md:px-14  py-3 px-4 rounded-[60px] mt-10 md:text-2xl font-semibold hover:bg-[#455CE9] hover:text-white">
          View more <sup>12</sup></button>
       </Magnetic>
      </div>
    </section>
  );
};



export default HoverImageLinks;
