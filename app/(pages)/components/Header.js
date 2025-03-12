'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTopBarOpen, setIsTopBarOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleTopBarToggle = () => {
    setIsTopBarOpen(!isTopBarOpen);
  };

  return (
    <header className="relative z-50">
      {/* Top Bar - Desktop & Mobile Toggle */}
      <div className="bg-[#032b66] text-white overflow-hidden">
      <div className="w-full md:w-[90%] max-w-full md:max-w-[90%] mx-auto relative">
        {/* Mobile (XS to MD) Top Bar Toggle Button */}
        <div className="flex md:hidden w-full justify-between items-center h-12 px-2">
          <p className="text-sm">Contact Us</p>
          <button 
            className="text-white p-1" 
            onClick={handleTopBarToggle}
          >
            {isTopBarOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Layout - Always Visible on MD+ */}
        <div className="hidden md:flex md:flex-col lg:flex-row md:justify-between md:items-center py-2">
          {/* Contact Info Row */}
          <div className="flex flex-col md:flex-row gap-1 md:gap-2 items-center justify-center">
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className="text-xs">info@yourmail.com</p>
            </div>

            <div className="hidden md:block bg-white/60 w-px h-6"></div>

            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-xs">12 Queen Park, LA, USA</p>
            </div>

            <div className="hidden md:block bg-white/60 w-px h-6"></div>

            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-xs">Mon - Sat: 9.00 to 18.00</p>
            </div>
          </div>

          {/* Search and Appointment Row */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 md:mt-1 lg:mt-0">
            {/* Social Icons Box */}
            <div className="flex gap-1 items-center">
              <button className="text-white p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </button>
              <button className="text-white p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </button>
              <button className="text-white p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </button>
            </div>

            <div className="hidden lg:block bg-white/60 w-px h-6"></div>

            <div className="flex items-center bg-[#032b66] rounded px-1 h-6 w-full md:w-[200px]">
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-transparent text-white text-sm pl-1 w-full focus:outline-none"
              />
              <button className="text-white/40">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            <Link 
              href="/appointment" 
              className="flex items-center justify-center bg-[#032b66] text-white h-10 md:h-10 w-full md:w-[180px] relative overflow-hidden transition-colors duration-400 hover:text-[#032b66] group"
            >
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400"></div>
              <span className="relative z-10 flex justify-center items-center h-full px-4">Appointment  →</span>
            </Link>
          </div>
        </div>

        {/* Mobile Dropdown Content - Only visible when toggled */}
        <div className={`${isTopBarOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="flex flex-col gap-2 p-2 border-t border-white/10">
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className="text-xs">info@yourmail.com</p>
            </div>

            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-xs">12 Queen Park, LA, USA</p>
            </div>

            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-xs">Mon - Sat: 9.00 to 18.00</p>
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <div className="flex gap-1 items-center justify-center">
                <button className="text-white p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </button>
                <button className="text-white p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </button>
                <button className="text-white p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
              </div>

              <div className="flex items-center bg-[#032b66] rounded px-1 h-6 w-full">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="bg-transparent text-white text-sm pl-1 w-full focus:outline-none"
                />
                <button className="text-white/40">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>

              <Link 
                href="/appointment" 
                className="flex items-center justify-center bg-[#032b66] text-white h-10 relative overflow-hidden transition-colors duration-400 hover:text-[#032b66] group"
              >
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400"></div>
                <span className="relative z-10 flex justify-center items-center h-full px-4">Appointment  →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* Navigation Bar */}
      <div className="bg-white border-b border-gray-200 py-2 lg:mr-20 lg:ml-14">
        <div className="flex justify-between items-center px-2 sm:px-3 max-w-full">
          {/* Logo on Left */}
          <div className="flex items-center gap-1">
            <div className="w-10 sm:w-12 h-10 sm:h-12">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                <circle cx="50" cy="50" r="45" fill="#2D2A54" />
                <path d="M30,50 Q50,20 70,50 Q50,80 30,50" stroke="#FFF" strokeWidth="4" fill="none" />
                <path d="M25,50 Q50,10 75,50 Q50,90 25,50" stroke="#FFF" strokeWidth="4" fill="none" />
                <path d="M20,50 Q50,0 80,50 Q50,100 20,50" stroke="#FFF" strokeWidth="4" fill="none" />
              </svg>
            </div>
            <div>
              <h6 className="text-base sm:text-xl text-[#2D2A54]">Sahil Travelers</h6>
              <span className="hidden sm:block text-xs uppercase text-[#2D2A54]">
                Visa Consultancy
              </span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleMenuToggle}
            className="flex lg:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Navigation Links and Contact Info - Desktop */}
          <div className="hidden lg:flex items-center gap-20">
            <div className="flex gap-3">
              {['Home', 'About','Contact'].map((item) => (
                <Link 
                  key={item} 
                  href={`/${item.toLowerCase()}`}
                  className="text-[#032B66] hover:text-[#032B66] px-2 py-1"
                >
                  {item}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <img className="w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center text-white" src=" /member1.jpg"></img>
            
              <div>
                <p className="text-xs text-gray-600">
                  ENQUIRIES
                </p>
                <p className="text-sm text-[#2D2A54] hover:underline cursor-pointer">
                  +1-888-456-78-901
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden fixed top-0 left-0 w-[300px] h-screen bg-white z-50 shadow-lg p-3 overflow-y-auto`}
          >
            <div className="flex justify-between items-center mb-3">
              <h6 className="text-[#2D2A54] text-xl">Menu</h6>
              <button onClick={handleMenuToggle}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mb-4">
              {['Home', 'About',  'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="block text-[#032B66] w-full text-left py-1.5 border-b border-black/5 hover:bg-black/[0.02]"
                >
                  {item}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2 mt-4">
              <div className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center text-white">
                <span>SA</span>
              </div>
              <div>
                <p className="text-xs text-gray-600">
                  ENQUIRIES
                </p>
                <p className="text-sm text-[#2D2A54] hover:underline cursor-pointer">
                  +1-888-456-78-901
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          onClick={handleMenuToggle}
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 lg:hidden"
        />
      )}
    </header>
  );
};

export default Header;