import React, { useState, useEffect, useRef } from 'react';
import Mylogo2 from '../assets/MyLogo2.png';
import { FaArrowUp, FaFacebookF, FaInstagram, FaLinkedin, FaSearch, FaShoppingBag, FaWhatsapp } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbrown = ({ isHomeSection }) => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef(null);

  const handleScroll = () => {
    setShowScrollButton(window.scrollY > 0);
  };

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setNavOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const links = [
    { path: '/', id: 'home', name: 'Home' },
    { path: '/', id: 'Services', name: 'Services' },
    { path: '/', id: 'about', name: 'About Us' },
    { path: '/', id: 'Work', name: 'Work' },
    { path: '/', id: 'Contact', name: 'Contacts' },
  ];
  

  return (
    <div className='absolute w-full h-[80px] flex justify-between items-center just px-4 mt-14 my-2 bg-transparent text-[#763721]' ref={navRef}>
      <div>
        <img
          src={Mylogo2}
          alt='Logo'
          className="w-52 h-auto mt-2 mx-20"
        />
      </div>
{/* Menu */}
<ul className='hidden md:flex text-2xl font-alga space-x-6 mx-6'>
        {links.map((link) => (
          <li key={link.name} className="relative">
           
              <NavLink to={link.path} className="hover:underline">
                {link.name}
              </NavLink>
          </li>
        ))}
      </ul>

      {/* Navbar icons */}
      <div className='flex items-center space-x-6 mx-24'>
        <FaShoppingBag className='text-[#763721] text-xl cursor-pointer' size={24} />
        <FaSearch className='text-[#763721] text-xl cursor-pointer' size={24} />
        <button
          className='text-[#763721] text-xl cursor-pointer'
          size={24}
          onClick={handleNavToggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <circle cx="5" cy="5" r="1.5" fill="currentColor" />
            <circle cx="12" cy="5" r="1.5" fill="currentColor" />
            <circle cx="19" cy="5" r="1.5" fill="currentColor" />
            <circle cx="5" cy="12" r="1.5" fill="currentColor" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            <circle cx="19" cy="12" r="1.5" fill="currentColor" />
            <circle cx="5" cy="19" r="1.5" fill="currentColor" />
            <circle cx="12" cy="19" r="1.5" fill="currentColor" />
            <circle cx="19" cy="19" r="1.5" fill="currentColor" />
          </svg>
        </button>
      </div>

      {/* Side Navigation */}
      <div className={`grid fixed top-0 right-0 h-full w-[440px] bg-white text-gray-800  transition-transform transform ${navOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ transitionDuration: '1s' }}>
        <button
          onClick={handleNavToggle}
          className="absolute top-6 right-6 bg-gray-200 text-black p-3 rounded-full hover:bg-gray-300 transition-transform transform hover:rotate-180"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col items-center mt-12 space-y-6">
          <img src={Mylogo2} alt="HappyRider Logo" className="w-30 h-24" />
        </div>
        <div>
          <ul className="ml-10 my-16 space-y-12">
            <li>
              <a
                href="https://www.facebook.com/ArsanInternational"
                aria-label="Facebook"
                className="flex items-center text-[#763721] hover:text-gray-400">
                <FaFacebookF size={24} />
                <span className="ml-6 text-2xl font-aboit">Facebook</span>
              </a>
            </li>

            <li>
              <a
                href="https://api.whatsapp.com/send?phone=%2B97455693999&context=ARD5ZhrH0wEkMRcqfy06LkeJR0ZOcbwCyrfRxEIwhhhIgWjGWKsrigNsyBlbABFyl6Kl7OM1ayjyo72Q9tucNYBwUr5VdmD3F9ror_TtWg3hehD3iAX5JGdQmvLElXiKW4XJ-G9Zg-Ty00g3w9T8UlI5bQ&source=FB_Page&app=facebook&entry_point=page_cta"
                aria-label="Whatsapp"
                className="flex items-center text-[#763721] hover:text-gray-400">
                <FaWhatsapp size={26} />
                <span className="ml-6 text-2xl font-alga">Whatsapp</span>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/company/arsan-international-trading-contracting"
                aria-label="Linkedin"
                className="flex items-center text-[#763721] hover:text-gray-400">
                <FaLinkedin size={24} />
                <span className="ml-6 text-2xl font-alga">Linkedin</span>
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/arsan.intl/"
                aria-label="Instagram"
                className="flex items-center text-[#763721] hover:text-gray-400">
                <FaInstagram size={24} />
                <span className="ml-6 text-2xl font-alga">Instagram</span>
              </a>
            </li>

          </ul>
        </div>
        <hr className="border-gray-300 my-4 w-3/4 mx-auto" />

        <div className="text-center">
          <p className="ml-6 mt-20 text-2xl text-[#763721] font-alga ">
            <a href="tel:+974 5569 3999">+974 5569 3999</a>
          </p>
          <p className="ml-6 my-4 text-xl text-gray-600 font-alga">
            <a href="mailto: ARSAN-QA@OUTLOOK.COM" >ARSAN-QA@OUTLOOK.COM</a>
          </p>
        </div>

      </div>

      {/* Scroll-to-top button */}
      {!isHomeSection && showScrollButton && (
        <div className="fixed bottom-4 right-4 z-10">
          <button
            onClick={scrollToTop}
            className="flex bg-black text-white p-4 rounded-full shadow-md hover:bg-[#763721] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            <FaArrowUp />
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbrown;
