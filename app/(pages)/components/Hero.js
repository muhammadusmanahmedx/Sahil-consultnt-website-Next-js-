'use client';

import { useState, useEffect, useRef } from 'react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);
  const slideIntervalMs = 5000; // Slide changes every 5 seconds
  
  // Slider data
  const originalSlides = [
    {
      title: "Study In Universities Across the Globe.",
      description: "MCS has been recruiting and preparing talented professionals for over twenty years. We provide a unique value proposition to both.",
    },
    {
      title: "Achieve Academic Excellence.",
      description: "Join thousands of successful students who have benefited from our experience and expertise in international education.",
    },
    {
      title: "Your Gateway To Quality Education .",
      description: "We guide you through every step of your educational journey, from application to graduation and beyond.",
    }
  ];

  // Create infinite carousel by duplicating the first slide at the end
  const slides = [...originalSlides, originalSlides[0]];

  // Handle transition end and reset position for infinite scroll effect
  const handleTransitionEnd = () => {
    if (currentSlide === originalSlides.length) {
      // We've reached the cloned first slide, reset to the real first slide without animation
      setIsTransitioning(false);
      setCurrentSlide(0);
    }
  };

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (originalSlides.length + 1));
    }, slideIntervalMs);
    
    return () => clearInterval(interval);
  }, [originalSlides.length]);

  // Set transitioning state when slide changes
  useEffect(() => {
    setIsTransitioning(currentSlide !== 0 || slides.length <= 1);
  }, [currentSlide, slides.length]);

  // Manual slide navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[650px] sm:h-[650px] md:h-[950px] bg-[#032b66] overflow-hidden flex items-center justify-center">
      {/* Static Background Image */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="relative w-full h-full  opacity-20">
          {/* You can keep your background image or remove this */}
          <div style={{ backgroundImage: 'url(/hero.png)', backgroundSize: 'cover', height: '100%' }}></div>
        </div>
      </div>
    
      {/* Background wavey shape - improved wave path */}
      <div className="absolute bottom-0 z-10 left-0 right-0">
        <svg viewBox="0 0 1440 320" className="w-full" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,138.7C672,139,768,181,864,176C960,171,1056,117,1152,117.3C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto mt-[-190px] px-4 md:px-16 flex flex-col items-center relative z-10 max-w-6xl">
        {/* Horizontal Scrolling Container */}
        <div className="overflow-hidden w-full">
          <div 
            ref={carouselRef}
            className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : 'transition-none'}`}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0 flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-center text-center">
                  <div className="text-white z-10 max-w-3xl mx-auto">
                    {/* Wings and years experience */}
                    <div className="flex items-center mb-6 justify-center">
                      <div className="flex items-center justify-center">
                        <div className="relative w-16 h-24 md:w-24 md:h-38">
                          <img
                            src="/wing2.png"
                            alt="30 Years Experience"
                            className="object-contain w-full h-full"
                          />
                        </div>
                        <span className="text-sm md:text-md ml-2 mt-8">30 Years<br/>Experience</span>
                        <div className="relative w-16 h-24 md:w-24 md:h-38">
                          <img
                            src="/wing.png"
                            alt="30 Years Experience"
                            className="object-contain w-full h-full"
                          />
                        </div>
                      </div>
                    </div>

                    <h1 className="text-3xl md:text-[70px] font-bold mb-4">
                      {slide.title}
                    </h1>
                    <p className="mb-8 text-sm md:text-lg mx-auto max-w-2xl">
                      {slide.description}
                    </p>

                    <button
                      className="bg-blue-800 text-white border border-white hover:bg-blue-700 px-6 py-2 transition-colors"
                    >
                      More Details →
                    </button>
                  </div>
                 </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slider dots - only show for original slides, not the clone */}
        <div className="flex justify-center space-x-4 mt-12 relative z-20">
          {originalSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-1 rounded-full transition-all duration-300 transform ${
                currentSlide === index 
                  ? 'bg-white scale-125 shadow-[0_0_10px_rgba(255,255,255,0.7)]' 
                  : 'bg-white/40 hover:bg-white/70 hover:scale-110'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}