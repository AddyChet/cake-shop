import React from 'react';
import heroImage from '../assets/hero.jpg';

const Hero = () => {
  return (
    <div 
      className="relative overflow-hidden min-h-[400px] lg:min-h-[650px]" 
      style={{ 
        backgroundColor: '#862633',
        color: '#fff'
      }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-10 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${heroImage})`
        }}
      />

      {/* Content Container */}
      <div className="container mx-auto relative z-30 px-4 lg:left-10">
        <div className="py-16 lg:py-24">
          <div 
            className="relative text-center lg:text-left p-6 lg:p-8 lg:rounded-2xl lg:max-w-[480px] backdrop-blur-sm"
            style={{
              backgroundColor: 'rgba(134, 38, 51, 0.9)',
              color: '#fff'
            }}
          >
            {/* Heading */}
            <div className="mb-4">
              <h1 className="text-[48px] leading-tight lg:text-[60px] font-bold uppercase">
                a berry special sourdough
              </h1>
            </div>

            {/* Description */}
            <div className="text-base lg:text-lg opacity-90 mb-6">
              <div>
                <p>Fresh from the oven, your new breakfast favourite.</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center mt-6">
              <a 
                className="inline-block px-8 py-4 font-semibold text-center rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg w-full lg:w-auto"
                href="/artisan/"
                style={{
                  backgroundColor: '#C1003B',
                  color: '#fff'
                }}
              >
                <span className="text-lg">Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
