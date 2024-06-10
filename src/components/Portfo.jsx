import React, { useEffect } from 'react';
import HorseStud from '../assets/Horse-Stud.png';
import OUTMAJLIS from '../assets/OUT MAJLIS.png';
import StudHorse from '../assets/StudHors.png'
import ARENA from '../assets/ARENA.png'
import Arena2 from '../assets/Arena2.png'
import Majlis2 from '../assets/Majlis2.png'
import group from '../assets/Group 1.png'
import Footer from './Footer';
import { useTranslation } from 'react-i18next';

const Portfo = () => {

  const [t]= useTranslation("global");
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
  
  return (

    <div name='portfo' className='w-full font-alga md:h-auto text-gray-900'>
   
      <div className='max-w-[1300px] mx-auto flex-col justify-center p-8'>
  

        <div className="grid sm:grid-cols-2 sm:mx-4 gap-4 font-alga mx-10 mt-64 mb-10">
          <div className='grid text-center mx-6 items-center sm:text-centre sm:text-sm'>
            <h1 className='text-4xl my-4'>{t("port.hors")}</h1>
            <p className='text-xl text-gray-600 sm:right-6'>
            {t("port.txt1")}
            </p>
          </div>
          <div className='relative w-full h-[400px] my-20'>
            <img
              src={HorseStud}
              alt='Horse Racing'
              className='absolute top-0 left-1/4 w-[80%] h-[100%] object-cover  transition-transform duration-300'
            />
            <img
              src={StudHorse}
              alt='Horse Riding'
              className='absolute top-44 left-0 w-[75%] h-[80%] object-cover hover:scale-110 transition-transform duration-300'
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 font-alga mx-10 my-24">
          <div className='relative w-full h-[400px]  mx-4 my-20'>
            <img
              src={ARENA}
              alt='Horse Racing'
              className='absolute top-0 left-0 w-[80%] h-[80%] object-cover  transition-transform duration-300'
            />
            <img
              src={Arena2}
              alt='Horse Riding'
              className='absolute top-44 right-0 w-[75%] h-[80%] object-cover hover:scale-110 transition-transform duration-300'
            />
          </div>
          <div className='grid text-center mx-6 items-center sm:text-centre sm:text-sm'>
            <h1 className='text-4xl my-8'>{t("port.Arena")}</h1>
            <p className='text-xl text-gray-600'>
            {t("port.txt2")}
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 font-alga mx-10 my-24">
          <div className='grid text-center mx-6 items-center sm:text-centre sm:text-sm'>
            <h1 className='text-4xl my-8'>{t("port.out")}</h1>
            <p className='text-xl text-gray-600'>
            {t("port.txt3")}
            </p>
          </div>
          <div className='relative w-full h-[400px] my-20'>
            <img
              src={OUTMAJLIS}
              alt='Horse Racing'
              className='absolute top-0 left-1/4 w-[80%] h-[100%] object-cover transition-transform duration-300'
            />
            <img
              src={Majlis2}
              alt='Horse Riding'
              className='absolute top-36 left-0 w-[75%] h-[80%] object-cover hover:scale-110 transition-transform duration-300'
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 font-alga mx-10 my-24">
          <div className='relative w-full h-[400px] mx-4 my-20'>
            <img
              src={group}
              alt='Horse Racing'
              className='absolute top-0 left-0 w-[100%] h-[100%] object-cover hover:scale-110 transition-transform duration-300'
            />
          </div>
          <div className='grid text-center mx-6 mt-8 items-center sm:text-centre sm:text-sm'>
            <h1 className='text-4xl my-4'>{t("port.race")}</h1>
            <p className='text-xl text-gray-600'> {t("port.txt4")}</p>
            <h1 className='text-2xl my-1'>{t("port.hight")}</h1>
            <p className='text-xl text-gray-600'> {t("port.Hightxt")}</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 font-alga mx-10 my-24">
          <div className='relative w-full h-[400px] mx-4 my-20'>
            <img
              src={ARENA}
              alt='Horse Racing'
              className='absolute top-0 left-0 w-[80%] h-[80%] object-cover  transition-transform duration-300'
            />
            <img
              src={Arena2}
              alt='Horse Riding'
              className='absolute top-44 right-0 w-[75%] h-[80%] object-cover hover:scale-110 transition-transform duration-300'
            />
          </div>
          <div className='grid text-center mx-6 mt-8 items-center sm:text-centre sm:text-sm'>
            <h1 className='text-4xl my-4'>{t("port.race")}</h1>
            <p className='text-xl text-gray-600'>
            {t("port.txt4")}
            </p>
          </div>
        </div>

      </div>
      <div>
      <Footer />
      </div>
      
    </div>
  );
}

export default Portfo;
