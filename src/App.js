import { useEffect, useState } from "react";
import "./App.css";
import HoverImageLinks from "./Third_page/Projects";
import Navbar from "./navbar/Navbar";
import { AnimatePresence } from "framer-motion";
import Splashscreen from "../src/Splashscreen/Splashscreen";
import Scrollering from "../src/ImageSlider/Main_fourth";
import Fotters from "./Fotter/Fotters";
import Scrollingtext from "./Scrollingtext";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Appmain_ from "./Appmain_";
import About from "./ABOUT/About";
import Contact from "./Contact/Contact";
import Detail from "./Third_page/Detail";
import { DataProvider } from '../src/Third_page/DataContext'; // Import DataProvider
import Pagenotfound from "./Pagenotfound/Pagenotfound";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    };

    loadLocomotiveScroll();
  }, []);

  return (
    <BrowserRouter>
      <DataProvider> {/* Wrap entire application with DataProvider */}
        <div className="App">
          {isLoading && <Splashscreen />}
          <Navbar />
          <Routes>
            <Route path="/" element={<Appmain_ />} />
            <Route path="/second" element={<Scrollingtext />} />
            <Route path="/Projects" element={<HoverImageLinks />} />
            <Route path="/Projects/detail/:id" element={<Detail />} /> {/* Correct Detail route */}
            <Route path="/images_scrool" element={<Scrollering />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<Pagenotfound/>} />
          </Routes>
          <Fotters />
        </div>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;