const fs = require("fs");
const filepath = "app/product/[id]/page.js";
let content = fs.readFileSync(filepath, "utf8");

// replace the getProductById function
const newProductFn = `
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
`;

const startIndex = content.indexOf("// Sample product data");
const endIndex = content.indexOf("// Related products");
if (startIndex !== -1 && endIndex !== -1) {
  content = content.substring(0, startIndex) + newProductFn + "\n" + content.substring(endIndex);
}

// NextJS 15 React.use(params) fix
content = content.replace(
  "export default function ProductDetailPage({ params }) {\n  const product = getProductById(params.id);",
  "import { use } from 'react';\n\nexport default function ProductDetailPage({ params }) {\n  const unwrappedParams = typeof params.then === 'function' ? use(params) : params;\n  const product = getProductById(unwrappedParams.id);"
);
// just in case 'use' is imported already
if (content.includes("import { useState, use } from")) {
   content = content.replace("import { use } from 'react';\n\nexport default", "export default");
}

// Black and White Aesthetics
// Change primary text to white
content = content.replace(/text-\[var\(--primary\)\]/g, "text-white");
// Change primary bg to white, text to black 
content = content.replace(/hover:bg-\[var\(--primary\)\]\/90/g, "hover:bg-gray-200");
content = content.replace(/bg-\[var\(--primary\)\]/g, "bg-white text-black");
// Change borders
content = content.replace(/border-\[var\(--primary\)\]/g, "border-white");
// Change hover
content = content.replace(/hover:text-\[var\(--primary\)\]/g, "hover:text-white");
content = content.replace(/hover:border-\[var\(--primary\)\]/g, "hover:border-white");

// Tweak gray colors and black background parts to look cleaner
content = content.replace(/bg-\[#1a1a1a\]/g, "bg-zinc-900 border border-zinc-800");

fs.writeFileSync(filepath, content, "utf8");
console.log("Updated file.");
