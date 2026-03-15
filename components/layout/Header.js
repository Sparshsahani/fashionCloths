"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  IconShoppingCart,
  IconUser,
  IconMenu2,
  IconX,
  IconChevronDown,
  IconArrowRight,
} from "@tabler/icons-react";

const categories = [
  { name: "Men Clothing", href: "/category/men" },
  { name: "Women Clothing", href: "/category/women" },
  { name: "Kids Clothing", href: "/category/kids" },
  { name: "Accessories", href: "/category/accessories" },
  { name: "Formal Wear", href: "/category/formal" },
  { name: "Casual Wear", href: "/category/casual" },
  { name: "Ethnic Wear", href: "/category/ethnic" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

  // delay closing dropdown to avoid flicker
  const closeTimer = useRef(null);
  const handleDropdownEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setCategoryDropdownOpen(true);
  };
  const handleDropdownLeave = () => {
    closeTimer.current = setTimeout(() => {
      setCategoryDropdownOpen(false);
    }, 200); // 200ms delay
  };

  // hide header when scrolling down, show when scrolling up
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY || 0;

      // keep header visible while mobile menu is open
      if (mobileMenuOpen) {
        setHideOnScroll(false);
        lastScrollY.current = currentY;
        return;
      }

      // if scrolling down and passed threshold -> hide
      if (currentY > lastScrollY.current && currentY > 80) {
        setHideOnScroll(true);
      } else {
        // scrolling up -> show
        setHideOnScroll(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`sticky top-0 z-50 bg-[#D4C5AF] transform transition-transform duration-300 border-b border-gray-200 ${hideOnScroll ? '-translate-y-full' : 'translate-y-0'}`}>
        {/* Top Bar */}
        <div className="bg-[var(--black)] text-white py-4">
          <div className="container flex justify-between items-center text-sm font-semibold px-6">
            <p>Free Shipping on Orders Above ₹999 – Fashion Delivered</p>
            <p className="hidden sm:block">Contact: +91 1234567890</p>
          </div>
        </div>

        {/* Main Header */}
        <div className="container px-6">
          <div className="flex items-center justify-between py-3 gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-28 md:w-40 h-auto transition-transform duration-300 group-hover:scale-105">
                <img src="/logo.png" alt="Logo" className="w-full h-auto object-contain" />
              </div>
              {/* text removed, logo only header */}
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden  text-black lg:flex items-center gap-10">
              <Link href="/" className="nav-link">
                Home
              </Link>

              {/* Category Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <button className="nav-link text-black flex items-center gap-2">
                  Category
                  <IconChevronDown
                    size={16}
                    className={`text-black transition-transform ${categoryDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {categoryDropdownOpen && (
                  <div className="absolute top-full left-0 mt-4 w-64 bg-white rounded-xl shadow-2xl border border-gray-300 py-3 animate-fadeIn">
                    <div className="grid grid-cols-1">
                      {categories.map((category) => (
                        <Link
                          key={category.name}
                          href={category.href}
                          className="px-6 py-3 hover:bg-black/30 transition-colors duration-200 group"
                        >
                          <span className="font-semibold text-black group-hover:text-[var(--text-primary)] text-sm">
                            {category.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/about" className="nav-link">
                About
              </Link>
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-6">
              {/* Login Button */}
              <Link
                href="/login"
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border-2 border-gray-700 text-black hover:border-[var(--text-primary)] hover:text-[var(--text-primary)] transition-all duration-300"
              >
                <IconUser size={20} />
                <span className="hidden md:inline font-semibold">Login</span>
              </Link>

              {/* Cart Button */}
              <Link
                href="/cart"
                className="relative flex items-center gap-2 px-4 py-2 bg-[var(--black)] text-white rounded-full font-bold hover:shadow-xl hover:shadow-[var(--black)]/50 hover:scale-105 transition-all duration-300"
              >
                <IconShoppingCart size={20} />
                <span className="hidden md:inline">Cart</span>
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-[var(--black)] text-white text-xs rounded-full flex items-center justify-center font-bold shadow-lg">
                  0
                </span>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-3 hover:bg-gray-800 rounded-lg transition-colors text-black"
              >
                {mobileMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-[100] transition-all duration-300 ease-in-out ${mobileMenuOpen
            ? 'opacity-100 translate-x-0 visible'
            : 'opacity-0 translate-x-full invisible pointer-events-none'
          }`}
      >
        {/* Solid premium background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--black)] via-[var(--black)] to-[var(--black)]" />

        <div className="relative flex flex-col h-[100svh]">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-black/60 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-24 h-auto shadow-xl">
                <img src="/logo.png" alt="Logo" className="w-full h-auto object-contain" />
              </div>
              {/* logo only */}
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors"
            >
              <IconX size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-8">
            {/* Search Box */}
            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Search cloths..."
                className="w-full bg-black/60 border border-white/15 rounded-xl px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--black)] focus:ring-1 focus:ring-[var(--black)] transition-all"
              />
            </div>

            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="group flex items-center justify-between p-4 rounded-xl bg-black/40 hover:bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-lg font-medium text-white group-hover:text-white">Home</span>
                <IconArrowRight
                  size={18}
                  className="text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                />
              </Link>

              {/* Submenu for Categories */}
              <div className="overflow-hidden rounded-xl border border-gray-300 bg-white transition-all duration-300">
                <button
                  onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                  className="w-full flex items-center justify-between p-4 text-left group"
                >
                  <span
                    className={`text-lg font-medium transition-colors ${categoryDropdownOpen
                        ? 'text-[var(--text-primary)]'
                        : 'text-black  group-hover:text-white'
                      }`}
                  >
                    Collections
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center bg-white/10 transition-all duration-300 ${categoryDropdownOpen
                        ? 'bg-[var(--black)] text-white rotate-180'
                        : 'text-gray-400 group-hover:text-white'
                      }`}
                  >
                    <IconChevronDown size={18} />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${categoryDropdownOpen ? 'grid-rows-[1fr] opacity-100 pb-4' : 'grid-rows-[0fr] opacity-0'
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-2 gap-2 px-4 pt-2">
                      {categories.map((category) => (
                        <Link
                          key={category.name}
                          href={category.href}
                          className="flex flex-col items-center justify-center p-3 rounded-lg bg-white border border-gray-300 hover:border-[var(--text-primary)]/50 hover:bg-[var(--text-primary)]/10 text-center transition-all duration-300"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className="text-sm text-black hover:text-[var(--text-primary)]">
                            {category.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className="group flex items-center justify-between p-4 rounded-xl bg-black/40 hover:bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-lg font-medium text-white group-hover:text-white">About Us</span>
                <IconArrowRight
                  size={18}
                  className="text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                />
              </Link>

              <Link
                href="/contact"
                className="group flex items-center justify-between p-4 rounded-xl bg-black/40 hover:bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-lg font-medium text-white group-hover:text-white">Contact</span>
                <IconArrowRight
                  size={18}
                  className="text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                />
              </Link>
            </nav>
          </div>

          {/* Bottom Actions (Sticky) */}
          <div className="sticky bottom-0 bg-black/70 backdrop-blur-md px-6 py-6 border-t border-white/10 space-y-4">
            <Link
              href="/login"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-white/10 border border-white/15 text-white font-semibold hover:bg-[var(--text-primary)] hover:text-black hover:border-transparent transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <IconUser size={20} />
              <span>Login / Register</span>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .nav-link {
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--black);
          transition: color var(--transition-base);
          position: relative;
          padding: 0.5rem 0;
        }

        .nav-link:hover {
          color: var(--text-primary);
        }

        .nav-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--text-primary);
          transition: width var(--transition-base);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .mobile-nav-link {
          padding: 0.875rem 1rem;
          border-radius: 8px;
          font-weight: 500;
          font-size: 0.95rem;
          color: var(--white);
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background-color: transparent;
        }

        .mobile-nav-link:hover {
          background-color: rgba(193, 154, 107, 0.1);
          color: var(--primary);
          padding-left: 1.25rem;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 500px;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
