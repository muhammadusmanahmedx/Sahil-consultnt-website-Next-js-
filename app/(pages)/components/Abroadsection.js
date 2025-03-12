import React from 'react';
import Image from 'next/image';

const StudyAbroadSection = () => {
  const countries = [
    { name: 'United Kingdom', flag: '/uk.png' },
    { name: 'United States', flag: '/usa.png' },
    { name: 'China', flag: '/china.png' },
    { name: 'Australia', flag: '/australia.png' },
  ];

  return (
    <div className="relative w-full bg-blue-900 text-white overflow-hidden">
      {/* Background with wavy borders */}
      <div className="absolute top-0 w-full h-16 bg-white z-10" style={{
        borderBottomLeftRadius: '50% 100%',
        borderBottomRightRadius: '50% 100%',
      }}></div>
      
      <div className="absolute bottom-0 w-full h-16 z-10 bg-white" style={{
        borderTopLeftRadius: '50% 100%',
        borderTopRightRadius: '50% 100%',
      }}></div>
      
      {/* Main content container */}
      <div className="container px-4 py-19 md:py-16 flex flex-col md:flex-row items-center justify-between mx-auto md:ml-8">
        {/* Left side text content - centered on mobile */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 z-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Looking for Quality
            <br />
            <span className="font-light">Education In</span> Abroad?
          </h2>
          
          <p className="my-6 max-w-md mx-auto md:mx-0">
            Where did this incorrect belief that everyone dislikes praising 
            happiness come from? Explain to me how this erroneous theory ended 
            up being devised.
          </p>
          
          {/* Country flags - centered on mobile */}
          <div className="flex justify-center md:justify-start space-x-6 mt-8">
            {countries.map((country) => (
              <div key={country.name} className="flex flex-col items-center">
                <div className="w-14 md:w-16 h-14 md:h-16 rounded-full overflow-hidden border-2 border-white mb-2 relative">
                  <Image
                    src={country.flag}
                    alt={`${country.name} flag`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <span className="text-sm">{country.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right side image - hidden on mobile */}
        <div className="hidden md:block md:w-1/2 relative z-10">
          <div className="relative w-full h-96">
            {/* Student image placeholder */}
          </div>
        </div>
      </div>
      
      {/* Faded background landmark images - hidden on mobile */}
      <div className="absolute inset-0 opacity-15 z-0 hidden md:block">
        <div className="absolute top-1/19 lg:left-1/27 w-105 h-122 hidden md:block">
          <Image src="/eiffel.png" alt="Eiffel Tower" layout="fill" />
        </div>
        <div className="absolute top-0 lg:right-1/4 w-54 h-115 hidden md:block md:right-1/20">
          <Image src="/bigben.png" alt="Big Ben" layout="fill" />
        </div>
        <div className="absolute bottom-1/14 lg:left-1/3 w-100 h-80 hidden md:block md:left-4/10">
          <Image src="/mahal.png" alt="Taj Mahal" layout="fill" />
        </div>
        <div className="absolute bottom-1/17 right-1/94 w-114 h-114 hidden lg:block">
          <Image src="/liberty.png" alt="Statue of Liberty" layout="fill" />
        </div>
      </div>
    </div>
  );
};

export default StudyAbroadSection;