import { useEffect, useState } from "react";
import "./App.css";
import HoverImageLinks from "./Third_page/Projects";
import Navbar from "./navbar/Navbar";
import { AnimatePresence } from "framer-motion";
import Splashscreen from "../src/Splashscreen/Splashscreen";
import Scrollering from "../src/ImageSlider/Main_fourth"
import Fotters from "./Fotter/Fotters";
import Scrollingtext from "./Scrollingtext";
import { BrowserRouter ,Routes, Route, Switch, Link } from 'react-router-dom';
import Appmain_ from "./Appmain_";
import About from "./ABOUT/About";
import Contact from "./Contact/Contact"
import Navbar1 from "./Navbar_small";
import Productpage from "./Onlcikcproductpage/Productpage";
function App() {

  const [isloading, setisloading] = useState(true)
  
 
  useEffect( () => {

    (

      async () => {

          const LocomotiveScroll = (await import('locomotive-scroll')).default

          const locomotiveScroll = new LocomotiveScroll();



          setTimeout( () => {

            setisloading(false);

            document.body.style.cursor = 'default'

            window.scrollTo(0,0);

          }, 2000)

      }

    )()

  }, [])
  return (
    <BrowserRouter>
    <div className="  ">
      
      <AnimatePresence mode="wait">
        {isloading && <Splashscreen></Splashscreen>}

        </AnimatePresence>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Appmain_/>} />
          <Route path="/second" element={<Scrollingtext/>}/>
          <Route path="/Projects" element={<HoverImageLinks />}>
          </Route>
          <Route path="/Productpage/:id" element={<Productpage />} />

          <Route path="/images_scrool" element={<Scrollering />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
        <Fotters></Fotters>
      </div>
      </BrowserRouter>
  );
}

export default App;