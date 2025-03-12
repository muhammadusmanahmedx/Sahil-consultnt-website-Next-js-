import React from 'react';

const CEOMessageSection = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
        {/* Left Column - CEO Image with Name Banner */}
        <div className="w-full md:w-2/5 relative">
          <div className="relative w-full h-full">
            {/* CEO Image */}
            <div className="relative w-full h-full">
              <img 
                src="/ceo.jpeg" 
                alt="CEO Portrait" 
                className="w-full h-full object-cover brightness-95"
                style={{ height: '600px' }}
              />
            </div>
            
            {/* CEO Name Banner */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#032b66] py-6 text-center text-white">
              <h2 className="text-3xl font-light">Dr. Umar Sahil</h2>
              <p className="text-xl font-light mt-1">The CEO</p>
            </div>
          </div>
        </div>
        
        {/* Right Column - CEO Message */}
        <div className="w-full md:w-3/5 bg-white border border-gray-200">
          <div className="p-8 md:p-12">
            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl font-serif mb-6 text-gray-900">
              CEO Message about business success and growth
            </h1>
            
            {/* Secondary Heading */}
            <h2 className="text-xl md:text-2xl font-serif mb-6 text-gray-800">
              CEO Message
            </h2>
            
            {/* Paragraphs */}
            <div className="space-y-6 text-gray-700">
                
              <p>
              Dear Valued Clients, we believe that opportunities should know no borders. Our mission is to simplify the visa and immigration process, helping individuals and families achieve their dreams of studying, working, or settling abroad. 
              </p>
              
              <p>
              Our team of experienced consultants stays updated with the latest immigration policies and procedures to provide you with accurate and reliable guidance. we are here to turn your aspirations into reality.
              </p>
              
              <p>
              Thank you for trusting Sahil Visa Consultants as your partner in this journey. We look forward to helping you achieve your goals and making your global dreams come true.
              </p>
            </div>
            
            {/* Signature Section */}
            <div className="mt-8 flex flex-col items-end">
              <div className="w-40 h-auto">
                <img 
                  src="/signature.png" 
                  alt="CEO Signature" 
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-gray-800 font-medium mt-2">Dr. Umar Sahil</p>
              <p className="text-gray-600 text-sm">Chief Executive Officer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEOMessageSection;