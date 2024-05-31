import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const ScrollToTopButton = ({ isVisible }) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    isVisible && (
      <div className="fixed bottom-4 right-4 z-10">
        <button
          onClick={scrollToTop}
          className="bg-black text-white p-2 rounded-full shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <FaArrowUp />
        </button>
      </div>
    )
  );
};

export default ScrollToTopButton;
