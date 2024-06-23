// Navbar.jsx
import React, { useState, useRef, useEffect } from 'react';
import { FaLinkedin, FaInstagram, FaWhatsapp, FaFacebookF, FaShoppingBag, FaSearch, FaArrowUp } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import MyLogo from '../assets/MyLogo.png';
import MyLogo2 from '../assets/MyLogo2.png';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isHomeSection }) => {

  const { i18n } = useTranslation();
  const [t] = useTranslation('global');
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [hoveredSubmenu, setHoveredSubmenu] = useState(null);

  const links = [
    {
        id: 'services',
        key: 'services',
        name: 'Services',
        submenu: [
            { key: 'Design', title: 'Design', link: '/Design' },
            { key: 'Build', title: 'Building', link: '/Building' },
            { key: 'Maintenance', title: 'Maintenance', link: '/Maintenance' },
            { key: 'Management', title: 'Management', link: '/Management' },
        ],
    },
    { id: 'about', key: 'about', name: 'About', submenu: [] },
    {
        id: 'work',
        key: 'work',
        name: 'Products',
        submenu: [
            { id: 'fences', key: 'title4', name: 'Horse Stalls', link: '/ProService#Mat'  },
            { id: 'Rubber', key: 'title3', name: 'Module System', link: '/ProService'  },
            { id: 'Mat', key: 'title8', name: 'Gates, Doors, Windows', link: '/ProService'  },
            { id: 'Partitions', key: 'title5', name: 'Accessories',link: '/ProService'  },
            { id: 'Sand', key: 'silica', name: 'Horse Walkers and Lunging Arenas', link: '/ProService'  },
            { id: 'fans', key: 'title1', name: 'Horse Health', link: '/ProService'  },
            { id: 'feeder', key: 'FEEDER', name: 'Fences', link: '/ProService'  }, // New link for Fences
            { id: 'slide', key: 'title6', name: 'Rubber', link: '/ProService'  }, // New link for Rubber
        ],
    },
    { id: 'blog', key: 'blog', name: 'Blog', submenu: [] },
    { id: 'contact', key: 'contact', name: 'Contact', submenu: [] },
];



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

  useEffect(() => {
    document.documentElement.setAttribute('dir', i18n.language === 'ar' ? 'ltr' : 'rtl');
  }, [i18n.language]);

  const navigate = useNavigate();

  const handleSubmenuClick = (submenuItem) => {
    if (submenuItem.link.startsWith('/')) {
      navigate(submenuItem.link + `#${submenuItem.id}`);
    }
  };

  return (
    <div
      className='navbar absolute w-full sm:h-[130px] mt-0 sm:mt-0 flex justify-between items-center px-4 my-2 bg-transparent hover:bg-white hover:text-black transition-all duration-300 text-white overflow-visible z-30'
      ref={navRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full flex flex-col sm:flex-row items-center justify-between">
        {/* Logo for wide screens */}
        <a href="/">
          <img
            src={isHovered ? MyLogo2 : MyLogo}
            alt="Logo"
            className="hidden sm:block w-32 h-auto mt-2 sm:w-52 mx-4 sm:mx-20"
          />
        </a>
        {/* Logo for small screens */}
        <div className="block sm:hidden mt-2">
          <img
            src={isHovered ? MyLogo2 : MyLogo}
            alt="Logo"
            className="w-32 h-auto mx-auto"
          />
        </div>
        <div>
        <div className='space-x-2 mt-2'>
            <div className="language-dropdown">
              <button className="language-dropdown-button">
                {i18n.language.toUpperCase()}
              </button>
              <div className="language-dropdown-content cursor-pointer">
                <a onClick={() => i18n.changeLanguage('en')}>EN</a>
                <a onClick={() => i18n.changeLanguage('ar')}>AR</a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-center sm:justify-center mt-2 sm:mt-0">
          <ul className='flex flex-wrap sm:flex-nowrap justify-center text-lg sm:text-xl font-alga space-x-4'>
            
            <li
              key='services'
              className="relative group"
              onMouseEnter={() => setHoveredSubmenu('services')}
              onMouseLeave={() => setHoveredSubmenu(null)}
            >
              <ScrollLink
                to='services'
                smooth={true}
                duration={500}
                className="hover:underline cursor-pointer"
                activeClass="active"
                spy={true}
              >
                {t('nav.services')}
              </ScrollLink>
              {hoveredSubmenu === 'services' && (
                <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg z-50">
                  {links.find(link => link.key === 'services').submenu.map((submenuItem) => (
                    <div
                      key={submenuItem.key}
                      onClick={() => handleSubmenuClick(submenuItem)}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:shadow-md cursor-pointer"
                    >
                      {t(`ser.${submenuItem.key}`)}
                    </div>
                  ))}
                </div>
              )}
            </li>
            <li
              key='work'
              className="relative group"
              onMouseEnter={() => setHoveredSubmenu('work')}
              onMouseLeave={() => setHoveredSubmenu(null)}
            >
              <ScrollLink
                to='work'
                smooth={true}
                duration={500}
                className="hover:underline cursor-pointer"
                activeClass="active"
                spy={true}
              >
                {t('nav.work')}
              </ScrollLink>
              {hoveredSubmenu === 'work' && (
                <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg z-50">
                  {links.find(link => link.key === 'work').submenu.map((submenuItem) => (
                    <div
                      key={submenuItem.key}
                      onClick={() => handleSubmenuClick(submenuItem)}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:shadow-md cursor-pointer"
                    >
                      {t(`pro.${submenuItem.key}`)}
                    </div>
                  ))}
                </div>
              )}
            </li>
            {links.filter(link => link.key !== 'services' && link.key !== 'work').map((link) => (
              <li
                key={link.key}
                className="relative group"
                onMouseEnter={() => setHoveredSubmenu(link.key)}
                onMouseLeave={() => setHoveredSubmenu(null)}
              >
                <ScrollLink
                  to={link.id}
                  smooth={true}
                  duration={500}
                  className="hover:underline cursor-pointer"
                  activeClass="active"
                  spy={true}
                >
                  {t(`nav.${link.key}`)}
                </ScrollLink>
                {link.submenu.length > 0 && hoveredSubmenu === link.key && (
                  <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg z-50">
                    {link.submenu.map((submenuItem) => (
                      <div
                        key={submenuItem.key}
                        onClick={() => handleSubmenuClick(submenuItem)}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:shadow-md cursor-pointer"
                      >
                        {t(`ser.${submenuItem.key}`)}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Navbar icons */}
      <div className='flex items-start sm:space-x-6 mx-4 ml-2 sm:mx-32'>
        {isSmallScreen ? null : (
          <>
            <FaShoppingBag className={`ml-4 text-lg sm:text-xl cursor-pointer transition-colors duration-300 ${isHovered ? 'text-black' : 'text-white'}`} size={20} />
            <FaSearch className={`text-lg sm:text-xl cursor-pointer transition-colors duration-300 ${isHovered ? 'text-black' : 'text-white'}`} size={20} />
          </>
        )}
        <button
          className={`text-lg sm:text-xl cursor-pointer transition-colors duration-300 ${isHovered ? 'text-black' : 'text-white'}`}
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
      <div className={`fixed top-0 right-0 h-full w-full max-w-[280px] sm:max-w-[360px] sm:right-0 bg-white text-gray-800 transition-transform transform ${navOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ transitionDuration: '1s' }}>
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
          <img src={MyLogo2} alt="HappyRider Logo" className="w-28 h-20 sm:w-40 sm:h-24" />
        </div>
        <div>
          <ul className=" ml-6 my-16 space-y-6 sm:space-y-12">
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
