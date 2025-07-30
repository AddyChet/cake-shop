import React from 'react';
import logo from "../assets/logo.png"
import swiggy from '../assets/Swiggy.png'; // Assuming you have this imported

const DeliveryCTA = () => {
  return (
    <div className="container mx-auto px-4 py-5 my-10">
      <div 
        className="p-4 lg:p-5 gap-4 lg:gap-5 flex flex-col lg:flex-row items-center rounded-lg overflow-hidden bg-[#F2E7E1]"
      >
        {/* Left Section: Logo and Heading */}
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-5 flex-grow justify-center lg:justify-start items-center">
          <div className="flex-shrink-0 mb-3 lg:mb-0">
            <img 
              src={logo} 
              alt="Live Cake Logo" 
              className="w-24 h-auto lg:w-32" // Responsive logo sizing
            />
          </div>
          <div>
            <h3 
              className="font-bold text-2xl lg:text-4xl leading-tight text-center lg:text-left"
              style={{ color: '#862633' }}
            >
              Need a fresh delivery?
            </h3>
            <div className="text-sm hidden lg:block text-gray-700 mt-2">
              <p>We’ve got you covered from door to door.</p>
            </div>
          </div>
        </div>

        {/* Right Section: Description and Buttons */}
        <div className="w-full lg:w-[502px]">
          <div className="text-sm mb-3 lg:hidden text-gray-700 text-center">
            <p>We’ve got you covered from door to door.</p>
          </div>
          <div className="text-sm hidden lg:block text-gray-700">
            <p>Whatever suits your schedule! Get it delivered today.</p>
          </div>

          <div className="flex flex-row gap-2 mt-2 justify-center lg:justify-start">
            <a 
              href="https://www.zomato.com/" 
              className="inline-flex items-center justify-center  px-4 py-3 transition-colors duration-200 h-[56px] lg:h-auto"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                decoding="async" 
                src="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png" // Replace with actual Zomato logo URL or import
                className="h-13 lg:h-15" // Bigger on mobile (below lg)
                alt="Zomato"
              />
            </a>

            <a 
              href="https://www.swiggy.com/" 
              className="inline-flex items-center justify-center rounded-full px-4 py-3 transition-colors duration-200 h-[56px] lg:h-auto"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                decoding="async" 
                src={swiggy} 
                className="h-14 lg:h-17" // Bigger on mobile (below lg)
                alt="Swiggy"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryCTA;
