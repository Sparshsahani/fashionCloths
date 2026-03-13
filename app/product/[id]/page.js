"use client";

import { useState, use } from "react";
import {
  IconShoppingCart,
  IconHeart,
  IconStar,
  IconStarFilled,
  IconMinus,
  IconPlus,
  IconTruck,
  IconShieldCheck,
  IconRefresh,
} from "@tabler/icons-react";
import Link from "next/link";
import ProductCard from "@/components/common/ProductCard";


// Sample products database
const allProducts = {
  1: {
    id: 1, name: "Classic Denim Jacket", price: 2999, originalPrice: 3999,
    rating: 4.8, reviews: 234, inStock: true, category: "Outerwear", brand: "Lucknow Chikan",
    description: "A timeless denim jacket crafted from premium denim. Perfect for layering and everyday style.",
    fullDescription: "This classic denim jacket blends rugged durability with contemporary fit.",
    features: ["100% premium cotton denim", "Button-front closure", "Chest flap pockets", "Machine washable"],
    notes: { composition: ["100% Cotton Outer"], care: ["Machine wash cold"], fit: ["Regular fit"] },
    images: [
      "/image/blue-cloths.jpg",
      "/image/blue-cloths.jpg",
      "/image/blue-cloths.jpg",
      "/image/blue-cloths.jpg",
    ]
  },
  2: {
    id: 2, name: "Floral Wrap Maxi Dress", price: 2499, originalPrice: 3499,
    rating: 4.6, reviews: 189, inStock: true, category: "Women's Clothing", brand: "Lucknow Chikan",
    description: "An elegant floral wrap maxi dress perfect for summer events.",
    fullDescription: "This beautiful floral wrap dress features a flowing silhouette.",
    features: ["Lightweight floral fabric", "Wrap-around tie closure", "Maxi length"],
    notes: { composition: ["100% Viscose"], care: ["Hand wash preferred"], fit: ["Relaxed wrap fit"] },
    images: [
      "/image/blue-cloths.jpg",
      "/image/blue-cloths.jpg",
      "/image/blue-cloths.jpg",
    ]
  },
  3: {
    id: 3, name: "Kids Printed Graphic Tee", price: 799, originalPrice: 1199,
    rating: 4.4, reviews: 156, inStock: true, category: "Kids Clothing", brand: "Lucknow Chikan",
    description: "Fun and vibrant graphic tee for kids.",
    fullDescription: "This kids graphic tee is made from super soft cotton.",
    features: ["100% soft cotton", "Fade-resistant print", "Machine washable"],
    notes: { composition: ["100% Cotton"], care: ["Machine wash warm"], fit: ["Regular kids fit"] },
    images: [
      "/image/blue-cloths.jpg",
      "/image/blue-cloths.jpg",
      "/image/blue-cloths.jpg",
    ]
  },
};

const getProductById = (id) => {
  return allProducts[id] || allProducts[1];
};

// Related products
const relatedProducts = [
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
    originalPrice: null,
    rating: 4.5,
    reviews: 98,
    image: "/image/blue-cloths.jpg",
    badge: null,
    category: "Men's Clothing",
  },
];

export default function ProductDetailPage({ params }) {
  const { id } = use(params);
  const product = getProductById(id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <main className="bg-black min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-zinc-900 border border-zinc-800 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Home
            </Link>
            <span className="text-gray-600">/</span>
            <Link
              href="/products"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Products
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-white">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Images Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden aspect-square">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {discount > 0 && (
                <span className="absolute top-4 right-4 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded">
                  -{discount}%
                </span>
              )}
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden aspect-square border-2 transition-all ${
                    selectedImage === index
                      ? "border-white"
                      : "border-transparent hover:border-white/20"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="space-y-6">
            {/* Category & Brand */}
            <div className="flex items-center gap-3 text-sm">
              <span className="text-white font-semibold uppercase tracking-wide">
                {product.category}
              </span>
              <span className="text-gray-600">|</span>
              <span className="text-gray-400">{product.brand}</span>
            </div>

            {/* Product Name */}
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              {product.name}
            </h1>

            {/* Rating & Reviews */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) =>
                  i < Math.floor(product.rating) ? (
                    <IconStarFilled
                      key={i}
                      size={18}
                      className="text-white"
                    />
                  ) : (
                    <IconStar key={i} size={18} className="text-gray-600" />
                  ),
                )}
              </div>
              <span className="text-white font-semibold">{product.rating}</span>
              <span className="text-gray-400 text-sm">
                ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-white">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-gray-500 line-through">
                    ₹{product.originalPrice}
                  </span>
                  <span className="text-green-500 font-semibold">
                    Save ₹{product.originalPrice - product.price}
                  </span>
                </>
              )}
            </div>

            {/* Stock Status */}
            <div>
              {product.inStock ? (
                <span className="text-green-500 font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  In Stock
                </span>
              ) : (
                <span className="text-red-500 font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  Out of Stock
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed">
              {product.description}
            </p>

            {/* Quantity Selector */}
            <div className="space-y-3">
              <label className="text-white font-semibold">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-white/20 rounded-lg overflow-hidden">
                  <button
                    onClick={decreaseQuantity}
                    className="px-4 py-3 bg-zinc-900 border border-zinc-800 text-white hover:bg-white text-black hover:text-black transition-colors"
                  >
                    <IconMinus size={18} />
                  </button>
                  <span className="px-6 py-3 bg-black text-white font-semibold">
                    {quantity}
                  </span>
                  <button
                    onClick={increaseQuantity}
                    className="px-4 py-3 bg-zinc-900 border border-zinc-800 text-white hover:bg-white text-black hover:text-black transition-colors"
                  >
                    <IconPlus size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-white text-black text-black font-bold rounded-lg hover:bg-gray-200 transition-all">
                <IconShoppingCart size={20} />
                Add to Cart
              </button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`px-4 py-4 border rounded-lg transition-all ${
                  isWishlisted
                    ? "bg-white text-black border-white text-black"
                    : "border-white/20 text-white hover:border-white"
                }`}
              >
                <IconHeart
                  size={20}
                  className={isWishlisted ? "fill-black" : ""}
                />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="flex items-start gap-3 p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
                <IconTruck
                  size={24}
                  className="text-[var(--white)] flex-shrink-0 mt-1"
                />
                <div>
                  <p className="text-white font-semibold text-sm">
                    Free Delivery
                  </p>
                  <p className="text-gray-400 text-xs">On orders above ₹999</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
                <IconShieldCheck
                  size={24}
                  className="text-[var(--white)] flex-shrink-0 mt-1"
                />
                <div>
                  <p className="text-white font-semibold text-sm">Authentic</p>
                  <p className="text-gray-400 text-xs">100% genuine products</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
                <IconRefresh
                  size={24}
                  className="text-[var(--white)] flex-shrink-0 mt-1"
                />
                <div>
                  <p className="text-white font-semibold text-sm">
                    Easy Returns
                  </p>
                  <p className="text-gray-400 text-xs">7-day return policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-12 md:mt-16">
          {/* Tab Headers */}
          <div className="flex gap-6 border-b border-white/10">
            <button
              onClick={() => setActiveTab("description")}
              className={`pb-4 font-semibold transition-colors relative ${
                activeTab === "description"
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Description
              {activeTab === "description" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white text-black"></span>
              )}
            </button>
            <button
              onClick={() => setActiveTab("notes")}
              className={`pb-4 font-semibold transition-colors relative ${
                activeTab === "notes"
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Fabric Details
              {activeTab === "notes" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white text-black"></span>
              )}
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`pb-4 font-semibold transition-colors relative ${
                activeTab === "reviews"
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Reviews ({product.reviews})
              {activeTab === "reviews" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white text-black"></span>
              )}
            </button>
          </div>

          {/* Tab Content */}
          <div className="py-8">
            {activeTab === "description" && (
              <div className="space-y-6">
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {product.fullDescription}
                  </p>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Key Features
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <span className="w-1.5 h-1.5 bg-white text-black rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "notes" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg">
                  <h3 className="text-white font-bold mb-4">
                    Compositions
                  </h3>
                  <ul className="space-y-2">
                    {product.notes.composition.map((note, index) => (
                      <li
                        key={index}
                        className="text-gray-300 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-white text-black rounded-full"></span>
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg">
                  <h3 className="text-white font-bold mb-4">
                    Care Instructions
                  </h3>
                  <ul className="space-y-2">
                    {product.notes.care.map((note, index) => (
                      <li
                        key={index}
                        className="text-gray-300 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-white text-black rounded-full"></span>
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg">
                  <h3 className="text-white font-bold mb-4">
                    Fit & Sizing
                  </h3>
                  <ul className="space-y-2">
                    {product.notes.fit.map((note, index) => (
                      <li
                        key={index}
                        className="text-gray-300 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-white text-black rounded-full"></span>
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-6">
                <div className="text-center py-12">
                  <p className="text-gray-400">
                    Customer reviews feature coming soon!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
