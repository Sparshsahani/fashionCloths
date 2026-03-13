"use client";

import ProductCard from "../common/ProductCard";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

// Sample products data - Replace with real data from API
const sampleProducts = [
  {
    id: 1,
    name: "Classic Denim Jacket",
    price: 2999,
    originalPrice: 3999,
    rating: 4.8,
    reviews: 212,
    image: '/image/blue-cloths.jpg',
    badge: "Best Seller",
    category: "Outerwear",
  },
  {
    id: 2,
    name: "Floral Summer Dress",
    price: 2499,
    originalPrice: 3499,
    rating: 4.6,
    reviews: 158,
    image: '/image/blue-cloths.jpg',
    badge: "New",
    category: "Women’s Clothing",
  },
  {
    id: 3,
    name: "Kids Cartoon T‑Shirt",
    price: 799,
    originalPrice: 1199,
    rating: 4.7,
    reviews: 301,
    image: '/image/blue-cloths.jpg',
    category: "Kids Clothing",
  },
  {
    id: 4,
    name: "Office Slim Fit Shirt",
    price: 1999,
    originalPrice: 2799,
    rating: 4.5,
    reviews: 421,
    image: '/image/blue-cloths.jpg',
    badge: "Hot Deal",
    category: "Formal Wear",
  },
  {
    id: 5,
    name: "Cozy Loungewear Set",
    price: 1599,
    originalPrice: 2199,
    rating: 4.4,
    reviews: 167,
    image: '/image/blue-cloths.jpg',
    category: "Loungewear",
  },
  {
    id: 6,
    name: "Ethnic Kurta Combo",
    price: 3499,
    originalPrice: 4999,
    rating: 4.9,
    reviews: 98,
    image: '/image/blue-cloths.jpg',
    badge: "Combo",
    category: "Ethnic Wear",
  },
  {
    id: 7,
    name: "Casual Hoodie",
    price: 2299,
    originalPrice: 2999,
    rating: 4.7,
    reviews: 145,
    image: '/image/blue-cloths.jpg',
    category: "Casual Wear",
  },
  {
    id: 8,
    name: "Silk Tie Pack",
    price: 499,
    originalPrice: 799,
    rating: 4.6,
    reviews: 203,
    image: '/image/blue-cloths.jpg',
    badge: "Trending",
    category: "Accessories",
  },
];

export default function ProductSection({
  title = "Featured Products",
  products = sampleProducts,
  viewAllLink = "/products",
}) {
  return (
    <section className="py-20 md:py-28 bg-[#D4C5AF]">
      <div className="container">
        {/* Section Header */}
        <div
          className="flex items-center justify-between mb-12"
          data-aos="fade-up"
        >
          <div>
            <p className="text-black text-sm font-bold uppercase tracking-wider mb-3">
              Premium Collection
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-3">
              {title}
            </h2>
            <div className="h-1 w-24 bg-black rounded-full"></div>
          </div>

          <Link
            href={viewAllLink}
            className="hidden md:flex items-center gap-3 px-5 py-2 border-2 border-black text-black rounded-full font-bold hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 group"
          >
            View All
            <IconArrowRight
              size={20}
              className="group-hover:translate-x-2 transition-transform"
            />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="md:hidden mt-8 text-center">
          <Link
            href={viewAllLink}
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-black text-black rounded-lg font-semibold hover:bg-black hover:text-white transition-all duration-200"
          >
            View All Products
            <IconArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
