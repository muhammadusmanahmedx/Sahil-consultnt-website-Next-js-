'use client';

import React from 'react';
// Import MUI icons
import FlightIcon from '@mui/icons-material/Flight';
import ArticleIcon from '@mui/icons-material/Article';
import ApartmentIcon from '@mui/icons-material/Apartment';
import TranslateIcon from '@mui/icons-material/Translate';

import StarIcon from '@mui/icons-material/Star';

export default function ServicesAndBanner() {
  // Service items data with MUI icons
  const services = [
    {
      icon: <FlightIcon style={{ fontSize: 40, color: '#002664' }} />,
      title: "Visa",
      description: "Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet."
    },
    {
      icon: <ArticleIcon style={{ fontSize: 40, color: '#002664' }} />,
      title: "Passport",
      description: "Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet."
    },
    {
      icon: <ApartmentIcon style={{ fontSize: 40, color: '#002664' }} />,
      title: "Immigration",
      description: "Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet."
    },
    {
      icon: <TranslateIcon style={{ fontSize: 40, color: '#002664' }} />,
      title: "Translation",
      description: "Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet."
    }
  ];

  return (
    <div className="w-full px-6 sm:px-12 lg:px-32">
      {/* Services Section with World Map Background */}
      <div className="relative mx-auto max-w-7xl rounded-3xl bg-white shadow-lg overflow-hidden p-10">
        {/* World Map Background */}
        <img 
          src="/worldmap.png" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            objectFit: "cover",
            zIndex: 0,
          }}
        />

        <div className="relative z-10">
        <h1 className="text-sm text-center text-blue-900">Trusted Partners</h1>
    <h1 className="text-sm mt-2 text-center text-blue-900 flex items-center justify-center">
      <span className="inline-block w-8 mr-2 border-t-1 border-blue-900"></span>
      <StarIcon style={{ color: '#032b66', fontSize: '16px' }} />
      <span className="inline-block ml-2 w-8 border-t-1 border-blue-900"></span>
    </h1>
    <h2 className="sm:text-2xl md:text-4xl p-4 md:p-8 font-bold text-center text-blue-900 mb-6">
Our Services
    </h2>
          {/* Updated 2x2 Grid for Mobile Screens */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="text-blue-900 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blue Banner Section */}
      <div className="bg-blue-900 mt-[-40px] w-full py-20 rounded-3xl shadow-xl">
        <div className="container mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Text Content */}
            <div className="lg:w-3/5 text-white text-center lg:text-left">
              <h4 className="text-sm uppercase tracking-wider mb-2">
                REACH YOUR DREAM
              </h4>
              <div className="flex justify-center lg:justify-start items-center mb-4">
                <div className="w-8 h-0.5 bg-white"></div>
                <div className="w-4 h-0.5 bg-white ml-2"></div>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Get the Right Help
              </h2>
              <p className="mb-6 text-lg">
                Where did this incorrect belief that everyone dislikes praising
                happiness come from? Explain to me how this erroneous theory ended
                up being devised.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
