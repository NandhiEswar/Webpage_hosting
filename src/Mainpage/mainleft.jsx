import React from "react";
import { motion } from "framer-motion";
import Fadein from "../Framermotion/Fadein";

function Mainleft() {
  
  return (
    <div className=" flex flex-row  justify-between">
       <motion.div
      
      className="bg-[#1A1110] h-[56px] w-[100px] md:h-[86px] md:w-[300px] rounded-r-[70px] absolute md:top-[380px] flex items-center"
      style={{ left: 0, top: '40%', transform: 'translateY(-50%)' }} // Position the component to the left side of the screen and center vertically
    >
      <p className="text-center justify-center text-[#F9ECEC] font-inter mx-auto pt-3 md:text-[15px] text-[8px] ">
        <div className="flex flex-col mb-2">
          <span>Located</span> <span>in the</span>
          <span>India</span>
        </div>
      </p>
      <div className="md:w-20 md:h-20 h-8 w-8 bg-gray-300 rounded-full relative mr-1 md:top-0.5">
      <motion.svg
            width="50px"
            height="50px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            className=" mx-auto md:mt-4 mt-2 w-[20px] h-[20px] md:w-[50px] md:h-[50px]  "
            style={{ originX: "90%", originY: "50%" }} // Set the transform origin to the middle of the SVG
            animate={{ rotate: 360 }} // Rotate the SVG 360 degrees
            transition={{ duration: 12, repeat: Infinity, ease:  "linear" }} // Repeat the rotation infinitely
          >
            <defs>
              <clipPath id="clip-world">
                <rect width="32" height="32" />
              </clipPath>
            </defs>
            <g id="world" clip-path="url(#clip-world)">
              <g
                id="Group_1702"
                data-name="Group 1702"
                transform="translate(-312 -468)"
              >
                <g id="Group_1701" data-name="Group 1701">
                  <g id="Group_1700" data-name="Group 1700">
                    <g id="Group_1699" data-name="Group 1699">
                      <g id="Group_1698" data-name="Group 1698">
                        <g id="Group_1697" data-name="Group 1697">
                          <g id="Group_1696" data-name="Group 1696">
                            <g id="Group_1695" data-name="Group 1695">
                              <g id="Group_1694" data-name="Group 1694">
                                <g id="Group_1693" data-name="Group 1693">
                                  <g id="Group_1692" data-name="Group 1692">
                                    <g id="Group_1691" data-name="Group 1691">
                                      <g id="Group_1690" data-name="Group 1690">
                                        <path
                                          id="Path_3712"
                                          data-name="Path 3712"
                                          d="M328,468.438A15.562,15.562,0,1,0,343.562,484,15.58,15.58,0,0,0,328,468.438Zm-1.112,2.554a19.046,19.046,0,0,0-3.859,6.044,14.42,14.42,0,0,1-4.13-2.363A12.909,12.909,0,0,1,326.888,470.992Zm-9.072,4.072.019.017a15.451,15.451,0,0,0,4.839,2.892,18.812,18.812,0,0,0-.982,5.527h-7.229A13.489,13.489,0,0,1,317.816,475.064Zm.516,18.44a13.509,13.509,0,0,1-3.869-9h7.229a18.839,18.839,0,0,0,1.316,6.409,15.381,15.381,0,0,0-4.607,2.54Zm1.161.367a14.329,14.329,0,0,1,3.9-2.035,19.035,19.035,0,0,0,3.5,5.176A13.008,13.008,0,0,1,319.493,493.871ZM327.5,496.2a18.039,18.039,0,0,1-3.133-4.652,14.344,14.344,0,0,1,3.133-.449Zm0-6.1a15.3,15.3,0,0,0-3.54.52,17.848,17.848,0,0,1-1.269-6.119H327.5Zm0-6.6h-4.809a17.821,17.821,0,0,1,.937-5.214,15.289,15.289,0,0,0,3.872.626Zm0-5.587a14.294,14.294,0,0,1-3.527-.569A18.058,18.058,0,0,1,327.5,471.8Zm9.6-3.24a14.417,14.417,0,0,1-3.964,2.295,18.98,18.98,0,0,0-3.791-5.957A12.913,12.913,0,0,1,337.1,474.673Zm-8.6-3.107a18.034,18.034,0,0,1,3.7,5.724,14.234,14.234,0,0,1-3.7.623Zm0,7.346a15.272,15.272,0,0,0,4.038-.68,18.034,18.034,0,0,1,.929,5.268H328.5Zm0,5.588h4.967a17.974,17.974,0,0,1-1.255,6.171,15.336,15.336,0,0,0-3.712-.572Zm0,6.6a14.277,14.277,0,0,1,3.3.5,18.063,18.063,0,0,1-3.3,4.838Zm.852,5.886a19.066,19.066,0,0,0,3.422-5.086,14.327,14.327,0,0,1,3.733,1.973A13,13,0,0,1,329.352,496.984Zm8.316-3.48-.069-.055a15.4,15.4,0,0,0-4.438-2.482,18.961,18.961,0,0,0,1.3-6.467h7.071A13.509,13.509,0,0,1,337.668,493.5Zm-3.2-10a19.062,19.062,0,0,0-.976-5.588,15.442,15.442,0,0,0,4.675-2.831l.019-.017a13.489,13.489,0,0,1,3.353,8.436Zm7.091.406c0,.032.005.062.005.094s-.005.063-.005.094Z"
                                          fill="#344952"
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </motion.svg>
      </div>
      
      </motion.div>
    

   </div>
  );
}

export default Mainleft;
