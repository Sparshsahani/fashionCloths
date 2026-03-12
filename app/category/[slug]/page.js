'use client';

import { useState, useMemo } from 'react';
import ProductFilter from '@/components/common/ProductFilter';
import ProductCard from '@/components/common/ProductCard';
import Link from 'next/link';
import { IconChevronRight } from '@tabler/icons-react';

// Category data
const categoryData = {
  men: {
    name: 'Men Clothing',
    description: 'Stylish and contemporary apparel for men',
    image: 'https://source.unsplash.com/1200x400/?mens-clothing,fashion',
  },
  women: {
    name: 'Women Clothing',
    description: 'Elegant dresses, tops and more for women',
    image: 'https://source.unsplash.com/1200x400/?womens-clothing,fashion',
  },
  kids: {
    name: 'Kids Clothing',
    description: 'Fun, comfortable outfits for children',
    image: 'https://source.unsplash.com/1200x400/?kids-clothing,fashion',
  },
  accessories: {
    name: 'Accessories',
    description: 'Belts, hats, scarves and other style accents',
    image: 'https://source.unsplash.com/1200x400/?fashion-accessories,style',
  },
  formal: {
    name: 'Formal Wear',
    description: 'Sharp suits and formal attire for special occasions',
    image: 'https://source.unsplash.com/1200x400/?formal-wear,clothes',
  },
  casual: {
    name: 'Casual Wear',
    description: 'Relaxed and comfortable everyday clothing',
    image: 'https://source.unsplash.com/1200x400/?casual-wear,clothes',
  },
  ethnic: {
    name: 'Ethnic Wear',
    description: 'Traditional and cultural garments with flair',
    image: 'https://source.unsplash.com/1200x400/?ethnic-wear,clothes',
  },
};

// Sample products by category - Replace with actual API call
const getProductsByCategory = (categorySlug) => {
  const allProducts = {
    men: [
      {
        id: 201,
        name: 'Classic Denim Jacket',
        price: 2999,
        originalPrice: 3999,
        rating: 4.8,
        reviews: 156,
        image: 'https://source.unsplash.com/800x800/?denim,jacket',
        badge: 'Best Seller',
        category: 'Men Clothing',
      },
      {
        id: 202,
        name: 'Slim Fit Chinos',
        price: 1999,
        originalPrice: 2499,
        rating: 4.6,
        reviews: 203,
        image: 'https://source.unsplash.com/800x800/?chinos,pants',
        badge: 'Trending',
        category: 'Men Clothing',
      },
      {
        id: 203,
        name: 'Casual Polo Shirt',
        price: 899,
        originalPrice: 1299,
        rating: 4.7,
        reviews: 189,
        image: 'https://source.unsplash.com/800x800/?polo,shirt',
        badge: 'Premium',
        category: 'Men Clothing',
      },
      {
        id: 204,
        name: 'Leather Belt Accessory',
        price: 499,
        originalPrice: 699,
        rating: 4.9,
        reviews: 221,
        image: 'https://source.unsplash.com/800x800/?leather,belt',
        badge: 'Limited',
        category: 'Accessories',
      },
    ],
    women: [
      {
        id: 301,
        name: 'Floral Maxi Dress',
        price: 2499,
        originalPrice: 3499,
        rating: 4.6,
        reviews: 89,
        image: 'https://source.unsplash.com/800x800/?floral,dress',
        badge: 'New',
        category: 'Women Clothing',
      },
      {
        id: 302,
        name: 'Silk Evening Gown',
        price: 3299,
        originalPrice: 4999,
        rating: 4.9,
        reviews: 312,
        image: 'https://source.unsplash.com/800x800/?silk,gown',
        badge: 'Premium',
        category: 'Women Clothing',
      },
      {
        id: 303,
        name: 'Denim Jacket',
        price: 1799,
        originalPrice: 2499,
        rating: 4.6,
        reviews: 167,
        image: 'https://source.unsplash.com/800x800/?denim,jacket',
        badge: 'Bestseller',
        category: 'Women Clothing',
      },
      {
        id: 304,
        name: 'Statement Necklace',
        price: 599,
        originalPrice: 999,
        rating: 4.8,
        reviews: 234,
        image: 'https://source.unsplash.com/800x800/?necklace,jewelry',
        badge: 'Hot',
        category: 'Accessories',
      },
    ],
    kids: [
      {
        id: 401,
        name: 'Kids Cartoon Tee',
        price: 499,
        originalPrice: 699,
        rating: 4.7,
        reviews: 234,
        image: 'https://source.unsplash.com/800x800/?kids,tshirt',
        badge: 'Bestseller',
        category: 'Kids Clothing',
      },
      {
        id: 402,
        name: 'Colorful Shorts',
        price: 299,
        originalPrice: 499,
        rating: 4.8,
        reviews: 198,
        image: 'https://source.unsplash.com/800x800/?shorts,kids',
        badge: 'Premium',
        category: 'Kids Clothing',
      },
      {
        id: 403,
        name: 'Kids Hoodie',
        price: 699,
        originalPrice: 999,
        rating: 4.5,
        reviews: 156,
        image: 'https://source.unsplash.com/800x800/?kids,hoodie',
        badge: null,
        category: 'Kids Clothing',
      },
    ],
    accessories: [
      {
        id: 501,
        name: 'Wool Scarf',
        price: 799,
        originalPrice: 1199,
        rating: 4.7,
        reviews: 145,
        image: 'https://source.unsplash.com/800x800/?wool,scarf',
        badge: 'Popular',
        category: 'Accessories',
      },
      {
        id: 502,
        name: 'Sun Hat',
        price: 499,
        originalPrice: 799,
        rating: 4.6,
        reviews: 178,
        image: 'https://source.unsplash.com/800x800/?sun,hat',
        badge: 'New',
        category: 'Accessories',
      },
      {
        id: 503,
        name: 'Leather Wallet',
        price: 1199,
        originalPrice: 1799,
        rating: 4.5,
        reviews: 134,
        image: 'https://source.unsplash.com/800x800/?leather,wallet',
        badge: null,
        category: 'Accessories',
      },
    ],
    formal: [
      {
        id: 601,
        name: 'Slim Fit Suit',
        price: 4999,
        originalPrice: 6999,
        rating: 4.4,
        reviews: 167,
        image: 'https://source.unsplash.com/800x800/?suit,formal',
        badge: 'Hot Deal',
        category: 'Formal Wear',
      },
      {
        id: 602,
        name: 'Office Dress Shirt',
        price: 1299,
        originalPrice: 1699,
        rating: 4.3,
        reviews: 143,
        image: 'https://source.unsplash.com/800x800/?dress,shirt',
        badge: 'Bestseller',
        category: 'Formal Wear',
      },
      {
        id: 603,
        name: 'Tie & Cufflinks Set',
        price: 999,
        originalPrice: 1299,
        rating: 4.5,
        reviews: 189,
        image: 'https://source.unsplash.com/800x800/?tie,cufflinks',
        badge: 'New',
        category: 'Accessories',
      },
    ],
    casual: [
      {
        id: 701,
        name: 'Casual Hoodie',
        price: 2299,
        originalPrice: 2999,
        rating: 4.9,
        reviews: 98,
        image: 'https://source.unsplash.com/800x800/?hoodie,casual',
        badge: 'Combo',
        category: 'Casual Wear',
      },
      {
        id: 702,
        name: 'Denim Shorts',
        price: 999,
        originalPrice: 1499,
        rating: 4.8,
        reviews: 67,
        image: 'https://source.unsplash.com/800x800/?denim,shorts',
        badge: 'Gift',
        category: 'Casual Wear',
      },
      {
        id: 703,
        name: 'Graphic Tee Pack',
        price: 1199,
        originalPrice: 1799,
        rating: 4.7,
        reviews: 123,
        image: 'https://source.unsplash.com/800x800/?graphic,tee',
        badge: 'Value',
        category: 'Casual Wear',
      },
    ],
    ethnic: [
      {
        id: 801,
        name: 'Kurta Set',
        price: 3499,
        originalPrice: 4999,
        rating: 4.7,
        reviews: 234,
        image: 'https://source.unsplash.com/800x800/?kurta,ethnic',
        badge: 'Bestseller',
        category: 'Ethnic Wear',
      },
      {
        id: 802,
        name: 'Saree Collection',
        price: 4299,
        originalPrice: 5999,
        rating: 4.8,
        reviews: 198,
        image: 'https://source.unsplash.com/800x800/?saree,ethnic',
        badge: 'Premium',
        category: 'Ethnic Wear',
      },
      {
        id: 803,
        name: 'Traditional Sherwani',
        price: 5999,
        originalPrice: 7999,
        rating: 4.5,
        reviews: 156,
        image: 'https://source.unsplash.com/800x800/?sherwani,ethnic',
        badge: null,
        category: 'Ethnic Wear',
      },
    ],
  };

  return allProducts[categorySlug] || [];
};

export default function CategoryPage({ params }) {
  const categorySlug = params.slug;
  const category = categoryData[categorySlug];
  const products = getProductsByCategory(categorySlug);

  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: 'all',
    rating: 'all',
    sortBy: 'popular',
  });

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Price Range Filter
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map((v) => (v === '' ? Infinity : parseInt(v.replace('+', ''))));
      filtered = filtered.filter((p) => {
        if (max === undefined) return p.price >= min;
        return p.price >= min && p.price <= max;
      });
    }

    // Rating Filter
    if (filters.rating !== 'all') {
      const minRating = parseFloat(filters.rating);
      filtered = filtered.filter((p) => p.rating >= minRating);
    }

    // Sort
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'popular':
      default:
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
    }

    return filtered;
  }, [filters, products]);

  if (!category) {
    return (
      <main className="bg-black min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Category Not Found</h1>
          <Link href="/products" className="text-[var(--primary)] hover:underline">
            View All Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-black min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-[#1a1a1a] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-400 hover:text-[var(--primary)] transition-colors">
              Home
            </Link>
            <IconChevronRight size={16} className="text-gray-600" />
            <Link href="/products" className="text-gray-400 hover:text-[var(--primary)] transition-colors">
              Products
            </Link>
            <IconChevronRight size={16} className="text-gray-600" />
            <span className="text-white">{category.name}</span>
          </div>
        </div>
      </div>

      {/* Category Header with Banner */}
      <div className="relative bg-gradient-to-b from-[#1a1a1a] to-black">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${category.image})` }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-20 text-center">
          <p className="text-[var(--primary)] text-sm font-bold uppercase tracking-wider mb-3">
            Category
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {category.name}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {category.description}
          </p>
          <div className="flex items-center justify-center gap-6 mt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-[var(--primary)]">{products.length}</p>
              <p className="text-gray-400 text-sm">Products</p>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[var(--primary)]">
                {products.reduce((sum, p) => sum + p.reviews, 0)}
              </p>
              <p className="text-gray-400 text-sm">Reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <ProductFilter onFilterChange={setFilters} />

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-400 text-sm">
            Showing <span className="text-white font-semibold">{filteredProducts.length}</span> of{' '}
            <span className="text-white font-semibold">{products.length}</span> products
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
            <p className="text-gray-400 text-lg mb-4">No products found matching your filters</p>
            <button
              onClick={() =>
                setFilters({
                  category: 'all',
                  priceRange: 'all',
                  rating: 'all',
                  sortBy: 'popular',
                })
              }
              className="px-6 py-3 bg-[var(--primary)] text-black font-semibold rounded-lg hover:bg-[var(--primary)]/90 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
