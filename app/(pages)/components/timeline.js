"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const VisaProcessComponent = () => {
  // State to track if we're at the small breakpoint
  const [isSm, setIsSm] = useState(false);
  
  // Effect to check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      // Using Tailwind's default breakpoints: sm is 640px
      setIsSm(window.innerWidth >= 240 && window.innerWidth < 768);
    };
    
    // Check on mount
    checkScreenSize();
    
    // Check on resize
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const steps = [
    {
      number: 1,
      title: "Choose A Service",
      description: "In a free hour, when our power of choice is untrammeled and",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="6" width="16" height="20" rx="2" stroke="#032b66" strokeWidth="2" />
          <circle cx="16" cy="13" r="5" stroke="#032b66" strokeWidth="2" />
          <path d="M12 20H20" stroke="#032b66" strokeWidth="2" />
          <path d="M12 23H20" stroke="#032b66" strokeWidth="2" />
        </svg>
      ),
      position: "top"
    },
    {
      number: 2,
      title: "Documents And Payments",
      description: "In a free hour, when our power of choice is untrammeled and",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="10" stroke="#032b66" strokeWidth="2" />
          <path d="M16 11V16L19 19" stroke="#032b66" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      position: "bottom"
    },
    {
      number: 3,
      title: "Request A Meeting",
      description: "In a free hour, when our power of choice is untrammeled and",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="9" width="20" height="16" rx="2" stroke="#032b66" strokeWidth="2" />
          <path d="M16 16m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" stroke="#032b66" strokeWidth="2" />
          <path d="M12 7L12 11" stroke="#032b66" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 7L20 11" stroke="#032b66" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      position: "top"
    },
    {
      number: 4,
      title: "Receive Your Visa Now",
      description: "In a free hour, when our power of choice is untrammeled and",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="8" width="20" height="16" rx="2" stroke="#032b66" strokeWidth="2" />
          <path d="M10 14H14" stroke="#032b66" strokeWidth="2" strokeLinecap="round" />
          <path d="M10 18H12" stroke="#032b66" strokeWidth="2" strokeLinecap="round" />
          <path d="M18 14H22" stroke="#032b66" strokeWidth="2" strokeLinecap="round" />
          <path d="M18 18H22" stroke="#032b66" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      position: "bottom"
    },
  ];

  // Line animation controls - separate control for each line
  const line1Controls = useAnimation();
  const line2Controls = useAnimation();
  const line3Controls = useAnimation();
  
  // Event handlers for mouse enter/leave
  const handleMouseEnter = () => {
    // Animate each line sequentially - true drawing animation
    line1Controls.start({
      pathLength: 1,
      opacity: 1,
      transition: { 
        pathLength: { duration: 0.7, ease: "easeInOut" },
        opacity: { duration: 0.2 }
      }
    });
    
    // Delay second line animation
    setTimeout(() => {
      line2Controls.start({
        pathLength: 1,
        opacity: 1,
        transition: { 
          pathLength: { duration: 0.7, ease: "easeInOut" },
          opacity: { duration: 0.2 }
        }
      });
    }, 600);
    
    // Delay third line animation
    setTimeout(() => {
      line3Controls.start({
        pathLength: 1,
        opacity: 1,
        transition: { 
          pathLength: { duration: 0.7, ease: "easeInOut" },
          opacity: { duration: 0.2 }
        }
      });
    }, 1200);
  };
  
  const handleMouseLeave = () => {
    // Reverse animate each line - line drawing in reverse (erasing effect)
    line1Controls.start({
      pathLength: 0,
      transition: { duration: 0.5, ease: "easeInOut" }
    });
    
    line2Controls.start({
      pathLength: 0,
      transition: { duration: 0.5, ease: "easeInOut" }
    });
    
    line3Controls.start({
      pathLength: 0,
      transition: { duration: 0.5, ease: "easeInOut" }
    });
  };

  return (
    <div 
      className="w-full max-w-6xl mx-auto px-4 py-16 bg-white"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="text-center mb-12">
        <h3 className="text-[#032b66] font-medium mb-2 uppercase tracking-wider">WORKING PROCESS</h3>
        <h2 className="text-4xl md:text-5xl font-bold text-[#032b66] mb-8">
          4 Step Follow You Can Get<br />Your Visa Easily
        </h2>
      </div>

      <div className="relative">
        {/* Steps Connection Lines with true drawing animation */}
        <div className="hidden md:block absolute inset-0 z-0">
          <svg 
            width="100%" 
            height="100%" 
            className="absolute inset-0"
          >
            {/* Line from step 1 to step 2 */}
            <motion.line
              x1="12.5%"
              y1="30%"
              x2="37.5%"
              y2="70%"
              stroke="#032b66"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0, opacity: 1 }}
              animate={line1Controls}
            />
            
            {/* Line from step 2 to step 3 */}
            <motion.line
              x1="37.5%"
              y1="70%"
              x2="62.5%"
              y2="30%"
              stroke="#032b66"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0, opacity: 1 }}
              animate={line2Controls}
            />
            
            {/* Line from step 3 to step 4 */}
            <motion.line
              x1="62.5%"
              y1="30%"
              x2="87.5%"
              y2="70%"
              stroke="#032b66"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0, opacity: 1 }}
              animate={line3Controls}
            />
          </svg>
        </div>

        {/* Steps Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col items-center text-center ${
                !isSm && step.position === "bottom" ? "md:mt-32" : ""
              }`}
            >
              {/* For "bottom" positioned steps, show text before icon (except on sm breakpoint) */}
              {step.position === "bottom" && !isSm && (
                <>
                  <h3 className="text-xl text-[#032b66] font-bold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#032b66] text-sm mb-4">
                    {step.description}
                  </p>
                </>
              )}

              <div className="w-20 h-20 mt-20 space-x-32 rounded-full bg-white flex items-center justify-center shadow-lg mb-4 relative">
                <div className="absolute -left-2 -top-2 w-8 h-8 rounded-full bg-[#032b66] flex items-center justify-center text-white font-bold">
                  {step.number}
                </div>
                {step.icon}
              </div>

              {/* For "top" positioned steps, or ANY step on sm breakpoint, show text after icon */}
              {(step.position === "top" || isSm) && (
                <>
                  <h3 className="text-xl mt-4 text-[#032b66] font-bold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#032b66] text-sm">
                    {step.description}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisaProcessComponent;