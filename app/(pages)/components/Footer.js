// pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Facebook, 
  Twitter, 
  Pinterest, 
  Instagram,
  AccessTime,
  LocationOn,
  Email
} from '@mui/icons-material';

export default function Footer() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Main content would go here */}
      </main>

      <footer className="tracking-wide bg-gradient-to-b from-[#032b66] to-[#001a4d] pt-12 pb-4 px-4 sm:px-10 text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto">
          {/* Company Info Section */}
          <div>
            <div className="flex items-center mb-6">
              <div className="relative w-12 h-12">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                <circle cx="50" cy="50" r="45" fill="#fff" />
                <path d="M30,50 Q50,20 70,50 Q50,80 30,50" stroke="#032b66" strokeWidth="4" fill="none" />
                <path d="M25,50 Q50,10 75,50 Q50,90 25,50" stroke="#032b66" strokeWidth="4" fill="none" />
                <path d="M20,50 Q50,0 80,50 Q50,100 20,50" stroke="#032b66" strokeWidth="4" fill="none" />
              </svg>
              </div>
              <h1 className="text-xl font-bold ml-2">Sahil Travelers</h1>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              We believe it has the power to do<br />amazing things.
            </p>
            <p className="text-gray-400 text-sm flex items-center mb-4">
              <Email className="mr-2" fontSize="small" />
              <span>info@example.com</span>
            </p>
            
            {/* Social Icons */}
            <div className="flex mb-6 space-x-3">
              <Link href="#" className="p-2 rounded-full  hover:bg-[#064a9e] transition-colors">
                <Facebook fontSize="small" />
              </Link>
              <Link href="#" className="p-2 rounded-full  hover:bg-[#064a9e] transition-colors">
                <Twitter fontSize="small" />
              </Link>
              <Link href="#" className="p-2 rounded-full  hover:bg-[#064a9e] transition-colors">
               <Instagram fontSize='small'/>
              </Link>
              <Link href="#" className="p-2 rounded-full  hover:bg-[#064a9e] transition-colors">
                <Pinterest fontSize="small" />
              </Link>
            </div>
          </div>

          {/* Explore Column */}
          <div>
            <h4 className="text-white font-medium text-sm mb-6">Explore</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="hover:text-white text-gray-400 text-sm font-normal transition-all">
                  About
                </Link>
              </li>
              <li>
                <Link href="/experts" className="hover:text-white text-gray-400 text-sm font-normal transition-all">
                  Meet Experts
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white text-gray-400 text-sm font-normal transition-all">
                  News & Media
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white text-gray-400 text-sm font-normal transition-all">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white text-gray-400 text-sm font-normal transition-all">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Visa Column */}
          <div>
            <h4 className="text-white font-medium text-sm mb-6">Visa</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/work-visa" className="hover:text-white text-gray-400 text-sm font-normal transition-all">
                  Work Visa
                </Link>
              </li>
              <li>
                <Link href="/student-visa" className="hover:text-white text-gray-400 text-sm font-normal transition-all">
                  Students Visa
                </Link>
              </li>
              <li>
                <Link href="/business-visa" className="hover:text-white text-gray-400 text-sm font-normal transition-all">
                  Business Visa
                </Link>
              </li>
              <li>
                <Link href="/family-visa" className="hover:text-white text-gray-400 text-sm font-normal transition-all">
                  Family Visa
                </Link>
              </li>
              <li>
                <Link href="/travel-visa" className="hover:text-white text-gray-400 text-sm font-normal transition-all">
                  Travel Visa
                </Link>
              </li>
            </ul>
          </div>

          {/* Address Column */}
          <div>
            <h4 className="text-white font-medium text-sm mb-6">Address:</h4>
            <p className="text-gray-400 text-sm mb-6">
              570 8th Ave, New York,<br />
              NY 10018 United States
            </p>
            
            <h4 className="text-white font-medium text-sm mb-4">Hours:</h4>
            <p className="text-gray-400 text-sm">
              9.30am – 6.30pm<br />
              Monday to Friday
            </p>
          </div>
        </div>

        {/* Instagram Feed - Hidden on smaller screens */}
        {/* <div className="mt-8 max-w-screen-xl mx-auto hidden lg:block">
          <h4 className="text-white font-medium text-sm mb-4">Instagram</h4>
          <div className="grid grid-cols-6 gap-2">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="relative h-16 w-16 overflow-hidden">
                <Image 
                  src={`/images/insta-${index}.jpg`} 
                  alt={`Instagram post ${index}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md hover:opacity-80 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div> */}

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-4 mt-8 max-w-screen-xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 sm:mb-0">
              Copyright © 2024 ShadowLancers (Pvt) Ltd All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/company" className="text-gray-400 text-sm hover:text-white transition-all">
                Company
              </Link>
              <Link href="/support" className="text-gray-400 text-sm hover:text-white transition-all">
                Support
              </Link>
              <Link href="/privacy" className="text-gray-400 text-sm hover:text-white transition-all">
                Privacy
              </Link>
              <Link href="/faqs" className="text-gray-400 text-sm hover:text-white transition-all">
                Faqs
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}