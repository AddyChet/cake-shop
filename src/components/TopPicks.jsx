import React, { useState, useRef, useEffect } from 'react';

const TopPicks = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const scrollContainerRef = useRef(null);

  const products = [
    {
      id: 1,
      name: "Mixed Berry Sourdough Loaf",
      image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/06/Mixed-Berry-Sourdough_1000px-600x600.jpg",
      featured: true,
      href: "/products/mixed-berry-sourdough-loaf/"
    },
    {
      id: 2,
      name: "Mixed Berry Portuguese Tart",
      image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/07/DIG3427-MBPT-SINGLE-600x600.jpg",
      featured: true,
      href: "/products/mixed-berry-portuguese-tart/"
    },
    {
      id: 3,
      name: "Mixed Berry Portuguese Tart 4 Pack",
      image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/07/DIG3427-MBPT-4-PACK-600x600.jpg",
      featured: true,
      href: "/products/mixed-berry-portuguese-tart-4-pack/"
    },
    {
      id: 4,
      name: "Sourdough Vienna",
      image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/01/Authentic-Sourdough-Vienna-600x600.jpg",
      featured: true,
      href: "/products/sourdough-vienna/"
    },
    {
      id: 5,
      name: "Hi-Fibre Lo-GI White Block Loaf",
      image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/01/1901-600x600.jpg",
      featured: false,
      href: "/products/hi-fibre-lo-gi-white-block-loaf/"
    },
    {
      id: 6,
      name: "Mini Cheese & Bacon Rolls 6 Pack",
      image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/01/1139-600x600.jpg",
      featured: false,
      href: "/products/mini-cheese-bacon-savoury-roll-6-pack/"
    },
    {
      id: 7,
      name: "Mini Cheesymite Scrolls 4 Pack",
      image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/01/1138-600x600.jpg",
      featured: false,
      href: "/products/mini-cheesymite-scroll-4-pack/"
    },
    {
      id: 8,
      name: "White Block Loaf",
      image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/01/1001-600x600.jpg",
      featured: false,
      href: "/products/white-block-loaf/"
    },
    {
      id: 9,
      name: "Hi-Fibre Lo-GI Wholemeal Block Loaf",
      image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/01/Wholemeal-Hi-Lo-Block-Loaf-600x600.png",
      featured: false,
      href: "/products/hi-fibre-lo-gi-wholemeal-block-loaf/"
    },
    {
      id: 10,
      name: "Cheese & Bacon Roll",
      image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/01/1032-600x600.jpg",
      featured: false,
      href: "/products/cheese-bacon-roll/"
    },
    {
      id: 11,
      name: "BBQ Bonanza Pizza",
      image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/01/Pizza-BBQ-Bonanza-600x600.jpg",
      featured: false,
      href: "/products/bbq-bonanza-pizza/"
    },
    {
      id: 12,
      name: "Cheesymite Scroll",
      image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/01/1076-600x600.jpg",
      featured: false,
      href: "/products/cheesymite-scroll/"
    },
    {
      id: 13,
      name: "Croissant",
      image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/01/New-Croissant-600x600.jpg",
      featured: false,
      href: "/products/croissant/"
    }
  ];

  // Calculate slides per view based on screen size
  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      if (width >= 1280) setSlidesPerView(4);
      else if (width >= 1024) setSlidesPerView(3);
      else if (width >= 768) setSlidesPerView(2);
      else setSlidesPerView(1);
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  const totalSlides = Math.ceil(products.length / slidesPerView);

  const scrollToSlide = (slideIndex) => {
    if (scrollContainerRef.current) {
      const slideWidth = scrollContainerRef.current.scrollWidth / totalSlides;
      scrollContainerRef.current.scrollTo({
        left: slideWidth * slideIndex,
        behavior: 'smooth'
      });
      setCurrentSlide(slideIndex);
    }
  };

  const nextSlide = () => {
    const next = currentSlide + 1 >= totalSlides ? 0 : currentSlide + 1;
    scrollToSlide(next);
  };

  const prevSlide = () => {
    const prev = currentSlide - 1 < 0 ? totalSlides - 1 : currentSlide - 1;
    scrollToSlide(prev);
  };

  return (
    <div className="relative overflow-x-clip pt-5 lg:pt-8 pb-5 lg:pb-8 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex justify-between lg:items-end flex-col lg:flex-row gap-2 lg:gap-4 mb-4 lg:mb-7">
          <div className="flex-grow">
            <div className="lg:max-w-[640px] text-center lg:text-left">
              <h2 className="text-3xl lg:text-5xl font-bold" style={{ color: '#862633' }}>
                Top picks
                <span className="inline-block align-super ml-2">
                  <svg width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.6973 36.7368L24.5857 36.9627" stroke="currentColor" strokeWidth="2.7964" strokeLinecap="round"></path>
                    <path d="M19.9238 19.3218L25.0459 14.7864" stroke="currentColor" strokeWidth="2.7964" strokeLinecap="round"></path>
                    <path d="M6.82617 8.98047L9.02644 2.07958" stroke="currentColor" strokeWidth="2.7964" strokeLinecap="round"></path>
                  </svg>
                </span>
              </h2>
            </div>
          </div>
          
          {/* Desktop View All Button */}
          <div className="text-center lg:text-right">
            <div className="hidden lg:block">
              <a 
                className="inline-block px-6 py-3 border-2 rounded font-semibold text-center transition-all duration-200 hover:opacity-90"
                href="/products/"
                style={{
                  borderColor: '#C1003B',
                  color: '#C1003B',
                  backgroundColor: 'transparent'
                }}
              >
                <span>View all products</span>
              </a>
            </div>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative group">
          {/* Product Slider */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide gap-6 lg:gap-10 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-[280px] lg:w-[300px]">
                <div className="relative block group/card min-h-full text-center">
                  <div className="rounded-md lg:rounded-lg bg-amber-50 relative">
                    {/* Product Image */}
                    <div className="relative">
                      <div className="absolute inset-2 lg:inset-5">
                        <div className="w-full h-full group-hover/card:scale-105 transition-all ease-in-out duration-300 rounded-md overflow-hidden mix-blend-multiply">
                          <img 
                            className="object-cover object-center w-full h-full rounded-md lg:rounded-lg overflow-hidden" 
                            src={product.image} 
                            alt={product.name}
                          />
                        </div>
                      </div>
                      
                      {/* Height placeholder for consistent card sizing */}
                      <div className="aspect-square"></div>
                    </div>

                    {/* Featured Tag */}
                    {product.featured && (
                      <div className="flex flex-wrap items-center gap-1 absolute top-2 left-2 z-10 right-2">
                        <div 
                          className="px-2 py-1 rounded text-xs uppercase font-bold text-white"
                          style={{ backgroundColor: '#862633' }}
                        >
                          <span>Featured</span>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-2 flex flex-col">
                    <h3 className="text-lg font-semibold leading-tight" style={{ color: '#862633' }}>
                      <a href={product.href} className="hover:underline">
                        {product.name}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Desktop */}
          <div className="flex items-center self-end gap-3">
            <button 
              onClick={prevSlide}
              className="hidden lg:inline-flex cursor-pointer group-hover:opacity-100 focus:opacity-100 transition-all opacity-0 ease-in-out absolute top-1/2 -translate-y-20 left-5 duration-200 p-1 w-[66px] flex-col items-center justify-center leading-[66px] h-[66px] lg:w-[72px] lg:h-[72px] z-30 rounded-full bg-white shadow-lg hover:shadow-xl"
              disabled={currentSlide === 0}
            >
              <svg className="relative z-30 transform rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#C1003B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
            
            <button 
              onClick={nextSlide}
              className="hidden lg:inline-flex cursor-pointer group-hover:opacity-100 focus:opacity-100 transition-all opacity-0 ease-in-out right-5 absolute top-1/2 -translate-y-20 duration-200 p-1 w-[66px] flex-col items-center justify-center leading-[66px] lg:w-[72px] h-[60px] lg:h-[72px] z-30 rounded-full bg-white shadow-lg hover:shadow-xl"
            >
              <svg className="relative z-30" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#C1003B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
          </div>

          {/* Pagination Dots */}
          <nav className="flex justify-center items-center gap-3 mt-4 lg:mt-6">
            <div className="flex justify-center items-center gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentSlide === index 
                      ? 'opacity-100' 
                      : 'opacity-40 hover:opacity-70'
                  }`}
                  style={{ backgroundColor: '#C1003B' }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </nav>
        </div>
        
        {/* Mobile View All Button */}
        <div className="lg:hidden mt-4 text-center">
          <a 
            className="inline-flex items-center gap-2 font-semibold hover:underline"
            href="/products/"
            style={{ color: '#C1003B' }}
          >
            <span>View all products</span>
            <svg className="w-5 h-5" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.66699 9.99996H16.3337M16.3337 9.99996L10.5003 4.16663M16.3337 9.99996L10.5003 15.8333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopPicks;
