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
    <div name="home"
      className="w-full h-screen flex bg-cover bg-center justify-center items-center "
      style={{ backgroundImage: `url(${wallpaper})` }}>
      {/*container*/}
      <div className="max-w-[1500px] mx-auto px-8 flex flex-col justify-center text-center">
        <animated.h1 style={props} className="text-white font-alga text-2xl py-4 text-center sm:text-left">
          HORSE SOCIETY
        </animated.h1>

        <animated.h2 style={props} className="text-6xl sm:text-9xl font-alga py-4 text-[#ccd6f6] text-center sm:text-left">
          ARSAN Q CENTER
        </animated.h2>

        <animated.h2 style={props} className="text-4xl sm:text-7xl font-alga text-[#8892b0] text-center sm:text-left">

        </animated.h2>

      </div>
    </div>
  );
};

export default Home;