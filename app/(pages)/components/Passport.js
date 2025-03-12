import React from 'react';
import StarIcon from '@mui/icons-material/Star';

const PassportDisplay = () => {
  return (
    <div className="relative w-full py-12 bg-white">

<div className="relative mt-20 z-10">
    <h1 className="text-sm text-center text-blue-900">Looking for it</h1>
    <h1 className="text-sm mt-2 text-center text-blue-900 flex items-center justify-center">
      <span className="inline-block w-8 mr-2 border-t-1 border-blue-900"></span>
      <StarIcon style={{ color: '#032b66', fontSize: '16px' }} />
      <span className="inline-block ml-2 w-8 border-t-1 border-blue-900"></span>
    </h1>
    <h2 className="sm:text-2xl md:text-4xl p-4 md:p-8 font-bold text-center text-blue-900 mb-6">
      Get it Now
    </h2>
  </div>
      {/* Background postmarks */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-0">
          <img 
            src="/postmarkleft.png" 
            alt="Postmark" 
            className="w-124 h-114"
          />
        </div>
        <div className="absolute top-70 right-0">
          <img 
            src="/postmarkright.png" 
            alt="Postmark" 
            className="w-184 h-164"
          />
        </div>
      </div>
      
      {/* Centered passport image */}
      <div className="relative flex justify-center mx-auto">
        <div className="relative w-full max-w-4xl flex justify-center">
          <img
            src="/passport1.png"
            alt="United States Passports"
            className="w-full max-w-[834px] h-auto z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default PassportDisplay;