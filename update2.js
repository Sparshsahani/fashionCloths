const fs = require("fs");
const glob = require("fs").readdirSync;
const filesToUpdate = ["components/common/ProductCard.js", "app/products/page.js", "app/category/[slug]/page.js", "components/home/HeroBanner.js"];

for (const filepath of filesToUpdate) {
  if (fs.existsSync(filepath)) {
    let content = fs.readFileSync(filepath, "utf8");
    
    content = content.replace(/text-\[var\(--primary\)\]/g, "text-white");
    content = content.replace(/bg-\[var\(--primary\)\]/g, "bg-white text-black");
    content = content.replace(/hover:text-\[var\(--primary\)\]/g, "hover:text-white");
    content = content.replace(/border-\[var\(--primary\)\]/g, "border-white");
    content = content.replace(/hover:border-\[var\(--primary\)\]/g, "hover:border-white");
    content = content.replace(/bg-\[#1a1a1a\]/g, "bg-zinc-900 border border-zinc-800");
    // Some specific colors to grayscale
    content = content.replace(/bg-\[#D4C5AF\]/g, "bg-white");
    content = content.replace(/text-\[#D4C5AF\]/g, "text-white");
    content = content.replace(/hover:bg-\[#D4C5AF\]/g, "hover:bg-gray-200");
    // The glow around card
    content = content.replace(/rgba\(193,154,107,0\.2\)/g, "rgba(255,255,255,0.15)");

    fs.writeFileSync(filepath, content, "utf8");
    console.log("Updated", filepath);
  } else {
     console.log("Not found", filepath);
  }
}
