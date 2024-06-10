import React, { useEffect, useState } from 'react'
import { PiHeadsetLight } from "react-icons/pi";
import { PiMapPinLight } from "react-icons/pi";
import { LuChevronDown } from 'react-icons/lu'
import { GoClock } from "react-icons/go";
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const Contact = () => {

  const [t]=useTranslation("global");
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

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  
  return (
    <div name='Contact' className='w-full h-auto flex justify-center items-center p-8'>
      <div className=' max-w-[1300px] mx-auto flex-col justify-center p-8'>
        <div className='sm:text-center pb-8 my-8'>
        <p className="text-6xl  inline-block relative group">
        {t("contact.title")}
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-700 group-hover:w-full"></span>
      </p>
        </div>
        <div className='flex justify-center -mt-2 mb-6'>
          <LuChevronDown size={20} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-20">

  <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg">
    <PiMapPinLight  className="h-24 w-24 my-4 transition duration-500 ease-in-out transform hover:text-[#763721]"/>                
    <h2 className="text-3xl font-alga text-gray-900 my-2">{t("contact.txt3")}</h2>
    <p className="text-lg text-gray-600">{t("contact.txt3-1")}<br />{t("contact.txt3-2")}</p>
    <Link onClick={handleClick} to="contact-form" smooth={true} duration={800} delay={100} 
    className="text-blue-500 text-lg mt-2 cursor-pointer">
    <p>{t("contact.loc")}</p>
    </Link>
  </div>

  <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg">
  <PiHeadsetLight className="h-24 w-24 my-4 transition duration-500 ease-in-out transform hover:text-[#763721]"/>
    <h2 className="text-3xl font-alga text-gray-900 my-2">{t("contact.txt1")}</h2>
    <p className="text-lg text-gray-600">{t("contact.txt1-2")}</p>
    <p className="text-lg text-gray-600">{t("contact.txt1-3")}</p>
    <Link onClick={handleClick} to="contact-form" smooth={true} duration={800} delay={100} className="text-blue-500 text-lg mt-2">
    <p className="text-blue-500 text-lg mt-2 cursor-pointer">{t("contact.form")}</p>
    </Link>
  </div>

  <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg">
  <GoClock className="h-24 w-24 my-4 transition duration-500 ease-in-out transform hover:text-[#763721]" />
    <h2 className="text-3xl font-alga text-gray-900 my-2">{t("contact.txt2")}</h2>
    <p className="text-lg text-gray-600">{t("contact.txt2")}</p>
    <p className="text-lg text-gray-600">{t("contact.txt2-2")}</p>
    <p className="text-lg text-gray-600">{t("contact.txt2-3")}</p>
  </div>

</div>

        <div id="contact-form" name='contact-form' className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
  <iframe 
    title='Location'
    className="mt-24"
    width="100%" 
    height="80%" 
    frameBorder="0" 
    scrolling="no" 
    marginHeight="0" 
    marginWidth="0" 
    src="https://www.openstreetmap.org/export/embed.html?bbox=-74.04%2C40.68%2C-73.95%2C40.71&amp;layer=mapnik&amp;marker=40.69%2C-73.99">
  </iframe>

  <form method='POST' action="https://getform.io/f/7430f19b-87a1-4e13-8402-4063c53fc396" className='flex flex-col max-w-[800px] mt-14 mx-auto'>
    <div className='pb-8 mt-10'>
      <p className='text-lg font-alga text-[#1B2531]'>{t("contact.form1")}</p>
      <p className='text-4xl font-alga text-[#1B2531] py-4'>{t("contact.form2")} <br />{t("contact.form3")}</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

    <div className="relative mb-6">
      <input className='bg-white border-b-2 focus:outline-none w-full text-gray-600 font-alga' type="text" placeholder={t("contact.name")} name='FirstName' />
      <span className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-300 ease-out"></span>
    </div>

    <div className="relative mb-6">
      <input className='bg-white border-b-2 focus:outline-none w-full text-gray-600 font-alga' type="text" placeholder={t("contact.surname")} name='LastName' />
      <span className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-300 ease-out"></span>
    </div>

    <div className="relative mb-6">
      <input className='bg-white border-b-2 focus:outline-none w-full text-gray-600 font-alga' type="email" placeholder={t("contact.mail")} name='Email' />
      <span className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-300 ease-out"></span>
    </div>

    <div className="relative mb-6">
      <input className='bg-white border-b-2 focus:outline-none w-full text-gray-600 font-alga' type="tel" placeholder={t("contact.phone")} name='Phone' />
      <span className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-300 ease-out"></span>
    </div>
    </div>

    <div className="relative mb-6">
    <textarea className='bg-white border-b-2 focus:outline-none w-full text-gray-600 font-alga' placeholder={t("contact.msg")} name='Message' rows="8"></textarea>
    <span className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-300 ease-out"></span>
  </div>
    <button className='text-white font-alga bg-[#763721] hover:bg-brown-700 px-6 py-3 mt-8 flex items-center justify-center mx-auto'>
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h5l1.5-3H21l-2.5 7H8.5L7 17H3"></path></svg>
        {t("contact.GET IN TOUCH")}
    </button>
  </form>
</div>

<style jsx>{`
  input:focus + span,
  textarea:focus + span {
    width: 100%;
  }
`}</style>

      </div>
    </div>
  )
}

export default Contact