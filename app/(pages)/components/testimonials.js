"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const sliderRef = useRef(null);

  const testimonials = [
    { id: 1, name: "Michael", role: "Business Owner", image: "/member1.jpg", quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 2, name: "Diane", role: "CMO, Retail+", image: "/member2.jpg", quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 3, name: "Allison", role: "Designer, Portal", image: "/member3.jpg", quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 4, name: "Robert", role: "Developer", image: "/member4.jpg", quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 5, name: "Sarah", role: "Project Manager", image: "/member2.jpg", quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
  ];

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

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.max(1, Math.ceil(testimonials.length / visibleCount));

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeSlide, totalSlides]);

  const scrollToSlide = (slideIndex) => {
    if (!sliderRef.current) return;
    const scrollAmount = (sliderRef.current.scrollWidth / totalSlides) * slideIndex;
    sliderRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    scrollToSlide(activeSlide === totalSlides - 1 ? 0 : activeSlide + 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    scrollToSlide(activeSlide === 0 ? totalSlides - 1 : activeSlide - 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

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
    <div className="w-full bg-blue-900 relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/3 text-white mb-8 lg:mb-0 lg:pr-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Community members</h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt.
            </p>
            <button className="flex items-center text-white bg-blue-700 hover:bg-blue-600 transition-colors px-6 py-3 rounded-md">
              <span>Connect now</span>
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="relative">
              <div
                ref={sliderRef}
                className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  WebkitOverflowScrolling: "touch"
                }}
                onScroll={handleScroll}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className={`flex-shrink-0 p-3 snap-start ${
                      visibleCount === 1 ? "w-full" : visibleCount === 2 ? "w-1/2" : "w-1/3"
                    } min-w-[280px]`}
                  >
                    <div className="bg-white rounded-lg p-6 shadow-lg h-full">
                      <div className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full mb-4">
                        <img src="/comma.png" className="text-white text-md w-6 h-6 font-serif" />
                      </div>
                      <p className="text-gray-600 mb-6">{testimonial.quote}</p>
                      <div className="flex items-center mt-auto">
                        <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                        <div>
                          <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                          <p className="text-gray-500 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

              <div className="mt-6 flex items-center justify-between">
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
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default TestimonialSection;
