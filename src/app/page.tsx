"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
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
      
      // Calculate which section is currently in view
      const currentSection = Math.floor(scrollY / windowHeight);
      
      // Reset all backgrounds
      [homeBg, aboutBg, fashionBg, filmBg, eventBg, cvBg].forEach(bg => {
        if (bg) bg.style.opacity = '0';
      });
      
      // Show the appropriate background
      const backgrounds = [homeBg, aboutBg, fashionBg, filmBg, eventBg, cvBg];
      if (backgrounds[currentSection]) {
        backgrounds[currentSection].style.opacity = '1';
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
                <div className="bg-black rounded-xl shadow-lg w-full flex items-center justify-center" style={{height: '288px'}}>
                <Image
                  src="/Personal_webpage/FASHION/25SS London Fashion Week.jpg"
                  alt="London Fashion Week"
                  width={288}
                  height={288}
                  className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <p className="mt-4 text-lg font-light">25SS London Fashion Week Runway</p>
              </a>
            </div>
            {/* 2. Shanghai Fashion Week */}
            <div className="group cursor-pointer">
              <a href="/fashion2">
                <div className="bg-black rounded-xl shadow-lg w-full flex items-center justify-center" style={{height: '288px'}}>
                <Image
                  src="/Personal_webpage/FASHION/23SS Shanghai Fashion Week Showroom.png"
                  alt="Shanghai Fashion Week"
                  width={288}
                  height={288}
                  className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <p className="mt-4 text-lg font-light">23SS ShangHai Fashion Week Trade Show</p>
              </a>
            </div>
            {/* 3. Luxury Pop-Up */}
            <div className="group cursor-pointer">
              <a href="/fashion4">
                <div className="bg-black rounded-xl shadow-lg w-full flex items-center justify-center aspect-[5/4] overflow-hidden">
                <Image
                  src="/Fashion-Popup store/1.jpg"
                  alt="Luxury Pop-Up Loro Piana"
                  width={288}
                  height={288}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <p className="mt-4 text-lg font-light">Luxury Pop-Up Loro Piana</p>
              </a>
            </div>
            {/* 4. Fashion 1 (Brand Report) */}
            <div className="group cursor-pointer">
              <a href="/fashion1">
                <div className="bg-black rounded-xl shadow-lg w-full flex items-center justify-center" style={{height: '288px'}}>
                <Image
                  src="/Personal_webpage/FASHION/1.jpg"
                  alt="Brand Report-DTC Model（2022）"
                  width={288}
                  height={288}
                  className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <p className="mt-4 text-lg font-light">Brand Report-DTC Model（2022）</p>
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
                <p className="text-base text-white font-light">Nanjing Clay Figure - Clay Whisper（2020）</p>
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
                <p className="text-base text-white font-light">Blispring– Instantly fresh! Ready for flavor emergencies（2021）</p>
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
                <p className="text-base text-white font-light">My Dear Art（2022）</p>
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
                <p className="mt-4 text-lg font-bold">Hengshun Vinegar × Xinhua News Agency</p>
                <p className="text-base text-white font-light">Video Ringback Tone Campaign Film (2020)</p>
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
      <section id="event" className="relative min-h-screen flex items-center justify-center text-white">
        <a href="#home" className="fixed top-8 left-8 z-20 text-white text-lg font-light tracking-widest hover:underline" style={{ fontFamily: 'inherit' }}>Home</a>
        <div className="max-w-2xl mx-auto text-center z-10 relative">
          <h2 className="text-3xl font-light tracking-widest mb-8 mt-16">EVENT</h2>
          <p className="text-lg leading-relaxed">This is the Event section. Add your content here.</p>
        </div>
      </section>

      {/* CV Section */}
      <section id="cv" className="relative min-h-screen flex items-center justify-center text-white">
        <a href="#home" className="fixed top-8 left-8 z-20 text-white text-lg font-light tracking-widest hover:underline" style={{ fontFamily: 'inherit' }}>Home</a>
        <div className="max-w-2xl mx-auto text-center z-10 relative">
          <h2 className="text-3xl font-light tracking-widest mb-8 mt-16">CV</h2>
          <p className="text-lg leading-relaxed">This is the CV section. Add your content here.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative min-h-screen flex items-center justify-center bg-white text-black">
        <a href="#home" className="fixed top-8 left-8 z-20 text-black text-lg font-light tracking-widest hover:underline" style={{ fontFamily: 'inherit' }}>Home</a>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-light tracking-widest mb-8">CONTACT</h2>
          <p className="text-lg leading-relaxed">This is the Contact section. Add your content here.</p>
        </div>
            </section>
    </div>
  );
}