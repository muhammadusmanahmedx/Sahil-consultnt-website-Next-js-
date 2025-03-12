'use client';

import React, { useState, useRef } from 'react';
import ShareIcon from '@mui/icons-material/Share';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// ShareButton Component
const ShareButton = () => {
  const [showSocialIcons, setShowSocialIcons] = useState(false);
  const containerRef = useRef(null);

  const handleShareMouseEnter = () => {
    setShowSocialIcons(true);
  };

  const handleContainerMouseLeave = () => {
    setShowSocialIcons(false);
  };

  return (
    <div 
      ref={containerRef}
      className="relative flex flex-col items-center mb-4"
      onMouseLeave={handleContainerMouseLeave}
    >
      {/* Social icons - conditionally visible */}
      <div
        className={`flex flex-col items-center space-y-3 transition-all duration-300 ease-in-out ${
          showSocialIcons ? 'opacity-100 mb-3' : 'opacity-0 mb-0 pointer-events-none'
        }`}
      >
        {/* Facebook Icon */}
        <div className="bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100 transition-colors">
          <FacebookIcon style={{ fontSize: 24, color: '#3b5998' }} />
        </div>

        {/* Instagram Icon */}
        <div className="bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100 transition-colors">
          <InstagramIcon style={{ fontSize: 24, color: '#E4405F' }} />
        </div>

        {/* LinkedIn Icon */}
        <div className="bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100 transition-colors">
          <LinkedInIcon style={{ fontSize: 24, color: '#0077b5' }} />
        </div>
      </div>

      {/* Share button circle - always visible */}
      <div
        className="flex items-center justify-center bg-white rounded-full w-12 h-12 shadow-md cursor-pointer hover:bg-gray-100 transition-colors"
        onMouseEnter={handleShareMouseEnter}
      >
        <ShareIcon style={{ fontSize: 16, color: '#4A5568' }} />
      </div>
    </div>
  );
};

// Main ProfileCircle Component
const ProfileCircle = ({ profiles }) => {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {profiles.map((profile, index) => (
        <ProfileItem key={index} profile={profile} />
      ))}
    </div>
  );
};

// Individual ProfileItem Component
const ProfileItem = ({ profile }) => {
  const [isHovered, setIsHovered] = useState(false); // Define hover state for each profile

  return (
    <div
      className="flex items-center justify-center p-8"
    >
      {/* Main circular container - 226px width and 433px height */}
      <div 
        className="relative w-[226px] h-[433px] rounded-full overflow-hidden group"
        style={{
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        }}
        onMouseEnter={() => setIsHovered(true)} // Set hover state on enter
        onMouseLeave={() => setIsHovered(false)} // Reset hover state on leave
      >
        {/* Overlay that fills from top to bottom on hover */}
        <div 
          className={`absolute inset-0 bg-gradient-to-b from-[#032b66] to-[#032b66] transition-transform duration-400 ease-in-out origin-top ${isHovered ? 'scale-y-100 opacity-85' : 'scale-y-0 opacity-0'}`}
        ></div>

        <div className="absolute top-0 left-0 right-0 flex justify-center mt-3">
          {/* Profile image circle */}
          <div className="w-[200px] h-[300px] rounded-full overflow-hidden">
            <img 
              src={profile.image} 
              alt="Profile Image" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content container - positioned at the bottom center */}
        <div className="absolute bottom-8 inset-x-0 flex flex-col items-center text-center z-10">
          {/* Share button component integrated here */}
          <ShareButton />

          {/* Name and designation */}
          <h3 className={`font-bold text-lg mb-1 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-gray-800'}`}>
            {profile.name}
          </h3>
          <p className={`text-sm transition-colors duration-300 ${isHovered ? 'text-white' : 'text-gray-600'}`}>
            {profile.designation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCircle;
