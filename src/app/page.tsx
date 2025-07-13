"use client";
import { useEffect } from "react";

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
          <img
            src="/hero.JPG"
            alt="Hero Background"
            className="object-cover w-full h-full"
            style={{ objectPosition: 'center', filter: 'brightness(1.25) contrast(1.1)' }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        {/* About Background */}
        <div className="absolute inset-0 transition-opacity duration-1000 opacity-0" id="about-bg">
          <img
            src="/Personal_webpage/BACKGROUND/2ABOUT.jpg"
            alt="About Background"
            className="object-cover w-full h-full"
            style={{ objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        {/* Fashion Background */}
        <div className="absolute inset-0 transition-opacity duration-1000 opacity-0" id="fashion-bg">
          <img
            src="/Personal_webpage/BACKGROUND/3FASHION.jpg"
            alt="Fashion Background"
            className="object-cover w-full h-full"
            style={{ objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        {/* Film Background */}
        <div className="absolute inset-0 transition-opacity duration-1000 opacity-0" id="film-bg">
          <img
            src="/Personal_webpage/BACKGROUND/4FILM.jpg"
            alt="Film Background"
            className="object-cover w-full h-full"
            style={{ objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        {/* Event Background */}
        <div className="absolute inset-0 transition-opacity duration-1000 opacity-0" id="event-bg">
          <img
            src="/Personal_webpage/BACKGROUND/5EVENT.jpg"
            alt="Event Background"
            className="object-cover w-full h-full"
            style={{ objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        {/* CV Background */}
        <div className="absolute inset-0 transition-opacity duration-1000 opacity-0" id="cv-bg">
          <img
            src="/Personal_webpage/BACKGROUND/6CV.webp"
            alt="CV Background"
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
          <h1 className="text-white text-4xl sm:text-6xl font-light tracking-widest text-center drop-shadow-lg select-none uppercase" style={{ fontFamily: 'inherit', letterSpacing: '0.08em' }}>
            CHUQI ZHANG
          </h1>
        </main>
      </section>

      {/* About Section */}
      <section id="about" className="relative min-h-screen flex items-center justify-center text-white">
        <a href="#home" className="fixed top-8 left-8 z-20 text-white text-lg font-light tracking-widest hover:underline" style={{ fontFamily: 'inherit' }}>Home</a>
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start z-10 relative px-4 gap-24">
          {/* Avatar Rectangle */}
          <div className="flex-shrink-0 w-full md:w-[220px] h-[320px] bg-white/10 rounded-xl overflow-hidden flex items-center justify-center mb-8 md:mb-0">
            <img
              src="/avatar.jpg"
              alt="Eri Zhang Avatar"
              className="object-cover w-full h-full"
              style={{ minHeight: '100%', minWidth: '100%' }}
            />
          </div>
          {/* About Text */}
          <div className="flex-[2] text-left md:ml-8 pl-4 md:pl-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-widest text-center md:text-left mb-8" style={{letterSpacing: '0.1em'}}>
              <span className="font-light">-</span> Eri Zhang <span className="text-pink-200 font-normal" style={{fontWeight: 400}}>(<span className="font-bold">EH‑ree</span>)</span>
            </h2>
            <div className="space-y-4 text-sm md:text-base font-normal leading-relaxed text-justify">
              <p>I&apos;m a London–based creative professional working at the intersection of fashion, film and off-line events.</p>
              <p>With a dual foundation in cinematic storytelling and global brand management, I bridge creative vision and commercial impact for luxury brands. I hold a BA in Film Directing (minor in Event Planning) from Communication University of China, Nanjing, and an MA in Luxury Brand Management (with Merit) from Goldsmiths, University of London. By fusing narrative-driven film techniques with data‑informed, omnichannel marketing strategies, I help brands forge emotional connections and achieve sustainable growth in the digital age.</p>
              <p>• <b>Award‑Winning Film Director</b><br/>Wrote and directed multiple documentaries and branded shorts, winning three national film competition awards for my ability to translate brand values into compelling visual stories.</p>
              <p>• <b>High‑Net‑Worth Event Design</b><br/>Conceptualized and delivered 30+ large‑scale events and industry showcases—including a bespoke production at Nanjing Poly Theater and backstage activations at London Fashion Week—managing end‑to‑end guest experiences that resonate emotionally.</p>
              <p>• <b>Front‑Line Luxury Retail Experience</b><br/>Served as a core promotions assistant at the Loro Piana Pop‑up in Shenzhen and the Blooming Showroom in Shanghai, honing top-tier service etiquette and multitasking skills to drive both sales and brand advocacy.</p>
              <p>• <b>Fashion Insight & Integrated Model</b><br/>My MA thesis, &quot;The Social Media Word‑of‑Mouth Effect of Luxury Pop‑Ups,” revealed that over 60% of purchase decisions are driven by social buzz. I validated a &quot;Online Hype + Offline Experience + UGC Engagement” framework to activate and engage Gen Z luxury consumers.</p>
              <p className="mt-6">Expertise: Brand Communication · Creative Campaigns · Film Production · Experiential Marketing</p>
              <p>I&apos;m eager to join a luxury or fashion brand team in film production, brand marketing, creative planning, or communications management—to craft and share the next great brand story.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fashion Section */}
      <section id="fashion" className="relative min-h-screen flex items-center justify-center text-white">
        <a href="#home" className="fixed top-8 left-8 z-20 text-white text-lg font-light tracking-widest hover:underline" style={{ fontFamily: 'inherit' }}>Home</a>
        <div className="max-w-4xl mx-auto text-center z-10 relative px-8">
          <h2 className="text-3xl font-light tracking-widest mb-12">FASHION</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="group cursor-pointer">
              <a href="/fashion1">
                <img
                  src="/Personal_webpage/FASHION/1.jpg"
                  alt="Fashion 1"
                  className="w-full h-72 object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
                <p className="mt-4 text-lg font-light">Fashion 1</p>
              </a>
            </div>
            <div className="group cursor-pointer">
              <a href="/fashion2">
                <img
                  src="/Personal_webpage/FASHION/23SS Shanghai Fashion Week Showroom.png"
                  alt="Shanghai Fashion Week"
                  className="w-full h-72 object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
                <p className="mt-4 text-lg font-light">Shanghai Fashion Week</p>
              </a>
            </div>
            <div className="group cursor-pointer">
              <a href="/fashion3">
                <img
                  src="/Personal_webpage/FASHION/25SS London Fashion Week.jpg"
                  alt="London Fashion Week"
                  className="w-full h-72 object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
                <p className="mt-4 text-lg font-light">London Fashion Week</p>
              </a>
            </div>
            <div className="group cursor-pointer">
              <a href="/fashion4">
                <img
                  src="/Personal_webpage/FASHION/China Luxury Pop-up thesis.jpg"
                  alt="China Luxury Pop-up"
                  className="w-full h-72 object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
                <p className="mt-4 text-lg font-light">China Luxury Pop-up</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Film Section */}
      <section id="film" className="relative min-h-screen flex items-center justify-center text-white">
        <a href="#home" className="fixed top-8 left-8 z-20 text-white text-lg font-light tracking-widest hover:underline" style={{ fontFamily: 'inherit' }}>Home</a>
        <div className="max-w-6xl mx-auto text-center z-10 relative px-8">
          <h2 className="text-3xl font-light tracking-widest mb-12">FILM</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <a href="/film1">
                <img
                  src="/Personal_webpage/FILM/film 1/Clay Whispers 1-封面.jpg"
                  alt="Clay Whispers"
                  className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
                <p className="mt-4 text-lg font-light">Clay Whispers</p>
              </a>
            </div>
            <div className="group cursor-pointer">
              <a href="/film2">
                <img
                  src="/Personal_webpage/FILM/film2/冰泉广告 英-封面.jpg"
                  alt="冰泉广告"
                  className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
                <p className="mt-4 text-lg font-light">冰泉广告</p>
              </a>
            </div>
            <div className="group cursor-pointer">
              <a href="/film3">
                <img
                  src="/Personal_webpage/FILM/MV.jpg"
                  alt="Music Video"
                  className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
                <p className="mt-4 text-lg font-light">Music Video</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Event Section */}
      <section id="event" className="relative min-h-screen flex items-center justify-center text-white">
        <a href="#home" className="fixed top-8 left-8 z-20 text-white text-lg font-light tracking-widest hover:underline" style={{ fontFamily: 'inherit' }}>Home</a>
        <div className="max-w-2xl mx-auto text-center z-10 relative">
          <h2 className="text-3xl font-light tracking-widest mb-8">EVENT</h2>
          <p className="text-lg leading-relaxed">This is the Event section. Add your content here.</p>
        </div>
      </section>

      {/* CV Section */}
      <section id="cv" className="relative min-h-screen flex items-center justify-center text-white">
        <a href="#home" className="fixed top-8 left-8 z-20 text-white text-lg font-light tracking-widest hover:underline" style={{ fontFamily: 'inherit' }}>Home</a>
        <div className="max-w-2xl mx-auto text-center z-10 relative">
          <h2 className="text-3xl font-light tracking-widest mb-8">CV</h2>
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