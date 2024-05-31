import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import service1 from '../assets/logiciel-de-conception.png';
import service2 from '../assets/construction.png';
import service3 from '../assets/entretien.png';
import service4 from '../assets/start.png';

const Services = () => {

  const projects = [
    { icon: service1, title: 'Fans', link: '/PorService'},
    { icon: service2, title: 'Horse Solorium', link: '/PorService'},
    { icon: service3, title: 'Rubber Floor Bricks', link: '/PorService'},
    { icon: service4, title: 'Fences', link: '/PorService'}
  ];

  return (
    <div name='Services' className='w-full md:h-auto text-gray-900'>
      <div className='max-w-[1300px] mx-auto flex-col justify-center p-8'>
        <div className='font-alga sm:text-center pb-8 mt-6 my-10'>
        <p className="text-6xl  inline-block relative group">
        SERVICES
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-700 group-hover:w-full"></span>
      </p>
          <p className='py-6'>Check out Our Services</p>
        </div>
        <div className='grid sm:grid-cols-2 gap-4 px-4 mx-10 my-10'>
          <div className='sm:text-left text-center sm:text-4xl font-alga'>
            <p className='text-xl font-alga'>start riding</p>
            <h1 className='text-4xl my-7 '> Full Services <br /> Arsan International <br /> Company</h1>
          </div>
          <div className='text-center sm:text-left sm:text-sm'>
            <p className='text-justify font-alga my-10 mx-8 text-lg text-gray-800'>
            Discover Arsan International, Qatar's premier horse stud design company. Our expert team creates bespoke equestrian facilities tailored to your needs.
             From state-of-the-art training halls to luxurious swimming pools, every detail is meticulously crafted.
             Experience the pinnacle of equestrian luxury with Arsan International.
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className='group container rounded-md flex flex-col justify-between items-center text-center mx-auto p-8 border border-gray-300 transition-transform duration-500 hover:shadow-lg hover:-translate-y-2'
            >
              <img src={project.icon} alt={project.title} className='w-24 h-24 mb-4' />
              <h3 className='text-2xl font-alga mb-4'>{project.title}</h3>
              <div className='opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-1000'>
                <a href={project.link} className='flex items-center text-lg text-gray-800 group-hover:text-black'>
                  <span className='font-alga'>Read More</span>
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

