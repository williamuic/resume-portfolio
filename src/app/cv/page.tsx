"use client";

import Link from "next/link";
import Image from "next/image";

const timelineData = [
  {
    year: "2020",
    title: "Film Practice & Collaboration",
    image: "/CV/1 Clay Whispers.jpg",
    description: [
      "Collaborated with classmates skilled in post-production to create high-quality short films such as <Clay Whispers> during my junior year.",
      "<Clay Whispers> won First Prize in the National Literary and Artistic Creation Festival",
      "Joined the Jiangsu Center of Xinhua News Agency's News Information Center as a new media content editor (08/2020–01/2021), producing video content and digital media materials."
    ]
  },
  {
    year: "2021",
    title: "Directing – Events – Commercial Shows",
    image: "/CV/2 晚会.jpg",
    description: [
      "Completed a research report on DTC strategies in domestic Chinese beauty brands, marking my entry into business and branding studies.",
      "Directed a commercial for Blispring toothpaste, winning the Bronze Award at the College Awards, China University Students Advertising Festival (08/2021).",
      "While completing my degree, I served as President of the Student Union Arts Division, leading multiple campus galas and cultural events—greatly enhancing my project planning and team coordination skills.",
      "In December, independently directed the Oriental Zen Graduation Gala, a commercial brand event that received highly positive feedback.",
      "Internship at Xinhua News Agency (04/2021)."
    ]
  },
  {
    year: "2022",
    title: "From Film to Fashion Management",
    image: "/CV/3 毕设.jpg",
    description: [
      "Directed and edited my graduation film <My Dear Art>, a ten-minute visual tribute to artistic passion.",
      "Graduated with a BA in Broadcast and Television Editing and Directing, Communication University of China, Nanjing (09/2018–06/2022).",
      "Awarded Outstanding Graduate of CUCN",
      "Received Outstanding Graduation Design from the School of Broadcast and Television",
      "Inspired by my passion for aesthetics, visual, and brand storytelling, I transitioned into the field of fashion.",
      "Participated in the 23SS Shanghai Fashion Week Trade Show at Blooming Showroom (09/2022)."
    ]
  },
  {
    year: "2023",
    title: "First Steps into the Luxury World",
    image: "/CV/4 Loro-Piana-Labor.jpeg",
    description: [
      "Worked from May to July at Loro Piana's Summer Resort Pop-up Store in Shenzhen, gaining first-hand experience in luxury retail, HNW client service, and visual merchandising.",
      "Enrolled in the MA Luxury Brand Management program at Goldsmiths, University of London (09/2023)."
    ]
  },
  {
    year: "2024",
    title: "Brand Knowledge & Practical Growth",
    image: "/CV/5 LFW.jpg",
    description: [
      "Deepened expertise in marketing, digital communication, project management, and retail technologies throughout the year.",
      "Completed a dissertation titled \"Chinese Consumers' Attitudes Toward Luxury Pop-up Stores and Key Purchase Drivers.\"",
      "Participated in 25SS London Fashion Week runway internship with Helen Anthony, where I practiced styling, improved cross-cultural communication, and contributed backstage photography to enrich the brand's visual archive."
    ]
  }
];

export default function CV() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Link href="/" className="fixed top-8 left-8 z-20 text-white text-lg font-light tracking-widest hover:underline">
        Home
      </Link>
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold tracking-widest mb-4 text-center">CURRICULUM VITAE</h1>
          <div className="text-lg text-center text-gray-300 mb-16">Career Journey Timeline</div>
          
          {/* Master's Graduation Note */}
          <div className="mb-16 text-center">
            <div className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg px-8 py-4">
              <h3 className="text-xl font-bold mb-2">2025 - Master&apos;s Graduation & Ongoing Development</h3>
              <p className="text-sm">Graduated with an MA in Luxury Brand Management from Goldsmiths, University of London (09/2023–01/2025).</p>
            </div>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 transform -translate-y-1/2 hidden lg:block"></div>
            
            {/* Timeline Items */}
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-16 lg:space-y-0">
              {timelineData.map((item, index) => (
                <div key={item.year} className={`relative lg:w-1/5 ${index % 2 === 0 ? 'lg:mb-0' : 'lg:mt-32'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full border-4 border-pink-500 z-10 hidden lg:block"
                       style={{ top: index % 2 === 0 ? '50%' : 'calc(50% - 8rem)' }}></div>
                  
                  {/* Content Card */}
                  <div className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 shadow-2xl border border-gray-700 hover:border-pink-500 transition-all duration-300 transform hover:scale-105 ${
                    index % 2 === 0 ? 'lg:-mt-64' : 'lg:mt-16'
                  }`}>
                    {/* Year Badge */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-lg font-bold shadow-lg">
                        {item.year}
                      </div>
                    </div>
                    
                    {/* Image */}
                    <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4 mt-4">
                      <Image
                        src={item.image}
                        alt={`${item.year} - ${item.title}`}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-4 text-center text-pink-400">{item.title}</h3>
                    
                    {/* Description */}
                    <div className="space-y-2">
                      {item.description.map((desc, descIndex) => (
                        <p key={descIndex} className="text-sm text-gray-300 leading-relaxed">
                          • {desc}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Timeline Line */}
          <div className="lg:hidden mt-16">
            <div className="flex justify-center">
              <div className="w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500 h-32"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}