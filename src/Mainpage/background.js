import React from 'react';
import Ellipse from "../Assert/Ellipse 7.png";

function Background() {
  return (
    <>
      {/* background */}
      <div className="absolute z-[-1] w-[330px] h-[209px] top-0   ">
        <img src={Ellipse} alt="" />
      </div>
      {/* background */}
      <div className='flex w-full'>
        <div className="absolute z-[-1] w-[500.18px] md:w-[782.18px] sm:h-[350px] md:h-[626px] md:left-[320.6px] left-[60.6px] top-[-100%] bg-gradient-to-tr from-gray-200 to-gray-300 rounded-full blur-[50px] transform rotate-[28.7deg] "></div>
        <div className="absolute z-[-1] w-[432.58px] h-[291.44px] md:left-[518.95px] left-[218.6px] top-[-100%] bg-gradient-to-br from-gray-300 to-gray-300 rounded-full blur-[50px] transform rotate-[28.7deg] "></div>
        <div className="absolute z-[-1] w-138 h-[369.22px] md:left-[531.62px] left-[120.6px] top-[-100%] bg-gradient-to-tr from-gray-200 to-gray-300 opacity-80 blur-[50px] transform rotate-[122.44deg]  ">
          here we need fix the bug
        </div>
        <div className="absolute z-[-1] w-[782.18px] h-[626px] md:left-[563.6px] left-[220.6px] top-[-100%] bg-gradient-to-tr from-gray-200 to-gray-300 opacity-80 blur-[50px] transform rotate-[28.7deg]  "></div>
      </div>
    </>
  );
}

export default Background;
