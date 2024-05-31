import React from 'react';
import Fans from '../assets/Fans.png';
import bricks from '../assets/bricks.png';
import tainer1 from '../assets/trainer1.png'
import FENCES1 from '../assets/FENCES1.png'
import Partitions from '../assets/Partitions.png'
import Fences2 from '../assets/Fences2.png'
import Footer from './Footer';

const Portfo = () => {
    return (

        <div name='portfo' className='w-full font-alga md:h-auto text-gray-900'>

            <div className='max-w-[1300px] mx-auto flex-col justify-center p-8'>


                <div className="grid sm:grid-cols-2 gap-4 font-alga mx-10 my-24">
                    <div className='grid text-center mx-10 items-center sm:text-left sm:text-sm'>
                        <h1 className='text-4xl my-4'>Fans</h1>
                        <p className='text-xl text-gray-600'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                            diam nonummy nibh euismod tincidunt ut laoreet dolore
                            magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                            quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                            aliquip ex ea commodo consequat. Duis autem vel eum iriure
                            dolor in hendrerit in vulputate velit esse molestie consequat, vel
                            illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
                            iusto odio dignissim qui blandit praesent luptatum zzril delenit
                            augue duis dolore te feugait nulla facilisi.
                            Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed
                        </p>
                    </div>
                    <div className='relative w-full h-[400px] my-20'>
                        <img
                            src={Fans}
                            alt='Horse Racing'
                            className='absolute top-0 left-1/4 w-[80%] h-[100%] object-cover  transition-transform duration-300'
                        />
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 font-alga mx-10 my-24">
                    <div className='relative w-full h-[400px] mx-4 my-20'>
                        <img
                            src={tainer1}
                            alt='Horse Racing'
                            className='absolute -top-10 left-0 w-[80%] h-[150%] object-cover  transition-transform duration-300'
                        />

                    </div>
                    <div className='grid text-center mx-20 items-center sm:text-left sm:text-sm'>
                        <h1 className='text-4xl my-4'>HORSE SOLORIUM</h1>
                        <p className='text-xl text-gray-600'>
                            A horse solarium oers several benets for equine health and
                            well-being: Relaxation and Recovery, Faster Drying, Muscle Elasticity,
                            Physical and Psychological Health, Disease Prevention, Coat Care.
                            Typical usage times range from 15 to 30 minutes, but these should
                            always be monitored and adjusted based on individual horse needs.
                            ARSAN International provide comfort and relaxation for horses by
                            oering horse solariums to enhance the well-being of your equine
                            companions, oering a range of therapeutic benets to support their
                            health and performance.
                        </p>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 font-alga mx-10 my-24">
                    <div className='grid text-center mx-20 items-center sm:text-left sm:text-sm'>
                        <h1 className='text-4xl my-4'>RUBBER FLOOR BRICKS</h1>
                        <p className='text-xl text-gray-600'>
                            Thickness: 15 mm to 45 mm
                            Size: 2.1m,2.2m,2.5m ... ( Size can be customized )
                            Advantages
                            1. Enhances your property value
                            2.Reduces unhealthy dust levels
                            3.Non-slip surface allows your horse to walk securely and
                            comfortably
                            4.Waterproof and water permeable for quick drainage
                        </p>
                    </div>
                    <div className='relative w-full h-[400px] my-20'>
                        <img

                            src={bricks}
                            alt='Horse Racing'
                            className='absolute top-0 left-1/4 w-[80%] h-[100%] object-cover transition-transform duration-300'
                        />

                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 font-alga mx-10 my-24">
                    <div className='relative w-full h-[400px] mx-4 my-20'>
                        <img
                            src={Fences2}
                            alt='Horse Racing'
                            className='absolute top-0 left-0 w-[80%] h-[80%] object-cover  transition-transform duration-300'
                        />
                        <img
                            src={FENCES1}
                            alt='Horse Riding'
                            className='absolute top-44 right-0 w-[75%] h-[80%] object-cover hover:scale-110 transition-transform duration-300'
                        />
                    </div>
                    <div className='grid text-center mx-20 items-center sm:text-left sm:text-sm'>
                        <h1 className='text-4xl my-4'>FENCES</h1>
                        <p className='text-xl text-gray-600'>
                            ARSAN International is a leading provider of top-tier horse racing track construction services,
                            specializing in designing and building state-of-the-art tracks that meet the highest standards of
                            safety, performance, and aesthetics, With a commitment to excellence and a passion for
                            equestrian sports.
                        </p>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 font-alga mx-10 my-24">
                    <div className='relative w-full h-[400px] mx-4 my-20'>
                        <img
                            src={Partitions}
                            alt='Horse Racing'
                            className='absolute top-0 left-0 w-[80%] h-[80%] object-cover  transition-transform duration-300'
                        />
                    </div>
                    <div className='grid text-center mx-20 items-center sm:text-left sm:text-sm'>
                        <h1 className='text-4xl my-4'>PARTITIONS</h1>
                        <p className='text-xl text-gray-600'>
                            Size
                            Height: 2.2m(2. 7ft)
                            Length: 3m/3.5m/4m ,
                            10ft/12ft/14ft...
                            (or custom made to order)
                            Surface Treatment
                            Powder Coating on pre-galvanized steel pipes
                            (Any color can be customized .)
                            Hot dip galvanizing
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
