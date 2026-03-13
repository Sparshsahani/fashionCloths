import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AOSInit from "@/components/AOSInit";
import Newsletter from "@/components/home/Newsletter";
import Testimonials from "@/components/home/Testimonials";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lucknow Chikan",
  description: "Discover premium authentic Lucknow Chikan embroidered clothing and traditional chikankari wear.",
  keywords: "lucknow chikan, chikankari, kurtas, traditional wear, ethnic wear, embroidery",
  authors: [{ name: "Lucknow Chikan" }],
  creator: "Lucknow Chikan",
  publisher: "Lucknow Chikan",
  openGraph: {
    title: "Lucknow Chikan",
    description: "Shop authentic premium Lucknow Chikan embroidered clothing online",
    type: "website",
    locale: "en_IN",
    siteName: "Lucknow Chikan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucknow Chikan",
    description: "Shop authentic premium Lucknow Chikan embroidered clothing online",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <AOSInit />
        <Header />
        {children}
        {/* Newsletter Section (animated component) */}
        <Testimonials/>
        <Newsletter />
        <Footer />
      </body>
    </html>
  );
}
