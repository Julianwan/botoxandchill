"use client"

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 relative">
              <div className="w-full h-full rounded-full bg-primary flex items-center justify-center text-background font-serif text-xl">
                B&C
              </div>
            </div>
            <span className="text-primary font-serif text-2xl font-bold">Botox & Chill</span>
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8">
          <Link href="#services" className="text-foreground hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="#testimonials" className="text-foreground hover:text-primary transition-colors">
            Testimonials
          </Link>
          <Link href="#faq" className="text-foreground hover:text-primary transition-colors">
            FAQ
          </Link>
          <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-primary">
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden transition-all duration-300 bg-background/95 border-b border-primary/20`}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <Link
            href="#services"
            className="text-foreground hover:text-primary transition-colors"
            onClick={toggleMobileMenu}
          >
            Services
          </Link>
          <Link
            href="#testimonials"
            className="text-foreground hover:text-primary transition-colors"
            onClick={toggleMobileMenu}
          >
            Testimonials
          </Link>
          <Link
            href="#faq"
            className="text-foreground hover:text-primary transition-colors"
            onClick={toggleMobileMenu}
          >
            FAQ
          </Link>
          <Link
            href="#contact"
            className="text-foreground hover:text-primary transition-colors"
            onClick={toggleMobileMenu}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;