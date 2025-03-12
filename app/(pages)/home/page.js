"use client";
import StudyAbroadSection from '../components/Abroadsection';
import CEOMessageSection from '../components/ceomessage';
import HeroSection from '../components/Hero';
import PassportDisplay from '../components/Passport';
import ServicesAndBanner from '../components/Service';
import ProfileCircle from '../components/teamcomp';
import Visaslider from '../components/Visaslidercomp';
import StarIcon from '@mui/icons-material/Star';
import VisaProcessComponent from '../components/timeline';

export default function Home() {
 
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


  return (
    <div className='lg:mb-[-12rem]'>
      <HeroSection />
      <CEOMessageSection/>
      <div className='mt-22'>
      <Visaslider/>
      
      </div>
      <ServicesAndBanner/>

      {/* <div
  className="container mx-auto  p-4 relative bg-cover bg-center"
  style={{
    backgroundImage: "url('/teambg1.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="absolute inset-0  bg-white opacity-70"></div>
  <div className="relative mt-20 z-10">
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
</div> */}

<div className="mt-32">
        <VisaProcessComponent/>
        </div>

<StudyAbroadSection/>

<PassportDisplay/>

      
    </div>
  );
}
