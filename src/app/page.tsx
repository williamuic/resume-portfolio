"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

// Event images data
const theaterImages = [
  "/EVENT/1/1.jpg",
  "/EVENT/1/2.jpg",
  "/EVENT/1/3.jpg",
  "/EVENT/1/4.jpg",
  "/EVENT/1/5.jpg",
  "/EVENT/1/6.jpg",
  "/EVENT/1/7.png",
];

const graduationImages = [
  "/EVENT/2/1.jpg",
  "/EVENT/2/2.jpg",
  "/EVENT/2/3.jpg",
  "/EVENT/2/4.jpg",
  "/EVENT/2/5.jpg",
  "/EVENT/2/6.jpg",
  "/EVENT/2/7.jpg",
  "/EVENT/2/8.jpg",
  "/EVENT/2/9.jpg",
];

const starvoiceImages = [
  "/EVENT/3/1.jpg",
  "/EVENT/3/2.jpg",
  "/EVENT/3/3.jpg",
  "/EVENT/3/4.jpg",
  "/EVENT/3/5.jpg",
];

const jinlingImages = [
  "/EVENT/4/1.png",
  "/EVENT/4/2.jpg",
  "/EVENT/4/3.jpg",
  "/EVENT/4/定帧.jpg",
];

export default function Home() {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // Combine all images for navigation
  const allEventImages = [
    ...theaterImages,
    ...graduationImages,
    ...starvoiceImages,
    ...jinlingImages,
  ];

  const handleImageClick = (imageSrc: string) => {
    const imageIndex = allEventImages.findIndex(img => img === imageSrc);
    setCurrentImageIndex(imageIndex);
    setEnlargedImage(imageSrc);
  };

  const closeEnlargedImage = () => {
    setEnlargedImage(null);
  };

  const goToPreviousImage = () => {
    const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : allEventImages.length - 1;
    setCurrentImageIndex(newIndex);
    setEnlargedImage(allEventImages[newIndex]);
  };

  const goToNextImage = () => {
    const newIndex = currentImageIndex < allEventImages.length - 1 ? currentImageIndex + 1 : 0;
    setCurrentImageIndex(newIndex);
    setEnlargedImage(allEventImages[newIndex]);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (enlargedImage) {
        if (e.key === 'ArrowLeft') {
          goToPreviousImage();
        } else if (e.key === 'ArrowRight') {
          goToNextImage();
        } else if (e.key === 'Escape') {
          closeEnlargedImage();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [enlargedImage, currentImageIndex, goToPreviousImage, goToNextImage, closeEnlargedImage]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Get all background elements
      const homeBg = document.getElementById('home-bg');
      const aboutBg = document.getElementById('about-bg');
      const fashionBg = document.getElementById('fashion-bg');
      const filmBg = document.getElementById('film-bg');
      const eventBg = document.getElementById('event-bg');
      const cvBg = document.getElementById('cv-bg');
      
      // Get section positions
      const homeSection = document.getElementById('home');
      const aboutSection = document.getElementById('about');
      const fashionSection = document.getElementById('fashion');
      const filmSection = document.getElementById('film');
      const eventSection = document.getElementById('event');
      const cvSection = document.getElementById('cv');
      
      // Reset all backgrounds
      [homeBg, aboutBg, fashionBg, filmBg, eventBg, cvBg].forEach(bg => {
        if (bg) bg.style.opacity = '0';
      });
      
      // Determine which section is currently in view based on scroll position
      const sections = [
        { element: homeSection, bg: homeBg },
        { element: aboutSection, bg: aboutBg },
        { element: fashionSection, bg: fashionBg },
        { element: filmSection, bg: filmBg },
        { element: eventSection, bg: eventBg },
        { element: cvSection, bg: cvBg }
      ];
      
      let currentBg = homeBg; // default to home
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const sectionTop = section.element.offsetTop;
          if (scrollY >= sectionTop - windowHeight / 3) {
            currentBg = section.bg;
            break;
          }
        }
      }
      
      if (currentBg) {
        currentBg.style.opacity = '1';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="relative min-h-screen w-full" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      {/* Fixed Backgrounds with Transition Effect */}
      <div className="fixed inset-0 w-full h-full z-0">
        {/* Home Background */}
        <div className="absolute inset-0 transition-opacity duration-1000" id="home-bg">
          <Image
            src="/hero.JPG"
            alt="Hero Background"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            style={{ objectPosition: 'center', filter: 'brightness(1.25) contrast(1.1)' }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        {/* About Background */}
        <div className="absolute inset-0 transition-opacity duration-1000 opacity-0" id="about-bg">
          <Image
            src="/Personal_webpage/BACKGROUND/2ABOUT.jpg"
            alt="About Background"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            style={{ objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        {/* Fashion Background */}
        <div className="absolute inset-0 transition-opacity duration-1000 opacity-0" id="fashion-bg">
          <Image
            src="/Personal_webpage/BACKGROUND/3FASHION.jpg"
            alt="Fashion Background"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            style={{ objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        {/* Film Background */}
        <div className="absolute inset-0 transition-opacity duration-1000 opacity-0" id="film-bg">
          <Image
            src="/Personal_webpage/BACKGROUND/4FILM.jpg"
            alt="Film Background"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            style={{ objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        {/* Event Background */}
        <div className="absolute inset-0 transition-opacity duration-1000 opacity-0" id="event-bg">
          <Image
            src="/Personal_webpage/BACKGROUND/5EVENT.jpg"
            alt="Event Background"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            style={{ objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        {/* CV Background */}
        <div className="absolute inset-0 transition-opacity duration-1000 opacity-0" id="cv-bg">
          <Image
            src="/Personal_webpage/BACKGROUND/6CV.webp"
            alt="CV Background"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            style={{ objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>

      {/* Background Image and Home Section */}
      <section id="home" className="relative min-h-screen w-full">

        {/* Vertical Navigation */}
        <nav className="fixed top-8 left-8 z-30 flex flex-col gap-6 items-start">
          <a href="#home" className="text-white text-lg font-light tracking-widest hover:underline" style={{ fontFamily: 'inherit' }}>Home</a>
          <a href="#about" className="text-white text-lg font-light tracking-widest hover:underline" style={{ fontFamily: 'inherit' }}>About</a>
          <a href="#fashion" className="text-white text-lg font-light tracking-widest hover:underline" style={{ fontFamily: 'inherit' }}>Fashion</a>
          <a href="#film" className="text-white text-lg font-light tracking-widest hover:underline" style={{ fontFamily: 'inherit' }}>Film</a>
          <a href="#event" className="text-white text-lg font-light tracking-widest hover:underline" style={{ fontFamily: 'inherit' }}>Event</a>
          <a href="#cv" className="text-white text-lg font-light tracking-widest hover:underline" style={{ fontFamily: 'inherit' }}>CV</a>
          <a href="#contact" className="text-white text-lg font-light tracking-widest hover:underline" style={{ fontFamily: 'inherit' }}>Contact</a>
        </nav>

        {/* Centered Name */}
        <main className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-white text-4xl sm:text-6xl font-light tracking-widest text-center drop-shadow-lg select-none uppercase" style={{ fontFamily: 'inherit', letterSpacing: '0.02em' }}>
            ERI ZHANG
          </h1>
        </main>
      </section>

      {/* About Section */}
      <section id="about" className="relative min-h-screen flex flex-col items-center justify-center text-white">
        <a href="#home" className="fixed top-8 left-8 z-20 text-white text-lg font-light tracking-widest hover:underline" style={{ fontFamily: 'inherit' }}>Home</a>
        <div className="w-full max-w-6xl mx-auto z-10 relative px-2">
          {/* Image + Main Text Row */}
          <div className="flex flex-col md:flex-row items-start gap-28">
            {/* Avatar Rectangle */}
            <div className="flex-shrink-0 w-full md:w-[260px] h-[380px] bg-white/10 rounded-xl overflow-hidden flex items-start justify-center ml-16 mt-0 md:mt-32">
              {/* Desktop spacer to push image down */}
              <div className="hidden md:block" style={{ height: '48px' }} />
              <Image
                src="/IMG_2580.JPG"
                alt="Eri Zhang Avatar"
                width={260}
                height={380}
                className="object-cover w-full h-full"
                style={{ minHeight: '100%', minWidth: '100%' }}
              />
            </div>
            {/* About Text */}
            <div className="flex-[2] text-left md:ml-8 pl-8 md:pl-24 mt-12">
              <h2 className="text-xl md:text-2xl font-bold tracking-widest text-left mb-6" style={{letterSpacing: '0.1em'}}>
                Eri Zhang
              </h2>
              <div className="space-y-7 text-sm md:text-base font-normal leading-relaxed text-justify">
                <p>I&apos;m a London–based creative professional working at the intersection of fashion, film and off-line events.</p>
                <p>With a dual foundation in cinematic storytelling and global brand management, I bridge creative vision and commercial impact for luxury brands. I hold a BA in Film Directing (minor in Event Planning) from Communication University of China, Nanjing, and an MA in Luxury Brand Management (with Merit) from Goldsmiths, University of London. By fusing narrative-driven film techniques with data‑informed, omnichannel marketing strategies, I help brands forge emotional connections and achieve sustainable growth in the digital age.</p>
                <div className="space-y-10">
                  <p>• <span className="text-base md:text-lg font-bold">Award‑Winning Film Director</span><br/>Wrote and directed multiple documentaries and branded shorts, winning three national film competition awards for my ability to translate brand values into compelling visual stories.</p>
                  <p>• <span className="text-base md:text-lg font-bold">High‑Net‑Worth Event Design</span><br/>Conceptualized and delivered 30+ large‑scale events and industry showcases—including a bespoke production at Nanjing Poly Theater and backstage activations at London Fashion Week—managing end‑to‑end guest experiences that resonate emotionally.</p>
                  <p>• <span className="text-base md:text-lg font-bold">Front‑Line Luxury Retail Experience</span><br/>Served as a core promotions assistant at the Loro Piana Pop‑up in Shenzhen and the Blooming Showroom in Shanghai, honing top-tier service etiquette and multitasking skills to drive both sales and brand advocacy.</p>
                  <p>• <span className="text-base md:text-lg font-bold">Fashion Insight & Integrated Model</span><br/>My MA thesis, &quot;The Social Media Word‑of‑Mouth Effect of Luxury Pop‑Ups,” revealed that over 60% of purchase decisions are driven by social buzz. I validated a &quot;Online Hype + Offline Experience + UGC Engagement” framework to activate and engage Gen Z luxury consumers.</p>
                </div>
                <p className="mt-6 font-bold">Expertise: Brand Communication · Creative Campaigns · Film Production · Experiential Marketing</p>
                <p>I&apos;m eager to join a luxury or fashion brand team in film production, brand marketing, creative planning, or communications management—to craft and share the next great brand story.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mb-24" />

      {/* Fashion Section */}
      <section id="fashion" className="relative min-h-screen flex items-center justify-center text-white">
        <a href="#home" className="fixed top-8 left-8 z-20 text-white text-lg font-light tracking-widest hover:underline" style={{ fontFamily: 'inherit' }}>Home</a>
        <div className="max-w-4xl mx-auto text-center z-10 relative px-8">
          <h2 className="text-3xl font-light tracking-widest mb-12 mt-16">FASHION</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* 1. London Fashion Week */}
            <div className="group cursor-pointer">
              <a href="/fashion3">
                <div className="bg-black rounded-xl shadow-lg w-full flex items-center justify-center aspect-[4/3] overflow-hidden">
                <Image
                  src="/Personal_webpage/FASHION/25SS London Fashion Week.jpg"
                  alt="London Fashion Week"
                  width={288}
                  height={216}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <p className="mt-4 text-lg font-light">25SS London Fashion Week Runway</p>
              </a>
            </div>
            {/* 2. Shanghai Fashion Week */}
            <div className="group cursor-pointer">
              <a href="/fashion2">
                <div className="bg-black rounded-xl shadow-lg w-full flex items-center justify-center aspect-[4/3] overflow-hidden">
                <Image
                  src="/Personal_webpage/FASHION/23SS Shanghai Fashion Week Showroom.png"
                  alt="Shanghai Fashion Week"
                  width={288}
                  height={216}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <p className="mt-4 text-lg font-light">23SS ShangHai Fashion Week Trade Show</p>
              </a>
            </div>
            {/* 3. Luxury Pop-Up */}
            <div className="group cursor-pointer">
              <a href="/fashion4">
                <div className="bg-black rounded-xl shadow-lg w-full flex items-center justify-center aspect-[4/3] overflow-hidden">
                <Image
                  src="/Fashion-Popup store/1.jpg"
                  alt="Luxury Pop-Up Loro Piana"
                  width={288}
                  height={216}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <p className="mt-4 text-lg font-light">Luxury Pop-Up Loro Piana</p>
              </a>
            </div>
            {/* 4. Fashion 1 (Brand Report) */}
            <div className="group cursor-pointer">
              <a href="/fashion1">
                <div className="bg-black rounded-xl shadow-lg w-full flex items-center justify-center aspect-[4/3] overflow-hidden">
                <Image
                  src="/Personal_webpage/FASHION/1.jpg"
                  alt="Brand Report - DTC Model（2022）"
                  width={288}
                  height={216}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <p className="mt-4 text-lg font-light">Brand Report - DTC Model（2022）</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Film Section */}
      <section id="film" className="relative min-h-screen flex items-center justify-center text-white">
        <a href="#home" className="fixed top-8 left-8 z-20 text-white text-lg font-light tracking-widest hover:underline" style={{ fontFamily: 'inherit' }}>Home</a>
        <div className="max-w-6xl mx-auto text-center z-10 relative px-8">
          <h2 className="text-3xl font-light tracking-widest mb-12 mt-16">FILM</h2>
          {/* Top row: 3 projects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* 1. Cultural Heritage Documentary */}
            <div className="group cursor-pointer">
              <a href="/film1">
                <div className="bg-black rounded-lg shadow-lg w-full flex items-center justify-center aspect-[16/9] overflow-hidden">
                  <Image src="/Film-图片/Clay Whispers 1.jpg" alt="Film 1" width={300} height={200} className="w-full h-full object-cover" />
                </div>
                <p className="mt-4 text-lg font-bold">Cultural Heritage Documentary</p>
                
              </a>
            </div>
            {/* 2. Brand Ad Films */}
            <div className="group cursor-pointer">
              <a href="/film2">
                <div className="bg-black rounded-lg shadow-lg w-full flex items-center justify-center aspect-[16/9] overflow-hidden">
                  <Image
                    src="/Film-图片/Ad 2.jpg"
                    alt="Brand Ad Films"
                    width={300}
                    height={169}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-lg font-bold">Brand Ad Films</p>
                
              </a>
            </div>
            {/* 3. Music Videos */}
            <div className="group cursor-pointer">
              <a href="/film3">
                <div className="bg-black rounded-lg shadow-lg w-full flex items-center justify-center aspect-[16/9] overflow-hidden">
                  <Image
                    src="/Film-图片/MV3.jpg"
                    alt="Music Videos"
                    width={300}
                    height={169}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-lg font-bold">Music Videos</p>
                
              </a>
            </div>
          </div>
          {/* Bottom row: 2 projects, centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-3xl mx-auto">
            {/* 4. Hengshun Vinegar × Xinhua News Agency */}
            <div className="group cursor-pointer">
              <a href="/film4">
                <div className="bg-black rounded-lg shadow-lg w-full flex items-center justify-center aspect-[16/9] overflow-hidden">
                  <Image
                    src="/Film-图片/Xinhua 4.png"
                    alt="Hengshun Vinegar × Xinhua News Agency"
                    width={300}
                    height={169}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-lg font-bold">Brand Films × Xinhua News Agency</p>
                
              </a>
            </div>
            {/* 5. Commercial Production Assistant */}
            <div className="group cursor-pointer">
              <a href="/film5">
                <div className="bg-black rounded-lg shadow-lg w-full flex items-center justify-center aspect-[16/9] overflow-hidden">
                  <Image
                    src="/Film-图片/Assistant5.jpg"
                    alt="Commercial Production Assistant"
                    width={300}
                    height={169}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-lg font-bold">Commercial Production Assistant</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Event Section */}
      <section id="event" className="relative min-h-screen flex items-center justify-center text-white py-16">
        <a href="#home" className="fixed top-8 left-8 z-20 text-white text-lg font-light tracking-widest hover:underline" style={{ fontFamily: 'inherit' }}>Home</a>
        <div className="max-w-6xl mx-auto z-10 relative px-8">
          <h2 className="text-4xl font-bold tracking-widest mb-12 text-center">EVENT</h2>
          
          {/* On-campus Theater Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-4 text-left">On-campus –1,000-seat Theater (2018–2021)</h3>
            <p className="text-left text-gray-300 mb-6">President of the Student Union Arts Division; overall lead for faculty-level cultural events, including gala nights, film roadshows, and academic talks.</p>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3 mb-12">
              {theaterImages.map((src, idx) => (
                <div
                  key={src}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-white/10 hover:scale-105"
                  onClick={() => handleImageClick(src)}
                >
                  <Image
                    src={src}
                    alt={`Theater ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Oriental Zen Graduation Gala Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-4 text-left">Oriental Zen-Brand Graduation Gala (2021)</h3>
            <p className="text-left text-gray-300 mb-6">Chief Director & On-site Execution Lead</p>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3 mb-12">
              {graduationImages.map((src, idx) => (
                <div
                  key={src}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-white/10 hover:scale-105"
                  onClick={() => handleImageClick(src)}
                >
                  <Image
                    src={src}
                    alt={`Graduation Gala ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* STARVOICE Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-4 text-left">STARVOICE –Children&apos;s Singing Showcase (2020)</h3>
            <p className="text-left text-gray-300 mb-6">Video Console Operator</p>
            <div className="grid grid-cols-4 md:grid-cols-5 gap-3 mb-12">
              {starvoiceImages.map((src, idx) => (
                <div
                  key={src}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-white/10 hover:scale-105"
                  onClick={() => handleImageClick(src)}
                >
                  <Image
                    src={src}
                    alt={`STARVOICE ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Nanjing Jinling Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-4 text-left">Nanjing Jinling Experimental Primary School Performance –Nanjing Poly Grand Theatre (2021)</h3>
            <p className="text-left text-gray-300 mb-6">Member of the directing team; responsible for pre-event coordination and backstage execution.</p>
            <div className="grid grid-cols-4 gap-3">
              {jinlingImages.map((src, idx) => (
                <div
                  key={src}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-white/10 hover:scale-105"
                  onClick={() => handleImageClick(src)}
                >
                  <Image
                    src={src}
                    alt={`Jinling ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section id="cv" className="relative min-h-screen flex items-center justify-center text-white py-16">
        <a href="#home" className="fixed top-8 left-8 z-20 text-white text-lg font-light tracking-widest hover:underline" style={{ fontFamily: 'inherit' }}>Home</a>
        <div className="max-w-4xl mx-auto z-10 relative px-8">
          <h2 className="text-4xl font-bold tracking-widest mb-16 text-center">CV</h2>
          
          {/* Vertical Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500 h-full"></div>
            
            {/* Timeline Items */}
            <div className="space-y-16">
              
              {/* 2020 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-pink-300/30">
                    <div className="text-2xl font-bold text-pink-400 mb-2">2020</div>
                    <h3 className="text-xl font-semibold mb-3">Film Practice & Collaboration</h3>
                    <p className="text-gray-300 leading-relaxed">• Collaborated with classmates skilled in post-production to create high-quality short films such as &lt;Clay Whispers&gt; during my junior year.<br/>• Clay Whispers won First Prize in the National Literary and Artistic Creation Festival (04/2021).<br/><br/><strong>Internship at Xinhua News Agency</strong><br/>• Joined the Jiangsu Center of Xinhua News Agency's News Information Center as a new media content editor (08/2020–01/2021), producing video content and digital media materials.</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-pink-500 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* 2021 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-500 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-300/30">
                    <div className="text-2xl font-bold text-purple-400 mb-2">2021</div>
                    <h3 className="text-xl font-semibold mb-3">Directing – Events – Commercial Shows</h3>
                    <p className="text-gray-300 leading-relaxed">• Directed a commercial for Blispring toothpaste, winning the Bronze Award at the College Awards, China University Students Advertising Festival (08/2021).<br/>• While completing my degree, I served as President of the Student Union Arts Division, leading multiple campus galas and cultural events—greatly enhancing my project planning and team coordination skills.<br/>• In December, independently directed the Oriental Zen Graduation Gala, a commercial brand event that received highly positive feedback.</p>
                  </div>
                </div>
              </div>

              {/* 2022 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-blue-300/30">
                    <div className="text-2xl font-bold text-blue-400 mb-2">2022</div>
                    <h3 className="text-xl font-semibold mb-3">From Film to Fashion Management</h3>
                    <p className="text-gray-300 leading-relaxed">• Directed and edited my graduation film &lt;My Dear Art&gt;, a ten-minute visual tribute to artistic passion.<br/>• Graduated with a BA in Broadcast and Television Editing and Directing, Communication University of China, Nanjing (09/2018–06/2022).<br/>  • Awarded Outstanding Graduate of CUCN<br/>  • Received Outstanding Graduation Design from the School of Broadcast and Television<br/>• Inspired by my passion for aesthetics, visual, and brand storytelling, I transitioned into the field of fashion.<br/>• Participated in the 23SS Shanghai Fashion Week Trade Show at Blooming Showroom (09/2022).<br/>• Completed a research report on DTC strategies in domestic Chinese beauty brands, marking my entry into business and branding studies.</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* 2023 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-indigo-500 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-indigo-300/30">
                    <div className="text-2xl font-bold text-indigo-400 mb-2">2023</div>
                    <h3 className="text-xl font-semibold mb-3">First Steps into the Luxury World</h3>
                    <p className="text-gray-300 leading-relaxed">• Worked from May to July at Loro Piana's Summer Resort Pop-up Store in Shenzhen, gaining first-hand experience in luxury retail, HNW client service, and visual merchandising.<br/>• Enrolled in the MA Luxury Brand Management program at Goldsmiths, University of London (09/2023).</p>
                  </div>
                </div>
              </div>

              {/* 2024 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-300/30">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">2024</div>
                    <h3 className="text-xl font-semibold mb-3">Brand Knowledge & Practical Growth</h3>
                    <p className="text-gray-300 leading-relaxed">• Deepened expertise in marketing, digital communication, project management, and retail technologies throughout the year.<br/>• Completed a dissertation titled &quot;Chinese Consumers' Attitudes Toward Luxury Pop-up Stores and Key Purchase Drivers.&quot;<br/>• Participated in 25SS London Fashion Week runway internship with Helen Anthony, where I practiced styling, improved cross-cultural communication, and contributed backstage photography to enrich the brand's visual archive.</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cyan-500 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* 2025 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-emerald-500 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-emerald-300/30">
                    <div className="text-2xl font-bold text-emerald-400 mb-2">2025</div>
                    <h3 className="text-xl font-semibold mb-3">Master's Graduation & Ongoing Development</h3>
                    <p className="text-gray-300 leading-relaxed">• Graduated with an MA in Luxury Brand Management from Goldsmiths, University of London (09/2023–01/2025).</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative min-h-screen flex items-center justify-center bg-white text-black">
        <a href="#home" className="fixed top-8 left-8 z-20 text-black text-lg font-light tracking-widest hover:underline" style={{ fontFamily: 'inherit' }}>Home</a>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-light tracking-widest mb-8">CONTACT</h2>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12">
            {/* Email */}
            <a 
              href="mailto:Zhangchuqi2023@163.com"
              className="bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-lg font-semibold text-gray-800">Zhangchuqi2023@163.com</div>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/eri-chuqi-zhang"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300 px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-lg font-semibold text-gray-800">www.linkedin.com/in/eri-chuqi-zhang</div>
            </a>
          </div>
        </div>
      </section>

      {/* Enlarged Image Modal */}
      {enlargedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeEnlargedImage}
        >
          <div className="relative max-w-5xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={enlargedImage}
              alt="Enlarged Event Image"
              width={1200}
              height={900}
              className="object-contain w-full h-full rounded-lg"
            />
            
            {/* Close Button */}
            <button
              onClick={closeEnlargedImage}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors duration-300 text-xl"
            >
              ×
            </button>
            
            {/* Previous Button */}
            <button
              onClick={goToPreviousImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/70 transition-colors duration-300 text-xl"
            >
              ‹
            </button>
            
            {/* Next Button */}
            <button
              onClick={goToNextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/70 transition-colors duration-300 text-xl"
            >
              ›
            </button>
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full text-sm">
              {currentImageIndex + 1} / {allEventImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}