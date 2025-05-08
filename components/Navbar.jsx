'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative h-10 w-10 overflow-hidden rounded-lg">
                <Image
                  src="/images/logos/PasaraLogoV1.jpg"
                  alt="Pasmen Pasara Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="relative h-8 w-32 ml-3 hidden sm:block">
                <Image
                  src="/images/logos/PasaraLogoV2.jpg"
                  alt="Pasmen Pasara"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-brand-primary transition-colors">
              Features
            </Link>
            <Link href="#products" className="text-gray-600 hover:text-brand-primary transition-colors">
              Products
            </Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-brand-primary transition-colors">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-brand-primary transition-colors">
              Pricing
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-brand-primary transition-colors">
              Log in
            </Link>
            <Link
              href="/get-started"
              className="bg-brand-primary text-white px-4 py-2 rounded-lg hover:bg-brand-dark transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-brand-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="#features"
              className="block px-3 py-2 text-gray-600 hover:text-brand-primary transition-colors"
            >
              Features
            </Link>
            <Link
              href="#products"
              className="block px-3 py-2 text-gray-600 hover:text-brand-primary transition-colors"
            >
              Products
            </Link>
            <Link
              href="#testimonials"
              className="block px-3 py-2 text-gray-600 hover:text-brand-primary transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="block px-3 py-2 text-gray-600 hover:text-brand-primary transition-colors"
            >
              Pricing
            </Link>
            <div className="border-t border-gray-200 mt-4 pt-4">
              <Link
                href="/login"
                className="block px-3 py-2 text-gray-600 hover:text-brand-primary transition-colors"
              >
                Log in
              </Link>
              <Link
                href="/get-started"
                className="block px-3 py-2 mt-2 text-center bg-brand-primary text-white rounded-lg hover:bg-brand-dark transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 