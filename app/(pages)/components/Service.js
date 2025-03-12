'use client';

import React from 'react';
// Import MUI icons
import FlightIcon from '@mui/icons-material/Flight';
import ArticleIcon from '@mui/icons-material/Article';
import ApartmentIcon from '@mui/icons-material/Apartment';
import TranslateIcon from '@mui/icons-material/Translate';

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
    <div className="w-full">
      {/* Services Section with World Map Background */}
      <div className="relative mx-32 rounded-2xl bg-white shadow-lg overflow-hidden" 
           style={{ 
             position: 'relative',
             zIndex: 1 
           }}>
        {/* Alternate background approach */}
        <img 
          src="/worldmap.png" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '370%',
            height: '240%',
            objectFit: 'cover',
            opacity: 0.05,
            zIndex: 0
          }}
        />
        
        <div className="container mx-auto  px-4 py-12 relative" style={{ position: 'relative', zIndex: 2 }}>
          <div className="grid grid-cols-1 ml-6 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-start text-start">
                <div className="text-blue-900 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blue Banner with Person */}
      <div className="bg-blue-900 mt-[-46px] w-full">
        <div className="container mx-auto px-4 py-16 relative">
          <div className="flex flex-col lg:flex-row">
            {/* Text Content */}
            <div className="lg:w-1/2 ml-8 text-white lg:pr-8 z-10">
              <div className="mb-6">
                <h4 className="text-sm uppercase tracking-wider mb-2">REACH YOUR DREAM</h4>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-0.5 bg-white"></div>
                  <div className="w-4 h-0.5 bg-white ml-2"></div>
                </div>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Get the Right Help</h2>
              <p className="mb-6">
                Where did this incorrect belief that everyone dislikes praising happiness come from? 
                Explain to me how this erroneous theory ended up being devised.
              </p>
            </div>
            
          



          </div>
        </div>
      </div>
    </div>
  );
}