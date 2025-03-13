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
    <div className='w-full'>
      <HeroSection />
      <CEOMessageSection/>
      <div className='mt-22'>
      <Visaslider/>
      
      </div>
      <ServicesAndBanner/>


<div className="mt-32">
        <VisaProcessComponent/>
        </div>

<StudyAbroadSection/>

<PassportDisplay/>

      
    </div>
  );
}
