// src/components/TestimonialSlider.jsx
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Christine from '../assets/Christine.jpeg'
import John from '../assets/John.jpg'
import Jana from '../assets/Jana.jpg'
import { ImQuotesLeft } from 'react-icons/im';


const testimonials = [
  {
    text: "I rode with these guys for a few years and learned so much! I've already recommended Happy Rider Club to all my friends. Now riding is not just a hobby, but a great part of my life.",
    name: "Christine Manson",
    location: "Pasadena",
    image:Christine
  },
  {
    text: "Great experience with Happy Rider Club! Learned a lot and met amazing people.",
    name: "John Doe",
    location: "Los Angeles",
    image: John
  },
  {
    text: "Happy Rider Club transformed my riding skills and gave me lifelong friends.",
    name: "Jana Smith",
    location: "San Francisco",
    image: Jana
  },
];

const Blog = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,  // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setSelectedTestimonial(next),
  };

  const handleImageClick = (index) => {
    setSelectedTestimonial(index);
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div name='Contact' className='w-full h-auto flex justify-center items-center p-8'>
      <div className=' max-w-[1300px] mx-auto flex-col justify-center p-8'>
    <div className="w-screen max-w-4xl mx-auto font-alga my-6 py-8">
      <Slider ref={sliderRef} {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="text-center w-full max-w-4xl mx-auto py-8 px-4 p-4">
            <ImQuotesLeft className="mx-auto mb-4" style={{width: '30px', height: '30px', color:'#763721'}}/>
            <p className="text-2xl sm:text-3xl md:text-3xl italic mb-4 break-words">"{testimonial.text}"</p>
            <h3 className="text-xl font-alga">{testimonial.name}</h3>
            <p className="text-gray-600 font-alga">{testimonial.location}</p>
          </div>
        ))}
      </Slider>
      <div className="flex justify-center mt-8">
        {testimonials.map((testimonial, index) => (
          <button key={index} onClick={() => handleImageClick(index)}>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className={`rounded-full w-24 h-24 mx-2 cursor-pointer ${selectedTestimonial === index ? 'border-4 scale-110' : 'border-4 border-transparent'}`}
            />
          </button>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default Blog;
