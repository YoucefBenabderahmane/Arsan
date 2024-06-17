import React, { useEffect } from 'react';
import bricks from '../assets/floor/bricks.png';
import bricks2 from '../assets/floor/bricks2.png';
import bricks3 from '../assets/floor/bricks3.png';
import bricks4 from '../assets/floor/bricks4.png';
import bricks5 from '../assets/floor/bricks5.png';
import bricks6 from '../assets/floor/bricks6.png';
import Mat1 from '../assets/floor/Mat1.png';
import Mat2 from '../assets/floor/Mat2.png';
import Mat3 from '../assets/floor/Mat3.png';
import Mat4 from '../assets/floor/Mat4.png';
import Mat5 from '../assets/floor/Mat5.png';
import Mat6 from '../assets/floor/Mat6.png';
import FENCES1 from '../assets/pvc/FENCES1.png';
import Partitions from '../assets/partition/Partitions.png'
import Fences2 from '../assets/pvc/Fences2.png';
import Fences3 from '../assets/pvc/Fences3.png';
import Fences4 from '../assets/pvc/Fences4.png';
import Fences5 from '../assets/pvc/Fences5.png';
import Fences6 from '../assets/pvc/Fences6.png';
import groupe2 from '../assets/partition/Group2.png';
import Partition3 from '../assets/partition/Partitions3.png';
import sand1 from '../assets/Sand/Sand1.png';
import fans from '../assets/fans/Fans.png';
import fans2 from '../assets/fans/Fans2.png';
import fans3 from '../assets/fans/Fans3.png';
import fans4 from '../assets/fans/Fans4.png';
import fans5 from '../assets/fans/Fans5.png';
import feeder from '../assets/feeder/feeder.jpg';
import feeder1 from '../assets/feeder/feeder1.jpg';
import feeder2 from '../assets/feeder/feeder2.jpg';

import sand4 from '../assets/Sand/Sand4.png'
import slide from '../assets/doors/slide.png';
import stall from '../assets/doors/stall.png';
import stall2 from '../assets/doors/stall2.png';
import simcur from '../assets/doors/simcur.png';
import simcur2 from '../assets/doors/simcur2.png';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';

const PorService = () => {
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

  return (
    <div name='portfo' className='w-full font-alga md:h-auto text-gray-900'>
      <div className='max-w-[1300px] mx-auto flex-col justify-center p-8'>

        <div className='font-alga sm:text-center text-center pb-4 mt-64 my-2'>
          <p className="text-6xl inline-block relative group">
            {t("building.title")}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-700 group-hover:w-full"></span>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 font-alga mx-10 sm:mt-20 mb-8 mt-20">
        <div class="-m-1 flex flex-wrap sm:-m-2 sm:w-full">
              <div class="flex sm:w-2/3 flex-wrap">
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center hover:scale-150"
                    src={FENCES1} />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center hover:scale-150"
                    src={Fences4} />
                </div>
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center hover:scale-150"
                    src={Fences2} />
                </div>
              </div>
              <div class="flex sm:w-2/3 sm:ml-48 flex-wrap">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center hover:scale-150"
                    src={Fences6} />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center hover:scale-150"
                    src={Fences3} />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center hover:scale-150"
                    src={Fences5} />
                </div>
              </div>
            </div>
          <div className='grid text-center mx-8 items-center sm:text-centre sm:text-sm md:text-sm'>
            <h1 className='text-4xl my-2'>{t("pro.title4")}</h1>
            <h1 className='text-2xl my-2 sm:-mt-32 md:-mt-32'>{t("pro.title1-2")} <br />  {t("pro.Fans")}</h1>

            <h1 className='text-2xl my-2 md:-mt-40 sm:-mt-40'>{t("pro.title1-3")} <br />{t("pro.Fans2")} </h1>

          </div>

          <div name='fances' class="container w-full mx-auto px-5 py-4">
           
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 font-alga mx-10 my-24">
          <div className='grid text-center mx-8 items-center sm:text-centre sm:text-sm'>
            <h1 className='text-4xl my-4'>{t("pro.title3")}</h1>
            <p className='text-xl text-gray-600'>
              {t("pro.RUBBER")}
            </p>
          </div>

          <div name='fances' class="container w-full mx-auto px-5 py-4">
            <div class="-m-1 flex flex-wrap sm:-m-2 sm:w-full">
              <div class="flex sm:w-2/3 flex-wrap sm:ml-48">
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center hover:scale-150"
                    src={bricks} />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center hover:scale-150"
                    src={bricks2} />
                </div>
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center hover:scale-150"
                    src={bricks3} />
                </div>
              </div>
              <div class="flex sm:w-2/3  flex-wrap">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center hover:scale-150"
                    src={bricks4} />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center hover:scale-150"
                    src={bricks5} />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center hover:scale-150"
                    src={bricks6} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 font-alga mx-10 my-24">
        <div class="-m-1 flex flex-wrap sm:-m-2 sm:w-full">
              <div class="flex sm:w-2/3 flex-wrap sm:ml-48">
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center hover:scale-150"
                    src={Mat1} />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center hover:scale-150"
                    src={Mat2} />
                </div>
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center hover:scale-150"
                    src={Mat3} />
                </div>
              </div>
              <div class="flex sm:w-2/3  flex-wrap">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center hover:scale-150"
                    src={Mat4} />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center hover:scale-150"
                    src={Mat5} />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center hover:scale-150"
                    src={Mat6} />
                </div>
              </div>
            </div>
          <div className='grid text-center mx-8 items-center sm:text-centre sm:text-sm'>
            <h1 className='text-4xl my-4'>{t("pro.title8")}</h1>
            <p className='text-xl text-gray-600'>
              {t("pro.txt8")}<br />{t("pro.txt8-1")}
            </p>

          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 font-alga mx-10 my-24">
          <div className='grid text-center mx-8 items-center sm:text-centre sm:text-sm'>
            <h1 className='text-4xl my-4'>{t("pro.title5")}</h1>
            <p className='text-xl text-gray-600'>
              {t("pro.PARTITIONS")}
            </p>
          </div>
          <div name='partitions' class="container w-full mx-auto px-5 py-4">
            <div class="-m-1 flex flex-wrap sm:-m-2 sm:w-full">
              <div class="flex sm:w-2/3 flex-wrap">
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center hover:scale-150"
                    src={Partitions} />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center hover:scale-150"
                    src={groupe2} />
                </div>
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center hover:scale-150"
                    src={Partition3} />
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 font-alga mx-10 my-24">
        <div class="-m-1 flex flex-wrap sm:-m-2 sm:w-full">
              <div class="flex sm:w-3/2 flex-wrap sm:ml-48">
              <div class="flex w-3/2 p-1 md:p-4">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center hover:scale-150"
                    src={sand1} />
                    
                </div>
              </div>
              <div class="flex sm:w-2/3  flex-wrap">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center hover:scale-150"
                    src={sand4} />
                </div>
              
              </div>
            </div>
          <div className='grid text-center mx-8 items-center sm:text-centre sm:text-sm'>
            <h1 className='text-4xl my-4'>{t("work.title6")}</h1>
            <p className='text-xl text-gray-600'>
              {t("pro.santxt")}<br />{t("pro.sand1")}<br />{t("pro.sand2")}<br />{t("pro.sand3")}<br />{t("pro.sand4")}
            </p>

          </div>
        </div>


        <div className="grid sm:grid-cols-2 gap-4 font-alga mx-10 my-24">
          <div className='grid text-center mx-8 items-center sm:text-centre sm:text-sm'>
            <h1 className='text-4xl my-4'>{t("pro.title1")}</h1>
            <p className='text-xl text-gray-600'>
              {t("pro.fanstxt")}
            </p>
          </div>
          <div class="-m-1 flex flex-wrap sm:-m-2 sm:w-full">
              <div class="flex sm:w-2/3 flex-wrap sm:ml-48">
        <div class="w-full p-1 md:p-2">
                <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg  hover:scale-150"
                    src={fans5} />
                </div>
              
                <div class="flex space-x-4 w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center hover:scale-125"
                    src={fans2} />
                </div>
              </div>
              <div class="flex sm:w-2/3  flex-wrap">
              
                <div class="w-full p-1 md:p-2">
                <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg  hover:scale-125"
                    src={fans3} />
                </div>
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center hover:scale-125"
                    src={fans} />
                </div>
                <div class="w-full p-1 md:p-2">
                <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg  hover:scale-125"
                    src={fans4} />
                </div>
              </div>
            </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 font-alga mx-10 my-24">
        <div class="-m-1 flex flex-wrap sm:-m-2 sm:w-full">
              <div class="flex sm:w-3/2 flex-wrap sm:ml-48">
              <div class="flex w-3/2 p-1 md:p-4">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center hover:scale-150"
                    src={feeder1} />
                    
                </div>
              </div>
              <div class="flex sm:w-2/3  flex-wrap">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center hover:scale-150"
                    src={feeder} />
                </div>
                <div class="flex w-3/2 p-1 md:p-4">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center hover:scale-150"
                    src={feeder2} />
                    
                </div>
              </div>
            </div>
          <div className='grid text-center mx-8 items-center sm:text-centre sm:text-sm'>
            <h1 className='text-4xl my-4'>{t("pro.FEEDER")}</h1>
            <p className='text-xl text-gray-600'>
              {t("pro.santxt")}<br />{t("pro.sand1")}<br />{t("pro.sand2")}<br />{t("pro.sand3")}<br />{t("pro.sand4")}
            </p>

          </div>
        </div>



        <div className="grid sm:grid-cols-2 gap-4 font-alga mx-1 my-28">
          <div className='relative w-full h-[400px] sm:mx-8 my-20'>
            <img
              src={slide}
              alt='Horse Racing'
              className='absolute top-0 -left-2 w-[100%] h-[100%] object-cover transition-transform duration-300 hover:scale-150'
            />
          </div>
          <div className='grid text-center mx-8 items-center sm:text-centre sm:text-sm'>
            <h1 className='text-4xl my-4'>{t("pro.title6")}</h1>
            <p className='text-xl text-gray-600'> {t("pro.txt6-1")}</p>
            <p className='text-xl text-gray-600'> {t("pro.txt6-2")}</p>
            <p className='text-xl text-gray-600'> {t("pro.txt6-3")}</p>
            <p className='text-xl text-gray-600'> {t("pro.txt6-4")}</p>
            <p className='text-xl text-gray-600'> {t("pro.txt6-5")}</p>

          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 font-alga mx-10 my-24">
          <div className='grid text-center mx-8 items-center sm:text-centre sm:text-sm'>
            <h1 className='text-4xl my-4'>{t("pro.title7")}</h1>
            <p className='text-2xl text-gray-800'> {t("pro.txt7-1")}</p>
            <p className='text-xl text-gray-600'> {t("pro.txt7-2")}</p>
            <p className='text-xl text-gray-600'> {t("pro.txt7-3")}</p>
            <p className='text-xl text-gray-600'> {t("pro.txt7-4")}</p>
            <p className='text-xl text-gray-600'> {t("pro.txt7-5")}</p>
          </div>
          <div className='relative w-full h-[400px] mx-4 my-20'>
            <img
              src={stall}
              alt='Horse Racing'
              className='absolute top-0 left-20 w-[80%] h-[80%] object-cover transition-transform duration-300'
            />
            <img
              src={stall2}
              alt='Horse Riding'
              className='absolute top-48 left-0 w-[75%] h-[90%] object-cover hover:scale-110 transition-transform duration-300'
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 font-alga mx-1 my-28">
          <div className='relative w-full h-[400px] sm:mx-8 my-20'>
            <img
              src={simcur}
              alt='Horse Racing'
              className='absolute top-0 -left-2 w-[100%] h-[100%] object-cover transition-transform duration-300'
            />
            <img
              src={simcur2}
              alt='Horse Riding'
              className='absolute top-48 right-96 w-[75%] h-[90%] object-cover hover:scale-110 transition-transform duration-300'
            />
          </div>
          <div className='grid text-center mx-8 items-center sm:text-centre sm:text-sm'>
            <h1 className='text-4xl my-4'>{t("pro.txt7-6")}</h1>
            <p className='text-xl text-gray-600'> {t("pro.txt6-1")}</p>
            <p className='text-xl text-gray-600'> {t("pro.txt6-2")}</p>
            <p className='text-xl text-gray-600'> {t("pro.txt6-3")}</p>
            <p className='text-xl text-gray-600'> {t("pro.txt6-4")}</p>
            <p className='text-xl text-gray-600'> {t("pro.txt6-5")}</p>

          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default PorService;
