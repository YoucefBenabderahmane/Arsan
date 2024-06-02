import React from 'react';
import HorseStud from '../assets/Horse-Stud.png';
import OUTMAJLIS from '../assets/OUT MAJLIS.png';
import StudHorse from '../assets/StudHors.png'
import ARENA from '../assets/ARENA.png'
import Arena2 from '../assets/Arena2.png'
import Majlis2 from '../assets/Majlis2.png'
import Footer from './Footer';

const Portfo = () => {
  return (

    <div name='portfo' className='w-full font-alga md:h-auto text-gray-900'>
   
      <div className='max-w-[1300px] mx-auto flex-col justify-center p-8'>
  

        <div className="grid sm:grid-cols-2 gap-4 font-alga mx-10 mt-64 mb-10">
          <div className='grid text-center mx-6 items-center sm:text-left sm:text-sm'>
            <h1 className='text-4xl my-4'>HORSE STUD</h1>
            <p className='text-xl text-gray-600'>
              ARSAN International specialize in designing and constructing world-class horse stables 
              that prioritize the comfort, safety, and well-being of your equine companions. 
              Our stables are meticulously crafted to meet the highest standards of functionality and aesthetics, 
              providing a luxurious and functional space for your horses.
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
          <div className='grid text-center mx-6 items-center sm:text-left sm:text-sm'>
            <h1 className='text-4xl my-8'>ARENA</h1>
            <p className='text-xl text-gray-600'>
              ARSAN International is a leading provider of high-quality horse arenas, specializing in designing and constructing arenas that meet the needs of riders, trainers, and horses. Our arenas are built to the highest standards of safety, performance, and durability, providing a premier riding experience for equestrian enthusiasts of all levels.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 font-alga mx-10 my-24">
          <div className='grid text-center mx-6 items-center sm:text-left sm:text-sm'>
            <h1 className='text-4xl my-8'>OUT MAJLIS</h1>
            <p className='text-xl text-gray-600'>
              ARSAN International provider of outdoor majlis construction services, designing and building luxurious majlis spaces that complement horse stables. Our outdoor majlis are perfect for equestrian enthusiasts and horse owners looking to enhance their stable facilities with a touch of elegance and style.
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
          <div className='grid text-center mx-6 mt-8 items-center sm:text-left sm:text-sm'>
            <h1 className='text-4xl my-8'>HORSE RACING TRACK</h1>
            <p className='text-xl text-gray-600'>
              ARSAN International is a leading provider of top-tier horse racing track construction services,
              specializing in designing and building state-of-the-art tracks that meet the highest standards of
              safety, performance, and aesthetics, With a commitment to excellence and a passion for
              equestrian sports.
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
