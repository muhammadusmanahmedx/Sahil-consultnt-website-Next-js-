'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

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
      fgImage: "/heropeople.png"
    },
    {
      title: "Achieve Academic Excellence.",
      description: "Join thousands of successful students who have benefited from our experience and expertise in international education.",
      fgImage: "/heropeople.png"
    },
    {
      title: "Your Gateway To Quality Education .",
      description: "We guide you through every step of your educational journey, from application to graduation and beyond.",
      fgImage: "/heropeople.png"
    }
  ];

  // Create infinite carousel by duplicating the first slide at the end
  const slides = [...originalSlides, originalSlides[0]];

  // Handle transition end and reset position for infinite scroll effect
  const handleTransitionEnd = () => {
    if (currentSlide === originalSlides.length) {
      // We've reached the cloned first slide, reset to the real first slide without animation
      setIsTransitioning(true);
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(0);
      }, 0);
    }
  };

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentSlide((prev) => prev + 1);
      }
    }, slideIntervalMs);
    
    return () => clearInterval(interval);
  }, [isTransitioning]);

  // Handle transition state
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Manual slide navigation
  const goToSlide = (index) => {
    if (currentSlide !== index && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(index);
    }
  };

  return (
    <div className="relative w-full h-[900px] bg-[#032b66] overflow-hidden">
      {/* Static Background Image */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="relative w-full h-full opacity-20">
          <Image
            src="/hero.png"
            alt="Background"
            fill
            sizes="70vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    
      {/* Background wavey shape */}
      <div className="absolute bottom-0 z-10 left-0 right-0">
        <svg viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#ffffff"
            d="M0,192L80,186.7C160,181,320,171,480,181.3C640,192,800,224,960,224C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-16 h-full flex flex-col justify-center relative z-10">
        {/* Horizontal Scrolling Container */}
        <div className="overflow-hidden w-full">
          <div 
            ref={carouselRef}
            className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="text-white z-10">
                    {/* Wings and years experience */}
                    <div className="flex items-center mb-6">
                      <div className="flex items-center justify-center">
                        <div className="relative w-16 h-24 md:w-24 md:h-38">
                          <Image
                            src="/wing2.png"
                            alt="30 Years Experience"
                            fill
                            sizes="(max-width: 768px) 64px, 96px"
                            className="object-contain"
                            priority
                          />
                        </div>
                        <span className="text-sm md:text-md ml-2 mt-8">30 Years<br/>Experience</span>
                        <div className="relative w-16 h-24 md:w-24 md:h-38">
                          <Image
                            src="/wing.png"
                            alt="30 Years Experience"
                            fill
                            sizes="(max-width: 768px) 64px, 96px"
                            className="object-contain"
                            priority
                          />
                        </div>
                      </div>
                    </div>

                    <h1 className="text-3xl md:text-[70px] font-bold mb-4">
                      {slide.title}
                    </h1>
                    <p className="mb-8 text-sm">
                      {slide.description}
                    </p>

                    <button
                      className="bg-blue-800 text-white border border-white hover:bg-blue-700 px-6 py-2 transition-colors"
                    >
                      More Details →
                    </button>
                  </div>

                  <div className="relative z-10 hidden md:block">
                    <Image
                      src={slide.fgImage}
                      alt="Students"
                      width={647}
                      height={615}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain"
                      priority
                    />
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