import React, { useState, useRef, useEffect } from 'react';
import MyLogo from '../assets/MyLogo.png';
import { FaLinkedin, FaInstagram, FaWhatsapp, FaFacebookF, FaShoppingBag, FaSearch, FaArrowUp } from 'react-icons/fa';
import MyLogo2 from '../assets/MyLogo2.png';
import { Link } from 'react-scroll';
import { useLocation } from 'react-router-dom';


const Navbar = ({ isHomeSection }) => {


  const [showScrollButton, setShowScrollButton] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  const links = [
    { id: 'home' },
    { id: 'Services', name: 'Services' },
    { id: 'about', name: 'About' },
    { id: 'Work', name: 'Work' },
    { id: 'Blog', name: 'Blog' },
    { id: 'Contact', name: 'Contacts' },
  ];

  const isPortfoPage = location.pathname === '/portfo';

  const handleScroll = () => {
    setShowScrollButton(window.scrollY > 0);
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

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640); // Define your breakpoint here, e.g., 640px
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='absolute w-full h-[80px] flex justify-between items-center -ml-2 px-2 mt-14 my-2 bg-transparent text-white overflow-hidden' ref={navRef}>
      <div >
        <img
          src={MyLogo}
          alt='Logo'
          className="w-32 h-auto mt-2 sm:w-52 mx-4 sm:mx-20 hidden sm:block"
        />
      </div>

      <ul className='md:flex sm:flex text-lg md:text-xl sm:text-xl font-alga -space-x-4 sm:space-x-4 mx-0 sm:mx-6 flex'>
        {links.map((link) => (
          <li key={link.id} className="relative">
            <Link to={link.id} smooth={true} duration={700} delay={200} className={`hover:underline ${isPortfoPage ? 'text-[#763721]' : 'text-white'}`}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>




      {/* Navbar icons */}
      <div className='flex items-start sm:space-x-6 mx-2 ml-2 sm:mx-24'>
        {isSmallScreen ? null : (
          <>
            <FaShoppingBag className={`${isPortfoPage ? 'text-[#763721]' : 'text-white'} text-lg sm:text-xl cursor-pointer`} size={20} />
            <FaSearch className={`${isPortfoPage ? 'text-[#763721]' : 'text-white'} text-lg sm:text-xl cursor-pointer`} size={20} />
          </>
        )}
        <button
          className={`${isPortfoPage ? 'text-[#763721]' : 'text-white'} text-lg sm:text-xl cursor-pointer`}
          size={24}
          onClick={handleNavToggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
      <div className={`fixed top-0 right-0 h-full w-full max-w-[340px] xs:max-w-[250px] xs:right-0 bg-white text-gray-800 transition-transform transform ${navOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ transitionDuration: '1s' }}>
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
          <img src={MyLogo2} alt="HappyRider Logo" className="w-20 h-20 sm:w-30 sm:h-24" />
        </div>
        <div>
          <ul className="ml-6 my-16 space-y-6 sm:space-y-12">
            <li>
              <a
                href="https://www.facebook.com/ArsanInternational"
                aria-label="Facebook"
                className="flex items-center text-black hover:text-gray-400">
                <FaFacebookF size={20} />
                <span className="ml-4 sm:ml-6 text-xl sm:text-2xl font-alga">Facebook</span>
              </a>
            </li>

            <li>
              <a
                href="https://api.whatsapp.com/send?phone=%2B97455693999&context=ARD5ZhrH0wEkMRcqfy06LkeJR0ZOcbwCyrfRxEIwhhhIgWjGWKsrigNsyBlbABFyl6Kl7OM1ayjyo72Q9tucNYBwUr5VdmD3F9ror_TtWg3hehD3iAX5JGdQmvLElXiKW4XJ-G9Zg-Ty00g3w9T8UlI5bQ&source=FB_Page&app=facebook&entry_point=page_cta"
                aria-label="Whatsapp"
                className="flex items-center text-black hover:text-gray-400">
                <FaWhatsapp size={22} />
                <span className="ml-4 sm:ml-6 text-xl sm:text-2xl font-alga">Whatsapp</span>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/company/arsan-international-trading-contracting"
                aria-label="Linkedin"
                className="flex items-center text-black hover:text-gray-400">
                <FaLinkedin size={20} />
                <span className="ml-4 sm:ml-6 text-xl sm:text-2xl font-alga">Linkedin</span>
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/arsan.intl/"
                aria-label="Instagram"
                className="flex items-center text-black hover:text-gray-400">
                <FaInstagram size={20} />
                <span className="ml-4 sm:ml-6 text-xl sm:text-2xl font-alga">Instagram</span>
              </a>
            </li>
          </ul>
        </div>
        <hr className="border-gray-300 my-4 w-3/4 mx-auto" />

        <div className="text-center">
          <p className="ml-4 sm:ml-6 mt-10 text-xl sm:text-2xl text-black font-alga">
            <a href="tel:+97455693999">+974 5569 3999</a>
          </p>
          <p className="ml-4 sm:ml-6 my-4 text-lg sm:text-xl text-gray-600 font-alga">
            <a href="mailto:ARSAN-QA@OUTLOOK.COM">ARSAN-QA@OUTLOOK.COM</a>
          </p>
        </div>
      </div>
      {/* Scroll-to-top button */}
      {!isHomeSection && showScrollButton && (
        <div className="fixed bottom-4 right-4 z-10">
          <button
            onClick={scrollToTop}
            className="flex bg-black text-white p-3 sm:p-4 rounded-full shadow-md hover:bg-[#763721] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            <FaArrowUp size={20} />
          </button>
        </div>
      )}
    </div>
  );
};



export default Navbar;
