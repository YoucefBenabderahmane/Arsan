import React, { useEffect } from 'react';
import d1 from '../assets/Design/d1.png';
import d2 from '../assets/Design/d2.jpg';
import d3 from '../assets/Design/d3.jpg';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';

const Design = () => {
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

            <div className='font-alga sm:text-center text-center pb-8 mt-64 my-2'>
          <p className="text-6xl inline-block relative group">
            {t("design.title")}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-700 group-hover:w-full"></span>
          </p>
        </div>
                <div className="grid sm:grid-cols-2 gap-4 font-alga mx-10 mt-8 mb-10">


                    <div className='grid text-center mx-8 items-center sm:text-centre sm:text-sm'>
                        <h1 className='text-4xl my-4'>{t("design.title1")}</h1>
                        <p className='text-xl text-gray-600'>
                        {t("design.intro1")}
                        </p>
                    </div>

                    <div className='relative w-full h-[400px] my-20'>
                        <img
                            src={d1}
                            alt='Horse Racing'
                            className='absolute top-0 w-[100%] h-[100%] object-cover transition-transform duration-300'
                        />
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 font-alga mx-10 my-24 mb-10">
                    <div className='relative w-full h-[400px] my-20'>
                        <img
                            src={d3}
                            alt='Horse Racing'
                            className='absolute top-0 w-[100%] h-[100%] object-cover transition-transform duration-300'
                        />
                    </div>
                    <div className='grid text-center mx-8 items-center sm:text-centre sm:text-sm'>
                        <h1 className='text-4xl my-4'>{t("design.title2")}</h1>
                        <p className='text-xl text-gray-600'>
                        {t("design.intro2")}
                        </p>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 font-alga mx-10 my-24">
                    <div className='grid text-center mx-8 items-center sm:text-centre sm:text-sm'>
                        <h1 className='text-4xl my-4'>{t("design.title3")}</h1>
                        <p className='text-xl text-gray-600'>
                        {t("design.intro3")}
                        </p>
                    </div>
                    <div className='relative w-full h-[400px] my-20'>
                        <img
                            src={d2}
                            alt='Horse Racing'
                            className='absolute top-0 w-[100%] h-[100%] object-cover transition-transform duration-300'
                        />
                    </div>
                </div>

            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Design;
