"use client";

import { useState, useMemo } from "react";
import ProductFilter from "@/components/common/ProductFilter";
import ProductCard from "@/components/common/ProductCard";

// Sample product data - Replace with your actual data source
const allProducts = [
  {
    id: 1,
    name: "Classic Denim Jacket",
    price: 2999,
    originalPrice: 3999,
    rating: 4.8,
    reviews: 234,
    image: "/image/blue-cloths.jpg",
    badge: "New",
    category: "Outerwear",
  },
  {
    id: 2,
    name: "Floral Wrap Maxi Dress",
    price: 2499,
    originalPrice: 3499,
    rating: 4.6,
    reviews: 189,
    image: "/image/blue-cloths.jpg",
    badge: "Bestseller",
    category: "Women's Clothing",
  },
  {
    id: 3,
    name: "Kids Printed Graphic Tee",
    price: 799,
    originalPrice: 1199,
    rating: 4.4,
    reviews: 156,
    image: "/image/blue-cloths.jpg",
    badge: "Sale",
    category: "Kids Clothing",
  },
  {
    id: 4,
    name: "Silk Evening Gown",
    price: 3299,
    originalPrice: 4999,
    rating: 4.9,
    reviews: 312,
    image: "/image/blue-cloths.jpg",
    badge: "Premium",
    category: "Women's Clothing",
  },
  {
    id: 5,
    name: "Men's Slim Fit Shirt",
    price: 1999,
    originalPrice: 2799,
    rating: 4.5,
    reviews: 98,
    image: "/image/blue-cloths.jpg",
    badge: null,
    category: "Men's Clothing",
  },
  {
    id: 6,
    name: "Cozy Fleece Loungewear Set",
    price: 1599,
    originalPrice: 2199,
    rating: 4.3,
    reviews: 145,
    image: "/image/blue-cloths.jpg",
    badge: null,
    category: "Loungewear",
  },
  {
    id: 7,
    name: "Embroidered Kurta Set",
    price: 3499,
    originalPrice: 4999,
    rating: 4.9,
    reviews: 87,
    image: "/image/blue-cloths.jpg",
    badge: "Limited",
    category: "Ethnic Wear",
  },
  {
    id: 8,
    name: "Oversized Streetwear Hoodie",
    price: 2299,
    originalPrice: 2999,
    rating: 4.7,
    reviews: 203,
    image: "/image/blue-cloths.jpg",
    badge: null,
    category: "Casual Wear",
  },
  {
    id: 9,
    name: "Men's Tapered Chino Trousers",
    price: 1799,
    originalPrice: 2499,
    rating: 4.6,
    reviews: 167,
    image: "/image/blue-cloths.jpg",
    badge: "New",
    category: "Men's Clothing",
  },
  {
    id: 10,
    name: "Distressed Denim Shorts",
    price: 999,
    originalPrice: 1499,
    rating: 4.8,
    reviews: 221,
   image: '/image/blue-cloths.jpg',
    badge: "Bestseller",
    category: "Casual Wear",
  },
  {
    id: 11,
    name: "Women's Ribbed Crop Top",
    price: 699,
    originalPrice: 999,
    rating: 4.2,
    reviews: 134,
    image: '/image/blue-cloths.jpg',
    badge: "Sale",
    category: "Women's Clothing",
  },
  {
    id: 12,
    name: "Tailored Two-Piece Blazer Set",
    price: 5999,
    originalPrice: 7999,
    rating: 4.7,
    reviews: 189,
    image: '/image/blue-cloths.jpg',
    badge: null,
    category: "Formal Wear",
  },
];

export default function ProductsPage() {
  const [filters, setFilters] = useState({
    category: "all",
    priceRange: "all",
    rating: "all",
    sortBy: "popular",
  });

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let products = [...allProducts];

    // Category Filter
    if (filters.category !== "all") {
      products = products.filter(
        (p) =>
          p.category.toLowerCase().replace(/\s+/g, "-") === filters.category,
      );
    }

    // Price Range Filter
    if (filters.priceRange !== "all") {
      const [min, max] = filters.priceRange
        .split("-")
        .map((v) => (v === "" ? Infinity : parseInt(v.replace("+", ""))));
      products = products.filter((p) => {
        if (max === undefined) return p.price >= min;
        return p.price >= min && p.price <= max;
      });
    }

    // Rating Filter
    if (filters.rating !== "all") {
      const minRating = parseFloat(filters.rating);
      products = products.filter((p) => p.rating >= minRating);
    }

    // Sort
    switch (filters.sortBy) {
      case "price-low":
        products.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        products.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        products.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        // Assuming newer products have higher IDs
        products.sort((a, b) => b.id - a.id);
        break;
      case "popular":
      default:
        products.sort((a, b) => b.reviews - a.reviews);
        break;
    }

    return products;
  }, [filters]);

  return (
    <main className="bg-white/80 min-h-screen">
      {/* Page Header */}
      <div className="relative py-20 md:py-28 overflow-hidden min-h-[220px] md:min-h-[320px]">
        {/* Background Image */}
        <div className="absolute inset-0 ">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/image/blue-cloths.jpg')" }}
          />
        </div>
        {/* Golden Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            All Products
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            Elevate your everyday style with our exclusively curated clothing
            collection
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <ProductFilter onFilterChange={setFilters} />

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Results Count */}
        <div className="mb-6">
          <p className="text-black text-sm">
            Showing{" "}
            <span className="text-white font-semibold">
              {filteredProducts.length}
            </span>{" "}
            products
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg mb-4">
              No products found matching your filters
            </p>
            <button
              onClick={() =>
                setFilters({
                  category: "all",
                  priceRange: "all",
                  rating: "all",
                  sortBy: "popular",
                })
              }
              className="px-6 py-3 bg-white text-black text-black font-semibold rounded-lg hover:bg-white text-black/90 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* Load More Button (Optional) */}
      {filteredProducts.length > 0 && filteredProducts.length >= 12 && (
        <div className="max-w-7xl mx-auto px-4 pb-12 text-center">
          <button className="px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:border-white hover:bg-white text-black hover:text-black transition-all">
            Load More Products
          </button>
        </div>
      )}
    </main>
  );
}
