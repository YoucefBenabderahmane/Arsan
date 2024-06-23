import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import Services from "./components/Services";
import Work from "./components/Work";
import Maintenance from "./components/Maintenance";
import Navbrown from './components/Navbrown';
import Design from './components/Design';
import Building from './components/Building';
import Management from './components/Management';
import { Element, scroller } from 'react-scroll';
import Blog from './components/Blog';
import ProService from './components/PorService';


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

function MaintenancePage () {
  return (
    <>
      <Navbrown />
      <Maintenance />
    </>
  );
}

function DesignPage() {
  return (
    <>
      <Navbrown />
      <Design  />
    </>
  );
}
function BuildingPage() {
  return (
    <>
      <Navbrown />
      <Building />
    </>
  );
}
function ManagementPage() {
  return (
    <>
      <Navbrown />
      <Management  />
    </>
  );
}
function ProServicePage() {
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
      <Navbrown />
      <ProService />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/home" element={<MainPage />} />
      <Route path="/Design" element={<DesignPage />} />
      <Route path="/Maintenance" element={<MaintenancePage />} />
      <Route path="/Building" element={<BuildingPage />} />
      <Route path="/Management" element={<ManagementPage />} />
      <Route path="/ProService" element={<ProServicePage />} />
      <Route path="*" element={<MainPage />} /> {/* Redirect any unmatched route to the home page */}
    </Routes>
  );
}

export default App;
