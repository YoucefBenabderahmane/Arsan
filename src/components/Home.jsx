// Home.jsx
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useTranslation } from 'react-i18next';
import backgroundVideo from '../assets/Summer Horse Care Products - HorsesBFF.com_4.mp4';


const Home = () => {
  const [t] = useTranslation("global");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 300); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  const props = useSpring({
    opacity: isReady ? 1 : 0, // Set opacity based on isReady
    marginLeft: isReady ? '0%' : '-20%',
    config: { duration: 1000 },
  });

  return (
    <div name="home" className="home w-full h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat relative">
      <video autoPlay loop muted className="absolute w-full h-full object-cover z-0">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10"></div> {/* Overlay for better text visibility */}
      
      <div className="relative max-w-full mx-auto px-4 sm:px-8 font-alga flex flex-col justify-center text-center z-20">
        <animated.h1 style={props} className="text-white font-alga text-xl sm:text-4xl py-2 sm:py-4">
          {t("home.society")}
        </animated.h1>
        <animated.h2 style={props} className="text-5xl sm:text-6xl lg:text-9xl font-alga py-2 sm:py-4 text-white">
          {t("home.ARSANQCENTER")}
        </animated.h2>
        <animated.h2 style={props} className="text-xl sm:text-xl lg:text-3xl font-alga text-white">
          {t("home.undert")}
        </animated.h2>
      </div>
    </div>
  );
};

export default Home;
