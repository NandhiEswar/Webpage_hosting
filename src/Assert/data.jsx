// data.js
import some from '../Assert/some.mp4';
import platy from '../Assert/platy.mp4';
import screen from '../Assert/screen.png';
import screen1 from '../Assert/screen1.png';
import screen2 from '../Assert/scrren2.png';

const data = [
  {
    heading: "React",
    service_role: "Learn what we do here",
    imgSrc: some,
    tools: "react, framer motion, tailwind css, ...",
    description: "We create some data to illustrate this example. We can also build a similar website for you. Contact us for more details.",
    image1: screen,
    image2: some,
    deployment: "Yes / still servicing, available on GitHub",
    mobile1: screen1,
    mobile2: screen2
  },
  {
    heading: "JavaScript",
    subheading: "Master the language",
    imgSrc: platy,
    description: "We create some data to illustrate this example. We can also build a similar website for you. Contact us for more details.",
    image1: screen,
    image2: some,
    deployment: "Yes / still servicing, available on GitHub",
    mobile1: screen1,
    mobile2: screen2
  },
  {
    heading: "Android",
    subheading: "We work with great people",
    imgSrc: platy,
    description: "Detailed description about Android.",
    tools: "Kotlin, Java",
    image1: "",
    image2: ""
  },
  {
    heading: "ML",
    subheading: "Our work speaks for itself",
    imgSrc: platy,
    description: "Detailed description about Machine Learning.",
    tools: "Python, TensorFlow",
    image1: "",
    image2: ""
  }
];

export default data;
