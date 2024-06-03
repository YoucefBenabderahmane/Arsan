import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import Services from "./components/Services";
import Work from "./components/Work";
import Portfo from "./components/Portfo";
import Navbrown from './components/Navbrown';
import PorService from './components/PorService';
import { Element, scroller } from 'react-scroll';
import Blog from './components/Blog';

function MainPage() {
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace('#', '');
      scroller.scrollTo(elementId, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="work">
        <Work />
      </Element>
      <Element name="Blog">
        <Blog />
      </Element>
      <Element name="Contact">
        <Contact />
      </Element>
      <Footer />
    </>
  );
}

function PorServicePage() {
  return (
    <>
      <Navbrown />
      <PorService />
    </>
  );
}

function PortfoPage() {
  return (
    <>
      <Navbrown />
      <Portfo />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/home" element={<MainPage />} />
      <Route path="/Portfo" element={<PortfoPage />} />
      <Route path="/PorService" element={<PorServicePage />} />
      <Route path="*" element={<MainPage />} /> {/* Redirect any unmatched route to the home page */}
    </Routes>
  );
}

export default App;
