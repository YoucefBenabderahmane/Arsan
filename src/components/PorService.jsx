import React, { useEffect } from 'react';
import Fans from '../assets/Fans.png';
import bricks from '../assets/bricks.png';
import tainer1 from '../assets/trainer1.png';
import FENCES1 from '../assets/FENCES1.png';
import Partitions from '../assets/Partitions.png';
import Fences2 from '../assets/Fences2.png';
import group2 from '../assets/Group2.png';
import slide from '../assets/slide.png';
import stall from '../assets/stall.png';
import stall2 from '../assets/stall2.png';
import simcur from '../assets/simcur.png';
import simcur2 from '../assets/simcur2.png';
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
                <div className="grid sm:grid-cols-2 gap-4 font-alga mx-10 mt-64 mb-10">
                    <div className='grid text-center mx-8 items-center sm:text-centre sm:text-sm'>
                        <h1 className='text-4xl my-4'>{t("pro.title1")}</h1>
                        <p className='text-xl text-gray-600'>
                            {t("pro.Fans")}
                        </p>
                    </div>

                    <div className='relative w-full h-[400px] my-20'>
                        <img
                            src={Fans}
                            alt='Horse Racing'
                            className='absolute top-0 w-[100%] h-[100%] object-cover transition-transform duration-300'
                        />
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 font-alga mx-10 my-24 mb-10">
                    <div className='relative w-full h-[400px] my-20'>
                        <img
                            src={tainer1}
                            alt='Horse Racing'
                            className='absolute top-0 w-[100%] h-[100%] object-cover transition-transform duration-300'
                        />
                    </div>
                    <div className='grid text-center mx-8 items-center sm:text-centre sm:text-sm'>
                        <h1 className='text-4xl my-4'>{t("pro.title2")}</h1>
                        <p className='text-xl text-gray-600'>
                            {t("pro.SOLARIUM")}
                        </p>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 font-alga mx-10 my-24">
                    <div className='grid text-center mx-8 items-center sm:text-centre sm:text-sm'>
                        <h1 className='text-4xl my-4'>{t("pro.title3")}</h1>
                        <p className='text-xl text-gray-600'>
                            {t("pro.RUBBER")}
                        </p>
                    </div>
                    <div className='relative w-full h-[400px] my-20'>
                        <img
                            src={bricks}
                            alt='Horse Racing'
                            className='absolute top-0 w-[100%] h-[100%] object-cover transition-transform duration-300'
                        />
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 font-alga mx-10 my-24">
                    <div className='relative w-full h-[400px] mx-4 my-20'>
                        <img
                            src={Fences2}
                            alt='Horse Racing'
                            className='absolute top-0 -left-2 w-[100%] h-[100%] object-cover transition-transform duration-300'
                        />
                        <img
                            src={FENCES1}
                            alt='Horse Riding'
                            className='absolute top-44 right-0 w-[75%] h-[80%] object-cover hover:scale-110 transition-transform duration-300'
                        />
                    </div>
                    <div className='grid text-center mx-8 items-center sm:text-centre sm:text-sm'>
                        <h1 className='text-4xl my-4'>{t("pro.title4")}</h1>
                        <p className='text-xl text-gray-600'>
                            {t("pro.FENCES")}
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
                    <div className='relative w-full h-[400px] mx-4 my-20'>
                        <img
                            src={Partitions}
                            alt='Horse Racing'
                            className='absolute top-0 left-20 w-[80%] h-[80%] object-cover transition-transform duration-300'
                        />
                        <img
                            src={group2}
                            alt='Horse Riding'
                            className='absolute top-48 left-0 w-[75%] h-[90%] object-cover hover:scale-110 transition-transform duration-300'
                        />
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 font-alga mx-1 my-28">
                    <div className='relative w-full h-[400px] sm:mx-8 my-20'>
                        <img
                            src={slide}
                            alt='Horse Racing'
                            className='absolute top-0 -left-2 w-[100%] h-[100%] object-cover transition-transform duration-300'
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
