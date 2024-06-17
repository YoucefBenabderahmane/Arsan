import React, { useRef } from 'react';
import Sol from '../assets/Sol.png';
import MAt from '../assets/floor/MAt.png';
import Stall from '../assets/doors/stall.png';
import Rubber from '../assets/floor/Rubber.png';
import Sand from '../assets/Sand/Sand.png';
import shutter from '../assets/doors/shutter_doors.png';
import { LuChevronDown } from 'react-icons/lu';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Count from './Count';
import { useTranslation } from 'react-i18next';

const Work = () => {
  const scrollContainerRef = useRef(null);
  const [t]=useTranslation("global");

  const projects = [
    { image: shutter, title: 'Shutter Doors', key:"title1", link: '/ProService' },
    { image: Rubber, title: 'Partitions', key:"title2", link: '/ProService' },
    { image: MAt, title: 'RUBBER FLOOR MAT', key:"title5", link: '/ProService' },
    { image: Sand, title: 'PADDOCK', key:"title6", link: '/ProService' },
    { image: Sol, title: 'HORSE SOLORIUM', key:"title4", link: '/ProService' },
    { image: Stall, title: 'STALL DOORS', key:"title3", link: '/ProService' }, 
   
  ];

  const scrollLeftButton = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300, // Adjust value to your preference
        behavior: 'smooth'
      });
    }
  };

  const scrollRightButton = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, // Adjust value to your preference
        behavior: 'smooth'
      });
    }
  };

  return (
    <div name='Work' className='w-full font-alga md:h-auto text-gray-900'>
      <div className='max-w-[1300px] mx-auto flex-col justify-center p-8'>
        
        

        <div className='sm:text-center pb-8 mt-6 my-10'>
          <p className="text-6xl font-alga inline-block relative group">
          {t("work.wor")}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-700 group-hover:w-full"></span>
          </p>
          <div className='flex justify-center my-6'>
            <LuChevronDown size={20} />
          </div>
        </div>

        
        <Count />

        <div className="relative">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-4 rounded-full z-10 transition-transform duration-300 hover:scale-110"
            onClick={scrollLeftButton}
          >
            <FaArrowLeft />
          </button>

          <div
            ref={scrollContainerRef}
            className="carousel-container flex overflow-x-auto snap-x snap-mandatory w-full scrollbar-hide scroll-smooth"
            style={{ overflowX: 'scroll', cursor: 'pointer', minHeight: '400px', maxHeight: '500px' }} // Adjust min and max height as needed
          >
            {projects.map((project, index) => (
               <a key={index} href={project.link} target="_blank" rel="noopener noreferrer">
              <div
                key={index}
                className="project-card snap-start w-96 flex-shrink-0 m-2 transition-transform duration-300 hover:scale-105 cursor-pointer" // Adjust width of project cards
              >
                <img src={project.image} 
                alt={t(`work.${project.key}`)}
                className="project-image object-cover mb-4 w-full h-90" /> 
                <h3 className="text-xl font-alga mb-4">{t(`work.${project.key}`)}</h3>
                
              </div>
               </a>
            ))}
          </div>

          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-4 rounded-full z-10 transition-transform duration-300 hover:scale-110"
            onClick={scrollRightButton}
          >
            <FaArrowRight />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Work;
