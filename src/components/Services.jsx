import React, { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import service1 from '../assets/services/logiciel-de-conception.png';
import service2 from '../assets/services/construction.png';
import service3 from '../assets/services/entretien.png';
import service4 from '../assets/services/start.png';
import { useTranslation } from 'react-i18next';

const Services = () => {

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

  const projects = [
    { icon: service1, key: 'Design', title: 'Design', link: '/Design' },
    { icon: service2, key: 'Build', title: 'Building', link: '/Building' },
    { icon: service3, key: 'Maintenance', title: 'Maintenance', link: '/Maintenance' },
    { icon: service4, key: 'Management', title: 'Management', link: '/Management' }
  ];

  return (
    <div name='Services' className={`w-full md:h-auto text-gray-900 ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className='max-w-[1300px] mx-auto flex-col justify-center p-8'>
        <div className='font-alga sm:text-center pb-8 mt-6 my-10'>
          <p className="text-6xl inline-block relative group">
            {t("nav.services")}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-700 group-hover:w-full"></span>
          </p>
          <p className='py-6'>{t("services.check")} </p>
        </div>
        <div className={`grid sm:grid-cols-2 gap-4 px-4 mx-10 my-10 ${i18n.language === 'ar' ? 'flex-row-reverse' : ''}`}>
          <div className={`sm:text-left text-center sm:text-4xl font-alga ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`}>
            <p className='text-xl font-alga'>{t("services.rid")}</p>
            <h1 className='text-4xl my-7'> {t("services.title1")} <br /> {t("services.title2")}<br /> {t("services.title3")}</h1>
          </div>
          <div className={`text-center sm:text-left sm:text-sm ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`}>
            <p className='text-justify font-alga my-10 mx-2 text-lg text-gray-800'>
              {t("services.text")}
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className='group container rounded-md flex flex-col justify-between items-center text-center mx-auto p-8  transition-transform duration-500 hover:shadow-sm hover:-translate-y-2'
            >
              <img src={project.icon} alt={project.key} className='w-24 h-24 mb-4' />
              <h3 className='text-2xl font-alga mb-4'>{t(`ser.${project.key}`)}</h3>
              <div className='opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-1000'>
                <a href={project.link} className='flex items-center text-lg text-gray-800 group-hover:text-black'>
                  <span className='font-alga'>{t('ser.read')}</span>
                  <FaArrowRight className='ml-2' />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
