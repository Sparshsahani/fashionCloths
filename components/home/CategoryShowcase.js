'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { IconArrowRight, IconSparkles, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

const categories = [
  {
    id: 1,
    name: "Men's Clothing",
    image: '/image/blue-cloths.jpg',
    description: 'Stylish apparel for him',
    productCount: 120,
    link: '/product/1',
  },
  {
    id: 2,
    name: "Women's Clothing",
    image: '/image/blue-cloths.jpg',
    description: 'Elegant outfits for her',
    productCount: 98,
    link: '/product/2',
  },
  {
    id: 3,
    name: 'Kids Clothing',
    image: '/image/blue-cloths.jpg',
    description: 'Fun and comfy wear for children',
    productCount: 75,
    link: '/product/3',
  },
  {
    id: 4,
    name: 'Accessories',
    image: '/image/blue-cloths.jpg',
    description: 'Belts, hats, scarves and more',
    productCount: 64,
    link: '/product/4',
  },
  {
    id: 5,
    name: 'Formal Wear',
    image: '/image/blue-cloths.jpg',
    description: 'Suits and dresses for special occasions',
    productCount: 58,
    link: '/product/5',
  },
  {
    id: 6,
    name: 'Casual Wear',
    image: '/image/blue-cloths.jpg',
    description: 'Everyday comfortable outfits',
    productCount: 176,
    link: '/product/6',
  },
  {
    id: 7,
    name: 'Ethnic Wear',
    image: '/image/blue-cloths.jpg',
    description: 'Traditional and cultural styles',
    productCount: 82,
    link: '/product/7',
  },
  {
    id: 8,
    name: 'Outerwear',
    image: '/image/blue-cloths.jpg',
    description: 'Jackets, coats and warm layers',
    productCount: 47,
    link: '/product/8',
  },
  {
    id: 9,
    name: 'Loungewear',
    image: '/image/blue-cloths.jpg',
    description: 'Relaxed clothing for home',
    productCount: 53,
    link: '/product/9',
  },
];

export default function CategoryShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerPage >= categories.length ? 0 : prev + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(categories.length - itemsPerPage, 0) : Math.max(prev - itemsPerPage, 0)
    );
  };

  // Auto-play: Move to next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => 
        prev + itemsPerPage >= categories.length ? 0 : prev + itemsPerPage
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      {/* Mobile & Tablet: Simple Grid */}
      <section className="lg:hidden relative py-20 md:py-24 overflow-hidden bg-[#1a1a1a]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="container relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 px-4">
            <div className="inline-block mb-4">
              <p className="text-white text-xs font-semibold uppercase tracking-[0.2em] mb-2">
                Discover Excellence
              </p>
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 tracking-tight">
              Shop by Category
            </h2>

            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
              Explore our curated collections of premium cloths
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 max-w-4xl mx-auto">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                href={category.link}
                className="group relative bg-[#0f0f0f] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 border-2 border-[#2a2a2a] hover:border-white hover:-translate-y-2"
              >
                {/* Image - Increased height to 410px */}
                <div className="h-[410px] overflow-hidden bg-black">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                {/* Elegant Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 transition-opacity duration-500"></div>

                {/* Content - Always visible */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/95 via-black/90 to-transparent backdrop-blur-sm">
                  <h3 className="font-serif font-bold text-white text-xl mb-2 group-hover:text-white transition-colors duration-300">
                    {category.name}
                  </h3>

                  <p className="text-sm text-gray-400 mb-3 font-light">
                    {category.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white uppercase tracking-wider">
                      {category.productCount} Products
                    </span>
                    <IconArrowRight
                      size={20}
                      className="text-white transform group-hover:translate-x-2 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-white/30 group-hover:border-white transition-colors duration-300"></div>
              </Link>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 px-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white"
            >
              <IconSparkles size={20} />
              View All Categories
              <IconArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Large Desktop: Carousel */}
      <section className="hidden lg:block relative py-20 md:py-24 overflow-hidden bg-[#1a1a1a]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="container w-full relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 px-4">
            <div className="inline-block mb-4">
              <p className="text-white text-xs font-semibold uppercase tracking-[0.2em] mb-2">
                Discover Excellence
              </p>
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
            </div>

            <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
              Shop by Category
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed font-light">
              Explore our curated collections of premium cloths
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative px-16">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-200 text-black p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Previous"
            >
              <IconChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-200 text-black p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Next"
            >
              <IconChevronRight size={24} />
            </button>

            {/* Carousel Track */}
            <div className="overflow-hidden">
              <div 
                className="flex gap-8 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${(currentIndex * (100 / itemsPerPage))}%)` }}
              >
                {categories.map((category, index) => (
                  <Link
                    key={category.id}
                    href={category.link}
                    className="group relative bg-[#0f0f0f] rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 overflow-hidden border-2 border-[#2a2a2a] hover:border-white hover:-translate-y-3 flex-shrink-0"
                    style={{ width: `calc((100% - ${(itemsPerPage - 1) * 2}rem) / ${itemsPerPage})` }}
                  >
                    {/* Category Image */}
                    <div className="h-[410px] overflow-hidden bg-black">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>

                    {/* Elegant Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 transition-opacity duration-500"></div>

                    {/* Content - Always visible */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/95 via-black/90 to-transparent backdrop-blur-sm">
                      {/* Category Name */}
                      <h3 className="font-serif font-bold text-white text-2xl mb-2 group-hover:text-white transition-colors duration-300">
                        {category.name}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-400 mb-4 font-light leading-relaxed">
                        {category.description}
                      </p>

                      {/* Product Count & Arrow */}
                      <div className="flex items-center justify-between pt-3 border-t border-[#2a2a2a]">
                        <span className="text-xs font-semibold text-white uppercase tracking-wider">
                          {category.productCount} Products
                        </span>
                        <div className="flex items-center gap-2 text-white font-medium text-sm">
                          <span>Explore</span>
                          <IconArrowRight
                            size={18}
                            className="transform group-hover:translate-x-2 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Decorative corner accent */}
                    <div className="absolute top-5 right-5 w-12 h-12 border-t-2 border-r-2 border-white/30 group-hover:border-white transition-colors duration-300"></div>

                    {/* Bottom decorative line */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-3/4 transition-all duration-500"></div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: Math.ceil(categories.length / itemsPerPage) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * itemsPerPage)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / itemsPerPage) === index
                      ? 'w-8 bg-white'
                      : 'w-2 bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 px-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-white to-white text-black rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-black"
            >
              <IconSparkles size={22} />
              View All Categories
              <IconArrowRight size={22} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
