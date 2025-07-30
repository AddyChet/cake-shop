import React from 'react';

const ExploreRange = () => {
  const categories = [
    {
      id: 1,
      title: "Bread & rolls",
      image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/04/LoavesRolls.jpg",
      href: "/product-category/bread-rolls/"
    },
    {
      id: 2,
      title: "Snacks",
      image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/04/Snacking.jpg",
      href: "/snacking/"
    },
    {
      id: 3,
      title: "Lunchbox",
      image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/04/Lunchbox.jpg",
      href: "/lunchbox/"
    },
    {
      id: 4,
      title: "Artisan",
      image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/04/Artisan.jpg",
      href: "/artisan/"
    },
    {
      id: 5,
      title: "Healthy solutions",
      image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/04/Health.jpg",
      href: "/healthy-solutions/"
    },
    {
      id: 6,
      title: "Value packs",
      image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/04/Combos.jpg",
      href: "/product-category/value-packs/"
    }
  ];

  return (
    <div className="container mx-auto relative z-30 px-4 py-8 lg:py-12 mb-15">
      {/* Section Header */}
      <div className="text-center mb-5 lg:mb-8">
        <h2 
          className="text-3xl lg:text-4xl font-bold"
          style={{ color: '#862633' }}
        >
          Explore our range
        </h2>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-7 lg:gap-x-10 lg:gap-y-10">
        {categories.map((category) => (
          <div 
            key={category.id}
            className="flex flex-col md:rounded-4xl rounded-xl bg-amber-50 group/card overflow-hidden text-center relative z-30 hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image Section */}
            <div className="relative overflow-hidden aspect-[340/240]">
              <div className="w-full h-full group-hover/card:scale-105 transition-all ease-in-out duration-300">
                <img 
                  className="object-cover object-center w-full h-full" 
                  src={category.image}
                  alt={category.title}
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="p-2 lg:py-3 lg:px-4 flex flex-col flex-grow">
              <div className="flex flex-col flex-grow">
                <h3 className="text-[24px] leading-[1.25] lg:text-[30px] lg:leading-[1.2] uppercase font-bold">
                  <a 
                    href={category.href}
                    className="hover:underline transition-colors duration-200"
                    style={{ color: '#862633' }}
                  >
                    {category.title}
                  </a>
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreRange;
