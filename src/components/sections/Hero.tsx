import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080/1a1a1a/1a1a1a')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      {/* Gold accent elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-primary opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-primary opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            <span className="text-primary">Botox & Chill</span>
            <span className="block text-white mt-2">Where Luxury Meets Transformation</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Maui's most exclusive Med Spa experience, reserved for the elite who demand nothing but the finest in beauty enhancement. 
            Your journey to becoming the most beautiful version of yourself begins here.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#contact" className="btn-luxury px-8 py-3 rounded-full text-lg">
              Book Your Experience
            </Link>
            <Link href="#services" className="btn-luxury-outline px-8 py-3 rounded-full text-lg">
              Explore Services
            </Link>
          </div>
          
          <div className="mt-12 pt-12 border-t border-primary/20 flex justify-center">
            <div className="flex items-center space-x-2 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-lg">Scroll to discover luxury</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
