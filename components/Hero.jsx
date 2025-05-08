'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-brand-light/10 via-white to-brand-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Streamline Your Business with{' '}
              <span className="text-brand-primary">Pasara POS</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              The all-in-one point of sale system that helps you manage your business
              smarter, faster, and more efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/get-started"
                className="bg-brand-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-brand-dark transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/book-demo"
                className="bg-white text-brand-primary px-8 py-3 rounded-lg text-lg font-semibold border-2 border-brand-primary hover:bg-brand-primary hover:text-white transition-colors"
              >
                Book a Demo
              </Link>
            </div>
          </motion.div>

          {/* Image/Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 lg:mt-0"
          >
            <div className="relative">
              <div className="w-full h-[500px] bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
                {/* Replace this div with an actual image of your POS system mockup */}
                <div className="w-full h-full bg-gradient-to-br from-brand-light to-brand-primary opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  POS System Mockup
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 inset-0 bg-gradient-to-r from-brand-primary/20 to-brand-light/20 transform rotate-3 rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 