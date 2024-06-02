import React, { useState, useEffect } from 'react';

import { useSpring, animated } from 'react-spring';

import wallpaper from '../assets/wallpaper.jpg';

const Home = () => {


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
          className="text-white font-alga text-2xl sm:text-4xl py-2 sm:py-4"
        >
          HORSE SOCIETY
        </animated.h1>

        <animated.h2
          style={props}
          className="text-4xl sm:text-6xl lg:text-9xl font-alga py-2 sm:py-4 text-[#ccd6f6]"
        >
          ARSAN Q CENTER
        </animated.h2>

        <animated.h2
          style={props}
          className="text-2xl sm:text-4xl lg:text-7xl font-alga text-[#8892b0]"
        >
        </animated.h2>
      </div>
    </div>
  );
};

export default Home;