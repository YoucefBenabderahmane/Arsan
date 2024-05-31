import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Work from "./components/Work";
import Portfo from "./components/Portfo";
import Navbrown from './components/Navbrown';
import PorService from './components/PorService'

function MainPage() {
  return (
    <>
     <Navbar />
      <Home />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
     
      <Navbrown />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Portfo" element={<Portfo />} />
        <Route path="/PorService" element={<PorService />} />
      </Routes>
    </>
  );
}

export default App;
