import React, { useState } from 'react';
import logo from "../assets/logo.png"
const Header = () => {
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const productCategories = [
    { name: "Bread & Rolls", count: "77 products", image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/01/5206-150x150.jpg", href: "#" },
    { name: "Larger Savoury", count: "4 products", image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/01/1085-150x150.jpg", href: "#" },
    { name: "Larger Sweet", count: "9 products", image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/01/3225-150x150.jpg", href: "#" },
    { name: "Seasonal", count: "18 products", image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/01/traditional-hot-cross-bun-150x150.jpg", href: "#" },
    { name: "Savoury Snacks", count: "22 products", image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/01/1032-150x150.jpg", href: "#" },
    { name: "Sweet Snacks", count: "32 products", image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/01/30026-150x150.jpg", href: "#" },
    { name: "Value Packs", count: "23 products", image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/01/10244-Pizza-2-Pack-BBQ-Bonanza-and-Margherita-150x150.jpg", href: "#" }
  ];

  const navigationItems = [
    { name: "Products", href: "#", hasDropdown: true },
    { name: "Locations", href: "#", hasDropdown: false },
    { name: "Recipes", href: "#", hasDropdown: false },
    { name: "Dough Getters", href: "#", hasDropdown: false },
    { name: "Franchising", href: "#", hasDropdown: false }
  ];

  return (
    <div className="sticky top-0 z-50 shadow-md" style={{ backgroundColor: '#862633' }}>
      <div className="max-w-7xl mx-auto px-3">
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between gap-3 py-2">
          {/* Logo Section */}
          <div className="lg:w-30 w-60 py-2">
            <a 
              className="block max-w-[156px] mx-auto lg:max-w-[180px] relative" 
              href="#"
            >
              <img 
                className="" 
                src={logo} 
                alt="Live Cake" 
                title="Live Cake"
                
              />
            </a>
          </div>

          {/* Desktop Navigation Section */}
          <div className="flex-grow text-center">
            <ul className="list-none flex gap-3 xl:gap-5 items-center justify-center w-full">
              <li 
                className="relative"
                // onMouseEnter={() => setIsProductsMenuOpen(true)}
                // onMouseLeave={() => setIsProductsMenuOpen(false)}
              >
                <a 
                  className="font-bold text-sm hover:underline text-white" 
                  href="#"
                >
                  <span>Products</span>
                </a>

                {/* Mega Menu */}
                <div 
                  className={`absolute top-full left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-in-out z-[2000] ${
                    isProductsMenuOpen 
                      ? 'visible opacity-100' 
                      : 'invisible opacity-0'
                  }`}
                  style={{ width: '800px', marginTop: '8px' }}
                >
                  <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8">
                    <div className="flex w-full gap-8 text-left">
                      {/* Left Section */}
                      <div className="w-[300px] xl:w-[485px] flex-shrink-0 pr-8 flex flex-col gap-4">
                        <h3 className="text-xl font-bold" style={{ color: '#862633' }}>
                          Discover our range
                        </h3>
                        <div className="text-sm text-gray-600">
                          We've got something for everyone at Live Cake... Take some time to explore our entire range today!
                        </div>
                        <div>
                          <a 
                            className="inline-block text-white px-6 py-2 rounded hover:opacity-90 transition-opacity" 
                            style={{ backgroundColor: '#862633' }}
                            href="#"
                          >
                            <span>View all products</span>
                          </a>
                        </div>
                      </div>

                      {/* Categories Grid */}
                      <div className="grid lg:grid-cols-2 gap-3 w-full">
                        {productCategories.map((category, index) => (
                          <div 
                            key={index}
                            className="py-1 px-3 flex flex-row group gap-3 relative items-center rounded-lg overflow-hidden bg-amber-50 hover:bg-amber-100 transition-colors"
                          >
                            <div className="flex-grow">
                              <div className="font-semibold text-sm text-gray-800">
                                <a className="hover:underline" href={category.href}>
                                  {category.name}
                                </a>
                              </div>
                              <div className="text-xs text-gray-600">
                                {category.count}
                              </div>
                            </div>
                            <div className="w-8 h-8 relative">
                              <div className="w-full h-full group-hover:scale-110 transition-all ease-in-out duration-300 rounded-md overflow-hidden">
                                <img 
                                  className="object-contain object-center w-full h-full rounded-md" 
                                  src={category.image} 
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {navigationItems.slice(1).map((item, index) => (
                <li key={index}>
                  <a className="font-bold text-sm pl-6 hover:underline text-white" href={item.href}>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Actions Section */}
          <div className="w-[170px] flex justify-end items-center gap-2 py-2">
            <button type="button" className="p-2 text-white cursor-pointer rounded">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M17.5 17.5L12.5001 12.5M14.1667 8.33333C14.1667 11.555 11.555 14.1667 8.33333 14.1667C5.11167 14.1667 2.5 11.555 2.5 8.33333C2.5 5.11167 5.11167 2.5 8.33333 2.5C11.555 2.5 14.1667 5.11167 14.1667 8.33333Z" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>

            <a 
              href="#" 
              target="_blank" 
              rel="noopener"
              className="p-2 text-white  cursor-pointer rounded"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M2.5 16.6667C4.44649 14.6021 7.08918 13.3333 10 13.3333C12.9108 13.3333 15.5535 14.6021 17.5 16.6667M13.75 6.25C13.75 8.32107 12.0711 10 10 10C7.92893 10 6.25 8.32107 6.25 6.25C6.25 4.17893 7.92893 2.5 10 2.5C12.0711 2.5 13.75 4.17893 13.75 6.25Z" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              <span className="sr-only">My account</span>
            </a>
          </div>
        </div>

        {/* Mobile Layout - Below 1024px */}
        <div className="lg:hidden flex items-center py-2">
          {/* Mobile Menu Button - Left Side */}
          <div className="flex items-center">
            <button 
              type="button" 
              className="p-2 text-white hover:bg-white hover:bg-opacity-20 rounded"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>

          {/* Logo - Center */}
          <div className="flex-grow flex justify-center">
            <a 
              className="block max-w-[140px] relative" 
              href="#"
            >
              <img 
                className="w-30 h-auto" 
                src={logo}
                alt="Live Cake" 
                title="Live Cake"
              />
            </a>
          </div>

          {/* Mobile Actions - Right Side */}
          <div className="flex items-center gap-2">
            <button type="button" className="p-2 text-white hover:bg-white hover:bg-opacity-20 rounded">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M17.5 17.5L12.5001 12.5M14.1667 8.33333C14.1667 11.555 11.555 14.1667 8.33333 14.1667C5.11167 14.1667 2.5 11.555 2.5 8.33333C2.5 5.11167 5.11167 2.5 8.33333 2.5C11.555 2.5 14.1667 5.11167 14.1667 8.33333Z" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>

            <a 
              href="#" 
              target="_blank" 
              rel="noopener"
              className="p-2 text-white hover:bg-white hover:bg-opacity-20 rounded"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M2.5 16.6667C4.44649 14.6021 7.08918 13.3333 10 13.3333C12.9108 13.3333 15.5535 14.6021 17.5 16.6667M13.75 6.25C13.75 8.32107 12.0711 10 10 10C7.92893 10 6.25 8.32107 6.25 6.25C6.25 4.17893 7.92893 2.5 10 2.5C12.0711 2.5 13.75 4.17893 13.75 6.25Z" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              <span className="sr-only">My account</span>
            </a>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-white border-opacity-20">
            <ul className="space-y-2">
              {navigationItems.map((item, index) => (
                <li key={index}>
                  <a 
                    className="block px-4 py-3 text-white hover:bg-white hover:bg-opacity-20 rounded transition-colors" 
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
