"use client";
import React, { useState } from "react";

const smallImages = [
  "/Fashion- showroom/1.png",
  "/Fashion- showroom/2.png",
  "/Fashion- showroom/3.png",
  "/Fashion- showroom/4.png",
  "/Fashion- showroom/5.jpg",
];

export default function Fashion2() {
  const [mainImg, setMainImg] = useState("/Personal_webpage/FASHION/23SS Shanghai Fashion Week Showroom.png");

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center py-8 px-2 md:px-12 overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <img src="/Personal_webpage/BACKGROUND/3FASHION.jpg" alt="Fashion BG" className="w-full h-full object-cover" style={{opacity:0.7}} />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      {/* Title and Subtitle */}
      <div className="w-full max-w-7xl mx-auto text-center mb-4 md:mb-8">
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 mt-4 md:mt-8">23SS Shanghai Fashion Week – Trade Show</h1>
        <div className="text-lg md:text-xl text-white font-light">Blooming Showroom (2022)</div>
        <div className="text-lg md:text-xl text-white font-semibold mb-2">Assistant to Manager (Brand Promotion & Buyer Relations)</div>
      </div>
      <Link href="/" className="fixed top-8 left-8 z-20 text-white text-lg font-light tracking-widest hover:underline">
        Home
      </Link>
      {/* Content: Left image, right text */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-start bg-black/60 rounded-2xl shadow-2xl p-4 md:p-12">
        {/* Left: Images */}
        <div className="flex flex-col items-center md:w-[520px] w-full flex-shrink-0">
          <div className="bg-black rounded-xl shadow-2xl mb-4 flex items-center justify-center" style={{ width: "100%", maxWidth: 480, height: 320 }}>
            <img
              src={mainImg}
              alt="Shanghai Fashion Week Main"
              className="object-contain w-full h-full"
              style={{ maxWidth: 480, maxHeight: 320 }}
            />
          </div>
          <div className="flex gap-3 w-full justify-center">
            {smallImages.map((src, idx) => (
              <div key={src} className="bg-black rounded-md flex items-center justify-center" style={{ width: 80, height: 60, flex: "0 0 auto" }}>
                <img
                  src={src}
                  alt={`shanghai${idx+1}`}
                  className={`object-contain w-full h-full cursor-pointer border-2 transition-all duration-200 ${mainImg === src ? "border-pink-300" : "border-transparent"}`}
                  onClick={() => setMainImg(src)}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Right: Text Content */}
        <div className="flex-1 text-white text-sm md:text-base md:pl-8 mt-8 md:mt-0" style={{minWidth: 0}}>
          <p className="mb-4 leading-relaxed">
            In the SS 2023 Shanghai Fashion Week, I served as a core assistant to the Blooming Showroom Manager for two weeks.
          </p>
          <div className="space-y-4">
            <div>
              <span className="inline-block w-4 text-pink-200 align-top">●</span>
              <span className="font-bold">Independent Buyer Hosting</span><br/>
              Selected for the core team based on demonstrated emotional intelligence and communication skills; mastered the styles and order details of 28+ designer brands and guided buyers through showroom tours, fittings, and order negotiations.
            </div>
            <div>
              <span className="inline-block w-4 text-pink-200 align-top">●</span>
              <span className="font-bold">Precise Matching & Atmosphere Creation</span><br/>
              Quickly assessed buyers&apos; needs to recommend brands that fit their market positioning and aesthetic; used engaging dialogue and thoughtful space presentation to enhance buyer experience and brand favorability.
            </div>
            <div>
              <span className="inline-block w-4 text-pink-200 align-top">●</span>
              <span className="font-bold">Efficient Process Coordination</span><br/>
              Coordinated front‑desk buyer reception and designer brand presentations; supported the manager in summarizing order status and buyer feedback to ensure smooth ordering and communication.
            </div>
            <div className="font-bold mt-6">Results</div>
            <div>
              <span className="inline-block w-4 text-pink-200 align-top">●</span>
              Secured multiple orders and enhanced buyers’ comfort, increasing positive sentiment toward the showroom.
            </div>
            <div>
              <span className="inline-block w-4 text-pink-200 align-top">●</span>
              Expanded exposure for designer brands, leading to additional buyer follow‑ups and collaboration invitations.
            </div>
            <div>
              <span className="inline-block w-4 text-pink-200 align-top">●</span>
              Established long‑term trust with key buyers and brand teams, building a pipeline of high‑quality contacts for future projects.
            </div>
            <div className="font-bold mt-6">Key Strengths</div>
            <div>
              <span className="font-bold">Rapid Trust Building</span><br/>
              Leveraged deep brand insights and emotional guidance to quickly earn buyers’ trust and close orders, converting social adaptability into measurable commercial outcomes.
            </div>
            <div>
              <span className="font-bold">Professional Communication Under Pressure</span><br/>
              Maintained clear, organized brand presentations and negotiation flow in a high‑pressure, information‑dense environment, adeptly handling multiple tasks to ensure each buyer received a premium experience.
            </div>
          </div>
        </div>
      </div>
      {/* Navigation Bar at Bottom */}
      <div className="flex justify-between items-center w-full max-w-2xl mx-auto mt-8">
        <Link href="/fashion1" className="text-white bg-pink-700 hover:bg-pink-800 px-4 py-2 rounded transition">Previous</Link>
        <Link href="/fashion3" className="text-white bg-pink-700 hover:bg-pink-800 px-4 py-2 rounded transition">Next</Link>
      </div>
    </div>
  );
} 