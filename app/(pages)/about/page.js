
"use client";
import { Card } from "@mui/material";
import ImmigrationServicesSection from "../components/about_immigcomp";
import CEOMessageSection from "../components/ceomessage";
import VisaProcessComponent from "../components/timeline";
import StarIcon from '@mui/icons-material/Star';
import ProfileCircle from "../components/teamcomp";
import TestimonialSection from "../components/testimonials";
// import TravelFAQ from "../components/faq";
import FAQAccordion from "../components/faq";
// import VisaProcess from "../components/timeline";
export default function About(){

    const profilesData = [
        {
          name: 'John Smith',
          designation: 'Senior Consultant',
          image: '/member1.jpg',
        },
        {
          name: 'Jane Doe',
          designation: 'Product Manager',
          image: '/member2.jpg',
        },
        {
          name: 'Emily Davis',
          designation: 'Lead Developer',
          image: '/member3.jpg',
        },
        {
          name: 'Bruce Wayn',
          designation: 'App Developer',
          image: '/member3.jpg',
        }
      ];

    return(
       <div className="lg:mb-[-12rem]">
        <ImmigrationServicesSection/>
        <div className="mt-32">
        <CEOMessageSection/>
        </div>
        <div className="relative mt-32 z-10">
    <h1 className="text-sm text-center text-blue-900">Expert Team Members</h1>
    <h1 className="text-sm mt-2 text-center text-blue-900 flex items-center justify-center">
      <span className="inline-block w-8 mr-2 border-t-1 border-blue-900"></span>
      <StarIcon style={{ color: '#032b66', fontSize: '16px' }} />
      <span className="inline-block ml-2 w-8 border-t-1 border-blue-900"></span>
    </h1>
    <h2 className="sm:text-2xl md:text-4xl p-4 md:p-8 font-bold text-center text-blue-900 mb-6">
      Our Team at Your Service
    </h2>
    <ProfileCircle profiles={profilesData} />
  </div>

        {/* <ProfileCircle profiles={profilesData} /> */}
  <div className="mt-32 bg-blue-900 pb-8 ">
    {/* Larger gradient circle */}
    <div className="absolute -top-1/4 -right3/4 w-/24 h-3/4 bg-gradient-to-br from-blue-800 to-transparent rounded-full opacity-30"></div>
        
        {/* Smaller accent circles */}
        <div className="absolute top-1/4 -left-16 w-32 h-32 bg-blue-700 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-tr from-blue-500 to-blue-700 rounded-full blur-md opacity-20"></div>
    <div className="  pt-12">
  <h1 className="text-sm text-center text-white">OUR TESTIMONIALS</h1>
    <h1 className="text-sm mt-2 text-center text-white flex items-center justify-center">
      <span className="inline-block w-8 mr-2 border-t-1 text-white"></span>
      <StarIcon style={{ color: '#fff', fontSize: '16px' }} />
      <span className="inline-block ml-2 w-8 border-t-1 text-white"></span>
    </h1>
    <h2 className="sm:text-2xl md:text-4xl p-4 md:p-8 font-bold text-center text-white mb-6">
    Let’s Explore<br/> What People Say
    About Our Services
    </h2>
    </div>


    
  <TestimonialSection/>
  </div>

  <div className="mt-32">
    <FAQAccordion/>
  </div>
        </div>
    )
}