import React, { useEffect, useState } from 'react';
import { LuChevronDown } from "react-icons/lu";
import { useSpring, animated } from 'react-spring';
import freeabout from "../assets/freeabout.jpg"
import serviceabout from "../assets/serviceabout.jpg"

import { Link } from 'react-scroll';



const About = () => {

  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const props = useSpring({
    opacity: isReady ? 1 : 0,
    marginLeft: isReady ? '0%' : '-20%',
    config: {
      duration: 800,
    },
  });



  return (
    <div name='about' className='w-full h-auto flex justify-center items-center bg-white text-gray-900]'>
      <div className=' max-w-[1300px] mx-auto flex-col justify-center p-8'>
        <div className='sm:text-center pb-8 mt-6 my-10'>
          <p className="text-6xl font-alga inline-block relative group">
            About US
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-700 group-hover:w-full"></span>
          </p>
          <div className='flex justify-center my-6'>
            <LuChevronDown size={20} />
          </div>
        </div>
        <div className='grid sm:grid-cols-2 gap-4 px-4 my-10 mx-10'>
          <div className='text-justify text-gray-800 mt-20 px-4 sm:text-sm sm:text-left '>
            <p className='text-justify text-lg font-alga'>A Qatari company specialized in designing and applicated horse stud in the State of Qatar. Arsan
              International Company is a unique company of its kind in the region, as the idea of launching the
              company came to achieve architectural creativity in the world of horse stud.
              Arsan Company designs dierent kind of stalls with the smallest details, step by step, until the
              key is delivered
              Specialists in
              Horse rooms | Horse swimming pool Training hall Runway for display | Closed hall | small clinic |
              integrated clinic | Small villa | Workers' housing | Out majlis | Private gates | Landscape |
              Swimming pools
            </p>

            <animated.button
              style={props}
              className="text-white font-alga bg-[#763721] sm:autofill: group border-2 px-8 py-3 my-8 flex items-center hover:bg-[#763721] hover:border-[#763721] hover:animate-bounce duration-400">
              <Link onClick={handleClick} to="Contact" smooth={true} duration={800} delay={100}>
                Contact
              </Link>
            </animated.button>
          </div>
          <div className='relative w-full h-[300px] my-20'>
            <img
              src={freeabout}
              alt='Horse Racing'
              className='absolute top-[-50%] left-[40%] w-[70%] h-auto object-cover'
            />
            <img
              src={serviceabout}
              alt='Horse Riding'
              className='absolute top-20 left-0 w-[85%] object-cover'
            />
          </div>

        </div>

        <div>


        </div>
      </div>
    </div>

  );
};

export default About;