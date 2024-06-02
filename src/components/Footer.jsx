import React from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/MyLogo.png'; // Replace with your logo path
import { FaFacebookF, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const links = [
    { id: 'home', name: 'Home'},
    { id: 'Work', name: 'Services'},
    { id: 'about', name: 'About'},
    { id: 'Skills', name: 'Skills'},
    { id: 'Contact', name: 'Contact'}
  ];

  
  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="max-w-[1500px] h-auto mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center my-6">
          <div className="flex items-center mb-10 md:mb-0">
            <img src={logo} alt="HappyRider" className="w-44 h-24 mx-6" />
            <div className="border-t border-gray-700 my-8"></div>
          </div>
          <nav className="flex space-x-6 text-lg mx-6">
            {links.map(link => (
              <Link key={link.id} to={link.id} smooth={true} duration={700} delay={200} className="hover:underline cursor-pointer">
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="border-t border-gray-700 my-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-center text-center font-alga md:text-left text-gray-300 mb-8 mx-6">
          <div className="mb-8 md:mb-0 first-letter:">
            <p><br />AHMED BIN ALI ST, BIN OMRAN,<br />DOHA, QATAR</p>
          </div>
          <div className=" my-24 md:mb-0">
            <p>+974 5569 3999 <br /><a href="ARSAN-QA@OUTLOOK.COM" className="underline">ARSAN-QA@OUTLOOK.COM</a></p>
          </div>
          <div className=" my-24 md:mb-0">
            <p>HORSE<br />CLUBS, FARMS, STUDS</p>
          </div>
          <div className="flex space-x-4 ">
            <a href="https://www.facebook.com/ArsanInternational" aria-label="Facebook" className="text-white hover:text-gray-400">
              <FaFacebookF size={24}/>
            </a>
            <a href="https://api.whatsapp.com/send?phone=%2B97455693999&context=ARD5ZhrH0wEkMRcqfy06LkeJR0ZOcbwCyrfRxEIwhhhIgWjGWKsrigNsyBlbABFyl6Kl7OM1ayjyo72Q9tucNYBwUr5VdmD3F9ror_TtWg3hehD3iAX5JGdQmvLElXiKW4XJ-G9Zg-Ty00g3w9T8UlI5bQ&source=FB_Page&app=facebook&entry_point=page_cta" aria-label="Twitter" className="text-white hover:text-gray-400">
              <FaWhatsapp size={26}/>
            </a>
            <a href="https://www.linkedin.com/company/arsan-international-trading-contracting" aria-label="Dribbble" className="text-white hover:text-gray-400">
              <FaLinkedin size={24}/>
            </a>
            <a href="https://www.instagram.com/arsan.intl/" aria-label="Instagram" className="text-white hover:text-gray-400">
              <FaInstagram size={24}/>
            </a>
          </div>
        </div>
        
        <div className="text-center text-lg text-gray-500 mt-20">
          <p>AncoraThemes © 2024. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
