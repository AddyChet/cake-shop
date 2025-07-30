import React, { useState, useRef, useEffect } from 'react';

const EasyIdeas = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const scrollContainerRef = useRef(null);

  const articles = [
    {
      id: 1,
      title: "Cosy up with these comfort food recipes",
      image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/06/evergreen-image-choc-pudding-600x600.jpg",
      tag: { name: "Bread & Meals", href: "/category/bread-and-meals/" },
      date: "Jun 17, 2025",
      readTime: "5 mins read",
      href: "/articles/cosy-up-with-these-comfort-food-recipes/"
    },
    {
      id: 2,
      title: "Delicious and easy winter soup recipes for chilly nights",
      image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/05/evergreen-image-french-onion-soup-600x600.jpg",
      tag: { name: "Bread & Meals", href: "/category/bread-and-meals/" },
      date: "Jun 2, 2025",
      readTime: "8 mins read",
      href: "/articles/delicious-and-easy-winter-soup-recipes-for-chilly-nights/"
    },
    {
      id: 3,
      title: "Melt-in-your-mouth chocolate recipes that will sweeten your day",
      image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/01/Banana-Choc-Hazelnut-Pizza-recipe-600x600.jpg",
      tag: { name: "Entertaining & Sharing", href: "/category/entertaining-and-sharing/" },
      date: "May 19, 2025",
      readTime: "8 mins read",
      href: "/articles/melt-in-your-mouth-chocolate-recipes-that-will-sweeten-your-day/"
    },
    {
      id: 4,
      title: "Kickstart your Day with these Breakfast Ideas",
      image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/04/DSCF1331-1-1920x1280-1-600x600.jpg",
      tag: { name: "Bread & Meals", href: "/category/bread-and-meals/" },
      date: "Apr 22, 2025",
      readTime: "10 min read",
      href: "/articles/kickstart-your-day-with-these-breakfast-ideas/"
    },
    {
      id: 5,
      title: "Our Favourite Snack Ideas You Knead to Know",
      image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/02/DSCF5057-rotated-e1738550094385-600x600.jpg",
      tag: { name: "Bread & Meals", href: "/category/bread-and-meals/" },
      date: "Feb 3, 2025",
      readTime: "5 mins read",
      href: "/articles/our-favourite-snack-ideas-you-knead-to-know/"
    },
    {
      id: 6,
      title: "Delicious School Lunch Ideas for Picky Eaters",
      image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/01/Lunchbox-pizza-toast-recipe-image-600x600.jpg",
      tag: { name: "Little Bakes", href: "/category/little-bakes/" },
      date: "Jan 14, 2025",
      href: "/articles/delicious-school-lunch-ideas-for-picky-eaters/"
    },
    {
      id: 7,
      title: "Delightful Healthy Food Swaps for Every Meal",
      image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/01/Zucchini-Summer-Pizza-600x600.jpg",
      tag: { name: "Healthy loaf", href: "/category/health-loaf/" },
      date: "Aug 19, 2024",
      href: "/articles/delightful-healthy-food-swaps-for-every-meal/"
    },
    {
      id: 8,
      title: "Easy and Delicious Kids Party Food Ideas",
      image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/02/hot-dogs-in-rolls-in-boxes-with-sauces-and-toppings-to-build-your-own-hot-dog-600x600.jpg",
      tag: { name: "Little Bakes", href: "/category/little-bakes/" },
      date: "Sep 2, 2024",
      href: "/articles/easy-and-delicious-kids-party-food-ideas/"
    },
    {
      id: 9,
      title: "5 Easy Dinner Recipes for Weeknights",
      image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/01/Cheesy_Beans_Recipe_Hand_1_1-600x600.jpg",
      tag: { name: "Bread & Meals", href: "/category/bread-and-meals/" },
      date: "Jul 14, 2024",
      href: "/articles/5-easy-dinner-recipes-for-weeknights/"
    },
    {
      id: 10,
      title: "10 Ways to Use Leftover Bread",
      image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/01/BAK0016-JUNE-MacCheese2_720x620-600x600.jpg",
      tag: { name: "Dough Hacks", href: "/category/dough-hacks/" },
      date: "May 27, 2019",
      readTime: "7 min read",
      href: "/articles/10-ways-to-use-leftover-bread/"
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

  const totalSlides = Math.ceil(articles.length / slidesPerView);

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
    <div className="overflow-hidden pt-0 lg:pt-0 pb-5 lg:pb-8 bg-white">
      <div className="container mx-auto px-4 relative z-30">
        {/* Header Section */}
        <div className="mb-5 lg:mb-8 grid lg:grid-cols-2 text-center lg:text-left">
          <div>
            <h2 
              className="text-3xl lg:text-4xl font-bold"
              style={{ color: '#862633' }}
              id="easy-ideas-title"
            >
              Easy ideas for you
            </h2>
          </div>
          <div className="hidden lg:block text-right">
            <a 
              className="inline-block px-6 py-3 border-2 rounded font-semibold text-center transition-all duration-200 hover:opacity-90"
              href="/blog/"
              style={{
                borderColor: '#C1003B',
                color: '#C1003B',
                backgroundColor: 'transparent'
              }}
            >
              <span>View all articles</span>
            </a>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative group">
          {/* Article Slider */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide gap-6 lg:gap-10 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {articles.map((article) => (
              <div key={article.id} className="flex-shrink-0 w-[280px] lg:w-[300px]">
                <div className="relative block group/card min-h-full text-center">
                  <div className="rounded-md lg:rounded-lg bg-amber-50 relative overflow-hidden">
                    {/* Portrait Thumbnail */}
                    <div className="relative aspect-[3/4]"> {/* Portrait aspect ratio: taller than wide */}
                      <div className="w-full h-full group-hover/card:scale-105 transition-all ease-in-out duration-300 rounded-md overflow-hidden">
                        <img 
                          className="object-cover object-center w-full h-full rounded-md lg:rounded-lg" 
                          src={article.image} 
                          alt={article.title}
                        />
                      </div>
                    </div>

                    {/* Tag */}
                    <div className="flex flex-wrap items-center gap-1 absolute top-2 left-2 z-10 right-2">
                      <div 
                        className="px-2 py-1 rounded text-xs uppercase font-bold text-gray-800 bg-white"
                      >
                        <a href={article.tag.href}>{article.tag.name}</a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Article Info */}
                  <div className="p-3 flex flex-col">
                    <div className="text-sm text-gray-600 mb-2">
                      {article.date} {article.readTime && `• ${article.readTime}`}
                    </div>
                    <h3 className="text-lg font-semibold leading-tight" style={{ color: '#862633' }}>
                      <a href={article.href} className="hover:underline">
                        {article.title}
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
            className="inline-block px-6 py-3 border-2 rounded font-semibold text-center transition-all duration-200 hover:opacity-90"
            href="/blog/"
            style={{
              borderColor: '#C1003B',
              color: '#C1003B',
              backgroundColor: 'transparent'
            }}
          >
            <span>View all articles</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EasyIdeas;
