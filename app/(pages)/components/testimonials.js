"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const sliderRef = useRef(null);
  
  const testimonials = [
    {
      id: 1,
      name: 'Michael',
      role: 'Business Owner',
      image: '/member1.jpg',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.'
    },
    {
      id: 2,
      name: 'Diane',
      role: 'CMO, Retail+',
      image: '/member2.jpg',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.'
    },
    {
      id: 3,
      name: 'Allison',
      role: 'Designer, Portal',
      image: '/member3.jpg',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.'
    },
    {
      id: 4,
      name: 'Robert',
      role: 'Developer',
      image: '/member4.jpg',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.'
    },
    {
      id: 5,
      name: 'Sarah',
      role: 'Project Manager',
      image: '/member2.jpg',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.'
    }
  ];
  
  // Update visible testimonial count based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Calculate number of slides based on visible count
  const totalSlides = Math.max(1, Math.ceil(testimonials.length / visibleCount));
  
  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeSlide, totalSlides]);
  
  const scrollToSlide = (slideIndex) => {
    if (!sliderRef.current) return;
    
    const scrollAmount = (sliderRef.current.scrollWidth / totalSlides) * slideIndex;
    
    sliderRef.current.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };
  
  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const nextIndex = activeSlide === totalSlides - 1 ? 0 : activeSlide + 1;
    setActiveSlide(nextIndex);
    scrollToSlide(nextIndex);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const prevIndex = activeSlide === 0 ? totalSlides - 1 : activeSlide - 1;
    setActiveSlide(prevIndex);
    scrollToSlide(prevIndex);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const goToSlide = (index) => {
    if (isAnimating || index === activeSlide) return;
    
    setIsAnimating(true);
    setActiveSlide(index);
    scrollToSlide(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  // Handle manual scroll with scroll snap
  const handleScroll = () => {
    if (!sliderRef.current || isAnimating) return;
    
    const scrollPosition = sliderRef.current.scrollLeft;
    const slideWidth = sliderRef.current.scrollWidth / totalSlides;
    const newIndex = Math.round(scrollPosition / slideWidth);
    
    if (newIndex !== activeSlide && newIndex < totalSlides) {
      setActiveSlide(newIndex);
    }
  };

  return (
    <div className="w-full bg-blue-900 relative overflow-hidden px-22 ">
      {/* Background design elements */}
      <div className="absolute inset-0">
        {/* Larger gradient circle */}
        <div className="absolute -top-1/4 -right-1/3 w-1/4 h-3/4 bg-gradient-to-br from-blue-800 to-transparent rounded-full opacity-30"></div>
        
        {/* Smaller accent circles */}
        <div className="absolute top-1/4 -left-16 w-32 h-32 bg-blue-700 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-tr from-blue-500 to-blue-700 rounded-full blur-md opacity-20"></div>
        
        {/* Dotted pattern */}
        <div className="absolute inset-0 opacity-5" 
             style={{
               backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
               backgroundSize: '20px 20px'
             }}>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left section - Title and description */}
          <div className="w-full lg:w-1/3 text-white mb-8 lg:mb-0 lg:pr-12">
            <h2 className="text-3xl font-bold mb-6">Community members</h2>
            <p className="text-blue-100 mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
            <button className="flex items-center text-white bg-blue-700 hover:bg-blue-600 transition-colors px-6 py-3 rounded-md group">
              <span>Connect now</span>
              <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          
          {/* Right section - Testimonial slider */}
          <div className="w-full lg:w-2/3">
            <div className="relative">
              {/* Testimonial cards - Horizontal scrollable container */}
              <div 
                ref={sliderRef}
                className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  WebkitOverflowScrolling: 'touch'
                }}
                onScroll={handleScroll}
              >
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className={`flex-shrink-0 p-3 snap-start ${
                      visibleCount === 1 ? 'w-full' : 
                      visibleCount === 2 ? 'w-1/2' : 
                      'w-1/3'
                    } min-w-[280px]`}
                  >
                    <div className="bg-white rounded-lg p-6 shadow-lg h-full">
                      {/* Quote mark */}
                      <div className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full mb-4">
                        <img src='/comma.png' className="text-white text-md w-6 h-6 font-serif"/>
                      </div>
                      
                      {/* Testimonial content */}
                      <p className="text-gray-600 mb-6">{testimonial.quote}</p>
                      
                      {/* Person info */}
                      <div className="flex items-center mt-auto">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                          <p className="text-gray-500 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Custom CSS to hide scrollbar but keep functionality */}
              <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              
              {/* Navigation controls */}
              <div className="mt-8 flex items-center justify-between">
                {/* Navigation arrows */}
                <div className="flex space-x-4">
                  <button 
                    onClick={prevSlide}
                    className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                    disabled={isAnimating}
                    aria-label="Previous testimonials"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                    disabled={isAnimating}
                    aria-label="Next testimonials"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
                
                {/* Dots indicator - Only show dots for page groups */}
                <div className="flex items-center space-x-2">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`transition-all duration-300 ${
                        activeSlide === index 
                          ? 'w-8 h-2 bg-white rounded-full' 
                          : 'w-2 h-2 bg-blue-200 rounded-full hover:bg-blue-100'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                      disabled={isAnimating}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;