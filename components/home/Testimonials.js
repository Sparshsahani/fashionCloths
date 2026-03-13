'use client';

import { useState, useEffect, useRef } from 'react';
import { IconStarFilled, IconQuote, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    avatar: 'PS',
    rating: 5,
    review:
      'Absolutely love the quality of the clothes! The Lucknow Chikan collection is stunning — the fabric feels premium and the stitching is flawless. Will definitely order again.',
    product: 'Embroidered Kurta Set',
    image: '/image/blue-cloths.jpg',
  },
  {
    id: 2,
    name: 'Rohit Mehta',
    location: 'Delhi, India',
    avatar: 'RM',
    rating: 5,
    review:
      'Super fast delivery and the packaging was really elegant. The denim jacket fits perfectly and looks exactly like the photo. Highly recommended to everyone!',
    product: 'Classic Denim Jacket',
    image: '/image/blue-cloths.jpg',
  },
  {
    id: 3,
    name: 'Anjali Verma',
    location: 'Bangalore, India',
    avatar: 'AV',
    rating: 4,
    review:
      'Beautiful floral dress, the colours are vibrant and the material is very comfortable for summer. Customer support was also very helpful when I had a sizing question.',
    product: 'Floral Wrap Maxi Dress',
    image: '/image/blue-cloths.jpg',
  },
  {
    id: 4,
    name: 'Karan Singh',
    location: 'Jaipur, India',
    avatar: 'KS',
    rating: 5,
    review:
      'Ordered the slim fit shirt for a formal event and got so many compliments. The fit is spot-on and the fabric breathes well. This is now my go-to brand for formals.',
    product: "Men's Slim Fit Shirt",
    image: '/image/blue-cloths.jpg',
  },
];

export default function Testimonials() {
  const VISIBLE = 3;
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const total = testimonials.length; // 4
  // Number of valid start positions (wrap-around so all cards show)
  const steps = total;

  const goTo = (index) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((index + steps) % steps);
      setAnimating(false);
    }, 300);
  };

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [current]);

  // Get 3 visible cards with wrap-around
  const visibleCards = Array.from({ length: VISIBLE }, (_, i) =>
    testimonials[(current + i) % total]
  );

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-[#f5ede0] via-[#f0e6d8] to-[#e8dcc8]">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-block mb-4">
            <p className="text-[#8b7355] text-xs font-semibold uppercase tracking-[0.2em] mb-2">
              What Our Customers Say
            </p>
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-[#8b7355] to-transparent mx-auto" />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2c2416] mb-4 tracking-tight">
            Loved by Thousands
          </h2>
          <p className="text-[#5a4a3a] text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Real reviews from real customers who wear our clothes with pride
          </p>
        </div>

        {/* 3-Card Carousel */}
        <div className="max-w-7xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-opacity duration-300 ${
              animating ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {visibleCards.map((t, idx) => (
              <div
                key={`${t.id}-${idx}`}
                className="bg-white rounded-2xl shadow-md border border-[#c19a6b]/25 overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-xl hover:border-[#c19a6b]/60 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.product}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-widest text-white bg-[#c19a6b] px-3 py-1 rounded-full">
                    {t.product}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 p-6 flex-1">
                  {/* Quote + Stars */}
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#c19a6b]/20 to-[#8b7355]/20 flex items-center justify-center">
                      <IconQuote size={16} className="text-[#8b7355]" />
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <IconStarFilled
                          key={i}
                          size={13}
                          className={i < t.rating ? 'text-[#c19a6b]' : 'text-[#e0d0c0]'}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Review */}
                  <p className="text-[#5a4a3a] text-sm leading-relaxed font-light italic flex-1">
                    "{t.review}"
                  </p>

                  {/* Divider */}
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c19a6b]/30 to-transparent" />

                  {/* Avatar */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c19a6b] to-[#8b7355] flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">{t.avatar}</span>
                    </div>
                    <div>
                      <p className="text-[#2c2416] font-semibold text-sm">{t.name}</p>
                      <p className="text-[#8b7355] text-xs">{t.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-10 px-2">
            {/* Prev / Next */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full border-2 border-[#c19a6b] text-[#8b7355] hover:bg-[#c19a6b] hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <IconChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full border-2 border-[#c19a6b] text-[#8b7355] hover:bg-[#c19a6b] hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <IconChevronRight size={20} />
              </button>
            </div>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-8 h-2.5 bg-[#c19a6b]'
                      : 'w-2.5 h-2.5 bg-[#c19a6b]/30 hover:bg-[#c19a6b]/60'
                  }`}
                />
              ))}
            </div>

            {/* Counter */}
            <p className="text-[#8b7355] text-sm font-semibold">
              {current + 1} / {total}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
