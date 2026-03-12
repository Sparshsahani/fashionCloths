import HeroBanner from "@/components/home/HeroBanner";
import CategoryShowcase from "@/components/home/CategoryShowcase";
import ProductSection from "@/components/home/ProductSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ScrollingText from "@/components/home/ScrollingText";
import CenterBanner from "@/components/home/CenterBanner";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <main className="bg-black">
      {/* Hero Banner */}
      <HeroBanner />

      {/* Features Section */}
      <FeaturesSection />

      {/* Category Showcase */}
      <CategoryShowcase />

      {/* Scrolling Text Section */}
      <ScrollingText />

      {/* Center Banner (alternate) */}
      <CenterBanner
        title="Explore New Arrivals"
        subtitle="Limited Edition"
        description="Check out the latest cloths dropped this season — styles that speak for you."
        ctaText="Shop New Arrivals"
        ctaLink="/products/new"
        image="https://source.unsplash.com/1600x900/?new,clothes"
        align="left"
      />

      {/* Best Sellers */}
      <ProductSection title="Best Sellers" viewAllLink="/products" />

      <CenterBanner />

      {/* Featured Products */}
      <ProductSection title="Featured Products" />

      
    </main>
  );
}
