
import Star from "../Assert/Star.png"
import Magnetic from "../Framermotion/Magentic";
import Link from "./Link_data";
import some from '../Assert/some.mp4'
import platy from '../Assert/platy.mp4'
const HoverImageLinks = () => {
  
  return (
    <section className="bg-white p-4 md:p-8 text-center md:mt-32 sm:mt-20  vsm:mt-24 flex flex-col justify-center">
      <div className="mx-auto container">
      <div className="h-[0.5px] w-full bg-gray-900 container flex justify-center items-center text-center"></div>

        <Link
          heading="React"
          subheading="Learn what we do here"
          imgSrc={some}
          href="#"
        />
        <Link
          heading="Android"
          subheading="We work with great people"
          imgSrc={platy}
          href="#"
        />
        <Link
          heading="ML"
          subheading="Our work speaks for itself"
          imgSrc={Star}
          href="#"
        />
        <Link
          heading="Linux"
          subheading="We want cool people"
          imgSrc={Star}
          href="#"
        />
        <Link
          heading="Swift"
          subheading="In case you're bored"
          imgSrc={Star}
          href="#"
        />
        <Magnetic>
        <button className=" border border-gray-500 md:py-8 md:px-14  py-3 px-4 rounded-[60px] mt-10 md:text-2xl font-semibold hover:bg-[#455CE9] hover:text-white">
          View more <sup>12</sup></button>
       </Magnetic>
      </div>
    </section>
  );
};



export default HoverImageLinks;
