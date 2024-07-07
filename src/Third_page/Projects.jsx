import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from './DataContext';
import Magnetic from '../Framermotion/Magentic';
import Linker from '../Third_page/Link_data';

const HoverImageLinks = () => {
  const { projects } = useData();

  return (
    <section className="bg-white p-4 md:p-8 text-center mt-32 flex flex-col justify-center">
      <div className="mx-auto container">
        <div className="h-[0.5px] w-full bg-gray-900 container flex justify-center items-center text-center"></div>
      
        {projects.map((item, index) => (
          <Link
            key={index}
            to={`/Projects/detail/${index}`}
            className="block mb-4 text-blue-500 hover:text-blue-700"
          >
            <Linker
              heading={item.heading}
              subheading={item.subheading}
              imgSrc={item.imgSrc}
              href={`/Projects/detail/${index}`}
            />
          </Link>
        ))}

        <Magnetic>
          <button className="border border-gray-500 md:py-8 md:px-14 py-3 px-4 rounded-[60px] mt-10 md:text-2xl font-semibold hover:bg-[#455CE9] hover:text-white">
            View more <sup>12</sup>
          </button>
        </Magnetic>
      </div>
    </section>
  );
};

export default HoverImageLinks;
