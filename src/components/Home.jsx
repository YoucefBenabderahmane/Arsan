import React, { useState, useEffect } from 'react';

import { useSpring, animated } from 'react-spring';

import wallpaper from '../assets/wallpaper.jpg';
import { useTranslation } from 'react-i18next';

const Home = () => {

  const [t]=useTranslation("global");
  

  
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
    config: {
      duration: 1000,
    },
  });

  return (
    <div
      name="home"
      className="home w-full h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      
      {/* container */}
      <div className="max-w-full mx-auto px-4 sm:px-8 font-alga flex flex-col justify-center text-center">
        <animated.h1
          style={props}
          className="text-white font-alga text-xl sm:text-4xl py-2 sm:py-4"
        >
            {t("home.society")}
        </animated.h1>

        <animated.h2
          style={props}
          className="text-5xl sm:text-6xl lg:text-9xl font-alga py-2 sm:py-4 text-[#ccd6f6]"
        >
          {t("home.ARSANQCENTER")}
        </animated.h2>

        <animated.h2
          style={props}
          className="text-xl sm:text-xl lg:text-3xl font-alga text-white"
        >
          {t("home.undert")}
        </animated.h2>
      </div>
      
    </div>
  );
};

export default Home;