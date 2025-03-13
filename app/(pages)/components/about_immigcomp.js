import React from 'react';
import { CheckCircle } from 'lucide-react';
import StarIcon from '@mui/icons-material/Star';

const ImmigrationServicesSection = () => {
    return (
        <div className="w-full bg-white z-10 py-16 relative overflow-hidden">
            {/* World map background */}
            <div className="absolute inset-0 opacity-5 z-0">
                <img
                    src="/worldmap.png"
                    alt="World map background"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center lg:space-x-8 space-y-8 lg:space-y-0">
                    {/* Traveler Image */}
                    <div className="w-full lg:w-1/5 relative z-10">
                        <img
                            src="/man.png"
                            alt="Traveler with orange luggage"
                            className="max-h-[400px] md:max-h-[600px] object-contain mx-auto"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="w-full lg:w-3/5 relative z-10 space-y-6 max-w-lg text-center lg:text-left">
                        <div className="relative mt-4 z-10">
                            <h1 className="text-sm text-blue-900">WHO WE ARE?</h1>
                            <h1 className="text-sm mt-2 text-blue-900 flex items-center justify-center lg:justify-start">
                                <span className="inline-block w-8 mr-2 border-t-2 border-blue-900"></span>
                                <StarIcon style={{ color: '#032b66', fontSize: '16px' }} />
                                <span className="inline-block ml-2 w-8 border-t-2 border-blue-900"></span>
                            </h1>
                            <h2 className="text-xl md:text-2xl lg:text-4xl py-6 font-bold text-blue-900">
                                Leading firm for immigration services.
                            </h2>
                        </div>

                        <p className="text-gray-600">
                            Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum mattis erat rutrum. Porta semper lacus cursus.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center justify-center lg:justify-start gap-4">
                                <CheckCircle className="text-blue-800 w-6 h-6" />
                                <span className="text-blue-800 font-medium">
                                    Overseas education and study visa consultants.
                                </span>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start gap-4">
                                <CheckCircle className="text-blue-800 w-6 h-6" />
                                <span className="text-blue-800 font-medium">
                                    Top-ranked universities guarantee admissions.
                                </span>
                            </div>
                        </div>

                        <button className="bg-blue-900 text-white px-6 py-3 flex items-center justify-center lg:justify-start gap-2 hover:bg-blue-800 transition-colors">
                            More Details
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>

                    {/* Image Section */}
                    <div className="w-full lg:w-2/5 flex flex-col md:flex-row gap-4">
                        {/* Left Single Image */}
                        <div className="w-full md:w-1/2 lg:w-1/3 relative z-10 overflow-hidden rounded-lg">
                            <img
                                src="/handaeroplane.jpg"
                                alt="Hand holding airplane model"
                                className="w-full h-[250px] md:h-[514px] object-cover hover:scale-110 transition-transform duration-500"
                            />
                        </div>

                        {/* Right Section with Two Images (2x2 Grid on Mobile) */}
                        <div className="w-full md:w-1/2 lg:w-2/3 grid grid-cols-2 md:flex md:flex-col gap-4">
                            <div className="overflow-hidden rounded-lg">
                                <img
                                    src="/touristwithmap.jpg"
                                    alt="Tourists with map"
                                    className="w-full h-[150px] md:h-[350px] object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="overflow-hidden rounded-lg">
                                <img
                                    src="/immigpapers.jpg"
                                    alt="Immigration document with flag"
                                    className="w-full h-[150px] md:h-[150px] object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImmigrationServicesSection;
