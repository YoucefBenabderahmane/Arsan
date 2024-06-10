import React, { useEffect, useState } from 'react';
import { LuChevronDown } from "react-icons/lu";
import { useSpring, animated } from 'react-spring';
import freeabout from "../assets/freeabout.jpg";
import serviceabout from "../assets/serviceabout.jpg";
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const About = () => {
  const [t] = useTranslation("global");
  const { i18n } = useTranslation();

  useEffect(() => {
    const currentLanguage = i18n.language;
    if (currentLanguage === 'ar') {
      document.body.classList.add('rtl');
      document.body.classList.remove('ltr');
    } else {
      document.body.classList.add('ltr');
      document.body.classList.remove('rtl');
    }
  }, [i18n.language]);

  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const props = useSpring({
    opacity: isReady ? 1 : 0,
    marginLeft: isReady ? '0%' : '-20%',
    config: {
      duration: 800,
    },
  });

  return (
    <div name='about' className={`w-full h-auto flex justify-center items-center bg-white text-gray-900 ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className='max-w-[1300px] mx-auto flex-col justify-center p-8'>
        <div className='sm:text-center pb-8 mt-6 my-10'>
          <p className="text-6xl font-alga inline-block relative group">
            {t("About.About")}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-700 group-hover:w-full"></span>
          </p>
          <div className='flex justify-center my-6'>
            <LuChevronDown size={20} />
          </div>
        </div>
        <div className={`grid sm:grid-cols-2 gap-4 px-4 my-10 mx-10 ${i18n.language === 'ar' ? 'flex-row-reverse' : ''}`}>
          <div className={`text-justify text-gray-800 mt-20 px-0 sm:text-sm ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`}>
            <p className='text-justify text-lg font-alga'>{t("About.txtb")}</p>
            <animated.button
              style={props}
              className="text-white font-alga bg-[#763721] sm:autofill: group border-2 px-8 py-3 my-8 flex items-center hover:bg-[#763721] hover:border-[#763721] hover:animate-bounce duration-400">
              <Link onClick={handleClick} to="Contact" smooth={true} duration={800} delay={100}>
                Contact
              </Link>
            </animated.button>
          </div>
          <div className='relative sm:w-full sm:h-[380px] sm:my-20 sm:mx-14 w-full h-[380px] my-10'>
            <img
              src={freeabout}
              alt='Horse Racing'
              className='absolute top-[10%] left-[30%] w-[80%] h-auto object-cover'
            />
            <img
              src={serviceabout}
              alt='Horse Riding'
              className='absolute top-80 left-0 right-10 w-[125%] object-cover'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
