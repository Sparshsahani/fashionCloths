"use client";

import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandWhatsapp,
  IconMail,
  IconPhone,
  IconMapPin,
} from "@tabler/icons-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="py-30 bg-black text-white">
        {/* Main Footer */}
        <div className="container py-12 md:py-16 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div data-aos="fade-up" data-aos-delay="0">
              <div className="flex items-center gap-3 mb-6">
                <Link href="/" className="inline-block w-48 h-auto">
                  <img src="/logo.png" alt="Logo" className="w-full h-auto object-contain" />
                </Link>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Your destination for premium apparel and timeless style. Discover
                curated collections crafted to elevate your wardrobe.
              </p>
              <div className="flex gap-3">
                <a href="#" className="social-icon">
                  <IconBrandFacebook size={20} />
                </a>
                <a href="#" className="social-icon">
                  <IconBrandInstagram size={20} />
                </a>
                <a href="#" className="social-icon">
                  <IconBrandTwitter size={20} />
                </a>
                <a href="#" className="social-icon">
                  <IconBrandWhatsapp size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div data-aos="fade-up" data-aos-delay="100">
              <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
              <div className="h-[2px] w-12 bg-white mb-4"></div>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="footer-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="footer-link">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="footer-link">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="footer-link">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="footer-link">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div data-aos="fade-up" data-aos-delay="200">
              <h4 className="text-lg font-semibold mb-2">Categories</h4>
              <div className="h-[2px] w-12 bg-white mb-4"></div>
              <ul className="space-y-2">
                <li>
                  <Link href="/category/men" className="footer-link">
                    Men Clothing
                  </Link>
                </li>
                <li>
                  <Link href="/category/women" className="footer-link">
                    Women Clothing
                  </Link>
                </li>
                <li>
                  <Link href="/category/unisex" className="footer-link">
                    Unisex Clothing
                  </Link>
                </li>
                <li>
                  <Link href="/category/formal" className="footer-link">
                    Formal Wear
                  </Link>
                </li>
                <li>
                  <Link href="/category/casual" className="footer-link">
                    Casual Wear
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div data-aos="fade-up" data-aos-delay="300">
              <h4 className="text-lg font-semibold mb-2">Get In Touch</h4>
              <div className="h-[2px] w-12 bg-white mb-4"></div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <IconMapPin
                    size={20}
                    className="text-[var(--secondary)] mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-400 text-sm">
                    123 Fashion Ave, Mumbai, India
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <IconPhone
                    size={20}
                    className="text-[var(--secondary)] flex-shrink-0"
                  />
                  <a
                    href="tel:+911234567890"
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    +91 1234567890
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <IconMail
                    size={20}
                    className="text-[var(--secondary)] flex-shrink-0"
                  />
                  <a
                    href="mailto:info@fashion.com"
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    info@fashion.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <style jsx>{`
          .social-icon {
            width: 40px;
            height: 40px;
            border-radius: var(--radius-md);
            background-color: var(--white);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all var(--transition-base);
            color: black;
          }

          .social-icon:hover {
            background-color: #D4C5AF;
            transform: translateY(-3px);
            color: white;
            box-shadow: 0 4px 12px rgba(193, 154, 107, 0.4);
          }

          .footer-link {
            color: var(--gray-400);
            transition: color var(--transition-base);
            font-size: 0.9rem;
          }

          .footer-link:hover {
            color: var(--white);
            padding-left: 4px;
          }
        `}</style>
      </footer>

      {/* Bottom Bar with Gold Background - Full Width */}
      <div className="py-2 w-full bg-[#D4C5AF] border-t-2 border-black">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-black text-sm text-center md:text-left font-medium">
              © {currentYear} Cloths. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-[#2c2416] hover:text-[#0f0f0f] transition-colors font-medium"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[#2c2416] hover:text-[#0f0f0f] transition-colors font-medium"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/refund"
                className="text-[#2c2416] hover:text-[#0f0f0f] transition-colors font-medium"
              >
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
