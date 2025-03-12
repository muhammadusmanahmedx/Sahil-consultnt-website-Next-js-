import { useState, useEffect, useRef } from 'react';
import Card from '@/app/(pages)/components/Card';
import HeroSection from '@/app/(pages)/components/Hero';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';

// Outlined Icons
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'; // Student Visa
import FlightOutlinedIcon from '@mui/icons-material/FlightOutlined'; // Tourist Visa
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined'; // Business Visa
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined'; // Work Visa

export default function Visaslider() {
  const cardData = [
    {
      type: 'Tourist Visa',
      icon: <FlightOutlinedIcon style={{ fontSize: '40px', color: '#1D4ED8' }} />,
      description: 'Explore new destinations with ease.',
      features: ['Fast processing', 'Affordable fees', 'Global reach'],
      imageUrl: '/tourist.jpg',
    },
    {
      type: 'Work Visa',
      icon: <BadgeOutlinedIcon style={{ fontSize: '40px', color: '#1D4ED8' }} />,
      description: 'Start your career abroad with our work visa solutions.',
      features: ['Long-term validity', 'High approval rate', 'Flexible options'],
      imageUrl: '/work.jpg',
    },
    {
      type: 'Student Visa',
      icon: <SchoolOutlinedIcon style={{ fontSize: '40px', color: '#1D4ED8' }} />,
      description: 'Pursue your education overseas.',
      features: ['Scholarship opportunities', 'Simple process', 'Expert guidance'],
      imageUrl: '/student.jpg',
    },
    {
      type: 'Business Visa',
      icon: <BusinessCenterOutlinedIcon style={{ fontSize: '40px', color: '#1D4ED8' }} />,
      description: 'Expand your business opportunities internationally.',
      features: ['Access to global markets', 'Business meetings', 'Networking events'],
      imageUrl: '/businessmeeting.jpg',
    },
  ];

  const [cards, setCards] = useState([...cardData, ...cardData]);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const autoplayIntervalRef = useRef(null);

  // Breakpoints
  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024
  };

  // Determine cards per row based on screen size
  const getCardsPerRow = () => {
    if (windowWidth < breakpoints.sm) return 1;
    if (windowWidth < breakpoints.lg) return 2;
    return 3;
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      
      // Enable/disable autoplay based on screen size
      if (width >= breakpoints.lg) {
        setAutoplayEnabled(true);
      } else {
        setAutoplayEnabled(false);
        setCurrentTranslate(0);
        setIsTransitioning(false);
      }
    };

    // Set initial width and add event listener
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      handleResize();
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  // Handle autoplay for large screens
  useEffect(() => {
    if (autoplayEnabled) {
      const cardsPerRow = getCardsPerRow();
      const translateAmount = 100 / cardsPerRow;
      
      autoplayIntervalRef.current = setInterval(() => {
        setIsTransitioning(true);
        setCurrentTranslate((prev) => prev - translateAmount);

        setTimeout(() => {
          setIsTransitioning(false);
          setCards((prevCards) => {
            const [firstCard, ...rest] = prevCards;
            return [...rest, firstCard];
          });
          setCurrentTranslate(0);
        }, 1000);
      }, 5000);
    }

    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
    };
  }, [autoplayEnabled]);

  const cardsPerRow = getCardsPerRow();
  const cardWidth = 100 / cardsPerRow;

  return (
    <div className="container ml-8 mx-auto px-4  py-8 ">
      <h1 className="text-sm text-center text-blue-900">VISA CATEGORIES</h1>
      <h1 className="text-sm mt-2 text-center text-blue-900 flex items-center justify-center">
        <span className="inline-block w-8 mr-2 border-t-1 border-blue-900"></span>
        <StarIcon style={{ color: '#032b66', fontSize: '16px' }} />
        <span className="inline-block ml-2 w-8 border-t-1 border-blue-900"></span>
      </h1>
      <h2 className="sm:text-2xl md:text-4xl p-4 md:p-8 font-bold text-center text-blue-900 mb-6">
        Assisting you in fulfilling your eligibility<br />
        for immigrant registration.
      </h2>
      
      {/* Large screens: Show carousel */}
      {windowWidth >= breakpoints.lg && (
        <div className="relative overflow-hidden" style={{ height: '700px' }}>
          <div
            className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-out' : ''}`}
            style={{ transform: `translateX(${currentTranslate}%)` }}
          >
            {cards.map((card, index) => (
              <div 
                key={`card-${index}-${card.type}`} 
                className="flex-none"
                style={{ width: `${cardWidth}%` }}
              >
                <Card
                  {...card}
                  CheckCircleIcon={CheckCircleIcon}
                  ArrowForwardIcon={ArrowForwardIcon}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Medium screens: Show 2 cards per row */}
      {windowWidth >= breakpoints.sm && windowWidth < breakpoints.lg && (
        <div className="grid grid-cols-2 gap-4">
          {cardData.map((card, index) => (
            <Card
              key={`card-md-${index}`}
              {...card}
              CheckCircleIcon={CheckCircleIcon}
              ArrowForwardIcon={ArrowForwardIcon}
            />
          ))}
        </div>
      )}
      
      {/* Small screens: Show 1 card per row */}
      {windowWidth < breakpoints.sm && (
        <div className="flex flex-col space-y-4">
          {cardData.map((card, index) => (
            <Card
              key={`card-sm-${index}`}
              {...card}
              CheckCircleIcon={CheckCircleIcon}
              ArrowForwardIcon={ArrowForwardIcon}
            />
          ))}
        </div>
      )}
    </div>
  );
}