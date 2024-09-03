import React from "react";

const Navbar = () => {
  return (
    <nav className="top-0 left-0 w-full h-20  bg-gray-800 text-gray-200 font-manrope flex items-center px-4 z-50">
      <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img
            src="/link--logo--logo2xpng@3x.png"
            alt="Logo"
            className="h-12 w-auto"
          />
        </a>

        {/* Navigation Links (Centered) */}
        <div className="flex-grow text-center">
          <div className="flex justify-center space-x-8">
            <a href="/" className="font-semibold  hover:text-green-900">
              Home
            </a>
            <a
              href="/marketplace"
              className="font-semibold hover:text-green-900"
            >
              Marketplace
            </a>
            <a href="/profile" className="font-semibold hover:text-green-900">
              Profile
            </a>
            <a href="/about-us" className="font-semibold hover:text-green-900">
              About Us
            </a>
            <a href="/faqs" className="font-semibold hover:text-green-900">
              FAQs
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <img src="/linkedin-2@2x.png" alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <img src="/github@2x.png" alt="GitHub" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
